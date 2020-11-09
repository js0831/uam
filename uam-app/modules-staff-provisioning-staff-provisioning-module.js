(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-staff-provisioning-staff-provisioning-module"],{

/***/ "./src/app/modules/staff-provisioning/components/assigned-general-role-attributes/assigned-general-role-attributes.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/staff-provisioning/components/assigned-general-role-attributes/assigned-general-role-attributes.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: AssignedGeneralRoleAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignedGeneralRoleAttributesComponent", function() { return AssignedGeneralRoleAttributesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_local_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/local-data.service */ "./src/app/shared/services/local-data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_pipes_itranslate_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/pipes/itranslate.pipe */ "./src/app/shared/pipes/itranslate.pipe.ts");






function AssignedGeneralRoleAttributesComponent_div_2_tr_54_input_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 15);
} }
function AssignedGeneralRoleAttributesComponent_div_2_tr_54_ng_template_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "itranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const option_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", option_r9.isDefault)("value", option_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, option_r9.translations));
} }
function AssignedGeneralRoleAttributesComponent_div_2_tr_54_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AssignedGeneralRoleAttributesComponent_div_2_tr_54_ng_template_8_ng_container_2_Template, 4, 5, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const attr_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", attr_r4.options);
} }
function AssignedGeneralRoleAttributesComponent_div_2_tr_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "itranslate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AssignedGeneralRoleAttributesComponent_div_2_tr_54_input_7_Template, 1, 0, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AssignedGeneralRoleAttributesComponent_div_2_tr_54_ng_template_8_Template, 3, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const attr_r4 = ctx.$implicit;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](attr_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, attr_r4.translations));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !attr_r4.options || attr_r4.options.length === 0)("ngIfElse", _r6);
} }
function AssignedGeneralRoleAttributesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssignedGeneralRoleAttributesComponent_div_2_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r2 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.remove(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " General Role ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Organization: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Channel: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Team: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Business Job Role: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Attributes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, AssignedGeneralRoleAttributesComponent_div_2_tr_54_Template, 10, 6, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r1.daterange.from);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r1.daterange.to);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.displayGeneralRole("organization", row_r1.generalRole.jobDuty), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.displayGeneralRole("channel", row_r1.generalRole.channel), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.displayGeneralRole("team", row_r1.generalRole.team), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.displayGeneralRole("jobrole", row_r1.generalRole.businessRole), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r1.attributes);
} }
class AssignedGeneralRoleAttributesComponent {
    constructor(localData) {
        this.localData = localData;
        this.dummyGeneralRoles = this.localData.get('dummy-general-roles') || {
            organization: [],
            team: [],
            channel: [],
            jobrole: [],
        };
        this.ondelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    remove(index) {
        this.ondelete.emit(index);
    }
    displayGeneralRole(field, id) {
        return this.dummyGeneralRoles[field].filter(x => x.id.toString() === id)[0].name;
    }
}
AssignedGeneralRoleAttributesComponent.ɵfac = function AssignedGeneralRoleAttributesComponent_Factory(t) { return new (t || AssignedGeneralRoleAttributesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_local_data_service__WEBPACK_IMPORTED_MODULE_1__["LocalDataService"])); };
AssignedGeneralRoleAttributesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AssignedGeneralRoleAttributesComponent, selectors: [["app-assigned-general-role-attributes"]], inputs: { data: "data" }, outputs: { ondelete: "ondelete" }, decls: 3, vars: 1, consts: [[1, "section"], [1, "section__body"], ["class", "section", 4, "ngFor", "ngForOf"], [1, "section__head", "main"], [1, "section__title"], [1, "daterange"], [1, "remove", 3, "click"], [1, "section", "attributes"], [1, "section__head"], [1, "table", "table-sm"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "blocker"], ["class", "form-control form-control-sm", "type", "text", 4, "ngIf", "ngIfElse"], ["withOptions", ""], ["type", "text", 1, "form-control", "form-control-sm"], [1, "form-control", "form-control-sm"], [3, "selected", "value"]], template: function AssignedGeneralRoleAttributesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AssignedGeneralRoleAttributesComponent_div_2_Template, 56, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]], pipes: [_shared_pipes_itranslate_pipe__WEBPACK_IMPORTED_MODULE_4__["ItranslatePipe"]], styles: [".daterange[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n}\n.daterange[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0.25rem 0;\n  display: flex;\n  gap: 0.5rem;\n  font-size: 0.75rem;\n}\n.daterange[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.section__head[_ngcontent-%COMP%] {\n  background: #eee;\n  border-bottom: 1px solid #bdbdbd;\n  padding: 0.25rem;\n}\n.section__head.main[_ngcontent-%COMP%] {\n  background: #cecece;\n}\n.section__body[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0.25rem;\n}\n.section__title[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.attributes[_ngcontent-%COMP%]   .section__body[_ngcontent-%COMP%] {\n  padding: 0.25rem;\n}\n.attributes[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .attributes[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.attributes[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .attributes[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  width: 15rem;\n}\n.title[_ngcontent-%COMP%] {\n  padding: 0.25rem;\n  background: #eee;\n  margin-bottom: 0.25rem;\n}\n.title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.8rem;\n}\n.blocker[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  background: transparent;\n  top: 0;\n  left: 0;\n}\n.remove[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: blue !important;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zdGFmZi1wcm92aXNpb25pbmcvY29tcG9uZW50cy9hc3NpZ25lZC1nZW5lcmFsLXJvbGUtYXR0cmlidXRlcy9hc3NpZ25lZC1nZW5lcmFsLXJvbGUtYXR0cmlidXRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxTQUFBO0FBQ0o7QUFDSTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUNRO0VBQ0ksZ0JBQUE7QUFDWjtBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FBREo7QUFHSTtFQUNJLG1CQUFBO0FBRFI7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGSjtBQUtBO0VBQ0ksaUJBQUE7QUFGSjtBQU1JO0VBQ0ksZ0JBQUE7QUFIUjtBQU1JO0VBQ0ksaUJBQUE7QUFKUjtBQU1JO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBSlI7QUFTQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQU5KO0FBT0k7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBTFI7QUFTQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FBTko7QUFTQTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBTkoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3N0YWZmLXByb3Zpc2lvbmluZy9jb21wb25lbnRzL2Fzc2lnbmVkLWdlbmVyYWwtcm9sZS1hdHRyaWJ1dGVzL2Fzc2lnbmVkLWdlbmVyYWwtcm9sZS1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGVyYW5nZSB7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBnYXA6IDJyZW07XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgIHBhZGRpbmc6IC4yNXJlbSAwO1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBnYXA6IC41cmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xyXG5cclxuICAgICAgICBzdHJvbmcge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnNlY3Rpb25fX2hlYWR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiZGJkYmQ7XHJcbiAgICBwYWRkaW5nOiAuMjVyZW07XHJcblxyXG4gICAgJi5tYWluIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjY2VjZWNlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2VjdGlvbl9fYm9keSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAuMjVyZW07XHJcbn1cclxuXHJcbi5zZWN0aW9uX190aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTsgXHJcbn1cclxuXHJcbi5hdHRyaWJ1dGVzIHtcclxuICAgIC5zZWN0aW9uX19ib2R5IHtcclxuICAgICAgICBwYWRkaW5nOiAuMjVyZW07XHJcbiAgICB9ICAgICBcclxuXHJcbiAgICB0aCwgdGQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XHJcbiAgICB9XHJcbiAgICBpbnB1dCwgc2VsZWN0IHtcclxuICAgICAgICBmb250LXNpemU6IC42NXJlbTtcclxuICAgICAgICB3aWR0aDogMTVyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4udGl0bGUge1xyXG4gICAgcGFkZGluZzogLjI1cmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2VlZTtcclxuICAgIG1hcmdpbi1ib3R0b206IC4yNXJlbTtcclxuICAgIHN0cm9uZ3tcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ibG9ja2VyIHsgICAgXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxufVxyXG5cclxuLnJlbW92ZSB7XHJcbiAgICBmb250LXNpemU6IC43cmVtO1xyXG4gICAgY29sb3I6IGJsdWUgIWltcG9ydGFudDtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssignedGeneralRoleAttributesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-assigned-general-role-attributes',
                templateUrl: './assigned-general-role-attributes.component.html',
                styleUrls: ['./assigned-general-role-attributes.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_services_local_data_service__WEBPACK_IMPORTED_MODULE_1__["LocalDataService"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ondelete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/staff-provisioning/components/staff-general-role/staff-general-role.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/staff-provisioning/components/staff-general-role/staff-general-role.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: StaffGeneralRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffGeneralRoleComponent", function() { return StaffGeneralRoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class StaffGeneralRoleComponent {
    constructor() { }
    ngOnInit() {
    }
}
StaffGeneralRoleComponent.ɵfac = function StaffGeneralRoleComponent_Factory(t) { return new (t || StaffGeneralRoleComponent)(); };
StaffGeneralRoleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StaffGeneralRoleComponent, selectors: [["app-staff-general-role"]], decls: 26, vars: 0, consts: [[1, "section"], [1, "section__head"], [1, "section__title"], [1, "section__body"], [1, "form", "form--flex"], [1, "form-group"], [1, "form-control", "form-control-sm"]], template: function StaffGeneralRoleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "General Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Organization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Channel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Business Job Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3RhZmYtcHJvdmlzaW9uaW5nL2NvbXBvbmVudHMvc3RhZmYtZ2VuZXJhbC1yb2xlL3N0YWZmLWdlbmVyYWwtcm9sZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StaffGeneralRoleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-staff-general-role',
                templateUrl: './staff-general-role.component.html',
                styleUrls: ['./staff-general-role.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/staff-provisioning/components/staff-information-form/staff-information-form.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/staff-provisioning/components/staff-information-form/staff-information-form.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: StaffInformationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffInformationFormComponent", function() { return StaffInformationFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function (a0) { return { "is-invalid": a0 }; };
function StaffInformationFormComponent_form_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Staff Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.parentForm.get("information"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r0.isInvalid("staffNumber")));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r0.isInvalid("name")));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r0.isInvalid("email")));
} }
class StaffInformationFormComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.buildForm();
    }
    buildForm() {
        this.parentForm.addControl('information', this.fb.group({
            staffNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
        }));
    }
    isInvalid(name) {
        const control = this.parentForm.get('information').get(name);
        return control.invalid && control.touched;
    }
}
StaffInformationFormComponent.ɵfac = function StaffInformationFormComponent_Factory(t) { return new (t || StaffInformationFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
StaffInformationFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StaffInformationFormComponent, selectors: [["app-staff-information-form"]], inputs: { parentForm: "parentForm" }, decls: 6, vars: 1, consts: [[1, "section"], [1, "section__head"], [1, "section__title"], [1, "section__body"], ["class", "form form--flex form--inline", 3, "formGroup", 4, "ngIf"], [1, "form", "form--flex", "form--inline", 3, "formGroup"], [1, "form-group"], ["type", "text", "formControlName", "staffNumber", 1, "form-control", "form-control-sm", 3, "ngClass"], ["type", "text", "formControlName", "name", 1, "form-control", "form-control-sm", 3, "ngClass"], ["type", "email", "formControlName", "email", 1, "form-control", "form-control-sm", 3, "ngClass"]], template: function StaffInformationFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Staff Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StaffInformationFormComponent_form_5_Template, 13, 10, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.parentForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".form-group[_ngcontent-%COMP%]:first-child   label[_ngcontent-%COMP%] {\n  width: 5rem;\n}\n.form-group[_ngcontent-%COMP%]:first-child   input[_ngcontent-%COMP%] {\n  width: 10rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n  margin-left: 2rem;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 17.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zdGFmZi1wcm92aXNpb25pbmcvY29tcG9uZW50cy9zdGFmZi1pbmZvcm1hdGlvbi1mb3JtL3N0YWZmLWluZm9ybWF0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSxXQUFBO0FBRFo7QUFHUTtFQUNJLFlBQUE7QUFEWjtBQUlJO0VBQ0ksb0JBQUE7RUFDQSxpQkFBQTtBQUZSO0FBS0k7RUFDSSxjQUFBO0FBSFIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3N0YWZmLXByb3Zpc2lvbmluZy9jb21wb25lbnRzL3N0YWZmLWluZm9ybWF0aW9uLWZvcm0vc3RhZmYtaW5mb3JtYXRpb24tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3VwIHtcclxuICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwcmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxhYmVsIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgICB3aWR0aDogMTcuNXJlbTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StaffInformationFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-staff-information-form',
                templateUrl: './staff-information-form.component.html',
                styleUrls: ['./staff-information-form.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { parentForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/staff-provisioning/pages/staff-provisioning-form/staff-provisioning-form.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/staff-provisioning/pages/staff-provisioning-form/staff-provisioning-form.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: StaffProvisioningFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffProvisioningFormComponent", function() { return StaffProvisioningFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_staff_information_form_staff_information_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/staff-information-form/staff-information-form.component */ "./src/app/modules/staff-provisioning/components/staff-information-form/staff-information-form.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_daterange_form_daterange_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/daterange-form/daterange-form.component */ "./src/app/shared/components/daterange-form/daterange-form.component.ts");
/* harmony import */ var _shared_components_general_role_form_general_role_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/general-role-form/general-role-form.component */ "./src/app/shared/components/general-role-form/general-role-form.component.ts");
/* harmony import */ var _shared_components_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/attributes-list/attributes-list.component */ "./src/app/shared/components/attributes-list/attributes-list.component.ts");
/* harmony import */ var _components_assigned_general_role_attributes_assigned_general_role_attributes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/assigned-general-role-attributes/assigned-general-role-attributes.component */ "./src/app/modules/staff-provisioning/components/assigned-general-role-attributes/assigned-general-role-attributes.component.ts");










function StaffProvisioningFormComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-daterange-form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onadd", function StaffProvisioningFormComponent_div_2_Template_app_daterange_form_onadd_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.add($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-general-role-form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-attributes-list", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onchange", function StaffProvisioningFormComponent_div_2_Template_app_attributes_list_onchange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.setAttributes($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentForm", ctx_r0.form)("title", "General Role");
} }
function StaffProvisioningFormComponent_app_assigned_general_role_attributes_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-assigned-general-role-attributes", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ondelete", function StaffProvisioningFormComponent_app_assigned_general_role_attributes_3_Template_app_assigned_general_role_attributes_ondelete_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.deleteAssigned($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r1.staffInfoData);
} }
class StaffProvisioningFormComponent {
    constructor(fb, router) {
        this.fb = fb;
        this.router = router;
        this.resetFlag = true;
        this.staffInfoData = [];
        this.data = {
            daterange: null,
            attributes: [],
            generalRole: null
        };
    }
    ngOnInit() {
        this.form = this.fb.group({});
    }
    cancel() {
        this.router.navigate(['staff-provisioning']);
    }
    save() {
        this.form.get('information').markAllAsTouched();
        if (this.form.get('information').invalid) {
            alert('Please fill required fields');
            return;
        }
        if (this.staffInfoData.length === 0) {
            alert('General Role and Attribute assignment is required');
            this.form.get('generalRoles').markAllAsTouched();
            return;
        }
        alert('Success');
        this.router.navigate(['staff-provisioning']);
    }
    add(dateRange) {
        this.form.get('generalRoles').markAllAsTouched();
        this.data.daterange = dateRange;
        if (!this.isValidateGeneralRoleData()) {
            return;
        }
        this.data.generalRole = this.form.value.generalRoles;
        this.staffInfoData.push(this.data);
        this.form.get('generalRoles').reset();
        this.data = {
            daterange: null,
            attributes: [],
            generalRole: null
        };
        this.resetFlag = false;
        setTimeout(x => this.resetFlag = true, 100);
    }
    setAttributes(attributes) {
        this.data.attributes = attributes;
    }
    isValidateGeneralRoleData() {
        if (this.form.get('generalRoles').invalid) {
            alert('All General Role fields are required');
            return;
        }
        if (this.data.attributes.length === 0) {
            alert('Attribute Assignment is required');
            return false;
        }
        return true;
    }
    deleteAssigned(num) {
        this.staffInfoData = this.staffInfoData.filter((item, index) => index !== num);
    }
}
StaffProvisioningFormComponent.ɵfac = function StaffProvisioningFormComponent_Factory(t) { return new (t || StaffProvisioningFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
StaffProvisioningFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StaffProvisioningFormComponent, selectors: [["app-staff-provisioning-form"]], decls: 11, vars: 3, consts: [[3, "parentForm"], [1, "section"], ["class", "section__body", 4, "ngIf"], [3, "data", "ondelete", 4, "ngIf"], [1, "section__body"], [1, "form-buttons"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-secondary", 3, "click"], [3, "onadd"], [3, "parentForm", "title"], [3, "onchange"], [3, "data", "ondelete"]], template: function StaffProvisioningFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-staff-information-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StaffProvisioningFormComponent_div_2_Template, 4, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StaffProvisioningFormComponent_app_assigned_general_role_attributes_3_Template, 1, 1, "app-assigned-general-role-attributes", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StaffProvisioningFormComponent_Template_button_click_7_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StaffProvisioningFormComponent_Template_button_click_9_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentForm", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.resetFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.staffInfoData.length > 0);
    } }, directives: [_components_staff_information_form_staff_information_form_component__WEBPACK_IMPORTED_MODULE_3__["StaffInformationFormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_components_daterange_form_daterange_form_component__WEBPACK_IMPORTED_MODULE_5__["DaterangeFormComponent"], _shared_components_general_role_form_general_role_form_component__WEBPACK_IMPORTED_MODULE_6__["GeneralRoleFormComponent"], _shared_components_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_7__["AttributesListComponent"], _components_assigned_general_role_attributes_assigned_general_role_attributes_component__WEBPACK_IMPORTED_MODULE_8__["AssignedGeneralRoleAttributesComponent"]], styles: [".form-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zdGFmZi1wcm92aXNpb25pbmcvcGFnZXMvc3RhZmYtcHJvdmlzaW9uaW5nLWZvcm0vc3RhZmYtcHJvdmlzaW9uaW5nLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3RhZmYtcHJvdmlzaW9uaW5nL3BhZ2VzL3N0YWZmLXByb3Zpc2lvbmluZy1mb3JtL3N0YWZmLXByb3Zpc2lvbmluZy1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tYnV0dG9uc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGdhcDogMC41cmVtO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StaffProvisioningFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-staff-provisioning-form',
                templateUrl: './staff-provisioning-form.component.html',
                styleUrls: ['./staff-provisioning-form.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/staff-provisioning/pages/staff-provisioning-list/staff-provisioning-list.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/staff-provisioning/pages/staff-provisioning-list/staff-provisioning-list.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: StaffProvisioningListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffProvisioningListComponent", function() { return StaffProvisioningListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class StaffProvisioningListComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    add() {
        this.router.navigate(['staff-provisioning', 'form']);
    }
    edit() {
        this.router.navigate(['staff-provisioning', 'form']);
    }
    delete() {
    }
}
StaffProvisioningListComponent.ɵfac = function StaffProvisioningListComponent_Factory(t) { return new (t || StaffProvisioningListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
StaffProvisioningListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StaffProvisioningListComponent, selectors: [["app-staff-provisioning-list"]], decls: 31, vars: 0, consts: [[1, "section"], [1, "section__head"], [1, "section__title", "section__title--large"], [1, "btn", "btn-sm", "btn-primary", "attribute-heading__button", 3, "click"], [1, "section__body"], [1, "table", "table-sm", "draggable"], ["scope", "col"], [1, "table__actions"], [3, "click"]], template: function StaffProvisioningListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Staff List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StaffProvisioningListComponent_Template_button_click_4_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add New Staff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Staff Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "81254880");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Darius Bualan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " dariusbualan@email.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StaffProvisioningListComponent_Template_a_click_26_listener() { return ctx.edit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StaffProvisioningListComponent_Template_a_click_29_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3RhZmYtcHJvdmlzaW9uaW5nL3BhZ2VzL3N0YWZmLXByb3Zpc2lvbmluZy1saXN0L3N0YWZmLXByb3Zpc2lvbmluZy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StaffProvisioningListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-staff-provisioning-list',
                templateUrl: './staff-provisioning-list.component.html',
                styleUrls: ['./staff-provisioning-list.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/staff-provisioning/staff-provisioning.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/staff-provisioning/staff-provisioning.module.ts ***!
  \*************************************************************************/
/*! exports provided: StaffProvisioningModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffProvisioningModule", function() { return StaffProvisioningModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _pages_staff_provisioning_list_staff_provisioning_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/staff-provisioning-list/staff-provisioning-list.component */ "./src/app/modules/staff-provisioning/pages/staff-provisioning-list/staff-provisioning-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_staff_provisioning_form_staff_provisioning_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/staff-provisioning-form/staff-provisioning-form.component */ "./src/app/modules/staff-provisioning/pages/staff-provisioning-form/staff-provisioning-form.component.ts");
/* harmony import */ var _components_staff_information_form_staff_information_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/staff-information-form/staff-information-form.component */ "./src/app/modules/staff-provisioning/components/staff-information-form/staff-information-form.component.ts");
/* harmony import */ var _components_staff_general_role_staff_general_role_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/staff-general-role/staff-general-role.component */ "./src/app/modules/staff-provisioning/components/staff-general-role/staff-general-role.component.ts");
/* harmony import */ var _components_assigned_general_role_attributes_assigned_general_role_attributes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/assigned-general-role-attributes/assigned-general-role-attributes.component */ "./src/app/modules/staff-provisioning/components/assigned-general-role-attributes/assigned-general-role-attributes.component.ts");










const routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: _pages_staff_provisioning_list_staff_provisioning_list_component__WEBPACK_IMPORTED_MODULE_1__["StaffProvisioningListComponent"]
    },
    {
        path: 'form',
        component: _pages_staff_provisioning_form_staff_provisioning_form_component__WEBPACK_IMPORTED_MODULE_4__["StaffProvisioningFormComponent"]
    },
];
class StaffProvisioningModule {
}
StaffProvisioningModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StaffProvisioningModule });
StaffProvisioningModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StaffProvisioningModule_Factory(t) { return new (t || StaffProvisioningModule)(); }, imports: [[
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StaffProvisioningModule, { declarations: [_pages_staff_provisioning_list_staff_provisioning_list_component__WEBPACK_IMPORTED_MODULE_1__["StaffProvisioningListComponent"],
        _pages_staff_provisioning_form_staff_provisioning_form_component__WEBPACK_IMPORTED_MODULE_4__["StaffProvisioningFormComponent"],
        _components_staff_information_form_staff_information_form_component__WEBPACK_IMPORTED_MODULE_5__["StaffInformationFormComponent"],
        _components_staff_general_role_staff_general_role_component__WEBPACK_IMPORTED_MODULE_6__["StaffGeneralRoleComponent"],
        _components_assigned_general_role_attributes_assigned_general_role_attributes_component__WEBPACK_IMPORTED_MODULE_7__["AssignedGeneralRoleAttributesComponent"]], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StaffProvisioningModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _pages_staff_provisioning_list_staff_provisioning_list_component__WEBPACK_IMPORTED_MODULE_1__["StaffProvisioningListComponent"],
                    _pages_staff_provisioning_form_staff_provisioning_form_component__WEBPACK_IMPORTED_MODULE_4__["StaffProvisioningFormComponent"],
                    _components_staff_information_form_staff_information_form_component__WEBPACK_IMPORTED_MODULE_5__["StaffInformationFormComponent"],
                    _components_staff_general_role_staff_general_role_component__WEBPACK_IMPORTED_MODULE_6__["StaffGeneralRoleComponent"],
                    _components_assigned_general_role_attributes_assigned_general_role_attributes_component__WEBPACK_IMPORTED_MODULE_7__["AssignedGeneralRoleAttributesComponent"]
                ],
                imports: [
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-staff-provisioning-staff-provisioning-module.js.map