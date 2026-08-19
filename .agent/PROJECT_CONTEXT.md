# Project Context

Last updated: 2026-07-19

## Product

Piyush Singh's public portfolio and online résumé. It presents his frontend engineering and AI-training work, selected projects, employment history, skills, education, contact details, and downloadable résumé. The intended experience is a polished, responsive, accessible single-page portfolio with restrained progressive animation.

## Current stack

- Next.js 16 App Router and React 19
- TypeScript 5 with strict mode
- Tailwind CSS 4 plus authored global CSS
- Local portfolio UI primitives and shadcn-style lower-level controls
- Lucide icons
- npm with `package-lock.json`
- No database, CMS, authentication, server API, test runner, CI workflow, analytics, or checked-in hosting configuration

## Architecture and data flow

```text
src/data/portfolio.ts
        ↓ typed public content
src/app/page.tsx (Server Component composition)
        ↓
server-rendered sections + small interactive Client Component leaves
        ↓
static HTML/RSC + scoped browser JavaScript + global CSS
```

- `src/app/layout.tsx` owns global metadata, icons, manifest, language, and the root document.
- `src/app/page.tsx` composes the single home route and remains server-rendered.
- `src/data/portfolio.ts` is the source of truth for profile, projects, experience, and skills.
- `src/components/portfolio-ui` contains the portfolio design primitives: `Button`, `Container`, `FormField`, `ResponsiveGrid`, and `Section`.
- `src/components/ui` contains lower-level reusable controls retained in the repository.
- `ContactForm`, `CustomCursor`, `ScrollEffects`, and `TypewriterHeading` are Client Components because they use state, effects, observers, timers, or browser APIs.
- `ProjectShowcase` is render-only and server-compatible.
- `src/lib/utils.ts` provides the shared `cn` class merger.
- `src/app/globals.css` owns design tokens, global layout, responsive styles, and progressive visual effects.
- `public/assets` stores the portrait and résumé; root `public` stores icons and the web manifest.

## Current behavior

- The home route is statically prerendered.
- Header links navigate to sections on the same page.
- Project and social links open external destinations.
- The contact form validates with native HTML controls and opens a prefilled `mailto:` draft; it does not send data to a server.
- Scroll reveals, centered navigation, and the custom cursor enhance supported browsers while respecting reduced motion and pointer capability.
- Portfolio content and résumé/contact destinations are public information.

## Repository map

```text
src/app/                  routes, layout, metadata, global CSS
src/components/           shared portfolio and interaction components
src/components/portfolio-ui/  portfolio design-system primitives
src/components/ui/        lower-level UI controls
src/data/                 public portfolio content
src/lib/                  small shared helpers
public/                   public images, résumé, manifest, and icons
.agent/AGENTS.md           concise mandatory engineering rules
.agent/PROJECT_CONTEXT.md  living product and architecture context
```

## Commands

```bash
npm install
npm run dev
npm run lint
npx tsc --noEmit
npm run build
npm start
```

There is currently no `npm test` script. Do not claim automated tests ran until test tooling is added.

## Important decisions

- Keep the site static-first and server-rendered; browser behavior belongs in small Client Component leaves.
- Keep portfolio content in a local typed module until a real editorial workflow justifies a CMS.
- Use the existing portfolio primitives and CSS system instead of introducing another design system.
- Keep the contact flow as `mailto:` until reliable delivery, validation, spam protection, privacy, and operational ownership justify a server-backed flow.
- Prefer platform and existing dependency capabilities; new dependencies must solve a demonstrated need.
- Keep agent instructions concise. Engineering details should be enforced by TypeScript, ESLint, builds, tests, and CI rather than a large prose handbook.

## How to maintain this file

Update this file in the same change when any of these change:

- product purpose, audience, or major user journey;
- routes, folder ownership, server/client boundaries, or data flow;
- content source, contact delivery, authentication, persistence, caching, or external services;
- design system, core dependencies, scripts, testing, CI, hosting, monitoring, or environment requirements;
- an important architectural decision or removal of an existing capability.

Keep it factual and concise. Describe what exists now, not speculative plans. Replace outdated statements instead of appending a chronological diary. For detailed history, rely on Git and introduce ADRs only when the project becomes complex enough to need them.
