import { defineMain } from "@storybook/nextjs-vite/node";
import getBasePath from "../src/integrations/gh-pages/getBasePath.mjs";

const basePath = getBasePath();

if (typeof window !== "undefined") {
  window.__NEXT_DATA__ = {
    basePath: basePath,
  };
}

/**
 * The main storybook config file.
 * Inject the basePath into Storybook's environment variables and tell Vite to use the base path for assets.
 * Mock the Next.js internal state so <Image /> knows the prefix.
 * Ensure it looks like "/repo-name/" not "/repo-name".
 */
export default defineMain({
  framework: "@storybook/nextjs-vite",
  stories: [
    "../src/stories/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
  ],
  staticDirs: ["../public"],
  tags: {
    test: { defaultFilterSelection: "exclude" },
  },
  features: {
    experimentalTestSyntax: true,
  },
  env: (config) => ({
    ...config,
    NEXT_PUBLIC_BASE_PATH: basePath,
  }),
  viteFinal: async (config) => {
    if (process.env.GITHUB_ACTIONS === "true") {
      config.base = basePath.endsWith('/') ? basePath : `${basePath}/`;
    }
    return config;
  },
});
