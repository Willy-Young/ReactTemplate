const path = require('path');
const webpack = require('webpack');

const ESLintPlugin = require('eslint-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (env = {}, argv) => {
	const isProduction = argv && (!argv.mode || argv.mode) === 'production';
	
	const entry = {
		index: './src/index.tsx',
	};
	
	const plugins = [
		new ESLintPlugin({ files: 'src/**/*' }),
		new webpack.DefinePlugin({
			__VERSION__: JSON.stringify(env.version),
		}),
	];
	
	if (env.analyze === true) {
		plugins.push(new BundleAnalyzerPlugin());
	}
	
	const externals = isProduction
		? {
			react: 'React',
			'react-dom': 'ReactDOM',
			simplebar: 'SimpleBar',
		}
		: {};
	
	return {
		entry,
		externals,
		plugins,
		
		devServer: {
			contentBase: [
				path.join(__dirname, ''),
				path.join(__dirname, '/public'),
			],
			compress: true,
			historyApiFallback: true,
			port: 9090,
		},
		
		optimization: {
			minimizer: isProduction ? [new TerserPlugin()] : [],
		},
		
		output: {
			path: path.join(__dirname, '/assets/javascript'),
			publicPath: '/assets/javascript/',
			filename: '[name].js',
			chunkFilename: '[name].bundle.js',
		},
		
		module: {
			rules: [
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader'],
				},
				{
					test: /\.(js|ts)x?$/,
					use: 'ts-loader',
					exclude: /node_modules/,
				},
			],
		},
		
		resolve: {
			extensions: ['.js', '.jsx', '.ts', '.tsx'],
			modules: [
				path.join(__dirname, '/src'),
				'node_modules',
			],
		},
	};
};
