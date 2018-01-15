'use strict';

const minifyConfig = require('./minify.config');
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

module.exports = (banner) => {
	return	(cb) => {
		minifyConfig.js.forEach((fileObj) => {
			return gulp.src(fileObj.src)
					.pipe(plugins.uglify())
					.pipe(plugins.insert.prepend(banner))
					.pipe(gulp.dest(fileObj.dst))
		});
	}
};