const gulp = require('gulp');
const webserver = require('gulp-webserver');

gulp.task('server', () => {
  gulp.src('./views')
    .pipe(webserver({
       livereload: true,
       host: 'localhost',
       port: 8080,
       open: true
    }));
});
