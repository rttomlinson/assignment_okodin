'use strict';
let db = require('../models');
let voca = require('voca');
let faker = require('faker');
let User = db.User;


module.exports = {
    up: function(queryInterface, Sequelize) {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkInsert('Person', [{
            name: 'John Doe',
            isBetaMember: false
          }], {});
        */
        let users = []
        for (let i = 0; i < 50; i++) {

        }

        return queryInterface.bulkInsert('Users', users);



    },

    down: function(queryInterface, Sequelize) {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('Person', null, {});

        */
        return queryInterface.bulkDelete('Users', null, {}, db.User);

    }
};
