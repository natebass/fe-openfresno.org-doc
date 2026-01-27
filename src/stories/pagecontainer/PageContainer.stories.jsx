import preview from "#.storybook/preview";
import PageContainer from "@/components/ui/PageContainer";
import { titleCase } from "@/utility/string";

const meta = preview.meta({
  title: "Components/PageContainer",
  component: PageContainer,
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
