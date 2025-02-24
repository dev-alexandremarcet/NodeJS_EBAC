// importando a lista de carros do arquivo exercicio1_modulo2.js
const { listaDeCarros } = require("./exercicio1_modulo2");

// criando a lista vazia para o rodizio de carros
let listaRodizioDeCarros = [];

// criando uma string para o final da placa do carro
let finalDaPlaca = "";

const rodizioDeCarros = (diaDaSemana) => {
    // segunda-feira - rodízio de carros com placa final 1 e 2
    if (diaDaSemana === 0) {
        listaRodizioDeCarros = [];
        finalDaPlaca = "";
        listaDeCarros.forEach((carro) => {
            finalDaPlaca = carro.placa.charAt(carro.placa.length - 1);
            if ((finalDaPlaca === "1") || (finalDaPlaca === "2")) {
                listaRodizioDeCarros.push(carro);
            }
        })
        return listaRodizioDeCarros;
    }
    // terça-feira - rodízio de carros com placa final 3 e 4
    if (diaDaSemana === 1) {
        listaRodizioDeCarros = [];
        finalDaPlaca = "";
        listaDeCarros.forEach((carro) => {
            finalDaPlaca = carro.placa.charAt(carro.placa.length - 1);
            if ((finalDaPlaca === "3") || (finalDaPlaca === "4")) {
                listaRodizioDeCarros.push(carro);
            }
        })
        return listaRodizioDeCarros;
    }
    // quarta-feira - rodízio de carros com placa final 5 e 6
    if (diaDaSemana === 2) {
        listaRodizioDeCarros = [];
        finalDaPlaca = "";
        listaDeCarros.forEach((carro) => {
            finalDaPlaca = carro.placa.charAt(carro.placa.length - 1);
            if ((finalDaPlaca === "5") || (finalDaPlaca === "6")) {
                listaRodizioDeCarros.push(carro);
            }
        })
        return listaRodizioDeCarros;
    }
    // quinta-feira - rodízio de carros com placa final 7 e 8
    if (diaDaSemana === 3) {
        listaRodizioDeCarros = [];
        finalDaPlaca = "";
        listaDeCarros.forEach((carro) => {
            finalDaPlaca = carro.placa.charAt(carro.placa.length - 1);
            if ((finalDaPlaca === "7") || (finalDaPlaca === "8")) {
                listaRodizioDeCarros.push(carro);
            }
        })
        return listaRodizioDeCarros;
    }
    // sexta-feira - rodízio de carros com placa final 9 e 0
    if (diaDaSemana === 4) {
        listaRodizioDeCarros = [];
        finalDaPlaca = "";
        listaDeCarros.forEach((carro) => {
            finalDaPlaca = carro.placa.charAt(carro.placa.length - 1);
            if ((finalDaPlaca === "9") || (finalDaPlaca === "0")) {
                listaRodizioDeCarros.push(carro);
            }
        })
        return listaRodizioDeCarros;
    }
    // sábado e domingo - sem rodízio de carros
    if ((diaDaSemana === 5) || (diaDaSemana === 6)) {
        return [];
    }
};

module.exports = { rodizioDeCarros };

// exibindo a lista de rodizio de carros da segunda-feira
// console.log("Rodízio de carros da segunda-feira: ", rodizioDeCarros(0));

// exibindo a lista de rodizio de carros da terça-feira
// console.log("Rodízio de carros da terça-feira: ", rodizioDeCarros(1));

// exibindo a lista de rodizio de carros da quarta-feira
// console.log("Rodízio de carros da quarta-feira: ", rodizioDeCarros(2));

// exibindo a lista de rodizio de carros da quinta-feira
// console.log("Rodízio de carros da quinta-feira: ", rodizioDeCarros(3));

// exibindo a lista de rodizio de carros da sexta-feira
// console.log("Rodízio de carros da sexta-feira: ", rodizioDeCarros(4));

// exibindo o resultado para sábado e domingo
// console.log("Não há rodizio de carros no sábado e domingo", rodizioDeCarros(5))
