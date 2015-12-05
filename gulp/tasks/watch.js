var gulp = require('gulp'),
    watch = require('gulp-watch'),
    batch = require('gulp-batch');
    
gulp.task('watch', function () {
    watch('app_client/**/*', batch(function (events, done) {
        gulp.start('default', done);
    }));
});