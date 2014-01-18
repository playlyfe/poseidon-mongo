{Promise} = require 'poseidon'
{Driver, Cursor} = require '../index'
Mongo = require 'mongodb'

describe 'The Cursor class', ->

  beforeEach (next) ->
    self = @
    @mongoCursor = null
    Driver.configure('default', {})
    Driver.openConnection('default')
    .then (db) ->
      db.collection('test', (err, _collection) ->
        _collection.find({}, (err, _cursor) ->
          self.mongoCursor = _cursor
          next()
        )
      )
    .done()

  it 'wraps a MongoDB cursor', ->
    cursor = new Cursor(@mongoCursor)
    expect(cursor._cursor).to.deep.equal @mongoCursor

  it 'throws an error if the passed cursor is not a Mongo Cursor instance', ->
    invalidCall = ->
      cursor = new Cursor({})
    expect(invalidCall).to.throw Error, /Object must be an instance of Mongo Cursor/

  it 'has wrapped versions of MongoDB Cursor functions which return normal values', (next)->
    cursor = new Cursor(@mongoCursor)
    fns = [
      'toArray'
      'each'
      'count'
      'nextObject'
      'explain'
      'close'
    ]
    args = [
      []
      []
      []
      []
      []
    ]
    count = 0
    fns.forEach (fn, index) ->
      sinon.spy(Mongo.Cursor.prototype, fn)
      result = cursor[fn].apply cursor, args[index]
      expect(Promise.is(result)).to.equal true
      result
      .catch () ->
        return
      .finally () ->
        expect(Mongo.Cursor.prototype[fn]).to.have.been.called
        count += 1
        Mongo.Cursor.prototype[fn].restore()
        if count is fns.length then next()
      .done()
      return

  it 'has wrapped versions of MongoDB Cursor functions which are synchronous', ->
    cursor = new Cursor(@mongoCursor)
    fns = [
      'stream'
      'isClosed'
    ]
    args = [
      []
      []
    ]
    count = 0
    fns.forEach (fn, index) ->
      sinon.spy(Mongo.Cursor.prototype, fn)
      result = cursor[fn].apply cursor, args[index]
      expect(Promise.is(result)).to.equal false
      expect(Mongo.Cursor.prototype[fn]).to.have.been.called
      Mongo.Cursor.prototype[fn].restore()
      return

  it 'has wrapped versions of MongoDB Cursor functions which are synchronous and chainable', ->
    cursor = new Cursor(@mongoCursor)
    fns = [
      'rewind'
      'sort'
      'setReadPreference'
      'skip'
      'limit'
      'batchSize'
    ]
    args = [
      []
      []
      []
      [1]
      [1]
      [1]
    ]
    count = 0
    fns.forEach (fn, index) ->
      sinon.spy(Mongo.Cursor.prototype, fn)
      result = cursor[fn].apply cursor, args[index]
      expect(Promise.is(result)).to.equal false
      expect(result).to.deep.equal cursor
      expect(Mongo.Cursor.prototype[fn]).to.have.been.called
      Mongo.Cursor.prototype[fn].restore()
      return
