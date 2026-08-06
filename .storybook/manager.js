import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";
import getBasePath from "../src/integrations/gh-pages/getBasePath.mjs";

const basePath = getBasePath();
const brandImage = `${basePath}/assets/logo/logo-blue-small.svg`;

addons.setConfig({
  theme: create({
    brandTitle: "Open Fresno",
    brandImage,
    brandTarget: "_self",
  }),
});
