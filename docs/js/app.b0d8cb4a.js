(function(t){function e(e){for(var i,s,o=e[0],l=e[1],u=e[2],d=0,m=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&m.push(n[s][0]),n[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);c&&c(e);while(m.length)m.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},n={app:0},r=[];function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/crow/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"034f":function(t,e,a){"use strict";var i=a("85ec"),n=a.n(i);n.a},"0e39":function(t,e,a){"use strict";var i=a("23e9"),n=a.n(i);n.a},"23e9":function(t,e,a){},4678:function(t,e,a){var i={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=r(t);return a(e)}function r(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=r,t.exports=n,n.id="4678"},"85ec":function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("0cdd");var i=a("2b0e"),n=a("5f5b");a("ab8b"),a("2dd8");i["default"].use(n["a"]);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("b-navbar",{attrs:{type:"light",variant:"light",toggleable:"lg"}},[a("b-container",[a("b-navbar-brand",[t._v("CROW")])],1)],1),a("main",[a("router-view")],1),a("footer",[a("b-container",[a("b-row",[a("b-col",{attrs:{lg:""}},[t._v(" Created by the "),a("a",{attrs:{href:"https://oscibio.inbo.be"}},[t._v("Open science lab for biodiversity")])]),a("b-col",{staticClass:"text-right",attrs:{lg:""}},[a("a",{attrs:{href:"https://github.com/inbo/crow/"}},[t._v("Source code")]),t._v(" version "),a("code",[a("a",{attrs:{href:"https://github.com/inbo/crow/tree/"+t.commitHash()}},[t._v(t._s(t.commitHash()))])])])],1)],1)],1)],1)},s=[],o=a("8c4f"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"content"},[a("b-form",{attrs:{form:""},on:{change:t.onFormChange}},[a("b-row",[a("b-col",{attrs:{lg:""}},[a("b-row",[a("b-col",{attrs:{sm:""}},[a("b-form-group",{attrs:{id:"input-radar-group",label:"Radar:","label-for":"input-radar"}},[a("b-form-select",{attrs:{id:"input-radar",size:"sm",options:t.availableRadars},model:{value:t.selectedRadarValue,callback:function(e){t.selectedRadarValue=e},expression:"selectedRadarValue"}}),a("b-form-text",[t._v(" "+t._s(t.selectedRadarLocation)+" is located at "),a("a",{attrs:{href:"http://www.openstreetmap.org/?mlat="+t.selectedRadarLatitude+"&mlon="+t.selectedRadarLongitude+"&zoom=12",target:"_blank"}},[t._v(t._s(t.selectedRadarLatitude)+", "+t._s(t.selectedRadarLongitude))]),t._v(". ")])],1)],1),a("b-col",{attrs:{sm:""}},[a("b-form-group",{attrs:{id:"input-date-group",label:"Date:","label-for":"input-date",description:"Charts will be centered on noon for selected date."}},[a("b-input-group",{attrs:{size:"sm"}},[a("b-input-group-prepend",[a("b-button",{attrs:{variant:"outline-secondary"},on:{click:t.decrementPeriod}},[t._v(" -"+t._s(t.selectedIntervalLabel)+" ")])],1),a("b-form-input",{attrs:{id:"input-date",type:"date",placeholder:"Type a date..."},model:{value:t.selectedDate,callback:function(e){t.selectedDate=e},expression:"selectedDate"}}),a("b-input-group-append",[a("b-button",{attrs:{variant:"outline-secondary"},on:{click:t.incrementPeriod}},[t._v(" +"+t._s(t.selectedIntervalLabel)+" ")])],1)],1)],1)],1)],1)],1),a("b-col",{attrs:{lg:""}},[a("b-row",[a("b-col",{attrs:{cols:"6",sm:"3"}},[a("b-form-group",{attrs:{id:"input-interval-group",label:"Interval:","label-for":"input-interval"}},[a("b-form-radio-group",{attrs:{id:"input-interval",size:"sm",buttons:"","button-variant":"outline-secondary",options:t.availableIntervals},model:{value:t.selectedIntervalInHours,callback:function(e){t.selectedIntervalInHours=e},expression:"selectedIntervalInHours"}})],1)],1),a("b-col",{attrs:{cols:"6",sm:"3"}},[a("b-form-group",{attrs:{id:"input-timezone-group",label:"Time zone:","label-for":"input-timezone"}},[a("b-form-radio-group",{attrs:{id:"input-timezone",size:"sm",buttons:"","button-variant":"outline-secondary"},model:{value:t.timeDisplayedAs,callback:function(e){t.timeDisplayedAs=e},expression:"timeDisplayedAs"}},[a("b-form-radio",{attrs:{value:"radarLocal"}},[t._v(" Radar ")]),a("b-form-radio",{attrs:{value:"UTC"}},[t._v(" UTC ")])],1)],1)],1)],1)],1)],1)],1),a("b-row",{attrs:{"align-h":"end"}},[a("b-col",{attrs:{cols:"2","align-self":"end"}},[a("small",[a("router-link",{attrs:{to:{path:"/",query:{radar:t.selectedRadarValue}}},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.href;return[a("b-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.baseUrl+"/"+t.publicPath+i,expression:"`${baseUrl}/${publicPath}${href}`",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopyUrl,expression:"onCopyUrl",arg:"success"}],attrs:{variant:"outline-primary",size:"sm"}},[t._v(" "+t._s(t.copyUrlButtonText)+" ")])]}}])})],1)])],1),t.showCharts?a("div",[a("b-row",[a("b-col",[a("v-p-chart",{attrs:{"vtps-data":t.radarVtpsAsArray,"show-time-as":t.timeZoneToShow,"style-config":t.VPChartStyle},scopedSlots:t._u([{key:"title",fn:function(){return[a("h3",[t._v("VP Chart")])]},proxy:!0},{key:"in-x-axis-group",fn:function(){return[a("timeline-chart",{attrs:{periods:t.timePeriods,"style-config":t.TimelineChartStyle,"show-time-as":t.timeZoneToShow}})]},proxy:!0}],null,!1,1913302480)})],1)],1),a("b-row",[a("b-col",[a("v-p-i-chart",{attrs:{"vpi-data":t.integratedProfiles,"style-config":t.VPIChartStyle,"show-time-as":t.timeZoneToShow,"data-temporal-resolution":t.dataTemporalResolution},scopedSlots:t._u([{key:"title",fn:function(){return[a("h3",[t._v("VPI Chart")])]},proxy:!0},{key:"in-x-axis-group",fn:function(){return[a("timeline-chart",{attrs:{periods:t.timePeriods,"style-config":t.TimelineChartStyle,"show-time-as":t.timeZoneToShow}})]},proxy:!0}],null,!1,2801186905)})],1)],1)],1):t._e()],1)},u=[],c=(a("7db0"),a("4160"),a("4fad"),a("159b"),a("9ab4")),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._t("title"),a("svg",{attrs:{id:"vp-chart",width:t.styleConfig.width,height:t.styleConfig.height}},[a("g",{attrs:{transform:"translate("+t.margin.left+", "+t.margin.top+")"}},[a("g",{attrs:{transform:"translate(0, "+this.innerHeight+")"}},[t._t("in-x-axis-group"),a("g",{directives:[{name:"xaxis",rawName:"v-xaxis",value:{scale:t.xScale,timezone:t.showTimeAs,axisTimeFormat:t.styleConfig.axisTimeFormat},expression:"{'scale': xScale, 'timezone': showTimeAs, 'axisTimeFormat': styleConfig.axisTimeFormat}"}]})],2),a("g",{directives:[{name:"yaxis-left",rawName:"v-yaxis-left",value:{scale:t.yScale,tickValues:t.styleConfig.yAxisLeftTicks},expression:"{'scale': yScale, 'tickValues': styleConfig.yAxisLeftTicks}"}]}),t._l(t.vtpsDataPrepared,(function(e){return[a("rect",{key:"rect-"+e.timestamp+"-"+e.height,attrs:{id:"rect-"+e.timestamp+"-"+e.height,x:e.x,y:e.y,fill:e.fill,height:t.rectHeight,width:t.rectWidth}}),t.styleConfig.showTooltip?a("b-popover",{key:"popover-"+e.timestamp+"-"+e.height,attrs:{target:"rect-"+e.timestamp+"-"+e.height,triggers:"hover",placement:"top"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(t.formatTimestampForTooltip(e.timestamp)))]},proxy:!0}],null,!0)},[a("b",[t._v("Height")]),t._v(" "+t._s(e.height)+"m "),a("br"),a("b",[t._v("Density")]),t._v(" "+t._s(e.dens)+" ")]):t._e()]})),a("g",{directives:[{name:"yaxis-right",rawName:"v-yaxis-right",value:{scale:t.yScaleFeet},expression:"{'scale': yScaleFeet }"}],attrs:{transform:"translate("+this.innerWidth+", 0)"}}),a("text",{attrs:{"text-anchor":"end",transform:"rotate(-90)",y:20-this.margin.left,x:-this.margin.top-70}},[t._v("Height (meters)")]),a("text",{attrs:{"text-anchor":"end",transform:"rotate(-90)",y:this.innerWidth+55,x:-this.margin.top-70}},[t._v("Height (feet)")])],2)])],2)},m=[],f=(a("99af"),a("a630"),a("d81d"),a("d3b7"),a("25f0"),a("6062"),a("3ca3"),a("ddb0"),a("5698")),h=(a("4de4"),a("13d5"),a("fb6a"),a("a434"),a("a9e3"),a("9129"),a("ac1f"),a("5319"),a("1276")," D-M@HH:mm z"),p=65,v=60,b=864+p+v,g={dataServerUrl:"https://crow.weernet.be",availableRadars:[{label:"Belgium",options:[{value:"behel",text:"Helchteren",latitude:51.069199,longitude:5.406138,timezone:"Europe/Brussels"},{value:"bejab",text:"Jabbeke",latitude:51.1919,longitude:3.0641,timezone:"Europe/Brussels"},{value:"bewid",text:"Wideumont",latitude:49.9135,longitude:5.5044,timezone:"Europe/Brussels"},{value:"bezav",text:"Zaventem",latitude:50.9054,longitude:4.4579,timezone:"Europe/Brussels"}]},{label:"Germany",options:[{value:"deess",text:"Essen",latitude:51.4055,longitude:6.9669,timezone:"Europe/Berlin"},{value:"denhb",text:"Neuheilenbach",latitude:50.1097,longitude:6.5483,timezone:"Europe/Berlin"}]},{label:"Netherlands",options:[{value:"nlhrw",text:"Herwijnen",latitude:51.83708,longitude:5.13797,timezone:"Europe/Amsterdam"}]}],initialRadarValue:"behel",availableTimeIntervals:[{text:"1d",value:24},{text:"3d",value:72},{text:"1h",value:1}],initialTimeInterval:24,vtpsFormat:{availableHeights:[0,200,400,600,800,1e3,1200,1400,1600,1800,2e3,2200,2400,2600,2800,3e3,3200,3400,3600,3800,4e3,4200,4400,4600,4800],temporalResolution:300,numHeaderLines:4},VPChartStyle:{margin:{top:20,right:v,bottom:30,left:p},width:b,height:300,showTooltip:!1,minDensityColor:"#f0f0f0",maxDensityColor:"#dc3545",noDataColor:"white",axisTimeFormat:h,tooltipTimeFormat:"MMM D - HH:mm z",yAxisLeftTicks:[0,1e3,2e3,3e3,4e3]},VPIChartStyle:{margin:{top:15,right:v,bottom:30,left:p},width:b,height:300,axisTimeFormat:" HH:mm z",tooltipTimeFormat:"MMM D - HH:mm z",lineColor:"steelblue",showTooltip:!0},TimelineChartStyle:{margin:{top:0,right:0,bottom:0,left:0},width:b-p-v,height:10,tooltipTimeFormat:"MMM D - HH:mm z",showTooltip:!0}},y=a("7f45"),x=a.n(y);function j(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0,a="x"==t?e:3&e|8;return a.toString(16)}))}function T(t,e,a){return t.tz(e).format(a)}function M(t,e,a){return T(x()(t),e,a)}function w(t){return t.replace(/[^a-z0-9]/g,(function(t){var e=t.charCodeAt(0);return 32==e?"-":e>=65&&e<=90?"_"+t.toLowerCase():"__"+("000"+e.toString(16)).slice(-4)}))}function C(t){return 3.281*t}function D(t){var e=parseFloat(t);return isNaN(e)?0:e}function P(t){var e=t.split("\n");e=e.splice(g.vtpsFormat.numHeaderLines),e.pop();var a=e.map((function(t){return{datetime:x.a.utc(t.substring(0,13),"YYYYMMDD HHmm").valueOf(),height:+parseInt(t.substring(14,18)),dd:parseFloat(t.substring(47,52)),ff:parseFloat(t.substring(41,46)),dens:D(t.substring(76,82)),sd_vvp:parseFloat(t.substring(53,59)),eta:D(t.substring(70,75))}}));return a}function _(t,e,a,i,n,r){if(void 0===e&&(e=0),void 0===a&&(a=1/0),void 0===i&&(i=200),void 0===n&&(n=2),void 0===r&&(r=NaN),"number"!=typeof e||"number"!=typeof a&&a!=1/0)throw"'altMin'/'altMax' need to be nunmeric";if(!isNaN(r)&&"number"==typeof r)throw"'alpha' needs to be numeric or Nan";a<=e&&console.log("'altMin' should be smaller than 'altMax'");var s=f["e"](t,(function(t){return t.height}));if(void 0==s[0]||void 0==s[1])throw"Can not extract altMin/altMax from data";if(e=Math.max(e,s[0]),a=Math.min(a,s[1]+i),t=t.filter((function(t){return t.height>=e&&t.height<=a})),t=t.filter((function(t){return t.sd_vvp>=n})),0==t.length)return{mtr:NaN,rtr:NaN,vid:NaN,vir:NaN};var o=t.map((function(t){return t.ff})),l=t.map((function(t){return t.dens})),u=t.map((function(t){return t.eta})),c=[];c=isNaN(r)?t.map((function(t){return 1+0*t.dd})):t.map((function(t){return Math.cos(t.dd-r)*Math.PI/180}));var d=.001*i*c.map((function(t,e){return t*o[e]*l[e]*3.6})).filter((function(t){return!Number.isNaN(t)})).reduce((function(t,e){return t+e}),0),m=.001*i*c.map((function(t,e){return t*o[e]*u[e]*3.6})).filter((function(t){return!Number.isNaN(t)})).reduce((function(t,e){return t+e}),0),h=.001*i*l.filter((function(t){return!Number.isNaN(t)})).reduce((function(t,e){return t+e}),0),p=.001*i*u.filter((function(t){return!Number.isNaN(t)})).reduce((function(t,e){return t+e}),0);return{mtr:d,rtr:m,vid:h,vir:p}}var S={parseVtps:P,integrateProfile:_,metersToFeet:C,makeSafeForCSS:w,formatTimestamp:M,formatMoment:T,uuidv4:j},k=i["default"].extend({name:"VPChart",props:{vtpsData:Array,styleConfig:Object,showTimeAs:String},data:function(){return{margin:this.styleConfig.margin,innerWidth:this.styleConfig.width-this.styleConfig.margin.left-this.styleConfig.margin.right,innerHeight:this.styleConfig.height-this.styleConfig.margin.top-this.styleConfig.margin.bottom}},methods:{formatTimestampForTooltip:function(t){return S.formatTimestamp(t,this.showTimeAs,this.styleConfig.tooltipTimeFormat)},formatTimestamp:function(t){return S.formatTimestamp(t,this.showTimeAs,this.styleConfig.axisTimeFormat)},getRectYValue:function(t){var e=this.yScale(t.toString());return e?e-this.rectHeight:0},getRectColor:function(t){return t.noData?this.styleConfig.noDataColor:this.colorScale(t.dens)}},directives:{yaxisRight:function(t,e,a){var i=e.value.scale,n=f["c"](i).tickSizeOuter(0).tickFormat(f["f"]("d"));n(f["m"](t))},yaxisLeft:function(t,e,a){var i=e.value.scale,n=e.value.tickValues,r=f["b"](i).tickValues(n).tickSizeOuter(0);r(f["m"](t))},xaxis:function(t,e,a){var i=e.value.scale,n=e.value.timezone,r=e.value.axisTimeFormat,s=f["a"](i).ticks(7).tickSize(15).tickFormat((function(t){return S.formatTimestamp(t,n,r)}));s(f["m"](t))}},computed:{rectHeight:function(){return this.innerHeight/this.distinctHeightsMeters.length},rectWidth:function(){return Math.round(this.innerWidth/this.rectDivider)},rectDivider:function(){var t=this.maxTimestamp-this.minTimestamp;return t/1e3/this.dataTemporalResolution+1},minTimestamp:function(){var t=f["i"](this.vtpsData,(function(t){return t.timestamp}));return t||0},maxTimestamp:function(){var t=f["h"](this.vtpsData,(function(t){return t.timestamp}));return t||0},maxDensity:function(){var t=f["h"](this.vtpsData,(function(t){return t.dens}));return t||0},dataTemporalResolution:function(){return(this.vtpsData[26].timestamp-this.vtpsData[0].timestamp)/1e3},distinctHeightsMeters:function(){var t=new Set(this.vtpsData.map((function(t){return t.height})));return Array.from(t.values())},scale:function(){return{x:this.xScale,y:null}},xScale:function(){return f["l"]().domain([this.minTimestamp,this.maxTimestamp+1e3*this.dataTemporalResolution]).range([0,this.innerWidth])},yScale:function(){return f["k"]().range([this.innerHeight,0]).domain(this.distinctHeightsMeters.concat([5e3]).map(String))},yScaleFeet:function(){return f["j"]().range([this.innerHeight,0]).domain([0,15748.03])},colorScale:function(){return f["j"]().range([this.styleConfig.minDensityColor,this.styleConfig.maxDensityColor]).domain([0,this.maxDensity])},vtpsDataPrepared:function(){var t=this;return this.vtpsData.map((function(e){return Object(c["a"])(Object(c["a"])({},e),{x:Math.round(Math.round(t.xScale(e.timestamp))+1),y:t.getRectYValue(e.height),fill:t.getRectColor(e)})}))}}}),V=k,O=a("2877"),R=Object(O["a"])(V,d,m,!1,null,null,null),A=R.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._t("title"),a("b-form",[a("b-form-row",[a("b-col",{attrs:{cols:"3"}},[a("b-form-group",{attrs:{id:"vpi-display-mode-group",label:"Show:","label-for":"vpi-display-mode"}},[a("b-form-select",{attrs:{id:"vpi-display-mode",size:"sm",options:t.availableModes,"value-field":"propertyName","text-field":"label"},model:{value:t.selectedMode,callback:function(e){t.selectedMode=e},expression:"selectedMode"}})],1)],1)],1)],1),a("div",{staticStyle:{"pointer-events":"none"},attrs:{id:"ignore-mouse-events"}}),a("svg",{attrs:{id:"new-vpi-chart",width:t.styleConfig.width,height:t.styleConfig.height}},[a("g",{attrs:{transform:"translate("+t.margin.left+", "+t.margin.top+")"}},[a("g",{attrs:{transform:"translate(0, "+t.innerHeight+")"}},[t._t("in-x-axis-group"),a("g",{directives:[{name:"xaxis",rawName:"v-xaxis",value:{scale:t.xScale,timezone:t.showTimeAs,axisTimeFormat:t.styleConfig.axisTimeFormat},expression:"{'scale': xScale, 'timezone': showTimeAs, 'axisTimeFormat': styleConfig.axisTimeFormat}"}]})],2),a("g",{directives:[{name:"yaxis",rawName:"v-yaxis",value:{scale:t.yScale},expression:"{'scale': yScale}"}]}),a("text",{attrs:{"text-anchor":"middle",transform:"rotate(-90)",y:20-t.margin.left,x:-t.margin.top-110}},[t._v(t._s(t.selectedModeLabel))]),t.styleConfig.showTooltip?[a("rect",{staticStyle:{visibility:"hidden"},attrs:{"pointer-events":"all",width:t.innerWidth,height:t.innerHeight},on:{mousemove:t.mouseMove,mouseenter:t.mouseEnter,mouseleave:t.mouseLeave}}),a("circle",{directives:[{name:"show",rawName:"v-show",value:t.tooltipVisible,expression:"tooltipVisible"}],staticStyle:{"pointer-events":"none"},style:"fill: "+t.styleConfig.lineColor+" ",attrs:{id:"tooltipCircle",cx:t.closestMomentXPosition,cy:t.YPositionAtTimeX,r:"4"}}),a("b-popover",{attrs:{container:"ignore-mouse-events",show:t.tooltipVisible,target:"tooltipCircle",placement:"top"},on:{"update:show":function(e){t.tooltipVisible=e}},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(t.formattedMomentAtTimeX))]},proxy:!0}],null,!1,4268480814)},[a("div",[t._v(" "+t._s(t.selectedModeLabel)+": "+t._s(t._f("round2decimals")(t.selectedValAtTimeX))+" ")])])]:t._e(),a("path",{staticStyle:{"pointer-events":"none"},attrs:{fill:"none",stroke:t.styleConfig.lineColor,"stroke-width":"1.5",d:t.pathData}}),t._l(t.daysCovered,(function(e){return a("line",{key:e.xPositionAtMidnight,staticClass:"day-separator",staticStyle:{"stroke-width":"1","pointer-events":"none"},attrs:{fill:"none",x1:e.xPositionAtMidnight,x2:e.xPositionAtMidnight,"pointer-events":"none",y1:"0",y2:t.innerHeight}})})),t._l(t.daysCovered,(function(e){return a("text",{key:"text-"+e.xPositionAtMidnight,staticClass:"day-separator",attrs:{x:e.xPositionAtMidnight+5,y:15}},[t._v(t._s(e.dayLabel))])}))],2)])],2)},N=[],F=(a("c740"),a("caad"),a("c975"),a("b680"),a("22b5")),H=i["default"].extend({name:"VPIChart",directives:{yaxis:function(t,e){var a=e.value.scale,i=f["b"](a).tickSizeOuter(0);i(f["m"](t))},xaxis:function(t,e){var a=e.value.scale,i=e.value.timezone,n=e.value.axisTimeFormat,r=f["a"](a).ticks(7).tickSize(15).tickFormat((function(t){return S.formatTimestamp(t,i,n)}));r(f["m"](t))}},filters:{round2decimals:function(t){return(Math.round(100*t)/100).toFixed(2)}},props:{vpiData:Array,styleConfig:Object,showTimeAs:String,dataTemporalResolution:Number},data:function(){return{vpiDataForPath:[],selectedMode:"mtr",availableModes:[{label:"Migration Traffic Rate",propertyName:"mtr",yMaxValComputedName:"maxMTRWithMinimum"},{label:"Reflectivity traffic rate",propertyName:"rtr",yMaxValComputedName:"maxRTR"},{label:"Vertically integrated density",propertyName:"vid",yMaxValComputedName:"maxVID"},{label:"Vertically integrated reflectivity",propertyName:"vir",yMaxValComputedName:"maxVIR"}],margin:this.styleConfig.margin,tooltipVisible:!1,mouseXPosition:null,VPIEntryAtTimeX:null,momentBisector:f["d"]((function(t){return t.moment.valueOf()})).left,timestampBisector:f["d"]((function(t){return t.timestamp})).left,innerWidth:this.styleConfig.width-this.styleConfig.margin.left-this.styleConfig.margin.right,innerHeight:this.styleConfig.height-this.styleConfig.margin.top-this.styleConfig.margin.bottom}},computed:{daysCovered:function(){var t=this,e=this.vpiData.map((function(e){return e.moment.clone().tz(t.showTimeAs).startOf("day")})),a=e.map((function(t){return t.valueOf()})),i=e.filter((function(t,e){return a.indexOf(t.valueOf())==e}));return i.map((function(e){return{moment:e,xPositionAtMidnight:t.xScale(e.valueOf()),dayLabel:e.format("MMM DD")}}))},formattedMomentAtTimeX:function(){return this.VPIEntryAtTimeX?S.formatMoment(this.VPIEntryAtTimeX.moment,this.showTimeAs,this.styleConfig.tooltipTimeFormat):""},YPositionAtTimeX:function(){return this.selectedValAtTimeX?this.yScale(this.selectedValAtTimeX):this.innerHeight},selectedValAtTimeX:function(){return this.VPIEntryAtTimeX?this.VPIEntryAtTimeX.integratedProfiles[this.selectedModePropertyName]:null},closestMomentXPosition:function(){return this.VPIEntryAtTimeX?this.xScale(this.VPIEntryAtTimeX.moment.valueOf()):null},maxVID:function(){var t=f["h"](this.vpiData,(function(t){return t.integratedProfiles.vid}));return t||0},maxVIR:function(){var t=f["h"](this.vpiData,(function(t){return t.integratedProfiles.vir}));return t||0},maxMTR:function(){var t=f["h"](this.vpiData,(function(t){return t.integratedProfiles.mtr}));return t||0},maxRTR:function(){var t=f["h"](this.vpiData,(function(t){return t.integratedProfiles.rtr}));return t||0},maxMTRWithMinimum:function(){return this.maxMTR<50?50:this.maxMTR},yMaxVal:function(){return this[this.selectedModeObject.yMaxValComputedName]},selectedModePropertyName:function(){return this.selectedModeObject.propertyName},selectedModeLabel:function(){return this.selectedModeObject.label},selectedModeObject:function(){var t=this,e=this.availableModes.find((function(e){return e.propertyName==t.selectedMode}));return e||this.availableModes[0]},minMoment:function(){var t=f["i"](this.vpiData,(function(t){return t.moment}));return t||x()()},maxMoment:function(){var t=f["h"](this.vpiData,(function(t){return t.moment}));return t||x()()},maxMomentPlusOne:function(){return this.maxMoment.clone().add(this.dataTemporalResolution,"seconds")},xScale:function(){return f["l"]().domain([this.minMoment.valueOf(),this.maxMomentPlusOne.valueOf()]).range([0,this.innerWidth])},yScale:function(){return f["j"]().range([this.innerHeight,0]).domain([0,this.yMaxVal])},pathData:function(){var t=this,e=f["g"]().x((function(e){return t.xScale(e.timestamp)})).y((function(t){return t.val}));return e(this.vpiDataForPath)}},watch:{selectedMode:{immediate:!0,handler:function(){this.syncVPIDataForPath(),this.animate()}},vpiData:{immediate:!0,handler:function(){this.syncVPIDataForPath(),this.animate()}}},methods:{animate:function(){F["a"].update()&&requestAnimationFrame(this.animate)},syncVPIDataForPath:function(){for(var t=this,e=[],a=0,i=this.vpiData;a<i.length;a++){var n=i[a];e.push(n.moment.valueOf())}var r=[];this.vpiDataForPath.forEach((function(t,a){e.includes(t.timestamp)||r.push(a)}));for(var s=r.length-1;s>=0;--s)this.vpiDataForPath.splice(r[s],1);for(var o=function(e){var a=e.moment.valueOf(),i=l.vpiDataForPath.findIndex((function(t){return t.timestamp===a})),n=e.integratedProfiles[l.selectedModePropertyName],r=l.yScale(isNaN(n)?0:n);if(-1==i){var s=l.timestampBisector(l.vpiDataForPath,a),o={timestamp:a,val:r};l.vpiDataForPath.splice(s,0,o)}else{var u=Object(c["a"])({},l.vpiDataForPath[i]);new F["a"].Tween(u).easing(F["a"].Easing.Quadratic.Out).to({val:r},300).onUpdate((function(){t.$set(t.vpiDataForPath[i],"val",u.val)})).start()}},l=this,u=0,d=this.vpiData;u<d.length;u++){n=d[u];o(n)}},mouseEnter:function(){this.tooltipVisible=!0,this.mouseXPosition=0},mouseLeave:function(){this.tooltipVisible=!1,this.mouseXPosition=null},mouseMove:function(t){var e=t.target,a=e.getBoundingClientRect(),i=t.clientX-a.left;this.mouseXPosition=i;var n=this.xScale.invert(this.mouseXPosition),r=this.momentBisector(this.vpiData,n),s=this.vpiData[r-1],o=this.vpiData[r];this.VPIEntryAtTimeX=n.getTime()/1e3-s.moment.valueOf()>o.moment.valueOf()-n.getTime()/1e3?o:s}}}),I=H,Y=(a("0e39"),Object(O["a"])(I,z,N,!1,null,"b45f7eb6",null)),E=Y.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("g",{attrs:{transform:"translate("+t.margin.left+", "+t.margin.top+")"}},[t._l(t.populatedPeriods,(function(e){return[a("rect",{key:"rect "+e.x,class:e.class,attrs:{x:e.x,y:"0",width:t.periodWidth,height:t.styleConfig.height,id:t.uuid+"-period-at-"+e.x}}),t.styleConfig.showTooltip?a("b-popover",{key:"popover "+e.x,attrs:{target:t.uuid+"-period-at-"+e.x,triggers:"hover",placement:"bottom"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(t.formatMoment(e.moment)))]},proxy:!0}],null,!0)},[t._v(" Sun altitude: "+t._s(t._f("round2decimals")(e.sunAltitude))+"°"),a("br"),t._v(" Period : "+t._s(e.name)+" ")]):t._e()]}))],2)},X=[],U=i["default"].extend({props:{periods:Array,styleConfig:Object,showTimeAs:String},data:function(){return{uuid:"",margin:this.styleConfig.margin,innerWidth:this.styleConfig.width-this.styleConfig.margin.left-this.styleConfig.margin.right,innerHeight:this.styleConfig.height-this.styleConfig.margin.top-this.styleConfig.margin.bottom}},filters:{round2decimals:function(t){return(Math.round(100*t)/100).toFixed(2)}},methods:{formatMoment:function(t){return S.formatMoment(t,this.showTimeAs,this.styleConfig.tooltipTimeFormat)},getPeriodClass:function(t){return S.makeSafeForCSS(this.getPeriodName(t))},getPeriodName:function(t){return t>=0?"day":t<0&&t>=-18?"twilight":"night"}},mounted:function(){this.uuid=S.uuidv4()},computed:{xScale:function(){return f["l"]().domain([this.minMoment.valueOf(),this.maxMomentPlusOne.valueOf()]).range([0,this.innerWidth])},populatedPeriods:function(){var t=this,e=this.xScale;return this.periods.map((function(a){return Object(c["a"])(Object(c["a"])({},a),{x:Math.round(e(a.moment.valueOf())),class:t.getPeriodClass(a.sunAltitude),name:t.getPeriodName(a.sunAltitude)})}))},periodWidth:function(){return Math.round(this.innerWidth/this.rectDivider)},dataTemporalResolution:function(){return x.a.duration(this.periods[1].moment.diff(this.periods[0].moment)).asSeconds()},rectDivider:function(){var t=x.a.duration(this.maxMoment.diff(this.minMoment));return t.asSeconds()/this.dataTemporalResolution+1},minMoment:function(){return this.periods[0].moment},maxMoment:function(){return this.periods[this.periods.length-1].moment},maxMomentPlusOne:function(){return this.maxMoment.clone().add(this.dataTemporalResolution,"seconds")}}}),W=U,B=(a("d577"),Object(O["a"])(W,L,X,!1,null,"46e2b456",null)),$=B.exports,Z=a("bc3a"),q=a.n(Z),G=a("c956"),J=a.n(G),Q="Copy URL!",K=i["default"].extend({name:"Crow",components:{VPChart:A,VPIChart:E,TimelineChart:$},props:{radarValueProp:{type:String,default:g.initialRadarValue}},data:function(){var t=x()().subtract(2,"days");return{selectedDate:t.format(x.a.HTML5_FMT.DATE),selectedIntervalInHours:g.initialTimeInterval,availableIntervals:g.availableTimeIntervals,selectedRadarValue:this.radarValueProp,availableRadars:g.availableRadars,timeDisplayedAs:"radarLocal",showCharts:!1,VPChartStyle:g.VPChartStyle,VPIChartStyle:g.VPIChartStyle,TimelineChartStyle:g.TimelineChartStyle,dataTemporalResolution:g.vtpsFormat.temporalResolution,availableHeights:g.vtpsFormat.availableHeights,radarVtps:{},baseUrl:"",publicPath:"/crow/",copyUrlButtonText:Q}},computed:{selectedIntervalLabel:function(){var t=this,e=this.availableIntervals.find((function(e){return e.value==t.selectedIntervalInHours}));return e?e.text:""},timeZoneToShow:function(){return"radarLocal"==this.timeDisplayedAs?this.selectedRadarTimezone:"UTC"},timePeriods:function(){for(var t=[],e=0,a=Object.entries(this.radarVtps);e<a.length;e++){var i=a[e],n=i[0],r=i[1];t.push({moment:x.a.utc(+n),sunAltitude:r.sunAltitude})}return t},selectedDateNoon:function(){return"UTC"==this.timeZoneToShow?x.a.utc(this.selectedDate,"YYYY-MM-DD").hour(12).minute(0).second(0):x()(this.selectedDate,"YYYY-MM-DD").hour(12).minute(0).second(0).tz(this.timeZoneToShow)},startMoment:function(){return x()(this.selectedDateNoon).subtract(this.selectedIntervalInHours/2,"hours")},endMoment:function(){return x()(this.selectedDateNoon).add(this.selectedIntervalInHours/2,"hours")},selectedRadarAsObject:function(){var t=this,e=this.availableRadars[0].options[0];return this.availableRadars.forEach((function(a){var i=a.options.find((function(e){return e.value==t.selectedRadarValue}));i&&(e=i)})),e},selectedRadarLatitude:function(){return this.selectedRadarAsObject.latitude},selectedRadarLongitude:function(){return this.selectedRadarAsObject.longitude},selectedRadarLocation:function(){return this.selectedRadarAsObject.text},selectedRadarTimezone:function(){return this.selectedRadarAsObject.timezone},radarVtpsAsArray:function(){for(var t=[],e=0,a=Object.entries(this.radarVtps);e<a.length;e++)for(var i=a[e],n=i[0],r=i[1],s=0,o=Object.entries(r.heightData);s<o.length;s++){var l=o[s],u=l[0],d=l[1],m={timestamp:+n,height:+u};t.push(Object(c["a"])(Object(c["a"])({},m),d))}return t},integratedProfiles:function(){for(var t=[],e=0,a=Object.entries(this.radarVtps);e<a.length;e++){for(var i=a[e],n=i[0],r=i[1],s=[],o=0,l=Object.entries(r.heightData);o<l.length;o++){var u=l[o],d=u[0],m=u[1],f={height:+d};s.push(Object(c["a"])(Object(c["a"])({},m),f))}t.push({moment:x.a.utc(+n),integratedProfiles:S.integrateProfile(s)})}return t}},mounted:function(){this.baseUrl=window.location.origin,this.$nextTick((function(){this.loadData()}))},methods:{onCopyUrl:function(){this.copyUrlButtonText="Copied!"},initializeEmptyData:function(){this.radarVtps={};var t=this.startMoment.clone(),e=function(){var e={};a.availableHeights.forEach((function(t){e[t]={noData:!0}}));var i={sunAltitude:J.a.getPosition(t.toDate(),a.selectedRadarLatitude,a.selectedRadarLongitude).altitude*(180/Math.PI),heightData:e};a.$set(a.radarVtps,t.toDate().getTime(),i),t.add(a.dataTemporalResolution,"seconds")},a=this;while(t.isBefore(this.endMoment))e()},decrementPeriod:function(){this.selectedDate=x()(this.selectedDate,"YYYY-MM-DD").subtract(this.selectedIntervalInHours,"hours").format(x.a.HTML5_FMT.DATE),this.loadData()},incrementPeriod:function(){this.selectedDate=x()(this.selectedDate,"YYYY-MM-DD").add(this.selectedIntervalInHours,"hours").format(x.a.HTML5_FMT.DATE),this.loadData()},onFormChange:function(){this.copyUrlButtonText=Q,this.loadData()},loadData:function(){this.showCharts=!0,this.initializeEmptyData(),this.populateDataFromCrowServer(this.selectedRadarValue,this.startMoment,this.endMoment)},storeDataRow:function(t){var e=Object(c["a"])(Object(c["a"])({},t),{noData:!1});Object.prototype.hasOwnProperty.call(this.radarVtps,t.datetime)&&this.$set(this.radarVtps[t.datetime].heightData,t.height,e)},populateDataFromCrowServer:function(t,e,a){var i=this,n=x.a.utc(e,"YYYY-MM-DD"),r=x.a.utc(a,"YYYY-MM-DD").add(1,"days"),s=n.clone();while(s.isBefore(r,"day")){var o=this.buildDataUrl(t,s);q.a.get(o).then((function(t){for(var e=S.parseVtps(t.data),a=0,n=e;a<n.length;a++){var r=n[a];i.storeDataRow(r)}})),s.add(1,"days")}},buildDataUrl:function(t,e){return g.dataServerUrl+"/"+t+"/"+e.format("YYYY")+"/"+t+"_vpts_"+e.format("YYYYMMDD")+".txt"}}}),tt=K,et=Object(O["a"])(tt,l,u,!1,null,null,null),at=et.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"content"},[a("b-row",[a("b-col",[t._v("404: not found")])],1)],1)},nt=[],rt=i["default"].extend({name:"PageNotFound"}),st=rt,ot=Object(O["a"])(st,it,nt,!1,null,null,null),lt=ot.exports,ut=a("4eb5"),ct=a.n(ut);i["default"].use(ct.a),i["default"].use(o["a"]);var dt=[{path:"/",component:at,props:function(t){return{radarValueProp:t.query.radar}}},{path:"*",component:lt}],mt=new o["a"]({routes:dt}),ft=i["default"].extend({router:mt,name:"App",methods:{commitHash:function(){return"e603f45\n"}}}),ht=ft,pt=(a("034f"),Object(O["a"])(ht,r,s,!1,null,null,null)),vt=pt.exports;i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(vt)}}).$mount("#app")},d577:function(t,e,a){"use strict";var i=a("e8ff"),n=a.n(i);n.a},e8ff:function(t,e,a){}});
//# sourceMappingURL=app.b0d8cb4a.js.map