/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatesimple"]("main",{

/***/ "./src/modules/modals.js":
/*!*******************************!*\
  !*** ./src/modules/modals.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar modals = function modals() {\n  function bindModal(trigger, modal, close) {\n    trigger.addEventListener('click', function (event) {\n      if (event.target) {\n        event.preventDegault();\n      }\n\n      modal.style.display = \"block\";\n      document.body.style.overflow = \"hiden\";\n    });\n    close.addEventListener('click', function () {\n      modal.style.display = \"none\";\n      document.body.style.overflow = \"\";\n    });\n  }\n\n  var popupBtn = document.querySelector('.callback-btn'),\n      modal = document.querySelector('.modal-callback'),\n      popupClose = document.querySelector('.modal-close');\n  bindModal(popupBtn, modal, popupClose);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modals);\n\n//# sourceURL=webpack://simple/./src/modules/modals.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7f19a6a67254e14613d2")
/******/ })();
/******/ 
/******/ }
);