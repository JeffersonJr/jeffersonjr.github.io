!function(){var t,m=void 0,f=!0,b=null,v=!1,g=this;function e(t,e){function n(){}n.prototype=e.prototype,t.M=e.prototype,t.prototype=new n,t.prototype.constructor=t}function p(){}function l(t,e,n){switch(typeof e){case"string":r(e,n);break;case"number":n.push(isFinite(e)&&!isNaN(e)?e:"null");break;case"boolean":n.push(e);break;case"undefined":n.push("null");break;case"object":if(e==b){n.push("null");break}if("array"==function(t){var e=typeof t;if("object"==e){if(!t)return"null";if(t instanceof Array)return"array";if(t instanceof Object)return e;var n=Object.prototype.toString.call(t);if("[object Window]"==n)return"object";if("[object Array]"==n||"number"==typeof t.length&&void 0!==t.splice&&void 0!==t.propertyIsEnumerable&&!t.propertyIsEnumerable("splice"))return"array";if("[object Function]"==n||void 0!==t.call&&void 0!==t.propertyIsEnumerable&&!t.propertyIsEnumerable("call"))return"function"}else if("function"==e&&void 0===t.call)return"object";return e}(e)){var i=e.length;n.push("[");for(var a="",o=0;o<i;o++)n.push(a),l(t,e[o],n),a=",";n.push("]");break}for(a in n.push("{"),i="",e)Object.prototype.hasOwnProperty.call(e,a)&&("function"!=typeof(o=e[a])&&(n.push(i),r(a,n),n.push(":"),l(t,o,n),i=","));n.push("}");break;case"function":break;default:throw Error("Unknown type: "+typeof e)}}var i={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},n=/\uffff/.test("￿")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function r(t,e){e.push('"',t.replace(n,function(t){if(t in i)return i[t];var e=t.charCodeAt(0),n="\\u";return e<16?n+="000":e<256?n+="00":e<4096&&(n+="0"),i[t]=n+e.toString(16)}),'"')}var a={scroll:5e3,keydown:5e3,mousemove:5e3,resize:5e3,mousedown:5e3,focus:5e3,pageload:5e3};function u(t,e){var n="",i=function(t){t+=String.fromCharCode(128);for(var e,n,i,a,o,r,s=[1518500249,1859775393,2400959708,3395469782],h=1732584193,c=4023233417,u=2562383102,f=271733878,p=3285377520,l=[],d=Math.ceil((t.length/4+2)/16),m=[d],b=0;b<d;b++)for(m[b]=[],e=0;e<16;e++)m[b][e]=t.charCodeAt(64*b+4*e)<<24|t.charCodeAt(64*b+4*e+1)<<16|t.charCodeAt(64*b+4*e+2)<<8|t.charCodeAt(64*b+4*e+3);for(b=8*(t.length-1),m[t=d-1][14]=Math.floor(b/Math.pow(2,32)),m[t][15]=4294967295&b,b=0;b<d;b++){for(r=0;r<16;r++)l[r]=m[b][r];for(r=16;r<80;r++)l[r]=(l[r-3]^l[r-8]^l[r-14]^l[r-16])<<1|(l[r-3]^l[r-8]^l[r-14]^l[r-16])>>>31;for(t=h,e=c,n=u,i=f,a=p,r=0;r<80;r++)o=Math.floor(r/20),o=(t<<5|t>>>27)+(0==o?e&n^~e&i:1==o?e^n^i:2==o?e&n^e&i^n&i:e^n^i)+a+s[o]+l[r]&4294967295,a=i,i=n,n=e<<30|e>>>2,e=t,t=o;h=h+t&4294967295,c=c+e&4294967295,u=u+n&4294967295,f=f+i&4294967295,p=p+a&4294967295}return[h,c,u,f,p]}(encodeURIComponent(t));return i.splice(e||5,i.length),P(i,function(t){if(0==t)t="A";else{t>>>=0;for(var e="";0<t;)e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-".charAt(t%64)+e,t>>>=6;t=e}n+=t}),n}function o(t){var e=g.navigator,n=g.window.screen,i=[e.userAgent,e.platform,(new Date).getTimezoneOffset(),n.width+n.height+n.colorDepth];return P(e.plugins,function(t){i.push(t.name+t.description+t.filename+t[0].type)}),e=g.performance,(i=i.concat([e&&e.now?e.now():"",document.title,g.location.href,T(),function(){for(var t="",e=0;e<16;e++)t+=Math.random();return t}()])).concat(t||[]).join()}function s(t,e,n){var i=Array.prototype.slice,a=i.call(arguments,2);return function(){return t.apply(e,a.concat(i.call(arguments)))}}function d(t){return void 0!==t}function h(t){return t&&t.replace(/^www\./,"")}var c=/^((https?\:)?(\/\/))/i;function y(t){return t&&t.replace(c,"")}var _=/^((https?\:)?(\/\/))?[^\/]*/;function C(t){return t.replace(_,"")}var w=/\#.*/;function E(t){return t.replace(w,"")}var I=/\?[^\#]*/;function k(t){return t.toLowerCase()}var S,U=/\/+((\?|\#).*)?$/;function x(t){return t.replace(U,"$1")}function R(t){return t&&t.replace(I,"")}function A(t){var e,n,i=t.match(/\?(.*)$/gi)?t.match(/\?(.*)$/gi)[0].slice(1).replace(/#(.*)?/gi,"").split("&"):[],a=t.match(/#(.*)$/gi)?t.match(/#(.*)$/gi)[0]:"";t=t.match(/[#|\?](.*)?/gi)?t.slice(0,t.search(/[#|\?](.*)?/gi)):t;return 0<(i=(e=function(t){return 0!==t.search("utm")},n=[],P(i,function(t){e(t)&&n.push(t)}),n)).length&&(t+="?"+i.join("&")),t+a}function L(t,e,n,i){t.addEventListener?t.addEventListener(e,n,!!i):t.attachEvent&&t.attachEvent("on"+e,n)}function O(t,e){var n=g;n.removeEventListener?n.removeEventListener(t,e,v):n.detachEvent&&n.detachEvent("on"+t,e)}function j(t){return"number"==typeof t}function D(t){return"string"==typeof t}function M(t){return t=new Date(+t),Date.UTC(t.getFullYear(),t.getMonth(),t.getDate())}function T(){return(new Date).getTime()}function F(){return"https:"===g.location.protocol?"https:":"https:"}function N(t){return!!t&&t.constructor===Object}function P(t,e){if(N(t)===f){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n],n)===v)break}else{n=0;for(var i=t.length;n<i&&e(t[n],n)!==v;n++);}}function q(t,e){for(var n=0,i=t.length;n<i;n++)if(e(t[n]))return n;return-1}function B(){}var H=g.setInterval,Y=g.clearInterval,G=g.setTimeout,$=g.clearTimeout;function z(t){switch(t){case m:return"undefined";case"":return"empty";default:return t}}function J(t){var e={};return t&&("?"==t.charAt(0)&&(t=t.substring(1)),P((t=t.replace(/\+/g," ")).split(/[&;]/g),function(t){t=t.split("="),e[decodeURIComponent(t[0])]=decodeURIComponent(t[1])})),e}function Q(t,e){var n="";if(i=g.location.href.match(/[^?]+[?]([^#]+).*/)){var i,a=e||t;(i=J(i[1]))[a]&&(n=i[a])}return encodeURIComponent(n)}function X(t,e){return e?"https:"===t&&"80"===e||"https:"===t&&"443"===e:f}function Z(t){var e={hostname:"",pathname:"",search:"",protocol:"",port:"",hash:""};if(!t)return e;var n=document.createElement("a"),i=g.location;if(!/^https?:/.test(t)&&0!==t.indexOf("javascript:")&&t.indexOf("app:")<0)if(0===t.indexOf("//"))t=i.protocol+t;else if(0===t.indexOf("/")){var a=X(i.protocol,i.port)?"":i.port;t=i.protocol+"//"+i.hostname+(a?":"+a:"")+t}else{var o=(a=document.baseURI||i.href).indexOf("?");-1===o&&(o=a.indexOf("#")),-1===o&&(o=a.length),t=-1===(o=a.lastIndexOf("/",o))?"/"+t:a.substr(0,o)+"/"+t}return n.href=t,e.hostname=n.hostname,e.pathname=n.pathname,e.search=n.search,e.protocol=n.protocol,e.port=n.port,e.hash=n.hash,"/"!==e.pathname.charAt(0)&&(e.pathname="/"+e.pathname),""===e.hostname&&(e.hostname=i.hostname),""===e.protocol&&(e.protocol=i.protocol),"javascript:"===e.protocol&&(e.pathname="",e.hostname="",e.port="",e.hash=""),!X(e.protocol,e.port)&&"0"!==e.port||(e.port=""),e}function K(t){var e=t.protocol;return t.hostname&&(e+="//"+t.hostname,t.port&&(e+=":"+t.port)),e+t.pathname+t.search+t.hash}function W(t,e,n,i){if(e=e||"*","querySelectorAll"in(n=n||document))return n.querySelectorAll(e+"["+t+(i?'="'+i+'"':"")+"]");for(var a=[],o=(n=(e=n.getElementsByTagName(e)).length,"");n--;)!(o=e[n].getAttribute(t))||i&&o!==i||a.push(e[n]);return a}function V(t,e,n){return t="page"+t+"Offset",e="scroll"+e,(n=n&&W("data-cb-scroll-element"))&&n.length?n[0][e]:j(g[t])?g[t]:document.body&&document.body[e]?document.body[e]:document.documentElement[e]?document.documentElement[e]:0}function tt(t){var e=(e=document)["CSS1Compat"===e.compatMode?"documentElement":"body"]["client"+t]||0;return window["inner"+t]&&(e=Math.min(window["inner"+t],e)),e}function et(t){return t="scroll"+t,Math.max(document.body[t],document.documentElement[t])||0}function nt(t,e,n){if(t.ownerDocument||(t=t.correspondingUseElement),!t||!t.ownerDocument)return b;var i=t.ownerDocument.documentElement,a=0,o=d(n)?n+1:-1;for(n=D(e)?(e=e.toLowerCase(),function(t){return(t=t.nodeName)&&t.toLowerCase()===e}):e;t&&t!==i&&a!==o;){if(n(t))return t;t=t.parentNode,a++}return b}function it(t){return t.nodeName&&"a"===t.nodeName.toLowerCase()&&(!t.namespaceURI||"https://www.w3.org/1999/xhtml"===t.namespaceURI)}function at(t){return(t=t||window.event)?nt(t.target||t.srcElement,it,10):b}function ot(t,e){var n=document.createElement(t);return P(e,function(t,e){n.setAttribute(e,t)}),n}function rt(){return"complete"===g.document.readyState||"loading"!==g.document.readyState&&!g.document.documentElement.doScroll}function st(t){function e(){!g.document.addEventListener&&"load"!==g.event.type&&"complete"!==g.document.readyState||(g.document.addEventListener?(g.document.removeEventListener("DOMContentLoaded",e,v),g.removeEventListener("load",e,v)):(g.document.detachEvent("onreadystatechange",e),g.detachEvent("onload",e)),t())}rt()?t():g.document.addEventListener?(g.document.addEventListener("DOMContentLoaded",e,v),g.addEventListener("load",e,v)):(g.document.attachEvent("onreadystatechange",e),g.attachEvent("onload",e))}function ht(){this.G={},this.Za=1}function ct(t,e,n,i){return t.Za++,t.G[e]=t.G[e]||{},t.G[e][t.Za]=[n,i],t.Za}function ut(t,i){if(D(i))t.G[i]=m,delete t.G[i];else if(j(i)){var a=f;P(t.G,function(n){return P(n,function(t,e){if(parseInt(e,10)===i)return n[e]=m,delete n[e],a=v}),a})}}ht.prototype.Q=function(t,e){if(this.G[t]){var n=1<arguments.length?Array.prototype.slice.call(arguments,1):[];P(this.G[t],function(t){var e;t&&2===t.length&&(e=t[0],t=t[1],e.apply(t,n))})}},ht.prototype.addEventListener=function(t,e){var n=ct(this,t,e);e._cbEventId=n},ht.prototype.removeEventListener=function(t,e){this.G[t]&&this.G[t][e._cbEventId]&&this.G[t][e._cbEventId][0]===e&&ut(this,e._cbEventId)};var ft,pt,lt,dt,mt,bt,vt,gt=new ht,yt={};yt.D=function(){yt.Ka?yt.va("pageload"):(yt.Bb=[{target:g,event:"scroll"},{target:document.body,event:"keydown"},{target:document.body,event:"mousemove"},{target:g,event:"resize"},{target:document.body,event:"mousedown"}],yt.Ca=b,yt.aa=b,yt.Ja={},yt.mb={},P(yt.Bb,function(t){var e=t.event;L(t.target,e,function(t){yt.va.call(yt,e,t)})}),ct(gt,"f",function(){yt.va("focus")}),yt.va("pageload"),L(document.body,"click",function(t){(t=at(t))&&gt.Q("c",t)},f),L(document.body,"contextmenu",function(t){(t=at(t))&&gt.Q("r",t)}),yt.Ka=f)},yt.Gb=function(){var t=yt.mb.keydown;return t===m?v:(t=T()-t)<=15e3&&0<=t},yt.bb=100,yt.va=function(t,e){if((e=e||window.event)&&"keydown"===t){var n=e.keyCode?e.keyCode:e.which;(32===n||36<n&&n<41)&&(t="scroll")}yt.qc(t),yt.Ca===b?yt.vb(t):(!yt.aa||a[yt.aa]<a[t])&&(yt.aa=t)},yt.qc=function(t){yt.mb[t]=T()},yt.vb=function(t){yt.Ca=G(yt.Lb,yt.bb),gt.Q("a"),yt.Ja[t]!==b&&$(yt.Ja[t]),yt.gc(t)},yt.gc=function(e){var n=yt.Ja;n[e]=G(function(){$(n[e]),delete n[e];var t=v;P(n,function(){return t=f,v}),t||gt.Q("i")},a[e]+yt.bb)},yt.Lb=function(){$(yt.Ca),yt.Ca=b,yt.aa&&(yt.vb(yt.aa),yt.aa=b)},P(["","moz","o","ms","webkit"],function(t){if(bt=(t+"Hidden").charAt(0).toLowerCase()+(t+"Hidden").slice(1),"boolean"==typeof g.document[bt])return vt=t,v}),vt!==m&&(dt=bt,mt=(vt+"VisibilityState").charAt(0).toLowerCase()+(vt+"VisibilityState").slice(1),lt=vt+"visibilitychange");var _t=v;function Ct(){_t=mt&&"prerender"===g.document[mt]?f:v}function wt(){pt=f,gt.Q("f")}function Et(){pt=v,gt.Q("b")}function It(t,e,n){g.addEventListener?g.addEventListener(t,n,v):g.document.attachEvent&&g.document.attachEvent(e,n)}function kt(){var t=f;g.document.hasFocus&&(t=g.document.hasFocus());var e=v;return dt&&(e=g.document[dt]),t&&!e}function St(){(kt()?wt:Et)()}function Ut(){this.a=g._sf_async_config||{},this.hb=s(this.qb,this)}Ut.prototype.D=function(){this.ja=0},Ut.prototype.qb=function(){},Ut.prototype.za=function(t){if(!_t){var e,n=this.hb;e=new Image(1,1),n&&(e.onerror=n),e.src=t}},Ut.prototype.oa=function(){this.hb=b};var xt="path",Rt="domain",At="useCanonical",Lt="useCanonicalDomain",Ot="title",jt="virtualReferrer";function Dt(t,e,n){t[e]=t[e]||n}function Mt(t,e){for(var n=g[t]||[];n.length;)e(n.shift());g[t]={push:e}}function Tt(e){P(document.getElementsByTagName("script"),function(t){if("string"==typeof t.src&&t.src.match(/chartbeat.js/))return t=J(t.src.split("?")[1]),Dt(e,"uid",t.uid),Dt(e,Rt,t.domain),v})}function Ft(t,e){return t[e]?encodeURIComponent(t[e]):""}var Nt={Jb:function(t){try{Nt.create("_cb_test","1",1,t);var e=Nt.k("_cb_test");return Nt.remove("_cb_test",t),"1"===e}catch(t){return v}},k:function(e){e+="=";var n="";return P(document.cookie.split(";"),function(t){for(;" "===t.charAt(0);)t=t.substring(1,t.length);if(0===t.indexOf(e))return n=t.substring(e.length,t.length),v}),n},create:function(t,e,n,i){var a=g._sf_async_config;return a&&a.noCookies?"":((a=new Date).setTime(T()+1e3*n),t=t+"="+e+"; expires="+a.toGMTString()+"; path="+i,document.cookie=t)},remove:function(t,e){return Nt.k(t)?Nt.create(t,"",-86400,e):""}},Pt={};function qt(t,e){this.ya=t||"",this.N=e||"/",this.Mb=Pt.B()!==b||Nt.Jb(this.N),this.Ya=v,function(e){if(!Nt.k("_cb_ls")){var t=Pt.B()!==b,n=Nt.k("_SUPERFLY_lockout");n&&P(["","_v_","_p_"],function(t){e.create(t+"_SUPERFLY_lockout",n,600,f)});var i=Nt.k("_chartbeat3");i&&(e.create("_v__chartbeat3",i,34128e3,f),Nt.remove("_chartbeat3",e.N)),t&&((t=Nt.k("_chartbeat2"))&&e.create("_chartbeat2",t,34128e3,f),(t=Nt.k("_chartbeat5"))&&e.create("_chartbeat5",t,60,f)),Nt.create("_cb_ls","1",34128e3,e.N)}}(this)}function Bt(t){var e=b;if(t&&(e=(e=Yt())?Jt(e.pathname)+e.search+e.hash:e))return e;var n=g.location,i=(e=Jt(n.pathname),t=(t=n.search||"").replace(/PHPSESSID=[^&]+/,""),/&utm_[^=]+=[^&]+/gi);return(n=i.exec(n.search))&&(t=t.replace(i,"")),(n=(i=/\?utm_[^=]+=[^&]+(.*)/i).exec(t))&&(t=t.replace(i,""!=n[1]?"?"+n[1]:"")),e+t}function Ht(t){return t&&(t=(t=Yt())?t.hostname:t)?t:g.location.hostname}function Yt(){var e,t=(e=b,P(document.getElementsByTagName("link"),function(t){if("canonical"==t.rel)return e=t,v}),e);return t?Z(t.href):t}Pt.B=function(t){var e=g._sf_async_config;if(!t&&e&&e.noCookies)return b;if(Pt.B.Ga!==m)return Pt.B.Ga;var n,i;t=T()+"";try{if((i=g.localStorage).setItem(t,t),n=i.getItem(t)===t,i.removeItem(t),n)return Pt.B.Ga=i}catch(t){}return Pt.B.Ga=b},Pt.k=function(t){var e=Pt.B();if(!e)return"";var n=e.getItem(t+"_expires");return n&&(n=+n,!isNaN(n)&&T()>n)?(Pt.remove(t),""):e.getItem(t)||""},Pt.create=function(t,e,n){var i=Pt.B();if(i){var a=new Date;a.setTime(T()+1e3*n);try{i.setItem(t,e),i.setItem(t+"_expires",a.getTime())}catch(t){}}},Pt.remove=function(t){var e=Pt.B();e&&(e.removeItem(t),e.removeItem(t+"_expires"))},(t=qt.prototype).isSupported=function(){return this.Mb},t.create=function(t,e,n,i){t=i?t:this.ya+t,(Pt.B()?Pt:Nt).create(t,e,n,this.N),Pt.B()&&Nt.create(t,e,n,this.N)},t.update=function(t,e,n,i,a,o,r){if(t=i?t:this.ya+t,a=D(a)?a:"::",i=(i=this.k(t,f))?i.split(a):[],r&&i.length){var s=r(e),h=q(i,function(t){return r(t)===s});-1!==h&&i.splice(h,1)}for(i.push(e),j(o)&&i.length>o&&i.splice(0,i.length-o);1<i.length&&4e3<i.join(a).length;)i.shift();this.create(t,i.join(a),n,f)},t.k=function(t,e){t=e?t:this.ya+t;var n=(Pt.B()?Pt:Nt).k(t);if(!n&&Pt.B()&&(n=Nt.k(t))&&Nt.k("_cb_ls")){var i;switch(this.Ya=f,t){case"_SUPERFLY_lockout":i=600;break;case"_chartbeat4":case"_cb_cp":i=60;break;case"_chartbeat3":i=34128e3;break;default:i=34128e3}Pt.create(t,n,i)}return n},t.remove=function(t,e){t=e?t:this.ya+t,(Pt.B()?Pt:Nt).remove(t,this.N),Pt.B()&&Nt.remove(t,this.N)};for(var Gt={},$t=0;$t<81;$t++)Gt["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=:@[]".charCodeAt($t)]=f;function zt(t,e){if("%"===t)return"%25";var n=parseInt(e,16);return Gt[n]?String.fromCharCode(n):"%"+e.toUpperCase()}function Jt(t){return D(t)?(t=t.replace(/%([0-9A-Fa-f]{2})?/g,zt)).replace(/[^0-9A-Za-z\-._~!$&'()*+,;=:@\/\[\]?#%]+/g,encodeURIComponent):t}function Qt(t,e){var n=Xt();return d(e)&&!d(n[t])?e:n[t]}function Xt(){return d(g._cb_shared)||(g._cb_shared={}),g._cb_shared}var Zt={Db:{IDLE:0,Bc:1,uc:2,Cb:3},J:0};function Kt(t,e){this.Ia=t||m,this.Oa=e||m,this.fa=this.ca=0,this.Yb=s(this.Zb,this),this.xb=this.ba=b}function Wt(){var t;Ut.call(this),this.S=[],this.q=new qt(this.lc,this.a.cookiePath||"/"),this.q.remove("_SUPERFLY_nosample"),this.F=new Kt,this.Qa=s(this.xa,this),L(g,"unload",this.Qa),this.ta=v,t=s(this.D,this),st(function(){!function(t){if(Ct(),_t){var e=v,n=function(){e||(Ct(),_t||(e=f,t(),g.window.setTimeout(function(){g.document.removeEventListener(lt,n,v)},100)))};g.document.addEventListener(lt,n,v)}else t()}(t)})}function Vt(t){return Math.floor(V("Y","Top",!!t.a.scrollElement))}function te(t){var e=(e=t.U)?Math.min(2*e,16):1;t.U=e}function ee(t){return t.a[jt]?f:ne(t)?v:-1!=(t=document.referrer.indexOf("://"+g.location.hostname+"/"))&&t<9}function ne(t){var e=t.a.referrerOverrideQueryParam,n="";return P(window.location.search.substr(1).split("&"),function(t){if(2==(t=t.split("=")).length&&t[0]==e&&t[1])return n=decodeURIComponent(t[1]).replace(/\+/g," "),v}),n&&-1==n.indexOf("::")&&(n="external::"+n),n}function ie(t){if(!(t=t.a[jt]||ne(t))&&(t=document.referrer||"")&&!/^(android-)?app:/.test(t)){var e=Z(t);"https:"!==e.protocol&&"https:"!==e.protocol||(e.pathname=Jt(e.pathname),t=K(e))}return encodeURIComponent(t)}function ae(t){return t=t.a[Ot].slice(0,100),encodeURIComponent(t)}function oe(t){return o(t=[ie(t),et("Width"),et("Height")])}function re(t){return"null"===(t=t.q.k("_cb_svref",f)||ie(t)||"null")&&(t=""),t.substr(0,128).replace(/%.?$/,"")}function se(t){return(t=t.match(/^https?:\/\/([^\/]*)/))?t[1]:b}function he(){if(!(e=g.performance&&g.performance.timing)||0==e.navigationStart)return-1;var t=e.navigationStart,e=e.loadEventStart;return j(t)&&t?j(e)&&t<e?e-t:T()-t:-1}function ce(e,t){var n,i,a={};return g.getComputedStyle?n=g.getComputedStyle(e,b):e.currentStyle?i="currentStyle":e.style&&(i="style"),P(t,function(t){a[t]=n?n[t]||n.getPropertyValue(t):e[i][t]}),a}Zt.D=function(){Zt.Ka||(ct(gt,"a",Zt.Sb,Zt),ct(gt,"i",Zt.Vb,Zt),ct(gt,"f",Zt.Ub,Zt),ct(gt,"b",Zt.Tb,Zt),Zt.Ka=f)},Zt.Qb=function(){return Zt.J},Zt.Sb=function(){1===Zt.J?Zt.P(3):0===Zt.J&&Zt.P(2)},Zt.Vb=function(){3===Zt.J?Zt.P(1):2===Zt.J&&Zt.P(0)},Zt.Ub=function(){0!==Zt.J&&2!==Zt.J||Zt.P(3)},Zt.Tb=function(){3===Zt.J?Zt.P(2):1===Zt.J&&Zt.P(0)},Zt.P=function(t){Zt.J=t,gt.Q("s",t)},(t=Kt.prototype).D=function(){this.fa=this.ca=0,this.ba=b,this.xb=ct(gt,"s",this.kb,this),this.kb(Zt.Qb())},t.kb=function(t){Y(this.ba),this.ba=b,t===Zt.Db.Cb&&(this.ba=H(this.Yb,1e3))},t.Zb=function(){this.Ia!==m&&!this.Ia()||(this.ca++,this.fa++,this.Oa&&this.Oa())},t.terminate=function(){Y(this.ba),this.ba=b,ut(gt,this.xb)},t.oa=function(){this.terminate(),this.Oa=this.Ia=m},e(Wt,Ut),(t=Wt.prototype).Va=f,t.Sa=v,t.D=function(){if(Wt.M.D.call(this),this.ra=this.U=0,this.ka=T(),this.Ua=u(oe(this)),this.Ta=f,this.La=72e5,this.Va){var t=+this.a.sessionLength;isNaN(t)||(this.La=6e4*t)}if(!(t=Qt("d"))){t=[];0<(e=this.q.k("_chartbeat2",f)).length&&(t=e.split(".")),6<t.length&&(t=[]);var e=T(),n=this.q.k("_cb",f);0<n.length?t[1]=t[1]||e:n=t[0],t[0]="";var i=e-(t[1]||0),a=e-(t[2]||0);Xt().n=n&&18e5<i&&a<2592e6?0:1;i=t[4];var o=parseInt(t[5],10)||0;if(!(a=18e5<a))if(ee(this))a=v;else{var r;a=ie(this),a=se(a=decodeURIComponent(a))||a;r=re(this),a=a!==(r=se(r=decodeURIComponent(r))||r)}if(!i||a?(i=u(oe(this)),t[4]=i,o=1,this.q.remove("_cb_svref",f)):o+=1,t[5]=o,o="1",a=t&&+t[2],i=t&&t[3],t&&a&&i)if(o=Math.abs((M(e)-M(a))/864e5)){for(o=Math.min(o,16)-1,a="";o--;)a+=0;o=(i+a+"1").slice(-16)}else o=i;i=o,n||(n=this.a.utoken||u(oe(this),3),t[1]=e),t[2]=e,t[3]=i,this.a.utoken=this.ma,this.q.create("_cb",n,34128e3,f),this.q.create("_chartbeat2",t.join("."),34128e3,f),t[0]=n,Xt().d=t}var s;this.Ec=t.join("."),n=+t[1],i=+t[2],(e=t[3])&&n&&i&&(s=(Math.min((Math.abs((M(i)-M(n))/864e5)||0)+1,16,e.length)-1).toString(16),s+=("0000"+parseInt(e,2).toString(16)).slice(-4)),this.jb=s,this.ac=Qt("n",1),this.ma=t[0],this.kc=t[4],this.ic=t[5],this.jc=re(this),this.q.create("_cb_svref",re(this)||"null",1800,f),this.F.D(),Zt.D(),yt.D(),ft||(pt=kt(),lt&&g.document.addEventListener&&g.document.addEventListener(lt,St,v),It("focus","onfocusin",wt),It("blur","onfocusout",Et),pt&&wt(),ft=f),this.ga=0,this.Fb=ct(gt,"a",this.cc,this),this.Sa=f,this.Pa&&(G(this.Pa,0),this.Pa=b)},t.Da=function(){this.q.k("_SUPERFLY_lockout")||(this.Sa?rt()||this.ta?this.Xa():(this.wa=s(this.Xa,this),L(g,"load",this.wa)):this.Pa=s(this.Da,this))},t.Xa=function(){this.Ra=he(),yt.D();var t=s(this.ha,this);this.lb=H(t,15e3),this.ha()},t.ha=function(){var t,e=this.F.fa;e=this.a.reading&&+this.a.reading||0<e;this.ra<this.U&&!e?this.ra++:(S===m&&(t=g.navigator.userAgent,S=0<t.indexOf("AppleWebKit")&&0<t.indexOf("FBIOS")),(t=S)&&!e?this.ra++:(e?this.U=0:te(this),this.ra=0,this.S.push(0),18<this.S.length&&this.S.shift(),this.Va&&T()-this.ka>=this.La?this.terminate():this.Z()))},t.qb=function(){this.S.push(1);var e=0;P(this.S,function(t){e+=t}),e<3?(this.Ta=f,te(this)):(this.terminate(),this.q.create("_SUPERFLY_lockout","1",600))},t.xa=function(){},t.cc=function(){var t=Vt(this);this.ga=Math.max(this.ga,t)},t.pa=function(){this.xa(),this.terminate()},t.Aa=function(){this.ta=f,this.Sa=v,this.D(),this.Da()},t.terminate=function(){this.F.terminate(),ut(gt,this.Fb),this.wa!==m&&O("load",this.wa),Y(this.lb),Xt().d=m,Xt().n=m},t.oa=function(){this.terminate(),O("unload",this.Qa),this.Qa=this.wa=this.q=this.S=this.a=b,this.F.oa(),this.F=b,Wt.M.oa.call(this)};var ue=/matrix(3d)?\((.*)\)/;function fe(t){var e={x:0,y:0};if(!D(t=ce(t,["transform"]).transform))return e;var n=t.match(ue);if(!n)return e;var i;t=n[2].split(", ");return i=d(n[1])?(n=12,13):(n=4,5),e.x=parseInt(t[n],10),e.y=parseInt(t[i],10),e}function pe(t){var a,o,e,n,i,r;if(!(c=Nt.k("_chartbeat6")))return b;if(1===(c=c.split("::")).length)a=c[0].split(","),o=0;else{var s,h=K(u=((e=Z(e=(e=g.location.href).replace(/-{2,}/g,"-"))).pathname=Jt(e.pathname),e));P(c,function(t,e){var n=t.split(","),i=function(t,e){if(t===e)return 0;if(0===t.length)return e.length;if(0===e.length)return t.length;for(var n=[],i=0,a=e.length;i<=a;i++)n[i]=[i];for(var o=0,r=t.length;o<=r;o++)n[0][o]=o;var s,h,c;for(i=1;i<=a;i++)for(o=1;o<=r;o++)h=o-1,c=n[s=i-1][h],e.charAt(s)==t.charAt(h)?n[i][o]=c:(h=n[i][h]+1,s=n[s][o]+1,c+=2,n[i][o]=Math.min(h,s,c));return n[e.length][t.length]}(h,decodeURIComponent(n[0]));if(0===i)return a=n,o=e,v;(s===m||i<s)&&(s=i,a=n,o=e)})}c.splice(o,1),t="_chartbeat6="+c.join("::")+(r="",N(n=t)&&(n.ob&&((i=new Date).setTime(i.getTime()+n.ob),r+="; expires="+i.toGMTString()),n.domain&&(r+="; domain="+n.domain),n.path&&(r+="; path="+n.path)),r),document.cookie=t;t=[];var c=decodeURIComponent(a[0]),u=decodeURIComponent(a[1]),f=a[2];a.splice(0,3);for(var p=a.length/3,l=0;l<p;l++){var d=3*l+2;t.push({Cc:c,origin:u,X:f,$:d<a.length?a[d]:"",Nb:a[3*l],rc:a[3*l+1]})}return t}function le(t){var e=t.topStorageDomain,n=(t=t[Rt],g.location.hostname);return e||(function(t,e){if(t===e)return f;for(var n=e.split("."),i=t.split(".");n.length;){if(0===i.length)return v;if(n.pop()!==i.pop())return v}return f}(n,t)?t:n.replace(/^www\./,""))}function de(t,e,n,i,a){this.Pb=t,this.Ob=e,this.sc=n,this.X=i,this.$=a}function me(t,e){for(var n,i,a,o,r,s,h=e||document.documentElement,c=[],u=b,f=t;f&&f!==h;){if(n=f.nodeName.toLowerCase(),i=(u=f).nodeName,(f=f.parentNode)&&f!==document.documentElement)for(r=o=0,s=(a=f.children).length;r<s;r++){if(u===a[r]){n+="["+(1+r-o)+"]";break}a[r].nodeName!==i&&o++}c.unshift(n)}return c.join("/")}function be(){this.lc="_t_",this.gb=this.wb=B,Wt.call(this)}function ve(t){var e=t.a;return F()+"//"+e.mabServer+"/ping/mab?h="+encodeURIComponent(e[Rt])+"&p="+encodeURIComponent(e[xt])+"&d="+encodeURIComponent(t.ea)+"&u="+t.ma+"&c="+Math.round((T()-t.ka)/600)/100}function ge(t,e){var n=ve(t),i=e.status,a=e.data;if("s"==i&&a!==b){var o=s(t.za,t);N(a.ub)&&P(a.ub,function(t,e){o(n+"&x="+e+"&v="+t.eb+"&ml="+a.X+"&sl="+t.$+"&e=-1")}),"[object Array]"===Object.prototype.toString.call(a.nb)&&P(a.nb,function(t){o(n+"&me=3&ml="+a.X+"&x="+t)})}else"e"==i&&t.za(n+"&me="+e.code)}if(e(be,Wt),(t=be.prototype).D=function(){be.M.D.call(this),Tt(this.a);var t=!!this.a[At],e=Ht(!!this.a[Lt]&&t);Dt(this.a,"mabServer","mabping.chartbeat.net"),Dt(this.a,Ot,document.title),Dt(this.a,Rt,e),this.a[xt]=this.a[xt]?Jt(this.a[xt]):Bt(t),this.ea=h(e),this.a[Rt]=h(this.a[Rt]),this.pc=le(this.a),this.da=this.sa=v,this.ib=[];var n=this;(t=pe({domain:"."+this.pc,ob:6e4,path:"/"}))!==b&&(this.sa=f,P(t,function(t){n.ib.push(new de(t.origin,t.Nb,t.rc,t.X,t.$))})),this.pb=0,this.Ba=b,function(t){for(var e=Qt("m")||[];e.length;)t(e.shift());t={push:t},Xt().m=t}(s(this.Xb,this))},t.Z=function(){var e,n=this.F.ca,i=ve(this),a=this;this.sa&&P(this.ib,function(t){e=i+"&x="+t.Ob+"&v="+t.sc+"&ml="+t.X+"&xo="+t.Pb+"&e="+n+"&sl="+t.$,a.za(e)}),!this.da&&this.Ba&&ge(this,this.Ba),this.da=f},t.Xa=function(){if(this.Ra=he(),yt.D(),this.sa){var t=s(this.ha,this);this.lb=H(t,500)}this.ha()},t.ha=function(){var t;this.da?(15<=(t=this.F.ca)-15*this.pb&&(this.Z(),this.pb+=1),45<=t&&this.terminate()):this.Z()},t.xa=function(){},t.mc=function(t){t=function(t){var e=t.d,n=b;if(e!==b){var i={};e.s&&P(e.s,function(t,e){i[e]="string"==typeof t?{eb:t,$:""}:{eb:t.chosenVariant,$:t.specificLocation}}),n={ub:i,X:e.g,nb:e.m}}return{status:t.s,data:n,code:t.c,message:t.m}}(t),this.da?ge(this,t):this.Ba=t},t.Xb=function(t,e){for(var n=0,i=arguments.length;n<i;n++){var a=(t=arguments[n]).shift();"t"===a?this.mc.apply(this,t):"v"===a?this.tb.apply(this,t):"sv"===a?this.hc.apply(this,t):"ev"===a&&this.tb.apply(this,t)}},t.pa=function(){this.gb(),be.M.pa.call(this)},t.Aa=function(){Xt().m=[],this.wb(),be.M.Aa.call(this)},t.hc=function(t){this.wb=t},t.tb=function(t){this.gb=t},t.terminate=function(){this.Dc=m,this.Ba=b,this.da=this.sa=m,be.M.terminate.call(this)},!Nt.k("cb_optout")&&!g.pSUPERFLY_mab){var ye=new be,_e={};_e.evps=s(ye.pa,ye),_e.svps=s(ye.Aa,ye),g.pSUPERFLY_mab=_e,ye.Da()}var Ce,we,Ee;function Ie(t){if("https://chartbeat.com"===t.origin&&0===(t=String(t.data)).indexOf("_cb_hud_version=")){var e=t.substr(16),n=v;ke(),"NONE"!==e&&(e=0===e.indexOf("HUD2.")?e.substr(5):0===e.indexOf("HUD3.")?(n=f,e.substr(5)):"OLD",t="https://static.chartbeat.com/js/inpage.js",n?t="https://static2.chartbeat.com/frontend_ng/hud3/hud-inpage/hud-inpage-"+e+".js":"OLD"!==e&&(t="https://static2.chartbeat.com/frontend_ng/hud/hud-inpage/hud-inpage-"+e+".js"),(e=d(m)?m:{}).src=t,(t=ot("script",e)).setAttribute("type","text/javascript"),e=document.head||document.getElementsByTagName("head")[0],d(m)?m.appendChild(t):e&&e.appendChild(t))}}function ke(){$(we),we=m,O("message",Ie),Ee&&Ee.parentNode&&Ee.parentNode.removeChild(Ee),Ee=m}function Se(){var t=g._sf_async_config&&g._sf_async_config.domain;if(t&&!Ce){Ce=f,t="https://chartbeat.com/publishing/hud2/versioninfo/?host="+encodeURIComponent(t),L(g,"message",Ie),we=G(ke,1e4);var e=d(m)?m:{};e.src=t,(t=ot("iframe",e)).style.display="none",d(m)?m.appendChild(t):document.body&&document.body.appendChild(t),Ee=t}}function Ue(t,e){this.Ab=e,this.zb=t[At],this.yb=t[Lt],this.O=t[xt],this.oc=t[Ot],this.fb=t[Rt],this.tc=t[jt],this.cb=(this.H=Yt())?this.H.hostname:"",this.na=this.H?Jt(this.H.pathname)+this.H.search+this.H.hash:"",this.sb=Bt(v),this.fc=Ht(v);var n,i,a=W("property","meta",b,"og:url");this.ia=(this.Y=a&&a.length?Z(a[0].content):b)?Jt(this.Y.pathname)+this.Y.search+this.Y.hash:"",this.bc=this.Y?this.Y.hostname:"",this.Ha=document.title||"",(a=W("property","meta",b,"og:title"))&&a.length&&(n=a[0].content),this.ua=n,(n=W("property","meta",b,"twitter:title"))&&n.length&&(i=n[0].content),this.la=i,i=!!this.zb,n=this.zb!==m;a=!!this.yb;var o,r=this.yb!==m;for(i=[i,n,a,r,!!this.H,h(this.cb)===h(this.fc),!!this.ia,this.H?this.na===this.ia:v,this.na===this.sb,this.na===R(this.sb),!!this.Ha,!!this.ua,!!this.la,this.Ha===this.ua,this.la?this.Ha===this.la:v,this.ua&&this.la?this.ua===this.la:v,!!this.oc,!!this.O,this.O?"/"!==this.O.charAt(0):v,this.H?this.O===this.na:v,this.ia?this.O===this.ia:v,this.H?this.fb===h(this.cb):v,this.ia?this.fb===h(this.bc):v,!!this.Ab,this.Ab?v:!!this.tc,"https:"===F(),!!XMLHttpRequest,o=this.O?(o=A(this.O))!==R(o):v],n=1,r=a=0;r<i.length;r++)a|=i[r]&&n,n<<=1;this.Kb=("00000000"+a.toString(16)).slice(-8)}function xe(){"postMessage"in window&&L(g,"message",s(this.Wb,this)),Wt.call(this),Mt("_cbq",s(this.rb,this))}e(xe,Wt),xe.prototype.D=function(){xe.M.D.call(this);var t=this.ma;Xt().u=t,t=this.Ua,Xt().t=t,this.$b=new Ue(this.a,this.ta),this.Fa=b,Tt(this.a);t=!!this.a[At];var e=Ht(!!this.a[Lt]&&t);Dt(this.a,"pingServer","ping.chartbeat.net"),Dt(this.a,Ot,document.title),Dt(this.a,Rt,e),this.a[xt]=this.a[xt]?Jt(this.a[xt]):Bt(t),this.ea=h(e),this.a[Rt]=h(this.a[Rt]),this.Hb=ct(gt,"c",this.dc,this),this.Ib=ct(gt,"r",this.ec,this),this.T=b},xe.prototype.Eb=function(t){this.Fa=t},xe.prototype.xa=function(){this.q.update("_chartbeat4",["t="+this.Ua,"E="+this.F.ca,"x="+Vt(this),"c="+Math.round((T()-this.ka)/600)/100,"y="+et("Height"),"w="+tt("Height")].join("&"),60,m,m,1)};var Re,Ae,Le="h,p,u,d,g,g0,g1,g3,g4,n,nc,f,c,x,m,y,o,w,j,R,W,I,E,e,v,r,vp,K,l1,KK,PA,b,A,_c,_m,_x,_y,_z,_s,t,V,z,i,L,tz,l,,sn,C,sv,sr,sd,im".split(",");function Oe(t){return(t=Z(t=t.replace(/-{2,}/g,"-"))).pathname=Jt(t.pathname),t}function je(t,e,n){var i,a;if(t.Va&&T()-t.ka>=t.La)t.terminate();else if(0===(r=Oe(r=e.href||"")).protocol.indexOf("http")){var o=r.hostname!==g.location.hostname,r=K(r),s=nt(e,function(t){return t.id}),h=me(e,s),c="";t.a.moduleAttribute&&(c=(c=(c=function t(e,n,i){var a;i=i||"",e=e===m?v:((a=""===i&&e.getAttribute(n))||(a=e.getAttribute(n))&&(a=e.getAttribute(n)===i),a?e:e===document.body?v:t(e.parentNode,n,i));return e}(e,t.a.moduleAttribute))?c.getAttribute(t.a.moduleAttribute):"").replace(/::/g,"-").substr(0,40)),s=s?(h=h&&"/"+h,h="*[@id='"+s.id+"']"+h,me(e)):h,h=u(h),s=u(s),n={left:(e=function(t,e,n){var i=t.offsetLeft,a=t.offsetTop;i+=(h=fe(t)).x,a+=h.y;for(var o=v,r=n?0:Math.floor(V("X","Left",m)),s=n?0:Math.floor(V("Y","Top",m)),h=t.offsetParent;t&&t!==e&&t!==document.body;){if(t===h&&(h=fe(t),i+=t.offsetLeft+h.x,a+=t.offsetTop+h.y,h=t.offsetParent),n||(i-=t.scrollLeft,a-=t.scrollTop),"fixed"===ce(t,["position"]).position){o=f;break}t=t.parentElement}return n||(i-=e?e.scrollLeft:r,a-=e?e.scrollTop:s),o&&(i+=r,a+=s),{x:i,y:a}}(e,m,f)).x,top:e.y,path:t.a[xt],href:r,ab:h,Ea:s,$a:"",Wa:n,Na:0,Rb:t.a[Rt],Ma:c},t.Z(n),o||t.q.update("_chartbeat5",(i=n,512<(a=(a=encodeURIComponent(i.$a)).replace(/-/g,"%2D")).length&&(a=""),[i.left,i.top,encodeURIComponent(i.path),encodeURIComponent(i.href),i.ab,a,i.Wa,i.Ea,encodeURIComponent(i.Rb),i.Ma].join(",")),60,v,m,3,function(t){return(t=t.split(","))[2]+","+t[3]})}}function De(t){return[t.left,t.top,t.ab,encodeURIComponent(t.$a),t.Wa,encodeURIComponent(t.href),t.Ea,t.Ma].join("::")}if((t=xe.prototype).Z=function(t){this.ja++;var e={};e.g=this.a.uid,e.g0=Ft(this.a,"sections")||"No%20Section",e.g1=Ft(this.a,"authors")||"No%20Author",e.g2=Ft(this.a,"zone"),e.g3=Ft(this.a,"sponsorName"),e.g4=Ft(this.a,"type"),!this.a.noCookies&&this.q.isSupported()?e.n=this.ac:e.nc=1,e.c=Math.round((T()-this.ka)/600)/100,e.E=this.F.ca;var n,i,a,o,r,s,h,c=Vt(this);if(this.ga=Math.max(this.ga,c),e.x=c,e.m=this.ga,e.y=et("Height"),e.o=et("Width"),e.w=tt("Height"),e.b=0<this.Ra?this.Ra:"",this.jb&&!this.a.noCookies&&this.q.isSupported()&&(e.f=this.jb),e[""]=(n=this.a,i={},P(n,function(t,e){"_"==e.charAt(0)&&(i[e]=t)}),i),e.t=this.Ua,e.V=119,e.tz=(new Date).getTimezoneOffset(),e.sn=this.ja,e.sv=this.kc,e.sr=this.jc,e.sd=this.ic,c=this.F.fa,e.h=encodeURIComponent(this.a[Rt]),e.p=encodeURIComponent(this.a[xt]),e.u=this.ma,e.d=encodeURIComponent(this.ea),e.j=Math.round(15e3*(this.U+2)/1e3),e.R=0,e.W=0,e.I=0,yt.Gb()?e.W=1:this.a.reading&&+this.a.reading||0<c||e.c<.09?e.R=1:e.I=1,e.e=c,c=ee(this),this.Ta){this.Ta=v,c&&(this.T=function(t){if(!(n=t.q.k("_chartbeat5")))return b;var a,o,e=n.split("::"),n=e.length,r=b,s=K(Oe(g.location.href));return P(e,function(t,e){var n=t.split(","),i=decodeURIComponent(n[3]);if(i){if(0===(i=function(n,i){if(n===i)return 0;var a=b;return P([k,x,y,C,E,R],function(t,e){if(n=t(n),i=t(i),n===i)return a=e+1,v}),a}(s,i)))return a=n,r=e,v;if(i===b)return f;(o===m||i<o)&&(o=i,a=n,r=e)}}),r===b?b:(e.splice(r,1),t.q.create("_chartbeat5",e.join("::"),60),t=(t=a[5])?(t=t.replace(/%2D/g,"-"),decodeURIComponent(t)):"",{left:a[0],top:a[1],path:decodeURIComponent(a[2]),href:decodeURIComponent(a[3]),ab:a[4]||"",$a:"",Ea:7<a.length?a[7]:"",Wa:6<a.length?a[6]:"c",Na:n,Ma:a[9]?a[9]:""})}(this)),e.i=ae(this);var u=this.a.hudTrackable;u!==m&&(e.L=u?"1":"0"),this.a.alias&&(e.PA=encodeURIComponent(this.a.alias))}c?(this.T?(e.v=encodeURIComponent(this.T.path),e.K=De(this.T),1<this.T.Na&&(e.l1=this.T.Na)):e.v=ie(this),this.ta&&(e.vp=1)):e.r=ie(this),c=z(e.v),Xt().v=c,c=z(e.r),Xt().r=c,e.A=this.Fa?this.Fa:"",e._c=Q("utm_campaign",this.a.campaignTag),e._m=Q("utm_medium",this.a.mediumTag),e._x=Q("utm_source",this.a.sourceTag),e._y=Q("utm_content",this.a.contentTag),e._z=Q("utm_term",this.a.termTag),e.im=this.$b.Kb,c=this.a.idSync?(c=[],l(new p,this.a.idSync,c),encodeURIComponent(c.join(""))):"",e._s=c,e.z=(o=[],(r=(a=this).q.k("_chartbeat4"))&&(P(r.split("::"),function(t){o.push(encodeURIComponent(t))}),a.q.remove("_chartbeat4")),o),e.C=this.a.mobileApp?1:"",e.KK=t?De(t):"",c=(t=this.q).Ya,t.Ya=v,e.l=c?1:"",this.F.fa=0,this.za(F()+"//"+this.a.pingServer+"/ping?"+(s=e,h=[],P(Le,function(e){var t=s[e];d(t)&&("[object Array]"===Object.prototype.toString.call(t)?P(t,function(t){h.push(e+"="+t)}):N(t)?P(t,function(t,e){h.push(e+"="+t)}):!(t+"").length&&"r"!=e||h.push(e+"="+t))}),h.push("_"),h.join("&")))},t.Wb=function(t){var e=(o=this.a).playerdomain||this.ea;if(y(t.origin)===y(e))if(D(e=t.data)&&0===e.indexOf("cbqpush::"))3==(t=e.split("::")).length&&(0===(t=t.slice(1))[0].indexOf("_")&&this.rb(t));else if("cbdata?"==e){e="&u="+Qt("u");var n="&t="+Qt("t"),i="&v="+Qt("v"),a="&r="+Qt("r"),o="domain="+encodeURIComponent(o[Rt])+"&uid="+encodeURIComponent(o.uid)+"&path="+encodeURIComponent(o[xt])+"&title="+ae(this)+"&referrer="+ie(this)+"&internal="+(ee(this)?"1":"0")+"&subdomain="+encodeURIComponent(this.ea)+e+n+i+a+"&utoken="+this.ma;t.source.postMessage(o,"*")}},t.rb=function(t){var e=t[0];t=t[1];if("_demo"===e&&this.a._demo)this.a._demo=this.a._demo+"%2C"+t;else if(t!==this.a[e]&&(this.a[e]=t,(this.U=0)<this.ja&&!this.qa)){var n=this.ja,i=this;this.qa=G(function(){i.qa=b,i.ja===n&&i.Z()},1e3)}},t.dc=function(t){je(this,t,"c")},t.ec=function(t){je(this,t,"r")},t.terminate=function(){ut(gt,this.Hb),ut(gt,this.Ib),$(this.qa),this.qa=b,xe.M.terminate.call(this)},!Nt.k("cb_optout")&&!g.pSUPERFLY){var Me=new xe,Te={};g.pSUPERFLY=Te;var Fe=g.pSUPERFLY_mab,Ne=g.pSUPERFLY_pub,Pe=[];Fe&&Pe.push(Fe),Ne&&(Pe.push(Ne),Ne.addEngagedAdFilter&&(Te.addEngagedAdFilter=Ne.addEngagedAdFilter),Ne.refreshAd&&(Te.refreshAd=Ne.refreshAd),Ne.registerGptSlot&&(Te.registerGptSlot=Ne.registerGptSlot),Mt("_cba",function(t){t()})),Te.virtualPage=(Re=function(){Me.pa(),P(Pe,function(t){t.evps()})},Ae=function(){Me.Aa(),P(Pe,function(t){t.svps()})},function(t,e){if(!_t){Re();var n=g._sf_async_config,i="",a=y(a=n[xt]);if(/^\//.test(a)&&(i=h(g.location.hostname)),n[jt]=F()+"//"+i+a,D(t))n[xt]=Jt(t),e&&(n[Ot]=e);else if(N(t)){var o=["authors","sections",Ot,xt,jt];P(t,function(t,e){-1===q(o,function(t){return t===e})&&0!==e.indexOf("_")||(n[e]=e===xt?Jt(t):t)})}Ae()}}),Te.activity=s(Me.Eb,Me),Me.Da();var qe=Pt.B(f);if(qe&&qe.getItem("_cb_ip")){var Be=g.location;/^(.+[.])?chartbeat\.com$/.test(Be.hostname)&&/^\/publishing\/(overlay|hud|mab)\//.test(Be.pathname)||st(Se)}else L(g,"message",function t(e){if(/[\/.]chartbeat\.com$/.test(e.origin)){var n=Pt.B(f),i=String(e.data);n&&0==i.indexOf("_cb_ip")&&(n.setItem("_cb_ip","1"),e.source.postMessage(1,e.origin),Se(),O("message",t))}})}}();