---
sidebar_position: 10
---

# Zoom

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

O fluxo completo envolve quatro etapas principais:

1. **Conectar a conta Zoom** — autorização OAuth na aba Integrações.
2. **Criar uma reunião** — na área Reuniões, com o tipo *Evento Zoom*.
3. **Compartilhar os links** — link de convidado para participantes e link de moderador para o mentor.
4. **Entrar na reunião** — acesso à sala com a interface nativa do Zoom.

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

No menu lateral, acesse **Integrações** e selecione a aba **Zoom**.

A página exibe o status da conexão. Enquanto a conta não estiver vinculada, o card mostrará **"Zoom não conectado"**.

![Página de integração Zoom na Mentorfy](/docs/img/Zoom_Mentorfy_Pagina_Integracao.png)

Clique em **Conectar Zoom**. Você será redirecionado para a página de autorização do Zoom — faça login na sua conta Zoom (se ainda não estiver autenticado) e confirme o acesso.

Após autorizar, retorne à Mentorfy. A integração ficará ativa e pronta para criar eventos Zoom.

---

## **3. Criar uma reunião Zoom**

No menu lateral, acesse **Reuniões > Minhas Reuniões** e clique em **+ Nova Reunião**.

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

Em seguida, a tela de pré-entrada do Zoom é exibida. Nela é possível:

- Verificar o nome de exibição.
- Configurar microfone e câmera antes de entrar.
- Escolher fundo virtual, se desejar.

![Tela de pré-entrada do Zoom](/docs/img/Zoom_Mentorfy_Acessar_Reuniao.png)

Clique em **Join** para entrar na sala. A partir daí, a experiência é **100% Zoom** — com todos os recursos nativos da plataforma, incluindo layout adaptado para **mobile**.

---

## **Conclusão**

Com a integração Zoom configurada, você pode:

- Criar eventos ao vivo diretamente pela Mentorfy.
- Compartilhar links de acesso com alunos na área do membro.
- Conduzir reuniões com a infraestrutura e qualidade do Zoom.

Em caso de dúvida, entre em contato com nosso suporte pelo chat na plataforma ou pelo e-mail contato@mentorfy.io.
