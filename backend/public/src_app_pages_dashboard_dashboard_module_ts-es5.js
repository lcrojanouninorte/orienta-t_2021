(function () {
  "use strict";

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkngx_admin"] = self["webpackChunkngx_admin"] || []).push([["src_app_pages_dashboard_dashboard_module_ts"], {
    /***/
    13841: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CDK_COPY_TO_CLIPBOARD_CONFIG": function CDK_COPY_TO_CLIPBOARD_CONFIG() {
          return (
            /* binding */
            _CDK_COPY_TO_CLIPBOARD_CONFIG
          );
        },

        /* harmony export */
        "CKD_COPY_TO_CLIPBOARD_CONFIG": function CKD_COPY_TO_CLIPBOARD_CONFIG() {
          return (
            /* binding */
            _CKD_COPY_TO_CLIPBOARD_CONFIG
          );
        },

        /* harmony export */
        "CdkCopyToClipboard": function CdkCopyToClipboard() {
          return (
            /* binding */
            _CdkCopyToClipboard
          );
        },

        /* harmony export */
        "Clipboard": function Clipboard() {
          return (
            /* binding */
            _Clipboard
          );
        },

        /* harmony export */
        "ClipboardModule": function ClipboardModule() {
          return (
            /* binding */
            _ClipboardModule
          );
        },

        /* harmony export */
        "PendingCopy": function PendingCopy() {
          return (
            /* binding */
            _PendingCopy
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * A pending copy-to-clipboard operation.
       *
       * The implementation of copying text to the clipboard modifies the DOM and
       * forces a relayout. This relayout can take too long if the string is large,
       * causing the execCommand('copy') to happen too long after the user clicked.
       * This results in the browser refusing to copy. This object lets the
       * relayout happen in a separate tick from copying by providing a copy function
       * that can be called later.
       *
       * Destroy must be called when no longer in use, regardless of whether `copy` is
       * called.
       */


      var _PendingCopy = /*#__PURE__*/function () {
        function _PendingCopy(text, _document) {
          _classCallCheck(this, _PendingCopy);

          this._document = _document;

          var textarea = this._textarea = this._document.createElement('textarea');

          var styles = textarea.style; // Hide the element for display and accessibility. Set a fixed position so the page layout
          // isn't affected. We use `fixed` with `top: 0`, because focus is moved into the textarea
          // for a split second and if it's off-screen, some browsers will attempt to scroll it into view.

          styles.position = 'fixed';
          styles.top = styles.opacity = '0';
          styles.left = '-999em';
          textarea.setAttribute('aria-hidden', 'true');
          textarea.value = text;

          this._document.body.appendChild(textarea);
        }
        /** Finishes copying the text. */


        _createClass(_PendingCopy, [{
          key: "copy",
          value: function copy() {
            var textarea = this._textarea;
            var successful = false;

            try {
              // Older browsers could throw if copy is not supported.
              if (textarea) {
                var currentFocus = this._document.activeElement;
                textarea.select();
                textarea.setSelectionRange(0, textarea.value.length);
                successful = this._document.execCommand('copy');

                if (currentFocus) {
                  currentFocus.focus();
                }
              }
            } catch (_a) {// Discard error.
              // Initial setting of {@code successful} will represent failure here.
            }

            return successful;
          }
          /** Cleans up DOM changes used to perform the copy operation. */

        }, {
          key: "destroy",
          value: function destroy() {
            var textarea = this._textarea;

            if (textarea) {
              if (textarea.parentNode) {
                textarea.parentNode.removeChild(textarea);
              }

              this._textarea = undefined;
            }
          }
        }]);

        return _PendingCopy;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * A service for copying text to the clipboard.
       */


      var _Clipboard = /*#__PURE__*/function () {
        function _Clipboard(document) {
          _classCallCheck(this, _Clipboard);

          this._document = document;
        }
        /**
         * Copies the provided text into the user's clipboard.
         *
         * @param text The string to copy.
         * @returns Whether the operation was successful.
         */


        _createClass(_Clipboard, [{
          key: "copy",
          value: function copy(text) {
            var pendingCopy = this.beginCopy(text);
            var successful = pendingCopy.copy();
            pendingCopy.destroy();
            return successful;
          }
          /**
           * Prepares a string to be copied later. This is useful for large strings
           * which take too long to successfully render and be copied in the same tick.
           *
           * The caller must call `destroy` on the returned `PendingCopy`.
           *
           * @param text The string to copy.
           * @returns the pending copy operation.
           */

        }, {
          key: "beginCopy",
          value: function beginCopy(text) {
            return new _PendingCopy(text, this._document);
          }
        }]);

        return _Clipboard;
      }();

      _Clipboard.ɵfac = function Clipboard_Factory(t) {
        return new (t || _Clipboard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
      };

      _Clipboard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function Clipboard_Factory() {
          return new _Clipboard(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
        },
        token: _Clipboard,
        providedIn: "root"
      });

      _Clipboard.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_Clipboard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injection token that can be used to provide the default options to `CdkCopyToClipboard`. */


      var _CDK_COPY_TO_CLIPBOARD_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CDK_COPY_TO_CLIPBOARD_CONFIG');
      /**
       * @deprecated Use `CDK_COPY_TO_CLIPBOARD_CONFIG` instead.
       * @breaking-change 13.0.0
       */


      var _CKD_COPY_TO_CLIPBOARD_CONFIG = _CDK_COPY_TO_CLIPBOARD_CONFIG;
      /**
       * Provides behavior for a button that when clicked copies content into user's
       * clipboard.
       */

      var _CdkCopyToClipboard = /*#__PURE__*/function () {
        function _CdkCopyToClipboard(_clipboard, _ngZone, config) {
          _classCallCheck(this, _CdkCopyToClipboard);

          this._clipboard = _clipboard;
          this._ngZone = _ngZone;
          /** Content to be copied. */

          this.text = '';
          /**
           * How many times to attempt to copy the text. This may be necessary for longer text, because
           * the browser needs time to fill an intermediate textarea element and copy the content.
           */

          this.attempts = 1;
          /**
           * Emits when some text is copied to the clipboard. The
           * emitted value indicates whether copying was successful.
           */

          this.copied = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /** Copies that are currently being attempted. */

          this._pending = new Set();

          if (config && config.attempts != null) {
            this.attempts = config.attempts;
          }
        }
        /** Copies the current text to the clipboard. */


        _createClass(_CdkCopyToClipboard, [{
          key: "copy",
          value: function copy() {
            var _this = this;

            var attempts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.attempts;

            if (attempts > 1) {
              var remainingAttempts = attempts;

              var pending = this._clipboard.beginCopy(this.text);

              this._pending.add(pending);

              var attempt = function attempt() {
                var successful = pending.copy();

                if (!successful && --remainingAttempts && !_this._destroyed) {
                  // We use 1 for the timeout since it's more predictable when flushing in unit tests.
                  _this._currentTimeout = _this._ngZone.runOutsideAngular(function () {
                    return setTimeout(attempt, 1);
                  });
                } else {
                  _this._currentTimeout = null;

                  _this._pending["delete"](pending);

                  pending.destroy();

                  _this.copied.emit(successful);
                }
              };

              attempt();
            } else {
              this.copied.emit(this._clipboard.copy(this.text));
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._currentTimeout) {
              clearTimeout(this._currentTimeout);
            }

            this._pending.forEach(function (copy) {
              return copy.destroy();
            });

            this._pending.clear();

            this._destroyed = true;
          }
        }]);

        return _CdkCopyToClipboard;
      }();

      _CdkCopyToClipboard.ɵfac = function CdkCopyToClipboard_Factory(t) {
        return new (t || _CdkCopyToClipboard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Clipboard), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_CKD_COPY_TO_CLIPBOARD_CONFIG, 8));
      };

      _CdkCopyToClipboard.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CdkCopyToClipboard,
        selectors: [["", "cdkCopyToClipboard", ""]],
        hostBindings: function CdkCopyToClipboard_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CdkCopyToClipboard_click_HostBindingHandler() {
              return ctx.copy();
            });
          }
        },
        inputs: {
          text: ["cdkCopyToClipboard", "text"],
          attempts: ["cdkCopyToClipboardAttempts", "attempts"]
        },
        outputs: {
          copied: "cdkCopyToClipboardCopied"
        }
      });

      _CdkCopyToClipboard.ctorParameters = function () {
        return [{
          type: _Clipboard
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_CKD_COPY_TO_CLIPBOARD_CONFIG]
          }]
        }];
      };

      _CdkCopyToClipboard.propDecorators = {
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['cdkCopyToClipboard']
        }],
        attempts: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['cdkCopyToClipboardAttempts']
        }],
        copied: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
          args: ['cdkCopyToClipboardCopied']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkCopyToClipboard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[cdkCopyToClipboard]',
            host: {
              '(click)': 'copy()'
            }
          }]
        }], function () {
          return [{
            type: _Clipboard
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_CKD_COPY_TO_CLIPBOARD_CONFIG]
            }]
          }];
        }, {
          text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['cdkCopyToClipboard']
          }],
          attempts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['cdkCopyToClipboardAttempts']
          }],
          copied: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['cdkCopyToClipboardCopied']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _ClipboardModule = function _ClipboardModule() {
        _classCallCheck(this, _ClipboardModule);
      };

      _ClipboardModule.ɵfac = function ClipboardModule_Factory(t) {
        return new (t || _ClipboardModule)();
      };

      _ClipboardModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _ClipboardModule
      });
      _ClipboardModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_ClipboardModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            declarations: [_CdkCopyToClipboard],
            exports: [_CdkCopyToClipboard]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_ClipboardModule, {
          declarations: [_CdkCopyToClipboard],
          exports: [_CdkCopyToClipboard]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    51863: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Ng2SearchPipeModule": function Ng2SearchPipeModule() {
          return (
            /* binding */
            _Ng2SearchPipeModule
          );
        },

        /* harmony export */
        "Ng2SearchPipe": function Ng2SearchPipe() {
          return (
            /* binding */
            _Ng2SearchPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _Ng2SearchPipe = /*#__PURE__*/function () {
        function _Ng2SearchPipe() {
          _classCallCheck(this, _Ng2SearchPipe);
        }

        _createClass(_Ng2SearchPipe, [{
          key: "transform",
          value:
          /**
           * @param {?} items object from array
           * @param {?} term term's search
           * @return {?}
           */
          function transform(items, term) {
            if (!term || !items) return items;
            return _Ng2SearchPipe.filter(items, term);
          }
          /**
           *
           * @param {?} items List of items to filter
           * @param {?} term  a string term to compare with every property of the list
           *
           * @return {?}
           */

        }], [{
          key: "filter",
          value: function filter(items, term) {
            var
            /** @type {?} */
            toCompare = term.toLowerCase();
            /**
             * @param {?} item
             * @param {?} term
             * @return {?}
             */

            function checkInside(item, term) {
              for (var
              /** @type {?} */
              property in item) {
                if (item[property] === null || item[property] == undefined) {
                  continue;
                }

                if (typeof item[property] === 'object') {
                  if (checkInside(item[property], term)) {
                    return true;
                  }
                }

                if (item[property].toString().toLowerCase().includes(toCompare)) {
                  return true;
                }
              }

              return false;
            }

            return items.filter(function (item) {
              return checkInside(item, term);
            });
          }
        }]);

        return _Ng2SearchPipe;
      }();

      _Ng2SearchPipe.ɵfac = function Ng2SearchPipe_Factory(t) {
        return new (t || _Ng2SearchPipe)();
      };

      _Ng2SearchPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "filter",
        type: _Ng2SearchPipe,
        pure: false
      });
      _Ng2SearchPipe.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _Ng2SearchPipe,
        factory: _Ng2SearchPipe.ɵfac
      });
      /**
       * @nocollapse
       */

      _Ng2SearchPipe.ctorParameters = function () {
        return [];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_Ng2SearchPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
          args: [{
            name: 'filter',
            pure: false
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
        }], null, null);
      })();

      var _Ng2SearchPipeModule = function _Ng2SearchPipeModule() {
        _classCallCheck(this, _Ng2SearchPipeModule);
      };

      _Ng2SearchPipeModule.ɵfac = function Ng2SearchPipeModule_Factory(t) {
        return new (t || _Ng2SearchPipeModule)();
      };

      _Ng2SearchPipeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _Ng2SearchPipeModule
      });
      _Ng2SearchPipeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
      /**
       * @nocollapse
       */

      _Ng2SearchPipeModule.ctorParameters = function () {
        return [];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_Ng2SearchPipeModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            declarations: [_Ng2SearchPipe],
            exports: [_Ng2SearchPipe]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_Ng2SearchPipeModule, {
          declarations: [_Ng2SearchPipe],
          exports: [_Ng2SearchPipe]
        });
      })();
      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    64187: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ObsMapComponent": function ObsMapComponent() {
          return (
            /* binding */
            _ObsMapComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ObsMapComponent = /*#__PURE__*/function () {
        function _ObsMapComponent() {
          _classCallCheck(this, _ObsMapComponent);
        }

        _createClass(_ObsMapComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getDate",
          value: function getDate() {
            return new Date().toISOString();
          }
        }, {
          key: "getMapImg",
          value: function getMapImg() {
            var imgCanvas = this.gl_map.getCanvas().toDataURL('image/PNG');
          }
        }]);

        return _ObsMapComponent;
      }();

      _ObsMapComponent.ɵfac = function ObsMapComponent_Factory(t) {
        return new (t || _ObsMapComponent)();
      };

      _ObsMapComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ObsMapComponent,
        selectors: [["ngx-obs-map"]],
        inputs: {
          gl_map: "gl_map"
        },
        decls: 19,
        vars: 2,
        consts: [[1, "d-flex", "justify-content-between", "mb-5"], ["src", "assets/img/logo.jpg", "width", "150", "alt", "OBS", 1, "d-flex", "mt-2", "ml-5", "align-self-strech"], ["src", "assets/img/LogoUninorte.png", "width", "150", "alt", "uninorte", 1, "d-flex", "mt-1", "mr-5", "align-self-center"], [1, "container", "mt-5"], [1, "d-flex", "flex-column", "justify-content-center"], [1, "text-center", "align-self-center", "mb-2"], [1, "text-center", "align-self-center", "mb-4"], [1, "d-flex", "justify-content-center", "mb-5"], [1, "d-flex", "justify-content-center", "shadow-sm"], [1, "align-self-center"], ["width", "200", "alt", "ubicaci\xF3n", 3, "src"], [3, "innerHTML"]],
        template: function ObsMapComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "main", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Observatorio del R\xEDo Magdalena");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Universidad del norte");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Fecha del reporte: <?php echo date(\"Y-m-d, H:m:s A\");?> ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Observatorio del R\xEDo Magdalena - Universidad del Norte Copyright \xA9 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "p", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.getMapImg(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.getDate(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
          }
        },
        styles: ["@page {\n  margin: 0cm 0cm;\n}\n\nbody[_ngcontent-%COMP%] {\n  margin-top: 2cm;\n  margin-left: 2cm;\n  margin-right: 2cm;\n  margin-bottom: 2cm;\n}\n\nheader[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0cm;\n  left: 0cm;\n  right: 0cm;\n  height: 2cm;\n  \n  background-color: #6DB9D0;\n  color: white;\n  text-align: center;\n  line-height: 1.5cm;\n}\n\nfooter[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0cm;\n  left: 0cm;\n  right: 0cm;\n  height: 2cm;\n  \n  background-color: #6DB9D0;\n  color: white;\n  text-align: center;\n  line-height: 1.5cm;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9icy1tYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVE7OztPQUFBO0FBS0E7RUFDSSxlQUFBO0FBQVo7QUFFUSwyREFBQTtBQUVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQURaO0FBR1EsOEJBQUE7QUFFQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRFo7QUFHUSw4QkFBQTtBQUVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFEWiIsImZpbGUiOiJvYnMtbWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgICAgICAvKiogXHJcbiAgICAgICAgICAgICAgICBTZXQgdGhlIG1hcmdpbnMgb2YgdGhlIHBhZ2UgdG8gMCwgc28gdGhlIGZvb3RlciBhbmQgdGhlIGhlYWRlclxyXG4gICAgICAgICAgICAgICAgY2FuIGJlIG9mIHRoZSBmdWxsIGhlaWdodCBhbmQgd2lkdGggIVxyXG4gICAgICAgICAgICAgKiovXHJcbiAgICAgICAgXHJcbiAgICAgICAgQHBhZ2Uge1xyXG4gICAgICAgICAgICBtYXJnaW46IDBjbSAwY207XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKiBEZWZpbmUgbm93IHRoZSByZWFsIG1hcmdpbnMgb2YgZXZlcnkgcGFnZSBpbiB0aGUgUERGICoqL1xyXG4gICAgICAgIFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyY207XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyY207XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMmNtO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyY207XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKiBEZWZpbmUgdGhlIGhlYWRlciBydWxlcyAqKi9cclxuICAgICAgICBcclxuICAgICAgICBoZWFkZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIHRvcDogMGNtO1xyXG4gICAgICAgICAgICBsZWZ0OiAwY207XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwY207XHJcbiAgICAgICAgICAgIGhlaWdodDogMmNtO1xyXG4gICAgICAgICAgICAvKiogRXh0cmEgcGVyc29uYWwgc3R5bGVzICoqL1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkRCOUQwO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWNtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiogRGVmaW5lIHRoZSBmb290ZXIgcnVsZXMgKiovXHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9vdGVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICBib3R0b206IDBjbTtcclxuICAgICAgICAgICAgbGVmdDogMGNtO1xyXG4gICAgICAgICAgICByaWdodDogMGNtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJjbTtcclxuICAgICAgICAgICAgLyoqIEV4dHJhIHBlcnNvbmFsIHN0eWxlcyAqKi9cclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzZEQjlEMDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVjbTtcclxuICAgICAgICB9Il19 */"]
      });
      /***/
    },

    /***/
    57103: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SurveysFilterPipe": function SurveysFilterPipe() {
          return (
            /* binding */
            _SurveysFilterPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _SurveysFilterPipe = /*#__PURE__*/function () {
        function _SurveysFilterPipe() {
          _classCallCheck(this, _SurveysFilterPipe);
        }

        _createClass(_SurveysFilterPipe, [{
          key: "transform",
          value: function transform(surveys, filter) {
            if (!surveys || !filter) {
              return surveys;
            } // filter items array, items which match and return true will be
            // kept, false will be filtered out


            return surveys.filter(function (survey) {
              return survey.surveyed.name.indexOf(filter.name) !== -1;
            });
          }
        }]);

        return _SurveysFilterPipe;
      }();

      _SurveysFilterPipe.ɵfac = function SurveysFilterPipe_Factory(t) {
        return new (t || _SurveysFilterPipe)();
      };

      _SurveysFilterPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "surveysFilter",
        type: _SurveysFilterPipe,
        pure: true
      });
      /***/
    },

    /***/
    32234: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedModule": function SharedModule() {
          return (
            /* binding */
            _SharedModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nebular/theme */
      40465);
      /* harmony import */


      var _pdf_templates_obs_map_obs_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./pdf-templates/obs-map/obs-map.component */
      64187);
      /* harmony import */


      var _pipes_surveys_filter_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pipes/surveys-filter.pipe */
      57103);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _SharedModule = function _SharedModule() {
        _classCallCheck(this, _SharedModule);
      };

      _SharedModule.ɵfac = function SharedModule_Factory(t) {
        return new (t || _SharedModule)();
      };

      _SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _SharedModule
      });
      _SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbAutocompleteModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbInputModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbSelectModule], _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_SharedModule, {
          declarations: [_pdf_templates_obs_map_obs_map_component__WEBPACK_IMPORTED_MODULE_0__.ObsMapComponent, _pipes_surveys_filter_pipe__WEBPACK_IMPORTED_MODULE_1__.SurveysFilterPipe],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbAutocompleteModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbInputModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbSelectModule],
          exports: [_pdf_templates_obs_map_obs_map_component__WEBPACK_IMPORTED_MODULE_0__.ObsMapComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _pipes_surveys_filter_pipe__WEBPACK_IMPORTED_MODULE_1__.SurveysFilterPipe]
        });
      })();
      /***/

    },

    /***/
    24789: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardComponent": function DashboardComponent() {
          return (
            /* binding */
            _DashboardComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/clipboard */
      13841);
      /* harmony import */


      var _nebular_security__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @nebular/security */
      18355);
      /* harmony import */


      var _core_data_remote_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../@core/data/remote/services/auth.service */
      31479);
      /* harmony import */


      var _core_data_remote_services_survey_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @core/data/remote/services/survey.service */
      32456);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @nebular/theme */
      40465);
      /* harmony import */


      var _surveys_table_surveys_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./surveys-table/surveys-table.component */
      88428);
      /* harmony import */


      var _populations_list_populations_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./populations-list/populations-list.component */
      31529);

      var _c0 = ["link"];

      function DashboardComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ngx-populations-list", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onActivate", function DashboardComponent_div_3_Template_ngx_populations_list_onActivate_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r5.onActivate($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mark");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Enlace de Encuesta: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "b", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_div_17_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r7.copyToClipBoard();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "nb-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Copiar Enlace ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate2"]("href", "#/encuesta/", ctx_r1.active_population == null ? null : ctx_r1.active_population.id, "/", ctx_r1.user.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"]("", ctx_r1.origin, "/#/encuesta/", ctx_r1.active_population == null ? null : ctx_r1.active_population.id, "/", ctx_r1.user.id, "");
        }
      }

      function DashboardComponent_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Actualmente no hay campa\xF1as activas.");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ngx-surveys-table", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Todas las encuestas")("surveys", ctx_r4.surveys_all)("user", ctx_r4.user);
        }
      }

      var _DashboardComponent = /*#__PURE__*/function () {
        function _DashboardComponent(clipboard, _accessChecker, _authService, _surveyService) {
          var _this2 = this;

          _classCallCheck(this, _DashboardComponent);

          this.clipboard = clipboard;
          this._accessChecker = _accessChecker;
          this._authService = _authService;
          this._surveyService = _surveyService;
          this.user = null;
          this.origin = window.location.origin;
          this.active_population = null;

          _authService.getCurrentUser().subscribe(function (user) {
            _this2.user = user;

            _this2.getActivePopulations();

            _this2.getSurveys();

            if (_accessChecker.isGranted('Register Admin', 'all')) {
              _this2.getSurveys_all();
            }
          });
        }

        _createClass(_DashboardComponent, [{
          key: "getActivePopulations",
          value: function getActivePopulations() {
            var _this3 = this;

            this._surveyService.getPopulations().subscribe({
              next: function next(populations) {
                _this3.populations = populations;

                _this3.populations.map(function (pop) {
                  if (pop.active) {
                    _this3.active_population = pop;
                  }
                });
              }
            });
          }
        }, {
          key: "getSurveys",
          value: function getSurveys() {
            var _this4 = this;

            this.loading = true;

            this._surveyService.getSurveys(this.user.id + "").subscribe({
              next: function next(surveys) {
                _this4.surveys = surveys;
                _this4.loading = false;
              }
            });
          }
        }, {
          key: "getSurveys_all",
          value: function getSurveys_all() {
            var _this5 = this;

            this.loading = true;

            this._surveyService.getSurveys("all").subscribe({
              next: function next(surveys_all) {
                _this5.surveys_all = surveys_all;
                _this5.loading = false;
              }
            });
          }
        }, {
          key: "onActivate",
          value: function onActivate($event) {
            this.getActivePopulations();
            this.getSurveys();

            if (this._accessChecker.isGranted('Register Admin', 'all')) {
              this.getSurveys_all();
            }
          }
        }, {
          key: "copyToClipBoard",
          value: function copyToClipBoard() {
            this.clipboard.copy(this.origin + '/#/encuesta/' + this.active_population.id + '/' + this.user.id);
            alert("Enlace copiado");
          }
        }]);

        return _DashboardComponent;
      }();

      _DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || _DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_5__.Clipboard), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nebular_security__WEBPACK_IMPORTED_MODULE_6__.NbAccessChecker), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_data_remote_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_data_remote_services_survey_service__WEBPACK_IMPORTED_MODULE_1__.SurveyService));
      };

      _DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _DashboardComponent,
        selectors: [["ngx-dashboard"]],
        viewQuery: function DashboardComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.link_container = _t.first);
          }
        },
        decls: 27,
        vars: 13,
        consts: [[1, "container"], [1, "row"], [1, "col-md-5"], ["style", "width: 100%", 4, "ngIf"], [2, "width", "100%"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "text-right", "color-info"], [1, "col-md-7"], ["class", "row", 4, "ngIf"], [3, "title", "surveys", "user"], [3, "onActivate"], ["target", "_blank", 3, "href"], [1, "text-info"], [1, "mt-2"], ["nbButton", "", "size", "small", "status", "info", 3, "click"], ["icon", "copy-outline"], [1, "dflex", "flex-column", "justify-content-center"], [1, "col-sm-12"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, DashboardComponent_div_3_Template, 2, 0, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "nb-card", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Instrucci\xF3n*:");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " Utilice este link para realizar la encuesta. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, DashboardComponent_div_17_Template, 12, 5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, DashboardComponent_ng_template_18_Template, 3, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "nb-card-footer", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, DashboardComponent_div_24_Template, 3, 3, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](25, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "ngx-surveys-table", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 9, ctx._accessChecker.isGranted("Register Admin", "all")));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Hola ", ctx.user.name, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.active_population)("ngIfElse", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Campa\xF1a Activa: ", ctx.active_population == null ? null : ctx.active_population.name, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](25, 11, ctx._accessChecker.isGranted("Register Admin", "all")));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Mis Encuestas")("surveys", ctx.surveys)("user", ctx.user);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardFooterComponent, _surveys_table_surveys_table_component__WEBPACK_IMPORTED_MODULE_2__.SurveysTableComponent, _populations_list_populations_list_component__WEBPACK_IMPORTED_MODULE_3__.PopulationsListComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbIconComponent],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
        encapsulation: 2
      });
      /***/
    },

    /***/
    71659: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardModule": function DashboardModule() {
          return (
            /* binding */
            _DashboardModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @nebular/theme */
      40465);
      /* harmony import */


      var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../@theme/theme.module */
      80268);
      /* harmony import */


      var _dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dashboard.component */
      24789);
      /* harmony import */


      var _nebular_security__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @nebular/security */
      18355);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _surveys_table_surveys_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./surveys-table/surveys-table.component */
      88428);
      /* harmony import */


      var _population_add_population_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./population-add/population-add.component */
      26449);
      /* harmony import */


      var ngx_dropzone__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-dropzone */
      54276);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _population_view_population_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./population-view/population-view.component */
      19244);
      /* harmony import */


      var _surveyed_add_surveyed_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./surveyed-add/surveyed-add.component */
      64890);
      /* harmony import */


      var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/cdk/clipboard */
      13841);
      /* harmony import */


      var _populations_list_populations_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./populations-list/populations-list.component */
      31529);
      /* harmony import */


      var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @sweetalert2/ngx-sweetalert2 */
      17749);
      /* harmony import */


      var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/@shared/shared.module */
      32234);
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng2-search-filter */
      51863);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent
      }, {
        path: 'audience/:population_id',
        component: _population_view_population_view_component__WEBPACK_IMPORTED_MODULE_4__.PopulationViewComponent
      }, {
        path: 'encuesta/:id',
        loadChildren: 'app/pages/onu-mujeres/onu-mujeres-routing.module#OnuMujeresRoutingModule'
      }];

      var _DashboardModule = function _DashboardModule() {
        _classCallCheck(this, _DashboardModule);
      };

      _DashboardModule.ɵfac = function DashboardModule_Factory(t) {
        return new (t || _DashboardModule)();
      };

      _DashboardModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: _DashboardModule
      });
      _DashboardModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        imports: [[_nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCardModule, _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbIconModule, _nebular_security__WEBPACK_IMPORTED_MODULE_11__.NbSecurityModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbListModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbActionsModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbInputModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbSpinnerModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbDialogModule.forChild(), ngx_dropzone__WEBPACK_IMPORTED_MODULE_12__.NgxDropzoneModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbProgressBarModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_14__.ClipboardModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forChild(routes), _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_16__.SweetAlert2Module, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbUserModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbFormFieldModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__.Ng2SearchPipeModule], _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](_DashboardModule, {
          declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent, _surveys_table_surveys_table_component__WEBPACK_IMPORTED_MODULE_2__.SurveysTableComponent, _population_add_population_add_component__WEBPACK_IMPORTED_MODULE_3__.PopulationAddComponent, _population_view_population_view_component__WEBPACK_IMPORTED_MODULE_4__.PopulationViewComponent, _surveyed_add_surveyed_add_component__WEBPACK_IMPORTED_MODULE_5__.SurveyedAddComponent, _populations_list_populations_list_component__WEBPACK_IMPORTED_MODULE_6__.PopulationsListComponent],
          imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCardModule, _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbIconModule, _nebular_security__WEBPACK_IMPORTED_MODULE_11__.NbSecurityModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbListModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbActionsModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbInputModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbSpinnerModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbDialogModule, ngx_dropzone__WEBPACK_IMPORTED_MODULE_12__.NgxDropzoneModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbProgressBarModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_14__.ClipboardModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_16__.SweetAlert2Module, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbUserModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbFormFieldModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule, ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__.Ng2SearchPipeModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    26449: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PopulationAddComponent": function PopulationAddComponent() {
          return (
            /* binding */
            _PopulationAddComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _core_data_remote_schemas_population__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @core/data/remote/schemas/population */
      17677);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @nebular/theme */
      40465);
      /* harmony import */


      var _core_data_remote_services_survey_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @core/data/remote/services/survey.service */
      32456);
      /* harmony import */


      var ngx_dropzone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-dropzone */
      54276);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function PopulationAddComponent_ngx_dropzone_image_preview_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngx-dropzone-image-preview", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("removed", function PopulationAddComponent_ngx_dropzone_image_preview_25_Template_ngx_dropzone_image_preview_removed_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

            var f_r2 = restoredCtx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r3.onRemove(f_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ngx-dropzone-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var f_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("removable", true)("file", f_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", f_r2.name, " ");
        }
      }

      function PopulationAddComponent_nb_progress_bar_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nb-progress-bar", 15);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r1.progress);
        }
      }

      var _PopulationAddComponent = /*#__PURE__*/function () {
        function _PopulationAddComponent(_dialog, _surveyService, _fb) {
          _classCallCheck(this, _PopulationAddComponent);

          this._dialog = _dialog;
          this._surveyService = _surveyService;
          this._fb = _fb;
          this.files = [];
          this.progress = 0;
          this.form = this._fb.group({});
          this.form.addControl("name", new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required));
        }

        _createClass(_PopulationAddComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSelect",
          value: function onSelect(event) {
            var _this$files;

            (_this$files = this.files).push.apply(_this$files, _toConsumableArray(event.addedFiles));
          }
        }, {
          key: "onRemove",
          value: function onRemove(event) {
            this.files.splice(this.files.indexOf(event), 1);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this6 = this;

            if (this.form.valid) {
              //submit session
              this.loading = true;

              var formData = this._surveyService.toFormData(this.form.value);

              if (this.files.length > 0) {
                formData.append('file', this.files[0]);
              }

              this._surveyService.addPopulation(formData).subscribe({
                next: function next(event) {
                  if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpEventType.UploadProgress) {
                    _this6.progress = Math.round(100 * event.loaded / event.total);
                  }

                  if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpEventType.Response) {
                    if (event.body.type == 1) {
                      _this6._surveyService.showToast('top rigth', 'success', 'Agregado Correctamente');

                      _this6._dialog.close(new _core_data_remote_schemas_population__WEBPACK_IMPORTED_MODULE_0__.Population().deserialize(event.body.population));
                    } //0: no esta en base de datos
                    //1: nombre no coincide con base de datos
                    //2: encuesta por terminar
                    //3: encuesta terminada.
                    //4: nueva encuesta


                    if (event.body.type == 2) {
                      _this6.message = "Población no fue creada";
                    }

                    _this6.progress = 0;
                    _this6.loading = false;
                    _this6.error = true;
                  }
                },
                error: function error(_error) {
                  _this6._surveyService.showToast('top rigth', 'danger', _error);

                  _this6.loading = false;
                  _this6.error = true;
                  _this6.progress = 0;
                  _this6.message = _error.message;
                }
              }); //  this.stepper.next();

            } else {// this.validateAllFormFields(form); //{7}
              //this.stepper.next();
            }
          }
        }]);

        return _PopulationAddComponent;
      }();

      _PopulationAddComponent.ɵfac = function PopulationAddComponent_Factory(t) {
        return new (t || _PopulationAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_data_remote_services_survey_service__WEBPACK_IMPORTED_MODULE_1__.SurveyService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder));
      };

      _PopulationAddComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _PopulationAddComponent,
        selectors: [["ngx-population-add"]],
        decls: 50,
        vars: 8,
        consts: [["size", "large", "nbSpinnerStatus", "danger", "nbSpinnerSize", "large", "nbSpinnerMessage", "", 3, "nbSpinner"], [1, "row"], [1, "col-md-12"], [1, "form-group", "row"], ["for", "name", 1, "label", "col-sm-4", "col-form-label"], [1, "col-sm-12", 3, "formGroup"], ["formControlName", "name", "type", "text", "nbInput", "", "fullWidth", "", "id", "name", "placeholder", "Nombre de Campa\xF1a"], ["nbInput", "", "fullWidth", "", "placeholder", "Descripci\xF3n"], [2, "width", "100%", 3, "multiple", "maxFileSize", "change"], [3, "removable", "file", "removed", 4, "ngFor", "ngForOf"], [1, "form-group", "col"], [3, "value", 4, "ngIf"], [1, "col-sm-12", "text-center"], ["status", "info", "nbButton", "", 1, "text-center", 3, "click"], [3, "removable", "file", "removed"], [3, "value"]],
        template: function PopulationAddComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Agregar/Editar Ocupaci\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Codigo");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Nombre");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Descripci\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "textarea", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Icono");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "ngx-dropzone", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function PopulationAddComponent_Template_ngx_dropzone_change_24_listener($event) {
              return ctx.onSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, PopulationAddComponent_ngx_dropzone_image_preview_25_Template, 3, 3, "ngx-dropzone-image-preview", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Habilidades");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "nb-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "nb-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Abogados ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "nb-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " Funcionarios de Programas Exclusivos de la Administraci\xF3n P\xFAblica ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "nb-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " Asistentes Legales y Afines ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "nb-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " Periodistas ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "nb-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " Ocupaciones Profesionales en Relaciones P\xFAblicas y Comunicaciones ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "nb-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " Otras Ocupaciones T\xE9cnicas en Cine, Televisi\xF3n y Artes Esc\xE9nicas n.c.a. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "nb-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, " Jueces ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, PopulationAddComponent_nb_progress_bar_44_Template, 1, 1, "nb-progress-bar", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "nb-card-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PopulationAddComponent_Template_button_click_48_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Crear");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nbSpinner", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("multiple", false)("maxFileSize", "1000000");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.files);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.progress > 0);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbSpinnerDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardBodyComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, ngx_dropzone__WEBPACK_IMPORTED_MODULE_6__.NgxDropzoneComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbListComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbListItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardFooterComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonComponent, ngx_dropzone__WEBPACK_IMPORTED_MODULE_6__.NgxDropzoneImagePreviewComponent, ngx_dropzone__WEBPACK_IMPORTED_MODULE_6__["ɵb"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbProgressBarComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3B1bGF0aW9uLWFkZC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    19244: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PopulationViewComponent": function PopulationViewComponent() {
          return (
            /* binding */
            _PopulationViewComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _core_data_remote_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @core/data/remote/services/auth.service */
      31479);
      /* harmony import */


      var _core_data_remote_services_survey_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @core/data/remote/services/survey.service */
      32456);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nebular/theme */
      40465);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _surveyed_add_surveyed_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../surveyed-add/surveyed-add.component */
      64890);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @sweetalert2/ngx-sweetalert2 */
      17749);

      function PopulationViewComponent_nb_list_item_12_nb_action_3_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Finalizada");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function PopulationViewComponent_nb_list_item_12_nb_action_3_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "En progreso");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function PopulationViewComponent_nb_list_item_12_nb_action_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nb-action");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PopulationViewComponent_nb_list_item_12_nb_action_3_span_1_Template, 2, 0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PopulationViewComponent_nb_list_item_12_nb_action_3_span_2_Template, 2, 0, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var surveyed_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", surveyed_r1.survey.isFinished);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !surveyed_r1.survey.isFinished);
        }
      }

      function PopulationViewComponent_nb_list_item_12_nb_action_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nb-action");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "nb-icon", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var surveyed_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate2"]("href", "#/encuesta/1/", surveyed_r1.survey.user_id, "/", surveyed_r1.survey.uuid, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        }
      }

      function PopulationViewComponent_nb_list_item_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nb-list-item", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "nb-user", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nb-actions", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PopulationViewComponent_nb_list_item_12_nb_action_3_Template, 3, 2, "nb-action", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PopulationViewComponent_nb_list_item_12_nb_action_4_Template, 3, 2, "nb-action", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "nb-action", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "nb-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Borrar");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "swal", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("confirm", function PopulationViewComponent_nb_list_item_12_Template_swal_confirm_9_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);

            var surveyed_r1 = restoredCtx.$implicit;
            var i_r2 = restoredCtx.index;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r10.deleteSurveyed(surveyed_r1, i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var surveyed_r1 = ctx.$implicit;

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", surveyed_r1.name)("title", surveyed_r1.identification);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", surveyed_r1.survey);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", surveyed_r1.survey);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("swal", _r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("title", "Seguro que desea eliminar al encuestado ", surveyed_r1.name, "?");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showCancelButton", true)("focusCancel", true);
        }
      }

      var _PopulationViewComponent = /*#__PURE__*/function () {
        function _PopulationViewComponent(_authService, _surveyService, _dialogService, _Activatedroute) {
          _classCallCheck(this, _PopulationViewComponent);

          this._surveyService = _surveyService;
          this._dialogService = _dialogService;
          this._Activatedroute = _Activatedroute;
        }

        _createClass(_PopulationViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.population_id = this._Activatedroute.snapshot.paramMap.get("population_id");
            this.getPopulations(this.population_id);
          }
        }, {
          key: "getPopulations",
          value: function getPopulations(pop_id) {
            var _this7 = this;

            this._surveyService.getPopulation(pop_id).subscribe({
              next: function next(population) {
                _this7.population = population;
              }
            });
          }
        }, {
          key: "deleteSurveyed",
          value: function deleteSurveyed(surveyed, i) {
            var _this8 = this;

            this._surveyService.deleteSurveyed(surveyed).subscribe({
              next: function next(surveyed) {
                _this8.population.surveyeds.splice(i, 1);

                _this8._surveyService.showToast("rigth", "success", "Borrado Correctamente");
              }
            });
          }
        }, {
          key: "onAdded",
          value: function onAdded(ev) {
            var s = [ev].concat(this.population.surveyeds);
            this.population.surveyeds = s;

            this._surveyService.showToast("rigth", "success", "Agregado Correctamente");
          }
        }]);

        return _PopulationViewComponent;
      }();

      _PopulationViewComponent.ɵfac = function PopulationViewComponent_Factory(t) {
        return new (t || _PopulationViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_data_remote_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_data_remote_services_survey_service__WEBPACK_IMPORTED_MODULE_1__.SurveyService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute));
      };

      _PopulationViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _PopulationViewComponent,
        selectors: [["ngx-population-view"]],
        decls: 13,
        vars: 5,
        consts: [[1, "col-md-8", "offset-md-2"], [3, "population_id", "added"], [1, "row"], [1, "col-md-12"], ["size", "large", 1, "list-card"], [1, "d-flex", "justify-content-between"], [1, "label", "text-left"], ["class", "d-flex justify-content-between", "role", "list", 4, "ngFor", "ngForOf"], ["role", "list", 1, "d-flex", "justify-content-between"], [3, "name", "title"], ["size", "small", "fullWidth", "", 1, "d-flex", "justify-content-between"], [4, "ngIf"], ["href", "#", 3, "swal"], ["icon", "trash-2-outline", 1, "action-icon"], ["text", "Esto no se puede deshacer", "icon", "question", 3, "title", "showCancelButton", "focusCancel", "confirm"], ["deleteSwal", ""], ["class", "text-success", 4, "ngIf"], ["class", "text-info", 4, "ngIf"], [1, "text-success"], [1, "text-info"], ["target", "_blank", 3, "href"], ["icon", "external-link-outline", "status", "info"]],
        template: function PopulationViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ngx-surveyed-add", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("added", function PopulationViewComponent_Template_ngx_surveyed_add_added_1_listener($event) {
              return ctx.onAdded($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nb-card", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "nb-card-header", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "nb-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, PopulationViewComponent_nb_list_item_12_Template, 11, 8, "nb-list-item", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("population_id", ctx.population == null ? null : ctx.population.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Campa\xF1a: ", ctx.population == null ? null : ctx.population.name, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" Encuestados: ", ctx.population == null ? null : ctx.population.surveyeds.length, " / Encuestas: ", ctx.population == null ? null : ctx.population.surveys.length, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.population == null ? null : ctx.population.surveyeds);
          }
        },
        directives: [_surveyed_add_surveyed_add_component__WEBPACK_IMPORTED_MODULE_2__.SurveyedAddComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbListItemComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbUserComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbActionsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbActionComponent, _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__.SwalDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbIconComponent, _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__.SwalComponent],
        styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.nb-theme-default   [_nghost-%COMP%]   .buttons-row[_ngcontent-%COMP%] {\n  margin: -0.5rem;\n}\n.nb-theme-default   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%] {\n  margin: 0.5rem;\n}\n[dir=ltr]   .nb-theme-default   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.nb-theme-default   [_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%] {\n  height: 8rem;\n}\n\n.nb-theme-dark   [_nghost-%COMP%]   .buttons-row[_ngcontent-%COMP%] {\n  margin: -0.5rem;\n}\n.nb-theme-dark   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%] {\n  margin: 0.5rem;\n}\n[dir=ltr]   .nb-theme-dark   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n[dir=rtl]   .nb-theme-dark   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.nb-theme-dark   [_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%] {\n  height: 8rem;\n}\n\n.nb-theme-cosmic   [_nghost-%COMP%]   .buttons-row[_ngcontent-%COMP%] {\n  margin: -0.5rem;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%] {\n  margin: 0.5rem;\n}\n[dir=ltr]   .nb-theme-cosmic   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%] {\n  height: 8rem;\n}\n\n.nb-theme-corporate   [_nghost-%COMP%]   .buttons-row[_ngcontent-%COMP%] {\n  margin: -0.5rem;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%] {\n  margin: 0.5rem;\n}\n[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%] {\n  height: 8rem;\n}\n\n.nb-theme-material-dark   [_nghost-%COMP%]   .buttons-row[_ngcontent-%COMP%] {\n  margin: -0.5rem;\n}\n.nb-theme-material-dark   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%] {\n  margin: 0.5rem;\n}\n[dir=ltr]   .nb-theme-material-dark   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n[dir=rtl]   .nb-theme-material-dark   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.nb-theme-material-dark   [_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%] {\n  height: 8rem;\n}\n\n.nb-theme-material-light   [_nghost-%COMP%]   .buttons-row[_ngcontent-%COMP%] {\n  margin: -0.5rem;\n}\n.nb-theme-material-light   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%] {\n  margin: 0.5rem;\n}\n[dir=ltr]   .nb-theme-material-light   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n[dir=rtl]   .nb-theme-material-light   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.nb-theme-material-light   [_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%] {\n  height: 8rem;\n}\n\n.nb-theme-obsrio   [_nghost-%COMP%]   .buttons-row[_ngcontent-%COMP%] {\n  margin: -0.5rem;\n}\n.nb-theme-obsrio   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%] {\n  margin: 0.5rem;\n}\n[dir=ltr]   .nb-theme-obsrio   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n[dir=rtl]   .nb-theme-obsrio   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.nb-theme-obsrio   [_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%] {\n  height: 8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXEB0aGVtZVxcc3R5bGVzXFx0aGVtZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXHN0eWxlc1xcX3RoZW1pbmcuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXHN0eWxlc1xcY29yZVxcX21peGlucy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcc3R5bGVzXFxjb3JlXFxfZnVuY3Rpb25zLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxzdHlsZXNcXGNvcmVcXF92YXJpYW50cy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcc3R5bGVzXFx0aGVtZXNcXF9tYXBwaW5nLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxzdHlsZXNcXGNvcmVcXHRoZW1pbmdcXF9yZWdpc3Rlci5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcc3R5bGVzXFxjb3JlXFx0aGVtaW5nXFxfaW5zdGFsbC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcc3R5bGVzXFxjb3JlXFx0aGVtaW5nXFxfZ2V0LXZhbHVlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxzdHlsZXNcXHRoZW1lc1xcX2RlZmF1bHQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXHN0eWxlc1xcdGhlbWVzXFxfZGFyay5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcc3R5bGVzXFx0aGVtZXNcXF9jb3NtaWMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXHN0eWxlc1xcdGhlbWVzXFxfY29ycG9yYXRlLnNjc3MiLCIuLlxcLi5cXC4uXFxAdGhlbWVcXHN0eWxlc1xcbWF0ZXJpYWxcXF9tYXRlcmlhbC1kYXJrLnNjc3MiLCIuLlxcLi5cXC4uXFxAdGhlbWVcXHN0eWxlc1xcbWF0ZXJpYWxcXF9tYXRlcmlhbC1saWdodC5zY3NzIiwicG9wdWxhdGlvbi12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFPUSxpR0FBQTtBQ1BSOzs7O0VBQUE7QUFNQTs7O0VBQUE7QUNOQTs7OztFQUFBO0FBd0tBOzs7O0VBQUE7QUEwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQTtBQ2xNQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQ0FBOzs7O0VBQUE7QUNFQTs7OztFQUFBO0FDRkE7Ozs7RUFBQTtBQ0FBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FOQUE7Ozs7RUFBQTtBREFBOzs7O0VBQUE7QUF3S0E7Ozs7RUFBQTtBQTBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBO0FRbE1BOzs7O0VBQUE7QVBBQTs7OztFQUFBO0FEQUE7Ozs7RUFBQTtBQXdLQTs7OztFQUFBO0FBMEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7QU9sTUE7Ozs7RUFBQTtBTkFBOzs7O0VBQUE7QURBQTs7OztFQUFBO0FBd0tBOzs7O0VBQUE7QUEwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQTtBU2xNQTs7OztFQUFBO0FSQUE7Ozs7RUFBQTtBREFBOzs7O0VBQUE7QUF3S0E7Ozs7RUFBQTtBQTBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBO0FRbE1BOzs7O0VBQUE7QVBBQTs7OztFQUFBO0FEQUE7Ozs7RUFBQTtBQXdLQTs7OztFQUFBO0FBMEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7QU9sTUE7Ozs7RUFBQTtBTkFBOzs7O0VBQUE7QURBQTs7OztFQUFBO0FBd0tBOzs7O0VBQUE7QUEwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQTtBVWxNQTs7OztFQUFBO0FUQUE7Ozs7RUFBQTtBREFBOzs7O0VBQUE7QUF3S0E7Ozs7RUFBQTtBQTBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBO0FPbE1BOzs7O0VBQUE7QU5BQTs7OztFQUFBO0FEQUE7Ozs7RUFBQTtBQXdLQTs7OztFQUFBO0FBMEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7QVdsTUE7Ozs7RUFBQTtBVkFBOzs7O0VBQUE7QURBQTs7OztFQUFBO0FBd0tBOzs7O0VBQUE7QUEwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQTtBWWxNQTs7OztFQUFBO0FYQUE7Ozs7RUFBQTtBREFBOzs7O0VBQUE7QUF3S0E7Ozs7RUFBQTtBQTBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBO0FLdkhJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7QVF6RUE7RUFDSSxlQUFBO0FBeWdEUjtBQXZnREk7RUFDSSxjQUFBO0FBeWdEUjtBYnZ0Q0U7RUFFSSxvQmFqVGdDO0FBeWdEdEM7QWIxdENFO0VBRUksbUJhaFQrQjtBQTJnRHJDO0FBemdESTtFQUNJLFlBQUE7QUEyZ0RSO0FSNzhDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBO0FRekVBO0VBQ0ksZUFBQTtBQTZpRFI7QUEzaURJO0VBQ0ksY0FBQTtBQTZpRFI7QWIzdkNFO0VBRUksb0JhalRnQztBQTZpRHRDO0FiOXZDRTtFQUVJLG1CYWhUK0I7QUEraURyQztBQTdpREk7RUFDSSxZQUFBO0FBK2lEUjtBUmovQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQTtBUXpFQTtFQUNJLGVBQUE7QUFpbERSO0FBL2tESTtFQUNJLGNBQUE7QUFpbERSO0FiL3hDRTtFQUVJLG9CYWpUZ0M7QUFpbER0QztBYmx5Q0U7RUFFSSxtQmFoVCtCO0FBbWxEckM7QUFqbERJO0VBQ0ksWUFBQTtBQW1sRFI7QVJyaERJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7QVF6RUE7RUFDSSxlQUFBO0FBcW5EUjtBQW5uREk7RUFDSSxjQUFBO0FBcW5EUjtBYm4wQ0U7RUFFSSxvQmFqVGdDO0FBcW5EdEM7QWJ0MENFO0VBRUksbUJhaFQrQjtBQXVuRHJDO0FBcm5ESTtFQUNJLFlBQUE7QUF1bkRSO0FSempESTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBO0FRekVBO0VBQ0ksZUFBQTtBQXlwRFI7QUF2cERJO0VBQ0ksY0FBQTtBQXlwRFI7QWJ2MkNFO0VBRUksb0JhalRnQztBQXlwRHRDO0FiMTJDRTtFQUVJLG1CYWhUK0I7QUEycERyQztBQXpwREk7RUFDSSxZQUFBO0FBMnBEUjtBUjdsREk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQTtBUXpFQTtFQUNJLGVBQUE7QUE2ckRSO0FBM3JESTtFQUNJLGNBQUE7QUE2ckRSO0FiMzRDRTtFQUVJLG9CYWpUZ0M7QUE2ckR0QztBYjk0Q0U7RUFFSSxtQmFoVCtCO0FBK3JEckM7QUE3ckRJO0VBQ0ksWUFBQTtBQStyRFI7QVJqb0RJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7QVF6RUE7RUFDSSxlQUFBO0FBaXVEUjtBQS90REk7RUFDSSxjQUFBO0FBaXVEUjtBYi82Q0U7RUFFSSxvQmFqVGdDO0FBaXVEdEM7QWJsN0NFO0VBRUksbUJhaFQrQjtBQW11RHJDO0FBanVESTtFQUNJLFlBQUE7QUFtdURSIiwiZmlsZSI6InBvcHVsYXRpb24tdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBuZWJ1bGFyIHRoZW1pbmcgZnJhbWV3b3JrXHJcbkBpbXBvcnQgXCJ+QG5lYnVsYXIvdGhlbWUvc3R5bGVzL3RoZW1pbmdcIjtcclxuLy8gQG5lYnVsYXIgb3V0IG9mIHRoZSBib3ggdGhlbWVzXHJcbkBpbXBvcnQgXCJ+QG5lYnVsYXIvdGhlbWUvc3R5bGVzL3RoZW1lc1wiO1xyXG4vLyBtYXRlcmlhbCB0aGVtZXNcclxuQGltcG9ydCBcIi4vbWF0ZXJpYWwvbWF0ZXJpYWwtZGFya1wiO1xyXG5AaW1wb3J0IFwiLi9tYXRlcmlhbC9tYXRlcmlhbC1saWdodFwiO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRANDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG4kbmItdGhlbWVzOiBuYi1yZWdpc3Rlci10aGVtZSggKCBsYXlvdXQtcGFkZGluZy10b3A6IDIuMjVyZW0sIG1lbnUtaXRlbS1pY29uLW1hcmdpbjogMCAwLjVyZW0gMCAwLCBjYXJkLWhlaWdodC10aW55OiAxMy41cmVtLCBjYXJkLWhlaWdodC1zbWFsbDogMjEuMTg3NXJlbSwgY2FyZC1oZWlnaHQtbWVkaXVtOiAyOC44NzVyZW0sIGNhcmQtaGVpZ2h0LWxhcmdlOiAzNi41NjI1cmVtLCBjYXJkLWhlaWdodC1naWFudDogNDQuMjVyZW0sIGNhcmQtbWFyZ2luLWJvdHRvbTogMS44NzVyZW0sIGNhcmQtaGVhZGVyLXdpdGgtc2VsZWN0LXBhZGRpbmctdG9wOiAwLjVyZW0sIGNhcmQtaGVhZGVyLXdpdGgtc2VsZWN0LXBhZGRpbmctYm90dG9tOiAwLjVyZW0sIHNlbGVjdC1taW4td2lkdGg6IDZyZW0sIHNsaWRlLW91dC1iYWNrZ3JvdW5kOiAjZjdmOWZjLCBzbGlkZS1vdXQtc2hhZG93LWNvbG9yOiAwIDRweCAxNHB4IDAgIzhmOWJiMywgc2xpZGUtb3V0LXNoYWRvdy1jb2xvci1ydGw6IDAgNHB4IDE0cHggMCAjOGY5YmIzLCApLFxyXG5kZWZhdWx0LFxyXG5kZWZhdWx0KTtcclxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoICggbGF5b3V0LXBhZGRpbmctdG9wOiAyLjI1cmVtLCBtZW51LWl0ZW0taWNvbi1tYXJnaW46IDAgMC41cmVtIDAgMCwgY2FyZC1oZWlnaHQtdGlueTogMTMuNXJlbSwgY2FyZC1oZWlnaHQtc21hbGw6IDIxLjE4NzVyZW0sIGNhcmQtaGVpZ2h0LW1lZGl1bTogMjguODc1cmVtLCBjYXJkLWhlaWdodC1sYXJnZTogMzYuNTYyNXJlbSwgY2FyZC1oZWlnaHQtZ2lhbnQ6IDQ0LjI1cmVtLCBjYXJkLW1hcmdpbi1ib3R0b206IDEuODc1cmVtLCBjYXJkLWhlYWRlci13aXRoLXNlbGVjdC1wYWRkaW5nLXRvcDogMC41cmVtLCBjYXJkLWhlYWRlci13aXRoLXNlbGVjdC1wYWRkaW5nLWJvdHRvbTogMC41cmVtLCBzZWxlY3QtbWluLXdpZHRoOiA2cmVtLCBzbGlkZS1vdXQtYmFja2dyb3VuZDogIzI1MjU0Nywgc2xpZGUtb3V0LXNoYWRvdy1jb2xvcjogMnB4IDAgM3B4ICMyOTE1N2EsIHNsaWRlLW91dC1zaGFkb3ctY29sb3ItcnRsOiAtMnB4IDAgM3B4ICMyOTE1N2EsIHRleHQtYmFzaWMtY29sb3I6IGNvbG9yLWJhc2ljLTQwMCwgKSxcclxuY29zbWljLFxyXG5jb3NtaWMpO1xyXG4kbmItdGhlbWVzOiBuYi1yZWdpc3Rlci10aGVtZSggKCBsYXlvdXQtcGFkZGluZy10b3A6IDIuMjVyZW0sIG1lbnUtaXRlbS1pY29uLW1hcmdpbjogMCAwLjVyZW0gMCAwLCBjYXJkLWhlaWdodC10aW55OiAxMy41cmVtLCBjYXJkLWhlaWdodC1zbWFsbDogMjEuMTg3NXJlbSwgY2FyZC1oZWlnaHQtbWVkaXVtOiAyOC44NzVyZW0sIGNhcmQtaGVpZ2h0LWxhcmdlOiAzNi41NjI1cmVtLCBjYXJkLWhlaWdodC1naWFudDogNDQuMjVyZW0sIGNhcmQtbWFyZ2luLWJvdHRvbTogMS44NzVyZW0sIGNhcmQtaGVhZGVyLXdpdGgtc2VsZWN0LXBhZGRpbmctdG9wOiAwLjVyZW0sIGNhcmQtaGVhZGVyLXdpdGgtc2VsZWN0LXBhZGRpbmctYm90dG9tOiAwLjVyZW0sIHNlbGVjdC1taW4td2lkdGg6IDZyZW0sIHNsaWRlLW91dC1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZWRmMWY3IDAlLCAjZTRlOWYyIDEwMCUpLCBzbGlkZS1vdXQtc2hhZG93LWNvbG9yOiAwIDRweCAxNHB4IDAgIzhmOWJiMywgc2xpZGUtb3V0LXNoYWRvdy1jb2xvci1ydGw6IDAgNHB4IDE0cHggMCAjOGY5YmIzLCApLFxyXG5jb3Jwb3JhdGUsXHJcbmNvcnBvcmF0ZSk7XHJcbiRuYi10aGVtZXM6IG5iLXJlZ2lzdGVyLXRoZW1lKCAoIGxheW91dC1wYWRkaW5nLXRvcDogMi4yNXJlbSwgbWVudS1pdGVtLWljb24tbWFyZ2luOiAwIDAuNXJlbSAwIDAsIGNhcmQtaGVpZ2h0LXRpbnk6IDEzLjVyZW0sIGNhcmQtaGVpZ2h0LXNtYWxsOiAyMS4xODc1cmVtLCBjYXJkLWhlaWdodC1tZWRpdW06IDI4Ljg3NXJlbSwgY2FyZC1oZWlnaHQtbGFyZ2U6IDM2LjU2MjVyZW0sIGNhcmQtaGVpZ2h0LWdpYW50OiA0NC4yNXJlbSwgY2FyZC1tYXJnaW4tYm90dG9tOiAxLjg3NXJlbSwgY2FyZC1oZWFkZXItd2l0aC1zZWxlY3QtcGFkZGluZy10b3A6IDAuNXJlbSwgY2FyZC1oZWFkZXItd2l0aC1zZWxlY3QtcGFkZGluZy1ib3R0b206IDAuNXJlbSwgc2VsZWN0LW1pbi13aWR0aDogNnJlbSwgc2xpZGUtb3V0LWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICMyMjJiNDUgMCUsICMxNTFhMzAgMTAwJSksIHNsaWRlLW91dC1zaGFkb3ctY29sb3I6IDAgNHB4IDE0cHggMCAjOGY5YmIzLCBzbGlkZS1vdXQtc2hhZG93LWNvbG9yLXJ0bDogMCA0cHggMTRweCAwICM4ZjliYjMsICksXHJcbmRhcmssXHJcbmRhcmspO1xyXG4kbmItdGhlbWVzOiBuYi1yZWdpc3Rlci10aGVtZSggKCBsYXlvdXQtcGFkZGluZy10b3A6IDIuMjVyZW0sIG1lbnUtaXRlbS1pY29uLW1hcmdpbjogMCAwLjVyZW0gMCAwLCBjYXJkLWhlaWdodC10aW55OiAxMy41cmVtLCBjYXJkLWhlaWdodC1zbWFsbDogMjEuMTg3NXJlbSwgY2FyZC1oZWlnaHQtbWVkaXVtOiAyOC44NzVyZW0sIGNhcmQtaGVpZ2h0LWxhcmdlOiAzNi41NjI1cmVtLCBjYXJkLWhlaWdodC1naWFudDogNDQuMjVyZW0sIGNhcmQtbWFyZ2luLWJvdHRvbTogMS44NzVyZW0sIGNhcmQtaGVhZGVyLXdpdGgtc2VsZWN0LXBhZGRpbmctdG9wOiAwLjVyZW0sIGNhcmQtaGVhZGVyLXdpdGgtc2VsZWN0LXBhZGRpbmctYm90dG9tOiAwLjVyZW0sIHNlbGVjdC1taW4td2lkdGg6IDZyZW0sIG9wdGlvbi1saXN0LWJvcmRlci1yYWRpdXM6IDAsIHNsaWRlLW91dC1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZTBlMGUwIDAlLCAjZWJlYmViIDEwMCUpLCBzbGlkZS1vdXQtc2hhZG93LWNvbG9yOiAwIDRweCAxNHB4IDAgI2ViZWJlYiwgc2xpZGUtb3V0LXNoYWRvdy1jb2xvci1ydGw6IDAgNHB4IDE0cHggMCAjZWJlYmViLCApLFxyXG5tYXRlcmlhbC1saWdodCxcclxubWF0ZXJpYWwtbGlnaHQpO1xyXG4kbmItdGhlbWVzOiBuYi1yZWdpc3Rlci10aGVtZSggKCBsYXlvdXQtcGFkZGluZy10b3A6IDIuMjVyZW0sIG1lbnUtaXRlbS1pY29uLW1hcmdpbjogMCAwLjVyZW0gMCAwLCBjYXJkLWhlaWdodC10aW55OiAxMy41cmVtLCBjYXJkLWhlaWdodC1zbWFsbDogMjEuMTg3NXJlbSwgY2FyZC1oZWlnaHQtbWVkaXVtOiAyOC44NzVyZW0sIGNhcmQtaGVpZ2h0LWxhcmdlOiAzNi41NjI1cmVtLCBjYXJkLWhlaWdodC1naWFudDogNDQuMjVyZW0sIGNhcmQtbWFyZ2luLWJvdHRvbTogMS44NzVyZW0sIGNhcmQtaGVhZGVyLXdpdGgtc2VsZWN0LXBhZGRpbmctdG9wOiAwLjVyZW0sIGNhcmQtaGVhZGVyLXdpdGgtc2VsZWN0LXBhZGRpbmctYm90dG9tOiAwLjVyZW0sIHNlbGVjdC1taW4td2lkdGg6IDZyZW0sIG9wdGlvbi1saXN0LWJvcmRlci1yYWRpdXM6IDAsIHNsaWRlLW91dC1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMWYxZjFmIDAlLCAjMjkyOTI5IDEwMCUpLCBzbGlkZS1vdXQtc2hhZG93LWNvbG9yOiAwIDRweCAxNHB4IDAgIzI5MjkyOSwgc2xpZGUtb3V0LXNoYWRvdy1jb2xvci1ydGw6IDAgNHB4IDE0cHggMCAjMjkyOTI5LCApLFxyXG5tYXRlcmlhbC1kYXJrLFxyXG5tYXRlcmlhbC1kYXJrKTtcclxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoICggY29sb3ItcHJpbWFyeS0xMDA6ICNENkRFRkYsIGNvbG9yLXByaW1hcnktMjAwOiAjQUVCREZGLCBjb2xvci1wcmltYXJ5LTMwMDogIzg1OUFGRiwgY29sb3ItcHJpbWFyeS00MDA6ICM2NzdGRkYsIGNvbG9yLXByaW1hcnktNTAwOiAjMzU1MkZGLCBjb2xvci1wcmltYXJ5LTYwMDogIzI2M0REQiwgY29sb3ItcHJpbWFyeS03MDA6ICMxQTJDQjcsIGNvbG9yLXByaW1hcnktODAwOiAjMTAxRDkzLCBjb2xvci1wcmltYXJ5LTkwMDogIzBBMTM3QSwgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0xMDA6IHJnYmEoNTMsIDgyLCAyNTUsIDAuMDgpLCBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTIwMDogcmdiYSg1MywgODIsIDI1NSwgMC4xNiksIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDUzLCA4MiwgMjU1LCAwLjI0KSwgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC00MDA6IHJnYmEoNTMsIDgyLCAyNTUsIDAuMzIpLCBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTUwMDogcmdiYSg1MywgODIsIDI1NSwgMC40KSwgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC02MDA6IHJnYmEoNTMsIDgyLCAyNTUsIDAuNDgpLCBjb2xvci1zdWNjZXNzLTEwMDogI0VERkNENywgY29sb3Itc3VjY2Vzcy0yMDA6ICNEN0ZBQjAsIGNvbG9yLXN1Y2Nlc3MtMzAwOiAjQjhGMTg2LCBjb2xvci1zdWNjZXNzLTQwMDogIzk4RTQ2NSwgY29sb3Itc3VjY2Vzcy01MDA6ICM2QkQzMzcsIGNvbG9yLXN1Y2Nlc3MtNjAwOiAjNEVCNTI4LCBjb2xvci1zdWNjZXNzLTcwMDogIzM1OTcxQiwgY29sb3Itc3VjY2Vzcy04MDA6ICMyMDdBMTEsIGNvbG9yLXN1Y2Nlc3MtOTAwOiAjMTE2NTBBLCBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTEwMDogcmdiYSgxMDcsIDIxMSwgNTUsIDAuMDgpLCBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTIwMDogcmdiYSgxMDcsIDIxMSwgNTUsIDAuMTYpLCBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTMwMDogcmdiYSgxMDcsIDIxMSwgNTUsIDAuMjQpLCBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTQwMDogcmdiYSgxMDcsIDIxMSwgNTUsIDAuMzIpLCBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTUwMDogcmdiYSgxMDcsIDIxMSwgNTUsIDAuNCksIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDEwNywgMjExLCA1NSwgMC40OCksIGNvbG9yLWluZm8tMTAwOiAjRUJFMUZFLCBjb2xvci1pbmZvLTIwMDogI0Q2QzNGRSwgY29sb3ItaW5mby0zMDA6ICNCRkE2RkUsIGNvbG9yLWluZm8tNDAwOiAjQUM4RkZFLCBjb2xvci1pbmZvLTUwMDogIzhFNkJGRSwgY29sb3ItaW5mby02MDA6ICM2QzRFREEsIGNvbG9yLWluZm8tNzAwOiAjNEUzNUI2LCBjb2xvci1pbmZvLTgwMDogIzM0MjI5MywgY29sb3ItaW5mby05MDA6ICMyMjE0NzksIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDE0MiwgMTA3LCAyNTQsIDAuMDgpLCBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTIwMDogcmdiYSgxNDIsIDEwNywgMjU0LCAwLjE2KSwgY29sb3ItaW5mby10cmFuc3BhcmVudC0zMDA6IHJnYmEoMTQyLCAxMDcsIDI1NCwgMC4yNCksIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDE0MiwgMTA3LCAyNTQsIDAuMzIpLCBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTUwMDogcmdiYSgxNDIsIDEwNywgMjU0LCAwLjQpLCBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTYwMDogcmdiYSgxNDIsIDEwNywgMjU0LCAwLjQ4KSwgY29sb3Itd2FybmluZy0xMDA6ICNGRkY1RDksIGNvbG9yLXdhcm5pbmctMjAwOiAjRkZFOEIzLCBjb2xvci13YXJuaW5nLTMwMDogI0ZGRDc4RCwgY29sb3Itd2FybmluZy00MDA6ICNGRkM3NzEsIGNvbG9yLXdhcm5pbmctNTAwOiAjRkZBRDQyLCBjb2xvci13YXJuaW5nLTYwMDogI0RCODkzMCwgY29sb3Itd2FybmluZy03MDA6ICNCNzY5MjEsIGNvbG9yLXdhcm5pbmctODAwOiAjOTM0QzE1LCBjb2xvci13YXJuaW5nLTkwMDogIzdBMzcwQywgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0xMDA6IHJnYmEoMjU1LCAxNzMsIDY2LCAwLjA4KSwgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0yMDA6IHJnYmEoMjU1LCAxNzMsIDY2LCAwLjE2KSwgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0zMDA6IHJnYmEoMjU1LCAxNzMsIDY2LCAwLjI0KSwgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC00MDA6IHJnYmEoMjU1LCAxNzMsIDY2LCAwLjMyKSwgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC01MDA6IHJnYmEoMjU1LCAxNzMsIDY2LCAwLjQpLCBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTYwMDogcmdiYSgyNTUsIDE3MywgNjYsIDAuNDgpLCBjb2xvci1kYW5nZXItMTAwOiAjRkZFNkQ5LCBjb2xvci1kYW5nZXItMjAwOiAjRkZDN0IzLCBjb2xvci1kYW5nZXItMzAwOiAjRkZBMThFLCBjb2xvci1kYW5nZXItNDAwOiAjRkY3RTcxLCBjb2xvci1kYW5nZXItNTAwOiAjRkY0MzQzLCBjb2xvci1kYW5nZXItNjAwOiAjREIzMDNGLCBjb2xvci1kYW5nZXItNzAwOiAjQjcyMTNCLCBjb2xvci1kYW5nZXItODAwOiAjOTMxNTM2LCBjb2xvci1kYW5nZXItOTAwOiAjN0EwQzMyLCBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDI1NSwgNjcsIDY3LCAwLjA4KSwgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTIwMDogcmdiYSgyNTUsIDY3LCA2NywgMC4xNiksIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0zMDA6IHJnYmEoMjU1LCA2NywgNjcsIDAuMjQpLCBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDI1NSwgNjcsIDY3LCAwLjMyKSwgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTUwMDogcmdiYSgyNTUsIDY3LCA2NywgMC40KSwgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTYwMDogcmdiYSgyNTUsIDY3LCA2NywgMC40OCksIGJhY2tncm91bmQtcHJpbWFyeS1jb2xvci0xOiBjb2xvci1iYXNpYy0xMDAsIGZvbnQtZmFtaWx5LXByaW1hcnk6IHVucXVvdGUoJ1BvcHBpbnMnKSwgZm9udC1mYW1pbHktc2Vjb25kYXJ5OiBmb250LWZhbWlseS1wcmltYXJ5LCBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTM6d2hpdGUsIGhlYWRlci1zaGFkb3c6IG5vbmUsIGJ1dHRvbi1vdXRsaW5lLWJvcmRlci13aWR0aDogM3B4LCBjYXJkLWJvcmRlci1jb2xvcjpub25lLCBpbnB1dC1ib3JkZXItd2lkdGg6IDJweCwgdGV4dC1oZWFkaW5nLTMtbGluZS1oZWlnaHQ6MS42cmVtLCBpbmZvOmNvbG9yLWluZm8tNTAwKSxcclxub2JzcmlvLFxyXG5kZWZhdWx0KTtcclxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG4vKlxuICBEZWNsYXJlIHZhcmlhYmxlcyBiZWZvcmUgbWFraW5nIHRoZW0gZ2xvYmFsLlxuICBkYXJ0LXNhc3MgZG9lc24ndCBhbGxvdyB0byBkZWNsYXJlIHZhcmlhYmxlIHdpdGggIWdsb2JhbC5cbiAqL1xuJG5iLWVuYWJsZS1jc3MtY3VzdG9tLXByb3BlcnRpZXM6IGZhbHNlICFkZWZhdWx0O1xuJG5iLWVuYWJsZWQtdGhlbWVzOiAoKTtcbiRuYi10aGVtZXM6ICgpO1xuJG5iLXRoZW1lLXByb2Nlc3MtbW9kZTogbnVsbDtcbiRuYi10aGVtZS1uYW1lOiAnZGVmYXVsdCc7XG4kbmItdGhlbWU6ICgpO1xuJG5iLXByb2Nlc3NlZC10aGVtZTogKCk7XG4kbmItdGhlbWUtZXhwb3J0LW1vZGU6IGZhbHNlICFkZWZhdWx0O1xuJG5iLXRoZW1lcy1leHBvcnQ6ICgpO1xuJG5iLWN1c3RvbS1zdGF0dXNlczogKCkgIWRlZmF1bHQ7XG5cbi8vIHB1YmxpYyB2YXJpYWJsZXNcbiRuYi1lbmFibGUtY3NzLWN1c3RvbS1wcm9wZXJ0aWVzOiBmYWxzZSAhZ2xvYmFsICFkZWZhdWx0O1xuJG5iLWVuYWJsZWQtdGhlbWVzOiAoKSAhZ2xvYmFsO1xuJG5iLXRoZW1lczogKCkgIWdsb2JhbDtcbiRuYi1jdXN0b20tc3RhdHVzZXM6ICgpICFnbG9iYWwgIWRlZmF1bHQ7XG5cbi8vIHByaXZhdGUgdmFyaWFibGVzXG4kbmItdGhlbWUtcHJvY2Vzcy1tb2RlOiAnbGF6eS1wcm9jZXNzJyAhZ2xvYmFsO1xuJG5iLXRoZW1lLW5hbWU6IG51bGwgIWdsb2JhbDtcbiRuYi10aGVtZTogKCkgIWdsb2JhbDtcbiRuYi1wcm9jZXNzZWQtdGhlbWU6ICgpICFnbG9iYWw7XG4kbmItdGhlbWUtZXhwb3J0LW1vZGU6IGZhbHNlICFnbG9iYWwgIWRlZmF1bHQ7XG4kbmItdGhlbWVzLWV4cG9ydDogKCkgIWdsb2JhbDtcblxuQGltcG9ydCAnY29yZS9taXhpbnMnO1xuQGltcG9ydCAnY29yZS9mdW5jdGlvbnMnO1xuQGltcG9ydCAnY29yZS92YXJpYW50cyc7XG5AaW1wb3J0ICdjb3JlL3RoZW1pbmcvcmVnaXN0ZXInO1xuQGltcG9ydCAnY29yZS90aGVtaW5nL2luc3RhbGwnO1xuQGltcG9ydCAnY29yZS90aGVtaW5nL2dldC12YWx1ZSc7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBtaXhpbiBuYi1zY3JvbGxiYXJzKCRmZywgJGJnLCAkc2l6ZSwgJGJvcmRlci1yYWRpdXM6ICRzaXplIC8gMikge1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6ICRzaXplO1xuICAgIGhlaWdodDogJHNpemU7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogJGZnO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAkYmc7XG4gIH1cblxuICAvLyBUT0RPOiByZW1vdmVcbiAgLy8gRm9yIEludGVybmV0IEV4cGxvcmVyXG4gIHNjcm9sbGJhci1mYWNlLWNvbG9yOiAkZmc7XG4gIHNjcm9sbGJhci10cmFjay1jb2xvcjogJGJnO1xufVxuXG5AbWl4aW4gbmItaGVhZGluZ3MoJGZyb206IDEsICR0bzogNikge1xuICBAZm9yICRpIGZyb20gJGZyb20gdGhyb3VnaCAkdG8ge1xuICAgIGgjeyRpfSB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBuYi1vdXRsaW5lKCRvdXRsaW5lLXdpZHRoLCAkb3V0bGluZS1jb2xvciwgJGluc2V0LXNoYWRvdy1sZW5ndGg6IDApIHtcbiAgJG91dHNldC1zaGFkb3c6IDAgMCAwICRvdXRsaW5lLXdpZHRoICRvdXRsaW5lLWNvbG9yO1xuICBib3gtc2hhZG93OiAkb3V0c2V0LXNoYWRvdztcblxuICBAaWYgKCRpbnNldC1zaGFkb3ctbGVuZ3RoICE9IDApIHtcbiAgICAmOm5vdCg6aG92ZXIpOm5vdCg6YWN0aXZlKSB7XG4gICAgICAkaW5zZXQtc2hhZG93OiBpbnNldCAkaW5zZXQtc2hhZG93LWxlbmd0aCAkb3V0bGluZS1jb2xvcjtcbiAgICAgIGJveC1zaGFkb3c6ICRvdXRzZXQtc2hhZG93LCAkaW5zZXQtc2hhZG93O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gaG92ZXItZm9jdXMtYWN0aXZlIHtcbiAgJjpmb2N1cyxcbiAgJjphY3RpdmUsXG4gICY6aG92ZXIge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBjZW50ZXItaG9yaXpvbnRhbC1hYnNvbHV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gIGxlZnQ6IDUwJTtcbn1cblxuQG1peGluIGluc3RhbGwtdGh1bWIoKSB7XG4gICR0aHVtYi1zZWxlY3RvcnM6IChcbiAgICAnOjotd2Via2l0LXNsaWRlci10aHVtYidcbiAgICAnOjotbW96LXJhbmdlLXRodW1iJ1xuICAgICc6Oi1tcy10aHVtYidcbiAgKTtcblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHRodW1iLXNlbGVjdG9ycyB7XG4gICAgJiN7JHNlbGVjdG9yfSB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGluc3RhbGwtdHJhY2soKSB7XG4gICR0aHVtYi1zZWxlY3RvcnM6IChcbiAgICAnOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjaydcbiAgICAnOjotbW96LXJhbmdlLXRyYWNrJ1xuICAgICc6Oi1tcy10cmFjaydcbiAgKTtcblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHRodW1iLXNlbGVjdG9ycyB7XG4gICAgJiN7JHNlbGVjdG9yfSB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGluc3RhbGwtcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udC1zaXplLCAkb3BhY2l0eTogMSkge1xuICAkcGxhY2Vob2xkZXItc2VsZWN0b3JzOiAoXG4gICAgJzo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcidcbiAgICAnOjotbW96LXBsYWNlaG9sZGVyJ1xuICAgICc6LW1vei1wbGFjZWhvbGRlcidcbiAgICAnOi1tcy1pbnB1dC1wbGFjZWhvbGRlcidcbiAgKTtcblxuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgQGluY2x1ZGUgcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udC1zaXplLCAkb3BhY2l0eSk7XG4gIH1cblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHBsYWNlaG9sZGVyLXNlbGVjdG9ycyB7XG4gICAgJiN7JHNlbGVjdG9yfSB7XG4gICAgICBAaW5jbHVkZSBwbGFjZWhvbGRlcigkY29sb3IsICRmb250LXNpemUsICRvcGFjaXR5KTtcbiAgICB9XG5cbiAgICAmOmZvY3VzI3skc2VsZWN0b3J9IHtcbiAgICAgIEBpbmNsdWRlIHBsYWNlaG9sZGVyLWZvY3VzKCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlcigkY29sb3IsICRmb250LXNpemUsICRvcGFjaXR5KSB7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgb3BhY2l0eTogJG9wYWNpdHk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIHBsYWNlaG9sZGVyLWZvY3VzKCkge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbn1cblxuQG1peGluIG5iLWNvbXBvbmVudC1hbmltYXRpb24oJHByb3BlcnRpZXMuLi4pIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xNXM7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6ICRwcm9wZXJ0aWVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbn1cblxuQG1peGluIGFuaW1hdGlvbigkYW5pbWF0ZS4uLikge1xuICAkbWF4OiBsZW5ndGgoJGFuaW1hdGUpO1xuICAkYW5pbWF0aW9uczogJyc7XG5cbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkbWF4IHtcbiAgICAkYW5pbWF0aW9uczogI3skYW5pbWF0aW9ucyArIG50aCgkYW5pbWF0ZSwgJGkpfTtcblxuICAgIEBpZiAkaSA8ICRtYXgge1xuICAgICAgJGFuaW1hdGlvbnM6ICN7JGFuaW1hdGlvbnMgKyAnLCAnfTtcbiAgICB9XG4gIH1cbiAgLXdlYmtpdC1hbmltYXRpb246ICRhbmltYXRpb25zO1xuICAtbW96LWFuaW1hdGlvbjogICAgJGFuaW1hdGlvbnM7XG4gIC1vLWFuaW1hdGlvbjogICAgICAkYW5pbWF0aW9ucztcbiAgYW5pbWF0aW9uOiAgICAgICAgICRhbmltYXRpb25zO1xufVxuXG5AbWl4aW4ga2V5ZnJhbWVzKCRhbmltYXRpb25OYW1lKSB7XG4gIEAtd2Via2l0LWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBAa2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgbWl4aW4gZ2VuZXJhdGVzIGtleWZhbWVzLlxuICogQmVjYXVzZSBvZiBhbGwga2V5ZnJhbWVzIGNhbid0IGJlIHNjb3BlZCxcbiAqIHdlIG5lZWQgdG8gcHV0cyB1bmlxdWUgbmFtZSBpbiBlYWNoIGJ0bi1wdWxzZSBjYWxsLlxuICovXG5AbWl4aW4gYnRuLXB1bHNlKCRuYW1lLCAkY29sb3IpIHtcbiAgJi5idG4tcHVsc2Uge1xuICAgIEBpbmNsdWRlIGFuaW1hdGlvbihidG4tI3skbmFtZX0tcHVsc2UgMS41cyBpbmZpbml0ZSk7XG4gIH1cblxuICBAaW5jbHVkZSBrZXlmcmFtZXMoYnRuLSN7JG5hbWV9LXB1bHNlKSB7XG4gICAgMCUge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIG9wYWNpdHk6IG5iLXRoZW1lKGJ0bi1kaXNhYmxlZC1vcGFjaXR5KTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxcmVtIDAgJGNvbG9yO1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBvcGFjaXR5OiBuYi10aGVtZShidG4tZGlzYWJsZWQtb3BhY2l0eSk7XG4gICAgfVxuICB9XG59XG5cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cblxuQG1peGluIF9wcmVwZW5kLXdpdGgtc2VsZWN0b3IoJHNlbGVjdG9yLCAkcHJvcDogbnVsbCwgJHZhbHVlOiBudWxsKSB7XG4gICN7JHNlbGVjdG9yfSAmIHtcbiAgICBAaWYgJHByb3AgIT0gbnVsbCB7XG4gICAgICAjeyRwcm9wfTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1sdHIoJHByb3A6IG51bGwsICR2YWx1ZTogbnVsbCkge1xuICBAaW5jbHVkZSBfcHJlcGVuZC13aXRoLXNlbGVjdG9yKCdbZGlyPWx0cl0nLCAkcHJvcCwgJHZhbHVlKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG5iLXJ0bCgkcHJvcDogbnVsbCwgJHZhbHVlOiBudWxsKSB7XG4gIEBpbmNsdWRlIF9wcmVwZW5kLXdpdGgtc2VsZWN0b3IoJ1tkaXI9cnRsXScsICRwcm9wLCAkdmFsdWUpIHtcbiAgICBAY29udGVudDtcbiAgfTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuLy8vIFNsaWdodGx5IGxpZ2h0ZW4gYSBjb2xvclxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIC0gY29sb3IgdG8gdGludFxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkcGVyY2VudGFnZSAtIHBlcmNlbnRhZ2Ugb2YgYCRjb2xvcmAgaW4gcmV0dXJuZWQgY29sb3Jcbi8vLyBAcmV0dXJuIHtDb2xvcn1cbkBmdW5jdGlvbiB0aW50KCRjb2xvciwgJHBlcmNlbnRhZ2UpIHtcbiAgQHJldHVybiBtaXgod2hpdGUsICRjb2xvciwgJHBlcmNlbnRhZ2UpO1xufVxuXG4vLy8gU2xpZ2h0bHkgZGFya2VuIGEgY29sb3Jcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvciAtIGNvbG9yIHRvIHNoYWRlXG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICRwZXJjZW50YWdlIC0gcGVyY2VudGFnZSBvZiBgJGNvbG9yYCBpbiByZXR1cm5lZCBjb2xvclxuLy8vIEByZXR1cm4ge0NvbG9yfVxuQGZ1bmN0aW9uIHNoYWRlKCRjb2xvciwgJHBlcmNlbnRhZ2UpIHtcbiAgQHJldHVybiBtaXgoYmxhY2ssICRjb2xvciwgJHBlcmNlbnRhZ2UpO1xufVxuXG5AZnVuY3Rpb24gbWFwLXNldCgkbWFwLCAka2V5LCAkdmFsdWU6IG51bGwpIHtcbiAgJG5ldzogKCRrZXk6ICR2YWx1ZSk7XG4gIEByZXR1cm4gbWFwLW1lcmdlKCRtYXAsICRuZXcpO1xufVxuXG5AZnVuY3Rpb24gbmItdGhlbWUtdmFyLW5lZ2F0aXZlKCR2YWx1ZSkge1xuICBAaWYgKCRuYi1lbmFibGUtY3NzLWN1c3RvbS1wcm9wZXJ0aWVzKSB7XG4gICAgQHJldHVybiBjYWxjKCN7JHZhbHVlfSAqIC0xKTtcbiAgfSBAZWxzZSB7XG4gICAgQHJldHVybiAtJHZhbHVlO1xuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBmdW5jdGlvbiBuYi1nZXQtY29yZS1zdGF0dXNlcygpIHtcbiAgQHJldHVybiAnYmFzaWMnLCAncHJpbWFyeScsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJywgJ2luZm8nLCAnY29udHJvbCc7XG59XG5cbkBmdW5jdGlvbiBuYi1nZXQtc3RhdHVzZXMoKSB7XG4gIEByZXR1cm4gam9pbihuYi1nZXQtY29yZS1zdGF0dXNlcygpLCAkbmItY3VzdG9tLXN0YXR1c2VzKTtcbn1cblxuQGZ1bmN0aW9uIG5iLWdldC1zaXplcygpIHtcbiAgQHJldHVybiAndGlueScsICdzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnLCAnZ2lhbnQnO1xufVxuXG5AZnVuY3Rpb24gbmItZ2V0LXNoYXBlcygpIHtcbiAgQHJldHVybiAncmVjdGFuZ2xlJywgJ3NlbWktcm91bmQnLCAncm91bmQnO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG4kZXZhLW1hcHBpbmc6IChcblxuICAvKiBDb21wb25lbnRzIG1hcHBpbmdzIC0gbWFwcyB0aGVtZSB2YXJpYWJsZXMgb250byBjb21wb25lbnQgdmFyaWFibGVzICovXG5cbiAgbGluay10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIGxpbmstdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUsXG4gIGxpbmstdGV4dC1mb2N1cy1jb2xvcjogdGV4dC1wcmltYXJ5LWZvY3VzLWNvbG9yLFxuICBsaW5rLXRleHQtaG92ZXItY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcixcblxuICBjYXJkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgY2FyZC10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjYXJkLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBjYXJkLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGNhcmQtdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGNhcmQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGNhcmQtYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW0sXG4gIGNhcmQtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgY2FyZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBjYXJkLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIGNhcmQtcGFkZGluZzogMXJlbSAxLjVyZW0sXG4gIGNhcmQtc2hhZG93OiBub25lLFxuICBjYXJkLWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIGNhcmQtZGl2aWRlci1zdHlsZTogZGl2aWRlci1zdHlsZSxcbiAgY2FyZC1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuXG4gIGNhcmQtaGVhZGVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNhcmQtaGVhZGVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG4gIGNhcmQtaGVhZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgY2FyZC1oZWFkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgY2FyZC1oZWFkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcblxuICBjYXJkLWhlYWRlci1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGNhcmQtaGVhZGVyLWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNhcmQtaGVhZGVyLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBjYXJkLWhlYWRlci1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2FyZC1oZWFkZXItaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGNhcmQtaGVhZGVyLWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjYXJkLWhlYWRlci1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgY2FyZC1oZWFkZXItc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNhcmQtaGVhZGVyLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBjYXJkLWhlYWRlci13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2FyZC1oZWFkZXItZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBjYXJkLWhlYWRlci1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjYXJkLWhlYWRlci1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgY2FyZC1oZWFkZXItY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG5cbiAgY2FyZC1oZWlnaHQtdGlueTogMTMuNXJlbSxcbiAgY2FyZC1oZWlnaHQtc21hbGw6IDIxLjE4NzVyZW0sXG4gIGNhcmQtaGVpZ2h0LW1lZGl1bTogMjguODc1cmVtLFxuICBjYXJkLWhlaWdodC1sYXJnZTogMzYuNTYyNXJlbSxcbiAgY2FyZC1oZWlnaHQtZ2lhbnQ6IDQ0LjI1cmVtLFxuICBjYXJkLW1hcmdpbi1ib3R0b206IDEuODc1cmVtLFxuXG4gIGNhcmQtc2Nyb2xsYmFyLWNvbG9yOiBzY3JvbGxiYXItY29sb3IsXG4gIGNhcmQtc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6IHNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yLFxuICBjYXJkLXNjcm9sbGJhci13aWR0aDogc2Nyb2xsYmFyLXdpZHRoLFxuXG4gIGhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGhlYWRlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBoZWFkZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIGhlYWRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBoZWFkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGhlYWRlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgaGVhZGVyLWhlaWdodDogNC43NXJlbSxcbiAgaGVhZGVyLXBhZGRpbmc6IDEuMjVyZW0sXG4gIGhlYWRlci1zaGFkb3c6IHNoYWRvdyxcblxuICBmb290ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBmb290ZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgZm9vdGVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBmb290ZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgZm9vdGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBmb290ZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGZvb3Rlci10ZXh0LWhpZ2hsaWdodC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgZm9vdGVyLWhlaWdodDogNC43MjVyZW0sXG4gIGZvb3Rlci1wYWRkaW5nOiAxLjI1cmVtLFxuICBmb290ZXItZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgZm9vdGVyLWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsXG4gIGZvb3Rlci1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuICBmb290ZXItc2hhZG93OiBzaGFkb3csXG5cbiAgbGF5b3V0LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgbGF5b3V0LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGxheW91dC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgbGF5b3V0LXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGxheW91dC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgbGF5b3V0LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBsYXlvdXQtbWluLWhlaWdodDogMTAwdmgsXG4gIGxheW91dC1jb250ZW50LXdpZHRoOiA5MDBweCxcbiAgbGF5b3V0LXdpbmRvdy1tb2RlLW1pbi13aWR0aDogMzAwcHgsXG4gIGxheW91dC13aW5kb3ctbW9kZS1tYXgtd2lkdGg6IDE5MjBweCxcbiAgbGF5b3V0LXdpbmRvdy1tb2RlLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgbGF5b3V0LXdpbmRvdy1tb2RlLXBhZGRpbmctdG9wOiA0Ljc1cmVtLFxuICBsYXlvdXQtd2luZG93LXNoYWRvdzogc2hhZG93LFxuICBsYXlvdXQtcGFkZGluZzogMi4yNXJlbSAyLjI1cmVtIDAuNzVyZW0sXG4gIGxheW91dC1tZWRpdW0tcGFkZGluZzogMS41cmVtIDEuNXJlbSAwLjVyZW0sXG4gIGxheW91dC1zbWFsbC1wYWRkaW5nOiAxcmVtIDFyZW0gMCxcbiAgbGF5b3V0LXNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yOiBzY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcixcbiAgbGF5b3V0LXNjcm9sbGJhci1jb2xvcjogc2Nyb2xsYmFyLWNvbG9yLFxuICBsYXlvdXQtc2Nyb2xsYmFyLXdpZHRoOiBzY3JvbGxiYXItd2lkdGgsXG5cbiAgc2lkZWJhci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHNpZGViYXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgc2lkZWJhci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgc2lkZWJhci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBzaWRlYmFyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzaWRlYmFyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBzaWRlYmFyLWhlaWdodDogMTAwdmgsXG4gIHNpZGViYXItd2lkdGg6IDE2cmVtLFxuICBzaWRlYmFyLXdpZHRoLWNvbXBhY3Q6IDMuNXJlbSxcbiAgc2lkZWJhci1wYWRkaW5nOiAxLjI1cmVtLFxuICBzaWRlYmFyLWhlYWRlci1oZWlnaHQ6IDMuNXJlbSxcbiAgc2lkZWJhci1mb290ZXItaGVpZ2h0OiAzLjVyZW0sXG4gIHNpZGViYXItc2hhZG93OiBzaGFkb3csXG4gIHNpZGViYXItbWVudS1pdGVtLWhpZ2hsaWdodC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzaWRlYmFyLXNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yOiBzY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcixcbiAgc2lkZWJhci1zY3JvbGxiYXItY29sb3I6IHNjcm9sbGJhci1jb2xvcixcbiAgc2lkZWJhci1zY3JvbGxiYXItd2lkdGg6IHNjcm9sbGJhci13aWR0aCxcblxuICBtZW51LWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICBtZW51LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIG1lbnUtdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtZmFtaWx5LFxuICBtZW51LXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLFxuICBtZW51LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodCxcbiAgbWVudS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG5cbiAgbWVudS1ncm91cC10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG5cbiAgbWVudS1pdGVtLWJvcmRlci1yYWRpdXM6IDAsXG4gIG1lbnUtaXRlbS1wYWRkaW5nOiAwLjc1cmVtIDFyZW0sXG5cbiAgbWVudS1pdGVtLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IG1lbnUtYmFja2dyb3VuZC1jb2xvcixcbiAgbWVudS1pdGVtLWhvdmVyLWN1cnNvcjogcG9pbnRlcixcbiAgbWVudS1pdGVtLWhvdmVyLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcixcbiAgbWVudS1pdGVtLWljb24taG92ZXItY29sb3I6IG1lbnUtaXRlbS1ob3Zlci10ZXh0LWNvbG9yLFxuXG4gIG1lbnUtaXRlbS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogbWVudS1iYWNrZ3JvdW5kLWNvbG9yLFxuICBtZW51LWl0ZW0tYWN0aXZlLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgbWVudS1pdGVtLWljb24tYWN0aXZlLWNvbG9yOiBtZW51LWl0ZW0tYWN0aXZlLXRleHQtY29sb3IsXG5cbiAgbWVudS1pdGVtLWljb24tY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgbWVudS1pdGVtLWljb24tbWFyZ2luOiAwIDAuNXJlbSAwIDAsXG4gIG1lbnUtaXRlbS1pY29uLXdpZHRoOiAxLjI1cmVtLFxuXG4gIG1lbnUtaXRlbS1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICBtZW51LWl0ZW0tZGl2aWRlci1zdHlsZTogZGl2aWRlci1zdHlsZSxcbiAgbWVudS1pdGVtLWRpdmlkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG5cbiAgbWVudS1zdWJtZW51LWJhY2tncm91bmQtY29sb3I6IG1lbnUtYmFja2dyb3VuZC1jb2xvcixcbiAgbWVudS1zdWJtZW51LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIG1lbnUtc3VibWVudS1tYXJnaW46IDAsXG4gIG1lbnUtc3VibWVudS1wYWRkaW5nOiAwIDEuMjVyZW0sXG5cbiAgbWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLWNvbG9yOiBtZW51LXN1Ym1lbnUtYmFja2dyb3VuZC1jb2xvcixcbiAgbWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgbWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLXdpZHRoOiAwLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItcmFkaXVzOiAwLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1wYWRkaW5nOiBtZW51LWl0ZW0tcGFkZGluZyxcblxuICBtZW51LXN1Ym1lbnUtaXRlbS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBtZW51LWJhY2tncm91bmQtY29sb3IsXG4gIG1lbnUtc3VibWVudS1pdGVtLWhvdmVyLWJvcmRlci1jb2xvcjogbWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1ob3Zlci10ZXh0LWNvbG9yOiBtZW51LWl0ZW0taG92ZXItdGV4dC1jb2xvcixcbiAgbWVudS1zdWJtZW51LWl0ZW0taWNvbi1ob3Zlci1jb2xvcjogbWVudS1pdGVtLWljb24taG92ZXItY29sb3IsXG5cbiAgbWVudS1zdWJtZW51LWl0ZW0tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IG1lbnUtYmFja2dyb3VuZC1jb2xvcixcbiAgbWVudS1zdWJtZW51LWl0ZW0tYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBtZW51LXN1Ym1lbnUtaXRlbS1hY3RpdmUtdGV4dC1jb2xvcjogbWVudS1pdGVtLWFjdGl2ZS10ZXh0LWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1pY29uLWFjdGl2ZS1jb2xvcjogbWVudS1pdGVtLWljb24tYWN0aXZlLWNvbG9yLFxuXG4gIG1lbnUtc3VibWVudS1pdGVtLWFjdGl2ZS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBtZW51LXN1Ym1lbnUtaXRlbS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1hY3RpdmUtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1hY3RpdmUtaG92ZXItdGV4dC1jb2xvcjogbWVudS1zdWJtZW51LWl0ZW0taG92ZXItdGV4dC1jb2xvcixcbiAgbWVudS1zdWJtZW51LWl0ZW0taWNvbi1hY3RpdmUtaG92ZXItY29sb3I6IG1lbnUtc3VibWVudS1pdGVtLWljb24taG92ZXItY29sb3IsXG5cbiAgdGFic2V0LWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICB0YWJzZXQtYm9yZGVyLXJhZGl1czogMCxcbiAgdGFic2V0LXNoYWRvdzogbm9uZSxcblxuICB0YWJzZXQtdGFiLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICB0YWJzZXQtdGFiLXBhZGRpbmc6IDFyZW0gMnJlbSxcbiAgdGFic2V0LXRhYi10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHRhYnNldC10YWItdGV4dC1mb250LWZhbWlseTogdGV4dC1idXR0b24tZm9udC1mYW1pbHksXG4gIHRhYnNldC10YWItdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLW1lZGl1bS1mb250LXNpemUsXG4gIHRhYnNldC10YWItdGV4dC1mb250LXdlaWdodDogdGV4dC1idXR0b24tZm9udC13ZWlnaHQsXG4gIHRhYnNldC10YWItdGV4dC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tbWVkaXVtLWxpbmUtaGVpZ2h0LFxuICB0YWJzZXQtdGFiLXRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UsXG4gIHRhYnNldC10YWItdW5kZXJsaW5lLXdpZHRoOiAwLjI1cmVtLFxuICB0YWJzZXQtdGFiLXVuZGVybGluZS1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRhYnNldC10YWItYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICB0YWJzZXQtdGFiLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIHRhYnNldC10YWItYWN0aXZlLXVuZGVybGluZS1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICB0YWJzZXQtdGFiLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICB0YWJzZXQtdGFiLWZvY3VzLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1mb2N1cy1jb2xvcixcbiAgdGFic2V0LXRhYi1mb2N1cy11bmRlcmxpbmUtY29sb3I6IHRleHQtcHJpbWFyeS1mb2N1cy1jb2xvcixcbiAgdGFic2V0LXRhYi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdGFic2V0LXRhYi1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktaG92ZXItY29sb3IsXG4gIHRhYnNldC10YWItaG92ZXItdW5kZXJsaW5lLWNvbG9yOiB0ZXh0LXByaW1hcnktaG92ZXItY29sb3IsXG4gIHRhYnNldC10YWItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRhYnNldC10YWItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgdGFic2V0LXRhYi1kaXNhYmxlZC11bmRlcmxpbmUtY29sb3I6IHRyYW5zcGFyZW50LFxuICB0YWJzZXQtdGFi4oCTYmFkZ2UtZG90LW1vZGUtaG9yaXpvbnRhbC1vZmZzZXQ6IDAuNzVyZW0sXG4gIHRhYnNldC10YWItYmFkZ2UtZG90LW1vZGUtcGFkZGluZzogMC4yNXJlbSxcblxuICB0YWJzZXQtZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgdGFic2V0LWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsXG4gIHRhYnNldC1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuXG4gIHRhYnNldC1jb250ZW50LWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICB0YWJzZXQtY29udGVudC1wYWRkaW5nOiAxcmVtIDJyZW0sXG4gIHRhYnNldC1jb250ZW50LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRhYnNldC1jb250ZW50LXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICB0YWJzZXQtY29udGVudC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICB0YWJzZXQtY29udGVudC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgdGFic2V0LWNvbnRlbnQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG5cbiAgdGFic2V0LXNjcm9sbGJhci1jb2xvcjogc2Nyb2xsYmFyLWNvbG9yLFxuICB0YWJzZXQtc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6IHNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yLFxuICB0YWJzZXQtc2Nyb2xsYmFyLXdpZHRoOiBzY3JvbGxiYXItd2lkdGgsXG4gIHRhYnNldC10YWItdGV4dC1oaWRlLWJyZWFrcG9pbnQ6IDM2cmVtLFxuXG4gIHJvdXRlLXRhYnNldC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcm91dGUtdGFic2V0LWJvcmRlci1yYWRpdXM6IDAsXG4gIHJvdXRlLXRhYnNldC1zaGFkb3c6IG5vbmUsXG5cbiAgcm91dGUtdGFic2V0LXRhYi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcm91dGUtdGFic2V0LXRhYi1wYWRkaW5nOiAxcmVtIDJyZW0sXG4gIHJvdXRlLXRhYnNldC10YWItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICByb3V0ZS10YWJzZXQtdGFiLXRleHQtZm9udC1mYW1pbHk6IHRleHQtYnV0dG9uLWZvbnQtZmFtaWx5LFxuICByb3V0ZS10YWJzZXQtdGFiLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1tZWRpdW0tZm9udC1zaXplLFxuICByb3V0ZS10YWJzZXQtdGFiLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LFxuICByb3V0ZS10YWJzZXQtdGFiLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLW1lZGl1bS1saW5lLWhlaWdodCxcbiAgcm91dGUtdGFic2V0LXRhYi10ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlLFxuICByb3V0ZS10YWJzZXQtdGFiLXVuZGVybGluZS13aWR0aDogMC4yNXJlbSxcbiAgcm91dGUtdGFic2V0LXRhYi11bmRlcmxpbmUtY29sb3I6IHRyYW5zcGFyZW50LFxuXG4gIHJvdXRlLXRhYnNldC10YWItYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByb3V0ZS10YWJzZXQtdGFiLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIHJvdXRlLXRhYnNldC10YWItYWN0aXZlLXVuZGVybGluZS1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuXG4gIHJvdXRlLXRhYnNldC10YWItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJvdXRlLXRhYnNldC10YWItZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWZvY3VzLWNvbG9yLFxuICByb3V0ZS10YWJzZXQtdGFiLWZvY3VzLXVuZGVybGluZS1jb2xvcjogdGV4dC1wcmltYXJ5LWZvY3VzLWNvbG9yLFxuXG4gIHJvdXRlLXRhYnNldC10YWItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJvdXRlLXRhYnNldC10YWItaG92ZXItdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWhvdmVyLWNvbG9yLFxuICByb3V0ZS10YWJzZXQtdGFiLWhvdmVyLXVuZGVybGluZS1jb2xvcjogdGV4dC1wcmltYXJ5LWhvdmVyLWNvbG9yLFxuXG4gIHJvdXRlLXRhYnNldC10YWItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJvdXRlLXRhYnNldC10YWItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgcm91dGUtdGFic2V0LXRhYi1kaXNhYmxlZC11bmRlcmxpbmUtY29sb3I6IHRyYW5zcGFyZW50LFxuXG4gIHJvdXRlLXRhYnNldC1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICByb3V0ZS10YWJzZXQtZGl2aWRlci1zdHlsZTogZGl2aWRlci1zdHlsZSxcbiAgcm91dGUtdGFic2V0LWRpdmlkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG5cbiAgcm91dGUtdGFic2V0LXNjcm9sbGJhci1jb2xvcjogc2Nyb2xsYmFyLWNvbG9yLFxuICByb3V0ZS10YWJzZXQtc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6IHNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yLFxuICByb3V0ZS10YWJzZXQtc2Nyb2xsYmFyLXdpZHRoOiBzY3JvbGxiYXItd2lkdGgsXG4gIHJvdXRlLXRhYnNldC10YWItdGV4dC1oaWRlLWJyZWFrcG9pbnQ6IDM2cmVtLFxuXG4gIHVzZXItcGljdHVyZS1ib3gtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHVzZXItcGljdHVyZS1ib3gtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMyxcbiAgdXNlci1waWN0dXJlLWJveC1ib3JkZXItd2lkdGg6IDFweCxcbiAgdXNlci1pbml0aWFscy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB1c2VyLWluaXRpYWxzLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICB1c2VyLWluaXRpYWxzLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICB1c2VyLW5hbWUtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdXNlci1uYW1lLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICB1c2VyLW5hbWUtdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHVzZXItdGl0bGUtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdXNlci10aXRsZS10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC0yLWZvbnQtZmFtaWx5LFxuICB1c2VyLXRpdGxlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLTItZm9udC13ZWlnaHQsXG5cbiAgdXNlci1yZWN0YW5nbGUtYm9yZGVyLXJhZGl1czogMC41cmVtLFxuICB1c2VyLXNlbWktcm91bmQtYm9yZGVyLXJhZGl1czogMC43NXJlbSxcbiAgdXNlci1yb3VuZC1ib3JkZXItcmFkaXVzOiA1MCUsXG5cbiAgdXNlci10aW55LWhlaWdodDogMS4yNXJlbSxcbiAgdXNlci10aW55LXdpZHRoOiAxLjI1cmVtLFxuICB1c2VyLXRpbnktaW5pdGlhbHMtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi1mb250LXNpemUsXG4gIHVzZXItdGlueS1pbml0aWFscy10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWNhcHRpb24tbGluZS1oZWlnaHQsXG4gIHVzZXItdGlueS1uYW1lLXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tZm9udC1zaXplLFxuICB1c2VyLXRpbnktbmFtZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWNhcHRpb24tbGluZS1oZWlnaHQsXG4gIHVzZXItdGlueS10aXRsZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1jYXB0aW9uLWZvbnQtc2l6ZSxcbiAgdXNlci10aW55LXRpdGxlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi1saW5lLWhlaWdodCxcblxuICB1c2VyLXNtYWxsLWhlaWdodDogMS41cmVtLFxuICB1c2VyLXNtYWxsLXdpZHRoOiAxLjVyZW0sXG4gIHVzZXItc21hbGwtaW5pdGlhbHMtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi1mb250LXNpemUsXG4gIHVzZXItc21hbGwtaW5pdGlhbHMtdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0LFxuICB1c2VyLXNtYWxsLW5hbWUtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi1mb250LXNpemUsXG4gIHVzZXItc21hbGwtbmFtZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWNhcHRpb24tbGluZS1oZWlnaHQsXG4gIHVzZXItc21hbGwtdGl0bGUtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi1mb250LXNpemUsXG4gIHVzZXItc21hbGwtdGl0bGUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0LFxuXG4gIHVzZXItbWVkaXVtLWhlaWdodDogMi41cmVtLFxuICB1c2VyLW1lZGl1bS13aWR0aDogMi41cmVtLFxuICB1c2VyLW1lZGl1bS1pbml0aWFscy10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICB1c2VyLW1lZGl1bS1pbml0aWFscy10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgdXNlci1tZWRpdW0tbmFtZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICB1c2VyLW1lZGl1bS1uYW1lLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICB1c2VyLW1lZGl1bS10aXRsZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1jYXB0aW9uLWZvbnQtc2l6ZSxcbiAgdXNlci1tZWRpdW0tdGl0bGUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0LFxuXG4gIHVzZXItbGFyZ2UtaGVpZ2h0OiAzLjI1cmVtLFxuICB1c2VyLWxhcmdlLXdpZHRoOiAzLjI1cmVtLFxuICB1c2VyLWxhcmdlLWluaXRpYWxzLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHVzZXItbGFyZ2UtaW5pdGlhbHMtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHVzZXItbGFyZ2UtbmFtZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICB1c2VyLWxhcmdlLW5hbWUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHVzZXItbGFyZ2UtdGl0bGUtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLTItZm9udC1zaXplLFxuICB1c2VyLWxhcmdlLXRpdGxlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLTItbGluZS1oZWlnaHQsXG5cbiAgdXNlci1naWFudC1oZWlnaHQ6IDRyZW0sXG4gIHVzZXItZ2lhbnQtd2lkdGg6IDRyZW0sXG4gIHVzZXItZ2lhbnQtaW5pdGlhbHMtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgdXNlci1naWFudC1pbml0aWFscy10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgdXNlci1naWFudC1uYW1lLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHVzZXItZ2lhbnQtbmFtZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgdXNlci1naWFudC10aXRsZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICB1c2VyLWdpYW50LXRpdGxlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuXG4gIHBvcG92ZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgcG9wb3Zlci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgcG9wb3Zlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBwb3BvdmVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBwb3BvdmVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBwb3BvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgcG9wb3Zlci1ib3JkZXItd2lkdGg6IDFweCxcbiAgcG9wb3Zlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBwb3BvdmVyLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIHBvcG92ZXItc2hhZG93OiBzaGFkb3csXG4gIHBvcG92ZXItYXJyb3ctc2l6ZTogMC42ODc1cmVtLFxuICBwb3BvdmVyLXBhZGRpbmc6IDAuNzVyZW0gMXJlbSxcblxuICBjb250ZXh0LW1lbnUtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBjb250ZXh0LW1lbnUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgY29udGV4dC1tZW51LWJvcmRlci1zdHlsZTogc29saWQsXG4gIGNvbnRleHQtbWVudS1ib3JkZXItd2lkdGg6IDAsXG4gIGNvbnRleHQtbWVudS1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBjb250ZXh0LW1lbnUtdGV4dC1hbGlnbjogY2VudGVyLFxuICBjb250ZXh0LW1lbnUtbWluLXdpZHRoOiAxMHJlbSxcbiAgY29udGV4dC1tZW51LW1heC13aWR0aDogMTVyZW0sXG4gIGNvbnRleHQtbWVudS1zaGFkb3c6IHNoYWRvdyxcblxuICBhY3Rpb25zLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICBhY3Rpb25zLWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIGFjdGlvbnMtZGl2aWRlci1zdHlsZTogZGl2aWRlci1zdHlsZSxcbiAgYWN0aW9ucy1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuICBhY3Rpb25zLWljb24tY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgYWN0aW9ucy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBhY3Rpb25zLXRleHQtZm9udC1mYW1pbHk6IHRleHQtYnV0dG9uLWZvbnQtZmFtaWx5LFxuICBhY3Rpb25zLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LFxuICBhY3Rpb25zLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLW1lZGl1bS1saW5lLWhlaWdodCxcblxuICBhY3Rpb25zLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGFjdGlvbnMtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBhY3Rpb25zLXRpbnktaGVpZ2h0OiAxcmVtLFxuICBhY3Rpb25zLXRpbnktaWNvbi1oZWlnaHQ6IGFjdGlvbnMtdGlueS1oZWlnaHQsXG4gIGFjdGlvbnMtdGlueS1wYWRkaW5nOiAwIDEuMjVyZW0sXG4gIGFjdGlvbnMtdGlueS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tdGlueS1mb250LXNpemUsXG4gIGFjdGlvbnMtc21hbGwtaGVpZ2h0OiAxLjVyZW0sXG4gIGFjdGlvbnMtc21hbGwtaWNvbi1oZWlnaHQ6IGFjdGlvbnMtc21hbGwtaGVpZ2h0LFxuICBhY3Rpb25zLXNtYWxsLXBhZGRpbmc6IDAgMS4yNXJlbSxcbiAgYWN0aW9ucy1zbWFsbC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tc21hbGwtZm9udC1zaXplLFxuICBhY3Rpb25zLW1lZGl1bS1oZWlnaHQ6IDIuMjVyZW0sXG4gIGFjdGlvbnMtbWVkaXVtLWljb24taGVpZ2h0OiBhY3Rpb25zLW1lZGl1bS1oZWlnaHQsXG4gIGFjdGlvbnMtbWVkaXVtLXBhZGRpbmc6IDAgMS4yNXJlbSxcbiAgYWN0aW9ucy1tZWRpdW0tdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLW1lZGl1bS1mb250LXNpemUsXG4gIGFjdGlvbnMtbGFyZ2UtaGVpZ2h0OiAzLjVyZW0sXG4gIGFjdGlvbnMtbGFyZ2UtaWNvbi1oZWlnaHQ6IGFjdGlvbnMtbGFyZ2UtaGVpZ2h0LFxuICBhY3Rpb25zLWxhcmdlLXBhZGRpbmc6IDAgMS4yNXJlbSxcbiAgYWN0aW9ucy1sYXJnZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tbGFyZ2UtZm9udC1zaXplLFxuICBhY3Rpb25zLWdpYW50LWhlaWdodDogNHJlbSxcbiAgYWN0aW9ucy1naWFudC1pY29uLWhlaWdodDogYWN0aW9ucy1naWFudC1oZWlnaHQsXG4gIGFjdGlvbnMtZ2lhbnQtcGFkZGluZzogMCAxLjI1cmVtLFxuICBhY3Rpb25zLWdpYW50LXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1naWFudC1mb250LXNpemUsXG5cbiAgc2VhcmNoLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgc2VhcmNoLWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIHNlYXJjaC1kaXZpZGVyLXN0eWxlOiBkaXZpZGVyLXN0eWxlLFxuICBzZWFyY2gtZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcbiAgc2VhcmNoLWV4dHJhLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc2VhcmNoLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHNlYXJjaC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWhlYWRpbmctMS1mb250LWZhbWlseSxcbiAgc2VhcmNoLXRleHQtZm9udC1zaXplOiB0ZXh0LWhlYWRpbmctMS1mb250LXNpemUsXG4gIHNlYXJjaC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWhlYWRpbmctMS1mb250LXdlaWdodCxcbiAgc2VhcmNoLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtaGVhZGluZy0xLWxpbmUtaGVpZ2h0LFxuICBzZWFyY2gtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWFyY2gtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlYXJjaC1pbmZvLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG4gIHNlYXJjaC1pbmZvLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgc2VhcmNoLWluZm8tdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgc2VhcmNoLWluZm8tdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcblxuICBzbWFydC10YWJsZS1oZWFkZXItZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBzbWFydC10YWJsZS1oZWFkZXItZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1mZzogdGV4dC1iYXNpYy1jb2xvcixcbiAgc21hcnQtdGFibGUtaGVhZGVyLWJnOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG5cbiAgc21hcnQtdGFibGUtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBzbWFydC10YWJsZS1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgc21hcnQtdGFibGUtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzbWFydC10YWJsZS1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHNtYXJ0LXRhYmxlLWZnOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzbWFydC10YWJsZS1iZzogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuXG4gIHNtYXJ0LXRhYmxlLWJnLWV2ZW46IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc21hcnQtdGFibGUtZmctc2Vjb25kYXJ5OiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzbWFydC10YWJsZS1iZy1hY3RpdmU6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgc21hcnQtdGFibGUtcGFkZGluZzogMC44NzVyZW0gMS4yNXJlbSxcbiAgc21hcnQtdGFibGUtZmlsdGVyLXBhZGRpbmc6IDAuMzc1cmVtIDAuNXJlbSxcbiAgc21hcnQtdGFibGUtc2VwYXJhdG9yOiBkaXZpZGVyLWNvbG9yLFxuICBzbWFydC10YWJsZS1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuXG4gIHNtYXJ0LXRhYmxlLWFjdGlvbi1hZGQtZWRpdC1ob3Zlci10ZXh0LWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHNtYXJ0LXRhYmxlLWFjdGlvbi1jYW5jZWwtZGVsZXRlLWhvdmVyLXRleHQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuXG4gIHNtYXJ0LXRhYmxlLWFkZC1idXR0b24tYm9yZGVyLWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktYm9yZGVyLWNvbG9yLFxuICBzbWFydC10YWJsZS1hZGQtYnV0dG9uLWJhY2tncm91bmQtY29sb3I6IGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yLFxuICBzbWFydC10YWJsZS1hZGQtYnV0dG9uLXRleHQtY29sb3I6IGJ1dHRvbi1maWxsZWQtcHJpbWFyeS10ZXh0LWNvbG9yLFxuICBzbWFydC10YWJsZS1hZGQtYnV0dG9uLWZvY3VzLWJvcmRlci1jb2xvcjogYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcixcbiAgc21hcnQtdGFibGUtYWRkLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcixcbiAgc21hcnQtdGFibGUtYWRkLWJ1dHRvbi1ob3Zlci1ib3JkZXItY29sb3I6IGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3IsXG4gIHNtYXJ0LXRhYmxlLWFkZC1idXR0b24tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcixcbiAgc21hcnQtdGFibGUtYWRkLWJ1dHRvbi1hY3RpdmUtYm9yZGVyLWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktYWN0aXZlLWJvcmRlci1jb2xvcixcblxuICBzbWFydC10YWJsZS1wYWdpbmctZm9udC1mYW1pbHk6IGJ1dHRvbi10ZXh0LWZvbnQtZmFtaWx5LFxuICBzbWFydC10YWJsZS1wYWdpbmctZm9udC1zaXplOiBidXR0b24tbWVkaXVtLXRleHQtZm9udC1zaXplLFxuICBzbWFydC10YWJsZS1wYWdpbmctbGluZS1oZWlnaHQ6IGJ1dHRvbi1tZWRpdW0tdGV4dC1saW5lLWhlaWdodCxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWJvcmRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgc21hcnQtdGFibGUtcGFnaW5nLWJvcmRlci13aWR0aDogZGl2aWRlci13aWR0aCxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWZnLWFjdGl2ZTogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzbWFydC10YWJsZS1wYWdpbmctYmctYWN0aXZlOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ob3ZlcjogdHJhbnNwYXJlbnQsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ob3Zlci1ib3JkZXItY29sb3I6IGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yLFxuICBzbWFydC10YWJsZS1wYWdpbmctaG92ZXItdGV4dC1jb2xvcjogYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1ob3Zlci10ZXh0LWNvbG9yLFxuICBzbWFydC10YWJsZS1wYWdpbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yLFxuICBzbWFydC10YWJsZS1wYWdpbmctcGFnZS10ZXh0LWNvbG9yOiBidXR0b24tb3V0bGluZS1wcmltYXJ5LXRleHQtY29sb3IsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1wYWdlLWZvY3VzLWJvcmRlci1jb2xvcjogYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3IsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1wYWdlLWZvY3VzLXRleHQtY29sb3I6IGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZm9jdXMtdGV4dC1jb2xvcixcblxuICB0b2FzdHItYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgdG9hc3RyLWJvcmRlci13aWR0aDogMXB4LFxuICB0b2FzdHItYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgdG9hc3RyLXBhZGRpbmc6IDFyZW0sXG4gIHRvYXN0ci1zaGFkb3c6IHNoYWRvdyxcblxuICB0b2FzdHItdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtMi1mb250LWZhbWlseSxcbiAgdG9hc3RyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC0yLWZvbnQtc2l6ZSxcbiAgdG9hc3RyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLTItZm9udC13ZWlnaHQsXG4gIHRvYXN0ci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC0yLWxpbmUtaGVpZ2h0LFxuICB0b2FzdHItdGl0bGUtdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcbiAgdG9hc3RyLXRpdGxlLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgdG9hc3RyLXRpdGxlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHRvYXN0ci10aXRsZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuXG4gIHRvYXN0ci1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1iYXNpYy1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0zLFxuICB0b2FzdHItYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdG9hc3RyLWljb24tYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0b2FzdHItaWNvbi1iYXNpYy1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTMsXG5cbiAgdG9hc3RyLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0b2FzdHItcHJpbWFyeS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgdG9hc3RyLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b2FzdHItaWNvbi1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9hc3RyLWljb24tcHJpbWFyeS1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0b2FzdHItZGVzdHJveWFibGUtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICB0b2FzdHItZGVzdHJveWFibGUtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG5cbiAgdG9hc3RyLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICB0b2FzdHItc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgdG9hc3RyLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b2FzdHItaWNvbi1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9hc3RyLWljb24tc3VjY2Vzcy1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICB0b2FzdHItZGVzdHJveWFibGUtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICB0b2FzdHItZGVzdHJveWFibGUtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG5cbiAgdG9hc3RyLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICB0b2FzdHItaW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgdG9hc3RyLWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b2FzdHItaWNvbi1pbmZvLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9hc3RyLWljb24taW5mby1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICB0b2FzdHItZGVzdHJveWFibGUtaW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICB0b2FzdHItZGVzdHJveWFibGUtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG5cbiAgdG9hc3RyLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICB0b2FzdHItd2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgdG9hc3RyLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b2FzdHItaWNvbi13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9hc3RyLWljb24td2FybmluZy1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICB0b2FzdHItZGVzdHJveWFibGUtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuICB0b2FzdHItZGVzdHJveWFibGUtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG5cbiAgdG9hc3RyLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgdG9hc3RyLWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICB0b2FzdHItZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9hc3RyLWljb24tZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9hc3RyLWljb24tZGFuZ2VyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIHRvYXN0ci1kZXN0cm95YWJsZS1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG5cbiAgdG9hc3RyLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICB0b2FzdHItY29udHJvbC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgdG9hc3RyLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICB0b2FzdHItaWNvbi1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgdG9hc3RyLWljb24tY29udHJvbC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICB0b2FzdHItZGVzdHJveWFibGUtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLFxuICB0b2FzdHItZGVzdHJveWFibGUtY29udHJvbC1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXIsXG5cbiAgYnV0dG9uLWN1cnNvcjogcG9pbnRlcixcbiAgYnV0dG9uLW91dGxpbmUtd2lkdGg6IG91dGxpbmUtd2lkdGgsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbG9yOiBvdXRsaW5lLWNvbG9yLFxuICBidXR0b24tdGV4dC1mb250LWZhbWlseTogdGV4dC1idXR0b24tZm9udC1mYW1pbHksXG4gIGJ1dHRvbi10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgYnV0dG9uLWRpc2FibGVkLWN1cnNvcjogZGVmYXVsdCxcblxuICBidXR0b24tdGlueS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tdGlueS1mb250LXNpemUsXG4gIGJ1dHRvbi10aW55LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLXRpbnktbGluZS1oZWlnaHQsXG4gIGJ1dHRvbi10aW55LWljb24tc2l6ZTogMC43NXJlbSxcbiAgYnV0dG9uLXRpbnktaWNvbi12ZXJ0aWNhbC1tYXJnaW46IC0wLjEyNXJlbSxcbiAgYnV0dG9uLXRpbnktaWNvbi1vZmZzZXQ6IDAuMzc1cmVtLFxuXG4gIGJ1dHRvbi1zbWFsbC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tc21hbGwtZm9udC1zaXplLFxuICBidXR0b24tc21hbGwtdGV4dC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tc21hbGwtbGluZS1oZWlnaHQsXG4gIGJ1dHRvbi1zbWFsbC1pY29uLXNpemU6IDFyZW0sXG4gIGJ1dHRvbi1zbWFsbC1pY29uLXZlcnRpY2FsLW1hcmdpbjogLTAuMTI1cmVtLFxuICBidXR0b24tc21hbGwtaWNvbi1vZmZzZXQ6IDAuMzc1cmVtLFxuXG4gIGJ1dHRvbi1tZWRpdW0tdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLW1lZGl1bS1mb250LXNpemUsXG4gIGJ1dHRvbi1tZWRpdW0tdGV4dC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tbWVkaXVtLWxpbmUtaGVpZ2h0LFxuICBidXR0b24tbWVkaXVtLWljb24tc2l6ZTogMS4yNXJlbSxcbiAgYnV0dG9uLW1lZGl1bS1pY29uLXZlcnRpY2FsLW1hcmdpbjogLTAuMTI1cmVtLFxuICBidXR0b24tbWVkaXVtLWljb24tb2Zmc2V0OiAwLjVyZW0sXG5cbiAgYnV0dG9uLWxhcmdlLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1sYXJnZS1mb250LXNpemUsXG4gIGJ1dHRvbi1sYXJnZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1sYXJnZS1saW5lLWhlaWdodCxcbiAgYnV0dG9uLWxhcmdlLWljb24tc2l6ZTogMS41cmVtLFxuICBidXR0b24tbGFyZ2UtaWNvbi12ZXJ0aWNhbC1tYXJnaW46IC0wLjEyNXJlbSxcbiAgYnV0dG9uLWxhcmdlLWljb24tb2Zmc2V0OiAwLjc1cmVtLFxuXG4gIGJ1dHRvbi1naWFudC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tZ2lhbnQtZm9udC1zaXplLFxuICBidXR0b24tZ2lhbnQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tZ2lhbnQtbGluZS1oZWlnaHQsXG4gIGJ1dHRvbi1naWFudC1pY29uLXNpemU6IDEuNXJlbSxcbiAgYnV0dG9uLWdpYW50LWljb24tdmVydGljYWwtbWFyZ2luOiAtMC4xMjVyZW0sXG4gIGJ1dHRvbi1naWFudC1pY29uLW9mZnNldDogMC43NXJlbSxcblxuICBidXR0b24tcmVjdGFuZ2xlLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIGJ1dHRvbi1zZW1pLXJvdW5kLWJvcmRlci1yYWRpdXM6IDAuNzVyZW0sXG4gIGJ1dHRvbi1yb3VuZC1ib3JkZXItcmFkaXVzOiAxLjVyZW0sXG5cbiAgYnV0dG9uLWZpbGxlZC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBidXR0b24tZmlsbGVkLWJvcmRlci13aWR0aDogMC4wNjI1cmVtLFxuICBidXR0b24tZmlsbGVkLXRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UsXG5cbiAgYnV0dG9uLWZpbGxlZC10aW55LXBhZGRpbmc6IDAuMzEyNXJlbSAwLjYyNXJlbSxcbiAgYnV0dG9uLWZpbGxlZC1zbWFsbC1wYWRkaW5nOiAwLjQzNzVyZW0gMC44NzVyZW0sXG4gIGJ1dHRvbi1maWxsZWQtbWVkaXVtLXBhZGRpbmc6IDAuNjg3NXJlbSAxLjEyNXJlbSxcbiAgYnV0dG9uLWZpbGxlZC1sYXJnZS1wYWRkaW5nOiAwLjgxMjVyZW0gMS4xMjVyZW0sXG4gIGJ1dHRvbi1maWxsZWQtZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDEuMzc1cmVtLFxuXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZGVmYXVsdCxcbiAgYnV0dG9uLWZpbGxlZC1iYXNpYy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWJhc2ljLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgYnV0dG9uLWZpbGxlZC1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1mb2N1cyxcbiAgYnV0dG9uLWZpbGxlZC1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWZvY3VzLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1ob3ZlcixcbiAgYnV0dG9uLWZpbGxlZC1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1iYXNpYy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtYWN0aXZlLFxuICBidXR0b24tZmlsbGVkLWJhc2ljLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZGlzYWJsZWQsXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1kaXNhYmxlZC1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZmlsbGVkLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBidXR0b24tZmlsbGVkLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24tZmlsbGVkLXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBidXR0b24tZmlsbGVkLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGlzYWJsZWQsXG4gIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cyxcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZSxcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGlzYWJsZWQsXG4gIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZmlsbGVkLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBidXR0b24tZmlsbGVkLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24tZmlsbGVkLWluZm8tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICBidXR0b24tZmlsbGVkLWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZSxcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGlzYWJsZWQsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWluZm8tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWFjdGl2ZSxcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGlzYWJsZWQsXG4gIGJ1dHRvbi1maWxsZWQtd2FybmluZy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZmlsbGVkLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdC1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICBidXR0b24tZmlsbGVkLWRhbmdlci1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXItYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWRhbmdlci1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZSxcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kaXNhYmxlZCxcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1maWxsZWQtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIGJ1dHRvbi1maWxsZWQtY29udHJvbC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdC1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIGJ1dHRvbi1maWxsZWQtY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLFxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXIsXG4gIGJ1dHRvbi1maWxsZWQtY29udHJvbC1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXItYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtYWN0aXZlLFxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1hY3RpdmUtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kaXNhYmxlZCxcbiAgYnV0dG9uLWZpbGxlZC1jb250cm9sLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1kaXNhYmxlZC1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1vdXRsaW5lLWJvcmRlci1zdHlsZTogc29saWQsXG4gIGJ1dHRvbi1vdXRsaW5lLWJvcmRlci13aWR0aDogMC4wNjI1cmVtLFxuICBidXR0b24tb3V0bGluZS10ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlLFxuICBidXR0b24tb3V0bGluZS1mb2N1cy1pbnNldC1zaGFkb3ctbGVuZ3RoOiAwIDAgMCAxMDB2bWF4LFxuXG4gIGJ1dHRvbi1vdXRsaW5lLXRpbnktcGFkZGluZzogMC4zMTI1cmVtIDAuNjI1cmVtLFxuICBidXR0b24tb3V0bGluZS1zbWFsbC1wYWRkaW5nOiAwLjQzNzVyZW0gMC44NzVyZW0sXG4gIGJ1dHRvbi1vdXRsaW5lLW1lZGl1bS1wYWRkaW5nOiAwLjY4NzVyZW0gMS4xMjVyZW0sXG4gIGJ1dHRvbi1vdXRsaW5lLWxhcmdlLXBhZGRpbmc6IDAuODEyNXJlbSAxLjEyNXJlbSxcbiAgYnV0dG9uLW91dGxpbmUtZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDEuMzc1cmVtLFxuXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWhvdmVyLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtaG92ZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LXN1Y2Nlc3MtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1mb2N1cyxcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWZvY3VzLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtaG92ZXItdGV4dC1jb2xvcjogdGV4dC1zdWNjZXNzLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtYWN0aXZlLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tb3V0bGluZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tdGV4dC1jb2xvcjogdGV4dC1pbmZvLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3ZlcixcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWhvdmVyLXRleHQtY29sb3I6IHRleHQtaW5mby1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtd2FybmluZy1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWZvY3VzLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctZm9jdXMtdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LXdhcm5pbmctY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1kYW5nZXItY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LWRhbmdlci1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3ZlcixcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWhvdmVyLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWRhbmdlci1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1naG9zdC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBidXR0b24tZ2hvc3QtYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW0sXG4gIGJ1dHRvbi1naG9zdC10ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlLFxuICBidXR0b24tZ2hvc3QtZm9jdXMtaW5zZXQtc2hhZG93LWxlbmd0aDogMCAwIDAgMTAwdm1heCxcblxuICBidXR0b24tZ2hvc3QtdGlueS1wYWRkaW5nOiAwLjMxMjVyZW0gMC42MjVyZW0sXG4gIGJ1dHRvbi1naG9zdC1zbWFsbC1wYWRkaW5nOiAwLjQzNzVyZW0gMC44NzVyZW0sXG4gIGJ1dHRvbi1naG9zdC1tZWRpdW0tcGFkZGluZzogMC42ODc1cmVtIDEuMTI1cmVtLFxuICBidXR0b24tZ2hvc3QtbGFyZ2UtcGFkZGluZzogMC44MTI1cmVtIDEuMTI1cmVtLFxuICBidXR0b24tZ2hvc3QtZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDEuMzc1cmVtLFxuXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy02MDAsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMCxcbiAgYnV0dG9uLWdob3N0LWJhc2ljLWZvY3VzLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTYwMCxcbiAgYnV0dG9uLWdob3N0LWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCxcbiAgYnV0dG9uLWdob3N0LWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1ob3Zlci10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy02MDAsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtYmFzaWMtYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1hY3RpdmUtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtNjAwLFxuICBidXR0b24tZ2hvc3QtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtYmFzaWMtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWdob3N0LXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNTAwLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCxcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktaG92ZXItdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktYWN0aXZlLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMCxcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1zdWNjZXNzLWNvbG9yLFxuICBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDAsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWhvdmVyLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LXN1Y2Nlc3MtY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZ2hvc3QtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LWluZm8tZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC01MDAsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWZvY3VzLXRleHQtY29sb3I6IHRleHQtaW5mby1jb2xvcixcbiAgYnV0dG9uLWdob3N0LWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwLFxuICBidXR0b24tZ2hvc3QtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtaW5mby1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWFjdGl2ZS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtaW5mby1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1pbmZvLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWNvbG9yLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNTAwLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LXdhcm5pbmctY29sb3IsXG4gIGJ1dHRvbi1naG9zdC13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCxcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctaG92ZXItdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWNvbG9yLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctYWN0aXZlLXRleHQtY29sb3I6IHRleHQtd2FybmluZy1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1naG9zdC1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1kYW5nZXItY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNTAwLFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWZvY3VzLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCxcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWhvdmVyLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1kYW5nZXItYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1kYW5nZXItYWN0aXZlLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBidXR0b24tZ2hvc3QtY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNTAwLFxuICBidXR0b24tZ2hvc3QtY29udHJvbC1mb2N1cy10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIGJ1dHRvbi1naG9zdC1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtaG92ZXItdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBidXR0b24tZ2hvc3QtY29udHJvbC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtY29udHJvbC1hY3RpdmUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtYWN0aXZlLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtY29udHJvbC1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1oZXJvLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1oZXJvLWJvcmRlci1zdHlsZTogc29saWQsXG4gIGJ1dHRvbi1oZXJvLWJvcmRlci13aWR0aDogMCxcbiAgYnV0dG9uLWhlcm8tdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSxcblxuICBidXR0b24taGVyby10aW55LXBhZGRpbmc6IDAuMzc1cmVtIDAuNjg3NXJlbSxcbiAgYnV0dG9uLWhlcm8tc21hbGwtcGFkZGluZzogMC41cmVtIDAuOTM3NXJlbSxcbiAgYnV0dG9uLWhlcm8tbWVkaXVtLXBhZGRpbmc6IDAuNzVyZW0gMS4xODc1cmVtLFxuICBidXR0b24taGVyby1sYXJnZS1wYWRkaW5nOiAwLjg3NXJlbSAxLjE4NzVyZW0sXG4gIGJ1dHRvbi1oZXJvLWdpYW50LXBhZGRpbmc6IDFyZW0gMS40Mzc1cmVtLFxuXG4gIGJ1dHRvbi1oZXJvLXNoYWRvdzogMCAwIHRyYW5zcGFyZW50LFxuICBidXR0b24taGVyby10ZXh0LXNoYWRvdzogc2hhZG93LFxuICBidXR0b24taGVyby1iZXZlbC1zaXplOiAwIDAgMCAwLFxuICBidXR0b24taGVyby1nbG93LXNpemU6IDAgMCAwIDAsXG4gIGJ1dHRvbi1oZXJvLW91dGxpbmUtY29sb3I6IG91dGxpbmUtY29sb3IsXG4gIGJ1dHRvbi1oZXJvLW91dGxpbmUtd2lkdGg6IG91dGxpbmUtd2lkdGgsXG5cbiAgYnV0dG9uLWhlcm8tYmFzaWMtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtNjAwLFxuICBidXR0b24taGVyby1iYXNpYy1iZXZlbC1jb2xvcjogY29sb3ItYmFzaWMtNjAwLFxuICBidXR0b24taGVyby1iYXNpYy1nbG93LWNvbG9yOiBjb2xvci1iYXNpYy03MDAsXG4gIGJ1dHRvbi1oZXJvLWJhc2ljLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMjAwLFxuICBidXR0b24taGVyby1iYXNpYy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kZWZhdWx0LFxuICBidXR0b24taGVyby1iYXNpYy1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTMwMCxcbiAgYnV0dG9uLWhlcm8tYmFzaWMtZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZm9jdXMsXG4gIGJ1dHRvbi1oZXJvLWJhc2ljLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBidXR0b24taGVyby1iYXNpYy1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1ob3ZlcixcbiAgYnV0dG9uLWhlcm8tYmFzaWMtYWN0aXZlLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMzAwLFxuICBidXR0b24taGVyby1iYXNpYy1hY3RpdmUtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtYWN0aXZlLFxuICBidXR0b24taGVyby1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kaXNhYmxlZCxcbiAgYnV0dG9uLWhlcm8tYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24taGVyby1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1iZXZlbC1jb2xvcjogY29sb3ItcHJpbWFyeS02MDAsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktZ2xvdy1jb2xvcjogY29sb3ItcHJpbWFyeS03MDAsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LTQwMCxcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICBidXR0b24taGVyby1wcmltYXJ5LWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS0zMDAsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1hY3RpdmUtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1hY3RpdmUtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kaXNhYmxlZCxcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24taGVyby1zdWNjZXNzLWJldmVsLWNvbG9yOiBjb2xvci1zdWNjZXNzLTYwMCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1nbG93LWNvbG9yOiBjb2xvci1zdWNjZXNzLTcwMCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNDAwLFxuICBidXR0b24taGVyby1zdWNjZXNzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxuICBidXR0b24taGVyby1zdWNjZXNzLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLTMwMCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICBidXR0b24taGVyby1zdWNjZXNzLWFjdGl2ZS1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxuICBidXR0b24taGVyby1zdWNjZXNzLWFjdGl2ZS1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZSxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRpc2FibGVkLFxuICBidXR0b24taGVyby1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWhlcm8taW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1oZXJvLWluZm8tYmV2ZWwtY29sb3I6IGNvbG9yLWluZm8tNjAwLFxuICBidXR0b24taGVyby1pbmZvLWdsb3ctY29sb3I6IGNvbG9yLWluZm8tNzAwLFxuICBidXR0b24taGVyby1pbmZvLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby00MDAsXG4gIGJ1dHRvbi1oZXJvLWluZm8tcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBidXR0b24taGVyby1pbmZvLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby01MDAsXG4gIGJ1dHRvbi1oZXJvLWluZm8tZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgYnV0dG9uLWhlcm8taW5mby1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tMzAwLFxuICBidXR0b24taGVyby1pbmZvLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG4gIGJ1dHRvbi1oZXJvLWluZm8tYWN0aXZlLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby01MDAsXG4gIGJ1dHRvbi1oZXJvLWluZm8tYWN0aXZlLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLFxuICBidXR0b24taGVyby1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGlzYWJsZWQsXG4gIGJ1dHRvbi1oZXJvLWluZm8tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24taGVyby13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWhlcm8td2FybmluZy1iZXZlbC1jb2xvcjogY29sb3Itd2FybmluZy02MDAsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctZ2xvdy1jb2xvcjogY29sb3Itd2FybmluZy03MDAsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLTQwMCxcbiAgYnV0dG9uLWhlcm8td2FybmluZy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLTUwMCxcbiAgYnV0dG9uLWhlcm8td2FybmluZy1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLFxuICBidXR0b24taGVyby13YXJuaW5nLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy0zMDAsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgYnV0dG9uLWhlcm8td2FybmluZy1hY3RpdmUtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLTUwMCxcbiAgYnV0dG9uLWhlcm8td2FybmluZy1hY3RpdmUtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1hY3RpdmUsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kaXNhYmxlZCxcbiAgYnV0dG9uLWhlcm8td2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1iZXZlbC1jb2xvcjogY29sb3ItZGFuZ2VyLTYwMCxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWdsb3ctY29sb3I6IGNvbG9yLWRhbmdlci03MDAsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci00MDAsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLTUwMCxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cyxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLTMwMCxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWFjdGl2ZS1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci01MDAsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1hY3RpdmUtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZSxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kaXNhYmxlZCxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWhlcm8tY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtYmV2ZWwtY29sb3I6IGNvbG9yLWJhc2ljLTYwMCxcbiAgYnV0dG9uLWhlcm8tY29udHJvbC1nbG93LWNvbG9yOiBjb2xvci1iYXNpYy03MDAsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBidXR0b24taGVyby1jb250cm9sLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMjAwLFxuICBidXR0b24taGVyby1jb250cm9sLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZm9jdXMsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1ob3ZlcixcbiAgYnV0dG9uLWhlcm8tY29udHJvbC1hY3RpdmUtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0yMDAsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtYWN0aXZlLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtYWN0aXZlLFxuICBidXR0b24taGVyby1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcbiAgYnV0dG9uLWhlcm8tY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1ncm91cC1maWxsZWQtYnV0dG9uLWJhc2ljLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgYnV0dG9uLWdyb3VwLWZpbGxlZC1idXR0b24tcHJpbWFyeS10ZXh0LWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktdGV4dC1jb2xvcixcbiAgYnV0dG9uLWdyb3VwLWZpbGxlZC1idXR0b24tc3VjY2Vzcy10ZXh0LWNvbG9yOiBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtdGV4dC1jb2xvcixcbiAgYnV0dG9uLWdyb3VwLWZpbGxlZC1idXR0b24taW5mby10ZXh0LWNvbG9yOiBidXR0b24tZmlsbGVkLWluZm8tdGV4dC1jb2xvcixcbiAgYnV0dG9uLWdyb3VwLWZpbGxlZC1idXR0b24td2FybmluZy10ZXh0LWNvbG9yOiBidXR0b24tZmlsbGVkLXdhcm5pbmctdGV4dC1jb2xvcixcbiAgYnV0dG9uLWdyb3VwLWZpbGxlZC1idXR0b24tZGFuZ2VyLXRleHQtY29sb3I6IGJ1dHRvbi1maWxsZWQtZGFuZ2VyLXRleHQtY29sb3IsXG4gIGJ1dHRvbi1ncm91cC1maWxsZWQtYnV0dG9uLWNvbnRyb2wtdGV4dC1jb2xvcjogYnV0dG9uLWZpbGxlZC1jb250cm9sLXRleHQtY29sb3IsXG5cbiAgYnV0dG9uLWdyb3VwLWZpbGxlZC1iYXNpYy1kaXZpZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1ncm91cC1maWxsZWQtcHJpbWFyeS1kaXZpZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICBidXR0b24tZ3JvdXAtZmlsbGVkLXN1Y2Nlc3MtZGl2aWRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cyxcbiAgYnV0dG9uLWdyb3VwLWZpbGxlZC1pbmZvLWRpdmlkZXItY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIGJ1dHRvbi1ncm91cC1maWxsZWQtd2FybmluZy1kaXZpZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLFxuICBidXR0b24tZ3JvdXAtZmlsbGVkLWRhbmdlci1kaXZpZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIGJ1dHRvbi1ncm91cC1maWxsZWQtY29udHJvbC1kaXZpZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLFxuXG4gIGJ1dHRvbi1ncm91cC1naG9zdC1kaXZpZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1mb2N1cy1ib3JkZXIsXG5cbiAgaWNvbi1idXR0b24tZmlsbGVkLXRpbnktcGFkZGluZzogMC40Mzc1cmVtIDAuMzEyNXJlbSxcbiAgaWNvbi1idXR0b24tZmlsbGVkLXNtYWxsLXBhZGRpbmc6IDAuNTYyNXJlbSAwLjQzNzVyZW0sXG4gIGljb24tYnV0dG9uLWZpbGxlZC1tZWRpdW0tcGFkZGluZzogMC42ODc1cmVtIDAuNTYyNXJlbSxcbiAgaWNvbi1idXR0b24tZmlsbGVkLWxhcmdlLXBhZGRpbmc6IDAuODEyNXJlbSAwLjY4NzVyZW0sXG4gIGljb24tYnV0dG9uLWZpbGxlZC1naWFudC1wYWRkaW5nOiAxLjA2MjVyZW0gMC45Mzc1cmVtLFxuXG4gIGljb24tYnV0dG9uLW91dGxpbmUtdGlueS1wYWRkaW5nOiAwLjQzNzVyZW0gMC4zMTI1cmVtLFxuICBpY29uLWJ1dHRvbi1vdXRsaW5lLXNtYWxsLXBhZGRpbmc6IDAuNTYyNXJlbSAwLjQzNzVyZW0sXG4gIGljb24tYnV0dG9uLW91dGxpbmUtbWVkaXVtLXBhZGRpbmc6IDAuNjg3NXJlbSAwLjU2MjVyZW0sXG4gIGljb24tYnV0dG9uLW91dGxpbmUtbGFyZ2UtcGFkZGluZzogMC44MTI1cmVtIDAuNjg3NXJlbSxcbiAgaWNvbi1idXR0b24tb3V0bGluZS1naWFudC1wYWRkaW5nOiAxLjA2MjVyZW0gMC45Mzc1cmVtLFxuXG4gIGljb24tYnV0dG9uLWdob3N0LXRpbnktcGFkZGluZzogMC40Mzc1cmVtIDAuMzEyNXJlbSxcbiAgaWNvbi1idXR0b24tZ2hvc3Qtc21hbGwtcGFkZGluZzogMC41NjI1cmVtIDAuNDM3NXJlbSxcbiAgaWNvbi1idXR0b24tZ2hvc3QtbWVkaXVtLXBhZGRpbmc6IDAuNjg3NXJlbSAwLjU2MjVyZW0sXG4gIGljb24tYnV0dG9uLWdob3N0LWxhcmdlLXBhZGRpbmc6IDAuODEyNXJlbSAwLjY4NzVyZW0sXG4gIGljb24tYnV0dG9uLWdob3N0LWdpYW50LXBhZGRpbmc6IDEuMDYyNXJlbSAwLjkzNzVyZW0sXG5cbiAgaWNvbi1idXR0b24taGVyby10aW55LXBhZGRpbmc6IDAuNXJlbSAwLjM3NXJlbSxcbiAgaWNvbi1idXR0b24taGVyby1zbWFsbC1wYWRkaW5nOiAwLjU2MjVyZW0gMC41cmVtLFxuICBpY29uLWJ1dHRvbi1oZXJvLW1lZGl1bS1wYWRkaW5nOiAwLjc1cmVtIDAuNTYyNXJlbSxcbiAgaWNvbi1idXR0b24taGVyby1sYXJnZS1wYWRkaW5nOiAwLjg3NXJlbSAwLjY4NzVyZW0sXG4gIGljb24tYnV0dG9uLWhlcm8tZ2lhbnQtcGFkZGluZzogMS4wNjI1cmVtIDFyZW0sXG5cbiAgaW5wdXQtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgaW5wdXQtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIGlucHV0LW91dGxpbmUtY29sb3I6IG91dGxpbmUtY29sb3IsXG4gIGlucHV0LW91dGxpbmUtd2lkdGg6IG91dGxpbmUtd2lkdGgsXG4gIGlucHV0LXBsYWNlaG9sZGVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBpbnB1dC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuXG4gIGlucHV0LWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGlucHV0LWJhc2ljLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgaW5wdXQtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBpbnB1dC1iYXNpYy1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBpbnB1dC1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGlucHV0LWJhc2ljLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgaW5wdXQtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBpbnB1dC1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBpbnB1dC1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGlucHV0LWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGlucHV0LWJhc2ljLWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgaW5wdXQtcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBpbnB1dC1wcmltYXJ5LXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgaW5wdXQtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGlucHV0LXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBpbnB1dC1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cy1ib3JkZXIsXG4gIGlucHV0LXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBpbnB1dC1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXIsXG4gIGlucHV0LXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBpbnB1dC1wcmltYXJ5LWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGlucHV0LXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgaW5wdXQtcHJpbWFyeS1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGlucHV0LXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgaW5wdXQtc3VjY2Vzcy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGlucHV0LXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBpbnB1dC1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBpbnB1dC1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgaW5wdXQtc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLFxuICBpbnB1dC1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgaW5wdXQtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLFxuICBpbnB1dC1zdWNjZXNzLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgaW5wdXQtc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBpbnB1dC1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGlucHV0LXN1Y2Nlc3MtZGlzYWJsZWQtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBpbnB1dC1pbmZvLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGlucHV0LWluZm8tcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBpbnB1dC1pbmZvLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgaW5wdXQtaW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgaW5wdXQtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGlucHV0LWluZm8tZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLWJvcmRlcixcbiAgaW5wdXQtaW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIGlucHV0LWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLWJvcmRlcixcbiAgaW5wdXQtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LWluZm8tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgaW5wdXQtaW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBpbnB1dC1pbmZvLWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgaW5wdXQtd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBpbnB1dC13YXJuaW5nLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgaW5wdXQtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGlucHV0LXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBpbnB1dC13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cy1ib3JkZXIsXG4gIGlucHV0LXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBpbnB1dC13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1ob3Zlci1ib3JkZXIsXG4gIGlucHV0LXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBpbnB1dC13YXJuaW5nLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGlucHV0LXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgaW5wdXQtd2FybmluZy1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGlucHV0LWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBpbnB1dC1kYW5nZXItcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBpbnB1dC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBpbnB1dC1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgaW5wdXQtZGFuZ2VyLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgaW5wdXQtZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLWJvcmRlcixcbiAgaW5wdXQtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgaW5wdXQtZGFuZ2VyLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLWJvcmRlcixcbiAgaW5wdXQtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgaW5wdXQtZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGlucHV0LWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBpbnB1dC1kYW5nZXItZGlzYWJsZWQtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBpbnB1dC1jb250cm9sLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgaW5wdXQtY29udHJvbC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGlucHV0LWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0zMDAsXG4gIGlucHV0LWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTUwMCxcbiAgaW5wdXQtY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTUwMCxcbiAgaW5wdXQtY29udHJvbC1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBpbnB1dC1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNDAwLFxuICBpbnB1dC1jb250cm9sLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGlucHV0LWNvbnRyb2wtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgaW5wdXQtY29udHJvbC1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBpbnB1dC1jb250cm9sLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgaW5wdXQtY29udHJvbC1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgaW5wdXQtcmVjdGFuZ2xlLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIGlucHV0LXNlbWktcm91bmQtYm9yZGVyLXJhZGl1czogMC43NXJlbSxcbiAgaW5wdXQtcm91bmQtYm9yZGVyLXJhZGl1czogMS41cmVtLFxuXG4gIGlucHV0LXRpbnktdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi0yLWZvbnQtc2l6ZSxcbiAgaW5wdXQtdGlueS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWNhcHRpb24tMi1mb250LXdlaWdodCxcbiAgaW5wdXQtdGlueS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWNhcHRpb24tMi1saW5lLWhlaWdodCxcbiAgaW5wdXQtdGlueS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBpbnB1dC10aW55LXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC10aW55LXBsYWNlaG9sZGVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC10aW55LXBhZGRpbmc6IDAuMTg3NXJlbSAxcmVtLFxuICBpbnB1dC10aW55LW1heC13aWR0aDogMjByZW0sXG5cbiAgaW5wdXQtc21hbGwtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtMi1mb250LXNpemUsXG4gIGlucHV0LXNtYWxsLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodCxcbiAgaW5wdXQtc21hbGwtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC1zbWFsbC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBpbnB1dC1zbWFsbC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgaW5wdXQtc21hbGwtcGxhY2Vob2xkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGlucHV0LXNtYWxsLXBhZGRpbmc6IDAuMTg3NXJlbSAxcmVtLFxuICBpbnB1dC1zbWFsbC1tYXgtd2lkdGg6IDIwcmVtLFxuXG4gIGlucHV0LW1lZGl1bS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIGlucHV0LW1lZGl1bS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC1tZWRpdW0tdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcbiAgaW5wdXQtbWVkaXVtLXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGlucHV0LW1lZGl1bS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgaW5wdXQtbWVkaXVtLXBsYWNlaG9sZGVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC1tZWRpdW0tcGFkZGluZzogMC40Mzc1cmVtIDFyZW0sXG4gIGlucHV0LW1lZGl1bS1tYXgtd2lkdGg6IDIwcmVtLFxuXG4gIGlucHV0LWxhcmdlLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgaW5wdXQtbGFyZ2UtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgaW5wdXQtbGFyZ2UtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcbiAgaW5wdXQtbGFyZ2UtcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgaW5wdXQtbGFyZ2UtcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGlucHV0LWxhcmdlLXBsYWNlaG9sZGVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC1sYXJnZS1wYWRkaW5nOiAwLjY4NzVyZW0gMXJlbSxcbiAgaW5wdXQtbGFyZ2UtbWF4LXdpZHRoOiAzMHJlbSxcblxuICBpbnB1dC1naWFudC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1oZWFkaW5nLTYtZm9udC1zaXplLFxuICBpbnB1dC1naWFudC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWhlYWRpbmctNi1mb250LXdlaWdodCxcbiAgaW5wdXQtZ2lhbnQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1oZWFkaW5nLTYtbGluZS1oZWlnaHQsXG4gIGlucHV0LWdpYW50LXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGlucHV0LWdpYW50LXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC1naWFudC1wbGFjZWhvbGRlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgaW5wdXQtZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDFyZW0sXG4gIGlucHV0LWdpYW50LW1heC13aWR0aDogMzByZW0sXG5cbiAgY2hlY2tib3gtaGVpZ2h0OiAxLjI1cmVtLFxuICBjaGVja2JveC13aWR0aDogMS4yNXJlbSxcbiAgY2hlY2tib3gtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgY2hlY2tib3gtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIGNoZWNrYm94LWJvcmRlci1yYWRpdXM6IDNweCxcbiAgY2hlY2tib3gtb3V0bGluZS13aWR0aDogb3V0bGluZS13aWR0aCxcbiAgY2hlY2tib3gtb3V0bGluZS1jb2xvcjogb3V0bGluZS1jb2xvcixcbiAgY2hlY2tib3gtdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtZmFtaWx5LFxuICBjaGVja2JveC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZSxcbiAgY2hlY2tib3gtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0LFxuICBjaGVja2JveC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG4gIGNoZWNrYm94LXRleHQtc3BhY2U6IDAuNjg3NXJlbSxcbiAgY2hlY2tib3gtcGFkZGluZzogMCxcbiAgY2hlY2tib3gtZm9jdXMtaW5zZXQtc2hhZG93LWxlbmd0aDogMCAwIDAgMTAwdm1heCxcblxuICBjaGVja2JveC1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjaGVja2JveC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBjaGVja2JveC1iYXNpYy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1iYXNpYy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgY2hlY2tib3gtYmFzaWMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LWJhc2ljLWNoZWNrZWQtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LWJhc2ljLWluZGV0ZXJtaW5hdGUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBjaGVja2JveC1iYXNpYy1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtYmFzaWMtaW5kZXRlcm1pbmF0ZS1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGNoZWNrYm94LWJhc2ljLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC1iYXNpYy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIGNoZWNrYm94LWJhc2ljLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3ZlcixcbiAgY2hlY2tib3gtYmFzaWMtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtYmFzaWMtaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBjaGVja2JveC1iYXNpYy1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LWJhc2ljLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGNoZWNrYm94LWJhc2ljLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LWJhc2ljLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICBjaGVja2JveC1iYXNpYy1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGNoZWNrYm94LWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBjaGVja2JveC1iYXNpYy1kaXNhYmxlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgY2hlY2tib3gtYmFzaWMtZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIGNoZWNrYm94LWJhc2ljLWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgY2hlY2tib3gtcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjaGVja2JveC1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgY2hlY2tib3gtcHJpbWFyeS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LXByaW1hcnktY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGNoZWNrYm94LXByaW1hcnktY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LXByaW1hcnktY2hlY2tlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtcHJpbWFyeS1pbmRldGVybWluYXRlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgY2hlY2tib3gtcHJpbWFyeS1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1pbmRldGVybWluYXRlLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGNoZWNrYm94LXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIGNoZWNrYm94LXByaW1hcnktZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGNoZWNrYm94LXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIGNoZWNrYm94LXByaW1hcnktaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC1wcmltYXJ5LWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgY2hlY2tib3gtcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LXByaW1hcnktYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIGNoZWNrYm94LXByaW1hcnktYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGNoZWNrYm94LXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGNoZWNrYm94LXByaW1hcnktZGlzYWJsZWQtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgY2hlY2tib3gtcHJpbWFyeS1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgY2hlY2tib3gtcHJpbWFyeS1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIGNoZWNrYm94LXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1zdWNjZXNzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBjaGVja2JveC1zdWNjZXNzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1zdWNjZXNzLWNoZWNrZWQtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtaW5kZXRlcm1pbmF0ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtaW5kZXRlcm1pbmF0ZS1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtaW5kZXRlcm1pbmF0ZS1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWZvY3VzLFxuICBjaGVja2JveC1zdWNjZXNzLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICBjaGVja2JveC1zdWNjZXNzLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyLFxuICBjaGVja2JveC1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICBjaGVja2JveC1zdWNjZXNzLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1zdWNjZXNzLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLFxuICBjaGVja2JveC1zdWNjZXNzLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1zdWNjZXNzLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBjaGVja2JveC1zdWNjZXNzLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBjaGVja2JveC1zdWNjZXNzLWRpc2FibGVkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICBjaGVja2JveC1pbmZvLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNoZWNrYm94LWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBjaGVja2JveC1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtaW5mby1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgY2hlY2tib3gtaW5mby1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtaW5mby1jaGVja2VkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1pbmZvLWluZGV0ZXJtaW5hdGUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBjaGVja2JveC1pbmZvLWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1pbmZvLWluZGV0ZXJtaW5hdGUtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LWluZm8tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1cyxcbiAgY2hlY2tib3gtaW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC1pbmZvLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgY2hlY2tib3gtaW5mby1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1mb2N1cy1ib3JkZXIsXG4gIGNoZWNrYm94LWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3ZlcixcbiAgY2hlY2tib3gtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC1pbmZvLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcbiAgY2hlY2tib3gtaW5mby1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LWluZm8tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBjaGVja2JveC1pbmZvLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtaW5mby1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZSxcbiAgY2hlY2tib3gtaW5mby1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgY2hlY2tib3gtaW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgY2hlY2tib3gtaW5mby1kaXNhYmxlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtaW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBjaGVja2JveC1pbmZvLWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICBjaGVja2JveC1pbmZvLWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgY2hlY2tib3gtd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjaGVja2JveC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgY2hlY2tib3gtd2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGNoZWNrYm94LXdhcm5pbmctY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctY2hlY2tlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtd2FybmluZy1pbmRldGVybWluYXRlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgY2hlY2tib3gtd2FybmluZy1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtd2FybmluZy1pbmRldGVybWluYXRlLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGNoZWNrYm94LXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtd2FybmluZy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXG4gIGNoZWNrYm94LXdhcm5pbmctZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtd2FybmluZy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC13YXJuaW5nLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgY2hlY2tib3gtd2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1hY3RpdmUsXG4gIGNoZWNrYm94LXdhcm5pbmctYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGNoZWNrYm94LXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctZGlzYWJsZWQtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgY2hlY2tib3gtd2FybmluZy1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgY2hlY2tib3gtd2FybmluZy1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIGNoZWNrYm94LWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjaGVja2JveC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGNoZWNrYm94LWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtZGFuZ2VyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGNoZWNrYm94LWRhbmdlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1kYW5nZXItY2hlY2tlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtZGFuZ2VyLWluZGV0ZXJtaW5hdGUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGNoZWNrYm94LWRhbmdlci1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1kYW5nZXItaW5kZXRlcm1pbmF0ZS1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtZGFuZ2VyLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1mb2N1cyxcbiAgY2hlY2tib3gtZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtZGFuZ2VyLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICBjaGVja2JveC1kYW5nZXItZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cy1ib3JkZXIsXG4gIGNoZWNrYm94LWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGNoZWNrYm94LWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LWRhbmdlci1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgY2hlY2tib3gtZGFuZ2VyLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC1kYW5nZXItYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGNoZWNrYm94LWRhbmdlci1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtZGFuZ2VyLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUsXG4gIGNoZWNrYm94LWRhbmdlci1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1kYW5nZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGNoZWNrYm94LWRhbmdlci1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgY2hlY2tib3gtZGFuZ2VyLWRpc2FibGVkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgY2hlY2tib3gtZGFuZ2VyLWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICBjaGVja2JveC1kYW5nZXItZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICBjaGVja2JveC1jb250cm9sLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGNoZWNrYm94LWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1jb250cm9sLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBjaGVja2JveC1jb250cm9sLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1jb250cm9sLWNoZWNrZWQtY2hlY2ttYXJrLWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIGNoZWNrYm94LWNvbnRyb2wtaW5kZXRlcm1pbmF0ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIGNoZWNrYm94LWNvbnRyb2wtaW5kZXRlcm1pbmF0ZS1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtaW5kZXRlcm1pbmF0ZS1jaGVja21hcmstY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgY2hlY2tib3gtY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLFxuICBjaGVja2JveC1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLFxuICBjaGVja2JveC1jb250cm9sLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLFxuICBjaGVja2JveC1jb250cm9sLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLFxuICBjaGVja2JveC1jb250cm9sLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtY29udHJvbC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGNoZWNrYm94LWNvbnRyb2wtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1jb250cm9sLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtYWN0aXZlLFxuICBjaGVja2JveC1jb250cm9sLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGNoZWNrYm94LWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgY2hlY2tib3gtY29udHJvbC1kaXNhYmxlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LWNvbnRyb2wtZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIGNoZWNrYm94LWNvbnRyb2wtZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICBiYWRnZS1kb3QtbW9kZS1ib3JkZXItcmFkaXVzOiAwLjVyZW0sXG4gIGJhZGdlLWRvdC1tb2RlLXBhZGRpbmc6IDAuM3JlbSxcblxuICBiYWRnZS1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBiYWRnZS10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWJ1dHRvbi1mb250LWZhbWlseSxcbiAgYmFkZ2UtdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLXRpbnktZm9udC1zaXplLFxuICBiYWRnZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgYmFkZ2UtdGV4dC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tdGlueS1saW5lLWhlaWdodCxcbiAgYmFkZ2UtcGFkZGluZzogMC4yNXJlbSAwLjRyZW0sXG5cbiAgYmFkZ2UtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBiYWRnZS1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBiYWRnZS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgYmFkZ2UtcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBiYWRnZS1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGJhZGdlLWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBiYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYmFkZ2UtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIGJhZGdlLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuXG4gIHByb2dyZXNzLWJhci1hbmltYXRpb24tZHVyYXRpb246IDQwMG1zLFxuICBwcm9ncmVzcy1iYXItYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgcHJvZ3Jlc3MtYmFyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG5cbiAgcHJvZ3Jlc3MtYmFyLXRpbnktaGVpZ2h0OiAxcmVtLFxuICBwcm9ncmVzcy1iYXItdGlueS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZSxcbiAgcHJvZ3Jlc3MtYmFyLXRpbnktdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0LFxuICBwcm9ncmVzcy1iYXItdGlueS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG4gIHByb2dyZXNzLWJhci1zbWFsbC1oZWlnaHQ6IDEuMjVyZW0sXG4gIHByb2dyZXNzLWJhci1zbWFsbC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZSxcbiAgcHJvZ3Jlc3MtYmFyLXNtYWxsLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodCxcbiAgcHJvZ3Jlc3MtYmFyLXNtYWxsLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodCxcbiAgcHJvZ3Jlc3MtYmFyLW1lZGl1bS1oZWlnaHQ6IDEuMzc1cmVtLFxuICBwcm9ncmVzcy1iYXItbWVkaXVtLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgcHJvZ3Jlc3MtYmFyLW1lZGl1bS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBwcm9ncmVzcy1iYXItbWVkaXVtLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIHByb2dyZXNzLWJhci1sYXJnZS1oZWlnaHQ6IDEuNXJlbSxcbiAgcHJvZ3Jlc3MtYmFyLWxhcmdlLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgcHJvZ3Jlc3MtYmFyLWxhcmdlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHByb2dyZXNzLWJhci1sYXJnZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBwcm9ncmVzcy1iYXItZ2lhbnQtaGVpZ2h0OiAxLjc1cmVtLFxuICBwcm9ncmVzcy1iYXItZ2lhbnQtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBwcm9ncmVzcy1iYXItZ2lhbnQtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgcHJvZ3Jlc3MtYmFyLWdpYW50LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG5cbiAgcHJvZ3Jlc3MtYmFyLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgcHJvZ3Jlc3MtYmFyLWJhc2ljLWZpbGxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTQsXG4gIHByb2dyZXNzLWJhci1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuXG4gIHByb2dyZXNzLWJhci1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgcHJvZ3Jlc3MtYmFyLXByaW1hcnktZmlsbGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgcHJvZ3Jlc3MtYmFyLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHByb2dyZXNzLWJhci1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgcHJvZ3Jlc3MtYmFyLXN1Y2Nlc3MtZmlsbGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgcHJvZ3Jlc3MtYmFyLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHByb2dyZXNzLWJhci1pbmZvLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgcHJvZ3Jlc3MtYmFyLWluZm8tZmlsbGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgcHJvZ3Jlc3MtYmFyLWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHByb2dyZXNzLWJhci13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgcHJvZ3Jlc3MtYmFyLXdhcm5pbmctZmlsbGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgcHJvZ3Jlc3MtYmFyLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHByb2dyZXNzLWJhci1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBwcm9ncmVzcy1iYXItZGFuZ2VyLWZpbGxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgcHJvZ3Jlc3MtYmFyLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgcHJvZ3Jlc3MtYmFyLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBwcm9ncmVzcy1iYXItY29udHJvbC1maWxsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBwcm9ncmVzcy1iYXItY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG5cbiAgYWxlcnQtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgYWxlcnQtYm90dG9tLW1hcmdpbjogMS41cmVtLFxuICBhbGVydC1wYWRkaW5nOiAxcmVtIDEuMTI1cmVtLFxuICBhbGVydC1zY3JvbGxiYXItY29sb3I6IHNjcm9sbGJhci1jb2xvcixcbiAgYWxlcnQtc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6IHNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yLFxuICBhbGVydC1zY3JvbGxiYXItd2lkdGg6IHNjcm9sbGJhci13aWR0aCxcbiAgYWxlcnQtc2hhZG93OiBub25lLFxuICBhbGVydC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgYWxlcnQtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBhbGVydC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBhbGVydC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuXG4gIGFsZXJ0LWNsb3NhYmxlLXN0YXJ0LXBhZGRpbmc6IDNyZW0sXG5cbiAgYWxlcnQtdGlueS1oZWlnaHQ6IDQuNXJlbSxcbiAgYWxlcnQtc21hbGwtaGVpZ2h0OiA1Ljc1cmVtLFxuICBhbGVydC1tZWRpdW0taGVpZ2h0OiA3cmVtLFxuICBhbGVydC1tZWRpdW0tcGFkZGluZzogMXJlbSAxLjEyNXJlbSxcbiAgYWxlcnQtbGFyZ2UtaGVpZ2h0OiA4LjI1cmVtLFxuICBhbGVydC1naWFudC1oZWlnaHQ6IDkuNXJlbSxcblxuICBhbGVydC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGFsZXJ0LWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGFsZXJ0LXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBhbGVydC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYWxlcnQtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGFsZXJ0LXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBhbGVydC1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgYWxlcnQtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGFsZXJ0LXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBhbGVydC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYWxlcnQtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBhbGVydC1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBhbGVydC1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgYWxlcnQtY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG5cbiAgYWxlcnQtYWNjZW50LWJhc2ljLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMyxcbiAgYWxlcnQtYWNjZW50LXByaW1hcnktY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgYWxlcnQtYWNjZW50LWluZm8tY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgYWxlcnQtYWNjZW50LXN1Y2Nlc3MtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgYWxlcnQtYWNjZW50LXdhcm5pbmctY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgYWxlcnQtYWNjZW50LWRhbmdlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGFsZXJ0LWFjY2VudC1jb250cm9sLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG5cbiAgYWxlcnQtb3V0bGluZS13aWR0aDogMXB4LFxuICBhbGVydC1vdXRsaW5lLWJhc2ljLWNvbG9yOiBjb2xvci1iYXNpYy1mb2N1cy1ib3JkZXIsXG4gIGFsZXJ0LW91dGxpbmUtcHJpbWFyeS1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cy1ib3JkZXIsXG4gIGFsZXJ0LW91dGxpbmUtaW5mby1jb2xvcjogY29sb3ItaW5mby1mb2N1cy1ib3JkZXIsXG4gIGFsZXJ0LW91dGxpbmUtc3VjY2Vzcy1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cy1ib3JkZXIsXG4gIGFsZXJ0LW91dGxpbmUtd2FybmluZy1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cy1ib3JkZXIsXG4gIGFsZXJ0LW91dGxpbmUtZGFuZ2VyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMtYm9yZGVyLFxuICBhbGVydC1vdXRsaW5lLWNvbnRyb2wtY29sb3I6IGNvbG9yLWNvbnRyb2wtZm9jdXMtYm9yZGVyLFxuXG4gIGNoYXQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBjaGF0LWJvcmRlcjogbm9uZSxcbiAgY2hhdC1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBjaGF0LXNoYWRvdzogc2hhZG93LFxuICBjaGF0LXBhZGRpbmc6IDFyZW0gMS4yNXJlbSxcbiAgY2hhdC1zY3JvbGxiYXItY29sb3I6IHNjcm9sbGJhci1jb2xvcixcbiAgY2hhdC1zY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcjogc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3IsXG4gIGNoYXQtc2Nyb2xsYmFyLXdpZHRoOiBzY3JvbGxiYXItd2lkdGgsXG5cbiAgY2hhdC10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjaGF0LXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBjaGF0LXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGNoYXQtdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGNoYXQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG5cbiAgY2hhdC1oZWFkZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcbiAgY2hhdC1oZWFkZXItdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBjaGF0LWhlYWRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBjaGF0LWhlYWRlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuXG4gIGNoYXQtdGlueS1oZWlnaHQ6IDEzLjVyZW0sXG4gIGNoYXQtc21hbGwtaGVpZ2h0OiAyMXJlbSxcbiAgY2hhdC1tZWRpdW0taGVpZ2h0OiAyOC41cmVtLFxuICBjaGF0LWxhcmdlLWhlaWdodDogMzZyZW0sXG4gIGNoYXQtZ2lhbnQtaGVpZ2h0OiA0My41cmVtLFxuXG4gIGNoYXQtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBjaGF0LWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNoYXQtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGNoYXQtcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoYXQtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGNoYXQtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoYXQtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGNoYXQtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoYXQtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGNoYXQtd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoYXQtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBjaGF0LWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoYXQtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIGNoYXQtY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG5cbiAgY2hhdC1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICBjaGF0LWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsXG4gIGNoYXQtZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcblxuICBjaGF0LW1lc3NhZ2UtYmFja2dyb3VuZDogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBjaGF0LW1lc3NhZ2UtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGF0LW1lc3NhZ2UtcmVwbHktYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBjaGF0LW1lc3NhZ2UtcmVwbHktdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2hhdC1tZXNzYWdlLWF2YXRhci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy01MDAsXG4gIGNoYXQtbWVzc2FnZS1zZW5kZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBjaGF0LW1lc3NhZ2UtcXVvdGUtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBjaGF0LW1lc3NhZ2UtcXVvdGUtdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBjaGF0LW1lc3NhZ2UtZmlsZS10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGNoYXQtbWVzc2FnZS1maWxlLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuXG4gIHNwaW5uZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgc3Bpbm5lci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWJ1dHRvbi1mb250LWZhbWlseSxcbiAgc3Bpbm5lci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tbWVkaXVtLWZvbnQtc2l6ZSxcbiAgc3Bpbm5lci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgc3Bpbm5lci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1tZWRpdW0tbGluZS1oZWlnaHQsXG5cbiAgc3Bpbm5lci1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIHNwaW5uZXItYmFzaWMtY2lyY2xlLWZpbGxlZC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzcGlubmVyLWJhc2ljLWNpcmNsZS1lbXB0eS1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgc3Bpbm5lci1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgc3Bpbm5lci1wcmltYXJ5LWNpcmNsZS1maWxsZWQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc3Bpbm5lci1wcmltYXJ5LWNpcmNsZS1lbXB0eS1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgc3Bpbm5lci1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgc3Bpbm5lci1pbmZvLWNpcmNsZS1maWxsZWQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgc3Bpbm5lci1pbmZvLWNpcmNsZS1lbXB0eS1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgc3Bpbm5lci1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgc3Bpbm5lci1zdWNjZXNzLWNpcmNsZS1maWxsZWQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgc3Bpbm5lci1zdWNjZXNzLWNpcmNsZS1lbXB0eS1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgc3Bpbm5lci13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgc3Bpbm5lci13YXJuaW5nLWNpcmNsZS1maWxsZWQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgc3Bpbm5lci13YXJuaW5nLWNpcmNsZS1lbXB0eS1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgc3Bpbm5lci1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBzcGlubmVyLWRhbmdlci1jaXJjbGUtZmlsbGVkLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgc3Bpbm5lci1kYW5nZXItY2lyY2xlLWVtcHR5LWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICBzcGlubmVyLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0yMDAsXG4gIHNwaW5uZXItY29udHJvbC1jaXJjbGUtZmlsbGVkLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIHNwaW5uZXItY29udHJvbC1jaXJjbGUtZW1wdHktY29sb3I6IHRyYW5zcGFyZW50LFxuXG4gIHNwaW5uZXItaGVpZ2h0LXRpbnk6IDFyZW0sXG4gIHNwaW5uZXItaGVpZ2h0LXNtYWxsOiAxLjI1cmVtLFxuICBzcGlubmVyLWhlaWdodC1tZWRpdW06IDEuNXJlbSxcbiAgc3Bpbm5lci1oZWlnaHQtbGFyZ2U6IDEuNzVyZW0sXG4gIHNwaW5uZXItaGVpZ2h0LWdpYW50OiAycmVtLFxuXG4gIHN0ZXBwZXItc3RlcC10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHN0ZXBwZXItc3RlcC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgc3RlcHBlci1zdGVwLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHN0ZXBwZXItc3RlcC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgc3RlcHBlci1zdGVwLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBzdGVwcGVyLXN0ZXAtYWN0aXZlLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1hY3RpdmUtY29sb3IsXG4gIHN0ZXBwZXItc3RlcC1jb21wbGV0ZWQtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuXG4gIHN0ZXBwZXItc3RlcC1pbmRleC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBzdGVwcGVyLXN0ZXAtaW5kZXgtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgc3RlcHBlci1zdGVwLWluZGV4LWJvcmRlci13aWR0aDogMXB4LFxuICBzdGVwcGVyLXN0ZXAtaW5kZXgtYm9yZGVyLXJhZGl1czogNTAlLFxuICBzdGVwcGVyLXN0ZXAtaW5kZXgtd2lkdGg6IDJyZW0sXG4gIHN0ZXBwZXItc3RlcC1pbmRleC1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgc3RlcHBlci1zdGVwLWluZGV4LWNvbXBsZXRlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHN0ZXBwZXItc3RlcC1pbmRleC1jb21wbGV0ZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHN0ZXBwZXItc3RlcC1pbmRleC1jb21wbGV0ZWQtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHN0ZXBwZXItY29ubmVjdG9yLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgc3RlcHBlci1jb25uZWN0b3ItY29tcGxldGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc3RlcHBlci1ob3Jpem9udGFsLWNvbm5lY3Rvci1tYXJnaW46IDFyZW0sXG4gIHN0ZXBwZXItdmVydGljYWwtY29ubmVjdG9yLW1hcmdpbjogMXJlbSxcblxuICBzdGVwcGVyLXN0ZXAtY29udGVudC1wYWRkaW5nOiAxLjI1cmVtLFxuXG4gIGFjY29yZGlvbi1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBhY2NvcmRpb24tcGFkZGluZzogMS4yNXJlbSxcbiAgYWNjb3JkaW9uLXNoYWRvdzogc2hhZG93LFxuICBhY2NvcmRpb24taGVhZGVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGFjY29yZGlvbi1oZWFkZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcbiAgYWNjb3JkaW9uLWhlYWRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIGFjY29yZGlvbi1oZWFkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgYWNjb3JkaW9uLWhlYWRlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBhY2NvcmRpb24taGVhZGVyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGFjY29yZGlvbi1oZWFkZXItYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMyxcbiAgYWNjb3JkaW9uLWhlYWRlci1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBhY2NvcmRpb24taGVhZGVyLWJvcmRlci13aWR0aDogMXB4LFxuICBhY2NvcmRpb24taXRlbS1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGFjY29yZGlvbi1pdGVtLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGFjY29yZGlvbi1pdGVtLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBhY2NvcmRpb24taXRlbS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBhY2NvcmRpb24taXRlbS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgYWNjb3JkaW9uLWl0ZW0tdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG5cbiAgbGlzdC1pdGVtLWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIGxpc3QtaXRlbS1kaXZpZGVyLXN0eWxlOiBkaXZpZGVyLXN0eWxlLFxuICBsaXN0LWl0ZW0tZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcbiAgbGlzdC1pdGVtLXBhZGRpbmc6IDFyZW0sXG4gIGxpc3QtaXRlbS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBsaXN0LWl0ZW0tZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBsaXN0LWl0ZW0tZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGxpc3QtaXRlbS1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGxpc3QtaXRlbS1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG5cbiAgY2FsZW5kYXItd2lkdGg6IDIwLjYyNXJlbSxcbiAgY2FsZW5kYXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBjYWxlbmRhci1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBjYWxlbmRhci1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBjYWxlbmRhci1ib3JkZXItd2lkdGg6IDAuMDYyNXJlbSxcbiAgY2FsZW5kYXItYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgY2FsZW5kYXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2FsZW5kYXItdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcbiAgY2FsZW5kYXItdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBjYWxlbmRhci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBjYWxlbmRhci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuXG4gIGNhbGVuZGFyLXBpY2tlci1wYWRkaW5nLXRvcDogMC4yNXJlbSxcbiAgY2FsZW5kYXItcGlja2VyLXBhZGRpbmctYm90dG9tOiAwLjYyNXJlbSxcbiAgY2FsZW5kYXItcGlja2VyLXBhZGRpbmctc3RhcnQ6IDAuNjI1cmVtLFxuICBjYWxlbmRhci1waWNrZXItcGFkZGluZy1lbmQ6IDAuNjI1cmVtLFxuXG4gIGNhbGVuZGFyLW5hdmlnYXRpb24tdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2FsZW5kYXItbmF2aWdhdGlvbi10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWJ1dHRvbi1mb250LWZhbWlseSxcbiAgY2FsZW5kYXItbmF2aWdhdGlvbi10aXRsZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tbWVkaXVtLWZvbnQtc2l6ZSxcbiAgY2FsZW5kYXItbmF2aWdhdGlvbi10aXRsZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgY2FsZW5kYXItbmF2aWdhdGlvbi10aXRsZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1tZWRpdW0tbGluZS1oZWlnaHQsXG4gIGNhbGVuZGFyLW5hdmlnYXRpb24tcGFkZGluZzogMC42MjVyZW0gMC4yNXJlbSxcblxuICBjYWxlbmRhci1jZWxsLWluYWN0aXZlLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcblxuICBjYWxlbmRhci1jZWxsLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgY2FsZW5kYXItY2VsbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGNhbGVuZGFyLWNlbGwtaG92ZXItYm9yZGVyLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGNhbGVuZGFyLWNlbGwtaG92ZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2FsZW5kYXItY2VsbC1ob3Zlci10ZXh0LWZvbnQtc2l6ZTogY2FsZW5kYXItdGV4dC1mb250LXNpemUsXG4gIGNhbGVuZGFyLWNlbGwtaG92ZXItdGV4dC1mb250LXdlaWdodDogY2FsZW5kYXItdGV4dC1mb250LXdlaWdodCxcbiAgY2FsZW5kYXItY2VsbC1ob3Zlci10ZXh0LWxpbmUtaGVpZ2h0OiBjYWxlbmRhci10ZXh0LWxpbmUtaGVpZ2h0LFxuXG4gIGNhbGVuZGFyLWNlbGwtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICBjYWxlbmRhci1jZWxsLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcixcbiAgY2FsZW5kYXItY2VsbC1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjYWxlbmRhci1jZWxsLWFjdGl2ZS10ZXh0LWZvbnQtc2l6ZTogY2FsZW5kYXItdGV4dC1mb250LXNpemUsXG4gIGNhbGVuZGFyLWNlbGwtYWN0aXZlLXRleHQtZm9udC13ZWlnaHQ6IGNhbGVuZGFyLXRleHQtZm9udC13ZWlnaHQsXG4gIGNhbGVuZGFyLWNlbGwtYWN0aXZlLXRleHQtbGluZS1oZWlnaHQ6IGNhbGVuZGFyLXRleHQtbGluZS1oZWlnaHQsXG5cbiAgY2FsZW5kYXItY2VsbC10b2RheS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktdGV4dC1mb250LXNpemU6IGNhbGVuZGFyLXRleHQtZm9udC1zaXplLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LXRleHQtZm9udC13ZWlnaHQ6IGNhbGVuZGFyLXRleHQtZm9udC13ZWlnaHQsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktdGV4dC1saW5lLWhlaWdodDogY2FsZW5kYXItdGV4dC1saW5lLWhlaWdodCxcbiAgY2FsZW5kYXItY2VsbC10b2RheS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgY2FsZW5kYXItY2VsbC10b2RheS1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LXNlbGVjdGVkLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktc2VsZWN0ZWQtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LXNlbGVjdGVkLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktc2VsZWN0ZWQtaG92ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgY2FsZW5kYXItY2VsbC10b2RheS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktc2VsZWN0ZWQtYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgY2FsZW5kYXItY2VsbC10b2RheS1pbi1yYW5nZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktaW4tcmFuZ2UtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgY2FsZW5kYXItY2VsbC10b2RheS1pbi1yYW5nZS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktaW4tcmFuZ2UtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3ZlcixcbiAgY2FsZW5kYXItY2VsbC10b2RheS1pbi1yYW5nZS1ob3Zlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWluLXJhbmdlLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgY2FsZW5kYXItY2VsbC10b2RheS1pbi1yYW5nZS1hY3RpdmUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgY2FsZW5kYXItY2VsbC1zZWxlY3RlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdC1ib3JkZXIsXG4gIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLXRleHQtZm9udC1zaXplOiBjYWxlbmRhci10ZXh0LWZvbnQtc2l6ZSxcbiAgY2FsZW5kYXItY2VsbC1zZWxlY3RlZC10ZXh0LWZvbnQtd2VpZ2h0OiBjYWxlbmRhci10ZXh0LWZvbnQtd2VpZ2h0LFxuICBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLXRleHQtbGluZS1oZWlnaHQ6IGNhbGVuZGFyLXRleHQtbGluZS1oZWlnaHQsXG4gIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgY2FsZW5kYXItY2VsbC1zZWxlY3RlZC1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXItYm9yZGVyLFxuICBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgY2FsZW5kYXItY2VsbC1zZWxlY3RlZC1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZS1ib3JkZXIsXG5cbiAgY2FsZW5kYXItZGF5LWNlbGwtd2lkdGg6IDIuNzVyZW0sXG4gIGNhbGVuZGFyLWRheS1jZWxsLWhlaWdodDogMi43NXJlbSxcbiAgY2FsZW5kYXItbW9udGgtY2VsbC13aWR0aDogNC44MTI1cmVtLFxuICBjYWxlbmRhci1tb250aC1jZWxsLWhlaWdodDogY2FsZW5kYXItZGF5LWNlbGwtaGVpZ2h0LFxuICBjYWxlbmRhci15ZWFyLWNlbGwtd2lkdGg6IGNhbGVuZGFyLW1vbnRoLWNlbGwtd2lkdGgsXG4gIGNhbGVuZGFyLXllYXItY2VsbC1oZWlnaHQ6IGNhbGVuZGFyLW1vbnRoLWNlbGwtaGVpZ2h0LFxuXG4gIGNhbGVuZGFyLXdlZWtkYXktYmFja2dyb3VuZDogdHJhbnNwYXJlbnQsXG4gIGNhbGVuZGFyLXdlZWtkYXktZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgY2FsZW5kYXItd2Vla2RheS1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuICBjYWxlbmRhci13ZWVrZGF5LXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgY2FsZW5kYXItd2Vla2RheS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIGNhbGVuZGFyLXdlZWtkYXktdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgY2FsZW5kYXItd2Vla2RheS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBjYWxlbmRhci13ZWVrZGF5LWhvbGlkYXktdGV4dC1jb2xvcjogY2FsZW5kYXItd2Vla2RheS10ZXh0LWNvbG9yLFxuICBjYWxlbmRhci13ZWVrZGF5LWhlaWdodDogY2FsZW5kYXItZGF5LWNlbGwtaGVpZ2h0LFxuICBjYWxlbmRhci13ZWVrZGF5LXdpZHRoOiBjYWxlbmRhci1kYXktY2VsbC13aWR0aCxcblxuICBjYWxlbmRhci13ZWVrbnVtYmVyLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50LFxuICBjYWxlbmRhci13ZWVrbnVtYmVyLWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcbiAgY2FsZW5kYXItd2Vla251bWJlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBjYWxlbmRhci13ZWVrbnVtYmVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcbiAgY2FsZW5kYXItd2Vla251bWJlci1oZWlnaHQ6IGNhbGVuZGFyLXdlZWtkYXktaGVpZ2h0LFxuICBjYWxlbmRhci13ZWVrbnVtYmVyLXdpZHRoOiBjYWxlbmRhci13ZWVrZGF5LXdpZHRoLFxuXG4gIGNhbGVuZGFyLWxhcmdlLXdpZHRoOiAyMi4zNzVyZW0sXG4gIGNhbGVuZGFyLWRheS1jZWxsLWxhcmdlLXdpZHRoOiAzcmVtLFxuICBjYWxlbmRhci1kYXktY2VsbC1sYXJnZS1oZWlnaHQ6IDNyZW0sXG4gIGNhbGVuZGFyLXdlZWtkYXktbGFyZ2UtaGVpZ2h0OiBjYWxlbmRhci1kYXktY2VsbC1sYXJnZS13aWR0aCxcbiAgY2FsZW5kYXItd2Vla2RheS1sYXJnZS13aWR0aDogY2FsZW5kYXItZGF5LWNlbGwtbGFyZ2UtaGVpZ2h0LFxuICBjYWxlbmRhci13ZWVrbnVtYmVyLWxhcmdlLWhlaWdodDogY2FsZW5kYXItd2Vla2RheS1sYXJnZS1oZWlnaHQsXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItbGFyZ2Utd2lkdGg6IGNhbGVuZGFyLXdlZWtkYXktbGFyZ2Utd2lkdGgsXG4gIGNhbGVuZGFyLW1vbnRoLWNlbGwtbGFyZ2Utd2lkdGg6IDUuMjVyZW0sXG4gIGNhbGVuZGFyLW1vbnRoLWNlbGwtbGFyZ2UtaGVpZ2h0OiBjYWxlbmRhci1kYXktY2VsbC1sYXJnZS1oZWlnaHQsXG4gIGNhbGVuZGFyLXllYXItY2VsbC1sYXJnZS13aWR0aDogY2FsZW5kYXItbW9udGgtY2VsbC1sYXJnZS13aWR0aCxcbiAgY2FsZW5kYXIteWVhci1jZWxsLWxhcmdlLWhlaWdodDogY2FsZW5kYXItbW9udGgtY2VsbC1sYXJnZS1oZWlnaHQsXG5cbiAgb3ZlcmxheS1iYWNrZHJvcC1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzUpLFxuXG4gIHRvb2x0aXAtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci0zLFxuICB0b29sdGlwLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRvb2x0aXAtYm9yZGVyLXN0eWxlOiBkYXNoZWQsXG4gIHRvb2x0aXAtYm9yZGVyLXdpZHRoOiAwLFxuICB0b29sdGlwLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIHRvb2x0aXAtcGFkZGluZzogMC41cmVtIDFyZW0sXG4gIHRvb2x0aXAtdGV4dC1jb2xvcjogdGV4dC1hbHRlcm5hdGUtY29sb3IsXG4gIHRvb2x0aXAtdGV4dC1mb250LWZhbWlseTogdGV4dC1jYXB0aW9uLWZvbnQtZmFtaWx5LFxuICB0b29sdGlwLXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tZm9udC1zaXplLFxuICB0b29sdGlwLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtY2FwdGlvbi1mb250LXdlaWdodCxcbiAgdG9vbHRpcC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWNhcHRpb24tbGluZS1oZWlnaHQsXG4gIHRvb2x0aXAtaWNvbi1oZWlnaHQ6IDFyZW0sXG4gIHRvb2x0aXAtaWNvbi13aWR0aDogMXJlbSxcbiAgdG9vbHRpcC1tYXgtd2lkdGg6IDE2cmVtLFxuXG4gIHRvb2x0aXAtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICB0b29sdGlwLWJhc2ljLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRvb2x0aXAtYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdG9vbHRpcC1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgdG9vbHRpcC1wcmltYXJ5LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRvb2x0aXAtcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvb2x0aXAtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHRvb2x0aXAtaW5mby1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICB0b29sdGlwLWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b29sdGlwLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICB0b29sdGlwLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdG9vbHRpcC1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9vbHRpcC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgdG9vbHRpcC13YXJuaW5nLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRvb2x0aXAtd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvb2x0aXAtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICB0b29sdGlwLWRhbmdlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICB0b29sdGlwLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvb2x0aXAtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIHRvb2x0aXAtY29udHJvbC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICB0b29sdGlwLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICB0b29sdGlwLXNoYWRvdzogc2hhZG93LFxuXG4gIG9wdGlvbi1saXN0LW1heC1oZWlnaHQ6IDIwcmVtLFxuICBvcHRpb24tbGlzdC1zaGFkb3c6IG5vbmUsXG4gIG9wdGlvbi1saXN0LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgb3B0aW9uLWxpc3QtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgb3B0aW9uLWxpc3QtYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW0sXG4gIG9wdGlvbi1saXN0LWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIG9wdGlvbi1saXN0LWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIG9wdGlvbi1saXN0LWFkamFjZW50LWJvcmRlci1jb2xvcjogb3B0aW9uLWxpc3QtYm9yZGVyLWNvbG9yLFxuICBvcHRpb24tbGlzdC1hZGphY2VudC1ib3JkZXItc3R5bGU6IG9wdGlvbi1saXN0LWJvcmRlci1zdHlsZSxcbiAgb3B0aW9uLWxpc3QtYWRqYWNlbnQtYm9yZGVyLXdpZHRoOiBvcHRpb24tbGlzdC1ib3JkZXItd2lkdGgsXG5cbiAgb3B0aW9uLWdyb3VwLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgb3B0aW9uLWdyb3VwLXRpbnktc3RhcnQtcGFkZGluZzogMS4yNXJlbSxcbiAgb3B0aW9uLWdyb3VwLXNtYWxsLXN0YXJ0LXBhZGRpbmc6IDEuNzVyZW0sXG4gIG9wdGlvbi1ncm91cC1tZWRpdW0tc3RhcnQtcGFkZGluZzogMi4yNXJlbSxcbiAgb3B0aW9uLWdyb3VwLWxhcmdlLXN0YXJ0LXBhZGRpbmc6IDIuMjVyZW0sXG4gIG9wdGlvbi1ncm91cC1naWFudC1zdGFydC1wYWRkaW5nOiAyLjc1cmVtLFxuXG4gIG9wdGlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIG9wdGlvbi10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBvcHRpb24tdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcbiAgb3B0aW9uLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWhvdmVyLFxuICBvcHRpb24taG92ZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgb3B0aW9uLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1hY3RpdmUsXG4gIG9wdGlvbi1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgb3B0aW9uLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWZvY3VzLFxuICBvcHRpb24tZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgb3B0aW9uLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgb3B0aW9uLXNlbGVjdGVkLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgb3B0aW9uLXNlbGVjdGVkLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIG9wdGlvbi1zZWxlY3RlZC1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIG9wdGlvbi1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIG9wdGlvbi1zZWxlY3RlZC1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBvcHRpb24tc2VsZWN0ZWQtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgb3B0aW9uLXNlbGVjdGVkLWZvY3VzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgb3B0aW9uLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgb3B0aW9uLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgb3B0aW9uLXRpbnktdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi0yLWZvbnQtc2l6ZSxcbiAgb3B0aW9uLXRpbnktdGV4dC1mb250LXdlaWdodDogdGV4dC1jYXB0aW9uLTItZm9udC13ZWlnaHQsXG4gIG9wdGlvbi10aW55LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi0yLWxpbmUtaGVpZ2h0LFxuICBvcHRpb24tdGlueS1wYWRkaW5nOiBzZWxlY3Qtb3V0bGluZS10aW55LXBhZGRpbmcsXG5cbiAgb3B0aW9uLXNtYWxsLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLFxuICBvcHRpb24tc21hbGwtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0LFxuICBvcHRpb24tc21hbGwtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWxpbmUtaGVpZ2h0LFxuICBvcHRpb24tc21hbGwtcGFkZGluZzogc2VsZWN0LW91dGxpbmUtc21hbGwtcGFkZGluZyxcblxuICBvcHRpb24tbWVkaXVtLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgb3B0aW9uLW1lZGl1bS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBvcHRpb24tbWVkaXVtLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIG9wdGlvbi1tZWRpdW0tcGFkZGluZzogc2VsZWN0LW91dGxpbmUtbWVkaXVtLXBhZGRpbmcsXG5cbiAgb3B0aW9uLWxhcmdlLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgb3B0aW9uLWxhcmdlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIG9wdGlvbi1sYXJnZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBvcHRpb24tbGFyZ2UtcGFkZGluZzogc2VsZWN0LW91dGxpbmUtbGFyZ2UtcGFkZGluZyxcblxuICBvcHRpb24tZ2lhbnQtdGV4dC1mb250LXNpemU6IHRleHQtaGVhZGluZy02LWZvbnQtc2l6ZSxcbiAgb3B0aW9uLWdpYW50LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtaGVhZGluZy02LWZvbnQtd2VpZ2h0LFxuICBvcHRpb24tZ2lhbnQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1oZWFkaW5nLTYtbGluZS1oZWlnaHQsXG4gIG9wdGlvbi1naWFudC1wYWRkaW5nOiBzZWxlY3Qtb3V0bGluZS1naWFudC1wYWRkaW5nLFxuXG4gIHNlbGVjdC1jdXJzb3I6IHBvaW50ZXIsXG4gIHNlbGVjdC1kaXNhYmxlZC1jdXJzb3I6IGRlZmF1bHQsXG4gIHNlbGVjdC1taW4td2lkdGg6IDEzcmVtLFxuICBzZWxlY3Qtb3V0bGluZS13aWR0aDogb3V0bGluZS13aWR0aCxcbiAgc2VsZWN0LW91dGxpbmUtY29sb3I6IG91dGxpbmUtY29sb3IsXG4gIHNlbGVjdC1pY29uLW9mZnNldDogMnJlbSxcblxuICBzZWxlY3QtdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcbiAgc2VsZWN0LXBsYWNlaG9sZGVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuXG4gIHNlbGVjdC10aW55LXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tMi1mb250LXNpemUsXG4gIHNlbGVjdC10aW55LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtY2FwdGlvbi0yLWZvbnQtd2VpZ2h0LFxuICBzZWxlY3QtdGlueS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWNhcHRpb24tMi1saW5lLWhlaWdodCxcbiAgc2VsZWN0LXRpbnktcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgc2VsZWN0LXRpbnktcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHNlbGVjdC10aW55LW1heC13aWR0aDogMjByZW0sXG5cbiAgc2VsZWN0LXNtYWxsLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLFxuICBzZWxlY3Qtc21hbGwtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0LFxuICBzZWxlY3Qtc21hbGwtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWxpbmUtaGVpZ2h0LFxuICBzZWxlY3Qtc21hbGwtcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgc2VsZWN0LXNtYWxsLXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzZWxlY3Qtc21hbGwtbWF4LXdpZHRoOiAyMHJlbSxcblxuICBzZWxlY3QtbWVkaXVtLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgc2VsZWN0LW1lZGl1bS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBzZWxlY3QtbWVkaXVtLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIHNlbGVjdC1tZWRpdW0tcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgc2VsZWN0LW1lZGl1bS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgc2VsZWN0LW1lZGl1bS1tYXgtd2lkdGg6IDIwcmVtLFxuXG4gIHNlbGVjdC1sYXJnZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIHNlbGVjdC1sYXJnZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBzZWxlY3QtbGFyZ2UtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcbiAgc2VsZWN0LWxhcmdlLXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHNlbGVjdC1sYXJnZS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgc2VsZWN0LWxhcmdlLW1heC13aWR0aDogMzByZW0sXG5cbiAgc2VsZWN0LWdpYW50LXRleHQtZm9udC1zaXplOiB0ZXh0LWhlYWRpbmctNi1mb250LXNpemUsXG4gIHNlbGVjdC1naWFudC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWhlYWRpbmctNi1mb250LXdlaWdodCxcbiAgc2VsZWN0LWdpYW50LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtaGVhZGluZy02LWxpbmUtaGVpZ2h0LFxuICBzZWxlY3QtZ2lhbnQtcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgc2VsZWN0LWdpYW50LXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzZWxlY3QtZ2lhbnQtbWF4LXdpZHRoOiAzMHJlbSxcblxuICBzZWxlY3QtcmVjdGFuZ2xlLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIHNlbGVjdC1zZW1pLXJvdW5kLWJvcmRlci1yYWRpdXM6IDAuNzVyZW0sXG4gIHNlbGVjdC1yb3VuZC1ib3JkZXItcmFkaXVzOiAxLjVyZW0sXG5cbiAgc2VsZWN0LW91dGxpbmUtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgc2VsZWN0LW91dGxpbmUtYm9yZGVyLXdpZHRoOiAxcHgsXG5cbiAgc2VsZWN0LW91dGxpbmUtdGlueS1wYWRkaW5nOiAwLjE4NzVyZW0gMXJlbSxcbiAgc2VsZWN0LW91dGxpbmUtc21hbGwtcGFkZGluZzogMC4xODc1cmVtIDFyZW0sXG4gIHNlbGVjdC1vdXRsaW5lLW1lZGl1bS1wYWRkaW5nOiAwLjQzNzVyZW0gMXJlbSxcbiAgc2VsZWN0LW91dGxpbmUtbGFyZ2UtcGFkZGluZzogMC42ODc1cmVtIDFyZW0sXG4gIHNlbGVjdC1vdXRsaW5lLWdpYW50LXBhZGRpbmc6IDAuOTM3NXJlbSAxcmVtLFxuXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWljb24tY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtaG92ZXItYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktaWNvbi1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtaWNvbi1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8taWNvbi1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctaWNvbi1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1pY29uLWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1pY29uLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTMwMCxcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNTAwLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNTAwLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC00MDAsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC01MDAsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtZGlzYWJsZWQtaWNvbi1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWRpc2FibGVkLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcblxuICBzZWxlY3Qtb3V0bGluZS1hZGphY2VudC1ib3JkZXItc3R5bGU6IHNlbGVjdC1vdXRsaW5lLWJvcmRlci1zdHlsZSxcbiAgc2VsZWN0LW91dGxpbmUtYWRqYWNlbnQtYm9yZGVyLXdpZHRoOiBzZWxlY3Qtb3V0bGluZS1ib3JkZXItd2lkdGgsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLW9wZW4tYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWFkamFjZW50LWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LW9wZW4tYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1hZGphY2VudC1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLXByaW1hcnktYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLW9wZW4tYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1hZGphY2VudC1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLW9wZW4tYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1pbmZvLWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1hZGphY2VudC1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLWluZm8tYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLW9wZW4tYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1hZGphY2VudC1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItb3Blbi1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLWRhbmdlci1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1hZGphY2VudC1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLWRhbmdlci1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtb3Blbi1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWFkamFjZW50LWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtY29udHJvbC1ib3JkZXItY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBzZWxlY3QtZmlsbGVkLWJvcmRlci13aWR0aDogMXB4LFxuXG4gIHNlbGVjdC1maWxsZWQtdGlueS1wYWRkaW5nOiAwLjE4NzVyZW0gMXJlbSxcbiAgc2VsZWN0LWZpbGxlZC1zbWFsbC1wYWRkaW5nOiAwLjE4NzVyZW0gMXJlbSxcbiAgc2VsZWN0LWZpbGxlZC1tZWRpdW0tcGFkZGluZzogMC40Mzc1cmVtIDFyZW0sXG4gIHNlbGVjdC1maWxsZWQtbGFyZ2UtcGFkZGluZzogMC42ODc1cmVtIDFyZW0sXG4gIHNlbGVjdC1maWxsZWQtZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDFyZW0sXG5cbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kZWZhdWx0LFxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtZGVmYXVsdC1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtYmFzaWMtaWNvbi1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1mb2N1cyxcbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWZvY3VzLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1ob3ZlcixcbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWhvdmVyLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtYmFzaWMtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cy1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQtYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdC1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1pY29uLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZm9jdXMtYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1ob3Zlci1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLWluZm8tZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cy1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdC1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cy1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXItYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLWljb24tY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1mb2N1cyxcbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1mb2N1cy1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLFxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtY29udHJvbC1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtaGVyby10aW55LXBhZGRpbmc6IDAuMjVyZW0gMXJlbSxcbiAgc2VsZWN0LWhlcm8tc21hbGwtcGFkZGluZzogMC4yNXJlbSAxcmVtLFxuICBzZWxlY3QtaGVyby1tZWRpdW0tcGFkZGluZzogMC41cmVtIDFyZW0sXG4gIHNlbGVjdC1oZXJvLWxhcmdlLXBhZGRpbmc6IDAuNzVyZW0gMXJlbSxcbiAgc2VsZWN0LWhlcm8tZ2lhbnQtcGFkZGluZzogMXJlbSAxcmVtLFxuXG4gIHNlbGVjdC1oZXJvLWJhc2ljLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMjAwLFxuICBzZWxlY3QtaGVyby1iYXNpYy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kZWZhdWx0LFxuICBzZWxlY3QtaGVyby1iYXNpYy1pY29uLWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIHNlbGVjdC1oZXJvLWJhc2ljLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgc2VsZWN0LWhlcm8tYmFzaWMtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLWJhc2ljLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMzAwLFxuICBzZWxlY3QtaGVyby1iYXNpYy1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy00MDAsXG4gIHNlbGVjdC1oZXJvLWJhc2ljLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBzZWxlY3QtaGVyby1iYXNpYy1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1ob3ZlcixcbiAgc2VsZWN0LWhlcm8tYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtaGVyby1iYXNpYy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtaGVyby1iYXNpYy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LTQwMCxcbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktNTAwLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LTMwMCxcbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNDAwLFxuICBzZWxlY3QtaGVyby1zdWNjZXNzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy1pY29uLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby1zdWNjZXNzLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBzZWxlY3QtaGVyby1zdWNjZXNzLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy01MDAsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cyxcbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtMzAwLFxuICBzZWxlY3QtaGVyby1zdWNjZXNzLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtaGVyby1zdWNjZXNzLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtaGVyby1pbmZvLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby00MDAsXG4gIHNlbGVjdC1oZXJvLWluZm8tcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBzZWxlY3QtaGVyby1pbmZvLWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWhlcm8taW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1oZXJvLWluZm8tcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLWluZm8tZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLTUwMCxcbiAgc2VsZWN0LWhlcm8taW5mby1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLFxuICBzZWxlY3QtaGVyby1pbmZvLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby0zMDAsXG4gIHNlbGVjdC1oZXJvLWluZm8taG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcbiAgc2VsZWN0LWhlcm8taW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1oZXJvLWluZm8tZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LWhlcm8taW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLTQwMCxcbiAgc2VsZWN0LWhlcm8td2FybmluZy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWhlcm8td2FybmluZy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8td2FybmluZy1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctNTAwLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLTMwMCxcbiAgc2VsZWN0LWhlcm8td2FybmluZy1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWhlcm8td2FybmluZy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLTQwMCxcbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBzZWxlY3QtaGVyby1kYW5nZXItaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby1kYW5nZXItcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci01MDAsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci0zMDAsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtaGVyby1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtaGVyby1jb250cm9sLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBzZWxlY3QtaGVyby1jb250cm9sLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgc2VsZWN0LWhlcm8tY29udHJvbC1pY29uLWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBzZWxlY3QtaGVyby1jb250cm9sLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcblxuICBzZWxlY3QtaGVyby1jb250cm9sLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMjAwLFxuICBzZWxlY3QtaGVyby1jb250cm9sLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZm9jdXMsXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1ob3ZlcixcbiAgc2VsZWN0LWhlcm8tY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LWhlcm8tY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGRhdGVwaWNrZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBkYXRlcGlja2VyLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGRhdGVwaWNrZXItYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgZGF0ZXBpY2tlci1ib3JkZXItd2lkdGg6IDAuMDYyNXJlbSxcbiAgZGF0ZXBpY2tlci1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBkYXRlcGlja2VyLXNoYWRvdzogbm9uZSxcblxuICB0aW1lcGlja2VyLWNlbGwtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdGltZXBpY2tlci1jZWxsLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgdGltZXBpY2tlci1jZWxsLWhvdmVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRpbWVwaWNrZXItY2VsbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1mb2N1cyxcbiAgdGltZXBpY2tlci1jZWxsLWZvY3VzLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRpbWVwaWNrZXItY2VsbC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0aW1lcGlja2VyLWNlbGwtYWN0aXZlLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdGltZXBpY2tlci1jZWxsLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgdGltZXBpY2tlci1jZWxsLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG4gIHRpbWVwaWNrZXItY2VsbC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICB0aW1lcGlja2VyLWNlbGwtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgdGltZXBpY2tlci1jZWxsLWhlaWdodDogMi43NXJlbSxcbiAgdGltZXBpY2tlci1oZWFkZXItY2VsbC10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHRpbWVwaWNrZXItaGVhZGVyLWNlbGwtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICB0aW1lcGlja2VyLWhlYWRlci1jZWxsLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG4gIHRpbWVwaWNrZXItaGVhZGVyLWNlbGwtaGVpZ2h0OiAyLjc1cmVtLFxuICB0aW1lcGlja2VyLWhlYWRlci1jZWxsLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIHRpbWVwaWNrZXItaGVhZGVyLWNlbGwtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgdGltZXBpY2tlci1ib3JkZXItY29sb3I6IGRhdGVwaWNrZXItYm9yZGVyLWNvbG9yLFxuICB0aW1lcGlja2VyLWJvcmRlci1zdHlsZTogZGF0ZXBpY2tlci1ib3JkZXItc3R5bGUsXG4gIHRpbWVwaWNrZXItYm9yZGVyLXdpZHRoOiBkYXRlcGlja2VyLWJvcmRlci13aWR0aCxcbiAgdGltZXBpY2tlci1zY3JvbGxiYXItY29sb3I6IHNjcm9sbGJhci1jb2xvcixcbiAgdGltZXBpY2tlci1zY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcjogc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3IsXG4gIHRpbWVwaWNrZXItc2Nyb2xsYmFyLXdpZHRoOiBzY3JvbGxiYXItd2lkdGgsXG4gIHRpbWVwaWNrZXItc2luZ2xlLWNvbHVtbi13aWR0aDogNXJlbSxcbiAgdGltZXBpY2tlci1tdWx0aXBsZS1jb2x1bW4td2lkdGg6IDEzLjg3NXJlbSxcbiAgdGltZXBpY2tlci10aXRsZS1oZWlnaHQ6IDMuNzVyZW0sXG4gIHRpbWVwaWNrZXItdGl0bGUtcGFkZGluZzogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHRpbWVwaWNrZXItY29udGFpbmVyLXdpZHRoOiAyMHJlbSxcbiAgdGltZXBpY2tlci1jb250YWluZXItaGVpZ2h0OiAyNi4xODc1cmVtLFxuXG4gIHJhZGlvLXdpZHRoOiAxLjI1cmVtLFxuICByYWRpby1oZWlnaHQ6IDEuMjVyZW0sXG4gIHJhZGlvLWJvcmRlci1zdHlsZTogc29saWQsXG4gIHJhZGlvLWJvcmRlci13aWR0aDogMXB4LFxuICByYWRpby10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLTItZm9udC1mYW1pbHksXG4gIHJhZGlvLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLFxuICByYWRpby10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItZm9udC13ZWlnaHQsXG4gIHJhZGlvLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodCxcbiAgcmFkaW8tb3V0bGluZS1jb2xvcjogb3V0bGluZS1jb2xvcixcbiAgcmFkaW8tb3V0bGluZS13aWR0aDogb3V0bGluZS13aWR0aCxcblxuICByYWRpby1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICByYWRpby1iYXNpYy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICByYWRpby1iYXNpYy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1iYXNpYy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8tYmFzaWMtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHJhZGlvLWJhc2ljLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHJhZGlvLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHJhZGlvLWJhc2ljLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWJhc2ljLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcixcbiAgcmFkaW8tYmFzaWMtZm9jdXMtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICByYWRpby1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLFxuICByYWRpby1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICByYWRpby1iYXNpYy1ob3Zlci1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHJhZGlvLWJhc2ljLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWJhc2ljLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcixcbiAgcmFkaW8tYmFzaWMtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLFxuICByYWRpby1iYXNpYy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLWJhc2ljLWFjdGl2ZS1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICByYWRpby1iYXNpYy1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tYmFzaWMtYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICByYWRpby1iYXNpYy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgcmFkaW8tYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgcmFkaW8tYmFzaWMtZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tYmFzaWMtZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgcmFkaW8tYmFzaWMtZGlzYWJsZWQtY2hlY2tlZC1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICByYWRpby1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHJhZGlvLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgcmFkaW8tcHJpbWFyeS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1wcmltYXJ5LWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby1wcmltYXJ5LWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICByYWRpby1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHJhZGlvLXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cyxcbiAgcmFkaW8tcHJpbWFyeS1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1wcmltYXJ5LWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcixcbiAgcmFkaW8tcHJpbWFyeS1mb2N1cy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIHJhZGlvLXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3ZlcixcbiAgcmFkaW8tcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICByYWRpby1wcmltYXJ5LWhvdmVyLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgcmFkaW8tcHJpbWFyeS1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1wcmltYXJ5LWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcixcbiAgcmFkaW8tcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLFxuICByYWRpby1wcmltYXJ5LWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1wcmltYXJ5LWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUtYm9yZGVyLFxuICByYWRpby1wcmltYXJ5LWFjdGl2ZS1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICByYWRpby1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICByYWRpby1wcmltYXJ5LWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICByYWRpby1wcmltYXJ5LWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHJhZGlvLXByaW1hcnktZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tcHJpbWFyeS1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICByYWRpby1wcmltYXJ5LWRpc2FibGVkLWNoZWNrZWQtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgcmFkaW8tc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICByYWRpby1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8tc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHJhZGlvLXN1Y2Nlc3MtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tc3VjY2Vzcy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8tc3VjY2Vzcy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgcmFkaW8tc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICByYWRpby1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHJhZGlvLXN1Y2Nlc3MtZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tc3VjY2Vzcy1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cy1ib3JkZXIsXG4gIHJhZGlvLXN1Y2Nlc3MtZm9jdXMtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICByYWRpby1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHJhZGlvLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgcmFkaW8tc3VjY2Vzcy1ob3Zlci1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIHJhZGlvLXN1Y2Nlc3MtaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tc3VjY2Vzcy1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3Zlci1ib3JkZXIsXG4gIHJhZGlvLXN1Y2Nlc3MtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlLFxuICByYWRpby1zdWNjZXNzLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgcmFkaW8tc3VjY2Vzcy1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tc3VjY2Vzcy1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlcixcbiAgcmFkaW8tc3VjY2Vzcy1hY3RpdmUtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZSxcbiAgcmFkaW8tc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgcmFkaW8tc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgcmFkaW8tc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICByYWRpby1zdWNjZXNzLWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLXN1Y2Nlc3MtZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgcmFkaW8tc3VjY2Vzcy1kaXNhYmxlZC1jaGVja2VkLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIHJhZGlvLWluZm8tdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgcmFkaW8taW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHJhZGlvLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1kZWZhdWx0LFxuICByYWRpby1pbmZvLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWluZm8tY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdC1ib3JkZXIsXG4gIHJhZGlvLWluZm8taW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHJhZGlvLWluZm8tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1cyxcbiAgcmFkaW8taW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICByYWRpby1pbmZvLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWluZm8tZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZm9jdXMtYm9yZGVyLFxuICByYWRpby1pbmZvLWZvY3VzLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgcmFkaW8taW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyLFxuICByYWRpby1pbmZvLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHJhZGlvLWluZm8taG92ZXItaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICByYWRpby1pbmZvLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWluZm8taG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXItYm9yZGVyLFxuICByYWRpby1pbmZvLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgcmFkaW8taW5mby1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLWluZm8tYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWluZm8tYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLWluZm8tYWN0aXZlLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItaW5mby1hY3RpdmUsXG4gIHJhZGlvLWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHJhZGlvLWluZm8tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIHJhZGlvLWluZm8tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgcmFkaW8taW5mby1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1pbmZvLWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIHJhZGlvLWluZm8tZGlzYWJsZWQtY2hlY2tlZC1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICByYWRpby13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHJhZGlvLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgcmFkaW8td2FybmluZy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby13YXJuaW5nLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby13YXJuaW5nLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICByYWRpby13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHJhZGlvLXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgcmFkaW8td2FybmluZy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby13YXJuaW5nLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLWJvcmRlcixcbiAgcmFkaW8td2FybmluZy1mb2N1cy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXG4gIHJhZGlvLXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1ob3ZlcixcbiAgcmFkaW8td2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICByYWRpby13YXJuaW5nLWhvdmVyLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgcmFkaW8td2FybmluZy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby13YXJuaW5nLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLWJvcmRlcixcbiAgcmFkaW8td2FybmluZy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHJhZGlvLXdhcm5pbmctYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICByYWRpby13YXJuaW5nLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby13YXJuaW5nLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1hY3RpdmUtYm9yZGVyLFxuICByYWRpby13YXJuaW5nLWFjdGl2ZS1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLFxuICByYWRpby13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICByYWRpby13YXJuaW5nLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICByYWRpby13YXJuaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHJhZGlvLXdhcm5pbmctZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8td2FybmluZy1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICByYWRpby13YXJuaW5nLWRpc2FibGVkLWNoZWNrZWQtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgcmFkaW8tZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHJhZGlvLWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8tZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0LFxuICByYWRpby1kYW5nZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tZGFuZ2VyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdC1ib3JkZXIsXG4gIHJhZGlvLWRhbmdlci1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICByYWRpby1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLFxuICByYWRpby1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICByYWRpby1kYW5nZXItZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tZGFuZ2VyLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMtYm9yZGVyLFxuICByYWRpby1kYW5nZXItZm9jdXMtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIHJhZGlvLWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHJhZGlvLWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHJhZGlvLWRhbmdlci1ob3Zlci1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgcmFkaW8tZGFuZ2VyLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWRhbmdlci1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLWJvcmRlcixcbiAgcmFkaW8tZGFuZ2VyLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlLFxuICByYWRpby1kYW5nZXItYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLWRhbmdlci1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tZGFuZ2VyLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLWRhbmdlci1hY3RpdmUtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1kYW5nZXItYWN0aXZlLFxuICByYWRpby1kYW5nZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHJhZGlvLWRhbmdlci1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgcmFkaW8tZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHJhZGlvLWRhbmdlci1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1kYW5nZXItZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgcmFkaW8tZGFuZ2VyLWRpc2FibGVkLWNoZWNrZWQtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgcmFkaW8tY29udHJvbC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHJhZGlvLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LFxuICByYWRpby1jb250cm9sLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8tY29udHJvbC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1jb250cm9sLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby1jb250cm9sLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICByYWRpby1jb250cm9sLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHJhZGlvLWNvbnRyb2wtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgcmFkaW8tY29udHJvbC1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1jb250cm9sLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLWJvcmRlcixcbiAgcmFkaW8tY29udHJvbC1mb2N1cy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWNvbnRyb2wtZm9jdXMsXG4gIHJhZGlvLWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3ZlcixcbiAgcmFkaW8tY29udHJvbC1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICByYWRpby1jb250cm9sLWhvdmVyLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItY29udHJvbC1ob3ZlcixcbiAgcmFkaW8tY29udHJvbC1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1jb250cm9sLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLWJvcmRlcixcbiAgcmFkaW8tY29udHJvbC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHJhZGlvLWNvbnRyb2wtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICByYWRpby1jb250cm9sLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1jb250cm9sLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1hY3RpdmUtYm9yZGVyLFxuICByYWRpby1jb250cm9sLWFjdGl2ZS1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWNvbnRyb2wtYWN0aXZlLFxuICByYWRpby1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHJhZGlvLWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgcmFkaW8tY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHJhZGlvLWNvbnRyb2wtZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tY29udHJvbC1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICByYWRpby1jb250cm9sLWRpc2FibGVkLWNoZWNrZWQtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgdHJlZS1ncmlkLWNlbGwtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHRyZWUtZ3JpZC1jZWxsLWJvcmRlci1zdHlsZTogc29saWQsXG4gIHRyZWUtZ3JpZC1jZWxsLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTIsXG4gIHRyZWUtZ3JpZC1yb3ctbWluLWhlaWdodDogMnJlbSxcbiAgdHJlZS1ncmlkLWNlbGwtcGFkZGluZzogMC44NzVyZW0gMS4yNXJlbSxcblxuICB0cmVlLWdyaWQtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdHJlZS1ncmlkLWhlYWRlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0cmVlLWdyaWQtaGVhZGVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG4gIHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICB0cmVlLWdyaWQtaGVhZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcblxuICB0cmVlLWdyaWQtZm9vdGVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdHJlZS1ncmlkLWZvb3Rlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0cmVlLWdyaWQtZm9vdGVyLXRleHQtZm9udC1mYW1pbHk6IHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1mb250LWZhbWlseSxcbiAgdHJlZS1ncmlkLWZvb3Rlci10ZXh0LWZvbnQtc2l6ZTogdHJlZS1ncmlkLWhlYWRlci10ZXh0LWZvbnQtc2l6ZSxcbiAgdHJlZS1ncmlkLWZvb3Rlci10ZXh0LWZvbnQtd2VpZ2h0OiB0cmVlLWdyaWQtaGVhZGVyLXRleHQtZm9udC13ZWlnaHQsXG4gIHRyZWUtZ3JpZC1mb290ZXItdGV4dC1saW5lLWhlaWdodDogdHJlZS1ncmlkLWhlYWRlci10ZXh0LWxpbmUtaGVpZ2h0LFxuXG4gIHRyZWUtZ3JpZC1yb3ctYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0cmVlLWdyaWQtcm93LWV2ZW4tYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0cmVlLWdyaWQtcm93LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdHJlZS1ncmlkLXJvdy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0cmVlLWdyaWQtcm93LXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICB0cmVlLWdyaWQtcm93LXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHRyZWUtZ3JpZC1yb3ctdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHRyZWUtZ3JpZC1yb3ctdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG5cbiAgdHJlZS1ncmlkLXNvcnQtaGVhZGVyLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdHJlZS1ncmlkLXNvcnQtaGVhZGVyLWJ1dHRvbi1ib3JkZXI6IG5vbmUsXG4gIHRyZWUtZ3JpZC1zb3J0LWhlYWRlci1idXR0b24tcGFkZGluZzogMCxcblxuICBpY29uLWZvbnQtc2l6ZTogMS4yNXJlbSxcbiAgaWNvbi1saW5lLWhlaWdodDogMSxcbiAgaWNvbi13aWR0aDogMWVtLFxuICBpY29uLWhlaWdodDogMWVtLFxuICBpY29uLXN2Zy12ZXJ0aWNhbC1hbGlnbjogdG9wLFxuICBpY29uLWJhc2ljLWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGljb24tcHJpbWFyeS1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBpY29uLWluZm8tY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgaWNvbi1zdWNjZXNzLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGljb24td2FybmluZy1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBpY29uLWRhbmdlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGljb24tY29udHJvbC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuXG4gIHRhZy10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuICB0YWctdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUsXG4gIHRhZy1ib3JkZXItd2lkdGg6IDAuMDYyNXJlbSxcbiAgdGFnLWJvcmRlci1zdHlsZTogc29saWQsXG4gIHRhZy1ib3JkZXItcmFkaXVzOiAxLjVyZW0sXG5cbiAgdGFnLXRpbnktdGV4dC1mb250LXNpemU6IGlucHV0LXRpbnktdGV4dC1mb250LXNpemUsXG4gIHRhZy10aW55LXRleHQtZm9udC13ZWlnaHQ6IGlucHV0LXRpbnktdGV4dC1mb250LXdlaWdodCxcbiAgdGFnLXRpbnktdGV4dC1saW5lLWhlaWdodDogaW5wdXQtdGlueS10ZXh0LWxpbmUtaGVpZ2h0LFxuICB0YWctdGlueS1wYWRkaW5nOiAwLjA2MjVyZW0gMC45Mzc1cmVtLFxuICB0YWctdGlueS1jbG9zZS1vZmZzZXQ6IDAuNjI1cmVtLFxuXG4gIHRhZy1zbWFsbC10ZXh0LWZvbnQtc2l6ZTogaW5wdXQtc21hbGwtdGV4dC1mb250LXNpemUsXG4gIHRhZy1zbWFsbC10ZXh0LWZvbnQtd2VpZ2h0OiBpbnB1dC1zbWFsbC10ZXh0LWZvbnQtd2VpZ2h0LFxuICB0YWctc21hbGwtdGV4dC1saW5lLWhlaWdodDogaW5wdXQtc21hbGwtdGV4dC1saW5lLWhlaWdodCxcbiAgdGFnLXNtYWxsLXBhZGRpbmc6IDAuMDYyNXJlbSAwLjkzNzVyZW0sXG4gIHRhZy1zbWFsbC1jbG9zZS1vZmZzZXQ6IDAuNjI1cmVtLFxuXG4gIHRhZy1tZWRpdW0tdGV4dC1mb250LXNpemU6IGlucHV0LW1lZGl1bS10ZXh0LWZvbnQtc2l6ZSxcbiAgdGFnLW1lZGl1bS10ZXh0LWZvbnQtd2VpZ2h0OiBpbnB1dC1tZWRpdW0tdGV4dC1mb250LXdlaWdodCxcbiAgdGFnLW1lZGl1bS10ZXh0LWxpbmUtaGVpZ2h0OiBpbnB1dC1tZWRpdW0tdGV4dC1saW5lLWhlaWdodCxcbiAgdGFnLW1lZGl1bS1wYWRkaW5nOiAwLjE4NzVyZW0gMC45Mzc1cmVtLFxuICB0YWctbWVkaXVtLWNsb3NlLW9mZnNldDogMC42MjVyZW0sXG5cbiAgdGFnLWxhcmdlLXRleHQtZm9udC1zaXplOiBpbnB1dC1sYXJnZS10ZXh0LWZvbnQtc2l6ZSxcbiAgdGFnLWxhcmdlLXRleHQtZm9udC13ZWlnaHQ6IGlucHV0LWxhcmdlLXRleHQtZm9udC13ZWlnaHQsXG4gIHRhZy1sYXJnZS10ZXh0LWxpbmUtaGVpZ2h0OiBpbnB1dC1sYXJnZS10ZXh0LWxpbmUtaGVpZ2h0LFxuICB0YWctbGFyZ2UtcGFkZGluZzogMC4zMTI1cmVtIDAuOTM3NXJlbSxcbiAgdGFnLWxhcmdlLWNsb3NlLW9mZnNldDogMC42MjVyZW0sXG5cbiAgdGFnLWdpYW50LXRleHQtZm9udC1zaXplOiBpbnB1dC1naWFudC10ZXh0LWZvbnQtc2l6ZSxcbiAgdGFnLWdpYW50LXRleHQtZm9udC13ZWlnaHQ6IGlucHV0LWdpYW50LXRleHQtZm9udC13ZWlnaHQsXG4gIHRhZy1naWFudC10ZXh0LWxpbmUtaGVpZ2h0OiBpbnB1dC1naWFudC10ZXh0LWxpbmUtaGVpZ2h0LFxuICB0YWctZ2lhbnQtcGFkZGluZzogMC40Mzc1cmVtIDAuOTM3NXJlbSxcbiAgdGFnLWdpYW50LWNsb3NlLW9mZnNldDogMC42MjVyZW0sXG5cbiAgdGFnLWZpbGxlZC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kZWZhdWx0LFxuICB0YWctZmlsbGVkLWJhc2ljLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtZGVmYXVsdC1ib3JkZXIsXG4gIHRhZy1maWxsZWQtYmFzaWMtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICB0YWctZmlsbGVkLWJhc2ljLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1mb2N1cyxcbiAgdGFnLWZpbGxlZC1iYXNpYy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1mb2N1cy1ib3JkZXIsXG4gIHRhZy1maWxsZWQtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtaG92ZXIsXG4gIHRhZy1maWxsZWQtYmFzaWMtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1ob3Zlci1ib3JkZXIsXG4gIHRhZy1maWxsZWQtYmFzaWMtc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtYWN0b3ZlLFxuICB0YWctZmlsbGVkLWJhc2ljLXNlbGVjdGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtYWN0aXZlLWJvcmRlcixcblxuICB0YWctZmlsbGVkLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0YWctZmlsbGVkLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLFxuICB0YWctZmlsbGVkLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0YWctZmlsbGVkLXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIHRhZy1maWxsZWQtcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcixcbiAgdGFnLWZpbGxlZC1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHRhZy1maWxsZWQtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXItYm9yZGVyLFxuICB0YWctZmlsbGVkLXByaW1hcnktc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RvdmUsXG4gIHRhZy1maWxsZWQtcHJpbWFyeS1zZWxlY3RlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcixcblxuICB0YWctZmlsbGVkLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICB0YWctZmlsbGVkLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQtYm9yZGVyLFxuICB0YWctZmlsbGVkLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0YWctZmlsbGVkLXN1Y2Nlc3MtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIHRhZy1maWxsZWQtc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLWJvcmRlcixcbiAgdGFnLWZpbGxlZC1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIHRhZy1maWxsZWQtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLFxuICB0YWctZmlsbGVkLXN1Y2Nlc3Mtc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RvdmUsXG4gIHRhZy1maWxsZWQtc3VjY2Vzcy1zZWxlY3RlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlcixcblxuICB0YWctZmlsbGVkLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICB0YWctZmlsbGVkLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQtYm9yZGVyLFxuICB0YWctZmlsbGVkLWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0YWctZmlsbGVkLWluZm8tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIHRhZy1maWxsZWQtaW5mby1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLWJvcmRlcixcbiAgdGFnLWZpbGxlZC1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG4gIHRhZy1maWxsZWQtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXItYm9yZGVyLFxuICB0YWctZmlsbGVkLWluZm8tc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1hY3RvdmUsXG4gIHRhZy1maWxsZWQtaW5mby1zZWxlY3RlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLWJvcmRlcixcblxuICB0YWctZmlsbGVkLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICB0YWctZmlsbGVkLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQtYm9yZGVyLFxuICB0YWctZmlsbGVkLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0YWctZmlsbGVkLXdhcm5pbmctYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXG4gIHRhZy1maWxsZWQtd2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLWJvcmRlcixcbiAgdGFnLWZpbGxlZC13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIHRhZy1maWxsZWQtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXItYm9yZGVyLFxuICB0YWctZmlsbGVkLXdhcm5pbmctc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1hY3RvdmUsXG4gIHRhZy1maWxsZWQtd2FybmluZy1zZWxlY3RlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLWJvcmRlcixcblxuICB0YWctZmlsbGVkLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgdGFnLWZpbGxlZC1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdC1ib3JkZXIsXG4gIHRhZy1maWxsZWQtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdGFnLWZpbGxlZC1kYW5nZXItYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cyxcbiAgdGFnLWZpbGxlZC1kYW5nZXItYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLWJvcmRlcixcbiAgdGFnLWZpbGxlZC1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuICB0YWctZmlsbGVkLWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3Zlci1ib3JkZXIsXG4gIHRhZy1maWxsZWQtZGFuZ2VyLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1hY3RvdmUsXG4gIHRhZy1maWxsZWQtZGFuZ2VyLXNlbGVjdGVkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZS1ib3JkZXIsXG5cbiAgdGFnLWZpbGxlZC1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgdGFnLWZpbGxlZC1jb250cm9sLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LWJvcmRlcixcbiAgdGFnLWZpbGxlZC1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgdGFnLWZpbGxlZC1jb250cm9sLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLFxuICB0YWctZmlsbGVkLWNvbnRyb2wtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1ob3Zlci1ib3JkZXIsXG4gIHRhZy1maWxsZWQtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLFxuICB0YWctZmlsbGVkLWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLWJvcmRlcixcbiAgdGFnLWZpbGxlZC1jb250cm9sLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtYWN0b3ZlLFxuICB0YWctZmlsbGVkLWNvbnRyb2wtc2VsZWN0ZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWFjdGl2ZS1ib3JkZXIsXG5cbiAgdGFnLW91dGxpbmUtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgdGFnLW91dGxpbmUtYmFzaWMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgdGFnLW91dGxpbmUtYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICB0YWctb3V0bGluZS1iYXNpYy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHRhZy1vdXRsaW5lLWJhc2ljLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgdGFnLW91dGxpbmUtYmFzaWMtYWN0aXZlLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgdGFnLW91dGxpbmUtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHRhZy1vdXRsaW5lLWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICB0YWctb3V0bGluZS1iYXNpYy1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHRhZy1vdXRsaW5lLWJhc2ljLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgdGFnLW91dGxpbmUtYmFzaWMtc2VsZWN0ZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICB0YWctb3V0bGluZS1iYXNpYy1zZWxlY3RlZC10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG5cbiAgdGFnLW91dGxpbmUtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHRhZy1vdXRsaW5lLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICB0YWctb3V0bGluZS1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgdGFnLW91dGxpbmUtcHJpbWFyeS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cyxcbiAgdGFnLW91dGxpbmUtcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgdGFnLW91dGxpbmUtcHJpbWFyeS1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICB0YWctb3V0bGluZS1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHRhZy1vdXRsaW5lLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgdGFnLW91dGxpbmUtcHJpbWFyeS1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIHRhZy1vdXRsaW5lLXByaW1hcnktc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHRhZy1vdXRsaW5lLXByaW1hcnktc2VsZWN0ZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRhZy1vdXRsaW5lLXByaW1hcnktc2VsZWN0ZWQtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuXG4gIHRhZy1vdXRsaW5lLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICB0YWctb3V0bGluZS1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgdGFnLW91dGxpbmUtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LXN1Y2Nlc3MtY29sb3IsXG4gIHRhZy1vdXRsaW5lLXN1Y2Nlc3MtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHRhZy1vdXRsaW5lLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHRhZy1vdXRsaW5lLXN1Y2Nlc3MtYWN0aXZlLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1jb2xvcixcbiAgdGFnLW91dGxpbmUtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyLFxuICB0YWctb3V0bGluZS1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHRhZy1vdXRsaW5lLXN1Y2Nlc3MtaG92ZXItdGV4dC1jb2xvcjogdGV4dC1zdWNjZXNzLWNvbG9yLFxuICB0YWctb3V0bGluZS1zdWNjZXNzLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlLFxuICB0YWctb3V0bGluZS1zdWNjZXNzLXNlbGVjdGVkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICB0YWctb3V0bGluZS1zdWNjZXNzLXNlbGVjdGVkLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1jb2xvcixcblxuICB0YWctb3V0bGluZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgdGFnLW91dGxpbmUtaW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHRhZy1vdXRsaW5lLWluZm8tdGV4dC1jb2xvcjogdGV4dC1pbmZvLWNvbG9yLFxuICB0YWctb3V0bGluZS1pbmZvLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWZvY3VzLFxuICB0YWctb3V0bGluZS1pbmZvLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICB0YWctb3V0bGluZS1pbmZvLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tY29sb3IsXG4gIHRhZy1vdXRsaW5lLWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3ZlcixcbiAgdGFnLW91dGxpbmUtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICB0YWctb3V0bGluZS1pbmZvLWhvdmVyLXRleHQtY29sb3I6IHRleHQtaW5mby1jb2xvcixcbiAgdGFnLW91dGxpbmUtaW5mby1zZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgdGFnLW91dGxpbmUtaW5mby1zZWxlY3RlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgdGFnLW91dGxpbmUtaW5mby1zZWxlY3RlZC10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tY29sb3IsXG5cbiAgdGFnLW91dGxpbmUtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHRhZy1vdXRsaW5lLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICB0YWctb3V0bGluZS13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtd2FybmluZy1jb2xvcixcbiAgdGFnLW91dGxpbmUtd2FybmluZy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1cyxcbiAgdGFnLW91dGxpbmUtd2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgdGFnLW91dGxpbmUtd2FybmluZy1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWNvbG9yLFxuICB0YWctb3V0bGluZS13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHRhZy1vdXRsaW5lLXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgdGFnLW91dGxpbmUtd2FybmluZy1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LXdhcm5pbmctY29sb3IsXG4gIHRhZy1vdXRsaW5lLXdhcm5pbmctc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHRhZy1vdXRsaW5lLXdhcm5pbmctc2VsZWN0ZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRhZy1vdXRsaW5lLXdhcm5pbmctc2VsZWN0ZWQtdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWNvbG9yLFxuXG4gIHRhZy1vdXRsaW5lLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgdGFnLW91dGxpbmUtZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICB0YWctb3V0bGluZS1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1kYW5nZXItY29sb3IsXG4gIHRhZy1vdXRsaW5lLWRhbmdlci1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLFxuICB0YWctb3V0bGluZS1kYW5nZXItYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgdGFnLW91dGxpbmUtZGFuZ2VyLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWRhbmdlci1jb2xvcixcbiAgdGFnLW91dGxpbmUtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3ZlcixcbiAgdGFnLW91dGxpbmUtZGFuZ2VyLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgdGFnLW91dGxpbmUtZGFuZ2VyLWhvdmVyLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWNvbG9yLFxuICB0YWctb3V0bGluZS1kYW5nZXItc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgdGFnLW91dGxpbmUtZGFuZ2VyLXNlbGVjdGVkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRhZy1vdXRsaW5lLWRhbmdlci1zZWxlY3RlZC10ZXh0LWNvbG9yOiB0ZXh0LWRhbmdlci1jb2xvcixcblxuICB0YWctb3V0bGluZS1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgdGFnLW91dGxpbmUtY29udHJvbC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHRhZy1vdXRsaW5lLWNvbnRyb2wtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0YWctb3V0bGluZS1jb250cm9sLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLFxuICB0YWctb3V0bGluZS1jb250cm9sLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICB0YWctb3V0bGluZS1jb250cm9sLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRhZy1vdXRsaW5lLWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3ZlcixcbiAgdGFnLW91dGxpbmUtY29udHJvbC1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICB0YWctb3V0bGluZS1jb250cm9sLWhvdmVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdGFnLW91dGxpbmUtY29udHJvbC1zZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgdGFnLW91dGxpbmUtY29udHJvbC1zZWxlY3RlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgdGFnLW91dGxpbmUtY29udHJvbC1zZWxlY3RlZC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgdGFnLWxpc3QtdGlueS10YWctb2Zmc2V0OiAwLjA2MjVyZW0sXG4gIHRhZy1saXN0LXNtYWxsLXRhZy1vZmZzZXQ6IDAuMTI1cmVtLFxuICB0YWctbGlzdC1tZWRpdW0tdGFnLW9mZnNldDogMC4yNXJlbSxcbiAgdGFnLWxpc3QtbGFyZ2UtdGFnLW9mZnNldDogMC4zNzVyZW0sXG4gIHRhZy1saXN0LWdpYW50LXRhZy1vZmZzZXQ6IDAuNXJlbSxcblxuICB0YWctbGlzdC13aXRoLWlucHV0LXRpbnktcGFkZGluZzogMC4wNjI1cmVtIDFyZW0sXG4gIHRhZy1saXN0LXdpdGgtaW5wdXQtc21hbGwtcGFkZGluZzogMC4wNjI1cmVtIDFyZW0sXG4gIHRhZy1saXN0LXdpdGgtaW5wdXQtbWVkaXVtLXBhZGRpbmc6IDAuMTg3NXJlbSAxcmVtLFxuICB0YWctbGlzdC13aXRoLWlucHV0LWxhcmdlLXBhZGRpbmc6IDAuMzEyNXJlbSAxcmVtLFxuICB0YWctbGlzdC13aXRoLWlucHV0LWdpYW50LXBhZGRpbmc6IDAuNDM3NXJlbSAxcmVtLFxuXG4gIHRhZy1saXN0LXdpdGgtaW5wdXQtcmVjdGFuZ2xlLWJvcmRlci1yYWRpdXM6IGlucHV0LXJlY3RhbmdsZS1ib3JkZXItcmFkaXVzLFxuICB0YWctbGlzdC13aXRoLWlucHV0LXNlbWktcm91bmQtYm9yZGVyLXJhZGl1czogaW5wdXQtc2VtaS1yb3VuZC1ib3JkZXItcmFkaXVzLFxuICB0YWctbGlzdC13aXRoLWlucHV0LXJvdW5kLWJvcmRlci1yYWRpdXM6IGlucHV0LXJvdW5kLWJvcmRlci1yYWRpdXMsXG5cbiAgdGFnLWlucHV0LW1pbi13aWR0aDogNnJlbSxcbiAgdGFnLWlucHV0LXRleHQtZm9udC1mYW1pbHk6IGlucHV0LXRleHQtZm9udC1mYW1pbHksXG4gIHRhZy1pbnB1dC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtZmFtaWx5OiBpbnB1dC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtZmFtaWx5LFxuXG4gIHRhZy1pbnB1dC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yLFxuICB0YWctaW5wdXQtYmFzaWMtYm9yZGVyLWNvbG9yOiBpbnB1dC1iYXNpYy1ib3JkZXItY29sb3IsXG4gIHRhZy1pbnB1dC1iYXNpYy10ZXh0LWNvbG9yOiBpbnB1dC1iYXNpYy10ZXh0LWNvbG9yLFxuICB0YWctaW5wdXQtYmFzaWMtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogaW5wdXQtYmFzaWMtcGxhY2Vob2xkZXItdGV4dC1jb2xvcixcbiAgdGFnLWlucHV0LWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3IsXG4gIHRhZy1pbnB1dC1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6IGlucHV0LWJhc2ljLWZvY3VzLWJvcmRlci1jb2xvcixcbiAgdGFnLWlucHV0LWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IGlucHV0LWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3IsXG4gIHRhZy1pbnB1dC1iYXNpYy1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiBpbnB1dC1iYXNpYy1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yLFxuXG4gIHRhZy1pbnB1dC1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGlucHV0LXByaW1hcnktYmFja2dyb3VuZC1jb2xvcixcbiAgdGFnLWlucHV0LXByaW1hcnktYm9yZGVyLWNvbG9yOiBpbnB1dC1wcmltYXJ5LWJvcmRlci1jb2xvcixcbiAgdGFnLWlucHV0LXByaW1hcnktdGV4dC1jb2xvcjogaW5wdXQtcHJpbWFyeS10ZXh0LWNvbG9yLFxuICB0YWctaW5wdXQtcHJpbWFyeS1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiBpbnB1dC1wcmltYXJ5LXBsYWNlaG9sZGVyLXRleHQtY29sb3IsXG4gIHRhZy1pbnB1dC1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGlucHV0LXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcixcbiAgdGFnLWlucHV0LXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBpbnB1dC1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcixcbiAgdGFnLWlucHV0LXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogaW5wdXQtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yLFxuICB0YWctaW5wdXQtcHJpbWFyeS1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiBpbnB1dC1wcmltYXJ5LWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3IsXG5cbiAgdGFnLWlucHV0LXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yLFxuICB0YWctaW5wdXQtc3VjY2Vzcy1ib3JkZXItY29sb3I6IGlucHV0LXN1Y2Nlc3MtYm9yZGVyLWNvbG9yLFxuICB0YWctaW5wdXQtc3VjY2Vzcy10ZXh0LWNvbG9yOiBpbnB1dC1zdWNjZXNzLXRleHQtY29sb3IsXG4gIHRhZy1pbnB1dC1zdWNjZXNzLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IGlucHV0LXN1Y2Nlc3MtcGxhY2Vob2xkZXItdGV4dC1jb2xvcixcbiAgdGFnLWlucHV0LXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtc3VjY2Vzcy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yLFxuICB0YWctaW5wdXQtc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGlucHV0LXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yLFxuICB0YWctaW5wdXQtc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOiBpbnB1dC1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3IsXG4gIHRhZy1pbnB1dC1zdWNjZXNzLWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IGlucHV0LXN1Y2Nlc3MtZGlzYWJsZWQtcGxhY2Vob2xkZXItdGV4dC1jb2xvcixcblxuICB0YWctaW5wdXQtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1pbmZvLWJhY2tncm91bmQtY29sb3IsXG4gIHRhZy1pbnB1dC1pbmZvLWJvcmRlci1jb2xvcjogaW5wdXQtaW5mby1ib3JkZXItY29sb3IsXG4gIHRhZy1pbnB1dC1pbmZvLXRleHQtY29sb3I6IGlucHV0LWluZm8tdGV4dC1jb2xvcixcbiAgdGFnLWlucHV0LWluZm8tcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogaW5wdXQtaW5mby1wbGFjZWhvbGRlci10ZXh0LWNvbG9yLFxuICB0YWctaW5wdXQtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3IsXG4gIHRhZy1pbnB1dC1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjogaW5wdXQtaW5mby1mb2N1cy1ib3JkZXItY29sb3IsXG4gIHRhZy1pbnB1dC1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IGlucHV0LWluZm8tZGlzYWJsZWQtdGV4dC1jb2xvcixcbiAgdGFnLWlucHV0LWluZm8tZGlzYWJsZWQtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogaW5wdXQtaW5mby1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yLFxuXG4gIHRhZy1pbnB1dC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGlucHV0LXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcixcbiAgdGFnLWlucHV0LXdhcm5pbmctYm9yZGVyLWNvbG9yOiBpbnB1dC13YXJuaW5nLWJvcmRlci1jb2xvcixcbiAgdGFnLWlucHV0LXdhcm5pbmctdGV4dC1jb2xvcjogaW5wdXQtd2FybmluZy10ZXh0LWNvbG9yLFxuICB0YWctaW5wdXQtd2FybmluZy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiBpbnB1dC13YXJuaW5nLXBsYWNlaG9sZGVyLXRleHQtY29sb3IsXG4gIHRhZy1pbnB1dC13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGlucHV0LXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcixcbiAgdGFnLWlucHV0LXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBpbnB1dC13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcixcbiAgdGFnLWlucHV0LXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogaW5wdXQtd2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yLFxuICB0YWctaW5wdXQtd2FybmluZy1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiBpbnB1dC13YXJuaW5nLWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3IsXG5cbiAgdGFnLWlucHV0LWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcixcbiAgdGFnLWlucHV0LWRhbmdlci1ib3JkZXItY29sb3I6IGlucHV0LWRhbmdlci1ib3JkZXItY29sb3IsXG4gIHRhZy1pbnB1dC1kYW5nZXItdGV4dC1jb2xvcjogaW5wdXQtZGFuZ2VyLXRleHQtY29sb3IsXG4gIHRhZy1pbnB1dC1kYW5nZXItcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogaW5wdXQtZGFuZ2VyLXBsYWNlaG9sZGVyLXRleHQtY29sb3IsXG4gIHRhZy1pbnB1dC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtZGFuZ2VyLWZvY3VzLWJhY2tncm91bmQtY29sb3IsXG4gIHRhZy1pbnB1dC1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBpbnB1dC1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yLFxuICB0YWctaW5wdXQtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IGlucHV0LWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yLFxuICB0YWctaW5wdXQtZGFuZ2VyLWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IGlucHV0LWRhbmdlci1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yLFxuXG4gIHRhZy1pbnB1dC1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcixcbiAgdGFnLWlucHV0LWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBpbnB1dC1jb250cm9sLWJvcmRlci1jb2xvcixcbiAgdGFnLWlucHV0LWNvbnRyb2wtdGV4dC1jb2xvcjogaW5wdXQtY29udHJvbC10ZXh0LWNvbG9yLFxuICB0YWctaW5wdXQtY29udHJvbC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiBpbnB1dC1jb250cm9sLXBsYWNlaG9sZGVyLXRleHQtY29sb3IsXG4gIHRhZy1pbnB1dC1jb250cm9sLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWNvbnRyb2wtZm9jdXMtYmFja2dyb3VuZC1jb2xvcixcbiAgdGFnLWlucHV0LWNvbnRyb2wtZm9jdXMtYm9yZGVyLWNvbG9yOiBpbnB1dC1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcixcbiAgdGFnLWlucHV0LWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogaW5wdXQtY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yLFxuICB0YWctaW5wdXQtY29udHJvbC1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiBpbnB1dC1jb250cm9sLWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3IsXG5cbiAgdGFnLWlucHV0LXRpbnktdGV4dC1mb250LXNpemU6IGlucHV0LXRpbnktdGV4dC1mb250LXNpemUsXG4gIHRhZy1pbnB1dC10aW55LXRleHQtZm9udC13ZWlnaHQ6IGlucHV0LXRpbnktdGV4dC1mb250LXdlaWdodCxcbiAgdGFnLWlucHV0LXRpbnktdGV4dC1saW5lLWhlaWdodDogaW5wdXQtdGlueS10ZXh0LWxpbmUtaGVpZ2h0LFxuICB0YWctaW5wdXQtdGlueS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogaW5wdXQtdGlueS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZSxcbiAgdGFnLWlucHV0LXRpbnktcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogaW5wdXQtdGlueS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0LFxuICB0YWctaW5wdXQtdGlueS1wbGFjZWhvbGRlci10ZXh0LWxpbmUtaGVpZ2h0OiBpbnB1dC10aW55LXBsYWNlaG9sZGVyLXRleHQtbGluZS1oZWlnaHQsXG4gIHRhZy1pbnB1dC10aW55LXBhZGRpbmc6IDAuMTI1cmVtIDAsXG5cbiAgdGFnLWlucHV0LXNtYWxsLXRleHQtZm9udC1zaXplOiBpbnB1dC1zbWFsbC10ZXh0LWZvbnQtc2l6ZSxcbiAgdGFnLWlucHV0LXNtYWxsLXRleHQtZm9udC13ZWlnaHQ6IGlucHV0LXNtYWxsLXRleHQtZm9udC13ZWlnaHQsXG4gIHRhZy1pbnB1dC1zbWFsbC10ZXh0LWxpbmUtaGVpZ2h0OiBpbnB1dC1zbWFsbC10ZXh0LWxpbmUtaGVpZ2h0LFxuICB0YWctaW5wdXQtc21hbGwtcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IGlucHV0LXNtYWxsLXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplLFxuICB0YWctaW5wdXQtc21hbGwtcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogaW5wdXQtc21hbGwtcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodCxcbiAgdGFnLWlucHV0LXNtYWxsLXBsYWNlaG9sZGVyLXRleHQtbGluZS1oZWlnaHQ6IGlucHV0LXNtYWxsLXBsYWNlaG9sZGVyLXRleHQtbGluZS1oZWlnaHQsXG4gIHRhZy1pbnB1dC1zbWFsbC1wYWRkaW5nOiAwLjEyNXJlbSAwLFxuXG4gIHRhZy1pbnB1dC1tZWRpdW0tdGV4dC1mb250LXNpemU6IGlucHV0LW1lZGl1bS10ZXh0LWZvbnQtc2l6ZSxcbiAgdGFnLWlucHV0LW1lZGl1bS10ZXh0LWZvbnQtd2VpZ2h0OiBpbnB1dC1tZWRpdW0tdGV4dC1mb250LXdlaWdodCxcbiAgdGFnLWlucHV0LW1lZGl1bS10ZXh0LWxpbmUtaGVpZ2h0OiBpbnB1dC1tZWRpdW0tdGV4dC1saW5lLWhlaWdodCxcbiAgdGFnLWlucHV0LW1lZGl1bS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogaW5wdXQtbWVkaXVtLXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplLFxuICB0YWctaW5wdXQtbWVkaXVtLXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IGlucHV0LW1lZGl1bS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0LFxuICB0YWctaW5wdXQtbWVkaXVtLXBsYWNlaG9sZGVyLXRleHQtbGluZS1oZWlnaHQ6IGlucHV0LW1lZGl1bS1wbGFjZWhvbGRlci10ZXh0LWxpbmUtaGVpZ2h0LFxuICB0YWctaW5wdXQtbWVkaXVtLXBhZGRpbmc6IDAuMjVyZW0gMCxcblxuICB0YWctaW5wdXQtbGFyZ2UtdGV4dC1mb250LXNpemU6IGlucHV0LWxhcmdlLXRleHQtZm9udC1zaXplLFxuICB0YWctaW5wdXQtbGFyZ2UtdGV4dC1mb250LXdlaWdodDogaW5wdXQtbGFyZ2UtdGV4dC1mb250LXdlaWdodCxcbiAgdGFnLWlucHV0LWxhcmdlLXRleHQtbGluZS1oZWlnaHQ6IGlucHV0LWxhcmdlLXRleHQtbGluZS1oZWlnaHQsXG4gIHRhZy1pbnB1dC1sYXJnZS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogaW5wdXQtbGFyZ2UtcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemUsXG4gIHRhZy1pbnB1dC1sYXJnZS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiBpbnB1dC1sYXJnZS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0LFxuICB0YWctaW5wdXQtbGFyZ2UtcGxhY2Vob2xkZXItdGV4dC1saW5lLWhlaWdodDogaW5wdXQtbGFyZ2UtcGxhY2Vob2xkZXItdGV4dC1saW5lLWhlaWdodCxcbiAgdGFnLWlucHV0LWxhcmdlLXBhZGRpbmc6IDAuMzc1cmVtIDAsXG5cbiAgdGFnLWlucHV0LWdpYW50LXRleHQtZm9udC1zaXplOiBpbnB1dC1naWFudC10ZXh0LWZvbnQtc2l6ZSxcbiAgdGFnLWlucHV0LWdpYW50LXRleHQtZm9udC13ZWlnaHQ6IGlucHV0LWdpYW50LXRleHQtZm9udC13ZWlnaHQsXG4gIHRhZy1pbnB1dC1naWFudC10ZXh0LWxpbmUtaGVpZ2h0OiBpbnB1dC1naWFudC10ZXh0LWxpbmUtaGVpZ2h0LFxuICB0YWctaW5wdXQtZ2lhbnQtcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IGlucHV0LWdpYW50LXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplLFxuICB0YWctaW5wdXQtZ2lhbnQtcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogaW5wdXQtZ2lhbnQtcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodCxcbiAgdGFnLWlucHV0LWdpYW50LXBsYWNlaG9sZGVyLXRleHQtbGluZS1oZWlnaHQ6IGlucHV0LWdpYW50LXBsYWNlaG9sZGVyLXRleHQtbGluZS1oZWlnaHQsXG4gIHRhZy1pbnB1dC1naWFudC1wYWRkaW5nOiAwLjVyZW0gMCxcblxuICB0b2dnbGUtaGVpZ2h0OiAxLjg3NXJlbSxcbiAgdG9nZ2xlLXdpZHRoOiAzLjEyNXJlbSxcbiAgdG9nZ2xlLWJvcmRlci13aWR0aDogMXB4LFxuICB0b2dnbGUtYm9yZGVyLXJhZGl1czogMTAwcHgsXG4gIHRvZ2dsZS1vdXRsaW5lLXdpZHRoOiBvdXRsaW5lLXdpZHRoLFxuICB0b2dnbGUtb3V0bGluZS1jb2xvcjogb3V0bGluZS1jb2xvcixcbiAgdG9nZ2xlLXN3aXRjaGVyLXNpemU6IDEuNzVyZW0sXG4gIHRvZ2dsZS1zd2l0Y2hlci1pY29uLXNpemU6IDAuNzVyZW0sXG4gIHRvZ2dsZS10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLTItZm9udC1mYW1pbHksXG4gIHRvZ2dsZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZSxcbiAgdG9nZ2xlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodCxcbiAgdG9nZ2xlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodCxcbiAgdG9nZ2xlLWN1cnNvcjogcG9pbnRlcixcbiAgdG9nZ2xlLWRpc2FibGVkLWN1cnNvcjogZGVmYXVsdCxcblxuICB0b2dnbGUtYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdG9nZ2xlLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHRvZ2dsZS1iYXNpYy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtYmFzaWMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHRvZ2dsZS1iYXNpYy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLWJhc2ljLWNoZWNrZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0b2dnbGUtYmFzaWMtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgdG9nZ2xlLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHRvZ2dsZS1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtYmFzaWMtZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICB0b2dnbGUtYmFzaWMtZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3ZlcixcbiAgdG9nZ2xlLWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1iYXNpYy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHRvZ2dsZS1iYXNpYy1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1iYXNpYy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHRvZ2dsZS1iYXNpYy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1iYXNpYy1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgdG9nZ2xlLWJhc2ljLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHRvZ2dsZS1iYXNpYy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgdG9nZ2xlLWJhc2ljLWRpc2FibGVkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRpc2FibGVkLFxuICB0b2dnbGUtYmFzaWMtZGlzYWJsZWQtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9nZ2xlLWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgdG9nZ2xlLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdG9nZ2xlLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0LFxuICB0b2dnbGUtcHJpbWFyeS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS1wcmltYXJ5LWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0b2dnbGUtcHJpbWFyeS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLXByaW1hcnktY2hlY2tlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvZ2dsZS1wcmltYXJ5LWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHRvZ2dsZS1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHRvZ2dsZS1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHRvZ2dsZS1wcmltYXJ5LWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgdG9nZ2xlLXByaW1hcnktZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLFxuICB0b2dnbGUtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICB0b2dnbGUtcHJpbWFyeS1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHRvZ2dsZS1wcmltYXJ5LWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLFxuICB0b2dnbGUtcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1wcmltYXJ5LWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICB0b2dnbGUtcHJpbWFyeS1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcixcbiAgdG9nZ2xlLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHRvZ2dsZS1wcmltYXJ5LWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICB0b2dnbGUtcHJpbWFyeS1kaXNhYmxlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kaXNhYmxlZCxcbiAgdG9nZ2xlLXByaW1hcnktZGlzYWJsZWQtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9nZ2xlLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICB0b2dnbGUtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0b2dnbGUtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHRvZ2dsZS1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLXN1Y2Nlc3MtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHRvZ2dsZS1zdWNjZXNzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtc3VjY2Vzcy1jaGVja2VkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9nZ2xlLXN1Y2Nlc3MtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgdG9nZ2xlLXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1mb2N1cyxcbiAgdG9nZ2xlLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgdG9nZ2xlLXN1Y2Nlc3MtZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICB0b2dnbGUtc3VjY2Vzcy1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cy1ib3JkZXIsXG4gIHRvZ2dsZS1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHRvZ2dsZS1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1zdWNjZXNzLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgdG9nZ2xlLXN1Y2Nlc3MtaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLFxuICB0b2dnbGUtc3VjY2Vzcy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHRvZ2dsZS1zdWNjZXNzLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgdG9nZ2xlLXN1Y2Nlc3MtYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUsXG4gIHRvZ2dsZS1zdWNjZXNzLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgdG9nZ2xlLXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIHRvZ2dsZS1zdWNjZXNzLWRpc2FibGVkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRpc2FibGVkLFxuICB0b2dnbGUtc3VjY2Vzcy1kaXNhYmxlZC1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b2dnbGUtc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHRvZ2dsZS1pbmZvLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRvZ2dsZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgdG9nZ2xlLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtaW5mby1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgdG9nZ2xlLWluZm8tY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS1pbmZvLWNoZWNrZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0b2dnbGUtaW5mby1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICB0b2dnbGUtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWZvY3VzLFxuICB0b2dnbGUtaW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtaW5mby1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIHRvZ2dsZS1pbmZvLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLWJvcmRlcixcbiAgdG9nZ2xlLWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3ZlcixcbiAgdG9nZ2xlLWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLWluZm8taG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICB0b2dnbGUtaW5mby1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1pbmZvLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgdG9nZ2xlLWluZm8tYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtaW5mby1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZSxcbiAgdG9nZ2xlLWluZm8tYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICB0b2dnbGUtaW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgdG9nZ2xlLWluZm8tZGlzYWJsZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZGlzYWJsZWQsXG4gIHRvZ2dsZS1pbmZvLWRpc2FibGVkLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvZ2dsZS1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgdG9nZ2xlLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdG9nZ2xlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICB0b2dnbGUtd2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS13YXJuaW5nLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICB0b2dnbGUtd2FybmluZy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLXdhcm5pbmctY2hlY2tlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvZ2dsZS13YXJuaW5nLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHRvZ2dsZS13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHRvZ2dsZS13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHRvZ2dsZS13YXJuaW5nLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgdG9nZ2xlLXdhcm5pbmctZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyLFxuICB0b2dnbGUtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICB0b2dnbGUtd2FybmluZy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIHRvZ2dsZS13YXJuaW5nLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLXdhcm5pbmctYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtYWN0aXZlLFxuICB0b2dnbGUtd2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS13YXJuaW5nLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLFxuICB0b2dnbGUtd2FybmluZy1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLWJvcmRlcixcbiAgdG9nZ2xlLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHRvZ2dsZS13YXJuaW5nLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICB0b2dnbGUtd2FybmluZy1kaXNhYmxlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kaXNhYmxlZCxcbiAgdG9nZ2xlLXdhcm5pbmctZGlzYWJsZWQtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9nZ2xlLXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICB0b2dnbGUtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRvZ2dsZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHRvZ2dsZS1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS1kYW5nZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgdG9nZ2xlLWRhbmdlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtZGFuZ2VyLWNoZWNrZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0b2dnbGUtZGFuZ2VyLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgdG9nZ2xlLWRhbmdlci1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHRvZ2dsZS1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtZGFuZ2VyLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICB0b2dnbGUtZGFuZ2VyLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3ZlcixcbiAgdG9nZ2xlLWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1kYW5nZXItaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIHRvZ2dsZS1kYW5nZXItaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1kYW5nZXItYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHRvZ2dsZS1kYW5nZXItYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1kYW5nZXItYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZSxcbiAgdG9nZ2xlLWRhbmdlci1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICB0b2dnbGUtZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICB0b2dnbGUtZGFuZ2VyLWRpc2FibGVkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRpc2FibGVkLFxuICB0b2dnbGUtZGFuZ2VyLWRpc2FibGVkLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvZ2dsZS1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICB0b2dnbGUtY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHRvZ2dsZS1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgdG9nZ2xlLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtY29udHJvbC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgdG9nZ2xlLWNvbnRyb2wtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS1jb250cm9sLWNoZWNrZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICB0b2dnbGUtY29udHJvbC1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICB0b2dnbGUtY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLFxuICB0b2dnbGUtY29udHJvbC1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtY29udHJvbC1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHRvZ2dsZS1jb250cm9sLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgdG9nZ2xlLWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3ZlcixcbiAgdG9nZ2xlLWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLWNvbnRyb2wtaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLFxuICB0b2dnbGUtY29udHJvbC1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1jb250cm9sLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgdG9nZ2xlLWNvbnRyb2wtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtY29udHJvbC1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgdG9nZ2xlLWNvbnRyb2wtYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHRvZ2dsZS1jb250cm9sLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIHRvZ2dsZS1jb250cm9sLWRpc2FibGVkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgdG9nZ2xlLWNvbnRyb2wtZGlzYWJsZWQtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgdG9nZ2xlLWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIGZvcm0tZmllbGQtdGlueS1tYXgtd2lkdGg6IGlucHV0LXRpbnktbWF4LXdpZHRoLFxuICBmb3JtLWZpZWxkLXNtYWxsLW1heC13aWR0aDogaW5wdXQtc21hbGwtbWF4LXdpZHRoLFxuICBmb3JtLWZpZWxkLW1lZGl1bS1tYXgtd2lkdGg6IGlucHV0LW1lZGl1bS1tYXgtd2lkdGgsXG4gIGZvcm0tZmllbGQtbGFyZ2UtbWF4LXdpZHRoOiBpbnB1dC1sYXJnZS1tYXgtd2lkdGgsXG4gIGZvcm0tZmllbGQtZ2lhbnQtbWF4LXdpZHRoOiBpbnB1dC1naWFudC1tYXgtd2lkdGgsXG5cbiAgZm9ybS1maWVsZC1hZGRvbi1iYXNpYy10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy02MDAsXG4gIGZvcm0tZmllbGQtYWRkb24tYmFzaWMtaGlnaGxpZ2h0LXRleHQtY29sb3I6IGNvbG9yLXByaW1hcnktNTAwLFxuICBmb3JtLWZpZWxkLWFkZG9uLXByaW1hcnktdGV4dC1jb2xvcjogY29sb3ItcHJpbWFyeS01MDAsXG4gIGZvcm0tZmllbGQtYWRkb24tcHJpbWFyeS1oaWdobGlnaHQtdGV4dC1jb2xvcjogY29sb3ItcHJpbWFyeS02MDAsXG4gIGZvcm0tZmllbGQtYWRkb24tc3VjY2Vzcy10ZXh0LWNvbG9yOiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgZm9ybS1maWVsZC1hZGRvbi1zdWNjZXNzLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiBjb2xvci1zdWNjZXNzLTYwMCxcbiAgZm9ybS1maWVsZC1hZGRvbi1pbmZvLXRleHQtY29sb3I6IGNvbG9yLWluZm8tNTAwLFxuICBmb3JtLWZpZWxkLWFkZG9uLWluZm8taGlnaGxpZ2h0LXRleHQtY29sb3I6IGNvbG9yLWluZm8tNjAwLFxuICBmb3JtLWZpZWxkLWFkZG9uLXdhcm5pbmctdGV4dC1jb2xvcjogY29sb3Itd2FybmluZy01MDAsXG4gIGZvcm0tZmllbGQtYWRkb24td2FybmluZy1oaWdobGlnaHQtdGV4dC1jb2xvcjogY29sb3Itd2FybmluZy02MDAsXG4gIGZvcm0tZmllbGQtYWRkb24tZGFuZ2VyLXRleHQtY29sb3I6IGNvbG9yLWRhbmdlci01MDAsXG4gIGZvcm0tZmllbGQtYWRkb24tZGFuZ2VyLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiBjb2xvci1kYW5nZXItNjAwLFxuICBmb3JtLWZpZWxkLWFkZG9uLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBmb3JtLWZpZWxkLWFkZG9uLWNvbnRyb2wtaGlnaGxpZ2h0LXRleHQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgZm9ybS1maWVsZC1hZGRvbi1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGZvcm0tZmllbGQtYWRkb24tdGlueS1oZWlnaHQ6IDEuNXJlbSxcbiAgZm9ybS1maWVsZC1hZGRvbi10aW55LXdpZHRoOiBmb3JtLWZpZWxkLWFkZG9uLXRpbnktaGVpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLXRpbnktaWNvbi1zaXplOiBidXR0b24tdGlueS1pY29uLXNpemUsXG4gIGZvcm0tZmllbGQtYWRkb24tdGlueS1mb250LXNpemU6IHRleHQtYnV0dG9uLXRpbnktZm9udC1zaXplLFxuICBmb3JtLWZpZWxkLWFkZG9uLXRpbnktbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLXRpbnktbGluZS1oZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tdGlueS1mb250LXdlaWdodDogdGV4dC1idXR0b24tZm9udC13ZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tc21hbGwtaGVpZ2h0OiAycmVtLFxuICBmb3JtLWZpZWxkLWFkZG9uLXNtYWxsLXdpZHRoOiBmb3JtLWZpZWxkLWFkZG9uLXNtYWxsLWhlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi1zbWFsbC1pY29uLXNpemU6IGJ1dHRvbi1zbWFsbC1pY29uLXNpemUsXG4gIGZvcm0tZmllbGQtYWRkb24tc21hbGwtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1zbWFsbC1mb250LXNpemUsXG4gIGZvcm0tZmllbGQtYWRkb24tc21hbGwtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLXNtYWxsLWxpbmUtaGVpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLXNtYWxsLWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi1tZWRpdW0taGVpZ2h0OiAyLjVyZW0sXG4gIGZvcm0tZmllbGQtYWRkb24tbWVkaXVtLXdpZHRoOiBmb3JtLWZpZWxkLWFkZG9uLW1lZGl1bS1oZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tbWVkaXVtLWljb24tc2l6ZTogYnV0dG9uLW1lZGl1bS1pY29uLXNpemUsXG4gIGZvcm0tZmllbGQtYWRkb24tbWVkaXVtLWZvbnQtc2l6ZTogdGV4dC1idXR0b24tbWVkaXVtLWZvbnQtc2l6ZSxcbiAgZm9ybS1maWVsZC1hZGRvbi1tZWRpdW0tbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLW1lZGl1bS1saW5lLWhlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi1tZWRpdW0tZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLWxhcmdlLWhlaWdodDogM3JlbSxcbiAgZm9ybS1maWVsZC1hZGRvbi1sYXJnZS13aWR0aDogZm9ybS1maWVsZC1hZGRvbi1sYXJnZS1oZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tbGFyZ2UtaWNvbi1zaXplOiBidXR0b24tbGFyZ2UtaWNvbi1zaXplLFxuICBmb3JtLWZpZWxkLWFkZG9uLWxhcmdlLWZvbnQtc2l6ZTogdGV4dC1idXR0b24tbGFyZ2UtZm9udC1zaXplLFxuICBmb3JtLWZpZWxkLWFkZG9uLWxhcmdlLWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1sYXJnZS1saW5lLWhlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi1sYXJnZS1mb250LXdlaWdodDogdGV4dC1idXR0b24tZm9udC13ZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tZ2lhbnQtaGVpZ2h0OiAzLjVyZW0sXG4gIGZvcm0tZmllbGQtYWRkb24tZ2lhbnQtd2lkdGg6IGZvcm0tZmllbGQtYWRkb24tZ2lhbnQtaGVpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLWdpYW50LWljb24tc2l6ZTogYnV0dG9uLWdpYW50LWljb24tc2l6ZSxcbiAgZm9ybS1maWVsZC1hZGRvbi1naWFudC1mb250LXNpemU6IHRleHQtYnV0dG9uLWdpYW50LWZvbnQtc2l6ZSxcbiAgZm9ybS1maWVsZC1hZGRvbi1naWFudC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tZ2lhbnQtbGluZS1oZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tZ2lhbnQtZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LFxuKTtcbiIsIkBpbXBvcnQgJy4uLy4uL3RoZW1lcy9tYXBwaW5nJztcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AZnVuY3Rpb24gbmItZ2V0LWVuYWJsZWQtdGhlbWVzKCkge1xuXG4gIEBpZiAobGVuZ3RoKCRuYi1lbmFibGVkLXRoZW1lcykgPT0gMCkge1xuICAgIEBlYWNoICR0aGVtZS1uYW1lLCAkdGhlbWUgaW4gJG5iLXRoZW1lcyB7XG4gICAgICAkbmItZW5hYmxlZC10aGVtZXM6IGFwcGVuZCgkbmItZW5hYmxlZC10aGVtZXMsICR0aGVtZS1uYW1lKSAhZ2xvYmFsO1xuICAgIH1cbiAgfVxuICBAcmV0dXJuICRuYi1lbmFibGVkLXRoZW1lcztcbn1cblxuQGZ1bmN0aW9uIGdldC1sYXN0LWVuYWJsZWQtdGhlbWUoKSB7XG4gICR0aGVtZXM6IG5iLWdldC1lbmFibGVkLXRoZW1lcygpO1xuICBAcmV0dXJuIG50aCgkdGhlbWVzLCBsZW5ndGgoJHRoZW1lcykpO1xufVxuXG5AZnVuY3Rpb24gbmItc2V0LWZvci1leHBvcnQoJHRoZW1lLCAkbmFtZSwgJHBhcmVudC1uYW1lOiBudWxsKSB7XG5cbiAgJHBhcmVudC10aGVtZTogbWFwLWdldCgkbmItdGhlbWVzLWV4cG9ydCwgJHBhcmVudC1uYW1lKTtcbiAgQGlmICgkcGFyZW50LXRoZW1lICE9IG51bGwpIHtcbiAgICAkdGhlbWU6IG1hcC1tZXJnZShtYXAtZ2V0KCRwYXJlbnQtdGhlbWUsIGRhdGEpLCAkdGhlbWUpO1xuICB9XG5cbiAgJHRoZW1lLWRhdGE6IChcbiAgICBkYXRhOiAkdGhlbWUsXG4gICAgcGFyZW50OiAkcGFyZW50LW5hbWUsXG4gICk7XG4gIEByZXR1cm4gbWFwLXNldCgkbmItdGhlbWVzLWV4cG9ydCwgJG5hbWUsICR0aGVtZS1kYXRhKTtcbn1cblxuQGZ1bmN0aW9uIG5iLWdldC1yZWdpc3RlcmVkLXRoZW1lKCRuYW1lKSB7XG4gICR0aGVtZTogbWFwLWdldCgkbmItdGhlbWVzLCAkbmFtZSk7XG5cbiAgLy8gVE9ETzogY2hlY2sgaWYgb3B0aW1hbCBwbGFjZVxuICBAaWYgKCR0aGVtZSA9PSBudWxsKSB7XG4gICAgQGVycm9yICdOZWJ1bGFyIFRoZW1lOiB0aGVtZSBgJyArICRuYW1lICsgJ2AgaXMgbm90IHJlZ2lzdGVyZWQgd2l0aCBgbmItcmVnaXN0ZXItdGhlbWVgIGZ1bmN0aW9uLic7XG4gIH1cblxuICBAcmV0dXJuICR0aGVtZTtcbn1cblxuLy8gRW50cnkgcG9pbnRcbi8vIFJlZ2lzdGVycyBhIG5ldyB0aGVtZVxuQGZ1bmN0aW9uIG5iLXJlZ2lzdGVyLXRoZW1lKCR0aGVtZSwgJG5hbWUsICRwYXJlbnQtbmFtZTogbnVsbCkge1xuXG4gIEBpZiAoJG5iLXRoZW1lLWV4cG9ydC1tb2RlID09IHRydWUpIHtcbiAgICAkbmItdGhlbWVzLWV4cG9ydDogbmItc2V0LWZvci1leHBvcnQoJHRoZW1lLCAkbmFtZSwgJHBhcmVudC1uYW1lKSAhZ2xvYmFsO1xuICB9XG5cbiAgJHRoZW1lLWRhdGE6ICgpO1xuXG4gIEBpZiAoJHBhcmVudC1uYW1lICE9IG51bGwpIHtcbiAgICAkcGFyZW50LXRoZW1lOiBtYXAtZ2V0KCRuYi10aGVtZXMsICRwYXJlbnQtbmFtZSk7XG4gICAgQGlmICgkcGFyZW50LXRoZW1lID09IG51bGwpIHtcbiAgICAgIEBlcnJvciAnTmVidWxhciBUaGVtZTogcGFyZW50IHRoZW1lIGAnICsgJHBhcmVudC1uYW1lICsgJ2AgaXMgbm90IHJlZ2lzdGVyZWQgb3IgaW1wb3J0ZWQuJztcbiAgICB9XG4gICAgJHRoZW1lOiBtYXAtbWVyZ2UoJHBhcmVudC10aGVtZSwgJHRoZW1lKTtcbiAgfVxuICAkdGhlbWU6IG1hcC1tZXJnZSgkZXZhLW1hcHBpbmcsICR0aGVtZSk7XG4gICRuYi10aGVtZXM6IG1hcC1zZXQoJG5iLXRoZW1lcywgJG5hbWUsICR0aGVtZSkgIWdsb2JhbDtcblxuICBAcmV0dXJuICRuYi10aGVtZXM7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBtaXhpbiBuYi1mb3ItdGhlbWUoJG5hbWUpIHtcbiAgQGlmICgkbmItdGhlbWUtbmFtZSA9PSAkbmFtZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1mb3ItdGhlbWVzKCRuYW1lcy4uLikge1xuICBAZWFjaCAkbmFtZSBpbiAkbmFtZXMge1xuICAgIEBpbmNsdWRlIG5iLWZvci10aGVtZSgkbmFtZSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBuYi1leGNlcHQtdGhlbWUoJG5hbWUpIHtcbiAgQGlmICgkbmItdGhlbWUtbmFtZSAhPSAkbmFtZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1leGNlcHQtZm9yLXRoZW1lcygkbmFtZXMuLi4pIHtcbiAgQGVhY2ggJG5hbWUgaW4gJG5hbWVzIHtcbiAgICBAaW5jbHVkZSBuYi1leGNlcHQtdGhlbWUoJG5hbWUpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbmItaW5zdGFsbC1jc3MtcHJvcGVydGllcygkdGhlbWUtbmFtZSwgJHRoZW1lKSB7XG4gIC5uYi10aGVtZS0jeyR0aGVtZS1uYW1lfSB7XG5cbiAgICBAZWFjaCAkdmFyLCAkdmFsdWUgaW4gJHRoZW1lIHtcbiAgICAgIEBpZiAodHlwZS1vZigkdmFsdWUpID09ICdzdHJpbmcnIGFuZCBtYXAtZ2V0KCR0aGVtZSwgJHZhbHVlKSkge1xuICAgICAgICAtLSN7JHZhcn06IHZhcigtLSN7JHZhbHVlfSk7XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgLS0jeyR2YXJ9OiAjeyR2YWx1ZX07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBuYi1wcmUtcHJvY2Vzcy1jb250ZXh0KCR0aGVtZS1uYW1lKSB7XG4gICRuYi10aGVtZS1wcm9jZXNzLW1vZGU6ICdwcmUtcHJvY2VzcycgIWdsb2JhbDtcblxuICAkbmItdGhlbWUtbmFtZTogJHRoZW1lLW5hbWUgIWdsb2JhbDtcbiAgJG5iLXByb2Nlc3NlZC10aGVtZTogbmItcHJvY2Vzcy10aGVtZShuYi1nZXQtcmVnaXN0ZXJlZC10aGVtZSgkdGhlbWUtbmFtZSkpICFnbG9iYWw7XG59XG5cbkBtaXhpbiBuYi1sYXp5LXByb2Nlc3MtY29udGV4dCgkdGhlbWUtbmFtZSkge1xuICAkbmItdGhlbWUtcHJvY2Vzcy1tb2RlOiAnbGF6eS1wcm9jZXNzJyAhZ2xvYmFsO1xuXG4gICRuYi10aGVtZS1uYW1lOiAkdGhlbWUtbmFtZSAhZ2xvYmFsO1xuICAkbmItcHJvY2Vzc2VkLXRoZW1lOiAoKSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbmItaW5zdGFsbC1jb21wb25lbnQtd2l0aC1jc3MtcHJvcHMoKSB7XG4gIC8vIEBicmVha2luZy1jaGFuZ2UgNS4wLjBcbiAgOmhvc3Qge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1pbnN0YWxsLWNvbXBvbmVudC13aXRoLXNjc3MtdmFycygpIHtcbiAgJGVuYWJsZWQtdGhlbWVzOiBuYi1nZXQtZW5hYmxlZC10aGVtZXMoKTtcblxuICBAZWFjaCAkdGhlbWUtbmFtZSBpbiAkZW5hYmxlZC10aGVtZXMge1xuXG4gICAgQGluY2x1ZGUgbmItbGF6eS1wcm9jZXNzLWNvbnRleHQoJHRoZW1lLW5hbWUpO1xuXG4gICAgLypcbiAgICAgIDpob3N0IGNhbiBiZSBwcmVmaXhlZFxuICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzhkMGVlMzQ5MzlmMTRjMDc4NzZkMjIyYzI1YjQwNWVkNDU4YTM0ZDMvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MVxuXG4gICAgICBXZSBoYXZlIHRvIHVzZSA6aG9zdCBpbnN0ZWFkIG9mIDpob3N0LWNvbnRleHQoJHRoZW1lKSwgdG8gYmUgYWJsZSB0byBwcmVmaXggdGhlbWUgY2xhc3NcbiAgICAgIHdpdGggc29tZXRoaW5nIGRlZmluZWQgaW5zaWRlIG9mIEBjb250ZW50LCBieSBwcmVmaXhpbmcgJi5cbiAgICAgIEZvciBleGFtcGxlIHRoaXMgc2NzcyBjb2RlOlxuICAgICAgICAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLnNvbWUtc2VsZWN0b3IgJiB7XG4gICAgICAgICAgICAuLi5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIFdpbGwgcmVzdWx0IGluIG5leHQgY3NzOlxuICAgICAgICAuc29tZS1zZWxlY3RvciAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLi4uXG4gICAgICAgIH1cblxuICAgICAgSXQgZG9lc24ndCB3b3JrIHdpdGggOmhvc3QtY29udGV4dCBiZWNhdXNlIGFuZ3VsYXIgc3BsaXR0aW5nIGl0IGluIHR3byBzZWxlY3RvcnMgYW5kIHJlbW92ZXNcbiAgICAgIHByZWZpeCBpbiBvbmUgb2YgdGhlIHNlbGVjdG9ycy5cbiAgICAqL1xuICAgIC5uYi10aGVtZS0jeyR0aGVtZS1uYW1lfSA6aG9zdCB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gRW50cnkgcG9pbnRcbi8vIEluc3RhbGxzIGNvbXBvbmVudCBzdHlsZXMgYmFzZWQgb24gcmVnaXN0ZXJlZCB0aGVtZXNcbi8vIFRPRE86IHdlIGhpZGUgOmhvc3QgaW5zaWRlIG9mIGl0IHdoaWNoIGlzIG5vdCBvYnZpb3VzXG5AbWl4aW4gbmItaW5zdGFsbC1jb21wb25lbnQoKSB7XG5cbiAgQGlmICgkbmItZW5hYmxlLWNzcy1jdXN0b20tcHJvcGVydGllcykge1xuXG4gICAgQGluY2x1ZGUgbmItaW5zdGFsbC1jb21wb25lbnQtd2l0aC1jc3MtcHJvcHMoKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG5cbiAgfSBAZWxzZSB7XG5cbiAgICBAaW5jbHVkZSBuYi1pbnN0YWxsLWNvbXBvbmVudC13aXRoLXNjc3MtdmFycygpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbmItaW5zdGFsbC1nbG9iYWwtd2l0aC1jc3MtcHJvcHMoKSB7XG4gIEBjb250ZW50O1xuXG4gIEBlYWNoICR0aGVtZS1uYW1lIGluIG5iLWdldC1lbmFibGVkLXRoZW1lcygpIHtcbiAgICBAaW5jbHVkZSBuYi1pbnN0YWxsLWNzcy1wcm9wZXJ0aWVzKCR0aGVtZS1uYW1lLCBuYi1nZXQtcmVnaXN0ZXJlZC10aGVtZSgkdGhlbWUtbmFtZSkpO1xuICB9XG59XG5cbkBtaXhpbiBuYi1pbnN0YWxsLWdsb2JhbC13aXRoLXNjc3MtdmFycygpIHtcblxuICBAZWFjaCAkdGhlbWUtbmFtZSBpbiBuYi1nZXQtZW5hYmxlZC10aGVtZXMoKSB7XG4gICAgQGluY2x1ZGUgbmItcHJlLXByb2Nlc3MtY29udGV4dCgkdGhlbWUtbmFtZSk7XG5cbiAgICAubmItdGhlbWUtI3skdGhlbWUtbmFtZX0ge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIEVudHJ5IHBvaW50XG4vLyBJbnN0YWxscyBnbG9iYWwgc3R5bGVzIGJhc2VkIG9uIHJlZ2lzdGVyZWQgdGhlbWVzXG5AbWl4aW4gbmItaW5zdGFsbCgpIHtcbiAgQGlmICgkbmItZW5hYmxlLWNzcy1jdXN0b20tcHJvcGVydGllcykge1xuICAgIEBpbmNsdWRlIG5iLWluc3RhbGwtZ2xvYmFsLXdpdGgtY3NzLXByb3BzKCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBuYi1pbnN0YWxsLWdsb2JhbC13aXRoLXNjc3MtdmFycygpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AZnVuY3Rpb24gbmItZGVlcC1maW5kLXZhbHVlKCR0aGVtZSwgJGtleSwgJHZhbHVlKSB7XG4gICRwYXJlbnQtdmFsdWU6IG1hcC1nZXQoJHRoZW1lLCAkdmFsdWUpO1xuXG4gIEBpZiAoJHBhcmVudC12YWx1ZSAhPSBudWxsKSB7XG4gICAgQHJldHVybiBuYi1kZWVwLWZpbmQtdmFsdWUoJHRoZW1lLCAkdmFsdWUsICRwYXJlbnQtdmFsdWUpO1xuICB9XG5cbiAgQHJldHVybiAkdmFsdWU7XG59XG5cbkBmdW5jdGlvbiBuYi1wcm9jZXNzLXRoZW1lKCR0aGVtZSkge1xuICAkcHJvY2Vzc2VkLXRoZW1lOiAoKTtcbiAgQGVhY2ggJGtleSwgJHZhbHVlIGluICR0aGVtZSB7XG4gICAgJHByb2Nlc3NlZC10aGVtZTogbWFwLXNldCgkcHJvY2Vzc2VkLXRoZW1lLCAka2V5LCBuYi1kZWVwLWZpbmQtdmFsdWUoJHRoZW1lLCAka2V5LCAkdmFsdWUpKTtcbiAgfVxuICBAcmV0dXJuICRwcm9jZXNzZWQtdGhlbWU7XG59XG5cbkBmdW5jdGlvbiBnZXQtY3VycmVudC10aGVtZS1uYW1lKCkge1xuICBAaWYgKCRuYi10aGVtZS1uYW1lICE9IG51bGwpIHtcbiAgICBAcmV0dXJuICRuYi10aGVtZS1uYW1lO1xuICB9XG5cbiAgQHJldHVybiBnZXQtbGFzdC1lbmFibGVkLXRoZW1lKCk7XG59XG5cbkBmdW5jdGlvbiBuYi10aGVtZSgka2V5KSB7XG5cbiAgJHZhbHVlOiAoKTtcblxuICAvLyBpbiBjYXNlIG9mIGNzcyBjdXN0b20gcHJvcGVydGllcyAtIGp1c3QgcmV0dXJucyB2YXIoLS12YXItbmFtZSkgLSB0aGUgcmVzdCBpcyBhIGJyb3dzZXIgam9iXG4gIEBpZiAoJG5iLWVuYWJsZS1jc3MtY3VzdG9tLXByb3BlcnRpZXMgPT0gdHJ1ZSkge1xuICAgIC8vIHRoZXJlIGlzIG5vIHdheSB0byBjaGVjayBpZiB2YXJpYWJsZSBleGlzdHMgYXMgY3VycmVudCBleGVjdXRpb24gY29udGV4dCBpcyBvdXRzaWRlIG9mIHBhcnRpY3VsYXIgdGhlbWVcbiAgICAvLyBiZWNhdXNlIHdlIHByb2Nlc3MgY3NzIGluIHRoaXMgbW9kZSBvbmx5IG9uY2UhIChhbmQgbm90IGZvciBlYWNoIHRoZW1lKVxuICAgICR2YWx1ZTogdmFyKC0tI3ska2V5fSk7XG4gIH0gQGVsc2Uge1xuICAgIC8vIGluIGEgcHJlcHJvY2VzcyBtb2RlIChuYi1pbnN0YWxsLWdsb2JhbCBjYWxsKSBnZXQgcmVhZHkgdmFsdWUgZnJvbSAkbmItcHJvY2Vzc2VkLXRoZW1lIHZhcmlhYmxlXG4gICAgQGlmICgkbmItdGhlbWUtcHJvY2Vzcy1tb2RlID09ICdwcmUtcHJvY2VzcycpIHtcbiAgICAgICR2YWx1ZTogbWFwLWdldCgkbmItcHJvY2Vzc2VkLXRoZW1lLCAka2V5KTtcbiAgICB9XG5cbiAgICAvLyBvdGhlcndpc2UgbGF6aWx5IHNlYXJjaCBmb3IgdmFyaWFibGUgdmFsdWVcbiAgICBAaWYgKCRuYi10aGVtZS1wcm9jZXNzLW1vZGUgPT0gJ2xhenktcHJvY2VzcycpIHtcblxuICAgICAgJG5iLXRoZW1lLW5hbWU6IGdldC1jdXJyZW50LXRoZW1lLW5hbWUoKTtcblxuICAgICAgJHRoZW1lOiBuYi1nZXQtcmVnaXN0ZXJlZC10aGVtZSgkbmItdGhlbWUtbmFtZSk7XG4gICAgICAkdmFsdWU6IG5iLWRlZXAtZmluZC12YWx1ZSgkdGhlbWUsICRrZXksIG1hcC1nZXQoJHRoZW1lLCAka2V5KSk7XG4gICAgfVxuICB9XG5cbiAgQGlmICgkdmFsdWUgPT0gbnVsbCkge1xuICAgIEB3YXJuICdOZWJ1bGFyIFRoZW1lOiBgbmItdGhlbWUoKWAgY2Fubm90IGZpbmQgdmFsdWUgZm9yIGtleSBgJyArICRrZXkgKyAnYCBmb3IgdGhlbWUgYCcrICRuYi10aGVtZS1uYW1lICsnYCc7XG4gIH1cblxuICBAcmV0dXJuICR2YWx1ZTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGltcG9ydCAnLi4vY29yZS9mdW5jdGlvbnMnO1xuQGltcG9ydCAnLi4vY29yZS9taXhpbnMnO1xuXG4kdGhlbWU6IChcblxuICAvKipcbiAgICogU2FzcyBtYXAgY29udGFpbnMgYSBsaXN0IG9mIGFsbCBUaGVtZSB2YXJpYWJsZXMgYW5kIGFsc28gdGhlaXIgbWFwcGluZ3MgaW50byBDb21wb25lbnQgdmFyaWFibGVzXG4gICAqIEEgdGhlbWUgY29uc2lzdHMgb2YgYSBsaXN0IG9mIGNvbG9ycywgYmFja2dyb3VuZHMsIGJvcmRlcnMsIHRleHQgc3R5bGVzIGFuZCBzdXBwb3J0aW5nIHZhcmlhYmxlcy5cbiAgICovXG5cblxuICAvKiBTdGF0dXMgY29sb3JzOiBwcmltYXJ5LCBzdWNjZXNzLCBpbmZvLCB3YXJuaW5nLCBkYW5nZXIgLSBmb3IgY29sb3JlZCBlbGVtZW50cyAoYnV0dG9ucywgZXRjKSAqL1xuXG4gIGNvbG9yLXByaW1hcnktMTAwOiAjZjJmNmZmLFxuICBjb2xvci1wcmltYXJ5LTIwMDogI2Q5ZTRmZixcbiAgY29sb3ItcHJpbWFyeS0zMDA6ICNhNmMxZmYsXG4gIGNvbG9yLXByaW1hcnktNDAwOiAjNTk4YmZmLFxuICBjb2xvci1wcmltYXJ5LTUwMDogIzMzNjZmZixcbiAgY29sb3ItcHJpbWFyeS02MDA6ICMyNzRiZGIsXG4gIGNvbG9yLXByaW1hcnktNzAwOiAjMWEzNGI4LFxuICBjb2xvci1wcmltYXJ5LTgwMDogIzEwMjY5NCxcbiAgY29sb3ItcHJpbWFyeS05MDA6ICMwOTFjN2EsXG5cbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0xMDA6IHJnYmEoNTEsIDEwMiwgMjU1LCAwLjA4KSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0yMDA6IHJnYmEoNTEsIDEwMiwgMjU1LCAwLjE2KSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0zMDA6IHJnYmEoNTEsIDEwMiwgMjU1LCAwLjI0KSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC00MDA6IHJnYmEoNTEsIDEwMiwgMjU1LCAwLjMyKSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC01MDA6IHJnYmEoNTEsIDEwMiwgMjU1LCAwLjQpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTYwMDogcmdiYSg1MSwgMTAyLCAyNTUsIDAuNDgpLFxuXG4gIGNvbG9yLXN1Y2Nlc3MtMTAwOiAjZjBmZmY1LFxuICBjb2xvci1zdWNjZXNzLTIwMDogI2NjZmNlMyxcbiAgY29sb3Itc3VjY2Vzcy0zMDA6ICM4Y2ZhYzcsXG4gIGNvbG9yLXN1Y2Nlc3MtNDAwOiAjMmNlNjliLFxuICBjb2xvci1zdWNjZXNzLTUwMDogIzAwZDY4ZixcbiAgY29sb3Itc3VjY2Vzcy02MDA6ICMwMGI4ODcsXG4gIGNvbG9yLXN1Y2Nlc3MtNzAwOiAjMDA5OTdhLFxuICBjb2xvci1zdWNjZXNzLTgwMDogIzAwN2Q2YyxcbiAgY29sb3Itc3VjY2Vzcy05MDA6ICMwMDRhNDUsXG5cbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0xMDA6IHJnYmEoMCwgMjE0LCAxNDMsIDAuMDgpLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTIwMDogcmdiYSgwLCAyMTQsIDE0MywgMC4xNiksXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDAsIDIxNCwgMTQzLCAwLjI0KSxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC00MDA6IHJnYmEoMCwgMjE0LCAxNDMsIDAuMzIpLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTUwMDogcmdiYSgwLCAyMTQsIDE0MywgMC40KSxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC02MDA6IHJnYmEoMCwgMjE0LCAxNDMsIDAuNDgpLFxuXG4gIGNvbG9yLWluZm8tMTAwOiAjZjJmOGZmLFxuICBjb2xvci1pbmZvLTIwMDogI2M3ZTJmZixcbiAgY29sb3ItaW5mby0zMDA6ICM5NGNiZmYsXG4gIGNvbG9yLWluZm8tNDAwOiAjNDJhYWZmLFxuICBjb2xvci1pbmZvLTUwMDogIzAwOTVmZixcbiAgY29sb3ItaW5mby02MDA6ICMwMDZmZDYsXG4gIGNvbG9yLWluZm8tNzAwOiAjMDA1N2MyLFxuICBjb2xvci1pbmZvLTgwMDogIzAwNDFhOCxcbiAgY29sb3ItaW5mby05MDA6ICMwMDI4ODUsXG5cbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC0xMDA6IHJnYmEoMCwgMTQ5LCAyNTUsIDAuMDgpLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTIwMDogcmdiYSgwLCAxNDksIDI1NSwgMC4xNiksXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDAsIDE0OSwgMjU1LCAwLjI0KSxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC00MDA6IHJnYmEoMCwgMTQ5LCAyNTUsIDAuMzIpLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTUwMDogcmdiYSgwLCAxNDksIDI1NSwgMC40KSxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC02MDA6IHJnYmEoMCwgMTQ5LCAyNTUsIDAuNDgpLFxuXG4gIGNvbG9yLXdhcm5pbmctMTAwOiAjZmZmZGYyLFxuICBjb2xvci13YXJuaW5nLTIwMDogI2ZmZjFjMixcbiAgY29sb3Itd2FybmluZy0zMDA6ICNmZmU1OWUsXG4gIGNvbG9yLXdhcm5pbmctNDAwOiAjZmZjOTRkLFxuICBjb2xvci13YXJuaW5nLTUwMDogI2ZmYWEwMCxcbiAgY29sb3Itd2FybmluZy02MDA6ICNkYjhiMDAsXG4gIGNvbG9yLXdhcm5pbmctNzAwOiAjYjg2ZTAwLFxuICBjb2xvci13YXJuaW5nLTgwMDogIzk0NTQwMCxcbiAgY29sb3Itd2FybmluZy05MDA6ICM3MDNjMDAsXG5cbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0xMDA6IHJnYmEoMjU1LCAxNzAsIDAsIDAuMDgpLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTIwMDogcmdiYSgyNTUsIDE3MCwgMCwgMC4xNiksXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDI1NSwgMTcwLCAwLCAwLjI0KSxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC00MDA6IHJnYmEoMjU1LCAxNzAsIDAsIDAuMzIpLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTUwMDogcmdiYSgyNTUsIDE3MCwgMCwgMC40KSxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC02MDA6IHJnYmEoMjU1LCAxNzAsIDAsIDAuNDgpLFxuXG4gIGNvbG9yLWRhbmdlci0xMDA6ICNmZmYyZjIsXG4gIGNvbG9yLWRhbmdlci0yMDA6ICNmZmQ2ZDksXG4gIGNvbG9yLWRhbmdlci0zMDA6ICNmZmE4YjQsXG4gIGNvbG9yLWRhbmdlci00MDA6ICNmZjcwOGQsXG4gIGNvbG9yLWRhbmdlci01MDA6ICNmZjNkNzEsXG4gIGNvbG9yLWRhbmdlci02MDA6ICNkYjJjNjYsXG4gIGNvbG9yLWRhbmdlci03MDA6ICNiODFkNWIsXG4gIGNvbG9yLWRhbmdlci04MDA6ICM5NDEyNGUsXG4gIGNvbG9yLWRhbmdlci05MDA6ICM3MDA5NDAsXG5cbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTEwMDogcmdiYSgyNTUsIDYxLCAxMTMsIDAuMDgpLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDI1NSwgNjEsIDExMywgMC4xNiksXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0zMDA6IHJnYmEoMjU1LCA2MSwgMTEzLCAwLjI0KSxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTQwMDogcmdiYSgyNTUsIDYxLCAxMTMsIDAuMzIpLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDI1NSwgNjEsIDExMywgMC40KSxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTYwMDogcmdiYSgyNTUsIDYxLCAxMTMsIDAuNDgpLFxuXG4gIC8qIEJhc2ljIGNvbG9ycyAtIGZvciBiYWNrZ3JvdW5kcyBhbmQgYm9yZGVycyBhbmQgdGV4dHMgKi9cblxuICBjb2xvci1iYXNpYy0xMDA6ICNmZmZmZmYsXG4gIGNvbG9yLWJhc2ljLTIwMDogI2Y3ZjlmYyxcbiAgY29sb3ItYmFzaWMtMzAwOiAjZWRmMWY3LFxuICBjb2xvci1iYXNpYy00MDA6ICNlNGU5ZjIsXG4gIGNvbG9yLWJhc2ljLTUwMDogI2M1Y2VlMCxcbiAgY29sb3ItYmFzaWMtNjAwOiAjOGY5YmIzLFxuICBjb2xvci1iYXNpYy03MDA6ICMyZTNhNTksXG4gIGNvbG9yLWJhc2ljLTgwMDogIzIyMmI0NSxcbiAgY29sb3ItYmFzaWMtOTAwOiAjMTkyMDM4LFxuICBjb2xvci1iYXNpYy0xMDAwOiAjMTUxYTMwLFxuICBjb2xvci1iYXNpYy0xMTAwOiAjMTAxNDI2LFxuXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMDogcmdiYSgxNDMsIDE1NSwgMTc5LCAwLjA4KSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDE0MywgMTU1LCAxNzksIDAuMTYpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDA6IHJnYmEoMTQzLCAxNTUsIDE3OSwgMC4yNCksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTQwMDogcmdiYSgxNDMsIDE1NSwgMTc5LCAwLjMyKSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDE0MywgMTU1LCAxNzksIDAuNCksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMDogcmdiYSgxNDMsIDE1NSwgMTc5LCAwLjQ4KSxcblxuICBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTEwMDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KSxcbiAgY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0yMDA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNiksXG4gIGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpLFxuICBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTQwMDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMyKSxcbiAgY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC01MDA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSxcbiAgY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC02MDA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40OCksXG5cbiAgLyogU3RhdHVzIGNvbG9ycyBzdGF0ZXMgLSBmb2N1cywgaG92ZXIsIGRlZmF1bHQsIGFjdGl2ZSwgZGlzYWJsZWQgICovXG5cbiAgY29sb3ItYmFzaWMtZm9jdXM6IGNvbG9yLWJhc2ljLTQwMCxcbiAgY29sb3ItYmFzaWMtaG92ZXI6IGNvbG9yLWJhc2ljLTIwMCxcbiAgY29sb3ItYmFzaWMtZGVmYXVsdDogY29sb3ItYmFzaWMtMzAwLFxuICBjb2xvci1iYXNpYy1hY3RpdmU6IGNvbG9yLWJhc2ljLTQwMCxcbiAgY29sb3ItYmFzaWMtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItYmFzaWMtZm9jdXMtYm9yZGVyOiBjb2xvci1iYXNpYy01MDAsXG4gIGNvbG9yLWJhc2ljLWhvdmVyLWJvcmRlcjogY29sb3ItYmFzaWMtaG92ZXIsXG4gIGNvbG9yLWJhc2ljLWRlZmF1bHQtYm9yZGVyOiBjb2xvci1iYXNpYy1kZWZhdWx0LFxuICBjb2xvci1iYXNpYy1hY3RpdmUtYm9yZGVyOiBjb2xvci1iYXNpYy1hY3RpdmUsXG4gIGNvbG9yLWJhc2ljLWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtZGlzYWJsZWQsXG5cbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGVmYXVsdDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1hY3RpdmU6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyOiBjb2xvci1iYXNpYy02MDAsXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3ItYmFzaWMtNjAwLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcjogY29sb3ItYmFzaWMtNjAwLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyOiBjb2xvci1iYXNpYy02MDAsXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuXG4gIGNvbG9yLXByaW1hcnktZm9jdXM6IGNvbG9yLXByaW1hcnktNjAwLFxuICBjb2xvci1wcmltYXJ5LWhvdmVyOiBjb2xvci1wcmltYXJ5LTQwMCxcbiAgY29sb3ItcHJpbWFyeS1kZWZhdWx0OiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgY29sb3ItcHJpbWFyeS1hY3RpdmU6IGNvbG9yLXByaW1hcnktNjAwLFxuICBjb2xvci1wcmltYXJ5LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyOiBjb2xvci1wcmltYXJ5LTcwMCxcbiAgY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXI6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIGNvbG9yLXByaW1hcnktZGVmYXVsdC1ib3JkZXI6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgY29sb3ItcHJpbWFyeS1hY3RpdmUtYm9yZGVyOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgY29sb3ItcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLXByaW1hcnktZGlzYWJsZWQsXG5cbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1czogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQ6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMTAwLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZTogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXI6IGNvbG9yLXByaW1hcnktNTAwLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3ItcHJpbWFyeS01MDAsXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLXByaW1hcnktNTAwLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLXByaW1hcnktNTAwLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuXG4gIGNvbG9yLXN1Y2Nlc3MtZm9jdXM6IGNvbG9yLXN1Y2Nlc3MtNjAwLFxuICBjb2xvci1zdWNjZXNzLWhvdmVyOiBjb2xvci1zdWNjZXNzLTQwMCxcbiAgY29sb3Itc3VjY2Vzcy1kZWZhdWx0OiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgY29sb3Itc3VjY2Vzcy1hY3RpdmU6IGNvbG9yLXN1Y2Nlc3MtNjAwLFxuICBjb2xvci1zdWNjZXNzLWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyOiBjb2xvci1zdWNjZXNzLTcwMCxcbiAgY29sb3Itc3VjY2Vzcy1ob3Zlci1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgY29sb3Itc3VjY2Vzcy1hY3RpdmUtYm9yZGVyOiBjb2xvci1zdWNjZXNzLWFjdGl2ZSxcbiAgY29sb3Itc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtZGlzYWJsZWQsXG5cbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1mb2N1czogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyOiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3ZlcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyOiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0OiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTEwMCxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcjogY29sb3Itc3VjY2Vzcy01MDAsXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyOiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuXG4gIGNvbG9yLWluZm8tZm9jdXM6IGNvbG9yLWluZm8tNjAwLFxuICBjb2xvci1pbmZvLWhvdmVyOiBjb2xvci1pbmZvLTQwMCxcbiAgY29sb3ItaW5mby1kZWZhdWx0OiBjb2xvci1pbmZvLTUwMCxcbiAgY29sb3ItaW5mby1hY3RpdmU6IGNvbG9yLWluZm8tNjAwLFxuICBjb2xvci1pbmZvLWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWluZm8tZm9jdXMtYm9yZGVyOiBjb2xvci1pbmZvLTcwMCxcbiAgY29sb3ItaW5mby1ob3Zlci1ib3JkZXI6IGNvbG9yLWluZm8taG92ZXIsXG4gIGNvbG9yLWluZm8tZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgY29sb3ItaW5mby1hY3RpdmUtYm9yZGVyOiBjb2xvci1pbmZvLWFjdGl2ZSxcbiAgY29sb3ItaW5mby1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWluZm8tZGlzYWJsZWQsXG5cbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1czogY29sb3ItaW5mby10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQ6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMTAwLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWFjdGl2ZTogY29sb3ItaW5mby10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXI6IGNvbG9yLWluZm8tNTAwLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3ItaW5mby01MDAsXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWluZm8tNTAwLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWluZm8tNTAwLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuXG4gIGNvbG9yLXdhcm5pbmctZm9jdXM6IGNvbG9yLXdhcm5pbmctNjAwLFxuICBjb2xvci13YXJuaW5nLWhvdmVyOiBjb2xvci13YXJuaW5nLTQwMCxcbiAgY29sb3Itd2FybmluZy1kZWZhdWx0OiBjb2xvci13YXJuaW5nLTUwMCxcbiAgY29sb3Itd2FybmluZy1hY3RpdmU6IGNvbG9yLXdhcm5pbmctNjAwLFxuICBjb2xvci13YXJuaW5nLWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLXdhcm5pbmctZm9jdXMtYm9yZGVyOiBjb2xvci13YXJuaW5nLTcwMCxcbiAgY29sb3Itd2FybmluZy1ob3Zlci1ib3JkZXI6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIGNvbG9yLXdhcm5pbmctZGVmYXVsdC1ib3JkZXI6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgY29sb3Itd2FybmluZy1hY3RpdmUtYm9yZGVyOiBjb2xvci13YXJuaW5nLWFjdGl2ZSxcbiAgY29sb3Itd2FybmluZy1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLXdhcm5pbmctZGlzYWJsZWQsXG5cbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1czogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRlZmF1bHQ6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMTAwLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZTogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXI6IGNvbG9yLXdhcm5pbmctNTAwLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3Itd2FybmluZy01MDAsXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLXdhcm5pbmctNTAwLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLXdhcm5pbmctNTAwLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuXG4gIGNvbG9yLWRhbmdlci1mb2N1czogY29sb3ItZGFuZ2VyLTYwMCxcbiAgY29sb3ItZGFuZ2VyLWhvdmVyOiBjb2xvci1kYW5nZXItNDAwLFxuICBjb2xvci1kYW5nZXItZGVmYXVsdDogY29sb3ItZGFuZ2VyLTUwMCxcbiAgY29sb3ItZGFuZ2VyLWFjdGl2ZTogY29sb3ItZGFuZ2VyLTYwMCxcbiAgY29sb3ItZGFuZ2VyLWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWRhbmdlci1mb2N1cy1ib3JkZXI6IGNvbG9yLWRhbmdlci03MDAsXG4gIGNvbG9yLWRhbmdlci1ob3Zlci1ib3JkZXI6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgY29sb3ItZGFuZ2VyLWRlZmF1bHQtYm9yZGVyOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgY29sb3ItZGFuZ2VyLWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWRhbmdlci1hY3RpdmUsXG4gIGNvbG9yLWRhbmdlci1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWRhbmdlci1kaXNhYmxlZCxcblxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3ZlcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQ6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0xMDAsXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1hY3RpdmU6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyOiBjb2xvci1kYW5nZXItNTAwLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyOiBjb2xvci1kYW5nZXItNTAwLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWRhbmdlci01MDAsXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyOiBjb2xvci1kYW5nZXItNTAwLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG5cbiAgY29sb3ItY29udHJvbC1mb2N1czogY29sb3ItYmFzaWMtMzAwLFxuICBjb2xvci1jb250cm9sLWhvdmVyOiBjb2xvci1iYXNpYy0yMDAsXG4gIGNvbG9yLWNvbnRyb2wtZGVmYXVsdDogY29sb3ItYmFzaWMtMTAwLFxuICBjb2xvci1jb250cm9sLWFjdGl2ZTogY29sb3ItYmFzaWMtMzAwLFxuICBjb2xvci1jb250cm9sLWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWNvbnRyb2wtZm9jdXMtYm9yZGVyOiBjb2xvci1iYXNpYy01MDAsXG4gIGNvbG9yLWNvbnRyb2wtaG92ZXItYm9yZGVyOiBjb2xvci1jb250cm9sLWhvdmVyLFxuICBjb2xvci1jb250cm9sLWRlZmF1bHQtYm9yZGVyOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIGNvbG9yLWNvbnRyb2wtYWN0aXZlLWJvcmRlcjogY29sb3ItY29udHJvbC1hY3RpdmUsXG4gIGNvbG9yLWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1jb250cm9sLWRpc2FibGVkLFxuXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0OiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTEwMCxcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmU6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyOiBjb2xvci1iYXNpYy0xMDAsXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyOiBjb2xvci1iYXNpYy0xMDAsXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWJhc2ljLTEwMCxcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyOiBjb2xvci1iYXNpYy0xMDAsXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG5cbiAgLyogQmFja2dyb3VuZHMgYW5kIGJvcmRlcnMgLSBiYXNpYywgYWx0ZXJuYXRpdmUgYW5kIHByaW1hcnkgICovXG5cbiAgYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xOiBjb2xvci1iYXNpYy0xMDAsXG4gIGJhY2tncm91bmQtYmFzaWMtY29sb3ItMjogY29sb3ItYmFzaWMtMjAwLFxuICBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTMwMCxcbiAgYmFja2dyb3VuZC1iYXNpYy1jb2xvci00OiBjb2xvci1iYXNpYy00MDAsXG5cbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTEwMCxcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTIwMCxcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTMwMCxcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTQwMCxcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTU6IGNvbG9yLWJhc2ljLTUwMCxcblxuICBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTgwMCxcbiAgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci0yOiBjb2xvci1iYXNpYy05MDAsXG4gIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItMzogY29sb3ItYmFzaWMtMTAwMCxcbiAgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci00OiBjb2xvci1iYXNpYy0xMTAwLFxuXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci0xOiBjb2xvci1iYXNpYy04MDAsXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci0yOiBjb2xvci1iYXNpYy05MDAsXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci0zOiBjb2xvci1iYXNpYy0xMDAwLFxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItNDogY29sb3ItYmFzaWMtMTEwMCxcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTU6IGNvbG9yLWJhc2ljLTExMDAsXG5cbiAgYmFja2dyb3VuZC1wcmltYXJ5LWNvbG9yLTE6IGNvbG9yLXByaW1hcnktNTAwLFxuICBiYWNrZ3JvdW5kLXByaW1hcnktY29sb3ItMjogY29sb3ItcHJpbWFyeS02MDAsXG4gIGJhY2tncm91bmQtcHJpbWFyeS1jb2xvci0zOiBjb2xvci1wcmltYXJ5LTcwMCxcbiAgYmFja2dyb3VuZC1wcmltYXJ5LWNvbG9yLTQ6IGNvbG9yLXByaW1hcnktODAwLFxuXG4gIGJvcmRlci1wcmltYXJ5LWNvbG9yLTE6IGNvbG9yLWJhc2ljLTUwMCxcbiAgYm9yZGVyLXByaW1hcnktY29sb3ItMjogY29sb3ItYmFzaWMtNjAwLFxuICBib3JkZXItcHJpbWFyeS1jb2xvci0zOiBjb2xvci1iYXNpYy03MDAsXG4gIGJvcmRlci1wcmltYXJ5LWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTgwMCxcbiAgYm9yZGVyLXByaW1hcnktY29sb3ItNTogY29sb3ItYmFzaWMtOTAwLFxuXG4gIC8qIFRleHQgY29sb3JzIC0gZ2VuZXJhbCBhbmQgc3RhdHVzICovXG5cbiAgdGV4dC1iYXNpYy1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICB0ZXh0LWFsdGVybmF0ZS1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICB0ZXh0LWNvbnRyb2wtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgdGV4dC1kaXNhYmxlZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICB0ZXh0LWhpbnQtY29sb3I6IGNvbG9yLWJhc2ljLTYwMCxcblxuICB0ZXh0LXByaW1hcnktY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgdGV4dC1wcmltYXJ5LWZvY3VzLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICB0ZXh0LXByaW1hcnktaG92ZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHRleHQtcHJpbWFyeS1hY3RpdmUtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICB0ZXh0LXByaW1hcnktZGlzYWJsZWQtY29sb3I6IGNvbG9yLXByaW1hcnktNDAwLFxuXG4gIHRleHQtc3VjY2Vzcy1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICB0ZXh0LXN1Y2Nlc3MtZm9jdXMtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIHRleHQtc3VjY2Vzcy1ob3Zlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgdGV4dC1zdWNjZXNzLWFjdGl2ZS1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUsXG4gIHRleHQtc3VjY2Vzcy1kaXNhYmxlZC1jb2xvcjogY29sb3Itc3VjY2Vzcy00MDAsXG5cbiAgdGV4dC1pbmZvLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHRleHQtaW5mby1mb2N1cy1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgdGV4dC1pbmZvLWhvdmVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICB0ZXh0LWluZm8tYWN0aXZlLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZSxcbiAgdGV4dC1pbmZvLWRpc2FibGVkLWNvbG9yOiBjb2xvci1pbmZvLTQwMCxcblxuICB0ZXh0LXdhcm5pbmctY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgdGV4dC13YXJuaW5nLWZvY3VzLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLFxuICB0ZXh0LXdhcm5pbmctaG92ZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIHRleHQtd2FybmluZy1hY3RpdmUtY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLFxuICB0ZXh0LXdhcm5pbmctZGlzYWJsZWQtY29sb3I6IGNvbG9yLXdhcm5pbmctNDAwLFxuXG4gIHRleHQtZGFuZ2VyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgdGV4dC1kYW5nZXItZm9jdXMtY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cyxcbiAgdGV4dC1kYW5nZXItaG92ZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgdGV4dC1kYW5nZXItYWN0aXZlLWNvbG9yOiBjb2xvci1kYW5nZXItYWN0aXZlLFxuICB0ZXh0LWRhbmdlci1kaXNhYmxlZC1jb2xvcjogY29sb3ItZGFuZ2VyLTQwMCxcblxuICAvKiBGb250cyBhbmQgdGV4dCBzdHlsZXMgLSBoZWFkaW5ncywgc3VidGl0bGVzLCBwYXJhZ3JhcGhzLCBjYXB0aW9ucywgYnV0dG9uICovXG5cbiAgZm9udC1mYW1pbHktcHJpbWFyeTogdW5xdW90ZSgnT3BlbiBTYW5zLCBzYW5zLXNlcmlmJyksXG4gIGZvbnQtZmFtaWx5LXNlY29uZGFyeTogZm9udC1mYW1pbHktcHJpbWFyeSxcblxuICB0ZXh0LWhlYWRpbmctMS1mb250LWZhbWlseTogZm9udC1mYW1pbHktc2Vjb25kYXJ5LFxuICB0ZXh0LWhlYWRpbmctMS1mb250LXNpemU6IDIuMjVyZW0sXG4gIHRleHQtaGVhZGluZy0xLWZvbnQtd2VpZ2h0OiA3MDAsXG4gIHRleHQtaGVhZGluZy0xLWxpbmUtaGVpZ2h0OiAzcmVtLFxuXG4gIHRleHQtaGVhZGluZy0yLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1zZWNvbmRhcnksXG4gIHRleHQtaGVhZGluZy0yLWZvbnQtc2l6ZTogMnJlbSxcbiAgdGV4dC1oZWFkaW5nLTItZm9udC13ZWlnaHQ6IDcwMCxcbiAgdGV4dC1oZWFkaW5nLTItbGluZS1oZWlnaHQ6IDIuNXJlbSxcblxuICB0ZXh0LWhlYWRpbmctMy1mb250LWZhbWlseTogZm9udC1mYW1pbHktc2Vjb25kYXJ5LFxuICB0ZXh0LWhlYWRpbmctMy1mb250LXNpemU6IDEuODc1cmVtLFxuICB0ZXh0LWhlYWRpbmctMy1mb250LXdlaWdodDogNzAwLFxuICB0ZXh0LWhlYWRpbmctMy1saW5lLWhlaWdodDogMi41cmVtLFxuXG4gIHRleHQtaGVhZGluZy00LWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1zZWNvbmRhcnksXG4gIHRleHQtaGVhZGluZy00LWZvbnQtc2l6ZTogMS42MjVyZW0sXG4gIHRleHQtaGVhZGluZy00LWZvbnQtd2VpZ2h0OiA3MDAsXG4gIHRleHQtaGVhZGluZy00LWxpbmUtaGVpZ2h0OiAycmVtLFxuXG4gIHRleHQtaGVhZGluZy01LWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1zZWNvbmRhcnksXG4gIHRleHQtaGVhZGluZy01LWZvbnQtc2l6ZTogMS4zNzVyZW0sXG4gIHRleHQtaGVhZGluZy01LWZvbnQtd2VpZ2h0OiA3MDAsXG4gIHRleHQtaGVhZGluZy01LWxpbmUtaGVpZ2h0OiAycmVtLFxuXG4gIHRleHQtaGVhZGluZy02LWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1zZWNvbmRhcnksXG4gIHRleHQtaGVhZGluZy02LWZvbnQtc2l6ZTogMS4xMjVyZW0sXG4gIHRleHQtaGVhZGluZy02LWZvbnQtd2VpZ2h0OiA3MDAsXG4gIHRleHQtaGVhZGluZy02LWxpbmUtaGVpZ2h0OiAxLjVyZW0sXG5cbiAgdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseTogZm9udC1mYW1pbHktcHJpbWFyeSxcbiAgdGV4dC1zdWJ0aXRsZS1mb250LXNpemU6IDAuOTM3NXJlbSxcbiAgdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodDogNjAwLFxuICB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0OiAxLjVyZW0sXG5cbiAgdGV4dC1zdWJ0aXRsZS0yLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1wcmltYXJ5LFxuICB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplOiAwLjgxMjVyZW0sXG4gIHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodDogNjAwLFxuICB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQ6IDEuNXJlbSxcblxuICB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseTogZm9udC1mYW1pbHktcHJpbWFyeSxcbiAgdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplOiAwLjkzNzVyZW0sXG4gIHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0OiA0MDAsXG4gIHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0OiAxLjI1cmVtLFxuXG4gIHRleHQtcGFyYWdyYXBoLTItZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXByaW1hcnksXG4gIHRleHQtcGFyYWdyYXBoLTItZm9udC1zaXplOiAwLjgxMjVyZW0sXG4gIHRleHQtcGFyYWdyYXBoLTItZm9udC13ZWlnaHQ6IDQwMCxcbiAgdGV4dC1wYXJhZ3JhcGgtMi1saW5lLWhlaWdodDogMS4xMjVyZW0sXG5cbiAgdGV4dC1sYWJlbC1mb250LWZhbWlseTogZm9udC1mYW1pbHktcHJpbWFyeSxcbiAgdGV4dC1sYWJlbC1mb250LXNpemU6IDAuNzVyZW0sXG4gIHRleHQtbGFiZWwtZm9udC13ZWlnaHQ6IDcwMCxcbiAgdGV4dC1sYWJlbC1saW5lLWhlaWdodDogMXJlbSxcblxuICB0ZXh0LWNhcHRpb24tZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXByaW1hcnksXG4gIHRleHQtY2FwdGlvbi1mb250LXNpemU6IDAuNzVyZW0sXG4gIHRleHQtY2FwdGlvbi1mb250LXdlaWdodDogNDAwLFxuICB0ZXh0LWNhcHRpb24tbGluZS1oZWlnaHQ6IDFyZW0sXG5cbiAgdGV4dC1jYXB0aW9uLTItZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXByaW1hcnksXG4gIHRleHQtY2FwdGlvbi0yLWZvbnQtc2l6ZTogMC43NXJlbSxcbiAgdGV4dC1jYXB0aW9uLTItZm9udC13ZWlnaHQ6IDYwMCxcbiAgdGV4dC1jYXB0aW9uLTItbGluZS1oZWlnaHQ6IDFyZW0sXG5cbiAgdGV4dC1idXR0b24tZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXByaW1hcnksXG4gIHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0OiA3MDAsXG4gIHRleHQtYnV0dG9uLXRpbnktZm9udC1zaXplOiAwLjYyNXJlbSxcbiAgdGV4dC1idXR0b24tdGlueS1saW5lLWhlaWdodDogMC43NXJlbSxcbiAgdGV4dC1idXR0b24tc21hbGwtZm9udC1zaXplOiAwLjc1cmVtLFxuICB0ZXh0LWJ1dHRvbi1zbWFsbC1saW5lLWhlaWdodDogMXJlbSxcbiAgdGV4dC1idXR0b24tbWVkaXVtLWZvbnQtc2l6ZTogMC44NzVyZW0sXG4gIHRleHQtYnV0dG9uLW1lZGl1bS1saW5lLWhlaWdodDogMXJlbSxcbiAgdGV4dC1idXR0b24tbGFyZ2UtZm9udC1zaXplOiAxcmVtLFxuICB0ZXh0LWJ1dHRvbi1sYXJnZS1saW5lLWhlaWdodDogMS4yNXJlbSxcbiAgdGV4dC1idXR0b24tZ2lhbnQtZm9udC1zaXplOiAxLjEyNXJlbSxcbiAgdGV4dC1idXR0b24tZ2lhbnQtbGluZS1oZWlnaHQ6IDEuNXJlbSxcblxuICAvKiBTdXBwb3J0aW5nIHZhcmlhYmxlcyAtIGJvcmRlciByYWRpdXMsIG91dGxpbmUsIHNoYWRvdywgZGl2aWRlciAqL1xuXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW0sXG5cbiAgb3V0bGluZS13aWR0aDogMC4zNzVyZW0sXG4gIG91dGxpbmUtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcblxuICBzY3JvbGxiYXItY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItNCxcbiAgc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2Nyb2xsYmFyLXdpZHRoOiAwLjMxMjVyZW0sXG5cbiAgc2hhZG93OiAwIDAuNXJlbSAxcmVtIDAgcmdiYSg0NCwgNTEsIDczLCAwLjEpLFxuXG4gIGRpdmlkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0zLFxuICBkaXZpZGVyLXN0eWxlOiBzb2xpZCxcbiAgZGl2aWRlci13aWR0aDogMXB4LFxuKTtcblxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCBkZWZhdWx0KTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGltcG9ydCAnLi4vY29yZS9mdW5jdGlvbnMnO1xuQGltcG9ydCAnLi4vY29yZS9taXhpbnMnO1xuQGltcG9ydCAnZGVmYXVsdCc7XG5cbiR0aGVtZTogKFxuICBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTgwMCxcbiAgYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yOiBjb2xvci1iYXNpYy05MDAsXG4gIGJhY2tncm91bmQtYmFzaWMtY29sb3ItMzogY29sb3ItYmFzaWMtMTAwMCxcbiAgYmFja2dyb3VuZC1iYXNpYy1jb2xvci00OiBjb2xvci1iYXNpYy0xMTAwLFxuXG4gIGJvcmRlci1iYXNpYy1jb2xvci0xOiBjb2xvci1iYXNpYy04MDAsXG4gIGJvcmRlci1iYXNpYy1jb2xvci0yOiBjb2xvci1iYXNpYy05MDAsXG4gIGJvcmRlci1iYXNpYy1jb2xvci0zOiBjb2xvci1iYXNpYy0xMDAwLFxuICBib3JkZXItYmFzaWMtY29sb3ItNDogY29sb3ItYmFzaWMtMTEwMCxcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTU6IGNvbG9yLWJhc2ljLTExMDAsXG5cbiAgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci0xOiBjb2xvci1iYXNpYy0xMDAsXG4gIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItMjogY29sb3ItYmFzaWMtMjAwLFxuICBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTMwMCxcbiAgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci00OiBjb2xvci1iYXNpYy00MDAsXG5cbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTEwMCxcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTIwMCxcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTMwMCxcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTQwMCxcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTU6IGNvbG9yLWJhc2ljLTUwMCxcblxuICB0ZXh0LWJhc2ljLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHRleHQtYWx0ZXJuYXRlLWNvbG9yOiBjb2xvci1iYXNpYy05MDAsXG4gIHRleHQtZGlzYWJsZWQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICBzaGFkb3c6IDAgMC41cmVtIDFyZW0gMCAjMWExZjMzLFxuICBvdXRsaW5lLWNvbG9yOiBjb2xvci1iYXNpYy03MDAsXG4pO1xuXG4vLyByZWdpc3RlciB0aGUgdGhlbWVcbiRuYi10aGVtZXM6IG5iLXJlZ2lzdGVyLXRoZW1lKCR0aGVtZSwgZGFyaywgZGVmYXVsdCk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBpbXBvcnQgJy4uL2NvcmUvZnVuY3Rpb25zJztcbkBpbXBvcnQgJy4uL2NvcmUvbWl4aW5zJztcbkBpbXBvcnQgJ2RhcmsnO1xuXG4kdGhlbWU6IChcblxuICBjb2xvci1wcmltYXJ5LTEwMDogI2ZhZjdmZixcbiAgY29sb3ItcHJpbWFyeS0yMDA6ICNlY2UzZmYsXG4gIGNvbG9yLXByaW1hcnktMzAwOiAjZDViZmZmLFxuICBjb2xvci1wcmltYXJ5LTQwMDogI2IxOGFmZixcbiAgY29sb3ItcHJpbWFyeS01MDA6ICNhMTZlZmYsXG4gIGNvbG9yLXByaW1hcnktNjAwOiAjN2I1MWRiLFxuICBjb2xvci1wcmltYXJ5LTcwMDogIzVhMzdiOCxcbiAgY29sb3ItcHJpbWFyeS04MDA6ICMzZTI0OTQsXG4gIGNvbG9yLXByaW1hcnktOTAwOiAjMjkxNTdhLFxuXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDE2MSwgMTEwLCAyNTUsIDAuMDgpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTIwMDogcmdiYSgxNjEsIDExMCwgMjU1LCAwLjE2KSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0zMDA6IHJnYmEoMTYxLCAxMTAsIDI1NSwgMC4yNCksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDE2MSwgMTEwLCAyNTUsIDAuMzIpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTUwMDogcmdiYSgxNjEsIDExMCwgMjU1LCAwLjQpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTYwMDogcmdiYSgxNjEsIDExMCwgMjU1LCAwLjQ4KSxcblxuICBjb2xvci1iYXNpYy0xMDA6ICNmZmZmZmYsXG4gIGNvbG9yLWJhc2ljLTIwMDogI2Y3ZjdmYyxcbiAgY29sb3ItYmFzaWMtMzAwOiAjZjBmMGZhLFxuICBjb2xvci1iYXNpYy00MDA6ICNlMWUxZjIsXG4gIGNvbG9yLWJhc2ljLTUwMDogI2NlY2VlYixcbiAgY29sb3ItYmFzaWMtNjAwOiAjYjRiNGRiLFxuICBjb2xvci1iYXNpYy03MDA6ICM2YTZhOTQsXG4gIGNvbG9yLWJhc2ljLTgwMDogIzMyMzI1OSxcbiAgY29sb3ItYmFzaWMtOTAwOiAjMjUyNTQ3LFxuICBjb2xvci1iYXNpYy0xMDAwOiAjMWIxYjM4LFxuICBjb2xvci1iYXNpYy0xMTAwOiAjMTMxMzJiLFxuXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMDogcmdiYSgxODAsIDE4MCwgMjE5LCAwLjA4KSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDE4MCwgMTgwLCAyMTksIDAuMTYpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDA6IHJnYmEoMTgwLCAxODAsIDIxOSwgMC4yNCksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTQwMDogcmdiYSgxODAsIDE4MCwgMjE5LCAwLjMyKSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDE4MCwgMTgwLCAyMTksIDAuNCksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMDogcmdiYSgxODAsIDE4MCwgMjE5LCAwLjQ4KSxcbik7XG5cbiRuYi10aGVtZXM6IG5iLXJlZ2lzdGVyLXRoZW1lKCR0aGVtZSwgY29zbWljLCBkYXJrKTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGltcG9ydCAnLi4vY29yZS9mdW5jdGlvbnMnO1xuQGltcG9ydCAnLi4vY29yZS9taXhpbnMnO1xuQGltcG9ydCAnZGVmYXVsdCc7XG5cbiR0aGVtZTogKFxuICBib3JkZXItcmFkaXVzOiAwLjE3cmVtLFxuICBzaGFkb3c6IG5vbmUsXG5cbiAgYnV0dG9uLWhlcm8tZ2xvdy1zaXplOiAwIDAgMjBweCAwLFxuXG4gIGNhcmQtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIGNhcmQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcblxuICBjb250ZXh0LW1lbnUtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIGNvbnRleHQtbWVudS1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuXG4gIHRhYnMtc2VsZWN0ZWQ6IGNvbG9yLXByaW1hcnktNTAwLFxuICB0YWJzLXNlbGVjdGVkLXNlY29uZC1jb2xvcjogY29sb3ItcHJpbWFyeS01MDAsXG5cbiAgcG9wb3Zlci1ib3JkZXItd2lkdGg6IDFweCxcbiAgcG9wb3Zlci1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuXG4gIHRhYnNldC1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICByb3V0ZS10YWJzZXQtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgdXNlci1yZWN0YW5nbGUtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgY2hlY2tib3gtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgbW9kYWwtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcblxuICB0YWJzZXQtc2hhZG93OiBub25lLFxuICByb3V0ZS10YWJzZXQtc2hhZG93OiBub25lLFxuICBidXR0b24taGVyby1zaGFkb3c6IG5vbmUsXG4gIGFsZXJ0LXNoYWRvdzogbm9uZSxcbiAgYWNjb3JkaW9uLXNoYWRvdzogbm9uZSxcbik7XG5cbiRuYi10aGVtZXM6IG5iLXJlZ2lzdGVyLXRoZW1lKCR0aGVtZSwgY29ycG9yYXRlLCBkZWZhdWx0KTtcbiIsIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbiAqL1xyXG5cclxuQGltcG9ydCAnfkBuZWJ1bGFyL3RoZW1lL3N0eWxlcy9jb3JlL2Z1bmN0aW9ucyc7XHJcbkBpbXBvcnQgJ35AbmVidWxhci90aGVtZS9zdHlsZXMvY29yZS9taXhpbnMnO1xyXG5cclxuJHRoZW1lOiAoXHJcbiAgY29sb3ItcHJpbWFyeS0xMDA6ICNmZmYyZjcsXHJcbiAgY29sb3ItcHJpbWFyeS0yMDA6ICNmZmQ0ZTMsXHJcbiAgY29sb3ItcHJpbWFyeS0zMDA6ICNmYzlhYmMsXHJcbiAgY29sb3ItcHJpbWFyeS00MDA6ICNmMjQ2ODEsXHJcbiAgY29sb3ItcHJpbWFyeS01MDA6ICNlOTFkNjMsXHJcbiAgY29sb3ItcHJpbWFyeS02MDA6ICNjNzE0NTEsXHJcbiAgY29sb3ItcHJpbWFyeS03MDA6ICNhODBkNDMsXHJcbiAgY29sb3ItcHJpbWFyeS04MDA6ICM4NzA5MzUsXHJcbiAgY29sb3ItcHJpbWFyeS05MDA6ICM3MDA2MmEsXHJcblxyXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDIzMywgMjksIDk5LCAwLjA4KSxcclxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTIwMDogcmdiYSgyMzMsIDI5LCA5OSwgMC4xNiksXHJcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0zMDA6IHJnYmEoMjMzLCAyOSwgOTksIDAuMjQpLFxyXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDIzMywgMjksIDk5LCAwLjMyKSxcclxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTUwMDogcmdiYSgyMzMsIDI5LCA5OSwgMC40KSxcclxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTYwMDogcmdiYSgyMzMsIDI5LCA5OSwgMC40OCksXHJcblxyXG4gIGNvbG9yLXN1Y2Nlc3MtMTAwOiAjZWRmYmQxLFxyXG4gIGNvbG9yLXN1Y2Nlc3MtMjAwOiAjZDdmN2E2LFxyXG4gIGNvbG9yLXN1Y2Nlc3MtMzAwOiAjYjRlNzc1LFxyXG4gIGNvbG9yLXN1Y2Nlc3MtNDAwOiAjOGZjZjUwLFxyXG4gIGNvbG9yLXN1Y2Nlc3MtNTAwOiAjNjBhZjIwLFxyXG4gIGNvbG9yLXN1Y2Nlc3MtNjAwOiAjNDk5NjE3LFxyXG4gIGNvbG9yLXN1Y2Nlc3MtNzAwOiAjMzU3ZDEwLFxyXG4gIGNvbG9yLXN1Y2Nlc3MtODAwOiAjMjQ2NTBhLFxyXG4gIGNvbG9yLXN1Y2Nlc3MtOTAwOiAjMTc1MzA2LFxyXG5cclxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTEwMDogcmdiYSg5NiwgMTc1LCAzMiwgMC4wOCksXHJcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0yMDA6IHJnYmEoOTYsIDE3NSwgMzIsIDAuMTYpLFxyXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDk2LCAxNzUsIDMyLCAwLjI0KSxcclxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTQwMDogcmdiYSg5NiwgMTc1LCAzMiwgMC4zMiksXHJcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC01MDA6IHJnYmEoOTYsIDE3NSwgMzIsIDAuNCksXHJcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC02MDA6IHJnYmEoOTYsIDE3NSwgMzIsIDAuNDgpLFxyXG5cclxuICBjb2xvci1pbmZvLTEwMDogI2NjZjdmZSxcclxuICBjb2xvci1pbmZvLTIwMDogIzk5ZTlmZCxcclxuICBjb2xvci1pbmZvLTMwMDogIzY2ZDNmOSxcclxuICBjb2xvci1pbmZvLTQwMDogIzQwYmJmNCxcclxuICBjb2xvci1pbmZvLTUwMDogIzA0OTVlZSxcclxuICBjb2xvci1pbmZvLTYwMDogIzAyNzNjYyxcclxuICBjb2xvci1pbmZvLTcwMDogIzAyNTZhYixcclxuICBjb2xvci1pbmZvLTgwMDogIzAxM2Q4YSxcclxuICBjb2xvci1pbmZvLTkwMDogIzAwMmI3MixcclxuXHJcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC0xMDA6IHJnYmEoNCwgMTQ5LCAyMzgsIDAuMDgpLFxyXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDQsIDE0OSwgMjM4LCAwLjE2KSxcclxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTMwMDogcmdiYSg0LCAxNDksIDIzOCwgMC4yNCksXHJcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC00MDA6IHJnYmEoNCwgMTQ5LCAyMzgsIDAuMzIpLFxyXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDQsIDE0OSwgMjM4LCAwLjQpLFxyXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDQsIDE0OSwgMjM4LCAwLjQ4KSxcclxuXHJcbiAgY29sb3Itd2FybmluZy0xMDA6ICNmZmYzY2QsXHJcbiAgY29sb3Itd2FybmluZy0yMDA6ICNmZmU0OWIsXHJcbiAgY29sb3Itd2FybmluZy0zMDA6ICNmZmQxNjksXHJcbiAgY29sb3Itd2FybmluZy00MDA6ICNmZmJlNDMsXHJcbiAgY29sb3Itd2FybmluZy01MDA6ICNmZjlmMDUsXHJcbiAgY29sb3Itd2FybmluZy02MDA6ICNkYjgwMDMsXHJcbiAgY29sb3Itd2FybmluZy03MDA6ICNiNzYzMDIsXHJcbiAgY29sb3Itd2FybmluZy04MDA6ICM5MzRhMDEsXHJcbiAgY29sb3Itd2FybmluZy05MDA6ICM3YTM4MDAsXHJcblxyXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDI1NSwgMTU5LCA1LCAwLjA4KSxcclxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTIwMDogcmdiYSgyNTUsIDE1OSwgNSwgMC4xNiksXHJcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0zMDA6IHJnYmEoMjU1LCAxNTksIDUsIDAuMjQpLFxyXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDI1NSwgMTU5LCA1LCAwLjMyKSxcclxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTUwMDogcmdiYSgyNTUsIDE1OSwgNSwgMC40KSxcclxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTYwMDogcmdiYSgyNTUsIDE1OSwgNSwgMC40OCksXHJcblxyXG4gIGNvbG9yLWRhbmdlci0xMDA6ICNmYmQyYzgsXHJcbiAgY29sb3ItZGFuZ2VyLTIwMDogI2Y3OWU5NCxcclxuICBjb2xvci1kYW5nZXItMzAwOiAjZTc1ZDVjLFxyXG4gIGNvbG9yLWRhbmdlci00MDA6ICNjZjMzNDEsXHJcbiAgY29sb3ItZGFuZ2VyLTUwMDogI2IwMDAyMCxcclxuICBjb2xvci1kYW5nZXItNjAwOiAjOTcwMDI5LFxyXG4gIGNvbG9yLWRhbmdlci03MDA6ICM3ZTAwMmUsXHJcbiAgY29sb3ItZGFuZ2VyLTgwMDogIzY2MDAyZixcclxuICBjb2xvci1kYW5nZXItOTAwOiAjNTQwMDJmLFxyXG5cclxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDE3NiwgMCwgMzIsIDAuMDgpLFxyXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0yMDA6IHJnYmEoMTc2LCAwLCAzMiwgMC4xNiksXHJcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTMwMDogcmdiYSgxNzYsIDAsIDMyLCAwLjI0KSxcclxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDE3NiwgMCwgMzIsIDAuMzIpLFxyXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC01MDA6IHJnYmEoMTc2LCAwLCAzMiwgMC40KSxcclxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDE3NiwgMCwgMzIsIDAuNDgpLFxyXG5cclxuICBjb2xvci1iYXNpYy0xMDA6ICNmZmZmZmYsXHJcbiAgY29sb3ItYmFzaWMtMjAwOiAjZjVmNWY1LFxyXG4gIGNvbG9yLWJhc2ljLTMwMDogI2Y1ZjVmNSxcclxuICBjb2xvci1iYXNpYy00MDA6ICNkNGQ0ZDQsXHJcbiAgY29sb3ItYmFzaWMtNTAwOiAjYjNiM2IzLFxyXG4gIGNvbG9yLWJhc2ljLTYwMDogIzgwODA4MCxcclxuICBjb2xvci1iYXNpYy03MDA6ICM0MDQwNDAsXHJcbiAgY29sb3ItYmFzaWMtODAwOiAjMzUzNTM1LFxyXG4gIGNvbG9yLWJhc2ljLTkwMDogIzMwMzAzMCxcclxuICBjb2xvci1iYXNpYy0xMDAwOiAjMWYxZjFmLFxyXG4gIGNvbG9yLWJhc2ljLTExMDA6ICMxNDE0MTQsXHJcblxyXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMDogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjA4KSxcclxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDA6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4xNiksXHJcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMjQpLFxyXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTQwMDogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjMyKSxcclxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC01MDA6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC40KSxcclxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDA6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC40OCksXHJcblxyXG4gIGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpLFxyXG4gIGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTYpLFxyXG4gIGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpLFxyXG4gIGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzIpLFxyXG4gIGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksXHJcbiAgY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC02MDA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40OCksXHJcblxyXG4gIGNvbG9yLWJhc2ljLWZvY3VzOiBjb2xvci1iYXNpYy00MDAsXHJcbiAgY29sb3ItYmFzaWMtaG92ZXI6IGNvbG9yLWJhc2ljLTIwMCxcclxuICBjb2xvci1iYXNpYy1kZWZhdWx0OiBjb2xvci1iYXNpYy0zMDAsXHJcbiAgY29sb3ItYmFzaWMtYWN0aXZlOiBjb2xvci1iYXNpYy00MDAsXHJcbiAgY29sb3ItYmFzaWMtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcclxuICBjb2xvci1iYXNpYy1mb2N1cy1ib3JkZXI6IGNvbG9yLWJhc2ljLTUwMCxcclxuICBjb2xvci1iYXNpYy1ob3Zlci1ib3JkZXI6IGNvbG9yLWJhc2ljLWhvdmVyLFxyXG4gIGNvbG9yLWJhc2ljLWRlZmF1bHQtYm9yZGVyOiBjb2xvci1iYXNpYy1kZWZhdWx0LFxyXG4gIGNvbG9yLWJhc2ljLWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWJhc2ljLWFjdGl2ZSxcclxuICBjb2xvci1iYXNpYy1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLWRpc2FibGVkLFxyXG5cclxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1mb2N1czogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxyXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWhvdmVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXHJcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGVmYXVsdDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwLFxyXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWFjdGl2ZTogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxyXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXHJcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyOiBjb2xvci1iYXNpYy01MDAsXHJcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyOiBjb2xvci1iYXNpYy01MDAsXHJcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWJhc2ljLTUwMCxcclxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyOiBjb2xvci1iYXNpYy01MDAsXHJcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXHJcblxyXG4gIGNvbG9yLXByaW1hcnktZm9jdXM6IGNvbG9yLXByaW1hcnktNjAwLFxyXG4gIGNvbG9yLXByaW1hcnktaG92ZXI6IGNvbG9yLXByaW1hcnktNDAwLFxyXG4gIGNvbG9yLXByaW1hcnktZGVmYXVsdDogY29sb3ItcHJpbWFyeS01MDAsXHJcbiAgY29sb3ItcHJpbWFyeS1hY3RpdmU6IGNvbG9yLXByaW1hcnktNjAwLFxyXG4gIGNvbG9yLXByaW1hcnktZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcclxuICBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcjogY29sb3ItcHJpbWFyeS03MDAsXHJcbiAgY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXI6IGNvbG9yLXByaW1hcnktaG92ZXIsXHJcbiAgY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxyXG4gIGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXHJcbiAgY29sb3ItcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLXByaW1hcnktZGlzYWJsZWQsXHJcblxyXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMzAwLFxyXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMjAwLFxyXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdDogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0xMDAsXHJcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmU6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMzAwLFxyXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcclxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcjogY29sb3ItcHJpbWFyeS01MDAsXHJcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXI6IGNvbG9yLXByaW1hcnktNTAwLFxyXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLXByaW1hcnktNTAwLFxyXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcjogY29sb3ItcHJpbWFyeS01MDAsXHJcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcclxuXHJcbiAgY29sb3Itc3VjY2Vzcy1mb2N1czogY29sb3Itc3VjY2Vzcy02MDAsXHJcbiAgY29sb3Itc3VjY2Vzcy1ob3ZlcjogY29sb3Itc3VjY2Vzcy00MDAsXHJcbiAgY29sb3Itc3VjY2Vzcy1kZWZhdWx0OiBjb2xvci1zdWNjZXNzLTUwMCxcclxuICBjb2xvci1zdWNjZXNzLWFjdGl2ZTogY29sb3Itc3VjY2Vzcy02MDAsXHJcbiAgY29sb3Itc3VjY2Vzcy1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxyXG4gIGNvbG9yLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyOiBjb2xvci1zdWNjZXNzLTcwMCxcclxuICBjb2xvci1zdWNjZXNzLWhvdmVyLWJvcmRlcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcclxuICBjb2xvci1zdWNjZXNzLWRlZmF1bHQtYm9yZGVyOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXHJcbiAgY29sb3Itc3VjY2Vzcy1hY3RpdmUtYm9yZGVyOiBjb2xvci1zdWNjZXNzLWFjdGl2ZSxcclxuICBjb2xvci1zdWNjZXNzLWRpc2FibGVkLWJvcmRlcjogY29sb3Itc3VjY2Vzcy1kaXNhYmxlZCxcclxuXHJcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1mb2N1czogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0zMDAsXHJcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3ZlcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0yMDAsXHJcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0OiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTEwMCxcclxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWFjdGl2ZTogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0zMDAsXHJcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxyXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyOiBjb2xvci1zdWNjZXNzLTUwMCxcclxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3Itc3VjY2Vzcy01MDAsXHJcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcjogY29sb3Itc3VjY2Vzcy01MDAsXHJcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyOiBjb2xvci1zdWNjZXNzLTUwMCxcclxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxyXG5cclxuICBjb2xvci1pbmZvLWZvY3VzOiBjb2xvci1pbmZvLTYwMCxcclxuICBjb2xvci1pbmZvLWhvdmVyOiBjb2xvci1pbmZvLTQwMCxcclxuICBjb2xvci1pbmZvLWRlZmF1bHQ6IGNvbG9yLWluZm8tNTAwLFxyXG4gIGNvbG9yLWluZm8tYWN0aXZlOiBjb2xvci1pbmZvLTYwMCxcclxuICBjb2xvci1pbmZvLWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXHJcbiAgY29sb3ItaW5mby1mb2N1cy1ib3JkZXI6IGNvbG9yLWluZm8tNzAwLFxyXG4gIGNvbG9yLWluZm8taG92ZXItYm9yZGVyOiBjb2xvci1pbmZvLWhvdmVyLFxyXG4gIGNvbG9yLWluZm8tZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWluZm8tZGVmYXVsdCxcclxuICBjb2xvci1pbmZvLWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWluZm8tYWN0aXZlLFxyXG4gIGNvbG9yLWluZm8tZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1pbmZvLWRpc2FibGVkLFxyXG5cclxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWZvY3VzOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTMwMCxcclxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTIwMCxcclxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQ6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMTAwLFxyXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtYWN0aXZlOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTMwMCxcclxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXHJcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXI6IGNvbG9yLWluZm8tNTAwLFxyXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyOiBjb2xvci1pbmZvLTUwMCxcclxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyOiBjb2xvci1pbmZvLTUwMCxcclxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWluZm8tNTAwLFxyXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXHJcblxyXG4gIGNvbG9yLXdhcm5pbmctZm9jdXM6IGNvbG9yLXdhcm5pbmctNjAwLFxyXG4gIGNvbG9yLXdhcm5pbmctaG92ZXI6IGNvbG9yLXdhcm5pbmctNDAwLFxyXG4gIGNvbG9yLXdhcm5pbmctZGVmYXVsdDogY29sb3Itd2FybmluZy01MDAsXHJcbiAgY29sb3Itd2FybmluZy1hY3RpdmU6IGNvbG9yLXdhcm5pbmctNjAwLFxyXG4gIGNvbG9yLXdhcm5pbmctZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcclxuICBjb2xvci13YXJuaW5nLWZvY3VzLWJvcmRlcjogY29sb3Itd2FybmluZy03MDAsXHJcbiAgY29sb3Itd2FybmluZy1ob3Zlci1ib3JkZXI6IGNvbG9yLXdhcm5pbmctaG92ZXIsXHJcbiAgY29sb3Itd2FybmluZy1kZWZhdWx0LWJvcmRlcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxyXG4gIGNvbG9yLXdhcm5pbmctYWN0aXZlLWJvcmRlcjogY29sb3Itd2FybmluZy1hY3RpdmUsXHJcbiAgY29sb3Itd2FybmluZy1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLXdhcm5pbmctZGlzYWJsZWQsXHJcblxyXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMzAwLFxyXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMjAwLFxyXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdDogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0xMDAsXHJcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1hY3RpdmU6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMzAwLFxyXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcclxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcjogY29sb3Itd2FybmluZy01MDAsXHJcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXI6IGNvbG9yLXdhcm5pbmctNTAwLFxyXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLXdhcm5pbmctNTAwLFxyXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcjogY29sb3Itd2FybmluZy01MDAsXHJcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcclxuXHJcbiAgY29sb3ItZGFuZ2VyLWZvY3VzOiBjb2xvci1kYW5nZXItNjAwLFxyXG4gIGNvbG9yLWRhbmdlci1ob3ZlcjogY29sb3ItZGFuZ2VyLTQwMCxcclxuICBjb2xvci1kYW5nZXItZGVmYXVsdDogY29sb3ItZGFuZ2VyLTUwMCxcclxuICBjb2xvci1kYW5nZXItYWN0aXZlOiBjb2xvci1kYW5nZXItNjAwLFxyXG4gIGNvbG9yLWRhbmdlci1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxyXG4gIGNvbG9yLWRhbmdlci1mb2N1cy1ib3JkZXI6IGNvbG9yLWRhbmdlci03MDAsXHJcbiAgY29sb3ItZGFuZ2VyLWhvdmVyLWJvcmRlcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxyXG4gIGNvbG9yLWRhbmdlci1kZWZhdWx0LWJvcmRlcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXHJcbiAgY29sb3ItZGFuZ2VyLWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWRhbmdlci1hY3RpdmUsXHJcbiAgY29sb3ItZGFuZ2VyLWRpc2FibGVkLWJvcmRlcjogY29sb3ItZGFuZ2VyLWRpc2FibGVkLFxyXG5cclxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0zMDAsXHJcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWhvdmVyOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMjAwLFxyXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0OiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMTAwLFxyXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1hY3RpdmU6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0zMDAsXHJcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXHJcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcjogY29sb3ItZGFuZ2VyLTUwMCxcclxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyOiBjb2xvci1kYW5nZXItNTAwLFxyXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcjogY29sb3ItZGFuZ2VyLTUwMCxcclxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcjogY29sb3ItZGFuZ2VyLTUwMCxcclxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXHJcblxyXG4gIGNvbG9yLWNvbnRyb2wtZm9jdXM6IGNvbG9yLWJhc2ljLTMwMCxcclxuICBjb2xvci1jb250cm9sLWhvdmVyOiBjb2xvci1iYXNpYy0yMDAsXHJcbiAgY29sb3ItY29udHJvbC1kZWZhdWx0OiBjb2xvci1iYXNpYy0xMDAsXHJcbiAgY29sb3ItY29udHJvbC1hY3RpdmU6IGNvbG9yLWJhc2ljLTMwMCxcclxuICBjb2xvci1jb250cm9sLWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXHJcbiAgY29sb3ItY29udHJvbC1mb2N1cy1ib3JkZXI6IGNvbG9yLWJhc2ljLTUwMCxcclxuICBjb2xvci1jb250cm9sLWhvdmVyLWJvcmRlcjogY29sb3ItY29udHJvbC1ob3ZlcixcclxuICBjb2xvci1jb250cm9sLWRlZmF1bHQtYm9yZGVyOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXHJcbiAgY29sb3ItY29udHJvbC1hY3RpdmUtYm9yZGVyOiBjb2xvci1jb250cm9sLWFjdGl2ZSxcclxuICBjb2xvci1jb250cm9sLWRpc2FibGVkLWJvcmRlcjogY29sb3ItY29udHJvbC1kaXNhYmxlZCxcclxuXHJcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1czogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0zMDAsXHJcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3ZlcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0yMDAsXHJcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0OiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTEwMCxcclxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZTogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0zMDAsXHJcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxyXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyOiBjb2xvci1iYXNpYy0xMDAsXHJcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXI6IGNvbG9yLWJhc2ljLTEwMCxcclxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyOiBjb2xvci1iYXNpYy0xMDAsXHJcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyOiBjb2xvci1iYXNpYy0xMDAsXHJcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcclxuXHJcbiAgYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xOiBjb2xvci1iYXNpYy0xMDAwLFxyXG4gIGJhY2tncm91bmQtYmFzaWMtY29sb3ItMjogY29sb3ItYmFzaWMtMTAwMCxcclxuICBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTkwMCxcclxuICBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTExMDAsXHJcblxyXG4gIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItMTogY29sb3ItYmFzaWMtMTAwLFxyXG4gIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItMjogY29sb3ItYmFzaWMtMjAwLFxyXG4gIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItMzogY29sb3ItYmFzaWMtMzAwLFxyXG4gIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItNDogY29sb3ItYmFzaWMtNDAwLFxyXG5cclxuICBib3JkZXItYmFzaWMtY29sb3ItMTogY29sb3ItYmFzaWMtODAwLFxyXG4gIGJvcmRlci1iYXNpYy1jb2xvci0yOiBjb2xvci1iYXNpYy05MDAsXHJcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTEwMDAsXHJcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTExMDAsXHJcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTU6IGNvbG9yLWJhc2ljLTExMDAsXHJcblxyXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci0xOiBjb2xvci1iYXNpYy0xMDAsXHJcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTIwMCxcclxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItMzogY29sb3ItYmFzaWMtMzAwLFxyXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci00OiBjb2xvci1iYXNpYy00MDAsXHJcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTU6IGNvbG9yLWJhc2ljLTUwMCxcclxuXHJcbiAgYm9yZGVyLXByaW1hcnktY29sb3ItMTogY29sb3ItcHJpbWFyeS01MDAsXHJcbiAgYm9yZGVyLXByaW1hcnktY29sb3ItMjogY29sb3ItcHJpbWFyeS02MDAsXHJcbiAgYm9yZGVyLXByaW1hcnktY29sb3ItMzogY29sb3ItcHJpbWFyeS03MDAsXHJcbiAgYm9yZGVyLXByaW1hcnktY29sb3ItNDogY29sb3ItcHJpbWFyeS04MDAsXHJcbiAgYm9yZGVyLXByaW1hcnktY29sb3ItNTogY29sb3ItcHJpbWFyeS05MDAsXHJcblxyXG4gIGJvcmRlci1zdWNjZXNzLWNvbG9yLTE6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxyXG4gIGJvcmRlci1zdWNjZXNzLWNvbG9yLTI6IGNvbG9yLXN1Y2Nlc3MtNjAwLFxyXG4gIGJvcmRlci1zdWNjZXNzLWNvbG9yLTM6IGNvbG9yLXN1Y2Nlc3MtNzAwLFxyXG4gIGJvcmRlci1zdWNjZXNzLWNvbG9yLTQ6IGNvbG9yLXN1Y2Nlc3MtODAwLFxyXG4gIGJvcmRlci1zdWNjZXNzLWNvbG9yLTU6IGNvbG9yLXN1Y2Nlc3MtOTAwLFxyXG5cclxuICBib3JkZXItaW5mby1jb2xvci0xOiBjb2xvci1pbmZvLTUwMCxcclxuICBib3JkZXItaW5mby1jb2xvci0yOiBjb2xvci1pbmZvLTYwMCxcclxuICBib3JkZXItaW5mby1jb2xvci0zOiBjb2xvci1pbmZvLTcwMCxcclxuICBib3JkZXItaW5mby1jb2xvci00OiBjb2xvci1pbmZvLTgwMCxcclxuICBib3JkZXItaW5mby1jb2xvci01OiBjb2xvci1pbmZvLTkwMCxcclxuXHJcbiAgYm9yZGVyLXdhcm5pbmctY29sb3ItMTogY29sb3Itd2FybmluZy01MDAsXHJcbiAgYm9yZGVyLXdhcm5pbmctY29sb3ItMjogY29sb3Itd2FybmluZy02MDAsXHJcbiAgYm9yZGVyLXdhcm5pbmctY29sb3ItMzogY29sb3Itd2FybmluZy03MDAsXHJcbiAgYm9yZGVyLXdhcm5pbmctY29sb3ItNDogY29sb3Itd2FybmluZy04MDAsXHJcbiAgYm9yZGVyLXdhcm5pbmctY29sb3ItNTogY29sb3Itd2FybmluZy05MDAsXHJcblxyXG4gIGJvcmRlci1kYW5nZXItY29sb3ItMTogY29sb3ItZGFuZ2VyLTUwMCxcclxuICBib3JkZXItZGFuZ2VyLWNvbG9yLTI6IGNvbG9yLWRhbmdlci02MDAsXHJcbiAgYm9yZGVyLWRhbmdlci1jb2xvci0zOiBjb2xvci1kYW5nZXItNzAwLFxyXG4gIGJvcmRlci1kYW5nZXItY29sb3ItNDogY29sb3ItZGFuZ2VyLTgwMCxcclxuICBib3JkZXItZGFuZ2VyLWNvbG9yLTU6IGNvbG9yLWRhbmdlci05MDAsXHJcblxyXG4gIHRleHQtYmFzaWMtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcclxuICB0ZXh0LWFsdGVybmF0ZS1jb2xvcjogY29sb3ItYmFzaWMtOTAwLFxyXG4gIHRleHQtY29udHJvbC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxyXG4gIHRleHQtZGlzYWJsZWQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcclxuICB0ZXh0LWhpbnQtY29sb3I6IGNvbG9yLWJhc2ljLTYwMCxcclxuXHJcbiAgdGV4dC1wcmltYXJ5LWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXHJcbiAgdGV4dC1wcmltYXJ5LWZvY3VzLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxyXG4gIHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcclxuICB0ZXh0LXByaW1hcnktYWN0aXZlLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcclxuICB0ZXh0LXByaW1hcnktZGlzYWJsZWQtY29sb3I6IGNvbG9yLXByaW1hcnktNDAwLFxyXG5cclxuICB0ZXh0LXN1Y2Nlc3MtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcclxuICB0ZXh0LXN1Y2Nlc3MtZm9jdXMtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXHJcbiAgdGV4dC1zdWNjZXNzLWhvdmVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxyXG4gIHRleHQtc3VjY2Vzcy1hY3RpdmUtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLFxyXG4gIHRleHQtc3VjY2Vzcy1kaXNhYmxlZC1jb2xvcjogY29sb3Itc3VjY2Vzcy00MDAsXHJcblxyXG4gIHRleHQtaW5mby1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxyXG4gIHRleHQtaW5mby1mb2N1cy1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcclxuICB0ZXh0LWluZm8taG92ZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXHJcbiAgdGV4dC1pbmZvLWFjdGl2ZS1jb2xvcjogY29sb3ItaW5mby1hY3RpdmUsXHJcbiAgdGV4dC1pbmZvLWRpc2FibGVkLWNvbG9yOiBjb2xvci1pbmZvLTQwMCxcclxuXHJcbiAgdGV4dC13YXJuaW5nLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXHJcbiAgdGV4dC13YXJuaW5nLWZvY3VzLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLFxyXG4gIHRleHQtd2FybmluZy1ob3Zlci1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcclxuICB0ZXh0LXdhcm5pbmctYWN0aXZlLWNvbG9yOiBjb2xvci13YXJuaW5nLWFjdGl2ZSxcclxuICB0ZXh0LXdhcm5pbmctZGlzYWJsZWQtY29sb3I6IGNvbG9yLXdhcm5pbmctNDAwLFxyXG5cclxuICB0ZXh0LWRhbmdlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXHJcbiAgdGV4dC1kYW5nZXItZm9jdXMtY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cyxcclxuICB0ZXh0LWRhbmdlci1ob3Zlci1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxyXG4gIHRleHQtZGFuZ2VyLWFjdGl2ZS1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZSxcclxuICB0ZXh0LWRhbmdlci1kaXNhYmxlZC1jb2xvcjogY29sb3ItZGFuZ2VyLTQwMCxcclxuXHJcbiAgZm9udC1mYW1pbHktcHJpbWFyeTogdW5xdW90ZSgnUm9ib3RvLCBzYW5zLXNlcmlmJyksXHJcblxyXG4gIHNoYWRvdzogdW5xdW90ZShcclxuICAgICcwcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpJ1xyXG4gICAgKSxcclxuICBjYXJkLXNoYWRvdzogc2hhZG93LFxyXG4gIGhlYWRlci1zaGFkb3c6IHVucXVvdGUoXHJcbiAgICAnMHB4IDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA2cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAxOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpJ1xyXG4gICksXHJcblxyXG4gIGhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXHJcbiAgZm9vdGVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcclxuICBoZWFkZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcclxuICBmb290ZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcclxuICBmb290ZXItdGV4dC1oaWdobGlnaHQtY29sb3I6IGZvb3Rlci10ZXh0LWNvbG9yLFxyXG4gIHNpZGViYXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxyXG5cclxuICBtYXRlcmlhbC1yZWd1bGFyLWZvbnQtd2VpZ2h0OiA0MDAsXHJcbiAgbWVudS10ZXh0LWZvbnQtd2VpZ2h0OiBtYXRlcmlhbC1yZWd1bGFyLWZvbnQtd2VpZ2h0LFxyXG4gIG1lbnUtdGV4dC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpLFxyXG4gIG1lbnUtaXRlbS1ob3Zlci10ZXh0LWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyksXHJcbiAgbWVudS1pdGVtLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCksXHJcbiAgbWVudS1pdGVtLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpLFxyXG5cclxuICBtZW51LWl0ZW0taWNvbi1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpLFxyXG4gIG1lbnUtaXRlbS1pY29uLWhvdmVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyksXHJcblxyXG4gIG1lbnUtc3VibWVudS1pdGVtLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCksXHJcbiAgbWVudS1zdWJtZW51LWl0ZW0tYWN0aXZlLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSxcclxuICBtZW51LXN1Ym1lbnUtaXRlbS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KSxcclxuXHJcbiAgY2FyZC1ib3JkZXItc3R5bGU6IG5vbmUsXHJcbiAgY2FyZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXHJcbiAgY2FyZC1kaXZpZGVyLWNvbG9yOiBjb2xvci1iYXNpYy03MDAsXHJcblxyXG4gIGlucHV0LWJvcmRlci13aWR0aDogMXB4LFxyXG4gIGlucHV0LWJhc2ljLWJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpLFxyXG4gIGlucHV0LWJhc2ljLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcclxuICBpbnB1dC1iYXNpYy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGlucHV0LWJhc2ljLWJvcmRlci1jb2xvcixcclxuICBpbnB1dC1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IGlucHV0LWJhc2ljLWJvcmRlci1jb2xvcixcclxuICBpbnB1dC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcclxuICBpbnB1dC1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcclxuICBpbnB1dC1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcclxuICBpbnB1dC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcclxuICBpbnB1dC1yZWN0YW5nbGUtYm9yZGVyLXJhZGl1czogMC4yNXJlbSxcclxuICBpbnB1dC1zZW1pLXJvdW5kLWJvcmRlci1yYWRpdXM6IDAuMjVyZW0sXHJcbiAgaW5wdXQtcm91bmQtYm9yZGVyLXJhZGl1czogMC4yNXJlbSxcclxuICBpbnB1dC1tZWRpdW0tcGFkZGluZzogMC43NXJlbSAxcmVtLFxyXG4gIGlucHV0LWxhcmdlLXBhZGRpbmc6IDFyZW0gMXJlbSxcclxuICBpbnB1dC1zbWFsbC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcclxuICBpbnB1dC1tZWRpdW0tdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXHJcbiAgaW5wdXQtbGFyZ2UtdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXHJcbiAgaW5wdXQtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIGlucHV0LXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcixcclxuICBpbnB1dC1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3IsXHJcbiAgaW5wdXQtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIGlucHV0LWluZm8tYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtYmFja2dyb3VuZC1jb2xvcixcclxuICBpbnB1dC1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3IsXHJcbiAgaW5wdXQtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIGlucHV0LWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcixcclxuICBpbnB1dC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWJhY2tncm91bmQtY29sb3IsXHJcbiAgaW5wdXQtc3VjY2Vzcy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIGlucHV0LXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcixcclxuICBpbnB1dC1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3IsXHJcbiAgaW5wdXQtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIGlucHV0LXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcixcclxuICBpbnB1dC13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3IsXHJcbiAgaW5wdXQtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIGlucHV0LWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIGlucHV0LWRhbmdlci1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIGlucHV0LWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIGlucHV0LWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIGlucHV0LWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtYmFja2dyb3VuZC1jb2xvcixcclxuICBpbnB1dC1jb250cm9sLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3IsXHJcbiAgaW5wdXQtY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIGlucHV0LWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcixcclxuXHJcbiAgc2VsZWN0LXRpbnktdGV4dC1mb250LXdlaWdodDogbWF0ZXJpYWwtcmVndWxhci1mb250LXdlaWdodCxcclxuICBzZWxlY3Qtc21hbGwtdGV4dC1mb250LXdlaWdodDogbWF0ZXJpYWwtcmVndWxhci1mb250LXdlaWdodCxcclxuICBzZWxlY3QtbWVkaXVtLXRleHQtZm9udC13ZWlnaHQ6IG1hdGVyaWFsLXJlZ3VsYXItZm9udC13ZWlnaHQsXHJcbiAgc2VsZWN0LWxhcmdlLXRleHQtZm9udC13ZWlnaHQ6IG1hdGVyaWFsLXJlZ3VsYXItZm9udC13ZWlnaHQsXHJcbiAgc2VsZWN0LWdpYW50LXRleHQtZm9udC13ZWlnaHQ6IG1hdGVyaWFsLXJlZ3VsYXItZm9udC13ZWlnaHQsXHJcbiAgc2VsZWN0LXJlY3RhbmdsZS1ib3JkZXItcmFkaXVzOiAwLFxyXG4gIHNlbGVjdC1zZW1pLXJvdW5kLWJvcmRlci1yYWRpdXM6IDAsXHJcbiAgc2VsZWN0LXJvdW5kLWJvcmRlci1yYWRpdXM6IDAsXHJcbiAgc2VsZWN0LW91dGxpbmUtYm9yZGVyLXdpZHRoOiAwIDAgMXB4IDAsXHJcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyksXHJcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxyXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtYm9yZGVyLWNvbG9yLFxyXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtYm9yZGVyLWNvbG9yLFxyXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxyXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxyXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxyXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxyXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtYmFja2dyb3VuZC1jb2xvcixcclxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3IsXHJcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcixcclxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJhY2tncm91bmQtY29sb3IsXHJcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcixcclxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3IsXHJcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcixcclxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3IsXHJcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtYmFja2dyb3VuZC1jb2xvcixcclxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3IsXHJcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcixcclxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtYmFja2dyb3VuZC1jb2xvcixcclxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcixcclxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcixcclxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcixcclxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJhY2tncm91bmQtY29sb3IsXHJcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcixcclxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3IsXHJcbiAgb3B0aW9uLWxpc3Qtc2hhZG93OiBzaGFkb3csXHJcbiAgb3B0aW9uLWxpc3QtYm9yZGVyLXN0eWxlOiBub25lLFxyXG4gIG9wdGlvbi1saXN0LWFkamFjZW50LWJvcmRlci1zdHlsZTogbm9uZSxcclxuICBvcHRpb24tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtNzAwLFxyXG4gIG9wdGlvbi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiAjNGE0YTRhLFxyXG4gIG9wdGlvbi1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBvcHRpb24taG92ZXItYmFja2dyb3VuZC1jb2xvcixcclxuICBvcHRpb24tc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogIzUyNTI1MixcclxuICBvcHRpb24tc2VsZWN0ZWQtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogb3B0aW9uLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3IsXHJcbiAgb3B0aW9uLXNlbGVjdGVkLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IG9wdGlvbi1zZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIG9wdGlvbi1zZWxlY3RlZC10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXHJcbiAgb3B0aW9uLXNlbGVjdGVkLWhvdmVyLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcclxuICBvcHRpb24tc2VsZWN0ZWQtZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxyXG4gIG9wdGlvbi10aW55LXRleHQtZm9udC13ZWlnaHQ6IG1hdGVyaWFsLXJlZ3VsYXItZm9udC13ZWlnaHQsXHJcbiAgb3B0aW9uLXNtYWxsLXRleHQtZm9udC13ZWlnaHQ6IG1hdGVyaWFsLXJlZ3VsYXItZm9udC13ZWlnaHQsXHJcbiAgb3B0aW9uLW1lZGl1bS10ZXh0LWZvbnQtd2VpZ2h0OiBtYXRlcmlhbC1yZWd1bGFyLWZvbnQtd2VpZ2h0LFxyXG4gIG9wdGlvbi1sYXJnZS10ZXh0LWZvbnQtd2VpZ2h0OiBtYXRlcmlhbC1yZWd1bGFyLWZvbnQtd2VpZ2h0LFxyXG4gIG9wdGlvbi1naWFudC10ZXh0LWZvbnQtd2VpZ2h0OiBtYXRlcmlhbC1yZWd1bGFyLWZvbnQtd2VpZ2h0XHJcbik7XHJcblxyXG4kbmItdGhlbWVzOiBuYi1yZWdpc3Rlci10aGVtZSgkdGhlbWUsIG1hdGVyaWFsLWRhcmssIGRhcmspO1xyXG4iLCIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG4gKi9cclxuXHJcbkBpbXBvcnQgJ35AbmVidWxhci90aGVtZS9zdHlsZXMvY29yZS9mdW5jdGlvbnMnO1xyXG5AaW1wb3J0ICd+QG5lYnVsYXIvdGhlbWUvc3R5bGVzL2NvcmUvbWl4aW5zJztcclxuJHRoZW1lOiAoIGNvbG9yLXByaW1hcnktMTAwOiAjZThjYmZlLCBjb2xvci1wcmltYXJ5LTIwMDogI2NlOTdmZCwgY29sb3ItcHJpbWFyeS0zMDA6ICNhZTYzZjksIGNvbG9yLXByaW1hcnktNDAwOiAjOTAzZGY0LCBjb2xvci1wcmltYXJ5LTUwMDogIzYyMDBlZSwgY29sb3ItcHJpbWFyeS02MDA6ICM0YjAwY2MsIGNvbG9yLXByaW1hcnktNzAwOiAjMzgwMGFiLCBjb2xvci1wcmltYXJ5LTgwMDogIzI3MDA4YSwgY29sb3ItcHJpbWFyeS05MDA6ICMxYjAwNzIsIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDk4LCAwLCAyMzgsIDAuMDgpLCBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTIwMDogcmdiYSg5OCwgMCwgMjM4LCAwLjE2KSwgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0zMDA6IHJnYmEoOTgsIDAsIDIzOCwgMC4yNCksIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDk4LCAwLCAyMzgsIDAuMzIpLCBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTUwMDogcmdiYSg5OCwgMCwgMjM4LCAwLjQpLCBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTYwMDogcmdiYSg5OCwgMCwgMjM4LCAwLjQ4KSwgY29sb3Itc3VjY2Vzcy0xMDA6ICNlZGZiZDEsIGNvbG9yLXN1Y2Nlc3MtMjAwOiAjZDdmN2E2LCBjb2xvci1zdWNjZXNzLTMwMDogI2I0ZTc3NSwgY29sb3Itc3VjY2Vzcy00MDA6ICM4ZmNmNTAsIGNvbG9yLXN1Y2Nlc3MtNTAwOiAjNjBhZjIwLCBjb2xvci1zdWNjZXNzLTYwMDogIzQ5OTYxNywgY29sb3Itc3VjY2Vzcy03MDA6ICMzNTdkMTAsIGNvbG9yLXN1Y2Nlc3MtODAwOiAjMjQ2NTBhLCBjb2xvci1zdWNjZXNzLTkwMDogIzE3NTMwNiwgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0xMDA6IHJnYmEoOTYsIDE3NSwgMzIsIDAuMDgpLCBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTIwMDogcmdiYSg5NiwgMTc1LCAzMiwgMC4xNiksIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDk2LCAxNzUsIDMyLCAwLjI0KSwgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC00MDA6IHJnYmEoOTYsIDE3NSwgMzIsIDAuMzIpLCBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTUwMDogcmdiYSg5NiwgMTc1LCAzMiwgMC40KSwgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC02MDA6IHJnYmEoOTYsIDE3NSwgMzIsIDAuNDgpLCBjb2xvci1pbmZvLTEwMDogI2NjZjdmZSwgY29sb3ItaW5mby0yMDA6ICM5OWU5ZmQsIGNvbG9yLWluZm8tMzAwOiAjNjZkM2Y5LCBjb2xvci1pbmZvLTQwMDogIzQwYmJmNCwgY29sb3ItaW5mby01MDA6ICMwNDk1ZWUsIGNvbG9yLWluZm8tNjAwOiAjMDI3M2NjLCBjb2xvci1pbmZvLTcwMDogIzAyNTZhYiwgY29sb3ItaW5mby04MDA6ICMwMTNkOGEsIGNvbG9yLWluZm8tOTAwOiAjMDAyYjcyLCBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTEwMDogcmdiYSg0LCAxNDksIDIzOCwgMC4wOCksIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDQsIDE0OSwgMjM4LCAwLjE2KSwgY29sb3ItaW5mby10cmFuc3BhcmVudC0zMDA6IHJnYmEoNCwgMTQ5LCAyMzgsIDAuMjQpLCBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTQwMDogcmdiYSg0LCAxNDksIDIzOCwgMC4zMiksIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDQsIDE0OSwgMjM4LCAwLjQpLCBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTYwMDogcmdiYSg0LCAxNDksIDIzOCwgMC40OCksIGNvbG9yLXdhcm5pbmctMTAwOiAjZmZmM2NkLCBjb2xvci13YXJuaW5nLTIwMDogI2ZmZTQ5YiwgY29sb3Itd2FybmluZy0zMDA6ICNmZmQxNjksIGNvbG9yLXdhcm5pbmctNDAwOiAjZmZiZTQzLCBjb2xvci13YXJuaW5nLTUwMDogI2ZmOWYwNSwgY29sb3Itd2FybmluZy02MDA6ICNkYjgwMDMsIGNvbG9yLXdhcm5pbmctNzAwOiAjYjc2MzAyLCBjb2xvci13YXJuaW5nLTgwMDogIzkzNGEwMSwgY29sb3Itd2FybmluZy05MDA6ICM3YTM4MDAsIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDI1NSwgMTU5LCA1LCAwLjA4KSwgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0yMDA6IHJnYmEoMjU1LCAxNTksIDUsIDAuMTYpLCBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTMwMDogcmdiYSgyNTUsIDE1OSwgNSwgMC4yNCksIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDI1NSwgMTU5LCA1LCAwLjMyKSwgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC01MDA6IHJnYmEoMjU1LCAxNTksIDUsIDAuNCksIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDI1NSwgMTU5LCA1LCAwLjQ4KSwgY29sb3ItZGFuZ2VyLTEwMDogI2ZiZDJjOCwgY29sb3ItZGFuZ2VyLTIwMDogI2Y3OWU5NCwgY29sb3ItZGFuZ2VyLTMwMDogI2U3NWQ1YywgY29sb3ItZGFuZ2VyLTQwMDogI2NmMzM0MSwgY29sb3ItZGFuZ2VyLTUwMDogI2IwMDAyMCwgY29sb3ItZGFuZ2VyLTYwMDogIzk3MDAyOSwgY29sb3ItZGFuZ2VyLTcwMDogIzdlMDAyZSwgY29sb3ItZGFuZ2VyLTgwMDogIzY2MDAyZiwgY29sb3ItZGFuZ2VyLTkwMDogIzU0MDAyZiwgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTEwMDogcmdiYSgxNzYsIDAsIDMyLCAwLjA4KSwgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTIwMDogcmdiYSgxNzYsIDAsIDMyLCAwLjE2KSwgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTMwMDogcmdiYSgxNzYsIDAsIDMyLCAwLjI0KSwgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTQwMDogcmdiYSgxNzYsIDAsIDMyLCAwLjMyKSwgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTUwMDogcmdiYSgxNzYsIDAsIDMyLCAwLjQpLCBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDE3NiwgMCwgMzIsIDAuNDgpLCBjb2xvci1iYXNpYy0xMDA6ICNmZmZmZmYsIGNvbG9yLWJhc2ljLTIwMDogI2Y1ZjVmNSwgY29sb3ItYmFzaWMtMzAwOiAjZWJlYmViLCBjb2xvci1iYXNpYy00MDA6ICNlMGUwZTAsIGNvbG9yLWJhc2ljLTUwMDogI2IzYjNiMywgY29sb3ItYmFzaWMtNjAwOiAjODM4MzgzLCBjb2xvci1iYXNpYy03MDA6ICM2MzYzNjMsIGNvbG9yLWJhc2ljLTgwMDogIzQyNDI0MiwgY29sb3ItYmFzaWMtOTAwOiAjMjQyNDI0LCBjb2xvci1iYXNpYy0xMDAwOiAjMWIxYjFiLCBjb2xvci1iYXNpYy0xMTAwOiAjMDAwMDAwLCBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDA6IHJnYmEoMTMxLCAxMzEsIDEzMSwgMC4wOCksIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMDogcmdiYSgxMzEsIDEzMSwgMTMxLCAwLjE2KSwgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDEzMSwgMTMxLCAxMzEsIDAuMjQpLCBjb2xvci1iYXNpYy10cmFuc3BhcmVudC00MDA6IHJnYmEoMTMxLCAxMzEsIDEzMSwgMC4zMiksIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMDogcmdiYSgxMzEsIDEzMSwgMTMxLCAwLjQpLCBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDA6IHJnYmEoMTMxLCAxMzEsIDEzMSwgMC40OCksIGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpLCBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTIwMDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE2KSwgY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0zMDA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCksIGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzIpLCBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTUwMDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLCBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTYwMDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ4KSwgY29sb3ItYmFzaWMtZm9jdXM6IGNvbG9yLWJhc2ljLTQwMCwgY29sb3ItYmFzaWMtaG92ZXI6IGNvbG9yLWJhc2ljLTIwMCwgY29sb3ItYmFzaWMtZGVmYXVsdDogY29sb3ItYmFzaWMtMzAwLCBjb2xvci1iYXNpYy1hY3RpdmU6IGNvbG9yLWJhc2ljLTQwMCwgY29sb3ItYmFzaWMtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCwgY29sb3ItYmFzaWMtZm9jdXMtYm9yZGVyOiBjb2xvci1iYXNpYy01MDAsIGNvbG9yLWJhc2ljLWhvdmVyLWJvcmRlcjogY29sb3ItYmFzaWMtaG92ZXIsIGNvbG9yLWJhc2ljLWRlZmF1bHQtYm9yZGVyOiBjb2xvci1iYXNpYy1kZWZhdWx0LCBjb2xvci1iYXNpYy1hY3RpdmUtYm9yZGVyOiBjb2xvci1iYXNpYy1hY3RpdmUsIGNvbG9yLWJhc2ljLWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtZGlzYWJsZWQsIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWZvY3VzOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWhvdmVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCwgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtYWN0aXZlOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcjogY29sb3ItYmFzaWMtNTAwLCBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXI6IGNvbG9yLWJhc2ljLTUwMCwgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWJhc2ljLTUwMCwgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcjogY29sb3ItYmFzaWMtNTAwLCBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCwgY29sb3ItcHJpbWFyeS1mb2N1czogY29sb3ItcHJpbWFyeS02MDAsIGNvbG9yLXByaW1hcnktaG92ZXI6IGNvbG9yLXByaW1hcnktNDAwLCBjb2xvci1wcmltYXJ5LWRlZmF1bHQ6IGNvbG9yLXByaW1hcnktNTAwLCBjb2xvci1wcmltYXJ5LWFjdGl2ZTogY29sb3ItcHJpbWFyeS02MDAsIGNvbG9yLXByaW1hcnktZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCwgY29sb3ItcHJpbWFyeS1mb2N1cy1ib3JkZXI6IGNvbG9yLXByaW1hcnktNzAwLCBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcjogY29sb3ItcHJpbWFyeS1ob3ZlciwgY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LCBjb2xvci1wcmltYXJ5LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLXByaW1hcnktYWN0aXZlLCBjb2xvci1wcmltYXJ5LWRpc2FibGVkLWJvcmRlcjogY29sb3ItcHJpbWFyeS1kaXNhYmxlZCwgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1czogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0zMDAsIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMjAwLCBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQ6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMTAwLCBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZTogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0zMDAsIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCwgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXI6IGNvbG9yLXByaW1hcnktNTAwLCBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3ItcHJpbWFyeS01MDAsIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLXByaW1hcnktNTAwLCBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLXByaW1hcnktNTAwLCBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLCBjb2xvci1zdWNjZXNzLWZvY3VzOiBjb2xvci1zdWNjZXNzLTYwMCwgY29sb3Itc3VjY2Vzcy1ob3ZlcjogY29sb3Itc3VjY2Vzcy00MDAsIGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdDogY29sb3Itc3VjY2Vzcy01MDAsIGNvbG9yLXN1Y2Nlc3MtYWN0aXZlOiBjb2xvci1zdWNjZXNzLTYwMCwgY29sb3Itc3VjY2Vzcy1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLCBjb2xvci1zdWNjZXNzLWZvY3VzLWJvcmRlcjogY29sb3Itc3VjY2Vzcy03MDAsIGNvbG9yLXN1Y2Nlc3MtaG92ZXItYm9yZGVyOiBjb2xvci1zdWNjZXNzLWhvdmVyLCBjb2xvci1zdWNjZXNzLWRlZmF1bHQtYm9yZGVyOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsIGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUsIGNvbG9yLXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1zdWNjZXNzLWRpc2FibGVkLCBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWZvY3VzOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTMwMCwgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3ZlcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0yMDAsIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGVmYXVsdDogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0xMDAsIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTMwMCwgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLCBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcjogY29sb3Itc3VjY2Vzcy01MDAsIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyOiBjb2xvci1zdWNjZXNzLTUwMCwgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcjogY29sb3Itc3VjY2Vzcy01MDAsIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcjogY29sb3Itc3VjY2Vzcy01MDAsIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsIGNvbG9yLWluZm8tZm9jdXM6IGNvbG9yLWluZm8tNjAwLCBjb2xvci1pbmZvLWhvdmVyOiBjb2xvci1pbmZvLTQwMCwgY29sb3ItaW5mby1kZWZhdWx0OiBjb2xvci1pbmZvLTUwMCwgY29sb3ItaW5mby1hY3RpdmU6IGNvbG9yLWluZm8tNjAwLCBjb2xvci1pbmZvLWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsIGNvbG9yLWluZm8tZm9jdXMtYm9yZGVyOiBjb2xvci1pbmZvLTcwMCwgY29sb3ItaW5mby1ob3Zlci1ib3JkZXI6IGNvbG9yLWluZm8taG92ZXIsIGNvbG9yLWluZm8tZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWluZm8tZGVmYXVsdCwgY29sb3ItaW5mby1hY3RpdmUtYm9yZGVyOiBjb2xvci1pbmZvLWFjdGl2ZSwgY29sb3ItaW5mby1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWluZm8tZGlzYWJsZWQsIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMzAwLCBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTIwMCwgY29sb3ItaW5mby10cmFuc3BhcmVudC1kZWZhdWx0OiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTEwMCwgY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmU6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMzAwLCBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyOiBjb2xvci1pbmZvLTUwMCwgY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXI6IGNvbG9yLWluZm8tNTAwLCBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyOiBjb2xvci1pbmZvLTUwMCwgY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyOiBjb2xvci1pbmZvLTUwMCwgY29sb3ItaW5mby10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCwgY29sb3Itd2FybmluZy1mb2N1czogY29sb3Itd2FybmluZy02MDAsIGNvbG9yLXdhcm5pbmctaG92ZXI6IGNvbG9yLXdhcm5pbmctNDAwLCBjb2xvci13YXJuaW5nLWRlZmF1bHQ6IGNvbG9yLXdhcm5pbmctNTAwLCBjb2xvci13YXJuaW5nLWFjdGl2ZTogY29sb3Itd2FybmluZy02MDAsIGNvbG9yLXdhcm5pbmctZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCwgY29sb3Itd2FybmluZy1mb2N1cy1ib3JkZXI6IGNvbG9yLXdhcm5pbmctNzAwLCBjb2xvci13YXJuaW5nLWhvdmVyLWJvcmRlcjogY29sb3Itd2FybmluZy1ob3ZlciwgY29sb3Itd2FybmluZy1kZWZhdWx0LWJvcmRlcjogY29sb3Itd2FybmluZy1kZWZhdWx0LCBjb2xvci13YXJuaW5nLWFjdGl2ZS1ib3JkZXI6IGNvbG9yLXdhcm5pbmctYWN0aXZlLCBjb2xvci13YXJuaW5nLWRpc2FibGVkLWJvcmRlcjogY29sb3Itd2FybmluZy1kaXNhYmxlZCwgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1czogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0zMDAsIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMjAwLCBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRlZmF1bHQ6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMTAwLCBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZTogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0zMDAsIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCwgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXI6IGNvbG9yLXdhcm5pbmctNTAwLCBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3Itd2FybmluZy01MDAsIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLXdhcm5pbmctNTAwLCBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLXdhcm5pbmctNTAwLCBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLCBjb2xvci1kYW5nZXItZm9jdXM6IGNvbG9yLWRhbmdlci02MDAsIGNvbG9yLWRhbmdlci1ob3ZlcjogY29sb3ItZGFuZ2VyLTQwMCwgY29sb3ItZGFuZ2VyLWRlZmF1bHQ6IGNvbG9yLWRhbmdlci01MDAsIGNvbG9yLWRhbmdlci1hY3RpdmU6IGNvbG9yLWRhbmdlci02MDAsIGNvbG9yLWRhbmdlci1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLCBjb2xvci1kYW5nZXItZm9jdXMtYm9yZGVyOiBjb2xvci1kYW5nZXItNzAwLCBjb2xvci1kYW5nZXItaG92ZXItYm9yZGVyOiBjb2xvci1kYW5nZXItaG92ZXIsIGNvbG9yLWRhbmdlci1kZWZhdWx0LWJvcmRlcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsIGNvbG9yLWRhbmdlci1hY3RpdmUtYm9yZGVyOiBjb2xvci1kYW5nZXItYWN0aXZlLCBjb2xvci1kYW5nZXItZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1kYW5nZXItZGlzYWJsZWQsIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1mb2N1czogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTMwMCwgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWhvdmVyOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMjAwLCBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGVmYXVsdDogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTEwMCwgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZTogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTMwMCwgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXI6IGNvbG9yLWRhbmdlci01MDAsIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXI6IGNvbG9yLWRhbmdlci01MDAsIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcjogY29sb3ItZGFuZ2VyLTUwMCwgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWRhbmdlci01MDAsIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCwgY29sb3ItY29udHJvbC1mb2N1czogY29sb3ItYmFzaWMtMzAwLCBjb2xvci1jb250cm9sLWhvdmVyOiBjb2xvci1iYXNpYy0yMDAsIGNvbG9yLWNvbnRyb2wtZGVmYXVsdDogY29sb3ItYmFzaWMtMTAwLCBjb2xvci1jb250cm9sLWFjdGl2ZTogY29sb3ItYmFzaWMtMzAwLCBjb2xvci1jb250cm9sLWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsIGNvbG9yLWNvbnRyb2wtZm9jdXMtYm9yZGVyOiBjb2xvci1iYXNpYy01MDAsIGNvbG9yLWNvbnRyb2wtaG92ZXItYm9yZGVyOiBjb2xvci1jb250cm9sLWhvdmVyLCBjb2xvci1jb250cm9sLWRlZmF1bHQtYm9yZGVyOiBjb2xvci1jb250cm9sLWRlZmF1bHQsIGNvbG9yLWNvbnRyb2wtYWN0aXZlLWJvcmRlcjogY29sb3ItY29udHJvbC1hY3RpdmUsIGNvbG9yLWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1jb250cm9sLWRpc2FibGVkLCBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTMwMCwgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3ZlcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0yMDAsIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdDogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0xMDAsIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTMwMCwgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLCBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcjogY29sb3ItYmFzaWMtMTAwLCBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3ItYmFzaWMtMTAwLCBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyOiBjb2xvci1iYXNpYy0xMDAsIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcjogY29sb3ItYmFzaWMtMTAwLCBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLCBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTEwMCwgYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yOiBjb2xvci1iYXNpYy0zMDAsIGJhY2tncm91bmQtYmFzaWMtY29sb3ItMzogI2ZhZmFmYSwgYmFja2dyb3VuZC1iYXNpYy1jb2xvci00OiBjb2xvci1iYXNpYy00MDAsIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItMTogY29sb3ItYmFzaWMtODAwLCBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTkwMCwgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci0zOiBjb2xvci1iYXNpYy0xMDAwLCBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTExMDAsIGJvcmRlci1iYXNpYy1jb2xvci0xOiBjb2xvci1iYXNpYy0xMDAsIGJvcmRlci1iYXNpYy1jb2xvci0yOiBjb2xvci1iYXNpYy0yMDAsIGJvcmRlci1iYXNpYy1jb2xvci0zOiBjb2xvci1iYXNpYy0zMDAsIGJvcmRlci1iYXNpYy1jb2xvci00OiBjb2xvci1iYXNpYy00MDAsIGJvcmRlci1iYXNpYy1jb2xvci01OiBjb2xvci1iYXNpYy01MDAsIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci0xOiBjb2xvci1iYXNpYy04MDAsIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci0yOiBjb2xvci1iYXNpYy05MDAsIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci0zOiBjb2xvci1iYXNpYy0xMDAwLCBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItNDogY29sb3ItYmFzaWMtMTEwMCwgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTU6IGNvbG9yLWJhc2ljLTExMDAsIGJvcmRlci1wcmltYXJ5LWNvbG9yLTE6IGNvbG9yLXByaW1hcnktNTAwLCBib3JkZXItcHJpbWFyeS1jb2xvci0yOiBjb2xvci1wcmltYXJ5LTYwMCwgYm9yZGVyLXByaW1hcnktY29sb3ItMzogY29sb3ItcHJpbWFyeS03MDAsIGJvcmRlci1wcmltYXJ5LWNvbG9yLTQ6IGNvbG9yLXByaW1hcnktODAwLCBib3JkZXItcHJpbWFyeS1jb2xvci01OiBjb2xvci1wcmltYXJ5LTkwMCwgYm9yZGVyLXN1Y2Nlc3MtY29sb3ItMTogY29sb3Itc3VjY2Vzcy01MDAsIGJvcmRlci1zdWNjZXNzLWNvbG9yLTI6IGNvbG9yLXN1Y2Nlc3MtNjAwLCBib3JkZXItc3VjY2Vzcy1jb2xvci0zOiBjb2xvci1zdWNjZXNzLTcwMCwgYm9yZGVyLXN1Y2Nlc3MtY29sb3ItNDogY29sb3Itc3VjY2Vzcy04MDAsIGJvcmRlci1zdWNjZXNzLWNvbG9yLTU6IGNvbG9yLXN1Y2Nlc3MtOTAwLCBib3JkZXItaW5mby1jb2xvci0xOiBjb2xvci1pbmZvLTUwMCwgYm9yZGVyLWluZm8tY29sb3ItMjogY29sb3ItaW5mby02MDAsIGJvcmRlci1pbmZvLWNvbG9yLTM6IGNvbG9yLWluZm8tNzAwLCBib3JkZXItaW5mby1jb2xvci00OiBjb2xvci1pbmZvLTgwMCwgYm9yZGVyLWluZm8tY29sb3ItNTogY29sb3ItaW5mby05MDAsIGJvcmRlci13YXJuaW5nLWNvbG9yLTE6IGNvbG9yLXdhcm5pbmctNTAwLCBib3JkZXItd2FybmluZy1jb2xvci0yOiBjb2xvci13YXJuaW5nLTYwMCwgYm9yZGVyLXdhcm5pbmctY29sb3ItMzogY29sb3Itd2FybmluZy03MDAsIGJvcmRlci13YXJuaW5nLWNvbG9yLTQ6IGNvbG9yLXdhcm5pbmctODAwLCBib3JkZXItd2FybmluZy1jb2xvci01OiBjb2xvci13YXJuaW5nLTkwMCwgYm9yZGVyLWRhbmdlci1jb2xvci0xOiBjb2xvci1kYW5nZXItNTAwLCBib3JkZXItZGFuZ2VyLWNvbG9yLTI6IGNvbG9yLWRhbmdlci02MDAsIGJvcmRlci1kYW5nZXItY29sb3ItMzogY29sb3ItZGFuZ2VyLTcwMCwgYm9yZGVyLWRhbmdlci1jb2xvci00OiBjb2xvci1kYW5nZXItODAwLCBib3JkZXItZGFuZ2VyLWNvbG9yLTU6IGNvbG9yLWRhbmdlci05MDAsIHRleHQtYmFzaWMtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCwgdGV4dC1hbHRlcm5hdGUtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCwgdGV4dC1jb250cm9sLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsIHRleHQtZGlzYWJsZWQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCwgdGV4dC1oaW50LWNvbG9yOiBjb2xvci1iYXNpYy02MDAsIHRleHQtcHJpbWFyeS1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LCB0ZXh0LXByaW1hcnktZm9jdXMtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsIHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlciwgdGV4dC1wcmltYXJ5LWFjdGl2ZS1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsIHRleHQtcHJpbWFyeS1kaXNhYmxlZC1jb2xvcjogY29sb3ItcHJpbWFyeS00MDAsIHRleHQtc3VjY2Vzcy1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LCB0ZXh0LXN1Y2Nlc3MtZm9jdXMtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsIHRleHQtc3VjY2Vzcy1ob3Zlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlciwgdGV4dC1zdWNjZXNzLWFjdGl2ZS1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUsIHRleHQtc3VjY2Vzcy1kaXNhYmxlZC1jb2xvcjogY29sb3Itc3VjY2Vzcy00MDAsIHRleHQtaW5mby1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LCB0ZXh0LWluZm8tZm9jdXMtY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsIHRleHQtaW5mby1ob3Zlci1jb2xvcjogY29sb3ItaW5mby1ob3ZlciwgdGV4dC1pbmZvLWFjdGl2ZS1jb2xvcjogY29sb3ItaW5mby1hY3RpdmUsIHRleHQtaW5mby1kaXNhYmxlZC1jb2xvcjogY29sb3ItaW5mby00MDAsIHRleHQtd2FybmluZy1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LCB0ZXh0LXdhcm5pbmctZm9jdXMtY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsIHRleHQtd2FybmluZy1ob3Zlci1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlciwgdGV4dC13YXJuaW5nLWFjdGl2ZS1jb2xvcjogY29sb3Itd2FybmluZy1hY3RpdmUsIHRleHQtd2FybmluZy1kaXNhYmxlZC1jb2xvcjogY29sb3Itd2FybmluZy00MDAsIHRleHQtZGFuZ2VyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCwgdGV4dC1kYW5nZXItZm9jdXMtY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cywgdGV4dC1kYW5nZXItaG92ZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlciwgdGV4dC1kYW5nZXItYWN0aXZlLWNvbG9yOiBjb2xvci1kYW5nZXItYWN0aXZlLCB0ZXh0LWRhbmdlci1kaXNhYmxlZC1jb2xvcjogY29sb3ItZGFuZ2VyLTQwMCwgZm9udC1mYW1pbHktcHJpbWFyeTogdW5xdW90ZSgnT3BlbiBTYW5zLCBSb2JvdG8sIHNhbnMtc2VyaWYnKSwgc2hhZG93OiB1bnF1b3RlKCcwIDJweCAxcHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAzcHggMCByZ2JhKDAsMCwwLC4xMiknKSwgY2FyZC1zaGFkb3c6IHNoYWRvdywgaGVhZGVyLXNoYWRvdzogdW5xdW90ZSggJzAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwuMTIpJyksIGhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsIGZvb3Rlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsIGhlYWRlci10ZXh0LWNvbG9yOiB0ZXh0LWFsdGVybmF0ZS1jb2xvciwgZm9vdGVyLXRleHQtY29sb3I6IHRleHQtYWx0ZXJuYXRlLWNvbG9yLCBmb290ZXItdGV4dC1oaWdobGlnaHQtY29sb3I6IGZvb3Rlci10ZXh0LWNvbG9yLCBzaWRlYmFyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMiwgbWVudS10ZXh0LWZvbnQtd2VpZ2h0OiA0MDAsIG1lbnUtdGV4dC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KSwgbWVudS1pdGVtLWhvdmVyLXRleHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NyksIG1lbnUtaXRlbS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpLCBtZW51LWl0ZW0tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wOCksIG1lbnUtaXRlbS1pY29uLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpLCBtZW51LWl0ZW0taWNvbi1ob3Zlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KSwgbWVudS1zdWJtZW51LWl0ZW0taG92ZXItYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KSwgbWVudS1zdWJtZW51LWl0ZW0tYWN0aXZlLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKSwgbWVudS1zdWJtZW51LWl0ZW0tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wOCksIGNhcmQtYm9yZGVyLXN0eWxlOiBub25lLCBjYXJkLWRpdmlkZXItY29sb3I6IGNvbG9yLWJhc2ljLTIwMCwgaW5wdXQtYm9yZGVyLXdpZHRoOiAxcHgsIGlucHV0LWJhc2ljLWJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQyKSwgaW5wdXQtYmFzaWMtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLCBpbnB1dC1iYXNpYy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40MiksIGlucHV0LWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQyKSwgaW5wdXQtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsIGlucHV0LWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LCBpbnB1dC1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCwgaW5wdXQtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsIGlucHV0LXJlY3RhbmdsZS1ib3JkZXItcmFkaXVzOiAwLjI1cmVtLCBpbnB1dC1zZW1pLXJvdW5kLWJvcmRlci1yYWRpdXM6IDAuMjVyZW0sIGlucHV0LXJvdW5kLWJvcmRlci1yYWRpdXM6IDAuMjVyZW0sIGlucHV0LW1lZGl1bS1wYWRkaW5nOiAwLjc1cmVtIDFyZW0sIGlucHV0LWxhcmdlLXBhZGRpbmc6IDFyZW0gMXJlbSwgaW5wdXQtc21hbGwtdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsIGlucHV0LW1lZGl1bS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCwgaW5wdXQtbGFyZ2UtdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsIGlucHV0LXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtYmFja2dyb3VuZC1jb2xvciwgaW5wdXQtcHJpbWFyeS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yLCBpbnB1dC1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3IsIGlucHV0LXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvciwgaW5wdXQtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yLCBpbnB1dC1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3IsIGlucHV0LWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvciwgaW5wdXQtaW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yLCBpbnB1dC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWJhY2tncm91bmQtY29sb3IsIGlucHV0LXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvciwgaW5wdXQtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yLCBpbnB1dC1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3IsIGlucHV0LXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtYmFja2dyb3VuZC1jb2xvciwgaW5wdXQtd2FybmluZy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yLCBpbnB1dC13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3IsIGlucHV0LXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvciwgaW5wdXQtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWJhY2tncm91bmQtY29sb3IsIGlucHV0LWRhbmdlci1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yLCBpbnB1dC1kYW5nZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvciwgaW5wdXQtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3IsIGlucHV0LWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtYmFja2dyb3VuZC1jb2xvciwgaW5wdXQtY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yLCBpbnB1dC1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3IsIGlucHV0LWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvciwgc2VsZWN0LXRpbnktdGV4dC1mb250LXdlaWdodDogbWF0ZXJpYWwtcmVndWxhci1mb250LXdlaWdodCwgc2VsZWN0LXNtYWxsLXRleHQtZm9udC13ZWlnaHQ6IG1hdGVyaWFsLXJlZ3VsYXItZm9udC13ZWlnaHQsIHNlbGVjdC1tZWRpdW0tdGV4dC1mb250LXdlaWdodDogbWF0ZXJpYWwtcmVndWxhci1mb250LXdlaWdodCwgc2VsZWN0LWxhcmdlLXRleHQtZm9udC13ZWlnaHQ6IG1hdGVyaWFsLXJlZ3VsYXItZm9udC13ZWlnaHQsIHNlbGVjdC1naWFudC10ZXh0LWZvbnQtd2VpZ2h0OiBtYXRlcmlhbC1yZWd1bGFyLWZvbnQtd2VpZ2h0LCBzZWxlY3QtcmVjdGFuZ2xlLWJvcmRlci1yYWRpdXM6IDAsIHNlbGVjdC1zZW1pLXJvdW5kLWJvcmRlci1yYWRpdXM6IDAsIHNlbGVjdC1yb3VuZC1ib3JkZXItcmFkaXVzOiAwLCBzZWxlY3Qtb3V0bGluZS1ib3JkZXItd2lkdGg6IDAgMCAxcHggMCwgc2VsZWN0LW91dGxpbmUtYmFzaWMtYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDIpLCBzZWxlY3Qtb3V0bGluZS1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtYm9yZGVyLWNvbG9yLCBzZWxlY3Qtb3V0bGluZS1iYXNpYy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJvcmRlci1jb2xvciwgc2VsZWN0LW91dGxpbmUtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LCBzZWxlY3Qtb3V0bGluZS1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCwgc2VsZWN0LW91dGxpbmUtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtYmFja2dyb3VuZC1jb2xvciwgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yLCBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3IsIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvciwgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yLCBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3IsIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvciwgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yLCBzZWxlY3Qtb3V0bGluZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJhY2tncm91bmQtY29sb3IsIHNlbGVjdC1vdXRsaW5lLWluZm8tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvciwgc2VsZWN0LW91dGxpbmUtaW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yLCBzZWxlY3Qtb3V0bGluZS1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3IsIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtYmFja2dyb3VuZC1jb2xvciwgc2VsZWN0LW91dGxpbmUtd2FybmluZy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yLCBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3IsIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvciwgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJhY2tncm91bmQtY29sb3IsIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yLCBzZWxlY3Qtb3V0bGluZS1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvciwgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3IsIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtYmFja2dyb3VuZC1jb2xvciwgc2VsZWN0LW91dGxpbmUtY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yLCBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3IsIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvciwgb3B0aW9uLWxpc3Qtc2hhZG93OiBzaGFkb3csIG9wdGlvbi1saXN0LWJvcmRlci1zdHlsZTogbm9uZSwgb3B0aW9uLWxpc3QtYWRqYWNlbnQtYm9yZGVyLXN0eWxlOiBub25lLCBvcHRpb24tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLCBvcHRpb24taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMjAwLCBvcHRpb24tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogb3B0aW9uLWhvdmVyLWJhY2tncm91bmQtY29sb3IsIG9wdGlvbi1zZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0zMDAsIG9wdGlvbi1zZWxlY3RlZC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBvcHRpb24tc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvciwgb3B0aW9uLXNlbGVjdGVkLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IG9wdGlvbi1zZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yLCBvcHRpb24tc2VsZWN0ZWQtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLCBvcHRpb24tc2VsZWN0ZWQtaG92ZXItdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLCBvcHRpb24tc2VsZWN0ZWQtZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLCBvcHRpb24tdGlueS10ZXh0LWZvbnQtd2VpZ2h0OiBtYXRlcmlhbC1yZWd1bGFyLWZvbnQtd2VpZ2h0LCBvcHRpb24tc21hbGwtdGV4dC1mb250LXdlaWdodDogbWF0ZXJpYWwtcmVndWxhci1mb250LXdlaWdodCwgb3B0aW9uLW1lZGl1bS10ZXh0LWZvbnQtd2VpZ2h0OiBtYXRlcmlhbC1yZWd1bGFyLWZvbnQtd2VpZ2h0LCBvcHRpb24tbGFyZ2UtdGV4dC1mb250LXdlaWdodDogbWF0ZXJpYWwtcmVndWxhci1mb250LXdlaWdodCwgb3B0aW9uLWdpYW50LXRleHQtZm9udC13ZWlnaHQ6IG1hdGVyaWFsLXJlZ3VsYXItZm9udC13ZWlnaHQpO1xyXG4kbmItdGhlbWVzOiBuYi1yZWdpc3Rlci10aGVtZSgkdGhlbWUsIG1hdGVyaWFsLWxpZ2h0LCBkZWZhdWx0KTsiLCJAaW1wb3J0ICcuLi8uLi8uLi9AdGhlbWUvc3R5bGVzL3RoZW1lcyc7XHJcbkBpbmNsdWRlIG5iLWluc3RhbGwtY29tcG9uZW50KCkge1xyXG4gICAgLmJ1dHRvbnMtcm93IHtcclxuICAgICAgICBtYXJnaW46IC0wLjVyZW07XHJcbiAgICB9XHJcbiAgICBidXR0b25bbmJCdXR0b25dIHtcclxuICAgICAgICBtYXJnaW46IDAuNXJlbTtcclxuICAgIH1cclxuICAgIC5hY3Rpb24taWNvbiB7XHJcbiAgICAgICAgQGluY2x1ZGUgbmItbHRyKG1hcmdpbi1yaWdodCwgMC41cmVtKTtcclxuICAgICAgICBAaW5jbHVkZSBuYi1ydGwobWFyZ2luLWxlZnQsIDAuNXJlbSk7XHJcbiAgICB9XHJcbiAgICAuYWN0aW9ucy1jYXJkIHtcclxuICAgICAgICBoZWlnaHQ6IDhyZW07XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    31529: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PopulationsListComponent": function PopulationsListComponent() {
          return (
            /* binding */
            _PopulationsListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! environments/environment */
      92340);
      /* harmony import */


      var _population_add_population_add_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../population-add/population-add.component */
      26449);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @nebular/theme */
      40465);
      /* harmony import */


      var _core_data_remote_services_survey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/data/remote/services/survey.service */
      32456);
      /* harmony import */


      var _core_data_remote_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/data/remote/services/auth.service */
      31479);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @sweetalert2/ngx-sweetalert2 */
      17749);

      function PopulationsListComponent_nb_list_item_19_nb_action_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nb-action", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "nb-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "swal", 21, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("confirm", function PopulationsListComponent_nb_list_item_19_nb_action_16_Template_swal_confirm_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            var pop_r1 = ctx_r9.$implicit;
            var i_r2 = ctx_r9.index;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r8.activatePopulation(pop_r1, i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);

          var pop_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("swal", _r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("title", "Seguro que desea Activar la campa\xF1a: ", pop_r1 == null ? null : pop_r1.name, "?");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showCancelButton", true)("focusCancel", true);
        }
      }

      function PopulationsListComponent_nb_list_item_19_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nb-action", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "nb-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function PopulationsListComponent_nb_list_item_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nb-list-item", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "nb-user", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "nb-actions", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nb-action", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "swal", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("confirm", function PopulationsListComponent_nb_list_item_19_Template_swal_confirm_4_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);

            var pop_r1 = restoredCtx.$implicit;
            var i_r2 = restoredCtx.index;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r12.deletePopulation(pop_r1, i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "nb-action", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " / ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "nb-action", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "nb-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "nb-action", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, PopulationsListComponent_nb_list_item_19_nb_action_16_Template, 4, 4, "nb-action", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, PopulationsListComponent_nb_list_item_19_ng_template_17_Template, 2, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pop_r1 = ctx.$implicit;

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("badgeText", (pop_r1 == null ? null : pop_r1.active) ? "Activa" : "")("name", pop_r1 == null ? null : pop_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("swal", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("title", "Seguro que desea eliminar la campa\xF1a: ", pop_r1 == null ? null : pop_r1.name, "?");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showCancelButton", true)("focusCancel", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("href", "#/dashboard/audience/", pop_r1 == null ? null : pop_r1.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", pop_r1 == null ? null : pop_r1.surveys.length, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("href", "#/dashboard/audience/", pop_r1 == null ? null : pop_r1.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", pop_r1 == null ? null : pop_r1.surveyeds.length, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate2"]("href", "#/encuesta/", pop_r1 == null ? null : pop_r1.id, "/", ctx_r0.user.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate3"]("href", "", ctx_r0.environment.baseUrl.backend, "/report/", pop_r1 == null ? null : pop_r1.id, "/", ctx_r0.user.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(pop_r1 == null ? null : pop_r1.active))("ngIfElse", _r5);
        }
      }

      var _PopulationsListComponent = /*#__PURE__*/function () {
        function _PopulationsListComponent(_dialogService, _surveyService, _authService) {
          var _this9 = this;

          _classCallCheck(this, _PopulationsListComponent);

          this._dialogService = _dialogService;
          this._surveyService = _surveyService;
          this.user = null;
          this.active_population = null;
          this.environment = environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
          this.onActivate = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();

          _authService.getCurrentUser().subscribe(function (user) {
            return _this9.user = user;
          });
        }

        _createClass(_PopulationsListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getPopulations();
          }
        }, {
          key: "addPopulation",
          value: function addPopulation(user) {
            var _this10 = this;

            if (user) {
              this._dialogService.open(_population_add_population_add_component__WEBPACK_IMPORTED_MODULE_1__.PopulationAddComponent, {
                context: user.id.toString()
              });
            } else {
              this._dialogService.open(_population_add_population_add_component__WEBPACK_IMPORTED_MODULE_1__.PopulationAddComponent).onClose.subscribe(function (population) {
                if (population) {
                  _this10.populations = [population].concat(_this10.populations);
                }
              });
            } // .onClose.subscribe(name => name && this.names.push(name));

          }
        }, {
          key: "getPopulations",
          value: function getPopulations() {
            var _this11 = this;

            this._surveyService.getPopulations().subscribe({
              next: function next(populations) {
                _this11.populations = populations;

                _this11.populations.map(function (pop) {
                  if (pop.active) {
                    _this11.active_population = pop;
                  }
                });
              }
            });
          }
        }, {
          key: "deletePopulation",
          value: function deletePopulation(pop, i) {
            var _this12 = this;

            this._surveyService.delPopulations(pop).subscribe({
              next: function next(populations) {
                if (populations) {
                  _this12.populations.splice(i, 1);
                }
              }
            });
          }
        }, {
          key: "activatePopulation",
          value: function activatePopulation(pop, i) {
            var _this13 = this;

            this._surveyService.activePopulations(pop).subscribe({
              next: function next(populations) {
                if (populations) {
                  _this13.populations = populations;

                  _this13.onActivate.emit(populations); //emit change

                }
              }
            });
          }
        }]);

        return _PopulationsListComponent;
      }();

      _PopulationsListComponent.ɵfac = function PopulationsListComponent_Factory(t) {
        return new (t || _PopulationsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_data_remote_services_survey_service__WEBPACK_IMPORTED_MODULE_2__.SurveyService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_data_remote_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService));
      };

      _PopulationsListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _PopulationsListComponent,
        selectors: [["ngx-populations-list"]],
        outputs: {
          onActivate: "onActivate"
        },
        decls: 21,
        vars: 1,
        consts: [["size", "large"], [1, "caption"], ["icon", "play-circle-outline", "status", "success"], ["status", "info", "size", "small", "nbButton", "", 1, "col", "mt-2", "text-right", 3, "click"], ["icon", "plus-circle-outline"], [1, "row", "mt-3"], ["class", "d-flex justify-content-between align-items-stretch", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "align-items-stretch"], ["badgeStatus", "success", "badgePosition", "bottom right", "size", "tiny", 3, "badgeText", "name"], ["fullWidth", "", "size", "small"], ["title", "Borrar Campa\xF1a", "icon", "trash-outline", "status", "warning", 3, "swal"], ["text", "Esto no se puede deshacer", "icon", "question", 3, "title", "showCancelButton", "focusCancel", "confirm"], ["deleteSwal", ""], ["title", "Encuestados", 1, "d-flex", "justify-content-between"], ["target", "_blank", 3, "href"], ["status", "info", "title", "Link"], ["icon", "link-outline"], ["icon", "download-outline", "status", "info", "title", "Descargar Reporte", "target", "_blank", 3, "href"], ["title", "Activar", 3, "swal", 4, "ngIf", "ngIfElse"], ["pause", ""], ["title", "Activar", 3, "swal"], ["text", "Esto cambiar\xE1 la campa\xF1a activa actual", "icon", "question", 3, "title", "showCancelButton", "focusCancel", "confirm"], ["activeSwal", ""], ["title", "Desactivar"], ["icon", "stop-circle-outline", "status", "danger"]],
        template: function PopulationsListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nb-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Campa\xF1as ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Usted debe crear una campa\xF1a para cada periodo de aplicaci\xF3n de la encuesta. Las campa\xF1as ayudan a segmentar la encuesta por periodo o poblaci\xF3n. Tenga en cuenta que solo una campa\xF1a permanecer\xE1 activa ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Instrucciones*:");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "1. Dar clic en crear Campa\xF1a y seguir instrucciones");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "2. Activar la campa\xF1a creada, presionando el bot\xF3n ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "nb-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PopulationsListComponent_Template_button_click_15_listener() {
              return ctx.addPopulation();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "nb-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Campa\xF1a");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "nb-list", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, PopulationsListComponent_nb_list_item_19_Template, 19, 17, "nb-list-item", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "nb-card-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.populations);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbIconComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardFooterComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbListItemComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbUserComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbActionsComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbActionComponent, _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__.SwalDirective, _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__.SwalComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3B1bGF0aW9ucy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    64890: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SurveyedAddComponent": function SurveyedAddComponent() {
          return (
            /* binding */
            _SurveyedAddComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _core_data_remote_schemas_surveyed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @core/data/remote/schemas/surveyed */
      14398);
      /* harmony import */


      var _core_data_remote_services_survey_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @core/data/remote/services/survey.service */
      32456);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nebular/theme */
      40465);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);

      var _SurveyedAddComponent = /*#__PURE__*/function () {
        function _SurveyedAddComponent(_surveyService) {
          _classCallCheck(this, _SurveyedAddComponent);

          this._surveyService = _surveyService;
          this.added = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.surveyed = {
            name: "",
            identification: "",
            last_name: "",
            population_id: ""
          };
        }

        _createClass(_SurveyedAddComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this14 = this;

            this.surveyed.population_id = this.population_id;

            this._surveyService.addSurveyed(this.surveyed).subscribe(function (surveyed) {
              _this14.added.emit(surveyed);

              _this14.surveyed = new _core_data_remote_schemas_surveyed__WEBPACK_IMPORTED_MODULE_0__.Surveyed();
            });
          }
        }]);

        return _SurveyedAddComponent;
      }();

      _SurveyedAddComponent.ɵfac = function SurveyedAddComponent_Factory(t) {
        return new (t || _SurveyedAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_data_remote_services_survey_service__WEBPACK_IMPORTED_MODULE_1__.SurveyService));
      };

      _SurveyedAddComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _SurveyedAddComponent,
        selectors: [["ngx-surveyed-add"]],
        inputs: {
          population_id: "population_id"
        },
        outputs: {
          added: "added"
        },
        decls: 11,
        vars: 2,
        consts: [[1, "row"], [1, "col-md-12"], [1, "inline-form-card"], [1, "form-inline"], ["name", "name", "type", "text", "nbInput", "", "fullWidth", "", "placeholder", "Nombre", 3, "ngModel", "ngModelChange"], ["name", "identification", "type", "text", "nbInput", "", "fullWidth", "", "placeholder", "ID", 3, "ngModel", "ngModelChange"], ["nbButton", "", "status", "primary", 3, "click"]],
        template: function SurveyedAddComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nb-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Agregar Encuestado");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SurveyedAddComponent_Template_input_ngModelChange_7_listener($event) {
              return ctx.surveyed.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SurveyedAddComponent_Template_input_ngModelChange_8_listener($event) {
              return ctx.surveyed.identification = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SurveyedAddComponent_Template_button_click_9_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Agregar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.surveyed.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.surveyed.identification);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardBodyComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbButtonComponent],
        styles: ["nb-checkbox[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.form-inline[_ngcontent-%COMP%]   [fullWidth][_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.form-inline[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\nnb-card.inline-form-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cnZleWVkLWFkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxPQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJzdXJ2ZXllZC1hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYi1jaGVja2JveCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uZm9ybS1pbmxpbmUgW2Z1bGxXaWR0aF0ge1xyXG4gICAgZmxleDogMTtcclxufVxyXG5cclxuLmZvcm0taW5saW5lPioge1xyXG4gICAgbWFyZ2luOiAwIDEuNXJlbSAxLjVyZW0gMDtcclxufVxyXG5cclxubmItY2FyZC5pbmxpbmUtZm9ybS1jYXJkIG5iLWNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    88428: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SurveysTableComponent": function SurveysTableComponent() {
          return (
            /* binding */
            _SurveysTableComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _core_data_remote_services_survey_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @core/data/remote/services/survey.service */
      32456);
      /* harmony import */


      var _nebular_security__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nebular/security */
      18355);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @nebular/theme */
      40465);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @sweetalert2/ngx-sweetalert2 */
      17749);
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ng2-search-filter */
      51863);

      function SurveysTableComponent_nb_list_item_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-list-item", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "nb-user", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nb-actions", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nb-action", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Desde:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "nb-action", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Hasta:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "nb-action", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "nb-icon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "nb-action", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "nb-icon", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "swal", 22, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("confirm", function SurveysTableComponent_nb_list_item_20_Template_swal_confirm_22_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var survey_r1 = restoredCtx.$implicit;
            var i_r2 = restoredCtx.index;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r4.delete_survey(survey_r1, i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var survey_r1 = ctx.$implicit;

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](23);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", survey_r1 == null ? null : survey_r1.surveyed == null ? null : survey_r1.surveyed.name)("title", survey_r1 == null ? null : survey_r1.surveyed == null ? null : survey_r1.surveyed.identification);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](9, 10, survey_r1 == null ? null : survey_r1.created_at, "medium"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](16, 13, survey_r1 == null ? null : survey_r1.updated_at, "medium"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("href", "#/encuesta/1/", ctx_r0.user.id, "/", survey_r1.uuid, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("swal", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("title", "Seguro que desea eliminar la encuesta de ", survey_r1.surveyed.name, "?");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showCancelButton", true)("focusCancel", true);
        }
      }

      var _SurveysTableComponent = /*#__PURE__*/function () {
        function _SurveysTableComponent(_Activatedroute, _surveyService, _accessChecker, _router) {
          _classCallCheck(this, _SurveysTableComponent);

          this._Activatedroute = _Activatedroute;
          this._surveyService = _surveyService;
          this._accessChecker = _accessChecker;
          this._router = _router; //surveys: Array<Survey>;

          this.filterargs = {
            name: 'luis'
          };
          this.filterName = "";
          this.filterId = "";
        }

        _createClass(_SurveysTableComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {//this.getSurveys();
          }
        }, {
          key: "view_survey",
          value: function view_survey(survey) {
            this._router.navigate(["encuesta", 1, this.user.id, survey.uuid]);
          }
        }, {
          key: "delete_survey",
          value: function delete_survey(survey, i) {
            var _this15 = this;

            this._surveyService.deleteSurvey(survey).subscribe({
              next: function next(surveyed) {
                _this15.surveys.splice(i, 1);

                _this15._surveyService.showToast("rigth", "success", "Borrado Correctamente");
              }
            });
          }
        }]);

        return _SurveysTableComponent;
      }();

      _SurveysTableComponent.ɵfac = function SurveysTableComponent_Factory(t) {
        return new (t || _SurveysTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_data_remote_services_survey_service__WEBPACK_IMPORTED_MODULE_0__.SurveyService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_security__WEBPACK_IMPORTED_MODULE_4__.NbAccessChecker), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
      };

      _SurveysTableComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _SurveysTableComponent,
        selectors: [["ngx-surveys-table"]],
        inputs: {
          user: "user",
          surveys: "surveys",
          title: "title"
        },
        decls: 24,
        vars: 10,
        consts: [["size", "large"], [1, "row", "mb-2"], [1, "col-md-6"], ["for", "name"], ["nbPrefix", "", "icon", "person-outline", "pack", "eva"], ["fieldSize", "small", "placeholder", "Buscar por Nombre", "name", "name", "type", "text", "nbInput", "", 3, "ngModel", "ngModelChange"], ["for", "id"], ["nbPrefix", "", "icon", "hash-outline", "pack", "eva"], ["fieldSize", "small", "placeholder", "Buscar por Id", "name", "id", "type", "text", "nbInput", "", 3, "ngModel", "ngModelChange"], [1, "row", "mt-2"], ["class", "d-flex justify-content-between align-items-stretch", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "align-items-stretch"], ["size", "medium", 3, "name", "title"], ["fullWidth", "", "size", "small", 1, "text-center"], ["title", "Inicio", 1, "d-flex", "flex-column", "justify-content-center"], [1, "label", "p-0", "m-0"], ["title", "Borrar Campa\xF1a", 1, "d-flex", "flex-column", "justify-content-center"], ["tile", "ver encuesta", 1, "text-center"], ["target", "_blank", 3, "href"], ["icon", "external-link-outline", "status", "info"], ["tile", "borrar encuesta", 1, "text-center", 3, "swal"], ["icon", "trash-outline", "status", "info"], ["text", "Esto no se puede deshacer", "icon", "question", 3, "title", "showCancelButton", "focusCancel", "confirm"], ["deleteSwal", ""]],
        template: function SurveysTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " El siguiente es un listado de encuestas realizadas a traves de su enlace personal. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Nombre");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "nb-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "nb-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SurveysTableComponent_Template_input_ngModelChange_12_listener($event) {
              return ctx.filterName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "nb-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "nb-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SurveysTableComponent_Template_input_ngModelChange_18_listener($event) {
              return ctx.filterId = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "nb-list", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, SurveysTableComponent_nb_list_item_20_Template, 24, 16, "nb-list-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "filter");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "filter");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "nb-card-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.title, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.filterName);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.filterId);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](21, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](22, 7, ctx.surveys, ctx.filterName), ctx.filterId));
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbFormFieldComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbIconComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbPrefixDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardFooterComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbListItemComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbUserComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbActionsComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbActionComponent, _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_8__.SwalDirective, _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_8__.SwalComponent],
        pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_1__.Ng2SearchPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXJ2ZXlzLXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_dashboard_dashboard_module_ts-es5.js.map