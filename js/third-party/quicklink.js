!function(){if("string"==typeof CONFIG.quicklink.ignores){const n=`[${CONFIG.quicklink.ignores}]`;CONFIG.quicklink.ignores=JSON.parse(n)}let n=null;var i=()=>{if(n&&n(),CONFIG.quicklink.enable){let i=CONFIG.quicklink.ignores||[];Array.isArray(i)||(i=[i]),n=quicklink.listen({timeout:CONFIG.quicklink.timeout,priority:CONFIG.quicklink.priority,ignores:[i=>i.includes("#"),i=>i===CONFIG.quicklink.url,...i]})}};CONFIG.quicklink.delay?(window.addEventListener("load",i),document.addEventListener("pjax:success",i)):document.addEventListener("page:loaded",i)}();