(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "../node_modules/css-loader/index.js!../viewer-prototype/src/browser/style/output-components-style.css":
/*!****************************************************************************************************!*\
  !*** ../node_modules/css-loader!../viewer-prototype/src/browser/style/output-components-style.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Output component styling */\n/* Main container*/\n.output-container {\n    display: flex;\n    color: var(--theia-ui-font-color0)\n}\n\n.widget-handle {\n    background-color: var(--theia-layout-color4);\n    display: grid;\n    grid-template-rows: 25px 1fr;\n}\n.title-bar-label {\n    text-align: center;\n    writing-mode: vertical-rl;\n    height: 50%;\n    min-height: 150px;\n    transform: rotate(180deg);\n    user-select: none;\n    align-self: center;\n    justify-self: center;\n}\n.remove-component-button {\n    background: none;\n    border: none;\n    padding: 2px 8px;\n    align-self: center;\n    justify-self: center;\n    color: var(--theia-ui-font-color0)\n}\n\n.main-output-container {\n    display: flex;\n}\n\n.output-component-tree {\n    overflow-y: scroll;\n    white-space: pre-wrap;\n}\n\n.output-component-chart {\n    align-self: center;\n    text-align: center;\n}\n\n#timegraph-main {\n    width:100%; \n    overflow-y:scroll; \n    position:relative;\n    height: 300px;\n}\n\n#main {\n    border: 1px solid;\n    margin: 10px 0;\n    overflow: hidden;\n}\n\ncanvas {\n    display: block;\n}\n\n#main-timegraph-content {\n    height: 22940px;\n    display: inline-block;\n}\n\n.innerContainer {\n    width: 100%;\n}", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../viewer-prototype/src/browser/style/trace-context-style.css":
/*!************************************************************************************************!*\
  !*** ../node_modules/css-loader!../viewer-prototype/src/browser/style/trace-context-style.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".no-output-placeholder {\n    color: var(--theia-ui-font-color3);\n    font-size: 24px;\n    transform: translate(30%, 500%);\n}\n\n.react-grid-item.react-grid-placeholder {\n    background: var(--theia-accent-color3);\n}\n\n.trace-context-container {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n}\n\n.outputs-grid-layout {\n    flex-grow: 1;\n    overflow-y: scroll;\n    overflow-x: hidden;\n}", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../viewer-prototype/src/browser/style/trace-explorer.css":
/*!*******************************************************************************************!*\
  !*** ../node_modules/css-loader!../viewer-prototype/src/browser/style/trace-explorer.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/url/escape.js */ "../node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".trace-explorer-tab-icon {\n    -webkit-mask: url(" + escape(__webpack_require__(/*! ./chart-line-solid.svg */ "../viewer-prototype/src/browser/style/chart-line-solid.svg")) + ");\n    mask: url(" + escape(__webpack_require__(/*! ./chart-line-solid.svg */ "../viewer-prototype/src/browser/style/chart-line-solid.svg")) + ");\n}\n\n/* Main container */\n.trace-explorer-container {\n    display: grid;\n    grid-template-columns: 100%;\n    grid-template-rows: 1fr 1fr; /*1fr*/\n    grid-row-gap: 10px;\n    color: var(--theia-ui-font-color0);\n}\n\n.trace-explorer-opened {\n    grid-row-start: 1;\n    display: grid;\n    grid-template-columns: 100%;\n    grid-template-rows: 25px 1fr;\n}\n\n/* .trace-explorer-files {\n    grid-row-start: 2;\n    display: grid;\n    grid-template-columns: 100%;\n    grid-template-rows: 25px 1fr;\n} */\n\n.trace-explorer-analysis {\n    grid-row-start: 2;\n    display: grid;\n    grid-template-columns: 100%;\n    grid-template-rows: 25px 1fr;\n}\n\n.trace-explorer-panel-title {\n    grid-row-start: 1;\n    background-color: var(--theia-layout-color4);\n    /* background-color: rgba(97, 97, 97, 0.5); */\n    /* color: white; */\n    text-align: center;\n    line-height: 25px;\n}\n\n.trace-explorer-panel-content {\n    grid-row-start: 2;\n    border: 1px solid var(--theia-layout-color4);\n    /* color: white; */\n    padding-inline-start: 5px;\n    white-space: nowrap;\n}\n\n.trace-explorer-panel-content>ul {\n    list-style-type: none;\n    padding-inline-start: 0px;\n}\n\n.trace-list-container, .outputs-list-container {\n    /* color: white; */\n    overflow-x: hidden;\n    white-space: nowrap;\n}\n\n.trace-element-container {\n    display: grid;\n    grid-template-columns: minmax(0, 1fr) 50px;\n    grid-template-rows: auto;\n}\n\n.trace-element-info {\n    overflow-x: hidden;\n    grid-column-start: 1;\n}\n\n.trace-element-name, .outputs-element-name {\n    font-weight: bold;\n}\n\n.trace-element-path, .outputs-element-description {\n    color: var(--theia-ui-font-color2);\n    /* color: rgb(160, 160, 160); */\n}\n\n.trace-element-options {\n    grid-column-start: 2;\n    padding-left: 10px;\n}\n\n.share-context-button {\n    width: 100%;\n    height: 100%;\n    min-width: 10px;\n    margin-left: 0px;\n}\n\n.sharing-modal {\n    position: absolute;\n    top: 400px;\n    left: 600px;\n    right: 600px;\n    bottom: 550px; /*470px;*/\n    background-color: rgb(30, 30, 30);\n}\n\n.sharing-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, 0.6)\n}\n\n.sharing-container {\n    margin: 10px;\n}\n\n.sharing-description {\n    color: white;\n    padding-bottom: 15px;\n}\n\n.sharing-link-info {\n    display: grid;\n    grid-template-columns: minmax(0, 1fr) 50px;\n}\n\n.sharing-link {\n    grid-column-start: 1;\n}\n\n.sharing-link>textarea {\n    color: white;\n    background-color: rgb(50, 50, 50);\n    border-color: var(--theia-ui-button-color);\n    min-width: 100%;\n    min-height: 100%;\n    resize: none;\n    box-sizing: border-box;\n}\n\n.sharing-link-copy {\n    grid-column-start: 2;\n    padding-left: 10px;\n}\n\n.copy-link-button {\n    width: 100%;\n    height: 100%;\n    min-width: 10px;\n    margin-left: 0px;\n}\n\n.source-code-tooltip {\n    text-decoration: underline;\n}", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../viewer-prototype/src/browser/style/trace-viewer.css":
/*!*****************************************************************************************!*\
  !*** ../node_modules/css-loader!../viewer-prototype/src/browser/style/trace-viewer.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* textarea {\n    background-color: black;\n    color: var(--theia-ui-font-color0);\n    font-family: var(--theia-ui-font-family);\n}\n\ndiv {\n    color: var(--theia-ui-font-color0);\n    font-family: var(--theia-ui-font-family);\n} */\n\n/* Main container */\n.trace-viewer-container {\n    margin: 0px 5px 0px 5px;\n    height: 100%;\n}", ""]);

// exports


/***/ }),

