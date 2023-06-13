//INSTALAÇÃO BIBLIOTECAS/MÓDULOS
const express = require("express");
const app = express();
const database = require("./db/db");
const routes = require("./routes/routes");
const jwt = require("jsonwebtoken");
//MODELS


//CODIFICAÇÃO JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//ROTA PRINCIPAL
app.use("/",routes);

try {
    database.sync().then(() => {
    })
}
catch(erro) {
    console.log("Houve uma falha ao sincronizar com o banco de dados. ", erro);
};

app.listen(3000);