!function(e){function n(n){for(var a,o,l=n[0],i=n[1],d=n[2],c=0,p=[];c<l.length;c++)o=l[c],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(u&&u(n);p.length;)p.shift()();return t.push.apply(t,d||[]),r()}function r(){for(var e,n=0;n<t.length;n++){for(var r=t[n],a=!0,l=1;l<r.length;l++){var i=r[l];0!==s[i]&&(a=!1)}a&&(t.splice(n--,1),e=o(o.s=r[0]))}return e}var a={},s={0:0},t=[];function o(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,n,r){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)o.d(r,a,function(n){return e[n]}.bind(null,a));return r},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=n,l=l.slice();for(var d=0;d<l.length;d++)n(l[d]);var u=i;t.push([0,1]),r()}([function(e,n,r){"use strict";r.r(n);r(1),r(2)},function(e,n){$("div[data-js-handler='workflow__slider']").slick({dots:!0,appendDots:$(".workflow"),appendArrows:$(".workflow__container"),responsive:[{breakpoint:480,settings:{appendDots:$(".workflow__slider")}}]}),$("div[data-js-handler='recommendations__slider']").slick({dots:!1,appendArrows:$(".recommendations"),responsive:[{breakpoint:480,settings:{dots:!0,appendDots:$(".recommendations")}}]}),$("[data-js-handler='menu__toggle']").on("click",(function(e){e.preventDefault(),$(".main-menu").hasClass("show")?($(".main-menu").removeClass("show"),$("body").removeClass("hidden")):($(".main-menu").addClass("show"),$("body").addClass("hidden"))})),$("[data-js-handler='filter__toggle']").on("click",(function(e){$(this).hasClass("collapse")?($(this).removeClass("collapse").addClass("expanded"),$(this).parent().removeClass("collapse")):($(this).addClass("collapse").removeClass("expanded"),$(this).parent().addClass("collapse"))})),$("[data-js-handler='filter-block-more__handler']").on("click",(function(e){e.preventDefault(),$(this).siblings("label").each((function(e,n){$(n).hasClass("hide")?$(n).removeClass("hide").addClass("show"):$(n).hasClass("show")&&$(n).removeClass("show").addClass("hide")}))})),$((function(){$("[data-js-handler='range-slider__handler']").slider({range:!0,min:0,max:10,step:.1,values:[4.5,9.5],slide:function(e,n){$(".range-slider__min").val(n.values[0]),$(".range-slider__max").val(n.values[1])}}),$(".range-slider__min").val($("[data-js-handler='range-slider__handler']").slider("values",0)),$(".range-slider__max").val($("[data-js-handler='range-slider__handler']").slider("values",1))}))},function(e,n,r){var a=r(3),s=r(4);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var t={insert:"head",singleton:!1};a(s,t);e.exports=s.locals||{}},,function(e,n,r){}]);