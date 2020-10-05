const path = require('path');

module.exports = {
	addons: [
		'@storybook/addon-actions/register',
		'@storybook/addon-knobs/register',
	],
	stories: ['./**/*.stories.js'],
	webpackFinal: async config => {
		config.module.rules.push({
			test: /\.(js|ts)x?$/,
			exclude: /node_modules/,
			use: [
				{
					loader: 'ts-loader',
					options: {
						transpileOnly: true,
					},
				},
			],
		});
		config.module.rules.push({
			test: /\.css$/,
			use: ['style-loader', 'css-loader'],
		});
		config.module.rules.push({
			test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
			use: ['file-loader'],
		});
		config.resolve.modules.push(path.join(__dirname, '../src'));
		config.resolve.extensions.push('.ts', '.tsx');
		return config;
	},
};
