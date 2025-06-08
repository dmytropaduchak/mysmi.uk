import { FC, memo } from "react";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/next';
import type { AppProps } from "next/app";
import './_app.css';

const App: FC<AppProps> = memo(({ Component, pageProps }: AppProps) => {
  const gaId = "G-2353L5K33K";
  return (
    <>
      <Component {...pageProps} />
      <GoogleAnalytics gaId={gaId} />
      <SpeedInsights />
      <Analytics />
    </>
  );
});

App.displayName = "App";
export default App;