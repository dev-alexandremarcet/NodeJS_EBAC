import express from "express";

const router = express.Router();

router.get('/', (_, res) => {
    res.send('Olá galera de Cordeiro!');
});

export default router;