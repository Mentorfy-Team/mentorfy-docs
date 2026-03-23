#!/usr/bin/env python3
"""Scaffold mínimo Express ou FastAPI (stdlib apenas)."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

EXPRESS_PKG = """{
  "name": "scaffolded-api",
  "private": true,
  "type": "module",
  "scripts": { "start": "node src/index.js" },
  "dependencies": { "express": "^4.21.0" }
}
"""

EXPRESS_INDEX = """import express from 'express';

const app = express();
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
"""

FASTAPI_MAIN = """from fastapi import FastAPI

app = FastAPI()


@app.get("/health")
def health():
    return {"status": "ok"}
"""

FASTAPI_REQ = """fastapi>=0.115.0
uvicorn[standard]>=0.30.0
"""


def scaffold_express(root: Path) -> None:
    (root / "package.json").write_text(EXPRESS_PKG, encoding="utf-8")
    src = root / "src"
    src.mkdir(parents=True, exist_ok=True)
    (src / "index.js").write_text(EXPRESS_INDEX, encoding="utf-8")


def scaffold_fastapi(root: Path) -> None:
    (root / "requirements.txt").write_text(FASTAPI_REQ, encoding="utf-8")
    pkg = root / "app"
    pkg.mkdir(parents=True, exist_ok=True)
    (pkg / "__init__.py").write_text("", encoding="utf-8")
    (pkg / "main.py").write_text(FASTAPI_MAIN, encoding="utf-8")


def main() -> int:
    p = argparse.ArgumentParser(description="Scaffold mínimo de API.")
    p.add_argument("project_path", type=Path, help="Diretório do projeto (será criado se não existir)")
    p.add_argument(
        "--stack",
        choices=("express", "fastapi"),
        default="express",
        help="express (Node) ou fastapi (Python)",
    )
    args = p.parse_args()
    root = args.project_path.resolve()
    if root.exists() and any(root.iterdir()):
        print(f"Erro: diretório não vazio: {root}", file=sys.stderr)
        return 1
    root.mkdir(parents=True, exist_ok=True)
    if args.stack == "express":
        scaffold_express(root)
    else:
        scaffold_fastapi(root)
    print(f"Scaffold {args.stack} criado em {root}")
    if args.stack == "express":
        print("Próximo: cd e npm install && npm start")
    else:
        print("Próximo: python -m venv .venv && pip install -r requirements.txt")
        print("         uvicorn app.main:app --reload")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
