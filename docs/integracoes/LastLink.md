---
sidebar_position: 9
---

# LastLink

Siga este passo a passo para integrar seu fluxo de vendas ao fluxo de entrega Mentorfy usando a LastLink.

Antes de configurar o webhook na LastLink, crie uma **URL de Entrada** na Mentorfy. Essa URL define quais produtos, categorias ou turmas serão liberados quando a LastLink confirmar uma compra.

1. Na Mentorfy, acesse **Integrações > Entrada** e clique em **+ Nova URL**.

2. Preencha os dados da URL:

- Em **Nome**, use algo fácil de identificar, como `LastLink - Nome do Produto`.
- Em **Gateway de Pagamento**, selecione **LastLink**. Se a opção não aparecer, selecione **Genérico**.
- Em **Produtos a Liberar** e/ou **Categorias a Liberar**, selecione o acesso que deve ser liberado após a compra.

:::tip
Veja o passo a passo completo em [Como criar uma URL de Entrada](/docs/integracoes/intro#como-criar-uma-nova-url-de-entrada).
:::

3. Clique em **Criar** e depois use a ação **Copiar** para copiar a URL de Entrada gerada.

4. Entre na sua conta da LastLink e acesse o produto que deve disparar o webhook.

<img src="/docs/img/lastlink_produtos.png" width="360" alt="Lista de produtos na LastLink" decoding="async" loading="lazy" />

<br/>
<br/>

5. No menu lateral do produto, clique em **Integrações**. Procure por **Lastlink - Webhook** e clique em **Ativar**.

<img src="/docs/img/lastlink_integracoes.png" alt="Menu Integrações no produto da LastLink" decoding="async" loading="lazy" />

<br/>
<br/>

<img src="/docs/img/lastlink_ativar_webhook.png" width="520" alt="Card Lastlink - Webhook com botão Ativar" decoding="async" loading="lazy" />

<br/>
<br/>

6. Com a integração ativa, clique em **Novo webhook** no canto superior direito.

<img src="/docs/img/lastlink_novo_webhook.png" alt="Botão Novo webhook na LastLink" decoding="async" loading="lazy" />

<br/>
<br/>

7. Preencha os dados do webhook:

- Em **Nome do webhook**, use um nome fácil de identificar, como `Mentorfy`.
- Em **URL**, cole exatamente a URL de Entrada copiada da Mentorfy.

<img src="/docs/img/lastlink_formulario_webhook.png" alt="Formulário de webhook da LastLink com nome e URL" decoding="async" loading="lazy" />

<br/>
<br/>

8. Na seção **Eventos**, clique em **Selecionar** para escolher os eventos que a Mentorfy deve receber.

<img src="/docs/img/lastlink_botao_selecionar_eventos.png" alt="Botão Selecionar eventos no webhook da LastLink" decoding="async" loading="lazy" />

<br/>
<br/>

Eventos recomendados para liberar, atualizar ou remover acessos:

- `Purchase_Order_Confirmed`
- `Recurrent_Payment`
- `Product_Access_Started`
- `Product_Access_Ended`
- `Subscription_Expired`
- `Payment_Refund`
- `Payment_Chargeback`
- `Active_Member_Notification`
- `Subscription_Product_Acess`

:::info
A LastLink usa a grafia `Subscription_Product_Acess` no nome do evento. Se essa opção aparecer no painel, selecione essa opção exatamente como exibida.
:::

Depois de marcar os eventos desejados, clique em **Confirmar**.

<img src="/docs/img/lastlink_modal_eventos.png" width="520" alt="Modal de seleção de eventos do webhook da LastLink" decoding="async" loading="lazy" />

<br/>
<br/>

9. Antes de salvar, você pode clicar em **Testar** para conferir se a URL cadastrada responde corretamente. Para finalizar, clique em **Salvar**.

<img src="/docs/img/lastlink_testar_salvar.png" alt="Botões Testar e Salvar do webhook da LastLink" decoding="async" loading="lazy" />

<br/>
<br/>

## Testando a integração

Após configurar o webhook na LastLink e na Mentorfy:

1. Faça uma venda de teste ou utilize um evento de teste disponível na LastLink.
2. Verifique se o evento aparece nos logs de integração da Mentorfy.
3. Confirme se o cliente aparece na jornada e na lista de clientes da Mentorfy.
4. Se o acesso não for liberado, confira se a URL de Entrada copiada da Mentorfy está correta e se os eventos recomendados foram selecionados.

Caso queira visualizar o conteúdo técnico enviado pela LastLink, use uma ferramenta como o Webhook.site apenas para teste. Para liberar acessos reais, a URL precisa ser a URL da Mentorfy.

<img src="/docs/img/lastlink_webhooksite_resultado.jpeg" width="520" alt="Exemplo de eventos recebidos no Webhook.site" decoding="async" loading="lazy" />

<br/>
<br/>

## Conclusão

Ao finalizar esses passos, a integração estará completa e você poderá ver seus clientes na jornada e em sua lista de clientes na Mentorfy.

Em caso de dúvida, entre em contato com nosso suporte pelo chat na plataforma ou pelo e-mail contato@mentorfy.io
