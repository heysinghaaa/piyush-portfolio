import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { ScrollEffects } from "@/components/ScrollEffects";
import { TypewriterHeading } from "@/components/TypewriterHeading";
import { experience, metrics, profile, projects, skills, workModes } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <ScrollEffects />
      <div className="ambient-background" aria-hidden="true">
        <div className="ambient-grid" />
        <div className="ambient-beam ambient-beam-one" />
        <div className="ambient-beam ambient-beam-two" />
        <div className="ambient-panel ambient-panel-one" />
        <div className="ambient-panel ambient-panel-two" />
      </div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Piyush Singh home">
          <span className="brand-mark" aria-hidden="true">
            <Image
              className="brand-logo"
              src="/android-chrome-512x512.png"
              alt=""
              width={40}
              height={40}
              priority
            />
          </span>
          <span>{profile.name}</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#work">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-action" href={profile.resume} download>
          Resume
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy-block">
            <p className="eyebrow">India · Frontend engineering · AI training</p>
            <TypewriterHeading
              as="h1"
              id="hero-title"
              text="I'm Piyush Singh."
              highlight="Piyush Singh."
            />
            <p className="hero-role">Frontend Developer | AI Training Contributor</p>
            <p className="hero-copy">
              I build polished React and Next.js interfaces for dashboards, secure business workflows, and
              API-driven products. I also review AI-generated technical output with careful attention to edge
              cases, documentation, and real-world usability.
            </p>
            <div className="hero-actions" aria-label="Profile links">
              <a className="button primary" href="#contact">
                Hire me now
              </a>
              <a className="button ghost" href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="button ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
            <div className="hero-socials" aria-label="Quick contact links">
              <a href={`mailto:${profile.email}`}>Email</a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GH
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                IN
              </a>
            </div>
          </div>

          <div className="portrait-stage" aria-label="Piyush Singh portrait and profile highlights">
            <div className="portrait-orbit" aria-hidden="true" />
            <div className="portrait-frame">
              <Image
                className="portrait-image"
                src="/assets/piyush-portrait.png"
                alt="Portrait of Piyush Singh"
                width={1145}
                height={1373}
                priority
              />
            </div>
            <div className="hero-stat-card hero-stat-main">
              <strong>4+</strong>
              <span>Years of frontend experience</span>
            </div>
            <div className="hero-stat-card hero-stat-side">
              <strong>React · Next.js</strong>
              <span>Dashboards, APIs, reviews</span>
            </div>
          </div>
        </section>

        <section className="metrics-band" aria-label="Career highlights" data-reveal="lift">
          {metrics.map((metric) => (
            <div key={metric.number} data-reveal="card">
              <span>{metric.number}</span>
              <strong>{metric.label}</strong>
              <p>{metric.detail}</p>
            </div>
          ))}
        </section>

        <section className="section manifesto" aria-labelledby="profile-title" data-reveal="float">
          <p className="eyebrow">Profile</p>
          <div className="split-heading">
            <h2 id="profile-title">Practical frontend craft, sharpened by review work.</h2>
            <p>
              I turn product requirements, Figma systems, API outputs, and business rules into interfaces that
              are clear to use and easier to validate. My AI training work adds another layer: careful comparison,
              concise defect reports, edge-case thinking, and readable technical feedback.
            </p>
          </div>
        </section>

        <section className="work-strip" aria-label="Work modes" data-reveal="slide">
          {workModes.map((mode) => (
            <span key={mode}>{mode}</span>
          ))}
        </section>

        <section className="section" id="projects" aria-labelledby="projects-title" data-reveal="float">
          <div className="section-kicker">Selected work</div>
          <div className="section-title-row">
            <h2 id="projects-title">Portfolio records with product and engineering context.</h2>
            <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">
              View GitHub
            </a>
          </div>

          <ProjectShowcase projects={projects} />
        </section>

        <section className="section experience-section" id="work" aria-labelledby="work-title" data-reveal="float">
          <div className="section-kicker">Experience</div>
          <div className="section-title-row">
            <h2 id="work-title">The path behind the craft.</h2>
            <a className="text-link" href={profile.resume} download>
              Download resume
            </a>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.range}-${item.title}`} data-reveal="slide">
                <span className="timeline-date">{item.range}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section stack-section" id="stack" aria-labelledby="stack-title" data-reveal="float">
          <div className="skills-header">
            <div className="skills-badge">
              <span aria-hidden="true">✦</span>
              <h2 id="stack-title">Skills & Technologies</h2>
            </div>
          </div>
          <div className="stack-grid">
            {skills.map((skill) => (
              <div className="skill-pill" key={skill.label} data-reveal="card">
                <span className={`skill-mark tone-${skill.tone}`}>{skill.mark}</span>
                <span>{skill.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section education-section" aria-labelledby="education-title" data-reveal="float">
          <div>
            <p className="eyebrow">Education</p>
            <h2 id="education-title">Engineering foundation with frontend specialization.</h2>
          </div>
          <div className="education-list">
            <article data-reveal="card">
              <h3>B.Tech - Automobile Engineering</h3>
              <p>Arya College of Engineering and IT, Jaipur · August 2019</p>
            </article>
            <article data-reveal="card">
              <h3>Frontend Web Development Certification</h3>
              <p>Full Stack Learning, Jaipur</p>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title" data-reveal="float">
          <div className="contact-panel" data-reveal="lift">
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title">Let&apos;s build a clear interface or review a complex technical workflow.</h2>
            <p>
              Send a note for frontend work, product UI, dashboard implementation, AI training review, or
              documentation-heavy engineering tasks.
            </p>
            <div className="contact-links">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href="tel:+919461878928">{profile.phone}</a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>

          <div data-reveal="lift">
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 {profile.name}. Online resume and portfolio.</p>
        <a href="#top">Back to top</a>
      </footer>
    </>
  );
}
