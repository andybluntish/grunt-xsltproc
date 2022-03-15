/*
 * grunt-xsltproc
 * https://github.com/andybluntish/grunt-xsltproc
 *
 * Copyright (c) 2013 Andy Stanford-Bluntish
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    eslint: {
      target: ["Gruntfile.js", "tasks/*.js", "test/*.js"],
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ["tmp"],
    },

    // Configuration to be run (and then tested).
    xsltproc: {
      options: {
        stylesheet: "test/fixtures/template.xsl",
      },
      compile: {
        files: {
          "tmp/compile.html": ["test/fixtures/data/albums.xml"],
        },
      },
      params: {
        files: {
          "tmp/params.html": ["test/fixtures/data/albums.xml"],
        },
        options: {
          params: {
            fav: '/catalogue/album[@id="3"]/title',
          },
        },
      },
      stringparams: {
        files: {
          "tmp/stringparams.html": ["test/fixtures/data/albums.xml"],
        },
        options: {
          stringparams: {
            title: "My Music",
          },
        },
      },
      xinclude: {
        files: {
          "tmp/xinclude.html": ["test/fixtures/data/track_lists.xml"],
        },
        options: {
          xinclude: true,
        },
      },
      xincludestyle: {
        files: {
          "tmp/xincludestyle.html": ["test/fixtures/data/albums.xml"],
        },
        options: {
          stylesheet: "test/fixtures/template_xinclude.xsl",
          xincludestyle: true,
        },
      },
      novalid: {
        files: {
          "tmp/novalid.html": ["test/fixtures/data/albums.xml"],
        },
        options: {
          novalid: true,
        },
      },
      filepath: {
        files: {
          "tmp/filepath.html": ["test/fixtures/data/albums.xml"],
        },
        options: {
          filepath: true,
          stylesheet: "test/fixtures/template_filepath.xsl",
        },
      },
      html: {
        files: {
          "tmp/html.html": ["test/fixtures/html.html"],
        },
        options: {
          html: true,
          stylesheet: "test/fixtures/html.xsl",
        },
      },
      inline: {
        options: {
          stylesheet: null,
        },
        files: {
          "tmp/inline.html": ["test/fixtures/data/albums.xml"],
        },
      },
    },

    // Unit tests.
    nodeunit: {
      tests: ["test/*_test.js"],
    },
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks("tasks");

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks("grunt-eslint");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-nodeunit");

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask("test", ["clean", "xsltproc", "nodeunit"]);

  // Lint
  grunt.registerTask("lint", ["eslint"]);

  // By default, lint and run all tests.
  grunt.registerTask("default", ["eslint", "test"]);
};
