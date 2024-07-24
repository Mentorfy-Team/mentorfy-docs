---
sidebar_position: 2
---

# Asaas

Siga esse passo a passo para integrar seu fluxo de vendas ao fluxo de entrega Mentorfy usando o Asaas.

Antes de configurar o webhook precisamos **copiar o link fornecido pela Mentorfy** do produto que deseja integrar e **copiar a chave da API do Asaas** para salvar na Mentorfy.

1. Acesse o seu produto que deseja integrar:
```
Minhas mentorias > Mentoria Escolhida > Integrações
```

2. **Copie o link** fornecido pela Mentorfy, usaremos ele para configurar o webhook no Asaas. Ele se parecerá com:
```
https://app.mentorfy.io/api/webhooks/codigo123
```

3. Entre na sua conta Assas e acesse o menu do usuário
```
Navegue até Integrações > Chave da API
```
<img src="/docs/img/asaas_apikey_nav.png" alt="chave da API"  /> 
<br/>

4. Clique em **Gerar nova chave de API**, após a verificação ele irá permitir copiar sua chave, **copie essa chave** gerada.

<img src="/docs/img/asaas_apikey.png" alt="chave da API" /> 
<br/>

5. Volte para a Mentorfy na página de integraçes e cole a chave gerada no campo de integração do Asaas.

<img src="/docs/img/asaas_apikey_mentorfy.png" alt="chave da API" /> 
<br/>
<br/>

6. **Salve as configurações.**

## Configurando o Webhook no Asaas

1. Acesse o menu do usuário no Asaas.
```
Navegue até Integrações > Webhooks
```

2. Na sua primeira visita, você verá um botão para criar seu primeiro Webhook. Clique em "**Criar Webhook**".

<img src="/docs/img/asaas_webhooks.png" alt="webhooks" />
<br/>

3. **Preencha o formulário** com as seguintes informaçes:
   - Webhook deve ser marcado como ativo
   - Nome para o webhook
   - URL que receberá as informaçes do evento (link que você copiou da Mentorfy)
   - E-mail para notificações em caso de erros de comunicação
   - Versão da API V3
   - Token de autenticação (chave da API que você copiou do Asaas)
   - Ative a fila de sincronização
   - Tipo de envio Sequencial

<img src="/docs/img/asaas_adicionar_webhook.png" alt="Adicionar Webhook" />
<br/>
<br/>

4. **Selecione todos os eventos de Cobrança**. Você pode consultar a lista completa de eventos na documentação do Asaas.

<img src="/docs/img/asaas_adicionar_webhook_eventos.png" alt="Adicionar Webhook" />
<br/>
<br/>

5. **Salve as configurações**.

Você pode ter até 10 Webhooks configurados por conta, sem restriçes de endereço. Também é possível editar ou excluir Webhooks criados.

<img src="/docs/img/asaas_webhooks_salvar.png" alt="Adicionar Webhook" width="450" />
<br/>

## Testando a integração

Após configurar o webhook no Asaas e na Mentorfy:

1. Faça uma venda de teste no Asaas.
2. Verifique se o evento é recebido corretamente na Mentorfy.
3. Confirme se o cliente aparece na jornada e na lista de clientes da Mentorfy.

## Conclusão

Ao finalizar esses passos, a integração estará completa e você poderá ver seus clientes na jornada e em sua lista de clientes na Mentorfy.

Em caso de dúvida, entre em contato com nosso suporte pelo chat na plataforma ou pelo e-mail contato@mentorfy.io

Para mais informações sobre webhooks no Asaas, consulte a [documentação oficial](https://docs.asaas.com/docs/create-new-webhook-via-web-application).