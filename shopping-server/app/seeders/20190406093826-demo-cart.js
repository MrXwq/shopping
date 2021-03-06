'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      'Carts',
      [
        {
          userId: 3,
          productId: 1,
          colorId: 1,
          productNum: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          userId: 3,
          productId: 1,
          colorId: 2,
          productNum: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          userId: 3,
          productId: 1,
          colorId: 3,
          productNum: 10,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Carts', null, {})
  }
}
