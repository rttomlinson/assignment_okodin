const express = require("express");
let router = express.Router();
const db = require("../models");
const sequelize = db.sequelize;
const User = db.User;
const Profile = db.Profile;

router.get("/", (req, res, next) => {
  
});

module.exports = router;
