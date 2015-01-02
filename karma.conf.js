'use strict';

module.exports = function (config) {
  config.set({

    browsers: ['PhantomJS'],

    frameworks: ['browserify', 'jasmine'],

    files: [
      'test/js/**/*.js'
    ],

    preprocessors: {
      'test/js/**/*.js': ['browserify']
    },

    browserify: {
      debug: true,
      transform: [
        [{
          ignore: ['test/js/**/*.js', '**/*.html', '**/bower_components/**', '**/node_modules/**']
        }, 'browserify-istanbul']
      ]
    },

    junitReporter: {
      outputFile: 'build/tests/test-results.xml'
    },

    coverageReporter: {
      dir: 'build/coverage',
      reporters: [
        {type: 'html', subdir: 'html'},
        {type: 'cobertura', subdir: '.'}
      ]
    }
  });
};
