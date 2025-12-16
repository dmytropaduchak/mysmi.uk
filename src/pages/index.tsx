import { useCallback, useMemo } from "react";
import { alpha } from "@mui/material/styles";
import { Box, Typography, useTheme, Button, Chip } from "@mui/material";
import Header from "../components/header";
import Footer from "../components/footer";
import { useAtom } from "jotai";
import { atom, THEMES } from "../atom/atom";
import { AutoAwesome, PhoneInTalk, SecurityOutlined } from "@mui/icons-material";
import Head from "next/head";

export default function Page() {
  const theme = useTheme();

  const [data] = useAtom(atom);

  const onClickEmergencyCall = useCallback(() => {
    fetch("/api/phonecall", {
      method: "POST",
      keepalive: true,
    });
  }, []);

  const onClickQuickBooking = useCallback(() => {

  }, []);

  const img = useMemo(() => {
    const imgs = [0,1,2,4];
    return imgs[Math.floor(Math.random() * imgs.length)];
  }, []);

 return (
    <>
      <Head>
        <title>Trusted Mobile Auto Locksmith Service | mySMI.uk</title>
        <meta name="description" content="Locked out or lost your car keys? mySMI.uk provides fast, reliable, and professional mobile auto locksmith services. Available 24/7." />
        <meta name="keywords" content="emergency car lockout, locksmith service, car locksmith, auto locksmith, car key replacement, emergency locksmith, emergency car unlocking, car lockout service, open car fast, locked keys in car, fast auto locksmith, urgent car door opening, 24/7 car locksmith, mobile car unlocking, broken key removal, quick vehicle access, keyless car entry service" />
        
        <meta property="og:title" content="Trusted Mobile Auto Locksmith Service | mySMI.uk"/>
        <meta property="og:description" content="Locked out or lost your car keys? mySMI.uk provides fast, reliable, and professional mobile auto locksmith services. Available 24/7."/>
        <meta property="og:url" content="https://www.mysmi.uk/"/>
        <meta property="og:type" content="website"/>
      </Head>
      <Box sx={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background: `url('/assets/background${img}.jpg') no-repeat center / cover`,
          filter: "brightness(55%) saturate(110%) grayscale(100%) blur(4px)",
          transform: "scale(1.06)",
          opacity: data.theme === THEMES.DARK ? 1 : 0.95,
        },
      }}>
        <Box sx={(theme) => ({
          position: "relative",
          zIndex: 1,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          ...(data.theme === THEMES.LIGHT && {
            color: theme.palette.common.white,
            "& .MuiTypography-root": {
              color: theme.palette.common.white,
            },
            "& .MuiLink-root": {
              color: theme.palette.common.white,
            },
            "& .MuiIconButton-root": {
              color: theme.palette.common.white,
            },
            "& .MuiChip-root": {
              color: theme.palette.common.white,
              borderColor: alpha(theme.palette.common.white, 0.55),
            },
            "& .MuiChip-icon": {
              color: theme.palette.common.white,
            },
            "& .MuiTypography-root.MuiTypography-colorSecondary": {
              color: "#a1a1a1",
            },
            "& .MuiLink-root.MuiLink-colorSecondary": {
              color: "#a1a1a1",
            },
            "& .MuiIconButton-root.MuiIconButton-colorSecondary": {
              color: "#a1a1a1",
            },
            "& .MuiButton-textSecondary": {
              color: "#a1a1a1",
            },
            "& .MuiButton-textSecondary svg": {
              color: "#a1a1a1",
            },
            "& .MuiButton-outlinedSecondary": {
              color: "#a1a1a1",
              borderColor: alpha("#a1a1a1", 0.55),
            },
            "& .MuiButton-outlinedSecondary:hover": {
              borderColor: alpha("#a1a1a1", 0.85),
              backgroundColor: alpha("#a1a1a1", 0.08),
            },
            "& .MuiChip-root.MuiChip-colorSecondary": {
              color: "#a1a1a1",
              borderColor: alpha("#a1a1a1", 0.55),
            },
            "& .MuiChip-root.MuiChip-colorSecondary .MuiChip-icon": {
              color: "#a1a1a1",
            },
          }),
        })} >
          <Header />
          <Box sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            paddingLeft: 2,
            paddingRight: 2,
          }}>
            <Box sx={{
              maxWidth: 720,
              position: "relative"
            }}>
              <Box sx={{
                position: "absolute",
                left: 0,
                top: -32,
              }}>
                <Chip
                  label="Trusted UK Auto Locksmith Experts"
                  color="secondary"
                  variant="outlined"
                  icon={<SecurityOutlined fontSize="small"/>}
                />
              </Box>
              <Typography variant="h1" sx={{
                fontWeight: 500,
                fontSize: 60,
                flexWrap: "wrap",
              }}>
                Mobile Auto <Box component="span" sx={{ color: "primary.main" }}>Locksmiths</Box> for Car Key Emergencies  
              </Typography>

              <Typography variant="body1" sx={{
                fontWeight: 300,
              }}>Fast, reliable mobile auto locksmith services for all car lock and key emergencies - trusted by drivers across Greater London, Hertfordshire and Buckinghamshire.</Typography>
            </Box>
            <Box sx={{
              marginTop: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              [theme.breakpoints.down('md')]: {
               flexDirection: "column",
               width: "100%"
              },
            }}>
              <Button variant="contained" size="large" href={`tel:+${process.env.NEXT_PUBLIC_PHONE_NUMBER}`} onClick={onClickEmergencyCall} sx={{
                borderRadius: 16,
                paddingRight: 2,
                paddingLeft: 2,
                // marginBottom: 2,
                color: "white",
                boxShadow: (theme) => `0 0 22px ${alpha(theme.palette.primary.main, 0.45)}`,
                "&:hover": {
                  boxShadow: (theme) => `0 0 44px ${alpha(theme.palette.primary.main, 0.45)}`,
                },
                "@keyframes clickMe": {
                  "0%, 100%": { transform: "scale(1)" },
                  "50%": { transform: "scale(1.05)" },
                },
                animation: "clickMe 1.2s ease-in-out infinite",
                transformOrigin: "center",
                willChange: "transform",
                "&:active": { transform: "scale(0.98)" },
                [theme.breakpoints.down('md')]: {
                  width: "100%",
                },
              }}>
                <PhoneInTalk fontSize="small" sx={{
                  marginRight: 1,
                }} /> 
                Emergency call
              </Button>

              <Button variant="outlined" size="large" onClick={onClickQuickBooking} sx={{
                borderRadius: 16,
                paddingRight: 2,
                paddingLeft: 2,
                marginLeft: 2,
                [theme.breakpoints.down('md')]: {
                  width: "100%",
                  marginLeft: 0,
                  marginTop: 2,
                },
              }}>
                <AutoAwesome fontSize="small" sx={{
                  marginRight: 1,
                }} /> 
                Quick booking
              </Button>
            </Box>
          </Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
}
