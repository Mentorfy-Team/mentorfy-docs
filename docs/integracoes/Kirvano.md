---
sidebar_position: 6
---

# Kirvano

Siga este passo a passo para integrar seu fluxo de vendas ao fluxo de entrega Mentorfy usando a Kirvano.

Antes de configurar o webhook, precisamos **copiar o link fornecido pela Mentorfy** do produto que deseja integrar para salvar na Mentorfy e **copiar o token secreto** que fica junto.

1. Acesse o seu produto que deseja integrar:
```
Minhas mentorias > Mentoria Escolhida > Integrações
```

2. **Copie o link** fornecido pela Mentorfy, usaremos ele para configurar o webhook na Kirvano. Ele se parecerá com:
```
https://app.mentorfy.io/api/webhooks/codigo123
```

3. Entre na sua conta
```
Navegue até Produtos > Adicionar Produto caso não tenha nenhum produto cadastrado.
```
<img src="/docs/img/kirvano_adicionar_produto.png" height="300" alt="chave da API"  /> 
<br/>
<br/>

4. Com o produto já criado, clique na aba **integrações** depois em **Webhooks**.

<img src="/docs/img/kirvano_webhook.png" height="400" alt="chave da API" /> 
<br/>
<br/>

5. Selecione a opção **Criar Webhook**.

<img src="/docs/img/kirvano_webook_criar.png" alt="chave da API" /> 
<br/>
<br/>

6. Preencha o formulário com as seguintes informações, **lembrando que o link deve ser o mesmo que você copiou da Mentorfy** e o produto que você criou na Kirvano. O token é o que copiamos no inicio. 

Aproveite e use o botão **Testar Integração** para confirmar que o link está certo.

<img src="/docs/img/kirvano_webhook_form.png" alt="chave da API" /> 
<br/>
<br/>

7. Selecione os eventos e Clique em criar.

<img src="/docs/img/kirvano_webhook_form2.png" alt="chave da API" /> 
<br/>
<br/>

8. Pronto sua integração está completa.

## Testando a integração

Após configurar o webhook na Kirvano e na Mentorfy:

1. Faça uma venda de teste no Kirvano.
2. Verifique se o evento é recebido corretamente na Mentorfy.
3. Confirme se o cliente aparece na jornada e na lista de clientes da Mentorfy.

## Conclusão

Ao finalizar esses passos, a integração estará completa e você poderá ver seus clientes na jornada e em sua lista de clientes na Mentorfy.

Em caso de dúvida, entre em contato com nosso suporte pelo chat na plataforma ou pelo e-mail contato@mentorfy.io