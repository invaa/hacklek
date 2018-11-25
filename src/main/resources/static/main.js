(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">Hack Lek</mat-toolbar>\r\n<app-stepper></app-stepper>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(iconRegistry, sanitizer) {
        this.iconRegistry = iconRegistry;
        this.sanitizer = sanitizer;
        iconRegistry.addSvgIcon('pregnant_women', sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-pregnant_woman-24px.svg'));
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _module_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../module/material.module */ "./src/module/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_user_data_user_data_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user-data/user-data.component */ "./src/app/components/user-data/user-data.component.ts");
/* harmony import */ var _components_prescription_parser_prescription_parser_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/prescription-parser/prescription-parser.component */ "./src/app/components/prescription-parser/prescription-parser.component.ts");
/* harmony import */ var _components_prescription_optimizer_prescription_optimizer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/prescription-optimizer/prescription-optimizer.component */ "./src/app/components/prescription-optimizer/prescription-optimizer.component.ts");
/* harmony import */ var _components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/stepper/stepper.component */ "./src/app/components/stepper/stepper.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_user_data_user_data_component__WEBPACK_IMPORTED_MODULE_8__["UserDataComponent"],
                _components_prescription_parser_prescription_parser_component__WEBPACK_IMPORTED_MODULE_9__["PrescriptionParserComponent"],
                _components_prescription_optimizer_prescription_optimizer_component__WEBPACK_IMPORTED_MODULE_10__["PrescriptionOptimizerComponent"],
                _components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_11__["StepperComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _module_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/prescription-optimizer/prescription-optimizer.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/prescription-optimizer/prescription-optimizer.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list>\r\n  <mat-list-item *ngFor=\"let med of currentMedicines\">\r\n    <h3 matLine> {{med.name}} </h3>\r\n    <p matLine>\r\n      <span>- Price: {{med.price}} </span>\r\n    </p>\r\n    <p matLine style=\"color: red;\" *ngIf=\"userData.pregnancy && med.notForPregnant\">\r\n      <span>\r\n        <mat-icon svgIcon=\"pregnant_women\"></mat-icon>\r\n        Prohibited to use by pregnant women.\r\n      </span>\r\n    </p>\r\n    <p matLine style=\"color: red;\" *ngIf=\"userData.alcohol && med.noAlcAllowed\">\r\n      <span>\r\n        <mat-icon>warning</mat-icon>\r\n        Do not mix with alcohol!\r\n      </span>\r\n    </p>\r\n  </mat-list-item>\r\n</mat-list>\r\n<div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" style=\"margin-top: 10px;\">\r\n  <div>Current price: {{currentPrice | number : '1.2-2'}} PLN</div>\r\n  <button *ngIf=\"currentPrice - analogPrice > 0\" mat-raised-button color=\"accent\" (click)=\"swap()\">\r\n    Click save: {{currentPrice - analogPrice | number : '1.2-2'}} PLN\r\n  </button>\r\n</div>\r\n<mat-divider style=\"margin-top: 10px;\"></mat-divider>\r\n<div fxLayout=\"row\" fxLayoutAlign=\"space-between left\" style=\"margin-top: 10px;\">\r\n  <button mat-fab color=\"primary\" matStepperPrevious>Back</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/prescription-optimizer/prescription-optimizer.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/prescription-optimizer/prescription-optimizer.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PrescriptionOptimizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrescriptionOptimizerComponent", function() { return PrescriptionOptimizerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_user_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../model/user-data */ "./src/model/user-data.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/api.service */ "./src/app/service/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrescriptionOptimizerComponent = /** @class */ (function () {
    function PrescriptionOptimizerComponent(apiService) {
        this.apiService = apiService;
        this.currentMedicines = [];
        this.analogMedicines = [];
    }
    PrescriptionOptimizerComponent.prototype.ngOnInit = function () {
    };
    PrescriptionOptimizerComponent.prototype.populateMedicine = function (medId) {
        var _this = this;
        this.apiService.getAnalogs(medId, this.userData)
            .subscribe(function (medicine) {
            _this.currentMedicines = _this.currentMedicines.concat([medicine]);
            _this.analogMedicines = _this.analogMedicines.concat([medicine.analogs.length != 0 ? medicine.analogs[0] : medicine]);
            _this.currentPrice = _this.calculatePrice(_this.currentMedicines);
            _this.analogPrice = _this.calculatePrice(_this.analogMedicines);
        });
    };
    PrescriptionOptimizerComponent.prototype.calculatePrice = function (medicines) {
        return medicines
            .map(function (m) { return m.price; })
            .reduce(function (sum, current) {
            return sum + current;
        }, 0);
    };
    PrescriptionOptimizerComponent.prototype.swap = function () {
        var tempMed = this.currentMedicines;
        this.currentMedicines = this.analogMedicines;
        this.analogMedicines = tempMed;
        var tempPrice = this.currentPrice;
        this.currentPrice = this.analogPrice;
        this.analogPrice = tempPrice;
    };
    Object.defineProperty(PrescriptionOptimizerComponent.prototype, "medicines", {
        set: function (medicines) {
            var _this = this;
            this._medicines = medicines;
            if (medicines) {
                medicines.forEach(function (med) { return _this.populateMedicine(med.id); });
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_user_data__WEBPACK_IMPORTED_MODULE_1__["UserData"])
    ], PrescriptionOptimizerComponent.prototype, "userData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], PrescriptionOptimizerComponent.prototype, "medicines", null);
    PrescriptionOptimizerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-prescription-optimizer',
            template: __webpack_require__(/*! ./prescription-optimizer.component.html */ "./src/app/components/prescription-optimizer/prescription-optimizer.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], PrescriptionOptimizerComponent);
    return PrescriptionOptimizerComponent;
}());



/***/ }),

/***/ "./src/app/components/prescription-parser/prescription-parser.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/prescription-parser/prescription-parser.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"next()\" class=\"prescription-parser-form\">\r\n  <mat-form-field>\r\n    <input type=\"text\" placeholder=\"Start typing\" aria-label=\"Number\" matInput [formControl]=\"userInput\"\r\n           [matAutocomplete]=\"auto\">\r\n    <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\r\n      <mat-option *ngFor=\"let option of medicinesOptions | async\" [value]=\"option.name\"\r\n                  (onSelectionChange)=\"onMedicineSelect(option)\">\r\n        {{option.name}}\r\n      </mat-option>\r\n    </mat-autocomplete>\r\n  </mat-form-field>\r\n\r\n  <mat-divider></mat-divider>\r\n\r\n  <div style=\"margin-top: 10px;\">\r\n    <label class=\"mat-raised-button\" for=\"file\">Upload Image</label>\r\n    <input type=\"file\" [hidden]=\"true\" id=\"file\" accept=\"image/*\"\r\n           (change)=\"handleFileInput($event)\">\r\n  </div>\r\n  <mat-list #medicines>\r\n    <mat-list-item *ngFor=\"let medicine of selectedMedicines\">\r\n      {{medicine.name}}\r\n    </mat-list-item>\r\n  </mat-list>\r\n  <mat-card class=\"prescription-image\" style=\"max-width: 400px;\" *ngIf=\"selectedMedicines.length != 0 && imageSrc != 0\">\r\n    <img mat-card-image [src]=\"imageSrc\">\r\n  </mat-card>\r\n  <mat-divider></mat-divider>\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" style=\"margin-top: 10px;\">\r\n    <button mat-fab color=\"primary\" matStepperPrevious>Back</button>\r\n    <button mat-fab color=\"primary\" type=\"submit\" matStepperNext>Next</button>\r\n  </div>\r\n\r\n</form>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/prescription-parser/prescription-parser.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/prescription-parser/prescription-parser.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PrescriptionParserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrescriptionParserComponent", function() { return PrescriptionParserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PrescriptionParserComponent = /** @class */ (function () {
    function PrescriptionParserComponent(apiService) {
        var _this = this;
        this.apiService = apiService;
        this.minLength = 3;
        this.imageSrc = '';
        this.userInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.selectedMedicines = [];
        this.medicinesEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.medicinesOptions = this.userInput.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (name) { return _this.lookupMedicineOptions(name); }));
    }
    PrescriptionParserComponent.prototype.ngOnInit = function () {
    };
    PrescriptionParserComponent.prototype.handleFileInput = function (e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    };
    PrescriptionParserComponent.prototype._handleReaderLoaded = function (e) {
        var _this = this;
        var reader = e.target;
        this.imageSrc = reader.result;
        this.apiService.uploadPrescription(this.imageSrc)
            .subscribe(function (medicines) { return _this.selectedMedicines = _this.selectedMedicines.concat(medicines); });
    };
    PrescriptionParserComponent.prototype.lookupMedicineOptions = function (input) {
        if (input && input.length >= this.minLength) {
            return this.apiService.lookupMedicines(this.userInput.value);
        }
        else {
            return [];
        }
    };
    PrescriptionParserComponent.prototype.next = function () {
        this.medicinesEvent.emit(this.selectedMedicines);
    };
    PrescriptionParserComponent.prototype.onMedicineSelect = function (medicine) {
        this.selectedMedicines = this.selectedMedicines.concat([medicine]);
        this.userInput.setValue('');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PrescriptionParserComponent.prototype, "medicinesEvent", void 0);
    PrescriptionParserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-prescription-parser',
            template: __webpack_require__(/*! ./prescription-parser.component.html */ "./src/app/components/prescription-parser/prescription-parser.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], PrescriptionParserComponent);
    return PrescriptionParserComponent;
}());



/***/ }),

/***/ "./src/app/components/stepper/stepper.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/stepper/stepper.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-vertical-stepper>\r\n  <mat-step label=\"Fill the data\">\r\n    <app-user-data (userDataEvent)=\"onUserDataEvent($event)\"></app-user-data>\r\n  </mat-step>\r\n  <mat-step label=\"Add medicines\">\r\n    <app-prescription-parser (medicinesEvent)=\"onMedicinesEvent($event)\"></app-prescription-parser>\r\n  </mat-step>\r\n  <mat-step label=\"Optimize list of medicines\">\r\n    <app-prescription-optimizer [medicines]=\"medicines\" [userData]=\"userData\"></app-prescription-optimizer>\r\n  </mat-step>\r\n</mat-vertical-stepper>\r\n"

/***/ }),

