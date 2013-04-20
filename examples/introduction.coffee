{Driver, Database} = require '../index'
assert = require 'assert'

Driver.configure('test', { hosts: ['127.0.0.1:27017'], database: 'test', options: { w: 1 } })

client = new Database('test')
client.collection('test_insert')
.then (collection) ->
  collection.insert({a:2})
  .then (docs) ->
    collection.count()
  .then (count) ->
    assert(count, 1);
    collection.find()
  .then (cursor) ->
    cursor.toArray();
  .then (results) ->
    assert(results.length, 1);
    assert(results[0].a, 2);
.finally () ->
  client.close()
.done()
