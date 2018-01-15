/*
* - combines ext library css files into filename and moves to dst according to config extLib
* */

'use strict';

const gulp = require('gulp');
const config = require('../gulp-config');
const path = require('path');
const plugins = require('gulp-load-plugins')();

const extLib = [
	{
		src: path.resolve(config.src.node_modules, 'footable/css', '*.css'),
		dst: path.resolve(config.build.styles, 'libs'),
		filename: 'footable.css'
	}
];

module.exports = () => {
	return extLib.forEach(function (fileObj) {
		return gulp.src(fileObj.src)
			.pipe(plugins.concat(fileObj.filename))
			.pipe(gulp.dest(fileObj.dst))
	})
};