import express from "express";
import path from "path";

import routerPrincipal from "./routes/principal.js";
import routerPedidos from "./routes/pedidos.js";
import routerPerfil from "./routes/perfil.js";
import connect from "./models/index.js";

const app = express();
const porta = 3000;

//configurando ejs
app.set("views", path.join("./", "views"));
app.set("view engine", "ejs");

// rotas
app.use("/perfil", routerPerfil);
app.use("/pedidos", routerPedidos);
app.use("/", routerPrincipal);

app.listen(porta, () => {
    connect();
    console.log("Servidor ouvindo na porta ", porta);
});
