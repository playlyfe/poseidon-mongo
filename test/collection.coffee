Q = require 'q'
{Driver, Collection, Cursor} = require '../index'
Mongo = require 'mongodb'

describe 'The Collection class', ->

  beforeEach (next) ->
    self = @
    @mongoCollection = null
    Driver.configure('default', {})
    Driver.openConnection('default')
    .then (db) ->
      db.collection('test', (err, _collection) ->
        self.mongoCollection = _collection
        next()
      )
    .done()

  it 'wraps a MongoDB collection', ->
    collection = new Collection(@mongoCollection)
    expect(collection._collection).to.deep.equal @mongoCollection

  it 'throws an error if the passed collection is not a Mongo Collection instance', ->
    invalidCall = ->
      collection = new Collection({})
    expect(invalidCall).to.throw Error, /Object must be an instance of Mongo Collection/

  it 'has wrapped versions of MongoDB Collection functions which return normal values', (next)->
    collection = new Collection(@mongoCollection)
    fns = [
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
      'options'
      'isCapped'
      'indexExists'
      'indexes'
      'stats'
    ]
    args = [
      [{foo: 'bar'}]
      []
      [{foo: 'bar'}]
      [{foo: 'bar'}, { $set: { foo: 'foo' }}]
      ['foo']
      []
      []
      [{foo: 'foo'}, [], { $set: {foo: 'bar'}}]
      [{foo: 'foo'}, []]
      [{foo: 'bar'}]
      ['foo']
      [{foo: 1}]
      []
      ['foo']
      []
      []
      []
      []
      ['foo_1']
      []
      []
    ]
    count = 0
    fns.forEach (fn, index) ->
      sinon.spy(Mongo.Collection.prototype, fn)
      result = collection[fn].apply collection, args[index]
      expect(Q.isPromise(result)).to.equal true
      result.finally () ->
        expect(Mongo.Collection.prototype[fn]).to.have.been.called
        count += 1
        Mongo.Collection.prototype[fn].restore()
        if count is fns.length then next()
      .done()
      return

  it 'has wrapped versions of MongoDB Collection functions which return a MongoDB Collection', (next) ->
    collection = new Collection(@mongoCollection)
    fns = [
      'rename'
    ]
    args = [
      ['bar']
    ]
    count = 0
    fns.forEach (fn, index) ->
      sinon.spy(Mongo.Collection.prototype, fn)
      result = collection[fn].apply collection, args[index]
      expect(Q.isPromise(result)).to.equal true
      result.then (collection) ->
        expect(collection).to.be.an.instanceof Collection
      .fail (err) ->
        return
      .finally () ->
        expect(Mongo.Collection.prototype[fn]).to.have.been.called
        count += 1
        Mongo.Collection.prototype[fn].restore()
        if count is fns.length then next()
      .done()
      return

  it 'has wrapped versions of MongoDB Collection functions which return a MongoDB Cursor', (next) ->
    collection = new Collection(@mongoCollection)
    fns = [
      'find'
    ]
    args = [
      [{}]
    ]
    count = 0
    fns.forEach (fn, index) ->
      sinon.spy(Mongo.Collection.prototype, fn)
      result = collection[fn].apply collection, args[index]
      expect(Q.isPromise(result)).to.equal true
      result.then (cursor) ->
        expect(cursor).to.be.an.instanceof Cursor
      .finally () ->
        expect(Mongo.Collection.prototype[fn]).to.have.been.called
        count += 1
        Mongo.Collection.prototype[fn].restore()
        if count is fns.length then next()
      .done()
      return
