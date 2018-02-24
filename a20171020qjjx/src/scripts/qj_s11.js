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
		{src:"images/cv/s11101.png", id:"s11101"},
		{src:"images/cv/s11104.png", id:"s11104"},
		{src:"images/cv/s11107.png", id:"s11107"},
		{src:"images/cv/s11111.png", id:"s11111"},
		{src:"images/cv/s11116.png", id:"s11116"},
		{src:"images/cv/s11118.png", id:"s11118"},
		{src:"images/cv/s11119.png", id:"s11119"},
		{src:"images/cv/s11130.png", id:"s11130"},
		{src:"images/cv/s11133.png", id:"s11133"},
		{src:"images/cv/s11134.png", id:"s11134"},
		{src:"images/cv/s11140.png", id:"s11140"},
		{src:"images/cv/s11141.png", id:"s11141"},
		{src:"images/cv/s11143.png", id:"s11143"},
		{src:"images/cv/s11146.png", id:"s11146"},
		{src:"images/cv/s11151.png", id:"s11151"},
		{src:"images/cv/s11153.png", id:"s11153"},
		{src:"images/cv/s11155.png", id:"s11155"},
		{src:"images/cv/s11201.png", id:"s11201"},
		{src:"images/cv/s11202.png", id:"s11202"},
		{src:"images/cv/s11203.png", id:"s11203"},
		{src:"images/cv/s11204.png", id:"s11204"},
		{src:"images/cv/s11205.png", id:"s11205"},
		{src:"images/cv/s11206.png", id:"s11206"},
		{src:"images/cv/s11207.png", id:"s11207"},
		{src:"images/cv/s11208.png", id:"s11208"},
		{src:"images/cv/s11210.png", id:"s11210"},
		{src:"images/cv/s11211.png", id:"s11211"},
		{src:"images/cv/s11213.png", id:"s11213"},
		{src:"images/cv/s11214.png", id:"s11214"},
		{src:"images/cv/s11215.png", id:"s11215"},
		{src:"images/cv/s11216.png", id:"s11216"},
		{src:"images/cv/s11217.png", id:"s11217"},
		{src:"images/cv/s11218.png", id:"s11218"},
		{src:"images/cv/s11219.png", id:"s11219"},
		{src:"images/cv/s11301.jpg", id:"s11301"},
		{src:"images/cv/s11302.png", id:"s11302"},
		{src:"images/cv/s11303.png", id:"s11303"},
		{src:"images/cv/s11304.png", id:"s11304"},
		{src:"images/cv/s11305.png", id:"s11305"},
		{src:"images/cv/s11306.png", id:"s11306"},
		{src:"images/cv/s11307.png", id:"s11307"},
		{src:"images/cv/s11308.png", id:"s11308"},
		{src:"images/cv/s11309.png", id:"s11309"},
		{src:"images/cv/s11310.png", id:"s11310"},
		{src:"images/cv/s11311.png", id:"s11311"},
		{src:"images/cv/s11312.png", id:"s11312"},
		{src:"images/cv/s11313.png", id:"s11313"},
		{src:"images/cv/s11402.png", id:"s11402"},
		{src:"images/cv/s11403.png", id:"s11403"},
		{src:"images/cv/s11404.png", id:"s11404"},
		{src:"images/cv/s11405.png", id:"s11405"},
		{src:"images/cv/s11406.png", id:"s11406"},
		{src:"images/cv/s11407.png", id:"s11407"},
		{src:"images/cv/s11408.png", id:"s11408"},
		{src:"images/cv/s11409.png", id:"s11409"},
		{src:"images/cv/s11410.png", id:"s11410"},
		{src:"images/cv/s11411.png", id:"s11411"},
		{src:"images/cv/s11412.png", id:"s11412"},
		{src:"images/cv/s11413.png", id:"s11413"}
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



