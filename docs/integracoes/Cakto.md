---
sidebar_position: 6
---

# Cakto

Siga este passo a passo para integrar seu fluxo de vendas ao fluxo de entrega Mentorfy usando a Cakto.

Antes de configurar o webhook, precisamos **copiar o link fornecido pela Mentorfy** do produto que deseja integrar e **copiar a chave da API da Cakto** para salvar na Mentorfy.

1. Acesse o seu produto que deseja integrar:
```
Minhas mentorias > Mentoria Escolhida > Integrações
```

2. **Copie o link** fornecido pela Mentorfy, usaremos ele para configurar o webhook na Cakto. Ele se parecerá com:
```
https://app.mentorfy.io/api/webhooks/codigo123
```

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

6. Preencha o formulário com as seguintes informações, **lembrando que o link deve ser o mesmo que você copiou da Mentorfy** e o produto que você criou na cakto.

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