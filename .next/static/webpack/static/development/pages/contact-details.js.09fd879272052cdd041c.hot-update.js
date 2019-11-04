webpackHotUpdate("static/development/pages/contact-details.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Navigation */ "./components/Navigation.js");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Content */ "./components/Content.js");

var _jsxFileName = "/Users/daisymaclennan/Projects/my-portfolio/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  *:focus {\n    outline: 0px;\n  }\n  li,\n  ul {\n    list-style: none;\n    padding-left: 0;\n  }\n  a {\n    color: #FFFFFF;\n    text-decoration: none;\n  }\n  p {\n    margin-top: 0;\n  }\n  body {\n    background-color: #000000;\n    color: #FFFFFF;\n    -webkit-font-smoothing: antialiased;\n    margin: 0;\n  }\n  /*Name at the top of the page*/\n  h1 {\n    font-family: Playfair Display;\n    font-weight: bold;\n    letter-spacing: 0.02em;\n  }\n  /*Tagline*/\n  h2 {\n    font-family: Raleway;\n    font-weight: 500;\n  }\n  /*Page titles*/\n  h3 {\n    font-family: Playfair Display;\n    font-weight: normal;\n    letter-spacing: 0.02em;\n  }\n  li h3:hover {\n    font-weight: bold;\n  }\n  .title--active {\n    font-weight: bold;\n  }\n  /*Sub titles*/\n  .subheading {\n    font-family: Raleway;\n    font-weight: 600;\n    letter-spacing: 0.1em;\n    text-transform: uppercase;\n    margin-top: 0;\n    margin-bottom: 0;\n    text-align: left;\n  }\n  /*Print link*/\n  .link--print {\n    font-family: Raleway;\n    letter-spacing: 0.02em;\n    font-weight: 500;\n  }\n  /*Icon links*/\n  .link--icon {\n    font-family: Raleway;\n    letter-spacing: 0.04em;\n    color: white;\n    background-color: black;\n    border: 0;\n    display: flex;\n    align-items: center;\n    padding-left: 0;\n    letter-spacing: 0.04em;\n  }\n  @media screen and (max-width: 800px){\n    .link--icon > h3{\n      font-size: 18px;\n      line-height: 22px;\n    }\n  }\n  .link--icon > svg {\n    fill: white !important;\n    width: 16px;\n    margin-left: 15px;\n    min-width: 16px;\n  }\n  h5 {\n    font-family: Raleway;\n    letter-spacing: 0.03em;\n    font-weight: 300;\n  }\n  p {\n    font-family: Raleway;\n    font-weight: 300;\n    opacity: 0.9;\n  }\n  @media screen and (max-width: 1440px) {\n    h1 {\n      font-size: 30px;\n    }\n    h2 {\n      font-size: 24px;\n    }\n    h3 {\n      font-size: 24px;\n      line-height: 34px;\n    }\n  }\n  @media screen and (min-width: 1441px) {\n    h1 {\n      font-size: 48px;\n    }\n    h2 {\n      font-size: 36px;\n    }\n    h3 {\n      font-size: 30px;\n    }\n  }\n  @media screen and (max-width: 1000px) {\n    .link--print {\n      font-size: 14px;\n    }\n    .link--icon {\n      font-size: 18px;\n    }\n    h4 {\n      font-size: 18px;\n    }\n    h5 {\n      font-size: 12px;\n    }\n    p {\n      font-size: 18px;\n      line-height: 25px;\n    }\n  }\n  @media screen and (min-width: 1001px) {\n    .link--print,\n    h4 {\n      font-size: 30px;\n    }\n    .link--icon {\n      font-size: 24px;\n    }\n    .subheading {\n      margin-top: 0;\n    }\n    h5 {\n      font-size: 18px;\n    }\n    p {\n      font-size: 24px;\n      line-height: 35px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"])(_templateObject());

var Layout = function Layout(_ref) {
  var children = _ref.children;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, __jsx(GlobalStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }), __jsx(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "Daisy Maclennan"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "Web developer, Portsmouth UK")), __jsx(_Content__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, __jsx(_Navigation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }), __jsx("div", {
    className: "content--inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, children)));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=contact-details.js.09fd879272052cdd041c.hot-update.js.map