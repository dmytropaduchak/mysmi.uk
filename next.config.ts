import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  transpilePackages: ['mui-tel-input'],
  i18n: {
    locales: ['en-GB'],
    defaultLocale: 'en-GB',
  },
};

export default nextConfig;
