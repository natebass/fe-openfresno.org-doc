import preview from "#.storybook/preview.js";
import Footer from "@/components/layout/footer.jsx";
import { expect } from "storybook/test";

const meta = preview.meta({
  title: "Components/Footer",
  component: Footer,
  parameters: {
    componentSubtitle:
      "Application footer with mission statement, links, and social media",
    layout: "fullscreen",
    docs: {
      description: {
        component: `
The default footer for the application. Contains three main sections:

1. **Get Involved** - Describes Open Fresno's mission and fiscal sponsorship by Root Access.
2. **Action Links** - Quick links to Meetup, projects, and FAQs.
3. **Social Media** - Icons linking to Facebook, X (Twitter), and YouTube.

A bottom bar displays the "Open Fresno" title and links to Get Started, Our Team, and Code of Conduct.

## Props

This component has no props — it renders a static footer layout.

## Usage

\`\`\`jsx
<Footer />
\`\`\`
        `,
      },
    },
  },
});

export default meta;

export const Default = meta.story({
  name: "Footer",
});

export const RendersContent = meta.story({
  name: "Renders Footer Content",
  tags: ["test"],
  play: async ({ canvas, step }) => {
    await step("Verify Get Involved heading", async () => {
      await expect(
        canvas.getByRole("heading", { level: 2, name: /Get Involved/i }),
      ).toBeInTheDocument();
    });

    await step("Verify mission text", async () => {
      await expect(
        canvas.getByText(/tax-deductible civic-tech community/i),
      ).toBeInTheDocument();
    });

    await step("Verify action links", async () => {
      await expect(canvas.getByText(/meetup/i)).toBeInTheDocument();
      await expect(canvas.getByText(/projects/i)).toBeInTheDocument();
      await expect(canvas.getByText(/FAQs/i)).toBeInTheDocument();
    });

    await step("Verify social media icons", async () => {
      await expect(canvas.getByAltText("Facebook")).toBeInTheDocument();
      await expect(canvas.getByAltText("X")).toBeInTheDocument();
      await expect(canvas.getByAltText("Youtube")).toBeInTheDocument();
    });

    await step("Verify bottom bar links", async () => {
      await expect(canvas.getByText("Get started")).toBeInTheDocument();
      await expect(canvas.getByText("Our team")).toBeInTheDocument();
      await expect(canvas.getByText("Code of conduct")).toBeInTheDocument();
    });
  },
});

export const AccessibilityCheck = meta.story({
  name: "Accessibility Check",
  tags: ["test"],
  parameters: {
    a11y: { test: "error" },
    docs: {
      description: {
        story:
          "Runs the footer through strict accessibility checks. External links should have proper `rel` and `target` attributes.",
      },
    },
  },
  play: async ({ canvas }) => {
    const externalLinks = [
      canvas.getByLabelText("Link to Meetup."),
    ];
    for (const link of externalLinks) {
      await expect(link).toHaveAttribute("target", "_blank");
      await expect(link).toHaveAttribute(
        "rel",
        expect.stringContaining("noopener"),
      );
    }
  },
});
