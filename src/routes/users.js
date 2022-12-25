const { Router } = require("express");
const router = Router();
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

router.get("/", async (req, res) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  res.json(users);
});

module.exports = router;
