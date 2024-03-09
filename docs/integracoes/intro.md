---
sidebar_position: 0
---

# Como funciona?

Cara plataforma de pagamento possui uma forma própria de integrar, isso porque cada plataforma
oferece informações diferentes e formatos diferentes.
Por isso a Mentorfy se adapta para cada uma das plataforma, para tornar os fluxos de venda e entrega
um único fluxo.

## Princípios

As plataforma de pagamentos possuem, em sua maioria, uma ferramenta chamada *Webhook*. Esse é responsável
por enviar notificações a Mentorfy quando ocorre eventos de compra.

Para configurar esses webhooks precisamos seguir alguns poucos passos, mas importentes para integrar corretamente.
Cada produto recebe um link para webhook. 
Você pode encontra-lo em: 
```bash
Minhas mentorias > Mentoria Escolhida > Integrações
```

## Token
Algumas plataforma exigem uma verificação de segurança para garantir que quem está enviando as notificações
de venda são realmente plataformas autorizadas. Para isso elas te fornecem um *Token*(pode ser chamado de Token API ou semelhante).
Esse token você deve salva-lo na Mentorfy em:
```bash
Minhas mentorias > Mentoria Escolhida > Integrações
```

Nas proximas etapas iremos ver algumas plataforma já autorizadas pela Mentorfy.