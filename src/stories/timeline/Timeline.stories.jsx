import Timeline from "@/components/ui/timeline/Timeline";

export default {
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
}

export const Default = {
  decorators: [
    (Story) => (
      <div>
        <Story/>
      </div>
    ),
  ],
}
