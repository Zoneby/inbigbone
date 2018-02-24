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
		{src:"images/cv/s14110s.png", id:"s14110s"},
		{src:"images/cv/s14111s.png", id:"s14111s"},
		{src:"images/cv/s14112s.png", id:"s14112s"},
		{src:"images/cv/s1411s.png", id:"s1411s"},
		{src:"images/cv/s1412s.png", id:"s1412s"},
		{src:"images/cv/s1413s.png", id:"s1413s"},
		{src:"images/cv/s1414s.png", id:"s1414s"},
		{src:"images/cv/s1415s.png", id:"s1415s"},
		{src:"images/cv/s1416s.png", id:"s1416s"},
		{src:"images/cv/s1417s.png", id:"s1417s"},
		{src:"images/cv/s1418s.png", id:"s1418s"},
		{src:"images/cv/s1419s.png", id:"s1419s"},
		{src:"images/cv/s14210s.png", id:"s14210s"},
		{src:"images/cv/s1421s.png", id:"s1421s"},
		{src:"images/cv/s1422s.png", id:"s1422s"},
		{src:"images/cv/s1423s.png", id:"s1423s"},
		{src:"images/cv/s1424s.png", id:"s1424s"},
		{src:"images/cv/s1428s.png", id:"s1428s"},
		{src:"images/cv/s1429s.png", id:"s1429s"},
		{src:"images/cv/s14310s.png", id:"s14310s"},
		{src:"images/cv/s14311s.png", id:"s14311s"},
		{src:"images/cv/s14312s.png", id:"s14312s"},
		{src:"images/cv/s1431s.png", id:"s1431s"},
		{src:"images/cv/s1432s.png", id:"s1432s"},
		{src:"images/cv/s1433s.png", id:"s1433s"},
		{src:"images/cv/s1434s.png", id:"s1434s"},
		{src:"images/cv/s1435s.png", id:"s1435s"},
		{src:"images/cv/s1436s.png", id:"s1436s"},
		{src:"images/cv/s1437s.png", id:"s1437s"},
		{src:"images/cv/s1438s.png", id:"s1438s"},
		{src:"images/cv/s1439s.png", id:"s1439s"},
		{src:"images/cv/s14411s.png", id:"s14411s"},
		{src:"images/cv/s14415s.png", id:"s14415s"},
		{src:"images/cv/s14416s.png", id:"s14416s"},
		{src:"images/cv/s14417s.png", id:"s14417s"},
		{src:"images/cv/s14418s.png", id:"s14418s"},
		{src:"images/cv/s14419s.png", id:"s14419s"},
		{src:"images/cv/s1441s.png", id:"s1441s"},
		{src:"images/cv/s14420s.png", id:"s14420s"},
		{src:"images/cv/s14421s.png", id:"s14421s"},
		{src:"images/cv/s14422s.png", id:"s14422s"},
		{src:"images/cv/s1442s.png", id:"s1442s"},
		{src:"images/cv/s1443s.png", id:"s1443s"},
		{src:"images/cv/s1444s.png", id:"s1444s"},
		{src:"images/cv/s1445s.png", id:"s1445s"},
		{src:"images/cv/s1446s.png", id:"s1446s"},
		{src:"images/cv/s1447s.png", id:"s1447s"},
		{src:"images/cv/s1448s.png", id:"s1448s"}
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



