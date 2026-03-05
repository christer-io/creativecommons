# Creative Commons Norway Site

This repository contains the Creative Commons Norway website, built with Next.js, Tailwind CSS, and Markdown content files.

## Stack Overview

- Next.js (App Router): page routing, server rendering, and static generation.
- React: component-based UI.
- Tailwind CSS v4: utility-first styling from `app/globals.css` and utility classes in components.
- Markdown content: stored in `content/*.md`, parsed with `gray-matter`, rendered with `react-markdown` + `remark-gfm`.

## Project Structure

- `app/`: route files and page composition.
- `components/`: reusable UI components.
- `content/`: Markdown content files with frontmatter metadata.
- `lib/content.ts`: content loading/parsing and filtering utilities.
- `app/actions.ts`: server-side helpers that return grouped content for pages.

## How Content Works

Markdown files in `content/` are the source of truth.

The loader in `lib/content.ts`:
- reads all `.md` files,
- parses frontmatter,
- maps fields into the `ContentPost` shape,
- sorts posts by title.

Each content file supports these frontmatter fields:

```yaml
---
id: unique-id
slug: unique-url-slug
title: Post title
description: Optional summary
posttype:
  - front
tag: front
mainImage: /images/example.png
source: ''
license: ''
---
```

### Field Behavior

- `slug`: controls URL path.
- `posttype` and `tag`: used for grouping content in sections (`front`, `list`, `faq`, `story`).
- `source`: if set to a URL, the same content item is also available in the resource iframe route.
- `mainImage`, `license`, `description`: optional metadata used by cards/components.

## Routing and Build/Deploy Behavior

### 1) Standard content pages

Route: `app/post/[id]/page.tsx`

- `generateStaticParams()` reads all Markdown slugs.
- On build/deploy, Next.js statically generates one page per slug:
  - `content/kreditering.md` -> `/post/kreditering`
  - `content/norske-lisenser-og-verktoy.md` -> `/post/norske-lisenser-og-verktoy`

### 2) Resource pages (iframe)

Route: `app/ressurs/[id]/page.tsx`

- Only posts with a non-empty `source` value are included.
- On build/deploy, those slugs also get a resource page:
  - `content/example.md` with `source: https://...` -> `/ressurs/example`

### 3) Home and FAQ content sections

`app/actions.ts` maps content into sections:

- `fetchPosts()` -> `posttype`/`tag` = `front`
- `fetchAllPosts()` -> `posttype`/`tag` = `list`
- `fetchFAQ()` -> `posttype`/`tag` = `faq`
- `fetchStory()` -> `posttype`/`tag` = `story`

This means adding or changing `posttype`/`tag` in a Markdown file changes where it appears in the UI after deploy.

## Add New Content

1. Create a new Markdown file in `content/`, for example:
   - `content/min-nye-artikkel.md`
2. Add required frontmatter (`id`, `slug`, `title`) and optional metadata.
3. Set `posttype`/`tag` to place it in the correct content section.
4. Add body content in Markdown.
5. Commit and deploy.

After deploy:
- The article is generated at `/post/<slug>` automatically.
- If `source` has a URL, `/ressurs/<slug>` is also generated.

## First-Time Setup (After Downloading/Cloning)

Use this sequence on a new computer:

1. Install Node.js 20+ (LTS recommended).
2. Clone the repository and open it in your terminal:

```bash
git clone <repo-url>
cd creativecommons
```

3. Install dependencies:

```bash
npm install
```

4. Start development mode:

```bash
npm run dev
```

5. Open `http://localhost:3000`.

## Daily Development

From the project root:

```bash
npm run dev
```

## Verify Before Deploy

Run a production build locally:

```bash
npm run build
npm run start
```

Open `http://localhost:3000` and verify key pages.

## Troubleshooting

- If `npm install` fails, check Node version with `node -v` and upgrade to Node 20+.
- If port 3000 is in use, stop the other process or run with another port:
  - `npm run dev -- -p 3001`
- If Markdown changes are not visible, restart the dev server.

## Production

Build and run locally:

```bash
npm run build
npm run start
```
