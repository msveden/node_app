var gulp = require('./gulp')(),
    watch = require('gulp-watch'),
    batch = require('gulp-batch');
    
gulp.task('default', [
    'sass', 
    'minify-css', 
    'babel', 
    'browserify',
    'uglify', 
    'angular-templates'
]);

gulp.task('libs', [
    'browserify-libs'
]);

gulp.task('all', [
    'default', 
    'libs'
]);

gulp.task('watch', function () {
    watch('app_client/**/*', batch(function (events, done) {
        gulp.start('default', done);
    }));
});