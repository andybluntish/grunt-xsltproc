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
  },
  xincludestyle: function(test) {
    'use strict';
    test.expect(1);

    var result = grunt.file.read('tmp/xincludestyle.html');
    var expected = grunt.file.read('test/expected/xincludestyle.html');
    test.equal(result, expected, 'should enable the use of xincludes in stylesheets');

    test.done();
  },
  novalid: function(test) {
    'use strict';
    test.expect(1);

    var result = grunt.file.read('tmp/novalid.html');
    var expected = grunt.file.read('test/expected/compile.html');
    test.equal(result, expected, 'should enable the use of novalid');

    test.done();
  },
  filepath: function(test) {
    'use strict';
    test.expect(1);

    var result = grunt.file.read('tmp/filepath.html');
    var expected = grunt.file.read('test/expected/filepath.html');
    test.equal(result, expected, 'should enable the use of filepath');

    test.done();
  },
  html: function(test) {
    'use strict';
    test.expect(1);

    var result = grunt.file.read('tmp/html.html');
    var expected = grunt.file.read('test/expected/html.html');
    test.equal(result, expected, 'should enable the use of html');

    test.done();
  }
  
};

