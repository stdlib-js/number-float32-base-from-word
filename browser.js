// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),n=Object.prototype.toString,o=Object.prototype.hasOwnProperty,r="function"==typeof Symbol?Symbol.toStringTag:"",e=t&&"symbol"==typeof Symbol.toStringTag?function(t){var e,f,i,y,a;if(null==t)return n.call(t);f=t[r],a=r,e=null!=(y=t)&&o.call(y,a);try{t[r]=void 0}catch(o){return n.call(t)}return i=n.call(t),e?t[r]=f:delete t[r],i}:function(t){return n.call(t)},f="function"==typeof Uint32Array,i="function"==typeof Uint32Array?Uint32Array:null,y="function"==typeof Uint32Array?Uint32Array:void 0,a=function(){var t,n,o;if("function"!=typeof i)return!1;try{n=new i(n=[1,3.14,-3.14,4294967296,4294967297]),o=n,t=(f&&o instanceof Uint32Array||"[object Uint32Array]"===e(o))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?y:function(){throw new Error("not implemented")},l="function"==typeof Float32Array,u=Number.POSITIVE_INFINITY,c="function"==typeof Float32Array?Float32Array:null,p="function"==typeof Float32Array?Float32Array:void 0,d=function(){var t,n,o;if("function"!=typeof c)return!1;try{n=new c([1,3.14,-3.14,5e40]),o=n,t=(l&&o instanceof Float32Array||"[object Float32Array]"===e(o))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===u}catch(n){t=!1}return t}()?p:function(){throw new Error("not implemented")},b=new a(1),m=new d(b.buffer);return function(t){return b[0]=t,m[0]}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).fromWordf=n();
//# sourceMappingURL=browser.js.map
