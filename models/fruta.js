'use strict'

let moongose = require('mongoose');
let Schema = moongose.Schema;

let FrutaSchema = Schema({
      nombre: String,
      color: String,
      temporada: Boolean
});

module.exports = moongose.model('Fruta', FrutaSchema);