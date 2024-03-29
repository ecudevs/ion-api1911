let productos = [
  {
    _id: 1,
    producto: "Nylon Braided Lightning to USB A Cable",
    categorias: [{ _id: "COMPUTER", categoria: "Computer" }],
    descripcion:
      "Apple MFi certified charging and syncing cable for your Apple devices",
    fotos: [
      "https://images-na.ssl-images-amazon.com/images/I/81%2BF83td0DL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/41cRjgok0ML.jpg"
    ],
    precio: 219.999,
    stock: 5,
    feCreacion: new Date()
  },
  {
    _id: 2,
    producto: "Wemo Light Switch",
    categorias: [
      { _id: "GOOGLE", categoria: "Google assitance" },
      { _id: "HOME", categoria: "Home" }
    ],
    descripcion:
      "Wemo Light Switch, WiFi enabled, Works with Alexa and the Google Assistant (F7C030fc)",
    fotos: [
      "https://images-na.ssl-images-amazon.com/images/I/510yp4Dw5pL._SL1000_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/51Mm%2BddYqUL._SL1000_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61gbjA4r5ZL._SL1000_.jpg"
    ],
    precio: 34.99,
    stock: 10,
    feCreacion: new Date()
  },
  {
    _id: 3,
    producto: "Apple iPhone 11",
    categorias: [
      { _id: "PHONE", categoria: "Phone" },
      { _id: "APPLE", categoria: "Apple" }
    ],
    descripcion:
      "Carrier - This phone is locked to simple Mobile from Tracfone, which means this Device can only be used on the Simple Mobile wireless network.",
    fotos: [
      "https://images-na.ssl-images-amazon.com/images/I/71iO2R%2BCLjL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/719BufuTjsL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81LoEmP6IyL._SL1500_.jpg"
    ],
    precio: 699.0,
    stock: 25,
    feCreacion: new Date()
  }
];

module.exports = productos;
