import { AutoAwesome, Close, Place } from "@mui/icons-material";
import { Autocomplete, AutocompleteRenderInputParams, Box, Button, CircularProgress, Dialog, DialogContent, DialogTitle, FormControlLabel, Grid, IconButton, InputAdornment, Radio, RadioGroup, TextField, Typography, useTheme } from "@mui/material";
import { SyntheticEvent, useCallback, useState } from "react"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import { PickerValue } from "@mui/x-date-pickers/internals";
import { Controller, useForm } from "react-hook-form";
import SERVICES from "../services/services.json";
import { MuiTelInput } from "mui-tel-input";
import { blue, yellow } from "@mui/material/colors";
import { useAtom } from "jotai";
import { atom, MESSAGES } from "../atom/atom";

export const SLOTS = [
  { value: "08:00", label: "8:00 am" },
  { value: "09:00", label: "9:00 am" },
  { value: "10:00", label: "10:00 am" },
  { value: "11:00", label: "11:00 am" },
  { value: "12:00", label: "12:00 pm" },
  { value: "13:00", label: "1:00 pm" },
  { value: "14:00", label: "2:00 pm" },
  { value: "15:00", label: "3:00 pm" },
  { value: "16:00", label: "4:00 pm" },
  { value: "17:00", label: "5:00 pm" },
  { value: "18:00", label: "6:00 pm" },
];

const options = [...SERVICES.map((i) => i.name), 'Other'].map((i) => ({
  title: i,
  id: i,
}));

interface Option {
  title: string;
  id: string;
}

interface Values {
  name: string;
  email: string;
  phone: string;
  ignitionType: string;
  postcode: string;
  registration: string;
  services: string[];
}

