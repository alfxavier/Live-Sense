# Live-Sense

Live-Sense é um painel de monitoramento em tempo real desenvolvido para visualizar dados de sensores ambientais como temperatura, umidade e carga da bateria. Este projeto foi projetado para interagir com o FROST-Server e exibir dados de sensores conectados, permitindo monitoramento constante e alertas configuráveis.

## Funcionalidades

- Exibe em tempo real as leituras de temperatura, umidade e nível de bateria dos sensores.
- Atualização automática dos dados a cada 5 minutos, com a opção de atualização manual.
- Gráficos históricos das últimas leituras para análise de tendências e visualização de dados.
- Alertas visuais para condições críticas (alta temperatura, baixa umidade ou baixa carga da bateria).

## Tecnologias Utilizadas

- **HTML/CSS**: Interface e estilo do painel.
- **JavaScript**: Manipulação de dados e interação com o FROST-Server.
- **Chart.js**: Visualização de gráficos históricos.
- [**FROST-Server**](https://github.com/FraunhoferIOSB/FROST-Server): Back-end para armazenamento e consulta de dados dos sensores.

## Instalação e Configuração

### 1. Clone o Repositório

```bash
git clone https://github.com/alfxavier/Live-Sense.git
cd Live-Sense
```

### 2. Configuração do Servidor

- Certifique-se de ter o FROST-Server em execução.
- Modifique a URL do FROST-Server no arquivo `script.js` para o IP e porta do seu servidor:

  ```javascript
  const FROST_SERVER_URL = "http://seu-endereco:porta/FROST-Server/v1.0";
  ```

### 3. Servir o Projeto

- Abra o arquivo `index.html` em seu navegador, ou use um servidor HTTP local, como o Live Server do Visual Studio Code, para servir a aplicação e evitar problemas de CORS.

## Estrutura do Projeto

- **index.html**: Estrutura HTML e layout principal do painel.
- **styles.css**: Estilos e design visual da aplicação.
- **script.js**: Script principal, responsável por interagir com o FROST-Server e atualizar os dados na interface.
- **README.md**: Instruções e informações sobre o projeto.

## Como Usar

1. Abra o painel em seu navegador.
2. O painel exibirá as últimas leituras de temperatura, umidade e bateria dos sensores.
3. Clique no botão "Atualizar Agora" para forçar uma atualização dos dados.
4. Visualize as tendências e históricos das leituras no gráfico.

## Personalização

- **Intervalo de Atualização**: Por padrão, o painel atualiza a cada 5 minutos. Para alterar, modifique a constante `UPDATE_INTERVAL` no `script.js`.
- **Alertas**: Customize os valores críticos para alertas de temperatura, umidade e bateria no código JavaScript, dentro das funções `updateTemperature`, `updateHumidity` e `updateBattery`.

## Contribuindo

Contribuições são bem-vindas! Se você tiver sugestões de melhorias ou quiser adicionar novas funcionalidades, fique à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).

## Contato

Desenvolvido por [André Xavier](https://github.com/alfxavier). Entre em contato para dúvidas ou sugestões.
