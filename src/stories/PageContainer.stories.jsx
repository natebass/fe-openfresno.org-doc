import preview from "#.storybook/preview.js";
import PageContainer from "@/components/ui/PageContainer.jsx";
import { titleCase } from "@/utility/string.js";

const meta = preview.meta({
  title: "Components/PageContainer",
  component: PageContainer,
  docs: {
    description: {
      component: `
      A flexible, multipurpose component for rendering a section. The element spans the width of its container with a
background color based upon the provided SectionType, defaulting to a light background with dark text. Child elements
are padded within the Page Container to match the design style.

This ensures consistent styling and behavior for all interactive elements while keeping the core component logic minimal.
The specific appearance is controlled entirely by the CSS classes passed via the \`className\` prop, which affects styling
of the element, and \`divClassName\` for layout, with a default display mode of flex.

## Props

- className \\{string\\} - The CSS class names to apply for styling.
- divClassName \\{string\\} - The CSS class names to apply for children's layout.
- sectionType \\{string\\} - The SectionType to color the element. Default values is \`SectionType.light\`.
- children \\{JSX.Element\\} - The content to be rendered inside the button or link (e.g., text, icons, other components).
- display \\{string\\} Optionally changes the display type; default is a flex column
- noPadding \\{boolean\\} - Don't pad child elements; Default value is \`false\`.

## Examples

A page container with the default primary styles.

\`\`\`
<PageContainer>Learn More</PageContainer>
\`\`\`

A page container with a dark color pallet.

\`\`\`
<PageContainer sectionType={SectionType.dark}>Learn More</PageContainer>
\`\`\`

A page container displaying as a responsive 3-column grid with a dark color pallet.

\`\`\`
<PageContainer
  sectionType={SectionType.dark}
  display="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
>
  Learn More
</PageContainer>
\`\`\`

A page container with no padding.

\`\`\`
<PageContainer noPadding>Learn More</PageContainer>
\`\`\`
`,
    },
  },
});

export default meta;

export const Default = meta.story({
  name: "PageContainer",
  decorators: [
    (Story) => (
      <div>
        <Story />
        {["light", "dark", "gray", "primary", "secondary"].map((type) => (
          <PageContainer key={type} sectionType={type}>
            {titleCase(type)}
          </PageContainer>
        ))}
        {["light", "dark"]
          .map((it) => it + "-split")
          .map((type) => (
            <PageContainer key={type} sectionType={type}>
              {titleCase(type)}
            </PageContainer>
          ))}
      </div>
    ),
  ],
});
