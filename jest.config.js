// eslint-disable-next-line no-undef
module.exports = {
	preset: 'ts-jest/presets/js-with-ts',
	testMatch: [
		'<rootDir>/test/**/*.test.(js|ts)?(x)',
	],
	modulePaths: [
		'<rootDir>/node_modules/',
		'<rootDir>/src/',
	],
	collectCoverage: true,
	coveragePathIgnorePatterns: [
		'/node_modules/',
		'<rootDir>/test/',
	],
	globals: {
		__DEV__: true,
	},
};
