/*! art-template@4.4.0 | https://github.com/aui/art-template */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.template=e():t.template=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=22)}([function(t,e,n){"use strict";(function(e){t.exports=!1;try{t.exports="[object process]"===Object.prototype.toString.call(e.process)}catch(t){}}).call(e,n(7))},function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=n(19),i=n(2),s=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"object"===(void 0===e?"undefined":r(e))?n=e:n.source=e,n=i.$extend(n),e=n.source,n.debug&&(n.cache=!1,n.bail=!1,n.minimize=!1,n.compileDebug=!0),n.filename&&(n.filename=n.resolveFilename(n.filename,n));var s=n.onerror,c=n.filename,u=n.cache,a=n.caches;if(u&&c){var l=a.get(c);if(l)return l}if(!e)try{e=n.loader(c,n),n.source=e}catch(t){var f={path:c,name:"CompileError",message:"template not found: "+t.message,stack:t.stack};if(n.bail)throw f;return s(f,n)}var p=new o(n),m=function e(r,o){try{return e.original(r,o)}catch(e){if(!n.compileDebug)return n.cache=!1,n.compileDebug=!0,t(n)(r,o);if(n.bail)throw e;return s(e,n)()}};try{m.original=p.build(),m.map=m.original.map,u&&c&&a.set(c,m)}catch(f){if(n.bail)throw f;return s(f,n)}return m.toString=function(){return m.original.toString()},m};s.Compiler=o,t.exports=s},function(t,e,n){"use strict";var r=n(0),o=n(15),i=n(9),s=n(11),c=n(14),u=n(13),a=n(10),l=n(17),f=n(18),p=n(12),m=n(16),h={source:null,filename:null,rules:[f,l],escape:!0,debug:!!r&&"production"!==process.env.NODE_ENV,bail:!1,cache:!0,minimize:!0,compileDebug:!1,resolveFilename:m,htmlMinifier:p,onerror:o,loader:c,caches:i,root:"/",extname:".art",imports:{$each:a,$escape:s,$include:u}};h.$extend=function(t){var e=Object.create(this);for(var n in t)e[n]=t[n];return e},t.exports=h},function(t,e,n){"use strict";var r={abstract:!0,await:!0,boolean:!0,break:!0,byte:!0,case:!0,catch:!0,char:!0,class:!0,const:!0,continue:!0,debugger:!0,default:!0,delete:!0,do:!0,double:!0,else:!0,enum:!0,export:!0,extends:!0,false:!0,final:!0,finally:!0,float:!0,for:!0,function:!0,goto:!0,if:!0,implements:!0,import:!0,in:!0,instanceof:!0,int:!0,interface:!0,let:!0,long:!0,native:!0,new:!0,null:!0,package:!0,private:!0,protected:!0,public:!0,return:!0,short:!0,static:!0,super:!0,switch:!0,synchronized:!0,this:!0,throw:!0,transient:!0,true:!0,try:!0,typeof:!0,var:!0,void:!0,volatile:!0,while:!0,with:!0,yield:!0};t.exports=function(t){return r.hasOwnProperty(t)}},function(t,e,n){"use strict"},function(t,e,n){"use strict";var r=n(1),o=function(t,e,n){return r(t,n)(e)};t.exports=o},function(t,e,n){"use strict";(function(t){var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){t.noop=function(){}}("object"===e(t)&&"object"===e(t.exports)?t.exports:window)}).call(e,n(8)(t))},function(t,e,n){"use strict";var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"===("undefined"==typeof window?"undefined":o(window))&&(r=window)}t.exports=r},function(t,e,n){"use strict";t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){"use strict";var r={__data:Object.create(null),set:function(t,e){this.__data[t]=e},get:function(t){return this.__data[t]},reset:function(){this.__data={}}};t.exports=r},function(t,e,n){"use strict";var r=function(t,e){if(Array.isArray(t))for(var n=0,r=t.length;n<r;n++)e(t[n],n,t);else for(var o in t)e(t[o],o)};t.exports=r},function(t,e,n){"use strict";var r=function(t){var e={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"};return function t(e){return"string"!=typeof e&&(e="function"==typeof e?t(e.call(e)):null===e?"":JSON.stringify(e)||""),e}(t).replace(/&(?![\w#]+;)|[<>"']/g,function(t){return e[t]})};t.exports=r},function(t,e,n){"use strict";var r=n(0),o=function(t,e){if(r){t=(0,n(6).minify)(t,{collapseWhitespace:!0,minifyCSS:!0,minifyJS:!0,ignoreCustomFragments:e.rules.map(function(t){return t.test})})}return t};t.exports=o},function(t,e,n){"use strict";var r=function(t,e,r,o){var i=n(1);return o=o.$extend({filename:o.resolveFilename(t,o),source:null}),i(o)(e,r)};t.exports=r},function(t,e,n){"use strict";var r=n(0),o=function(t){if(r){return n(4).readFileSync(t,"utf8")}var e=document.getElementById(t);return e.value||e.innerHTML};t.exports=o},function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(t){if("object"===("undefined"==typeof console?"undefined":r(console))){var e=t.stack;delete t.stack,t=JSON.stringify(t,null,4),console.error("Template Error: "+t+"\n\n"+e)}return function(){return"{Template Error}"}};t.exports=o},function(t,e,n){"use strict";var r=n(0),o=function(t,e){if(r){var o=n(4),i=e.root,s=e.extname,c=t!==e.filename&&e.filename,u=c?o.dirname(c):"";return o.extname(t)||(t+=s),o.resolve(i,u,t)}return t};t.exports=o},function(t,e,n){"use strict";var r={test:/{{([@#]?)(\/?)([\w\W]*?)}}/,use:function(t,e,n,r){var i=this,s=i.options,c=i.getEsTokens(r.trim()),u=c.map(function(t){return t.value}),a={},l=void 0,f=!!e&&"raw",p=n+u.shift(),m=function(t,e){console.warn("Template upgrade:","{{"+t+"}}",">>>","{{"+e+"}}","\n",s.filename||"")};switch("#"===e&&m("#value","@value"),p){case"set":r="var "+u.join("");break;case"if":r="if("+u.join("")+"){";break;case"else":var h=u.indexOf("if");h>-1?(u.splice(0,h+1),r="}else if("+u.join("")+"){"):r="}else{";break;case"/if":r="}";break;case"each":l=o(c),l.shift(),"as"===l[1]&&(m("each object as value index","each object value index"),l.splice(1,1));var y=l[0]||"$data",d=l[1]||"$value",v=l[2]||"$index";r="$each("+y+",function("+d+","+v+"){";break;case"/each":r="})";break;case"echo":p="print",m("echo value","value");case"print":case"include":case"extend":l=o(c),l.shift(),r=p+"("+l.join(",")+")";break;case"block":r="block("+u.join("")+",function(){";break;case"/block":r="})";break;default:if(-1!==u.indexOf("|")){for(var b=p,g=[],x=u.filter(function(t){return!/^\s+$/.test(t)});"|"!==x[0];)b+=x.shift();x.filter(function(t){return":"!==t}).forEach(function(t){"|"===t?g.push([]):g[g.length-1].push(t)}),g.reduce(function(t,e){var n=e.shift();return e.unshift(t),r=n+"("+e.join(",")+")"},b)}else s.imports[p]?(m("filterName value","value | filterName"),l=o(c),l.shift(),r=p+"("+l.join(",")+")",f="raw"):r=""+p+u.join("");f||(f="escape")}return a.code=r,a.output=f,a}},o=function(t){for(var e=0,n=t.shift(),r=[[n]];e<t.length;){var o=t[e],i=o.type;"whitespace"!==i&&"comment"!==i&&("punctuator"===n.type&&"]"!==n.value||"punctuator"===i?r[r.length-1].push(o):r.push([o]),n=o),e++}return r.map(function(t){return t.map(function(t){return t.value}).join("")})};r._split=o,t.exports=r},function(t,e,n){"use strict";var r={test:/<%(#?)((?:==|=#|[=-])?)([\w\W]*?)(-?)%>/,use:function(t,e,n,r){var o={"-":"raw","=":"escape","":!1,"==":"raw","=#":"raw"};return e&&(r="//"+r),{code:r,output:o[n]}}};t.exports=r},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=n(3),i=n(20),s=n(21),c="$data",u="$imports",a="print",l="include",f="extend",p="block",m="$$out",h="$$line",y="$$blocks",d="$$from",v="$$layout",b="$$options",g=function(t,e){return t.hasOwnProperty(e)},x=JSON.stringify,w=function(){function t(e){var n,o,i,g=this;r(this,t);var x=e.source,w=e.minimize,k=e.htmlMinifier;if(this.options=e,this.stacks=[],this.context=[],this.scripts=[],this.CONTEXT_MAP={},this.external=(n={},n[c]=!0,n[u]=!0,n[b]=!0,n),this.internal=(o={},o[m]="''",o[h]="[0,0,'']",o[y]="arguments[1]||{}",o[d]="null",o[v]="function(){return "+u+".$include("+d+","+c+","+y+","+b+")}",o[a]="function(){"+m+"+=''.concat.apply('',arguments)}",o[l]="function(src,data,block){"+m+"+="+u+".$include(src,data||"+c+",block,"+b+")}",o[f]="function(from){"+d+"=from}",o[p]="function(name,callback){if("+d+"){"+m+"='';callback();"+y+"[name]="+m+"}else{if(typeof "+y+"[name]==='string'){"+m+"+="+y+"[name]}else{callback()}}}",o),this.dependencies=(i={},i[a]=[m],i[l]=[m,u,c,b],i[f]=[d,v],i[p]=[d,m,y],i[v]=[u,d,c,y,b],i),this.importContext(m),e.compileDebug&&this.importContext(h),w)try{x=k(x,e)}catch(t){}this.getTplTokens(x,e.rules,this).forEach(function(t){t.type===s.TYPE_STRING?g.parseString(t):g.parseExpression(t)})}return t.prototype.getTplTokens=function(){return s.apply(void 0,arguments)},t.prototype.getEsTokens=function(t){return i(t)},t.prototype.getVariables=function(t){var e=!1;return t.filter(function(t){return"whitespace"!==t.type&&"comment"!==t.type}).filter(function(t){return"name"===t.type&&!e||(e="punctuator"===t.type&&"."===t.value,!1)}).map(function(t){return t.value})},t.prototype.importContext=function(t){var e=this,n="",r=this.internal,i=this.dependencies,s=this.external,a=this.context,l=this.options,f=l.imports,p=this.CONTEXT_MAP;g(p,t)||g(s,t)||o(t)||(g(r,t)?(n=r[t],g(i,t)&&i[t].forEach(function(t){return e.importContext(t)})):n=g(f,t)?u+"."+t:c+"."+t,p[t]=n,a.push({name:t,value:n}))},t.prototype.parseString=function(t){var e=t.value;if(e){var n=m+"+="+x(e);this.scripts.push({source:e,tplToken:t,code:n})}},t.prototype.parseExpression=function(t){var e=this,n=t.value,r=t.script,o=r.output,i=r.code.trim();o&&(i=!1===escape||o===s.TYPE_RAW?m+"+="+r.code:m+"+=$escape("+r.code+")");var c=this.getEsTokens(i);this.getVariables(c).forEach(function(t){return e.importContext(t)}),this.scripts.push({source:n,tplToken:t,code:i})},t.prototype.checkExpression=function(t){for(var e=[[/^\s*?}.*?{?[\s;]*?$/,""],[/(^[\w\W]*?\s*?function\s*?\([\w\W]*?\)\s*?{[\s;]*?$)/,"$1})"],[/(^.*?\(\s*?[\w\W]*?=>\s*?{[\s;]*?$)/,"$1})"],[/(^[\w\W]*?\([\w\W]*?\)\s*?{[\s;]*?$)/,"$1}"]],n=0;n<e.length;){if(e[n][0].test(t)){var r;t=(r=t).replace.apply(r,e[n]);break}n++}try{return new Function(t),!0}catch(t){return!1}},t.prototype.build=function(){var t=this.options,e=this.context,n=this.scripts,r=this.stacks,o=t.source,i=t.filename,s=t.imports,a=[],l=g(this.CONTEXT_MAP,f),p=function(t,e){return a.push({generated:{line:t,start:0},original:{line:e.tplToken.line,start:e.tplToken.start}}),e.code};r.push("function("+c+"){"),r.push("'use strict'"),r.push("var "+e.map(function(t){return t.name+"="+t.value}).join(",")),t.compileDebug?(r.push("try{"),n.forEach(function(t){r.push(h+"=["+[t.tplToken.line,t.tplToken.start,x(t.source)].join(",")+"]"),r.push(p(r.length,t))}),r.push("}catch(error){"),r.push("throw {"+["path:"+x(i),"name:'RuntimeError'","message:error.message","line:"+h+"[0]+1","start:"+h+"[1]+1","source:"+h+"[2]","stack:error.stack"].join(",")+"}"),r.push("}")):n.forEach(function(t){r.push(p(r.length,t))}),r.push(l?"return "+v+"()":"return "+m),r.push("}");var y=r.join("\n");try{var d=new Function(u,b,"return "+y)(s,t);return d.map=a,d}catch(t){for(var w=0,k=0,S=0,$=o;w<n.length;){var E=n[w];if(!this.checkExpression(E.code)){$=E.source,k=E.tplToken.line,S=E.tplToken.start;break}w++}throw{path:i,name:"CompileError",message:t.message,line:k+1,start:S+1,source:$,script:y,stack:t.stack}}},t}();w.CONSTS={DATA:c,IMPORTS:u,PRINT:a,INCLUDE:l,EXTEND:f,BLOCK:p,OPTIONS:b,OUT:m,LINE:h,BLOCKS:y,FROM:d,LAYOUT:v,ESCAPE:"$escape"},t.exports=w},function(t,e,n){"use strict";var r=n(3),o=/((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyu]{1,5}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g,i=function(t){var e={type:"invalid",value:t[0]};return t[1]?(e.type="string",e.closed=!(!t[3]&&!t[4])):t[5]?e.type="comment":t[6]?(e.type="comment",e.closed=!!t[7]):t[8]?e.type="regex":t[9]?e.type="number":t[10]?e.type="name":t[11]?e.type="punctuator":t[12]&&(e.type="whitespace"),e},s=function(t){return t.match(o).map(function(t){return o.lastIndex=0,i(o.exec(t))}).map(function(t){return"name"===t.type&&r(t.value)&&(t.type="keyword"),t})};t.exports=s},function(t,e,n){"use strict";var r=function(t,e,n){for(var r=[{type:"string",value:t,line:0,start:0,end:t.length}],o=0;o<e.length;o++)!function(t){for(var e=t.test.ignoreCase?"ig":"g",o=t.test.source+"|^$|[\\w\\W]",i=new RegExp(o,e),s=0;s<r.length;s++)if("string"===r[s].type){for(var c=r[s].line,u=r[s].start,a=r[s].end,l=r[s].value.match(i),f=[],p=0;p<l.length;p++){var m=l[p];t.test.lastIndex=0;var h=t.test.exec(m),y=h?"expression":"string",d=f[f.length-1],v=d||r[s],b=v.value;u=v.line===c?d?d.end:u:b.length-b.lastIndexOf("\n")-1,a=u+m.length;var g={type:y,value:m,line:c,start:u,end:a};if("string"===y)d&&"string"===d.type?(d.value+=m,d.end+=m.length):f.push(g);else{var x=t.use.apply(n,h);g.script=x,f.push(g)}c+=m.split(/\n/).length-1}r.splice.apply(r,[s,1].concat(f)),s+=f.length-1}}(e[o]);return r};r.TYPE_STRING="string",r.TYPE_EXPRESSION="expression",r.TYPE_RAW="raw",r.TYPE_ESCAPE="escape",t.exports=r},function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=n(5),i=n(1),s=n(2),c=function(t,e){return"object"===(void 0===e?"undefined":r(e))?o({filename:t},e):i({filename:t,source:e})};c.render=o,c.compile=i,c.defaults=s,t.exports=c}])});