/***/ "../node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ../node_modules/moment/locale sync ^\.\/.*$ ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../node_modules/moment/locale/af.js",
	"./af.js": "../node_modules/moment/locale/af.js",
	"./ar": "../node_modules/moment/locale/ar.js",
	"./ar-dz": "../node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "../node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "../node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "../node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "../node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "../node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "../node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "../node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "../node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "../node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "../node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "../node_modules/moment/locale/ar-tn.js",
	"./ar.js": "../node_modules/moment/locale/ar.js",
	"./az": "../node_modules/moment/locale/az.js",
	"./az.js": "../node_modules/moment/locale/az.js",
	"./be": "../node_modules/moment/locale/be.js",
	"./be.js": "../node_modules/moment/locale/be.js",
	"./bg": "../node_modules/moment/locale/bg.js",
	"./bg.js": "../node_modules/moment/locale/bg.js",
	"./bm": "../node_modules/moment/locale/bm.js",
	"./bm.js": "../node_modules/moment/locale/bm.js",
	"./bn": "../node_modules/moment/locale/bn.js",
	"./bn.js": "../node_modules/moment/locale/bn.js",
	"./bo": "../node_modules/moment/locale/bo.js",
	"./bo.js": "../node_modules/moment/locale/bo.js",
	"./br": "../node_modules/moment/locale/br.js",
	"./br.js": "../node_modules/moment/locale/br.js",
	"./bs": "../node_modules/moment/locale/bs.js",
	"./bs.js": "../node_modules/moment/locale/bs.js",
	"./ca": "../node_modules/moment/locale/ca.js",
	"./ca.js": "../node_modules/moment/locale/ca.js",
	"./cs": "../node_modules/moment/locale/cs.js",
	"./cs.js": "../node_modules/moment/locale/cs.js",
	"./cv": "../node_modules/moment/locale/cv.js",
	"./cv.js": "../node_modules/moment/locale/cv.js",
	"./cy": "../node_modules/moment/locale/cy.js",
	"./cy.js": "../node_modules/moment/locale/cy.js",
	"./da": "../node_modules/moment/locale/da.js",
	"./da.js": "../node_modules/moment/locale/da.js",
	"./de": "../node_modules/moment/locale/de.js",
	"./de-at": "../node_modules/moment/locale/de-at.js",
	"./de-at.js": "../node_modules/moment/locale/de-at.js",
	"./de-ch": "../node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "../node_modules/moment/locale/de-ch.js",
	"./de.js": "../node_modules/moment/locale/de.js",
	"./dv": "../node_modules/moment/locale/dv.js",
	"./dv.js": "../node_modules/moment/locale/dv.js",
	"./el": "../node_modules/moment/locale/el.js",
	"./el.js": "../node_modules/moment/locale/el.js",
	"./en-SG": "../node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "../node_modules/moment/locale/en-SG.js",
	"./en-au": "../node_modules/moment/locale/en-au.js",
	"./en-au.js": "../node_modules/moment/locale/en-au.js",
	"./en-ca": "../node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "../node_modules/moment/locale/en-ca.js",
	"./en-gb": "../node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "../node_modules/moment/locale/en-gb.js",
	"./en-ie": "../node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "../node_modules/moment/locale/en-ie.js",
	"./en-il": "../node_modules/moment/locale/en-il.js",
	"./en-il.js": "../node_modules/moment/locale/en-il.js",
	"./en-nz": "../node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "../node_modules/moment/locale/en-nz.js",
	"./eo": "../node_modules/moment/locale/eo.js",
	"./eo.js": "../node_modules/moment/locale/eo.js",
	"./es": "../node_modules/moment/locale/es.js",
	"./es-do": "../node_modules/moment/locale/es-do.js",
	"./es-do.js": "../node_modules/moment/locale/es-do.js",
	"./es-us": "../node_modules/moment/locale/es-us.js",
	"./es-us.js": "../node_modules/moment/locale/es-us.js",
	"./es.js": "../node_modules/moment/locale/es.js",
	"./et": "../node_modules/moment/locale/et.js",
	"./et.js": "../node_modules/moment/locale/et.js",
	"./eu": "../node_modules/moment/locale/eu.js",
	"./eu.js": "../node_modules/moment/locale/eu.js",
	"./fa": "../node_modules/moment/locale/fa.js",
	"./fa.js": "../node_modules/moment/locale/fa.js",
	"./fi": "../node_modules/moment/locale/fi.js",
	"./fi.js": "../node_modules/moment/locale/fi.js",
	"./fo": "../node_modules/moment/locale/fo.js",
	"./fo.js": "../node_modules/moment/locale/fo.js",
	"./fr": "../node_modules/moment/locale/fr.js",
	"./fr-ca": "../node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "../node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "../node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "../node_modules/moment/locale/fr-ch.js",
	"./fr.js": "../node_modules/moment/locale/fr.js",
	"./fy": "../node_modules/moment/locale/fy.js",
	"./fy.js": "../node_modules/moment/locale/fy.js",
	"./ga": "../node_modules/moment/locale/ga.js",
	"./ga.js": "../node_modules/moment/locale/ga.js",
	"./gd": "../node_modules/moment/locale/gd.js",
	"./gd.js": "../node_modules/moment/locale/gd.js",
	"./gl": "../node_modules/moment/locale/gl.js",
	"./gl.js": "../node_modules/moment/locale/gl.js",
	"./gom-latn": "../node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "../node_modules/moment/locale/gom-latn.js",
	"./gu": "../node_modules/moment/locale/gu.js",
	"./gu.js": "../node_modules/moment/locale/gu.js",
	"./he": "../node_modules/moment/locale/he.js",
	"./he.js": "../node_modules/moment/locale/he.js",
	"./hi": "../node_modules/moment/locale/hi.js",
	"./hi.js": "../node_modules/moment/locale/hi.js",
	"./hr": "../node_modules/moment/locale/hr.js",
	"./hr.js": "../node_modules/moment/locale/hr.js",
	"./hu": "../node_modules/moment/locale/hu.js",
	"./hu.js": "../node_modules/moment/locale/hu.js",
	"./hy-am": "../node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "../node_modules/moment/locale/hy-am.js",
	"./id": "../node_modules/moment/locale/id.js",
	"./id.js": "../node_modules/moment/locale/id.js",
	"./is": "../node_modules/moment/locale/is.js",
	"./is.js": "../node_modules/moment/locale/is.js",
	"./it": "../node_modules/moment/locale/it.js",
	"./it-ch": "../node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "../node_modules/moment/locale/it-ch.js",
	"./it.js": "../node_modules/moment/locale/it.js",
	"./ja": "../node_modules/moment/locale/ja.js",
	"./ja.js": "../node_modules/moment/locale/ja.js",
	"./jv": "../node_modules/moment/locale/jv.js",
	"./jv.js": "../node_modules/moment/locale/jv.js",
	"./ka": "../node_modules/moment/locale/ka.js",
	"./ka.js": "../node_modules/moment/locale/ka.js",
	"./kk": "../node_modules/moment/locale/kk.js",
	"./kk.js": "../node_modules/moment/locale/kk.js",
	"./km": "../node_modules/moment/locale/km.js",
	"./km.js": "../node_modules/moment/locale/km.js",
	"./kn": "../node_modules/moment/locale/kn.js",
	"./kn.js": "../node_modules/moment/locale/kn.js",
	"./ko": "../node_modules/moment/locale/ko.js",
	"./ko.js": "../node_modules/moment/locale/ko.js",
	"./ku": "../node_modules/moment/locale/ku.js",
	"./ku.js": "../node_modules/moment/locale/ku.js",
	"./ky": "../node_modules/moment/locale/ky.js",
	"./ky.js": "../node_modules/moment/locale/ky.js",
	"./lb": "../node_modules/moment/locale/lb.js",
	"./lb.js": "../node_modules/moment/locale/lb.js",
	"./lo": "../node_modules/moment/locale/lo.js",
	"./lo.js": "../node_modules/moment/locale/lo.js",
	"./lt": "../node_modules/moment/locale/lt.js",
	"./lt.js": "../node_modules/moment/locale/lt.js",
	"./lv": "../node_modules/moment/locale/lv.js",
	"./lv.js": "../node_modules/moment/locale/lv.js",
	"./me": "../node_modules/moment/locale/me.js",
	"./me.js": "../node_modules/moment/locale/me.js",
	"./mi": "../node_modules/moment/locale/mi.js",
	"./mi.js": "../node_modules/moment/locale/mi.js",
	"./mk": "../node_modules/moment/locale/mk.js",
	"./mk.js": "../node_modules/moment/locale/mk.js",
	"./ml": "../node_modules/moment/locale/ml.js",
	"./ml.js": "../node_modules/moment/locale/ml.js",
	"./mn": "../node_modules/moment/locale/mn.js",
	"./mn.js": "../node_modules/moment/locale/mn.js",
	"./mr": "../node_modules/moment/locale/mr.js",
	"./mr.js": "../node_modules/moment/locale/mr.js",
	"./ms": "../node_modules/moment/locale/ms.js",
	"./ms-my": "../node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "../node_modules/moment/locale/ms-my.js",
	"./ms.js": "../node_modules/moment/locale/ms.js",
	"./mt": "../node_modules/moment/locale/mt.js",
	"./mt.js": "../node_modules/moment/locale/mt.js",
	"./my": "../node_modules/moment/locale/my.js",
	"./my.js": "../node_modules/moment/locale/my.js",
	"./nb": "../node_modules/moment/locale/nb.js",
	"./nb.js": "../node_modules/moment/locale/nb.js",
	"./ne": "../node_modules/moment/locale/ne.js",
	"./ne.js": "../node_modules/moment/locale/ne.js",
	"./nl": "../node_modules/moment/locale/nl.js",
	"./nl-be": "../node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "../node_modules/moment/locale/nl-be.js",
	"./nl.js": "../node_modules/moment/locale/nl.js",
	"./nn": "../node_modules/moment/locale/nn.js",
	"./nn.js": "../node_modules/moment/locale/nn.js",
	"./pa-in": "../node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "../node_modules/moment/locale/pa-in.js",
	"./pl": "../node_modules/moment/locale/pl.js",
	"./pl.js": "../node_modules/moment/locale/pl.js",
	"./pt": "../node_modules/moment/locale/pt.js",
	"./pt-br": "../node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "../node_modules/moment/locale/pt-br.js",
	"./pt.js": "../node_modules/moment/locale/pt.js",
	"./ro": "../node_modules/moment/locale/ro.js",
	"./ro.js": "../node_modules/moment/locale/ro.js",
	"./ru": "../node_modules/moment/locale/ru.js",
	"./ru.js": "../node_modules/moment/locale/ru.js",
	"./sd": "../node_modules/moment/locale/sd.js",
	"./sd.js": "../node_modules/moment/locale/sd.js",
	"./se": "../node_modules/moment/locale/se.js",
	"./se.js": "../node_modules/moment/locale/se.js",
	"./si": "../node_modules/moment/locale/si.js",
	"./si.js": "../node_modules/moment/locale/si.js",
	"./sk": "../node_modules/moment/locale/sk.js",
	"./sk.js": "../node_modules/moment/locale/sk.js",
	"./sl": "../node_modules/moment/locale/sl.js",
	"./sl.js": "../node_modules/moment/locale/sl.js",
	"./sq": "../node_modules/moment/locale/sq.js",
	"./sq.js": "../node_modules/moment/locale/sq.js",
	"./sr": "../node_modules/moment/locale/sr.js",
	"./sr-cyrl": "../node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "../node_modules/moment/locale/sr.js",
	"./ss": "../node_modules/moment/locale/ss.js",
	"./ss.js": "../node_modules/moment/locale/ss.js",
	"./sv": "../node_modules/moment/locale/sv.js",
	"./sv.js": "../node_modules/moment/locale/sv.js",
	"./sw": "../node_modules/moment/locale/sw.js",
	"./sw.js": "../node_modules/moment/locale/sw.js",
	"./ta": "../node_modules/moment/locale/ta.js",
	"./ta.js": "../node_modules/moment/locale/ta.js",
	"./te": "../node_modules/moment/locale/te.js",
	"./te.js": "../node_modules/moment/locale/te.js",
	"./tet": "../node_modules/moment/locale/tet.js",
	"./tet.js": "../node_modules/moment/locale/tet.js",
	"./tg": "../node_modules/moment/locale/tg.js",
	"./tg.js": "../node_modules/moment/locale/tg.js",
	"./th": "../node_modules/moment/locale/th.js",
	"./th.js": "../node_modules/moment/locale/th.js",
	"./tl-ph": "../node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "../node_modules/moment/locale/tl-ph.js",
	"./tlh": "../node_modules/moment/locale/tlh.js",
	"./tlh.js": "../node_modules/moment/locale/tlh.js",
	"./tr": "../node_modules/moment/locale/tr.js",
	"./tr.js": "../node_modules/moment/locale/tr.js",
	"./tzl": "../node_modules/moment/locale/tzl.js",
	"./tzl.js": "../node_modules/moment/locale/tzl.js",
	"./tzm": "../node_modules/moment/locale/tzm.js",
	"./tzm-latn": "../node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "../node_modules/moment/locale/tzm.js",
	"./ug-cn": "../node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "../node_modules/moment/locale/ug-cn.js",
	"./uk": "../node_modules/moment/locale/uk.js",
	"./uk.js": "../node_modules/moment/locale/uk.js",
	"./ur": "../node_modules/moment/locale/ur.js",
	"./ur.js": "../node_modules/moment/locale/ur.js",
	"./uz": "../node_modules/moment/locale/uz.js",
	"./uz-latn": "../node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "../node_modules/moment/locale/uz-latn.js",
	"./uz.js": "../node_modules/moment/locale/uz.js",
	"./vi": "../node_modules/moment/locale/vi.js",
	"./vi.js": "../node_modules/moment/locale/vi.js",
	"./x-pseudo": "../node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../node_modules/moment/locale/x-pseudo.js",
	"./yo": "../node_modules/moment/locale/yo.js",
	"./yo.js": "../node_modules/moment/locale/yo.js",
	"./zh-cn": "../node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "../node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "../node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "../node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "../node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "../node_modules/moment/locale/zh-tw.js"
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
webpackContext.id = "../node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "../viewer-prototype/lib/browser/trace-explorer/trace-explorer-contribution.js":
/*!*************************************************************************************!*\
  !*** ../viewer-prototype/lib/browser/trace-explorer/trace-explorer-contribution.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const view_contribution_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/view-contribution */ "../node_modules/@theia/core/lib/browser/shell/view-contribution.js");
const trace_explorer_widget_1 = __webpack_require__(/*! ./trace-explorer-widget */ "../viewer-prototype/lib/browser/trace-explorer/trace-explorer-widget.js");
class TraceExplorerContribution extends view_contribution_1.AbstractViewContribution {
    constructor() {
        super({
            widgetId: trace_explorer_widget_1.TRACE_EXPLORER_ID,
            widgetName: trace_explorer_widget_1.TRACE_EXPLORER_LABEL,
            defaultWidgetOptions: {
                area: 'left'
            },
            toggleCommandId: 'trace-explorer:toggle'
        });
    }
}
exports.TraceExplorerContribution = TraceExplorerContribution;


/***/ }),

