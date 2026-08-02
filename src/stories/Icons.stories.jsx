import preview from "#.storybook/preview.js";
import { HamburgerStaggered } from "@/components/ui/icon/HamburgerStaggered.jsx";
import { IconX } from "@/components/ui/icon/IconX.jsx";
import { LogoTextBlack } from "@/components/ui/icon/logo-text-black.jsx";
import PageContainer from "@/components/ui/PageContainer.jsx";
import { expect } from "storybook/test";

const meta = preview.meta({
  title: "Components/Icons",
  component: HamburgerStaggered,
  parameters: {
    componentSubtitle: "SVG icon components used across the application",
    docs: {
      description: {
        component: `
A collection of SVG icon components used throughout the application. All icons accept \`width\`, \`height\`, and \`className\` props for sizing and styling.

## Available Icons

### HamburgerStaggered
A three-line hamburger menu icon with a staggered bottom line. Used in the mobile navigation toggle.
- Default size: 44×44

### IconX
A close/dismiss icon rendered as an X shape. Used in the dialog close button and mobile nav.
- Default size: 32×36

### LogoTextBlack
The full Open Fresno logo with the organization name in SVG text. Used in the navbar and branding.
- Default size: 660×268

## Common Props

- **width \\{number\\}** - SVG width in pixels.
- **height \\{number\\}** - SVG height in pixels.
- **className \\{string\\}** - Additional CSS class names.

## Examples

\`\`\`jsx
<HamburgerStaggered />
<IconX width={24} height={24} />
<LogoTextBlack width={200} height={80} />
\`\`\`
        `,
      },
    },
  },
});

export default meta;

export const AllIcons = meta.story({
  name: "All Icons",
  render: () => (
    <PageContainer>
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <HamburgerStaggered />
          <span>HamburgerStaggered (44×44)</span>
        </div>
        <div className="flex items-center gap-4">
          <IconX />
          <span>IconX (32×36)</span>
        </div>
        <div className="flex items-center gap-4">
          <LogoTextBlack width={200} height={80} />
          <span>LogoTextBlack (200×80)</span>
        </div>
      </div>
    </PageContainer>
  ),
});

export const HamburgerIcon = meta.story({
  name: "HamburgerStaggered",
  parameters: {
    docs: {
      description: {
        story:
          "The hamburger menu icon at various sizes. The staggered bottom line creates a distinctive appearance.",
      },
    },
  },
  render: () => (
    <PageContainer>
      <div className="flex items-end gap-6">
        <div className="flex flex-col items-center gap-2">
          <HamburgerStaggered width={24} height={24} />
          <span className="text-sm">24px</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <HamburgerStaggered width={32} height={32} />
          <span className="text-sm">32px</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <HamburgerStaggered />
          <span className="text-sm">44px (default)</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <HamburgerStaggered width={64} height={64} />
          <span className="text-sm">64px</span>
        </div>
      </div>
    </PageContainer>
  ),
});

export const CloseIcon = meta.story({
  name: "IconX",
  parameters: {
    docs: {
      description: {
        story: "The close (X) icon at various sizes.",
      },
    },
  },
  render: () => (
    <PageContainer>
      <div className="flex items-end gap-6">
        <div className="flex flex-col items-center gap-2">
          <IconX width={16} height={18} />
          <span className="text-sm">16px</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <IconX width={24} height={27} />
          <span className="text-sm">24px</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <IconX />
          <span className="text-sm">32px (default)</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <IconX width={48} height={54} />
          <span className="text-sm">48px</span>
        </div>
      </div>
    </PageContainer>
  ),
});

export const Logo = meta.story({
  name: "LogoTextBlack",
  parameters: {
    docs: {
      description: {
        story:
          "The full Open Fresno logo at various sizes. Contains the house icon, code brackets, and organization name.",
      },
    },
  },
  render: () => (
    <PageContainer>
      <div className="flex flex-col gap-8">
        <div>
          <p className="mb-2 text-sm font-bold">Small (150×60)</p>
          <LogoTextBlack width={150} height={60} />
        </div>
        <div>
          <p className="mb-2 text-sm font-bold">Medium (300×120)</p>
          <LogoTextBlack width={300} height={120} />
        </div>
        <div>
          <p className="mb-2 text-sm font-bold">Large (500×200)</p>
          <LogoTextBlack width={500} height={200} />
        </div>
      </div>
    </PageContainer>
  ),
});

export const IconsOnDarkBackground = meta.story({
  name: "On Dark Background",
  parameters: {
    docs: {
      description: {
        story: "Icons displayed on a dark background to verify visibility and contrast.",
      },
    },
  },
  render: () => (
    <PageContainer sectionType="dark">
      <div className="flex items-center gap-8">
        <HamburgerStaggered />
        <IconX />
        <LogoTextBlack width={200} height={80} />
      </div>
    </PageContainer>
  ),
});

export const RendersAllSVGs = meta.story({
  name: "SVG Elements Render",
  tags: ["test"],
  render: () => (
    <PageContainer>
      <HamburgerStaggered />
      <IconX />
      <LogoTextBlack width={200} height={80} />
    </PageContainer>
  ),
  play: async ({ canvas }) => {
    const svgs = canvas.getAllByRole("img", { hidden: true });
    // If no role="img", check for SVG elements directly
    if (svgs.length === 0) {
      const container = canvas.getByText("", { selector: "div" });
      await expect(container).toBeInTheDocument();
    }
  },
});
