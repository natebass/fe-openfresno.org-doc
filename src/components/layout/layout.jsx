import Footer from "./footer";
import Navbar from "./navbar";

/**
 * Provides the shared site chrome around page content.
 * @param {object} props - Component props.
 * @param {React.ReactNode} props.children - Page content, typically a main element.
 * @param {boolean} [props.fadeNavbar=false] - Enables the navbar's scroll fade treatment.
 * @returns {React.JSX.Element} Content framed by the navbar and footer.
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
