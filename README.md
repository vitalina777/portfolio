# Vitalina Plichko · Portfolio

Static portfolio built with [Astro](https://astro.build), deployed to GitHub Pages.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build in dist/
```

## Publish on GitHub Pages

1. Create a public repository named `<your-github-login>.github.io`.
2. Push this folder to the `main` branch.
3. In the repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Every push to `main` rebuilds and publishes the site (`.github/workflows/deploy.yml`).
5. Update `site` in `astro.config.mjs` and `repo` in `src/data/site.ts` with your real address.

## Where things live

| What | File |
|---|---|
| Design tokens (colours, type, spacing) | `src/styles/global.css` |
| Contacts, CV link, repo link | `src/data/site.ts` |
| Case content (all text, numbers, images) | `src/data/cases.ts` |
| Home / About pages | `src/pages/index.astro`, `src/pages/about.astro` |
| Case page template | `src/pages/work/[slug].astro` |
| Case blocks (cards, flow, table, decisions, outcomes…) | `src/components/Block.astro` |

To edit text, change `src/data/cases.ts` or the page files. Cases marked `draft: true` show only their highlights for now.

## Images

Images are not in the repo yet. Until a file exists, the site shows a striped placeholder with the expected path.
Export each frame from Figma at **2×** (PNG or WebP) and save it under the path below. Astro resizes and converts images automatically.

Also add:
- `public/Vitalina_Plichko_CV.pdf` — the CV exported from Figma
- `public/og.png` — 1200×630 preview image for LinkedIn and messengers (e.g. the TAKRAF cover)

| File | Alt text (already in the code) |
|---|---|
| `src/assets/takraf/card.png` | TAKRAF portal: fleet list of mining machines with status counts, and a machine profile on a phone |
| `src/assets/takraf/hero.png` | TAKRAF portal on desktop and mobile: the installed base list with five machines and a machine profile |
| `src/assets/takraf/concept-vs-final.png` | Pre-sale concept next to the screen after discovery: the menu shrank from seven items to four and fields match master data |
| `src/assets/takraf/workshops.png` | Screenshots of remote discovery workshops: user flow diagrams and UI concepts reviewed with the TAKRAF team, faces blurred |
| `src/assets/takraf/decision-alias.png` | Zoomed machine profile: (1) customer-set alias, editable in place; (2) serial number and MDM ID kept for TAKRAF’s teams |
| `src/assets/takraf/decision-request.png` | Zoomed request form: (1) machine, serial number and requester filled in; (2) each request type brings its own fields; (3) machine status |
| `src/assets/takraf/deep-dive-form.png` | Zoomed form: (1) choosing a type swaps only its own block; (2) tick only the fields that are wrong; (3) current value shown, the user types the correct one |
| `src/assets/takraf/deep-dive-photo.png` | Zoomed photo drawer: (1) photo for this machine only; (2) or for the whole model, new machines inherit it |
| `src/assets/takraf/state-validation.png` | Request form with validation errors under required fields |
| `src/assets/takraf/state-success.png` | Administration list with a success toast after approving a user |
| `src/assets/takraf/service-requests.png` | Service requests: a request list, a request detail with status and history from the CRM |
| `src/assets/takraf/en-es.png` | The same fleet screen in English and Spanish side by side |
| `src/assets/allyz/card.png` | (decorative) |
| `src/assets/allyz/hero.png` | allyz accessibility overview: WCAG 2.2 AA checklist for web and app |
| `src/assets/cleanconnect/card.png` | CleanConnect carbon accounting dashboard with daily CO₂ totals and a bar chart |
| `src/assets/cleanconnect/hero.png` | CleanConnect dashboards for emissions monitoring |
| `src/assets/liki24/card.png` | Liki24 pharmacy catalogue with a cart drawer open |
| `src/assets/liki24/hero.png` | Liki24 checkout research overview |
| `src/assets/vchasno/card.png` | Vchasno company settings screen with plan details and employee permissions |
| `src/assets/vchasno/hero.png` | Vchasno company settings screen || `src/assets/about/portrait.jpg` | Vitalina Plichko, portrait in a red top |

## Accessibility checklist (already built in)

- One `h1` per page, sections as `h2`, cards as `h3`
- Skip link, visible focus ring (accent #B03A0A, 2px)
- `lang="en"`, alt text on every image, decorative images marked as such
- Tables with headers and scrollable regions on small screens
- No horizontal scroll at 320px, `prefers-reduced-motion` respected
- Checked with axe-core: 0 violations on all pages at 1440px and 320px
