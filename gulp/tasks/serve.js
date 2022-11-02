const gulp = require('gulp');

const imageMinify = require('./imageMinify');
const styles = require('./styles');
const pug2html = require('./pug');
const script = require('./scripts');

const server = require('browser-sync').create();

module.exports = function serve(cb) {
  server.init({
    server: 'dist',
    notify: false,
    open: true,
    cors: true
  });

  gulp.watch('dev/static/images/*/*.{gif,png,jpg,svg,webp}', gulp.series(imageMinify)).on('change', server.reload);
  gulp.watch('dev/static/styles/**/*.scss', gulp.series(styles)).on('change', server.reload);
  gulp.watch('dev/static/js/**/*.js', gulp.series(script)).on('change', server.reload);
  gulp.watch('dev/pug/**/*.pug', gulp.series(pug2html));
  gulp.watch('dist/*.html').on('change', server.reload);

  return cb()
};