import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/en/contacto",
        destination: "/en/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
