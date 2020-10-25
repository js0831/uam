(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-application-application-module"], {
    /***/
    "./src/app/modules/application/application-attribute-options/application-attribute-options.component.ts":
    /*!**************************************************************************************************************!*\
      !*** ./src/app/modules/application/application-attribute-options/application-attribute-options.component.ts ***!
      \**************************************************************************************************************/

    /*! exports provided: ApplicationAttributeOptionsComponent */

    /***/
    function srcAppModulesApplicationApplicationAttributeOptionsApplicationAttributeOptionsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplicationAttributeOptionsComponent", function () {
        return ApplicationAttributeOptionsComponent;
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


      var src_app_shared_services_local_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/local-data.service */
      "./src/app/shared/services/local-data.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _shared_components_language_field_language_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../shared/components/language-field/language-field.component */
      "./src/app/shared/components/language-field/language-field.component.ts");
      /* harmony import */


      var _shared_pipes_itranslate_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../shared/pipes/itranslate.pipe */
      "./src/app/shared/pipes/itranslate.pipe.ts");

      function ApplicationAttributeOptionsComponent_app_language_field_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-language-field", 14);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Description")("form", ctx_r0.form);
        }
      }

      function ApplicationAttributeOptionsComponent_button_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationAttributeOptionsComponent_button_15_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.cancelEdit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ApplicationAttributeOptionsComponent_tr_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "itranslate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ApplicationAttributeOptionsComponent_tr_28_Template_input_change_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var option_r5 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.setDefault(option_r5.id, option_r5["default"]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationAttributeOptionsComponent_tr_28_Template_a_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var option_r5 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.edit(option_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationAttributeOptionsComponent_tr_28_Template_a_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var option_r5 = ctx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9["delete"](option_r5.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, option_r5.translations), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r5.value, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", option_r5["default"]);
        }
      }

      var ApplicationAttributeOptionsComponent = /*#__PURE__*/function () {
        function ApplicationAttributeOptionsComponent(formBuilder, localdata) {
          _classCallCheck(this, ApplicationAttributeOptionsComponent);

          this.formBuilder = formBuilder;
          this.localdata = localdata;
          this.attributeOptions = [];
          this.showDescription = true;
        }

        _createClass(ApplicationAttributeOptionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.buildForm();

            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].staticData) {
              var values = this.localdata.get('attributeOptions');

              if (!values) {
                return;
              }

              var attrId = this.id.replace(/\ /g, '_').toLowerCase();
              this.attributeOptions = values["attr-opts-".concat(attrId)] || [];
              return;
            }
          }
        }, {
          key: "buildForm",
          value: function buildForm() {
            this.form = this.formBuilder.group({
              value: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "add",
          value: function add() {
            var _this = this;

            if (this.form.invalid) {
              alert('All fields are required');
              return;
            }

            var formValues = this.form.value;
            var translations = formValues.translations.map(function (x) {
              return {
                keyVal: formValues.value,
                langId: Number(x.language),
                value: x.value
              };
            });
            formValues.translations = translations;
            var data = {
              id: new Date().getTime(),
              value: formValues.value,
              translations: translations,
              "default": false
            };

            if (!this.editId) {
              this.attributeOptions.push(data);
            } else {
              this.attributeOptions = this.attributeOptions.map(function (x) {
                if (x.id === _this.editId) {
                  return data;
                }

                return x;
              });
            }

            this.form.reset();
            this.showDescription = false;
            this.saveLocalData();
            setTimeout(function (x) {
              _this.showDescription = true;
            }, 100);
          }
        }, {
          key: "setDefault",
          value: function setDefault(id, value) {
            this.attributeOptions.map(function (x) {
              if (id === x.id) {
                x["default"] = !value;
              } else {
                x["default"] = false;
              }

              return x;
            });
            this.saveLocalData();
          }
        }, {
          key: "edit",
          value: function edit(option) {
            var _this2 = this;

            this.editId = option.id;
            this.form.get('value').patchValue(option.value);
            this.showDescription = false;
            setTimeout(function (x) {
              _this2.showDescription = true;

              _this2.appendCurrentTranslations(option.translations);
            });
          }
        }, {
          key: "cancelEdit",
          value: function cancelEdit() {
            var _this3 = this;

            this.editId = null;
            this.form.reset();
            this.showDescription = false;
            setTimeout(function (x) {
              _this3.showDescription = true;
            });
          }
        }, {
          key: "appendCurrentTranslations",
          value: function appendCurrentTranslations(translations) {
            var _this4 = this;

            this.form.removeControl('translations');
            this.form.addControl('translations', this.formBuilder.array([], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required));
            translations.forEach(function (x) {
              var group = _this4.formBuilder.group({
                language: [x.langId.toString(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                value: [x.value, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              });

              _this4.form.get('translations').push(group);
            });
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            var sure = confirm('Are you sure?');

            if (!sure) {
              return;
            }

            this.attributeOptions = this.attributeOptions.filter(function (x) {
              return x.id !== id;
            });
            this.saveLocalData();
          }
        }, {
          key: "saveLocalData",
          value: function saveLocalData() {
            var attrId = this.id.replace(/\ /g, '_').toLowerCase();

            var toSave = _defineProperty({}, 'attr-opts-' + attrId, this.attributeOptions);

            var oldvalues = this.localdata.get('attributeOptions');

            if (!oldvalues) {
              this.localdata.save('attributeOptions', Object.assign({}, toSave));
            } else {
              this.localdata.save('attributeOptions', Object.assign(Object.assign({}, oldvalues), toSave));
            }
          }
        }]);

        return ApplicationAttributeOptionsComponent;
      }();

      ApplicationAttributeOptionsComponent.ɵfac = function ApplicationAttributeOptionsComponent_Factory(t) {
        return new (t || ApplicationAttributeOptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_local_data_service__WEBPACK_IMPORTED_MODULE_3__["LocalDataService"]));
      };

      ApplicationAttributeOptionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ApplicationAttributeOptionsComponent,
        selectors: [["app-application-attribute-options"]],
        inputs: {
          id: "id"
        },
        decls: 29,
        vars: 5,
        consts: [[1, "nav", "nav-tabs"], [1, "nav-item"], [1, "nav-link", "active"], [1, "fform", "fform--inline", "optionsForm", 3, "formGroup"], [1, "form-group", "flex-2"], [3, "title", "form", 4, "ngIf"], [1, "form-group"], ["type", "text", "formControlName", "value", 1, "form-control", "form-control-sm"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], ["type", "button", "class", "btn btn-sm  btn-secondary", 3, "click", 4, "ngIf"], [1, "table-list", "optionsList"], [1, "table", "table-sm"], ["scope", "col"], [4, "ngFor", "ngForOf"], [3, "title", "form"], ["type", "button", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "checked", "change"], [1, "table-list__actions"], [3, "click"]],
        template: function ApplicationAttributeOptionsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Options");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Description:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ApplicationAttributeOptionsComponent_app_language_field_8_Template, 1, 2, "app-language-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Value: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationAttributeOptionsComponent_Template_button_click_13_listener() {
              return ctx.add();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ApplicationAttributeOptionsComponent_button_15_Template, 2, 0, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Value");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Default");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "th", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ApplicationAttributeOptionsComponent_tr_28_Template, 15, 5, "tr", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDescription);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.editId ? "Update" : "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.attributeOptions);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _shared_components_language_field_language_field_component__WEBPACK_IMPORTED_MODULE_5__["LanguageFieldComponent"]],
        pipes: [_shared_pipes_itranslate_pipe__WEBPACK_IMPORTED_MODULE_6__["ItranslatePipe"]],
        styles: [".optionsForm[_ngcontent-%COMP%] {\n  padding: 1rem 0.25rem;\n}\n\n.optionsList[_ngcontent-%COMP%] {\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbi1hdHRyaWJ1dGUtb3B0aW9ucy9hcHBsaWNhdGlvbi1hdHRyaWJ1dGUtb3B0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uLWF0dHJpYnV0ZS1vcHRpb25zL2FwcGxpY2F0aW9uLWF0dHJpYnV0ZS1vcHRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9wdGlvbnNGb3Jte1xyXG4gICAgcGFkZGluZzogMXJlbSAuMjVyZW07XHJcbn1cclxuXHJcbi5vcHRpb25zTGlzdHtcclxuICAgIHBhZGRpbmc6MDtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationAttributeOptionsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-application-attribute-options',
            templateUrl: './application-attribute-options.component.html',
            styleUrls: ['./application-attribute-options.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_shared_services_local_data_service__WEBPACK_IMPORTED_MODULE_3__["LocalDataService"]
          }];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/modules/application/application-view/application-view.component.ts":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/application/application-view/application-view.component.ts ***!
      \************************************************************************************/

    /*! exports provided: ApplicationViewComponent */

    /***/
    function srcAppModulesApplicationApplicationViewApplicationViewComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplicationViewComponent", function () {
        return ApplicationViewComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var src_app_shared_services_local_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/local-data.service */
      "./src/app/shared/services/local-data.service.ts");
      /* harmony import */


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      "./src/app/shared/services/api.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var jk_wait__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! jk-wait */
      "./node_modules/jk-wait/__ivy_ngcc__/fesm2015/jk-wait.js");
      /* harmony import */


      var _shared_components_language_field_language_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/components/language-field/language-field.component */
      "./src/app/shared/components/language-field/language-field.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../shared/components/modal/modal.component */
      "./src/app/shared/components/modal/modal.component.ts");
      /* harmony import */


      var _application_attribute_options_application_attribute_options_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../application-attribute-options/application-attribute-options.component */
      "./src/app/modules/application/application-attribute-options/application-attribute-options.component.ts");
      /* harmony import */


      var _shared_pipes_itranslate_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../shared/pipes/itranslate.pipe */
      "./src/app/shared/pipes/itranslate.pipe.ts");

      var _c0 = function _c0(a0, a1) {
        return {
          "dragging": a0,
          "dropping": a1
        };
      };

      function ApplicationViewComponent_tr_43_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("drop", function ApplicationViewComponent_tr_43_Template_tr_drop_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            var attribute_r5 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r6.drop($event, attribute_r5);
          })("dragover", function ApplicationViewComponent_tr_43_Template_tr_dragover_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            var attribute_r5 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r8.allowDrop($event, attribute_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dragstart", function ApplicationViewComponent_tr_43_Template_label_dragstart_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            var attribute_r5 = ctx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r9.drag(attribute_r5, $event);
          })("dragend", function ApplicationViewComponent_tr_43_Template_label_dragend_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r10.dragend();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "itranslate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApplicationViewComponent_tr_43_Template_a_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            var attribute_r5 = ctx.$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r11.showAppForm("edit", attribute_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApplicationViewComponent_tr_43_Template_a_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            var attribute_r5 = ctx.$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r12["delete"](attribute_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var attribute_r5 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](6, _c0, ctx_r0.dragging && ctx_r0.dragging.attbId === attribute_r5.attbId && ctx_r0.dragging !== ctx_r0.dropping, ctx_r0.dropping && ctx_r0.dropping.attbId === attribute_r5.attbId && ctx_r0.dragging !== ctx_r0.dropping));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", attribute_r5.attbId, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 4, attribute_r5.translations), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", attribute_r5.attbType, " ");
        }
      }

      function ApplicationViewComponent_div_46_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ApplicationViewComponent_div_46_Template_input_change_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r13.toggleExistingAttribute();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Copy Attribute");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r1.isExistingAttribute);
        }
      }

      function ApplicationViewComponent_ng_container_47_ng_container_7_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var app_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", app_r18.systemId);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](app_r18.systemId);
        }
      }

      function ApplicationViewComponent_ng_container_47_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApplicationViewComponent_ng_container_47_ng_container_7_option_1_Template, 2, 2, "option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var app_r18 = ctx.$implicit;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", app_r18.systemId !== ctx_r16.application.systemId);
        }
      }

      function ApplicationViewComponent_ng_container_47_ng_container_13_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var attr_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", attr_r21.attbId);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", attr_r21.attbId, " ");
        }
      }

      function ApplicationViewComponent_ng_container_47_ng_container_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApplicationViewComponent_ng_container_47_ng_container_13_option_1_Template, 2, 2, "option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var attr_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r17.hasAttribute(attr_r21.attbId) && attr_r21.systemId === _r15.value);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "is-invalid": a0
        };
      };

      function ApplicationViewComponent_ng_container_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Application: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "select", 34, 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ApplicationViewComponent_ng_container_47_ng_container_7_Template, 2, 1, "ng-container", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Attribute:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "select", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ApplicationViewComponent_ng_container_47_ng_container_13_Template, 2, 1, "ng-container", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.applications);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, ctx_r2.form.controls.existing.invalid && ctx_r2.form.controls.existing.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.allAttributes);
        }
      }

      function ApplicationViewComponent_ng_container_48_app_language_field_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-language-field", 10);
        }

        if (rf & 2) {
          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Title")("form", ctx_r24.form);
        }
      }

      function ApplicationViewComponent_ng_container_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "ID: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Type: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "select", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "String");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "option", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Numeric");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "option", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Boolean");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Title: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ApplicationViewComponent_ng_container_48_app_language_field_19_Template, 1, 2, "app-language-field", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, ctx_r3.form.controls.id.invalid && ctx_r3.form.controls.id.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c1, ctx_r3.form.controls.type.invalid && ctx_r3.form.controls.type.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.showModal);
        }
      }

      function ApplicationViewComponent_app_application_attribute_options_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-application-attribute-options", 46);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx_r4.editAttribute.attbId);
        }
      }

      var _c2 = function _c2() {
        return ["/application"];
      };

      var ApplicationViewComponent = /*#__PURE__*/function () {
        function ApplicationViewComponent(formBuilder, localdata, api, router, wait) {
          _classCallCheck(this, ApplicationViewComponent);

          this.formBuilder = formBuilder;
          this.localdata = localdata;
          this.api = api;
          this.router = router;
          this.wait = wait;
          this.applicationAttributes = [];
          this.showModal = false;
          this.isExistingAttribute = false;
          this.allAttributes = [];
          this.applications = []; // TEMP

          this.activeTab = 'details'; // TODO : remove if after api integration

          this.applications = JSON.parse(localStorage.getItem('localData')).applications;
        }

        _createClass(ApplicationViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.application = this.localdata.get('application');
            this.buildForm();
            setTimeout(function (x) {
              _this5.appendCurrentTranslations(_this5.applicationForm, _this5.application.translations);
            }, 0);

            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].staticData) {
              var values = this.localdata.get('applicationAttributes');
              this.getAllAttributes();

              if (!values) {
                return;
              }

              var appId = this.application.systemId.replace(/\ /g, '_').toLowerCase();
              this.applicationAttributes = values["app-attr-".concat(appId)] || [];
              return;
            }

            this.applicationAttributes = [];
            this.getApplicationAttribute(this.application.systemId);
          }
        }, {
          key: "getAllAttributes",
          value: function getAllAttributes() {
            var _this6 = this;

            var values = this.localdata.get('applicationAttributes');

            if (!values) {
              return;
            }

            Object.values(values).forEach(function (attrs) {
              _this6.allAttributes = [].concat(_toConsumableArray(_this6.allAttributes), _toConsumableArray(attrs));
            });
            return values;
          }
        }, {
          key: "hasAttribute",
          value: function hasAttribute(id) {
            return this.applicationAttributes.filter(function (x) {
              return x.attbId === id;
            }).length > 0;
          }
        }, {
          key: "toggleExistingAttribute",
          value: function toggleExistingAttribute() {
            this.isExistingAttribute = !this.isExistingAttribute;
            this.form.reset();
          }
        }, {
          key: "saveLocalData",
          value: function saveLocalData() {
            var appId = this.application.systemId.replace(/\ /g, '_').toLowerCase();
            var sortedValues = this.applicationAttributes.sort(this.sortCompare);

            var toSave = _defineProperty({}, 'app-attr-' + appId, sortedValues);

            var oldvalues = this.localdata.get('applicationAttributes');

            if (!oldvalues) {
              this.localdata.save('applicationAttributes', Object.assign({}, toSave));
            } else {
              this.localdata.save('applicationAttributes', Object.assign(Object.assign({}, oldvalues), toSave));
            }
          }
        }, {
          key: "getApplicationAttribute",
          value: function getApplicationAttribute(id) {
            var _this7 = this;

            this.api.list('applicationroleattribute/getApplicationRoleAttribute', {
              systemId: id
            }).subscribe(function (x) {
              _this7.applicationAttributes = x.roleAttr;
            });
          }
        }, {
          key: "buildForm",
          value: function buildForm() {
            this.form = this.formBuilder.group({
              id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              existing: ['', []]
            });
            this.applicationForm = this.formBuilder.group({
              systemId: [this.application.systemId, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              allowMultiple: [this.application.allowMultiple]
            });
          }
        }, {
          key: "showAppForm",
          value: function showAppForm(type, app) {
            var _this8 = this;

            if (type === 'add') {
              this.modalTitle = 'New Attibute';
              this.saveButtonText = 'Save';
              this.editAttribute = null;
            } else {
              this.editAttribute = app;
              this.saveButtonText = 'Update';
              this.modalTitle = "Edit ".concat(app.attbId);
              this.form.get('id').patchValue(app.attbId);
              this.form.get('type').patchValue(app.attbType);
              setTimeout(function (x) {
                _this8.appendCurrentTranslations(_this8.form, app.translations);
              }, 0);
            }

            this.showModal = true;
          }
        }, {
          key: "appendCurrentTranslations",
          value: function appendCurrentTranslations(form, translations) {
            var _this9 = this;

            translations.forEach(function (x) {
              var group = _this9.formBuilder.group({
                language: [x.langId.toString(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                value: [x.value, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
              });

              form.get('translations').push(group);
            });
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.form.reset();
            this.showModal = false;
            this.isExistingAttribute = false;
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            var _this10 = this;

            this.form.markAllAsTouched();

            if (this.isExistingAttribute) {
              var attrId = this.form.value.existing;

              if (attrId.length === 0) {
                return;
              }

              var attribute = this.allAttributes.filter(function (x) {
                return x.attbId === attrId;
              })[0];
              this.applicationAttributes.push(attribute);
              this.saveLocalData();
              this.form.reset();
              this.showModal = false;
              this.isExistingAttribute = false;
              return;
            }

            if (this.form.invalid) {
              alert('All fields are required');
              return;
            }

            var _this$form$value = this.form.value,
                id = _this$form$value.id,
                type = _this$form$value.type,
                translations = _this$form$value.translations;
            var data = {
              attbId: id,
              attbType: type,
              attbTitle: id,
              systemId: this.application.systemId,
              translations: translations.map(function (x) {
                return {
                  keyVal: id,
                  langId: Number(x.language),
                  value: x.value
                };
              })
            };

            if (!this.editAttribute) {
              if (src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].staticData) {
                var order = this.generateNextOrder();
                var atributeData = Object.assign(Object.assign({}, data), {
                  order: order
                });
                this.applicationAttributes.push(atributeData);
                this.saveLocalData();
                this.editAttribute = atributeData;
                this.modalTitle = 'Edit ' + id;
                this.saveButtonText = 'Update'; // this.form.reset();

                return;
              }

              this.api.create('roleattribute/createRoleAttribute', data).subscribe(function (x) {
                _this10.showModal = false;

                _this10.form.reset();
              });
            } else {
              this.updateAttribute(data, this.editAttribute);
            }
          }
        }, {
          key: "updateAttribute",
          value: function updateAttribute(data, editAttribute) {
            var _this11 = this;

            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].staticData) {
              // update options id if id changed
              if (editAttribute.attbId !== data.attbId) {
                var allOptions = this.localdata.get('attributeOptions');

                if (Object.keys(allOptions).length > 0) {
                  var attrId = editAttribute.attbId.replace(/\ /g, '_').toLowerCase();
                  var atributeOptions = allOptions['attr-opts-' + attrId];
                  delete allOptions['attr-opts-' + attrId];
                  var newAttrId = data.attbId.replace(/\ /g, '_').toLowerCase();
                  allOptions = Object.assign(Object.assign({}, allOptions), _defineProperty({}, 'attr-opts-' + newAttrId, atributeOptions));
                  this.localdata.save('attributeOptions', allOptions);
                }
              }

              this.applicationAttributes = this.applicationAttributes.filter(function (x) {
                return x.attbId !== editAttribute.attbId;
              });
              this.applicationAttributes.push(Object.assign(Object.assign({}, data), {
                order: editAttribute.order
              }));
              this.saveLocalData();
              this.form.reset();
              this.showModal = false;
              return;
            }

            this.api.create('roleattribute/updateRoleAttribute', Object.assign(Object.assign({}, data), {
              oldAttbId: editAttribute.attbId
            })).subscribe(function (x) {
              _this11.showModal = false;

              _this11.form.reset();
            });
          }
        }, {
          key: "sortCompare",
          value: function sortCompare(a, b) {
            if (a.order < b.order) {
              return -1;
            }

            if (a.order > b.order) {
              return 1;
            }

            return 0;
          }
        }, {
          key: "delete",
          value: function _delete(app) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var sure, data;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      sure = confirm('Are you sure?');

                      if (sure) {
                        _context.next = 3;
                        break;
                      }

                      return _context.abrupt("return");

                    case 3:
                      if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].staticData) {
                        _context.next = 7;
                        break;
                      }

                      this.applicationAttributes = this.applicationAttributes.filter(function (x) {
                        return x.attbId !== app.attbId;
                      });
                      this.saveLocalData();
                      return _context.abrupt("return");

                    case 7:
                      data = {
                        roleAttributeId: app.attbId,
                        systemId: this.application.systemId
                      };
                      _context.next = 10;
                      return this.api.create('applicationroleattribute/deleteApplicationRoleAttribute', data).toPromise();

                    case 10:
                      this.applicationAttributes = this.applicationAttributes.filter(function (x) {
                        return app.attbId !== x.attbId;
                      });

                    case 11:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "update",
          value: function update() {
            var _this12 = this;

            var formValue = this.applicationForm.value;
            var translations = formValue.translations.map(function (x) {
              return {
                keyVal: formValue.systemId,
                langId: Number(x.language),
                value: x.value
              };
            }); // const updateData = {
            //   oldSystemId: this.application.systemId,
            //   systemDescription: formValue.systemId,
            //   systemId: formValue.systemId,
            //   translations,
            // };
            // update application attributes id if id changed

            if (this.application.systemId !== formValue.systemId) {
              var allAttributes = this.localdata.get('applicationAttributes');

              if (Object.keys(allAttributes).length > 0) {
                var appId = this.application.systemId.replace(/\ /g, '_').toLowerCase();
                var appAtribute = allAttributes['app-attr-' + appId];
                delete allAttributes['app-attr-' + appId];
                var newAppId = formValue.systemId.replace(/\ /g, '_').toLowerCase();
                allAttributes = Object.assign(Object.assign({}, allAttributes), _defineProperty({}, 'app-attr-' + newAppId, appAtribute));
                this.localdata.save('applicationAttributes', allAttributes);
              }
            }

            this.localdata.save('application', {
              systemId: formValue.systemId,
              systemDescription: formValue.systemId,
              allowMultiple: formValue.allowMultiple,
              translations: translations
            });
            var apps = this.localdata.get('applications').map(function (x) {
              if (x.systemId === _this12.application.systemId) {
                x.systemId = formValue.systemId;
                x.systemDescription = formValue.systemId;
                x.allowMultiple = formValue.allowMultiple;
                x.translations = translations;
              }

              return x;
            });
            this.localdata.save('applications', apps);
            this.wait.start();
            setTimeout(function (x) {
              alert('Success');

              _this12.wait.end();
            }, 500);
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.router.navigate(['application']);
          }
        }, {
          key: "drag",
          value: function drag(attribute, event) {
            this.dragging = attribute;
            event.dataTransfer.setData('attr', JSON.stringify(attribute));
          }
        }, {
          key: "dragend",
          value: function dragend() {
            this.dragging = null;
            this.dropping = null;
          }
        }, {
          key: "allowDrop",
          value: function allowDrop(ev, attribute) {
            ev.preventDefault();
            this.dropping = attribute;
          }
        }, {
          key: "drop",
          value: function drop(ev, attribute) {
            ev.preventDefault();
            var data = JSON.parse(ev.dataTransfer.getData('attr'));
            var newOrder = attribute.order;

            if (newOrder === data.order) {
              return;
            }

            this.applicationAttributes = this.applicationAttributes.map(function (x) {
              console.log(x.order + ' = ' + data.order + ' - ' + newOrder);

              if (data.order > newOrder) {
                if (x.order === data.order) {
                  x.order = newOrder;
                } else if (x.order >= newOrder && x.order <= data.order) {
                  x.order = x.order + 1;
                }
              } else {
                if (x.order === data.order) {
                  x.order = newOrder;
                } else if (x.order <= newOrder && x.order >= data.order) {
                  x.order = x.order - 1;
                }
              }

              return x;
            });
            this.saveLocalData();
          }
        }, {
          key: "generateNextOrder",
          value: function generateNextOrder() {
            var keys = Object.keys(this.applicationAttributes);

            if (keys.length === 0) {
              return 0;
            }

            var lastkey = keys[keys.length - 1];
            return this.applicationAttributes[lastkey].order + 1;
          }
        }]);

        return ApplicationViewComponent;
      }();

      ApplicationViewComponent.ɵfac = function ApplicationViewComponent_Factory(t) {
        return new (t || ApplicationViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_local_data_service__WEBPACK_IMPORTED_MODULE_4__["LocalDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](jk_wait__WEBPACK_IMPORTED_MODULE_7__["JkWaitService"]));
      };

      ApplicationViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ApplicationViewComponent,
        selectors: [["app-application-view"]],
        decls: 51,
        vars: 16,
        consts: [["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "section", 3, "formGroup"], [1, "application", "fform", "fform--inline"], [1, "form-group", "form-group-sm"], ["type", "text", "formControlName", "systemId", 1, "form-control", "form-control-sm"], [1, "form-group"], [3, "title", "form"], [1, "form-group", "form-group-sm", "allowMultiple"], ["formControlName", "allowMultiple", "type", "checkbox"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "btn", "btn-sm", "btn-secondary", 3, "click"], [1, "table-list"], [1, "table-list__buttons"], ["type", "button", 1, "btn", "btn-sm", "btn-success", 3, "click"], [1, "table", "table-sm", "draggable"], ["scope", "col"], [3, "ngClass", "drop", "dragover", 4, "ngFor", "ngForOf"], [1, "large", 3, "show", "saveBtn", "closeBtn", "title", "close", "submit"], [1, "fform", "fform--inline", 3, "formGroup"], ["class", "form-check form-check-inline existingAttribute", 4, "ngIf"], [4, "ngIf"], [3, "id", 4, "ngIf"], [3, "ngClass", "drop", "dragover"], ["draggable", "true", 1, "dragLabel", 3, "dragstart", "dragend"], ["src", "./assets/images/drag-icon.svg"], [1, "table-list__actions"], [3, "click"], [1, "form-check", "form-check-inline", "existingAttribute"], ["type", "checkbox", "id", "inlineCheckbox1", 1, "form-check-input", 3, "checked", "change"], ["for", "inlineCheckbox1", 1, "form-check-label"], [1, "form-control", "form-control-sm"], ["selectedApp", ""], [4, "ngFor", "ngForOf"], ["formControlName", "existing", 1, "form-control", "form-control-sm", 3, "ngClass"], [3, "value", 4, "ngIf"], [3, "value"], ["formControlName", "id", "type", "text", 1, "form-control", "form-control-sm", 3, "ngClass"], ["formControlName", "type", 1, "form-control", "form-control-sm", 3, "ngClass"], ["value", "string"], ["value", "numeric"], ["value", "boolean"], [3, "title", "form", 4, "ngIf"], [3, "id"]],
        template: function ApplicationViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ol", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Application Maintenance");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " System ID: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Description: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-language-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Allow Multiple: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApplicationViewComponent_Template_button_click_22_listener() {
              return ctx.update();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApplicationViewComponent_Template_button_click_24_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Attributes");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApplicationViewComponent_Template_button_click_30_listener() {
              return ctx.showAppForm("add");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Add New Attribute");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "table", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, ApplicationViewComponent_tr_43_Template, 16, 9, "tr", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "app-modal", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("close", function ApplicationViewComponent_Template_app_modal_close_44_listener() {
              return ctx.closeModal();
            })("submit", function ApplicationViewComponent_Template_app_modal_submit_44_listener() {
              return ctx.submitForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "form", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, ApplicationViewComponent_div_46_Template, 4, 1, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, ApplicationViewComponent_ng_container_47_Template, 14, 5, "ng-container", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, ApplicationViewComponent_ng_container_48_Template, 20, 7, "ng-container", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, ApplicationViewComponent_app_application_attribute_options_50_Template, 1, 1, "app-application-attribute-options", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.application.systemId, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.applicationForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Description")("form", ctx.applicationForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.applicationAttributes);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("show", ctx.showModal)("saveBtn", ctx.saveButtonText)("closeBtn", "Cancel")("title", ctx.modalTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.editAttribute);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isExistingAttribute);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isExistingAttribute);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editAttribute && ctx.showModal);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _shared_components_language_field_language_field_component__WEBPACK_IMPORTED_MODULE_8__["LanguageFieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _application_attribute_options_application_attribute_options_component__WEBPACK_IMPORTED_MODULE_11__["ApplicationAttributeOptionsComponent"]],
        pipes: [_shared_pipes_itranslate_pipe__WEBPACK_IMPORTED_MODULE_12__["ItranslatePipe"]],
        styles: [".application[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.application[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n.application[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .allowMultiple[_ngcontent-%COMP%] {\n  flex: none;\n  width: 10rem;\n}\n.application[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child   label[_ngcontent-%COMP%] {\n  width: 105px;\n}\n.application[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  flex: none;\n}\n.existingAttribute[_ngcontent-%COMP%] {\n  border-right: 1px solid #ddd;\n  padding-right: 1rem;\n}\n.existingAttribute[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -webkit-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n.dragLabel[_ngcontent-%COMP%] {\n  cursor: move;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.dragLabel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.table-list[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n.draggable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: all 0.25s ease-in-out;\n}\n.dragging[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  color: red;\n}\n.dropping[_ngcontent-%COMP%] {\n  transform: translateX(2rem);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbi12aWV3L2FwcGxpY2F0aW9uLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFDSjtBQUNJO0VBQ0ksT0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNSO0FBQ1E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQUNaO0FBR1k7RUFDSSxZQUFBO0FBRGhCO0FBS1E7RUFDSSxVQUFBO0FBSFo7QUFTQTtFQUNJLDRCQUFBO0VBQ0EsbUJBQUE7QUFOSjtBQVFJO0VBQ0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNJLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxlQUFBO0FBTlo7QUFVQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQVBKO0FBU0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQVBSO0FBVUE7RUFDSSxrQkFBQTtBQVBKO0FBWUk7RUFDSSxpQ0FBQTtBQVRSO0FBYUE7RUFJSSxZQUFBO0VBQ0EsVUFBQTtBQWJKO0FBZ0JBO0VBQ0ksMkJBQUE7QUFiSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXBwbGljYXRpb24vYXBwbGljYXRpb24tdmlldy9hcHBsaWNhdGlvbi12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcGxpY2F0aW9ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogLjVyZW07XHJcblxyXG4gICAgPiBkaXZ7XHJcbiAgICAgICAgZmxleDoxO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLmFsbG93TXVsdGlwbGV7XHJcbiAgICAgICAgICAgIGZsZXg6IG5vbmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMHJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIGxhYmVse1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIGZsZXg6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmV4aXN0aW5nQXR0cmlidXRle1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcblxyXG4gICAgbGFiZWx7XHJcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgXHJcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyBcclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZHJhZ0xhYmVse1xyXG4gICAgY3Vyc29yOiBtb3ZlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDoxcmVtO1xyXG4gICAgICAgIGhlaWdodDogMXJlbTtcclxuICAgIH1cclxufVxyXG4udGFibGUtbGlzdHtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuLmRyYWdnYWJsZXtcclxuXHJcbiAgICB0cntcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLWluLW91dFxyXG4gICAgfVxyXG59XHJcblxyXG4uZHJhZ2dpbmd7XHJcbiAgICAvLyB0ZDpmaXJzdC1jaGlsZHtcclxuICAgIC8vICAgICBiYWNrZ3JvdW5kOnJlZDtcclxuICAgIC8vIH1cclxuICAgIG9wYWNpdHk6LjU7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbn1cclxuXHJcbi5kcm9wcGluZ3sgICAgXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnJlbSk7IFxyXG4gICAgLy8gdHJhbnNpdGlvbjpub25lO1xyXG4gICAgLy8gJi50b3AsICYudG9wIH4gdHI6bm90KC5ub3Qpe1xyXG4gICAgLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycmVtKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyAmLmJvdHRvbSB7XHJcbiAgICAvLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJyZW0pO1xyXG4gICAgLy8gfVxyXG59XHJcblxyXG5cclxuLy8gLmRyYWdnYWJsZXtcclxuLy8gICAgICY6aG92ZXIgdHJ7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZDogYmx1ZTtcclxuLy8gICAgIH1cclxuXHJcbiAgICAgXHJcbi8vIH1cclxuLy8gLmRyYWdnYWJsZSB0cjpob3ZlcixcclxuLy8gLmRyYWdnYWJsZSB0cjpob3ZlciB+IHRyIHtcclxuLy8gICAgIGJhY2tncm91bmQ6IHJlZDtcclxuLy8gfVxyXG5cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApplicationViewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-application-view',
            templateUrl: './application-view.component.html',
            styleUrls: ['./application-view.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: src_app_shared_services_local_data_service__WEBPACK_IMPORTED_MODULE_4__["LocalDataService"]
          }, {
            type: src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }, {
            type: jk_wait__WEBPACK_IMPORTED_MODULE_7__["JkWaitService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/application/application.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/modules/application/application.module.ts ***!
      \***********************************************************/

    /*! exports provided: ApplicationModule */

    /***/
    function srcAppModulesApplicationApplicationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplicationModule", function () {
        return ApplicationModule;
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


      var _application_application_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./application/application.component */
      "./src/app/modules/application/application/application.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _application_view_application_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./application-view/application-view.component */
      "./src/app/modules/application/application-view/application-view.component.ts");
      /* harmony import */


      var _test_test_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./test/test.component */
      "./src/app/modules/application/test/test.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _application_attribute_options_application_attribute_options_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./application-attribute-options/application-attribute-options.component */
      "./src/app/modules/application/application-attribute-options/application-attribute-options.component.ts");

      var routes = [{
        path: '',
        component: _application_application_component__WEBPACK_IMPORTED_MODULE_2__["ApplicationComponent"]
      }, {
        path: ':id',
        component: _application_view_application_view_component__WEBPACK_IMPORTED_MODULE_5__["ApplicationViewComponent"]
      }];

      var ApplicationModule = function ApplicationModule() {
        _classCallCheck(this, ApplicationModule);
      };

      ApplicationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ApplicationModule
      });
      ApplicationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ApplicationModule_Factory(t) {
          return new (t || ApplicationModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ApplicationModule, {
          declarations: [_application_application_component__WEBPACK_IMPORTED_MODULE_2__["ApplicationComponent"], _application_view_application_view_component__WEBPACK_IMPORTED_MODULE_5__["ApplicationViewComponent"], _test_test_component__WEBPACK_IMPORTED_MODULE_6__["TestComponent"], _application_attribute_options_application_attribute_options_component__WEBPACK_IMPORTED_MODULE_8__["ApplicationAttributeOptionsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_application_application_component__WEBPACK_IMPORTED_MODULE_2__["ApplicationComponent"], _application_view_application_view_component__WEBPACK_IMPORTED_MODULE_5__["ApplicationViewComponent"], _test_test_component__WEBPACK_IMPORTED_MODULE_6__["TestComponent"], _application_attribute_options_application_attribute_options_component__WEBPACK_IMPORTED_MODULE_8__["ApplicationAttributeOptionsComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/application/application/application.component.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/modules/application/application/application.component.ts ***!
      \**************************************************************************/

    /*! exports provided: ApplicationComponent */

    /***/
    function srcAppModulesApplicationApplicationApplicationComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplicationComponent", function () {
        return ApplicationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      "./src/app/shared/services/api.service.ts");
      /* harmony import */


      var src_app_shared_services_local_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/local-data.service */
      "./src/app/shared/services/local-data.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/components/modal/modal.component */
      "./src/app/shared/components/modal/modal.component.ts");
      /* harmony import */


      var _shared_components_language_field_language_field_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../shared/components/language-field/language-field.component */
      "./src/app/shared/components/language-field/language-field.component.ts");
      /* harmony import */


      var _shared_pipes_itranslate_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../shared/pipes/itranslate.pipe */
      "./src/app/shared/pipes/itranslate.pipe.ts");

      function ApplicationComponent_tr_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "itranslate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApplicationComponent_tr_20_Template_a_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var app_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.view(app_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApplicationComponent_tr_20_Template_a_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var app_r2 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5["delete"](app_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var app_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", app_r2.systemId, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 3, app_r2.translations));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](app_r2.allowMultiple ? "Yes" : "No");
        }
      }

      function ApplicationComponent_form_22_app_language_field_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-language-field", 18);
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Description")("form", ctx_r6.form);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      function ApplicationComponent_form_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Allow multiple ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "System ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Description: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ApplicationComponent_form_22_app_language_field_12_Template, 1, 2, "app-language-field", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx_r1.form.controls.systemId.invalid && ctx_r1.form.controls.systemId.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.showModal);
        }
      }

      var ApplicationComponent = /*#__PURE__*/function () {
        function ApplicationComponent(formBuilder, api, localdata, router) {
          _classCallCheck(this, ApplicationComponent);

          this.formBuilder = formBuilder;
          this.api = api;
          this.localdata = localdata;
          this.router = router;
          this.language = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].language;
          this.saveButtonText = 'Save';
          this.showModal = false;
          this.applications = [{
            systemId: 'SVC',
            systemDescription: 'SVC',
            allowMultiple: false,
            translations: [{
              id: 1,
              keyVal: 'SVC',
              langId: 1,
              value: 'Single View Customer'
            }, {
              id: 2,
              keyVal: 'SVC',
              langId: 2,
              value: '单视图客户'
            }]
          }];
        }

        _createClass(ApplicationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.buildForm();

            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].staticData) {
              if (!this.localdata.get('applications')) {
                this.localdata.save('applications', this.applications);
              } else {
                this.applications = this.localdata.get('applications');
              }

              return;
            }

            this.loadData();
          }
        }, {
          key: "loadData",
          value: function loadData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var list;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.applications = [];
                      _context2.next = 3;
                      return this.api.list('application/getAllApplication').toPromise();

                    case 3:
                      list = _context2.sent;
                      this.applications = list.lstApplications;

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "buildForm",
          value: function buildForm() {
            this.form = this.formBuilder.group({
              systemId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              allowMultiple: false
            });
          }
        }, {
          key: "showAppForm",
          value: function showAppForm(type, app) {
            var _this13 = this;

            if (type === 'add') {
              this.modalTitle = 'New Application';
              this.saveButtonText = 'Save';
              this.editId = null;
            } else {
              this.saveButtonText = 'Update';
              this.modalTitle = "Edit ".concat(app.systemId);
              this.editId = app.systemId;
              this.form.get('systemId').patchValue(app.systemId);
              setTimeout(function (x) {
                _this13.appendCurrentTranslations(app.translations);
              }, 0);
            }

            this.showModal = true;
          }
        }, {
          key: "appendCurrentTranslations",
          value: function appendCurrentTranslations(translations) {
            var _this14 = this;

            translations.forEach(function (x) {
              var group = _this14.formBuilder.group({
                language: [x.langId.toString(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                value: [x.value, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
              });

              _this14.form.get('translations').push(group);
            });
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.form.reset();
            this.showModal = false;
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this$form$value2, systemId, translations, allowMultiple, descriptions, data;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.form.markAllAsTouched();
                      _this$form$value2 = this.form.value, systemId = _this$form$value2.systemId, translations = _this$form$value2.translations, allowMultiple = _this$form$value2.allowMultiple;

                      if (!this.form.invalid) {
                        _context3.next = 5;
                        break;
                      }

                      alert('All fields are required');
                      return _context3.abrupt("return");

                    case 5:
                      if (this.englishExist(translations)) {
                        _context3.next = 8;
                        break;
                      }

                      alert('English translation is required');
                      return _context3.abrupt("return");

                    case 8:
                      this.showModal = false;
                      descriptions = translations.map(function (x) {
                        return {
                          keyVal: systemId,
                          langId: Number(x.language),
                          value: x.value
                        };
                      });
                      data = {
                        systemDescription: systemId,
                        systemId: systemId,
                        translations: descriptions,
                        allowMultiple: allowMultiple
                      };

                      if (!this.modalTitle.includes('Edit')) {
                        _context3.next = 13;
                        break;
                      }

                      return _context3.abrupt("return");

                    case 13:
                      _context3.next = 15;
                      return this.createApplication(data);

                    case 15:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          } // async updateApplication(data): Promise<any>{
          //   const updateData = {
          //     oldSystemId: this.editId,
          //     ...data
          //   };
          //   if (environment.staticData){
          //     this.updateApplicationList(data.systemId, updateData.translations);
          //     this.saveLocalData();
          //     return;
          //   }
          //   const updated = await this.api.create('application/updateApplication', updateData).toPromise();
          //   this.updateApplicationList(data.systemId, updated.application.translations);
          //   this.form.reset();
          // }

        }, {
          key: "updateApplicationList",
          value: function updateApplicationList(systemId, translations) {
            var _this15 = this;

            this.applications = this.applications.map(function (x) {
              if (x.systemId === _this15.editId) {
                x.systemId = systemId;
                x.translations = translations;
              }

              return x;
            });
          }
        }, {
          key: "createApplication",
          value: function createApplication(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var saved;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].staticData) {
                        _context4.next = 5;
                        break;
                      }

                      this.applications.push({
                        systemId: data.systemId,
                        systemDescription: data.systemId,
                        allowMultiple: data.allowMultiple,
                        translations: data.translations.map(function (x) {
                          return Object.assign({
                            id: new Date().getTime()
                          }, x);
                        })
                      });
                      this.saveLocalData();
                      this.form.reset();
                      return _context4.abrupt("return");

                    case 5:
                      _context4.next = 7;
                      return this.api.create('application/createApplication', data).toPromise();

                    case 7:
                      saved = _context4.sent;
                      this.form.reset();
                      this.applications.push(saved.application);

                    case 10:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "englishExist",
          value: function englishExist(translations) {
            var found = translations.filter(function (x) {
              return x.language === '1';
            }).length > 0;
            return found;
          }
        }, {
          key: "delete",
          value: function _delete(app) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var sure, data;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      sure = confirm('Are you sure?');

                      if (sure) {
                        _context5.next = 3;
                        break;
                      }

                      return _context5.abrupt("return");

                    case 3:
                      if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].staticData) {
                        _context5.next = 7;
                        break;
                      }

                      this.applications = this.applications.filter(function (x) {
                        return x.systemId !== app.systemId;
                      });
                      this.saveLocalData();
                      return _context5.abrupt("return");

                    case 7:
                      data = Object.assign({
                        oldSystemId: app.systemId
                      }, app);
                      _context5.next = 10;
                      return this.api.create('application/deleteApplication', data).toPromise();

                    case 10:
                      this.applications = this.applications.filter(function (x) {
                        return x.systemId !== app.systemId;
                      });

                    case 11:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "view",
          value: function view(app) {
            var _this16 = this;

            this.localdata.save('application', app);
            setTimeout(function (x) {
              _this16.router.navigate(['application', app.systemId]);
            }, 250);
          }
        }, {
          key: "saveLocalData",
          value: function saveLocalData() {
            this.localdata.save('applications', this.applications);
          }
        }]);

        return ApplicationComponent;
      }();

      ApplicationComponent.ɵfac = function ApplicationComponent_Factory(t) {
        return new (t || ApplicationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_local_data_service__WEBPACK_IMPORTED_MODULE_5__["LocalDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
      };

      ApplicationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ApplicationComponent,
        selectors: [["app-application"]],
        decls: 23,
        vars: 6,
        consts: [["aria-label", "breadcrumb"], [1, "breadcrumb"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "table-list"], [1, "table-list__buttons"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "table", "table-sm"], ["scope", "col"], [4, "ngFor", "ngForOf"], [3, "show", "saveBtn", "closeBtn", "title", "close", "submit"], [3, "formGroup", 4, "ngIf"], [1, "table-list__actions"], [3, "click"], [3, "formGroup"], [1, "form-group"], ["formControlName", "allowMultiple", "type", "checkbox"], ["formControlName", "systemId", "type", "text", 1, "form-control", 3, "ngClass"], [3, "title", "form", 4, "ngIf"], [3, "title", "form"]],
        template: function ApplicationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ol", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Application Maintenance");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApplicationComponent_Template_button_click_7_listener() {
              return ctx.showAppForm("add");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Add New Application");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "System ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Allow Multiple");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ApplicationComponent_tr_20_Template, 13, 5, "tr", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "app-modal", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("close", function ApplicationComponent_Template_app_modal_close_21_listener() {
              return ctx.closeModal();
            })("submit", function ApplicationComponent_Template_app_modal_submit_21_listener() {
              return ctx.submitForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ApplicationComponent_form_22_Template, 13, 5, "form", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.applications);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("show", ctx.showModal)("saveBtn", ctx.saveButtonText)("closeBtn", "Cancel")("title", ctx.modalTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _shared_components_language_field_language_field_component__WEBPACK_IMPORTED_MODULE_9__["LanguageFieldComponent"]],
        pipes: [_shared_pipes_itranslate_pipe__WEBPACK_IMPORTED_MODULE_10__["ItranslatePipe"]],
        styles: [".table-list[_ngcontent-%COMP%] {\n  max-height: 82vh;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXBwbGljYXRpb24vYXBwbGljYXRpb24vYXBwbGljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtbGlzdHtcclxuICAgIG1heC1oZWlnaHQ6IDgydmg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApplicationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-application',
            templateUrl: './application.component.html',
            styleUrls: ['./application.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
          }, {
            type: src_app_shared_services_local_data_service__WEBPACK_IMPORTED_MODULE_5__["LocalDataService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/application/test/test.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/modules/application/test/test.component.ts ***!
      \************************************************************/

    /*! exports provided: TestComponent */

    /***/
    function srcAppModulesApplicationTestTestComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TestComponent", function () {
        return TestComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var TestComponent = /*#__PURE__*/function () {
        function TestComponent(fb) {
          _classCallCheck(this, TestComponent);

          this.fb = fb;
        }

        _createClass(TestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = this.fb.group({
              name: 'test'
            });
          }
        }]);

        return TestComponent;
      }();

      TestComponent.ɵfac = function TestComponent_Factory(t) {
        return new (t || TestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      TestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TestComponent,
        selectors: [["app-test"]],
        decls: 4,
        vars: 1,
        consts: [[3, "formGroup"], ["type", "text", "formControlName", "name"]],
        template: function TestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "test works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXBwbGljYXRpb24vdGVzdC90ZXN0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-test',
            templateUrl: './test.component.html',
            styleUrls: ['./test.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-application-application-module-es5.js.map