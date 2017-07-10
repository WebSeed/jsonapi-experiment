const api = require('jsonapi-server')

const { Joi } = api
const spaceAssignmentsHandler = require('../handlers/spaceAssignments')

api.define({
  resource: 'spaceAssignments',
  handlers: spaceAssignmentsHandler,
  attributes: {
    title: Joi.string().required(),
    startDate: Joi.string().required(), // Joi.date(),
    endDate: Joi.string().required(), // Joi.date()
    space: Joi.one('spaces').required(),
    // photos: jsonApi.Joi.belongsToMany({
    //   resource: 'photos',
    //   as: 'photographer'
    // })
  },
  examples: [
    {
      id: 'space-assignments-a',
      type: 'spaceAssignments',
      title: 'Space Assignments A',
      startDate: '2018-01-01',
      endDate: '2019-01-01',
      space: { type: 'spaces', id: 'spaces-a' },
    },
    {
      id: 'space-assignments-b',
      type: 'spaceAssignments',
      title: 'Space Assignments B',
      startDate: '2018-01-01',
      endDate: '2019-01-01',
      // Same space as above!
      space: { type: 'spaces', id: 'spaces-a' },
    },
  ],
})

// Create table if not exists
if (spaceAssignmentsHandler.populate) {
  spaceAssignmentsHandler.populate((err) => {
    if (err) {
      console.log('Error', err)
    }
  })
}
