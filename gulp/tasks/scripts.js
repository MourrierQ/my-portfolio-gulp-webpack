var gulp = require('gulp'),
concat = require('gulp-concat'),
babel = require('gulp-babel');



gulp.task('babel', () => {
  return gulp.src('./src/assets/scripts/**/*.js')
  .pipe(babel({
    presets: ['es2015']
  })
  .pipe(gulp.dest('./src/assets/script')));
});
