webpackHotUpdate("static/development/pages/my-work.js",{

/***/ "./components/LightboxStyle.js":
/*!*************************************!*\
  !*** ./components/LightboxStyle.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n@keyframes closeWindow {\n0% {\n  opacity: 1;\n}\n100% {\n  opacity: 0;\n}\n}\n\n.ril__outer {\nbackground-color: rgba(0, 0, 0, 0.85);\noutline: none;\ntop: 0;\nleft: 0;\nright: 0;\nbottom: 0;\nz-index: 1000;\nwidth: 100%;\nheight: 100%;\n-ms-content-zooming: none;\n-ms-user-select: none;\n-ms-touch-select: none;\ntouch-action: none;\n}\n\n.ril__outerClosing {\nopacity: 0;\n}\n\n.ril__inner {\nposition: absolute;\ntop: 0;\nleft: 0;\nright: 0;\nbottom: 0;\n}\n\n.ril__image,\n.ril__imagePrev,\n.ril__imageNext {\nposition: absolute;\ntop: 0;\nright: 0;\nbottom: 0;\nleft: 0;\nmargin: auto;\nmax-width: none;\n-ms-content-zooming: none;\n-ms-user-select: none;\n-ms-touch-select: none;\ntouch-action: none;\n}\n\n.ril__imageDiscourager {\nbackground-repeat: no-repeat;\nbackground-position: center;\nbackground-size: contain;\n}\n\n.ril__navButtons {\nborder: none;\nposition: absolute;\ntop: 0;\nbottom: 0;\nwidth: 20px;\nheight: 34px;\npadding: 40px 30px;\nmargin: auto;\ncursor: pointer;\nopacity: 0.7;\n}\n.ril__navButtons:hover {\nopacity: 1;\n}\n.ril__navButtons:active {\nopacity: 0.7;\n}\n\n.ril__navButtonPrev {\nleft: 0;\nbackground: rgba(0, 0, 0, 0.2)\n  url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjM0Ij48cGF0aCBkPSJtIDE5LDMgLTIsLTIgLTE2LDE2IDE2LDE2IDEsLTEgLTE1LC0xNSAxNSwtMTUgeiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==')\n  no-repeat center;\n}\n\n.ril__navButtonNext {\nright: 0;\nbackground: rgba(0, 0, 0, 0.2)\n  url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjM0Ij48cGF0aCBkPSJtIDEsMyAyLC0yIDE2LDE2IC0xNiwxNiAtMSwtMSAxNSwtMTUgLTE1LC0xNSB6IiBmaWxsPSIjRkZGIi8+PC9zdmc+')\n  no-repeat center;\n}\n\n.ril__downloadBlocker {\nposition: absolute;\ntop: 0;\nleft: 0;\nright: 0;\nbottom: 0;\nbackground-image: url('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');\nbackground-size: cover;\n}\n\n.ril__caption,\n.ril__toolbar {\nbackground-color: rgba(0, 0, 0, 0.5);\nposition: absolute;\nleft: 0;\nright: 0;\ndisplay: flex;\njustify-content: space-between;\n}\n\n.ril__caption {\nfont-family: Raleway;\nletter-spacing: 0.03em;\nbottom: 0;\nmax-height: 150px;\noverflow: auto;\n}\n\n.ril__captionContent {\npadding: 10px 20px;\ncolor: #fff;\n}\n\n.ril__toolbar {\ntop: 0;\nheight: 50px;\n}\n\n.ril__toolbarSide {\nheight: 50px;\nmargin: 0;\n}\n\n.ril__toolbarLeftSide {\npadding-left: 20px;\npadding-right: 0;\nflex: 0 1 auto;\noverflow: hidden;\ntext-overflow: ellipsis;\n}\n\n.ril__toolbarRightSide {\npadding-left: 0;\npadding-right: 20px;\nflex: 0 0 auto;\n}\n\n.ril__toolbarItem {\ndisplay: inline-block;\nline-height: 50px;\npadding: 0;\ncolor: #fff;\nfont-size: 120%;\nmax-width: 100%;\noverflow: hidden;\ntext-overflow: ellipsis;\nwhite-space: nowrap;\n}\n\n.ril__toolbarItemChild {\nvertical-align: middle;\n}\n\n.ril__builtinButton {\nwidth: 40px;\nheight: 35px;\ncursor: pointer;\nborder: none;\nopacity: 0.7;\n}\n.ril__builtinButton:hover {\nopacity: 1;\n}\n.ril__builtinButton:active {\noutline: none;\n}\n\n.ril__builtinButtonDisabled {\ncursor: default;\nopacity: 0.5;\n}\n.ril__builtinButtonDisabled:hover {\nopacity: 0.5;\n}\n\n.ril__closeButton {\nbackground: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIj48cGF0aCBkPSJtIDEsMyAxLjI1LC0xLjI1IDcuNSw3LjUgNy41LC03LjUgMS4yNSwxLjI1IC03LjUsNy41IDcuNSw3LjUgLTEuMjUsMS4yNSAtNy41LC03LjUgLTcuNSw3LjUgLTEuMjUsLTEuMjUgNy41LC03LjUgLTcuNSwtNy41IHoiIGZpbGw9IiNGRkYiLz48L3N2Zz4=')\n  no-repeat center;\n}\n\n.ril__zoomInButton {\nbackground: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGcgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTEgMTlsNi02Ii8+PHBhdGggZD0iTTkgOGg2Ii8+PHBhdGggZD0iTTEyIDV2NiIvPjwvZz48Y2lyY2xlIGN4PSIxMiIgY3k9IjgiIHI9IjciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')\n  no-repeat center;\n}\n\n.ril__zoomOutButton {\nbackground: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGcgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTEgMTlsNi02Ii8+PHBhdGggZD0iTTkgOGg2Ii8+PC9nPjxjaXJjbGUgY3g9IjEyIiBjeT0iOCIgcj0iNyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')\n  no-repeat center;\n}\n\n.ril__outerAnimating {\nanimation-name: closeWindow;\n}\n\n@keyframes pointFade {\n0%,\n19.999%,\n100% {\n  opacity: 0;\n}\n20% {\n  opacity: 1;\n}\n}\n\n.ril__loadingCircle {\nwidth: 60px;\nheight: 60px;\nposition: relative;\n}\n\n.ril__loadingCirclePoint {\nwidth: 100%;\nheight: 100%;\nposition: absolute;\nleft: 0;\ntop: 0;\n}\n.ril__loadingCirclePoint::before {\ncontent: '';\ndisplay: block;\nmargin: 0 auto;\nwidth: 11%;\nheight: 30%;\nbackground-color: #fff;\nborder-radius: 30%;\nanimation: pointFade 800ms infinite ease-in-out both;\n}\n.ril__loadingCirclePoint:nth-of-type(1) {\ntransform: rotate(0deg);\n}\n.ril__loadingCirclePoint:nth-of-type(7) {\ntransform: rotate(180deg);\n}\n.ril__loadingCirclePoint:nth-of-type(1)::before,\n.ril__loadingCirclePoint:nth-of-type(7)::before {\nanimation-delay: -800ms;\n}\n.ril__loadingCirclePoint:nth-of-type(2) {\ntransform: rotate(30deg);\n}\n.ril__loadingCirclePoint:nth-of-type(8) {\ntransform: rotate(210deg);\n}\n.ril__loadingCirclePoint:nth-of-type(2)::before,\n.ril__loadingCirclePoint:nth-of-type(8)::before {\nanimation-delay: -666ms;\n}\n.ril__loadingCirclePoint:nth-of-type(3) {\ntransform: rotate(60deg);\n}\n.ril__loadingCirclePoint:nth-of-type(9) {\ntransform: rotate(240deg);\n}\n.ril__loadingCirclePoint:nth-of-type(3)::before,\n.ril__loadingCirclePoint:nth-of-type(9)::before {\nanimation-delay: -533ms;\n}\n.ril__loadingCirclePoint:nth-of-type(4) {\ntransform: rotate(90deg);\n}\n.ril__loadingCirclePoint:nth-of-type(10) {\ntransform: rotate(270deg);\n}\n.ril__loadingCirclePoint:nth-of-type(4)::before,\n.ril__loadingCirclePoint:nth-of-type(10)::before {\nanimation-delay: -400ms;\n}\n.ril__loadingCirclePoint:nth-of-type(5) {\ntransform: rotate(120deg);\n}\n.ril__loadingCirclePoint:nth-of-type(11) {\ntransform: rotate(300deg);\n}\n.ril__loadingCirclePoint:nth-of-type(5)::before,\n.ril__loadingCirclePoint:nth-of-type(11)::before {\nanimation-delay: -266ms;\n}\n.ril__loadingCirclePoint:nth-of-type(6) {\ntransform: rotate(150deg);\n}\n.ril__loadingCirclePoint:nth-of-type(12) {\ntransform: rotate(330deg);\n}\n.ril__loadingCirclePoint:nth-of-type(6)::before,\n.ril__loadingCirclePoint:nth-of-type(12)::before {\nanimation-delay: -133ms;\n}\n.ril__loadingCirclePoint:nth-of-type(7) {\ntransform: rotate(180deg);\n}\n.ril__loadingCirclePoint:nth-of-type(13) {\ntransform: rotate(360deg);\n}\n.ril__loadingCirclePoint:nth-of-type(7)::before,\n.ril__loadingCirclePoint:nth-of-type(13)::before {\nanimation-delay: 0ms;\n}\n\n.ril__loadingContainer {\nposition: absolute;\ntop: 0;\nright: 0;\nbottom: 0;\nleft: 0;\n}\n.ril__imagePrev .ril__loadingContainer,\n.ril__imageNext .ril__loadingContainer {\ndisplay: none;\n}\n\n.ril__errorContainer {\nposition: absolute;\ntop: 0;\nright: 0;\nbottom: 0;\nleft: 0;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\ncolor: #fff;\n}\n.ril__imagePrev .ril__errorContainer,\n.ril__imageNext .ril__errorContainer {\ndisplay: none;\n}\n\n.ril__loadingContainer__icon {\ncolor: #fff;\nposition: absolute;\ntop: 50%;\nleft: 50%;\ntransform: translateX(-50%) translateY(-50%);\n}\n\n/*My own custom css*/\n/*Slick slides*/\n.slick-list{\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.slick-slide img{\n  width: 95%;\n  object-fit: cover;\n}\n.slick-dots button::before{\n  color: white;\n}\n.slick-dots li.slick-active button:before{\n  opacity: 1;\n  color: white;\n}\n@media screen and (max-width: 800px){\n  .slick-slide img {\n    height: 30vw;\n  }\n}\n\n@media screen and (min-width: 801px) and (max-width: 1400px){\n  .slick-slide img {\n    height: 20vw;\n  }\n}\n\n@media screen and (min-width: 1401px){\n  .slick-slide img {\n    height: 15vw;\n  }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var LightboxStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (LightboxStyle);

/***/ })

})
//# sourceMappingURL=my-work.js.27793d23936cd7c0f6fa.hot-update.js.map