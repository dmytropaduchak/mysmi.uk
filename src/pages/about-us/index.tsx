import { FC , memo} from "react";
import { Box, Button, Grid2, Typography } from "@mui/material";
import Animation from "../../components/animation/animation";
import Layout from "../../components/layout/layout";

const AboutUs: FC = memo(() => {
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
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
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
                About Us
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
                At MySMI.UK, we specialize in providing reliable, professional, and fast car locksmith services.
              </Typography>
            </Animation>
          </Grid2>
          <Grid2
            size={{
              xs: 12,
              md: 12,
            }}
          >
            <Animation direction="left">
              <Typography
                variant="body1"
                color="text.secondary" 
                sx={{
                  mb: 2,
                  textAlign: "left",
                }}
              >
                We understand how frustrating it can be to lose your car keys, get locked out, or face a malfunctioning lock. At MySMI.uk, we provide fast, reliable, and affordable car locksmith services to get you back on the road in no time. Whether it’s a key replacement, lock repair, or emergency assistance, our skilled professionals are here to help 24/7.
              </Typography>
            </Animation>
          </Grid2>
          <Grid2
            size={{
              xs: 12,
              md: 12,
            }}
          >
            <Animation direction="right">
              <Typography
                variant="h2"
                sx={{
                  fontSize: "1.5rem",
                  mb: 1,
                  textAlign: "left",
                }}
              >
                Why Choose MySMI.uk?
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary" 
                sx={{
                  mb: 2,
                  textAlign: "left",
                }}
              >
                Experienced and certified locksmiths
                Quick response times
                Competitive pricing
                Advanced tools for all car makes and models
                Don’t let car lock issues slow you down. Trust MySMI.uk to deliver a seamless experience.

                Call us now at <Button size="small" href="tel:+447516000030"sx={{
                  borderRadius: "20px",
                  paddingLeft: 2,
                  paddingRight: 2,
                }}>+447516000030</Button> for immediate assistance!
              </Typography>
            </Animation>
          </Grid2>
        </Grid2>
      </Box>
    </Layout>
  )
});


AboutUs.displayName = "AboutUs";
export default AboutUs;