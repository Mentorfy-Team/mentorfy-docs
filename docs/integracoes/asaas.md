---
sidebar_position: 2
---

# Asaas

Siga esse passo a passo para integrar seu fluxo de vendas ao fluxo de entrega Mentorfy usando o Asaas.

Antes de configurar o webhook, crie uma **URL de Entrada** na Mentorfy. Essa URL define quais produtos, categorias ou turmas serão liberados quando o Asaas confirmar uma cobrança.

1. Na Mentorfy, acesse **Integrações > Entrada** e clique em **+ Nova URL**.

2. Preencha a URL com um nome descritivo, selecione **Asaas** como gateway de pagamento e escolha os produtos e/ou categorias que devem ser liberados. Depois, clique em **Criar** e copie a URL gerada.

:::tip
Veja o passo a passo completo em [Como criar uma URL de Entrada](/docs/integracoes/intro#como-criar-uma-nova-url-de-entrada).
:::

## Configurando o Webhook no Asaas

1. Clique no **ícone da conta** no canto superior direito do Asaas.

2. Selecione **Integrações**. Será aberta a página de integrações, onde você verá a aba **Webhooks**.

<img src="/docs/img/asaas_webhooks.png" alt="Navegação até Integrações > Webhooks no Asaas" />
<br/>

3. Na sua primeira visita, você verá um botão para criar seu primeiro Webhook. Clique em "**Criar Webhook**".

4. **Preencha o formulário** com as seguintes informações:
   - Webhook deve ser marcado como ativo
   - Nome para o webhook
   - URL que receberá as informações do evento: cole a **URL de Entrada** que você copiou da Mentorfy
   - E-mail para notificações em caso de erros de comunicação
   - Versão da API V3
   - Ative a fila de sincronização
   - Tipo de envio Sequencial

<img src="/docs/img/asaas_adicionar_webhook.png" alt="Adicionar Webhook" />
<br/>
<br/>

5. **Selecione todos os eventos de Cobrança**. Você pode consultar a lista completa de eventos na documentação do Asaas.

<img src="/docs/img/asaas_adicionar_webhook_eventos.png" alt="Adicionar Webhook" />
<br/>
<br/>

6. **Salve as configurações**.

Você pode ter até 10 Webhooks configurados por conta, sem restrições de endereço. Também é possível editar ou excluir Webhooks criados.

<img src="/docs/img/asaas_webhooks_salvar.png" alt="Adicionar Webhook" width="450" />
<br/>

## Testando a integração

Após configurar o webhook no Asaas:

1. Faça uma venda de teste no Asaas.
2. Verifique se o evento é recebido corretamente na Mentorfy.
3. Confirme se o cliente aparece na jornada e na lista de clientes da Mentorfy.

## Conclusão

Ao finalizar esses passos, a integração estará completa e você poderá ver seus clientes na jornada e em sua lista de clientes na Mentorfy.

Em caso de dúvida, entre em contato com nosso suporte pelo chat na plataforma ou pelo e-mail contato@mentorfy.io

Para mais informações sobre webhooks no Asaas, consulte a [documentação oficial](https://docs.asaas.com/docs/create-new-webhook-via-web-application).
