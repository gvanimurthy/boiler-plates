'use strict';

const config = require('../gulp-config');
const jsConfig = require('./js-config');
const gulp = require('gulp');
const es = require('event-stream');
const plugins = require('gulp-load-plugins')();
const path = require('path');

module.exports = () => {
	return es.merge([
		gulp.src(jsConfig.jsLibs)
			.pipe(gulp.dest(config.build.script)),
		gulp.src(jsConfig.footable)
			.pipe(plugins.concat('footable.js'))
			.pipe(gulp.dest(path.resolve(config.build.script, 'libs')))
	])
};