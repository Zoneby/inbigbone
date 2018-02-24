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
		{src:"images/cv/s36shine.png", id:"s36shine"},
		{src:"images/cv/cm_line.png", id:"cm_line"},
		{src:"images/cv/s31Manhand.png", id:"s31Manhand"},
		{src:"images/cv/s31Womanhand.png", id:"s31Womanhand"},
		{src:"images/cv/s31bg.jpg", id:"s31bg"},
		{src:"images/cv/s32bg.jpg", id:"s32bg"},
		{src:"images/cv/s32boom.png", id:"s32boom"},
		{src:"images/cv/s32ding.png", id:"s32ding"},
		{src:"images/cv/s32Manhand.png", id:"s32Manhand"},
		{src:"images/cv/s32Womanhand.png", id:"s32Womanhand"},
		{src:"images/cv/s32.jpg", id:"s32"},
		{src:"images/cv/s33bgdown.png", id:"s33bgdown"},
		{src:"images/cv/s33bgup.png", id:"s33bgup"},
		{src:"images/cv/s33bg.jpg", id:"s33bg"},
		{src:"images/cv/s33ding.png", id:"s33ding"},
		{src:"images/cv/s33Man1.png", id:"s33Man1"},
		{src:"images/cv/s33Man2.png", id:"s33Man2"},
		{src:"images/cv/s33Man3.png", id:"s33Man3"},
		{src:"images/cv/s33xiaoxianxian.png", id:"s33xiaoxianxian"},
		{src:"images/cv/s34a.png", id:"s34a"},
		{src:"images/cv/s34b.png", id:"s34b"},
		{src:"images/cv/s34bg.jpg", id:"s34bg"},
		{src:"images/cv/s34face1.png", id:"s34face1"},
		{src:"images/cv/s34face2.png", id:"s34face2"},
		{src:"images/cv/s34face3.png", id:"s34face3"},
		{src:"images/cv/s34l.png", id:"s34l"},
		{src:"images/cv/s34Speedline1.png", id:"s34Speedline1"},
		{src:"images/cv/s34Speedline2.png", id:"s34Speedline2"},
		{src:"images/cv/s34Speedline3.png", id:"s34Speedline3"},
		{src:"images/cv/s34x.png", id:"s34x"},
		{src:"images/cv/s35bgdown.png", id:"s35bgdown"},
		{src:"images/cv/s35bgup.png", id:"s35bgup"},
		{src:"images/cv/s35boom1.png", id:"s35boom1"},
		{src:"images/cv/s35boom2.png", id:"s35boom2"},
		{src:"images/cv/s35boom3.png", id:"s35boom3"},
		{src:"images/cv/s35dong.png", id:"s35dong"},
		{src:"images/cv/s35foot.png", id:"s35foot"},
		{src:"images/cv/s35hand.png", id:"s35hand"},
		{src:"images/cv/s35scabbard.png", id:"s35scabbard"},
		{src:"images/cv/s35shadow.png", id:"s35shadow"},
		{src:"images/cv/s35speedlineup.png", id:"s35speedlineup"},
		{src:"images/cv/s35sword.png", id:"s35sword"},
		{src:"images/cv/s35table.png", id:"s35table"},
		{src:"images/cv/s35white.png", id:"s35white"},
		{src:"images/cv/s36man.jpg", id:"s36man"},
		{src:"images/cv/s36woman.png", id:"s36woman"},
		{src:"images/cv/s36zi.png", id:"s36zi"}
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



