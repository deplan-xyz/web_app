'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "daa8ac60ccebc7a3a2f1e90da264cfad",
"index.html": "f49eb347c0a7e91334efad7037135b89",
"/": "f49eb347c0a7e91334efad7037135b89",
"CNAME": "c2e7fa8bfbaa44d851ff1fa6aca098e2",
"main.dart.js": "af3d8c5af753b8b527df83baa0a6299b",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "fdee8579ceba506c4ecae80eba34e40c",
"icons/Icon-192.png": "f01c400edd6cc893b99f858f39c3a2b8",
"icons/Icon-maskable-192.png": "f01c400edd6cc893b99f858f39c3a2b8",
"icons/Icon-maskable-512.png": "9e5910e58da47d1b4e659bf6bca372e7",
"icons/Icon-512.png": "9e5910e58da47d1b4e659bf6bca372e7",
"scripts/iframe_messenger.js": "98f2244e768b6b81eb22e4261018db38",
"manifest.json": "ea1a63755b2b401554cc531308530970",
".git/config": "5e02c6f408749f1ce09d1dcec9e0d45b",
".git/objects/9e/8b9b8b1e589f4615efe4be393bd8f130d1f5c8": "42810a4cf42b4d269269cfbd56d75cf2",
".git/objects/32/9538aaaa2e7995316fb365a4012827740fc370": "d3e882f535634ddf2b962795a3527893",
".git/objects/67/d45cc498f64d3e278dc1ec62ea3ac4f6187ba8": "2c9c304c91997bd295c3205157f65efa",
".git/objects/5a/7a84d368112fb27235306c54e5154b33239adf": "d769dde6266893802622807567219aef",
".git/objects/a4/80305b67f748ff6dda256dd01703172e64232f": "f84fecadfcbf59b602681befb39d95d0",
".git/objects/b2/3547fc18c0488444c8165cba113e6265f630c2": "c899a2f133cb66c82f7c512faca01321",
".git/objects/b2/2f0ddf2d14f70430b53a5c364b4322c41539c0": "48ca2ea217d1ef4a3189a1f841384fe6",
".git/objects/ab/82f215c169ffe6317adf9fc6ac09a1a196967d": "49c5cb442be6b629287bdfeb06c79d25",
".git/objects/ec/c1166b58e338e8142cfd684baa309258b49815": "ad61dd6d9501cd4bdee8d92df3fa6dce",
".git/objects/18/41b67393cc5359e56bf758c1022b275e89e02d": "935725e51de57d1070eaa7ca6f85d706",
".git/objects/pack/pack-b05879b4e4e85f13af40a2a2c0aa276dd4835141.pack": "709cd76404b62d2262783fbe93175b4a",
".git/objects/pack/pack-b05879b4e4e85f13af40a2a2c0aa276dd4835141.idx": "1d10aa85e8c5eed127a9d2ac04442e0f",
".git/objects/29/7c1326680642d8d42ed65e966c07d7fcd3bab1": "7e244fce8cedecb3ad9427c339a7bd45",
".git/objects/7e/d37fd10233af8c4af204dd4a51111351b38588": "0731a599da39900126612429fc213d60",
".git/objects/2a/448ae1ddc51a96c7aa545261cee71b7c6b3018": "190cf18e583aba73820314afae182ed9",
".git/objects/07/27e75a0651806f12e025ad643459c2aa3ee6f0": "90356c20f6e4623985b50620c08c5a8d",
".git/objects/5b/f3f0f8ee83fb81f4e15d30ea343cc5573cf084": "4432d2ce7b895323cc73fd0650269448",
".git/objects/dc/6f3a4c2a5dde821f1de67b38d702b36fffac3a": "4554bd16b37107e9c5b760e62b7f5918",
".git/objects/d5/dfa48b485eeea356e1d9a4fce29247238e7135": "8c7d1fb0e3df9382b8b201e45e9ff780",
".git/objects/db/19b5ad5226a1f7a890dad8004083eb7aa87042": "804db72853bca1b386cfa29a62447e2d",
".git/objects/ea/103186411b63a91c635fa1521266d7a3730347": "22241a0ee5d1a7c551a8049790ec3a21",
".git/objects/f7/4eda1687fcb63dd1137cd579a6a3e1aed25680": "bf05861a7daf38be861c380c86599312",
".git/objects/e8/3ad9b2dbf93c843d0b4efbdc3e8b1dc519d776": "7487c6564e8d9c96132957ab230644fe",
".git/objects/13/25d88f1d57609183677930c5c306c4ec2f53fd": "405014353017c59c1d0eef21adfc2ef8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "604870926f7fddc64f434371be9ec11a",
".git/logs/refs/heads/main": "604870926f7fddc64f434371be9ec11a",
".git/logs/refs/remotes/origin/HEAD": "4b37e6c60948cabe03781d44416fdccd",
".git/logs/refs/remotes/origin/main": "9197e806a5e94e506bcb20e949e664ac",
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
".git/refs/heads/main": "e075d018d961a1c43ff7f8781a567a89",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "e075d018d961a1c43ff7f8781a567a89",
".git/index": "532c68ba92f2b91adfb776a7e6c54da3",
".git/packed-refs": "96a6de684e8ed75c7fad2850ffd15005",
".git/COMMIT_EDITMSG": "5ab6fb8bc4e43974c6e06df8c90d3848",
"assets/AssetManifest.json": "f0e4cba5470bc77031a794021ce1bc80",
"assets/NOTICES": "15f6321bdfc1ad7a2272df132cc252d1",
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
