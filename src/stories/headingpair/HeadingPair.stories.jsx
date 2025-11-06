import PageContainer from "@/components/ui/PageContainer";
import { titleCase } from "@/utility/string";
import HeadingPair from "@/components/ui/HeadingPair";

export default {
  title: "Components/HeadingPair",
  component: HeadingPair,
};

export const Default = {
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
          <PageContainer>
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
};
