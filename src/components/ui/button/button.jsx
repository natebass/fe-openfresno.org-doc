import { HamburgerStaggered } from "@/components/ui/icon/hamburger-staggered.jsx";
import { IconX } from "@/components/ui/icon/icon-x.jsx";
import { ChevronDown } from "@/integrations/tabler-icon/chevron-down";
import { ChevronLeft } from "@/integrations/tabler-icon/chevron-left";
import { ChevronRight } from "@/integrations/tabler-icon/chevron-right";
import { ChevronUp } from "@/integrations/tabler-icon/chevron-up";
import Link from "next/link";

/**
 * Renders a styled Next.js link when `href` is supplied, otherwise a native button.
 * @param {object} props - Component props.
 * @param {string} [props.className] - Classes applied to the rendered element.
 * @param {string} [props.href] - Link destination; selects link rendering when provided.
 * @param {string} [props.target] - Link target.
 * @param {React.MouseEventHandler<HTMLButtonElement>} [props.onClick] - Button click handler.
 * @param {React.ReactNode} [props.children] - Preferred interactive element content.
 * @param {React.ReactNode} [props.textContent] - Deprecated fallback content when children are absent.
 * @returns {React.JSX.Element} A link or button.
 */
const BaseButton = ({ className, href, target, onClick, children, textContent }) => {
  if (href) {
    return (
      <Link className={className} href={href} target={target ? target : "_self"}>
        {children || textContent}
      </Link>
    );
  }
  return (
    <button className={className} onClick={onClick}>
      {children || textContent}
    </button>
  );
};

/**
 * Renders the desktop or mobile control for the extended navigation panel.
 * @param {object} props - Component props.
 * @param {boolean} props.mobile - Selects the desktop text control when true.
 * @param {boolean} props.extendedMenuVisible - Whether the extended menu is open.
 * @param {(visible: boolean) => void} props.showExtendedMenu - Updates extended menu visibility.
 * @returns {React.JSX.Element} The navigation menu toggle.
 */
const NavToggle = ({ mobile, extendedMenuVisible, showExtendedMenu }) => {
  if (mobile) {
    return (
      <BaseButton
        className="navbar-toggle-button navbar-toggle-button--desktop"
        onClick={() => showExtendedMenu(!extendedMenuVisible)}
      >
        Get Involved
        {extendedMenuVisible ? <ChevronUp className="ms-2" /> : <ChevronDown className="ms-2" />}
      </BaseButton>
    );
  } else {
    return (
      <BaseButton
        className="navbar-toggle-button--mobile"
        onClick={() => showExtendedMenu(!extendedMenuVisible)}
      >
        {extendedMenuVisible ? <IconX /> : <HamburgerStaggered />}
      </BaseButton>
    );
  }
};

/**
 * Renders the mobile extended-menu switch between primary and secondary links.
 * @param {object} props - Component props.
 * @param {(showSecondary: boolean) => void} props.toggleMobileNavPosition - Updates the active mobile panel.
 * @param {boolean} props.mobileNavPosition - Whether the secondary panel is active.
 * @returns {React.JSX.Element} The mobile panel toggle.
 */
const NavExtendedToggle = ({ toggleMobileNavPosition, mobileNavPosition }) => {
  if (mobileNavPosition) {
    return (
      <BaseButton
        className="navbar-extended-toggle-button"
        onClick={() => toggleMobileNavPosition(!mobileNavPosition)}
      >
        <ChevronLeft className="-ms-1 me-1" height={20} width={20} />
        Back
      </BaseButton>
    );
  } else {
    return (
      <BaseButton
        className="navbar-extended-toggle-button"
        onClick={() => toggleMobileNavPosition(!mobileNavPosition)}
      >
        Get Involved
        <ChevronRight className="ms-1" height={20} width={20} />
      </BaseButton>
    );
  }
};

export { BaseButton as default, BaseButton, NavExtendedToggle, NavToggle };
