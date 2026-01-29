/** @type {import('vitest').VitestConfig} */
// @vitest-environment jsdom
import FooterE4d from "../src/components/layout/FooterE4d";
import { render, screen } from "@testing-library/react";

render(<FooterE4d />);

/* 
Renders the AppFooter component and checks if all link elements are rendering
*/

test("AppFooter", () => {
  expect(
    screen.getByRole("heading", { level: 2, name: /Get Involved/i }),
  ).toBeDefined();
});
