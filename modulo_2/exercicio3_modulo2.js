// importando a lista de carros do arquivo exercicio1_modulo2.js
const { listaDeCarros } = require("./exercicio1_modulo2");

// criando lista de carros ordenada pelo nome do modelo do carro
listaDeCarros.sort((listaDeCarros1, listaDeCarros2) => {
    if (listaDeCarros1.modelo > listaDeCarros2.modelo) {
        return 1;
    } 
    if (listaDeCarros1.modelo < listaDeCarros2.modelo) {
        return -1;
    }
    return 0;
});

// exibindo lista de carros ordenada
console.log(listaDeCarros);
