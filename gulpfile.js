var gulp = require('gulp'),
	concat = require('gulp-concat'),
	cssmin = require('gulp-minify-css'),
	jsmin = require('gulp-uglify'),
	imagemin = require('gulp-imagemin');
// 图片压缩
gulp.task('images', function () {
	return gulp.src('img/*')
		.pipe(imagemin({optimizationLevel: 3, progressive: true, interlaced: true}))
		.pipe(gulp.dest('dest/img'));
});
// css合并压缩
gulp.task('cssmin', function () {
	return gulp.src('uzindex.css')
			.pipe(concat('uzindexMin.css'))
			.pipe(cssmin())
			.pipe(gulp.dest('dest/'));
});

// clean
gulp.task('Clean', function (cb) {
	del(['dest/img'], cb)
});
// livereload
gulp.task('watch', function () {
	livereload.listen();
	gulp.watch(['angular.html']).on('change', livereload.changed);
});
// default task
gulp.task('default', function () {
  gulp.start('images');
});
