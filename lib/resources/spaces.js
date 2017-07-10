const api = require('jsonapi-server')

const { Joi } = api
const spacesHandler = require('../handlers/spaces')

api.define({
  resource: 'spaces',
  handlers: spacesHandler,
  attributes: {
    title: Joi.string().required()
    // startDate: Joi.string().required(), // Joi.date(),
    // endDate: Joi.string().required(), // Joi.date()
  },
  examples: [
    {
      id: 'aab14844-97e7-401c-98c8-0bd5ec922d93',
      type: 'spaces'
      // title: 'Example title here',
      // startDate: '2018-01-01',
      // endDate: '2019-01-01'
      // photographer: { type: 'people', id: 'ad3aa89e-9c5b-4ac9-a652-6670f9f27587' }
    }
  ]
})

// Create table if not exists
spacesHandler.populate((err) => {
  if (err) {
    console.log('Error', err)
  }
})
