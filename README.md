# Laser48

Webová stránka pre **laser48.sk** - profesionálne laserové rezanie a CNC spracovanie kovov.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript

## Štruktúra

```
src/
├── app/
│   ├── layout.tsx      # Root layout + metadata
│   ├── page.tsx        # Homepage
│   ├── sitemap.ts      # Auto-generated sitemap
│   ├── robots.ts       # robots.txt
│   ├── services/       # /services
│   ├── contact/        # /contact
│   └── blog/           # /blog
├── components/
│   ├── ui/             # Buttons, cards, ...
│   └── layout/         # Header, footer, nav
└── styles/
    └── globals.css     # Global styles
```

## Spustenie

```bash
npm install
npm run dev
```

Otvor [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
npm run start
```

## Deployment

Vercel / vlastný hosting
