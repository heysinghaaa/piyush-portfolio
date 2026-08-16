from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "assets" / "Piyush_Singh_Resume.pdf"

NAVY = colors.HexColor("#173B72")
BLUE = colors.HexColor("#1769E0")
INK = colors.HexColor("#171717")
MUTED = colors.HexColor("#4B5563")

styles = getSampleStyleSheet()
name_style = ParagraphStyle(
    "Name",
    parent=styles["Title"],
    alignment=TA_CENTER,
    fontName="Helvetica",
    fontSize=21,
    leading=24,
    textColor=NAVY,
    spaceAfter=4,
)
contact_style = ParagraphStyle(
    "Contact",
    parent=styles["Normal"],
    alignment=TA_CENTER,
    fontName="Helvetica",
    fontSize=8.6,
    leading=11,
    textColor=MUTED,
    spaceAfter=10,
)
heading_style = ParagraphStyle(
    "Heading",
    parent=styles["Heading2"],
    fontName="Helvetica",
    fontSize=11.5,
    leading=14,
    textColor=NAVY,
    spaceBefore=7,
    spaceAfter=2,
)
body_style = ParagraphStyle(
    "Body",
    parent=styles["BodyText"],
    fontName="Helvetica",
    fontSize=8.35,
    leading=10.4,
    textColor=INK,
    spaceAfter=3,
)
role_style = ParagraphStyle(
    "Role",
    parent=body_style,
    fontSize=8.7,
    leading=11,
    spaceBefore=4,
    spaceAfter=1,
)
role_title_style = ParagraphStyle(
    "RoleTitle",
    parent=body_style,
    textColor=BLUE,
    leading=10.5,
    spaceAfter=1,
)
bullet_style = ParagraphStyle(
    "Bullet",
    parent=body_style,
    leftIndent=15,
    firstLineIndent=-9,
    spaceAfter=1.5,
)
project_style = ParagraphStyle(
    "Project",
    parent=body_style,
    leading=10.6,
    spaceAfter=4,
)


def section(title: str):
    return [
        Paragraph(title, heading_style),
        HRFlowable(width="100%", thickness=0.8, color=NAVY, spaceAfter=4),
    ]


def role(company: str, meta: str, title: str, bullets: list[str]):
    items = [
        Paragraph(f"<b>{company}</b> | {meta}", role_style),
        Paragraph(title, role_title_style),
    ]
    items.extend(Paragraph(f"- {item}", bullet_style) for item in bullets)
    return KeepTogether(items)


def project(
    name: str,
    url: str,
    stack: str,
    description: str,
    source_url: str | None = None,
):
    source = (
        f' | Source: <link href="{source_url}" color="#1769E0">{source_url}</link>'
        if source_url
        else ""
    )
    return Paragraph(
        f'<b><link href="{url}" color="#1769E0">{name}</link></b> | {stack}'
        f'<br/><font size="7.6">Live: <link href="{url}" color="#1769E0">{url}</link>{source}</font>'
        f'<br/>{description}',
        project_style,
    )


def footer(canvas, document):
    canvas.saveState()
    canvas.setFont("Helvetica", 7)
    canvas.setFillColor(MUTED)
    canvas.drawCentredString(LETTER[0] / 2, 0.34 * inch, f"Piyush Singh | Page {document.page}")
    canvas.restoreState()


