import NavbarE7e from "../src/components/layout/NavbarE7e";
import { render, screen } from "@testing-library/react";

render(<NavbarE7e />);

/* 
Renders the AppNavbar component and checks if all link elements are rendering
*/

test("Find Get Involved Text", () => {
  expect(screen.getByText(/Get Involved/i)).toBeDefined();
});
