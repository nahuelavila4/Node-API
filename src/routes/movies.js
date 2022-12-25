const { Router } = require("express");
const router = Router();
const pelis = require("./sample.json");

const _ = require("underscore");
// Underscore da funcionalidad para recorrer un array

router.get("/", (req, res) => {
  res.json(pelis);
});

// Nuevo obj
router.post("/", (req, res) => {
  const { name, director, rating } = req.body;
  if (name && director && rating) {
    const nuevaId = pelis.length + 1;
    const nuevaPeli = { ...req.body, nuevaId };
    pelis.push(nuevaPeli);
    res.json(pelis);
  } else {
    res.status(500).json({ error: "Wrong Request" });
  }
});

// Actualizar obj
router.put("/:id", (req, res) => {
  // Recibe datos. El id y los datos que manda el cliente
  const { id } = req.params;
  const { name, director, rating } = req.body;
  if (name && director && rating) {
    _.each(pelis, (peli, i) => {
      // Pregunta si la id que esta recorriendo es igual a la id de la que se modifico
      if (peli.id == id) {
        peli.name = name;
        peli.director = director;
        peli.rating = rating;
      }
    });
    res.json(pelis);
  } else {
    res.status(500).json({ error: "There was an error" });
  }
});

// Borrar obj
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  _.each(pelis, (peli, i) => {
    if (peli.id == id) {
      pelis.splice(i, 1);
    }
  });
  res.send(pelis);
});

// codigo de estados dice al cliente en que estado estan los datos

module.exports = router;
