# Cyber Security Portfolio (Next.js + Tailwind CSS v4 + shadcn/ui)

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

- **Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui (Radix) · lucide-react
- **Edit content:** everything lives in `lib/data.ts` (name, case files, skills, timeline, quotes).
- **Edit colors:** CSS variables at the top of `app/globals.css` (`--teal`, `--foreground`, ...).
- **Sections:** `components/sections/*` (one file each). Shared reveal/scroll helpers in `components/`.
- **shadcn:** `components.json` is set up, so `npx shadcn@latest add accordion dialog ...` works. The `ui/` files provided are button, card, badge, switch, input, textarea, label.
- Motion respects `prefers-reduced-motion`.

## Typography system

Every font size lives in **one place**: the `--fs-*` tokens and `.t-*` classes in `app/globals.css`.
Do not use `text-[17px]`, `text-lg`, etc. in components — pick a role instead.

| Class        | Size (px)   | Used for                                                    |
| ------------ | ----------- | ----------------------------------------------------------- |
| `t-display`  | 40 → 72     | Hero headline (only one on the page)                        |
| `t-h2`       | 30 → 44     | Every section title                                         |
| `t-quote`    | 24 → 32     | Testimonial                                                 |
| `t-h3`       | 28          | Process step title                                          |
| `t-h4`       | 22          | Card titles, list titles, logo, mobile menu links           |
| `t-metric`   | 22          | Numbers: hero stats, case values, skill levels (tabular)    |
| `t-lead`     | 18 → 20     | Intro paragraphs: hero + every section subtitle             |
| `t-body`     | 16          | All running text, nav, buttons, inputs                      |
| `t-small`    | 14          | Labels, captions, chips, ticker, footer                     |
| `t-eyebrow`  | 12 (caps)   | Small uppercase tags                                        |

Rules: one `t-*` class per element · colour/weight come from Tailwind utilities (`text-mute`, `font-semibold`) ·
two typefaces only (Bricolage Grotesque 700 for headings/numbers, Figtree for everything else) ·
sizes are `rem`, so they follow the visitor's browser font setting.
