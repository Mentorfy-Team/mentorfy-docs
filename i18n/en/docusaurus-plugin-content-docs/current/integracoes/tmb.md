---
sidebar_position: 12
---

# TMB

Follow these steps to connect your TMB installment-boleto sales to Mentorfy's delivery flow.

With the integration on:

- When the student pays the **down-payment boleto**, Mentorfy creates their account and releases access.
- When the order is **canceled** on TMB, access is removed.
- If the student is **more than 30 days late** on an installment, access is paused. Once they pay (or renegotiate), access comes back on its own.

## 1. Create the Inbound URL on Mentorfy

1. On Mentorfy, go to **Integrations > Inbound** and click **+ New URL**.
2. In **Name**, use something easy to recognize, such as `TMB - Product Name`.
3. In **Payment Gateway**, select **TMB**.
4. In **Products to Release** and/or **Categories to Release**, choose what the student should receive.
5. Click **Create**, then **Copy** to copy the generated URL.

:::tip
Create one Inbound URL for each TMB product. See the full guide in [How to create an Inbound URL](/docs/integracoes/intro#como-criar-uma-nova-url-de-entrada).
:::

## 2. Turn on Webhook Vendas on TMB

1. In the TMB producer portal, open **Produtos**, click **Mais opções** on the product, then **Integrações**.
2. Choose **Webhook Vendas**.
3. In **URL**, paste the Inbound URL copied from Mentorfy.
4. Leave **Chave** and **Valor** empty.
5. Turn on **Status** and save.

## 3. Turn on Webhook Financeiro on TMB

This is the one that tells Mentorfy when an installment is late or paid.

1. Still in the same product's **Integrações**, choose **Webhook Financeiro**.
2. Paste **the same** Inbound URL.
3. Leave **Chave** and **Valor** empty, turn on **Status** and save.

:::info
If you don't want to pause access for late students, just don't turn on Webhook Financeiro. Webhook Vendas keeps releasing and removing access normally.
:::

## How the late-payment pause works

| What happens on TMB | What happens on Mentorfy |
|---|---|
| Installment more than 30 days overdue | The student's access to this URL's products is paused |
| Installment paid | If no other installment is overdue, access comes back |
| Installments renegotiated | Old installments stop counting and access comes back |
| Order canceled | Access is removed and does not come back with installment payments |

The pause only applies to the products of the URL that received the notice. Products the student bought another way are not affected.

## Testing the integration

1. On TMB, open the **Histórico de interações** tab, right below the webhook settings.
2. Pick an event, click the three dots and use **Reenviar**.
3. On Mentorfy, check the event in **Integrations > Observability**.
4. Confirm the student shows up in your client list with the product released.

If access is not released, check that the URL pasted on TMB is exactly the URL copied from Mentorfy and that the Inbound URL is active.

## Conclusion

Once these steps are done, your TMB sales flow into Mentorfy automatically, and access follows each student's payment status.

If you have questions, contact our support through the platform chat or at contato@mentorfy.io
