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

Acesse a plataforma do Digital Manager Guru:
<div style={{ backgroundColor: '#f6f8fa', padding: '16px', fontFamily: 'monospace', borderRadius: '6px' }}>
  <a href="https://digitalmanager.guru/admin/auth/login" target="_blank">https://digitalmanager.guru/admin/auth/login</a>
</div>
<br/>

1- Vá até a página **Configurações** e escolha a opção **Webhooks**:
<div style={{ backgroundColor: '#f6f8fa', padding: '16px', fontFamily: 'monospace', borderRadius: '6px' }}>
  <a href="https://digitalmanager.guru/admin/settings/webhooks" target="_blank">https://digitalmanager.guru/admin/settings/webhooks</a>
</div>

<img src="/img/integracoes/guru1.png" alt="Menu Configurações - Webhooks" width="600" />
<br/>
<br/>

2- Na página de Webhooks, você verá as opções **E-Tickets**, **Sales** e **Subscriptions**. Escolha a aba correspondente ao seu tipo de produto e clique em **+ Add Webhook**:

<img src="/img/integracoes/guru 2.png" alt="Página Webhooks - Add Webhook" width="600" />
<br/>
<br/>

3- No modal que abrir, preencha os campos:
- **Name**: Dê um nome adequado para seu webhook, por exemplo:
```
Mentoria Escolhida - Pagamento Confirmado | Mentorfy
```
- **URL**: Cole o link que você copiou no início desse tutorial
- **Status**: Selecione os status que deseja monitorar (recomendamos marcar todos)
- **Filter by**: Escolha se deseja filtrar por **All**, **Marketplaces** ou **Products**
- **Active**: Certifique-se de que está ativado

Clique em **Send** para salvar.

<img src="/img/integracoes/guru 3.png" alt="Modal Adicionar Webhook" width="450" />
<br/>
<br/>


## Conclusão

Ao finalizar esses passos, a integração estará completa e você poderá ver seus clientes na jornada e
em sua lista de clientes na Mentorfy.

Em caso de dúvida, entre em contato com nosso suporte pelo chat na plataforma ou pelo e-mail contato@mentorfy.io