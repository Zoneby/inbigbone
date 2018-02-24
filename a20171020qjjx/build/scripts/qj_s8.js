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
		{src:"images/cv/s8110s.png", id:"s8110s"},
		{src:"images/cv/s8111s.png", id:"s8111s"},
		{src:"images/cv/s8112s.png", id:"s8112s"},
		{src:"images/cv/s8113s.png", id:"s8113s"},
		{src:"images/cv/s8114s.png", id:"s8114s"},
		{src:"images/cv/s8115s.png", id:"s8115s"},
		{src:"images/cv/s8116s.png", id:"s8116s"},
		{src:"images/cv/s813s.png", id:"s813s"},
		{src:"images/cv/s814s.png", id:"s814s"},
		{src:"images/cv/s815s.png", id:"s815s"},
		{src:"images/cv/s816s.png", id:"s816s"},
		{src:"images/cv/s817s.png", id:"s817s"},
		{src:"images/cv/s818s.png", id:"s818s"},
		{src:"images/cv/s819s.png", id:"s819s"},
		{src:"images/cv/s821s.png", id:"s821s"},
		{src:"images/cv/s822s.png", id:"s822s"},
		{src:"images/cv/s823s.png", id:"s823s"},
		{src:"images/cv/s824s.png", id:"s824s"},
		{src:"images/cv/s825s.png", id:"s825s"},
		{src:"images/cv/s827s.png", id:"s827s"},
		{src:"images/cv/s8310s.png", id:"s8310s"},
		{src:"images/cv/s8311s.png", id:"s8311s"},
		{src:"images/cv/s8314s.png", id:"s8314s"},
		{src:"images/cv/s8315s.png", id:"s8315s"},
		{src:"images/cv/s8315s_1.png", id:"s8315s_1"},
		{src:"images/cv/s8316s.png", id:"s8316s"},
		{src:"images/cv/s8316s_1.png", id:"s8316s_1"},
		{src:"images/cv/s8317s.png", id:"s8317s"},
		{src:"images/cv/s831s.png", id:"s831s"},
		{src:"images/cv/s832s.png", id:"s832s"},
		{src:"images/cv/s833s.png", id:"s833s"},
		{src:"images/cv/s834s.png", id:"s834s"},
		{src:"images/cv/s835s.png", id:"s835s"},
		{src:"images/cv/s836s.png", id:"s836s"},
		{src:"images/cv/s8410s.png", id:"s8410s"},
		{src:"images/cv/s8411s.png", id:"s8411s"},
		{src:"images/cv/s8412s.png", id:"s8412s"},
		{src:"images/cv/s8413s.png", id:"s8413s"},
		{src:"images/cv/s8414s.png", id:"s8414s"},
		{src:"images/cv/s8415s.png", id:"s8415s"},
		{src:"images/cv/s841s.png", id:"s841s"},
		{src:"images/cv/s842s.png", id:"s842s"},
		{src:"images/cv/s843s.png", id:"s843s"},
		{src:"images/cv/s844s.png", id:"s844s"},
		{src:"images/cv/s845s.png", id:"s845s"},
		{src:"images/cv/s846s.png", id:"s846s"},
		{src:"images/cv/s847s.png", id:"s847s"},
		{src:"images/cv/s848s.png", id:"s848s"},
		{src:"images/cv/s849s.png", id:"s849s"},
		{src:"images/cv/s8510s.png", id:"s8510s"},
		{src:"images/cv/s8511s.png", id:"s8511s"},
		{src:"images/cv/s8512s.png", id:"s8512s"},
		{src:"images/cv/s8513s.png", id:"s8513s"},
		{src:"images/cv/s8514s.png", id:"s8514s"},
		{src:"images/cv/s8515s.png", id:"s8515s"},
		{src:"images/cv/s8516s.png", id:"s8516s"},
		{src:"images/cv/s8517s.png", id:"s8517s"},
		{src:"images/cv/s8518s.png", id:"s8518s"},
		{src:"images/cv/s8519s.png", id:"s8519s"},
		{src:"images/cv/s851s.png", id:"s851s"},
		{src:"images/cv/s8520s.png", id:"s8520s"},
		{src:"images/cv/s852s.png", id:"s852s"},
		{src:"images/cv/s853s.png", id:"s853s"},
		{src:"images/cv/s854s.png", id:"s854s"},
		{src:"images/cv/s855s.png", id:"s855s"},
		{src:"images/cv/s856s.png", id:"s856s"},
		{src:"images/cv/s857s.png", id:"s857s"},
		{src:"images/cv/s858s.png", id:"s858s"},
		{src:"images/cv/s859s.png", id:"s859s"}
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


