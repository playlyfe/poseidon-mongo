Promise = require('poseidon').Promise;
Mongo = require('mongodb');
Cursor = require('./cursor');
function Collection(collection) {
    if (!(collection instanceof Mongo.Collection)) {
        throw new Error('Object must be an instance of Mongo Collection');
    }
    this.instance = collection;
    return;
}
Collection.prototype.insert = function () {
    var args = arguments;
    var deferred = Promise.pending();
    var callback = function () {
        if (arguments[0]) {
            deferred.reject(arguments[0]);
        } else {
            switch (arguments.length) {
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
                deferred.resolve(arguments.slice(1));
                break;
            }
        }
    };
    switch (args.length) {
    case 0:
        this.instance.insert(callback);
        break;
    case 1:
        this.instance.insert(args[0], callback);
        break;
    case 2:
        this.instance.insert(args[0], args[1], callback);
        break;
    case 3:
        this.instance.insert(args[0], args[1], args[2], callback);
        break;
    case 4:
        this.instance.insert(args[0], args[1], args[2], args[3], callback);
        break;
    case 5:
        this.instance.insert(args[0], args[1], args[2], args[3], args[4], callback);
        break;
    default:
        this.instance.insert.apply(this.instance, Array.prototype.slice.call(null, args).concat(callback));
        break;
    }
    return deferred.promise;
};
Collection.prototype.remove = function () {
    var args = arguments;
    var deferred = Promise.pending();
    var callback = function () {
        if (arguments[0]) {
            deferred.reject(arguments[0]);
        } else {
            switch (arguments.length) {
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
                deferred.resolve(arguments.slice(1));
                break;
            }
        }
    };
    switch (args.length) {
    case 0:
        this.instance.remove(callback);
        break;
    case 1:
        this.instance.remove(args[0], callback);
        break;
    case 2:
        this.instance.remove(args[0], args[1], callback);
        break;
    case 3:
        this.instance.remove(args[0], args[1], args[2], callback);
        break;
    case 4:
        this.instance.remove(args[0], args[1], args[2], args[3], callback);
        break;
    case 5:
        this.instance.remove(args[0], args[1], args[2], args[3], args[4], callback);
        break;
    default:
        this.instance.remove.apply(this.instance, Array.prototype.slice.call(null, args).concat(callback));
        break;
    }
    return deferred.promise;
};
Collection.prototype.save = function () {
    var args = arguments;
    var deferred = Promise.pending();
    var callback = function () {
        if (arguments[0]) {
            deferred.reject(arguments[0]);
        } else {
            switch (arguments.length) {
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
                deferred.resolve(arguments.slice(1));
                break;
            }
        }
    };
    switch (args.length) {
    case 0:
        this.instance.save(callback);
        break;
    case 1:
        this.instance.save(args[0], callback);
        break;
    case 2:
        this.instance.save(args[0], args[1], callback);
        break;
    case 3:
        this.instance.save(args[0], args[1], args[2], callback);
        break;
    case 4:
        this.instance.save(args[0], args[1], args[2], args[3], callback);
        break;
    case 5:
        this.instance.save(args[0], args[1], args[2], args[3], args[4], callback);
        break;
    default:
        this.instance.save.apply(this.instance, Array.prototype.slice.call(null, args).concat(callback));
        break;
    }
    return deferred.promise;
};
Collection.prototype.update = function () {
    var args = arguments;
    var deferred = Promise.pending();
    var callback = function () {
        if (arguments[0]) {
            deferred.reject(arguments[0]);
        } else {
            switch (arguments.length) {
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
                deferred.resolve(arguments.slice(1));
                break;
            }
        }
    };
    switch (args.length) {
    case 0:
        this.instance.update(callback);
        break;
    case 1:
        this.instance.update(args[0], callback);
        break;
    case 2:
        this.instance.update(args[0], args[1], callback);
        break;
    case 3:
        this.instance.update(args[0], args[1], args[2], callback);
        break;
    case 4:
        this.instance.update(args[0], args[1], args[2], args[3], callback);
        break;
    case 5:
        this.instance.update(args[0], args[1], args[2], args[3], args[4], callback);
        break;
    default:
        this.instance.update.apply(this.instance, Array.prototype.slice.call(null, args).concat(callback));
        break;
    }
    return deferred.promise;
};
Collection.prototype.distinct = function () {
    var args = arguments;
    var deferred = Promise.pending();
    var callback = function () {
        if (arguments[0]) {
            deferred.reject(arguments[0]);
        } else {
            switch (arguments.length) {
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
                deferred.resolve(arguments.slice(1));
                break;
            }
        }
    };
    switch (args.length) {
    case 0:
        this.instance.distinct(callback);
        break;
    case 1:
        this.instance.distinct(args[0], callback);
        break;
    case 2:
        this.instance.distinct(args[0], args[1], callback);
        break;
    case 3:
        this.instance.distinct(args[0], args[1], args[2], callback);
        break;
    case 4:
        this.instance.distinct(args[0], args[1], args[2], args[3], callback);
        break;
    case 5:
        this.instance.distinct(args[0], args[1], args[2], args[3], args[4], callback);
        break;
    default:
        this.instance.distinct.apply(this.instance, Array.prototype.slice.call(null, args).concat(callback));
        break;
    }
    return deferred.promise;
};
Collection.prototype.count = function () {
    var args = arguments;
    var deferred = Promise.pending();
    var callback = function () {
        if (arguments[0]) {
            deferred.reject(arguments[0]);
        } else {
            switch (arguments.length) {
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
                deferred.resolve(arguments.slice(1));
                break;
            }
        }
    };
    switch (args.length) {
    case 0:
        this.instance.count(callback);
        break;
    case 1:
        this.instance.count(args[0], callback);
        break;
    case 2:
        this.instance.count(args[0], args[1], callback);
        break;
    case 3:
        this.instance.count(args[0], args[1], args[2], callback);
        break;
    case 4:
        this.instance.count(args[0], args[1], args[2], args[3], callback);
        break;
    case 5:
        this.instance.count(args[0], args[1], args[2], args[3], args[4], callback);
        break;
    default:
        this.instance.count.apply(this.instance, Array.prototype.slice.call(null, args).concat(callback));
        break;
    }
    return deferred.promise;
};
Collection.prototype.drop = function () {
    var args = arguments;
    var deferred = Promise.pending();
    var callback = function () {
        if (arguments[0]) {
            deferred.reject(arguments[0]);
        } else {
            switch (arguments.length) {
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
                deferred.resolve(arguments.slice(1));
                break;
            }
        }
    };
    switch (args.length) {
    case 0:
        this.instance.drop(callback);
        break;
    case 1:
        this.instance.drop(args[0], callback);
        break;
    case 2:
        this.instance.drop(args[0], args[1], callback);
        break;
    case 3:
        this.instance.drop(args[0], args[1], args[2], callback);
        break;
    case 4:
        this.instance.drop(args[0], args[1], args[2], args[3], callback);
        break;
    case 5:
        this.instance.drop(args[0], args[1], args[2], args[3], args[4], callback);
        break;
    default:
        this.instance.drop.apply(this.instance, Array.prototype.slice.call(null, args).concat(callback));
        break;
    }
    return deferred.promise;
};
Collection.prototype.find = function () {
    var args = arguments;
    switch (args.length) {
    case 0:
        result = this.instance.find();
        break;
    case 1:
        result = this.instance.find(args[0]);
        break;
    case 2:
        result = this.instance.find(args[0], args[1]);
        break;
    case 3:
        result = this.instance.find(args[0], args[1], args[2]);
        break;
    case 4:
        result = this.instance.find(args[0], args[1], args[2], args[3]);
        break;
    case 5:
        result = this.instance.find(args[0], args[1], args[2], args[3], args[4]);
        break;
    default:
        result = this.instance.find.apply(this.instance, args);
        break;
    }
    return new Cursor(result);
};
Collection.prototype.findAndModify = function () {
    var args = arguments;
    var deferred = Promise.pending();
    var callback = function () {
        if (arguments[0]) {
            deferred.reject(arguments[0]);
        } else {
            switch (arguments.length) {
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
                deferred.resolve(arguments.slice(1));
                break;
            }
        }
    };
    switch (args.length) {
    case 0:
        this.instance.findAndModify(callback);
        break;
    case 1:
        this.instance.findAndModify(args[0], callback);
        break;
    case 2:
        this.instance.findAndModify(args[0], args[1], callback);
        break;
    case 3:
        this.instance.findAndModify(args[0], args[1], args[2], callback);
        break;
    case 4:
        this.instance.findAndModify(args[0], args[1], args[2], args[3], callback);
        break;
    case 5:
        this.instance.findAndModify(args[0], args[1], args[2], args[3], args[4], callback);
        break;
    default:
        this.instance.findAndModify.apply(this.instance, Array.prototype.slice.call(null, args).concat(callback));
        break;
    }
    return deferred.promise;
};
Collection.prototype.findAndRemove = function () {
    var args = arguments;
    var deferred = Promise.pending();
    var callback = function () {
        if (arguments[0]) {
            deferred.reject(arguments[0]);
        } else {
            switch (arguments.length) {
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
                deferred.resolve(arguments.slice(1));
                break;
            }
        }
    };
    switch (args.length) {
    case 0:
        this.instance.findAndRemove(callback);
        break;
    case 1:
        this.instance.findAndRemove(args[0], callback);
        break;
    case 2:
        this.instance.findAndRemove(args[0], args[1], callback);
        break;
    case 3:
        this.instance.findAndRemove(args[0], args[1], args[2], callback);
        break;
    case 4:
        this.instance.findAndRemove(args[0], args[1], args[2], args[3], callback);
        break;
    case 5:
        this.instance.findAndRemove(args[0], args[1], args[2], args[3], args[4], callback);
        break;
    default:
        this.instance.findAndRemove.apply(this.instance, Array.prototype.slice.call(null, args).concat(callback));
        break;
    }
    return deferred.promise;
};
Collection.prototype.findOne = function () {
    var args = arguments;
    var deferred = Promise.pending();
    var callback = function () {
        if (arguments[0]) {
            deferred.reject(arguments[0]);
        } else {
            switch (arguments.length) {
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
                deferred.resolve(arguments.slice(1));
                break;
            }
        }
    };
    switch (args.length) {
    case 0:
        this.instance.findOne(callback);
        break;
    case 1:
        this.instance.findOne(args[0], callback);
        break;
    case 2:
        this.instance.findOne(args[0], args[1], callback);
        break;
    case 3:
        this.instance.findOne(args[0], args[1], args[2], callback);
        break;
    case 4:
        this.instance.findOne(args[0], args[1], args[2], args[3], callback);
        break;
    case 5:
        this.instance.findOne(args[0], args[1], args[2], args[3], args[4], callback);
        break;
    default:
        this.instance.findOne.apply(this.instance, Array.prototype.slice.call(null, args).concat(callback));
        break;
    }
    return deferred.promise;
};
Collection.prototype.createIndex = function () {
    var args = arguments;
    var deferred = Promise.pending();
    var callback = function () {
        if (arguments[0]) {
            deferred.reject(arguments[0]);
        } else {
            switch (arguments.length) {
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
                deferred.resolve(arguments.slice(1));
                break;
            }
        }
    };
    switch (args.length) {
    case 0:
        this.instance.createIndex(callback);
        break;
    case 1:
        this.instance.createIndex(args[0], callback);
        break;
    case 2:
        this.instance.createIndex(args[0], args[1], callback);
        break;
    case 3:
        this.instance.createIndex(args[0], args[1], args[2], callback);
        break;
    case 4:
        this.instance.createIndex(args[0], args[1], args[2], args[3], callback);
        break;
    case 5:
        this.instance.createIndex(args[0], args[1], args[2], args[3], args[4], callback);
        break;
    default:
        this.instance.createIndex.apply(this.instance, Array.prototype.slice.call(null, args).concat(callback));
        break;
    }
    return deferred.promise;
};
Collection.prototype.ensureIndex = function () {
    var args = arguments;
    var deferred = Promise.pending();
    var callback = function () {
        if (arguments[0]) {
            deferred.reject(arguments[0]);
        } else {
            switch (arguments.length) {
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
                deferred.resolve(arguments.slice(1));
                break;
            }
        }
    };
    switch (args.length) {
    case 0:
        this.instance.ensureIndex(callback);
        break;
    case 1:
        this.instance.ensureIndex(args[0], callback);
        break;
    case 2:
        this.instance.ensureIndex(args[0], args[1], callback);
        break;
    case 3:
        this.instance.ensureIndex(args[0], args[1], args[2], callback);
        break;
    case 4:
        this.instance.ensureIndex(args[0], args[1], args[2], args[3], callback);
        break;
    case 5:
        this.instance.ensureIndex(args[0], args[1], args[2], args[3], args[4], callback);
        break;
    default:
        this.instance.ensureIndex.apply(this.instance, Array.prototype.slice.call(null, args).concat(callback));
        break;
    }
    return deferred.promise;
};
Collection.prototype.indexInformation = function () {
    var args = arguments;
    var deferred = Promise.pending();
    var callback = function () {
        if (arguments[0]) {
            deferred.reject(arguments[0]);
        } else {
            switch (arguments.length) {
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
                deferred.resolve(arguments.slice(1));
                break;
            }
        }
    };
    switch (args.length) {
    case 0:
        this.instance.indexInformation(callback);
        break;
    case 1:
        this.instance.indexInformation(args[0], callback);
        break;
    case 2:
        this.instance.indexInformation(args[0], args[1], callback);
        break;
    case 3:
        this.instance.indexInformation(args[0], args[1], args[2], callback);
        break;
    case 4:
        this.instance.indexInformation(args[0], args[1], args[2], args[3], callback);
        break;
    case 5:
        this.instance.indexInformation(args[0], args[1], args[2], args[3], args[4], callback);
        break;
    default:
        this.instance.indexInformation.apply(this.instance, Array.prototype.slice.call(null, args).concat(callback));
        break;
    }
    return deferred.promise;
};
Collection.prototype.dropIndex = function () {
    var args = arguments;
    var deferred = Promise.pending();
    var callback = function () {
        if (arguments[0]) {
            deferred.reject(arguments[0]);
        } else {
            switch (arguments.length) {
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
                deferred.resolve(arguments.slice(1));
                break;
            }
        }
    };
    switch (args.length) {
    case 0:
        this.instance.dropIndex(callback);
        break;
    case 1:
        this.instance.dropIndex(args[0], callback);
        break;
    case 2:
        this.instance.dropIndex(args[0], args[1], callback);
        break;
    case 3:
        this.instance.dropIndex(args[0], args[1], args[2], callback);
        break;
    case 4:
        this.instance.dropIndex(args[0], args[1], args[2], args[3], callback);
        break;
    case 5:
        this.instance.dropIndex(args[0], args[1], args[2], args[3], args[4], callback);
        break;
    default:
        this.instance.dropIndex.apply(this.instance, Array.prototype.slice.call(null, args).concat(callback));
        break;
    }
    return deferred.promise;
};
Collection.prototype.dropAllIndexes = function () {
    var args = arguments;
    var deferred = Promise.pending();
    var callback = function () {
        if (arguments[0]) {
            deferred.reject(arguments[0]);
        } else {
            switch (arguments.length) {
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
                deferred.resolve(arguments.slice(1));
                break;
            }
        }
    };
    switch (args.length) {
    case 0:
        this.instance.dropAllIndexes(callback);
        break;
    case 1:
        this.instance.dropAllIndexes(args[0], callback);
        break;
    case 2:
        this.instance.dropAllIndexes(args[0], args[1], callback);
        break;
    case 3:
        this.instance.dropAllIndexes(args[0], args[1], args[2], callback);
        break;
    case 4:
        this.instance.dropAllIndexes(args[0], args[1], args[2], args[3], callback);
        break;
    case 5:
        this.instance.dropAllIndexes(args[0], args[1], args[2], args[3], args[4], callback);
        break;
    default:
        this.instance.dropAllIndexes.apply(this.instance, Array.prototype.slice.call(null, args).concat(callback));
        break;
    }
    return deferred.promise;
};
Collection.prototype.reIndex = function () {
    var args = arguments;
    var deferred = Promise.pending();
    var callback = function () {
        if (arguments[0]) {
            deferred.reject(arguments[0]);
        } else {
            switch (arguments.length) {
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
                deferred.resolve(arguments.slice(1));
                break;
            }
        }
    };
    switch (args.length) {
    case 0:
        this.instance.reIndex(callback);
        break;
    case 1:
        this.instance.reIndex(args[0], callback);
        break;
    case 2:
        this.instance.reIndex(args[0], args[1], callback);
        break;
    case 3:
        this.instance.reIndex(args[0], args[1], args[2], callback);
        break;
    case 4:
        this.instance.reIndex(args[0], args[1], args[2], args[3], callback);
        break;
    case 5:
        this.instance.reIndex(args[0], args[1], args[2], args[3], args[4], callback);
        break;
    default:
        this.instance.reIndex.apply(this.instance, Array.prototype.slice.call(null, args).concat(callback));
        break;
    }
    return deferred.promise;
};
Collection.prototype.mapReduce = function () {
    var args = arguments;
    var deferred = Promise.pending();
    var callback = function () {
        if (arguments[0]) {
            deferred.reject(arguments[0]);
        } else {
            switch (arguments.length) {
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
                deferred.resolve(arguments.slice(1));
                break;
            }
        }
    };
    switch (args.length) {
    case 0:
        this.instance.mapReduce(callback);
        break;
    case 1:
        this.instance.mapReduce(args[0], callback);
        break;
    case 2:
        this.instance.mapReduce(args[0], args[1], callback);
        break;
    case 3:
        this.instance.mapReduce(args[0], args[1], args[2], callback);
        break;
    case 4:
        this.instance.mapReduce(args[0], args[1], args[2], args[3], callback);
        break;
    case 5:
        this.instance.mapReduce(args[0], args[1], args[2], args[3], args[4], callback);
        break;
    default:
        this.instance.mapReduce.apply(this.instance, Array.prototype.slice.call(null, args).concat(callback));
        break;
    }
    return deferred.promise;
};
Collection.prototype.group = function () {
    var args = arguments;
    var deferred = Promise.pending();
    var callback = function () {
        if (arguments[0]) {
            deferred.reject(arguments[0]);
        } else {
            switch (arguments.length) {
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
                deferred.resolve(arguments.slice(1));
                break;
            }
        }
    };
    switch (args.length) {
    case 0:
        this.instance.group(callback);
        break;
    case 1:
        this.instance.group(args[0], callback);
        break;
    case 2:
        this.instance.group(args[0], args[1], callback);
        break;
    case 3:
        this.instance.group(args[0], args[1], args[2], callback);
        break;
    case 4:
        this.instance.group(args[0], args[1], args[2], args[3], callback);
        break;
    case 5:
        this.instance.group(args[0], args[1], args[2], args[3], args[4], callback);
        break;
    default:
        this.instance.group.apply(this.instance, Array.prototype.slice.call(null, args).concat(callback));
        break;
    }
    return deferred.promise;
};
Collection.prototype.options = function () {
    var args = arguments;
    var deferred = Promise.pending();
    var callback = function () {
        if (arguments[0]) {
            deferred.reject(arguments[0]);
        } else {
            switch (arguments.length) {
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
                deferred.resolve(arguments.slice(1));
                break;
            }
        }
    };
    switch (args.length) {
    case 0:
        this.instance.options(callback);
        break;
    case 1:
        this.instance.options(args[0], callback);
        break;
    case 2:
        this.instance.options(args[0], args[1], callback);
        break;
    case 3:
        this.instance.options(args[0], args[1], args[2], callback);
        break;
    case 4:
        this.instance.options(args[0], args[1], args[2], args[3], callback);
        break;
    case 5:
        this.instance.options(args[0], args[1], args[2], args[3], args[4], callback);
        break;
    default:
        this.instance.options.apply(this.instance, Array.prototype.slice.call(null, args).concat(callback));
        break;
    }
    return deferred.promise;
};
Collection.prototype.isCapped = function () {
    var args = arguments;
    var deferred = Promise.pending();
    var callback = function () {
        if (arguments[0]) {
            deferred.reject(arguments[0]);
        } else {
            switch (arguments.length) {
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
                deferred.resolve(arguments.slice(1));
                break;
            }
        }
    };
    switch (args.length) {
    case 0:
        this.instance.isCapped(callback);
        break;
    case 1:
        this.instance.isCapped(args[0], callback);
        break;
    case 2:
        this.instance.isCapped(args[0], args[1], callback);
        break;
    case 3:
        this.instance.isCapped(args[0], args[1], args[2], callback);
        break;
    case 4:
        this.instance.isCapped(args[0], args[1], args[2], args[3], callback);
        break;
    case 5:
        this.instance.isCapped(args[0], args[1], args[2], args[3], args[4], callback);
        break;
    default:
        this.instance.isCapped.apply(this.instance, Array.prototype.slice.call(null, args).concat(callback));
        break;
    }
    return deferred.promise;
};
Collection.prototype.indexExists = function () {
    var args = arguments;
    var deferred = Promise.pending();
    var callback = function () {
        if (arguments[0]) {
            deferred.reject(arguments[0]);
        } else {
            switch (arguments.length) {
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
                deferred.resolve(arguments.slice(1));
                break;
            }
        }
    };
    switch (args.length) {
    case 0:
        this.instance.indexExists(callback);
        break;
    case 1:
        this.instance.indexExists(args[0], callback);
        break;
    case 2:
        this.instance.indexExists(args[0], args[1], callback);
        break;
    case 3:
        this.instance.indexExists(args[0], args[1], args[2], callback);
        break;
    case 4:
        this.instance.indexExists(args[0], args[1], args[2], args[3], callback);
        break;
    case 5:
        this.instance.indexExists(args[0], args[1], args[2], args[3], args[4], callback);
        break;
    default:
        this.instance.indexExists.apply(this.instance, Array.prototype.slice.call(null, args).concat(callback));
        break;
    }
    return deferred.promise;
};
Collection.prototype.geoNear = function () {
    var args = arguments;
    var deferred = Promise.pending();
    var callback = function () {
        if (arguments[0]) {
            deferred.reject(arguments[0]);
        } else {
            switch (arguments.length) {
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
                deferred.resolve(arguments.slice(1));
                break;
            }
        }
    };
    switch (args.length) {
    case 0:
        this.instance.geoNear(callback);
        break;
    case 1:
        this.instance.geoNear(args[0], callback);
        break;
    case 2:
        this.instance.geoNear(args[0], args[1], callback);
        break;
    case 3:
        this.instance.geoNear(args[0], args[1], args[2], callback);
        break;
    case 4:
        this.instance.geoNear(args[0], args[1], args[2], args[3], callback);
        break;
    case 5:
        this.instance.geoNear(args[0], args[1], args[2], args[3], args[4], callback);
        break;
    default:
        this.instance.geoNear.apply(this.instance, Array.prototype.slice.call(null, args).concat(callback));
        break;
    }
    return deferred.promise;
};
Collection.prototype.geoHaystackSearch = function () {
    var args = arguments;
    var deferred = Promise.pending();
    var callback = function () {
        if (arguments[0]) {
            deferred.reject(arguments[0]);
        } else {
            switch (arguments.length) {
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
                deferred.resolve(arguments.slice(1));
                break;
            }
        }
    };
    switch (args.length) {
    case 0:
        this.instance.geoHaystackSearch(callback);
        break;
    case 1:
        this.instance.geoHaystackSearch(args[0], callback);
        break;
    case 2:
        this.instance.geoHaystackSearch(args[0], args[1], callback);
        break;
    case 3:
        this.instance.geoHaystackSearch(args[0], args[1], args[2], callback);
        break;
    case 4:
        this.instance.geoHaystackSearch(args[0], args[1], args[2], args[3], callback);
        break;
    case 5:
        this.instance.geoHaystackSearch(args[0], args[1], args[2], args[3], args[4], callback);
        break;
    default:
        this.instance.geoHaystackSearch.apply(this.instance, Array.prototype.slice.call(null, args).concat(callback));
        break;
    }
    return deferred.promise;
};
Collection.prototype.indexes = function () {
    var args = arguments;
    var deferred = Promise.pending();
    var callback = function () {
        if (arguments[0]) {
            deferred.reject(arguments[0]);
        } else {
            switch (arguments.length) {
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
                deferred.resolve(arguments.slice(1));
                break;
            }
        }
    };
    switch (args.length) {
    case 0:
        this.instance.indexes(callback);
        break;
    case 1:
        this.instance.indexes(args[0], callback);
        break;
    case 2:
        this.instance.indexes(args[0], args[1], callback);
        break;
    case 3:
        this.instance.indexes(args[0], args[1], args[2], callback);
        break;
    case 4:
        this.instance.indexes(args[0], args[1], args[2], args[3], callback);
        break;
    case 5:
        this.instance.indexes(args[0], args[1], args[2], args[3], args[4], callback);
        break;
    default:
        this.instance.indexes.apply(this.instance, Array.prototype.slice.call(null, args).concat(callback));
        break;
    }
    return deferred.promise;
};
Collection.prototype.aggregate = function () {
    var args = arguments;
    var deferred = Promise.pending();
    var callback = function () {
        if (arguments[0]) {
            deferred.reject(arguments[0]);
        } else {
            switch (arguments.length) {
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
                deferred.resolve(arguments.slice(1));
                break;
            }
        }
    };
    switch (args.length) {
    case 0:
        this.instance.aggregate(callback);
        break;
    case 1:
        this.instance.aggregate(args[0], callback);
        break;
    case 2:
        this.instance.aggregate(args[0], args[1], callback);
        break;
    case 3:
        this.instance.aggregate(args[0], args[1], args[2], callback);
        break;
    case 4:
        this.instance.aggregate(args[0], args[1], args[2], args[3], callback);
        break;
    case 5:
        this.instance.aggregate(args[0], args[1], args[2], args[3], args[4], callback);
        break;
    default:
        this.instance.aggregate.apply(this.instance, Array.prototype.slice.call(null, args).concat(callback));
        break;
    }
    return deferred.promise;
};
Collection.prototype.stats = function () {
    var args = arguments;
    var deferred = Promise.pending();
    var callback = function () {
        if (arguments[0]) {
            deferred.reject(arguments[0]);
        } else {
            switch (arguments.length) {
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
                deferred.resolve(arguments.slice(1));
                break;
            }
        }
    };
    switch (args.length) {
    case 0:
        this.instance.stats(callback);
        break;
    case 1:
        this.instance.stats(args[0], callback);
        break;
    case 2:
        this.instance.stats(args[0], args[1], callback);
        break;
    case 3:
        this.instance.stats(args[0], args[1], args[2], callback);
        break;
    case 4:
        this.instance.stats(args[0], args[1], args[2], args[3], callback);
        break;
    case 5:
        this.instance.stats(args[0], args[1], args[2], args[3], args[4], callback);
        break;
    default:
        this.instance.stats.apply(this.instance, Array.prototype.slice.call(null, args).concat(callback));
        break;
    }
    return deferred.promise;
};
Collection.prototype.rename = function () {
    var args = arguments;
    var deferred = Promise.pending();
    var callback = function () {
        if (arguments[0]) {
            deferred.reject(arguments[0]);
        } else {
            arguments[1] = new Collection(arguments[1]);
            switch (arguments.length) {
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
                deferred.resolve(arguments.slice(1));
                break;
            }
        }
    };
    switch (args.length) {
    case 0:
        this.instance.rename(callback);
        break;
    case 1:
        this.instance.rename(args[0], callback);
        break;
    case 2:
        this.instance.rename(args[0], args[1], callback);
        break;
    case 3:
        this.instance.rename(args[0], args[1], args[2], callback);
        break;
    case 4:
        this.instance.rename(args[0], args[1], args[2], args[3], callback);
        break;
    case 5:
        this.instance.rename(args[0], args[1], args[2], args[3], args[4], callback);
        break;
    default:
        this.instance.rename.apply(this.instance, Array.prototype.slice.call(null, args).concat(callback));
        break;
    }
    return deferred.promise;
};
module.exports = Collection;