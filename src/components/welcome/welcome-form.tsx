import { FC, useEffect, memo, useCallback, useState, useMemo, SyntheticEvent } from "react";
import { useForm, Controller } from "react-hook-form"
import { Switch, FormControlLabel, Paper, Typography, TextField, Button, IconButton, Autocomplete, AutocompleteRenderInputParams, CircularProgress, Box, useTheme, useMediaQuery } from "@mui/material";
import { Place } from "@mui/icons-material";
import { yellow } from "@mui/material/colors";
import { MuiTelInput } from "mui-tel-input";
import Animation from '../animation/animation';
import { useNotification } from "../../utils/state/state";

const SERVICES = [
  'All Key Lost',
  'Spare Remote Key',
  'Emergency Door Opening',
  'Other',
]

interface Option {
  title: string;
  id: string;
}
interface Data {
  name: string;
  phone: string;
  digital: boolean;
  postcode: string;
  registration: string;
  services: string[];
}

const WelcomeForm: FC = memo(() => {
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState<number>(0);
  const theme = useTheme();
  const mdMatch = useMediaQuery(theme.breakpoints.down('md'));
  const notification = useNotification();
  const { register, handleSubmit, control, watch, formState } = useForm<Data>();

  useEffect(() => {
    if (!time) {
      return;
    }

    const interval = setInterval(() => {
      setTime((value) => value - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  const onSubmit = useCallback((data: Data) => {
    setLoading(true);
    fetch('/api/quote', {
      method: 'POST',
      body: JSON.stringify(data),
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Houston, we have a problem");
      }
      return response.json();
    })
    .then(() => {
      notification({
        type: "success",
        text: "Thank you! Your request has been received. Our team will review your details and get back to you with a personalized quote shortly.",
      });
      setLoading(false);
    })
    .catch((error) => {
      notification({
        type: "error",
        text: error.message,
      });
      setLoading(false);
    });
    setTime(5);
  }, [setLoading, setTime, notification]);

  const options = useMemo(() => SERVICES.map((i) => ({
    title: i,
    id: i,
  })), []);

  return (
    <Animation direction="right">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Paper
          elevation={3}
          sx={{
            padding: 3,
            opacity: "0.8",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              lineHeight: 1,
              marginBottom: 1.5,
              fontSize: "1.8rem",
            }}
          >
            {mdMatch ? "AUTOMOTIVE LOCKSMITH" : "INSTANT QUOTE"}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              mb: 2,
              lineHeight: 1,
            }}
          >
            Provide your details to receive a personalized quote.
          </Typography>
          <TextField 
            fullWidth
            size="small"
            label="Your Name"
            variant="outlined"
            sx={{
              mb: 2
            }}
            error={!!formState?.errors.name}
            {...register("name")}
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
                  mb: 2,
                }}
                error={!!formState?.errors.phone}
              />
            )}
          />
          <TextField 
            fullWidth
            size="small"
            label="Post Code"
            variant="outlined"
            sx={{
              mb: 2,
              '.MuiInputBase-root': {
                paddingRight: 1
              },
            }}
            slotProps={{
              input: {
                endAdornment: (
                  <IconButton
                    size="small"
                    edge="end"
                  >
                    <Place fontSize="small" />
                  </IconButton>
                )
              }
            }}
            error={!!formState?.errors.postcode}
            {...register("postcode")}
          />
          <TextField 
            fullWidth
            size="small"
            label="Registration Number"
            variant="outlined"
            sx={{
              mb: 2,
              backgroundColor: yellow[400],
              ".MuiInputBase-root": {
                paddingLeft: 0,
              },
            }}
            slotProps={{
              htmlInput: {
                style: {
                  textTransform: "uppercase",
                },
              },
            }}
            error={!!formState?.errors.registration}
            {...register("registration")}
          />
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
                  mb: 1,
                }}
                getOptionLabel={(option: { title: string; id: string; }) => option.title}
                filterSelectedOptions
                renderInput={(params: AutocompleteRenderInputParams) => (
                  <TextField
                    {...params}
                    error={!!formState?.errors.services}
                    label="Type of Service"
                  />
                )}
              />
            )}
          />
          <FormControlLabel
            control={
              <Switch 
                {...register("digital")}
              />
            }
            sx={{
              width: '100%',
              mb: 1,
            }}
            label={watch("digital") ? "Keyless Entry (Push-Button Start)" : "Traditional Key"}
          />
          <Box sx={{
            display: "flex",
            justifyContent: "space-between",
          }}>
            <Button
              sx={{
                borderRadius: "20px",
                paddingLeft: 2,
                paddingRight: 2,
              }}
              href="/how-it-works"
            >How It Works</Button>

            <Button
              disabled={!!time || loading}
              variant="contained"
              type="submit"
              sx={{
                mr: 1,
                borderRadius: "20px",
              }}
            >
              {time ? (
                <>
                  <CircularProgress
                    size={12}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      ml: 1,
                      textTransform: "none",
                    }}
                  >Please wait {time}s.</Typography>
                </>
              ) : (
                "Get Quote"
              )}
            </Button>
          </Box>
        </Paper>
      </form>
    </Animation>
  )
});

WelcomeForm.displayName = "WelcomeForm";
export default WelcomeForm;