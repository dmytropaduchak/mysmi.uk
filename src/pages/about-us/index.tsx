import Header from "../../components/header";
import { atom, THEMES } from "../../atom/atom";
import { Box, Typography, Link } from "@mui/material";
import { useAtom } from "jotai";
import { useCallback, useMemo } from "react";
import Footer from "../../components/footer";

export default function AboutUs() {
  const [data] = useAtom(atom);

  const onClickPhone = useCallback(() => {
    fetch("/api/phonecall", {
      method: "POST",
      keepalive: true,
    });
  }, []);

  const backgroundImage = useMemo(() => {
    return data.theme === THEMES.DARK
      ? 'radial-gradient(circle at 50% 14em, #333333 0%, #222222 60%, #000000 100%)' 
      : 'radial-gradient(circle at 50% 14em, #ffffff 0%, #eeeeee 60%, #cccccc 100%)';
  }, [data]);

  return (
    <Box sx={{
      backgroundImage,
      display: "flex",
      minHeight: "100vh",
      justifyContent: "center",
      flexDirection: "column",
    }}>
      <Header />
      <Box sx={{
        maxWidth: 1200,
        flex: 1,
        mx: "auto",
        paddingLeft: 2,
        paddingRight: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, md: 6 },
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box sx={{ flex: 1, width: "100%" }}>
            <Typography variant="h1"
              sx={{
                mb: 1,
                fontSize: "2.1rem",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              About Us
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 3, textAlign: { xs: "center", md: "left" } }}
            >
              At <Box component="span" sx={{ color: "primary.main" }}>mySMI.uk</Box>, we specialize in providing reliable, professional, and fast car locksmith services.
            </Typography>

            <Typography variant="h2" sx={{ fontSize: "1.5rem", mb: 1 }}>
              Why Choose <Box component="span" sx={{ color: "primary.main" }}>mySMI.uk</Box>?
            </Typography>

            <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
              <Box component="li">Experienced and certified locksmiths</Box>
              <Box component="li">Quick response times</Box>
              <Box component="li">Competitive pricing</Box>
              <Box component="li">Advanced tools for all car makes and models</Box>
            </Box>

            <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
              Don’t let car lock issues slow you down. Trust mySMI.uk to deliver a seamless experience.
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
              Call us now at{" "}
              <Link
                underline="none"
                href={`tel:+${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
                onClick={onClickPhone}
              >
                +447516000030
              </Link>{" "}
              for immediate assistance!
            </Typography>
          </Box>
          <Box sx={{ flex: 1, width: "100%" }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 600,
                  aspectRatio: "4 / 3",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <Box
                  component="iframe"
                  title="mySMI.uk Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d316856.2003943365!2d-0.7367959726104446!3d51.651797093450604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x29f264dc5f821d9f%3A0xb350b2c50987cc16!2sSecure%20Motors%20International%20LTD!5e0!3m2!1sen!2suk!4v1765844638777!5m2!1sen!2suk"
                  loading="lazy"
                  sx={{
                    width: "100%",
                    height: "100%",
                    border: 0,
                    display: "block",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
