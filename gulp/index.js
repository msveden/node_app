var gulp = require('gulp');

var tasks = [
    { name: 'clean-dist', depends: []},
    { name: 'clean-dist-tmp', depends: []},
    { name: 'clean-dist-libs', depends: []},
    { name: 'sass', depends: ['clean-dist', 'clean-dist-tmp']},
    { name: 'minify-css', depends: ['clean-dist', 'clean-dist-tmp', 'sass']},
    { name: 'uglify', depends: ['clean-dist', 'clean-dist-tmp', 'browserify']},
    { name: 'angular-templates', depends: ['clean-dist', 'clean-dist-tmp']},
    { name: 'browserify', depends: ['clean-dist', 'clean-dist-tmp', 'babel']},
    { name: 'browserify-libs', depends: ['clean-dist-libs']},
    { name: 'babel', depends: ['clean-dist', 'clean-dist-tmp']}
];
 
module.exports = function() {
    tasks.forEach(function(task) {
        gulp.task(task.name, task.depends, require('./tasks/' + task.name));
    });
 
    return gulp;
};