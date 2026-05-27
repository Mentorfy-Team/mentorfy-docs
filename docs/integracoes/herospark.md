---
sidebar_position: 1
---

# Herospark

Siga esse passo a passo para integrar seu fluxo de vendas ao fluxo de entrega Mentorfy.

## Link Webhook

Antes de configurar o webhook na Herospark, crie uma **URL de Entrada** na Mentorfy. Essa URL define quais produtos, categorias ou turmas serão liberados quando a Herospark confirmar uma compra.

1. Na Mentorfy, acesse **Integrações > Entrada** e clique em **+ Nova URL**.
2. Preencha a URL com um nome descritivo, selecione **HeroSpark** como gateway de pagamento e escolha os produtos e/ou categorias que devem ser liberados.
3. Clique em **Criar** e copie a URL gerada.

:::tip
Veja o passo a passo completo em [Como criar uma URL de Entrada](/docs/integracoes/intro#como-criar-uma-nova-url-de-entrada).
:::

## Plataforma Herospark

Acesse a plataforma da herospark
<!-- "background-color: #f6f8fa; padding: 16px; font-family: monospace; border-radius: 6px;" -->
<div style={{ backgroundColor: '#f6f8fa', padding: '16px', fontFamily: 'monospace', borderRadius: '6px' }}>
  <a href="https://app.herospark.com/login" target="_blank">https://app.herospark.com/login</a>
</div>
<br/>
1- Vá até a página **Piloto automático** e escolha a opção **Usar modelo de automação**:

<img src="/docs/img/herospark_pagamento_confirmado.jpg" alt="Pagamento Confirmado" width="350" />

<br/>
<br/>

2- Escolha a opção **Gerar um Webhook**.
<img src="/docs/img/herospark_gerar_webhook.jpg" alt="Gerar Webhook" width="350" />
<br/>
<br/>

3- Dê um nome adequado para seu webhook
```
Produto Escolhido - Pagamento Confirmado | Mentorfy
```
<img src="/docs/img/herospark_nome_adequado.jpg" alt="Nome Adequado Webhook" width="350" />
<br/>
<br/>

4- Escolha o produto que está sendo vendo e será entregue pela Mentorfy.
<img src="/docs/img/herospark_selecao_produto.jpg" alt="Seleção de Produto" width="350" />
<br/>
<br/>

5- Cole a URL de Entrada que você copiou da Mentorfy e selecione o método **POST**.
<img src="/docs/img/herospark_link_post.jpg" alt="Configuração do Link POST" width="350" />
<br/>
<br/>

6- Clique em **Adicionar** Headers e adicione a chave **Content-Type** e o valor **application/json**.
Em seguida cole o código abaixo(sem espaços) em **Body**.
```json
{"name":"{{buyer_name}}","email":"{{buyer_email}}","phone":"{{buyer_phone}}","price":"{{ offer_price | divided_by: 100.00 }}","herospark": true}
```
<img src="/docs/img/herospark_header_body.jpg" alt="Herospark Header Body" width="350" />
<br/>
<br/>

7- **Ative** o webhook e clique em **Salvar edição**.
<img src="/docs/img/herospark_ativar_webhook.jpg" alt="Ativar Webhook" width="350" />
<br/>
<br/>



## Conclusão

Ao finalizar esses passos, a integração estará completa e você poderá ver seus clientes na jornada e
em sua lista de clientes na Mentorfy.

Em caso de dúvida, entre em contato com nosso suporte pelo chat na plataforma ou pelo e-mail contato@mentorfy.io
