var instapack =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	var jsonpArray = window["webpackJsonpinstapack"] = window["webpackJsonpinstapack"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"dll"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/js/blazor-interop.ts":
/*!*************************************!*\
  !*** ./client/js/blazor-interop.ts ***!
  \*************************************/
/*! exports provided: hello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hello\", function() { return hello; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert */ \"./node_modules/sweetalert/dist/sweetalert.min.js\");\n/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\nfunction hello(name) {\r\n    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(this, void 0, void 0, function* () {\r\n        yield sweetalert__WEBPACK_IMPORTED_MODULE_1___default()({\r\n            title: 'Hello ' + name,\r\n            text: 'This message is brought to you by instapack + Blazor',\r\n            icon: \"success\",\r\n        });\r\n        return 'Antono';\r\n    });\r\n}\r\n//# sourceMappingURL=blazor-interop.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnN0YXBhY2svLi9jbGllbnQvanMvYmxhem9yLWludGVyb3AudHM/N2JkOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEI7QUFFdkIsU0FBZSxLQUFLLENBQUMsSUFBWTs7UUFDcEMsTUFBTSxpREFBSSxDQUFDO1lBQ1AsS0FBSyxFQUFFLFFBQVEsR0FBRyxJQUFJO1lBQ3RCLElBQUksRUFBRSxzREFBc0Q7WUFDNUQsSUFBSSxFQUFFLFNBQVM7U0FDbEIsQ0FBQyxDQUFDO1FBRUgsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztDQUFBIiwiZmlsZSI6Ii4vY2xpZW50L2pzL2JsYXpvci1pbnRlcm9wLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydCc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGVsbG8obmFtZTogc3RyaW5nKSB7XHJcbiAgICBhd2FpdCBzd2FsKHtcclxuICAgICAgICB0aXRsZTogJ0hlbGxvICcgKyBuYW1lLFxyXG4gICAgICAgIHRleHQ6ICdUaGlzIG1lc3NhZ2UgaXMgYnJvdWdodCB0byB5b3UgYnkgaW5zdGFwYWNrICsgQmxhem9yJyxcclxuICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAnQW50b25vJztcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/js/blazor-interop.ts\n");

/***/ }),

/***/ "./client/js/index.ts":
/*!****************************!*\
  !*** ./client/js/index.ts ***!
  \****************************/
/*! exports provided: hello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ts_polyfill_lib_es2016_array_include__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-polyfill/lib/es2016-array-include */ \"./node_modules/ts-polyfill/lib/es2016-array-include.js\");\n/* harmony import */ var ts_polyfill_lib_es2016_array_include__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ts_polyfill_lib_es2016_array_include__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ts_polyfill_lib_es2017_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-polyfill/lib/es2017-object */ \"./node_modules/ts-polyfill/lib/es2017-object.js\");\n/* harmony import */ var ts_polyfill_lib_es2017_object__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ts_polyfill_lib_es2017_object__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ts_polyfill_lib_es2017_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ts-polyfill/lib/es2017-string */ \"./node_modules/ts-polyfill/lib/es2017-string.js\");\n/* harmony import */ var ts_polyfill_lib_es2017_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ts_polyfill_lib_es2017_string__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ts_polyfill_lib_es2018_async_iterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ts-polyfill/lib/es2018-async-iterable */ \"./node_modules/ts-polyfill/lib/es2018-async-iterable.js\");\n/* harmony import */ var ts_polyfill_lib_es2018_async_iterable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ts_polyfill_lib_es2018_async_iterable__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ts_polyfill_lib_es2018_promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ts-polyfill/lib/es2018-promise */ \"./node_modules/ts-polyfill/lib/es2018-promise.js\");\n/* harmony import */ var ts_polyfill_lib_es2018_promise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ts_polyfill_lib_es2018_promise__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var ts_polyfill_lib_es2019_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ts-polyfill/lib/es2019-array */ \"./node_modules/ts-polyfill/lib/es2019-array.js\");\n/* harmony import */ var ts_polyfill_lib_es2019_array__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ts_polyfill_lib_es2019_array__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var ts_polyfill_lib_es2019_object__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ts-polyfill/lib/es2019-object */ \"./node_modules/ts-polyfill/lib/es2019-object.js\");\n/* harmony import */ var ts_polyfill_lib_es2019_object__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ts_polyfill_lib_es2019_object__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var ts_polyfill_lib_es2019_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ts-polyfill/lib/es2019-string */ \"./node_modules/ts-polyfill/lib/es2019-string.js\");\n/* harmony import */ var ts_polyfill_lib_es2019_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ts_polyfill_lib_es2019_string__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var ts_polyfill_lib_es2020_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ts-polyfill/lib/es2020-string */ \"./node_modules/ts-polyfill/lib/es2020-string.js\");\n/* harmony import */ var ts_polyfill_lib_es2020_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ts_polyfill_lib_es2020_string__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap */ \"./node_modules/bootstrap/dist/js/bootstrap.js\");\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _blazor_interop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blazor-interop */ \"./client/js/blazor-interop.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"hello\", function() { return _blazor_interop__WEBPACK_IMPORTED_MODULE_10__[\"hello\"]; });\n\n\r\n\r\n\r\n // for-await-of\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnN0YXBhY2svLi9jbGllbnQvanMvaW5kZXgudHM/ODBlMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEM7QUFDUDtBQUNBO0FBQ1EsQ0FBRyxlQUFlO0FBQ3pCO0FBQ0Y7QUFDQztBQUNBO0FBQ0E7QUFFcEI7QUFFYyIsImZpbGUiOiIuL2NsaWVudC9qcy9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndHMtcG9seWZpbGwvbGliL2VzMjAxNi1hcnJheS1pbmNsdWRlJztcclxuaW1wb3J0ICd0cy1wb2x5ZmlsbC9saWIvZXMyMDE3LW9iamVjdCc7XHJcbmltcG9ydCAndHMtcG9seWZpbGwvbGliL2VzMjAxNy1zdHJpbmcnO1xyXG5pbXBvcnQgJ3RzLXBvbHlmaWxsL2xpYi9lczIwMTgtYXN5bmMtaXRlcmFibGUnOyAgIC8vIGZvci1hd2FpdC1vZlxyXG5pbXBvcnQgJ3RzLXBvbHlmaWxsL2xpYi9lczIwMTgtcHJvbWlzZSc7XHJcbmltcG9ydCAndHMtcG9seWZpbGwvbGliL2VzMjAxOS1hcnJheSc7XHJcbmltcG9ydCAndHMtcG9seWZpbGwvbGliL2VzMjAxOS1vYmplY3QnO1xyXG5pbXBvcnQgJ3RzLXBvbHlmaWxsL2xpYi9lczIwMTktc3RyaW5nJztcclxuaW1wb3J0ICd0cy1wb2x5ZmlsbC9saWIvZXMyMDIwLXN0cmluZyc7XHJcblxyXG5pbXBvcnQgJ2Jvb3RzdHJhcCc7XHJcblxyXG5leHBvcnQgKiBmcm9tICcuL2JsYXpvci1pbnRlcm9wJztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/js/index.ts\n");

/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./client/js/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ryan\source\repos\BelajarBlazor\BelajarBlazor\client\js\index.ts */"./client/js/index.ts");


/***/ })

/******/ });