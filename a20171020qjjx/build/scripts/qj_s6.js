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
		{src:"images/cv/s615.png", id:"s615"},
		{src:"images/cv/s616.png", id:"s616"},
		{src:"images/cv/s617.png", id:"s617"},
		{src:"images/cv/s61bg.png", id:"s61bg"},
		{src:"images/cv/s61deng.png", id:"s61deng"},
		{src:"images/cv/s61xiezi1.png", id:"s61xiezi1"},
		{src:"images/cv/s61xiezi2.png", id:"s61xiezi2"},
		{src:"images/cv/s61xiezi3.png", id:"s61xiezi3"},
		{src:"images/cv/s61zhujiao.png", id:"s61zhujiao"},
		{src:"images/cv/s62bg.png", id:"s62bg"},
		{src:"images/cv/s62manbody.png", id:"s62manbody"},
		{src:"images/cv/s62maneye.png", id:"s62maneye"},
		{src:"images/cv/s62manwenjianjia.png", id:"s62manwenjianjia"},
		{src:"images/cv/s62manyoushou.png", id:"s62manyoushou"},
		{src:"images/cv/s62manzuoshou.png", id:"s62manzuoshou"},
		{src:"images/cv/s63bgdown.png", id:"s63bgdown"},
		{src:"images/cv/s63bgup.png", id:"s63bgup"},
		{src:"images/cv/s63deng.png", id:"s63deng"},
		{src:"images/cv/s63ding.png", id:"s63ding"},
		{src:"images/cv/s63kuang.png", id:"s63kuang"},
		{src:"images/cv/s63maneye.png", id:"s63maneye"},
		{src:"images/cv/s63manlian.png", id:"s63manlian"},
		{src:"images/cv/s63mantoufa.png", id:"s63mantoufa"},
		{src:"images/cv/s63manyanzhu.png", id:"s63manyanzhu"},
		{src:"images/cv/s64bg.jpg", id:"s64bg"},
		{src:"images/cv/s64manshenti.png", id:"s64manshenti"},
		{src:"images/cv/s64manshou.png", id:"s64manshou"},
		{src:"images/cv/s64mantou.png", id:"s64mantou"},
		{src:"images/cv/s64manzui.png", id:"s64manzui"},
		{src:"images/cv/s64wenjianjia.png", id:"s64wenjianjia"},
		{src:"images/cv/s64you1.png", id:"s64you1"},
		{src:"images/cv/s64you2.png", id:"s64you2"},
		{src:"images/cv/s64you3.png", id:"s64you3"},
		{src:"images/cv/s64you.png", id:"s64you"},
		{src:"images/cv/s64zuo1.png", id:"s64zuo1"},
		{src:"images/cv/s64zuo2.png", id:"s64zuo2"},
		{src:"images/cv/s64zuo3.png", id:"s64zuo3"},
		{src:"images/cv/s64zuo.png", id:"s64zuo"},
		{src:"images/cv/s65man.png", id:"s65man"},
		{src:"images/cv/s65bgup.png", id:"s65bgup"},
		{src:"images/cv/s65bg.png", id:"s65bg"},
		{src:"images/cv/s65yezi1.png", id:"s65yezi1"},
		{src:"images/cv/s65yezi2.png", id:"s65yezi2"},
		{src:"images/cv/s65yezi3.png", id:"s65yezi3"},
		{src:"images/cv/s65yezi4.png", id:"s65yezi4"},
		{src:"images/cv/s65yezi5.png", id:"s65yezi5"},
		{src:"images/cv/s65yezi6.png", id:"s65yezi6"},
		{src:"images/cv/s65yezi7.png", id:"s65yezi7"},
		{src:"images/cv/s65yezi8.png", id:"s65yezi8"},
		{src:"images/cv/s65zi.png", id:"s65zi"}
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


