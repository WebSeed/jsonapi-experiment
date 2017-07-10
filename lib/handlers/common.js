const api = require('jsonapi-server')
const DatabaseHandler = require('jsonapi-store-relationaldb')
const db = require('../db')
const config = require('../config')

const { useInMemoryDb } = config

const handler = useInMemoryDb ? new api.MemoryHandler() : new DatabaseHandler(db)

module.exports = handler
