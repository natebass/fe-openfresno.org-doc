import preview from "#.storybook/preview";
import GeneralSection from "@/components/ui/GeneralSection";
import { titleCase } from "@/utility/string";

const meta = preview.meta({
  title: "Components/GeneralSection",
  component: GeneralSection,
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
