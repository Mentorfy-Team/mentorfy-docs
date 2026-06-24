---
sidebar_position: 11
---

# Pipedrive

A integração com a **Pipedrive** permite que negócios (*deals*) marcados como **Ganho** no seu CRM liberem automaticamente o acesso do cliente na Mentorfy. Assim que um negócio é fechado na Pipedrive, a Mentorfy cria o cliente e libera os produtos, categorias ou turmas configurados.

:::info Como funciona
A Pipedrive envia um webhook para a Mentorfy sempre que um negócio muda de status. O aviso de negócio traz apenas o identificador da pessoa vinculada (`person_id`), então a Mentorfy consulta a API da Pipedrive — usando o seu **API token** — para obter o e-mail, nome e telefone do cliente antes de liberar o acesso. Por isso, o API token é obrigatório nesta integração.
:::

:::info Pré-requisitos
- Conta ativa na Mentorfy com acesso a **Integrações**.
- Conta na Pipedrive com permissão para gerar **API token** e criar **webhooks**.
- Produtos (ou categorias/turmas) já cadastrados na Mentorfy para serem liberados.
:::

---

## 1. Criar uma URL de Entrada na Mentorfy

Antes de configurar o webhook na Pipedrive, crie uma **URL de Entrada** na Mentorfy. Essa URL define quais produtos, categorias ou turmas serão liberados quando a Pipedrive confirmar um negócio ganho.

1. Na Mentorfy, acesse **Integrações > Entrada** e clique em **+ Nova URL**.

2. Preencha os dados da URL:

- Em **Nome**, use algo fácil de identificar, como `Pipedrive - Nome do Produto`.
- Em **Gateway de Pagamento**, selecione **Pipedrive**.
- Em **Produtos a Liberar** e/ou **Categorias a Liberar**, selecione o acesso que deve ser liberado quando o negócio for ganho.

:::tip
Veja o passo a passo completo em [Como criar uma URL de Entrada](/docs/integracoes/intro#como-criar-uma-nova-url-de-entrada).
:::

3. Clique em **Criar** e depois use a ação **Copiar** para copiar a URL de Entrada gerada. Você vai usá-la ao criar o webhook na Pipedrive.

<img src="/docs/img/pipedrive_url_entrada.png" width="520" alt="Criação de uma URL de Entrada na Mentorfy com o gateway Pipedrive" decoding="async" loading="lazy" />

<br/>
<br/>

---

## 2. Gerar o API token na Pipedrive

A Mentorfy precisa do seu API token para buscar os dados da pessoa vinculada ao negócio.

1. Na Pipedrive, clique no seu avatar (canto superior direito) e acesse **Configurações da empresa > Preferências pessoais**.
2. Abra a aba **API** e copie o seu **token de API pessoal**.

<img src="/docs/img/pipedrive_api_token.png" width="520" alt="Tela de API da Pipedrive exibindo o token pessoal" decoding="async" loading="lazy" />

<br/>
<br/>

:::tip
Trate o API token como uma senha: ele dá acesso aos dados da sua conta Pipedrive. Não o compartilhe publicamente.
:::

---

## 3. Informar o API token na Mentorfy

Volte à URL de Entrada criada no passo 1 (use a ação **Editar**) e cole o **API token da Pipedrive** no campo de **chave/token de segurança**.

<img src="/docs/img/pipedrive_chave_mentorfy.png" width="520" alt="Campo de chave de segurança na URL de Entrada da Mentorfy" decoding="async" loading="lazy" />

<br/>
<br/>

:::tip
Você também pode cadastrar o token uma única vez na aba **Integrações > Chaves** e vinculá-lo à URL de Entrada, em vez de colá-lo diretamente na URL. Veja [Chaves de Segurança](/docs/integracoes/intro).
:::

Salve as alterações.

---

## 4. Criar o webhook na Pipedrive

Agora configure a Pipedrive para avisar a Mentorfy sempre que um negócio mudar de status.

1. Na Pipedrive, acesse **Configurações da empresa > Ferramentas e aplicativos > Webhooks**.
2. Clique em **Criar novo webhook**.

<img src="/docs/img/pipedrive_webhook_novo.png" width="520" alt="Botão de criar novo webhook na Pipedrive" decoding="async" loading="lazy" />

<br/>
<br/>

3. Preencha os dados do webhook:

- Em **Endpoint URL**, cole exatamente a **URL de Entrada** copiada da Mentorfy.
- Em **Event action**, selecione **change** (alteração). Para também capturar negócios já criados como ganhos, você pode usar **\*** (qualquer ação).
- Em **Event object**, selecione **deal** (negócio).
- Mantenha a versão **v2** do webhook.

<img src="/docs/img/pipedrive_webhook_form.png" width="520" alt="Formulário de criação de webhook da Pipedrive com URL e eventos" decoding="async" loading="lazy" />

<br/>
<br/>

:::info
A Mentorfy só age quando o negócio entra no status **Ganho** (libera o acesso) ou **Perdido/Excluído** (cancela o acesso). Demais alterações de negócio são recebidas e ignoradas automaticamente, então não é preciso filtrar eventos na Pipedrive.
:::

4. Clique em **Salvar** para ativar o webhook.

---

## Testando a integração

Após configurar o webhook na Pipedrive e a URL de Entrada na Mentorfy:

1. Na Pipedrive, mova um negócio de teste para o status **Ganho** (ou marque-o como ganho).
2. Verifique se o evento aparece em **Integrações > Logs** na Mentorfy.
3. Confirme se o cliente (a pessoa vinculada ao negócio) aparece na jornada e na lista de clientes da Mentorfy, com o acesso liberado.
4. Se o acesso não for liberado, confira:
   - se a **URL de Entrada** cadastrada na Pipedrive está correta;
   - se o **API token** informado na Mentorfy é válido;
   - se o negócio possui uma **pessoa vinculada com e-mail** na Pipedrive.

<img src="/docs/img/pipedrive_teste.png" width="520" alt="Logs de integração da Mentorfy exibindo o evento recebido da Pipedrive" decoding="async" loading="lazy" />

<br/>
<br/>

---

## Conclusão

Ao finalizar esses passos, sempre que um negócio for marcado como **Ganho** na Pipedrive, a Mentorfy criará o cliente e liberará o acesso automaticamente — e o revogará caso o negócio seja marcado como **Perdido** ou excluído.

Em caso de dúvida, entre em contato com nosso suporte pelo chat na plataforma ou pelo e-mail contato@mentorfy.io.
