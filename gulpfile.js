'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
// const browserSync = require('browser-sync').create();
const del = require('del');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development'; // default - development 
// OR NODE_ENV=production gulp <taskname>


// gulp.task('serve', function(){
// 	browserSync.init({
//      	server: "./"
//  	});

//  	browserSync.watch("./*.*").on('change', browserSync.reload);
// });

 // browserSync.stream();

gulp.task('styles', function () {
	return gulp.src('src/less/**/*.less')  // до * - base, после - relative
		// .pipe(gulpIf(isDevelopment, sourcemaps.init()))
		.pipe(less())
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		// .pipe(concat('all.css'))
		// .pipe(gulpIf(isDevelopment, sourcemaps.write()))
		.pipe(gulp.dest('public/css')); // public+ relative
});

// gulp.task('clean', function(){
// 	return del('public/css');
// });

gulp.task('watcher', function(){
	gulp.watch('src/less/**/*.less', gulp.series('styles'));
});

gulp.task('default', gulp.series('styles', 'watcher'));
