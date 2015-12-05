var gulp = require('gulp'),
    templateCache = require('gulp-angular-templatecache');

module.exports = function () {
  return gulp.src('app_client/**/*.html')
    .pipe(templateCache({module: 'app', filename: 'views.js'}))
    .pipe(gulp.dest('dist'));
};