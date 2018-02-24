(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 750,
	height: 1220,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/cv/cm_line.png", id:"cm_line"},
		{src:"images/cv/s1211s.png", id:"s1211s"},
		{src:"images/cv/s1212s.png", id:"s1212s"},
		{src:"images/cv/s1213s.png", id:"s1213s"},
		{src:"images/cv/s1214s.png", id:"s1214s"},
		{src:"images/cv/s1215s.png", id:"s1215s"},
		{src:"images/cv/s12210s.png", id:"s12210s"},
		{src:"images/cv/s12211s.png", id:"s12211s"},
		{src:"images/cv/s12212s.png", id:"s12212s"},
		{src:"images/cv/s12213s.png", id:"s12213s"},
		{src:"images/cv/s12214s.png", id:"s12214s"},
		{src:"images/cv/s12215s.png", id:"s12215s"},
		{src:"images/cv/s12216s.png", id:"s12216s"},
		{src:"images/cv/s12216s_1.png", id:"s12216s_1"},
		{src:"images/cv/s12217s.png", id:"s12217s"},
		{src:"images/cv/s12218s.png", id:"s12218s"},
		{src:"images/cv/s12219s.png", id:"s12219s"},
		{src:"images/cv/s1221s.png", id:"s1221s"},
		{src:"images/cv/s12220s.png", id:"s12220s"},
		{src:"images/cv/s12221s.png", id:"s12221s"},
		{src:"images/cv/s12222s.png", id:"s12222s"},
		{src:"images/cv/s12223s.png", id:"s12223s"},
		{src:"images/cv/s12224s.png", id:"s12224s"},
		{src:"images/cv/s12225s.png", id:"s12225s"},
		{src:"images/cv/s1222s.png", id:"s1222s"},
		{src:"images/cv/s1223s.png", id:"s1223s"},
		{src:"images/cv/s1224s.png", id:"s1224s"},
		{src:"images/cv/s1225s.png", id:"s1225s"},
		{src:"images/cv/s1226s.png", id:"s1226s"},
		{src:"images/cv/s1227s.png", id:"s1227s"},
		{src:"images/cv/s1228s.png", id:"s1228s"},
		{src:"images/cv/s1229s.png", id:"s1229s"},
		{src:"images/cv/s12310s.png", id:"s12310s"},
		{src:"images/cv/s12311s.png", id:"s12311s"},
		{src:"images/cv/s12312s.png", id:"s12312s"},
		{src:"images/cv/s12313s.png", id:"s12313s"},
		{src:"images/cv/s12314s.png", id:"s12314s"},
		{src:"images/cv/s12315s.png", id:"s12315s"},
		{src:"images/cv/s12316s.png", id:"s12316s"},
		{src:"images/cv/s12317s.png", id:"s12317s"},
		{src:"images/cv/s12318s.png", id:"s12318s"},
		{src:"images/cv/s1231s.png", id:"s1231s"},
		{src:"images/cv/s1232s.png", id:"s1232s"},
		{src:"images/cv/s1233s.png", id:"s1233s"},
		{src:"images/cv/s1234s.png", id:"s1234s"},
		{src:"images/cv/s1235s.png", id:"s1235s"},
		{src:"images/cv/s1236s.png", id:"s1236s"},
		{src:"images/cv/s1237s.png", id:"s1237s"},
		{src:"images/cv/s1238s.png", id:"s1238s"},
		{src:"images/cv/s1239s.png", id:"s1239s"},
		{src:"images/cv/s12410s.png", id:"s12410s"},
		{src:"images/cv/s12411s.png", id:"s12411s"},
		{src:"images/cv/s12412s.png", id:"s12412s"},
		{src:"images/cv/s12413s.png", id:"s12413s"},
		{src:"images/cv/s12414s.png", id:"s12414s"},
		{src:"images/cv/s12415s.png", id:"s12415s"},
		{src:"images/cv/s12416s.png", id:"s12416s"},
		{src:"images/cv/s1241s.png", id:"s1241s"},
		{src:"images/cv/s1243s.png", id:"s1243s"},
		{src:"images/cv/s1244s.png", id:"s1244s"},
		{src:"images/cv/s1245s.png", id:"s1245s"},
		{src:"images/cv/s1246s.png", id:"s1246s"},
		{src:"images/cv/s1247s.jpg", id:"s1247s"},
		{src:"images/cv/s1248s.png", id:"s1248s"},
		{src:"images/cv/s1249s.png", id:"s1249s"},
		{src:"images/cv/s1251s.png", id:"s1251s"},
		{src:"images/cv/s1252s.png", id:"s1252s"},
		{src:"images/cv/s1253s.png", id:"s1253s"},
		{src:"images/cv/s1254s.png", id:"s1254s"},
		{src:"images/cv/s1255s.png", id:"s1255s"},
		{src:"images/cv/s1256s.png", id:"s1256s"},
		{src:"images/cv/s1257s.png", id:"s1257s"},
		{src:"images/cv/s1258s.png", id:"s1258s"}
	]
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.cm_line = function() {
	this.initialize(img.cm_line);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,1862);


