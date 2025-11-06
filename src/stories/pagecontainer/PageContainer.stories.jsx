import PageContainer from "@/components/ui/PageContainer";
import { titleCase } from "@/utility/string";

export default {
  title: "Components/PageContainer",
  component: PageContainer,
};

export const Default = {
  name: "PageContainer",
  decorators: [
    (Story) => (
      <div>
        <Story />
        {["light", "dark", "gray", "primary", "secondary"].map((type) => (
          <PageContainer sectionType={type}>{titleCase(type)}</PageContainer>
        ))}
        {["light", "dark"]
          .map((it) => it + "-split")
          .map((type) => (
            <PageContainer sectionType={type}>{titleCase(type)}</PageContainer>
          ))}
      </div>
    ),
  ],
};
