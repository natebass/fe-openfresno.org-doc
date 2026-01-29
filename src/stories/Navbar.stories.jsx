import preview from "#.storybook/preview.js";
import NavbarE7e from "../components/layout/NavbarE7e.jsx";
import { expect } from "storybook/test";

const meta = preview.meta({
  title: "Components/Navigation Bar",
  component: NavbarE7e,
  parameters: {
    componentSubtitle:
      "Application navigation bar with extended menu and scroll animations",
    layout: "fullscreen",
    docs: {
      description: {
        component: `
The default navigation bar for the application. It includes an extended menu that expands to show more text underneath the navbar.

### Experimental Features ⚠️

**Fade on Scroll:**

This effect uses CSS scroll-driven animations. **It is not supported by older browsers** (e.g., Chrome < 115, Firefox, Safari). On unsupported platforms, it functions the same as if fade were set to false.

**Sliding Underline:**

The desktop links have a sliding underline animation when the page navigates.

## Props

- fade \\{boolean\\} - Whether to enable the fade effect on scroll.
  <br />

# ExtendedNavBar

A responsive component that extends the main application navbar with additional navigation menus.

Features:

- Mobile View: Toggles between two distinct navigation menus.
- Desktop View: Displays multiple sections with descriptive text and call-to-action links.

## Props

- className \\{string\\} - Optional additional CSS class names applied to the root container for layout or styling overrides.
- Returns - A responsive extended navbar with mobile toggle menus and desktop sections containing navigation links and descriptions.

### How CSS Scroll-Driven Animations Work

The CSS Scroll-Driven Animations Module lets you tie animations directly to scroll progress instead of time. Key properties:

- **\`animation-timeline\`** → lets you bind an animation to a scroll timeline
- **\`scroll-timeline\`** → defines a named scroll progress timeline
- **\`view-timeline\`** → defines a timeline based on when an element enters/exits the viewport
- **\`animation-range\`** → controls where along the scroll the animation starts/ends

### Example Implementation

\`\`\`css
@keyframes fade-in {
  from { opacity: 0; transform: translateY(50px); }
  to   { opacity: 1; transform: translateY(0); }
}

.scroll-section {
  animation: fade-in 1s linear;
  animation-timeline: view(); /* ties animation to element visibility */
  animation-range: entry 0% exit 100%; /* start when entering, end when leaving */
}
\`\`\`

👉 This means the element fades in as you scroll it into view, without any JavaScript.

### Learn More

- [MDN: CSS Scroll-Driven Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations)
- [Can I Use: Browser Support](https://caniuse.com/mdn-css_properties_animation-timeline_scroll)

### Testing the Fade Effect

The stories below include a tall black background (200% viewport height) to allow you to test the scrolling fade behavior. Scroll up and down to see how the navbar opacity changes based on scroll position.
        `,
      },
    },
  },
});

export default meta;

export const Default = meta.story({
  args: { fade: false },
  decorators: [
    (Story) => (
      <div>
        <Story />
        <div
          style={{
            height: "200vh",
            background: "#fffcf5",
            display: "flex",
            justifyContent: "center",
            fontSize: "1.5rem",
            textAlign: "center",
            padding: "2rem",
          }}
        >
          <div>
            <h2 style={{ marginBottom: "1rem", marginTop: "8rem" }}>
              Default fixed navbar
            </h2>
          </div>
        </div>
      </div>
    ),
  ],
});

export const WithFade = meta.story({
  args: { fade: true },
  parameters: {
    docs: {
      description: {
        story: `
This story demonstrates the modern CSS scroll-driven animation feature used in the navbar fade effect.

**Browser Compatibility:**
- ✅ Chrome/Edge 115+ (Full support)
- ✅ Safari 26.0+ (Recently added)
- ❌ Firefox (Behind flag)
- ❌ Internet Explorer (Not supported)

**CSS Implementation:**
The fade effect uses \`animation-timeline: scroll()\` to tie the opacity animation to scroll progress rather than time.

Scroll up and down in this story to see the effect in action (Chrome/Edge only).
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
        <div
          style={{
            height: "200vh",
            background: "#fffcf5",
            display: "flex",
            justifyContent: "center",
            fontSize: "1.5rem",
            textAlign: "center",
            padding: "2rem",
          }}
        >
          <div>
            <h2 style={{ marginBottom: "1rem", marginTop: "8rem" }}>
              Fade-effect navigation bar
            </h2>
            <p>Scroll up and down to see the navbar fade in/out.</p>
            <div
              style={{ maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}
            >
              <p
                style={{
                  marginBottom: "2rem",
                  marginTop: "2rem",
                  opacity: 0.8,
                }}
              >
                This uses modern CSS \`animation-timeline: scroll()\` - no
                JavaScript required!
              </p>
              <div
                style={{
                  background: "rgba(122,122,255,0.1)",
                  padding: "1.5rem",
                  borderRadius: "8px",
                  marginBottom: "2rem",
                }}
              >
                <h3 style={{ marginBottom: "1rem" }}>
                  Browser Support Status:
                </h3>
                <p>✅ Chrome/Edge 115+</p>
                <p>✅ Safari 26.0+</p>
                <p>❌ Firefox (flag required)</p>
                <p>❌ Internet Explorer</p>
              </div>

              <p style={{ fontSize: "0.9rem", opacity: 0.7 }}>
                Learn more:
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations"
                  style={{ color: "#4fc3f7" }}
                  target="_blank"
                  rel="noopener"
                >
                  MDN Documentation
                </a>{" "}
                |
                <a
                  href="https://caniuse.com/mdn-css_properties_animation-timeline_scroll"
                  style={{ color: "#4fc3f7" }}
                  target="_blank"
                  rel="noopener"
                >
                  Browser Support
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  ],
});

export const ToggleMenu = meta.story({
  tags: ["test"],
  decorators: [
    (Story) => (
      <div>
        <Story />
        <div
          style={{
            height: "200vh",
            background: "#fffcf5",
            display: "flex",
            justifyContent: "center",
            fontSize: "1.5rem",
            textAlign: "center",
            padding: "2rem",
          }}
        >
          <div>
            <h2 style={{ marginBottom: "1rem", marginTop: "8rem" }}>
              Menu Toggle Test
            </h2>
            <p>This story tests the mobile menu toggle functionality.</p>
            <p>
              The test automatically clicks the menu button to open/close it.
            </p>
            <p style={{ marginTop: "2rem", opacity: 0.7, fontSize: "1rem" }}>
              Resize window to mobile size to see hamburger menu
            </p>
          </div>
        </div>
      </div>
    ),
  ],
  play: async ({ canvas, userEvent }) => {
    const toggleButton = await canvas.findByRole("button", {
      name: /Get Involved/i,
    });

    await userEvent.click(toggleButton);
    await expect(
      canvas.getByRole("region", { name: /Extended navigation/i }),
    ).toBeInTheDocument();

    await userEvent.click(toggleButton);
    await expect(
      canvas.queryByRole("region", { name: /Extended navigation/i }),
    ).not.toBeInTheDocument();
  },
});
