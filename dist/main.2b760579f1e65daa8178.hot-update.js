/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3dglo"]("main",{

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar popup = function popup() {\n  function bindPopup(triger, modal, close) {\n    triger.addEventListener('click', function (event) {\n      if (event.target) {\n        event.preventDefault();\n      }\n\n      modal.style.display = \"block\";\n      document.body.style.overflow = \"hidden\";\n    });\n    close.addEventListener('click', function () {\n      modal.style.display = \"none\";\n      document.body.style.overflow = \"\";\n    });\n  }\n\n  var callback = document.querySelector('.modal-callback'),\n      modal = document.querySelector('.modal-overlay'),\n      close = document.querySelector('.modal-close');\n  bindPopup(callback, modal, close);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popup);\n\n//# sourceURL=webpack://3dglo/./src/modules/popup.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("65acee56983b49aabdb1")
/******/ })();
/******/ 
/******/ }
);