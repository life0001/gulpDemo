# gulpDemo
gulp入门 示例
<pre>
<h3>1.安装Gulp</h3>
安装Gulp之前你需要先安装Node.js。
npm install gulp -g
安装完之后我们创建一个项目文件夹project（名字随意）
然后在该目录下执行 npm init 命令
npm init命令会为你创建一个package.json文件
package.json 中包含各种所需模块（插件）以及项目的配置信息（名称、版本、许可证等）meta 信息。
配置项:
name 名称;
description 应用描述;
version 版本号;
config 应用的配置项;
author 作者;
repository 资源仓库地址;
licenses 授权方式;
directories 目录;
main 应用入口文件;
bin 命令行文件;
dependencies 项目应用运行依赖模块;
devDependencies 项目应用开发环境依赖;
engines 运行引擎;
script 脚本;

然后执行如下命令
npm install gulp --save-dev
这一次，我们局部安装Gulp。使用—save-dev，来更新package.json文件，更新 devDependencies 值，以表明项目需要依赖gulp。
<h3>2.安装Gulp插件</h3>
用npm install 加上下面的英文名 就可以安装相应插件。例：npm install gulp-imagemin -save-dev
sass的编译（gulp-ruby-sass）
自动添加css前缀（gulp-autoprefixer）
压缩css（gulp-minify-css）
js代码校验（gulp-jshint）
合并js文件（gulp-concat）
压缩js代码（gulp-uglify）
压缩图片（gulp-imagemin）
自动刷新页面（gulp-livereload） //需要浏览器安装livereload插件才可以
图片缓存，只有图片替换了才压缩（gulp-cache）
更改提醒（gulp-notify）
清除文件（del）
如果需要一次安装全部，命令如下：
$ npm install gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
<h3>3.新建gulpfile.js文件</h3>
接着我们要创建一个gulpfile.js在根目录下，然后文件内添加如下代码：
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');
    
gulp只有4个方法： task ， watch ， src ，和 dest
task 这个API用来创建任务
watch 这个API用来监听任务
src 这个API是处理的原文件
dest 这个API是处理完存放的路径
<h5>建立任务</h5>
写在gulpfile.js文件内
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
<h3>4.运行</h3>
gulp         // 默认运行，需要设置default的值
gulp images  // 运行图片压缩任务
</pre>
<p>参考链接：<a href="http://blog.csdn.net/yczz/article/details/49636629" target="_blank" >http://blog.csdn.net/yczz/article/details/49636629</a></p>
