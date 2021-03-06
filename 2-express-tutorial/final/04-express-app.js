const express = require("express");
const path = require("path");
const app = express();

//setup static and middleware
app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// adding to static assets
// SSR : service side rendering
// });

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, (req, res) => {
  console.log(`server is listening on port 5000...`);
});
