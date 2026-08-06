"use client";
import ContactSectionLanding from "./contact-section-landing";
import ContactSectionMission from "./contact-section-mission";
import { SectionType } from "@/utility/constants/theme";

/**
 * About page.
 * @returns {React.JSX.Element}
 */
export default function Contact() {
  return (
    <div className="">
      <ContactSectionLanding sectionType={SectionType.light} />
      <ContactSectionMission sectionType={SectionType.dark} />
    </div>
  );
}
