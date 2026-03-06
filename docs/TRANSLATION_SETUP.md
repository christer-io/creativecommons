# Translation Workflow Setup

This document explains how the automated Norwegian README translation works.

## Overview

The workflow in `.github/workflows/translate-readme.yml` automatically keeps
`README.no.md` (Norwegian Bokmål) in sync with `README.md` (English).

## Trigger

The workflow runs whenever `README.md` is pushed to the `main` branch.
It can also be triggered manually via the **workflow_dispatch** event in the
GitHub Actions UI.

## Translation Tool

The script `.github/scripts/translate_readme.py` uses the
[`translators`](https://pypi.org/project/translators/) Python library
(version 5.9.5), which wraps the free Google Translate web API with no API
key required.

### Why `translators`?

| Criterion | Details |
|-----------|---------|
| **Free** | No API key or billing account needed |
| **Open-source** | Published on PyPI under MIT license |
| **Reliable** | Actively maintained; handles rate limits gracefully |
| **No setup** | Single `pip install translators` |

## How the Script Works

1. **Reads** `README.md`.
2. **Masks** content that must not be translated:
   - Fenced code blocks (` ``` … ``` `)
   - Inline code (`` `…` ``)
   - URLs and Markdown link targets
   - HTML tags
3. **Translates** the remaining text line-by-line from English (`en`) to
   Norwegian Bokmål (`no`) via the Google Translate backend.
4. **Restores** the masked tokens so code examples and links are unchanged.
5. **Writes** the result to `README.no.md` with an auto-generated header.
6. **Commits** and pushes the updated file using the `github-actions[bot]`
   identity. The commit message contains `[skip ci]` to avoid triggering
   another workflow run.

## Permissions

The workflow requires `contents: write` permission to push the translated file
back to the repository.

## Manual QA Instructions

Automated translation is a starting point — human review is recommended:

1. **Checkout** the branch that contains the latest `README.no.md`.
2. **Read** through the Norwegian text and compare it with `README.md`.
3. **Correct** any mistranslations or awkward phrasing directly in
   `README.no.md`.
4. **Commit** corrections with a message like:
   ```
   docs: manual QA corrections to Norwegian README
   ```
5. Push the corrected file. The automated workflow will only overwrite
   `README.no.md` again if `README.md` itself is changed.

## Adding More Languages

To add another language (e.g. German `de`):

1. Copy `.github/workflows/translate-readme.yml` to a new workflow file, for
   example `.github/workflows/translate-readme-de.yml`.
2. Change `TARGET_LANG = "no"` in `.github/scripts/translate_readme.py` (or
   pass it as an environment variable / argument).
3. Update the `TARGET_FILE` path (e.g. `README.de.md`).
4. Adjust the `paths` trigger and commit message accordingly.

## Rate Limits

The free Google Translate backend enforces request rate limits. The script
inserts a 150 ms delay between lines to stay within those limits. For very
long README files, the translation step may take a few minutes, which is well
within the GitHub Actions job timeout.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|-------------|-----|
| `ModuleNotFoundError: translators` | Dependency not installed | Check the `pip install` step in the workflow log |
| Translation step times out | README is very long | Increase the job `timeout-minutes` in the workflow |
| `README.no.md` not committed | No changes detected | The file is already up-to-date; this is normal |
| Push rejected | Workflow lacks write permission | Ensure `permissions: contents: write` is in the workflow |
