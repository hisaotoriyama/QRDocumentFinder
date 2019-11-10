'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING
  }, {
    underscored: true,
  });
  user.associate = function(models) {
    // associations can be defined here
    user.hasMany(models.storeditem, {
      foreignKey: 'latestuser',
      as: 'storeditems',
  })
};
  return user;
};