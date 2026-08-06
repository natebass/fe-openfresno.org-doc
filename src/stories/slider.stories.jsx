import preview from "#.storybook/preview.js";
import Slider from "@/components/ui/slider.jsx";
import PageContainer from "@/components/page-container.jsx";
import { expect, fn } from "storybook/test";

const meta = preview.meta({
  title: "Components/Slider",
  component: Slider,
  parameters: {
    componentSubtitle: "Carousel slider powered by keen-slider with dot navigation",
    docs: {
      description: {
        component: `
A carousel component built on [keen-slider](https://keen-slider.io/). Renders child elements as slides with automatic dot navigation indicators.

The component supports controlled and uncontrolled modes:
- **Uncontrolled**: manages its own slide index and loaded state internally.
- **Controlled**: accepts external \`setCurrentSlide\`, \`loadedState\`, and \`setUpdateSlider\` props for parent control.

## Props

- **className \\{string\\}** - CSS classes for the outer wrapper.
- **children \\{JSX.Element\\}** - Slide content. Each direct child becomes a slide.
- **startingSlide \\{number\\}** - Initial slide index. Defaults to \`0\`.
- **setCurrentSlide \\{function\\}** - Callback receiving the current slide index on change.
- **loadedState \\{[boolean, function]\\}** - Controlled loaded state tuple \`[loaded, setLoaded]\`.
- **setUpdateSlider \\{function\\}** - Receives a function that can be called to programmatically change slides.

## Examples

\`\`\`jsx
<Slider>
  <div className="keen-slider__slide">Slide 1</div>
  <div className="keen-slider__slide">Slide 2</div>
  <div className="keen-slider__slide">Slide 3</div>
</Slider>
\`\`\`
        `,
      },
    },
  },
  args: {
    className: "",
    startingSlide: 0,
    setCurrentSlide: fn(),
  },
});

export default meta;

const slideStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "200px",
  fontSize: "2rem",
  fontWeight: "bold",
  color: "white",
};

const slideColors = ["#4A90D9", "#50C878", "#FF6B6B", "#FFD93D", "#6C5CE7"];

export const Default = meta.story({
  name: "Slider",
  render: (args) => (
    <PageContainer>
      <Slider {...args}>
        {slideColors.map((color, i) => (
          <div
            key={i}
            className="keen-slider__slide"
            style={{ ...slideStyle, backgroundColor: color }}
          >
            Slide {i + 1}
          </div>
        ))}
      </Slider>
    </PageContainer>
  ),
});

export const TwoSlides = meta.story({
  name: "Two Slides",
  render: (args) => (
    <PageContainer>
      <Slider {...args}>
        <div className="keen-slider__slide" style={{ ...slideStyle, backgroundColor: "#4A90D9" }}>
          First
        </div>
        <div className="keen-slider__slide" style={{ ...slideStyle, backgroundColor: "#50C878" }}>
          Second
        </div>
      </Slider>
    </PageContainer>
  ),
});

export const StartOnThird = meta.story({
  name: "Starting on Third Slide",
  args: {
    startingSlide: 2,
  },
  parameters: {
    docs: {
      description: {
        story: "Uses the `startingSlide` prop to begin on the third slide (index 2).",
      },
    },
  },
  render: (args) => (
    <PageContainer>
      <Slider {...args}>
        {slideColors.map((color, i) => (
          <div
            key={i}
            className="keen-slider__slide"
            style={{ ...slideStyle, backgroundColor: color }}
          >
            Slide {i + 1}
          </div>
        ))}
      </Slider>
    </PageContainer>
  ),
});

export const WithRichContent = meta.story({
  name: "With Rich Content",
  parameters: {
    docs: {
      description: {
        story: "Slides containing structured content like cards, rather than simple text.",
      },
    },
  },
  render: (args) => (
    <PageContainer>
      <Slider {...args}>
        {[
          { title: "Open Budget", desc: "Budget visualization tool" },
          { title: "Trash AI", desc: "AI-powered litter detection" },
          { title: "Open Data Day", desc: "Annual civic hacking event" },
        ].map((project, i) => (
          <div
            key={i}
            className="keen-slider__slide"
            style={{
              ...slideStyle,
              flexDirection: "column",
              gap: "0.5rem",
              backgroundColor: slideColors[i],
            }}
          >
            <h3>{project.title}</h3>
            <p style={{ fontSize: "1rem", fontWeight: "normal" }}>{project.desc}</p>
          </div>
        ))}
      </Slider>
    </PageContainer>
  ),
});

export const RendersSlides = meta.story({
  name: "Renders Slides and dots",
  tags: ["test"],
  render: (args) => (
    <PageContainer>
      <Slider {...args}>
        <div className="keen-slider__slide" style={slideStyle}>
          Alpha
        </div>
        <div className="keen-slider__slide" style={slideStyle}>
          Beta
        </div>
        <div className="keen-slider__slide" style={slideStyle}>
          Gamma
        </div>
      </Slider>
    </PageContainer>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Alpha")).toBeInTheDocument();

    const dots = await canvas.findAllByRole("button");
    await expect(dots.length).toBe(3);
  },
});
