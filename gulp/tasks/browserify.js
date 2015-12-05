var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');
 
module.exports = function() {
    return browserify('app_client/js/main.js')
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('bundle.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('dist_tmp'));
};