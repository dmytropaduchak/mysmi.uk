import { FC , memo} from "react";
import { Box, Grid2, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import Animation from "../../components/animation/animation";
import Layout from "../../components/layout/layout";

const HowItWorks: FC = memo(() => {
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
                How it Works
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
                Getting your car key issues sorted is quick and simple. Follow these easy steps to get the service you need
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
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ArrowDropDown />}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: "1.5rem",
                      mb: 1,
                      textAlign: "left",
                    }}
                  >
                    Choose Your Service
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{
                      mb: 2,
                      textAlign: "left",
                    }}
                  >
                    Browse our range of services, such as “All Key Lost,” “Spare Remote Key,” or “Emergency Door Opening,” and select the one that matches your needs. Whether it’s an urgent situation or a planned key replacement, we’ve got you covered.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Animation>

            <Animation direction="left">
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ArrowDropDown />}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: "1.5rem",
                      mb: 1,
                      textAlign: "left",
                    }}
                  >
                    Share Details
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{
                      mb: 2,
                      textAlign: "left",
                    }}
                  >
                    Provide essential information about your car, including its make, model, and year. If it’s an emergency, let us know your current location so we can reach you quickly and efficiently.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Animation>
            <Animation direction="right">
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ArrowDropDown />}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: "1.5rem",
                      mb: 1,
                      textAlign: "left",
                    }}
                  >
                    Get Assistance
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{
                      mb: 2,
                      textAlign: "left",
                    }}
                  >
                    Sit back and relax while our experienced locksmiths take care of the rest. Equipped with the latest tools and expertise, we’ll solve your problem swiftly, ensuring your car is secure and ready to go.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Animation>
          </Grid2>
        </Grid2>
      </Box>
    </Layout>
  )
});


HowItWorks.displayName = "HowItWorks";
export default HowItWorks;