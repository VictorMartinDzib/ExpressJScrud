'use strict'

let express = require('express');
let bodyParser = require('body-parser');

let app = express();

//Cargar rutas
let fruta_router = require('./routes/fruta');



//Body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//configurar CORS

//rutas
//app.get('/', (req, res) => { res.status(200).send({"mensaje": "Hello World!"}) })
app.use('/api', fruta_router);

module.exports = app;