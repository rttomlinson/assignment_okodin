'use strict';
module.exports = function(sequelize, DataTypes) {
  var View = sequelize.define('View', {
    viewerId: DataTypes.INTEGER,
    vieweeId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        View.belongsTo(models.Profile, {
          foreignKey: 'viewerId'
        });

        View.belongsTo(models.Profile, {
          foreignKey: 'vieweeId'
        });
      }
    }
  });
  return View;
};
