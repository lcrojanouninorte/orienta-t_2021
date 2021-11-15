/*! pace 1.0.2 */
/** @license FileSaver.js | Copyright (c) 2016 Eli Grey [https://github.com/eligrey/FileSaver.js] | MIT License [https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md] */
/**
   * @license
   * Copyright (c) 2016 Alexander Weidt,
   * https://github.com/BiggA94
   * 
   * Licensed under the MIT License. http://opensource.org/licenses/mit-license
/** @license
   * jsPDF addImage plugin
   * Copyright (c) 2012 Jason Siefken, https://github.com/siefkenj/
   *               2013 Chris Dowling, https://github.com/gingerchris
   *               2013 Trinh Ho, https://github.com/ineedfat
   *               2013 Edwin Alejandro Perez, https://github.com/eaparango
   *               2013 Norah Smith, https://github.com/burnburnrocket
   *               2014 Diego Casorran, https://github.com/diegocr
   *               2014 James Robb, https://github.com/jamesbrobb
   *
   * 
   */
/**
   * @license
   * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
e=ht.API,ht.API.events.push(["addPage",function(t){this.internal.getPageInfo(t.pageNumber).pageContext.annotations=[]}]),e.events.push(["putPage",function(t){for(var e=this.internal.getPageInfoByObjId(t.objId),i=t.pageContext.annotations,n=function(t){if(void 0!==t&&""!=t)return!0},r=!1,a=0;a<i.length&&!r;a++)switch((l=i[a]).type){case"link":if(n(l.options.url)||n(l.options.pageNumber)){r=!0;break}case"reference":case"text":case"freetext":r=!0}if(0!=r){this.internal.write("/Annots ["),this.internal.pageSize.height;var o=this.internal.getCoordinateString,s=this.internal.getVerticalCoordinateString;for(a=0;a<i.length;a++){var l;switch((l=i[a]).type){case"reference":this.internal.write(" "+l.object.objId+" 0 R ");break;case"text":var h=this.internal.newAdditionalObject(),c=this.internal.newAdditionalObject(),u=l.title||"Note";A="<</Type /Annot /Subtype /Text "+(f="/Rect ["+o(l.bounds.x)+" "+s(l.bounds.y+l.bounds.h)+" "+o(l.bounds.x+l.bounds.w)+" "+s(l.bounds.y)+"] ")+"/Contents ("+l.contents+")",A+=" /Popup "+c.objId+" 0 R",A+=" /P "+e.objId+" 0 R",A+=" /T ("+u+") >>",h.content=A;var d=h.objId+" 0 R";A="<</Type /Annot /Subtype /Popup "+(f="/Rect ["+o(l.bounds.x+30)+" "+s(l.bounds.y+l.bounds.h)+" "+o(l.bounds.x+l.bounds.w+30)+" "+s(l.bounds.y)+"] ")+" /Parent "+d,l.open&&(A+=" /Open true"),A+=" >>",c.content=A,this.internal.write(h.objId,"0 R",c.objId,"0 R");break;case"freetext":var f="/Rect ["+o(l.bounds.x)+" "+s(l.bounds.y)+" "+o(l.bounds.x+l.bounds.w)+" "+s(l.bounds.y+l.bounds.h)+"] ",p=l.color||"#000000";A="<</Type /Annot /Subtype /FreeText "+f+"/Contents ("+l.contents+")",A+=" /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#"+p+")",A+=" /Border [0 0 0]",A+=" >>",this.internal.write(A);break;case"link":if(l.options.name){var g=this.annotations._nameMap[l.options.name];l.options.pageNumber=g.page,l.options.top=g.y}else l.options.top||(l.options.top=0);f="/Rect ["+o(l.x)+" "+s(l.y)+" "+o(l.x+l.w)+" "+s(l.y+l.h)+"] ";var A="";if(l.options.url)A="<</Type /Annot /Subtype /Link "+f+"/Border [0 0 0] /A <</S /URI /URI ("+l.options.url+") >>";else if(l.options.pageNumber)switch(A="<</Type /Annot /Subtype /Link "+f+"/Border [0 0 0] /Dest ["+this.internal.getPageInfo(l.options.pageNumber).objId+" 0 R",l.options.magFactor=l.options.magFactor||"XYZ",l.options.magFactor){case"Fit":A+=" /Fit]";break;case"FitH":A+=" /FitH "+l.options.top+"]";break;case"FitV":l.options.left=l.options.left||0,A+=" /FitV "+l.options.left+"]";break;case"XYZ":default:var m=s(l.options.top);l.options.left=l.options.left||0,void 0===l.options.zoom&&(l.options.zoom=0),A+=" /XYZ "+l.options.left+" "+m+" "+l.options.zoom+"]"}""!=A&&(A+=" >>",this.internal.write(A))}}this.internal.write("]")}}]),e.createAnnotation=function(t){var e=this.internal.getCurrentPageInfo();switch(t.type){case"link":this.link(t.bounds.x,t.bounds.y,t.bounds.w,t.bounds.h,t);break;case"text":case"freetext":e.pageContext.annotations.push(t)}},e.link=function(t,e,i,n,r){this.internal.getCurrentPageInfo().pageContext.annotations.push({x:t,y:e,w:i,h:n,options:r,type:"link"})},e.textWithLink=function(t,e,i,n){var r=this.getTextWidth(t),a=this.internal.getLineHeight()/this.internal.scaleFactor;return this.text(t,e,i),i+=.2*a,this.link(e,i-a,r,a,n),r},e.getTextWidth=function(t){var e=this.internal.getFontSize();return this.getStringUnitWidth(t)*e/this.internal.scaleFactor},
/**
   * @license
   * Copyright (c) 2017 Aras Abbasi 
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
/**
   * @license
   * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
i=ht.API,(n=function(){var t=void 0;Object.defineProperty(this,"pdf",{get:function(){return t},set:function(e){t=e}});var e=150;Object.defineProperty(this,"width",{get:function(){return e},set:function(t){e=isNaN(t)||!1===Number.isInteger(t)||t<0?150:t,this.getContext("2d").pageWrapXEnabled&&(this.getContext("2d").pageWrapX=e+1)}});var i=300;Object.defineProperty(this,"height",{get:function(){return i},set:function(t){i=isNaN(t)||!1===Number.isInteger(t)||t<0?300:t,this.getContext("2d").pageWrapYEnabled&&(this.getContext("2d").pageWrapY=i+1)}});var n=[];Object.defineProperty(this,"childNodes",{get:function(){return n},set:function(t){n=t}});var r={};Object.defineProperty(this,"style",{get:function(){return r},set:function(t){r=t}}),Object.defineProperty(this,"parentNode",{get:function(){return!1}})}).prototype.getContext=function(t,e){var i;if("2d"!==(t=t||"2d"))return null;for(i in e)this.pdf.context2d.hasOwnProperty(i)&&(this.pdf.context2d[i]=e[i]);return(this.pdf.context2d._canvas=this).pdf.context2d},n.prototype.toDataURL=function(){throw new Error("toDataURL is not implemented.")},i.events.push(["initialized",function(){this.canvas=new n,this.canvas.pdf=this}]),
/** 
   * @license
   * ====================================================================
   * Copyright (c) 2013 Youssef Beddad, youssef.beddad@gmail.com
   *               2013 Eduardo Menezes de Morais, eduardo.morais@usp.br
   *               2013 Lee Driscoll, https://github.com/lsdriscoll
   *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
   *               2014 James Hall, james@parall.ax
   *               2014 Diego Casorran, https://github.com/diegocr
   *
   * 
   * ====================================================================
   */
/**
   * @license
   * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
/**
   * @license
   * 
   * Copyright (c) 2014 James Robb, https://github.com/jamesbrobb
   *
   * 
   * ====================================================================
   */
/**
   * @license
   * Copyright (c) 2017 Aras Abbasi 
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
/** @license
   * MIT license.
   * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
   *               2014 Diego Casorran, https://github.com/diegocr
   *
   * 
   * ====================================================================
/** @license
   jsPDF standard_fonts_metrics plugin
   * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
   * MIT license.
   * 