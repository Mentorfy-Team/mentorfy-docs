#!/usr/bin/env python3
"""Gera um componente React (TSX) + barrel index.ts no projeto."""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path


def pascal_case(name: str) -> str:
    s = name.strip()
    if not s:
        raise ValueError("Nome vazio")
    parts = re.split(r"[-_\s]+", s)
    return "".join(p[:1].upper() + p[1:] for p in parts if p)


def write_files(
    base: Path,
    component_name: str,
    *,
    use_client: bool,
    tailwind: bool,
) -> None:
    comp_dir = base / "components" / component_name
    comp_dir.mkdir(parents=True, exist_ok=True)
    tsx = comp_dir / f"{component_name}.tsx"
    idx = comp_dir / "index.ts"

    directive = "'use client';\n\n" if use_client else ""
    tw = ' className="rounded-lg border border-neutral-200 p-4"' if tailwind else ""
    body = f"""{directive}import type {{ ReactNode }} from "react";

export type {component_name}Props = {{
  children?: ReactNode;
}};

export function {component_name}({{ children }}: {component_name}Props) {{
  return (
    <div{tw}>
      {{children}}
    </div>
  );
}}
"""
    barrel = f"""export {{ {component_name} }} from "./{component_name}";
export type {{ {component_name}Props }} from "./{component_name}";
"""

    tsx.write_text(body, encoding="utf-8")
    idx.write_text(barrel, encoding="utf-8")
    print(f"OK: criado {tsx} e {idx}")


def main() -> int:
    p = argparse.ArgumentParser(description="Gera componente React TSX + index.ts")
    p.add_argument("project_path", type=Path, help="Raiz do projeto frontend")
    p.add_argument("--name", required=True, help="Nome do componente (PascalCase ou kebab-case)")
    p.add_argument("--client", action="store_true", help="Adiciona 'use client' no topo")
    p.add_argument("--tailwind", action="store_true", help="Inclui className Tailwind de exemplo")
    args = p.parse_args()

    root = args.project_path.resolve()
    if not root.is_dir():
        print(f"Erro: pasta não existe: {root}", file=sys.stderr)
        return 1

    try:
        name = pascal_case(args.name)
    except ValueError as e:
        print(f"Erro: {e}", file=sys.stderr)
        return 1

    write_files(root, name, use_client=args.client, tailwind=args.tailwind)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
