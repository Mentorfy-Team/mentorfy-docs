---
sidebar_position: 6
---

# Cakto

Siga este passo a passo para integrar seu fluxo de vendas ao fluxo de entrega Mentorfy usando a Cakto.

Antes de configurar o webhook, crie uma **URL de Entrada** na Mentorfy. Essa URL define quais produtos, categorias ou turmas serão liberados quando a Cakto confirmar uma compra.

1. Na Mentorfy, acesse **Integrações > Entrada** e clique em **+ Nova URL**.

2. Preencha a URL com um nome descritivo, selecione **Cakto** como gateway de pagamento e escolha os produtos e/ou categorias que devem ser liberados. Depois, clique em **Criar** e copie a URL gerada.

:::tip
Veja o passo a passo completo em [Como criar uma URL de Entrada](/docs/integracoes/intro#como-criar-uma-nova-url-de-entrada).
:::

3. Entre na sua conta
```
Navegue até Produtos > Adicionar Produto caso não tenha nenhum produto cadastrado.
```
<img src="/docs/img/cakto_adicionar_produto.png" height="300" alt="chave da API"  /> 
<br/>
<br/>

4. Com o produto já criado, clique na aba **integrações** depois em **Webhooks**.

<img src="/docs/img/cakto_webhook.png" height="400" alt="chave da API" /> 
<br/>
<br/>

5. Selecione a opção **Adicionar**.

<img src="/docs/img/cakto_webhook_novo.png" alt="chave da API" /> 
<br/>
<br/>

6. Preencha o formulário com as informações solicitadas, usando a **URL de Entrada** que você copiou da Mentorfy e o produto que você criou na Cakto.

<img src="/docs/img/cakto-webhook-form.png" alt="chave da API" /> 
<br/>
<br/>

7. Clique em salvar e faça um teste usando a opção de envio de teste.

<img src="/docs/img/cakto-webhook-test.png" alt="chave da API" /> 
<br/>
<br/>

7. Se a mensagem de sucesso for mostrada é porque tudo já está certo e funcionando.

## Testando a integração

Após configurar o webhook na Cakto e na Mentorfy:

1. Faça uma venda de teste no Cakto.
2. Verifique se o evento é recebido corretamente na Mentorfy.
3. Confirme se o cliente aparece na jornada e na lista de clientes da Mentorfy.

## Conclusão

Ao finalizar esses passos, a integração estará completa e você poderá ver seus clientes na jornada e em sua lista de clientes na Mentorfy.

Em caso de dúvida, entre em contato com nosso suporte pelo chat na plataforma ou pelo e-mail contato@mentorfy.io
