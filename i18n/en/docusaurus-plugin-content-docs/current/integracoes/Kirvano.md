---
sidebar_position: 6
---

# Kirvano

Follow this step-by-step guide to integrate your sales flow with the Mentorfy delivery flow using Kirvano.

Before configuring the webhook, create an **Entry URL** in Mentorfy. This URL defines which products, categories, or classes will be unlocked when Kirvano confirms a purchase.

1. In Mentorfy, go to **Integrations > Entry** and click **+ New URL**.

2. Fill in the URL with a descriptive name, select **Kirvano** as the payment gateway, and choose the products and/or categories to be unlocked. Then click **Create** and copy the generated URL.

:::tip
See the full step-by-step in [How to create an Entry URL](/docs/integracoes/intro#como-criar-uma-nova-url-de-entrada).
:::

3. Log in to your account
```
Navigate to Products > Add Product if you have no products registered yet.
```
<img src="/docs/img/kirvano_adicionar_produto.png" height="300" alt="API key"  /> 
<br/>
<br/>

4. With the product already created, click the **integrations** tab and then **Webhooks**.

<img src="/docs/img/kirvano_webhook.png" height="400" alt="API key" /> 
<br/>
<br/>

5. Select the **Create Webhook** option.

<img src="/docs/img/kirvano_webook_criar.png" alt="API key" /> 
<br/>
<br/>

6. Fill in the form with the requested information, using the **Entry URL** you copied from Mentorfy and the product you created in Kirvano.

Go ahead and use the **Test Integration** button to confirm the link is correct.

<img src="/docs/img/kirvano_webhook_form.png" alt="API key" /> 
<br/>
<br/>

7. Select the events and click create.

<img src="/docs/img/kirvano_webhook_form2.png" alt="API key" /> 
<br/>
<br/>

8. Your integration is complete.

## Testing the integration

After configuring the webhook in Kirvano and Mentorfy:

1. Make a test sale in Kirvano.
2. Verify that the event is received correctly in Mentorfy.
3. Confirm that the customer appears in the journey and in the Mentorfy customer list.

## Conclusion

Once you complete these steps, the integration will be complete and you will be able to see your customers in the journey and in your customer list in Mentorfy.

If you have any questions, contact our support via the chat on the platform or by email at contato@mentorfy.io
