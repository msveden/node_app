var gulp = require('./gulp')([
    'clean-dist',
    'clean-dist-tmp',
    'sass',
    'minify-css',
    'uglify',
    'angular-templates',
    'browserify'
]);
 
gulp.task('default', ['clean-dist', 'clean-dist-tmp', 'sass', 'minify-css', 'browserify', 'uglify', 'angular-templates']);
