import { FC, memo, ReactNode, useEffect, useState } from "react";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Head from "next/head";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/200.css";
import "@fontsource/roboto/100.css";
import { usePalette } from "../../utils/state/state";
import Fallback from "../fallback/fallback";
import Header from "../header/header";
import Footer from "../footer/footer";
import Notification from "../notification/notification";

interface Props {
  background?: boolean;
  children: ReactNode;
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "MySMI.UK",
  "url": "https://mysmi.uk",
  "telephone": "+44 7516 000030",
  "hasMap": "https://www.google.com/maps/place/MySMI.UK",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "London",
    "addressRegion": "London",
    "addressCountry": "UK"
  },
  "serviceType": "Car Locksmith",
};

const Layout: FC<Props> = memo(({ background, children }) => {
  const palette = usePalette();

  const theme = createTheme({ palette });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>MySMI.UK</title>
        <meta name="description" content="Get reliable car locksmith services near you. Fast, affordable, and professional automotive locksmith solutions." />
        <meta name="apple-mobile-web-app-title" content="smi.uk" />
        <meta 
          name="keywords" 
          content="car locksmith, auto locksmith, car key replacement, emergency locksmith, mobile locksmith, emergency car unlocking, car lockout service, open car fast, locked keys in car, fast auto locksmith, urgent car door opening, 24/7 car locksmith, mobile car unlocking, broken key removal, quick vehicle access, keyless car entry service" 
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="MySMI.UK - Your Trusted Car Locksmith Solution" />
        <meta property="og:description" content="Professional car locksmith services. Get help now!" />
        <meta property="og:url" content="https://mysmi.uk" />
        <meta property="og:type" content="website" />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {loading ? (
          <Fallback />
        ) : (
          <Box
            sx={{
              position: "relative",
              width: "100%",
              overflow: "hidden",
              ...(background && {
                color: "white",
                background: "url('welcome.jpg') no-repeat center / cover",
              }),
            }}
          >
            <Header />
            {children}
            <Notification />
            <Footer />
          </Box>
        )}
      </ThemeProvider>
    </>
  );
});

Layout.displayName = "Layout";
export default Layout;
