/*
Poseidon Mongo
==============
The **Poseidon Mongo** module provides convenient low level database access
using **Bluebird promises**.
*/

var BSON, Binary, Code, Collection, Cursor, Database, Double, Driver, Long, MaxKey, ObjectID, Promise, Symbol, Timestamp, _ref;

Driver = require('./driver');

Database = require('./database');

Collection = require('./collection');

Cursor = require('./cursor');

Promise = require('bluebird');

_ref = require('mongodb'), ObjectID = _ref.ObjectID, Binary = _ref.Binary, Code = _ref.Code, BSON = _ref.BSON, Double = _ref.Double, Long = _ref.Long, Timestamp = _ref.Timestamp, MaxKey = _ref.MaxKey, Symbol = _ref.Symbol;

module.exports = {
  Promise: Promise,
  Driver: Driver,
  Database: Database,
  Collection: Collection,
  Cursor: Cursor,
  BSON: BSON,
  ObjectID: ObjectID,
  Binary: Binary,
  Code: Code,
  Double: Double,
  Long: Long,
  Timestamp: Timestamp,
  MaxKey: MaxKey,
  Symbol: Symbol
};
