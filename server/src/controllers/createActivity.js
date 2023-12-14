const { Op } = require("sequelize");
const { Activity, Country } = require("../db");

const createActivity = async (req, res) => {
  try {
    const { nombre, dificultad, temporada, duracion, paises } = req.body;

    if (!nombre || !dificultad || !temporada || !paises[0]) {
      return res.status(404).json({ error: "faltan datos obligatorios" });
    }

    const countries = [];

    const promises = paises.map((pais) => {
      return Country.findOne({
        where: {
          name: {
            [Op.iLike]: pais,
          },
        },
      });
    });

    await Promise.all(promises).then((response) => {
      response.forEach((pais) => {
        if (!pais) {
          return res.status(404).json({ error: "Paises no encontrados" });
        }
        countries.push(pais.id);
      });
    });

    const newActivity = { dificultad, temporada, duracion };
    const [activity, created] = await Activity.findOrCreate({
      where: { nombre },
      defaults: newActivity,
    });

    if (created) {
      activity.addCountries(countries);
      res.status(201).json(activity);
    } else {
      res.status(409).json({ error: "la actividad ya existe" });
    }
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

module.exports = createActivity;
