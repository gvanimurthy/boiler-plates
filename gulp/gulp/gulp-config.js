'use strict';
// config specific imports
const path        = require('path');
const pjson       = require('../package.json');

//base folder names
const basepath = {
	build: pjson.directories.build,
	src: pjson.directories.src,
	release: pjson.directories.release,
	docs: pjson.directories.docs,
	assetsSrc: 'src/main',
};

//asset folder names
const assets = {
	version: 'v'+pjson.version.split('.')[0],
	assets: 'assets',
	includes: 'includes',
	node_modules: 'node_modules',
	styles: 'style',
	fonts: 'fonts',
	images: 'images',
	flash: 'flash',
	scss: 'sass/qgov',
	script: 'script'
};

//other folders
const miscFolders = {
	examples: 'examples'
};


//src assets folder paths
const src = {
	root: path.resolve(basepath.assetsSrc, assets.assets),
	includes: path.resolve(basepath.assetsSrc, assets.assets, assets.includes ),
	node_modules: path.resolve(assets.node_modules),
	versionImages: path.resolve(basepath.assetsSrc, assets.assets, assets.version, assets.images),
	scss: path.resolve(basepath.assetsSrc, assets.assets, assets.version, assets.scss),
	examples: path.resolve(basepath.src, miscFolders.examples),
	script: path.resolve(basepath.assetsSrc, assets.assets, assets.version, assets.script)
};

//build assets folder paths
const build = {
	root: path.resolve(basepath.build),
	includes: path.resolve(basepath.build, assets.assets, assets.includes),
	styles: path.resolve(basepath.build, assets.assets, assets.version, assets.styles ),
	fonts: path.resolve(basepath.build, assets.assets, assets.version, assets.fonts ),
	versionImages: path.resolve(basepath.build, assets.assets, assets.version, assets.images ),
	examples: path.resolve(basepath.build, miscFolders.examples),
	docs: path.resolve(basepath.docs),
	script: path.resolve(basepath.build, assets.assets, assets.version, assets.script)
};

//release assets folder paths
const release = {
	styles: path.resolve(basepath.release, releaseFolders.cdn, assets.assets, assets.version, assets.styles ),
	script: path.resolve(basepath.release, releaseFolders.cdn, assets.assets, assets.version, assets.script ),
	versionImages: path.resolve(basepath.release, releaseFolders.cdn, assets.assets, assets.version, assets.images ),
	flash: path.resolve(basepath.release, releaseFolders.cdn, assets.assets, assets.version, assets.flash ),
	fonts: path.resolve(basepath.release, releaseFolders.cdn, assets.assets, assets.version, assets.fonts )
};

module.exports = {
	basepath: basepath,
	src: src,
	build: build,
	release: release,
	miscFolders: miscFolders
};