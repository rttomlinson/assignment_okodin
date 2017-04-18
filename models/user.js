"use strict";
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define(
    "User",
    {
      fname: {
        type: DataTypes.STRING,
        validate: {
          isAlpha: {
            msg: "Cannot have non-alpha character"
          },
          notEmpty: {
            msg: "Name cannot be empty"
          }
        }
      },
      lname: {
        type: DataTypes.STRING,
        validate: {
          isAlpha: {
            msg: "Cannot have non-alpha character"
          },
          notEmpty: {
            msg: "Name cannot be empty"
          }
        }
      },
      username: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Name cannot be empty"
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            msg: "Must be an email"
          },
          notEmpty: {
            msg: "Name cannot be empty"
          }
        }
      },
      profileId: DataTypes.INTEGER
    },
    {
      classMethods: {
        associate: function(models) {
          User.hasOne(models.Profile, {
            foreignKey: "userId"
          });
        }
      },
      instanceMethods: {
        fullName: function() {
          return `${this.fname} ${this.lname}`;
        }
      }
    }
  );
  return User;
};
