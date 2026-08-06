import { SectionType } from "@/utility/constants/theme";

/**
 * Renders a themed heading, subheading, and optional underline.
 * @param {object} props - Component props.
 * @param {React.ReactNode} [props.heading=""] - Primary heading content.
 * @param {React.ReactNode} [props.subHeading] - Secondary heading content.
 * @param {string} [props.subHeadingWidth="70%"] - CSS width value for the subheading.
 * @param {string} [props.className=""] - Classes applied to the wrapper.
 * @param {string} [props.sectionType=SectionType.light] - Theme variant for the heading.
 * @param {boolean} [props.underlined=true] - Shows the underline when true.
 * @param {boolean} [props.large=false] - Uses the larger subheading style.
 * @returns {React.JSX.Element} The heading pair.
 */
export default function HeadingPair({
  heading = "",
  subHeading = <></>,
  subHeadingWidth = "70%",
  className = "",
  sectionType = SectionType.light,
  underlined = true,
  large = false,
}) {
  return (
    <div className={className}>
      <h1 className={`heading-main app-color--${SectionType.invert(sectionType)}`}>{heading}</h1>
      <h2 className={`sub-heading-main${large ? "-large" : ""} w-[${subHeadingWidth}]`}>
        {subHeading}
      </h2>
      {underlined ? (
        <div className={`my-2 h-1 w-10 app-color--${SectionType.invert(sectionType)}`} />
      ) : (
        ""
      )}
    </div>
  );
}
