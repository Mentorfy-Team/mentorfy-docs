---
sidebar_position: 6
---

# Hubla

Siga este passo a passo para integrar seu fluxo de vendas ao fluxo de entrega Mentorfy usando a Hubla.

Antes de configurar o webhook, precisamos **copiar o link fornecido pela Mentorfy** do produto que deseja integrar para salvar na Mentorfy.

1. Acesse o seu produto que deseja integrar:
```
Minhas mentorias > Mentoria Escolhida > Integrações
```

2. **Copie o link** fornecido pela Mentorfy, usaremos ele para configurar o webhook na Hubla. Ele se parecerá com:
```
https://app.mentorfy.io/api/webhooks/codigo123
```

## Configurando a plataforma Hubla

Acesse a sua conta na plataforma da Hubla, e no menu lateral, clique em **Integrações**.

Desça a tela até a seção **Automações**, clique em **Webhook**.

<br/>
<img src="/docs/img/hubla1.jpg" alt="config webhook" /> 
<br/>

Na página da Integração Webhook selecione a aba **Configurações**;

Clique no botão **Adicionar regra** localizado no canto superior direito da página.

<br/>
<img src="/docs/img/hubla2.jpg" alt="adicionar regra" /> 
<br/>

No formulário:
- Preencha um nome significativo para identificar sua nova regra.
- Informe a URL do seu produto, o link fornecido pela Mentorfy que você já copiou;
- Selecione os produtos específicos aos quais deseja associar essa regra.
- Marque os eventos desejados que serão responsáveis por acionar o webhook:
  - Pagamento da fatura realizado
  - Assinatura desativada
  - Assinatura cancelada

Como o link da Mentorfy é por produto, é necessário criar uma regra para cada produto.

<br/>
<img src="/docs/img/hubla3.jpg" alt="formulário para a regra" /> 
<br/>

Após seguir essas etapas, sua nova regra estará configurada e pronta para enviar automaticamente os dados dos eventos selecionados à URL especificada por você durante o processo de configuração do webhook.

## Testando a integração

Após configurar o webhook na Hubla:

1. Faça uma venda de teste na Hubla do produto que foi configurado.
2. Verifique se o evento é recebido corretamente na Mentorfy.
3. Confirme se o cliente aparece na jornada e na lista de clientes da Mentorfy.

## Conclusão

Ao finalizar esses passos, a integração estará completa e você poderá ver seus clientes na jornada e em sua lista de clientes na Mentorfy.

Em caso de dúvida, entre em contato com nosso suporte pelo chat na plataforma ou pelo e-mail: **contato@mentorfy.io**

