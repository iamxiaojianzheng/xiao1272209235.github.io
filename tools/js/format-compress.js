function format(r){var a=r.getValue();if(a)try{let e;var t=r.getOption("mode"),n=r.getOption("tabSize");console.log("mode",r.getOption("mode")),"json"===t?(e=JSON.stringify(JSON.parse(a),null,n),r.setOption("mode","javascript")):"htmlmixed"===t?e=html_beautify(a,{indent_size:n,indent_char:" "}):"javascript"===t?e=js_beautify(a,{indent_size:n,indent_char:" "}):"xml"===t?e=$.format(a,{method:"xml",step:n}):"css"===t?e=css_beautify(a,{indent_size:n,indent_char:" ",space_in_empty_paren:!0}):alert("do not support"),r.setValue(e)}catch(e){console.error(e)}}function compress(r){var a,t=r.getValue();if(t)try{let e=t;var n=r.getOption("mode");"json"===n?e=JSON.stringify(JSON.parse(t)).replace(/\s+/g,""):"htmlmixed"===n?e=(new Packer).pack(t,0,0):"javascript"===n?e=js_beautify(t,{indent_size:0}).replace(/\n/g,"").replace(/\s+/g," "):"xml"===n?e=$.format(t,{method:"xmlmin"}):"css"===n?e=null==(a=(a=(a=(a=(a=(a=(a=t).replace(/\/\*(.|\n)*?\*\//g,"")).replace(/\s*([\{\}\:\;\,])\s*/g,"$1")).replace(/\,[\s\.\#\d]*\{/g,"{")).replace(/;\s*;/g,";")).replace(/;\s*}/g,"}")).match(/^\s*(\S+(\s+\S+)*)\s*$/))?"":a[1]:alert("do not support"),r.setValue(e)}catch(e){console.error(e)}}function json2xml(e){var r=e.getValue();if(r)try{var a=JSON.parse(r),t=decodeSpecialCharacter((new XML.ObjTree).writeXML(a));e.setOption("mode","xml"),formatXML=$.format(t,{method:"xml"}),e.setValue(formatXML)}catch(e){$("#warning").html('<div class="alert alert-danger">JSON 数据错误：'+e+"</div>").show().delay(5e3).fadeOut()}}function xml2json(e){if(e.getValue())try{var r=new XML.ObjTree,a=new JKL.Dumper,t=e.getValue(),n=r.parseXML(t);e.setOption("mode","json"),e.setValue(a.dump(n))}catch(e){$("#warning").html('<div class="alert alert-danger">JSON 数据错误：'+e+"</div>").show().delay(5e3).fadeOut()}}function json2csv(e){var r=e.getValue();if(r){data=JSON.parse(r),arr=[],flag=!0;var a="",t="",n=!0;try{var s=typeof data;data=processJSON("object"!=s?$.parseJSON(data):data)}catch(e){return setMessage("error","Error in Convert : add proper input format"),!1}$.each(data,function(e,r){e%2==0?n&&("end"!=r?a+=r+",":(a=a.substring(0,a.length-1),n=!1)):"end"!=r?(e=data[e-1],-1!=a.search(e)&&(t+=r+",")):(t=t.substring(0,t.length-1),t+="\n")}),e.setValue(a+"\n"+t)}}function processJSON(e){return $.each(e,function(e,r){"object"==typeof r?(flag=!1,processJSON(r),arr.push("end"),arr.push("end")):arr.push(e,r)}),arr}var spacing=" ";function json2yml(e){let r=e.getValue();if(r)try{"string"==typeof r&&(r=JSON.parse(r));var a=[];convert(r,a),yaml=a.join("\n"),e.setOption("mode","yaml"),e.setValue(yaml)}catch(e){$("#warning").html('<div class="alert alert-danger">JSON 数据错误：'+e+"</div>").show().delay(5e3).fadeOut()}}function getType(e){var r=typeof e;return e instanceof Array?"array":"string"==r?"string":"boolean"==r?"boolean":"number"==r?"number":"undefined"==r||null===e?"null":"hash"}function convertHash(e,r){for(var a in e){var t=[];if(e.hasOwnProperty(a)){var n=e[a],n=(convert(n,t),getType(n));if("string"==n||"null"==n||"number"==n||"boolean"==n)r.push(normalizeString(a)+": "+t[0]);else{r.push(normalizeString(a)+": ");for(var s=0;s<t.length;s++)r.push(spacing+t[s])}}}}function convertArray(e,r){for(var a=0;a<e.length;a++){var t=[];convert(e[a],t);for(var n=0;n<t.length;n++)r.push((0==n?"- \n   ":spacing)+t[n])}}function convertString(e,r){r.push(normalizeString(e))}function normalizeString(e){return e.match(/^[\w]+$/)?e:JSON.stringify(e)}function convert(e,r){switch(getType(e)){case"array":convertArray(e,r);break;case"hash":convertHash(e,r);break;case"string":convertString(e,r);break;case"null":r.push("null");break;case"number":r.push(e.toString());break;case"boolean":r.push(e?"true":"false")}}function decodeSpecialCharacter(e){return e.replace(/\&amp;/g,"&").replace(/\&gt;/g,">").replace(/\&lt;/g,"<").replace(/\&quot;/g,'"')}