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
		{src:"images/cv/s13201.png", id:"s13201"},
		{src:"images/cv/s13202.png", id:"s13202"},
		{src:"images/cv/s13203.png", id:"s13203"},
		{src:"images/cv/s13204.png", id:"s13204"},
		{src:"images/cv/s13205.png", id:"s13205"},
		{src:"images/cv/s13206.png", id:"s13206"},
		{src:"images/cv/s13207.png", id:"s13207"},
		{src:"images/cv/s13208.png", id:"s13208"},
		{src:"images/cv/s13209.png", id:"s13209"},
		{src:"images/cv/s13210.png", id:"s13210"},
		{src:"images/cv/s13211.png", id:"s13211"},
		{src:"images/cv/s13212.png", id:"s13212"},
		{src:"images/cv/s13213.png", id:"s13213"},
		{src:"images/cv/s13215.png", id:"s13215"},
		{src:"images/cv/s13301.png", id:"s13301"},
		{src:"images/cv/s13302.png", id:"s13302"},
		{src:"images/cv/s13303.png", id:"s13303"},
		{src:"images/cv/s13304.png", id:"s13304"},
		{src:"images/cv/s13305.png", id:"s13305"},
		{src:"images/cv/s13306.png", id:"s13306"},
		{src:"images/cv/s13307.png", id:"s13307"},
		{src:"images/cv/s13308.png", id:"s13308"},
		{src:"images/cv/s13309.png", id:"s13309"},
		{src:"images/cv/s13310.png", id:"s13310"},
		{src:"images/cv/s13311.png", id:"s13311"},
		{src:"images/cv/s13312.png", id:"s13312"},
		{src:"images/cv/s13313.png", id:"s13313"},
		{src:"images/cv/s13314.png", id:"s13314"},
		{src:"images/cv/s13316.png", id:"s13316"},
		{src:"images/cv/s13318.png", id:"s13318"},
		{src:"images/cv/s13319.png", id:"s13319"},
		{src:"images/cv/s13320.png", id:"s13320"},
		{src:"images/cv/s13321.png", id:"s13321"},
		{src:"images/cv/s13322.png", id:"s13322"},
		{src:"images/cv/s13323.png", id:"s13323"},
		{src:"images/cv/s13324.png", id:"s13324"},
		{src:"images/cv/s13325.png", id:"s13325"},
		{src:"images/cv/s13327.png", id:"s13327"},
		{src:"images/cv/s13328.png", id:"s13328"},
		{src:"images/cv/s13329.png", id:"s13329"},
		{src:"images/cv/s13330.png", id:"s13330"},
		{src:"images/cv/s13331.png", id:"s13331"},
		{src:"images/cv/s13332.png", id:"s13332"},
		{src:"images/cv/s13333.png", id:"s13333"},
		{src:"images/cv/s13334.png", id:"s13334"},
		{src:"images/cv/s13401.png", id:"s13401"},
		{src:"images/cv/s13402.png", id:"s13402"},
		{src:"images/cv/s13403.png", id:"s13403"},
		{src:"images/cv/s13404.png", id:"s13404"},
		{src:"images/cv/s13405.png", id:"s13405"},
		{src:"images/cv/s13406.png", id:"s13406"},
		{src:"images/cv/s13407.png", id:"s13407"},
		{src:"images/cv/s13408.png", id:"s13408"},
		{src:"images/cv/s13409.png", id:"s13409"},
		{src:"images/cv/s13410.png", id:"s13410"},
		{src:"images/cv/s13411.png", id:"s13411"},
		{src:"images/cv/s13412.png", id:"s13412"},
		{src:"images/cv/s13413.png", id:"s13413"},
		{src:"images/cv/s13414.png", id:"s13414"},
		{src:"images/cv/s13415.png", id:"s13415"},
		{src:"images/cv/s13501.png", id:"s13501"},
		{src:"images/cv/s13502.png", id:"s13502"},
		{src:"images/cv/s13503.png", id:"s13503"},
		{src:"images/cv/s13504.png", id:"s13504"},
		{src:"images/cv/s13506.png", id:"s13506"},
		{src:"images/cv/s13507.png", id:"s13507"},
		{src:"images/cv/s13508.png", id:"s13508"},
		{src:"images/cv/s13509.png", id:"s13509"},
		{src:"images/cv/s13510.png", id:"s13510"},
		{src:"images/cv/s13511.png", id:"s13511"},
		{src:"images/cv/s13512.png", id:"s13512"},
		{src:"images/cv/s13513.png", id:"s13513"},
		{src:"images/cv/s13514.png", id:"s13514"},
		{src:"images/cv/s13515.png", id:"s13515"},
		{src:"images/cv/s13516.png", id:"s13516"},
		{src:"images/cv/s13517.png", id:"s13517"},
		{src:"images/cv/s13518.png", id:"s13518"},
		{src:"images/cv/s13519.png", id:"s13519"},
		{src:"images/cv/s13520.png", id:"s13520"},
		{src:"images/cv/s13521.png", id:"s13521"},
		{src:"images/cv/s13522.png", id:"s13522"},
		{src:"images/cv/s13523.png", id:"s13523"},
		{src:"images/cv/s13524.png", id:"s13524"},
		{src:"images/cv/s13525.png", id:"s13525"},
		{src:"images/cv/s13526.png", id:"s13526"},
		{src:"images/cv/s13527.png", id:"s13527"},
		{src:"images/cv/s13528.png", id:"s13528"}
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



