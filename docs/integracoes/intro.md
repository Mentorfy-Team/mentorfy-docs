---
sidebar_position: 0
---

# Integrações

A área de Integrações permite configurar webhooks e conexões com plataformas externas. As configurações estão organizadas nas abas: **Entrada, Saída, Automações, Chaves, Widgets e Logs**.

---

## **Entrada — URLs de Entrada**

As URLs de Entrada são utilizadas para receber webhooks de gateways de pagamento. Cada URL gerada aqui libera automaticamente o acesso do aluno ao produto correspondente quando uma compra é confirmada na plataforma de origem.

### **Como criar uma nova URL de Entrada**

Clique em **"+ Nova URL"** no canto superior direito. Um formulário será exibido com os seguintes campos:

![Nova URL de Entrada](/img/integracoes/intro-1.png)

**Nome: Identifique** a integração com um nome descritivo.

* Exemplo: *Curso de Marketing \- Hotmart*

**Gateway de Pagamento:** Selecione a plataforma de origem da venda. Gateways disponíveis incluem: Hotmart, Cakto, Voomp, Kiwify, Stripe, XGrow, entre outros.

**Slug (identificador na URL):** Gerado automaticamente a partir do nome, mas pode ser personalizado.

* Utilize apenas letras minúsculas, números e hífens  
* Exemplo: *curso-marketing-hotmart*

**Duração do Acesso (dias):** Campo opcional. Se preenchido, define por quantos dias o aluno terá acesso ao produto após a compra, sobrescrevendo a expiração padrão configurada no produto.

* Exemplo: *30*

**Produtos a Liberar:** Selecione quais produtos serão liberados automaticamente quando o webhook for recebido. Use o campo de busca para localizar rapidamente.

**Categorias a Liberar:** Selecione quais categorias de produtos serão liberadas. Também possui campo de busca.

Após preencher, clique em **"Criar"** para gerar a URL.

![URL de Entrada criada](/img/integracoes/intro-2.png)

### **Gerenciando URLs existentes**

Cada URL cadastrada exibe o nome, o status (**Ativo**), o endpoint gerado e a quantidade de produtos, categorias e turmas vinculadas.

As ações disponíveis para cada URL são:

* **Copiar** — copia o endpoint para a área de transferência  
* **Desativar** — suspende temporariamente a integração  
* **Editar** — altera as configurações da URL  
* **Excluir** — remove a integração permanentemente

![Gerenciando URLs de Entrada](/img/integracoes/intro-3.png)

---

## **Saída — Webhooks de Saída**

Os Webhooks de Saída disparam notificações automaticamente para URLs externas sempre que eventos específicos acontecerem na plataforma. Utilize esta funcionalidade para integrar a Mentorfy com ferramentas como CRMs, automações (n8n, Make, Zapier) e outros sistemas.

### **Como criar um novo Webhook de Saída**

Clique em **"+ Novo Webhook"** no canto superior direito. O formulário exibe os seguintes campos:

![Novo Webhook de Saída](/img/integracoes/intro-4.png)

**Nome: Identifique** a integração com um nome descritivo.

* Exemplo: *Integração CRM*

**URL do Webhook:** Insira a URL de destino que receberá as notificações.

* Exemplo: *https://exemplo.com/webhook*

**Eventos:** Selecione quais eventos irão disparar o webhook. Os eventos disponíveis são:

| Evento | Descrição |
| ----- | ----- |
| **Aluno Cadastrado** | Novo aluno se cadastra na plataforma |
| **Primeiro Acesso** | Aluno acessa pela primeira vez |
| **Progresso Atualizado** | Aluno avança no conteúdo |
| **Certificado Emitido** | Certificado é gerado para o aluno |
| **Cliente Atualizado** | Dados do cliente são alterados |
| **Produto Liberado** | Acesso a um produto é liberado |
| **Acesso Revogado** | Acesso a um produto é removido |
| **Conteúdo Concluído** | Aluno conclui um conteúdo |
| **Turma Atribuída** | Aluno é adicionado a uma turma |
| **Pagamento Confirmado** | Pagamento é confirmado |
| **Acesso Expirado** | Acesso ao produto expira |
| **Acesso Estendido** | Acesso ao produto é prorrogado |
| **Turma Removida** | Aluno é removido de uma turma |

