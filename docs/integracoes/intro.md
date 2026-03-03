---
sidebar_position: 0
---

# 🔌 Integrações: Página de Integrações

A área de Integrações é o "coração" da sua automação. É aqui que você conecta a Mentorfy com as plataformas de pagamento e com suas outras ferramentas de trabalho (como Zapier ou CRM). 

O objetivo é simples: **fazer o sistema trabalhar para você**, garantindo que o aluno receba o acesso na hora que paga e que você seja avisado de tudo o que acontece.

---

## 1. Entrada: Como liberar o acesso automaticamente (Webhooks)

Esta aba é usada para receber avisos das plataformas de pagamento (Hotmart, Kiwify, Stripe, etc.). Quando alguém compra seu curso lá, a plataforma "avisa" a Mentorfy por aqui, e o sistema libera o acesso do aluno automaticamente.

> **Vantagem:** Você pode criar um link (URL) diferente para cada produto ou campanha, deixando tudo organizado.

### Passo a Passo para configurar uma Entrada:

1. Acesse a aba **Entrada** e clique no botão **+ Nova URL**.
![Entrada](/img/integracoes/1.png)

2. Preencha os campos de forma simples:
   - **Nome**: Identifique para você mesmo (Ex: "Vendas Mentoria VIP - Hotmart").
   - **Gateway de Pagamento**: Escolha a plataforma onde você vende. Se não estiver na lista, use **Genérico**.
   - **Identificador (Slug)**: Escolha uma palavra curta para o final do link (Ex: `mentoria-vip`). 
   - **O que liberar (Mapeamento)**: Aqui está o segredo! Selecione quais **Produtos** ou **Turmas** o aluno deve receber acesso assim que o pagamento for confirmado por este link.

3. Clique em **Criar**.
![Saída](/img/integracoes/2.png)

**O que fazer agora?** Copie o link gerado e cole na sua plataforma de pagamento (no campo de Webhook/Integração dela). Temos guias específicos para cada plataforma aqui no Docs para te ajudar nessa parte final!

---

## 2. Saída: Avisando outros sistemas sobre seus alunos

A aba **Saída** é uma via de mão dupla. Ela serve para a Mentorfy "avisar" outras ferramentas que você usa (como Zapier, ActiveCampaign ou uma Planilha) quando algo acontece com seu aluno.

> **Exemplo Prático:** "Sempre que um aluno **concluir o curso**, avise o meu Zapier para eu mandar um presente para ele."

Se você ainda não tem nada configurado, clique em **+ Criar primeiro webhook**.
![Chaves](/img/integracoes/33.png)

### 2.1 Configurando um Novo Aviso de Saída (Passo a Passo)

Ao clicar em **+ Novo Webhook**, você verá este painel:
![Chaves](/img/integracoes/novo.png)

**Como preencher sem erro:**

1. **Nome**: Um apelido para a automação (Ex: "Aviso de Aluno Novo no CRM").
2. **URL do Webhook**: É o link de "destino". Você pega esse link dentro da ferramenta que vai receber os dados (como o Zapier).
3. **Gatilhos (O que vai disparar o aviso?)**: Marque apenas o que você quer monitorar:
   - **Vendas**: Avisa quando o pagamento é confirmado.
   - **Engajamento**: Avisa quando o aluno conclui uma aula ou ganha um certificado.
   - **Acesso**: Avisa se o acesso do aluno expirou ou foi removido.
   - **Organização**: Avisa quando você muda o aluno de turma.

4. **Configurações Extras (Headers)**: 
   - **Pode deixar em branco** na maioria das vezes! Só preencha se o sistema que vai receber os dados te der uma "Chave" ou "Token" de segurança obrigatório.

5. Clique em **Criar**. Agora, a Mentorfy passará a enviar esses avisos em tempo real para você.

---

## 3. Chaves: Sua Identidade e Segurança

A aba **Chaves** é onde ficam as suas "senhas" de integração.

### URL Principal
No topo, você verá sua URL global. Ela serve para todos os gateways, mas **recomendamos usar as URLs da aba "Entrada"** (explicada no item 1) para ter um controle melhor de qual produto está vendendo mais.

### Chaves de Segurança
Se você quiser uma camada extra de proteção para garantir que os avisos que você recebe são realmente da Hotmart/Kiwify, você pode adicionar um **Token (Secret)** clicando em **+ Adicionar Chave**.
![Logs](/img/integracoes/03-chaves.png)

---

## 4. Logs: O Histórico de tudo o que aconteceu

Teve dúvida se um aluno recebeu o acesso ou se o sistema avisou seu CRM? A aba **Logs** é o seu "detetive".

![Logs](/img/integracoes/04-logs.png)

Aqui você consegue ver:
- **Sucessos e Falhas**: Se a bolinha estiver verde, deu tudo certo. Se estiver vermelha, algo falhou na comunicação.
- **Gráfico de Eventos**: Veja o volume de vendas e acessos dos últimos 7 dias.
- **Busca Detalhada**: Você pode digitar o e-mail de um aluno para ver exatamente quais avisos o sistema recebeu ou enviou sobre ele.

---