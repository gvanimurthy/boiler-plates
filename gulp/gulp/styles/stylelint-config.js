'use strict';

const config = require('../gulp-config');
const path = require('path');

module.exports = {
	"rules": {
		"block-no-empty": true,
		"color-no-invalid-hex": true,
		"declaration-colon-space-after": "always",
		"declaration-colon-space-before": "never",
		"function-comma-space-after": "always",
		"media-feature-colon-space-after": "always",
		"media-feature-colon-space-before": "never",
		"max-empty-lines": 2,
		"selector-list-comma-space-before": "never",
		"comment-no-empty": true,
		"no-duplicate-at-import-rules": true,
		"no-extra-semicolons": true
	},
	"ignoreFiles": path.resolve(config.src.scss, 'vendor/**/*')
};