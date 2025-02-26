const express = require('express');

const router = express.Router();

router.get('/', (_, res) => {
    res.render('pedidos/index', {
        nomeDoUsuario: "Alexandre Marcet",
    });
});

module.exports = router; 