def build():
    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=LETTER,
        rightMargin=0.58 * inch,
        leftMargin=0.58 * inch,
        topMargin=0.48 * inch,
        bottomMargin=0.52 * inch,
        title="Piyush Singh Resume",
        author="Piyush Singh",
        subject="Frontend Software Engineer",
    )

    story = [
        Paragraph("PIYUSH SINGH", name_style),
        Paragraph(
            'Hyderabad, India | +91 94618 78928 | '
            '<link href="mailto:piyush32013@gmail.com" color="#1769E0">piyush32013@gmail.com</link><br/>'
            'Portfolio: <link href="https://heysinghaaa.vercel.app/" color="#1769E0">https://heysinghaaa.vercel.app/</link> | '
            'GitHub: <link href="https://github.com/heysinghaaa" color="#1769E0">https://github.com/heysinghaaa</link><br/>'
            'LinkedIn: <link href="https://www.linkedin.com/in/piyush-singh-08899a172/" color="#1769E0">https://www.linkedin.com/in/piyush-singh-08899a172/</link>',
            contact_style,
        ),
        *section("PROFESSIONAL SUMMARY"),
        Paragraph(
            "Frontend Software Engineer with 4+ years of experience building responsive, data-driven products with React, Next.js, TypeScript, and modern JavaScript. Creates reusable component systems, complex API-driven workflows, and accessible interfaces with careful attention to edge cases, maintainability, and user impact. Open-source builder of Elsecase, an installable React workflow registry backed by unit, accessibility, browser, and clean-install verification.",
            body_style,
        ),
        *section("TECHNICAL SKILLS"),
        Paragraph("<b>Frontend:</b> React, Next.js App Router, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, shadcn/ui, responsive UI, component architecture", body_style),
        Paragraph("<b>State, forms, and data:</b> Zustand, Redux, TanStack Table, React Hook Form, Zod, REST APIs, JSON parsing, URL state, debounced persistence", body_style),
        Paragraph("<b>Quality and tooling:</b> Vitest, Testing Library, axe, Playwright, Storybook, ESLint, GitHub Actions, Git, Chrome DevTools, CI/CD", body_style),
        Paragraph("<b>Additional:</b> Python, FastAPI, Panda3D fundamentals, PHP basics, C++ basics, WordPress, Adobe Photoshop, Adobe Lightroom", body_style),
        *section("PROFESSIONAL EXPERIENCE"),
        role(
            "fusionAIx",
            "Hyderabad, India | On-site | Oct 2025 - Present",
            "Software Engineer",
            [
                "Build and optimize React and Next.js interfaces for secure, data-heavy banking and insurance applications in a distributed Agile environment.",
                "Review complex UI behavior, API responses, form flows, and edge cases for accuracy, consistency, accessibility, and user impact.",
                "Built a debounced autosave utility that reduced data-loss risk during network interruptions and a recursive JSON formatter that made API responses faster to inspect.",
                "Standardize reporting and visualization views while preserving business rules; document implementation decisions and recurring issue patterns for cross-functional teams.",
            ],
        ),
        role(
            "Freelance / Contract Projects",
            "Remote | Jan 2024 - Apr 2025",
            "Python Game Development and AI Training Contributor",
            [
                "Built Panda3D prototypes covering scene graphs, task-manager loops, camera movement, asset loading, collision checks, and interactive object behavior.",
                "Reviewed gameplay-style code and documented defects, edge cases, fixes, and tradeoffs in concise technical feedback for AI training evaluation tasks.",
                "Used GitHub workflows for repository organization, versioned examples, and independent remote delivery.",
            ],
        ),
        role(
            "Cliquify",
            "United States | Remote | Jul 2022 - Sep 2025",
            "React Developer",
            [
                "Developed responsive React and Next.js dashboard experiences from Figma for Brand Kit, Library, Campaigns, and API-driven workflows.",
                "Integrated REST APIs and nested data structures, validating loading, empty, error, and responsive states for accuracy and maintainability.",
                "Created reusable components and recursive rendering logic for complex flows; documented implementation behavior for clear handoffs and reliable delivery.",
            ],
        ),
        role(
            "Codespur Technologies Pvt. Ltd.",
            "Jaipur, India | On-site | Jun 2022 - Sep 2025",
            "React Developer",
            [
                "Built dynamic React and Next.js interfaces from high-fidelity designs using modular components and responsive layouts.",
                "Integrated REST APIs and Zustand state; improved rendering performance and browser behavior through focused Chrome DevTools debugging.",
                "Collaborated through GitHub review workflows and validated edge cases, responsive layouts, and expected user-facing behavior.",
            ],
        ),
        role(
            "Full Stack Learning",
            "Jaipur, India | Hybrid | Dec 2021 - May 2022",
            "Internship Trainee",
            [
                "Built HTML, CSS, JavaScript, and React projects while developing reusable-component, responsive-layout, and structured problem-solving fundamentals.",
            ],
        ),
        role(
            "TP",
            "Jaipur, India | On-site | Jul 2019 - Mar 2022",
            "Customer Support Specialist",
            [
                "Handled high-volume customer interactions and applied structured review criteria to identify patterns, document findings, and maintain consistent quality standards.",
            ],
        ),
        role(
            "Freelance",
            "Jaipur, India | Remote | Mar 2019 - Jan 2021",
            "Digital Design Trainee",
            [
                "Produced and reviewed retouched images and digital layouts in Photoshop and Lightroom, maintaining visual consistency across client deliverables.",
            ],
        ),
        *section("SELECTED PROJECTS"),
        project(
            "Elsecase",
            "https://elsecase.vercel.app/",
            "Next.js, React, TypeScript, Tailwind CSS, shadcn/ui",
            "Open-source registry of editable workflows for loading, refreshing, empty data, failures, offline behavior, responsive data exploration, validation, autosave, retry, and recovery. Verified with 58 unit/accessibility tests, 28 Playwright checks, Storybook, CI, and clean-install production builds.",
            "https://github.com/heysinghaaa/Elsecase",
        ),
        project(
            "JobProof",
            "https://jobproofintelligence.vercel.app/",
            "Next.js, FastAPI, TypeScript",
            "Explainable job-application proof tool with project matching, scam signals, and optional user-owned AI analysis.",
        ),
        project(
            "Ledgerly",
            "https://ledgerlyhq.vercel.app/",
            "Next.js, TypeScript",
            "Personal invoice and expense tracker with dashboard metrics, editable invoice workflows, persistence, and print-ready previews.",
        ),
        *section("EDUCATION"),
        Paragraph("<b>Bachelor of Technology - Automobile Engineering</b><br/>Arya College of Engineering and IT, Jaipur, India | Aug 2019", body_style),
        Paragraph("<b>Certification - Frontend Web Development</b><br/>Full Stack Learning, Jaipur, India", body_style),
    ]

    doc.build(story, onFirstPage=footer, onLaterPages=footer)


if __name__ == "__main__":
    build()
