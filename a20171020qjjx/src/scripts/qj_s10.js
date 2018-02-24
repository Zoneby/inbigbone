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
		{src:"images/cv/s10110s.png", id:"s10110s"},
		{src:"images/cv/s10110s_1.png", id:"s10110s_1"},
		{src:"images/cv/s1011s.png", id:"s1011s"},
		{src:"images/cv/s1012s.png", id:"s1012s"},
		{src:"images/cv/s1013s.png", id:"s1013s"},
		{src:"images/cv/s1014s.png", id:"s1014s"},
		{src:"images/cv/s1015s.png", id:"s1015s"},
		{src:"images/cv/s1016s.png", id:"s1016s"},
		{src:"images/cv/s1017s.png", id:"s1017s"},
		{src:"images/cv/s1018s.png", id:"s1018s"},
		{src:"images/cv/s1019s.png", id:"s1019s"},
		{src:"images/cv/s1021s.png", id:"s1021s"},
		{src:"images/cv/s1022s.png", id:"s1022s"},
		{src:"images/cv/s1023s.png", id:"s1023s"},
		{src:"images/cv/s1024s.png", id:"s1024s"},
		{src:"images/cv/s10310s.png", id:"s10310s"},
		{src:"images/cv/s10311s.png", id:"s10311s"},
		{src:"images/cv/s10314s.png", id:"s10314s"},
		{src:"images/cv/s10315s.png", id:"s10315s"},
		{src:"images/cv/s1031s.png", id:"s1031s"},
		{src:"images/cv/s1033s.png", id:"s1033s"},
		{src:"images/cv/s1034s.png", id:"s1034s"},
		{src:"images/cv/s1035s.png", id:"s1035s"},
		{src:"images/cv/s1036s.png", id:"s1036s"},
		{src:"images/cv/s1037s.png", id:"s1037s"},
		{src:"images/cv/s1039s.png", id:"s1039s"},
		{src:"images/cv/s10410s.png", id:"s10410s"},
		{src:"images/cv/s10411s.png", id:"s10411s"},
		{src:"images/cv/s10412s.png", id:"s10412s"},
		{src:"images/cv/s10413s.png", id:"s10413s"},
		{src:"images/cv/s10415s.png", id:"s10415s"},
		{src:"images/cv/s1041s.png", id:"s1041s"},
		{src:"images/cv/s1042s.png", id:"s1042s"},
		{src:"images/cv/s1044s.png", id:"s1044s"},
		{src:"images/cv/s1046s.png", id:"s1046s"},
		{src:"images/cv/s1047s.png", id:"s1047s"},
		{src:"images/cv/s1048s.png", id:"s1048s"},
		{src:"images/cv/s1049s.png", id:"s1049s"},
		{src:"images/cv/s10517s.png", id:"s10517s"},
		{src:"images/cv/s10518s.png", id:"s10518s"},
		{src:"images/cv/s10520s.png", id:"s10520s"},
		{src:"images/cv/s10521s.png", id:"s10521s"},
		{src:"images/cv/s10522s.png", id:"s10522s"},
		{src:"images/cv/s10524s.png", id:"s10524s"},
		{src:"images/cv/s10525s.png", id:"s10525s"},
		{src:"images/cv/s10526s.png", id:"s10526s"},
		{src:"images/cv/s10527s.png", id:"s10527s"},
		{src:"images/cv/s10528s.png", id:"s10528s"},
		{src:"images/cv/s10529s.png", id:"s10529s"},
		{src:"images/cv/s1052s.png", id:"s1052s"},
		{src:"images/cv/s10531s.png", id:"s10531s"},
		{src:"images/cv/s10531s_1.png", id:"s10531s_1"},
		{src:"images/cv/s10532s.png", id:"s10532s"},
		{src:"images/cv/s10533s.png", id:"s10533s"},
		{src:"images/cv/s10534s.png", id:"s10534s"},
		{src:"images/cv/s10535s.png", id:"s10535s"},
		{src:"images/cv/s10536s.png", id:"s10536s"},
		{src:"images/cv/s1053s.png", id:"s1053s"},
		{src:"images/cv/s1054s.png", id:"s1054s"},
		{src:"images/cv/s1056s.png", id:"s1056s"}
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


