Cursor
======
The `Cursor` class wraps the mongodb class of the same name in a layer of
promise returning functions to facilitate easier programmign.

    Mongo = require 'mongodb'
    poseidon = require 'poseidon'

    class Cursor

      constructor: (cursor) ->
        throw Error('Object must be an instance of Mongo Cursor') unless cursor instanceof Mongo.Cursor
        @_cursor = cursor
        [
          'toArray'
          'each'
          'count'
          'nextObject'
          'explain'
          'close'
        ].forEach (fn) ->
          @[fn] = poseidon.wrap @_cursor, fn
          return
        , @
        [
          'stream'
          'isClosed'
        ].forEach (fn) ->
          @[fn] = (args...) ->
            @_cursor[fn](args...)
          return
        , @
        [
          'rewind'
          'sort'
          'setReadPreference'
          'skip'
          'limit'
          'batchSize'
        ].forEach (fn) ->
          @[fn] = (args...) ->
            @_cursor[fn](args...)
            @
          return
        , @
        return

    module.exports = Cursor
