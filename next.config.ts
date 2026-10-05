import type { NextConfig } from "next";
import nextra from "nextra";

const withNextra = nextra({
  search: false,
});

const nextConfig: NextConfig = {
  poweredByHeader: false,
  turbopack: {
    resolveAlias: {
      "next-mdx-import-source-file": "./mdx-components.tsx",
    },
  },
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

export default withNextra(nextConfig);
