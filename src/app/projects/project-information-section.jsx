import PageContainer from "@/components/page-container.jsx";
import { SectionType } from "@/utility/constants/theme.js";
import { titleCase } from "@/utility/string.js";

/**
 * Formats an object's title, description, and remaining properties as a lined section.
 * @param {object} props - Component props.
 * @param {object} [props.obj={title: ""}] - Object with optional title and description fields.
 * @param {string} [props.title=props.obj.title] - Section title override.
 * @param {string} [props.sectionType=SectionType.light] - Theme variant for the section.
 * @returns {React.JSX.Element} A section containing the object's formatted details.
 */
export default function ProjectInformationSection({
  obj = { title: "" },
  title = obj.title,
  sectionType = SectionType.light,
}) {
  const lines = Object.entries(obj)
    .filter(([key]) => key !== "description" && key !== "title")
    .map(([key, value]) => [titleCase(key.replaceAll("_", " ")), value]);

  return (
    <PageContainer sectionType={sectionType}>
      <h2 className="sub-heading-main">{title}</h2>
      <div className={`my-2 h-1 w-10 app-fill--${SectionType.invert(sectionType)}`} />
      <p className="paragraph-large">{obj.description}</p>
      {lines.map((line, index) => (
        <SectionLine
          title={titleCase(line[0], /\\n|\n/, null).reduce((accumulator, value) =>
            accumulator === null ? (
              value
            ) : (
              <>
                {accumulator}
                <br />
                {value}
              </>
            ),
          )}
          key={line[0] + index}
        >
          {line[1]}
        </SectionLine>
      ))}
    </PageContainer>
  );
}

function SectionLine({ title = <></>, children = <></> }) {
  return (
    <>
      <hr className="mt-6 mb-2 h-px border-0 bg-neutral-500 lg:my-6" />
      <div className="flex flex-col lg:flex-row">
        <div className="grow basis-0 font-bold max-lg:mb-2">{title}</div>
        <div className="grow-2 basis-0">{children}</div>
      </div>
    </>
  );
}
