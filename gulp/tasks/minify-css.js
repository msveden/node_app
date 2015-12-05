var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    minifyCss = require('gulp-minify-css'),
    gulpif = require('gulp-if'),
    config = require('../config');

module.exports = function() {
  return gulp.src([
      'dist_tmp/**/*.css',
      'app_client/css/*.css'
    ])
    .pipe(gulpif(config.sourceMaps, sourcemaps.init()))
    .pipe(concat('style.css'))
    .pipe(minifyCss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
};