---
sidebar_position: 2
---

# Greenn

Follow this step-by-step guide to integrate your sales flow with the Mentorfy delivery flow using Greenn.

Before configuring the webhook, create an **Entry URL** in Mentorfy. This URL defines which products, categories, or classes will be unlocked when Greenn confirms a purchase.

1. In Mentorfy, go to **Integrations > Entry** and click **+ New URL**.

2. Fill in the URL with a descriptive name, select **Greenn** as the payment gateway, and choose the products and/or categories to be unlocked. Then click **Create** and copy the generated URL.

:::tip
See the full step-by-step in [How to create an Entry URL](/docs/integracoes/intro#como-criar-uma-nova-url-de-entrada).
:::

3. Log in to your account
```
Navigate to Products > Edit Product or Create Product if you have no products registered yet.
```
<img src="/docs/img/greenn_produto.jpg" height="500" alt="API key"  /> 
<br/>
<br/>

4. With the product selected or already created, click the **Content** tab and then **Add Content**.

<img src="/docs/img/greenn_produto_conteudo.jpg" height="200" alt="API key" /> 
<br/>
<br/>

5. Select the **External system** option.

<img src="/docs/img/greenn_produto_conteudo_externo.jpg" alt="API key" /> 
<br/>
<br/>

6. Select the **Webhook** option.

<img src="/docs/img/greenn_produto_conteudo_webhook.jpg" alt="API key" /> 
<br/>
<br/>

7. Fill in the form with the requested information, using the **Entry URL** you copied from Mentorfy:

<img src="/docs/img/greenn_produto_conteudo_form.jpg" alt="API key" /> 
<br/>
<br/>

8. Click **Create Release** and you're done!

## Testing the integration

After configuring the webhook in Greenn and Mentorfy:

1. Make a test sale in Greenn.
2. Verify that the event is received correctly in Mentorfy.
3. Confirm that the customer appears in the journey and in the Mentorfy customer list.

## Conclusion

Once you complete these steps, the integration will be complete and you will be able to see your customers in the journey and in your customer list in Mentorfy.

If you have any questions, contact our support via the chat on the platform or by email at contato@mentorfy.io
