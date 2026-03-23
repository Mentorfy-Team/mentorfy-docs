---
name: senior-frontend
description: >-
  Orienta desenvolvimento frontend moderno com React, Next.js, TypeScript e
  Tailwind CSS: scaffolding de componentes, análise de bundle, padrões de UI,
  performance e revisão de código. Usar ao implementar features, otimizar
  performance, aplicar UI/UX, gerenciar estado ou revisar código frontend.
---

# Senior Frontend

Toolkit para desenvolvimento frontend com ferramentas e boas práticas atuais. Foco principal: **React**, **Next.js**, **TypeScript**, **Tailwind CSS**.

## Início rápido

### Scripts (executar a partir de `.cursor/skills/senior-frontend/`)

```bash
python scripts/component_generator.py <caminho-do-projeto> --name NomeDoComponente [opções]
python scripts/bundle_analyzer.py <caminho> [--verbose]
python scripts/frontend_scaffolder.py <caminho-do-projeto> --feature nome-da-feature [opções]
```

| Script | Função |
|--------|--------|
| `component_generator.py` | Gera pasta de componente TSX + barrel `index.ts` |
| `bundle_analyzer.py` | Detecta stack, lê `package.json`, sugere comandos e checagens |
| `frontend_scaffolder.py` | Cria estrutura de feature (`components`, `hooks`, `types`) |

## Instruções para o agente

1. **Novo componente**: preferir o gerador com `--name` em PascalCase; usar `--client` se for interatividade/hooks no App Router.
2. **Performance**: rodar `bundle_analyzer.py` no root do app antes de otimizações ad hoc; medir (Lighthouse, Web Vitals) antes de micro-otimizar.
3. **Padrões**: consultar [references/react_patterns.md](references/react_patterns.md) e [references/nextjs_optimization_guide.md](references/nextjs_optimization_guide.md).
4. **Segurança e qualidade**: ver [references/frontend_best_practices.md](references/frontend_best_practices.md).
5. **Projetos sem Python**: aplicar manualmente a mesma estrutura de pastas e convenções descritas nas referências.

## Fluxo de trabalho sugerido

1. Instalar dependências do projeto (`npm install` / `pnpm install` / `yarn`).
2. Gerar componente ou feature com os scripts quando fizer sentido.
3. `npm run build` / `npm run lint` / testes do repositório.
4. Para análise de bundle em Next.js: seguir sugestões impressas por `bundle_analyzer.py` (ex.: `ANALYZE=true` + build, conforme setup do projeto).

## Referências (um nível de profundidade)

- [references/react_patterns.md](references/react_patterns.md) — composição, estado, efeitos, performance em React.
- [references/nextjs_optimization_guide.md](references/nextjs_optimization_guide.md) — App Router, dados, imagens, bundle.
- [references/frontend_best_practices.md](references/frontend_best_practices.md) — TypeScript, Tailwind, segurança, acessibilidade.

## Resumo de boas práticas

- **Código**: componentes pequenos, props tipadas, evitar prop drilling com composição ou contexto pontual.
- **Performance**: lazy/dynamic onde couber, imagens otimizadas, não bloquear hidratação sem necessidade.
- **Segurança**: sanitizar HTML rico, CSP quando aplicável, não expor segredos no cliente.
- **Manutenção**: convenções de pasta consistentes, testes em lógica crítica e componentes instáveis.
