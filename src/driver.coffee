###
Driver
======
The `Driver` class maintains multiple database connection configurations.
It also caches open database connections for quick access as **Promise promises** for
easy access and reuse.
###

{MongoClient} = require 'mongodb'
Database = require './database'
Promise = require 'bluebird'
_ = require 'lodash'

connect = Promise.promisify(MongoClient.connect, MongoClient)

class Driver

  constructor: () ->
    @_configuration = {}
    @_connections = {}
    return

  configure: (connName, connConfig) ->
    throw new Error('Configuration object required') unless connConfig?
    throw new Error('Invalid authentication credentials') unless not connConfig.auth? or /.+:.+/.test connConfig.auth
    @_configuration[connName] = _.defaults connConfig, hosts: ['localhost:27017'], auth: null, database: 'default', options: null
    return

  openConnection: (connName) ->
    return Promise.reject new Error('Connection not configured') unless @_configuration[connName]?
    if @_connections[connName]? then return @_connections[connName]
    config = @_configuration[connName]
    if config.auth? then authString = "#{config.auth}@"
    else authString = ''
    url = "mongodb://#{authString}#{config.hosts.join(',')}/#{config.database}?#{if config.authSource then 'authSource='+config.authSource else ''}"
    @_connections[connName] = connect(url, config.options)

  closeConnection: (connName) ->
    return Promise.reject new Error('Connection does not exist') unless @_connections[connName]?
    @_connections[connName]
    .then (db) =>
      delete @_connections[connName]
      db.close(true)

  reset: () ->
    _connections = []
    for connName, connConfig of @_configuration
      if @_connections[connName]? then _connections.push(@closeConnection(connName))
      delete @_configuration[connName]
    Promise.all(_connections)

  shutdown: () ->
    _connections = []
    for connName, connConfig of @_configuration
      if @_connections[connName]? then _connections.push @closeConnection(connName)
    Promise.all _connections

module.exports = Driver
