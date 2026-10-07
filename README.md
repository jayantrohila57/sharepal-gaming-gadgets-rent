# SharePal — Bangalore Gaming Gadgets on Rent (UI Recreation)

Pixel-close front-end recreation of [SharePal’s Bangalore gaming gadgets rental page](https://sharepal.in/bangalore/gaming-gadgets-on-rent) for an Internshala assignment.

**Live demo:** _(add your Vercel deployment URL after deploy)_

**Original reference:** https://sharepal.in/bangalore/gaming-gadgets-on-rent

## Tech stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- TypeScript
- Tailwind CSS v4
- [Lucide](https://lucide.dev/) icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the root route redirects to `/bangalore/gaming-gadgets-on-rent`.

Production build:

```bash
npm run build
npm start
```

## What was recreated

| Section | Notes |
|--------|--------|
| Sticky purple header | City pill, delivery/pickup fields, Select, search/cart/login |
| Category tabs | Gaming active state |
| Left filter rail | All + subcategories from `gaming-subcategories.json` |
| Hero | Purple gradient “Gaming Consoles” banner |
| Product grid | Employer `products.json`, badges, blurred ₹ until dates set |
| Promo banners | Asset Partner + Rent Out Your Gear |
| Date modal | Dual-month calendar, rental/chargeable period, Continue |
| FAQ accordion | Expand/collapse with transitions |
| Testimonials & stats | Horizontal reviews + impact numbers |
| Footer | Multi-column dark navy layout |
| Sticky bottom pill | Opens date modal until valid dates are chosen |

## Product & image data

- Products: `src/data/products.json` (from employer `product-list.json`)
- Subcategories: `src/data/gaming-subcategories.json`
- Product and subcategory images are loaded from `images.sharepal.in` (configured in `next.config.ts`). The SharePal wordmark is rendered locally because some `/assets/` paths return 403 off-site.

## Rental pricing logic

- User selects **delivery** and **pickup** dates in the modal.
- **Chargeable days** = calendar span minus delivery and pickup days (not charged), matching SharePal’s “we don’t charge you for delivery and pickup days” copy.
- Displayed price = `per_day_rent × chargeable days` (minimum one chargeable day required to continue).

## Small UX improvements (same design language)

- Keyboard `Escape` closes the date modal; backdrop click dismisses.
- Smooth accordion and hover transitions on cards and CTAs.
- Mobile: compact header with calendar shortcut; responsive 2-column product grid.

## Project structure

```
src/
  app/bangalore/gaming-gadgets-on-rent/page.tsx  # Main page
  components/                                     # UI sections
  context/RentalDatesContext.tsx                  # Date + modal state
  data/                                           # JSON from employer
  lib/rental.ts                                   # Date/price helpers
```

## Deploy (Vercel)

1. Push `main` to GitHub.
2. Import the repo in [Vercel](https://vercel.com/new).
3. Framework preset: **Next.js** — no env vars required.

## License

Educational assignment recreation; SharePal branding and product images belong to SharePal.
