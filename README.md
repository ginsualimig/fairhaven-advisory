# Fairhaven Advisory

Premium NZ business immigration & investment advisory website.

Built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and the App Router.

## Design System

| Token       | Hex       | Usage                        |
|-------------|-----------|------------------------------|
| Navy        | `#0F172A` | Primary background, headings |
| Gold        | `#D4AF37` | Accents, CTAs, highlights    |
| Teal        | `#4A9B8E` | Category tags, hover states  |
| Stone Gray  | `#6B7280` | Body text, borders           |
| Off-White   | `#F9FAFB` | Page background, cards       |

## Project Structure

```
app/
  layout.tsx               # Global layout (Navbar + Footer)
  page.tsx                 # Homepage
  services/
    page.tsx               # Services hub
    [service]/page.tsx     # Individual service pages
  approach/
    page.tsx               # Process + team
  insights/
    page.tsx               # Blog hub
    [slug]/page.tsx        # Individual posts
  contact/
    page.tsx               # Contact form
components/
  Navbar.tsx
  Footer.tsx
  HeroSection.tsx
  ServiceCard.tsx
  CaseStudyCard.tsx
  CTASection.tsx
lib/
  metadata.ts              # SEO helpers
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Connect this repo to [Vercel](https://vercel.com) for zero-config deployment.

Set `NEXT_PUBLIC_SITE_URL` in Vercel environment variables.
