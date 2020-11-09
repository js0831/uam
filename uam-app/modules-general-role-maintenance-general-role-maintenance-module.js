(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-general-role-maintenance-general-role-maintenance-module"],{

/***/ "./src/app/modules/general-role-maintenance/components/application-assignment/application-assignment.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/general-role-maintenance/components/application-assignment/application-assignment.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: ApplicationAssignmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationAssignmentComponent", function() { return ApplicationAssignmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_pipes_itranslate_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/pipes/itranslate.pipe */ "./src/app/shared/pipes/itranslate.pipe.ts");






function ApplicationAssignmentComponent_ng_container_7_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "itranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const app_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", app_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, app_r2.translations));
} }
function ApplicationAssignmentComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ApplicationAssignmentComponent_ng_container_7_option_1_Template, 3, 4, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const app_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isAlreadyAdded(app_r2.id) || app_r2.allowMultiple);
} }
function ApplicationAssignmentComponent_div_12_div_7_input_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 19);
} }
function ApplicationAssignmentComponent_div_12_div_7_ng_template_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "itranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const option_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", option_r12.isDefault)("value", option_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, option_r12.translations));
} }
function ApplicationAssignmentComponent_div_12_div_7_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ApplicationAssignmentComponent_div_12_div_7_ng_template_5_ng_container_2_Template, 4, 5, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const attr_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", attr_r7.options);
} }
function ApplicationAssignmentComponent_div_12_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "itranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ApplicationAssignmentComponent_div_12_div_7_input_4_Template, 1, 0, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ApplicationAssignmentComponent_div_12_div_7_ng_template_5_Template, 3, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const attr_r7 = ctx.$implicit;
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, attr_r7.translations), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !attr_r7.options || attr_r7.options.length === 0)("ngIfElse", _r9);
} }
function ApplicationAssignmentComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "itranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationAssignmentComponent_div_12_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const app_r5 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.removeApplication(app_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ApplicationAssignmentComponent_div_12_div_7_Template, 7, 5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const app_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, app_r5.translations), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", app_r5.attributes);
} }
class ApplicationAssignmentComponent {
    constructor(store) {
        this.store = store;
        this.onchange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.applications = [];
        this.applications$ = store.select('application');
    }
    ngOnInit() {
    }
    isAlreadyAdded(appId) {
        return this.applications.filter(x => appId === x.id).length > 0;
    }
    add() {
        if (!this.application) {
            return;
        }
        this.applications$.subscribe((x) => {
            const toAdd = x.list.filter(attr => attr.id === this.application)[0];
            console.log(this.applications, toAdd);
            this.applications.push(toAdd);
        });
        this.application = '';
        this.onchange.emit(this.applications);
    }
    removeApplication(app) {
        this.applications = this.applications.filter(x => x.id !== app.id);
        this.onchange.emit(this.applications);
    }
}
ApplicationAssignmentComponent.ɵfac = function ApplicationAssignmentComponent_Factory(t) { return new (t || ApplicationAssignmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
ApplicationAssignmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApplicationAssignmentComponent, selectors: [["app-application-assignment"]], outputs: { onchange: "onchange" }, decls: 13, vars: 5, consts: [[1, "section"], [1, "section__head"], [1, "section__title"], [1, "applicationSelect"], ["type", "text", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-sm", "btn-success", "appliation-heading__button", 3, "click"], [1, "section__body"], ["class", "card", 4, "ngFor", "ngForOf"], [3, "value", 4, "ngIf"], [3, "value"], [1, "card"], [1, "card-header"], ["type", "button", 1, "btn", "btn-link", 3, "click"], [1, "card-body"], ["class", "form-group", 4, "ngFor", "ngForOf"], [1, "form-group"], ["class", "form-control form-control-sm", "type", "text", 4, "ngIf", "ngIfElse"], ["withOptions", ""], ["type", "text", 1, "form-control", "form-control-sm"], [1, "form-control", "form-control-sm"], [3, "selected", "value"]], template: function ApplicationAssignmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Application Assignment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ApplicationAssignmentComponent_Template_select_ngModelChange_5_listener($event) { return ctx.application = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ApplicationAssignmentComponent_ng_container_7_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationAssignmentComponent_Template_button_click_9_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ApplicationAssignmentComponent_div_12_Template, 8, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.application);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 3, ctx.applications$).list);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.applications);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], _shared_pipes_itranslate_pipe__WEBPACK_IMPORTED_MODULE_4__["ItranslatePipe"]], styles: [".card[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  padding: 0.5rem;\n  font-size: 0.85rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  padding: 0;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-gap: 0.25rem;\n  padding: 0.5rem;\n}\n.applicationSelect[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.applicationSelect[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  min-width: 15rem;\n}\n.applicationSelect[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsLXJvbGUtbWFpbnRlbmFuY2UvY29tcG9uZW50cy9hcHBsaWNhdGlvbi1hc3NpZ25tZW50L2FwcGxpY2F0aW9uLWFzc2lnbm1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKO0FBQ0k7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQ1I7QUFDUTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtBQUNaO0FBR0k7RUFDSSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFEUjtBQUtBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBRko7QUFJSTtFQUNJLGdCQUFBO0FBRlI7QUFJSTtFQUNJLGVBQUE7QUFGUiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZ2VuZXJhbC1yb2xlLW1haW50ZW5hbmNlL2NvbXBvbmVudHMvYXBwbGljYXRpb24tYXNzaWdubWVudC9hcHBsaWNhdGlvbi1hc3NpZ25tZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XHJcbiAgICBcclxuICAgIC5jYXJkLWhlYWRlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtYm9keXtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XHJcbiAgICAgICAgZ3JpZC1nYXA6IDAuMjVyZW07XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYXBwbGljYXRpb25TZWxlY3Qge1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiAuNXJlbTtcclxuXHJcbiAgICBzZWxlY3R7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxNXJlbTtcclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbWluLXdpZHRoOiA4cmVtO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationAssignmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-application-assignment',
                templateUrl: './application-assignment.component.html',
                styleUrls: ['./application-assignment.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, { onchange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/general-role-maintenance/components/assigned-applications-attributes/assigned-applications-attributes.component.ts":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/modules/general-role-maintenance/components/assigned-applications-attributes/assigned-applications-attributes.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: AssignedApplicationsAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignedApplicationsAttributesComponent", function() { return AssignedApplicationsAttributesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_pipes_itranslate_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/pipes/itranslate.pipe */ "./src/app/shared/pipes/itranslate.pipe.ts");





function AssignedApplicationsAttributesComponent_div_2_tr_30_input_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 17);
} }
function AssignedApplicationsAttributesComponent_div_2_tr_30_ng_template_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "itranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const option_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", option_r10.isDefault)("value", option_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, option_r10.translations));
} }
function AssignedApplicationsAttributesComponent_div_2_tr_30_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AssignedApplicationsAttributesComponent_div_2_tr_30_ng_template_8_ng_container_2_Template, 4, 5, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const attr_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", attr_r5.options);
} }
function AssignedApplicationsAttributesComponent_div_2_tr_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "itranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AssignedApplicationsAttributesComponent_div_2_tr_30_input_7_Template, 1, 0, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AssignedApplicationsAttributesComponent_div_2_tr_30_ng_template_8_Template, 3, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const attr_r5 = ctx.$implicit;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](attr_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, attr_r5.translations));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !attr_r5.options || attr_r5.options.length === 0)("ngIfElse", _r7);
} }
function AssignedApplicationsAttributesComponent_div_2_div_36_div_5_input_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 17);
} }
function AssignedApplicationsAttributesComponent_div_2_div_36_div_5_ng_template_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "itranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const option_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", option_r19.isDefault)("value", option_r19.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, option_r19.translations));
} }
function AssignedApplicationsAttributesComponent_div_2_div_36_div_5_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AssignedApplicationsAttributesComponent_div_2_div_36_div_5_ng_template_5_ng_container_2_Template, 4, 5, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const attr_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", attr_r14.options);
} }
function AssignedApplicationsAttributesComponent_div_2_div_36_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "itranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AssignedApplicationsAttributesComponent_div_2_div_36_div_5_input_4_Template, 1, 0, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AssignedApplicationsAttributesComponent_div_2_div_36_div_5_ng_template_5_Template, 3, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const attr_r14 = ctx.$implicit;
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, attr_r14.translations), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !attr_r14.options || attr_r14.options.length === 0)("ngIfElse", _r16);
} }
function AssignedApplicationsAttributesComponent_div_2_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "itranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AssignedApplicationsAttributesComponent_div_2_div_36_div_5_Template, 7, 5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const app_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, app_r12.translations), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", app_r12.attributes);
} }
function AssignedApplicationsAttributesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " From Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " To Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssignedApplicationsAttributesComponent_div_2_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const i_r2 = ctx.index; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.remove(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Attributes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AssignedApplicationsAttributesComponent_div_2_tr_30_Template, 10, 6, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Applications ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AssignedApplicationsAttributesComponent_div_2_div_36_Template, 6, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r1.daterange.from);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r1.daterange.to);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r1.attributes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r1.applications);
} }
class AssignedApplicationsAttributesComponent {
    constructor() {
        this.ondelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    remove(index) {
        this.ondelete.emit(index);
    }
}
AssignedApplicationsAttributesComponent.ɵfac = function AssignedApplicationsAttributesComponent_Factory(t) { return new (t || AssignedApplicationsAttributesComponent)(); };
AssignedApplicationsAttributesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AssignedApplicationsAttributesComponent, selectors: [["app-assigned-applications-attributes"]], inputs: { data: "data" }, outputs: { ondelete: "ondelete" }, decls: 3, vars: 1, consts: [[1, "section"], [1, "section__body"], ["class", "section", 4, "ngFor", "ngForOf"], [1, "section__head", "main"], [1, "section__title"], [1, "daterange"], [1, "remove", 3, "click"], [1, "section", "attributes"], [1, "section__head"], [1, "table", "table-sm"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "section", "applications"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "blocker"], ["class", "form-control form-control-sm", "type", "text", 4, "ngIf", "ngIfElse"], ["withOptions", ""], ["type", "text", 1, "form-control", "form-control-sm"], [1, "form-control", "form-control-sm"], [3, "selected", "value"], [1, "card"], [1, "card-header"], [1, "card-body"], ["class", "form-group", 4, "ngFor", "ngForOf"], [1, "form-group"]], template: function AssignedApplicationsAttributesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AssignedApplicationsAttributesComponent_div_2_Template, 38, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]], pipes: [_shared_pipes_itranslate_pipe__WEBPACK_IMPORTED_MODULE_3__["ItranslatePipe"]], styles: [".daterange[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n}\n.daterange[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0.25rem 0;\n  display: flex;\n  gap: 0.5rem;\n  font-size: 0.75rem;\n}\n.daterange[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.section__head[_ngcontent-%COMP%] {\n  background: #eee;\n  border-bottom: 1px solid #bdbdbd;\n  padding: 0.25rem;\n}\n.section__head.main[_ngcontent-%COMP%] {\n  background: #cecece;\n}\n.section__body[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0.25rem;\n}\n.section__title[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.attributes[_ngcontent-%COMP%]   .section__body[_ngcontent-%COMP%] {\n  padding: 0.25rem;\n}\n.attributes[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .attributes[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.attributes[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .attributes[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  width: 15rem;\n}\n.applications[_ngcontent-%COMP%]   .section__body[_ngcontent-%COMP%] {\n  padding: 0.25rem;\n}\n.title[_ngcontent-%COMP%] {\n  padding: 0.25rem;\n  background: #eee;\n  margin-bottom: 0.25rem;\n}\n.title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.8rem;\n}\n.card[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  padding: 0.25rem;\n  font-size: 0.7rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  padding: 0;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-gap: 0.25rem;\n  padding: 0rem 0.25rem;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n}\n.blocker[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  background: transparent;\n  top: 0;\n  left: 0;\n}\n.remove[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: blue !important;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsLXJvbGUtbWFpbnRlbmFuY2UvY29tcG9uZW50cy9hc3NpZ25lZC1hcHBsaWNhdGlvbnMtYXR0cmlidXRlcy9hc3NpZ25lZC1hcHBsaWNhdGlvbnMtYXR0cmlidXRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxTQUFBO0FBQ0o7QUFDSTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUNRO0VBQ0ksZ0JBQUE7QUFDWjtBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FBREo7QUFHSTtFQUNJLG1CQUFBO0FBRFI7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGSjtBQUtBO0VBQ0ksaUJBQUE7QUFGSjtBQU1JO0VBQ0ksZ0JBQUE7QUFIUjtBQU1JO0VBQ0ksaUJBQUE7QUFKUjtBQU1JO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBSlI7QUFTSTtFQUNJLGdCQUFBO0FBTlI7QUFVQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQVBKO0FBUUk7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBTlI7QUFVQTtFQUNJLHFCQUFBO0FBUEo7QUFTSTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBUFI7QUFTUTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtBQVBaO0FBV0k7RUFDSSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBVFI7QUFXUTtFQUNJLGlCQUFBO0FBVFo7QUFjQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FBWEo7QUFjQTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBWEoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2dlbmVyYWwtcm9sZS1tYWludGVuYW5jZS9jb21wb25lbnRzL2Fzc2lnbmVkLWFwcGxpY2F0aW9ucy1hdHRyaWJ1dGVzL2Fzc2lnbmVkLWFwcGxpY2F0aW9ucy1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGVyYW5nZSB7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBnYXA6IDJyZW07XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgIHBhZGRpbmc6IC4yNXJlbSAwO1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBnYXA6IC41cmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xyXG5cclxuICAgICAgICBzdHJvbmcge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnNlY3Rpb25fX2hlYWR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiZGJkYmQ7XHJcbiAgICBwYWRkaW5nOiAuMjVyZW07XHJcblxyXG4gICAgJi5tYWluIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjY2VjZWNlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2VjdGlvbl9fYm9keSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAuMjVyZW07XHJcbn1cclxuXHJcbi5zZWN0aW9uX190aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTsgXHJcbn1cclxuXHJcbi5hdHRyaWJ1dGVzIHtcclxuICAgIC5zZWN0aW9uX19ib2R5IHtcclxuICAgICAgICBwYWRkaW5nOiAuMjVyZW07XHJcbiAgICB9ICAgICBcclxuXHJcbiAgICB0aCwgdGQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XHJcbiAgICB9XHJcbiAgICBpbnB1dCwgc2VsZWN0IHtcclxuICAgICAgICBmb250LXNpemU6IC42NXJlbTtcclxuICAgICAgICB3aWR0aDogMTVyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hcHBsaWNhdGlvbnMge1xyXG4gICAgLnNlY3Rpb25fX2JvZHkge1xyXG4gICAgICAgIHBhZGRpbmc6IC4yNXJlbTtcclxuICAgIH0gICAgIFxyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgcGFkZGluZzogLjI1cmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2VlZTtcclxuICAgIG1hcmdpbi1ib3R0b206IC4yNXJlbTtcclxuICAgIHN0cm9uZ3tcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG4gICAgXHJcbiAgICAuY2FyZC1oZWFkZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICAgICAgICBwYWRkaW5nOiAuMjVyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtYm9keXtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XHJcbiAgICAgICAgZ3JpZC1nYXA6IDAuMjVyZW07XHJcbiAgICAgICAgcGFkZGluZzogMHJlbSAwLjI1cmVtOyBcclxuXHJcbiAgICAgICAgaW5wdXQsIHNlbGVjdHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9udC1zaXplOiAuNnJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ibG9ja2VyIHsgICAgXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxufVxyXG5cclxuLnJlbW92ZSB7XHJcbiAgICBmb250LXNpemU6IC43cmVtO1xyXG4gICAgY29sb3I6IGJsdWUgIWltcG9ydGFudDtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssignedApplicationsAttributesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-assigned-applications-attributes',
                templateUrl: './assigned-applications-attributes.component.html',
                styleUrls: ['./assigned-applications-attributes.component.scss']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ondelete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/general-role-maintenance/general-role-maintenance.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/general-role-maintenance/general-role-maintenance.module.ts ***!
  \*************************************************************************************/
/*! exports provided: GeneralRoleMaintenanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRoleMaintenanceModule", function() { return GeneralRoleMaintenanceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _pages_general_role_maintenance_general_role_maintenance_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/general-role-maintenance/general-role-maintenance.component */ "./src/app/modules/general-role-maintenance/pages/general-role-maintenance/general-role-maintenance.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_application_assignment_application_assignment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/application-assignment/application-assignment.component */ "./src/app/modules/general-role-maintenance/components/application-assignment/application-assignment.component.ts");
/* harmony import */ var _pages_general_role_list_general_role_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/general-role-list/general-role-list.component */ "./src/app/modules/general-role-maintenance/pages/general-role-list/general-role-list.component.ts");
/* harmony import */ var _pages_dummy_data_dummy_data_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/dummy-data/dummy-data.component */ "./src/app/modules/general-role-maintenance/pages/dummy-data/dummy-data.component.ts");
/* harmony import */ var _components_assigned_applications_attributes_assigned_applications_attributes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/assigned-applications-attributes/assigned-applications-attributes.component */ "./src/app/modules/general-role-maintenance/components/assigned-applications-attributes/assigned-applications-attributes.component.ts");










const routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: _pages_general_role_list_general_role_list_component__WEBPACK_IMPORTED_MODULE_5__["GeneralRoleListComponent"]
    },
    {
        path: 'form',
        component: _pages_general_role_maintenance_general_role_maintenance_component__WEBPACK_IMPORTED_MODULE_1__["GeneralRoleMaintenanceComponent"]
    },
    {
        path: 'dummy-data',
        component: _pages_dummy_data_dummy_data_component__WEBPACK_IMPORTED_MODULE_6__["DummyDataComponent"]
    },
];
class GeneralRoleMaintenanceModule {
}
GeneralRoleMaintenanceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GeneralRoleMaintenanceModule });
GeneralRoleMaintenanceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GeneralRoleMaintenanceModule_Factory(t) { return new (t || GeneralRoleMaintenanceModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GeneralRoleMaintenanceModule, { declarations: [_pages_general_role_maintenance_general_role_maintenance_component__WEBPACK_IMPORTED_MODULE_1__["GeneralRoleMaintenanceComponent"],
        _components_application_assignment_application_assignment_component__WEBPACK_IMPORTED_MODULE_4__["ApplicationAssignmentComponent"],
        _pages_general_role_list_general_role_list_component__WEBPACK_IMPORTED_MODULE_5__["GeneralRoleListComponent"],
        _pages_dummy_data_dummy_data_component__WEBPACK_IMPORTED_MODULE_6__["DummyDataComponent"],
        _components_assigned_applications_attributes_assigned_applications_attributes_component__WEBPACK_IMPORTED_MODULE_7__["AssignedApplicationsAttributesComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRoleMaintenanceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _pages_general_role_maintenance_general_role_maintenance_component__WEBPACK_IMPORTED_MODULE_1__["GeneralRoleMaintenanceComponent"],
                    _components_application_assignment_application_assignment_component__WEBPACK_IMPORTED_MODULE_4__["ApplicationAssignmentComponent"],
                    _pages_general_role_list_general_role_list_component__WEBPACK_IMPORTED_MODULE_5__["GeneralRoleListComponent"],
                    _pages_dummy_data_dummy_data_component__WEBPACK_IMPORTED_MODULE_6__["DummyDataComponent"],
                    _components_assigned_applications_attributes_assigned_applications_attributes_component__WEBPACK_IMPORTED_MODULE_7__["AssignedApplicationsAttributesComponent"]
                ],
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/general-role-maintenance/pages/dummy-data/dummy-data.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/general-role-maintenance/pages/dummy-data/dummy-data.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DummyDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DummyDataComponent", function() { return DummyDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_local_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../shared/services/local-data.service */ "./src/app/shared/services/local-data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function DummyDataComponent_li_41_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DummyDataComponent_li_41_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const i_r5 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.delete(i_r5, "organization"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4.name, " ");
} }
function DummyDataComponent_li_44_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DummyDataComponent_li_44_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r9 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.delete(i_r9, "channel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r8.name, " ");
} }
function DummyDataComponent_li_47_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DummyDataComponent_li_47_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const i_r13 = ctx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.delete(i_r13, "team"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r12.name, " ");
} }
function DummyDataComponent_li_50_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DummyDataComponent_li_50_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const i_r17 = ctx.index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.delete(i_r17, "jobrole"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r16.name, " ");
} }
const _c0 = function () { return { standalone: true }; };
class DummyDataComponent {
    constructor(localData) {
        this.localData = localData;
        this.model = {
            organization: '',
            team: '',
            channel: '',
            jobrole: '',
        };
        this.list = {
            organization: [],
            team: [],
            channel: [],
            jobrole: [],
        };
    }
    ngOnInit() {
        const currentData = this.localData.get('dummy-general-roles') || {
            organization: [],
            team: [],
            channel: [],
            jobrole: [],
        };
        this.list = currentData;
    }
    save(what) {
        const value = this.model[what];
        if (value.length === 0) {
            return;
        }
        this.model[what] = '';
        this.list[what].push({
            id: new Date().getTime(),
            name: value
        });
        this.saveLocalData();
    }
    delete(index, what) {
        const sure = confirm('Are you sure?');
        if (!sure) {
            return;
        }
        this.list[what] = this.list[what].filter((el, i) => {
            return i !== index;
        });
        this.saveLocalData();
    }
    saveLocalData() {
        this.localData.save('dummy-general-roles', this.list);
    }
}
DummyDataComponent.ɵfac = function DummyDataComponent_Factory(t) { return new (t || DummyDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_local_data_service__WEBPACK_IMPORTED_MODULE_1__["LocalDataService"])); };
DummyDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DummyDataComponent, selectors: [["app-dummy-data"]], decls: 51, vars: 16, consts: [[1, "section"], [1, "section__head"], [1, "section__title", "section__title--large"], [1, "section__body"], [1, "table", "table-sm", "draggable"], ["scope", "col"], [1, "input-fields"], [3, "submit"], ["type", "text", 1, "form-control", "form-control-sm", 3, "ngModelOptions", "ngModel", "ngModelChange"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [4, "ngFor", "ngForOf"], [3, "click"]], template: function DummyDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "General Roles Dummy Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Organization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Channel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Business Job Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function DummyDataComponent_Template_form_submit_19_listener() { return ctx.save("organization"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DummyDataComponent_Template_input_ngModelChange_20_listener($event) { return ctx.model.organization = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DummyDataComponent_Template_button_click_21_listener() { return ctx.save("organization"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function DummyDataComponent_Template_form_submit_24_listener() { return ctx.save("channel"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DummyDataComponent_Template_input_ngModelChange_25_listener($event) { return ctx.model.channel = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DummyDataComponent_Template_button_click_26_listener() { return ctx.save("channel"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function DummyDataComponent_Template_form_submit_29_listener() { return ctx.save("team"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DummyDataComponent_Template_input_ngModelChange_30_listener($event) { return ctx.model.team = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DummyDataComponent_Template_button_click_31_listener() { return ctx.save("team"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function DummyDataComponent_Template_form_submit_34_listener() { return ctx.save("jobrole"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DummyDataComponent_Template_input_ngModelChange_35_listener($event) { return ctx.model.jobrole = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DummyDataComponent_Template_button_click_36_listener() { return ctx.save("jobrole"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, DummyDataComponent_li_41_Template, 4, 1, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, DummyDataComponent_li_44_Template, 4, 1, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, DummyDataComponent_li_47_Template, 4, 1, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, DummyDataComponent_li_50_Template, 4, 1, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0))("ngModel", ctx.model.organization);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0))("ngModel", ctx.model.channel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0))("ngModel", ctx.model.team);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0))("ngModel", ctx.model.jobrole);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list.organization);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list.channel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list.team);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list.jobrole);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".input-fields[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed #ddd;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: red;\n  cursor: pointer;\n}\n\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  border-right: 1px solid #ddd;\n  border-left: 1px solid #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsLXJvbGUtbWFpbnRlbmFuY2UvcGFnZXMvZHVtbXktZGF0YS9kdW1teS1kYXRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUFBUjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFESjs7QUFHSTtFQUNJLDhCQUFBO0VBRUEsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFGUjs7QUFJUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFGWjs7QUFPQTtFQUNJLDRCQUFBO0VBQ0EsMkJBQUE7QUFKSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZ2VuZXJhbC1yb2xlLW1haW50ZW5hbmNlL3BhZ2VzL2R1bW15LWRhdGEvZHVtbXktZGF0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1maWVsZHN7XHJcbiAgICB0aCBmb3Jte1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBnYXA6IC41cmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG51bHtcclxuICAgIGxpc3Qtc3R5bGU6bm9uZTtcclxuICAgIHBhZGRpbmc6MDtcclxuICAgIG1hcmdpbjowO1xyXG5cclxuICAgIGxpe1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2RkZDtcclxuXHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IC43NXJlbTtcclxuICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG50ZCwgdGh7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGRkO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DummyDataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dummy-data',
                templateUrl: './dummy-data.component.html',
                styleUrls: ['./dummy-data.component.scss']
            }]
    }], function () { return [{ type: _shared_services_local_data_service__WEBPACK_IMPORTED_MODULE_1__["LocalDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/general-role-maintenance/pages/general-role-list/general-role-list.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/general-role-maintenance/pages/general-role-list/general-role-list.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: GeneralRoleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRoleListComponent", function() { return GeneralRoleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class GeneralRoleListComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    add() {
        this.router.navigate(['general-role-maintenance', 'form']);
    }
    edit() {
        this.router.navigate(['general-role-maintenance', 'form']);
    }
    delete() {
    }
}
GeneralRoleListComponent.ɵfac = function GeneralRoleListComponent_Factory(t) { return new (t || GeneralRoleListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
GeneralRoleListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralRoleListComponent, selectors: [["app-general-role-list"]], decls: 35, vars: 0, consts: [[1, "section"], [1, "section__head"], [1, "section__title", "section__title--large"], [1, "btn", "btn-sm", "btn-primary", "attribute-heading__button", 3, "click"], [1, "section__body"], [1, "table", "table-sm", "draggable"], ["scope", "col"], [1, "table__actions"], [3, "click"]], template: function GeneralRoleListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "General Role List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralRoleListComponent_Template_button_click_4_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add New General Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Organization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Channel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Business Job Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Organization 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Channel 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Team 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Business Job Role ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralRoleListComponent_Template_a_click_30_listener() { return ctx.edit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralRoleListComponent_Template_a_click_33_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZ2VuZXJhbC1yb2xlLW1haW50ZW5hbmNlL3BhZ2VzL2dlbmVyYWwtcm9sZS1saXN0L2dlbmVyYWwtcm9sZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRoleListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-general-role-list',
                templateUrl: './general-role-list.component.html',
                styleUrls: ['./general-role-list.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/general-role-maintenance/pages/general-role-maintenance/general-role-maintenance.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/general-role-maintenance/pages/general-role-maintenance/general-role-maintenance.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: GeneralRoleMaintenanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRoleMaintenanceComponent", function() { return GeneralRoleMaintenanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_components_general_role_form_general_role_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/general-role-form/general-role-form.component */ "./src/app/shared/components/general-role-form/general-role-form.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_daterange_form_daterange_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/daterange-form/daterange-form.component */ "./src/app/shared/components/daterange-form/daterange-form.component.ts");
/* harmony import */ var _shared_components_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/attributes-list/attributes-list.component */ "./src/app/shared/components/attributes-list/attributes-list.component.ts");
/* harmony import */ var _components_application_assignment_application_assignment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/application-assignment/application-assignment.component */ "./src/app/modules/general-role-maintenance/components/application-assignment/application-assignment.component.ts");
/* harmony import */ var _components_assigned_applications_attributes_assigned_applications_attributes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/assigned-applications-attributes/assigned-applications-attributes.component */ "./src/app/modules/general-role-maintenance/components/assigned-applications-attributes/assigned-applications-attributes.component.ts");










function GeneralRoleMaintenanceComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-daterange-form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onadd", function GeneralRoleMaintenanceComponent_div_2_Template_app_daterange_form_onadd_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.add($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-attributes-list", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onchange", function GeneralRoleMaintenanceComponent_div_2_Template_app_attributes_list_onchange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.setAttributes($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-application-assignment", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onchange", function GeneralRoleMaintenanceComponent_div_2_Template_app_application_assignment_onchange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.setApplications($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GeneralRoleMaintenanceComponent_app_assigned_applications_attributes_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-assigned-applications-attributes", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ondelete", function GeneralRoleMaintenanceComponent_app_assigned_applications_attributes_3_Template_app_assigned_applications_attributes_ondelete_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.deleteAssigned($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r1.generalRoleData);
} }
class GeneralRoleMaintenanceComponent {
    constructor(fb, router) {
        this.fb = fb;
        this.router = router;
        this.resetFlag = true;
        this.generalRoleData = [];
        this.data = {
            daterange: null,
            attributes: [],
            applications: []
        };
    }
    ngOnInit() {
        this.form = this.fb.group({});
    }
    add(dateRange) {
        this.data.daterange = dateRange;
        if (!this.isValidateGeneralRoleData()) {
            return;
        }
        this.generalRoleData.push(this.data);
        this.data = {
            daterange: null,
            attributes: [],
            applications: []
        };
        this.resetFlag = false;
        setTimeout(x => this.resetFlag = true, 100);
    }
    setAttributes(attributes) {
        this.data.attributes = attributes;
    }
    setApplications(applications) {
        this.data.applications = applications;
    }
    cancel() {
        this.router.navigate(['general-role-maintenance']);
    }
    save() {
        this.form.markAllAsTouched();
        if (this.form.invalid) {
            alert('Please fill required fields');
            return;
        }
        if (this.generalRoleData.length === 0) {
            alert('Attibutes and Applications Assigmnent are required');
            return;
        }
        console.log(this.form.value);
        console.log(this.generalRoleData);
        alert('Success');
        this.router.navigate(['general-role-maintenance']);
    }
    isValidateGeneralRoleData() {
        if (this.data.attributes.length === 0) {
            alert('Attribute is required');
            return false;
        }
        if (this.data.applications.length === 0) {
            alert('Application is required');
            return false;
        }
        return true;
    }
    deleteAssigned(num) {
        this.generalRoleData = this.generalRoleData.filter((item, index) => index !== num);
    }
}
GeneralRoleMaintenanceComponent.ɵfac = function GeneralRoleMaintenanceComponent_Factory(t) { return new (t || GeneralRoleMaintenanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
GeneralRoleMaintenanceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralRoleMaintenanceComponent, selectors: [["app-general-role-maintenance"]], decls: 11, vars: 4, consts: [[3, "parentForm", "title"], [1, "section"], ["class", "section__body", 4, "ngIf"], [3, "data", "ondelete", 4, "ngIf"], [1, "section__body"], [1, "form-buttons"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-secondary", 3, "click"], [3, "onadd"], [3, "onchange"], [3, "data", "ondelete"]], template: function GeneralRoleMaintenanceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-general-role-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeneralRoleMaintenanceComponent_div_2_Template, 4, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralRoleMaintenanceComponent_app_assigned_applications_attributes_3_Template, 1, 1, "app-assigned-applications-attributes", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralRoleMaintenanceComponent_Template_button_click_7_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralRoleMaintenanceComponent_Template_button_click_9_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentForm", ctx.form)("title", "General Role Maintenance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.resetFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.generalRoleData.length > 0);
    } }, directives: [_shared_components_general_role_form_general_role_form_component__WEBPACK_IMPORTED_MODULE_3__["GeneralRoleFormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_components_daterange_form_daterange_form_component__WEBPACK_IMPORTED_MODULE_5__["DaterangeFormComponent"], _shared_components_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_6__["AttributesListComponent"], _components_application_assignment_application_assignment_component__WEBPACK_IMPORTED_MODULE_7__["ApplicationAssignmentComponent"], _components_assigned_applications_attributes_assigned_applications_attributes_component__WEBPACK_IMPORTED_MODULE_8__["AssignedApplicationsAttributesComponent"]], styles: [".form-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsLXJvbGUtbWFpbnRlbmFuY2UvcGFnZXMvZ2VuZXJhbC1yb2xlLW1haW50ZW5hbmNlL2dlbmVyYWwtcm9sZS1tYWludGVuYW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsLXJvbGUtbWFpbnRlbmFuY2UvcGFnZXMvZ2VuZXJhbC1yb2xlLW1haW50ZW5hbmNlL2dlbmVyYWwtcm9sZS1tYWludGVuYW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWJ1dHRvbnN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBnYXA6IDAuNXJlbTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRoleMaintenanceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-general-role-maintenance',
                templateUrl: './general-role-maintenance.component.html',
                styleUrls: ['./general-role-maintenance.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-general-role-maintenance-general-role-maintenance-module.js.map