parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n=document.querySelector("#html"),r=document.querySelector("#style"),a="\n/*你好，我是一名前端新人，\n*接下来我要演示一下我的前端功底，\n*首先我要准备一个div\n*/\n#div1{\n  border: 1px solid red;\n  width:200px;\n  height:200px;\n}\n/*接下来我要把div变成一个八卦图\n*首先把div画成一个圆\n*/\n#div1{\n  border-radius: 50%;\n  box-shoadow:0 0 3px rgba(0,0,0,0.5);\n  border: none;\n}\n/*然后画八卦里的阴阳图\n*一黑一白谓之阴阳\n*/\n#div1{\n  background: rgb(255,255,255);\n  background: linear-gradient(90deg, rgba(255,255,255,1) 0%,   rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1)     100%);\n}\n/*再添加上下两个勾玉*/\n #div1::before{\n  width: 100px;\n  height: 100px;\n  left:50%;\n  top:0;\n  background:#000;\n  border-radius: 50%; \n  transform:translateX(-50%);\n  background: rgb(0,0,0);\n  background: rgb(255,255,255);\n  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n}\n #div1::after{\n  width: 100px;\n  height: 100px;\n  left:50%;\n  bottom:0;\n  background:#fff;\n  border-radius: 50%;\n  transform:translateX(-50%);\n  background: rgb(0,0,0);\n  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);\n}\n\n",d="",e=0;n.innerHTML=a.substring(0,e);var b=function b(){setTimeout(function(){"\n"===a[e+=1]?d+="<br>":" "===a[e]?d+="&nbsp":d+=a[e],n.innerHTML=d,r.innerHTML=a.substring(0,e),window.scrollTo(0,9999),n.scrollTo(0,9999),e<a.length-1&&b()},10)};b();
},{}]},{},["epB2"], null)
//# sourceMappingURL=dist/main.6a489f4a.js.map