/*
 * grunt-xsltproc
 * https://github.com/andybluntish/grunt-xsltproc
 *
 * Copyright (c) 2013 Andy Stanford-Bluntish
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function (grunt) {
  grunt.registerMultiTask(
    "xsltproc",
    "Apply XSLT stylesheets to XML documents.",
    function () {
      var options = this.options();

      // Check for the stylesheet file
      if (options.stylesheet && !grunt.file.exists(options.stylesheet)) {
        grunt.log.error(
          'Stylesheet file "' + options.stylesheet + '" not found.'
        );
        return false;
      }

      var done = this.async();

      // Loop over each file in order
      grunt.util.async.forEachSeries(
        this.files,
        function (file, next) {
          var args = [];

          // Construct arguments from file paths
          file.src
            .filter(function (filepath) {
              // Remove invalid source files
              if (!grunt.file.exists(filepath)) {
                grunt.log.warn('Source file "' + filepath + '" not found.');
                return false;
              } else {
                return true;
              }
            })
            .map(function (filepath) {
              // Call xsltproc
              args.unshift("xsltproc");

              // Add params
              grunt.util._.forOwn(options.params, function (value, key) {
                args.push("--param");
                args.push(key, value);
              });

              // Add string params
              grunt.util._.forOwn(options.stringparams, function (value, key) {
                args.push("--stringparam");
                args.push(key, value);
              });

              //  grunt filepath as stringparam
              if (options.filepath) {
                args.push("--stringparam");
                args.push("filepath", filepath);
              }

              // Add XInclude support
              if (options.xinclude) {
                args.push("--xinclude");
              }

              // Add XInclude support for stylesheets
              if (options.xincludestyle) {
                args.push("--xincludestyle");
              }

              // Add novalid support
              if (options.novalid) {
                args.push("--novalid");
              }

              // the input document is(are) an HTML file(s)
              if (options.html) {
                args.push("--html");
              }

              // Add file paths to the args
              args.push("--output", file.dest);

              // If a stylesheet has been specified, use it
              //   otherwise fallback to linked stylesheets
              if (options.stylesheet) {
                args.push(options.stylesheet);
              }

              args.push(filepath);
            });

          // Make sure grunt creates the destination folders
          grunt.file.write(file.dest, "");

          // Run
          var xslt = grunt.util.spawn(
            {
              cmd: args.shift(),
              args: args,
            },
            function (error, _result, code) {
              if (code === 127) {
                // command not found
                return grunt.warn(
                  "You need to have xsltproc installed and in your PATH for this task to work."
                );
              }
              next(error);
            }
          );

          xslt.stdout.pipe(process.stdout);
          xslt.stderr.pipe(process.stderr);
        },
        done
      );
    }
  );
};
