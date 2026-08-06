import Link from "next/link";

const SingleProjectsLinks = () => {
  return (
    <section className="single-project-links app-color--primary">
      <div className="single-project-links-container">
        <Link className="underline" href="#project-brief">
          Project Brief
        </Link>
        <Link className="underline" href="#screenshots">
          Screenshots
        </Link>
        <Link className="underline" href="#roadmap">
          Roadmap
        </Link>
        <Link className="underline" href="#how-to-contribute">
          How to Contribute
        </Link>
        <Link className="underline" href="#resources">
          Resources
        </Link>
        <Link className="underline" href="#how-to-volunteer">
          How to Volunteer
        </Link>
      </div>
    </section>
  );
};

export default SingleProjectsLinks;
