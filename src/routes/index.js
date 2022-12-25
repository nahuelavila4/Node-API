const { Router } = require("express");
const router = Router();

// rutas
router.get("/", (req, res) => {
  const data = {
    name: "Nahuel",
    website: "nahuelavila.netlify.app",
  };
  res.json(data);
});

module.exports = router;
