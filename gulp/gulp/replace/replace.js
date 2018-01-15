'use strict';

const replaceConfig = require('./replace.config');
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

module.exports = () => {
	return replaceConfig.forEach((fileObj) => {
		return gulp.src(fileObj.src)
			.pipe(plugins.replace(fileObj.regex, fileObj.replacement))
			.pipe(gulp.dest(fileObj.dst));
	})
};