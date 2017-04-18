const express = require('express');
let router = express.Router();
const db = require('../models');
const sequelize = db.sequelize;
const User = db.User;
const Profile = db.Profile;


router.get('/', (req, res, next) => {
    //Grab query parameters
    User.findAll({
            include: [{
                model: Profile
            }]
        })
        .then((users) => {
            res.render('users/index', {
                users
            });
        }).catch(e => {
            next(e);
        });
});
//Query the database
//

module.exports = router;
