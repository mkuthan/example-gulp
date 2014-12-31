module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    files: [
      'src/js/**/*.js',
      'test/js/**/*.spec.js'
    ],
    logLevel: config.LOG_INFO,
    junitReporter: {
      outputFile: 'build/test-results.xml'
    }
  });
};
