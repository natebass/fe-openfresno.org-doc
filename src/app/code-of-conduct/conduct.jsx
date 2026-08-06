import ConductSectionBullets from "./conduct-section-bullets";
import ConductSectionEmail from "./conduct-section-email";
import ConductSectionLanding from "./conduct-section-landing";
import ConductSectionPolicies from "./conduct-section-policies";
import { SectionType } from "@/utility/constants/theme";

export default function Conduct() {
  return (
    <div className="">
      <ConductSectionLanding sectionType={SectionType.light} />
      <ConductSectionBullets sectionType={SectionType.light} />
      <ConductSectionPolicies sectionType={SectionType.dark} />
      <ConductSectionEmail sectionType={SectionType.gray} />
    </div>
  );
}
