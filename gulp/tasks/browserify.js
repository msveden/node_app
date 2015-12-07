var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');
 
var mainFile = 'dist_tmp/main.js';

var options = {
    // extensions: ['.jsx']
};

module.exports = function() {
    return browserify(mainFile, options)
        .external('react')
        .external('react-dom')
        .external('jquery')
        .external('marked')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist_tmp'));
};