(lib.s36shine = function() {
	this.initialize(img.s36shine);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,323);


(lib.cm_line = function() {
	this.initialize(img.cm_line);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,1862);


(lib.s31Manhand = function() {
	this.initialize(img.s31Manhand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,184,437);


(lib.s31Womanhand = function() {
	this.initialize(img.s31Womanhand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,246,385);


(lib.s31bg = function() {
	this.initialize(img.s31bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s32bg = function() {
	this.initialize(img.s32bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s32boom = function() {
	this.initialize(img.s32boom);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,104);


(lib.s32ding = function() {
	this.initialize(img.s32ding);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,137);


(lib.s32Manhand = function() {
	this.initialize(img.s32Manhand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,724,1221);


(lib.s32Womanhand = function() {
	this.initialize(img.s32Womanhand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,616,1024);


(lib.s32 = function() {
	this.initialize(img.s32);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s33bgdown = function() {
	this.initialize(img.s33bgdown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,648);


(lib.s33bgup = function() {
	this.initialize(img.s33bgup);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,566);


(lib.s33bg = function() {
	this.initialize(img.s33bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s33ding = function() {
	this.initialize(img.s33ding);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,108);


(lib.s33Man1 = function() {
	this.initialize(img.s33Man1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1121);


(lib.s33Man2 = function() {
	this.initialize(img.s33Man2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1121);


(lib.s33Man3 = function() {
	this.initialize(img.s33Man3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1121);


(lib.s33xiaoxianxian = function() {
	this.initialize(img.s33xiaoxianxian);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,99);


(lib.s34a = function() {
	this.initialize(img.s34a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,112);


(lib.s34b = function() {
	this.initialize(img.s34b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,110);


(lib.s34bg = function() {
	this.initialize(img.s34bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s34face1 = function() {
	this.initialize(img.s34face1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,747,1220);


(lib.s34face2 = function() {
	this.initialize(img.s34face2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s34face3 = function() {
	this.initialize(img.s34face3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,744,1220);


(lib.s34l = function() {
	this.initialize(img.s34l);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,116);


(lib.s34Speedline1 = function() {
	this.initialize(img.s34Speedline1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,741,1220);


(lib.s34Speedline2 = function() {
	this.initialize(img.s34Speedline2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,744,1220);


(lib.s34Speedline3 = function() {
	this.initialize(img.s34Speedline3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,733,1220);


(lib.s34x = function() {
	this.initialize(img.s34x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,111);


(lib.s35bgdown = function() {
	this.initialize(img.s35bgdown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,619);


(lib.s35bgup = function() {
	this.initialize(img.s35bgup);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,781);


(lib.s35boom1 = function() {
	this.initialize(img.s35boom1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,74);


(lib.s35boom2 = function() {
	this.initialize(img.s35boom2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,247,101);


(lib.s35boom3 = function() {
	this.initialize(img.s35boom3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,246,58);


(lib.s35dong = function() {
	this.initialize(img.s35dong);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,146);


(lib.s35foot = function() {
	this.initialize(img.s35foot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,446,483);


(lib.s35hand = function() {
	this.initialize(img.s35hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,389,492);


(lib.s35scabbard = function() {
	this.initialize(img.s35scabbard);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,272);


(lib.s35shadow = function() {
	this.initialize(img.s35shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,45);


(lib.s35speedlineup = function() {
	this.initialize(img.s35speedlineup);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,782);


(lib.s35sword = function() {
	this.initialize(img.s35sword);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,741,373);


(lib.s35table = function() {
	this.initialize(img.s35table);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,149);


(lib.s35white = function() {
	this.initialize(img.s35white);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,230);


(lib.s36man = function() {
	this.initialize(img.s36man);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s36woman = function() {
	this.initialize(img.s36woman);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,442,566);


(lib.s36zi = function() {
	this.initialize(img.s36zi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,983,449);


(lib.s36zi_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s36zi();
	this.instance.setTransform(-290.5,-186.5,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-290.5,-186.5,688.1,314.3);


(lib.s36woman_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s36woman();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,442,566);


(lib.s36shine_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s36shine();
	this.instance.setTransform(-115.5,-161.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.5,-161.5,231,323);


(lib.s35speedlinedown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cm_line();
	this.instance.setTransform(0,0,1,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1200,1117.2);


(lib.s35shadow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s35shadow();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,423,45);


(lib.s35scabbard_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s35scabbard();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182,272);


(lib.s35handandsword = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s35hand();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// 图层 2
	this.instance_1 = new lib.s35sword();
	this.instance_1.setTransform(-254,254);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-254,0,741,627);


(lib.s35foot_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s35foot();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,446,483);


(lib.s35dong_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s35dong();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144,146);


(lib.s35boom3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s35boom3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,246,58);


(lib.s35boom2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s35boom2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,247,101);


(lib.s35boom1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s35boom1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,111,74);


(lib.s34x_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s34x();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116,111);


(lib.s34l_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s34l();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,111,116);


(lib.s34b_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s34b();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,118,110);


(lib.s34a_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s34a();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114,112);


(lib.s34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.s34Speedline1();

	this.instance_1 = new lib.s34Speedline2();
	this.instance_1._off = true;

	this.instance_2 = new lib.s34Speedline3();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(2));

	// 图层 2
	this.instance_3 = new lib.s34face1();

	this.instance_4 = new lib.s34face2();
	this.instance_4._off = true;

	this.instance_5 = new lib.s34face3();
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(2));

	// 图层 4
	this.instance_6 = new lib.s34bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(97));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s33xiaoxianxian_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s33xiaoxianxian();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101,99);


(lib.s33up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s33bgup();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,566);


(lib.s33Man1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s33Man1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1121);


(lib.s33down = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s33bgdown();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,648);


(lib.s33ding_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s33ding();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,108);


(lib.s32Womanhand_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s32Womanhand();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,616,1024);


(lib.s32Manhand_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s32Manhand();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,724,1221);


(lib.s32ding_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s32ding();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,128,137);


(lib.s32boom_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s32boom();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168,104);


(lib.s31Womanhand_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s31Womanhand();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,246,385);


(lib.s31Manhand_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s31Manhand();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,184,437);


(lib.s35up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// s3-5 scabbard
	this.instance = new lib.s35scabbard_1();
	this.instance.setTransform(91,467,1,1,0,0,0,91,136);

	this.instance_1 = new lib.s35scabbard();
	this.instance_1.setTransform(0,373);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},15).to({state:[{t:this.instance_1}]},70).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({y:509},15).to({_off:true},70).wait(1));

	// s3-5 hand and sword
	this.instance_2 = new lib.s35handandsword();
	this.instance_2.setTransform(297.5,246,1,1,0,0,0,194.5,246);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({x:449.5},15).wait(71));

	// s3-5 speed line up
	this.instance_3 = new lib.s35speedlineup();
	this.instance_3.setTransform(-38,-72,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:-28},0).wait(1).to({x:-46},0).wait(1).to({x:-35,y:-68},0).wait(1).to({x:-46,y:-72},0).wait(1).to({x:-28},0).wait(1).to({x:-38},0).wait(1).to({x:-28},0).wait(1).to({x:-46},0).wait(1).to({x:-35,y:-68},0).wait(1).to({x:-46,y:-72},0).wait(1).to({x:-28},0).wait(1).to({x:-38},0).wait(1).to({x:-28},0).wait(1).to({x:-46},0).wait(1).to({x:-35,y:-68},0).wait(1).to({x:-46,y:-72},0).wait(1).to({x:-28},0).wait(1).to({x:-38},0).wait(1).to({x:-28},0).wait(1).to({x:-46},0).wait(1).to({x:-35,y:-68},0).wait(1).to({x:-46,y:-72},0).wait(1).to({x:-28},0).wait(1).to({x:-38},0).wait(1).to({x:-28},0).wait(1).to({x:-46},0).wait(1).to({x:-35,y:-68},0).wait(1).to({x:-46,y:-72},0).wait(1).to({x:-28},0).wait(1).to({x:-38},0).wait(1).to({x:-28},0).wait(1).to({x:-46},0).wait(1).to({x:-35,y:-68},0).wait(1).to({x:-46,y:-72},0).wait(1).to({x:-28},0).wait(1).to({x:-38},0).wait(1).to({x:-28},0).wait(1).to({x:-46},0).wait(1).to({x:-35,y:-68},0).wait(1).to({x:-46,y:-72},0).wait(1).to({x:-28},0).wait(1).to({x:-38},0).wait(1).to({x:-28},0).wait(1).to({x:-46},0).wait(1).to({x:-35,y:-68},0).wait(1).to({x:-46,y:-72},0).wait(2).to({x:-28},0).wait(1).to({x:-38},0).wait(1).to({x:-28},0).wait(1).to({x:-46},0).wait(1).to({x:-28},0).wait(1).to({x:-46},0).wait(1).to({x:-35,y:-68},0).wait(1).to({x:-46,y:-72},0).wait(1).to({x:-28},0).wait(1).to({x:-38},0).wait(1).to({x:-28},0).wait(1).to({x:-46},0).wait(1).to({x:-35,y:-68},0).wait(1).to({x:-46,y:-72},0).wait(2).to({x:-28},0).wait(1).to({x:-38},0).wait(1).to({x:-28},0).wait(1).to({x:-46},0).wait(1).to({x:-28},0).wait(1).to({x:-46},0).wait(1).to({x:-35,y:-68},0).wait(1).to({x:-46,y:-72},0).wait(1).to({x:-28},0).wait(1).to({x:-38},0).wait(1).to({x:-28},0).wait(1).to({x:-46},0).wait(1).to({x:-35,y:-68},0).wait(1).to({x:-46,y:-72},0).wait(2).to({x:-28},0).wait(1).to({x:-38},0).wait(1).to({x:-28},0).wait(1).to({x:-46},0).wait(1).to({x:-28},0).wait(1).to({x:-46},0).wait(1).to({x:-35,y:-68},0).wait(1).to({x:-46,y:-72},0).wait(1).to({x:-28},0).wait(1).to({x:-38},0).wait(1).to({x:-28},0).wait(1).to({x:-46},0).wait(1));

	// 图层 5
	this.instance_4 = new lib.s35bgup();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151,-72,938,860.2);


(lib.s35down = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 8
	this.instance = new lib.s35white();
	this.instance.setTransform(0,577);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(70));

	// 图层 11
	this.instance_1 = new lib.s35dong_1();
	this.instance_1.setTransform(441,999,0.035,0.034,0,0,0,70.6,87.7);
	this.instance_1._off = true;

	this.instance_2 = new lib.s35dong();
	this.instance_2.setTransform(489,846);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},20).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},46).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).to({regX:72,regY:73,scaleX:1,scaleY:1,x:561,y:919},3).to({_off:true},46).wait(1));

	// 图层 10
	this.instance_3 = new lib.s35speedlinedown();
	this.instance_3.setTransform(367,1022.6,0,0,0,0,0,485.4,565);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).wait(1).to({regX:599.8,regY:558.8,scaleX:0.2,scaleY:0.2},0).wait(1).to({regX:599.9,regY:558.9,scaleX:0.4,scaleY:0.4},0).wait(1).to({regX:600,scaleX:0.75,scaleY:0.75,x:367.1},0).wait(1).to({regY:558.6,scaleX:1,scaleY:1,x:367},0).wait(1).to({x:373},0).wait(1).to({x:365},0).wait(1).to({x:361},0).wait(1).to({x:369},0).wait(1).to({y:1028.6},0).wait(1).to({y:1020.6},0).wait(1).to({x:375},0).wait(1).to({y:1016.6},0).wait(1).to({x:383},0).wait(1).to({x:375},0).wait(1).to({x:361,y:1022.6},0).wait(1).to({x:369},0).wait(1).to({y:1028.6},0).wait(1).to({y:1020.6},0).wait(1).to({x:375},0).to({_off:true},1).wait(31));

	// 图层 2
	this.instance_4 = new lib.s35foot_1();
	this.instance_4.setTransform(385,747.5,1,1,0,0,0,223,241.5);

	this.instance_5 = new lib.s35foot();
	this.instance_5.setTransform(162,686);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_4}]},15).to({state:[{t:this.instance_5}]},50).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({y:927.5},15).to({_off:true},50).wait(1));

	// 图层 6
	this.instance_6 = new lib.s35boom3_1();
	this.instance_6.setTransform(336,1153,0.002,0.009,0,0,0,147.8,34.8);
	this.instance_6._off = true;

	this.instance_7 = new lib.s35boom3();
	this.instance_7.setTransform(189,1176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},19).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_7}]},47).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({regX:123,regY:29,scaleX:1,scaleY:1,x:312,y:1205},3).to({_off:true},47).wait(1));

	// 图层 5
	this.instance_8 = new lib.s35boom2_1();
	this.instance_8.setTransform(466,1112,0.002,0.005,0,0,0,24.7,10.1);
	this.instance_8._off = true;

	this.instance_9 = new lib.s35boom2();
	this.instance_9.setTransform(466,1112);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},19).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},47).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(19).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1},3).to({_off:true},47).wait(1));

	// 图层 4
	this.instance_10 = new lib.s35boom1_1();
	this.instance_10.setTransform(195.5,1139,0.005,0.007,0,0,0,55.6,37);
	this.instance_10._off = true;

	this.instance_11 = new lib.s35boom1();
	this.instance_11.setTransform(80,1112);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},19).to({state:[{t:this.instance_10}]},3).to({state:[{t:this.instance_11}]},47).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(19).to({_off:false},0).to({regX:55.5,scaleX:1,scaleY:1,x:135.5,y:1149},3).to({_off:true},47).wait(1));

	// 图层 3
	this.instance_12 = new lib.s35shadow_1();
	this.instance_12.setTransform(395.5,1151.5,0.7,0.7,0,0,0,211.6,22.6);

	this.instance_13 = new lib.s35shadow();
	this.instance_13.setTransform(184,1129);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_12}]},15).to({state:[{t:this.instance_13}]},50).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(4).to({scaleX:1,scaleY:1},15).to({_off:true},50).wait(1));

	// 图层 7
	this.instance_14 = new lib.s35table();
	this.instance_14.setTransform(0,1071);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(70));

	// 图层 12
	this.instance_15 = new lib.s35bgdown();
	this.instance_15.setTransform(0,601);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,506,750,714);


(lib.s3 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_299 = function() {
		this.stop();
		try{app.showBtns()}catch(e){}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(299).call(this.frame_299).wait(1));

	// 图层 2
	this.instance = new lib.s36zi_1();
	this.instance.setTransform(323.5,662.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(271).to({_off:false},0).to({alpha:1},6).wait(23));

	// s3-5 up
	this.instance_1 = new lib.s35up();
	this.instance_1.setTransform(-415,610,1,1,0,0,0,375,610);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(181).to({_off:false},0).to({x:375},9).wait(47).to({y:-188.2},9).to({_off:true},1).wait(53));

	// s3-5 down
	this.instance_2 = new lib.s35down();
	this.instance_2.setTransform(375,-90,1,1,0,0,0,375,610);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(200).to({_off:false},0).to({y:610},9).wait(28).to({y:1264.2},9).to({_off:true},1).wait(53));

	// 图层 13
	this.instance_3 = new lib.s36shine_1();
	this.instance_3.setTransform(148.5,113,0.006,0.004,0,0,0,0,-49.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(249).to({_off:false},0).to({regY:-51.5,scaleX:1,scaleY:1},9).wait(3).to({alpha:0},4).wait(35));

	// s3-6 woman
	this.instance_4 = new lib.s36woman_1();
	this.instance_4.setTransform(245.9,1219,1,1,20,0,0,132.9,565.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(237).to({_off:false},0).to({rotation:0,x:155.9,y:1219.1},28).wait(35));

	// s3-6
	this.instance_5 = new lib.s36man();
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(237).to({_off:false},0).wait(63));

	// s3-5 l
	this.instance_6 = new lib.s34l_1();
	this.instance_6.setTransform(78.6,1116.1,1.4,1.4,0,0,0,55.6,58.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(161).to({_off:false},0).to({regX:55.5,regY:58,scaleX:1,scaleY:1,x:78.5,y:1116,alpha:1},8).wait(1).to({x:76.5},0).wait(1).to({y:1118},0).wait(1).to({y:1116},0).wait(1).to({x:78.5},0).wait(1).to({y:1120},0).wait(1).to({x:82.5},0).wait(1).to({x:78.5,y:1116},0).wait(1).to({x:76.5},0).wait(1).to({y:1118},0).wait(1).to({y:1116},0).wait(1).to({x:78.5},0).wait(1).to({y:1120},0).wait(1).to({x:82.5},0).wait(1).to({x:78.5,y:1116},0).wait(1).to({x:76.5},0).wait(1).to({y:1118},0).wait(1).to({y:1116},0).wait(1).to({x:78.5},0).wait(1).to({y:1120},0).wait(1).to({x:82.5},0).wait(1).to({x:80.5,y:1116},0).wait(1).to({x:78.5},0).wait(1).to({x:76.5},0).wait(1).to({y:1118},0).wait(1).to({y:1116},0).wait(1).to({x:78.5},0).wait(1).to({y:1120},0).wait(1).to({x:82.5},0).wait(1).to({x:80.5,y:1116},0).wait(1).to({x:78.5,y:1120},0).wait(1).to({x:82.5},0).wait(1).to({x:80.5,y:1116},0).wait(1).to({x:78.5},0).wait(1).to({x:76.5},0).wait(1).to({y:1118},0).wait(1).to({y:1116},0).wait(1).to({x:78.5},0).wait(1).to({y:1120},0).wait(1).to({x:82.5},0).to({_off:true},1).wait(91));

	// s3-5 b
	this.instance_7 = new lib.s34b_1();
	this.instance_7.setTransform(78.2,1012,2.17,2.4,0,0,0,59,55);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(157).to({_off:false},0).to({scaleX:1,scaleY:1,x:78,alpha:1},8).wait(1).to({x:80},0).wait(1).to({x:76},0).wait(1).to({y:1016},0).wait(1).to({y:1012},0).wait(1).to({x:78},0).wait(1).to({y:1014},0).wait(1).to({y:1012},0).wait(1).to({x:80},0).wait(1).to({x:76},0).wait(1).to({y:1016},0).wait(1).to({y:1012},0).wait(1).to({x:78},0).wait(2).to({x:80},0).wait(1).to({x:76},0).wait(1).to({y:1016},0).wait(1).to({y:1012},0).wait(1).to({x:78},0).wait(2).to({x:80},0).wait(1).to({x:76},0).wait(1).to({y:1016},0).wait(1).to({y:1012},0).wait(1).to({x:78},0).wait(1).to({y:1014},0).wait(1).to({x:76,y:1012},0).wait(1).to({y:1016},0).wait(1).to({y:1012},0).wait(1).to({x:78},0).wait(2).to({x:80},0).wait(1).to({x:76},0).wait(1).to({y:1016},0).wait(1).to({y:1012},0).wait(1).to({x:78},0).wait(1).to({x:76},0).wait(1).to({x:78},0).wait(2).to({x:80},0).wait(1).to({x:76},0).wait(1).to({y:1016},0).wait(1).to({y:1012},0).wait(1).to({x:78},0).to({_off:true},1).wait(91));

	// s3-4 x
	this.instance_8 = new lib.s34x_1();
	this.instance_8.setTransform(78,906.5,2.4,2.4,0,0,0,58,55.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(153).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},8).wait(1).to({x:80},0).wait(1).to({x:76},0).wait(1).to({y:908.5},0).wait(1).to({x:78},0).wait(1).to({y:904.5},0).wait(1).to({y:906.5},0).wait(1).to({x:80},0).wait(1).to({x:76},0).wait(1).to({y:908.5},0).wait(1).to({x:78},0).wait(1).to({y:904.5},0).wait(1).to({y:906.5},0).wait(1).to({x:80},0).wait(1).to({x:76},0).wait(1).to({y:908.5},0).wait(1).to({x:78},0).wait(1).to({y:904.5},0).wait(1).to({y:906.5},0).wait(1).to({x:80},0).wait(1).to({x:76},0).wait(1).to({y:908.5},0).wait(1).to({x:78},0).wait(1).to({y:904.5},0).wait(1).to({y:906.5},0).wait(1).to({x:80},0).wait(1).to({x:76},0).wait(1).to({y:908.5},0).wait(1).to({x:78},0).wait(1).to({y:904.5},0).wait(1).to({y:906.5},0).wait(2).to({x:80},0).wait(1).to({x:76},0).wait(1).to({y:908.5},0).wait(1).to({x:78},0).wait(1).to({y:904.5},0).wait(1).to({y:906.5},0).wait(1).to({x:80},0).wait(1).to({x:76},0).wait(1).to({y:908.5},0).wait(1).to({x:78},0).wait(1).to({y:904.5},0).wait(1).to({y:906.5},0).wait(1).to({x:80},0).wait(1).to({x:76},0).wait(1).to({y:908.5},0).wait(1).to({x:78},0).to({_off:true},1).wait(91));

	// s3-4 a
	this.instance_9 = new lib.s34a_1();
	this.instance_9.setTransform(80,712,2.4,2.4,0,0,0,57,56);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(143).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},8).wait(1).to({x:82},0).wait(1).to({x:80,y:714},0).wait(1).to({y:710},0).wait(1).to({x:78},0).wait(1).to({y:708},0).wait(1).to({x:80,y:712},0).wait(1).to({x:82},0).wait(1).to({x:80,y:714},0).wait(1).to({y:710},0).wait(1).to({x:78},0).wait(1).to({y:708},0).wait(1).to({x:80,y:712},0).wait(1).to({x:82},0).wait(1).to({x:80,y:714},0).wait(1).to({y:710},0).wait(1).to({x:78},0).wait(1).to({y:708},0).wait(1).to({x:80,y:712},0).wait(1).to({x:82},0).wait(1).to({x:80,y:714},0).wait(1).to({y:710},0).wait(1).to({x:78},0).wait(1).to({y:708},0).wait(1).to({x:80,y:712},0).wait(1).to({x:82},0).wait(1).to({x:80,y:714},0).wait(1).to({y:710},0).wait(1).to({x:78},0).wait(1).to({y:708},0).wait(1).to({x:80,y:712},0).wait(1).to({x:82},0).wait(1).to({x:80,y:714},0).wait(1).to({y:710},0).wait(1).to({x:78},0).wait(1).to({y:708},0).wait(1).to({y:710},0).wait(1).to({x:80},0).wait(1).to({x:78},0).wait(1).to({y:708},0).wait(1).to({x:80,y:712},0).wait(1).to({x:82},0).wait(1).to({x:80,y:714},0).wait(1).to({y:710},0).wait(1).to({x:78},0).wait(1).to({y:708},0).wait(1).to({x:80,y:712},0).wait(1).to({x:82},0).wait(1).to({x:80,y:714},0).wait(1).to({y:710},0).wait(1).to({x:78},0).wait(1).to({y:708},0).wait(1).to({x:80,y:712},0).wait(1).to({x:82},0).wait(1).to({x:80,y:714},0).wait(1).to({y:710},0).wait(1).to({x:78},0).wait(1).to({y:708},0).to({_off:true},1).wait(91));

	// s3-4
	this.instance_10 = new lib.s34();
	this.instance_10.setTransform(375,1830,1,1,0,0,0,375,610);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(135).to({_off:false},0).to({y:610},4).to({_off:true},70).wait(91));

	// s3-3 xiaoxianxian 
	this.instance_11 = new lib.s33xiaoxianxian_1();
	this.instance_11.setTransform(181,208,0.005,0.005,0,0,0,111.2,99);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(122).to({_off:false},0).to({regX:101,scaleX:1,scaleY:1},5).to({_off:true},12).wait(161));

	// s3-3 ding
	this.instance_12 = new lib.s33ding_1();
	this.instance_12.setTransform(-196,726.2,2,2,0,0,0,100,54);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(79).to({_off:false},0).to({regX:119.9,regY:54.1,scaleX:0,scaleY:0.01,guide:{path:[-195.9,726.1,-193,721.6,-187,714.9,-174.8,701.3,-158.7,689.6,-107.2,652.1,-35.9,647.1,2.1,644.4,38.3,659.9,52.7,666,69.2,676,79,681.9,98.3,694.8,117.2,707.5,127,713.3,143.1,723,157,728.6,191.2,742.8,227,738.1,262.9,733.4,294.1,712.2,314.8,698,343.3,668,362.9,647.4,365.3,644.9,377.7,632.3,387.7,624.3,413.4,603.7,440,600.1,451.9,598.5,464.4,602.1,473.2,604.7,485.8,611.2,502,619.5,505.3,620.9,515.8,625.4,523.9,625.1]}},23).to({_off:true},1).wait(197));

	// s3-3 up 复制
	this.instance_13 = new lib.s33up();
	this.instance_13.setTransform(375,-295,1,1,0,0,0,375,283);
	this.instance_13.alpha = 0.488;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(116).to({_off:false},0).wait(1).to({y:-290},0).wait(1).to({y:-273.1},0).wait(1).to({y:-239.9},0).wait(1).to({y:-181.7},0).wait(1).to({y:-76.9},0).wait(1).to({y:283},0).to({_off:true},17).wait(161));

	// s3-3 down 2
	this.instance_14 = new lib.s33down();
	this.instance_14.setTransform(375,1556,1,1,0,0,0,375,324);
	this.instance_14.alpha = 0.5;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(116).to({_off:false},0).wait(1).to({y:1550.3},0).wait(1).to({y:1531.1},0).wait(1).to({y:1493.1},0).wait(1).to({y:1426.6},0).wait(1).to({y:1307},0).wait(1).to({y:896},0).to({_off:true},17).wait(161));

	// s3-3 Man 3
	this.instance_15 = new lib.s33Man3();
	this.instance_15.setTransform(0,99);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(122).to({_off:false},0).to({_off:true},17).wait(161));

	// s3-3 Man 2
	this.instance_16 = new lib.s33Man2();
	this.instance_16.setTransform(0,99);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(121).to({_off:false},0).to({_off:true},1).wait(178));

	// s3-3 Man 1
	this.instance_17 = new lib.s33Man1_1();
	this.instance_17.setTransform(817.1,659.5,2,2,0,0,0,375,560.5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(79).to({_off:false},0).wait(24).to({scaleX:2,scaleY:2,x:816.2,y:659.6},0).wait(1).to({scaleX:1.99,scaleY:1.99,x:813.3},0).wait(1).to({scaleX:1.98,scaleY:1.98,x:807.9},0).wait(1).to({scaleX:1.96,scaleY:1.96,x:799.1},0).wait(1).to({scaleX:1.93,scaleY:1.93,x:785.5,y:659.5},0).wait(1).to({scaleX:1.88,scaleY:1.88,x:764.9},0).wait(1).to({scaleX:1.81,scaleY:1.81,x:732.2},0).wait(1).to({scaleX:1.68,scaleY:1.68,x:673.9,y:659.6},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:549.2},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:430.4,y:659.5},0).wait(1).to({scaleX:1,scaleY:1,x:375},0).wait(7).to({_off:true},1).wait(179));

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000103").s().p("AhdBFIgBAAQgIgDgDgHQgEgHACgJQADgJAGgGQAHgIAWgJQA+gaA2gnQAegWARAHQAJAEAEAKQAEAJgEAJIgCADQgGAKgPAIIiDBLQgTALgLABIgFAAQgGAAgFgCg");
	this.shape.setTransform(0.9,1141.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#491B41").s().p("Ah9HrQgJgFgOgPQgPgQgIgFQgHgFgNgFIgUgJQgRgKgLgQQgLgRgDgTQgCgTAHgTQAHgTAOgNQAMgLAagNQAcgNALgJQgfgRgRg7QgMgsgHgwQgDgZgGgKQgEgHgJgIIgPgNQgPgQgDgXQgDgYAKgVQASgoAxgVQgMgYAEgdQAEgdASgUQgWgTgFgeQgFgdAOgZQAJgRATgPQAMgJAZgOIAOgIIAAAAQAHADAJgBQALgCATgLICDhNQAQgIAFgJIAMgCQAegDAaALQAdANALAYIAIAVQAEANAEAHQAEAGAJAIIANANQAVAYgEAgIgCAQQgCAJACAHQACAGAFAHIAKAMQAPAUABAaQABAbgOAVQgMATgZAOQgPAJggAMQgXAJgBANQAAAIAGAHIANAMQAXAVADAhQADAggSAZQAfAMANAiQAOAigOAeQgIAQggAjQgbAegFAXQAVASAJAaQAJAcgIAYQgOAmgyAWIgrAQQgaAJgPAIQgOAHgXARQgZARgNAHQgWALgWACIgIAAQgTAAgQgJg");
	this.shape_1.setTransform(3.9,1187.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},112).to({state:[]},1).wait(187));

	// s3-3 up
	this.instance_18 = new lib.s33up();
	this.instance_18.setTransform(375,-295,1,1,0,0,0,375,283);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(116).to({_off:false},0).wait(1).to({y:-290},0).wait(1).to({y:-273.1},0).wait(1).to({y:-239.9},0).wait(1).to({y:-181.7},0).wait(1).to({y:-76.9},0).wait(1).to({y:283},0).to({_off:true},17).wait(161));

	// s3-3 down
	this.instance_19 = new lib.s33down();
	this.instance_19.setTransform(375,1556,1,1,0,0,0,375,324);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(116).to({_off:false},0).wait(1).to({y:1550.3},0).wait(1).to({y:1531.1},0).wait(1).to({y:1493.1},0).wait(1).to({y:1426.6},0).wait(1).to({y:1307},0).wait(1).to({y:896},0).to({_off:true},17).wait(161));

	// s3-3 bg
	this.instance_20 = new lib.s33bg();
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(79).to({_off:false},0).to({_off:true},60).wait(161));

	// s3-2 ding
	this.instance_21 = new lib.s32ding_1();
	this.instance_21.setTransform(464.2,196.5,0.004,0.004,0,0,0,64,68.5);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(41).to({_off:false},0).to({scaleX:1.3,scaleY:1.3,guide:{path:[464.1,196.4,464.7,195.9,465.3,195.3,467.1,193.9,469.9,192.7,478.9,188.7,494.5,188,500.6,187.7,511.2,190.1,517.4,191.5,532.3,195.3,563.2,202.6,589.5,200,615.7,197.3,632,188.2,643.1,181.9,654.7,168.7,663.9,158.2,664.1,158,669.7,151.9,675.1,147.7,689.2,136.4,710.6,131,743.4,122.5,770.2,130.2,789.9,136,808.1,151.4,813.3,155.9,821.1,163.6,828.6,170.9,831.4,173.2,836.3,177.3,839.7,177.8,843.7,178.3,847.1,174.5]}},32,cjs.Ease.get(-1)).to({_off:true},1).wait(226));

	// s3-2 boom
	this.instance_22 = new lib.s32boom_1();
	this.instance_22.setTransform(412,266,0.003,0.005,0,0,0,100.8,114.5);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(41).to({_off:false},0).to({regX:84,regY:104,scaleX:1,scaleY:1},2).wait(2).to({alpha:0},4).to({_off:true},1).wait(250));

	// s3-2 Woman hand
	this.instance_23 = new lib.s32Womanhand_1();
	this.instance_23.setTransform(1178.1,1204.1,1,1,0,0,0,510.1,926.1);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(29).to({_off:false},0).to({rotation:10,x:1008.1,y:1204.2},6).to({rotation:0,x:838.1,y:1204.1},6).wait(37).to({_off:true},1).wait(221));

	// s3-2 Man hand
	this.instance_24 = new lib.s32Manhand_1();
	this.instance_24.setTransform(-382,1259.6,1,1,0,0,0,192,1097.6);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(29).to({_off:false},0).to({regX:191.8,rotation:-10,x:-202.1},6).to({regX:192,rotation:0,x:-22},6).wait(37).to({_off:true},1).wait(221));

	// s3-2 bg
	this.instance_25 = new lib.s32bg();

	this.instance_26 = new lib.s32();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_26},{t:this.instance_25}]},29).to({state:[{t:this.instance_26},{t:this.instance_25}]},49).to({state:[]},1).wait(221));

	// s3-Man hand
	this.instance_27 = new lib.s31Manhand_1();
	this.instance_27.setTransform(215,1048.6,1,1,0,0,0,19,435.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).to({regX:19.1,regY:435.7,rotation:4,y:1048.7},14).to({regX:19,regY:435.6,rotation:0,y:1048.6},15).to({regX:19.1,regY:435.7,rotation:4,y:1048.7},15).to({regX:19,regY:435.6,rotation:0,y:1048.6},15).to({_off:true},1).wait(240));

	// s3-Woman hand
	this.instance_28 = new lib.s31Womanhand_1();
	this.instance_28.setTransform(660.6,982.6,1,1,0,0,0,245.6,351.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).to({rotation:-6},14).to({rotation:0},15).to({rotation:-6},15).to({rotation:0},15).to({_off:true},1).wait(240));

	// s3-bg
	this.instance_29 = new lib.s31bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_29).to({_off:true},60).wait(240));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


// stage content:



(lib.qj_s3 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s3();
	this.instance.setTransform(375,610,1,1,0,0,0,375,610);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(375,610,750,1220);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;