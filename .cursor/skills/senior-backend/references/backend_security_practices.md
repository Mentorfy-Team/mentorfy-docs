# Segurança backend

## Entrada e dados

- Validar e **normalizar** entrada (schema, tipos, limites de tamanho).
- **Queries parametrizadas**; nunca concatenar SQL com dados do usuário.
- Sanitizar saída conforme contexto (HTML, JSON, headers).

## Autenticação e sessão

- Senhas: hashing forte (Argon2/bcrypt); custo configurável.
- JWT: algoritmo explícito; validar `exp`/`iss`/`aud`; refresh token com rotação se aplicável.
- Cookies: `HttpOnly`, `Secure`, `SameSite`; CSRF para sessões cookie em sites web.

## Autorização

- **RBAC/ABAC** explícito em cada operação sensível; negar por padrão.
- Não confiar em `user_id` do body; derivar do contexto autenticado.

## Segredos e config

- Variáveis de ambiente ou secret manager; nunca commitar `.env` com segredos.
- Princípio do menor privilégio em credenciais de DB e IAM.

## Transporte e headers

- TLS em trânsito; HSTS em APIs públicas web.
- `Content-Security-Policy` onde houver HTML; limitar CORS a origens conhecidas.

## Dependências e supply chain

- Lockfile; auditoria (`npm audit`, `pip-audit`, etc.); atualizar com critério.

## Observabilidade sem vazamento

- Logs sem PII/secrets; correlacionar com `request_id`.
- Tratar erros internos como 500 genérico ao cliente; detalhe só em logs.

## Checklist pré-produção

- [ ] Auth em todos os endpoints sensíveis
- [ ] Rate limiting / proteção brute-force onde fizer sentido
- [ ] Headers de segurança e CORS revisados
- [ ] Secrets fora do repositório
- [ ] Dependências auditadas
