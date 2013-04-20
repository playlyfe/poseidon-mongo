coffee = require('coffee-script');
module.exports = process.env.PLAYLYFE_TEST ? require('./src-cov/mongo') : require('./src/mongo');
