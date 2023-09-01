"use strict";(self.webpackChunkslingshot_www=self.webpackChunkslingshot_www||[]).push([[38],{2038:function(i,e,n){n.r(e),n.d(e,{default:function(){return g}});var r=n(34331),t=n(27853),o=n(84531),s=n(96518),u=n(66968),a=n(10774),c=n(67007),f=n(46739),h=n(42304),p=n(42201),l=function(){function i(e,n,r,o,s,u,a,c,f,h){(0,t.Z)(this,i),this.Sr=e,this._r=n,this.Ur=r,this.Wr=o+"/safari/"+n,this.Nr=s||"/service-worker.js",this.Ir=u,this.gt=a,this.Vr=c||!1,this.Cr=f||!1,this.h=h,this.Er=p.Z.Or(),this.Br=p.Z.Mr()}return(0,o.Z)(i,[{key:"Yr",value:function(){return this.Cr}},{key:"Gr",value:function(i,e,n,r,t){var o=this;i.unsubscribe().then((function(i){i?o.Hr(e,n,r,t):(a.Z.D.error("Failed to unsubscribe device from push."),"function"==typeof t&&t(!1))})).catch((function(i){a.Z.D.error("Push unsubscription error: "+i),"function"==typeof t&&t(!1)}))}},{key:"Jr",value:function(i,e,n){var r=function(i){if("string"==typeof i)return i;if(0!==i.endpoint.indexOf("https://android.googleapis.com/gcm/send"))return i.endpoint;var e=i.endpoint;return i.Kr&&-1===i.endpoint.indexOf(i.Kr)&&(e=i.endpoint+"/"+i.Kr),e}(i),t=null,o=null;if(null!=i.getKey)try{t=btoa(String.fromCharCode.apply(null,new Uint8Array(i.getKey("p256dh")))),o=btoa(String.fromCharCode.apply(null,new Uint8Array(i.getKey("auth"))))}catch(i){if("invalid arguments"!==i.message)throw i}var s=function(i){var e;return i.options&&(e=i.options.applicationServerKey)&&e.byteLength&&e.byteLength>0?btoa(String.fromCharCode.apply(null,new Uint8Array(e))).replace(/\+/g,"-").replace(/\//g,"_"):null}(i);this.Sr.Lr(r,n,t,o,s),r&&"function"==typeof e&&e(r,t,o)}},{key:"Qr",value:function(){this.Sr.Xr(!0)}},{key:"Zr",value:function(i,e){this.Sr.Xr(!1),a.Z.D.info(i),"function"==typeof e&&e(!1)}},{key:"hn",value:function(i,e,n,r){var t=this;if("default"===e.permission)try{window.safari.pushNotification.requestPermission(this.Wr,i,{api_key:this._r,device_id:this.Ur.te().id},(function(e){"granted"===e.permission&&t.Sr.setPushNotificationSubscriptionType(f.Z.NotificationSubscriptionTypes.OPTED_IN),t.hn(i,e,n,r)}))}catch(i){this.Zr("Could not request permission for push: "+i,r)}else"denied"===e.permission?this.Zr("The user has blocked notifications from this site, or Safari push is not configured in the Braze dashboard.",r):"granted"===e.permission&&(a.Z.D.info("Device successfully subscribed to push."),this.Jr(e.deviceToken,n,new Date))}},{key:"fn",value:function(i,e,n){var r=function(r){switch(r){case"granted":return void("function"==typeof i&&i());case"default":return void("function"==typeof e&&e());case"denied":return void("function"==typeof n&&n());default:a.Z.D.error("Received unexpected permission result "+r)}},t=!1,o=window.Notification.requestPermission((function(i){t&&r(i)}));o?o.then((function(i){r(i)})):t=!0}},{key:"Hr",value:function(i,e,n,r){var t=this,o={userVisibleOnly:!0};null!=e&&(o.applicationServerKey=e),i.pushManager.subscribe(o).then((function(i){a.Z.D.info("Device successfully subscribed to push."),t.Jr(i,n,new Date)})).catch((function(i){p.Z.isPushBlocked()?(a.Z.D.info("Permission for push notifications was denied."),"function"==typeof r&&r(!1)):a.Z.D.error("Push subscription failed: "+i)}))}},{key:"dn",value:function(){return this.Vr?navigator.serviceWorker.getRegistration():navigator.serviceWorker.register(this.Nr).then((function(){return navigator.serviceWorker.ready.then((function(i){return i&&"function"==typeof i.update&&i.update().catch((function(i){a.Z.D.info("ServiceWorker update failed: "+i)})),i}))}))}},{key:"pn",value:function(i){this.Vr||(i.unregister(),a.Z.D.info("Service worker successfully unregistered."))}},{key:"subscribe",value:function(i,e){var n=this;if(p.Z.isPushSupported()){if(this.Er){if(!this.Vr&&null!=window.location){var r=this.Nr;-1===r.indexOf(window.location.host)&&(r=window.location.host+r),-1===r.indexOf(window.location.protocol)&&(r=window.location.protocol+"//"+r);var t=r.substr(0,r.lastIndexOf("/")+1);if(0!==h.SD.bn().indexOf(t))return void a.Z.D.error("Cannot subscribe to push from a path higher than the service worker location (tried to subscribe from "+window.location.pathname+" but service worker is at "+r+")")}if(p.Z.isPushBlocked())return void this.Zr("Notifications from this site are blocked. This may be a temporary embargo or a permanent denial.",e);if(this.gt&&!this.gt.gn()&&0===this.gt.Zs())return a.Z.D.info("Waiting for VAPID key from server config before subscribing to push."),void this.gt.wn((function(){n.subscribe(i,e)}));var o=p.Z.isPushPermissionGranted();this.fn((function(){o||n.Sr.setPushNotificationSubscriptionType(f.Z.NotificationSubscriptionTypes.OPTED_IN),n.dn().then((function(r){if(null==r)return a.Z.D.error("No service worker registration. Set the `manageServiceWorkerExternally` initialization option to false or ensure that your service worker is registered before calling registerPush."),void("function"==typeof e&&e());r.pushManager.getSubscription().then((function(t){var o=null;if(n.gt&&null!=n.gt.gn()&&(o=a.Z.vn.yn(n.gt.gn())),t){var f=null,h=null,p=n.h.I(c.I.q.kn);if(p&&!(0,s.kJ)(p)){var l;try{l=u.Z.Dn(p).Pn}catch(e){l=null}null==l||isNaN(l.getTime())||0===l.getTime()||(f=l,(h=new Date(f)).setMonth(f.getMonth()+6))}null!=o&&t.options&&t.options.applicationServerKey&&t.options.applicationServerKey.byteLength&&t.options.applicationServerKey.byteLength>0&&!(0,s.Xy)(o,new Uint8Array(t.options.applicationServerKey))?(t.options.applicationServerKey.byteLength>12?a.Z.D.info("Device was already subscribed to push using a different VAPID provider, creating new subscription."):a.Z.D.info("Attempting to upgrade a gcm_sender_id-based push registration to VAPID - depending on the browser this may or may not result in the same gcm_sender_id-based subscription."),n.Gr(t,r,o,i,e)):t.expirationTime&&new Date(t.expirationTime)<=(new Date).valueOf()?(a.Z.D.info("Push subscription is expired, creating new subscription."),n.Gr(t,r,o,i,e)):p&&(0,s.kJ)(p)?n.Gr(t,r,o,i,e):null==h?(a.Z.D.info("No push subscription creation date found, creating new subscription."),n.Gr(t,r,o,i,e)):h<=(new Date).valueOf()?(a.Z.D.info("Push subscription older than 6 months, creating new subscription."),n.Gr(t,r,o,i,e)):(a.Z.D.info("Device already subscribed to push, sending existing subscription to backend."),n.Jr(t,i,f))}else n.Hr(r,o,i,e)})).catch((function(i){a.Z.D.error("Error checking current push subscriptions: "+i)}))})).catch((function(i){a.Z.D.error("ServiceWorker registration failed: "+i)}))}),(function(){var i="Permission for push notifications was ignored.";p.Z.isPushBlocked()&&(i+=" The browser has automatically blocked further permission requests for a period (probably 1 week)."),a.Z.D.info(i),"function"==typeof e&&e(!0)}),(function(){a.Z.D.info("Permission for push notifications was denied."),"function"==typeof e&&e(!1)}))}else if(this.Br){if(null==this.Ir||""===this.Ir)return void a.Z.D.error("You must supply the safariWebsitePushId initialization option in order to use registerPush on Safari");var l=window.safari.pushNotification.permission(this.Ir);this.hn(this.Ir,l,i,e)}}else a.Z.D.info(this.Sn)}},{key:"unsubscribe",value:function(i,e){var n=this;p.Z.isPushSupported()?this.Er?navigator.serviceWorker.getRegistration().then((function(r){r?r.pushManager.getSubscription().then((function(t){t&&(n.Qr(),t.unsubscribe().then((function(t){t?(a.Z.D.info("Device successfully unsubscribed from push."),"function"==typeof i&&i()):(a.Z.D.error("Failed to unsubscribe device from push."),"function"==typeof e&&e()),n.pn(r)})).catch((function(i){a.Z.D.error("Push unsubscription error: "+i),"function"==typeof e&&e()})))})).catch((function(i){a.Z.D.error("Error unsubscribing from push: "+i),"function"==typeof e&&e()})):(a.Z.D.info("Device already unsubscribed from push."),"function"==typeof i&&i())})):this.Br&&(this.Qr(),a.Z.D.info("Device unsubscribed from push."),"function"==typeof i&&i()):a.Z.D.info(this.Sn)}}]),i}();l.Sn="Push notifications are not supported in this browser.";var d={t:!1,pushManager:null,aa:function(){return d.o(),d.pushManager||(d.pushManager=new l(r.ZP.gr(),r.ZP.ea(),r.ZP.ce(),r.ZP.Ks(),r.ZP.nn(r.JY.na),r.ZP.nn(r.JY.ra),r.ZP.ir(),r.ZP.nn(r.JY.ta),r.ZP.nn(r.JY.ia),r.ZP.l())),d.pushManager},o:function(){d.t||(r.ZP.u(d),d.t=!0)},destroy:function(){d.pushManager=null,d.t=!1}},g=d}}]);