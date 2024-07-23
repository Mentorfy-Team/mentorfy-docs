---
sidebar_position: 2
---

# Asaas

Siga esse passo a passo para integrar seu fluxo de vendas ao fluxo de entrega Mentorfy usando o Asaas.

## Configurando o Webhook no Asaas

Para configurar o webhook no Asaas, siga estas etapas:

1. Acesse o menu do usuário no Asaas e navegue até **Integrações > Webhooks**.

<img src="/docs/img/asaas_integracoes.png" alt="integrações" width="350" /> 
<br/>

2. Na sua primeira visita, você verá um botão para criar seu primeiro Webhook. Clique em "**Criar Webhook**".

<img src="/docs/img/asaas_webhooks.png" alt="webhooks" width="350" />
<br/>

3. Preencha o formulário com as seguintes informações:
   - Nome para o webhook
   - URL que receberá as informações do evento (você obterá isso da Mentorfy na página de integrações da mentoria)
   - E-mail para notificações em caso de erros de comunicação
   - Versão da API
   - Decida se deseja definir um token de autenticação
   - Ative a fila de sincronização
   - Ative o Webhook
   - Escolha o tipo de envio

<img src="/docs/img/asaas_adicionar_webhook.png" alt="Adicionar Webhook" width="350" />
<br/>

4. Selecione todos os eventos de Cobrança. Você pode consultar a lista completa de eventos na documentação do Asaas.

<img src="/docs/img/asaas_adicionar_webhook_eventos.png" alt="Adicionar Webhook" width="350" />
<br/>

5. Salve as configuraçes.

Você pode ter até 10 Webhooks configurados por conta, sem restrições de endereço. Também é possível editar ou excluir Webhooks criados.

<img src="/docs/img/asaas_webhooks_salvar.png" alt="Adicionar Webhook" width="350" />
<br/>

<!-- Adicionar imagens relevantes aqui -->

## Configurando a integração na Mentorfy

Agora, vamos configurar a integração no lado da Mentorfy:

1. Acesse o seu produto que deseja integrar:
   ```
   Minhas mentorias > Mentoria Escolhida > Integrações
   ```

2. Copie o link fornecido pela Mentorfy. Ele se parecerá com:
   ```
   https://app.mentorfy.io/api/webhooks/codigo123
   ```

3. Use este link como a URL de destino ao configurar o webhook no Asaas.

## Testando a integração

Após configurar o webhook no Asaas e na Mentorfy:

1. Faça uma venda de teste no Asaas.
2. Verifique se o evento é recebido corretamente na Mentorfy.
3. Confirme se o cliente aparece na jornada e na lista de clientes da Mentorfy.

## Conclusão

Ao finalizar esses passos, a integração estará completa e você poderá ver seus clientes na jornada e em sua lista de clientes na Mentorfy.

Em caso de dúvida, entre em contato com nosso suporte pelo chat na plataforma ou pelo e-mail contato@mentorfy.io

Para mais informações sobre webhooks no Asaas, consulte a [documentação oficial](https://docs.asaas.com/docs/create-new-webhook-via-web-application).