/***/ "../viewer-prototype/lib/browser/trace-explorer/trace-explorer-widget.js":
/*!*******************************************************************************!*\
  !*** ../viewer-prototype/lib/browser/trace-explorer/trace-explorer-widget.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var TraceExplorerWidget_1;
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
const react_widget_1 = __webpack_require__(/*! @theia/core/lib/browser/widgets/react-widget */ "../node_modules/@theia/core/lib/browser/widgets/react-widget.js");
const React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
const trace_manager_1 = __webpack_require__(/*! ../../common/trace-manager */ "../viewer-prototype/lib/common/trace-manager.js");
const react_virtualized_1 = __webpack_require__(/*! react-virtualized */ "../node_modules/react-virtualized/dist/es/index.js");
const react_fontawesome_1 = __webpack_require__(/*! @fortawesome/react-fontawesome */ "../node_modules/@fortawesome/react-fontawesome/index.es.js");
const free_solid_svg_icons_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
const ReactModal = __webpack_require__(/*! react-modal */ "../node_modules/react-modal/lib/index.js");
const core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
const signal_manager_1 = __webpack_require__(/*! ../../common/signal-manager */ "../viewer-prototype/lib/common/signal-manager.js");
const browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "../node_modules/@theia/editor/lib/browser/index.js");
const uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../node_modules/@theia/core/lib/common/uri.js");
exports.TRACE_EXPLORER_ID = 'trace-explorer';
exports.TRACE_EXPLORER_LABEL = 'Trace Explorer';
class OutputAddedSignalPayload {
    constructor(outputDescriptor, trace) {
        this.outputDescriptor = outputDescriptor;
        this.trace = trace;
    }
    getOutputDescriptor() {
        return this.outputDescriptor;
    }
    getTrace() {
        return this.trace;
    }
}
exports.OutputAddedSignalPayload = OutputAddedSignalPayload;
let TraceExplorerWidget = TraceExplorerWidget_1 = class TraceExplorerWidget extends react_widget_1.ReactWidget {
    constructor(traceManager, editorManager) {
        super();
        this.traceManager = traceManager;
        this.editorManager = editorManager;
        this.OPENED_TRACE_TITLE = 'Opened traces';
        // private FILE_NAVIGATOR_TITLE: string = 'File navigator';
        this.ANALYSIS_TITLE = 'Available analysis';
        this.openedTraces = new Array();
        this.selectedTraceIndex = 0;
        this.availableOutputDescriptors = new Map();
        this.showShareDialog = false;
        this.sharingLink = '';
        this.tooltip = {};
        this.id = exports.TRACE_EXPLORER_ID;
        this.title.label = exports.TRACE_EXPLORER_LABEL;
        this.title.caption = exports.TRACE_EXPLORER_LABEL;
        this.title.iconClass = 'trace-explorer-tab-icon';
        this.toDispose.push(traceManager.traceOpenedSignal(trace => this.onTraceOpened(trace)));
        this.toDispose.push(traceManager.traceClosedSignal(trace => this.onTraceClosed(trace)));
        this.toDispose.push(signal_manager_1.SignalManager.getInstance().tooltipSignal(tooltip => this.onTooltip(tooltip)));
        this.initialize();
    }
    onTraceOpened(openedTrace) {
        this.updateOpenedTraces();
        this.updateAvailableAnalysis(openedTrace);
    }
    onTraceClosed(closedTrace) {
        this.tooltip = {};
        this.updateOpenedTraces();
        this.updateAvailableAnalysis(undefined);
    }
    onTooltip(tooltip) {
        this.tooltip = tooltip;
        this.update();
    }
    async initialize() {
        this.updateOpenedTraces();
        this.updateAvailableAnalysis(undefined);
    }
    render() {
        this.updateOpenedTraces = this.updateOpenedTraces.bind(this);
        this.updateAvailableAnalysis = this.updateAvailableAnalysis.bind(this);
        this.traceRowRenderer = this.traceRowRenderer.bind(this);
        this.outputsRowRenderer = this.outputsRowRenderer.bind(this);
        this.handleShareModalClose = this.handleShareModalClose.bind(this);
        let outputsRowCount = 0;
        if (this.openedTraces.length) {
            const outputs = this.availableOutputDescriptors.get(this.openedTraces[this.selectedTraceIndex].UUID);
            if (outputs) {
                outputsRowCount = outputs.length;
            }
        }
        return React.createElement("div", { className: 'trace-explorer-container' },
            React.createElement(ReactModal, { isOpen: this.showShareDialog, onRequestClose: this.handleShareModalClose, ariaHideApp: false, className: 'sharing-modal', overlayClassName: 'sharing-overlay' }, this.renderSharingModal()),
            React.createElement("div", { className: 'trace-explorer-opened' },
                React.createElement("div", { className: 'trace-explorer-panel-title', onClick: this.updateOpenedTraces }, this.OPENED_TRACE_TITLE),
                React.createElement("div", { className: 'trace-explorer-panel-content' },
                    React.createElement(react_virtualized_1.List, { height: 300, width: 300, rowCount: this.openedTraces.length, rowHeight: 50, rowRenderer: this.traceRowRenderer }))),
            React.createElement("div", { className: 'trace-explorer-analysis' },
                React.createElement("div", { className: 'trace-explorer-panel-title' }, this.ANALYSIS_TITLE),
                React.createElement("div", { className: 'trace-explorer-panel-content' },
                    React.createElement(react_virtualized_1.List, { height: 300, width: 300, rowCount: outputsRowCount, rowHeight: 50, rowRenderer: this.outputsRowRenderer }))),
            React.createElement("div", { className: 'trace-explorer-tooltip' },
                React.createElement("div", { className: 'trace-explorer-panel-title' }, 'Time Graph Tooltip'),
                React.createElement("div", { className: 'trace-explorer-panel-content' }, this.renderTooltip())));
    }
    renderTooltip() {
        this.handleSourcecodeLockup = this.handleSourcecodeLockup.bind(this);
        const tooltipArray = [];
        if (this.tooltip) {
            const keys = Object.keys(this.tooltip);
            keys.forEach(key => {
                if (key === 'Source') {
                    const sourceCodeInfo = this.tooltip[key];
                    const matches = sourceCodeInfo.match('(.*):(\\d+)');
                    let fileLocation;
                    let line;
                    if (matches && matches.length === 3) {
                        fileLocation = matches[1];
                        line = matches[2];
                    }
                    tooltipArray.push(React.createElement("p", { className: 'source-code-tooltip', key: key, onClick: this.handleSourcecodeLockup.bind(this, fileLocation, line) }, key + ': ' + sourceCodeInfo));
                }
                else {
                    tooltipArray.push(React.createElement("p", { key: key }, key + ': ' + this.tooltip[key]));
                }
            });
        }
        return React.createElement(React.Fragment, null, tooltipArray.map(element => {
            return element;
        }));
    }
    handleSourcecodeLockup(fileLocation, line) {
        if (fileLocation) {
            const modeOpt = {
                mode: 'open'
            };
            let slectionOpt = {
                selection: {
                    start: {
                        line: 0,
                        character: 0
                    },
                    end: {
                        line: 0,
                        character: 0
                    }
                }
            };
            if (line) {
                const lineNumber = parseInt(line);
                slectionOpt = {
                    selection: {
                        start: {
                            line: lineNumber,
                            character: 0
                        },
                        end: {
                            line: lineNumber,
                            character: 0
                        }
                    }
                };
            }
            const opts = {
                ...modeOpt,
                ...slectionOpt
            };
            this.editorManager.open(new uri_1.default(fileLocation), opts);
        }
    }
    renderSharingModal() {
        if (this.sharingLink.length) {
            return React.createElement("div", { className: 'sharing-container' },
                React.createElement("div", { className: 'sharing-description' }, 'Copy URL to share your trace context'),
                React.createElement("div", { className: 'sharing-link-info' },
                    React.createElement("div", { className: 'sharing-link' },
                        React.createElement("textarea", { rows: 1, cols: this.sharingLink.length, readOnly: true, value: this.sharingLink })),
                    React.createElement("div", { className: 'sharing-link-copy' },
                        React.createElement("button", { className: 'copy-link-button' },
                            React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCopy })))));
        }
        return React.createElement("div", { style: { color: 'white' } }, 'Cannot share this trace');
    }
    traceRowRenderer(props) {
        let traceName = '';
        let tracePath = '';
        if (this.openedTraces && this.openedTraces.length && props.index < this.openedTraces.length) {
            traceName = this.openedTraces[props.index].name;
            tracePath = this.openedTraces[props.index].path;
        }
        this.handleShareButtonClick = this.handleShareButtonClick.bind(this);
        return React.createElement("div", { className: 'trace-list-container', key: props.key, style: props.style },
            React.createElement("div", { className: 'trace-element-container' },
                React.createElement("div", { className: 'trace-element-info', onClick: this.onTraceSelected.bind(this, props.index) },
                    React.createElement("div", { className: 'trace-element-name' }, traceName),
                    React.createElement("div", { className: 'trace-element-path' }, tracePath)),
                React.createElement("div", { className: 'trace-element-options' },
                    React.createElement("button", { className: 'share-context-button', onClick: this.handleShareButtonClick.bind(this, props.index) },
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faShareSquare })))));
    }
    onTraceSelected(index) {
        this.selectedTraceIndex = index;
        this.updateAvailableAnalysis(this.openedTraces[index]);
    }
    handleShareButtonClick(index) {
        const traceToShare = this.openedTraces[index];
        this.sharingLink = 'https://localhost:3000/share/trace?' + traceToShare.UUID;
        this.showShareDialog = true;
        this.update();
    }
    handleShareModalClose() {
        this.showShareDialog = false;
        this.sharingLink = '';
        this.update();
    }
    outputsRowRenderer(props) {
        let outputName = '';
        let outputDescription = '';
        const selectedTrace = this.openedTraces[this.selectedTraceIndex];
        if (selectedTrace) {
            const outputDescriptors = this.availableOutputDescriptors.get(selectedTrace.UUID);
            if (outputDescriptors && outputDescriptors.length && props.index < outputDescriptors.length) {
                outputName = outputDescriptors[props.index].name;
                outputDescription = outputDescriptors[props.index].description;
            }
        }
        return React.createElement("div", { className: 'outputs-list-container', key: props.key, style: props.style, onClick: this.outputClicked.bind(this, props.index) },
            React.createElement("div", { className: 'outputs-element-name' }, outputName),
            React.createElement("div", { className: 'outputs-element-description' }, outputDescription));
    }
    outputClicked(index) {
        const trace = this.openedTraces[this.selectedTraceIndex];
        const outputs = this.availableOutputDescriptors.get(trace.UUID);
        if (outputs) {
            TraceExplorerWidget_1.outputAddedEmitter.fire(new OutputAddedSignalPayload(outputs[index], trace));
        }
    }
    async updateOpenedTraces() {
        this.openedTraces = await this.traceManager.getOpenedTraces();
        this.selectedTraceIndex = 0;
        this.update();
    }
    async updateAvailableAnalysis(trace) {
        if (trace) {
            const outputs = await this.getOutputDescriptors(trace);
            this.availableOutputDescriptors.set(trace.UUID, outputs);
        }
        else {
            if (this.openedTraces.length) {
                const outputs = await this.getOutputDescriptors(this.openedTraces[0]);
                this.availableOutputDescriptors.set(this.openedTraces[0].UUID, outputs);
            }
        }
        this.update();
    }
    async getOutputDescriptors(trace) {
        const outputDescriptors = new Array();
        const descriptors = await this.traceManager.getAvailableOutputs(trace.UUID);
        if (descriptors && descriptors.length) {
            outputDescriptors.push(...descriptors);
        }
        return outputDescriptors;
    }
};
// Open output
TraceExplorerWidget.outputAddedEmitter = new core_1.Emitter();
TraceExplorerWidget.outputAddedSignal = TraceExplorerWidget_1.outputAddedEmitter.event;
TraceExplorerWidget = TraceExplorerWidget_1 = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(trace_manager_1.TraceManager)),
    __param(1, inversify_1.inject(browser_1.EditorManager)),
    __metadata("design:paramtypes", [trace_manager_1.TraceManager,
        browser_1.EditorManager])
], TraceExplorerWidget);
exports.TraceExplorerWidget = TraceExplorerWidget;


/***/ }),

/***/ "../viewer-prototype/lib/browser/trace-viewer/components/abstract-output-component.js":
/*!********************************************************************************************!*\
  !*** ../viewer-prototype/lib/browser/trace-viewer/components/abstract-output-component.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
const react_fontawesome_1 = __webpack_require__(/*! @fortawesome/react-fontawesome */ "../node_modules/@fortawesome/react-fontawesome/index.es.js");
const free_solid_svg_icons_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
class AbstractOutputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleWidth = 30;
        this.mainAreaContainer = React.createRef();
    }
    render() {
        this.closeComponent = this.closeComponent.bind(this);
        return React.createElement("div", { className: 'output-container', style: { width: this.props.style.width } },
            React.createElement("div", { className: 'widget-handle', style: { width: this.handleWidth } }, this.renderTitleBar()),
            React.createElement("div", { className: 'main-output-container', ref: this.mainAreaContainer, style: { width: this.props.style.width - this.handleWidth } }, this.renderMainArea()));
    }
    renderTitleBar() {
        let outputName = this.props.outputDescriptor.name;
        return React.createElement(React.Fragment, null,
            React.createElement("button", { className: 'remove-component-button', onClick: this.closeComponent },
                React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faTimes })),
            React.createElement("div", { className: 'title-bar-label' }, outputName));
    }
    closeComponent() {
        this.props.onOutputRemove(this.props.outputDescriptor.id);
    }
    getMainAreaWidth() {
        if (this.mainAreaContainer.current) {
            return this.mainAreaContainer.current.clientWidth;
        }
        return 1000;
    }
    getHandleWidth() {
        return this.handleWidth;
    }
}
exports.AbstractOutputComponent = AbstractOutputComponent;


/***/ }),

/***/ "../viewer-prototype/lib/browser/trace-viewer/components/abstract-tree-output-component.js":
/*!*************************************************************************************************!*\
  !*** ../viewer-prototype/lib/browser/trace-viewer/components/abstract-tree-output-component.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const abstract_output_component_1 = __webpack_require__(/*! ./abstract-output-component */ "../viewer-prototype/lib/browser/trace-viewer/components/abstract-output-component.js");
const React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
const query_helper_1 = __webpack_require__(/*! tsp-typescript-client/lib/models/query/query-helper */ "../node_modules/tsp-typescript-client/lib/models/query/query-helper.js");
const responses_1 = __webpack_require__(/*! tsp-typescript-client/lib/models/response/responses */ "../node_modules/tsp-typescript-client/lib/models/response/responses.js");
class AbstractTreeOutputComponent extends abstract_output_component_1.AbstractOutputComponent {
    constructor() {
        super(...arguments);
        this.treeRef = React.createRef();
        this.chartRef = React.createRef();
    }
    renderMainArea() {
        const treeWidth = this.props.style.width - this.props.style.chartWidth - this.getHandleWidth();
        return React.createElement(React.Fragment, null,
            React.createElement("div", { ref: this.treeRef, className: 'output-component-tree', id: 'componentTree', onScroll: ev => this.ScrollSync(this.treeRef, ev.persist), style: { width: treeWidth, height: this.props.style.height } }, this.renderTree()),
            React.createElement("div", { className: 'output-component-chart', id: "componentChart", style: { width: this.props.style.chartWidth, backgroundColor: '#3f3f3f' } }, this.renderChart()));
    }
    ScrollSync(el, event) {
        let Element = el.current;
        let chartElement = this.chartRef.current;
        let treeElement = this.treeRef.current;
        if (el == this.treeRef) {
            chartElement.scrollTop = Element.scrollTop;
            console.log('Scrolltop-tree', Element.scrollTop);
        }
        else {
            treeElement.scrollTop = Element.scrollTop;
            console.log('Scrolltop-chart', Element.scrollTop);
        }
    }
    async waitAnalysisCompletion() {
        const traceUUID = this.props.traceId;
        const tspClient = this.props.tspClient;
        const outPutId = this.props.outputDescriptor.id;
        // TODO Use the output descriptor to find out if the analysis is completed
        const xyTreeParameters = query_helper_1.QueryHelper.selectionTimeQuery(query_helper_1.QueryHelper.splitRangeIntoEqualParts(this.props.range.getstart(), this.props.range.getEnd(), 1120), []);
        let xyTreeResponse = (await tspClient.fetchXYTree(traceUUID, outPutId, xyTreeParameters)).getModel();
        while (xyTreeResponse.status === responses_1.ResponseStatus.RUNNING) {
            xyTreeResponse = (await tspClient.fetchXYTree(traceUUID, outPutId, xyTreeParameters)).getModel();
        }
        this.setState({
            outputStatus: xyTreeResponse.status
        });
    }
}
exports.AbstractTreeOutputComponent = AbstractTreeOutputComponent;


/***/ }),

/***/ "../viewer-prototype/lib/browser/trace-viewer/components/data-providers/style-provider.js":
/*!************************************************************************************************!*\
  !*** ../viewer-prototype/lib/browser/trace-viewer/components/data-providers/style-provider.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const query_helper_1 = __webpack_require__(/*! tsp-typescript-client/lib/models/query/query-helper */ "../node_modules/tsp-typescript-client/lib/models/query/query-helper.js");
