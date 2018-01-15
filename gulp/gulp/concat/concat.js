'use strict';

const concatConfig = require('./concat.config');
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

module.exports = () => {
	return	concatConfig.forEach((fileObj) => {
		return gulp.src(fileObj.src)
			.pipe(plugins.concat(fileObj.filename))
			.pipe(gulp.dest(fileObj.dst))
	})
};