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

2- Na página de Webhooks, você verá as opções **Add webhook** clicque nele:

<img src="/img/integracoes/guru 2.png" alt="Página Webhooks - Add Webhook" width="600" />
<br/>
<br/>

3- No modal **Add Webhook**, configure os seguintes campos:

- **Name**: Dê um nome para identificar a integração (ex: "Mentorfy - Entrega de Curso")
- **URL**: Cole aqui a URL de Entrada que você gerou dentro da Mentorfy (na aba Integrações > Entrada)
- **Concurrent Requests**: Define o limite de requisições simultâneas (o padrão costuma ser 5)
- **Status**: Selecione quais status de venda devem disparar o aviso (ex: selecione "Aprovada/Paga" para liberar o acesso ao aluno)
- **Filter by**: Escolha **All** para enviar todas as vendas ou **Products** se quiser filtrar apenas produtos específicos
- **Active**: Certifique-se de que a chave está marcada como ativa (roxo)

<img src="/img/integracoes/guru 3.png" alt="Modal Adicionar Webhook" width="450" />
<br/>
<br/>

4- **Finalizar**: Clique em **Send** (ou Criar) para salvar a configuração. A partir de agora, sempre que uma venda atingir o status selecionado no Guru, a Mentorfy receberá o aviso e liberará o acesso automaticamente.

## Conclusão

Ao finalizar esses passos, a integração estará completa e você poderá testar.