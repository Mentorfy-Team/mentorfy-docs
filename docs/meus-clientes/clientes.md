---
sidebar_position: 1
---

# Meus Clientes

A área **Meus Clientes** centraliza o gerenciamento de todos os seus mentorados, permitindo acompanhar a evolução, cadastrar novos alunos, importar listas e exportar dados.

---

## **Visão Geral**

No topo da página, quatro indicadores resumem o desempenho do período selecionado:

| Indicador | Descrição |
| ----- | ----- |
| **Novos Mentorados** | Quantidade de novos alunos cadastrados no período |
| **Interações** | Total de interações registradas |
| **Produtos Entregues** | Quantidade de produtos liberados para alunos |
| **Faturamento** | Valor total faturado no período |

Utilize o seletor no canto superior direito para alternar entre períodos (Este mês, últimos 30 dias, etc.).

---

## **Lista de Clientes**

A tabela exibe todos os clientes cadastrados com as seguintes colunas:

| Coluna | Descrição |
| ----- | ----- |
| **Cliente** | Nome e e-mail do aluno |
| **Contato** | Telefone via WhatsApp |
| **Email Status** | Status do e-mail (Entregue, Rejeitado, Adiado, Clicou, Sem info) |
| **Produtos** | Quantidade de produtos vinculados |
| **Origem** | Como o cliente foi cadastrado (Manual, Hotmart, Eduzz, etc.) |
| **Valor Pago** | Valor total pago pelo cliente |
| **Cadastro** | Data e hora do cadastro |

**Filtros disponíveis:**

* **Buscar por nome ou e-mail** — localiza um cliente específico  
* **Todos os Produtos** — filtra a lista por produto específico

---

## **Ações por Cliente**

Ao clicar nos **três pontos (...)** ao lado de qualquer cliente na lista, um menu de ações é exibido com as seguintes opções:

**Ações**

* **Ver Perfil** — acessa a página completa do cliente com seus dados e histórico  
* **Ver Jornada** — visualiza o progresso e a jornada de aprendizado do aluno

**Aquisições**

* **Adicionar Produto** — libera um novo produto para o cliente  
* **Remover Produto** — revoga o acesso a um produto específico

**Conta**

* **Logar como Aluno** — acessa a plataforma com a visão do aluno, sem precisar da senha dele  
* **Gerar nova senha** — gera uma nova senha automaticamente e envia para o e-mail do cliente  
* **Definir nova senha** — permite definir manualmente uma nova senha para o cliente  
* **Exigir troca de senha** — solicita que o cliente crie uma nova senha no próximo acesso

**Zona de Atenção**

* **Remover Cliente** — remove permanentemente o cliente da plataforma

Use a opção **"Logar como Aluno"** para verificar a experiência do aluno e identificar eventuais problemas de acesso ou navegação.

---

## **Cadastrar Cliente**

Clique em **"+ Cadastrar"** para adicionar um novo cliente manualmente. Preencha os seguintes campos:

**Email:** E-mail do cliente. Um link com detalhes de acesso será enviado para este endereço.

**Nome:** Nome completo do cliente.

**Telefone (opcional):** Número de contato no formato (00) 00000-0000.

**Expiração do Acesso (opcional):** Data em que o acesso do cliente irá expirar, no formato dd/mm/aaaa.

**Opções adicionais:**

* **Solicitar criação de senha no primeiro acesso** — o cliente receberá um link para criar sua própria senha  
* **Notificar usuário por email** — quando ativado, o aluno recebe notificação por e-mail ao ter acesso liberado. Se desativado, o acesso é concedido sem notificação  
* **Cadastrar Responsável** — ative caso haja um guardião ou responsável adicional vinculado ao aluno

**Selecione a trilha para atribuir** Escolha uma trilha de aprendizado para atribuir ao cliente. Se o usuário já tiver a trilha, nada acontecerá.

**Selecione o produto para atribuir** Escolha o produto que o cliente terá acesso. Se o aluno já tiver o produto, nada acontecerá.

Após preencher, clique em **"Criar Cliente"**.

![Cadastrar Cliente](/img/meus-clientes/clientes-1.png)

---

## **Importar Clientes**

Para cadastrar múltiplos clientes de uma vez, clique em **"Importar"**. O processo é dividido em 5 etapas:

**Etapa 1 — Envio** Faça o upload do arquivo CSV com a lista de clientes.

* Formato obrigatório: **.CSV**  
* Colunas obrigatórias: **Nome** e **E-mail**  
* Colunas opcionais: Telefone, Vencimento, Responsável  
* Tamanho máximo: **100MB**

Modelos de planilha disponíveis para download:

* **Modelo Simples**  
* **Com Expiração**  
* **Com Responsável**  
* **Com Membro de Time**

Clientes já cadastrados não serão duplicados — receberão os novos acessos. Responsáveis são os guardiões (pais, tutores) que acompanham o progresso.

![Importar Clientes - Upload](/img/meus-clientes/clientes-2.png)

**Etapa 2 — Revisão** A plataforma analisa o arquivo e exibe um resumo com: Total, Novos, Existentes e Erros. Verifique os dados e clique em **"Avançar"**.

**Etapa 3 — Configuração** Configure os acessos que serão atribuídos aos clientes importados:

* **Produtos ou Categorias** — selecione o que será liberado (alterne entre Produtos e Categorias pelo toggle)  
* **Data de expiração (opcional)** — define quando o acesso irá expirar. Clientes com expiração no CSV terão prioridade  
* **Membro de time (opcional)** — atribui os clientes importados diretamente a um membro do time

![Importar Clientes - Configuração](/img/meus-clientes/clientes-3.png)

**Etapa 4 — Confirmação** Revise o resumo final antes de iniciar:

* Novos clientes que serão criados com convite por e-mail  
* Clientes existentes que receberão novos acessos  
* Produtos/categorias atribuídos

Não feche a aba durante a importação. O processo pode levar alguns minutos para grandes volumes.

Clique em **"Iniciar importação"** para confirmar.

**Etapa 5 — Resultado: Ao final**, um relatório de importação exibe o resultado para cada cliente com status de **Sucesso** ou **Falha** e o motivo em caso de erro.

![Importar Clientes - Resultado](/img/meus-clientes/clientes-4.png)

---

## **Exportar Clientes**

Clique em **"Exportar"** para baixar os dados em CSV. Duas opções estão disponíveis:

* **Exportar Apenas Clientes** — exporta as informações básicas dos clientes  
* **Exportar Produtos Entregues** — exporta os produtos e seus clientes vinculados

---
