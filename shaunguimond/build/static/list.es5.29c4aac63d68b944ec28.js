(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[0],{168:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t(2),i=t.n(a),c=t(3),s=t(23),o=t(62);function l(){var e=d(["\n  height: auto;\n  width: 100%;\n  object-fit: cover;\n"]);return l=function(){return e},e}function u(){var e=d(['\n  margin: 1rem 0;\n  overflow: hidden;\n  position: relative;\n  display: flex;\n  \n  &::before, &::after {\n    position: absolute;\n    display: block;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    content: "\\020";\n    pointer-events: none;\n    mix-blend-mode: screen;\n    opacity: 0.1;\n    z-index: 2;\n  }\n\n  &::after {\n    mix-blend-mode: multiply;\n    opacity: 1;\n    z-index: 3;\n  }\n'],['\n  margin: 1rem 0;\n  overflow: hidden;\n  position: relative;\n  display: flex;\n  \n  &::before, &::after {\n    position: absolute;\n    display: block;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    content: "\\\\020";\n    pointer-events: none;\n    mix-blend-mode: screen;\n    opacity: 0.1;\n    z-index: 2;\n  }\n\n  &::after {\n    mix-blend-mode: multiply;\n    opacity: 1;\n    z-index: 3;\n  }\n']);return u=function(){return e},e}function d(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var j=Object(c.connect)(function(e){var n=e.state,t=e.id,a=n.source.attachment[t];if(!a)return null;var i=Object.values(a.media_details.sizes).map(function(e){return[e.source_url,e.width]}).reduce(function(e,n,t,r){return e.concat("".concat(n.join(" "),"w").concat(t!==r.length-1?", ":""))},"")||null;return Object(r.jsx)(f,null,Object(r.jsx)(p,{alt:a.title.rendered,src:a.source_url,srcSet:i}))}),f=c.styled.div(u()),p=Object(c.styled)(o.a)(l()),m=t(113),b=t(114),x=t(158),O=t(159);function h(){var e=g(["\n  line-height: 1.8;\n  color: #111;\n  margin: 0;\n  overflow: hidden;\n\n  & p {\n\t  margin: 32px 0;\n  }\n\n  @media only screen and ( min-width: 768px ) {\n\t  max-width: calc(8 * ( 100vw / 12 ) - 28px );\n  }\n  \n  @media only screen and ( min-width: 1168px ) {\n\t  max-width: calc( 6 * ( 100vw / 12) - 28px );\n  }\n"]);return h=function(){return e},e}function v(){var e=g(["\n\tcolor: #111;\n\tmargin: calc( 3 * 1rem ) 0 1rem !important;\n"]);return v=function(){return e},e}function g(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var y=Object(c.connect)(function(e){var n=e.state,t=e.item;return Object(r.jsx)(i.a.Fragment,null,Object(r.jsx)("article",{className:"entry-header"},Object(r.jsx)(w,{className:"entry-title"},Object(r.jsx)(s.a,{link:t.link},Object(r.jsx)("span",{dangerouslySetInnerHTML:{__html:t.title.rendered}}))),n.theme.featured.showOnList?Object(r.jsx)(s.a,{link:t.link},Object(r.jsx)(j,{id:t.featured_media})):null,Object(r.jsx)(z,{dangerouslySetInnerHTML:{__html:t.excerpt.rendered}})),Object(r.jsx)("div",{className:"entry-footer"},Object(r.jsx)(m.a,{authorId:t.author}),Object(r.jsx)(b.a,{post:t}),Object(r.jsx)(x.a,{cats:t.categories.slice(0,2)}),Object(r.jsx)(O.a,{tags:t.tags.slice(0,2)})))}),w=c.styled.h1(v()),z=c.styled.div(h());function k(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    display: inline-block;\n    margin-top: 2px;\n    vertical-align: middle;\n\n"]);return k=function(){return e},e}var N=c.styled.span(k()),_=function(){return Object(r.jsx)(N,null,Object(r.jsx)("svg",{className:"svg-icon",width:"22",height:"22","aria-hidden":"true",role:"img",focusable:"false",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(r.jsx)("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),Object(r.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"})))};function L(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    display: inline-block;\n    margin-top: 2px;\n    vertical-align: middle;\n"]);return L=function(){return e},e}var A=c.styled.span(L()),S=function(){return Object(r.jsx)(A,null,Object(r.jsx)("svg",{className:"svg-icon",width:"22",height:"22","aria-hidden":"true",role:"img",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.jsx)("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),Object(r.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"})))};function H(){var e=M(["\n  display: inline-block;\n"]);return H=function(){return e},e}function D(){var e=M(['\n\n\tpadding: 0;\n\tfont-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;\n    font-weight: 700;\n\tfont-size: 0.88889em;\n    letter-spacing: -0.02em;\n    line-height: 1.2;\n    -webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n']);return D=function(){return e},e}function M(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var P=Object(c.connect)(function(e){var n=e.state,t=e.actions,c=e.libraries,o=n.source.get(n.router.link).totalPages,l=c.source.parse(n.router.link),u=l.path,d=l.page,j=l.query,f=d<o,p=d>1,m=function(e){return c.source.stringify({path:u,page:e,query:j})},b=function(e,n){var t=[],r=0;return 1===n?t:(0<e-2&&t.push(e-2),0<e-1&&t.push(e-1),t.push(e),n>=e+1&&t.push(e+1),n>=e+2&&t.push(e+2),1<t[0]-1&&(t.unshift("..."),r+=1),1<n-t[t.length-(2-r)]&&t.push("..."),-1===t.indexOf(1)&&t.unshift(1),-1===t.indexOf(n)&&t.push(n),t)}(d,o);return Object(a.useEffect)(function(){f&&t.source.fetch(m(d+1))},[]),Object(r.jsx)(B,{className:"tn-pagination"},p&&Object(r.jsx)(s.a,{className:"pagination-links prev",link:m(d-1)},Object(r.jsx)(_,null),Object(r.jsx)("span",{className:"nav-prev-text"},"Newer posts")),Object(r.jsx)(i.a.Fragment,null,b&&b.map(function(e,n){return"..."!==e&&e!==d?Object(r.jsx)(i.a.Fragment,{key:"".concat(e,"-").concat(n)},Object(r.jsx)(s.a,{className:"page-numbers",link:m(e)},Object(r.jsx)(F,null,e))):Object(r.jsx)("span",{key:"".concat(e,"-").concat(n),className:"".concat("..."!==e?"current":"dots"," page-numbers")},Object(r.jsx)(F,null,e))})),f&&Object(r.jsx)(s.a,{className:"pagination-links next",link:m(d+1)},Object(r.jsx)("span",{className:"nav-next-text"},"Older posts"),Object(r.jsx)(S,null)))}),B=c.styled.div(D()),F=c.styled.span(H());function C(){var e=U(['\n\tfont-family: "Hoefler Text", "Baskerville Old Face", Garamond, "Times New Roman", serif;\n\tfont-size: 1.125em;\n\tclear: both;\n\tmargin: 1rem 1rem calc(3 * 1rem);\n\tcolor: #767676;\n\tletter-spacing: normal;\n\n\t& span {\n\t\tdisplay: block;\n\t\tcolor: #111;\n\t\tfont-size: 1em;\n\t}\n\t& span:after {\n\t\tcontent: ".";\n\t\tfont-weight: bold;\n\t\tcolor: #767676;\n\t}\n\n\t@media screen and ( min-width: 768px ) {\n\t\tmargin: 0 calc( 10% + 60px ) calc( 10% + 60px );\n\t}\n']);return C=function(){return e},e}function E(){var e=U([""]);return E=function(){return e},e}function T(){var e=U(["\n  margin: 0;\n  list-style: none;\n"]);return T=function(){return e},e}function U(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}n.default=Object(c.connect)(function(e){var n=e.state,t=n.source.get(n.router.link);return Object(r.jsx)(I,{id:"primary",className:"content-area hfeed"},Object(r.jsx)(q,{className:"post entry"},t.isAuthor?Object(r.jsx)(K,{className:"page-title"},"Author Archives: ",Object(r.jsx)("span",{className:"page-description"},n.source.author[t.id].name)):null,t.isTaxonomy||t.isCategory?Object(r.jsx)(K,{className:"page-title"},t.taxonomy.charAt(0).toUpperCase()+t.taxonomy.slice(1)," Archives: ",Object(r.jsx)("span",{className:"page-description"},n.source[t.taxonomy][t.id].name)):null,t.items.map(function(e){var t=e.type,a=e.id,i=n.source[t][a];return Object(r.jsx)(y,{key:i.id,item:i})}),Object(r.jsx)(P,null)))});var I=c.styled.section(T()),q=c.styled.article(E()),K=c.styled.h3(C())}}]);