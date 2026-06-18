---
sidebar_position: 5
---

# Kiwify

Follow this step-by-step guide to integrate your sales flow with the Mentorfy delivery flow using Kiwify.

Before configuring the webhook, create an **Entry URL** in Mentorfy. This URL defines which products, categories, or classes will be unlocked when Kiwify confirms a purchase.

1. In Mentorfy, go to **Integrations > Entry** and click **+ New URL**.

2. Fill in the URL with a descriptive name, select **Kiwify** as the payment gateway, and choose the products and/or categories to be unlocked. Then click **Create** and copy the generated URL.

:::tip
See the full step-by-step guide at [How to create an Entry URL](/docs/integracoes/intro#como-criar-uma-nova-url-de-entrada).
:::

3. Log in to your account
```
Navigate to Apps > Webhooks.
```
<img src="/docs/img/kiwify_webhooks.png" height="500" alt="API key"  /> 
<br/>
<br/>

4. Look for the **+ Create** button.

<img src="/docs/img/kiwify_cadastrar.png" height="200" alt="API key" /> 
<br/>
<br/>

5. Fill in the form with the requested information, using the **Entry URL** you copied from Mentorfy:

<img src="/docs/img/kiwify_form.png" alt="API key" /> 
<br/>
<br/>

6. In the send options, select these options:

<img src="/docs/img/kiwify_form_opcoes.png" alt="API key" /> 
<br/>
<br/>

8. Click **Save** and you're done!

## Testing the integration

After configuring the webhook in Kiwify and Mentorfy:

1. Make a test sale in Kiwify.
2. Check that the event is received correctly in Mentorfy.
3. Confirm that the customer appears in the journey and in the Mentorfy customer list.

<br/>
<br/>

## Conclusion

Once you complete these steps, the integration will be complete and you will be able to see your customers in the journey and in your customer list in Mentorfy.

If you have any questions, contact our support via chat on the platform or by email at contato@mentorfy.io
