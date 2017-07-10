const api = require('jsonapi-server')
const { Joi } = api
const spaceAssignmentsHandler = require('../handlers/spaceAssignments')

api.define({
  resource: 'spaceAssignments',
  handlers: spaceAssignmentsHandler,
  attributes: {
    title: Joi.string(),
    startDate: Joi.date(),
    endDate: Joi.date()
  }
})
