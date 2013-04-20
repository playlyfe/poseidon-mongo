Collection
==========
The `Collection` class wraps the mongodb class of the same name in a layer of
promise returning functions to facilitate easier programming.


    Mongo = require 'mongodb'
    Cursor = require './cursor'
    poseidon = require 'poseidon'

    class Collection

      constructor: (collection) ->
        throw Error('Object must be an instance of Mongo Collection') unless collection instanceof Mongo.Collection
        @_collection = collection
        [
          'insert'
          'remove'
          'save'
          'update'
          'distinct'
          'count'
          'drop'
          'findAndModify'
          'findAndRemove'
          'findOne'
          'createIndex'
          'ensureIndex'
          'indexInformation'
          'dropIndex'
          'dropAllIndexes'
          'reIndex'
          'mapReduce'
          'group'
          'options'
          'isCapped'
          'indexExists'
          'geoNear'
          'geoHaystackSearch'
          'indexes'
          'aggregate'
          'stats'
        ].forEach (fn) ->
          @[fn] = poseidon.wrap @_collection, fn
          return
        , @
        [
          'rename'
        ].forEach (fn) ->
          @[fn] = poseidon.wrapReturn @_collection, fn, Collection
          return
        , @
        [
          'find'
        ].forEach (fn) ->
          @[fn] = poseidon.wrapReturn @_collection, fn, Cursor
          return
        , @
        return

    module.exports = Collection
