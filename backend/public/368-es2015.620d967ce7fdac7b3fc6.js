"use strict";(self.webpackChunkngx_admin=self.webpackChunkngx_admin||[]).push([[368],{44368:function(e,t,n){n.d(t,{_f:function(){return x},sv:function(){return y},bB:function(){return C},dt:function(){return f},Jj:function(){return h}});var i=n(37716);var r=n(38583),o=n(39075);function s(e,t){if(1&e){const e=i.\u0275\u0275getCurrentView();i.\u0275\u0275elementStart(0,"ngx-dropzone-remove-badge",1),i.\u0275\u0275listener("click",function(t){return i.\u0275\u0275restoreView(e),i.\u0275\u0275nextContext()._remove(t)}),i.\u0275\u0275elementEnd()}}const a=[[["ngx-dropzone-label"]]],l=["ngx-dropzone-label"],c=["fileInput"];function d(e,t){1&e&&i.\u0275\u0275projection(0,2,["*ngIf","!_hasPreviews"])}const p=[[["ngx-dropzone-preview"]],"*",[["ngx-dropzone-label"]]],u=["ngx-dropzone-preview","*","ngx-dropzone-label"];function g(e,t){if(1&e){const e=i.\u0275\u0275getCurrentView();i.\u0275\u0275elementStart(0,"ngx-dropzone-remove-badge",2),i.\u0275\u0275listener("click",function(t){return i.\u0275\u0275restoreView(e),i.\u0275\u0275nextContext()._remove(t)}),i.\u0275\u0275elementEnd()}}let h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=i.\u0275\u0275defineDirective({type:e,selectors:[["ngx-dropzone-label"]]}),e})();function m(e){return null!=e&&"false"!=`${e}`}const b={BACKSPACE:8,DELETE:46};b[b.BACKSPACE]="BACKSPACE",b[b.DELETE]="DELETE";let f=(()=>{class e{constructor(e){this.sanitizer=e,this._removable=!1,this.removed=new i.EventEmitter,this.tabIndex=0}get removable(){return this._removable}set removable(e){this._removable=m(e)}keyEvent(e){switch(e.keyCode){case b.BACKSPACE:case b.DELETE:this.remove()}}get hostStyle(){return this.sanitizer.bypassSecurityTrustStyle("\n\t\t\tdisplay: flex;\n\t\t\theight: 140px;\n\t\t\tmin-height: 140px;\n\t\t\tmin-width: 180px;\n\t\t\tmax-width: 180px;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\tpadding: 0 20px;\n\t\t\tmargin: 10px;\n\t\t\tborder-radius: 5px;\n\t\t\tposition: relative;\n\t\t")}_remove(e){e.stopPropagation(),this.remove()}remove(){this._removable&&this.removed.next(this.file)}readFile(){return function(e,t,n,i){return new(n||(n=Promise))(function(r,o){function s(e){try{l(i.next(e))}catch(t){o(t)}}function a(e){try{l(i.throw(e))}catch(t){o(t)}}function l(e){e.done?r(e.value):function(e){return e instanceof n?e:new n(function(t){t(e)})}(e.value).then(s,a)}l((i=i.apply(e,t||[])).next())})}(this,void 0,void 0,function*(){return new Promise((e,t)=>{const n=new FileReader;if(n.onload=t=>{e(t.target.result)},n.onerror=e=>{console.error(`FileReader failed on file ${this.file.name}.`),t(e)},!this.file)return t("No file to read. Please provide a file using the [file] Input property.");n.readAsDataURL(this.file)})})}}return e.\u0275fac=function(t){return new(t||e)(i.\u0275\u0275directiveInject(o.DomSanitizer))},e.\u0275cmp=i.\u0275\u0275defineComponent({type:e,selectors:[["ngx-dropzone-preview"]],hostVars:3,hostBindings:function(e,t){1&e&&i.\u0275\u0275listener("keyup",function(e){return t.keyEvent(e)}),2&e&&(i.\u0275\u0275hostProperty("tabindex",t.tabIndex),i.\u0275\u0275styleMap(t.hostStyle))},inputs:{removable:"removable",file:"file"},outputs:{removed:"removed"},ngContentSelectors:l,decls:2,vars:1,consts:[[3,"click",4,"ngIf"],[3,"click"]],template:function(e,t){1&e&&(i.\u0275\u0275projectionDef(a),i.\u0275\u0275projection(0),i.\u0275\u0275template(1,s,1,0,"ngx-dropzone-remove-badge",0)),2&e&&(i.\u0275\u0275advance(1),i.\u0275\u0275property("ngIf",t.removable))},directives:function(){return[r.NgIf,I]},styles:["[_nghost-%COMP%]{background-image:linear-gradient(to top,#ededed,#efefef,#f1f1f1,#f4f4f4,#f6f6f6)}[_nghost-%COMP%]:focus, [_nghost-%COMP%]:hover{background-image:linear-gradient(to top,#e3e3e3,#ebeaea,#e8e7e7,#ebeaea,#f4f4f4);outline:0}[_nghost-%COMP%]:focus   ngx-dropzone-remove-badge[_ngcontent-%COMP%], [_nghost-%COMP%]:hover   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]     ngx-dropzone-label{overflow-wrap:break-word}"]}),e})(),v=(()=>{class e{parseFileList(e,t,n,i){const r=[],o=[];for(let s=0;s<e.length;s++){const a=e.item(s);this.isAccepted(a,t)?n&&a.size>n?this.rejectFile(o,a,"size"):!i&&r.length>=1?this.rejectFile(o,a,"no_multiple"):r.push(a):this.rejectFile(o,a,"type")}return{addedFiles:r,rejectedFiles:o}}isAccepted(e,t){if("*"===t)return!0;const n=t.split(",").map(e=>e.toLowerCase().trim()),i=e.type.toLowerCase(),r=e.name.toLowerCase();return!!n.find(e=>e.endsWith("/*")?i.split("/")[0]===e.split("/")[0]:e.startsWith(".")?r.endsWith(e):e==i)}rejectFile(e,t,n){const i=t;i.reason=n,e.push(i)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=i.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e})(),x=(()=>{class e{constructor(e){this.service=e,this.change=new i.EventEmitter,this.accept="*",this._disabled=!1,this._multiple=!0,this._maxFileSize=void 0,this._expandable=!1,this._disableClick=!1,this._isHovered=!1}get _hasPreviews(){return!!this._previewChildren.length}get disabled(){return this._disabled}set disabled(e){this._disabled=m(e),this._isHovered&&(this._isHovered=!1)}get multiple(){return this._multiple}set multiple(e){this._multiple=m(e)}get maxFileSize(){return this._maxFileSize}set maxFileSize(e){this._maxFileSize=function(e){return isNaN(parseFloat(e))||isNaN(Number(e))?null:Number(e)}(e)}get expandable(){return this._expandable}set expandable(e){this._expandable=m(e)}get disableClick(){return this._disableClick}set disableClick(e){this._disableClick=m(e)}_onClick(){this.disableClick||this.showFileSelector()}_onDragOver(e){this.disabled||(this.preventDefault(e),this._isHovered=!0)}_onDragLeave(){this._isHovered=!1}_onDrop(e){this.disabled||(this.preventDefault(e),this._isHovered=!1,this.handleFileDrop(e.dataTransfer.files))}showFileSelector(){this.disabled||this._fileInput.nativeElement.click()}_onFilesSelected(e){this.handleFileDrop(e.target.files),this._fileInput.nativeElement.value="",this.preventDefault(e)}handleFileDrop(e){const t=this.service.parseFileList(e,this.accept,this.maxFileSize,this.multiple);this.change.next({addedFiles:t.addedFiles,rejectedFiles:t.rejectedFiles,source:this})}preventDefault(e){e.preventDefault(),e.stopPropagation()}}return e.\u0275fac=function(t){return new(t||e)(i.\u0275\u0275directiveInject(v,2))},e.\u0275cmp=i.\u0275\u0275defineComponent({type:e,selectors:[["ngx-dropzone"],["","ngx-dropzone",""]],contentQueries:function(e,t,n){if(1&e&&i.\u0275\u0275contentQuery(n,f,5),2&e){let e;i.\u0275\u0275queryRefresh(e=i.\u0275\u0275loadQuery())&&(t._previewChildren=e)}},viewQuery:function(e,t){if(1&e&&i.\u0275\u0275viewQuery(c,5),2&e){let e;i.\u0275\u0275queryRefresh(e=i.\u0275\u0275loadQuery())&&(t._fileInput=e.first)}},hostVars:8,hostBindings:function(e,t){1&e&&i.\u0275\u0275listener("click",function(){return t._onClick()})("dragover",function(e){return t._onDragOver(e)})("dragleave",function(){return t._onDragLeave()})("drop",function(e){return t._onDrop(e)}),2&e&&i.\u0275\u0275classProp("ngx-dz-hovered",t._isHovered)("ngx-dz-disabled",t.disabled)("expandable",t.expandable)("unclickable",t.disableClick)},inputs:{accept:"accept",disabled:"disabled",multiple:"multiple",maxFileSize:"maxFileSize",expandable:"expandable",disableClick:"disableClick",id:"id",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedBy:["aria-describedby","ariaDescribedBy"]},outputs:{change:"change"},features:[i.\u0275\u0275ProvidersFeature([v])],ngContentSelectors:u,decls:5,vars:8,consts:[["type","file",3,"id","multiple","accept","disabled","change"],["fileInput",""],[4,"ngIf"]],template:function(e,t){1&e&&(i.\u0275\u0275projectionDef(p),i.\u0275\u0275elementStart(0,"input",0,1),i.\u0275\u0275listener("change",function(e){return t._onFilesSelected(e)}),i.\u0275\u0275elementEnd(),i.\u0275\u0275template(2,d,1,0,"ng-content",2),i.\u0275\u0275projection(3),i.\u0275\u0275projection(4,1)),2&e&&(i.\u0275\u0275property("id",t.id)("multiple",t.multiple)("accept",t.accept)("disabled",t.disabled),i.\u0275\u0275attribute("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledby)("aria-describedby",t.ariaDescribedBy),i.\u0275\u0275advance(2),i.\u0275\u0275property("ngIf",!t._hasPreviews))},directives:[r.NgIf],styles:["[_nghost-%COMP%]{display:flex;align-items:center;height:180px;background:#fff;cursor:pointer;color:#717386;border:2px dashed #717386;border-radius:5px;font-size:16px;overflow-x:auto}.ngx-dz-hovered[_nghost-%COMP%]{border-style:solid}.ngx-dz-disabled[_nghost-%COMP%]{opacity:.5;cursor:no-drop;pointer-events:none}.expandable[_nghost-%COMP%]{overflow:hidden;height:unset;min-height:180px;flex-wrap:wrap}.unclickable[_nghost-%COMP%]{cursor:default}[_nghost-%COMP%]     ngx-dropzone-label{text-align:center;z-index:10;margin:10px auto}[_nghost-%COMP%]   input[_ngcontent-%COMP%]{width:.1px;height:.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1}[_nghost-%COMP%]   input[_ngcontent-%COMP%]:focus +   ngx-dropzone-label{outline:#000 dotted 1px;outline:-webkit-focus-ring-color auto 5px}"]}),e})(),y=(()=>{class e extends f{constructor(e){super(e),this.defualtImgLoading="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDIsIDI0Mykgbm9uZSByZXBlYXQgc2Nyb2xsIDAlIDAlOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgd2lkdGg9IjIyNHB4IiBoZWlnaHQ9IjIyNHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIxNCIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2U9IiM4NWEyYjYiIHN0cm9rZS1kYXNoYXJyYXk9IjIxLjk5MTE0ODU3NTEyODU1MiAyMS45OTExNDg1NzUxMjg1NTIiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGR1cj0iMS4xNjI3OTA2OTc2NzQ0MTg0cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVRpbWVzPSIwOzEiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+CjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZT0iI2JiY2VkZCIgc3Ryb2tlLWRhc2hhcnJheT0iMTUuNzA3OTYzMjY3OTQ4OTY2IDE1LjcwNzk2MzI2Nzk0ODk2NiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjE1LjcwNzk2MzI2Nzk0ODk2NiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZHVyPSIxLjE2Mjc5MDY5NzY3NDQxODRzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MSIgdmFsdWVzPSIwIDUwIDUwOy0zNjAgNTAgNTAiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+CjwhLS0gW2xkaW9dIGdlbmVyYXRlZCBieSBodHRwczovL2xvYWRpbmcuaW8vIC0tPjwvc3ZnPg==",this.imageSrc=this.sanitizer.bypassSecurityTrustUrl(this.defualtImgLoading)}ngOnInit(){this.readFile().then(e=>setTimeout(()=>this.imageSrc=e)).catch(e=>console.error(e))}}return e.\u0275fac=function(t){return new(t||e)(i.\u0275\u0275directiveInject(o.DomSanitizer))},e.\u0275cmp=i.\u0275\u0275defineComponent({type:e,selectors:[["ngx-dropzone-image-preview"]],features:[i.\u0275\u0275ProvidersFeature([{provide:f,useExisting:e}]),i.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:l,decls:3,vars:2,consts:[[3,"src"],[3,"click",4,"ngIf"],[3,"click"]],template:function(e,t){1&e&&(i.\u0275\u0275projectionDef(a),i.\u0275\u0275element(0,"img",0),i.\u0275\u0275projection(1),i.\u0275\u0275template(2,g,1,0,"ngx-dropzone-remove-badge",1)),2&e&&(i.\u0275\u0275property("src",t.imageSrc,i.\u0275\u0275sanitizeUrl),i.\u0275\u0275advance(2),i.\u0275\u0275property("ngIf",t.removable))},directives:function(){return[r.NgIf,I]},styles:["[_nghost-%COMP%]{min-width:unset!important;max-width:unset!important;padding:0!important}[_nghost-%COMP%]:focus   img[_ngcontent-%COMP%], [_nghost-%COMP%]:hover   img[_ngcontent-%COMP%]{opacity:.7}[_nghost-%COMP%]:focus   ngx-dropzone-remove-badge[_ngcontent-%COMP%], [_nghost-%COMP%]:hover   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{max-height:100%;border-radius:5px;opacity:.8}[_nghost-%COMP%]     ngx-dropzone-label{position:absolute;overflow-wrap:break-word}"]}),e})(),I=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.\u0275\u0275defineComponent({type:e,selectors:[["ngx-dropzone-remove-badge"]],decls:3,vars:0,consts:[["x1","0","y1","0","x2","10","y2","10"],["x1","0","y1","10","x2","10","y2","0"]],template:function(e,t){1&e&&(i.\u0275\u0275namespaceSVG(),i.\u0275\u0275elementStart(0,"svg"),i.\u0275\u0275element(1,"line",0),i.\u0275\u0275element(2,"line",1),i.\u0275\u0275elementEnd())},styles:["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;height:22px;width:22px;position:absolute;top:5px;right:5px;border-radius:50%;background:#bbb;color:#333;cursor:pointer}[_nghost-%COMP%]:hover{background:#aeaeae}[_nghost-%COMP%] > svg[_ngcontent-%COMP%]{height:10px;width:10px}[_nghost-%COMP%] > svg[_ngcontent-%COMP%] > line[_ngcontent-%COMP%]{stroke-width:2px;stroke:#fff}"]}),e})(),C=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=i.\u0275\u0275defineInjector({imports:[[r.CommonModule]]}),e})()}}]);