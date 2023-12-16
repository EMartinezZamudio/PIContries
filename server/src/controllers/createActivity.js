const { Op } = require("sequelize");
const { Activity, Country } = require("../db");

const createActivity = async (req, res) => {
  try {
    const { tipo, nombre, dificultad, temporada, duracion, paises } = req.body;

    if (!tipo || !nombre || !dificultad || !temporada || !paises[0]) {
      return res.status(404).json({ error: "faltan datos obligatorios" });
    }

    const countries = [];

    for (let pais of paises) {
      const result = await Country.findOne({
        where: {
          name: {
            [Op.iLike]: `%${pais}%`,
          },
        },
      });
      if (!result) {
        return res.status(404).json({ error: "Paises no encontrados" });
      }
      countries.push(result);
    }

    const newActivity = { tipo, dificultad, temporada, duracion };
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
