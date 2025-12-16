import { FC, memo } from "react";
import Grid from "@mui/material/GridLegacy";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";

const HowItWorks: FC = memo(() => {
  const services = [
    {
      title: "Car Key Replacement",
      description:
        "Lost, broken, or stolen keys? We come to you, cut a new key and program it to your car so you can drive again.",
      bullets: [
        "All-keys-lost solutions available",
        "Cut + program on-site (where possible)",
        "Clear advice on best replacement option",
      ],
    },
    {
      title: "Car Unlocking",
      description:
        "Locked out with keys inside or a faulty lock? We regain access quickly using non-destructive entry methods.",
      bullets: ["Fast mobile attendance", "Non-destructive entry where possible", "All car makes and models"],
    },
    {
      title: "Spare Car Keys",
      description:
        "Avoid emergencies later—get a spare key or remote fob programmed to your vehicle for day-to-day peace of mind.",
      bullets: ["Spare keys and remote fobs", "On-site programming", "Ideal before you lose the last key"],
    },
    {
      title: "Ignition Barrel Replacement",
      description:
        "Key won’t turn, ignition is jammed, or the barrel is damaged? We diagnose and repair/replace ignition parts on-site.",
      bullets: ["Fix stuck or broken ignition", "Replace barrels and related parts", "Restore smooth starting"],
    },
    {
      title: "Car Key Programming",
      description:
        "We program transponder chips and remote keys so your car recognises the key and the buttons work correctly.",
      bullets: ["Transponder programming", "Remote/fob programming", "Pairing and testing included"],
    },
    {
      title: "Car Key Repair",
      description:
        "Buttons not working, damaged casing, or worn blade? In many cases we can repair your key to save time and cost.",
      bullets: ["Button and casing repairs", "Blade replacement (where possible)", "Cheaper than full replacement"],
    },
  ];
  const steps = [
    {
      title: "Choose Your Service",
      description:
        "Browse our range of services and select the one that matches your needs. Whether it’s an urgent situation or a planned key replacement, we’ve got you covered.",
    },
    {
      title: "Share Details",
      description:
        "Provide essential information about your car, including its make, model, and year. If it’s an emergency, share your location so we can reach you quickly.",
    },
    {
      title: "Get Assistance",
      description:
        "Sit back and relax while our experienced locksmiths take care of the rest. We’ll solve your problem swiftly and make sure your car is secure and ready to go.",
    },
  ];

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2, md: 4 }, py: { xs: 4, md: 6 } }}>
      <Typography variant="h1" sx={{ mb: 1, textAlign: "center", fontSize: "2.1rem" }}>
        How It Works
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4, textAlign: "center" }}>
        Getting your car key issues sorted is quick and simple. Follow these easy steps to get the service you need.
      </Typography>

      <Grid container spacing={{ xs: 3, md: 6 }} alignItems="flex-start">
        <Grid item xs={12} md={6}>
          <Typography variant="h2" sx={{ fontSize: "1.5rem", mb: 2, textAlign: { xs: "center", md: "left" } }}>
            Services
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2, textAlign: { xs: "center", md: "left" } }}>
            Mobile car locksmith services across the UK—choose what you need and we’ll handle the rest.
          </Typography>

          {services.map((service) => (
            <Accordion key={service.title} defaultExpanded={false} sx={{ mb: 1 }}>
              <AccordionSummary expandIcon={<ArrowDropDown />}>
                <Typography variant="h3" sx={{ fontSize: "1.15rem" }}>
                  {service.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 1.5 }}>
                  {service.description}
                </Typography>
                <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
                  {service.bullets.map((bullet) => (
                    <Box key={bullet} component="li" sx={{ mb: 0.5 }}>
                      <Typography variant="body2" color="text.secondary">
                        {bullet}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h2" sx={{ fontSize: "1.5rem", mb: 2, textAlign: { xs: "center", md: "left" } }}>
            How It Works
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2, textAlign: { xs: "center", md: "left" } }}>
            A simple 3-step process—from choosing a service to getting help at your location.
          </Typography>

          {steps.map((step) => (
            <Accordion key={step.title} defaultExpanded>
              <AccordionSummary expandIcon={<ArrowDropDown />}>
                <Typography variant="h3" sx={{ fontSize: "1.15rem" }}>
                  {step.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="text.secondary">
                  {step.description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
});

export default HowItWorks;
