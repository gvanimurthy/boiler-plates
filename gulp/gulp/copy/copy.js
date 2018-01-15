'use strict';

const copyConfig = require('./copy.config');
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const reload = require('browser-sync').reload;


module.exports = (type = '', content = '') => {
	// return (cb) => {
	// 	if (type === 'build') {
	// 		if((content === 'examples' || content === 'includes')) {
	// 			return gulp.src(`${copyConfig.build.examples.src}`)
	// 				.pipe(gulp.dest(`${copyConfig.build.examples.dst}`))
	// 				.pipe(plugins.shell(['node node-tasks/ssi-to-static.js']))
	// 				.pipe(reload({stream: true}))
	// 		}
	// 		else {
	// 			return gulp.src(`${copyConfig[type][content].src}`)
	// 				.pipe(gulp.dest(`${copyConfig[type][content].dst}`))
	// 				.pipe(reload({stream: true}))
	// 		}
	// 	}
	// 	else {
	// 		return console.log('not content');
	// 		// return 	Object.keys(copyConfig[type]).forEach(function (key) {
	// 		// 				let fileObj = copyConfig[type][key];
	// 		// 				console.log(gulp);
	// 		// 				return gulp.src(`${fileObj.src}`)
	// 		// 					.pipe(gulp.dest(`${fileObj.dst}`));
	// 		// 			});
	// 	}
	// }
	return (cb) => {
		if(type === 'build' && content !== '') {
			if((content === 'examples' || content === 'includes')) {
				return gulp.src(`${copyConfig[type][content].src}`)
					.pipe(gulp.dest(`${copyConfig[type][content].dst}`))
					.pipe(plugins.shell(['node node-tasks/ssi-to-static.js']))
					.pipe(reload({stream: true}))
			}
			else {
				return gulp.src(`${copyConfig[type][content].src}`)
								.pipe(gulp.dest(`${copyConfig[type][content].dst}`))
								.pipe(reload({stream: true}))
			}
		}
		else {
			Object.keys(copyConfig[type]).forEach(function (key) {
				var fileObj = copyConfig[type][key];
				return gulp.src(`${fileObj.src}`)
					.pipe(gulp.dest(`${fileObj.dst}`));
			});
		}
	}
};