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
		{src:"images/cv/s5bg.png", id:"s5bg"},
		{src:"images/cv/s51711.png", id:"s51711"},
		{src:"images/cv/s51door1.png", id:"s51door1"},
		{src:"images/cv/s51door2.png", id:"s51door2"},
		{src:"images/cv/s51man.png", id:"s51man"},
		{src:"images/cv/s52711.png", id:"s52711"},
		{src:"images/cv/s52door1.png", id:"s52door1"},
		{src:"images/cv/s52door2.png", id:"s52door2"},
		{src:"images/cv/s52manshenti.png", id:"s52manshenti"},
		{src:"images/cv/s52mantou.png", id:"s52mantou"},
		{src:"images/cv/s52uncleshenzi.png", id:"s52uncleshenzi"},
		{src:"images/cv/s52uncleshou.png", id:"s52uncleshou"},
		{src:"images/cv/s52uncletou.png", id:"s52uncletou"},
		{src:"images/cv/s53_.png", id:"s53_"},
		{src:"images/cv/s53bgdown.png", id:"s53bgdown"},
		{src:"images/cv/s53bgup.png", id:"s53bgup"},
		{src:"images/cv/s53ding.png", id:"s53ding"},
		{src:"images/cv/s53eye1.png", id:"s53eye1"},
		{src:"images/cv/s53eye2.png", id:"s53eye2"},
		{src:"images/cv/s53eye3.png", id:"s53eye3"},
		{src:"images/cv/s53hengxian.png", id:"s53hengxian"},
		{src:"images/cv/s53huanying.png", id:"s53huanying"},
		{src:"images/cv/s53lingdi.png", id:"s53lingdi"},
		{src:"images/cv/s53lingshang.png", id:"s53lingshang"},
		{src:"images/cv/s53mangebo.png", id:"s53mangebo"},
		{src:"images/cv/s53manshou.png", id:"s53manshou"},
		{src:"images/cv/s53man.png", id:"s53man"},
		{src:"images/cv/s53pa1.png", id:"s53pa1"},
		{src:"images/cv/s53pa2.png", id:"s53pa2"},
		{src:"images/cv/s53uncleeyezuo.png", id:"s53uncleeyezuo"},
		{src:"images/cv/s53uncleeyeyou.png", id:"s53uncleeyeyou"},
		{src:"images/cv/s53unclegebo.png", id:"s53unclegebo"},
		{src:"images/cv/s53uncleya.png", id:"s53uncleya"},
		{src:"images/cv/s53uncle.png", id:"s53uncle"},
		{src:"images/cv/s53__1.png", id:"s53__1"},
		{src:"images/cv/s54_.png", id:"s54_"},
		{src:"images/cv/s54bg.jpg", id:"s54bg"},
		{src:"images/cv/s54manshou.png", id:"s54manshou"},
		{src:"images/cv/s54man.png", id:"s54man"},
		{src:"images/cv/s54unclejiao.png", id:"s54unclejiao"},
		{src:"images/cv/s54uncletou.png", id:"s54uncletou"},
		{src:"images/cv/s54uncleyoushou.png", id:"s54uncleyoushou"},
		{src:"images/cv/s54unclezuoshou.png", id:"s54unclezuoshou"},
		{src:"images/cv/s54uncle.png", id:"s54uncle"},
		{src:"images/cv/s55bg.png", id:"s55bg"},
		{src:"images/cv/s55daxingxing1.png", id:"s55daxingxing1"},
		{src:"images/cv/s55daxingxing2.png", id:"s55daxingxing2"},
		{src:"images/cv/s55daxingxing3.png", id:"s55daxingxing3"},
		{src:"images/cv/s55daxingxing4.png", id:"s55daxingxing4"},
		{src:"images/cv/s55daxingxing5.png", id:"s55daxingxing5"},
		{src:"images/cv/s55manjian.png", id:"s55manjian"},
		{src:"images/cv/s55manshenti.png", id:"s55manshenti"},
		{src:"images/cv/s55manshou.png", id:"s55manshou"},
		{src:"images/cv/s55mantou.png", id:"s55mantou"},
		{src:"images/cv/s55outuwu1.png", id:"s55outuwu1"},
		{src:"images/cv/s55outuwu2.png", id:"s55outuwu2"},
		{src:"images/cv/s55outuwu3.png", id:"s55outuwu3"},
		{src:"images/cv/s55outuwu.png", id:"s55outuwu"},
		{src:"images/cv/s55unclebody.png", id:"s55unclebody"},
		{src:"images/cv/s55uncleeye.png", id:"s55uncleeye"},
		{src:"images/cv/s55uncletou.png", id:"s55uncletou"},
		{src:"images/cv/s55uncleyoushou.png", id:"s55uncleyoushou"},
		{src:"images/cv/s55unclezuoshou.png", id:"s55unclezuoshou"},
		{src:"images/cv/s55xingxing1.png", id:"s55xingxing1"},
		{src:"images/cv/s55xingxing2.png", id:"s55xingxing2"},
		{src:"images/cv/s55xingxing3.png", id:"s55xingxing3"},
		{src:"images/cv/s55xingxing4.png", id:"s55xingxing4"},
		{src:"images/cv/s55yuanquan1.png", id:"s55yuanquan1"},
		{src:"images/cv/s55yuanquan2.png", id:"s55yuanquan2"},
		{src:"images/cv/s55yuanquan3.png", id:"s55yuanquan3"},
		{src:"images/cv/s55yuanquan4.png", id:"s55yuanquan4"},
		{src:"images/cv/s55yuanquan5.png", id:"s55yuanquan5"},
		{src:"images/cv/s55zi.png", id:"s55zi"}
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


