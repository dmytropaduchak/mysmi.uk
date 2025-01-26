import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  transpilePackages: ['mui-tel-input'],
  env: {
    RESEND_API_KEY: "re_J2ETZnLd_3XVTXamK8kNgGH6XVZTvqvLV",
  }
  /* config options here */
};

export default nextConfig;
