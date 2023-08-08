'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "61e104158a7249afa07d61f7664a09c6",
"splash/img/light-background.png": "2bb52ce5b464639772673d6608620ef6",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "d427ebd72d2bad5b78875c0824c1b0e6",
"index.html": "e64d627061101329ea010b8f1bec47f2",
"/": "e64d627061101329ea010b8f1bec47f2",
"main.dart.js": "66da5d519379ea4bcda574926614d00d",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a8a0a97a8f6ed316d89dfb720dc27fcf",
".git/config": "9607e5c59bb9d5b92295c6d04cac1be3",
".git/objects/68/b5dea85e6eaf6c9cce3051050be6a8951fc14c": "4b2d3cdf7e38619b1e4c428001e1be2f",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/c6/5db93529a6c289fc30b43b0419562eb4adb958": "d104dca7b5829cd845bf9a0b5afc6d6e",
".git/objects/pack/tmp_pack_rrlukU": "433ca1e83028bbb06455e2cd14e7a560",
".git/objects/89/5e853d8dbe42c7a4c4e92abfb23d3fdfb97894": "4ec7c692aeadaabe2dc8de3578b8defa",
".git/objects/28/8b36b1efb71c411d5c27a1ea6c08e41a7fed46": "58a717c6109371969d37342fdb8e534d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/43/ffd7e1d12dec265aa2ff344076aa1d82d79e01": "bd551675880d1b66dd086f7c08a0e4ad",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/86672130aac0e4918a028246f39139ae5a99c5": "813698a68796f8a6da80a0ef5df505a1",
".git/objects/36/1455f1edb60397d17c0b92d59fdc65ec90c373": "a8639c9eece8322adcfb4d5e2f39a211",
".git/objects/d4/d968c07a027a5a3754e24f8e8f422ff548128c": "76b7a4d62c2ee074f586f76693dd2626",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/84/50b12022d630893b2015148107e74539e0c188": "329e484f6a3da6cd62d8dc7c3a2f08ad",
".git/objects/71/e14f0cd231e465918ff01e8bdee34c0357bda9": "f12e52cc0533366a79b6c90a5e801abb",
".git/objects/8e/a5a6e65a0a5fac602d6b85642a54ebea13778a": "3785bb75e7959bd363f616f05d0b8214",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "b9efdb05e03b1e6e9bf73033ea23309b",
".git/logs/refs/heads/deploymentBranch": "a6f5eb724ac94dcf5b8fc1969faa1c04",
".git/logs/refs/heads/master": "08a57d806566b24db2d84d709be526de",
".git/logs/refs/remotes/origin/deploymentBranch": "093b90456ee224f8c43a7596153b2b7a",
".git/logs/refs/remotes/origin/master": "74a099378444e481cbd3510331da4436",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/deploymentBranch": "0ad0ede4ed647642f91106cc5609b62c",
".git/refs/heads/master": "0ad0ede4ed647642f91106cc5609b62c",
".git/refs/remotes/origin/deploymentBranch": "0ad0ede4ed647642f91106cc5609b62c",
".git/refs/remotes/origin/master": "0ad0ede4ed647642f91106cc5609b62c",
".git/index": "11e0bbe161eb16f37eeee15b46c3d606",
".git/COMMIT_EDITMSG": "108bea780df37a681d6af80f0c77b359",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "6d1220cd05939fed58cef04a87886915",
"assets/NOTICES": "283567dabd143077c03753bed92e96eb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "b5f226fdfb33ff7d41fec525d95d9242",
"assets/fonts/MaterialIcons-Regular.otf": "511f6805ea0a8b8f78bd3f3b784f7ea2",
"assets/assets/info.png": "b14746c63d9ce2a9fb5a56738af19d24",
"assets/assets/save_password.png": "388dd7955eacaaa9570619a37c8e2694",
"assets/assets/email.png": "2966f3f607794ac7136fa910fbe19739",
"assets/assets/cashback.png": "b28e33841eb73be1353683038c8f87ca",
"assets/assets/add_image.png": "dc3f45b91da29c9d160fce029d3ba2db",
"assets/assets/password_updated.png": "a12385a803c90ab497432494eb971c1e",
"assets/assets/settings_page_picture.png": "1fc03269013070da83b0f8ff05b47785",
"assets/assets/membership_active.png": "8c08fb24ac5a238d026426fe5de5aaea",
"assets/assets/xuxem-black-logo.png": "cd42e3e0147039ae8d3ea6ec6ffd736b",
"assets/assets/home_active.png": "187b728f423d8ce7f60005c57c227fd5",
"assets/assets/support.png": "7baf576bac4efcbd637d208c6d5e6062",
"assets/assets/Group%25203376status_completed.png": "c81325a663af530d755bec3e065079a7",
"assets/assets/password_change.png": "2a289b160179673abbe7723cd339221c",
"assets/assets/logo-whatsapp.png": "2fd82e971930287da6bede46964a387e",
"assets/assets/download.png": "dbc12b68923e0b32a122774c9d7043bc",
"assets/assets/Group%25203376status_pending.png": "a9cf40160808e31c79b639e3fa08c808",
"assets/assets/status_cancelled.png": "1b9a9a3028794b0b928e71effb231f8c",
"assets/assets/offers_active.png": "dc4bffe9ec0988d6d3ec761261c97516",
"assets/assets/mark_as_read.png": "b3acd54c1298a19a6507454679bb39f1",
"assets/assets/loading.json": "18ee6ecaa5fea66cc540b89ee75a164d",
"assets/assets/customer_support.png": "c324b73295cedf463f11d7aad94019e9",
"assets/assets/invoice_active.png": "25885ce91aab27a4854a7ee4dfa6f22c",
"assets/assets/share_icon.png": "bc06ed8a1a8f10c41cb7f2315c7fc3b7",
"assets/assets/add_icon.png": "9833c219f8f473005a263be123945047",
"assets/assets/password-reset-confirm.png": "db12d9b07e3459dbbec32d9b56ee53d9",
"assets/assets/offers_black.png": "024c8ba6046fb661a8534216c72bdcab",
"assets/assets/logout.png": "5b28f396073fcc7108e812bb6184b05d",
"assets/assets/visa.png": "a348d95c09ac4e0c36b2e0cfa69155a9",
"assets/assets/setting_active.png": "a4f12a4e793143b91c8be677dbd197db",
"assets/assets/home.png": "0e0dac576101551f11089210b75eaeae",
"assets/assets/person.png": "a047e0ae777e02a9795f3c83207ac517",
"assets/assets/search_icon.png": "909d03c52892b08e9c2d45fece7ed49e",
"assets/assets/push_notifications.png": "349cf7ce4dbda711ae8921d87da9e8d7",
"assets/assets/Web-App-Image3.png": "a730e984e939a5952a44604171b32be2",
"assets/assets/Web-App-Image2.png": "153e22797bac719a077c525c72cffb25",
"assets/assets/splash.png": "2bb52ce5b464639772673d6608620ef6",
"assets/assets/change_language.png": "1b502d4230a63fbef44dde3c4acf91ab",
"assets/assets/Web-App-Image1.png": "be031398149eb32e576a93f023c7f20a",
"assets/assets/invoice.png": "815c7bd69e563860819faa38533a5af4",
"assets/assets/Web-App-Image4.png": "4d075bcfbdb49aefc46c42fbb7369d76",
"assets/assets/notification_active.png": "6120d8600065002e81395c8862d36dbc",
"assets/assets/qr_code.png": "0c7f7ee91dafa1909d54fb5debf0c85d",
"assets/assets/logo-yellow.png": "eb962b4376c1bbdcdb4abd1ec8599186",
"assets/assets/membership.png": "c308e8d021c5c88e733ae51325aadb7e",
"assets/assets/cashback_active.png": "2f59e341eb98f419e9e5e433f1f4cc64",
"assets/assets/location.png": "295e2c77ac77c1c8d657fb972bd0cb53",
"assets/assets/status_pending.png": "ecf1463246d8f6563786a7da37f4bb24",
"assets/assets/in_process.png": "e5aeb4961bd008315316b7a409e6aa30",
"assets/assets/collage_icon.png": "fbd453c73ddaecb564bf4a88cec2ac02",
"assets/assets/grpah.png": "94732734151bd6bb96b622c7246614c3",
"assets/assets/mobile_number.png": "a7dae4085497ade71f68733a66587b6a",
"assets/assets/mastercard.png": "c90c2ed1a953635549e1f5c2d7a25da1",
"assets/assets/collage_container.png": "c326b9db1cfc7a66ba5ac46c7f600cd9",
"assets/assets/notification.png": "7b6d216b8ac85386edf9b473661bcab9",
"assets/assets/paypal.png": "2f2c28e2ad478f4e45c6e5e517919537",
"assets/assets/chat.png": "d585bc5c6e4c589f604101c8dc26a9be",
"assets/assets/status_completed.png": "a995780f1436feea14eaeafbf9ec5f51",
"assets/assets/offer_2.png": "daa188989ae3ff61a016a5b8f702c7c1",
"assets/assets/placeholder_profile_pic.png": "b10b9d062f663acf9e9732e3cdedbb7d",
"assets/assets/setting.png": "a300234c91af5167ddfef39e16adc037",
"assets/assets/chat_active.png": "a60c628f495c944a6f80ca7b20356d33",
"assets/assets/arrow_drop_down.png": "730d83439041ed81a0d80d314a901a9b",
"assets/assets/rate_us.png": "469ff785d27e58c8bf9accd64868ae93",
"assets/assets/offer_1.png": "234118d8ee6d194333a9759024cd49f7",
"assets/assets/be_live.png": "ac91bdc2f5ae51f133b0b8c599608023",
"assets/assets/offers.png": "82451be58e6fe2aaff361e99cf5efcca",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
".idea/vcs.xml": "55b7e3c95c188fd86e7ecc8c360934b1",
".idea/workspace.xml": "bd33e8983e1e137f4923740f8f4521d3",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
".idea/misc.xml": "7ffe1d213cb7f189bb46f7c81ed224eb"};
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
