var gulp = require('gulp'),
useref = require('gulp-useref'),
gulpif = require('gulp-if'),
uglify = require('gulp-uglify')
minifyCss = require('gulp-clean-css');

gulp.task('default', ['styles', 'babel'], function(){
  return gulp.src('./src/*.html')
    .pipe(useref())
    .pipe(gulpif('./src/assets/scripts/*.js', uglify()))
    .pipe(gulpif('./src/assets/styles/*.css', minifyCss()))
    .pipe(gulp.dest('./dist/'));
});
