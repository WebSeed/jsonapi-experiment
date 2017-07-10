const api = require('jsonapi-server')
const DatabaseHandler = require('jsonapi-store-relationaldb')
const db = require('../db')
const config = require('../config')

const { useInMemoryDb } = config

const create = () => {
  const handler = useInMemoryDb ? new api.MemoryHandler() : new DatabaseHandler(db)
  return handler
}

module.exports = create
