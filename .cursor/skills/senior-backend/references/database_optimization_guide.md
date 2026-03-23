# Otimização PostgreSQL

## Antes de otimizar

1. Capturar query lenta (logs `log_min_duration_statement`, APM, `pg_stat_statements`).
2. Rodar `EXPLAIN (ANALYZE, BUFFERS)` em ambiente com dados representativos.

## Índices

- Índices para colunas em `WHERE`, `JOIN`, `ORDER BY` frequentes e seletivos.
- Índices compostos: ordem das colunas importa (mais seletivo primeiro, depois ordenação).
- **Partial indexes** quando o filtro é quase sempre o mesmo (`WHERE deleted_at IS NULL`).
- Evitar índices redundantes; `VACUUM`/`ANALYZE` após mudanças grandes.

## Queries

- Evitar `SELECT *` em caminhos quentes.
- **N+1:** joins ou batch loading no ORM.
- **Paginação:** `OFFSET` alto é caro; preferir keyset (`WHERE id > $cursor`).
- **Locks:** transações curtas; `SELECT ... FOR UPDATE` só quando necessário.

## Conexões

- Pool no app (tamanho limitado); evitar um pool por request serverless sem configuração adequada.
- `statement_timeout` e `idle_in_transaction_session_timeout` como rede de segurança.

## Migrações

- Migrações reversíveis quando possível; locks em tabelas grandes: estratégias online (ex.: criar índice `CONCURRENTLY` no Postgres).

## Troubleshooting rápido

| Sintoma | Verificar |
|---------|-----------|
| Seq scan em tabela grande | Índice, estatísticas (`ANALYZE`) |
| Alto tempo de espera I/O | Cache, índice faltando, disco |
| Muitas conexões | Pool, leaks, PgBouncer |
