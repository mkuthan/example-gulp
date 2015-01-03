'use strict';

module.exports = function (config) {
  config.set({

    browsers: ['PhantomJS'],

    frameworks: ['jasmine', 'browserify'],

    files: [
      'test/js/**/*.js'
    ],

    preprocessors: {
      'test/js/**/*.js': ['browserify']
    },

    logLevel: 'LOG_DEBUG',

    browserify: {
      debug: true,
      transform: ['browserify-istanbul']
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
