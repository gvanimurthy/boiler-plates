'use strict';

const config = require('../gulp-config');
const path = require('path');

const concatConfig = [
	{
		src: [path.resolve(config.src.includes, 'global', 'head-assets-styles.html'), path.resolve(config.src.includes, 'global', 'head-assets-scripts.html')],
		dst: path.resolve(config.build.includes, 'global'),
		filename: 'head-assets.html'
	}
];

module.exports = concatConfig;