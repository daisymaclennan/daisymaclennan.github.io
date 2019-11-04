webpackHotUpdate("static/development/pages/contact-details.js",{

/***/ "./components/ContactField.js":
/*!************************************!*\
  !*** ./components/ContactField.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var ContactField = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "ContactField",
  componentId: "sc-4egp4p-0"
})(["h5{margin-top:0;margin-bottom:10px;opacity:0.8;}h3{margin-top:0;}svg{height:15px;margin-left:15px;}a{display:flex;align-items:center;}@media screen and (max-width:800px){h3{padding-left:0px;font-size:20px;}}@media screen and (min-width:801px){h3{font-weight:bold;margin-left:40px;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (ContactField);

/***/ }),

/***/ "./pages/contact-details/index.js":
/*!****************************************!*\
  !*** ./pages/contact-details/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _static_contactDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/contactDetails */ "./static/contactDetails.js");
/* harmony import */ var _components_ContactField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ContactField */ "./components/ContactField.js");
var _jsxFileName = "/Users/daisymaclennan/Projects/my-portfolio/pages/contact-details/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, _static_contactDetails__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (detail) {
    return __jsx(_components_ContactField__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("h5", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, detail.label), __jsx("a", {
      href: detail.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, detail.value), detail.link !== "" && __jsx("svg", {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fas",
      "data-icon": "link",
      "class": "svg-inline--fa fa-link fa-w-16",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("path", {
      fill: "currentColor",
      d: "M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }))));
  }));
});

/***/ })

})
//# sourceMappingURL=contact-details.js.20222ae69b05127bed40.hot-update.js.map