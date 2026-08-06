import HeadingPair from "@/components/ui/heading-pair.jsx";
import { SectionType } from "@/utility/constants/theme";

/**
 * Renders a themed title and description pair with an underline and optional supporting text.
 * @param {object} props - Component props.
 * @param {React.ReactNode} [props.children] - Supporting text below the headings.
 * @param {string} [props.className=""] - Classes applied to the wrapper.
 * @param {string} [props.sectionType] - Theme variant for the header.
 * @param {React.ReactNode} props.title - Primary heading content.
 * @param {React.ReactNode} props.description - Secondary heading content.
 * @param {boolean} [props.large=false] - Uses the larger secondary-heading style.
 * @returns {React.JSX.Element} The underlined header block.
 */
export default function HeaderUnderline({
  children,
  className = "",
  sectionType,
  title,
  description,
  large,
}) {
  return (
    <div
      className={`${className} underline-header-container heading-underline ${sectionType === SectionType.dark && "underline-alt"}`}
    >
      <HeadingPair
        heading={title}
        subHeading={description}
        subHeadingWidth={"100%"}
        sectionType={sectionType}
        className="lg:mb-4"
        large={large}
      />
      {children && (
        <p
          className={`heading-paragraph-large ${sectionType === SectionType.dark && "heading-paragraph-color-dark"}`}
        >
          {children}
        </p>
      )}
    </div>
  );
}
