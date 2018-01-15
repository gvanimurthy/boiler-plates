'use strict';

const config = require('../gulp-config');
const path = require('path');

const copyConfig = {
	"build": {
		// images
		versionImages: {
			src : [path.resolve(config.src.versionImages, '**', '*')],
			dst : path.resolve(config.build.versionImages),
			successmsg : 'copied version images'
		},

		//flash
		flash: {
			src : [path.resolve(config.src.flash, '**', '*')],
			dst : path.resolve(config.build.flash),
			successmsg : 'copied flash files'
		},

		includes: {
			src : [path.resolve(config.src.includes, '**', '*')],
			dst : path.resolve(config.build.includes),
			successmsg : 'copied includes'
		},

		// Font awesome fonts
		fontawesomeFonts: {
			src : [path.resolve(config.src.node_modules,'font-awesome', 'fonts', '*.*')],
			dst : path.resolve(config.build.fonts),
			successmsg : 'copied Font awesome fonts'
		},

		// Footable awesome fonts
		footableFonts: {
			src : [path.resolve(config.src.node_modules,'footable', 'css', 'fonts', '*.*')],
			dst : path.resolve(config.build.styles, 'libs', 'fonts'),
			successmsg : 'copied Footable fonts'
		},

		//files that are deployed at root of the server
		rootFiles: {
			src : config.rootFiles,
			dst : config.build.root,
			successmsg : 'copied root files'
		},

		//example templates to build folder
		examples: {
			src : path.resolve(config.src.examples, '**', '*'),
			dst : config.build.examples,
			successmsg : 'copied example files'
		},


	},
	"release": {
		versionImages: {
			src : [path.resolve(config.build.versionImages, '**', '*')],
			dst : path.resolve(config.release.versionImages),
			successmsg : 'copied version images'
		},

		//flash
		flash: {
			src : [path.resolve(config.build.flash, '**', '*')],
			dst : path.resolve(config.release.flash),
			successmsg : 'copied flash files'
		},

		// Font awesome fonts
		fontawesomeFonts: {
			src : [path.resolve(config.build.fonts, '*.*')],
			dst : path.resolve(config.release.fonts),
			successmsg : 'copied Font awesome fonts'
		},

		// Footable awesome fonts
		footableFonts: {
			src : [path.resolve(config.build.styles, 'libs', 'fonts', '*.*')],
			dst : path.resolve(config.release.styles, 'libs', 'fonts'),
			successmsg : 'copied Footable fonts'
		},

		//example templates to docs folder
		docs: {
			src : path.resolve(config.build.examples, '**', '*'),
			dst : config.build.docs,
			successmsg : 'copied docs files'
		},
	}
};

module.exports = copyConfig;