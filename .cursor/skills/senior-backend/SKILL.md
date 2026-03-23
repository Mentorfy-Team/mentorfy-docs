---
name: senior-backend
description: >-
  Comprehensive backend development skill for building scalable backend systems
  using Node.js, Express, Go, Python, Postgres, GraphQL, REST APIs. Includes API
  scaffolding, migration heuristics, lightweight load testing, database
  optimization guidance, security practices, and performance tuning. Use when
  designing APIs, optimizing database queries, implementing business logic,
  handling authentication/authorization, or reviewing backend code.
---

# Senior Backend

Kit de trabalho para backend sênior: padrões, segurança, performance e scripts auxiliares (stdlib Python).

## Quando aplicar

- Design de API (REST/GraphQL), contratos e versionamento
- PostgreSQL: índices, queries, migrações, pool de conexões
- AuthN/AuthZ (JWT, sessões, OAuth2, RBAC)
- Revisão de código backend e checklist de produção

## Scripts (executar a partir da pasta desta skill)

| Script | Função |
|--------|--------|
| `python scripts/api_scaffolder.py` | Estrutura mínima Express ou FastAPI |
| `python scripts/database_migration_tool.py` | Heurísticas em arquivos `.sql` de migração |
| `python scripts/api_load_tester.py` | Teste de carga HTTP simples (urllib + threads) |

```bash
python scripts/api_scaffolder.py <caminho-projeto> --stack express|fastapi
python scripts/database_migration_tool.py <pasta> [--verbose]
python scripts/api_load_tester.py <url> [-n N] [-c C]
```

Se o projeto não tiver Python 3, o agente deve aplicar o mesmo conteúdo **manualmente**, guiado por `references/`.

## Referências (ler sob demanda)

| Arquivo | Conteúdo |
|---------|----------|
| [references/api_design_patterns.md](references/api_design_patterns.md) | REST vs GraphQL, erros, idempotência, versionamento |
| [references/database_optimization_guide.md](references/database_optimization_guide.md) | Índices, EXPLAIN, N+1, pooling |
| [references/backend_security_practices.md](references/backend_security_practices.md) | OWASP, secrets, headers, dependências |

## Stack alinhada ao escopo

**Backend:** Node.js, Express, Go, Python (FastAPI/Django), GraphQL, REST  
**Dados:** PostgreSQL, ORMs comuns (Prisma, SQLAlchemy, etc.)  
**Ops:** Docker, CI, observabilidade (logs, métricas, traces)

Evitar expandir para mobile/frontend salvo quando o usuário pedir BFF ou integração explícita.

## Fluxo rápido

1. Definir limites da API (recursos, erros, paginação, autenticação).
2. Modelar dados e migrações; validar SQL com `database_migration_tool.py` ou revisão manual seguindo o guia.
3. Implementar com testes (unit + integração em camadas críticas).
4. Antes de release: checklist em `backend_security_practices.md`; carga pontual com `api_load_tester.py` se houver endpoint HTTP.

## Instruções para o agente

1. Preferir **conteúdo desta skill e das referências** a suposições genéricas sobre a stack do usuário.
2. Ao sugerir código, casar com a linguagem/framework do repositório; se ambíguo, perguntar em uma frase.
3. Para performance: medir (EXPLAIN, APM, benchmarks) antes de micro-otimizar.
4. Não executar scripts contra produção sem confirmação explícita do usuário.

## Recursos

- Padrões: `references/api_design_patterns.md`
- Banco: `references/database_optimization_guide.md`
- Segurança: `references/backend_security_practices.md`
- Código dos utilitários: `scripts/`
