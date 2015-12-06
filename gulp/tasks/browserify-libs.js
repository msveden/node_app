var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');
 
module.exports = function() {
    return browserify()
        .require('react')
        .require('react-dom')
        .require('jquery')
        .bundle()
        .pipe(source('libs.js'))
        .pipe(gulp.dest('dist_libs'));
};