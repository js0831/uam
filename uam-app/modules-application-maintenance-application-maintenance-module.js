(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-application-maintenance-application-maintenance-module"],{

/***/ "./src/app/modules/application-maintenance/application-maintenance.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/application-maintenance/application-maintenance.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ApplicationMaintenanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationMaintenanceModule", function() { return ApplicationMaintenanceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _pages_application_list_application_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/application-list/application-list.component */ "./src/app/modules/application-maintenance/pages/application-list/application-list.component.ts");
/* harmony import */ var _pages_application_form_application_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/application-form/application-form.component */ "./src/app/modules/application-maintenance/pages/application-form/application-form.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_application_add_application_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/application-add/application-add.component */ "./src/app/modules/application-maintenance/components/application-add/application-add.component.ts");








const routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: _pages_application_list_application_list_component__WEBPACK_IMPORTED_MODULE_1__["ApplicationListComponent"]
    },
    {
        path: 'form',
        component: _pages_application_form_application_form_component__WEBPACK_IMPORTED_MODULE_2__["ApplicationFormComponent"]
    }
];
class ApplicationMaintenanceModule {
}
ApplicationMaintenanceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ApplicationMaintenanceModule });
ApplicationMaintenanceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ApplicationMaintenanceModule_Factory(t) { return new (t || ApplicationMaintenanceModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ApplicationMaintenanceModule, { declarations: [_pages_application_list_application_list_component__WEBPACK_IMPORTED_MODULE_1__["ApplicationListComponent"],
        _pages_application_form_application_form_component__WEBPACK_IMPORTED_MODULE_2__["ApplicationFormComponent"],
        _components_application_add_application_add_component__WEBPACK_IMPORTED_MODULE_5__["ApplicationAddComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationMaintenanceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _pages_application_list_application_list_component__WEBPACK_IMPORTED_MODULE_1__["ApplicationListComponent"],
                    _pages_application_form_application_form_component__WEBPACK_IMPORTED_MODULE_2__["ApplicationFormComponent"],
                    _components_application_add_application_add_component__WEBPACK_IMPORTED_MODULE_5__["ApplicationAddComponent"]
                ],
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/application-maintenance/components/application-add/application-add.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/application-maintenance/components/application-add/application-add.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ApplicationAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationAddComponent", function() { return ApplicationAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_modules_application_maintenance_store_application_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/application-maintenance/store/application.actions */ "./src/app/modules/application-maintenance/store/application.actions.ts");
/* harmony import */ var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/modal/modal.component */ "./src/app/shared/components/modal/modal.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_language_field_language_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/language-field/language-field.component */ "./src/app/shared/components/language-field/language-field.component.ts");










function ApplicationAddComponent_form_1_app_language_field_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-language-field", 8);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Description")("form", ctx_r1.form);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function ApplicationAddComponent_form_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Allow multiple: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "System ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Description: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ApplicationAddComponent_form_1_app_language_field_12_Template, 1, 2, "app-language-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r0.form.controls.systemId.invalid && ctx_r0.form.controls.systemId.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showModal);
} }
class ApplicationAddComponent {
    constructor(formBuilder, modalService, store) {
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.store = store;
        this.showModal = false;
        this.submitButtonText = 'Save';
        this.modalTitle = 'Add new Application';
    }
    ngOnInit() {
        this.buildForm();
        this.subscription = [
            this.listenModalEvent(),
        ];
    }
    listenModalEvent() {
        return this.modalService.event.subscribe((x) => {
            if (!x.data) {
                return;
            }
            if (x.data.modalId === 'APPLICATION_FORM' && x.event === 'SHOW_MODAL') {
                this.showModal = x.data.value;
            }
        });
    }
    buildForm() {
        this.form = this.formBuilder.group({
            systemId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            allowMultiple: false
        });
    }
    closeModal() {
        this.showModal = false;
        this.form.reset();
        this.modalService.reset();
    }
    submitForm() {
        this.form.markAllAsTouched();
        if (!this.isValidForm()) {
            return;
        }
        const form = this.form.value;
        const data = {
            id: new Date().getTime().toString(),
            systemID: form.systemId,
            allowMultiple: form.allowMultiple,
            translations: form.translations
        };
        console.log(data);
        this.store.dispatch(Object(src_app_modules_application_maintenance_store_application_actions__WEBPACK_IMPORTED_MODULE_2__["create"])({ application: data }));
        this.closeModal();
    }
    isValidForm() {
        if (this.form.invalid) {
            alert('All fields are required');
            return false;
        }
        const englishTranslationExist = this.form.value.translations.filter(x => x.language === '1');
        if (englishTranslationExist.length === 0) {
            alert('English Translation is required');
            return false;
        }
        return true;
    }
    ngOnDestroy() {
        this.subscription.forEach(x => x.unsubscribe());
    }
}
ApplicationAddComponent.ɵfac = function ApplicationAddComponent_Factory(t) { return new (t || ApplicationAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
ApplicationAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApplicationAddComponent, selectors: [["app-application-add"]], decls: 2, vars: 5, consts: [[3, "show", "saveBtn", "closeBtn", "title", "close", "submit"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "form-group"], [1, "allowMultiple"], ["formControlName", "allowMultiple", "type", "checkbox"], ["formControlName", "systemId", "type", "text", 1, "form-control", 3, "ngClass"], [3, "title", "form", 4, "ngIf"], [3, "title", "form"]], template: function ApplicationAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function ApplicationAddComponent_Template_app_modal_close_0_listener() { return ctx.closeModal(); })("submit", function ApplicationAddComponent_Template_app_modal_submit_0_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ApplicationAddComponent_form_1_Template, 13, 5, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.showModal)("saveBtn", ctx.submitButtonText)("closeBtn", "Cancel")("title", ctx.modalTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form);
    } }, directives: [_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _shared_components_language_field_language_field_component__WEBPACK_IMPORTED_MODULE_7__["LanguageFieldComponent"]], styles: [".allowMultiple[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hcHBsaWNhdGlvbi1tYWludGVuYW5jZS9jb21wb25lbnRzL2FwcGxpY2F0aW9uLWFkZC9hcHBsaWNhdGlvbi1hZGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FwcGxpY2F0aW9uLW1haW50ZW5hbmNlL2NvbXBvbmVudHMvYXBwbGljYXRpb24tYWRkL2FwcGxpY2F0aW9uLWFkZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGxvd011bHRpcGxle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IC41cmVtO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationAddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-application-add',
                templateUrl: './application-add.component.html',
                styleUrls: ['./application-add.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/application-maintenance/pages/application-form/application-form.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/application-maintenance/pages/application-form/application-form.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ApplicationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationFormComponent", function() { return ApplicationFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _store_application_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/application.actions */ "./src/app/modules/application-maintenance/store/application.actions.ts");
/* harmony import */ var src_app_shared_services_local_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/local-data.service */ "./src/app/shared/services/local-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _shared_services_language_field_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../shared/services/language-field.service */ "./src/app/shared/services/language-field.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/attributes-list/attributes-list.component */ "./src/app/shared/components/attributes-list/attributes-list.component.ts");
/* harmony import */ var _shared_components_language_field_language_field_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/language-field/language-field.component */ "./src/app/shared/components/language-field/language-field.component.ts");












function ApplicationFormComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationFormComponent_div_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.update(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationFormComponent_div_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "System ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-language-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Allow Multiple: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Application Maintenance / ", ctx_r0.toEditApplication.systemID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Description")("form", ctx_r0.form);
} }
class ApplicationFormComponent {
    constructor(formBuilder, localData, router, store, languageFieldService) {
        this.formBuilder = formBuilder;
        this.localData = localData;
        this.router = router;
        this.store = store;
        this.languageFieldService = languageFieldService;
    }
    ngOnInit() {
        this.buildForm();
        this.toEditApplication = this.localData.get('editApplication');
        if (!this.toEditApplication) {
            this.subscription = this.store.select('application').subscribe(x => {
                if (!x.edit) {
                    this.cancel();
                    return;
                }
                this.toEditApplication = x.edit;
                this.localData.save('editApplication', x.edit);
                this.fillFormToEdit();
            });
            return;
        }
        this.fillFormToEdit();
    }
    fillFormToEdit() {
        this.form.patchValue({
            id: this.toEditApplication.id,
            systemId: this.toEditApplication.systemID,
            allowMultiple: this.toEditApplication.allowMultiple
        });
        setTimeout(x => {
            this.languageFieldService.appendCurrentTranslations(this.toEditApplication.translations, this.form);
        });
    }
    buildForm() {
        this.form = this.formBuilder.group({
            id: [''],
            systemId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            allowMultiple: false
        });
    }
    update() {
        const form = this.form.value;
        const data = {
            id: form.id,
            systemID: form.systemId,
            allowMultiple: form.allowMultiple,
            translations: form.translations,
            attributes: this.attributes
        };
        this.store.dispatch(Object(_store_application_actions__WEBPACK_IMPORTED_MODULE_2__["update"])({ application: data }));
        alert('success');
        this.router.navigate(['application-maintenance']);
    }
    onAttributeSelect(attributes) {
        this.attributes = attributes;
    }
    cancel() {
        this.router.navigate(['application-maintenance']);
    }
    ngOnDestroy() {
        this.localData.delete('editApplication');
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
ApplicationFormComponent.ɵfac = function ApplicationFormComponent_Factory(t) { return new (t || ApplicationFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_local_data_service__WEBPACK_IMPORTED_MODULE_3__["LocalDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_language_field_service__WEBPACK_IMPORTED_MODULE_6__["LanguageFieldService"])); };
ApplicationFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApplicationFormComponent, selectors: [["app-application-form"]], decls: 2, vars: 2, consts: [["class", "section", 4, "ngIf"], [3, "current", "onchange"], [1, "section"], [1, "section__head"], [1, "section__title", "section__title--large"], [1, "buttons"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "btn", "btn-sm", "btn-secondary", 3, "click"], [1, "section__body"], [1, "form", "form--flex", "form--inline", "applicationForm", 3, "formGroup"], [1, "form-group"], ["type", "text", "formControlName", "systemId", 1, "form-control", "form-control-sm"], [3, "title", "form"], ["formControlName", "allowMultiple", "type", "checkbox"]], template: function ApplicationFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ApplicationFormComponent_div_0_Template, 23, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-attributes-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onchange", function ApplicationFormComponent_Template_app_attributes_list_onchange_1_listener($event) { return ctx.onAttributeSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.toEditApplication);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("current", ctx.toEditApplication.attributes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _shared_components_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_8__["AttributesListComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_components_language_field_language_field_component__WEBPACK_IMPORTED_MODULE_9__["LanguageFieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]], styles: [".applicationForm[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 9rem;\n  text-align: right;\n}\n.applicationForm[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]:last-child   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hcHBsaWNhdGlvbi1tYWludGVuYW5jZS9wYWdlcy9hcHBsaWNhdGlvbi1mb3JtL2FwcGxpY2F0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUFBUjtBQUlRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBRlo7QUFPQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FBSkoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FwcGxpY2F0aW9uLW1haW50ZW5hbmNlL3BhZ2VzL2FwcGxpY2F0aW9uLWZvcm0vYXBwbGljYXRpb24tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHBsaWNhdGlvbkZvcm0ge1xyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIHdpZHRoOiA5cmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWdyb3VwOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGdhcDogLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYnV0dG9uc3tcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGdhcDogLjVyZW07XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-application-form',
                templateUrl: './application-form.component.html',
                styleUrls: ['./application-form.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_shared_services_local_data_service__WEBPACK_IMPORTED_MODULE_3__["LocalDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }, { type: _shared_services_language_field_service__WEBPACK_IMPORTED_MODULE_6__["LanguageFieldService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/application-maintenance/pages/application-list/application-list.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/application-maintenance/pages/application-list/application-list.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ApplicationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationListComponent", function() { return ApplicationListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_application_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/application.actions */ "./src/app/modules/application-maintenance/store/application.actions.ts");
/* harmony import */ var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var src_app_shared_services_local_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/local-data.service */ "./src/app/shared/services/local-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_application_add_application_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/application-add/application-add.component */ "./src/app/modules/application-maintenance/components/application-add/application-add.component.ts");
/* harmony import */ var _shared_pipes_itranslate_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/pipes/itranslate.pipe */ "./src/app/shared/pipes/itranslate.pipe.ts");










function ApplicationListComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "itranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationListComponent_tr_18_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const app_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.edit(app_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationListComponent_tr_18_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const app_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.delete(app_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const app_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](app_r1.systemID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, app_r1.translations));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", app_r1.allowMultiple === true ? "Yes" : "No", " ");
} }
class ApplicationListComponent {
    constructor(modalService, store, localData, router) {
        this.modalService = modalService;
        this.store = store;
        this.localData = localData;
        this.router = router;
        this.applications$ = store.select('application');
    }
    ngOnInit() {
        this.subscription = this.applications$.subscribe(application => {
            this.localData.save('applications', application.list);
        });
    }
    add() {
        this.modalService.showModal('APPLICATION_FORM', true);
    }
    delete(id) {
        const sure = confirm('Are you sure?');
        if (!sure) {
            return;
        }
        this.store.dispatch(Object(_store_application_actions__WEBPACK_IMPORTED_MODULE_1__["remove"])({ id }));
    }
    edit(app) {
        this.store.dispatch(Object(_store_application_actions__WEBPACK_IMPORTED_MODULE_1__["edit"])({ application: app }));
        this.router.navigate(['application-maintenance', 'form']);
    }
    ngOnDestroy() {
        this.modalService.reset();
    }
}
ApplicationListComponent.ɵfac = function ApplicationListComponent_Factory(t) { return new (t || ApplicationListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_local_data_service__WEBPACK_IMPORTED_MODULE_4__["LocalDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
ApplicationListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApplicationListComponent, selectors: [["app-application-list"]], decls: 21, vars: 3, consts: [[1, "section"], [1, "section__head"], [1, "section__title", "section__title--large"], [1, "btn", "btn-sm", "btn-primary", "attribute-heading__button", 3, "click"], [1, "section__body"], [1, "table", "table-sm", "draggable"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "table__actions"], [3, "click"]], template: function ApplicationListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Application Maintenance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationListComponent_Template_button_click_4_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add New Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "System ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Allow Multiple");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ApplicationListComponent_tr_18_Template, 14, 5, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-application-add");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 1, ctx.applications$).list);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _components_application_add_application_add_component__WEBPACK_IMPORTED_MODULE_7__["ApplicationAddComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _shared_pipes_itranslate_pipe__WEBPACK_IMPORTED_MODULE_8__["ItranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXBwbGljYXRpb24tbWFpbnRlbmFuY2UvcGFnZXMvYXBwbGljYXRpb24tbGlzdC9hcHBsaWNhdGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-application-list',
                templateUrl: './application-list.component.html',
                styleUrls: ['./application-list.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: src_app_shared_services_local_data_service__WEBPACK_IMPORTED_MODULE_4__["LocalDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-application-maintenance-application-maintenance-module.js.map