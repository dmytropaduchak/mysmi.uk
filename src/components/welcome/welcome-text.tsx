import { FC, memo } from "react";
import { Button, styled, useMediaQuery, useTheme } from "@mui/material";
import { PhoneOutlined, WhatsApp } from "@mui/icons-material";
import Animation from '../animation/animation';

const Title = styled('div')(({ theme }) => ({
  ...theme.typography.h1,
  lineHeight: 0.8,
  textShadow: "1px 1px 8px black",
  color: "white",
}));

const Description = styled('div')(({ theme }) => ({
  ...theme.typography.h5,
  lineHeight: 1.5,
  textShadow: "1px 1px 21px black",
  color: "white",
}));

const WelcomeText: FC = memo(() => {
  const theme = useTheme();
  const mdMatch = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Animation direction="left">
      {!mdMatch && (
        <>
          <Title
            sx={{
              mb: 2,
              lineHeight: 1,
              letterSpacing: "0.07em",
              fontSize: "2.1rem",
            }}
          >
            CAR KEYS SPECIALIST
          </Title>
          <Description
            sx={{
              mb: 2,
              fontWeight: 100,
              fontSize: "1.2rem",
              lineHeight: 1,
              letterSpacing: "0.03em",
            }}
          >
            Fast & reliable auto locksmith service in Greater London for all car lock & key emergencies
          </Description>
        </>
      )}
      <Button
        sx={{
          borderRadius: "20px",
          marginBottom: 2,
          ...(mdMatch ? {

          } : {
            marginRight: 1,
          })
        }}
        startIcon={<PhoneOutlined  />}
        variant="contained"
        color="primary"
        href="tel:+447516000030"
        {...(mdMatch ? { fullWidth: true } : { fullWidth: false }) }
      >
        Call Us
      </Button>

      <Button
        sx={{
          borderRadius: "20px",
          marginBottom: 2,
          backgroundColor: "#25d366",
        }}
        startIcon={<WhatsApp  />}
        variant="contained"
        color="primary"
        href="https://wa.me/447516000030" 
        target="_blank" 
        rel="noopener noreferrer"
        {...(mdMatch ? { fullWidth: true } : { fullWidth: false }) }
      >
        WhatsApp
      </Button>
    </Animation> 
  )
});

WelcomeText.displayName = "WelcomeText";
export default WelcomeText;