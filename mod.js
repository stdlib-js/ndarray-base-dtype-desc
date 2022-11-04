// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){return Object.keys(Object(t))}var n=void 0!==Object.keys;var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;function u(t,n){return null!=t&&o.call(t,n)}var l="function"==typeof Symbol?Symbol.toStringTag:"";var c=r()?function(t){var n,e,r;if(null==t)return i.call(t);e=t[l],n=u(t,l);try{t[l]=void 0}catch(n){return i.call(t)}return r=i.call(t),n?t[l]=e:delete t[l],r}:function(t){return i.call(t)};function f(t){return"[object Arguments]"===c(t)}var a=function(){return f(arguments)}(),p="function"==typeof Object.defineProperty?Object.defineProperty:null;var b,s=Object.defineProperty,g=Object.prototype,y=g.toString,d=g.__defineGetter__,m=g.__defineSetter__,v=g.__lookupGetter__,h=g.__lookupSetter__;b=function(){try{return p({},"x",{}),!0}catch(t){return!1}}()?s:function(t,n,e){var r,i,o,u;if("object"!=typeof t||null===t||"[object Array]"===y.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===y.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((i="value"in e)&&(v.call(t,n)||h.call(t,n)?(r=t.__proto__,t.__proto__=g,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),o="get"in e,u="set"in e,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&d&&d.call(t,n,e.get),u&&m&&m.call(t,n,e.set),t};var j=b;function w(t,n,e){j(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function _(t){return"string"==typeof t}var O=String.prototype.valueOf;var x=r();function S(t){return"object"==typeof t&&(t instanceof String||(x?function(t){try{return O.call(t),!0}catch(t){return!1}}(t):"[object String]"===c(t)))}function E(t){return _(t)||S(t)}function P(t){return"number"==typeof t}w(E,"isPrimitive",_),w(E,"isObject",S);var T=Number,I=T.prototype.toString;var A=r();function V(t){return"object"==typeof t&&(t instanceof T||(A?function(t){try{return I.call(t),!0}catch(t){return!1}}(t):"[object Number]"===c(t)))}function k(t){return P(t)||V(t)}function N(t){return t!=t}function B(t){return P(t)&&N(t)}function F(t){return V(t)&&N(t.valueOf())}function L(t){return B(t)||F(t)}w(k,"isPrimitive",P),w(k,"isObject",V),w(L,"isPrimitive",B),w(L,"isObject",F);var G=Number.POSITIVE_INFINITY,Y=T.NEGATIVE_INFINITY,C=Math.floor;function M(t){return C(t)===t}function X(t){return t<G&&t>Y&&M(t)}function q(t){return P(t)&&X(t)}function H(t){return V(t)&&X(t.valueOf())}function W(t){return q(t)||H(t)}w(W,"isPrimitive",q),w(W,"isObject",H);var D=Object.prototype.propertyIsEnumerable;var R=!D.call("beep","0");function U(t,n){var e;return null!=t&&(!(e=D.call(t,n))&&R&&E(t)?!B(n=+n)&&q(n)&&n>=0&&n<t.length:e)}var z=Array.isArray?Array.isArray:function(t){return"[object Array]"===c(t)};var J=a?f:function(t){return null!==t&&"object"==typeof t&&!z(t)&&"number"==typeof t.length&&M(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!U(t,"callee")},K=Array.prototype.slice;function Q(t){return null!==t&&"object"==typeof t}w(Q,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!z(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(Q));var Z=U((function(){}),"prototype"),$=!U({toString:null},"toString");function tt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&M(t.length)&&t.length>=0&&t.length<=9007199254740991}function nt(t,n,e){var r,i;if(!tt(t)&&!_(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!q(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;i=e}else(i=r+e)<0&&(i=0)}else i=0;if(L(n)){for(;i<r;i++)if(L(t[i]))return i}else for(;i<r;i++)if(t[i]===n)return i;return-1}var et=/./;function rt(t){return"boolean"==typeof t}var it=Boolean.prototype.toString;var ot=r();function ut(t){return"object"==typeof t&&(t instanceof Boolean||(ot?function(t){try{return it.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===c(t)))}function lt(t){return rt(t)||ut(t)}function ct(){return new Function("return this;")()}w(lt,"isPrimitive",rt),w(lt,"isObject",ut);var ft="object"==typeof self?self:null,at="object"==typeof window?window:null,pt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},bt="object"==typeof pt?pt:null;var st=function(t){if(arguments.length){if(!rt(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return ct()}if(ft)return ft;if(at)return at;if(bt)return bt;throw new Error("unexpected error. Unable to resolve global object.")}(),gt=st.document&&st.document.childNodes,yt=Int8Array;function dt(){return/^\s*function\s*([^(]*)/i}var mt=/^\s*function\s*([^(]*)/i;function vt(t){var n,e,r,i;if(("Object"===(e=c(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=mt.exec(r.toString()))return n[1]}return Q(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}w(dt,"REGEXP",mt);var ht="function"==typeof et||"object"==typeof yt||"function"==typeof gt?function(t){return vt(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?vt(t).toLowerCase():n};function jt(t){return t.constructor&&t.constructor.prototype===t}var wt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],_t="undefined"==typeof window?void 0:window;var Ot=function(){var t;if("undefined"===ht(_t))return!1;for(t in _t)try{-1===nt(wt,t)&&u(_t,t)&&null!==_t[t]&&"object"===ht(_t[t])&&jt(_t[t])}catch(t){return!0}return!1}(),xt="undefined"!=typeof window;var St=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Et=n?function(){return 2!==(t(arguments)||"").length}(1,2)?function(n){return J(n)?t(K.call(n)):t(n)}:t:function(t){var n,e,r,i,o,l,c;if(i=[],J(t)){for(c=0;c<t.length;c++)i.push(c.toString());return i}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(c=0;c<t.length;c++)i.push(c.toString())}else{if(!1==(r="function"==typeof t)&&!Q(t))return i;e=Z&&r}for(o in t)e&&"prototype"===o||!u(t,o)||i.push(String(o));if($)for(n=function(t){if(!1===xt&&!Ot)return jt(t);try{return jt(t)}catch(t){return!1}}(t),c=0;c<St.length;c++)l=St[c],n&&"constructor"===l||!u(t,l)||i.push(String(l));return i};function Pt(t){return"function"===ht(t)}var Tt,It=Object.getPrototypeOf;Tt=Pt(Object.getPrototypeOf)?It:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===c(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var At=Tt;var Vt=Object.prototype;function kt(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!z(t)}(t)&&(n=function(t){return null==t?null:(t=Object(t),At(t))}(t),!n||!u(t,"constructor")&&u(n,"constructor")&&Pt(n.constructor)&&"[object Function]"===c(n.constructor)&&u(n,"isPrototypeOf")&&Pt(n.isPrototypeOf)&&(n===Vt||function(t){var n;for(n in t)if(!u(t,n))return!1;return!0}(t)))}var Nt=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Bt(){return Nt.slice()}var Ft=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Lt(){return Ft.slice()}function Gt(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Yt(t,n,e){j(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}w(Lt,"enum",Gt),function(t,n){var e,r,i;for(e=Et(n),i=0;i<e.length;i++)Yt(t,r=e[i],n[r])}(Lt,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Ct={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Mt(){return{bool:Ct.bool,int8:Ct.int8,uint8:Ct.uint8,uint8c:Ct.uint8c,int16:Ct.int16,uint16:Ct.uint16,int32:Ct.int32,uint32:Ct.uint32,int64:Ct.int64,uint64:Ct.uint64,float32:Ct.float32,float64:Ct.float64,complex64:Ct.complex64,complex128:Ct.complex128,binary:Ct.binary,generic:Ct.generic,notype:Ct.notype,userdefined_type:Ct.userdefined_type}}w(Bt,"enum",Mt),function(t,n){var e,r,i;for(e=Et(n),i=0;i<e.length;i++)Yt(t,r=e[i],n[r])}(Bt,Mt());var Xt=function(t,n){var e,r,i,o,l,c,f,a=!0;if(!Q(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!kt(n))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+n+"`.");if(u(n,"duplicates")&&!rt(a=n.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+a+"`.")}if(r=(e=Et(t)).length,l={},a)for(f=0;f<r;f++)u(l,o=t[i=e[f]])?(c=l[o],z(c)?l[o].push(i):l[o]=[c,i]):l[o]=i;else for(f=0;f<r;f++)l[t[i=e[f]]]=i;return l}(Mt(),{duplicates:!1});var qt,Ht={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Wt(t){var n=typeof t;return"string"===n?null===function(t){var n=Ht[t];return"number"==typeof n?n:null}(t)?null:t:"number"===n?function(t){var n=Xt[t];return"string"==typeof n?n:null}(t):null}function Dt(t){return 0===arguments.length?{binary:"byte",bool:"boolean",complex64:"single-precision floating-point complex number",complex128:"double-precision floating-point complex number",float16:"half-precision floating-point number",bfloat16:"brain floating-point number",float32:"single-precision floating-point number",float64:"double-precision floating-point number",float128:"quadruple-precision floating-point number",generic:"generic array value",int8:"signed 8-bit integer",int16:"signed 16-bit integer",int32:"signed 32-bit integer",int64:"signed 64-bit integer",int128:"signed 128-bit integer",int256:"signed 256-bit integer",uint8:"unsigned 8-bit integer",uint8c:"unsigned 8-bit integer (clamped)",uint16:"unsigned 16-bit integer",uint32:"unsigned 32-bit integer",uint64:"unsigned 64-bit integer",uint128:"unsigned 128-bit integer",uint256:"unsigned 256-bit integer"}:(void 0===qt&&(qt={binary:"byte",bool:"boolean",complex64:"single-precision floating-point complex number",complex128:"double-precision floating-point complex number",float16:"half-precision floating-point number",bfloat16:"brain floating-point number",float32:"single-precision floating-point number",float64:"double-precision floating-point number",float128:"quadruple-precision floating-point number",generic:"generic array value",int8:"signed 8-bit integer",int16:"signed 16-bit integer",int32:"signed 32-bit integer",int64:"signed 64-bit integer",int128:"signed 128-bit integer",int256:"signed 256-bit integer",uint8:"unsigned 8-bit integer",uint8c:"unsigned 8-bit integer (clamped)",uint16:"unsigned 16-bit integer",uint32:"unsigned 32-bit integer",uint64:"unsigned 64-bit integer",uint128:"unsigned 128-bit integer",uint256:"unsigned 256-bit integer"}),qt[Wt(t)]||null)}export{Dt as default};
//# sourceMappingURL=mod.js.map
