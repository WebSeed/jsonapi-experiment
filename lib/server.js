const api = require('jsonapi-server')

const loadResources = () => {
  require('./resources/spaceAssignments')
}

api.setConfig({
  protocol: 'http',
  hostname: 'localhost',
  port: 16006,
  swagger: {
    title: 'JSON API Example Swagger',
    version: '1.0.0',
    description: 'This is the API description block that shows up in the swagger.json',
    contact: {
      name: 'Test',
      email: 'test@example.com'
    }
  },
  meta: {
    description: 'This block shows up in the root node of every payload'
  }
})

loadResources()

api.start()