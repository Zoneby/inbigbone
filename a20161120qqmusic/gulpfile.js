var gulp = require('gulp')
var compass = require('gulp-compass')
var browserSync = require('browser-sync').create()

gulp.task('compass', function() {
	gulp.src('./sass/*.scss')
		.pipe(compass({
			config_file: './config.rb',
			css: 'css',
			sass: 'sass'
		}))
		.pipe(gulp.dest('css'))
		.pipe(browserSync.stream())
})

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: './'
		}	
	})

	gulp.watch('./*.html').on('change', browserSync.reload)
	gulp.watch('sass/*.scss', ['compass'])
	gulp.watch('js/*.js').on('change', browserSync.reload)
})

gulp.task('watch', ['compass', 'browser-sync'], function() {})