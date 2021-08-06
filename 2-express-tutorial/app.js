const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  // res.json(products);
  res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

api.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

api.get("/api/products/1", (req, res) => {
  const singleProduct = products.find((product) => product.id === 1);
  res.json(singleProduct);
});

api.get("/api/products/:productID", (req, res) => {
  console.log(req);
  console.log(req.params);
  const singleProduct = products.find((product) => product.id === 1);
  res.json(singleProduct);
});

app.listen(5000, (req, res) => {
  console.log("Server is listening on port 5000...");
});
