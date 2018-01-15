/*
* - lints scss files
* - generates source maps
* - compiles to css
* - adds version banner to files
* */

'use strict';

const gulp = require('gulp');
const path = require('path');
const plugins = require('gulp-load-plugins')();
const config = require('../gulp-config');
const autoprefixer = require('autoprefixer');
const stylelint   = require('stylelint');
const stylelintConfig = require('./stylelint-config');
const syntax_scss = require('postcss-scss');
const reporter    = require('postcss-reporter');
const reload = require('browser-sync').reload;
const processors = [autoprefixer, stylelint(stylelintConfig), reporter({ clearMessages: true, throwError: true })];

// console.log(config.src.scss);
module.exports = (cb) => {
	return gulp.src(`${config.src.scss}/**/*.scss`)
		.pipe(plugins.postcss(processors, {syntax: syntax_scss}))
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.plumber())
		.pipe(plugins.sass({
			includePaths: [`${config.src}`],
		}))
		.on('error', plugins.sass.logError)
		.pipe(plugins.sourcemaps.write('.', {
			sourceRoot: `${config.src}`,
		}))
		.pipe(gulp.dest(`${config.build.styles}`))
		.pipe(reload({stream: true}));
};