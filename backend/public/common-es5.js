(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkngx_admin"] = self["webpackChunkngx_admin"] || []).push([["common"], {
    /***/
    61936: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LottieService": function LottieService() {
          return (
            /* binding */
            _LottieService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _LottieService = /*#__PURE__*/function () {
        function _LottieService(ngZone) {
          _classCallCheck(this, _LottieService);

          this.ngZone = ngZone;
          this.assets = {
            'logo-orienta-t': 'assets/lottie/logo-orienta-t.json',
            'landing-orienta-t': 'assets/lottie/landing-orienta-t.json',
            'login-orienta-t': 'assets/lottie/login-orienta-t.json',
            'start-orienta-t': 'assets/lottie/start-orienta-t.json',
            'results-orienta-t': 'assets/lottie/results-orienta-t.json'
          };
        }

        _createClass(_LottieService, [{
          key: "getOptions",
          value: function getOptions(assets_name) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            options['path'] = this.assets[assets_name];
            return options;
          }
        }, {
          key: "animationCreated",
          value: function animationCreated(animationItem) {
            var _this = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            this.animationItem = animationItem;
            options.speed ? this.animationItem.setSpeed(options.speed) : '';

            if (options.playSegments) {
              this.ngZone.runOutsideAngular(function () {
                return _this.animationItem.playSegments(options.playSegments);
              });
            }
          }
        }, {
          key: "stop",
          value: function stop(animationItem) {
            var _this2 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            this.ngZone.runOutsideAngular(function () {
              return _this2.animationItem.stop();
            });
          }
        }, {
          key: "opened",
          value: function opened(animationItem) {
            var _this3 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            this.ngZone.runOutsideAngular(function () {
              return _this3.animationItem.playSegments(options.playSegments);
            });
          }
        }, {
          key: "closed",
          value: function closed(animationItem) {
            var _this4 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            this.ngZone.runOutsideAngular(function () {
              return _this4.animationItem.playSegments(options.playSegments);
            });
          }
        }]);

        return _LottieService;
      }();

      _LottieService.ɵfac = function LottieService_Factory(t) {
        return new (t || _LottieService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
      };

      _LottieService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _LottieService,
        factory: _LottieService.ɵfac,
        providedIn: 'root'
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map