class StyleProvider {
    constructor(outputId, traceId, tspClient) {
        this.outputId = outputId;
        this.tspClient = tspClient;
        this.traceId = traceId;
        const threadStyleObject = {
            '0': {
                color: '646464',
                height: 0.33
            },
            '2': {
                color: '00C800',
                height: 1
            },
            '3': {
                color: '0000C8',
                height: 1
            },
            '4': {
                color: 'C80064',
                height: 0.75
            },
            '1': {
                color: 'C8C800',
                height: 0.5
            },
            '5': {
                color: 'C86400',
                height: 0.5
            },
            '6': {
                color: 'C8C8C8',
                height: 0.5
            }
        };
        const resourceStyleObject = {
            '0': {
                color: 'C8C8C8',
                height: 0.66
            },
            '2': {
                color: '00C800',
                height: 1
            },
            '4': {
                color: '0000C8',
                height: 1
            },
            '16': {
                color: 'C80064',
                height: 0.75
            },
            '8': {
                color: 'C89664',
                height: 1
            },
            '1': {
                color: 'C8C800',
                height: 1
            }
        };
        this.tmpStyleObject = {
            'org.eclipse.tracecompass.internal.analysis.os.linux.core.threadstatus.ThreadStatusDataProvider': threadStyleObject,
            'org.eclipse.tracecompass.internal.analysis.os.linux.core.threadstatus.ResourcesStatusDataProvider': resourceStyleObject
        };
    }
    /**
     * Get the style for a specific output
     * @param forceUpdate Force the update of the current cached styles from the server
     */
    async getStyles(forceUpdate) {
        if (!this.styles || forceUpdate) {
            const styleResponse = await this.tspClient.fetchStyles(this.traceId, this.outputId, query_helper_1.QueryHelper.query());
            const styleModel = styleResponse.getModel().model;
            const styles = styleModel.styles;
            this.styles = styles;
        }
        return this.styles;
    }
    getStylesTmp(forceUpdate) {
        const styles = this.tmpStyleObject[this.outputId];
        return styles ? styles : {};
    }
}
exports.StyleProvider = StyleProvider;


/***/ }),

/***/ "../viewer-prototype/lib/browser/trace-viewer/components/data-providers/tsp-data-provider.js":
/*!***************************************************************************************************!*\
  !*** ../viewer-prototype/lib/browser/trace-viewer/components/data-providers/tsp-data-provider.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const query_helper_1 = __webpack_require__(/*! tsp-typescript-client/lib/models/query/query-helper */ "../node_modules/tsp-typescript-client/lib/models/query/query-helper.js");
class TspDataProvider {
    constructor(client, traceUUID, outputId, canvasDisplayWidth) {
        this.timeGraphEntries = new Array();
        this.timeGraphRows = new Array();
        this.canvasDisplayWidth = canvasDisplayWidth;
        this.client = client;
        this.outputId = outputId;
        this.traceUUID = traceUUID;
        this.totalRange = 0;
    }
    async getData(viewRange, resolution) {
        const resourcesTreeParameters = query_helper_1.QueryHelper.timeQuery([0, 1]); // QueryHelper.timeQuery(QueryHelper.splitRangeIntoEqualParts(1332170682440133097, 1332170682540133097, 1120));
        const treeResponse = (await this.client.fetchTimeGraphTree(this.traceUUID, this.outputId, resourcesTreeParameters)).getModel();
        this.timeGraphEntries = treeResponse.model.entries;
        this.totalRange = this.timeGraphEntries[0].endTime - this.timeGraphEntries[0].startTime; // 1332170682540133097 - starttime
        const selectedItems = new Array();
        this.timeGraphEntries.forEach(timeGraphEntry => {
            selectedItems.push(timeGraphEntry.id);
        });
        let statesParameters = query_helper_1.QueryHelper.selectionTimeQuery(query_helper_1.QueryHelper.splitRangeIntoEqualParts(1332170682440133097, 1332170682540133097, 1120), selectedItems);
        if (viewRange && resolution) {
            const start = viewRange.start + this.timeGraphEntries[0].startTime;
            const end = viewRange.end + this.timeGraphEntries[0].startTime;
            statesParameters = query_helper_1.QueryHelper.selectionTimeQuery(query_helper_1.QueryHelper.splitRangeIntoEqualParts(Math.trunc(start), Math.trunc(end), resolution), selectedItems);
        }
        const stateResponse = (await this.client.fetchTimeGraphStates(this.traceUUID, this.outputId, statesParameters)).getModel();
        this.timeGraphRows = stateResponse.model.rows;
        this.timeGraphRowsOrdering();
        // the start time which is normalized to logical 0 in timeline chart.
        const chartStart = this.timeGraphEntries[0].startTime;
        const rows = [];
        this.timeGraphRows.forEach((row) => {
            const rowId = row.entryID;
            const entry = this.timeGraphEntries.find(entry => entry.id === rowId);
            if (entry) {
                const states = this.getStateModelByRow(row, chartStart);
                rows.push({
                    id: rowId,
                    name: entry.labels[0],
                    range: {
                        start: entry.startTime - chartStart,
                        end: entry.endTime - chartStart
                    },
                    states
                });
            }
        });
        return {
            id: 'model',
            totalLength: this.totalRange,
            arrows: [],
            rows,
            data: {
                originalStart: chartStart
            }
        };
    }
    timeGraphRowsOrdering() {
        const newTimeGraphRows = new Array();
        this.timeGraphEntries.forEach(entry => {
            const timeGraphRow = this.timeGraphRows.find(row => row.entryID === entry.id);
            if (timeGraphRow) {
                newTimeGraphRows.push(timeGraphRow);
            }
        });
        this.timeGraphRows = newTimeGraphRows;
    }
    getStateModelByRow(row, chartStart) {
        const states = [];
        row.states.forEach((state, idx) => {
            const end = state.startTime + state.duration - chartStart;
            if (state.style || state.value >= 0) {
                states.push({
                    id: row.entryID + "-" + idx,
                    label: state.label,
                    range: {
                        start: state.startTime - chartStart,
                        end
                    },
                    data: {
                        stateValue: state.value,
                        style: state.style
                    }
                });
                this.totalRange = this.totalRange < end ? end : this.totalRange;
            }
            else {
                const nextIndex = idx + 1;
                const nextState = row.states[nextIndex];
                if (nextState && nextState.value < 0) {
                    // Add gap state
                    states.push({
                        id: row.entryID + "-" + idx,
                        label: 'GAP',
                        range: {
                            start: end,
                            end: nextState.startTime - chartStart
                        },
                        data: {
                            stateValue: -1
                        }
                    });
                }
            }
        });
        return states;
    }
}
exports.TspDataProvider = TspDataProvider;


/***/ }),

/***/ "../viewer-prototype/lib/browser/trace-viewer/components/table-output-component.js":
/*!*****************************************************************************************!*\
  !*** ../viewer-prototype/lib/browser/trace-viewer/components/table-output-component.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const abstract_output_component_1 = __webpack_require__(/*! ./abstract-output-component */ "../viewer-prototype/lib/browser/trace-viewer/components/abstract-output-component.js");
const React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
const ag_grid_react_1 = __webpack_require__(/*! ag-grid-react */ "../node_modules/ag-grid-react/main.js");
const query_helper_1 = __webpack_require__(/*! tsp-typescript-client/lib/models/query/query-helper */ "../node_modules/tsp-typescript-client/lib/models/query/query-helper.js");
class TableOutputComponent extends abstract_output_component_1.AbstractOutputComponent {
    constructor(props) {
        super(props);
        this.state = {
            outputStatus: 'RUNNING',
            tableColumns: [],
            tableLines: []
        };
        this.updateTable();
    }
    renderMainArea() {
        return React.createElement("div", { id: 'events-table', className: 'ag-theme-balham-dark', style: { height: '300px', width: '100%' } },
            React.createElement(ag_grid_react_1.AgGridReact, { columnDefs: this.state.tableColumns, rowData: this.state.tableLines }));
    }
    async updateTable() {
        const traceUUID = this.props.traceId;
        const tspClient = this.props.tspClient;
        const outPutId = this.props.outputDescriptor.id;
        // Fetch columns
        const columnsResponse = (await tspClient.fetchTableColumns(traceUUID, outPutId, query_helper_1.QueryHelper.timeQuery([0, 1]))).getModel();
        const columnEntries = columnsResponse.model.entries;
        const columnIds = new Array;
        const columnsArray = new Array();
        columnEntries.forEach(entry => {
            columnIds.push(entry.id);
            let columnName = '';
            if (entry.labels.length) {
                columnName = entry.labels[0];
            }
            columnsArray.push({
                headerName: columnName,
                field: entry.id.toString(),
                width: 200
            });
        });
        // Fetch lines
        const lineResponse = (await tspClient.fetchTableLines(traceUUID, outPutId, query_helper_1.QueryHelper.tableQuery(columnIds, 0, 500))).getModel();
        const model = lineResponse.model;
        const lines = model.lines;
        const linesArray = new Array();
        lines.forEach(line => {
            const obj = {};
            const cells = line.cells;
            const ids = model.columnIds;
            for (let i = 0; i < cells.length; i++) {
                obj[ids[i]] = cells[i].content;
            }
            linesArray.push(obj);
        });
        this.setState({
            outputStatus: lineResponse.status,
            tableColumns: columnsArray,
            tableLines: linesArray
        });
    }
}
exports.TableOutputComponent = TableOutputComponent;


/***/ }),

