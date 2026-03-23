# Padrões de design de API

## REST

- **Recursos e substantivos:** `/users`, `/users/{id}/orders`; verbos ficam no método HTTP.
- **Status HTTP:** 2xx sucesso; 4xx erro do cliente (validação 400/422, auth 401, permissão 403, não encontrado 404, conflito 409); 5xx falha do servidor.
- **Corpo de erro:** formato estável (`code`, `message`, `details` opcional); não vazar stack em produção.
- **Paginação:** `limit`/`cursor` ou `page`/`page_size`; incluir metadados (`next_cursor`, `total` se barato).
- **Idempotência:** `PUT`/`DELETE` idempotentes; `POST` com `Idempotency-Key` quando criar recursos duplicáveis.
- **Versionamento:** prefixo `/v1` ou header `Accept: application/vnd.api+json; version=1`.

## GraphQL

- **Schema como contrato:** tipos explícitos; evitar `JSON` genérico salvo casos raros.
- **N+1:** DataLoader ou joins no resolver; medir com tracing.
- **Limites:** profundidade de query, custo/complexidade, timeout global.
- **Erros:** estender `errors[]` com `extensions.code`; não expor detalhes internos.

## Boas práticas comuns

- **OpenAPI/GraphQL schema** versionados no repositório.
- **Contratos de integração** testados (contract tests ou snapshots de schema).
- **Deprecação:** avisar com header ou campo `_deprecated`; prazo e documentação.

## Anti-padrões

- CRUD “Deus” em um único endpoint com `action` no body.
- Códigos HTTP genéricos (sempre 200 com erro no body).
- Quebra de compat sem versionamento ou janela de migração.
