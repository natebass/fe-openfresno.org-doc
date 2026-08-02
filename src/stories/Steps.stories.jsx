import preview from "#.storybook/preview.js";
import Steps from "@/components/ui/steps/Steps.jsx";
import PageContainer from "@/components/ui/PageContainer.jsx";
import { expect } from "storybook/test";

const sampleSteps = [
  {
    id: 1,
    title: "Join the Community",
    body: "Sign up on our Meetup page and introduce yourself at the next weekly meeting.",
  },
  {
    id: 2,
    title: "Find a Project",
    body: "Browse our active projects and find one that matches your skills and interests.",
  },
  {
    id: 3,
    title: "Start Contributing",
    body: "Pick up a task, submit your first pull request, and start making an impact.",
  },
];

const meta = preview.meta({
  title: "Components/Steps",
  component: Steps,
  parameters: {
    componentSubtitle:
      "Numbered instructional steps with circled numbers and content",
    docs: {
      description: {
        component: `
Renders a vertical sequence of numbered instructional steps. Each step displays a \`CircledNumber\` alongside a title and body text.

Useful for onboarding flows, how-to guides, and multi-step processes.

## Props

- **sectionType \\{SectionType\\}** - Theme variant for styling. Defaults to \`SectionType.light\`.
- **steps \\{Array<{id: string|number, title: string, body: string}>\\}** - Array of step data objects.
  - \`id\` - The step number displayed in the circle.
  - \`title\` - Step heading.
  - \`body\` - Step description text.

## Examples

\`\`\`jsx
<Steps steps={[
  { id: 1, title: "Sign Up", body: "Create your account." },
  { id: 2, title: "Configure", body: "Set your preferences." },
]} />
\`\`\`
        `,
      },
    },
  },
  args: {
    steps: sampleSteps,
    sectionType: "light",
  },
  argTypes: {
    sectionType: {
      control: "select",
      options: ["light", "dark", "gray", "primary", "secondary"],
    },
  },
});

export default meta;

export const Default = meta.story({
  name: "Steps",
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
    sectionType: "dark",
    steps: sampleSteps,
  },
  decorators: [
    (Story) => (
      <PageContainer sectionType="dark">
        <Story />
      </PageContainer>
    ),
  ],
});

export const SingleStep = meta.story({
  name: "Single Step",
  args: {
    steps: [
      {
        id: 1,
        title: "Get Started",
        body: "Visit our website and click the Get Started button.",
      },
    ],
  },
  decorators: [
    (Story) => (
      <PageContainer>
        <Story />
      </PageContainer>
    ),
  ],
});

export const ManySteps = meta.story({
  name: "Many Steps",
  args: {
    steps: [
      { id: 1, title: "Research", body: "Identify the problem." },
      { id: 2, title: "Plan", body: "Define the solution." },
      { id: 3, title: "Design", body: "Create wireframes and mockups." },
      { id: 4, title: "Develop", body: "Write the code." },
      { id: 5, title: "Test", body: "Run tests and fix bugs." },
      { id: 6, title: "Deploy", body: "Ship it to production." },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates the component with a longer list of steps.",
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

export const AllThemes = meta.story({
  name: "All Themes",
  decorators: [
    () => (
      <div>
        {["light", "dark", "gray", "primary", "secondary"].map((type) => (
          <PageContainer key={type} sectionType={type}>
            <p className="mb-4 font-bold">{type}</p>
            <Steps
              sectionType={type}
              steps={[
                { id: 1, title: "Step One", body: `Using ${type} theme.` },
                { id: 2, title: "Step Two", body: "Second step content." },
              ]}
            />
          </PageContainer>
        ))}
      </div>
    ),
  ],
});

export const RendersAllSteps = meta.story({
  name: "Renders All Steps",
  tags: ["test"],
  args: {
    steps: [
      { id: 1, title: "Alpha", body: "First step" },
      { id: 2, title: "Beta", body: "Second step" },
      { id: 3, title: "Gamma", body: "Third step" },
    ],
  },
  decorators: [
    (Story) => (
      <PageContainer>
        <Story />
      </PageContainer>
    ),
  ],
  play: async ({ canvas, step }) => {
    await step("Verify step numbers render", async () => {
      await expect(canvas.getByText("1")).toBeInTheDocument();
      await expect(canvas.getByText("2")).toBeInTheDocument();
      await expect(canvas.getByText("3")).toBeInTheDocument();
    });

    await step("Verify step titles render", async () => {
      await expect(canvas.getByText("Alpha")).toBeInTheDocument();
      await expect(canvas.getByText("Beta")).toBeInTheDocument();
      await expect(canvas.getByText("Gamma")).toBeInTheDocument();
    });

    await step("Verify step bodies render", async () => {
      await expect(canvas.getByText("First step")).toBeInTheDocument();
      await expect(canvas.getByText("Second step")).toBeInTheDocument();
      await expect(canvas.getByText("Third step")).toBeInTheDocument();
    });
  },
});
