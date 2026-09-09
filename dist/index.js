"use strict";var t=function(e,i){return function(){try{return i||e((i={exports:{}}).exports,i),i.exports}catch(s){throw (i=0, s)}};};var o=t(function(f,r){
function a(){return{binary:"byte",bool:"boolean",complex32:"half-precision floating-point complex number",complex64:"single-precision floating-point complex number",complex128:"double-precision floating-point complex number",float16:"half-precision floating-point number",bfloat16:"brain floating-point number",float32:"single-precision floating-point number",float64:"double-precision floating-point number",float128:"quadruple-precision floating-point number",generic:"generic array value",int8:"signed 8-bit integer",int16:"signed 16-bit integer",int32:"signed 32-bit integer",int64:"signed 64-bit integer",int128:"signed 128-bit integer",int256:"signed 256-bit integer",uint8:"unsigned 8-bit integer",uint8c:"unsigned 8-bit integer (clamped)",uint16:"unsigned 16-bit integer",uint32:"unsigned 32-bit integer",uint64:"unsigned 64-bit integer",uint128:"unsigned 128-bit integer",uint256:"unsigned 256-bit integer"}}r.exports=a
});var l=t(function(m,u){
var b=require('@stdlib/ndarray-base-dtype-resolve-str/dist'),g=o(),n;function p(e){return arguments.length===0?g():(n===void 0&&(n=g()),n[b(e)]||null)}u.exports=p
});var c=l();module.exports=c;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
