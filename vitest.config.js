import path from "node:path";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";
import { defineConfig, defineProject } from "vitest/config";

/**
 * Root Vitest configuration.
 *
 * This object defines global settings that apply to all Vitest projects
 * unless overridden inside a specific project created by `defineProject()`.
 *
 * @property {string} resolve.alias.@ - Maps "@" to the local ./src directory
 *   to simplify imports across all test projects.
 * @property {object} test - Global test configuration shared by all projects.
 * @property {object} test.coverage.provider - Coverage engine to use.
 *   `"v8"` uses native V8 instrumentation (fast, no Babel/Istanbul transforms).
 * @property {Array<import('vitest/config').UserConfig>} test.projects
 *   A list of isolated test projects. Each project runs with its own
 *   environment, plugins, and test patterns.
 *   - `createUnitProject()` → jsdom-based unit tests
 *   - `createStorybookProject()` → browser-mode Storybook tests
 *
 * @type {import('vitest/config').UserConfig}
 */
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  test: {
    coverage: { provider: "v8" },
    projects: [createUnitProject(), createStorybookProject()],
  },
});

/**
 * A unit test project configuration.
 *
 * - JSDOM provides a simulated browser environment implemented in pure JavaScript.
 *   - Limitations: no real rendering engine, no CSS layout, no canvas/WebGL.
 *
 * @property {string} resolve.alias.@ - Every project should contain its own alias to prevent conflicts.
 * @property {"automatic"|"classic"} esbuild.jsx - JSX transform mode (so that you don't have to import React).
 * @property {string} test.name - Project name shown in CLI.
 * @property {"jsdom"|"node"|"happy-dom"} test.environment - Use JSDOM.
 * @property {string[]} test.include - Glob patterns for test files.
 * @property {boolean} test.globals -When true it allows the functions describe, it, and expect without importing.
 * @returns {import('vitest/config').UserConfig}
 *
 */
export function createUnitProject() {
  return defineProject({
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "./src"),
      },
    },
    esbuild: {
      jsx: "automatic",
    },
    test: {
      name: "unit",
      environment: "jsdom",
      include: ["tests/**/*.test.{js,jsx,ts,tsx}"],
      globals: true,
    },
  });
}

/**
 * A Storybook test project configuration.
 *
 * @property {string} resolve.alias.@ - Every project should contain its own alias to prevent conflicts. *
 * @property {ReturnType<typeof storybookTest>} plugins[].storybookTest - Storybook/Vitest integration plugin.
 * @property {string} test.name - Project name shown in CLI.
 * @property {boolean} test.browser.enabled - Enables browser mode.
 * @property {boolean} test.browser.headless - Runs browser in headless mode.
 * @property {ReturnType<typeof playwright>} test.browser.provider - Browser automation provider.
 * @property {Array<{browser: "chromium"|"firefox"|"webkit"}>} test.browser.instances - Browser instances to launch.
 */
export function createStorybookProject() {
  return defineProject({
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
        provider: playwright(),
        instances: [{ browser: "chromium" }],
      },
    },
  });
}