(lib.s8110s = function() {
	this.initialize(img.s8110s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,19);


(lib.s8111s = function() {
	this.initialize(img.s8111s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,184);


(lib.s8112s = function() {
	this.initialize(img.s8112s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,26);


(lib.s8113s = function() {
	this.initialize(img.s8113s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,26);


(lib.s8114s = function() {
	this.initialize(img.s8114s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,47,52);


(lib.s8115s = function() {
	this.initialize(img.s8115s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,48);


(lib.s8116s = function() {
	this.initialize(img.s8116s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1369,1969);


(lib.s813s = function() {
	this.initialize(img.s813s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,482);


(lib.s814s = function() {
	this.initialize(img.s814s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,30);


(lib.s815s = function() {
	this.initialize(img.s815s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,23,32);


(lib.s816s = function() {
	this.initialize(img.s816s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,192);


(lib.s817s = function() {
	this.initialize(img.s817s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,47,144);


(lib.s818s = function() {
	this.initialize(img.s818s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,47,41);


(lib.s819s = function() {
	this.initialize(img.s819s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,21);


(lib.s821s = function() {
	this.initialize(img.s821s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,756,1155);


(lib.s822s = function() {
	this.initialize(img.s822s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,153,215);


(lib.s823s = function() {
	this.initialize(img.s823s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,417);


(lib.s824s = function() {
	this.initialize(img.s824s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,223,245);


(lib.s825s = function() {
	this.initialize(img.s825s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,630,1009);


(lib.s827s = function() {
	this.initialize(img.s827s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,223,245);


(lib.s8310s = function() {
	this.initialize(img.s8310s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,516,890);


(lib.s8311s = function() {
	this.initialize(img.s8311s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,550,890);


(lib.s8314s = function() {
	this.initialize(img.s8314s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,247,137);


(lib.s8315s = function() {
	this.initialize(img.s8315s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,307,177);


(lib.s8315s_1 = function() {
	this.initialize(img.s8315s_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,773,807);


(lib.s8316s = function() {
	this.initialize(img.s8316s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,208);


(lib.s8316s_1 = function() {
	this.initialize(img.s8316s_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,49);


(lib.s8317s = function() {
	this.initialize(img.s8317s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,423);


(lib.s831s = function() {
	this.initialize(img.s831s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,154);


(lib.s832s = function() {
	this.initialize(img.s832s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,373,86);


(lib.s833s = function() {
	this.initialize(img.s833s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,724,1176);


(lib.s834s = function() {
	this.initialize(img.s834s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,35);


(lib.s835s = function() {
	this.initialize(img.s835s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,46);


(lib.s836s = function() {
	this.initialize(img.s836s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,42);


(lib.s8410s = function() {
	this.initialize(img.s8410s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,341,217);


(lib.s8411s = function() {
	this.initialize(img.s8411s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,171,173);


(lib.s8412s = function() {
	this.initialize(img.s8412s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,621,866);


(lib.s8413s = function() {
	this.initialize(img.s8413s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,683,1113);


(lib.s8414s = function() {
	this.initialize(img.s8414s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,625,293);


(lib.s8415s = function() {
	this.initialize(img.s8415s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,757,594);


(lib.s841s = function() {
	this.initialize(img.s841s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,115);


(lib.s842s = function() {
	this.initialize(img.s842s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,115);


(lib.s843s = function() {
	this.initialize(img.s843s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,199);


(lib.s844s = function() {
	this.initialize(img.s844s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,108);


(lib.s845s = function() {
	this.initialize(img.s845s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,66);


(lib.s846s = function() {
	this.initialize(img.s846s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,340,224);


(lib.s847s = function() {
	this.initialize(img.s847s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,13,36);


(lib.s848s = function() {
	this.initialize(img.s848s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,185);


(lib.s849s = function() {
	this.initialize(img.s849s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,70);


(lib.s8510s = function() {
	this.initialize(img.s8510s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,336);


(lib.s8511s = function() {
	this.initialize(img.s8511s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,534);


(lib.s8512s = function() {
	this.initialize(img.s8512s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,38);


(lib.s8513s = function() {
	this.initialize(img.s8513s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,31);


(lib.s8514s = function() {
	this.initialize(img.s8514s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,12,33);


(lib.s8515s = function() {
	this.initialize(img.s8515s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,21);


(lib.s8516s = function() {
	this.initialize(img.s8516s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,657,901);


(lib.s8517s = function() {
	this.initialize(img.s8517s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1032,1437);


(lib.s8518s = function() {
	this.initialize(img.s8518s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,734,899);


(lib.s8519s = function() {
	this.initialize(img.s8519s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1048,268);


(lib.s851s = function() {
	this.initialize(img.s851s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,363,346);


(lib.s8520s = function() {
	this.initialize(img.s8520s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,521,165);


(lib.s852s = function() {
	this.initialize(img.s852s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,286,113);


(lib.s853s = function() {
	this.initialize(img.s853s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,337,464);


(lib.s854s = function() {
	this.initialize(img.s854s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,402);


(lib.s855s = function() {
	this.initialize(img.s855s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,311,229);


(lib.s856s = function() {
	this.initialize(img.s856s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,367,266);


(lib.s857s = function() {
	this.initialize(img.s857s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,392,486);


(lib.s858s = function() {
	this.initialize(img.s858s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,341);


(lib.s859s = function() {
	this.initialize(img.s859s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,580);


(lib.s8522 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s8519s();
	this.instance.setTransform(0,0,0.654,0.654);

	this.instance_1 = new lib.s8520s();
	this.instance_1.setTransform(11,193,0.654,0.654);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,685.6,301);


(lib.s8521 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s8516s();
	this.instance.setTransform(0,0,1.071,1.071);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,703.7,965);


(lib.s8519 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s8518s();
	this.instance.setTransform(0,0,1.142,1.142);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,838.6,1027.1);


(lib.s8518 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s851s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,363,346);


(lib.s8517 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s852s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,286,113);


(lib.s8516 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s853s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,337,464);


(lib.s8515 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s854s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168,402);


(lib.s8514 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s855s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,311,229);


(lib.s8513 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s856s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,367,266);


(lib.s8512 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s857s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,392,486);


(lib.s8511 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s858s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,334,341);


(lib.s8510 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s859s();
	this.instance.setTransform(0,0,1.071,1.071);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107.1,621.2);


(lib.s859 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s8510s();
	this.instance.setTransform(0,0,1.071,1.071);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200.3,359.9);


(lib.s858 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s8511s();
	this.instance.setTransform(0,0,1.071,1.071);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,572);


(lib.s857 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s8512s();
	this.instance.setTransform(0,0,1.071,1.071);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15,40.7);


(lib.s856 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s8513s();
	this.instance.setTransform(0,0,1.071,1.071);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15,33.2);


(lib.s855 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s8514s();
	this.instance.setTransform(0,0,1.071,1.071);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.9,35.4);


(lib.s854 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s8515s();
	this.instance.setTransform(0,0,1.071,1.071);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15,22.5);


(lib.s852 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cm_line();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1200,1862);


(lib.s851 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cm_line();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1200,1862);


(lib.s8418 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s841s();
	this.instance.setTransform(-61.8,-71.1,1.135,1.135,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.7,-71.1,147.5,142.4);


(lib.s8417 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s841s();
	this.instance.setTransform(-68.1,-65.2,1.135,1.135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.1,-65.2,136.2,130.5);


(lib.s8416 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s847s();
	this.instance.setTransform(9.3,0,1,1,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.9,38.1);


(lib.s8415 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s843s();
	this.instance.setTransform(0,0,1.035,1.035);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,172.9,206);


(lib.s8414 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s842s();
	this.instance.setTransform(0,0,1.035,1.035);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,117,119.1);


(lib.s8413 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s845s();
	this.instance.setTransform(0,0,1.135,1.135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101,74.9);


(lib.s8412 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s844s();
	this.instance.setTransform(0,0,1.135,1.135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92,122.6);


(lib.s8411 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s8414s();
	this.instance.setTransform(0,0,1.118,1.118);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,698.6,327.5);


(lib.s8410 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s8412s();
	this.instance.setTransform(0,0,1.048,1.048);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,650.9,907.6);


(lib.s849 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s8411s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,171,173);


(lib.s848 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s8410s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,341,217);


(lib.s847 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s849s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54,70);


(lib.s846 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s848s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,196,185);


(lib.s842 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAgAAQAAAPgKALQgJALgNAAQgMAAgJgLQgKgLAAgPQAAgOAKgLQAJgLAMAAQANAAAJALQAKALAAAOg");
	this.shape.setTransform(3.2,3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2F362A").s().p("AgVAaQgKgLAAgPQAAgOAKgLQAJgLAMAAQANAAAJALQAKALAAAOQAAAPgKALQgJALgNAAQgMAAgJgLg");
	this.shape_1.setTransform(3.2,3.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,8.5,9.5);


(lib.s841 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAcAHQgEAPgLAIQgLAIgKgCQgLgDgGgNQgGgNAEgNQAEgPAMgJQALgIAJADQAMADAGANQAFANgEANg");
	this.shape.setTransform(3,3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2F362A").s().p("AgIAjQgLgDgGgNQgGgNAEgMQAEgPAMgIQALgJAJADQAMADAGAOQAFAMgEANQgEAPgLAJQgIAFgHAAIgGgBg");
	this.shape_1.setTransform(3,3.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,8,9.4);


(lib.s839 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s8315s();
	this.instance.setTransform(0,0,0.643,0.643);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,197.3,113.8);


(lib.s837 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s8314s();
	this.instance.setTransform(0,0,1.146,1.146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,283.1,157);


(lib.s836 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s832s();
	this.instance.setTransform(0,0,1.093,1.093);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,407.6,94);


(lib.s835 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s831s();
	this.instance.setTransform(0,0,1.093,1.093);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78.7,168.3);


(lib.s834 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s836s();
	this.instance.setTransform(0,0,1.04,1.04);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97.8,43.7);


(lib.s833 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s834s();
	this.instance.setTransform(0,0,1.04,1.04);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112.3,36.4);


(lib.s832 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s835s();
	this.instance.setTransform(0,0,1.04,1.04);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96.7,47.9);


(lib.s831 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s8316s_1();
	this.instance.setTransform(0,0,1.04,1.04);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126.9,51);


(lib.s826 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s8310s();
	this.instance.setTransform(0,0,1.04,1.04);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,536.5,925.4);


(lib.s825 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s825s();
	this.instance.setTransform(0,0,1.098,1.098);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,691.6,1107.7);


(lib.s824 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s824s();
	this.instance.setTransform(0,0,1.098,1.098);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,244.8,269);


(lib.s823 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s823s();
	this.instance.setTransform(0,0,1.098,1.098);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,248.1,457.8);


(lib.s822 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s822s();
	this.instance.setTransform(0,0,1.098,1.098,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,0,188.8,250.4);


(lib.s821 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s821s();
	this.instance.setTransform(0,0,1.095,1.095);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,828.1,1265.1);


(lib.s8117 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s8116s();
	this.instance.setTransform(0,0,0.681,0.681);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,932.5,1341.2);


(lib.s8116 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.s814s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21,30);


(lib.s8115 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.s815s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23,32);


(lib.s8112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.s8113s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18,26);


(lib.s8111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.s8114s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47,52);


(lib.s8110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.s8111s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83,184);


(lib.s819 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.s8115s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,48);


(lib.s818 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.s8112s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20,26);


(lib.s815 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.s818s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47,41);


(lib.s814 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.s817s();

	this.instance_1 = new lib.s8110s();
	this.instance_1.setTransform(1,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54,144);


(lib.s812 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.s813s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,482);


(lib.s853 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s8519();
	this.instance.setTransform(419.2,513.5,1,1,0,0,0,419.2,513.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:525.5},3).to({y:513.5},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,838.6,1027.1);


(lib.s845 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s851();
	this.instance.setTransform(600,931,1,1,0,0,0,600,931);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:930.9,scaleX:1.06,scaleY:1.06,x:600.1,y:930.9},3).to({regY:931,scaleX:1,scaleY:1,x:600,y:931},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1200,1862);


(lib.s844 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwAvQgVgTAAgcQAAgaAVgVQAUgTAcAAQAdAAAUATQAVAVAAAaQAAAcgVATQgUAUgdAAQgcAAgUgUg");
	this.shape.setTransform(48.3,26.7);

	this.instance = new lib.s832();
	this.instance.setTransform(48.4,23.9,1,1,0,0,0,48.4,23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96.7,47.9);


(lib.s843 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguAtQgTgSAAgbQAAgaATgTQAUgTAaAAQAbAAAUATQATATAAAaQAAAbgTASQgUAUgbAAQgaAAgUgUg");
	this.shape.setTransform(50.3,24.4);

	this.instance = new lib.s834();
	this.instance.setTransform(48.9,21.8,1,1,0,0,0,48.9,21.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97.8,43.7);


(lib.s838 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s852();
	this.instance.setTransform(600,931,1,1,0,0,0,600,931);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:599.9,regY:930.9,scaleX:1.07,scaleY:1.07},4).to({regX:600,regY:931,scaleX:1,scaleY:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1200,1862);


(lib.s8113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 右
	this.instance = new lib.s8112();
	this.instance.setTransform(57.9,46.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:9,regY:13,rotation:-6.7,x:67.1,y:58.4},0).wait(1).to({rotation:-9.8,y:57.6},0).wait(1).to({rotation:-10.7,y:57.4},0).wait(1).to({regX:0.1,regY:0.1,rotation:-11,x:55.9,y:46.3},0).to({regX:0,regY:0,rotation:0,x:57.9,y:46.9},2).wait(20));

	// 腿
	this.instance_1 = new lib.s819();
	this.instance_1.setTransform(0,135);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:17.5,regY:24,rotation:0.2,x:17.4,y:159},0).wait(1).to({rotation:0.4},0).wait(1).to({rotation:0.7,x:17.3},0).wait(1).to({rotation:1.2,x:17.1,y:159.1},0).wait(1).to({rotation:2,x:16.8},0).wait(1).to({rotation:3.3,x:16.3,y:159.2},0).wait(1).to({regX:0.1,regY:0.1,rotation:6.5,x:0.6,y:133.5},0).wait(1).to({regX:17.5,regY:24,rotation:4.6,x:15.9,y:159.1},0).wait(1).to({rotation:3,x:16.4},0).wait(1).to({rotation:1.9,x:16.8,y:159},0).wait(1).to({rotation:1.1,x:17.1},0).wait(1).to({rotation:0.6,x:17.3,y:158.9},0).wait(1).to({rotation:0.3,x:17.4},0).wait(1).to({regX:0,regY:0,rotation:0,x:0,y:135},0).wait(12));

	// zuo
	this.instance_2 = new lib.s818();
	this.instance_2.setTransform(21.1,47.1,1,1,0,0,0,20,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:10,regY:13,rotation:-1,x:11.2,y:60.1},0).wait(1).to({rotation:-1.8,x:11.3},0).wait(1).to({rotation:-2.3,x:11.4},0).wait(1).to({rotation:-2.6},0).wait(1).to({rotation:-2.8,x:11.5},0).wait(1).to({rotation:-2.9},0).wait(2).to({rotation:-3},0).wait(1).to({regX:20,regY:0.1,x:20.8,y:46.7},0).to({regY:0,rotation:0,x:21.1,y:47.1},3).wait(14));

	// Layer 1
	this.instance_3 = new lib.s8111();
	this.instance_3.setTransform(39.5,141.5,1,1,0,0,0,23.5,26);

	this.instance_4 = new lib.s8110();
	this.instance_4.setTransform(40.7,92,1,1,0,0,0,41.5,92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,0,83,184);


(lib.s816 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.s814();
	this.instance.setTransform(27,72,1,1,0,0,0,27,72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54,144);


(lib.s813 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.s8116();
	this.instance.setTransform(78.5,62.8,1,1,0,0,0,10.5,15);

	this.instance_1 = new lib.s8115();
	this.instance_1.setTransform(22.7,60.4,1,1,0,0,0,11.5,16);

	this.instance_2 = new lib.s816s();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97,192);


(lib.s817 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.s815();
	this.instance.setTransform(30.4,41,1,1,0,0,0,23.5,41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:20.5,y:20.5},0).wait(1).to({y:20.6},0).wait(2).to({y:20.8},0).wait(1).to({y:21},0).wait(1).to({regY:41,y:42.2},0).to({y:41},2).wait(19));

	// Layer 1
	this.instance_1 = new lib.s816();
	this.instance_1.setTransform(34,109.5,1,1,0,0,0,27,72);

	this.instance_2 = new lib.s819s();
	this.instance_2.setTransform(2,52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,0,59,181.5);


(lib.s8 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_212 = function() {
		this.stop();
		try{app.showBtns()}catch(e){}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(212).call(this.frame_212).wait(1));

	// 图层 7
	this.instance = new lib.s8522();
	this.instance.setTransform(365.8,170.5,1,1,0,0,0,342.8,150.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(181).to({_off:false},0).wait(1).to({alpha:0.299},0).wait(1).to({alpha:0.516},0).wait(1).to({alpha:0.676},0).wait(1).to({alpha:0.788},0).wait(1).to({alpha:0.868},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:0.973},0).wait(1).to({alpha:1},0).wait(24));

	// 7
	this.instance_1 = new lib.s8517();
	this.instance_1.setTransform(905.6,620.3,1,1,0,0,0,143,56.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(164).to({_off:false},0).wait(1).to({x:890.9,y:621.7},0).wait(1).to({x:850.8,y:625.3},0).wait(1).to({x:696,y:639.5},0).wait(46));

	// 8
	this.instance_2 = new lib.s8518();
	this.instance_2.setTransform(983.1,40,1,1,0,0,0,181.5,173);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(176).to({_off:false},0).to({x:734.5,y:266},2).wait(35));

	// 5
	this.instance_3 = new lib.s8515();
	this.instance_3.setTransform(637,-206,1,1,0,0,0,84,201);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(175).to({_off:false},0).to({x:553,y:86},2).wait(36));

	// 6
	this.instance_4 = new lib.s8516();
	this.instance_4.setTransform(33.6,-237,1,1,0,0,0,168.5,232);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(174).to({_off:false},0).to({x:183.5,y:99},2).wait(37));

	// 4
	this.instance_5 = new lib.s8514();
	this.instance_5.setTransform(-140.5,265.1,1,1,0,0,0,155.5,114.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(173).to({_off:false},0).to({x:74.5,y:415.5},2).wait(38));

	// 3
	this.instance_6 = new lib.s8513();
	this.instance_6.setTransform(-183.7,905.8,1,1,0,0,0,183.5,133);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(172).to({_off:false},0).to({x:75.5,y:749},2).wait(39));

	// 2
	this.instance_7 = new lib.s8512();
	this.instance_7.setTransform(-181,1475.8,1,1,0,0,0,196,243);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(171).to({_off:false},0).to({x:171,y:1031},2).wait(40));

	// 1
	this.instance_8 = new lib.s8511();
	this.instance_8.setTransform(847,1402.3,1,1,0,0,0,167,170.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(170).to({_off:false},0).to({x:697,y:1181.5},2).wait(41));

	// 左手
	this.instance_9 = new lib.s8510();
	this.instance_9.setTransform(151.8,687.8,1,1,0,0,0,53.6,310.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(164).to({_off:false},0).to({x:148.6,y:668.6},2).wait(47));

	// 左上
	this.instance_10 = new lib.s859();
	this.instance_10.setTransform(236.6,847.9,1,1,0,0,0,100.2,179.9);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(164).to({_off:false},0).to({x:230.2,y:839.9},2).wait(47));

	// 右手
	this.instance_11 = new lib.s858();
	this.instance_11.setTransform(631.8,729.7,1,1,0,0,0,45,285.9);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(164).to({_off:false},0).to({x:623.8,y:716.9},2).wait(47));

	// 汗4
	this.instance_12 = new lib.s854();
	this.instance_12.setTransform(353.5,541.2,1,1,0,0,0,7.5,11.2);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(164).to({_off:false},0).wait(13).to({y:545.2},4).wait(32));

	// 汗3
	this.instance_13 = new lib.s855();
	this.instance_13.setTransform(325.4,571.7,1,1,0,0,0,6.4,17.7);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(164).to({_off:false},0).wait(14).to({y:574.1},4).wait(31));

	// 汗2
	this.instance_14 = new lib.s856();
	this.instance_14.setTransform(359.5,599.6,1,1,0,0,0,7.5,16.6);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(164).to({_off:false},0).wait(15).to({y:606.8},5).wait(29));

	// 汗1
	this.instance_15 = new lib.s857();
	this.instance_15.setTransform(323.5,507.4,1,1,0,0,0,7.5,20.4);
	this.instance_15._off = true;

	this.instance_16 = new lib.s856();
	this.instance_16.setTransform(359.5,599.6,1,1,0,0,0,7.5,16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16},{t:this.instance_15}]},164).to({state:[{t:this.instance_15}]},16).to({state:[{t:this.instance_15}]},6).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(164).to({_off:false},0).wait(16).to({y:533},6).wait(27));

	// 人
	this.instance_17 = new lib.s8521();
	this.instance_17.setTransform(511.8,769.5,1,1,0,0,0,351.8,482.5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(164).to({_off:false},0).wait(49));

	// 线
	this.instance_18 = new lib.s853();
	this.instance_18.setTransform(382.2,-464.5,1,1,0,0,0,419.2,513.5);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(178).to({_off:false},0).wait(1).to({regX:419.3,regY:519.5,x:382.3,y:-351.4},0).wait(1).to({y:-135.3},0).wait(1).to({regX:419.2,regY:513.5,x:382.2,y:434.7},0).wait(32));

	// 背景
	this.instance_19 = new lib.s8517s();
	this.instance_19.setTransform(-128,-133);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(164).to({_off:false},0).wait(49));

	// 速度线
	this.instance_20 = new lib.s845();
	this.instance_20.setTransform(366.2,564.8,2.097,2.097,0,0,0,600,930.9);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(141).to({_off:false},0).wait(1).to({regY:931,scaleX:1.94,scaleY:1.94,y:570},0).wait(1).to({scaleX:1.58,scaleY:1.58,y:581.7},0).wait(1).to({scaleX:1,scaleY:1,x:366,y:600},0).to({_off:true},20).wait(49));

	// 右手
	this.instance_21 = new lib.s846();
	this.instance_21.setTransform(718.3,792.2,1,1,-10.2,0,0,183.6,140.2);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(141).to({_off:false},0).to({regX:176.9,regY:127,rotation:4.2,x:643.2,y:768.2},2).to({_off:true},21).wait(49));

	// 嘴
	this.instance_22 = new lib.s847();
	this.instance_22.setTransform(565.6,567.4,1.031,0.348,0,-7.2,7,27.2,35.3);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(141).to({_off:false},0).to({regX:27,regY:35,scaleX:1,scaleY:1,skewX:0,skewY:0,x:495.2,y:564.8},2).to({_off:true},21).wait(49));

	// 左手
	this.instance_23 = new lib.s848();
	this.instance_23.setTransform(399.5,681.3,1,1,-20.7,0,0,289.7,39);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(141).to({_off:false},0).to({regX:282.6,regY:24.5,rotation:8.9,x:306.8,y:649.2},2).to({_off:true},21).wait(49));

	// 左上臂
	this.instance_24 = new lib.s849();
	this.instance_24.setTransform(504.1,593.3,1,1,-7.9,0,0,171.1,0.1);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(141).to({_off:false},0).to({regX:171,rotation:2.5,x:439.2,y:586.9},2).to({_off:true},21).wait(49));

	// 男身
	this.instance_25 = new lib.s8410();
	this.instance_25.setTransform(401.4,810,1,1,0,0,0,325.4,453.8);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(141).to({_off:false},0).to({x:332.6,y:803.6},2).to({_off:true},21).wait(49));

	// 不许动
	this.instance_26 = new lib.s8411();
	this.instance_26.setTransform(384.4,173.8,0.746,0.746,0,0,0,349.4,163.8);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(141).to({_off:false},0).to({regX:349.3,scaleX:1,scaleY:1,x:384.3},2).to({_off:true},21).wait(49));

	// 蓝头
	this.instance_27 = new lib.s8412();
	this.instance_27.setTransform(710,481.2,1,1,0,0,0,46,61.2);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(141).to({_off:false},0).wait(2).to({x:706.8},0).to({rotation:5.2,x:732.1,y:488.8},2).to({_off:true},19).wait(49));

	// 蓝手
	this.instance_28 = new lib.s8413();
	this.instance_28.setTransform(686.5,628.5,1,1,0,0,0,50.5,37.5);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(141).to({_off:false},0).wait(2).to({regX:0,regY:0,x:632.8,y:591},0).to({rotation:-21,x:647.6,y:586.6},2).to({_off:true},19).wait(49));

	// 绿头
	this.instance_29 = new lib.s8414();
	this.instance_29.setTransform(162.5,520.5,1,1,0,0,0,58.5,59.5);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(141).to({_off:false},0).wait(3).to({regY:59.6,rotation:-4.9,x:140.5,y:521.9},2).to({_off:true},18).wait(49));

	// 绿衣
	this.instance_30 = new lib.s8415();
	this.instance_30.setTransform(205.4,665,1,1,0,0,0,86.4,103);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(141).to({_off:false},0).wait(3).to({regX:86.5,rotation:-4.9,x:199.1,y:666.8},2).to({_off:true},18).wait(49));

	// ？
	this.instance_31 = new lib.s8416();
	this.instance_31.setTransform(213.3,520.8,1,1,0,0,0,10.9,19.1);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(146).to({_off:false},0).to({_off:true},18).wait(49));

	// 椅子
	this.instance_32 = new lib.s8415s();
	this.instance_32.setTransform(-5,621,1.075,1.075);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(141).to({_off:false},0).to({_off:true},23).wait(49));

	// 蓝衣
	this.instance_33 = new lib.s841s();
	this.instance_33.setTransform(636,527,1.135,1.135);

	this.instance_34 = new lib.s8417("synched",0);
	this.instance_34.setTransform(700.9,592.3);
	this.instance_34._off = true;

	this.instance_35 = new lib.s8418("synched",0);
	this.instance_35.setTransform(715.3,594);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_33}]},141).to({state:[{t:this.instance_34}]},2).to({state:[{t:this.instance_35}]},2).to({state:[]},19).to({state:[]},30).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(143).to({_off:false},0).to({_off:true,x:715.3,y:594},2).wait(68));

	// 后人
	this.instance_36 = new lib.s846s();
	this.instance_36.setTransform(216,425,1.368,1.368);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(141).to({_off:false},0).to({_off:true},23).wait(49));

	// 背
	this.instance_37 = new lib.s8413s();
	this.instance_37.setTransform(-19,-53,1.161,1.161);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(141).to({_off:false},0).to({_off:true},23).wait(49));

	// 速度线
	this.instance_38 = new lib.s838();
	this.instance_38.setTransform(388.8,573.8,1.445,1.445,0,0,0,599.9,930.8);
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(105).to({_off:false},0).wait(1).to({regX:600.1,regY:931.1,scaleX:1.41,scaleY:1.41,x:389.1,y:566},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:389.2,y:536.1},0).wait(1).to({regX:600,regY:931,scaleX:1,scaleY:1,x:389,y:474},0).to({_off:true},33).wait(72));

	// 飘
	this.instance_39 = new lib.s837();
	this.instance_39.setTransform(349.7,822.5,1,1,0,0,0,267.6,18.5);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(106).to({_off:false},0).to({rotation:7.7,x:230.8,y:870.6},4).to({regY:18.6,rotation:44.4,x:-13,y:956.7},5).wait(1).to({rotation:0,skewX:45.6,skewY:-134.4,x:-82.2,y:817},0).to({regX:267.4,regY:18.7,skewX:-14.9,skewY:-194.9,x:263.3,y:1152.9},8).to({regY:18.8,skewX:-38.8,skewY:-218.8,x:796.1,y:1191.4},7).to({_off:true},10).wait(72));

	// 叮
	this.instance_40 = new lib.s836();
	this.instance_40.setTransform(487.8,365,1,1,0,0,0,203.8,47);
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(107).to({_off:false},0).to({_off:true},34).wait(72));

	// ！
	this.instance_41 = new lib.s835();
	this.instance_41.setTransform(657,580.2,1,1,0,0,0,0,168.2);
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(107).to({_off:false},0).wait(2).to({_off:true},32).wait(72));

	// 头发
	this.instance_42 = new lib.s826();
	this.instance_42.setTransform(380.2,801.7,1,1,0,0,0,268.2,462.7);

	this.instance_43 = new lib.s8311s();
	this.instance_43.setTransform(77,336,1.045,1.045);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_42}]},105).to({state:[{t:this.instance_42}]},3).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_42}]},2).to({state:[]},30).to({state:[]},52).wait(20));

	// 右眉
	this.instance_44 = new lib.s831();
	this.instance_44.setTransform(374.4,626.5,1,1,0,0,0,96.4,38.5);
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(105).to({_off:false},0).wait(5).to({regX:96.5,rotation:0.7,x:376.9},2).wait(2).to({regX:96.4,rotation:0,x:374.4},2).to({regX:96.5,rotation:0.7,x:377.9},2).to({regX:96.4,rotation:0,x:374.4},3).to({regX:96.5,rotation:0.7,x:377.9},3).to({regX:96.4,rotation:0,x:374.4},3).to({regX:96.5,rotation:0.7,x:377.9},3).to({regX:96.4,rotation:0,x:374.4},3).to({regX:96.5,rotation:0.7,x:377.9},3).to({regX:96.4,rotation:0,x:374.4},3).to({_off:true},2).wait(72));

	// 右眼睛
	this.instance_45 = new lib.s841();
	this.instance_45.setTransform(320.3,644.1,0.769,0.769,0,0,0,3.1,3.9);
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(105).to({_off:false},0).to({regY:3.7,scaleX:1.17,scaleY:1.17,y:643.9},3).wait(2).to({regY:3.8,scaleX:1.02,scaleY:1.02,x:321.1,y:644.1},0).wait(2).to({x:319.5,y:645.7},0).wait(2).to({x:321.1,y:644.1},0).wait(2).to({regY:3.9,scaleX:1.16,scaleY:1.16,x:319.5,y:644.2},0).wait(2).to({regY:3.8,scaleX:1.02,scaleY:1.02,x:321.1,y:644.1},0).wait(2).to({x:319.5},0).wait(2).to({x:321.1},0).wait(4).to({scaleX:1.19,scaleY:1.19,x:319.5,y:644},0).wait(2).to({scaleX:1.02,scaleY:1.02,x:321.1,y:644.1},0).wait(4).to({x:319.5},0).wait(2).to({x:321.1},0).wait(4).to({scaleX:1.19,scaleY:1.19,x:319.5,y:644},0).wait(2).to({scaleX:1.02,scaleY:1.02,x:321.1,y:644.1},0).to({_off:true},1).wait(72));

	// 右眼
	this.instance_46 = new lib.s844();
	this.instance_46.setTransform(319.5,621.5,1,0.824,0,0,0,48.5,0.1);
	this.instance_46._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(105).to({_off:false},0).wait(1).to({regX:48.3,regY:23.9,scaleY:0.85,x:319.3,y:641.2},0).wait(1).to({scaleY:0.91,y:641.5},0).wait(1).to({regX:48.4,regY:0,scaleY:1,x:319.4,y:618},0).to({_off:true},33).wait(72));

	// 左眉
	this.instance_47 = new lib.s833();
	this.instance_47.setTransform(458.2,638.2,1,1,0,0,0,17.2,31.2);
	this.instance_47._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(105).to({_off:false},0).wait(5).to({rotation:-0.5,x:456.2},2).wait(2).to({rotation:0,x:458.2},2).to({rotation:-0.5,x:455.2},2).to({rotation:0,x:458.2},3).to({rotation:-0.5,x:455.2},3).to({rotation:0,x:458.2},3).to({rotation:-0.5,x:455.2},3).to({rotation:0,x:458.2},3).to({rotation:-0.5,x:455.2},3).to({rotation:0,x:458.2},3).to({_off:true},2).wait(72));

	// 眼睛
	this.instance_48 = new lib.s842();
	this.instance_48.setTransform(509.3,652.4,0.67,0.67,0,0,0,3.2,3.8);
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(105).to({_off:false},0).to({scaleX:1.16,scaleY:1.16},3).wait(2).to({scaleX:0.92,scaleY:0.92,x:508.5},0).wait(2).to({x:510.1,y:654},0).wait(2).to({x:508.5,y:652.4},0).wait(2).to({regY:3.9,scaleX:1.09,scaleY:1.09,x:506.9,y:652.5},0).wait(2).to({regY:3.8,scaleX:0.92,scaleY:0.92,x:505.3,y:652.4},0).wait(2).to({x:506.9},0).wait(2).to({x:505.3},0).wait(2).to({x:508.5},0).wait(2).to({scaleX:1.07,scaleY:1.07,x:506.9,y:650.8},0).wait(2).to({scaleX:0.92,scaleY:0.92,x:505.3,y:652.4},0).wait(4).to({x:506.9},0).wait(2).to({x:505.3},0).wait(2).to({x:508.5},0).wait(2).to({scaleX:1.07,scaleY:1.07,x:506.9,y:650.8},0).wait(2).to({scaleX:0.92,scaleY:0.92,x:505.3,y:652.4},0).to({_off:true},1).wait(72));

	// 左眼
	this.instance_49 = new lib.s843();
	this.instance_49.setTransform(507.9,632.2,1,0.826,0,0,0,48.9,0.2);
	this.instance_49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(105).to({_off:false},0).wait(1).to({regY:21.8,scaleY:0.86,y:649.9},0).wait(1).to({scaleY:0.91,y:649.8},0).wait(1).to({regY:0,scaleY:1,y:628},0).to({_off:true},33).wait(72));

	// 男
	this.instance_50 = new lib.s8315s_1();
	this.instance_50.setTransform(-3,451,1.04,1.04);
	this.instance_50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(105).to({_off:false},0).to({_off:true},36).wait(72));

	// 图层 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_105 = new cjs.Graphics().p("AwRDuMAwZgFIIAAUSMgwdACFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(105).to({graphics:mask_graphics_105,x:205.6,y:134.2}).wait(108));

	// 图层 4
	this.instance_51 = new lib.s839();
	this.instance_51.setTransform(510,196.9,1,1,0,0,0,98.7,56.9);
	this.instance_51._off = true;

	this.instance_51.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(105).to({_off:false},0).wait(1).to({regX:98.6,x:495.5},0).wait(1).to({x:475.8},0).wait(1).to({x:450.8},0).wait(1).to({x:416.2},0).wait(1).to({x:344.1},0).wait(1).to({regX:98.7,x:242.7},0).to({_off:true},30).wait(72));

	// 图层 5
	this.instance_52 = new lib.s8316s();
	this.instance_52.setTransform(101,125,0.689,0.689);
	this.instance_52._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(105).to({_off:false},0).to({_off:true},36).wait(72));

	// 图层 3
	this.instance_53 = new lib.s8317s();
	this.instance_53.setTransform(32,80,0.689,0.689);
	this.instance_53._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(105).to({_off:false},0).to({_off:true},36).wait(72));

	// 背
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EglBAV4MAAAgrvMBKDAAAMAAAArvg");
	this.shape.setTransform(278.5,224.2);

	this.instance_54 = new lib.s833s();
	this.instance_54.setTransform(-11,1,1.082,1.082);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_54},{t:this.shape}]},105).to({state:[]},36).to({state:[]},52).wait(20));

	// 手
	this.instance_55 = new lib.s823();
	this.instance_55.setTransform(673.1,556,1,1,2.4,0,0,176.1,451);
	this.instance_55._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(58).to({_off:false},0).wait(1).to({regX:124,regY:228.9,rotation:2,x:628.8,y:331.9},0).wait(1).to({rotation:1.5,x:626.4,y:332.1},0).wait(1).to({rotation:0.7,x:623.5,y:332.4},0).wait(1).to({rotation:-0.2,x:619.6,y:332.7},0).wait(1).to({regX:176.1,regY:451,rotation:-1.5,x:672.1,y:554},0).to({regY:450.9,rotation:0,x:673.1,y:555.9},3).wait(6).to({regY:451,rotation:-1.7,x:672.1,y:556},4).to({rotation:0.9,x:673.1},4).to({rotation:-1.5,x:674.1,y:554},4).wait(1).to({regX:124,regY:228.9,rotation:-1.1,x:617.5,y:333.4},0).wait(1).to({rotation:-0.8,x:618.5,y:333.6},0).wait(1).to({rotation:-0.5,x:619.3},0).wait(1).to({rotation:-0.4,x:619.8,y:333.7},0).wait(1).to({rotation:-0.2,x:620.3,y:333.8},0).wait(1).to({rotation:-0.1,x:620.7},0).wait(1).to({regX:176.1,regY:450.9,rotation:0,x:673.1,y:555.9},0).to({regY:451,rotation:-1,y:556},6).to({_off:true},8).wait(108));

	// 头发
	this.instance_56 = new lib.s824();
	this.instance_56.setTransform(515.4,233.4,1,1,0,0,0,122.4,134.4);

	this.instance_57 = new lib.s827s();
	this.instance_57.setTransform(396,101,1.09,1.09);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_56}]},58).to({state:[{t:this.instance_57}]},3).to({state:[{t:this.instance_56}]},2).to({state:[{t:this.instance_56}]},10).to({state:[{t:this.instance_57}]},3).to({state:[{t:this.instance_56}]},7).to({state:[{t:this.instance_57}]},8).to({state:[]},14).to({state:[]},1).wait(107));

	// 男
	this.instance_58 = new lib.s825();
	this.instance_58.setTransform(303.8,711.8,1,1,0,0,0,345.8,553.8);
	this.instance_58._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(58).to({_off:false},0).to({_off:true},47).wait(108));

	// 上臂
	this.instance_59 = new lib.s822();
	this.instance_59.setTransform(591.1,432.1,1,1,-7.2,0,0,29,11.1);
	this.instance_59._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(58).to({_off:false},0).wait(1).to({regX:72.9,regY:125.2,rotation:-7.1,x:648.8,y:539.7},0).wait(1).to({y:539.4},0).wait(1).to({regX:29.1,regY:11.1,rotation:-7,x:591.2,y:431.3},0).wait(1).to({regX:72.9,regY:125.2,x:648.4,y:538.7},0).wait(1).to({regX:28.9,regY:11.1,rotation:-6.9,x:591,y:430.1},0).to({regX:29,rotation:-7.2,x:591.1,y:432.1},3).wait(10).to({regX:28.9,rotation:-6.9,x:591,y:431.1},0).to({regX:29,rotation:-7.2,x:591.1,y:432.1},4).to({regX:28.9,rotation:-6.9,x:592,y:429.1},4).wait(1).to({regX:72.9,regY:125.2,rotation:-7,x:649.2,y:537.7},0).wait(1).to({x:649.1,y:538.3},0).wait(1).to({rotation:-7.1,x:649,y:538.7},0).wait(1).to({y:539},0).wait(1).to({y:539.3},0).wait(1).to({x:648.9,y:539.6},0).wait(1).to({regX:29,regY:11.1,rotation:-7.2,x:591.1,y:432.1},0).to({y:430.5},6).to({_off:true},8).wait(108));

	// 背
	this.instance_60 = new lib.s821();
	this.instance_60.setTransform(360.1,614.6,1,1,0,0,0,414.1,632.6);
	this.instance_60._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(58).to({_off:false},0).to({_off:true},47).wait(108));

	// 前
	this.instance_61 = new lib.s812();
	this.instance_61.setTransform(379.5,1329.1,1.219,1.219,0,0,0,374.7,482.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(1).to({regX:375,regY:241,scaleX:1.22,scaleY:1.22,x:379.9,y:1038.3},0).wait(1).to({scaleX:1.23,scaleY:1.23,y:1040.9},0).wait(1).to({scaleX:1.23,scaleY:1.23,y:1043},0).wait(1).to({scaleX:1.23,scaleY:1.23,y:1044.6},0).wait(1).to({scaleX:1.24,scaleY:1.24,y:1046},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:380,y:1047.1},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:379.9,y:1048.1},0).wait(1).to({scaleX:1.24,scaleY:1.24,y:1048.9},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:380,y:1049.6},0).wait(1).to({scaleX:1.24,scaleY:1.24,y:1050.1},0).wait(1).to({scaleX:1.24,scaleY:1.24,y:1050.5},0).wait(1).to({y:1050.8},0).wait(1).to({scaleX:1.24,scaleY:1.24,y:1051},0).wait(1).to({y:1051.1},0).wait(1).to({y:1051.2},0).wait(1).to({y:1051.3},0).wait(2).to({regX:374.9,regY:482,x:379.6,y:1351},0).to({_off:true},40).wait(155));

	// 中3
	this.instance_62 = new lib.s8113();
	this.instance_62.setTransform(667.5,788.1,1.218,1.218,0,0,0,41.9,92);

	this.timeline.addTween(cjs.Tween.get(this.instance_62).wait(1).to({regX:38.6,regY:92.5,scaleX:1.23,scaleY:1.23,x:664.2,y:789.3},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:664.8,y:789.8},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:665.3,y:790.2},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:665.7,y:790.5},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:666,y:790.8},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:666.3,y:791},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:666.5,y:791.2},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:666.7,y:791.4},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:666.9,y:791.5},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:667,y:791.6},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:667.1,y:791.7},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:667.2,y:791.8},0).wait(2).to({scaleX:1.25,scaleY:1.25,x:667.3},0).wait(1).to({y:791.9},0).wait(1).to({x:667.4},0).wait(2).to({regX:42,regY:92.2,scaleX:1.26,scaleY:1.26,x:671.6,y:791.4},0).to({_off:true},40).wait(155));

	// 中2
	this.instance_63 = new lib.s817();
	this.instance_63.setTransform(291.8,790.1,1.113,1.113,0,0,0,30.6,90.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_63).wait(1).to({regX:31.5,scaleX:1.11,scaleY:1.11,x:292.7,y:790.4},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:292.6,y:790.7},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:292.5,y:791},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:292.4,y:791.2},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:292.3,y:791.4},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:791.6},0).wait(1).to({x:292.2,y:791.7},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:791.8},0).wait(1).to({y:791.9},0).wait(1).to({x:292.1,y:792.1},0).wait(1).to({scaleX:1.12,scaleY:1.12},0).wait(1).to({y:792.2},0).wait(2).to({x:292},0).wait(1).to({y:792.3},0).wait(2).to({x:292.1},0).wait(1).to({regX:30.8,regY:90.9,x:291.1},0).to({_off:true},40).wait(155));

	// 中1
	this.instance_64 = new lib.s813();
	this.instance_64.setTransform(97.2,795,1.096,1.096,0,0,0,48.6,96);

	this.timeline.addTween(cjs.Tween.get(this.instance_64).wait(1).to({regX:48.5,x:96.6,y:795.2},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:96.3,y:795.3},0).wait(1).to({x:95.9,y:795.5},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:95.7},0).wait(1).to({x:95.4,y:795.6},0).wait(1).to({x:95.2,y:795.7},0).wait(1).to({x:95,y:795.8},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:94.9},0).wait(1).to({x:94.7,y:795.9},0).wait(1).to({x:94.6},0).wait(1).to({x:94.5},0).wait(1).to({x:94.4,y:796},0).wait(2).to({x:94.3},0).wait(2).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({x:94.2},0).wait(1).to({regX:48.6},0).to({_off:true},40).wait(155));

	// 图层 2
	this.instance_65 = new lib.s8117();
	this.instance_65.setTransform(417.2,666.6,1,1,0,0,0,466.2,670.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_65).wait(1).to({scaleX:1,scaleY:1,x:417.3},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:417.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:417.3,y:666.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:417.2},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:666.6},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:417.3,y:666.7},0).wait(1).to({x:417.2,y:666.6},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:417.3,y:666.7},0).wait(1).to({y:666.6},0).wait(1).to({y:666.7},0).wait(1).to({x:417.2},0).wait(1).to({y:666.6},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:417.3},0).wait(2).to({y:666.7},0).wait(2).to({x:417.2,y:666.6},0).to({_off:true},40).wait(155));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.2,-4,960.8,1341.2);


// stage content:



(lib.qj_s8 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s8();
	this.instance.setTransform(403.1,666.6,1,1,0,0,0,403.1,666.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(297.8,606,960.8,1341.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;