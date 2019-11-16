const Producto = require("../Models/Producto");

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
      let productos = await Producto.find({ _id: idProducto });
      res.send({ productos });
    } catch (e) {
      res.status(500).send({ error: e });
    }
  };
}

module.exports = new ProductoController();
