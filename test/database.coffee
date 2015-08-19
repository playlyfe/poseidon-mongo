Promise = require 'bluebird'
{Driver, Database, Collection, Cursor} = require '../index'
{Db, DBRef} = require 'mongodb'

describe 'The Database class', ->

  beforeEach ->
    @MongoDriver = new Driver()
    @MongoDriver.configure('default', {})
    return

  it 'has an internal connection from the driver cache', ->
    db = new Database(@MongoDriver, 'default')
    expect(db.instance).to.deep.equal @MongoDriver._connections['default']

  it 'has wrapped versions of MongoDB database functions which return normal values', (next) ->
    db = new Database(@MongoDriver, 'default')
    fns = [
      'eval'
      'logout'
      'command'
      'createIndex'
      'ensureIndex'
      'dropIndex'
      'reIndex'
      'indexInformation'
    ]
    args = [
      ['function(){}']
      []
      [{ping: 1}]
      ['test',{a:1}]
      ['test',{a:1}]
      ['test', 'a_1']
      ['test']
      ['test']
    ]
    count = 0
    fns.forEach (fn, index) ->
      sinon.spy(Db.prototype, fn)
      result = db[fn].apply db, args[index]
      expect(Promise.is(result)).to.equal true
      result.finally () ->
        expect(Db.prototype[fn]).to.have.been.called
        count += 1
        Db.prototype[fn].restore()
        if count is fns.length then next()
      .done()
      return

  it 'has wrapped versions of MongoDB Database functions which return a MongoDB Collection', (next) ->
    db = new Database(@MongoDriver, 'default')
    fns = [
      'createCollection'
      'collection'
      'collections'
    ]
    args = [
      ['foo']
      ['foo']
      []
    ]
    count = 0
    fns.forEach (fn, index) ->
      sinon.spy(Db.prototype, fn)
      result = db[fn].apply db, args[index]
      expect(Promise.is(result)).to.equal true
      result.then (collection) ->
        if collection instanceof Array
          for value in collection
            expect(value).to.be.an.instanceof Collection
        else
          expect(collection).to.be.an.instanceof Collection
      .finally () ->
        expect(Db.prototype[fn]).to.have.been.called
        count += 1
        Db.prototype[fn].restore()
        if count is fns.length then next()
      .done()
      return

  it 'has wrapped versions of MongoDB Database functions which return a MongoDB Cursor', (next) ->
    db = new Database(@MongoDriver, 'default')
    fns = [
      'listCollections'
    ]
    args = [
      [{}]
    ]
    next()
    count = 0
    fns.forEach (fn, index) ->
      sinon.spy(Db.prototype, fn)
      result = db[fn].apply db, args[index]
      expect(Promise.is(result)).to.equal true
      result.then (cursor) ->
        expect(cursor).to.be.an.instanceof Cursor
      .finally () ->
        expect(Db.prototype[fn]).to.have.been.called
        count += 1
        Db.prototype[fn].restore()
        if count is fns.length then next()
      .done()
      return
