const server = require("./src/server");
const { conn } = require("./src/db.js");

// controlador para guardar la informacion de la api en la base de datos
// const saveDataCountries = require("./src/controllers/saveDataCountries.js");

const { SV_PORT } = process.env;

conn
  .sync({ force: false })
  .then(() => {
    server.listen(SV_PORT, async () => {
      // const response = await saveDataCountries();
      // console.log(response);

      console.log(`Server listening on port ${SV_PORT}`);
    });
  })
  .catch((error) => console.error(error.message));
