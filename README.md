# Cifra de César
## 1. Prefácio

Cifrar significa codificar.
A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um tipo de cifra por substituição, em que cada letra do texto original é substituida por outra que se encontra há um número fixo de posições (chave de deslocamento) mpara a frente do mesmo alfabeto.

## 2. Interface

O produto permite que o usuário intercepte uma palavra que só ele e quem possuir a chave de deslocamento saberá qual é, tornandoa-a sigilosa. A interface fornece uma visualização clara e objetiva de como preencher cada campo requerido caso queira codificar ou decodificar uma palavra.
Para visualiza-la [clique aqui](https://marjoriesantos.github.io/SAP004-cipher/)

## 2.1 Getting Started

A primeira página faz uma apresentação ao usuário sobre o produto e como ele pode ser usado.

Para utilizar o produto, o usuário precisa preencher a primeira lacuna com o texto que pretende decifrar ou cifrar, a segunda lacula com o a chave de deslocamento (nº) e por último deve-se clicar em uma das opções ao final do container, assim o mesmo devolverá o resultado esperado. Caso contrário, se nenhum campo for preenchido, o programa não permite que o usuário continue a ação.


## 3. Processo
Foi feito um fluxograma para ajudar no entendimento do código e criado uma paleta de cores para ter um trabalho visual melhor

![Fluxograma do Projeto](src/assets/fluxograma.png)

![Cores utilizadas no processo](src/assets/cores.png)

## 3.1 Desenvolvimento 

Para esse projeto foram usados:
* CSS
* HTML
* Vanilla JavaScript

Para que o programa funcionasse foram criadas duas funções principais:

:pushpin: encode() esta função terá dois parâmetros: 
    - string: o texto que o usuário deseja cifrar
    - offset: a chave de deslocamento, que seria o nº de posições movidas para a direita no alfabeto
    
* decode() esta função terá dois parâmetros: 
    - string: o texto que o usuário deseja decifrar
    - offset: a chave de deslocamento, que seria o nº de posições movidas para a esquerda no alfabeto



## 3.2 Scripts
Os comandos necessário para executá-los são:

* npm install - 

* npm start -  executa os scripts que estiverem localizados no arquivo package.json, no caso o **"start"**, devolvendo assim o arquivo do servidor.

* npm test - procura pelo script  **test** dentro do package.json, executar o que estiver dentro dele e mostrar se os testes passaram ou não.

* npm deploy - publica uma versão do seu projeto no GitHub Pages.