{Driver, Database} = require '../index'

Driver.configure('default', {})
db = new Database('default')
db.collection('test')
.then (collection) ->
  collection.insert({ foo: 'bar' })
  .then ->
    collection.find({})
  .then (cursor) ->
    cursor.toArray()
  .then (docs) ->
    console.log docs
    collection.remove({})
  .then ->
    collection.find({})
  .then (cursor) ->
    cursor.toArray()
  .then (docs) ->
    console.log docs
.then ->
  db.collection('foo')
.then (collection) ->
  collection.insert({ bar: 'foo'})
  .then ->
    collection.find({})
  .then (cursor) ->
    cursor.toArray()
  .then (docs) ->
    console.log docs
    collection.remove({})
.finally ->
  db.close()
.fail (err) ->
  console.error err
.done()
