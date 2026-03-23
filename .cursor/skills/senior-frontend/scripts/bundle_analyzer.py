#!/usr/bin/env python3
"""Analisa o projeto frontend: package.json, stack e sugestões de bundle."""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path


def load_package(path: Path) -> dict | None:
    pkg = path / "package.json"
    if not pkg.is_file():
        return None
    try:
        return json.loads(pkg.read_text(encoding="utf-8"))
    except json.JSONDecodeError as e:
        print(f"Aviso: package.json inválido: {e}", file=sys.stderr)
        return None


def detect_stack(data: dict) -> list[str]:
    deps = {**data.get("dependencies", {}), **data.get("devDependencies", {})}
    tags = []
    if "next" in deps:
        tags.append("Next.js")
    if "react" in deps:
        tags.append("React")
    if "vite" in deps:
        tags.append("Vite")
    if "@remix-run/react" in deps or "remix" in deps:
        tags.append("Remix")
    if "webpack" in deps:
        tags.append("webpack")
    if "tailwindcss" in deps:
        tags.append("Tailwind")
    return tags


def scan_imports(src: Path, limit: int = 40) -> None:
    if not src.is_dir():
        return
    heavy = []
    pat = re.compile(r'from\s+["\']([^"\']+)["\']')
    exts = {".ts", ".tsx", ".js", ".jsx"}
    for file in src.rglob("*"):
        if file.suffix not in exts or "node_modules" in file.parts:
            continue
        try:
            text = file.read_text(encoding="utf-8", errors="ignore")
        except OSError:
            continue
        for m in pat.finditer(text):
            mod = m.group(1)
            if mod.startswith(".") or mod.startswith("@"):
                continue
            base = mod.split("/")[0]
            if base in ("lodash", "moment", "rxjs", "three", "@mui", "antd"):
                heavy.append((str(file.relative_to(src)), mod))
    if not heavy:
        print("  (nenhum import pesado comum detectado em arquivos fonte)")
        return
    print(f"\nPossíveis imports pesados (amostra até {limit}):")
    for i, (fp, mod) in enumerate(heavy[:limit]):
        print(f"  - {fp}: {mod}")
    if len(heavy) > limit:
        print(f"  ... e mais {len(heavy) - limit}")


def main() -> int:
    p = argparse.ArgumentParser(description="Sugestões de análise de bundle")
    p.add_argument("target_path", type=Path, help="Pasta do projeto (raiz com package.json)")
    p.add_argument("--verbose", action="store_true", help="Varre src/ por imports pesados comuns")
    args = p.parse_args()

    root = args.target_path.resolve()
    if not root.is_dir():
        print(f"Erro: pasta não existe: {root}", file=sys.stderr)
        return 1

    data = load_package(root)
    if not data:
        print("Nenhum package.json encontrado ou legível.")
        return 0

    name = data.get("name", "(sem nome)")
    print(f"Projeto: {name}")
    stack = detect_stack(data)
    print(f"Stack detectada: {', '.join(stack) if stack else 'genérica'}")

    scripts = data.get("scripts") or {}
    if "build" in scripts:
        print(f"\nScript build: {scripts['build'][:120]}{'...' if len(scripts.get('build', '')) > 120 else ''}")
    else:
        print("\nAviso: sem script 'build' no package.json")

    print("\nSugestões:")
    if "Next.js" in stack:
        print("  - Next.js: instalar @next/bundle-analyzer e usar ANALYZE=true no build (ver doc Next.js).")
        print("  - Verificar uso de next/dynamic para componentes pesados.")
        print("  - Conferir next/image e next/font para reduzir payload e melhorar LCP.")
    if "Vite" in stack:
        print("  - Vite: rodar build com rollup-plugin-visualizer ou vite-bundle-visualizer.")
    if "React" in stack:
        print("  - Revisar imports de bibliotecas grandes (lodash → lodash-es + tree-shaking, etc.).")

    src = root / "src"
    if not src.is_dir():
        src = root
    if args.verbose:
        scan_imports(src)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
