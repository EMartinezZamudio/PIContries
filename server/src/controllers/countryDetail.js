const { Country } = require("../db");

const countryDetail = async (id) => {
  const country = await Country.findByPk(id);
  return country;
};

module.exports = countryDetail;
