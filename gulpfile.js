var gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
	livereload = require('gulp-livereload'),
	del = require('del');
// 图片压缩
gulp.task('images', function () {
	return gulp.src('img/*')
		.pipe(imagemin({optimizationLevel: 3, progressive: true, interlaced: true}))
		.pipe(gulp.dest('dest/img'));
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