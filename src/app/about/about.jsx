import AboutSectionCollage from "./about-section-collage";
import AboutSectionLanding from "./about-section-landing";
import AboutSectionMission from "./about-section-mission";
import AboutSectionOpportunities from "./about-section-opportunities";
import AboutSectionTeam from "./about-section-team";
import { SectionType } from "@/utility/constants/theme";

/**
 * About page.
 * @returns {React.JSX.Element}
 */
export default function About() {
  return (
    <div className="">
      <AboutSectionLanding sectionType={SectionType.light} />
      <AboutSectionCollage sectionType={SectionType.light} />
      <AboutSectionMission sectionType={SectionType.dark} />
      <AboutSectionTeam sectionType={SectionType.light} />
      <AboutSectionOpportunities sectionType={SectionType.dark} />
    </div>
  );
}
