const cipher = {
  encode: function (offset, string) {
    let novaPalavra = "";
    let palavraMaiuscula = string.toUpperCase();
    const firstLetter = "A".charCodeAt()
    for (let contador = 0; contador < palavraMaiuscula.length; contador++) {
      let novaLetra = palavraMaiuscula[contador]
      if (novaLetra !== " ") {
        let charCodeLetraAtual = novaLetra.charCodeAt();
        let novoCharCode = ((charCodeLetraAtual - firstLetter + parseInt(offset)) % 26) + firstLetter;
        novaLetra = String.fromCharCode(novoCharCode);
      }
      novaPalavra = novaPalavra + novaLetra
    }
    return novaPalavra
  },

  decode: function (offset, string) {
    let novaPalavra = ""
    let palavraMaiuscula = string.toUpperCase();
    const firstLetter = "A".charCodeAt()
    for (let contador = 0; contador < palavraMaiuscula.length; contador++) {
      let novaLetra = palavraMaiuscula[contador]
      if (novaLetra !== " ") {
        let charCodeLetraAtual = palavraMaiuscula[contador].charCodeAt();
        let novoCharCode = ((charCodeLetraAtual + firstLetter - parseInt(offset)) % 26) + firstLetter;
        novaLetra = String.fromCharCode(novoCharCode);
      }
      novaPalavra = novaPalavra + novaLetra
    }
    return novaPalavra
  }
};

export default cipher;