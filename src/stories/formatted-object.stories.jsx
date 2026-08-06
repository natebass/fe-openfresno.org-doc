import preview from "#.storybook/preview.js";
import ProjectInformationSection from "@/app/projects/project-information-section.jsx";
import { expect } from "storybook/test";

const sampleProject = {
  title: "Open Budget",
  description:
    "A web application that visualizes the City of Fresno's budget data, making it accessible and understandable for residents.",
  status: "active",
  technologies: "React, D3.js, Node.js",
  team_size: "8 volunteers",
  start_date: "March 2024",
};

const meta = preview.meta({
  title: "Components/FormattedObject",
  component: ProjectInformationSection,
  parameters: {
    componentSubtitle: "Displays an object's properties as a titled, lined section",
    docs: {
      description: {
        component: `
Renders an object's key-value pairs as a \`LinedSection\` with horizontal rules. The special keys \`title\` and \`description\` are extracted: \`title\` becomes the section heading, and \`description\` is rendered as a paragraph. All remaining keys are converted to title-cased labels.

Useful for displaying structured data like project details, event information, or configuration objects.

## Props

- **obj \\{object\\}** - The object to display. Special properties:
  - \`title\` \\{string\\} - Used as the section heading (can be overridden by the \`title\` prop).
  - \`description\` \\{string\\} - Rendered as a paragraph below the heading.
  - All other keys are displayed as labeled rows.
- **title \\{string\\}** - Override for the section heading. Defaults to \`obj.title\`.
- **sectionType \\{SectionType\\}** - Theme variant. Defaults to \`SectionType.light\`.

## Examples

\`\`\`jsx
<FormattedObject obj={{ title: "Project", status: "active", team_size: "5" }} />
\`\`\`
        `,
      },
    },
  },
  args: {
    obj: sampleProject,
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
  name: "FormattedObject",
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 800 }}>
        <Story />
      </div>
    ),
  ],
});

export const CustomTitle = meta.story({
  name: "Custom Title Override",
  args: {
    obj: sampleProject,
    title: "Custom Project Title",
  },
  parameters: {
    docs: {
      description: {
        story: "Overrides the object's `title` property with a custom title passed as a prop.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 800 }}>
        <Story />
      </div>
    ),
  ],
});

export const MinimalObject = meta.story({
  name: "Minimal Object",
  args: {
    obj: {
      title: "Quick Note",
      priority: "high",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 800 }}>
        <Story />
      </div>
    ),
  ],
});

export const DarkTheme = meta.story({
  name: "Dark Theme",
  args: {
    obj: sampleProject,
    sectionType: "dark",
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 800 }}>
        <Story />
      </div>
    ),
  ],
});

export const WithLoader = meta.story({
  name: "With Loaded Data",
  tags: ["test"],
  parameters: {
    docs: {
      description: {
        story:
          "Uses a Storybook loader to provide the object data asynchronously, simulating a fetch from an external source.",
      },
    },
  },
  loaders: [
    async () => ({
      projectData: {
        title: "Loaded Project",
        description: "This data was loaded asynchronously via a Storybook loader.",
        framework: "Next.js",
        language: "JavaScript",
      },
    }),
  ],
  render: (args, { loaded: { projectData } }) => (
    <div style={{ maxWidth: 800 }}>
      <ProjectInformationSection {...args} obj={projectData} />
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Loaded Project")).toBeInTheDocument();
    await expect(canvas.getByText("Next.js")).toBeInTheDocument();
  },
});
