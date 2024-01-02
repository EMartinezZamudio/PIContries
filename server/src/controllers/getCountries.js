const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const getCountries = async (name, pag) => {
  if (name) {
    let countrie = null;
    let aux = name.length;

    while (!countrie && aux) {
      countrie = await Country.findOne({
        where: {
          name: {
            [Op.iLike]: `%${name.substring(0, aux)}%`,
          },
        },
        include: {
          model: Activity,
          attributes: ["nombre", "tipo"],
          through: { attributes: [] },
        },
      });
      aux--;
    }
    return countrie;
  }

  if (pag) {
    const limit = 10;
    let offset = (pag - 1) * limit;
    const countries = await Country.findAll({
      offset,
      limit,
      include: {
        model: Activity,
        attributes: ["nombre", "tipo"],
        through: { attributes: [] },
      },
    });
    return countries;
  }

  const countries = await Country.findAll();
  return countries;
};

module.exports = getCountries;
