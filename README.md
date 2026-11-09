# Itaka Gaston Kitambala — Portfolio

Personal site of a software engineer based in Gatineau, QC: full stack web development (React, TypeScript, Node.js, FastAPI, .NET Core) with a C/C++ embedded background.

**Live:** https://portfolio-gaston-theta.vercel.app

## Stack

- React 18 + Vite
- Tailwind CSS with a small set of design tokens (`tailwind.config.js`, `src/index.css`)
- Framer Motion for entrance animations, honouring `prefers-reduced-motion`

## Structure

```
src/
  constants/index.js   all site content: bio, experience, projects, skills, links
  components/          one component per section (Hero, About, Experience, Projects, ...)
  components/SystemDiagram.jsx  renders each project's architecture from data
public/                résumé PDF, favicon, social preview image
```

Content changes only touch `src/constants/index.js`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run lint
```
