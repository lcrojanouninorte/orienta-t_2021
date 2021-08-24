"use strict";
(self["webpackChunkngx_admin"] = self["webpackChunkngx_admin"] || []).push([["default-src_app_core_data_remote_services_survey_service_ts"],{

/***/ 65211:
/*!*****************************************************!*\
  !*** ./src/app/@core/data/remote/schemas/Answer.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Answer": function() { return /* binding */ Answer; }
/* harmony export */ });
class Answer {
    constructor() {
    }
    deserialize(input) {
        Object.assign(this, input);
        this.checked = input.checked == 1 ? true : false;
        return this;
    }
}


/***/ }),

/***/ 58365:
/*!********************************************************!*\
  !*** ./src/app/@core/data/remote/schemas/condition.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Condition": function() { return /* binding */ Condition; }
/* harmony export */ });
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question */ 89489);

class Condition {
    constructor() {
    }
    deserialize(input) {
        Object.assign(this, input);
        this.question ? input.question.map(question => new _question__WEBPACK_IMPORTED_MODULE_0__.Question().deserialize(question)) : [];
        return this;
    }
}


/***/ }),

/***/ 38771:
/*!*********************************************************!*\
  !*** ./src/app/@core/data/remote/schemas/occupation.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Occupation": function() { return /* binding */ Occupation; }
/* harmony export */ });
class Occupation {
    constructor() {
    }
    deserialize(input) {
        Object.assign(this, input);
        //this.onet ?  new Onet().deserialize(input.pps)   : [];
        return this;
    }
}


/***/ }),

/***/ 79558:
/*!***************************************************!*\
  !*** ./src/app/@core/data/remote/schemas/onet.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Onet": function() { return /* binding */ Onet; }
/* harmony export */ });
class Onet {
    constructor() {
    }
    deserialize(input) {
        Object.assign(this, input);
        //this.onet ?  new Onet().deserialize(input.pps)   : [];
        return this;
    }
}


/***/ }),

/***/ 4123:
/*!*****************************************************!*\
  !*** ./src/app/@core/data/remote/schemas/option.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Option": function() { return /* binding */ Option; }
/* harmony export */ });
class Option {
    constructor() {
    }
    deserialize(input) {
        Object.assign(this, input);
        return this;
    }
}


/***/ }),

/***/ 17677:
/*!*********************************************************!*\
  !*** ./src/app/@core/data/remote/schemas/population.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Population": function() { return /* binding */ Population; }
/* harmony export */ });
/* harmony import */ var _surveyed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./surveyed */ 14398);

class Population {
    constructor() {
    }
    deserialize(input) {
        Object.assign(this, input);
        this.surveyeds ? input.surveyeds.map(surveyed => new _surveyed__WEBPACK_IMPORTED_MODULE_0__.Surveyed().deserialize(surveyed)) : [];
        return this;
    }
}


/***/ }),

/***/ 55411:
/*!**************************************************!*\
  !*** ./src/app/@core/data/remote/schemas/pps.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pps": function() { return /* binding */ Pps; }
/* harmony export */ });
/* harmony import */ var _onet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onet */ 79558);

class Pps {
    constructor() {
    }
    deserialize(input) {
        Object.assign(this, input);
        this.onets ? input.onets.map(onet => new _onet__WEBPACK_IMPORTED_MODULE_0__.Onet().deserialize(onet)) : [];
        return this;
    }
}


/***/ }),

/***/ 96354:
/*!*******************************************************!*\
  !*** ./src/app/@core/data/remote/schemas/pps_rank.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PpsRank": function() { return /* binding */ PpsRank; }
/* harmony export */ });
/* harmony import */ var _pps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pps */ 55411);

class PpsRank {
    constructor() {
    }
    deserialize(input) {
        Object.assign(this, input);
        this.pps ? new _pps__WEBPACK_IMPORTED_MODULE_0__.Pps().deserialize(input.pps) : [];
        return this;
    }
}


/***/ }),

