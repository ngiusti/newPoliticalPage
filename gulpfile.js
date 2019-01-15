var gulp = require('gulp');
var uglify = require('gulp-uglify');
var liveReload = require('gulp-livereload');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var autoprefixer = require("gulp-autoprefixer");
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');

// File paths
var DIST_PATH ='public/dist';
var SCRIPTS_PATH = 'public/scripts/**/*.js';
var CSS_PATH = 'public/dist/*.css';

// gulp.task('styles', function() {
//     console.log('starting styles task')
//     return gulp.src(CSS_PATH)
//     .pipe(sourcemaps.init())
//     .pipe(autoprefixer())
//     .pipe(concat('styles.css'))
//     .pipe(minifyCss())
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest(DIST_PATH))
//     .pipe(liveReload());
// })


gulp.task('styles', function() {
    console.log('starting styles task')
    return gulp.src('public/scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(DIST_PATH))
    .pipe(liveReload());
})

gulp.task('scripts', function() {
    console.log('starting scripts task')

    return gulp.src(SCRIPTS_PATH)
        .pipe(uglify())
        .pipe(gulp.dest(DIST_PATH))
        .pipe(liveReload());
})

gulp.task('images', function() {
    console.log('starting images task')
})

gulp.task('default', function() {
    console.log('starting default task')
})

gulp.task('watch', function() {
    console.log('starting watch task');
    require('./server.js');
    liveReload.listen();
    gulp.watch(SCRIPTS_PATH, ['scripts'])
    gulp.watch(CSS_PATH, ['styles'])
})