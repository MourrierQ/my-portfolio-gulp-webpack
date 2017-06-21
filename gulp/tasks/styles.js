var gulp = require('gulp'),
sass = require('gulp-sass'),
cleanCSS = require('gulp-clean-css');

gulp.task('styles', function(){
  return gulp.src('./src/assets/styles/**/*.sass')
    .pipe(sass({
      style: 'compressed'
    })).on('error',sass.logError)
    .pipe(gulp.dest('./src/assets/styles'));
});
