 
import preview from "#.storybook/preview";
import {
  BaseButton,
  NavExtendedToggle,
  NavToggle,
} from "../../components/ui/button/Button";
import { fn } from 'storybook/test';


const meta = preview.meta({
  title: "Components/Button",
  component: BaseButton,
  args: { onClick: fn() },
});

export default meta;

export const Default = meta.story({
  name: "Buttons",
  decorators: [
    (Story, { args }) => (
      <div>
        <Story />
        <div className="grid gap-y-4">
          <BaseButton className="btn" onClick={args.onClick}>Primary Button</BaseButton>
          <BaseButton className="btn btn--grow" onClick={args.onClick}>Grow Button</BaseButton>
          <BaseButton className="btn-small" onClick={args.onClick}>Small Button</BaseButton>
          <BaseButton className="btn btn-alt btn-alt--transition" onClick={args.onClick}>
            Fill Button
          </BaseButton>
          <NavExtendedToggle />
          <NavToggle />
        </div>
      </div>
    ),
  ],
});
