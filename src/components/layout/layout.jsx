import Footer from "./footer";
import Navbar from "./navbar";

/**
 * The default layout for the application. It includes a navbar and footer.
 * - Set "fade navbar" to enable a transparent navbar. You must set the background color of a root tag like <body> to control the color behind the navbar. The color should match the background of the first main content.
 * - The child of AppLayout is usually a <main> tag.
 * Example:
 <AppLayout fadeNavbar={true} />
 <main></main>
 <AppLayout />
 */
export default function Layout({ children, fadeNavbar = false }) {
  return (
    <>
      <Navbar fade={fadeNavbar} />
      <div className="toolbar-after-content">{children}</div>
      <Footer />
    </>
  );
}
