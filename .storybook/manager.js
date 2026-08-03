import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

addons.setConfig({
  theme: create({
    brandTitle: "Open Fresno",
    brandImage: "/assets/logo/logo-blue.svg",
    brandTarget: "_self",
  }),
});
