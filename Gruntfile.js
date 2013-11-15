/*
 * grunt-xsltproc
 * https://github.com/andybluntish/grunt-xsltproc
 *
 * Copyright (c) 2013 Andy Stanford-Bluntish
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    xsltproc: {
      options: {
        stylesheet: 'test/fixtures/template.xsl'
      },
      compile: {
        files: {
          'tmp/compile.html': ['test/fixtures/data/albums.xml']
        }
      },
      params: {
        files: {
          'tmp/params.html': ['test/fixtures/data/albums.xml']
        },
        options: {
          params: {
            'fav': '/catalogue/album[@id="3"]/title'
          }
        }
      },
      stringparams: {
        files: {
          'tmp/stringparams.html': ['test/fixtures/data/albums.xml']
        },
        options: {
          stringparams: {
            'title': 'My Music'
          }
        }
      },
      xinclude: {
        files: {
          'tmp/xinclude.html': ['test/fixtures/data/track_lists.xml']
        },
        options: {
          xinclude: true
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'xsltproc', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
