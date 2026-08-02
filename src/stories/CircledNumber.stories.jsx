import preview from "#.storybook/preview.js";
import CircledNumber from "@/components/ui/CircledNumber.jsx";
import PageContainer from "@/components/ui/PageContainer.jsx";
import { SectionType } from "@/utility/constants/theme.js";
import { expect } from "storybook/test";

const meta = preview.meta({
  title: "Components/CircledNumber",
  component: CircledNumber,
  parameters: {
    componentSubtitle: "Displays a number inside a themed circle",
    docs: {
      description: {
        component: `
A simple display component that renders a number inside a styled circle. The circle color adapts to the current \`SectionType\` theme via CSS class names.

Uses \`forwardRef\` so parent components (e.g., Timeline) can read the element's bounding rect for scroll-driven animations.

## Props

- **number \\{number\\}** - The number to display inside the circle.
- **sectionType \\{SectionType\\}** - Theme variant controlling the circle's accent color. Defaults to \`SectionType.light\`.
- **ref \\{React.Ref\\}** - Optional forwarded ref attached to the root element.

## Examples

\`\`\`jsx
<CircledNumber number={1} />
<CircledNumber number={5} sectionType={SectionType.dark} />
\`\`\`
        `,
      },
    },
  },
  args: {
    number: 1,
    sectionType: SectionType.light,
  },
  argTypes: {
    number: {
      control: { type: "number", min: 0, max: 99 },
      description: "The number displayed inside the circle",
    },
    sectionType: {
      control: "select",
      options: Object.values(SectionType).filter(
        (v) => typeof v === "string",
      ),
      description: "Theme variant for the circle accent color",
    },
  },
});

export default meta;

export const Default = meta.story({
  name: "CircledNumber",
  args: { number: 1 },
  decorators: [
    (Story) => (
      <PageContainer>
        <div className="flex items-center gap-8">
          <Story />
          {[1, 2, 3, 4, 5].map((n) => (
            <CircledNumber key={n} number={n} />
          ))}
        </div>
      </PageContainer>
    ),
  ],
});

export const AllThemes = meta.story({
  name: "All Themes",
  args: { number: 7 },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates the CircledNumber across all available SectionType themes.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div>
        <PageContainer>
          <Story />
        </PageContainer>
        {["light", "dark", "primary", "secondary", "gray"].map((type) => (
          <PageContainer key={type} sectionType={type}>
            <div className="flex items-center gap-4">
              <CircledNumber number={7} sectionType={type} />
              <span>{type}</span>
            </div>
          </PageContainer>
        ))}
      </div>
    ),
  ],
});

export const InteractionTest = meta.story({
  name: "Renders Number",
  tags: ["test"],
  args: { number: 42 },
  decorators: [
    (Story) => (
      <PageContainer>
        <Story />
      </PageContainer>
    ),
  ],
  play: async ({ canvas }) => {
    await expect(canvas.getByText("42")).toBeInTheDocument();
  },
});
