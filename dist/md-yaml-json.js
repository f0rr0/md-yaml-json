module.exports=function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,e,n){Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=5)}([function(t,e){t.exports=require("fs")},function(t,e){t.exports=require("marked")},function(t,e){t.exports=require("path")},function(t,e){t.exports=require("util")},function(t,e){t.exports=require("yaml-front-matter")},function(t,e,n){"use strict";function r(t,e={}){const r=n.i(o.readFileSync)(t),i=n.i(o.statSync)(t),a=n.i(s.loadFront)(r);a.stub=n.i(c.basename)(t,n.i(c.extname)(t)),a.mtime=new Date(n.i(u.inspect)(i.mtime)),a.birthtime=new Date(n.i(u.inspect)(i.birthtime));const p=f()(a.__content,e);return delete a.__content,{meta:a,html:p}}function i(t,e={}){const i=n.i(o.readdirSync)(t).filter(t=>t.endsWith(".md")||t.endsWith(".markdown")||t.endsWith(".MD")).map(e=>t.concat(`/${e}`)),u=i.map(t=>r(t,e));return u}var o=n(0),u=(n.n(o),n(3)),c=(n.n(u),n(2)),s=(n.n(c),n(4)),a=(n.n(s),n(1)),f=n.n(a);e.processFile=r,e.default=i;const p=!0;e.__esModule=p}]);
//# sourceMappingURL=./dist/md-yaml-json.js.map