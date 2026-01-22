import preview from "./preview";
import { setProjectAnnotations } from "@storybook/nextjs-vite";

/** @type {any} */
const annotations = preview.annotations;
setProjectAnnotations(annotations);
