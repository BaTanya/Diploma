var gulp = require('gulp');

var concat = require('gulp-concat');

gulp.task('css-concat', function(){
	return gulp.src(['./style/normalize.css','./style/fonts.css','./style/main.css'])
	.pipe(concat('style.css'))
	.pipe(gulp.dest('./dist/'));
});

var gulp = require('gulp'),
sass = require('gulp-sass');

gulp.task('sass', function(){
	return gulp.src(['./sass/main.sass'])
	.pipe(gulp.dest('./dist'));
});
