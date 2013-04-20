Driver
======
The `Driver` class maintains multiple database connection configurations.
It also caches open database connections for quick access as **Q promises** for
easy access and reuse.

    {MongoClient} = require 'mongodb'
    Q = require 'q'
    _ = require 'underscore'

    class Driver
      @_configuration: {}
      @_connections: {}
      @configure: (connName, connConfig) ->
        throw new Error('Configuration object required') unless connConfig?
        throw new Error('Invalid authentication credentials') unless not connConfig.auth? or /.+:.+/.test connConfig.auth
        @_configuration[connName] = _.defaults connConfig, hosts: ['localhost:27017'], auth: null, database: 'default', options: null
        return

      @openConnection: (connName) ->
        throw Error('Connection not configured') unless @_configuration[connName]?
        if @_connections[connName]? then return @_connections[connName]
        config = @_configuration[connName]
        if config.auth? then authString = "#{config.auth}@"
        else authString = ''
        url = "mongodb://#{authString}#{config.hosts.join(',')}/#{config.database}"
        @_connections[connName] = Q.ninvoke MongoClient, 'connect', url, config.options

      @closeConnection: (connName) ->
        throw Error('Connection does not exist') unless @_connections[connName]?
        self = @
        _result = Q.defer()
        @_connections[connName].then (db) ->
          Q.ninvoke(db, 'close', true)
        .then ->
          delete self._connections[connName]
          _result.resolve()
          return
        , (err) ->
          _result.reject err
          return
        .done()
        _result.promise

      @reset: () ->
        _connections = []
        for connName, connConfig of @_configuration
          if @_connections[connName]? then _connections.push @closeConnection(connName)
          delete @_configuration[connName]
        Q.all _connections

    module.exports = Driver
