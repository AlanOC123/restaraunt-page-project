(self["webpackChunkrestaraunt_page_project"] = self["webpackChunkrestaraunt_page_project"] || []).push([[179],{

/***/ 135:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(177);
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.card {
  display: flex;
  margin: 1rem;
  gap: 2rem;
}

.card-image-container {
  flex: 1;
}

.card-image-container img {
  width: 12vw;
  aspect-ratio: 1/1;

  object-fit: cover;
  object-position: center;

  border-radius: 1rem;
}

.card-text-container {
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: flex-start;

  gap: 1.5rem;
}

.card-text-container p {
  font-family: var(--base-font-fam);
  font-size: var(--base-font-size);
}

.card-text-container h2 {
  font-family: var(--heading-font-fam);
  font-size: var(--heading-2-font-size);
}`, "",{"version":3,"sources":["webpack://./src/styles/card.css"],"names":[],"mappings":"AAEA;EACE,aAAa;EACb,YAAY;EACZ,SAAS;AACX;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,WAAW;EACX,iBAAiB;;EAEjB,iBAAiB;EACjB,uBAAuB;;EAEvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;;EAEtB,uBAAuB;EACvB,uBAAuB;;EAEvB,WAAW;AACb;;AAEA;EACE,iCAAiC;EACjC,gCAAgC;AAClC;;AAEA;EACE,oCAAoC;EACpC,qCAAqC;AACvC","sourcesContent":["@import url('./content.css');\n\n.card {\n  display: flex;\n  margin: 1rem;\n  gap: 2rem;\n}\n\n.card-image-container {\n  flex: 1;\n}\n\n.card-image-container img {\n  width: 12vw;\n  aspect-ratio: 1/1;\n\n  object-fit: cover;\n  object-position: center;\n\n  border-radius: 1rem;\n}\n\n.card-text-container {\n  display: flex;\n  flex-direction: column;\n\n  justify-content: center;\n  align-items: flex-start;\n\n  gap: 1.5rem;\n}\n\n.card-text-container p {\n  font-family: var(--base-font-fam);\n  font-size: var(--base-font-size);\n}\n\n.card-text-container h2 {\n  font-family: var(--heading-font-fam);\n  font-size: var(--heading-2-font-size);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 177:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(771);
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#content {
  height: 100%;
  grid-column: 3 / -1;
  grid-row: 2 / -1;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--background-clr);
}

#content .container {
  width: 95%;
  height: 95%;
  border: 1px solid black;

  overflow-x: scroll;
  border-radius: 1rem;
  
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  gap: 1rem;
}

.text-container {
  margin: 0 1rem 0 1rem;
  border-radius: 1rem;
}

.about-heading {
  padding: 1rem;
  font-family: var(--heading-font-fam);
  font-size: var(--heading-2-font-size);
}

.about-text {
  padding: 1rem;
  font-family: var(--base-font-fam);
  font-size: var(--base-font-size);
}

.section-heading {
  position: sticky;
  top: 0px;
  background-color: var(--background-clr);
  padding: 1rem;

  font-family: var(--heading-font-fam);
  font-size: var(--heading-2-font-size);
}

.contact-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
}

.contact-section {
  display: flex;
  justify-content: space-around;
}

.contact-heading {
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-family: var(--heading-font-fam);
  font-size: var(--base-font-size);
}

.contact-text {
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-family: var(--base-font-fam);
  font-size: var(--base-font-size);
}`, "",{"version":3,"sources":["webpack://./src/styles/content.css"],"names":[],"mappings":"AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,gBAAgB;;EAEhB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,uCAAuC;AACzC;;AAEA;EACE,UAAU;EACV,WAAW;EACX,uBAAuB;;EAEvB,kBAAkB;EAClB,mBAAmB;;EAEnB,aAAa;EACb,eAAe;EACf,mBAAmB;;EAEnB,SAAS;AACX;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,oCAAoC;EACpC,qCAAqC;AACvC;;AAEA;EACE,aAAa;EACb,iCAAiC;EACjC,gCAAgC;AAClC;;AAEA;EACE,gBAAgB;EAChB,QAAQ;EACR,uCAAuC;EACvC,aAAa;;EAEb,oCAAoC;EACpC,qCAAqC;AACvC;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,aAAa;AACf;;AAEA;EACE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,OAAO;EACP,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;;EAEnB,oCAAoC;EACpC,gCAAgC;AAClC;;AAEA;EACE,OAAO;EACP,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;;EAEnB,iCAAiC;EACjC,gCAAgC;AAClC","sourcesContent":["@import url('./index.css');\n\n#content {\n  height: 100%;\n  grid-column: 3 / -1;\n  grid-row: 2 / -1;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: var(--background-clr);\n}\n\n#content .container {\n  width: 95%;\n  height: 95%;\n  border: 1px solid black;\n\n  overflow-x: scroll;\n  border-radius: 1rem;\n  \n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n\n  gap: 1rem;\n}\n\n.text-container {\n  margin: 0 1rem 0 1rem;\n  border-radius: 1rem;\n}\n\n.about-heading {\n  padding: 1rem;\n  font-family: var(--heading-font-fam);\n  font-size: var(--heading-2-font-size);\n}\n\n.about-text {\n  padding: 1rem;\n  font-family: var(--base-font-fam);\n  font-size: var(--base-font-size);\n}\n\n.section-heading {\n  position: sticky;\n  top: 0px;\n  background-color: var(--background-clr);\n  padding: 1rem;\n\n  font-family: var(--heading-font-fam);\n  font-size: var(--heading-2-font-size);\n}\n\n.contact-card {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  padding: 2rem;\n}\n\n.contact-section {\n  display: flex;\n  justify-content: space-around;\n}\n\n.contact-heading {\n  flex: 1;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n\n  font-family: var(--heading-font-fam);\n  font-size: var(--base-font-size);\n}\n\n.contact-text {\n  flex: 1;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n\n  font-family: var(--base-font-fam);\n  font-size: var(--base-font-size);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 771:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(4), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(395), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(178), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(407), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(230), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(322), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: 'libre_baskervillebold';
  src: 
    url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2'),
    url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff');
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: 'libre_baskervilleitalic';
  src: 
    url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('woff2'),
    url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format('woff');
  font-weight: normal;
  font-style: italic;
}

@font-face {
  font-family: 'libre_baskervilleregular';
  src: 
    url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format('woff2'),
    url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format('woff');
  font-weight: normal;
  font-style: normal;
}

:root {
  --base-font-fam: 'libre_baskervilleregular';
  --heading-font-fam: 'libre_baskervilleitalic';
  --button-font-fam: 'libre_baskervillebold';
  --base-font-size: 1.4rem;
  --heading-1-font-size: 2.4rem;
  --heading-2-font-size: 2rem;
  --button-font-size: 1.8rem;
  --background-clr: rgb(245, 246, 245);
  --highlight-clr-1: rgb(235, 125, 125);
  --highlight-clr-2: rgb(125, 235, 125);
}

* {
  margin: 0;
  padding: 0;
}

body {
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(6, 1fr);
}

button {
  font-family: var(--button-font-fam);
  font-size: var(--button-font-size);

  background: none;
  border: none;
}
`, "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"AAAA;EACE,oCAAoC;EACpC;;0DAE+F;EAC/F,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,sCAAsC;EACtC;;0DAEiG;EACjG,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,uCAAuC;EACvC;;0DAEkG;EAClG,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,2CAA2C;EAC3C,6CAA6C;EAC7C,0CAA0C;EAC1C,wBAAwB;EACxB,6BAA6B;EAC7B,2BAA2B;EAC3B,0BAA0B;EAC1B,oCAAoC;EACpC,qCAAqC;EACrC,qCAAqC;AACvC;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,qCAAqC;EACrC,kCAAkC;AACpC;;AAEA;EACE,mCAAmC;EACnC,kCAAkC;;EAElC,gBAAgB;EAChB,YAAY;AACd","sourcesContent":["@font-face {\n  font-family: 'libre_baskervillebold';\n  src: \n    url('../assets/webfontkit-20231105-092519/librebaskerville-bold-webfont.woff2') format('woff2'),\n    url('../assets/webfontkit-20231105-092519/librebaskerville-bold-webfont.woff') format('woff');\n  font-weight: bold;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'libre_baskervilleitalic';\n  src: \n    url('../assets/webfontkit-20231105-092519/librebaskerville-italic-webfont.woff2') format('woff2'),\n    url('../assets/webfontkit-20231105-092519/librebaskerville-italic-webfont.woff') format('woff');\n  font-weight: normal;\n  font-style: italic;\n}\n\n@font-face {\n  font-family: 'libre_baskervilleregular';\n  src: \n    url('../assets/webfontkit-20231105-092519/librebaskerville-regular-webfont.woff2') format('woff2'),\n    url('../assets/webfontkit-20231105-092519/librebaskerville-regular-webfont.woff') format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n\n:root {\n  --base-font-fam: 'libre_baskervilleregular';\n  --heading-font-fam: 'libre_baskervilleitalic';\n  --button-font-fam: 'libre_baskervillebold';\n  --base-font-size: 1.4rem;\n  --heading-1-font-size: 2.4rem;\n  --heading-2-font-size: 2rem;\n  --button-font-size: 1.8rem;\n  --background-clr: rgb(245, 246, 245);\n  --highlight-clr-1: rgb(235, 125, 125);\n  --highlight-clr-2: rgb(125, 235, 125);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  height: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(6, 1fr);\n}\n\nbutton {\n  font-family: var(--button-font-fam);\n  font-size: var(--button-font-size);\n\n  background: none;\n  border: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 926:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(771);
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  width: 100%;
  height: 100%;
  font-size: 10px;
  font-family: 'libre_baskervilleregular'
}

.nav {
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  background-color: var(--background-clr);
  z-index: 1;
  box-shadow: 0 0.3rem 0.5rem rgb(0, 0, 0, 0.3);

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: space-evenly;
}

#logo-image {
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

#logo-image img {
  display: block;
  max-height: 10vh;
  border-radius: 1rem;
  border: 0.1rem solid black;
}

#logo-text {
  flex: 2;
  justify-self: flex-start;
  align-self: center;

  font-family: var(--heading-font-fam);
  font-size: var(--heading-font-size);
}

.nav-items {
  height: 100%;
  flex: 1;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.nav-items button:hover {
  color: var(--highlight-clr-1);
}`, "",{"version":3,"sources":["webpack://./src/styles/nav.css"],"names":[],"mappings":"AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf;AACF;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,uCAAuC;EACvC,UAAU;EACV,6CAA6C;;EAE7C,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,OAAO;EACP,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,YAAY;EACZ,OAAO;EACP,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,mBAAmB;EACnB,0BAA0B;AAC5B;;AAEA;EACE,OAAO;EACP,wBAAwB;EACxB,kBAAkB;;EAElB,oCAAoC;EACpC,mCAAmC;AACrC;;AAEA;EACE,YAAY;EACZ,OAAO;;EAEP,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,6BAA6B;AAC/B","sourcesContent":["@import url('./index.css');\n\nhtml {\n  width: 100%;\n  height: 100%;\n  font-size: 10px;\n  font-family: 'libre_baskervilleregular'\n}\n\n.nav {\n  grid-column: 1 / -1;\n  grid-row: 1 / 2;\n  background-color: var(--background-clr);\n  z-index: 1;\n  box-shadow: 0 0.3rem 0.5rem rgb(0, 0, 0, 0.3);\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.logo {\n  height: 100%;\n  flex: 1;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n#logo-image {\n  height: 100%;\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#logo-image img {\n  display: block;\n  max-height: 10vh;\n  border-radius: 1rem;\n  border: 0.1rem solid black;\n}\n\n#logo-text {\n  flex: 2;\n  justify-self: flex-start;\n  align-self: center;\n\n  font-family: var(--heading-font-fam);\n  font-size: var(--heading-font-size);\n}\n\n.nav-items {\n  height: 100%;\n  flex: 1;\n\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.nav-items button:hover {\n  color: var(--highlight-clr-1);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 299:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(771);
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.showcase {
  align-self: center;
  justify-self: center;
  height: 95%;
  width: 95%;
  grid-column: 1 / 3;
  grid-row: 2 / -1;

  border-radius: 10rem;

  background-position: center;
  background-size: cover;
}`, "",{"version":3,"sources":["webpack://./src/styles/showcase.css"],"names":[],"mappings":"AAEA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,WAAW;EACX,UAAU;EACV,kBAAkB;EAClB,gBAAgB;;EAEhB,oBAAoB;;EAEpB,2BAA2B;EAC3B,sBAAsB;AACxB","sourcesContent":["@import url('./index.css');\n\n.showcase {\n  align-self: center;\n  justify-self: center;\n  height: 95%;\n  width: 95%;\n  grid-column: 1 / 3;\n  grid-row: 2 / -1;\n\n  border-radius: 10rem;\n\n  background-position: center;\n  background-size: cover;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 667:
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ 537:
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 130:
/***/ ((module) => {

module.exports = [["Anitpasti","Bruschetta al Pomodoro","Grilled artisan bread topped with marinated heirloom tomatoes, fresh basil, and a drizzle of extra virgin olive oil.","../assets/recipe-images/Bruchetta al Pomodoro.jpeg"],["Anitpasti","Carpaccio di Manzo","Thinly sliced raw beef tenderloin with arugula, capers, shaved Parmigiano-Reggiano, and a lemon-olive oil dressing.","/Users/alan.oconnor/repos/restaraunt-page-project/src/assets/recipe-images/Carpaccio di Manzo.jpeg"],["Anitpasti","Calamari Fritti ","Lightly fried squid rings served with a spicy marinara sauce and lemon wedges.","/Users/alan.oconnor/repos/restaraunt-page-project/src/assets/recipe-images/Calamari Fritti.jpeg"],["Primi","Spaghetti Carbonara","Classic Roman dish with pancetta, eggs, Pecorino Romano cheese, and cracked black pepper.","/Users/alan.oconnor/repos/restaraunt-page-project/src/assets/recipe-images/Spaghetti Carbonara.jpeg"],["Primi","Risotto ai Funghi Porcini","Creamy Arborio rice with porcini mushrooms, white wine, and a touch of truffle oil.","/Users/alan.oconnor/repos/restaraunt-page-project/src/assets/recipe-images/Risotto ai Funghi Porcini.jpeg"],["Primi","Lasagna alla Bolognese ","Layers of pasta with homemade Bolognese sauce, béchamel, and Parmigiano-Reggiano.","/Users/alan.oconnor/repos/restaraunt-page-project/src/assets/recipe-images/Lasagna alla Bolognese.jpeg"],["Secondi","Saltimbocca alla Romana","Veal escalopes wrapped in prosciutto and sage, cooked in a white wine and butter sauce.","../assets/recipe-images/Saltimbocca alla Romana.jpeg"],["Secondi","Pesce del Giorno","Catch of the day, grilled to perfection, with a side of lemon-infused extra virgin olive oil.","/Users/alan.oconnor/repos/restaraunt-page-project/src/assets/recipe-images/Pesce del Giorno.jpeg"],["Secondi","Melanzane alla Parmigiana ","Baked eggplant with tomato sauce, mozzarella, basil, and Parmesan cheese.","/Users/alan.oconnor/repos/restaraunt-page-project/src/assets/recipe-images/Melanzane alla Parmigiana.jpeg"],["Contorini","Patate al Rosmarino","Roasted rosemary potatoes with garlic and sea salt.","/Users/alan.oconnor/repos/restaraunt-page-project/src/assets/recipe-images/Patate al Rosmarino.jpeg"],["Contorini","Verdure di Stagione","Seasonal grilled vegetables drizzled with balsamic reduction.","/Users/alan.oconnor/repos/restaraunt-page-project/src/assets/recipe-images/Verdure di Stagione.jpeg"],["Contorini","Insalata Mista ","Mixed greens with cherry tomatoes, cucumbers, red onions, and a balsamic vinaigrette.","/Users/alan.oconnor/repos/restaraunt-page-project/src/assets/recipe-images/Insalata Mista.jpeg"],["Dolce","Tiramisu","Classic espresso-soaked ladyfingers layered with mascarpone cream and dusted with cocoa powder.","/Users/alan.oconnor/repos/restaraunt-page-project/src/assets/recipe-images/Tiramisu.jpeg"],["Dolce","Gelato Artigianale","Homemade gelato, ask your server for today’s flavor selections.","/Users/alan.oconnor/repos/restaraunt-page-project/src/assets/recipe-images/Gelato Artigianale.jpeg"],["Dolce","Panna Cotta","Silky smooth cooked cream with vanilla bean and mixed berry coulis.","/Users/alan.oconnor/repos/restaraunt-page-project/src/assets/recipe-images/Panna Cotta.jpeg"],["Bevande","See Drinks Menu","A selection of Italian wines, beers, soft drinks, and artisanal coffee.","/Users/alan.oconnor/repos/restaraunt-page-project/src/assets/recipe-images/Cappuccino.jpeg"]]

/***/ }),

/***/ 379:
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 216:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 589:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 856:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Bruchetta al Pomodoro.jpeg": 714,
	"./Calamari Fritti.jpeg": 458,
	"./Cappuccino.jpeg": 325,
	"./Carpaccio di Manzo.jpeg": 579,
	"./Gelato Artigianale.jpeg": 909,
	"./Insalata Mista.jpeg": 528,
	"./Lasagna alla Bolognese.jpeg": 620,
	"./Melanzane alla Parmigiana.jpeg": 668,
	"./Panna Cotta.jpeg": 866,
	"./Patate al Rosmarino.jpeg": 781,
	"./Pesce del Giorno.jpeg": 869,
	"./Risotto ai Funghi Porcini.jpeg": 330,
	"./Saltimbocca alla Romana.jpeg": 198,
	"./Spaghetti Carbonara.jpeg": 270,
	"./Tiramisu.jpeg": 673,
	"./Verdure di Stagione.jpeg": 186
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 856;

/***/ }),

/***/ 899:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/styles/nav.css
var nav = __webpack_require__(926);
;// CONCATENATED MODULE: ./src/styles/nav.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(nav/* default */.Z, options);




       /* harmony default export */ const styles_nav = (nav/* default */.Z && nav/* default */.Z.locals ? nav/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/styles/content.css
var content = __webpack_require__(177);
;// CONCATENATED MODULE: ./src/styles/content.css

      
      
      
      
      
      
      
      
      

var content_options = {};

content_options.styleTagTransform = (styleTagTransform_default());
content_options.setAttributes = (setAttributesWithoutAttributes_default());

      content_options.insert = insertBySelector_default().bind(null, "head");
    
content_options.domAPI = (styleDomAPI_default());
content_options.insertStyleElement = (insertStyleElement_default());

var content_update = injectStylesIntoStyleTag_default()(content/* default */.Z, content_options);




       /* harmony default export */ const styles_content = (content/* default */.Z && content/* default */.Z.locals ? content/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/mainModules/aboutModule.js


const aboutModule = (() => {
  const render = () => {

    const contentContainer = document.createElement('div');
    contentContainer.classList.add('container');

    const ourReasonContainer = document.createElement('div');
    ourReasonContainer.classList.add('text-container');
    const ourReasonHeading = document.createElement('h2');
    ourReasonHeading.classList.add('about-heading');
    const ourReasonText = document.createElement('p');
    ourReasonText.classList.add('about-text');

    const ourPhilosophyContainer = document.createElement('div');
    ourPhilosophyContainer.classList.add('text-container');
    const ourPhilosophyHeading = document.createElement('h2');
    ourPhilosophyHeading.classList.add('about-heading');
    const ourPhilosophyText = document.createElement('p');
    ourPhilosophyText.classList.add('about-text');

    const ourDifferenceContainer = document.createElement('div');
    ourDifferenceContainer.classList.add('text-container');
    const ourDifferenceHeading = document.createElement('h2');
    ourDifferenceHeading.classList.add('about-heading');
    const ourDifferenceText = document.createElement('p');
    ourDifferenceText.classList.add('about-text');

    const ourFoodContainer = document.createElement('div');
    ourFoodContainer.classList.add('text-container');
    const ourFoodHeading = document.createElement('h2');
    ourFoodHeading.classList.add('about-heading');
    const ourFoodText = document.createElement('p');
    ourFoodText.classList.add('about-text');

    const ourInviteContainer = document.createElement('div');
    ourInviteContainer.classList.add('text-container');
    const ourInviteHeading = document.createElement('h2');
    ourInviteHeading.classList.add('about-heading');
    const ourInviteText = document.createElement('p');
    ourInviteText.classList.add('about-text');

    ourReasonHeading.textContent = "Our Reason";
    ourReasonText.textContent = 'In the vibrant city of Dublin, Trattoria BellaVista is a slice of Italy offering a haven of gourmet tranquility. This cherished establishment is the vision of a family devoted to the art of Italian cuisine, bringing time-honored recipes that have traveled through family lines to our local community.'

    ourPhilosophyHeading.textContent = "Our Philosophy";
    ourPhilosophyText.textContent = 'At Trattoria BellaVista, our philosophy is simple: every meal is a small festival, an occasion to share and enjoy. We source the finest local produce, combining it with traditional Italian cooking techniques to create dishes that are both innovative and comforting. Our menu is a loving tribute to the diverse regions of Italy, from the rolling landscapes of Tuscany to the crystal-clear waters of the Amalfi Coast.';

    ourDifferenceHeading.textContent = "Our Difference";
    ourDifferenceText.textContent = "The ambiance of Trattoria BellaVista marries rustic authenticity with contemporary ease, ensuring a warm and inviting dining experience. Whether you're here for a light-hearted lunch, a romantic dinner, or a celebration, we are committed to providing an unforgettable dining experience."

    ourFoodHeading.textContent = "Our Food"
    ourFoodText.textContent = "Indulge in our handcrafted pastas, succulent wood-fired pizzas, and luscious desserts, each a homage to the spirited flavors of Italy and an insight into our culinary passion. At Trattoria BellaVista, our dishes are not just food; they are narratives of Italian heritage and a promise of comfort that stays with you long after your visit."

    ourInviteHeading.textContent = "So Come Along";
    ourInviteText.textContent = "We invite you to Trattoria BellaVista in the heart of Dublin, where every bite is a story, and every guest is family.";

    ourReasonContainer.append(...[ourReasonHeading, ourReasonText]);
    ourPhilosophyContainer.append(...[ourPhilosophyHeading, ourPhilosophyText]);
    ourDifferenceContainer.append(...[ourDifferenceHeading, ourDifferenceText]);
    ourFoodContainer.append(...[ourFoodHeading, ourFoodText]);
    ourInviteContainer.append(...[ourInviteHeading, ourInviteText]);

    contentContainer.append(...[
      ourReasonContainer, 
      ourPhilosophyContainer, 
      ourDifferenceContainer, 
      ourFoodContainer, 
      ourInviteContainer
    ])

    return contentContainer;
  }

  return {
    render
  }
})()  


;// CONCATENATED MODULE: ./src/mainModules/contentModule.js


const contentModule = (() => {
  const initialRender = () => {
    const contentDiv = document.createElement('div');
    contentDiv.setAttribute('id', 'content');
  
    return contentDiv
  }

  const deleteContent = div => {
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }
  }

  const renderContent = (module => {
    const mainDiv = document.querySelector('#content');
    deleteContent(mainDiv);
  
    mainDiv.append(module);
  })

  return {
    initialRender,
    deleteContent,
    renderContent
  }
})()

/* harmony default export */ const mainModules_contentModule = (contentModule);
// EXTERNAL MODULE: ./src/assets/menu-items.csv
var menu_items = __webpack_require__(130);
var menu_items_default = /*#__PURE__*/__webpack_require__.n(menu_items);
;// CONCATENATED MODULE: ./src/utils/dataClean.js

const path = __webpack_require__(856);

const dataClean = (() => {
  const array = Array.from((menu_items_default()));
  const menuItems = {};

  for (let i = 0; i < array.length; i++) {
    const category = array[i][0];
    const name = array[i][1];
    const description = array[i][2];
    const image = path.keys().map(path)[i];

    if (!menuItems[category]) {
      menuItems[category] = [];
    }

    const menuItem = {
      itemName: name,
      itemDescription: description,
      itemImage: image
    }

    menuItems[category].push(menuItem);
  }

  return menuItems
})()

/* harmony default export */ const utils_dataClean = (dataClean);
;// CONCATENATED MODULE: ./src/utils/menuSection.js


function menuSection(section) {
  const sectionContainer = document.createElement('div');
  const heading = document.createElement('h1');
  heading.classList.add('section-heading');

  heading.textContent = section;

  sectionContainer.append(heading);

  return sectionContainer;
}

/* harmony default export */ const utils_menuSection = (menuSection);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/styles/card.css
var card = __webpack_require__(135);
;// CONCATENATED MODULE: ./src/styles/card.css

      
      
      
      
      
      
      
      
      

var card_options = {};

card_options.styleTagTransform = (styleTagTransform_default());
card_options.setAttributes = (setAttributesWithoutAttributes_default());

      card_options.insert = insertBySelector_default().bind(null, "head");
    
card_options.domAPI = (styleDomAPI_default());
card_options.insertStyleElement = (insertStyleElement_default());

var card_update = injectStylesIntoStyleTag_default()(card/* default */.Z, card_options);




       /* harmony default export */ const styles_card = (card/* default */.Z && card/* default */.Z.locals ? card/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/utils/card.js


const card_card = item => {
  const name = item.itemName;
  const description = item.itemDescription;
  const image = item.itemImage;
  
  const cardContainer = document.createElement('div');

  const imageContainer = document.createElement('div');
  const textContainer = document.createElement('div');

  const itemImage = document.createElement('img');
  const itemHeading = document.createElement('h2');
  const itemDescription = document.createElement('p');

  cardContainer.classList.add('card');

  imageContainer.classList.add('card-image-container');
  textContainer.classList.add('card-text-container');

  itemImage.src = image;
  itemHeading.textContent = name;
  itemDescription.textContent = description;

  imageContainer.append(itemImage);
  textContainer.append(...[itemHeading, itemDescription]);

  cardContainer.append(...[imageContainer, textContainer]);

  return cardContainer;
}

/* harmony default export */ const utils_card = (card_card);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/styles/showcase.css
var showcase = __webpack_require__(299);
;// CONCATENATED MODULE: ./src/styles/showcase.css

      
      
      
      
      
      
      
      
      

var showcase_options = {};

showcase_options.styleTagTransform = (styleTagTransform_default());
showcase_options.setAttributes = (setAttributesWithoutAttributes_default());

      showcase_options.insert = insertBySelector_default().bind(null, "head");
    
showcase_options.domAPI = (styleDomAPI_default());
showcase_options.insertStyleElement = (insertStyleElement_default());

var showcase_update = injectStylesIntoStyleTag_default()(showcase/* default */.Z, showcase_options);




       /* harmony default export */ const styles_showcase = (showcase/* default */.Z && showcase/* default */.Z.locals ? showcase/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/assets/index-showcase.jpg
const index_showcase_namespaceObject = __webpack_require__.p + "24f81cd07bc639f6f740.jpg";
;// CONCATENATED MODULE: ./src/mainModules/showcaseModule.js



const showcaseModule_showcase = (() => {
  const render = () => {
    const showcaseContainer = document.createElement('div');
    showcaseContainer.style.backgroundImage = `url(${index_showcase_namespaceObject})`;
    showcaseContainer.classList.add('showcase');
    return showcaseContainer;
  }

  const changeImage = imageSource => {
    console.log(imageSource);
    const container = document.querySelector('.showcase');
    container.style.backgroundImage = `url(${imageSource})`;
  }

  return {
    render,
    changeImage
  }

})()

/* harmony default export */ const showcaseModule = (showcaseModule_showcase);
;// CONCATENATED MODULE: ./src/mainModules/menuModule.js






const menuModule = (() => {
  const render = () => {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('container');

    const category = Object.keys(utils_dataClean);
    for (let i = 0; i < category.length; i++) {
      const section = utils_menuSection(category[i]);
      const items = utils_dataClean[category[i]];
      
      for (let j = 0; j < items.length; j++) {
        const menuCard = utils_card(items[j]);
        section.append(menuCard);

        menuCard.addEventListener('click', () => {
          const imageSrc = menuCard.childNodes[0].firstChild.src;
          showcaseModule.changeImage(imageSrc);
        })
      }
      menuContainer.append(section);
    }

    return menuContainer;
  }

  return {
    render
  }
})()

/* harmony default export */ const mainModules_menuModule = (menuModule);
;// CONCATENATED MODULE: ./src/mainModules/contactModule.js


const contactModule = (() => {

  const hours = {
    'Monday': '08:00 - 22:00',
    'Tuesday': '08:00 - 22:00',
    'Wednesday': '08:00 - 22:00',
    'Thursday': '08:00 - 22:00',
    'Friday': '08:00 - 22:00',
    'Saturday': '09:00 - 21:00',
    'Sunday': '09:00 - 21:00',
    'Bank Holdays': '09:00 - 21:00'
  }

  const render = () => {
    const contactContainer = document.createElement('div');
    const openingHoursCard = openingHours(hours);
    const locationCard = location();

    contactContainer.classList.add('container');
    contactContainer.append(...[openingHoursCard, locationCard]);

    return contactContainer;
  }

  const openingHours = hours => {
    const days = Object.keys(hours);
    const container = document.createElement('div');
    const heading = document.createElement('h1');
    const isOpenorClosed = isOpen();

    container.classList.add('contact-card');
    heading.classList.add('section-heading');
    isOpenorClosed.classList.add('section-heading');
    heading.textContent = 'Opening Hours';
    container.append(heading);
    
    for (let i = 0; i < days.length; i++) {
      const card = document.createElement('div');
      const day = document.createElement('p');
      const time = document.createElement('p');

      card.classList.add('contact-section');
      day.classList.add('contact-heading');
      time.classList.add('contact-text');

      day.textContent = days[i];
      time.textContent = hours[days[i]];

      card.append(...[day, time]);
      container.append(card);
    }

    container.append(isOpenorClosed);

    return container;
  }

  const location = () => {
    const locationContainer = document.createElement('div');
    const heading = document.createElement('h2');
    const address1 = document.createElement('p');
    const address2 = document.createElement('p');
    const address3 = document.createElement('p');
    const eircode = document.createElement('p');

    locationContainer.classList.add('contact-card');
    heading.classList.add('section-heading');
    address1.classList.add('contact-text');
    address2.classList.add('contact-text');
    address3.classList.add('contact-text');
    eircode.classList.add('contact-text');

    heading.textContent = 'Location';
    address1.textContent = 'Dublin Docklands';
    address2.textContent = 'Dublin 2';
    address3.textContent = 'County Dublin';
    eircode.textContent = 'D02 A433';

    locationContainer.append(...[heading, address1, address2, address3, eircode]);

    return locationContainer;
  }

  const isOpen = () => {
    const date = new Date();
    const hour = date.getHours();
    const day = date.getDay();

    const notification = document.createElement('p');

    if ((hour === 9 && day <= 4) || (hour === 7 && day > 4)) {
      notification.textContent = 'Closing Soon (Scroll Down for Location)';
    } else if (((hour > 22 && hour < 8) && day <= 4) || ((hour > 21 && hour < 9) && day <= 4)) {
      notification.textContent = 'We\'re Closed (Scroll Down for Location)';
    } else {
      notification.textContent = 'We\'re Open (Scroll Down for Location)';
    }

    notification.setAttribute('id', 'opening-notification');

    return notification;
  }

  return { render }
})()

/* harmony default export */ const mainModules_contactModule = (contactModule);
;// CONCATENATED MODULE: ./src/assets/logo.png
const logo_namespaceObject = __webpack_require__.p + "bf27e849d0487ccef0d7.png";
;// CONCATENATED MODULE: ./src/mainModules/navigationModule.js







function navigation() {
  const navigation = document.createElement('div');
  const logoContainer = document.createElement('div');
  const navItems = document.createElement('div');
  const logoImageContainer = document.createElement('div');
  const logoTextContainer = document.createElement('div');
  const logoImage = new Image();
  const logoText = document.createElement('h1');
  const menuButton = document.createElement('button');
  const aboutButton = document.createElement('button');
  const contactButton = document.createElement('button');

  navigation.classList.add('nav');
  logoContainer.classList.add('logo');
  navItems.classList.add('nav-items');
  logoImageContainer.setAttribute('id', 'logo-image');
  logoTextContainer.setAttribute('id', 'logo-text');

  logoImage.src = logo_namespaceObject;
  logoText.textContent = 'Trattoria BellaVista';
  menuButton.textContent = 'Menu';
  aboutButton.textContent = 'About';
  contactButton.textContent = 'Contact';

  aboutButton.addEventListener('click', () => {
    mainModules_contentModule.renderContent(aboutModule.render());
  });

  menuButton.addEventListener('click', () => {
    mainModules_contentModule.renderContent(mainModules_menuModule.render());
  })

  contactButton.addEventListener('click', () => {
    mainModules_contentModule.renderContent(mainModules_contactModule.render());
  })


  logoContainer.append(...[logoImageContainer, logoTextContainer]);
  logoImageContainer.append(logoImage);
  logoTextContainer.append(logoText);
  navItems.append(...[menuButton, aboutButton, contactButton]);
  navigation.append(...[logoContainer, navItems]);

  return navigation;
}
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css
var styles = __webpack_require__(771);
;// CONCATENATED MODULE: ./src/styles/index.css

      
      
      
      
      
      
      
      
      

var styles_options = {};

styles_options.styleTagTransform = (styleTagTransform_default());
styles_options.setAttributes = (setAttributesWithoutAttributes_default());

      styles_options.insert = insertBySelector_default().bind(null, "head");
    
styles_options.domAPI = (styleDomAPI_default());
styles_options.insertStyleElement = (insertStyleElement_default());

var styles_update = injectStylesIntoStyleTag_default()(styles/* default */.Z, styles_options);




       /* harmony default export */ const src_styles = (styles/* default */.Z && styles/* default */.Z.locals ? styles/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/mainModules/index.js






document.body.append(navigation());
document.body.append(showcaseModule.render());
document.body.append(mainModules_contentModule.initialRender());

document.addEventListener('DOMContentLoaded', () => {
  mainModules_contentModule.renderContent(aboutModule.render());
})

/***/ }),

/***/ 714:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "168254bbac273f24210c.jpeg";

/***/ }),

/***/ 458:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e35e7a266017630a7be6.jpeg";

/***/ }),

/***/ 325:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "112be12b382db46e29ef.jpeg";

/***/ }),

/***/ 579:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f2caea608fef8f686d22.jpeg";

/***/ }),

/***/ 909:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "156b25c63338afeb45d2.jpeg";

/***/ }),

/***/ 528:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1ee5f6941896ba3a180c.jpeg";

/***/ }),

/***/ 620:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1bd224eb2e44a05c4baa.jpeg";

/***/ }),

/***/ 668:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2c7254c2b560478079ab.jpeg";

/***/ }),

/***/ 866:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "02afe0d610e9b9d71d95.jpeg";

/***/ }),

/***/ 781:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f12128bc8eaa137e6e1a.jpeg";

/***/ }),

/***/ 869:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e1b1ea30e6f5c43c8a62.jpeg";

/***/ }),

/***/ 330:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "478b3f0170944d314017.jpeg";

/***/ }),

/***/ 198:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ec8f9844b6f5127330be.jpeg";

/***/ }),

/***/ 270:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3c7ced6ba88f926f6a80.jpeg";

/***/ }),

/***/ 673:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1797ddb25c0f965ab4de.jpeg";

/***/ }),

/***/ 186:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "03fef25e056a5ac349d8.jpeg";

/***/ }),

/***/ 395:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9bccb071d940a34e57f3.woff";

/***/ }),

/***/ 4:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "349dc7c86cf544d970ca.woff2";

/***/ }),

/***/ 407:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "037ff8dec545563531ca.woff";

/***/ }),

/***/ 178:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e3dfc6dbe50df1b30e2c.woff2";

/***/ }),

/***/ 322:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "96b257218a006f207a24.woff";

/***/ }),

/***/ 230:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a260c63075099bb6ea74.woff2";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(899));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBbUIsRUFBQzs7O0FDMUJ4QjtBQUNKO0FBQ0g7QUFDQztBQUNsQjs7QUFFN0IscUJBQXFCLFVBQWdCO0FBQ3JDLHFCQUFxQixjQUFjO0FBQ25DLHFCQUFxQix5QkFBYTs7QUFFbEM7QUFDQSxFQUFFLHlCQUFhLGVBQWUsV0FBVztBQUN6QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGFyYXVudC1wYWdlLXByb2plY3QvLi9zcmMvc3R5bGVzL2NhcmQuY3NzIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS1wcm9qZWN0Ly4vc3JjL3N0eWxlcy9jb250ZW50LmNzcyIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2UtcHJvamVjdC8uL3NyYy9zdHlsZXMvaW5kZXguY3NzIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS1wcm9qZWN0Ly4vc3JjL3N0eWxlcy9uYXYuY3NzIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS1wcm9qZWN0Ly4vc3JjL3N0eWxlcy9zaG93Y2FzZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC1wYWdlLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2UtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS1wcm9qZWN0Ly4vc3JjL2Fzc2V0cy9tZW51LWl0ZW1zLmNzdiIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2UtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2UtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC1wYWdlLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC1wYWdlLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC1wYWdlLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2UtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS1wcm9qZWN0Ly4vc3JjL2Fzc2V0cy9yZWNpcGUtaW1hZ2VzLyBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC1wYWdlLXByb2plY3QvLi9zcmMvc3R5bGVzL25hdi5jc3M/MjE3MCIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2UtcHJvamVjdC8uL3NyYy9zdHlsZXMvY29udGVudC5jc3M/M2RiYSIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2UtcHJvamVjdC8uL3NyYy9tYWluTW9kdWxlcy9hYm91dE1vZHVsZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2UtcHJvamVjdC8uL3NyYy9tYWluTW9kdWxlcy9jb250ZW50TW9kdWxlLmpzIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS1wcm9qZWN0Ly4vc3JjL3V0aWxzL2RhdGFDbGVhbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2UtcHJvamVjdC8uL3NyYy91dGlscy9tZW51U2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2UtcHJvamVjdC8uL3NyYy9zdHlsZXMvY2FyZC5jc3M/MjlkNSIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2UtcHJvamVjdC8uL3NyYy91dGlscy9jYXJkLmpzIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS1wcm9qZWN0Ly4vc3JjL3N0eWxlcy9zaG93Y2FzZS5jc3M/OTQ2NSIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2UtcHJvamVjdC8uL3NyYy9tYWluTW9kdWxlcy9zaG93Y2FzZU1vZHVsZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2UtcHJvamVjdC8uL3NyYy9tYWluTW9kdWxlcy9tZW51TW9kdWxlLmpzIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS1wcm9qZWN0Ly4vc3JjL21haW5Nb2R1bGVzL2NvbnRhY3RNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC1wYWdlLXByb2plY3QvLi9zcmMvbWFpbk1vZHVsZXMvbmF2aWdhdGlvbk1vZHVsZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2UtcHJvamVjdC8uL3NyYy9zdHlsZXMvaW5kZXguY3NzPzYzNDkiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC1wYWdlLXByb2plY3QvLi9zcmMvbWFpbk1vZHVsZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGVudC5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDFyZW07XG4gIGdhcDogMnJlbTtcbn1cblxuLmNhcmQtaW1hZ2UtY29udGFpbmVyIHtcbiAgZmxleDogMTtcbn1cblxuLmNhcmQtaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gIHdpZHRoOiAxMnZ3O1xuICBhc3BlY3QtcmF0aW86IDEvMTtcblxuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG5cbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cblxuLmNhcmQtdGV4dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICBnYXA6IDEuNXJlbTtcbn1cblxuLmNhcmQtdGV4dC1jb250YWluZXIgcCB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1iYXNlLWZvbnQtZmFtKTtcbiAgZm9udC1zaXplOiB2YXIoLS1iYXNlLWZvbnQtc2l6ZSk7XG59XG5cbi5jYXJkLXRleHQtY29udGFpbmVyIGgyIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmctZm9udC1mYW0pO1xuICBmb250LXNpemU6IHZhcigtLWhlYWRpbmctMi1mb250LXNpemUpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9jYXJkLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osU0FBUztBQUNYOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjs7RUFFakIsaUJBQWlCO0VBQ2pCLHVCQUF1Qjs7RUFFdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjs7RUFFdEIsdUJBQXVCO0VBQ3ZCLHVCQUF1Qjs7RUFFdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxxQ0FBcUM7QUFDdkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJy4vY29udGVudC5jc3MnKTtcXG5cXG4uY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uY2FyZC1pbWFnZS1jb250YWluZXIge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmNhcmQtaW1hZ2UtY29udGFpbmVyIGltZyB7XFxuICB3aWR0aDogMTJ2dztcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcblxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5jYXJkLXRleHQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5cXG4gIGdhcDogMS41cmVtO1xcbn1cXG5cXG4uY2FyZC10ZXh0LWNvbnRhaW5lciBwIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1iYXNlLWZvbnQtZmFtKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tYmFzZS1mb250LXNpemUpO1xcbn1cXG5cXG4uY2FyZC10ZXh0LWNvbnRhaW5lciBoMiB7XFxuICBmb250LWZhbWlseTogdmFyKC0taGVhZGluZy1mb250LWZhbSk7XFxuICBmb250LXNpemU6IHZhcigtLWhlYWRpbmctMi1mb250LXNpemUpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCNjb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBncmlkLWNvbHVtbjogMyAvIC0xO1xuICBncmlkLXJvdzogMiAvIC0xO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY2xyKTtcbn1cblxuI2NvbnRlbnQgLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA5NSU7XG4gIGhlaWdodDogOTUlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcblxuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgZ2FwOiAxcmVtO1xufVxuXG4udGV4dC1jb250YWluZXIge1xuICBtYXJnaW46IDAgMXJlbSAwIDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG5cbi5hYm91dC1oZWFkaW5nIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmctZm9udC1mYW0pO1xuICBmb250LXNpemU6IHZhcigtLWhlYWRpbmctMi1mb250LXNpemUpO1xufVxuXG4uYWJvdXQtdGV4dCB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1iYXNlLWZvbnQtZmFtKTtcbiAgZm9udC1zaXplOiB2YXIoLS1iYXNlLWZvbnQtc2l6ZSk7XG59XG5cbi5zZWN0aW9uLWhlYWRpbmcge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jbHIpO1xuICBwYWRkaW5nOiAxcmVtO1xuXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkaW5nLWZvbnQtZmFtKTtcbiAgZm9udC1zaXplOiB2YXIoLS1oZWFkaW5nLTItZm9udC1zaXplKTtcbn1cblxuLmNvbnRhY3QtY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDJyZW07XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbi5jb250YWN0LXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmNvbnRhY3QtaGVhZGluZyB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBmb250LWZhbWlseTogdmFyKC0taGVhZGluZy1mb250LWZhbSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tYmFzZS1mb250LXNpemUpO1xufVxuXG4uY29udGFjdC10ZXh0IHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1iYXNlLWZvbnQtZmFtKTtcbiAgZm9udC1zaXplOiB2YXIoLS1iYXNlLWZvbnQtc2l6ZSk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbnRlbnQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7O0VBRWhCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHVCQUF1Qjs7RUFFdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjs7RUFFbkIsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7O0VBRW5CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFFBQVE7RUFDUix1Q0FBdUM7RUFDdkMsYUFBYTs7RUFFYixvQ0FBb0M7RUFDcEMscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7O0VBRW5CLG9DQUFvQztFQUNwQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7O0VBRW5CLGlDQUFpQztFQUNqQyxnQ0FBZ0M7QUFDbENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJy4vaW5kZXguY3NzJyk7XFxuXFxuI2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZ3JpZC1jb2x1bW46IDMgLyAtMTtcXG4gIGdyaWQtcm93OiAyIC8gLTE7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jbHIpO1xcbn1cXG5cXG4jY29udGVudCAuY29udGFpbmVyIHtcXG4gIHdpZHRoOiA5NSU7XFxuICBoZWlnaHQ6IDk1JTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFxuICBnYXA6IDFyZW07XFxufVxcblxcbi50ZXh0LWNvbnRhaW5lciB7XFxuICBtYXJnaW46IDAgMXJlbSAwIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uYWJvdXQtaGVhZGluZyB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmctZm9udC1mYW0pO1xcbiAgZm9udC1zaXplOiB2YXIoLS1oZWFkaW5nLTItZm9udC1zaXplKTtcXG59XFxuXFxuLmFib3V0LXRleHQge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1iYXNlLWZvbnQtZmFtKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tYmFzZS1mb250LXNpemUpO1xcbn1cXG5cXG4uc2VjdGlvbi1oZWFkaW5nIHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY2xyKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuXFxuICBmb250LWZhbWlseTogdmFyKC0taGVhZGluZy1mb250LWZhbSk7XFxuICBmb250LXNpemU6IHZhcigtLWhlYWRpbmctMi1mb250LXNpemUpO1xcbn1cXG5cXG4uY29udGFjdC1jYXJkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJyZW07XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4uY29udGFjdC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmNvbnRhY3QtaGVhZGluZyB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LWZhbWlseTogdmFyKC0taGVhZGluZy1mb250LWZhbSk7XFxuICBmb250LXNpemU6IHZhcigtLWJhc2UtZm9udC1zaXplKTtcXG59XFxuXFxuLmNvbnRhY3QtdGV4dCB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LWZhbWlseTogdmFyKC0tYmFzZS1mb250LWZhbSk7XFxuICBmb250LXNpemU6IHZhcigtLWJhc2UtZm9udC1zaXplKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvd2ViZm9udGtpdC0yMDIzMTEwNS0wOTI1MTkvbGlicmViYXNrZXJ2aWxsZS1ib2xkLXdlYmZvbnQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvd2ViZm9udGtpdC0yMDIzMTEwNS0wOTI1MTkvbGlicmViYXNrZXJ2aWxsZS1ib2xkLXdlYmZvbnQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy93ZWJmb250a2l0LTIwMjMxMTA1LTA5MjUxOS9saWJyZWJhc2tlcnZpbGxlLWl0YWxpYy13ZWJmb250LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL3dlYmZvbnRraXQtMjAyMzExMDUtMDkyNTE5L2xpYnJlYmFza2VydmlsbGUtaXRhbGljLXdlYmZvbnQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy93ZWJmb250a2l0LTIwMjMxMTA1LTA5MjUxOS9saWJyZWJhc2tlcnZpbGxlLXJlZ3VsYXItd2ViZm9udC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy93ZWJmb250a2l0LTIwMjMxMTA1LTA5MjUxOS9saWJyZWJhc2tlcnZpbGxlLXJlZ3VsYXItd2ViZm9udC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ2xpYnJlX2Jhc2tlcnZpbGxlYm9sZCc7XG4gIHNyYzogXG4gICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgnd29mZjInKSxcbiAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ2xpYnJlX2Jhc2tlcnZpbGxlaXRhbGljJztcbiAgc3JjOiBcbiAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgZm9ybWF0KCd3b2ZmMicpLFxuICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdsaWJyZV9iYXNrZXJ2aWxsZXJlZ3VsYXInO1xuICBzcmM6IFxuICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fX30pIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbjpyb290IHtcbiAgLS1iYXNlLWZvbnQtZmFtOiAnbGlicmVfYmFza2VydmlsbGVyZWd1bGFyJztcbiAgLS1oZWFkaW5nLWZvbnQtZmFtOiAnbGlicmVfYmFza2VydmlsbGVpdGFsaWMnO1xuICAtLWJ1dHRvbi1mb250LWZhbTogJ2xpYnJlX2Jhc2tlcnZpbGxlYm9sZCc7XG4gIC0tYmFzZS1mb250LXNpemU6IDEuNHJlbTtcbiAgLS1oZWFkaW5nLTEtZm9udC1zaXplOiAyLjRyZW07XG4gIC0taGVhZGluZy0yLWZvbnQtc2l6ZTogMnJlbTtcbiAgLS1idXR0b24tZm9udC1zaXplOiAxLjhyZW07XG4gIC0tYmFja2dyb3VuZC1jbHI6IHJnYigyNDUsIDI0NiwgMjQ1KTtcbiAgLS1oaWdobGlnaHQtY2xyLTE6IHJnYigyMzUsIDEyNSwgMTI1KTtcbiAgLS1oaWdobGlnaHQtY2xyLTI6IHJnYigxMjUsIDIzNSwgMTI1KTtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNiwgMWZyKTtcbn1cblxuYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWJ1dHRvbi1mb250LWZhbSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tYnV0dG9uLWZvbnQtc2l6ZSk7XG5cbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG9DQUFvQztFQUNwQzs7MERBRStGO0VBQy9GLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEM7OzBEQUVpRztFQUNqRyxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDOzswREFFa0c7RUFDbEcsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyw2Q0FBNkM7RUFDN0MsMENBQTBDO0VBQzFDLHdCQUF3QjtFQUN4Qiw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLDBCQUEwQjtFQUMxQixvQ0FBb0M7RUFDcEMscUNBQXFDO0VBQ3JDLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsa0NBQWtDOztFQUVsQyxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdsaWJyZV9iYXNrZXJ2aWxsZWJvbGQnO1xcbiAgc3JjOiBcXG4gICAgdXJsKCcuLi9hc3NldHMvd2ViZm9udGtpdC0yMDIzMTEwNS0wOTI1MTkvbGlicmViYXNrZXJ2aWxsZS1ib2xkLXdlYmZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgIHVybCgnLi4vYXNzZXRzL3dlYmZvbnRraXQtMjAyMzExMDUtMDkyNTE5L2xpYnJlYmFza2VydmlsbGUtYm9sZC13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnbGlicmVfYmFza2VydmlsbGVpdGFsaWMnO1xcbiAgc3JjOiBcXG4gICAgdXJsKCcuLi9hc3NldHMvd2ViZm9udGtpdC0yMDIzMTEwNS0wOTI1MTkvbGlicmViYXNrZXJ2aWxsZS1pdGFsaWMtd2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgdXJsKCcuLi9hc3NldHMvd2ViZm9udGtpdC0yMDIzMTEwNS0wOTI1MTkvbGlicmViYXNrZXJ2aWxsZS1pdGFsaWMtd2ViZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnbGlicmVfYmFza2VydmlsbGVyZWd1bGFyJztcXG4gIHNyYzogXFxuICAgIHVybCgnLi4vYXNzZXRzL3dlYmZvbnRraXQtMjAyMzExMDUtMDkyNTE5L2xpYnJlYmFza2VydmlsbGUtcmVndWxhci13ZWJmb250LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICB1cmwoJy4uL2Fzc2V0cy93ZWJmb250a2l0LTIwMjMxMTA1LTA5MjUxOS9saWJyZWJhc2tlcnZpbGxlLXJlZ3VsYXItd2ViZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWJhc2UtZm9udC1mYW06ICdsaWJyZV9iYXNrZXJ2aWxsZXJlZ3VsYXInO1xcbiAgLS1oZWFkaW5nLWZvbnQtZmFtOiAnbGlicmVfYmFza2VydmlsbGVpdGFsaWMnO1xcbiAgLS1idXR0b24tZm9udC1mYW06ICdsaWJyZV9iYXNrZXJ2aWxsZWJvbGQnO1xcbiAgLS1iYXNlLWZvbnQtc2l6ZTogMS40cmVtO1xcbiAgLS1oZWFkaW5nLTEtZm9udC1zaXplOiAyLjRyZW07XFxuICAtLWhlYWRpbmctMi1mb250LXNpemU6IDJyZW07XFxuICAtLWJ1dHRvbi1mb250LXNpemU6IDEuOHJlbTtcXG4gIC0tYmFja2dyb3VuZC1jbHI6IHJnYigyNDUsIDI0NiwgMjQ1KTtcXG4gIC0taGlnaGxpZ2h0LWNsci0xOiByZ2IoMjM1LCAxMjUsIDEyNSk7XFxuICAtLWhpZ2hsaWdodC1jbHItMjogcmdiKDEyNSwgMjM1LCAxMjUpO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg2LCAxZnIpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWJ1dHRvbi1mb250LWZhbSk7XFxuICBmb250LXNpemU6IHZhcigtLWJ1dHRvbi1mb250LXNpemUpO1xcblxcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LWZhbWlseTogJ2xpYnJlX2Jhc2tlcnZpbGxlcmVndWxhcidcbn1cblxuLm5hdiB7XG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XG4gIGdyaWQtcm93OiAxIC8gMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jbHIpO1xuICB6LWluZGV4OiAxO1xuICBib3gtc2hhZG93OiAwIDAuM3JlbSAwLjVyZW0gcmdiKDAsIDAsIDAsIDAuMyk7XG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9nbyB7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbiNsb2dvLWltYWdlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2xvZ28taW1hZ2UgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC1oZWlnaHQ6IDEwdmg7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIGJsYWNrO1xufVxuXG4jbG9nby10ZXh0IHtcbiAgZmxleDogMjtcbiAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG5cbiAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmctZm9udC1mYW0pO1xuICBmb250LXNpemU6IHZhcigtLWhlYWRpbmctZm9udC1zaXplKTtcbn1cblxuLm5hdi1pdGVtcyB7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxleDogMTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5hdi1pdGVtcyBidXR0b246aG92ZXIge1xuICBjb2xvcjogdmFyKC0taGlnaGxpZ2h0LWNsci0xKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbmF2LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHVDQUF1QztFQUN2QyxVQUFVO0VBQ1YsNkNBQTZDOztFQUU3QyxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixPQUFPO0VBQ1AsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixPQUFPO0VBQ1AsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxPQUFPO0VBQ1Asd0JBQXdCO0VBQ3hCLGtCQUFrQjs7RUFFbEIsb0NBQW9DO0VBQ3BDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixPQUFPOztFQUVQLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCcuL2luZGV4LmNzcycpO1xcblxcbmh0bWwge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBmb250LWZhbWlseTogJ2xpYnJlX2Jhc2tlcnZpbGxlcmVndWxhcidcXG59XFxuXFxuLm5hdiB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jbHIpO1xcbiAgei1pbmRleDogMTtcXG4gIGJveC1zaGFkb3c6IDAgMC4zcmVtIDAuNXJlbSByZ2IoMCwgMCwgMCwgMC4zKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4jbG9nby1pbWFnZSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2xvZ28taW1hZ2UgaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LWhlaWdodDogMTB2aDtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCBibGFjaztcXG59XFxuXFxuI2xvZ28tdGV4dCB7XFxuICBmbGV4OiAyO1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcblxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmctZm9udC1mYW0pO1xcbiAgZm9udC1zaXplOiB2YXIoLS1oZWFkaW5nLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5uYXYtaXRlbXMge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZmxleDogMTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXYtaXRlbXMgYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1oaWdobGlnaHQtY2xyLTEpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zaG93Y2FzZSB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGhlaWdodDogOTUlO1xuICB3aWR0aDogOTUlO1xuICBncmlkLWNvbHVtbjogMSAvIDM7XG4gIGdyaWQtcm93OiAyIC8gLTE7XG5cbiAgYm9yZGVyLXJhZGl1czogMTByZW07XG5cbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zaG93Y2FzZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjs7RUFFaEIsb0JBQW9COztFQUVwQiwyQkFBMkI7RUFDM0Isc0JBQXNCO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCcuL2luZGV4LmNzcycpO1xcblxcbi5zaG93Y2FzZSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGhlaWdodDogOTUlO1xcbiAgd2lkdGg6IDk1JTtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gIGdyaWQtcm93OiAyIC8gLTE7XFxuXFxuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcXG5cXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gW1tcIkFuaXRwYXN0aVwiLFwiQnJ1c2NoZXR0YSBhbCBQb21vZG9yb1wiLFwiR3JpbGxlZCBhcnRpc2FuIGJyZWFkIHRvcHBlZCB3aXRoIG1hcmluYXRlZCBoZWlybG9vbSB0b21hdG9lcywgZnJlc2ggYmFzaWwsIGFuZCBhIGRyaXp6bGUgb2YgZXh0cmEgdmlyZ2luIG9saXZlIG9pbC5cIixcIi4uL2Fzc2V0cy9yZWNpcGUtaW1hZ2VzL0JydWNoZXR0YSBhbCBQb21vZG9yby5qcGVnXCJdLFtcIkFuaXRwYXN0aVwiLFwiQ2FycGFjY2lvIGRpIE1hbnpvXCIsXCJUaGlubHkgc2xpY2VkIHJhdyBiZWVmIHRlbmRlcmxvaW4gd2l0aCBhcnVndWxhLCBjYXBlcnMsIHNoYXZlZCBQYXJtaWdpYW5vLVJlZ2dpYW5vLCBhbmQgYSBsZW1vbi1vbGl2ZSBvaWwgZHJlc3NpbmcuXCIsXCIvVXNlcnMvYWxhbi5vY29ubm9yL3JlcG9zL3Jlc3RhcmF1bnQtcGFnZS1wcm9qZWN0L3NyYy9hc3NldHMvcmVjaXBlLWltYWdlcy9DYXJwYWNjaW8gZGkgTWFuem8uanBlZ1wiXSxbXCJBbml0cGFzdGlcIixcIkNhbGFtYXJpIEZyaXR0aSBcIixcIkxpZ2h0bHkgZnJpZWQgc3F1aWQgcmluZ3Mgc2VydmVkIHdpdGggYSBzcGljeSBtYXJpbmFyYSBzYXVjZSBhbmQgbGVtb24gd2VkZ2VzLlwiLFwiL1VzZXJzL2FsYW4ub2Nvbm5vci9yZXBvcy9yZXN0YXJhdW50LXBhZ2UtcHJvamVjdC9zcmMvYXNzZXRzL3JlY2lwZS1pbWFnZXMvQ2FsYW1hcmkgRnJpdHRpLmpwZWdcIl0sW1wiUHJpbWlcIixcIlNwYWdoZXR0aSBDYXJib25hcmFcIixcIkNsYXNzaWMgUm9tYW4gZGlzaCB3aXRoIHBhbmNldHRhLCBlZ2dzLCBQZWNvcmlubyBSb21hbm8gY2hlZXNlLCBhbmQgY3JhY2tlZCBibGFjayBwZXBwZXIuXCIsXCIvVXNlcnMvYWxhbi5vY29ubm9yL3JlcG9zL3Jlc3RhcmF1bnQtcGFnZS1wcm9qZWN0L3NyYy9hc3NldHMvcmVjaXBlLWltYWdlcy9TcGFnaGV0dGkgQ2FyYm9uYXJhLmpwZWdcIl0sW1wiUHJpbWlcIixcIlJpc290dG8gYWkgRnVuZ2hpIFBvcmNpbmlcIixcIkNyZWFteSBBcmJvcmlvIHJpY2Ugd2l0aCBwb3JjaW5pIG11c2hyb29tcywgd2hpdGUgd2luZSwgYW5kIGEgdG91Y2ggb2YgdHJ1ZmZsZSBvaWwuXCIsXCIvVXNlcnMvYWxhbi5vY29ubm9yL3JlcG9zL3Jlc3RhcmF1bnQtcGFnZS1wcm9qZWN0L3NyYy9hc3NldHMvcmVjaXBlLWltYWdlcy9SaXNvdHRvIGFpIEZ1bmdoaSBQb3JjaW5pLmpwZWdcIl0sW1wiUHJpbWlcIixcIkxhc2FnbmEgYWxsYSBCb2xvZ25lc2UgXCIsXCJMYXllcnMgb2YgcGFzdGEgd2l0aCBob21lbWFkZSBCb2xvZ25lc2Ugc2F1Y2UsIGLDqWNoYW1lbCwgYW5kIFBhcm1pZ2lhbm8tUmVnZ2lhbm8uXCIsXCIvVXNlcnMvYWxhbi5vY29ubm9yL3JlcG9zL3Jlc3RhcmF1bnQtcGFnZS1wcm9qZWN0L3NyYy9hc3NldHMvcmVjaXBlLWltYWdlcy9MYXNhZ25hIGFsbGEgQm9sb2duZXNlLmpwZWdcIl0sW1wiU2Vjb25kaVwiLFwiU2FsdGltYm9jY2EgYWxsYSBSb21hbmFcIixcIlZlYWwgZXNjYWxvcGVzIHdyYXBwZWQgaW4gcHJvc2NpdXR0byBhbmQgc2FnZSwgY29va2VkIGluIGEgd2hpdGUgd2luZSBhbmQgYnV0dGVyIHNhdWNlLlwiLFwiLi4vYXNzZXRzL3JlY2lwZS1pbWFnZXMvU2FsdGltYm9jY2EgYWxsYSBSb21hbmEuanBlZ1wiXSxbXCJTZWNvbmRpXCIsXCJQZXNjZSBkZWwgR2lvcm5vXCIsXCJDYXRjaCBvZiB0aGUgZGF5LCBncmlsbGVkIHRvIHBlcmZlY3Rpb24sIHdpdGggYSBzaWRlIG9mIGxlbW9uLWluZnVzZWQgZXh0cmEgdmlyZ2luIG9saXZlIG9pbC5cIixcIi9Vc2Vycy9hbGFuLm9jb25ub3IvcmVwb3MvcmVzdGFyYXVudC1wYWdlLXByb2plY3Qvc3JjL2Fzc2V0cy9yZWNpcGUtaW1hZ2VzL1Blc2NlIGRlbCBHaW9ybm8uanBlZ1wiXSxbXCJTZWNvbmRpXCIsXCJNZWxhbnphbmUgYWxsYSBQYXJtaWdpYW5hIFwiLFwiQmFrZWQgZWdncGxhbnQgd2l0aCB0b21hdG8gc2F1Y2UsIG1venphcmVsbGEsIGJhc2lsLCBhbmQgUGFybWVzYW4gY2hlZXNlLlwiLFwiL1VzZXJzL2FsYW4ub2Nvbm5vci9yZXBvcy9yZXN0YXJhdW50LXBhZ2UtcHJvamVjdC9zcmMvYXNzZXRzL3JlY2lwZS1pbWFnZXMvTWVsYW56YW5lIGFsbGEgUGFybWlnaWFuYS5qcGVnXCJdLFtcIkNvbnRvcmluaVwiLFwiUGF0YXRlIGFsIFJvc21hcmlub1wiLFwiUm9hc3RlZCByb3NlbWFyeSBwb3RhdG9lcyB3aXRoIGdhcmxpYyBhbmQgc2VhIHNhbHQuXCIsXCIvVXNlcnMvYWxhbi5vY29ubm9yL3JlcG9zL3Jlc3RhcmF1bnQtcGFnZS1wcm9qZWN0L3NyYy9hc3NldHMvcmVjaXBlLWltYWdlcy9QYXRhdGUgYWwgUm9zbWFyaW5vLmpwZWdcIl0sW1wiQ29udG9yaW5pXCIsXCJWZXJkdXJlIGRpIFN0YWdpb25lXCIsXCJTZWFzb25hbCBncmlsbGVkIHZlZ2V0YWJsZXMgZHJpenpsZWQgd2l0aCBiYWxzYW1pYyByZWR1Y3Rpb24uXCIsXCIvVXNlcnMvYWxhbi5vY29ubm9yL3JlcG9zL3Jlc3RhcmF1bnQtcGFnZS1wcm9qZWN0L3NyYy9hc3NldHMvcmVjaXBlLWltYWdlcy9WZXJkdXJlIGRpIFN0YWdpb25lLmpwZWdcIl0sW1wiQ29udG9yaW5pXCIsXCJJbnNhbGF0YSBNaXN0YSBcIixcIk1peGVkIGdyZWVucyB3aXRoIGNoZXJyeSB0b21hdG9lcywgY3VjdW1iZXJzLCByZWQgb25pb25zLCBhbmQgYSBiYWxzYW1pYyB2aW5haWdyZXR0ZS5cIixcIi9Vc2Vycy9hbGFuLm9jb25ub3IvcmVwb3MvcmVzdGFyYXVudC1wYWdlLXByb2plY3Qvc3JjL2Fzc2V0cy9yZWNpcGUtaW1hZ2VzL0luc2FsYXRhIE1pc3RhLmpwZWdcIl0sW1wiRG9sY2VcIixcIlRpcmFtaXN1XCIsXCJDbGFzc2ljIGVzcHJlc3NvLXNvYWtlZCBsYWR5ZmluZ2VycyBsYXllcmVkIHdpdGggbWFzY2FycG9uZSBjcmVhbSBhbmQgZHVzdGVkIHdpdGggY29jb2EgcG93ZGVyLlwiLFwiL1VzZXJzL2FsYW4ub2Nvbm5vci9yZXBvcy9yZXN0YXJhdW50LXBhZ2UtcHJvamVjdC9zcmMvYXNzZXRzL3JlY2lwZS1pbWFnZXMvVGlyYW1pc3UuanBlZ1wiXSxbXCJEb2xjZVwiLFwiR2VsYXRvIEFydGlnaWFuYWxlXCIsXCJIb21lbWFkZSBnZWxhdG8sIGFzayB5b3VyIHNlcnZlciBmb3IgdG9kYXnigJlzIGZsYXZvciBzZWxlY3Rpb25zLlwiLFwiL1VzZXJzL2FsYW4ub2Nvbm5vci9yZXBvcy9yZXN0YXJhdW50LXBhZ2UtcHJvamVjdC9zcmMvYXNzZXRzL3JlY2lwZS1pbWFnZXMvR2VsYXRvIEFydGlnaWFuYWxlLmpwZWdcIl0sW1wiRG9sY2VcIixcIlBhbm5hIENvdHRhXCIsXCJTaWxreSBzbW9vdGggY29va2VkIGNyZWFtIHdpdGggdmFuaWxsYSBiZWFuIGFuZCBtaXhlZCBiZXJyeSBjb3VsaXMuXCIsXCIvVXNlcnMvYWxhbi5vY29ubm9yL3JlcG9zL3Jlc3RhcmF1bnQtcGFnZS1wcm9qZWN0L3NyYy9hc3NldHMvcmVjaXBlLWltYWdlcy9QYW5uYSBDb3R0YS5qcGVnXCJdLFtcIkJldmFuZGVcIixcIlNlZSBEcmlua3MgTWVudVwiLFwiQSBzZWxlY3Rpb24gb2YgSXRhbGlhbiB3aW5lcywgYmVlcnMsIHNvZnQgZHJpbmtzLCBhbmQgYXJ0aXNhbmFsIGNvZmZlZS5cIixcIi9Vc2Vycy9hbGFuLm9jb25ub3IvcmVwb3MvcmVzdGFyYXVudC1wYWdlLXByb2plY3Qvc3JjL2Fzc2V0cy9yZWNpcGUtaW1hZ2VzL0NhcHB1Y2Npbm8uanBlZ1wiXV0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBtYXAgPSB7XG5cdFwiLi9CcnVjaGV0dGEgYWwgUG9tb2Rvcm8uanBlZ1wiOiA3MTQsXG5cdFwiLi9DYWxhbWFyaSBGcml0dGkuanBlZ1wiOiA0NTgsXG5cdFwiLi9DYXBwdWNjaW5vLmpwZWdcIjogMzI1LFxuXHRcIi4vQ2FycGFjY2lvIGRpIE1hbnpvLmpwZWdcIjogNTc5LFxuXHRcIi4vR2VsYXRvIEFydGlnaWFuYWxlLmpwZWdcIjogOTA5LFxuXHRcIi4vSW5zYWxhdGEgTWlzdGEuanBlZ1wiOiA1MjgsXG5cdFwiLi9MYXNhZ25hIGFsbGEgQm9sb2duZXNlLmpwZWdcIjogNjIwLFxuXHRcIi4vTWVsYW56YW5lIGFsbGEgUGFybWlnaWFuYS5qcGVnXCI6IDY2OCxcblx0XCIuL1Bhbm5hIENvdHRhLmpwZWdcIjogODY2LFxuXHRcIi4vUGF0YXRlIGFsIFJvc21hcmluby5qcGVnXCI6IDc4MSxcblx0XCIuL1Blc2NlIGRlbCBHaW9ybm8uanBlZ1wiOiA4NjksXG5cdFwiLi9SaXNvdHRvIGFpIEZ1bmdoaSBQb3JjaW5pLmpwZWdcIjogMzMwLFxuXHRcIi4vU2FsdGltYm9jY2EgYWxsYSBSb21hbmEuanBlZ1wiOiAxOTgsXG5cdFwiLi9TcGFnaGV0dGkgQ2FyYm9uYXJhLmpwZWdcIjogMjcwLFxuXHRcIi4vVGlyYW1pc3UuanBlZ1wiOiA2NzMsXG5cdFwiLi9WZXJkdXJlIGRpIFN0YWdpb25lLmpwZWdcIjogMTg2XG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gODU2OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXYuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXYuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRlbnQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb250ZW50LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCAnLi4vc3R5bGVzL2NvbnRlbnQuY3NzJztcblxuY29uc3QgYWJvdXRNb2R1bGUgPSAoKCkgPT4ge1xuICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICAgIGNvbnN0IG91clJlYXNvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG91clJlYXNvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0ZXh0LWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IG91clJlYXNvbkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG91clJlYXNvbkhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnYWJvdXQtaGVhZGluZycpO1xuICAgIGNvbnN0IG91clJlYXNvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgb3VyUmVhc29uVGV4dC5jbGFzc0xpc3QuYWRkKCdhYm91dC10ZXh0Jyk7XG5cbiAgICBjb25zdCBvdXJQaGlsb3NvcGh5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3VyUGhpbG9zb3BoeUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0ZXh0LWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IG91clBoaWxvc29waHlIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBvdXJQaGlsb3NvcGh5SGVhZGluZy5jbGFzc0xpc3QuYWRkKCdhYm91dC1oZWFkaW5nJyk7XG4gICAgY29uc3Qgb3VyUGhpbG9zb3BoeVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgb3VyUGhpbG9zb3BoeVRleHQuY2xhc3NMaXN0LmFkZCgnYWJvdXQtdGV4dCcpO1xuXG4gICAgY29uc3Qgb3VyRGlmZmVyZW5jZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG91ckRpZmZlcmVuY2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGV4dC1jb250YWluZXInKTtcbiAgICBjb25zdCBvdXJEaWZmZXJlbmNlSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgb3VyRGlmZmVyZW5jZUhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnYWJvdXQtaGVhZGluZycpO1xuICAgIGNvbnN0IG91ckRpZmZlcmVuY2VUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG91ckRpZmZlcmVuY2VUZXh0LmNsYXNzTGlzdC5hZGQoJ2Fib3V0LXRleHQnKTtcblxuICAgIGNvbnN0IG91ckZvb2RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvdXJGb29kQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RleHQtY29udGFpbmVyJyk7XG4gICAgY29uc3Qgb3VyRm9vZEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG91ckZvb2RIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LWhlYWRpbmcnKTtcbiAgICBjb25zdCBvdXJGb29kVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBvdXJGb29kVGV4dC5jbGFzc0xpc3QuYWRkKCdhYm91dC10ZXh0Jyk7XG5cbiAgICBjb25zdCBvdXJJbnZpdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvdXJJbnZpdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGV4dC1jb250YWluZXInKTtcbiAgICBjb25zdCBvdXJJbnZpdGVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBvdXJJbnZpdGVIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LWhlYWRpbmcnKTtcbiAgICBjb25zdCBvdXJJbnZpdGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG91ckludml0ZVRleHQuY2xhc3NMaXN0LmFkZCgnYWJvdXQtdGV4dCcpO1xuXG4gICAgb3VyUmVhc29uSGVhZGluZy50ZXh0Q29udGVudCA9IFwiT3VyIFJlYXNvblwiO1xuICAgIG91clJlYXNvblRleHQudGV4dENvbnRlbnQgPSAnSW4gdGhlIHZpYnJhbnQgY2l0eSBvZiBEdWJsaW4sIFRyYXR0b3JpYSBCZWxsYVZpc3RhIGlzIGEgc2xpY2Ugb2YgSXRhbHkgb2ZmZXJpbmcgYSBoYXZlbiBvZiBnb3VybWV0IHRyYW5xdWlsaXR5LiBUaGlzIGNoZXJpc2hlZCBlc3RhYmxpc2htZW50IGlzIHRoZSB2aXNpb24gb2YgYSBmYW1pbHkgZGV2b3RlZCB0byB0aGUgYXJ0IG9mIEl0YWxpYW4gY3Vpc2luZSwgYnJpbmdpbmcgdGltZS1ob25vcmVkIHJlY2lwZXMgdGhhdCBoYXZlIHRyYXZlbGVkIHRocm91Z2ggZmFtaWx5IGxpbmVzIHRvIG91ciBsb2NhbCBjb21tdW5pdHkuJ1xuXG4gICAgb3VyUGhpbG9zb3BoeUhlYWRpbmcudGV4dENvbnRlbnQgPSBcIk91ciBQaGlsb3NvcGh5XCI7XG4gICAgb3VyUGhpbG9zb3BoeVRleHQudGV4dENvbnRlbnQgPSAnQXQgVHJhdHRvcmlhIEJlbGxhVmlzdGEsIG91ciBwaGlsb3NvcGh5IGlzIHNpbXBsZTogZXZlcnkgbWVhbCBpcyBhIHNtYWxsIGZlc3RpdmFsLCBhbiBvY2Nhc2lvbiB0byBzaGFyZSBhbmQgZW5qb3kuIFdlIHNvdXJjZSB0aGUgZmluZXN0IGxvY2FsIHByb2R1Y2UsIGNvbWJpbmluZyBpdCB3aXRoIHRyYWRpdGlvbmFsIEl0YWxpYW4gY29va2luZyB0ZWNobmlxdWVzIHRvIGNyZWF0ZSBkaXNoZXMgdGhhdCBhcmUgYm90aCBpbm5vdmF0aXZlIGFuZCBjb21mb3J0aW5nLiBPdXIgbWVudSBpcyBhIGxvdmluZyB0cmlidXRlIHRvIHRoZSBkaXZlcnNlIHJlZ2lvbnMgb2YgSXRhbHksIGZyb20gdGhlIHJvbGxpbmcgbGFuZHNjYXBlcyBvZiBUdXNjYW55IHRvIHRoZSBjcnlzdGFsLWNsZWFyIHdhdGVycyBvZiB0aGUgQW1hbGZpIENvYXN0Lic7XG5cbiAgICBvdXJEaWZmZXJlbmNlSGVhZGluZy50ZXh0Q29udGVudCA9IFwiT3VyIERpZmZlcmVuY2VcIjtcbiAgICBvdXJEaWZmZXJlbmNlVGV4dC50ZXh0Q29udGVudCA9IFwiVGhlIGFtYmlhbmNlIG9mIFRyYXR0b3JpYSBCZWxsYVZpc3RhIG1hcnJpZXMgcnVzdGljIGF1dGhlbnRpY2l0eSB3aXRoIGNvbnRlbXBvcmFyeSBlYXNlLCBlbnN1cmluZyBhIHdhcm0gYW5kIGludml0aW5nIGRpbmluZyBleHBlcmllbmNlLiBXaGV0aGVyIHlvdSdyZSBoZXJlIGZvciBhIGxpZ2h0LWhlYXJ0ZWQgbHVuY2gsIGEgcm9tYW50aWMgZGlubmVyLCBvciBhIGNlbGVicmF0aW9uLCB3ZSBhcmUgY29tbWl0dGVkIHRvIHByb3ZpZGluZyBhbiB1bmZvcmdldHRhYmxlIGRpbmluZyBleHBlcmllbmNlLlwiXG5cbiAgICBvdXJGb29kSGVhZGluZy50ZXh0Q29udGVudCA9IFwiT3VyIEZvb2RcIlxuICAgIG91ckZvb2RUZXh0LnRleHRDb250ZW50ID0gXCJJbmR1bGdlIGluIG91ciBoYW5kY3JhZnRlZCBwYXN0YXMsIHN1Y2N1bGVudCB3b29kLWZpcmVkIHBpenphcywgYW5kIGx1c2Npb3VzIGRlc3NlcnRzLCBlYWNoIGEgaG9tYWdlIHRvIHRoZSBzcGlyaXRlZCBmbGF2b3JzIG9mIEl0YWx5IGFuZCBhbiBpbnNpZ2h0IGludG8gb3VyIGN1bGluYXJ5IHBhc3Npb24uIEF0IFRyYXR0b3JpYSBCZWxsYVZpc3RhLCBvdXIgZGlzaGVzIGFyZSBub3QganVzdCBmb29kOyB0aGV5IGFyZSBuYXJyYXRpdmVzIG9mIEl0YWxpYW4gaGVyaXRhZ2UgYW5kIGEgcHJvbWlzZSBvZiBjb21mb3J0IHRoYXQgc3RheXMgd2l0aCB5b3UgbG9uZyBhZnRlciB5b3VyIHZpc2l0LlwiXG5cbiAgICBvdXJJbnZpdGVIZWFkaW5nLnRleHRDb250ZW50ID0gXCJTbyBDb21lIEFsb25nXCI7XG4gICAgb3VySW52aXRlVGV4dC50ZXh0Q29udGVudCA9IFwiV2UgaW52aXRlIHlvdSB0byBUcmF0dG9yaWEgQmVsbGFWaXN0YSBpbiB0aGUgaGVhcnQgb2YgRHVibGluLCB3aGVyZSBldmVyeSBiaXRlIGlzIGEgc3RvcnksIGFuZCBldmVyeSBndWVzdCBpcyBmYW1pbHkuXCI7XG5cbiAgICBvdXJSZWFzb25Db250YWluZXIuYXBwZW5kKC4uLltvdXJSZWFzb25IZWFkaW5nLCBvdXJSZWFzb25UZXh0XSk7XG4gICAgb3VyUGhpbG9zb3BoeUNvbnRhaW5lci5hcHBlbmQoLi4uW291clBoaWxvc29waHlIZWFkaW5nLCBvdXJQaGlsb3NvcGh5VGV4dF0pO1xuICAgIG91ckRpZmZlcmVuY2VDb250YWluZXIuYXBwZW5kKC4uLltvdXJEaWZmZXJlbmNlSGVhZGluZywgb3VyRGlmZmVyZW5jZVRleHRdKTtcbiAgICBvdXJGb29kQ29udGFpbmVyLmFwcGVuZCguLi5bb3VyRm9vZEhlYWRpbmcsIG91ckZvb2RUZXh0XSk7XG4gICAgb3VySW52aXRlQ29udGFpbmVyLmFwcGVuZCguLi5bb3VySW52aXRlSGVhZGluZywgb3VySW52aXRlVGV4dF0pO1xuXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmQoLi4uW1xuICAgICAgb3VyUmVhc29uQ29udGFpbmVyLCBcbiAgICAgIG91clBoaWxvc29waHlDb250YWluZXIsIFxuICAgICAgb3VyRGlmZmVyZW5jZUNvbnRhaW5lciwgXG4gICAgICBvdXJGb29kQ29udGFpbmVyLCBcbiAgICAgIG91ckludml0ZUNvbnRhaW5lclxuICAgIF0pXG5cbiAgICByZXR1cm4gY29udGVudENvbnRhaW5lcjtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVuZGVyXG4gIH1cbn0pKCkgIFxuXG5leHBvcnQgeyBhYm91dE1vZHVsZSB9IiwiaW1wb3J0ICcuLi9zdHlsZXMvY29udGVudC5jc3MnO1xuXG5jb25zdCBjb250ZW50TW9kdWxlID0gKCgpID0+IHtcbiAgY29uc3QgaW5pdGlhbFJlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKTtcbiAgXG4gICAgcmV0dXJuIGNvbnRlbnREaXZcbiAgfVxuXG4gIGNvbnN0IGRlbGV0ZUNvbnRlbnQgPSBkaXYgPT4ge1xuICAgIHdoaWxlIChkaXYuZmlyc3RDaGlsZCkge1xuICAgICAgZGl2LnJlbW92ZUNoaWxkKGRpdi5maXJzdENoaWxkKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCByZW5kZXJDb250ZW50ID0gKG1vZHVsZSA9PiB7XG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgZGVsZXRlQ29udGVudChtYWluRGl2KTtcbiAgXG4gICAgbWFpbkRpdi5hcHBlbmQobW9kdWxlKTtcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIGluaXRpYWxSZW5kZXIsXG4gICAgZGVsZXRlQ29udGVudCxcbiAgICByZW5kZXJDb250ZW50XG4gIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgY29udGVudE1vZHVsZTsiLCJpbXBvcnQgZGF0YSBmcm9tICcuLi9hc3NldHMvbWVudS1pdGVtcy5jc3YnO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUuY29udGV4dCgnLi4vYXNzZXRzL3JlY2lwZS1pbWFnZXMnKTtcblxuY29uc3QgZGF0YUNsZWFuID0gKCgpID0+IHtcbiAgY29uc3QgYXJyYXkgPSBBcnJheS5mcm9tKGRhdGEpO1xuICBjb25zdCBtZW51SXRlbXMgPSB7fTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSBhcnJheVtpXVswXTtcbiAgICBjb25zdCBuYW1lID0gYXJyYXlbaV1bMV07XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBhcnJheVtpXVsyXTtcbiAgICBjb25zdCBpbWFnZSA9IHBhdGgua2V5cygpLm1hcChwYXRoKVtpXTtcblxuICAgIGlmICghbWVudUl0ZW1zW2NhdGVnb3J5XSkge1xuICAgICAgbWVudUl0ZW1zW2NhdGVnb3J5XSA9IFtdO1xuICAgIH1cblxuICAgIGNvbnN0IG1lbnVJdGVtID0ge1xuICAgICAgaXRlbU5hbWU6IG5hbWUsXG4gICAgICBpdGVtRGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgaXRlbUltYWdlOiBpbWFnZVxuICAgIH1cblxuICAgIG1lbnVJdGVtc1tjYXRlZ29yeV0ucHVzaChtZW51SXRlbSk7XG4gIH1cblxuICByZXR1cm4gbWVudUl0ZW1zXG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGRhdGFDbGVhbjsiLCJpbXBvcnQgJy4uL3N0eWxlcy9jb250ZW50LmNzcyc7XG5cbmZ1bmN0aW9uIG1lbnVTZWN0aW9uKHNlY3Rpb24pIHtcbiAgY29uc3Qgc2VjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWhlYWRpbmcnKTtcblxuICBoZWFkaW5nLnRleHRDb250ZW50ID0gc2VjdGlvbjtcblxuICBzZWN0aW9uQ29udGFpbmVyLmFwcGVuZChoZWFkaW5nKTtcblxuICByZXR1cm4gc2VjdGlvbkNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVudVNlY3Rpb247IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhcmQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXJkLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCAnLi4vc3R5bGVzL2NhcmQuY3NzJztcblxuY29uc3QgY2FyZCA9IGl0ZW0gPT4ge1xuICBjb25zdCBuYW1lID0gaXRlbS5pdGVtTmFtZTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBpdGVtLml0ZW1EZXNjcmlwdGlvbjtcbiAgY29uc3QgaW1hZ2UgPSBpdGVtLml0ZW1JbWFnZTtcbiAgXG4gIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBjb25zdCBpbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgY29uc3QgaXRlbUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvbnN0IGl0ZW1IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIGNhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuXG4gIGltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaW1hZ2UtY29udGFpbmVyJyk7XG4gIHRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC10ZXh0LWNvbnRhaW5lcicpO1xuXG4gIGl0ZW1JbWFnZS5zcmMgPSBpbWFnZTtcbiAgaXRlbUhlYWRpbmcudGV4dENvbnRlbnQgPSBuYW1lO1xuICBpdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcblxuICBpbWFnZUNvbnRhaW5lci5hcHBlbmQoaXRlbUltYWdlKTtcbiAgdGV4dENvbnRhaW5lci5hcHBlbmQoLi4uW2l0ZW1IZWFkaW5nLCBpdGVtRGVzY3JpcHRpb25dKTtcblxuICBjYXJkQ29udGFpbmVyLmFwcGVuZCguLi5baW1hZ2VDb250YWluZXIsIHRleHRDb250YWluZXJdKTtcblxuICByZXR1cm4gY2FyZENvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FyZDsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2hvd2Nhc2UuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaG93Y2FzZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgJy4uL3N0eWxlcy9zaG93Y2FzZS5jc3MnO1xuaW1wb3J0IGltYWdlIGZyb20gJy4uL2Fzc2V0cy9pbmRleC1zaG93Y2FzZS5qcGcnXG5cbmNvbnN0IHNob3djYXNlID0gKCgpID0+IHtcbiAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHNob3djYXNlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hvd2Nhc2VDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ltYWdlfSlgO1xuICAgIHNob3djYXNlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Nob3djYXNlJyk7XG4gICAgcmV0dXJuIHNob3djYXNlQ29udGFpbmVyO1xuICB9XG5cbiAgY29uc3QgY2hhbmdlSW1hZ2UgPSBpbWFnZVNvdXJjZSA9PiB7XG4gICAgY29uc29sZS5sb2coaW1hZ2VTb3VyY2UpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG93Y2FzZScpO1xuICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aW1hZ2VTb3VyY2V9KWA7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlbmRlcixcbiAgICBjaGFuZ2VJbWFnZVxuICB9XG5cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgc2hvd2Nhc2U7IiwiaW1wb3J0IGRhdGFDbGVhbiBmcm9tIFwiLi4vdXRpbHMvZGF0YUNsZWFuXCI7XG5pbXBvcnQgbWVudVNlY3Rpb24gZnJvbSAnLi4vdXRpbHMvbWVudVNlY3Rpb24nO1xuaW1wb3J0IGNhcmQgZnJvbSAnLi4vdXRpbHMvY2FyZC5qcyc7XG5pbXBvcnQgc2hvd2Nhc2VNb2R1bGUgZnJvbSBcIi4vc2hvd2Nhc2VNb2R1bGUuanNcIjtcbmltcG9ydCAnLi4vc3R5bGVzL2NvbnRlbnQuY3NzJztcblxuY29uc3QgbWVudU1vZHVsZSA9ICgoKSA9PiB7XG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICAgIGNvbnN0IGNhdGVnb3J5ID0gT2JqZWN0LmtleXMoZGF0YUNsZWFuKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhdGVnb3J5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzZWN0aW9uID0gbWVudVNlY3Rpb24oY2F0ZWdvcnlbaV0pO1xuICAgICAgY29uc3QgaXRlbXMgPSBkYXRhQ2xlYW5bY2F0ZWdvcnlbaV1dO1xuICAgICAgXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGl0ZW1zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IG1lbnVDYXJkID0gY2FyZChpdGVtc1tqXSk7XG4gICAgICAgIHNlY3Rpb24uYXBwZW5kKG1lbnVDYXJkKTtcblxuICAgICAgICBtZW51Q2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBjb25zdCBpbWFnZVNyYyA9IG1lbnVDYXJkLmNoaWxkTm9kZXNbMF0uZmlyc3RDaGlsZC5zcmM7XG4gICAgICAgICAgc2hvd2Nhc2VNb2R1bGUuY2hhbmdlSW1hZ2UoaW1hZ2VTcmMpO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgbWVudUNvbnRhaW5lci5hcHBlbmQoc2VjdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbnVDb250YWluZXI7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlbmRlclxuICB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IG1lbnVNb2R1bGU7IiwiaW1wb3J0ICcuLi9zdHlsZXMvY29udGVudC5jc3MnO1xuXG5jb25zdCBjb250YWN0TW9kdWxlID0gKCgpID0+IHtcblxuICBjb25zdCBob3VycyA9IHtcbiAgICAnTW9uZGF5JzogJzA4OjAwIC0gMjI6MDAnLFxuICAgICdUdWVzZGF5JzogJzA4OjAwIC0gMjI6MDAnLFxuICAgICdXZWRuZXNkYXknOiAnMDg6MDAgLSAyMjowMCcsXG4gICAgJ1RodXJzZGF5JzogJzA4OjAwIC0gMjI6MDAnLFxuICAgICdGcmlkYXknOiAnMDg6MDAgLSAyMjowMCcsXG4gICAgJ1NhdHVyZGF5JzogJzA5OjAwIC0gMjE6MDAnLFxuICAgICdTdW5kYXknOiAnMDk6MDAgLSAyMTowMCcsXG4gICAgJ0JhbmsgSG9sZGF5cyc6ICcwOTowMCAtIDIxOjAwJ1xuICB9XG5cbiAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBvcGVuaW5nSG91cnNDYXJkID0gb3BlbmluZ0hvdXJzKGhvdXJzKTtcbiAgICBjb25zdCBsb2NhdGlvbkNhcmQgPSBsb2NhdGlvbigpO1xuXG4gICAgY29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZCguLi5bb3BlbmluZ0hvdXJzQ2FyZCwgbG9jYXRpb25DYXJkXSk7XG5cbiAgICByZXR1cm4gY29udGFjdENvbnRhaW5lcjtcbiAgfVxuXG4gIGNvbnN0IG9wZW5pbmdIb3VycyA9IGhvdXJzID0+IHtcbiAgICBjb25zdCBkYXlzID0gT2JqZWN0LmtleXMoaG91cnMpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IGlzT3Blbm9yQ2xvc2VkID0gaXNPcGVuKCk7XG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1jYXJkJyk7XG4gICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWhlYWRpbmcnKTtcbiAgICBpc09wZW5vckNsb3NlZC5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWhlYWRpbmcnKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ09wZW5pbmcgSG91cnMnO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoaGVhZGluZyk7XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCBkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3Qtc2VjdGlvbicpO1xuICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtaGVhZGluZycpO1xuICAgICAgdGltZS5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXRleHQnKTtcblxuICAgICAgZGF5LnRleHRDb250ZW50ID0gZGF5c1tpXTtcbiAgICAgIHRpbWUudGV4dENvbnRlbnQgPSBob3Vyc1tkYXlzW2ldXTtcblxuICAgICAgY2FyZC5hcHBlbmQoLi4uW2RheSwgdGltZV0pO1xuICAgICAgY29udGFpbmVyLmFwcGVuZChjYXJkKTtcbiAgICB9XG5cbiAgICBjb250YWluZXIuYXBwZW5kKGlzT3Blbm9yQ2xvc2VkKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cblxuICBjb25zdCBsb2NhdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBsb2NhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IGFkZHJlc3MxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGFkZHJlc3MyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGFkZHJlc3MzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGVpcmNvZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBsb2NhdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWNhcmQnKTtcbiAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24taGVhZGluZycpO1xuICAgIGFkZHJlc3MxLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtdGV4dCcpO1xuICAgIGFkZHJlc3MyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtdGV4dCcpO1xuICAgIGFkZHJlc3MzLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtdGV4dCcpO1xuICAgIGVpcmNvZGUuY2xhc3NMaXN0LmFkZCgnY29udGFjdC10ZXh0Jyk7XG5cbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ0xvY2F0aW9uJztcbiAgICBhZGRyZXNzMS50ZXh0Q29udGVudCA9ICdEdWJsaW4gRG9ja2xhbmRzJztcbiAgICBhZGRyZXNzMi50ZXh0Q29udGVudCA9ICdEdWJsaW4gMic7XG4gICAgYWRkcmVzczMudGV4dENvbnRlbnQgPSAnQ291bnR5IER1Ymxpbic7XG4gICAgZWlyY29kZS50ZXh0Q29udGVudCA9ICdEMDIgQTQzMyc7XG5cbiAgICBsb2NhdGlvbkNvbnRhaW5lci5hcHBlbmQoLi4uW2hlYWRpbmcsIGFkZHJlc3MxLCBhZGRyZXNzMiwgYWRkcmVzczMsIGVpcmNvZGVdKTtcblxuICAgIHJldHVybiBsb2NhdGlvbkNvbnRhaW5lcjtcbiAgfVxuXG4gIGNvbnN0IGlzT3BlbiA9ICgpID0+IHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBob3VyID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF5KCk7XG5cbiAgICBjb25zdCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBpZiAoKGhvdXIgPT09IDkgJiYgZGF5IDw9IDQpIHx8IChob3VyID09PSA3ICYmIGRheSA+IDQpKSB7XG4gICAgICBub3RpZmljYXRpb24udGV4dENvbnRlbnQgPSAnQ2xvc2luZyBTb29uIChTY3JvbGwgRG93biBmb3IgTG9jYXRpb24pJztcbiAgICB9IGVsc2UgaWYgKCgoaG91ciA+IDIyICYmIGhvdXIgPCA4KSAmJiBkYXkgPD0gNCkgfHwgKChob3VyID4gMjEgJiYgaG91ciA8IDkpICYmIGRheSA8PSA0KSkge1xuICAgICAgbm90aWZpY2F0aW9uLnRleHRDb250ZW50ID0gJ1dlXFwncmUgQ2xvc2VkIChTY3JvbGwgRG93biBmb3IgTG9jYXRpb24pJztcbiAgICB9IGVsc2Uge1xuICAgICAgbm90aWZpY2F0aW9uLnRleHRDb250ZW50ID0gJ1dlXFwncmUgT3BlbiAoU2Nyb2xsIERvd24gZm9yIExvY2F0aW9uKSc7XG4gICAgfVxuXG4gICAgbm90aWZpY2F0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnb3BlbmluZy1ub3RpZmljYXRpb24nKTtcblxuICAgIHJldHVybiBub3RpZmljYXRpb247XG4gIH1cblxuICByZXR1cm4geyByZW5kZXIgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0TW9kdWxlIiwiaW1wb3J0ICcuLi9zdHlsZXMvbmF2LmNzcydcbmltcG9ydCB7IGFib3V0TW9kdWxlIH0gZnJvbSAnLi9hYm91dE1vZHVsZS5qcyc7XG5pbXBvcnQgY29udGVudE1vZHVsZSBmcm9tICcuL2NvbnRlbnRNb2R1bGUuanMnO1xuaW1wb3J0IG1lbnVNb2R1bGUgZnJvbSAnLi9tZW51TW9kdWxlLmpzJztcbmltcG9ydCBjb250YWN0TW9kdWxlIGZyb20gJy4vY29udGFjdE1vZHVsZS5qcyc7XG5pbXBvcnQgaW1hZ2UgZnJvbSAnLi4vYXNzZXRzL2xvZ28ucG5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2aWdhdGlvbigpIHtcbiAgY29uc3QgbmF2aWdhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG5hdkl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGxvZ29JbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBsb2dvVGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBsb2dvSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgbG9nb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IGFib3V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICBuYXZpZ2F0aW9uLmNsYXNzTGlzdC5hZGQoJ25hdicpO1xuICBsb2dvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcbiAgbmF2SXRlbXMuY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW1zJyk7XG4gIGxvZ29JbWFnZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvZ28taW1hZ2UnKTtcbiAgbG9nb1RleHRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdsb2dvLXRleHQnKTtcblxuICBsb2dvSW1hZ2Uuc3JjID0gaW1hZ2U7XG4gIGxvZ29UZXh0LnRleHRDb250ZW50ID0gJ1RyYXR0b3JpYSBCZWxsYVZpc3RhJztcbiAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgYWJvdXRCdXR0b24udGV4dENvbnRlbnQgPSAnQWJvdXQnO1xuICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuXG4gIGFib3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnRlbnRNb2R1bGUucmVuZGVyQ29udGVudChhYm91dE1vZHVsZS5yZW5kZXIoKSk7XG4gIH0pO1xuXG4gIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29udGVudE1vZHVsZS5yZW5kZXJDb250ZW50KG1lbnVNb2R1bGUucmVuZGVyKCkpO1xuICB9KVxuXG4gIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29udGVudE1vZHVsZS5yZW5kZXJDb250ZW50KGNvbnRhY3RNb2R1bGUucmVuZGVyKCkpO1xuICB9KVxuXG5cbiAgbG9nb0NvbnRhaW5lci5hcHBlbmQoLi4uW2xvZ29JbWFnZUNvbnRhaW5lciwgbG9nb1RleHRDb250YWluZXJdKTtcbiAgbG9nb0ltYWdlQ29udGFpbmVyLmFwcGVuZChsb2dvSW1hZ2UpO1xuICBsb2dvVGV4dENvbnRhaW5lci5hcHBlbmQobG9nb1RleHQpO1xuICBuYXZJdGVtcy5hcHBlbmQoLi4uW21lbnVCdXR0b24sIGFib3V0QnV0dG9uLCBjb250YWN0QnV0dG9uXSk7XG4gIG5hdmlnYXRpb24uYXBwZW5kKC4uLltsb2dvQ29udGFpbmVyLCBuYXZJdGVtc10pO1xuXG4gIHJldHVybiBuYXZpZ2F0aW9uO1xufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCBuYXZpZ2F0aW9uTW9kdWxlIGZyb20gJy4vbmF2aWdhdGlvbk1vZHVsZS5qcyc7XG5pbXBvcnQgc2hvd2Nhc2VNb2R1bGUgZnJvbSAnLi9zaG93Y2FzZU1vZHVsZS5qcyc7XG5pbXBvcnQgY29udGVudE1vZHVsZSBmcm9tICcuL2NvbnRlbnRNb2R1bGUuanMnXG5pbXBvcnQgeyBhYm91dE1vZHVsZSB9IGZyb20gJy4vYWJvdXRNb2R1bGUuanMnO1xuaW1wb3J0ICcuLi9zdHlsZXMvaW5kZXguY3NzJztcblxuZG9jdW1lbnQuYm9keS5hcHBlbmQobmF2aWdhdGlvbk1vZHVsZSgpKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kKHNob3djYXNlTW9kdWxlLnJlbmRlcigpKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kKGNvbnRlbnRNb2R1bGUuaW5pdGlhbFJlbmRlcigpKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29udGVudE1vZHVsZS5yZW5kZXJDb250ZW50KGFib3V0TW9kdWxlLnJlbmRlcigpKTtcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9