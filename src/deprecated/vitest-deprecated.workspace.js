import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import path from "node:path";
import { defineProject } from "vitest/config";

/**
 * Vitest workspace configuration.
 * 1. Unit Test Project (Logic & React Testing Library)
 * 2. Storybook Test Project (Browser-based Interaction Tests)
 */
export default [
  defineProject({
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "./src"),
      },
    },
    test: {
      name: "unit",
      environment: "jsdom",
      include: ["tests/**/*.test.{js,jsx,ts,tsx}"],
      globals: true,
      coverage: { provider: "v8" },
    },
  }),
  defineProject({
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "./src"),
      },
    },
    plugins: [
      storybookTest({
        configDir: path.join(import.meta.dirname, ".storybook"),
      }),
    ],
    test: {
      name: "storybook",
      browser: {
        enabled: true,
        headless: true,
        provider: "playwright",
        instances: [{ browser: "chromium" }],
      },
      include: ["src/**/*.stories.{js,jsx,ts,tsx}"],
    },
  }),
];
