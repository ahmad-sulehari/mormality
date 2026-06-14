# Agency Portfolio Website

## Tech Stack
- Framework: Next.js 14+ (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Animation: Framer Motion

## Core Commands
- Development: `npm run dev`
- Production Build: `npm run build`
- Linting: `npm run lint`

## Architecture & Style Guidelines
- **Routing:** Use the `app/` directory exclusively for routing and layouts.
- **Components:** Place all reusable visual blocks (Navbar, Footer, Cards) inside `components/`.
- **Interactivity:** Only use the `"use client"` directive on components that strictly require React state or Framer Motion hooks. Keep layout pages as Server Components where possible.
- **Responsiveness:** Build mobile-first. Ensure all tailwind layouts adapt seamlessly to mobile, tablet, and desktop viewports.

## Workflow Rules
- Always run `npm run build` after completing a major UI section to verify there are no TypeScript or compilation errors.
- Do not write placeholder "Lorem Ipsum" text; use realistic copy tailored to Web Dev, Social Media Management, and Google Ads.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
