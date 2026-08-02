import preview from "#.storybook/preview.js";
import ImageSection from "@/components/ui/ImageSection.jsx";
import { expect } from "storybook/test";

const meta = preview.meta({
  title: "Components/ImageSection",
  component: ImageSection,
  parameters: {
    componentSubtitle:
      "Full-width section with heading, text, and a side image",
    layout: "fullscreen",
    docs: {
      description: {
        component: `
A themed section component that displays a heading, subheading, and body text alongside a large image. The layout uses a two-column split grid that stacks on mobile.

The heading color inverts based on the \`sectionType\` to ensure contrast against the section background.

## Props

- **heading \\{string\\}** - The main heading text rendered in an \`h1\`.
- **subHeading \\{JSX.Element\\}** - Secondary text rendered in an \`h2\`.
- **alt \\{string\\}** - Alt text for the image. Defaults to \`"Open Data Day"\`.
- **src \\{string|StaticImageData\\}** - Image source path or imported static image.
- **sectionType \\{SectionType\\}** - Theme variant. Defaults to \`SectionType.light\`.
- **children \\{JSX.Element\\}** - Body text rendered below the subheading.

## Examples

\`\`\`jsx
<ImageSection heading="Open Data Day" subHeading="Join us!" src="/img/open_data_day.jpg">
  A day dedicated to open data.
</ImageSection>
\`\`\`
        `,
      },
    },
  },
  args: {
    heading: "Open Data Day",
    subHeading: "Join the community for a day of civic hacking.",
    src: "/img/open_data_day.jpg",
    alt: "Open Data Day event",
    sectionType: "light",
    children: "A day dedicated to using open data to improve our city.",
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
  name: "ImageSection",
});

export const DarkTheme = meta.story({
  name: "Dark Theme",
  args: {
    heading: "Get Involved",
    subHeading: "Make a difference in your community.",
    sectionType: "dark",
    src: "/img/home/learningblocks.jpg",
    alt: "Community volunteers",
    children:
      "Open Fresno uses technology and open data for positive civic change.",
  },
});

export const PrimaryTheme = meta.story({
  name: "Primary Theme",
  args: {
    heading: "Our Projects",
    subHeading: "Technology for civic good.",
    sectionType: "primary",
    src: "/img/open_data_day.jpg",
    alt: "Projects overview",
    children:
      "We build open-source tools that make government data accessible.",
  },
});

export const RendersHeading = meta.story({
  name: "Renders Heading Content",
  tags: ["test"],
  args: {
    heading: "Test Heading",
    subHeading: "Test Subheading",
    src: "/img/1.png",
    alt: "Test image",
    children: "Test body paragraph",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Test Heading")).toBeInTheDocument();
    await expect(canvas.getByText("Test Subheading")).toBeInTheDocument();
    await expect(canvas.getByText("Test body paragraph")).toBeInTheDocument();
    await expect(canvas.getByAltText("Test image")).toBeInTheDocument();
  },
});
