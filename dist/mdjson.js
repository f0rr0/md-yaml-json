module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"fs\"\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ },
/* 1 */
/***/ function(module, exports) {

eval("module.exports = require(\"marked\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"marked\"\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22marked%22?");

/***/ },
/* 2 */
/***/ function(module, exports) {

eval("module.exports = require(\"path\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"path\"\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ },
/* 3 */
/***/ function(module, exports) {

eval("module.exports = require(\"util\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"util\"\n// module id = 3\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22util%22?");

/***/ },
/* 4 */
/***/ function(module, exports) {

eval("module.exports = require(\"yaml-front-matter\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"yaml-front-matter\"\n// module id = 4\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22yaml-front-matter%22?");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fs__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_util__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_yaml_front_matter__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_yaml_front_matter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_yaml_front_matter__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_marked__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_marked__);\n/* harmony export (immutable) */ exports[\"processFile\"] = processFile;\n/* harmony export (immutable) */ exports[\"default\"] = processDir;\n\n\n\n\n\n\nconst __esModule = true;\n/* harmony export (immutable) */ exports[\"__esModule\"] = __esModule;\n\n\nfunction processFile(file, opts={}) {\n  const source = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fs__[\"readFileSync\"])(file);\n  const stats = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fs__[\"statSync\"])(file);\n  const meta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_yaml_front_matter__[\"loadFront\"])(source);\n  meta.stub = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_path__[\"basename\"])(file, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_path__[\"extname\"])(file)); // filename to stub\n  meta.mtime = new Date(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_util__[\"inspect\"])(stats.mtime)); // unix mtime to ISO\n  meta.birthtime = new Date(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_util__[\"inspect\"])(stats.birthtime)) // unix birthtime to ISO\n  const html = __WEBPACK_IMPORTED_MODULE_4_marked___default()(meta.__content, opts);\n  delete meta.__content;\n  return {\n    meta,\n    html\n  };\n}\n\nfunction processDir(dir, opts={}) {\n  const filenames = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_fs__[\"readdirSync\"])(dir)\n    .filter(path => path.endsWith('.md') || path.endsWith('.markdown') || path.endsWith('.MD'))\n    .map(path => dir.concat(`/${path}`));\n  const processed = filenames.map(file => processFile(file, opts));\n  return processed;\n}\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./main.js\n// module id = 5\n// module chunks = 0\n\n//# sourceURL=webpack:///./main.js?");

/***/ }
/******/ ]);