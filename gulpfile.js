/* eslint-disable no-sparse-arrays */
/* eslint-disable @typescript-eslint/no-var-requires */
const gulp = require('gulp')
const concat = require('gulp-concat')
const imagemin = require('gulp-imagemin')
const svgmin = require('gulp-svgmin')
const uglifyJs = require('gulp-uglify-es').default
const autoprefixer = require('gulp-autoprefixer')
const clean = require('gulp-clean')
const minifyCss = require('gulp-clean-css')

gulp.task('img', () => {
  const svgOrigin = ['src/assets/images/***.svg']
  const directoryProject = ['src/assets/images/***']
  const directoryBuiLd = 'src/assets/images/'

  gulp.src(svgOrigin).pipe(svgmin()).pipe(gulp.dest(directoryBuiLd))
  return gulp.src(directoryProject).pipe(imagemin()).pipe(gulp.dest(directoryBuiLd))
})
gulp.task('clean', () => {
  const srcClean = ['./src/assets/css/*.map']
  return gulp.src(srcClean, { read: false }).pipe(clean())
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

gulp.task('css', () => {
  const srcCss = ['src/*.css']
  const distCssBuild = './dist/'
  const distCssDev = './src/'
  return gulp
    .src(srcCss)
    .pipe(
      autoprefixer({
        overrideBrowserlist: [
          'last 2 version',
          'safari 5',
          'ie6',
          'ie7',
          'ie 8',
          'ie 9',
          'opera 12.1',
          'ios 6',
          'android 4',
          'last 99 versions',
          'last 3 versions',
          '> 1%',
          ,
        ],
      })
    )
    .pipe(minifyCss())
    .pipe(gulp.dest(distCssBuild))
    .pipe(gulp.dest(distCssDev))
})

gulp.task('default', () => {
  const files = [
    './src/assets/scripts/***',
    './src/assets/sass/***',
    './src/*',
    './src/assets/images/**',
  ]
  gulp.watch(files, gulp.series('clean', 'img', 'css', 'js'))
})
