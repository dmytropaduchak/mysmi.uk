import { FC, memo } from "react";
import Grid from "@mui/material/Grid";
import { Box, Card, Typography } from "@mui/material";
import Layout from "../../components/layout/layout";
import Animation from "../../components/animation/animation";

const TypeOfService: FC = memo(() => {
//   Car Key Replacement
// Car Unlocking
// Spare Car Keys
// Ignition Barrel Replacement
// Car Keys Programming
// Car key repair
  return (
    <Layout>
      <Box sx={{
        maxWidth: "1200px",
        margin: "0 auto",
      }}>
        <Grid
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
          <Grid
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
                Type of Service
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
                At MySMI.UK, we provide a range of professional car locksmith services to meet your needs. Whether you’ve lost all your keys, need a spare remote, or require urgent assistance, we’ve got you covered. Choose from the options below to find the service that best fits your situation.
              </Typography>
            </Animation>
          </Grid>
          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <Animation direction="left">
              <Card sx={{
                padding: 2,
                minHeight: 180,
              }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: "1.5rem",
                    mb: 1,
                    textAlign: "center",
                  }}
                >
                  All Key Lost
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{
                    mb: 2,
                    textAlign: "center",
                  }}
                >
                  Lost all your car keys? No worries! We specialize in creating brand-new keys for your vehicle, even if you don’t have any original keys left. Get back on the road quickly and hassle-free.
                </Typography>
              </Card>
            </Animation>
          </Grid>
          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <Animation direction="left">
              <Card sx={{
                padding: 2,
                minHeight: 180,
              }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: "1.5rem",
                    mb: 1,
                    textAlign: "center",
                  }}
                >
                  Spare Remote Key
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{
                    mb: 2,
                    textAlign: "center",
                  }}
                >
                  Looking for a backup? We provide spare remote keys programmed for your vehicle, ensuring you always have a reliable backup for peace of mind.
                </Typography>
              </Card>
            </Animation>
          </Grid>
          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <Animation direction="left">
              <Card sx={{
                padding: 2,
                minHeight: 180,
              }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: "1.5rem",
                    mb: 1,
                    textAlign: "center",
                  }}
                >
                  Emergency Door Opening
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{
                    mb: 2,
                    textAlign: "center",
                  }}
                >
                  Locked out of your car? Our fast and secure emergency door opening service ensures you’ll regain access to your vehicle without causing any damage.
                </Typography>
              </Card>
            </Animation>
          </Grid>
          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <Animation direction="left">
              <Card sx={{
                padding: 2,
                minHeight: 180,
              }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: "1.5rem",
                    mb: 1,
                    textAlign: "center",
                  }}
                >
                  Other
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{
                    mb: 2,
                    textAlign: "center",
                  }}
                >
                  Have a unique locksmith need? Contact us with details about your specific issue, and our team will assist you with a tailored solution.
                </Typography>
              </Card>
            </Animation>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
});

TypeOfService.displayName = "TypeOfService";
export default TypeOfService;
