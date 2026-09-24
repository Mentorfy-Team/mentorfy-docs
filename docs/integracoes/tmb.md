---
sidebar_position: 12
---

# TMB

Siga este passo a passo para integrar suas vendas no boleto parcelado da TMB ao fluxo de entrega Mentorfy.

Com a integração ligada:

- Quando o aluno paga o **boleto de entrada**, a Mentorfy cria a conta dele e libera o acesso.
- Quando o pedido é **cancelado** na TMB, o acesso é retirado.
- Se o aluno atrasar uma parcela por **mais de 30 dias**, o acesso fica pausado. Quando ele paga (ou renegocia), o acesso volta sozinho.

## 1. Criar a URL de Entrada na Mentorfy

1. Na Mentorfy, acesse **Integrações > Entrada** e clique em **+ Nova URL**.
2. Em **Nome**, use algo fácil de identificar, como `TMB - Nome do Produto`.
3. Em **Gateway de Pagamento**, selecione **TMB**.
4. Em **Produtos a Liberar** e/ou **Categorias a Liberar**, escolha o que o aluno deve receber.
5. Clique em **Criar** e depois em **Copiar** para copiar a URL gerada.

:::tip
Crie uma URL de Entrada para cada produto da TMB. Veja o passo a passo completo em [Como criar uma URL de Entrada](/docs/integracoes/intro#como-criar-uma-nova-url-de-entrada).
:::

## 2. Ligar o Webhook Vendas na TMB

1. No portal do produtor da TMB, abra **Produtos**, clique em **Mais opções** do produto e depois em **Integrações**.
2. Escolha **Webhook Vendas**.
3. Em **URL**, cole a URL de Entrada copiada da Mentorfy.
4. Deixe **Chave** e **Valor** em branco.
5. Ative o **Status** e salve.

## 3. Ligar o Webhook Financeiro na TMB

É ele que avisa a Mentorfy quando uma parcela atrasa ou é paga.

1. Ainda em **Integrações** do mesmo produto, escolha **Webhook Financeiro**.
2. Cole **a mesma URL** de Entrada.
3. Deixe **Chave** e **Valor** em branco, ative o **Status** e salve.

:::info
Se preferir não pausar o acesso de quem atrasa, basta não ligar o Webhook Financeiro. O Webhook Vendas continua liberando e retirando acessos normalmente.
:::

## Como funciona o bloqueio por atraso

| O que acontece na TMB | O que acontece na Mentorfy |
|---|---|
| Parcela vencida há mais de 30 dias | O acesso do aluno aos produtos desta URL fica pausado |
| Parcela paga | Se não houver outra parcela vencida, o acesso volta |
| Parcelas renegociadas | As parcelas antigas deixam de contar e o acesso volta |
| Pedido cancelado | O acesso é retirado e não volta com pagamentos de parcelas |

O bloqueio só vale para os produtos da URL que recebeu o aviso. Produtos que o aluno comprou por outro caminho não são afetados.

## Testando a integração

1. Na TMB, abra a aba **Histórico de interações**, logo abaixo da configuração do webhook.
2. Escolha um evento, clique nos três pontos e use **Reenviar**.
3. Na Mentorfy, confira o evento em **Integrações > Observabilidade**.
4. Confirme se o aluno aparece na sua lista de clientes com o produto liberado.

Se o acesso não for liberado, confira se a URL colada na TMB é exatamente a URL copiada da Mentorfy e se a URL de Entrada está ativa.

## Conclusão

Ao finalizar esses passos, suas vendas da TMB entram sozinhas na Mentorfy, e o acesso acompanha a situação financeira de cada aluno.

Em caso de dúvida, entre em contato com nosso suporte pelo chat na plataforma ou pelo e-mail contato@mentorfy.io
