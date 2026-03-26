# Laser48

Webova stranka pre **laser48.sk** — laserove rezanie kovov, B2B.

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- CSS Modules (no Tailwind)
- Lucide React (icons)
- FormSubmit.co (contact form)

## Struktura

```
src/
├── app/
│   ├── layout.tsx              # Root layout + metadata
│   ├── page.tsx                # Homepage
│   ├── sitemap.ts              # Auto-generated sitemap
│   ├── robots.ts               # robots.txt
│   ├── llms.txt/route.ts       # AI crawler endpoint
│   ├── sluzby/                 # /sluzby
│   ├── ako-to-funguje/         # /ako-to-funguje
│   ├── cennik/                 # /cennik
│   ├── referencie/             # /referencie
│   ├── faq/                    # /faq
│   ├── kontakt/                # /kontakt
│   └── ochrana-osobnych-udajov/ # /ochrana-osobnych-udajov (GDPR)
├── components/                 # Shared components (flat)
│   ├── Header.tsx / .module.css
│   ├── Footer.tsx / .module.css
│   ├── HeroSection.tsx / .module.css
│   ├── Button.tsx / .module.css
│   ├── Card.tsx / .module.css
│   ├── CTASection.tsx / .module.css
│   ├── FAQ.tsx / .module.css
│   ├── SectionHeading.tsx / .module.css
│   ├── StatCounter.tsx / .module.css
│   ├── TestimonialCard.tsx / .module.css
│   ├── PhoneButton.tsx / .module.css
│   └── JsonLd.tsx
├── config.ts                   # Site-wide constants (phone, email, etc.)
└── styles/
    └── globals.css             # Design system + global styles
```

## Spustenie

```bash
npm install
npm run dev
```

Otvor [http://localhost:3000](http://localhost:3000)

**Poznamka:** Lokalny build moze zlyhavat na sietovych diskoch (W:\) kvoli SWC permissions. Pouzit Vercel deploy.

## Build & Deploy

```bash
npm run build
npm run start
```

Hosting: Vercel (www.laser48.sk)
