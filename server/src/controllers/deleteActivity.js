const { Activity } = require("../db");

const deleteActivity = async (id) => {
  const activity = await Activity.findByPk(id);
  if (!activity) throw new Error("La actividad no esta registrada");

  await activity.destroy();

  return "Actividad eliminada con exito";
};

module.exports = deleteActivity;
