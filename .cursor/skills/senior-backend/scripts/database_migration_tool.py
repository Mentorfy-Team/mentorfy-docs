#!/usr/bin/env python3
"""Heurísticas simples em arquivos .sql (migrações) — sem conexão ao banco."""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

# Padrões suspeitos (falsos positivos possíveis)
PATTERNS = [
    (r"\bDELETE\s+FROM\s+\w+\s*;", "DELETE sem WHERE — confirmar se é intencional"),
    (r"\bUPDATE\s+\w+\s+SET\b(?![^;]*\bWHERE\b)", "UPDATE possivelmente sem WHERE"),
    (r";\s*DROP\s+TABLE", "Múltiplos statements; revisar ordem e segurança"),
]


def analyze_file(path: Path, verbose: bool) -> list[tuple[int, str]]:
    text = path.read_text(encoding="utf-8", errors="replace")
    issues: list[tuple[int, str]] = []
    if re.search(r"\bBEGIN\b", text, re.I) and not re.search(r"\bCOMMIT\b", text, re.I):
        issues.append((1, "BEGIN sem COMMIT visível — revisar transação"))
    for i, line in enumerate(text.splitlines(), 1):
        stripped = line.strip()
        if stripped.startswith("--") or not stripped:
            continue
        if re.search(r"CREATE\s+INDEX\b", stripped, re.I) and "CONCURRENTLY" not in line.upper():
            if verbose and "pg_" not in path.name.lower():
                issues.append(
                    (i, "CREATE INDEX sem CONCURRENTLY — pode bloquear escrita em tabelas grandes"),
                )
        for pat, msg in PATTERNS:
            if re.search(pat, line, re.I):
                issues.append((i, msg))
    return issues


def main() -> int:
    p = argparse.ArgumentParser(description="Analisa arquivos .sql em busca de riscos comuns.")
    p.add_argument("target_path", type=Path, help="Arquivo .sql ou diretório")
    p.add_argument("--verbose", action="store_true", help="Mais avisos (ex.: índices)")
    args = p.parse_args()
    target = args.target_path.resolve()
    files: list[Path] = []
    if target.is_file():
        if target.suffix.lower() != ".sql":
            print("Aviso: esperado .sql", file=sys.stderr)
        files = [target]
    elif target.is_dir():
        files = sorted(target.rglob("*.sql"))
    else:
        print(f"Não encontrado: {target}", file=sys.stderr)
        return 1
    if not files:
        print("Nenhum .sql encontrado.")
        return 0
    total = 0
    for f in files:
        issues = analyze_file(f, args.verbose)
        if issues:
            print(f"\n{f}:")
            for line_no, msg in issues:
                print(f"  L{line_no}: {msg}")
            total += len(issues)
    if total == 0:
        print("Nenhum aviso heurístico (ou use --verbose).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
