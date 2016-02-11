"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var operations = exports.operations = {
	add: function add(a, b) {
		return a + b;
	},
	subtract: function subtract(a, b) {
		return a - b;
	}
};
'use strict';

var _arithmatic = require('./arithmatic.js');

var result = _arithmatic.operations.add(1, 2);

console.log(result);
