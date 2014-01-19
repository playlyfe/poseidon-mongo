Poseidon = require 'poseidon'
configuration = require './schema'

generator = new Poseidon(configuration)

generator.generate("#{__dirname}/../lib")
.then (output) =>
  console.log "Written to files"


