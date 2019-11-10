'use strict';
module.exports = (sequelize, DataTypes) => {
  const storeditem = sequelize.define('storeditem', {
    originaluser: DataTypes.INTEGER,
    content: DataTypes.INTEGER,
    storageloc: DataTypes.INTEGER,
    latestuser: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  storeditem.associate = function(models) {
    // associations can be defined here
    storeditem.belongsTo(models.user,{
      foreignKey:'latestuser',
      onDelete:'CASCADE',
    })
  };
  return storeditem;
};