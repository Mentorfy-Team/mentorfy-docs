---
sidebar_position: 6
---

# Turmas

A área de Turmas permite criar e gerenciar turmas de forma centralizada, independente dos produtos. Uma mesma turma pode ser vinculada a múltiplos produtos, e cada turma pode ter seu próprio webhook de integração.

---

## Visão geral

A tela principal exibe todas as turmas criadas. Cada card mostra:

- Nome e descrição da turma
- Produtos vinculados
- Quantidade de alunos atribuídos
- Botão **Ver alunos** para consultar os membros

![Visão geral de turmas](/img/vitrine/turmas/turmas-1.png)

---

## Criar uma nova turma

Clique em **"+ Nova Turma"** no canto superior direito. O processo é dividido em 2 passos.

### Passo 1 - Dados e Produtos

Preencha os campos:

| Campo | Descrição |
| ----- | ----- |
| Nome | Nome de identificação da turma |
| Descrição | Descrição opcional da turma |
| Data de expiração | Data de expiração do acesso da turma (dd/mm/aaaa) |

Depois, em **Produtos vinculados**, selecione os produtos associados à turma.

![Criar turma - dados e produtos](/img/vitrine/turmas/turmas-2.png)

### Passo 2 - Alunos

Busque e selecione os alunos que participarão da turma:

- Use **Buscar aluno** (nome ou e-mail)
- Use **Selecionar todos** para inclusão em massa
- Use **Limpar seleção** para desfazer
- Se houver mais de um produto vinculado, altere o produto no seletor para vincular alunos por produto

Clique em **Concluir** para salvar. Se preferir, use **Pular por enquanto** para configurar os alunos depois.

![Criar turma - alunos](/img/vitrine/turmas/turmas-3.png)

---

## Gerenciar turma

Ao lado de cada turma na lista, ficam disponíveis:

- **Editar** (lápis): altera dados, produtos e alunos
- **Gerenciar**: abre a lista de alunos da turma
- **Excluir** (lixeira): remove a turma permanentemente
- **Ver alunos**: exibe a lista com nome e e-mail

![Gerenciar turma](/img/vitrine/turmas/turmas-4.png)

---

## Dica: integração por turma

Cada turma pode ter webhook próprio em **Integrações > Entrada**.

Com isso, você consegue identificar de qual checkout ou campanha cada aluno veio no momento da compra, sem duplicar configurações entre produtos.

Essa funcionalidade é especialmente útil para mentores com múltiplos produtos e turmas diferentes por oferta ou campanha.
