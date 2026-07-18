import { ResponsiveGrid } from "@/components/portfolio-ui";

type Project = {
  category: string;
  linkLabel: string;
  link: string;
  title: string;
  description: string;
  tags: string[];
  accent: string;
};

type ProjectShowcaseProps = {
  projects: Project[];
};

export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const featuredProjects = projects.slice(0, 2);
  const remainingProjects = projects.slice(2);

  return (
    <div className="project-showcase">
      <ResponsiveGrid className="featured-projects" columns={2}>
        {featuredProjects.map((project, index) => (
          <a
            className={`project-feature accent-${project.accent}`}
            data-cursor-label="View"
            data-reveal="card"
            href={project.link}
            key={project.title}
            rel="noreferrer"
            target="_blank"
          >
            <div className="project-feature-top">
              <span>{String(index + 1).padStart(2, "0")} · {project.category}</span>
              <span>View project ↗</span>
            </div>
            <div className="project-feature-copy">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags" aria-label="Technologies">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
            <div className="project-preview" aria-hidden="true">
              <div className="preview-window">
                <div className="preview-bar"><i /><i /><i /><span>{project.title}</span></div>
                <div className="preview-body">
                  <div className="preview-rail"><i /><i /><i /><i /></div>
                  <div className="preview-main">
                    <span className="preview-chip">{project.category}</span>
                    <strong>{index === 0 ? "Proof before application." : "Money, made legible."}</strong>
                    <i /><i /><i />
                    <b />
                  </div>
                </div>
              </div>
              <div className="preview-orbit" />
            </div>
          </a>
        ))}
      </ResponsiveGrid>

      <div className="project-list">
        {remainingProjects.map((project, index) => (
          <a
            className={`project-row accent-${project.accent}`}
            data-cursor-label="View"
            data-reveal="card"
            href={project.link}
            key={project.title}
            rel="noreferrer"
            target="_blank"
          >
            <span className="project-index">{String(index + 3).padStart(2, "0")}</span>
            <div className="project-heading">
              <span>{project.category}</span>
              <h3>{project.title}</h3>
            </div>
            <p>{project.description}</p>
            <div className="project-tags" aria-label="Technologies">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <span className="project-arrow" aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </div>
  );
}