/***/ "./src/app/components/stepper/stepper.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/stepper/stepper.component.ts ***!
  \*********************************************************/
/*! exports provided: StepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperComponent", function() { return StepperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StepperComponent = /** @class */ (function () {
    function StepperComponent() {
    }
    StepperComponent.prototype.ngOnInit = function () {
    };
    StepperComponent.prototype.onUserDataEvent = function (userData) {
        this.userData = userData;
    };
    StepperComponent.prototype.onMedicinesEvent = function (medicines) {
        this.medicines = medicines;
    };
    StepperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stepper',
            template: __webpack_require__(/*! ./stepper.component.html */ "./src/app/components/stepper/stepper.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], StepperComponent);
    return StepperComponent;
}());



/***/ }),

/***/ "./src/app/components/user-data/user-data.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/user-data/user-data.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section {\r\n  display: flex;\r\n  align-content: center;\r\n  align-items: center;\r\n  height: 60px;\r\n}\r\n\r\n.checkbox-margin {\r\n  margin: 0 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLWRhdGEvdXNlci1kYXRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxlQUFlO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyLWRhdGEvdXNlci1kYXRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5jaGVja2JveC1tYXJnaW4ge1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/user-data/user-data.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/user-data/user-data.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"next()\" class=\"user-data-form\">\r\n\r\n  <mat-form-field class=\"input-full-width\">\r\n    <input matInput placeholder=\"Age\" type=\"number\" formControlName=\"age\">\r\n    <mat-error *ngIf=\"form.hasError('required', 'Age')\">\r\n      Age is <strong>required</strong>\r\n    </mat-error>\r\n  </mat-form-field>\r\n\r\n  <section class=\"section\">\r\n    <mat-radio-group formControlName=\"sex\">\r\n      <mat-radio-button color=\"primary\" value=\"F\">Female</mat-radio-button>\r\n      <mat-radio-button color=\"primary\" class=\"checkbox-margin\" value=\"M\">Male</mat-radio-button>\r\n    </mat-radio-group>\r\n  </section>\r\n\r\n  <section class=\"section\">\r\n    <mat-checkbox color=\"primary\" formControlName=\"alcohol\">Alcohol</mat-checkbox>\r\n    <mat-checkbox class=\"checkbox-margin\" color=\"primary\" formControlName=\"pregnancy\">\r\n      Pregnancy\r\n    </mat-checkbox>\r\n  </section>\r\n\r\n  <mat-divider></mat-divider>\r\n\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"end center\" style=\"margin-top: 10px;\">\r\n    <button mat-fab matStepperNext color=\"primary\" type=\"submit\" [disabled]=\"!form.valid\">Next</button>\r\n  </div>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/components/user-data/user-data.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/user-data/user-data.component.ts ***!
  \*************************************************************/
