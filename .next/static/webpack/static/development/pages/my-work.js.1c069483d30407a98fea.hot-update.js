webpackHotUpdate("static/development/pages/my-work.js",{

/***/ "./components/Navigation.js":
/*!**********************************!*\
  !*** ./components/Navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/daisymaclennan/Projects/my-portfolio/components/Navigation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Navigation = function Navigation(_ref) {
  var className = _ref.className;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var activeRoute = "personal-statement";

  switch (router.pathname) {
    case "/":
      activeRoute = "personal-statement";
      break;

    case "/my-work":
      activeRoute = "my-work";
      break;

    case "/qualifications":
      activeRoute = "qualifications";
      break;

    case "/contact-details":
      activeRoute = "contact-details";
      break;
  }

  return __jsx("nav", {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick(e) {
      return e.target.classList.toggle("open");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("svg", {
    width: "62",
    height: "18",
    viewBox: "0 0 62 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("path", {
    d: "M39.3155 9.12903C39.3155 13.4804 35.7959 17 31.4445 17C27.0931 17 23.5735 13.4804 23.5735 9.12903C23.5735 4.77764 27.0931 1.25806 31.4445 1.25806C35.7959 1.25806 39.3155 4.77764 39.3155 9.12903ZM45.2581 9.12903C45.2581 4.77764 48.7777 1.25806 53.1291 1.25806C57.4805 1.25806 61.0001 4.77764 61.0001 9.12903C61.0001 13.4804 57.4805 17 53.1291 17C48.7777 17 45.2581 13.4804 45.2581 9.12903ZM1.88892 9.12903C1.88892 4.77764 5.4085 1.25806 9.75989 1.25806C14.1113 1.25806 17.6309 4.77764 17.6309 9.12903C17.6309 13.4804 14.1113 17 9.75989 17C5.4085 17 1.88892 13.4804 1.88892 9.12903Z",
    stroke: "white",
    strokeWidth: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }))), __jsx("li", {
    className: activeRoute === "personal-statement" ? "link--active" : "link--inactive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "personal statement")))), __jsx("li", {
    className: activeRoute === "my-work" ? "link--active" : "link--inactive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/my-work",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "my work")))), __jsx("li", {
    className: activeRoute === "qualifications" ? "link--active" : "link--inactive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/qualifications",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "qualifications")))), __jsx("li", {
    className: activeRoute === "contact-details" ? "link--active" : "link--inactive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/contact-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "contact details"))))));
};

var StyledNavigation = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Navigation).withConfig({
  displayName: "Navigation__StyledNavigation",
  componentId: "rpc0mw-0"
})(["ul{margin-top:0;}a{display:block;}.link--active h3{font-weight:bold;}@media screen and (max-width:800px){position:relative;.link--inactive{display:none;opacity:0.9;}.link--active{width:100%;}.link--active h3,.link--inactive h3{pointer-events:none;margin-top:10px;margin-bottom:10px;}button{background:transparent;border:0;position:absolute;padding:0;top:8px;right:0;}svg{pointer-events:none;}.open ~ li{display:block!important;}}@media screen and (min-width:801px){button{display:none;}}@media screen and (min-width:801px) and (max-width:1440px){min-width:355px;.link--active{background-image:url(\"../../static/bullet.svg\");background-size:20px;background-repeat:no-repeat;background-position:0px 10px;padding-left:40px;}h3{margin-bottom:15px;}}@media screen and (min-width:1441px){min-width:532px;.link--active{background-image:url(\"../../static/bullet.svg\");background-repeat:no-repeat;background-position:0px 15px;padding-left:45px;}h3{margin-bottom:25px;}}@media screen and (min-width:801px){h3{margin-top:0;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (StyledNavigation);

/***/ })

})
//# sourceMappingURL=my-work.js.1c069483d30407a98fea.hot-update.js.map