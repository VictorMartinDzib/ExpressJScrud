'use strict'

let Fruta = require('../models/fruta');

function pruebas(req, res){ 
      res.status(200).send({"mensaje": "Hello World!"}); 
};

function show(req, res){
      let frutaId = req.params.id;
      Fruta.findById(frutaId).exec((err, fruta) => {
            if(err){
                  res.status(500).send({
                        message: "Error inesperado"
                  });
            }else{
                  if(fruta){
                        res.status(200).send({
                              fruta
                        });
                  }else{
                        res.status(404).send({
                              message: "No se encontro la fruta"
                        });
                  }
            }
      });
};

function index(req, res){
      Fruta.find({}).sort({'_id':-1}).exec((err, frutas)=>{
            if(err){
                  res.status(500).send({message: "Error inesperado"});
            }else{
                  if(frutas){
                        res.status(200).send({
                              frutas
                        });
                  }else{
                        res.status(404).send({
                              message: "No hay frutas"
                        });
                  }
            }
      });
};

function store(req, res){

      let fruta = new Fruta();
      let params = req.body;
      if(params.nombre){
            fruta.nombre = params.nombre;
            fruta.color = params.color;
            fruta.temporada = params.temporada;

            fruta.save((err, frutaStored)=>{
                  if(err){
                        //console.log("Sucedio un error inesperado :(")
                        res.status(500).send({message:"Error en el servidor"});
                  }else{
                        if(frutaStored){
                              res.status(200).send({message:frutaStored});
                        }else{
                              res.status(200).send({message:"No se ha guardado la fruta"});
                        }
                  }
            });
      }else{
            res.status(200).send({message:"El nombre de la fruta es obligatorio"});
      }

}

function update(req, res){
      let frutaId = req.params.id;
      let update_ = req.body;

      Fruta.findByIdAndUpdate(frutaId, update_, {new:true}, (err, frutaUpdated) =>{
            if(err){
                  res.status(500).send({
                        message: "Error inesperado"
                  });
            }else{
                  if(frutaUpdated){
                        res.status(500).send({
                              fruta: frutaUpdated,
                              response: "Actualizacion exitosa"
                        });
                  }else{
                        res.status(404).send({
                              message: "No se encontro la fruta"
                        })
                  }
            }
      });
};

function destroy(req, res){
      let frutaId = req.params.id;
      Fruta.findByIdAndRemove(frutaId, (err, frutaRemoved)=>{
            if(err){
                  res.status(500).send({
                        message: "Error inesperado"
                  });
            }else{
                  if(frutaRemoved){
                        res.status(500).send({
                              fruta: frutaRemoved,
                              message: "Eliminacion exitosa"
                        });
                  }else{
                        res.status(404).send({
                              message: "No se encontro la fruta"
                        });
                  }
            }
      });
};

module.exports = {
      pruebas, store, index, show, update, destroy
};