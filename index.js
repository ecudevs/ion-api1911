const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const mongoose = require("mongoose");

const app = express();

const productos = require("./constants");
const ProductoController = require("./Controllers/ProductoController");
// configuramos body-parser para que capture
// nuestros datos que llegan en formato json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/productos", (req, res) => {
  ProductoController.getProductos(res);
});

app.get("/productos/:idProducto", (req, res) => {
  let idProducto = req.params.idProducto;

  let productoEncontrado = productos.find(productoIteracion => {
    return productoIteracion._id == idProducto;
  });

  res.send({ producto: productoEncontrado });
});

app.post("/compra", (req, res) => {
  res.send("Hola mundo!");
});

app.delete("/delete", (req, res) => {
  res.send("Hola mundo!");
});

app.put("/usuario", (req, res) => {
  res.send("Hola mundo!");
});

// configuracion de puerto
const port = process.env.PORT || "9000";
app.set("port", port);

// configuracion de conexion
mongoose.connect("mongodb://localhost:27017/ionic1911", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// creacion de servidor a partir de express
const server = http.createServer(app);

// ponemos a escuchar nuestro servidor
server.listen(port, () => console.log(`Magic Happens on port: ${port}`));
