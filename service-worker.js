if(!self.define){let l,f={};const c=(a,e)=>(a=new URL(a+".js",e).href,f[a]||new Promise(e=>{if("document"in self){const l=document.createElement("script");l.src=a,l.onload=e,document.head.appendChild(l)}else l=a,importScripts(a),e()}).then(()=>{var e=f[a];if(e)return e;throw new Error(`Module ${a} didn’t register its module`)}));self.define=(e,i)=>{const d=l||("document"in self?document.currentScript.src:"")||location.href;if(!f[d]){let a={};const r=e=>c(e,d),s={module:{uri:d},exports:a,require:r};f[d]=Promise.all(e.map(e=>s[e]||r(e))).then(e=>(i(...e),a))}}}define(["./workbox-d249b2c8"],function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404/index.html",revision:"377f0ef0e6e6536fad8dbcf595552a84"},{url:"app-download/index.html",revision:"92b445a0007edf4dab9c7e00467c5425"},{url:"archives/0.html",revision:"6a242d0ff0ffb9c9f91d62dbbdbd0aa9"},{url:"archives/142c8884.html",revision:"e3925844d7ff928460f38b9aa752a626"},{url:"archives/19d9d68.html",revision:"f6bcec6d9bf51d1c66db4d849c7c72df"},{url:"archives/1d351a67.html",revision:"217e5eca421b1cf813bbe2dd2cec376e"},{url:"archives/2020/12/index.html",revision:"0e9d033ececd16217f3454de0d6e2b41"},{url:"archives/2020/index.html",revision:"2f874164a74e86f6813c41289698d0ed"},{url:"archives/2021/02/index.html",revision:"d8cd69cd9c4796a9b17c34b63833028a"},{url:"archives/2021/03/index.html",revision:"d21e58395ac92a74ea8d984f19ffd493"},{url:"archives/2021/03/page/2/index.html",revision:"78a44cd65d75ad541c3e2035508b26dc"},{url:"archives/2021/04/index.html",revision:"f9c3c053657d4f9b0299f5b83029c420"},{url:"archives/2021/05/index.html",revision:"0eadd86f44c5e00c75dd97fd41f3bb27"},{url:"archives/2021/06/index.html",revision:"82aa882762fed409c481e541a6635632"},{url:"archives/2021/06/page/2/index.html",revision:"bdfe4b03280f833ae015238277f08505"},{url:"archives/2021/07/index.html",revision:"96079878883e4bcc2b7d6ee9accdc3f4"},{url:"archives/2021/07/page/2/index.html",revision:"4a188071d757b799799e59889d58a49c"},{url:"archives/2021/09/index.html",revision:"5fd22fa413cdb2f5bc964eca45b8cbc5"},{url:"archives/2021/10/index.html",revision:"ec32b71b0533277aa201e28b58f04e69"},{url:"archives/2021/10/page/2/index.html",revision:"afa01af78f09b7718f0984a0bdbb6341"},{url:"archives/2021/11/index.html",revision:"504bdd7747adadefc1f2cbfbeea161c3"},{url:"archives/2021/index.html",revision:"29332e7ccb759ca6baeab416db9e035d"},{url:"archives/2021/page/2/index.html",revision:"7a5f8c437cf4233c38f01a3a6130bb58"},{url:"archives/2021/page/3/index.html",revision:"9837ee5aec1766f5b62677a5dc73eb90"},{url:"archives/2021/page/4/index.html",revision:"c95e679f916932c5ad321a10fbf70e5c"},{url:"archives/2021/page/5/index.html",revision:"f128baf7e2f768794cee5d064b2d1a17"},{url:"archives/2021/page/6/index.html",revision:"544e651acf3cba26f015b1e491dba6d8"},{url:"archives/2021/page/7/index.html",revision:"a7b19f2bfff74f584f4bd8cc2658e015"},{url:"archives/2021/page/8/index.html",revision:"847b810c4b0d95c0261d3ca2b869e097"},{url:"archives/2021/page/9/index.html",revision:"299f5d2ac73e01b97779358eda15bbe4"},{url:"archives/2022/04/index.html",revision:"c12a3b92fb3762b46f8e838fa1e8be2c"},{url:"archives/2022/05/index.html",revision:"14f27321c301f2c574b6053673dfac1f"},{url:"archives/2022/07/index.html",revision:"5a353d0336efb41f412067eaaadbcb03"},{url:"archives/2022/08/index.html",revision:"d04308c016454c313a9cb3ce3977f6f6"},{url:"archives/2022/09/index.html",revision:"2b29be624b4988f216927f57a4fd816d"},{url:"archives/2022/12/index.html",revision:"e940dca004f9051ee4f8edbd82e97bf2"},{url:"archives/2022/index.html",revision:"d1f749c36dd53a7a4e636f80aba6ae90"},{url:"archives/2022/page/2/index.html",revision:"14cbdade24aaee1b52b112c3cd029514"},{url:"archives/2023/01/index.html",revision:"dd877945c0e158467f1a67f423301b13"},{url:"archives/2023/01/page/2/index.html",revision:"9e375ddd2d08f5951808e43d2bdde14c"},{url:"archives/2023/02/index.html",revision:"ba2733ff919197be2f413d1d75a69863"},{url:"archives/2023/03/index.html",revision:"88577344ee3e9448ff7e13c3889686ac"},{url:"archives/2023/index.html",revision:"17f97a2992ec54dd3d8cbc277e2e7406"},{url:"archives/2023/page/2/index.html",revision:"cc5abe3e635462482dec20b9b5d52978"},{url:"archives/2023/page/3/index.html",revision:"233f456887fbdfc1bc5fbb888e73a0f6"},{url:"archives/20a777a7.html",revision:"10551e080091bd5ff2ba905f56c5403e"},{url:"archives/216e38e4.html",revision:"74774a6e6106e27152aebc31dcba0e65"},{url:"archives/220ea241.html",revision:"203099ab5cfb86f91874ddc47957fd18"},{url:"archives/250a73d7.html",revision:"6d635792d03b26bf564d9f0090fe62d9"},{url:"archives/2920b883.html",revision:"8e5a1fab4c1bab3b7cd82879c97acf8f"},{url:"archives/29614013.html",revision:"f5084efe379ff5303a355c7a922530b5"},{url:"archives/2af6c357.html",revision:"87c78dab416db44bf636caba1b082d0d"},{url:"archives/2e50bcd6.html",revision:"e395d62083a300056bbf89e4a65d0e8b"},{url:"archives/343b3250.html",revision:"3f84f50dc1e9bdf1b282943cad1d04e0"},{url:"archives/347a9ee.html",revision:"9056a64c2a4df7ae518c2a50da93b881"},{url:"archives/363dca68.html",revision:"5da817f032805f13a84e3587718fc5ad"},{url:"archives/3a13eb2f.html",revision:"17a3c49eaebb8265f35e2dce2659dd88"},{url:"archives/3e8054d9.html",revision:"5b2eb4ba75f81246c4232979429fdabb"},{url:"archives/3f4362c2.html",revision:"8ef2220ed8fef78ca16e871134b9f130"},{url:"archives/3fdb1eb0.html",revision:"6cd7425d017dcd1dee809f029a4ddb2d"},{url:"archives/40457088.html",revision:"93797d77b29d84be005dafcc2c358844"},{url:"archives/431e9c1d.html",revision:"e9d057e099a014202c825a1b93e238f5"},{url:"archives/451da332.html",revision:"550b122da06ba881d7fa48f2f4925275"},{url:"archives/47d2cbeb.html",revision:"42785e87fab61de295c97bea8cba0359"},{url:"archives/495890f9.html",revision:"3d1113f0c14b766684ae174a3ff5311a"},{url:"archives/49ba5a02.html",revision:"81620aafa10b6384836cd5387e2d0880"},{url:"archives/4bc7c7a0.html",revision:"2a9d7843b0e35e811113b563a86b139d"},{url:"archives/4cbec8d2.html",revision:"eb5551b09ac8093c644b8b2f25cf0c16"},{url:"archives/51632f87.html",revision:"20b1acd9233c31206e0d9bf19cff362e"},{url:"archives/51ee6d3f.html",revision:"847eb1fb9f6f1acaa97d33d167694e47"},{url:"archives/529a2b6.html",revision:"eaad87a725ddfa1954f80c1cc41adc7b"},{url:"archives/5b304642.html",revision:"fbfcee714b5ce7238bc8b42cc1f984a0"},{url:"archives/5e952c90.html",revision:"455f6ee6a3fb65b45bcba8d552b026b4"},{url:"archives/5eeaa342.html",revision:"896f05a8c4e9c0f159ca55dd1a93b112"},{url:"archives/5f3f552b.html",revision:"34b199993288bb472d07734314a89d86"},{url:"archives/60f5ebe6.html",revision:"b35f6956055607a632ea14d26685b410"},{url:"archives/61cc9519.html",revision:"2391180d6f802f0d1042b19b88e0ba30"},{url:"archives/6287ea21.html",revision:"e76399f5b5d893490dd4b68f4ad69846"},{url:"archives/6353755b.html",revision:"131f850ead5baa09b7a2534747a5a265"},{url:"archives/67b96b6.html",revision:"508e00dedb7eeae511f26761be2caf25"},{url:"archives/68933754.html",revision:"72f2a617f90055c58fcd6d52f2e0e47a"},{url:"archives/689ca159.html",revision:"b976bce7342b28627b7529b002bfed78"},{url:"archives/6b8041e2.html",revision:"c74e8a9f7a3307f77379b28503ed2e73"},{url:"archives/6be111eb.html",revision:"45e409653bd66c76e39ac223e2d2dc91"},{url:"archives/6d521259.html",revision:"2730f7f9c305ba616b6f18883301e63c"},{url:"archives/6ddcf10a.html",revision:"9e7206aef2127748009ce60ebffe9897"},{url:"archives/74554e16.html",revision:"a469b7e196944ab363e43e8e0ced71a7"},{url:"archives/7b9d40fe.html",revision:"65ca74ad7764ea9520e7a3873c90ee3d"},{url:"archives/7da1630e.html",revision:"2a3c08a3fd21851ac78192f0f048ce38"},{url:"archives/8016d0be.html",revision:"bd4ed71ecd5f1642c1d5126f8ef1c95d"},{url:"archives/8110c701.html",revision:"59630304446e246f26ef985242d2ff0f"},{url:"archives/81564058.html",revision:"ff4e12f48f0f88b2920d9208996a539d"},{url:"archives/82fd289d.html",revision:"09399f30df867c97efb5aba7b3092c5f"},{url:"archives/871444.html",revision:"c3cbe65fe37229777fe32bdfe6dcd567"},{url:"archives/87b16bdb.html",revision:"ddbb4af2f2f1a9637a5208bd15683746"},{url:"archives/884c4ef8.html",revision:"a7a48542527e87a190db00cf9667bbe8"},{url:"archives/8a8fa792.html",revision:"5b1ff78ad58df6cca7b0e8f9e70db11e"},{url:"archives/8c7d05c9.html",revision:"0cb1e65b3723ec23219d9cdd77340445"},{url:"archives/8da2db9d.html",revision:"b116886f83d82e6f396ea9cd804aa4e0"},{url:"archives/9354c7a.html",revision:"380517fff66375aa5cbf8f08074d7f74"},{url:"archives/95add037.html",revision:"e0be5199a612c355f470b80d5c0c2910"},{url:"archives/9772ab88.html",revision:"573c24c542da27eb682e3c74cc674d84"},{url:"archives/979cffd0.html",revision:"38ac8d2f29cd42b5ad0cd701299527e4"},{url:"archives/9a10ff33.html",revision:"c7260220681fd548e185d35297b46dce"},{url:"archives/9a7303a3.html",revision:"ddbf1730acdae1da0c832be48d0637ab"},{url:"archives/9c364387.html",revision:"3104d7c392313593c3d9c57c844d8f1f"},{url:"archives/9df54f17.html",revision:"84080242845fce2e0a80061a932540ac"},{url:"archives/9eb269f7.html",revision:"c2af3516628f057dece59374efd07179"},{url:"archives/a24d321a.html",revision:"360cb2760525d6258550f77ddd1c28b1"},{url:"archives/a2b491cc.html",revision:"97992010d2d048e188489ed8440dbd40"},{url:"archives/a3490da0.html",revision:"e669a1433bb61a2a5bef6a2cbc579c51"},{url:"archives/a7e6503d.html",revision:"c54d45d43734ffdd793f7fb2361aa740"},{url:"archives/a98a4da0.html",revision:"086950bb349d453ec48b4e95617a8166"},{url:"archives/ab8b9cd3.html",revision:"2b8b96af204871dae1f8ff38815b3d72"},{url:"archives/af2efcea.html",revision:"107d8853af1035ff7d000e7613d5fb36"},{url:"archives/b0815629.html",revision:"3a491ff280b05a2273acf7a70e244f0f"},{url:"archives/b1b64f82.html",revision:"623ff0127bacfd2aa1b8abde86187d53"},{url:"archives/b52e2e24.html",revision:"61046d009573a5dd5453596bb6c965c8"},{url:"archives/b58c5972.html",revision:"d7cb91512e579525297a45cc8341440f"},{url:"archives/b7902e8a.html",revision:"c0997eb81b256f350d2a5d4798d6acfc"},{url:"archives/b84bf15e.html",revision:"029794a0bd41e96f58bed40e64835a3a"},{url:"archives/bcef9a10.html",revision:"4e6d1c16fed2d54e7d33749b42bbcf1e"},{url:"archives/bde94293.html",revision:"0695d1b5030cb1d5386c11a3567c926f"},{url:"archives/c0e855f2.html",revision:"66276791b727525668c559dfea9925c1"},{url:"archives/c1eda19f.html",revision:"c0878087d839bd5f39cca956bceb6b9a"},{url:"archives/c24c6c56.html",revision:"3a39d65f263637c5653eb9458bea1b4c"},{url:"archives/c3982ec0.html",revision:"23ffe96ca128b8643a356fd5ea3f97c8"},{url:"archives/c410bef7.html",revision:"df6d7c12c3bc224e364465d5f2ed70bd"},{url:"archives/c5f67830.html",revision:"53793ad53cd6ae805c1df120e061fc83"},{url:"archives/c679eb77.html",revision:"5978f4ac7605f0995acb013ed13c182a"},{url:"archives/c7845341.html",revision:"c9e1f12870c960c9332742930d22bb0d"},{url:"archives/c8c74ede.html",revision:"037f3a155d23438de5fc7247d0d5d184"},{url:"archives/cda714ca.html",revision:"5c50f23829c1ba59bf32a3771fd9f2a9"},{url:"archives/cf9b7124.html",revision:"cebf9ed217247e6dace57c853487e300"},{url:"archives/d0e120aa.html",revision:"cb40fe285bb12d6d4ef475db6e510564"},{url:"archives/d4b0840d.html",revision:"8365c99ce0a9d3116ac4b610813f2374"},{url:"archives/d5f0cc52.html",revision:"caa1fb51652e7dc35d2a5e70ccec6c70"},{url:"archives/d6ec87d2.html",revision:"7d747ce8c538b0152e3d9408c784d50b"},{url:"archives/daabac2f.html",revision:"f4329129b024f5718850b191aa0103a0"},{url:"archives/dca26af3.html",revision:"5741c6aa836eb1998bfaa0442d4727ed"},{url:"archives/df384cee.html",revision:"ec201f6c14ab5855acfc191c8ac91c59"},{url:"archives/e085e197.html",revision:"99e7470d03c8f03627cb33bb075887a1"},{url:"archives/e1db0f8f.html",revision:"264247b3fcc3e0b1ef2c55bebefcf85d"},{url:"archives/e33e7636.html",revision:"fffa15c96811b1f79b41f18d8a266591"},{url:"archives/e39731dc.html",revision:"d875953b0ee6cdacd196b936a4f0109e"},{url:"archives/e479c7c6.html",revision:"6e4bd4e62f0f4706d7b4123dc89b9cba"},{url:"archives/e4ff896d.html",revision:"f4b9f6fb12e9c09eb8dcffba1a9ad98f"},{url:"archives/e5aacbeb.html",revision:"7d6b627ba15868c7b49e6d54dd323c0f"},{url:"archives/e7656583.html",revision:"5063a4f134de3a1a2adcb6a5702031b5"},{url:"archives/e7aa9a12.html",revision:"e18e9b374ecadb83ebad8e08078ae5ab"},{url:"archives/e820f23.html",revision:"4f86079bafab7bfdf03923a842603912"},{url:"archives/eb37c0dc.html",revision:"b6b6ed2922dcfed9a3e4bae3bd76b0b4"},{url:"archives/ed681de3.html",revision:"d66c6d49dc2cf0d69debc430bc5c6be4"},{url:"archives/f06b0b1b.html",revision:"0f6185897082903e167815432b7959ac"},{url:"archives/f74c57a9.html",revision:"c2f3bd00bef1a4392e14ac5490e0c27e"},{url:"archives/fe6b5ad8.html",revision:"20c97cdf28746d901e04e3c9e0a410ed"},{url:"archives/ff15834c.html",revision:"d9d74920c11b995bb0c6be4598eaaea0"},{url:"archives/index.html",revision:"b2c1632405496396c65d6e51c38c02f9"},{url:"archives/page/10/index.html",revision:"fee5ee1cec704747b365a86333873755"},{url:"archives/page/11/index.html",revision:"5da040d636cf2689e401c1f3d47598e1"},{url:"archives/page/12/index.html",revision:"bb896ce167a21a4ccd62e2da31c03238"},{url:"archives/page/2/index.html",revision:"277d37dd4b03d4d180da60e733d442dc"},{url:"archives/page/3/index.html",revision:"1351588856777fd6f98e39c10900d971"},{url:"archives/page/4/index.html",revision:"6314fa0eeefe018ec874d1561017e3d5"},{url:"archives/page/5/index.html",revision:"ee07c60a95740efd449d627548d13af7"},{url:"archives/page/6/index.html",revision:"9d083d9e45571b3519c77f98e029b05f"},{url:"archives/page/7/index.html",revision:"9ddcda1c2fe544fff53c647113af27e8"},{url:"archives/page/8/index.html",revision:"3ccb5aba3bc54dd3e0a4a2975a0d039a"},{url:"archives/page/9/index.html",revision:"63df24a2813747d2175d2b3614c4594f"},{url:"archives/undefined.html",revision:"c46787a50deeca699e0e3d4433abec2b"},{url:"categories/index.html",revision:"afe8aabb03167297a6df6e936cbf828c"},{url:"cheat-sheet/adb.html",revision:"499a19dfb20d2d60c1a0dba029591f5e"},{url:"cheat-sheet/bash/index.html",revision:"6cb40c3c3d59344ece7a36e7b44eb66d"},{url:"cheat-sheet/docker/containers.html",revision:"f88d4790bc100eee32c3d7c8f595097d"},{url:"cheat-sheet/docker/docker-compose.html",revision:"c580c2c085497de0d57517c9ec4f33ce"},{url:"cheat-sheet/docker/dockerfile.html",revision:"fd77d1285dc0d02bc37b2e356a713595"},{url:"cheat-sheet/docker/exposing-ports.html",revision:"fe8926737f8fce98fc7bafcef30afbe8"},{url:"cheat-sheet/docker/images.html",revision:"9672694631751ea342dad87ecb93badf"},{url:"cheat-sheet/docker/index.html",revision:"c6a5001e92f0dcbe8df9bab987fd85e3"},{url:"cheat-sheet/docker/installation.html",revision:"ec37a8ceeeeadaa524f9f3338f929836"},{url:"cheat-sheet/docker/layers.html",revision:"86079edf832fb55074809ed64bf23c5d"},{url:"cheat-sheet/docker/links.html",revision:"5125b9e56c3fad017912b4ae751751e2"},{url:"cheat-sheet/docker/networks.html",revision:"e5ca71a13051442d8d193c29f8404766"},{url:"cheat-sheet/docker/registry-and-repository.html",revision:"56fadad3c913c8ba37f510fe2053406d"},{url:"cheat-sheet/docker/security.html",revision:"c3486176449bd43b8eae0595fda1326d"},{url:"cheat-sheet/docker/volumnes.html",revision:"099b37452325f0e73608af469fac9ad2"},{url:"cheat-sheet/ffmpeg.html",revision:"53e721370ed1599b632879ceb7bea436"},{url:"cheat-sheet/git/index.html",revision:"bef9b17f1d5240c066ef51a3d91c3608"},{url:"cheat-sheet/index.html",revision:"9d47be34ce07a15883d42cedd692835a"},{url:"cheat-sheet/lua/index.html",revision:"7c9fd19087fd49dcd54970918967ff7f"},{url:"cheat-sheet/markdown.html",revision:"d99ac9d2a9b3399cbabb65abb49403bd"},{url:"cheat-sheet/mysql/index.html",revision:"697167beff7e73688b7b2e1029f19343"},{url:"cheat-sheet/vim/html/index.html",revision:"01f1ec45a0d8303e9d9e663c28827776"},{url:"cheat-sheet/vim/html/style.css",revision:"751a2fca8f9ac291a7a6b25c302413e5"},{url:"cheat-sheet/vim/index.html",revision:"19f9a1d7e8ae7eeaef20d03697118c86"},{url:"cheat-sheet/vim/mappings.html",revision:"2f29bf99d58f15c914e4062a216f1450"},{url:"cheat-sheet/vim/plugin.html",revision:"516f8810a809da7d81b8a7b446ca7b91"},{url:"cheat-sheet/vim/vimrc-configuration.html",revision:"495756e569d6c29ef7e79cb43681af19"},{url:"cheat-sheet/vim/vimrc.html",revision:"a1b572af784812338d805805618cd7ce"},{url:"code-easy-read/index.html",revision:"daf5a7b4a9c0819dd2b50f7469781681"},{url:"css/injector/dark.css",revision:"4a68e5609d3336ebb80b636af1db4291"},{url:"css/injector/light.css",revision:"aa29a0429bb78b062b4d4d32372019bf"},{url:"css/injector/main.css",revision:"684e1e5f8ea10eb6b60bfc2eddca7fab"},{url:"css/main.css",revision:"85fdf25e25837fb6556bcd5a4b5adaa9"},{url:"css/noscript.css",revision:"3bfa77b308a88bcdddda5d546ccb3c70"},{url:"docs/basic-concepts/http-basics.html",revision:"36296fba69bdc667731abbc32437264a"},{url:"docs/basic-concepts/index.html",revision:"c3fef1e7ad5d5dc5241be052f2a3f62b"},{url:"docs/basic-concepts/linux-basics.html",revision:"5558bcf463cc1fd25256f795cbcc8ae9"},{url:"docs/basic-concepts/message-queue.html",revision:"11adc4caa643da9f8769e3482dde650b"},{url:"docs/basic-concepts/socket-basics.html",revision:"e4075313541d9ae10efacb62bad57755"},{url:"docs/code-easy-read/index.html",revision:"882adec99fdf3b3d41a8935decfda73d"},{url:"docs/data-structure/index.html",revision:"4f785077a57b4213f087c0e28706e1ee"},{url:"docs/data-structure/red-black-tree.html",revision:"0b5ed4fa7f0ee5831e688cf6e82337cf"},{url:"docs/database/database-system.html",revision:"4853f1516666e1b904a2d2977452701e"},{url:"docs/database/index.html",revision:"c973b2094c0fabdab220985c3f70fa95"},{url:"docs/database/mysql.html",revision:"935e0989657f3148530d8ddb6454dd8a"},{url:"docs/database/redis.html",revision:"5f3443e0eb5d951574d3e90fa759b699"},{url:"docs/database/sql-syntax.html",revision:"d8e84620fb31ef0e436f65fc98fd11c1"},{url:"docs/design-pattern/index.html",revision:"2ea4f44cb041febb6daee62b2c7028bb"},{url:"docs/experience/index.html",revision:"4111201aac8e178d4266e0e79ad32d1c"},{url:"docs/hutool/aop.html",revision:"61f7e04dd188479547d51fbba9722509"},{url:"docs/hutool/cache.html",revision:"391f06fee180a4ff648719a5e22d7da2"},{url:"docs/hutool/captcha.html",revision:"f19a7e18d84b983c7b41abe8aa55e638"},{url:"docs/hutool/core.html",revision:"f29965efca17fa81f0d8f86731cd234d"},{url:"docs/hutool/cron.html",revision:"47d1d7ddc1e4d0ea1fa744b950ccf8bd"},{url:"docs/hutool/crypto.html",revision:"173900fa3ec4891c1413bb3b86b2ef05"},{url:"docs/hutool/db.html",revision:"61e7cce8d0e545b32dcf149c428749d7"},{url:"docs/hutool/dfa.html",revision:"bb3c18acb6fade04dd799a57ee8275f3"},{url:"docs/hutool/extra.html",revision:"178f919e50404206a4eaec5c117474b4"},{url:"docs/hutool/http.html",revision:"791f546877cb32b4c20134d0575118d7"},{url:"docs/hutool/index.html",revision:"a0be41d96b05068e164d82927537ec0a"},{url:"docs/hutool/json.html",revision:"e64359484d93edf73e56c425a291c5f6"},{url:"docs/hutool/jwt.html",revision:"0ec50cc04282390bbadf794574ffe458"},{url:"docs/hutool/log.html",revision:"bdd1025e81d645e6c64c122181ba8a62"},{url:"docs/hutool/poi.html",revision:"803b9eddfe4efcb95e7e715e7f8a50f6"},{url:"docs/hutool/script.html",revision:"e149bc7910bd381883818b010e2ea017"},{url:"docs/hutool/setting.html",revision:"4cdd2247d2140ad8c4eee1f36007f8f1"},{url:"docs/hutool/socket.html",revision:"d9d047cdddb4a06c82443930ad356c74"},{url:"docs/hutool/system.html",revision:"3df36ca19aa4b1a090c22bdd9ca32cc1"},{url:"docs/index.html",revision:"378e1b098e1df21eab128867c6bf3e4d"},{url:"docs/java/index.html",revision:"e3f6dd9f7b4669d55cff001041c6eb6a"},{url:"docs/java/java-basics.html",revision:"8955999f64043dc02688aa36d3a79491"},{url:"docs/java/java-concurrent.html",revision:"d0552a3a4982a207b49ee1b93e3c8dee"},{url:"docs/java/java-container.html",revision:"f6d3ff238835b79c92e225245e900e65"},{url:"docs/java/java-io.html",revision:"0c2e2ace1f0bf2a60bf333873ea33324"},{url:"docs/java/java-jvm.html",revision:"0faebb81b33d609167fcd51fab8833d1"},{url:"docs/java/juc.html",revision:"1e92490080579e0924b3496cc45e693d"},{url:"docs/java/JVM.html",revision:"3560d3c17a946c421017ca1783014d09"},{url:"docs/kubernetes/concepts.html",revision:"9b3828c4edfef2611f7f2ae45060370f"},{url:"docs/kubernetes/index.html",revision:"704c80c09bb8cccdf5261756a5b15638"},{url:"docs/mybatis/configuration.html",revision:"c09f17f20bd3346e4db7b53a7da973ca"},{url:"docs/mybatis/dynamic-sql.html",revision:"f1c9f5b4cd22b869f10c35a0d51752f2"},{url:"docs/mybatis/index.html",revision:"c04a9fc1b9d04492fa640ff23acd0fe3"},{url:"docs/mybatis/java-api.html",revision:"9ec4e535d363710806c955ae2f54d166"},{url:"docs/mybatis/logging.html",revision:"e2b4572383e6a354a0c50e51047fbd66"},{url:"docs/mybatis/mapping.html",revision:"a74f548bb26479b540df6c9137573b01"},{url:"docs/network/application-layer.html",revision:"0c5e0c39688ad369117b2cff92024600"},{url:"docs/network/index.html",revision:"41fe70c0d8350d8a94209b5b86109488"},{url:"docs/network/link-layer.html",revision:"0c24aaa14d795dba52eb0068702f4b46"},{url:"docs/network/network-layer.html",revision:"086fab346308414140451ca7b5cfaccf"},{url:"docs/network/physical-layer.html",revision:"d32a762919e39bdf00f60106fe60a933"},{url:"docs/network/transport-layer.html",revision:"29e01dca238dfba48b15078802b589c5"},{url:"docs/os/deadlock.html",revision:"81bcd297622583a91f4e274fde5fb8b7"},{url:"docs/os/device-management.html",revision:"79a9c47e4b0212b3702866a73c403c40"},{url:"docs/os/index.html",revision:"acea35511f1e1e65391f79935be76269"},{url:"docs/os/link.html",revision:"91b37c61f95974f24ac5085a7e2cc8ed"},{url:"docs/os/memory-management.html",revision:"434920f6fbf4c0a165fa561373cfc47e"},{url:"docs/os/process-and-thread.html",revision:"0fcfc63d4bff97abe6e42e39c6fb1b1d"},{url:"docs/spring-framework/appendix.html",revision:"f3ae528c3f48ee1c3aa5d11db6ce3485"},{url:"docs/spring-framework/core.html",revision:"df9e9e26e99b4e1a3cda55818b54c134"},{url:"docs/spring-framework/data-access.html",revision:"ee36ae1ae8d2e0446b99d12cad5544cc"},{url:"docs/spring-framework/index.html",revision:"7a92ebddcaea4d9c9faf12fb58a61f09"},{url:"docs/spring-framework/integration.html",revision:"a427bbd217ed6da0c2dac1624e27d4a4"},{url:"docs/spring-framework/languages.html",revision:"312bf7261d01d9db8ce1aaeb5ec24aa0"},{url:"docs/spring-framework/overview.html",revision:"14c3b9178660533cd45ba7fdd64236ec"},{url:"docs/spring-framework/spring-configuration.html",revision:"535faa360ca5d0f8beed16ba46dc0a45"},{url:"docs/spring-framework/testing.html",revision:"aef92c6f3e8982556499b6e0021af3ad"},{url:"docs/spring-framework/web-reactive.html",revision:"f92e12a2ce7675d81951913c0576f71f"},{url:"docs/spring-framework/web-servlet.html",revision:"1aec2579d01c84290b8d93bca08daf6c"},{url:"experience/index.html",revision:"eeedf0fbe680d52784afbc31395b8035"},{url:"git-basics/git-basics.html",revision:"3c1d62aaeb85ae06a07929861d825f33"},{url:"git-basics/index.html",revision:"7a3e0ac583eb73c112b7f9bc8617ac66"},{url:"images/apple-touch-icon-next.png",revision:"fce961f0bd3cd769bf9c605ae6749bc0"},{url:"images/avatar.gif",revision:"bfe261f101725ead9363904cfcd95968"},{url:"images/avatar.jpg",revision:"6027cc44a1979dc3e120c50b90838bbc"},{url:"images/favicon-16x16-next.png",revision:"b8975923a585dbaa8519a6068e364947"},{url:"images/favicon-32x32-next.png",revision:"5a029563fe3214c96f68b46556670ea1"},{url:"images/icons/icon-512x512.jpg",revision:"1c37138b43200a1738d38971e219fe3b"},{url:"images/logo.svg",revision:"9278d16cf8d2e7473b4e646cbbc28075"},{url:"images/sidebar-top-background.jpg",revision:"70306d0a6c95e2ed156f9615ac3d08c2"},{url:"index.html",revision:"6cb25dd06c50de669b43d44f292340eb"},{url:"js/bookmark.js",revision:"e136acb34505b0b92969cee195418ddf"},{url:"js/comments.js",revision:"cd9314f2acf10c3014f4249b35d94464"},{url:"js/config.js",revision:"a9779879532c6628db9ec12b77888816"},{url:"js/injector.js",revision:"f60bb9a9703f4fe8134b7111e80e02f2"},{url:"js/next-boot.js",revision:"897a7aa288e43ea74799b3eb5c99a6d1"},{url:"js/third-party/analytics/matomo.js",revision:"ca3ca423882888986aaa408375f5f4e5"},{url:"js/third-party/fancybox.js",revision:"b712ea42b5d33c76081a0927703f7cf3"},{url:"js/third-party/quicklink.js",revision:"39fa1fb0054cef24de2832da1df25c2f"},{url:"js/third-party/search/local-search.js",revision:"23e535321e01ade7f46fe225b7fc778b"},{url:"js/third-party/tags/pdf.js",revision:"5d96b7bdef365b739d9507e97b6aa227"},{url:"js/utils.js",revision:"8ab75a3dfbfa9f15dbff6bfa921f2cdd"},{url:"love/config.js",revision:"44e681b627717c4d135cbd78cc670b91"},{url:"love/index_files/default.css",revision:"78f6c39d433c93985e4d1d7452ada28a"},{url:"love/index_files/functions.js",revision:"62d6c38cf2f5c3ac93137b54353fea2a"},{url:"love/index_files/jquery.min.js",revision:"aee1e48818d25a46d75458d934a77394"},{url:"love/index_files/jscex-async-powerpack.min.js",revision:"575940fde6776ebb9102266b15ce9149"},{url:"love/index_files/jscex-async.min.js",revision:"ab8247455aff992ead029bac0e4a1f16"},{url:"love/index_files/jscex-builderbase.min.js",revision:"f8a1c76dfdb42b38f24d386f31a55a4e"},{url:"love/index_files/jscex-jit.js",revision:"c97e345b46bf67cd4c16ea65226ab7e1"},{url:"love/index_files/jscex-parser.js",revision:"da7398af1344bcc0ab9c9654568680b0"},{url:"love/index_files/jscex.min.js",revision:"9346e7d19645f683a627b585b613bda7"},{url:"love/index_files/love-tree.gif",revision:"3850bdd8b7cbf7697985bbf3fdf41edc"},{url:"love/index_files/love.js",revision:"5080cb891f2cf904e74a9c4d50ed82bb"},{url:"love/index.html",revision:"0a0d86cb2b98a73c4e07df94535b0b38"},{url:"navigation/index.html",revision:"cfd8dac685c1b94483c4b4ce6980bb03"},{url:"page/10/index.html",revision:"4bfca331d3e22624671c4f190d8459d0"},{url:"page/11/index.html",revision:"80abae5ac0bd203657c7ae9e86913503"},{url:"page/12/index.html",revision:"91e99857e1e0904463530f61d012c23c"},{url:"page/13/index.html",revision:"5edcdb3ad977093cc40dc16e73f9a7a5"},{url:"page/14/index.html",revision:"8da38e633a335d6df577c973380876f6"},{url:"page/15/index.html",revision:"97951499f0e5564c12b9e71ce53cfa25"},{url:"page/16/index.html",revision:"4937ce6a194c0d36268bf92dbc822b56"},{url:"page/17/index.html",revision:"d6b56bbfe18738db1b25aff4793cc963"},{url:"page/18/index.html",revision:"59e3096640e62671cb9097e96434c448"},{url:"page/19/index.html",revision:"dc27d380d0a30bec6f6cbfeb7e33144a"},{url:"page/2/index.html",revision:"f04fc4cd2403e6851f42b4f3dbae25e9"},{url:"page/20/index.html",revision:"88152b1571f789283fe040270ecb90dc"},{url:"page/21/index.html",revision:"3ba76413fd77245746629c612e580795"},{url:"page/22/index.html",revision:"211de5360c0586600c0173cac6f24fd7"},{url:"page/23/index.html",revision:"3c1521fab2453c798830b721953e971b"},{url:"page/24/index.html",revision:"71d512c0bc2f3dfaac3f6b06750065b9"},{url:"page/3/index.html",revision:"b784f456eb8be221cbae04fac3a053c5"},{url:"page/4/index.html",revision:"cbb5b083d18ad58089b808bc32c7107e"},{url:"page/5/index.html",revision:"2ed7b21e8a50da166b91a633ebc6ea71"},{url:"page/6/index.html",revision:"09981a2df97aeefc5651761f40af964a"},{url:"page/7/index.html",revision:"15d9c10666b9e5f7d58e58ec00c12316"},{url:"page/8/index.html",revision:"883ab625f75269511784a0f80de2d1d7"},{url:"page/9/index.html",revision:"db8ecd61efc36c6d790258467221f195"},{url:"software-install-and-deploy/index.html",revision:"f0a8ac7de96d3dc4162660d001ae0c84"},{url:"software-install-and-deploy/linux/docker.html",revision:"1a122c29bbabb04cef12b3f327d168ec"},{url:"software-install-and-deploy/linux/git.html",revision:"20aa5a8e10c82c3df45fac066ce29f9f"},{url:"software-install-and-deploy/linux/gitlab.html",revision:"c6bbe1d510418fee88265eb87a47555d"},{url:"software-install-and-deploy/linux/index.html",revision:"f4c1078a6437b24a124c4e5eecc1f73b"},{url:"software-install-and-deploy/linux/jdk.html",revision:"c11c4375007e67fccf67fbe138a90836"},{url:"software-install-and-deploy/linux/jenkins.html",revision:"46a43b0637f2a31de5bff1a00c179acb"},{url:"software-install-and-deploy/linux/mysql.html",revision:"9097f052cd88a84697370e8a83d20a7e"},{url:"software-install-and-deploy/linux/nginx.html",revision:"c240019ca2ac50a2ec95fd571013688f"},{url:"software-install-and-deploy/linux/python3.html",revision:"0820ec6ef6b0cf97f5a8a3219e6904e7"},{url:"software-install-and-deploy/linux/redis.html",revision:"54d08789f2756f9f019b6522f0e182e9"},{url:"software-install-and-deploy/linux/robbitmq.html",revision:"59259acfbcbe032e1d889a4bb351b009"},{url:"software-install-and-deploy/linux/zookeeper.html",revision:"6808afc6fed2a8628749172c6368388c"},{url:"software-install-and-deploy/mac.html",revision:"4bb76657d5b5932cac7462cb8b3f55fa"},{url:"software-install-and-deploy/windows/docker.html",revision:"25cf83764bb2a5de991d82d719b17de5"},{url:"software-install-and-deploy/windows/index.html",revision:"cf06ea8b6060d824f115a94ed677101d"},{url:"software-install-and-deploy/windows/other.html",revision:"a7659aef1dc0a76428551f4ddf527e9b"},{url:"software-install-and-deploy/windows/windows-config.html",revision:"1569572d3f5ee71559d84aab926ff07f"},{url:"tags/AOP/index.html",revision:"840120b76352632d0f7999f40244baa6"},{url:"tags/centos7/index.html",revision:"116485b1a4c012b3ea4c9c0fcecd7713"},{url:"tags/CentOS7/index.html",revision:"b8d442d3be5175e0685ebfad8ca6838e"},{url:"tags/Chrome/index.html",revision:"8f0eafbd4521ef356cec0189200c4400"},{url:"tags/css/index.html",revision:"3f8bfdd3d7ad98088ad6c13d441ee010"},{url:"tags/DevOps/index.html",revision:"5a2d57b9efec8221c6505ce6e8d15b50"},{url:"tags/Docker/index.html",revision:"421fef1f6980f4b59d5bace9a7e5da03"},{url:"tags/echarts/index.html",revision:"ad28bacbbb9eb7c8fe8f84477fa02799"},{url:"tags/ffmpeg/index.html",revision:"209365eae9e9875b2938305c1faa9a45"},{url:"tags/Flash/index.html",revision:"be26f37a34e50a7c75ec900d5b5fb1c5"},{url:"tags/flex/index.html",revision:"123ad69b97c95de8bada9362aa156931"},{url:"tags/git/index.html",revision:"05b3fe569ebc27adcfd06c123b4557ec"},{url:"tags/Git/index.html",revision:"93e5bf4b8b706134cab62da335e1a03c"},{url:"tags/Git仓库/index.html",revision:"0c8592c6a05eb30608ad8e02dccda7dd"},{url:"tags/Grrovy/index.html",revision:"8e22bdf08b859e910985a732c200a0fd"},{url:"tags/harbor/index.html",revision:"f76094ade50545016adbc308ba208451"},{url:"tags/http/index.html",revision:"974c259f47a8331ec16afc20a61b9a12"},{url:"tags/Idea/index.html",revision:"3fb3cfd04ada2b0e497caa21bc2482ac"},{url:"tags/IDEA/index.html",revision:"1ce6c34d1ee5f42e8c40e5fa09f989d3"},{url:"tags/index.html",revision:"a441eeca0ae3adf31f458874ccf8dca0"},{url:"tags/Java-Concurrency/index.html",revision:"10e738206760e6e1b3e0ae32759d5eff"},{url:"tags/Java-Streams/index.html",revision:"9b5b0607fbd586638ed039fd82bc1c19"},{url:"tags/java/index.html",revision:"ebcabbbe8d20f456dff8c932e12d80c3"},{url:"tags/Java/index.html",revision:"1a0cf7138e3892d1fee61102b9bfd4f3"},{url:"tags/java8/index.html",revision:"c003bfb3db7b3534515c98b276668caa"},{url:"tags/Java9/index.html",revision:"611c1ed09b5861174ebbcc48b1f2d433"},{url:"tags/jdk8/index.html",revision:"99824b67780443d33850033389b2dfb4"},{url:"tags/JDK9/index.html",revision:"037b503cbbcd7b1d4f1fba7ddf8db328"},{url:"tags/Jigsaw/index.html",revision:"4e859d2670dc133bc6cf5867a0794ad2"},{url:"tags/JS/index.html",revision:"411e72447e1f2ea1b0856bfcc3d1e800"},{url:"tags/JVM/index.html",revision:"77ac0107f52e84f527142d5aafb6e7cf"},{url:"tags/Kafka/index.html",revision:"6880844d9e49dafa44ac660d9d3feb46"},{url:"tags/Kubernetes/index.html",revision:"352fdd8e2212c8f77c8786d6cbb858a1"},{url:"tags/linux/index.html",revision:"41eb684b15d7b72c077d3eb2208494d0"},{url:"tags/Linux/index.html",revision:"792353d8b81cdca07fb3b2806d8e8e4c"},{url:"tags/maven/index.html",revision:"8de0d52c2fb5209e7a697f4684a27b10"},{url:"tags/mysql/index.html",revision:"7e5d7e5d33e014bcefb8d86f7c5bee5b"},{url:"tags/MySQL/index.html",revision:"d95e8de1b4f37cf93fa9c2acda538fb9"},{url:"tags/nginx/index.html",revision:"852ad48edc71f1da00e4f900f99dd7c6"},{url:"tags/Nginx/index.html",revision:"628774cf0dc2d5d54fb2f427a80bc880"},{url:"tags/node/index.html",revision:"9434a12f3a6c939f637894f7c96bc7c4"},{url:"tags/npm/index.html",revision:"4e65a62a422d8120ab0687335df8918d"},{url:"tags/nvm/index.html",revision:"96edd94c9e5eb9c031eda39634daa865"},{url:"tags/OCR/index.html",revision:"775f99dbeb4c8606af2b7af46d8c1757"},{url:"tags/Python/index.html",revision:"62e1b92b781cf142494bfa41360124f8"},{url:"tags/Quartz/index.html",revision:"f0d5d248ddc67bdd77f0de80ee987649"},{url:"tags/RabbitMQ/index.html",revision:"720eeae9cbc41e610c1ca9fe6d5c84f3"},{url:"tags/redis/index.html",revision:"60be8dfb43e5e995df67c21c7938156e"},{url:"tags/Redis/index.html",revision:"e39e79d2e5d3d36efcc947fb026efea1"},{url:"tags/scoop/index.html",revision:"fda5af3066109230209ae306ad0977f2"},{url:"tags/Scoop/index.html",revision:"5b01999d5d61d73a9159929a399a6bda"},{url:"tags/Shell/index.html",revision:"18d43d4193c1dda6cce1e5c3d2ff992c"},{url:"tags/Spring-Annotations/index.html",revision:"00e5f4166c7454808c0831ce16370abb"},{url:"tags/Spring-Boot/index.html",revision:"f63a4fc9e9120f2058e753e1d5367c65"},{url:"tags/Spring/index.html",revision:"11658d18a13b7c148341993316a9b47f"},{url:"tags/SpringBoot/index.html",revision:"d02e99fcb4f8a93f863c7dade497edfb"},{url:"tags/SpringCloud/index.html",revision:"0bd1a930de26e7c212b51b1efce1d6e7"},{url:"tags/SQL注入/index.html",revision:"6b0323f078d3d07647cc277e8414c0eb"},{url:"tags/ssh/index.html",revision:"5ea657122182a2647f39a12d85594308"},{url:"tags/SSH/index.html",revision:"2e197257349641bc785c987fe18c946f"},{url:"tags/SSO/index.html",revision:"da1a1d41ba63d1398efca00b88fc743e"},{url:"tags/Testing/index.html",revision:"9e5ceca913cb7eeb9481ffa745141dce"},{url:"tags/TypeScript/index.html",revision:"41b24a1957ea4edde5104fd7cb341ba1"},{url:"tags/vim/index.html",revision:"dbb25b19088f6ee527fd0dc2dbfea3d9"},{url:"tags/Vim/index.html",revision:"d3746dbf7b6a16a79461653458a05ddf"},{url:"tags/VirtualBox/index.html",revision:"498e224c4588b09ee9bebdccf5c22c8c"},{url:"tags/VirutalBox/index.html",revision:"ae6c66f8dd152f2dc11982fd286bf27c"},{url:"tags/VMware/index.html",revision:"3b5a60bf8f6568a9f6540e9348891024"},{url:"tags/vscode/index.html",revision:"e6227433d7f23fb5d8fa5bb62d1cb02e"},{url:"tags/VSCode/index.html",revision:"4791ddf835e09f6aba1f7403f9f2fe02"},{url:"tags/vue/index.html",revision:"d2cdd251438a6833249288ae795fac57"},{url:"tags/Vue/index.html",revision:"2ac513073bf3320c226b0a0fb840d687"},{url:"tags/Windows/index.html",revision:"d3d6303221edf8846d91e59f7d2e1abf"},{url:"tags/wrk/index.html",revision:"adff3eacac912908c86b629576259bb0"},{url:"tags/yarn/index.html",revision:"6729fdcb245232e957480f9b3d9b5096"},{url:"tags/zip/index.html",revision:"03dac6e4fbb0e7178c3a19d146f216fa"},{url:"tags/zookeeper/index.html",revision:"e6007d5b382aa2b91836dee17eec75a3"},{url:"tags/事务/index.html",revision:"ce61fb7a1f8cfb567fefc900b87c270f"},{url:"tags/代理/index.html",revision:"abcf975306f2d98f6b969aca6feaf28c"},{url:"tags/任务调度/index.html",revision:"1b862a3c3da09aad68942c1ace076d0b"},{url:"tags/依赖包/index.html",revision:"17bc8611b4580025f84cfedf3e7f99ee"},{url:"tags/分布式/index.html",revision:"30ed5728f419e74061e54755538a1a43"},{url:"tags/压缩/index.html",revision:"e5b02fbdbf73736241a1dc7c9b539987"},{url:"tags/基础语法/index.html",revision:"fc0d7c67135e67f9832406eda45b55e4"},{url:"tags/备份/index.html",revision:"47552ba430946ea6425dea14aa5528af"},{url:"tags/并发/index.html",revision:"e0eb874e1258d0259661c73b9ea2e367"},{url:"tags/并行/index.html",revision:"385f9ad6e88000f43f8067a071f8d4af"},{url:"tags/微服务架构/index.html",revision:"d2f8181166528320bf4da404e459ac64"},{url:"tags/快捷键/index.html",revision:"679ee112418f24cfe24125a84fa1365c"},{url:"tags/插件/index.html",revision:"5643ea6db9f85682def262b8e3f28f4c"},{url:"tags/消息队列/index.html",revision:"7481bec9bb5239ac9b8f57b742d89335"},{url:"tags/离线安装/index.html",revision:"83286c11bd51f4fdee6b31edf0a54eea"},{url:"tags/翻译/index.html",revision:"d87eba10a8c815bee547f2f8736f359d"},{url:"tags/虚拟机/index.html",revision:"a24c684f49849e7b2ba9c7716404cca5"},{url:"tags/解压缩/index.html",revision:"1148108e6d5e2be4ec08ad564026b0c7"},{url:"tags/诗/index.html",revision:"730756728cab185062bc72a71949d495"},{url:"tags/转载/index.html",revision:"0a8df2c44487c73dfd5857b75db2de11"},{url:"tags/运维/index.html",revision:"7d778760dde648f0dda30abba8dd9773"},{url:"tags/运维/page/2/index.html",revision:"cf34142cb7c60afcbcdf806949d80a9d"},{url:"tags/部署/index.html",revision:"0cbb5a92abd2f746b1e35725eb2a858f"},{url:"tags/重构代码/index.html",revision:"bb747b284888bf59de19214197f36769"},{url:"tags/重装系统/index.html",revision:"a5f4aa1f00781b3b4451ee745f16563f"},{url:"tags/银河麒麟/index.html",revision:"1e83c745d3105a713cdfcb9f48f6ae75"},{url:"tags/锁/index.html",revision:"0a83e4ba25b32fd047e3f6372dbecfb7"},{url:"tags/验证码/index.html",revision:"59498c7c7a62fc88c0f6ebf2eec29489"},{url:"tianjian/index.html",revision:"2295b2cc6e28ba8f2ed10202ee2da567"},{url:"tools/index.css",revision:"df10d5b2052d403efe773638d9270d53"},{url:"tools/index.html",revision:"57badefd5469da08002ac5cb61ef128e"},{url:"tools/json.html",revision:"77268392140fe41dc06182e132501f19"},{url:"vim-cheat-sheet/index.html",revision:"8a39982791a45c749b974ca4f90fac87"},{url:"windows-software-cheat-sheet/index.html",revision:"f2b2bb3d5a10157ae779a8b3e54ad207"}],{})});