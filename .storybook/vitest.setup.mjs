import * as a11yAddonAnnotations from "@storybook/addon-a11y/preview";
import { setProjectAnnotations } from "@storybook/nextjs-vite";
import * as projectAnnotations from "./preview";

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
// We are not using before all because that is an older setup.
// import { beforeAll } from "vitest";
// beforeAll(preview.composed.beforeAll);
setProjectAnnotations([a11yAddonAnnotations, projectAnnotations]);