/***/ "../viewer-prototype/lib/browser/trace-viewer/components/timegraph-output-component.js":
/*!*********************************************************************************************!*\
  !*** ../viewer-prototype/lib/browser/trace-viewer/components/timegraph-output-component.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
const time_graph_chart_1 = __webpack_require__(/*! timeline-chart/lib/layer/time-graph-chart */ "../node_modules/timeline-chart/lib/layer/time-graph-chart.js");
const time_graph_chart_cursors_1 = __webpack_require__(/*! timeline-chart/lib/layer/time-graph-chart-cursors */ "../node_modules/timeline-chart/lib/layer/time-graph-chart-cursors.js");
const time_graph_chart_grid_1 = __webpack_require__(/*! timeline-chart/lib/layer/time-graph-chart-grid */ "../node_modules/timeline-chart/lib/layer/time-graph-chart-grid.js");
const time_graph_chart_selection_range_1 = __webpack_require__(/*! timeline-chart/lib/layer/time-graph-chart-selection-range */ "../node_modules/timeline-chart/lib/layer/time-graph-chart-selection-range.js");
const time_graph_vertical_scrollbar_1 = __webpack_require__(/*! timeline-chart/lib/layer/time-graph-vertical-scrollbar */ "../node_modules/timeline-chart/lib/layer/time-graph-vertical-scrollbar.js");
const time_graph_row_controller_1 = __webpack_require__(/*! timeline-chart/lib/time-graph-row-controller */ "../node_modules/timeline-chart/lib/time-graph-row-controller.js");
const query_helper_1 = __webpack_require__(/*! tsp-typescript-client/lib/models/query/query-helper */ "../node_modules/tsp-typescript-client/lib/models/query/query-helper.js");
const responses_1 = __webpack_require__(/*! tsp-typescript-client/lib/models/response/responses */ "../node_modules/tsp-typescript-client/lib/models/response/responses.js");
const signal_manager_1 = __webpack_require__(/*! ../../../common/signal-manager */ "../viewer-prototype/lib/common/signal-manager.js");
const abstract_tree_output_component_1 = __webpack_require__(/*! ./abstract-tree-output-component */ "../viewer-prototype/lib/browser/trace-viewer/components/abstract-tree-output-component.js");
const style_provider_1 = __webpack_require__(/*! ./data-providers/style-provider */ "../viewer-prototype/lib/browser/trace-viewer/components/data-providers/style-provider.js");
const tsp_data_provider_1 = __webpack_require__(/*! ./data-providers/tsp-data-provider */ "../viewer-prototype/lib/browser/trace-viewer/components/data-providers/tsp-data-provider.js");
const timegraph_container_component_1 = __webpack_require__(/*! ./utils/timegraph-container-component */ "../viewer-prototype/lib/browser/trace-viewer/components/utils/timegraph-container-component.js");
class TimegraphOutputComponent extends abstract_tree_output_component_1.AbstractTreeOutputComponent {
    constructor(props) {
        super(props);
        this.totalHeight = 0;
        this.styleMap = new Map();
        this.state = {
            outputStatus: responses_1.ResponseStatus.RUNNING,
            timegraphTree: []
        };
        this.tspDataProvider = new tsp_data_provider_1.TspDataProvider(this.props.tspClient, this.props.traceId, this.props.outputDescriptor.id);
        this.rowController = new time_graph_row_controller_1.TimeGraphRowController(this.props.style.rowHeight, this.totalHeight);
        this.horizontalContainer = React.createRef();
        const providers = {
            dataProvider: async (range, resolution) => {
                return this.fetchTimegraphData(range, resolution);
            },
            rowElementStyleProvider: (model) => {
                return this.getElementStyle(model);
            },
            rowStyleProvider: (row) => {
                return {
                    backgroundColor: 0x979797,
                    backgroundOpacity: row.selected ? 0.1 : 0,
                    lineColor: 0xdddddd,
                    lineThickness: 1,
                };
            }
        };
        this.chartLayer = new time_graph_chart_1.TimeGraphChart('timeGraphChart', providers, this.rowController);
        this.vscrollLayer = new time_graph_vertical_scrollbar_1.TimeGraphVerticalScrollbar('timeGraphVerticalScrollbar', this.rowController);
        this.chartLayer.onSelectedRowElementChanged((model) => {
            if (model) {
                const el = this.chartLayer.getElementById(model.id);
                if (el) {
                    this.selectedElement = el;
                }
            }
            else {
                this.selectedElement = undefined;
            }
            this.onElementSelected(this.selectedElement);
        });
    }
    async componentDidMount() {
        this.waitAnalysisCompletion();
    }
    async componentDidUpdate(prevProps, prevState) {
        if (this.state.outputStatus !== responses_1.ResponseStatus.COMPLETED || !this.state.timegraphTree.length) {
            const treeParameters = query_helper_1.QueryHelper.timeQuery([0, 1]);
            const treeResponse = (await this.props.tspClient.fetchTimeGraphTree(this.props.traceId, this.props.outputDescriptor.id, treeParameters)).getModel();
            const nbEntries = treeResponse.model.entries.length;
            this.totalHeight = nbEntries * this.props.style.rowHeight;
            this.rowController.totalHeight = this.totalHeight;
            // TODO Style should not be retreive in the "initialization" part or at least async
            const styleResponse = (await this.props.tspClient.fetchStyles(this.props.traceId, this.props.outputDescriptor.id, query_helper_1.QueryHelper.query())).getModel();
            this.setState({
                // outputStatus: ResponseStatus.COMPLETED,
                timegraphTree: treeResponse.model.entries,
                styleModel: styleResponse.model
            });
        }
    }
    renderTree() {
        return React.createElement(React.Fragment, null, this.state.timegraphTree.map(entry => {
            if (entry.parentId !== -1) {
                return entry.labels[0] + '\n';
            }
        }));
    }
    renderChart() {
        return React.createElement(React.Fragment, null, this.state.outputStatus === responses_1.ResponseStatus.COMPLETED ?
            React.createElement("div", { ref: this.chartRef, id: 'timegraph-main', className: 'ps__child--consume', onScroll: ev => this.ScrollSync(this.chartRef, ev.persist()) }, this.renderTimeGraphContent()) :
            'Analysis running...');
    }
    //<canvas id="canvas" height="12000" ref={ref => this.horizontalContainer}></canvas>
    //<canvas id="canvas" height="12000" ref={ref => this.horizontalContainer} onScroll={ev => this.ScrollSync(this.horizontalContainer, ev.persist()) }></canvas>
    renderTimeGraphContent() {
        return React.createElement("div", { id: 'main-timegraph-content', ref: this.horizontalContainer, onScroll: e => e.preventDefault(), style: { height: this.totalHeight } }, this.getChartContainer());
    }
    getChartContainer() {
        const grid = new time_graph_chart_grid_1.TimeGraphChartGrid('timeGraphGrid', this.props.style.rowHeight, this.props.style.lineColor);
        const cursors = new time_graph_chart_cursors_1.TimeGraphChartCursors('chart-cursors', this.chartLayer, this.rowController, { color: this.props.style.cursorColor });
        const selectionRange = new time_graph_chart_selection_range_1.TimeGraphChartSelectionRange('chart-selection-range', { color: this.props.style.cursorColor });
        return React.createElement(timegraph_container_component_1.ReactTimeGraphContainer, { options: {
                id: 'timegraph-chart',
                height: this.props.style.height,
                width: this.props.style.chartWidth,
                backgroundColor: this.props.style.chartBackgroundColor,
                classNames: 'horizontal-canvas'
            }, scrollHandler: this.ScrollSync, onWidgetResize: this.props.addWidgetResizeHandler, unitController: this.props.unitController, id: 'timegraph-chart', layer: [
                grid, this.chartLayer, selectionRange, cursors
            ] });
    }
    getVerticalScrollbar() {
        return React.createElement(timegraph_container_component_1.ReactTimeGraphContainer, { id: 'vscroll', options: {
                id: 'vscroll',
                width: 10,
                height: this.props.style.height,
                backgroundColor: this.props.style.naviBackgroundColor
            }, onWidgetResize: this.props.addWidgetResizeHandler, unitController: this.props.unitController, layer: [this.vscrollLayer] });
    }
    async onElementSelected(element) {
        if (element && this.props.viewRange) {
            const elementRange = element.model.range;
            const offset = this.props.viewRange.getOffset();
            const time = Math.round((elementRange.start + ((elementRange.end - elementRange.start) / 2)) + (offset ? offset : 0));
            const tooltipResponse = await this.props.tspClient.fetchTimeGraphToolTip(this.props.traceId, this.props.outputDescriptor.id, time, element.row.model.id.toString());
            const responseModel = tooltipResponse.getModel();
            if (responseModel) {
                const tooltipObject = {
                    'Label': element.model.label,
                    'Start time': (elementRange.start + (offset ? offset : 0)).toString(),
                    'End time': (elementRange.end + (offset ? offset : 0)).toString(),
                    ...responseModel.model,
                    'Row': element.row.model.name
                };
                signal_manager_1.SignalManager.getInstance().fireTooltipSignal(tooltipObject);
            }
        }
    }
    async fetchTimegraphData(range, resolution) {
        const length = range.end - range.start;
        const overlap = ((length * 5) - length) / 2;
        const start = range.start - overlap > 0 ? range.start - overlap : 0;
        const end = range.end + overlap < this.props.unitController.absoluteRange ? range.end + overlap : this.props.unitController.absoluteRange;
        const newRange = { start, end };
        const newResolution = resolution * 0.8;
        const timeGraphData = await this.tspDataProvider.getData(newRange, this.props.style.chartWidth);
        if (timeGraphData && this.selectedElement) {
            for (const row of timeGraphData.rows) {
                const selEl = row.states.find(el => !!this.selectedElement && el.id === this.selectedElement.id);
                if (selEl) {
                    selEl.selected = true;
                    break;
                }
            }
        }
        return {
            rows: timeGraphData ? timeGraphData.rows : [],
            range: newRange,
            resolution: newResolution
        };
    }
    getElementStyle(element) {
        const styleModel = this.state.styleModel;
        if (styleModel) {
            const metadata = element.data;
            if (metadata && metadata.style) {
                const elementStyle = metadata.style;
                const modelStyle = styleModel.styles[elementStyle.parentKey];
                if (modelStyle) {
                    const color = this.hexStringToNumber(modelStyle.styleValues["background-color"]);
                    let height = this.props.style.rowHeight * 0.8;
                    if (modelStyle.styleValues["height"]) {
                        height = modelStyle.styleValues["height"] * this.props.style.rowHeight;
                    }
                    return {
                        color: color,
                        height: height,
                        borderWidth: element.selected ? 2 : 0,
                        borderColor: 0xeef20c
                    };
                }
            }
        }
        return this.getDefaultElementStyle(element);
    }
    hexStringToNumber(hexString) {
        return parseInt(hexString.replace(/^#/, ''), 16);
    }
    getDefaultElementStyle(element) {
        const styleProvider = new style_provider_1.StyleProvider(this.props.outputDescriptor.id, this.props.traceId, this.props.tspClient);
        const styles = styleProvider.getStylesTmp();
        const backupStyles = [
            {
                color: 0x3891A6,
                height: this.props.style.rowHeight * 0.8
            }, {
                color: 0x4C5B5C,
                height: this.props.style.rowHeight * 0.7
            }, {
                color: 0xFDE74C,
                height: this.props.style.rowHeight * 0.6
            }, {
                color: 0xDB5461,
                height: this.props.style.rowHeight * 0.5
            }, {
                color: 0xE3655B,
                height: this.props.style.rowHeight * 0.4
            }, {
                color: 0xEA8F87,
                height: this.props.style.rowHeight * 0.9
            }, {
                color: 0xDE636F,
                height: this.props.style.rowHeight * 0.3
            },
        ];
        let style = backupStyles[0];
        const val = element.label;
        const modelData = element.data;
        if (modelData) {
            const value = modelData.stateValue;
            const elementStyle = styles[value.toString()];
            if (elementStyle) {
                return {
                    color: parseInt(elementStyle.color, 16),
                    height: this.props.style.rowHeight * elementStyle.height,
                    borderWidth: element.selected ? 2 : 0,
                    borderColor: 0xeef20c
                };
            }
            if (value === -1) {
                return {
                    color: 0xCACACA,
                    height: this.props.style.rowHeight * 0.5,
                    borderWidth: element.selected ? 2 : 0,
                    borderColor: 0xeef20c
                };
            }
            style = this.styleMap.get(value);
            if (!style) {
                style = backupStyles[(value % backupStyles.length)];
                this.styleMap.set(value, style);
            }
            return {
                color: style.color,
                height: style.height,
                borderWidth: element.selected ? 2 : 0,
                borderColor: 0xeef20c
            };
        }
        style = this.styleMap.get(val);
        if (!style) {
            style = backupStyles[(this.styleMap.size % backupStyles.length)];
            this.styleMap.set(val, style);
        }
        return {
            color: style.color,
            height: style.height,
            borderWidth: element.selected ? 2 : 0,
            borderColor: 0xeef20c
        };
    }
}
exports.TimegraphOutputComponent = TimegraphOutputComponent;


/***/ }),

