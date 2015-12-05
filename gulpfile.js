
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');
    sourcemaps = require('gulp-sourcemaps');
    del = require('del');
    watch = require('gulp-watch');
    batch = require('gulp-batch');
    randomString = require('random-string');
    templateCache = require('gulp-angular-templatecache');
    minifyCss = require('gulp-minify-css');
    gulpif = require('gulp-if');
    sass = require('gulp-sass');
    
// To set production mode and run: NODE_ENV=production gulp
// To set development mode and run: NODE_ENV=development gulp watch
var env = process.env.NODE_ENV || 'production';

var config = {
    sourceMaps: env === 'development',
    uglifyJs: env !== 'development'
};

gulp.task('default', ['minify-css', 'uglify', 'angular-templates'], function(){});

gulp.task('clean', function () {
  return del(['dist']);
});

gulp.task('clean-dist-tmp', function () {
  return del([
    'dist_tmp'
  ]);
});

gulp.task('uglify', ['clean'], function(){
    return gulp.src(['app_client/**/*.js'])
        .pipe(gulpif(config.sourceMaps, sourcemaps.init({loadMaps: true})))
        .pipe(concat('script.js'))
        .pipe(gulp.dest('dist'))
        .pipe(gulpif(config.uglifyJs, uglify()))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));
});

gulp.task('minify-css', ['clean', 'sass'], function() {
  return gulp.src([
      './dist_tmp/**/*.css'
      , './app_client/css/*.css'
    ])
    .pipe(gulpif(config.sourceMaps, sourcemaps.init()))
    .pipe(concat('style.css'))
    .pipe(minifyCss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

gulp.task('sass', ['clean-dist-tmp'], function () {
  return gulp.src('./app_client/css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist_tmp'));
});

gulp.task('watch', function () {
    watch('app_client/**/*', batch(function (events, done) {
        gulp.start('default', done);
    }));
});

gulp.task('angular-templates', ['clean'], function () {
  return gulp.src('app_client/**/*.html')
    .pipe(templateCache({module: 'app', filename: 'views.js'}))
    .pipe(gulp.dest('dist'));
});