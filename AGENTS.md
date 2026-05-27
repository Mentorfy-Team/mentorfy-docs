# AGENTS.md

## Regra principal: máximo de 600 linhas por arquivo

Nenhum arquivo de código deste projeto deve ultrapassar **600 linhas**. Sempre que você criar ou editar um arquivo, verifique a contagem; se passar do limite, o arquivo deve ser **segregado em múltiplos arquivos** com responsabilidades coesas.

### Como segregar
- Quebre por responsabilidade real (uma feature/seção/módulo por arquivo), não por contagem arbitrária de linhas.
- Mantenha a API pública do arquivo original estável: re-exporte do caminho antigo quando necessário para não quebrar imports.
- Use uma pasta dedicada quando fizer sentido.
- Para documentação Markdown longa, prefira dividir por tópico em arquivos vizinhos e linkar a partir de um índice — só vale para `.md` se eles forem servidos como conteúdo (ex.: docs site). README/CHANGELOG ficam isentos.

### Verificação obrigatória depois de segregar
Antes de marcar a tarefa como concluída, valide que **nada** foi perdido em capacidade ou comportamento:
1. Type-check passa (se o projeto tiver TS).
2. Lint passa.
3. Build do site de docs passa.
4. Links internos (cross-references) continuam válidos — rode o linter de links se o projeto tiver.
5. Todos os imports/refs do arquivo original continuam resolvendo (busque pelo nome antigo e confirme).
6. Compare o conteúdo público antes/depois: nenhuma seção, exemplo ou export sumiu.

Se algum passo acima quebrar, a segregação **não está concluída**.

### Arquivos isentos da regra
A regra não se aplica a arquivos gerados ou de configuração estática. Para este projeto, considere isentos:

- Qualquer pasta `generated/` / `__generated__/`.
- Arquivos exportados a partir de schemas externos (OpenAPI, GraphQL, etc.).
- `CHANGELOG.md`, `README.md` e arquivos de licença.

Genéricos sempre isentos: `node_modules/**`, `.next/**`, `dist/**`, `build/**`, lock files, snapshots de teste (`*.snap`), `*.d.ts` vendored.

### Quando você encontrar um arquivo já acima do limite
Se a sua tarefa atual mexe em um arquivo que já está acima de 600 linhas e a segregação ficaria fora do escopo da mudança pedida, faça apenas a mudança mínima necessária e avise o usuário ao final que o arquivo continua acima do limite e merece refatoração dedicada. Não faça segregação "de carona" sem combinar antes.
