import preview from "#.storybook/preview.js";
import LinedSection, { SectionLine } from "@/components/ui/LinedSection.jsx";
import { expect } from "storybook/test";

const meta = preview.meta({
  title: "Components/LinedSection",
  component: LinedSection,
  parameters: {
    componentSubtitle: "Content section with a title, underline bar, and horizontal-ruled lines",
    docs: {
      description: {
        component: `
Renders a titled content block inside a \`PageContainer\`. Below the title sits a short colored bar, optional children, and a list of labeled rows separated by horizontal rules.

Each row is rendered by the \`SectionLine\` sub-component, which places a bold title on the left and content on the right in a responsive flex layout.

## Props

- **title \\{JSX.Element\\}** - The section heading displayed inside an \`h2\`.
- **children \\{JSX.Element\\}** - Optional body content rendered between the title bar and the lines.
- **lines \\{[string, string][]\\}** - An array of \`[label, value]\` pairs. Each pair renders a horizontal rule followed by a two-column row.
- **sectionType \\{SectionType\\}** - Theme variant controlling accent colors. Defaults to \`SectionType.light\`.

## Sub-Components

### SectionLine

A single row with a bold label and content, separated by a horizontal rule.

- **title \\{JSX.Element\\}** - Bold label on the left.
- **children \\{JSX.Element\\}** - Content on the right.

## Examples

\`\`\`jsx
<LinedSection title="Details" lines={[["Role", "Developer"], ["Status", "Active"]]} />
\`\`\`
        `,
      },
    },
  },
  args: {
    title: "Project Details",
    lines: [
      ["Role", "Frontend Developer"],
      ["Status", "Active"],
      ["Location", "Fresno, CA"],
    ],
    sectionType: "light",
  },
  argTypes: {
    sectionType: {
      control: "select",
      options: ["light", "dark", "gray", "primary", "secondary"],
    },
  },
});

export default meta;

export const Default = meta.story({
  name: "LinedSection",
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 800 }}>
        <Story />
      </div>
    ),
  ],
});

export const WithChildren = meta.story({
  name: "With Description",
  args: {
    title: "Volunteer Info",
    children: (
      <p className="paragraph-large">
        A brief description of the volunteer opportunity and what to expect.
      </p>
    ),
    lines: [
      ["Commitment", "4 hours / week"],
      ["Skills", "React, JavaScript, CSS"],
      ["Start Date", "January 2026"],
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 800 }}>
        <Story />
      </div>
    ),
  ],
});

export const DarkTheme = meta.story({
  name: "Dark Theme",
  args: {
    title: "Tech Stack",
    sectionType: "dark",
    lines: [
      ["Framework", "Next.js 16"],
      ["Styling", "TailwindCSS 4"],
      ["Testing", "Vitest + Storybook"],
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 800 }}>
        <Story />
      </div>
    ),
  ],
});

export const SectionLineOnly = meta.story({
  name: "SectionLine Sub-Component",
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates the `SectionLine` sub-component in isolation, showing the two-column layout with horizontal rules.",
      },
    },
  },
  render: () => (
    <div style={{ maxWidth: 800, padding: "2rem" }}>
      <SectionLine title="Label">Value content</SectionLine>
      <SectionLine title="Another Label">Another value</SectionLine>
      <SectionLine title={<strong>Bold Label</strong>}>
        <em>Italic content</em>
      </SectionLine>
    </div>
  ),
});

export const RendersContent = meta.story({
  name: "Renders Title and Lines",
  tags: ["test"],
  args: {
    title: "Test Section",
    lines: [
      ["Key A", "Value A"],
      ["Key B", "Value B"],
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 800 }}>
        <Story />
      </div>
    ),
  ],
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Test Section")).toBeInTheDocument();
    await expect(canvas.getByText("Value A")).toBeInTheDocument();
    await expect(canvas.getByText("Value B")).toBeInTheDocument();
  },
});
