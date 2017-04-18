const express = require("express");
let router = express.Router();
const db = require("../models");
const sequelize = db.sequelize;
const User = db.User;
const Profile = db.Profile;


router.get("/", (req, res, next) => {
    const formParams = req.query.form ? req.query.form : {};

    User.findAll({
            include: [{
                model: Profile,
                where: {
                    gender: formParams.gender || { in: ['male', 'female', 'pterodactyl']
                    },
                    marital: { in: formParams.marital || ['single', 'dating', 'married']
                    }
                }
            }]
        })
        .then(users => {
            res.render("users/index", {
                users
            });
        })
        .catch(err => next(err));
});

router.get("/:id", (req, res, next) => {
    let userId = req.params.id;
    User.findById(userId, {
            include: [{
                model: Profile
            }]
        })
        .then(user => {
            res.render("users/show", {
                user
            });
        })
        .catch(err => next(err));
});

module.exports = router;
