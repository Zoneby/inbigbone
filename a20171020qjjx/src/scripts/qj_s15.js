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
		{src:"images/cv/s15147.png", id:"s15147"},
		{src:"images/cv/s15148.png", id:"s15148"},
		{src:"images/cv/s15149.png", id:"s15149"},
		{src:"images/cv/s15150.jpg", id:"s15150"},
		{src:"images/cv/s15201.png", id:"s15201"},
		{src:"images/cv/s15202.png", id:"s15202"},
		{src:"images/cv/s15203.png", id:"s15203"},
		{src:"images/cv/s15204.png", id:"s15204"},
		{src:"images/cv/s15205.png", id:"s15205"},
		{src:"images/cv/s15206.png", id:"s15206"},
		{src:"images/cv/s15207.png", id:"s15207"},
		{src:"images/cv/s15208.png", id:"s15208"},
		{src:"images/cv/s15209.png", id:"s15209"},
		{src:"images/cv/s15301.png", id:"s15301"},
		{src:"images/cv/s15302.png", id:"s15302"},
		{src:"images/cv/s15303.png", id:"s15303"},
		{src:"images/cv/s15304.png", id:"s15304"},
		{src:"images/cv/s15305.png", id:"s15305"},
		{src:"images/cv/s15306.png", id:"s15306"},
		{src:"images/cv/s15307.png", id:"s15307"},
		{src:"images/cv/s15308.png", id:"s15308"},
		{src:"images/cv/s15401.png", id:"s15401"},
		{src:"images/cv/s15402.png", id:"s15402"},
		{src:"images/cv/s15403.png", id:"s15403"},
		{src:"images/cv/s15405.png", id:"s15405"},
		{src:"images/cv/s15406.png", id:"s15406"},
		{src:"images/cv/s15407.png", id:"s15407"},
		{src:"images/cv/s15408.png", id:"s15408"},
		{src:"images/cv/s15409.png", id:"s15409"},
		{src:"images/cv/s15410.png", id:"s15410"},
		{src:"images/cv/s15411.png", id:"s15411"},
		{src:"images/cv/s15501.png", id:"s15501"},
		{src:"images/cv/s15502.png", id:"s15502"},
		{src:"images/cv/s15503.png", id:"s15503"},
		{src:"images/cv/s15504.png", id:"s15504"},
		{src:"images/cv/s15505.png", id:"s15505"},
		{src:"images/cv/s15506.png", id:"s15506"},
		{src:"images/cv/s15507.png", id:"s15507"},
		{src:"images/cv/s15508.png", id:"s15508"},
		{src:"images/cv/s15509.png", id:"s15509"},
		{src:"images/cv/s15510.png", id:"s15510"},
		{src:"images/cv/s15511.png", id:"s15511"},
		{src:"images/cv/s15512.png", id:"s15512"},
		{src:"images/cv/s15513.png", id:"s15513"},
		{src:"images/cv/s15514.png", id:"s15514"},
		{src:"images/cv/s15515.png", id:"s15515"},
		{src:"images/cv/s15516.png", id:"s15516"},
		{src:"images/cv/s15517.png", id:"s15517"},
		{src:"images/cv/s15518.png", id:"s15518"},
		{src:"images/cv/s15519.png", id:"s15519"},
		{src:"images/cv/s15521.png", id:"s15521"},
		{src:"images/cv/s15522.png", id:"s15522"},
		{src:"images/cv/s15604.png", id:"s15604"},
		{src:"images/cv/s15605.png", id:"s15605"},
		{src:"images/cv/s15606.png", id:"s15606"},
		{src:"images/cv/s15608.png", id:"s15608"},
		{src:"images/cv/s15609.png", id:"s15609"},
		{src:"images/cv/s15610.png", id:"s15610"},
		{src:"images/cv/s15611.png", id:"s15611"},
		{src:"images/cv/s15612.png", id:"s15612"},
		{src:"images/cv/s15618.png", id:"s15618"},
		{src:"images/cv/s15619.png", id:"s15619"},
		{src:"images/cv/s15620.png", id:"s15620"},
		{src:"images/cv/s15621.png", id:"s15621"},
		{src:"images/cv/s15622.jpg", id:"s15622"}
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



