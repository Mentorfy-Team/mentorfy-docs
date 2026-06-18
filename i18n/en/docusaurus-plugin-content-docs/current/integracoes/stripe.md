---
sidebar_position: 8
---

# Stripe

## Video integration tutorial

Watch the step-by-step video to configure your Stripe integration with Mentorfy:
<div style={{ position: "relative", width: "100%", paddingBottom: "56.25%", marginBottom: "24px" }}>
  <iframe
    src="https://player.mediadelivery.net/play/373508/1e02d5d0-9e91-48fc-8e58-bb4d8d735513"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      border: "none",
      borderRadius: "8px"
    }}
    allowFullScreen
    allow="encrypted-media"
    title="Stripe Mentorfy Tutorial"
  ></iframe>
</div>


Follow this step-by-step guide to integrate your sales flow with Mentorfy's delivery flow using Stripe. Stripe does not filter to send events for specific products, so if you want to sell different products and grant different accesses, an additional configuration will be required for Mentorfy to identify the different offers.



1. Access the Integrations page in Mentorfy:

Go to **Integrations > Entry** and click **+ New URL**.
<br/>

2. **Create an Entry URL**, filling in the basic information:
<img src="/docs/img/stripe_integracao_mentorfy.png" height="200" alt="API key"  />
<img src="/docs/img/stripe_integracao_mentorfy_2.png" height="200" alt="API key"  />
<br/>
<br/>
```
You will need to fill in Name, Gateway (Stripe) and products to unlock; the remaining fields are optional.
If you want to sell multiple products that grant different accesses in Mentorfy, you will need to add the Stripe Price IDs (price_id). That is, if you are only ever unlocking the same products, this is not necessary.
```
2.1 **Optional** in case of different product releases with different offers
<img src="/docs/img/stripe_integracao_mentorfy_price.png" height="200" alt="API key"  />
<img src="/docs/img/stripe_integracao_mentorfy_price_copy.png" height="200" alt="API key"  />
<br/>
<br/>
```
To get the price_id you need to access your product in Stripe, click on the price and copy the price_id.
This way, when a sale occurs, we can associate it with the Mentorfy products that will be unlocked.
```

2.2 **Copy the created Entry URL**, we will use it in Stripe now.
<img src="/docs/img/stripe_integracao_mentorfy_link.png" height="200" alt="API key"  />
<br/>
<br/>

3. Access the Stripe dashboard and navigate to **Developers > Webhooks**.

<img src="/docs/img/stripe-webhook.png" height="300" alt="API key"  />
<br/>
<br/>

4. Click **Add endpoint**.

5. In the **Endpoint URL** field, paste the Entry URL you copied from Mentorfy.

6. In **Select events to listen to**, add the following events:
   - `invoice.payment_succeeded`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`

7. Click **Add endpoint** to save.

8. Done, your integration is complete.

## Testing the integration

After configuring the webhook in Stripe and Mentorfy:

1. Make a test sale in Stripe (you can use Stripe's test mode).
2. Check that the event is received correctly in Mentorfy.
3. Confirm whether the customer appears in the journey and in Mentorfy's customer list.

## Conclusion

Once you complete these steps, the integration will be complete and you will be able to see your customers in the journey and in your customer list in Mentorfy.

If you have any questions, contact our support via the chat on the platform or by email at contato@mentorfy.io
