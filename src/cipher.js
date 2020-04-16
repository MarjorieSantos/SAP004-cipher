const cipher = {
  encode: function (offset, string) {
    const novaPalavra = ""; //ela recebe uma string vazia para poder concatenar com a palavra gerada pelo novo charCode
    const palavraMaiuscula = string.toUpperCase();
    for (let contador = 0; contador < palavraMaiuscula.length; contador++) {
      const novaLetra = palavraMaiuscula[contador]
      if(novaLetra !== " "){
      const charCodeLetraAtual = novaLetra.charCodeAt();
      const novoCharCode = ((charCodeLetraAtual - 65 + parseInt(offset)) % 26) + 65;
      novaLetra = String.fromCharCode(novoCharCode);
      }
      novaPalavra = novaPalavra + novaLetra

    }
    return novaPalavra
  },

  decode: function (offset, string) {
    const novaPalavra = ""
    const palavraMaiuscula = string.toUpperCase();
    for (let contador = 0; contador < palavraMaiuscula.length; contador++) {
      const novaLetra = palavraMaiuscula[contador]
      if(novaLetra !== " "){
      const charCodeLetraAtual = palavraMaiuscula[contador].charCodeAt();
      const novoCharCode = ((charCodeLetraAtual + 65 - parseInt(offset)) % 26) + 65;
      novaLetra = String.fromCharCode(novoCharCode);
      }
      
      novaPalavra = novaPalavra + novaLetra

    }
    return novaPalavra
  }
};

export default cipher;