(lib.s615 = function() {
	this.initialize(img.s615);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,290,427);


(lib.s616 = function() {
	this.initialize(img.s616);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,290,427);


(lib.s617 = function() {
	this.initialize(img.s617);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,290,427);


(lib.s61bg = function() {
	this.initialize(img.s61bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s61deng = function() {
	this.initialize(img.s61deng);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,26);


(lib.s61xiezi1 = function() {
	this.initialize(img.s61xiezi1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,45);


(lib.s61xiezi2 = function() {
	this.initialize(img.s61xiezi2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,52);


(lib.s61xiezi3 = function() {
	this.initialize(img.s61xiezi3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,59);


(lib.s61zhujiao = function() {
	this.initialize(img.s61zhujiao);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,767);


(lib.s62bg = function() {
	this.initialize(img.s62bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s62manbody = function() {
	this.initialize(img.s62manbody);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,660,1076);


(lib.s62maneye = function() {
	this.initialize(img.s62maneye);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,14);


(lib.s62manwenjianjia = function() {
	this.initialize(img.s62manwenjianjia);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,433);


(lib.s62manyoushou = function() {
	this.initialize(img.s62manyoushou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,306,543);


(lib.s62manzuoshou = function() {
	this.initialize(img.s62manzuoshou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,352,213);


(lib.s63bgdown = function() {
	this.initialize(img.s63bgdown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,549);


(lib.s63bgup = function() {
	this.initialize(img.s63bgup);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,722,407);


(lib.s63deng = function() {
	this.initialize(img.s63deng);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,26);


(lib.s63ding = function() {
	this.initialize(img.s63ding);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,127);


(lib.s63kuang = function() {
	this.initialize(img.s63kuang);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,732,418);


(lib.s63maneye = function() {
	this.initialize(img.s63maneye);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,429,166);


(lib.s63manlian = function() {
	this.initialize(img.s63manlian);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,310);


(lib.s63mantoufa = function() {
	this.initialize(img.s63mantoufa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,400);


(lib.s63manyanzhu = function() {
	this.initialize(img.s63manyanzhu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,267,19);


(lib.s64bg = function() {
	this.initialize(img.s64bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s64manshenti = function() {
	this.initialize(img.s64manshenti);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,617,772);


(lib.s64manshou = function() {
	this.initialize(img.s64manshou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,245);


(lib.s64mantou = function() {
	this.initialize(img.s64mantou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,282,330);


(lib.s64manzui = function() {
	this.initialize(img.s64manzui);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,89);


(lib.s64wenjianjia = function() {
	this.initialize(img.s64wenjianjia);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,383,430);


(lib.s64you1 = function() {
	this.initialize(img.s64you1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,129);


(lib.s64you2 = function() {
	this.initialize(img.s64you2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,125);


(lib.s64you3 = function() {
	this.initialize(img.s64you3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,122);


(lib.s64you = function() {
	this.initialize(img.s64you);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,355,969);


(lib.s64zuo1 = function() {
	this.initialize(img.s64zuo1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,123);


(lib.s64zuo2 = function() {
	this.initialize(img.s64zuo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,120);


(lib.s64zuo3 = function() {
	this.initialize(img.s64zuo3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,111);


(lib.s64zuo = function() {
	this.initialize(img.s64zuo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,481,975);


(lib.s65man = function() {
	this.initialize(img.s65man);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,572,306);


(lib.s65bgup = function() {
	this.initialize(img.s65bgup);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,960);


(lib.s65bg = function() {
	this.initialize(img.s65bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s65yezi1 = function() {
	this.initialize(img.s65yezi1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,24);


(lib.s65yezi2 = function() {
	this.initialize(img.s65yezi2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,31);


(lib.s65yezi3 = function() {
	this.initialize(img.s65yezi3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,60);


(lib.s65yezi4 = function() {
	this.initialize(img.s65yezi4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,30);


(lib.s65yezi5 = function() {
	this.initialize(img.s65yezi5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,75);


(lib.s65yezi6 = function() {
	this.initialize(img.s65yezi6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,31);


(lib.s65yezi7 = function() {
	this.initialize(img.s65yezi7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,19);


(lib.s65yezi8 = function() {
	this.initialize(img.s65yezi8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,17);


(lib.s65zi = function() {
	this.initialize(img.s65zi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,951,480);


(lib.s65zi_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s65zi();
	this.instance.setTransform(-332.8,-166.6,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-332.8,-166.6,665.7,336);


(lib.s65yezi8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s65yezi8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29,17);


(lib.s65yezi7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s65yezi7();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45,19);


(lib.s65yezi6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s65yezi6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34,31);


(lib.s65yezi5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s65yezi5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,75);


(lib.s65yezi4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s65yezi4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51,30);


(lib.s65yezi3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s65yezi3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,60);


(lib.s65yezi2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s65yezi2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34,31);


(lib.s65yezi1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s65yezi1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,24);


(lib.s65bgup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s65bgup();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,960);


(lib.s64zuo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// s6-4 zuo lian 1
	this.instance = new lib.s64zuo3();
	this.instance.setTransform(208,124);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},7).wait(43));

	// s6-4 zuo lian 2
	this.instance_1 = new lib.s64zuo2();
	this.instance_1.setTransform(210,115);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({_off:true},2).wait(41));

	// s6-4 zuo lian 3
	this.instance_2 = new lib.s64zuo1();
	this.instance_2.setTransform(210,112);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(41));

	// 图层 1
	this.instance_3 = new lib.s64zuo();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,481,975);


(lib.s64you_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// s6-4 you lian 1
	this.instance = new lib.s64you3();
	this.instance.setTransform(111,115);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},7).wait(43));

	// s6-4 you lian 2
	this.instance_1 = new lib.s64you2();
	this.instance_1.setTransform(110,112);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({_off:true},2).wait(41));

	// s6-4 you lian 3
	this.instance_2 = new lib.s64you1();
	this.instance_2.setTransform(111,108);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(41));

	// 图层 1
	this.instance_3 = new lib.s64you();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,355,969);


(lib.s64wenjianjai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s64wenjianjia();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,383,430);


(lib.s64manzui_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s64manzui();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94,89);


(lib.s64manshou_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s64manshou();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,620,245);


(lib.s63yanzhu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s63manyanzhu();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,267,19);


(lib.s63suduxian = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cm_line();
	this.instance.setTransform(0,0,0.9,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1080,558.6);


(lib.s63mantoufa_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s63mantoufa();
	this.instance.setTransform(-375,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-375,-200,750,400);


(lib.s63lian = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s63manlian();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,591,310);


(lib.s63eye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s63maneye();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,429,166);


(lib.s63ding_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s63ding();
	this.instance.setTransform(-80,-63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-63.5,160,127);


(lib.s62manzuoshou_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s62manzuoshou();
	this.instance.setTransform(-176,-106.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176,-106.5,352,213);


(lib.s62manyoushou_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s62manyoushou();
	this.instance.setTransform(-153,-271.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153,-271.5,306,543);


(lib.s62manwenjianjia_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s62manwenjianjia();
	this.instance.setTransform(-167,-216.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167,-216.5,334,433);


(lib.s62maneye_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s62maneye();
	this.instance.setTransform(-61.5,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-7,123,14);


(lib.s61zhujiaojiao = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.s61xiezi3();
	this.instance.setTransform(-24,-36);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({_off:true},4).wait(4));

	// 图层 2
	this.instance_1 = new lib.s61xiezi2();
	this.instance_1.setTransform(-24,-30);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({_off:true},2).wait(4).to({_off:false},0).to({_off:true},2).wait(2));

	// 图层 1
	this.instance_2 = new lib.s61xiezi1();
	this.instance_2.setTransform(-26,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},2).wait(8).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-23,52,45);


(lib.s64mantou_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// s6-4 man zui
	this.instance = new lib.s64manzui_1();
	this.instance.setTransform(141,307.2,1,1,0,0,0,47,81.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:47.1,scaleX:1.05,x:141.1},9).to({regX:47,scaleX:1,x:141},10).wait(1));

	// 图层 1
	this.instance_1 = new lib.s64mantou();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,282,330);


(lib.s63tu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// s6-3 man toufa 
	this.instance = new lib.s63mantoufa_1();
	this.instance.setTransform(375,607);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(37));

	// s6-3 man yanzhu
	this.instance_1 = new lib.s63manyanzhu();
	this.instance_1.setTransform(246,680);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(37));

	// s6-3 man eye
	this.instance_2 = new lib.s63maneye();
	this.instance_2.setTransform(165,594);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(37));

	// s6-3 man lian
	this.instance_3 = new lib.s63manlian();
	this.instance_3.setTransform(81,496);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(37));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,407,750,400);


(lib.s63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// s6-3 kuang
	this.instance = new lib.s63kuang();
	this.instance.setTransform(9,398);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(37));

	// 图层 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg4AAa7MgAUgwkMBwogKWMAABA//g");
	mask.setTransform(374.6,608.8);

	// 图层 3
	this.instance_1 = new lib.s63suduxian();
	this.instance_1.setTransform(360,641.3,0,0.001,0,0,0,436.9,333.2);
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_1.cache(-2,-2,1084,563);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({regX:540,regY:279.3,scaleX:1,scaleY:1},4).wait(1).to({x:364},0).wait(1).to({x:358},0).wait(1).to({x:364},0).wait(1).to({y:633.3},0).wait(1).to({y:637.3},0).wait(1).to({x:356},0).wait(1).to({x:362,y:635.3},0).wait(1).to({x:360,y:639.3},0).wait(1).to({y:641.3},0).wait(1).to({x:364},0).wait(1).to({x:358},0).wait(1).to({x:364},0).wait(1).to({y:633.3},0).wait(1).to({y:637.3},0).wait(1).to({x:356},0).wait(1).to({x:362,y:635.3},0).wait(1).to({x:360,y:639.3},0).wait(1).to({y:641.3},0).wait(1).to({x:364},0).wait(1).to({x:358},0).wait(1).to({x:364},0).wait(1).to({y:633.3},0).wait(1).to({y:637.3},0).wait(1));

	// 图层 2
	this.instance_2 = new lib.s63tu();
	this.instance_2.setTransform(375,610,1,1,0,0,0,375,610);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({scaleX:1.4,scaleY:1.4,y:566,alpha:0},6).wait(22));

	// s6-3 man toufa 
	this.instance_3 = new lib.s63mantoufa_1();
	this.instance_3.setTransform(375,607);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({x:379},0).wait(1).to({x:371},0).wait(1).to({y:603},0).wait(1).to({x:377},0).wait(1).to({x:373,y:609},0).wait(1).to({x:379,y:607},0).wait(1).to({x:371},0).wait(1).to({x:375},0).wait(20));

	// s6-3 man yanzhu
	this.instance_4 = new lib.s63yanzhu();
	this.instance_4.setTransform(379.5,689.5,1,1,0,0,0,133.5,9.5);

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({x:383.5},0).wait(1).to({x:375.5},0).wait(1).to({y:685.5},0).wait(1).to({x:381.5},0).wait(1).to({x:377.5,y:691.5},0).wait(1).to({x:383.5,y:689.5},0).wait(1).to({x:375.5},0).wait(1).to({x:379.5},0).wait(1).to({x:385.5},0).wait(1).to({x:379.5},0).wait(1).to({y:693.5},0).wait(1).to({y:689.5},0).wait(1).to({x:385.5},0).wait(1).to({x:381.5},0).wait(2).to({x:385.5,y:685.5},0).wait(1).to({x:381.5,y:689.5},0).wait(1).to({x:385.5},0).wait(1).to({x:379.5},0).wait(1).to({y:693.5},0).wait(1).to({y:689.5},0).wait(1).to({x:385.5},0).wait(1).to({x:381.5},0).wait(2).to({x:385.5,y:685.5},0).wait(1).to({x:381.5,y:689.5},0).wait(1).to({x:385.5},0).wait(1));

	// s6-3 man eye
	this.instance_5 = new lib.s63eye();
	this.instance_5.setTransform(379.5,677,1,1,0,0,0,214.5,83);

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({x:383.5},0).wait(1).to({x:375.5},0).wait(1).to({y:673},0).wait(1).to({x:381.5},0).wait(1).to({x:377.5,y:679},0).wait(1).to({x:383.5,y:677},0).wait(1).to({x:375.5},0).wait(1).to({x:379.5},0).wait(20));

	// s6-3 man lian
	this.instance_6 = new lib.s63lian();
	this.instance_6.setTransform(376.5,651,1,1,0,0,0,295.5,155);

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({x:380.5},0).wait(1).to({x:372.5},0).wait(1).to({y:647},0).wait(1).to({x:378.5},0).wait(1).to({x:374.5,y:653},0).wait(1).to({x:380.5,y:651},0).wait(1).to({x:372.5},0).wait(1).to({x:376.5},0).wait(20));

	// 图层 14
	this.instance_7 = new lib.s63bgup();
	this.instance_7.setTransform(13,404);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(37));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,398,732,418);


(lib.s6 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_246 = function() {
		this.stop();
		try{app.showBtns()}catch(e){}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(246).call(this.frame_246).wait(1));

	// 图层 2
	this.instance = new lib.s65zi_1();
	this.instance.setTransform(368.9,227.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(235).to({_off:false},0).to({alpha:1},6).wait(6));

	// s6-5 yezi 1
	this.instance_1 = new lib.s65yezi1_1();
	this.instance_1.setTransform(867.4,239,1,1,0,0,0,31.5,12);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(202).to({_off:false},0).wait(1).to({x:742.5,y:374.6},0).wait(1).to({x:685.6,y:425.9},0).wait(1).to({x:638.6,y:463.9},0).wait(1).to({x:598.5,y:493},0).wait(1).to({x:559.1,y:518.4},0).wait(1).to({x:519.8,y:540.6},0).wait(1).to({x:480.1,y:559.6},0).wait(1).to({x:443.5,y:573.8},0).wait(1).to({x:405.5,y:584.8},0).wait(1).to({x:365.9,y:592.1},0).wait(1).to({x:326,y:596.1},0).wait(1).to({x:292,y:595.3},0).wait(1).to({x:265,y:578.9},0).wait(1).to({x:260.6,y:542.6},0).wait(1).to({x:289.8,y:506.7},0).wait(1).to({x:326.2,y:484.6},0).wait(1).to({x:366,y:473.6},0).wait(1).to({x:404.6,y:478.5},0).wait(1).to({x:419.9,y:519},0).wait(1).to({x:395.1,y:567.6},0).wait(1).to({x:364.5,y:608.7},0).wait(1).to({x:325,y:652.8},0).wait(1).to({x:279.2,y:697.6},0).wait(1).to({x:230.7,y:740.4},0).wait(1).to({x:171.6,y:786.8},0).wait(1).to({x:91.6,y:841},0).wait(1).to({x:-102.4,y:930},0).to({_off:true},1).wait(17));

	// s6-5 yezi 2
	this.instance_2 = new lib.s65yezi2_1();
	this.instance_2.setTransform(861.4,60.3,1,1,0,0,0,17,15.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(206).to({_off:false},0).wait(1).to({x:761.5,y:266.7},0).wait(1).to({x:706.7,y:345.3},0).wait(1).to({x:659.5,y:398.7},0).wait(1).to({x:609.5,y:442.6},0).wait(1).to({x:561.7,y:473.2},0).wait(1).to({x:511.7,y:494.1},0).wait(1).to({x:453.3,y:509},0).wait(1).to({x:413.3,y:521},0).wait(1).to({x:376.2,y:525.2},0).wait(1).to({x:351.4,y:490},0).wait(1).to({x:369.2,y:439.7},0).wait(1).to({x:405.8,y:398.7},0).wait(1).to({x:442.3,y:371.6},0).wait(1).to({x:483.7,y:354.1},0).wait(1).to({x:522.5,y:357.3},0).wait(1).to({x:527.5,y:406.2},0).wait(1).to({x:507.6,y:453.7},0).wait(1).to({x:482.6,y:495.1},0).wait(1).to({x:449.5,y:533.3},0).wait(1).to({x:399.4,y:574.2},0).wait(1).to({x:344.3,y:608.6},0).wait(1).to({x:290.6,y:636.2},0).wait(1).to({x:238.3,y:659.6},0).wait(1).to({x:180.6,y:682.5},0).wait(1).to({x:119.9,y:704.1},0).wait(1).to({x:55.8,y:725.2},0).wait(1).to({x:-17,y:749},0).to({_off:true},1).wait(13));

	// s6-5 yezi 3
	this.instance_3 = new lib.s65yezi3_1();
	this.instance_3.setTransform(813.5,208.2,1,1,0,0,0,31.5,30);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(204).to({_off:false},0).wait(1).to({x:719.4,y:364.4},0).wait(1).to({x:675.8,y:426.3},0).wait(1).to({x:638.7,y:474.9},0).wait(1).to({x:606.5,y:514.2},0).wait(1).to({x:576.5,y:548.4},0).wait(1).to({x:546.7,y:580.2},0).wait(1).to({x:516.8,y:609.9},0).wait(1).to({x:486.3,y:637.9},0).wait(1).to({x:455.2,y:664.2},0).wait(1).to({x:426.7,y:686.3},0).wait(1).to({x:397.1,y:707.1},0).wait(1).to({x:366.1,y:726.6},0).wait(1).to({x:333.4,y:744.7},0).wait(1).to({x:298.7,y:760.9},0).wait(1).to({x:261.8,y:774.8},0).wait(1).to({x:222.2,y:776.6},0).wait(1).to({x:185.4,y:770.1},0).wait(1).to({x:157.2,y:758.1},0).wait(1).to({x:140.3,y:724.4},0).wait(1).to({x:168.6,y:684.9},0).wait(1).to({x:213,y:663.3},0).wait(1).to({x:262.9,y:662.8},0).wait(1).to({x:301.8,y:700.1},0).wait(1).to({x:267.8,y:769},0).wait(1).to({x:206.7,y:821.2},0).wait(1).to({x:119.2,y:878.5},0).wait(1).to({x:-70.9,y:972},0).to({_off:true},1).wait(15));

	// s6-5 yezi 4
	this.instance_4 = new lib.s65yezi4_1();
	this.instance_4.setTransform(815.2,24.9,1,1,0,0,0,25.5,15);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(202).to({_off:false},0).wait(1).to({x:766.9,y:193.2},0).wait(1).to({x:723.7,y:253.8},0).wait(1).to({x:678.5,y:294.9},0).wait(1).to({x:631.8,y:323.4},0).wait(1).to({x:585.1,y:341.8},0).wait(1).to({x:540.8,y:341.7},0).wait(1).to({x:505.4,y:334},0).wait(1).to({x:478.4,y:319.2},0).wait(1).to({x:469.8,y:283.2},0).wait(1).to({x:496.8,y:250.6},0).wait(1).to({x:532.7,y:231.8},0).wait(1).to({x:570.8,y:225.8},0).wait(1).to({x:607.1,y:236.6},0).wait(1).to({x:628.1,y:267.9},0).wait(1).to({x:607.2,y:312.1},0).wait(1).to({x:588.4,y:343.3},0).wait(1).to({x:565.8,y:379.9},0).wait(1).to({x:535.9,y:419.4},0).wait(1).to({x:502.3,y:456.7},0).wait(1).to({x:466,y:491.6},0).wait(1).to({x:427.4,y:524.7},0).wait(1).to({x:384.6,y:557.7},0).wait(1).to({x:333.4,y:593.4},0).wait(1).to({x:276,y:629.6},0).wait(1).to({x:209.7,y:667.5},0).wait(1).to({x:124.1,y:711.5},0).wait(1).to({x:-74.3,y:795.9},0).to({_off:true},1).wait(17));

	// s6-5 yezi 5
	this.instance_5 = new lib.s65yezi5_1();
	this.instance_5.setTransform(815.2,264.9,1,1,0,0,0,77.5,37.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(204).to({_off:false},0).wait(1).to({x:766.9,y:433.2},0).wait(1).to({x:723.7,y:493.8},0).wait(1).to({x:678.5,y:534.9},0).wait(1).to({x:631.8,y:563.4},0).wait(1).to({x:585.1,y:581.8},0).wait(1).to({x:540.8,y:581.7},0).wait(1).to({x:505.4,y:574},0).wait(1).to({x:478.4,y:559.2},0).wait(1).to({x:469.8,y:523.2},0).wait(1).to({x:496.8,y:490.6},0).wait(1).to({x:532.7,y:471.8},0).wait(1).to({x:570.8,y:465.8},0).wait(1).to({x:607.1,y:476.6},0).wait(1).to({x:628.1,y:507.9},0).wait(1).to({x:607.2,y:552.1},0).wait(1).to({x:588.4,y:583.3},0).wait(1).to({x:565.8,y:619.9},0).wait(1).to({x:535.9,y:659.4},0).wait(1).to({x:502.3,y:696.7},0).wait(1).to({x:466,y:731.6},0).wait(1).to({x:427.4,y:764.7},0).wait(1).to({x:384.6,y:797.7},0).wait(1).to({x:333.4,y:833.4},0).wait(1).to({x:276,y:869.6},0).wait(1).to({x:209.7,y:907.5},0).wait(1).to({x:124.1,y:951.5},0).wait(1).to({x:-74.3,y:1035.9},0).to({_off:true},1).wait(15));

	// s6-5 yezi 6
	this.instance_6 = new lib.s65yezi6_1();
	this.instance_6.setTransform(895.4,204.9,1,1,0,0,0,17,15.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(206).to({_off:false},0).wait(1).to({x:798,y:287.3},0).wait(1).to({x:754.8,y:323.9},0).wait(1).to({x:720.2,y:353.2},0).wait(1).to({x:689.9,y:378.8},0).wait(1).to({x:662.2,y:402.2},0).wait(1).to({x:636.3,y:424.2},0).wait(1).to({x:611.6,y:445.1},0).wait(1).to({x:587.8,y:465.3},0).wait(1).to({x:564.5,y:484.9},0).wait(1).to({x:541.8,y:504.2},0).wait(1).to({x:519.2,y:523.3},0).wait(1).to({x:496.8,y:542.3},0).wait(1).to({x:474.4,y:561.2},0).wait(1).to({x:451.9,y:580.3},0).wait(1).to({x:429.2,y:599.5},0).wait(1).to({x:406.1,y:619.1},0).wait(1).to({x:382.5,y:639},0).wait(1).to({x:358.3,y:659.6},0).wait(1).to({x:333.2,y:680.8},0).wait(1).to({x:307,y:703},0).wait(1).to({x:279.4,y:726.3},0).wait(1).to({x:250,y:751.3},0).wait(1).to({x:217.9,y:778.4},0).wait(1).to({x:182.2,y:808.6},0).wait(1).to({x:140.5,y:844},0).wait(1).to({x:87,y:889.2},0).wait(1).to({x:-39,y:996},0).to({_off:true},1).wait(13));

	// s6-5 yezi 7
	this.instance_7 = new lib.s65yezi7_1();
	this.instance_7.setTransform(867.4,159,1,1,0,0,0,22.5,9.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(210).to({_off:false},0).wait(1).to({x:742.4,y:294.6},0).wait(1).to({x:685.6,y:345.9},0).wait(1).to({x:638.5,y:384},0).wait(1).to({x:598.4,y:413},0).wait(1).to({x:559,y:438.5},0).wait(1).to({x:519.6,y:460.7},0).wait(1).to({x:479.9,y:479.7},0).wait(1).to({x:443.3,y:493.8},0).wait(1).to({x:405.3,y:504.9},0).wait(1).to({x:365.7,y:512.2},0).wait(1).to({x:325.8,y:516.1},0).wait(1).to({x:291.8,y:515.3},0).wait(1).to({x:264.9,y:498.7},0).wait(1).to({x:260.7,y:462.4},0).wait(1).to({x:290.1,y:426.5},0).wait(1).to({x:326.4,y:404.5},0).wait(1).to({x:366.3,y:393.5},0).wait(1).to({x:404.8,y:398.7},0).wait(1).to({x:419.8,y:439.3},0).wait(1).to({x:395,y:487.9},0).wait(1).to({x:364.3,y:529},0).wait(1).to({x:324.8,y:573.1},0).wait(1).to({x:279,y:617.9},0).wait(1).to({x:230.4,y:660.6},0).wait(1).to({x:171.3,y:707},0).wait(1).to({x:91.2,y:761.2},0).wait(1).to({x:-102.4,y:851.7},0).to({_off:true},1).wait(9));

	// s6-5 yezi 8
	this.instance_8 = new lib.s65yezi8_1();
	this.instance_8.setTransform(861.4,160.3,1,1,0,0,0,14.5,8.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(212).to({_off:false},0).to({guide:{path:[861.3,160.4,852.7,185.5,836,223.7,802.5,300.2,761.8,366.1,704.8,458.2,641.3,516,562,588.2,477.2,602.2,471.7,603.1,455.3,608.3,430.2,616.2,424.5,617.9,383.8,629.8,373.6,624,343.8,607.2,354.1,571.3,363.2,539.8,398.1,505.9,432,472.9,468.2,458.9,508,443.5,528,461.4,534.2,466.9,532.5,482.8,531,497.6,523.1,518.8,515.4,539.5,503.4,561.3,491.1,583.8,477.2,602.2,418.7,679.4,265.9,747.6,204.1,775.2,123.6,802.8,61.8,824.1,-21.9,848.9]}},27).to({_off:true},1).wait(7));

	// s6-5 man
	this.instance_9 = new lib.s65man();
	this.instance_9.setTransform(94,636);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(192).to({_off:false},0).wait(55));

	// s6-5 bg up
	this.instance_10 = new lib.s65bgup_1();
	this.instance_10.setTransform(375,-480,1,1,0,0,0,375,480);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(192).to({_off:false},0).to({y:480},10).wait(45));

	// s6-5 bg
	this.instance_11 = new lib.s65bg();
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(192).to({_off:false},0).wait(55));

	// s6-4 man tou
	this.instance_12 = new lib.s64mantou_1();
	this.instance_12.setTransform(385,376,1,1,0,0,0,141,165);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(144).to({_off:false},0).to({y:396},24).to({y:376},23).to({_off:true},1).wait(55));

	// s6-4 man shou
	this.instance_13 = new lib.s64manshou_1();
	this.instance_13.setTransform(362,847.5,1,1,0,0,0,274,212);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(144).to({_off:false},0).wait(1).to({y:859.3},0).wait(1).to({y:847.5},0).wait(1).to({y:859.3},0).wait(1).to({y:847.5},0).wait(1).to({y:859.3},0).wait(1).to({y:847.5},0).wait(1).to({y:859.3},0).wait(1).to({y:847.5},0).wait(1).to({y:859.3},0).wait(1).to({y:847.5},0).wait(1).to({y:859.3},0).wait(1).to({y:847.5},0).wait(1).to({y:859.3},0).wait(1).to({y:847.5},0).wait(1).to({y:859.3},0).wait(1).to({y:847.5},0).wait(1).to({y:859.3},0).wait(1).to({y:847.5},0).wait(1).to({y:859.3},0).wait(1).to({y:847.5},0).wait(1).to({y:859.3},0).wait(1).to({y:847.5},0).wait(1).to({y:859.3},0).wait(1).to({y:847.5},0).wait(1).to({y:859.3},0).wait(1).to({y:847.5},0).wait(1).to({y:859.3},0).wait(1).to({y:847.5},0).wait(1).to({y:859.3},0).wait(1).to({y:847.5},0).wait(1).to({y:859.3},0).wait(1).to({y:847.5},0).wait(1).to({y:859.3},0).wait(1).to({y:847.5},0).wait(1).to({y:859.3},0).wait(1).to({y:847.5},0).wait(1).to({y:859.3},0).wait(1).to({y:847.5},0).wait(1).to({y:859.3},0).wait(1).to({y:847.5},0).wait(1).to({y:859.3},0).wait(1).to({y:847.5},0).wait(1).to({y:859.3},0).wait(1).to({y:847.5},0).wait(1).to({y:859.3},0).wait(1).to({y:847.5},0).wait(1).to({y:859.3},0).to({_off:true},1).wait(55));

	// 图层 3
	this.instance_14 = new lib.s64wenjianjai();
	this.instance_14.setTransform(367.5,878.5,1,1,0,0,0,191.5,215);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(144).to({_off:false},0).to({y:1452.8},10).to({_off:true},39).wait(54));

	// s6-4 man shenti
	this.instance_15 = new lib.s64manshenti();
	this.instance_15.setTransform(88,448);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(144).to({_off:false},0).to({_off:true},48).wait(55));

	// s6-4 you 
	this.instance_16 = new lib.s64you_1();
	this.instance_16.setTransform(490.1,1215.1,1,1,0,0,0,59.1,886.1);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(144).to({_off:false},0).wait(4).to({rotation:3,x:530.1},10).to({_off:true},34).wait(55));

	// s6-4 zuo 
	this.instance_17 = new lib.s64zuo_1();
	this.instance_17.setTransform(344.3,1219.2,1,1,0,0,0,442.3,927.2);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(144).to({_off:false},0).wait(4).to({regX:442.2,rotation:-2,x:252.3,y:1219.3},10).to({_off:true},34).wait(55));

	// s6-4 bg
	this.instance_18 = new lib.s64bg();
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(144).to({_off:false},0).to({_off:true},48).wait(55));

	// 图层 15
	this.instance_19 = new lib.s63();
	this.instance_19.setTransform(-760,0);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(107).to({_off:false},0).to({x:0},9).to({_off:true},28).wait(103));

	// s6-3 ding
	this.instance_20 = new lib.s63ding_1();
	this.instance_20.setTransform(266,197,0.003,0.004,0,0,0,127.9,101.6);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(103).to({_off:false},0).to({regX:112.5,regY:88.9,scaleX:1,scaleY:1,x:266.1},4).to({rotation:8,x:240.5,y:177},2).to({regY:89,rotation:-7,x:215,y:157},2).to({scaleX:1,scaleY:1,rotation:2,x:189.5,y:137},2).to({regX:112.7,regY:89.1,rotation:-7,x:163.9,y:117.1},2).to({regY:89.2,rotation:6,x:138.3,y:97.1},2).to({regX:112.8,rotation:-7,x:112.9,y:77.2},1).to({regX:112.7,regY:89.1,rotation:16,x:87.3,y:57.2},1).to({regY:89,rotation:-7,x:61.7,y:37.1},1).to({regX:112.4,regY:88.9,scaleX:1,scaleY:1,rotation:28,x:36,y:17},1).to({_off:true},23).wait(103));

	// s6-3 deng 2
	this.instance_21 = new lib.s63deng();
	this.instance_21.setTransform(335,197);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(103).to({_off:false},0).to({_off:true},41).wait(103));

	// s6-3 deng 
	this.instance_22 = new lib.s61deng();
	this.instance_22.setTransform(335,197);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(96).to({_off:false},0).to({_off:true},7).wait(144));

	// s6-3 zhujiao
	this.instance_23 = new lib.s61zhujiao();
	this.instance_23.setTransform(274,353);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(96).to({_off:false},0).to({_off:true},48).wait(103));

	// 图层 13
	this.instance_24 = new lib.s61xiezi1();
	this.instance_24.setTransform(425,1072);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(107).to({_off:false},0).to({_off:true},37).wait(103));

	// s6-3 zhujiao jiao
	this.instance_25 = new lib.s61zhujiaojiao();
	this.instance_25.setTransform(451,1095.5);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(96).to({_off:false},0).to({_off:true},11).wait(140));

	// s6-3 bg 
	this.instance_26 = new lib.s63bgdown();

	this.instance_27 = new lib.s61bg();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_27},{t:this.instance_26}]},96).to({state:[]},48).wait(103));

	// s6-2 man eye
	this.instance_28 = new lib.s62maneye_1();
	this.instance_28.setTransform(379.5,362);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(48).to({_off:false},0).to({x:415},24).to({x:379.5},23).to({_off:true},1).wait(151));

	// s6-2 man youshou
	this.instance_29 = new lib.s62manyoushou_1();
	this.instance_29.setTransform(678.1,953.6,1,1,-0.5,0,0,123.1,271.1);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(48).to({_off:false},0).to({regX:123,rotation:0.5,y:953.5},9).to({regX:123.1,rotation:-0.5,y:953.6},9).to({regX:123,rotation:0.5,y:953.5},9).to({regX:123.1,rotation:-0.5,y:953.6},10).to({regX:123,rotation:0.5,y:953.5},10).to({_off:true},1).wait(151));

	// s6-2 man zuoshou
	this.instance_30 = new lib.s62manzuoshou_1();
	this.instance_30.setTransform(53.5,918.7,1,1,8,0,0,-170.6,-95.8);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(48).to({_off:false},0).wait(7).to({rotation:0,x:53.4},6).to({rotation:8,x:53.5},6).wait(15).to({rotation:0,x:53.4},6).to({rotation:8,x:53.5},6).to({_off:true},2).wait(151));

	// s6-2 man wenjianjia
	this.instance_31 = new lib.s62manwenjianjia_1();
	this.instance_31.setTransform(362,1119.6,1,1,16,0,0,90.1,186.1);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(48).to({_off:false},0).wait(8).to({regX:90,rotation:0,x:381,y:1072.6},6).to({regX:90.1,rotation:16,x:362,y:1119.6},6).wait(15).to({regX:90,rotation:0,x:381,y:1072.6},6).to({regX:90.1,rotation:16,x:362,y:1119.6},6).to({_off:true},1).wait(151));

	// s6-2 man body
	this.instance_32 = new lib.s62manbody();
	this.instance_32.setTransform(52,144);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(48).to({_off:false},0).to({_off:true},48).wait(151));

	// s6-2 bg
	this.instance_33 = new lib.s62bg();
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(48).to({_off:false},0).to({_off:true},48).wait(151));

	// s6-1 deng
	this.instance_34 = new lib.s61deng();
	this.instance_34.setTransform(335,197);

	this.timeline.addTween(cjs.Tween.get(this.instance_34).to({_off:true},48).wait(199));

	// s6-1 zhujiao
	this.instance_35 = new lib.s61zhujiao();
	this.instance_35.setTransform(274,353);

	this.timeline.addTween(cjs.Tween.get(this.instance_35).to({_off:true},48).wait(199));

	// s6-1 zhujiao jiao
	this.instance_36 = new lib.s61zhujiaojiao();
	this.instance_36.setTransform(451,1095.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_36).to({_off:true},48).wait(199));

	// s6-1 5
	this.instance_37 = new lib.s615();
	this.instance_37.setTransform(379,119);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(40).to({_off:false},0).to({_off:true},8).wait(199));

	// s6-1 6
	this.instance_38 = new lib.s616();
	this.instance_38.setTransform(379,119);
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(20).to({_off:false},0).to({_off:true},20).wait(207));

	// s6-1 7
	this.instance_39 = new lib.s617();
	this.instance_39.setTransform(379,119);

	this.timeline.addTween(cjs.Tween.get(this.instance_39).to({_off:true},20).wait(227));

	// s6-1 bg
	this.instance_40 = new lib.s61bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_40).to({_off:true},48).wait(199));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


// stage content:



(lib.qj_s6 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s6();
	this.instance.setTransform(375,610,1,1,0,0,0,375,610);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(375,610,750,1220);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;