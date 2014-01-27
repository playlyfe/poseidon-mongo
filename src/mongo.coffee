###
Poseidon Mongo
==============
The **Poseidon Mongo** module provides convenient low level database access
using **Bluebird promises**.
###

Driver = require './driver'
Database = require './database'
Collection = require './collection'
Cursor = require './cursor'
Promise = require 'bluebird'
{ObjectID, Binary, Code, BSON, Double, Long, Timestamp, MaxKey, Symbol} = require 'mongodb'

module.exports =
  Promise: Promise
  Driver: Driver
  Database: Database
  Collection: Collection
  Cursor: Cursor
  BSON: BSON
  ObjectID: ObjectID
  Binary: Binary
  Code: Code
  Double: Double
  Long: Long
  Timestamp: Timestamp
  MaxKey: MaxKey
  Symbol: Symbol
