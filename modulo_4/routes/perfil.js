const express = require('express');

const router = express.Router();

router.get('/', (_, res) => {
    res.render('perfil/index', {
        nomeDoUsuario: "Alexandre Peixoto Marcet",
        idadeDoUsuario: "54 anos",
    });
});

module.exports = router; 
