'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "daa8ac60ccebc7a3a2f1e90da264cfad",
"index.html": "cd8f6c717b0da768538b762be71dc31a",
"/": "cd8f6c717b0da768538b762be71dc31a",
"CNAME": "c2e7fa8bfbaa44d851ff1fa6aca098e2",
"main.dart.js": "7ea2d721d03ae735de98aa97480aaa8a",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "fdee8579ceba506c4ecae80eba34e40c",
"icons/Icon-192.png": "f01c400edd6cc893b99f858f39c3a2b8",
"icons/Icon-maskable-192.png": "f01c400edd6cc893b99f858f39c3a2b8",
"icons/Icon-maskable-512.png": "9e5910e58da47d1b4e659bf6bca372e7",
"icons/Icon-512.png": "9e5910e58da47d1b4e659bf6bca372e7",
"scripts/iframe_messenger.js": "98f2244e768b6b81eb22e4261018db38",
"manifest.json": "ea1a63755b2b401554cc531308530970",
".git/ORIG_HEAD": "839402dd58e6d1816bbf69157649f896",
".git/config": "4c0f2914a92917beaf61207d6438a382",
".git/objects/0d/326ca0c9597641514f0d408f9c7a0e05834489": "9b8b33cce3ad88d61fcf16bf4fdf62d9",
".git/objects/66/8ba74de34c031af572102883c0ddd830d5b929": "aa504ef692c6ba98d67e044cabee1d6d",
".git/objects/66/9929238f3b6486b17613007e83e28dd56e245a": "658cdb40610a6da07043b42fb86748e6",
".git/objects/50/604f0d3cf774fc104a153b3bae264076fb81bb": "b0f2a711e3c907f760051154f39820b1",
".git/objects/50/fd4eed5cbee74620b98ea3c753574efda259c9": "bc150aebc526d485b64abe75e0d79caf",
".git/objects/68/c76830be888077a73fe10a91fc56c1cf21f04d": "77d7b830d23d5a0ec91ce5d492a0052b",
".git/objects/57/b8bf787f90df80bfef3a3091f1b2b149f69fe5": "1ffcf30501c24a20806e8a77dc18f792",
".git/objects/3b/91aaa9e66cb1f06fdf96f57b05738220dd4638": "c306b7a3afb8c70f06900584229cbdbf",
".git/objects/03/29e1baa1737e5a4f96c1fd8be8f524a3f1ee3d": "6d81cff23c67ddc47db6c340456e50bc",
".git/objects/03/1222d0b0153a15204036c1f758829dccf54515": "d1d3f0dc752c57507626da61426f18f3",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/9b/9acd64591239d3d315258cfc41aca8f997fce3": "d13c20e0e8158d3e869d21aae4e06200",
".git/objects/9b/595d0e0cb0b2e502aa8ea1256cbb2ef1a47609": "e5fcb3859968f80624cf250a3883dda0",
".git/objects/9b/a6e3737654d8acff7d633c4047beefae2f7b82": "39ed9bfa4ebc227acb78d8aae6e4ca4b",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/6a/96c45079aabbd70dac5bef65184cb11e6936d0": "0d7847c11ba02bd5ea813123752041b9",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/3c/3e088507616e6ca3c430cc9ba74cae9e4cefb1": "5f1757898f5c3144f2d3cb69d4089680",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/732e70bc68eeea5fa1bcb141c59f9395a6625b": "9581b462007b24c79b232c0021f13f63",
".git/objects/58/e29fdd88c224334bba833ca41692725352b435": "eb75c417c87825bf4ca1dfd5152bab02",
".git/objects/58/aa59797d791dbadc3a724ca91e0d371cbcb038": "4f9f002c3886114a3c5a8ee0c370b3be",
".git/objects/58/6e79a40a2a5de35dbae1887c981cb99696ae45": "8389b0a14280a77d64b344af2e7420fc",
".git/objects/67/59a456f60a5bfda51d5d40ee66742e33278fb4": "8514c575c9d7be7b01381fca5741d242",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/581c564313315adcc60ee4a9ccdf9d2f02330c": "164105e1e71961abbd1404800604ed10",
".git/objects/0e/3bb7bb37aab0a1cd71d3aaeded76adec77e18e": "9365d9858df0f793c2fde09971d32406",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/34/0b14f0f7a9b8f66067bb7081f4c37100ce6f65": "be76d756a7f168b74adb246828ae01ec",
".git/objects/05/0df3af33cc19327e975bde602ad3e057b730ec": "5ff298eee7d560f4f75dab7e560daca7",
".git/objects/9d/cdebe67ae4d30b37372f89a32dcbf8e0c69d76": "d1c06daa63d312212d4f355cc2831065",
".git/objects/9c/f55b7e34cf9e5652ce62187140c9f9d0b3f592": "ca9cd912656a508d8e7e2366c8b897d4",
".git/objects/9c/e43d2919d3379869ec82dc238f8cc255272da2": "7b6b20daeaa4d47b5e652f997773b29c",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/da/1d31fca12ab8624069f4ab35cc7ee96e13251d": "bfd9f7d63d3e1ec42e2fa08fcb63daa0",
".git/objects/da/067a9b11f3b698d84b89781e89be632e5d6a62": "01e3dc0e0e203585358f92b9df81e95a",
".git/objects/a5/5590839bbc59fbeb5a31e9db3b0da957cc2497": "77f1dbdd528d08fc6f7e788a13643e08",
".git/objects/bd/dbc3904bcfaa2a58e64b3ecf82d8dcd246e426": "8d21e741d437fe2e0ce4a67b0ec75113",
".git/objects/d1/c9f56aaf4e77b32ddb869c1b7315d7c8691515": "41cd2328a0e56862bc7862aa48f3b994",
".git/objects/d1/422f2ed2e230d49333ef1290dac6d2da85be01": "3a82cdc979cae2442896e7e39d1b8ce9",
".git/objects/bc/a352cdcec494de48f3e524e1ffb735322162a7": "02f5d3f5d311ec43f4a75d736b4b7834",
".git/objects/ab/53952ae2410397db30b22f6920c50e0956c4e4": "978c1fa3268c89c7bc4df1b4e0815454",
".git/objects/e2/557f2e52ae9d71958d2e7b7b7bb5a960bf4c6e": "9955ab0a07d4d3afd595646aaed8d616",
".git/objects/f3/d3f9f37f0ec97cba665940428c6bcefe188d48": "e8c5aa8fb0fbdf3e1c9a695960d5d311",
".git/objects/f3/d19a84486708dc37c72a35faa1e59d5df0e494": "0ea6978336184df6891be44d05ecdb75",
".git/objects/c7/42d692bf206df1959a7e58d9c71a64242d9a5f": "110f23415883ec61bcaa6bfbda66c8c3",
".git/objects/c7/c2ca4d59f7e668c41004095907d1334280e1b7": "d1d82e4d3812074eea5a2290cd7ae398",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "d5a961ea0cfdacc644ec611b7760e28e",
".git/objects/c0/4b02e4b4011f40df05b33e7803c03604e3e351": "4ac4ccbf0a3d2b3ed7ca78392ccf90cb",
".git/objects/c0/12d066f2e65f0f3ca592dedf2f1ca71059d5ea": "983bdf4b9111cd273fd151bd2b58ec8d",
".git/objects/ee/c804fa704f52ea7d6f94f5e41b9338c1daec54": "c497f8531d9e3d61e8c9947add731469",
".git/objects/ee/17bf06312df785dd89346077fee27746c0af16": "1cb36a6ede5d47734995baa56faadf0f",
".git/objects/ee/65d4271258cfef4fb78c2cd9126adee8205f64": "ba25aafe0d2aabb2fb585623e8577819",
".git/objects/c9/ebeb55f68ef3ba693ff2d3b2f1fb4e57e76298": "b8d559d57c2f6da5a846a259334fc5f6",
".git/objects/f2/2a5c3c898aa47fc978e2aa8a1fd0ca938ed4fa": "7b1676d9f64eda1c3c53a31df74f4a3d",
".git/objects/f2/0e3a276f11a4c61044a2fb1fdb6c488e33b7ee": "706a1ff9fd18bebd7779d4821a680728",
".git/objects/f5/160052fd99bac195cc262ed55a6cc809311ba9": "654a9c2c8df7a14609724e7fd28765d3",
".git/objects/f5/de55c2a2b073f23a15b6b5f3274fb993a1fd07": "d935c30b74738715b9ad6010f9d7aca6",
".git/objects/e3/2b30fe6fe234d5a7b3a0e485114ca42b1e7227": "ed0034ee5d655435931b82d8dbe0e58e",
".git/objects/e4/7d644287b0ef41667190a875669d4e259ea862": "cef51196ea4571c4607e4a267bbc4a5a",
".git/objects/e4/81953833128a49f6bb1ffad3fa24ed8005a3b6": "e0d673bbbcbedbb505598bc21c697e13",
".git/objects/e4/2c475f888177a7f1c95202229a4ee0373a2b58": "146e492dfb364a32003fbff7d295e9a8",
".git/objects/c8/a2e7b08aa5010a32e461eca6af84a33e26f18c": "fe24e06fa54a868e96cf85755c5343ee",
".git/objects/c8/6f34d5cf782eb5dad4d8313e837d4aeca9a0d9": "8b4fe1350c8cb5b440e41b58e52f5830",
".git/objects/ed/2d7b5896f0a195ed13324cecf07825fa54ba98": "53e4ddd1d4f9d889e8c401afd6c29c65",
".git/objects/c6/02171fee91ea46706c849233e44614d5903d4e": "3361a6eeb366a1b52a535e132383f165",
".git/objects/4e/8693935107fff8dc48ff44d8940d9d5eb41425": "259ef98cf4df16dc1556c43a31e9005b",
".git/objects/4e/9d53246b8751a5cedaad8b055f8075e9e08dbf": "41c925032ce6853b83571bdf374479f8",
".git/objects/4e/4e42c03e6af4455e6c3937a64d062bcbb67262": "942edf96b0e81e2220166ea4a418f41f",
".git/objects/20/7dfbbec66a9c15be4889193cdce80e85f60e5d": "b0272d83a0835496bdbf7217c8969982",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/27/dfad43eee437f30131a6a78aea045393658185": "0edb7862e3bc48ef4a74a5106067f2e0",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/11/3bf218fa2beee865916c7ec584769ebc8e2d3c": "eb7e57e5db13bbacfc293ae70cc7eb70",
".git/objects/11/311b65585602b11c31fdd287e0b15fe66e1a89": "2b7d11b89a757c30bac11774486f2f6f",
".git/objects/7d/0d9868370291bdb6c0b31d5b9f1bb989933cd6": "453629b444af020cceade97d4b06aa9d",
".git/objects/7d/c8160d73311aa3b0d1fe663bd0a2de4c226c6b": "d668e9ab7a2d749ed42c21778c35db4f",
".git/objects/29/639dbcf8a3aab1caf3332c60de3b84000f8f4b": "f241d9aef6072724642998196593f921",
".git/objects/7c/4cc9e986db010d4def9bf1aa3bfc33e5d2a314": "21241a47d570c8cbbfaa5a63c74d21e3",
".git/objects/42/ddadbb656f4e6d282f545b385e58f4bb638d48": "d3397be70daeb18072f07fc280e0acff",
".git/objects/42/ef1f1f3f175c7e5db5b73455f400c6fdc78cfc": "c3cfb3467709974fedcb1417cf86658b",
".git/objects/42/64ee0138849b626bfb164cb4800f656ab17fa7": "b1d29685f9ab3adb46bd888bfa0428bd",
".git/objects/80/dc13ab947c07d9e4e4aaaf1cf16d03e487928d": "b59e5c1983c06f85dd040b7de3380190",
".git/objects/28/dd8db610eabec1965ea5486119fb043ac63a85": "222000834e4df14bd534612ae2444042",
".git/objects/28/fa5a4bb946386d665ce21a881f4813cdd32475": "bd712cefb13f07a5b96fd9620750b529",
".git/objects/28/9453b90c04be32f18770bacf432996637081a2": "4852cb79f9dc99d194c2cc71b0a38590",
".git/objects/28/1f7868d3047888371c7d94f3b704a876295cdc": "ab4f36359a1b8ab78dc6ee9d98a3ab8d",
".git/objects/28/4106180d69ed6a6df032029536647583808bb7": "6f21b9f91d948419793c3570b62987c2",
".git/objects/7b/0189caf65a940fae668ef24f02607340dd37d9": "c75a11e394eee4ca4b39e376930dfd24",
".git/objects/7b/5435d7b7c572b65eb5d6ccecb4158e17aa3161": "f51723dcb7cc22a2f3fd2e6d05021ba1",
".git/objects/8f/68a9dd4d448de489a616ae52152930620405ce": "6b36ba0985416e772dc3c7c14c12ceeb",
".git/objects/10/92fec12da627dcc6645c5c97aae7c1f343946c": "14fb20c818e5a2841a60846bf634ba0b",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/26/f2fabe14d757df151b95b322e1560c1f026696": "c04290690efa279c435de123cf517ffc",
".git/objects/81/67ac479870bc583bc07d1818e0483af10a7401": "0ccdfe47133e64cce146a5c243dd3c5b",
".git/objects/86/a23febdb751ce2c40a43d0a5ac30a573820412": "c72208546443ab008eba350575821b97",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "ba56b40d645a0f16807ab3de83ab0ea1",
".git/objects/2a/ad17c9820a6247261d7132530f19889970655d": "056463431e13175bad34bf8500c3760e",
".git/objects/2a/4bdfc7b933a67f6d7c27e68f5c31adcbc2932d": "6bc59ce0c36f294e20a22e88210d6498",
".git/objects/2a/ddebafaac71b6c73bd3f97e2a031074bceea3a": "9f88a8b62af470f96205ac8eae97aa1c",
".git/objects/43/bc4f3c0cc4b7f008487b0420a5a9528ff2664d": "afd9fffc32ac932fa9c9710679151a03",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/9f/4b824438abc22b02e88111adf68f413aefbfb8": "af5c5ed7f85288d28d2d7790e6f3b723",
".git/objects/07/a911f0c16317aa34cbd503285cfe797c737eaa": "461c3850da2575657cd6d40809076ed7",
".git/objects/00/fc33395daf884074eba5be7e42f472c3c073f7": "1f29ffd74581d06a201221f815295eb1",
".git/objects/6e/8bc8f697f90e4fc85b472e23d5374b09ff41af": "48f96dc2aaed789eb4a0dd06c1afe944",
".git/objects/36/7dad445147418e2d06d8e6bb2306535a2d9180": "240e2e88a846576a8235806be846f2ac",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/09/288650c55f776aa8ff295fd748c18fd41713a1": "2387a87d06aeef8032c13080123e7d4f",
".git/objects/31/4ea09a66422a1753f5b4c36ef3d87ddb856c4a": "637309727ed19c7d9dfad0e2fb417da8",
".git/objects/31/84c3572fb7965cbba1c2ec9ee93ac979f74150": "2ba650da609cb5dd1069964f3c395610",
".git/objects/65/d47f2473fb635389793408b147790551c65e96": "d4011195a44d6bd2af9422308fc54f6b",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/96/ddd88f8e1a2fa02cb360852b45e3de89961878": "ee867cb4ac76b155d08a46059139a8e4",
".git/objects/3a/456a4c33556b881edb650073c0a9e36be8601a": "bf93d8225d23ecc4bc9ce40285910a11",
".git/objects/54/ddd96fb94ec507634cafb02774c78f6d10a431": "b1763b5c7ff1668eaafbc20df93f22c5",
".git/objects/54/280eb2ef1c1cf6719e12c49f7d42497bc53fd7": "7b3053b48b40fa589de89027aeb01b24",
".git/objects/30/273228b04f5651212d792b466979e12c1c01a6": "5d66640cd3a7d065e8f83dd8e5fece81",
".git/objects/30/a421306c3f99986c1ad7b6d9c82285acd6486a": "c2dab8571cc2db4d0223bd1b6d32211f",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/0c2743989d949cf0fa08d4a29887b90bbf9ebe": "974921273fb17b898ff842054ae89e08",
".git/objects/08/1b59b104d2e274246b52c1fca0f99bc8c544cf": "5146ee01af6beed651ad1d0e760c6ebe",
".git/objects/6d/34adf77004d6d8e7e0153f2b2f317aba26f096": "c3c960373e746fd3287d1a287c4923c7",
".git/objects/6d/141100ef32b01ff02ad79a26f41ecfe296a3c2": "13a6b5b88d40f717417a9c07f148b69f",
".git/objects/6c/70507bc7aaed34007723a4af002979e5ffbcb3": "d74c27288a242debc0556f4f42c77f42",
".git/objects/99/364e27341b07c318f9164478bbf8d3aa723e3e": "c4609df64e6b97ec0a479ccc67475c0e",
".git/objects/99/8df422ca754a4c81c7f11e1827c8b24a8a7608": "155fa2131e8d38f6d0b275059bdcec2b",
".git/objects/99/b5b2f5da3d88a7e623cd310978bad1695d0b02": "4767eae74bc2e7acf3f0582f76323182",
".git/objects/52/b30cb3dae5e439471d804c41352b47e5dbe78a": "c24785a7664cfcc4e1dfaea40b8814cd",
".git/objects/52/680a0e9e12dd96920cfd9c6ec4c0125b07e579": "efc620ffb076d0f5244df056ee415986",
".git/objects/55/5a9c579f35933c7d64a458b0e53e4be329a928": "ac8508424c8c877cda3b2e6cc14cf4f7",
".git/objects/90/9e4da133558a8d1056b7acfbff262dbc940db0": "c6fcf94da907da107a58c4760fc70806",
".git/objects/90/7bafc99721028cbea0232941da50e494b92dbb": "f88f9446b8bdd0ffe73cb196a84fdc7e",
".git/objects/d3/5dcfce5087b3383788f3ddfb66c3ae92b1a03e": "825041e6387e556b1041c424ec996a0d",
".git/objects/d3/8aa573f7805fd8c031a86cd2d354c3c68b11d5": "6d41548fff56b2ef85c6dc0985b0f0a2",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/fa104f804bf0f849f13181c08dde77b1ef0a7c": "409c266f53e8128aba3db5fb9fb6a2e5",
".git/objects/a0/e5af67807035abf58fd2b5d9695fde6dddbfb0": "4a1b32752df1270c7bb6897d89d965a6",
".git/objects/b8/4712be9988b4f7f148645db4b9d087f83b7b83": "c79807bb1f2be79400b9f4f29fa3efea",
".git/objects/dc/e7c6312e0e7e52cfc107b477940c20fb6743ef": "236a41a8018fdda6e27dd8f0c38f52e2",
".git/objects/dc/11d928b6d7250ac563cf81fee05b381f8ef126": "1e195b8b42be0b12ccd589d80b0f1eda",
".git/objects/a9/97d6e2d26247c820bb7c154c08d32381bc0d12": "55e8ecce2c32b84e94377dd04f7e8b18",
".git/objects/d2/820589eda289a6f74180a03aaf022f2f9f8b6f": "6f6ab6f8b046a9b794d0e075f108f364",
".git/objects/b7/014f3faaba5ab8530cc05c498299a140433fa7": "41813eddb25b0490520e7b30c9b0e388",
".git/objects/b7/11503b56db94ebffd365853832bd03b09a384d": "cb261a86e76118b1f1262c7d5fccaa9a",
".git/objects/a8/0ce56c540fbf38b1c8f00ce62a7f95348347f1": "edd18b032ff1843d56c54f3053a43f50",
".git/objects/a8/3df336aab2040a0fa65744aa40bf76fdde0d08": "c9b5feae0dc2f4b7e590a1fc35442040",
".git/objects/de/2151aff26c35382cec043cfb91c9ee1a4c170e": "af8053958321222f5d495c2eb8f95d60",
".git/objects/b0/72421fbaa4b64ae4962438377c4babaaae8a9c": "04f4f747e5dd1eb5772bc69192af14b6",
".git/objects/a6/0443c418a616b60b89866ed6fae36b5e9438e7": "e96acba8a32ae5c1fb868490fbccffcb",
".git/objects/b9/b75d3ff0e10912b4d64bebd4310b5b2ba82aec": "afed8588f49f4d39a11cb4ee19ddbab2",
".git/objects/c3/d512e0c1b29667135fc70b35cd892335021937": "9f818c6cad0f5eb0e3e93744fa572c2c",
".git/objects/c4/2139ea88a7796fd802f1972c0976d0157e6ad5": "f25e950e36368686ab0a5f30f0f70f98",
".git/objects/c4/015ac26df3e988563610e5801d62227db51289": "920ac0cc63b255b5df1dc8ed930baf66",
".git/objects/ea/3cf14b0bcfcbe4835a6079651dc0ae4f3980ad": "20399c3fb9e42c57d4311783bf2ce611",
".git/objects/e1/31aabdc11f4ee5555738a3b750fd6f99d82d8b": "23f2843aac74426d1459ec4dd23e1e79",
".git/objects/e1/d698fe044ef40c203eabbafe24681e30eaeee0": "0652eff6fa3e393594b2775fa6963189",
".git/objects/cd/a0ac11feaffe00fa41471b897f2a597f20d5f1": "5a735c3f1664891ac03e0c610a80fc10",
".git/objects/cc/b34885f3bf9167a69042df560e7ebbeddfeb87": "cf114a35d492c685988489cd9975f07f",
".git/objects/e6/d5146c5c5bcd626240f8970efca70cf7ff0719": "bd3de701cf58eb6ca77ef79c5f8d5642",
".git/objects/f9/89f54ef9193408428987d9c6e6dbc4f0a17508": "c90a33f6a6de831637c86e813b36ea23",
".git/objects/f9/08b1eefd4f0f01d97577907adc64449675c2bc": "5175b473a564b0659f7d7bb84f36e6b6",
".git/objects/f0/691b50c1d167af678b845ff2cc191c17416582": "2e2b6ff17f80f89291fbe4a5e8553e35",
".git/objects/f7/0c21ed8c7e43fccd696bca638bb3106a165774": "2d43e7eff37035e3fde406b94a6a2dba",
".git/objects/f7/eaf61e2d736d490bb4e8b6aa593e217fadb956": "7f0fdcb7eebfad2a793b4e49c88ed3d9",
".git/objects/e8/f2059f738816d39d5cc242c082adc3b4e0a06a": "a695f8b27356a73eebb37208a596169c",
".git/objects/e8/4d9a850f32471bb9c359a56243533e58d7b6b7": "f0a835d208d2b1cae57d8628da671b40",
".git/objects/c5/9570cd9843d470ec0a85b15c12ab040f0fbab0": "aeb4c59bc896e29d9741ace6b25204a2",
".git/objects/f1/e093cd3d725b5d2fb32c064447956dbd2bb733": "4b0c59d31388c53f3d6b7d24d9729440",
".git/objects/f8/5744ba07f6513d42bf190295e8ec9599a27555": "f66ad2bbb2202e109d28c4aa551e51c2",
".git/objects/f8/df5d00abd131fc3b98aa47044edc859b4fb817": "25ea7f43670f966b7b3d9609a08f4a12",
".git/objects/f8/cbb210459dd5a70ca5402b362dc0f29309ee1b": "7b6f832f4cd0bf7abf018cd21eba9bac",
".git/objects/f8/6c8f3f630d6134335f7caac6b593c67035c284": "e41f652b39fa787d6806d0c065887845",
".git/objects/ce/e07060e2be0eae782c5a69fb54e8a9cbf0a544": "16f483a9121a9f0e44df77544c3ae0a4",
".git/objects/e0/2d3401155e0ce0bd58070cdc4f90b0b5b93156": "b7844dd2cc92e5258ca48a5ad041aede",
".git/objects/2c/2127fac01ec15861ba8792eeaee6c99027044a": "c7fd8cd42e0f0a564a12600f4786967b",
".git/objects/2c/9e2c1571300f08cc0edfbdd132af6f385e2ad0": "2f96886962d351220e5c56c177ab0512",
".git/objects/79/f17f7891ebde2364d43dac8421b02ba70d2615": "382e327eedfd50439fa77365b4d0b2e2",
".git/objects/41/9d77dfda01c9e6ec694fd4aa36432c8c22cafe": "6931c1ff37f5d7596fbecf703df2173e",
".git/objects/77/4814059b7de2388b7e8c25f61f5d49f97dcc23": "b7649589889493ac829153fd04c4f8a8",
".git/objects/77/87161b8d8f048557f2780c5c9bb30fe98e7093": "db94338516627c4d202a671030369a1a",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/5026b8f5c9fdb877033a9c1840105051b76623": "f6ac4c3261b4b257ef988e6131b1b9da",
".git/objects/70/06640486d9bd48e09143bc479b39b992c008b4": "098a7d30048d8533a2016310c3465ced",
".git/objects/70/8595167ef71a856b633f95b33b366586545390": "ec447a37a879089a3c824da50722a9fa",
".git/objects/70/423658e318fb3818f393a8685eda493898023c": "74cd82349380d663700e4d099b9964d7",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/84/b0da6cbbc456c1612bb751e54e02f2b52dca29": "3aa258e924250d50030c8088a01e2644",
".git/objects/84/3fd6d79ee45297b8d5e139127864551f43949d": "7347dbb510a495cfdd548444414471b2",
".git/objects/4a/51263ffbccfaa4a040bfd139c21d4c57268989": "c5673972a1acc712cebc820a506e2dbc",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/85/b1d74ed6e897582355bcd7ff4d7897f9e06e30": "998de1361936517b165ad24bc4f01b72",
".git/objects/1c/d4225b6d0009caee5e70f62baaad0a05007d25": "502268b92f97d0dac031dc69b862c17a",
".git/objects/1c/5c15b6f08e1e38f374b1f788a98d300c44e582": "13ae2294e3b6b259740aee7d53cd2cf6",
".git/objects/2e/6f39d8752df5551a7d83db7b102115e63e598d": "c74453bd4e2af44f89d5a96b7b5d193f",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/47/1bfdf6da66aa77f48f3b79718afb41118f64cf": "9e3fbb8958ffec525e892840bc31d67a",
".git/objects/8b/aaf3cd29fec779465db7657689adc3db1b00f2": "c6fce9b172944c20e6b42cbfe6276afb",
".git/objects/7f/a51c5d0a53e7ecd703cf496f8fa76954356f68": "2aa9ad5dcef1e3d2a4ca5901af5f6627",
".git/objects/14/5f52bfa2b0227ce34ff43b20fe0f190363497f": "e508ab0937c03ddfaa023bc982b9d71d",
".git/objects/8e/66d1b51f164408abec5928c00fa239ee39d6dc": "5cc08cfd5b17351ab5453cf9d727b3da",
".git/objects/25/39b7c7ef83f0b0345bc8d9df8e3ce103e6de5e": "1b5f727bb42417f8e29680e342085019",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "ceff1f81bd83c927016a30a86ac7d189",
".git/logs/refs/heads/main": "56c53b5578f04a3f16949e7c0cf62372",
".git/logs/refs/remotes/origin/main": "0452e479b4ae9bf34881642e848c936f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "5d76661759b4b5a5c27e84681f56c5e1",
".git/refs/remotes/origin/main": "5d76661759b4b5a5c27e84681f56c5e1",
".git/index": "083101107f8833b99c3111a30ecb441c",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "5ab6fb8bc4e43974c6e06df8c90d3848",
".git/FETCH_HEAD": "4e44561898aa7c5c0b6fc1d7cbab9d01",
"assets/AssetManifest.json": "f0e4cba5470bc77031a794021ce1bc80",
"assets/NOTICES": "80010b29ad092d92a20790cb309dbd35",
"assets/FontManifest.json": "d7689140d776afd9d94e9b9f2027da60",
"assets/AssetManifest.bin.json": "4e2cfe8fb41de30969ed3b9d2a0b37cd",
"assets/circular_progress_indicator_square_large.gif": "ce0141cf86895cf948736c923fa92ade",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "ce155abf66a9846d48b53752d5cd095f",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "1be1f16f03403aab623c5d06ca0ec368",
"assets/fonts/MaterialIcons-Regular.otf": "4b3e50ddead11f9dc72aaa954db398e1",
"assets/assets/app_icon.jpg": "f6cfc9ac8d390cb548556a5e31bb18f5",
"assets/assets/images/logo_with_text.png": "875b184d6e56ef5e8a08a9865c681f0f",
"assets/assets/images/add_image.png": "b5e21c7cff1769bf5a36d880574a065c",
"assets/assets/images/android_pwa.png": "5b1a40c874bf4a7ed59706b694423fbc",
"assets/assets/images/ios_pwa.png": "b5fdecb0620af2214fe2571a3ae825aa",
"assets/assets/icons/check_filled.svg": "881070c6c70ce1209ba965b16eb6c53e",
"assets/assets/icons/cross_red.svg": "b40fb2eda0e87371ea7bdfc707e3e906",
"assets/assets/icons/wallet.svg": "2983f7bfd3db4f0f3981c8000b4aaaec",
"assets/assets/icons/money_box.svg": "ae9a720932d5a0dd67472f73e143ca67",
"assets/assets/icons/add_circle.svg": "8ddb9b74fde76df5e60d4df2a551e47a",
"assets/assets/icons/logout_icon.svg": "ba28682ae566fb64687ef2e3bb91ed90",
"assets/assets/fonts/Gilroy-Medium.ttf": "ef9daf9c32f47a3468f30f861e92b9c4",
"assets/assets/fonts/SF-Pro-Display-Light.otf": "d2e8530d7b0f9ca7c5298263bd1a184a",
"assets/assets/fonts/SF-Pro-Display-Regular.otf": "f4245a5167ad609c4ba2d0850d553bd2",
"assets/assets/fonts/SF-Pro-Display-Bold.otf": "94348d7ee70c258261a757b66596c4f9",
"assets/assets/fonts/SF-Pro-Display-Medium.otf": "84d3637759a89aa1b59df2a828544511",
"assets/assets/fonts/Gilroy-Regular.ttf": "af5b8da12b32c5e74532c6446eb356b4",
"assets/assets/fonts/SF-Pro-Display-Semibold.otf": "2723a0240d8e4fd81b39668e0e33640a",
"assets/assets/fonts/Gilroy-Light.ttf": "1111f8b003573d984ba8a7179862fb32",
"assets/assets/fonts/Gilroy-Bold.ttf": "10b9cd1ddd69d318220fdfeca35a23b3",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
