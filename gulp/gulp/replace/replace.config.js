'use strict';

const config = require('../gulp-config');
const path = require('path');

module.exports = [
	{
		src: path.resolve(config.build.docs, '**', '*.html'),
		regex: new RegExp('="/assets/', 'g'),
		replacement: '="https://static.qgov.net.au/assets/',
		dst: path.resolve(config.build.docs)
	}
];