---
sidebar_position: 9
---

# LastLink

Follow this step-by-step guide to integrate your sales flow with Mentorfy's delivery flow using LastLink.

Before configuring the webhook in LastLink, create an **Entry URL** in Mentorfy. This URL defines which products, categories, or classes will be unlocked when LastLink confirms a purchase.

1. In Mentorfy, go to **Integrations > Entry** and click **+ New URL**.

2. Fill in the URL details:

- In **Name**, use something easy to identify, such as `LastLink - Product Name`.
- In **Payment Gateway**, select **LastLink**. If the option does not appear, select **Generic**.
- In **Products to Unlock** and/or **Categories to Unlock**, select the access that should be granted after the purchase.

:::tip
See the full step-by-step at [How to create an Entry URL](/docs/integracoes/intro#como-criar-uma-nova-url-de-entrada).
:::

3. Click **Create** and then use the **Copy** action to copy the generated Entry URL.

4. Log in to your LastLink account and access the product that should trigger the webhook.

<img src="/docs/img/lastlink_produtos.png" width="360" alt="Product list in LastLink" decoding="async" loading="lazy" />

<br/>
<br/>

5. In the product sidebar menu, click **Integrations**. Search for **Lastlink - Webhook** and click **Activate**.

<img src="/docs/img/lastlink_integracoes.png" alt="Integrations menu in the LastLink product" decoding="async" loading="lazy" />

<br/>
<br/>

<img src="/docs/img/lastlink_ativar_webhook.png" width="520" alt="Lastlink - Webhook card with Activate button" decoding="async" loading="lazy" />

<br/>
<br/>

6. With the integration active, click **New webhook** in the upper right corner.

<img src="/docs/img/lastlink_novo_webhook.png" alt="New webhook button in LastLink" decoding="async" loading="lazy" />

<br/>
<br/>

7. Fill in the webhook details:

- In **Webhook name**, use an easy-to-identify name, such as `Mentorfy`.
- In **URL**, paste exactly the Entry URL copied from Mentorfy.

<img src="/docs/img/lastlink_formulario_webhook.png" alt="LastLink webhook form with name and URL" decoding="async" loading="lazy" />

<br/>
<br/>

8. In the **Events** section, click **Select** to choose the events that Mentorfy should receive.

<img src="/docs/img/lastlink_botao_selecionar_eventos.png" alt="Select events button in LastLink webhook" decoding="async" loading="lazy" />

<br/>
<br/>

Recommended events for granting, updating, or removing access:

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
LastLink uses the spelling `Subscription_Product_Acess` for this event name. If this option appears in the dashboard, select it exactly as displayed.
:::

After selecting the desired events, click **Confirm**.

<img src="/docs/img/lastlink_modal_eventos.png" width="520" alt="Event selection modal in LastLink webhook" decoding="async" loading="lazy" />

<br/>
<br/>

9. Before saving, you can click **Test** to check if the registered URL responds correctly. To finish, click **Save**.

<img src="/docs/img/lastlink_testar_salvar.png" alt="Test and Save buttons for the LastLink webhook" decoding="async" loading="lazy" />

<br/>
<br/>

## Testing the integration

After configuring the webhook in LastLink and Mentorfy:

1. Make a test sale or use a test event available in LastLink.
2. Check if the event appears in Mentorfy's integration logs.
3. Confirm whether the customer appears in the journey and in Mentorfy's customer list.
4. If access is not granted, check that the Entry URL copied from Mentorfy is correct and that the recommended events were selected.

If you want to view the technical content sent by LastLink, use a tool like Webhook.site for testing only. To grant real access, the URL must be the Mentorfy URL.

<img src="/docs/img/lastlink_webhooksite_resultado.jpeg" width="520" alt="Example of events received in Webhook.site" decoding="async" loading="lazy" />

<br/>
<br/>

## Conclusion

Once you complete these steps, the integration will be complete and you will be able to see your customers in the journey and in your customer list in Mentorfy.

If you have any questions, contact our support via the chat on the platform or by email at contato@mentorfy.io
