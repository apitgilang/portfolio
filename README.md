# Apit Gilang — Portfolio

A modern, dark-mode portfolio for a Senior Mobile Engineer, built with **React + Vite**.

## Run

```bash
npm install      # already done
npm run dev      # start dev server → http://localhost:5173
npm run build    # production build to /dist
npm run preview  # preview the production build
```

## Design

- **Style:** dark mode (OLED) + glassmorphism, electric blue → violet accent
- **Type:** Space Grotesk (headings), DM Sans (body), JetBrains Mono (labels)
- **Sections:** Hero · About / Skills · Experience timeline · Projects · Contact
- Scroll-reveal animations, `prefers-reduced-motion` respected, responsive at 375/768/1024/1440px

## Editing content

All resume content lives in [`src/data/resume.js`](src/data/resume.js) — update profile,
stats, skills, experience, and projects there without touching the components.
