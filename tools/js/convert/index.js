function a0_0x385d(){const _0x475892=['set','load','toString','join','apply','618wcjFsK','1253GXoCQe','XML解析错误','https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js','object','16772vYhUHG','isJSON','(((.+)+)+)+$','path','8066552cGaenR','parse','push','constructor','writeXML','XML','split','321PDBdGf','filter','3116140jllmJN','search','stringify','loadCdn','map','html','转换失败','jsyaml','length','../../../tools/js/ObjTree.js','7579730ygCQvw','156262dzRKlJ','getAllProperties','keys','49722jcInjG','Error\x20in\x20Convert\x20:\x20add\x20proper\x20input\x20format','trim','end','9JClwqk','dump','parseXML','ObjTree','PropertiesReader'];a0_0x385d=function(){return _0x475892;};return a0_0x385d();}const a0_0xe03786=a0_0x1a61;(function(_0x2e49f8,_0x3907ba){const _0x4868c5=a0_0x1a61,_0x5ae90b=_0x2e49f8();while(!![]){try{const _0x10466d=parseInt(_0x4868c5(0x169))/0x1+-parseInt(_0x4868c5(0x16c))/0x2+parseInt(_0x4868c5(0x18a))/0x3*(-parseInt(_0x4868c5(0x17f))/0x4)+parseInt(_0x4868c5(0x18c))/0x5+-parseInt(_0x4868c5(0x17a))/0x6*(parseInt(_0x4868c5(0x17b))/0x7)+parseInt(_0x4868c5(0x183))/0x8*(parseInt(_0x4868c5(0x170))/0x9)+-parseInt(_0x4868c5(0x168))/0xa;if(_0x10466d===_0x3907ba)break;else _0x5ae90b['push'](_0x5ae90b['shift']());}catch(_0x4edc42){_0x5ae90b['push'](_0x5ae90b['shift']());}}}(a0_0x385d,0x8351f));const a0_0x52e77a=(function(){let _0x490a92=!![];return function(_0x33cd59,_0x3f8069){const _0x4ffd57=_0x490a92?function(){const _0x1c4ede=a0_0x1a61;if(_0x3f8069){const _0x26a6ab=_0x3f8069[_0x1c4ede(0x179)](_0x33cd59,arguments);return _0x3f8069=null,_0x26a6ab;}}:function(){};return _0x490a92=![],_0x4ffd57;};}()),a0_0x55922c=a0_0x52e77a(this,function(){const _0x37d11d=a0_0x1a61;return a0_0x55922c[_0x37d11d(0x177)]()[_0x37d11d(0x18d)](_0x37d11d(0x181))[_0x37d11d(0x177)]()[_0x37d11d(0x186)](a0_0x55922c)[_0x37d11d(0x18d)](_0x37d11d(0x181));});a0_0x55922c();import*as a0_0x130002 from'../../../tools/js/util/index.js';import{generateJavaBean}from'../../../tools/js/convert/json2java.js';const XMLUrl=a0_0xe03786(0x167),propertiesReaderUrl='../../../tools/js/convert/properties-reader.js',jsYamlUrl=a0_0xe03786(0x17d);async function json2yaml(_0x3f904d){const _0xeb0cc=a0_0xe03786;return await a0_0x130002['loadCdn'](window[_0xeb0cc(0x165)],jsYamlUrl),a0_0x130002['isJSON'](_0x3f904d)?jsyaml[_0xeb0cc(0x171)](JSON[_0xeb0cc(0x184)](_0x3f904d)):_0x3f904d;}async function yaml2json(_0x1be7af){const _0x15629a=a0_0xe03786;return await a0_0x130002[_0x15629a(0x161)](window[_0x15629a(0x165)],jsYamlUrl),a0_0x130002['isString'](_0x1be7af)?JSON[_0x15629a(0x160)](jsyaml[_0x15629a(0x176)](_0x1be7af)):_0x1be7af;}async function csv2json(_0x26a19c){const _0x1bc833=a0_0xe03786;var _0x3406e3=_0x26a19c[_0x1bc833(0x16e)]()[_0x1bc833(0x189)]('\x0a'),_0x4c8933=[],_0x51e3f5=_0x3406e3[0x0]['split'](',');for(let _0x544b55=0x1;_0x544b55<_0x3406e3[_0x1bc833(0x166)];_0x544b55++){var _0x346f80={},_0x10c9d3=_0x3406e3[_0x544b55][_0x1bc833(0x189)](',');for(let _0x4e2998=0x0;_0x4e2998<_0x51e3f5['length'];_0x4e2998++)_0x346f80[_0x51e3f5[_0x4e2998]]=_0x10c9d3[_0x4e2998];_0x4c8933[_0x1bc833(0x185)](_0x346f80);}return JSON[_0x1bc833(0x160)](_0x4c8933);}async function json2csv(_0x2fb81b){const _0x575bbb=a0_0xe03786;let _0x4f9952;try{_0x4f9952=JSON['parse'](_0x2fb81b[_0x575bbb(0x16e)]());}catch(_0xa2f783){return setMessage('error',_0x575bbb(0x16d)),!0x1;}let _0x674604=[],_0x2602d0=[];return function _0x303baa(_0x5c460e){const _0x38c1c9=_0x575bbb;for(var _0x5c96c2 in _0x5c460e)_0x38c1c9(0x17e)==typeof _0x5c460e[_0x5c96c2]?(_0x303baa(_0x5c460e[_0x5c96c2]),_0x2602d0['push']('end'),_0x674604[_0x38c1c9(0x185)](_0x38c1c9(0x16f))):(_0x2602d0[_0x38c1c9(0x185)](_0x5c460e[_0x5c96c2]),_0x674604[_0x38c1c9(0x185)](_0x5c96c2));}(_0x4f9952),_0x674604=_0x674604['slice'](0x0,_0x674604['indexOf'](_0x575bbb(0x16f))),_0x2602d0=_0x2602d0[_0x575bbb(0x18b)](_0x5a57d9=>_0x575bbb(0x16f)!==_0x5a57d9)[_0x575bbb(0x162)]((_0x21e4dd,_0x425a88,_0x37bcd8)=>(_0x425a88+0x1)%_0x674604[_0x575bbb(0x166)]==0x0?_0x37bcd8[_0x425a88]=_0x21e4dd+'\x0a':_0x37bcd8[_0x425a88]=_0x21e4dd+','),_0x674604[_0x575bbb(0x178)](',')+'\x0a'+_0x2602d0[_0x575bbb(0x178)]('');}async function json2xml(_0x2f6eb9){const _0x470f5d=a0_0xe03786;await a0_0x130002[_0x470f5d(0x161)](window['XML'],XMLUrl),a0_0x130002['assert'](!a0_0x130002[_0x470f5d(0x180)](_0x2f6eb9),_0x2f6eb9+':\x20不是JSON字符串'),_0x2f6eb9=new XML[(_0x470f5d(0x173))]()[_0x470f5d(0x187)](JSON[_0x470f5d(0x184)](_0x2f6eb9));if(_0x2f6eb9[_0x470f5d(0x163)])throw new SyntaxError(_0x470f5d(0x17c));return _0x2f6eb9;}async function xml2json(_0x4cce2f){const _0x241584=a0_0xe03786;await a0_0x130002[_0x241584(0x161)](window[_0x241584(0x188)],XMLUrl),_0x4cce2f=new XML[(_0x241584(0x173))]()[_0x241584(0x172)](_0x4cce2f);if(_0x4cce2f[_0x241584(0x163)])throw new SyntaxError(_0x241584(0x17c));return JSON[_0x241584(0x160)](_0x4cce2f);}async function yaml2properties(_0x217235){const _0x2bb694=a0_0xe03786;await a0_0x130002['loadCdn'](window[_0x2bb694(0x165)],jsYamlUrl),await a0_0x130002[_0x2bb694(0x161)](window['PropertiesReader'],propertiesReaderUrl),_0x217235=jsyaml[_0x2bb694(0x176)](_0x217235);const _0x4dcbae=new PropertiesReader('',{'appender':{'allowDuplicateSections':!0x0}});!function _0x26e007(_0x489313,_0xae977e){const _0x352652=_0x2bb694;for(const _0x9f1c5 in _0x489313){var _0x227ef6=_0x489313[_0x9f1c5];_0x352652(0x17e)==typeof _0x227ef6?_0x26e007(_0x227ef6,''+_0xae977e+_0x9f1c5+'.'):_0x4dcbae[_0x352652(0x175)](''+_0xae977e+_0x9f1c5,_0x227ef6);}}(_0x217235,'');const _0x442455=_0x4dcbae[_0x2bb694(0x16a)]();if(a0_0x130002['isNotEmpty'](_0x442455)&&a0_0x130002['isObject'](_0x442455))return Object[_0x2bb694(0x16b)](_0x442455)[_0x2bb694(0x162)](_0x1fdeb5=>_0x1fdeb5+'='+_0x442455[_0x1fdeb5])[_0x2bb694(0x178)]('\x0a');throw new Error(_0x2bb694(0x164));}function a0_0x1a61(_0x35fa18,_0x53f030){const _0x188d89=a0_0x385d();return a0_0x1a61=function(_0x55922c,_0x52e77a){_0x55922c=_0x55922c-0x160;let _0x385dff=_0x188d89[_0x55922c];return _0x385dff;},a0_0x1a61(_0x35fa18,_0x53f030);}async function properties2yaml(_0x26dfbc){const _0x41196c=a0_0xe03786;await a0_0x130002['loadCdn'](window[_0x41196c(0x165)],jsYamlUrl),await a0_0x130002[_0x41196c(0x161)](window[_0x41196c(0x174)],propertiesReaderUrl),_0x26dfbc=new PropertiesReader(_0x26dfbc,{'appender':{'allowDuplicateSections':!0x0}})[_0x41196c(0x182)]();if(a0_0x130002[_0x41196c(0x180)](_0x26dfbc))return jsyaml[_0x41196c(0x171)](JSON[_0x41196c(0x184)](JSON[_0x41196c(0x160)](_0x26dfbc)));throw new Error(_0x41196c(0x164));}async function json2java(_0x450d22){return generateJavaBean(_0x450d22);}export{json2yaml,yaml2json,csv2json,json2csv,json2xml,xml2json,yaml2properties,properties2yaml,json2java};