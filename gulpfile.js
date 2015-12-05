var gulp = require('./gulp')([
    'clean-dist',
    'clean-dist-tmp',
    'sass',
    'minify-css',
    'uglify',
    'angular-templates'
]);
 
gulp.task('default', ['clean-dist', 'clean-dist-tmp', 'sass', 'minify-css', 'uglify', 'angular-templates']);
