import HeadingPair from "@/components/ui/heading-pair.jsx";
import { SectionType } from "@/utility/constants/theme.js";

/**
 * Renders a two-column section with headings beside body content.
 * @param {object} props - Component props.
 * @param {React.ReactNode} [props.heading=""] - Primary heading content.
 * @param {React.ReactNode} [props.subHeading] - Secondary heading content.
 * @param {string} [props.sectionType=SectionType.light] - Theme variant for the section.
 * @param {React.ReactNode} [props.children] - Section body content.
 * @returns {React.JSX.Element} The themed split-content section.
 */
export default function GeneralSection({
  heading = "",
  subHeading = <></>,
  sectionType = SectionType.light,
  children = <></>,
}) {
  return (
    <section className={`app-color--${sectionType} py-12 lg:py-24`}>
      <div className="page-split">
        <HeadingPair heading={heading} subHeading={subHeading} sectionType={sectionType} />
        <p className="paragraph-large">{children}</p>
      </div>
    </section>
  );
}
