/***********************************************************************

  A JavaScript tokenizer / parser / beautifier / compressor.

  This version is suitable for Node.js.  With minimal changes (the
  exports stuff) it should work on any JS platform.

  This file contains the tokenizer/parser.  It is a port to JavaScript
  of parse-js [1], a JavaScript parser library written in Common Lisp
  by Marijn Haverbeke.  Thank you Marijn!

  [1] http://marijn.haverbeke.nl/parse-js/

  Exported functions:

    - tokenizer(code) -- returns a function.  Call the returned
      function to fetch the next token.

    - parse(code) -- returns an AST of the given JavaScript code.

  -------------------------------- (C) ---------------------------------

                           Author: Mihai Bazon
                         <mihai.bazon@gmail.com>
                       http://mihai.bazon.net/blog

  Distributed under the BSD license:

    Copyright 2010 (c) Mihai Bazon <mihai.bazon@gmail.com>
    Based on parse-js (http://marijn.haverbeke.nl/parse-js/).

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions
    are met:

        * Redistributions of source code must retain the above
          copyright notice, this list of conditions and the following
          disclaimer.

        * Redistributions in binary form must reproduce the above
          copyright notice, this list of conditions and the following
          disclaimer in the documentation and/or other materials
          provided with the distribution.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDER “AS IS” AND ANY
    EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
    PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER BE
    LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY,
    OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
    PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
    PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
    THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
    TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
    THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
    SUCH DAMAGE.

 ***********************************************************************/
