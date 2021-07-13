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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_togglePopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/togglePopup */ \"./src/modules/togglePopup.js\");\n/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modals */ \"./src/modules/modals.js\");\n/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_modals__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  (0,_modules_togglePopup__WEBPACK_IMPORTED_MODULE_0__.default)();\n  _modules_modals__WEBPACK_IMPORTED_MODULE_1___default()();\n});\n\n//# sourceURL=webpack://simple/./src/index.js?");

/***/ }),

/***/ "./src/modules/modals.js":
/*!*******************************!*\
  !*** ./src/modules/modals.js ***!
  \*******************************/
/***/ (() => {

eval("// const modals = () => {\n//     function bindModal(trigger, modal, close) {\n//         trigger.addEventListener('click', (event) => {\n//             if (event.target) {\n//                 event.preventDegault();\n//             }\n//             modal.style.display = \"block\";\n//             document.body.style.overflow = \"hiden\";\n//         });\n//         close.addEventListener('click', () => {\n//             modal.style.display = \"none\";\n//             document.body.style.overflow = \"\";   \n//         });\n//     }\n//     const popupBtn = document.querySelector('.callback-btn'),\n//         modal = document.querySelector('.modal-callback'),\n//         popupClose = document.querySelector('.modal-close');\n//     bindModal(popupBtn, modal, popupClose);\n// };\n// export default modals;\n\n//# sourceURL=webpack://simple/./src/modules/modals.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a2ffd7046162e957e11a")
/******/ })();
/******/ 
/******/ }
);