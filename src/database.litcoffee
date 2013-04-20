Database
========
A `Database` instance represents an open connection to a MongoDB that was
previously configured using the `Driver`.

    Driver = require './driver'
    Collection = require './collection'
    Cursor = require './cursor'
    poseidon = require 'poseidon'

    class Database

      constructor: (connName) ->
        @_connection = Driver.openConnection connName
        [
          'db'
          'collectionNames'
          'eval'
          'dereference'
          'logout'
          'authenticate'
          'addUser'
          'removeUser'
          'command'
          'dropCollection'
          'lastError'
          'previousErrors'
          'resetErrorHistory'
          'createIndex'
          'ensureIndex'
          'cursorInfo'
          'dropIndex'
          'reIndex'
          'indexInformation'
          'dropDatabase'
          'stats'
          'close'
        ].forEach (fn) ->
          @[fn] = poseidon.wrapPromise @_connection, fn
          return
        , @
        [
          'collection'
          'collections'
          'createCollection'
          'renameCollection'
        ].forEach (fn) ->
          @[fn] = poseidon.wrapPromiseReturn @_connection, fn, Collection
          return
        , @
        [
          'collectionsInfo'
        ].forEach (fn) ->
          @[fn] = poseidon.wrapPromiseReturn @_connection, fn, Cursor
          return
        , @
        return

    module.exports = Database
