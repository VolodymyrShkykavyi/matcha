

window.google = window.google || {};
google.maps = google.maps || {};
(function() {

	function getScript(src) {
		document.write('<' + 'script src="' + src + '"><' + '/script>');
	}

	var modules = google.maps.modules = {};
	google.maps.__gjsload__ = function(name, text) {
		modules[name] = text;
	};

	google.maps.Load = function(apiLoad) {
		delete google.maps.Load;
		apiLoad([0.009999999776482582,[null,[["https://khms0.googleapis.com/kh?v=802\u0026hl=ru-RU\u0026","https://khms1.googleapis.com/kh?v=802\u0026hl=ru-RU\u0026"],null,null,null,1,"802",["https://khms0.google.com/kh?v=802\u0026hl=ru-RU\u0026","https://khms1.google.com/kh?v=802\u0026hl=ru-RU\u0026"]],null,null,null,null,[["https://cbks0.googleapis.com/cbk?","https://cbks1.googleapis.com/cbk?"]],[["https://khms0.googleapis.com/kh?v=116\u0026hl=ru-RU\u0026","https://khms1.googleapis.com/kh?v=116\u0026hl=ru-RU\u0026"],null,null,null,null,"116",["https://khms0.google.com/kh?v=116\u0026hl=ru-RU\u0026","https://khms1.google.com/kh?v=116\u0026hl=ru-RU\u0026"]],[["https://mts0.googleapis.com/mapslt?hl=ru-RU\u0026","https://mts1.googleapis.com/mapslt?hl=ru-RU\u0026"]],null,null,null,[["https://mts0.googleapis.com/mapslt?hl=ru-RU\u0026","https://mts1.googleapis.com/mapslt?hl=ru-RU\u0026"]]],["ru-RU","US",null,0,null,null,"https://maps.gstatic.com/mapfiles/","https://csi.gstatic.com","https://maps.googleapis.com","https://maps.googleapis.com",null,"https://maps.google.com","https://gg.google.com","https://maps.gstatic.com/maps-api-v3/api/images/","https://www.google.com/maps",0,"https://www.google.com"],["https://maps.googleapis.com/maps-api-v3/api/js/33/6a/intl/ru_ALL","3.33.6a"],[202142624],1,null,null,null,null,null,"",null,null,1,"https://khms.googleapis.com/mz?v=802\u0026",null,"https://earthbuilder.googleapis.com","https://earthbuilder.googleapis.com",null,"https://mts.googleapis.com/maps/vt/icon",[["https://maps.googleapis.com/maps/vt"],["https://maps.googleapis.com/maps/vt"],null,null,null,null,null,null,null,null,null,null,["https://www.google.com/maps/vt"],"/maps/vt",427000000,427],2,500,[null,null,null,null,"https://www.google.com/maps/preview/log204","","https://static.panoramio.com.storage.googleapis.com/photos/",["https://geo0.ggpht.com/cbk","https://geo1.ggpht.com/cbk","https://geo2.ggpht.com/cbk","https://geo3.ggpht.com/cbk"],"https://maps.googleapis.com/maps/api/js/GeoPhotoService.GetMetadata","https://maps.googleapis.com/maps/api/js/GeoPhotoService.SingleImageSearch",["https://lh3.ggpht.com/","https://lh4.ggpht.com/","https://lh5.ggpht.com/","https://lh6.ggpht.com/"]],null,null,null,null,"/maps/api/js/ApplicationService.GetEntityDetails",0,null,null,[null,null,null,null,null,null,null,null,null,[0,0]],null,[],["33.6a"],1,0,[1]], loadScriptTime);
	};
	var loadScriptTime = (new Date).getTime();
})();
// inlined
(function(_){var ta,xa,za,Ba,Ca,Da,Pa,Qa,ab,gb,hb,jb,ob,nb,pb,qb,Hb,Jb,Nb,Ub,Wb,Xb,jc,lc,qc,zc,Ac,Bc,Fc,Ic,Jc,Mc,Pc,Lc,Qc,Tc,$c,gd,ld,nd,qd,sd,rd,Bd,Fd,Hd,Md,Nd,Od,Qd,Sd,Ud,Pd,Rd,Yd,Zd,be,qe,re,se,ue,ye,Ae,Be,Ge,He,Ie,Je,Me,Oe,Pe,af,bf,cf,ef,gf,hf,uf,vf,wf,Cf,Df,Ef,Ff,Gf,Of,Pf,Rf,Tf,Uf,Vf,cg,Zf,dg,eg,gg,jg,lg,kg,ng,rg,tg,yg,zg,Cg,Dg,Eg,Fg,Gg,wa,va,Kd,Jd,Ma,Na;_.ba="ERROR";_.ca="INVALID_REQUEST";_.da="MAX_DIMENSIONS_EXCEEDED";_.ea="MAX_ELEMENTS_EXCEEDED";_.fa="MAX_WAYPOINTS_EXCEEDED";_.ha="NOT_FOUND";_.ia="OK";
	_.ja="OVER_QUERY_LIMIT";_.ka="REQUEST_DENIED";_.la="UNKNOWN_ERROR";_.ma="ZERO_RESULTS";_.na=function(){return function(a){return a}};_.l=function(){return function(){}};_.oa=function(a){return function(b){this[a]=b}};_.pa=function(a){return function(){return this[a]}};_.qa=function(a){return function(){return a}};_.sa=function(a){return function(){return _.ra[a].apply(this,arguments)}};ta=function(){ta=_.l();_.ua.Symbol||(_.ua.Symbol=va)};
	_.ya=function(){ta();var a=_.ua.Symbol.iterator;a||(a=_.ua.Symbol.iterator=_.ua.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&wa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return xa(this)}});_.ya=_.l()};xa=function(a){var b=0;return za(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};za=function(a){(0,_.ya)();a={next:a};a[_.ua.Symbol.iterator]=function(){return this};return a};
	_.Aa=function(a){(0,_.ya)();var b=a[window.Symbol.iterator];return b?b.call(a):xa(a)};Ba=function(a,b){if(b){var c=_.ua;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&wa(c,a,{configurable:!0,writable:!0,value:b})}};Ca=function(a,b,c){a instanceof String&&(a=String(a));for(var d=a.length,e=0;e<d;e++){var f=a[e];if(b.call(c,f,e,a))return{we:e,Si:f}}return{we:-1,Si:void 0}};
	Da=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};_.q=function(a){return void 0!==a};_.Ea=function(a){return"string"==typeof a};_.Fa=function(a){return"number"==typeof a};_.Ga=_.l();
	_.Ha=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
	else if("function"==b&&"undefined"==typeof a.call)return"object";return b};_.Ia=function(a){return"array"==_.Ha(a)};_.Ja=function(a){var b=_.Ha(a);return"array"==b||"object"==b&&"number"==typeof a.length};_.Ka=function(a){return"function"==_.Ha(a)};_.La=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};_.Oa=function(a){return a[Ma]||(a[Ma]=++Na)};Pa=function(a,b,c){return a.call.apply(a.bind,arguments)};
	Qa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};_.u=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?_.u=Pa:_.u=Qa;return _.u.apply(null,arguments)};_.Ra=function(){return+new Date};
	_.y=function(a,b){function c(){}c.prototype=b.prototype;a.Eb=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.vf=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];b.prototype[c].apply(a,d)}};_.Sa=function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(_.Ea(a))return _.Ea(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
	_.A=function(a,b,c){for(var d=a.length,e=_.Ea(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};_.Ta=function(a,b,c){for(var d=a.length,e=_.Ea(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};_.Va=function(a,b){b=_.Sa(a,b);var c;(c=0<=b)&&_.Ua(a,b);return c};_.Ua=function(a,b){Array.prototype.splice.call(a,b,1)};_.Wa=function(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)};_.Ya=function(){return-1!=_.Xa.toLowerCase().indexOf("webkit")};
	_.Za=function(a){return-1!=_.Xa.indexOf(a)};_.$a=function(){return _.Za("Trident")||_.Za("MSIE")};_.cb=function(){return _.Za("Safari")&&!(ab()||_.Za("Coast")||_.Za("Opera")||_.Za("Edge")||_.Za("Silk")||_.Za("Android"))};ab=function(){return(_.Za("Chrome")||_.Za("CriOS"))&&!_.Za("Edge")};_.db=function(){return _.Za("Android")&&!(ab()||_.Za("Firefox")||_.Za("Opera")||_.Za("Silk"))};_.eb=function(){return _.Za("iPhone")&&!_.Za("iPod")&&!_.Za("iPad")};_.fb=function(a){_.fb[" "](a);return a};
	gb=function(){var a=_.D.document;return a?a.documentMode:void 0};hb=function(a,b){this.j=a;this.l=b;this.f=0;this.b=null};_.ib=_.na();jb=function(a){_.D.setTimeout(function(){throw a;},0)};ob=function(){var a=_.kb.f;a=lb(a);!_.Ka(_.D.setImmediate)||_.D.Window&&_.D.Window.prototype&&!_.Za("Edge")&&_.D.Window.prototype.setImmediate==_.D.setImmediate?(mb||(mb=nb()),mb(a)):_.D.setImmediate(a)};
	nb=function(){var a=_.D.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!_.Za("Presto")&&(a=function(){var a=window.document.createElement("IFRAME");a.style.display="none";a.src="";window.document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=(0,_.u)(function(a){if(("*"==
		d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!_.$a()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(_.q(c.next)){c=c.next;var a=c.oh;c.oh=null;a()}};return function(a){d.next={oh:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof window.document&&"onreadystatechange"in window.document.createElement("SCRIPT")?function(a){var b=window.document.createElement("SCRIPT");
		b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};window.document.documentElement.appendChild(b)}:function(a){_.D.setTimeout(a,0)}};pb=function(){this.f=this.b=null};qb=function(){this.next=this.b=this.Yc=null};_.kb=function(a,b){_.kb.b||_.kb.m();_.kb.j||(_.kb.b(),_.kb.j=!0);_.kb.l.add(a,b)};_.rb=function(a){return a*Math.PI/180};_.sb=function(a){return 180*a/Math.PI};_.E=function(a){return a?a.length:0};
	_.ub=function(a,b){_.tb(b,function(c){a[c]=b[c]})};_.wb=function(a,b,c){null!=b&&(a=Math.max(a,b));null!=c&&(a=Math.min(a,c));return a};_.xb=function(a,b,c){c-=b;return((a-b)%c+c)%c+b};_.yb=function(a,b,c){return Math.abs(a-b)<=(c||1E-9)};_.zb=function(a,b){for(var c=[],d=_.E(a),e=0;e<d;++e)c.push(b(a[e],e));return c};_.Bb=function(a,b){for(var c=_.Ab(void 0,_.E(b)),d=_.Ab(void 0,0);d<c;++d)a.push(b[d])};_.F=function(a){return"number"==typeof a};_.Cb=function(a){return"object"==typeof a};
	_.Ab=function(a,b){return null==a?b:a};_.Db=function(a){return"string"==typeof a};_.Eb=function(a){return a===!!a};_.tb=function(a,b){for(var c in a)b(c,a[c])};_.Gb=function(a){return function(){var b=this,c=arguments;_.Fb(function(){a.apply(b,c)})}};_.Fb=function(a){return window.setTimeout(a,0)};Hb=function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};_.Ib=function(a){_.D.console&&_.D.console.error&&_.D.console.error(a)};
	Jb=function(a){this.message=a;this.name="InvalidValueError";this.stack=Error().stack};_.Kb=function(a,b){var c="";if(null!=b){if(!(b instanceof Jb))return b;c=": "+b.message}return new Jb(a+c)};_.Lb=function(a){if(!(a instanceof Jb))throw a;_.Ib(a.name+": "+a.message)};
	_.Mb=function(a,b){var c=c?c+": ":"";return function(d){if(!d||!_.Cb(d))throw _.Kb(c+"not an Object");var e={},f;for(f in d)if(e[f]=d[f],!b&&!a[f])throw _.Kb(c+"unknown property "+f);for(f in a)try{var g=a[f](e[f]);if(_.q(g)||Object.prototype.hasOwnProperty.call(d,f))e[f]=a[f](e[f])}catch(h){throw _.Kb(c+"in property "+f,h);}return e}};Nb=function(a){try{return!!a.cloneNode}catch(b){return!1}};
	_.Ob=function(a,b,c){return c?function(c){if(c instanceof a)return c;try{return new a(c)}catch(e){throw _.Kb("when calling new "+b,e);}}:function(c){if(c instanceof a)return c;throw _.Kb("not an instance of "+b);}};_.Pb=function(a){return function(b){for(var c in a)if(a[c]==b)return b;throw _.Kb(b);}};_.Qb=function(a){return function(b){if(!_.Ia(b))throw _.Kb("not an Array");return _.zb(b,function(b,d){try{return a(b)}catch(e){throw _.Kb("at index "+d,e);}})}};
	_.Rb=function(a,b){return function(c){if(a(c))return c;throw _.Kb(b||""+c);}};_.Sb=function(a){return function(b){for(var c=[],d=0,e=a.length;d<e;++d){var f=a[d];try{(f.Kg||f)(b)}catch(g){if(!(g instanceof Jb))throw g;c.push(g.message);continue}return(f.then||f)(b)}throw _.Kb(c.join("; and "));}};_.Tb=function(a,b){return function(c){return b(a(c))}};_.G=function(a){return function(b){return null==b?b:a(b)}};
	Ub=function(a){return function(b){if(b&&null!=b[a])return b;throw _.Kb("no "+a+" property");}};_.H=function(a,b){this.x=a;this.y=b};Wb=function(a){if(a instanceof _.H)return a;try{_.Mb({x:_.Vb,y:_.Vb},!0)(a)}catch(b){throw _.Kb("not a Point",b);}return new _.H(a.x,a.y)};_.J=function(a,b,c,d){this.width=a;this.height=b;this.f=c||"px";this.b=d||"px"};Xb=function(a){if(a instanceof _.J)return a;try{_.Mb({height:_.Vb,width:_.Vb},!0)(a)}catch(b){throw _.Kb("not a Size",b);}return new _.J(a.width,a.height)};
	_.Yb=function(a,b){this.I=a;this.J=b};_.Zb=function(a){this.min=0;this.max=a;this.b=a-0};_.$b=function(a){this.Ic=a.Ic||null;this.Jc=a.Jc||null};_.ac=function(a,b,c){this.b=a;a=Math.cos(b*Math.PI/180);b=Math.cos(c*Math.PI/180);c=Math.sin(c*Math.PI/180);this.m11=this.b*b;this.m12=this.b*c;this.m21=-this.b*a*c;this.m22=this.b*a*b;this.f=this.m11*this.m22-this.m12*this.m21};_.bc=function(a,b,c){var d=Math.pow(2,Math.round(a))/256;return new _.ac(Math.round(Math.pow(2,a)/d)*d,b,c)};
	_.cc=function(a,b){return new _.Yb((a.m22*b.V-a.m12*b.X)/a.f,(-a.m21*b.V+a.m11*b.X)/a.f)};_.dc=function(a){this.P=this.N=window.Infinity;this.U=this.T=-window.Infinity;_.A(a||[],this.extend,this)};_.ec=function(a,b,c,d){var e=new _.dc;e.N=a;e.P=b;e.T=c;e.U=d;return e};_.K=function(a,b,c){if(a&&(void 0!==a.lat||void 0!==a.lng))try{fc(a),b=a.lng,a=a.lat,c=!1}catch(d){_.Lb(d)}a-=0;b-=0;c||(a=_.wb(a,-90,90),180!=b&&(b=_.xb(b,-180,180)));this.lat=function(){return a};this.lng=function(){return b}};
	_.gc=function(a){return _.rb(a.lat())};_.ic=function(a){return _.rb(a.lng())};jc=function(a,b){b=Math.pow(10,b);return Math.round(a*b)/b};_.kc=function(a){try{if(a instanceof _.K)return a;a=fc(a);return new _.K(a.lat,a.lng)}catch(b){throw _.Kb("not a LatLng or LatLngLiteral",b);}};lc=function(a,b){-180==a&&180!=b&&(a=180);-180==b&&180!=a&&(b=180);this.b=a;this.f=b};_.mc=function(a){return a.b>a.f};_.nc=function(a,b){var c=b-a;return 0<=c?c:b+180-(a-180)};
	_.oc=function(a){return a.isEmpty()?0:_.mc(a)?360-(a.b-a.f):a.f-a.b};qc=function(a,b){this.b=a;this.f=b};_.rc=function(a,b){a=a&&_.kc(a);b=b&&_.kc(b);if(a){b=b||a;var c=_.wb(a.lat(),-90,90),d=_.wb(b.lat(),-90,90);this.f=new qc(c,d);a=a.lng();b=b.lng();360<=b-a?this.b=new lc(-180,180):(a=_.xb(a,-180,180),b=_.xb(b,-180,180),this.b=new lc(a,b))}else this.f=new qc(1,-1),this.b=new lc(180,-180)};_.sc=function(a,b,c,d){return new _.rc(new _.K(a,b,!0),new _.K(c,d,!0))};
	_.uc=function(a){if(a instanceof _.rc)return a;try{return a=tc(a),_.sc(a.south,a.west,a.north,a.east)}catch(b){throw _.Kb("not a LatLngBounds or LatLngBoundsLiteral",b);}};_.xc=function(a){a=a||window.event;_.vc(a);_.wc(a)};_.vc=function(a){a.cancelBubble=!0;a.stopPropagation&&a.stopPropagation()};_.wc=function(a){a.preventDefault&&_.q(a.defaultPrevented)?a.preventDefault():a.returnValue=!1};_.yc=function(a){a.handled=!0;void 0===a.bubbles&&(a.returnValue="handled")};
	zc=function(a,b){a.__e3_||(a.__e3_={});a=a.__e3_;a[b]||(a[b]={});return a[b]};Ac=function(a,b){var c=a.__e3_||{};if(b)a=c[b]||{};else for(b in a={},c)_.ub(a,c[b]);return a};Bc=function(a,b){return function(c){return b.call(a,c,this)}};Fc=function(a,b,c){return function(d){var e=[b,a];_.Bb(e,arguments);_.L.trigger.apply(this,e);c&&_.yc.apply(null,arguments)}};Ic=function(a,b,c,d){this.f=a;this.j=b;this.b=c;this.l=d;this.id=++Hc;zc(a,b)[this.id]=this};
	Jc=function(a){return function(b){b||(b=window.event);if(b&&!b.target)try{b.target=b.srcElement}catch(d){}var c=a.b.apply(a.f,[b]);return b&&"click"==b.type&&(b=b.srcElement)&&"A"==b.tagName&&"javascript:void(0)"==b.href?!1:c}};_.Kc=function(a){return""+(_.La(a)?_.Oa(a):a)};_.N=_.l();Mc=function(a,b){var c=b+"_changed";if(a[c])a[c]();else a.changed(b);c=Lc(a,b);for(var d in c){var e=c[d];Mc(e.jd,e.Db)}_.L.trigger(a,b.toLowerCase()+"_changed")};
	_.Oc=function(a){return Nc[a]||(Nc[a]=a.substr(0,1).toUpperCase()+a.substr(1))};Pc=function(a){a.gm_accessors_||(a.gm_accessors_={});return a.gm_accessors_};Lc=function(a,b){a.gm_bindings_||(a.gm_bindings_={});a.gm_bindings_.hasOwnProperty(b)||(a.gm_bindings_[b]={});return a.gm_bindings_[b]};Qc=function(a){this.O=[];this.b=a&&a.Od||_.Ga;this.f=a&&a.Pd||_.Ga};
	_.Sc=function(a,b,c,d){function e(){_.A(f,function(a){b.call(c||null,function(b){if(a.once){if(a.once.mh)return;a.once.mh=!0;_.Va(g.O,a);g.O.length||g.b()}a.Yc.call(a.context,b)})})}var f=a.O.slice(0),g=a;d&&d.sync?e():Rc(e)};Tc=function(a,b){return function(c){return c.Yc==a&&c.context==(b||null)}};_.Vc=function(){this.O=new Qc({Od:(0,_.u)(this.Od,this),Pd:(0,_.u)(this.Pd,this)})};_.Wc=function(a,b){a.O.addListener(b,void 0);b.call(void 0,a.get())};_.Xc=function(a){return function(){return this.get(a)}};
	_.Yc=function(a,b){return b?function(c){try{this.set(a,b(c))}catch(d){_.Lb(_.Kb("set"+_.Oc(a),d))}}:function(b){this.set(a,b)}};_.Zc=function(a,b){_.tb(b,function(b,d){var c=_.Xc(b);a["get"+_.Oc(b)]=c;d&&(d=_.Yc(b,d),a["set"+_.Oc(b)]=d)})};_.ad=function(a){this.b=a||[];$c(this)};$c=function(a){a.set("length",a.b.length)};_.bd=function(){this.f={};this.j=0};_.cd=function(a,b){var c=a.f,d=_.Kc(b);c[d]||(c[d]=b,++a.j,_.L.trigger(a,"insert",b),a.b&&a.b(b))};_.dd=_.oa("b");
	_.ed=function(a,b,c){this.heading=a;this.pitch=_.wb(b,-90,90);this.zoom=Math.max(0,c)};_.fd=function(a){_.Vc.call(this);this.m=!!a};_.hd=function(a,b){return new gd(a,b)};gd=function(a,b){_.fd.call(this,b);this.b=a};_.kd=function(){this.__gm=new _.N;this.m=null};ld=_.l();_.md=function(a,b){a[b]||(a[b]=[]);return a[b]};
	_.od=function(a,b){if(null==a||null==b)return null==a==(null==b);if(a.constructor!=Array&&a.constructor!=Object)throw Error("Invalid object type passed into jsproto.areObjectsEqual()");if(a===b)return!0;if(a.constructor!=b.constructor)return!1;for(var c in a)if(!(c in b&&nd(a[c],b[c])))return!1;for(var d in b)if(!(d in a))return!1;return!0};
	nd=function(a,b){if(a===b||!(!0!==a&&1!==a||!0!==b&&1!==b)||!(!1!==a&&0!==a||!1!==b&&0!==b))return!0;if(a instanceof Object&&b instanceof Object){if(!_.od(a,b))return!1}else return!1;return!0};_.pd=function(a){_.Ea(a)?this.b=a:(this.b=a.C,this.f=a.F);this.Nb=1==(0,window.parseInt)(this.b,10)?0:-1};qd=_.l();sd=function(a,b,c){var d=new _.pd(b);d.forEach(function(b){var e=b.Nd,g=a[e+d.Nb];if(null!=g)if(b.Vd)for(var h=0;h<g.length;++h)rd(g[h],e,b,c);else rd(g,e,b,c)})};
	rd=function(a,b,c,d){if("m"==c.type){var e=d.length;sd(a,c.Xd,d);d.splice(e,0,[b,"m",d.length-e].join(""))}else"b"==c.type&&(a=a?"1":"0"),a=[b,c.type,(0,window.encodeURIComponent)(a)].join(""),d.push(a)};_.O=function(a){this.data=a||[]};_.td=function(a,b,c){a=a.data[b];return null!=a?a:c};_.ud=function(a,b,c){return _.td(a,b,c||0)};_.P=function(a,b,c){return _.td(a,b,c||0)};_.Q=function(a,b,c){return _.td(a,b,c||"")};_.R=function(a,b){var c=a.data[b];c||(c=a.data[b]=[]);return c};
	_.vd=function(a,b){return _.md(a.data,b)};_.wd=function(a,b,c){_.vd(a,b).push(c)};_.yd=function(a,b,c){return _.vd(a,b)[c]};_.zd=function(a,b){var c=[];_.vd(a,b).push(c);return c};_.Ad=function(a,b){return a.data[b]?a.data[b].length:0};Bd=_.l();_.Cd=_.oa("__gm");
	_.Ed=function(){for(var a=Array(36),b=0,c,d=0;36>d;d++)8==d||13==d||18==d||23==d?a[d]="-":14==d?a[d]="4":(2>=b&&(b=33554432+16777216*Math.random()|0),c=b&15,b>>=4,a[d]=Dd[19==d?c&3|8:c]);this.dg=a.join("")+(Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^_.Ra()).toString(36))};Fd=_.l();_.Gd=function(a){this.b=_.kc(a)};
	Hd=function(a){if(a instanceof Fd)return a;try{return new _.Gd(_.kc(a))}catch(b){}throw _.Kb("not a Geometry or LatLng or LatLngLiteral object");};_.Id=function(a,b){if(a)return function(){--a||b()};b();return _.Ga};
	_.Ld=function(a,b,c){var d=a.getElementsByTagName("head")[0];a=a.createElement("script");a.type="text/javascript";a.charset="UTF-8";a.src=b;c&&(a.onerror=c);if(null===Jd){a:{b=_.D.document;if((b=b.querySelector&&b.querySelector("script[nonce]"))&&(b=b.nonce||b.getAttribute("nonce"))&&Kd.test(b))break a;b=null}Jd=b||""}(b=Jd)&&a.setAttribute("nonce",b);d.appendChild(a);return a};
	Md=function(a){for(var b="",c=0,d=arguments.length;c<d;++c){var e=arguments[c];e.length&&"/"==e[0]?b=e:(b&&"/"!=b[b.length-1]&&(b+="/"),b+=e)}return b};Nd=function(a){this.j=window.document;this.b={};this.f=a};Od=function(a,b,c){a.b[b]||_.Ld(a.j,Md(a.f,b)+".js",c)};Qd=function(){this.m={};this.f={};this.A={};this.b={};this.j=new Pd};Sd=function(a,b){a.m[b]||(a.m[b]=!0,Rd(a.j,function(c){for(var d=c.b[b],e=d?d.length:0,f=0;f<e;++f){var g=d[f];a.b[g]||Sd(a,g)}Od(c.j,b,function(){a.l&&a.l(b)})}))};
	Ud=function(a,b){var c=Td;this.j=a;this.b=c;a={};for(var d in c)for(var e=c[d],f=0,g=e.length;f<g;++f){var h=e[f];a[h]||(a[h]=[]);a[h].push(d)}this.l=a;this.f=b};Pd=function(){this.b=[]};Rd=function(a,b){a.f?b(a.f):a.b.push(b)};_.S=function(a,b,c){var d=Qd.b();a=""+a;d.b[a]?b(d.b[a]):((d.f[a]=d.f[a]||[]).push(b),c||Sd(d,a))};_.Vd=function(a,b){Qd.b().b[""+a]=b};_.Wd=function(a,b,c){var d=[],e=_.Id(a.length,function(){b.apply(null,d)});_.A(a,function(a,b){_.S(a,function(a){d[b]=a;e()},c)})};
	_.Xd=function(a){a=a||{};this.j=a.id;this.b=null;try{this.b=a.geometry?Hd(a.geometry):null}catch(b){_.Lb(b)}this.f=a.properties||{}};Yd=function(){this.b={};this.j={};this.f={}};Zd=function(){this.b={}};be=function(a){this.b=new Zd;var b=this;_.L.addListenerOnce(a,"addfeature",function(){_.S("data",function(c){c.b(b,a,b.b)})})};_.de=function(a){this.b=[];try{this.b=ce(a)}catch(b){_.Lb(b)}};_.fe=function(a){this.b=(0,_.ee)(a)};_.ge=function(a){this.b=(0,_.ee)(a)};_.ie=function(a){this.b=he(a)};
	_.je=function(a){this.b=(0,_.ee)(a)};_.le=function(a){this.b=ke(a)};_.ne=function(a){this.b=me(a)};
	_.oe=function(a,b,c){function d(a){if(!a)throw _.Kb("not a Feature");if("Feature"!=a.type)throw _.Kb('type != "Feature"');var b=a.geometry;try{b=null==b?null:e(b)}catch(I){throw _.Kb('in property "geometry"',I);}var d=a.properties||{};if(!_.Cb(d))throw _.Kb("properties is not an Object");var f=c.idPropertyName;a=f?d[f]:a.id;if(null!=a&&!_.F(a)&&!_.Db(a))throw _.Kb((f||"id")+" is not a string or number");return{id:a,geometry:b,properties:d}}function e(a){if(null==a)throw _.Kb("is null");var b=(a.type+
		"").toLowerCase(),c=a.coordinates;try{switch(b){case "point":return new _.Gd(h(c));case "multipoint":return new _.je(n(c));case "linestring":return g(c);case "multilinestring":return new _.ie(p(c));case "polygon":return f(c);case "multipolygon":return new _.ne(t(c))}}catch(C){throw _.Kb('in property "coordinates"',C);}if("geometrycollection"==b)try{return new _.de(v(a.geometries))}catch(C){throw _.Kb('in property "geometries"',C);}throw _.Kb("invalid type");}function f(a){return new _.le(r(a))}function g(a){return new _.fe(n(a))}
		function h(a){a=k(a);return _.kc({lat:a[1],lng:a[0]})}if(!b)return[];c=c||{};var k=_.Qb(_.Vb),n=_.Qb(h),p=_.Qb(g),r=_.Qb(function(a){a=n(a);if(!a.length)throw _.Kb("contains no elements");if(!a[0].aa(a[a.length-1]))throw _.Kb("first and last positions are not equal");return new _.ge(a.slice(0,-1))}),t=_.Qb(f),v=_.Qb(e),x=_.Qb(d);if("FeatureCollection"==b.type){b=b.features;try{return _.zb(x(b),function(b){return a.add(b)})}catch(w){throw _.Kb('in property "features"',w);}}if("Feature"==b.type)return[a.add(d(b))];
		throw _.Kb("not a Feature or FeatureCollection");};qe=function(a){var b=this;a=a||{};this.setValues(a);this.b=new Yd;_.L.forward(this.b,"addfeature",this);_.L.forward(this.b,"removefeature",this);_.L.forward(this.b,"setgeometry",this);_.L.forward(this.b,"setproperty",this);_.L.forward(this.b,"removeproperty",this);this.f=new be(this.b);this.f.bindTo("map",this);this.f.bindTo("style",this);_.A(_.pe,function(a){_.L.forward(b.f,a,b)});this.j=!1};re=function(a){a.j||(a.j=!0,_.S("drawing_impl",function(b){b.Fl(a)}))};
	se=function(a){if(!a)return null;if(_.Ea(a)){var b=window.document.createElement("div");b.style.overflow="auto";b.innerHTML=a}else a.nodeType==window.Node.TEXT_NODE?(b=window.document.createElement("div"),b.appendChild(a)):b=a;return b};ue=function(a){var b=te,c=Qd.b();c.l=void 0;c=c.j;a=c.f=new Ud(new Nd(a),b);b=0;for(var d=c.b.length;b<d;++b)c.b[b](a);c.b.length=0};ye=function(a){a=a||{};a.clickable=_.Ab(a.clickable,!0);a.visible=_.Ab(a.visible,!0);this.setValues(a);_.S("marker",_.Ga)};
	_.ze=function(a){this.__gm={set:null,xe:null,jc:{map:null,We:null}};ye.call(this,a)};Ae=function(a,b){this.b=a;this.f=b;a.addListener("map_changed",(0,_.u)(this.zm,this));this.bindTo("map",a);this.bindTo("disableAutoPan",a);this.bindTo("maxWidth",a);this.bindTo("position",a);this.bindTo("zIndex",a);this.bindTo("internalAnchor",a,"anchor");this.bindTo("internalContent",a,"content");this.bindTo("internalPixelOffset",a,"pixelOffset")};Be=function(a,b,c,d){c?a.bindTo(b,c,d):(a.unbind(b),a.set(b,void 0))};
	_.Ce=function(a){function b(){e||(e=!0,_.S("infowindow",function(a){a.uk(d)}))}window.setTimeout(function(){_.S("infowindow",_.Ga)},100);a=a||{};var c=!!a.b;delete a.b;var d=new Ae(this,c),e=!1;_.L.addListenerOnce(this,"anchor_changed",b);_.L.addListenerOnce(this,"map_changed",b);this.setValues(a)};_.Ee=function(a){_.De&&a&&_.De.push(a)};Ge=function(a){this.setValues(a)};He=_.l();Ie=_.l();Je=_.l();_.Ke=function(){_.S("geocoder",_.Ga)};
	_.Le=function(a,b,c){this.set("url",a);this.set("bounds",_.G(_.uc)(b));this.setValues(c)};Me=function(a,b){_.Db(a)?(this.set("url",a),this.setValues(b)):this.setValues(a)};_.Ne=function(){var a=this;_.S("layers",function(b){b.b(a)})};Oe=function(a){this.setValues(a);var b=this;_.S("layers",function(a){a.f(b)})};Pe=function(){var a=this;_.S("layers",function(b){b.j(a)})};_.Re=function(){this.j="";this.l=_.Qe};_.Se=function(a){var b=new _.Re;b.j=a;return b};
	_.Ue=function(){this.j="";this.m=_.Te;this.l=null};_.Ve=function(a,b){var c=new _.Ue;c.j=a;c.l=b;return c};_.We=function(a,b){b.parentNode&&b.parentNode.insertBefore(a,b.nextSibling)};_.Xe=function(a){a&&a.parentNode&&a.parentNode.removeChild(a)};af=_.l();bf=function(a,b,c,d,e){this.b=!!b;this.node=null;this.f=0;this.j=!1;this.l=!c;a&&this.setPosition(a,d);this.depth=void 0!=e?e:this.f||0;this.b&&(this.depth*=-1)};cf=function(a,b,c,d){bf.call(this,a,b,c,null,d)};_.df=function(a){this.data=a||[]};
	ef=function(a){this.data=a||[]};_.ff=function(a){this.data=a||[]};gf=function(a){this.data=a||[]};hf=function(a){this.data=a||[]};_.jf=function(a){return _.Q(a,0)};_.kf=function(a){return _.Q(a,1)};_.mf=function(a){return new ef(a.data[2])};_.nf=function(a,b,c){this.size=a;this.da=b;this.heading=c;this.b=Math.cos(this.da/180*Math.PI)};_.of=function(){this.b=new _.H(128,128);this.j=256/360;this.l=256/(2*Math.PI);this.f=!0};
	_.pf=function(a,b,c){if(a=a.fromLatLngToPoint(b))c=Math.pow(2,c),a.x*=c,a.y*=c;return a};_.qf=function(a,b){var c=a.lat()+_.sb(b);90<c&&(c=90);var d=a.lat()-_.sb(b);-90>d&&(d=-90);b=Math.sin(b);var e=Math.cos(_.rb(a.lat()));if(90==c||-90==d||1E-6>e)return new _.rc(new _.K(d,-180),new _.K(c,180));b=_.sb(Math.asin(b/e));return new _.rc(new _.K(d,a.lng()-b),new _.K(c,a.lng()+b))};
	uf=function(a,b){var c=this;_.kd.call(this);_.Ee(a);this.__gm=new _.N;this.b=_.hd(!1,!0);this.b.addListener(function(a){c.get("visible")!=a&&c.set("visible",a)});this.j=this.l=null;b&&b.client&&(this.j=_.rf[b.client]||null);var d=this.controls=[];_.tb(_.sf,function(a,b){d[b]=new _.ad});this.A=!1;this.f=a;this.__gm.mb=b&&b.mb||new _.bd;this.set("standAlone",!0);this.setPov(new _.ed(0,0,1));b&&b.Oe&&(a=b.Oe,_.F(a.zoom)||(a.zoom=_.Fa(b.zoom)?b.zoom:1));this.setValues(b);void 0==this.getVisible()&&this.setVisible(!0);
		_.L.addListenerOnce(this,"pano_changed",_.Gb(function(){_.S("marker",(0,_.u)(function(a){a.b(this.__gm.mb,this)},this))}));_.tf[35]&&b&&b.dE&&_.S("util",function(a){a.b.j(new _.df(b.dE))})};vf=function(){this.l=[];this.j=this.b=this.f=null};
	wf=function(a,b,c,d,e){this.Z=b;this.b=e;this.f=_.hd(new _.dd([]));this.G=new _.bd;new _.ad;this.l=new _.bd;this.A=new _.bd;this.m=new _.bd;var f=this.mb=new _.bd;f.b=function(){delete f.b;_.S("marker",_.Gb(function(b){b.b(f,a)}))};this.B=new uf(c,{visible:!1,enableCloseButton:!0,mb:f});this.B.bindTo("reportErrorControl",a);this.B.A=!0;this.j=new vf;this.overlayLayer=null};_.xf=function(){this.O=new Qc};_.yf=function(a){this.Pk=a||0;_.L.bind(this,"forceredraw",this,this.ca)};
	_.zf=function(a,b){a=a.style;a.width=b.width+b.f;a.height=b.height+b.b};_.Af=function(a){return new _.J(a.offsetWidth,a.offsetHeight)};_.Bf=function(){var a=[],b=_.D.google&&_.D.google.maps&&_.D.google.maps.fisfetsz;b&&Array.isArray(b)&&_.tf[15]&&b.forEach(function(b){_.F(b)&&a.push(b)});0==a.length&&(_.tf[35]?a.push(4111425):_.tf[43]||a.push(1301875));return a};Cf=function(a){this.data=a||[]};Df=function(a){this.data=a||[]};Ef=function(a){this.data=a||[]};Ff=function(a){this.data=a||[]};
	Gf=function(a){this.data=a||[]};Of=function(a){if(!Hf){var b=Hf={C:"meummm"};if(!If){var c=If={C:"ebb5ss8MmbbbEIb100b"};Jf||(Jf={C:"eedmbddemd",F:["uuuu","uuuu"]});c.F=[Jf,"Eb"]}c=If;Kf||(Kf={C:"10m12m",F:["bb","b"]});b.F=["ii","uue",c,Kf]}return _.Lf.b(a.data,Hf)};Pf=function(a,b,c){_.yf.call(this);this.D=b;this.B=new _.of;this.G=c+"/maps/api/js/StaticMapService.GetMapImage";this.f=this.b=null;this.j=new gd(null,void 0);this.l=null;this.m=!1;this.set("div",a);this.set("loading",!0)};
	Rf=function(a){var b=a.get("tilt")||_.E(a.get("styles"));a=a.get("mapTypeId");return b?null:Qf[a]};_.Sf=function(a){a.parentNode&&a.parentNode.removeChild(a)};Tf=function(a,b){var c=a.f;c.onload=null;c.onerror=null;var d=a.get("size");d&&(b&&(c.parentNode||a.b.appendChild(c),a.j||_.zf(c,d)),a.set("loading",!1))};
	Uf=function(a,b,c,d,e){var f=new Gf,g=new Ef(_.R(f,0));g.data[0]=b.N;g.data[1]=b.P;f.data[1]=e;f.setZoom(c);c=new Ff(_.R(f,3));c.data[0]=b.T-b.N;c.data[1]=b.U-b.P;var h=new Df(_.R(f,4));h.data[0]=d;h.data[4]=_.jf(_.mf(_.T));h.data[5]=_.kf(_.mf(_.T)).toLowerCase();h.data[9]=!0;_.Bf().forEach(function(a){0>_.vd(h,13).indexOf(a)&&_.wd(h,13,a)});h.data[11]=!0;_.tf[13]&&(b=new Cf(_.zd(h,7)),b.data[0]=33,b.data[1]=3,b.data[7]=1);f=a.G+(0,window.unescape)("%3F")+Of(f);return a.D(f)};
	Vf=function(a,b){var c=a.f;b!=c.src?(a.j||_.Sf(c),c.onload=function(){Tf(a,!0)},c.onerror=function(){Tf(a,!1)},c.src=b):!c.parentNode&&b&&a.b.appendChild(c)};_.Xf=function(a){for(var b;b=a.firstChild;)_.Wf(b),a.removeChild(b)};_.Wf=function(a){a=new cf(a);try{for(;;){var b=a.next();b&&_.L.clearInstanceListeners(b)}}catch(c){if(c!==Yf)throw c;}};
	cg=function(a,b){_.Ra();var c=new _.xf,d=b||{};d.noClear||_.Xf(a);var e="undefined"==typeof window.document?null:window.document.createElement("div");e&&a.appendChild&&(a.appendChild(e),e.style.width=e.style.height="100%");if(![].forEach)throw _.S("controls",function(b){b.Fg(a)}),Error("The Google Maps JavaScript API does not support this browser.");_.S("util",function(c){_.tf[35]&&b&&b.dE&&c.b.j(new _.df(b.dE));_.Wc(c.b.b,function(b){2==b.getStatus()&&_.S("controls",function(c){c.Ei(a,_.Q(b,1)||
		"http://g.co/dev/maps-no-account")})})});var f,g=new window.Promise(function(a){f=a});_.Cd.call(this,new wf(this,a,e,c,g));_.q(d.mapTypeId)||(d.mapTypeId="roadmap");this.setValues(d);this.b=_.tf[15]&&d.noControlsOrLogging;this.mapTypes=new Bd;this.features=new _.N;_.Ee(e);this.notify("streetView");g=_.Af(e);var h=null;Zf(d.useStaticMap,g)&&(h=new Pf(e,_.bg,_.Q(_.mf(_.T),9)),h.set("size",g),h.bindTo("center",this),h.bindTo("zoom",this),h.bindTo("mapTypeId",this),h.bindTo("styles",this));this.overlayMapTypes=
		new _.ad;var k=this.controls=[];_.tb(_.sf,function(a,b){k[b]=new _.ad});var n=this,p=!0;_.S("map",function(a){n.getDiv()&&e&&a.f(n,d,e,h,p,c,f)});p=!1;this.data=new qe({map:this})};Zf=function(a,b){if(!_.T||2==_.ud(_.T,37))return!1;if(_.q(a))return!!a;a=b.width;b=b.height;return 384E3>=a*b&&800>=a&&800>=b};dg=function(){_.S("maxzoom",_.Ga)};eg=function(a,b){!a||_.Db(a)||_.F(a)?(this.set("tableId",a),this.setValues(b)):this.setValues(a)};_.fg=_.l();
	gg=function(a){a=a||{};a.visible=_.Ab(a.visible,!0);return a};_.hg=function(a){return a&&a.radius||6378137};jg=function(a){return a instanceof _.ad?ig(a):new _.ad((0,_.ee)(a))};lg=function(a){if(_.Ia(a)||a instanceof _.ad)if(0==_.E(a))var b=!0;else b=a instanceof _.ad?a.getAt(0):a[0],b=_.Ia(b)||b instanceof _.ad;else b=!1;return b?a instanceof _.ad?kg(ig)(a):new _.ad(_.Qb(jg)(a)):new _.ad([jg(a)])};
	kg=function(a){return function(b){if(!(b instanceof _.ad))throw _.Kb("not an MVCArray");b.forEach(function(b,d){try{a(b)}catch(e){throw _.Kb("at index "+d,e);}});return b}};_.mg=function(a){this.setValues(gg(a));_.S("poly",_.Ga)};ng=function(a){this.set("latLngs",new _.ad([new _.ad]));this.setValues(gg(a));_.S("poly",_.Ga)};_.og=function(a){ng.call(this,a)};_.pg=function(a){ng.call(this,a)};_.qg=function(a){this.setValues(gg(a));_.S("poly",_.Ga)};rg=function(){this.b=null};
	_.sg=function(){this.b=null};_.ug=function(a){var b=this;this.tileSize=a.tileSize||new _.J(256,256);this.name=a.name;this.alt=a.alt;this.minZoom=a.minZoom;this.maxZoom=a.maxZoom;this.j=(0,_.u)(a.getTileUrl,a);this.b=new _.bd;this.f=null;this.set("opacity",a.opacity);_.S("map",function(a){var c=b.f=a.b,e=b.tileSize||new _.J(256,256);b.b.forEach(function(a){var d=a.__gmimt,f=d.ga,k=d.zoom,n=b.j(f,k);(d.Za=c({L:f.x,M:f.y,$:k},e,a,n,function(){return _.L.trigger(a,"load")})).setOpacity(tg(b))})})};
	tg=function(a){a=a.get("opacity");return"number"==typeof a?a:1};_.vg=function(){_.vg.vf(this,"constructor")};_.wg=function(a,b){_.wg.vf(this,"constructor");this.set("styles",a);a=b||{};this.b=a.baseMapTypeId||"roadmap";this.minZoom=a.minZoom;this.maxZoom=a.maxZoom||20;this.name=a.name;this.alt=a.alt;this.projection=null;this.tileSize=new _.J(256,256)};_.xg=function(a,b){_.Rb(Nb,"container is not a Node")(a);this.setValues(b);_.S("controls",(0,_.u)(function(b){b.$l(this,a)},this))};yg=_.oa("b");
	zg=function(a,b,c){for(var d=Array(b.length),e=0,f=b.length;e<f;++e)d[e]=b.charCodeAt(e);d.unshift(c);a=a.b;c=b=0;for(e=d.length;c<e;++c)b*=1729,b+=d[c],b%=a;return b};
	Cg=function(){var a=_.P(new gf(_.T.data[4]),0),b=_.Q(_.T,16),c=_.Q(_.T,6),d=_.Q(_.T,13),e=new yg(131071),f=(0,window.unescape)("%26%74%6F%6B%65%6E%3D"),g=(0,window.unescape)("%26%6B%65%79%3D"),h=(0,window.unescape)("%26%63%6C%69%65%6E%74%3D"),k=(0,window.unescape)("%26%63%68%61%6E%6E%65%6C%3D"),n="";b&&(n+=g+(0,window.encodeURIComponent)(b));c&&(n+=h+(0,window.encodeURIComponent)(c));d&&(n+=k+(0,window.encodeURIComponent)(d));return function(b){b=b.replace(Ag,"%27")+n;var c=b+f;Bg||(Bg=/(?:https?:\/\/[^/]+)?(.*)/);
		b=Bg.exec(b);return c+zg(e,b&&b[1],a)}};Dg=function(){var a=new yg(2147483647);return function(b){return zg(a,b,0)}};Eg=function(a){for(var b=a.split("."),c=window,d=window,e=0;e<b.length;e++)if(d=c,c=c[b[e]],!c)throw _.Kb(a+" is not a function");return function(){c.apply(d)}};Fg=function(){for(var a in Object.prototype)window.console&&window.console.error("This site adds property <"+a+"> to Object.prototype. Extending Object.prototype breaks JavaScript for..in loops, which are used heavily in Google Maps JavaScript API v3.")};
	Gg=function(a){(a="version"in a)&&window.console&&window.console.error("You have included the Google Maps JavaScript API multiple times on this page. This may cause unexpected errors.");return a};
	_.Jg=function(a){if("string"===typeof a){if("IP_BIAS"!==a)throw _.Kb("LocationBias of type string was invalid: "+a);return a}if(!a||!_.Cb(a))throw _.Kb("Invalid LocationBias: "+a);if(!(a instanceof _.K||a instanceof _.rc||a instanceof _.mg))try{a=_.uc(a)}catch(b){try{a=_.kc(a)}catch(c){try{a=new _.mg(Ig(a))}catch(d){throw _.Kb("Invalid LocationBias: "+JSON.stringify(a));}}}if(a instanceof _.mg){if(!a||!_.Cb(a))throw _.Kb("Passed Circle is not an Object.");a instanceof _.mg||(a=new _.mg(a));if(!a.getCenter())throw _.Kb("Circle is missing center.");
		if(void 0==a.getRadius())throw _.Kb("Circle is missing radius.");}return a};_.ra=[];wa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};_.ua="undefined"!=typeof window&&window===this?this:"undefined"!=typeof window.global&&null!=window.global?window.global:this;va=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
	Ba("Promise",function(a){function b(a){this.f=0;this.j=void 0;this.b=[];var b=this.l();try{a(b.resolve,b.reject)}catch(k){b.reject(k)}}function c(){this.b=null}function d(a){return a instanceof b?a:new b(function(b){b(a)})}if(a)return a;c.prototype.f=function(a){null==this.b&&(this.b=[],this.l());this.b.push(a)};c.prototype.l=function(){var a=this;this.j(function(){a.A()})};var e=_.ua.setTimeout;c.prototype.j=function(a){e(a,0)};c.prototype.A=function(){for(;this.b&&this.b.length;){var a=this.b;this.b=
		[];for(var b=0;b<a.length;++b){var c=a[b];a[b]=null;try{c()}catch(n){this.m(n)}}}this.b=null};c.prototype.m=function(a){this.j(function(){throw a;})};b.prototype.l=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}var b=this,c=!1;return{resolve:a(this.H),reject:a(this.m)}};b.prototype.H=function(a){if(a===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.ca(a);else{a:switch(typeof a){case "object":var c=null!=a;break a;case "function":c=
		!0;break a;default:c=!1}c?this.G(a):this.A(a)}};b.prototype.G=function(a){var b=void 0;try{b=a.then}catch(k){this.m(k);return}"function"==typeof b?this.ia(b,a):this.A(a)};b.prototype.m=function(a){this.B(2,a)};b.prototype.A=function(a){this.B(1,a)};b.prototype.B=function(a,b){if(0!=this.f)throw Error("Cannot settle("+a+", "+b+"): Promise already settled in state"+this.f);this.f=a;this.j=b;this.D()};b.prototype.D=function(){if(null!=this.b){for(var a=0;a<this.b.length;++a)f.f(this.b[a]);this.b=null}};
		var f=new c;b.prototype.ca=function(a){var b=this.l();a.je(b.resolve,b.reject)};b.prototype.ia=function(a,b){var c=this.l();try{a.call(b,c.resolve,c.reject)}catch(n){c.reject(n)}};b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(w){f(w)}}:b}var e,f,g=new b(function(a,b){e=a;f=b});this.je(d(a,e),d(c,f));return g};b.prototype["catch"]=function(a){return this.then(void 0,a)};b.prototype.je=function(a,b){function c(){switch(d.f){case 1:a(d.j);break;
			case 2:b(d.j);break;default:throw Error("Unexpected state: "+d.f);}}var d=this;null==this.b?f.f(c):this.b.push(c)};b.resolve=d;b.reject=function(a){return new b(function(b,c){c(a)})};b.race=function(a){return new b(function(b,c){for(var e=_.Aa(a),f=e.next();!f.done;f=e.next())d(f.value).je(b,c)})};b.all=function(a){var c=_.Aa(a),e=c.next();return e.done?d([]):new b(function(a,b){function f(b){return function(c){g[b]=c;h--;0==h&&a(g)}}var g=[],h=0;do g.push(void 0),h++,d(e.value).je(f(g.length-1),
			b),e=c.next();while(!e.done)})};return b});var Kg;if("function"==typeof Object.setPrototypeOf)Kg=Object.setPrototypeOf;else{var Lg;a:{var Mg={qk:!0},Ng={};try{Ng.__proto__=Mg;Lg=Ng.qk;break a}catch(a){}Lg=!1}Kg=Lg?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}_.Og=Kg;_.Pg="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};
	Ba("Array.prototype.findIndex",function(a){return a?a:function(a,c){return Ca(this,a,c).we}});Ba("Array.prototype.find",function(a){return a?a:function(a,c){return Ca(this,a,c).Si}});Ba("Object.is",function(a){return a?a:function(a,c){return a===c?0!==a||1/a===1/c:a!==a&&c!==c}});Ba("Array.prototype.includes",function(a){return a?a:function(a,c){var b=this;b instanceof String&&(b=String(b));var e=b.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=b[c];if(f===a||Object.is(f,a))return!0}return!1}});
	Ba("String.prototype.includes",function(a){return a?a:function(a,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==(this+"").indexOf(a,c||0)}});
	Ba("Array.from",function(a){return a?a:function(a,c,d){(0,_.ya)();c=null!=c?c:_.na();var b=[],f=a[window.Symbol.iterator];if("function"==typeof f){a=f.call(a);for(var g=0;!(f=a.next()).done;)b.push(c.call(d,f.value,g++))}else for(f=a.length,g=0;g<f;g++)b.push(c.call(d,a[g],g));return b}});Ba("Math.sign",function(a){return a?a:function(a){a=Number(a);return 0===a||(0,window.isNaN)(a)?a:0<a?1:-1}});
	Ba("WeakMap",function(a){function b(a){this.b=(f+=Math.random()+1).toString();if(a){ta();(0,_.ya)();a=_.Aa(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}function c(a){Da(a,e)||wa(a,e,{value:{}})}function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(n){return!1}}())return a;
		var e="$jscomp_hidden_"+Math.random();d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!Da(a,e))throw Error("WeakMap key fail: "+a);a[e][this.b]=b;return this};b.prototype.get=function(a){return Da(a,e)?a[e][this.b]:void 0};b.prototype.has=function(a){return Da(a,e)&&Da(a[e],this.b)};b.prototype["delete"]=function(a){return Da(a,e)&&Da(a[e],this.b)?delete a[e][this.b]:!1};return b});
	Ba("Map",function(a){function b(){var a={};return a.Rb=a.next=a.head=a}function c(a,b){var c=a.b;return za(function(){if(c){for(;c.head!=a.b;)c=c.Rb;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++g,f.set(b,c)):c="p_"+b;var d=a.f[c];if(d&&Da(a.f,c))for(a=0;a<d.length;a++){var e=d[a];if(b!==b&&e.key!==e.key||b===e.key)return{id:c,list:d,index:a,Xa:e}}return{id:c,
		list:d,index:-1,Xa:void 0}}function e(a){this.f={};this.b=b();this.size=0;if(a){a=_.Aa(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(_.Aa([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=
	e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(r){return!1}}())return a;ta();(0,_.ya)();var f=new window.WeakMap;e.prototype.set=function(a,b){a=0===a?0:a;var c=d(this,a);c.list||(c.list=this.f[c.id]=[]);c.Xa?c.Xa.value=b:(c.Xa={next:this.b,Rb:this.b.Rb,head:this.b,key:a,value:b},c.list.push(c.Xa),this.b.Rb.next=c.Xa,this.b.Rb=c.Xa,this.size++);return this};e.prototype["delete"]=function(a){a=d(this,a);return a.Xa&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.f[a.id],a.Xa.Rb.next=
		a.Xa.next,a.Xa.next.Rb=a.Xa.Rb,a.Xa.head=null,this.size--,!0):!1};e.prototype.clear=function(){this.f={};this.b=this.b.Rb=b();this.size=0};e.prototype.has=function(a){return!!d(this,a).Xa};e.prototype.get=function(a){return(a=d(this,a).Xa)&&a.value};e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};e.prototype.keys=function(){return c(this,function(a){return a.key})};e.prototype.values=function(){return c(this,function(a){return a.value})};e.prototype.forEach=function(a,
																																																																																																																																 b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};e.prototype[window.Symbol.iterator]=e.prototype.entries;var g=0;return e});Ba("Array.prototype.fill",function(a){return a?a:function(a,c,d){var b=this.length||0;0>c&&(c=Math.max(0,b+c));if(null==d||d>b)d=b;d=Number(d);0>d&&(d=Math.max(0,b+d));for(c=Number(c||0);c<d;c++)this[c]=a;return this}});
	Ba("Set",function(a){function b(a){this.b=new window.Map;if(a){a=_.Aa(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.b.size}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(_.Aa([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=b||f.value[1]!=b)return!1;f=e.next();return f.done||f.value[0]==b||4!=
	f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;ta();(0,_.ya)();b.prototype.add=function(a){a=0===a?0:a;this.b.set(a,a);this.size=this.b.size;return this};b.prototype["delete"]=function(a){a=this.b["delete"](a);this.size=this.b.size;return a};b.prototype.clear=function(){this.b.clear();this.size=0};b.prototype.has=function(a){return this.b.has(a)};b.prototype.entries=function(){return this.b.entries()};b.prototype.values=function(){return this.b.values()};b.prototype.keys=
		b.prototype.values;b.prototype[window.Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.b.forEach(function(d){return a.call(b,d,d,c)})};return b});_.D=this;Kd=/^[\w+/_-]+[=]{0,2}$/;Jd=null;Ma="closure_uid_"+(1E9*Math.random()>>>0);Na=0;a:{var Qg=_.D.navigator;if(Qg){var Rg=Qg.userAgent;if(Rg){_.Xa=Rg;break a}}_.Xa=""};_.fb[" "]=_.Ga;var eh;_.Sg=_.Za("Opera");_.Tg=_.$a();_.Ug=_.Za("Edge");_.Wg=_.Za("Gecko")&&!(_.Ya()&&!_.Za("Edge"))&&!(_.Za("Trident")||_.Za("MSIE"))&&!_.Za("Edge");_.Xg=_.Ya()&&!_.Za("Edge");_.Yg=_.Za("Macintosh");_.Zg=_.Za("Windows");_.$g=_.Za("Linux")||_.Za("CrOS");_.ah=_.Za("Android");_.bh=_.eb();_.ch=_.Za("iPad");_.dh=_.Za("iPod");
	a:{var fh="",gh=function(){var a=_.Xa;if(_.Wg)return/rv:([^\);]+)(\)|;)/.exec(a);if(_.Ug)return/Edge\/([\d\.]+)/.exec(a);if(_.Tg)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(_.Xg)return/WebKit\/(\S+)/.exec(a);if(_.Sg)return/(?:Version)[ \/]?(\S+)/.exec(a)}();gh&&(fh=gh?gh[1]:"");if(_.Tg){var hh=gb();if(null!=hh&&hh>(0,window.parseFloat)(fh)){eh=String(hh);break a}}eh=fh}_.ih=eh;var kh=_.D.document;_.jh=kh&&_.Tg?gb()||("CSS1Compat"==kh.compatMode?(0,window.parseInt)(_.ih,10):5):void 0;_.lh=_.Za("Firefox");_.mh=_.eb()||_.Za("iPod");_.nh=_.Za("iPad");_.oh=_.db();_.ph=ab();_.qh=_.cb()&&!(_.eb()||_.Za("iPad")||_.Za("iPod"));var rh;rh=_.Wg||_.Xg&&!_.qh||_.Sg;_.sh=rh||"function"==typeof _.D.btoa;_.th=rh||!_.qh&&!_.Tg&&"function"==typeof _.D.atob;hb.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.j();return a};var uh=function(a){return function(){return a}}(null);var mb,lb=_.ib;var vh=new hb(function(){return new qb},function(a){a.reset()});pb.prototype.add=function(a,b){var c=vh.get();c.set(a,b);this.f?this.f.next=c:this.b=c;this.f=c};pb.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};qb.prototype.set=function(a,b){this.Yc=a;this.b=b;this.next=null};qb.prototype.reset=function(){this.next=this.b=this.Yc=null};_.kb.m=function(){if(_.D.Promise&&_.D.Promise.resolve){var a=_.D.Promise.resolve(void 0);_.kb.b=function(){a.then(_.kb.f)}}else _.kb.b=function(){ob()}};_.kb.A=function(a){_.kb.b=function(){ob();a&&a(_.kb.f)}};_.kb.j=!1;_.kb.l=new pb;_.kb.f=function(){for(var a;a=_.kb.l.remove();){try{a.Yc.call(a.b)}catch(c){jb(c)}var b=vh;b.l(a);100>b.f&&(b.f++,a.next=b.b,b.b=a)}_.kb.j=!1};_.wh={ROADMAP:"roadmap",SATELLITE:"satellite",HYBRID:"hybrid",TERRAIN:"terrain"};_.sf={TOP_LEFT:1,TOP_CENTER:2,TOP:2,TOP_RIGHT:3,LEFT_CENTER:4,LEFT_TOP:5,LEFT:5,LEFT_BOTTOM:6,RIGHT_TOP:7,RIGHT:7,RIGHT_CENTER:8,RIGHT_BOTTOM:9,BOTTOM_LEFT:10,BOTTOM_CENTER:11,BOTTOM:11,BOTTOM_RIGHT:12,CENTER:13};_.y(Jb,Error);var xh,zh;_.Vb=_.Rb(_.F,"not a number");xh=_.Tb(_.Vb,function(a){if((0,window.isNaN)(a))throw _.Kb("NaN is not an accepted value");return a});_.yh=_.Rb(_.Db,"not a string");zh=_.Rb(_.Eb,"not a boolean");_.Ah=_.G(_.Vb);_.Bh=_.G(_.yh);_.Ch=_.G(zh);_.Dh=new _.H(0,0);_.H.prototype.toString=function(){return"("+this.x+", "+this.y+")"};_.H.prototype.aa=function(a){return a?a.x==this.x&&a.y==this.y:!1};_.H.prototype.equals=_.H.prototype.aa;_.H.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y)};_.H.prototype.De=_.sa(0);_.Eh=new _.J(0,0);_.J.prototype.toString=function(){return"("+this.width+", "+this.height+")"};_.J.prototype.aa=function(a){return a?a.width==this.width&&a.height==this.height:!1};_.J.prototype.equals=_.J.prototype.aa;_.Yb.prototype.aa=function(a){return a?this.I==a.I&&this.J==a.J:!1};_.Fh=new _.$b({Ic:new _.Zb(256),Jc:void 0});_.ac.prototype.aa=function(a){return a?this.m11==a.m11&&this.m12==a.m12&&this.m21==a.m21&&this.m22==a.m22:!1};_.dc.prototype.isEmpty=function(){return!(this.N<this.T&&this.P<this.U)};_.dc.prototype.extend=function(a){a&&(this.N=Math.min(this.N,a.x),this.T=Math.max(this.T,a.x),this.P=Math.min(this.P,a.y),this.U=Math.max(this.U,a.y))};_.dc.prototype.getCenter=function(){return new _.H((this.N+this.T)/2,(this.P+this.U)/2)};_.dc.prototype.aa=function(a){return a?this.N==a.N&&this.P==a.P&&this.T==a.T&&this.U==a.U:!1};_.Gh=_.ec(-window.Infinity,-window.Infinity,window.Infinity,window.Infinity);_.ec(0,0,0,0);var fc=_.Mb({lat:_.Vb,lng:_.Vb},!0);_.K.prototype.toString=function(){return"("+this.lat()+", "+this.lng()+")"};_.K.prototype.toJSON=function(){return{lat:this.lat(),lng:this.lng()}};_.K.prototype.aa=function(a){return a?_.yb(this.lat(),a.lat())&&_.yb(this.lng(),a.lng()):!1};_.K.prototype.equals=_.K.prototype.aa;_.K.prototype.toUrlValue=function(a){a=_.q(a)?a:6;return jc(this.lat(),a)+","+jc(this.lng(),a)};_.ee=_.Qb(_.kc);_.m=lc.prototype;_.m.isEmpty=function(){return 360==this.b-this.f};_.m.intersects=function(a){var b=this.b,c=this.f;return this.isEmpty()||a.isEmpty()?!1:_.mc(this)?_.mc(a)||a.b<=this.f||a.f>=b:_.mc(a)?a.b<=c||a.f>=b:a.b<=c&&a.f>=b};_.m.contains=function(a){-180==a&&(a=180);var b=this.b,c=this.f;return _.mc(this)?(a>=b||a<=c)&&!this.isEmpty():a>=b&&a<=c};_.m.extend=function(a){this.contains(a)||(this.isEmpty()?this.b=this.f=a:_.nc(a,this.b)<_.nc(this.f,a)?this.b=a:this.f=a)};
	_.m.aa=function(a){return 1E-9>=Math.abs(a.b-this.b)%360+Math.abs(_.oc(a)-_.oc(this))};_.m.W=function(){var a=(this.b+this.f)/2;_.mc(this)&&(a=_.xb(a+180,-180,180));return a};_.m=qc.prototype;_.m.isEmpty=function(){return this.b>this.f};_.m.intersects=function(a){var b=this.b,c=this.f;return b<=a.b?a.b<=c&&a.b<=a.f:b<=a.f&&b<=c};_.m.contains=function(a){return a>=this.b&&a<=this.f};_.m.extend=function(a){this.isEmpty()?this.f=this.b=a:a<this.b?this.b=a:a>this.f&&(this.f=a)};
	_.m.aa=function(a){return this.isEmpty()?a.isEmpty():1E-9>=Math.abs(a.b-this.b)+Math.abs(this.f-a.f)};_.m.W=function(){return(this.f+this.b)/2};_.m=_.rc.prototype;_.m.getCenter=function(){return new _.K(this.f.W(),this.b.W())};_.m.toString=function(){return"("+this.getSouthWest()+", "+this.getNorthEast()+")"};_.m.toJSON=function(){return{south:this.f.b,west:this.b.b,north:this.f.f,east:this.b.f}};_.m.toUrlValue=function(a){var b=this.getSouthWest(),c=this.getNorthEast();return[b.toUrlValue(a),c.toUrlValue(a)].join()};_.m.aa=function(a){if(!a)return!1;a=_.uc(a);return this.f.aa(a.f)&&this.b.aa(a.b)};_.rc.prototype.equals=_.rc.prototype.aa;
	_.m=_.rc.prototype;_.m.contains=function(a){a=_.kc(a);return this.f.contains(a.lat())&&this.b.contains(a.lng())};_.m.intersects=function(a){a=_.uc(a);return this.f.intersects(a.f)&&this.b.intersects(a.b)};_.m.extend=function(a){a=_.kc(a);this.f.extend(a.lat());this.b.extend(a.lng());return this};_.m.union=function(a){a=_.uc(a);if(!a||a.isEmpty())return this;this.extend(a.getSouthWest());this.extend(a.getNorthEast());return this};_.m.getSouthWest=function(){return new _.K(this.f.b,this.b.b,!0)};
	_.m.getNorthEast=function(){return new _.K(this.f.f,this.b.f,!0)};_.m.toSpan=function(){var a=this.f;a=a.isEmpty()?0:a.f-a.b;return new _.K(a,_.oc(this.b),!0)};_.m.isEmpty=function(){return this.f.isEmpty()||this.b.isEmpty()};var tc=_.Mb({south:_.Vb,west:_.Vb,north:_.Vb,east:_.Vb},!1);var Hc;
	_.L={addListener:function(a,b,c){return new Ic(a,b,c,0)},hasListeners:function(a,b){if(!a)return!1;b=(a=a.__e3_)&&a[b];if(a=!!b){a:{for(c in b){var c=!1;break a}c=!0}a=!c}return a},removeListener:function(a){a&&a.remove()},clearListeners:function(a,b){_.tb(Ac(a,b),function(a,b){b&&b.remove()})},clearInstanceListeners:function(a){_.tb(Ac(a),function(a,c){c&&c.remove()})},trigger:function(a,b,c){if(_.L.hasListeners(a,b)){var d=_.Wa(arguments,2),e=Ac(a,b),f;for(f in e){var g=e[f];g&&g.b.apply(g.f,d)}}},
		addDomListener:function(a,b,c,d){var e=d?4:1;if(!a.addEventListener&&a.attachEvent)return c=new Ic(a,b,c,2),a.attachEvent("on"+b,Jc(c)),c;a.addEventListener&&a.addEventListener(b,c,d);return new Ic(a,b,c,e)},addDomListenerOnce:function(a,b,c,d){var e=_.L.addDomListener(a,b,function(){e.remove();return c.apply(this,arguments)},d);return e},ka:function(a,b,c,d){return _.L.addDomListener(a,b,Bc(c,d))},bind:function(a,b,c,d){return _.L.addListener(a,b,(0,_.u)(d,c))},addListenerOnce:function(a,b,c){var d=
			_.L.addListener(a,b,function(){d.remove();return c.apply(this,arguments)});return d},forward:function(a,b,c){return _.L.addListener(a,b,Fc(b,c))},Zc:function(a,b,c,d){_.L.addDomListener(a,b,Fc(b,c,!d))}};Hc=0;Ic.prototype.remove=function(){if(this.f){if(this.f.removeEventListener)switch(this.l){case 1:this.f.removeEventListener(this.j,this.b,!1);break;case 4:this.f.removeEventListener(this.j,this.b,!0)}delete zc(this.f,this.j)[this.id];this.b=this.f=null}};_.m=_.N.prototype;_.m.get=function(a){var b=Pc(this);a+="";b=Hb(b,a);if(_.q(b)){if(b){a=b.Db;b=b.jd;var c="get"+_.Oc(a);return b[c]?b[c]():b.get(a)}return this[a]}};_.m.set=function(a,b){var c=Pc(this);a+="";var d=Hb(c,a);if(d)if(a=d.Db,d=d.jd,c="set"+_.Oc(a),d[c])d[c](b);else d.set(a,b);else this[a]=b,c[a]=null,Mc(this,a)};_.m.notify=function(a){var b=Pc(this);a+="";(b=Hb(b,a))?b.jd.notify(b.Db):Mc(this,a)};
	_.m.setValues=function(a){for(var b in a){var c=a[b],d="set"+_.Oc(b);if(this[d])this[d](c);else this.set(b,c)}};_.m.setOptions=_.N.prototype.setValues;_.m.changed=_.l();var Nc={};_.N.prototype.bindTo=function(a,b,c,d){a+="";c=(c||a)+"";this.unbind(a);var e={jd:this,Db:a},f={jd:b,Db:c,kh:e};Pc(this)[a]=f;Lc(b,c)[_.Kc(e)]=e;d||Mc(this,a)};_.N.prototype.unbind=function(a){var b=Pc(this),c=b[a];c&&(c.kh&&delete Lc(c.jd,c.Db)[_.Kc(c.kh)],this[a]=this.get(a),b[a]=null)};
	_.N.prototype.unbindAll=function(){var a=(0,_.u)(this.unbind,this),b=Pc(this),c;for(c in b)a(c)};_.N.prototype.addListener=function(a,b){return _.L.addListener(this,a,b)};Qc.prototype.addListener=function(a,b,c){c=c?{mh:!1}:null;var d=!this.O.length,e=this.O.find(Tc(a,b));e?e.once=e.once&&c:this.O.push({Yc:a,context:b||null,once:c});d&&this.f();return a};Qc.prototype.addListenerOnce=function(a,b){this.addListener(a,b,!0);return a};Qc.prototype.removeListener=function(a,b){if(this.O.length){var c=this.O;a=_.Ta(c,Tc(a,b),void 0);0<=a&&_.Ua(c,a);this.O.length||this.b()}};var Rc=_.kb;_.m=_.Vc.prototype;_.m.Pd=_.l();_.m.Od=_.l();_.m.addListener=function(a,b){return this.O.addListener(a,b)};_.m.addListenerOnce=function(a,b){return this.O.addListenerOnce(a,b)};_.m.removeListener=function(a,b){return this.O.removeListener(a,b)};_.m.notify=function(a){_.Sc(this.O,function(a){a(this.get())},this,a)};_.y(_.ad,_.N);_.m=_.ad.prototype;_.m.getAt=function(a){return this.b[a]};_.m.indexOf=function(a){for(var b=0,c=this.b.length;b<c;++b)if(a===this.b[b])return b;return-1};_.m.forEach=function(a){for(var b=0,c=this.b.length;b<c;++b)a(this.b[b],b)};_.m.setAt=function(a,b){var c=this.b[a],d=this.b.length;if(a<d)this.b[a]=b,_.L.trigger(this,"set_at",a,c),this.l&&this.l(a,c);else{for(c=d;c<a;++c)this.insertAt(c,void 0);this.insertAt(a,b)}};
	_.m.insertAt=function(a,b){this.b.splice(a,0,b);$c(this);_.L.trigger(this,"insert_at",a);this.f&&this.f(a)};_.m.removeAt=function(a){var b=this.b[a];this.b.splice(a,1);$c(this);_.L.trigger(this,"remove_at",a,b);this.j&&this.j(a,b);return b};_.m.push=function(a){this.insertAt(this.b.length,a);return this.b.length};_.m.pop=function(){return this.removeAt(this.b.length-1)};_.m.getArray=_.pa("b");_.m.clear=function(){for(;this.get("length");)this.pop()};_.Zc(_.ad.prototype,{length:null});_.bd.prototype.remove=function(a){var b=this.f,c=_.Kc(a);b[c]&&(delete b[c],--this.j,_.L.trigger(this,"remove",a),this.onRemove&&this.onRemove(a))};_.bd.prototype.contains=function(a){return!!this.f[_.Kc(a)]};_.bd.prototype.forEach=function(a){var b=this.f,c;for(c in b)a.call(this,b[c])};_.dd.prototype.ub=_.sa(1);_.dd.prototype.forEach=function(a,b){_.A(this.b,function(c,d){a.call(b,c,d)})};var Hh=_.Mb({zoom:_.G(xh),heading:xh,pitch:xh});_.y(_.fd,_.Vc);_.fd.prototype.set=function(a){this.m&&this.get()===a||(this.Ci(a),this.notify())};_.y(gd,_.fd);gd.prototype.get=_.pa("b");gd.prototype.Ci=_.oa("b");_.y(_.kd,_.N);_.y(ld,_.N);_.pd.prototype.forEach=function(a){for(var b=1+this.Nb,c=0,d={type:"s",Nd:0,Xd:null,Vd:!1,Tf:!1},e=this.b.length;b<e;){d.Tf=!1;var f=this.b.substr(b).match(/^(\d+)/);f?(b+=f[1].length,d.Nd=(0,window.parseInt)(f,10)):d.Nd++;f=this.b[b++];var g=f.toLowerCase();d.Vd=g!=f;g in Ih?(d.type=Ih[g],d.Tf="B"!=d.type):d.type=g;"m"==d.type?d.Xd=this.f[c++]:d.Xd=null;a(d)}};var Ih={a:"B",k:"j",p:"o",w:"v",q:"y",r:"h"};var Jh;_.Lf=new qd;Jh=/'/g;qd.prototype.b=function(a,b){var c=[];sd(a,b,c);return c.join("&").replace(Jh,"%27")};_.O.prototype.aa=function(a){return _.od(this.data,a?(a&&a).data:null)};_.O.prototype.Ki=_.sa(2);_.y(Bd,_.N);Bd.prototype.set=function(a,b){if(null!=b&&!(b&&_.F(b.maxZoom)&&b.tileSize&&b.tileSize.width&&b.tileSize.height&&b.getTile&&b.getTile.apply))throw Error("\u041e\u0436\u0438\u0434\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438: google.maps.MapType");return _.N.prototype.set.apply(this,arguments)};_.y(_.Cd,_.N);var Ig=_.Mb({center:function(a){return _.kc(a)},radius:_.Vb},!0);/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
	var Dd="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");_.y(_.Gd,Fd);_.Gd.prototype.getType=_.qa("Point");_.Gd.prototype.forEachLatLng=function(a){a(this.b)};_.Gd.prototype.get=_.pa("b");var ce=_.Qb(Hd);Qd.f=void 0;Qd.b=function(){return Qd.f?Qd.f:Qd.f=new Qd};Qd.prototype.va=function(a,b){if(!this.b[a]){var c=this,d=c.A;Rd(c.j,function(e){for(var f=e.b[a]||[],g=e.l[a]||[],h=d[a]=_.Id(f.length,function(){delete d[a];b(e.f);for(var f=c.f[a],h=f?f.length:0,k=0;k<h;++k)f[k](c.b[a]);delete c.f[a];k=0;for(f=g.length;k<f;++k)h=g[k],d[h]&&d[h]()}),k=0,n=f.length;k<n;++k)c.b[f[k]]&&h()})}};_.m=_.Xd.prototype;_.m.getId=_.pa("j");_.m.getGeometry=_.pa("b");_.m.setGeometry=function(a){var b=this.b;try{this.b=a?Hd(a):null}catch(c){_.Lb(c);return}_.L.trigger(this,"setgeometry",{feature:this,newGeometry:this.b,oldGeometry:b})};_.m.getProperty=function(a){return Hb(this.f,a)};_.m.setProperty=function(a,b){if(void 0===b)this.removeProperty(a);else{var c=this.getProperty(a);this.f[a]=b;_.L.trigger(this,"setproperty",{feature:this,name:a,newValue:b,oldValue:c})}};
	_.m.removeProperty=function(a){var b=this.getProperty(a);delete this.f[a];_.L.trigger(this,"removeproperty",{feature:this,name:a,oldValue:b})};_.m.forEachProperty=function(a){for(var b in this.f)a(this.getProperty(b),b)};_.m.toGeoJson=function(a){var b=this;_.S("data",function(c){c.f(b,a)})};var Kh={Co:"Point",yo:"LineString",POLYGON:"Polygon"};var Lh={CIRCLE:0,FORWARD_CLOSED_ARROW:1,FORWARD_OPEN_ARROW:2,BACKWARD_CLOSED_ARROW:3,BACKWARD_OPEN_ARROW:4};_.m=Yd.prototype;_.m.contains=function(a){return this.b.hasOwnProperty(_.Kc(a))};_.m.getFeatureById=function(a){return Hb(this.f,a)};
	_.m.add=function(a){a=a||{};a=a instanceof _.Xd?a:new _.Xd(a);if(!this.contains(a)){var b=a.getId();if(b){var c=this.getFeatureById(b);c&&this.remove(c)}c=_.Kc(a);this.b[c]=a;b&&(this.f[b]=a);var d=_.L.forward(a,"setgeometry",this),e=_.L.forward(a,"setproperty",this),f=_.L.forward(a,"removeproperty",this);this.j[c]=function(){_.L.removeListener(d);_.L.removeListener(e);_.L.removeListener(f)};_.L.trigger(this,"addfeature",{feature:a})}return a};
	_.m.remove=function(a){var b=_.Kc(a),c=a.getId();if(this.b[b]){delete this.b[b];c&&delete this.f[c];if(c=this.j[b])delete this.j[b],c();_.L.trigger(this,"removefeature",{feature:a})}};_.m.forEach=function(a){for(var b in this.b)a(this.b[b])};_.pe="click dblclick mousedown mousemove mouseout mouseover mouseup rightclick".split(" ");Zd.prototype.get=function(a){return this.b[a]};Zd.prototype.set=function(a,b){var c=this.b;c[a]||(c[a]={});_.ub(c[a],b);_.L.trigger(this,"changed",a)};Zd.prototype.reset=function(a){delete this.b[a];_.L.trigger(this,"changed",a)};Zd.prototype.forEach=function(a){_.tb(this.b,a)};_.y(be,_.N);be.prototype.overrideStyle=function(a,b){this.b.set(_.Kc(a),b)};be.prototype.revertStyle=function(a){a?this.b.reset(_.Kc(a)):this.b.forEach((0,_.u)(this.b.reset,this.b))};_.y(_.de,Fd);_.m=_.de.prototype;_.m.getType=_.qa("GeometryCollection");_.m.getLength=function(){return this.b.length};_.m.getAt=function(a){return this.b[a]};_.m.getArray=function(){return this.b.slice()};_.m.forEachLatLng=function(a){this.b.forEach(function(b){b.forEachLatLng(a)})};_.y(_.fe,Fd);_.m=_.fe.prototype;_.m.getType=_.qa("LineString");_.m.getLength=function(){return this.b.length};_.m.getAt=function(a){return this.b[a]};_.m.getArray=function(){return this.b.slice()};_.m.forEachLatLng=function(a){this.b.forEach(a)};var he=_.Qb(_.Ob(_.fe,"google.maps.Data.LineString",!0));_.y(_.ge,Fd);_.m=_.ge.prototype;_.m.getType=_.qa("LinearRing");_.m.getLength=function(){return this.b.length};_.m.getAt=function(a){return this.b[a]};_.m.getArray=function(){return this.b.slice()};_.m.forEachLatLng=function(a){this.b.forEach(a)};var ke=_.Qb(_.Ob(_.ge,"google.maps.Data.LinearRing",!0));_.y(_.ie,Fd);_.m=_.ie.prototype;_.m.getType=_.qa("MultiLineString");_.m.getLength=function(){return this.b.length};_.m.getAt=function(a){return this.b[a]};_.m.getArray=function(){return this.b.slice()};_.m.forEachLatLng=function(a){this.b.forEach(function(b){b.forEachLatLng(a)})};_.y(_.je,Fd);_.m=_.je.prototype;_.m.getType=_.qa("MultiPoint");_.m.getLength=function(){return this.b.length};_.m.getAt=function(a){return this.b[a]};_.m.getArray=function(){return this.b.slice()};_.m.forEachLatLng=function(a){this.b.forEach(a)};_.y(_.le,Fd);_.m=_.le.prototype;_.m.getType=_.qa("Polygon");_.m.getLength=function(){return this.b.length};_.m.getAt=function(a){return this.b[a]};_.m.getArray=function(){return this.b.slice()};_.m.forEachLatLng=function(a){this.b.forEach(function(b){b.forEachLatLng(a)})};var me=_.Qb(_.Ob(_.le,"google.maps.Data.Polygon",!0));_.y(_.ne,Fd);_.m=_.ne.prototype;_.m.getType=_.qa("MultiPolygon");_.m.getLength=function(){return this.b.length};_.m.getAt=function(a){return this.b[a]};_.m.getArray=function(){return this.b.slice()};_.m.forEachLatLng=function(a){this.b.forEach(function(b){b.forEachLatLng(a)})};_.Mh=_.G(_.Ob(_.Cd,"Map"));_.y(qe,_.N);_.m=qe.prototype;_.m.contains=function(a){return this.b.contains(a)};_.m.getFeatureById=function(a){return this.b.getFeatureById(a)};_.m.add=function(a){return this.b.add(a)};_.m.remove=function(a){this.b.remove(a)};_.m.forEach=function(a){this.b.forEach(a)};_.m.addGeoJson=function(a,b){return _.oe(this.b,a,b)};_.m.loadGeoJson=function(a,b,c){var d=this.b;_.S("data",function(e){e.fl(d,a,b,c)})};_.m.toGeoJson=function(a){var b=this.b;_.S("data",function(c){c.bl(b,a)})};
	_.m.overrideStyle=function(a,b){this.f.overrideStyle(a,b)};_.m.revertStyle=function(a){this.f.revertStyle(a)};_.m.controls_changed=function(){this.get("controls")&&re(this)};_.m.drawingMode_changed=function(){this.get("drawingMode")&&re(this)};_.Zc(qe.prototype,{map:_.Mh,style:_.ib,controls:_.G(_.Qb(_.Pb(Kh))),controlPosition:_.G(_.Pb(_.sf)),drawingMode:_.G(_.Pb(Kh))});_.Nh={METRIC:0,IMPERIAL:1};_.Oh={DRIVING:"DRIVING",WALKING:"WALKING",BICYCLING:"BICYCLING",TRANSIT:"TRANSIT"};_.Ph={BEST_GUESS:"bestguess",OPTIMISTIC:"optimistic",PESSIMISTIC:"pessimistic"};_.Qh={BUS:"BUS",RAIL:"RAIL",SUBWAY:"SUBWAY",TRAIN:"TRAIN",TRAM:"TRAM"};_.Rh={LESS_WALKING:"LESS_WALKING",FEWER_TRANSFERS:"FEWER_TRANSFERS"};var Sh=_.Mb({routes:_.Qb(_.Rb(_.Cb))},!0);var Td={main:[],common:["main"],util:["common"],adsense:["main"],controls:["util"],data:["util"],directions:["util","geometry"],distance_matrix:["util"],drawing:["main"],drawing_impl:["controls"],elevation:["util","geometry"],geocoder:["util"],geojson:["main"],imagery_viewer:["main"],geometry:["main"],infowindow:["util"],kml:["onion","util","map"],layers:["map"],map:["common"],marker:["util"],maxzoom:["util"],onion:["util","map"],overlay:["common"],panoramio:["main"],places:["main"],places_impl:["controls"],
		poly:["util","map","geometry"],search:["main"],search_impl:["onion"],stats:["util"],streetview:["util","geometry"],usage:["util"],visualization:["main"],visualization_impl:["onion"],weather:["main"],zombie:["main"]};var Th=_.D.google.maps,Uh=Qd.b(),Vh=(0,_.u)(Uh.va,Uh);Th.__gjsload__=Vh;_.tb(Th.modules,Vh);delete Th.modules;var Wh=_.Mb({source:_.yh,webUrl:_.Bh,iosDeepLinkId:_.Bh});var Xh=_.Tb(_.Mb({placeId:_.Bh,query:_.Bh,location:_.kc}),function(a){if(a.placeId&&a.query)throw _.Kb("cannot set both placeId and query");if(!a.placeId&&!a.query)throw _.Kb("must set one of placeId or query");return a});_.y(ye,_.N);
	_.Zc(ye.prototype,{position:_.G(_.kc),title:_.Bh,icon:_.G(_.Sb([_.yh,{Kg:Ub("url"),then:_.Mb({url:_.yh,scaledSize:_.G(Xb),size:_.G(Xb),origin:_.G(Wb),anchor:_.G(Wb),labelOrigin:_.G(Wb),path:_.Rb(function(a){return null==a})},!0)},{Kg:Ub("path"),then:_.Mb({path:_.Sb([_.yh,_.Pb(Lh)]),anchor:_.G(Wb),labelOrigin:_.G(Wb),fillColor:_.Bh,fillOpacity:_.Ah,rotation:_.Ah,scale:_.Ah,strokeColor:_.Bh,strokeOpacity:_.Ah,strokeWeight:_.Ah,url:_.Rb(function(a){return null==a})},!0)}])),label:_.G(_.Sb([_.yh,{Kg:Ub("text"),
			then:_.Mb({text:_.yh,fontSize:_.Bh,fontWeight:_.Bh,fontFamily:_.Bh},!0)}])),shadow:_.ib,shape:_.ib,cursor:_.Bh,clickable:_.Ch,animation:_.ib,draggable:_.Ch,visible:_.Ch,flat:_.ib,zIndex:_.Ah,opacity:_.Ah,place:_.G(Xh),attribution:_.G(Wh)});var Yh=_.G(_.Ob(_.kd,"StreetViewPanorama"));_.y(_.ze,ye);_.ze.prototype.map_changed=function(){this.__gm.set&&this.__gm.set.remove(this);var a=this.get("map");this.__gm.set=a&&a.__gm.mb;this.__gm.set&&_.cd(this.__gm.set,this)};_.ze.MAX_ZINDEX=1E6;_.Zc(_.ze.prototype,{map:_.Sb([_.Mh,Yh])});_.y(Ae,_.N);_.m=Ae.prototype;_.m.internalAnchor_changed=function(){var a=this.get("internalAnchor");Be(this,"attribution",a);Be(this,"place",a);Be(this,"internalAnchorMap",a,"map");Be(this,"internalAnchorPoint",a,"anchorPoint");a instanceof _.ze?Be(this,"internalAnchorPosition",a,"internalPosition"):Be(this,"internalAnchorPosition",a,"position")};
	_.m.internalAnchorPoint_changed=Ae.prototype.internalPixelOffset_changed=function(){var a=this.get("internalAnchorPoint")||_.Dh,b=this.get("internalPixelOffset")||_.Eh;this.set("pixelOffset",new _.J(b.width+Math.round(a.x),b.height+Math.round(a.y)))};_.m.internalAnchorPosition_changed=function(){var a=this.get("internalAnchorPosition");a&&this.set("position",a)};_.m.internalAnchorMap_changed=function(){this.get("internalAnchor")&&this.b.set("map",this.get("internalAnchorMap"))};
	_.m.zm=function(){var a=this.get("internalAnchor");!this.b.get("map")&&a&&a.get("map")&&this.set("internalAnchor",null)};_.m.internalContent_changed=function(){this.set("content",se(this.get("internalContent")))};_.m.trigger=function(a){_.L.trigger(this.b,a)};_.m.close=function(){this.b.set("map",null)};_.y(_.Ce,_.N);_.Zc(_.Ce.prototype,{content:_.Sb([_.Bh,_.Rb(Nb)]),position:_.G(_.kc),size:_.G(Xb),map:_.Sb([_.Mh,Yh]),anchor:_.G(_.Ob(_.N,"MVCObject")),zIndex:_.Ah});_.Ce.prototype.open=function(a,b){this.set("anchor",b);b?!this.get("map")&&a&&this.set("map",a):this.set("map",a)};_.Ce.prototype.close=function(){this.set("map",null)};_.De=[];_.y(Ge,_.N);Ge.prototype.changed=function(a){if("map"==a||"panel"==a){var b=this;_.S("directions",function(c){c.Gl(b,a)})}"panel"==a&&_.Ee(this.getPanel())};_.Zc(Ge.prototype,{directions:Sh,map:_.Mh,panel:_.G(_.Rb(Nb)),routeIndex:_.Ah});He.prototype.route=function(a,b){_.S("directions",function(c){c.zi(a,b,!0)})};Ie.prototype.getDistanceMatrix=function(a,b){_.S("distance_matrix",function(c){c.b(a,b)})};Je.prototype.getElevationAlongPath=function(a,b){_.S("elevation",function(c){c.getElevationAlongPath(a,b)})};Je.prototype.getElevationForLocations=function(a,b){_.S("elevation",function(c){c.getElevationForLocations(a,b)})};_.Zh=_.Ob(_.rc,"LatLngBounds");_.Ke.prototype.geocode=function(a,b){_.S("geocoder",function(c){c.geocode(a,b)})};_.y(_.Le,_.N);_.Le.prototype.map_changed=function(){var a=this;_.S("kml",function(b){b.b(a)})};_.Zc(_.Le.prototype,{map:_.Mh,url:null,bounds:null,opacity:_.Ah});_.ai={UNKNOWN:"UNKNOWN",OK:_.ia,INVALID_REQUEST:_.ca,DOCUMENT_NOT_FOUND:"DOCUMENT_NOT_FOUND",FETCH_ERROR:"FETCH_ERROR",INVALID_DOCUMENT:"INVALID_DOCUMENT",DOCUMENT_TOO_LARGE:"DOCUMENT_TOO_LARGE",LIMITS_EXCEEDED:"LIMITS_EXECEEDED",TIMED_OUT:"TIMED_OUT"};_.y(Me,_.N);_.m=Me.prototype;_.m.ce=function(){var a=this;_.S("kml",function(b){b.f(a)})};_.m.url_changed=Me.prototype.ce;_.m.driveFileId_changed=Me.prototype.ce;_.m.map_changed=Me.prototype.ce;_.m.zIndex_changed=Me.prototype.ce;_.Zc(Me.prototype,{map:_.Mh,defaultViewport:null,metadata:null,status:null,url:_.Bh,screenOverlays:_.Ch,zIndex:_.Ah});_.y(_.Ne,_.N);_.Zc(_.Ne.prototype,{map:_.Mh});_.y(Oe,_.N);_.Zc(Oe.prototype,{map:_.Mh});_.y(Pe,_.N);_.Zc(Pe.prototype,{map:_.Mh});_.Re.prototype.ye=!0;_.Re.prototype.b=_.sa(4);_.Re.prototype.Yh=!0;_.Re.prototype.f=_.sa(6);_.Qe={};_.Se("about:blank");_.Ue.prototype.Yh=!0;_.Ue.prototype.f=_.sa(5);_.Ue.prototype.ye=!0;_.Ue.prototype.b=_.sa(3);_.Te={};_.Ve("<!DOCTYPE html>",0);_.Ve("",0);_.Ve("<br>",0);var Yf="StopIteration"in _.D?_.D.StopIteration:{message:"StopIteration",stack:""};af.prototype.next=function(){throw Yf;};_.y(bf,af);bf.prototype.setPosition=function(a,b,c){if(this.node=a)this.f=_.Fa(b)?b:1!=this.node.nodeType?0:this.b?-1:1;_.Fa(c)&&(this.depth=c)};
	bf.prototype.next=function(){if(this.j){if(!this.node||this.l&&0==this.depth)throw Yf;var a=this.node;var b=this.b?-1:1;if(this.f==b){var c=this.b?a.lastChild:a.firstChild;c?this.setPosition(c):this.setPosition(a,-1*b)}else(c=this.b?a.previousSibling:a.nextSibling)?this.setPosition(c):this.setPosition(a.parentNode,-1*b);this.depth+=this.f*(this.b?-1:1)}else this.j=!0;a=this.node;if(!this.node)throw Yf;return a};bf.prototype.aa=function(a){return a.node==this.node&&(!this.node||a.f==this.f)};
	bf.prototype.splice=function(a){var b=this.node,c=this.b?1:-1;this.f==c&&(this.f=-1*c,this.depth+=this.f*(this.b?-1:1));this.b=!this.b;bf.prototype.next.call(this);this.b=!this.b;c=_.Ja(arguments[0])?arguments[0]:arguments;for(var d=c.length-1;0<=d;d--)_.We(c[d],b);_.Xe(b)};_.y(cf,bf);cf.prototype.next=function(){do cf.Eb.next.call(this);while(-1==this.f);return this.node};_.y(_.df,_.O);_.df.prototype.getStatus=function(){return _.ud(this,0)};var Kf;_.y(ef,_.O);_.y(_.ff,_.O);_.y(gf,_.O);_.y(hf,_.O);_.tf={};_.nf.prototype.aa=function(a){return this==a||a instanceof _.nf&&this.size.aa(a.size)&&this.heading==a.heading&&this.da==a.da};_.di=new _.nf(new _.Yb(256,256),0,0);_.ei=!!(_.D.requestAnimationFrame&&_.D.performance&&_.D.performance.now);_.of.prototype.fromLatLngToPoint=function(a,b){b=b||new _.H(0,0);var c=this.b;b.x=c.x+a.lng()*this.j;a=_.wb(Math.sin(_.rb(a.lat())),-(1-1E-15),1-1E-15);b.y=c.y+.5*Math.log((1+a)/(1-a))*-this.l;return b};_.of.prototype.fromPointToLatLng=function(a,b){var c=this.b;return new _.K(_.sb(2*Math.atan(Math.exp((a.y-c.y)/-this.l))-Math.PI/2),(a.x-c.x)/this.j,b)};_.rf={japan_prequake:20,japan_postquake2010:24};_.fi={NEAREST:"nearest",BEST:"best"};_.gi={DEFAULT:"default",OUTDOOR:"outdoor"};_.y(uf,_.kd);uf.prototype.visible_changed=function(){var a=this,b=!!this.get("visible"),c=!1;this.b.get()!=b&&(this.b.set(b),c=b);b&&(this.l=this.l||new window.Promise(function(b){_.S("streetview",function(c){if(a.j)var d=a.j;b(c.Rm(a,a.b,a.A,d))})}),c&&this.l.then(function(a){return a.sn()}))};_.Zc(uf.prototype,{visible:_.Ch,pano:_.Bh,position:_.G(_.kc),pov:_.G(Hh),motionTracking:zh,photographerPov:null,location:null,links:_.Qb(_.Rb(_.Cb)),status:null,zoom:_.Ah,enableCloseButton:_.Ch});
	uf.prototype.registerPanoProvider=function(a,b){this.set("panoProvider",{si:a,options:b||{}})};vf.prototype.register=function(a){var b=this.l;var c=b.length;if(!c||a.zIndex>=b[0].zIndex)var d=0;else if(a.zIndex>=b[c-1].zIndex){for(d=0;1<c-d;){var e=d+c>>1;a.zIndex>=b[e].zIndex?c=e:d=e}d=c}else d=c;b.splice(d,0,a)};_.y(wf,ld);_.xf.prototype.addListener=function(a,b){this.O.addListener(a,b)};_.xf.prototype.addListenerOnce=function(a,b){this.O.addListenerOnce(a,b)};_.xf.prototype.removeListener=function(a,b){this.O.removeListener(a,b)};_.xf.prototype.b=_.sa(7);_.y(_.yf,_.N);_.yf.prototype.S=function(){var a=this;a.H||(a.H=_.D.setTimeout(function(){a.H=void 0;a.oa()},a.Pk))};_.yf.prototype.ca=function(){this.H&&_.D.clearTimeout(this.H);this.H=void 0;this.oa()};var Jf;_.y(Cf,_.O);var If;_.y(Df,_.O);_.y(Ef,_.O);_.y(Ff,_.O);var Hf;_.y(Gf,_.O);Gf.prototype.getZoom=function(){return _.P(this,2)};Gf.prototype.setZoom=function(a){this.data[2]=a};_.y(Pf,_.yf);var Qf={roadmap:0,satellite:2,hybrid:3,terrain:4},hi={0:1,2:2,3:2,4:2};_.m=Pf.prototype;_.m.Mh=_.Xc("center");_.m.Xg=_.Xc("zoom");_.m.changed=function(){var a=this.Mh(),b=this.Xg(),c=Rf(this);if(a&&!a.aa(this.A)||this.ia!=b||this.na!=c)this.j||_.Sf(this.f),this.S(),this.ia=b,this.na=c;this.A=a};
	_.m.oa=function(){var a=Rf(this);if(this.j&&this.m)this.l!=a&&_.Sf(this.f);else{var b="",c=this.Mh(),d=this.Xg(),e=this.get("size");if(e){if(c&&(0,window.isFinite)(c.lat())&&(0,window.isFinite)(c.lng())&&1<d&&null!=a&&e&&e.width&&e.height&&this.b){_.zf(this.b,e);if(c=_.pf(this.B,c,d)){var f=new _.dc;f.N=Math.round(c.x-e.width/2);f.T=f.N+e.width;f.P=Math.round(c.y-e.height/2);f.U=f.P+e.height;c=f}else c=null;f=hi[a];c&&(this.m=!0,this.l=a,this.j&&this.f&&(b=_.bc(d,0,0),this.j.set({image:this.f,Ea:{min:_.cc(b,
				{V:c.N,X:c.P}),max:_.cc(b,{V:c.T,X:c.U})},size:{width:e.width,height:e.height}})),b=Uf(this,c,d,a,f))}this.f&&(_.zf(this.f,e),Vf(this,b))}}};
	_.m.div_changed=function(){var a=this.get("div"),b=this.b;if(a)if(b)a.appendChild(b);else{b=this.b=window.document.createElement("div");b.style.overflow="hidden";var c=this.f=window.document.createElement("img");_.L.addDomListener(b,"contextmenu",function(a){_.wc(a);_.yc(a)});c.ontouchstart=c.ontouchmove=c.ontouchend=c.ontouchcancel=function(a){_.xc(a);_.yc(a)};_.zf(c,_.Eh);a.appendChild(b);this.oa()}else b&&(_.Sf(b),this.b=null)};_.y(cg,_.Cd);_.m=cg.prototype;_.m.streetView_changed=function(){var a=this.get("streetView");a?a.set("standAlone",!1):this.set("streetView",this.__gm.B)};_.m.getDiv=function(){return this.__gm.Z};_.m.panBy=function(a,b){var c=this.__gm;_.S("map",function(){_.L.trigger(c,"panby",a,b)})};_.m.panTo=function(a){var b=this.__gm;a=_.kc(a);_.S("map",function(){_.L.trigger(b,"panto",a)})};_.m.panToBounds=function(a,b){var c=this.__gm,d=_.uc(a);_.S("map",function(){_.L.trigger(c,"pantolatlngbounds",d,b)})};
	_.m.fitBounds=function(a,b){var c=this;a=_.uc(a);_.S("map",function(d){d.fitBounds(c,a,b)})};_.Zc(cg.prototype,{bounds:null,streetView:Yh,center:_.G(_.kc),zoom:_.Ah,mapTypeId:_.Bh,projection:null,heading:_.Ah,tilt:_.Ah,clickableIcons:zh});dg.prototype.getMaxZoomAtLatLng=function(a,b){_.S("maxzoom",function(c){c.getMaxZoomAtLatLng(a,b)})};_.y(eg,_.N);eg.prototype.changed=function(a){if("suppressInfoWindows"!=a&&"clickable"!=a){var b=this;_.S("onion",function(a){a.b(b)})}};_.Zc(eg.prototype,{map:_.Mh,tableId:_.Ah,query:_.G(_.Sb([_.yh,_.Rb(_.Cb,"not an Object")]))});_.y(_.fg,_.N);_.fg.prototype.map_changed=function(){var a=this;_.S("overlay",function(b){b.wk(a)})};_.fg.preventMapHitsFrom=function(a){_.S("overlay",function(b){b.an(a)})};_.fg.preventMapHitsAndGesturesFrom=function(a){_.S("overlay",function(b){b.$m(a)})};_.Zc(_.fg.prototype,{panes:null,projection:null,map:_.Sb([_.Mh,Yh])});var ig=kg(_.Ob(_.K,"LatLng"));_.y(_.mg,_.N);_.mg.prototype.map_changed=_.mg.prototype.visible_changed=function(){var a=this;_.S("poly",function(b){b.b(a)})};_.mg.prototype.center_changed=function(){_.L.trigger(this,"bounds_changed")};_.mg.prototype.radius_changed=_.mg.prototype.center_changed;_.mg.prototype.getBounds=function(){var a=this.get("radius"),b=this.get("center");if(b&&_.F(a)){var c=this.get("map");c=c&&c.__gm.get("baseMapType");return _.qf(b,a/_.hg(c))}return null};
	_.Zc(_.mg.prototype,{center:_.G(_.kc),draggable:_.Ch,editable:_.Ch,map:_.Mh,radius:_.Ah,visible:_.Ch});_.y(ng,_.N);ng.prototype.map_changed=ng.prototype.visible_changed=function(){var a=this;_.S("poly",function(b){b.f(a)})};ng.prototype.getPath=function(){return this.get("latLngs").getAt(0)};ng.prototype.setPath=function(a){try{this.get("latLngs").setAt(0,jg(a))}catch(b){_.Lb(b)}};_.Zc(ng.prototype,{draggable:_.Ch,editable:_.Ch,map:_.Mh,visible:_.Ch});_.y(_.og,ng);_.og.prototype.Ya=!0;_.og.prototype.getPaths=function(){return this.get("latLngs")};_.og.prototype.setPaths=function(a){this.set("latLngs",lg(a))};_.y(_.pg,ng);_.pg.prototype.Ya=!1;_.y(_.qg,_.N);_.qg.prototype.map_changed=_.qg.prototype.visible_changed=function(){var a=this;_.S("poly",function(b){b.j(a)})};_.Zc(_.qg.prototype,{draggable:_.Ch,editable:_.Ch,bounds:_.G(_.uc),map:_.Mh,visible:_.Ch});_.y(rg,_.N);rg.prototype.map_changed=function(){var a=this;_.S("streetview",function(b){b.vk(a)})};_.Zc(rg.prototype,{map:_.Mh});_.sg.prototype.getPanorama=function(a,b){var c=this.b||void 0;_.S("streetview",function(d){_.S("geometry",function(e){d.ol(a,b,e.computeHeading,e.computeOffset,c)})})};_.sg.prototype.getPanoramaByLocation=function(a,b,c){this.getPanorama({location:a,radius:b,preference:50>(b||0)?"best":"nearest"},c)};_.sg.prototype.getPanoramaById=function(a,b){this.getPanorama({pano:a},b)};_.y(_.ug,_.N);_.m=_.ug.prototype;_.m.getTile=function(a,b,c){if(!a||!c)return null;var d=c.createElement("div");c={ga:a,zoom:b,Za:null};d.__gmimt=c;_.cd(this.b,d);if(this.f){var e=this.tileSize||new _.J(256,256),f=this.j(a,b);(c.Za=this.f({L:a.x,M:a.y,$:b},e,d,f,function(){_.L.trigger(d,"load")})).setOpacity(tg(this))}return d};_.m.releaseTile=function(a){a&&this.b.contains(a)&&(this.b.remove(a),(a=a.__gmimt.Za)&&a.release())};_.m.Hf=_.sa(8);_.m.opacity_changed=function(){var a=tg(this);this.b.forEach(function(b){b.__gmimt.Za.setOpacity(a)})};
	_.m.triggersTileLoadEvent=!0;_.Zc(_.ug.prototype,{opacity:_.Ah});_.y(_.vg,_.N);_.vg.prototype.getTile=uh;_.vg.prototype.tileSize=new _.J(256,256);_.vg.prototype.triggersTileLoadEvent=!0;_.y(_.wg,_.vg);_.y(_.xg,_.N);_.Zc(_.xg.prototype,{attribution:_.G(Wh),place:_.G(Xh)});var ii={Animation:{BOUNCE:1,DROP:2,Eo:3,zo:4},Circle:_.mg,ControlPosition:_.sf,Data:qe,GroundOverlay:_.Le,ImageMapType:_.ug,InfoWindow:_.Ce,LatLng:_.K,LatLngBounds:_.rc,MVCArray:_.ad,MVCObject:_.N,Map:cg,MapTypeControlStyle:{DEFAULT:0,HORIZONTAL_BAR:1,DROPDOWN_MENU:2,INSET:3,INSET_LARGE:4},MapTypeId:_.wh,MapTypeRegistry:Bd,Marker:_.ze,MarkerImage:function(a,b,c,d,e){this.url=a;this.size=b||e;this.origin=c;this.anchor=d;this.scaledSize=e;this.labelOrigin=null},NavigationControlStyle:{DEFAULT:0,SMALL:1,
			ANDROID:2,ZOOM_PAN:3,Fo:4,fk:5},OverlayView:_.fg,Point:_.H,Polygon:_.og,Polyline:_.pg,Rectangle:_.qg,ScaleControlStyle:{DEFAULT:0},Size:_.J,StreetViewPreference:_.fi,StreetViewSource:_.gi,StrokePosition:{CENTER:0,INSIDE:1,OUTSIDE:2},SymbolPath:Lh,ZoomControlStyle:{DEFAULT:0,SMALL:1,LARGE:2,fk:3},event:_.L};_.ub(qe,{Feature:_.Xd,Geometry:Fd,GeometryCollection:_.de,LineString:_.fe,LinearRing:_.ge,MultiLineString:_.ie,MultiPoint:_.je,MultiPolygon:_.ne,Point:_.Gd,Polygon:_.le});
	_.ub(ii,{BicyclingLayer:_.Ne,DirectionsRenderer:Ge,DirectionsService:He,DirectionsStatus:{OK:_.ia,UNKNOWN_ERROR:_.la,OVER_QUERY_LIMIT:_.ja,REQUEST_DENIED:_.ka,INVALID_REQUEST:_.ca,ZERO_RESULTS:_.ma,MAX_WAYPOINTS_EXCEEDED:_.fa,NOT_FOUND:_.ha},DirectionsTravelMode:_.Oh,DirectionsUnitSystem:_.Nh,DistanceMatrixService:Ie,DistanceMatrixStatus:{OK:_.ia,INVALID_REQUEST:_.ca,OVER_QUERY_LIMIT:_.ja,REQUEST_DENIED:_.ka,UNKNOWN_ERROR:_.la,MAX_ELEMENTS_EXCEEDED:_.ea,MAX_DIMENSIONS_EXCEEDED:_.da},DistanceMatrixElementStatus:{OK:_.ia,
			NOT_FOUND:_.ha,ZERO_RESULTS:_.ma},ElevationService:Je,ElevationStatus:{OK:_.ia,UNKNOWN_ERROR:_.la,OVER_QUERY_LIMIT:_.ja,REQUEST_DENIED:_.ka,INVALID_REQUEST:_.ca,vo:"DATA_NOT_AVAILABLE"},FusionTablesLayer:eg,Geocoder:_.Ke,GeocoderLocationType:{ROOFTOP:"ROOFTOP",RANGE_INTERPOLATED:"RANGE_INTERPOLATED",GEOMETRIC_CENTER:"GEOMETRIC_CENTER",APPROXIMATE:"APPROXIMATE"},GeocoderStatus:{OK:_.ia,UNKNOWN_ERROR:_.la,OVER_QUERY_LIMIT:_.ja,REQUEST_DENIED:_.ka,INVALID_REQUEST:_.ca,ZERO_RESULTS:_.ma,ERROR:_.ba},KmlLayer:Me,
		KmlLayerStatus:_.ai,MaxZoomService:dg,MaxZoomStatus:{OK:_.ia,ERROR:_.ba},SaveWidget:_.xg,StreetViewCoverageLayer:rg,StreetViewPanorama:uf,StreetViewService:_.sg,StreetViewStatus:{OK:_.ia,UNKNOWN_ERROR:_.la,ZERO_RESULTS:_.ma},StyledMapType:_.wg,TrafficLayer:Oe,TrafficModel:_.Ph,TransitLayer:Pe,TransitMode:_.Qh,TransitRoutePreference:_.Rh,TravelMode:_.Oh,UnitSystem:_.Nh});_.Vd("main",{});var Ag=/'/g,Bg;var te=arguments[0];
	window.google.maps.Load(function(a,b){var c=window.google.maps;Fg();var d=Gg(c);_.T=new hf(a);_.ji=Math.random()<_.P(_.T,0,1);_.ki=Math.round(1E15*Math.random()).toString(36);_.bg=Cg();_.$h=Dg();_.bi=new _.ad;_.ci=b;for(a=0;a<_.Ad(_.T,8);++a)_.tf[_.yd(_.T,8,a)]=!0;a=new _.ff(_.T.data[3]);ue(_.Q(a,0));_.tb(ii,function(a,b){c[a]=b});c.version=_.Q(a,1);window.setTimeout(function(){_.Wd(["util","stats"],function(a,b){a.f.b();a.j();d&&b.b.b({ev:"api_alreadyloaded",client:_.Q(_.T,6),key:_.Q(_.T,16)})})},
		5E3);(a=_.Q(_.T,11))&&_.Wd(_.vd(_.T,12),Eg(a),!0)});}).call(this,{});




