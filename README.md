# Eidetus (play site)

React 19 + TypeScript + Vite website for the Eidetus game.

## Requirements

- Node.js ^20.19.0 or >=22.12.0
- npm 10+

## Setup
```bash
npm install
npm run dev
```

## Commands

- `npm run dev` - Start dev server
- `npm run build` - Type-check and build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint with oxlint

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which lints, builds and deploys the site to GitHub Pages. The custom domain is set in the repository's Pages settings.

## Structure

```
public/          Images, video and favicon served as-is
src/
  components/    Layout, Header, Footer, Carousel, banners, modal triggers
  hooks/         useHeaderScroll
  pages/         Home and NotFound
  styles/        Sass source
  utils/         scroll and modal helpers
```
