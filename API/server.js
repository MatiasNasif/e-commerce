// Configuración del server
const express = require("express");
const app = express();
const db = require("./db");
const models = require("./models");
const routes = require("./routes");
//cookieparser
//sessions
//passport
//localstrategy

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended : false }));
// app.use(cookieParser()); FALTA REQUERIR
//faltan middlewares de sessions, uso de passport con estrategias y serialize deserialize

// Routes
app.use("/api", routes);

// agregar un error como middleware??

db.sync({ force: false }).then(() => {
    app.listen(3001, () => console.log("Servidor escuchando en el puerto 3001"));
});