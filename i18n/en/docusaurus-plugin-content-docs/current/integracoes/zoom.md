---
sidebar_position: 10
---

# Zoom

**This app is currently available in Brazilian Portuguese (pt-BR) only.** Portuguese documentation: [Zoom (pt-BR)](/docs/integracoes/zoom).

The Zoom integration allows connecting the mentor's account to Mentorfy to create **Zoom events** directly in meetings and make access available in the student area. After setup, mentors and participants enter a **100% Zoom** experience, also optimized for mobile devices.

## Integration video tutorial

Watch the step-by-step video to configure your Zoom integration with Mentorfy:
<div style={{ position: "relative", width: "100%", paddingBottom: "56.25%", marginBottom: "24px" }}>
  <iframe
    src="https://player.mediadelivery.net/play/373508/ac92a23a-9bbd-48e6-a081-f07de11d8ec5"
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
    title="Zoom Mentorfy Tutorial"
  ></iframe>
</div>

---

## **Overview**

The complete flow involves four main steps:

1. **Connect the Zoom account** — OAuth authorization in the Integrations tab.
2. **Create a meeting** — in the Meetings area, with the *Zoom Event* type.
3. **Share the links** — guest link for participants and moderator link for the mentor.
4. **Join the meeting** — access the room with Zoom's native interface.

:::info Prerequisites
- Active Mentorfy account with access permission to **Integrations** and **Meetings**.
- Valid Zoom account (the same one that will be used to host events).
:::

---

## **1. Access the platform**

Go to [app.mentorfy.io](https://app.mentorfy.io) and log in with your email and password or use Google login.

---

## **2. Connect the Zoom account**

In the sidebar menu, go to **Integrations** and select the **Zoom** tab.

The page displays the connection status. While the account is not linked, the card will show **"Zoom not connected"**.

![Zoom integration page in Mentorfy (English UI)](/docs/img/zoom-marketplace/integrations-zoom-en.svg)

Click **Connect Zoom**. You will be redirected to the Zoom authorization page — log in to your Zoom account (if not already authenticated) and confirm access.

After authorizing, return to Mentorfy. The integration will be active and ready to create Zoom events.

---

## **3. Create a Zoom meeting**

In the sidebar menu, go to **Meetings > My Meetings** and click **+ New Meeting**.

In the creation modal, select the **Zoom Event** type and fill in the basic information:

| Field | Description |
| ----- | ----- |
| **Meeting name** | Title displayed to participants. |
| **Schedule date and time** | Optional. Enable to set a scheduled start time. |
| **Duration in minutes** | Expected event duration (default: 60 min). |
| **Require Mentorfy login** | Restricts access to users authenticated on the platform. |
| **Waiting room** | Participants wait for moderator approval before joining. |
| **Join before host** | Allows participants to join before the mentor. |
| **Mute on entry** | Participants' microphones start muted. |

Proceed through the **Invite** and **Config** steps as needed and finalize the creation.

---

## **4. Share the links**

After creating the meeting, Mentorfy displays two distinct links:

| Link | Use |
| ----- | ----- |
| **Guest link** | Share with students and participants. |
| **Moderator link** | Use only yourself (mentor) to start and conduct the meeting. |

Copy the appropriate link using the button next to each field or click **Join meeting** to access directly as moderator.

:::tip
Send the **guest link** to participants. The **moderator link** grants full control of the room — do not share it publicly.
:::

---

## **5. Join the meeting**

When accessing the link (as moderator or guest), you may be prompted to log in to Mentorfy or Zoom, depending on the settings defined during creation.

Next, the Zoom pre-entry screen is displayed. There you can check the display name, configure microphone and camera, and choose a virtual background if desired.

Click **Join** to enter the room. From that point on, the experience is **100% Zoom** — with all the platform's native features, including a layout adapted for **mobile**.

---

## **Conclusion**

With the Zoom integration configured, you can create live events through Mentorfy, share access links with students, and conduct meetings with Zoom's infrastructure and quality.

If you have any questions, contact support via in-platform chat or email at contato@mentorfy.io. English support: [mentorfy.io/support](https://mentorfy.io/support).
