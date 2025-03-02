import express from "express";

import Perfil from "../models/perfil.js";

const router = express.Router();

router.get("/", (_, res) => {
    Perfil.findOne({}).then((perfil) => {
        res.render("perfil/index", {
            perfil: perfil,
        });
    });
});

export default router;