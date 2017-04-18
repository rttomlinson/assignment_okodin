'use strict';
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
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
            isEmail: {
                msg: "Must be an email"
            },
            notEmpty: {
                msg: "Name cannot be empty"
            }
        }

    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return User;
};
