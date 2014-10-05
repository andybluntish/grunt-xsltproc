# grunt-xsltproc

> Apply XSLT stylesheets to XML documents.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-xsltproc --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-xsltproc');
```

## The "xsltproc" task

### Overview

Run this task with the `grunt xsltproc` command.

#### xsltproc

[xsltproc](http://xmlsoft.org/XSLT/xsltproc.html) is an open-source command line tool for applying XSLT stylesheets to XML documents.

This task requires you to have `xsltproc` installed. If you're on OS X or Linux you probably already have it installed. You can check by running `xsltproc -version` in your terminal.

#### Setup

First, ensure you have `xsltproc` installed. Then, in your project's Gruntfile, add a section named `xsltproc` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  xsltproc: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    }
  }
})
```

### Options

#### options.stylesheet
Type: `String`

Path to the XSLT stylesheet to apply to the files.

#### options.params
Type: `Object`

Pass an object of parameter name/value pairs to the stylesheet. Parameters are passed directly to the `xsltproc` call with the `--param` flag.

#### options.stringparams
Type: `Object`

Pass an object of string parameter name/value pairs to the stylesheet. Parameters are passed directly to the `xsltproc` call with the `--stringparam` flag.

#### options.xinclude
Type: `Boolean`

Process the input document using the XInclude specification. More details on this can be found in the [XInclude specification](http://www.w3.org/TR/xinclude/).

#### options.xincludestyle
Type: `Boolean`

Process the stylesheet using the XInclude specification.

#### options.novalid
Type: `Boolean`

Process the input document skipping the DTD loading phase.


#### options.filepath
Type: `Boolean`

Pass the grunt filepath as stringparam to the XSLT.

### Usage Examples

#### Single file

```js
grunt.initConfig({
  xsltproc: {
    options: {
      stylesheet: 'test/fixtures/compiler.xsl'
    },
    compile: {
      files: {
        'tmp/compile.html': ['test/fixtures/compile.xml']
      }
    }
  }
})
```

#### Directory of files

```js
grunt.initConfig({
  xsltproc: {
    options: {
      stylesheet: 'test/fixtures/compiler.xsl'
    },
    compile: {
      files: [{
        expand: true,
        cwd: 'test/fixtures',
        src: '*.xml',
        dest: 'tmp',
        ext: '.html'
      }]
    }
  }
})
```

#### Passing parameters

```js
grunt.initConfig({
  xsltproc: {
    options: {
      stylesheet: 'test/fixtures/compiler.xsl',
      params: {
        'fav': '/catalogue/album[@id="3"]/title'
      }
    },
    compile: {
      files: {
        'tmp/compile.html': ['test/fixtures/compile.xml']
      }
    }
  }
})
```

#### Passing string parameters

```js
grunt.initConfig({
  xsltproc: {
    options: {
      stylesheet: 'test/fixtures/compiler.xsl',
      stringparams: {
        'title': 'My Music'
      }
    },
    compile: {
      files: {
        'tmp/compile.html': ['test/fixtures/compile.xml']
      }
    }
  }
})
```

#### XInclude

Process the input document using the XInclude specification.

```js
grunt.initConfig({
  xsltproc: {
    options: {
      stylesheet: 'test/fixtures/compiler.xsl',
      xinclude: true
    },
    compile: {
      files: {
        'tmp/compile.html': ['test/fixtures/compile.xml']
      }
    }
  }
})
```

Process the stylesheet using the XInclude specification.

```js
grunt.initConfig({
  xsltproc: {
    options: {
      xincludestyle: true
    },
    compile: {
      options: {
        stylesheet: 'test/fixtures/compiler.xsl'
      }
      files: {
        'tmp/compile.html': ['test/fixtures/compile.xml']
      }
    }
  }
})
```

#### filepath

Process the input documents and using the filepath xsl:param.

```js
grunt.initConfig({
  xsltproc: {
    compile: {
      options: {
        stylesheet: 'test/fixtures/template_filepath.xsl'
        filepath: true
      },
      files: [{
        expand: true,
        cwd: 'test/fixtures',
        src: '*.xml',
        dest: 'tmp',
        ext: '.html'
      }]
    }
  }
})
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="xml" encoding="utf-8" indent="yes" omit-xml-declaration="yes"/>

  <xsl:param name="filepath"/>
  
  <xsl:template match="/">
    ...
  </xsl:template>
</xsl:stylesheet>
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

 * 2014-04-21   v0.4.0   Add option to use XIncludestyle.
 * 2013-11-16   v0.3.0   Enable processing using the XInclude specification.
 * 2013-10-26   v0.2.1   Add documentation for passing in parameters. Update `package.json`.
 * 2013-09-13   v0.2.0   Pass params to the stylesheet via the options object.
 * 2013-09-08   v0.1.0   Initial release.
