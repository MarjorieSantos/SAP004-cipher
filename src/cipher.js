const cipher = {
  encode: function (offset, string) {
    let novaPalavra = ""; //ela recebe uma string vazia para poder concatenar com a palavra gerada pelo novo charCode
    let palavraMaiuscula = string.toUpperCase();
    for (var contador = 0; contador < palavraMaiuscula.length; contador++) {
      let novaLetra = palavraMaiuscula[contador]
      if (novaLetra !== " ") {
        let charCodeLetraAtual = novaLetra.charCodeAt();
        let novoCharCode = ((charCodeLetraAtual - 65 + parseInt(offset)) % 26) + 65;
        novaLetra = String.fromCharCode(novoCharCode);
      }
      novaPalavra = novaPalavra + novaLetra

    }
    return novaPalavra
  },

  decode: function (offset, string) {
    let novaPalavra = ""
    let palavraMaiuscula = string.toUpperCase();
    for (var contador = 0; contador < palavraMaiuscula.length; contador++) {
      let novaLetra = palavraMaiuscula[contador]
      if (novaLetra !== " ") {
        let charCodeLetraAtual = palavraMaiuscula[contador].charCodeAt();
        let novoCharCode = ((charCodeLetraAtual + 65 - parseInt(offset)) % 26) + 65;
        novaLetra = String.fromCharCode(novoCharCode);
      }

      novaPalavra = novaPalavra + novaLetra

    }
    return novaPalavra
  }
};

export default cipher;
