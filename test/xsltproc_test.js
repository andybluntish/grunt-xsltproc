var grunt = require('grunt');

exports.xsltproc = {
  compile: function(test) {
    'use strict';
    test.expect(1);

    var result = grunt.file.read('tmp/compile.html');
    var expected = grunt.file.read('test/expected/compile.html');
    test.equal(result, expected, 'should compile XML to HTML');

    test.done();
  }
};