Você pode selecionar múltiplos eventos para um mesmo webhook.

**Headers Customizados (opcional):** Adicione cabeçalhos personalizados à requisição, informando a **Chave** e o **Valor** e clicando em **"Adicionar"**. Útil para autenticação em APIs externas.

Após preencher, clique em **"Criar"** para salvar o webhook.

![Webhook de Saída configurado](/img/integracoes/intro-5.png)

### **Gerenciando Webhooks existentes**

Cada webhook cadastrado exibe o nome, status (**Ativo**), a URL de destino e a quantidade de eventos vinculados.

As ações disponíveis são:

* **Desativar** — suspende temporariamente o disparo do webhook  
* **Editar** — altera as configurações  
* **Excluir** — remove o webhook permanentemente

---

## **Automações (Experimental)**

As Automações permitem criar fluxos visuais para executar ações automaticamente com base em eventos da plataforma. Com elas, você elimina tarefas manuais e garante que as ações certas aconteçam no momento certo.

### **Como criar uma nova Automação**

Clique em **"+ Nova Automação"** no canto superior direito. O editor visual será aberto com os seguintes campos e componentes:

**Nome da Automação:** Dê um nome descritivo para identificar o fluxo.

* Exemplo: *Atribuir turma por produto*

**Descrição (opcional):** Adicione uma descrição breve para documentar o objetivo da automação.

![Nova Automação](/img/integracoes/intro-6.png)

### **Estrutura do fluxo**

Cada automação é composta por três tipos de nós conectados em sequência:

**1\. Gatilho:** Clique no nó **GATILHO** para configurar o evento de origem. No campo "Quando acontecer", selecione um dos eventos disponíveis:

| Evento | Descrição |
| ----- | ----- |
| Acesso Expirado | Acesso do aluno ao produto expira |
| Progresso Atualizado | Aluno avança no conteúdo |
| Conteúdo Concluído | Aluno conclui um conteúdo |
| Produto Concluído | Aluno conclui um produto inteiro |
| Acesso Estendido | Acesso ao produto é prorrogado |
| Certificado Emitido | Certificado é gerado para o aluno |

*Produto específico (opcional)* Selecione um produto para restringir o gatilho. Se deixado como "Qualquer produto", a automação disparará para todos os produtos quando o evento ocorrer.

**2\. Condição (opcional):** Filtra quando a automação deve ou não ser executada. Clique no nó **CONDIÇÃO** para configurar a regra de filtragem.

Campos disponíveis para verificar:

* ID do Produto  
* Título do Produto  
* Email do Cliente  
* Nome do Cliente  
* Tipo do Evento

Operadores disponíveis:

* É igual a / É diferente de  
* Contém / Não contém  
* É maior que / É menor que  
* Está vazio / Não está vazio

A condição será avaliada quando o evento disparar. Se verdadeira, as ações conectadas ao **SIM** serão executadas. Se falsa, o fluxo seguirá o caminho **NÃO**.

![Condição no fluxo](/img/integracoes/intro-7.png)

**3\. Ação:** Define o que será feito quando o gatilho disparar e a condição for atendida. Clique no nó **AÇÃO** para selecionar a ação a ser executada.

| Tipo de Ação | Descrição |
| ----- | ----- |
| Liberar Produto | O cliente receberá acesso ao produto selecionado quando a automação executar |
| Atribuir Turma | O cliente será adicionado automaticamente a uma turma |
| Remover da Turma | O cliente será removido de uma turma automaticamente |
| Enviar Webhook | Dispara uma notificação para uma URL externa |
| Enviar Email | Envia um e-mail automático para o cliente |

Após selecionar o tipo de ação, configure os parâmetros correspondentes no painel lateral, como o produto a liberar, a turma a atribuir ou a URL do webhook de destino.

![Ação no fluxo](/img/integracoes/intro-8.png)

### **Adicionando mais nós ao fluxo**

