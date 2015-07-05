Promise = require 'bluebird'
{Driver} =  require '../index'
{MongoClient} = require 'mongodb'

describe 'The Driver class', ->

  beforeEach (next) ->
    Driver.reset()
    .then ->
      next()
    .done()
    return

  it 'has a static internal configuration object', ->
    expect(Driver._configuration).to.deep.equal {}

  it 'has an internal cache of database connections', ->
    expect(Driver._connections).to.deep.equal {}

  describe 'the reset function', ->

    beforeEach (next) ->
      Driver.configure('test', {})
      Driver.openConnection('test')
      .then ->
        next()
      .done()

    it 'resets the driver connections and configuration caches', (next) ->
      Driver.reset()
      .then ->
        expect(Driver._connections).to.deep.equal {}
        expect(Driver._configuration).to.deep.equal {}
        next()
      .done()

    it 'closes all open connections', (next) ->
      sinon.spy(Driver, 'closeConnection')
      Driver.configure('foo', {})
      Driver.openConnection('foo')
      .then ->
        Driver.reset()
      .then ->
        expect(Driver.closeConnection).to.have.been.calledTwice
        next()
      .done()


  describe 'the configure function', ->

    it 'creates a default configuration if nothing is provided', ->
      defaultConfig =
        hosts: ['localhost:27017']
        auth: null
        database: 'default'
        options: null
      Driver.configure('test', {})
      expect(Driver._configuration['test']).to.deep.equal defaultConfig

    it 'saves the given configuration', ->
      config =
        hosts: ['mordor:10000']
        auth: 'sauron:precious'
        database: 'mountdoom'
        options: null
      Driver.configure('mordor', config)
      expect(Driver._configuration['mordor']).to.deep.equal config

    it 'throws an error if the auth format is wrong', ->
      config =
        auth: 'khazadum'
      invalidConfig = ->
        Driver.configure('test', config)
      expect(invalidConfig).to.throw Error, /Invalid authentication credentials/

    it 'throws an error if no configuration is provided', ->
      invalidCall = ->
        Driver.configure('test')
      expect(invalidCall).to.throw Error, /Configuration object required/

  describe 'the openConnection function', ->

    beforeEach ->
      Driver.configure('test', {})

    afterEach ->
      Driver._connections = {}

    it 'calls the MongoClient connect function and caches it', (next) ->
      conn = Driver.openConnection('test')
      expect(Promise.is(conn)).to.equal true
      expect(Driver._connections['test']).to.deep.equal conn
      conn.then ->
        next()
        return
      .done()

    it 'returns the cached connection if it already exists', (next) ->
      Driver.openConnection('test')
      conn = Driver.openConnection('test')
      expect(Promise.is(conn)).to.equal true
      expect(Driver._connections['test']).to.deep.equal conn
      conn.then ->
        next()
        return
      .done()

    it 'throws an error if the connection was not configured', ->
      Driver.openConnection('foo')
      .catch (err) ->
        expect(err.message).to.equal 'Connection not configured'

  describe 'the closeConnection function', ->

    it 'throws an error if the connection does not exist', ->
      Driver.closeConnection('foo')
      .catch (err) ->
        expect(err.message).to.equal 'Connection does not exist'

    it 'deletes the connection from the cache and calls the db close function', (next) ->
      db = null
      Driver.configure('test', {})
      Driver.openConnection('test').then ->
        Driver._connections['test']
      .then (_db) ->
        db = _db
        sinon.spy(_db, 'close')
        Driver.closeConnection('test')
      .then ->
        expect(Driver._connections['test']).to.be.undefined
        expect(db.close).to.have.been.calledWith true
        next()
        return
      .done()

