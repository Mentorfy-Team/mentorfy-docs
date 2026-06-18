---
sidebar_position: 3
---

# Pagar.me

Follow this step-by-step guide to integrate your sales flow with the Mentorfy delivery flow using Pagar.me.

Before configuring the webhook, create an **Entry URL** in Mentorfy. This URL defines which products, categories, or classes will be unlocked when Pagar.me confirms a purchase.

1. In Mentorfy, go to **Integrations > Entry** and click **+ New URL**.

2. Fill in the URL with a descriptive name, select **Pagar.me** as the payment gateway, and choose the products and/or categories to be unlocked. Then click **Create** and copy the generated URL.

:::tip
See the full step-by-step guide at [How to create an Entry URL](/docs/integracoes/intro#como-criar-uma-nova-url-de-entrada).
:::

3. Log in to your account
```
Navigate to Settings > Webhooks.
```
<img src="/docs/img/pagarme_webhooks.jpg" height="500" alt="API key"  /> 
<br/>

4. Look for the **+ Register Webhook** button.

<img src="/docs/img/pagarme_cadastrar.jpg" height="200" alt="API key" /> 
<br/>

5. Fill in the form with the requested information, using the **Entry URL** you copied from Mentorfy:

<img src="/docs/img/pagarme_form1.jpg" alt="API key" />
<img src="/docs/img/pagarme_form2.jpg" alt="API key" /> 
<br/>
<br/>

6. Click **Save** and you're done!

## Testing the integration

After configuring the webhook in Pagarme and Mentorfy:

1. Make a test sale in Pagarme.
2. Check that the event is received correctly in Mentorfy.
3. Confirm that the customer appears in the journey and in the Mentorfy customer list.

<br/>
<br/>

## Conclusion

Once you complete these steps, the integration will be complete and you will be able to see your customers in the journey and in your customer list in Mentorfy.

If you have any questions, contact our support via chat on the platform or by email at contato@mentorfy.io
