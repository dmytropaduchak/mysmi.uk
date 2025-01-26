import { FC, memo } from "react";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import type { AppProps } from "next/app";
import './_app.css';

const App: FC<AppProps> = memo(({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
      <Analytics />
    </>
  );
});

App.displayName = "App";
export default App;