/*! exports provided: UserDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataComponent", function() { return UserDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserDataComponent = /** @class */ (function () {
    function UserDataComponent(fb) {
        this.fb = fb;
        this.userDataEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.form = fb.group({
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            sex: 'F',
            alcohol: false,
            pregnancy: false
        });
    }
    UserDataComponent.prototype.ngOnInit = function () {
    };
    UserDataComponent.prototype.next = function () {
        if (this.form.valid) {
            var userData = this.form.value;
            this.userDataEvent.emit(userData);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserDataComponent.prototype, "userDataEvent", void 0);
    UserDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-data',
            template: __webpack_require__(/*! ./user-data.component.html */ "./src/app/components/user-data/user-data.component.html"),
            styles: [__webpack_require__(/*! ./user-data.component.css */ "./src/app/components/user-data/user-data.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], UserDataComponent);
    return UserDataComponent;
}());



/***/ }),

/***/ "./src/app/service/api-constants.ts":
/*!******************************************!*\
  !*** ./src/app/service/api-constants.ts ***!
  \******************************************/
/*! exports provided: ApiConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiConstants", function() { return ApiConstants; });
var ApiConstants = /** @class */ (function () {
    function ApiConstants() {
    }
    ApiConstants.API_ROOT_URL = '/api/v1';
    ApiConstants.API_LOOKUP_MED = ApiConstants.API_ROOT_URL + '/lookup';
    ApiConstants.API_OCR_MED = ApiConstants.API_ROOT_URL + '/parseImage';
    ApiConstants.API_ALTERNATIVES = ApiConstants.API_ROOT_URL + '/alternatives';
    return ApiConstants;
}());



/***/ }),

