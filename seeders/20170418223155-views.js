'use strict';
let db = require('../models');


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

        let views = []
        for (let i = 2; i < 50; i++) {
            views.push({
                viewerId: i,
                vieweeId: 1

            });
        }

        return queryInterface.bulkInsert('Views', views);
    },

    down: function(queryInterface, Sequelize) {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('Person', null, {});
        */
        return queryInterface.bulkDelete('Views', null, {}, db.View);

    }
};
