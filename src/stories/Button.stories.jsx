import preview from "#.storybook/preview.js";
import {
  BaseButton,
  NavExtendedToggle,
  NavToggle,
} from "../components/ui/button/Button.jsx";
import { fn } from "storybook/test";

const meta = preview.meta({
  title: "Components/Button",
  component: BaseButton,
  args: { onClick: fn() },
  parameters: {
    componentSubtitle:
      "Flexible button and link component with multiple style variants",
    docs: {
      description: {
        component: `
A flexible, multipurpose component for rendering a styled button or link.

This component acts as a smart wrapper, rendering either a Next.js \`<Link>\` or a native \`<button>\` element based on whether the \`href\` prop is provided.

This ensures consistent styling and behavior for all interactive elements while keeping the core component logic minimal. The specific appearance is controlled entirely by the CSS classes passed via the \`className\` prop.

## Props

- **className** - The CSS class names to apply for styling (e.g., 'btn', 'btn-small', 'btn-alt--transition').
- **href \\{string\\}** - If provided, the component renders a \`<Link>\` with this URL.
- **target \\{string = "\\_self"\\}** - Specifies where to open the linked document (e.g., \`_blank\` for a new tab). Only applies when \`href\` is set.
- **onClick \\{function\\}** - Click handler function. Only applies when the component renders as a \`<button>\`.
- **children \\{React.ReactNode\\}** - The content to be rendered inside the button or link (e.g., text, icons, other components).
- **textContent \\{string|React.ReactNode\\}** - DEPRECATED: Use children instead. The text or content is displayed inside the button or link.

## Examples

A link with the default primary styles.

\`\`\`
<Button className="btn" href="/about">Learn More</Button>
\`\`\`

A link with a growing border effect.

\`\`\`
<Button className="btn btn--grow" href="/contact">
  Get In Touch
</Button>
\`\`\`

A button with the alternate styles.

\`\`\`
<Button className="btn btn-alt" onClick={() => console.log('Button clicked!')}>
  Submit
</Button>
\`\`\`
        `,
      },
    },
  },
});

export default meta;

export const Default = meta.story({
  name: "Buttons",
  decorators: [
    (Story, { args }) => (
      <div>
        <Story />
        <div className="grid gap-y-4">
          <BaseButton className="btn" onClick={args.onClick}>
            Primary Button
          </BaseButton>
          <BaseButton className="btn btn--grow" onClick={args.onClick}>
            Grow Button
          </BaseButton>
          <BaseButton className="btn-small" onClick={args.onClick}>
            Small Button
          </BaseButton>
          <BaseButton
            className="btn btn-alt btn-alt--transition"
            onClick={args.onClick}
          >
            Fill Button
          </BaseButton>
          <NavExtendedToggle />
          <NavToggle />
        </div>
      </div>
    ),
  ],
});