(lib.s10110s = function() {
	this.initialize(img.s10110s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,748,741);


(lib.s10110s_1 = function() {
	this.initialize(img.s10110s_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,91);


(lib.s1011s = function() {
	this.initialize(img.s1011s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,388,279);


(lib.s1012s = function() {
	this.initialize(img.s1012s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,61,127);


(lib.s1013s = function() {
	this.initialize(img.s1013s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,199,101);


(lib.s1014s = function() {
	this.initialize(img.s1014s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,774);


(lib.s1015s = function() {
	this.initialize(img.s1015s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,759,1230);


(lib.s1016s = function() {
	this.initialize(img.s1016s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,140);


(lib.s1017s = function() {
	this.initialize(img.s1017s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,219);


(lib.s1018s = function() {
	this.initialize(img.s1018s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,49);


(lib.s1019s = function() {
	this.initialize(img.s1019s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,290,793);


(lib.s1021s = function() {
	this.initialize(img.s1021s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,137);


(lib.s1022s = function() {
	this.initialize(img.s1022s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,754,1229);


(lib.s1023s = function() {
	this.initialize(img.s1023s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,757,1231);


(lib.s1024s = function() {
	this.initialize(img.s1024s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,164);


(lib.s10310s = function() {
	this.initialize(img.s10310s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,569,226);


(lib.s10311s = function() {
	this.initialize(img.s10311s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,760,366);


(lib.s10314s = function() {
	this.initialize(img.s10314s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,756,880);


(lib.s10315s = function() {
	this.initialize(img.s10315s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,624,952);


(lib.s1031s = function() {
	this.initialize(img.s1031s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,185,186);


(lib.s1033s = function() {
	this.initialize(img.s1033s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,243,364);


(lib.s1034s = function() {
	this.initialize(img.s1034s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,408);


(lib.s1035s = function() {
	this.initialize(img.s1035s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,758,801);


(lib.s1036s = function() {
	this.initialize(img.s1036s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,761,876);


(lib.s1037s = function() {
	this.initialize(img.s1037s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,763,25);


(lib.s1039s = function() {
	this.initialize(img.s1039s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,763,372);


(lib.s10410s = function() {
	this.initialize(img.s10410s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,246,47);


(lib.s10411s = function() {
	this.initialize(img.s10411s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,58);


(lib.s10412s = function() {
	this.initialize(img.s10412s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,39);


(lib.s10413s = function() {
	this.initialize(img.s10413s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,758,1224);


(lib.s10415s = function() {
	this.initialize(img.s10415s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1003,556);


(lib.s1041s = function() {
	this.initialize(img.s1041s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,758,1238);


(lib.s1042s = function() {
	this.initialize(img.s1042s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,437);


(lib.s1044s = function() {
	this.initialize(img.s1044s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,235,213);


(lib.s1046s = function() {
	this.initialize(img.s1046s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,128);


(lib.s1047s = function() {
	this.initialize(img.s1047s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,189,127);


(lib.s1048s = function() {
	this.initialize(img.s1048s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,143);


(lib.s1049s = function() {
	this.initialize(img.s1049s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,347,799);


(lib.s10517s = function() {
	this.initialize(img.s10517s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,120);


(lib.s10518s = function() {
	this.initialize(img.s10518s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,248,149);


(lib.s10520s = function() {
	this.initialize(img.s10520s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,324,234);


(lib.s10521s = function() {
	this.initialize(img.s10521s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,479,272);


(lib.s10522s = function() {
	this.initialize(img.s10522s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,665,308);


(lib.s10524s = function() {
	this.initialize(img.s10524s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,558,261);


(lib.s10525s = function() {
	this.initialize(img.s10525s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,508,222);


(lib.s10526s = function() {
	this.initialize(img.s10526s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,508,222);


(lib.s10527s = function() {
	this.initialize(img.s10527s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,658,269);


(lib.s10528s = function() {
	this.initialize(img.s10528s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,951,342);


(lib.s10529s = function() {
	this.initialize(img.s10529s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,692,1270);


(lib.s1052s = function() {
	this.initialize(img.s1052s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,38);


(lib.s10531s = function() {
	this.initialize(img.s10531s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,786,1279);


(lib.s10531s_1 = function() {
	this.initialize(img.s10531s_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,1400);


(lib.s10532s = function() {
	this.initialize(img.s10532s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,1400);


(lib.s10533s = function() {
	this.initialize(img.s10533s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,1400);


(lib.s10534s = function() {
	this.initialize(img.s10534s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,1400);


(lib.s10535s = function() {
	this.initialize(img.s10535s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,1400);


(lib.s10536s = function() {
	this.initialize(img.s10536s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,1400);


(lib.s1053s = function() {
	this.initialize(img.s1053s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,49);


(lib.s1054s = function() {
	this.initialize(img.s1054s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,529,360);


(lib.s1056s = function() {
	this.initialize(img.s1056s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,475,324);


(lib.s10518 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 图层 7
	this.instance = new lib.s10531s_1();
	this.instance.setTransform(0,0,0.705,0.705);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(9).to({_off:false},0).wait(1));

	// 图层 6
	this.instance_1 = new lib.s10532s();
	this.instance_1.setTransform(0,0,0.705,0.705);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(1));

	// 图层 5
	this.instance_2 = new lib.s10533s();
	this.instance_2.setTransform(0,0,0.705,0.705);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(2));

	// 图层 4
	this.instance_3 = new lib.s10534s();
	this.instance_3.setTransform(0,0,0.705,0.705);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3));

	// 图层 3
	this.instance_4 = new lib.s10535s();
	this.instance_4.setTransform(0,0,0.705,0.705);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(4));

	// 图层 2
	this.instance_5 = new lib.s10536s();
	this.instance_5.setTransform(0,0,0.705,0.705);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,634.3,986.6);


(lib.s10517 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s10527s();
	this.instance.setTransform(0,0,0.722,0.722);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,475.1,194.2);


(lib.s10516 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s10528s();
	this.instance.setTransform(0,0,0.722,0.722);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,686.6,246.9);


(lib.s10514 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s10529s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,692,1270);


(lib.s10513 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1054s();
	this.instance.setTransform(0,0,1.127,1.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,596.3,460.2);


(lib.s10512 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1056s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,475,324);


(lib.s10510 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1053s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,49);


(lib.s1059 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1052s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,38);


(lib.s10418 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1042s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,540,437);


(lib.s10416 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1042s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,540,437);


(lib.s10415 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s10415s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1003,556);


(lib.s10414 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1041s();
	this.instance.setTransform(0,0,2.369,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1795.5,1238);


(lib.s10413 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s10412s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150,39);


(lib.s10412 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s10411s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,213,58);


(lib.s10411 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s10410s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,246,47);


(lib.s1049 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AAxhMQg7BGgmBT");
	this.shape.setTransform(155.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C3D36").s().p("Ah7ArIB1i1ICCBeIhmC3g");
	this.shape_1.setTransform(161.5,6.7);

	this.instance = new lib.s1044s();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-9.2,235,222.3);


(lib.s1047 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AgtgQIBbAh");
	this.shape.setTransform(8.5,69.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhVFxIAShgIBWAoQgJAwgwAcgAgJkDIAAiBIA3A1QArAqgDBhg");
	this.shape_1.setTransform(5.9,87.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D3D36").s().p("AhTFvQBIlVADmcQAwAoAqBWQAMEXg8EOQgbBAgvAig");
	this.shape_2.setTransform(5.9,87.1);

	this.instance = new lib.s1046s();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.7,0,215.8,128);


(lib.s1046 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1048s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,158,143);


(lib.s1045 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1047s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,189,127);


(lib.s1043 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1049s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,347,799);


(lib.s10321 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1036s();
	this.instance.setTransform(0,0,1,1.617);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,761,1416.1);


(lib.s10319 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cm_line();
	this.instance.setTransform(0,1199.9,1,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1861.9,1199.9);


(lib.s10315 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1031s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,185,186);


(lib.s10314 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s10314s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,756,880);


(lib.s10313 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s10315s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,624,952);


(lib.s10310 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1037s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,763,25);


(lib.s1039 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s10310s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,569,226);


(lib.s1038 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1039s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,763,372);


(lib.s1037 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s10311s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,760,366);


(lib.s1036 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1037s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,763,25);


(lib.s1035 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1033s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,243,364);


(lib.s1033 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1034s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,408);


(lib.s1032 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3B3C36").s().p("AikonIKsAyInCOgIpNB9QB9oODmpBg");
	this.shape.setTransform(551.6,525.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3B3C36").s().p("AkSGFQAjmFDNoRIE1AAIAAQig");
	this.shape_1.setTransform(508.5,613.9);

	this.instance = new lib.s1035s();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,758,801);


(lib.s1024 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1021s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,134,137);


(lib.s1023 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1024s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,237,164);


(lib.s1022 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1022s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,754,1229);


(lib.s1021 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1023s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,757,1231);


(lib.s10113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AB6AAIjzAA");
	this.shape.setTransform(13.9,12.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B58359").s().p("AhxA+QgPg9gCg/IEEAAIAAB8g");
	this.shape_1.setTransform(13.1,6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,0,28.6,14.6);


(lib.s10111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1011s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,388,279);


(lib.s10110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s10110s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,748,741);


(lib.s1019 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1012s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61,127);


(lib.s1018 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1013s();
	this.instance.setTransform(12.8,0,1,1,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210.2,125.3);


(lib.s1017 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1014s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,207,774);


(lib.s1016 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s10110s_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,91);


(lib.s1015 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1018s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,49);


(lib.s1014 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1016s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137,140);


(lib.s1013 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1017s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102,219);


(lib.s1012 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1019s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,290,793);


(lib.s1011 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1015s();
	this.instance.setTransform(0,0,0.995,0.995);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,755,1223.5);


(lib.s1056 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s10513();
	this.instance.setTransform(298.2,230.1,1,1,0,0,0,298.2,230.1);

	this.instance_1 = new lib.s10512();
	this.instance_1.setTransform(337.7,281.7,1.133,1.133,0,0,0,237.5,162.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:298.2,y:230.1}}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance,p:{x:323.3,y:273.7}}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,596.3,460.2);


(lib.s10417 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s10418();
	this.instance.setTransform(0,437,1,1,0,0,0,0,437);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:436.9,scaleX:1.09,scaleY:1.09,x:-9.6},4).to({regY:437,scaleX:1,scaleY:1,x:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,540,437);


(lib.s1044 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s10416();
	this.instance.setTransform(0,437,1,1,0,0,0,0,437);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:270,regY:218.5,scaleX:1.03,scaleY:1.03,x:277.1,y:212.8},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:281.9,y:208.9},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:284.9,y:206.5},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:286.9,y:204.9},0).wait(1).to({regX:0,regY:436.9,scaleX:1.07,scaleY:1.07,x:0,y:437},0).wait(1).to({regX:270,regY:218.5,scaleX:1.04,scaleY:1.04,x:278.3,y:213.6},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:272.6,y:219.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:268.6,y:223},0).wait(1).to({scaleX:1,scaleY:1,x:266,y:225.4},0).wait(1).to({regX:-5.3,regY:445.1,scaleX:1,scaleY:1,x:-5.3,y:445.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,540,437);


(lib.s1041 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s10414();
	this.instance.setTransform(897.8,619,1,1,0,0,0,897.8,619);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-147.7},3).to({x:897.8},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1795.5,1238);


(lib.s10320 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s10321();
	this.instance.setTransform(380.5,708.1,1,1,0,0,0,380.5,708.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:170},3).to({y:708.1},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,761,1416.1);


(lib.s10318 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s10319();
	this.instance.setTransform(930.9,600,1,1,0,0,0,930.9,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:931,regY:599.9,scaleX:0.9,scaleY:0.9,x:931},3).to({regX:930.9,regY:600,scaleX:1,scaleY:1,x:930.9},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1861.9,1199.9);


(lib.s10312 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1035();
	this.instance.setTransform(121.5,182,1,1,0,0,0,121.5,182);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,243,364);


(lib.s10 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_246 = function() {
		this.stop();
		try{app.showBtns()}catch(e){}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(246).call(this.frame_246).wait(1));

	// 图层 5
	this.instance = new lib.s10516();
	this.instance.setTransform(-335,168.5,0.953,0.953,0,0,0,343.2,123.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(194).to({_off:false},0).wait(1).to({regX:343.3,x:-240.3},0).wait(1).to({x:-110.1},0).wait(1).to({x:85.1},0).wait(1).to({regX:343.2,x:417.2},0).to({x:379.2},2).wait(47));

	// 图层 3
	this.instance_1 = new lib.s10517();
	this.instance_1.setTransform(-422.4,397.9,0.953,0.953,0,0,0,237.5,97.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(194).to({_off:false},0).wait(1).to({x:-329.8},0).wait(1).to({x:-178.9},0).wait(1).to({x:25.1},0).wait(1).to({x:329.8},0).to({x:291.8},2).wait(47));

	// 图层 39
	this.instance_2 = new lib.s10526s();
	this.instance_2.setTransform(82,732);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(227).to({_off:false},0).to({_off:true},1).wait(19));

	// 风8
	this.instance_3 = new lib.s10525s();
	this.instance_3.setTransform(82,732);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(225).to({_off:false},0).to({_off:true},2).wait(20));

	// 风7
	this.instance_4 = new lib.s10524s();
	this.instance_4.setTransform(85,693);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(223).to({_off:false},0).to({_off:true},2).wait(22));

	// 风6
	this.instance_5 = new lib.s10522s();
	this.instance_5.setTransform(85,646);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(221).to({_off:false},0).to({_off:true},2).wait(24));

	// 风5
	this.instance_6 = new lib.s10521s();
	this.instance_6.setTransform(271,646);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(219).to({_off:false},0).to({_off:true},2).wait(26));

	// 风4
	this.instance_7 = new lib.s10520s();
	this.instance_7.setTransform(426,646);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(217).to({_off:false},0).to({_off:true},2).wait(28));

	// 风2
	this.instance_8 = new lib.s10518s();
	this.instance_8.setTransform(501,647);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(213).to({_off:false},0).to({_off:true},2).wait(32));

	// 风1
	this.instance_9 = new lib.s10517s();
	this.instance_9.setTransform(651,646);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(211).to({_off:false},0).to({_off:true},2).wait(34));

	// 图层 46
	this.instance_10 = new lib.s10514();
	this.instance_10.setTransform(346,635,1,1,0,0,0,346,635);
	this.instance_10.compositeOperation = "lighter";
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(177).to({_off:false},0).wait(70));

	// 图层 7
	this.instance_11 = new lib.s10518();
	this.instance_11.setTransform(249.1,897.3,1,1,0,0,0,317.1,493.3);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(177).to({_off:false},0).wait(70));

	// 钱2
	this.instance_12 = new lib.s10510();
	this.instance_12.setTransform(457.4,805,1,1,43.2,0,0,33.8,38.9);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(177).to({_off:false},0).wait(38).to({regY:39,rotation:1.2,x:456.1},3).to({regY:38.9,rotation:22.7,x:456.2},3).to({regY:39,rotation:5.2,x:456.1},3).to({regX:33.9,rotation:11.9,x:456.2},2).wait(21));

	// 钱1
	this.instance_13 = new lib.s1059();
	this.instance_13.setTransform(449.3,803.1,1,1,15,0,0,46,34.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(177).to({_off:false},0).wait(38).to({rotation:-10.4,x:448.4,y:803.2},3).to({rotation:-3.2,y:803.1},3).to({rotation:-5.4,y:803.2},3).to({regX:46.1,regY:34.2,rotation:-4},2).wait(21));

	// 烟雾
	this.instance_14 = new lib.s1056();
	this.instance_14.setTransform(411.4,551.3,0.283,0.283,0,0,0,298.4,230.5);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(177).to({_off:false},0).to({regY:230.3,scaleX:0.1,scaleY:0.1,x:407.4,y:497.3},31).wait(39));

	// 背
	this.instance_15 = new lib.s10531s();
	this.instance_15.setTransform(-20,-12);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(177).to({_off:false},0).wait(70));

	// 泪3
	this.instance_16 = new lib.s10413();
	this.instance_16.setTransform(341.8,481.5,1,1,0,0,0,75,19.5);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(140).to({_off:false},0).wait(1).to({x:313,y:475.9},0).wait(1).to({x:283.8,y:470.7},0).to({_off:true},1).wait(7).to({_off:false,x:187,y:439.9},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(72));

	// 泪2
	this.instance_17 = new lib.s10412();
	this.instance_17.setTransform(285.1,472.6,1,1,0,0,0,106.5,29);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(143).to({_off:false},0).wait(1).to({x:260.3,y:467.8},0).wait(1).to({x:246.7,y:459.8},0).to({_off:true},1).wait(3).to({_off:false,x:217.5,y:447.4},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(71));

	// 泪1
	this.instance_18 = new lib.s10411();
	this.instance_18.setTransform(245.8,447.7,1,1,0,0,0,123,23.5);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(146).to({_off:false},0).wait(1).to({x:233.4,y:441.7},0).wait(1).to({y:440.9},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(70));

	// 烟雾前
	this.instance_19 = new lib.s10417();
	this.instance_19.setTransform(657,1130,0.876,0.876,0,0,0,0,437);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(140).to({_off:false},0).wait(1).to({regX:283.9,regY:199.5,scaleX:0.89,scaleY:0.89,x:771.3,y:917.6},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:685.8,y:914.8},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:637,y:913.1},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:610.6,y:912.2},0).wait(1).to({regX:0.1,regY:437.1,scaleX:0.92,scaleY:0.92,x:333.5,y:1130.1},0).to({_off:true},32).wait(70));

	// 烟雾前 复制
	this.instance_20 = new lib.s10417();
	this.instance_20.setTransform(683,1102,0.876,0.876,0,0,0,0,437);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(141).to({_off:false},0).wait(1).to({regX:283.9,regY:199.5,scaleX:0.89,scaleY:0.89,x:816.3,y:878.4},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:742.9,y:868.4},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:701,y:862.7},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:678.3,y:859.6},0).wait(1).to({regX:0.1,regY:437.1,scaleX:0.92,scaleY:0.92,x:403.5,y:1076.1},0).to({_off:true},31).wait(70));

	// 骆驼
	this.instance_21 = new lib.s10415();
	this.instance_21.setTransform(454.5,356,1,1,0,0,0,501.5,278);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(140).to({_off:false},0).to({x:332.9,y:333.6},4).to({x:300.9,y:314.4},2).to({_off:true},31).wait(70));

	// 右下2
	this.instance_22 = new lib.s1049();
	this.instance_22.setTransform(457.4,897.7,1,1.011,0,-56.6,-48,235.1,0.1);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(140).to({_off:false},0).to({regX:235,regY:0,scaleY:1,rotation:-18.5,skewX:0,skewY:0,x:318.8,y:879.3},4).to({regX:235.1,regY:0.1,rotation:14.2,x:274.5,y:853.7},2).to({_off:true},31).wait(70));

	// 左下
	this.instance_23 = new lib.s1047();
	this.instance_23.setTransform(615.2,1037.3,1,1,15.4,0,0,-2.6,128);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(140).to({_off:false},0).wait(1).to({x:589.2,y:1033.3},0).wait(1).to({x:563.2},0).wait(1).to({x:531.2,y:1023.3},0).wait(1).to({regX:-2.7,regY:128.1,rotation:-2,x:510.7,y:1018.9},0).to({rotation:-5.9,x:505.1,y:976.5},2).to({_off:true},31).wait(70));

	// 左上
	this.instance_24 = new lib.s1046();
	this.instance_24.setTransform(522.3,910.5,1,1,11,0,0,1.9,33.9);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(140).to({_off:false},0).to({regX:0.2,regY:24.7,rotation:8.2,x:399,y:882.2},4).to({regX:-1,regY:26.4,rotation:-6.4,x:367.5,y:873.8},2).to({_off:true},31).wait(70));

	// 人
	this.instance_25 = new lib.s1043();
	this.instance_25.setTransform(551.3,780.5,1,1,0,0,0,173.5,399.5);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(140).to({_off:false},0).to({x:426.5,y:758.1},4).to({x:394.5,y:738.9},2).to({_off:true},31).wait(70));

	// 右上
	this.instance_26 = new lib.s1045();
	this.instance_26.setTransform(541.8,804.9,1,1,-21.4,0,0,189.1,0.1);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(140).to({_off:false},0).to({regX:189,rotation:-9.4,x:412,y:793.7},4).to({regX:189.1,rotation:6.2,x:380.1,y:782.6},2).to({_off:true},31).wait(70));

	// 烟雾后
	this.instance_27 = new lib.s1044();
	this.instance_27.setTransform(398.4,1109,0.887,0.887,0,0,0,0,432.4);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(140).to({_off:false},0).wait(1).to({regX:285.8,regY:207.6,scaleX:0.93,scaleY:0.93,x:582.7,y:899.4},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:543.9,y:893.8},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:520.8,y:890.4},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:509.5,y:888.7},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:504.3,y:888},0).wait(1).to({regX:0.1,regY:432.4,scaleX:0.99,scaleY:0.99,x:220.1,y:1109.1},0).to({_off:true},31).wait(70));

	// 线
	this.instance_28 = new lib.s1041();
	this.instance_28.setTransform(1647.8,619,1,1,0,0,0,897.8,619);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(140).to({_off:false},0).to({x:897.8},2).to({_off:true},35).wait(70));

	// 背
	this.instance_29 = new lib.s10413s();
	this.instance_29.setTransform(-8,-4);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(140).to({_off:false},0).to({_off:true},37).wait(70));

	// 杆
	this.instance_30 = new lib.s10310();
	this.instance_30.setTransform(1136.5,356.5,1,1,0,0,0,381.5,12.5);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(91).to({_off:false},0).wait(1).to({x:1057.1},0).wait(1).to({x:928.4},0).wait(1).to({x:727.3},0).wait(1).to({x:372.5},0).to({_off:true},45).wait(107));

	// 图层 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_95 = new cjs.Graphics().p("Eg7CAc1MAAAg5oMB2GAAAMAAAA5og");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(95).to({graphics:mask_graphics_95,x:376,y:180.5}).wait(152));

	// 速度线
	this.instance_31 = new lib.s10318();
	this.instance_31.setTransform(364,183.9,1.185,1.185,0,0,0,930.9,599.9);
	this.instance_31._off = true;
	this.instance_31.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_31.cache(-2,-2,1866,1204);

	this.instance_31.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(96).to({_off:false},0).to({regX:931,regY:600,scaleX:0.5,scaleY:0.5,y:184},3).to({_off:true},41).wait(107));

	// 墨镜
	this.instance_32 = new lib.s1039();
	this.instance_32.setTransform(1138.5,185,1,1,0,0,0,284.5,113);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(91).to({_off:false},0).wait(1).to({x:1093.5},0).wait(1).to({x:969.8},0).wait(1).to({x:748.9},0).wait(1).to({x:374.5},0).wait(3).to({rotation:-4.4,x:387.5,y:225},3).to({_off:true},39).wait(107));

	// 脸
	this.instance_33 = new lib.s1038();
	this.instance_33.setTransform(1137.5,176,1,1,0,0,0,381.5,186);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(91).to({_off:false},0).wait(1).to({x:1087.3},0).wait(1).to({x:951},0).wait(1).to({x:743.3},0).wait(1).to({x:373.5},0).to({_off:true},45).wait(107));

	// 背
	this.instance_34 = new lib.s1037();
	this.instance_34.setTransform(1138,185,1,1,0,0,0,380,183);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(91).to({_off:false},0).wait(1).to({x:1075.3},0).wait(1).to({x:945.2},0).wait(1).to({x:737.9},0).wait(1).to({x:374},0).to({_off:true},45).wait(107));

	// 图层 33
	this.instance_35 = new lib.s10315();
	this.instance_35.setTransform(275,480,1,1,0,0,0,185,0);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(115).to({_off:false},0).to({regX:185.1,regY:0.1,rotation:6.4,x:275.2,y:480.1},2).wait(2).to({regX:92.5,regY:93,x:172.6,y:557},0).wait(1).to({y:548.9},0).wait(1).to({y:537.1},0).wait(1).to({y:520.1},0).wait(1).to({regX:185.1,regY:0.1,x:275.2,y:410.1},0).to({_off:true},17).wait(107));

	// 黑杆
	this.instance_36 = new lib.s1036();
	this.instance_36.setTransform(383.5,1236.5,1,1,0,0,0,381.5,12.5);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(106).to({_off:false},0).wait(1).to({x:383.4,y:1174.7},0).wait(1).to({x:383.3,y:1065.7},0).wait(1).to({x:383.1,y:906.8},0).wait(1).to({x:382.9,y:678.7},0).wait(1).to({x:382.5,y:356.5},0).wait(12).to({_off:true},17).wait(107));

	// 手
	this.instance_37 = new lib.s10312();
	this.instance_37.setTransform(517.7,1940.1,1,1,-10,0,0,243.1,364.1);
	this.instance_37._off = true;

	this.instance_38 = new lib.s1035();
	this.instance_38.setTransform(531.2,1086.1,1,1,-9.7,0,0,243.2,364.1);
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(106).to({_off:false},0).wait(1).to({regX:121.5,regY:182,rotation:-9.9,x:367.3,y:1720.3},0).wait(1).to({x:369.4,y:1603.8},0).wait(1).to({rotation:-9.8,x:372.1,y:1440.9},0).wait(1).to({x:375.7,y:1224.6},0).to({_off:true},1).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(111).to({_off:false},0).wait(1).to({rotation:2.5,x:503.1,y:1070.2},3).wait(4).to({regX:121.5,regY:182,rotation:2.8,x:389.4,y:879.9},0).wait(1).to({rotation:3.4,x:389.1,y:874.8},0).wait(1).to({rotation:4.2,x:388.6,y:866.5},0).wait(1).to({rotation:5.7,x:388,y:852.9},0).wait(1).to({regX:243.2,regY:364.2,rotation:7.7,x:483.1,y:1030.3},0).to({_off:true},17).wait(107));

	// 遮罩 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_111 = new cjs.Graphics().p("Eg7DBF4MAAAiLvMB2GAAAMAAACLvg");
	var mask_1_graphics_115 = new cjs.Graphics().p("Eg7DBF4MAAAiLvMB2GAAAMAAACLvg");
	var mask_1_graphics_118 = new cjs.Graphics().p("Eg7DBF4MAAAiLvMB2GAAAMAAACLvg");
	var mask_1_graphics_123 = new cjs.Graphics().p("Eg7DBF4MAAAiLvMB2GAAAMAAACLvg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(111).to({graphics:mask_1_graphics_111,x:379,y:803.8}).wait(4).to({graphics:mask_1_graphics_115,x:379,y:803.8}).wait(3).to({graphics:mask_1_graphics_118,x:379,y:803.8}).wait(5).to({graphics:mask_1_graphics_123,x:379,y:803.8}).wait(124));

	// 骆驼
	this.instance_39 = new lib.s10313();
	this.instance_39.setTransform(377,1709,1,1,0,0,0,312,476);
	this.instance_39._off = true;

	this.instance_39.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(106).to({_off:false},0).wait(1).to({x:376.9,y:1629.9},0).wait(1).to({x:376.8,y:1530.5},0).wait(1).to({x:376.6,y:1375.7},0).wait(1).to({x:376.4,y:1159.2},0).wait(1).to({x:376,y:829},0).wait(8).to({y:824.9},0).wait(1).to({y:817},0).wait(1).to({y:804.4},0).wait(1).to({y:784.4},0).wait(1).to({y:747},0).to({_off:true},17).wait(107));

	// 上臂
	this.instance_40 = new lib.s1033();
	this.instance_40.setTransform(652.1,1546.1,1,1,2,0,0,200.1,0.1);
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(106).to({_off:false},0).wait(1).to({regX:100,regY:204,rotation:1.9,x:546,y:1674.6},0).wait(1).to({rotation:1.8,x:547.7,y:1551.8},0).wait(1).to({rotation:1.7,x:549.9,y:1385.5},0).wait(1).to({rotation:1.5,x:552.7,y:1176.4},0).wait(1).to({regX:200.1,regY:0.1,rotation:1.3,x:661.1,y:690.1},0).wait(1).to({regY:0,rotation:2.5,x:651,y:666.1},3).wait(4).to({regX:100,regY:204,rotation:2.8,x:542.3,y:863.7},0).wait(1).to({rotation:3.4,x:542.4,y:860.7},0).wait(1).to({rotation:4.3,x:542.7,y:855.5},0).wait(1).to({rotation:5.9,x:543.3,y:846.8},0).wait(1).to({regX:200.2,regY:0.1,rotation:8.9,x:675.1,y:644.1},0).to({_off:true},17).wait(107));

	// 人身
	this.instance_41 = new lib.s1032();
	this.instance_41.setTransform(370,1703.5,1,1,0,0,0,379,400.5);
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(106).to({_off:false},0).wait(1).to({x:370.9,y:1608.2},0).wait(1).to({x:372,y:1497.4},0).wait(1).to({x:373.4,y:1346.2},0).wait(1).to({x:375.5,y:1121.7},0).wait(1).to({x:378,y:850.5},0).wait(1).to({y:828.5},3).wait(4).to({y:827.7},0).wait(1).to({y:826.3},0).wait(1).to({y:824.3},0).wait(1).to({y:821.2},0).wait(1).to({y:816.5},0).to({_off:true},17).wait(107));

	// 图层 2
	this.instance_42 = new lib.s10320();
	this.instance_42.setTransform(381.5,2506.4,1,1,0,0,0,380.5,708.1);
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(106).to({_off:false},0).wait(1).to({regY:439,y:2112.7},0).wait(1).to({y:1935.3},0).wait(1).to({y:1685.6},0).wait(1).to({y:1347.1},0).wait(1).to({regY:708.1,y:1064.6},0).to({_off:true},29).wait(107));

	// 背
	this.instance_43 = new lib.s10314();
	this.instance_43.setTransform(386,1664,1,1,0,0,0,378,440);
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(106).to({_off:false},0).wait(1).to({x:385.4,y:1600.9},0).wait(1).to({x:384.5,y:1503.3},0).wait(1).to({x:383.2,y:1356.5},0).wait(1).to({x:381,y:1122.1},0).wait(1).to({x:378,y:789},0).to({_off:true},29).wait(107));

	// 字
	this.instance_44 = new lib.s1024();
	this.instance_44.setTransform(336,968.5,1,1,0,0,0,67,68.5);
	this.instance_44.alpha = 0;
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(53).to({_off:false},0).to({rotation:11.5,x:336.1,alpha:1},3).wait(5).to({alpha:0},5).wait(9).to({regX:67.1,rotation:18.2,x:336.2,alpha:1},3).wait(6).to({alpha:0},5).wait(8).to({regX:67,rotation:11.5,x:336.1},0).to({regX:67.1,rotation:18.2,x:336.2,alpha:1},3).to({_off:true},15).wait(132));

	// 铃铛
	this.instance_45 = new lib.s1023();
	this.instance_45.setTransform(332.5,732,1,1,0,0,0,142.5,10);
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(52).to({_off:false},0).wait(1).to({regX:118.5,regY:82,rotation:7.7,x:299,y:800.1},0).wait(1).to({regX:142.5,regY:10,rotation:22.4,x:332.6,y:732},0).wait(1).to({regX:118.5,regY:82,rotation:7.1,x:300.6,y:799.3},0).wait(1).to({rotation:-3,x:313.7,y:803.2},0).wait(1).to({rotation:-10.2,x:323.4,y:804.6},0).wait(1).to({regX:142.6,regY:10.1,rotation:-15.6,x:334.7,y:729.1},0).wait(1).to({regX:118.5,regY:82,rotation:-2.4,x:313.7,y:801.9},0).wait(1).to({rotation:3.1,x:306.7,y:799.5},0).wait(1).to({regX:142.6,regY:10.2,rotation:5.4,x:334.7,y:729.2},0).wait(1).to({regX:118.5,regY:82,rotation:-1.4,x:312.4,y:801.5},0).wait(1).to({rotation:-4.1,x:315.8,y:802.5},0).wait(1).to({rotation:-5.1,x:317.1,y:802.8},0).wait(1).to({regX:142.7,regY:10.2,rotation:-5.3,x:334.8,y:729.2},0).wait(8).to({regX:118.5,regY:82,rotation:-3.2,x:313.6,y:803.3},0).wait(1).to({regX:142.5,regY:10,rotation:0,x:332.5,y:732},0).wait(1).to({regX:118.5,regY:82,rotation:10.9,x:295.3,y:798.1},0).wait(1).to({rotation:17.8,x:287.7,y:793.2},0).wait(1).to({regX:142.5,regY:10,rotation:22.4,x:332.6,y:732},0).wait(1).to({regX:118.5,regY:82,rotation:7,x:300.7,y:799.3},0).wait(1).to({rotation:-3.2,x:314,y:803.2},0).wait(1).to({rotation:-10,x:323.1,y:804.5},0).wait(1).to({regX:142.6,regY:10.1,rotation:-15.6,x:334.7,y:729.1},0).wait(1).to({regX:118.5,regY:82,rotation:-3.3,x:314.7,y:802.2},0).wait(1).to({rotation:2.5,x:307.5,y:799.8},0).wait(1).to({regX:142.6,regY:10.2,rotation:5.4,x:334.7,y:729.2},0).wait(1).to({regX:118.5,regY:82,rotation:-1.4,x:312.3,y:801.5},0).wait(1).to({rotation:-4.1,x:315.8,y:802.5},0).wait(1).to({rotation:-5.2,x:317.2,y:802.9},0).wait(1).to({regX:142.7,regY:10.2,rotation:-5.3,x:334.8,y:729.2},0).wait(7).to({regX:118.5,regY:82,rotation:-3.2,x:313.6,y:803.3},0).wait(1).to({regX:142.5,regY:10,rotation:0,x:332.5,y:732},0).wait(1).to({regX:118.5,regY:82,rotation:10.9,x:295.3,y:798.1},0).wait(1).to({rotation:17.8,x:287.7,y:793.2},0).wait(1).to({regX:142.5,regY:10,rotation:22.4,x:332.6,y:732},0).wait(1).to({regX:118.5,regY:82,rotation:7,x:300.7,y:799.3},0).wait(1).to({rotation:-3.2,x:314,y:803.2},0).wait(1).to({rotation:-10,x:323.1,y:804.5},0).wait(1).to({regX:142.6,regY:10.1,rotation:-15.6,x:334.7,y:729.1},0).wait(1).to({regX:118.5,regY:82,rotation:-3.3,x:314.7,y:802.2},0).wait(1).to({rotation:2.5,x:307.5,y:799.8},0).wait(1).to({regX:142.6,regY:10.2,rotation:5.4,x:334.7,y:729.2},0).to({_off:true},9).wait(132));

	// 脖子
	this.instance_46 = new lib.s1021();
	this.instance_46.setTransform(376.5,615.5,1,1,0,0,0,378.5,615.5);
	this.instance_46._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(52).to({_off:false},0).to({_off:true},63).wait(132));

	// 背景
	this.instance_47 = new lib.s1022();
	this.instance_47.setTransform(378,614.5,1,1,0,0,0,377,614.5);
	this.instance_47._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(52).to({_off:false},0).to({_off:true},63).wait(132));

	// 气泡
	this.instance_48 = new lib.s10111();
	this.instance_48.setTransform(552.2,371.7,0.471,1,30,0,0,297.4,282.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_48).to({regX:297.1,scaleX:1,rotation:-6.9,x:536.1,y:371.6},2).to({regX:297.2,regY:282.7,rotation:0.8,x:536.2,y:371.7},2).wait(1).to({regY:282.6,rotation:-1.1,x:536.3,y:371.6},0).to({_off:true},47).wait(195));

	// 白前手1
	this.instance_49 = new lib.s1014();
	this.instance_49.setTransform(239.3,606.7,1,1,22.9,0,0,4.8,23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(25).to({regY:24,rotation:-0.5,x:246.8,y:600.8},6).to({_off:true},21).wait(195));

	// 白前手
	this.instance_50 = new lib.s1013();
	this.instance_50.setTransform(191.2,594.8,1,1,4.2,0,0,51,109.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(26).to({rotation:2.6,x:194.3,y:593.9},0).wait(1).to({rotation:1.6,x:196.1,y:593.3},0).wait(1).to({rotation:0.9,x:197.4,y:593},0).wait(1).to({rotation:0.4,x:198.3,y:592.7},0).wait(1).to({rotation:0.1,x:198.9,y:592.6},0).wait(1).to({rotation:0,x:199,y:592.5},0).to({_off:true},21).wait(195));

	// 白
	this.instance_51 = new lib.s1012();
	this.instance_51.setTransform(220,733.5,1,1,0,0,0,145,396.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_51).to({_off:true},52).wait(195));

	// 白后手
	this.instance_52 = new lib.s1015();
	this.instance_52.setTransform(207,622,1,1,-6.5,0,0,20,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(9).to({x:211},0).wait(1).to({x:225.6,y:604.3},0).wait(1).to({x:233.1,y:595.3},0).wait(1).to({x:237.1,y:590.4},0).wait(1).to({x:239.1,y:588},0).wait(1).to({x:240,y:587},0).to({_off:true},38).wait(195));

	// 后手
	this.instance_53 = new lib.s1016();
	this.instance_53.setTransform(240.6,575.9,1,1,-6.5,0,0,28.6,45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(9).to({x:244.6},0).wait(1).to({regX:28.5,scaleX:1.06,scaleY:1.06,x:259,y:559.2},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:266.4,y:550.7},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:271.4,y:544.9},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:273.7,y:542.2},0).wait(1).to({regX:28.8,regY:45.7,scaleX:1.12,scaleY:1.12,x:274.8,y:541.2},0).to({_off:true},38).wait(195));

	// 人
	this.instance_54 = new lib.s1017();
	this.instance_54.setTransform(592,754.5,1,1,0,0,0,103.5,387);

	this.timeline.addTween(cjs.Tween.get(this.instance_54).to({_off:true},52).wait(195));

	// 钱手1
	this.instance_55 = new lib.s1018();
	this.instance_55.setTransform(553.2,636.4,1,1,-81.5,0,0,194.8,122.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(18).to({regY:122.4,rotation:1.3,x:507.6,y:649.7},7).wait(1).to({regX:105.1,regY:62.7,rotation:-1.6,x:411.5,y:592.5},0).wait(1).to({rotation:-3.4,x:406.6,y:595.5},0).wait(1).to({rotation:-4.7,x:403.3,y:597.6},0).wait(1).to({rotation:-5.5,x:401.2,y:598.9},0).wait(1).to({regX:194.8,regY:122.4,rotation:-5.9,x:495.6,y:649.7},0).to({_off:true},22).wait(195));

	// 钱手
	this.instance_56 = new lib.s1019();
	this.instance_56.setTransform(550.7,530.7,1,1,-20.7,0,0,54.9,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(18).to({regX:55,rotation:-0.8,x:544.8,y:530.6},7).wait(1).to({regX:30.5,regY:63.5,rotation:0.8,x:519.5,y:591.3},0).wait(1).to({rotation:1.6,x:518.6,y:590.8},0).wait(1).to({rotation:2.2,x:518,y:590.6},0).wait(1).to({rotation:2.5,x:517.7,y:590.5},0).wait(1).to({regX:55.1,regY:2.5,rotation:2.7,x:544.9,y:530.6},0).to({_off:true},22).wait(195));

	// 骆驼眼
	this.instance_57 = new lib.s10113();
	this.instance_57.setTransform(112.9,374.1,1,1,0,0,0,13.9,7.3);
	this.instance_57._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(3).to({_off:false},0).to({_off:true},2).wait(8).to({_off:false},0).to({_off:true},2).wait(14).to({_off:false},0).to({_off:true},2).wait(12).to({_off:false},0).to({_off:true},2).wait(202));

	// 骆驼
	this.instance_58 = new lib.s10110();
	this.instance_58.setTransform(382,693.5,1,1,0,0,0,374,370.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_58).to({_off:true},52).wait(195));

	// 背
	this.instance_59 = new lib.s1011();
	this.instance_59.setTransform(377.5,611.8,1,1,0,0,0,377.5,611.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_59).to({_off:true},52).wait(195));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,756,1223.5);


// stage content:



(lib.qj_s10 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s10();
	this.instance.setTransform(378,611.8,1,1,0,0,0,378,611.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(375,610,756,1223.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;