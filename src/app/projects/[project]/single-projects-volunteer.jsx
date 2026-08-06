import rectangleBlue from "@/../public/img/about/rectangle-blue.png";
import Blurb from "@/components/ui/blurb.jsx";
import HeaderUnderline from "@/components/ui/header-underline.jsx";
import { SectionType } from "@/utility/constants/theme";
import Link from "next/link";

/**
 * Instructions for the project page.
 * @returns {React.JSX.Element}
 */
export default function SingleProjectsVolunteer({ sectionType = SectionType.light }) {
  return (
    <section id="project-section-start" className={`mt-8 py-24 app-color--${sectionType}`}>
      <div className="page-container single-project-volunteer-layout">
        <div className="single-project-volunteer-info">
          <HeaderUnderline
            title="Volunteer"
            description="Why Join Open Fresno?"
            sectionType={sectionType}
          >
            <span className="text-md">
              Join us at Open Fresno to collaborate on impactful civic tech projects and connect
              with a diverse community of like-minded individuals. It&apos;s a rewarding way to make
              a meaningful difference in our city.
            </span>
          </HeaderUnderline>
        </div>
        <div className="single-project-volunteer-cta">
          <Blurb src={rectangleBlue} alt="rectangle" float="center">
            <div className="single-project-volunteer-cta-text">
              <span className={`app-text--${SectionType.invert(sectionType)}`}>
                Not a volunteer yet?
              </span>
              <br />
              <Link href="/get-started" className="underline">
                Get Started
              </Link>
            </div>
          </Blurb>
        </div>
      </div>
    </section>
  );
}
