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
