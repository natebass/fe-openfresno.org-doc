import preview from "#.storybook/preview.js";
import GeneralSection from "@/components/ui/GeneralSection.jsx";
import { titleCase } from "@/utility/string.js";

const meta = preview.meta({
  title: "Components/GeneralSection",
  component: GeneralSection,
  parameters: {
    componentSubtitle: "Full-width themed section with heading and content",
    docs: {
      description: {
        component: `
A flexible, multipurpose component for rendering a section. The element spans the width of its container with a
background color based upon the provided SectionType, defaulting to a light background with dark text. Child elements
are padded within the Page Container to match the design style.

This ensures consistent styling and behavior for all interactive elements while keeping the core component logic minimal.
The specific appearance is controlled entirely by the CSS classes passed via the "className" prop, which affects styling
of the element, and "divClassName" for layout, with a default display mode of flex.

## Props

- heading \\{string\\} - The heading to display.
- subHeading \\{JSX.Element\\} - The subheading to display. Can be a string or a React element.
- sectionType \\{string\\} - The SectionType to color the element. Default values is "SectionType.light".
- children \\{JSX.Element\\} - The content to be rendered inside the button or link (e.g., text, icons, other components).

## Examples

A General Section with the default primary styles.

\`\`\`
<GeneralSection heading="Heading" subHeading="Sub Heading">Learn More</GeneralSection>
\`\`\`

A General Section with a dark color pallet.

\`\`\`
<GeneralSection heading="Heading" subHeading="Sub Heading" sectionType={SectionType.dark}>Learn More</GeneralSection>
\`\`\`
        `,
      },
    },
  },
});

export default meta;

export const Default = meta.story({
  args: {
    sectionType: "dark",
    children: "[Displayed Elements Here]",
    heading: "Heading",
    subHeading: "Sub Heading",
  },
  name: "GeneralSection",
  decorators: [
    (Story) => (
      <div>
        <Story />
        {["light", "dark", "gray", "primary", "secondary"].map((type) => (
          <GeneralSection
            key={type}
            sectionType={type}
            heading="Type"
            subHeading={titleCase(type)}
          >
            {titleCase(type)}
          </GeneralSection>
        ))}
        {["light", "dark"]
          .map((it) => it + "-split")
          .map((type) => (
            <GeneralSection
              key={type}
              sectionType={type}
              heading="Type"
              subHeading={titleCase(type)}
            >
              {titleCase(type)}
            </GeneralSection>
          ))}
      </div>
    ),
  ],
});
