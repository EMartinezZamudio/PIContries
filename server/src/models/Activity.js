const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Activity",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dificultad: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      temporada: {
        type: DataTypes.ENUM("Verano", "Otoño", "Invierno", "Primavera"),
        allowNull: false,
        validate: {
          max: 5,
          min: 1,
        },
      },
      duracion: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: true,
          min: 0,
        },
      },
    },
    {
      timestamps: false,
    }
  );
};
