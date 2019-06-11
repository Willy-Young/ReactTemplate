// eslint-disable-next-line no-undef
module.exports = {
	testMatch: [
		'<rootDir>/test/**/*.test.js?(x)',
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
	modulePathIgnorePatterns: [
		'<rootDir>/test/',
	],
	globals: {
		__DEV__: true,
	},
};
