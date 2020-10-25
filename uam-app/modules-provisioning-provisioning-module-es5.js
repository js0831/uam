(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-provisioning-provisioning-module"], {
    /***/
    "./src/app/modules/provisioning/provisioning.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/modules/provisioning/provisioning.module.ts ***!
      \*************************************************************/

    /*! exports provided: ProvisioningModule */

    /***/
    function srcAppModulesProvisioningProvisioningModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProvisioningModule", function () {
        return ProvisioningModule;
      });
      /* harmony import */


      var _provisioning_provisioning_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./provisioning/provisioning.component */
      "./src/app/modules/provisioning/provisioning/provisioning.component.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var routes = [{
        path: '',
        component: _provisioning_provisioning_component__WEBPACK_IMPORTED_MODULE_0__["ProvisioningComponent"]
      }];

      var ProvisioningModule = function ProvisioningModule() {
        _classCallCheck(this, ProvisioningModule);
      };

      ProvisioningModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: ProvisioningModule
      });
      ProvisioningModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function ProvisioningModule_Factory(t) {
          return new (t || ProvisioningModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProvisioningModule, {
          declarations: [_provisioning_provisioning_component__WEBPACK_IMPORTED_MODULE_0__["ProvisioningComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProvisioningModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_provisioning_provisioning_component__WEBPACK_IMPORTED_MODULE_0__["ProvisioningComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/provisioning/provisioning/provisioning.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/modules/provisioning/provisioning/provisioning.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: ProvisioningComponent */

    /***/
    function srcAppModulesProvisioningProvisioningProvisioningComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProvisioningComponent", function () {
        return ProvisioningComponent;
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


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _shared_data_static_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/data/static.data */
      "./src/app/shared/data/static.data.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../shared/services/api.service */
      "./src/app/shared/services/api.service.ts");
      /* harmony import */


      var src_app_shared_services_local_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/local-data.service */
      "./src/app/shared/services/local-data.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _shared_components_multiple_selection_multiple_selection_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/components/multiple-selection/multiple-selection.component */
      "./src/app/shared/components/multiple-selection/multiple-selection.component.ts");
      /* harmony import */


      var _shared_pipes_itranslate_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../shared/pipes/itranslate.pipe */
      "./src/app/shared/pipes/itranslate.pipe.ts");

      function ProvisioningComponent_option_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var jobDuty_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", jobDuty_r5.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](jobDuty_r5.name);
        }
      }

      function ProvisioningComponent_option_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ch_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ch_r6.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ch_r6.name);
        }
      }

      function ProvisioningComponent_option_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ch_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ch_r7.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ch_r7.name);
        }
      }

      function ProvisioningComponent_ng_container_35_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "itranslate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var app_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", app_r8.systemId);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, app_r8.translations));
        }
      }

      function ProvisioningComponent_ng_container_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProvisioningComponent_ng_container_35_option_1_Template, 3, 4, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var app_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !app_r8.removed);
        }
      }

      function ProvisioningComponent_div_40_div_7_select_4_option_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "itranslate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected", option_r19["default"])("value", option_r19.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, option_r19.translations), " ");
        }
      }

      function ProvisioningComponent_div_40_div_7_select_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "select", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProvisioningComponent_div_40_div_7_select_4_option_2_Template, 3, 5, "option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var attr_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r15.getOptions(attr_r14.attbId));
        }
      }

      function ProvisioningComponent_div_40_div_7_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 29);
        }
      }

      function ProvisioningComponent_div_40_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "itranslate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProvisioningComponent_div_40_div_7_select_4_Template, 3, 1, "select", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProvisioningComponent_div_40_div_7_ng_template_5_Template, 1, 0, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var attr_r14 = ctx.$implicit;

          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, attr_r14.translations), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.getOptions(attr_r14.attbId).length > 0)("ngIfElse", _r16);
        }
      }

      function ProvisioningComponent_div_40_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "itranslate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProvisioningComponent_div_40_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

            var app_r11 = ctx.$implicit;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r21.removeApplication(app_r11.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "remove");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProvisioningComponent_div_40_div_7_Template, 7, 5, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var app_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, app_r11.application.translations), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", app_r11.attributes);
        }
      }

      var ProvisioningComponent = /*#__PURE__*/function () {
        function ProvisioningComponent(api, fb, localdata) {
          _classCallCheck(this, ProvisioningComponent);

          this.api = api;
          this.fb = fb;
          this.localdata = localdata;
          this.isStaticData = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].staticData;
          this.firstLeveldata = {
            jobDuties: _shared_data_static_data__WEBPACK_IMPORTED_MODULE_3__["STATIC_DATA"].jobDuties,
            channels: _shared_data_static_data__WEBPACK_IMPORTED_MODULE_3__["STATIC_DATA"].channels,
            businessRoles: _shared_data_static_data__WEBPACK_IMPORTED_MODULE_3__["STATIC_DATA"].businessRoles,
            teams: _shared_data_static_data__WEBPACK_IMPORTED_MODULE_3__["STATIC_DATA"].teams
          };
          this.applications = [];
          this.applicationAttributes = [];
          this.attributeOptions = [];
          this.selectedApplications = [];
          this.selectedRoles = [];
          this.commonAttributesForms = {
            FunctionalGroup: 'function_group_id',
            Centers: 'center_cd',
            ChannelsID: 'channel_id',
            ChannelsCD: 'channel_cd'
          };
        }

        _createClass(ProvisioningComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.testForm = this.fb.group({
              business_role_id: ['a'],
              channel_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              job_duty_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              team_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
            this.buildForms();

            if (this.isStaticData) {
              this.applications = this.localdata.get('applications');
              this.applicationAttributes = this.localdata.get('applicationAttributes') || [];
              this.attributeOptions = this.localdata.get('attributeOptions') || [];
              console.log(this.attributeOptions);
            }

            if (!this.isStaticData) {
              this.resetData();
              this.loadFirstLevelData();
              this.getApplications();
            }

            this.multipleSelectionBusinessRoles = this.firstLeveldata.businessRoles.map(function (item) {
              return {
                id: item.id,
                text: item.name
              };
            });
          }
        }, {
          key: "getOptions",
          value: function getOptions(id) {
            var format = id.replace(/\ /g, '_').toLowerCase();
            var options = this.attributeOptions['attr-opts-' + format];
            return options || [];
          }
        }, {
          key: "buildForms",
          value: function buildForms() {
            this.applicationForm = this.fb.group({
              application: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
            this.levelOneForm = this.fb.group({
              business_role_id: [''],
              channel_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              job_duty_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              team_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
            this.levelTwoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
              applications: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([])
            });
          }
        }, {
          key: "addRole",
          value: function addRole() {
            var roleField = this.levelOneForm.get('business_role_id');

            if (roleField.value.length < 1) {
              return;
            }

            var selectedRole = this.firstLeveldata.businessRoles.filter(function (x) {
              return x.id.toString() === roleField.value;
            });
            this.selectedRoles.push(selectedRole[0]);
            roleField.reset();
          }
        }, {
          key: "removeRole",
          value: function removeRole(id) {
            this.selectedRoles = this.selectedRoles.filter(function (x) {
              return x.id !== id;
            });
          }
        }, {
          key: "toggleRemoveAppIfNotMultiple",
          value: function toggleRemoveAppIfNotMultiple(appId) {
            this.applications = this.applications.map(function (item) {
              if (item.systemId === appId && !item.allowMultiple) {
                item.removed = !item.removed;
              }

              return item;
            });
          }
        }, {
          key: "getAppTranslation",
          value: function getAppTranslation(systemId) {
            var app;
            this.applications.forEach(function (item) {
              if (systemId === item.systemId) {
                app = item;
              }
            });
            return app.translations;
          }
        }, {
          key: "getApplicationBySystemId",
          value: function getApplicationBySystemId(systemId) {
            return this.applications.filter(function (item) {
              return item.systemId === systemId;
            })[0];
          }
        }, {
          key: "addApplication",
          value: function addApplication() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var appId, format, attributes;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!this.applicationForm.invalid) {
                        _context.next = 2;
                        break;
                      }

                      return _context.abrupt("return");

                    case 2:
                      appId = this.applicationForm.value.application;
                      format = appId.replace(/\ /g, '_').toLowerCase();
                      attributes = this.applicationAttributes['app-attr-' + format];
                      this.selectedApplications.push({
                        id: new Date().getTime(),
                        appId: appId,
                        attributes: attributes,
                        application: this.getApplicationBySystemId(appId)
                      });
                      console.log(this.selectedApplications);
                      this.toggleRemoveAppIfNotMultiple(appId);
                      this.applicationForm.reset(); // let app = this.applications.filter( x =>  x.id.toString() === appId)[0] as any;
                      // const attributes = await this.getApplicationAttributes(appId);
                      // const attributeDefaultValues: any = await this.getApplicationAttributeDefaults(appId);
                      // this.buildApplicationsFormArray(appId, attributeDefaultValues.defaultAppConfigs[0]);
                      // app = {
                      //   ...app,
                      //   attributes
                      // };
                      // this.selectedApplications.push(app);
                      // this.applicationForm.reset();

                      return _context.abrupt("return");

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "buildApplicationsFormArray",
          value: function buildApplicationsFormArray(appId, defaultValues) {
            var arrayFormGroup = this.fb.group({
              app_id: [appId, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              center_cd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              channel_cd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              channel_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              function_group_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });

            if (defaultValues) {
              arrayFormGroup.patchValue({
                center_cd: defaultValues.centerCD,
                channel_cd: defaultValues.channelCD,
                channel_id: defaultValues.channelId,
                function_group_id: defaultValues.functionGroupId
              });
            }

            this.applicationsFormArray.push(arrayFormGroup);
          }
        }, {
          key: "getAttributeFormName",
          value: function getAttributeFormName(attributeName) {
            var attrNameNoSpace = attributeName.replace(/\ /g, '');
            return this.commonAttributesForms[attrNameNoSpace];
          }
        }, {
          key: "getApplicationAttributeDefaults",
          value: function getApplicationAttributeDefaults(appId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var levelOneForm, levelOneData, defaults;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      levelOneForm = this.levelOneForm.value;

                      if (!(!levelOneForm.business_role_id && !levelOneForm.channel_id && !levelOneForm.job_duty_id && !levelOneForm.team_id)) {
                        _context2.next = 3;
                        break;
                      }

                      return _context2.abrupt("return", new Promise(function (res, rej) {
                        return res({
                          defaultAppConfigs: []
                        });
                      }));

                    case 3:
                      levelOneData = {
                        applicationId: appId,
                        businessRoleId: levelOneForm.business_role_id,
                        channelId: levelOneForm.channel_id,
                        jobDutyId: levelOneForm.job_duty_id,
                        teamId: levelOneForm.team_id
                      };
                      _context2.next = 6;
                      return this.api.list('default-app-config/getDefaultAttributes', levelOneData).toPromise();

                    case 6:
                      defaults = _context2.sent;
                      return _context2.abrupt("return", defaults);

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getApplicationAttributes",
          value: function getApplicationAttributes(appId) {
            var e_1, _a;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var attributes, attributesWithOptions, attributes_1, attributes_1_1, attr, options;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.api.list('attribute/getAllAppAttribute', {
                        appId: appId
                      }).toPromise();

                    case 2:
                      attributes = _context3.sent;
                      attributesWithOptions = [];
                      _context3.prev = 4;
                      attributes_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__asyncValues"])(attributes);

                    case 6:
                      _context3.next = 8;
                      return attributes_1.next();

                    case 8:
                      attributes_1_1 = _context3.sent;

                      if (attributes_1_1.done) {
                        _context3.next = 17;
                        break;
                      }

                      attr = attributes_1_1.value;
                      _context3.next = 13;
                      return this.getAttributeOptions(appId, attr.category);

                    case 13:
                      options = _context3.sent;
                      attributesWithOptions.push(Object.assign(Object.assign({}, attr), {
                        options: options
                      }));

                    case 15:
                      _context3.next = 6;
                      break;

                    case 17:
                      _context3.next = 22;
                      break;

                    case 19:
                      _context3.prev = 19;
                      _context3.t0 = _context3["catch"](4);
                      e_1 = {
                        error: _context3.t0
                      };

                    case 22:
                      _context3.prev = 22;
                      _context3.prev = 23;

                      if (!(attributes_1_1 && !attributes_1_1.done && (_a = attributes_1["return"]))) {
                        _context3.next = 27;
                        break;
                      }

                      _context3.next = 27;
                      return _a.call(attributes_1);

                    case 27:
                      _context3.prev = 27;

                      if (!e_1) {
                        _context3.next = 30;
                        break;
                      }

                      throw e_1.error;

                    case 30:
                      return _context3.finish(27);

                    case 31:
                      return _context3.finish(22);

                    case 32:
                      return _context3.abrupt("return", attributesWithOptions);

                    case 33:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[4, 19, 22, 32], [23,, 27, 31]]);
            }));
          }
        }, {
          key: "getAttributeOptions",
          value: function getAttributeOptions(appId, category) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var options;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.api.list('attribute/findValuesByCategory', {
                        appId: appId,
                        category: category
                      }).toPromise();

                    case 2:
                      options = _context4.sent;
                      return _context4.abrupt("return", options);

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "isRoleAlreadySelected",
          value: function isRoleAlreadySelected(id) {
            return this.selectedRoles.filter(function (x) {
              return x.id === id;
            }).length > 0;
          }
        }, {
          key: "isAppAlreadySelected",
          value: function isAppAlreadySelected(id) {
            return this.selectedApplications.filter(function (x) {
              return x.id === id;
            }).length > 0;
          } // removeApplication(id, index): void {
          //   this.selectedApplications = this.selectedApplications.filter( x =>  x.id !== id);
          //   this.applicationsFormArray.removeAt(index);
          //   console.log(this.levelTwoForm.value);
          // }

        }, {
          key: "removeApplication",
          value: function removeApplication(id) {
            var _this = this;

            this.selectedApplications = this.selectedApplications.filter(function (x) {
              if (x.id !== id) {
                return true;
              }

              if (!x.allowMultiple) {
                _this.toggleRemoveAppIfNotMultiple(x.appId);
              }

              return false;
            });
          }
        }, {
          key: "resetData",
          value: function resetData() {
            this.firstLeveldata = {
              jobDuties: [],
              channels: [],
              businessRoles: [],
              teams: []
            };
            this.applications = [];
          }
        }, {
          key: "getApplications",
          value: function getApplications() {
            var _this2 = this;

            this.getListOf('application').then(function (x) {
              _this2.applications = x;
            });
          }
        }, {
          key: "loadFirstLevelData",
          value: function loadFirstLevelData() {
            var _this3 = this;

            this.getListOf('job-duty').then(function (x) {
              _this3.firstLeveldata.jobDuties = x;
            });
            this.getListOf('business-role').then(function (x) {
              _this3.firstLeveldata.businessRoles = x;
            });
            this.getListOf('channel').then(function (x) {
              _this3.firstLeveldata.channels = x;
            });
            this.getListOf('team').then(function (x) {
              _this3.firstLeveldata.teams = x;
            });
          }
        }, {
          key: "getListOf",
          value: function getListOf(entity) {
            var _this4 = this;

            return new Promise(function (res, rej) {
              _this4.api.list(entity, {
                limit: 999,
                offset: 0
              }).subscribe(function (x) {
                res(x);
              });
            });
          }
        }, {
          key: "save",
          value: function save() {
            var _this5 = this;

            if (this.levelOneForm.invalid || this.levelTwoForm.invalid) {
              alert('All Fields are required');
              return;
            }

            var levelOne = this.levelOneForm.value;
            var levelTwo = this.levelTwoForm.value;
            var data = Object.assign(Object.assign({}, levelOne), {
              applications: _toConsumableArray(levelTwo.applications)
            });
            this.api.create('preset', data).subscribe(function (x) {
              _this5.levelOneForm.reset();

              _this5.levelTwoForm.reset();

              alert('Success');
            });
          } // getAttributeOptions(attrID): any {
          //   return STATIC_DATA.attributes.filter ( x => x.id === attrID)[0];
          // }

        }, {
          key: "onSelectionChange",
          value: function onSelectionChange(selectedList) {
            var _this6 = this;

            var businessRoleObject = {};
            this.selectedRoles = [];
            this.selectedBusinessRoles = selectedList;
            this.firstLeveldata.businessRoles.forEach(function (item) {
              businessRoleObject[item.id] = item;
            });
            selectedList.forEach(function (item) {
              _this6.selectedRoles.push(businessRoleObject[item.id]);
            });
          }
        }, {
          key: "applicationsFormArray",
          get: function get() {
            return this.levelTwoForm.get('applications');
          }
        }]);

        return ProvisioningComponent;
      }();

      ProvisioningComponent.ɵfac = function ProvisioningComponent_Factory(t) {
        return new (t || ProvisioningComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_local_data_service__WEBPACK_IMPORTED_MODULE_6__["LocalDataService"]));
      };

      ProvisioningComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ProvisioningComponent,
        selectors: [["app-provisioning"]],
        decls: 44,
        vars: 9,
        consts: [[1, "section-title"], [1, "levelOne", 3, "formGroup"], [1, "form-group"], ["formControlName", "job_duty_id", 1, "form-control", "form-control-sm"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "channel_id", 1, "form-control", "form-control-sm"], ["formControlName", "team_id", 1, "form-control", "form-control-sm"], [1, "applicationRole"], [3, "selection", "onSelectionChange"], [1, "application", 3, "formGroup"], ["formControlName", "application", 1, "form-control", "form-control-sm"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "level-two", 3, "formGroup"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "submit"], [1, "btn", "btn-primary", 3, "click"], [3, "value"], [3, "value", 4, "ngIf"], [1, "card"], [1, "card-header"], ["type", "button", 1, "btn", "btn-link", 3, "click"], [1, "card-body"], ["class", "form-group", 4, "ngFor", "ngForOf"], ["class", "form-control form-control-sm", 4, "ngIf", "ngIfElse"], ["inputField", ""], [1, "form-control", "form-control-sm"], [3, "selected", "value", 4, "ngFor", "ngForOf"], [3, "selected", "value"], ["type", "text", 1, "form-control", "form-control-sm"]],
        template: function ProvisioningComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "General Role Maintenance");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Organization");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "select", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ProvisioningComponent_option_9_Template, 2, 2, "option", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Channel");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "select", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ProvisioningComponent_option_15_Template, 2, 2, "option", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Team");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "select", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ProvisioningComponent_option_21_Template, 2, 2, "option", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Business Job Role");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "app-multiple-selection", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onSelectionChange", function ProvisioningComponent_Template_app_multiple_selection_onSelectionChange_26_listener($event) {
              return ctx.onSelectionChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Application Assignment");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Application");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "select", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, ProvisioningComponent_ng_container_35_Template, 2, 1, "ng-container", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProvisioningComponent_Template_button_click_36_listener() {
              return ctx.addApplication();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Add Application");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, ProvisioningComponent_div_40_Template, 8, 4, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProvisioningComponent_Template_button_click_42_listener() {
              return ctx.save();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.levelOneForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.firstLeveldata.jobDuties);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.firstLeveldata.channels);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.firstLeveldata.teams);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selection", ctx.multipleSelectionBusinessRoles);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.applicationForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.applications);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.levelTwoForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.selectedApplications);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _shared_components_multiple_selection_multiple_selection_component__WEBPACK_IMPORTED_MODULE_8__["MultipleSelectionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
        pipes: [_shared_pipes_itranslate_pipe__WEBPACK_IMPORTED_MODULE_9__["ItranslatePipe"]],
        styles: [".levelOne[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  justify-content: center;\n  padding: 0.5rem;\n  background: #fff;\n  margin-bottom: 0.5rem;\n  border-radius: 0.25rem;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.levelOne[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-right: 1rem;\n}\n.levelOne[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  padding: 0;\n}\n.levelOne[_ngcontent-%COMP%]   .applicationRole[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.levelOne[_ngcontent-%COMP%]   .applicationRole[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.levelOne[_ngcontent-%COMP%]   .applicationRole[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 2rem;\n  border-bottom: 1px dashed #ddd;\n  font-size: 0.9rem;\n}\n.levelOne[_ngcontent-%COMP%]   .applicationRole[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: smaller;\n  color: blue;\n  cursor: pointer;\n}\n.level-two[_ngcontent-%COMP%] {\n  position: relative;\n  height: calc(100vh - 26.5rem);\n  overflow-y: auto;\n  background: #fff;\n  padding: 0.5rem;\n  border-bottom: 0.5rem solid #fff;\n  border-bottom-left-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n  border-top: 1px solid #ddd;\n}\n.level-two[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.level-two[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  padding: 0.5rem;\n  font-size: 0.85rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.level-two[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  padding: 0;\n}\n.level-two[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-gap: 0.25rem;\n  padding: 0.5rem;\n}\n.submit[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n  text-align: right;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  margin-bottom: 0.25rem;\n}\n.application[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.5rem 0;\n  background: #fff;\n  border-bottom: 0.5rem solid #fff;\n}\n.application[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n}\n.application[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-right: 1rem;\n  font-size: 0.9rem;\n}\n.application[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 20rem;\n}\n.application[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  background: #fff;\n  padding: 0.5rem;\n  border-radius: 0.25rem;\n  margin: 0;\n  border-bottom: 2px solid #b5b5b5;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm92aXNpb25pbmcvcHJvdmlzaW9uaW5nL3Byb3Zpc2lvbmluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUVBLHlCQUFBO0VBQ0EsMEJBQUE7QUFBSjtBQUVJO0VBQ0ksT0FBQTtFQUNBLG1CQUFBO0FBQVI7QUFHUTtFQUNJLFVBQUE7QUFEWjtBQU9ZO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUFMaEI7QUFTUTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFQWjtBQVNZO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQVBoQjtBQVNnQjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFQcEI7QUFjQTtFQUNJLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDBCQUFBO0FBWEo7QUFlSTtFQUNJLHFCQUFBO0FBYlI7QUFnQkk7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBZlI7QUFpQlE7RUFDSSxpQkFBQTtFQUNBLFVBQUE7QUFmWjtBQW1CSTtFQUNJLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQWpCUjtBQXdCQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFyQko7QUF3QkE7RUFDSSxnQkFBQTtBQXJCSjtBQXVCSTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7QUFyQlI7QUF5QkE7RUFDSSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUF0Qko7QUF3Qkk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBdEJSO0FBd0JRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQXRCWjtBQXlCUTtFQUNJLFlBQUE7QUF2Qlo7QUEwQlE7RUFDSSxpQkFBQTtBQXhCWjtBQTZCQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0FBMUJKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wcm92aXNpb25pbmcvcHJvdmlzaW9uaW5nL3Byb3Zpc2lvbmluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZXZlbE9uZXtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOi41cmVtO1xyXG4gICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcblxyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG5cclxuICAgID4gZGl2e1xyXG4gICAgICAgIGZsZXg6MTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OjFyZW07XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFwcGxpY2F0aW9uUm9sZXtcclxuICAgICAgICAuZm9ybS1ncm91cHtcclxuICAgICAgICAgICAgPiBkaXZ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZ2FwOiAuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdWx7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkZGQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC45cmVtO1xyXG5cclxuICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOmJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmxldmVsLXR3byB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNi41cmVtKTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogLjVyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAuNXJlbSBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogLjI1cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC4yNXJlbTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xyXG5cclxuXHJcblxyXG4gICAgLmNhcmR7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtaGVhZGVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgICAgICAgcGFkZGluZzouNXJlbTtcclxuICAgICAgICBmb250LXNpemU6IC44NXJlbTtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IC43cmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWJvZHl7XHJcbiAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XHJcbiAgICAgICAgZ3JpZC1nYXA6IDAuMjVyZW07XHJcbiAgICAgICAgcGFkZGluZzouNXJlbTtcclxuXHJcblxyXG5cclxuXHJcbiAgICB9ICAgIFxyXG59XHJcbi5zdWJtaXR7XHJcbiAgICBwYWRkaW5nOiAuNXJlbSAwO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3Vwe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIFxyXG4gICAgbGFiZWx7XHJcbiAgICAgICAgZm9udC1zaXplOiAuNzVyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLjI1cmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYXBwbGljYXRpb24ge1xyXG4gICAgcGFkZGluZzogMC41cmVtIDAuNXJlbSAwO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1ib3R0b206IC41cmVtIHNvbGlkICNmZmY7XHJcblxyXG4gICAgPiBkaXZ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgICAgICBsYWJlbHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtOyAgXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjlyZW07ICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZWxlY3R7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogLjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2I1YjViNTtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProvisioningComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-provisioning',
            templateUrl: './provisioning.component.html',
            styleUrls: ['./provisioning.component.scss']
          }]
        }], function () {
          return [{
            type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
          }, {
            type: src_app_shared_services_local_data_service__WEBPACK_IMPORTED_MODULE_6__["LocalDataService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/data/static.data.ts":
    /*!********************************************!*\
      !*** ./src/app/shared/data/static.data.ts ***!
      \********************************************/

    /*! exports provided: STATIC_DATA */

    /***/
    function srcAppSharedDataStaticDataTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "STATIC_DATA", function () {
        return STATIC_DATA;
      });

      var STATIC_DATA = {
        applications: [{
          id: 1,
          name: 'SVC',
          attributes: [{
            id: 1,
            name: 'Function Group'
          }, {
            id: 2,
            name: 'Channel ID'
          }, {
            id: 3,
            name: 'Channel CD'
          }, {
            id: 4,
            name: 'Center CD'
          }]
        }, {
          id: 2,
          name: 'BOM',
          attributes: [{
            id: 1,
            name: 'Function Group'
          }, {
            id: 2,
            name: 'Channel ID'
          }, {
            id: 3,
            name: 'Channel CD'
          }, {
            id: 4,
            name: 'Center CD'
          }]
        }, {
          id: 3,
          name: 'Salesforce',
          attributes: [{
            id: 1,
            name: 'Function Group'
          }, {
            id: 2,
            name: 'Channel ID'
          }, {
            id: 3,
            name: 'Channel CD'
          }, {
            id: 4,
            name: 'Center CD'
          }, {
            id: 5,
            name: 'Profile'
          }]
        }],
        jobDuties: [{
          id: 1,
          name: 'Fullfilment / CFM'
        }, {
          id: 2,
          name: 'Smart Charge / SCS'
        }, {
          id: 3,
          name: 'Outbound Sales (call center) / OBS'
        }],
        businessRoles: [{
          id: 1,
          name: 'Supervisor'
        }, {
          id: 2,
          name: 'Frontline'
        }, {
          id: 3,
          name: 'Sales Manager'
        }, {
          id: 4,
          name: 'Support'
        }],
        channels: [{
          id: 5,
          name: 'CS_SC_14'
        }, {
          id: 1,
          name: 'VCC'
        }, {
          id: 2,
          name: 'OBS'
        }, {
          id: 3,
          name: 'RET'
        }, {
          id: 4,
          name: 'CSS'
        }],
        teams: [{
          id: 1,
          name: 'CS_SC_14'
        }, {
          id: 2,
          name: 'VCC'
        }, {
          id: 3,
          name: 'OBS'
        }, {
          id: 4,
          name: 'RET'
        }, {
          id: 5,
          name: 'CSS'
        }],
        attributes: [{
          id: 1,
          name: 'Function Group',
          options: [{
            label: 'RS-CSL-FRONTLINE',
            value: '1'
          }, {
            label: 'LTS-RET-SM',
            value: '1'
          }, {
            label: 'CFM3-F&S-SMART-LIVING ONLY SUPPORT',
            value: '1'
          }, {
            label: 'PCD-RET-SM',
            value: '1'
          }, {
            label: 'QOM-QSI',
            value: '1'
          }, {
            label: 'RS-CSL-FRONTLINE',
            value: '1'
          }, {
            label: 'CSS-IMSTS - AGENT',
            value: '1'
          }, {
            label: 'CSS-IMSTS - MANAGER',
            value: '1'
          }]
        }, {
          id: 2,
          name: 'Channel ID',
          options: [{
            label: 1,
            value: 1
          }, {
            label: 2,
            value: 2
          }, {
            label: 3,
            value: 3
          }, {
            label: 4,
            value: 4
          }, {
            label: 5,
            value: 5
          }]
        }, {
          id: 3,
          name: 'Channel CD',
          options: [{
            label: 'QOM',
            value: 'QOM'
          }, {
            label: 'CSS',
            value: 'CSS'
          }, {
            label: 'IBS',
            value: 'IBS'
          }, {
            label: 'VCC',
            value: 'VCC'
          }, {
            label: 'CFM1',
            value: 'CFM1'
          }, {
            label: 'CPA(LTS)',
            value: 'CPA(LTS)'
          }, {
            label: 'DS6',
            value: 'DS6'
          }]
        }, {
          id: 4,
          name: 'Center CD',
          options: [{
            label: 'CS SERVICE CENTER',
            value: 'CS SERVICE CENTER'
          }, {
            label: 'TTW/33',
            value: 'TTW/33'
          }, {
            label: 'SHOP TEAM 2',
            value: 'SHOP TEAM 2'
          }, {
            label: 'QOM',
            value: 'QOM'
          }, {
            label: 'RETENTION TEAM',
            value: 'RETENTION TEAM'
          }, {
            label: 'F&S',
            value: 'F&S'
          }, {
            label: 'DEL RETENTION',
            value: 'DEL RETENTION'
          }, {
            label: 'SHOP TEAM 7',
            value: 'SHOP TEAM 7'
          }]
        }, {
          id: 5,
          name: 'Profile',
          options: [{
            label: 'System Administration',
            value: 'System Administration'
          }, {
            label: 'Sales Manager',
            value: 'Sales Manager'
          }, {
            label: 'Product Encoder',
            value: 'Product Encoder'
          }, {
            label: 'Marketing',
            value: 'Marketing'
          }, {
            label: 'Developer',
            value: 'Developer'
          }]
        }]
      };
      /***/
    }
  }]);
})();
//# sourceMappingURL=modules-provisioning-provisioning-module-es5.js.map