/***/ 89489:
/*!*******************************************************!*\
  !*** ./src/app/@core/data/remote/schemas/question.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Question": function() { return /* binding */ Question; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _Answer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Answer */ 65211);
/* harmony import */ var _condition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./condition */ 58365);
/* harmony import */ var _option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./option */ 4123);




class Question {
    constructor() {
    }
    deserialize(input) {
        //Set Validators
        input.validators = new Array();
        input.required ? input.validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required) : input.required;
        input.isEmail ? input.validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email) : input.isEmail;
        input.show = true;
        //Set Conditions
        this.conditions ? input.options.map(condition => new _condition__WEBPACK_IMPORTED_MODULE_1__.Condition().deserialize(condition)) : [];
        this.answers ? input.answers.map(answer => new _Answer__WEBPACK_IMPORTED_MODULE_0__.Answer().deserialize(answer)) : [];
        /*Object.assign(this, input);
        if(this.conditions){
           this.conditions.forEach(condition => {
          if(condition.question.id === this.id){
            condition.question = this
            this.show = condition.question.show;
          }
        });
        }*/
        this.options ? input.options.map(option => new _option__WEBPACK_IMPORTED_MODULE_2__.Option().deserialize(option)) : [];
        this.checked = input.checked == "1" ? true : false;
        return this;
    }
}


/***/ }),

/***/ 30388:
/*!******************************************************!*\
  !*** ./src/app/@core/data/remote/schemas/section.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Section": function() { return /* binding */ Section; }
/* harmony export */ });
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question */ 89489);

class Section {
    constructor() {
    }
    deserialize(input) {
        Object.assign(this, input);
        let conditions = new Array();
        this.questions ? input.questions.map(question => { new _question__WEBPACK_IMPORTED_MODULE_0__.Question().deserialize(question); }) : [];
        //Get array of conditions
        this.questions.map((question) => {
            question.conditions.map((condition) => {
                conditions.push(condition);
            });
        });
        //Get index of question in array
        conditions.map(condition => {
            this.questions.map((question, index) => {
                if (condition.restriction_id == question.id) {
                    condition.question_index = index;
                }
            });
        });
        return this;
    }
}


/***/ }),

/***/ 27753:
/*!*****************************************************!*\
  !*** ./src/app/@core/data/remote/schemas/survey.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Survey": function() { return /* binding */ Survey; }
/* harmony export */ });
/* harmony import */ var _surveyed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./surveyed */ 14398);

class Survey {
    constructor() {
    }
    deserialize(input) {
        Object.assign(this, input);
        this.surveyed ? new _surveyed__WEBPACK_IMPORTED_MODULE_0__.Surveyed().deserialize(input.surveyed) : [];
        return this;
    }
}


/***/ }),

/***/ 14398:
/*!*******************************************************!*\
  !*** ./src/app/@core/data/remote/schemas/surveyed.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Surveyed": function() { return /* binding */ Surveyed; }
/* harmony export */ });
class Surveyed {
    constructor() {
    }
    deserialize(input) {
        input.name = input.first_name + " " + input.last_name;
        Object.assign(this, input);
        return this;
    }
}


/***/ }),

/***/ 32456:
/*!**************************************************************!*\
  !*** ./src/app/@core/data/remote/services/survey.service.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SurveyService": function() { return /* binding */ SurveyService; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _core_utils_commons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/utils/commons */ 17102);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 98636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var _schemas_occupation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../schemas/occupation */ 38771);
/* harmony import */ var _schemas_population__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../schemas/population */ 17677);
/* harmony import */ var _schemas_pps_rank__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../schemas/pps_rank */ 96354);
/* harmony import */ var _schemas_question__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../schemas/question */ 89489);
/* harmony import */ var _schemas_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../schemas/section */ 30388);
/* harmony import */ var _schemas_survey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../schemas/survey */ 27753);
/* harmony import */ var _schemas_surveyed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../schemas/surveyed */ 14398);
/* harmony import */ var _schemas_users__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../schemas/users */ 39205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../api.service */ 12426);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @nebular/theme */ 40465);














