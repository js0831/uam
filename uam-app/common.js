(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/services/language-field.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/language-field.service.ts ***!
  \***********************************************************/
/*! exports provided: LanguageFieldService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageFieldService", function() { return LanguageFieldService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class LanguageFieldService {
    constructor() { }
    appendCurrentTranslations(translations, form) {
        translations.forEach(x => {
            const group = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                language: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](x.language.toString(), [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                value: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](x.value, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            });
            form.get('translations').push(group);
        });
    }
}
LanguageFieldService.ɵfac = function LanguageFieldService_Factory(t) { return new (t || LanguageFieldService)(); };
LanguageFieldService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LanguageFieldService, factory: LanguageFieldService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LanguageFieldService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/modal.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/modal.service.ts ***!
  \**************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class ModalService {
    constructor() {
        this.dataSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ event: 'DEFAULT' });
        this.event = this.dataSource.asObservable();
    }
    showModal(modalId, value) {
        this.dataSource.next({
            event: 'SHOW_MODAL',
            data: {
                modalId,
                value
            }
        });
    }
    reset() {
        this.dataSource.next({
            event: 'RESET',
        });
    }
}
ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(); };
ModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map