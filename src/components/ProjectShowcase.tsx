"use client";

import { useEffect, useRef, useState } from "react";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsRef = useRef<Array<HTMLElement | null>>([]);
  const activeProject = projects[activeIndex] ?? projects[0];
  const progress = projects.length > 1 ? ((activeIndex + 1) / projects.length) * 100 : 100;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target instanceof HTMLElement) {
          const nextIndex = Number(visibleEntry.target.dataset.showcaseIndex ?? 0);
          setActiveIndex(nextIndex);
        }
      },
      {
        rootMargin: "-34% 0px -34% 0px",
        threshold: [0.35, 0.55, 0.75],
      },
    );

    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, [projects.length]);

  return (
    <div className="venture-showcase">
      <div className="showcase-copy">
        <div className="showcase-copy-card">
          <span className={`showcase-accent accent-${activeProject.accent}`} />
          <p className="eyebrow">{activeProject.category}</p>
          <h3>{activeProject.title}</h3>
          <p>{activeProject.description}</p>
          <ul>
            {activeProject.tags.map((tag) => (
              <li key={tag}>{tag} proof in a focused product build.</li>
            ))}
          </ul>
          <div className="tags">
            {activeProject.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <a className="showcase-link" href={activeProject.link} target="_blank" rel="noreferrer">
            {activeProject.linkLabel}
          </a>
        </div>
      </div>

      <div className="showcase-rail" aria-hidden="true">
        <span className="showcase-rail-dot">{String(activeIndex + 1).padStart(2, "0")}</span>
        <div className="showcase-rail-track">
          <span style={{ height: `${progress}%` }} />
        </div>
      </div>

      <div className="showcase-visuals">
        {projects.map((project, index) => (
          <article
            className={`showcase-visual accent-${project.accent} ${activeIndex === index ? "is-active" : ""}`}
            data-showcase-index={index}
            key={project.title}
            ref={(node) => {
              cardsRef.current[index] = node;
            }}
          >
            <div className="showcase-visual-top">
              <span>{project.category}</span>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
            </div>
            <div className="showcase-art" aria-hidden="true">
              <div className="mock-phone">
                <span />
                <i />
                <b />
              </div>
              <div className="mock-browser">
                <div className="mock-browser-bar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="mock-browser-body">
                  <strong>{project.title}</strong>
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
            <div className="showcase-visual-copy">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
