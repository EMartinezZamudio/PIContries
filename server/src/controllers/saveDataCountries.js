const axios = require("axios");
const { Country } = require("../db");

const saveDataCountries = async () => {
  const { data } = await axios("http://localhost:5000/countries");

  const { name, region, capital, subregion, area, population, flags } = data[2];

  let capitalNombre;
  if (Array.isArray(capital)) {
    capitalNombre = capital[0];
  }

  const newCountry = {
    name: name.common,
    continente: region,
    capital: utf8Encoder.encode(capitalNombre),
    subregion,
    area,
    poblacion: population,
    imagen: flags.svg,
  };

  // await Country.create(newCountry);

  // console.log("pais creado");

  //-----------------------------------------------------------------

  //   let count = 0;

  //   while (count < 2) {
  //     const { name, region, capital, subregion, area, population, flags, fifa } =
  //       data[count];

  //     let capitalNombre;
  //     if (Array.isArray(capital)) {
  //       capitalNombre = capital[0];
  //     }

  //     const newCountry = {
  //       name: name.common,
  //       continente: region,
  //       capital: capitalNombre,
  //       subregion,
  //       area,
  //       poblacion: population,
  //       imagen: flags.svg,
  //     };

  //     await Country.create(newCountry);

  //     console.log("pais creado " + count);

  //     count++;
  //   }

  // -------------------------------------------------------------------

  //   data.forEach(async (country) => {
  //     const { name, region, capital, subregion, area, population, flags, fifa } =
  //       country;

  //     let capitalNombre;
  //     if (Array.isArray(capital)) {
  //       capitalNombre = capital[0];
  //     }

  //     const newCountry = {
  //       name: name.common,
  //       continente: region,
  //       capital: capitalNombre,
  //       subregion,
  //       area,
  //       poblacion: population,
  //       imagen: flags.svg,
  //     };

  //   });
};

module.exports = saveDataCountries;
