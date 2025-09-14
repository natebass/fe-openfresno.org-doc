import AppNavbar from "./navbar/AppNavbar";
import AppFooter from "./footer/AppFooter";
import Banner from "./Banner";

/**
 * Default app layout that includes a navbar, banner and footer.
 * - Set "fade navbar" to enable a transparent navbar. You must set the background color of a root tag like <body> to control the color behind the navbar. The color should match the background of the first main content.
 * - The child of AppLayout is usually a <main> tag.
 *
 * Example:
 <AppLayout fadeNavbar={true} />
 <main></main>
 <AppLayout />
 */
export default function AppLayout({
  children,
  banner = { active: false },
  fadeNavbar = false,
}) {
  return (
    <>
      <AppNavbar fade={fadeNavbar} />
      {banner.active && <Banner>{banner.message}</Banner>}
      <div
        className={
          banner.active
            ? "toolbar-after-content-with-banner"
            : "toolbar-after-content"
        }
      >
        {children}
      </div>
      <AppFooter />
    </>
  );
}
