//Rutas de productos
const express = require('express')
const productsApiController = require("../controllers/productsApiControllers");
const productsApiRouter = express.Router();

// products API

productsApiRouter.get('/:id?', productsApiController.getProduct)
productsApiRouter.post('/', productsApiController.createProduct)
productsApiRouter.delete("/", productsApiController.deleteProduct)

module.exports = productsApiRouter;

//http://localhost:3000/api/products --> Esto es lo que hay que conseguir