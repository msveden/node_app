var gulp = require('gulp'),
    babel = require('gulp-babel');
 
module.exports = function() {
    return gulp.src('app_client/jsx/main.jsx')
        .pipe(babel({
            presets: ['react']
        }))
        .pipe(gulp.dest('dist_tmp'));
};