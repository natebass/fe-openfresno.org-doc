 
import preview from "#.storybook/preview";
import Timeline from "../../components/ui/timeline/Timeline";

const meta = preview.meta({
  title: "Components/Timeline",
  component: Timeline,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
# Timeline Component

The Timeline component for the Open Fresno website features an optional fade effect that uses modern CSS scroll-driven animations.
        `,
      },
    },
  },
});

export default meta;

export const Default = meta.story({
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
});
