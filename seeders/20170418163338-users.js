'use strict';
let db = require('../models');
let faker = require('faker');


module.exports = {
    up: function(queryInterface, Sequelize) {

        let users = [];
        for (let i = 0; i < 50; i++) {
            users.push({
                profileId: i + 1,
                fname: faker.name.firstName(),
                lname: faker.name.lastName(),
                username: `user${i}`,
                email: `user${i}@email.com`
            });
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
