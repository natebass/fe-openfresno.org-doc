import {
  Button,
  NavExtendedToggle,
  NavToggle,
} from "../../components/ui/button/Button";

export default {
  title: "Components/Button",
  component: Button,
};

export const Default = {
  name: "Buttons",
  decorators: [
    (Story) => (
      <div>
        <Story />
        <div className="grid gap-y-4">
          <Button className="btn">Primary Button</Button>
          <Button className="btn btn--grow">Grow Button</Button>
          <Button className="btn-small">Small Button</Button>
          <Button className="btn btn-alt btn-alt--transition">
            Fill Button
          </Button>
          <NavExtendedToggle />
          <NavToggle />
        </div>
      </div>
    ),
  ],
};
