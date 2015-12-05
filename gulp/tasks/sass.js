var gulp = require('gulp'),
    sass = require('gulp-sass');

module.exports = function () {
  return gulp.src('app_client/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist_tmp'));
};