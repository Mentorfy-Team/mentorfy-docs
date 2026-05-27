---
sidebar_position: 2
---

# Greenn

Siga este passo a passo para integrar seu fluxo de vendas ao fluxo de entrega Mentorfy usando a Greenn.

Antes de configurar o webhook, crie uma **URL de Entrada** na Mentorfy. Essa URL define quais produtos, categorias ou turmas serão liberados quando a Greenn confirmar uma compra.

1. Na Mentorfy, acesse **Integrações > Entrada** e clique em **+ Nova URL**.

2. Preencha a URL com um nome descritivo, selecione **Greenn** como gateway de pagamento e escolha os produtos e/ou categorias que devem ser liberados. Depois, clique em **Criar** e copie a URL gerada.

:::tip
Veja o passo a passo completo em [Como criar uma URL de Entrada](/docs/integracoes/intro#como-criar-uma-nova-url-de-entrada).
:::

3. Entre na sua conta
```
Navegue até Produtos > Editar Produto ou Criar Produto caso não tenha nenhum produto cadastrado.
```
<img src="/docs/img/greenn_produto.jpg" height="500" alt="chave da API"  /> 
<br/>
<br/>

4. Com o produto selecionado ou já criado, clique na aba **Conteúdo** depois em **Adicionar Conteúdo**.

<img src="/docs/img/greenn_produto_conteudo.jpg" height="200" alt="chave da API" /> 
<br/>
<br/>

5. Selecione a opção **Sistema externo**.

<img src="/docs/img/greenn_produto_conteudo_externo.jpg" alt="chave da API" /> 
<br/>
<br/>

6. Selecione a opção **Webhook**.

<img src="/docs/img/greenn_produto_conteudo_webhook.jpg" alt="chave da API" /> 
<br/>
<br/>

7. Preencha o formulário com as informações solicitadas, usando a **URL de Entrada** que você copiou da Mentorfy:

<img src="/docs/img/greenn_produto_conteudo_form.jpg" alt="chave da API" /> 
<br/>
<br/>

8. Clique em **Criar Liberação** e pronto!

## Testando a integração

Após configurar o webhook na Greenn e na Mentorfy:

1. Faça uma venda de teste no Greenn.
2. Verifique se o evento é recebido corretamente na Mentorfy.
3. Confirme se o cliente aparece na jornada e na lista de clientes da Mentorfy.

## Conclusão

Ao finalizar esses passos, a integração estará completa e você poderá ver seus clientes na jornada e em sua lista de clientes na Mentorfy.

Em caso de dúvida, entre em contato com nosso suporte pelo chat na plataforma ou pelo e-mail contato@mentorfy.io
