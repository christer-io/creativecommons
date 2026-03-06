"""
Translates README.md from English to Norwegian (Bokmål) and writes README_NO.md.

Tool used: deep-translator (https://github.com/nidhaloff/deep-translator)
Translation engine: Google Translate (free tier, no API key required)
"""

import re
import sys
from deep_translator import GoogleTranslator

SOURCE_FILE = "README.md"
TARGET_FILE = "README_NO.md"
SOURCE_LANG = "en"
TARGET_LANG = "no"

# Maximum characters per request for Google Translate free tier
MAX_CHUNK_LENGTH = 4500


def translate_text(text: str) -> str:
    """Translate a text chunk, skipping empty strings."""
    if not text.strip():
        return text
    translator = GoogleTranslator(source=SOURCE_LANG, target=TARGET_LANG)
    return translator.translate(text)


def split_into_chunks(text: str, max_length: int) -> list[str]:
    """Split text into chunks that do not exceed max_length characters."""
    chunks = []
    while len(text) > max_length:
        # Find the last newline before the limit to avoid splitting mid-line
        split_at = text.rfind("\n", 0, max_length)
        if split_at == -1:
            split_at = max_length
        chunks.append(text[:split_at])
        text = text[split_at:]
    chunks.append(text)
    return chunks


def translate_readme(source: str, target: str) -> None:
    with open(source, "r", encoding="utf-8") as f:
        content = f.read()

    # Split content into blocks: code blocks are preserved verbatim
    code_block_pattern = re.compile(r"(```[\s\S]*?```)", re.MULTILINE)
    parts = code_block_pattern.split(content)

    translated_parts = []
    for part in parts:
        if part.startswith("```"):
            # Preserve code blocks unchanged
            translated_parts.append(part)
        else:
            # Translate in chunks if needed
            chunks = split_into_chunks(part, MAX_CHUNK_LENGTH)
            translated_chunks = []
            for chunk in chunks:
                try:
                    translated_chunks.append(translate_text(chunk))
                except Exception as exc:
                    print(f"Warning: translation failed for chunk ({exc}), keeping original.", file=sys.stderr)
                    translated_chunks.append(chunk)
            translated_parts.append("".join(translated_chunks))

    translated_content = "".join(translated_parts)

    with open(target, "w", encoding="utf-8") as f:
        f.write(translated_content)

    print(f"Translation complete: {source} -> {target}")


if __name__ == "__main__":
    translate_readme(SOURCE_FILE, TARGET_FILE)