!function(){
/* -----[ Tokenizer (constants) ]----- */
var u=S(["break","case","catch","const","continue","default","delete","do","else","finally","for","function","if","in","instanceof","new","return","switch","throw","try","typeof","var","void","while","with"]),n=(S(["abstract","boolean","byte","char","class","debugger","double","enum","export","extends","final","float","goto","implements","import","int","interface","long","native","package","private","protected","public","short","static","super","synchronized","throws","transient","volatile"]),S(["return","new","delete","throw","else","case"])),e=S(["false","null","true","undefined"]),t=S(N("+-*&%=<>!?|~^")),r=/^0x[0-9a-f]+$/i,o=/^0[0-7]+$/,A=/^\d*\.?\d*(?:e[+-]?\d*(?:\d\.?|\.?\d)\d*)?$/i,i=S(["in","instanceof","typeof","new","void","delete","++","--","+","-","!","~","&","|","^","*","/","%",">>","<<",">>>","<",">","<=",">=","==","===","!=","!==","?","=","+=","-=","/=","*=","%=",">>=","<<=",">>>=","|=","^=","&=","&&","||"]),c=S(N(" \n\r\t​")),a=S(N("[{}(,.;:")),C=S(N("[]{}(),;:")),s=(S(N("gmsiy")),{letter:new RegExp("[\\u0041-\\u005A\\u0061-\\u007A\\u00AA\\u00B5\\u00BA\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u0523\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0621-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971\\u0972\\u097B-\\u097F\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C33\\u0C35-\\u0C39\\u0C3D\\u0C58\\u0C59\\u0C60\\u0C61\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDE\\u0CE0\\u0CE1\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D28\\u0D2A-\\u0D39\\u0D3D\\u0D60\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E46\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EDC\\u0EDD\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8B\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10A0-\\u10C5\\u10D0-\\u10FA\\u10FC\\u1100-\\u1159\\u115F-\\u11A2\\u11A8-\\u11F9\\u1200-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u1676\\u1681-\\u169A\\u16A0-\\u16EA\\u1700-\\u170C\\u170E-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17D7\\u17DC\\u1820-\\u1877\\u1880-\\u18A8\\u18AA\\u1900-\\u191C\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19A9\\u19C1-\\u19C7\\u1A00-\\u1A16\\u1B05-\\u1B33\\u1B45-\\u1B4B\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u2094\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2183\\u2184\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2C6F\\u2C71-\\u2C7D\\u2C80-\\u2CE4\\u2D00-\\u2D25\\u2D30-\\u2D65\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005\\u3006\\u3031-\\u3035\\u303B\\u303C\\u3041-\\u3096\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31B7\\u31F0-\\u31FF\\u3400\\u4DB5\\u4E00\\u9FC3\\uA000-\\uA48C\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA65F\\uA662-\\uA66E\\uA67F-\\uA697\\uA717-\\uA71F\\uA722-\\uA788\\uA78B\\uA78C\\uA7FB-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA90A-\\uA925\\uA930-\\uA946\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAC00\\uD7A3\\uF900-\\uFA2D\\uFA30-\\uFA6A\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]"),non_spacing_mark:new RegExp("[\\u0300-\\u036F\\u0483-\\u0487\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u064B-\\u065E\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0900-\\u0902\\u093C\\u0941-\\u0948\\u094D\\u0951-\\u0955\\u0962\\u0963\\u0981\\u09BC\\u09C1-\\u09C4\\u09CD\\u09E2\\u09E3\\u0A01\\u0A02\\u0A3C\\u0A41\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81\\u0A82\\u0ABC\\u0AC1-\\u0AC5\\u0AC7\\u0AC8\\u0ACD\\u0AE2\\u0AE3\\u0B01\\u0B3C\\u0B3F\\u0B41-\\u0B44\\u0B4D\\u0B56\\u0B62\\u0B63\\u0B82\\u0BC0\\u0BCD\\u0C3E-\\u0C40\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0CBC\\u0CBF\\u0CC6\\u0CCC\\u0CCD\\u0CE2\\u0CE3\\u0D41-\\u0D44\\u0D4D\\u0D62\\u0D63\\u0DCA\\u0DD2-\\u0DD4\\u0DD6\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EB9\\u0EBB\\u0EBC\\u0EC8-\\u0ECD\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F71-\\u0F7E\\u0F80-\\u0F84\\u0F86\\u0F87\\u0F90-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102D-\\u1030\\u1032-\\u1037\\u1039\\u103A\\u103D\\u103E\\u1058\\u1059\\u105E-\\u1060\\u1071-\\u1074\\u1082\\u1085\\u1086\\u108D\\u109D\\u135F\\u1712-\\u1714\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B7-\\u17BD\\u17C6\\u17C9-\\u17D3\\u17DD\\u180B-\\u180D\\u18A9\\u1920-\\u1922\\u1927\\u1928\\u1932\\u1939-\\u193B\\u1A17\\u1A18\\u1A56\\u1A58-\\u1A5E\\u1A60\\u1A62\\u1A65-\\u1A6C\\u1A73-\\u1A7C\\u1A7F\\u1B00-\\u1B03\\u1B34\\u1B36-\\u1B3A\\u1B3C\\u1B42\\u1B6B-\\u1B73\\u1B80\\u1B81\\u1BA2-\\u1BA5\\u1BA8\\u1BA9\\u1C2C-\\u1C33\\u1C36\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE0\\u1CE2-\\u1CE8\\u1CED\\u1DC0-\\u1DE6\\u1DFD-\\u1DFF\\u20D0-\\u20DC\\u20E1\\u20E5-\\u20F0\\u2CEF-\\u2CF1\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F\\uA67C\\uA67D\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA825\\uA826\\uA8C4\\uA8E0-\\uA8F1\\uA926-\\uA92D\\uA947-\\uA951\\uA980-\\uA982\\uA9B3\\uA9B6-\\uA9B9\\uA9BC\\uAA29-\\uAA2E\\uAA31\\uAA32\\uAA35\\uAA36\\uAA43\\uAA4C\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uABE5\\uABE8\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE26]"),space_combining_mark:new RegExp("[\\u0903\\u093E-\\u0940\\u0949-\\u094C\\u094E\\u0982\\u0983\\u09BE-\\u09C0\\u09C7\\u09C8\\u09CB\\u09CC\\u09D7\\u0A03\\u0A3E-\\u0A40\\u0A83\\u0ABE-\\u0AC0\\u0AC9\\u0ACB\\u0ACC\\u0B02\\u0B03\\u0B3E\\u0B40\\u0B47\\u0B48\\u0B4B\\u0B4C\\u0B57\\u0BBE\\u0BBF\\u0BC1\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCC\\u0BD7\\u0C01-\\u0C03\\u0C41-\\u0C44\\u0C82\\u0C83\\u0CBE\\u0CC0-\\u0CC4\\u0CC7\\u0CC8\\u0CCA\\u0CCB\\u0CD5\\u0CD6\\u0D02\\u0D03\\u0D3E-\\u0D40\\u0D46-\\u0D48\\u0D4A-\\u0D4C\\u0D57\\u0D82\\u0D83\\u0DCF-\\u0DD1\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0F3E\\u0F3F\\u0F7F\\u102B\\u102C\\u1031\\u1038\\u103B\\u103C\\u1056\\u1057\\u1062-\\u1064\\u1067-\\u106D\\u1083\\u1084\\u1087-\\u108C\\u108F\\u109A-\\u109C\\u17B6\\u17BE-\\u17C5\\u17C7\\u17C8\\u1923-\\u1926\\u1929-\\u192B\\u1930\\u1931\\u1933-\\u1938\\u19B0-\\u19C0\\u19C8\\u19C9\\u1A19-\\u1A1B\\u1A55\\u1A57\\u1A61\\u1A63\\u1A64\\u1A6D-\\u1A72\\u1B04\\u1B35\\u1B3B\\u1B3D-\\u1B41\\u1B43\\u1B44\\u1B82\\u1BA1\\u1BA6\\u1BA7\\u1BAA\\u1C24-\\u1C2B\\u1C34\\u1C35\\u1CE1\\u1CF2\\uA823\\uA824\\uA827\\uA880\\uA881\\uA8B4-\\uA8C3\\uA952\\uA953\\uA983\\uA9B4\\uA9B5\\uA9BA\\uA9BB\\uA9BD-\\uA9C0\\uAA2F\\uAA30\\uAA33\\uAA34\\uAA4D\\uAA7B\\uABE3\\uABE4\\uABE6\\uABE7\\uABE9\\uABEA\\uABEC]"),connector_punctuation:new RegExp("[\\u005F\\u203F\\u2040\\u2054\\uFE33\\uFE34\\uFE4D-\\uFE4F\\uFF3F]")});function B(u){return s.letter.test(u)}function l(u){return(u=u.charCodeAt(0))>=48&&u<=57;//XXX: find out if "UnicodeDigit" means something else than 0..9
}function F(u){return"$"==u||"_"==u||B(u)}function f(u){return F(u)||function(u){return s.non_spacing_mark.test(u)||s.space_combining_mark.test(u)}(u)||l(u)||function(u){return s.connector_punctuation.test(u)}(u)||"‌"==u||"‍"==u}function D(u,n,e,t){this.message=u,this.line=n,this.col=e,this.pos=t;try{({})()}catch(u){this.stack=u.stack}}function p(u,n,e,t){throw new D(u,n,e,t)}function E(u,n,e){return u.type==n&&(null==e||u.value==e)}D.prototype.toString=function(){return this.message+" (line: "+this.line+", col: "+this.col+", pos: "+this.pos+")\n\n"+this.stack};var v={};function d(s){var D={text:s.replace(/\r\n?|[\n\u2028\u2029]/g,"\n").replace(/^\uFEFF/,""),pos:0,tokpos:0,line:0,tokline:0,col:0,tokcol:0,newline_before:!1,regex_allowed:!1,comments_before:[]};function E(){return D.text.charAt(D.pos)}function d(u){var n=D.text.charAt(D.pos++);if(u&&!n)throw v;return"\n"==n?(D.newline_before=!0,++D.line,D.col=0):++D.col,n}function h(u,n){var e=D.text.indexOf(u,D.pos);if(n&&-1==e)throw v;return e}function m(u,e,t){D.regex_allowed="operator"==u&&!R(k,e)||"keyword"==u&&R(n,e)||"punc"==u&&R(a,e);var r={type:u,value:e,line:D.tokline,col:D.tokcol,pos:D.tokpos,nlb:D.newline_before};return t||(r.comments_before=D.comments_before,D.comments_before=[]),D.newline_before=!1,r}function w(u){p(u,D.tokline,D.tokcol,D.tokpos)}function g(u){var n=!1,e=!1,t=!1,i="."==u,c=function(u){for(var n="",e=E(),t=0;e&&u(e,t++);)n+=d(),e=E();return n}((function(r,o){return"x"==r||"X"==r?!t&&(t=!0):t||"E"!=r&&"e"!=r?"-"==r?!(!e&&(0!=o||u)):"+"==r?e:(e=!1,"."==r?!i&&!t&&(i=!0):function(u){return l(u)||B(u)}(r)):!n&&(n=e=!0)}));u&&(c=u+c);var a=function(u){return r.test(u)?parseInt(u.substr(2),16):o.test(u)?parseInt(u.substr(1),8):A.test(u)?parseFloat(u):void 0}(c);if(!isNaN(a))return m("num",a);w("Invalid syntax: "+c)}function y(){var u=d(!0);switch(u){case"n":return"\n";case"r":return"\r";case"t":return"\t";case"b":return"\b";case"v":return"\v";case"f":return"\f";case"0":return"\0";case"x":return String.fromCharCode(b(2));case"u":return String.fromCharCode(b(4));default:return u}}function b(u){for(var n=0;u>0;--u){var e=parseInt(d(!0),16);isNaN(e)&&w("Invalid hex-character pattern in string"),n=n<<4|e}return n}function x(){for(var u,n=!1,e="";null!=(u=E());)if(n)"u"!=u&&w("Expecting UnicodeEscapeSequence -- uXXXX"),f(u=y())||w("Unicode char: "+u.charCodeAt(0)+" is not valid in identifier"),e+=u,n=!1;else if("\\"==u)n=!0,d();else{if(!f(u))break;e+=d()}return e}function _(){return U("Unterminated regular expression",(function(){for(var u,n=!1,e="",t=!1;u=d(!0);)if(n)e+="\\"+u,n=!1;else if("["==u)t=!0,e+=u;else if("]"==u&&t)t=!1,e+=u;else{if("/"==u&&!t)break;"\\"==u?n=!0:e+=u}return m("regexp",[e,x()])}))}function I(u){return m("operator",function u(n){if(!E())return n;var e=n+E();return R(i,e)?(d(),u(e)):n}(u||d()))}function S(){d();var u=D.regex_allowed;switch(E()){case"/":return D.comments_before.push(function(){d();var u,n=h("\n");return-1==n?(u=D.text.substr(D.pos),D.pos=D.text.length):(u=D.text.substring(D.pos,n),D.pos=n),m("comment1",u,!0)}()),D.regex_allowed=u,N();case"*":return D.comments_before.push((d(),U("Unterminated multiline comment",(function(){var u=h("*/",!0),n=D.text.substring(D.pos,u),e=m("comment2",n,!0);return D.pos=u+2,D.line+=n.split("\n").length-1,D.newline_before=n.indexOf("\n")>=0,
// https://github.com/mishoo/UglifyJS/issues/#issue/100
/^@cc_on/i.test(n)&&(j("WARNING: at line "+D.line),j('*** Found "conditional comment": '+n),j("*** UglifyJS DISCARDS ALL COMMENTS.  This means your code might no longer work properly in Internet Explorer.")),e})))),D.regex_allowed=u,N()}return D.regex_allowed?_():I("/")}function U(u,n){try{return n()}catch(n){if(n!==v)throw n;w(u)}}function N(n){if(n)return _();!function(){for(;R(c,E());)d()}(),D.tokline=D.line,D.tokcol=D.col,D.tokpos=D.pos;var r,o=E();return o?l(o)?g():'"'==o||"'"==o?U("Unterminated string constant",(function(){for(var u=d(),n="";;){var e=d(!0);if("\\"==e)e=y();else if(e==u)break;n+=e}return m("string",n)})):R(C,o)?m("punc",d()):"."==o?(d(),l(E())?g("."):m("punc",".")):"/"==o?S():R(t,o)?I():"\\"==o||F(o)?(r=x(),R(u,r)?R(i,r)?m("operator",r):R(e,r)?m("atom",r):m("keyword",r):m("name",r)):void w("Unexpected character '"+o+"'"):m("eof")}return N.context=function(u){return u&&(D=u),D},N}
/* -----[ Parser (constants) ]----- */
var h=S(["typeof","void","delete","--","++","!","~","-","+"]),k=S(["--","++"]),m=function(u,n,e){for(;e<u.length;)n[u[e]]=u[e].substr(0,u[e].length-1),e++;return n}(["+=","-=","/=","*=","%=",">>=","<<=",">>>=","|=","^=","&="],{"=":!0},0),w=function(u,n){for(var e=0,t=1;e<u.length;++e,++t)for(var r=u[e],o=0;o<r.length;++o)n[r[o]]=t;return n}([["||"],["&&"],["|"],["^"],["&"],["==","===","!=","!=="],["<",">","<=",">=","in","instanceof"],[">>","<<",">>>"],["+","-"],["*","/","%"]],{}),g=S(["for","do","while","switch"]),y=S(["atom","num","string","regexp","name"]);
/* -----[ Parser ]----- */
function b(u,n,e){this.name=u,this.start=n,this.end=e}function x(u,n,e){var t={input:"string"==typeof u?d(u):u,token:null,prev:null,peeked:null,in_function:0,in_loop:0,labels:[]};function r(u,n){return E(t.token,u,n)}function o(){return t.prev=t.token,t.peeked?(t.token=t.peeked,t.peeked=null):t.token=t.input(),t.token}function A(){return t.prev}function i(u,n,e,r){var o=t.input.context();p(u,null!=n?n:o.tokline,null!=e?e:o.tokcol,null!=r?r:o.tokpos)}function c(u,n){i(n,u.line,u.col)}function a(u){null==u&&(u=t.token),c(u,"Unexpected token: "+u.type+" ("+u.value+")")}function C(u,n){if(r(u,n))return o();c(t.token,"Unexpected token "+t.token.type+", expected "+u)}function s(u){return C("punc",u)}function B(){return!n&&(t.token.nlb||r("eof")||r("punc","}"))}function l(){r("punc",";")?o():B()||a()}function F(){return U(arguments)}function f(){s("(");var u=Y();return s(")"),u}function D(u,n,e){return u instanceof b?u:new b(u,n,e)}t.token=o();var v=e?function(){var u=t.token,n=x.apply(this,arguments);return n[0]=D(n[0],u,A()),n}:x;function x(){switch(r("operator","/")&&(t.peeked=null,t.token=t.input(!0)),t.token.type){case"num":case"string":case"regexp":case"operator":case"atom":return S();case"name":return E(t.peeked||(t.peeked=t.input()),"punc",":")?function(u){t.labels.push(u);var e=t.token,r=v();n&&!R(g,r[0])&&a(e);return t.labels.pop(),F("label",u,r)}(I(t.token.value,o,o)):S();case"punc":switch(t.token.value){case"{":return F("block",X());case"[":case"(":return S();case";":return o(),F("block");default:a()}case"keyword":switch(I(t.token.value,o)){case"break":return N("break");case"continue":return N("continue");case"debugger":return l(),F("debugger");case"do":return u=Z(v),C("keyword","while"),F("do",I(f,l),u);case"for":return function(){s("(");var u=null;if(!r("punc",";")&&(u=r("keyword","var")?(o(),q(!0)):Y(!0,!0),r("operator","in")))return function(u){var n="var"==u[0]?F("name",u[1][0]):u;o();var e=Y();return s(")"),F("for-in",u,n,e,Z(v))}(u);return function(u){s(";");var n=r("punc",";")?null:Y();s(";");var e=r("punc",")")?null:Y();return s(")"),F("for",u,n,e,Z(v))}(u)}();case"function":return j(!0);case"if":return function(){var u,n=f(),e=v();r("keyword","else")&&(o(),u=v());return F("if",n,e,u)}();case"return":return 0==t.in_function&&i("'return' outside of function"),F("return",r("punc",";")?(o(),null):B()?null:I(Y,l));case"switch":return F("switch",f(),M());case"throw":return F("throw",I(Y,l));case"try":return function(){var u,n,e=X();if(r("keyword","catch")){o(),s("("),r("name")||i("Name expected");var A=t.token.value;o(),s(")"),u=[A,X()]}r("keyword","finally")&&(o(),n=X());u||n||i("Missing catch/finally blocks");return F("try",e,u,n)}();case"var":return I(q,l);case"const":return I(J,l);case"while":return F("while",f(),Z(v));case"with":return F("with",f(),v());default:a()}}var u}function S(){return F("stat",I(Y,l))}function N(u){var n=r("name")?t.token.value:null;return null!=n?(o(),function(u,n){for(var e=n.length;--e>=0;)if(n[e]===u)return!0;return!1}(n,t.labels)||i("Label "+n+" without matching loop or statement")):0==t.in_loop&&i(u+" not inside a loop or switch"),l(),F(u,n)}var j=e?function(){var u=A(),n=O.apply(this,arguments);return n[0]=D(n[0],u,A()),n}:O;function O(u){var n=r("name")?I(t.token.value,o):null;return u&&!n&&a(),s("("),F(u?"defun":"function",n,
// arguments
function(u,n){for(;!r("punc",")");)u?u=!1:s(","),r("name")||a(),n.push(t.token.value),o();return o(),n}(!0,[]),
// body
function(){++t.in_function;var u=t.in_loop;t.in_loop=0;var n=X();return--t.in_function,t.in_loop=u,n}())}function X(){s("{");for(var u=[];!r("punc","}");)r("eof")&&a(),u.push(v());return o(),u}var M=_(Z,(function(){s("{");for(var u=[],n=null;!r("punc","}");)r("eof")&&a(),r("keyword","case")?(o(),n=[],u.push([Y(),n]),s(":")):r("keyword","default")?(o(),s(":"),n=[],u.push([null,n])):(n||a(),n.push(v()));return o(),u}));function $(u){for(var n=[];;){r("name")||a();var e=t.token.value;if(o(),r("operator","=")?(o(),n.push([e,Y(!1,u)])):n.push([e]),!r("punc",","))break;o()}return n}function q(u){return F("var",$(u))}function J(){return F("const",$())}function L(u){if(r("operator","new"))return o(),A=L(!1),r("punc","(")?(o(),e=T(")")):e=[],P(F("new",A,e),!0);var e,A;if(r("operator")&&R(h,t.token.value))return W("unary-prefix",I(t.token.value,o),L(u));if(r("punc")){switch(t.token.value){case"(":return o(),P(I(Y,_(s,")")),u);case"[":return o(),P(F("array",T("]",!n,!0)),u);case"{":return o(),P(function(){var u=!0,e=[];for(;!r("punc","}")&&(u?u=!1:s(","),n||!r("punc","}"));){var A=t.token.type,i=z();"name"!=A||"get"!=i&&"set"!=i||r("punc",":")?(s(":"),e.push([i,Y(!1)])):e.push([G(),j(!1),i])}return o(),F("object",e)}(),u)}a()}return r("keyword","function")?(o(),P(j(!1),u)):R(y,t.token.type)?P(I("regexp"==t.token.type?F("regexp",t.token.value[0],t.token.value[1]):F(t.token.type,t.token.value),o),u):void a()}function T(u,n,e){for(var t=!0,A=[];!r("punc",u)&&(t?t=!1:s(","),!n||!r("punc",u));)r("punc",",")&&e?A.push(["atom","undefined"]):A.push(Y(!1));return o(),A}function z(){switch(t.token.type){case"num":case"string":return I(t.token.value,o)}return G()}function G(){switch(t.token.type){case"name":case"operator":case"keyword":case"atom":return I(t.token.value,o);default:a()}}function P(u,n){return r("punc",".")?(o(),P(F("dot",u,G()),n)):r("punc","[")?(o(),P(F("sub",u,I(Y,_(s,"]"))),n)):n&&r("punc","(")?(o(),P(F("call",u,T(")")),!0)):n&&r("operator")&&R(k,t.token.value)?I(_(W,"unary-postfix",t.token.value,u),o):u}function W(u,n,e){return"++"!=n&&"--"!=n||Q(e)||i("Invalid use of "+n+" operator"),F(u,n,e)}function H(u,n,e){var A=r("operator")?t.token.value:null;A&&"in"==A&&e&&(A=null);var i=null!=A?w[A]:null;if(null!=i&&i>n){o();var c=H(L(!0),i,e);return H(F("binary",A,u,c),n,e)}return u}function K(u){return H(L(!0),0,u)}function Q(u){if(!n)return!0;switch(u[0]){case"dot":case"sub":case"new":case"call":return!0;case"name":return"this"!=u[1]}}function V(u){var n=function(u){var n=K(u);if(r("operator","?")){o();var e=Y(!1);return s(":"),F("conditional",n,e,Y(!1,u))}return n}(u),e=t.token.value;if(r("operator")&&R(m,e)){if(Q(n))return o(),F("assign",m[e],n,V(u));i("Invalid assignment")}return n}function Y(u,n){0==arguments.length&&(u=!0);var e=V(n);return u&&r("punc",",")?(o(),F("seq",e,Y(!0,n))):e}function Z(u){try{return++t.in_loop,u()}finally{--t.in_loop}}return F("toplevel",function(u){for(;!r("eof");)u.push(v());return u}([]))}
/* -----[ Utilities ]----- */
function _(u){var n=U(arguments,1);return function(){return u.apply(this,n.concat(U(arguments)))}}function I(u){u instanceof Function&&(u=u());for(var n=1,e=arguments.length;--e>0;++n)arguments[n]();return u}function S(u){for(var n={},e=0;e<u.length;++e)n[u[e]]=!0;return n}function U(u,n){return Array.prototype.slice.call(u,null==n?0:n)}function N(u){return u.split("")}function R(u,n){return Object.prototype.hasOwnProperty.call(u,n)}b.prototype.toString=function(){return this.name};var j=function(){},O=function(u){u.modules.parser||(u.parse=x,u.modules.parser=!0)},X="undefined"!=typeof require&&"undefined"!=typeof module&&module.exports,M="undefined"!=typeof define&&define.amd;
/* -----[ Exports ]----- */if(X)module.exports.init=O;else if(M)define("jscex-parser",(function(){return{init:O}}));else{if("undefined"==typeof Jscex)throw new Error('Missing root object, please load "jscex" module first.');O(Jscex)}
/*
scope.tokenizer = tokenizer;
scope.parse = parse;
scope.slice = slice;
scope.curry = curry;
scope.member = member;
scope.array_to_hash = array_to_hash;
scope.PRECEDENCE = PRECEDENCE;
scope.KEYWORDS_ATOM = KEYWORDS_ATOM;
scope.RESERVED_WORDS = RESERVED_WORDS;
scope.KEYWORDS = KEYWORDS;
scope.ATOMIC_START_TOKEN = ATOMIC_START_TOKEN;
scope.OPERATORS = OPERATORS;
scope.is_alphanumeric_char = is_alphanumeric_char;
scope.set_logger = function (logger) {
    warn = logger;
};
*/}();