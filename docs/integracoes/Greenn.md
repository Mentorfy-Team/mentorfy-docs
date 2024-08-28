---
sidebar_position: 2
---

# Greenn

Siga este passo a passo para integrar seu fluxo de vendas ao fluxo de entrega Mentorfy usando a Greenn.

Antes de configurar o webhook, precisamos **copiar o link fornecido pela Mentorfy** do produto que deseja integrar e **copiar a chave da API da Greenn** para salvar na Mentorfy.

1. Acesse o seu produto que deseja integrar:
```
Minhas mentorias > Mentoria Escolhida > Integrações
```

2. **Copie o link** fornecido pela Mentorfy, usaremos ele para configurar o webhook na Greenn. Ele se parecerá com:
```
https://app.mentorfy.io/api/webhooks/codigo123
```

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

7. Preencha o formulário com as seguintes informações, **lembrando que o link deve ser o mesmo que você copiou da Mentorfy**:

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