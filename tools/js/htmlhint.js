var HTMLHint=function(o){function u(e,t){return Array(e+1).join(t||" ")}var l={version:"0.9.14",release:"20160509",rules:{},defaultRuleset:{"tagname-lowercase":!0,"attr-lowercase":!0,"attr-value-double-quotes":!0,"doctype-first":!0,"tag-pair":!0,"spec-char-escape":!0,"id-unique":!0,"src-not-empty":!0,"attr-no-duplication":!0,"title-require":!0},addRule:function(e){l.rules[e.id]=e},verify:function(e,n){n!==o&&0!==Object.keys(n).length||(n=l.defaultRuleset),e=e.replace(/^\s*<!--\s*htmlhint\s+([^\r\n]+?)\s*-->/i,function(e,t){return n===o&&(n={}),t.replace(/(?:^|,)\s*([^:,]+)\s*(?:\:\s*([^,\s]+))?/g,function(e,t,a){"false"===a?a=!1:"true"===a&&(a=!0),n[t]=a===o||a}),""});var t,a,i=new HTMLParser,r=new l.Reporter(e,n),s=l.rules;for(a in n)t=s[a],t!==o&&!1!==n[a]&&t.init(i,r,n[a]);return i.parse(e),r.messages},format:function(e,t){var o=[],l={white:"",grey:"",red:"",reset:""},d=((t=t||{}).colors&&(l.white="[37m",l.grey="[90m",l.red="[31m",l.reset="[39m"),t.indent||0);return e.forEach(function(e){var t=e.evidence,a=e.line,n=e.col,i=t.length,r=41<n?n-40:1,s=t.length>n+60?n+60:i,s=(n<41&&(s+=40-n+1),t=t.replace(/\t/g," ").substring(r-1,s),1<r&&(t="..."+t,r-=3),s<i&&(t+="..."),o.push(l.white+u(d)+"L"+a+" |"+l.grey+t+l.reset),n-r),i=t.substring(0,s).match(/[^\u0000-\u00ff]/g);null!==i&&(s+=i.length),o.push(l.white+u(d)+u((a+"").length+3+s)+"^ "+l.red+e.message+" ("+e.rule.id+")"+l.reset)}),o}};return l}(),HTMLParser=("object"==typeof exports&&exports&&(exports.HTMLHint=HTMLHint),function(e){function t(){this._init.apply(this,arguments)}t.prototype={_init:function(e,t){var a=this,e=(a.html=e,a.lines=e.split(/\r?\n/),e.match(/\r?\n/));a.brLen=null!==e?e[0].length:0,a.ruleset=t,a.messages=[]},error:function(e,t,a,n,i){this.report("error",e,t,a,n,i)},warn:function(e,t,a,n,i){this.report("warning",e,t,a,n,i)},info:function(e,t,a,n,i){this.report("info",e,t,a,n,i)},report:function(e,t,a,n,i,r){for(var s,o,l=this.lines,d=this.brLen,u=a-1,c=l.length;u<c&&(o=(s=l[u]).length)<n&&a<c;u++)a++,1!==(n-=o)&&(n-=d);this.messages.push({type:e,message:t,raw:r,evidence:s,line:a,col:n,rule:{id:i.id,description:i.description,link:"https://github.com/yaniswang/HTMLHint/wiki/"+i.id}})}},e.Reporter=t}(HTMLHint),function(N){function e(){this._init.apply(this,arguments)}return e.prototype={_init:function(){var e=this;e._listeners={},e._mapCdataTags=e.makeMap("script,style"),e._arrBlocks=[],e.lastEvent=null},makeMap:function(e){for(var t={},a=e.split(","),n=0;a.length>n;n++)t[a[n]]=!0;return t},parse:function(e){function t(e,t,a,n){var i=a-p+1;for((n=n===N?{}:n).raw=t,n.pos=a,n.line=v,n.col=i,b.push(n),d.fire(e,n);h.exec(t);)v++,p=a+h.lastIndex}var a,n,i,r,s,o,l,d=this,u=d._mapCdataTags,c=/<(?:\/([^\s>]+)\s*|!--([\s\S]*?)--|!([^>]*?)|([\w\-:]+)((?:\s+[^\s"'>\/=\x00-\x0F\x7F\x80-\x9F]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s"'>]*))?)*?)\s*(\/?))>/g,f=/\s*([^\s"'>\/=\x00-\x0F\x7F\x80-\x9F]+)(?:\s*=\s*(?:(")([^"]*)"|(')([^']*)'|([^\s"'>]*)))?/g,h=/\r?\n/g,g=0,m=0,p=0,v=1,b=d._arrBlocks;for(d.fire("start",{pos:0,line:1,col:1});a=c.exec(e);)if(g<(n=a.index)&&(l=e.substring(g,n),r?o.push(l):t("text",l,g)),g=c.lastIndex,!(i=a[1])||(r&&i===r&&(t("cdata",l=o.join(""),m,{tagName:r,attrs:s}),o=s=r=null),r))if(r)o.push(a[0]);else if(i=a[4]){for(var w,L=[],y=a[5],T=0;w=f.exec(y);){var H=w[1],x=w[2]||w[4]||"",M=w[3]||w[5]||w[6]||"";L.push({name:H,value:M,quote:x,index:w.index,raw:w[0]}),T+=w[0].length}T===y.length?(t("tagstart",a[0],n,{tagName:i,attrs:L,close:a[6]}),u[i]&&(r=i,s=L.concat(),o=[],m=g)):t("text",a[0],n)}else(a[2]||a[3])&&t("comment",a[0],n,{content:a[2]||a[3],long:!!a[2]});else t("tagend",a[0],n,{tagName:i});e.length>g&&t("text",l=e.substring(g,e.length),g),d.fire("end",{pos:g,line:v,col:e.length-p+1})},addListener:function(e,t){for(var a,n=this._listeners,i=e.split(/[,\s]/),r=0,s=i.length;r<s;r++)n[a=i[r]]===N&&(n[a]=[]),n[a].push(t)},fire:function(e,t){(t=t===N?{}:t).type=e;var a=this,n=[],e=a._listeners[e],i=a._listeners.all,e=(e!==N&&(n=n.concat(e)),i!==N&&(n=n.concat(i)),a.lastEvent);null!==e&&(delete e.lastEvent,t.lastEvent=e),a.lastEvent=t;for(var r=0,s=n.length;r<s;r++)n[r].call(a,t)},removeListener:function(e,t){var a=this._listeners[e];if(a!==N)for(var n=0,i=a.length;n<i;n++)if(a[n]===t){a.splice(n,1);break}},fixPos:function(e,t){var a=e.raw.substr(0,t).split(/\r?\n/),n=a.length-1,i=e.line,a=0<n?(i+=n,a[n].length+1):e.col+t;return{line:i,col:a}},getMapAttrs:function(e){for(var t,a={},n=0,i=e.length;n<i;n++)a[(t=e[n]).name]=t.value;return a}},e}());"object"==typeof exports&&exports&&(exports.HTMLParser=HTMLParser),HTMLHint.addRule({id:"alt-require",description:"The alt attribute of an <img> element must be present and alt attribute of area[href] and input[type=image] must have a value.",init:function(i,r){var s=this;i.addListener("tagstart",function(e){var t=e.tagName.toLowerCase(),a=i.getMapAttrs(e.attrs),n=e.col+t.length+1;"img"!==t||"alt"in a?!("area"===t&&"href"in a||"input"===t&&"image"===a.type)||"alt"in a&&""!==a.alt||r.warn("The alt attribute of "+("area"===t?"area[href]":"input[type=image]")+" must have a value.",e.line,n,s,e.raw):r.warn("An alt attribute must be present on <img> elements.",e.line,n,s,e.raw)})}}),HTMLHint.addRule({id:"attr-lowercase",description:"All attribute names must be in lowercase.",init:function(e,o,t){var l=this,d=Array.isArray(t)?t:[];e.addListener("tagstart",function(e){for(var t=e.attrs,a=e.col+e.tagName.length+1,n=0,i=t.length;n<i;n++){var r,s=(r=t[n]).name;-1===d.indexOf(s)&&s!==s.toLowerCase()&&o.error("The attribute name of [ "+s+" ] must be in lowercase.",e.line,a+r.index,l,r.raw)}})}}),HTMLHint.addRule({id:"attr-no-duplication",description:"Elements cannot have duplicate attributes.",init:function(e,l){var d=this;e.addListener("tagstart",function(e){for(var t,a,n=e.attrs,i=e.col+e.tagName.length+1,r={},s=0,o=n.length;s<o;s++)!0===r[a=(t=n[s]).name]&&l.error("Duplicate of attribute name [ "+t.name+" ] was found.",e.line,i+t.index,d,t.raw),r[a]=!0})}}),HTMLHint.addRule({id:"attr-unsafe-chars",description:"Attribute values cannot contain unsafe chars.",init:function(e,l){var d=this;e.addListener("tagstart",function(e){for(var t,a,n=e.attrs,i=e.col+e.tagName.length+1,r=/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/,s=0,o=n.length;s<o;s++)null!==(a=(t=n[s]).value.match(r))&&(a=escape(a[0]).replace(/%u/,"\\u").replace(/%/,"\\x"),l.warn("The value of attribute [ "+t.name+" ] cannot contain an unsafe char [ "+a+" ].",e.line,i+t.index,d,t.raw))})}}),HTMLHint.addRule({id:"attr-value-double-quotes",description:"Attribute values must be in double quotes.",init:function(e,s){var o=this;e.addListener("tagstart",function(e){for(var t,a=e.attrs,n=e.col+e.tagName.length+1,i=0,r=a.length;i<r;i++)(""!==(t=a[i]).value&&'"'!==t.quote||""===t.value&&"'"===t.quote)&&s.error("The value of attribute [ "+t.name+" ] must be in double quotes.",e.line,n+t.index,o,t.raw)})}}),HTMLHint.addRule({id:"attr-value-not-empty",description:"All attributes must have values.",init:function(e,s){var o=this;e.addListener("tagstart",function(e){for(var t,a=e.attrs,n=e.col+e.tagName.length+1,i=0,r=a.length;i<r;i++)""===(t=a[i]).quote&&""===t.value&&s.warn("The attribute [ "+t.name+" ] must have a value.",e.line,n+t.index,o,t.raw)})}}),HTMLHint.addRule({id:"csslint",description:"Scan css with csslint.",init:function(e,i,r){var s=this;e.addListener("cdata",function(e){if("style"===e.tagName.toLowerCase()){var t=("object"==typeof exports&&require?require("csslint").CSSLint:CSSLint).verify;if(void 0!==r){var a=e.line-1,n=e.col-1;try{t(e.raw,r).messages.forEach(function(e){var t=e.line;i["warning"===e.type?"warn":"error"]("["+e.rule.id+"] "+e.message,a+t,(1===t?n:0)+e.col,s,e.evidence)})}catch(e){}}}})}}),HTMLHint.addRule({id:"doctype-first",description:"Doctype must be declared first.",init:function(t,a){function n(e){"start"===e.type||"text"===e.type&&/^\s*$/.test(e.raw)||(("comment"!==e.type&&!1===e.long||!1===/^DOCTYPE\s+/i.test(e.content))&&a.error("Doctype must be declared first.",e.line,e.col,i,e.raw),t.removeListener("all",n))}var i=this;t.addListener("all",n)}}),HTMLHint.addRule({id:"doctype-html5",description:'Invalid doctype. Use: "<!DOCTYPE html>"',init:function(t,a){function n(e){!1===e.long&&"doctype html"!==e.content.toLowerCase()&&a.warn('Invalid doctype. Use: "<!DOCTYPE html>"',e.line,e.col,i,e.raw)}var i=this;t.addListener("all",n),t.addListener("tagstart",function e(){t.removeListener("comment",n),t.removeListener("tagstart",e)})}}),HTMLHint.addRule({id:"head-script-disabled",description:"The <script> tag cannot be used in a <head> tag.",init:function(n,i){function a(e){var t=n.getMapAttrs(e.attrs).type,a=e.tagName.toLowerCase();!0!==(o="head"===a?!0:o)||"script"!==a||t&&!0!==s.test(t)||i.warn("The <script> tag cannot be used in a <head> tag.",e.line,e.col,r,e.raw)}var r=this,s=/^(text\/javascript|application\/javascript)$/i,o=!1;n.addListener("tagstart",a),n.addListener("tagend",function e(t){"head"===t.tagName.toLowerCase()&&(n.removeListener("tagstart",a),n.removeListener("tagend",e))})}}),HTMLHint.addRule({id:"href-abs-or-rel",description:"An href attribute must be either absolute or relative.",init:function(e,s,t){var o=this,l="abs"===t?"absolute":"relative";e.addListener("tagstart",function(e){for(var t,a=e.attrs,n=e.col+e.tagName.length+1,i=0,r=a.length;i<r;i++)if("href"===(t=a[i]).name){("absolute"==l&&!1===/^\w+?:/.test(t.value)||"relative"==l&&!0===/^https?:\/\//.test(t.value))&&s.warn("The value of the href attribute [ "+t.value+" ] must be "+l+".",e.line,n+t.index,o,t.raw);break}})}}),HTMLHint.addRule({id:"id-class-ad-disabled",description:"The id and class attributes cannot use the ad keyword, it will be blocked by adblock software.",init:function(e,o){var l=this;e.addListener("tagstart",function(e){for(var t,a,n=e.attrs,i=e.col+e.tagName.length+1,r=0,s=n.length;r<s;r++)a=(t=n[r]).name,/^(id|class)$/i.test(a)&&/(^|[-\_])ad([-\_]|$)/i.test(t.value)&&o.warn("The value of attribute "+a+" cannot use the ad keyword.",e.line,i+t.index,l,t.raw)})}}),HTMLHint.addRule({id:"id-class-value",description:"The id and class attribute values must meet the specified rules.",init:function(e,u,t){var c,f,h=this;(t="string"==typeof t?{underline:{regId:/^[a-z\d]+(_[a-z\d]+)*$/,message:"The id and class attribute values must be in lowercase and split by an underscore."},dash:{regId:/^[a-z\d]+(-[a-z\d]+)*$/,message:"The id and class attribute values must be in lowercase and split by a dash."},hump:{regId:/^[a-z][a-zA-Z\d]*([A-Z][a-zA-Z\d]*)*$/,message:"The id and class attribute values must meet the camelCase style."}}[t]:t)&&t.regId&&(c=t.regId,f=t.message,e.addListener("tagstart",function(e){for(var t,a=e.attrs,n=e.col+e.tagName.length+1,i=0,r=a.length;i<r;i++)if("id"===(t=a[i]).name.toLowerCase()&&!1===c.test(t.value)&&u.warn(f,e.line,n+t.index,h,t.raw),"class"===t.name.toLowerCase())for(var s,o=t.value.split(/\s+/g),l=0,d=o.length;l<d;l++)(s=o[l])&&!1===c.test(s)&&u.warn(f,e.line,n+t.index,h,s)}))}}),HTMLHint.addRule({id:"id-unique",description:"The value of id attributes must be unique.",init:function(e,o){var l=this,d={};e.addListener("tagstart",function(e){for(var t,a,n=e.attrs,i=e.col+e.tagName.length+1,r=0,s=n.length;r<s;r++)if("id"===(t=n[r]).name.toLowerCase()){(a=t.value)&&(void 0===d[a]?d[a]=1:d[a]++,1<d[a])&&o.error("The id value [ "+a+" ] must be unique.",e.line,i+t.index,l,t.raw);break}})}}),HTMLHint.addRule({id:"inline-script-disabled",description:"Inline script cannot be used.",init:function(e,l){var d=this;e.addListener("tagstart",function(e){for(var t,a,n=e.attrs,i=e.col+e.tagName.length+1,r=/^on(unload|message|submit|select|scroll|resize|mouseover|mouseout|mousemove|mouseleave|mouseenter|mousedown|load|keyup|keypress|keydown|focus|dblclick|click|change|blur|error)$/i,s=0,o=n.length;s<o;s++)a=(t=n[s]).name.toLowerCase(),!0!==r.test(a)&&("src"!==a&&"href"!==a||!/^\s*javascript:/i.test(t.value))||l.warn("Inline script [ "+t.raw+" ] cannot be used.",e.line,i+t.index,d,t.raw)})}}),HTMLHint.addRule({id:"inline-style-disabled",description:"Inline style cannot be used.",init:function(e,s){var o=this;e.addListener("tagstart",function(e){for(var t,a=e.attrs,n=e.col+e.tagName.length+1,i=0,r=a.length;i<r;i++)"style"===(t=a[i]).name.toLowerCase()&&s.warn("Inline style [ "+t.raw+" ] cannot be used.",e.line,n+t.index,o,t.raw)})}}),HTMLHint.addRule({id:"jshint",description:"Scan script with jshint.",init:function(r,s,o){var l=this;r.addListener("cdata",function(e){if("script"===e.tagName.toLowerCase()){var t=r.getMapAttrs(e.attrs),a=t.type;if(!(void 0!==t.src||a&&!1===/^(text\/javascript)$/i.test(a))){t="object"==typeof exports&&require?require("jshint").JSHINT:JSHINT;if(void 0!==o){var n=e.line-1,i=e.col-1,a=e.raw.replace(/\t/g," ");try{!1===t(a,o)&&t.errors.forEach(function(e){var t=e.line;s.warn(e.reason,n+t,(1===t?i:0)+e.character,l,e.evidence)})}catch(e){}}}}})}}),HTMLHint.addRule({id:"space-tab-mixed-disabled",description:"Do not mix tabs and spaces for indentation.",init:function(r,s,e){var o=this,l="nomix",d=null;"string"==typeof e&&(e=e.match(/^([a-z]+)(\d+)?/),l=e[1],d=e[2]&&parseInt(e[2],10)),r.addListener("text",function(e){for(var t=e.raw,a=/(^|\r?\n)([ \t]+)/g;n=a.exec(t);){var n,i=r.fixPos(e,n.index+n[1].length);1===i.col&&(n=n[2],"space"===l?d?!1!==/^ +$/.test(n)&&0==n.length%d||s.warn("Please use space for indentation and keep "+d+" length.",i.line,1,o,e.raw):!1===/^ +$/.test(n)&&s.warn("Please use space for indentation.",i.line,1,o,e.raw):"tab"===l&&!1===/^\t+$/.test(n)?s.warn("Please use tab for indentation.",i.line,1,o,e.raw):!0===/ +\t|\t+ /.test(n)&&s.warn("Do not mix tabs and spaces for indentation.",i.line,1,o,e.raw))}})}}),HTMLHint.addRule({id:"spec-char-escape",description:"Special characters must be escaped.",init:function(r,s){var o=this;r.addListener("text",function(e){for(var t,a=e.raw,n=/[<>]/g;t=n.exec(a);){var i=r.fixPos(e,t.index);s.error("Special characters must be escaped : [ "+t[0]+" ].",i.line,i.col,o,e.raw)}})}}),HTMLHint.addRule({id:"src-not-empty",description:"The src attribute of an img(script,link) must have a value.",init:function(e,o){var l=this;e.addListener("tagstart",function(e){for(var t,a=e.tagName,n=e.attrs,i=e.col+a.length+1,r=0,s=n.length;r<s;r++)t=n[r],(!0===/^(img|script|embed|bgsound|iframe)$/.test(a)&&"src"===t.name||"link"===a&&"href"===t.name||"object"===a&&"data"===t.name)&&""===t.value&&o.error("The attribute [ "+t.name+" ] of the tag [ "+a+" ] must have a value.",e.line,i+t.index,l,t.raw)})}}),HTMLHint.addRule({id:"style-disabled",description:"<style> tags cannot be used.",init:function(e,t){var a=this;e.addListener("tagstart",function(e){"style"===e.tagName.toLowerCase()&&t.warn("The <style> tag cannot be used.",e.line,e.col,a,e.raw)})}}),HTMLHint.addRule({id:"tag-pair",description:"Tag must be paired.",init:function(e,s){var o=this,l=[],a=e.makeMap("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed,track,command,source,keygen,wbr");e.addListener("tagstart",function(e){var t=e.tagName.toLowerCase();void 0!==a[t]||e.close||l.push({tagName:t,line:e.line,raw:e.raw})}),e.addListener("tagend",function(e){for(var t=e.tagName.toLowerCase(),a=l.length-1;0<=a&&l[a].tagName!==t;a--);if(0<=a){for(var n,i=[],r=l.length-1;a<r;r--)i.push("</"+l[r].tagName+">");0<i.length&&(n=l[l.length-1],s.error("Tag must be paired, missing: [ "+i.join("")+" ], start tag match failed [ "+n.raw+" ] on line "+n.line+".",e.line,e.col,o,e.raw)),l.length=a}else s.error("Tag must be paired, no start tag: [ "+e.raw+" ]",e.line,e.col,o,e.raw)}),e.addListener("end",function(e){for(var t,a=[],n=l.length-1;0<=n;n--)a.push("</"+l[n].tagName+">");0<a.length&&(t=l[l.length-1],s.error("Tag must be paired, missing: [ "+a.join("")+" ], open tag match failed [ "+t.raw+" ] on line "+t.line+".",e.line,e.col,o,""))})}}),HTMLHint.addRule({id:"tag-self-close",description:"Empty tags must be self closed.",init:function(e,a){var n=this,i=e.makeMap("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed,track,command,source,keygen,wbr");e.addListener("tagstart",function(e){var t=e.tagName.toLowerCase();void 0===i[t]||e.close||a.warn("The empty tag : [ "+t+" ] must be self closed.",e.line,e.col,n,e.raw)})}}),HTMLHint.addRule({id:"tagname-lowercase",description:"All html element names must be in lowercase.",init:function(e,a){var n=this;e.addListener("tagstart,tagend",function(e){var t=e.tagName;t!==t.toLowerCase()&&a.error("The html element name of [ "+t+" ] must be in lowercase.",e.line,e.col,n,e.raw)})}}),HTMLHint.addRule({id:"title-require",description:"<title> must be present in <head> tag.",init:function(i,r){function s(e){e=e.tagName.toLowerCase();"head"===e?t=!0:"title"===e&&t&&(l=!0)}var o=this,t=!1,l=!1;i.addListener("tagstart",s),i.addListener("tagend",function e(t){var a,n=t.tagName.toLowerCase();l&&"title"===n?("text"!==(a=t.lastEvent).type||"text"===a.type&&!0===/^\s*$/.test(a.raw))&&r.error("<title></title> must not be empty.",t.line,t.col,o,t.raw):"head"===n&&(!1===l&&r.error("<title> must be present in <head> tag.",t.line,t.col,o,t.raw),i.removeListener("tagstart",s),i.removeListener("tagend",e))})}});