(lib.s1211s = function() {
	this.initialize(img.s1211s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,389,315);


(lib.s1212s = function() {
	this.initialize(img.s1212s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,315,464);


(lib.s1213s = function() {
	this.initialize(img.s1213s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,185,230);


(lib.s1214s = function() {
	this.initialize(img.s1214s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,841,1216);


(lib.s1215s = function() {
	this.initialize(img.s1215s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,159);


(lib.s12210s = function() {
	this.initialize(img.s12210s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,783,252);


(lib.s12211s = function() {
	this.initialize(img.s12211s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,758,244);


(lib.s12212s = function() {
	this.initialize(img.s12212s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,681,244);


(lib.s12213s = function() {
	this.initialize(img.s12213s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,681,244);


(lib.s12214s = function() {
	this.initialize(img.s12214s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,679,244);


(lib.s12215s = function() {
	this.initialize(img.s12215s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,679,244);


(lib.s12216s = function() {
	this.initialize(img.s12216s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,357,1015);


(lib.s12216s_1 = function() {
	this.initialize(img.s12216s_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,679,244);


(lib.s12217s = function() {
	this.initialize(img.s12217s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,1074);


(lib.s12218s = function() {
	this.initialize(img.s12218s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,239,1035);


(lib.s12219s = function() {
	this.initialize(img.s12219s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,1031);


(lib.s1221s = function() {
	this.initialize(img.s1221s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,488,350);


(lib.s12220s = function() {
	this.initialize(img.s12220s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,236,1042);


(lib.s12221s = function() {
	this.initialize(img.s12221s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,282,1010);


(lib.s12222s = function() {
	this.initialize(img.s12222s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,1015);


(lib.s12223s = function() {
	this.initialize(img.s12223s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,239,1033);


(lib.s12224s = function() {
	this.initialize(img.s12224s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,236,1059);


(lib.s12225s = function() {
	this.initialize(img.s12225s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,235,1071);


(lib.s1222s = function() {
	this.initialize(img.s1222s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,138);


(lib.s1223s = function() {
	this.initialize(img.s1223s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,430,199);


(lib.s1224s = function() {
	this.initialize(img.s1224s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,809,1287);


(lib.s1225s = function() {
	this.initialize(img.s1225s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,102);


(lib.s1226s = function() {
	this.initialize(img.s1226s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,130);


(lib.s1227s = function() {
	this.initialize(img.s1227s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,287,167);


(lib.s1228s = function() {
	this.initialize(img.s1228s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,347,196);


(lib.s1229s = function() {
	this.initialize(img.s1229s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,590,236);


(lib.s12310s = function() {
	this.initialize(img.s12310s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,788,447);


(lib.s12311s = function() {
	this.initialize(img.s12311s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,189,113);


(lib.s12312s = function() {
	this.initialize(img.s12312s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,126);


(lib.s12313s = function() {
	this.initialize(img.s12313s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,231);


(lib.s12314s = function() {
	this.initialize(img.s12314s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,124);


(lib.s12315s = function() {
	this.initialize(img.s12315s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,772,816);


(lib.s12316s = function() {
	this.initialize(img.s12316s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,489,721);


(lib.s12317s = function() {
	this.initialize(img.s12317s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,602,89);


(lib.s12318s = function() {
	this.initialize(img.s12318s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,242);


(lib.s1231s = function() {
	this.initialize(img.s1231s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,147);


(lib.s1232s = function() {
	this.initialize(img.s1232s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,486,255);


(lib.s1233s = function() {
	this.initialize(img.s1233s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,257);


(lib.s1234s = function() {
	this.initialize(img.s1234s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,472,251);


(lib.s1235s = function() {
	this.initialize(img.s1235s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,452,235);


(lib.s1236s = function() {
	this.initialize(img.s1236s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,454,234);


(lib.s1237s = function() {
	this.initialize(img.s1237s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,453,234);


(lib.s1238s = function() {
	this.initialize(img.s1238s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,374,321);


(lib.s1239s = function() {
	this.initialize(img.s1239s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,688,398);


(lib.s12410s = function() {
	this.initialize(img.s12410s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,62);


(lib.s12411s = function() {
	this.initialize(img.s12411s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,777,719);


(lib.s12412s = function() {
	this.initialize(img.s12412s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,76);


(lib.s12413s = function() {
	this.initialize(img.s12413s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,80);


(lib.s12414s = function() {
	this.initialize(img.s12414s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,86);


(lib.s12415s = function() {
	this.initialize(img.s12415s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,643,722);


(lib.s12416s = function() {
	this.initialize(img.s12416s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,515,502);


(lib.s1241s = function() {
	this.initialize(img.s1241s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,243,209);


(lib.s1243s = function() {
	this.initialize(img.s1243s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,773,514);


(lib.s1244s = function() {
	this.initialize(img.s1244s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,771,429);


(lib.s1245s = function() {
	this.initialize(img.s1245s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,762,503);


(lib.s1246s = function() {
	this.initialize(img.s1246s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,777,501);


(lib.s1247s = function() {
	this.initialize(img.s1247s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,499);


(lib.s1248s = function() {
	this.initialize(img.s1248s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,80);


(lib.s1249s = function() {
	this.initialize(img.s1249s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,75);


(lib.s1251s = function() {
	this.initialize(img.s1251s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1052,976);


(lib.s1252s = function() {
	this.initialize(img.s1252s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,178,157);


(lib.s1253s = function() {
	this.initialize(img.s1253s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,483,210);


(lib.s1254s = function() {
	this.initialize(img.s1254s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,315,454);


(lib.s1255s = function() {
	this.initialize(img.s1255s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,880,320);


(lib.s1256s = function() {
	this.initialize(img.s1256s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,785,1267);


(lib.s1257s = function() {
	this.initialize(img.s1257s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,796,286);


(lib.s1258s = function() {
	this.initialize(img.s1258s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,913,338);


(lib.s1257 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1258s();
	this.instance.setTransform(0,0,0.706,0.706);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,644.9,238.8);


(lib.s1256 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1257s();
	this.instance.setTransform(0,0,0.706,0.706);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,562.2,202);


(lib.s1255 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1251s();
	this.instance.setTransform(0,0,0.967,0.967);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1016.8,943.4);


(lib.s1253 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1254s();
	this.instance.setTransform(0,0,0.936,0.936);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,294.8,424.9);


(lib.s1252 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1253s();
	this.instance.setTransform(0,0,0.941,0.941);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,454.7,197.7);


(lib.s1251 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1252s();
	this.instance.setTransform(0,0,0.941,0.941);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,167.6,147.8);


(lib.s12416 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s12416s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,515,502);


(lib.s12414 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1247s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,499);


(lib.s12412 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cm_line();
	this.instance.setTransform(1110.8,0,0.597,0.597,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1110.8,715.9);


(lib.s12411 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1241s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,243,209);


(lib.s12410 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1244s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,771,429);


(lib.s1249 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1243s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,773,514);


(lib.s1247 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s12413s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83,80);


(lib.s1246 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s12414s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,86,86);


(lib.s1245 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s12412s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78,76);


(lib.s1244 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1248s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,80);


(lib.s1242 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s12415s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,643,722);


(lib.s1241 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s12411s();
	this.instance.setTransform(0,0,1.022,1.022);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,794,734.7);


(lib.s12314 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1231s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71,147);


(lib.s12313 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1238s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,374,321);


(lib.s12312 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1232s();

	this.instance_1 = new lib.s1233s();

	this.instance_2 = new lib.s1234s();
	this.instance_2.setTransform(2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,486,255);


(lib.s12311 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1235s();

	this.instance_1 = new lib.s1236s();
	this.instance_1.setTransform(-2,0);

	this.instance_2 = new lib.s1237s();
	this.instance_2.setTransform(3,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,452,235);


(lib.s12310 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1239s();
	this.instance.setTransform(0,0,1.073,1.073);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,738,426.9);


(lib.s1239 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s12310s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,788,447);


(lib.s1238 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s12312s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,126);


(lib.s1237 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s12313s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,133,231);


(lib.s1236 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s12314s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,127,124);


(lib.s1235 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s12318s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,162,242);


(lib.s1234 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s12317s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,602,89);


(lib.s1233 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s12316s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,489,721);


(lib.s1232 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s12311s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,189,113);


(lib.s1231 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s12315s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,772,816);


(lib.s1223 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1223s();
	this.instance.setTransform(0,0,0.944,0.944);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,406,187.9);


(lib.s1222 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1221s();
	this.instance.setTransform(0,0,0.931,0.931);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,454.6,326);


(lib.s1221 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1222s();
	this.instance.setTransform(0,0,0.978,0.978);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,127.2,135);


(lib.s1214 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1211s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,389,315);


(lib.s1213 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1215s();
	this.instance.setTransform(0,8.5,1,1,-4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114.8,166.9);


(lib.s1212 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1213s();
	this.instance.setTransform(0,7.2,1,1,-2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,193.8,237);


(lib.s1254 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1255();
	this.instance.setTransform(508.4,471.7,1,1,0,0,0,508.4,471.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:471.6,scaleX:1.03,scaleY:1.03,x:508.5},3).to({regY:471.7,scaleX:1,scaleY:1,x:508.4},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1016.8,943.4);


(lib.s12415 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s12414();
	this.instance.setTransform(375,249.5,1,1,0,0,0,375,249.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,499);


(lib.s12413 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s12415();
	this.instance.setTransform(375,249.5,1,1,0,0,0,375,249.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.07,scaleY:1.07,y:249.6},2).to({scaleX:1,scaleY:1,y:249.5},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,499);


(lib.s1248 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s12412();
	this.instance.setTransform(555.4,357.9,1,1,0,0,0,555.4,357.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:358.1,scaleX:0.86,scaleY:0.86,x:555.5,y:358.1},3).to({regY:357.9,scaleX:1,scaleY:1,x:555.4,y:357.9},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1110.8,715.9);


(lib.s1243 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s12416();
	this.instance.setTransform(257.5,251,1,1,0,0,0,257.5,251);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},2).to({alpha:1},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,515,502);


(lib.s1224 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1222();
	this.instance.setTransform(227.2,165,1,1,0,0,0,227.2,163);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,2,454.6,326);


(lib.s12 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_198 = function() {
		this.stop();
		try{app.showBtns()}catch(e){}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(198).call(this.frame_198).wait(1));

	// 图层 3
	this.instance = new lib.s1257();
	this.instance.setTransform(-328,182.4,1,1,0,0,0,322.4,119.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(168).to({_off:false},0).wait(1).to({x:-114.9},0).wait(1).to({x:47.4},0).wait(1).to({x:169.6},0).wait(1).to({x:253.8},0).wait(1).to({x:314.5},0).wait(1).to({x:365.4},0).wait(25));

	// 图层 2
	this.instance_1 = new lib.s1256();
	this.instance_1.setTransform(-312.3,443,1,1,0,0,0,281.1,101);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(169).to({_off:false},0).wait(1).to({x:-96.1},0).wait(1).to({x:70},0).wait(1).to({x:190.4},0).wait(1).to({x:274.6},0).wait(1).to({x:337.1},0).wait(1).to({x:381.1},0).wait(24));

	// 女
	this.instance_2 = new lib.s1253();
	this.instance_2.setTransform(584.4,771.5,1,1,0,0,0,147.4,212.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(167).to({_off:false},0).wait(4).to({regY:212.4,x:600.2,y:771.4},0).wait(1).to({x:612.9},0).wait(1).to({x:623.6},0).wait(1).to({x:633.1},0).wait(1).to({x:641.6},0).wait(1).to({x:649.4},0).wait(1).to({x:656.6},0).wait(1).to({x:663.3},0).wait(1).to({x:669.5},0).wait(1).to({x:675.4},0).wait(1).to({x:680.8},0).wait(1).to({x:685.7},0).wait(1).to({x:690},0).wait(1).to({x:693.7},0).wait(1).to({x:696.9},0).wait(1).to({x:699.6},0).wait(1).to({x:701.8},0).wait(1).to({x:703.5},0).wait(1).to({x:704.9},0).wait(1).to({regY:212.5,x:706,y:771.5},0).wait(9));

	// 身
	this.instance_3 = new lib.s1252();
	this.instance_3.setTransform(221.7,933.8,1,1,0,0,0,227.3,98.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(167).to({_off:false},0).to({x:213.7},10).to({x:209.7},15).wait(7));

	// 头
	this.instance_4 = new lib.s1251();
	this.instance_4.setTransform(204.8,799.3,1,1,0,0,0,83.8,73.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(167).to({_off:false},0).wait(1).to({y:801.7},0).wait(1).to({x:203.8,y:804.1},0).wait(1).to({x:202.8,y:806.5},0).wait(1).to({x:201.8,y:809},0).wait(1).to({x:200.8,y:811.3},0).wait(1).to({x:199.9,y:813.5},0).wait(1).to({x:199,y:815.6},0).wait(1).to({x:198.3,y:817.5},0).wait(1).to({x:197.6,y:819.2},0).wait(1).to({x:197,y:820.5},0).wait(1).to({x:196.6,y:821.4},0).wait(1).to({x:196.3,y:822.2},0).wait(1).to({x:196.1,y:822.8},0).wait(1).to({x:195.9,y:823.2},0).wait(1).to({x:195.7,y:823.6},0).wait(1).to({x:195.6,y:823.9},0).wait(1).to({x:195.5,y:824.1},0).wait(1).to({x:195.4,y:824.3},0).wait(1).to({y:824.4},0).wait(1).to({x:195.3,y:824.6},0).wait(2).to({y:824.7},0).wait(1).to({x:195.2,y:824.8},0).wait(2).to({y:824.9},0).wait(7));

	// 图层 59
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AL8EvI2Lg4Ar7jjQNrFCKMmO");
	this.shape.setTransform(207.6,871.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFEFC").s().p("AqOD4IhsnaQNpFBKNmOIAAJfg");
	this.shape_1.setTransform(207.6,871.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},167).wait(32));

	// 桌子
	this.instance_5 = new lib.s1255s();
	this.instance_5.setTransform(-75,923,0.967,0.967);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(167).to({_off:false},0).wait(32));

	// 屁
	this.instance_6 = new lib.s1254();
	this.instance_6.setTransform(262.3,766.9,0.805,0.805,0,0,0,508.4,471.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(167).to({_off:false},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:279.5,y:723.6},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:297.5,y:678.2},0).wait(1).to({scaleX:1,scaleY:1,x:315.4,y:633.2},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:332.2,y:590.9},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:347.3,y:552.9},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:360.4,y:520},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:371.4,y:492.3},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:380.4,y:469.6},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:387.8,y:451.1},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:394,y:435.5},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:399.1,y:422.6},0).wait(1).to({scaleX:1.33,scaleY:1.33,x:403.2,y:412.4},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:406.3,y:404.5},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:408.7,y:398.4},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:410.5,y:393.9},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:411.8,y:390.7},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:412.7,y:388.3},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:413.4,y:386.7},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:413.8,y:385.7},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:414.1,y:385},0).wait(1).to({x:414.2,y:384.7},0).wait(1).to({regX:508.2,regY:471.8,y:384.6},0).wait(10));

	// 背5
	this.instance_7 = new lib.s1256s();
	this.instance_7.setTransform(-2,6,0.967,0.967);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(167).to({_off:false},0).wait(32));

	// pu
	this.instance_8 = new lib.s12411();
	this.instance_8.setTransform(517.6,322.5,0.002,0.002,0,0,0,121.4,91);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(120).to({_off:false},0).wait(1).to({regX:121.5,regY:104.5,scaleX:0.15,scaleY:0.15,y:324.5},0).wait(1).to({scaleX:0.46,scaleY:0.46,y:328.6},0).wait(1).to({scaleX:1,scaleY:1,x:517.5,y:322.5},0).to({_off:true},44).wait(32));

	// 图层 42 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_120 = new cjs.Graphics().p("Eg9zAmwMAAAhNfMB7mAAAMAAABNfg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(120).to({graphics:mask_graphics_120,x:389.6,y:250.1}).wait(79));

	// 速度线
	this.instance_9 = new lib.s1248();
	this.instance_9.setTransform(394.5,248.9,2.073,2.073,0,0,0,555.4,357.9);
	this.instance_9._off = true;

	this.instance_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(120).to({_off:false},0).wait(1).to({scaleX:1.96,scaleY:1.96},0).wait(1).to({scaleX:1.77,scaleY:1.77},0).wait(1).to({scaleX:1.49,scaleY:1.49,y:249},0).wait(1).to({scaleX:1,scaleY:1,x:394.4,y:248.9},0).to({_off:true},43).wait(32));

	// 图层 43 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_120 = new cjs.Graphics().p("Eg8xAmvMAAAhNeMB5jAAAMAAABNeg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(120).to({graphics:mask_1_graphics_120,x:383,y:250}).wait(79));

	// 屁
	this.instance_10 = new lib.s12410();
	this.instance_10.setTransform(378.5,-233.5,1,1,0,0,0,385.5,214.5);
	this.instance_10._off = true;

	this.instance_11 = new lib.s1245s();
	this.instance_11.setTransform(-6,2);

	this.instance_12 = new lib.s1246s();
	this.instance_12.setTransform(-6,2);

	this.instance_13 = new lib.s12413();
	this.instance_13.setTransform(377,248.5,1,1,0,0,0,375,249.5);
	this.instance_13._off = true;

	this.instance_10.mask = this.instance_11.mask = this.instance_12.mask = this.instance_13.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},116).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[]},29).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(116).to({_off:false},0).wait(1).to({y:-168.5},0).wait(1).to({y:-59.2},0).wait(1).to({y:83.4},0).wait(1).to({y:282.5},0).to({_off:true},1).wait(78));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(123).to({_off:false},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:377.1},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:248.6},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:248.5},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:377,y:248.6},0).wait(1).to({scaleX:1.06,scaleY:1.06,y:248.5},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1.12,scaleY:1.12},0).wait(1).to({scaleX:1.14,scaleY:1.14},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.22,scaleY:1.22},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:377.1},0).wait(1).to({scaleX:1.29,scaleY:1.29},0).wait(1).to({regX:374.9,regY:249.4,scaleX:1.33,scaleY:1.33,x:377},0).to({_off:true},29).wait(32));

	// 背4.2
	this.instance_14 = new lib.s1249();
	this.instance_14.setTransform(380.5,-257,1,1,0,0,0,386.5,257);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(116).to({_off:false},0).wait(1).to({y:-175.8},0).wait(1).to({y:-62.8},0).wait(1).to({y:77.4},0).wait(1).to({y:259},0).to({_off:true},47).wait(32));

	// 鸡
	this.instance_15 = new lib.s1247();
	this.instance_15.setTransform(106.5,899,1,1,0,0,0,41.5,40);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(149).to({_off:false},0).to({_off:true},18).wait(32));

	// 摸
	this.instance_16 = new lib.s1246();
	this.instance_16.setTransform(91,824,1,1,0,0,0,43,43);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(145).to({_off:false},0).to({_off:true},22).wait(32));

	// 奇
	this.instance_17 = new lib.s1245();
	this.instance_17.setTransform(76,742,1,1,0,0,0,39,38);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(141).to({_off:false},0).to({_off:true},26).wait(32));

	// 嘴
	this.instance_18 = new lib.s1244();
	this.instance_18.setTransform(389,1693,1,1,0,0,0,60,40);
	this.instance_18._off = true;

	this.instance_19 = new lib.s1249s();
	this.instance_19.setTransform(368,935);

	this.instance_20 = new lib.s12410s();
	this.instance_20.setTransform(344.8,923.8,1,1,9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_18}]},116).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},13).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},5).to({state:[{t:this.instance_20}]},4).to({state:[]},18).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(116).to({_off:false},0).wait(1).to({y:1594.6},0).wait(1).to({y:1448.7},0).wait(1).to({y:1258.7},0).wait(1).to({y:959},0).wait(13).to({regY:80,y:999},0).wait(1).to({regY:40,rotation:0.9,x:390.2,y:959},0).wait(1).to({rotation:1.5,x:391.2},0).wait(1).to({rotation:2,x:391.8},0).wait(1).to({rotation:2.4,x:392.3,y:959.1},0).wait(1).to({rotation:2.7,x:392.7},0).wait(1).to({rotation:2.8,x:392.9},0).wait(1).to({regX:60.1,regY:80,rotation:3,x:391.1,y:999},0).to({_off:true},5).wait(54));

	// 闪
	this.instance_21 = new lib.s1243();
	this.instance_21.setTransform(433.5,1523,1,1,0,0,0,257.5,251);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(116).to({_off:false},0).wait(1).to({y:1424.2},0).wait(1).to({y:1276.5},0).wait(1).to({y:1076.8},0).wait(1).to({y:789},0).wait(13).to({regY:502,y:1040},0).wait(1).to({regY:251,rotation:0.3,x:436.3,y:789},0).wait(1).to({rotation:0.5,x:438.5},0).wait(1).to({rotation:0.6,x:440.1},0).wait(1).to({rotation:0.8,x:441.4},0).wait(1).to({rotation:0.9,x:442.3},0).wait(1).to({x:442.9},0).wait(1).to({regY:502,x:439.2,y:1040},0).to({_off:true},27).wait(32));

	// 男
	this.instance_22 = new lib.s1242();
	this.instance_22.setTransform(381.5,1622,1,1,0,0,0,321.5,361);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(116).to({_off:false},0).wait(1).to({y:1523.1},0).wait(1).to({y:1364.7},0).wait(1).to({y:1170.1},0).wait(1).to({y:888},0).wait(13).to({regY:722,y:1249},0).wait(1).to({regY:361,rotation:0.4,x:383.9,y:888},0).wait(1).to({rotation:0.7,x:386},0).wait(1).to({rotation:1,x:387.5,y:888.1},0).wait(1).to({rotation:1.1,x:388.7},0).wait(1).to({rotation:1.3,x:389.5},0).wait(1).to({rotation:1.4,x:390.1,y:888.2},0).wait(1).to({regY:722.1,x:381.5,y:1249.1},0).to({_off:true},27).wait(32));

	// 背4。1
	this.instance_23 = new lib.s1241();
	this.instance_23.setTransform(375,1599.4,1,1,0,0,0,397,367.4);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(116).to({_off:false},0).wait(1).to({y:1491.8},0).wait(1).to({y:1341.5},0).wait(1).to({y:1146.7},0).wait(1).to({y:865.4},0).to({_off:true},47).wait(32));

	// 图层 57
	this.instance_24 = new lib.s12314();
	this.instance_24.setTransform(602.5,327.6,0.01,0.01,0,0,0,35.6,76.3);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(75).to({_off:false},0).wait(1).to({regX:35.5,regY:73.5,scaleX:0.25,scaleY:0.25,y:326.8},0).wait(1).to({scaleX:1,scaleY:1,y:327.5},0).to({_off:true},43).wait(79));

	// 头发
	this.instance_25 = new lib.s12312();
	this.instance_25.setTransform(355,-310.5,1,1,0,0,0,243,127.5);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(70).to({_off:false},0).wait(1).to({regY:128.5,x:354.9,y:-257.4},0).wait(1).to({x:354.7,y:-167.9},0).wait(1).to({x:354.4,y:-40.5},0).wait(1).to({regY:127.5,x:354,y:143.5},0).to({_off:true},46).wait(79));

	// 抖
	this.instance_26 = new lib.s12311();
	this.instance_26.setTransform(370,314.5,1,1,0,0,0,226,117.5);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(80).to({_off:false},0).to({_off:true},40).wait(79));

	// 脸
	this.instance_27 = new lib.s12313();
	this.instance_27.setTransform(348,-170.6,1,1,0,0,0,187,160.5);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(70).to({_off:false},0).wait(1).to({y:-114.6},0).wait(1).to({y:-27.1},0).wait(1).to({y:92.8},0).wait(1).to({y:283.5},0).to({_off:true},46).wait(79));

	// 黑线
	this.instance_28 = new lib.s12310();
	this.instance_28.setTransform(376,-208.4,1,1,0,0,0,369,213.5);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(76).to({_off:false},0).wait(1).to({y:-177.3},0).wait(1).to({y:-106},0).wait(1).to({y:4.2},0).wait(1).to({y:193.5},0).to({_off:true},40).wait(79));

	// 背3.5
	this.instance_29 = new lib.s1239();
	this.instance_29.setTransform(385,-225.5,1,1,0,0,0,394,223.5);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(70).to({_off:false},0).wait(1).to({x:384.9,y:-175.3},0).wait(1).to({x:384.7,y:-86.9},0).wait(1).to({x:384.5,y:34.6},0).wait(1).to({x:384,y:228.5},0).to({_off:true},46).wait(79));

	// 闪4
	this.instance_30 = new lib.s1238();
	this.instance_30.setTransform(298.5,1801,1,1,0,0,0,64.5,63);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(70).to({_off:false},0).wait(1).to({y:1729.2},0).wait(1).to({y:1576},0).wait(1).to({y:1355.5},0).wait(1).to({y:999},0).to({_off:true},1).wait(3).to({_off:false,rotation:2,x:306.3},0).to({regY:63.1,rotation:0.3,x:293.1,y:995.6},4).to({_off:true},1).wait(4).to({_off:false,regY:63,rotation:0,x:302,y:999},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(3).to({_off:false},0).to({_off:true},4).wait(2).to({_off:false},0).to({_off:true},2).wait(3).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},8).wait(79));

	// 闪3
	this.instance_31 = new lib.s1237();
	this.instance_31.setTransform(488.5,1729.5,1,1,0,0,0,66.5,115.5);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(70).to({_off:false},0).wait(1).to({y:1630.2},0).wait(1).to({y:1466},0).wait(1).to({y:1254.1},0).wait(1).to({y:927.5},0).to({rotation:1.2,x:498,y:934},4).to({rotation:0,x:483.5,y:922.5},4).to({_off:true},1).wait(4).to({_off:false,rotation:1.4,x:493.6,y:930.5},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(1).to({_off:false},0).to({_off:true},5).wait(2).to({_off:false},0).to({_off:true},2).wait(1).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},8).wait(79));

	// 闪2
	this.instance_32 = new lib.s1236();
	this.instance_32.setTransform(453.5,1409,1,1,0,0,0,63.5,62);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(70).to({_off:false},0).wait(1).to({y:1308.9},0).wait(1).to({y:1157.8},0).wait(1).to({y:941.5},0).wait(1).to({y:607},0).to({_off:true},3).wait(1).to({_off:false,regX:63.6,regY:62.1,rotation:3.7,x:472.1,y:614.1},0).to({regX:63.5,regY:62,rotation:0,x:440,y:603},4).wait(1).to({x:448.2,y:605.4},0).wait(1).to({x:454.1,y:607.2},0).wait(1).to({x:457.9,y:608.3},0).wait(1).to({x:460.4,y:609},0).wait(1).to({x:462,y:609.5},0).to({_off:true},3).wait(4).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},2).wait(1).to({_off:false},0).to({_off:true},3).wait(4).to({_off:false},0).to({_off:true},10).wait(79));

	// 闪
	this.instance_33 = new lib.s1235();
	this.instance_33.setTransform(254,1478,1,1,0,0,0,81,121);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(70).to({_off:false},0).wait(1).to({y:1375.9},0).wait(1).to({y:1220.9},0).wait(1).to({y:1000.3},0).wait(1).to({y:676},0).to({rotation:2.2,x:269.6,y:678},4).to({_off:true},1).wait(3).to({_off:false,rotation:-0.3,x:242.5,y:676},0).wait(1).to({rotation:-0.2,x:249.2,y:676.2},0).wait(1).to({rotation:-0.1,x:253.7,y:676.3},0).wait(1).to({rotation:0,x:257,y:676.4},0).wait(1).to({x:259.2,y:676.5},0).wait(1).to({x:260.5},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},2).wait(1).to({_off:false},0).to({_off:true},5).wait(87));

	// 文字
	this.instance_34 = new lib.s1234();
	this.instance_34.setTransform(379,1946.5,1,1,0,0,0,301,44.5);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(70).to({_off:false},0).wait(1).to({y:1851.9},0).wait(1).to({y:1694.2},0).wait(1).to({y:1472.8},0).wait(1).to({y:1144.5},0).to({_off:true},46).wait(79));

	// 菊花
	this.instance_35 = new lib.s1233();
	this.instance_35.setTransform(254.5,2056.6,1,1,0,0,0,142.5,714.6);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(70).to({_off:false},0).wait(1).to({regX:244.5,regY:360.5,x:356.1,y:1613},0).wait(1).to({x:355.3,y:1468.2},0).wait(1).to({x:354.2,y:1245},0).wait(1).to({regX:138.5,regY:716.6,x:250.5,y:1256.6},0).to({regX:138.6,rotation:1.7,x:250.6},4).to({regX:138.5,rotation:-1.2,x:250.5},4).to({regX:138.6,rotation:0.7,x:250.6},5).to({_off:true},33).wait(79));

	// 花瓣
	this.instance_36 = new lib.s1232();
	this.instance_36.setTransform(201,1529,1,1,0,0,0,189,0);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(70).to({_off:false},0).wait(1).to({regX:94.5,regY:56.5,x:106.5,y:1488.1},0).wait(1).to({y:1329.8},0).wait(1).to({y:1104.2},0).wait(1).to({regX:189,regY:0,x:201,y:727},0).to({regX:189.1,regY:0.1,rotation:3.7,x:216.1,y:727.1},4).to({rotation:-3.4,x:199.1,y:729.1},4).to({rotation:3.7,x:208.1,y:727.1},5).to({rotation:1.5},5).wait(1).to({regX:94.5,regY:56.5,rotation:2.2,x:111.4,y:779.8},0).wait(1).to({rotation:2.8,x:110.9,y:778.8},0).wait(1).to({rotation:3.3,x:110.5,y:777.9},0).wait(1).to({rotation:3.8,x:110.1,y:777.3},0).wait(1).to({rotation:4.1,x:109.8,y:776.6},0).wait(1).to({regX:189.2,regY:0.2,rotation:4.4,x:208.2,y:727.2},0).wait(1).to({regX:94.5,regY:56.5,rotation:3.9,x:109.9,y:777},0).wait(1).to({rotation:3.4,x:110.2,y:777.7},0).wait(1).to({rotation:3.1,x:110.5,y:778.2},0).wait(1).to({rotation:2.9,x:110.7,y:778.6},0).wait(1).to({regX:189.2,regY:0.2,rotation:2.7,x:208.2,y:727.2},0).to({_off:true},17).wait(79));

	// 背3
	this.instance_37 = new lib.s1231();
	this.instance_37.setTransform(376,1637,1,1,0,0,0,386,408);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(70).to({_off:false},0).wait(1).to({y:1532.8},0).wait(1).to({y:1374.7},0).wait(1).to({y:1150.7},0).wait(1).to({y:835},0).to({_off:true},46).wait(79));

	// 叮
	this.instance_38 = new lib.s1221();
	this.instance_38.setTransform(544.6,558.5,1,1,0,0,0,63.6,67.5);
	this.instance_38.alpha = 0.23;
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(47).to({_off:false},0).wait(1).to({alpha:1},0).to({_off:true},30).wait(121));

	// 风
	this.instance_39 = new lib.s1225s();
	this.instance_39.setTransform(625,732);

	this.instance_40 = new lib.s1226s();
	this.instance_40.setTransform(542,730);

	this.instance_41 = new lib.s1227s();
	this.instance_41.setTransform(466,727);

	this.instance_42 = new lib.s1228s();
	this.instance_42.setTransform(406,726);

	this.instance_43 = new lib.s1229s();
	this.instance_43.setTransform(164,726);

	this.instance_44 = new lib.s12210s();
	this.instance_44.setTransform(-29,728);

	this.instance_45 = new lib.s12211s();
	this.instance_45.setTransform(-78,736);

	this.instance_46 = new lib.s12212s();
	this.instance_46.setTransform(-60,736);

	this.instance_47 = new lib.s12213s();
	this.instance_47.setTransform(-61,737);

	this.instance_48 = new lib.s12214s();
	this.instance_48.setTransform(-65,737);

	this.instance_49 = new lib.s12215s();
	this.instance_49.setTransform(-68,737);

	this.instance_50 = new lib.s12216s_1();
	this.instance_50.setTransform(-42,735);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_39}]},35).to({state:[{t:this.instance_40}]},2).to({state:[{t:this.instance_41}]},2).to({state:[{t:this.instance_42}]},2).to({state:[{t:this.instance_43}]},2).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[]},1).to({state:[]},2).wait(146));

	// 铃
	this.instance_51 = new lib.s12217s();
	this.instance_51.setTransform(346,63,0.916,0.916);

	this.instance_52 = new lib.s12218s();
	this.instance_52.setTransform(313,64,0.938,0.938);

	this.instance_53 = new lib.s12219s();
	this.instance_53.setTransform(281,62,0.932,0.932);

	this.instance_54 = new lib.s12220s();
	this.instance_54.setTransform(250,63,0.914,0.914);

	this.instance_55 = new lib.s12216s();
	this.instance_55.setTransform(130,67,0.899,0.899);

	this.instance_56 = new lib.s12221s();
	this.instance_56.setTransform(195,63,0.96,0.96);

	this.instance_57 = new lib.s12222s();
	this.instance_57.setTransform(273,65,0.953,0.953);

	this.instance_58 = new lib.s12223s();
	this.instance_58.setTransform(302,64,0.969,0.969);

	this.instance_59 = new lib.s12224s();
	this.instance_59.setTransform(361,65,0.932,0.932);

	this.instance_60 = new lib.s12225s();
	this.instance_60.setTransform(349,67,0.929,0.929);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_51}]},35).to({state:[{t:this.instance_52}]},2).to({state:[{t:this.instance_53}]},2).to({state:[{t:this.instance_54}]},2).to({state:[{t:this.instance_55}]},2).to({state:[{t:this.instance_56}]},2).to({state:[{t:this.instance_57}]},2).to({state:[{t:this.instance_58}]},2).to({state:[{t:this.instance_59}]},2).to({state:[{t:this.instance_60}]},2).to({state:[{t:this.instance_58}]},2).to({state:[{t:this.instance_57}]},2).to({state:[{t:this.instance_58}]},3).to({state:[{t:this.instance_59}]},3).to({state:[{t:this.instance_60}]},4).to({state:[]},11).wait(121));

	// 云2
	this.instance_61 = new lib.s1224();
	this.instance_61.setTransform(107.2,299,1,1,0,0,0,227.2,164);
	this.instance_61._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(35).to({_off:false},0).wait(1).to({regX:227.3,regY:165,rotation:0.2,x:102.4,y:298.1},0).wait(1).to({rotation:0.4,x:98,y:296.5},0).wait(1).to({rotation:0.6,x:94,y:295},0).wait(1).to({rotation:0.7,x:90.4,y:293.7},0).wait(1).to({rotation:0.9,x:87.1,y:292.4},0).wait(1).to({rotation:1,x:84,y:291.2},0).wait(1).to({rotation:1.1,x:81.1,y:290.1},0).wait(1).to({rotation:1.2,x:78.4,y:289.1},0).wait(1).to({rotation:1.3,x:75.9,y:288.2},0).wait(1).to({rotation:1.4,x:73.5,y:287.3},0).wait(1).to({rotation:1.5,x:71.2,y:286.4},0).wait(1).to({rotation:1.6,x:69,y:285.6},0).wait(1).to({rotation:1.7,x:67,y:284.8},0).wait(1).to({rotation:1.8,x:65.1,y:284.1},0).wait(1).to({rotation:1.9,x:63.2,y:283.4},0).wait(1).to({rotation:2,x:61.4,y:282.7},0).wait(1).to({x:59.8,y:282.1},0).wait(1).to({rotation:2.1,x:58.2,y:281.5},0).wait(1).to({rotation:2.2,x:56.7,y:280.9},0).wait(1).to({x:55.2,y:280.3},0).wait(1).to({rotation:2.3,x:53.7,y:279.8},0).wait(1).to({rotation:2.4,x:52.4,y:279.3},0).wait(1).to({x:51.2,y:278.9},0).wait(1).to({rotation:2.5,x:49.9,y:278.4},0).wait(1).to({x:48.8,y:278},0).wait(1).to({rotation:2.6,x:47.7,y:277.5},0).wait(1).to({x:46.7,y:277.2},0).wait(1).to({x:45.7,y:276.8},0).wait(1).to({rotation:2.7,x:44.8,y:276.5},0).wait(1).to({x:44,y:276.2},0).wait(1).to({x:43.3,y:275.9},0).wait(1).to({rotation:2.8,x:42.6,y:275.6},0).wait(1).to({x:42,y:275.4},0).wait(1).to({x:41.4,y:275.2},0).wait(1).to({x:40.8,y:275},0).wait(1).to({rotation:2.9,x:40.3,y:274.8},0).wait(1).to({x:39.9,y:274.6},0).wait(1).to({x:39.5,y:274.5},0).wait(1).to({x:39.2,y:274.3},0).wait(1).to({x:38.8,y:274.2},0).wait(1).to({x:38.6,y:274.1},0).wait(1).to({regX:227.2,regY:164.1,rotation:3,x:38.3,y:273.1},0).to({_off:true},1).wait(121));

	// 云1
	this.instance_62 = new lib.s1223();
	this.instance_62.setTransform(615,705,1,1,0,0,0,203,94);
	this.instance_62._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_62).wait(35).to({_off:false},0).wait(1).to({regY:93.9,x:611.5,y:703.7},0).wait(1).to({x:608.4,y:702.7},0).wait(1).to({x:605.6,y:701.8},0).wait(1).to({x:603.1,y:700.9},0).wait(1).to({x:600.7,y:700.1},0).wait(1).to({x:598.4,y:699.4},0).wait(1).to({x:596.3,y:698.7},0).wait(1).to({x:594.3,y:698},0).wait(1).to({x:592.4,y:697.4},0).wait(1).to({x:590.6,y:696.8},0).wait(1).to({x:588.9,y:696.2},0).wait(1).to({x:587.3,y:695.7},0).wait(1).to({x:585.8,y:695.2},0).wait(1).to({x:584.3,y:694.7},0).wait(1).to({x:582.9,y:694.2},0).wait(1).to({x:581.7,y:693.8},0).wait(1).to({x:580.5,y:693.4},0).wait(1).to({x:579.4,y:693},0).wait(1).to({x:578.4,y:692.7},0).wait(1).to({x:577.4,y:692.4},0).wait(1).to({x:576.5,y:692.1},0).wait(1).to({x:575.7,y:691.8},0).wait(1).to({x:574.9,y:691.5},0).wait(1).to({x:574.2,y:691.3},0).wait(1).to({x:573.5,y:691.1},0).wait(1).to({x:572.9,y:690.9},0).wait(1).to({x:572.3,y:690.7},0).wait(1).to({x:571.7,y:690.5},0).wait(1).to({x:571.2,y:690.3},0).wait(1).to({x:570.7,y:690.1},0).wait(1).to({x:570.2,y:690},0).wait(1).to({x:569.8,y:689.8},0).wait(1).to({x:569.4,y:689.7},0).wait(1).to({x:569,y:689.6},0).wait(1).to({x:568.6,y:689.4},0).wait(1).to({x:568.3,y:689.3},0).wait(1).to({x:568,y:689.2},0).wait(1).to({x:567.8},0).wait(1).to({x:567.5,y:689.1},0).wait(1).to({x:567.3,y:689},0).wait(1).to({x:567.2},0).wait(1).to({regY:94,x:567},0).to({_off:true},1).wait(121));

	// 背2
	this.instance_63 = new lib.s1224s();
	this.instance_63.setTransform(-13,-2,0.969,0.969);
	this.instance_63._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_63).wait(35).to({_off:false},0).to({_off:true},43).wait(121));

	// 头
	this.instance_64 = new lib.s1212();
	this.instance_64.setTransform(-184.7,733.6,1,1,1.4,0,0,101.9,228.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_64).wait(1).to({regX:96.9,regY:118.5,x:-129.3,y:623.8},0).wait(1).to({x:-12.6},0).wait(1).to({regX:101.9,regY:228.1,x:213.4,y:733.6},0).wait(6).to({regX:96.9,regY:118.5,rotation:-0.3,x:219.2,y:623.9},0).wait(1).to({rotation:-1.2,x:223,y:624},0).wait(1).to({rotation:-1.6,x:225,y:624.1},0).wait(1).to({regX:101.9,regY:228.1,rotation:-1.7,x:233.9,y:733.5},0).wait(2).to({regX:102,regY:228.2,rotation:0.7,x:228.5,y:733.6},4).wait(3).to({rotation:-2.2,x:253},4).to({_off:true},10).wait(164));

	// 脖子
	this.instance_65 = new lib.s1213();
	this.instance_65.setTransform(-181.5,845.7,1,1,-5.9,0,0,57.4,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_65).wait(1).to({regY:83.5,x:-126.7,y:777},0).wait(1).to({x:-12.3},0).wait(1).to({regY:152.5,x:216.6,y:845.7},0).wait(6).to({regY:83.5,rotation:-4.3,x:217.3,y:776.9},0).wait(1).to({rotation:-3.4,x:221.4},0).wait(1).to({rotation:-3,x:223.3},0).wait(1).to({regX:57.5,regY:152.6,rotation:-2.8,x:227.7,y:845.8},0).wait(2).to({rotation:-4.2,x:227.8,y:845.9},4).wait(3).to({regX:57.6,rotation:-0.8,x:240.9,y:845.8},4).to({_off:true},10).wait(164));

	// 男
	this.instance_66 = new lib.s1214();
	this.instance_66.setTransform(-181.6,1018.6,1,1,-1.5,0,0,208.5,305.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_66).wait(1).to({regX:194.5,regY:157.5,x:-134.7,y:870.9},0).wait(1).to({x:-15.6},0).wait(1).to({regX:208.5,regY:305.6,x:216.5,y:1018.6},0).wait(6).to({regX:194.5,regY:157.5,rotation:-1,x:205.4,y:870.8},0).wait(1).to({rotation:-0.7,x:209.2,y:870.7},0).wait(1).to({rotation:-0.6,x:211},0).wait(1).to({regX:208.5,regY:305.6,rotation:-0.5,x:227.5,y:1018.7},0).wait(2).to({regX:208.6,regY:305.5,rotation:-1,x:228.6,y:1018.6},4).wait(3).to({rotation:0.2,x:236.7},4).to({_off:true},10).wait(164));

	// nü
	this.instance_67 = new lib.s1212s();
	this.instance_67.setTransform(435,554);

	this.timeline.addTween(cjs.Tween.get(this.instance_67).to({_off:true},35).wait(164));

	// 背1
	this.instance_68 = new lib.s1214s();
	this.instance_68.setTransform(-52,0,1.013,1.013);

	this.timeline.addTween(cjs.Tween.get(this.instance_68).to({_off:true},35).wait(164));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-397.9,0,1198,1232);


// stage content:



(lib.qj_s12 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s12();
	this.instance.setTransform(201.1,616,1,1,0,0,0,201.1,616);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.9,610,1198,1232);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;