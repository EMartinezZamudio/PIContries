const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("prueba de api");
});

module.exports = router;
