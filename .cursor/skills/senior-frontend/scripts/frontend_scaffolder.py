#!/usr/bin/env python3
"""Cria estrutura de feature (components, hooks, types) no projeto."""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path


def slug(name: str) -> str:
    s = name.strip().lower()
    s = re.sub(r"[\s_]+", "-", s)
    s = re.sub(r"[^a-z0-9-]", "", s)
    return s or "feature"


def scaffold(root: Path, feature: str, *, under: str) -> None:
    base = root / under / slug(feature)
    for d in (base / "components", base / "hooks", base / "types"):
        d.mkdir(parents=True, exist_ok=True)
    fe = slug(feature)
    index_body = f"""/**
 * Feature: {fe}
 * Exporte apenas a API pública desta pasta.
 */

// export {{ }} from "./components/...";
"""
    (base / "index.ts").write_text(index_body, encoding="utf-8")
    print(f"OK: criado {base} com components/, hooks/, types/ e index.ts")


def main() -> int:
    p = argparse.ArgumentParser(description="Scaffold de feature frontend")
    p.add_argument("project_path", type=Path, help="Raiz do projeto")
    p.add_argument("--feature", required=True, help="Nome da feature (slug ou texto)")
    p.add_argument(
        "--under",
        default="src/features",
        help="Subpasta sob a raiz (default: src/features)",
    )
    args = p.parse_args()

    root = args.project_path.resolve()
    if not root.is_dir():
        print(f"Erro: pasta não existe: {root}", file=sys.stderr)
        return 1

    scaffold(root, args.feature, under=args.under.strip("/\\"))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
