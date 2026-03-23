# Padrões React (referência)

## Componentes e composição

- Preferir **composição** a herança: slots via `children` ou props de elemento (`header`, `footer`).
- **Containers vs apresentação**: separar busca de dados e UI quando facilitar testes e reutilização.
- **Colocation**: manter testes e subcomponentes perto do domínio que usam.

## Estado

- Estado **local** quando só um subtree precisa; **lift state** só quando necessário.
- **useReducer** para lógica de atualização complexa ou muitas transições relacionadas.
- Contexto para dados que muitos níveis consomem; evitar contextos gigantes que mudam com frequência (dividir por domínio).

## Efeitos e dados

- `useEffect` para sincronização com sistema externo; não para derivar estado que pode ser calculado no render.
- Dependências do array sempre completas e estáveis (memoizar callbacks/valores quando necessário).
- Data fetching: em React 18+/Next, preferir padrões do framework (Server Components, `fetch` com cache, ou libs como TanStack Query no cliente).

## Performance

- `useMemo` / `useCallback` quando há medição ou custo real (evitar uso por padrão).
- `React.memo` em componentes puros que recebem props estáveis e re-renderizam caro.
- Listas grandes: virtualização (`react-window`, etc.) quando necessário.

## Anti-padrões

- Efeitos que duplicam o que o render já pode derivar.
- Context como “store global” para tudo.
- Keys instáveis em listas (índice como key quando a ordem muda).
