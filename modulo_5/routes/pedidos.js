import express from "express";

import Pedido from "../models/pedido.js";

const router = express.Router();

//const Pedido = require("../models/pedido");

router.get("/", (_, res) => {
    Pedido.find({}).then((pedidos) => {
        res.render("pedidos/index", {
            nomeDoUsuario: "Alexandre Marcet",
            pedidos: pedidos,
        });
    });
    
});

export default router;

