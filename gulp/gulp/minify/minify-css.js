'use strict';

const minifyConfig = require('./minify.config');
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const cssnano = require('cssnano');

module.exports = (banner) => {
	return	(cb) => {
		minifyConfig.css.forEach((fileObj) => {
			return gulp.src(fileObj.src)
					.pipe(plugins.postcss([cssnano({
						discardComments: {removeAll: true}
					})]))
					.pipe(plugins.insert.prepend(banner))
					.pipe(gulp.dest(fileObj.dst))
		});
	}
};
