const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Activity",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
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
