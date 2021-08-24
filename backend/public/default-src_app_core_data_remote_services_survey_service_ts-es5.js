(function () {
  "use strict";

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkngx_admin"] = self["webpackChunkngx_admin"] || []).push([["default-src_app_core_data_remote_services_survey_service_ts"], {
    /***/
    65211: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Answer": function Answer() {
          return (
            /* binding */
            _Answer
          );
        }
        /* harmony export */

      });

      var _Answer = /*#__PURE__*/function () {
        function _Answer() {
          _classCallCheck(this, _Answer);
        }

        _createClass(_Answer, [{
          key: "deserialize",
          value: function deserialize(input) {
            Object.assign(this, input);
            this.checked = input.checked == 1 ? true : false;
            return this;
          }
        }]);

        return _Answer;
      }();
      /***/

    },

    /***/
    58365: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Condition": function Condition() {
          return (
            /* binding */
            _Condition
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _question__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./question */
      89489);

      var _Condition = /*#__PURE__*/function () {
        function _Condition() {
          _classCallCheck(this, _Condition);
        }

        _createClass(_Condition, [{
          key: "deserialize",
          value: function deserialize(input) {
            Object.assign(this, input);
            this.question ? input.question.map(function (question) {
              return new _question__WEBPACK_IMPORTED_MODULE_0__.Question().deserialize(question);
            }) : [];
            return this;
          }
        }]);

        return _Condition;
      }();
      /***/

    },

    /***/
    38771: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Occupation": function Occupation() {
          return (
            /* binding */
            _Occupation
          );
        }
        /* harmony export */

      });

      var _Occupation = /*#__PURE__*/function () {
        function _Occupation() {
          _classCallCheck(this, _Occupation);
        }

        _createClass(_Occupation, [{
          key: "deserialize",
          value: function deserialize(input) {
            Object.assign(this, input); //this.onet ?  new Onet().deserialize(input.pps)   : [];

            return this;
          }
        }]);

        return _Occupation;
      }();
      /***/

    },

    /***/
    79558: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Onet": function Onet() {
          return (
            /* binding */
            _Onet
          );
        }
        /* harmony export */

      });

      var _Onet = /*#__PURE__*/function () {
        function _Onet() {
          _classCallCheck(this, _Onet);
        }

        _createClass(_Onet, [{
          key: "deserialize",
          value: function deserialize(input) {
            Object.assign(this, input); //this.onet ?  new Onet().deserialize(input.pps)   : [];

            return this;
          }
        }]);

        return _Onet;
      }();
      /***/

    },

    /***/
    4123: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Option": function Option() {
          return (
            /* binding */
            _Option
          );
        }
        /* harmony export */

      });

      var _Option = /*#__PURE__*/function () {
        function _Option() {
          _classCallCheck(this, _Option);
        }

        _createClass(_Option, [{
          key: "deserialize",
          value: function deserialize(input) {
            Object.assign(this, input);
            return this;
          }
        }]);

        return _Option;
      }();
      /***/

    },

    /***/
    17677: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Population": function Population() {
          return (
            /* binding */
            _Population
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _surveyed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./surveyed */
      14398);

      var _Population = /*#__PURE__*/function () {
        function _Population() {
          _classCallCheck(this, _Population);
        }

        _createClass(_Population, [{
          key: "deserialize",
          value: function deserialize(input) {
            Object.assign(this, input);
            this.surveyeds ? input.surveyeds.map(function (surveyed) {
              return new _surveyed__WEBPACK_IMPORTED_MODULE_0__.Surveyed().deserialize(surveyed);
            }) : [];
            return this;
          }
        }]);

        return _Population;
      }();
      /***/

    },

    /***/
    55411: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Pps": function Pps() {
          return (
            /* binding */
            _Pps
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _onet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./onet */
      79558);

      var _Pps = /*#__PURE__*/function () {
        function _Pps() {
          _classCallCheck(this, _Pps);
        }

        _createClass(_Pps, [{
          key: "deserialize",
          value: function deserialize(input) {
            Object.assign(this, input);
            this.onets ? input.onets.map(function (onet) {
              return new _onet__WEBPACK_IMPORTED_MODULE_0__.Onet().deserialize(onet);
            }) : [];
            return this;
          }
        }]);

        return _Pps;
      }();
      /***/

    },

    /***/
    96354: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PpsRank": function PpsRank() {
          return (
            /* binding */
            _PpsRank
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _pps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./pps */
      55411);

      var _PpsRank = /*#__PURE__*/function () {
        function _PpsRank() {
          _classCallCheck(this, _PpsRank);
        }

        _createClass(_PpsRank, [{
          key: "deserialize",
          value: function deserialize(input) {
            Object.assign(this, input);
            this.pps ? new _pps__WEBPACK_IMPORTED_MODULE_0__.Pps().deserialize(input.pps) : [];
            return this;
          }
        }]);

        return _PpsRank;
      }();
      /***/

    },

    /***/
    89489: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Question": function Question() {
          return (
            /* binding */
            _Question
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _Answer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Answer */
      65211);
      /* harmony import */


      var _condition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./condition */
      58365);
      /* harmony import */


      var _option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./option */
      4123);

      var _Question = /*#__PURE__*/function () {
        function _Question() {
          _classCallCheck(this, _Question);
        }

        _createClass(_Question, [{
          key: "deserialize",
          value: function deserialize(input) {
            //Set Validators
            input.validators = new Array();
            input.required ? input.validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required) : input.required;
            input.isEmail ? input.validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email) : input.isEmail;
            input.show = true; //Set Conditions

            this.conditions ? input.options.map(function (condition) {
              return new _condition__WEBPACK_IMPORTED_MODULE_1__.Condition().deserialize(condition);
            }) : [];
            this.answers ? input.answers.map(function (answer) {
              return new _Answer__WEBPACK_IMPORTED_MODULE_0__.Answer().deserialize(answer);
            }) : [];
            /*Object.assign(this, input);
            if(this.conditions){
               this.conditions.forEach(condition => {
              if(condition.question.id === this.id){
                condition.question = this
                this.show = condition.question.show;
              }
            });
            }*/

            this.options ? input.options.map(function (option) {
              return new _option__WEBPACK_IMPORTED_MODULE_2__.Option().deserialize(option);
            }) : [];
            this.checked = input.checked == "1" ? true : false;
            return this;
          }
        }]);

        return _Question;
      }();
      /***/

    },

    /***/
    30388: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Section": function Section() {
          return (
            /* binding */
            _Section
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _question__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./question */
      89489);

      var _Section = /*#__PURE__*/function () {
        function _Section() {
          _classCallCheck(this, _Section);
        }

        _createClass(_Section, [{
          key: "deserialize",
          value: function deserialize(input) {
            var _this = this;

            Object.assign(this, input);
            var conditions = new Array();
            this.questions ? input.questions.map(function (question) {
              new _question__WEBPACK_IMPORTED_MODULE_0__.Question().deserialize(question);
            }) : []; //Get array of conditions

            this.questions.map(function (question) {
              question.conditions.map(function (condition) {
                conditions.push(condition);
              });
            }); //Get index of question in array

            conditions.map(function (condition) {
              _this.questions.map(function (question, index) {
                if (condition.restriction_id == question.id) {
                  condition.question_index = index;
                }
              });
            });
            return this;
          }
        }]);

        return _Section;
      }();
      /***/

    },

    /***/
    27753: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Survey": function Survey() {
          return (
            /* binding */
            _Survey
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _surveyed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./surveyed */
      14398);

      var _Survey = /*#__PURE__*/function () {
        function _Survey() {
          _classCallCheck(this, _Survey);
        }

        _createClass(_Survey, [{
          key: "deserialize",
          value: function deserialize(input) {
            Object.assign(this, input);
            this.surveyed ? new _surveyed__WEBPACK_IMPORTED_MODULE_0__.Surveyed().deserialize(input.surveyed) : [];
            return this;
          }
        }]);

        return _Survey;
      }();
      /***/

    },

    /***/
    14398: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Surveyed": function Surveyed() {
          return (
            /* binding */
            _Surveyed
          );
        }
        /* harmony export */

      });

      var _Surveyed = /*#__PURE__*/function () {
        function _Surveyed() {
          _classCallCheck(this, _Surveyed);
        }

        _createClass(_Surveyed, [{
          key: "deserialize",
          value: function deserialize(input) {
            input.name = input.first_name + " " + input.last_name;
            Object.assign(this, input);
            return this;
          }
        }]);

        return _Surveyed;
      }();
      /***/

    },

    /***/
    32456: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SurveyService": function SurveyService() {
          return (
            /* binding */
            _SurveyService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _core_utils_commons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @core/utils/commons */
      17102);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      98636);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      18293);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var _schemas_occupation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../schemas/occupation */
      38771);
      /* harmony import */


      var _schemas_population__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../schemas/population */
      17677);
      /* harmony import */


      var _schemas_pps_rank__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../schemas/pps_rank */
      96354);
      /* harmony import */


      var _schemas_question__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../schemas/question */
      89489);
      /* harmony import */


      var _schemas_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../schemas/section */
      30388);
      /* harmony import */


      var _schemas_survey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../schemas/survey */
      27753);
      /* harmony import */


      var _schemas_surveyed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../schemas/surveyed */
      14398);
      /* harmony import */


      var _schemas_users__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../schemas/users */
      39205);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../api.service */
      12426);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @nebular/theme */
      40465);

      var routes = {
        questions: 'questions',
        question: function question(id) {
          return "questions/".concat(id);
        },
        options: 'options',
        option: function option(id) {
          return "options/".concat(id);
        },
        sections: 'sections',
        section: function section(session, uuid) {
          return "sections/".concat(session, "/").concat(uuid);
        },
        surveys: 'surveys',
        survey: function survey(id) {
          return "surveys/".concat(id);
        },
        survey_uuid: function survey_uuid(id) {
          return "surveys/uuid/".concat(id);
        },
        surveyeds: "surveyeds",
        surveyed: function surveyed(id) {
          return "surveyeds/".concat(id);
        },
        populations: "populations",
        population: function population(id) {
          return "populations/".concat(id);
        },
        population_activate: function population_activate(id) {
          return "populations/activate/".concat(id);
        },
        user_surveys: function user_surveys(id) {
          return "surveys/".concat(id);
        },
        gateway: 'surveys/gateway',
        user: function user(id) {
          return "users/".concat(id);
        },
        pps_uuid: function pps_uuid(uuid) {
          return "pps/".concat(uuid);
        },
        occupations: function occupations(pps_code, onet_title) {
          return "occupations/".concat(pps_code, "/").concat(onet_title);
        },
        occupation: function occupation(title) {
          return "occupation/".concat(title);
        }
      };

      var _SurveyService = /*#__PURE__*/function (_core_utils_commons__) {
        _inherits(_SurveyService, _core_utils_commons__);

        var _super = _createSuper(_SurveyService);

        function _SurveyService(_http, _nbService) {
          var _this2;

          _classCallCheck(this, _SurveyService);

          _this2 = _super.call(this, _nbService);
          _this2._http = _http;
          _this2._nbService = _nbService;
          return _this2;
        }

        _createClass(_SurveyService, [{
          key: "getAllSections",
          value: function getAllSections() {
            var _this3 = this;

            return this._http.get(routes.sections).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(function (_) {
              return _this3.log('Fetched Sections');
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('getAll', [])), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(function (sections) {
              return sections.map(function (section) {
                return new _schemas_section__WEBPACK_IMPORTED_MODULE_5__.Section().deserialize(section);
              });
            }));
          }
        }, {
          key: "getSingleSection",
          value: function getSingleSection(uuid, section) {
            return this._http.get(routes.section(section, uuid)).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(function (section) {
              return new _schemas_section__WEBPACK_IMPORTED_MODULE_5__.Section().deserialize(section);
            }));
          }
        }, {
          key: "getAllQuestions",
          value: function getAllQuestions() {
            var _this4 = this;

            return this._http.get(routes.questions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(function (_) {
              return _this4.log('Fetched Questions');
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('getAll', [])), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(function (questions) {
              return questions.map(function (question) {
                return new _schemas_question__WEBPACK_IMPORTED_MODULE_4__.Question().deserialize(question);
              });
            }));
          }
          /** PUT: Update a Questión */

        }, {
          key: "updateQuestion",
          value: function updateQuestion(q) {
            var _this5 = this;

            return this._http.put(routes.question(q.id), q).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(function (_) {
              return _this5.log("Updated role id=".concat(q.id));
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('updateQuestion')));
          }
          /** POST: Update a Questión */

        }, {
          key: "addOption",
          value: function addOption(q) {
            var _this6 = this;

            return this._http.post(routes.options, q).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(function (_) {
              return _this6.log("Add Option id=".concat(q.id));
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('addOption')));
          }
        }, {
          key: "deleteOption",
          value: function deleteOption(q) {
            var _this7 = this;

            return this._http["delete"](routes.option(q.id)).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(function (_) {
              return _this7.log("Deleted Option id=".concat(q.id));
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('deleteOption')));
          }
          /** POST: Update or add a Survey */

        }, {
          key: "addOrUpdateSurvey",
          value: function addOrUpdateSurvey(survey) {
            var _this8 = this;

            return this._http.postFormData(routes.surveys, survey, {
              reportProgress: true,
              observe: 'events'
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(function (_) {
              return _this8.log("create Survey ");
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('Survey')));
          }
        }, {
          key: "createOrGetSurvey",
          value: function createOrGetSurvey(survey) {
            var _this9 = this;

            return this._http.postFormData(routes.gateway, survey, {
              reportProgress: true,
              observe: 'events'
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(function (_) {
              return _this9.log("create Survey ");
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('Survey')));
          }
        }, {
          key: "getSingleUser",
          value: function getSingleUser(id) {
            return this._http.get(routes.user(id)).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('getSingle', [])), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(function (user) {
              return new _schemas_users__WEBPACK_IMPORTED_MODULE_8__.User().deserialize(user);
            }));
          }
        }, {
          key: "getSurveys",
          value: function getSurveys(id) {
            var _this10 = this;

            return this._http.get(routes.user_surveys(id)).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(function (_) {
              return _this10.log('Fetched Surveys');
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('getAll', [])), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(function (surveys) {
              return surveys.map(function (survey) {
                return new _schemas_survey__WEBPACK_IMPORTED_MODULE_6__.Survey().deserialize(survey);
              });
            }));
          }
        }, {
          key: "getSurvey",
          value: function getSurvey(uuid) {
            var _this11 = this;

            return this._http.get(routes.survey_uuid(uuid)).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(function (_) {
              return _this11.log('Fetched Surveys');
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('getAll', [])), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(function (survey) {
              return new _schemas_survey__WEBPACK_IMPORTED_MODULE_6__.Survey().deserialize(survey);
            }));
          }
        }, {
          key: "getPpsRank",
          value: function getPpsRank(uuid) {
            var _this12 = this;

            return this._http.get(routes.pps_uuid(uuid)).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(function (_) {
              return _this12.log('Fetched Pps');
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('getAll', [])), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(function (ppsRanking) {
              return ppsRanking.map(function (ppsRank) {
                return new _schemas_pps_rank__WEBPACK_IMPORTED_MODULE_3__.PpsRank().deserialize(ppsRank);
              });
            }));
          }
        }, {
          key: "getOccupationByTitle",
          value: function getOccupationByTitle(title) {
            var _this13 = this;

            return this._http.get(routes.occupation(title)).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(function (_) {
              return _this13.log('Fetched getOccupations');
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('getAll', [])), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(function (occupation) {
              return new _schemas_occupation__WEBPACK_IMPORTED_MODULE_1__.Occupation().deserialize(occupation);
            }));
          }
        }, {
          key: "getOccupationsBylevel",
          value: function getOccupationsBylevel(pps_code, onet_title) {
            var _this14 = this;

            return this._http.get(routes.occupations(pps_code, onet_title)).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(function (_) {
              return _this14.log('Fetched getOccupations');
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('getAll', [])), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(function (ocupattions) {
              return ocupattions.map(function (occupation) {
                return new _schemas_occupation__WEBPACK_IMPORTED_MODULE_1__.Occupation().deserialize(occupation);
              });
            }));
          }
        }, {
          key: "getPopulations",
          value: function getPopulations() {
            var _this15 = this;

            return this._http.get(routes.populations).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(function (_) {
              return _this15.log('Fetched Population');
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('Population', [])), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(function (populations) {
              return populations.map(function (population) {
                return new _schemas_population__WEBPACK_IMPORTED_MODULE_2__.Population().deserialize(population);
              });
            }));
          }
        }, {
          key: "addPopulation",
          value: function addPopulation(formData) {
            var _this16 = this;

            return this._http.postFormData(routes.populations, formData, {
              reportProgress: true,
              observe: 'events'
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(function (_) {
              return _this16.log("create Population ");
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('Population')));
          }
        }, {
          key: "getPopulation",
          value: function getPopulation(pop_id) {
            var _this17 = this;

            return this._http.get(routes.population(pop_id)).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(function (_) {
              return _this17.log('Fetched Population');
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('getAll', [])), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(function (population) {
              return new _schemas_population__WEBPACK_IMPORTED_MODULE_2__.Population().deserialize(population);
            }));
          }
        }, {
          key: "delPopulations",
          value: function delPopulations(pop) {
            var _this18 = this;

            var url = routes.population(pop.id + "");
            return this._http["delete"](url).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(function (_) {
              return _this18.log("deleted Population id=".concat(pop.id));
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('deletePopulation')));
          }
        }, {
          key: "activePopulations",
          value: function activePopulations(pop) {
            var _this19 = this;

            var url = routes.population_activate(pop.id + "");
            return this._http.post(url).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(function (_) {
              return _this19.log('Fetched Population');
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('Population', [])), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(function (populations) {
              return populations.map(function (population) {
                return new _schemas_population__WEBPACK_IMPORTED_MODULE_2__.Population().deserialize(population);
              });
            }));
          }
        }, {
          key: "addSurveyed",
          value: function addSurveyed(surveyed) {
            var _this20 = this;

            return this._http.post(routes.surveyeds, surveyed).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(function (_) {
              return _this20.log("Add Surveyed id=".concat(surveyed.id));
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('addSurveyedn')), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(function (surveyed) {
              return new _schemas_surveyed__WEBPACK_IMPORTED_MODULE_7__.Surveyed().deserialize(surveyed);
            }));
          }
        }, {
          key: "deleteSurveyed",
          value: function deleteSurveyed(surveyed) {
            var _this21 = this;

            var url = routes.surveyed(surveyed.id + "");
            return this._http["delete"](url).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(function (_) {
              return _this21.log("deleted Surveyed id=".concat(surveyed.id));
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('deletePopulation')));
          }
        }, {
          key: "deleteSurvey",
          value: function deleteSurvey(survey) {
            var _this22 = this;

            var url = routes.survey(survey.id + "");
            return this._http["delete"](url).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(function (_) {
              return _this22.log("deleted Survey id=".concat(survey.id));
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('deletePopulation')));
          } //HELPERS

        }, {
          key: "eval_conditions",
          value: function eval_conditions(section, form, value, questions) {
            section.questions.map(function (question) {
              if (question.conditions.length > 0) {
                var result = true;
                question.conditions.forEach(function (condition) {
                  var values = condition.value.split(",");

                  if (values.includes(value + "")) {
                    //set visibility to conditioned question
                    form.get(condition.question.label).setValidators(null);
                    form.get(condition.question.label).updateValueAndValidity(); //FIX question estructure.

                    if (questions.questions) {
                      questions.questions[condition.question_index].show = false;
                    } else {
                      questions[condition.question_index].show = false;
                    }
                  } else {
                    form.get(condition.question.label).setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);
                    form.get(condition.question.label).updateValueAndValidity();
                    form.get(condition.question.label).enable(); //FIX question estructure.

                    if (questions.questions) {
                      questions.questions[condition.question_index].show = true;
                    } else {
                      questions[condition.question_index].show = true;
                    }
                  }
                });
              }
            });
          }
        }]);

        return _SurveyService;
      }(_core_utils_commons__WEBPACK_IMPORTED_MODULE_0__.Commons);

      _SurveyService.ɵfac = function SurveyService_Factory(t) {
        return new (t || _SurveyService)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_9__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbToastrService));
      };

      _SurveyService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjectable"]({
        token: _SurveyService,
        factory: _SurveyService.ɵfac,
        providedIn: 'root'
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_core_data_remote_services_survey_service_ts-es5.js.map