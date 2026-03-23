#!/usr/bin/env python3
"""Teste de carga HTTP mínimo (stdlib: urllib). Não usar em produção sem autorização."""

from __future__ import annotations

import argparse
import statistics
import sys
import time
import urllib.error
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed


def one_request(url: str, timeout: float) -> tuple[float, int | None, str | None]:
    t0 = time.perf_counter()
    try:
        req = urllib.request.Request(url, method="GET")
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            _ = resp.read()
            ms = (time.perf_counter() - t0) * 1000
            return ms, resp.status, None
    except urllib.error.HTTPError as e:
        ms = (time.perf_counter() - t0) * 1000
        return ms, e.code, str(e)
    except Exception as e:  # noqa: BLE001 — CLI utilitário
        ms = (time.perf_counter() - t0) * 1000
        return ms, None, str(e)


def main() -> int:
    p = argparse.ArgumentParser(description="Carga HTTP simples (GET).")
    p.add_argument("url", help="URL completa (ex.: http://localhost:3000/health)")
    p.add_argument("-n", type=int, default=100, help="Total de requisições")
    p.add_argument("-c", type=int, default=10, help="Concorrência (threads)")
    p.add_argument("--timeout", type=float, default=30.0, help="Timeout por requisição (s)")
    args = p.parse_args()
    if args.n < 1 or args.c < 1:
        print("-n e -c devem ser >= 1", file=sys.stderr)
        return 1
    latencies: list[float] = []
    errors = 0
    t0 = time.perf_counter()
    with ThreadPoolExecutor(max_workers=args.c) as ex:
        futs = [ex.submit(one_request, args.url, args.timeout) for _ in range(args.n)]
        for fut in as_completed(futs):
            ms, status, err = fut.result()
            latencies.append(ms)
            if err or (status is not None and status >= 400):
                errors += 1
    total_s = time.perf_counter() - t0
    latencies.sort()
    print(f"URL: {args.url}")
    print(f"Requests: {args.n}  Concurrency: {args.c}  Duration: {total_s:.2f}s")
    print(f"Throughput: {args.n / total_s:.1f} req/s")
    print(f"Errors: {errors}")
    if latencies:
        print(
            "Latency ms — min / p50 / p95 / max: "
            f"{latencies[0]:.1f} / {latencies[len(latencies) // 2]:.1f} / "
            f"{latencies[int(len(latencies) * 0.95)] if len(latencies) > 1 else 0:.1f} / "
            f"{latencies[-1]:.1f}",
        )
        print(f"Mean: {statistics.mean(latencies):.1f} ms")
    return 0 if errors == 0 else 2


if __name__ == "__main__":
    raise SystemExit(main())
