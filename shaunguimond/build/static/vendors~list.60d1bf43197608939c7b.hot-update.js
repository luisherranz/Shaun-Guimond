webpackHotUpdate("vendors~list",{

/***/ "./node_modules/@frontity/twentynineteen-theme/src/components/list/list.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@frontity/twentynineteen-theme/src/components/list/list.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-item */ \"./node_modules/@frontity/twentynineteen-theme/src/components/list/list-item.js\");\n/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagination */ \"./node_modules/@frontity/twentynineteen-theme/src/components/list/pagination.js\");\nfunction _templateObject3(){var data=_taggedTemplateLiteral([\"\\n\\tfont-family: \\\"Hoefler Text\\\", \\\"Baskerville Old Face\\\", Garamond, \\\"Times New Roman\\\", serif;\\n\\tfont-size: 1.125em;\\n\\tclear: both;\\n\\tmargin: 1rem 1rem calc(3 * 1rem);\\n\\tcolor: #767676;\\n\\tletter-spacing: normal;\\n\\n\\t& span {\\n\\t\\tdisplay: block;\\n\\t\\tcolor: #111;\\n\\t\\tfont-size: 1em;\\n\\t}\\n\\t& span:after {\\n\\t\\tcontent: \\\".\\\";\\n\\t\\tfont-weight: bold;\\n\\t\\tcolor: #111;\\n\\t}\\n\\n\\t@media screen and ( min-width: 768px ) {\\n\\t\\tmargin: 0 calc( 10% + 60px ) calc( 10% + 60px );\\n\\t}\\n\\n\\t& span, span:after\\t@media (prefers-color-scheme: dark) {\\n\\t\\t\\tcolour: #767676;\\n\\t}\\n\"]);_templateObject3=function _templateObject3(){return data;};return data;}function _templateObject2(){var data=_taggedTemplateLiteral([\"\"]);_templateObject2=function _templateObject2(){return data;};return data;}function _templateObject(){var data=_taggedTemplateLiteral([\"\\n  margin: 0;\\n  list-style: none;\\n\"]);_templateObject=function _templateObject(){return data;};return data;}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var List=(_ref)=>{var{state}=_ref;// Get the data of the current list.\nvar data=state.source.get(state.router.link);return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Section,{id:\"primary\",className:\"content-area hfeed\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Article,{className:\"post entry\"},data.isAuthor?Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Header,{className:\"page-title\"},\"Author Archives: \",Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"span\",{className:\"page-description\"},state.source.author[data.id].name)):null,data.isTaxonomy||data.isCategory?Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Header,{className:\"page-title\"},data.taxonomy.charAt(0).toUpperCase()+data.taxonomy.slice(1),\" Archives: \",Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"span\",{className:\"page-description\"},state.source[data.taxonomy][data.id].name)):null,data.items.map((_ref2)=>{var{type,id}=_ref2;var item=state.source[type][id];// Render one Item component for each one.\nreturn Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_list_item__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{key:item.id,item:item});}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_pagination__WEBPACK_IMPORTED_MODULE_4__[\"default\"],null)));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(List));var Section=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].section(_templateObject());var Article=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].article(_templateObject2());var Header=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].h3(_templateObject3());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGZyb250aXR5L3R3ZW50eW5pbmV0ZWVuLXRoZW1lL3NyYy9jb21wb25lbnRzL2xpc3QvbGlzdC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZnJvbnRpdHkvdHdlbnR5bmluZXRlZW4tdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LmpzP2U4MTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9saXN0LWl0ZW1cIjtcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuL3BhZ2luYXRpb25cIjtcblxuY29uc3QgTGlzdCA9ICggeyBzdGF0ZSB9ICkgPT4ge1xuICAvLyBHZXQgdGhlIGRhdGEgb2YgdGhlIGN1cnJlbnQgbGlzdC5cbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoIHN0YXRlLnJvdXRlci5saW5rICk7XG4gIFxuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uIGlkPVwicHJpbWFyeVwiIGNsYXNzTmFtZT1cImNvbnRlbnQtYXJlYSBoZmVlZFwiPlxuXHRcdDxBcnRpY2xlIGNsYXNzTmFtZT1cInBvc3QgZW50cnlcIj5cblx0XHRcdFxuXHRcdFx0eyAvKiBJZiB0aGUgbGlzdCBpcyBhbiBhdXRob3IsIHdlIHJlbmRlciBhIHRpdGxlLiAqLyB9XG5cdFx0XHR7ICggZGF0YS5pc0F1dGhvciApID8gKFxuXHRcdFx0XHQ8SGVhZGVyIGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj5BdXRob3IgQXJjaGl2ZXM6IDxzcGFuIGNsYXNzTmFtZT1cInBhZ2UtZGVzY3JpcHRpb25cIj57IHN0YXRlLnNvdXJjZS5hdXRob3JbZGF0YS5pZF0ubmFtZSB9PC9zcGFuPjwvSGVhZGVyPlxuXHRcdFx0KSA6IG51bGwgfVxuXG5cdFx0XHR7IC8qIElmIHRoZSBsaXN0IGlzIGEgdGF4b25vbXkgb3IgY2F0ZWdvcnksIHdlIHJlbmRlciBhIHRpdGxlLiAqLyB9XG5cdFx0XHR7ICggZGF0YS5pc1RheG9ub215IHx8IGRhdGEuaXNDYXRlZ29yeSApID8gKFxuXHRcdFx0XHQ8SGVhZGVyIGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj57IGRhdGEudGF4b25vbXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBkYXRhLnRheG9ub215LnNsaWNlKDEpIH0gQXJjaGl2ZXM6IDxzcGFuIGNsYXNzTmFtZT1cInBhZ2UtZGVzY3JpcHRpb25cIj57IHN0YXRlLnNvdXJjZVtkYXRhLnRheG9ub215XVtkYXRhLmlkXS5uYW1lIH08L3NwYW4+PC9IZWFkZXI+XG5cdFx0XHQpIDogbnVsbCB9XG5cblx0XHRcdHsgLyogSXRlcmF0ZSBvdmVyIHRoZSBpdGVtcyBvZiB0aGUgbGlzdC4gKi8gfVxuXHRcdFx0eyBkYXRhLml0ZW1zLm1hcCggKCB7IHR5cGUsIGlkIH0gKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGl0ZW0gPSBzdGF0ZS5zb3VyY2VbdHlwZV1baWRdO1xuXHRcdFx0XHQvLyBSZW5kZXIgb25lIEl0ZW0gY29tcG9uZW50IGZvciBlYWNoIG9uZS5cblx0XHRcdFx0cmV0dXJuIDxJdGVtIGtleT17IGl0ZW0uaWQgfSBpdGVtPXsgaXRlbSB9Lz47XG5cdFx0XHR9ICkgfVxuXHRcdFx0PFBhZ2luYXRpb24vPlxuXHRcdDwvQXJ0aWNsZT5cbiAgICA8L1NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCBMaXN0ICk7XG5cbmNvbnN0IFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuYDtcblxuY29uc3QgQXJ0aWNsZSA9IHN0eWxlZC5hcnRpY2xlYGA7XG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oM2Bcblx0Zm9udC1mYW1pbHk6IFwiSG9lZmxlciBUZXh0XCIsIFwiQmFza2VydmlsbGUgT2xkIEZhY2VcIiwgR2FyYW1vbmQsIFwiVGltZXMgTmV3IFJvbWFuXCIsIHNlcmlmO1xuXHRmb250LXNpemU6IDEuMTI1ZW07XG5cdGNsZWFyOiBib3RoO1xuXHRtYXJnaW46IDFyZW0gMXJlbSBjYWxjKDMgKiAxcmVtKTtcblx0Y29sb3I6ICM3Njc2NzY7XG5cdGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG5cblx0JiBzcGFuIHtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRjb2xvcjogIzExMTtcblx0XHRmb250LXNpemU6IDFlbTtcblx0fVxuXHQmIHNwYW46YWZ0ZXIge1xuXHRcdGNvbnRlbnQ6IFwiLlwiO1xuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdGNvbG9yOiAjMTExO1xuXHR9XG5cblx0QG1lZGlhIHNjcmVlbiBhbmQgKCBtaW4td2lkdGg6IDc2OHB4ICkge1xuXHRcdG1hcmdpbjogMCBjYWxjKCAxMCUgKyA2MHB4ICkgY2FsYyggMTAlICsgNjBweCApO1xuXHR9XG5cblx0JiBzcGFuLCBzcGFuOmFmdGVyXHRAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG5cdFx0XHRjb2xvdXI6ICM3Njc2NzY7XG5cdH1cbmA7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBb0JBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@frontity/twentynineteen-theme/src/components/list/list.js\n");

/***/ })

})