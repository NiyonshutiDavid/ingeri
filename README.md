# Ingeri Schools — Next.js Website

A production-ready Next.js 14 website for **La P'tite Crèche Ingeri** and **Ingeri International School**, Kigali, Rwanda.

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | CSS Modules + global CSS variables |
| Fonts | Montserrat + Quicksand (Google Fonts) |
| API | Next.js Route Handlers (src/app/api/) |

---

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Copy environment template
cp .env.local.example .env.local

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (header, footer, side CTA)
│   ├── page.tsx                # Home page (/)
│   ├── campus/page.tsx         # Campus page (/campus)
│   ├── programmes/page.tsx     # Programmes page (/programmes)
│   ├── presentation/page.tsx   # Présentation page (/presentation)
│   ├── admissions/page.tsx     # Admissions + FAQ (/admissions)
│   ├── contact/page.tsx        # Contact forms (/contact)
│   ├── espace-parents/page.tsx # Parent portal (/espace-parents)
│   └── api/
│       ├── contact/route.ts    # POST /api/contact
│       ├── testimonials/route.ts
│       ├── valeurs/route.ts
│       ├── tuition/route.ts
│       ├── team/route.ts
│       ├── faq/route.ts
│       └── auth/login/route.ts
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Sticky nav with dropdowns
│   │   ├── Footer.tsx          # Footer + address bar
│   │   └── SideCTA.tsx         # Fixed side buttons
│   └── sections/               # Home page sections
│       ├── HeroSection.tsx
│       ├── CampusStrip.tsx
│       ├── MissionVision.tsx
│       ├── Valeurs.tsx
│       ├── DirectionQuote.tsx
│       └── Testimonials.tsx
├── lib/
│   ├── api.ts                  # Client-side API helpers
│   └── types.ts                # Shared TypeScript types
└── styles/
    └── globals.css             # Design tokens + global styles
```

---

## Adding the backend

All API routes live in `src/app/api/`. They are stubbed with static data and
clear `TODO` comments. To wire up a real backend:

### 1. Database (recommended: Prisma + PostgreSQL)

```bash
npm install prisma @prisma/client
npx prisma init
```

Define your schema in `prisma/schema.prisma`, then replace the static arrays
in each route handler with Prisma queries.

### 2. Email (recommended: Resend)

```bash
npm install resend
```

In `src/app/api/contact/route.ts`, replace the `console.log` with:

```ts
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)
await resend.emails.send({ from: '...', to: '...', subject: '...', html: '...' })
```

### 3. Auth (recommended: NextAuth.js)

```bash
npm install next-auth
```

Replace `src/app/api/auth/login/route.ts` with a full NextAuth config.

---

## Replacing placeholder images

Search for `TODO:` comments throughout the codebase. Every image placeholder
follows this pattern:

```tsx
{/* TODO: replace with:
  <Image src="/photos/hero.jpg" alt="..." fill style={{objectFit:'cover'}} />
*/}
📷 Placeholder text
```

Place photos in `public/photos/` and swap the comments for real `<Image>`
components.

---

## Deployment

```bash
npm run build
npm run start
```

Or deploy to [Vercel](https://vercel.com) with zero configuration — connect
the GitHub repo and set environment variables in the Vercel dashboard.

---

## Design system

All design tokens are CSS custom properties in `src/styles/globals.css`:

| Token | Value | Usage |
|-------|-------|-------|
| `--teal` | `#3EC8C8` | Primary brand colour |
| `--pink` | `#F472A8` | Secondary / maternelle accent |
| `--gold` | `#F5A623` | Stars, highlights |
| `--dark` | `#142424` | Body text, dark backgrounds |
| `--mid` | `#456060` | Secondary text |
| `--border` | `#D8EEEE` | Dividers, card borders |

---

*Conçu avec ❤️ à Kigali, Rwanda*