(lib.s5bg = function() {
	this.initialize(img.s5bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,771,1237);


(lib.s51711 = function() {
	this.initialize(img.s51711);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,661);


(lib.s51door1 = function() {
	this.initialize(img.s51door1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,517,1187);


(lib.s51door2 = function() {
	this.initialize(img.s51door2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,1354);


(lib.s51man = function() {
	this.initialize(img.s51man);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,419,486);


(lib.s52711 = function() {
	this.initialize(img.s52711);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,879,200);


(lib.s52door1 = function() {
	this.initialize(img.s52door1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,1222);


(lib.s52door2 = function() {
	this.initialize(img.s52door2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,518,1224);


(lib.s52manshenti = function() {
	this.initialize(img.s52manshenti);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,310,795);


(lib.s52mantou = function() {
	this.initialize(img.s52mantou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,197);


(lib.s52uncleshenzi = function() {
	this.initialize(img.s52uncleshenzi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,253,954);


(lib.s52uncleshou = function() {
	this.initialize(img.s52uncleshou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,266,265);


(lib.s52uncletou = function() {
	this.initialize(img.s52uncletou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,185,260);


(lib.s53_ = function() {
	this.initialize(img.s53_);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,176);


(lib.s53bgdown = function() {
	this.initialize(img.s53bgdown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,417);


(lib.s53bgup = function() {
	this.initialize(img.s53bgup);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,803);


(lib.s53ding = function() {
	this.initialize(img.s53ding);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,197,100);


(lib.s53eye1 = function() {
	this.initialize(img.s53eye1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,193,112);


(lib.s53eye2 = function() {
	this.initialize(img.s53eye2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,195,110);


(lib.s53eye3 = function() {
	this.initialize(img.s53eye3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,194,108);


(lib.s53hengxian = function() {
	this.initialize(img.s53hengxian);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,23);


(lib.s53huanying = function() {
	this.initialize(img.s53huanying);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,41);


(lib.s53lingdi = function() {
	this.initialize(img.s53lingdi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,259,218);


(lib.s53lingshang = function() {
	this.initialize(img.s53lingshang);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,127);


(lib.s53mangebo = function() {
	this.initialize(img.s53mangebo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,355,188);


(lib.s53manshou = function() {
	this.initialize(img.s53manshou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,61);


(lib.s53man = function() {
	this.initialize(img.s53man);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,598,650);


(lib.s53pa1 = function() {
	this.initialize(img.s53pa1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,33);


(lib.s53pa2 = function() {
	this.initialize(img.s53pa2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,57);


(lib.s53uncleeyezuo = function() {
	this.initialize(img.s53uncleeyezuo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,14);


(lib.s53uncleeyeyou = function() {
	this.initialize(img.s53uncleeyeyou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,13);


(lib.s53unclegebo = function() {
	this.initialize(img.s53unclegebo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,222);


(lib.s53uncleya = function() {
	this.initialize(img.s53uncleya);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,29);


(lib.s53uncle = function() {
	this.initialize(img.s53uncle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,448);


(lib.s53__1 = function() {
	this.initialize(img.s53__1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,122);


(lib.s54_ = function() {
	this.initialize(img.s54_);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,252,352);


(lib.s54bg = function() {
	this.initialize(img.s54bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s54manshou = function() {
	this.initialize(img.s54manshou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,323,112);


(lib.s54man = function() {
	this.initialize(img.s54man);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,550,1178);


(lib.s54unclejiao = function() {
	this.initialize(img.s54unclejiao);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,277,264);


(lib.s54uncletou = function() {
	this.initialize(img.s54uncletou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,307,228);


(lib.s54uncleyoushou = function() {
	this.initialize(img.s54uncleyoushou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,224,244);


(lib.s54unclezuoshou = function() {
	this.initialize(img.s54unclezuoshou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,209,106);


(lib.s54uncle = function() {
	this.initialize(img.s54uncle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,318,847);


(lib.s55bg = function() {
	this.initialize(img.s55bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s55daxingxing1 = function() {
	this.initialize(img.s55daxingxing1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,101);


(lib.s55daxingxing2 = function() {
	this.initialize(img.s55daxingxing2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,179);


(lib.s55daxingxing3 = function() {
	this.initialize(img.s55daxingxing3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,180);


(lib.s55daxingxing4 = function() {
	this.initialize(img.s55daxingxing4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,273,286);


(lib.s55daxingxing5 = function() {
	this.initialize(img.s55daxingxing5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,273,287);


(lib.s55manjian = function() {
	this.initialize(img.s55manjian);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,259,91);


(lib.s55manshenti = function() {
	this.initialize(img.s55manshenti);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,185,535);


(lib.s55manshou = function() {
	this.initialize(img.s55manshou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,351,96);


(lib.s55mantou = function() {
	this.initialize(img.s55mantou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,160);


(lib.s55outuwu1 = function() {
	this.initialize(img.s55outuwu1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,520);


(lib.s55outuwu2 = function() {
	this.initialize(img.s55outuwu2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,522);


(lib.s55outuwu3 = function() {
	this.initialize(img.s55outuwu3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,520);


(lib.s55outuwu = function() {
	this.initialize(img.s55outuwu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,434);


(lib.s55unclebody = function() {
	this.initialize(img.s55unclebody);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,643);


(lib.s55uncleeye = function() {
	this.initialize(img.s55uncleeye);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,23);


(lib.s55uncletou = function() {
	this.initialize(img.s55uncletou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,219,334);


(lib.s55uncleyoushou = function() {
	this.initialize(img.s55uncleyoushou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,197,556);


(lib.s55unclezuoshou = function() {
	this.initialize(img.s55unclezuoshou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,510);


(lib.s55xingxing1 = function() {
	this.initialize(img.s55xingxing1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,530,336);


(lib.s55xingxing2 = function() {
	this.initialize(img.s55xingxing2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,337,531);


(lib.s55xingxing3 = function() {
	this.initialize(img.s55xingxing3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,318,523);


(lib.s55xingxing4 = function() {
	this.initialize(img.s55xingxing4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,319,523);


(lib.s55yuanquan1 = function() {
	this.initialize(img.s55yuanquan1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,209,208);


(lib.s55yuanquan2 = function() {
	this.initialize(img.s55yuanquan2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,333);


(lib.s55yuanquan3 = function() {
	this.initialize(img.s55yuanquan3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,179);


(lib.s55yuanquan4 = function() {
	this.initialize(img.s55yuanquan4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,206,207);


(lib.s55yuanquan5 = function() {
	this.initialize(img.s55yuanquan5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,212,212);


(lib.s55zi = function() {
	this.initialize(img.s55zi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,972,517);


(lib.s55zuoshou = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s55unclezuoshou();
	this.instance.setTransform(-90,-255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-255,180,510);


(lib.s55zi_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s55zi();
	this.instance.setTransform(-335.3,-175,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-335.3,-175,680.4,361.9);


(lib.s55youshou = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s55uncleyoushou();
	this.instance.setTransform(-98.5,-278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.5,-278,197,556);


(lib.s55uncletou_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.s55uncleeye();
	this.instance.setTransform(28,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 1
	this.instance_1 = new lib.s55uncletou();
	this.instance_1.setTransform(-109.5,-167);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.5,-167,219,334);


(lib.s55tou = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s55mantou();
	this.instance.setTransform(-54.5,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.5,-80,109,160);


(lib.s55shenti = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s55unclebody();
	this.instance.setTransform(-150,-321.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-321.5,300,643);


(lib.s55outuwu_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s55outuwu();
	this.instance.setTransform(-18,-667);

	this.instance_1 = new lib.s55outuwu();
	this.instance_1.setTransform(-18,-217);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-667,36,884);


(lib.s55manshou_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s55manshou();
	this.instance.setTransform(-175.5,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175.5,-48,351,96);


(lib.s55jian = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s55manjian();
	this.instance.setTransform(-129.5,-45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.5,-45.5,259,91);


(lib.s5514 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s55xingxing1();
	this.instance.setTransform(-265,-168);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-265,-168,530,336);


(lib.s5513 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s55xingxing2();
	this.instance.setTransform(-168.5,-265.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.5,-265.5,337,531);


(lib.s5512 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s55xingxing3();
	this.instance.setTransform(-159,-261.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159,-261.5,318,523);


(lib.s5511 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s55xingxing4();
	this.instance.setTransform(-159.5,-261.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.5,-261.5,319,523);


(lib.s5510 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s55yuanquan1();
	this.instance.setTransform(-104.5,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.5,-104,209,208);


(lib.s559 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s55yuanquan2();
	this.instance.setTransform(-167,-166.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167,-166.5,334,333);


(lib.s558 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s55yuanquan3();
	this.instance.setTransform(-89.5,-89.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.5,-89.5,179,179);


(lib.s557 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s55yuanquan4();
	this.instance.setTransform(-103,-103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103,-103.5,206,207);


(lib.s556 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s55yuanquan5();
	this.instance.setTransform(-106,-106);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106,-106,212,212);


(lib.s555 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s55daxingxing1();
	this.instance.setTransform(-53.5,-50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.5,-50.5,107,101);


(lib.s554 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s55daxingxing2();
	this.instance.setTransform(-95,-89.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-89.5,190,179);


(lib.s553 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s55daxingxing3();
	this.instance.setTransform(-95,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-90,190,180);


(lib.s552 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s55daxingxing4();
	this.instance.setTransform(-136.5,-143);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.5,-143,273,286);


(lib.s551 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s55daxingxing5();
	this.instance.setTransform(-136.5,-143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.5,-143.5,273,287);


(lib.s54unclezuoshou_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s54unclezuoshou();
	this.instance.setTransform(-104.5,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.5,-53,209,106);


(lib.s54uncleyoushou_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s54uncleyoushou();
	this.instance.setTransform(-112,-122);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112,-122,224,244);


(lib.s54uncletou_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s54uncletou();
	this.instance.setTransform(-153.5,-114);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153.5,-114,307,228);


(lib.s54unclejiao_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s54unclejiao();
	this.instance.setTransform(-138.5,-132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.5,-132,277,264);


(lib.s54uncle_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s54uncle();
	this.instance.setTransform(-159,-423.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159,-423.5,318,847);


(lib.s54suduxian = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cm_line();
	this.instance.setTransform(-600,-930.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-600,-930.9,1200,1862);


(lib.s54manshou_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s54manshou();
	this.instance.setTransform(-161.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.5,-56,323,112);


(lib.s54man_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s54man();
	this.instance.setTransform(-275,-589);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-275,-589,550,1178);


(lib.s54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s54_();
	this.instance.setTransform(-126,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126,-176,252,352);


(lib.s53tou = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// s5-3 eye 3
	this.instance = new lib.s53eye3();
	this.instance.setTransform(197,410);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// s5-3 man
	this.instance_1 = new lib.s53man();
	this.instance_1.setTransform(142,156);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(142,156,598,650);


(lib.s53suduxian = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cm_line();
	this.instance.setTransform(-600,-931);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-600,-931,1200,1862);


(lib.s53lingshang_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s53lingshang();
	this.instance.setTransform(-65.5,-63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.5,-63.5,131,127);


(lib.s53huanying_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s53huanying();
	this.instance.setTransform(-66.5,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.5,-20.5,133,41);


(lib.s53ding_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s53ding();
	this.instance.setTransform(-98.5,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.5,-50,197,100);


(lib.s53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s53_();
	this.instance.setTransform(-43,-88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-88,86,176);


(lib.s53zuoyan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s53uncleeyezuo();
	this.instance.setTransform(-9,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-7,18,14);


(lib.s53youyan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s53uncleeyeyou();
	this.instance.setTransform(-7.5,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-6.5,15,13);


(lib.s53ya = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s53uncleya();
	this.instance.setTransform(-9.5,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-14.5,19,29);


(lib.s53unclegebo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s53unclegebo();
	this.instance.setTransform(-87.5,-111);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.5,-111,175,222);


(lib.s53pa2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s53pa2();
	this.instance.setTransform(-31.5,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-28.5,63,57);


(lib.s53pa1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s53pa1();
	this.instance.setTransform(-28.5,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.5,-16.5,57,33);


(lib.s53manshou_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s53manshou();
	this.instance.setTransform(-29.5,-30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.5,-30.5,59,61);


(lib.s53mangebo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s53mangebo();
	this.instance.setTransform(-177.5,-94);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-177.5,-94,355,188);


(lib.s53_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s53__1();
	this.instance.setTransform(-46,-61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-61,92,122);


(lib.s52uncletou_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s52uncletou();
	this.instance.setTransform(-92.5,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.5,-130,185,260);


(lib.s52uncleshou_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s52uncleshou();
	this.instance.setTransform(-133,-132.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133,-132.5,266,265);


(lib.s52uncleshenti = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s52uncleshenzi();
	this.instance.setTransform(-126.5,-477);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.5,-477,253,954);


(lib.s52mantou_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s52mantou();
	this.instance.setTransform(-66,-98.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-98.5,132,197);


(lib.s52manshenti_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s52manshenti();
	this.instance.setTransform(-155,-397.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155,-397.5,310,795);


(lib.s52door2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C1C1B").s().p("AgDD1IgCgBIgCgBIgBgBIgBgBIAAgBIgBgBIAAgBIgBAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIABgBIAAAAIABgCIACgCIACgBIABgBIACAAIAAAAIAEABIACACIACACIAAABIABACIABACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAABIAAABIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIgBACIAAABIgBACIgBACIgBACIgBAAIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIgBABIAAABIAAABIgBABIgBABIgBABIgBAAIgBABIAAAAIgBABIgBAAIgCAAg");
	this.shape.setTransform(-257.1,-502.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 图层 1
	this.instance = new lib.s52door2();
	this.instance.setTransform(-259,-612);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-259,-612,518,1224);


(lib.s52door1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s52door1();
	this.instance.setTransform(-200,-611);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-611,400,1222);


(lib.s51man_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s51man();
	this.instance.setTransform(-209.5,-243);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-209.5,-243,419,486);


(lib.s51door2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s51door2();
	this.instance.setTransform(-450,-677);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-450,-677,900,1354);


(lib.s51door1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s51door1();
	this.instance.setTransform(-258.5,-593.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-258.5,-593.5,517,1187);


(lib.s55yuanquan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s558();
	this.instance.setTransform(335,-81);

	this.instance_1 = new lib.s557();
	this.instance_1.setTransform(-321.5,67);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-424.5,-170.5,849,341);


(lib.s55outuwu_2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_40 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(40).call(this.frame_40).wait(8));

	// 图层 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgF2AnsMAAAhPXILtAAMAAABPXg");
	mask.setTransform(3.7,11.2);

	// 图层 4 复制
	this.instance = new lib.s55outuwu_1();
	this.instance.setTransform(1,-14);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:426},11).wait(1).to({y:-14},0).to({y:426},11).wait(1).to({y:-14},0).to({y:426},11).wait(1).to({y:-14},0).to({y:426},11).wait(1));

	// 图层 3
	this.instance_1 = new lib.s55outuwu3();
	this.instance_1.setTransform(-23,-260);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},2).wait(4).to({_off:false},0).to({_off:true},2).wait(4).to({_off:false},0).to({_off:true},2).wait(4).to({_off:false},0).to({_off:true},2).wait(4).to({_off:false},0).to({_off:true},2).wait(4).to({_off:false},0).to({_off:true},2).wait(4).to({_off:false},0).to({_off:true},2).wait(4).to({_off:false},0).to({_off:true},2).wait(4));

	// 图层 2
	this.instance_2 = new lib.s55outuwu2();
	this.instance_2.setTransform(-23,-260);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},2).wait(4).to({_off:false},0).to({_off:true},2).wait(4).to({_off:false},0).to({_off:true},2).wait(4).to({_off:false},0).to({_off:true},2).wait(4).to({_off:false},0).to({_off:true},2).wait(4).to({_off:false},0).to({_off:true},2).wait(4).to({_off:false},0).to({_off:true},2).wait(4).to({_off:false},0).to({_off:true},2).wait(2));

	// 图层 1
	this.instance_3 = new lib.s55outuwu1();
	this.instance_3.setTransform(-23,-260);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({_off:true},2).wait(4).to({_off:false},0).to({_off:true},2).wait(4).to({_off:false},0).to({_off:true},2).wait(4).to({_off:false},0).to({_off:true},2).wait(4).to({_off:false},0).to({_off:true},2).wait(4).to({_off:false},0).to({_off:true},2).wait(4).to({_off:false},0).to({_off:true},2).wait(4).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-260,46,520);


(lib.s54_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// !
	this.instance = new lib.s54();
	this.instance.setTransform(-243,165,0.002,0.001,0,0,0,-25.2,35.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({regX:0,regY:0,scaleX:1,scaleY:1},4).wait(1).to({rotation:6},0).wait(1).to({regX:-0.1,regY:0.1,rotation:-8},0).wait(1).to({rotation:10,x:-233,y:165.1},0).wait(1).to({regX:-0.2,regY:0.2,rotation:-4,y:159},0).wait(1).to({regX:-0.3,rotation:4,y:175},0).wait(1).to({regX:0,regY:0,rotation:0,x:-243,y:165},0).wait(1).to({rotation:6},0).wait(1).to({regX:-0.1,regY:0.1,rotation:-8},0).wait(1).to({rotation:10,x:-233,y:165.1},0).wait(1).to({regX:-0.2,regY:0.2,rotation:-4,y:159},0).wait(1).to({regX:-0.3,rotation:4,y:175},0).wait(1).to({regX:0,regY:0,rotation:0,x:-243,y:165},0).wait(1).to({rotation:6},0).wait(1).to({regX:-0.1,regY:0.1,rotation:-8},0).wait(1).to({rotation:10,x:-233,y:165.1},0).wait(1).to({regX:-0.2,regY:0.2,rotation:-4,y:159},0).wait(1).to({regX:-0.3,rotation:4,y:175},0).wait(1).to({regX:0,regY:0,rotation:0,x:-243,y:165},0).wait(1).to({rotation:6},0).wait(1).to({regX:-0.1,regY:0.1,rotation:-8},0).wait(1).to({rotation:10,x:-233,y:165.1},0).wait(1).to({regX:-0.2,regY:0.2,rotation:-4,y:159},0).wait(1).to({regX:-0.3,rotation:4,y:175},0).wait(36));

	// uncle tou
	this.instance_1 = new lib.s54uncletou_1();
	this.instance_1.setTransform(24.2,-150,1,1,-3,0,0,141.7,-33.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({regY:-33,rotation:-6,x:34.3,y:-160},27,cjs.Ease.get(1)).wait(36));

	// man shou
	this.instance_2 = new lib.s54manshou_1();
	this.instance_2.setTransform(239,42,1,1,0,0,0,161.5,56);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({rotation:4,x:233,y:48},27,cjs.Ease.get(1)).wait(36));

	// uncle jiao
	this.instance_3 = new lib.s54unclejiao_1();
	this.instance_3.setTransform(-65.7,583.7,1,1,-1,0,0,131.7,116.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({regX:131.8,regY:116.8,rotation:10,x:-55.7,y:573.8},27,cjs.Ease.get(1)).wait(36));

	// uncle youshou
	this.instance_4 = new lib.s54uncleyoushou_1();
	this.instance_4.setTransform(143.9,155.8,1,1,-4,0,0,-112.1,-95.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({regY:-95.1,rotation:4,x:153.9,y:145.9},27,cjs.Ease.get(1)).wait(36));

	// uncle
	this.instance_5 = new lib.s54uncle_1();
	this.instance_5.setTransform(48,245.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({x:58,y:235.5},27,cjs.Ease.get(1)).wait(36));

	// uncle zuoshou
	this.instance_6 = new lib.s54unclezuoshou_1();
	this.instance_6.setTransform(-64.9,56.4,1,1,9,0,0,56.6,-45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({rotation:-10,x:-54.8,y:46.5},27,cjs.Ease.get(1)).wait(36));

	// man
	this.instance_7 = new lib.s54man_1();
	this.instance_7.setTransform(20,81);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({x:14,y:87},27,cjs.Ease.get(1)).wait(36));

	// 图层 1
	this.instance_8 = new lib.s54bg();
	this.instance_8.setTransform(-375,-610);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-375,-610,757.5,1280);


(lib.s53up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C1C1B").s().p("Eg9YAAJIgFgJIADgDIACgCIAFAAIAAgCMB6sAACIAFAFIgFAJMh6xAAAg");
	this.shape.setTransform(389.2,784.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(105));

	// s5-3 !
	this.instance = new lib.s53();
	this.instance.setTransform(88,576,0.006,0.003,0,0,0,0,17.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1},3).wait(1).to({x:92},0).wait(1).to({x:88},0).wait(1).to({y:580},0).wait(1).to({y:576},0).wait(1).to({x:84},0).wait(1).to({y:572},0).wait(1).to({x:90},0).wait(1).to({y:578},0).wait(1).to({x:88,y:576},0).wait(1).to({x:92},0).wait(1).to({x:88},0).wait(1).to({y:580},0).wait(1).to({y:576},0).wait(1).to({x:84},0).wait(1).to({y:572},0).wait(1).to({x:90},0).wait(1).to({y:578},0).wait(1).to({x:88,y:576},0).wait(1).to({x:92},0).wait(1).to({x:88},0).wait(1).to({y:580},0).wait(1).to({y:576},0).wait(1).to({x:84},0).wait(1).to({y:572},0).wait(1).to({x:90},0).wait(1).to({y:578},0).wait(2).to({x:88,y:576},0).wait(1).to({x:92},0).wait(1).to({x:88},0).wait(1).to({y:580},0).wait(1).to({y:576},0).wait(1).to({x:84},0).wait(1).to({y:572},0).wait(1).to({x:90},0).wait(1).to({y:578},0).wait(1).to({x:88,y:576},0).wait(1).to({x:92},0).wait(1).to({x:88},0).wait(1).to({y:580},0).wait(1).to({y:576},0).wait(1).to({x:84},0).wait(1).to({y:572},0).wait(1).to({x:90},0).wait(1).to({y:578},0).wait(1).to({x:88,y:576},0).wait(1).to({x:92},0).wait(1).to({x:88},0).wait(1).to({y:580},0).wait(1).to({y:576},0).wait(1).to({x:84},0).wait(1).to({y:572},0).wait(1).to({x:90},0).wait(1).to({y:578},0).wait(2).to({x:88,y:576},0).wait(1).to({x:84},0).wait(1).to({y:572},0).wait(1).to({x:90},0).wait(1).to({y:578},0).wait(2).to({x:88,y:576},0).wait(1));

	// s5-3 eye 2
	this.instance_1 = new lib.s53eye2();
	this.instance_1.setTransform(196,408);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({_off:true},20).wait(66));

	// s5-3 eye 1
	this.instance_2 = new lib.s53eye1();
	this.instance_2.setTransform(198,406);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},19).wait(86));

	// 图层 16 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg+VBA3MAAJiBtMB8iAAAMgAJCBtg");
	mask.setTransform(390,369.1);

	// 图层 6
	this.instance_3 = new lib.s53suduxian();
	this.instance_3.setTransform(362,401,0,0);
	this.instance_3._off = true;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_3.cache(-602,-933,1204,1866);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(41).to({_off:false},0).to({regX:0.1,regY:0.3,scaleX:1.15,scaleY:0.7},4).wait(1).to({x:368},0).wait(1).to({x:360},0).wait(1).to({y:409},0).wait(1).to({y:401},0).wait(1).to({x:368},0).wait(1).to({x:362,y:397},0).wait(1).to({y:401},0).wait(1).to({x:368},0).wait(1).to({x:360},0).wait(1).to({y:409},0).wait(1).to({y:401},0).wait(1).to({x:368},0).wait(1).to({x:362,y:397},0).wait(1).to({y:401},0).wait(1).to({x:368},0).wait(1).to({x:360},0).wait(1).to({y:409},0).wait(1).to({y:401},0).wait(1).to({x:368},0).wait(1).to({x:362,y:397},0).wait(1).to({y:401},0).wait(1).to({x:368},0).wait(1).to({x:360},0).wait(1).to({y:409},0).wait(1).to({y:401},0).wait(1).to({x:368},0).wait(1).to({x:362,y:397},0).wait(1).to({y:401},0).wait(1).to({x:368},0).wait(1).to({x:360},0).wait(1).to({y:409},0).wait(1).to({y:401},0).wait(1).to({x:368},0).wait(1).to({x:362,y:397},0).wait(1).to({y:401},0).wait(1).to({x:368},0).wait(1).to({x:360},0).wait(1).to({y:409},0).wait(1).to({y:401},0).wait(1).to({x:368},0).wait(1).to({x:362,y:397},0).wait(1).to({y:401},0).wait(1).to({x:368},0).wait(1).to({x:360},0).wait(1).to({y:409},0).wait(1).to({y:401},0).wait(1).to({x:368},0).wait(1).to({x:362,y:397},0).wait(1).to({y:401},0).wait(1).to({x:368},0).wait(1).to({x:360},0).wait(1).to({y:409},0).wait(1).to({y:401},0).wait(1).to({x:368},0).wait(1).to({x:360},0).wait(1).to({y:409},0).wait(1).to({y:401},0).wait(1).to({x:368},0).wait(1).to({x:362,y:397},0).wait(1));

	// 图层 4 复制
	this.instance_4 = new lib.s53tou();
	this.instance_4.setTransform(441,806,1,1,0,0,0,441,806);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(41).to({_off:false},0).to({scaleX:1.28,scaleY:1.28,alpha:0},7).wait(57));

	// 图层 4
	this.instance_5 = new lib.s53tou();
	this.instance_5.setTransform(441,806,1,1,0,0,0,441,806);
	this.instance_5._off = true;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(39).to({_off:false},0).wait(1).to({x:445},0).wait(1).to({x:441},0).wait(1).to({y:802},0).wait(1).to({x:437},0).wait(1).to({y:806},0).wait(1).to({x:441},0).wait(1).to({x:437},0).wait(1).to({x:433},0).wait(1).to({x:441},0).wait(57));

	// s5-3 man
	this.instance_6 = new lib.s53man();
	this.instance_6.setTransform(142,156);

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},39).wait(66));

	// s5-3 huanying
	this.instance_7 = new lib.s53huanying_1();
	this.instance_7.setTransform(182.2,126.7,0.004,0.012,0,0,0,13.3,4.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(35).to({_off:false},0).to({regX:0,regY:0,scaleX:1.6,scaleY:1.6,guide:{path:[182.3,126.6,185.3,125.5,188.3,124.3,197,121.1,207.4,118,240.9,108.4,279.4,104.5,402.5,92,528.7,142.1,598.3,169.7,672.3,169.7,731.5,169.7,790.9,152.2,833.3,139.6,871.5,119.6,890.6,109.6,901.3,102.1]}},17).to({_off:true},1).wait(52));

	// s5-3 ding
	this.instance_8 = new lib.s53ding_1();
	this.instance_8.setTransform(181.5,127,0.003,0.005,0,0,0,0,10);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(12).to({_off:false},0).to({regY:0,scaleX:1.4,scaleY:1.4,guide:{path:[181.6,126.9,185,125.6,188.3,124.3,197,121.1,207.4,118,240.9,108.4,279.4,104.5,402.5,92,528.7,142.1,598.3,169.7,672.3,169.7,731.5,169.7,790.9,152.2,833.3,139.6,871.5,119.6,889.1,110.4,899.5,103.3]}},17).to({_off:true},1).wait(75));

	// s5-3 ling shang
	this.instance_9 = new lib.s53lingshang_1();
	this.instance_9.setTransform(247,127.5,1,1,0,0,0,65.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(7).to({regY:0.1,scaleX:1.1,scaleY:1.1,y:127.6},5).to({regY:0,scaleX:1,scaleY:1,y:127.5},5).wait(6).to({regY:0.1,scaleX:1.1,scaleY:1.1,y:127.6},3).to({regY:0,scaleX:1,scaleY:1,y:127.5},3).to({regY:0.1,scaleX:1.1,scaleY:1.1,y:127.6},3).to({regY:0,scaleX:1,scaleY:1,y:127.5},3).to({regY:0.1,scaleX:1.1,scaleY:1.1,y:127.6},3).to({regY:0,scaleX:1,scaleY:1,y:127.5},3).to({regY:0.1,scaleX:1.1,scaleY:1.1,y:127.6},3).to({regY:0,scaleX:1,scaleY:1,y:127.5},3).wait(58));

	// s5-3 ling di
	this.instance_10 = new lib.s53lingdi();
	this.instance_10.setTransform(52,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(105));

	// 图层 16 复制 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Eg+VBGpMAAKiNRMB8hAAAMgAKCNRg");
	mask_1.setTransform(390.1,332);

	// s5-3 bg up
	this.instance_11 = new lib.s53bgup();

	this.instance_11.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(105));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.2,0,786.9,785.2);


(lib.s53down = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hengxian
	this.instance = new lib.s53hengxian();
	this.instance.setTransform(-375,172);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(80));

	// ?
	this.instance_1 = new lib.s53_1();
	this.instance_1.setTransform(253,366,0.005,0.004,0,0,0,-46,60.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({_off:false},0).to({regY:61.1,scaleX:1.1,scaleY:1.1,y:366.1},7).to({scaleX:0.9,scaleY:0.9},3).to({scaleX:1.05,scaleY:1.05,y:366},2).to({scaleX:0.95,scaleY:0.95},2).to({regX:-45.5,scaleX:1,scaleY:1,y:366.1},1).wait(42));

	// man shou
	this.instance_2 = new lib.s53manshou_1();
	this.instance_2.setTransform(-51.5,563.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({x:-66.5,y:553.5},9).wait(63));

	// uncle gebo
	this.instance_3 = new lib.s53unclegebo_1();
	this.instance_3.setTransform(-2.9,425.4,1,1,-5,0,0,80.5,-108.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({regX:80.6,rotation:0},9).wait(63));

	// man gebo
	this.instance_4 = new lib.s53mangebo_1();
	this.instance_4.setTransform(-211.5,496);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({x:-226.5,y:486},9).wait(63));

	// youyan
	this.instance_5 = new lib.s53youyan();
	this.instance_5.setTransform(160.5,280.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(17).to({x:154.5},4).wait(59));

	// zuoyan
	this.instance_6 = new lib.s53zuoyan();
	this.instance_6.setTransform(95.5,278);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(17).to({x:88},4).wait(59));

	// uncle
	this.instance_7 = new lib.s53uncle();
	this.instance_7.setTransform(-100,186);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(80));

	// ya
	this.instance_8 = new lib.s53ya();
	this.instance_8.setTransform(202,253.5,0.026,0.017,0,0,0,-9.5,0);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(20).to({_off:false},0).to({scaleX:1,scaleY:1},2).wait(58));

	// pa 2
	this.instance_9 = new lib.s53pa2_1();
	this.instance_9.setTransform(-97,510,0.008,0.009,0,0,0,12.6,28.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(17).to({_off:false},0).to({regX:11.5,scaleX:1,scaleY:1},2).wait(61));

	// pa 1
	this.instance_10 = new lib.s53pa1_1();
	this.instance_10.setTransform(-67.5,569.5,0.009,0.015,0,0,0,-17.1,-13.2);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(17).to({_off:false},0).to({regX:-11,regY:-17.1,scaleX:1,scaleY:1,y:569.4},2).wait(61));

	// 图层 1
	this.instance_11 = new lib.s53bgdown();
	this.instance_11.setTransform(-375,193);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-389,172,764,486.8);


(lib.s52uncle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// s5-2 uncle shou
	this.instance = new lib.s52uncleshou_1();
	this.instance.setTransform(-122.2,-145.7,1,1,3,0,0,-111.2,-127.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-111.3,rotation:-2,y:-145.6},7).to({regX:-111.2,rotation:3,y:-145.7},7).to({regX:-111.3,rotation:-2,y:-145.6},7).to({regX:-111.2,rotation:3,y:-145.7},7).to({regX:-111.3,rotation:-2,y:-145.6},7).to({regX:-111.2,rotation:3,y:-145.7},7).to({regX:-111.3,rotation:-2,y:-145.6},7).to({regX:-111.2,rotation:3,y:-145.7},7).wait(104));

	// s5-2 uncle tou
	this.instance_1 = new lib.s52uncletou_1();
	this.instance_1.setTransform(-72.5,-253.9,1,1,0,0,0,-21,93.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:93,rotation:8},6).wait(16).to({regY:93.1,rotation:0},6).to({regY:93,rotation:8},6).wait(16).to({regX:-21.1,rotation:0},6).wait(104));

	// s5-2 uncle shenti
	this.instance_2 = new lib.s52uncleshenti();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.5,-477,284.1,954);


(lib.s52man = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.s52mantou_1();
	this.instance.setTransform(-4,-466.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-462.5},9).to({y:-466.5},10).to({y:-462.5},9).wait(132));

	// 图层 1
	this.instance_1 = new lib.s52manshenti_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-4.5},9).to({y:0},10).to({y:-4.5},9).wait(132));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155,-565,310,962.5);


(lib.s52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// s5-2 uncle
	this.instance = new lib.s52uncle();
	this.instance.setTransform(707.5,821);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(160));

	// s5-2 711
	this.instance_1 = new lib.s52711();
	this.instance_1.setTransform(-75,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160));

	// s5-2 man
	this.instance_2 = new lib.s52man();
	this.instance_2.setTransform(331.6,1318.8,0.985,0.985,0,0,0,0.1,397.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).to({regY:397.6,scaleX:1.02,scaleY:1.02,x:312.1,y:1358},9).to({scaleX:1.07,scaleY:1.07,x:290.4,y:1351.9},10).to({scaleX:1.1,scaleY:1.1,x:273,y:1377},8).wait(113));

	// s5-2 door 1
	this.instance_3 = new lib.s52door1_1();
	this.instance_3.setTransform(113,638);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-27},11).wait(14).to({x:173},12).wait(123));

	// s5-2 door 2
	this.instance_4 = new lib.s52door2_1();
	this.instance_4.setTransform(687,676);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:827},11).wait(14).to({x:627},12).wait(123));

	// s5-2 man
	this.instance_5 = new lib.s52man();
	this.instance_5.setTransform(375.1,1291.1,0.9,0.9,0,0,0,0.1,397.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.94,scaleY:0.94,x:355.6,y:1321.5},9).to({regY:397.7,scaleX:0.98,scaleY:0.98,x:333.8,y:1314.5},10).to({_off:true},1).wait(140));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87,-38,1033,1336);


(lib.s51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// s5-1 man
	this.instance = new lib.s51man_1();
	this.instance.setTransform(895.8,1363.4,1.4,1.4,0,0,0,36.2,188.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,guide:{path:[895.7,1363.3,891.3,1354.7,883.2,1343.4,866.7,1320.9,847.4,1307.3,820.4,1288.2,791.4,1289.9,755.3,1291.9,718.1,1326.3,712.3,1291.2,692.8,1266.9,674.3,1243.8,646.4,1234,618.7,1224.3,586.7,1229.2,553.8,1234.3,522.1,1254.3]}},33).wait(15));

	// s5-1 711
	this.instance_1 = new lib.s51711();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(48));

	// s5-1 door 1
	this.instance_2 = new lib.s51door1_1();
	this.instance_2.setTransform(166.5,747.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(31).to({x:46.5,y:707.5},16).wait(1));

	// s5-1 door 2
	this.instance_3 = new lib.s51door2_1();
	this.instance_3.setTransform(439,665);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(31).to({x:559,y:721},16).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-12,1230.4,1451.3);


(lib.s5 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_274 = function() {
		this.stop();
		try{app.showBtns()}catch(e){}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(274).call(this.frame_274).wait(1));

	// 图层 3
	this.instance = new lib.s55zi_1();
	this.instance.setTransform(377.3,230);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(253).to({_off:false},0).to({alpha:1},7).wait(15));

	// s5-5 uncle zuoshou
	this.instance_1 = new lib.s55zuoshou();
	this.instance_1.setTransform(118,851.5,1,1,0,0,0,-16,-147.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(215).to({_off:false},0).to({regX:-16.1,rotation:8,x:108,y:857.5},5).to({regX:-16,rotation:0,x:118,y:851.5},5).to({regX:-16.1,rotation:8,x:108,y:857.5},5).to({regX:-16,rotation:0,x:118,y:851.5},5).to({regX:-16.1,rotation:8,x:108,y:857.5},5).to({regX:-16,rotation:0,x:118,y:851.5},5).to({regX:-16.1,rotation:8,x:108,y:857.5},5).to({regX:-16,rotation:0,x:118,y:851.5},5).wait(20));

	// s5-5 uncle youshou
	this.instance_2 = new lib.s55youshou();
	this.instance_2.setTransform(290.9,824.9,1,1,0,0,0,16.4,-157.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(215).to({_off:false},0).to({regX:16.5,rotation:8,x:277,y:823.9},5).to({regX:16.4,rotation:0,x:290.9,y:824.9},5).to({regX:16.5,rotation:8,x:277,y:823.9},5).to({regX:16.4,rotation:0,x:290.9,y:824.9},5).to({regX:16.5,rotation:8,x:277,y:823.9},5).to({regX:16.4,rotation:0,x:290.9,y:824.9},5).to({regX:16.5,rotation:8,x:277,y:823.9},5).to({regX:16.4,rotation:0,x:290.9,y:824.9},5).wait(20));

	// s5-5 uncle tou
	this.instance_3 = new lib.s55uncletou_1();
	this.instance_3.setTransform(243.5,635,1,1,0,0,0,75,121);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(215).to({_off:false},0).to({regY:121.1,rotation:-2.8,y:639.1},5).to({regY:121,rotation:0,y:635},5).to({regY:121.1,rotation:-2.8,y:639.1},5).to({regY:121,rotation:0,y:635},5).to({regY:121.1,rotation:-2.8,y:639.1},5).to({regY:121,rotation:0,y:635},5).to({regY:121.1,rotation:-2.8,y:639.1},5).to({regY:121,rotation:0,y:635},5).wait(20));

	// s5-5 uncle shenti
	this.instance_4 = new lib.s55shenti();
	this.instance_4.setTransform(207.1,1218.6,1,1,0,0,0,10.1,272.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(215).to({_off:false},0).to({y:1222.6},5).to({y:1218.6},5).to({y:1222.6},5).to({y:1218.6},5).to({y:1222.6},5).to({y:1218.6},5).to({y:1222.6},5).to({y:1218.6},5).wait(20));

	// s5-5 man shou
	this.instance_5 = new lib.s55manshou_1();
	this.instance_5.setTransform(552.5,739);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(215).to({_off:false},0).to({y:759},10).to({y:739},10).to({y:759},10).to({y:739},10).wait(20));

	// outuwu
	this.instance_6 = new lib.s55outuwu_2();
	this.instance_6.setTransform(557,1005);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(215).to({_off:false},0).to({y:1013},10).to({y:1005},10).to({y:1013},10).to({y:1005},10).wait(20));

	// s5-5 man tou
	this.instance_7 = new lib.s55tou();
	this.instance_7.setTransform(556.5,680);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(215).to({_off:false},0).to({y:688},10).to({y:680},10).to({y:688},10).to({y:680},10).wait(20));

	// s5-5 man jian
	this.instance_8 = new lib.s55jian();
	this.instance_8.setTransform(551.5,709.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(215).to({_off:false},0).to({y:729.5},10).to({y:709.5},10).to({y:729.5},10).to({y:709.5},10).wait(20));

	// s5-5 man shenti
	this.instance_9 = new lib.s55manshenti();
	this.instance_9.setTransform(465,719);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(215).to({_off:false},0).wait(60));

	// 图层 24
	this.instance_10 = new lib.s551();
	this.instance_10.setTransform(98.5,731.5,1,1,160,0,0,-0.1,0.1);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(215).to({_off:false},0).to({regX:0,regY:0,rotation:0,x:98.6,y:351.5,alpha:1},40).wait(20));

	// 图层 23
	this.instance_11 = new lib.s552();
	this.instance_11.setTransform(632.5,532,1,1,32);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(215).to({_off:false},0).to({rotation:-17,y:252,alpha:1},40).wait(20));

	// 图层 22
	this.instance_12 = new lib.s553();
	this.instance_12.setTransform(252,282);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(215).to({_off:false},0).to({rotation:-101,y:-18,alpha:1},40).wait(20));

	// 图层 21
	this.instance_13 = new lib.s554();
	this.instance_13.setTransform(586,714.5);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(215).to({_off:false},0).to({rotation:-113,y:494.5,alpha:1},40).wait(20));

	// 图层 20
	this.instance_14 = new lib.s555();
	this.instance_14.setTransform(326.5,696.5);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(215).to({_off:false},0).to({y:609,alpha:1},10).to({y:571.5,alpha:0},10).to({y:534,alpha:1},10).to({y:496.5,alpha:0},10).wait(20));

	// 图层 19
	this.instance_15 = new lib.s556();
	this.instance_15.setTransform(164,636,1,1,-119);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(215).to({_off:false},0).to({rotation:-216,x:164.1,y:216.1,alpha:1},40).wait(20));

	// 图层 18
	this.instance_16 = new lib.s55yuanquan("synched",0);
	this.instance_16.setTransform(302.5,903.5);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(215).to({_off:false},0).to({y:543.5,alpha:1},40).wait(20));

	// 图层 17
	this.instance_17 = new lib.s559();
	this.instance_17.setTransform(573.1,410.5,1,1,107);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(215).to({_off:false},0).to({rotation:275,x:573,y:150.5,alpha:1},40).wait(20));

	// 图层 16
	this.instance_18 = new lib.s5510();
	this.instance_18.setTransform(285.5,916);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(215).to({_off:false},0).to({y:696,alpha:1},40).wait(20));

	// 图层 15
	this.instance_19 = new lib.s5511();
	this.instance_19.setTransform(159.5,251.5);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(215).to({_off:false},0).to({alpha:0},10).to({alpha:1},10).to({alpha:0},10).to({alpha:1},10).wait(20));

	// 图层 14
	this.instance_20 = new lib.s5512();
	this.instance_20.setTransform(26,630.5);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(215).to({_off:false},0).to({alpha:1},10).to({alpha:0},10).to({alpha:1},10).to({alpha:0},10).wait(20));

	// 图层 13
	this.instance_21 = new lib.s5513();
	this.instance_21.setTransform(556.5,321.5);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(215).to({_off:false},0).to({alpha:1},10).to({alpha:0},10).to({alpha:1},10).to({alpha:0},10).wait(20));

	// 图层 12
	this.instance_22 = new lib.s5514();
	this.instance_22.setTransform(229,231);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(215).to({_off:false},0).to({alpha:1},10).to({alpha:0},10).to({alpha:1},10).to({alpha:0},10).wait(20));

	// 图层 2
	this.instance_23 = new lib.s55bg();
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(215).to({_off:false},0).wait(60));

	// suduxian
	this.instance_24 = new lib.s54suduxian();
	this.instance_24.setTransform(359,557,0,0,0,0,0,121.4,0);
	this.instance_24._off = true;
	this.instance_24.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_24.cache(-602,-933,1204,1866);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(181).to({_off:false},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:427,y:556.9},0).wait(1).to({regX:121.5,regY:0.1,scaleX:0.67,scaleY:0.67,x:459.1,y:557},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:359},0).wait(1).to({x:365},0).wait(1).to({x:349},0).wait(1).to({x:341,y:551},0).wait(1).to({x:347,y:571},0).wait(1).to({x:339,y:561},0).wait(1).to({x:353,y:575},0).wait(1).to({y:601},0).wait(1).to({y:585},0).wait(1).to({x:359,y:557},0).wait(1).to({x:365},0).wait(1).to({x:349},0).wait(1).to({x:341,y:551},0).wait(1).to({x:347,y:571},0).wait(1).to({x:339,y:561},0).wait(1).to({x:353,y:575},0).wait(1).to({y:601},0).wait(1).to({y:585},0).wait(1).to({x:359,y:557},0).wait(1).to({x:365},0).wait(1).to({x:349},0).wait(1).to({x:341,y:551},0).wait(1).to({x:347,y:571},0).wait(1).to({x:339,y:561},0).wait(1).to({x:353,y:575},0).wait(1).to({y:601},0).wait(1).to({y:585},0).wait(1).to({x:359,y:557},0).wait(1).to({x:365},0).wait(1).to({x:349},0).wait(1).to({x:341,y:551},0).wait(1).to({x:347,y:571},0).to({_off:true},1).wait(59));

	// s5-4
	this.instance_25 = new lib.s54_1();
	this.instance_25.setTransform(375,610,0.001,0,0,0,0,0,126);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(179).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1},4).to({_off:true},33).wait(59));

	// s5-4 down
	this.instance_26 = new lib.s53down();
	this.instance_26.setTransform(1139.4,613.2);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(146).to({_off:false},0).to({x:375,y:610},9).to({_off:true},28).wait(92));

	// s5-3 up
	this.instance_27 = new lib.s53up();
	this.instance_27.setTransform(0,-800);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(91).to({_off:false},0).to({y:0},10).to({_off:true},82).wait(92));

	// s5-2
	this.instance_28 = new lib.s52();
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(43).to({_off:false},0).to({_off:true},113).wait(119));

	// s5-1
	this.instance_29 = new lib.s51();

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(42).to({_off:true},1).wait(232));

	// s5 bg
	this.instance_30 = new lib.s5bg();
	this.instance_30.setTransform(0,-17);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3EEFD").s().p("A+tKwQgkgBgYgNQgcgPgKghQgLghAUgWQALgMASgFQAMgEAWgDIELglQQgiSIcgvQN2hOLJAsQAcACAOAEQAXAGANAOQAUAXgLAjQgKAhgdARQgYAOglADQgTACgtgCQrQgruiBZQlcAincA9Is3BtQglAEgVAAIgEAAgACTAuIregmQgzgCgcgEQgrgFgggPQgmgTgXgfQgZgjACgmQjjgdkvAWQgdACn2A1QkhAelvAVQjKALnHATIopASIAAgCIAAgGIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgCIYKABIAAABIACAAIBhAAIAAAAIZ6AAIAAAAIAAgCIAAAAMA+bAABIAAgBIDOAAIAAAFIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAHQiAACioAAIhqgBQgPACgUAAMggtgAdQgKARgNAQQgqAvhFAfQg1AVhQARQiwAljiADIgcAAQiGAAj0gMg");
	this.shape.setTransform(375.1,68.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_30}]}).to({state:[]},156).wait(119));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-17,1230.4,1456.3);


// stage content:



(lib.qj_s5 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s5();
	this.instance.setTransform(523.2,711.1,1,1,0,0,0,523.2,711.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(283,593,1230.4,1456.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;