(lib.s15147 = function() {
	this.initialize(img.s15147);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,23);


(lib.s15148 = function() {
	this.initialize(img.s15148);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,11,43);


(lib.s15149 = function() {
	this.initialize(img.s15149);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,829,1090);


(lib.s15150 = function() {
	this.initialize(img.s15150);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s15201 = function() {
	this.initialize(img.s15201);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,303,86);


(lib.s15202 = function() {
	this.initialize(img.s15202);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,414,1035);


(lib.s15203 = function() {
	this.initialize(img.s15203);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,218,761);


(lib.s15204 = function() {
	this.initialize(img.s15204);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,292,1109);


(lib.s15205 = function() {
	this.initialize(img.s15205);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,643,616);


(lib.s15206 = function() {
	this.initialize(img.s15206);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,641,619);


(lib.s15207 = function() {
	this.initialize(img.s15207);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,641,617);


(lib.s15208 = function() {
	this.initialize(img.s15208);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,663,680);


(lib.s15209 = function() {
	this.initialize(img.s15209);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,805,1311);


(lib.s15301 = function() {
	this.initialize(img.s15301);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,355,550);


(lib.s15302 = function() {
	this.initialize(img.s15302);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,259,141);


(lib.s15303 = function() {
	this.initialize(img.s15303);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,119);


(lib.s15304 = function() {
	this.initialize(img.s15304);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,98);


(lib.s15305 = function() {
	this.initialize(img.s15305);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,318,335);


(lib.s15306 = function() {
	this.initialize(img.s15306);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,682,887);


(lib.s15307 = function() {
	this.initialize(img.s15307);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,511,13);


(lib.s15308 = function() {
	this.initialize(img.s15308);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,778,1267);


(lib.s15401 = function() {
	this.initialize(img.s15401);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,512,229);


(lib.s15402 = function() {
	this.initialize(img.s15402);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,1062);


(lib.s15403 = function() {
	this.initialize(img.s15403);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,806,1273);


(lib.s15405 = function() {
	this.initialize(img.s15405);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,751,1220);


(lib.s15406 = function() {
	this.initialize(img.s15406);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,751,1220);


(lib.s15407 = function() {
	this.initialize(img.s15407);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s15408 = function() {
	this.initialize(img.s15408);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,751,1221);


(lib.s15409 = function() {
	this.initialize(img.s15409);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,751,1221);


(lib.s15410 = function() {
	this.initialize(img.s15410);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,751,1221);


(lib.s15411 = function() {
	this.initialize(img.s15411);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,223);


(lib.s15501 = function() {
	this.initialize(img.s15501);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,554,412);


(lib.s15502 = function() {
	this.initialize(img.s15502);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,356,1070);


(lib.s15503 = function() {
	this.initialize(img.s15503);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,609,950);


(lib.s15504 = function() {
	this.initialize(img.s15504);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,623,279);


(lib.s15505 = function() {
	this.initialize(img.s15505);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,481,616);


(lib.s15506 = function() {
	this.initialize(img.s15506);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,939,551);


(lib.s15507 = function() {
	this.initialize(img.s15507);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,438,1126);


(lib.s15508 = function() {
	this.initialize(img.s15508);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,535,929);


(lib.s15509 = function() {
	this.initialize(img.s15509);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,385,537);


(lib.s15510 = function() {
	this.initialize(img.s15510);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,939,551);


(lib.s15511 = function() {
	this.initialize(img.s15511);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,939,551);


(lib.s15512 = function() {
	this.initialize(img.s15512);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,939,551);


(lib.s15513 = function() {
	this.initialize(img.s15513);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,939,551);


(lib.s15514 = function() {
	this.initialize(img.s15514);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,438,1126);


(lib.s15515 = function() {
	this.initialize(img.s15515);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,438,1126);


(lib.s15516 = function() {
	this.initialize(img.s15516);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,438,1126);


(lib.s15517 = function() {
	this.initialize(img.s15517);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,438,1126);


(lib.s15518 = function() {
	this.initialize(img.s15518);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,535,929);


(lib.s15519 = function() {
	this.initialize(img.s15519);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,535,929);


(lib.s15521 = function() {
	this.initialize(img.s15521);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,535,929);


(lib.s15522 = function() {
	this.initialize(img.s15522);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,535,929);


(lib.s15604 = function() {
	this.initialize(img.s15604);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,192);


(lib.s15605 = function() {
	this.initialize(img.s15605);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,208);


(lib.s15606 = function() {
	this.initialize(img.s15606);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,240);


(lib.s15608 = function() {
	this.initialize(img.s15608);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,914,447);


(lib.s15609 = function() {
	this.initialize(img.s15609);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,706,165);


(lib.s15610 = function() {
	this.initialize(img.s15610);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,225,210);


(lib.s15611 = function() {
	this.initialize(img.s15611);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,251,244);


(lib.s15612 = function() {
	this.initialize(img.s15612);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,225,214);


(lib.s15618 = function() {
	this.initialize(img.s15618);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,70);


(lib.s15619 = function() {
	this.initialize(img.s15619);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,70);


(lib.s15620 = function() {
	this.initialize(img.s15620);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,44);


(lib.s15621 = function() {
	this.initialize(img.s15621);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,205);


(lib.s15622 = function() {
	this.initialize(img.s15622);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1163,1884);


(lib.s15158 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15620();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,44);


(lib.s15157 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15622();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1163,1884);


(lib.s15156 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15618();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34,70);


(lib.s15152 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15619();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28,56);


(lib.s15151 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15621();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,205);


(lib.s15143 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15411();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220,223);


(lib.s15142 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15509();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,385,537);


(lib.s15141 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15508();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,535,929);


(lib.s15140 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15507();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,438,1126);


(lib.s15139 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15506();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,939,551);


(lib.s15138 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15308();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,778,1267);


(lib.s15136 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("Eg7shh0MB3ZAAAMAAADDpMh3ZAAAg");
	this.shape.setTransform(382.1,626.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Eg7sBh1MAAAjDpMB3YAAAMAAADDpg");
	this.shape_1.setTransform(382.1,626.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,766.2,1254.3);


(lib.s15135 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15403();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,806,1273);


(lib.s15134 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15209();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,805,1311);


(lib.s15133 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15150();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s15132 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15307();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,511,13);


(lib.s15131 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15402();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,232,1062);


(lib.s15130 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15306();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,682,887);


(lib.s15129 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15208();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,663,680);


(lib.s15128 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15149();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,829,1090);


(lib.s15127 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15305();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,318,335);


(lib.s15126 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15304();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137,98);


(lib.s15125 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15303();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,138,119);


(lib.s15124 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15148();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11,43);


(lib.s15123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15147();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10,23);


(lib.s15122 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15401();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,512,229);


(lib.s15121 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15609();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,706,165);


(lib.s15120 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15608();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,914,447);


(lib.s15119 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15505();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,481,616);


(lib.s15118 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15504();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,623,279);


(lib.s15115 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15302();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,259,141);


(lib.s15114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15503();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,609,950);


(lib.s15113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15502();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,356,1070);


(lib.s15112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15501();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,554,412);


(lib.s15111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15301();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,355,550);


(lib.s15110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15204();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,292,1109);


(lib.s15109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15203();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,218,761);


(lib.s15108 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15202();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,414,1035);


(lib.s15107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15201();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,303,86);


(lib.s15144 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 闪光41
	this.instance = new lib.s15143();
	this.instance.setTransform(632.2,768.2,0.002,0.002,0,0,0,110,111.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:177},7).to({regY:111.4,scaleX:1,scaleY:1,rotation:339,alpha:0},16).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(631.9,767.9,0.5,0.5);


(lib.s15 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_281 = function() {
		this.stop();
		try{app.showBtns()}catch(e){}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(281).call(this.frame_281).wait(1));

	// 文案2
	this.instance = new lib.s15121();
	this.instance.setTransform(437.1,456.5,0.8,0.8,0,0,0,456.9,155.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(243).to({_off:false},0).to({alpha:1},6).wait(33));

	// 文案
	this.instance_1 = new lib.s15120();
	this.instance_1.setTransform(383.7,165.7,0.79,0.79,0,0,0,457.1,223.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(243).to({_off:false},0).to({alpha:1},6).wait(33));

	// 晕6
	this.instance_2 = new lib.s15610();
	this.instance_2.setTransform(321.6,687.2);
	this.instance_2._off = true;

	this.instance_3 = new lib.s15611();
	this.instance_3.setTransform(298.6,678.2);
	this.instance_3._off = true;

	this.instance_4 = new lib.s15612();
	this.instance_4.setTransform(307.6,683.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(239).to({_off:false},0).wait(1).to({_off:true},1).wait(4).to({_off:false},0).wait(1).to({_off:true},1).wait(4).to({_off:false},0).wait(1).to({_off:true},1).wait(4).to({_off:false},0).wait(1).to({_off:true},1).wait(4).to({_off:false},0).wait(1).to({_off:true},1).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(241).to({_off:false},0).wait(1).to({_off:true},1).wait(4).to({_off:false},0).wait(1).to({_off:true},1).wait(4).to({_off:false},0).wait(1).to({_off:true},1).wait(4).to({_off:false},0).wait(1).to({_off:true},1).wait(4).to({_off:false},0).wait(1).to({_off:true},1).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(243).to({_off:false},0).wait(1).to({_off:true},1).wait(4).to({_off:false},0).wait(1).to({_off:true},1).wait(4).to({_off:false},0).wait(1).to({_off:true},1).wait(4).to({_off:false},0).wait(1).to({_off:true},1).wait(4).to({_off:false},0).wait(15));

	// 喷血6
	this.instance_5 = new lib.s15604();
	this.instance_5.setTransform(77.6,644.2);
	this.instance_5._off = true;

	this.instance_6 = new lib.s15605();
	this.instance_6.setTransform(71.1,632.2);
	this.instance_6._off = true;

	this.instance_7 = new lib.s15606();
	this.instance_7.setTransform(63.6,596.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(239).to({_off:false},0).wait(1).to({_off:true},1).wait(4).to({_off:false},0).wait(1).to({_off:true},1).wait(4).to({_off:false},0).wait(1).to({_off:true},1).wait(4).to({_off:false},0).wait(1).to({_off:true},1).wait(4).to({_off:false},0).wait(1).to({_off:true},1).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(241).to({_off:false},0).wait(1).to({_off:true},1).wait(4).to({_off:false},0).wait(1).to({_off:true},1).wait(4).to({_off:false},0).wait(1).to({_off:true},1).wait(4).to({_off:false},0).wait(1).to({_off:true},1).wait(4).to({_off:false},0).wait(1).to({_off:true},1).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(243).to({_off:false},0).wait(1).to({_off:true},1).wait(4).to({_off:false},0).wait(1).to({_off:true},1).wait(4).to({_off:false},0).wait(1).to({_off:true},1).wait(4).to({_off:false},0).wait(1).to({_off:true},1).wait(4).to({_off:false},0).wait(15));

	// 身体
	this.instance_8 = new lib.s15151();
	this.instance_8.setTransform(368.4,579.6,0.8,0.8,0,0,0,39.5,102.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(231).to({_off:false},0).to({alpha:1},8).wait(43));

	// 左手
	this.instance_9 = new lib.s15156();
	this.instance_9.setTransform(352.5,517.8,0.75,0.75,0,0,0,25.2,63.4);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(231).to({_off:false},0).to({alpha:1},8).to({rotation:15,x:352.4,y:517.9},10).to({rotation:0,x:352.5,y:517.8},10).to({rotation:15,x:352.4,y:517.9},11).to({rotation:0,x:352.5,y:517.8},11).wait(1));

	// 右手
	this.instance_10 = new lib.s15152();
	this.instance_10.setTransform(383,516,1,1,0,0,0,14,46);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(231).to({_off:false},0).to({alpha:1},8).to({regY:46.1,rotation:-15,x:383.1,y:516.2},10).to({regY:46,rotation:0,x:383,y:516},10).to({regY:46.1,rotation:-15,x:383.1,y:516.2},11).to({regY:46,rotation:0,x:383,y:516},11).wait(1));

	// 脚
	this.instance_11 = new lib.s15158();
	this.instance_11.setTransform(389.2,553.3,0.8,0.8,0,0,0,12.5,34.6);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(231).to({_off:false},0).to({alpha:1},8).to({rotation:-15},10).to({rotation:0},10).to({rotation:-15},11).to({rotation:0},11).wait(1));

	// 背景
	this.instance_12 = new lib.s15157();
	this.instance_12.setTransform(382.5,619,0.66,0.66,0,0,0,581.3,942);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(221).to({_off:false},0).to({alpha:1},18).wait(43));

	// 拳头51
	this.instance_13 = new lib.s15118();
	this.instance_13.setTransform(1656.5,-294,1,1,0,0,0,311.5,139.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(178).to({_off:false},0).to({x:690.2,y:97.7},3).to({x:554.2,y:147.7},58).to({_off:true},1).wait(42));

	// 人51
	this.instance_14 = new lib.s15112();
	this.instance_14.setTransform(1354.4,-294.1,1,1,0,0,0,277,206);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(178).to({_off:false},0).to({x:401.9,y:112},3).to({x:186.2,y:196},58).to({_off:true},1).wait(42));

	// 速度线51
	this.instance_15 = new lib.s15510();
	this.instance_15.setTransform(-115.4,0);
	this.instance_15._off = true;

	this.instance_16 = new lib.s15511();
	this.instance_16.setTransform(-115.4,-4);
	this.instance_16._off = true;

	this.instance_17 = new lib.s15512();
	this.instance_17.setTransform(-111.4,2);
	this.instance_17._off = true;

	this.instance_18 = new lib.s15513();
	this.instance_18.setTransform(-111.3,-2);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(181).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(44));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(182).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(183).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(184).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(45));

	// 背景51
	this.instance_19 = new lib.s15139();
	this.instance_19.setTransform(1233.7,-102.6,1,1,0,0,0,469.5,275.5);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(178).to({_off:false},0).to({x:348.1,y:275.5},3).wait(58).to({_off:true},1).wait(42));

	// 人52
	this.instance_20 = new lib.s15113();
	this.instance_20.setTransform(639.2,2027.3,1,1,0,0,0,178,535);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(184).to({_off:false},0).to({y:961.3},3).to({y:740.2},52).to({_off:true},1).wait(42));

	// 拳头52
	this.instance_21 = new lib.s15119();
	this.instance_21.setTransform(554.9,2274.6,1,1,0,0,0,240.5,308);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(184).to({_off:false},0).to({x:552.4,y:1192.3},3).to({x:530.4,y:1058.3},52).to({_off:true},1).wait(42));

	// 速度线52
	this.instance_22 = new lib.s15514();
	this.instance_22.setTransform(379.2,169.1);
	this.instance_22._off = true;

	this.instance_23 = new lib.s15515();
	this.instance_23.setTransform(383.2,171.2);
	this.instance_23._off = true;

	this.instance_24 = new lib.s15516();
	this.instance_24.setTransform(381.2,173.2);
	this.instance_24._off = true;

	this.instance_25 = new lib.s15517();
	this.instance_25.setTransform(383.2,171.2);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(187).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(46));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(188).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(189).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(190).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(43));

	// 背景52
	this.instance_26 = new lib.s15140();
	this.instance_26.setTransform(598.2,1784,1,1,0,0,0,219,563);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(184).to({_off:false},0).to({y:732.1},3).wait(52).to({_off:true},1).wait(42));

	// 腿53
	this.instance_27 = new lib.s15142();
	this.instance_27.setTransform(398.1,1954.5,1,1,0,0,0,192.5,268.5);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(191).to({_off:false},0).to({x:330.1,y:1040.3},3).to({x:328.1,y:980.3},45).to({_off:true},1).wait(42));

	// 人53
	this.instance_28 = new lib.s15114();
	this.instance_28.setTransform(205.6,1848.3,1,1,0,0,0,253.5,457.5);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(191).to({_off:false},0).to({x:107.7,y:885.2},3).to({x:41.7,y:841.2},45).to({_off:true},1).wait(42));

	// 速度线53
	this.instance_29 = new lib.s15518();
	this.instance_29.setTransform(-109.8,357.7);
	this.instance_29._off = true;

	this.instance_30 = new lib.s15519();
	this.instance_30.setTransform(-111.4,361.7);
	this.instance_30._off = true;

	this.instance_31 = new lib.s15521();
	this.instance_31.setTransform(-113.4,363.7);
	this.instance_31._off = true;

	this.instance_32 = new lib.s15522();
	this.instance_32.setTransform(-113.4,363.7);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(194).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(195).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(196).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(197).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(44));

	// 背景53
	this.instance_33 = new lib.s15141();
	this.instance_33.setTransform(169.7,1817,1,1,0,0,0,267.5,464.5);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(191).to({_off:false},0).to({x:157.7,y:822.2},3).wait(45).to({_off:true},1).wait(42));

	// 背景5
	this.instance_34 = new lib.s15136();
	this.instance_34.setTransform(382.1,626.1,1,1,0,0,0,382.1,626.1);
	this.instance_34.alpha = 0;
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(172).to({_off:false},0).to({alpha:1},10).to({_off:true},5).wait(95));

	// 闪光42    复制 4
	this.instance_35 = new lib.s15144();
	this.instance_35.setTransform(314.1,792.2,1,1,0,0,0,632.1,768.1);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(159).to({_off:false},0).to({_off:true},28).wait(95));

	// 闪光42   复制 3
	this.instance_36 = new lib.s15144();
	this.instance_36.setTransform(266.1,198,1,1,0,0,0,632.1,768.1);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(157).to({_off:false},0).to({_off:true},30).wait(95));

	// 闪光42  复制 2
	this.instance_37 = new lib.s15144();
	this.instance_37.setTransform(266.1,512.1,1,1,0,0,0,632.1,768.1);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(149).to({_off:false},0).to({_off:true},38).wait(95));

	// 闪光42 复制
	this.instance_38 = new lib.s15144();
	this.instance_38.setTransform(594.1,420.1,1,1,0,0,0,632.1,768.1);
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(154).to({_off:false},0).to({_off:true},33).wait(95));

	// 闪光42
	this.instance_39 = new lib.s15144();
	this.instance_39.setTransform(256.1,770.2,1,1,0,0,0,632.1,768.1);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(151).to({_off:false},0).to({_off:true},36).wait(95));

	// 闪光41 复制
	this.instance_40 = new lib.s15143();
	this.instance_40.setTransform(221.4,556.9,0.002,0.002,-174.9,0,0,107.1,112.7);
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(146).to({_off:false},0).to({regX:110.1,regY:111.5,scaleX:0.8,scaleY:0.8,rotation:-317.9,x:221.5},7).to({regX:110,scaleX:1,scaleY:1,rotation:-495,x:221.4,y:557,alpha:0},16).to({_off:true},18).wait(95));

	// 闪光41
	this.instance_41 = new lib.s15143();
	this.instance_41.setTransform(632.2,768.2,0.002,0.002,0,0,0,110,111.5);
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(141).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:177},7).to({regY:111.4,scaleX:1,scaleY:1,rotation:339,alpha:0},16).to({_off:true},18).wait(100));

	// 暴走4
	this.instance_42 = new lib.s15122();
	this.instance_42.setTransform(432.1,1030.3,2.26,2.26,0,0,0,256,114.5);
	this.instance_42.alpha = 0;
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(141).to({_off:false},0).to({scaleX:1,scaleY:1,x:376.9,y:980.2,alpha:1},3).to({x:370.9},1).to({x:380.9},1).to({x:366.9},1).to({x:382.9},1).to({x:376.9},1).to({x:370.9},1).to({x:380.9},1).to({x:366.9},1).to({x:382.9},1).to({x:376.9},1).to({x:370.9},1).to({x:380.9},1).to({x:366.9},1).to({x:382.9},1).to({x:376.9},1).to({x:370.9},1).to({x:380.9},1).to({x:366.9},1).to({x:382.9},1).to({x:376.9},1).to({x:370.9},1).to({x:380.9},1).to({x:366.9},1).to({x:382.9},1).to({x:376.9},1).to({x:370.9},1).to({x:380.9},1).to({x:366.9},1).to({x:382.9},1).to({x:376.9},1).to({x:370.9},1).to({x:380.9},1).to({x:366.9},1).to({x:382.9},1).to({x:376.9},1).to({x:370.9},1).to({x:380.9},1).to({x:366.9},1).to({x:382.9},1).to({x:370.9},1).to({x:380.9},1).to({x:366.9},1).to({_off:true},1).wait(95));

	// 速度线4逐帧
	this.instance_43 = new lib.s15405();
	this.instance_43.setTransform(1,2);
	this.instance_43._off = true;

	this.instance_44 = new lib.s15406();
	this.instance_44._off = true;

	this.instance_45 = new lib.s15407();
	this.instance_45._off = true;

	this.instance_46 = new lib.s15408();
	this.instance_46._off = true;

	this.instance_47 = new lib.s15409();
	this.instance_47._off = true;

	this.instance_48 = new lib.s15410();
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(144).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(107));
	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(145).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(146).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(147).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(95));
	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(148).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(98));
	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(149).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(97));

	// 男主4
	this.instance_49 = new lib.s15131();
	this.instance_49.setTransform(376.2,638.2,1,1,0,0,0,116,531);
	this.instance_49.alpha = 0;
	this.instance_49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(133).to({_off:false},0).to({alpha:1},8).to({y:600.2},45).to({_off:true},1).wait(95));

	// 背景4
	this.instance_50 = new lib.s15135();
	this.instance_50.setTransform(403,636.5,1,1,0,0,0,403,636.5);
	this.instance_50.alpha = 0;
	this.instance_50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(133).to({_off:false},0).to({alpha:1},8).wait(45).to({_off:true},1).wait(95));

	// 叮3
	this.instance_51 = new lib.s15115();
	this.instance_51.setTransform(394.1,374.1,0.6,0.6,0,0,0,129.5,70.5);
	this.instance_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(105).to({_off:false},0).to({scaleX:1,scaleY:1,x:594.1},3).to({rotation:2},1).to({rotation:-1,x:594.2},1).to({rotation:2,x:594.1},1).to({regX:129.4,rotation:-2,x:594},1).to({regX:129.5,rotation:2,x:594.1},1).to({rotation:-3},1).to({regX:129.6,rotation:0,x:594.2},1).to({_off:true},30).wait(137));

	// 火机盖3
	this.instance_52 = new lib.s15126();
	this.instance_52.setTransform(-278.1,382.1,1,1,0,0,0,18.5,77);
	this.instance_52._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(96).to({_off:false},0).to({x:190.5,y:408.1},3).wait(3).to({rotation:-88,y:408.2},3).wait(39).to({_off:true},1).wait(137));

	// 火机3
	this.instance_53 = new lib.s15125();
	this.instance_53.setTransform(-216.1,388.6,1,1,0,0,0,69,59.5);
	this.instance_53._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(96).to({_off:false},0).to({x:253.6,y:413.1},3).wait(45).to({_off:true},1).wait(137));

	// 人31
	this.instance_54 = new lib.s15111();
	this.instance_54.setTransform(-194,314.1,1,1,0,0,0,177.5,275);
	this.instance_54._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(96).to({_off:false},0).to({x:279.5,y:336.1},3).wait(45).to({_off:true},1).wait(137));

	// 男主3
	this.instance_55 = new lib.s15130();
	this.instance_55.setTransform(534.2,867.5,1,1,0,0,0,341,443.5);
	this.instance_55.alpha = 0;
	this.instance_55._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(116).to({_off:false},0).to({alpha:1},4).wait(7).to({x:542.2},1).to({x:534.2,y:869.5},1).to({x:538.2},1).to({x:534.2},1).to({y:867.5},1).to({x:542.2},1).to({x:534.2,y:869.5},1).to({x:538.2},1).to({x:534.2},1).to({_off:true},13).wait(133));

	// 爆炸3
	this.instance_56 = new lib.s15127();
	this.instance_56.setTransform(380.2,816.2,0.002,0.001,0,0,0,159.1,167.2);
	this.instance_56._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(126).to({_off:false},0).to({regX:159,regY:167.5,scaleX:1,scaleY:1},1).to({_off:true},22).wait(133));

	// 线3
	this.instance_57 = new lib.s15132();
	this.instance_57.setTransform(-245,832.2,1,1,0,0,0,255.5,6.5);
	this.instance_57._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(124).to({_off:false},0).to({x:209.1},2).to({_off:true},23).wait(133));

	// 背景31
	this.instance_58 = new lib.s15138();
	this.instance_58.setTransform(389,633.5,1,1,0,0,0,389,633.5);
	this.instance_58.alpha = 0;
	this.instance_58._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(116).to({_off:false},0).to({alpha:1},4).wait(9).to({_off:true},20).wait(133));

	// 抖2
	this.instance_59 = new lib.s15205();
	this.instance_59.setTransform(174,679.1);
	this.instance_59._off = true;

	this.instance_60 = new lib.s15206();
	this.instance_60.setTransform(175.6,682.7);
	this.instance_60._off = true;

	this.instance_61 = new lib.s15207();
	this.instance_61.setTransform(175.6,677.7);
	this.instance_61._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(48).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(166));
	this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(49).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(165));
	this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(50).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).wait(1).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(164));

	// 男主2
	this.instance_62 = new lib.s15129();
	this.instance_62.setTransform(520.1,995.1,1,1,0,0,0,331.5,340);
	this.instance_62._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_62).wait(48).to({_off:false},0).to({regX:331.6,regY:339.9,scaleX:0.95,scaleY:0.95,x:527.5,y:1018.2},96).to({_off:true},1).wait(137));

	// 人22
	this.instance_63 = new lib.s15109();
	this.instance_63.setTransform(822.7,854.4,0.89,0.89,0,0,0,214.7,578.5);
	this.instance_63._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_63).wait(48).to({_off:false},0).to({scaleX:1,scaleY:1,x:812.7},96).to({_off:true},1).wait(137));

	// 人23
	this.instance_64 = new lib.s15110();
	this.instance_64.setTransform(-61.4,890.8,0.91,0.91,0,0,0,58,620.8);
	this.instance_64._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_64).wait(48).to({_off:false},0).to({regX:58.1,scaleX:1,scaleY:1,x:-19.4,y:848.8},96).to({_off:true},1).wait(137));

	// 人2手
	this.instance_65 = new lib.s15107();
	this.instance_65.setTransform(605.8,536.9,0.9,0.9,-12,0,0,275.6,22.9);
	this.instance_65._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_65).wait(48).to({_off:false},0).to({regY:23,scaleX:0.95,scaleY:0.95,rotation:0,x:604.6,y:536.1},12).to({regX:275.4,regY:23.1,scaleX:0.97,scaleY:0.97,rotation:46,x:617.3,y:525.1},36).wait(48).to({_off:true},1).wait(137));

	// 人21
	this.instance_66 = new lib.s15108();
	this.instance_66.setTransform(444.1,698.1,0.9,0.9,0,0,0,207,623.5);
	this.instance_66._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_66).wait(48).to({_off:false},0).to({scaleX:0.97,scaleY:0.97},48).to({scaleX:1,scaleY:1},48).to({_off:true},1).wait(137));

	// 背景2
	this.instance_67 = new lib.s15134();
	this.instance_67.setTransform(402.5,655.5,1,1,0,0,0,402.5,655.5);
	this.instance_67._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_67).wait(48).to({_off:false},0).wait(96).to({_off:true},1).wait(137));

	// 汗12
	this.instance_68 = new lib.s15124();
	this.instance_68.setTransform(402.2,497.1,0.42,0.42,9,0,0,5.5,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_68).to({regY:21.6,scaleX:0.78,scaleY:0.78,rotation:0,x:401.2,y:517.2},60).to({_off:true},1).wait(221));

	// 汗11
	this.instance_69 = new lib.s15123();
	this.instance_69.setTransform(499.2,360.8,0.58,0.58,-15,0,0,5,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_69).to({scaleX:1,scaleY:1,rotation:-10,x:534.1,y:338.2},60).to({_off:true},1).wait(221));

	// 男1
	this.instance_70 = new lib.s15128();
	this.instance_70.setTransform(454.2,752.2,1,1,0,0,0,414.5,545);

	this.timeline.addTween(cjs.Tween.get(this.instance_70).to({scaleX:1.15,scaleY:1.15,x:458.1,y:754.2},60).to({_off:true},1).wait(221));

	// 背景1
	this.instance_71 = new lib.s15133();
	this.instance_71.setTransform(375,610,1,1,0,0,0,375,610);

	this.timeline.addTween(cjs.Tween.get(this.instance_71).to({scaleX:1.15,scaleY:1.15},60).to({_off:true},1).wait(221));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,868.7,1297.2);


// stage content:



(lib.qj_s15 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15();
	this.instance.setTransform(434.3,648.6,1,1,0,0,0,434.3,648.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(375,610,868.7,1297.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;