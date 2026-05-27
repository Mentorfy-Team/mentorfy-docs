---
sidebar_position: 7
---

# Voomp

Siga este passo a passo para integrar seu fluxo de vendas ao fluxo de entrega Mentorfy usando a Voomp.

Antes de configurar o webhook, crie uma **URL de Entrada** na Mentorfy. Essa URL define quais produtos, categorias ou turmas serão liberados quando a Voomp confirmar uma compra.

1. Na Mentorfy, acesse **Integrações > Entrada** e clique em **+ Nova URL**.

2. Preencha a URL com um nome descritivo, selecione **Voomp** como gateway de pagamento e escolha os produtos e/ou categorias que devem ser liberados. Depois, clique em **Criar** e copie a URL gerada.

:::tip
Veja o passo a passo completo em [Como criar uma URL de Entrada](/docs/integracoes/intro#como-criar-uma-nova-url-de-entrada).
:::

## Configurando o Webhook na Voomp

1. Acesse o menu lateral na plataforma Voomp:

```
Dashboard > Integrações > Configurar integração do Webhook
```

<img src="/docs/img/voomp1.png" alt="Menu Webhook Voomp" />
<br/>

2. Na página de configuração do Webhook, você precisará:
   - Selecionar os produtos que deseja integrar
   - Informar a URL do Webhook: cole a **URL de Entrada** que você copiou da Mentorfy
   - Escolher as variáveis que deseja receber
   - Selecionar os eventos que você quer ser avisado

<img src="/docs/img/voomp2.png" alt="Configuração Webhook Voomp" />
<br/>

3. Configure as seguintes opções:

   - Em "Variáveis deseja receber", selecione:
     - Nome do comprador - "name"
     - E-mail do comprador - "email"
     - Status da assinatura - "status"

4. Em "Eventos", recomendamos ativar:

   - **Vendas**:

     - Venda paga

   - **Assinaturas**:

     - Assinatura não paga
     - Assinatura encerrada
     - Assinatura cancelada

5. Clique em "Salvar integração" para finalizar a configuração.

## Testando a integração

Após configurar o webhook na Voomp:

1. Faça uma venda de teste na Voomp do produto que foi configurado.
2. Verifique se o evento é recebido corretamente na Mentorfy.
3. Confirme se o cliente aparece na jornada e na lista de clientes da Mentorfy.

## Conclusão

Ao finalizar esses passos, a integração estará completa e você poderá ver seus clientes na jornada e em sua lista de clientes na Mentorfy.

Em caso de dúvida, entre em contato com nosso suporte pelo chat na plataforma ou pelo e-mail: **contato@mentorfy.io**
