import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { CustomCursor } from "@/components/CustomCursor";
import { Container, ResponsiveGrid, Section } from "@/components/portfolio-ui";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { ScrollEffects } from "@/components/ScrollEffects";
import { experience, profile, projects, skills } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <ScrollEffects />
      <CustomCursor />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Piyush Singh home">
          <Image src="/android-chrome-512x512.png" alt="" width={38} height={38} priority />
        </a>

        <div className="nav-dock">
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#top">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Work</a>
            <a href="#stack">Stack</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="header-action" data-cursor-label="Open" href={profile.resume} download>
            Résumé
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-aurora" aria-hidden="true" />
          <a className="availability" href="#contact">
            <span /> Available for thoughtful product work
          </a>

          <div className="hero-center">
            <p className="hero-kicker">Creative frontend engineer</p>
            <h1 id="hero-title"><span>PIYUSH</span></h1>
            <p className="hero-statement">
              I build digital products that
              <em> make complexity feel clear.</em>
            </p>
          </div>

          <div className="hero-corner hero-location">
            <span aria-hidden="true">●</span>
            <strong>Based in Hyderabad,</strong>
            <small>India</small>
          </div>
          <div className="hero-corner hero-role">
            <span aria-hidden="true">✦</span>
            <strong>Frontend developer,</strong>
            <small>AI training contributor</small>
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
            Scroll <span>↓</span>
          </a>
        </section>

        <Section className="about-section" id="about" index="01" label="About" aria-labelledby="about-title">
          <ResponsiveGrid
            className="about-grid lg:grid-cols-[minmax(300px,0.75fr)_minmax(420px,1.15fr)]"
            columns={2}
          >
            <div className="portrait-editorial" data-reveal="lift">
              <Image
                src="/assets/piyush-portrait.png"
                alt="Portrait of Piyush Singh"
                width={1145}
                height={1373}
                sizes="(max-width: 800px) 100vw, 42vw"
              />
              <span>Hyderabad · India</span>
            </div>
            <div className="about-copy" data-reveal="float">
              <p className="eyebrow">Design with reason. Build with care.</p>
              <h2 id="about-title">Interfaces should feel obvious, even when the system behind them is not.</h2>
              <p>
                I&apos;m Piyush Singh, a React and Next.js developer working across dashboards, secure business
                workflows, API-driven products, and AI evaluation. I turn dense requirements into focused,
                dependable experiences.
              </p>
              <div className="about-links">
                <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a href={`mailto:${profile.email}`}>Email ↗</a>
              </div>
            </div>
          </ResponsiveGrid>
        </Section>

        <section className="principles-band" aria-label="Working principles">
          <span>React / Next.js</span>
          <span>Product interfaces</span>
          <span>AI code review</span>
          <span>Clear documentation</span>
        </section>

        <Section className="projects-section" id="projects" index="02" label="Selected work" aria-labelledby="projects-title">
          <ResponsiveGrid
            className="section-heading lg:grid-cols-[minmax(0,1fr)_minmax(250px,0.35fr)]"
            columns={2}
            data-reveal="float"
          >
            <h2 id="projects-title">Things I&apos;ve built.</h2>
            <p>A selection of product, finance, AI-review, and interactive engineering work.</p>
          </ResponsiveGrid>
          <ProjectShowcase projects={projects} />
        </Section>

        <Section className="experience-section" id="work" index="03" label="Experience" aria-labelledby="experience-title">
          <ResponsiveGrid
            className="section-heading lg:grid-cols-[minmax(0,1fr)_minmax(250px,0.35fr)]"
            columns={2}
            data-reveal="float"
          >
            <h2 id="experience-title">Where I&apos;ve contributed.</h2>
            <a className="text-link" href={profile.resume} download>Download résumé ↘</a>
          </ResponsiveGrid>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.range}-${item.title}`} data-reveal="card">
                <span className="timeline-date">{item.range}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          className="stack-section"
          id="stack"
          index="04"
          label="Toolkit"
          aria-labelledby="stack-title"
        >
          <ResponsiveGrid
            className="section-heading lg:grid-cols-[minmax(0,1fr)_minmax(250px,0.35fr)]"
            columns={2}
            data-reveal="float"
          >
            <h2 id="stack-title">Tools are secondary. Judgment is the skill.</h2>
          </ResponsiveGrid>
          <ResponsiveGrid className="stack-grid" columns={4}>
            {skills.map((skill) => (
              <div className="skill-pill" key={skill.label} data-reveal="card">
                <span>{skill.mark}</span>
                {skill.label}
              </div>
            ))}
          </ResponsiveGrid>
        </Section>

        <Section className="education-section" index="05" label="Education" aria-labelledby="education-title">
          <ResponsiveGrid
            className="education-grid lg:grid-cols-[minmax(300px,1fr)_minmax(360px,0.75fr)]"
            columns={2}
            data-reveal="float"
          >
            <h2 id="education-title">Always learning,<br /><em>always refining.</em></h2>
            <div>
              <article>
                <span>2019</span>
                <h3>B.Tech · Automobile Engineering</h3>
                <p>Arya College of Engineering and IT, Jaipur</p>
              </article>
              <article>
                <span>Certification</span>
                <h3>Frontend Web Development</h3>
                <p>Full Stack Learning, Jaipur</p>
              </article>
            </div>
          </ResponsiveGrid>
        </Section>

        <Section id="contact" containerClassName="contact-section" aria-labelledby="contact-title">
          <ResponsiveGrid
            className="gap-[70px] lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.62fr)] lg:gap-[clamp(70px,10vw,170px)]"
            columns={2}
          >
            <div className="contact-copy" data-reveal="float">
              <p className="eyebrow">Have a project in mind?</p>
              <h2 id="contact-title">Let&apos;s make something<br /><em>clear and useful.</em></h2>
              <div className="contact-links">
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              </div>
            </div>
            <div data-reveal="lift">
              <ContactForm />
            </div>
          </ResponsiveGrid>
        </Section>
      </main>

      <footer className="footer">
        <Container className="footer-inner">
          <Image src="/android-chrome-512x512.png" alt="Piyush Singh mark" width={34} height={34} />
          <p>© 2026 Piyush Singh</p>
          <a href="#top">Back to top ↑</a>
        </Container>
      </footer>
    </>
  );
}
