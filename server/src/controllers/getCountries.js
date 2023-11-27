const { Country } = require("../db");
const { Op } = require("sequelize");

const getCountries = async (name) => {
  if (name) {
    const countries = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
    return countries;
  }
  const countries = await Country.findAll();
  return countries;
};

module.exports = getCountries;
