const express = require("express");
const routes = require("./routes");
const path = require("path");
//CREAR UNA APPP DE EXPRESS
const app = express();

// HABILITAR PUG
app.set("view engine", "pug");

// AÑADIR LA CARPETA  DE LAS VISTAS

app.use("/", routes());

app.listen(3000);
