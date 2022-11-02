const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const eslint = require('gulp-eslint');
const argv = require('yargs').argv;
const gulpif = require('gulp-if');
const concat = require('gulp-concat');

// Работа со скриптами

let path = {
  src: {
    js: [
      "dev/static/js/tabs.js",
      "dev/static/js/main.js"
    ]
  }
}

module.exports = function script() {
  //return gulp.src('dev/static/js/*.js')
  return gulp.src(path.src.js)
    //.pipe(concat('main.js'))
    //.pipe(eslint())
    //.pipe(eslint.format())
    // .pipe(babel({
    //   presets: ['@babel/env']
    // }))
    .pipe(babel())
    .pipe(gulpif(argv.prod, uglify()))
    .pipe(gulp.dest('dist/static/js/'));
};