import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/gpt-content-maker/gpt_c_m_5",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
