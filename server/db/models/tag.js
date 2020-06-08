"use strict";
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define(
    "Tag",
    {
      tag: DataTypes.STRING,
    },
    {}
  );
  Tag.associate = function (models) {
    Tag.belongsToMany(models.Word_data, {
      through: "Word_tag",
      foreignKey: "tag_id",
      as: "WordData",
    });
  };
  return Tag;
};
