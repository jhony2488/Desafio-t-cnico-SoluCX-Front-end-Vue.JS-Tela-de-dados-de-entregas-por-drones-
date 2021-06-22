/* eslint-disable @typescript-eslint/no-var-requires */
const gulp = require('gulp')
const concat = require('gulp-concat')
const imagemin = require('gulp-imagemin')
const svgmin = require('gulp-svgmin')
const uglifyJs = require('gulp-uglify-es').default

gulp.task('img', () => {
  const svgOrigin = ['/assets/images/***.svg']
  const directoryProject = ['/assets/images/***']
  const directoryBuiLd = '/assets/images/'

  gulp.src(svgOrigin).pipe(svgmin()).pipe(gulp.dest(directoryBuiLd))
  return gulp.src(directoryProject).pipe(imagemin()).pipe(gulp.dest(directoryBuiLd))
})

gulp.task('js', () => {
  const srcJs = [
    './public/scripts/js/html5Shiv.js',
    './public/scripts/js/respond.js',
    './public/scripts/js/selectivizr.js',
    './public/scripts/js/respimage.js',
    './public/scripts/js/acessibilidade.js',
    './public/scripts/js/jquery.js',
  ]
  const distJs = ['./public/scripts/js/']
  gulp
    .src([srcJs[0], srcJs[1], srcJs[2], srcJs[3]])
    .pipe(concat('allPolify.js'))
    .pipe(gulp.dest(distJs))
  gulp.src(srcJs[0]).pipe(uglifyJs()).pipe(gulp.dest(distJs))
  gulp.src(srcJs[1]).pipe(uglifyJs()).pipe(gulp.dest(distJs))
  gulp.src(srcJs[2]).pipe(uglifyJs()).pipe(gulp.dest(distJs))
  gulp.src(srcJs[3]).pipe(uglifyJs()).pipe(gulp.dest(distJs))
  gulp.src(srcJs[4]).pipe(uglifyJs()).pipe(gulp.dest(distJs))
  return gulp.src('./public/scripts/js/allPolify.js').pipe(uglifyJs()).pipe(gulp.dest(distJs))
})
