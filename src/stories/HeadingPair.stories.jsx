import preview from "#.storybook/preview.js";
import HeadingPair from "@/components/ui/HeadingPair.jsx";
import PageContainer from "@/components/ui/PageContainer.jsx";
import { titleCase } from "@/utility/string.js";

const meta = preview.meta({
  title: "Components/HeadingPair",
  component: HeadingPair,
  docs: {
    description: {
      component: `
      A simple reusable element, for displaying a heading, subheading pair

## Props

- heading \\{string\\} - The heading to display.
- subHeading \\{JSX.Element\\} - The subheading to display.
- subHeadingWidth \\{CSS.width\\} - The maximum width of the displayed subheading to display. Defaults to \`70%\`.
- className \\{string\\} - The CSS class names to apply for styling.
- sectionType \\{string\\} - The SectionType to color the element. Default values is \`SectionType.light\`.

## Examples

A heading pair with a light color pallet.

\`\`\`
<HeadingPair heading="Heading" subHeading="Sub Heading"/>
\`\`\`

A heading pair with a dark color pallet.

\`\`\`
<HeadingPair heading="Heading" subHeading="Sub Heading" sectionType={SectionType.dark}/>
\`\`\`

      `,
    },
  },
});

export default meta;

export const Default = meta.story({
  args: {
    sectionType: "light",
    heading: "Heading",
    subHeading: "Sub Heading",
  },
  name: "HeadingPair",
  decorators: [
    (Story) => (
      <div>
        <PageContainer>
          <Story />
        </PageContainer>
        {["light", "dark", "gray", "primary", "secondary"].map((type) => (
          <PageContainer key={type}>
            <HeadingPair
              sectionType={type}
              heading="Type"
              subHeading={titleCase(type)}
            />
          </PageContainer>
        ))}
      </div>
    ),
  ],
});
