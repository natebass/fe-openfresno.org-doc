import preview from "#.storybook/preview.js";
import CenteredInImage from "@/components/ui/CenteredInImage.jsx";
import PageContainer from "@/components/ui/PageContainer.jsx";
import { expect } from "storybook/test";

const meta = preview.meta({
  title: "Components/CenteredInImage",
  component: CenteredInImage,
  parameters: {
    componentSubtitle:
      "Overlay centered content on top of a Next.js Image",
    docs: {
      description: {
        component: `
Renders a Next.js \`<Image>\` with child content absolutely positioned and centered on top of it. The container uses \`position: relative\` with the children inside a flex-centered overlay.

Supports floating left, right, or center alignment via the \`float\` prop.

## Props

- **src \\{string|StaticImageData\\}** - Image source path or imported static image.
- **alt \\{string\\}** - Alt text for the image. Defaults to \`"rectangle"\`.
- **float \\{"left"|"right"|"center"\\}** - Alignment of the container. Defaults to \`"left"\`.
- **width \\{number\\}** - Image width in pixels. Defaults to \`400\`.
- **height \\{number\\}** - Image height in pixels. Defaults to \`300\`.
- **children \\{React.ReactNode\\}** - Content centered over the image.

## Examples

\`\`\`jsx
<CenteredInImage src="/img/about/rectangle.png" alt="Banner">
  <h2>Overlay Text</h2>
</CenteredInImage>
\`\`\`
        `,
      },
    },
  },
  args: {
    src: "/img/about/rectangle.png",
    alt: "Decorative rectangle",
    float: "left",
    width: 400,
    height: 300,
  },
  argTypes: {
    float: {
      control: "select",
      options: ["left", "right", "center"],
    },
    width: { control: { type: "number", min: 100, max: 800 } },
    height: { control: { type: "number", min: 100, max: 600 } },
  },
});

export default meta;

export const Default = meta.story({
  name: "CenteredInImage",
  args: {
    children: (
      <div className="text-xl font-bold text-white">Overlay Text</div>
    ),
  },
  decorators: [
    (Story) => (
      <PageContainer>
        <Story />
      </PageContainer>
    ),
  ],
});

export const CenterAligned = meta.story({
  name: "Center Aligned",
  args: {
    float: "center",
    children: (
      <div className="text-2xl font-bold text-white">Centered Content</div>
    ),
  },
  decorators: [
    (Story) => (
      <PageContainer>
        <Story />
      </PageContainer>
    ),
  ],
});

export const BlueRectangle = meta.story({
  name: "Blue Rectangle CTA",
  args: {
    src: "/img/about/rectangle-blue.png",
    alt: "Blue rectangle",
    float: "right",
    children: (
      <div className="mx-auto w-fit text-xl font-bold text-white sm:text-3xl">
        <span>Not a volunteer yet?</span>
        <br />
        <span className="underline">Get Started</span>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates the CTA pattern used in the sidebar, with text overlaid on a blue rectangle image.",
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

export const AllFloatVariants = meta.story({
  name: "All Float Variants",
  parameters: {
    docs: {
      description: {
        story:
          "Shows all three float positions: left (default), center, and right.",
      },
    },
  },
  decorators: [
    () => (
      <PageContainer>
        <div className="flex flex-col gap-8">
          {["left", "center", "right"].map((float) => (
            <div key={float}>
              <p className="mb-2 font-bold">float: {float}</p>
              <CenteredInImage
                src="/img/about/rectangle.png"
                alt={`${float} aligned`}
                float={float}
                width={300}
                height={200}
              >
                <span className="text-lg font-bold text-white">{float}</span>
              </CenteredInImage>
            </div>
          ))}
        </div>
      </PageContainer>
    ),
  ],
});

export const RendersImageAndOverlay = meta.story({
  name: "Renders Image and Overlay",
  tags: ["test"],
  args: {
    src: "/img/about/rectangle.png",
    alt: "Test image",
    children: <span>Test overlay</span>,
  },
  decorators: [
    (Story) => (
      <PageContainer>
        <Story />
      </PageContainer>
    ),
  ],
  play: async ({ canvas }) => {
    await expect(canvas.getByAltText("Test image")).toBeInTheDocument();
    await expect(canvas.getByText("Test overlay")).toBeInTheDocument();
  },
});
