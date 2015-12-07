var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    gulpif = require('gulp-if'),
    config = require('../config');

module.exports = function(){
    return gulp.src(['dist_tmp/bundle.js'])
        .pipe(gulpif(config.sourceMaps, sourcemaps.init({loadMaps: true})))
        .pipe(concat('script.js'))
        .pipe(gulp.dest('dist'))
        .pipe(gulpif(config.uglifyJs, uglify()))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));
};