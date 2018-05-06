'use strict';
const camelCase = require('camelcase');

module.exports = function (...args) {
	const cased = camelCase.apply(camelCase, args);
	return cased.charAt(0).toUpperCase() + cased.slice(1);
};
