const { src, dest, parallel, series, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean-css');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const media = require('gulp-group-css-media-queries');
const ttf2woff2 = require('gulp-ttf2woff2');
const newer = require('gulp-newer');

function browsersync()
{
  browserSync.init({
    server: { baseDir: 'dist/'},
    online: true
  })
}

function scripts()
{
  return src('src/js/main.js')
  .pipe(uglify())
  .pipe(rename({
    extname: '.min.js'
  }))
  .pipe(dest('dist/js/'))
  .pipe(browserSync.stream())
}

function html()
{
  return src('src/index.html')
  .pipe(dest('dist/'))
  .pipe(browserSync.stream())
}

function styles()
{
  return src('src/scss/style.scss')
  .pipe(sass())
  .pipe(media())
  .pipe(autoprefixer({
    overrideBrowserslist: ['last 10 version'] , grid: true
  }))
  .pipe(clean())
  .pipe(rename({
    extname: '.min.css'
  }))
  .pipe(dest('dist/css/'))
  .pipe(browserSync.stream())
}

function images()
{
  return src('src/images/**/*')
  .pipe(newer('dist/images/'))
  .pipe(imagemin())
  .pipe(dest('dist/images/'))
}

function fonts()
{
  return src('src/fonts/*.ttf')
  .pipe(ttf2woff2())
  .pipe(src('src/fonts/*.{woff,woff2}'))
  .pipe(dest('dist/fonts'))
}

function startwatch()
{
  watch('src/js/**/*.js', scripts)
  watch('src/*.html', html)
  watch('src/scss/*.scss', styles)
  watch('src/images/*', images)
  watch('src/fonts/*', fonts)
}

function jslibs() {
  return src([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/swiper/swiper-bundle.min.js',
  ])
  .pipe(concat('libs.min.js'))
  .pipe(dest('dist/js/'))
}

function csslibs() {
  return src([
    'node_modules/swiper/swiper-bundle.min.css',
    ])
  .pipe(concat('libs.min.css'))
  .pipe(clean())
  .pipe(dest('dist/css'))
}

const build = series(scripts, styles, html)
exports.default = parallel (build, browsersync, startwatch )

exports.fonts = fonts
exports.images = images
exports.browsersync = browsersync
exports.scripts = scripts
exports.html = html
exports.jslibs = jslibs
exports.csslibs = csslibs
