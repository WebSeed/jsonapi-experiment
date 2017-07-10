# JSON API Experiment

An experiment with [jsonapi-server](https://github.com/holidayextras/jsonapi-server)

Uses Express behind the scenes.

Doesn't couple to any one ORM solution.

## [Resources](https://github.com/holidayextras/jsonapi-server/blob/master/documentation/resources.md)

> Think of `resources` as your `routes`

## Handlers

> Think of `handlers` as your `controllers`

> Handlers represent the mechanism that backs a resource

## [Joi](https://github.com/hapijs/joi)

Object schema description language

## Swagger

See [http://localhost:16006/swagger.json](http://localhost:16006/swagger.json)

## MySQL

[jsonapi-store-relationaldb](https://github.com/holidayextras/jsonapi-store-relationaldb)

*Features*

* Search, Find, Create, Delete, Update
* Efficient lookups via appropriate indexes
* Filtering happens at the database layer
* Transactional queries

> ...database migrations are left as an exercise for the user

## Links

* https://martinfowler.com/bliki/OrmHate.html