/***/ "../viewer-prototype/lib/browser/trace-viewer/components/trace-context-component.js":
/*!******************************************************************************************!*\
  !*** ../viewer-prototype/lib/browser/trace-viewer/components/trace-context-component.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
const React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
const react_grid_layout_1 = __webpack_require__(/*! react-grid-layout */ "../node_modules/react-grid-layout/index.js");
const time_graph_unit_controller_1 = __webpack_require__(/*! timeline-chart/lib/time-graph-unit-controller */ "../node_modules/timeline-chart/lib/time-graph-unit-controller.js");
const time_range_1 = __webpack_require__(/*! ../../../common/utils/time-range */ "../viewer-prototype/lib/common/utils/time-range.js");
const table_output_component_1 = __webpack_require__(/*! ./table-output-component */ "../viewer-prototype/lib/browser/trace-viewer/components/table-output-component.js");
const timegraph_output_component_1 = __webpack_require__(/*! ./timegraph-output-component */ "../viewer-prototype/lib/browser/trace-viewer/components/timegraph-output-component.js");
const time_axis_component_1 = __webpack_require__(/*! ./utils/time-axis-component */ "../viewer-prototype/lib/browser/trace-viewer/components/utils/time-axis-component.js");
const time_navigator_component_1 = __webpack_require__(/*! ./utils/time-navigator-component */ "../viewer-prototype/lib/browser/trace-viewer/components/utils/time-navigator-component.js");
const xy_output_component_1 = __webpack_require__(/*! ./xy-output-component */ "../viewer-prototype/lib/browser/trace-viewer/components/xy-output-component.js");
const ResponsiveGridLayout = react_grid_layout_1.WidthProvider(react_grid_layout_1.Responsive);
class TraceContextComponent extends React.Component {
    constructor(props) {
        super(props);
        this.INDEXING_RUNNING_STATUS = 'RUNNING';
        this.INDEXING_STATUS_BAR_KEY = 'indexing-status';
        this.TIME_SELECTION_STATUS_BAR_KEY = 'time-selection-range';
        this.COMPONENT_WIDTH_PROPORTION = 0.85;
        this.DEFAULT_COMPONENT_WIDTH = 1500;
        this.DEFAULT_CHART_WIDTH = Math.floor(this.DEFAULT_COMPONENT_WIDTH * this.COMPONENT_WIDTH_PROPORTION);
        this.DEFAULT_COMPONENT_HEIGHT = 300;
        this.SCROLLBAR_PADDING = 12;
        this.widgetResizeHandlers = [];
        this.addWidgetResizeHandler = (h) => {
            this.widgetResizeHandlers.push(h);
        };
        let traceRange = new time_range_1.TimeRange(0, 0);
        let viewRange = new time_range_1.TimeRange(0, 0);
        if (this.props.trace) {
            const trace = this.props.trace;
            traceRange = new time_range_1.TimeRange(trace.start - this.props.trace.start, trace.end - this.props.trace.start, this.props.trace.start);
            viewRange = new time_range_1.TimeRange(trace.start - this.props.trace.start, trace.end - this.props.trace.start, this.props.trace.start);
        }
        this.state = {
            timeOffset: this.props.trace.start,
            currentRange: traceRange,
            currentViewRange: viewRange,
            currentTimeSelection: undefined,
            trace: this.props.trace,
            traceIndexing: this.props.trace.indexingStatus === this.INDEXING_RUNNING_STATUS,
            style: {
                width: this.DEFAULT_COMPONENT_WIDTH,
                chartWidth: this.DEFAULT_CHART_WIDTH,
                height: this.DEFAULT_COMPONENT_HEIGHT,
                naviBackgroundColor: 0x3f3f3f,
                chartBackgroundColor: 0x3f3f3f,
                cursorColor: 0x259fd8,
                lineColor: 0xbbbbbb,
                rowHeight: 20
            }
        };
        const absoluteRange = traceRange.getDuration();
        this.unitController = new time_graph_unit_controller_1.TimeGraphUnitController(absoluteRange, { start: 0, end: absoluteRange });
        this.unitController.numberTranslator = (theNumber) => {
            const originalStart = traceRange.getstart();
            theNumber += originalStart;
            const milli = Math.floor(theNumber / 1000000);
            const micro = Math.floor((theNumber % 1000000) / 1000);
            const nano = Math.floor((theNumber % 1000000) % 1000);
            return milli + ':' + micro + ':' + nano; // THAT IS TOO LONG, need to find better format
        };
        this.unitController.onSelectionRangeChange(range => { this.handleTimeSelectionChange(range); });
        this.unitController.onViewRangeChanged(viewRange => { this.handleViewRangeChange(viewRange); });
        this.traceContextContainer = React.createRef();
        this.initialize();
    }
    async initialize() {
        await this.updateTrace();
        this.unitController.absoluteRange = this.state.trace.end - this.state.timeOffset;
        this.unitController.viewRange = { start: 0, end: this.state.trace.end - this.state.timeOffset };
    }
    async updateTrace() {
        if (this.state.traceIndexing) {
            let updatedTrace = (await this.props.tspClient.fetchTrace(this.props.trace.UUID)).getModel();
            let isIndexing = updatedTrace.indexingStatus === this.INDEXING_RUNNING_STATUS;
            while (isIndexing) {
                updatedTrace = (await this.props.tspClient.fetchTrace(this.props.trace.UUID)).getModel();
                isIndexing = updatedTrace.indexingStatus === this.INDEXING_RUNNING_STATUS;
                this.setState({
                    timeOffset: updatedTrace.start,
                    trace: updatedTrace,
                    traceIndexing: isIndexing,
                    currentRange: new time_range_1.TimeRange(updatedTrace.start - updatedTrace.start, updatedTrace.end - updatedTrace.start, updatedTrace.start)
                });
                // Update status bar
                this.props.statusBar.setElement(this.INDEXING_STATUS_BAR_KEY, {
                    text: `Indexing ${this.props.trace.name}: ${this.state.trace.nbEvents}`,
                    alignment: browser_1.StatusBarAlignment.RIGHT
                });
                await this.sleep(500);
            }
        }
        this.props.statusBar.removeElement(this.INDEXING_STATUS_BAR_KEY);
    }
    sleep(ms) {
        new Promise(resolve => setTimeout(resolve, ms));
    }
    componentDidMount() {
        this.onResize = this.onResize.bind(this);
        this.props.addResizeHandler(this.onResize);
        this.onResize();
    }
    componentWillUnmount() {
        this.props.statusBar.removeElement(this.INDEXING_STATUS_BAR_KEY);
        this.props.statusBar.removeElement(this.TIME_SELECTION_STATUS_BAR_KEY);
    }
    onResize() {
        const newWidth = this.traceContextContainer.current ? this.traceContextContainer.current.clientWidth - this.SCROLLBAR_PADDING : this.DEFAULT_COMPONENT_WIDTH;
        this.setState(prevState => {
            return { style: { ...prevState.style, width: newWidth, chartWidth: this.getChartWidth(newWidth) } };
        });
        this.widgetResizeHandlers.forEach(h => h());
    }
    getChartWidth(totalWidth) {
        return Math.floor(totalWidth * this.COMPONENT_WIDTH_PROPORTION);
    }
    handleTimeSelectionChange(range) {
        const t1 = Math.trunc(range.start + this.state.timeOffset);
        const t2 = Math.trunc(range.end + this.state.timeOffset);
        this.props.statusBar.setElement(this.TIME_SELECTION_STATUS_BAR_KEY, {
            text: `T1: ${t1} T2: ${t2} Delta: ${t2 - t1}`,
            alignment: browser_1.StatusBarAlignment.LEFT,
        });
        this.setState(prevState => {
            return {
                currentTimeSelection: new time_range_1.TimeRange(range.start, range.end, prevState.timeOffset)
            };
        });
    }
    handleViewRangeChange(viewRange) {
        this.setState(prevState => {
            return {
                currentViewRange: new time_range_1.TimeRange(viewRange.start, viewRange.end, prevState.timeOffset)
            };
        });
    }
    render() {
        return React.createElement("div", { className: 'trace-context-container', ref: this.traceContextContainer }, this.props.outputs.length ? this.renderOutputs() : this.renderPlaceHolder());
    }
    renderOutputs() {
        const layouts = this.generateGridLayout();
        const outputs = this.props.outputs;
        return React.createElement(React.Fragment, null,
            React.createElement("div", { style: { marginLeft: this.state.style.width - this.state.style.chartWidth } },
                React.createElement(time_axis_component_1.TimeAxisComponent, { unitController: this.unitController, style: this.state.style, addWidgetResizeHandler: this.addWidgetResizeHandler })),
            React.createElement(ResponsiveGridLayout, { className: 'outputs-grid-layout', margin: [0, 5], isResizable: false, layouts: { lg: layouts }, cols: { lg: 1 }, breakpoints: { lg: 1200 }, rowHeight: 300, draggableHandle: '.widget-handle', style: { paddingRight: this.SCROLLBAR_PADDING } }, outputs.map(output => {
                const responseType = output.type;
                const outputProps = {
                    tspClient: this.props.tspClient,
                    traceId: this.state.trace.UUID,
                    outputDescriptor: output,
                    range: this.state.currentRange,
                    viewRange: this.state.currentViewRange,
                    selectionRange: this.state.currentTimeSelection,
                    style: this.state.style,
                    onOutputRemove: this.props.onOutputRemove,
                    unitController: this.unitController
                };
                switch (responseType) {
                    case 'TIME_GRAPH':
                        return React.createElement("div", { key: output.id },
                            React.createElement(timegraph_output_component_1.TimegraphOutputComponent, Object.assign({ key: output.id }, outputProps, { addWidgetResizeHandler: this.addWidgetResizeHandler })));
                    case 'TREE_TIME_XY':
                        return React.createElement("div", { key: output.id },
                            React.createElement(xy_output_component_1.XYOutputComponent, Object.assign({ key: output.id }, outputProps)));
                    case 'TABLE':
                        return React.createElement("div", { key: output.id },
                            React.createElement(table_output_component_1.TableOutputComponent, Object.assign({ key: output.id }, outputProps)));
                    default:
                        break;
                }
            })),
            React.createElement("div", { style: { marginLeft: this.state.style.width - this.state.style.chartWidth } },
                React.createElement(time_navigator_component_1.TimeNavigatorComponent, { unitController: this.unitController, style: this.state.style, addWidgetResizeHandler: this.addWidgetResizeHandler })));
    }
    renderPlaceHolder() {
        return React.createElement("div", { className: 'no-output-placeholder' }, 'Add outputs by clicking on an analysis in the trace explorer view');
    }
    generateGridLayout() {
        const outputs = this.props.outputs;
        let layouts = [];
        if (outputs.length) {
            outputs.forEach((output, index) => {
                const itemLayout = {
                    i: output.id,
                    x: 0,
                    y: index,
                    w: 1,
                    h: 1
                };
                layouts.push(itemLayout);
            });
        }
        return layouts;
    }
}
exports.TraceContextComponent = TraceContextComponent;


/***/ }),

/***/ "../viewer-prototype/lib/browser/trace-viewer/components/utils/checkbox-component.js":
/*!*******************************************************************************************!*\
  !*** ../viewer-prototype/lib/browser/trace-viewer/components/utils/checkbox-component.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
class CheckboxComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked
        };
    }
    render() {
        this.handleChange = this.handleChange.bind(this);
        return React.createElement("div", null,
            React.createElement("input", { type: 'checkbox', checked: this.state.checked, onChange: this.handleChange }),
            this.props.name);
    }
    handleChange() {
        this.setState((prevState) => ({
            checked: prevState.checked ? false : true
        }));
        this.props.onChecked(this.props.id);
    }
}
exports.CheckboxComponent = CheckboxComponent;


/***/ }),

/***/ "../viewer-prototype/lib/browser/trace-viewer/components/utils/time-axis-component.js":
/*!********************************************************************************************!*\
  !*** ../viewer-prototype/lib/browser/trace-viewer/components/utils/time-axis-component.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
const time_graph_axis_1 = __webpack_require__(/*! timeline-chart/lib/layer/time-graph-axis */ "../node_modules/timeline-chart/lib/layer/time-graph-axis.js");
const time_graph_axis_cursors_1 = __webpack_require__(/*! timeline-chart/lib/layer/time-graph-axis-cursors */ "../node_modules/timeline-chart/lib/layer/time-graph-axis-cursors.js");
const timegraph_container_component_1 = __webpack_require__(/*! ./timegraph-container-component */ "../viewer-prototype/lib/browser/trace-viewer/components/utils/timegraph-container-component.js");
class TimeAxisComponent extends React.Component {
    render() {
        return React.createElement(timegraph_container_component_1.ReactTimeGraphContainer, { id: 'timegraph-axis', options: {
                id: 'timegraph-axis',
                height: 30,
                width: this.props.style.chartWidth,
                backgroundColor: 0xFFFFFF,
                classNames: 'horizontal-canvas'
            }, onWidgetResize: this.props.addWidgetResizeHandler, unitController: this.props.unitController, layer: [this.getAxisLayer(), this.getAxisCursors()] });
    }
    getAxisLayer() {
        const timeAxisLayer = new time_graph_axis_1.TimeGraphAxis('timeGraphAxis', {
            color: this.props.style.naviBackgroundColor,
            lineColor: this.props.style.lineColor
        });
        return timeAxisLayer;
    }
    getAxisCursors() {
        return new time_graph_axis_cursors_1.TimeGraphAxisCursors('timeGraphAxisCursors', { color: this.props.style.cursorColor });
    }
}
exports.TimeAxisComponent = TimeAxisComponent;


/***/ }),

/***/ "../viewer-prototype/lib/browser/trace-viewer/components/utils/time-navigator-component.js":
/*!*************************************************************************************************!*\
  !*** ../viewer-prototype/lib/browser/trace-viewer/components/utils/time-navigator-component.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
const timegraph_container_component_1 = __webpack_require__(/*! ./timegraph-container-component */ "../viewer-prototype/lib/browser/trace-viewer/components/utils/timegraph-container-component.js");
const time_graph_navigator_1 = __webpack_require__(/*! timeline-chart/lib/layer/time-graph-navigator */ "../node_modules/timeline-chart/lib/layer/time-graph-navigator.js");
class TimeNavigatorComponent extends React.Component {
    render() {
        const navi = new time_graph_navigator_1.TimeGraphNavigator('timeGraphNavigator');
        return React.createElement(timegraph_container_component_1.ReactTimeGraphContainer, { id: 'time-navigator', options: {
                width: this.props.style.chartWidth,
                height: 10,
                id: 'time-navigator',
                backgroundColor: this.props.style.naviBackgroundColor,
                classNames: 'horizontal-canvas'
            }, onWidgetResize: this.props.addWidgetResizeHandler, unitController: this.props.unitController, layer: [navi] });
    }
}
exports.TimeNavigatorComponent = TimeNavigatorComponent;


/***/ }),

/***/ "../viewer-prototype/lib/browser/trace-viewer/components/utils/timegraph-container-component.js":
/*!******************************************************************************************************!*\
  !*** ../viewer-prototype/lib/browser/trace-viewer/components/utils/timegraph-container-component.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
const time_graph_container_1 = __webpack_require__(/*! timeline-chart/lib/time-graph-container */ "../node_modules/timeline-chart/lib/time-graph-container.js");
class ReactTimeGraphContainer extends React.Component {
    componentDidMount() {
        this.container = new time_graph_container_1.TimeGraphContainer(this.props.options, this.props.unitController, this.ref);
        this.props.layer.forEach(l => {
            this.container && this.container.addLayer(l);
        });
        this.props.onWidgetResize(() => {
            this.container && this.container.reInitCanvasSize(this.props.options.width);
        });
    }
    render() {
        /*return <canvas id="canvas" ref={ref => this.ref = ref || undefined} onScroll={ev => this.props.scrollHandler(this.ref, ev.persist()) } ></canvas>*/
        return React.createElement("canvas", { id: "canvas", height: "22940px", ref: ref => this.ref = ref || undefined, onScroll: ev => this.props.scrollHandler(this.ref, ev.persist()) });
    }
}
exports.ReactTimeGraphContainer = ReactTimeGraphContainer;


/***/ }),

/***/ "../viewer-prototype/lib/browser/trace-viewer/components/xy-output-component.js":
/*!**************************************************************************************!*\
  !*** ../viewer-prototype/lib/browser/trace-viewer/components/xy-output-component.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const abstract_tree_output_component_1 = __webpack_require__(/*! ./abstract-tree-output-component */ "../viewer-prototype/lib/browser/trace-viewer/components/abstract-tree-output-component.js");
