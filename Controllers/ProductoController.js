const Producto = require("../Models/Producto");
const ObjectId = require("mongoose").Types.ObjectId;

function ProductoController() {
  this.getProductos = async function(res) {
    try {
      let productos = await Producto.find();
      res.send({ productos });
    } catch (e) {
      res.status(500).send({ error: e });
    }
  };

  this.getProductoPorId = async function(res, idProducto) {
    try {
      let productos = await Producto.findById(ObjectId(idProducto));
      res.send({ productos });
    } catch (e) {
      res.status(500).send({ error: e });
    }
  };

  this.insertarProducto = async function(res, productoParametro) {
    let productoAInsertar = new Producto(productoParametro);
    let productoNuevo = await productoAInsertar.save();
    res.send(productoNuevo);
  };

  this.modificarProducto = async function(res, productoParametro) {
    let productoModificado = await Producto.findByIdAndUpdate(
      ObjectId(productoParametro._id),
      productoParametro
    );

    res.send(productoModificado);
  };

  this.eliminarProducto = async function(res, idProducto) {
    await Producto.findByIdAndRemove(ObjectId(idProducto));
    res.send({ mensaje: "Registro eliminado" });
  };
}

module.exports = new ProductoController();