No painel lateral, utilize os botões:

* **Condição** — adiciona um novo nó de condição ao fluxo  
* **Ação** — adiciona um novo nó de ação ao fluxo

Você pode encadear múltiplos nós para criar automações mais complexas.

**Caso de uso: Liberação Sequencial de Mentorias** ✨

A liberação sequencial permite controlar automaticamente a ordem de acesso às mentorias. O aluno só recebe acesso à próxima mentoria após concluir a anterior. A lógica é a mesma da liberação progressiva de módulos dentro de um produto, mas aplicada entre mentorias completas.

*Como configurar:*

**Passo 1 — Crie a automação** Em Integrações → Automações, clique em "+ Nova Automação" e dê um nome descritivo, como "Liberação sequencial".

**Passo 2 — Configure o gatilho** No campo "Quando acontecer", selecione **Produto Concluído**. Em "Produto específico", selecione a mentoria que o aluno precisa concluir antes de avançar.

**Passo 3 — Configure a ação** Adicione um nó de Ação e selecione o tipo **Liberar Produto**. Em seguida, escolha qual será o próximo produto liberado automaticamente.

![Exemplo de liberação sequencial](/img/integracoes/intro-8.png)

**Passo 4 — Salve e ative** Clique em "Criar Automação". A automação será ativada imediatamente. Para pausar sem perder a configuração, basta desativá-la pelo toggle na lista de automações.

💡 Repita o processo para cada etapa da sequência. Exemplo: Mentoria A → conclui → libera Mentoria B → conclui → libera Mentoria C.

### **Gerenciando Automações existentes**

Cada automação cadastrada exibe o nome, status (**Ativo**), o gatilho configurado, o destino da ação e a quantidade de ações vinculadas.

As ações disponíveis são:

* **Desativar** — suspende temporariamente a automação  
* **Editar** — abre o editor visual para alterações  
* **Excluir** — remove a automação permanentemente

Após configurar o fluxo, clique em **"Criar Automação"** para salvar.

---

## **Chaves — Chaves de Segurança**

As Chaves de Segurança são tokens utilizados para validar a autenticidade dos webhooks recebidos dos gateways de pagamento, garantindo que apenas requisições legítimas sejam processadas pela plataforma.

![Chaves de Segurança](/img/integracoes/intro-9.png)

### **Como integrar com gateways de pagamento**

No topo da página, você encontra a **URL do webhook** da sua conta na Mentorfy. Essa é a URL que deve ser cadastrada no seu gateway de pagamento para que ele envie as notificações corretamente.

Clique no ícone de copiar ao lado da URL para copiá-la rapidamente.

A plataforma também oferece links de instrução específicos para cada gateway. Clique no nome da plataforma desejada para acessar o passo a passo de configuração: Hotmart, Kiwify, Eduzz, Stripe, Asaas, Greenn, Hubla, Cakto, Kirvano, Pagar.me, Payt, Herospark, DM Guru, Xgrow e Voomp.

### **Como criar uma Nova Chave de Segurança**

Clique em **"+ Nova Chave"** no canto superior direito. O formulário exibe os seguintes campos:

![Nova Chave](/img/integracoes/intro-10.png)

**Plataforma:** Selecione o gateway de pagamento ao qual a chave será vinculada. Plataformas disponíveis: Hotmart, Kiwify, Eduzz, Greenn, HeroSpark, PerfectPay, Kirvano, Cakto, Hubla, Asaas, Pagar.me, Payt, Voomp, Xgrow e Stripe.

**Chave Secreta:** Cole o token fornecido pelo gateway de pagamento no campo indicado. Caso o gateway não forneça um token, clique no ícone de atualizar para **gerar uma chave aleatória** automaticamente.

Após preencher, clique em **"Criar"** para salvar a chave.

### **Gerenciando Chaves existentes**

Cada chave cadastrada exibe o nome da plataforma, a data de criação e o token parcialmente ocultado para segurança.

As ações disponíveis são:

* **Visualizar** — exibe o token completo temporariamente  
* **Copiar** — copia o token para a área de transferência  
* **Editar** — altera as configurações da chave  
* **Excluir** — remove a chave permanentemente

