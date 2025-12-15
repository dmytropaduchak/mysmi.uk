import type { AppProps } from "next/app";
import { ReactNode, useState, useEffect } from "react";
import { AppCacheProvider } from '@mui/material-nextjs/v15-pagesRouter';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';
import { Box, CircularProgress, CssBaseline, Stack } from "@mui/material";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Router from "next/router";
import Head from "next/head";
import { usePalette } from "../palette/palette";
// import { usePalette } from "../palette/palette";
// import { LANGUAGES } from "../translation/translation";
// import Ukraine from "../components/ukraine";
// import Consent from "../components/consent";
// import Message from "../components/message";

const cssVariables = true;

const roboto = Roboto({
  weight: ['100', '200', '300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

function Main({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [routing, setRouting] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const handleRouteStart = () => {
      setRouting(true);
    }
    const handleRouteDone = () => {
      setRouting(false);
    }

    Router.events.on('routeChangeStart', handleRouteStart);
    Router.events.on('routeChangeComplete', handleRouteDone);
    Router.events.on('routeChangeError', handleRouteDone);

    return () => {
      Router.events.off('routeChangeStart', handleRouteStart);
      Router.events.off('routeChangeComplete', handleRouteDone);
      Router.events.off('routeChangeError', handleRouteDone);
    };
  }, [setRouting]);

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  if (loading) {
    return null;
  }

  if (routing) {
    return (
      <Box sx={{
        height: '100vh',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <CircularProgress size={24} />
      </Box>
    );
  }

  return (
    <main className={roboto.className}>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}>
        <Stack sx={{
          position: "fixed",
          zIndex: 1000,
          left: "8px",
          bottom: "8px",
          width: 380,
          [theme.breakpoints.down('sm')]: {
            width: "auto",
            paddingRight: 1,
          },
        }} spacing={1}>
          {/* <Consent />
          <Ukraine />
          <Message /> */}
        </Stack>
        {children}
      </Box>
    </main>
  )
}

function Body({ children }: { children: ReactNode }) {
  const palette = usePalette();
  const theme = createTheme({ palette, cssVariables });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main>{children}</Main>
    </ThemeProvider>
  );
}

export default function _App(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <AppCacheProvider {...props}>
      <Head>
        <link rel="icon" href="/icon?32x3" type="image/png" sizes="32x32" />
        <link rel="icon" href="/icon?96x96" type="image/png" sizes="96x96" />
        <link rel="apple-touch-icon" href="/apple-icon?180x180" type="image/png" sizes="180x180" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="mySMI.uk" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Body>
        <Component {...pageProps} />
        <SpeedInsights />
        <Analytics />
      </Body>
    </AppCacheProvider>
  );
}
