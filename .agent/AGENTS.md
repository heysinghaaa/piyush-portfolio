# Repository Instructions

These rules apply to every change. At the start of a new chat or device, also read [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md). During an existing chat, reread it only when the task changes architecture, product behavior, content ownership, dependencies, or deployment.

## Working rules

- Inspect relevant code and `git status` before editing. Preserve unrelated user changes.
- Make the smallest complete change; reuse existing code before creating abstractions or dependencies.
- Do not build for hypothetical requirements. Add layers, state libraries, APIs, or services only for a current need.
- Keep `PROJECT_CONTEXT.md` current when product scope, architecture, routes, data flow, dependencies, scripts, deployment, or major decisions change.
- Never edit generated output or commit `.next`, `node_modules`, secrets, local environment files, or test reports.

## Project patterns

- Next.js App Router pages and layouts are Server Components by default.
- Add `"use client"` only to the smallest component requiring state, handlers, effects, or browser APIs.
- Keep public portfolio content in `src/data/portfolio.ts`; do not duplicate it in components.
- Reuse `src/components/portfolio-ui`, compatible `src/components/ui` controls, `src/lib/utils.ts`, and existing CSS tokens.
- Use feature folders, services, repositories, DTOs, Server Actions, or Route Handlers only when a real feature needs that boundary.
- Prefer semantic HTML, composition, native browser behavior, and focused components over configurable wrapper systems.

## Coding standards

- Preserve strict TypeScript. Do not use `any`, ignored type errors, broad assertions, or disabled lint rules.
- Follow existing formatting and naming; keep imports, functions, props, and error paths explicit and readable.
- Effects synchronize external systems only and must clean up listeners, observers, timers, and animation frames.
- Handle expected failures with clear user feedback; never swallow errors or leave debug logs and dead code.
- Keep changes focused. Do not reformat or refactor unrelated files.

## Performance and accessibility

- Minimize client JavaScript and hydration. Prefer server rendering and CSS for static presentation.
- Use `next/image` with dimensions, accurate `sizes`, and appropriate alt text. Prioritize only the actual above-the-fold image.
- Use `next/link` for internal routes; use anchors for fragments, downloads, email, and external URLs.
- Avoid unnecessary memoization, dynamic imports, providers, requests, and packages. Measure before adding optimization complexity.
- Preserve semantic landmarks, heading order, keyboard access, visible focus, contrast, responsive layout, and reduced-motion behavior.
- Cursor, reveal, and hover effects are progressive enhancement; content must work without JavaScript, animation, hover, or a fine pointer.

## Security and privacy

- Treat form data, URLs, cookies, headers, CMS data, and external responses as untrusted.
- Validate server input with bounded schemas when server features are introduced; client validation is UX only.
- Keep secrets in server-only environment variables and modules. `NEXT_PUBLIC_*`, source files, logs, and `public` are public.
- Authenticate and authorize every protected server operation; hidden UI is not authorization.
- Do not render unsanitized HTML, build queries/commands from input, expose provider records, or log sensitive data.
- Confirm consent before publishing new personal, employer, customer, testimonial, or analytics information.

## Completion gate

- Run `npm run lint`, `npx tsc --noEmit`, and `npm run build` for production changes.
- Test affected behavior, responsive states, keyboard use, and reduced motion in proportion to risk.
- Report exactly what changed and which checks passed, failed, or were not available.
