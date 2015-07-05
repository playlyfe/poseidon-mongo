var Promise = require('bluebird');
var Driver = require('./driver');
var Collection = require('./collection');
var Cursor = require('./cursor');
function Database(connectionName) {
    this.connectionName = connectionName;
    this.instance = Driver.openConnection(connectionName);
    return;
}
Database.prototype.db = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.catch(function (err) {
        deferred.reject(err);
        return deferred.promise;
    }).then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                if (arguments.length === 1 || arguments[1] == null) {
                    deferred.reject(arguments[0]);
                } else {
                    deferred.reject(Array.prototype.slice.call(arguments, 0));
                }
            } else {
                switch (arguments.length) {
                case 0:
                    deferred.resolve();
                    break;
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(Array.prototype.slice.call(null, arguments, 1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.db(callback);
            break;
        case 1:
            instanceValue.db(args[0], callback);
            break;
        case 2:
            instanceValue.db(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.db(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.db(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.db(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.db.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Database.prototype.listCollections = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.catch(function (err) {
        deferred.reject(err);
        return deferred.promise;
    }).then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                if (arguments.length === 1 || arguments[1] == null) {
                    deferred.reject(arguments[0]);
                } else {
                    deferred.reject(Array.prototype.slice.call(arguments, 0));
                }
            } else {
                switch (arguments.length) {
                case 0:
                    deferred.resolve();
                    break;
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(Array.prototype.slice.call(null, arguments, 1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.listCollections(callback);
            break;
        case 1:
            instanceValue.listCollections(args[0], callback);
            break;
        case 2:
            instanceValue.listCollections(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.listCollections(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.listCollections(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.listCollections(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.listCollections.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Database.prototype.eval = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.catch(function (err) {
        deferred.reject(err);
        return deferred.promise;
    }).then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                if (arguments.length === 1 || arguments[1] == null) {
                    deferred.reject(arguments[0]);
                } else {
                    deferred.reject(Array.prototype.slice.call(arguments, 0));
                }
            } else {
                switch (arguments.length) {
                case 0:
                    deferred.resolve();
                    break;
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(Array.prototype.slice.call(null, arguments, 1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.eval(callback);
            break;
        case 1:
            instanceValue.eval(args[0], callback);
            break;
        case 2:
            instanceValue.eval(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.eval(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.eval(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.eval(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.eval.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Database.prototype.logout = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.catch(function (err) {
        deferred.reject(err);
        return deferred.promise;
    }).then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                if (arguments.length === 1 || arguments[1] == null) {
                    deferred.reject(arguments[0]);
                } else {
                    deferred.reject(Array.prototype.slice.call(arguments, 0));
                }
            } else {
                switch (arguments.length) {
                case 0:
                    deferred.resolve();
                    break;
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(Array.prototype.slice.call(null, arguments, 1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.logout(callback);
            break;
        case 1:
            instanceValue.logout(args[0], callback);
            break;
        case 2:
            instanceValue.logout(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.logout(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.logout(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.logout(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.logout.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Database.prototype.authenticate = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.catch(function (err) {
        deferred.reject(err);
        return deferred.promise;
    }).then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                if (arguments.length === 1 || arguments[1] == null) {
                    deferred.reject(arguments[0]);
                } else {
                    deferred.reject(Array.prototype.slice.call(arguments, 0));
                }
            } else {
                switch (arguments.length) {
                case 0:
                    deferred.resolve();
                    break;
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(Array.prototype.slice.call(null, arguments, 1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.authenticate(callback);
            break;
        case 1:
            instanceValue.authenticate(args[0], callback);
            break;
        case 2:
            instanceValue.authenticate(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.authenticate(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.authenticate(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.authenticate(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.authenticate.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Database.prototype.addUser = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.catch(function (err) {
        deferred.reject(err);
        return deferred.promise;
    }).then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                if (arguments.length === 1 || arguments[1] == null) {
                    deferred.reject(arguments[0]);
                } else {
                    deferred.reject(Array.prototype.slice.call(arguments, 0));
                }
            } else {
                switch (arguments.length) {
                case 0:
                    deferred.resolve();
                    break;
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(Array.prototype.slice.call(null, arguments, 1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.addUser(callback);
            break;
        case 1:
            instanceValue.addUser(args[0], callback);
            break;
        case 2:
            instanceValue.addUser(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.addUser(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.addUser(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.addUser(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.addUser.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Database.prototype.removeUser = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.catch(function (err) {
        deferred.reject(err);
        return deferred.promise;
    }).then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                if (arguments.length === 1 || arguments[1] == null) {
                    deferred.reject(arguments[0]);
                } else {
                    deferred.reject(Array.prototype.slice.call(arguments, 0));
                }
            } else {
                switch (arguments.length) {
                case 0:
                    deferred.resolve();
                    break;
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(Array.prototype.slice.call(null, arguments, 1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.removeUser(callback);
            break;
        case 1:
            instanceValue.removeUser(args[0], callback);
            break;
        case 2:
            instanceValue.removeUser(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.removeUser(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.removeUser(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.removeUser(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.removeUser.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Database.prototype.command = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.catch(function (err) {
        deferred.reject(err);
        return deferred.promise;
    }).then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                if (arguments.length === 1 || arguments[1] == null) {
                    deferred.reject(arguments[0]);
                } else {
                    deferred.reject(Array.prototype.slice.call(arguments, 0));
                }
            } else {
                switch (arguments.length) {
                case 0:
                    deferred.resolve();
                    break;
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(Array.prototype.slice.call(null, arguments, 1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.command(callback);
            break;
        case 1:
            instanceValue.command(args[0], callback);
            break;
        case 2:
            instanceValue.command(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.command(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.command(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.command(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.command.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Database.prototype.dropCollection = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.catch(function (err) {
        deferred.reject(err);
        return deferred.promise;
    }).then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                if (arguments.length === 1 || arguments[1] == null) {
                    deferred.reject(arguments[0]);
                } else {
                    deferred.reject(Array.prototype.slice.call(arguments, 0));
                }
            } else {
                switch (arguments.length) {
                case 0:
                    deferred.resolve();
                    break;
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(Array.prototype.slice.call(null, arguments, 1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.dropCollection(callback);
            break;
        case 1:
            instanceValue.dropCollection(args[0], callback);
            break;
        case 2:
            instanceValue.dropCollection(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.dropCollection(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.dropCollection(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.dropCollection(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.dropCollection.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Database.prototype.lastError = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.catch(function (err) {
        deferred.reject(err);
        return deferred.promise;
    }).then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                if (arguments.length === 1 || arguments[1] == null) {
                    deferred.reject(arguments[0]);
                } else {
                    deferred.reject(Array.prototype.slice.call(arguments, 0));
                }
            } else {
                switch (arguments.length) {
                case 0:
                    deferred.resolve();
                    break;
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(Array.prototype.slice.call(null, arguments, 1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.lastError(callback);
            break;
        case 1:
            instanceValue.lastError(args[0], callback);
            break;
        case 2:
            instanceValue.lastError(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.lastError(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.lastError(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.lastError(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.lastError.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Database.prototype.previousErrors = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.catch(function (err) {
        deferred.reject(err);
        return deferred.promise;
    }).then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                if (arguments.length === 1 || arguments[1] == null) {
                    deferred.reject(arguments[0]);
                } else {
                    deferred.reject(Array.prototype.slice.call(arguments, 0));
                }
            } else {
                switch (arguments.length) {
                case 0:
                    deferred.resolve();
                    break;
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(Array.prototype.slice.call(null, arguments, 1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.previousErrors(callback);
            break;
        case 1:
            instanceValue.previousErrors(args[0], callback);
            break;
        case 2:
            instanceValue.previousErrors(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.previousErrors(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.previousErrors(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.previousErrors(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.previousErrors.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Database.prototype.resetErrorHistory = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.catch(function (err) {
        deferred.reject(err);
        return deferred.promise;
    }).then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                if (arguments.length === 1 || arguments[1] == null) {
                    deferred.reject(arguments[0]);
                } else {
                    deferred.reject(Array.prototype.slice.call(arguments, 0));
                }
            } else {
                switch (arguments.length) {
                case 0:
                    deferred.resolve();
                    break;
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(Array.prototype.slice.call(null, arguments, 1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.resetErrorHistory(callback);
            break;
        case 1:
            instanceValue.resetErrorHistory(args[0], callback);
            break;
        case 2:
            instanceValue.resetErrorHistory(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.resetErrorHistory(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.resetErrorHistory(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.resetErrorHistory(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.resetErrorHistory.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Database.prototype.createIndex = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.catch(function (err) {
        deferred.reject(err);
        return deferred.promise;
    }).then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                if (arguments.length === 1 || arguments[1] == null) {
                    deferred.reject(arguments[0]);
                } else {
                    deferred.reject(Array.prototype.slice.call(arguments, 0));
                }
            } else {
                switch (arguments.length) {
                case 0:
                    deferred.resolve();
                    break;
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(Array.prototype.slice.call(null, arguments, 1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.createIndex(callback);
            break;
        case 1:
            instanceValue.createIndex(args[0], callback);
            break;
        case 2:
            instanceValue.createIndex(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.createIndex(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.createIndex(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.createIndex(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.createIndex.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Database.prototype.ensureIndex = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.catch(function (err) {
        deferred.reject(err);
        return deferred.promise;
    }).then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                if (arguments.length === 1 || arguments[1] == null) {
                    deferred.reject(arguments[0]);
                } else {
                    deferred.reject(Array.prototype.slice.call(arguments, 0));
                }
            } else {
                switch (arguments.length) {
                case 0:
                    deferred.resolve();
                    break;
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(Array.prototype.slice.call(null, arguments, 1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.ensureIndex(callback);
            break;
        case 1:
            instanceValue.ensureIndex(args[0], callback);
            break;
        case 2:
            instanceValue.ensureIndex(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.ensureIndex(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.ensureIndex(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.ensureIndex(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.ensureIndex.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Database.prototype.cursorInfo = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.catch(function (err) {
        deferred.reject(err);
        return deferred.promise;
    }).then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                if (arguments.length === 1 || arguments[1] == null) {
                    deferred.reject(arguments[0]);
                } else {
                    deferred.reject(Array.prototype.slice.call(arguments, 0));
                }
            } else {
                switch (arguments.length) {
                case 0:
                    deferred.resolve();
                    break;
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(Array.prototype.slice.call(null, arguments, 1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.cursorInfo(callback);
            break;
        case 1:
            instanceValue.cursorInfo(args[0], callback);
            break;
        case 2:
            instanceValue.cursorInfo(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.cursorInfo(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.cursorInfo(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.cursorInfo(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.cursorInfo.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Database.prototype.dropIndex = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.catch(function (err) {
        deferred.reject(err);
        return deferred.promise;
    }).then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                if (arguments.length === 1 || arguments[1] == null) {
                    deferred.reject(arguments[0]);
                } else {
                    deferred.reject(Array.prototype.slice.call(arguments, 0));
                }
            } else {
                switch (arguments.length) {
                case 0:
                    deferred.resolve();
                    break;
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(Array.prototype.slice.call(null, arguments, 1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.dropIndex(callback);
            break;
        case 1:
            instanceValue.dropIndex(args[0], callback);
            break;
        case 2:
            instanceValue.dropIndex(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.dropIndex(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.dropIndex(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.dropIndex(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.dropIndex.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Database.prototype.reIndex = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.catch(function (err) {
        deferred.reject(err);
        return deferred.promise;
    }).then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                if (arguments.length === 1 || arguments[1] == null) {
                    deferred.reject(arguments[0]);
                } else {
                    deferred.reject(Array.prototype.slice.call(arguments, 0));
                }
            } else {
                switch (arguments.length) {
                case 0:
                    deferred.resolve();
                    break;
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(Array.prototype.slice.call(null, arguments, 1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.reIndex(callback);
            break;
        case 1:
            instanceValue.reIndex(args[0], callback);
            break;
        case 2:
            instanceValue.reIndex(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.reIndex(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.reIndex(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.reIndex(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.reIndex.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Database.prototype.indexInformation = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.catch(function (err) {
        deferred.reject(err);
        return deferred.promise;
    }).then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                if (arguments.length === 1 || arguments[1] == null) {
                    deferred.reject(arguments[0]);
                } else {
                    deferred.reject(Array.prototype.slice.call(arguments, 0));
                }
            } else {
                switch (arguments.length) {
                case 0:
                    deferred.resolve();
                    break;
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(Array.prototype.slice.call(null, arguments, 1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.indexInformation(callback);
            break;
        case 1:
            instanceValue.indexInformation(args[0], callback);
            break;
        case 2:
            instanceValue.indexInformation(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.indexInformation(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.indexInformation(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.indexInformation(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.indexInformation.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Database.prototype.dropDatabase = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.catch(function (err) {
        deferred.reject(err);
        return deferred.promise;
    }).then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                if (arguments.length === 1 || arguments[1] == null) {
                    deferred.reject(arguments[0]);
                } else {
                    deferred.reject(Array.prototype.slice.call(arguments, 0));
                }
            } else {
                switch (arguments.length) {
                case 0:
                    deferred.resolve();
                    break;
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(Array.prototype.slice.call(null, arguments, 1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.dropDatabase(callback);
            break;
        case 1:
            instanceValue.dropDatabase(args[0], callback);
            break;
        case 2:
            instanceValue.dropDatabase(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.dropDatabase(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.dropDatabase(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.dropDatabase(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.dropDatabase.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Database.prototype.close = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.catch(function (err) {
        deferred.reject(err);
        return deferred.promise;
    }).then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                if (arguments.length === 1 || arguments[1] == null) {
                    deferred.reject(arguments[0]);
                } else {
                    deferred.reject(Array.prototype.slice.call(arguments, 0));
                }
            } else {
                switch (arguments.length) {
                case 0:
                    deferred.resolve();
                    break;
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(Array.prototype.slice.call(null, arguments, 1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.close(callback);
            break;
        case 1:
            instanceValue.close(args[0], callback);
            break;
        case 2:
            instanceValue.close(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.close(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.close(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.close(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.close.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Database.prototype.collection = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.catch(function (err) {
        deferred.reject(err);
        return deferred.promise;
    }).then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                if (arguments.length === 1 || arguments[1] == null) {
                    deferred.reject(arguments[0]);
                } else {
                    deferred.reject(Array.prototype.slice.call(arguments, 0));
                }
            } else {
                arguments[1] = new Collection(arguments[1]);
                switch (arguments.length) {
                case 0:
                    deferred.resolve();
                    break;
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(Array.prototype.slice.call(null, arguments, 1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.collection(callback);
            break;
        case 1:
            instanceValue.collection(args[0], callback);
            break;
        case 2:
            instanceValue.collection(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.collection(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.collection(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.collection(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.collection.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Database.prototype.collections = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.catch(function (err) {
        deferred.reject(err);
        return deferred.promise;
    }).then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                if (arguments.length === 1 || arguments[1] == null) {
                    deferred.reject(arguments[0]);
                } else {
                    deferred.reject(Array.prototype.slice.call(arguments, 0));
                }
            } else {
                arguments[1] = arguments[1].map(function (item) {
                    return new Collection(item);
                });
                switch (arguments.length) {
                case 0:
                    deferred.resolve();
                    break;
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(Array.prototype.slice.call(null, arguments, 1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.collections(callback);
            break;
        case 1:
            instanceValue.collections(args[0], callback);
            break;
        case 2:
            instanceValue.collections(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.collections(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.collections(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.collections(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.collections.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Database.prototype.createCollection = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.catch(function (err) {
        deferred.reject(err);
        return deferred.promise;
    }).then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                if (arguments.length === 1 || arguments[1] == null) {
                    deferred.reject(arguments[0]);
                } else {
                    deferred.reject(Array.prototype.slice.call(arguments, 0));
                }
            } else {
                arguments[1] = new Collection(arguments[1]);
                switch (arguments.length) {
                case 0:
                    deferred.resolve();
                    break;
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(Array.prototype.slice.call(null, arguments, 1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.createCollection(callback);
            break;
        case 1:
            instanceValue.createCollection(args[0], callback);
            break;
        case 2:
            instanceValue.createCollection(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.createCollection(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.createCollection(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.createCollection(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.createCollection.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Database.prototype.renameCollection = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.catch(function (err) {
        deferred.reject(err);
        return deferred.promise;
    }).then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                if (arguments.length === 1 || arguments[1] == null) {
                    deferred.reject(arguments[0]);
                } else {
                    deferred.reject(Array.prototype.slice.call(arguments, 0));
                }
            } else {
                arguments[1] = new Collection(arguments[1]);
                switch (arguments.length) {
                case 0:
                    deferred.resolve();
                    break;
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(Array.prototype.slice.call(null, arguments, 1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.renameCollection(callback);
            break;
        case 1:
            instanceValue.renameCollection(args[0], callback);
            break;
        case 2:
            instanceValue.renameCollection(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.renameCollection(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.renameCollection(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.renameCollection(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.renameCollection.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
module.exports = Database;