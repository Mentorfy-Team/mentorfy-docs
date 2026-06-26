---
sidebar_position: 99
---

# Zoom Marketplace — English Listing Copy

Use this page when updating the Zoom Marketplace submission. All listing text must be in English (or English immediately after any other language).

## Regional disclaimer (bold, top of Long Description)

**This app is currently available in Brazilian Portuguese (pt-BR) only. The user interface and support materials are provided in Portuguese for mentors and students in Brazil.**

## Short Description

Connect Mentorfy to Zoom to create live meetings for your students, share join links, and run sessions with the Zoom Meeting SDK inside Mentorfy.

## Long Description

**This app is currently available in Brazilian Portuguese (pt-BR) only. The user interface and support materials are provided in Portuguese for mentors and students in Brazil.**

Mentorfy is a mentoring platform for creators and educators. This Zoom integration lets mentors connect their own Zoom account to Mentorfy and schedule Zoom meetings or webinars directly from the mentor dashboard.

**Key features**

- OAuth connection per mentor (no shared platform Zoom account)
- Create Zoom meetings and webinars from **Meetings > My Meetings**
- Guest and moderator join links for students and hosts
- Zoom Meeting SDK embedded in the student member area
- Optional Mentorfy login before joining
- Waiting room, mute on entry, join before host, and recording settings
- Attendance tracking (join, heartbeat, leave) synced with Mentorfy

**How it works**

1. Mentor opens **Integrations > Zoom** and clicks **Connect Zoom**
2. Mentor authorizes Mentorfy on Zoom OAuth
3. Mentor creates a meeting with type **Zoom Event**
4. Students open the guest link from the member area and join via Zoom Meeting SDK

**Support**

- English: [mentorfy.io/support](https://mentorfy.io/support)
- Portuguese: [mentorfy.io/suporte](https://mentorfy.io/suporte)

## Resource URLs (English)

| Resource | URL |
| -------- | --- |
| Privacy Policy | https://mentorfy.io/docs/privacy-policy |
| Terms of Use | https://mentorfy.io/docs/terms-of-use |
| Support | https://mentorfy.io/support |
| Documentation | https://docs.mentorfy.io/en/docs/integracoes/zoom |
| App Gallery screenshot | https://mentorfy.io/zoom-marketplace/app-gallery-dashboard-en.png |

Alternate URLs (bilingual EN first, same paths submitted to Zoom):

| Resource | URL |
| -------- | --- |
| Privacy Policy | https://mentorfy.io/docs/politica-de-privacidade |
| Terms of Use | https://mentorfy.io/docs/termos-de-uso |
| Documentation | https://docs.mentorfy.io/docs/integracoes/zoom |

## OAuth scope usage descriptions (English)

Paste into each scope field in the Zoom App Marketplace / Developer console:

| Scope | Usage description |
| ----- | ----------------- |
| `user:read:user` | Read the connected mentor's Zoom user profile (user ID, email) to display connection status on the Integrations page and associate meetings with the correct Zoom account. |
| `user:read:zak` | Obtain a Zoom Access Token (ZAK) so the meeting host can start or join as host through the Zoom Meeting SDK from Mentorfy. |
| `meeting:write:meeting` | Create Zoom meetings on behalf of the connected mentor when they schedule a **Zoom Event** in Mentorfy. |
| `meeting:update:meeting` | Update Zoom meeting settings (time, password, waiting room, etc.) when the mentor edits a meeting in Mentorfy. |
| `meeting:delete:meeting` | Delete or cancel Zoom meetings when the mentor removes or cancels a meeting in Mentorfy. |
| `meeting:read:meeting` | Read meeting details to display join links, meeting number, and status to mentors and authorized students. |
| `webinar:write:webinar` | Create Zoom webinars when the mentor selects webinar as the event type. |
| `webinar:update:webinar` | Update webinar settings when the mentor edits an event in Mentorfy. |
| `webinar:delete:webinar` | Delete webinars when the mentor cancels an event in Mentorfy. |

Only include scopes that are enabled on your Zoom app. Remove rows for scopes you do not request.

## App Gallery

Upload the English dashboard screenshot:

- PNG: https://mentorfy.io/zoom-marketplace/app-gallery-dashboard-en.png
- PNG (docs CDN): https://docs.mentorfy.io/docs/img/zoom-marketplace/app-gallery-dashboard-en.png
- Live preview: https://mentorfy.io/zoom-marketplace-gallery
- SVG fallback: https://docs.mentorfy.io/docs/img/zoom-marketplace/integrations-zoom-en.svg

Regenerate PNG locally: `pnpm zoom-gallery:png` in mentorfy-web-nextjs.
