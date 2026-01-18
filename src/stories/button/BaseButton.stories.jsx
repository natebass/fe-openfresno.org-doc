import preview from "#.storybook/preview";
import {
  BaseButton,
  NavExtendedToggle,
  NavToggle,
} from "../../components/ui/button/Button";

const meta = preview.meta({
  title: "Components/Button",
  component: BaseButton,
});

export default meta;

export const Default = meta.story({
  name: "Buttons",
  decorators: [
    (Story) => (
      <div>
        <Story />
        <div className="grid gap-y-4">
          <BaseButton className="btn">Primary Button</BaseButton>
          <BaseButton className="btn btn--grow">Grow Button</BaseButton>
          <BaseButton className="btn-small">Small Button</BaseButton>
          <BaseButton className="btn btn-alt btn-alt--transition">
            Fill Button
          </BaseButton>
          <NavExtendedToggle />
          <NavToggle />
        </div>
      </div>
    ),
  ],
});
