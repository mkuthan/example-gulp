var gulp = require('gulp'),
  concat = require('gulp-concat'),
  jshint = require('gulp-jshint'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify');

var karma = require('karma').server;
var del = require('del');

gulp.task('clean', function (cb) {
  del(['dist'], cb)
});

gulp.task('jshint', function () {
  return gulp.src(['src/js/**/*.js', 'test/js/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
});

gulp.task('test', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true,
    reporters: ['progress', 'junit']
  }, done);
});

gulp.task('watch', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: false,
    reporters: ['progress']
  }, done);
});

gulp.task('build', ['jshint', 'test'], function () {
  return gulp.src('src/js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

gulp.task('default', ['clean'], function () {
  gulp.start('build');
});
