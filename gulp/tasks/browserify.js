var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');
 
var mainFile = 'dist_tmp/main.js';

module.exports = function() {
    return browserify(mainFile)
        .external('react')
        .external('react-dom')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist_tmp'));
};