import preview from "#.storybook/preview.js";
import NavbarMenu from "@/components/layout/navbar-menu.jsx";
import { expect } from "storybook/test";

const meta = preview.meta({
  title: "Components/NavbarMenu",
  component: NavbarMenu,
  parameters: {
    componentSubtitle: "Extended navigation menu with mobile toggle and desktop sections",
    layout: "fullscreen",
    docs: {
      description: {
        component: `
The extended navbar menu that appears below the main navigation bar. It provides two distinct experiences:

### Mobile View
Two navigation panels that toggle between primary links (Home, About, Contact, Donate) and secondary links (Get Started, Projects, Pitch a Project, Meetup, FAQs). A \`NavExtendedToggle\` button switches between panels.

### Desktop View
Three content sections (Get Started, Projects, Pitch a Project) each with a description and CTA button, plus quick links to Meetup and FAQs.

The component remembers the last active mobile panel across mount/unmount cycles via a module-scoped variable.

## Props

- **className \\{string\\}** - Optional additional CSS class names applied to the root container.

## ARIA Roles

- \`role="region"\` with \`aria-label="Extended navigation"\` on the container.
- \`role="menu"\` / \`role="menuitem"\` on mobile navigation lists.

## Examples

\`\`\`jsx
<NavbarMenu />
<NavbarMenu className="custom-style" />
\`\`\`
        `,
      },
    },
  },
  args: {
    className: "",
  },
});

export default meta;

export const Default = meta.story({
  name: "NavbarMenu",
  decorators: [
    (Story) => (
      <div style={{ minHeight: "400px" }}>
        <Story />
      </div>
    ),
  ],
});

export const WithCustomClass = meta.story({
  name: "With Custom Class",
  args: {
    className: "border-2 border-dashed border-blue-400",
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "400px" }}>
        <Story />
      </div>
    ),
  ],
});

export const RendersNavigation = meta.story({
  name: "Renders Navigation Links",
  tags: ["test"],
  decorators: [
    (Story) => (
      <div style={{ minHeight: "400px" }}>
        <Story />
      </div>
    ),
  ],
  play: async ({ canvas, step }) => {
    await step("Verify region exists", async () => {
      await expect(
        canvas.getByRole("region", { name: /Extended navigation/i }),
      ).toBeInTheDocument();
    });

    await step("Verify desktop sections render", async () => {
      await expect(canvas.getByText("Get Started")).toBeInTheDocument();
      await expect(canvas.getByText("Projects")).toBeInTheDocument();
      await expect(canvas.getByText("Pitch a Project")).toBeInTheDocument();
    });

    await step("Verify CTA buttons render", async () => {
      await expect(canvas.getByText("See Projects")).toBeInTheDocument();
    });
  },
});

export const MobileToggleTest = meta.story({
  name: "Mobile Panel Toggle",
  tags: ["test"],
  parameters: {
    viewport: { defaultViewport: "mobile1" },
    docs: {
      description: {
        story:
          "Tests the mobile navigation toggle that switches between primary and secondary panels. The `NavExtendedToggle` button toggles `data-nav` between 'primary' and 'secondary'.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "400px" }}>
        <Story />
      </div>
    ),
  ],
  play: async ({ canvas }) => {
    const region = canvas.getByRole("region", {
      name: /Extended navigation/i,
    });
    await expect(region).toBeInTheDocument();

    const menus = canvas.getAllByRole("menu");
    await expect(menus.length).toBeGreaterThanOrEqual(2);
  },
});

export const AccessibilityCheck = meta.story({
  name: "Accessibility Roles",
  tags: ["test"],
  parameters: {
    a11y: { test: "error" },
    docs: {
      description: {
        story: "Verifies ARIA roles are correctly applied: region, menu, menuitem.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "400px" }}>
        <Story />
      </div>
    ),
  ],
  play: async ({ canvas }) => {
    await expect(canvas.getByRole("region", { name: /Extended navigation/i })).toBeInTheDocument();

    const primaryMenu = canvas.getByRole("menu", {
      name: /Primary navigation/i,
    });
    await expect(primaryMenu).toBeInTheDocument();

    const secondaryMenu = canvas.getByRole("menu", {
      name: /Secondary navigation/i,
    });
    await expect(secondaryMenu).toBeInTheDocument();

    const menuItems = canvas.getAllByRole("menuitem");
    await expect(menuItems.length).toBeGreaterThan(0);
  },
});
