const express = require("express");
const app = express();
const morgan = require("morgan");

// setting
app.set("port", process.env.PORT || 3000);

// Morgan es un middleware (funcion que procesa datos
// antes de que el servidor los reciba)

app.use(morgan("dev"));
// Entiende datos que llegan de formulario
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// rutas
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// empezando servidor
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
