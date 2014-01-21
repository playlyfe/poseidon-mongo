Poseidon = require 'poseidon'
configuration = require './schema'
coffee = require 'coffee-script'
fs = require 'fs'

if not fs.existsSync("#{__dirname}/../lib")
  fs.mkdirSync("#{__dirname}/../lib")

generator = new Poseidon(configuration)

generator.generate("#{__dirname}/../lib")
.then (output) =>
  [
    "mongo"
    "driver"
  ].map (file) ->
    code = fs.readFileSync("#{__dirname}/#{file}.coffee", 'utf8')
    fs.writeFileSync("#{__dirname}/../lib/#{file}.js", coffee.compile(code, { bare: true }))
  console.log "Written to files"


