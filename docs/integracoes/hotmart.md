---
sidebar_position: 2
---

# Hormart

Siga este passo a passo para integrar seu fluxo de vendas ao fluxo de entrega Mentorfy usando a Hormart.

Antes de configurar o webhook, precisamos **copiar o link fornecido pela Mentorfy** do produto que deseja integrar e **copiar a chave da API da Hormart** para salvar na Mentorfy.

1. Acesse o seu produto que deseja integrar:
```
Minhas mentorias > Mentoria Escolhida > Integrações
```

2. **Copie o link** fornecido pela Mentorfy, usaremos ele para configurar o webhook na Hormart. Ele se parecerá com:
```
https://app.mentorfy.io/api/webhooks/codigo123
```

3. Entre na sua conta
```
Navegue até Ferramentas > Webhooks.
```
<img src="/docs/img/hormart_webhooks.jpg" height="500" alt="chave da API"  /> 
<br/>
<br/>

4. Procure pelo botão **+ Cadastrar Webhook**.

<img src="/docs/img/hormart_cadastrar.jpg" height="200" alt="chave da API" /> 
<br/>
<br/>

5. Preencha o formulário com as seguintes informações, **lembrando que o link deve ser o mesmo que você copiou da Mentorfy**:

<img src="/docs/img/hormart_form.jpg" alt="chave da API" /> 
<br/>
<br/>

6. Nas opções para enviar, selecione essas opções:

<img src="/docs/img/hormart_form_opcoes.jpg" alt="chave da API" /> 
<br/>
<br/>

8. Clique em **Salvar** e pronto!

## Testando a integração

Após configurar o webhook na Hormart e na Mentorfy:

1. Faça uma venda de teste no Hormart.
2. Verifique se o evento é recebido corretamente na Mentorfy.
3. Confirme se o cliente aparece na jornada e na lista de clientes da Mentorfy.

<img src="/docs/img/hormart_webhooks_teste.jpg" alt="chave da API" /> 
<br/>
<br/>

## Conclusão

Ao finalizar esses passos, a integração estará completa e você poderá ver seus clientes na jornada e em sua lista de clientes na Mentorfy.

Em caso de dúvida, entre em contato com nosso suporte pelo chat na plataforma ou pelo e-mail contato@mentorfy.io