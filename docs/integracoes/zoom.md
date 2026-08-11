---
sidebar_position: 10
---

# Zoom Integration (English)

**This app is currently available in Brazilian Portuguese (pt-BR) only.** The user interface and support materials are provided in Portuguese for mentors and students in Brazil.

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

The complete flow involves five main steps:

1. **Connect the Zoom account** — OAuth authorization in the Integrations tab.
2. **Create a meeting** — in the Meetings area, with the *Zoom Event* type.
3. **Share the links** — guest link for participants and moderator link for the mentor.
4. **Join the meeting** — access the room with Zoom's native interface.
5. **Watch the replay** — after the session, the cloud recording is imported automatically and attendance is synced.

:::info Prerequisites
- Active Mentorfy account with access permission to **Integrations** and **Meetings**.
- Valid Zoom account (the same one that will be used to host events).
:::

---

## **1. Access the platform**

Go to [app.mentorfy.io](https://app.mentorfy.io) and log in with your email and password or use Google login.

---

## **2. Connect the Zoom account**

In the sidebar menu, go to **Integrations** and select the **Zoom** tab — or open [mentorfy.io/mentor/integracoes?tab=zoom](https://mentorfy.io/mentor/integracoes?tab=zoom) directly.

The page displays the connection status. While the account is not linked, the card will show **"Zoom not connected"**.

![Zoom integration page in Mentorfy](/docs/img/Zoom_Mentorfy_Pagina_Integracao.png)

Click **Connect Zoom**. You will be redirected to the Zoom authorization page — log in to your Zoom account (if not already authenticated) and confirm access.

After authorizing, return to Mentorfy. The integration will be active and ready to create Zoom events.

---

## **3. Create a Zoom meeting**

In the sidebar menu, go to **Meetings > My Meetings** ([mentorfy.io/mentor/reunioes/geral](https://mentorfy.io/mentor/reunioes/geral)) and click **+ New Meeting**.

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
| **Record to cloud** | Records the session to Zoom's cloud; after the meeting, the replay is imported automatically into your Mentorfy library. |

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

## **6. Cloud recording and attendance**

### Session replay

Enable **Record to cloud** when creating the meeting (or start a cloud recording manually from Zoom's **Record** menu while hosting). After the meeting ends and Zoom finishes processing the recording, Mentorfy imports it automatically:

- The meeting shows a **View Recording** button as soon as the replay is ready — usually a few minutes after the session ends.
- The replay is stored in your private Mentorfy media library, and students with access to the meeting can watch it in the member area.
- If you end and restart the same meeting, the recordings of every instance are located and imported.
- The original recording remains untouched in your Zoom account — Mentorfy never modifies or deletes it.

In **Meetings > My Meetings** ([mentorfy.io/mentor/reunioes/geral](https://mentorfy.io/mentor/reunioes/geral)), the **Recording** column shows the replay status of each session — **Available** when the replay is ready to watch.

![My Meetings page with the Recording column showing an available replay](/docs/img/Zoom_Mentorfy_Minhas_Reunioes_Gravacao.png)

### Attendance

After the session ends, Mentorfy syncs the participant list from Zoom (display name, email, and join/leave times) so you can review attendance on the meeting page.

:::info Reconnect required for existing integrations
Recording import and attendance sync use new read permissions (cloud recordings and participants). If you connected Zoom before this update, open **Integrations > Zoom** and reauthorize the app (disconnect and connect again) so the new permissions are granted. Meetings keep working either way — but replays are only imported after reauthorizing.
:::

---

## **Conclusion**

With the Zoom integration configured, you can create live events through Mentorfy, share access links with students, conduct meetings with Zoom's infrastructure and quality, and let students watch the replay in the member area.

If you have any questions, contact support via in-platform chat or email at contato@mentorfy.io. English support page: [mentorfy.io/support](https://mentorfy.io/support).

---

---

# Integração Zoom (Português)

**Este aplicativo está disponível principalmente em português brasileiro (pt-BR).**

A integração Zoom permite conectar a conta do mentor à Mentorfy para criar **eventos Zoom** diretamente nas reuniões e disponibilizar o acesso na área do aluno. Após a configuração, mentor e participantes entram em uma experiência **100% Zoom**, otimizada também para dispositivos móveis.

## Vídeo tutorial de integração

Assista ao passo a passo em vídeo para configurar sua integração Zoom com a Mentorfy:

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
    title="Tutorial Zoom Mentorfy"
  ></iframe>
</div>

---

## **Visão geral**

O fluxo completo envolve cinco etapas principais:

1. **Conectar a conta Zoom** — autorização OAuth na aba Integrações.
2. **Criar uma reunião** — na área Reuniões, com o tipo *Evento Zoom*.
3. **Compartilhar os links** — link de convidado para participantes e link de moderador para o mentor.
4. **Entrar na reunião** — acesso à sala com a interface nativa do Zoom.
5. **Assistir ao replay** — após a sessão, a gravação em nuvem é importada automaticamente e a presença é sincronizada.

:::info Pré-requisitos
- Conta ativa na Mentorfy com permissão de acesso a **Integrações** e **Reuniões**.
- Conta Zoom válida (a mesma que será usada para hospedar os eventos).
:::

---

## **1. Acessar a plataforma**

Acesse [app.mentorfy.io](https://app.mentorfy.io) e faça login com seu e-mail e senha ou utilize o acesso via Google.

![Tela de login da Mentorfy](/docs/img/Zoom_Mentorfy_Login.png)

---

## **2. Conectar a conta Zoom**

No menu lateral, acesse **Integrações** e selecione a aba **Zoom** — ou abra diretamente [mentorfy.io/mentor/integracoes?tab=zoom](https://mentorfy.io/mentor/integracoes?tab=zoom).

A página exibe o status da conexão. Enquanto a conta não estiver vinculada, o card mostrará **"Zoom não conectado"**.

![Página de integração Zoom na Mentorfy](/docs/img/Zoom_Mentorfy_Pagina_Integracao.png)

Clique em **Conectar Zoom**. Você será redirecionado para a página de autorização do Zoom — faça login na sua conta Zoom (se ainda não estiver autenticado) e confirme o acesso.

Após autorizar, retorne à Mentorfy. A integração ficará ativa e pronta para criar eventos Zoom.

---

## **3. Criar uma reunião Zoom**

No menu lateral, acesse **Reuniões > Minhas Reuniões** ([mentorfy.io/mentor/reunioes/geral](https://mentorfy.io/mentor/reunioes/geral)) e clique em **+ Nova Reunião**.

![Página Minhas Reuniões na Mentorfy](/docs/img/Zoom_Mentorfy_Conectar.png)

No modal de criação, selecione o tipo **Evento Zoom** e preencha as informações básicas:

| Campo | Descrição |
| ----- | ----- |
| **Nome da reunião** | Título exibido para os participantes. |
| **Agendar data e horário** | Opcional. Ative para definir início programado. |
| **Duração em minutos** | Tempo previsto do evento (padrão: 60 min). |
| **Exigir login Mentorfy** | Restringe o acesso a usuários autenticados na plataforma. |
| **Sala de espera** | Participantes aguardam aprovação do moderador antes de entrar. |
| **Entrar antes do host** | Permite que participantes entrem antes do mentor. |
| **Mutar ao entrar** | Microfone dos participantes inicia desativado. |
| **Gravar na nuvem** | Grava a sessão na nuvem do Zoom; após a reunião, o replay é importado automaticamente para a sua biblioteca na Mentorfy. |

![Modal de criação de reunião com Evento Zoom selecionado](/docs/img/Zoom_Mentorfy_Criar_reuniao.png)

Avance pelos passos **Convite** e **Config** conforme necessário e finalize a criação.

---

## **4. Compartilhar os links**

Após criar a reunião, a Mentorfy exibe dois links distintos:

| Link | Uso |
| ----- | ----- |
| **Link para convidados** | Compartilhe com alunos e participantes. |
| **Link de moderador** | Use apenas você (mentor) para iniciar e conduzir a reunião. |

![Links de convidado e moderador após criar a reunião](/docs/img/Zoom_Mentorfy_Compartilhar_Links.png)

Copie o link adequado usando o botão ao lado de cada campo ou clique em **Entrar na reunião** para acessar diretamente como moderador.

:::tip
Envie o **link de convidado** aos participantes. O **link de moderador** concede controle total da sala — não o compartilhe publicamente.
:::

---

## **5. Entrar na reunião**

Ao acessar o link (como moderador ou convidado), você pode ser solicitado a fazer login na Mentorfy ou no Zoom, dependendo das configurações definidas na criação.

Em seguida, a tela de pré-entrada do Zoom é exibida. Nela é possível verificar o nome de exibição, configurar microfone e câmera, e escolher fundo virtual.

![Tela de pré-entrada do Zoom](/docs/img/Zoom_Mentorfy_Acessar_Reuniao.png)

Clique em **Join** para entrar na sala. A partir daí, a experiência é **100% Zoom** — com todos os recursos nativos da plataforma, incluindo layout adaptado para **mobile**.

---

## **6. Gravação em nuvem e presença**

### Replay da sessão

Ative **Gravar na nuvem** ao criar a reunião (ou inicie a gravação em nuvem manualmente pelo menu **Gravar** do Zoom durante a sessão). Quando a reunião termina e o Zoom conclui o processamento da gravação, a Mentorfy importa o replay automaticamente:

- A reunião exibe o botão **Ver Gravação** assim que o replay estiver pronto — normalmente poucos minutos após o fim da sessão.
- O replay fica armazenado na sua biblioteca de mídia privada da Mentorfy, e alunos com acesso à reunião podem assistir pela área de membros.
- Se você encerrar e reabrir a mesma reunião, as gravações de todas as instâncias são localizadas e importadas.
- A gravação original permanece intacta na sua conta Zoom — a Mentorfy nunca modifica nem exclui nada.

Em **Reuniões > Minhas Reuniões** ([mentorfy.io/mentor/reunioes/geral](https://mentorfy.io/mentor/reunioes/geral)), a coluna **Gravação** mostra o status do replay de cada sessão — **Disponível** quando o replay está pronto para assistir.

![Página Minhas Reuniões com a coluna Gravação exibindo replay disponível](/docs/img/Zoom_Mentorfy_Minhas_Reunioes_Gravacao.png)

### Presença

Após o fim da sessão, a Mentorfy sincroniza a lista de participantes do Zoom (nome de exibição, e-mail e horários de entrada/saída) para você conferir a presença na página da reunião.

:::info Reconexão necessária para integrações antigas
A importação de gravações e a sincronização de presença usam novas permissões de leitura (gravações em nuvem e participantes). Se você conectou o Zoom antes desta atualização, acesse **Integrações > Zoom** e reautorize o app (desconecte e conecte novamente) para conceder as novas permissões. As reuniões continuam funcionando normalmente — mas os replays só são importados após a reautorização.
:::

---

## **Conclusão**

Com a integração Zoom configurada, você pode criar eventos ao vivo diretamente pela Mentorfy, compartilhar links de acesso com alunos na área do membro, conduzir reuniões com a infraestrutura e qualidade do Zoom e disponibilizar o replay para os alunos assistirem.

Em caso de dúvida, entre em contato com nosso suporte pelo chat na plataforma ou pelo e-mail contato@mentorfy.io. Suporte em português: [mentorfy.io/suporte](https://mentorfy.io/suporte).
