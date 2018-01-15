/*
* - concatenate js files according to config in jsConfig
* - adds version banner to files
* */

'use strict';

const config = require('../gulp-config');
const jsConfig = require('./js-config').js;
const eslintConfig = require('./eslint-config');
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const reload = require('browser-sync').reload;

module.exports = (cb) => {
	return Object.keys(jsConfig).forEach(function (key) {
		return gulp.src(jsConfig[key])
			.pipe(plugins.eslint(eslintConfig))
			.pipe(plugins.eslint.format())
			.pipe(plugins.sourcemaps.init({largeFile: true}))
			.pipe(plugins.concat(key + '.js'))
			.pipe(plugins.sourcemaps.write())
			.pipe(gulp.dest(config.build.script))
			.pipe(reload({stream: true}));
	})
};