/***/ "./src/app/service/api.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/api.service.ts ***!
  \****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-constants */ "./src/app/service/api-constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.lookupMedicines = function (userInput) {
        return this.http.get(_api_constants__WEBPACK_IMPORTED_MODULE_2__["ApiConstants"].API_LOOKUP_MED + "/" + userInput + "/");
    };
    ApiService.prototype.uploadPrescription = function (base64EncodedImage) {
        return this.http.post("" + _api_constants__WEBPACK_IMPORTED_MODULE_2__["ApiConstants"].API_OCR_MED, { encodedImage: base64EncodedImage });
    };
    ApiService.prototype.getAnalogs = function (medId, userData) {
        return this.http.post(_api_constants__WEBPACK_IMPORTED_MODULE_2__["ApiConstants"].API_ALTERNATIVES + "/" + medId, userData);
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/model/user-data.ts":
/*!********************************!*\
  !*** ./src/model/user-data.ts ***!
  \********************************/
/*! exports provided: UserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserData", function() { return UserData; });
var UserData = /** @class */ (function () {
    function UserData() {
    }
    return UserData;
}());



/***/ }),

/***/ "./src/module/material.module.ts":
/*!***************************************!*\
  !*** ./src/module/material.module.ts ***!
  \***************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__["MatStepperModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__["FlexLayoutModule"]
            ],
            exports: [
                _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__["MatStepperModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__["FlexLayoutModule"]
            ],
            declarations: []
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sgolubov\Dev\repo\hacklek\src\main\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map