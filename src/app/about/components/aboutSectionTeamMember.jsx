import BasePathImage from "@/integrations/gh-pages/BasePathImage";

export default function AboutSectionTeamMember({
  src="",
  name=(Math.random()>0.5?"John":"Jane")+" Doe",
  title=""
}) {
  return(
    <div className={`team-grid-item mb-6 max-lg:mx-auto `}>
      <BasePathImage
        width={294}
        height={294}
        src={src}
        alt={`Team Member Name: ${name}`}
      />
      <div className={`member-info-container`}>
        <div className={`member-name-container`}>
          <h2 className={`member-name`}>{name}</h2>
          <h3 className={`member-title`}>{title}</h3>
        </div>
      </div>
    </div>
  );
}