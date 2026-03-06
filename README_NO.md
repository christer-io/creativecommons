# Creative Commons Norge-nettsted

Dette repositoriet inneholder Creative Commons Norge-nettstedet, bygget med Next.js, Tailwind CSS og Markdown-innholdsfiler.

## Teknologioversikt

- Next.js (App Router): sideruting, server-rendering og statisk generering.
- React: komponentbasert brukergrensesnitt.
- Tailwind CSS v4: utility-first-styling fra `app/globals.css` og utility-klasser i komponenter.
- Markdown-innhold: lagret i `content/*.md`, analysert med `gray-matter`, gjengitt med `react-markdown` + `remark-gfm`.

## Prosjektstruktur

- `app/`: rutefiler og sidekomposisjon.
- `components/`: gjenbrukbare UI-komponenter.
- `content/`: Markdown-innholdsfiler med frontmatter-metadata.
- `lib/content.ts`: verktøy for lasting/parsing og filtrering av innhold.
- `app/actions.ts`: hjelpefunksjoner på serversiden som returnerer gruppert innhold for sider.

## Hvordan innhold fungerer

Markdown-filer i `content/` er kilden til sannhet.

Lasteren i `lib/content.ts`:
- leser alle `.md`-filer,
- analyserer frontmatter,
- mapper felt til `ContentPost`-formen,
- sorterer innlegg etter tittel.

Hver innholdsfil støtter disse frontmatter-feltene:

```yaml
---
id: unik-id
slug: unik-url-slug
title: Innleggtittel
description: Valgfritt sammendrag
posttype:
  - front
tag: front
mainImage: /images/eksempel.png
source: ''
license: ''
---
```

### Feltoppførsel

- `slug`: kontrollerer URL-sti.
- `posttype` og `tag`: brukes til å gruppere innhold i seksjoner (`front`, `list`, `faq`, `story`).
- `source`: hvis satt til en URL, er det samme innholdselementet også tilgjengelig i ressurs-iframe-ruten.
- `mainImage`, `license`, `description`: valgfri metadata brukt av kort/komponenter.

## Ruting og bygg/distribusjon

### 1) Standard innholdssider

Rute: `app/post/[id]/page.tsx`

- `generateStaticParams()` leser alle Markdown-slugs.
- Ved bygg/distribusjon genererer Next.js statisk én side per slug:
  - `content/kreditering.md` -> `/post/kreditering`
  - `content/norske-lisenser-og-verktoy.md` -> `/post/norske-lisenser-og-verktoy`

### 2) Ressurssider (iframe)

Rute: `app/ressurs/[id]/page.tsx`

- Kun innlegg med en ikke-tom `source`-verdi er inkludert.
- Ved bygg/distribusjon får disse slugsene også en ressursside:
  - `content/eksempel.md` med `source: https://...` -> `/ressurs/eksempel`

### 3) Hjem- og FAQ-innholdsseksjoner

`app/actions.ts` kartlegger innhold i seksjoner:

- `fetchPosts()` -> `posttype`/`tag` = `front`
- `fetchAllPosts()` -> `posttype`/`tag` = `list`
- `fetchFAQ()` -> `posttype`/`tag` = `faq`
- `fetchStory()` -> `posttype`/`tag` = `story`

Dette betyr at å legge til eller endre `posttype`/`tag` i en Markdown-fil endrer hvor det vises i brukergrensesnittet etter distribusjon.

## Legg til nytt innhold

1. Opprett en ny Markdown-fil i `content/`, for eksempel:
   - `content/min-nye-artikkel.md`
2. Legg til obligatorisk frontmatter (`id`, `slug`, `title`) og valgfri metadata.
3. Sett `posttype`/`tag` for å plassere det i riktig innholdsseksjon.
4. Legg til innholdstekst i Markdown.
5. Commit og distribuer.

Etter distribusjon:
- Artikkelen genereres automatisk på `/post/<slug>`.
- Hvis `source` har en URL, genereres også `/ressurs/<slug>`.

## Første gangs oppsett (etter nedlasting/kloning)

Bruk denne sekvensen på en ny datamaskin:

1. Installer Node.js 20+ (LTS anbefalt).
2. Klon repositoriet og åpne det i terminalen din:

```bash
git clone <repo-url>
cd creativecommons
```

3. Installer avhengigheter:

```bash
npm install
```

4. Start utviklingsmodus:

```bash
npm run dev
```

5. Åpne `http://localhost:3000`.

## Daglig utvikling

Fra prosjektrotmappen:

```bash
npm run dev
```

## Verifiser før distribusjon

Kjør et produksjonsbygg lokalt:

```bash
npm run build
npm run start
```

Åpne `http://localhost:3000` og verifiser viktige sider.

## Feilsøking

- Hvis `npm install` feiler, sjekk Node-versjonen med `node -v` og oppgrader til Node 20+.
- Hvis port 3000 er i bruk, stopp den andre prosessen eller kjør med en annen port:
  - `npm run dev -- -p 3001`
- Hvis Markdown-endringer ikke er synlige, start dev-serveren på nytt.

## Produksjon

Bygg og kjør lokalt:

```bash
npm run build
npm run start
```
