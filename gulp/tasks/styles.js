var gulp = require('gulp'),
sass = require('gulp-sass');

gulp.task('styles', function(){
  return gulp.src('./src/assets/styles/styles.sass')
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest('./src/temp/styles'));
});
