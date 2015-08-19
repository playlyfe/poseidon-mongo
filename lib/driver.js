/*
Driver
======
The `Driver` class maintains multiple database connection configurations.
It also caches open database connections for quick access as **Promise promises** for
easy access and reuse.
*/

var Database, Driver, MongoClient, Promise, connect, _;

MongoClient = require('mongodb').MongoClient;

Database = require('./database');

Promise = require('bluebird');

_ = require('lodash');

connect = Promise.promisify(MongoClient.connect, MongoClient);

Driver = (function() {
  function Driver() {
    this._configuration = {};
    this._connections = {};
    return;
  }

  Driver.prototype.configure = function(connName, connConfig) {
    if (connConfig == null) {
      throw new Error('Configuration object required');
    }
    if (!((connConfig.auth == null) || /.+:.+/.test(connConfig.auth))) {
      throw new Error('Invalid authentication credentials');
    }
    this._configuration[connName] = _.defaults(connConfig, {
      hosts: ['localhost:27017'],
      auth: null,
      database: 'default',
      options: null
    });
  };

  Driver.prototype.openConnection = function(connName) {
    var authString, config, url;
    if (this._configuration[connName] == null) {
      return Promise.reject(new Error('Connection not configured'));
    }
    if (this._connections[connName] != null) {
      return this._connections[connName];
    }
    config = this._configuration[connName];
    if (config.auth != null) {
      authString = "" + config.auth + "@";
    } else {
      authString = '';
    }
    url = "mongodb://" + authString + (config.hosts.join(',')) + "/" + config.database + "?" + (config.authSource ? 'authSource=' + config.authSource : '');
    return this._connections[connName] = connect(url, config.options);
  };

  Driver.prototype.closeConnection = function(connName) {
    var _this = this;
    if (this._connections[connName] == null) {
      return Promise.reject(new Error('Connection does not exist'));
    }
    return this._connections[connName].then(function(db) {
      delete _this._connections[connName];
      return db.close(true);
    });
  };

  Driver.prototype.reset = function() {
    var connConfig, connName, _connections, _ref;
    _connections = [];
    _ref = this._configuration;
    for (connName in _ref) {
      connConfig = _ref[connName];
      if (this._connections[connName] != null) {
        _connections.push(this.closeConnection(connName));
      }
      delete this._configuration[connName];
    }
    return Promise.all(_connections);
  };

  Driver.prototype.shutdown = function() {
    var connConfig, connName, _connections, _ref;
    _connections = [];
    _ref = this._configuration;
    for (connName in _ref) {
      connConfig = _ref[connName];
      if (this._connections[connName] != null) {
        _connections.push(this.closeConnection(connName));
      }
    }
    return Promise.all(_connections);
  };

  return Driver;

})();

module.exports = Driver;
