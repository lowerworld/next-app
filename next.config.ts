import { NextConfig } from "next";

export default {
  output: "export",
  experimental: {
    typedRoutes: true,
  },
} satisfies NextConfig;
