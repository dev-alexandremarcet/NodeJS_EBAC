// importando a lista de carros do arquivo exercicio1_modulo2.js
const { listaDeCarros } = require("./exercicio1_modulo2");

// inserindo um item à lista de carros
listaDeCarros.push({modelo: "T-Cross", ano: 2022, placa: "DFC3R43",});

// exibindo a lista de carros após a inserção do novo item
console.log(listaDeCarros);