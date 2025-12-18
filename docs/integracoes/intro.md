---
sidebar_position: 0
---

# Como funciona?


## 1. Entrada: Recebendo Eventos (Webhooks de Gateways)

Esta aba permite que você crie URLs específicas para receber notificações (webhooks) de seus gateways de pagamento e automatizar a liberação de acesso ao aluno.

Ao invés de usar uma única URL, você pode criar URLs por produto, categoria ou campanha para melhor organização.



### Como Criar uma Nova URL de Entrada



Acesse a aba **Entrada** e clique no botão **+ Nova URL**.

![Entrada](/img/integracoes/1.png)

Preencha as informações na janela "Nova URL de Entrada":

- **Nome**: Defina um nome para a URL (Ex: Curso X - Hotmart).
- **Gateway de Pagamento**: Selecione a plataforma que enviará o webhook (Ex: Hotmart, Kiwify). Se for um sistema não listado, selecione **Genérico**.
  > **Nota**: Ao selecionar o gateway, a URL gerada terá o parâmetro `?gateway=nome-do-gateway` no final, facilitando a identificação.
- **Slug (identificador na URL)**: É o identificador único que fará parte da URL (Ex: `curso-marketing`).
- **Mapeamento**: Selecione quais **Produtos a Liberar** e/ou **Categorias a Liberar** do seu ambiente Mentorfy serão automaticamente acessados quando um pagamento for confirmado para esta URL.

Clique em **Criar**.

![Saída](/img/integracoes/2.png)

**Próximo Passo**: Após criar, copie a URL e cole no campo de Webhook da sua plataforma de pagamento (Consulte o guia específico do seu gateway para o passo a passo completo, por exemplo, o guia do Hotmart).

---

## 2. Saída: Disparando Eventos (Webhooks do Mentorfy)

Esta é uma funcionalidade nova. A aba **Saída** permite que a Mentorfy envie notificações (webhooks) para outras plataformas externas quando eventos específicos acontecerem com seus alunos/mentorados.



Isso permite, por exemplo, notificar sistemas de automação de marketing ou planilhas de controle quando um aluno concluir um módulo, cancelar ou for inativado.

Se não houver webhooks configurados, clique em **+ Criar primeiro webhook** ou **+ Novo Webhook** para iniciar o fluxo.

![Chaves](/img/integracoes/33.png)

---

## 2.1 Configurando um Novo Webhook de Saída

Para que a Mentorfy notifique seus sistemas externos sobre eventos que acontecem na plataforma, clique em + Novo Webhook na aba Saída. O modal "Novo Webhook" será aberto para configuração:

![Chaves](/img/integracoes/novo.png)

Campos de Configuração:

Nome: Dê um nome claro para sua organização (ex: "Envio para o CRM" ou "Automação ActiveCampaign").

URL do Webhook: Insira o endereço de destino (endpoint) que deve receber as notificações.

Eventos Disponíveis (Gatilhos): Você pode selecionar um ou mais eventos que dispararão este webhook automaticamente:


Organização: Turma Atribuída, Turma Removida.

Headers Customizados (Opcional):

Esta seção permite adicionar chaves e valores personalizados ao cabeçalho (header) da requisição HTTP.

É ideal para enviar tokens de autenticação ou chaves de segurança exigidas pelo sistema que vai receber os dados.

Após preencher as informações e selecionar os eventos desejados, clique em Criar para ativar o webhook.

---

## 3. Chaves: Segurança e URL Global

A aba **Chaves** centraliza as informações de segurança necessárias para suas integrações.

### URL de Webhook Principal
Esta é a URL básica da sua conta para receber notificações, válida para todos os gateways de pagamento. Ela é exibida no topo da página.

> **Recomendação**: Para melhor organização e rastreamento, utilize as URLs personalizadas criadas na aba **Entrada** em vez da URL global.

### Chaves de Segurança
Você pode adicionar Tokens (secrets) para validar se o webhook recebido é realmente legítimo (disparado pelo seu gateway de pagamento), aumentando a segurança da sua integração.

Adicione chaves clicando em **+ Adicionar Chave**.

---

![Logs](/img/integracoes/04-logs.png)

## 4. Logs: Monitoramento de Eventos

A aba **Logs** é fundamental para o monitoramento e diagnóstico de problemas, exibindo um histórico de todas as chamadas de webhooks (tanto de Entrada quanto de Saída).

![Logs](/img/integracoes/03-chaves.png)


Você pode monitorar:

- **Status das Chamadas**: Visão geral de Total de Eventos, Sucesso e Falhas.
- **Distribuição de Eventos**: Gráfico de eventos por dia (últimos 7 dias).
- **Logs de Eventos**: Tabela detalhada onde é possível pesquisar e filtrar as chamadas por e-mail, status (**Sucesso** ou **Falha**) e período.