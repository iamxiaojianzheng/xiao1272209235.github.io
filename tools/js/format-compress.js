function format(a){var t=a.getValue();if(t)try{let e;var r=a.getOption("mode"),n=a.getOption("tabSize");console.log("mode",a.getOption("mode")),r.endsWith("json")?e=JSON.stringify(JSON.parse(t),null,n):"htmlmixed"===r?e=html_beautify(t,{indent_size:n,indent_char:" "}):r.endsWith("javascript")?e=js_beautify(t,{indent_size:n,indent_char:" "}):r.endsWith("xml")?e=$.format(t,{method:"xml",step:n}):"css"===r?e=css_beautify(t,{indent_size:n,indent_char:" ",space_in_empty_paren:!0}):r.endsWith("sql")?e=sqlFormatter.format(t," ".repeat(n)):r.endsWith("java")?e=javaFormat(t,n):alert("do not support"),a.setValue(e)}catch(e){console.error(e)}}function compress(a){var t=a.getValue();if(t)try{let e=t;var r=a.getOption("mode");r.endsWith("json")?e=JSON.stringify(JSON.parse(t)).replace(/\s+/g,""):r.endsWith("html")?e=(new Packer).pack(t,0,0):r.endsWith("javascript")?e=js_beautify(t,{indent_size:0}).replace(/\n/g,"").replace(/\s+/g," "):r.endsWith("xml")?e=$.format(t,{method:"xmlmin"}):r.endsWith("css")?e=$.format(t,{method:"cssmin"}):r.endsWith("sql")?e=$.format(t,{method:"sqlmin"}):r.endsWith("java")?e=t.replace(/\n/g,"").replace(/\s+/g," "):alert("do not support"),a.setValue(e)}catch(e){console.error(e)}}function json2xml(e){var a=e.getValue();if(a)try{var t=JSON.parse(a),r=decodeSpecialCharacter((new XML.ObjTree).writeXML(t));formatXML=$.format(r,{method:"xml"}),$("#mode").val("xml").change(),e.setValue(formatXML)}catch(e){console.error(e),$("#warning").html('<div class="alert alert-danger">JSON 数据错误：'+e+"</div>").show().delay(5e3).fadeOut()}}function xml2json(e){if(e.getValue())try{var a=new XML.ObjTree,t=new JKL.Dumper,r=e.getValue(),n=a.parseXML(r);$("#mode").val("json").change(),e.setValue(t.dump(n))}catch(e){$("#warning").html('<div class="alert alert-danger">JSON 数据错误：'+e+"</div>").show().delay(5e3).fadeOut()}}function json2csv(e){var a=e.getValue();if(a){data=JSON.parse(a),arr=[],flag=!0;var t="",r="",n=!0;try{var s=typeof data;data=processJSON("object"!=s?$.parseJSON(data):data)}catch(e){return setMessage("error","Error in Convert : add proper input format"),!1}$.each(data,function(e,a){e%2==0?n&&("end"!=a?t+=a+",":(t=t.substring(0,t.length-1),n=!1)):"end"!=a?(e=data[e-1],-1!=t.search(e)&&(r+=a+",")):(r=r.substring(0,r.length-1),r+="\n")}),e.setValue(t+"\n"+r)}}function processJSON(e){return $.each(e,function(e,a){"object"==typeof a?(flag=!1,processJSON(a),arr.push("end"),arr.push("end")):arr.push(e,a)}),arr}var spacing=" ";function json2yml(e){let a=e.getValue();if(a)try{"string"==typeof a&&(a=JSON.parse(a));var t=[];convert(a,t),yaml=t.join("\n"),$("#mode").val("yaml").change(),e.setValue(yaml)}catch(e){$("#warning").html('<div class="alert alert-danger">JSON 数据错误：'+e+"</div>").show().delay(5e3).fadeOut()}}function getType(e){var a=typeof e;return e instanceof Array?"array":"string"==a?"string":"boolean"==a?"boolean":"number"==a?"number":"undefined"==a||null===e?"null":"hash"}function convertHash(e,a){for(var t in e){var r=[];if(e.hasOwnProperty(t)){var n=e[t],n=(convert(n,r),getType(n));if("string"==n||"null"==n||"number"==n||"boolean"==n)a.push(normalizeString(t)+": "+r[0]);else{a.push(normalizeString(t)+": ");for(var s=0;s<r.length;s++)a.push(spacing+r[s])}}}}function convertArray(e,a){for(var t=0;t<e.length;t++){var r=[];convert(e[t],r);for(var n=0;n<r.length;n++)a.push((0==n?"- \n   ":spacing)+r[n])}}function convertString(e,a){a.push(normalizeString(e))}function normalizeString(e){return e.match(/^[\w]+$/)?e:JSON.stringify(e)}function convert(e,a){switch(getType(e)){case"array":convertArray(e,a);break;case"hash":convertHash(e,a);break;case"string":convertString(e,a);break;case"null":a.push("null");break;case"number":a.push(e.toString());break;case"boolean":a.push(e?"true":"false")}}function decodeSpecialCharacter(e){return e.replace(/\&amp;/g,"&").replace(/\&gt;/g,">").replace(/\&lt;/g,"<").replace(/\&quot;/g,'"')}