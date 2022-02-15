!function(){"use strict";function t(e,n){return(t=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(e,n)}function e(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var r,o=i(t);if(e){var u=i(this).constructor;r=Reflect.construct(o,arguments,u)}else r=o.apply(this,arguments);return n(this,r)}}function n(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function u(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}(self.webpackChunkngx_admin=self.webpackChunkngx_admin||[]).push([[592],{28788:function(n,i,o){o.d(i,{F:function(){return q}});var s=o(3679),a=o(17102),c=o(68307),l=o(5304),d=o(88002),h=function(){function t(){r(this,t)}return u(t,[{key:"deserialize",value:function(t){return Object.assign(this,t),this}}]),t}(),p=function(){function t(){r(this,t)}return u(t,[{key:"deserialize",value:function(t){return t.name=t.first_name+" "+t.last_name,Object.assign(this,t),this}}]),t}(),f=function(){function t(){r(this,t)}return u(t,[{key:"deserialize",value:function(t){return Object.assign(this,t),this.surveyeds&&t.surveyeds.map(function(t){return(new p).deserialize(t)}),this}}]),t}(),v=function(){function t(){r(this,t)}return u(t,[{key:"deserialize",value:function(t){return Object.assign(this,t),this}}]),t}(),g=function(){function t(){r(this,t)}return u(t,[{key:"deserialize",value:function(t){return Object.assign(this,t),this.onets&&t.onets.map(function(t){return(new v).deserialize(t)}),this}}]),t}(),y=function(){function t(){r(this,t)}return u(t,[{key:"deserialize",value:function(t){return Object.assign(this,t),this.pps&&(new g).deserialize(t.pps),this}}]),t}(),m=function(){function t(){r(this,t)}return u(t,[{key:"deserialize",value:function(t){return Object.assign(this,t),t.checked=1==t.checked||"1"==t.checked,this}}]),t}(),b=function(){function t(){r(this,t)}return u(t,[{key:"deserialize",value:function(t){return Object.assign(this,t),this.question&&t.question.map(function(t){return(new _).deserialize(t)}),this}}]),t}(),k=function(){function t(){r(this,t)}return u(t,[{key:"deserialize",value:function(t){return Object.assign(this,t),this}}]),t}(),_=function(){function t(){r(this,t)}return u(t,[{key:"deserialize",value:function(t){return t.validators=new Array,t.required&&t.validators.push(s.kI.required),t.isEmail&&t.validators.push(s.kI.email),t.show=!0,this.conditions&&t.options.map(function(t){return(new b).deserialize(t)}),this.answers&&t.answers.map(function(t){return(new m).deserialize(t)}),this.checked=1==t.checked||"1"==t.checked,this.options&&t.options.map(function(t){return(new k).deserialize(t)}),this}}]),t}(),w=function(){function t(){r(this,t)}return u(t,[{key:"deserialize",value:function(t){var e=this;Object.assign(this,t);var n=new Array;return this.questions&&t.questions.map(function(t){(new _).deserialize(t)}),this.questions.map(function(t){t.conditions.map(function(t){n.push(t)})}),n.map(function(t){e.questions.map(function(e,n){t.restriction_id==e.id&&(t.question_index=n)})}),this}}]),t}(),O=function(){function t(){r(this,t)}return u(t,[{key:"deserialize",value:function(t){return Object.assign(this,t),this.surveyed&&(new p).deserialize(t.surveyed),this}}]),t}(),S=o(39205),E=o(37716),z=o(12426),P=o(94720),j=function(t){return"populations/".concat(t)},q=function(){var n=function(n){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&t(e,n)}(o,n);var i=e(o);function o(t,e){var n;return r(this,o),(n=i.call(this,e))._http=t,n._nbService=e,n}return u(o,[{key:"getAllSections",value:function(){var t=this;return this._http.get("sections").pipe((0,c.b)(function(e){return t.log("Fetched Sections")}),(0,l.K)(this.handleError("getAll",[])),(0,d.U)(function(t){return t.map(function(t){return(new w).deserialize(t)})}))}},{key:"getSingleSection",value:function(t,e){return this._http.get(function(t,e){return"sections/".concat(t,"/").concat(e)}(e,t)).pipe((0,d.U)(function(t){return(new w).deserialize(t)}))}},{key:"getAllQuestions",value:function(){var t=this;return this._http.get("questions").pipe((0,c.b)(function(e){return t.log("Fetched Questions")}),(0,l.K)(this.handleError("getAll",[])),(0,d.U)(function(t){return t.map(function(t){return(new _).deserialize(t)})}))}},{key:"updateQuestion",value:function(t){var e,n=this;return this._http.put((e=t.id,"questions/".concat(e)),t).pipe((0,c.b)(function(e){return n.log("Updated role id=".concat(t.id))}),(0,l.K)(this.handleError("updateQuestion")))}},{key:"addOption",value:function(t){var e=this;return this._http.post("options",t).pipe((0,c.b)(function(n){return e.log("Add Option id=".concat(t.id))}),(0,l.K)(this.handleError("addOption")))}},{key:"deleteOption",value:function(t){var e,n=this;return this._http.delete((e=t.id,"options/".concat(e))).pipe((0,c.b)(function(e){return n.log("Deleted Option id=".concat(t.id))}),(0,l.K)(this.handleError("deleteOption")))}},{key:"addOrUpdateSurvey",value:function(t){var e=this;return this._http.postFormData("surveys",t,{reportProgress:!0,observe:"events"}).pipe((0,c.b)(function(t){return e.log("create Survey ")}),(0,l.K)(this.handleError("Survey")))}},{key:"createOrGetSurvey",value:function(t){var e=this;return this._http.postFormData("surveys/gateway",t,{reportProgress:!0,observe:"events"}).pipe((0,c.b)(function(t){return e.log("create Survey ")}),(0,l.K)(this.handleError("Survey")))}},{key:"getSingleUser",value:function(t){return this._http.get((e=t,"users/".concat(e))).pipe((0,l.K)(this.handleError("getSingle",[])),(0,d.U)(function(t){return(new S.n).deserialize(t)}));var e}},{key:"getSurveys",value:function(t){var e,n=this;return this._http.get((e=t,"surveys/".concat(e))).pipe((0,c.b)(function(t){return n.log("Fetched Surveys")}),(0,l.K)(this.handleError("getAll",[])),(0,d.U)(function(t){return t.map(function(t){return(new O).deserialize(t)})}))}},{key:"getSurvey",value:function(t){var e,n=this;return this._http.get((e=t,"surveys/uuid/".concat(e))).pipe((0,c.b)(function(t){return n.log("Fetched Surveys")}),(0,l.K)(this.handleError("getAll",[])),(0,d.U)(function(t){return(new O).deserialize(t)}))}},{key:"getPpsRank",value:function(t){var e,n=this;return this._http.get((e=t,"pps/".concat(e))).pipe((0,c.b)(function(t){return n.log("Fetched Pps")}),(0,l.K)(this.handleError("getAll",[])),(0,d.U)(function(t){return t.map(function(t){return(new y).deserialize(t)})}))}},{key:"getOccupationByTitle",value:function(t){var e,n=this;return this._http.get((e=t,"occupation/".concat(e))).pipe((0,c.b)(function(t){return n.log("Fetched getOccupations")}),(0,l.K)(this.handleError("getAll",[])),(0,d.U)(function(t){return(new h).deserialize(t)}))}},{key:"getOccupationsBylevel",value:function(t,e){var n=this;return this._http.get(function(t,e){return"occupations/".concat(t,"/").concat(e)}(t,e)).pipe((0,c.b)(function(t){return n.log("Fetched getOccupations")}),(0,l.K)(this.handleError("getAll",[])),(0,d.U)(function(t){return t.map(function(t){return(new h).deserialize(t)})}))}},{key:"getPopulations",value:function(){var t=this;return this._http.get("populations").pipe((0,c.b)(function(e){return t.log("Fetched Population")}),(0,l.K)(this.handleError("Population",[])),(0,d.U)(function(t){return t.map(function(t){return(new f).deserialize(t)})}))}},{key:"addPopulation",value:function(t){var e=this;return this._http.postFormData("populations",t,{reportProgress:!0,observe:"events"}).pipe((0,c.b)(function(t){return e.log("create Population ")}),(0,l.K)(this.handleError("Population")))}},{key:"getPopulation",value:function(t){var e=this;return this._http.get(j(t)).pipe((0,c.b)(function(t){return e.log("Fetched Population")}),(0,l.K)(this.handleError("getAll",[])),(0,d.U)(function(t){return(new f).deserialize(t)}))}},{key:"delPopulations",value:function(t){var e=this,n=j(t.id+"");return this._http.delete(n).pipe((0,c.b)(function(n){return e.log("deleted Population id=".concat(t.id))}),(0,l.K)(this.handleError("deletePopulation")))}},{key:"activePopulations",value:function(t){var e,n=this,i=(e=t.id+"","populations/activate/".concat(e));return this._http.post(i).pipe((0,c.b)(function(t){return n.log("Fetched Population")}),(0,l.K)(this.handleError("Population",[])),(0,d.U)(function(t){return t.map(function(t){return(new f).deserialize(t)})}))}},{key:"addSurveyed",value:function(t){var e=this;return this._http.post("surveyeds",t).pipe((0,c.b)(function(n){return e.log("Add Surveyed id=".concat(t.id))}),(0,l.K)(this.handleError("addSurveyedn")),(0,d.U)(function(t){return(new p).deserialize(t)}))}},{key:"deleteSurveyed",value:function(t){var e,n=this,i=(e=t.id+"","surveyeds/".concat(e));return this._http.delete(i).pipe((0,c.b)(function(e){return n.log("deleted Surveyed id=".concat(t.id))}),(0,l.K)(this.handleError("deletePopulation")))}},{key:"deleteSurvey",value:function(t){var e,n=this,i=(e=t.id+"","surveys/".concat(e));return this._http.delete(i).pipe((0,c.b)(function(e){return n.log("deleted Survey id=".concat(t.id))}),(0,l.K)(this.handleError("deletePopulation")))}},{key:"setTableData",value:function(t,e){var n=this;return this._http.postFormData(t,e,{reportProgress:!0,observe:"events"}).pipe((0,c.b)(function(t){return n.log("create Survey ")}))}},{key:"getTableData",value:function(t){var e=this;return this._http.get(t).pipe((0,c.b)(function(t){return e.log("Fetched tableRoute")}),(0,l.K)(this.handleError("tableRoute",[])))}},{key:"sendOccupationMail",value:function(t){var e=this;return this._http.post("occupations/mail",{occupation_title:t}).pipe((0,c.b)(function(t){return e.log("Send Mail")}),(0,l.K)(this.handleError("Sen Mail")))}},{key:"eval_conditions",value:function(t,e,n,i){t.questions.map(function(t){t.conditions.length>0&&t.conditions.forEach(function(t){t.value.split(",").includes(n+"")?(e.get(t.question.label).setValidators(null),e.get(t.question.label).updateValueAndValidity(),i.questions?i.questions[t.question_index].show=!1:i[t.question_index].show=!1):(e.get(t.question.label).setValidators(s.kI.required),e.get(t.question.label).updateValueAndValidity(),e.get(t.question.label).enable(),i.questions?i.questions[t.question_index].show=!0:i[t.question_index].show=!0)})})}}]),o}(a.b);return n.\u0275fac=function(t){return new(t||n)(E.\u0275\u0275inject(z.s),E.\u0275\u0275inject(P.quB))},n.\u0275prov=E.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"}),n}()},61936:function(t,e,n){n.d(e,{D:function(){return o}});var i=n(37716),o=function(){var t=function(){function t(e){r(this,t),this.ngZone=e,this.assets={"logo-orienta-t":"assets/lottie/logo-orienta-t.json","landing-orienta-t":"assets/lottie/landing-orienta-t.json","login-orienta-t":"assets/lottie/login-orienta-t.json","start-orienta-t":"assets/lottie/start-orienta-t.json","results-orienta-t":"assets/lottie/results-orienta-t.json"}}return u(t,[{key:"getOptions",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.path=this.assets[t],e}},{key:"animationCreated",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.animationItem=t,n.speed&&this.animationItem.setSpeed(n.speed),n.playSegments&&this.ngZone.runOutsideAngular(function(){return e.animationItem.playSegments(n.playSegments)})}},{key:"stop",value:function(t){var e=this;this.ngZone.runOutsideAngular(function(){return e.animationItem.stop()})}},{key:"opened",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.ngZone.runOutsideAngular(function(){return e.animationItem.playSegments(n.playSegments)})}},{key:"closed",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.ngZone.runOutsideAngular(function(){return e.animationItem.playSegments(n.playSegments)})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(i.\u0275\u0275inject(i.NgZone))},t.\u0275prov=i.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},29223:function(t,e,n){n.r(e),n.d(e,{NotFoundComponent:function(){return a}});var i=n(37716),o=n(43424),s=n(94720),a=function(){var t=function(){function t(e){r(this,t),this.router=e}return u(t,[{key:"ngOnInit",value:function(){}},{key:"goToHome",value:function(){this.router.navigate(["/"])}}]),t}();return t.\u0275fac=function(e){return new(e||t)(i.\u0275\u0275directiveInject(o.F0))},t.\u0275cmp=i.\u0275\u0275defineComponent({type:t,selectors:[["ngx-not-found"]],decls:11,vars:0,consts:[[1,"row"],[1,"col-md-12"],[1,"flex-centered","col-xl-4","col-lg-6","col-md-8","col-sm-12"],[1,"title"],[1,"sub-title"],["nbButton","","fullWidth","","type","button",1,"home-button",3,"click"]],template:function(t,e){1&t&&(i.\u0275\u0275elementStart(0,"div",0),i.\u0275\u0275elementStart(1,"div",1),i.\u0275\u0275elementStart(2,"nb-card"),i.\u0275\u0275elementStart(3,"nb-card-body"),i.\u0275\u0275elementStart(4,"div",2),i.\u0275\u0275elementStart(5,"h2",3),i.\u0275\u0275text(6,"404 "),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementStart(7,"small",4),i.\u0275\u0275text(8,"Hola! La pagina que estas buscando no existe!"),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementStart(9,"button",5),i.\u0275\u0275listener("click",function(){return e.goToHome()}),i.\u0275\u0275text(10," Volver al Inicio! "),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementEnd())},directives:[s.Asz,s.yKW,s.DPz],styles:[".flex-centered[_ngcontent-%COMP%]{margin:auto}nb-card-body[_ngcontent-%COMP%]{display:flex}.title[_ngcontent-%COMP%]{text-align:center}.sub-title[_ngcontent-%COMP%]{text-align:center;display:block;margin-bottom:3rem}.home-button[_ngcontent-%COMP%]{margin-bottom:2rem}"]}),t}()}}])}();