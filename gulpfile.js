'use strict';

var gulp = require('gulp'),
  jshint = require('gulp-jshint'),
  sourcemaps = require('gulp-sourcemaps'),
  uglify = require('gulp-uglify');

var browserify = require('browserify');
var del = require('del');
var karma = require('karma').server;

var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');

var pkg = require('./package.json');

gulp.task('clean', function (cb) {
  del(['build'], cb);
});

gulp.task('jshint', function () {
  return gulp.src(['gulpfile.js', 'karma.conf.js', 'src/js/**/*.js', 'test/js/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('test', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true,
    reporters: ['progress', 'junit', 'coverage'],
    browserify: {
      debug: true
    }
  }, done);
});

gulp.task('watch', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: false,
    reporters: ['progress'],
    browserify: {
      debug: false
    }
  }, done);
});

gulp.task('build', ['jshint', 'test'], function () {
  return browserify(__dirname + '/src/js/calculator.js', {
    debug: true
  })
    .bundle()
    .pipe(source(pkg.name + '.' + pkg.version + '.min.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('build/'));
});

gulp.task('default', ['clean'], function () {
  gulp.start('build');
});
