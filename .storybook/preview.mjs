import "../src/app/global.css";

/** @type { import('@storybook/nextjs-vite').Preview } */
const preview = {
  parameters: {
    options: {
      storySort: {
        order: ["Introduction", "Get Started", "*"],
      },
    },
    controls: {
      sort: "alpha", // or 'requiredFirst', or 'none'
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
};

export default preview;
