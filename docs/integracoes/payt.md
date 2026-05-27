---
sidebar_position: 3
---

# Payt

Siga este passo a passo para integrar seu fluxo de vendas ao fluxo de entrega Mentorfy usando a Payt.

Antes de configurar o webhook, crie uma **URL de Entrada** na Mentorfy. Essa URL define quais produtos, categorias ou turmas serão liberados quando a Payt confirmar uma compra.

1. Na Mentorfy, acesse **Integrações > Entrada** e clique em **+ Nova URL**.

2. Preencha a URL com um nome descritivo, selecione **Payt** como gateway de pagamento e escolha os produtos e/ou categorias que devem ser liberados. Depois, clique em **Criar** e copie a URL gerada.

:::tip
Veja o passo a passo completo em [Como criar uma URL de Entrada](/docs/integracoes/intro#como-criar-uma-nova-url-de-entrada).
:::

3. Entre na sua conta
```
Navegue até Ferramentas > Postbacks.
```
<img src="/docs/img/payt_postbacks.jpg" height="500" alt="chave da API"  /> 
<br/>

4. Procure pelo botão **+ Cadastrar Webhook**.

<img src="/docs/img/payt_cadastrar.jpg" height="200" alt="chave da API" /> 
<br/>

5. Preencha o formulário usando suas informações seguindo esse exemplo, com a **URL de Entrada** que você copiou da Mentorfy:

<img src="/docs/img/payt_form1.jpg" alt="chave da API" />
<br/>
<br/>

6. Clique em **Salvar** e pronto!

## Testando a integração

Após configurar o webhook na Payt e na Mentorfy:

1. Faça uma venda de teste no Payt.
2. Verifique se o evento é recebido corretamente na Mentorfy.
3. Confirme se o cliente aparece na jornada e na lista de clientes da Mentorfy.

<br/>
<br/>

## Conclusão

Ao finalizar esses passos, a integração estará completa e você poderá ver seus clientes na jornada e em sua lista de clientes na Mentorfy.

Em caso de dúvida, entre em contato com nosso suporte pelo chat na plataforma ou pelo e-mail contato@mentorfy.io