"use strict";
(function(root, factory) {
	if(typeof exports === 'object') {
		module.exports = factory();
	}
	else if(typeof define === 'function' && define.amd) {
		define(['jquery', 'googlemaps!'], factory);
	}
	else {
		root.GMaps = factory();
	}


}(this, function() {

	/*!
	 * GMaps.js v0.4.25
	 * http://hpneo.github.com/gmaps/
	 *
	 * Copyright 2017, Gustavo Leon
	 * Released under the MIT License.
	 */

	var extend_object = function(obj, new_obj) {
		var name;

		if (obj === new_obj) {
			return obj;
		}

		for (name in new_obj) {
			if (new_obj[name] !== undefined) {
				obj[name] = new_obj[name];
			}
		}

		return obj;
	};

	var replace_object = function(obj, replace) {
		var name;

		if (obj === replace) {
			return obj;
		}

		for (name in replace) {
			if (obj[name] != undefined) {
				obj[name] = replace[name];
			}
		}

		return obj;
	};

	var array_map = function(array, callback) {
		var original_callback_params = Array.prototype.slice.call(arguments, 2),
			array_return = [],
			array_length = array.length,
			i;

		if (Array.prototype.map && array.map === Array.prototype.map) {
			array_return = Array.prototype.map.call(array, function(item) {
				var callback_params = original_callback_params.slice(0);
				callback_params.splice(0, 0, item);

				return callback.apply(this, callback_params);
			});
		}
		else {
			for (i = 0; i < array_length; i++) {
				callback_params = original_callback_params;
				callback_params.splice(0, 0, array[i]);
				array_return.push(callback.apply(this, callback_params));
			}
		}

		return array_return;
	};

	var array_flat = function(array) {
		var new_array = [],
			i;

		for (i = 0; i < array.length; i++) {
			new_array = new_array.concat(array[i]);
		}

		return new_array;
	};

	var coordsToLatLngs = function(coords, useGeoJSON) {
		var first_coord = coords[0],
			second_coord = coords[1];

		if (useGeoJSON) {
			first_coord = coords[1];
			second_coord = coords[0];
		}

		return new google.maps.LatLng(first_coord, second_coord);
	};

	var arrayToLatLng = function(coords, useGeoJSON) {
		var i;

		for (i = 0; i < coords.length; i++) {
			if (!(coords[i] instanceof google.maps.LatLng)) {
				if (coords[i].length > 0 && typeof(coords[i][0]) === "object") {
					coords[i] = arrayToLatLng(coords[i], useGeoJSON);
				}
				else {
					coords[i] = coordsToLatLngs(coords[i], useGeoJSON);
				}
			}
		}

		return coords;
	};

	var getElementsByClassName = function (class_name, context) {
		var element,
			_class = class_name.replace('.', '');

		if ('jQuery' in this && context) {
			element = $("." + _class, context)[0];
		} else {
			element = document.getElementsByClassName(_class)[0];
		}
		return element;

	};

	var getElementById = function(id, context) {
		var element,
			id = id.replace('#', '');

		if ('jQuery' in window && context) {
			element = $('#' + id, context)[0];
		} else {
			element = document.getElementById(id);
		};

		return element;
	};

	var findAbsolutePosition = function(obj)  {
		var curleft = 0,
			curtop = 0;

		if (obj.getBoundingClientRect) {
			var rect = obj.getBoundingClientRect();
			var sx = -(window.scrollX ? window.scrollX : window.pageXOffset);
			var sy = -(window.scrollY ? window.scrollY : window.pageYOffset);

			return [(rect.left - sx), (rect.top - sy)];
		}

		if (obj.offsetParent) {
			do {
				curleft += obj.offsetLeft;
				curtop += obj.offsetTop;
			} while (obj = obj.offsetParent);
		}

		return [curleft, curtop];
	};

	var GMaps = (function(global) {
		"use strict";

		var doc = document;
		/**
		 * Creates a new GMaps instance, including a Google Maps map.
		 * @class GMaps
		 * @constructs
		 * @param {object} options - `options` accepts all the [MapOptions](https://developers.google.com/maps/documentation/javascript/reference#MapOptions) and [events](https://developers.google.com/maps/documentation/javascript/reference#Map) listed in the Google Maps API. Also accepts:
		 * * `lat` (number): Latitude of the map's center
		 * * `lng` (number): Longitude of the map's center
		 * * `el` (string or HTMLElement): container where the map will be rendered
		 * * `markerClusterer` (function): A function to create a marker cluster. You can use MarkerClusterer or MarkerClustererPlus.
		 */
		var GMaps = function(options) {

			if (!(typeof window.google === 'object' && window.google.maps)) {
				if (typeof window.console === 'object' && window.console.error) {
					console.error('Google Maps API is required. Please register the following JavaScript library https://maps.googleapis.com/maps/api/js.');
				}

				return function() {};
			}

			if (!this) return new GMaps(options);

			options.zoom = options.zoom || 15;
			options.mapType = options.mapType || 'roadmap';

			var valueOrDefault = function(value, defaultValue) {
				return value === undefined ? defaultValue : value;
			};

			var self = this,
				i,
				events_that_hide_context_menu = [
					'bounds_changed', 'center_changed', 'click', 'dblclick', 'drag',
					'dragend', 'dragstart', 'idle', 'maptypeid_changed', 'projection_changed',
					'resize', 'tilesloaded', 'zoom_changed'
				],
				events_that_doesnt_hide_context_menu = ['mousemove', 'mouseout', 'mouseover'],
				options_to_be_deleted = ['el', 'lat', 'lng', 'mapType', 'width', 'height', 'markerClusterer', 'enableNewStyle'],
				identifier = options.el || options.div,
				markerClustererFunction = options.markerClusterer,
				mapType = google.maps.MapTypeId[options.mapType.toUpperCase()],
				map_center = new google.maps.LatLng(options.lat, options.lng),
				zoomControl = valueOrDefault(options.zoomControl, true),
				zoomControlOpt = options.zoomControlOpt || {
					style: 'DEFAULT',
					position: 'TOP_LEFT'
				},
				zoomControlStyle = zoomControlOpt.style || 'DEFAULT',
				zoomControlPosition = zoomControlOpt.position || 'TOP_LEFT',
				panControl = valueOrDefault(options.panControl, true),
				mapTypeControl = valueOrDefault(options.mapTypeControl, true),
				scaleControl = valueOrDefault(options.scaleControl, true),
				streetViewControl = valueOrDefault(options.streetViewControl, true),
				overviewMapControl = valueOrDefault(overviewMapControl, true),
				map_options = {},
				map_base_options = {
					zoom: this.zoom,
					center: map_center,
					mapTypeId: mapType
				},
				map_controls_options = {
					panControl: panControl,
					zoomControl: zoomControl,
					zoomControlOptions: {
						style: google.maps.ZoomControlStyle[zoomControlStyle],
						position: google.maps.ControlPosition[zoomControlPosition]
					},
					mapTypeControl: mapTypeControl,
					scaleControl: scaleControl,
					streetViewControl: streetViewControl,
					overviewMapControl: overviewMapControl
				};

			if (typeof(options.el) === 'string' || typeof(options.div) === 'string') {
				if (identifier.indexOf("#") > -1) {
					/**
					 * Container element
					 *
					 * @type {HTMLElement}
					 */
					this.el = getElementById(identifier, options.context);
				} else {
					this.el = getElementsByClassName.apply(this, [identifier, options.context]);
				}
			} else {
				this.el = identifier;
			}

			if (typeof(this.el) === 'undefined' || this.el === null) {
				throw 'No element defined.';
			}

			window.context_menu = window.context_menu || {};
			window.context_menu[self.el.id] = {};

			/**
			 * Collection of custom controls in the map UI
			 *
			 * @type {array}
			 */
			this.controls = [];
			/**
			 * Collection of map's overlays
			 *
			 * @type {array}
			 */
			this.overlays = [];
			/**
			 * Collection of KML/GeoRSS and FusionTable layers
			 *
			 * @type {array}
			 */
			this.layers = [];
			/**
			 * Collection of data layers (See {@link GMaps#addLayer})
			 *
			 * @type {object}
			 */
			this.singleLayers = {};
			/**
			 * Collection of map's markers
			 *
			 * @type {array}
			 */
			this.markers = [];
			/**
			 * Collection of map's lines
			 *
			 * @type {array}
			 */
			this.polylines = [];
			/**
			 * Collection of map's routes requested by {@link GMaps#getRoutes}, {@link GMaps#renderRoute}, {@link GMaps#drawRoute}, {@link GMaps#travelRoute} or {@link GMaps#drawSteppedRoute}
			 *
			 * @type {array}
			 */
			this.routes = [];
			/**
			 * Collection of map's polygons
			 *
			 * @type {array}
			 */
			this.polygons = [];
			this.infoWindow = null;
			this.overlay_el = null;
			/**
			 * Current map's zoom
			 *
			 * @type {number}
			 */
			this.zoom = options.zoom;
			this.registered_events = {};

			this.el.style.width = options.width || this.el.scrollWidth || this.el.offsetWidth;
			this.el.style.height = options.height || this.el.scrollHeight || this.el.offsetHeight;

			google.maps.visualRefresh = options.enableNewStyle;

			for (i = 0; i < options_to_be_deleted.length; i++) {
				delete options[options_to_be_deleted[i]];
			}

			if(options.disableDefaultUI != true) {
				map_base_options = extend_object(map_base_options, map_controls_options);
			}

			map_options = extend_object(map_base_options, options);

			for (i = 0; i < events_that_hide_context_menu.length; i++) {
				delete map_options[events_that_hide_context_menu[i]];
			}

			for (i = 0; i < events_that_doesnt_hide_context_menu.length; i++) {
				delete map_options[events_that_doesnt_hide_context_menu[i]];
			}

			/**
			 * Google Maps map instance
			 *
			 * @type {google.maps.Map}
			 */
			this.map = new google.maps.Map(this.el, map_options);

			if (markerClustererFunction) {
				/**
				 * Marker Clusterer instance
				 *
				 * @type {object}
				 */
				this.markerClusterer = markerClustererFunction.apply(this, [this.map]);
			}

			var buildContextMenuHTML = function(control, e) {
				var html = '',
					options = window.context_menu[self.el.id][control];

				for (var i in options){
					if (options.hasOwnProperty(i)) {
						var option = options[i];

						html += '<li><a id="' + control + '_' + i + '" href="#">' + option.title + '</a></li>';
					}
				}

				if (!getElementById('gmaps_context_menu')) return;

				var context_menu_element = getElementById('gmaps_context_menu');

				context_menu_element.innerHTML = html;

				var context_menu_items = context_menu_element.getElementsByTagName('a'),
					context_menu_items_count = context_menu_items.length,
					i;

				for (i = 0; i < context_menu_items_count; i++) {
					var context_menu_item = context_menu_items[i];

					var assign_menu_item_action = function(ev){
						ev.preventDefault();

						options[this.id.replace(control + '_', '')].action.apply(self, [e]);
						self.hideContextMenu();
					};

					google.maps.event.clearListeners(context_menu_item, 'click');
					google.maps.event.addDomListenerOnce(context_menu_item, 'click', assign_menu_item_action, false);
				}

				var position = findAbsolutePosition.apply(this, [self.el]),
					left = position[0] + e.pixel.x - 15,
					top = position[1] + e.pixel.y- 15;

				context_menu_element.style.left = left + "px";
				context_menu_element.style.top = top + "px";

				// context_menu_element.style.display = 'block';
			};

			this.buildContextMenu = function(control, e) {
				if (control === 'marker') {
					e.pixel = {};

					var overlay = new google.maps.OverlayView();
					overlay.setMap(self.map);

					overlay.draw = function() {
						var projection = overlay.getProjection(),
							position = e.marker.getPosition();

						e.pixel = projection.fromLatLngToContainerPixel(position);

						buildContextMenuHTML(control, e);
					};
				}
				else {
					buildContextMenuHTML(control, e);
				}

				var context_menu_element = getElementById('gmaps_context_menu');

				setTimeout(function() {
					context_menu_element.style.display = 'block';
				}, 0);
			};

			/**
			 * Add a context menu for a map or a marker.
			 *
			 * @param {object} options - The `options` object should contain:
			 * * `control` (string): Kind of control the context menu will be attached. Can be "map" or "marker".
			 * * `options` (array): A collection of context menu items:
			 *   * `title` (string): Item's title shown in the context menu.
			 *   * `name` (string): Item's identifier.
			 *   * `action` (function): Function triggered after selecting the context menu item.
			 */
			this.setContextMenu = function(options) {
				window.context_menu[self.el.id][options.control] = {};

				var i,
					ul = doc.createElement('ul');

				for (i in options.options) {
					if (options.options.hasOwnProperty(i)) {
						var option = options.options[i];

						window.context_menu[self.el.id][options.control][option.name] = {
							title: option.title,
							action: option.action
						};
					}
				}

				ul.id = 'gmaps_context_menu';
				ul.style.display = 'none';
				ul.style.position = 'absolute';
				ul.style.minWidth = '100px';
				ul.style.background = 'white';
				ul.style.listStyle = 'none';
				ul.style.padding = '8px';
				ul.style.boxShadow = '2px 2px 6px #ccc';

				if (!getElementById('gmaps_context_menu')) {
					doc.body.appendChild(ul);
				}

				var context_menu_element = getElementById('gmaps_context_menu');

				google.maps.event.addDomListener(context_menu_element, 'mouseout', function(ev) {
					if (!ev.relatedTarget || !this.contains(ev.relatedTarget)) {
						window.setTimeout(function(){
							context_menu_element.style.display = 'none';
						}, 400);
					}
				}, false);
			};

			/**
			 * Hide the current context menu
			 */
			this.hideContextMenu = function() {
				var context_menu_element = getElementById('gmaps_context_menu');

				if (context_menu_element) {
					context_menu_element.style.display = 'none';
				}
			};

			var setupListener = function(object, name) {
				google.maps.event.addListener(object, name, function(e){
					if (e == undefined) {
						e = this;
					}

					options[name].apply(this, [e]);

					self.hideContextMenu();
				});
			};

			//google.maps.event.addListener(this.map, 'idle', this.hideContextMenu);
			google.maps.event.addListener(this.map, 'zoom_changed', this.hideContextMenu);

			for (var ev = 0; ev < events_that_hide_context_menu.length; ev++) {
				var name = events_that_hide_context_menu[ev];

				if (name in options) {
					setupListener(this.map, name);
				}
			}

			for (var ev = 0; ev < events_that_doesnt_hide_context_menu.length; ev++) {
				var name = events_that_doesnt_hide_context_menu[ev];

				if (name in options) {
					setupListener(this.map, name);
				}
			}

			google.maps.event.addListener(this.map, 'rightclick', function(e) {
				if (options.rightclick) {
					options.rightclick.apply(this, [e]);
				}

				if(window.context_menu[self.el.id]['map'] != undefined) {
					self.buildContextMenu('map', e);
				}
			});

			/**
			 * Trigger a `resize` event, useful if you need to repaint the current map (for changes in the viewport or display / hide actions).
			 */
			this.refresh = function() {
				google.maps.event.trigger(this.map, 'resize');
			};

			/**
			 * Adjust the map zoom to include all the markers added in the map.
			 */
			this.fitZoom = function() {
				var latLngs = [],
					markers_length = this.markers.length,
					i;

				for (i = 0; i < markers_length; i++) {
					if(typeof(this.markers[i].visible) === 'boolean' && this.markers[i].visible) {
						latLngs.push(this.markers[i].getPosition());
					}
				}

				this.fitLatLngBounds(latLngs);
			};

			/**
			 * Adjust the map zoom to include all the coordinates in the `latLngs` array.
			 *
			 * @param {array} latLngs - Collection of `google.maps.LatLng` objects.
			 */
			this.fitLatLngBounds = function(latLngs) {
				var total = latLngs.length,
					bounds = new google.maps.LatLngBounds(),
					i;

				for(i = 0; i < total; i++) {
					bounds.extend(latLngs[i]);
				}

				this.map.fitBounds(bounds);
			};

			/**
			 * Center the map using the `lat` and `lng` coordinates.
			 *
			 * @param {number} lat - Latitude of the coordinate.
			 * @param {number} lng - Longitude of the coordinate.
			 * @param {function} [callback] - Callback that will be executed after the map is centered.
			 */
			this.setCenter = function(lat, lng, callback) {
				this.map.panTo(new google.maps.LatLng(lat, lng));

				if (callback) {
					callback();
				}
			};

			/**
			 * Return the HTML element container of the map.
			 *
			 * @returns {HTMLElement} the element container.
			 */
			this.getElement = function() {
				return this.el;
			};

			/**
			 * Increase the map's zoom.
			 *
			 * @param {number} [magnitude] - The number of times the map will be zoomed in.
			 */
			this.zoomIn = function(value) {
				value = value || 1;

				this.zoom = this.map.getZoom() + value;
				this.map.setZoom(this.zoom);
			};

			/**
			 * Decrease the map's zoom.
			 *
			 * @param {number} [magnitude] - The number of times the map will be zoomed out.
			 */
			this.zoomOut = function(value) {
				value = value || 1;

				this.zoom = this.map.getZoom() - value;
				this.map.setZoom(this.zoom);
			};

			var native_methods = [],
				method;

			for (method in this.map) {
				if (typeof(this.map[method]) == 'function' && !this[method]) {
					native_methods.push(method);
				}
			}

			for (i = 0; i < native_methods.length; i++) {
				(function(gmaps, scope, method_name) {
					gmaps[method_name] = function(){
						return scope[method_name].apply(scope, arguments);
					};
				})(this, this.map, native_methods[i]);
			}
		};

		return GMaps;
	})(this);

	GMaps.prototype.createControl = function(options) {
		var control = document.createElement('div');

		control.style.cursor = 'pointer';

		if (options.disableDefaultStyles !== true) {
			control.style.fontFamily = 'Roboto, Arial, sans-serif';
			control.style.fontSize = '11px';
			control.style.boxShadow = 'rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px';
		}

		for (var option in options.style) {
			control.style[option] = options.style[option];
		}

		if (options.id) {
			control.id = options.id;
		}

		if (options.title) {
			control.title = options.title;
		}

		if (options.classes) {
			control.className = options.classes;
		}

		if (options.content) {
			if (typeof options.content === 'string') {
				control.innerHTML = options.content;
			}
			else if (options.content instanceof HTMLElement) {
				control.appendChild(options.content);
			}
		}

		if (options.position) {
			control.position = google.maps.ControlPosition[options.position.toUpperCase()];
		}

		for (var ev in options.events) {
			(function(object, name) {
				google.maps.event.addDomListener(object, name, function(){
					options.events[name].apply(this, [this]);
				});
			})(control, ev);
		}

		control.index = 1;

		return control;
	};

	/**
	 * Add a custom control to the map UI.
	 *
	 * @param {object} options - The `options` object should contain:
	 * * `style` (object): The keys and values of this object should be valid CSS properties and values.
	 * * `id` (string): The HTML id for the custom control.
	 * * `classes` (string): A string containing all the HTML classes for the custom control.
	 * * `content` (string or HTML element): The content of the custom control.
	 * * `position` (string): Any valid [`google.maps.ControlPosition`](https://developers.google.com/maps/documentation/javascript/controls#ControlPositioning) value, in lower or upper case.
	 * * `events` (object): The keys of this object should be valid DOM events. The values should be functions.
	 * * `disableDefaultStyles` (boolean): If false, removes the default styles for the controls like font (family and size), and box shadow.
	 * @returns {HTMLElement}
	 */
	GMaps.prototype.addControl = function(options) {
		var control = this.createControl(options);

		this.controls.push(control);
		this.map.controls[control.position].push(control);

		return control;
	};

	/**
	 * Remove a control from the map. `control` should be a control returned by `addControl()`.
	 *
	 * @param {HTMLElement} control - One of the controls returned by `addControl()`.
	 * @returns {HTMLElement} the removed control.
	 */
	GMaps.prototype.removeControl = function(control) {
		var position = null,
			i;

		for (i = 0; i < this.controls.length; i++) {
			if (this.controls[i] == control) {
				position = this.controls[i].position;
				this.controls.splice(i, 1);
			}
		}

		if (position) {
			for (i = 0; i < this.map.controls.length; i++) {
				var controlsForPosition = this.map.controls[control.position];

				if (controlsForPosition.getAt(i) == control) {
					controlsForPosition.removeAt(i);

					break;
				}
			}
		}

		return control;
	};

	GMaps.prototype.createMarker = function(options) {
		if (options.lat == undefined && options.lng == undefined && options.position == undefined) {
			throw 'No latitude or longitude defined.';
		}

		var self = this,
			details = options.details,
			fences = options.fences,
			outside = options.outside,
			base_options = {
				position: new google.maps.LatLng(options.lat, options.lng),
				map: null
			},
			marker_options = extend_object(base_options, options);

		delete marker_options.lat;
		delete marker_options.lng;
		delete marker_options.fences;
		delete marker_options.outside;

		var marker = new google.maps.Marker(marker_options);

		marker.fences = fences;

		if (options.infoWindow) {
			marker.infoWindow = new google.maps.InfoWindow(options.infoWindow);

			var info_window_events = ['closeclick', 'content_changed', 'domready', 'position_changed', 'zindex_changed'];

			for (var ev = 0; ev < info_window_events.length; ev++) {
				(function(object, name) {
					if (options.infoWindow[name]) {
						google.maps.event.addListener(object, name, function(e){
							options.infoWindow[name].apply(this, [e]);
						});
					}
				})(marker.infoWindow, info_window_events[ev]);
			}
		}

		var marker_events = ['animation_changed', 'clickable_changed', 'cursor_changed', 'draggable_changed', 'flat_changed', 'icon_changed', 'position_changed', 'shadow_changed', 'shape_changed', 'title_changed', 'visible_changed', 'zindex_changed'];

		var marker_events_with_mouse = ['dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mouseout', 'mouseover', 'mouseup'];

		for (var ev = 0; ev < marker_events.length; ev++) {
			(function(object, name) {
				if (options[name]) {
					google.maps.event.addListener(object, name, function(){
						options[name].apply(this, [this]);
					});
				}
			})(marker, marker_events[ev]);
		}

		for (var ev = 0; ev < marker_events_with_mouse.length; ev++) {
			(function(map, object, name) {
				if (options[name]) {
					google.maps.event.addListener(object, name, function(me){
						if(!me.pixel){
							me.pixel = map.getProjection().fromLatLngToPoint(me.latLng)
						}

						options[name].apply(this, [me]);
					});
				}
			})(this.map, marker, marker_events_with_mouse[ev]);
		}

		google.maps.event.addListener(marker, 'click', function() {
			this.details = details;

			if (options.click) {
				options.click.apply(this, [this]);
			}

			if (marker.infoWindow) {
				self.hideInfoWindows();
				marker.infoWindow.open(self.map, marker);
			}
		});

		google.maps.event.addListener(marker, 'rightclick', function(e) {
			e.marker = this;

			if (options.rightclick) {
				options.rightclick.apply(this, [e]);
			}

			if (window.context_menu[self.el.id]['marker'] != undefined) {
				self.buildContextMenu('marker', e);
			}
		});

		if (marker.fences) {
			google.maps.event.addListener(marker, 'dragend', function() {
				self.checkMarkerGeofence(marker, function(m, f) {
					outside(m, f);
				});
			});
		}

		return marker;
	};

	GMaps.prototype.addMarker = function(options) {
		var marker;
		if(options.hasOwnProperty('gm_accessors_')) {
			// Native google.maps.Marker object
			marker = options;
		}
		else {
			if ((options.hasOwnProperty('lat') && options.hasOwnProperty('lng')) || options.position) {
				marker = this.createMarker(options);
			}
			else {
				throw 'No latitude or longitude defined.';
			}
		}

		marker.setMap(this.map);

		if(this.markerClusterer) {
			this.markerClusterer.addMarker(marker);
		}

		this.markers.push(marker);

		GMaps.fire('marker_added', marker, this);

		return marker;
	};

	GMaps.prototype.addMarkers = function(array) {
		for (var i = 0, marker; marker=array[i]; i++) {
			this.addMarker(marker);
		}

		return this.markers;
	};

	GMaps.prototype.hideInfoWindows = function() {
		for (var i = 0, marker; marker = this.markers[i]; i++){
			if (marker.infoWindow) {
				marker.infoWindow.close();
			}
		}
	};

	GMaps.prototype.removeMarker = function(marker) {
		for (var i = 0; i < this.markers.length; i++) {
			if (this.markers[i] === marker) {
				this.markers[i].setMap(null);
				this.markers.splice(i, 1);

				if(this.markerClusterer) {
					this.markerClusterer.removeMarker(marker);
				}

				GMaps.fire('marker_removed', marker, this);

				break;
			}
		}

		return marker;
	};

	GMaps.prototype.removeMarkers = function (collection) {
		var new_markers = [];

		if (typeof collection == 'undefined') {
			for (var i = 0; i < this.markers.length; i++) {
				var marker = this.markers[i];
				marker.setMap(null);

				GMaps.fire('marker_removed', marker, this);
			}

			if(this.markerClusterer && this.markerClusterer.clearMarkers) {
				this.markerClusterer.clearMarkers();
			}

			this.markers = new_markers;
		}
		else {
			for (var i = 0; i < collection.length; i++) {
				var index = this.markers.indexOf(collection[i]);

				if (index > -1) {
					var marker = this.markers[index];
					marker.setMap(null);

					if(this.markerClusterer) {
						this.markerClusterer.removeMarker(marker);
					}

					GMaps.fire('marker_removed', marker, this);
				}
			}

			for (var i = 0; i < this.markers.length; i++) {
				var marker = this.markers[i];
				if (marker.getMap() != null) {
					new_markers.push(marker);
				}
			}

			this.markers = new_markers;
		}
	};

	GMaps.prototype.drawOverlay = function(options) {
		var overlay = new google.maps.OverlayView(),
			auto_show = true;

		overlay.setMap(this.map);

		if (options.auto_show != null) {
			auto_show = options.auto_show;
		}

		overlay.onAdd = function() {
			var el = document.createElement('div');

			el.style.borderStyle = "none";
			el.style.borderWidth = "0px";
			el.style.position = "absolute";
			el.style.zIndex = 100;
			el.innerHTML = options.content;

			overlay.el = el;

			if (!options.layer) {
				options.layer = 'overlayLayer';
			}

			var panes = this.getPanes(),
				overlayLayer = panes[options.layer],
				stop_overlay_events = ['contextmenu', 'DOMMouseScroll', 'dblclick', 'mousedown'];

			overlayLayer.appendChild(el);

			for (var ev = 0; ev < stop_overlay_events.length; ev++) {
				(function(object, name) {
					google.maps.event.addDomListener(object, name, function(e){
						if (navigator.userAgent.toLowerCase().indexOf('msie') != -1 && document.all) {
							e.cancelBubble = true;
							e.returnValue = false;
						}
						else {
							e.stopPropagation();
						}
					});
				})(el, stop_overlay_events[ev]);
			}

			if (options.click) {
				panes.overlayMouseTarget.appendChild(overlay.el);
				google.maps.event.addDomListener(overlay.el, 'click', function() {
					options.click.apply(overlay, [overlay]);
				});
			}

			google.maps.event.trigger(this, 'ready');
		};

		overlay.draw = function() {
			var projection = this.getProjection(),
				pixel = projection.fromLatLngToDivPixel(new google.maps.LatLng(options.lat, options.lng));

			options.horizontalOffset = options.horizontalOffset || 0;
			options.verticalOffset = options.verticalOffset || 0;

			var el = overlay.el,
				content = el.children[0],
				content_height = content.clientHeight,
				content_width = content.clientWidth;

			switch (options.verticalAlign) {
				case 'top':
					el.style.top = (pixel.y - content_height + options.verticalOffset) + 'px';
					break;
				default:
				case 'middle':
					el.style.top = (pixel.y - (content_height / 2) + options.verticalOffset) + 'px';
					break;
				case 'bottom':
					el.style.top = (pixel.y + options.verticalOffset) + 'px';
					break;
			}

			switch (options.horizontalAlign) {
				case 'left':
					el.style.left = (pixel.x - content_width + options.horizontalOffset) + 'px';
					break;
				default:
				case 'center':
					el.style.left = (pixel.x - (content_width / 2) + options.horizontalOffset) + 'px';
					break;
				case 'right':
					el.style.left = (pixel.x + options.horizontalOffset) + 'px';
					break;
			}

			el.style.display = auto_show ? 'block' : 'none';

			if (!auto_show) {
				options.show.apply(this, [el]);
			}
		};

		overlay.onRemove = function() {
			var el = overlay.el;

			if (options.remove) {
				options.remove.apply(this, [el]);
			}
			else {
				overlay.el.parentNode.removeChild(overlay.el);
				overlay.el = null;
			}
		};

		this.overlays.push(overlay);
		return overlay;
	};

	GMaps.prototype.removeOverlay = function(overlay) {
		for (var i = 0; i < this.overlays.length; i++) {
			if (this.overlays[i] === overlay) {
				this.overlays[i].setMap(null);
				this.overlays.splice(i, 1);

				break;
			}
		}
	};

	GMaps.prototype.removeOverlays = function() {
		for (var i = 0, item; item = this.overlays[i]; i++) {
			item.setMap(null);
		}

		this.overlays = [];
	};

	GMaps.prototype.drawPolyline = function(options) {
		var path = [],
			points = options.path;

		if (points.length) {
			if (points[0][0] === undefined) {
				path = points;
			}
			else {
				for (var i = 0, latlng; latlng = points[i]; i++) {
					path.push(new google.maps.LatLng(latlng[0], latlng[1]));
				}
			}
		}

		var polyline_options = {
			map: this.map,
			path: path,
			strokeColor: options.strokeColor,
			strokeOpacity: options.strokeOpacity,
			strokeWeight: options.strokeWeight,
			geodesic: options.geodesic,
			clickable: true,
			editable: false,
			visible: true
		};

		if (options.hasOwnProperty("clickable")) {
			polyline_options.clickable = options.clickable;
		}

		if (options.hasOwnProperty("editable")) {
			polyline_options.editable = options.editable;
		}

		if (options.hasOwnProperty("icons")) {
			polyline_options.icons = options.icons;
		}

		if (options.hasOwnProperty("zIndex")) {
			polyline_options.zIndex = options.zIndex;
		}

		var polyline = new google.maps.Polyline(polyline_options);

		var polyline_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

		for (var ev = 0; ev < polyline_events.length; ev++) {
			(function(object, name) {
				if (options[name]) {
					google.maps.event.addListener(object, name, function(e){
						options[name].apply(this, [e]);
					});
				}
			})(polyline, polyline_events[ev]);
		}

		this.polylines.push(polyline);

		GMaps.fire('polyline_added', polyline, this);

		return polyline;
	};

	GMaps.prototype.removePolyline = function(polyline) {
		for (var i = 0; i < this.polylines.length; i++) {
			if (this.polylines[i] === polyline) {
				this.polylines[i].setMap(null);
				this.polylines.splice(i, 1);

				GMaps.fire('polyline_removed', polyline, this);

				break;
			}
		}
	};

	GMaps.prototype.removePolylines = function() {
		for (var i = 0, item; item = this.polylines[i]; i++) {
			item.setMap(null);
		}

		this.polylines = [];
	};

	GMaps.prototype.drawCircle = function(options) {
		options =  extend_object({
			map: this.map,
			center: new google.maps.LatLng(options.lat, options.lng)
		}, options);

		delete options.lat;
		delete options.lng;

		var polygon = new google.maps.Circle(options),
			polygon_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

		for (var ev = 0; ev < polygon_events.length; ev++) {
			(function(object, name) {
				if (options[name]) {
					google.maps.event.addListener(object, name, function(e){
						options[name].apply(this, [e]);
					});
				}
			})(polygon, polygon_events[ev]);
		}

		this.polygons.push(polygon);

		return polygon;
	};

	GMaps.prototype.drawRectangle = function(options) {
		options = extend_object({
			map: this.map
		}, options);

		var latLngBounds = new google.maps.LatLngBounds(
			new google.maps.LatLng(options.bounds[0][0], options.bounds[0][1]),
			new google.maps.LatLng(options.bounds[1][0], options.bounds[1][1])
		);

		options.bounds = latLngBounds;

		var polygon = new google.maps.Rectangle(options),
			polygon_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

		for (var ev = 0; ev < polygon_events.length; ev++) {
			(function(object, name) {
				if (options[name]) {
					google.maps.event.addListener(object, name, function(e){
						options[name].apply(this, [e]);
					});
				}
			})(polygon, polygon_events[ev]);
		}

		this.polygons.push(polygon);

		return polygon;
	};

	GMaps.prototype.drawPolygon = function(options) {
		var useGeoJSON = false;

		if(options.hasOwnProperty("useGeoJSON")) {
			useGeoJSON = options.useGeoJSON;
		}

		delete options.useGeoJSON;

		options = extend_object({
			map: this.map
		}, options);

		if (useGeoJSON == false) {
			options.paths = [options.paths.slice(0)];
		}

		if (options.paths.length > 0) {
			if (options.paths[0].length > 0) {
				options.paths = array_flat(array_map(options.paths, arrayToLatLng, useGeoJSON));
			}
		}

		var polygon = new google.maps.Polygon(options),
			polygon_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

		for (var ev = 0; ev < polygon_events.length; ev++) {
			(function(object, name) {
				if (options[name]) {
					google.maps.event.addListener(object, name, function(e){
						options[name].apply(this, [e]);
					});
				}
			})(polygon, polygon_events[ev]);
		}

		this.polygons.push(polygon);

		GMaps.fire('polygon_added', polygon, this);

		return polygon;
	};

	GMaps.prototype.removePolygon = function(polygon) {
		for (var i = 0; i < this.polygons.length; i++) {
			if (this.polygons[i] === polygon) {
				this.polygons[i].setMap(null);
				this.polygons.splice(i, 1);

				GMaps.fire('polygon_removed', polygon, this);

				break;
			}
		}
	};

	GMaps.prototype.removePolygons = function() {
		for (var i = 0, item; item = this.polygons[i]; i++) {
			item.setMap(null);
		}

		this.polygons = [];
	};

	GMaps.prototype.getFromFusionTables = function(options) {
		var events = options.events;

		delete options.events;

		var fusion_tables_options = options,
			layer = new google.maps.FusionTablesLayer(fusion_tables_options);

		for (var ev in events) {
			(function(object, name) {
				google.maps.event.addListener(object, name, function(e) {
					events[name].apply(this, [e]);
				});
			})(layer, ev);
		}

		this.layers.push(layer);

		return layer;
	};

	GMaps.prototype.loadFromFusionTables = function(options) {
		var layer = this.getFromFusionTables(options);
		layer.setMap(this.map);

		return layer;
	};

	GMaps.prototype.getFromKML = function(options) {
		var url = options.url,
			events = options.events;

		delete options.url;
		delete options.events;

		var kml_options = options,
			layer = new google.maps.KmlLayer(url, kml_options);

		for (var ev in events) {
			(function(object, name) {
				google.maps.event.addListener(object, name, function(e) {
					events[name].apply(this, [e]);
				});
			})(layer, ev);
		}

		this.layers.push(layer);

		return layer;
	};

	GMaps.prototype.loadFromKML = function(options) {
		var layer = this.getFromKML(options);
		layer.setMap(this.map);

		return layer;
	};

	GMaps.prototype.addLayer = function(layerName, options) {
		//var default_layers = ['weather', 'clouds', 'traffic', 'transit', 'bicycling', 'panoramio', 'places'];
		options = options || {};
		var layer;

		switch(layerName) {
			case 'weather': this.singleLayers.weather = layer = new google.maps.weather.WeatherLayer();
				break;
			case 'clouds': this.singleLayers.clouds = layer = new google.maps.weather.CloudLayer();
				break;
			case 'traffic': this.singleLayers.traffic = layer = new google.maps.TrafficLayer();
				break;
			case 'transit': this.singleLayers.transit = layer = new google.maps.TransitLayer();
				break;
			case 'bicycling': this.singleLayers.bicycling = layer = new google.maps.BicyclingLayer();
				break;
			case 'panoramio':
				this.singleLayers.panoramio = layer = new google.maps.panoramio.PanoramioLayer();
				layer.setTag(options.filter);
				delete options.filter;

				//click event
				if (options.click) {
					google.maps.event.addListener(layer, 'click', function(event) {
						options.click(event);
						delete options.click;
					});
				}
				break;
			case 'places':
				this.singleLayers.places = layer = new google.maps.places.PlacesService(this.map);

				//search, nearbySearch, radarSearch callback, Both are the same
				if (options.search || options.nearbySearch || options.radarSearch) {
					var placeSearchRequest  = {
						bounds : options.bounds || null,
						keyword : options.keyword || null,
						location : options.location || null,
						name : options.name || null,
						radius : options.radius || null,
						rankBy : options.rankBy || null,
						types : options.types || null
					};

					if (options.radarSearch) {
						layer.radarSearch(placeSearchRequest, options.radarSearch);
					}

					if (options.search) {
						layer.search(placeSearchRequest, options.search);
					}

					if (options.nearbySearch) {
						layer.nearbySearch(placeSearchRequest, options.nearbySearch);
					}
				}

				//textSearch callback
				if (options.textSearch) {
					var textSearchRequest  = {
						bounds : options.bounds || null,
						location : options.location || null,
						query : options.query || null,
						radius : options.radius || null
					};

					layer.textSearch(textSearchRequest, options.textSearch);
				}
				break;
		}

		if (layer !== undefined) {
			if (typeof layer.setOptions == 'function') {
				layer.setOptions(options);
			}
			if (typeof layer.setMap == 'function') {
				layer.setMap(this.map);
			}

			return layer;
		}
	};

	GMaps.prototype.removeLayer = function(layer) {
		if (typeof(layer) == "string" && this.singleLayers[layer] !== undefined) {
			this.singleLayers[layer].setMap(null);

			delete this.singleLayers[layer];
		}
		else {
			for (var i = 0; i < this.layers.length; i++) {
				if (this.layers[i] === layer) {
					this.layers[i].setMap(null);
					this.layers.splice(i, 1);

					break;
				}
			}
		}
	};

	var travelMode, unitSystem;

	GMaps.prototype.getRoutes = function(options) {
		switch (options.travelMode) {
			case 'bicycling':
				travelMode = google.maps.TravelMode.BICYCLING;
				break;
			case 'transit':
				travelMode = google.maps.TravelMode.TRANSIT;
				break;
			case 'driving':
				travelMode = google.maps.TravelMode.DRIVING;
				break;
			default:
				travelMode = google.maps.TravelMode.WALKING;
				break;
		}

		if (options.unitSystem === 'imperial') {
			unitSystem = google.maps.UnitSystem.IMPERIAL;
		}
		else {
			unitSystem = google.maps.UnitSystem.METRIC;
		}

		var base_options = {
				avoidHighways: false,
				avoidTolls: false,
				optimizeWaypoints: false,
				waypoints: []
			},
			request_options =  extend_object(base_options, options);

		request_options.origin = /string/.test(typeof options.origin) ? options.origin : new google.maps.LatLng(options.origin[0], options.origin[1]);
		request_options.destination = /string/.test(typeof options.destination) ? options.destination : new google.maps.LatLng(options.destination[0], options.destination[1]);
		request_options.travelMode = travelMode;
		request_options.unitSystem = unitSystem;

		delete request_options.callback;
		delete request_options.error;

		var self = this,
			routes = [],
			service = new google.maps.DirectionsService();

		service.route(request_options, function(result, status) {
			if (status === google.maps.DirectionsStatus.OK) {
				for (var r in result.routes) {
					if (result.routes.hasOwnProperty(r)) {
						routes.push(result.routes[r]);
					}
				}

				if (options.callback) {
					options.callback(routes, result, status);
				}
			}
			else {
				if (options.error) {
					options.error(result, status);
				}
			}
		});
	};

	GMaps.prototype.removeRoutes = function() {
		this.routes.length = 0;
	};

	GMaps.prototype.getElevations = function(options) {
		options = extend_object({
			locations: [],
			path : false,
			samples : 256
		}, options);

		if (options.locations.length > 0) {
			if (options.locations[0].length > 0) {
				options.locations = array_flat(array_map([options.locations], arrayToLatLng,  false));
			}
		}

		var callback = options.callback;
		delete options.callback;

		var service = new google.maps.ElevationService();

		//location request
		if (!options.path) {
			delete options.path;
			delete options.samples;

			service.getElevationForLocations(options, function(result, status) {
				if (callback && typeof(callback) === "function") {
					callback(result, status);
				}
			});
			//path request
		} else {
			var pathRequest = {
				path : options.locations,
				samples : options.samples
			};

			service.getElevationAlongPath(pathRequest, function(result, status) {
				if (callback && typeof(callback) === "function") {
					callback(result, status);
				}
			});
		}
	};

	GMaps.prototype.cleanRoute = GMaps.prototype.removePolylines;

	GMaps.prototype.renderRoute = function(options, renderOptions) {
		var self = this,
			panel = ((typeof renderOptions.panel === 'string') ? document.getElementById(renderOptions.panel.replace('#', '')) : renderOptions.panel),
			display;

		renderOptions.panel = panel;
		renderOptions = extend_object({
			map: this.map
		}, renderOptions);
		display = new google.maps.DirectionsRenderer(renderOptions);

		this.getRoutes({
			origin: options.origin,
			destination: options.destination,
			travelMode: options.travelMode,
			waypoints: options.waypoints,
			unitSystem: options.unitSystem,
			error: options.error,
			avoidHighways: options.avoidHighways,
			avoidTolls: options.avoidTolls,
			optimizeWaypoints: options.optimizeWaypoints,
			callback: function(routes, response, status) {
				if (status === google.maps.DirectionsStatus.OK) {
					display.setDirections(response);
				}
			}
		});
	};

	GMaps.prototype.drawRoute = function(options) {
		var self = this;

		this.getRoutes({
			origin: options.origin,
			destination: options.destination,
			travelMode: options.travelMode,
			waypoints: options.waypoints,
			unitSystem: options.unitSystem,
			error: options.error,
			avoidHighways: options.avoidHighways,
			avoidTolls: options.avoidTolls,
			optimizeWaypoints: options.optimizeWaypoints,
			callback: function(routes) {
				if (routes.length > 0) {
					var polyline_options = {
						path: routes[routes.length - 1].overview_path,
						strokeColor: options.strokeColor,
						strokeOpacity: options.strokeOpacity,
						strokeWeight: options.strokeWeight
					};

					if (options.hasOwnProperty("icons")) {
						polyline_options.icons = options.icons;
					}

					self.drawPolyline(polyline_options);

					if (options.callback) {
						options.callback(routes[routes.length - 1]);
					}
				}
			}
		});
	};

	GMaps.prototype.travelRoute = function(options) {
		if (options.origin && options.destination) {
			this.getRoutes({
				origin: options.origin,
				destination: options.destination,
				travelMode: options.travelMode,
				waypoints : options.waypoints,
				unitSystem: options.unitSystem,
				error: options.error,
				callback: function(e) {
					//start callback
					if (e.length > 0 && options.start) {
						options.start(e[e.length - 1]);
					}

					//step callback
					if (e.length > 0 && options.step) {
						var route = e[e.length - 1];
						if (route.legs.length > 0) {
							var steps = route.legs[0].steps;
							for (var i = 0, step; step = steps[i]; i++) {
								step.step_number = i;
								options.step(step, (route.legs[0].steps.length - 1));
							}
						}
					}

					//end callback
					if (e.length > 0 && options.end) {
						options.end(e[e.length - 1]);
					}
				}
			});
		}
		else if (options.route) {
			if (options.route.legs.length > 0) {
				var steps = options.route.legs[0].steps;
				for (var i = 0, step; step = steps[i]; i++) {
					step.step_number = i;
					options.step(step);
				}
			}
		}
	};

	GMaps.prototype.drawSteppedRoute = function(options) {
		var self = this;

		if (options.origin && options.destination) {
			this.getRoutes({
				origin: options.origin,
				destination: options.destination,
				travelMode: options.travelMode,
				waypoints : options.waypoints,
				error: options.error,
				callback: function(e) {
					//start callback
					if (e.length > 0 && options.start) {
						options.start(e[e.length - 1]);
					}

					//step callback
					if (e.length > 0 && options.step) {
						var route = e[e.length - 1];
						if (route.legs.length > 0) {
							var steps = route.legs[0].steps;
							for (var i = 0, step; step = steps[i]; i++) {
								step.step_number = i;
								var polyline_options = {
									path: step.path,
									strokeColor: options.strokeColor,
									strokeOpacity: options.strokeOpacity,
									strokeWeight: options.strokeWeight
								};

								if (options.hasOwnProperty("icons")) {
									polyline_options.icons = options.icons;
								}

								self.drawPolyline(polyline_options);
								options.step(step, (route.legs[0].steps.length - 1));
							}
						}
					}

					//end callback
					if (e.length > 0 && options.end) {
						options.end(e[e.length - 1]);
					}
				}
			});
		}
		else if (options.route) {
			if (options.route.legs.length > 0) {
				var steps = options.route.legs[0].steps;
				for (var i = 0, step; step = steps[i]; i++) {
					step.step_number = i;
					var polyline_options = {
						path: step.path,
						strokeColor: options.strokeColor,
						strokeOpacity: options.strokeOpacity,
						strokeWeight: options.strokeWeight
					};

					if (options.hasOwnProperty("icons")) {
						polyline_options.icons = options.icons;
					}

					self.drawPolyline(polyline_options);
					options.step(step);
				}
			}
		}
	};

	GMaps.Route = function(options) {
		this.origin = options.origin;
		this.destination = options.destination;
		this.waypoints = options.waypoints;

		this.map = options.map;
		this.route = options.route;
		this.step_count = 0;
		this.steps = this.route.legs[0].steps;
		this.steps_length = this.steps.length;

		var polyline_options = {
			path: new google.maps.MVCArray(),
			strokeColor: options.strokeColor,
			strokeOpacity: options.strokeOpacity,
			strokeWeight: options.strokeWeight
		};

		if (options.hasOwnProperty("icons")) {
			polyline_options.icons = options.icons;
		}

		this.polyline = this.map.drawPolyline(polyline_options).getPath();
	};

	GMaps.Route.prototype.getRoute = function(options) {
		var self = this;

		this.map.getRoutes({
			origin : this.origin,
			destination : this.destination,
			travelMode : options.travelMode,
			waypoints : this.waypoints || [],
			error: options.error,
			callback : function() {
				self.route = e[0];

				if (options.callback) {
					options.callback.call(self);
				}
			}
		});
	};

	GMaps.Route.prototype.back = function() {
		if (this.step_count > 0) {
			this.step_count--;
			var path = this.route.legs[0].steps[this.step_count].path;

			for (var p in path){
				if (path.hasOwnProperty(p)){
					this.polyline.pop();
				}
			}
		}
	};

	GMaps.Route.prototype.forward = function() {
		if (this.step_count < this.steps_length) {
			var path = this.route.legs[0].steps[this.step_count].path;

			for (var p in path){
				if (path.hasOwnProperty(p)){
					this.polyline.push(path[p]);
				}
			}
			this.step_count++;
		}
	};

	GMaps.prototype.checkGeofence = function(lat, lng, fence) {
		return fence.containsLatLng(new google.maps.LatLng(lat, lng));
	};

	GMaps.prototype.checkMarkerGeofence = function(marker, outside_callback) {
		if (marker.fences) {
			for (var i = 0, fence; fence = marker.fences[i]; i++) {
				var pos = marker.getPosition();
				if (!this.checkGeofence(pos.lat(), pos.lng(), fence)) {
					outside_callback(marker, fence);
				}
			}
		}
	};

	GMaps.prototype.toImage = function(options) {
		var options = options || {},
			static_map_options = {};

		static_map_options['size'] = options['size'] || [this.el.clientWidth, this.el.clientHeight];
		static_map_options['lat'] = this.getCenter().lat();
		static_map_options['lng'] = this.getCenter().lng();

		if (this.markers.length > 0) {
			static_map_options['markers'] = [];

			for (var i = 0; i < this.markers.length; i++) {
				static_map_options['markers'].push({
					lat: this.markers[i].getPosition().lat(),
					lng: this.markers[i].getPosition().lng()
				});
			}
		}

		if (this.polylines.length > 0) {
			var polyline = this.polylines[0];

			static_map_options['polyline'] = {};
			static_map_options['polyline']['path'] = google.maps.geometry.encoding.encodePath(polyline.getPath());
			static_map_options['polyline']['strokeColor'] = polyline.strokeColor
			static_map_options['polyline']['strokeOpacity'] = polyline.strokeOpacity
			static_map_options['polyline']['strokeWeight'] = polyline.strokeWeight
		}

		return GMaps.staticMapURL(static_map_options);
	};

	GMaps.staticMapURL = function(options){
		var parameters = [],
			data,
			static_root = (location.protocol === 'file:' ? 'http:' : location.protocol ) + '//maps.googleapis.com/maps/api/staticmap';

		if (options.url) {
			static_root = options.url;
			delete options.url;
		}

		static_root += '?';

		var markers = options.markers;

		delete options.markers;

		if (!markers && options.marker) {
			markers = [options.marker];
			delete options.marker;
		}

		var styles = options.styles;

		delete options.styles;

		var polyline = options.polyline;
		delete options.polyline;

		/** Map options **/
		if (options.center) {
			parameters.push('center=' + options.center);
			delete options.center;
		}
		else if (options.address) {
			parameters.push('center=' + options.address);
			delete options.address;
		}
		else if (options.lat) {
			parameters.push(['center=', options.lat, ',', options.lng].join(''));
			delete options.lat;
			delete options.lng;
		}
		else if (options.visible) {
			var visible = encodeURI(options.visible.join('|'));
			parameters.push('visible=' + visible);
		}

		var size = options.size;
		if (size) {
			if (size.join) {
				size = size.join('x');
			}
			delete options.size;
		}
		else {
			size = '630x300';
		}
		parameters.push('size=' + size);

		if (!options.zoom && options.zoom !== false) {
			options.zoom = 15;
		}

		var sensor = options.hasOwnProperty('sensor') ? !!options.sensor : true;
		delete options.sensor;
		parameters.push('sensor=' + sensor);

		for (var param in options) {
			if (options.hasOwnProperty(param)) {
				parameters.push(param + '=' + options[param]);
			}
		}

		/** Markers **/
		if (markers) {
			var marker, loc;

			for (var i = 0; data = markers[i]; i++) {
				marker = [];

				if (data.size && data.size !== 'normal') {
					marker.push('size:' + data.size);
					delete data.size;
				}
				else if (data.icon) {
					marker.push('icon:' + encodeURI(data.icon));
					delete data.icon;
				}

				if (data.color) {
					marker.push('color:' + data.color.replace('#', '0x'));
					delete data.color;
				}

				if (data.label) {
					marker.push('label:' + data.label[0].toUpperCase());
					delete data.label;
				}

				loc = (data.address ? data.address : data.lat + ',' + data.lng);
				delete data.address;
				delete data.lat;
				delete data.lng;

				for(var param in data){
					if (data.hasOwnProperty(param)) {
						marker.push(param + ':' + data[param]);
					}
				}

				if (marker.length || i === 0) {
					marker.push(loc);
					marker = marker.join('|');
					parameters.push('markers=' + encodeURI(marker));
				}
				// New marker without styles
				else {
					marker = parameters.pop() + encodeURI('|' + loc);
					parameters.push(marker);
				}
			}
		}

		/** Map Styles **/
		if (styles) {
			for (var i = 0; i < styles.length; i++) {
				var styleRule = [];
				if (styles[i].featureType){
					styleRule.push('feature:' + styles[i].featureType.toLowerCase());
				}

				if (styles[i].elementType) {
					styleRule.push('element:' + styles[i].elementType.toLowerCase());
				}

				for (var j = 0; j < styles[i].stylers.length; j++) {
					for (var p in styles[i].stylers[j]) {
						var ruleArg = styles[i].stylers[j][p];
						if (p == 'hue' || p == 'color') {
							ruleArg = '0x' + ruleArg.substring(1);
						}
						styleRule.push(p + ':' + ruleArg);
					}
				}

				var rule = styleRule.join('|');
				if (rule != '') {
					parameters.push('style=' + rule);
				}
			}
		}

		/** Polylines **/
		function parseColor(color, opacity) {
			if (color[0] === '#'){
				color = color.replace('#', '0x');

				if (opacity) {
					opacity = parseFloat(opacity);
					opacity = Math.min(1, Math.max(opacity, 0));
					if (opacity === 0) {
						return '0x00000000';
					}
					opacity = (opacity * 255).toString(16);
					if (opacity.length === 1) {
						opacity += opacity;
					}

					color = color.slice(0,8) + opacity;
				}
			}
			return color;
		}

		if (polyline) {
			data = polyline;
			polyline = [];

			if (data.strokeWeight) {
				polyline.push('weight:' + parseInt(data.strokeWeight, 10));
			}

			if (data.strokeColor) {
				var color = parseColor(data.strokeColor, data.strokeOpacity);
				polyline.push('color:' + color);
			}

			if (data.fillColor) {
				var fillcolor = parseColor(data.fillColor, data.fillOpacity);
				polyline.push('fillcolor:' + fillcolor);
			}

			var path = data.path;
			if (path.join) {
				for (var j=0, pos; pos=path[j]; j++) {
					polyline.push(pos.join(','));
				}
			}
			else {
				polyline.push('enc:' + path);
			}

			polyline = polyline.join('|');
			parameters.push('path=' + encodeURI(polyline));
		}

		/** Retina support **/
		var dpi = window.devicePixelRatio || 1;
		parameters.push('scale=' + dpi);

		parameters = parameters.join('&');
		return static_root + parameters;
	};

	GMaps.prototype.addMapType = function(mapTypeId, options) {
		if (options.hasOwnProperty("getTileUrl") && typeof(options["getTileUrl"]) == "function") {
			options.tileSize = options.tileSize || new google.maps.Size(256, 256);

			var mapType = new google.maps.ImageMapType(options);

			this.map.mapTypes.set(mapTypeId, mapType);
		}
		else {
			throw "'getTileUrl' function required.";
		}
	};

	GMaps.prototype.addOverlayMapType = function(options) {
		if (options.hasOwnProperty("getTile") && typeof(options["getTile"]) == "function") {
			var overlayMapTypeIndex = options.index;

			delete options.index;

			this.map.overlayMapTypes.insertAt(overlayMapTypeIndex, options);
		}
		else {
			throw "'getTile' function required.";
		}
	};

	GMaps.prototype.removeOverlayMapType = function(overlayMapTypeIndex) {
		this.map.overlayMapTypes.removeAt(overlayMapTypeIndex);
	};

	GMaps.prototype.addStyle = function(options) {
		var styledMapType = new google.maps.StyledMapType(options.styles, { name: options.styledMapName });

		this.map.mapTypes.set(options.mapTypeId, styledMapType);
	};

	GMaps.prototype.setStyle = function(mapTypeId) {
		this.map.setMapTypeId(mapTypeId);
	};

	GMaps.prototype.createPanorama = function(streetview_options) {
		if (!streetview_options.hasOwnProperty('lat') || !streetview_options.hasOwnProperty('lng')) {
			streetview_options.lat = this.getCenter().lat();
			streetview_options.lng = this.getCenter().lng();
		}

		this.panorama = GMaps.createPanorama(streetview_options);

		this.map.setStreetView(this.panorama);

		return this.panorama;
	};

	GMaps.createPanorama = function(options) {
		var el = getElementById(options.el, options.context);

		options.position = new google.maps.LatLng(options.lat, options.lng);

		delete options.el;
		delete options.context;
		delete options.lat;
		delete options.lng;

		var streetview_events = ['closeclick', 'links_changed', 'pano_changed', 'position_changed', 'pov_changed', 'resize', 'visible_changed'],
			streetview_options = extend_object({visible : true}, options);

		for (var i = 0; i < streetview_events.length; i++) {
			delete streetview_options[streetview_events[i]];
		}

		var panorama = new google.maps.StreetViewPanorama(el, streetview_options);

		for (var i = 0; i < streetview_events.length; i++) {
			(function(object, name) {
				if (options[name]) {
					google.maps.event.addListener(object, name, function(){
						options[name].apply(this);
					});
				}
			})(panorama, streetview_events[i]);
		}

		return panorama;
	};

	GMaps.prototype.on = function(event_name, handler) {
		return GMaps.on(event_name, this, handler);
	};

	GMaps.prototype.off = function(event_name) {
		GMaps.off(event_name, this);
	};

	GMaps.prototype.once = function(event_name, handler) {
		return GMaps.once(event_name, this, handler);
	};

	GMaps.custom_events = ['marker_added', 'marker_removed', 'polyline_added', 'polyline_removed', 'polygon_added', 'polygon_removed', 'geolocated', 'geolocation_failed'];

	GMaps.on = function(event_name, object, handler) {
		if (GMaps.custom_events.indexOf(event_name) == -1) {
			if(object instanceof GMaps) object = object.map;
			return google.maps.event.addListener(object, event_name, handler);
		}
		else {
			var registered_event = {
				handler : handler,
				eventName : event_name
			};

			object.registered_events[event_name] = object.registered_events[event_name] || [];
			object.registered_events[event_name].push(registered_event);

			return registered_event;
		}
	};

	GMaps.off = function(event_name, object) {
		if (GMaps.custom_events.indexOf(event_name) == -1) {
			if(object instanceof GMaps) object = object.map;
			google.maps.event.clearListeners(object, event_name);
		}
		else {
			object.registered_events[event_name] = [];
		}
	};

	GMaps.once = function(event_name, object, handler) {
		if (GMaps.custom_events.indexOf(event_name) == -1) {
			if(object instanceof GMaps) object = object.map;
			return google.maps.event.addListenerOnce(object, event_name, handler);
		}
	};

	GMaps.fire = function(event_name, object, scope) {
		if (GMaps.custom_events.indexOf(event_name) == -1) {
			google.maps.event.trigger(object, event_name, Array.prototype.slice.apply(arguments).slice(2));
		}
		else {
			if(event_name in scope.registered_events) {
				var firing_events = scope.registered_events[event_name];

				for(var i = 0; i < firing_events.length; i++) {
					(function(handler, scope, object) {
						handler.apply(scope, [object]);
					})(firing_events[i]['handler'], scope, object);
				}
			}
		}
	};

	GMaps.geolocate = function(options) {
		var complete_callback = options.always || options.complete;

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				options.success(position);

				if (complete_callback) {
					complete_callback();
				}
			}, function(error) {
				options.error(error);

				if (complete_callback) {
					complete_callback();
				}
			}, options.options);
		}
		else {
			options.not_supported();

			if (complete_callback) {
				complete_callback();
			}
		}
	};

	GMaps.geocode = function(options) {
		this.geocoder = new google.maps.Geocoder();
		var callback = options.callback;
		if (options.hasOwnProperty('lat') && options.hasOwnProperty('lng')) {
			options.latLng = new google.maps.LatLng(options.lat, options.lng);
		}

		delete options.lat;
		delete options.lng;
		delete options.callback;

		this.geocoder.geocode(options, function(results, status) {
			callback(results, status);
		});
	};

	if (typeof window.google === 'object' && window.google.maps) {
		//==========================
		// Polygon containsLatLng
		// https://github.com/tparkin/Google-Maps-Point-in-Polygon
		// Poygon getBounds extension - google-maps-extensions
		// http://code.google.com/p/google-maps-extensions/source/browse/google.maps.Polygon.getBounds.js
		if (!google.maps.Polygon.prototype.getBounds) {
			google.maps.Polygon.prototype.getBounds = function(latLng) {
				var bounds = new google.maps.LatLngBounds();
				var paths = this.getPaths();
				var path;

				for (var p = 0; p < paths.getLength(); p++) {
					path = paths.getAt(p);
					for (var i = 0; i < path.getLength(); i++) {
						bounds.extend(path.getAt(i));
					}
				}

				return bounds;
			};
		}

		if (!google.maps.Polygon.prototype.containsLatLng) {
			// Polygon containsLatLng - method to determine if a latLng is within a polygon
			google.maps.Polygon.prototype.containsLatLng = function(latLng) {
				// Exclude points outside of bounds as there is no way they are in the poly
				var bounds = this.getBounds();

				if (bounds !== null && !bounds.contains(latLng)) {
					return false;
				}

				// Raycast point in polygon method
				var inPoly = false;

				var numPaths = this.getPaths().getLength();
				for (var p = 0; p < numPaths; p++) {
					var path = this.getPaths().getAt(p);
					var numPoints = path.getLength();
					var j = numPoints - 1;

					for (var i = 0; i < numPoints; i++) {
						var vertex1 = path.getAt(i);
						var vertex2 = path.getAt(j);

						if (vertex1.lng() < latLng.lng() && vertex2.lng() >= latLng.lng() || vertex2.lng() < latLng.lng() && vertex1.lng() >= latLng.lng()) {
							if (vertex1.lat() + (latLng.lng() - vertex1.lng()) / (vertex2.lng() - vertex1.lng()) * (vertex2.lat() - vertex1.lat()) < latLng.lat()) {
								inPoly = !inPoly;
							}
						}

						j = i;
					}
				}

				return inPoly;
			};
		}

		if (!google.maps.Circle.prototype.containsLatLng) {
			google.maps.Circle.prototype.containsLatLng = function(latLng) {
				if (google.maps.geometry) {
					return google.maps.geometry.spherical.computeDistanceBetween(this.getCenter(), latLng) <= this.getRadius();
				}
				else {
					return true;
				}
			};
		}

		google.maps.Rectangle.prototype.containsLatLng = function(latLng) {
			return this.getBounds().contains(latLng);
		};

		google.maps.LatLngBounds.prototype.containsLatLng = function(latLng) {
			return this.contains(latLng);
		};

		google.maps.Marker.prototype.setFences = function(fences) {
			this.fences = fences;
		};

		google.maps.Marker.prototype.addFence = function(fence) {
			this.fences.push(fence);
		};

		google.maps.Marker.prototype.getId = function() {
			return this['__gm_id'];
		};
	}

//==========================
// Array indexOf
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/indexOf
	if (!Array.prototype.indexOf) {
		Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
			"use strict";
			if (this == null) {
				throw new TypeError();
			}
			var t = Object(this);
			var len = t.length >>> 0;
			if (len === 0) {
				return -1;
			}
			var n = 0;
			if (arguments.length > 1) {
				n = Number(arguments[1]);
				if (n != n) { // shortcut for verifying if it's NaN
					n = 0;
				} else if (n != 0 && n != Infinity && n != -Infinity) {
					n = (n > 0 || -1) * Math.floor(Math.abs(n));
				}
			}
			if (n >= len) {
				return -1;
			}
			var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
			for (; k < len; k++) {
				if (k in t && t[k] === searchElement) {
					return k;
				}
			}
			return -1;
		}
	}

	return GMaps;
}));