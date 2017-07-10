const api = require('jsonapi-server')

const loadResources = () => {
  // TODO: would be nice not to have to do this...
  /* eslint-disable global-require */
  require('./resources/spaceAssignments')
  require('./resources/spaces')
  /* eslint-enable global-require */
}

api.onUncaughtException((request, error) => {
  console.log('Something hit the fan...')
  console.error(error)
})

api.authenticate((request, callback) => {
  // If you callback with an error, the client will receive a HTTP 401 Unauthorised
  if (request.headers.blockme) {
    return callback('Fail')
  }

  // If you callback with no error, the request will continue onwards
  return callback()
})

api.setConfig({
  // router: null // Express router to bind to instead of building a new Express server
  protocol: 'http', // https
  hostname: 'localhost',
  port: 16006,
  // tls: {
  //   cert: fs.readFileSync('server.crt'),
  //   key: fs.readFileSync('server.key')
  //   passphrase: 'pass'
  // },
  swagger: {
    title: 'JSON API Example Swagger',
    version: '1.0.0',
    description: 'This is the API description block that shows up in the swagger.json',
    contact: {
      name: 'Test',
      email: 'test@example.com',
    },
  },
  meta: () => ({
    description: 'This block shows up in the root node of every payload',
    timestamp: new Date(),
  }),
})

// (new Store()).populate()

loadResources()

// Inject Express middleware (not recommended)
// const app = api.getExpressServer()
// app.use(someMiddleware)

api.start()
