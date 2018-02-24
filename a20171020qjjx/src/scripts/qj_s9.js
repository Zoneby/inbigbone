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
		{src:"images/cv/s9129.png", id:"s9129"},
		{src:"images/cv/s9130.png", id:"s9130"},
		{src:"images/cv/s9131.png", id:"s9131"},
		{src:"images/cv/s9132.png", id:"s9132"},
		{src:"images/cv/s9133.png", id:"s9133"},
		{src:"images/cv/s9134.png", id:"s9134"},
		{src:"images/cv/s9135.png", id:"s9135"},
		{src:"images/cv/s9136.png", id:"s9136"},
		{src:"images/cv/s9137.png", id:"s9137"},
		{src:"images/cv/s9138.png", id:"s9138"},
		{src:"images/cv/s9140.png", id:"s9140"},
		{src:"images/cv/s9201.png", id:"s9201"},
		{src:"images/cv/s9202.png", id:"s9202"},
		{src:"images/cv/s9203.png", id:"s9203"},
		{src:"images/cv/s9204.png", id:"s9204"},
		{src:"images/cv/s9205.png", id:"s9205"},
		{src:"images/cv/s9206.png", id:"s9206"},
		{src:"images/cv/s9301.png", id:"s9301"},
		{src:"images/cv/s9302.png", id:"s9302"},
		{src:"images/cv/s9303.png", id:"s9303"},
		{src:"images/cv/s9304.png", id:"s9304"},
		{src:"images/cv/s9305.png", id:"s9305"},
		{src:"images/cv/s9306.png", id:"s9306"},
		{src:"images/cv/s9307.png", id:"s9307"},
		{src:"images/cv/s9308.png", id:"s9308"},
		{src:"images/cv/s9309.png", id:"s9309"},
		{src:"images/cv/s9310.png", id:"s9310"},
		{src:"images/cv/s9311.png", id:"s9311"},
		{src:"images/cv/s9313.png", id:"s9313"},
		{src:"images/cv/s9314.png", id:"s9314"},
		{src:"images/cv/s9315.png", id:"s9315"},
		{src:"images/cv/s9401.png", id:"s9401"},
		{src:"images/cv/s9402.png", id:"s9402"},
		{src:"images/cv/s9403.png", id:"s9403"},
		{src:"images/cv/s9404.png", id:"s9404"},
		{src:"images/cv/s9405.png", id:"s9405"},
		{src:"images/cv/s9406.png", id:"s9406"},
		{src:"images/cv/s9407.png", id:"s9407"},
		{src:"images/cv/s9408.png", id:"s9408"}
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



