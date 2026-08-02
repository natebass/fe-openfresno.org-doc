import preview from "#.storybook/preview.js";
import SidebarSection from "@/components/ui/steps/SidebarSection.jsx";
import Steps from "@/components/ui/steps/Steps.jsx";
import PageContainer from "@/components/ui/PageContainer.jsx";
import { expect } from "storybook/test";

const meta = preview.meta({
  title: "Components/SidebarSection",
  component: SidebarSection,
  parameters: {
    componentSubtitle: "Two-column layout with main content and a resource sidebar",
    docs: {
      description: {
        component: `
A responsive layout component that places main content alongside a fixed-width sidebar. The sidebar contains:

1. A \`CenteredInImage\` CTA banner ("Not a volunteer yet? Get Started")
2. Resource links: Code of Conduct, New Member Form, and Meeting Link

The main content area is a flexible column that accepts any children. On mobile, the layout stacks vertically.

## Props

- **children \\{React.ReactNode\\}** - Main content displayed in the flexible left column.
- **sectionType \\{string\\}** - Theme variant controlling accent colors for the CTA text.

## Examples

\`\`\`jsx
<SidebarSection sectionType="light">
  <h2>Main Content Here</h2>
  <p>Any content can go in the main area.</p>
</SidebarSection>
\`\`\`
        `,
      },
    },
  },
  args: {
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
  name: "SidebarSection",
  args: {
    children: (
      <div>
        <h2 className="text-2xl font-bold">Getting Started Guide</h2>
        <p className="mt-4">
          Welcome to Open Fresno! Follow the steps below to get involved with our civic tech
          community.
        </p>
      </div>
    ),
  },
  decorators: [
    (Story) => (
      <PageContainer>
        <Story />
      </PageContainer>
    ),
  ],
});

export const WithSteps = meta.story({
  name: "With Steps Content",
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates the typical usage pattern: Steps component as the main content with the resource sidebar.",
      },
    },
  },
  args: {
    sectionType: "light",
    children: (
      <Steps
        steps={[
          {
            id: 1,
            title: "Join the Community",
            body: "Sign up on Meetup and introduce yourself.",
          },
          {
            id: 2,
            title: "Find a Project",
            body: "Browse active projects that match your skills.",
          },
          {
            id: 3,
            title: "Start Contributing",
            body: "Pick up a task and submit your first PR.",
          },
        ]}
      />
    ),
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
    sectionType: "dark",
    children: (
      <div>
        <h2 className="text-2xl font-bold">Resources</h2>
        <p className="mt-4">
          Find all the resources you need to start contributing to Open Fresno projects.
        </p>
      </div>
    ),
  },
  decorators: [
    (Story) => (
      <PageContainer sectionType="dark">
        <Story />
      </PageContainer>
    ),
  ],
});

export const RendersSidebarLinks = meta.story({
  name: "Renders Sidebar Links",
  tags: ["test"],
  args: {
    sectionType: "light",
    children: <p>Main content area</p>,
  },
  decorators: [
    (Story) => (
      <PageContainer>
        <Story />
      </PageContainer>
    ),
  ],
  play: async ({ canvas, step }) => {
    await step("Verify main content renders", async () => {
      await expect(canvas.getByText("Main content area")).toBeInTheDocument();
    });

    await step("Verify CTA text renders", async () => {
      await expect(canvas.getByText(/Not a volunteer yet/i)).toBeInTheDocument();
      await expect(canvas.getByText("Get Started")).toBeInTheDocument();
    });

    await step("Verify sidebar links render", async () => {
      await expect(canvas.getByText("Code of Conduct")).toBeInTheDocument();
      await expect(canvas.getByText("New Member Form")).toBeInTheDocument();
      await expect(canvas.getByText("Meeting Link")).toBeInTheDocument();
    });
  },
});

export const ExternalLinksCheck = meta.story({
  name: "External Links Have Proper Attributes",
  tags: ["test"],
  args: {
    sectionType: "light",
    children: <p>Content</p>,
  },
  decorators: [
    (Story) => (
      <PageContainer>
        <Story />
      </PageContainer>
    ),
  ],
  play: async ({ canvas }) => {
    const newMemberLink = canvas.getByLabelText("Link to new member form.");
    await expect(newMemberLink).toHaveAttribute("target", "_blank");
    await expect(newMemberLink).toHaveAttribute("rel", expect.stringContaining("noopener"));

    const meetingLink = canvas.getByLabelText("Link to Meetup.");
    await expect(meetingLink).toHaveAttribute("target", "_blank");
    await expect(meetingLink).toHaveAttribute("rel", expect.stringContaining("noopener"));
  },
});
