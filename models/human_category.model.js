const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Human_category = sequelize.define("Human_category", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    start_age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    finish_age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    gender_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
  Human_category.associate = (models) => {
    Human_category.hasMany(models.Event, {
      foreignKey: "human_category_id",
      as: "event",
    });
    Human_category.belongsTo(models.Gender, {
      foreignKey: "gender_id",
      as: "gender",
    });
  };

  return Human_category;
};
