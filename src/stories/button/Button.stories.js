import { Button, NavExtendedToggle } from "../../components/ui";

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
        <div className="grid">
          <Button className="btn">Primary Button</Button>
          <br />
          <Button className="btn btn--grow">Grow Button</Button>
          <br />
          <Button className="btn-small">Small Button</Button>
          <br />
          <Button className="btn btn-alt btn-alt--transition">
            Fill Button
          </Button>
          <NavExtendedToggle />
        </div>
      </div>
    ),
  ],
};
