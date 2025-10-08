import Timeline2 from "@/components/ui/timeline2/Timeline2";

export default {
  title: "Components/Timeline/Timeline2",
  component: Timeline2,
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
