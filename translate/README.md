# Oversettelsesstatus i `translate/`

Denne mappen inneholder FAQ-filer for oversettelsesarbeid.

## Mapper

- `questions-no/`: Norske versjoner som er planlagt oversatt til norsk.
  - Filene her er per nå oversatt helt automatisk og skal regnes som **utkast (draft)**.
  - Språk, begreper og formuleringer må kvalitetssikres manuelt før publisering.

- `questions/`: Originale FAQ-spørsmål med svar (kildetekster).
  - Bruk disse som referanse for opprinnelig ordlyd og betydning.

## Anbefalt arbeidsflyt

1. Finn tilsvarende fil i `questions/` og `questions-no/`.
2. Sammenlign innholdet linje for linje.
3. Forbedre norsk språk, terminologi og lesbarhet i `questions-no/`.
4. Legg til eller oppdater metadata som `posttype` og `tag` i frontmatter der det mangler eller er feil.
5. Behold faglig mening i tråd med originalen i `questions/`.