const routes = {
    questions: 'questions',
    question: (id) => `questions/${id}`,
    options: 'options',
    option: (id) => `options/${id}`,
    sections: 'sections',
    section: (session, uuid) => `sections/${session}/${uuid}`,
    surveys: 'surveys',
    survey: (id) => `surveys/${id}`,
    survey_uuid: (id) => `surveys/uuid/${id}`,
    surveyeds: "surveyeds",
    surveyed: (id) => `surveyeds/${id}`,
    populations: "populations",
    population: (id) => `populations/${id}`,
    population_activate: (id) => `populations/activate/${id}`,
    user_surveys: (id) => `surveys/${id}`,
    gateway: 'surveys/gateway',
    user: (id) => `users/${id}`,
    pps_uuid: (uuid) => `pps/${uuid}`,
    occupations: (pps_code, onet_title) => `occupations/${pps_code}/${onet_title}`,
    occupation: (title) => `occupation/${title}`,
};
class SurveyService extends _core_utils_commons__WEBPACK_IMPORTED_MODULE_0__.Commons {
    constructor(_http, _nbService) {
        super(_nbService);
        this._http = _http;
        this._nbService = _nbService;
    }
    getAllSections() {
        return this._http.get(routes.sections).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(_ => this.log('Fetched Sections')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('getAll', [])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(sections => sections.map(section => new _schemas_section__WEBPACK_IMPORTED_MODULE_5__.Section().deserialize(section))));
    }
    getSingleSection(uuid, section) {
        return this._http.get(routes.section(section, uuid)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(section => new _schemas_section__WEBPACK_IMPORTED_MODULE_5__.Section().deserialize(section)));
    }
    getAllQuestions() {
        return this._http.get(routes.questions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(_ => this.log('Fetched Questions')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('getAll', [])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(questions => questions.map(question => new _schemas_question__WEBPACK_IMPORTED_MODULE_4__.Question().deserialize(question))));
    }
    /** PUT: Update a Questión */
    updateQuestion(q) {
        return this._http.put(routes.question(q.id), q).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(_ => this.log(`Updated role id=${q.id}`)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('updateQuestion')));
    }
    /** POST: Update a Questión */
    addOption(q) {
        return this._http.post(routes.options, q).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(_ => this.log(`Add Option id=${q.id}`)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('addOption')));
    }
    deleteOption(q) {
        return this._http.delete(routes.option(q.id)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(_ => this.log(`Deleted Option id=${q.id}`)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('deleteOption')));
    }
    /** POST: Update or add a Survey */
    addOrUpdateSurvey(survey) {
        return this._http.postFormData(routes.surveys, survey, {
            reportProgress: true,
            observe: 'events'
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(_ => this.log(`create Survey `)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('Survey')));
    }
    createOrGetSurvey(survey) {
        return this._http.postFormData(routes.gateway, survey, {
            reportProgress: true,
            observe: 'events'
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(_ => this.log(`create Survey `)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('Survey')));
    }
    getSingleUser(id) {
        return this._http.get(routes.user(id)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('getSingle', [])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(user => new _schemas_users__WEBPACK_IMPORTED_MODULE_8__.User().deserialize(user)));
    }
    getSurveys(id) {
        return this._http.get(routes.user_surveys(id)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(_ => this.log('Fetched Surveys')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('getAll', [])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(surveys => surveys.map(survey => new _schemas_survey__WEBPACK_IMPORTED_MODULE_6__.Survey().deserialize(survey))));
    }
    getSurvey(uuid) {
        return this._http.get(routes.survey_uuid(uuid)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(_ => this.log('Fetched Surveys')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('getAll', [])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(survey => new _schemas_survey__WEBPACK_IMPORTED_MODULE_6__.Survey().deserialize(survey)));
    }
    getPpsRank(uuid) {
        return this._http.get(routes.pps_uuid(uuid)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(_ => this.log('Fetched Pps')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('getAll', [])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(ppsRanking => ppsRanking.map(ppsRank => new _schemas_pps_rank__WEBPACK_IMPORTED_MODULE_3__.PpsRank().deserialize(ppsRank))));
    }
    getOccupationByTitle(title) {
        return this._http.get(routes.occupation(title)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(_ => this.log('Fetched getOccupations')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('getAll', [])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(occupation => new _schemas_occupation__WEBPACK_IMPORTED_MODULE_1__.Occupation().deserialize(occupation)));
    }
    getOccupationsBylevel(pps_code, onet_title) {
        return this._http.get(routes.occupations(pps_code, onet_title)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(_ => this.log('Fetched getOccupations')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('getAll', [])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(ocupattions => ocupattions.map(occupation => new _schemas_occupation__WEBPACK_IMPORTED_MODULE_1__.Occupation().deserialize(occupation))));
    }
    getPopulations() {
        return this._http.get(routes.populations).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(_ => this.log('Fetched Population')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('Population', [])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(populations => populations.map(population => new _schemas_population__WEBPACK_IMPORTED_MODULE_2__.Population().deserialize(population))));
    }
    addPopulation(formData) {
        return this._http.postFormData(routes.populations, formData, {
            reportProgress: true,
            observe: 'events'
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(_ => this.log(`create Population `)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('Population')));
    }
    getPopulation(pop_id) {
        return this._http.get(routes.population(pop_id)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(_ => this.log('Fetched Population')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('getAll', [])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(population => new _schemas_population__WEBPACK_IMPORTED_MODULE_2__.Population().deserialize(population)));
    }
    delPopulations(pop) {
        const url = routes.population(pop.id + "");
        return this._http.delete(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(_ => this.log(`deleted Population id=${pop.id}`)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('deletePopulation')));
    }
    activePopulations(pop) {
        const url = routes.population_activate(pop.id + "");
        return this._http.post(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(_ => this.log('Fetched Population')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('Population', [])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(populations => populations.map(population => new _schemas_population__WEBPACK_IMPORTED_MODULE_2__.Population().deserialize(population))));
    }
    addSurveyed(surveyed) {
        return this._http.post(routes.surveyeds, surveyed).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(_ => this.log(`Add Surveyed id=${surveyed.id}`)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('addSurveyedn')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(surveyed => new _schemas_surveyed__WEBPACK_IMPORTED_MODULE_7__.Surveyed().deserialize(surveyed)));
    }
    deleteSurveyed(surveyed) {
        const url = routes.surveyed(surveyed.id + "");
        return this._http.delete(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(_ => this.log(`deleted Surveyed id=${surveyed.id}`)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('deletePopulation')));
    }
    deleteSurvey(survey) {
        const url = routes.survey(survey.id + "");
        return this._http.delete(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(_ => this.log(`deleted Survey id=${survey.id}`)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(this.handleError('deletePopulation')));
    }
    //HELPERS
    eval_conditions(section, form, value, questions) {
        section.questions.map((question) => {
            if (question.conditions.length > 0) {
                let result = true;
                question.conditions.forEach((condition) => {
                    let values = condition.value.split(",");
                    if (values.includes(value + "")) {
                        //set visibility to conditioned question
                        form.get(condition.question.label).setValidators(null);
                        form.get(condition.question.label).updateValueAndValidity();
                        //FIX question estructure.
                        if (questions.questions) {
                            questions.questions[condition.question_index].show = false;
                        }
                        else {
                            questions[condition.question_index].show = false;
                        }
                    }
                    else {
                        form.get(condition.question.label).setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);
                        form.get(condition.question.label).updateValueAndValidity();
                        form.get(condition.question.label).enable();
                        //FIX question estructure.
                        if (questions.questions) {
                            questions.questions[condition.question_index].show = true;
                        }
                        else {
                            questions[condition.question_index].show = true;
                        }
                    }
                });
            }
        });
    }
}
SurveyService.ɵfac = function SurveyService_Factory(t) { return new (t || SurveyService)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_9__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_15__.NbToastrService)); };
SurveyService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjectable"]({ token: SurveyService, factory: SurveyService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=default-src_app_core_data_remote_services_survey_service_ts-es2015.js.map