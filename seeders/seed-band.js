'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('bands', [{
      name: 'Tame Impala',
      genre: 'Psych-Rock',
      available_start_time: '17:00:00',
      end_time: '20:00:00'
    }])
  },

  down: async (queryInterface, Sequelize) => {
    // this deletes all data from the bands table
    await queryInterface.bulkDelete('bands', null, {})
  }
}