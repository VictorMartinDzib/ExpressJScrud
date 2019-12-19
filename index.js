'use strict'

var mongoose = require('mongoose');
let app = require('./app');
let port = 3800;


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/curso_mongo', {useMongoClient:true})
.then(()=>{
      console.log("La conexion a mongo db se ha realizado correctamente");
      app.listen(port, ()=>{console.log('El servidor esta corriendo en el http://127.0.0.1:3800');})
})
.catch(err => console.log("Algo inseperado sucedio!"));