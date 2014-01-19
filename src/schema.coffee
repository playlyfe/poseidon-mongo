module.exports = {
  "Collection": {
    "require": {
      "Mongo": "mongodb",
      "Cursor": "./cursor"
    },
    "constructor": {
      "params": ["collection"],
      "body": """
      if (!(collection instanceof Mongo.Collection)) {
        throw new Error('Object must be an instance of Mongo Collection');
      }
      this.instance = collection;
      return;
      """
    },
    "type": "object",
    "functions": {
      "insert": {},
      "remove": {},
      "save": {},
      "update": {},
      "distinct": {},
      "count": {},
      "drop": {},
      "find": {
        "wrap": false,
        "return": ["Cursor"]
      },
      "findAndModify": {},
      "findAndRemove": {},
      "findOne": {},
      "createIndex": {},
      "ensureIndex": {},
      "indexInformation": {},
      "dropIndex": {},
      "dropAllIndexes": {},
      "reIndex": {},
      "mapReduce": {},
      "group": {},
      "options": {},
      "isCapped": {},
      "indexExists": {},
      "geoNear": {},
      "geoHaystackSearch": {},
      "indexes": {},
      "aggregate": {},
      "stats": {},
      "rename": {
        "return": ["Collection"]
      }
    }
  },
  "Cursor": {
    "require": {
      "Mongo": "mongodb"
    },
    "constructor": {
      "params": ["cursor"],
      "body": """
      if (cursor.constructor.name !== 'Cursor') {
        throw Error('Object must be an instance of Mongo Cursor');
      }
      this.instance = cursor;
      return;
      """
    },
    "type": "object",
    "functions": {
      "toArray": {},
      "each": {},
      "count": {},
      "nextObject": {},
      "explain": {},
      "close": {},
      "stream": {
        "wrap": false
      },
      "isClosed": {
        "wrap": false
      },
      "rewind": {
        "wrap": false,
        "chain": true
      },
      "sort": {
        "wrap": false,
        "chain": true
      },
      "setReadPreference": {
        "wrap": false,
        "chain": true
      },
      "skip": {
        "wrap": false,
        "chain": true
      },
      "limit": {
        "wrap": false,
        "chain": true
      },
      "batchSize": {
        "wrap": false,
        "chain": true
      }
    }
  },
  "Database": {
    "require": {
      "Driver": "./driver",
      "Collection": "./collection",
      "Cursor": "./cursor"
    },
    "constructor": {
      "params": ["connectionName"],
      "body": """
      this.connectionName = connectionName;
      this.instance = Driver.openConnection(connectionName);
      return;
      """
    },
    "type": "promise",
    "functions": {
      "db": {},
      "collectionNames": {},
      "eval": {},
      "dereference": {},
      "logout": {},
      "authenticate": {},
      "addUser": {},
      "removeUser": {},
      "command": {},
      "dropCollection": {},
      "lastError": {},
      "previousErrors": {},
      "resetErrorHistory": {},
      "createIndex": {},
      "ensureIndex": {},
      "cursorInfo": {},
      "dropIndex": {},
      "reIndex": {},
      "indexInformation": {},
      "dropDatabase": {},
      "stats": {},
      "close": {},
      "collection": {
        "return": ["Collection"]
      },
      "collections": {
        "return": [
          {
            "name": "Collection"
            "array": true
          }
        ]
      },
      "createCollection": {
        "return": ["Collection"]
      },
      "renameCollection": {
        "return": ["Collection"]
      },
      "collectionsInfo": {
        "return": ["Cursor"]
      },
    }
  }
}
