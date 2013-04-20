Poseidon Mongo
==============

Poseidon Mongo provides a promise layer around the Node Native MongoDB driver
with the help of the Poseidon library.

Install
-------
To get started simply run

    npm install poseidon-mongo

Introduction
------------
Compare the example below to the [original introduction](https://github.com/mongodb/node-mongodb-native#introduction)
 for the Node MongoDB Native Driver.

### Javascript

```javascript
Mongo = require('../index.js');
Driver = Mongo.Driver;
Database = Mongo.Database;
assert = require('assert');
Driver.configure('test', { hosts: ['127.0.0.1:27017'], database: 'test', options: { w: 1 } });

client = new Database('test');
client.collection('test_insert')
.then(function(collection){
  return collection.insert({a:2})
  .then(function(docs){
    return collection.count();
  }).then(function(count){
    assert(count, 1);
    return collection.find();
  }).then(function(cursor){
    return cursor.toArray();
  }).then(function(results){
    assert(results.length, 1);
    assert(results[0].a, 2);
  })
}).finally(function(){
  client.close();
}).done();
```

### Coffeescript
It get even better with Jeremy Ashkenas' [Coffescript](http://coffeescript.org/).

```coffee
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
```

API
---
The API for poseidon Mongo contains the complete API for the Node MongoDB Native
driver's **Db**, **Collection** and **Cursor** classes.

### Driver
The driver class provides for a easy management and configuration of databases
through your entire application.

#### Driver.configure(connection, configuration)
Configures a connection using the given configuration. The possible
configuration parameters are given below:

| Parameter     | Description                                                                                                                                           |
| :-----------: |-------------------------------------------------------------------------------------------------------------------------------------------------------|
| auth          | An authorization string of the format `<user>:<pass>`. Eg: 'foo:bar'                                                                                  |
| database      | The database name                                                                                                                                     |
| hosts         | An array of hosts to which you wish to connect                                                                                                        |
| options       | Any additional options. Find the full list of options [here](http://mongodb.github.io/node-mongodb-native/api-generated/mongoclient.html#constructor) |

#### Driver.openConnection(connection)
Open a previously configured connection and cache it for future reuse.

#### Driver.closeConnection(connection)
Close a connection and remove it from the cache.

#### Driver.reset()
Close all open connections and delete all configurations.

### Database
The following functions are available. For detailed interface information check
the [Node MongoDB Native Documentation](http://mongodb.github.io/node-mongodb-native/api-generated/db.html)

  * `addUser`
  * `authenticate`
  * `close`
  * `collection`
  * `collectionNames`
  * `collections`
  * `collectionsInfo`
  * `command`
  * `createCollection`
  * `createIndex`
  * `cursorInfo`
  * `db`
  * `dereference`
  * `dropCollection`
  * `dropDatabase`
  * `dropIndex`
  * `ensureIndex`
  * `eval`
  * `indexInformation`
  * `lastError`
  * `logout`
  * `previousErrors`
  * `reIndex`
  * `removeUser`
  * `renameCollection`
  * `resetErrorHistory`
  * `stats`

### Collection
The following functions are available. For detailed interface information check
the [Node MongoDB Native Documentation](http://mongodb.github.io/node-mongodb-native/api-generated/collection.html)

  * `aggregate`
  * `count`
  * `createIndex`
  * `distinct`
  * `drop`
  * `dropAllIndexes`
  * `dropIndex`
  * `ensureIndex`
  * `find`
  * `findAndModify`
  * `findAndRemove`
  * `findOne`
  * `geoHaystackSearch`
  * `geoNear`
  * `group`
  * `indexes`
  * `indexExists`
  * `indexInformation`
  * `insert`
  * `isCapped`
  * `mapReduce`
  * `options`
  * `reIndex`
  * `remove`
  * `rename`
  * `save`
  * `stats`
  * `update`

### Cursor
The following functions are available. For detailed interface information check
the [Node MongoDB Native Documentation](http://mongodb.github.io/node-mongodb-native/api-generated/cursor.html)

  * `batchSize`
  * `close`
  * `count`
  * `each`
  * `explain`
  * `isClosed`
  * `limit`
  * `nextObject`
  * `rewind`
  * `setReadPreference`
  * `skip`
  * `sort`
  * `stream`
  * `toArray`

License
-------
[The MIT License](http://opensource.org/licenses/MIT)

Copyright(c) 2013-2014, Playlyfe Technologies, developers@playlyfe.com, http://dev.playlyfe.com/
