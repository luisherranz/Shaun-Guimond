webpackHotUpdate("shaunguimond",{

/***/ "./node_modules/@frontity/twentynineteen-theme/src/components/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@frontity/twentynineteen-theme/src/components/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ \"./node_modules/@frontity/twentynineteen-theme/src/components/header.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list */ \"./node_modules/@frontity/twentynineteen-theme/src/components/list/index.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post */ \"./node_modules/@frontity/twentynineteen-theme/src/components/post.js\");\n/* harmony import */ var _page404_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page404.js */ \"./node_modules/@frontity/twentynineteen-theme/src/components/page404.js\");\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loading */ \"./node_modules/@frontity/twentynineteen-theme/src/components/loading.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer */ \"./node_modules/@frontity/twentynineteen-theme/src/components/footer.js\");\n/* harmony import */ var _style_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../style.min.css */ \"./node_modules/@frontity/twentynineteen-theme/src/style.min.css\");\nfunction _templateObject3(){var data=_taggedTemplateLiteral([\"\"]);_templateObject3=function _templateObject3(){return data;};return data;}function _templateObject2(){var data=_taggedTemplateLiteral([\"\"]);_templateObject2=function _templateObject2(){return data;};return data;}function _templateObject(){var data=_taggedTemplateLiteral([\"\\n\\n            ::-webkit-scrollbar {\\n              width: 12px;\\n              background: #999999;\\n            }\\n            ::-webkit-scrollbar-thumb {\\n              background: #008077;\\n             -webkit-border-radius: 2px;\\n             -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);\\n           }\\n            ::-webkit-scrollbar-corner {\\n              background: #767676;\\n           }\\n\\n          @media (prefers-color-scheme: dark) {\\n            body { \\n              background-color: black !important;\\n            }\\n            \\n              h1, h2, h3, h4, h5, h6, p, ul, table, code {\\n                color: white !important;\\n              }\\n            \\n              blockquote {\\n                background-color: #181818 !important;\\n                color: white !important;\\n              }\\n            \\n              pre {\\n              background-color: #181818 !important;\\n              }\\n            \\n               figcaption {\\n              color:#767676 !important;\\n              }\\n            \\n              ::-webkit-scrollbar {\\n                width: 12px;\\n                background: #111;\\n                }\\n\\n            ::-webkit-scrollbar-thumb {\\n                background: #008077;\\n                -webkit-border-radius: 2px;\\n                -webkit-box-shadow: 0px 1px 2px rgba(100, 100, 100, 0.75);\\n            }\\n\\n            ::-webkit-scrollbar-corner {\\n                background: #000;\\n            }\\n\\n            }\\n\\n      \"]);_templateObject=function _templateObject(){return data;};return data;}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var Theme=(_ref)=>{var{state}=_ref;var data=state.source.get(state.router.link);return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_2__[\"Head\"],null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"title\",null,state.frontity.title),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"meta\",{name:\"description\",content:state.frontity.description}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"html\",{lang:\"en\"})),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_2__[\"Global\"],{styles:Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"css\"])(_style_min_css__WEBPACK_IMPORTED_MODULE_9__[\"default\"])}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_2__[\"Global\"],{styles:Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"css\"])(_templateObject())}),!data.isPostType&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(HeadContainer,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"],null)),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Body,{id:\"content\",className:\"site-content\"},data.isFetching&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_loading__WEBPACK_IMPORTED_MODULE_7__[\"default\"],null),data.isArchive&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_list__WEBPACK_IMPORTED_MODULE_4__[\"default\"],null),data.isPostType&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_post__WEBPACK_IMPORTED_MODULE_5__[\"default\"],null),data.is404&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_page404_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"],null)),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_footer__WEBPACK_IMPORTED_MODULE_8__[\"default\"],null));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(Theme));var HeadContainer=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].div(_templateObject2());var Body=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].div(_templateObject3());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGZyb250aXR5L3R3ZW50eW5pbmV0ZWVuLXRoZW1lL3NyYy9jb21wb25lbnRzL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmcm9udGl0eS90d2VudHluaW5ldGVlbi10aGVtZS9zcmMvY29tcG9uZW50cy9pbmRleC5qcz9kZjhlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdsb2JhbCwgY3NzLCBjb25uZWN0LCBzdHlsZWQsIEhlYWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9saXN0XCI7XG5pbXBvcnQgUG9zdCBmcm9tIFwiLi9wb3N0XCI7XG5pbXBvcnQgUGFnZTQwNCBmcm9tIFwiLi9wYWdlNDA0LmpzXCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi9sb2FkaW5nXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IGdsb2JhbFN0eWxlIGZyb20gJy4uL3N0eWxlLm1pbi5jc3MnO1xuXG5cblxuY29uc3QgVGhlbWUgPSAoIHsgc3RhdGUgfSApID0+IHtcbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoIHN0YXRlLnJvdXRlci5saW5rICk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+eyBzdGF0ZS5mcm9udGl0eS50aXRsZSB9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17IHN0YXRlLmZyb250aXR5LmRlc2NyaXB0aW9uIH0vPlxuICAgICAgICA8aHRtbCBsYW5nPVwiZW5cIi8+XG5cbiAgICAgIDwvSGVhZD5cblx0ICAgIDxHbG9iYWwgc3R5bGVzPXsgY3NzKCBnbG9iYWxTdHlsZSApIH0vPlxuICAgICAgPEdsb2JhbCBzdHlsZXM9e2Nzc2BcblxuICAgICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOTk5OTk5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDgwNzc7XG4gICAgICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgICAgICAgICB9XG4gICAgICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3Njc2NzY7XG4gICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICAgICAgICAgIGJvZHkgeyBcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCB1bCwgdGFibGUsIGNvZGUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgYmxvY2txdW90ZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MTgxOCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgcHJlIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MTgxOCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgIGZpZ2NhcHRpb24ge1xuICAgICAgICAgICAgICBjb2xvcjojNzY3Njc2ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTExO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwODA3NztcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggMnB4IHJnYmEoMTAwLCAxMDAsIDEwMCwgMC43NSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgIGB9Lz5cbiAgICAgIHsgISBkYXRhLmlzUG9zdFR5cGUgJiYgKFxuICAgICAgICA8SGVhZENvbnRhaW5lcj5cbiAgICAgICAgICA8SGVhZGVyLz5cbiAgICAgICAgPC9IZWFkQ29udGFpbmVyPlxuICAgICAgKSB9XG4gICAgICA8Qm9keSBpZD1cImNvbnRlbnRcIiBjbGFzc05hbWU9XCJzaXRlLWNvbnRlbnRcIj5cbiAgICAgICAgeyBkYXRhLmlzRmV0Y2hpbmcgJiYgPExvYWRpbmcvPiB9XG4gICAgICAgIHsgZGF0YS5pc0FyY2hpdmUgJiYgPExpc3QvPiB9XG4gICAgICAgIHsgZGF0YS5pc1Bvc3RUeXBlICYmIDxQb3N0Lz4gfVxuICAgICAgICB7IGRhdGEuaXM0MDQgJiYgPFBhZ2U0MDQvPiB9XG4gICAgICA8L0JvZHk+XG5cdCAgICA8Rm9vdGVyLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoIFRoZW1lICk7XG5cbmNvbnN0IEhlYWRDb250YWluZXIgPSBzdHlsZWQuZGl2YGA7XG5cbmNvbnN0IEJvZHkgPSBzdHlsZWQuZGl2YGA7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@frontity/twentynineteen-theme/src/components/index.js\n");

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/components/OutboundLink.js":
false,

/***/ "./node_modules/react-ga/dist/esm/core.js":
false,

/***/ "./node_modules/react-ga/dist/esm/index.js":
false,

/***/ "./node_modules/react-ga/dist/esm/utils/console/log.js":
false,

/***/ "./node_modules/react-ga/dist/esm/utils/console/warn.js":
false,

/***/ "./node_modules/react-ga/dist/esm/utils/format.js":
false,

/***/ "./node_modules/react-ga/dist/esm/utils/loadGA.js":
false,

/***/ "./node_modules/react-ga/dist/esm/utils/mightBeEmail.js":
false,

/***/ "./node_modules/react-ga/dist/esm/utils/removeLeadingSlash.js":
false,

/***/ "./node_modules/react-ga/dist/esm/utils/testModeAPI.js":
false,

/***/ "./node_modules/react-ga/dist/esm/utils/toTitleCase.js":
false,

/***/ "./node_modules/react-ga/dist/esm/utils/trim.js":
false

})