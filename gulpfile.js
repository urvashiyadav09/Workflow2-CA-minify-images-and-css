const gulp 		= require('gulp');
const{src,dest} = require('gulp');
const minifyCSS 	= require("gulp-minify-css");
const minifyImages = require("gulp-imagemin");
const browserSync = require('browser-sync').create();

function css(){
    return src('./css/stylesheet.css')
    .pipe(minifyCSS())
    .pipe(dest('minifycss'))
		.pipe(browserSync.stream());
}
function img(){
	return src('./images/*.*')
	.pipe(minifyImages())
	.pipe(dest('minifyimages'))
	.pipe(browserSync.stream());
}

function watch(){
	browserSync.init({
    server: {
      baseDir: './',
    }
  });

gulp.watch('./css/stylesheet.css' , css);
gulp.watch('./images/*.*',img);
gulp.watch('./*.html').on('change', browserSync.reload)

}

exports.watch =watch;
