import "../src/app/global.css";
import addonA11y from "@storybook/addon-a11y";
import addonDocs from "@storybook/addon-docs";
import { definePreview } from "@storybook/nextjs-vite";

/**
 * Use the control sort parameter 'alpha' to sort Args/Controls table in the Docs and Controls panels alphabetically by the control name.
 * Since we are not using TypeScript, Storybook can't infer prop order from the TS interface.
 * Other options are the default 'none' or 'requiredFirst'.
 * a11y options are
 * - 'todo' - show a11y violations in the test UI only.
 * - 'error' - fail CI on a11y violations.
 * - 'off' - skip a11y checks entirely.
 */
const preview = definePreview({
  addons: [addonA11y(), addonDocs()],
  parameters: {
    options: {
      storySort: {
        order: ["Introduction", "Get Started", "*"],
      },
    },
    controls: {
      sort: "alpha",
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
  tags: ["autodocs"],
});

export default preview;
