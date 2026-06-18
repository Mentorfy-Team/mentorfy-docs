---
sidebar_position: 1
---

# Herospark

Follow this step-by-step guide to integrate your sales flow with the Mentorfy delivery flow.

## Webhook Link

Before configuring the webhook in Herospark, create an **Entry URL** in Mentorfy. This URL defines which products, categories, or classes will be unlocked when Herospark confirms a purchase.

1. In Mentorfy, go to **Integrations > Entry** and click **+ New URL**.
2. Fill in the URL with a descriptive name, select **HeroSpark** as the payment gateway, and choose the products and/or categories to be unlocked.
3. Click **Create** and copy the generated URL.

:::tip
See the full step-by-step guide at [How to create an Entry URL](/docs/integracoes/intro#como-criar-uma-nova-url-de-entrada).
:::

## Herospark Platform

Access the Herospark platform
<!-- "background-color: #f6f8fa; padding: 16px; font-family: monospace; border-radius: 6px;" -->
<div style={{ backgroundColor: '#f6f8fa', padding: '16px', fontFamily: 'monospace', borderRadius: '6px' }}>
  <a href="https://app.herospark.com/login" target="_blank">https://app.herospark.com/login</a>
</div>
<br/>
1- Go to the **Autopilot** page and choose the **Use automation template** option:

<img src="/docs/img/herospark_pagamento_confirmado.jpg" alt="Payment Confirmed" width="350" />

<br/>
<br/>

2- Choose the **Generate a Webhook** option.
<img src="/docs/img/herospark_gerar_webhook.jpg" alt="Generate Webhook" width="350" />
<br/>
<br/>

3- Give your webhook an appropriate name
```
Chosen Product - Payment Confirmed | Mentorfy
```
<img src="/docs/img/herospark_nome_adequado.jpg" alt="Webhook Appropriate Name" width="350" />
<br/>
<br/>

4- Choose the product being sold that will be delivered by Mentorfy.
<img src="/docs/img/herospark_selecao_produto.jpg" alt="Product Selection" width="350" />
<br/>
<br/>

5- Paste the Entry URL you copied from Mentorfy and select the **POST** method.
<img src="/docs/img/herospark_link_post.jpg" alt="POST Link Configuration" width="350" />
<br/>
<br/>

6- Click **Add** Headers and add the key **Content-Type** with the value **application/json**.
Then paste the code below (no spaces) in **Body**.
```json
{"name":"{{buyer_name}}","email":"{{buyer_email}}","phone":"{{buyer_phone}}","price":"{{ offer_price | divided_by: 100.00 }}","herospark": true}
```
<img src="/docs/img/herospark_header_body.jpg" alt="Herospark Header Body" width="350" />
<br/>
<br/>

7- **Activate** the webhook and click **Save edit**.
<img src="/docs/img/herospark_ativar_webhook.jpg" alt="Activate Webhook" width="350" />
<br/>
<br/>



## Conclusion

Once you complete these steps, the integration will be complete and you will be able to see your customers in the journey and
in your customer list in Mentorfy.

If you have any questions, contact our support via chat on the platform or by email at contato@mentorfy.io
