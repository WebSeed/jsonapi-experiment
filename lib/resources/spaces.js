const api = require('jsonapi-server')

const { Joi } = api
const spacesHandler = require('../handlers/spaces')

api.define({
  resource: 'spaces',
  handlers: spacesHandler,
  attributes: {
    title: Joi.string().required(),
    spaceAssignments: Joi.belongsToMany({
      resource: 'spaceAssignments',
      as: 'space',
    }),
  },
  examples: [
    {
      id: 'spaces-a',
      type: 'spaces',
      title: 'Space A',
    },
    {
      id: 'spaces-b',
      type: 'spaces',
      title: 'Space B',
    },
    {
      id: 'spaces-c',
      type: 'spaces',
      title: 'Space C',
    },
  ],
})

// Create table if not exists
if (spacesHandler.populate) {
  spacesHandler.populate((err) => {
    if (err) {
      console.log('Error', err)
    }
  })
}
