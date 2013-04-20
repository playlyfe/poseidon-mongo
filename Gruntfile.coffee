{exec} = require 'child_process'

module.exports = (grunt) ->
  grunt.loadNpmTasks 'grunt-cafe-mocha'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-clean'

  grunt.initConfig
    cafemocha:
      unit:
        src: 'test/*.coffee'
        options:
          reporter: 'spec'
    coffee:
      compile:
        options:
          bare: true
        expand: true
        flatten: true
        src: ['src/*.litcoffee']
        dest: 'src-js'
        ext: '.js'

    clean:
      coverage: ['src-js', 'src-cov', 'report.html', 'docs']

  grunt.registerTask 'docs', ->
    done = @async()
    exec("./node_modules/docco/bin/docco -o docs src/*.litcoffee", (err, stdout, stderr) ->
      done()
      return
    )
    return

  grunt.registerTask 'default', ->
    grunt.task.run ['cafemocha', 'coffee', 'coverage', 'docs']
    return

  grunt.registerTask 'coverage', ->
    done = @async()
    @requires 'coffee'
    exec("node_modules/jscoverage/bin/jscoverage src-js src-cov", (err, stdout, stderr) ->
      exec("PLAYLYFE_TEST=1 node_modules/mocha/bin/mocha -R html-cov > report.html", (err, stdout, stderr) ->
        done()
        return
      )
      return
    )
  return

  return