---

## **Widgets — Códigos Embedados**

A aba Widgets permite adicionar scripts e códigos externos que serão carregados na área do aluno. Use para integrar ferramentas como chat de atendimento, pixels de rastreamento, widgets de analytics e muito mais.

![Lista de Chaves](/img/integracoes/intro-11.png)

### **Como adicionar um novo código**

Clique em **"+ Novo Código"** ou **"+ Adicionar código"**. O formulário exibe os seguintes campos:

**Nome do Widget:** Identifique o código com um nome descritivo.

* Exemplos: *Chat Intercom, Google Analytics, Pixel Facebook*

**Tipo:** Selecione o tipo de código a ser inserido:

* **Script** — código JavaScript a ser executado na página  
* **HTML/Widget** — código HTML para incorporar elementos visuais ou widgets externos

**Posição:** Define onde o código será injetado no HTML da página:

* **Head (antes do `</head>`)** — indicado para pixels e scripts de rastreamento  
* **Body Início (após `<body>`)** — carrega logo no início do corpo da página  
* **Body Final (antes do `</body>`)** — posição padrão e recomendada para a maioria dos scripts

**Código:** Cole o código no campo indicado.

Você pode colar o código JavaScript puro ou com as tags `<script>`. As tags serão removidas automaticamente.

**Escopo**

* **Global (toda área do aluno)** — carregado em todas as páginas  
* **Por Produto (produtos específicos)** — carregado apenas nas páginas dos produtos selecionados

**Apenas usuários autenticados**

* **Ativado** (padrão): carrega apenas após o login  
* **Desativado**: carrega desde a tela de login

**Nota:** Códigos embedados precisam ser aprovados antes de serem carregados na área do aluno.

Após preencher, clique em **"Criar"** para salvar.

![Widgets](/img/integracoes/intro-12.png)

---

## **Logs — Logs de Eventos**

A aba Logs oferece visibilidade completa sobre todos os eventos processados pelas integrações, permitindo monitorar sucessos, falhas e o status em tempo real da fila de webhooks.

![Logs](/img/integracoes/intro-13.png)

### **Fila de Webhooks**

Painel de status em tempo real da fila de processamento:

| Indicador | Descrição |
| ----- | ----- |
| **Aguardando** | Eventos na fila aguardando processamento |
| **Processando** | Eventos sendo processados no momento |
| **Atrasados** | Eventos com atraso no processamento |
| **Concluídos** | Eventos processados com sucesso |
| **Falhas** | Eventos que falharam no processamento |

Quando um novo evento é recebido, o modo ao vivo é ativado automaticamente.

### **Resumo de desempenho**

| Indicador | Descrição |
| ----- | ----- |
| **Eventos** | Total de eventos processados no período |
| **Sucesso** | Quantidade e percentual de eventos bem-sucedidos |
| **Falhas** | Quantidade de eventos que falharam |
| **Tempo Médio** | Tempo médio de resposta em milissegundos |

### **Eventos por Dia**

Gráfico que exibe a distribuição de eventos nos últimos 30 dias, com linhas separadas para **Falha** e **Sucesso**. Use o seletor no canto superior direito para ajustar o período visualizado.

### **Logs de Eventos**

Tabela detalhada com o histórico de todos os eventos disparados:

| Coluna | Descrição |
| ----- | ----- |
| **Data** | Data e hora do evento |
| **Evento** | Tipo do evento disparado |
| **Direção** | Entrada ou Saída |
| **Cliente** | E-mail do cliente relacionado ao evento |
| **Status** | Sucesso ou Falha |
| **Tempo** | Tempo de resposta em milissegundos |
| **Webhook** | Nome da integração que processou o evento |

**Filtros disponíveis:**

* **Pesquisar por e-mail** — localiza eventos de um cliente específico  
* **Filtro de tipo** — filtra por tipo de evento  
* **Filtro de status** — filtra por integração específica

Clique em qualquer linha da tabela para expandir os detalhes do evento. Clique no ícone de atualizar no canto superior direito para recarregar os logs manualmente.

