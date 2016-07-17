var	gulp = require('gulp'),
	gutil = require('gulp-util'),
	less = require('gulp-less'),
	watch = require('gulp-watch'),
	concatCss = require('gulp-concat-css'),
	rigger = require('gulp-rigger'),
	order = require("gulp-order"),
	streamqueue = require('streamqueue'),
	autoprefixer = require('gulp-autoprefixer'),
	rename = require('gulp-rename'),
	cssnano = require('gulp-cssnano'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	spritesmith = require('gulp.spritesmith'),
	buff = require('vinyl-buffer'),
	merge = require('merge-stream');

gulp.task('build:css', function(){
	var cssStream = gulp.src('src/css/*.css')
	.pipe(order(["reset.css",
		"fonts.css"]))
	.pipe(concatCss("default.css"))
	.on('error', function(e){
		console.log(e);
	});

	var lessStream = gulp.src('src/css/less/style.less')
	.pipe(less({
		paths: ['src/css/less']
	}))
	.on('error', function(e){
		console.log(e);
	});