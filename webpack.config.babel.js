/* eslint-disable no-unused-vars,no-undef */
import path from 'path';

import webpack from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

module.exports = (env, argv) => {
	const isProduction = argv && (!argv.mode || argv.mode) === 'production';
	
	const entry = {
		index: './src/index.js',
	};
	
	const plugins = [
		new webpack.DefinePlugin({
			__VERSION__: env?.version,
		}),
	];
	
	if (env?.analyze === true) {
		plugins.push(new BundleAnalyzerPlugin());
	}
	
	return {
		entry,
		plugins,
		
		devServer: {
			contentBase: [
				path.join(__dirname, 'public'),
			],
			compress: true,
			historyApiFallback: true,
			port: 9090,
		},
		
		optimization: {
			minimizer: isProduction ? [new TerserPlugin()] : [],
		},
		
		output: {
			path: path.join(__dirname, 'public/bin'),
			publicPath: '/public/',
			filename: '[name].js',
			chunkFilename: '[name].bundle.js',
		},
		
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: [{
						loader: 'babel-loader',
						options: { cacheDirectory: true },
					}],
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader'],
				},
			],
		},
		
		resolve: {
			modules: [
				path.join(__dirname, '/src/'),
				'node_modules',
			],
		},
	};
};
