import { defineMain } from "@storybook/nextjs-vite/node";
import getBasePath from "@/integrations/gh-pages/getBasePath.mjs";

const basePath = getBasePath();

/**
 * The main storybook config file.
 * Inject the basePath into Storybook's environment variables and tell Vite to use the base path for assets.
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
      config.base = `${basePath}/`;
    }
    return config;
  },
});
