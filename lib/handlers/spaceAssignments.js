const api = require('jsonapi-server')
const Store = require('jsonapi-store-relationaldb')
const db = require('../db')

// const handler = new MemoryHandler()
// handler.delete = null

const config = Object.assign({ dialect: 'mysql' }, db)
const handler = new Store(config)

module.exports = handler