const React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
const react_chartjs_2_1 = __webpack_require__(/*! react-chartjs-2 */ "../node_modules/react-chartjs-2/es/index.js");
const query_helper_1 = __webpack_require__(/*! tsp-typescript-client/lib/models/query/query-helper */ "../node_modules/tsp-typescript-client/lib/models/query/query-helper.js");
const responses_1 = __webpack_require__(/*! tsp-typescript-client/lib/models/response/responses */ "../node_modules/tsp-typescript-client/lib/models/response/responses.js");
const checkbox_component_1 = __webpack_require__(/*! ../components/utils/checkbox-component */ "../viewer-prototype/lib/browser/trace-viewer/components/utils/checkbox-component.js");
const Chart = __webpack_require__(/*! chart.js */ "../node_modules/chart.js/dist/Chart.js");
class XYOutputComponent extends abstract_tree_output_component_1.AbstractTreeOutputComponent {
    constructor(props) {
        super(props);
        this.currentColorIndex = 0;
        this.colorMap = new Map();
        this.state = {
            outputStatus: responses_1.ResponseStatus.RUNNING,
            selectedSeriesId: [],
            XYTree: [],
            checkedSeries: [],
            XYData: {}
        };
        this.afterChartDraw = this.afterChartDraw.bind(this);
        Chart.pluginService.register({
            afterDraw: (chart, easing) => {
                this.afterChartDraw(chart);
            }
        });
        this.lineChartRef = React.createRef();
    }
    componentDidMount() {
        this.waitAnalysisCompletion();
    }
    componentDidUpdate(prevProps, prevState) {
        const viewRangeChanged = this.props.viewRange !== prevProps.viewRange;
        const checkedSeriesChanged = this.state.checkedSeries !== prevState.checkedSeries;
        const needToUpdate = viewRangeChanged || checkedSeriesChanged || !this.state.XYData || !this.state.XYTree.length;
        if (needToUpdate && this.state.outputStatus === responses_1.ResponseStatus.COMPLETED) {
            this.updateTree();
            this.updateXY();
        }
        if (prevProps.style.chartWidth !== this.props.style.chartWidth) {
            this.updateXY();
        }
        this.lineChartRef.current.chartInstance.render();
    }
    renderTree() {
        this.onSeriesChecked = this.onSeriesChecked.bind(this);
        return React.createElement(React.Fragment, null, this.state.XYTree.map(entry => {
            return React.createElement(checkbox_component_1.CheckboxComponent, { key: entry.id, id: entry.id, name: entry.labels[0], checked: this.state.checkedSeries.find(id => entry.id === id) ? true : false, onChecked: this.onSeriesChecked });
        }));
    }
    renderChart() {
        const lineOptions = {
            responsive: true,
            elements: {
                point: { radius: 0 },
                line: { tension: 0 }
            },
            maintainAspectRatio: false,
            legend: { display: false },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 15,
                    bottom: 5
                }
            },
            scales: {
                xAxes: [{ id: 'time-axis', display: false }],
                yAxes: [{ display: false }]
            },
            animation: { duration: 0 },
        };
        // width={this.props.style.chartWidth}
        return React.createElement(React.Fragment, null, this.state.outputStatus === responses_1.ResponseStatus.COMPLETED ?
            React.createElement(react_chartjs_2_1.Line, { data: this.state.XYData, height: this.props.style.height, options: lineOptions, ref: this.lineChartRef }) :
            'Analysis running...');
    }
    afterChartDraw(chart) {
        const ctx = chart.ctx;
        const xScale = chart.scales['time-axis'];
        const ticks = xScale.ticks;
        if (ctx && this.props.selectionRange) {
            const valueStart = this.findNearestValue(this.props.selectionRange.getstart(), ticks);
            const valueEnd = this.findNearestValue(this.props.selectionRange.getEnd(), ticks);
            const pixelStart = xScale.getPixelForValue(this.props.selectionRange.getstart(), valueStart);
            const pixelEnd = xScale.getPixelForValue(this.props.selectionRange.getEnd(), valueEnd);
            ctx.save();
            ctx.lineWidth = 1;
            ctx.strokeStyle = '#259fd8';
            ctx.beginPath();
            ctx.moveTo(pixelStart, 0);
            ctx.lineTo(pixelStart, chart.chartArea.bottom);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(pixelEnd, 0);
            ctx.lineTo(pixelEnd, chart.chartArea.bottom);
            ctx.stroke();
            ctx.globalAlpha = 0.2;
            ctx.fillStyle = '#259fd8';
            ctx.fillRect(pixelStart, 0, pixelEnd - pixelStart, chart.chartArea.bottom);
            ctx.restore();
        }
    }
    findNearestValue(value, ticks) {
        let nearestIndex = undefined;
        ticks.forEach((tick, index) => {
            if (tick >= value) {
                if (!nearestIndex) {
                    nearestIndex = index;
                }
            }
        });
        return nearestIndex ? nearestIndex : 0;
    }
    onSeriesChecked(id) {
        const exist = this.state.checkedSeries.find(seriesId => {
            return seriesId === id;
        });
        if (exist) {
            this.setState(prevState => {
                const newList = prevState.checkedSeries.filter(series => {
                    return id !== series;
                });
                return {
                    checkedSeries: newList
                };
            });
        }
        else {
            this.setState(prevState => {
                return {
                    checkedSeries: prevState.checkedSeries.concat(id)
                };
            });
        }
    }
    // private async waitAnalysisCompletion() {
    //     const traceUUID = this.props.traceId;
    //     const tspClient = this.props.tspClient;
    //     const outPutId = this.props.outputDescriptor.id;
    //     // TODO Use the output descriptor to find out if the analysis is completed
    //     const xyTreeParameters = QueryHelper.selectionTimeQuery(
    //         QueryHelper.splitRangeIntoEqualParts(this.props.range.getstart(), this.props.range.getEnd(), 1120), []); // , [], { 'cpus': [] }
    //     let xyTreeResponse = (await tspClient.fetchXYTree<Entry, EntryHeader>(traceUUID, outPutId, xyTreeParameters)).getModel();
    //     while (xyTreeResponse.status === ResponseStatus.RUNNING) {
    //         xyTreeResponse = (await tspClient.fetchXYTree<Entry, EntryHeader>(traceUUID, outPutId, xyTreeParameters)).getModel();
    //     }
    //     this.setState({
    //         outputStatus: xyTreeResponse.status
    //     });
    // }
    async updateTree() {
        // TODO Remove cpus parameters at some point. This is very specific to Trace Compass server
        const xyTreeParameters = query_helper_1.QueryHelper.selectionTimeQuery(query_helper_1.QueryHelper.splitRangeIntoEqualParts(this.props.range.getstart(), this.props.range.getEnd(), 1120), []); // , [], { 'cpus': [] }
        const xyTreeResponse = (await this.props.tspClient.fetchXYTree(this.props.traceId, this.props.outputDescriptor.id, xyTreeParameters)).getModel();
        let treeModel = xyTreeResponse.model;
        this.buildTreeNodes(treeModel.entries);
    }
    async updateXY() {
        let start = 1332170682440133097;
        let end = 1332170682540133097;
        const viewRange = this.props.viewRange;
        if (viewRange) {
            start = viewRange.getstart();
            end = viewRange.getEnd();
        }
        // TODO Remove isCumulative parameters at some point. This is very specific to Trace Compass server
        const xyDataParameters = query_helper_1.QueryHelper.selectionTimeQuery(query_helper_1.QueryHelper.splitRangeIntoEqualParts(Math.trunc(start), Math.trunc(end), this.props.style.chartWidth), this.state.checkedSeries); // , [], { 'isCumulative': false }
        const xyDataResponse = (await this.props.tspClient.fetchXY(this.props.traceId, this.props.outputDescriptor.id, xyDataParameters)).getModel();
        // TODO Fix that, model is wrong, map are not working
        const cpuXY = xyDataResponse.model;
        const seriesObject = cpuXY.series;
        this.buildXYData(seriesObject);
    }
    buildXYData(seriesObj) {
        const dataSetArray = new Array();
        let xValues = [];
        Object.keys(seriesObj).forEach(key => {
            const series = seriesObj[key];
            const color = this.getSeriesColor(key);
            xValues = seriesObj[key].xValues;
            dataSetArray.push({
                label: key,
                fill: false,
                borderColor: color,
                borderWidth: 2,
                data: series.yValues
            });
        });
        const lineData = {
            labels: xValues,
            datasets: dataSetArray
        };
        this.setState({
            XYData: lineData
        });
    }
    buildTreeNodes(flatTree) {
        let tree = flatTree;
        // Not the right way
        if (flatTree.length > 1) {
            tree = flatTree.filter(entry => {
                return entry.parentId !== -1;
            });
        }
        this.setState({
            XYTree: tree
        });
    }
    getSeriesColor(key) {
        const colors = ['rgba(191, 33, 30, 1)', 'rgba(30, 56, 136, 1)', 'rgba(71, 168, 189, 1)', 'rgba(245, 230, 99, 1)', 'rgba(255, 173, 105, 1)',
            'rgba(216, 219, 226, 1)', 'rgba(212, 81, 19, 1)', 'rgba(187, 155, 176  , 1)', 'rgba(6, 214, 160, 1)', 'rgba(239, 71, 111, 1)'];
        let colorIndex = this.colorMap.get(key);
        if (colorIndex === undefined) {
            colorIndex = this.currentColorIndex % colors.length;
            this.colorMap.set(key, colorIndex);
            this.currentColorIndex++;
        }
        return colors[colorIndex];
    }
}
exports.XYOutputComponent = XYOutputComponent;


/***/ }),

/***/ "../viewer-prototype/lib/browser/trace-viewer/trace-viewer-contribution.js":
/*!*********************************************************************************!*\
  !*** ../viewer-prototype/lib/browser/trace-viewer/trace-viewer-contribution.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
const browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
const trace_viewer_1 = __webpack_require__(/*! ./trace-viewer */ "../viewer-prototype/lib/browser/trace-viewer/trace-viewer.js");
var TraceViewerCommands;
(function (TraceViewerCommands) {
    TraceViewerCommands.OPEN = {
        id: 'trace:open',
        label: 'Open Trace'
    };
})(TraceViewerCommands = exports.TraceViewerCommands || (exports.TraceViewerCommands = {}));
let TraceViewerContribution = class TraceViewerContribution extends browser_1.WidgetOpenHandler {
    constructor() {
        super(...arguments);
        this.id = trace_viewer_1.TraceViewerWidget.ID;
        this.label = 'Open trace';
    }
    createWidgetOptions(uri) {
        return {
            traceURI: uri.path.toString()
        };
    }
    registerCommands(registry) {
        registry.registerCommand(TraceViewerCommands.OPEN);
    }
    canHandle(uri) {
        return 100;
    }
};
TraceViewerContribution = __decorate([
    inversify_1.injectable()
], TraceViewerContribution);
exports.TraceViewerContribution = TraceViewerContribution;


/***/ }),

/***/ "../viewer-prototype/lib/browser/trace-viewer/trace-viewer-frontend-module.js":
/*!************************************************************************************!*\
  !*** ../viewer-prototype/lib/browser/trace-viewer/trace-viewer-frontend-module.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
const browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
const trace_viewer_1 = __webpack_require__(/*! ./trace-viewer */ "../viewer-prototype/lib/browser/trace-viewer/trace-viewer.js");
const trace_viewer_contribution_1 = __webpack_require__(/*! ./trace-viewer-contribution */ "../viewer-prototype/lib/browser/trace-viewer/trace-viewer-contribution.js");
const common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../node_modules/@theia/core/lib/common/index.js");
__webpack_require__(/*! ag-grid-community/dist/styles/ag-grid.css */ "../node_modules/ag-grid-community/dist/styles/ag-grid.css");
__webpack_require__(/*! ag-grid-community/dist/styles/ag-theme-balham-dark.css */ "../node_modules/ag-grid-community/dist/styles/ag-theme-balham-dark.css");
__webpack_require__(/*! react-grid-layout/css/styles.css */ "../node_modules/react-grid-layout/css/styles.css");
__webpack_require__(/*! react-resizable/css/styles.css */ "../node_modules/react-resizable/css/styles.css");
__webpack_require__(/*! ../../../src/browser/style/trace-viewer.css */ "../viewer-prototype/src/browser/style/trace-viewer.css");
__webpack_require__(/*! ../../../src/browser/style/trace-context-style.css */ "../viewer-prototype/src/browser/style/trace-context-style.css");
__webpack_require__(/*! ../../../src/browser/style/output-components-style.css */ "../viewer-prototype/src/browser/style/output-components-style.css");
__webpack_require__(/*! ../../../src/browser/style/trace-explorer.css */ "../viewer-prototype/src/browser/style/trace-explorer.css");
// import 'semantic-ui-css/semantic.min.css';
const trace_explorer_contribution_1 = __webpack_require__(/*! ../trace-explorer/trace-explorer-contribution */ "../viewer-prototype/lib/browser/trace-explorer/trace-explorer-contribution.js");
const trace_explorer_widget_1 = __webpack_require__(/*! ../trace-explorer/trace-explorer-widget */ "../viewer-prototype/lib/browser/trace-explorer/trace-explorer-widget.js");
const tsp_client_1 = __webpack_require__(/*! tsp-typescript-client/lib/protocol/tsp-client */ "../node_modules/tsp-typescript-client/lib/protocol/tsp-client.js");
const trace_manager_1 = __webpack_require__(/*! ../../common/trace-manager */ "../viewer-prototype/lib/common/trace-manager.js");
// import { TracePropertiesContribution } from '../trace-properties-view/trace-properties-view-contribution';
// import { TracePropertiesWidget, TRACE_PROPERTIES_ID } from '../trace-properties-view/trace-properties-view-widget';
exports.default = new inversify_1.ContainerModule(bind => {
    bind(tsp_client_1.TspClient).toDynamicValue(() => new tsp_client_1.TspClient('http://localhost:8080/tsp/api')).inSingletonScope();
    bind(trace_manager_1.TraceManager).toSelf().inSingletonScope();
    bind(trace_viewer_1.TraceViewerWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(context => ({
        id: trace_viewer_1.TraceViewerWidget.ID,
        async createWidget(options) {
            const child = new inversify_1.Container({ defaultScope: 'Singleton' });
            child.parent = context.container;
            child.bind(trace_viewer_1.TraceViewerWidgetOptions).toConstantValue(options);
            return child.get(trace_viewer_1.TraceViewerWidget);
        }
    })).inSingletonScope();
    bind(trace_viewer_contribution_1.TraceViewerContribution).toSelf().inSingletonScope();
    [common_1.CommandContribution, browser_1.OpenHandler, browser_1.FrontendApplicationContribution].forEach(serviceIdentifier => bind(serviceIdentifier).toService(trace_viewer_contribution_1.TraceViewerContribution));
    browser_1.bindViewContribution(bind, trace_explorer_contribution_1.TraceExplorerContribution);
    bind(trace_explorer_widget_1.TraceExplorerWidget).toSelf();
    // bind(FrontendApplicationContribution).toService(TraceExplorerContribution);
    bind(browser_1.WidgetFactory).toDynamicValue(context => ({
        id: trace_explorer_widget_1.TRACE_EXPLORER_ID,
        createWidget: () => context.container.get(trace_explorer_widget_1.TraceExplorerWidget)
    }));
    // bindViewContribution(bind, TracePropertiesContribution);
    // bind(TracePropertiesWidget).toSelf();
    // bind(WidgetFactory).toDynamicValue(context => ({
    //     id: TRACE_PROPERTIES_ID,
    //     createWidget: () => context.container.get<TracePropertiesWidget>(TracePropertiesWidget)
    // }));
});


/***/ }),

