'use strict';

//Required libraries
const gulp = require('gulp');
const webserver = require('gulp-webserver');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');


gulp.task('webserver', () => {
  gulp.src('views')
    .pipe(webserver({
      host: "localhost",
      port: 80,
      livereload: true,
      open: true
    }));
});

gulp.task('images', () => {
  gulp.src('./views/wwwroot/dist/img/*')
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 5})
    ]))
    .pipe(gulp.dest('./views/wwwroot/build/img'));
});

gulp.task('minify-css', () =>{
  return gulp.src('./views/wwwroot/dist/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./views/wwwroot/build/css'))
});

gulp.task('sass', () => {
  return gulp.src('./views/wwwroot/src/sass/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./views/wwwroot/dist/css'));
});

gulp.task('watch', () => {
  gulp.watch('./views/wwwroot/src/sass/*.scss', ['sass']);
  gulp.watch('./views/wwwroot/dist/css/*.css', ['minify-css']);
  gulp.watch('./views/wwwroot/dist/img/*.png', ['images']);
})

gulp.task('default', ['webserver', 'watch']);
