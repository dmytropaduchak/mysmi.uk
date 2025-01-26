import { FC, memo, useState, useEffect, useCallback } from "react";
import { Box, Grid2, TextField, Typography, Button, CircularProgress } from "@mui/material";
import { useForm } from "react-hook-form"
import { useNotification } from "../utils/state/state";
import Animation from "../components/animation/animation";
import Layout from "../components/layout/layout";

interface Data {
  email: string;
  message: string;
}

const ContactUs: FC = memo(() => {
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState<number>(0);
  const notification = useNotification();
  const { register, handleSubmit, formState } = useForm<Data>();

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
    fetch('/api/contact', {
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
        text: "Your message has been successfully sent. Thank you for reaching out to us!",
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

  return (
    <Layout>
      <Box sx={{
        maxWidth: "1200px",
        margin: "0 auto",
      }}>
        <Grid2
          container
          spacing={2}
          direction="row"
          sx={{
            display: "flex",
            alignContent: "center",
            padding: '8px',
            minHeight: "100vh",
          }}
        >
          <Grid2
            size={{
              xs: 12,
              md: 12,
            }}
          >
            <Animation direction="left">
              <Typography
                variant="h1"
                sx={{
                  mb: 1,
                  textAlign: "center",
                  fontSize: "2.1rem",
                }}
              >
                Contact Us
              </Typography>
            </Animation>
            <Animation direction="right">
              <Typography
                variant="body1"
                color="text.secondary" 
                sx={{
                  mb: 2,
                  textAlign: "center",
                }}
              >
                Got a question or need assistance? We’re here to help!
              </Typography>
            </Animation>
          </Grid2>
          <Grid2 size={{ xs: 'grow', md: 6 }} offset={{ md: 3 }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField 
                fullWidth
                size="small"
                label="Your Email Address"
                variant="outlined"
                sx={{
                  mb: 2
                }}
                error={!!formState?.errors.email}
                {...register("email", {
                  required: true,
                })}
              />
              <TextField 
                fullWidth
                multiline
                maxRows={4}
                rows={4}
                size="small"
                label="Your Message"
                variant="outlined"
                sx={{
                  mb: 2
                }}
                error={!!formState?.errors.message}
                {...register("message", {
                  required: true,
                })}
              />
              <Button
                disabled={!!time || loading}
                fullWidth
                variant="outlined"
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
                  "Submit"
                )}
              </Button>
            </form>
          </Grid2>
        </Grid2>
        
        <Grid2
          container
          spacing={2}
          direction="row"
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "space-between",
            padding: "8px",
          }}
        >
          <Grid2
             size={{
              xs: 12,
              md: 6,
            }}
          >
            <Typography
              variant="overline"
              sx={{
                mb: 2,
                textAlign: "center",
              }}
            >
              Copyright © {new Date().getFullYear()} MySMI.UK
            </Typography>
          </Grid2>
        </Grid2>
      </Box>
    </Layout>
  )
});


ContactUs.displayName = "ContactUs";
export default ContactUs;