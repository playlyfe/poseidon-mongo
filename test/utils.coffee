global.chai = require 'chai'
global.should = chai.should()
global.expect = chai.expect
global.sinon = require 'sinon'
global.sinonChai = require 'sinon-chai'
chai.use sinonChai
