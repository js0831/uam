(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-attribute-maintenance-attribute-maintenance-module"],{

/***/ "./src/app/modules/attribute-maintenance/attribute-maintenance.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/attribute-maintenance/attribute-maintenance.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AttributeMaintenanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeMaintenanceModule", function() { return AttributeMaintenanceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _pages_attribute_maintenance_list_attribute_maintenance_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/attribute-maintenance-list/attribute-maintenance-list.component */ "./src/app/modules/attribute-maintenance/pages/attribute-maintenance-list/attribute-maintenance-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_attribute_form_attribute_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/attribute-form/attribute-form.component */ "./src/app/modules/attribute-maintenance/components/attribute-form/attribute-form.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_attribute_options_attribute_options_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/attribute-options/attribute-options.component */ "./src/app/modules/attribute-maintenance/components/attribute-options/attribute-options.component.ts");








const routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: _pages_attribute_maintenance_list_attribute_maintenance_list_component__WEBPACK_IMPORTED_MODULE_1__["AttributeMaintenanceListComponent"]
    }
];
class AttributeMaintenanceModule {
}
AttributeMaintenanceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AttributeMaintenanceModule });
AttributeMaintenanceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AttributeMaintenanceModule_Factory(t) { return new (t || AttributeMaintenanceModule)(); }, imports: [[
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AttributeMaintenanceModule, { declarations: [_pages_attribute_maintenance_list_attribute_maintenance_list_component__WEBPACK_IMPORTED_MODULE_1__["AttributeMaintenanceListComponent"],
        _components_attribute_form_attribute_form_component__WEBPACK_IMPORTED_MODULE_3__["AttributeFormComponent"],
        _components_attribute_options_attribute_options_component__WEBPACK_IMPORTED_MODULE_5__["AttributeOptionsComponent"]], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttributeMaintenanceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _pages_attribute_maintenance_list_attribute_maintenance_list_component__WEBPACK_IMPORTED_MODULE_1__["AttributeMaintenanceListComponent"],
                    _components_attribute_form_attribute_form_component__WEBPACK_IMPORTED_MODULE_3__["AttributeFormComponent"],
                    _components_attribute_options_attribute_options_component__WEBPACK_IMPORTED_MODULE_5__["AttributeOptionsComponent"]
                ],
                imports: [
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/attribute-maintenance/components/attribute-form/attribute-form.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/attribute-maintenance/components/attribute-form/attribute-form.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AttributeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeFormComponent", function() { return AttributeFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _store_attribute_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../store/attribute.actions */ "./src/app/modules/attribute-maintenance/store/attribute.actions.ts");
/* harmony import */ var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _shared_services_language_field_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../shared/services/language-field.service */ "./src/app/shared/services/language-field.service.ts");
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/modal/modal.component */ "./src/app/shared/components/modal/modal.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_language_field_language_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/language-field/language-field.component */ "./src/app/shared/components/language-field/language-field.component.ts");
/* harmony import */ var _attribute_options_attribute_options_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../attribute-options/attribute-options.component */ "./src/app/modules/attribute-maintenance/components/attribute-options/attribute-options.component.ts");












function AttributeFormComponent_app_language_field_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-language-field", 10);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Title")("form", ctx_r0.form);
} }
function AttributeFormComponent_app_attribute_options_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-attribute-options", 11);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeId", ctx_r1.form.get("guid").value);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class AttributeFormComponent {
    constructor(fb, modalService, store, languageFieldService) {
        this.fb = fb;
        this.modalService = modalService;
        this.store = store;
        this.languageFieldService = languageFieldService;
        this.modalTitle = 'Add New Attribute';
        this.submitButtonText = 'Save';
        this.showModal = false;
    }
    ngOnInit() {
        this.buildForm();
        this.subscription = [
            this.listenModalEvent(),
            this.watchAttributeStore()
        ];
    }
    watchAttributeStore() {
        return this.store.select('attribute').subscribe(x => {
            if (x.edit) {
                this.showModal = true;
                this.modalTitle = 'Edit ' + x.edit.id;
                this.submitButtonText = 'Update';
                setTimeout(y => {
                    this.fillAttributeForm(x.edit);
                });
            }
        });
    }
    fillAttributeForm(data) {
        this.form.patchValue(data);
        this.languageFieldService.appendCurrentTranslations(data.translations, this.form);
    }
    listenModalEvent() {
        return this.modalService.event.subscribe((x) => {
            if (!x.data) {
                return;
            }
            if (x.data.modalId === 'ATTRIBUTE_FORM' && x.event === 'SHOW_MODAL') {
                this.showModal = x.data.value;
            }
        });
    }
    buildForm() {
        this.form = this.fb.group({
            guid: [''],
            id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    closeModal() {
        this.showModal = false;
        this.submitButtonText = 'Save';
        this.modalTitle = 'Add New Attribute';
        this.form.reset();
    }
    submitForm() {
        this.form.markAllAsTouched();
        if (!this.isValidForm()) {
            return;
        }
        const values = this.form.value;
        if (!values.guid) {
            this.createAttribute(values);
            return;
        }
        else {
            this.updateAttribute(values);
        }
        this.closeModal();
    }
    createAttribute(data) {
        const payload = Object.assign(Object.assign({}, data), { guid: new Date().getTime().toString(), options: [] });
        this.store.dispatch(Object(_store_attribute_actions__WEBPACK_IMPORTED_MODULE_2__["create"])({
            attribute: payload
        }));
        this.store.dispatch(Object(_store_attribute_actions__WEBPACK_IMPORTED_MODULE_2__["edit"])({ attribute: payload }));
    }
    updateAttribute(data) {
        this.store.dispatch(Object(_store_attribute_actions__WEBPACK_IMPORTED_MODULE_2__["update"])({
            attribute: data
        }));
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
AttributeFormComponent.ɵfac = function AttributeFormComponent_Factory(t) { return new (t || AttributeFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_language_field_service__WEBPACK_IMPORTED_MODULE_5__["LanguageFieldService"])); };
AttributeFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AttributeFormComponent, selectors: [["app-attribute-form"]], decls: 23, vars: 13, consts: [[1, "large", 3, "show", "saveBtn", "closeBtn", "title", "close", "submit"], [1, "form", "form--flex", "form--inline", "main-form", 3, "formGroup"], [1, "form-group"], ["type", "text", "formControlName", "id", 1, "form-control", "form-control-sm", 3, "ngClass"], ["formControlName", "type", 1, "form-control", "form-control-sm", 3, "ngClass"], ["value", "string"], ["value", "numeric"], ["value", "boolean"], [3, "title", "form", 4, "ngIf"], [3, "attributeId", 4, "ngIf"], [3, "title", "form"], [3, "attributeId"]], template: function AttributeFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function AttributeFormComponent_Template_app_modal_close_0_listener() { return ctx.closeModal(); })("submit", function AttributeFormComponent_Template_app_modal_submit_0_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "String");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Numeric");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AttributeFormComponent_app_language_field_20_Template, 1, 2, "app-language-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AttributeFormComponent_app_attribute_options_22_Template, 1, 1, "app-attribute-options", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.showModal)("saveBtn", ctx.submitButtonText)("closeBtn", "Cancel")("title", ctx.modalTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.form.controls.id.invalid && ctx.form.controls.id.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.form.controls.id.invalid && ctx.form.controls.id.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("guid").value);
    } }, directives: [_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _shared_components_language_field_language_field_component__WEBPACK_IMPORTED_MODULE_8__["LanguageFieldComponent"], _attribute_options_attribute_options_component__WEBPACK_IMPORTED_MODULE_9__["AttributeOptionsComponent"]], styles: [".main-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.main-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdHRyaWJ1dGUtbWFpbnRlbmFuY2UvY29tcG9uZW50cy9hdHRyaWJ1dGUtZm9ybS9hdHRyaWJ1dGUtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLE9BQUE7QUFBUjtBQUVRO0VBQ0ksb0JBQUE7QUFBWiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXR0cmlidXRlLW1haW50ZW5hbmNlL2NvbXBvbmVudHMvYXR0cmlidXRlLWZvcm0vYXR0cmlidXRlLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1mb3JtIHtcclxuICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICBmbGV4OiAxO1xyXG5cclxuICAgICAgICBsYWJlbHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttributeFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-attribute-form',
                templateUrl: './attribute-form.component.html',
                styleUrls: ['./attribute-form.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }, { type: _shared_services_language_field_service__WEBPACK_IMPORTED_MODULE_5__["LanguageFieldService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/attribute-maintenance/components/attribute-options/attribute-options.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/attribute-maintenance/components/attribute-options/attribute-options.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: AttributeOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeOptionsComponent", function() { return AttributeOptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _store_attribute_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/attribute.actions */ "./src/app/modules/attribute-maintenance/store/attribute.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _shared_services_language_field_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../shared/services/language-field.service */ "./src/app/shared/services/language-field.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_language_field_language_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/language-field/language-field.component */ "./src/app/shared/components/language-field/language-field.component.ts");
/* harmony import */ var _shared_pipes_itranslate_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/pipes/itranslate.pipe */ "./src/app/shared/pipes/itranslate.pipe.ts");










function AttributeOptionsComponent_app_language_field_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-language-field", 13);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Description")("form", ctx_r0.form);
} }
function AttributeOptionsComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttributeOptionsComponent_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.cancelEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AttributeOptionsComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "itranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AttributeOptionsComponent_tr_28_Template_input_change_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const option_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.setDefault(option_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttributeOptionsComponent_tr_28_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const option_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.edit(option_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttributeOptionsComponent_tr_28_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const option_r5 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.delete(option_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, option_r5.translations));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", option_r5.isDefault);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class AttributeOptionsComponent {
    constructor(fb, store, languageFieldService) {
        this.fb = fb;
        this.store = store;
        this.languageFieldService = languageFieldService;
        this.options = [];
        this.subscription = [];
        this.showDescription = true;
    }
    ngOnInit() {
        this.buildForm();
        this.subscription = [
            this.watchAttributeStore()
        ];
    }
    watchAttributeStore() {
        return this.store.select('attribute').subscribe(x => {
            if (x.edit) {
                console.log('watchAttributeStore', x.edit);
                this.options = x.edit.options;
            }
        });
    }
    buildForm() {
        this.form = this.fb.group({
            id: [''],
            value: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    add() {
        this.form.markAllAsTouched();
        if (!this.isValidForm()) {
            return;
        }
        const data = {
            id: new Date().getTime().toString(),
            value: this.form.value.value,
            isDefault: false,
            translations: this.form.value.translations
        };
        this.store.dispatch(Object(_store_attribute_actions__WEBPACK_IMPORTED_MODULE_2__["addOption"])({
            id: this.attributeId,
            option: data
        }));
        this.form.reset();
        this.showDescription = false;
        setTimeout(x => {
            this.showDescription = true;
        });
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
    delete(option) {
        const sure = confirm('Are you sure?');
        if (!sure) {
            return;
        }
        this.store.dispatch(Object(_store_attribute_actions__WEBPACK_IMPORTED_MODULE_2__["deleteOption"])({
            id: option.id
        }));
    }
    edit(option) {
        this.form.get('id').patchValue(option.id);
        this.form.get('value').patchValue(option.value);
        this.languageFieldService.appendCurrentTranslations(option.translations, this.form);
    }
    setDefault(option) {
        this.store.dispatch(Object(_store_attribute_actions__WEBPACK_IMPORTED_MODULE_2__["setDefaultOption"])({
            option
        }));
    }
    cancelEdit() {
        this.form.reset();
        this.showDescription = false;
        setTimeout(x => {
            this.showDescription = true;
        });
    }
    ngOnDestroy() {
        this.subscription.forEach(x => x.unsubscribe());
    }
}
AttributeOptionsComponent.ɵfac = function AttributeOptionsComponent_Factory(t) { return new (t || AttributeOptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_language_field_service__WEBPACK_IMPORTED_MODULE_4__["LanguageFieldService"])); };
AttributeOptionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AttributeOptionsComponent, selectors: [["app-attribute-options"]], inputs: { attributeId: "attributeId" }, decls: 29, vars: 8, consts: [[1, "section"], [1, "section__head"], [1, "section__title"], [1, "section__body"], [1, "form", "form--flex", "form--inline", "optionsForm", 3, "formGroup"], [1, "form-group"], [3, "title", "form", 4, "ngIf"], ["type", "text", "formControlName", "value", 1, "form-control", "form-control-sm", 3, "ngClass"], ["type", "button", 1, "btn", "btn-sm", "btn-success", 3, "click"], ["class", "btn btn-sm btn-secondary", "type", "button", 3, "click", 4, "ngIf"], [1, "table", "table-sm", "draggable"], ["scope", "col"], [4, "ngFor", "ngForOf"], [3, "title", "form"], ["type", "button", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "checked", "change"], [1, "table__actions"], [3, "click"]], template: function AttributeOptionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Options ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AttributeOptionsComponent_app_language_field_9_Template, 1, 2, "app-language-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttributeOptionsComponent_Template_button_click_14_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AttributeOptionsComponent_button_16_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AttributeOptionsComponent_tr_28_Template, 15, 5, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.form.controls.value.invalid && ctx.form.controls.value.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.form.controls.id.value ? "Update" : "Add", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _shared_components_language_field_language_field_component__WEBPACK_IMPORTED_MODULE_6__["LanguageFieldComponent"]], pipes: [_shared_pipes_itranslate_pipe__WEBPACK_IMPORTED_MODULE_7__["ItranslatePipe"]], styles: [".optionsForm[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.optionsForm[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]:nth-child(2) {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdHRyaWJ1dGUtbWFpbnRlbmFuY2UvY29tcG9uZW50cy9hdHRyaWJ1dGUtb3B0aW9ucy9hdHRyaWJ1dGUtb3B0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7QUFBSTtFQUNJLGlCQUFBO0FBRVIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2F0dHJpYnV0ZS1tYWludGVuYW5jZS9jb21wb25lbnRzL2F0dHJpYnV0ZS1vcHRpb25zL2F0dHJpYnV0ZS1vcHRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9wdGlvbnNGb3JtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG4gICAgLmZvcm0tZ3JvdXA6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttributeOptionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-attribute-options',
                templateUrl: './attribute-options.component.html',
                styleUrls: ['./attribute-options.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _shared_services_language_field_service__WEBPACK_IMPORTED_MODULE_4__["LanguageFieldService"] }]; }, { attributeId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/attribute-maintenance/pages/attribute-maintenance-list/attribute-maintenance-list.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/attribute-maintenance/pages/attribute-maintenance-list/attribute-maintenance-list.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: AttributeMaintenanceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeMaintenanceListComponent", function() { return AttributeMaintenanceListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_attribute_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/attribute.actions */ "./src/app/modules/attribute-maintenance/store/attribute.actions.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var src_app_shared_services_local_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/local-data.service */ "./src/app/shared/services/local-data.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_attribute_form_attribute_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/attribute-form/attribute-form.component */ "./src/app/modules/attribute-maintenance/components/attribute-form/attribute-form.component.ts");
/* harmony import */ var _shared_pipes_itranslate_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/pipes/itranslate.pipe */ "./src/app/shared/pipes/itranslate.pipe.ts");









function AttributeMaintenanceListComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "itranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttributeMaintenanceListComponent_tr_18_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const attr_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.edit(attr_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttributeMaintenanceListComponent_tr_18_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const attr_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.delete(attr_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const attr_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](attr_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, attr_r1.translations));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", attr_r1.type, " ");
} }
class AttributeMaintenanceListComponent {
    constructor(modalService, localData, store) {
        this.modalService = modalService;
        this.localData = localData;
        this.store = store;
        this.attributes$ = store.select('attribute');
        this.subscription = this.attributes$.subscribe(attributes => {
            this.localData.save('attributes', attributes.list);
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.modalService.reset();
    }
    add() {
        this.modalService.showModal('ATTRIBUTE_FORM', true);
    }
    delete(attr) {
        const sure = confirm('Are you sure?');
        if (!sure) {
            return;
        }
        this.store.dispatch(Object(_store_attribute_actions__WEBPACK_IMPORTED_MODULE_1__["remove"])({
            id: attr.guid
        }));
    }
    edit(attr) {
        this.store.dispatch(Object(_store_attribute_actions__WEBPACK_IMPORTED_MODULE_1__["edit"])({
            attribute: attr
        }));
    }
}
AttributeMaintenanceListComponent.ɵfac = function AttributeMaintenanceListComponent_Factory(t) { return new (t || AttributeMaintenanceListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_local_data_service__WEBPACK_IMPORTED_MODULE_3__["LocalDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
AttributeMaintenanceListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AttributeMaintenanceListComponent, selectors: [["app-attribute-maintenance-list"]], decls: 21, vars: 3, consts: [[1, "section"], [1, "section__head"], [1, "section__title", "section__title--large"], [1, "btn", "btn-sm", "btn-primary", "attribute-heading__button", 3, "click"], [1, "section__body"], [1, "table", "table-sm", "draggable"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "capitalize"], [1, "table__actions"], [3, "click"]], template: function AttributeMaintenanceListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Attributes Maintenance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttributeMaintenanceListComponent_Template_button_click_4_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add New Attribute");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AttributeMaintenanceListComponent_tr_18_Template, 14, 5, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-attribute-form");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 1, ctx.attributes$).list);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _components_attribute_form_attribute_form_component__WEBPACK_IMPORTED_MODULE_6__["AttributeFormComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _shared_pipes_itranslate_pipe__WEBPACK_IMPORTED_MODULE_7__["ItranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXR0cmlidXRlLW1haW50ZW5hbmNlL3BhZ2VzL2F0dHJpYnV0ZS1tYWludGVuYW5jZS1saXN0L2F0dHJpYnV0ZS1tYWludGVuYW5jZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttributeMaintenanceListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-attribute-maintenance-list',
                templateUrl: './attribute-maintenance-list.component.html',
                styleUrls: ['./attribute-maintenance-list.component.scss']
            }]
    }], function () { return [{ type: _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"] }, { type: src_app_shared_services_local_data_service__WEBPACK_IMPORTED_MODULE_3__["LocalDataService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-attribute-maintenance-attribute-maintenance-module.js.map