'use strict';

const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const styelint = require('stylelint');
const extractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SSICompileWebpackplugin = require('ssi-compile-webpack-plugin');

const pkg = require('./package.json');
const config = {
	entry: {
		main: [path.resolve('./src/assets/scripts/main.ts')]
	},
	output: {
		filename: pkg.name + '.js',
		path: path.resolve('./dist/')
	},
	target: 'node',
	devServer: {
		contentBase: path.resolve('./dist/'),
		compress: true,
		port: 9000,
		hot: true
	},
	resolve: {
		extensions: ['.ts', '.js'],
		alias: {
			scripts: path.resolve('./src/assets/scripts'),
			styles: path.resolve('./src/assets/styles')
		}
	},
	module: {
		rules: [
			{
				test: /\.(s?)css$/,
				use: extractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						'css-loader?url=false',
						{
							loader: 'postcss-loader',
							options: {
								plugins: [
									autoprefixer({
										browsers: ['last 3 versions', 'iOS 9']
									}),
									styelint({
										extends: 'stylelint-config-standard'
									})
								]
							}
						},
						'sass-loader'
					]
				})
			},
			{
				enforce: 'pre',
				test: /\.ts$/,
				loader: 'tslint-loader',
				options: {
					emitErrors: true,
					failOnHint: true
				}
			},
			{
				test: /\.ts$/,
				use: ['babel-loader', 'ts-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'src/index.html',
			inject: true
		}), new SSICompileWebpackplugin({
			localBaseDir: path.resolve(__dirname, 'src'),
			publicPath: ''
		}),
		new extractTextPlugin(pkg.name + '.css'),
	]
};
module.exports = config;