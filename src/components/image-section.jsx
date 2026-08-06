import { SectionType } from "@/utility/constants/theme.js";
import Image from "next/image";

/**
 * Renders a themed text-and-image section.
 * @param {object} props - Component props.
 * @param {React.ReactNode} [props.heading=""] - Primary heading content.
 * @param {React.ReactNode} [props.subHeading] - Secondary heading content.
 * @param {string} [props.alt="Open Data Day"] - Image alternative text.
 * @param {import("next/image").StaticImageData|string} props.src - Image source.
 * @param {string} [props.sectionType=SectionType.light] - Theme variant for the section.
 * @param {React.ReactNode} [props.children] - Body content.
 * @returns {React.JSX.Element} The split text-and-image section.
 */
export default function ImageSection({
  heading = "",
  subHeading = <></>,
  alt = "Open Data Day",
  src,
  sectionType = SectionType.light,
  children = <></>,
}) {
  return (
    <section className={`app-color--${sectionType} py-12 lg:py-24`}>
      <div className="home-split-wide">
        <div className="grid items-center">
          <div>
            <h1 className={`heading-main app-color--${SectionType.invert(sectionType)}`}>
              {heading}
            </h1>
            <h2 className="sub-heading-main">{subHeading}</h2>
            <p className="paragraph-large pt-10">{children}</p>
          </div>
        </div>
        <div className="grid items-center justify-end">
          <Image
            alt={alt}
            width={728}
            height={577}
            className="home-split-image translate-x-6 object-cover lg:translate-x-10"
            src={src}
          />
        </div>
      </div>
    </section>
  );
}
