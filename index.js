coffee = require('coffee-script');
var index = null;
if (process.env.PLAYLYFE_TEST) {
  try {
    index = require('./src-cov/mongo');
  } catch(e) {
    index = require('./src/mongo');
  }
} else {
  index = require('./src/mongo');
}
module.exports = index;
