const express = require("express");
let router = express.Router();
const db = require("../models");
const sequelize = db.sequelize;
const User = db.User;
const Profile = db.Profile;
const View = db.View;

router.get("/", (req, res, next) => {
    let userId = req.session.currentUser.id;
    View.findAll({
        group: '"viewerId"',
        attributes: ['viewerId', [sequelize.fn('COUNT', 'viewerId'), 'views']],
        where: {
            vieweeId: userId
        }
    }).then((data) => {
        let viewers = data.map((viewer) => {
            return viewer.dataValues;
        });
        res.render('views/index', {
            viewers
        });


    });



});

module.exports = router;
