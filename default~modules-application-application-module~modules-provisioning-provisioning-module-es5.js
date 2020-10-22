(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-application-application-module~modules-provisioning-provisioning-module"], {
    /***/
    "./node_modules/tslib/tslib.es6.js":
    /*!*****************************************!*\
      !*** ./node_modules/tslib/tslib.es6.js ***!
      \*****************************************/

    /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

    /***/
    function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__extends", function () {
        return __extends;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__assign", function () {
        return _assign;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__rest", function () {
        return __rest;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__decorate", function () {
        return __decorate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__param", function () {
        return __param;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__metadata", function () {
        return __metadata;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
        return __awaiter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__generator", function () {
        return __generator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
        return __createBinding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
        return __exportStar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__values", function () {
        return __values;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__read", function () {
        return __read;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__spread", function () {
        return __spread;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
        return __spreadArrays;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__await", function () {
        return __await;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
        return __asyncGenerator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
        return __asyncDelegator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
        return __asyncValues;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
        return __makeTemplateObject;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__importStar", function () {
        return __importStar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
        return __importDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
        return __classPrivateFieldGet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
        return __classPrivateFieldSet;
      });
      /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
      
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
      
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */

      /* global Reflect, Promise */


      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      function __extends(d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      }

      var _assign = function __assign() {
        _assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];

            for (var p in s) {
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
          }

          return t;
        };

        return _assign.apply(this, arguments);
      };

      function __rest(s, e) {
        var t = {};

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
        }

        if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
        }
        return t;
      }

      function __decorate(decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }

      function __param(paramIndex, decorator) {
        return function (target, key) {
          decorator(target, key, paramIndex);
        };
      }

      function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
      }

      function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      }

      function __generator(thisArg, body) {
        var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
            f,
            y,
            t,
            g;
        return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
          return this;
        }), g;

        function verb(n) {
          return function (v) {
            return step([n, v]);
          };
        }

        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");

          while (_) {
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];

              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;

                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };

                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;

                case 7:
                  op = _.ops.pop();

                  _.trys.pop();

                  continue;

                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }

                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }

                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }

                  if (t && _.label < t[2]) {
                    _.label = t[2];

                    _.ops.push(op);

                    break;
                  }

                  if (t[2]) _.ops.pop();

                  _.trys.pop();

                  continue;
              }

              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          }

          if (op[0] & 5) throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      }

      var __createBinding = Object.create ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function get() {
            return m[k];
          }
        });
      } : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      };

      function __exportStar(m, o) {
        for (var p in m) {
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
        }
      }

      function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator,
            m = s && o[s],
            i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
          next: function next() {
            if (o && i >= o.length) o = void 0;
            return {
              value: o && o[i++],
              done: !o
            };
          }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }

      function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o),
            r,
            ar = [],
            e;

        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
          }
        } catch (error) {
          e = {
            error: error
          };
        } finally {
          try {
            if (r && !r.done && (m = i["return"])) m.call(i);
          } finally {
            if (e) throw e.error;
          }
        }

        return ar;
      }

      function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++) {
          ar = ar.concat(__read(arguments[i]));
        }

        return ar;
      }

      function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
          s += arguments[i].length;
        }

        for (var r = Array(s), k = 0, i = 0; i < il; i++) {
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
            r[k] = a[j];
          }
        }

        return r;
      }

      ;

      function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
      }

      function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []),
            i,
            q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i;

        function verb(n) {
          if (g[n]) i[n] = function (v) {
            return new Promise(function (a, b) {
              q.push([n, v, a, b]) > 1 || resume(n, v);
            });
          };
        }

        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }

        function step(r) {
          r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }

        function fulfill(value) {
          resume("next", value);
        }

        function reject(value) {
          resume("throw", value);
        }

        function settle(f, v) {
          if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
        }
      }

      function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function () {
          return this;
        }, i;

        function verb(n, f) {
          i[n] = o[n] ? function (v) {
            return (p = !p) ? {
              value: __await(o[n](v)),
              done: n === "return"
            } : f ? f(v) : v;
          } : f;
        }
      }

      function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator],
            i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i);

        function verb(n) {
          i[n] = o[n] && function (v) {
            return new Promise(function (resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }

        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function (v) {
            resolve({
              value: v,
              done: d
            });
          }, reject);
        }
      }

      function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", {
            value: raw
          });
        } else {
          cooked.raw = raw;
        }

        return cooked;
      }

      ;

      var __setModuleDefault = Object.create ? function (o, v) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v
        });
      } : function (o, v) {
        o["default"] = v;
      };

      function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) {
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }

        __setModuleDefault(result, mod);

        return result;
      }

      function __importDefault(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      }

      function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance");
        }

        return privateMap.get(receiver);
      }

      function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance");
        }

        privateMap.set(receiver, value);
        return value;
      }
      /***/

    },

    /***/
    "./src/app/shared/components/language-field/language-field.component.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/shared/components/language-field/language-field.component.ts ***!
      \******************************************************************************/

    /*! exports provided: LanguageFieldComponent */

    /***/
    function srcAppSharedComponentsLanguageFieldLanguageFieldComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguageFieldComponent", function () {
        return LanguageFieldComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/api.service */
      "./src/app/shared/services/api.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function LanguageFieldComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 4);
        }
      }

      function LanguageFieldComponent_div_6_form_7_ng_container_2_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var lang_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", lang_r5.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lang_r5.langCode);
        }
      }

      function LanguageFieldComponent_div_6_form_7_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LanguageFieldComponent_div_6_form_7_ng_container_2_option_1_Template, 2, 2, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var lang_r5 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.isLanguageAdded(lang_r5.id));
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      function LanguageFieldComponent_div_6_form_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LanguageFieldComponent_div_6_form_7_ng_container_2_Template, 2, 1, "ng-container", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LanguageFieldComponent_div_6_form_7_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r8.add();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.sourceForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r2.isInvalid("language")));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.languages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r2.isInvalid("value")));
        }
      }

      function LanguageFieldComponent_div_6_tr_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LanguageFieldComponent_div_6_tr_17_Template_a_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var i_r11 = ctx.index;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r12["delete"](i_r11);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var text_r10 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.getLanguageName(text_r10.value.language), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", text_r10.value.value, " ");
        }
      }

      function LanguageFieldComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LanguageFieldComponent_div_6_Template_span_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LanguageFieldComponent_div_6_form_7_Template, 6, 8, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Language ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Value ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LanguageFieldComponent_div_6_tr_17_Template, 8, 2, "tr", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.sourceForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.translationsFormArray.controls);
        }
      }

      var LanguageFieldComponent = /*#__PURE__*/function () {
        function LanguageFieldComponent(fb, api) {
          _classCallCheck(this, LanguageFieldComponent);

          this.fb = fb;
          this.api = api;
          this.title = '';
          this.displayValue = '';
          this.isEdit = false;
          this.languages = [{
            id: 1,
            langCode: 'en'
          }, {
            id: 2,
            langCode: 'zh_HK'
          }];
        }

        _createClass(LanguageFieldComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.sourceForm = this.fb.group({
              language: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              value: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.form.addControl('translations', this.fb.array([], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required));
            this.loadDisplayText();

            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].staticData) {
              return;
            }

            this.languages = [];
            this.api.list('language/getAllLanguage').subscribe(function (x) {
              _this.languages = x.languages;
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.loadDisplayText();
            this.isEdit = false;
          }
        }, {
          key: "loadDisplayText",
          value: function loadDisplayText() {
            var _this2 = this;

            setTimeout(function (xx) {
              var values = _this2.translationsFormArray.value;

              if (!values || values.length === 0) {
                _this2.displayValue = '';
                return;
              }

              var found = values.filter(function (x) {
                return x.language === src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].language.toString();
              });
              var fallback = found.length === 0 ? values[0].value : found[0].value;
              _this2.displayValue = fallback;
            }, 100);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.form.removeControl('translations');
          }
        }, {
          key: "isInvalid",
          value: function isInvalid(name) {
            var control = this.sourceForm.get(name);
            return control.invalid && control.touched;
          }
        }, {
          key: "add",
          value: function add() {
            if (this.sourceForm.invalid) {
              return;
            }

            var source = this.sourceForm.value;
            var group = this.fb.group({
              language: [source.language, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              value: [source.value, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.translationsFormArray.push(group);
            this.sourceForm.reset();
          }
        }, {
          key: "isLanguageAdded",
          value: function isLanguageAdded(id) {
            var addedValues = this.form.get('translations').value;
            return addedValues.filter(function (x) {
              return x.language === id.toString();
            }).length > 0;
          }
        }, {
          key: "getLanguageName",
          value: function getLanguageName(id) {
            var found = this.languages.filter(function (x) {
              return x.id.toString() === id;
            });
            return found.length > 0 ? found[0].langCode : '';
          }
        }, {
          key: "delete",
          value: function _delete(index) {
            this.translationsFormArray.removeAt(index);
          }
        }, {
          key: "edit",
          value: function edit() {
            this.isEdit = true;
          }
        }, {
          key: "translationsFormArray",
          get: function get() {
            return this.form.get('translations');
          }
        }]);

        return LanguageFieldComponent;
      }();

      LanguageFieldComponent.ɵfac = function LanguageFieldComponent_Factory(t) {
        return new (t || LanguageFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]));
      };

      LanguageFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LanguageFieldComponent,
        selectors: [["app-language-field"]],
        inputs: {
          title: "title",
          form: "form"
        },
        decls: 7,
        vars: 4,
        consts: [[1, "display"], [3, "click"], ["class", "blocker", 4, "ngIf"], ["class", "language", 4, "ngIf"], [1, "blocker"], [1, "language"], [1, "title"], ["class", "language__input", 3, "formGroup", 4, "ngIf"], [1, "language__values", 3, "formGroup"], ["formArrayName", "translations"], [4, "ngFor", "ngForOf"], [1, "language__input", 3, "formGroup"], ["formControlName", "language", 1, "form-control", "form-control-sm", 3, "ngClass"], ["type", "text", "formControlName", "value", 1, "form-control", "form-control-sm", 3, "ngClass"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [3, "value", 4, "ngIf"], [3, "value"]],
        template: function LanguageFieldComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LanguageFieldComponent_Template_a_click_3_listener() {
              return ctx.edit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LanguageFieldComponent_div_5_Template, 1, 0, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LanguageFieldComponent_div_6_Template, 18, 4, "div", 3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.displayValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.displayValue ? "Edit" : "Add " + ctx.title, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEdit);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEdit);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
        styles: [".title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 1rem;\n  border-bottom: 1px solid #eee;\n  height: 2.5rem;\n}\n.title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n.display[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0 0.5rem;\n}\n.display[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.display[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  cursor: pointer;\n  color: #fff;\n  background: #ff5a29;\n  border-radius: 1rem;\n  padding: 0 0.5rem;\n  height: 1.25rem;\n  min-width: 2.25rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 0.5rem;\n}\n.blocker[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(51, 51, 51, 0.8);\n  z-index: 1;\n}\n.language[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: fixed;\n  top: 7rem;\n  left: 0;\n  background: #fff;\n  border-radius: 0.25rem;\n  right: 0;\n  width: 25rem;\n  margin: auto;\n}\n.language[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.language__input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.25rem;\n  margin-bottom: 0.25rem;\n}\n.language__input[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 10rem;\n}\n.language__values[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.language__values[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.language__values[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n  font-weight: 500;\n}\n.language__values[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.25rem;\n}\n.language__values[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  width: 6.25rem;\n}\n.language__values[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n}\n.language__values[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   a[_ngcontent-%COMP%] {\n  color: blue;\n  cursor: pointer;\n  font-size: 0.8rem;\n}\n.language__values[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed #d2d2d2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbGFuZ3VhZ2UtZmllbGQvbGFuZ3VhZ2UtZmllbGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtBQXZCSjtBQXlCSTtFQUNJLFNBQUE7QUF2QlI7QUEwQkk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUF4QlI7QUE0QkE7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0FBekJKO0FBMEJJO0VBQ0ksZ0JBQUE7QUF4QlI7QUEwQkk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUF4QlI7QUE0QkE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0EsVUFBQTtBQXpCSjtBQTRCQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtFQUVBLHNCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBMUJKO0FBNEJJO0VBQ0ksYUFBQTtBQTFCUjtBQThCSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBNUJSO0FBOEJRO0VBQ0ksWUFBQTtBQTVCWjtBQWdDSTtFQUNJLGlCQUFBO0FBOUJSO0FBZ0NRO0VBQ0ksV0FBQTtBQTlCWjtBQWdDWTtFQUNJLGdCQUFBO0FBOUJoQjtBQWdDWTtFQUNJLGdCQUFBO0FBOUJoQjtBQWdDZ0I7RUFDSSxjQUFBO0FBOUJwQjtBQWlDZ0I7RUFDSSxpQkFBQTtBQS9CcEI7QUFpQ29CO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQS9CeEI7QUFvQ1k7RUFDSSxpQ0FBQTtBQWxDaEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sYW5ndWFnZS1maWVsZC9sYW5ndWFnZS1maWVsZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gICAgLy8gZGlzcGxheTogYmxvY2s7XHJcbiAgICAvLyBwYWRkaW5nOiAuNXJlbTtcclxuICAgIC8vIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcblxyXG4gICAgLy8gcG9zaXRpb246IGZpeGVkO1xyXG4gICAgLy8gdG9wOiA1cmVtO1xyXG4gICAgLy8gbGVmdDogMDtcclxuICAgIC8vIHJpZ2h0OiAwO1xyXG4gICAgLy8gbWFyZ2luOiBhdXRvO1xyXG4gICAgLy8gd2lkdGg6IDI1cmVtO1xyXG5cclxuICAgIC8vICY6OmJlZm9yZXtcclxuICAgIC8vICAgICBjb250ZW50OicnO1xyXG4gICAgLy8gICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIC8vICAgICB0b3A6MDtcclxuICAgIC8vICAgICBsZWZ0OjA7XHJcbiAgICAvLyAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNTEgNTEgNTEgLyAwLjgpO1xyXG4gICAgLy8gICAgIGhlaWdodDoxMDAlO1xyXG4gICAgLy8gICAgIHdpZHRoOjEwMCU7XHJcbiAgICAvLyB9XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgaGVpZ2h0OiAyLjVyZW07XHJcblxyXG4gICAgbGFiZWx7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW57XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZGlzcGxheXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDAgLjVyZW07XHJcbiAgICBsYWJlbHtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgYXtcclxuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmNWEyOTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgLjVyZW07XHJcbiAgICAgICAgaGVpZ2h0OiAxLjI1cmVtO1xyXG4gICAgICAgIG1pbi13aWR0aDogMi4yNXJlbTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcclxuICAgIH1cclxufVxyXG5cclxuLmJsb2NrZXJ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTEgNTEgNTEgLyAwLjgpO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmxhbmd1YWdle1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogN3JlbTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgLy8gcGFkZGluZzogMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDI1cmVtO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgID4gZGl2e1xyXG4gICAgICAgIHBhZGRpbmc6MXJlbTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgJl9faW5wdXR7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGdhcDogLjI1cmVtOyAgICBcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAuMjVyZW07XHJcblxyXG4gICAgICAgIHNlbGVjdHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwcmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX192YWx1ZXN7XHJcbiAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcclxuXHJcbiAgICAgICAgdGFibGV7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcblxyXG4gICAgICAgICAgICB0cjpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGR7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAuMjVyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNi4yNXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOmJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0cntcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2QyZDJkMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LanguageFieldComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-language-field',
            templateUrl: './language-field.component.html',
            styleUrls: ['./language-field.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }];
        }, {
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/components/modal/modal.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/shared/components/modal/modal.component.ts ***!
      \************************************************************/

    /*! exports provided: ModalComponent */

    /***/
    function srcAppSharedComponentsModalModalComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
        return ModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function ModalComponent_div_0_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_div_0_div_3_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r3.close.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.title);
        }
      }

      function ModalComponent_div_0_div_6_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_div_0_div_6_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r7.submit.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.saveBtn);
        }
      }

      function ModalComponent_div_0_div_6_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_div_0_div_6_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r9.close.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.closeBtn);
        }
      }

      function ModalComponent_div_0_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModalComponent_div_0_div_6_button_1_Template, 2, 1, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ModalComponent_div_0_div_6_button_2_Template, 2, 1, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.saveBtn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.closeBtn);
        }
      }

      function ModalComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_div_0_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.close.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_div_0_Template_div_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ModalComponent_div_0_div_3_Template, 6, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ModalComponent_div_0_div_6_Template, 3, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.header);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.footer);
        }
      }

      var _c0 = ["*"];

      var ModalComponent = function ModalComponent() {
        _classCallCheck(this, ModalComponent);

        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.show = false;
        this.saveBtn = '';
        this.closeBtn = '';
        this.title = '';
        this.footer = true;
        this.header = true;
      };

      ModalComponent.ɵfac = function ModalComponent_Factory(t) {
        return new (t || ModalComponent)();
      };

      ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ModalComponent,
        selectors: [["app-modal"]],
        inputs: {
          show: "show",
          saveBtn: "saveBtn",
          closeBtn: "closeBtn",
          title: "title",
          footer: "footer",
          header: "header"
        },
        outputs: {
          close: "close",
          submit: "submit"
        },
        ngContentSelectors: _c0,
        decls: 1,
        vars: 1,
        consts: [["class", "modal fade show", "style", "display: block; background: #00000080;", "tabindex", "-1", "role", "dialog", 3, "click", 4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", "show", 2, "display", "block", "background", "#00000080", 3, "click"], ["role", "document", 1, "modal-dialog", 3, "click"], [1, "modal-content"], ["class", "modal-header", 4, "ngIf"], [1, "modal-body"], ["class", "modal-footer", 4, "ngIf"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-footer"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-secondary", "data-dismiss", "modal", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"]],
        template: function ModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ModalComponent_div_0_Template, 7, 2, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-modal',
            templateUrl: './modal.component.html',
            styleUrls: ['./modal.component.scss']
          }]
        }], null, {
          close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          submit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          show: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          saveBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          closeBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          footer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          header: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/pipes/itranslate.pipe.ts":
    /*!*************************************************!*\
      !*** ./src/app/shared/pipes/itranslate.pipe.ts ***!
      \*************************************************/

    /*! exports provided: ItranslatePipe */

    /***/
    function srcAppSharedPipesItranslatePipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItranslatePipe", function () {
        return ItranslatePipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../environments/environment */
      "./src/environments/environment.ts");

      var ItranslatePipe = /*#__PURE__*/function () {
        function ItranslatePipe() {
          _classCallCheck(this, ItranslatePipe);
        }

        _createClass(ItranslatePipe, [{
          key: "transform",
          value: function transform(values) {
            if (!values || values.length === 0) {
              return '';
            }

            var found = values.filter(function (x) {
              return x.langId === _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].language;
            });
            var fallback = found.length === 0 ? values[0].value : found[0].value;
            return fallback;
          }
        }]);

        return ItranslatePipe;
      }();

      ItranslatePipe.ɵfac = function ItranslatePipe_Factory(t) {
        return new (t || ItranslatePipe)();
      };

      ItranslatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "itranslate",
        type: ItranslatePipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItranslatePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'itranslate'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/services/api.service.ts":
    /*!************************************************!*\
      !*** ./src/app/shared/services/api.service.ts ***!
      \************************************************/

    /*! exports provided: ApiService */

    /***/
    function srcAppSharedServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var jk_wait__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! jk-wait */
      "./node_modules/jk-wait/__ivy_ngcc__/fesm2015/jk-wait.js");

      var ApiService = /*#__PURE__*/function () {
        function ApiService(http, wait) {
          _classCallCheck(this, ApiService);

          this.http = http;
          this.wait = wait;
          this.configUrl = 'assets/config.json';
        }

        _createClass(ApiService, [{
          key: "create",
          value: function create(what, data) {
            var _this3 = this;

            this.wait.start();
            var endpoint = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL).concat(what, "/");
            return this.http.post(endpoint, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (x) {
              _this3.wait.end();

              return x;
            }));
          }
        }, {
          key: "update",
          value: function update(what, id, data) {
            var _this4 = this;

            this.wait.start();
            var endpoint = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL).concat(what, "/").concat(id);
            return this.http.put(endpoint, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (x) {
              _this4.wait.end();

              return x;
            }));
          }
        }, {
          key: "delete",
          value: function _delete(what, id) {
            var _this5 = this;

            this.wait.start();
            var endpoint = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL).concat(what, "/").concat(id);
            return this.http["delete"](endpoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (x) {
              _this5.wait.end();

              return x;
            }));
          }
        }, {
          key: "list",
          value: function list(ofWhat, params) {
            var _this6 = this;

            this.wait.start();
            var endpoint = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL).concat(ofWhat, "/");
            return this.http.get(endpoint, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (x) {
              _this6.wait.end();

              return x;
            }));
          }
        }, {
          key: "listMap",
          value: function listMap(ofWhat, params) {
            var _this7 = this;

            this.wait.start();
            var endpoint = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL).concat(ofWhat, "/");
            return this.http.get(endpoint, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (x) {
              _this7.wait.end();

              return {
                data: x.content,
                count: x.totalElements,
                totalPage: x.totalPages
              };
            }));
          }
        }]);

        return ApiService;
      }();

      ApiService.ɵfac = function ApiService_Factory(t) {
        return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](jk_wait__WEBPACK_IMPORTED_MODULE_4__["JkWaitService"]));
      };

      ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ApiService,
        factory: ApiService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }, {
            type: jk_wait__WEBPACK_IMPORTED_MODULE_4__["JkWaitService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/services/local-data.service.ts":
    /*!*******************************************************!*\
      !*** ./src/app/shared/services/local-data.service.ts ***!
      \*******************************************************/

    /*! exports provided: LocalDataService */

    /***/
    function srcAppSharedServicesLocalDataServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalDataService", function () {
        return LocalDataService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var LocalDataService = /*#__PURE__*/function () {
        function LocalDataService() {
          _classCallCheck(this, LocalDataService);
        }

        _createClass(LocalDataService, [{
          key: "save",
          value: function save(what, data) {
            var newData = _defineProperty({}, what, data);

            if (!this.isEmpty(this.current)) {
              newData = Object.assign(Object.assign({}, this.current), _defineProperty({}, what, data));
            }

            localStorage.setItem('localData', JSON.stringify(newData));
          }
        }, {
          key: "get",
          value: function get(what) {
            if (this.isEmpty(this.current)) {
              return;
            }

            return this.current[what];
          }
        }, {
          key: "delete",
          value: function _delete(what) {
            if (this.isEmpty(this.current)) {
              return;
            }

            var clone = this.cloneObject(this.current);
            delete clone[what];
            localStorage.setItem('localData', JSON.stringify(clone));
          }
        }, {
          key: "clear",
          value: function clear() {
            localStorage.removeItem('localData');
          }
        }, {
          key: "cloneObject",
          value: function cloneObject(obj) {
            var str = JSON.stringify(obj);
            return JSON.parse(str);
          }
        }, {
          key: "isEmpty",
          value: function isEmpty(obj) {
            return Object.keys(obj).length === 0;
          }
        }, {
          key: "data",
          get: function get() {
            return this.current;
          }
        }, {
          key: "current",
          get: function get() {
            var data = localStorage.getItem('localData');
            return data ? JSON.parse(data) : {};
          }
        }]);

        return LocalDataService;
      }();

      LocalDataService.ɵfac = function LocalDataService_Factory(t) {
        return new (t || LocalDataService)();
      };

      LocalDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LocalDataService,
        factory: LocalDataService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalDataService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/shared.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/modal/modal.component */
      "./src/app/shared/components/modal/modal.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _components_language_field_language_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/language-field/language-field.component */
      "./src/app/shared/components/language-field/language-field.component.ts");
      /* harmony import */


      var _pipes_itranslate_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pipes/itranslate.pipe */
      "./src/app/shared/pipes/itranslate.pipe.ts");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SharedModule_Factory(t) {
          return new (t || SharedModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
          declarations: [_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"], _components_language_field_language_field_component__WEBPACK_IMPORTED_MODULE_6__["LanguageFieldComponent"], _pipes_itranslate_pipe__WEBPACK_IMPORTED_MODULE_7__["ItranslatePipe"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
          exports: [_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"], _components_language_field_language_field_component__WEBPACK_IMPORTED_MODULE_6__["LanguageFieldComponent"], _pipes_itranslate_pipe__WEBPACK_IMPORTED_MODULE_7__["ItranslatePipe"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"], _components_language_field_language_field_component__WEBPACK_IMPORTED_MODULE_6__["LanguageFieldComponent"], _pipes_itranslate_pipe__WEBPACK_IMPORTED_MODULE_7__["ItranslatePipe"]],
            exports: [_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"], _components_language_field_language_field_component__WEBPACK_IMPORTED_MODULE_6__["LanguageFieldComponent"], _pipes_itranslate_pipe__WEBPACK_IMPORTED_MODULE_7__["ItranslatePipe"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~modules-application-application-module~modules-provisioning-provisioning-module-es5.js.map