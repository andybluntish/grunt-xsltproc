var grunt = require('grunt');

exports.xsltproc = {
  compile: function(test) {
    'use strict';
    test.expect(1);

    var result = grunt.file.read('tmp/compile.html');
    var expected = grunt.file.read('test/expected/compile.html');
    test.equal(result, expected, 'should compile XML to HTML');

    test.done();
  },
  stringparams: function(test) {
    'use strict';
    test.expect(1);

    var result = grunt.file.read('tmp/stringparams.html');
    var expected = grunt.file.read('test/expected/stringparams.html');
    test.equal(result, expected, 'should pass string params to stylesheet');

    test.done();
  },
  params: function(test) {
    'use strict';
    test.expect(1);

    var result = grunt.file.read('tmp/params.html');
    var expected = grunt.file.read('test/expected/params.html');
    test.equal(result, expected, 'should pass params to stylesheet');

    test.done();
  },
  xinclude: function(test) {
    'use strict';
    test.expect(1);

    var result = grunt.file.read('tmp/xinclude.html');
    var expected = grunt.file.read('test/expected/xinclude.html');
    test.equal(result, expected, 'should enable the use of xincludes');

    test.done();
  }
};

