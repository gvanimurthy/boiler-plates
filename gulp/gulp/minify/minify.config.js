'use strict';

const config = require('../gulp-config');
const path = require('path');

const minifyConfig = {
	css: [
		{
			src: path.resolve(config.build.styles, '**/*.css'),
			dst: path.resolve(config.release.styles)
		}
	],
	js: [
		{
			src: path.resolve(config.build.script, '**/*.js'),
			dst: path.resolve(config.release.script)
		}
	]
};

module.exports = minifyConfig;