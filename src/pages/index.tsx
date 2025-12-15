import { useCallback, useMemo } from "react";
import { alpha } from "@mui/material/styles";
import { Box, Typography, useTheme, Button } from "@mui/material";
import Header from "../components/header";
import Footer from "../components/footer";
import { useAtom } from "jotai";
import { atom, THEMES } from "../atom/atom";
import { AutoAwesome, PhoneInTalk } from "@mui/icons-material";

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

  }, [])

  const img = useMemo(() => {
    const imgs = [0,1,2,4];
    return imgs[Math.floor(Math.random() * imgs.length)];
  }, [])

  return (
    <Box sx={{
      minHeight: "100vh", 
      display: "flex",
      flexDirection: "column",
      "&::before": {
        content: '""',
        position: "absolute",
        inset: 0,
        zIndex: 0,
        background: `url('/assets/background${img}.jpg') no-repeat center / cover`,
        filter:
          data.theme === THEMES.DARK
            ? "brightness(55%) saturate(110%)"
            : "brightness(140%) contrast(90%) saturate(115%)",
        opacity: data.theme === THEMES.DARK ? 1 : 0.95,
      },
      "&::after": {
        content: '""',
        position: "absolute",
        inset: 0,
        background: "inherit",
        filter:
          data.theme === THEMES.DARK
            ? "brightness(55%) saturate(110%) blur(4px)"
            : "brightness(140%) contrast(90%) saturate(115%) blur(2px)",
            }
    }}>
      <Box sx={{
        position: "relative",
        zIndex: 1,
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}>
        <Header />
        <Box sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          marginLeft: 2,
          marginRight: 2,
        }}>
          <Box sx={{
            maxWidth: 720,
          }}>
            <Typography variant="h1" sx={{
              fontWeight: 500,
              fontSize: 60,
              flexWrap: "wrap",
            }}>Mobile Auto <Box component="span" sx={{ color: "primary.main" }}>Locksmiths</Box> for Car Key Emergencies</Typography>
            <Typography variant="body1" sx={{
              fontWeight: 300,
            }}>Fast, reliable mobile auto locksmith services for all car lock and key emergencies - trusted by drivers across London.</Typography>
          </Box>

          <Button variant="contained" size="large" href={`tel:+${process.env.NEXT_PUBLIC_PHONE_NUMBER}`} onClick={onClickEmergencyCall} sx={{
            marginTop: 3,
            borderRadius: 16,
            paddingRight: 2,
            paddingLeft: 2,
            color: "white",
            boxShadow: (theme) => `0 0 22px ${alpha(theme.palette.primary.main, 0.45)}`,
            "&:hover": {
              boxShadow: (theme) => `0 0 44px ${alpha(theme.palette.primary.main, 0.45)}`,
            },
            "@keyframes clickMe": {
              "0%, 100%": { transform: "translateY(0) scale(1)" },
              "50%": { transform: "translateY(3px) scale(1.04)" },
            },
            animation: "clickMe 1.2s ease-in-out infinite",
            transformOrigin: "center",
            willChange: "transform",
            "&:active": { transform: "translateY(1px) scale(0.98)" },
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
            marginTop: 2,
            borderRadius: 16,
            paddingRight: 2,
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
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}