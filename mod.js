// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){return Object.keys(Object(t))}var e=void 0!==Object.keys;var n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return n&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;function u(t,e){return null!=t&&o.call(t,e)}var a="function"==typeof Symbol?Symbol:void 0,c="function"==typeof a?a.toStringTag:"";var l=r()?function(t){var e,n,r;if(null==t)return i.call(t);n=t[c],e=u(t,c);try{t[c]=void 0}catch(e){return i.call(t)}return r=i.call(t),e?t[c]=n:delete t[c],r}:function(t){return i.call(t)};function f(t){return"[object Arguments]"===l(t)}var s=function(){return f(arguments)}(),p="function"==typeof Object.defineProperty?Object.defineProperty:null;var g=Object.defineProperty;function b(t){return"number"==typeof t}function d(t){var e,n="";for(e=0;e<t;e++)n+="0";return n}function y(t,e,n){var r=!1,i=e-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(r=!0,t=t.substr(1)),t=n?t+d(i):d(i)+t,r&&(t="-"+t)),t}var m=String.prototype.toLowerCase,h=String.prototype.toUpperCase;function v(t){var e,n,r;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=t.arg,r=parseInt(n,10),!isFinite(r)){if(!b(n))throw new Error("invalid integer. Value: "+n);r=0}return r<0&&("u"===t.specifier||10!==e)&&(r=4294967295+r+1),r<0?(n=(-r).toString(e),t.precision&&(n=y(n,t.precision,t.padRight)),n="-"+n):(n=r.toString(e),r||t.precision?t.precision&&(n=y(n,t.precision,t.padRight)):n="",t.sign&&(n=t.sign+n)),16===e&&(t.alternate&&(n="0x"+n),n=t.specifier===h.call(t.specifier)?h.call(n):m.call(n)),8===e&&t.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function w(t){return"string"==typeof t}var j=Math.abs,x=String.prototype.toLowerCase,_=String.prototype.toUpperCase,O=String.prototype.replace,S=/e\+(\d)$/,E=/e-(\d)$/,T=/^(\d+)$/,k=/^(\d+)e/,I=/\.0$/,P=/\.0*e/,V=/(\..*[^0])0*e/;function A(t){var e,n,r=parseFloat(t.arg);if(!isFinite(r)){if(!b(t.arg))throw new Error("invalid floating-point number. Value: "+n);r=t.arg}switch(t.specifier){case"e":case"E":n=r.toExponential(t.precision);break;case"f":case"F":n=r.toFixed(t.precision);break;case"g":case"G":j(r)<1e-4?((e=t.precision)>0&&(e-=1),n=r.toExponential(e)):n=r.toPrecision(t.precision),t.alternate||(n=O.call(n,V,"$1e"),n=O.call(n,P,"e"),n=O.call(n,I,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return n=O.call(n,S,"e+0$1"),n=O.call(n,E,"e-0$1"),t.alternate&&(n=O.call(n,T,"$1."),n=O.call(n,k,"$1.e")),r>=0&&t.sign&&(n=t.sign+n),n=t.specifier===_.call(t.specifier)?_.call(n):x.call(n)}function F(t){var e,n="";for(e=0;e<t;e++)n+=" ";return n}function N(t,e,n){var r=e-t.length;return r<0?t:t=n?t+F(r):F(r)+t}var $=String.fromCharCode,C=isNaN,B=Array.isArray;function L(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function R(t){var e,n,r,i,o,u,a,c,l;if(!B(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(u="",a=1,c=0;c<t.length;c++)if(w(r=t[c]))u+=r;else{if(e=void 0!==r.precision,!(r=L(r)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+r+"`.");for(r.mapping&&(a=r.mapping),n=r.flags,l=0;l<n.length;l++)switch(i=n.charAt(l)){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=n.indexOf("-")<0;break;case"#":r.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===r.width){if(r.width=parseInt(arguments[a],10),a+=1,C(r.width))throw new TypeError("the argument for * width at position "+a+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(e&&"*"===r.precision){if(r.precision=parseInt(arguments[a],10),a+=1,C(r.precision))throw new TypeError("the argument for * precision at position "+a+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,e=!1)}switch(r.arg=arguments[a],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(r.padZeros=!1),r.arg=v(r);break;case"s":r.maxWidth=e?r.precision:-1;break;case"c":if(!C(r.arg)){if((o=parseInt(r.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+r.arg);r.arg=C(o)?String(r.arg):$(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(r.precision=6),r.arg=A(r);break;default:throw new Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=y(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=N(r.arg,r.width,r.padRight)),u+=r.arg||"",a+=1}return u}var G=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function W(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function X(t){var e,n,r,i;for(n=[],i=0,r=G.exec(t);r;)(e=t.slice(i,G.lastIndex-r[0].length)).length&&n.push(e),n.push(W(r)),i=G.lastIndex,r=G.exec(t);return(e=t.slice(i)).length&&n.push(e),n}function Z(t){return"string"==typeof t}function M(t){var e,n;if(!Z(t))throw new TypeError(M("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=[X(t)],n=1;n<arguments.length;n++)e.push(arguments[n]);return R.apply(null,e)}var Y,U=Object.prototype,q=U.toString,H=U.__defineGetter__,z=U.__defineSetter__,D=U.__lookupGetter__,J=U.__lookupSetter__;Y=function(){try{return p({},"x",{}),!0}catch(t){return!1}}()?g:function(t,e,n){var r,i,o,u;if("object"!=typeof t||null===t||"[object Array]"===q.call(t))throw new TypeError(M("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof n||null===n||"[object Array]"===q.call(n))throw new TypeError(M("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(D.call(t,e)||J.call(t,e)?(r=t.__proto__,t.__proto__=U,delete t[e],t[e]=n.value,t.__proto__=r):t[e]=n.value),o="get"in n,u="set"in n,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&H&&H.call(t,e,n.get),u&&z&&z.call(t,e,n.set),t};var K=Y;function Q(t,e,n){K(t,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function tt(t){return"string"==typeof t}var et=String.prototype.valueOf;var nt=r();function rt(t){return"object"==typeof t&&(t instanceof String||(nt?function(t){try{return et.call(t),!0}catch(t){return!1}}(t):"[object String]"===l(t)))}function it(t){return tt(t)||rt(t)}function ot(t){return"number"==typeof t}Q(it,"isPrimitive",tt),Q(it,"isObject",rt);var ut=Number,at=ut.prototype.toString;var ct=r();function lt(t){return"object"==typeof t&&(t instanceof ut||(ct?function(t){try{return at.call(t),!0}catch(t){return!1}}(t):"[object Number]"===l(t)))}function ft(t){return ot(t)||lt(t)}function st(t){return t!=t}function pt(t){return ot(t)&&st(t)}function gt(t){return lt(t)&&st(t.valueOf())}function bt(t){return pt(t)||gt(t)}Q(ft,"isPrimitive",ot),Q(ft,"isObject",lt),Q(bt,"isPrimitive",pt),Q(bt,"isObject",gt);var dt=Number.POSITIVE_INFINITY,yt=ut.NEGATIVE_INFINITY,mt=Math.floor;function ht(t){return mt(t)===t}function vt(t){return t<dt&&t>yt&&ht(t)}function wt(t){return ot(t)&&vt(t)}function jt(t){return lt(t)&&vt(t.valueOf())}function xt(t){return wt(t)||jt(t)}Q(xt,"isPrimitive",wt),Q(xt,"isObject",jt);var _t=Object.prototype.propertyIsEnumerable;var Ot=!_t.call("beep","0");function St(t,e){var n;return null!=t&&(!(n=_t.call(t,e))&&Ot&&it(t)?!pt(e=+e)&&wt(e)&&e>=0&&e<t.length:n)}var Et=Array.isArray?Array.isArray:function(t){return"[object Array]"===l(t)};var Tt=s?f:function(t){return null!==t&&"object"==typeof t&&!Et(t)&&"number"==typeof t.length&&ht(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!St(t,"callee")},kt=Array.prototype.slice;function It(t){return null!==t&&"object"==typeof t}Q(It,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(M("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var n,r;if(!Et(e))return!1;if(0===(n=e.length))return!1;for(r=0;r<n;r++)if(!1===t(e[r]))return!1;return!0}}(It));var Pt=St((function(){}),"prototype"),Vt=!St({toString:null},"toString");function At(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&ht(t.length)&&t.length>=0&&t.length<=9007199254740991}function Ft(t,e,n){var r,i;if(!At(t)&&!tt(t))throw new TypeError(M("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(r=t.length))return-1;if(3===arguments.length){if(!wt(n))throw new TypeError(M("invalid argument. Third argument must be an integer. Value: `%s`.",n));if(n>=0){if(n>=r)return-1;i=n}else(i=r+n)<0&&(i=0)}else i=0;if(bt(e)){for(;i<r;i++)if(bt(t[i]))return i}else for(;i<r;i++)if(t[i]===e)return i;return-1}var Nt=/./;function $t(t){return"boolean"==typeof t}var Ct=Boolean,Bt=Boolean.prototype.toString;var Lt=r();function Rt(t){return"object"==typeof t&&(t instanceof Ct||(Lt?function(t){try{return Bt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===l(t)))}function Gt(t){return $t(t)||Rt(t)}function Wt(){return new Function("return this;")()}Q(Gt,"isPrimitive",$t),Q(Gt,"isObject",Rt);var Xt="object"==typeof self?self:null,Zt="object"==typeof window?window:null,Mt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Yt="object"==typeof Mt?Mt:null,Ut="object"==typeof globalThis?globalThis:null;var qt=function(t){if(arguments.length){if(!$t(t))throw new TypeError(M("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return Wt()}if(Ut)return Ut;if(Xt)return Xt;if(Zt)return Zt;if(Yt)return Yt;throw new Error("unexpected error. Unable to resolve global object.")}(),Ht=qt.document&&qt.document.childNodes,zt=Int8Array;function Dt(){return/^\s*function\s*([^(]*)/i}var Jt=/^\s*function\s*([^(]*)/i;function Kt(t){var e,n,r,i;if(("Object"===(n=l(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(e=Jt.exec(r.toString()))return e[1]}return It(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":n}Q(Dt,"REGEXP",Jt);var Qt="function"==typeof Nt||"object"==typeof zt||"function"==typeof Ht?function(t){return Kt(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?Kt(t).toLowerCase():e};function te(t){return t.constructor&&t.constructor.prototype===t}var ee=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ne="undefined"==typeof window?void 0:window;var re=function(){var t;if("undefined"===Qt(ne))return!1;for(t in ne)try{-1===Ft(ee,t)&&u(ne,t)&&null!==ne[t]&&"object"===Qt(ne[t])&&te(ne[t])}catch(t){return!0}return!1}(),ie="undefined"!=typeof window;var oe=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var ue=e?function(){return 2!==(t(arguments)||"").length}(1,2)?function(e){return Tt(e)?t(kt.call(e)):t(e)}:t:function(t){var e,n,r,i,o,a,c;if(i=[],Tt(t)){for(c=0;c<t.length;c++)i.push(c.toString());return i}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(c=0;c<t.length;c++)i.push(c.toString())}else{if(!1==(r="function"==typeof t)&&!It(t))return i;n=Pt&&r}for(o in t)n&&"prototype"===o||!u(t,o)||i.push(String(o));if(Vt)for(e=function(t){if(!1===ie&&!re)return te(t);try{return te(t)}catch(t){return!1}}(t),c=0;c<oe.length;c++)a=oe[c],e&&"constructor"===a||!u(t,a)||i.push(String(a));return i};function ae(t){return"function"===Qt(t)}var ce,le=Object,fe=Object.getPrototypeOf;ce=ae(Object.getPrototypeOf)?fe:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===l(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var se=ce;var pe=Object.prototype;function ge(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!Et(t)}(t)&&(e=function(t){return null==t?null:(t=le(t),se(t))}(t),!e||!u(t,"constructor")&&u(e,"constructor")&&ae(e.constructor)&&"[object Function]"===l(e.constructor)&&u(e,"isPrototypeOf")&&ae(e.isPrototypeOf)&&(e===pe||function(t){var e;for(e in t)if(!u(t,e))return!1;return!0}(t)))}var be={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function de(){var t;return 0===arguments.length?be.all.slice():(t=be[arguments[0]])?t.slice():[]}function ye(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function me(t,e,n){K(t,e,{configurable:!1,enumerable:!0,writable:!1,value:n})}Q(de,"enum",ye),function(t,e){var n,r,i;for(n=ue(e),i=0;i<n.length;i++)me(t,r=n[i],e[r])}(de,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var he=function(t,e){var n,r,i,o,a,c,l,f=!0;if(!It(t))throw new TypeError(M("invalid argument. First argument must be an object (except null). Value: `%s`.",t));if(arguments.length>1){if(!ge(e))throw new TypeError(M("invalid argument. Options argument must be an object. Value: `%s`.",e));if(u(e,"duplicates")&&!$t(f=e.duplicates))throw new TypeError(M("invalid option. `%s` option must be a boolean. Option: `%s`.","duplicates",f))}if(r=(n=ue(t)).length,a={},f)for(l=0;l<r;l++)u(a,o=t[i=n[l]])?(c=a[o],Et(c)?a[o].push(i):a[o]=[c,i]):a[o]=i;else for(l=0;l<r;l++)a[t[i=n[l]]]=i;return a}({bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},{duplicates:!1});var ve,we={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function je(t){var e=typeof t;return"string"===e?null===function(t){var e=we[t];return"number"==typeof e?e:null}(t)?null:t:"number"===e?function(t){var e=he[t];return"string"==typeof e?e:null}(t):null}function xe(t){return 0===arguments.length?{binary:"byte",bool:"boolean",complex64:"single-precision floating-point complex number",complex128:"double-precision floating-point complex number",float16:"half-precision floating-point number",bfloat16:"brain floating-point number",float32:"single-precision floating-point number",float64:"double-precision floating-point number",float128:"quadruple-precision floating-point number",generic:"generic array value",int8:"signed 8-bit integer",int16:"signed 16-bit integer",int32:"signed 32-bit integer",int64:"signed 64-bit integer",int128:"signed 128-bit integer",int256:"signed 256-bit integer",uint8:"unsigned 8-bit integer",uint8c:"unsigned 8-bit integer (clamped)",uint16:"unsigned 16-bit integer",uint32:"unsigned 32-bit integer",uint64:"unsigned 64-bit integer",uint128:"unsigned 128-bit integer",uint256:"unsigned 256-bit integer"}:(void 0===ve&&(ve={binary:"byte",bool:"boolean",complex64:"single-precision floating-point complex number",complex128:"double-precision floating-point complex number",float16:"half-precision floating-point number",bfloat16:"brain floating-point number",float32:"single-precision floating-point number",float64:"double-precision floating-point number",float128:"quadruple-precision floating-point number",generic:"generic array value",int8:"signed 8-bit integer",int16:"signed 16-bit integer",int32:"signed 32-bit integer",int64:"signed 64-bit integer",int128:"signed 128-bit integer",int256:"signed 256-bit integer",uint8:"unsigned 8-bit integer",uint8c:"unsigned 8-bit integer (clamped)",uint16:"unsigned 16-bit integer",uint32:"unsigned 32-bit integer",uint64:"unsigned 64-bit integer",uint128:"unsigned 128-bit integer",uint256:"unsigned 256-bit integer"}),ve[je(t)]||null)}export{xe as default};
//# sourceMappingURL=mod.js.map
