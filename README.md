# Cifra de César
## 1. Prefácio

Cifrar significa codificar.
A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um tipo de cifra por substituição, em que cada letra do texto original é substituida por outra que se encontra há um número fixo de posições (chave de deslocamento) mpara a frente do mesmo alfabeto.

## 2. Interface

O produto permite que um grupo de amigos intercepte mensagens de texto que só poderá ser compreendida por aqueles que possuirem a chave de deslocamento, tornandoa-a sigilosa. 

A interface possui duas páginas: uma de apresentação, onde será descrito como utilizar a ferramenta e outra para que a operação seja feita. Esta fornece uma visualização clara e objetiva de como preencher cada campo requerido caso queira codificar ou decodificar uma palavra.
Para visualiza-la [clique aqui](https://marjoriesantos.github.io/SAP004-cipher/) :arrow_left:

## 2.1 Getting Started

A primeira página faz uma apresentação ao usuário sobre o produto e como ele pode ser usado.

Para utilizar o produto, o usuário precisa preencher a primeira lacuna com o texto que pretende decifrar ou cifrar, a segunda lacula com o a chave de deslocamento (nº) e por último deve-se clicar em uma das opções ao final do container, assim o mesmo devolverá o resultado esperado. Caso contrário, se nenhum campo for preenchido, o programa não permite que o usuário continue a ação.


## 3. Processo
:memo: Foi feito um fluxograma para ajudar no entendimento do código e criado uma paleta de cores para ter um trabalho visual melhor

![Fluxograma do Projeto](src/assets/fluxograma.png)

![Cores utilizadas no layout](src/assets/cores.png)

## 3.1 Desenvolvimento 

Para esse projeto foram usados:
* CSS
* HTML
* Vanilla JavaScript

:pushpin: Para que o programa funcionasse foram criadas duas funções principais dentro do objeto cipher:

* encode() esta função terá dois parâmetros: 
    - string: o texto que o usuário deseja cifrar
    - offset: a chave de deslocamento, que seria o nº de posições movidas para a direita no alfabeto
    
* decode() esta função terá dois parâmetros: 
    - string: o texto que o usuário deseja decifrar
    - offset: a chave de deslocamento, que seria o nº de posições movidas para a esquerda no alfabeto
 


## 3.2 Scripts
:warning: Para usá-lo, você precisa instalar o node.js – visto que, eles são empacotados juntos.  :warning:

Os comandos necessários para executar o programa em sua máquina são:

* npm install - este irá auxiliar na instalação do projeto, no gerenciamento da versões e no gerenciamento de dependências necessárias para executa-lo.

* npm start -  executa os scripts que estiverem localizados no arquivo package.json, no caso o **"start"**, devolvendo assim o arquivo do servidor.

* npm test - procura pelo script  **test** dentro do package.json, executar o que estiver dentro dele e mostrar se os testes passaram ou não.

* npm deploy - publica uma versão do seu projeto no GitHub Pages.