(lib.s11101 = function() {
	this.initialize(img.s11101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1026,283);


(lib.s11104 = function() {
	this.initialize(img.s11104);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,276,344);


(lib.s11107 = function() {
	this.initialize(img.s11107);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,512,528);


(lib.s11111 = function() {
	this.initialize(img.s11111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,840,972);


(lib.s11116 = function() {
	this.initialize(img.s11116);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,852,1016);


(lib.s11118 = function() {
	this.initialize(img.s11118);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,828,1284);


(lib.s11119 = function() {
	this.initialize(img.s11119);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,828,1312);


(lib.s11130 = function() {
	this.initialize(img.s11130);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,808,348);


(lib.s11133 = function() {
	this.initialize(img.s11133);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,360);


(lib.s11134 = function() {
	this.initialize(img.s11134);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,548,488);


(lib.s11140 = function() {
	this.initialize(img.s11140);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,324);


(lib.s11141 = function() {
	this.initialize(img.s11141);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,272);


(lib.s11143 = function() {
	this.initialize(img.s11143);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,168);


(lib.s11146 = function() {
	this.initialize(img.s11146);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1096,960);


(lib.s11151 = function() {
	this.initialize(img.s11151);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,832,588);


(lib.s11153 = function() {
	this.initialize(img.s11153);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,636,1004);


(lib.s11155 = function() {
	this.initialize(img.s11155);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1026,355);


(lib.s11201 = function() {
	this.initialize(img.s11201);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,208,224);


(lib.s11202 = function() {
	this.initialize(img.s11202);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,178,1030);


(lib.s11203 = function() {
	this.initialize(img.s11203);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,228,1013);


(lib.s11204 = function() {
	this.initialize(img.s11204);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,368,994);


(lib.s11205 = function() {
	this.initialize(img.s11205);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,466,976);


(lib.s11206 = function() {
	this.initialize(img.s11206);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,178,70);


(lib.s11207 = function() {
	this.initialize(img.s11207);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,66);


(lib.s11208 = function() {
	this.initialize(img.s11208);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,178,60);


(lib.s11210 = function() {
	this.initialize(img.s11210);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,802,1290);


(lib.s11211 = function() {
	this.initialize(img.s11211);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,98);


(lib.s11213 = function() {
	this.initialize(img.s11213);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,948,846);


(lib.s11214 = function() {
	this.initialize(img.s11214);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,136);


(lib.s11215 = function() {
	this.initialize(img.s11215);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,912,128);


(lib.s11216 = function() {
	this.initialize(img.s11216);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,920,140);


(lib.s11217 = function() {
	this.initialize(img.s11217);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,968,184);


(lib.s11218 = function() {
	this.initialize(img.s11218);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,216,808);


(lib.s11219 = function() {
	this.initialize(img.s11219);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,776,784);


(lib.s11301 = function() {
	this.initialize(img.s11301);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s11302 = function() {
	this.initialize(img.s11302);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,185,59);


(lib.s11303 = function() {
	this.initialize(img.s11303);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,228,174);


(lib.s11304 = function() {
	this.initialize(img.s11304);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,278,157);


(lib.s11305 = function() {
	this.initialize(img.s11305);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,322,319);


(lib.s11306 = function() {
	this.initialize(img.s11306);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,319,334);


(lib.s11307 = function() {
	this.initialize(img.s11307);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,318,330);


(lib.s11308 = function() {
	this.initialize(img.s11308);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,108);


(lib.s11309 = function() {
	this.initialize(img.s11309);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,34);


(lib.s11310 = function() {
	this.initialize(img.s11310);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,411,933);


(lib.s11311 = function() {
	this.initialize(img.s11311);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,284,578);


(lib.s11312 = function() {
	this.initialize(img.s11312);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,550,790);


(lib.s11313 = function() {
	this.initialize(img.s11313);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,105);


(lib.s11402 = function() {
	this.initialize(img.s11402);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s11403 = function() {
	this.initialize(img.s11403);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s11404 = function() {
	this.initialize(img.s11404);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s11405 = function() {
	this.initialize(img.s11405);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s11406 = function() {
	this.initialize(img.s11406);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s11407 = function() {
	this.initialize(img.s11407);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s11408 = function() {
	this.initialize(img.s11408);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s11409 = function() {
	this.initialize(img.s11409);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s11410 = function() {
	this.initialize(img.s11410);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s11411 = function() {
	this.initialize(img.s11411);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s11412 = function() {
	this.initialize(img.s11412);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s11413 = function() {
	this.initialize(img.s11413);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s11152 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s11151();
	this.instance.setTransform(0,0,1.008,1.008);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,839,593);


(lib.s11150 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s11219();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,776,784);


(lib.s11149 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s11218();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,216,808);


(lib.s11148 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s11217();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,968,184);


(lib.s11147 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s11146();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1096,960);


(lib.s11145 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s11213();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,948,846);


(lib.s11144 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s11143();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,168);


(lib.s11142 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s11141();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336,272);


(lib.s11139 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s11313();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,156,105);


(lib.s11138 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s11301();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s11137 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s11211();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,164,98);


(lib.s11136 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s11312();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,550,790);


(lib.s11135 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s11134();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,548,488);


(lib.s11132 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s11310();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,411,933);


(lib.s11129 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s11309();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114,34);


(lib.s11128 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s11308();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,108);


(lib.s11127 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s11307();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,318,330);


(lib.s11126 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s11306();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,319,334);


(lib.s11125 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s11305();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,322,319);


(lib.s11124 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s11304();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,278,157);


(lib.s11123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s11302();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,185,59);


(lib.s11122 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s11311();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,284,578);


(lib.s11121 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s11303();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,228,174);


(lib.s11117 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s11116();
	this.instance.setTransform(0,0,1.007,1.007);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,858,1023.2);


(lib.s11114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s11206();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,178,70);


(lib.s11108 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s11201();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,208,224);


(lib.s11106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s11104();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,276,344);


(lib.s11105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s11104();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,276,344);


(lib.s11103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s11101();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1026,283);


(lib.s11102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s11155();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1026,355);


(lib.s11401 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s11111();
	this.instance.setTransform(0,0,1.049,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,881,972);


(lib.s11131 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 眼泪35   复制 3
	this.instance = new lib.s11125();
	this.instance.setTransform(227,925.8,1,1,0,0,0,161,159.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).wait(2));

	// 眼泪25   复制 3
	this.instance_1 = new lib.s11126();
	this.instance_1.setTransform(229.5,918.3,1,1,0,0,0,159.5,167);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({_off:false},0).wait(1).to({_off:true},1).wait(2));

	// 眼泪15   复制 3
	this.instance_2 = new lib.s11127();
	this.instance_2.setTransform(229,920.2,1,1,0,0,0,159,164.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(26).to({_off:false},0).wait(1).to({_off:true},1).wait(4));

	// 眼泪35  复制 2
	this.instance_3 = new lib.s11125();
	this.instance_3.setTransform(227,925.8,1,1,0,0,0,161,159.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:false},0).wait(1).to({_off:true},1).wait(6));

	// 眼泪25  复制 2
	this.instance_4 = new lib.s11126();
	this.instance_4.setTransform(229.5,918.3,1,1,0,0,0,159.5,167);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(22).to({_off:false},0).wait(1).to({_off:true},1).wait(8));

	// 眼泪15  复制 2
	this.instance_5 = new lib.s11127();
	this.instance_5.setTransform(229,920.2,1,1,0,0,0,159,164.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20).to({_off:false},0).wait(1).to({_off:true},1).wait(10));

	// 眼泪35  复制 2
	this.instance_6 = new lib.s11125();
	this.instance_6.setTransform(227,925.8,1,1,0,0,0,161,159.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},0).wait(1).to({_off:true},1).wait(12));

	// 眼泪25  复制 2
	this.instance_7 = new lib.s11126();
	this.instance_7.setTransform(229.5,918.3,1,1,0,0,0,159.5,167);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(16).to({_off:false},0).wait(1).to({_off:true},1).wait(14));

	// 眼泪35  复制 2
	this.instance_8 = new lib.s11125();
	this.instance_8.setTransform(227,925.8,1,1,0,0,0,161,159.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({_off:false},0).wait(1).to({_off:true},1).wait(16));

	// 眼泪25  复制 2
	this.instance_9 = new lib.s11126();
	this.instance_9.setTransform(229.5,918.3,1,1,0,0,0,159.5,167);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(12).to({_off:false},0).wait(1).to({_off:true},1).wait(18));

	// 眼泪15  复制 2
	this.instance_10 = new lib.s11127();
	this.instance_10.setTransform(229,920.2,1,1,0,0,0,159,164.9);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10).to({_off:false},0).wait(1).to({_off:true},1).wait(20));

	// 眼泪35 复制
	this.instance_11 = new lib.s11125();
	this.instance_11.setTransform(227,925.8,1,1,0,0,0,161,159.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(8).to({_off:false},0).wait(1).to({_off:true},1).wait(22));

	// 眼泪25 复制
	this.instance_12 = new lib.s11126();
	this.instance_12.setTransform(229.5,918.3,1,1,0,0,0,159.5,167);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(6).to({_off:false},0).wait(1).to({_off:true},1).wait(24));

	// 眼泪15 复制
	this.instance_13 = new lib.s11127();
	this.instance_13.setTransform(229,920.2,1,1,0,0,0,159,164.9);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(4).to({_off:false},0).wait(1).to({_off:true},1).wait(26));

	// 眼泪35
	this.instance_14 = new lib.s11125();
	this.instance_14.setTransform(227,925.8,1,1,0,0,0,161,159.5);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(2).to({_off:false},0).wait(1).to({_off:true},1).wait(28));

	// 眼泪25
	this.instance_15 = new lib.s11126();
	this.instance_15.setTransform(229.5,918.3,1,1,0,0,0,159.5,167);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({_off:true},1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(70,751.3,319,334);


(lib.s11120 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s11121();
	this.instance.setTransform(114,87,1,1,0,0,0,114,87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,228,174);


(lib.s11115 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s11114();
	this.instance.setTransform(89,35,1,1,0,0,0,89,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,178,70);


(lib.s11 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_205 = function() {
		this.stop();
		try{app.showBtns()}catch(e){}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(205).call(this.frame_205).wait(1));

	// 图层 3
	this.instance = new lib.s11102();
	this.instance.setTransform(390.4,154.8,0.8,0.8,0,0,0,513,177.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(177).to({_off:false},0).to({alpha:1},8).wait(21));

	// 图层 2
	this.instance_1 = new lib.s11103();
	this.instance_1.setTransform(386.4,376,0.8,0.8,0,0,0,513,141.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(177).to({_off:false},0).to({alpha:1},8).wait(21));

	// 眼睛5
	this.instance_2 = new lib.s11124();
	this.instance_2.setTransform(188,792.7,1,1,0,0,0,139,78.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(166).to({_off:false},0).to({alpha:1},7).wait(33));

	// 眉毛25
	this.instance_3 = new lib.s11128();
	this.instance_3.setTransform(113.6,793.1,1,1,0,0,0,52.5,91);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(166).to({_off:false},0).to({rotation:-5,alpha:1},7).to({rotation:0},4).to({rotation:-5},4).to({rotation:0},4).to({rotation:-5},4).to({rotation:0},4).to({rotation:-5},4).to({rotation:0},4).wait(5));

	// 眉毛15
	this.instance_4 = new lib.s11129();
	this.instance_4.setTransform(284.1,713.2,1,1,0,0,0,85,28);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(166).to({_off:false},0).to({rotation:5,alpha:1},7).to({rotation:0},4).to({rotation:5},4).to({rotation:0},4).to({regX:84.9,rotation:5},4).to({regX:85,rotation:0},4).to({regX:84.9,rotation:5},4).to({regX:85,rotation:0},4).wait(5));

	// 流泪5
	this.instance_5 = new lib.s11131();
	this.instance_5.setTransform(229.5,920.2,1,1,0,0,0,229.5,918.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(174).to({_off:false},0).wait(32));

	// 眼泪15
	this.instance_6 = new lib.s11127();
	this.instance_6.setTransform(229,920.2,1,1,0,0,0,159,164.9);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(171).to({_off:false},0).to({alpha:1},2).to({_off:true},1).wait(32));

	// 嘴巴5
	this.instance_7 = new lib.s11139();
	this.instance_7.setTransform(310.1,974.3,1,1,0,0,0,124,52.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(166).to({_off:false},0).to({rotation:3,alpha:1},7).to({rotation:0},8).to({rotation:3},8).to({rotation:0},8).to({rotation:3},8).wait(1));

	// 快递5
	this.instance_8 = new lib.s11136();
	this.instance_8.setTransform(114,854.2,1,1,0,0,0,275,395);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(166).to({_off:false},0).to({alpha:1},7).wait(33));

	// 眼镜推手5
	this.instance_9 = new lib.s11122();
	this.instance_9.setTransform(770.2,800.2,1,1,0,0,0,234,291);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(166).to({_off:false},0).to({alpha:1},7).to({regX:234.1,rotation:1},8).to({regX:234,rotation:0},8).wait(17));

	// 遮罩52 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_181 = new cjs.Graphics().p("AgsDEQgRgDgPgFQhxghhHhFQhShQAThPQAShSBtgjQBsgkCFAfQBFAQA4AdQAzAbAoAmQBSBQgTBQQgTBRhsAjQg6AUhCAAQg5AAg8gPg");
	var mask_graphics_205 = new cjs.Graphics().p("AgsDEQgRgDgPgFQhxghhHhFQhShQAThPQAShSBtgjQBsgkCFAfQBFAQA4AdQAzAbAoAmQBSBQgTBQQgTBRhsAjQg6AUhCAAQg5AAg8gPg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(181).to({graphics:mask_graphics_181,x:540.2,y:520.1}).wait(24).to({graphics:mask_graphics_205,x:540.2,y:520.1}).wait(1));

	// 眼镜闪光52
	this.instance_10 = new lib.s11120();
	this.instance_10.setTransform(636,538.4,1,1,0,0,0,114,87);
	this.instance_10._off = true;

	this.instance_10.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(181).to({_off:false},0).to({x:441.5,y:498.2},16).wait(9));

	// 遮罩5 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_181 = new cjs.Graphics().p("AjyCQQhmg7ABhVQgBhTBmg8QBkg9COAAQCPAABkA9QBmA8gBBTQABBVhmA7QhkA8iPABQiOgBhkg8g");
	var mask_1_graphics_205 = new cjs.Graphics().p("AjyCQQhmg7ABhVQgBhTBmg8QBkg9COAAQCPAABkA9QBmA8gBBTQABBVhmA7QhkA8iPABQiOgBhkg8g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(181).to({graphics:mask_1_graphics_181,x:637.7,y:528.7}).wait(24).to({graphics:mask_1_graphics_205,x:637.7,y:528.7}).wait(1));

	// 眼镜闪光5
	this.instance_11 = new lib.s11121();
	this.instance_11.setTransform(736.2,543.1,1,1,0,0,0,114,87);
	this.instance_11._off = true;

	this.instance_11.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(181).to({_off:false},0).to({x:538.1,y:502.1},16).wait(9));

	// 眼镜5
	this.instance_12 = new lib.s11123();
	this.instance_12.setTransform(590.2,526.1,1,1,0,0,0,92.5,29.5);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(166).to({_off:false},0).to({alpha:1},7).to({y:524.1},8).to({y:526.1},8).wait(17));

	// 本体5
	this.instance_13 = new lib.s11132();
	this.instance_13.setTransform(534.5,778.7,1,1,0,0,0,205.5,466.5);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(166).to({_off:false},0).to({alpha:1},7).wait(33));

	// 场景5背景
	this.instance_14 = new lib.s11138();
	this.instance_14.setTransform(375,609,1,1,0,0,0,375,610);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(166).to({_off:false},0).to({alpha:1},7).wait(33));

	// 人速线4
	this.instance_15 = new lib.s11145();
	this.instance_15.setTransform(1260.1,827.2,1,1,0,0,0,474,423);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(127).to({_off:false},0).to({x:579.9},3).to({alpha:0.328},3).to({alpha:0},4).to({_off:true},1).wait(68));

	// 人刹43
	this.instance_16 = new lib.s11215();
	this.instance_16.setTransform(90.1,1110.3);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(132).to({_off:false},0).to({_off:true},1).wait(73));

	// 人刹42 复制
	this.instance_17 = new lib.s11216();
	this.instance_17.setTransform(99.9,1098.3);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(133).to({_off:false},0).to({_off:true},1).wait(72));

	// 人刹42
	this.instance_18 = new lib.s11216();
	this.instance_18.setTransform(99.9,1098.3);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(131).to({_off:false},0).to({_off:true},1).wait(74));

	// 人刹41 复制
	this.instance_19 = new lib.s11148();
	this.instance_19.setTransform(569.9,1158.2,1,1,0,0,0,484,92);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(134).to({_off:false},0).to({alpha:0},4).to({_off:true},1).wait(67));

	// 人刹41
	this.instance_20 = new lib.s11217();
	this.instance_20.setTransform(85.9,1066.2);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(130).to({_off:false},0).to({_off:true},1).wait(75));

	// 人41
	this.instance_21 = new lib.s11150();
	this.instance_21.setTransform(1088.2,858.2,1,1,0,0,0,388,392);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(127).to({_off:false},0).to({x:412.1},3).wait(28).to({_off:true},36).wait(12));

	// 门43
	this.instance_22 = new lib.s11203();
	this.instance_22.setTransform(512,155.7);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(133).to({_off:false},0).to({_off:true},61).wait(12));

	// 门炸4
	this.instance_23 = new lib.s11108();
	this.instance_23.setTransform(672.2,178,1,1,0,0,0,104,112);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(133).to({_off:false},0).to({alpha:0},3).to({_off:true},58).wait(12));

	// 门44
	this.instance_24 = new lib.s11202();
	this.instance_24.setTransform(380.1,145.2);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(132).to({_off:false},0).to({_off:true},1).wait(73));

	// 门42
	this.instance_25 = new lib.s11204();
	this.instance_25.setTransform(184.1,165.2);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(131).to({_off:false},0).to({_off:true},1).wait(74));

	// 舌头42     复制 5
	this.instance_26 = new lib.s11208();
	this.instance_26.setTransform(321,409.2);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(169).to({_off:false},0).to({_off:true},1).wait(36));

	// 舌头42    复制 4
	this.instance_27 = new lib.s11208();
	this.instance_27.setTransform(321,409.2);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(167).to({_off:false},0).to({_off:true},1).wait(38));

	// 舌头42    复制 4
	this.instance_28 = new lib.s11208();
	this.instance_28.setTransform(321,409.2);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(166).to({_off:false},0).to({_off:true},1).wait(39));

	// 舌头43     复制 5
	this.instance_29 = new lib.s11207();
	this.instance_29.setTransform(321,418.2);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(168).to({_off:false},0).to({_off:true},1).wait(37));

	// 舌头43     复制 5
	this.instance_30 = new lib.s11207();
	this.instance_30.setTransform(321,422.2);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(172).to({_off:false},0).to({_off:true},1).wait(33));

	// 舌头44     复制 5
	this.instance_31 = new lib.s11115();
	this.instance_31.setTransform(412.1,450.1,1,1,0,0,0,89,35);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(170).to({_off:false},0).to({_off:true},1).wait(35));

	// 舌头42    复制 4
	this.instance_32 = new lib.s11208();
	this.instance_32.setTransform(321,409.2);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(171).to({_off:false},0).to({_off:true},1).wait(34));

	// 舌头43    复制 4
	this.instance_33 = new lib.s11207();
	this.instance_33.setTransform(321,418.2);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(163).to({_off:false},0).to({_off:true},1).wait(42));

	// 舌头43    复制 4
	this.instance_34 = new lib.s11207();
	this.instance_34.setTransform(321,422.2);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(162).to({_off:false},0).to({_off:true},1).wait(43));

	// 舌头44    复制 4
	this.instance_35 = new lib.s11115();
	this.instance_35.setTransform(412.1,450.1,1,1,0,0,0,89,35);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(164).to({_off:false},0).to({_off:true},1).wait(41));

	// 舌头42   复制 3
	this.instance_36 = new lib.s11208();
	this.instance_36.setTransform(321,409.2);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(165).to({_off:false},0).to({_off:true},1).wait(40));

	// 舌头42   复制 3
	this.instance_37 = new lib.s11208();
	this.instance_37.setTransform(321,409.2);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(161).to({_off:false},0).to({_off:true},1).wait(44));

	// 舌头42   复制 3
	this.instance_38 = new lib.s11208();
	this.instance_38.setTransform(321,409.2);
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(160).to({_off:false},0).to({_off:true},1).wait(45));

	// 舌头43   复制 3
	this.instance_39 = new lib.s11207();
	this.instance_39.setTransform(321,418.2);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(159).to({_off:false},0).to({_off:true},1).wait(46));

	// 舌头43   复制 3
	this.instance_40 = new lib.s11207();
	this.instance_40.setTransform(321,422.2);
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(158).to({_off:false},0).to({_off:true},1).wait(47));

	// 舌头42    复制 4
	this.instance_41 = new lib.s11208();
	this.instance_41.setTransform(321,409.2);
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(157).to({_off:false},0).to({_off:true},1).wait(48));

	// 舌头42   复制 3
	this.instance_42 = new lib.s11208();
	this.instance_42.setTransform(321,409.2);
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(156).to({_off:false},0).to({_off:true},1).wait(49));

	// 舌头42   复制 3
	this.instance_43 = new lib.s11208();
	this.instance_43.setTransform(321,409.2);
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(155).to({_off:false},0).to({_off:true},1).wait(50));

	// 舌头43    复制 4
	this.instance_44 = new lib.s11207();
	this.instance_44.setTransform(321,418.2);
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(150).to({_off:false},0).to({_off:true},1).wait(55));

	// 舌头43    复制 4
	this.instance_45 = new lib.s11207();
	this.instance_45.setTransform(321,422.2);
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(154).to({_off:false},0).to({_off:true},1).wait(51));

	// 舌头44    复制 4
	this.instance_46 = new lib.s11115();
	this.instance_46.setTransform(412.1,450.1,1,1,0,0,0,89,35);
	this.instance_46._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(152).to({_off:false},0).to({_off:true},1).wait(53));

	// 舌头42   复制 3
	this.instance_47 = new lib.s11208();
	this.instance_47.setTransform(321,409.2);
	this.instance_47._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(153).to({_off:false},0).to({_off:true},1).wait(52));

	// 舌头43    复制 4
	this.instance_48 = new lib.s11207();
	this.instance_48.setTransform(321,418.2);
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(151).to({_off:false},0).to({_off:true},1).wait(54));

	// 舌头43    复制 4
	this.instance_49 = new lib.s11207();
	this.instance_49.setTransform(321,422.2);
	this.instance_49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(148).to({_off:false},0).to({_off:true},1).wait(57));

	// 舌头43    复制 4
	this.instance_50 = new lib.s11207();
	this.instance_50.setTransform(321,418.2);
	this.instance_50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(149).to({_off:false},0).to({_off:true},1).wait(56));

	// 舌头43   复制 3
	this.instance_51 = new lib.s11207();
	this.instance_51.setTransform(321,418.2);
	this.instance_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(145).to({_off:false},0).to({_off:true},1).wait(60));

	// 舌头43   复制 3
	this.instance_52 = new lib.s11207();
	this.instance_52.setTransform(321,422.2);
	this.instance_52._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(144).to({_off:false},0).to({_off:true},1).wait(61));

	// 舌头44   复制 3
	this.instance_53 = new lib.s11115();
	this.instance_53.setTransform(412.1,450.1,1,1,0,0,0,89,35);
	this.instance_53._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(146).to({_off:false},0).to({_off:true},1).wait(59));

	// 舌头42  复制 2
	this.instance_54 = new lib.s11208();
	this.instance_54.setTransform(321,409.2);
	this.instance_54._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(147).to({_off:false},0).to({_off:true},1).wait(58));

	// 舌头42  复制 2
	this.instance_55 = new lib.s11208();
	this.instance_55.setTransform(321,409.2);
	this.instance_55._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(143).to({_off:false},0).to({_off:true},1).wait(62));

	// 舌头42  复制 2
	this.instance_56 = new lib.s11208();
	this.instance_56.setTransform(321,409.2);
	this.instance_56._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(142).to({_off:false},0).to({_off:true},1).wait(63));

	// 舌头43  复制 2
	this.instance_57 = new lib.s11207();
	this.instance_57.setTransform(321,418.2);
	this.instance_57._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(141).to({_off:false},0).to({_off:true},1).wait(64));

	// 舌头43  复制 2
	this.instance_58 = new lib.s11207();
	this.instance_58.setTransform(321,422.2);
	this.instance_58._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(140).to({_off:false},0).to({_off:true},1).wait(65));

	// 舌头44  复制 2
	this.instance_59 = new lib.s11115();
	this.instance_59.setTransform(413,454.1,1,1,0,0,0,89,35);
	this.instance_59._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(139).to({_off:false},0).to({_off:true},1).wait(66));

	// 舌头42 复制
	this.instance_60 = new lib.s11208();
	this.instance_60.setTransform(321,409.2);
	this.instance_60._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(138).to({_off:false},0).to({_off:true},1).wait(67));

	// 舌头42
	this.instance_61 = new lib.s11208();
	this.instance_61.setTransform(321,409.2);
	this.instance_61._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(135).to({_off:false},0).to({_off:true},1).wait(70));

	// 舌头43 复制
	this.instance_62 = new lib.s11207();
	this.instance_62.setTransform(321,418.2);
	this.instance_62._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_62).wait(137).to({_off:false},0).to({_off:true},1).wait(68));

	// 舌头43
	this.instance_63 = new lib.s11207();
	this.instance_63.setTransform(321,422.2);
	this.instance_63._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_63).wait(134).to({_off:false},0).to({_off:true},1).wait(71));

	// 舌头44 复制
	this.instance_64 = new lib.s11115();
	this.instance_64.setTransform(412.1,455.1,1,1,0,0,0,89,35);
	this.instance_64._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_64).wait(136).to({_off:false},0).to({_off:true},1).wait(69));

	// 舌头44
	this.instance_65 = new lib.s11115();
	this.instance_65.setTransform(410,494.6,1,1,0,0,0,89,35);
	this.instance_65._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_65).wait(131).to({_off:false},0).to({y:460.6},2).to({_off:true},1).wait(72));

	// 帽4
	this.instance_66 = new lib.s11137();
	this.instance_66.setTransform(348.1,340.1,1,1,0,0,0,82,49);
	this.instance_66._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_66).wait(131).to({_off:false},0).to({y:241},2).to({rotation:-4,y:239.1},1).to({rotation:4,y:241.1},1).to({rotation:-4,y:239.1},1).to({rotation:0,y:241},1).to({rotation:-4,y:239.1},1).to({rotation:4,y:241.1},1).to({rotation:-4,y:239.1},1).to({rotation:0,y:241},1).to({rotation:-4,y:239.1},1).to({rotation:4,y:241.1},1).to({rotation:-4,y:239.1},1).to({rotation:0,y:241},1).to({rotation:-4,y:239.1},1).to({rotation:4,y:241.1},1).to({rotation:-4,y:239.1},1).wait(1).to({rotation:4,y:241.1},1).to({rotation:-4,y:239.1},1).to({rotation:0,y:241},1).to({rotation:-4,y:239.1},1).to({rotation:4,y:241.1},1).to({rotation:-4,y:239.1},1).to({rotation:0,y:241},1).to({rotation:-4,y:239.1},1).to({rotation:4,y:241.1},1).to({rotation:-4,y:239.1},1).to({rotation:0,y:241},1).to({rotation:-4,y:239.1},1).to({rotation:4,y:241.1},1).to({rotation:-4,y:239.1},1).to({rotation:0,y:241},1).to({rotation:-4,y:239.1},1).to({rotation:4,y:241.1},1).to({rotation:-4,y:239.1},1).to({rotation:0,y:241},1).to({rotation:-4,y:239.1},1).to({rotation:4,y:241.1},1).to({rotation:-4,y:239.1},1).wait(1).to({rotation:4,y:241.1},1).to({rotation:-4,y:239.1},1).to({rotation:0,y:241},1).to({rotation:-4,y:239.1},1).to({rotation:4,y:241.1},1).to({rotation:-4,y:239.1},1).to({rotation:0,y:241},1).to({rotation:-4,y:239.1},1).to({rotation:4,y:241.1},1).to({rotation:-4,y:239.1},1).to({_off:true},12).wait(12));

	// 人42
	this.instance_67 = new lib.s11149();
	this.instance_67.setTransform(332.1,716.2,1,1,0,0,0,108,404);
	this.instance_67._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_67).wait(131).to({_off:false},0).to({y:672.2},2).to({_off:true},61).wait(12));

	// 人炸4
	this.instance_68 = new lib.s11214();
	this.instance_68.setTransform(224.1,268.1);
	this.instance_68._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_68).wait(133).to({_off:false},0).to({_off:true},61).wait(12));

	// 门4
	this.instance_69 = new lib.s11205();
	this.instance_69.setTransform(86.1,178.2);
	this.instance_69._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_69).wait(127).to({_off:false},0).wait(3).to({x:84.1},0).to({_off:true},1).wait(75));

	// 背景4
	this.instance_70 = new lib.s11210();
	this.instance_70.setTransform(-25.9,-27.8,1.003,1);
	this.instance_70._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_70).wait(127).to({_off:false},0).to({_off:true},67).wait(12));

	// 叹号3
	this.instance_71 = new lib.s11140();
	this.instance_71.setTransform(582.2,20);
	this.instance_71._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_71).wait(76).to({_off:false},0).wait(51).to({_off:true},1).wait(78));

	// 遮罩2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_84 = new cjs.Graphics().p("AsRJHQgsgVgogVQkhihgbkAQgekgFGjxQFGjyHrg0QHqgzFwCoQFsCmAjEdIABAIQAeEglGDxQlFDynsA0QhxAMhsAAQljAAkaiBg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(84).to({graphics:mask_2_graphics_84,x:229.6,y:309.5}).wait(122));

	// 闪光2
	this.instance_72 = new lib.s11105();
	this.instance_72.setTransform(374.1,324.1,1,1,0,0,0,138,172);
	this.instance_72._off = true;

	this.instance_72.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_72).wait(84).to({_off:false},0).to({x:88,y:266.6},10).to({_off:true},27).wait(85));

	// 遮罩1 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_84 = new cjs.Graphics().p("ArsLhQmhh8hMkwQhMkvE2kxQE2kxIDiBQIBiAGhB8QGiB9BMEwQBMEwk3EvQk2EzoDCAQkDBBjsAAQjlAAjOg+g");
	var mask_3_graphics_94 = new cjs.Graphics().p("ArsLhQmhh8hMkwQhMkvE2kxQE2kxIDiBQIBiAGhB8QGiB9BMEwQBMEwk3EvQk2EzoDCAQkDBBjsAAQjlAAjOg+g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(84).to({graphics:mask_3_graphics_84,x:555.7,y:248}).wait(10).to({graphics:mask_3_graphics_94,x:555.7,y:248}).wait(112));

	// 闪光1
	this.instance_73 = new lib.s11106();
	this.instance_73.setTransform(710.2,253.2,1,1,0,0,0,138,172);
	this.instance_73._off = true;

	this.instance_73.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_73).wait(84).to({_off:false},0).to({x:396.1,y:239.2},10).to({_off:true},27).wait(85));

	// 人3
	this.instance_74 = new lib.s11152();
	this.instance_74.setTransform(1145.8,108.6,1,1,0,0,0,419.5,296.4);
	this.instance_74._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_74).wait(69).to({_off:false},0).to({regX:419.4,regY:296.5,scaleX:1.01,scaleY:1.01,x:387.6,y:268.7},2).to({regX:419.5,regY:296.4,scaleX:1,scaleY:1,y:268.6},55).to({_off:true},1).wait(79));

	// 刀闪光3
	this.instance_75 = new lib.s11144();
	this.instance_75.setTransform(33,1129.3,0.004,0.003,0,0,0,60,84);
	this.instance_75._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_75).wait(107).to({_off:false},0).to({scaleX:1,scaleY:1,x:171,y:1110.3},5).to({regY:84.2,scaleX:0.47,scaleY:0.47,x:443.1,y:992.2},14).to({_off:true},1).wait(79));

	// 人手3
	this.instance_76 = new lib.s11147();
	this.instance_76.setTransform(1847.5,187,1,1,0,0,0,956.1,158);
	this.instance_76._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_76).wait(98).to({_off:false},0).to({x:1015.3,y:429.1},3).to({rotation:5,y:429},6).to({_off:true},20).wait(79));

	// 速度线3
	this.instance_77 = new lib.s11401();
	this.instance_77.setTransform(372.6,807.8,1,1,0,0,0,440.5,486);
	this.instance_77.alpha = 0;
	this.instance_77._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_77).wait(107).to({_off:false},0).to({x:370.6,alpha:1},2).to({_off:true},18).wait(79));

	// 背景3
	this.instance_78 = new lib.s11117();
	this.instance_78.setTransform(1208.2,696.7,1,1,0,0,0,429,511.6);
	this.instance_78._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_78).wait(98).to({_off:false},0).to({x:372,y:782.7},3).to({_off:true},26).wait(79));

	// 叮2
	this.instance_79 = new lib.s11142();
	this.instance_79.setTransform(234.2,987.3,1,1,0,0,0,168.1,136);
	this.instance_79._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_79).wait(57).to({_off:false},0).wait(1).to({rotation:3},0).wait(1).to({regX:168,regY:135.9,rotation:-5,x:234.1,y:987.2},0).wait(1).to({regX:168.1,regY:136,rotation:-2,x:234.2,y:987.3},0).wait(1).to({regX:168,rotation:4,x:234.1,y:987.2},0).wait(1).to({rotation:-3,y:987.3},0).wait(1).to({regX:168.1,rotation:3,x:234.2},0).wait(1).to({rotation:-2},0).wait(1).to({rotation:0},0).wait(1).to({rotation:3},0).wait(1).to({regX:168,regY:135.9,rotation:-5,x:234.1,y:987.2},0).wait(1).to({regX:168.1,regY:136,rotation:-2,x:234.2,y:987.3},0).wait(1).to({regX:168,rotation:4,x:234.1,y:987.2},0).wait(1).to({rotation:-3,y:987.3},0).wait(1).to({regX:168.1,rotation:3,x:234.2},0).wait(1).to({rotation:-2},0).wait(1).to({rotation:3},0).wait(1).to({regX:168,regY:135.9,rotation:-5,x:234.1,y:987.2},0).wait(1).to({regX:168.1,regY:136,rotation:-2,x:234.2,y:987.3},0).wait(1).to({regX:168,rotation:4,x:234.1,y:987.2},0).wait(1).to({rotation:-3,y:987.3},0).wait(1).to({regX:168.1,rotation:3,x:234.2},0).wait(1).to({rotation:-2},0).wait(1).to({rotation:0},0).wait(1).to({rotation:3},0).wait(1).to({regX:168,regY:135.9,rotation:-5,x:234.1,y:987.2},0).wait(1).to({regX:168.1,regY:136,rotation:-2,x:234.2,y:987.3},0).wait(1).to({regX:168,rotation:4,x:234.1,y:987.2},0).wait(1).to({rotation:-3,y:987.3},0).wait(1).to({regX:168.1,rotation:3,x:234.2},0).wait(1).to({rotation:-2},0).wait(1).to({rotation:3},0).wait(1).to({regX:168,regY:135.9,rotation:-5,x:234.1,y:987.2},0).wait(1).to({regX:168.1,regY:136,rotation:-2,x:234.2,y:987.3},0).wait(1).to({regX:168,rotation:4,x:234.1,y:987.2},0).wait(1).to({rotation:-3,y:987.3},0).wait(1).to({regX:168.1,rotation:3,x:234.2},0).wait(1).to({rotation:-2},0).wait(1).to({rotation:0},0).wait(1).to({rotation:3},0).wait(1).to({regX:168,regY:135.9,rotation:-5,x:234.1,y:987.2},0).wait(1).to({regX:168.1,regY:136,rotation:-2,x:234.2,y:987.3},0).wait(1).to({regX:168,rotation:4,x:234.1,y:987.2},0).wait(1).to({rotation:-3,y:987.3},0).wait(1).to({regX:168.1,rotation:3,x:234.2},0).wait(1).to({rotation:-2},0).wait(1).to({rotation:0},0).wait(1).to({rotation:3},0).wait(1).to({regX:168,regY:135.9,rotation:-5,x:234.1,y:987.2},0).to({_off:true},13).wait(88));

	// 门铃2
	this.instance_80 = new lib.s11107();
	this.instance_80.setTransform(144.2,290.2);
	this.instance_80._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_80).wait(57).to({_off:false},0).to({_off:true},61).wait(88));

	// 速度线34  复制 2
	this.instance_81 = new lib.s11413();
	this.instance_81.setTransform(-4,-2.1,1.01,1.01);
	this.instance_81._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_81).wait(104).to({_off:false},0).to({_off:true},1).wait(101));

	// 速度线33  复制 2
	this.instance_82 = new lib.s11412();
	this.instance_82.setTransform(-4,-2.1,1.01,1.01);
	this.instance_82._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_82).wait(103).to({_off:false},0).to({_off:true},1).wait(102));

	// 速度线32  复制 2
	this.instance_83 = new lib.s11411();
	this.instance_83.setTransform(-3.7,-1.9,1.01,1.01);
	this.instance_83._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_83).wait(102).to({_off:false},0).to({_off:true},1).wait(103));

	// 速度线31  复制 2
	this.instance_84 = new lib.s11410();
	this.instance_84._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_84).wait(101).to({_off:false},0).to({_off:true},1).wait(104));

	// 速度线30  复制 2
	this.instance_85 = new lib.s11409();
	this.instance_85._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_85).wait(100).to({_off:false},0).to({_off:true},1).wait(105));

	// 速度线29  复制 2
	this.instance_86 = new lib.s11408();
	this.instance_86.setTransform(-5.7,-1.9,1.01,1.01);
	this.instance_86._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_86).wait(99).to({_off:false},0).to({_off:true},1).wait(106));

	// 速度线28  复制 2
	this.instance_87 = new lib.s11407();
	this.instance_87.setTransform(-3.7,-4.1,1.01,1.01);
	this.instance_87._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_87).wait(98).to({_off:false},0).to({_off:true},1).wait(107));

	// 速度线27  复制 2
	this.instance_88 = new lib.s11406();
	this.instance_88.setTransform(-5.5,-4.1,1.01,1.01);
	this.instance_88._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_88).wait(97).to({_off:false},0).to({_off:true},1).wait(108));

	// 速度线26  复制 2
	this.instance_89 = new lib.s11405();
	this.instance_89.setTransform(-3.7,-2.2,1.01,1.01);
	this.instance_89._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_89).wait(96).to({_off:false},0).to({_off:true},1).wait(109));

	// 速度线25  复制 2
	this.instance_90 = new lib.s11404();
	this.instance_90.setTransform(-4.2,-2.1,1.01,1.01);
	this.instance_90._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_90).wait(95).to({_off:false},0).to({_off:true},1).wait(110));

	// 速度线24  复制 2
	this.instance_91 = new lib.s11403();
	this.instance_91.setTransform(-6.4,0,1.01,1.01);
	this.instance_91._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_91).wait(94).to({_off:false},0).to({_off:true},1).wait(111));

	// 速度线23  复制 2
	this.instance_92 = new lib.s11402();
	this.instance_92.setTransform(-4.7,-1.9,1.01,1.01);
	this.instance_92._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_92).wait(93).to({_off:false},0).to({_off:true},1).wait(112));

	// 速度线34  复制 2
	this.instance_93 = new lib.s11413();
	this.instance_93.setTransform(-4,-2.1,1.01,1.01);
	this.instance_93._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_93).wait(92).to({_off:false},0).to({_off:true},1).wait(113));

	// 速度线33  复制 2
	this.instance_94 = new lib.s11412();
	this.instance_94.setTransform(-4,-2.1,1.01,1.01);
	this.instance_94._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_94).wait(91).to({_off:false},0).to({_off:true},1).wait(114));

	// 速度线32  复制 2
	this.instance_95 = new lib.s11411();
	this.instance_95.setTransform(-3.7,-1.9,1.01,1.01);
	this.instance_95._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_95).wait(90).to({_off:false},0).to({_off:true},1).wait(115));

	// 速度线31  复制 2
	this.instance_96 = new lib.s11410();
	this.instance_96._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_96).wait(89).to({_off:false},0).to({_off:true},1).wait(116));

	// 速度线30  复制 2
	this.instance_97 = new lib.s11409();
	this.instance_97._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_97).wait(88).to({_off:false},0).to({_off:true},1).wait(117));

	// 速度线29  复制 2
	this.instance_98 = new lib.s11408();
	this.instance_98.setTransform(-5.7,-1.9,1.01,1.01);
	this.instance_98._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_98).wait(87).to({_off:false},0).to({_off:true},1).wait(118));

	// 速度线28  复制 2
	this.instance_99 = new lib.s11407();
	this.instance_99.setTransform(-3.7,-4.1,1.01,1.01);
	this.instance_99._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_99).wait(86).to({_off:false},0).to({_off:true},1).wait(119));

	// 速度线27  复制 2
	this.instance_100 = new lib.s11406();
	this.instance_100.setTransform(-5.5,-4.1,1.01,1.01);
	this.instance_100._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_100).wait(85).to({_off:false},0).to({_off:true},1).wait(120));

	// 速度线26  复制 2
	this.instance_101 = new lib.s11405();
	this.instance_101.setTransform(-3.7,-2.2,1.01,1.01);
	this.instance_101._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_101).wait(84).to({_off:false},0).to({_off:true},1).wait(121));

	// 速度线25  复制 2
	this.instance_102 = new lib.s11404();
	this.instance_102.setTransform(-4.2,-2.1,1.01,1.01);
	this.instance_102._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_102).wait(83).to({_off:false},0).to({_off:true},1).wait(122));

	// 速度线24  复制 2
	this.instance_103 = new lib.s11403();
	this.instance_103.setTransform(-6.4,0,1.01,1.01);
	this.instance_103._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_103).wait(82).to({_off:false},0).to({_off:true},1).wait(123));

	// 速度线23  复制 2
	this.instance_104 = new lib.s11402();
	this.instance_104.setTransform(-4.7,-1.9,1.01,1.01);
	this.instance_104._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_104).wait(81).to({_off:false},0).to({_off:true},1).wait(124));

	// 速度线34 复制
	this.instance_105 = new lib.s11413();
	this.instance_105.setTransform(-4,-2.1,1.01,1.01);
	this.instance_105._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_105).wait(80).to({_off:false},0).to({_off:true},1).wait(125));

	// 速度线33 复制
	this.instance_106 = new lib.s11412();
	this.instance_106.setTransform(-4,-2.1,1.01,1.01);
	this.instance_106._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_106).wait(79).to({_off:false},0).to({_off:true},1).wait(126));

	// 速度线32 复制
	this.instance_107 = new lib.s11411();
	this.instance_107.setTransform(-3.7,-1.9,1.01,1.01);
	this.instance_107._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_107).wait(78).to({_off:false},0).to({_off:true},1).wait(127));

	// 速度线31 复制
	this.instance_108 = new lib.s11410();
	this.instance_108._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_108).wait(77).to({_off:false},0).to({_off:true},1).wait(128));

	// 速度线30 复制
	this.instance_109 = new lib.s11409();
	this.instance_109._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_109).wait(76).to({_off:false},0).to({_off:true},1).wait(129));

	// 速度线29 复制
	this.instance_110 = new lib.s11408();
	this.instance_110.setTransform(-5.7,-1.9,1.01,1.01);
	this.instance_110._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_110).wait(75).to({_off:false},0).to({_off:true},1).wait(130));

	// 速度线28 复制
	this.instance_111 = new lib.s11407();
	this.instance_111.setTransform(-3.7,-4.1,1.01,1.01);
	this.instance_111._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_111).wait(74).to({_off:false},0).to({_off:true},1).wait(131));

	// 速度线27 复制
	this.instance_112 = new lib.s11406();
	this.instance_112.setTransform(-5.5,-4.1,1.01,1.01);
	this.instance_112._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_112).wait(73).to({_off:false},0).to({_off:true},1).wait(132));

	// 速度线26 复制
	this.instance_113 = new lib.s11405();
	this.instance_113.setTransform(-3.7,-2.2,1.01,1.01);
	this.instance_113._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_113).wait(72).to({_off:false},0).to({_off:true},1).wait(133));

	// 速度线25 复制
	this.instance_114 = new lib.s11404();
	this.instance_114.setTransform(-4.2,-2.1,1.01,1.01);
	this.instance_114._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_114).wait(71).to({_off:false},0).to({_off:true},1).wait(134));

	// 速度线24 复制
	this.instance_115 = new lib.s11403();
	this.instance_115.setTransform(-6.4,0,1.01,1.01);
	this.instance_115._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_115).wait(70).to({_off:false},0).to({_off:true},1).wait(135));

	// 速度线23 复制
	this.instance_116 = new lib.s11402();
	this.instance_116.setTransform(-4.7,-1.9,1.01,1.01);
	this.instance_116._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_116).wait(69).to({_off:false},0).to({_off:true},1).wait(136));

	// 速度线34
	this.instance_117 = new lib.s11413();
	this.instance_117.setTransform(-4,-2.1,1.01,1.01);
	this.instance_117._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_117).wait(68).to({_off:false},0).to({_off:true},1).wait(137));

	// 速度线33
	this.instance_118 = new lib.s11412();
	this.instance_118.setTransform(-4,-2.1,1.01,1.01);
	this.instance_118._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_118).wait(67).to({_off:false},0).to({_off:true},1).wait(138));

	// 速度线32
	this.instance_119 = new lib.s11411();
	this.instance_119.setTransform(-3.7,-1.9,1.01,1.01);
	this.instance_119._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_119).wait(66).to({_off:false},0).to({_off:true},1).wait(139));

	// 速度线31
	this.instance_120 = new lib.s11410();
	this.instance_120._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_120).wait(65).to({_off:false},0).to({_off:true},1).wait(140));

	// 速度线30
	this.instance_121 = new lib.s11409();
	this.instance_121._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_121).wait(64).to({_off:false},0).to({_off:true},1).wait(141));

	// 速度线29
	this.instance_122 = new lib.s11408();
	this.instance_122.setTransform(-5.7,-1.9,1.01,1.01);
	this.instance_122._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_122).wait(63).to({_off:false},0).to({_off:true},1).wait(142));

	// 速度线28
	this.instance_123 = new lib.s11407();
	this.instance_123.setTransform(-3.7,-4.1,1.01,1.01);
	this.instance_123._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_123).wait(62).to({_off:false},0).to({_off:true},1).wait(143));

	// 速度线27
	this.instance_124 = new lib.s11406();
	this.instance_124.setTransform(-5.5,-4.1,1.01,1.01);
	this.instance_124._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_124).wait(61).to({_off:false},0).to({_off:true},1).wait(144));

	// 速度线26
	this.instance_125 = new lib.s11405();
	this.instance_125.setTransform(-3.7,-2.2,1.01,1.01);
	this.instance_125._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_125).wait(60).to({_off:false},0).to({_off:true},1).wait(145));

	// 速度线25
	this.instance_126 = new lib.s11404();
	this.instance_126.setTransform(-4.2,-2.1,1.01,1.01);
	this.instance_126._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_126).wait(59).to({_off:false},0).to({_off:true},1).wait(146));

	// 速度线24
	this.instance_127 = new lib.s11403();
	this.instance_127.setTransform(-6.4,0,1.01,1.01);
	this.instance_127._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_127).wait(58).to({_off:false},0).to({_off:true},1).wait(147));

	// 速度线23
	this.instance_128 = new lib.s11402();
	this.instance_128.setTransform(-4.7,-1.9,1.01,1.01);
	this.instance_128._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_128).wait(57).to({_off:false},0).to({_off:true},1).wait(148));

	// 背景2
	this.instance_129 = new lib.s11118();
	this.instance_129.setTransform(-41.9,-27.8,1.006,1.006);
	this.instance_129._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_129).wait(57).to({_off:false},0).to({_off:true},61).wait(88));

	// 手臂1
	this.instance_130 = new lib.s11133();
	this.instance_130.setTransform(447.1,425.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_130).wait(60).to({_off:true},41).wait(105));

	// 手1
	this.instance_131 = new lib.s11135();
	this.instance_131.setTransform(594.1,693.3,1,1,0,0,0,436,58);

	this.timeline.addTween(cjs.Tween.get(this.instance_131).to({regY:57.9,rotation:-3,y:693.2},21).to({regY:58,rotation:0,y:693.3},19).to({regY:57.9,rotation:-3,y:693.2},17).to({regY:58,rotation:0,y:693.3},3).to({_off:true},1).wait(145));

	// 火1
	this.instance_132 = new lib.s11130();
	this.instance_132.setTransform(-27.9,940.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_132).wait(60).to({_off:true},41).wait(105));

	// 人1
	this.instance_133 = new lib.s11153();
	this.instance_133.setTransform(102,100.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_133).wait(60).to({_off:true},41).wait(105));

	// 背景1
	this.instance_134 = new lib.s11119();
	this.instance_134.setTransform(-41.9,-37.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_134).wait(60).to({_off:true},41).wait(105));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.9,-37.8,828,1326.1);


// stage content:



(lib.qj_s11 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s11();
	this.instance.setTransform(372.1,625.2,1,1,0,0,0,372.1,625.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(333.1,572.2,828,1326.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;