(lib.s9129 = function() {
	this.initialize(img.s9129);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,297,516);


(lib.s9130 = function() {
	this.initialize(img.s9130);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,279,369);


(lib.s9131 = function() {
	this.initialize(img.s9131);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,393,519);


(lib.s9132 = function() {
	this.initialize(img.s9132);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,249,513);


(lib.s9133 = function() {
	this.initialize(img.s9133);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,264,459);


(lib.s9134 = function() {
	this.initialize(img.s9134);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,288,522);


(lib.s9135 = function() {
	this.initialize(img.s9135);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,780,449);


(lib.s9136 = function() {
	this.initialize(img.s9136);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,224,193);


(lib.s9137 = function() {
	this.initialize(img.s9137);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,498,309);


(lib.s9138 = function() {
	this.initialize(img.s9138);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,831,546);


(lib.s9140 = function() {
	this.initialize(img.s9140);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,751,1221);


(lib.s9201 = function() {
	this.initialize(img.s9201);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,534,300);


(lib.s9202 = function() {
	this.initialize(img.s9202);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,243,171);


(lib.s9203 = function() {
	this.initialize(img.s9203);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,594,624);


(lib.s9204 = function() {
	this.initialize(img.s9204);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,535,301);


(lib.s9205 = function() {
	this.initialize(img.s9205);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1008,785);


(lib.s9206 = function() {
	this.initialize(img.s9206);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,834,714);


(lib.s9301 = function() {
	this.initialize(img.s9301);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,612,1151);


(lib.s9302 = function() {
	this.initialize(img.s9302);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,504,660);


(lib.s9303 = function() {
	this.initialize(img.s9303);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,700);


(lib.s9304 = function() {
	this.initialize(img.s9304);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,356,496);


(lib.s9305 = function() {
	this.initialize(img.s9305);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,396,480);


(lib.s9306 = function() {
	this.initialize(img.s9306);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,216,308);


(lib.s9307 = function() {
	this.initialize(img.s9307);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,416,192);


(lib.s9308 = function() {
	this.initialize(img.s9308);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,548,468);


(lib.s9309 = function() {
	this.initialize(img.s9309);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,116);


(lib.s9310 = function() {
	this.initialize(img.s9310);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,372,332);


(lib.s9311 = function() {
	this.initialize(img.s9311);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,288,232);


(lib.s9313 = function() {
	this.initialize(img.s9313);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,751,1221);


(lib.s9314 = function() {
	this.initialize(img.s9314);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,992,548);


(lib.s9315 = function() {
	this.initialize(img.s9315);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,784,1034);


(lib.s9401 = function() {
	this.initialize(img.s9401);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,151);


(lib.s9402 = function() {
	this.initialize(img.s9402);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,848,1116);


(lib.s9403 = function() {
	this.initialize(img.s9403);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,193,201);


(lib.s9404 = function() {
	this.initialize(img.s9404);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,135);


(lib.s9405 = function() {
	this.initialize(img.s9405);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,828,265);


(lib.s9406 = function() {
	this.initialize(img.s9406);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,630,174);


(lib.s9407 = function() {
	this.initialize(img.s9407);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s9408 = function() {
	this.initialize(img.s9408);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,444,1240);


(lib.s9128 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s9315();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,784,1034);


(lib.s9127 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s9206();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,834,714);


(lib.s9126 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s9205();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1008,785);


(lib.s9125 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s9311();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,288,232);


(lib.s9124 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s9310();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,372,332);


(lib.s9123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s9406();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,630,174);


(lib.s9122 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s9405();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,828,265);


(lib.s9121 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s9203();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,594,624);


(lib.s9120 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s9137();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,498,309);


(lib.s9119 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s9136();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,224,193);


(lib.s9118 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s9135();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,780,449);


(lib.s9117 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s9309();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,196,116);


(lib.s9116 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s9307();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,416,192);


(lib.s9115 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s9204();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,535,301);


(lib.s9114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s9201();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,534,300);


(lib.s9113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s9202();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,243,171);


(lib.s9112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s9308();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,548,468);


(lib.s9111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s9404();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,138,135);


(lib.s9110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s9403();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,193,201);


(lib.s9109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s9401();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,151,151);


(lib.s9108 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s9306();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,216,308);


(lib.s9107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s9305();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,396,480);


(lib.s9106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s9134();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,288,522);


(lib.s9105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s9133();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,264,459);


(lib.s9104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s9132();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,249,513);


(lib.s9103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s9131();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,393,519);


(lib.s9102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s9130();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,279,369);


(lib.s9101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s9402();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,848,1116);


(lib.s9 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_224 = function() {
		this.stop();
		try{app.showBtns()}catch(e){}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(224).call(this.frame_224).wait(1));

	// 文案2
	this.instance = new lib.s9123();
	this.instance.setTransform(316.2,928.3,0.8,0.8,0,0,0,368.1,101.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(184).to({_off:false},0).to({alpha:1},9).wait(32));

	// 文案
	this.instance_1 = new lib.s9122();
	this.instance_1.setTransform(371.7,757,0.75,0.75,0,0,0,470.6,145.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(184).to({_off:false},0).to({alpha:1},9).wait(32));

	// 光43
	this.instance_2 = new lib.s9111();
	this.instance_2.setTransform(372.6,765.2,1,1,0,0,0,69,67.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(161).to({_off:false},0).to({y:758.8,alpha:1},6).to({y:731.1},26).to({y:697.2},25).to({y:689.1,alpha:0},6).wait(1));

	// 光42
	this.instance_3 = new lib.s9110();
	this.instance_3.setTransform(715.1,630.9,1,1,0,0,0,96.5,100.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(161).to({_off:false},0).to({x:712.6,y:623.6,alpha:1},8).to({x:691.6,y:562},51).to({x:689.1,y:554.8,alpha:0},4).wait(1));

	// 光41
	this.instance_4 = new lib.s9109();
	this.instance_4.setTransform(609.3,564.5,1,1,0,0,0,75.5,75.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(161).to({_off:false},0).to({y:536.4,alpha:1},4).to({x:633,y:428.8},48).to({x:635.3,y:418.3,alpha:0},11).wait(1));

	// 人4
	this.instance_5 = new lib.s9101();
	this.instance_5.setTransform(54.8,941.9,1,1,0,0,0,202,895.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(161).to({_off:false},0).to({regX:201.9,regY:895.9,x:60.3,y:909.3},32).to({regX:202,regY:895.8,x:54.8,y:941.9},31).wait(1));

	// 腿4
	this.instance_6 = new lib.s9408();
	this.instance_6.setTransform(350.3,-63.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(161).to({_off:false},0).wait(64));

	// 背景4
	this.instance_7 = new lib.s9407();
	this.instance_7.setTransform(-2,0);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(161).to({_off:false},0).wait(64));

	// 卧槽3
	this.instance_8 = new lib.s9112();
	this.instance_8.setTransform(217.3,199.3,1,1,0,0,0,274,234);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(96).to({_off:false},0).to({_off:true},65).wait(64));

	// 人3手2 复制
	this.instance_9 = new lib.s9303();
	this.instance_9.setTransform(320.9,520);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(94).to({_off:false},0).wait(1).to({_off:true},1).wait(129));

	// 人3手1 复制
	this.instance_10 = new lib.s9302();
	this.instance_10.setTransform(376.9,533.3);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(96).to({_off:false},0).wait(69).to({_off:true},1).wait(59));

	// 人3
	this.instance_11 = new lib.s9301();
	this.instance_11.setTransform(286.9,97.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(94).to({_off:false},0).to({_off:true},67).wait(64));

	// 电脑32
	this.instance_12 = new lib.s9125();
	this.instance_12.setTransform(206.3,915.4,1,1,0,0,0,144,138.1);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(94).to({_off:false},0).wait(2).to({regY:138,rotation:-2,y:907.4},0).wait(2).to({regY:138.1,rotation:2,y:915.4},0).wait(2).to({regY:138,rotation:-2,y:907.4},0).wait(2).to({regY:138.1,rotation:0,y:915.4},0).wait(60).to({_off:true},1).wait(62));

	// 电脑31
	this.instance_13 = new lib.s9124();
	this.instance_13.setTransform(536.9,969.4,1,1,0,0,0,224.1,186);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(94).to({_off:false},0).wait(2).to({rotation:4,y:963.3},0).wait(2).to({rotation:0,y:969.4},0).wait(2).to({regX:224,rotation:-3,x:536.8,y:963.3},0).wait(2).to({regX:224.1,rotation:-2,x:536.9,y:962.8},0).wait(2).to({rotation:0,y:969.4},0).to({_off:true},59).wait(62));

	// 啪字3
	this.instance_14 = new lib.s9117();
	this.instance_14.setTransform(282.6,1053.4,1,1,0,0,0,98,58);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(96).to({_off:false},0).wait(2).to({regY:58.1,rotation:5,y:1053.5},0).wait(2).to({regY:58,rotation:-3,y:1053.4},0).wait(2).to({rotation:3},0).wait(2).to({rotation:-5,x:282.7},0).to({alpha:0},2).wait(56).to({_off:true},1).wait(62));

	// 啪3
	this.instance_15 = new lib.s9116();
	this.instance_15.setTransform(498.8,1135.7,1,1,0,0,0,310.2,62);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(96).to({_off:false},0).wait(1).to({alpha:0},3).to({_off:true},62).wait(63));

	// 背景桌3
	this.instance_16 = new lib.s9314();
	this.instance_16.setTransform(-210.5,721.5);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(94).to({_off:false},0).to({_off:true},67).wait(64));

	// 人31
	this.instance_17 = new lib.s9304();
	this.instance_17.setTransform(-67.1,522);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(94).to({_off:false},0).to({_off:true},67).wait(64));

	// 人33
	this.instance_18 = new lib.s9108();
	this.instance_18.setTransform(673.5,819.2,1,1,0,0,0,108,154);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(103).to({_off:false},0).to({x:536.8,y:717.1},6).to({_off:true},52).wait(64));

	// 人32
	this.instance_19 = new lib.s9107();
	this.instance_19.setTransform(671,833.7,1,1,0,0,0,198,240);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(112).to({_off:false},0).to({x:296.5,y:594.8},5).to({_off:true},44).wait(64));

	// 速度线3
	this.instance_20 = new lib.s9128();
	this.instance_20.setTransform(372.6,496.3,1,1,0,0,0,392,517);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(96).to({_off:false},0).to({_off:true},65).wait(64));

	// 背景31
	this.instance_21 = new lib.s9313();
	this.instance_21.setTransform(-2,0);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(94).to({_off:false},0).to({_off:true},67).wait(64));

	// 叮声2
	this.instance_22 = new lib.s9113();
	this.instance_22.setTransform(374.6,625.7,1,1,0,0,0,121.5,85.5);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(63).to({_off:false},0).wait(1).to({rotation:-3},0).wait(1).to({rotation:3,y:625.6},0).wait(1).to({rotation:-2},0).wait(1).to({rotation:3,y:625.7},0).wait(1).to({rotation:-3},0).wait(1).to({rotation:3,y:625.6},0).wait(1).to({rotation:-2},0).wait(1).to({rotation:3,y:625.7},0).wait(1).to({rotation:-3},0).wait(1).to({rotation:3,y:625.6},0).wait(1).to({rotation:0},0).wait(19).to({_off:true},1).wait(131));

	// 叮框2
	this.instance_23 = new lib.s9115();
	this.instance_23.setTransform(129.6,534.7,1,1,0,0,0,40.5,74.5);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(63).to({_off:false},0).to({_off:true},31).wait(131));

	// 叮整体2
	this.instance_24 = new lib.s9114();
	this.instance_24.setTransform(257.1,503.1,0.001,0.002,0,0,0,161.2,60.1);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(59).to({_off:false},0).to({regX:167,regY:43,scaleX:1,scaleY:1,y:503.2},4).to({_off:true},31).wait(131));

	// 手机22
	this.instance_25 = new lib.s9121();
	this.instance_25.setTransform(396.1,1730.5,0.9,0.9,0,0,0,297,312);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(75).to({_off:false},0).to({y:1034},5).to({scaleX:1,scaleY:1,y:1000.3},10).to({_off:true},4).wait(131));

	// 背景22
	this.instance_26 = new lib.s9127();
	this.instance_26.setTransform(376.6,1613.2,1,1,0,0,0,417,357);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(75).to({_off:false},0).to({x:370.6,y:916},5).to({_off:true},14).wait(131));

	// 背景21
	this.instance_27 = new lib.s9126();
	this.instance_27.setTransform(-452.6,76.6,1,1,0,0,0,504,392.5);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(53).to({_off:false},0).to({x:461.6,y:328.7},4).to({_off:true},37).wait(131));

	// 字1
	this.instance_28 = new lib.s9118();
	this.instance_28.setTransform(375.5,138.6,0.01,0.01,0,0,0,390.2,224.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).to({regX:390,scaleX:1,scaleY:1},5).wait(88).to({_off:true},1).wait(131));

	// 人14
	this.instance_29 = new lib.s9105();
	this.instance_29.setTransform(82.3,1070.2,1,1,0,0,0,158.1,362);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).to({regY:362.1,rotation:4},30).to({regY:362,rotation:0},27).to({regY:362.1,rotation:4},36).to({_off:true},1).wait(131));

	// 人12
	this.instance_30 = new lib.s9103();
	this.instance_30.setTransform(95.4,981.8,1,1,4,0,0,196.5,420.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).to({regY:420.2,rotation:0,y:981.9},25).to({regY:420.1,rotation:4,y:981.8},28).to({regY:420.2,rotation:0,y:981.9},40).to({_off:true},1).wait(131));

	// 人11
	this.instance_31 = new lib.s9102();
	this.instance_31.setTransform(209.9,868.4,1,1,1,0,0,161.6,284.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).to({rotation:-6},34).to({rotation:1},34).to({rotation:-6},25).to({_off:true},1).wait(131));

	// 人12
	this.instance_32 = new lib.s9120();
	this.instance_32.setTransform(483.9,513,1,1,0,0,0,458.8,202.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).to({rotation:9},3).to({regX:458.9,rotation:-11},3).to({rotation:7,x:484},3).to({regX:458.8,rotation:-9,x:483.9},3).to({rotation:9},3).to({regX:458.9,regY:202.8,rotation:-6,x:484,y:513.1},3).to({regY:202.7,rotation:7,y:513},3).to({rotation:-10},3).to({rotation:7},3).to({regY:202.8,rotation:-6,y:513.1},3).to({regY:202.7,rotation:8,y:513},3).to({regX:458.8,rotation:-8,x:483.9},3).to({rotation:9},3).to({regX:458.9,rotation:-11,x:484},3).to({rotation:6,x:483.9},3).to({rotation:-11},3).to({rotation:7,x:484},3).to({regX:458.8,rotation:-9,x:483.9},3).to({rotation:9},3).to({regX:458.9,regY:202.8,rotation:-6,x:484,y:513.1},3).to({regY:202.7,rotation:7,y:513},2).to({rotation:-10},2).to({rotation:7},2).to({regY:202.8,rotation:-6,y:513.1},2).to({regY:202.7,rotation:8,y:513},2).to({regX:458.8,rotation:-8,x:483.9},2).to({rotation:9},2).to({regX:458.9,rotation:-11,x:484},2).to({rotation:6,x:483.9},2).to({rotation:-11,x:484},2).to({rotation:6,x:483.9},2).wait(31).to({_off:true},1).wait(111));

	// 人15
	this.instance_33 = new lib.s9106();
	this.instance_33.setTransform(661.6,1010.9,1,1,-3,0,0,111.9,385.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).to({regY:385.4,rotation:0,x:665.6,y:1008.8},31).to({regY:385.5,rotation:-3,x:661.6,y:1010.9},28).to({regY:385.4,rotation:0,x:665.6,y:1008.8},34).to({_off:true},1).wait(131));

	// 人13
	this.instance_34 = new lib.s9104();
	this.instance_34.setTransform(621.5,946.8,1,1,3,0,0,124.5,417.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_34).to({regX:124.6,rotation:-1,y:946.9},30).to({regX:124.5,rotation:3,y:946.8},20).to({regX:124.6,rotation:-1,y:946.9},43).to({_off:true},1).wait(131));

	// 主管
	this.instance_35 = new lib.s9129();
	this.instance_35.setTransform(279.2,317.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(93).to({_off:true},1).wait(131));

	// 手11
	this.instance_36 = new lib.s9119();
	this.instance_36.setTransform(455.7,511.1,1,1,-21,0,0,206.3,120.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(93).to({_off:true},1).wait(131));

	// 桌子1
	this.instance_37 = new lib.s9138();
	this.instance_37.setTransform(-37.4,710.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(93).to({_off:true},1).wait(131));

	// 背景11
	this.instance_38 = new lib.s9140();

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(93).to({_off:true},1).wait(131));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.5,0,952.1,1256.2);


// stage content:



(lib.qj_s9 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s9();
	this.instance.setTransform(368.5,628.1,1,1,0,0,0,368.5,628.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(267.5,610,952.1,1256.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;