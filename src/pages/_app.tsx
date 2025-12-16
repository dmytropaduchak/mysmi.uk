import type { AppProps } from "next/app";
import { ReactNode, useState, useEffect, useMemo } from "react";
import { AppCacheProvider } from '@mui/material-nextjs/v15-pagesRouter';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';
import { Box, CircularProgress, CssBaseline, Stack } from "@mui/material";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Router from "next/router";
import Head from "next/head";
import { usePalette } from "../palette/palette";
import { useAtom } from "jotai";
import { atom } from "../atom/atom";
import Ukraine from "../components/ukraine";
import Consent from "../components/consent";
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
  const [data] = useAtom(atom);
  const theme = useTheme();

  useEffect(() => {
    const svg = `
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 275 275">
        <path d="M0 0 C8.33903018 4.2833997 8.33903018 4.2833997 16.95703125 7.95800781 C23.56689747 10.4910651 29.80434264 13.80645792 36.10449219 17.015625 C39.08948192 18.53244201 42.08583485 20.02595121 45.08203125 21.52050781 C46.74869792 22.35384115 48.41536458 23.18717448 50.08203125 24.02050781 C50.32695312 23.21355469 50.571875 22.40660156 50.82421875 21.57519531 C52.3434368 17.28175299 54.23959 13.24784901 56.20703125 9.14550781 C57.48578125 6.46425781 58.76453125 3.78300781 60.08203125 1.02050781 C68.99203125 1.02050781 77.90203125 1.02050781 87.08203125 1.02050781 C88.6544758 17.39177447 90.18213051 33.76626425 91.56893921 50.15441895 C91.70176481 51.72116696 91.83572137 53.28781954 91.97085571 54.85437012 C92.16112751 57.0657217 92.34682898 59.27741151 92.53125 61.48925781 C92.63783936 62.75189453 92.74442871 64.01453125 92.85424805 65.31542969 C93.09524921 69.23550858 93.12032601 73.09434439 93.08203125 77.02050781 C87.69159599 75.05072204 82.77743164 72.22806978 77.75976562 69.47363281 C73.9828554 67.4364939 70.23243381 65.63544369 66.2265625 64.09082031 C60.57594845 61.89586826 55.29937434 59.12247275 49.95703125 56.27050781 C47.91720574 55.19396493 45.8768393 54.11844638 43.8359375 53.04394531 C42.84996582 52.52413086 41.86399414 52.00431641 40.84814453 51.46875 C37.21786559 49.56806026 33.56422209 47.7187087 29.89453125 45.89550781 C29.27312256 45.58645508 28.65171387 45.27740234 28.01147461 44.95898438 C26.03570152 43.97805745 24.05890914 42.99920616 22.08203125 42.02050781 C18.72624411 40.35708478 15.37206768 38.69047308 12.01953125 37.02050781 C11.16375488 36.59423096 10.30797852 36.1679541 9.42626953 35.72875977 C4.49394876 33.26070851 -0.38592591 30.71844998 -5.23046875 28.08300781 C-11.71604114 24.56816354 -18.33156526 21.33904284 -24.98046875 18.14550781 C-25.96893799 17.66863525 -26.95740723 17.1917627 -27.97583008 16.70043945 C-36.4759894 12.64862166 -42.92092751 10.69117039 -52.35546875 10.77050781 C-53.27134766 10.76277344 -54.18722656 10.75503906 -55.13085938 10.74707031 C-64.04203166 10.7472786 -64.04203166 10.7472786 -71.85546875 14.58300781 C-73.47360474 18.29520214 -73.92885045 22.07673908 -72.91796875 26.02050781 C-69.3352927 30.44937783 -65.27082661 32.65648869 -60.23046875 35.02050781 C-58.89315911 35.66619608 -57.55592061 36.31203167 -56.21875 36.95800781 C-55.54021973 37.2815625 -54.86168945 37.60511719 -54.16259766 37.93847656 C-50.05716259 39.91751596 -45.98953839 41.9729221 -41.91796875 44.02050781 C-42.02976489 48.2501285 -42.15991156 52.4790068 -42.29296875 56.70800781 C-42.32390625 57.88685547 -42.35484375 59.06570312 -42.38671875 60.28027344 C-42.65116985 68.32399454 -43.51127552 76.09690736 -44.91796875 84.02050781 C-45.5423584 83.22684814 -46.16674805 82.43318848 -46.81005859 81.61547852 C-54.47660301 72.17747753 -68.82583297 67.48841733 -80.03515625 63.56738281 C-90.32420645 59.75591648 -100.05256537 51.86545893 -104.91796875 42.02050781 C-110.51966062 28.529346 -109.89807674 17.1881197 -104.70947266 3.81787109 C-101.02856137 -4.54081764 -94.43722739 -9.80056392 -86.41796875 -13.66699219 C-55.48968001 -25.26510046 -27.60862643 -14.09951747 0 0 Z " fill="${data.color}" transform="translate(119.91796875,73.9794921875)"/>
        <path d="M0 0 C1.34191406 0.68835938 1.34191406 0.68835938 2.7109375 1.390625 C3.93217848 2.01063965 5.15353923 2.63041845 6.375 3.25 C6.95894531 3.55035156 7.54289062 3.85070312 8.14453125 4.16015625 C11.62857455 5.92090931 15.1369704 7.48665395 18.76953125 8.91796875 C35.34047898 15.49148968 47.45558809 21.37539137 54.8125 38.25 C56.26629935 41.67684859 57.64741563 45.12460785 58.94458008 48.61425781 C59.76188057 51.14637109 59.76188057 51.14637109 62 52 C62.226875 50.865625 62.45375 49.73125 62.6875 48.5625 C63.91615727 43.5492196 66.34072787 39.38475405 69 35 C73.84015316 36.76534644 78.2835127 39.19536725 82.8125 41.625 C83.60076172 42.04523438 84.38902344 42.46546875 85.20117188 42.8984375 C87.13535326 43.9300009 89.06823983 44.96391172 91 46 C89.67023524 50.28026776 88.02543452 54.17403034 85.99609375 58.16796875 C85.42052734 59.30814453 84.84496094 60.44832031 84.25195312 61.62304688 C83.65318359 62.79931641 83.05441406 63.97558594 82.4375 65.1875 C81.24609658 67.53385794 80.05805643 69.88185459 78.87109375 72.23046875 C78.34443115 73.26582764 77.81776855 74.30118652 77.27514648 75.36791992 C75.92435656 78.01188038 75.92435656 78.01188038 75 81 C65.1 81 55.2 81 45 81 C39 68 39 68 37.1640625 64.01171875 C32.94759632 54.90457988 28.49386876 45.98773753 24 37 C22.68 58.45 21.36 79.9 20 102 C11.09 102 2.18 102 -7 102 C-7.020625 99.009375 -7.04125 96.01875 -7.0625 92.9375 C-7.071604 92.00929443 -7.08070801 91.08108887 -7.09008789 90.12475586 C-7.09258545 89.37073486 -7.09508301 88.61671387 -7.09765625 87.83984375 C-7.10289307 87.08050537 -7.10812988 86.32116699 -7.11352539 85.53881836 C-7.00183095 83.04094636 -6.65073572 80.63632835 -6.27732849 78.16676331 C-5.64920683 73.25925826 -5.39833553 68.30935656 -5.0625 63.375 C-4.97750244 62.15530518 -4.89250488 60.93561035 -4.80493164 59.67895508 C-4.53424103 55.78613083 -4.2670913 51.89307269 -4 48 C-3.82054094 45.41274456 -3.64085569 42.8255048 -3.4609375 40.23828125 C-3.28635532 37.72136131 -3.11187434 35.20443435 -2.9375 32.6875 C-2.85322754 31.47118896 -2.76895508 30.25487793 -2.68212891 29.00170898 C-2.33709827 23.99669872 -1.9945051 18.99187705 -1.6875 13.984375 C-1.64375244 13.28094971 -1.60000488 12.57752441 -1.55493164 11.8527832 C-1.44865921 10.11950414 -1.34709982 8.38593768 -1.24609375 6.65234375 C-1.03017735 4.32524472 -0.64982357 2.23947463 0 0 Z " fill="${data.color}" transform="translate(86,94)"/>
        <path d="M0 0 C9.9 0 19.8 0 30 0 C30 39.93 30 79.86 30 121 C20.1 121 10.2 121 0 121 C0 81.07 0 41.14 0 0 Z " fill="${data.color}" transform="translate(236,75)"/>
        <path d="M0 0 C4.70573872 1.01653094 9.06025274 2.96074721 13.515625 4.74609375 C20.8259607 7.37683115 27.2162069 8.3632387 34.9375 8.375 C35.77990234 8.39949219 36.62230469 8.42398438 37.49023438 8.44921875 C45.30340355 8.48530729 52.03680752 6.18538477 58 1 C58.28189885 12.49520875 57.47773994 23.60029192 56 35 C35.59920345 39.62955491 13.65050388 35.7682523 -5 27 C-5.57084472 20.86341921 -3.8541782 15.92538868 -1.95703125 10.11328125 C-0.90764487 6.6995631 -0.32969672 3.54423969 0 0 Z " fill="${data.color}" transform="translate(16,166)"/>
        <path d="M0 0 C4.32180056 1.59485183 8.28589843 3.72393116 12.3125 5.9375 C17.44567263 8.726453 22.45713034 11.11542432 28 13 C29.71228218 14.71228218 29.35238084 17.0186945 29.53515625 19.36328125 C29.62216797 20.47896484 29.70917969 21.59464844 29.79882812 22.74414062 C29.88583984 23.92169922 29.97285156 25.09925781 30.0625 26.3125 C30.15337891 27.44751953 30.24425781 28.58253906 30.33789062 29.75195312 C30.42361328 30.88181641 30.50933594 32.01167969 30.59765625 33.17578125 C30.67508057 34.19583252 30.75250488 35.21588379 30.83227539 36.2668457 C31.06767308 41.50624311 31 46.75531724 31 52 C21.43 52 11.86 52 2 52 C0.77317905 34.59447779 -0.35003449 17.44338541 0 0 Z " fill="${data.color}" transform="translate(185,144)"/>
        <path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C-0.97 3.97 -3.94 6.94 -7 10 C-7.66 9.67 -8.32 9.34 -9 9 C-6.21000549 5.51250686 -3.74764169 2.49842779 0 0 Z " fill="${data.color}" transform="translate(27,64)"/>
      </svg>
    `;
    const link = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    const blob = new Blob([svg], { type: "image/svg+xml" });
    link.href = URL.createObjectURL(blob);

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
  }, [setRouting, data]);

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
          <Consent />
          <Ukraine />
          {/* <Message /> */}
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

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "mySMI.uk",
  "url": "https://mysmi.uk",
  "telephone": "+44 7516 000030",
  "hasMap": "https://www.google.com/maps/place/mySMI.uk",
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

export default function _App(props: AppProps) {
  const { Component, pageProps } = props;

  const __html = useMemo(() => {
    return JSON.stringify(structuredData);
  }, []);

  return (
    <AppCacheProvider {...props}>
      <Head>
        <link rel="icon" href="/icon" type="image/svg+xml" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon" type="image/png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://www.mysmi.uk/" />
        
        <meta name="apple-mobile-web-app-title" content="mySMI.uk" />
        <meta name="robots" content="index, follow" />
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html }} />
      </Head>
      <Body>
        <Component {...pageProps} />
        <SpeedInsights />
        <Analytics />
      </Body>
    </AppCacheProvider>
  );
}
