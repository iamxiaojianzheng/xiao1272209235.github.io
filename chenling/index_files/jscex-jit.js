!function(){var codeGenerator="function"==typeof eval("(function () {})")?function(t){return t}:function(t){return"false || "+t},stringify="undefined"!=typeof JSON&&JSON.stringify?function(t){return JSON.stringify(t)}:function(){var i=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,e={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(t){return i.lastIndex=0,i.test(t)?'"'+t.replace(i,function(t){var i=e[t];return"s"==typeof i?i:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}}(),init=("undefined"==typeof __jscex__tempVarSeed&&(__jscex__tempVarSeed=0),function(h){function r(t){this._binder=t,this._root=null}function _(t,i,e){this._builderName=t,this._binder=i,this._normalMode=!1,this._indent=e,this._indentLevel=0,this._builderVar="$$_builder_$$_"+__jscex__tempVarSeed++}function o(t,i){var e=t[2][0][2][0][1],t=t[2][0][2][1],s=h.binders[e],n=new r(s).generate(t);return new _(e,s,i).generate(t[2],n)}h.modules.jit||(r.prototype={generate:function(t){t[2];t=t[3];return this._root={type:"delay",stmts:[]},this._visitStatements(t,this._root.stmts),this._root},_getBindInfo:function(t){var i=t[0];if("stat"==i){var e=t[1];if("call"==e[0]){if("name"==(r=e[1])[0]&&r[1]==this._binder&&1==e[2].length)return{expression:e[2][0],argName:"",assignee:null}}else if("assign"==e[0]){var s=e[2];if("call"==(e=e[3])[0])if("name"==(r=e[1])[0]&&r[1]==this._binder&&1==e[2].length)return{expression:e[2][0],argName:"$$_result_$$",assignee:s}}}else if("var"==i){s=t[1];if(1==s.length){var s=s[0],n=s[0],e=s[1];if(e&&"call"==e[0])if("name"==(r=e[1])[0]&&r[1]==this._binder&&1==e[2].length)return{expression:e[2][0],argName:n,assignee:null}}}else if("return"==i){var r,e=t[1];if(e&&"call"==e[0])if("name"==(r=e[1])[0]&&r[1]==this._binder&&1==e[2].length)return{expression:e[2][0],argName:"$$_result_$$",assignee:"return"}}return null},_visitStatements:function(t,i,e){var s,n,r;return(e=arguments.length<=2?0:e)>=t.length?i.push({type:"normal"}):(s=t[e],(r=this._getBindInfo(s))?(i.push(n={type:"bind",info:r}),"return"!=r.assignee&&(n.stmts=[],this._visitStatements(t,n.stmts,e+1))):"return"==(r=s[0])||"break"==r||"continue"==r||"throw"==r?i.push({type:r,stmt:s}):"if"==r||"try"==r||"for"==r||"do"==r||"while"==r||"switch"==r||"for-in"==r?"raw"==(n=this._visit(s)).type?(i.push(n),this._visitStatements(t,i,e+1)):e==t.length-1?i.push(n):(i.push(r={type:"combine",first:{type:"delay",stmts:[n]},second:{type:"delay",stmts:[]}}),this._visitStatements(t,r.second.stmts,e+1)):(i.push({type:"raw",stmt:s}),this._visitStatements(t,i,e+1))),this},_visit:function(t){var i=t[0];var e=this._visitors[i];if(e)return e.call(this,t);throw new Error('"'+i+'" is not currently supported.')},_visitBody:function(t,i){"block"==t[0]?this._visitStatements(t[1],i):this._visitStatements([t],i)},_noBinding:function(t){switch(t[t.length-1].type){case"normal":case"return":case"break":case"throw":case"continue":return!0}return!1},_collectCaseStatements:function(t,i){for(var e=[],s=i;s<t.length;s++)for(var n=t[s][1],r=0;r<n.length;r++){if("break"==n[r][0])return e;e.push(n[r])}return e},_visitors:{for:function(t){var i,e=[],s=t[4];return this._visitBody(s,e),this._noBinding(e)?{type:"raw",stmt:t}:(s={type:"delay",stmts:[]},(i=t[1])&&s.stmts.push({type:"raw",stmt:i}),s.stmts.push(i={type:"loop",bodyFirst:!1,bodyStmt:{type:"delay",stmts:e}}),(e=t[2])&&(i.condition=e),(e=t[3])&&(i.update=e),s)},"for-in":function(t){var i,e,s,n,r=t[4],_=[];return this._visitBody(r,_),this._noBinding(_)?{type:"raw",stmt:t}:(i="$$_index_$$_"+(_=__jscex__tempVarSeed++),e={type:"delay",stmts:[]},(s=h.parse("var "+(_="$$_keys_$$_"+_)+" = Jscex._forInKeys(obj);")[1][0])[1][0][1][2][0]=t[3],e.stmts.push({type:"raw",stmt:s}),e.stmts.push({type:"raw",stmt:h.parse("var "+i+" = 0;")[1][0]}),s=h.parse(i+" < "+_+".length")[1][0][1],s={type:"loop",bodyFirst:!1,update:h.parse(i+"++")[1][0][1],condition:s,bodyStmt:{type:"delay",stmts:[]}},e.stmts.push(s),n=t[2][1],"var"==t[1][0]?s.bodyStmt.stmts.push({type:"raw",stmt:h.parse("var "+n+" = "+_+"["+i+"];")[1][0]}):s.bodyStmt.stmts.push({type:"raw",stmt:h.parse(n+" = "+_+"["+i+"];")[1][0]}),this._visitBody(r,s.bodyStmt.stmts),e)},while:function(t){var i=[],e=t[2];return this._visitBody(e,i),this._noBinding(i)?{type:"raw",stmt:t}:(e=t[1],(t={type:"loop",bodyFirst:!1,bodyStmt:{type:"delay",stmts:i}}).condition=e,t)},do:function(t){var i=[],e=t[2];return this._visitBody(e,i),this._noBinding(i)?{type:"raw",stmt:t}:(e=t[1],(t={type:"loop",bodyFirst:!0,bodyStmt:{type:"delay",stmts:i}}).condition=e,t)},switch:function(t){for(var i=!0,e={type:"switch",item:t[1],caseStmts:[]},s=t[2],n=0;n<s.length;n++){var r={item:s[n][0],stmts:[]},_=(e.caseStmts.push(r),this._collectCaseStatements(s,n));this._visitStatements(_,r.stmts),i=i&&this._noBinding(r.stmts)}return i?{type:"raw",stmt:t}:e},if:function(t){for(var i=!0,e={type:"if",conditionStmts:[]},s=t;;){var n,r={cond:s[1],stmts:[]},_=(e.conditionStmts.push(r),s[2]);if(this._visitBody(_,r.stmts),i=i&&this._noBinding(r.stmts),!(n=s[3])||"if"!=n[0])break;s=n}return(n=s[3])&&(e.elseStmts=[],this._visitBody(n,e.elseStmts),i=i&&this._noBinding(e.elseStmts)),i?{type:"raw",stmt:t}:e},try:function(t,i){var e=[],s=t[1],s=(this._visitStatements(s,e),this._noBinding(e)),e={type:"try",bodyStmt:{type:"delay",stmts:e}},n=t[2],r=(n&&(r=n[0],e.exVar=r,e.catchStmts=[],this._visitStatements(n[1],e.catchStmts),s=s&&this._noBinding(e.catchStmts)),t[3]);return r&&(e.finallyStmt={type:"delay",stmts:[]},this._visitStatements(r,e.finallyStmt.stmts),s=s&&this._noBinding(e.finallyStmt.stmts)),s?{type:"raw",stmt:t}:e}}},_.prototype={_write:function(t){return this._buffer.push(t),this},_writeLine:function(t){return this._write(t)._write("\n"),this},_writeIndents:function(){for(var t=0;t<this._indent;t++)this._write(" ");for(t=0;t<this._indentLevel;t++)this._write("    ");return this},generate:function(t,i){return this._buffer=[],this._writeLine("(function ("+t.join(", ")+") {"),this._indentLevel++,this._writeIndents()._writeLine("var "+this._builderVar+" = Jscex.builders["+stringify(this._builderName)+"];"),this._writeIndents()._writeLine("return "+this._builderVar+".Start(this,"),this._indentLevel++,this._pos={},this._writeIndents()._visitJscex(i)._writeLine(),this._indentLevel--,this._writeIndents()._writeLine(");"),this._indentLevel--,this._writeIndents()._write("})"),this._buffer.join("")},_visitJscex:function(t){return this._jscexVisitors[t.type].call(this,t),this},_visitRaw:function(t){var i=t[0];var e=this._rawVisitors[i];if(e)return e.call(this,t),this;throw new Error('"'+i+'" is not currently supported.')},_visitJscexStatements:function(t){for(var i=0;i<t.length;i++){var e=t[i];"raw"==e.type||"if"==e.type||"switch"==e.type?this._writeIndents()._visitJscex(e)._writeLine():"delay"==e.type?this._visitJscexStatements(e.stmts):this._writeIndents()._write("return ")._visitJscex(e)._writeLine(";")}},_visitRawStatements:function(t){for(var i=0;i<t.length;i++){var e=t[i];switch(this._writeIndents()._visitRaw(e)._writeLine(),e[0]){case"break":case"return":case"continue":case"throw":return}}},_visitRawBody:function(t){return"block"==t[0]?this._visitRaw(t):(this._writeLine(),this._indentLevel++,this._writeIndents()._visitRaw(t),this._indentLevel--),this},_visitRawFunction:function(t){var i=t[1]||"",e=t[2],t=t[3],i=(this._writeLine("function "+i+"("+e.join(", ")+") {"),this._indentLevel++,this._pos.inFunction);this._pos.inFunction=!0,this._visitRawStatements(t),this._indentLevel--,this._pos.inFunction=i,this._writeIndents()._write("}")},_jscexVisitors:{delay:function(t){if(1==t.stmts.length){var i=t.stmts[0];switch(i.type){case"delay":case"combine":case"normal":case"break":case"continue":case"loop":case"try":return void this._visitJscex(i);case"return":if(!i.stmt[1])return void this._visitJscex(i)}}this._writeLine(this._builderVar+".Delay(function () {"),this._indentLevel++,this._visitJscexStatements(t.stmts),this._indentLevel--,this._writeIndents()._write("})")},combine:function(t){this._writeLine(this._builderVar+".Combine("),this._indentLevel++,this._writeIndents()._visitJscex(t.first)._writeLine(","),this._writeIndents()._visitJscex(t.second)._writeLine(),this._indentLevel--,this._writeIndents()._write(")")},loop:function(t){this._writeLine(this._builderVar+".Loop("),this._indentLevel++,t.condition?(this._writeIndents()._writeLine("function () {"),this._indentLevel++,this._writeIndents()._write("return ")._visitRaw(t.condition)._writeLine(";"),this._indentLevel--,this._writeIndents()._writeLine("},")):this._writeIndents()._writeLine("null,"),t.update?(this._writeIndents()._writeLine("function () {"),this._indentLevel++,this._writeIndents()._visitRaw(t.update)._writeLine(";"),this._indentLevel--,this._writeIndents()._writeLine("},")):this._writeIndents()._writeLine("null,"),this._writeIndents()._visitJscex(t.bodyStmt)._writeLine(","),this._writeIndents()._writeLine(t.bodyFirst),this._indentLevel--,this._writeIndents()._write(")")},raw:function(t){this._visitRaw(t.stmt)},bind:function(t){var i=t.info;this._write(this._builderVar+".Bind(")._visitRaw(i.expression)._writeLine(", function ("+i.argName+") {"),this._indentLevel++,"return"==i.assignee?this._writeIndents()._writeLine("return "+this._builderVar+".Return("+i.argName+");"):(i.assignee&&this._writeIndents()._visitRaw(i.assignee)._writeLine(" = "+i.argName+";"),this._visitJscexStatements(t.stmts)),this._indentLevel--,this._writeIndents()._write("})")},if:function(t){for(var i=0;i<t.conditionStmts.length;i++){var e=t.conditionStmts[i];this._write("if (")._visitRaw(e.cond)._writeLine(") {"),this._indentLevel++,this._visitJscexStatements(e.stmts),this._indentLevel--,this._writeIndents()._write("} else ")}this._writeLine("{"),this._indentLevel++,t.elseStmts?this._visitJscexStatements(t.elseStmts):this._writeIndents()._writeLine("return "+this._builderVar+".Normal();"),this._indentLevel--,this._writeIndents()._write("}")},switch:function(t){this._write("switch (")._visitRaw(t.item)._writeLine(") {"),this._indentLevel++;for(var i=0;i<t.caseStmts.length;i++){var e=t.caseStmts[i];e.item?this._writeIndents()._write("case ")._visitRaw(e.item)._writeLine(":"):this._writeIndents()._writeLine("default:"),this._indentLevel++,this._visitJscexStatements(e.stmts),this._indentLevel--}this._writeIndents()._write("}")},try:function(t){this._writeLine(this._builderVar+".Try("),this._indentLevel++,this._writeIndents()._visitJscex(t.bodyStmt)._writeLine(","),t.catchStmts?(this._writeIndents()._writeLine("function ("+t.exVar+") {"),this._indentLevel++,this._visitJscexStatements(t.catchStmts),this._indentLevel--,this._writeIndents()._writeLine("},")):this._writeIndents()._writeLine("null,"),t.finallyStmt?this._writeIndents()._visitJscex(t.finallyStmt)._writeLine():this._writeIndents()._writeLine("null"),this._indentLevel--,this._writeIndents()._write(")")},normal:function(t){this._write(this._builderVar+".Normal()")},throw:function(t){this._write(this._builderVar+".Throw(")._visitRaw(t.stmt[1])._write(")")},break:function(t){this._write(this._builderVar+".Break()")},continue:function(t){this._write(this._builderVar+".Continue()")},return:function(t){this._write(this._builderVar+".Return("),t.stmt[1]&&this._visitRaw(t.stmt[1]),this._write(")")}},_rawVisitors:{var:function(t){this._write("var ");for(var i=t[1],e=0;e<i.length;e++)this._write(i[e][0]),1<i[e].length&&this._write(" = ")._visitRaw(i[e][1]),e<i.length-1&&this._write(", ");this._write(";")},seq:function(t){for(var i=1;i<t.length;i++)this._visitRaw(t[i]),i<t.length-1&&this._write(", ")},binary:function(t){var i=t[1],e=t[2],t=t[3];function s(t){t=t[0];return"num"!=t&&"name"!=t&&"dot"!=t}s(e)?this._write("(")._visitRaw(e)._write(") "):this._visitRaw(e)._write(" "),this._write(i),s(t)?this._write(" (")._visitRaw(t)._write(")"):this._write(" ")._visitRaw(t)},sub:function(t){var i=t[1],t=t[2];("name"!=i[0]?this._write("(")._visitRaw(i)._write(")["):this._visitRaw(i)._write("["))._visitRaw(t)._write("]")},"unary-postfix":function(t){var i=t[1],t=t[2];this._visitRaw(t)._write(i)},"unary-prefix":function(t){var i=t[1],t=t[2];this._write(i),"typeof"==i?this._write("(")._visitRaw(t)._write(")"):this._visitRaw(t)},assign:function(t){var i=t[1],e=t[2],t=t[3];this._visitRaw(e),"string"==typeof i?this._write(" "+i+"= "):this._write(" = "),this._visitRaw(t)},stat:function(t){this._visitRaw(t[1])._write(";")},dot:function(t){var i;("dot"!=(i=t[1][0])&&"name"!=i?this._write("(")._visitRaw(t[1])._write(")."):this._visitRaw(t[1])._write("."))._write(t[2])},new:function(t){for(var i=t[1],e=(this._write("new ")._visitRaw(i)._write("("),t[2]),s=0,n=e.length;s<n;s++)this._visitRaw(e[s]),s<n-1&&this._write(", ");this._write(")")},call:function(t){if("call"!=(n=t)[0]||"name"!=(i=n[1])[0]||"eval"!=i[1]||(!(i=n[2][0])||"call"!=i[0]||!((n=i[1])&&"dot"==n[0]&&"compile"==n[2]&&(n=n[1])&&"name"==n[0]&&"Jscex"==n[1]&&(n=i[2][0])&&"string"==n[0]&&(n=i[2][1])&&"function"==n[0]))){for(var i="name"==t[1][0]&&t[1][1]==this._binder,e=(i&&(this._pos={inFunction:!0},this._buffer=[]),this._visitRaw(t[1])._write("("),t[2]),s=0;s<e.length;s++)this._visitRaw(e[s]),s<e.length-1&&this._write(", ");if(this._write(")"),i)throw"Invalid bind operation: "+this._buffer.join("")}else{n=o(t,this._indent+4*this._indentLevel);this._write(n)}var n,i},name:function(t){this._write(t[1])},object:function(t){var i=t[1];if(i.length<=0)this._write("{ }");else{this._writeLine("{"),this._indentLevel++;for(var e=0;e<i.length;e++)this._writeIndents()._write(stringify(i[e][0])+": ")._visitRaw(i[e][1]),e<i.length-1?this._writeLine(","):this._writeLine("");this._indentLevel--,this._writeIndents()._write("}")}},array:function(t){this._write("[");for(var i=t[1],e=0;e<i.length;e++)this._visitRaw(i[e]),e<i.length-1&&this._write(", ");this._write("]")},num:function(t){this._write(t[1])},regexp:function(t){this._write("/"+t[1]+"/"+t[2])},string:function(t){this._write(stringify(t[1]))},function:function(t){this._visitRawFunction(t)},defun:function(t){this._visitRawFunction(t)},return:function(t){var i;(this._pos.inFunction?(this._write("return"),(i=t[1])&&this._write(" ")._visitRaw(i),this):this._write("return ")._visitJscex({type:"return",stmt:t}))._write(";")},for:function(t){this._write("for (");var i=t[1],i=(!i||(this._visitRaw(i),"var"!=i[0])?this._write("; "):this._write(" "),t[2]),i=(i&&this._visitRaw(i),this._write("; "),t[3]),i=(i&&this._visitRaw(i),this._write(") "),this._pos.inLoop),t=(this._pos.inLoop=!0,t[4]);this._visitRawBody(t),this._pos.inLoop=i},"for-in":function(t){this._write("for (");var i=t[1],i=("var"==i[0]?this._write("var "+i[1][0][0]):this._visitRaw(i),this._write(" in ")._visitRaw(t[3])._write(") "),t[4]);this._visitRawBody(i)},block:function(t){this._writeLine("{"),this._indentLevel++,this._visitRawStatements(t[1]),this._indentLevel--,this._writeIndents()._write("}")},while:function(t){var i=t[1],t=t[2],e=this._pos.inLoop;this._pos.inLoop=!0,this._write("while (")._visitRaw(i)._write(") ")._visitRawBody(t),this._pos.inLoop=e},do:function(t){var i=t[1],t=t[2],e=this._pos.inLoop;this._pos.inLoop=!0,this._write("do ")._visitRawBody(t),this._pos.inLoop=e,"block"==t[0]?this._write(" "):this._writeLine()._writeIndents(),this._write("while (")._visitRaw(i)._write(");")},if:function(t){var i=t[1],e=t[2],i=(this._write("if (")._visitRaw(i)._write(") ")._visitRawBody(e),t[3]);i&&("block"==e[0]?this._write(" "):this._writeLine("")._writeIndents(),"if"==i[0]?this._write("else ")._visitRaw(i):this._write("else ")._visitRawBody(i))},break:function(t){this._pos.inLoop||this._pos.inSwitch?this._write("break;"):this._write("return ")._visitJscex({type:"break",stmt:t})._write(";")},continue:function(t){this._pos.inLoop?this._write("continue;"):this._write("return ")._visitJscex({type:"continue",stmt:t})._write(";")},throw:function(t){var i=this._pos;(i.inTry||i.inFunction?this._write("throw ")._visitRaw(t[1]):this._write("return ")._visitJscex({type:"throw",stmt:t}))._write(";")},conditional:function(t){this._write("(")._visitRaw(t[1])._write(") ? (")._visitRaw(t[2])._write(") : (")._visitRaw(t[3])._write(")")},try:function(t){this._writeLine("try {"),this._indentLevel++;var i=this._pos.inTry,i=(this._pos.inTry=!0,this._visitRawStatements(t[1]),this._indentLevel--,this._pos.inTry=i,t[2]),t=t[3];i&&(this._writeIndents()._writeLine("} catch ("+i[0]+") {"),this._indentLevel++,this._visitRawStatements(i[1]),this._indentLevel--),t&&(this._writeIndents()._writeLine("} finally {"),this._indentLevel++,this._visitRawStatements(t),this._indentLevel--),this._writeIndents()._write("}")},switch:function(t){this._write("switch (")._visitRaw(t[1])._writeLine(") {"),this._indentLevel++;for(var i=this._pos.inSwitch,e=(this._pos.inSwitch=!0,t[2]),s=0;s<e.length;s++){var n=e[s];this._writeIndents(),n[0]?this._write("case ")._visitRaw(n[0])._writeLine(":"):this._writeLine("default:"),this._indentLevel++,this._visitRawStatements(n[1]),this._indentLevel--}this._indentLevel--,this._pos.inSwitch=i,this._writeIndents()._write("}")}}},h.compile=function(t,i){return i=i.toString(),t="eval(Jscex.compile("+stringify(t)+", "+i+"))",t=o(h.parse(t)[1][0][1],0),h.logger.debug(i+"\n\n>>>\n\n"+t),codeGenerator(t)},h.modules.jit=!0)}),isCommonJS="undefined"!=typeof require&&"undefined"!=typeof module&&module.exports,isAmd="undefined"!=typeof define&&define.amd;if(isCommonJS)module.exports.init=function(t){t.modules.parser||require("./jscex-parser").init(t),init(t)};else if(isAmd)define("jscex-jit",["jscex-parser"],function(i){return{init:function(t){t.modules.parser||i.init(t),init(t)}}});else{if("undefined"==typeof Jscex)throw new Error('Missing root object, please load "jscex" module first.');if(!Jscex.modules.parser)throw new Error('Missing essential components, please initialize "parser" module first.');init(Jscex)}}();