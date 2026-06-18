---
sidebar_position: 1
---

# Digital Manager Guru

Follow this step-by-step guide to integrate your sales flow with the Mentorfy delivery flow.

## Webhook Link

Before configuring the webhook in Digital Manager Guru, create an **Entry URL** in Mentorfy. This URL defines which products, categories, or classes will be unlocked when Guru confirms a sale.

1. In Mentorfy, go to **Integrations > Entry** and click **+ New URL**.
2. Fill in the URL with a descriptive name, select **DM Guru** as the payment gateway, and choose the products and/or categories to be unlocked.
3. Click **Create** and copy the generated URL.

:::tip
See the full step-by-step guide at [How to create an Entry URL](/docs/integracoes/intro#como-criar-uma-nova-url-de-entrada).
:::

## Digital Manager Guru Platform

Access the Digital Manager Guru platform:
<div style={{ backgroundColor: '#f6f8fa', padding: '16px', fontFamily: 'monospace', borderRadius: '6px' }}>
  <a href="https://digitalmanager.guru/admin/auth/login" target="_blank">https://digitalmanager.guru/admin/auth/login</a>
</div>
<br/>

1- Go to the **Settings** page and choose the **Webhooks** option:
<div style={{ backgroundColor: '#f6f8fa', padding: '16px', fontFamily: 'monospace', borderRadius: '6px' }}>
  <a href="https://digitalmanager.guru/admin/settings/webhooks" target="_blank">https://digitalmanager.guru/admin/settings/webhooks</a>
</div>

<img src="/img/integracoes/guru1.png" alt="Settings Menu - Webhooks" width="600" />
<br/>
<br/>

2- On the Webhooks page, you will see the **Add webhook** option — click it:

<img src="/img/integracoes/guru 2.png" alt="Webhooks Page - Add Webhook" width="600" />
<br/>
<br/>

3- In the **Add Webhook** modal, configure the following fields:

- **Name**: Give a name to identify the integration (e.g., "Mentorfy - Course Delivery")
- **URL**: Paste here the Entry URL you generated in Mentorfy
- **Concurrent Requests**: Sets the concurrent requests limit (the default is usually 5)
- **Status**: Select which sale statuses should trigger the notification (e.g., select "Approved/Paid" to unlock student access)
- **Filter by**: Choose **All** to send all sales or **Products** if you want to filter specific products only
- **Active**: Make sure the toggle is marked as active (purple)

<img src="/img/integracoes/guru 3.png" alt="Add Webhook Modal" width="450" />
<br/>
<br/>

4- **Finish**: Click **Send** (or Create) to save the configuration. From now on, whenever a sale reaches the selected status in Guru, Mentorfy will receive the notification and automatically unlock access.

## Conclusion

Once you complete these steps, the integration will be complete and you will be able to test it.
