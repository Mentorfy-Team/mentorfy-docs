---
sidebar_position: 6
---

# Xgrow

Siga este passo a passo para integrar seu fluxo de vendas ao fluxo de entrega Mentorfy usando a Xgrow.

Antes de configurar o webhook, precisamos **copiar o link fornecido pela Mentorfy** do produto que deseja integrar e **copiar o token secreto** que fica junto.

1. Acesse o seu produto que deseja integrar:
```
Minhas mentorias > Mentoria Escolhida > Integrações
```

2. **Copie o link** fornecido pela Mentorfy, usaremos ele para configurar o webhook na Xgrow. Ele se parecerá com:
```
https://app.mentorfy.io/api/webhooks/codigo123
```

## Configurando a plataforma Xgrow

3. Entre na sua conta Xgrow e acesse sua plataforma
```
Navegue até Recursos > Integrações > Nova integração.
```
<img src="/static/docs/img/Integração-Xgrow1.png" alt="cadastro de webhook"  /> 
<br/>
<br/>

4. Selecione a opção **Webhook**.

<img src="/static/docs/img/Integração-Xgrow2.png" alt="Integrações Disponíveis - Webhook" /> 
<br/>
<br/>

5. Preencha as informações conforme abaixo:

- Nome da integração: Identifição do produto o qual você fará as configurações
- Url do webhook: **É o link que você copiou da Mentorfy** do seu produto, conforme item 2 acima

<img src="/static/docs/img/Integração-Xgrow3.png" alt="cadastro da webhook" /> 
<br/>
<br/>
    
- Chave da Xgrow: é o código/Token que você precisa copiar e inserir dentro da Mentorfy, na tela de integrações do produto que você está integrando. Não esqueça de salvar no canto superior direito da tela, após a inserção do código.
<br/>
<img src="/static/docs/img/Integração-Xgrow7.png" alt="Inserir o token da Xgrow na Mentorfy" /> 
<br/>
<br/>
6. Após integração cadastrada com sucesso, entre em "visualizar ações". 

<img src="/static/docs/img/Integração-Xgrow4.png" alt="Integração cadastrada" /> 
<br/>
<br/>

7. No painel clique no canto direito em "Nova ação".
Na configuração da ação, você deverá preencher:
    - Nome da ação: sugerimos identificar com o nome do produto e o tipo de evento, conforme exemplo abaixo;
    - Produto: selecionar o produto que você está fazendo a integração (previamente cadastrado na Xgrow);
    - Evento: deve ser preenchida com a ação que será enviada para Mentorfy; é necessário uma ação com o evento "compra aprovada" e outra ação com o evento "compra estornada";
    - Planos: selecionar o plano que você está fazendo a integração;
    - ação: "Disparar wenhook"

<img src="/static/docs/img/Integração-Xgrow5.png" alt="configuração da ação" /> 
<br/>
<br/>

8. Pronto sua integração está completa. Repita todo processo a cada produto que você quiser integrar com o Xgrow.

<img src="/static/docs/img/Integração-Xgrow6.png" alt="webhook e ações finalizadas" /> 
<br/>
<br/>

## Conclusão

Ao finalizar esses passos, a integração estará completa e você poderá ver seus clientes na jornada e em sua lista de clientes na Mentorfy.

Em caso de dúvida, entre em contato com nosso suporte pelo chat na plataforma ou pelo e-mail contato@mentorfy.io

Para mais informações sobre webhooks no Xgrow, consulte a [documentação oficial](https://ajuda.xgrow.com/pt-br/article/integracao-webhooks-yzudqg/).