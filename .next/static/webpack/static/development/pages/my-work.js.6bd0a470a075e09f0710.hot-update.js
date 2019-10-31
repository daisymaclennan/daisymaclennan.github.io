webpackHotUpdate("static/development/pages/my-work.js",{

/***/ "./pages/my-work/index.js":
/*!********************************!*\
  !*** ./pages/my-work/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_ExpandingSections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ExpandingSections */ "./components/ExpandingSections.js");
/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Projects */ "./components/Projects.js");
/* harmony import */ var _static_myWork__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/myWork */ "./static/myWork.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-image-lightbox */ "./node_modules/react-image-lightbox/dist/index.es.js");
/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-image-lightbox/style.css */ "./node_modules/react-image-lightbox/style.css");
/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "/Users/daisymaclennan/Projects/my-portfolio/pages/my-work/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;








/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      activeDrops = _useState[0],
      setActiveDrops = _useState[1];

  var sliderSettings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  };

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    photoIndex: 0,
    isOpen: false
  }),
      activeImage = _useState2[0],
      setActiveImage = _useState2[1];

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(_components_Projects__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, _static_myWork__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (work) {
    return __jsx("div", {
      className: "project",
      key: work.slug,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("h3", {
      className: "subheading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, work.title), __jsx("h5", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, work.time_period), __jsx(_components_ExpandingSections__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("div", {
      className: "expandingSection",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("button", {
      className: "link--icon",
      onClick: function onClick(e) {
        e.target.classList.toggle("open");
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "Read more", __jsx("svg", {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fas",
      "data-icon": "chevron-down",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("path", {
      fill: "currentColor",
      d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }))), __jsx("div", {
      "class": "expandingSection--child",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, work.description))), __jsx("div", {
      className: "expandingSection",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("button", {
      className: "link--icon",
      onClick: function onClick(e) {
        e.target.classList.toggle("open");
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "Gallery", __jsx("svg", {
      "aria-hidden": "true",
      focusable: "false",
      "data-prefix": "fas",
      "data-icon": "chevron-down",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx("path", {
      fill: "currentColor",
      d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }))), __jsx("div", {
      className: "expandingSection--child",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_6___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sliderSettings, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }), work.img.map(function (i) {
      return __jsx("div", {
        onClick: function onClick() {
          return setActiveImage({
            photoIndex: i.index,
            isOpen: true
          });
        },
        key: i.index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, __jsx("img", {
        src: "/static/img/".concat(i.filename),
        alt: "".concat(i.alt),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }));
    }))))), activeImage.isOpen && __jsx(react_image_lightbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
      isOpen: true,
      mainSrc: "/public/".concat(work.img[activeImage.photoIndex].src),
      onCloseRequest: function onCloseRequest() {
        return setActiveImage({
          isOpen: false
        });
      },
      imageCaption: work.img[activeImage.photoIndex].alt,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }));
  })));
});

/***/ })

})
//# sourceMappingURL=my-work.js.6bd0a470a075e09f0710.hot-update.js.map