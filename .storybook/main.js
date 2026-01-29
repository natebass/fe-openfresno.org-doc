import { defineMain } from "@storybook/nextjs-vite/node";
import getBasePath from "../src/integrations/gh-pages/getBasePath.mjs";

const basePath = getBasePath();

/**
 * The main storybook config file.
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
    // if (process.env.GITHUB_ACTIONS === "true") {
    //   config.base = basePath.endsWith('/') ? basePath : `${basePath}/`;
    // }
    config.base = "./"; // critical for GitHub Pages return config;
    return config;
  },
});
