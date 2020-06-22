const express = require("express");
const router = express.Router();

// IMPORTAR EL CONTROLADOR
const proyectosController = require ('../controllers/proyectosController');

module.exports = function () {
  //RUTA PARA EL HOME
  router.get("/", proyectosController.proyectosHome);
  router.get("/nosotros", proyectosController.nosotros);
  return router;
};
