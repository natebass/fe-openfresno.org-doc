import { SectionType } from "@/utility/constants/theme";

/**
 * Wraps page content in a themed section and constrained inner container.
 * @param {object} props - Component props.
 * @param {string} [props.className=""] - Classes applied to the outer section.
 * @param {string} [props.divClassName=""] - Classes applied to the inner container.
 * @param {string} [props.sectionType=SectionType.light] - Theme variant for the section.
 * @param {React.ReactNode} [props.children] - Content rendered in the container.
 * @param {string} [props.display="flex flex-col"] - Display and layout classes for the inner container.
 * @param {boolean} [props.noPadding=false] - Removes the section's vertical padding when true.
 * @returns {React.JSX.Element} The themed page container.
 */
export default function PageContainer({
  className = "",
  divClassName = "",
  sectionType = SectionType.light,
  children = <></>,
  display = `flex flex-col`,
  noPadding = false,
}) {
  return (
    <section
      className={`${noPadding ? "" : "py-6 lg:py-12"} app-color--${sectionType} ${className}`}
    >
      <div className={`page-container ${display} ${divClassName}`}>{children}</div>
    </section>
  );
}
