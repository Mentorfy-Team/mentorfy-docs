---
sidebar_position: 6
---

# Xgrow

Siga este passo a passo para integrar seu fluxo de vendas ao fluxo de entrega Mentorfy usando a Xgrow.

Antes de configurar o webhook, crie uma **URL de Entrada** na Mentorfy. Essa URL define quais produtos, categorias ou turmas serão liberados quando a Xgrow confirmar uma compra.

1. Na Mentorfy, acesse **Integrações > Entrada** e clique em **+ Nova URL**.

2. Preencha a URL com um nome descritivo, selecione **Xgrow** como gateway de pagamento e escolha os produtos e/ou categorias que devem ser liberados. Depois, clique em **Criar** e copie a URL gerada.

:::tip
Veja o passo a passo completo em [Como criar uma URL de Entrada](/docs/integracoes/intro#como-criar-uma-nova-url-de-entrada).
:::

## Configurando a plataforma Xgrow

3. Entre na sua conta Xgrow e acesse sua plataforma
```
Navegue até Recursos > Integrações > Nova integração.
```
<img src="/docs/img/Integração-Xgrow1.png" alt="cadastro de webhook"  /> 
<br/>
<br/>

4. Selecione a opção **Webhook**.

<img src="/docs/img/Integração-Xgrow2.png" alt="Integrações Disponíveis - Webhook" /> 
<br/>
<br/>

5. Preencha as informações conforme abaixo:

- Nome da integração: Identifição do produto o qual você fará as configurações
- URL do webhook: cole a **URL de Entrada** que você copiou da Mentorfy, conforme item 2 acima

<img src="/docs/img/Integração-Xgrow3.png" alt="cadastro da webhook" /> 
<br/>
<br/>
    
- Chave da Xgrow: é o código/token que você deve cadastrar na Mentorfy em **Integrações > Chaves**, vinculando à plataforma Xgrow. Depois de inserir a chave, salve a configuração.
<br/>
<img src="/docs/img/Integração-Xgrow7.png" alt="Inserir o token da Xgrow na Mentorfy" /> 
<br/>
<br/>
6. Após integração cadastrada com sucesso, entre em "visualizar ações". 

<img src="/docs/img/Integração-Xgrow4.png" alt="Integração cadastrada" /> 
<br/>
<br/>

7. No painel clique no canto direito em "Nova ação".
Na configuração da ação, você deverá preencher:
    - Nome da ação: sugerimos identificar com o nome do produto e o tipo de evento, conforme exemplo abaixo;
    - Produto: selecionar o produto que você está fazendo a integração (previamente cadastrado na Xgrow);
    - Evento: deve ser preenchida com a ação que será enviada para Mentorfy; é necessário uma ação com o evento "compra aprovada" e outra ação com o evento "compra estornada";
    - Planos: selecionar o plano que você está fazendo a integração;
    - ação: "Disparar wenhook"

<img src="/docs/img/Integração-Xgrow5.png" alt="configuração da ação" /> 
<br/>
<br/>

8. Pronto sua integração está completa. Repita todo processo a cada produto que você quiser integrar com o Xgrow.

<img src="/docs/img/Integração-Xgrow6.png" alt="webhook e ações finalizadas" /> 
<br/>
<br/>

## Conclusão

Ao finalizar esses passos, a integração estará completa e você poderá ver seus clientes na jornada e em sua lista de clientes na Mentorfy.

Em caso de dúvida, entre em contato com nosso suporte pelo chat na plataforma ou pelo e-mail contato@mentorfy.io

Para mais informações sobre webhooks no Xgrow, consulte a [documentação oficial](https://ajuda.xgrow.com/pt-br/article/integracao-webhooks-yzudqg/).
