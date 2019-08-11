webpackHotUpdate("shaunguimond",{

/***/ "./node_modules/@frontity/twentynineteen-theme/src/components/post.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@frontity/twentynineteen-theme/src/components/post.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list */ \"./node_modules/@frontity/twentynineteen-theme/src/components/list/index.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header */ \"./node_modules/@frontity/twentynineteen-theme/src/components/header.js\");\n/* harmony import */ var _post_featured_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post-featured-media */ \"./node_modules/@frontity/twentynineteen-theme/src/components/post-featured-media.js\");\n/* harmony import */ var _entry_meta_author__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entry-meta/author */ \"./node_modules/@frontity/twentynineteen-theme/src/components/entry-meta/author.js\");\n/* harmony import */ var _entry_meta_posted_on__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./entry-meta/posted-on */ \"./node_modules/@frontity/twentynineteen-theme/src/components/entry-meta/posted-on.js\");\n/* harmony import */ var _entry_meta_categories__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./entry-meta/categories */ \"./node_modules/@frontity/twentynineteen-theme/src/components/entry-meta/categories.js\");\n/* harmony import */ var _entry_meta_tags__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./entry-meta/tags */ \"./node_modules/@frontity/twentynineteen-theme/src/components/entry-meta/tags.js\");\nfunction _templateObject5(){var data=_taggedTemplateLiteral([\"\\n  \\n  * {\\n    max-width: 100%;\\n  }\\n\\n  p {\\n    line-height: 39.6px;\\n  }\\n\\n  img {\\n    width: 100%;\\n    object-fit: cover;\\n    object-position: center;\\n  }\\n\\n  figure {\\n    margin: 24px auto;\\n    /* Next line overrides an inline style of the figure element. */\\n    width: 100%;\\n\\n    figcaption {\\n      font-size: 0.7em;\\n    }\\n  }\\n\\n  iframe {\\n    display: block;\\n    margin: auto;\\n  }\\n\\n  blockquote {\\n    margin: 32px 0;\\n    border-left: 2px solid #008077;\\n    padding: 0 0 0 1em;\\n  }\\n\\n  a {\\n    transition: color 110ms ease-in-out;\\n    color: #008077;\\n    text-decoration: underline;\\n  }\\n\\n@media (prefer-color-scheme: dark) {\\n* {\\n  background-color: black !important;\\n}\\n\\np {\\n  color: white !important;\\n}\\n\\nfigure {\\n  margin: 24px auto;\\n  /* Next line overrides an inline style of the figure element. */\\n  width: 100%;\\n\\n  figcaption {\\n    color: white;\\n  }\\n}\\n\\nblockquote {\\n  color: white;\\n}\\n\\n}\\n\\n\\n  /* WordPress Core Align Classes */\\n\\n  @media ( min-width: 420px ) {\\n    img.aligncenter,\\n    img.alignleft,\\n    img.alignright {\\n      width: auto;\\n    }\\n\\n    .aligncenter {\\n      display: block;\\n      margin-left: auto;\\n      margin-right: auto;\\n    }\\n\\n    .alignright {\\n      float: right;\\n      margin-left: 24px;\\n    }\\n\\n    .alignleft {\\n      float: left;\\n      margin-right: 24px;\\n    }\\n  }\\n\"]);_templateObject5=function _templateObject5(){return data;};return data;}function _templateObject4(){var data=_taggedTemplateLiteral([\"\"]);_templateObject4=function _templateObject4(){return data;};return data;}function _templateObject3(){var data=_taggedTemplateLiteral([\"\\n\\tmargin-bottom: 1rem !important;\\n  color: #767676;\\n\\n  & .svg-icon{\\n      margin-right: 0.5em;\\n  }\\n\\n  @media ( min-width: 768px ) {\\n      margin-bottom: 0 !important;\\n  }\\n\"]);_templateObject3=function _templateObject3(){return data;};return data;}function _templateObject2(){var data=_taggedTemplateLiteral([\"\\n  margin-bottom: 1rem !important;\\n  color: #767676;\\n\\n  & .svg-icon{\\n      margin-right: 0.5em;\\n  }\\n\\n  @media ( min-width: 768px ) {\\n      margin-bottom: 0 !important;\\n  }\\n\"]);_templateObject2=function _templateObject2(){return data;};return data;}function _templateObject(){var data=_taggedTemplateLiteral([\"\\n  margin: 0;\\n\"]);_templateObject=function _templateObject(){return data;};return data;}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var Post=(_ref)=>{var{state,actions,libraries}=_ref;// Get info of current post.\nvar data=state.source.get(state.router.link);// Get the the post.\nvar post=state.source[data.type][data.id];// Prefetch home posts and the list component.\nObject(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(()=>{actions.source.fetch(\"/\");_list__WEBPACK_IMPORTED_MODULE_3__[\"default\"].preload();},[]);var headerFeaturedImageClass=data.isReady&&state.theme.featured.showOnPost&&post.featured_media?'has-featured-image':'empty-featured-image';return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\",{className:headerFeaturedImageClass},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"],null),data.isReady?Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\",{className:\"site-featured-image\"},state.theme.featured.showOnPost?Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_post_featured_media__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{id:post.featured_media}):null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\",{className:\"entry-header\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Title,{className:\"entry-title\",dangerouslySetInnerHTML:{__html:post.title.rendered}}),data.isPost?Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(EntryMeta,{className:\"entry-meta\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_entry_meta_author__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{authorId:post.author}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_entry_meta_posted_on__WEBPACK_IMPORTED_MODULE_7__[\"default\"],{post:post})):null)):null),data.isReady?Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Section,{id:\"primary\",className:\"content-area hfeed\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"article\",{className:\"entry\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Body,{className:\"entry-content\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(libraries.html2react.Component,{html:post.content.rendered}),data.isPost?Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(EntryFooter,{className:\"entry-footer\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_entry_meta_author__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{authorId:post.author}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_entry_meta_posted_on__WEBPACK_IMPORTED_MODULE_7__[\"default\"],{post:post}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_entry_meta_categories__WEBPACK_IMPORTED_MODULE_8__[\"default\"],{cats:post.categories}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_entry_meta_tags__WEBPACK_IMPORTED_MODULE_9__[\"default\"],{tags:post.tags})):null))):null);};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(Post));var Section=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].div(_templateObject());var EntryMeta=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].div(_templateObject2());var EntryFooter=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].footer(_templateObject3());var Title=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].h1(_templateObject4());var Body=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].div(_templateObject5());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGZyb250aXR5L3R3ZW50eW5pbmV0ZWVuLXRoZW1lL3NyYy9jb21wb25lbnRzL3Bvc3QuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZyb250aXR5L3R3ZW50eW5pbmV0ZWVuLXRoZW1lL3NyYy9jb21wb25lbnRzL3Bvc3QuanM/NTIxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL2xpc3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgUG9zdEZlYXR1cmVkTWVkaWEgZnJvbSBcIi4vcG9zdC1mZWF0dXJlZC1tZWRpYVwiO1xuaW1wb3J0IEF1dGhvciBmcm9tIFwiLi9lbnRyeS1tZXRhL2F1dGhvclwiO1xuaW1wb3J0IFBvc3RlZE9uIGZyb20gXCIuL2VudHJ5LW1ldGEvcG9zdGVkLW9uXCI7XG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tIFwiLi9lbnRyeS1tZXRhL2NhdGVnb3JpZXNcIjtcbmltcG9ydCBUYWdzIGZyb20gXCIuL2VudHJ5LW1ldGEvdGFnc1wiO1xuXG5cbmNvbnN0IFBvc3QgPSAoIHsgc3RhdGUsIGFjdGlvbnMsIGxpYnJhcmllcyB9ICkgPT4ge1xuICAvLyBHZXQgaW5mbyBvZiBjdXJyZW50IHBvc3QuXG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcbiAgLy8gR2V0IHRoZSB0aGUgcG9zdC5cbiAgY29uc3QgcG9zdCA9IHN0YXRlLnNvdXJjZVtkYXRhLnR5cGVdW2RhdGEuaWRdO1xuXG4gIC8vIFByZWZldGNoIGhvbWUgcG9zdHMgYW5kIHRoZSBsaXN0IGNvbXBvbmVudC5cbiAgdXNlRWZmZWN0KCAoKSA9PiB7XG4gICAgYWN0aW9ucy5zb3VyY2UuZmV0Y2goXCIvXCIpO1xuICAgIExpc3QucHJlbG9hZCgpO1xuICB9LCBbXSApO1xuICBcbiAgY29uc3QgaGVhZGVyRmVhdHVyZWRJbWFnZUNsYXNzID0gKCBkYXRhLmlzUmVhZHkgJiYgc3RhdGUudGhlbWUuZmVhdHVyZWQuc2hvd09uUG9zdCAmJiBwb3N0LmZlYXR1cmVkX21lZGlhICkgPyAnaGFzLWZlYXR1cmVkLWltYWdlJyA6ICdlbXB0eS1mZWF0dXJlZC1pbWFnZSc7XG4gIFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9eyBoZWFkZXJGZWF0dXJlZEltYWdlQ2xhc3MgfT5cbiAgICAgIDxIZWFkZXIvPlxuICAgICAgICB7IGRhdGEuaXNSZWFkeSA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpdGUtZmVhdHVyZWQtaW1hZ2VcIj5cbiAgICAgICAgICAgIHsgc3RhdGUudGhlbWUuZmVhdHVyZWQuc2hvd09uUG9zdCA/IChcbiAgICAgICAgICAgICAgPFBvc3RGZWF0dXJlZE1lZGlhIGlkPXsgcG9zdC5mZWF0dXJlZF9tZWRpYSB9Lz5cbiAgICAgICAgICAgICkgOiBudWxsIH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW50cnktaGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxUaXRsZSBjbGFzc05hbWU9XCJlbnRyeS10aXRsZVwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IHBvc3QudGl0bGUucmVuZGVyZWQgfSB9Lz5cbiAgICAgICAgICAgICAgeyBkYXRhLmlzUG9zdCA/IChcbiAgICAgICAgICAgICAgICA8RW50cnlNZXRhIGNsYXNzTmFtZT1cImVudHJ5LW1ldGFcIj5cbiAgICAgICAgICAgICAgICAgIDxBdXRob3IgYXV0aG9ySWQ9eyBwb3N0LmF1dGhvciB9Lz5cbiAgICAgICAgICAgICAgICAgIDxQb3N0ZWRPbiBwb3N0PXsgcG9zdCB9Lz5cbiAgICAgICAgICAgICAgICA8L0VudHJ5TWV0YT5cbiAgICAgICAgICAgICAgKSA6IG51bGwgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsIH1cbiAgICAgIFxuICAgICAgXG4gICAgPC9kaXY+XG4gICAgXG4gICAgeyBkYXRhLmlzUmVhZHkgPyAoXG4gICAgPFNlY3Rpb24gaWQ9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPVwiY29udGVudC1hcmVhIGhmZWVkXCI+XG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJlbnRyeVwiPlxuICAgICAgICA8Qm9keSBjbGFzc05hbWU9XCJlbnRyeS1jb250ZW50XCI+XG4gICAgICAgICAgPGxpYnJhcmllcy5odG1sMnJlYWN0LkNvbXBvbmVudCBodG1sPXsgcG9zdC5jb250ZW50LnJlbmRlcmVkIH0vPlxuICAgICAgICAgIHsgZGF0YS5pc1Bvc3QgPyAoXG4gICAgICAgICAgICA8RW50cnlGb290ZXIgY2xhc3NOYW1lPVwiZW50cnktZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgPEF1dGhvciBhdXRob3JJZD17IHBvc3QuYXV0aG9yIH0vPlxuICAgICAgICAgICAgICAgIDxQb3N0ZWRPbiBwb3N0PXsgcG9zdCB9Lz5cbiAgICAgICAgICAgICAgICA8Q2F0ZWdvcmllcyBjYXRzPXsgcG9zdC5jYXRlZ29yaWVzIH0vPlxuICAgICAgICAgICAgICAgIDxUYWdzIHRhZ3M9eyBwb3N0LnRhZ3MgfS8+XG4gICAgICAgICAgICA8L0VudHJ5Rm9vdGVyPlxuICAgICAgICAgICkgOiBudWxsIH1cbiAgICAgICAgPC9Cb2R5PlxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvU2VjdGlvbj5cbiAgKSA6IG51bGwgfVxuICA8Lz4pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCggUG9zdCApO1xuXG5jb25zdCBTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAwO1xuYDtcblxuY29uc3QgRW50cnlNZXRhID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzc2NzY3NjtcblxuICAmIC5zdmctaWNvbntcbiAgICAgIG1hcmdpbi1yaWdodDogMC41ZW07XG4gIH1cblxuICBAbWVkaWEgKCBtaW4td2lkdGg6IDc2OHB4ICkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB9XG5gO1xuXG5jb25zdCBFbnRyeUZvb3RlciA9IHN0eWxlZC5mb290ZXJgXG5cdG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbiAgY29sb3I6ICM3Njc2NzY7XG5cbiAgJiAuc3ZnLWljb257XG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xuICB9XG5cbiAgQG1lZGlhICggbWluLXdpZHRoOiA3NjhweCApIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgfVxuYDtcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgYDtcblxuY29uc3QgQm9keSA9IHN0eWxlZC5kaXZgXG4gIFxuICAqIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cblxuICBwIHtcbiAgICBsaW5lLWhlaWdodDogMzkuNnB4O1xuICB9XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgfVxuXG4gIGZpZ3VyZSB7XG4gICAgbWFyZ2luOiAyNHB4IGF1dG87XG4gICAgLyogTmV4dCBsaW5lIG92ZXJyaWRlcyBhbiBpbmxpbmUgc3R5bGUgb2YgdGhlIGZpZ3VyZSBlbGVtZW50LiAqL1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgZmlnY2FwdGlvbiB7XG4gICAgICBmb250LXNpemU6IDAuN2VtO1xuICAgIH1cbiAgfVxuXG4gIGlmcmFtZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG5cbiAgYmxvY2txdW90ZSB7XG4gICAgbWFyZ2luOiAzMnB4IDA7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMDA4MDc3O1xuICAgIHBhZGRpbmc6IDAgMCAwIDFlbTtcbiAgfVxuXG4gIGEge1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDExMG1zIGVhc2UtaW4tb3V0O1xuICAgIGNvbG9yOiAjMDA4MDc3O1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG5cbkBtZWRpYSAocHJlZmVyLWNvbG9yLXNjaGVtZTogZGFyaykge1xuKiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbnAge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuZmlndXJlIHtcbiAgbWFyZ2luOiAyNHB4IGF1dG87XG4gIC8qIE5leHQgbGluZSBvdmVycmlkZXMgYW4gaW5saW5lIHN0eWxlIG9mIHRoZSBmaWd1cmUgZWxlbWVudC4gKi9cbiAgd2lkdGg6IDEwMCU7XG5cbiAgZmlnY2FwdGlvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG59XG5cbmJsb2NrcXVvdGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbn1cblxuXG4gIC8qIFdvcmRQcmVzcyBDb3JlIEFsaWduIENsYXNzZXMgKi9cblxuICBAbWVkaWEgKCBtaW4td2lkdGg6IDQyMHB4ICkge1xuICAgIGltZy5hbGlnbmNlbnRlcixcbiAgICBpbWcuYWxpZ25sZWZ0LFxuICAgIGltZy5hbGlnbnJpZ2h0IHtcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgIH1cblxuICAgIC5hbGlnbmNlbnRlciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIH1cblxuICAgIC5hbGlnbnJpZ2h0IHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICAgIH1cblxuICAgIC5hbGlnbmxlZnQge1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gICAgfVxuICB9XG5gO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYUE7QUFFQTtBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@frontity/twentynineteen-theme/src/components/post.js\n");

/***/ })

})