export default function Booking() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [data, setData] = useAtom(atom);
  const [step, setStep] = useState(0);
  const [time, setTime] = useState(SLOTS[0]);
  const [date, setDate] = useState(dayjs());

  const theme = useTheme();

  const { watch, register, handleSubmit, control, setValue, formState, reset } = useForm<Values>({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  
  const onClickOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const onClickClose = useCallback(() => {
    setOpen(false);
    setStep(0);
    reset();
  }, [setOpen, setStep, reset]);

  const onChange = useCallback((pickerValue: PickerValue) => {
    setDate(pickerValue!);
  }, [setDate]);

  const onClickNext = useCallback(() => {
    setStep(step+1);
  }, [step, setStep]);

  const onClickBack = useCallback(() => {
    setStep(step-1);
  }, [step, setStep]);

  const onClickLocation = useCallback(() => {
    setLoadingLocation(true)
    navigator?.geolocation?.getCurrentPosition(async (position) => {
      try {
        const lat = position?.coords?.latitude;
        const lng = position?.coords?.longitude;

        const locationReq = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`);
        const locationRes = await locationReq.json();

        setValue('postcode', locationRes?.address?.postcode);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingLocation(false);
      }
    });
  }, [setValue, formState, setLoadingLocation]);

  const onSubmit = useCallback(async (values: Values) => {
    console.log({ ...data, date: date.toString(), time: time.value })
    try {
      await fetch('/api/booking', {
        method: 'POST',
        body: JSON.stringify({
          ...values,
          date: date.toString(),
          time: time.value,
        }),
      });
      const messages = [...data.messages, {
        type: MESSAGES.SUCCESS,
        text: "Thanks - we’ve received your booking request. We’ll contact you shortly to confirm availability and your estimated arrival time. If it’s urgent, please call us for the fastest response.",
      }];
      setData({ ...data, messages });
    } catch (err) {
      console.error(err);
      const messages = [...data.messages, {
        type: MESSAGES.ERROR,
        text: "Oops! Something went wrong. Please try again in a moment. If the issue continues, contact us - we'll make sure everything goes smoothly.",
      }];
      setData({ ...data, messages });
    } finally {
      setOpen(false);
      setStep(0);
      reset();
    }
  }, [date, time, data, setData, setOpen, setStep, reset]);

  const slot = time?.label?.toUpperCase()?.split(' ');
  
  const error = useCallback((name: keyof Values) => {
    return !!formState?.errors[name] && formState?.submitCount > 1
  }, [formState]);

  return (
    <>
      <Button variant="outlined" onClick={onClickOpen} sx={{
        borderRadius: 16,
        paddingRight: 3,
        paddingLeft: 2,
        [theme.breakpoints.down('md')]: {
          width: "100%",
        },
      }}>
        <AutoAwesome fontSize="small" sx={{
          marginRight: 1,
        }} /> 
        Quick booking
      </Button>
      <Dialog
        open={open}
        onClose={onClickClose}
        sx={{
          '& .MuiPaper-root': {
            margin: 2,
            maxWidth: "360px",
          },
        }}
      >
        <DialogTitle component="div" sx={{
          padding: 2,
          display: "flex",
        }}>
          <Box sx={{
            marginRight: 2,
          }}>
            <Typography variant="subtitle1" color="secondary" sx={{
              lineHeight: 1
            }}>{date?.format('YYYY')}</Typography>
            <Typography variant="h4" sx={{
              lineHeight: 1
            }}>{date?.format('MMM')} {date?.format('D')}</Typography>
          </Box>
          <Typography variant="h3">{slot?.[0]}</Typography>
          <Typography variant="subtitle1" sx={{
            marginLeft: 1
          }}>{slot?.[1]}</Typography>
        </DialogTitle>
        <IconButton
          onClick={onClickClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <Close fontSize="small" />
        </IconButton>
        <DialogContent sx={{
          overflowX: "hidden",
          padding: 2,
          paddingTop: 0,
        }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {step === 0 && (
              <Box>
                <Typography variant="h6">
                  Select the day you want us to come out
                </Typography>
                <Typography variant="body2" color="secondary">
                  We’re available 7 days a week. If it’s urgent, call us for the fastest help.
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar
                    disablePast
                    views={['day']}
                    minDate={dayjs()}
                    maxDate={dayjs().add(1, 'month').endOf('month')}
                    onChange={onChange}
                    value={date}
                  />
                </LocalizationProvider>
              </Box>
            )}
            {step === 1 && (
              <Box>
                <Typography variant="h6">
                  Select the time that works best for you
                </Typography>
                <Typography variant="body2" color="secondary">
                  Time slots are estimates. We’ll confirm your exact arrival time by phone/text.
                </Typography>
                <Grid container spacing={1} sx={{
                  marginY: 2,
                }}>
                  {SLOTS.map((slot, key) => (
                    <Grid key={key} size={6}>
                      <Button color={time?.value == slot.value ? "primary" : "inherit"} fullWidth onClick={() => {
                        setTime(slot);
                      }} variant={time?.value == slot.value ? "contained" : "outlined"}>
                        {slot.label}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}
            {step === 2 && (
              <Box sx={{
                mb: 2,
              }}>
                <Typography variant="h6">
                  Provide your details to submit a booking request
                </Typography>
                <Typography variant="body2" color="secondary">
                  Please fill in the details below so we can contact you and prepare for your booking.
                </Typography>
                <TextField 
                  fullWidth
                  size="small"
                  label="Your Name"
                  variant="outlined"
                  slotProps={{ inputLabel: { shrink: true } }}
                  sx={{
                    mt: 2
                  }}
                  error={error("name")}
                  {...register("name", { required: true })}
                />
                <TextField 
                  fullWidth
                  size="small"
                  label="Email Address"
                  variant="outlined"
                  slotProps={{ inputLabel: { shrink: true } }}
                  sx={{
                    mt: 2
                  }}
                  error={error("email")}
                  {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i })}
                />
                <Controller
                  name="phone"
                  rules={{
                    required: true,
                  }}
                  control={control}
                  render={({ field }) => (
                    <MuiTelInput
                      {...field}
                      fullWidth
                      size="small"
                      label="Phone Number"
                      defaultCountry="GB"
                      onChange={(value: string) => {
                        field.onChange(value);
                      }}
                      FlagIconButtonProps={{
                        size: "small"
                      }}
                      sx={{
                        ".MuiInputBase-root": {
                          paddingLeft: "8px",
                        },
                        mt: 2,
                      }}
                      error={error("phone")}
                    />
                  )}
                />
                <TextField 
                  fullWidth
                  size="small"
                  label="Post Code"
                  variant="outlined"
                  sx={{
                    mt: 2,
                    '.MuiInputBase-root': {
                      paddingRight: 1
                    },
                  }}
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                    input: {
                      endAdornment: (
                        <IconButton
                          size="small"
                          edge="end"
                          disabled={loadingLocation}
                          onClick={onClickLocation}
                        >
                          {loadingLocation ? (
                            <CircularProgress size={21} />
                          ) : (
                            <Place fontSize="small" />
                          )}
                        </IconButton>
                      )
                    }
                  }}
                  error={error("postcode")}
                  {...register("postcode", { required: true })}
                />
                <TextField 
                  fullWidth
                  size="small"
                  label={null}
                  variant="outlined"
                  sx={{
                    mt: 2,
                    borderRadius: "4px 0 0 4px",
                    backgroundColor: yellow[400],
                    ".MuiInputBase-root": {
                      paddingLeft: 0,
                    },
                  }}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start" sx={{
                          display: "inline-table",
                          backgroundColor: blue[700],
                          color: "white",
                          fontWeight: 600,
                          opacity: 0.8,
                          borderRadius: "4px 0 0 4px",
                          padding: "0 3px",
                        }}>
                          <Box>GB</Box>
                        </InputAdornment>
                      )
                    },
                    htmlInput: {
                      style: {
                        textTransform: "uppercase",
                        color: "black",
                        fontWeight: 600,
                      },
                    },
                  }}
                  error={error("registration")}
                  {...register("registration", { required: true })}
                />
                <RadioGroup 
                  sx={{ mt: 1 }}
                  defaultValue="Traditional Key"
                  {...register("ignitionType")}
                >
                  <FormControlLabel
                    value="Traditional Key"
                    control={(
                      <Radio size="small" />
                    )}
                    label="Traditional Key"
                  />
                  <FormControlLabel
                    value="Keyless Entry (Push-Button Start)"
                    control={(
                      <Radio size="small" />
                    )}
                    label="Keyless Entry (Push-Button Start)"
                  />
                </RadioGroup>
                <Controller
                  name="services"
                  control={control}
                  render={({ field }) => (
                    <Autocomplete
                      multiple
                      size="small"
                      onChange={(ev: SyntheticEvent, value: Option[]) => {
                        const services = value.map(({ title }) => title);
                        field.onChange(services);
                      }}
                      options={options}
                      sx={{
                        mt: 2,
                      }}
                      getOptionLabel={(option: { title: string; id: string; }) => option.title}
                      filterSelectedOptions
                      renderInput={(params: AutocompleteRenderInputParams) => (
                        <TextField
                          {...params}
                          label="Service"
                          slotProps={{ inputLabel: { shrink: true } }}
                        />
                      )}
                    />
                  )}
                />
              </Box>
            )}
            <Box sx={{
              display: "flex",
              gap: 1,
              justifyContent: "center",
              flexWrap: "wrap",
            }}>
              {step == 2 ? (
                <Button
                  variant="contained"
                  type="submit"
                  loading={loading}
                  disabled={loading}
                  sx={{
                    borderRadius: 16,
                    px: 3,
                    width: "100%",
                  }}
                >
                  Submit
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={onClickNext}
                  sx={{
                    borderRadius: 16,
                    px: 3,
                    width: "100%",
                  }}
                >
                  Continue
                </Button>
              )}
              {!!step && (
                <Button
                  variant="outlined"
                  onClick={onClickBack}
                  sx={{
                    borderRadius: 16,
                    px: 3,
                    width: "100%",
                  }}
                >
                  Back
                </Button>
              )}
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}