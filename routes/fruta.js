'use strict'

let express = require('express');
let FrutaController = require('../controllers/fruta');

let api = express.Router();

api.get('/pruebas', FrutaController.pruebas);
api.post('/fruta', FrutaController.store);
api.get('/fruta', FrutaController.index);
api.get('/fruta/:id', FrutaController.show);
api.put('/fruta/:id', FrutaController.update);
api.delete('/fruta/:id', FrutaController.destroy);

module.exports = api;