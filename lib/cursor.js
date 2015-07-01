var Promise = require('bluebird');
var Mongo = require('mongodb');
function Cursor(cursor) {
    if (cursor.constructor.name !== 'Cursor') {
        throw Error('Object must be an instance of Mongo Cursor');
    }
    this.instance = cursor;
    return;
}
Cursor.prototype.toArray = function () {
    var args = arguments;
    var deferred = Promise.pending();
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
        this.instance.toArray(callback);
        break;
    case 1:
        this.instance.toArray(args[0], callback);
        break;
    case 2:
        this.instance.toArray(args[0], args[1], callback);
        break;
    case 3:
        this.instance.toArray(args[0], args[1], args[2], callback);
        break;
    case 4:
        this.instance.toArray(args[0], args[1], args[2], args[3], callback);
        break;
    case 5:
        this.instance.toArray(args[0], args[1], args[2], args[3], args[4], callback);
        break;
    default:
        this.instance.toArray.apply(this.instance, Array.prototype.slice.call(null, args).concat(callback));
        break;
    }
    return deferred.promise;
};
Cursor.prototype.each = function () {
    var args = arguments;
    var deferred = Promise.pending();
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
        this.instance.each(callback);
        break;
    case 1:
        this.instance.each(args[0], callback);
        break;
    case 2:
        this.instance.each(args[0], args[1], callback);
        break;
    case 3:
        this.instance.each(args[0], args[1], args[2], callback);
        break;
    case 4:
        this.instance.each(args[0], args[1], args[2], args[3], callback);
        break;
    case 5:
        this.instance.each(args[0], args[1], args[2], args[3], args[4], callback);
        break;
    default:
        this.instance.each.apply(this.instance, Array.prototype.slice.call(null, args).concat(callback));
        break;
    }
    return deferred.promise;
};
Cursor.prototype.count = function () {
    var args = arguments;
    var deferred = Promise.pending();
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
Cursor.prototype.nextObject = function () {
    var args = arguments;
    var deferred = Promise.pending();
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
        this.instance.nextObject(callback);
        break;
    case 1:
        this.instance.nextObject(args[0], callback);
        break;
    case 2:
        this.instance.nextObject(args[0], args[1], callback);
        break;
    case 3:
        this.instance.nextObject(args[0], args[1], args[2], callback);
        break;
    case 4:
        this.instance.nextObject(args[0], args[1], args[2], args[3], callback);
        break;
    case 5:
        this.instance.nextObject(args[0], args[1], args[2], args[3], args[4], callback);
        break;
    default:
        this.instance.nextObject.apply(this.instance, Array.prototype.slice.call(null, args).concat(callback));
        break;
    }
    return deferred.promise;
};
Cursor.prototype.explain = function () {
    var args = arguments;
    var deferred = Promise.pending();
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
        this.instance.explain(callback);
        break;
    case 1:
        this.instance.explain(args[0], callback);
        break;
    case 2:
        this.instance.explain(args[0], args[1], callback);
        break;
    case 3:
        this.instance.explain(args[0], args[1], args[2], callback);
        break;
    case 4:
        this.instance.explain(args[0], args[1], args[2], args[3], callback);
        break;
    case 5:
        this.instance.explain(args[0], args[1], args[2], args[3], args[4], callback);
        break;
    default:
        this.instance.explain.apply(this.instance, Array.prototype.slice.call(null, args).concat(callback));
        break;
    }
    return deferred.promise;
};
Cursor.prototype.close = function () {
    var args = arguments;
    var deferred = Promise.pending();
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
        this.instance.close(callback);
        break;
    case 1:
        this.instance.close(args[0], callback);
        break;
    case 2:
        this.instance.close(args[0], args[1], callback);
        break;
    case 3:
        this.instance.close(args[0], args[1], args[2], callback);
        break;
    case 4:
        this.instance.close(args[0], args[1], args[2], args[3], callback);
        break;
    case 5:
        this.instance.close(args[0], args[1], args[2], args[3], args[4], callback);
        break;
    default:
        this.instance.close.apply(this.instance, Array.prototype.slice.call(null, args).concat(callback));
        break;
    }
    return deferred.promise;
};
Cursor.prototype.stream = function () {
    var args = arguments;
    var result;
    switch (args.length) {
    case 0:
        result = this.instance.stream();
        break;
    case 1:
        result = this.instance.stream(args[0]);
        break;
    case 2:
        result = this.instance.stream(args[0], args[1]);
        break;
    case 3:
        result = this.instance.stream(args[0], args[1], args[2]);
        break;
    case 4:
        result = this.instance.stream(args[0], args[1], args[2], args[3]);
        break;
    case 5:
        result = this.instance.stream(args[0], args[1], args[2], args[3], args[4]);
        break;
    default:
        result = this.instance.stream.apply(this.instance, args);
        break;
    }
    return result;
};
Cursor.prototype.isClosed = function () {
    var args = arguments;
    var result;
    switch (args.length) {
    case 0:
        result = this.instance.isClosed();
        break;
    case 1:
        result = this.instance.isClosed(args[0]);
        break;
    case 2:
        result = this.instance.isClosed(args[0], args[1]);
        break;
    case 3:
        result = this.instance.isClosed(args[0], args[1], args[2]);
        break;
    case 4:
        result = this.instance.isClosed(args[0], args[1], args[2], args[3]);
        break;
    case 5:
        result = this.instance.isClosed(args[0], args[1], args[2], args[3], args[4]);
        break;
    default:
        result = this.instance.isClosed.apply(this.instance, args);
        break;
    }
    return result;
};
Cursor.prototype.rewind = function () {
    var args = arguments;
    var result;
    switch (args.length) {
    case 0:
        result = this.instance.rewind();
        break;
    case 1:
        result = this.instance.rewind(args[0]);
        break;
    case 2:
        result = this.instance.rewind(args[0], args[1]);
        break;
    case 3:
        result = this.instance.rewind(args[0], args[1], args[2]);
        break;
    case 4:
        result = this.instance.rewind(args[0], args[1], args[2], args[3]);
        break;
    case 5:
        result = this.instance.rewind(args[0], args[1], args[2], args[3], args[4]);
        break;
    default:
        result = this.instance.rewind.apply(this.instance, args);
        break;
    }
    return this;
};
Cursor.prototype.sort = function () {
    var args = arguments;
    var result;
    switch (args.length) {
    case 0:
        result = this.instance.sort();
        break;
    case 1:
        result = this.instance.sort(args[0]);
        break;
    case 2:
        result = this.instance.sort(args[0], args[1]);
        break;
    case 3:
        result = this.instance.sort(args[0], args[1], args[2]);
        break;
    case 4:
        result = this.instance.sort(args[0], args[1], args[2], args[3]);
        break;
    case 5:
        result = this.instance.sort(args[0], args[1], args[2], args[3], args[4]);
        break;
    default:
        result = this.instance.sort.apply(this.instance, args);
        break;
    }
    return this;
};
Cursor.prototype.setReadPreference = function () {
    var args = arguments;
    var result;
    switch (args.length) {
    case 0:
        result = this.instance.setReadPreference();
        break;
    case 1:
        result = this.instance.setReadPreference(args[0]);
        break;
    case 2:
        result = this.instance.setReadPreference(args[0], args[1]);
        break;
    case 3:
        result = this.instance.setReadPreference(args[0], args[1], args[2]);
        break;
    case 4:
        result = this.instance.setReadPreference(args[0], args[1], args[2], args[3]);
        break;
    case 5:
        result = this.instance.setReadPreference(args[0], args[1], args[2], args[3], args[4]);
        break;
    default:
        result = this.instance.setReadPreference.apply(this.instance, args);
        break;
    }
    return this;
};
Cursor.prototype.skip = function () {
    var args = arguments;
    var result;
    switch (args.length) {
    case 0:
        result = this.instance.skip();
        break;
    case 1:
        result = this.instance.skip(args[0]);
        break;
    case 2:
        result = this.instance.skip(args[0], args[1]);
        break;
    case 3:
        result = this.instance.skip(args[0], args[1], args[2]);
        break;
    case 4:
        result = this.instance.skip(args[0], args[1], args[2], args[3]);
        break;
    case 5:
        result = this.instance.skip(args[0], args[1], args[2], args[3], args[4]);
        break;
    default:
        result = this.instance.skip.apply(this.instance, args);
        break;
    }
    return this;
};
Cursor.prototype.limit = function () {
    var args = arguments;
    var result;
    switch (args.length) {
    case 0:
        result = this.instance.limit();
        break;
    case 1:
        result = this.instance.limit(args[0]);
        break;
    case 2:
        result = this.instance.limit(args[0], args[1]);
        break;
    case 3:
        result = this.instance.limit(args[0], args[1], args[2]);
        break;
    case 4:
        result = this.instance.limit(args[0], args[1], args[2], args[3]);
        break;
    case 5:
        result = this.instance.limit(args[0], args[1], args[2], args[3], args[4]);
        break;
    default:
        result = this.instance.limit.apply(this.instance, args);
        break;
    }
    return this;
};
Cursor.prototype.batchSize = function () {
    var args = arguments;
    var result;
    switch (args.length) {
    case 0:
        result = this.instance.batchSize();
        break;
    case 1:
        result = this.instance.batchSize(args[0]);
        break;
    case 2:
        result = this.instance.batchSize(args[0], args[1]);
        break;
    case 3:
        result = this.instance.batchSize(args[0], args[1], args[2]);
        break;
    case 4:
        result = this.instance.batchSize(args[0], args[1], args[2], args[3]);
        break;
    case 5:
        result = this.instance.batchSize(args[0], args[1], args[2], args[3], args[4]);
        break;
    default:
        result = this.instance.batchSize.apply(this.instance, args);
        break;
    }
    return this;
};
module.exports = Cursor;