import Home from "../src/app/(home)/page";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

// Mock next/image to avoid jsdom hanging
vi.mock("next/image", () => ({
  default: ({ src, alt, ...props }) => (
    <img src={src?.src || src} alt={alt} {...props} />
  ),
}));

// Mock next/link to avoid router issues
vi.mock("next/link", () => ({
  default: ({ children, href }) => <a href={href}>{children}</a>,
}));

/*
Renders the home element and checks if all components are rendering
*/

test.skip("HomeSectionLandingImage Renders in Home", () => {
  render(<Home />);
  expect(
    screen.getByRole("heading", { level: 1, name: /welcome to open fresno/i }),
  ).toBeDefined();
});
