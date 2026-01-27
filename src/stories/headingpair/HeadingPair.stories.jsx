import preview from "#.storybook/preview";
import HeadingPair from "@/components/ui/HeadingPair";
import PageContainer from "@/components/ui/PageContainer";
import { titleCase } from "@/utility/string";

const meta = preview.meta({
  title: "Components/HeadingPair",
  component: HeadingPair,
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
