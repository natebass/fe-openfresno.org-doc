import preview from "#.storybook/preview.js";
import { TimelineItem, SimpleButton } from "@/components/ui/timeline/timeline-item.jsx";
import PageContainer from "@/components/page-container.jsx";
import { expect, fn } from "storybook/test";

const meta = preview.meta({
  title: "Components/TimelineItem",
  component: TimelineItem,
  parameters: {
    componentSubtitle: "Single timeline entry with number, heading, content, and buttons",
    docs: {
      description: {
        component: `
A responsive component for displaying a single volunteer opportunity within a vertical timeline. Renders a \`CircledNumber\`, a heading, body text, and optional action buttons.

On desktop, items alternate between left and right sides of the timeline. On mobile, they stack vertically.

Also exports the \`SimpleButton\` class for defining button data.

## Props

- **number \\{integer\\}** - The number displayed in the circle.
- **heading \\{string\\}** - The item heading.
- **buttons \\{SimpleButton[]\\}** - Action buttons. \`SimpleButton\` has \`text\` and \`href\` properties.
- **updateTimelineNumbers \\{function\\}** - Callback invoked with \`(number, boundingRect)\` for scroll animation positioning.
- **sectionType \\{SectionType\\}** - Theme variant. Defaults to \`SectionType.light\`.
- **children \\{JSX.Element\\}** - Body text content.

## SimpleButton Class

\`\`\`js
new SimpleButton("Learn More", "/about")
\`\`\`

## Examples

\`\`\`jsx
<TimelineItem
  number={1}
  heading="Join the Community"
  buttons={[new SimpleButton("Get Started", "/get-started")]}
  updateTimelineNumbers={() => {}}
>
  Sign up and introduce yourself.
</TimelineItem>
\`\`\`
        `,
      },
    },
  },
  args: {
    number: 1,
    heading: "Join the Community",
    buttons: [new SimpleButton("Get Started", "/get-started")],
    updateTimelineNumbers: fn(),
    sectionType: "light",
    children: "Sign up on our Meetup page and introduce yourself at the next weekly meeting.",
  },
  argTypes: {
    number: { control: { type: "number", min: 1, max: 20 } },
    sectionType: {
      control: "select",
      options: ["light", "dark", "gray", "primary", "secondary"],
    },
  },
});

export default meta;

export const Default = meta.story({
  name: "TimelineItem",
  decorators: [
    (Story) => (
      <PageContainer>
        <Story />
      </PageContainer>
    ),
  ],
});

export const WithMultipleButtons = meta.story({
  name: "Multiple Buttons",
  args: {
    number: 2,
    heading: "Find a Project",
    buttons: [
      new SimpleButton("Browse Projects", "/projects"),
      new SimpleButton("Pitch an idea", "/pitch"),
    ],
    children: "Explore our active projects and find one that matches your skills and interests.",
  },
  parameters: {
    docs: {
      description: {
        story: "When two or more buttons are provided, they render in a horizontal flex row.",
      },
    },
  },
  decorators: [
    (Story) => (
      <PageContainer>
        <Story />
      </PageContainer>
    ),
  ],
});

export const DarkTheme = meta.story({
  name: "Dark Theme",
  args: {
    number: 3,
    heading: "Start Contributing",
    sectionType: "dark",
    buttons: [new SimpleButton("Contribute", "/get-started")],
    children: "Pick up a task, submit your first pull request, and start making an impact.",
  },
  decorators: [
    (Story) => (
      <PageContainer sectionType="dark">
        <Story />
      </PageContainer>
    ),
  ],
});

export const MultipleItems = meta.story({
  name: "Multiple Items",
  parameters: {
    docs: {
      description: {
        story: "Multiple TimelineItems stacked to show how they appear in sequence.",
      },
    },
  },
  render: () => {
    const noop = () => {};
    return (
      <PageContainer>
        <div className="timeline">
          <TimelineItem
            number={1}
            heading="Research"
            buttons={[new SimpleButton("Learn More", "/about")]}
            updateTimelineNumbers={noop}
          >
            Identify problems in the community.
          </TimelineItem>
          <TimelineItem
            number={2}
            heading="Build"
            buttons={[new SimpleButton("See Projects", "/projects")]}
            updateTimelineNumbers={noop}
          >
            Develop open-source solutions.
          </TimelineItem>
          <TimelineItem
            number={3}
            heading="Deploy"
            buttons={[
              new SimpleButton("Get Started", "/get-started"),
              new SimpleButton("Meetup", "https://www.meetup.com/openfresno"),
            ]}
            updateTimelineNumbers={noop}
          >
            Ship it and measure impact.
          </TimelineItem>
        </div>
      </PageContainer>
    );
  },
});

export const RendersContent = meta.story({
  name: "Renders Content",
  tags: ["test"],
  args: {
    number: 5,
    heading: "Test Heading",
    buttons: [new SimpleButton("Test Button", "/test")],
    updateTimelineNumbers: fn(),
    children: "Test body text",
  },
  decorators: [
    (Story) => (
      <PageContainer>
        <Story />
      </PageContainer>
    ),
  ],
  play: async ({ canvas, step }) => {
    await step("Verify number renders", async () => {
      await expect(canvas.getByText("5")).toBeInTheDocument();
    });

    await step("Verify heading renders", async () => {
      await expect(canvas.getByText("Test Heading")).toBeInTheDocument();
    });

    await step("Verify body text renders", async () => {
      await expect(canvas.getByText("Test body text")).toBeInTheDocument();
    });

    await step("Verify button renders", async () => {
      await expect(canvas.getByText("Test Button")).toBeInTheDocument();
    });
  },
});

export const CallsUpdateCallback = meta.story({
  name: "Calls Update Callback",
  tags: ["test"],
  args: {
    number: 1,
    heading: "Callback Test",
    buttons: [new SimpleButton("Action", "/")],
    updateTimelineNumbers: fn(),
    children: "Testing the resize callback.",
  },
  decorators: [
    (Story) => (
      <PageContainer>
        <Story />
      </PageContainer>
    ),
  ],
  play: async ({ args }) => {
    // The component calls updateTimelineNumbers on mount via useEffect
    await expect(args.updateTimelineNumbers).toHaveBeenCalled();
    await expect(args.updateTimelineNumbers).toHaveBeenCalledWith(1, expect.any(Object));
  },
});
