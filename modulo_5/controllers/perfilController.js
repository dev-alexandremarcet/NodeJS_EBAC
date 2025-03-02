import express from "express";

import Perfil from "../models/perfil.js";

import connect from "../models/index.js";

const app = express();
const porta = 3000;

app.listen(porta, () => {
    connect();
    console.log("Servidor ouvindo na porta ", porta);
});

const registro1 = await Perfil.create({
    nome: "Alexandre",
    sobrenome: "Marcet",
    idade: 54,
});

console.log(registro1);

const registro2 = await Perfil.create({
    nome: "Rita",
    sobrenome: "Cruz",
    idade: 49,
});

console.log(registro2);

const registro3 = await Perfil.create({
    nome: "Adriana",
    sobrenome: "Mendonça",
    idade: 52,
});

console.log(registro3);
   

