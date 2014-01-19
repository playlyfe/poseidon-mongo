coffee = require('coffee-script');
var index = null;
if (process.env.PLAYLYFE_TEST) {
  try {
    index = require('./src-cov/mongo');
  } catch(e) {
    index = require('./lib/mongo');
  }
} else {
  index = require('./lib/mongo');
}
module.exports = index;
