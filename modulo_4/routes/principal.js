const express = require('express');

const router = express.Router();

router.get('/', (_, res) => {
    res.send('Olá galera de Cordeiro!');
});

module.exports = router; 