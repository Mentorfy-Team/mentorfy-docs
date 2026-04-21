---
sidebar_position: 8
---

# Stripe

Siga este passo a passo para integrar seu fluxo de vendas ao fluxo de entrega Mentorfy usando o Stripe. A Stripe não filtra para enviar eventos de produtos específicos, por isso, caso queria vender produtos diferentes e liberar acessos diferentes, será necessário uma configuração adicional para a mentorfy conseguir identificar as ofertas diferentes.



1. Acesse a página de Integrações:

Acesse o painel de Integrações neste link: [https://mentorfy.io/mentor/integracoes](https://mentorfy.io/mentor/integracoes)
<br/>

2. **Crie uma URL**, vamos preencher as informações básicas:
<img src="/docs/img/stripe_integracao_mentorfy.png" height="200" alt="chave da API"  />
<img src="/docs/img/stripe_integracao_mentorfy_2.png" height="200" alt="chave da API"  />
<br/>
<br/>
```
Vamos precisar preencher Nome, Gateway(Stripe) e produtos para liberar, os demais campos são opcionais.
Caso você queira vender multiplos produtos que dão acessos diferentes na mentorfy, será necessário adicionar os ID de Preço da Stripe (price_id). Ou seja, se for apenas liberar os mesmos produtos sempre, não é necessário.
```
2.1 **Opcional** em caso de liberações de produtos diferentes com ofertas diferentes
<img src="/docs/img/stripe_integracao_mentorfy_price.png" height="200" alt="chave da API"  />
<img src="/docs/img/stripe_integracao_mentorfy_price_copy.png" height="200" alt="chave da API"  />
<br/>
<br/>
```
Para conseguir os price_id você precisa acessar o seu produto na stripe, clicar em cima do preço e copiar o price_id.
Dessa forma quando uma venda acontecer poderemos associar aos produtos da mentorfy que serão liberados.
```

2.2 **Copie a URL criada**, usaremos ela lá na Stripe agora.
<img src="/docs/img/stripe_integracao_mentorfy_link.png" height="200" alt="chave da API"  />
<br/>
<br/>

3. Acesse o Dashboard do Stripe e navegue até **Developers (Desenvolvedores) > Webhooks**.

<img src="/docs/img/stripe-webhook.png" height="300" alt="chave da API"  />
<br/>
<br/>

4. Clique em **Add endpoint (Adicionar endpoint)**.

5. No campo **Endpoint URL**, cole o link que você copiou da Mentorfy.

6. Em **Select events to listen to (Selecione os eventos para ouvir)**, adicione os seguintes eventos:
   - `invoice.payment_succeeded`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`

7. Clique em **Add endpoint (Adicionar endpoint)** para salvar.

8. Pronto, sua integração está completa.

## Testando a integração

Após configurar o webhook no Stripe e na Mentorfy:

1. Faça uma venda de teste no Stripe (você pode usar o modo de teste do Stripe).
2. Verifique se o evento é recebido corretamente na Mentorfy.
3. Confirme se o cliente aparece na jornada e na lista de clientes da Mentorfy.

## Conclusão

Ao finalizar esses passos, a integração estará completa e você poderá ver seus clientes na jornada e em sua lista de clientes na Mentorfy.

Em caso de dúvida, entre em contato com nosso suporte pelo chat na plataforma ou pelo e-mail contato@mentorfy.io
