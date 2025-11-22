---
sidebar_position: 8
---

# Stripe

Siga este passo a passo para integrar seu fluxo de vendas ao fluxo de entrega Mentorfy usando o Stripe.

Antes de configurar o webhook, precisamos **copiar o link fornecido pela Mentorfy** do produto que deseja integrar.

1. Acesse o seu produto que deseja integrar:
```
Minhas mentorias > Mentoria Escolhida > Integrações
```

2. **Copie o link** fornecido pela Mentorfy, usaremos ele para configurar o webhook no Stripe. Ele se parecerá com:
```
https://app.mentorfy.io/api/webhooks/codigo123
```

3. Acesse o Dashboard do Stripe e navegue até **Developers (Desenvolvedores) > Webhooks**.

4. Clique em **Add endpoint (Adicionar endpoint)**.

5. No campo **Endpoint URL**, cole o link que você copiou da Mentorfy.

6. Em **Select events to listen to (Selecione os eventos para ouvir)**, adicione os seguintes eventos:
   - `checkout.session.completed`
   - `invoice.payment_succeeded`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`

7. Clique em **Add endpoint (Adicionar endpoint)** para salvar.

8. Pronto, sua integração está completa.

## Testando a integração

Após configurar o webhook no Stripe e na Mentorfy:

1. Faça uma venda de teste no Stripe (você pode usar o modo de teste do Stripe).
2. Verifique se o evento é recebido corretamente na Mentorfy.
3. Confirme se o cliente aparece na jornada e na lista de clientes da Mentorfy.

## Conclusão

Ao finalizar esses passos, a integração estará completa e você poderá ver seus clientes na jornada e em sua lista de clientes na Mentorfy.

Em caso de dúvida, entre em contato com nosso suporte pelo chat na plataforma ou pelo e-mail contato@mentorfy.io
