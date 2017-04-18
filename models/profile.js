"use strict";
module.exports = function(sequelize, DataTypes) {
    var Profile = sequelize.define(
        "Profile", {
            age: {
                type: DataTypes.INTEGER,
                validate: {
                    min: 13,
                    max: 120
                }
            },
            location: {
                type: DataTypes.STRING,
                validate: {
                    len: [0, 80]
                }
            },
            villagesCaptured: {
                type: DataTypes.INTEGER,
                validate: {
                    min: 0
                }
            },
            occupation: {
                type: DataTypes.STRING,
                validate: {
                    len: [0, 80]
                }
            },
            marital: {
                type: DataTypes.STRING,
                validate: {
                    isIn: [
                        ['single', 'married', 'dating']
                    ]
                }
            },
            gender: {
                type: DataTypes.STRING,
                validate: {
                    isIn: [
                        ['male', 'female', 'pterodactyl']
                    ]
                }
            },
            image: {
                type: DataTypes.STRING,
            }
        }, {
            classMethods: {
                associate: function(models) {
                    Profile.hasOne(models.User, {
                        foreignKey: "profileId"
                    });

                    Profile.hasMany(models.View, {
                      foreignKey: "viewerId"
                    });

                    Profile.belongsToMany(models.Profile, {
                      through: models.View,
                      as: 'ProfileView',
                      foreignKey: 'vieweeId'
                    });
                }
            }
        }
    );
    return Profile;
};
