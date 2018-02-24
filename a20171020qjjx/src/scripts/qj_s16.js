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
		{src:"images/cv/s16201.png", id:"s16201"},
		{src:"images/cv/s16202.png", id:"s16202"},
		{src:"images/cv/s16203.png", id:"s16203"},
		{src:"images/cv/s16204.png", id:"s16204"},
		{src:"images/cv/s16205.png", id:"s16205"},
		{src:"images/cv/s16206.png", id:"s16206"},
		{src:"images/cv/s16207.png", id:"s16207"},
		{src:"images/cv/s16208.png", id:"s16208"},
		{src:"images/cv/s16209.png", id:"s16209"},
		{src:"images/cv/s16210.png", id:"s16210"},
		{src:"images/cv/s16211.png", id:"s16211"},
		{src:"images/cv/s16212.png", id:"s16212"},
		{src:"images/cv/s16213.png", id:"s16213"},
		{src:"images/cv/s16301.png", id:"s16301"},
		{src:"images/cv/s16302.png", id:"s16302"},
		{src:"images/cv/s16303.png", id:"s16303"},
		{src:"images/cv/s16304.png", id:"s16304"},
		{src:"images/cv/s16305.png", id:"s16305"},
		{src:"images/cv/s16306.png", id:"s16306"},
		{src:"images/cv/s16307.png", id:"s16307"},
		{src:"images/cv/s16308.png", id:"s16308"},
		{src:"images/cv/s16309.png", id:"s16309"},
		{src:"images/cv/s16310.png", id:"s16310"},
		{src:"images/cv/s16311.png", id:"s16311"},
		{src:"images/cv/s16312.png", id:"s16312"},
		{src:"images/cv/s16401.png", id:"s16401"},
		{src:"images/cv/s16402.png", id:"s16402"},
		{src:"images/cv/s16403.png", id:"s16403"},
		{src:"images/cv/s16404.png", id:"s16404"},
		{src:"images/cv/s16405.png", id:"s16405"},
		{src:"images/cv/s16406.png", id:"s16406"},
		{src:"images/cv/s16407.png", id:"s16407"},
		{src:"images/cv/s16408.png", id:"s16408"},
		{src:"images/cv/s16409.png", id:"s16409"},
		{src:"images/cv/s16410.png", id:"s16410"},
		{src:"images/cv/s16411.png", id:"s16411"},
		{src:"images/cv/s16412.png", id:"s16412"},
		{src:"images/cv/s16413.jpg", id:"s16413"},
		{src:"images/cv/s16414.png", id:"s16414"},
		{src:"images/cv/s16415.png", id:"s16415"},
		{src:"images/cv/s16416.png", id:"s16416"},
		{src:"images/cv/s16501.png", id:"s16501"},
		{src:"images/cv/s16502.png", id:"s16502"},
		{src:"images/cv/s16503.png", id:"s16503"},
		{src:"images/cv/s16504.png", id:"s16504"},
		{src:"images/cv/s16505.png", id:"s16505"},
		{src:"images/cv/s16507.png", id:"s16507"},
		{src:"images/cv/s16508.png", id:"s16508"},
		{src:"images/cv/s16509.jpg", id:"s16509"},
		{src:"images/cv/s16510.png", id:"s16510"}
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



