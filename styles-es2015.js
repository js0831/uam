(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--14-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--14-3!./node_modules/sass-loader/dist/cjs.js??ref--14-4!./src/styles.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n.section {\n  padding: 0.5rem;\n  background-color: #fff;\n  border-radius: 0.25rem;\n  margin-bottom: 0.5rem;\n}\n.table-list {\n  padding: 0.5rem;\n  background-color: #fff;\n  border-radius: 0.25rem;\n}\n.table-list__buttons {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 0;\n  gap: 0.5rem;\n}\n.table-list__buttons label {\n  padding: 0;\n  margin: 0;\n  font-size: 1.25rem;\n}\n.table-list__actions {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.5rem;\n  color: blue;\n  font-size: 0.8rem;\n}\n.table-list__actions a {\n  cursor: pointer;\n}\n.table-list__actions a:hover {\n  text-decoration: underline !important;\n}\n.large .modal-dialog {\n  width: 55rem;\n  max-width: none;\n}\n.large .modal-body {\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.fform {\n  display: flex;\n  width: 100%;\n  gap: 0.5rem;\n}\n.fform--inline {\n  align-items: flex-start;\n}\n.fform--inline .form-group {\n  flex: 1;\n  display: flex;\n  gap: 0.5rem;\n  align-items: flex-start;\n}\n.fform--inline .form-group label {\n  margin: 0;\n}\n.fform__column {\n  flex: 1;\n}\n.fform .form-group {\n  margin-bottom: 0.25rem;\n}\n.fform .form-group.flex-2 {\n  flex: 2;\n}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,8EAAA;AACA;EACI,eAAA;EACA,sBAAA;EACA,sBAAA;EACA,qBAAA;AACJ;AAEA;EACI,eAAA;EACA,sBAAA;EACA,sBAAA;AACJ;AACI;EACI,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,iBAAA;EACA,WAAA;AACR;AACQ;EACI,UAAA;EACA,SAAA;EACA,kBAAA;AACZ;AAGI;EACI,aAAA;EACA,mBAAA;EACA,yBAAA;EACA,WAAA;EACA,WAAA;EACA,iBAAA;AADR;AAGQ;EACI,eAAA;AADZ;AAGY;EACI,qCAAA;AADhB;AAOA;EACI,YAAA;EACA,eAAA;AAJJ;AAOA;EACI,gBAAA;EACA,gBAAA;AAJJ;AAOA;EACI,aAAA;EACA,WAAA;EACA,WAAA;AAJJ;AAMI;EACI,uBAAA;AAJR;AAKQ;EACI,OAAA;EACA,aAAA;EACA,WAAA;EACA,uBAAA;AAHZ;AAKY;EACI,SAAA;AAHhB;AAQI;EACI,OAAA;AANR;AASI;EACI,sBAAA;AAPR;AASQ;EACI,OAAA;AAPZ","file":"styles.scss","sourcesContent":["/* You can add global styles to this file, and also import other style files */\r\n.section{\r\n    padding:.5rem;\r\n    background-color:#fff;\r\n    border-radius: .25rem;\r\n    margin-bottom: .5rem;\r\n}\r\n\r\n.table-list {\r\n    padding:.5rem;\r\n    background-color:#fff;\r\n    border-radius: .25rem;\r\n\r\n    &__buttons{\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n        padding: 0.5rem 0;\r\n        gap: .5rem;\r\n\r\n        label{\r\n            padding: 0;\r\n            margin: 0;\r\n            font-size: 1.25rem;\r\n        }\r\n    }\r\n\r\n    &__actions{\r\n        display:flex;\r\n        align-items: center;\r\n        justify-content: flex-end;\r\n        gap: .5rem;\r\n        color: blue;\r\n        font-size: .8rem;\r\n        \r\n        a{\r\n            cursor: pointer;\r\n            \r\n            &:hover{\r\n                text-decoration:underline !important;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n.large .modal-dialog{\r\n    width: 55rem;\r\n    max-width: none;\r\n}\r\n\r\n.large .modal-body{\r\n    max-height: 70vh;\r\n    overflow-y: auto;\r\n}\r\n\r\n.fform{\r\n    display:flex;\r\n    width: 100%;\r\n    gap: .5rem;\r\n\r\n    &--inline{\r\n        align-items: flex-start;\r\n        .form-group{\r\n            flex:1;\r\n            display:flex;\r\n            gap: .5rem;\r\n            align-items: flex-start;\r\n\r\n            label{\r\n                margin: 0;\r\n            }\r\n        }\r\n    }\r\n\r\n    &__column{\r\n        flex:1;\r\n    }\r\n\r\n    .form-group{\r\n        margin-bottom: 0.25rem;\r\n\r\n        &.flex-2{\r\n            flex:2;\r\n        }\r\n    }\r\n}\r\n\r\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--14-1!../node_modules/postcss-loader/src??embedded!../node_modules/resolve-url-loader??ref--14-3!../node_modules/sass-loader/dist/cjs.js??ref--14-4!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\81254880\Documents\uam\src\styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map