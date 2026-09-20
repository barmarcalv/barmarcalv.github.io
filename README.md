# barmarcalv.github.io

Personal site — Astro, static, no database, no CMS.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

---

## Adding things without touching code

Everything that changes lives in `src/content/`. Add a Markdown file, save, done.

### A new case study

Create `src/content/work/my-project.md`. The filename becomes the URL
(`/work/my-project`).

```md
---
title: 'Project name'
tagline: 'One line that says what it was'
org: 'Company'
role: 'Your role'
years: '2024 — 2025'
order: 5              # lower numbers come first
summary: 'Two or three sentences for the listing page.'
cover: '/img/work/my-project.jpg'   # optional, see Images below
coverAlt: 'What the image shows'
links:
  - label: 'See it live'
    href: 'https://example.com'
draft: false          # true hides it everywhere
---

## The problem

Body copy in Markdown. `## Headings` become the section rules.
```

### A new article, talk, podcast or class

Create `src/content/writing/whatever.md` — frontmatter only, no body needed.

```md
---
title: 'Title of the thing'
kind: 'Article'       # Article | Talk | Podcast | Teaching
venue: 'Where it was published or given'
date: '2026-03-14'    # sorts newest first
href: 'https://…'
blurb: 'One sentence.'
lang: 'Spanish'       # omit if it's in English
---
```

### A new illustration or a piece of other work

Create `src/content/gallery/anything.md`.

```md
---
title: 'Piece name'
section: 'illustration'   # 'illustration' or 'other'
image: '/img/illustration/piece.jpg'
alt: 'Description for screen readers'
year: '2026'
kind: 'Print'
ratio: '4 / 5'            # any CSS aspect ratio
order: 1
---
```

---

## Images

Put files in `public/img/…` and reference them as `/img/…`.

Every image goes through `Frame.astro`, which desaturates it and multiplies it
over `--sand` (`#EED6AF`) so photos, screenshots and illustrations read as one
set. Pass `tint={false}` to a `<Frame>` if a particular image needs to keep its
own colour.

With no `image`/`cover` set, a sand placeholder of the right proportion renders
instead — which is what is on the site right now.

**Before committing photos:** resize to about 1600px on the long edge and export
as WebP or JPG at ~80% quality. GitHub Pages serves whatever you commit, at
whatever size you commit it.

The CV lives at `public/BarbaraMartinez-CV.pdf`.

---

## Colours, type, spacing

All of it is tokens at the top of `src/styles/global.css`.

| Token          | Light     | Notes                                        |
| -------------- | --------- | -------------------------------------------- |
| `--ink`        | `#d23b1d` | Headings, links, body. 4.79:1 — AA, not AAA.  |
| `--ink-strong` | `#a82d14` | Small text and metadata. 6.88:1.              |
| `--sand`       | `#eed6af` | Image tint and placeholders.                  |
| `--paper`      | `#ffffff` | Background.                                   |

Dark mode is defined in the same file and follows the system setting. Its red is
lighter (`#f4805e`) so contrast holds at 7.25:1 on the dark background.

Type is IBM Plex Mono for display and labels, IBM Plex Sans for body, both
self-hosted via `@fontsource` — no request to Google.

---

## Deploying

`.github/workflows/deploy.yml` builds and publishes on every push to `main`.

One-time setup: in the repo, **Settings → Pages → Build and deployment →
Source: GitHub Actions**.

If you deploy to a project repo rather than `barmarcalv.github.io`, add
`base: '/repo-name'` to `astro.config.mjs`.

### Later, with a custom domain

Add a `public/CNAME` file containing the bare domain, point the DNS at GitHub,
and update `site` in `astro.config.mjs`.