(lib.s16201 = function() {
	this.initialize(img.s16201);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,747,1130);


(lib.s16202 = function() {
	this.initialize(img.s16202);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,267,232);


(lib.s16203 = function() {
	this.initialize(img.s16203);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,121);


(lib.s16204 = function() {
	this.initialize(img.s16204);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,119);


(lib.s16205 = function() {
	this.initialize(img.s16205);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,106);


(lib.s16206 = function() {
	this.initialize(img.s16206);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1122,100);


(lib.s16207 = function() {
	this.initialize(img.s16207);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,444,381);


(lib.s16208 = function() {
	this.initialize(img.s16208);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,254,176);


(lib.s16209 = function() {
	this.initialize(img.s16209);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,271,222);


(lib.s16210 = function() {
	this.initialize(img.s16210);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,242,165);


(lib.s16211 = function() {
	this.initialize(img.s16211);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,147);


(lib.s16212 = function() {
	this.initialize(img.s16212);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s16213 = function() {
	this.initialize(img.s16213);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,553,430);


(lib.s16301 = function() {
	this.initialize(img.s16301);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,128);


(lib.s16302 = function() {
	this.initialize(img.s16302);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,314,157);


(lib.s16303 = function() {
	this.initialize(img.s16303);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,205,126);


(lib.s16304 = function() {
	this.initialize(img.s16304);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,442,323);


(lib.s16305 = function() {
	this.initialize(img.s16305);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,751,1224);


(lib.s16306 = function() {
	this.initialize(img.s16306);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,252,196);


(lib.s16307 = function() {
	this.initialize(img.s16307);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,136);


(lib.s16308 = function() {
	this.initialize(img.s16308);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,309,245);


(lib.s16309 = function() {
	this.initialize(img.s16309);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,502,360);


(lib.s16310 = function() {
	this.initialize(img.s16310);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,251,168);


(lib.s16311 = function() {
	this.initialize(img.s16311);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,266,164);


(lib.s16312 = function() {
	this.initialize(img.s16312);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,335,253);


(lib.s16401 = function() {
	this.initialize(img.s16401);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,571,511);


(lib.s16402 = function() {
	this.initialize(img.s16402);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,184);


(lib.s16403 = function() {
	this.initialize(img.s16403);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,94);


(lib.s16404 = function() {
	this.initialize(img.s16404);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,97);


(lib.s16405 = function() {
	this.initialize(img.s16405);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1312,139);


(lib.s16406 = function() {
	this.initialize(img.s16406);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,482,177);


(lib.s16407 = function() {
	this.initialize(img.s16407);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,421,157);


(lib.s16408 = function() {
	this.initialize(img.s16408);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,214,201);


(lib.s16409 = function() {
	this.initialize(img.s16409);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,273);


(lib.s16410 = function() {
	this.initialize(img.s16410);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,241,186);


(lib.s16411 = function() {
	this.initialize(img.s16411);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,239,206);


(lib.s16412 = function() {
	this.initialize(img.s16412);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,212);


(lib.s16413 = function() {
	this.initialize(img.s16413);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,635,455);


(lib.s16414 = function() {
	this.initialize(img.s16414);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,624,338);


(lib.s16415 = function() {
	this.initialize(img.s16415);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,619,357);


(lib.s16416 = function() {
	this.initialize(img.s16416);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,624,460);


(lib.s16501 = function() {
	this.initialize(img.s16501);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,924,293);


(lib.s16502 = function() {
	this.initialize(img.s16502);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,801,174);


(lib.s16503 = function() {
	this.initialize(img.s16503);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,667,835);


(lib.s16504 = function() {
	this.initialize(img.s16504);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,44);


(lib.s16505 = function() {
	this.initialize(img.s16505);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,284,238);


(lib.s16507 = function() {
	this.initialize(img.s16507);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,895,485);


(lib.s16508 = function() {
	this.initialize(img.s16508);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,592,512);


(lib.s16509 = function() {
	this.initialize(img.s16509);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,756,1226);


(lib.s16510 = function() {
	this.initialize(img.s16510);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,370,359);


(lib.s16150 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16502();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,801,174);


(lib.s16149 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.s16501();
	this.instance.setTransform(36,41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(36,41,924,293);


(lib.s16148 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16212();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s16146 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16413();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,635,455);


(lib.s16145 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16312();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,335,253);


(lib.s16144 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16509();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,756,1226);


(lib.s16143 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16308();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,309,245);


(lib.s16142 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16510();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,370,359);


(lib.s16141 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16412();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,230,212);


(lib.s16140 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16411();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,239,206);


(lib.s16139 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16410();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,241,186);


(lib.s16138 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16211();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88,147);


(lib.s16137 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16409();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68,273);


(lib.s16136 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16508();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,592,512);


(lib.s16135 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16507();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,895,485);


(lib.s16132 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16311();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,266,164);


(lib.s16131 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16310();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,251,168);


(lib.s16130 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16505();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,284,238);


(lib.s16129 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16307();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168,136);


(lib.s16127 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16408();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,214,201);


(lib.s16126 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16504();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39,44);


(lib.s16124 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16407();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,421,157);


(lib.s16123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16406();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,482,177);


(lib.s16121 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16405();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1312,139);


(lib.s16120 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16206();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1122,100);


(lib.s16119 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16404();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,97);


(lib.s16118 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16204();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101,119);


(lib.s16117 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16205();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,123,106);


(lib.s16116 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16403();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,94);


(lib.s16115 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16203();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,86,121);


(lib.s16114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16306();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,252,196);


(lib.s16113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16402();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98,184);


(lib.s16112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16309();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,502,360);


(lib.s16111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16304();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,442,323);


(lib.s16110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16201();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,747,1130);


(lib.s16109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16202();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,267,232);


(lib.s16107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16303();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,205,126);


(lib.s16106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16305();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,751,1224);


(lib.s16105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16503();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,667,835);


(lib.s16103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16401();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,571,511);


(lib.s16102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16302();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,314,157);


(lib.s16101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16301();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,230,128);


(lib.s16125 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 心电图数字
	this.instance = new lib.s16210();
	this.instance.setTransform(126.1,149.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(70));

	// 遮罩1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxkMWIAA4rMAjJAAAIAAYrg");
	mask.setTransform(244.6,221.1);

	// 心电图1
	this.instance_1 = new lib.s16120();
	this.instance_1.setTransform(663.2,203.1,1,1,0,0,0,561,50);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:467.2},69).wait(1));

	// 心电背景1
	this.instance_2 = new lib.s16208();
	this.instance_2.setTransform(123.6,139.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(69).to({x:100.1,y:135},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(123.6,139.1,254,176);


(lib.s16 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_287 = function() {
		this.stop();
		try{app.showBtns()}catch(e){}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(287).call(this.frame_287).wait(1));

	// 文案2
	this.instance = new lib.s16150();
	this.instance.setTransform(391.6,961.6,0.75,0.75,0,0,0,481.4,112);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(262).to({_off:false},0).to({alpha:1},9).wait(17));

	// 文案
	this.instance_1 = new lib.s16149();
	this.instance_1.setTransform(378.8,735.4,0.75,0.75,0,0,0,495,173.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(262).to({_off:false},0).to({alpha:1},9).wait(17));

	// 愤怒4
	this.instance_2 = new lib.s16126();
	this.instance_2.setTransform(178,192,0.92,0.92,0,0,0,19.5,22);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(240).to({_off:false},0).to({scaleX:1,scaleY:1,x:182,y:198,alpha:1},10).to({scaleX:0.9,scaleY:0.9,x:185.5,y:204.1},3).to({scaleX:1.08,scaleY:1.08,x:187,y:206.7},3).to({scaleX:0.91,scaleY:0.91,x:188,y:208.6},3).to({regX:19.6,scaleX:1.06,scaleY:1.06,x:189.2,y:210.4},3).to({regY:21.9,scaleX:0.93,scaleY:0.93,x:190.2,y:212.2},3).to({regY:22,scaleX:1.06,scaleY:1.06,x:191.3,y:214.2},3).to({regX:19.5,regY:21.9,scaleX:0.94,scaleY:0.94,x:192.3,y:216},3).to({scaleX:1.05,scaleY:1.05,x:193.4,y:217.9},3).to({scaleX:0.92,scaleY:0.92,x:194.4,y:219.7},3).to({scaleX:1.08,scaleY:1.08,x:195.5,y:221.6},3).to({regX:19.6,scaleX:0.95,scaleY:0.95,x:196.7,y:223.4},3).to({regX:19.5,scaleX:1.09,scaleY:1.09,x:197.3,y:224.8},2).to({regY:22,scaleX:1,scaleY:1,x:198,y:226},2).wait(1));

	// 碎片4
	this.instance_3 = new lib.s16142();
	this.instance_3.setTransform(496.1,696.2,0.9,0.9,0,0,0,143,131.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(240).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},10).to({scaleX:1.13,scaleY:1.13},37).wait(1));

	// 拳头4
	this.instance_4 = new lib.s16130();
	this.instance_4.setTransform(505.6,778.3,1,1,0,0,0,142,119);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(240).to({_off:false},0).to({x:511.6,y:782.3,alpha:1},10).to({x:531.6,y:792.3},37).wait(1));

	// 电视4
	this.instance_5 = new lib.s16136();
	this.instance_5.setTransform(472.2,645.3,1,1,0,0,0,296,256);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(240).to({_off:false},0).to({alpha:1},10).wait(38));

	// 桌子4
	this.instance_6 = new lib.s16135();
	this.instance_6.setTransform(384.1,991.8,1,1,0,0,0,447.5,242.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(240).to({_off:false},0).to({alpha:1},10).wait(38));

	// 人物4
	this.instance_7 = new lib.s16105();
	this.instance_7.setTransform(254.1,437.8,1,1,0,0,0,333.5,417.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(240).to({_off:false},0).to({x:260.1,y:437.7,alpha:1},10).to({x:276.1,y:455.7},37).wait(1));

	// 背景4
	this.instance_8 = new lib.s16144();
	this.instance_8.setTransform(378,613,1,1,0,0,0,378,613);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(240).to({_off:false},0).to({alpha:1},10).wait(38));

	// 手3遮罩 复制 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_196 = new cjs.Graphics().p("EgxmAjiMAAAhHDMBjNAAAMAAABHDg");
	var mask_graphics_197 = new cjs.Graphics().p("EgxdAjeMAAAhG7MBi7AAAMAAABG7g");
	var mask_graphics_198 = new cjs.Graphics().p("EgxUAjZMAAAhGxMBipAAAMAAABGxg");
	var mask_graphics_199 = new cjs.Graphics().p("EgxLAjUMAAAhGnMBiXAAAMAAABGng");
	var mask_graphics_200 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_201 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_202 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_203 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_204 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_205 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_206 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_207 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_208 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_209 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_210 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_211 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_212 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_213 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_214 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_215 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_216 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_217 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_218 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_219 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_220 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_221 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_222 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_223 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_224 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_225 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_226 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_227 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_228 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_229 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_230 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_231 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_232 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_233 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_234 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_235 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_236 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_237 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_238 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_239 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_240 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_241 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_242 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_243 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_244 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_245 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_246 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_247 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_248 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");
	var mask_graphics_249 = new cjs.Graphics().p("EgxDAjPMAAAhGdMBiHAAAMAAABGdg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(196).to({graphics:mask_graphics_196,x:391.6,y:1461.8}).wait(1).to({graphics:mask_graphics_197,x:391.7,y:1334.1}).wait(1).to({graphics:mask_graphics_198,x:391.8,y:1206.3}).wait(1).to({graphics:mask_graphics_199,x:391.9,y:1078.5}).wait(1).to({graphics:mask_graphics_200,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_201,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_202,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_203,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_204,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_205,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_206,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_207,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_208,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_209,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_210,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_211,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_212,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_213,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_214,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_215,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_216,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_217,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_218,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_219,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_220,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_221,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_222,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_223,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_224,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_225,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_226,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_227,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_228,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_229,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_230,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_231,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_232,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_233,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_234,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_235,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_236,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_237,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_238,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_239,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_240,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_241,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_242,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_243,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_244,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_245,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_246,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_247,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_248,x:392.1,y:950.8}).wait(1).to({graphics:mask_graphics_249,x:392.1,y:950.8}).wait(39));

	// 手3
	this.instance_9 = new lib.s16127();
	this.instance_9.setTransform(130.1,1684.9,1,1,0,0,0,107,100.5);
	this.instance_9._off = true;

	this.instance_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(196).to({_off:false},0).to({x:122.1,y:1134.8},4).to({x:181.1,y:1084.8},17).wait(32).to({_off:true},1).wait(38));

	// 眼和嘴33
	this.instance_10 = new lib.s16141();
	this.instance_10.setTransform(410.1,965.2,1,1,0,0,0,115,106);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(217).to({_off:false},0).wait(32).to({_off:true},1).wait(38));

	// 眼和嘴32
	this.instance_11 = new lib.s16140();
	this.instance_11.setTransform(412.1,996.3,1,1,0,0,0,119.5,103);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(207).to({_off:false},0).to({x:411.7,y:967.3},9).to({_off:true},1).wait(71));

	// 眼和嘴31
	this.instance_12 = new lib.s16139();
	this.instance_12.setTransform(413.1,1522.4,1,1,0,0,0,120.5,93);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(196).to({_off:false},0).to({y:1010.3},4).to({y:991.9},6).to({_off:true},1).wait(81));

	// 人物3遮罩 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_196 = new cjs.Graphics().p("EgxmAjiMAAAhHDMBjNAAAMAAABHDg");
	var mask_1_graphics_197 = new cjs.Graphics().p("EgxkAjeMAAAhG7MBjJAAAMAAABG7g");
	var mask_1_graphics_198 = new cjs.Graphics().p("EgxiAjZMAAAhGxMBjFAAAMAAABGxg");
	var mask_1_graphics_199 = new cjs.Graphics().p("EgxgAjUMAAAhGnMBjBAAAMAAABGng");
	var mask_1_graphics_200 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_201 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_202 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_203 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_204 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_205 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_206 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_207 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_208 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_209 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_210 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_211 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_212 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_213 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_214 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_215 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_216 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_217 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_218 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_219 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_220 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_221 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_222 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_223 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_224 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_225 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_226 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_227 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_228 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_229 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_230 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_231 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_232 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_233 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_234 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_235 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_236 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_237 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_238 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_239 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_240 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_241 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_242 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_243 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_244 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_245 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_246 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_247 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_248 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");
	var mask_1_graphics_249 = new cjs.Graphics().p("EgxeAjPMAAAhGdMBi9AAAMAAABGdg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(196).to({graphics:mask_1_graphics_196,x:391.6,y:1461.8}).wait(1).to({graphics:mask_1_graphics_197,x:391.4,y:1334.1}).wait(1).to({graphics:mask_1_graphics_198,x:391.2,y:1206.3}).wait(1).to({graphics:mask_1_graphics_199,x:391.1,y:1078.5}).wait(1).to({graphics:mask_1_graphics_200,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_201,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_202,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_203,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_204,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_205,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_206,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_207,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_208,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_209,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_210,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_211,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_212,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_213,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_214,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_215,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_216,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_217,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_218,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_219,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_220,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_221,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_222,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_223,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_224,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_225,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_226,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_227,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_228,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_229,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_230,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_231,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_232,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_233,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_234,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_235,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_236,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_237,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_238,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_239,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_240,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_241,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_242,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_243,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_244,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_245,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_246,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_247,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_248,x:390.9,y:950.8}).wait(1).to({graphics:mask_1_graphics_249,x:390.9,y:950.8}).wait(39));

	// 人物3
	this.instance_13 = new lib.s16103();
	this.instance_13.setTransform(402.1,1491.9,1,1,0,0,0,285.5,255.5);
	this.instance_13._off = true;

	this.instance_13.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(196).to({_off:false},0).to({y:979.8},4).to({y:927.8},17).wait(32).to({_off:true},1).wait(38));

	// 女人左手3
	this.instance_14 = new lib.s16119();
	this.instance_14.setTransform(665.6,1625.8,1,1,9,0,0,13,58.5);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(196).to({_off:false},0).to({rotation:10,x:666.6,y:1099.8},4).to({rotation:0},17).to({regY:58.6,rotation:-8,y:1099.9},2).to({regY:58.5,rotation:0,y:1099.8},2).to({regY:58.6,rotation:-8,y:1099.9},2).to({regY:58.5,rotation:0,y:1099.8},2).to({regY:58.6,rotation:-8,y:1099.9},2).to({regY:58.5,rotation:0,y:1099.8},2).to({regY:58.6,rotation:-8,y:1099.9},2).to({regY:58.5,rotation:0,y:1099.8},2).to({regY:58.6,rotation:-8,y:1099.9},2).to({regY:58.5,rotation:0,y:1099.8},2).to({regY:58.6,rotation:-8,y:1099.9},2).to({regY:58.5,rotation:0,y:1099.8},2).to({regY:58.6,rotation:-8,y:1099.9},2).to({regY:58.5,rotation:0,y:1099.8},2).to({regY:58.6,rotation:-8,y:1099.9},2).to({regY:58.5,rotation:0,y:1099.8},2).to({_off:true},1).wait(38));

	// 女人右手3
	this.instance_15 = new lib.s16116();
	this.instance_15.setTransform(595.6,1628,1,1,-21,0,0,62.1,62);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(196).to({_off:false},0).to({regX:62,rotation:-14,y:1098.8},4).to({rotation:0},17).to({regX:62.1,regY:62.1,rotation:13},2).to({regX:62,regY:62,rotation:0},2).to({regX:62.1,regY:62.1,rotation:13},2).to({regX:62,regY:62,rotation:0},2).to({regX:62.1,regY:62.1,rotation:13},2).to({scaleX:1,scaleY:1,rotation:-4},2).to({scaleX:1,scaleY:1,rotation:13},2).to({scaleX:1,scaleY:1,rotation:-4},2).to({scaleX:1,scaleY:1,rotation:13},2).to({scaleX:1,scaleY:1,rotation:-4},2).to({scaleX:1,scaleY:1,rotation:13},2).to({scaleX:1,scaleY:1,rotation:-4},2).to({scaleX:1,scaleY:1,rotation:13},2).to({scaleX:1,scaleY:1,rotation:-4},2).to({scaleX:1,scaleY:1,rotation:13},2).to({regX:62,regY:62,rotation:0},2).to({_off:true},1).wait(38));

	// 女人3
	this.instance_16 = new lib.s16113();
	this.instance_16.setTransform(626.1,1610.9,1,1,0,0,0,49,90.5);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(196).to({_off:false},0).to({x:629.6,y:1082.8},4).wait(49).to({_off:true},1).wait(38));

	// 男人3
	this.instance_17 = new lib.s16137();
	this.instance_17.setTransform(680.2,1577.4,1,1,0,0,0,41,148);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(196).to({_off:false},0).to({x:680.1,y:1051.3},4).wait(49).to({_off:true},1).wait(38));

	// 速度线3
	this.instance_18 = new lib.s16415();
	this.instance_18.setTransform(82.6,727.7);
	this.instance_18._off = true;

	this.instance_19 = new lib.s16416();
	this.instance_19.setTransform(81.1,703.3);
	this.instance_19._off = true;

	this.instance_20 = new lib.s16414();
	this.instance_20.setTransform(79.1,726.2);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(217).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},2).wait(39));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(218).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(38));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(219).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(41));

	// 背景色3
	this.instance_21 = new lib.s16146();
	this.instance_21.setTransform(390.1,1462.4,1,1,0,0,0,316,226);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(196).to({_off:false},0).to({y:950.3},4).wait(49).to({_off:true},1).wait(38));

	// 心电图框3
	this.instance_22 = new lib.s16123();
	this.instance_22.setTransform(370.6,1351.6,1,1,0,0,0,241,88.5);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(179).to({_off:false},0).to({x:372.6,y:1001.5},4).wait(12).to({y:567.4},4).wait(49).to({_off:true},1).wait(39));

	// 心电图3遮罩 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_179 = new cjs.Graphics().p("Egg4AMRIAA4hMBBxAAAIAAYhg");
	var mask_2_graphics_180 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_181 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_182 = new cjs.Graphics().p("Egg4AMRIAA4hMBBxAAAIAAYhg");
	var mask_2_graphics_183 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_184 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_185 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_186 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_187 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_188 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_189 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_190 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_191 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_192 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_193 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_194 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_195 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_196 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_197 = new cjs.Graphics().p("Egg4AMRIAA4hMBBxAAAIAAYhg");
	var mask_2_graphics_198 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_199 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_200 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_201 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_202 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_203 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_204 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_205 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_206 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_207 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_208 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_209 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_210 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_211 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_212 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_213 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_214 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_215 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_216 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_217 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_218 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_219 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_220 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_221 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_222 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_223 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_224 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_225 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_226 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_227 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_228 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_229 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_230 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_231 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_232 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_233 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_234 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_235 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_236 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_237 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_238 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_239 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_240 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_241 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_242 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_243 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_244 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_245 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_246 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_247 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");
	var mask_2_graphics_248 = new cjs.Graphics().p("Egg4AMQIAA4fMBBxAAAIAAYfg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(179).to({graphics:mask_2_graphics_179,x:370.1,y:1342.3}).wait(1).to({graphics:mask_2_graphics_180,x:370.1,y:1254.6}).wait(1).to({graphics:mask_2_graphics_181,x:370.1,y:1166.9}).wait(1).to({graphics:mask_2_graphics_182,x:370.1,y:1079.2}).wait(1).to({graphics:mask_2_graphics_183,x:370.1,y:991.4}).wait(1).to({graphics:mask_2_graphics_184,x:370.1,y:991.4}).wait(1).to({graphics:mask_2_graphics_185,x:370.1,y:991.4}).wait(1).to({graphics:mask_2_graphics_186,x:370.1,y:991.4}).wait(1).to({graphics:mask_2_graphics_187,x:370.1,y:991.4}).wait(1).to({graphics:mask_2_graphics_188,x:370.1,y:991.4}).wait(1).to({graphics:mask_2_graphics_189,x:370.1,y:991.4}).wait(1).to({graphics:mask_2_graphics_190,x:370.1,y:991.4}).wait(1).to({graphics:mask_2_graphics_191,x:370.1,y:991.4}).wait(1).to({graphics:mask_2_graphics_192,x:370.1,y:991.4}).wait(1).to({graphics:mask_2_graphics_193,x:370.1,y:991.4}).wait(1).to({graphics:mask_2_graphics_194,x:370.1,y:991.4}).wait(1).to({graphics:mask_2_graphics_195,x:370.1,y:991.4}).wait(1).to({graphics:mask_2_graphics_196,x:370.1,y:882.9}).wait(1).to({graphics:mask_2_graphics_197,x:370.1,y:774.4}).wait(1).to({graphics:mask_2_graphics_198,x:370.1,y:665.9}).wait(1).to({graphics:mask_2_graphics_199,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_200,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_201,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_202,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_203,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_204,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_205,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_206,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_207,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_208,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_209,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_210,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_211,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_212,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_213,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_214,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_215,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_216,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_217,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_218,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_219,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_220,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_221,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_222,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_223,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_224,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_225,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_226,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_227,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_228,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_229,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_230,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_231,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_232,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_233,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_234,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_235,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_236,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_237,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_238,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_239,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_240,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_241,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_242,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_243,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_244,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_245,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_246,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_247,x:370.1,y:557.4}).wait(1).to({graphics:mask_2_graphics_248,x:370.1,y:557.4}).wait(40));

	// 心电图3
	this.instance_23 = new lib.s16121();
	this.instance_23.setTransform(804.3,1342.4,1,1,0,0,0,656,69.5);
	this.instance_23._off = true;

	this.instance_23.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(179).to({_off:false},0).to({x:716.1,y:991.5},4).to({x:554},12).to({x:407.9,y:557.4},4).to({x:-61.3},49).to({_off:true},1).wait(39));

	// 心电图背景3
	this.instance_24 = new lib.s16124();
	this.instance_24.setTransform(370.1,1342.3,1,1,0,0,0,210.5,78.5);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(179).to({_off:false},0).to({x:372.1,y:991.5},4).wait(12).to({x:374.7,y:557.4},4).wait(49).to({_off:true},1).wait(39));

	// 叮2
	this.instance_25 = new lib.s16107();
	this.instance_25.setTransform(514.1,1030.3,0.46,0.46,0,0,0,102.5,63.1);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(165).to({_off:false},0).to({regY:63,scaleX:1,scaleY:1,x:600.1,y:1094.3},5).to({rotation:3},1).to({rotation:-3},1).to({rotation:2,y:1094.2},1).to({rotation:-2},1).to({rotation:2},1).to({rotation:-2},1).to({rotation:1,y:1094.3},1).to({rotation:-1},1).to({rotation:0},1).to({y:745.2},4).wait(12).to({y:353.1},4).wait(49).to({_off:true},1).wait(39));

	// 图23前景
	this.instance_26 = new lib.s16112();
	this.instance_26.setTransform(382.6,956.2,1,1,0,0,0,251,180);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(141).to({_off:false},0).to({alpha:1},12).wait(26).to({y:614.2},4).wait(12).to({y:222.1},4).wait(49).to({_off:true},1).wait(39));

	// 敲遮罩 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_141 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_179 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_180 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_181 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_182 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_183 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_184 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_185 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_186 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_187 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_188 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_189 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_190 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_191 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_192 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_193 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_194 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_195 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_196 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_197 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_198 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_199 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_200 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_201 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_202 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_203 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_204 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_205 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_206 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_207 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_208 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_209 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_210 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_211 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_212 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_213 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_214 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_215 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_216 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_217 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_218 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_219 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_220 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_221 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_222 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_223 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_224 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_225 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_226 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_227 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_228 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_229 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_230 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_231 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_232 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_233 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_234 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_235 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_236 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_237 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_238 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_239 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_240 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_241 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_242 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_243 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_244 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_245 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_246 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_247 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");
	var mask_3_graphics_248 = new cjs.Graphics().p("A6PQ4MAAAghvMA0fAAAMAAAAhvg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(141).to({graphics:mask_3_graphics_141,x:372.1,y:938.2}).wait(38).to({graphics:mask_3_graphics_179,x:372.1,y:938.2}).wait(1).to({graphics:mask_3_graphics_180,x:369.7,y:853.8}).wait(1).to({graphics:mask_3_graphics_181,x:367.4,y:769.4}).wait(1).to({graphics:mask_3_graphics_182,x:365,y:685}).wait(1).to({graphics:mask_3_graphics_183,x:362.7,y:600.6}).wait(1).to({graphics:mask_3_graphics_184,x:362.7,y:600.6}).wait(1).to({graphics:mask_3_graphics_185,x:362.7,y:600.6}).wait(1).to({graphics:mask_3_graphics_186,x:362.7,y:600.6}).wait(1).to({graphics:mask_3_graphics_187,x:362.7,y:600.6}).wait(1).to({graphics:mask_3_graphics_188,x:362.7,y:600.6}).wait(1).to({graphics:mask_3_graphics_189,x:362.7,y:600.6}).wait(1).to({graphics:mask_3_graphics_190,x:362.7,y:600.6}).wait(1).to({graphics:mask_3_graphics_191,x:362.7,y:600.6}).wait(1).to({graphics:mask_3_graphics_192,x:362.7,y:600.6}).wait(1).to({graphics:mask_3_graphics_193,x:362.7,y:600.6}).wait(1).to({graphics:mask_3_graphics_194,x:362.7,y:600.6}).wait(1).to({graphics:mask_3_graphics_195,x:362.7,y:600.6}).wait(1).to({graphics:mask_3_graphics_196,x:363.4,y:500.6}).wait(1).to({graphics:mask_3_graphics_197,x:364.1,y:400.6}).wait(1).to({graphics:mask_3_graphics_198,x:364.8,y:300.6}).wait(1).to({graphics:mask_3_graphics_199,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_200,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_201,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_202,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_203,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_204,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_205,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_206,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_207,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_208,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_209,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_210,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_211,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_212,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_213,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_214,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_215,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_216,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_217,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_218,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_219,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_220,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_221,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_222,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_223,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_224,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_225,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_226,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_227,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_228,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_229,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_230,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_231,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_232,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_233,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_234,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_235,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_236,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_237,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_238,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_239,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_240,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_241,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_242,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_243,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_244,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_245,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_246,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_247,x:365.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_248,x:365.5,y:200.5}).wait(40));

	// 敲的手22
	this.instance_27 = new lib.s16132();
	this.instance_27.setTransform(192.6,880.3,1,1,8,0,0,41.1,38);
	this.instance_27.alpha = 0;
	this.instance_27._off = true;

	this.instance_27.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(141).to({_off:false},0).to({alpha:1},12).wait(7).to({regY:38.1,rotation:-5},5).to({x:192.5},14).to({x:192.6,y:531.7},4).to({scaleX:1,scaleY:1,x:192.7},12).to({scaleX:1,scaleY:1,x:195.5,y:145.6},4).wait(49).to({_off:true},1).wait(39));

	// 拿的手23
	this.instance_28 = new lib.s16131();
	this.instance_28.setTransform(344.1,904.2,1,1,0,0,0,125.5,84);
	this.instance_28.alpha = 0;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(141).to({_off:false},0).to({alpha:1},12).wait(26).to({y:558.1},4).wait(12).to({y:170},4).wait(49).to({_off:true},1).wait(39));

	// 背景23
	this.instance_29 = new lib.s16145();
	this.instance_29.setTransform(362.1,946.7,1,1,0,0,0,167.5,126.5);
	this.instance_29.alpha = 0;
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(141).to({_off:false},0).to({alpha:1},12).wait(26).to({y:600.6},4).wait(12).to({x:366.1,y:220.6},4).wait(49).to({_off:true},1).wait(39));

	// 前景2
	this.instance_30 = new lib.s16106();
	this.instance_30.setTransform(377.5,612,1,1,0,0,0,375.5,612);
	this.instance_30.alpha = 0;
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(107).to({_off:false},0).to({alpha:1},10).wait(62).to({x:375.5,y:268.5},4).wait(12).to({y:-147.6},4).to({_off:true},19).wait(70));

	// 拉琴21
	this.instance_31 = new lib.s16129();
	this.instance_31.setTransform(286.2,638.2,1,1,0,0,0,44,118);
	this.instance_31.alpha = 0;
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(107).to({_off:false},0).to({x:288.2,y:636.2,alpha:1},10).to({x:292.2,y:633.2},14).to({x:286.2,y:640.2},14).to({x:292.2,y:633.2},14).to({x:286.2,y:640.2},14).to({x:288.9,y:636.9},6).to({x:292.2,y:295.1},4).to({x:293.1,y:291.4},12).to({x:293.3,y:-159.7},4).to({_off:true},19).wait(70));

	// 女人21
	this.instance_32 = new lib.s16114();
	this.instance_32.setTransform(296.1,574.6,1,1,0,0,0,126,98);
	this.instance_32.alpha = 0;
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(107).to({_off:false},0).to({alpha:1},10).wait(62).to({x:290.2,y:226.5},4).wait(12).to({y:-193.6},4).to({_off:true},19).wait(70));

	// 背景2
	this.instance_33 = new lib.s16143();
	this.instance_33.setTransform(260.1,564.6,1,1,0,0,0,154.5,122.5);
	this.instance_33.alpha = 0;
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(107).to({_off:false},0).to({alpha:1},10).wait(62).to({x:261.7,y:226.5},4).wait(12).to({y:-193.6},4).to({_off:true},19).wait(70));

	// 五线谱2
	this.instance_34 = new lib.s16102();
	this.instance_34.setTransform(265.1,598.7,1,1,9,0,0,157,78.5);
	this.instance_34.alpha = 0;
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(117).to({_off:false},0).to({regX:157.1,rotation:10,x:597,y:504.1,alpha:1},18).to({rotation:-12,x:939.1,y:402.2},17).to({regY:78.6,scaleX:1,scaleY:1,y:402.3},27).wait(4).to({regY:78.5,scaleX:1,scaleY:1,y:402.2},34).to({_off:true},1).wait(70));

	// 图21
	this.instance_35 = new lib.s16111();
	this.instance_35.setTransform(454.1,218.1,1,1,0,0,0,221,161.5);
	this.instance_35.alpha = 0.281;
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(80).to({_off:false},0).to({alpha:1},14).wait(85).to({y:-182},4).wait(34).to({_off:true},1).wait(70));

	// 五线谱1
	this.instance_36 = new lib.s16101();
	this.instance_36.setTransform(35,85.1,1,1,21,0,0,115,64);
	this.instance_36.alpha = 0;
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(94).to({_off:false},0).to({rotation:7.3,x:157.3,y:128.1,alpha:1},6).to({rotation:-15,x:357.1,y:198.6},12).to({scaleX:1,scaleY:1,rotation:-14.8,y:198.5},67).to({regY:64.1,x:360.5,y:-147.5},4).to({_off:true},44).wait(61));

	// 背景22
	this.instance_37 = new lib.s16148();
	this.instance_37.setTransform(375,610,1,1,0,0,0,375,610);
	this.instance_37.alpha = 0.281;
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(80).to({_off:false},0).to({alpha:1},14).wait(160).to({_off:true},1).wait(33));

	// 心电图11
	this.instance_38 = new lib.s16125();
	this.instance_38.setTransform(440.5,816.5,0.56,0.56,0,0,0,626.8,261.6);
	this.instance_38.alpha = 0;
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(30).to({_off:false},0).to({alpha:0.281},12).wait(54).to({_off:true},1).wait(191));

	// 女人右手1
	this.instance_39 = new lib.s16115();
	this.instance_39.setTransform(374.6,915.2,1,1,0,0,0,60,58.5);
	this.instance_39.alpha = 0;
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(30).to({_off:false},0).to({regX:60.1,regY:58.4,rotation:2,alpha:1},12).to({regY:58.5,rotation:5,y:915.3},27).to({regY:58.4,rotation:2,y:915.2},27).to({_off:true},1).wait(191));

	// 女人左手1
	this.instance_40 = new lib.s16118();
	this.instance_40.setTransform(457.2,920.2,1,1,0,0,0,91.5,59.5);
	this.instance_40.alpha = 0;
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(30).to({_off:false},0).to({regX:91.6,rotation:2,alpha:1},12).to({regX:91.5,rotation:5,x:457.1},27).to({regX:91.6,rotation:2,x:457.2},27).to({_off:true},1).wait(191));

	// 女人头发1
	this.instance_41 = new lib.s16117();
	this.instance_41.setTransform(390.1,837.2,1,1,0,0,0,61.5,53);
	this.instance_41.alpha = 0;
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(30).to({_off:false},0).to({alpha:1},12).wait(54).to({_off:true},1).wait(191));

	// 男人手1
	this.instance_42 = new lib.s16138();
	this.instance_42.setTransform(390.7,783.3,1,1,0,0,0,16,128.6);
	this.instance_42.alpha = 0;
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(30).to({_off:false},0).to({rotation:2,y:783.2,alpha:1},12).to({rotation:4},27).to({rotation:2},27).to({_off:true},1).wait(191));

	// 图13
	this.instance_43 = new lib.s16110();
	this.instance_43.setTransform(373.5,655,1,1,0,0,0,373.5,565);
	this.instance_43.alpha = 0;
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(30).to({_off:false},0).to({alpha:1},12).wait(54).to({_off:true},1).wait(191));

	// 图12
	this.instance_44 = new lib.s16109();
	this.instance_44.setTransform(598.2,434.1,1,1,0,0,0,133.5,116);
	this.instance_44.alpha = 0;
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(13).to({_off:false},0).to({alpha:1},10).wait(73).to({_off:true},1).wait(191));

	// 心电图机1
	this.instance_45 = new lib.s16207();
	this.instance_45.setTransform(59.1,95.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(96).to({_off:true},1).wait(191));

	// 心电图数字
	this.instance_46 = new lib.s16210();
	this.instance_46.setTransform(126.1,149.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(96).to({_off:true},1).wait(191));

	// 遮挡1
	this.instance_47 = new lib.s16209();
	this.instance_47.setTransform(123.6,117.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(96).to({_off:true},1).wait(191));

	// 遮罩1 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_0 = new cjs.Graphics().p("AxkMWIAA4rMAjJAAAIAAYrg");
	var mask_4_graphics_96 = new cjs.Graphics().p("AxkMWIAA4rMAjJAAAIAAYrg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:mask_4_graphics_0,x:244.6,y:221.1}).wait(96).to({graphics:mask_4_graphics_96,x:244.6,y:221.1}).wait(192));

	// 心电图1
	this.instance_48 = new lib.s16120();
	this.instance_48.setTransform(663.2,203.1,1,1,0,0,0,561,50);

	this.instance_48.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).to({x:467.2},96).to({_off:true},1).wait(191));

	// 心电背景1
	this.instance_49 = new lib.s16208();
	this.instance_49.setTransform(100.1,135);

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(96).to({_off:true},1).wait(191));

	// 背景色1
	this.instance_50 = new lib.s16213();
	this.instance_50.setTransform(29.6,46.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(96).to({_off:true},1).wait(191));

	// 背景11
	this.instance_51 = new lib.s16212();

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(96).to({_off:true},1).wait(191));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


// stage content:



(lib.qj_s16 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s16();
	this.instance.setTransform(612.1,610,1,1,0,0,0,612.1,610);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(375,610,1224.2,1220);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;