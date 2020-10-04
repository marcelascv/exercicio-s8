// passo-a-passo

// 1: importar o express
// 2: importar o router
// 3: importar o controller
// 4: criar a rota que traz todosos itens 
// 5: exportar o router

const express = require('express');
const route = express.Router();
const controller = require('../controller/musicasController');

route.get('/musicas', controller.getAll);
route.get('/musicas/:id', controller.getByID);

module.exports = route