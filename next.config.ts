import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  transpilePackages: ['mui-tel-input'],
  env: {
    RESEND_API_KEY: "re_J2ETZnLd_3XVTXamK8kNgGH6XVZTvqvLV",
  },
  i18n: {
    locales: ['en-GB'],
    defaultLocale: 'en-GB',
  },
};

export default nextConfig;
