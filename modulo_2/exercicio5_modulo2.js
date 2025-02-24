// importando a função que verifica o carros que deverão fazer rodizio para cada dia da semana
const { rodizioDeCarros } = require("./exercicio4_modulo2");

// criando um contador para o dia da semana
let contadorDiaDaSemana = 0;

// criando uma função que determina o dia da semana a partir de um número de 0 a 6
const strDiaDaSemana = (numDiaDaSemana) => {
    if (numDiaDaSemana === 0)
        return "segunda-feira";
    if (numDiaDaSemana === 1)
        return "terça-feira";
    if (numDiaDaSemana === 2)
        return "quarta-feira";
    if (numDiaDaSemana === 3)
        return "quinta-feira";
    if (numDiaDaSemana === 4)
        return "sexta-feira";
    if (numDiaDaSemana === 5)
        return "sábado";
    if (numDiaDaSemana === 6)
        return "domingo";
}

// laço que verifica os carros do rodízio para cada dia da semana
while (contadorDiaDaSemana < 7) {
    if (contadorDiaDaSemana < 5){
        console.log("Na ", strDiaDaSemana(contadorDiaDaSemana), ", os carros que devem fazer rodízio são os seguintes: ", rodizioDeCarros(contadorDiaDaSemana));
    }
    else {
        console.log("Não há rodízio de carros no sábado nem no domingo");
    }
    contadorDiaDaSemana = contadorDiaDaSemana + 1;
}