import preview from "#.storybook/preview.js";
import SimpleDialog from "@/components/ui/simple-dialog.jsx";
import { BaseButton } from "@/components/ui/button/button.jsx";
import { expect, fn } from "storybook/test";
import { useState } from "react";

const meta = preview.meta({
  title: "Components/SimpleDialog",
  component: SimpleDialog,
  parameters: {
    componentSubtitle: "Modal dialog with title, close button, and backdrop",
    docs: {
      description: {
        component: `
A modal dialog component built on the native HTML \`<dialog>\` element. It supports a title, close button (rendered as an \`IconX\`), and backdrop click dismissal.

The dialog is controlled via \`openState\` (boolean) and \`handleClose\` (callback). It uses \`showModal()\` for proper modal behavior including focus trapping and backdrop overlay.

## Props

- **title \\{string\\}** - The dialog title displayed in the header.
- **children \\{JSX.Element\\}** - Content rendered inside the dialog body.
- **openState \\{boolean\\}** - Controls whether the dialog is open or closed.
- **handleClose \\{() => void\\}** - Callback invoked when the dialog should close (close button or backdrop click).
- **sectionType \\{SectionType\\}** - Theme variant. Defaults to \`SectionType.light\`.
- **fullWidth \\{boolean\\}** - Makes the dialog span full width.
- **maxWidth \\{string\\}** - Sets a maximum width for the dialog.

## Examples

\`\`\`jsx
<SimpleDialog title="Confirm" openState={true} handleClose={() => setOpen(false)}>
  Are you sure you want to continue?
</SimpleDialog>
\`\`\`
        `,
      },
    },
  },
  args: {
    title: "Dialog Title",
    openState: true,
    handleClose: fn(),
    children: "This is the dialog content. You can place any content here.",
  },
  argTypes: {
    openState: { control: "boolean" },
    sectionType: {
      control: "select",
      options: ["light", "dark", "gray", "primary", "secondary"],
    },
    fullWidth: { control: "boolean" },
  },
});

export default meta;

export const Default = meta.story({
  name: "SimpleDialog",
});

export const Interactive = meta.story({
  name: "Interactive Toggle",
  parameters: {
    docs: {
      description: {
        story:
          "A fully interactive example with a button that opens and closes the dialog. Demonstrates the controlled open/close pattern.",
      },
    },
  },
  render: () => {
    const InteractiveDialog = () => {
      const [open, setOpen] = useState(false);
      return (
        <div>
          <BaseButton className="btn" onClick={() => setOpen(true)}>
            Open Dialog
          </BaseButton>
          <SimpleDialog
            title="Interactive Dialog"
            openState={open}
            handleClose={() => setOpen(false)}
          >
            <p>This dialog was opened by clicking the button.</p>
            <p>Click the X button or the backdrop to close it.</p>
          </SimpleDialog>
        </div>
      );
    };
    return <InteractiveDialog />;
  },
});

export const WithRichContent = meta.story({
  name: "With Rich Content",
  args: {
    title: "Project Details",
    openState: true,
    children: (
      <div className="flex flex-col gap-4">
        <p>
          <strong>Project:</strong> Open Budget Fresno
        </p>
        <p>
          <strong>Status:</strong> Active
        </p>
        <p>
          <strong>Team:</strong> 8 volunteers
        </p>
        <hr />
        <p>
          This project visualizes the City of Fresno&apos;s budget data, making it accessible and
          understandable for residents.
        </p>
      </div>
    ),
  },
});

export const ClosedState = meta.story({
  name: "Closed State",
  args: {
    title: "Hidden Dialog",
    openState: false,
    children: "You should not see this content.",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Dialog in its closed state. The native `<dialog>` element is hidden when `openState` is `false`.",
      },
    },
  },
});

export const CloseButtonTest = meta.story({
  name: "Close Button Calls Handler",
  tags: ["test"],
  args: {
    title: "Closable Dialog",
    openState: true,
    handleClose: fn(),
    children: "Click the close button to test the handler.",
  },
  play: async ({ args, canvas, userEvent }) => {
    const closeButton = await canvas.findByRole("button", {
      name: /close/i,
    });
    await expect(closeButton).toBeInTheDocument();

    await userEvent.click(closeButton);
    await expect(args.handleClose).toHaveBeenCalled();
  },
});

export const AccessibilityTest = meta.story({
  name: "accessibility Check",
  tags: ["test"],
  args: {
    title: "Accessible Dialog",
    openState: true,
    children: "This dialog should have proper ARIA attributes.",
  },
  play: async ({ canvas }) => {
    const dialog = canvas.getByRole("dialog");
    await expect(dialog).toBeInTheDocument();
    await expect(dialog).toHaveAttribute("aria-labelledby", "dialog-title");

    const title = canvas.getByText("Accessible Dialog");
    await expect(title).toBeInTheDocument();
  },
});
