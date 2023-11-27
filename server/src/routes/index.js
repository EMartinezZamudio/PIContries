const { Router } = require("express");

// controllers
const getCountries = require("../controllers/getCountries");
const countryDetail = require("../controllers/countryDetail");

const router = Router();

router.get("/", (req, res) => {
  res.send("prueba de api");
});

router.get("/countries", async (req, res) => {
  try {
    const countries = await getCountries();
    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/countries/:idPais", async (req, res) => {
  try {
    const { idPais } = req.params;
    const country = await countryDetail(idPais);
    if (!country) res.status(404).json({ error: "Pais no registrado" });
    res.status(200).json(country);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
