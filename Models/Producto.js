const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productoSchema = new Schema({
  producto: { type: String, required: true },
  categorias: { type: [Schema.Types.Mixed], required: true },
  fotos: [String],
  precio: Number,
  stock: Number,
  feCreacion: Date
});

const producto = mongoose.model("producto", productoSchema);
module.exports = producto;
