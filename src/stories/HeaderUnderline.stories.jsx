import preview from "#.storybook/preview.js";
import HeaderUnderline from "@/components/ui/HeaderUnderline.jsx";
import PageContainer from "@/components/ui/PageContainer.jsx";
import { SectionType } from "@/utility/constants/theme.js";
import { expect } from "storybook/test";

const meta = preview.meta({
  title: "Components/HeaderUnderline",
  component: HeaderUnderline,
  parameters: {
    componentSubtitle: "Section header with underline, description, and theme support",
    docs: {
      description: {
        component: `
Renders a header block that introduces a major section of a page or layout. It adapts to light/dark themes, supports larger descriptions, and ensures consistent typography across sections.

Internally composes \`HeadingPair\` with a full-width subheading and an optional body paragraph.

## Props

- **title \\{string\\}** - The main heading text, rendered inside an \`h1\`.
- **description \\{JSX.Element\\}** - The secondary heading text, rendered inside an \`h2\`.
- **children \\{React.ReactNode\\}** - Optional supporting content displayed below the headings.
- **className \\{string\\}** - Additional CSS class names for layout or custom styling.
- **sectionType \\{SectionType\\}** - Theme variant. When \`SectionType.dark\`, alternate dark styles are applied.
- **large \\{boolean\\}** - If \`true\`, applies a larger style to the description for emphasis.

## Examples

\`\`\`jsx
<HeaderUnderline title="Our Services" description="Scalable solutions for modern businesses." />
<HeaderUnderline title="Mission" description="Community impact." sectionType={SectionType.dark} large>
  Trusted by startups and enterprises worldwide.
</HeaderUnderline>
\`\`\`
        `,
      },
    },
  },
  args: {
    title: "Section Title",
    description: "A brief description of the section content.",
    sectionType: SectionType.light,
  },
  argTypes: {
    sectionType: {
      control: "select",
      options: ["light", "dark", "gray", "primary", "secondary"],
    },
    large: { control: "boolean" },
  },
});

export default meta;

export const Default = meta.story({
  name: "HeaderUnderline",
  decorators: [
    (Story) => (
      <PageContainer>
        <Story />
      </PageContainer>
    ),
  ],
});

export const WithChildren = meta.story({
  name: "With Supporting Text",
  args: {
    title: "Our Services",
    description: "We provide scalable solutions for modern businesses.",
    children: "Trusted by startups and enterprises worldwide.",
  },
  parameters: {
    docs: {
      description: {
        story: "Includes optional children content rendered as a paragraph below the heading pair.",
      },
    },
  },
  decorators: [
    (Story) => (
      <PageContainer>
        <Story />
      </PageContainer>
    ),
  ],
});

export const LargeDescription = meta.story({
  name: "Large Description",
  args: {
    title: "Mission Statement",
    description: "Using technology and open data for positive civic change.",
    large: true,
  },
  decorators: [
    (Story) => (
      <PageContainer>
        <Story />
      </PageContainer>
    ),
  ],
});

export const DarkTheme = meta.story({
  name: "Dark Theme",
  args: {
    title: "Get Involved",
    description: "Join the Open Fresno community today.",
    sectionType: SectionType.dark,
    children: "We meet every week to work on civic tech projects.",
  },
  decorators: [
    (Story) => (
      <PageContainer sectionType="dark">
        <Story />
      </PageContainer>
    ),
  ],
});

export const AllThemes = meta.story({
  name: "All Themes",
  parameters: {
    docs: {
      description: {
        story: "Showcases HeaderUnderline across all SectionType themes side by side.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div>
        <PageContainer>
          <Story />
        </PageContainer>
        {["light", "dark", "gray", "primary", "secondary"].map((type) => (
          <PageContainer key={type} sectionType={type}>
            <HeaderUnderline title="Theme" description={`SectionType: ${type}`} sectionType={type}>
              Supporting paragraph for the {type} theme.
            </HeaderUnderline>
          </PageContainer>
        ))}
      </div>
    ),
  ],
});

export const RendersHeadings = meta.story({
  name: "Renders Headings",
  tags: ["test"],
  args: {
    title: "Test Heading",
    description: "Test Description",
    children: "Test body content",
  },
  decorators: [
    (Story) => (
      <PageContainer>
        <Story />
      </PageContainer>
    ),
  ],
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Test Heading")).toBeInTheDocument();
    await expect(canvas.getByText("Test Description")).toBeInTheDocument();
    await expect(canvas.getByText("Test body content")).toBeInTheDocument();
  },
});
