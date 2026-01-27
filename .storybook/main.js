import { defineMain } from "@storybook/nextjs-vite/node";

export default defineMain({
  framework: "@storybook/nextjs-vite",
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
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
});
