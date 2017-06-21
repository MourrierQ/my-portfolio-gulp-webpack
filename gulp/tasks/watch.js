var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch',['default'], function(){
  browserSync.init({
    server: {
      baseDir: "dist"
    }
  });

  watch('./src/index.html', function(){
    gulp.start('default');
  });

  watch('./dist/index.html', function(){
    browserSync.reload();
  });

  watch('./src/assets/styles/**/*.sass', function(){
    gulp.start('default');
    gulp.start('cssInject');
  });

  watch('./src/assets/scripts/**/*.js', function(){
    gulp.start('default');
    gulp.start('scriptsRefresh');
  });

});

gulp.task('cssInject', function(){

  return gulp.src('./dist/css/*.css')
  pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', function(){

  return gulp.src('./dist/scripts/*.js')
  pipe(browserSync.reload());
});