(lib.s14110s = function() {
	this.initialize(img.s14110s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,44);


(lib.s14111s = function() {
	this.initialize(img.s14111s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,332,109);


(lib.s14112s = function() {
	this.initialize(img.s14112s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,636,216);


(lib.s1411s = function() {
	this.initialize(img.s1411s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,22);


(lib.s1412s = function() {
	this.initialize(img.s1412s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,21);


(lib.s1413s = function() {
	this.initialize(img.s1413s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,550,474);


(lib.s1414s = function() {
	this.initialize(img.s1414s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,552,477);


(lib.s1415s = function() {
	this.initialize(img.s1415s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,65);


(lib.s1416s = function() {
	this.initialize(img.s1416s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,48);


(lib.s1417s = function() {
	this.initialize(img.s1417s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,367,283);


(lib.s1418s = function() {
	this.initialize(img.s1418s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,165);


(lib.s1419s = function() {
	this.initialize(img.s1419s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,404,287);


(lib.s14210s = function() {
	this.initialize(img.s14210s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,383,382);


(lib.s1421s = function() {
	this.initialize(img.s1421s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,276,193);


(lib.s1422s = function() {
	this.initialize(img.s1422s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,42);


(lib.s1423s = function() {
	this.initialize(img.s1423s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,636,216);


(lib.s1424s = function() {
	this.initialize(img.s1424s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,181,111);


(lib.s1428s = function() {
	this.initialize(img.s1428s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,157);


(lib.s1429s = function() {
	this.initialize(img.s1429s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,378,378);


(lib.s14310s = function() {
	this.initialize(img.s14310s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,40);


(lib.s14311s = function() {
	this.initialize(img.s14311s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,121);


(lib.s14312s = function() {
	this.initialize(img.s14312s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,269);


(lib.s1431s = function() {
	this.initialize(img.s1431s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,758,1231);


(lib.s1432s = function() {
	this.initialize(img.s1432s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,520,472);


(lib.s1433s = function() {
	this.initialize(img.s1433s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,547,1078);


(lib.s1434s = function() {
	this.initialize(img.s1434s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,217,308);


(lib.s1435s = function() {
	this.initialize(img.s1435s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,202,478);


(lib.s1436s = function() {
	this.initialize(img.s1436s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,63);


(lib.s1437s = function() {
	this.initialize(img.s1437s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,42);


(lib.s1438s = function() {
	this.initialize(img.s1438s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,63);


(lib.s1439s = function() {
	this.initialize(img.s1439s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,84);


(lib.s14411s = function() {
	this.initialize(img.s14411s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,39);


(lib.s14415s = function() {
	this.initialize(img.s14415s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,147);


(lib.s14416s = function() {
	this.initialize(img.s14416s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,135);


(lib.s14417s = function() {
	this.initialize(img.s14417s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,136,139);


(lib.s14418s = function() {
	this.initialize(img.s14418s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,138);


(lib.s14419s = function() {
	this.initialize(img.s14419s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,135);


(lib.s1441s = function() {
	this.initialize(img.s1441s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,651,832);


(lib.s14420s = function() {
	this.initialize(img.s14420s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,139);


(lib.s14421s = function() {
	this.initialize(img.s14421s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,133);


(lib.s14422s = function() {
	this.initialize(img.s14422s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,138);


(lib.s1442s = function() {
	this.initialize(img.s1442s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,171,418);


(lib.s1443s = function() {
	this.initialize(img.s1443s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,71);


(lib.s1444s = function() {
	this.initialize(img.s1444s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,230);


(lib.s1445s = function() {
	this.initialize(img.s1445s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,747,513);


(lib.s1446s = function() {
	this.initialize(img.s1446s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,770,1231);


(lib.s1447s = function() {
	this.initialize(img.s1447s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,188);


(lib.s1448s = function() {
	this.initialize(img.s1448s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,610,171);


(lib.s1445 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1448s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,610,171);


(lib.s1444 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1443s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55,71);


(lib.s1443 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1444s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,135,230);


(lib.s1442 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1442s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,171,418);


(lib.s1441 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1447s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150,188);


(lib.s14311 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AgsnFQgCH0BcGX");
	this.shape.setTransform(0,0,1,1,0,0,0,-4.6,-45.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,11.2,92.8);


(lib.s14310 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s14311s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,86,121);


(lib.s1439 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s14310s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55,40);


(lib.s1438 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1439s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45,84);


(lib.s1437 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1438s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,63);


(lib.s1436 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1437s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48,42);


(lib.s1435 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1436s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,350,63);


(lib.s1434 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3C3C").s().p("AjVh1QAghdDpAaICiEDIlRB0g");
	this.shape.setTransform(43.3,18.2);

	this.instance = new lib.s1435s();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.9,202,479);


(lib.s1433 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1434s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,217,308);


(lib.s1432 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s14312s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,207,269);


(lib.s1431 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3C3C").s().p("AjRi5QB/iiDrBsIA5FqIleCgg");
	this.shape.setTransform(13.4,572.9);

	this.instance = new lib.s1433s();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,0,554.7,1078);


(lib.s1428 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DADADA").s().p("AypAgQA1gdg1giMAkyAAAQA+Abg5Akg");
	this.shape.setTransform(119.4,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,238.8,6.6);


(lib.s1427 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1421s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,276,193);


(lib.s1426 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1428s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,93,157);


(lib.s1425 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s14210s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,383,382);


(lib.s1424 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1429s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,378,378);


(lib.s1423 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1424s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181,111);


(lib.s1422 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1422s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29,42);


(lib.s1421 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1423s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,636,216);


(lib.s14111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1416s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56,48);


(lib.s14110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1415s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,65);


(lib.s1419 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1412s();
	this.instance.setTransform(73,0);

	this.instance_1 = new lib.s1411s();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,148,22);


(lib.s1418 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1413s();

	this.instance_1 = new lib.s1414s();
	this.instance_1.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,553,477);


(lib.s1417 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1418s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,234,165);


(lib.s1416 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCC1A8").s().p("AptJuIAAzbITbAAIAATbg");
	this.shape.setTransform(300.8,196.9);

	this.instance = new lib.s1419s();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,404,287);


(lib.s1415 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1417s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,367,283);


(lib.s1414 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s14110s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29,44);


(lib.s1413 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s14111s();
	this.instance.setTransform(213,106);

	this.instance_1 = new lib.s14112s();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,636,216);


(lib.s1411 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg72BhNMAAAjCZMB3sAAAMAAADCZg");
	this.shape.setTransform(383.1,622.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,766.2,1244.3);


(lib.s14 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_265 = function() {
		this.stop();
		try{app.showBtns()}catch(e){}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(265).call(this.frame_265).wait(1));

	// 图层 12
	this.instance = new lib.s1445();
	this.instance.setTransform(359,922.5,1,1,0,0,0,305,85.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(227).to({_off:false},0).wait(39));

	// 图层 11
	this.instance_1 = new lib.s14411s();
	this.instance_1.setTransform(483,787,0.735,0.735);

	this.instance_2 = new lib.s14411s();
	this.instance_2.setTransform(483,787,0.735,0.735);

	this.instance_3 = new lib.s14411s();
	this.instance_3.setTransform(483,787,0.735,0.735);

	this.instance_4 = new lib.s14411s();
	this.instance_4.setTransform(483,787,0.735,0.735);

	this.instance_5 = new lib.s14411s();
	this.instance_5.setTransform(483,787,0.735,0.735);

	this.instance_6 = new lib.s14411s();
	this.instance_6.setTransform(483,787,0.735,0.735);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1,p:{x:483,y:787}}]},216).to({state:[{t:this.instance_2,p:{x:483,y:787}},{t:this.instance_1,p:{x:517,y:787}}]},2).to({state:[{t:this.instance_3,p:{x:483,y:787}},{t:this.instance_2,p:{x:517,y:787}},{t:this.instance_1,p:{x:550,y:786}}]},2).to({state:[{t:this.instance_4,p:{x:483,y:787}},{t:this.instance_3,p:{x:517,y:787}},{t:this.instance_2,p:{x:550,y:786}},{t:this.instance_1,p:{x:583,y:785}}]},2).to({state:[{t:this.instance_5,p:{x:483}},{t:this.instance_4,p:{x:517,y:787}},{t:this.instance_3,p:{x:550,y:786}},{t:this.instance_2,p:{x:583,y:785}},{t:this.instance_1,p:{x:617,y:784}}]},2).to({state:[{t:this.instance_6},{t:this.instance_5,p:{x:517}},{t:this.instance_4,p:{x:550,y:786}},{t:this.instance_3,p:{x:583,y:785}},{t:this.instance_2,p:{x:617,y:784}},{t:this.instance_1,p:{x:649,y:783}}]},2).wait(40));

	// 图层 10
	this.instance_7 = new lib.s14415s();
	this.instance_7.setTransform(361,603.2,0.735,0.735,-4.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(184).to({_off:false},0).wait(82));

	// 图层 9
	this.instance_8 = new lib.s14416s();
	this.instance_8.setTransform(54.7,635.7,0.735,0.735,-4);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(167).to({_off:false},0).wait(99));

	// 图层 7
	this.instance_9 = new lib.s14417s();
	this.instance_9.setTransform(155,621.3,0.735,0.735,-4.7);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(173).to({_off:false},0).wait(93));

	// 图层 6
	this.instance_10 = new lib.s14418s();
	this.instance_10.setTransform(253,617.8,0.735,0.735,-7.2);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(179).to({_off:false},0).wait(87));

	// 图层 5
	this.instance_11 = new lib.s14419s();
	this.instance_11.setTransform(57.7,761.4,0.735,0.735,-1.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(195).to({_off:false},0).wait(71));

	// 图层 4
	this.instance_12 = new lib.s14420s();
	this.instance_12.setTransform(157.4,752.1,0.735,0.735,-5.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(201).to({_off:false},0).wait(65));

	// 图层 3
	this.instance_13 = new lib.s14421s();
	this.instance_13.setTransform(255.2,751.2,0.735,0.735,-4.7);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(207).to({_off:false},0).wait(59));

	// 图层 2
	this.instance_14 = new lib.s14422s();
	this.instance_14.setTransform(359.8,734.6,0.735,0.735,-5);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(212).to({_off:false},0).wait(54));

	// 人
	this.instance_15 = new lib.s1441s();
	this.instance_15.setTransform(174,105);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(157).to({_off:false},0).wait(109));

	// 手指
	this.instance_16 = new lib.s1444();
	this.instance_16.setTransform(161.5,739.5,1,1,0,0,0,27.5,35.5);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(157).to({_off:false},0).to({regY:35.6,rotation:-9.9,x:178.8,y:737.6},4).to({x:180},1).to({regY:35.5,rotation:0,x:161.5,y:739.5},4).to({regY:35.6,rotation:-9.9,x:178.8,y:737.6},4).to({x:180},1).to({regY:35.5,rotation:0,x:161.5,y:739.5},3).to({regY:35.6,rotation:-9.9,x:178.8,y:737.6},4).to({x:180},1).to({regY:35.5,rotation:0,x:161.5,y:739.5},4).wait(13).to({regY:35.6,rotation:-9.9,x:178.8,y:737.6},3).to({x:180},1).to({regY:35.5,rotation:0,x:155.1,y:739.5},3).to({regY:35.6,rotation:-9.9,x:178.8,y:737.6},4).to({x:180},1).to({regY:35.5,rotation:0,x:161.5,y:739.5},3).to({regY:35.6,rotation:-9.9,x:178.8,y:737.6},4).to({x:180},1).to({regY:35.5,rotation:0,x:161.5,y:739.5},4).to({regY:35.6,rotation:-9.9,x:178.8,y:737.6},4).to({x:180},1).to({regY:35.5,rotation:0,x:161.5,y:739.5},3).to({regY:35.6,rotation:-9.9,x:178.8,y:737.6},5).to({x:180},1).to({regY:35.5,rotation:0,x:161.5,y:739.5},4).to({regY:35.6,rotation:-9.9,x:178.8,y:737.6},4).to({x:180},1).to({regY:35.5,rotation:0,x:161.5,y:739.5},3).to({regY:35.6,rotation:-9.9,x:178.8,y:737.6},3).to({x:180},1).to({regY:35.5,rotation:0,x:161.5,y:739.5},4).to({regY:35.6,rotation:-9.9,x:178.8,y:737.6},5).to({x:180},1).to({regY:35.5,rotation:0,x:161.5,y:739.5},4).wait(2));

	// 手
	this.instance_17 = new lib.s1443();
	this.instance_17.setTransform(174.5,707,1,1,0,0,0,79.5,35);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(157).to({_off:false},0).to({rotation:-6.2,x:188.3,y:703.8},4).to({regX:79.6,rotation:-13.4},1).to({regX:79.5,rotation:0,x:174.5,y:707},4).to({rotation:-6.2,x:188.3,y:703.8},4).to({regX:79.7,rotation:-13.1,x:188.5},1).to({regX:79.5,rotation:0,x:174.5,y:707},3).to({rotation:-6.2,x:188.3,y:703.8},4).to({regX:79.6,rotation:-10.4},1).to({regX:79.5,rotation:0,x:174.5,y:707},4).wait(13).to({rotation:-6.2,x:188.3,y:703.8},3).to({regX:79.6,rotation:-10.4},1).to({regX:79.5,rotation:0,x:168.1,y:707},3).to({rotation:-6.2,x:188.3,y:703.8},4).to({regX:79.6,regY:35.1,rotation:-12.9,y:703.9},1).to({regX:79.5,regY:35,rotation:0,x:174.5,y:707},3).to({rotation:-6.2,x:188.3,y:703.8},4).to({regX:79.6,rotation:-10.4},1).to({regX:79.5,rotation:0,x:174.5,y:707},4).to({rotation:-6.2,x:188.3,y:703.8},4).to({regX:79.6,rotation:-10.4},1).to({regX:79.5,rotation:0,x:174.5,y:707},3).to({rotation:-6.2,x:188.3,y:703.8},5).to({regX:79.7,rotation:-13.1,x:188.5},1).to({regX:79.5,rotation:0,x:174.5,y:707},4).to({rotation:-6.2,x:188.3,y:703.8},4).to({regX:79.6,rotation:-10.4},1).to({regX:79.5,rotation:0,x:174.5,y:707},3).to({rotation:-6.2,x:188.3,y:703.8},3).to({regX:79.7,rotation:-13.1,x:188.5},1).to({regX:79.5,rotation:0,x:174.5,y:707},4).to({rotation:-6.2,x:188.3,y:703.8},5).to({regX:79.6,rotation:-10.4},1).to({regX:79.5,rotation:0,x:174.5,y:707},4).wait(2));

	// 下胳膊
	this.instance_18 = new lib.s1442();
	this.instance_18.setTransform(234.1,528.2,1,1,0,0,0,95.1,48.2);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(157).to({_off:false},0).to({x:249.3,y:525.8},4).to({x:234.1,y:528.2},5).to({x:249.3,y:525.8},4).to({x:234.1,y:528.2},4).to({x:249.3,y:525.8},4).to({x:234.1,y:528.2},5).wait(13).to({x:249.3,y:525.8},3).to({x:227.7,y:528.2},4).to({x:249.3,y:525.8},4).to({x:234.1,y:528.2},4).to({x:249.3,y:525.8},4).to({x:234.1,y:528.2},5).to({x:249.3,y:525.8},4).to({x:234.1,y:528.2},4).to({x:249.3,y:525.8},5).to({x:234.1,y:528.2},5).to({x:249.3,y:525.8},4).to({x:234.1,y:528.2},4).to({x:249.3,y:525.8},3).to({x:234.1,y:528.2},5).to({x:249.3,y:525.8},5).to({x:234.1,y:528.2},5).wait(2));

	// 上胳膊
	this.instance_19 = new lib.s1441();
	this.instance_19.setTransform(332.2,419.8,1,1,0,0,0,106.2,18.8);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(157).to({_off:false},0).to({rotation:-5.2,y:418.2},4).to({rotation:0,y:419.8},5).to({rotation:-5.2,y:418.2},4).to({rotation:0,y:419.8},4).to({rotation:-5.2,y:418.2},4).to({rotation:0,y:419.8},5).wait(13).to({rotation:-5.2,y:418.2},3).to({regY:18.9,rotation:2.9,y:419.9},4).to({regY:18.8,rotation:-5.2,y:418.2},4).to({rotation:0,y:419.8},4).to({rotation:-5.2,y:418.2},4).to({rotation:0,y:419.8},5).to({rotation:-5.2,y:418.2},4).to({rotation:0,y:419.8},4).to({rotation:-5.2,y:418.2},5).to({rotation:0,y:419.8},5).to({rotation:-5.2,y:418.2},4).to({rotation:0,y:419.8},4).to({rotation:-5.2,y:418.2},3).to({rotation:0,y:419.8},5).to({rotation:-5.2,y:418.2},5).to({rotation:0,y:419.8},5).wait(2));

	// 花
	this.instance_20 = new lib.s1445s();
	this.instance_20.setTransform(18,555);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(157).to({_off:false},0).wait(109));

	// 背4
	this.instance_21 = new lib.s1446s();
	this.instance_21.setTransform(-2,-2,1.01,1.01);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(157).to({_off:false},0).wait(109));

	// 腿
	this.instance_22 = new lib.s1434();
	this.instance_22.setTransform(471.7,725,1,1,20,0,0,24.1,-6);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(100).to({_off:false},0).wait(1).to({regX:101,regY:238.5,rotation:18.3,x:444.9,y:981},0).wait(1).to({rotation:15.9,x:423.5,y:980.4},0).wait(1).to({rotation:12.5,x:393.7,y:978.9},0).wait(1).to({rotation:7.5,x:349.8,y:975},0).wait(1).to({regX:24,regY:-6,rotation:0,x:206,y:721},0).to({_off:true},52).wait(109));

	// 下胳膊
	this.instance_23 = new lib.s1433();
	this.instance_23.setTransform(788.9,774.6,1,1,0,0,0,193.3,272.4);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(100).to({_off:false},0).wait(1).to({regX:108.5,regY:154,x:685.5,y:656},0).wait(1).to({x:656.8,y:655.6},0).wait(1).to({x:612.9,y:655.1},0).wait(1).to({x:551,y:654.3},0).wait(1).to({regX:193.3,regY:272.4,x:531.3,y:771.4},0).wait(2).to({regX:108.5,regY:154,rotation:-1.6,x:446.5,y:658.2},0).wait(1).to({rotation:-4.2,x:446.6,y:667.3},0).wait(1).to({regX:193.3,regY:272.4,rotation:-8.2,x:548.1,y:786.6},0).to({_off:true},48).wait(109));

	// 上胳膊
	this.instance_24 = new lib.s1432();
	this.instance_24.setTransform(935.3,570.1,1,1,0,0,0,178.7,28.9);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(100).to({_off:false},0).wait(1).to({regX:103.5,regY:134.5,x:843.7,y:675.5},0).wait(1).to({x:815.7,y:675.1},0).wait(1).to({x:772.5,y:674.6},0).wait(1).to({x:706.8,y:673.8},0).wait(1).to({regX:178.7,regY:28.9,x:677.7,y:566.9},0).wait(2).to({regX:103.5,regY:134.5,rotation:-1.1,x:604.6,y:673.9},0).wait(1).to({rotation:-2.9,x:607.9,y:676.2},0).wait(1).to({regX:178.8,regY:29,rotation:-5.7,x:677.8,y:567},0).to({_off:true},48).wait(109));

	// 图层 33
	this.instance_25 = new lib.s14311();
	this.instance_25.setTransform(604.8,460,1,1.016,0,-10.1,0);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(100).to({_off:false},0).wait(1).to({regX:4.6,regY:45.4,skewX:-10.2,x:602.2,y:505.4},0).wait(1).to({scaleY:1.02,skewX:-10.3,x:576.5},0).wait(1).to({skewX:-10.5,x:536.8},0).wait(1).to({scaleY:1.02,skewX:-10.9,x:471.5},0).wait(1).to({regX:0,regY:0,scaleY:1.02,skewX:-11.5,x:347.2,y:460},0).wait(1).to({scaleY:1.15,skewX:-13.5,x:347.1},0).wait(1).to({regX:4.6,regY:45.4,scaleY:1.22,skewX:-10.1,x:361.4,y:514.5},0).wait(1).to({scaleY:1.35,skewX:-4.1,x:356.1,y:520.9},0).wait(1).to({regX:0.1,regY:0,scaleY:1.55,skewX:5.9,x:347.2,y:460},0).to({_off:true},48).wait(109));

	// 人
	this.instance_26 = new lib.s1431();
	this.instance_26.setTransform(737.1,724.2,1,1,0,0,0,273.5,539);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(100).to({_off:false},0).wait(1).to({regX:269.7,x:715.2,y:724},0).wait(1).to({x:690.9,y:723.7},0).wait(1).to({x:652.2,y:723.2},0).wait(1).to({x:587.1,y:722.4},0).wait(1).to({regX:273.5,x:479.5,y:721},0).to({_off:true},52).wait(109));

	// 花5
	this.instance_27 = new lib.s1439();
	this.instance_27.setTransform(328,241.6,1,1,0,0,0,27.5,20);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(108).to({_off:false},0).to({guide:{path:[327.9,241.7,199.9,-109.3,149.7,117.9,99.6,345,127.3,1150.3]}},18).to({_off:true},31).wait(109));

	// 花6
	this.instance_28 = new lib.s14310();
	this.instance_28.setTransform(336,252,1,1,0,0,0,43,60.5);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(108).to({_off:false},0).to({guide:{path:[335.9,252.1,118.7,-265.3,-47.1,599.1]}},13).to({_off:true},36).wait(109));

	// 花4
	this.instance_29 = new lib.s1438();
	this.instance_29.setTransform(323.8,230.6,1,1,0,0,0,22.5,42);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(108).to({_off:false},0).to({regY:42.1,rotation:135,guide:{path:[323.7,230.8,336.3,-227.3,395.8,28.6,455.2,284.4,561.5,1254.3]}},18).to({_off:true},31).wait(109));

	// 花3
	this.instance_30 = new lib.s1437();
	this.instance_30.setTransform(342.7,260.1,1,1,0,0,0,12.5,31.5);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(108).to({_off:false},0).to({regX:17.6,regY:22.5,rotation:-120,guide:{path:[342.8,260.2,516.8,-140.8,622.1,115.5,727.4,371.8,763.9,1285.5]}},18).to({_off:true},31).wait(109));

	// 花2
	this.instance_31 = new lib.s1436();
	this.instance_31.setTransform(318.7,213.6,1,1,0,0,0,24,21);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(108).to({_off:false},0).wait(1).to({rotation:-1.3,x:291.1,y:193.1},0).wait(1).to({rotation:-3.6,x:241.2,y:156},0).wait(1).to({rotation:-6.5,x:179.8,y:110.3},0).wait(1).to({rotation:-10.2,x:100.7,y:51.7},0).wait(1).to({regY:20.9,rotation:-15,x:-0.5,y:-23.5},0).to({_off:true},44).wait(109));

	// 花
	this.instance_32 = new lib.s1435();
	this.instance_32.setTransform(329.5,235.2,1,1,0,0,0,323.2,25.6);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(108).to({_off:false},0).to({regX:287.7,regY:49.8,rotation:11.3,x:417.3,y:4.3},5).to({regX:287.9,regY:49.6,rotation:43.7,x:457.2,y:-12.4},2).to({regX:287.8,rotation:111.2,x:635.7,y:514.8},6).to({_off:true},36).wait(109));

	// 电脑桌
	this.instance_33 = new lib.s1432s();
	this.instance_33.setTransform(-16,762);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(100).to({_off:false},0).to({_off:true},57).wait(109));

	// 背3
	this.instance_34 = new lib.s1431s();
	this.instance_34.setTransform(2,3);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(100).to({_off:false},0).to({_off:true},57).wait(109));

	// 叮
	this.instance_35 = new lib.s1427();
	this.instance_35.setTransform(599,722.9,1,1,0,0,0,138,96.5);
	this.instance_35.alpha = 0.23;
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(71).to({_off:false},0).wait(1).to({y:724.5,alpha:1},0).to({_off:true},28).wait(166));

	// 耳朵
	this.instance_36 = new lib.s1426();
	this.instance_36.setTransform(-228.6,905.5,1,1,0,0,0,0,78.5);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(60).to({_off:false},0).to({x:229},4).wait(6).to({regX:0.1,rotation:-2.2,x:229.1},2).to({rotation:-1},2).to({regY:78.6,rotation:-2.9,y:905.6},2).to({rotation:-1},2).wait(4).to({rotation:-0.7},0).to({rotation:-1.7},2).to({regY:78.5,rotation:0,y:905.5},1).to({regY:78.7,rotation:-2.1,y:905.7},2).to({_off:true},13).wait(166));

	// 人
	this.instance_37 = new lib.s1424();
	this.instance_37.setTransform(-185.6,905,1,1,0,0,0,189,189);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(60).to({_off:false},0).to({x:272},4).to({_off:true},36).wait(166));

	// 背3
	this.instance_38 = new lib.s1425();
	this.instance_38.setTransform(-185.1,905,1,1,0,0,0,191.5,191);
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(60).to({_off:false},0).to({x:272.5},4).to({_off:true},36).wait(166));

	// 鼠标
	this.instance_39 = new lib.s1422();
	this.instance_39.setTransform(-139.1,627,1,1,0,0,0,14.5,21);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(60).to({_off:false},0).wait(1).to({x:203.5},0).wait(1).to({x:393.7},0).wait(1).to({x:506.3},0).wait(1).to({x:564.5},0).wait(21).to({rotation:-15,x:414.9,y:607.9},5).wait(1).to({regX:14.6,scaleX:1.19,scaleY:1.19,x:415,y:607.8},2).wait(1).to({regX:14.7,regY:21.1,scaleX:0.93,scaleY:0.93,x:415.1,y:607.9},0).to({_off:true},6).wait(166));

	// 确定框
	this.instance_40 = new lib.s1423();
	this.instance_40.setTransform(390.5,564.5,1,1,0,0,0,90.5,55.5);
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(72).to({_off:false},0).to({_off:true},28).wait(166));

	// 图层 20
	this.instance_41 = new lib.s1428();
	this.instance_41.setTransform(-161.7,576.6,1,1,0,0,0,238.8,3.2);
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(60).to({_off:false},0).wait(1).to({regX:119.4,regY:3.3,x:51.9,y:576.7},0).wait(1).to({x:248.1},0).wait(1).to({x:369},0).wait(1).to({regX:238.8,regY:3.2,x:542,y:576.6},0).to({regX:241.9,scaleX:0,x:543.8},7).to({_off:true},29).wait(166));

	// 桌面
	this.instance_42 = new lib.s1421();
	this.instance_42.setTransform(-316.6,550,1,1,0,0,0,318,108);
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(60).to({_off:false},0).wait(1).to({x:13.6},0).wait(1).to({x:213.9},0).wait(1).to({x:330.8},0).wait(1).to({x:387},0).to({_off:true},36).wait(166));

	// 键盘手指
	this.instance_43 = new lib.s14111();
	this.instance_43.setTransform(392,474,1,1,0,0,0,50,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(1).to({regX:50.1,rotation:5.2,x:391.1,y:467.5},0).wait(1).to({rotation:-3.8,x:384.6,y:471.6},0).wait(1).to({rotation:5.2,x:375.1,y:474},0).wait(1).to({rotation:2.4,x:383.1,y:474.1},0).wait(1).to({rotation:-4.1,x:388.6,y:476.6},0).wait(1).to({regX:50.2,rotation:2.6,x:401.3,y:465.6},0).wait(1).to({regY:7.1,rotation:-2.6,x:394.7,y:475.2},0).wait(24).to({regX:50,regY:7,rotation:0,x:392,y:474},0).wait(1).to({regX:50.1,rotation:5.2,x:391.1,y:467.5},0).wait(1).to({rotation:-3.8,x:384.6,y:471.6},0).wait(1).to({rotation:5.2,x:375.1,y:474},0).wait(1).to({rotation:2.4,x:383.1,y:474.1},0).wait(1).to({rotation:-4.1,x:388.6,y:476.6},0).wait(1).to({regX:50.2,rotation:2.6,x:401.3,y:465.6},0).wait(1).to({regY:7.1,rotation:-2.6,x:394.7,y:475.2},0).to({_off:true},13).wait(215));

	// 键盘手
	this.instance_44 = new lib.s14110();
	this.instance_44.setTransform(414.5,494.5,1,1,0,0,0,64.5,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_44).to({x:397},3).to({x:416.5},3).wait(25).to({x:414.5},0).to({x:397},3).to({x:416.5},3).to({_off:true},14).wait(215));

	// 闭眼
	this.instance_45 = new lib.s1419();
	this.instance_45.setTransform(373,219,1,1,0,0,0,74,11);
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(8).to({_off:false},0).to({_off:true},2).wait(25).to({_off:false},0).to({_off:true},2).wait(229));

	// 背1
	this.instance_46 = new lib.s1418();
	this.instance_46.setTransform(314.5,290.5,1,1,0,0,0,276.5,238.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_46).to({_off:true},51).wait(215));

	// 鼠标手指
	this.instance_47 = new lib.s1417();
	this.instance_47.setTransform(1028.1,736.5,1,1,0,0,0,117,82.5);
	this.instance_47._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(17).to({_off:false},0).wait(1).to({x:743.2},0).wait(1).to({x:600.3},0).wait(1).to({x:540},0).wait(1).to({x:521,y:741.5},3).to({x:539,y:731.5},4).to({x:534,y:738.5},3).wait(2).to({x:533,y:733.5},0).wait(1).to({x:532,y:738.5},0).wait(1).to({x:533,y:733.5},0).wait(3).to({x:540,y:736.5},0).wait(1).to({x:527,y:741.5},3).to({x:539,y:731.5},4).wait(5).to({x:1028.8,y:271.2},0).to({x:540},3).to({x:515,y:272.9},3).to({x:541,y:269.2},3).wait(1).to({x:533,y:268.2},0).wait(1).to({x:532,y:272.2},0).wait(1).to({x:533,y:268.2},0).wait(17).to({x:536.2,y:267.6},0).to({x:532.4,y:270},5).to({x:515,y:272.9},5).wait(2).to({x:524.6},0).wait(1).to({x:533,y:268.2},0).wait(1).to({x:532,y:272.2},0).to({_off:true},6).wait(166));

	// 鼠标手
	this.instance_48 = new lib.s1415();
	this.instance_48.setTransform(968.6,698.5,1,1,0,0,0,183.5,141.5);
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(17).to({_off:false},0).wait(1).to({x:688.2},0).wait(1).to({x:542.5},0).wait(1).to({x:480.5},0).wait(1).to({x:462.5,y:699.5},3).to({x:481.5,y:695.5},4).to({x:474.5,y:698.5},3).wait(3).to({y:699.5},0).wait(1).to({y:698.5},0).wait(3).to({x:480.5},0).wait(1).to({x:468.5,y:699.5},3).to({x:481.5,y:695.5},4).wait(5).to({x:969.3,y:233.2},0).to({x:480.5},3).to({x:456.5,y:230.9},3).to({x:483.5,y:233.2},3).wait(1).to({x:474.5},0).wait(19).to({x:477.1},0).to({x:474.5},5).to({x:456.5,y:230.9},5).wait(2).to({x:466.1},0).wait(1).to({x:474.5,y:233.2},0).wait(1).to({_off:true},6).wait(166));

	// 背2
	this.instance_49 = new lib.s1416();
	this.instance_49.setTransform(963.1,696.5,1,1,0,0,0,202,143.5);
	this.instance_49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(17).to({_off:false},0).wait(1).to({x:670.5},0).wait(1).to({x:532.1},0).wait(1).to({x:475},0).wait(31).to({x:963.8,y:231.2},0).to({x:475},3).to({_off:true},46).wait(166));

	// 箭头
	this.instance_50 = new lib.s1414();
	this.instance_50.setTransform(-247.7,1068,1,1,0,0,0,14.5,22);
	this.instance_50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(27).to({_off:false},0).wait(1).to({x:66.4},0).wait(1).to({x:268.7},0).wait(1).to({x:383.8},0).wait(1).to({x:448.5},0).wait(1).to({x:520.2,y:1038.9},0).wait(1).to({x:547.9,y:1027.7},0).wait(1).to({x:559.6,y:1023},0).wait(4).to({scaleX:1.23,scaleY:1.23},0).wait(1).to({scaleX:1,scaleY:1},0).to({_off:true},12).wait(215));

	// 背3
	this.instance_51 = new lib.s1413();
	this.instance_51.setTransform(-314.2,988,1,1,0,0,0,318,108);
	this.instance_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(27).to({_off:false},0).wait(1).to({x:31.8},0).wait(1).to({x:222.2},0).wait(1).to({x:320.6},0).wait(1).to({x:382},0).to({_off:true},20).wait(215));

	// 图层 8
	this.instance_52 = new lib.s1411();
	this.instance_52.setTransform(383.1,622.1,1,1,0,0,0,383.1,622.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_52).to({_off:true},100).wait(166));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,766.2,1244.3);


// stage content:



(lib.qj_s14 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s14();
	this.instance.setTransform(383.1,622.1,1,1,0,0,0,383.1,622.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(375,610,766.2,1244.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;