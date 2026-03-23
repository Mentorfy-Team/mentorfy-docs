# Boas práticas frontend (referência)

## TypeScript

- Tipar **props** de componentes e retornos de funções públicas.
- Evitar `any`; usar `unknown` e narrowing quando o tipo for amplo.
- Tipos compartilhados em `types/` ou ao lado do domínio.

## Tailwind CSS

- Ordem utilitária consistente (há plugins de Prettier para ordenar classes).
- Componentes repetidos: extrair para componente React ou `@apply` com parcimônia em camada base.
- **Dark mode**: `dark:` e tokens de cor centralizados quando o design system exigir.

## Acessibilidade

- Semântica HTML (`button` para ação, `a` para navegação).
- Rótulos em inputs, foco visível, contraste WCAG.
- Teclado e leitores: `aria-*` quando o padrão HTML não bastar.

## Segurança

- **`dangerouslySetInnerHTML`**: só com sanitização (ex.: DOMPurify no pipeline adequado).
- Não embutir segredos em código cliente; variáveis `NEXT_PUBLIC_*` são expostas.
- Dependências: manter atualizadas; auditar com `npm audit` / ferramentas do CI.

## Escalabilidade

- Features em pastas coesas (ver scaffolder da skill).
- Limitar acoplamento entre features; exports públicos via `index.ts`.

## Testes

- Testes unitários em utilitários e hooks; testes de componente em fluxos críticos.
- E2E para jornadas principais (login, checkout, etc.) conforme prioridade do produto.
