const gulp = require('gulp');
const script = require('./gulp/tasks/scripts');
const fonts = require('./gulp/tasks/fonts');
const imageMinify = require('./gulp/tasks/imageMinify');
const styles = require('./gulp/tasks/styles');
const clean = require('./gulp/tasks/clean');
const pug2html = require('./gulp/tasks/pug');
const serve = require('./gulp/tasks/serve');

const dev = gulp.parallel(pug2html, script, styles, imageMinify, fonts);

exports.default = gulp.series(
  clean,
  dev,
  serve
);