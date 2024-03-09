---
sidebar_position: 1
---

# Digital Manager Guru

Siga esse passo a passo para integrar seu fluxo de vendas ao fluxo de entrega Mentorfy.

## Link Webhook

Acesse o seu produto que você deseja integrar:

```bash
Minhas mentorias > Mentoria Escolhida > Integrações
```
Copie o link e salve ele, iremos usar logo em seguida. Ele irá parecer com esse:

```bash
https://app.mentorfy.io/api/webhooks/codigo123
```

## Plataforma Digital Manager Guru

Acesse a plataforma da herospark
<!-- "background-color: #f6f8fa; padding: 16px; font-family: monospace; border-radius: 6px;" -->
<div style={{ backgroundColor: '#f6f8fa', padding: '16px', fontFamily: 'monospace', borderRadius: '6px' }}>
  <a href="https://digitalmanager.guru/admin/auth/login" target="_blank">https://digitalmanager.guru/admin/auth/login</a>
</div>
<br/>
1- Vá até a página **Configurações** e escolha a opção **Webhooks**:
<div style={{ backgroundColor: '#f6f8fa', padding: '16px', fontFamily: 'monospace', borderRadius: '6px' }}>
  <a href="https://digitalmanager.guru/admin/settings/webhooks" target="_blank">https://digitalmanager.guru/admin/settings/webhooks</a>
</div>

<br/>

2- Aqui você tem duas opções, produto de **Assinaturas** ou produto de **Vendas**(Não recorrente).
A Mentorfy cobre os dois casos, então escolha o que melhor se encaixa para você.
Caso opte por assinatura, a Mentorfy irá gerenciar o acesso do cliente e suas renovações ou cancelamentos.
<img src="/docs/img/digitalguru_webhooks.jpg" alt="Gerar Webhook" width="350" />
<br/>

3- Após a escolha, no botão de três pontinhos e escolha a opção **Adicionar**:
<img src="/docs/img/digitalguru_adicionar.jpg" alt="Nome Adequado Webhook" width="350" />
<br/>
<br/>

4- Dê um nome adequado para seu webhook e cole o link que você copiou no início desse tutorial.
```
Mentoria Escolhida - Pagamento Confirmado | Mentorfy
```
<img src="/docs/img/digitalguru_webhook_url.jpg" alt="Configuração do Link POST" width="350" />
<br/>
<br/>

5- Em **STATUS** marque todas as opções.
<img src="/docs/img/digitalguru_webhook_status.jpg" alt="Seleção de Produto" width="350" />
<br/>
<br/>

6- Escolha qual produto você irá integrar, confira se o **Ativo** está marcado e clique em **Enviar**.
<img src="/docs/img/digitalguru_webhook_product.jpg" alt="Herospark Header Body" width="350" />
<br/>
<br/>


## Conclusão

Ao finalizar esses passos, a integração estará completa e você poderá ver seus clientes na jornada e
em sua lista de clientes na Mentorfy.

Em caso de dúvida, entre em contato com nosso suporte pelo chat na plataforma ou pelo e-mail contato@mentorfy.io