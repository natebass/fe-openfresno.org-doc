import { expect, userEvent, within } from "storybook/test";
import "../app/-styles/main.css";
import NavbarE7e from "../components/layout/NavbarE7e";

export default {
  title: "Components/Navigation Bar",
  component: NavbarE7e,
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = {
  args: { fade: false },
};

export const WithFade = {
  args: { fade: true },
};

export const ToggleMenu = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggleButton = canvas.getAllByRole("button")[0];
    await expect(toggleButton).toBeInTheDocument();

    await userEvent.click(toggleButton);
    await expect(
      canvas.getByRole("link", { name: /Donate/i }),
    ).toBeInTheDocument();

    await userEvent.click(toggleButton);
    await expect(
      canvas.queryByRole("link", { name: /Donate/i }),
    ).not.toBeInTheDocument();
  },
};
