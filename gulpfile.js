'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps'); 
const browserSync = require('browser-sync').create();
const del = require('del');

const paths = {
    less:['src/less/**/*.less'],
    js:['src/js/**/*.js'],
    html:['./*.html']
};

gulp.task('styles', function () {
	return gulp.src(paths.less) 
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('public/css'))
		.pipe(browserSync.reload({stream: true})); 
});

gulp.task('scripts', function() {
    return gulp.src(paths.js)
    	.pipe(sourcemaps.init())
    	.pipe(sourcemaps.write())
        .pipe(gulp.dest('public/js'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('entryFiles', function() {
    return gulp.src(paths.html)
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('watcher', function() {
  	gulp.watch(paths.less, ['styles']);
  	gulp.watch(paths.js, ['scripts']);
  	gulp.watch(paths.html, ['entryFiles']);
});

gulp.task('serve', function() {

    browserSync.init({
         server: "./"
     });
});

gulp.task('default', ['entryFiles', 'styles', 'scripts', 'serve', 'watcher']);
