Promise = require 'bluebird'
{Driver, Collection, Cursor} = require '../index'
Mongo = require 'mongodb'

describe 'The Collection class', ->

  beforeEach (next) ->
    @mongoCollection = null
    MongoDriver = new Driver()
    MongoDriver.configure('default', {})
    MongoDriver.openConnection('default')
    .then (db) =>
      db.collection('test', (err, _collection) =>
        @mongoCollection = _collection
        next()
      )
    .done()

  it 'wraps a MongoDB collection', ->
    collection = new Collection(@mongoCollection)
    expect(collection.instance).to.deep.equal @mongoCollection

  it 'throws an error if the passed collection is not a Mongo Collection instance', ->
    invalidCall = ->
      collection = new Collection({})
    expect(invalidCall).to.throw Error, /Object must be an instance of Mongo Collection/

  it 'has wrapped versions of MongoDB Collection functions which return normal values', (next)->
    @timeout(10000)
    calls = [
      [[{foo: 'bar'}], 'insert',]
      [[{foo: 'bar'}], 'save']
      [[{foo: 'bar'}, { $set: { foo: 'foo' }}], 'update']
      [[{}], 'remove']
      [['foo'], 'distinct']
      [[{}], 'count']
      [[], 'drop']
      [[{foo: 'foo'}, [], { $set: {foo: 'bar'}}], 'findAndModify']
      [[{foo: 'foo'}, []], 'findAndRemove']
      [[{foo: 'bar'}], 'findOne']
      [['foo'], 'createIndex']
      [[{foo: 1}], 'ensureIndex']
      [[{}], 'indexInformation']
      [['foo'], 'dropIndex']
      [[], 'dropAllIndexes']
      [[], 'reIndex']
      [[], 'options']
      [[], 'isCapped']
      [['foo_1'], 'indexExists']
      [[], 'indexes']
      [[], 'stats']
    ]
    queue = []
    parallel = 3
    callPromises = calls.map ([params, fn]) =>
      mustComplete = Math.max(0, queue.length - parallel + 1)
      request = Promise.some(queue, mustComplete).then =>
        sinon.spy(Mongo.Collection.prototype, fn)
        collection = new Collection(@mongoCollection)
        collection[fn].apply(collection, params)
        .catch (err) ->
          # Do nothing on errors
          true
        .finally ->
          expect(Mongo.Collection.prototype[fn]).to.have.been.called
          Mongo.Collection.prototype[fn].restore()
          Promise.resolve(fn)
      queue.push request
      request

    Promise.all(callPromises).then (fnNames) ->
      next()
      ###
      expect(Promise.is(result)).to.equal true
      result.catch (err) ->
        console.log "ERROR: #{fn}", err
      .finally () ->
        count += 1
        console.log count
        if count is fns.length then next()
      ###
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
      expect(Promise.is(result)).to.equal true
      result.then (collection) ->
        expect(collection).to.be.an.instanceof Collection
      .catch (err) ->
        return
      .finally () ->
        expect(Mongo.Collection.prototype[fn]).to.have.been.called
        count += 1
        Mongo.Collection.prototype[fn].restore()
        if count is fns.length then next()
      .done()
      return

  it 'has wrapped versions of MongoDB Collection functions which return a MongoDB Cursor', (next) ->
    fns = [
      'find'
    ]
    args = [
      [{}]
    ]
    count = 0
    fns.forEach (fn, index) =>
      sinon.spy(Mongo.Collection.prototype, fn)
      collection = new Collection(@mongoCollection)
      result = collection[fn].apply collection, args[index]
      expect(result).to.be.an.instanceof Cursor
      expect(Mongo.Collection.prototype[fn]).to.have.been.called
      count += 1
      Mongo.Collection.prototype[fn].restore()
      if count is fns.length then next()
      return
    return
