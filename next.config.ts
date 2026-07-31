import type { NextConfig } from "next";

export default {
  experimental: {
    useTypeScriptCli: true,
  },
  output: "export",
  typedRoutes: true,
} satisfies NextConfig;
