# Next.js — otimização (referência)

## App Router

- **Server Components por padrão**: mover trabalho pesado e fetch para o servidor quando possível.
- **`'use client'`** só onde há estado, efeitos ou APIs do browser — reduz JS no cliente.
- **Streaming e Suspense**: boundaries para não bloquear a página inteira.

## Dados

- Preferir **fetch** no servidor com cache/revalidate (`next: { revalidate }`) alinhado ao SLA do conteúdo.
- Evitar waterfalls: compor fetches em paralelo no mesmo server component quando fizer sentido.

## Imagens e assets

- Usar **`next/image`** com `width`/`height` ou `fill` + sizes corretos para layout estável e LCP.
- Fontes: `next/font` para subset e display.

## Bundle

- **Dynamic import** (`next/dynamic`) para componentes pesados ou abaixo da dobra.
- Revisar imports de bibliotecas grandes (date-fns locale tree-shaking, lodash-es, etc.).
- Habilitar análise de bundle no CI ou localmente (webpack analyzer / `@next/bundle-analyzer` conforme versão).

## Metadados e SEO

- `metadata` / `generateMetadata` no App Router para título, descrição, OG.

## Troubleshooting rápido

- Hidratação: diferenças servidor/cliente (datas, `window`, extensões) — isolar em `useEffect` ou suprimir só com causa corrigida.
- Cache agressivo: ajustar `revalidate`, `cache: 'no-store'` ou tags conforme necessidade.
