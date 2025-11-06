import GeneralSection from "@/components/ui/GeneralSection";
import {titleCase} from "@/utility/string";

export default {
  title: "Components/GeneralSection",
  component: GeneralSection,
};

export const Default = {
  args:{
    sectionType:"dark",
    children:"[Displayed Elements Here]",
    heading:"Heading",
    subHeading:"Sub Heading"
  },
  name:"GeneralSection",
  decorators:[
    (Story) => (
      <div>
        <Story />
        {["light", "dark", "gray", "primary", "secondary"].map(type => <GeneralSection sectionType={type} heading="Type" subHeading={titleCase(type)}>{titleCase(type)}</GeneralSection>)}
        {["light", "dark"].map(it => it+"-split").map(type => <GeneralSection sectionType={type} heading="Type" subHeading={titleCase(type)}>{titleCase(type)}</GeneralSection>)}
      </div>
    ),
  ]
};
