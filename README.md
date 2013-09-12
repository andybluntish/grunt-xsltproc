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
In your project's Gruntfile, add a section named `xsltproc` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  xsltproc: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.stylesheet
Type: `String`

Path to the XSLT stylesheet to apply to the files.

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

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

 * 2013-09-13   v0.2.0   Pass params to the stylesheet via the options object.
 * 2013-09-08   v0.1.0   Initial release.
