import Timeline3 from "@/components/ui/timeline3/Timeline3";

export default {
  title: "Components/Timeline/Timeline3",
  component: Timeline3,
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
};

export const Default = {
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
};
