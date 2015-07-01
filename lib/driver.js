/*
Driver
======
The `Driver` class maintains multiple database connection configurations.
It also caches open database connections for quick access as **Promise promises** for
easy access and reuse.
*/

var Driver, MongoClient, Promise, connect, _;

MongoClient = require('mongodb').MongoClient;

Promise = require('bluebird');

_ = require('lodash');

connect = Promise.promisify(MongoClient.connect, MongoClient);

Driver = (function() {
  function Driver() {}

  Driver._configuration = {};

  Driver._connections = {};

  Driver.configure = function(connName, connConfig) {
    if (connConfig == null) {
      throw new Error('Configuration object required');
    }
    if (!((connConfig.auth == null) || /.+:.+/.test(connConfig.auth))) {
      throw new Error('Invalid authentication credentials');
    }
    Driver._configuration[connName] = _.defaults(connConfig, {
      hosts: ['localhost:27017'],
      auth: null,
      database: 'default',
      options: null
    });
  };

  Driver.openConnection = function(connName) {
    var authString, config, url;
    if (Driver._configuration[connName] == null) {
      return Promise.reject(new Error('Connection not configured'));
    }
    if (Driver._connections[connName] != null) {
      return Driver._connections[connName];
    }
    config = Driver._configuration[connName];
    if (config.auth != null) {
      authString = "" + config.auth + "@";
    } else {
      authString = '';
    }
    url = "mongodb://" + authString + (config.hosts.join(',')) + "/" + config.database + "?" + (config.authSource ? 'authSource=' + config.authSource : '');
    return Driver._connections[connName] = connect(url, config.options);
  };

  Driver.closeConnection = function(connName) {
    if (Driver._connections[connName] == null) {
      return Promise.reject(new Error('Connection does not exist'));
    }
    return Driver._connections[connName].then(function(db) {
      delete Driver._connections[connName];
      return db.close(true);
    });
  };

  Driver.reset = function() {
    var connConfig, connName, _connections, _ref;
    _connections = [];
    _ref = Driver._configuration;
    for (connName in _ref) {
      connConfig = _ref[connName];
      if (Driver._connections[connName] != null) {
        _connections.push(Driver.closeConnection(connName));
      }
      delete Driver._configuration[connName];
    }
    return Promise.all(_connections);
  };

  Driver.shutdown = function() {
    var connConfig, connName, _connections, _ref;
    _connections = [];
    _ref = Driver._configuration;
    for (connName in _ref) {
      connConfig = _ref[connName];
      if (Driver._connections[connName] != null) {
        _connections.push(Driver.closeConnection(connName));
      }
    }
    return Promise.all(_connections);
  };

  return Driver;

})();

module.exports = Driver;
