const express = require('express');
let router = express.Router();
const h = require('../helpers').registered;
const db = require('../models');
const User = db.User;

// New
  var onNew = (req, res) => {
    if (req.session.currentUser) {
      res.redirect(h.usersPath());
    } else {
      res.render('sessions/new');
    }
  };
  router.get('/', onNew);
  router.get('/login', onNew);


  // Create
  router.post('/login', (req, res) => {
    User.findOne({
      username: req.body.username,
      email: req.body.email
    })
      .then((user) => {
        if (user) {
          req.session.currentUser = {
            username: user.username,
            email: user.email,
            id: user.id
          };
          res.redirect(h.usersPath());
        } else {
          res.redirect('/login');
        }
      })
      .catch((e) => res.status(500).send(e.stack));
  });

  // Destroy
  var onDestroy = (req, res) => {
    req.session.currentUser = null;
    res.redirect('/login');
  };

  router.get('/logout', onDestroy);
  router.delete('/logout', onDestroy);


module.exports = router;
