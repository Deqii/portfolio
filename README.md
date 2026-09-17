# Portfolio

Personal portfolio site for Tio Prayudha — built with Next.js, TypeScript, and Tailwind CSS, following the **Monochrome Logic** design system: a stark black-and-white palette with Inter and JetBrains Mono typography.

🔗 **Live:** https://tio-portfolio.vercel.app/

## Features

- **Pages:** Home (hero, work/education, skills, featured projects), Projects, Certificates, Contact
- **Internationalization:** Full English/Indonesian support with locale-prefixed routing (`/en`, `/id`), powered by next-intl
- **Dark mode:** Manual toggle with persisted preference (localStorage) and no flash of incorrect theme on load or navigation
- **Animations:** Page transitions, scroll-triggered fade-ins, and hover micro-interactions via [Motion](https://motion.dev)
- **Responsive:** Verified across mobile, tablet, and desktop breakpoints

## Tech Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- [React](https://react.dev) 19
- TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4
- [next-intl](https://next-intl.dev) — internationalization
- [Motion](https://motion.dev) — animations
- Deployed on [Vercel](https://vercel.com)

## Project Structure
app/
├── [locale]/ # Locale-prefixed routes (en, id)
│ ├── page.tsx # Home
│ ├── projects/
│ ├── certificates/
│ └── contact/
├── globals.css
components/ # Shared UI components
i18n/ # next-intl routing/navigation config
lib/data/ # Project, skill, and certificate data (bilingual content)
messages/ # en.json / id.json translation strings


## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — this redirects to the default locale (`/en`).

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # Run ESLint
```
