const { Router } = require("express");

// controllers
const getCountries = require("../controllers/getCountries");
const countryDetail = require("../controllers/countryDetail");
const createActivity = require("../controllers/createActivity");
const getActivities = require("../controllers/getActivities");

const router = Router();

router.get("/countries", async (req, res) => {
  try {
    const { name, pag } = req.query;
    const countries = await getCountries(name, pag);
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

router.post("/activities", createActivity);

router.get("/activities", async (req, res) => {
  try {
    const activities = await getActivities();
    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
