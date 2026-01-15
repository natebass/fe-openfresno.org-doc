import * as projectAnnotations from "./preview.mjs";
import * as a11yAddonAnnotations from "@storybook/addon-a11y/preview";
import { setProjectAnnotations } from "@storybook/nextjs-vite";

setProjectAnnotations([a11yAddonAnnotations, projectAnnotations]);
