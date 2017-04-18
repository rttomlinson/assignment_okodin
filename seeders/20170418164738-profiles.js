'use strict';
let db = require('../models');
let faker = require('faker');

function _randomMarital() {
  const random = Math.floor(Math.random() * 3);
  const marital = ['single', 'dating', 'married'];
  return marital[random];
}

function _randomGender() {
  const random = Math.floor(Math.random() * 3);
  const gender = ['male', 'female', 'pterodactyl'];
  return gender[random];
}

module.exports = {
  up: function (queryInterface, Sequelize) {

    let profiles = []
    for (let i = 0; i < 50; i++) {
      profiles.push({
        userId: i + 1,
        age: Math.floor(13 + Math.random() * 107),
        location: faker.address.city(),
        villagesCaptured: Math.floor(Math.random() * 10),
        occupation: faker.name.jobTitle(),
        marital: _randomMarital(),
        gender: _randomGender()
      });
    }

    return queryInterface.bulkInsert('Profiles', profiles);

  },

  down: function (queryInterface, Sequelize) {

    return queryInterface.bulkDelete('Profiles', null, {}, db.Profile);
  }
};
