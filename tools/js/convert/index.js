const a0_0x32d3e5=a0_0x571d;(function(_0x479554,_0x1ee0ff){const _0x128c09=a0_0x571d,_0x4aeb1d=_0x479554();while(!![]){try{const _0x37037a=parseInt(_0x128c09(0x12b))/0x1+parseInt(_0x128c09(0x13d))/0x2+parseInt(_0x128c09(0x13e))/0x3*(parseInt(_0x128c09(0x13b))/0x4)+-parseInt(_0x128c09(0x118))/0x5*(parseInt(_0x128c09(0x11f))/0x6)+parseInt(_0x128c09(0x11b))/0x7+-parseInt(_0x128c09(0x125))/0x8+-parseInt(_0x128c09(0x126))/0x9;if(_0x37037a===_0x1ee0ff)break;else _0x4aeb1d['push'](_0x4aeb1d['shift']());}catch(_0x4c9710){_0x4aeb1d['push'](_0x4aeb1d['shift']());}}}(a0_0x4800,0x648b9));function a0_0x571d(_0x5b7df8,_0x2d2d2d){const _0x4d6800=a0_0x4800();return a0_0x571d=function(_0x3ca6b6,_0x103be9){_0x3ca6b6=_0x3ca6b6-0x117;let _0x480073=_0x4d6800[_0x3ca6b6];return _0x480073;},a0_0x571d(_0x5b7df8,_0x2d2d2d);}const a0_0x103be9=(function(){let _0x5e1883=!![];return function(_0x11ab18,_0x59b5f4){const _0x459417=_0x5e1883?function(){const _0x5a71db=a0_0x571d;if(_0x59b5f4){const _0x5cf119=_0x59b5f4[_0x5a71db(0x128)](_0x11ab18,arguments);return _0x59b5f4=null,_0x5cf119;}}:function(){};return _0x5e1883=![],_0x459417;};}()),a0_0x3ca6b6=a0_0x103be9(this,function(){const _0xc07de1=a0_0x571d;return a0_0x3ca6b6[_0xc07de1(0x11a)]()[_0xc07de1(0x131)](_0xc07de1(0x135))['toString']()[_0xc07de1(0x134)](a0_0x3ca6b6)[_0xc07de1(0x131)]('(((.+)+)+)+$');});a0_0x3ca6b6();import*as a0_0xac10e7 from'../../../tools/js/util/index.js';import{generateJavaBean}from'../../../tools/js/convert/json2java.js';const XMLUrl=a0_0x32d3e5(0x138),propertiesReaderUrl=a0_0x32d3e5(0x123),jsYamlUrl=a0_0x32d3e5(0x117);export async function json2yaml(_0x469209){const _0x2c0e4b=a0_0x32d3e5;await a0_0xac10e7['loadCdn'](window[_0x2c0e4b(0x11d)],jsYamlUrl);if(a0_0xac10e7['isJSON'](_0x469209))return jsyaml[_0x2c0e4b(0x12d)](JSON['parse'](_0x469209));return _0x469209;}export async function yaml2json(_0x247dc2){const _0x11e07e=a0_0x32d3e5;await a0_0xac10e7[_0x11e07e(0x139)](window['jsyaml'],jsYamlUrl);if(a0_0xac10e7[_0x11e07e(0x124)](_0x247dc2))return JSON[_0x11e07e(0x13a)](jsyaml[_0x11e07e(0x127)](_0x247dc2));return _0x247dc2;}export async function csv2json(_0x1d1c81){const _0x4f5747=a0_0x32d3e5,_0x561893=_0x1d1c81[_0x4f5747(0x142)]()[_0x4f5747(0x12c)]('\x0a'),_0x23396c=[],_0x469e9a=_0x561893[0x0]['split'](',');for(let _0x1a9db1=0x1;_0x1a9db1<_0x561893[_0x4f5747(0x141)];_0x1a9db1++){const _0x13d916={},_0x5beef4=_0x561893[_0x1a9db1][_0x4f5747(0x12c)](',');for(let _0x329c31=0x0;_0x329c31<_0x469e9a['length'];_0x329c31++){_0x13d916[_0x469e9a[_0x329c31]]=_0x5beef4[_0x329c31];}_0x23396c[_0x4f5747(0x12f)](_0x13d916);}return JSON['stringify'](_0x23396c);}export async function json2csv(_0x151100){const _0xdd9066=a0_0x32d3e5;let _0x56df51;try{_0x56df51=JSON[_0xdd9066(0x119)](_0x151100[_0xdd9066(0x142)]());}catch(_0x44ebd8){return setMessage(_0xdd9066(0x120),_0xdd9066(0x136)),![];}let _0x2a583b=[],_0x3acfa8=[],_0x299ab2=!![];function _0x4a4756(_0x330d30){const _0x2f4bb7=_0xdd9066;for(let _0x1fbeac in _0x330d30){typeof _0x330d30[_0x1fbeac]==='object'?(_0x4a4756(_0x330d30[_0x1fbeac]),_0x3acfa8[_0x2f4bb7(0x12f)](_0x2f4bb7(0x143)),_0x2a583b['push'](_0x2f4bb7(0x143))):(_0x3acfa8[_0x2f4bb7(0x12f)](_0x330d30[_0x1fbeac]),_0x299ab2&&_0x2a583b[_0x2f4bb7(0x12f)](_0x1fbeac));}}return _0x4a4756(_0x56df51),_0x2a583b=_0x2a583b['slice'](0x0,_0x2a583b['indexOf'](_0xdd9066(0x143))),_0x3acfa8=_0x3acfa8['filter'](_0x1c4c53=>_0x1c4c53!==_0xdd9066(0x143))[_0xdd9066(0x122)]((_0x2e4e45,_0x41f3d7,_0x3276ff)=>(_0x41f3d7+0x1)%_0x2a583b[_0xdd9066(0x141)]===0x0?_0x3276ff[_0x41f3d7]=_0x2e4e45+'\x0a':_0x3276ff[_0x41f3d7]=_0x2e4e45+','),_0x2a583b['join'](',')+'\x0a'+_0x3acfa8['join']('');}export async function json2xml(_0x21c203){const _0x1e399c=a0_0x32d3e5;await a0_0xac10e7['loadCdn'](window[_0x1e399c(0x12a)],XMLUrl),a0_0xac10e7[_0x1e399c(0x132)](!a0_0xac10e7[_0x1e399c(0x140)](_0x21c203),_0x21c203+':\x20不是JSON字符串');const _0x56e256=new XML[(_0x1e399c(0x11c))]()['writeXML'](JSON['parse'](_0x21c203));if(_0x56e256[_0x1e399c(0x13c)])throw new SyntaxError(_0x1e399c(0x11e));return _0x56e256;}export async function xml2json(_0x3bce27){const _0x4cec84=a0_0x32d3e5;await a0_0xac10e7['loadCdn'](window[_0x4cec84(0x12a)],XMLUrl);const _0x52b43c=new XML[(_0x4cec84(0x11c))]()[_0x4cec84(0x129)](_0x3bce27);if(_0x52b43c['html'])throw new SyntaxError('XML解析错误');return JSON[_0x4cec84(0x13a)](_0x52b43c);}export async function yaml2properties(_0x557d52){const _0x5e0753=a0_0x32d3e5;await a0_0xac10e7[_0x5e0753(0x139)](window[_0x5e0753(0x11d)],jsYamlUrl),await a0_0xac10e7[_0x5e0753(0x139)](window['PropertiesReader'],propertiesReaderUrl);const _0x4ce92e=jsyaml[_0x5e0753(0x127)](_0x557d52),_0x44b504=new PropertiesReader('',{'appender':{'allowDuplicateSections':!![]}});function _0x4797b9(_0x5d732d,_0x5bf4a9){for(const _0x4655dc in _0x5d732d){const _0x42f772=_0x5d732d[_0x4655dc];typeof _0x42f772==='object'?_0x4797b9(_0x42f772,''+_0x5bf4a9+_0x4655dc+'.'):_0x44b504['set'](''+_0x5bf4a9+_0x4655dc,_0x42f772);}}_0x4797b9(_0x4ce92e,'');const _0x2e8256=_0x44b504[_0x5e0753(0x121)]();if(a0_0xac10e7[_0x5e0753(0x137)](_0x2e8256)&&a0_0xac10e7[_0x5e0753(0x130)](_0x2e8256))return Object[_0x5e0753(0x13f)](_0x2e8256)[_0x5e0753(0x122)](_0x7fca6c=>_0x7fca6c+'='+_0x2e8256[_0x7fca6c])[_0x5e0753(0x133)]('\x0a');throw new Error('转换失败');}function a0_0x4800(){const _0x2c2289=['parseXML','XML','172463xjUlib','split','dump','转换失败','push','isObject','search','assert','join','constructor','(((.+)+)+)+$','Error\x20in\x20Convert\x20:\x20add\x20proper\x20input\x20format','isNotEmpty','../../../tools/js/ObjTree.js','loadCdn','stringify','88ZGxiUN','html','803798YTiWUe','68811IikgKO','keys','isJSON','length','trim','end','https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js','335ktUNhe','parse','toString','493528ATcIMl','ObjTree','jsyaml','XML解析错误','4404WGxJKB','error','getAllProperties','map','../../../tools/js/convert/properties-reader.js','isString','5223448RmXGzk','319842rLlsHZ','load','apply'];a0_0x4800=function(){return _0x2c2289;};return a0_0x4800();}export async function properties2yaml(_0x3fa96f){const _0x688d92=a0_0x32d3e5;await a0_0xac10e7['loadCdn'](window[_0x688d92(0x11d)],jsYamlUrl),await a0_0xac10e7[_0x688d92(0x139)](window['PropertiesReader'],propertiesReaderUrl);const _0x47bc8c=new PropertiesReader(_0x3fa96f,{'appender':{'allowDuplicateSections':!![]}}),_0xd2ef37=_0x47bc8c['path']();if(a0_0xac10e7[_0x688d92(0x140)](_0xd2ef37))return jsyaml[_0x688d92(0x12d)](JSON['parse'](JSON[_0x688d92(0x13a)](_0xd2ef37)));throw new Error(_0x688d92(0x12e));}export async function json2java(_0x95adb0){return generateJavaBean(_0x95adb0);}