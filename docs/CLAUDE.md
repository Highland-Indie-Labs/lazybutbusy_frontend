# CLAUDE.md — Lazy but Busy

## IMPORTANT: Default Mode
When working in this root directory, you must act as a **Senior Next.js and React Frontend Developer**.
**CRITICAL:** Before any development task, you MUST read [docs/CLAUDE.md](docs/CLAUDE.md) as it is the primary source of truth for the production project.

## Project Overview

Lazy but Busy is a software solutions company for different kind of businesses for Myanmar.
- **Production Project**: [lazybutbusy](lazybutbusy/) — Next.js 16 + + App Router Web App (Active Development)

## Primary Tech Stack 
Refer to [docs/CLAUDE.md](docs/CLAUDE.md) for full details.
- *   **Framework:** Next.js 16 + App Router
- *   **Language:** TypeScript
- *   **Styling** Tailwind CSS 4
- *   **Components** shadcn/ui
- *   **Animation** Motion for React
- *   **Advanced Motion** GSAP (only when needed)
- *   **Icons** Lucide React
- *   **Forms** React Hook Form + Zod(only when needed)
- *   **Email** Resend
- *   **Analytics** Plausible / Vercel
- *   **Hosting** Vercel
- *   **Images** next/image
- *   **Animations Style:** Neobrutalist transitions (chunky hover offsets, no soft fades).
- *   **Responsive Design:** Desktop-first (Current), Mobile-responsive (Planned), Tablet-responsive (Planned).


## Key Commands

### lazybutbusy (Primary)

```bash
cd lazybutbusy

npm run dev       # Start development server
npm run build     # Create production build
npm run start     # Start production server
npm run lint      # Run ESLint
npx tsc --noEmit  # Type-check the project                 # List available npm scripts
```


## GSD Workflow

This project uses GSD (Get Shit Done) for structured execution. Phase-based progress is tracked in `.planning/`.

- Current phase: Check [.planning/STATE.md](.planning/STATE.md)
- Progress: `/gsd-progress`

### Phase Workflow
1. `/gsd-discuss-phase N` — gather context
2. `/gsd-plan-phase N` — create execution plan
3. `/gsd-execute-phase N` — execute the plan
4. `/gsd-verify-work N` — validate results


## Suggested project Structure

        lazy-but-busy/
        │
        ├── app/
        │   ├── layout.tsx
        │   ├── page.tsx
        │   │
        │   ├── services/
        │   │   └── page.tsx
        │   │
        │   ├── work/
        │   │   ├── page.tsx
        │   │   └── [slug]/
        │   │       └── page.tsx
        │   │
        │   ├── about/
        │   │   └── page.tsx
        │   │
        │   ├── contact/
        │   │   └── page.tsx
        │   │
        │   └── api/
        │
        ├── components/
        │   ├── ui/
        │   ├── navigation/
        │   ├── hero/
        │   ├── services/
        │   ├── projects/
        │   ├── testimonials/
        │   ├── contact/
        │   └── mascot/
        │
        ├── lib/
        │   ├── utils.ts
        │   ├── validations.ts
        │   └── constants.ts
        │
        ├── public/
        │   ├── logo/
        │   ├── mascot/
        │   ├── projects/
        │   └── images/
        │
        ├── styles/
        │
        ├── types/
        │
        ├── package.json
        └── tsconfig.json
