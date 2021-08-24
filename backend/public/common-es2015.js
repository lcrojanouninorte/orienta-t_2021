"use strict";
(self["webpackChunkngx_admin"] = self["webpackChunkngx_admin"] || []).push([["common"],{

/***/ 61936:
/*!***************************************************************!*\
  !*** ./src/app/@core/data/vendors/services/lottie.service.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LottieService": function() { return /* binding */ LottieService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class LottieService {
    constructor(ngZone) {
        this.ngZone = ngZone;
        this.assets = {
            'logo-orienta-t': 'assets/lottie/logo-orienta-t.json',
            'landing-orienta-t': 'assets/lottie/landing-orienta-t.json',
            'login-orienta-t': 'assets/lottie/login-orienta-t.json',
            'start-orienta-t': 'assets/lottie/start-orienta-t.json',
            'results-orienta-t': 'assets/lottie/results-orienta-t.json',
        };
    }
    getOptions(assets_name, options = {}) {
        options['path'] = this.assets[assets_name];
        return options;
    }
    animationCreated(animationItem, options = {}) {
        this.animationItem = animationItem;
        options.speed ? this.animationItem.setSpeed(options.speed) : '';
        if (options.playSegments) {
            this.ngZone.runOutsideAngular(() => this.animationItem.playSegments(options.playSegments));
        }
    }
    stop(animationItem, options = {}) {
        this.ngZone.runOutsideAngular(() => this.animationItem.stop());
    }
    opened(animationItem, options = {}) {
        this.ngZone.runOutsideAngular(() => this.animationItem.playSegments(options.playSegments));
    }
    closed(animationItem, options = {}) {
        this.ngZone.runOutsideAngular(() => this.animationItem.playSegments(options.playSegments));
    }
}
LottieService.ɵfac = function LottieService_Factory(t) { return new (t || LottieService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone)); };
LottieService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LottieService, factory: LottieService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map