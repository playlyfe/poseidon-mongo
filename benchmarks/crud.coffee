{Driver, Database} = require '../index'
MongoClient = require('mongodb').MongoClient
Benchmark = require 'benchmark'
MongoDriver = new Driver()
suite = new Benchmark.Suite()

nativeDb = null

nativeMongoDB = (deferred) ->
  nativeDb.collection('test', (err, collection) ->
    collection.insert({ _id: 'foo' }, ->
      collection.findOne({ _id: 'foo' }, ->
        collection.update({ _id: 'foo' }, { $set: { bar: true } }, ->
          collection.remove({ _id: 'foo'}, ->
            deferred.resolve()
          )
        )
      )
    )
  )

poseidonMongoDB = (deferred) ->
  poseidonDb = new Database(MongoDriver, 'default')
  poseidonDb.collection('test')
  .then (collection) ->
    collection.insert({ _id: 'foo' })
    .then ->
      collection.findOne({ _id: 'foo' })
    .then ->
      collection.update({ _id: 'foo' }, { $set: { bar: true } })
    .then ->
      collection.remove({ _id: 'foo' })
    .then ->
      deferred.resolve()

MongoClient.connect 'mongodb://127.0.0.1:27017/test', (err, db) ->
  if err then throw err;
  nativeDb = db
  MongoDriver.configure('default', {})
  MongoDriver.openConnection('default')
  .then ->
    suite
    .add('Native MongoDB', { fn: nativeMongoDB, defer: true })
    .add('Poseidon MongoDB', { fn: poseidonMongoDB, defer: true })
    .on('cycle', (event) ->
      console.log(String(event.target));
    )
    .on('complete', () ->
      console.log('Fastest is ' + this.filter('fastest').pluck('name'));
      MongoDriver.shutdown()
      nativeDb.close()
    )
    suite.run()
