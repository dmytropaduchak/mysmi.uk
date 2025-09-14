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
    "addressLocality": "Hemel Hempstead",
    "addressRegion": "London",
    "addressCountry": "UK"
  },
  "areaServed": [
    { "@type": "Place", "name": "Barnet, UK" },
    { "@type": "Place", "name": "Harrow, UK" },
    { "@type": "Place", "name": "Pinner, UK" },
    { "@type": "Place", "name": "Slough, UK" },
    { "@type": "Place", "name": "Chesham, UK" },
    { "@type": "Place", "name": "Edgware, UK" },
    { "@type": "Place", "name": "Enfield, UK" },
    { "@type": "Place", "name": "Watford, UK" },
    { "@type": "Place", "name": "Cheshunt, UK" },
    { "@type": "Place", "name": "Hatfield, UK" },
    { "@type": "Place", "name": "Harefield, UK" },
    { "@type": "Place", "name": "Harpenden, UK" },
    { "@type": "Place", "name": "Northwood, UK" },
    { "@type": "Place", "name": "St Albans, UK" },
    { "@type": "Place", "name": "Borehamwood, UK" },
    { "@type": "Place", "name": "Potters Bar, UK" },
    { "@type": "Place", "name": "Hemel Hempstead, UK" },
    { "@type": "Place", "name": "Willesden, London, UK" },
    { "@type": "Place", "name": "Welwyn Garden City, UK" }
  ],
  "serviceType": "Car Locksmith"
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
        <title>Trusted Mobile Auto Locksmith Service | MySMI.uk</title>
        <meta name="description" content="Locked out or lost your car keys? MySMI.uk provides fast, reliable, and professional mobile auto locksmith services. Available 24/7." />
        <meta name="apple-mobile-web-app-title" content="smi.uk" />
        <meta name="keywords" content="emergency car lockout, locksmith service, car locksmith, auto locksmith, car key replacement, emergency locksmith, emergency car unlocking, car lockout service, open car fast, locked keys in car, fast auto locksmith, urgent car door opening, 24/7 car locksmith, mobile car unlocking, broken key removal, quick vehicle access, keyless car entry service" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />\
        <link rel="manifest" href="/site.webmanifest" />
        
        <meta property="og:title" content="Trusted Mobile Auto Locksmith Service | MySMI.uk"/>
        <meta property="og:description" content="Locked out or lost your car keys? MySMI.uk provides fast, reliable, and professional mobile auto locksmith services. Available 24/7."/>
        <meta property="og:url" content="https://www.mysmi.uk/"/>
        <meta property="og:type" content="website"/>

        <link rel="canonical" href="https://www.mysmi.uk/" />
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
