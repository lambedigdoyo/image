document.write('<link rel=stylesheet href=../css/grPelangi-G30S23.css />');
var DecorationsT,JobT,SourceSpansT,IN_GLOBAL_SCOPE=!1;!function(){"use strict";for(var u=window,c=document,d=c.documentElement,r=c.head||c.getElementsByTagName("head")[0]||d,e="",n=c.getElementsByTagName("script"),t=n.length;0<=--t;){var a=n[t],s=a.src.match(/^[^?#]*\/run_pelangi\.js(\?[^#]*)?(?:#.*)?$/);if(s){e=s[1]||"",a.parentNode.removeChild(a);break}}var o=!0,l=[],i=[],p=[];e.replace(/[?&]([^&=]+)=([^&]+)/g,function(e,n,t){t=decodeURIComponent(t),"autorun"==(n=decodeURIComponent(n))?o=!/^[0fn]/i.test(t):"lang"==n?l.push(t):"skin"==n?i.push(t):"callback"==n&&p.push(t)});for(var f="https://github.com/lambedigdoyo/image/main/src/css",t=0,g=l.length;t<g;++t)!function(){var e=c.createElement("script");e.onload=e.onerror=e.onreadystatechange=function(){!e||e.readyState&&!/loaded|complete/.test(e.readyState)||(e.onerror=e.onload=e.onreadystatechange=null,--h,m(),e.parentNode&&e.parentNode.removeChild(e),e=null)},e.type="text/javascript",e.src=f+"/lang-"+encodeURIComponent(l[t])+".js",r.insertBefore(e,r.firstChild)}(l[t]);var h=l.length;function m(){h||u.setTimeout(w,0)}for(var v,y,b=[],t=0,g=i.length;t<g;++t)b.push(f+"/skins/"+encodeURIComponent(i[t])+".css");b.push(f+"/grPelangi-G30S23.css"),y=(v=b).length,function e(n){var t;n!==y&&((t=c.createElement("link")).rel="stylesheet",t.type="text/css",n+1<y&&(t.error=t.onerror=function(){e(n+1)}),t.href=v[n],r.appendChild(t))}(0);var C,x=("undefined"!=typeof window&&(window.PR_SHOULD_USE_CONTINUATION=!0),function(){var L="undefined"!=typeof window?window:{},e=["break,continue,do,else,for,if,return,while"],n=[u=[[e,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,restrict,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],"alignas,alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,noexcept,noreturn,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],t=[u,"abstract,assert,boolean,byte,extends,finally,final,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],r=[u,"abstract,add,alias,as,ascending,async,await,base,bool,by,byte,checked,decimal,delegate,descending,dynamic,event,finally,fixed,foreach,from,get,global,group,implicit,in,interface,internal,into,is,join,let,lock,null,object,out,override,orderby,params,partial,readonly,ref,remove,sbyte,sealed,select,set,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,value,var,virtual,where,yield"],a=[u,"abstract,async,await,constructor,debugger,enum,eval,export,from,function,get,import,implements,instanceof,interface,let,null,of,set,undefined,var,with,yield,Infinity,NaN"],s="caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",o=[e,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],l=[e,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],i=[e,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],u=/^(DIR|FILE|array|vector|(de|priority_)?queue|(forward_)?list|stack|(const_)?(reverse_)?iterator|(unordered_)?(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,c="str",d="com",p="pun",_="pln",T="src";function f(e){for(var u=0,c=!1,n=!1,t=0,r=e.length;t<r;++t)if((o=e[t]).ignoreCase)n=!0;else if(/[a-z]/i.test(o.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){n=!(c=!0);break}var a={b:8,t:9,n:10,v:11,f:12,r:13};function d(e){var n=e.charCodeAt(0);if(92!==n)return n;var t=e.charAt(1);return(n=a[t])||("0"<=t&&t<="7"?parseInt(e.substring(1),8):"u"===t||"x"===t?parseInt(e.substring(2),16):e.charCodeAt(1))}function p(e){if(e<32)return(e<16?"\\x0":"\\x")+e.toString(16);e=String.fromCharCode(e);return"\\"===e||"-"===e||"]"===e||"^"===e?"\\"+e:e}function s(e){for(var n=e.source.match(new RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)","g")),t=n.length,r=[],a=0,s=0;a<t;++a)"("===(l=n[a])?++s:"\\"===l.charAt(0)&&(o=+l.substring(1))&&(o<=s?r[o]=-1:n[a]=p(o));for(a=1;a<r.length;++a)-1===r[a]&&(r[a]=++u);for(var o,a=0,s=0;a<t;++a)"("===(l=n[a])?r[++s]||(n[a]="(?:"):"\\"===l.charAt(0)&&(o=+l.substring(1))&&o<=s&&(n[a]="\\"+r[o]);for(a=0;a<t;++a)"^"===n[a]&&"^"!==n[a+1]&&(n[a]="");if(e.ignoreCase&&c)for(a=0;a<t;++a){var l,i=(l=n[a]).charAt(0);2<=l.length&&"["===i?n[a]=function(e){var n=e.substring(1,e.length-1).match(new RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]","g")),t=[],e="^"===n[0],r=["["];e&&r.push("^");for(var a=e?1:0,s=n.length;a<s;++a){var o,l=n[a];/\\[bdsw]/i.test(l)?r.push(l):(l=d(l),a+2<s&&"-"===n[a+1]?(o=d(n[a+2]),a+=2):o=l,t.push([l,o]),o<65||122<l||(o<65||90<l||t.push([32|Math.max(65,l),32|Math.min(o,90)]),o<97||122<l||t.push([-33&Math.max(97,l),-33&Math.min(o,122)])))}t.sort(function(e,n){return e[0]-n[0]||n[1]-e[1]});for(var i=[],u=[],a=0;a<t.length;++a)(c=t[a])[0]<=u[1]+1?u[1]=Math.max(u[1],c[1]):i.push(u=c);for(a=0;a<i.length;++a){var c=i[a];r.push(p(c[0])),c[1]>c[0]&&(c[1]+1>c[0]&&r.push("-"),r.push(p(c[1])))}return r.push("]"),r.join("")}(l):"\\"!==i&&(n[a]=l.replace(/[a-zA-Z]/g,function(e){e=e.charCodeAt(0);return"["+String.fromCharCode(-33&e,32|e)+"]"}))}return n.join("")}for(var o,l=[],t=0,r=e.length;t<r;++t){if((o=e[t]).global||o.multiline)throw new Error(""+o);l.push("(?:"+s(o)+")")}return new RegExp(l.join("|"),n?"gi":"g")}function g(e,s){var o=/(?:^|\s)nocode(?:\s|$)/,l=[],i=0,u=[],c=0;return function e(n){var t=n.nodeType;if(1==t){if(!o.test(n.className)){for(var r=n.firstChild;r;r=r.nextSibling)e(r);var a=n.nodeName.toLowerCase();"br"!==a&&"li"!==a||(l[c]="\n",u[c<<1]=i++,u[c++<<1|1]=n)}}else 3!=t&&4!=t||(t=n.nodeValue).length&&(t=s?t.replace(/\r\n?/g,"\n"):t.replace(/[ \t\r\n]+/g," "),l[c]=t,u[c<<1]=i,i+=t.length,u[c++<<1|1]=n)}(e),{sourceCode:l.join("").replace(/\n$/,""),spans:u}}function k(e,n,t,r,a){t&&(r(n={sourceNode:e,pre:1,langExtension:null,numberLines:null,sourceCode:t,spans:null,basePos:n,decorations:null}),a.push.apply(a,n.decorations))}var P=/\S/;function h(c,w){var C,S={};!function(){for(var e=c.concat(w),n=[],t={},r=0,a=e.length;r<a;++r){var s=e[r],o=s[3];if(o)for(var l=o.length;0<=--l;)S[o.charAt(l)]=s;var i=s[1],u=""+i;t.hasOwnProperty(u)||(n.push(i),t[u]=null)}n.push(/[\0-\uffff]/),C=f(n)}();var N=w.length,E=function(e){for(var n=e.sourceCode,t=e.basePos,r=e.sourceNode,a=[t,_],s=0,o=n.match(C)||[],l={},i=0,u=o.length;i<u;++i){var c,d=o[i],p=l[d],f=void 0;if("string"==typeof p)c=!1;else{var g=S[d.charAt(0)];if(g)f=d.match(g[1]),p=g[0];else{for(var h=0;h<N;++h)if(g=w[h],f=d.match(g[1])){p=g[0];break}f||(p=_)}!(c=5<=p.length&&"lang-"===p.substring(0,5))||f&&"string"==typeof f[1]||(c=!1,p=T),c||(l[d]=p)}var m,v,y,b,x=s;s+=d.length,c?(m=f[1],y=(v=d.indexOf(m))+m.length,f[2]&&(v=(y=d.length-f[2].length)-m.length),b=p.substring(5),k(r,t+x,d.substring(0,v),E,a),k(r,t+x+v,m,A(b,m),a),k(r,t+x+y,d.substring(y),E,a)):a.push(t+x,p)}e.decorations=a};return E}function m(e){var n=[],t=[];e.tripleQuotedStrings?n.push([c,/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,"'\""]):e.multiLineStrings?n.push([c,/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):n.push([c,/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]),e.verbatimStrings&&t.push([c,/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);var r=e.hashComments;r&&(e.cStyleComments?(1<r?n.push([d,/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):n.push([d,/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,null,"#"]),t.push([c,/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,null])):n.push([d,/^#[^\r\n]*/,null,"#"])),e.cStyleComments&&(t.push([d,/^\/\/[^\r\n]*/,null]),t.push([d,/^\/\*[\s\S]*?(?:\*\/|$)/,null]));r=e.regexLiterals;r&&(a="/(?=[^/*"+(r=1<r?"":"\n\r")+"])(?:[^/\\x5B\\x5C"+r+"]|\\x5C"+(a=r?".":"[\\S\\s]")+"|\\x5B(?:[^\\x5C\\x5D"+r+"]|\\x5C"+a+")*(?:\\x5D|$))+/",t.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*("+a+")")]));var a=e.types;a&&t.push(["typ",a]);a=(""+e.keywords).replace(/^ | $/g,"");a.length&&t.push(["kwd",new RegExp("^(?:"+a.replace(/[\s,]+/g,"|")+")\\b"),null]),n.push([_,/^\s+/,null," \r\n\t "]);a="^.[^\\s\\w.$@'\"`/\\\\]*";return e.regexLiterals&&(a+="(?!s*/)"),t.push(["lit",/^@[a-z_$][a-z_$@0-9]*/i,null],["typ",/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],[_,/^[a-z_$][a-z_$@0-9]*/i,null],["lit",new RegExp("^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*","i"),null,"0123456789"],[_,/^\\[\s\S]?/,null],[p,new RegExp(a),null]),h(n,t)}function R(e,n,o){for(var l=/(?:^|\s)nocode(?:\s|$)/,i=/\r\n?|\n/,u=e.ownerDocument,t=u.createElement("li");e.firstChild;)t.appendChild(e.firstChild);var r=[t];function c(e){for(;!e.nextSibling;)if(!(e=e.parentNode))return;for(var n,t=function e(n,t){var r=t?n.cloneNode(!1):n,t=n.parentNode;if(t){var a=e(t,1),s=n.nextSibling;a.appendChild(r);for(var o=s;o;o=s)s=o.nextSibling,a.appendChild(o)}return r}(e.nextSibling,0);(n=t.parentNode)&&1===n.nodeType;)t=n;r.push(t)}for(var a=0;a<r.length;++a)!function e(n){var t,r,a=n.nodeType;if(1!=a||l.test(n.className))3!=a&&4!=a||!o||(r=(t=n.nodeValue).match(i))&&(a=t.substring(0,r.index),n.nodeValue=a,(r=t.substring(r.index+r[0].length))&&n.parentNode.insertBefore(u.createTextNode(r),n.nextSibling),c(n),a||n.parentNode.removeChild(n));else if("br"===n.nodeName.toLowerCase())c(n),n.parentNode&&n.parentNode.removeChild(n);else for(var s=n.firstChild;s;s=s.nextSibling)e(s)}(r[a]);n===(0|n)&&r[0].setAttribute("value",n);var s=u.createElement("ol");s.className="linenums";for(var d=Math.max(0,n-1|0)||0,a=0,p=r.length;a<p;++a)(t=r[a]).className="L"+(a+d)%10,t.firstChild||t.appendChild(u.createTextNode(" ")),s.appendChild(t);e.appendChild(s)}e=m({keywords:[n,r,t,a,s,o,l,i],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0});var v={};function y(e,n){for(var t=n.length;0<=--t;){var r=n[t];v.hasOwnProperty(r)?L.console&&console.warn("cannot override language handler %s",r):v[r]=e}}function A(e,n){return e&&v.hasOwnProperty(e)||(e=/^\s*</.test(n)?"default-markup":"default-code"),v[e]}function $(e){var n=e.langExtension;try{var t=g(e.sourceNode,e.pre),r=t.sourceCode;e.sourceCode=r,e.spans=t.spans,e.basePos=0,A(n,r)(e),function(e){var n,t,r=(r=/\bMSIE\s(\d+)/.exec(navigator.userAgent))&&+r[1]<=8,a=/\n/g,s=e.sourceCode,o=s.length,l=0,i=e.spans,u=i.length,c=0,d=e.decorations,p=d.length,f=0;for(d[p]=o,t=n=0;t<p;)d[t]!==d[t+2]?(d[n++]=d[t++],d[n++]=d[t++]):t+=2;for(p=n,t=n=0;t<p;){for(var g=d[t],h=d[t+1],m=t+2;m+2<=p&&d[m+1]===h;)m+=2;d[n++]=g,d[n++]=h,t=m}p=d.length=n;var v=e.sourceNode,e="";v&&(e=v.style.display,v.style.display="none");try{for(;c<u;){i[c];var y,b,x,w,C=i[c+2]||o,S=d[f+2]||o,m=Math.min(C,S),N=i[c+1];1!==N.nodeType&&(y=s.substring(l,m))&&(r&&(y=y.replace(a,"\r")),N.nodeValue=y,(x=(b=N.ownerDocument).createElement("span")).className=d[f+1],(w=N.parentNode).replaceChild(x,N),x.appendChild(N),l<C&&(i[c+1]=N=b.createTextNode(s.substring(m,C)),w.insertBefore(N,x.nextSibling))),C<=(l=m)&&(c+=2),S<=l&&(f+=2)}}finally{v&&(v.style.display=e)}}(e)}catch(e){L.console&&console.log(e&&e.stack||e)}}function b(e,n,t){var r=t||!1,t=n||null,n=document.createElement("div");return n.innerHTML="<pre>"+e+"</pre>",n=n.firstChild,r&&R(n,r,!0),$({langExtension:t,numberLines:r,sourceNode:n,pre:1,sourceCode:null,basePos:null,spans:null,decorations:null}),n.innerHTML}function x(h,e){var n=e||document.body,m=n.ownerDocument||document;function t(e){return n.getElementsByTagName(e)}for(var r=[t("pre"),t("code"),t("xmp")],v=[],a=0;a<r.length;++a)for(var s=0,o=r[a].length;s<o;++s)v.push(r[a][s]);r=null;var y=Date;y.now||(y={now:function(){return+new Date}});var b=0,x=/\blang(?:uage)?-([\w.]+)(?!\S)/,w=/\bgrpelangi\b/,C=/\bgrpelangied\b/,S=/pre|xmp/i,N=/^code$/i,E=/^(?:pre|code|xmp)$/i,_={};!function e(){for(var n=L.PR_SHOULD_USE_CONTINUATION?y.now()+250:1/0;b<v.length&&y.now()<n;b++){for(var t=v[b],r=_,a=t;a=a.previousSibling;){var s=a.nodeType,o=(7===s||8===s)&&a.nodeValue;if(o?!/^\??pelangi\b/.test(o):3!==s||/\S/.test(a.nodeValue))break;if(o){r={},o.replace(/\b(\w+)=([\w:.%+-]+)/g,function(e,n,t){r[n]=t});break}}var l=t.className;if((r!==_||w.test(l))&&!C.test(l)){for(var i,u,c,d,p=!1,f=t.parentNode;f;f=f.parentNode){var g=f.tagName;if(E.test(g)&&f.className&&w.test(f.className)){p=!0;break}}p||(t.className+=" grpelangied",(u=r.lang)||(!(u=l.match(x))&&(i=function(e){for(var n=void 0,t=e.firstChild;t;t=t.nextSibling)var r=t.nodeType,n=1===r?n?e:t:3===r&&P.test(t.nodeValue)?e:n;return n===e?void 0:n}(t))&&N.test(i.tagName)&&(u=i.className.match(x)),u=u&&u[1]),c=S.test(t.tagName)?1:(d=t.currentStyle,c=m.defaultView,(d=d?d.whiteSpace:c&&c.getComputedStyle?c.getComputedStyle(t,null).getPropertyValue("white-space"):0)&&"pre"===d.substring(0,3)),(d="true"===(d=r.linenums)||+d)||(d=!!(d=l.match(/\blinenums\b(?::(\d+))?/))&&(!d[1]||!d[1].length||+d[1])),d&&R(t,d,c),$({langExtension:u,sourceNode:t,numberLines:d,pre:c,sourceCode:null,basePos:null,spans:null,decorations:null}))}}b<v.length?L.setTimeout(e,250):"function"==typeof h&&h()}()}y(e,["default-code"]),y(h([],[[_,/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],[d,/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],[p,/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]),y(h([[_,/^[\s]+/,null," \t\r\n"],["atv",/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],[p,/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]),y(h([],[["atv",/^[\s\S]+/]]),["uq.val"]),y(m({keywords:n,hashComments:!0,cStyleComments:!0,types:u}),["c","cc","cpp","cxx","cyc","m"]),y(m({keywords:"null,true,false"}),["json"]),y(m({keywords:r,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:u}),["cs"]),y(m({keywords:t,cStyleComments:!0}),["java"]),y(m({keywords:i,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]),y(m({keywords:o,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]),y(m({keywords:s,hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]),y(m({keywords:l,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]),y(m({keywords:a,cStyleComments:!0,regexLiterals:!0}),["javascript","js","ts","typescript"]),y(m({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]),y(h([],[[c,/^[\s\S]+/]]),["regex"]);var w=L.PR={createSimpleLexer:h,registerLangHandler:y,sourceDecorator:m,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:d,PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:_,PR_PUNCTUATION:p,PR_SOURCE:T,PR_STRING:c,PR_TAG:"tag",PR_TYPE:"typ",grPelangiOne:IN_GLOBAL_SCOPE?L.grPelangiOne=b:b,grPelangi:IN_GLOBAL_SCOPE?L.grPelangi=x:C=x};"function"==typeof(a=L.define)&&a.amd&&a("google-code-pelangi",[],function(){return w})}(),C);function w(){o&&function(n){var e=c.addEventListener,t=!1,r=!0,a=e?"addEventListener":"attachEvent",s=e?"removeEventListener":"detachEvent",o=e?"":"on",l=function(e){"readystatechange"==e.type&&"complete"!=c.readyState||(("load"==e.type?u:c)[s](o+e.type,l,!1),!t&&(t=!0)&&n.call(u,e.type||e))},i=function(){try{d.doScroll("left")}catch(e){return void u.setTimeout(i,50)}l("poll")};if("complete"==c.readyState)n.call(u,"lazy");else{if(c.createEventObject&&d.doScroll){try{r=!u.frameElement}catch(e){}r&&i()}c[a](o+"DOMContentLoaded",l,!1),c[a](o+"readystatechange",l,!1),u[a](o+"load",l,!1)}}(function(){var n=p.length;x(n?function(){for(var e=0;e<n;++e)!function(e){u.setTimeout(function(){u.exports[p[e]].apply(u,arguments)},0)}(e)}:void 0)})}m()}();
/* ==================================== lang-css-js ================================== */
PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[ \t\r\n\f]+/,null," \t\r\n\f"]],[[PR.PR_STRING,/^\"(?:[^\n\r\f\\\"]|\\(?:\r\n?|\n|\f)|\\[\s\S])*\"/,null],[PR.PR_STRING,/^\'(?:[^\n\r\f\\\']|\\(?:\r\n?|\n|\f)|\\[\s\S])*\'/,null],["lang-css-str",/^url\(([^\)\"\']+)\)/i],[PR.PR_KEYWORD,/^(?:url|rgb|\!important|@import|@page|@media|@charset|inherit)(?=[^\-\w]|$)/i,null],["lang-css-kw",/^(-?(?:[_a-z]|(?:\\[0-9a-f]+ ?))(?:[_a-z0-9\-]|\\(?:\\[0-9a-f]+ ?))*)\s*:/i],[PR.PR_COMMENT,/^\/\*[^*]*\*+(?:[^\/*][^*]*\*+)*\//],[PR.PR_COMMENT,/^(?:<!--|-->)/],[PR.PR_LITERAL,/^(?:\d+|\d*\.\d+)(?:%|[a-z]+)?/i],[PR.PR_LITERAL,/^#(?:[0-9a-f]{3}){1,2}\b/i],[PR.PR_PLAIN,/^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i],[PR.PR_PUNCTUATION,/^[^\s\w\'\"]+/]]),["css"]),PR.registerLangHandler(PR.createSimpleLexer([],[[PR.PR_KEYWORD,/^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i]]),["css-kw"]),PR.registerLangHandler(PR.createSimpleLexer([],[[PR.PR_STRING,/^[^\)\"\']+/]]),["css-str"]);
