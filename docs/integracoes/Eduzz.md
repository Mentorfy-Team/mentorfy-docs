---
sidebar_position: 4
---

# Eduzz

Como configurar um Webhook no Developer Hub

Guia passo a passo — Eduzz · Developer Hub

Este guia explica como migrar e configurar integrações via webhook usando o Developer Hub da Eduzz (MyEduzz), desde o acesso à plataforma até a criação e teste da configuração.

## **Passo 1 — Acesse a seção de Webhooks no MyEduzz**

No painel do MyEduzz, acesse o menu lateral esquerdo, role até a seção Avançado e clique em Webhooks.

<img src="/docs/img/eduzz_developer_hub_1.png" width="328" alt="Menu Webhooks no MyEduzz" decoding="async" loading="lazy" />

<img src="/docs/img/eduzz_developer_hub_2.png" width="617" alt="Tela de Webhooks no MyEduzz" decoding="async" loading="lazy" />

⚠ O webhook atual será descontinuado em 11/01/2027. Migre para o Developer Hub o quanto antes para evitar impactos na sua integração.

## **Passo 2 — Acesse o Developer Hub pelo banner de migração**

Na tela de Webhooks do MyEduzz, um aviso em amarelo indica a necessidade de migração. Clique em "Saiba mais sobre o novo webhook e como migrar" ou acesse o Developer Hub diretamente.

✔ No Developer Hub, navegue até Webhooks → Configurações no menu lateral para gerenciar suas integrações.

## **Passo 3 — Crie uma nova configuração de Webhook**

Na tela Lista de configurações do Developer Hub, clique no botão "+ Nova configuração" no canto superior direito da página.

<img src="/docs/img/eduzz_developer_hub_3.png" width="622" alt="Lista de configurações e botão Nova configuração" decoding="async" loading="lazy" />

## **Passo 4 — Preencha os dados da configuração**

Na tela de Criação de configuração, preencha os seguintes campos obrigatórios:

- Nome da configuração — Ex: testementorfy
- URL para envio dos dados — Ex: https://api.mentorfy.io/api/v1/webhooks/...
- Máximo de eventos enviados em paralelo para a URL — use o slider (padrão: 10)
- Secret — mantenha o padrão ou configure conforme necessário

<img src="/docs/img/eduzz_developer_hub_4.png" width="624" alt="Formulário de criação de configuração do webhook" decoding="async" loading="lazy" />

## **Passo 5 — Verifique a URL**

Após preencher a URL, clique no botão "Verificar URL". Aguarde a confirmação de status antes de prosseguir.

<img src="/docs/img/eduzz_developer_hub_5.png" width="625" alt="Verificação da URL do webhook" decoding="async" loading="lazy" />

✔ Se a URL for válida, será exibido: "Status HTTP 200 – Sucesso!". Caso contrário, revise a URL e tente novamente.

## **Passo 6 — Selecione os eventos desejados**

Na seção "Quais eventos você deseja receber?", pesquise ou navegue pelas categorias disponíveis (AlpaClass, MyEduzz, SafeVideo, Nutror, Blinket, etc.) e selecione os eventos relevantes para sua integração. Os eventos selecionados aparecem no painel direito "Eventos Selecionados".

<img src="/docs/img/eduzz_developer_hub_6.png" width="646" alt="Seleção de eventos do webhook" decoding="async" loading="lazy" />

✔ Exemplo de eventos úteis: `myeduzz.invoice_paid` (pagamento efetuado) e `myeduzz.invoice_opened` (fatura aberta).

## **Passo 7 — Teste os eventos selecionados**

Clique em "Testar eventos selecionados" no painel direito. Uma janela de Teste de eventos será aberta com as opções:

- Testar todos os eventos — envia teste para todos os eventos selecionados
- Testar eventos não testados — envia apenas para os que ainda não foram testados
- Enviar teste (por evento) — testa cada evento individualmente

Após enviar os testes, clique em "Ver resultado" para verificar o resultado.

<img src="/docs/img/eduzz_developer_hub_7.png" width="653" alt="Janela de teste de eventos" decoding="async" loading="lazy" />

## **Passo 8 — Verifique o resultado dos testes**

A janela "Resultado dos testes" exibirá um resumo com:

- Eventos selecionados — lista dos eventos configurados
- Eventos não testados — eventos que não receberam teste
- Eventos integrados com sucesso — confirmados com retorno positivo
- Eventos integrados com falha — eventos que retornaram erro

<img src="/docs/img/eduzz_developer_hub_8.png" width="632" alt="Resultado dos testes do webhook" decoding="async" loading="lazy" />

⚠ Se algum evento retornar falha, a configuração não poderá ser ativada. Corrija o problema antes de prosseguir.

## **Passo 9 — Finalize criando a configuração**

Com todos os testes validados com sucesso, feche o modal de resultados e clique no botão "Criar configuração" no rodapé da página para salvar e ativar seu webhook.

✔ Sua configuração aparecerá na lista do Developer Hub, pronta para receber e processar eventos!

## Resumo dos Passos

- Acesse MyEduzz → Avançado → Webhooks
- Acesse o Developer Hub pelo banner de migração
- Crie uma nova configuração de webhook
- Preencha nome, URL, paralelo e secret
- Verifique a URL (HTTP 200 = sucesso)
- Selecione os eventos desejados
- Teste os eventos e envie os testes
- Confira o resultado — todos devem ser integrados com sucesso
- Clique em "Criar configuração" — pronto!
