Promise = require 'bluebird'
{Driver} =  require '../index'
{MongoClient} = require 'mongodb'

describe 'The Driver class', ->

  beforeEach (next) ->
    @MongoDriver = new Driver()
    @MongoDriver.reset()
    .then ->
      next()
    .done()
    return

  it 'has a static internal configuration object', ->
    expect(@MongoDriver._configuration).to.deep.equal {}

  it 'has an internal cache of database connections', ->
    expect(@MongoDriver._connections).to.deep.equal {}

  describe 'the reset function', ->

    beforeEach (next) ->
      @MongoDriver.configure('test', {})
      @MongoDriver.openConnection('test')
      .then ->
        next()
      .done()

    it 'resets the driver connections and configuration caches', (next) ->
      @MongoDriver.reset()
      .then =>
        expect(@MongoDriver._connections).to.deep.equal {}
        expect(@MongoDriver._configuration).to.deep.equal {}
        next()
      .done()

    it 'closes all open connections', (next) ->
      sinon.spy(@MongoDriver, 'closeConnection')
      @MongoDriver.configure('foo', {})
      @MongoDriver.openConnection('foo')
      .then =>
        @MongoDriver.reset()
      .then =>
        expect(@MongoDriver.closeConnection).to.have.been.calledTwice
        next()
      .done()


  describe 'the configure function', ->

    it 'creates a default configuration if nothing is provided', ->
      defaultConfig =
        hosts: ['localhost:27017']
        auth: null
        database: 'default'
        options: null
      @MongoDriver.configure('test', {})
      expect(@MongoDriver._configuration['test']).to.deep.equal defaultConfig

    it 'saves the given configuration', ->
      config =
        hosts: ['mordor:10000']
        auth: 'sauron:precious'
        database: 'mountdoom'
        options: null
      @MongoDriver.configure('mordor', config)
      expect(@MongoDriver._configuration['mordor']).to.deep.equal config

    it 'throws an error if the auth format is wrong', ->
      config =
        auth: 'khazadum'
      invalidConfig = =>
        @MongoDriver.configure('test', config)
      expect(invalidConfig).to.throw Error, /Invalid authentication credentials/

    it 'throws an error if no configuration is provided', ->
      invalidCall = =>
        @MongoDriver.configure('test')
      expect(invalidCall).to.throw Error, /Configuration object required/

  describe 'the openConnection function', ->

    beforeEach ->
      @MongoDriver.configure('test', {})

    afterEach ->
      @MongoDriver._connections = {}

    it 'calls the MongoClient connect function and caches it', (next) ->
      conn = @MongoDriver.openConnection('test')
      expect(Promise.is(conn)).to.equal true
      expect(@MongoDriver._connections['test']).to.deep.equal conn
      conn.then ->
        next()
        return
      .done()

    it 'returns the cached connection if it already exists', (next) ->
      @MongoDriver.openConnection('test')
      conn = @MongoDriver.openConnection('test')
      expect(Promise.is(conn)).to.equal true
      expect(@MongoDriver._connections['test']).to.deep.equal conn
      conn.then ->
        next()
        return
      .done()

    it 'throws an error if the connection was not configured', ->
      @MongoDriver.openConnection('foo')
      .catch (err) ->
        expect(err.message).to.equal 'Connection not configured'

  describe 'the closeConnection function', ->

    it 'throws an error if the connection does not exist', ->
      @MongoDriver.closeConnection('foo')
      .catch (err) ->
        expect(err.message).to.equal 'Connection does not exist'

    it 'deletes the connection from the cache and calls the db close function', (next) ->
      db = null
      @MongoDriver.configure('test', {})
      @MongoDriver.openConnection('test').then =>
        @MongoDriver._connections['test']
      .then (_db) =>
        db = _db
        sinon.spy(_db, 'close')
        @MongoDriver.closeConnection('test')
      .then =>
        expect(@MongoDriver._connections['test']).to.be.undefined
        expect(db.close).to.have.been.calledWith true
        next()
        return
      .done()