(lib.s13201 = function() {
	this.initialize(img.s13201);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,730,760);


(lib.s13202 = function() {
	this.initialize(img.s13202);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,100);


(lib.s13203 = function() {
	this.initialize(img.s13203);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,228);


(lib.s13204 = function() {
	this.initialize(img.s13204);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,264,222);


(lib.s13205 = function() {
	this.initialize(img.s13205);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,51);


(lib.s13206 = function() {
	this.initialize(img.s13206);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,29);


(lib.s13207 = function() {
	this.initialize(img.s13207);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,51);


(lib.s13208 = function() {
	this.initialize(img.s13208);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,41);


(lib.s13209 = function() {
	this.initialize(img.s13209);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,49);


(lib.s13210 = function() {
	this.initialize(img.s13210);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,751,1221);


(lib.s13211 = function() {
	this.initialize(img.s13211);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,387,501);


(lib.s13212 = function() {
	this.initialize(img.s13212);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,258,333);


(lib.s13213 = function() {
	this.initialize(img.s13213);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,357,426);


(lib.s13215 = function() {
	this.initialize(img.s13215);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,856,548);


(lib.s13301 = function() {
	this.initialize(img.s13301);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,130);


(lib.s13302 = function() {
	this.initialize(img.s13302);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,98);


(lib.s13303 = function() {
	this.initialize(img.s13303);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,147);


(lib.s13304 = function() {
	this.initialize(img.s13304);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,218);


(lib.s13305 = function() {
	this.initialize(img.s13305);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,175);


(lib.s13306 = function() {
	this.initialize(img.s13306);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,105);


(lib.s13307 = function() {
	this.initialize(img.s13307);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,231);


(lib.s13308 = function() {
	this.initialize(img.s13308);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,86);


(lib.s13309 = function() {
	this.initialize(img.s13309);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,84);


(lib.s13310 = function() {
	this.initialize(img.s13310);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,508);


(lib.s13311 = function() {
	this.initialize(img.s13311);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,208);


(lib.s13312 = function() {
	this.initialize(img.s13312);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,340,230);


(lib.s13313 = function() {
	this.initialize(img.s13313);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,111);


(lib.s13314 = function() {
	this.initialize(img.s13314);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,160);


(lib.s13316 = function() {
	this.initialize(img.s13316);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,35);


(lib.s13318 = function() {
	this.initialize(img.s13318);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,162);


(lib.s13319 = function() {
	this.initialize(img.s13319);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,138);


(lib.s13320 = function() {
	this.initialize(img.s13320);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,186);


(lib.s13321 = function() {
	this.initialize(img.s13321);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,99);


(lib.s13322 = function() {
	this.initialize(img.s13322);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,267,390);


(lib.s13323 = function() {
	this.initialize(img.s13323);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,751,713);


(lib.s13324 = function() {
	this.initialize(img.s13324);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,290);


(lib.s13325 = function() {
	this.initialize(img.s13325);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,171,251);


(lib.s13327 = function() {
	this.initialize(img.s13327);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,282,279);


(lib.s13328 = function() {
	this.initialize(img.s13328);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,489,363);


(lib.s13329 = function() {
	this.initialize(img.s13329);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,270,225);


(lib.s13330 = function() {
	this.initialize(img.s13330);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,81);


(lib.s13331 = function() {
	this.initialize(img.s13331);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,117);


(lib.s13332 = function() {
	this.initialize(img.s13332);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,243,255);


(lib.s13333 = function() {
	this.initialize(img.s13333);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,252,261);


(lib.s13334 = function() {
	this.initialize(img.s13334);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,531,147);


(lib.s13401 = function() {
	this.initialize(img.s13401);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,730,790);


(lib.s13402 = function() {
	this.initialize(img.s13402);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,273,267);


(lib.s13403 = function() {
	this.initialize(img.s13403);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,417,301);


(lib.s13404 = function() {
	this.initialize(img.s13404);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,179);


(lib.s13405 = function() {
	this.initialize(img.s13405);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,417,301);


(lib.s13406 = function() {
	this.initialize(img.s13406);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,369,333);


(lib.s13407 = function() {
	this.initialize(img.s13407);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,327,162);


(lib.s13408 = function() {
	this.initialize(img.s13408);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,322,234);


(lib.s13409 = function() {
	this.initialize(img.s13409);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,783,243);


(lib.s13410 = function() {
	this.initialize(img.s13410);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s13411 = function() {
	this.initialize(img.s13411);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,489,442);


(lib.s13412 = function() {
	this.initialize(img.s13412);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,698,678);


(lib.s13413 = function() {
	this.initialize(img.s13413);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,129);


(lib.s13414 = function() {
	this.initialize(img.s13414);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,454,337);


(lib.s13415 = function() {
	this.initialize(img.s13415);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,171);


(lib.s13501 = function() {
	this.initialize(img.s13501);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,715,281);


(lib.s13502 = function() {
	this.initialize(img.s13502);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,945,270);


(lib.s13503 = function() {
	this.initialize(img.s13503);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,993);


(lib.s13504 = function() {
	this.initialize(img.s13504);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,348,482);


(lib.s13506 = function() {
	this.initialize(img.s13506);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s13507 = function() {
	this.initialize(img.s13507);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,286,300);


(lib.s13508 = function() {
	this.initialize(img.s13508);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,360,190);


(lib.s13509 = function() {
	this.initialize(img.s13509);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,751,1220);


(lib.s13510 = function() {
	this.initialize(img.s13510);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,751,1220);


(lib.s13511 = function() {
	this.initialize(img.s13511);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s13512 = function() {
	this.initialize(img.s13512);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,751,1221);


(lib.s13513 = function() {
	this.initialize(img.s13513);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,751,1221);


(lib.s13514 = function() {
	this.initialize(img.s13514);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,751,1221);


(lib.s13515 = function() {
	this.initialize(img.s13515);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,450);


(lib.s13516 = function() {
	this.initialize(img.s13516);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,450);


(lib.s13517 = function() {
	this.initialize(img.s13517);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,450);


(lib.s13518 = function() {
	this.initialize(img.s13518);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,450);


(lib.s13519 = function() {
	this.initialize(img.s13519);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,450);


(lib.s13520 = function() {
	this.initialize(img.s13520);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,450);


(lib.s13521 = function() {
	this.initialize(img.s13521);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,387);


(lib.s13522 = function() {
	this.initialize(img.s13522);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,375);


(lib.s13523 = function() {
	this.initialize(img.s13523);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,414);


(lib.s13524 = function() {
	this.initialize(img.s13524);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,434);


(lib.s13525 = function() {
	this.initialize(img.s13525);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,388);


(lib.s13526 = function() {
	this.initialize(img.s13526);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,119,382);


(lib.s13527 = function() {
	this.initialize(img.s13527);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,402);


(lib.s13528 = function() {
	this.initialize(img.s13528);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,423);


(lib.s13164 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13334();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,531,147);


(lib.s13163 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13314();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,160);


(lib.s13162 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13415();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,201,171);


(lib.s13161 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13414();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,454,337);


(lib.s13160 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13308();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,152,86);


(lib.s13159 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13313();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48,111);


(lib.s13158 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13312();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,340,230);


(lib.s13157 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13333();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,252,261);


(lib.s13156 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13332();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,243,255);


(lib.s13155 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13331();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,108,117);


(lib.s13154 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13330();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96,81);


(lib.s13153 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13329();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,270,225);


(lib.s13152 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13328();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,489,363);


(lib.s13151 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13327();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,282,279);


(lib.s13150 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13508();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,360,190);


(lib.s13149 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13507();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,286,300);


(lib.s13148 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13307();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89,231);


(lib.s13147 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13311();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144,208);


(lib.s13145 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13213();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,357,426);


(lib.s13144 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13325();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,171,251);


(lib.s13143 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13324();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,260,290);


(lib.s13142 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13212();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,258,333);


(lib.s13141 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13211();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,387,501);


(lib.s13140 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13412();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,698,678);


(lib.s13139 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13411();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,489,442);


(lib.s13138 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13410();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s13137 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13310();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,508);


(lib.s13136 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13323();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,751,713);


(lib.s13135 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13409();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,783,243);


(lib.s13134 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13209();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42,49);


(lib.s13133 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13208();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29,41);


(lib.s13132 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13207();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24,51);


(lib.s13131 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13206();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36,29);


(lib.s13130 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13205();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31,51);


(lib.s13129 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13408();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,322,234);


(lib.s13128 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13204();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,264,222);


(lib.s13127 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13203();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,231,228);


(lib.s13126 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13502();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,945,270);


(lib.s13125 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13501();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,715,281);


(lib.s13124 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13407();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,327,162);


(lib.s13123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13406();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,369,333);


(lib.s13122 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13306();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45,105);


(lib.s13121 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13305();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78,175);


(lib.s13119 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13316();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104,35);


(lib.s13118 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13322();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,267,390);


(lib.s13117 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13321();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,132,99);


(lib.s13116 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13320();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,105,186);


(lib.s13115 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13319();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,138);


(lib.s13114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13318();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126,162);


(lib.s13113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13309();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77,84);


(lib.s13112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13413();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168,129);


(lib.s13111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13202();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112,100);


(lib.s13110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13404();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,179);


(lib.s13109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13403();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,417,301);


(lib.s13108 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13402();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,273,267);


(lib.s13107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13304();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186,218);


(lib.s13106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13303();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180,147);


(lib.s13105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13302();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,134,98);


(lib.s13104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13301();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144,130);


(lib.s13103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13503();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,375,993);


(lib.s13102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13401();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,730,790);


(lib.s13101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13201();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,730,760);


(lib.s13165 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 女生手22
	this.instance = new lib.s13117();
	this.instance.setTransform(549.5,298.5,1,1,0,0,0,25.9,71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:8,x:525,y:295.5},22).to({rotation:-5,x:494.9,y:291.8},41).to({rotation:0,x:467.5,y:288.5},29).wait(1));

	// 女生头22
	this.instance_1 = new lib.s13115();
	this.instance_1.setTransform(656.6,279.6,1,1,0,0,0,75,114);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:11,x:638.5,y:277.6},22).to({regX:74.9,rotation:-3,x:610.7,y:274.6},30).to({regX:75,rotation:0,x:573.6,y:270.4},40).wait(1));

	// 女生身23
	this.instance_2 = new lib.s13118();
	this.instance_2.setTransform(669.6,446.5,1,1,0,0,0,133.5,195);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:587.6,y:436.5},92).wait(1));

	// 女生手21
	this.instance_3 = new lib.s13116();
	this.instance_3.setTransform(714.6,277.6,1,1,0,0,0,42.5,145.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:42.6,rotation:10,x:685.5,y:274.1},36).to({regY:145,x:676,y:272.8},10).to({rotation:-7,x:655.2,y:270.3},22).to({regX:42.5,regY:145.1,rotation:0,x:632.6,y:267.6},24).wait(1));

	// 人手22
	this.instance_4 = new lib.s13106();
	this.instance_4.setTransform(538.6,198.4,1,1,0,0,0,144,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:144.1,regY:21.4,rotation:8,x:453.8,y:193.7},92).wait(1));

	// 人身2
	this.instance_5 = new lib.s13107();
	this.instance_5.setTransform(610.1,317,1,1,0,0,0,124,167);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-10,x:528.1,y:307},92).wait(1));

	// 人头21
	this.instance_6 = new lib.s13104();
	this.instance_6.setTransform(504.1,181.4,1,1,0,0,0,115,89);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-10,x:408.7,y:186.3},92).wait(1));

	// 人手21
	this.instance_7 = new lib.s13105();
	this.instance_7.setTransform(520.6,204.4,1,1,0,0,0,116,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:6,x:441,y:204},92).wait(1));

	// 脚21
	this.instance_8 = new lib.s13143();
	this.instance_8.setTransform(587.6,362.5,1,1,5,0,0,185,43.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:185.1,regY:44,rotation:-9,x:505.7,y:352.5},92).wait(1));

	// 女生发2
	this.instance_9 = new lib.s13114();
	this.instance_9.setTransform(735.1,325,1,1,0,0,0,63,81);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:653.1,y:315},92).wait(1));

	// 自行车2颤
	this.instance_10 = new lib.s13151();
	this.instance_10.setTransform(271.6,483.5,1,1,0,0,0,141,139.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:189.6,y:473.5},92).wait(1));

	// 自行车21颤
	this.instance_11 = new lib.s13153();
	this.instance_11.setTransform(637.1,597.5,1,1,0,0,0,135,112.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:560.6,y:589.5},92).wait(1));

	// 自行车23
	this.instance_12 = new lib.s13155();
	this.instance_12.setTransform(321.6,455.5,1,1,0,0,0,54,58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:239.6,y:445.5},92).wait(1));

	// 自行车22
	this.instance_13 = new lib.s13154();
	this.instance_13.setTransform(478.1,563.5,1,1,0,0,0,48,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({x:396.1,y:553.5},92).wait(1));

	// 自行车25
	this.instance_14 = new lib.s13157();
	this.instance_14.setTransform(279.6,496.5,1,1,0,0,0,126,130.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({rotation:-40,x:197.6,y:486.5},92).wait(1));

	// 自行车21
	this.instance_15 = new lib.s13152();
	this.instance_15.setTransform(512.6,440.5,1,1,0,0,0,244.5,181.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({x:430.6,y:430.5},92).wait(1));

	// 自行车24
	this.instance_16 = new lib.s13156();
	this.instance_16.setTransform(635.6,580.5,1,1,0,0,0,121.5,127.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({regX:121.6,regY:127.4,rotation:-40,x:553.6,y:570.5},92).wait(1));

	// 脚22
	this.instance_17 = new lib.s13144();
	this.instance_17.setTransform(549.1,326.5,1,1,-10,0,0,125.5,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({rotation:0,x:467.1,y:316.5},92).wait(1));

	// 阴影21
	this.instance_18 = new lib.s13164();
	this.instance_18.setTransform(419.1,658.2,1,1,0,0,0,265.5,73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({x:350.9,y:647.3},92).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(130.6,92.4,672.5,639.4);


(lib.s13120 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13119();
	this.instance.setTransform(52,17.5,1,1,0,0,0,52,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104,35);


(lib.s13 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_262 = function() {
		this.stop();
		try{app.showBtns()}catch(e){}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(262).call(this.frame_262).wait(1));

	// 文案2
	this.instance = new lib.s13126();
	this.instance.setTransform(376.7,653.3,0.75,0.75,0,0,0,472.6,135);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(228).to({_off:false},0).to({alpha:1},8).wait(27));

	// 文案
	this.instance_1 = new lib.s13125();
	this.instance_1.setTransform(457.7,831.8,0.75,0.75,0,0,0,458.6,152.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(228).to({_off:false},0).to({alpha:1},8).wait(27));

	// 头发4逐帧
	this.instance_2 = new lib.s13515();
	this.instance_2.setTransform(302,161.5);
	this.instance_2._off = true;

	this.instance_3 = new lib.s13516();
	this.instance_3.setTransform(301,161.2);
	this.instance_3._off = true;

	this.instance_4 = new lib.s13517();
	this.instance_4.setTransform(302,161.2);
	this.instance_4._off = true;

	this.instance_5 = new lib.s13518();
	this.instance_5.setTransform(303,161.1);
	this.instance_5._off = true;

	this.instance_6 = new lib.s13519();
	this.instance_6.setTransform(303,161.1);
	this.instance_6._off = true;

	this.instance_7 = new lib.s13520();
	this.instance_7.setTransform(303,161.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(220).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(221).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(222).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(223).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(224).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(225).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(1));

	// 速度线逐帧
	this.instance_8 = new lib.s13509();
	this.instance_8.setTransform(-1,0);
	this.instance_8._off = true;

	this.instance_9 = new lib.s13510();
	this.instance_9._off = true;

	this.instance_10 = new lib.s13511();
	this.instance_10._off = true;

	this.instance_11 = new lib.s13512();
	this.instance_11.setTransform(0,-1);
	this.instance_11._off = true;

	this.instance_12 = new lib.s13513();
	this.instance_12._off = true;

	this.instance_13 = new lib.s13514();
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(220).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(221).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(222).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(223).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(224).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(225).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(3));

	// 人42
	this.instance_14 = new lib.s13504();
	this.instance_14.setTransform(232.4,233.9);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(220).to({_off:false},0).wait(43));

	// 腿41
	this.instance_15 = new lib.s13149();
	this.instance_15.setTransform(343.1,614.4,1,1,0,0,0,253,72);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(220).to({_off:false},0).to({regY:71.9,rotation:-13},8).to({regX:253.1,regY:72,scaleX:1,scaleY:1,rotation:12,x:343.2},7).to({scaleX:1,scaleY:1,rotation:-5},10).to({regY:71.9,rotation:10},10).to({regX:253,regY:72,rotation:0,x:343.1},7).wait(1));

	// 腿42
	this.instance_16 = new lib.s13150();
	this.instance_16.setTransform(352.2,586.9,1,1,0,0,0,336.1,41);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(220).to({_off:false},0).to({regX:336,rotation:8,x:353.5,y:585.9},7).to({regY:40.9,rotation:-9,x:348.7,y:589.8},7).to({regX:336.1,regY:41,scaleX:1,scaleY:1,rotation:17,x:364.7,y:581.8},10).to({regX:335.9,regY:40.9,scaleX:1,scaleY:1,rotation:-7,x:350,y:588.9},9).to({regX:336.1,regY:41,rotation:0,x:352.2},9).wait(1));

	// 人41
	this.instance_17 = new lib.s13103();
	this.instance_17.setTransform(372.8,579.2,1,1,0,0,0,187.5,496.5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(220).to({_off:false},0).wait(43));

	// 右腿
	this.instance_18 = new lib.s13524();
	this.instance_18.setTransform(366.1,478);
	this.instance_18._off = true;

	this.instance_19 = new lib.s13523();
	this.instance_19.setTransform(358.2,464.8);
	this.instance_19._off = true;

	this.instance_20 = new lib.s13522();
	this.instance_20.setTransform(370.7,458.5);
	this.instance_20._off = true;

	this.instance_21 = new lib.s13521();
	this.instance_21.setTransform(368.9,446.7);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(220).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false,x:369.1,y:476},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(221).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,x:360.4,y:465},0).to({_off:true},1).wait(1).to({_off:false,x:358.2,y:464.8},0).to({_off:true},1).wait(3).to({_off:false,x:360.4,y:465},0).to({_off:true},1).wait(1).to({_off:false,x:358.2,y:464.8},0).to({_off:true},1).wait(3).to({_off:false,x:360.4,y:465},0).to({_off:true},1).wait(1).to({_off:false,x:358.2,y:464.8},0).to({_off:true},1).wait(3).to({_off:false,x:360.4,y:465},0).to({_off:true},1).wait(1).to({_off:false,x:358.2,y:464.8},0).to({_off:true},1).wait(3).to({_off:false,x:360.4,y:465},0).to({_off:true},1).wait(1).to({_off:false,x:358.2,y:464.8},0).to({_off:true},1).wait(3).to({_off:false,x:360.4,y:465},0).to({_off:true},1).wait(1).to({_off:false,x:358.2,y:464.8},0).to({_off:true},1).wait(3).to({_off:false,x:360.4,y:465},0).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(222).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,y:462.5},0).to({_off:true},1).wait(3).to({_off:false,y:458.5},0).to({_off:true},1).wait(1).to({_off:false,y:462.5},0).to({_off:true},1).wait(3).to({_off:false,y:458.5},0).to({_off:true},1).wait(1).to({_off:false,y:462.5},0).to({_off:true},1).wait(3).to({_off:false,y:458.5},0).to({_off:true},1).wait(1).to({_off:false,y:462.5},0).to({_off:true},1).wait(3).to({_off:false,y:458.5},0).to({_off:true},1).wait(1).to({_off:false,y:462.5},0).to({_off:true},1).wait(3).to({_off:false,y:458.5},0).to({_off:true},1).wait(1).to({_off:false,y:462.5},0).to({_off:true},1).wait(3).to({_off:false,y:458.5},0).to({_off:true},1).wait(1).to({_off:false,y:462.5},0).to({_off:true},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(223).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(3));

	// 左腿
	this.instance_22 = new lib.s13525();
	this.instance_22.setTransform(253.4,444.4);
	this.instance_22._off = true;

	this.instance_23 = new lib.s13526();
	this.instance_23.setTransform(270.6,453.2);
	this.instance_23._off = true;

	this.instance_24 = new lib.s13527();
	this.instance_24.setTransform(264.6,478.2);
	this.instance_24._off = true;

	this.instance_25 = new lib.s13528();
	this.instance_25.setTransform(252.1,485.7);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(220).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(221).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(222).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(223).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(3));

	// 背景4
	this.instance_26 = new lib.s13506();
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(220).to({_off:false},0).wait(43));

	// 叮31
	this.instance_27 = new lib.s13110();
	this.instance_27.setTransform(564.8,768,1,1,0,0,0,150,89.5);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(183).to({_off:false},0).wait(1).to({regX:150.1,rotation:2,x:564.9},0).wait(1).to({regX:150,rotation:-1,x:564.8},0).wait(1).to({rotation:1},0).wait(1).to({rotation:-1},0).wait(1).to({rotation:1},0).wait(1).to({rotation:-1},0).to({_off:true},57).wait(17));

	// 叮框3
	this.instance_28 = new lib.s13405();
	this.instance_28.setTransform(325.3,627.5);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(183).to({_off:false},0).to({_off:true},63).wait(17));

	// 叮声3
	this.instance_29 = new lib.s13109();
	this.instance_29.setTransform(422.9,903.9,0.32,0.32,0,0,0,97.5,276.4);
	this.instance_29.alpha = 0;
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(181).to({_off:false},0).to({regX:97.6,scaleX:1,scaleY:1,alpha:1},2).to({_off:true},44).wait(36));

	// 声3
	this.instance_30 = new lib.s13112();
	this.instance_30.setTransform(396.8,896,1,1,0,0,0,84,64.5);
	this.instance_30.alpha = 0;
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(179).to({_off:false},0).to({alpha:1},4).to({_off:true},63).wait(17));

	// 车32
	this.instance_31 = new lib.s13162();
	this.instance_31.setTransform(-201.3,972.8,1,1,0,0,0,100.5,85.5);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(176).to({_off:false},0).to({x:326.7,y:976},3).wait(65).to({_off:true},1).wait(18));

	// 手32
	this.instance_32 = new lib.s13124();
	this.instance_32.setTransform(-420.6,1142.4,1,1,9,0,0,96.2,100.2);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(176).to({_off:false},0).to({x:107.4,y:1145.6},3).to({rotation:1,x:107.5,y:1145.7},2).wait(63).to({_off:true},1).wait(18));

	// 手31
	this.instance_33 = new lib.s13123();
	this.instance_33.setTransform(-366.1,1016,1,1,0,0,0,184.5,166.5);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(176).to({_off:false},0).to({x:161.9,y:1019.2},3).wait(65).to({_off:true},1).wait(18));

	// 车31
	this.instance_34 = new lib.s13161();
	this.instance_34.setTransform(-203.2,1043.5,1,1,0,0,0,227,168.5);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(176).to({_off:false},0).to({x:324.8,y:1046.7},3).to({_off:true},67).wait(17));

	// 背景32
	this.instance_35 = new lib.s13139();
	this.instance_35.setTransform(-255.6,965,1,1,0,0,0,244.5,221);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(176).to({_off:false},0).to({x:272.4,y:968.2},3).wait(65).to({_off:true},1).wait(18));

	// 汗3
	this.instance_36 = new lib.s13129();
	this.instance_36.setTransform(1156.8,478.6,1,1,0,0,0,161,117);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(198).to({_off:false},0).to({x:412.8,y:425.8},5).to({x:384,y:411.4},5).to({x:388.8,y:417.8},15).to({_off:true},33).wait(7));

	// 人31
	this.instance_37 = new lib.s13102();
	this.instance_37.setTransform(1233.6,486.7,1,1,0,0,0,364.5,394.5);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(198).to({_off:false},0).to({x:499.2,y:448.3},5).to({x:465.6,y:427.5},5).to({_off:true},48).wait(7));

	// 线3
	this.instance_38 = new lib.s13135();
	this.instance_38.setTransform(-375.9,564.5,1,1,0,0,0,391.5,121.5);
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(208).to({_off:false},0).to({x:358.5,y:372.5},2).to({_off:true},44).wait(9));

	// 光3
	this.instance_39 = new lib.s13108();
	this.instance_39.setTransform(271,393.3,0.002,0.002,0,0,0,136.6,133.2);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(209).to({_off:false},0).to({regX:136.5,regY:133.5,scaleX:1,scaleY:1},1).to({_off:true},44).wait(9));

	// 背景33
	this.instance_40 = new lib.s13140();
	this.instance_40.setTransform(1112.7,378,1,1,0,0,0,349,339);
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(198).to({_off:false},0).to({x:379.9},5).wait(9).to({_off:true},44).wait(7));

	// 背景31
	this.instance_41 = new lib.s13138();
	this.instance_41.setTransform(375,610,1,1,0,0,0,375,610);
	this.instance_41.alpha = 0;
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(186).to({_off:false},0).to({alpha:1},9).wait(49).to({_off:true},1).wait(18));

	// 头23
	this.instance_42 = new lib.s13113();
	this.instance_42.setTransform(-731.1,857.7,1,1,0,0,0,4.5,55);
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(147).to({_off:false},0).to({x:-73,y:767},4).to({x:1070,y:1070.6},35).wait(9).to({_off:true},1).wait(67));

	// 手23
	this.instance_43 = new lib.s13121();
	this.instance_43.setTransform(-742.1,863.3,1,1,0,0,0,39,26.5);
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(147).to({_off:false},0).to({x:-84,y:772.6},4).to({x:1059,y:1076.1},35).wait(9).to({_off:true},1).wait(67));

	// 手24
	this.instance_44 = new lib.s13122();
	this.instance_44.setTransform(-754.1,884.7,1,1,0,0,0,22.5,0);
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(147).to({_off:false},0).to({x:-96,y:794},4).to({x:1047,y:1097.6},35).wait(9).to({_off:true},1).wait(67));

	// 腿23
	this.instance_45 = new lib.s13147();
	this.instance_45.setTransform(-840.7,906.7,1,1,0,0,0,62.5,43.5);
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(147).to({_off:false},0).to({x:-182.6,y:816},4).to({x:960.4,y:1119.6},35).wait(9).to({_off:true},1).wait(67));

	// 身23
	this.instance_46 = new lib.s13160();
	this.instance_46.setTransform(-841.2,879.2,1,1,0,0,0,23.9,53);
	this.instance_46._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(147).to({_off:false},0).to({x:-183.1,y:788.5},4).to({x:959.9,y:1092.1},35).wait(9).to({_off:true},1).wait(67));

	// 自行车222
	this.instance_47 = new lib.s13159();
	this.instance_47.setTransform(-741.1,1066.3,1,1,0,0,0,24,55.5);
	this.instance_47._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(147).to({_off:false},0).to({x:-74.7,y:975.8},4).to({x:1067.5,y:1285.4},35).wait(9).to({_off:true},1).wait(67));

	// 自行车221
	this.instance_48 = new lib.s13158();
	this.instance_48.setTransform(-858.2,1012.2,1,1,0,0,0,170,115);
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(147).to({_off:false},0).to({x:-200.1,y:921.5},4).to({x:942.9,y:1225.1},35).wait(9).to({_off:true},1).wait(67));

	// 腿24
	this.instance_49 = new lib.s13148();
	this.instance_49.setTransform(-840.7,906.7,1,1,0,0,0,59.5,6.5);
	this.instance_49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(147).to({_off:false},0).to({x:-182.6,y:816},4).to({x:960.4,y:1119.6},35).wait(9).to({_off:true},1).wait(67));

	// 轮子21 复制
	this.instance_50 = new lib.s13163();
	this.instance_50.setTransform(-970.4,1060,1,1,0,0,0,80,80);
	this.instance_50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(147).to({_off:false},0).to({regY:79.9,rotation:7,x:-308,y:975.2},4).to({regY:80,rotation:-93,x:833.4,y:1282.5},35).wait(9).to({_off:true},1).wait(67));

	// 轮子21
	this.instance_51 = new lib.s13163();
	this.instance_51.setTransform(-724.8,1099.2,1,1,0,0,0,80,80);
	this.instance_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(147).to({_off:false},0).to({rotation:75,x:-62.3,y:1014.4},4).to({rotation:-67,x:1079,y:1321.8},35).wait(9).to({_off:true},1).wait(67));

	// 影22
	this.instance_52 = new lib.s13120();
	this.instance_52.setTransform(-988.1,1147.3,1,1,0,0,0,52,17.5);
	this.instance_52._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(147).to({_off:false},0).to({x:-330,y:1056.6},4).to({x:813,y:1360.1},35).wait(9).to({_off:true},1).wait(67));

	// 影21
	this.instance_53 = new lib.s13119();
	this.instance_53.setTransform(-752.1,1182.3,1,1,0,0,0,52,17.5);
	this.instance_53._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(147).to({_off:false},0).to({x:-71.6,y:1091.6},4).to({x:1049,y:1395.1},35).wait(9).to({_off:true},1).wait(67));

	// 骑车人1
	this.instance_54 = new lib.s13165();
	this.instance_54.setTransform(1834.3,1175.6,0.59,0.59,0,0,0,1267,423.8);
	this.instance_54._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(140).to({_off:false},0).to({x:1065.6,y:1051.2},4).wait(51).to({_off:true},1).wait(67));

	// 背景22
	this.instance_55 = new lib.s13137();
	this.instance_55.setTransform(1126,966,1,1,0,0,0,375,254);
	this.instance_55._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(140).to({_off:false},0).to({x:376},4).wait(51).to({_off:true},1).wait(67));

	// 女生手22
	this.instance_56 = new lib.s13117();
	this.instance_56.setTransform(1350.3,320.1,1,1,0,0,0,25.9,71.5);
	this.instance_56._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(92).to({_off:false},0).to({x:549.5,y:298.5},5).to({rotation:8,x:525,y:295.5},17).to({rotation:-5,x:494.9,y:291.8},41).to({rotation:0,x:467.5,y:288.5},40).to({_off:true},1).wait(67));

	// 女生头22
	this.instance_57 = new lib.s13115();
	this.instance_57.setTransform(1456.4,298.1,1,1,0,0,0,75,114);
	this.instance_57._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(92).to({_off:false},0).to({x:656.6,y:279.6},5).to({rotation:11,x:638.5,y:277.6},17).to({regX:74.9,rotation:-3,x:610.7,y:274.6},30).to({regX:75,rotation:0,x:573.6,y:270.4},51).to({_off:true},1).wait(67));

	// 女生身23
	this.instance_58 = new lib.s13118();
	this.instance_58.setTransform(1470.4,468.1,1,1,0,0,0,133.5,195);
	this.instance_58._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(92).to({_off:false},0).to({x:669.6,y:446.5},5).to({x:587.6,y:436.5},98).to({_off:true},1).wait(67));

	// 女生手21
	this.instance_59 = new lib.s13116();
	this.instance_59.setTransform(1515.4,299.3,1,1,0,0,0,42.5,145.1);
	this.instance_59._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(92).to({_off:false},0).to({x:714.6,y:277.6},5).to({regX:42.6,rotation:10,x:685.5,y:274.1},31).to({regY:145,x:676,y:272.8},10).to({rotation:-7,x:655.2,y:270.3},22).to({regX:42.5,regY:145.1,rotation:0,x:632.6,y:267.6},35).to({_off:true},1).wait(67));

	// 人手22
	this.instance_60 = new lib.s13106();
	this.instance_60.setTransform(1339.3,220.1,1,1,0,0,0,144,21.5);
	this.instance_60._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(92).to({_off:false},0).to({x:538.6,y:198.4},5).to({regX:144.1,regY:21.4,rotation:8,x:453.8,y:193.7},98).to({_off:true},1).wait(67));

	// 人身2
	this.instance_61 = new lib.s13107();
	this.instance_61.setTransform(1410.9,338.7,1,1,0,0,0,124,167);
	this.instance_61._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(92).to({_off:false},0).to({x:610.1,y:317},5).to({rotation:-10,x:528.1,y:307},98).to({_off:true},1).wait(67));

	// 人头21
	this.instance_62 = new lib.s13104();
	this.instance_62.setTransform(1304.9,203,1,1,0,0,0,115,89);
	this.instance_62._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_62).wait(92).to({_off:false},0).to({x:504.1,y:181.4},5).to({rotation:-10,x:408.7,y:186.3},98).to({_off:true},1).wait(67));

	// 人手21
	this.instance_63 = new lib.s13105();
	this.instance_63.setTransform(1321.3,226.1,1,1,0,0,0,116,6);
	this.instance_63._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_63).wait(92).to({_off:false},0).to({x:520.6,y:204.4},5).to({rotation:6,x:441,y:204},98).to({_off:true},1).wait(67));

	// 脚21
	this.instance_64 = new lib.s13143();
	this.instance_64.setTransform(1388.4,384.2,1,1,5,0,0,185,44);
	this.instance_64._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_64).wait(92).to({_off:false},0).to({regY:43.9,x:587.6,y:362.5},5).to({regX:185.1,regY:44,rotation:-9,x:505.7,y:352.5},98).to({_off:true},1).wait(67));

	// 女生发2
	this.instance_65 = new lib.s13114();
	this.instance_65.setTransform(1535.9,346.7,1,1,0,0,0,63,81);
	this.instance_65._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_65).wait(92).to({_off:false},0).to({x:735.1,y:325},5).to({x:653.1,y:315},98).to({_off:true},1).wait(67));

	// 自行车2颤
	this.instance_66 = new lib.s13151();
	this.instance_66.setTransform(1071.3,505.2,1,1,0,0,0,141,139.5);
	this.instance_66._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_66).wait(92).to({_off:false},0).to({x:271.6,y:483.5},5).to({x:189.6,y:473.5},98).to({_off:true},1).wait(67));

	// 自行车21颤
	this.instance_67 = new lib.s13153();
	this.instance_67.setTransform(1439.3,621.2,1,1,0,0,0,135,112.5);
	this.instance_67._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_67).wait(92).to({_off:false},0).to({x:637.1,y:597.5},5).to({x:560.6,y:589.5},98).to({_off:true},1).wait(67));

	// 自行车23
	this.instance_68 = new lib.s13155();
	this.instance_68.setTransform(1122.4,477.1,1,1,0,0,0,54,58.5);
	this.instance_68._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_68).wait(92).to({_off:false},0).to({x:321.6,y:455.5},5).to({x:239.6,y:445.5},98).to({_off:true},1).wait(67));

	// 自行车22
	this.instance_69 = new lib.s13154();
	this.instance_69.setTransform(1278.9,585.2,1,1,0,0,0,48,40.5);
	this.instance_69._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_69).wait(92).to({_off:false},0).to({x:478.1,y:563.5},5).to({x:396.1,y:553.5},98).to({_off:true},1).wait(67));

	// 自行车25
	this.instance_70 = new lib.s13157();
	this.instance_70.setTransform(1080.3,518.2,1,1,0,0,0,126,130.5);
	this.instance_70._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_70).wait(92).to({_off:false},0).to({x:279.6,y:496.5},5).to({rotation:-40,x:197.6,y:486.5},98).to({_off:true},1).wait(67));

	// 自行车21
	this.instance_71 = new lib.s13152();
	this.instance_71.setTransform(1313.4,462.2,1,1,0,0,0,244.5,181.5);
	this.instance_71._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_71).wait(92).to({_off:false},0).to({x:512.6,y:440.5},5).to({x:430.6,y:430.5},98).to({_off:true},1).wait(67));

	// 自行车24
	this.instance_72 = new lib.s13156();
	this.instance_72.setTransform(1436.4,602.2,1,1,0,0,0,121.5,127.5);
	this.instance_72._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_72).wait(92).to({_off:false},0).to({x:635.6,y:580.5},5).to({regX:121.6,regY:127.4,rotation:-40,x:553.6,y:570.5},98).to({_off:true},1).wait(67));

	// 脚22
	this.instance_73 = new lib.s13144();
	this.instance_73.setTransform(1349.9,348.2,1,1,-10,0,0,125.5,37.5);
	this.instance_73._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_73).wait(92).to({_off:false},0).to({x:549.1,y:326.5},5).to({rotation:0,x:467.1,y:316.5},98).to({_off:true},1).wait(67));

	// 阴影21
	this.instance_74 = new lib.s13164();
	this.instance_74.setTransform(1228.8,682.8,1,1,0,0,0,265.5,73.5);
	this.instance_74._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_74).wait(92).to({_off:false},0).to({x:428.8,y:657.2},5).to({x:356.8,y:646},98).to({_off:true},1).wait(67));

	// 背景21
	this.instance_75 = new lib.s13136();
	this.instance_75.setTransform(1141.2,356,1,1,0,0,0,375,356);
	this.instance_75._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_75).wait(92).to({_off:false},0).to({x:375},5).wait(98).to({_off:true},1).wait(67));

	// 气12 复制
	this.instance_76 = new lib.s13128();
	this.instance_76.setTransform(300.7,977.7,0.52,0.52,0,0,0,214.1,85);
	this.instance_76.alpha = 0;
	this.instance_76._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_76).wait(114).to({_off:false},0).to({scaleX:0.61,scaleY:0.61,x:291.5,alpha:1},4).to({regX:214,scaleX:0.76,scaleY:0.76,x:275.1},8).to({regX:214.1,scaleX:1,scaleY:1,x:249.7,alpha:0},9).to({_off:true},11).wait(117));

	// 气12
	this.instance_77 = new lib.s13128();
	this.instance_77.setTransform(300.7,977.7,0.52,0.52,0,0,0,214.1,85);
	this.instance_77.alpha = 0;
	this.instance_77._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_77).wait(19).to({_off:false},0).to({scaleX:0.61,scaleY:0.61,x:291.5,alpha:1},4).to({regX:214,scaleX:0.76,scaleY:0.76,x:275.1},8).to({regX:214.1,scaleX:1,scaleY:1,x:249.7,alpha:0},9).to({_off:true},11).wait(212));

	// 气11
	this.instance_78 = new lib.s13127();
	this.instance_78.setTransform(423.2,987.7,0.5,0.5,0,0,0,61.5,91);
	this.instance_78.alpha = 0;
	this.instance_78._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_78).wait(67).to({_off:false},0).to({scaleX:0.6,scaleY:0.6,x:441,y:1007,alpha:1},6).to({scaleX:0.88,scaleY:0.88,x:491.4,y:1061.6},17).to({scaleX:1,scaleY:1,x:512.2,y:1084,alpha:0},7).to({_off:true},1).wait(165));

	// 汗15
	this.instance_79 = new lib.s13134();
	this.instance_79.setTransform(298.1,966.8,1,1,0,0,0,21,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_79).to({x:305.6,y:982.3},25).to({x:313.2,y:983.7},25).to({x:315.6,y:992.4},23).to({x:325.1,y:994.8},24).to({x:334.1,y:1010.8},30).to({x:350.1,y:1022.8},26).to({x:351.1,y:1031.8},22).to({_off:true},1).wait(87));

	// 汗14
	this.instance_80 = new lib.s13133();
	this.instance_80.setTransform(282.7,885.2,1,1,0,0,0,19.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_80).to({regX:19.6,rotation:-12,x:285.7,y:944.7},175).to({_off:true},10).wait(78));

	// 汗13
	this.instance_81 = new lib.s13132();
	this.instance_81.setTransform(522.2,848.2,1,1,0,0,0,7,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_81).to({rotation:8,x:527.6,y:912.3},175).to({_off:true},10).wait(78));

	// 汗12
	this.instance_82 = new lib.s13131();
	this.instance_82.setTransform(342.3,842.5,1,1,0,0,0,9.2,5.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_82).to({rotation:-9,x:383.3,y:872.7},175).to({_off:true},10).wait(78));

	// 汗11
	this.instance_83 = new lib.s13130();
	this.instance_83.setTransform(488.1,846.2,1,1,0,0,0,15.5,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_83).to({regY:25.4,rotation:6,x:504.1,y:899.8},175).to({_off:true},10).wait(78));

	// 嘴1
	this.instance_84 = new lib.s13111();
	this.instance_84.setTransform(382.1,953.3,1,1,0,0,0,67,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_84).to({scaleX:0.9,scaleY:0.9,y:959.3},25).to({scaleX:1,scaleY:1,y:953.3},25).to({scaleX:0.9,scaleY:0.9,y:959.3},23).to({scaleX:1,scaleY:1,y:953.3},24).to({scaleX:0.9,scaleY:0.9,y:959.3},30).to({scaleX:1,scaleY:1,y:953.3},26).to({scaleX:0.9,scaleY:0.9,y:959.3},22).to({_off:true},10).wait(78));

	// 人1
	this.instance_85 = new lib.s13101();
	this.instance_85.setTransform(562.2,1094.2,1,1,0,0,0,489.1,579.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_85).to({regX:489,y:1101.1},25).to({regX:489.1,y:1094.2},25).to({regX:489,y:1101.1},23).to({regX:489.1,y:1094.2},24).to({regX:489,y:1101.1},30).to({regX:489.1,y:1094.2},26).to({regX:489,y:1101.1},22).to({_off:true},10).wait(78));

	// 脚1
	this.instance_86 = new lib.s13141();
	this.instance_86.setTransform(469.1,-13.9,1,1,0,0,0,298.5,67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_86).to({rotation:-2,y:-5.9},97).to({_off:true},1).wait(165));

	// 脚颤1
	this.instance_87 = new lib.s13145();
	this.instance_87.setTransform(343.1,219.1,1,1,0,0,0,178.5,213);

	this.timeline.addTween(cjs.Tween.get(this.instance_87).wait(1).to({y:218.1},0).wait(1).to({x:344.1,y:220.1},0).wait(1).to({y:218.1},0).wait(1).to({x:346.1,y:220.1},0).wait(1).to({y:219.1},0).wait(1).to({x:345.1},0).wait(1).to({y:220.1},0).wait(1).to({y:221.1},0).wait(2).to({x:343.1},0).wait(1).to({x:344.1,y:222.1},0).wait(2).to({y:221.1},0).wait(1).to({x:345.1,y:222.1},0).wait(1).to({y:223.1},0).wait(1).to({x:346.1},0).wait(2).to({x:347.1},0).wait(1).to({x:348.1,y:224.1},0).wait(1).to({x:347.1,y:225.1},0).wait(1).to({y:224.1},0).wait(1).to({x:346.1},0).wait(1).to({y:225.1},0).wait(1).to({x:347.1,y:224.1},0).wait(1).to({x:345.1},0).wait(1).to({x:346.1,y:223.1},0).wait(2).to({x:348.1,y:225.1},0).wait(1).to({x:346.1,y:223.1},0).wait(1).to({x:348.1,y:225.1},0).wait(1).to({x:346.1,y:223.1},0).wait(1).to({x:348.1,y:225.1},0).wait(1).to({x:346.1,y:223.1},0).wait(1).to({x:348.1,y:225.1},0).wait(1).to({x:344.1,y:222.1},0).wait(1).to({y:221.1},0).wait(1).to({x:345.1,y:222.1},0).wait(1).to({y:223.1},0).wait(1).to({x:346.1},0).wait(2).to({x:347.1},0).wait(1).to({x:348.1,y:224.1},0).wait(1).to({x:347.1,y:225.1},0).wait(1).to({y:224.1},0).wait(1).to({x:346.1},0).wait(1).to({y:225.1},0).wait(1).to({x:347.1,y:224.1},0).wait(1).to({x:345.1},0).wait(1).to({x:346.1,y:223.1},0).wait(2).to({x:348.1,y:225.1},0).wait(1).to({x:346.1},0).wait(8).to({x:348.1,y:227.1},0).wait(1).to({x:349.1},0).wait(1).to({x:348.1,y:228.1},0).wait(1).to({x:349.1,y:229.1},0).wait(1).to({x:350.1,y:228.1},0).wait(1).to({x:349.1},0).wait(1).to({x:350.1,y:229.1},0).wait(1).to({y:230.1},0).wait(1).to({x:351.1,y:229.1},0).wait(1).to({y:231.1},0).wait(1).to({x:348.1},0).wait(1).to({x:350.1,y:232.1},0).wait(3).to({y:233.1},0).wait(1).to({x:349.1},0).wait(2).to({y:232.1},0).wait(1).to({x:352.1},0).wait(1).to({x:348.1,y:227.1},0).wait(1).to({x:349.1},0).wait(1).to({x:348.1,y:228.1},0).wait(1).to({x:349.1,y:229.1},0).wait(1).to({x:350.1,y:228.1},0).wait(1).to({x:349.1},0).wait(1).to({x:350.1,y:229.1},0).wait(1).to({y:230.1},0).wait(1).to({x:351.1,y:229.1},0).wait(1).to({y:231.1},0).wait(1).to({x:348.1},0).wait(1).to({x:350.1,y:232.1},0).wait(3).to({y:233.1},0).wait(1).to({x:349.1},0).wait(2).to({y:232.1},0).wait(1).to({x:352.1},0).to({_off:true},1).wait(165));

	// 自行车1
	this.instance_88 = new lib.s13215();
	this.instance_88.setTransform(-59.9,-29.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_88).wait(97).to({_off:true},1).wait(165));

	// 脚12
	this.instance_89 = new lib.s13142();
	this.instance_89.setTransform(428.6,-26.9,1,1,0,0,0,129,92.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_89).to({x:425.2,y:-40.9},97).to({_off:true},1).wait(165));

	// 背景1
	this.instance_90 = new lib.s13210();

	this.timeline.addTween(cjs.Tween.get(this.instance_90).wait(184).to({_off:true},1).wait(78));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.9,-119.4,863.1,1394.6);


// stage content:



(lib.qj_s13 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s13();
	this.instance.setTransform(371.6,577.8,1,1,0,0,0,371.6,577.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(315.1,490.6,863.1,1394.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;