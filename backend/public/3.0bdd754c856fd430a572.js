(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{FuD7:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o=[{title:"ONU MUJERES",group:!0},{title:"Dashboard",icon:"globe-2-outline",link:"/",home:!0},{title:"Configuraci\xf3n",icon:"settings-outline",data:{permission:"Register Admin"},children:[{title:"Control de Usuarios",icon:"people-outline",hidden:!1,children:[{title:"Usuarios",link:"/config/users"},{title:"Registrar Usuarios",link:"/config/users/add"}]}]}]},Vxv7:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var o=n("fXoL"),i=n("lWTH"),r=function(){function e(e){this.accessChecker=e,this.getSubMenuItem=function(e){if(e)for(var t=function(t){e[t].data&&n.accessChecker.isGranted(e[t].data.permission,"all").subscribe(function(n){e[t].hidden=!n}),n.getSubMenuItem(e[t].children)},n=this,o=0;o<e.length;o++)t(o)}}return e.prototype.setMenuItemVisibility=function(e){this.getSubMenuItem(e)},e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](i.a))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},dgmN:function(e,t,n){"use strict";n.r(t),n.d(t,"PagesModule",function(){return m});var o=n("aceb"),i=n("vTDv"),r=n("tyNb"),a=n("FuD7"),u=n("Vxv7"),s=n("fXoL"),c=n("lWTH"),l=n("mgFL"),d=[{path:"",component:function(){function e(e,t){this.accessChecker=e,this.menuService=t,this.menu=a.a,t.setMenuItemVisibility(this.menu)}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](c.a),s["\u0275\u0275directiveInject"](u.a))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-pages"]],decls:3,vars:1,consts:[[3,"items"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"ngx-one-column-layout"),s["\u0275\u0275element"](1,"nb-menu",0),s["\u0275\u0275element"](2,"router-outlet"),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("items",t.menu))},directives:[l.a,o.Z,r.i],styles:[".nb-theme-default   [_nghost-%COMP%]     router-outlet+*{display:block;-webkit-animation:fade 1s;animation:fade 1s}@-webkit-keyframes fade{0%{opacity:0}to{opacity:1}}.nb-theme-corporate   [_nghost-%COMP%]     router-outlet+*, .nb-theme-cosmic   [_nghost-%COMP%]     router-outlet+*, .nb-theme-dark   [_nghost-%COMP%]     router-outlet+*, .nb-theme-material-dark   [_nghost-%COMP%]     router-outlet+*, .nb-theme-material-light   [_nghost-%COMP%]     router-outlet+*, .nb-theme-obsrio   [_nghost-%COMP%]     router-outlet+*{display:block;-webkit-animation:fade 1s;animation:fade 1s}@keyframes fade{0%{opacity:0}to{opacity:1}}"]}),e}(),children:[{path:"dashboard",loadChildren:function(){return Promise.all([n.e(1),n.e(9)]).then(n.bind(null,"/2RN")).then(function(e){return e.DashboardModule})},data:{preload:!1,delay:1e3}},{path:"roles",loadChildren:function(){return Promise.all([n.e(1),n.e(4),n.e(10)]).then(n.bind(null,"eDec")).then(function(e){return e.RolesModule})},data:{preload:!1,delay:16e3}},{path:"users",loadChildren:function(){return Promise.all([n.e(1),n.e(4)]).then(n.bind(null,"+P1L")).then(function(e){return e.UsersModule})},data:{preload:!1,delay:16e3}},{path:"",redirectTo:"dashboard",pathMatch:"full"}]}],f=function(){function e(){}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.h.forChild(d)],r.h]}),e}(),h=n("m3o8"),m=function(){function e(){}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[f,i.a,o.ab,h.LightboxModule]]}),e}()}}]);