"use client";
import DonateSectionLanding from "./donate-section-landing";
import { SectionType } from "@/utility/constants/theme";

/**
 * About page.
 * @returns {React.JSX.Element}
 */
export default function Donate() {
  return (
    <div className="">
      <DonateSectionLanding sectionType={SectionType.light} />
    </div>
  );
}
