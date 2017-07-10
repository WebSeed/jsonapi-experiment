const api = require('jsonapi-server')

const { Joi } = api
const spaceAssignmentsHandler = require('../handlers/spaceAssignments')

api.define({
  resource: 'spaceAssignments',
  handlers: spaceAssignmentsHandler,
  attributes: {
    title: Joi.string().required(),
    startDate: Joi.string().required(), // Joi.date(),
    endDate: Joi.string().required() // Joi.date()
  },
  examples: [
    {
      id: 'aab14844-97e7-401c-98c8-0bd5ec922d93',
      type: 'spaceAssignments',
      title: 'Example title here',
      startDate: '2018-01-01',
      endDate: '2019-01-01'
      // photographer: { type: 'people', id: 'ad3aa89e-9c5b-4ac9-a652-6670f9f27587' }
    }
  ]
})

// Create table if not exists
spaceAssignmentsHandler.populate((err) => {
  if (err) {
    console.log('Error', err)
  }
})
