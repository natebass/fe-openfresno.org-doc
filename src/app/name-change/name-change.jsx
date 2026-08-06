"use client";
import NameChangeSectionLanding from "./name-change-landing";
import { SectionType } from "@/utility/constants/theme";

/**
 * About page.
 * @returns {React.JSX.Element}
 */
export default function NameChange() {
  return (
    <div className="">
      <NameChangeSectionLanding sectionType={SectionType.light} />
    </div>
  );
}
