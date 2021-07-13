/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatesimple"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_togglePopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/togglePopup */ \"./src/modules/togglePopup.js\");\n/* harmony import */ var _modules_togglePopup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_togglePopup__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modals */ \"./src/modules/modals.js\");\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  _modules_togglePopup__WEBPACK_IMPORTED_MODULE_0___default()();\n  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_1__.default)();\n}); //     import countTimer from './modules/countTimer';\n// countTimer('10 july 2021');\n\n//# sourceURL=webpack://simple/./src/index.js?");

/***/ }),

/***/ "./src/modules/modals.js":
/*!*******************************!*\
  !*** ./src/modules/modals.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar modals = function modals() {\n  function bindModal(trigger, modal, close) {\n    trigger.addEventListener('click', function (event) {\n      if (event.target) {\n        event.preventDegault();\n      }\n\n      modal.style.display = \"block\";\n      document.body.style.overflow = \"hiden\";\n    });\n    close.addEventListener('click', function () {\n      modal.style.display = \"none\";\n      document.body.style.overflow = \"\";\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modals);\n\n//# sourceURL=webpack://simple/./src/modules/modals.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("937630c82e499e0e4692")
/******/ })();
/******/ 
/******/ }
);