/***/ "../viewer-prototype/lib/browser/trace-viewer/trace-viewer.js":
/*!********************************************************************!*\
  !*** ../viewer-prototype/lib/browser/trace-viewer/trace-viewer.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
const browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../node_modules/@theia/core/lib/browser/index.js");
const react_widget_1 = __webpack_require__(/*! @theia/core/lib/browser/widgets/react-widget */ "../node_modules/@theia/core/lib/browser/widgets/react-widget.js");
const inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
const React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
const tsp_client_1 = __webpack_require__(/*! tsp-typescript-client/lib/protocol/tsp-client */ "../node_modules/tsp-typescript-client/lib/protocol/tsp-client.js");
const trace_manager_1 = __webpack_require__(/*! ../../common/trace-manager */ "../viewer-prototype/lib/common/trace-manager.js");
const trace_explorer_widget_1 = __webpack_require__(/*! ../trace-explorer/trace-explorer-widget */ "../viewer-prototype/lib/browser/trace-explorer/trace-explorer-widget.js");
const trace_context_component_1 = __webpack_require__(/*! ./components/trace-context-component */ "../viewer-prototype/lib/browser/trace-viewer/components/trace-context-component.js");
exports.TraceViewerWidgetOptions = Symbol('TraceViewerWidgetOptions');
let TraceViewerWidget = class TraceViewerWidget extends react_widget_1.ReactWidget {
    constructor(options, traceManager, tspClient, statusBar) {
        super();
        this.options = options;
        this.traceManager = traceManager;
        this.tspClient = tspClient;
        this.statusBar = statusBar;
        this.outputDescriptors = [];
        this.resizeHandlers = [];
        this.addResizeHandler = (h) => {
            this.resizeHandlers.push(h);
        };
        this.uri = new core_1.Path(this.options.traceURI);
        this.id = 'theia-traceOpen';
        this.title.label = 'Trace: ' + this.uri.base;
        this.title.closable = true;
        this.addClass('theia-trace-open');
        this.toDispose.push(trace_explorer_widget_1.TraceExplorerWidget.outputAddedSignal(output => this.onOutputAdded(output)));
        this.initialize();
    }
    async initialize() {
        const trace = await this.traceManager.openTrace(this.uri, this.uri.name);
        if (trace) {
            this.openedTrace = trace;
        }
        this.update();
    }
    onCloseRequest(msg) {
        if (this.openedTrace) {
            this.traceManager.closeTrace(this.openedTrace.UUID);
        }
        this.statusBar.removeElement('time-selection-range');
        super.onCloseRequest(msg);
    }
    onResize() {
        this.resizeHandlers.forEach(h => h());
    }
    render() {
        this.onOutputRemoved = this.onOutputRemoved.bind(this);
        return React.createElement("div", { className: 'trace-viewer-container' }, this.openedTrace ? React.createElement(trace_context_component_1.TraceContextComponent, { trace: this.openedTrace, tspClient: this.tspClient, outputs: this.outputDescriptors, onOutputRemove: this.onOutputRemoved, statusBar: this.statusBar, addResizeHandler: this.addResizeHandler }) : 'Trace is loading...');
    }
    onOutputAdded(payload) {
        if (this.openedTrace && payload.getTrace().UUID === this.openedTrace.UUID) {
            const exist = this.outputDescriptors.find(output => { return output.id === payload.getOutputDescriptor().id; });
            if (!exist) {
                this.outputDescriptors.push(payload.getOutputDescriptor());
                this.update();
            }
        }
    }
    onOutputRemoved(outputId) {
        const outputToKeep = this.outputDescriptors.filter(output => {
            return output.id !== outputId;
        });
        this.outputDescriptors = outputToKeep;
        this.update();
    }
};
TraceViewerWidget.ID = 'trace-viewer';
TraceViewerWidget.LABEL = 'Trace Viewer';
TraceViewerWidget = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(exports.TraceViewerWidgetOptions)),
    __param(1, inversify_1.inject(trace_manager_1.TraceManager)),
    __param(2, inversify_1.inject(tsp_client_1.TspClient)),
    __param(3, inversify_1.inject(browser_1.StatusBar)),
    __metadata("design:paramtypes", [Object, trace_manager_1.TraceManager,
        tsp_client_1.TspClient, Object])
], TraceViewerWidget);
exports.TraceViewerWidget = TraceViewerWidget;


/***/ }),

/***/ "../viewer-prototype/lib/common/signal-manager.js":
/*!********************************************************!*\
  !*** ../viewer-prototype/lib/common/signal-manager.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
class SignalManager {
    constructor() {
        // TODO only temporary
        this.tooltipEmitter = new core_1.Emitter();
        this.tooltipSignal = this.tooltipEmitter.event;
        // nothing to do
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new SignalManager();
        }
        return this.instance;
    }
    fireTooltipSignal(payload) {
        this.tooltipEmitter.fire(payload);
    }
}
exports.SignalManager = SignalManager;


/***/ }),

/***/ "../viewer-prototype/lib/common/trace-manager.js":
/*!*******************************************************!*\
  !*** ../viewer-prototype/lib/common/trace-manager.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @theia/core */ "../node_modules/@theia/core/lib/common/index.js");
const tsp_client_1 = __webpack_require__(/*! tsp-typescript-client/lib/protocol/tsp-client */ "../node_modules/tsp-typescript-client/lib/protocol/tsp-client.js");
const query_1 = __webpack_require__(/*! tsp-typescript-client/lib/models/query/query */ "../node_modules/tsp-typescript-client/lib/models/query/query.js");
const inversify_1 = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/inversify.js");
let TraceManager = class TraceManager {
    constructor(tspClient) {
        this.tspClient = tspClient;
        // Open signal
        this.traceOpenedEmitter = new core_1.Emitter();
        this.traceOpenedSignal = this.traceOpenedEmitter.event;
        // Close signal
        this.traceClosedEmitter = new core_1.Emitter();
        this.traceClosedSignal = this.traceClosedEmitter.event;
        this.fOpenTraces = new Map();
    }
    ;
    /**
     * Get an array of opened traces
     * @returns Array of Trace
     */
    async getOpenedTraces() {
        const openedTraces = new Array();
        // Look on the server for opened trace
        const tracesResponse = await this.tspClient.fetchTraces();
        if (tracesResponse.isOk()) {
            openedTraces.push(...tracesResponse.getModel());
        }
        return openedTraces;
    }
    /**
     * Get a specific trace information
     * @param traceUUID Trace UUID
     */
    async getTrace(traceUUID) {
        // Check if the trace is in "cache"
        let trace = this.fOpenTraces.get(traceUUID);
        // If the trace is undefined, check on the server
        if (!trace) {
            const traceResponse = await this.tspClient.fetchTrace(traceUUID);
            if (traceResponse.isOk()) {
                trace = traceResponse.getModel();
            }
        }
        return trace;
    }
    /**
     * Get an array of OutputDescriptor for a given trace
     * @param traceUUID Trace UUID
     */
    async getAvailableOutputs(traceUUID) {
        // Check if the trace is opened
        const trace = this.fOpenTraces.get(traceUUID);
        if (trace) {
            const outputsResponse = await this.tspClient.experimentOutputs(trace.UUID);
            return outputsResponse.getModel();
        }
        return undefined;
    }
    /**
     * Open a given trace on the server
     * @param traceURI Trace URI to open
     * @param traceName Optional name for the trace. If not specified the URI name is used
     * @returns The opened trace
     */
    async openTrace(traceURI, traceName) {
        let name = traceURI.name;
        if (traceName) {
            name = traceName;
        }
        const tracePath = traceURI.toString();
        const traceResponse = await this.tspClient.openTrace(new query_1.Query({
            'name': name,
            'uri': tracePath
        }));
        const trace = traceResponse.getModel();
        if (trace && (traceResponse.isOk() || traceResponse.getStatusCode() === 409)) {
            this.addTrace(trace);
            this.traceOpenedEmitter.fire(trace);
            return trace;
        }
        return undefined;
    }
    /**
     * Update the trace with the latest info from the server.
     * @param traceName Trace name to update
     * @returns The updated trace or undefined if the trace was not open previously
     */
    async updateTrace(traceUUID) {
        const currentTrace = this.fOpenTraces.get(traceUUID);
        if (currentTrace) {
            const traceResponse = await this.tspClient.fetchTrace(currentTrace.UUID);
            const trace = traceResponse.getModel();
            if (trace && traceResponse.isOk) {
                this.fOpenTraces.set(traceUUID, trace);
                return trace;
            }
        }
        return undefined;
    }
    /**
     * Close the given on the server
     * @param traceUUID Trace UUID
     */
    async closeTrace(traceUUID) {
        const traceToClose = this.fOpenTraces.get(traceUUID);
        if (traceToClose) {
            await this.tspClient.deleteTrace(traceUUID);
            const deletedTrace = this.removeTrace(traceUUID);
            if (deletedTrace) {
                this.traceClosedEmitter.fire(deletedTrace);
            }
        }
    }
    addTrace(trace) {
        this.fOpenTraces.set(trace.UUID, trace);
    }
    removeTrace(traceUUID) {
        const deletedTrace = this.fOpenTraces.get(traceUUID);
        this.fOpenTraces.delete(traceUUID);
        return deletedTrace;
    }
};
TraceManager = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(tsp_client_1.TspClient)),
    __metadata("design:paramtypes", [tsp_client_1.TspClient])
], TraceManager);
exports.TraceManager = TraceManager;


/***/ }),

/***/ "../viewer-prototype/lib/common/utils/time-range.js":
/*!**********************************************************!*\
  !*** ../viewer-prototype/lib/common/utils/time-range.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class TimeRange {
    /**
     * Constructor.
     * @param start Range start time
     * @param end Range end time
     * @param offset Time offset, if this is defined the start and end time should be relative to this value
     */
    constructor(start, end, offset) {
        this.start = start;
        this.end = end;
        this.offset = offset;
    }
    /**
     * Get the range start time.
     * If an offset is present the return value is start + offset.
     */
    getstart() {
        if (this.offset !== undefined) {
            return this.start + this.offset;
        }
        return this.start;
    }
    /**
     * Get the range end time.
     * If an offset is present the return value is end + offset.
     */
    getEnd() {
        if (this.offset !== undefined) {
            return this.end + this.offset;
        }
        return this.end;
    }
    /**
     * Get range duration
     */
    getDuration() {
        return this.end - this.start;
    }
    /**
     * Return the time offset
     */
    getOffset() {
        return this.offset;
    }
}
exports.TimeRange = TimeRange;


/***/ }),

/***/ "../viewer-prototype/src/browser/style/chart-line-solid.svg":
/*!******************************************************************!*\
  !*** ../viewer-prototype/src/browser/style/chart-line-solid.svg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJjaGFydC1saW5lIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtY2hhcnQtbGluZSBmYS13LTE2IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTQ5NiAzODRINjRWODBjMC04Ljg0LTcuMTYtMTYtMTYtMTZIMTZDNy4xNiA2NCAwIDcxLjE2IDAgODB2MzM2YzAgMTcuNjcgMTQuMzMgMzIgMzIgMzJoNDY0YzguODQgMCAxNi03LjE2IDE2LTE2di0zMmMwLTguODQtNy4xNi0xNi0xNi0xNnpNNDY0IDk2SDM0NS45NGMtMjEuMzggMC0zMi4wOSAyNS44NS0xNi45NyA0MC45N2wzMi40IDMyLjRMMjg4IDI0Mi43NWwtNzMuMzctNzMuMzdjLTEyLjUtMTIuNS0zMi43Ni0xMi41LTQ1LjI1IDBsLTY4LjY5IDY4LjY5Yy02LjI1IDYuMjUtNi4yNSAxNi4zOCAwIDIyLjYzbDIyLjYyIDIyLjYyYzYuMjUgNi4yNSAxNi4zOCA2LjI1IDIyLjYzIDBMMTkyIDIzNy4yNWw3My4zNyA3My4zN2MxMi41IDEyLjUgMzIuNzYgMTIuNSA0NS4yNSAwbDk2LTk2IDMyLjQgMzIuNGMxNS4xMiAxNS4xMiA0MC45NyA0LjQxIDQwLjk3LTE2Ljk3VjExMmMuMDEtOC44NC03LjE1LTE2LTE1Ljk5LTE2eiI+PC9wYXRoPjwvc3ZnPg=="

/***/ }),

/***/ "../viewer-prototype/src/browser/style/output-components-style.css":
/*!*************************************************************************!*\
  !*** ../viewer-prototype/src/browser/style/output-components-style.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!./output-components-style.css */ "../node_modules/css-loader/index.js!../viewer-prototype/src/browser/style/output-components-style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../viewer-prototype/src/browser/style/trace-context-style.css":
/*!*********************************************************************!*\
  !*** ../viewer-prototype/src/browser/style/trace-context-style.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!./trace-context-style.css */ "../node_modules/css-loader/index.js!../viewer-prototype/src/browser/style/trace-context-style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../viewer-prototype/src/browser/style/trace-explorer.css":
/*!****************************************************************!*\
  !*** ../viewer-prototype/src/browser/style/trace-explorer.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!./trace-explorer.css */ "../node_modules/css-loader/index.js!../viewer-prototype/src/browser/style/trace-explorer.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../viewer-prototype/src/browser/style/trace-viewer.css":
/*!**************************************************************!*\
  !*** ../viewer-prototype/src/browser/style/trace-viewer.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!./trace-viewer.css */ "../node_modules/css-loader/index.js!../viewer-prototype/src/browser/style/trace-viewer.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);
//# sourceMappingURL=26.bundle.js.map