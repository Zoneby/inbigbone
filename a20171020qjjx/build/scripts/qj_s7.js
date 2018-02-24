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
		{src:"images/cv/s7bg.png", id:"s7bg"},
		{src:"images/cv/s71di.png", id:"s71di"},
		{src:"images/cv/s71di2.png", id:"s71di2"},
		{src:"images/cv/s71shangbanshen.png", id:"s71shangbanshen"},
		{src:"images/cv/s71shenti.png", id:"s71shenti"},
		{src:"images/cv/s71shenzi.png", id:"s71shenzi"},
		{src:"images/cv/s71shou.png", id:"s71shou"},
		{src:"images/cv/s71shouyintai.png", id:"s71shouyintai"},
		{src:"images/cv/s71tou.png", id:"s71tou"},
		{src:"images/cv/s71tuoba.png", id:"s71tuoba"},
		{src:"images/cv/s71xiabanshen.png", id:"s71xiabanshen"},
		{src:"images/cv/s71xiaohai.png", id:"s71xiaohai"},
		{src:"images/cv/s71xiaohaiyoushou.png", id:"s71xiaohaiyoushou"},
		{src:"images/cv/s71xiaohaizuoshou.png", id:"s71xiaohaizuoshou"},
		{src:"images/cv/s71youshou.png", id:"s71youshou"},
		{src:"images/cv/s71zuoshou.png", id:"s71zuoshou"},
		{src:"images/cv/s72baixian.png", id:"s72baixian"},
		{src:"images/cv/s72di.png", id:"s72di"},
		{src:"images/cv/s72di2.png", id:"s72di2"},
		{src:"images/cv/s72ding.png", id:"s72ding"},
		{src:"images/cv/s72guang1.png", id:"s72guang1"},
		{src:"images/cv/s72guang2.png", id:"s72guang2"},
		{src:"images/cv/s72guang3.png", id:"s72guang3"},
		{src:"images/cv/s72kuang.png", id:"s72kuang"},
		{src:"images/cv/s72kuang2.png", id:"s72kuang2"},
		{src:"images/cv/s72lian.png", id:"s72lian"},
		{src:"images/cv/s72shenti2.png", id:"s72shenti2"},
		{src:"images/cv/s72shenzi.png", id:"s72shenzi"},
		{src:"images/cv/s72shou.png", id:"s72shou"},
		{src:"images/cv/s72shouhou.png", id:"s72shouhou"},
		{src:"images/cv/s72shouqian.png", id:"s72shouqian"},
		{src:"images/cv/s72xian.png", id:"s72xian"},
		{src:"images/cv/s72yanjing.png", id:"s72yanjing"},
		{src:"images/cv/s72youshou.png", id:"s72youshou"},
		{src:"images/cv/s72zuoshou.png", id:"s72zuoshou"},
		{src:"images/cv/s72zuoshou2.png", id:"s72zuoshou2"},
		{src:"images/cv/s73bg2.png", id:"s73bg2"},
		{src:"images/cv/s73bo.png", id:"s73bo"},
		{src:"images/cv/s73dabi.png", id:"s73dabi"},
		{src:"images/cv/s73di.png", id:"s73di"},
		{src:"images/cv/s73hei.png", id:"s73hei"},
		{src:"images/cv/s73long.png", id:"s73long"},
		{src:"images/cv/s73shenti.png", id:"s73shenti"},
		{src:"images/cv/s73shou1.png", id:"s73shou1"},
		{src:"images/cv/s73shou2.png", id:"s73shou2"},
		{src:"images/cv/s73shou3.png", id:"s73shou3"},
		{src:"images/cv/s73shou4.png", id:"s73shou4"},
		{src:"images/cv/s73shou5.png", id:"s73shou5"},
		{src:"images/cv/s73tui.png", id:"s73tui"},
		{src:"images/cv/s73tuoba.png", id:"s73tuoba"},
		{src:"images/cv/s73xiaobi.png", id:"s73xiaobi"},
		{src:"images/cv/s73xingxing1.png", id:"s73xingxing1"},
		{src:"images/cv/s73xingxing2.png", id:"s73xingxing2"},
		{src:"images/cv/s73xingxing3.png", id:"s73xingxing3"},
		{src:"images/cv/s74beihouren.png", id:"s74beihouren"},
		{src:"images/cv/s74bg.png", id:"s74bg"},
		{src:"images/cv/s74jugong1.png", id:"s74jugong1"},
		{src:"images/cv/s74jugong2.png", id:"s74jugong2"},
		{src:"images/cv/s74jugong3.png", id:"s74jugong3"},
		{src:"images/cv/s74zi.png", id:"s74zi"}
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



(lib.s7bg = function() {
	this.initialize(img.s7bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1221);


(lib.s71di = function() {
	this.initialize(img.s71di);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,968,656);


(lib.s71di2 = function() {
	this.initialize(img.s71di2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,672,400);


(lib.s71shangbanshen = function() {
	this.initialize(img.s71shangbanshen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,230);


(lib.s71shenti = function() {
	this.initialize(img.s71shenti);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,159);


(lib.s71shenzi = function() {
	this.initialize(img.s71shenzi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,385,342);


(lib.s71shou = function() {
	this.initialize(img.s71shou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,171);


(lib.s71shouyintai = function() {
	this.initialize(img.s71shouyintai);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,324,346);


(lib.s71tou = function() {
	this.initialize(img.s71tou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,102);


(lib.s71tuoba = function() {
	this.initialize(img.s71tuoba);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,315);


(lib.s71xiabanshen = function() {
	this.initialize(img.s71xiabanshen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,198);


(lib.s71xiaohai = function() {
	this.initialize(img.s71xiaohai);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,82);


(lib.s71xiaohaiyoushou = function() {
	this.initialize(img.s71xiaohaiyoushou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,68);


(lib.s71xiaohaizuoshou = function() {
	this.initialize(img.s71xiaohaizuoshou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,81);


(lib.s71youshou = function() {
	this.initialize(img.s71youshou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,462,314);


(lib.s71zuoshou = function() {
	this.initialize(img.s71zuoshou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,348,495);


(lib.s72baixian = function() {
	this.initialize(img.s72baixian);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,636,24);


(lib.s72di = function() {
	this.initialize(img.s72di);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,636,261);


(lib.s72di2 = function() {
	this.initialize(img.s72di2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,672,400);


(lib.s72ding = function() {
	this.initialize(img.s72ding);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,188);


(lib.s72guang1 = function() {
	this.initialize(img.s72guang1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,62);


(lib.s72guang2 = function() {
	this.initialize(img.s72guang2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,63);


(lib.s72guang3 = function() {
	this.initialize(img.s72guang3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,113);


(lib.s72kuang = function() {
	this.initialize(img.s72kuang);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,639,264);


(lib.s72kuang2 = function() {
	this.initialize(img.s72kuang2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,639,264);


(lib.s72lian = function() {
	this.initialize(img.s72lian);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,520,266);


(lib.s72shenti2 = function() {
	this.initialize(img.s72shenti2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,384,267);


(lib.s72shenzi = function() {
	this.initialize(img.s72shenzi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,385,342);


(lib.s72shou = function() {
	this.initialize(img.s72shou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,236);


(lib.s72shouhou = function() {
	this.initialize(img.s72shouhou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,143);


(lib.s72shouqian = function() {
	this.initialize(img.s72shouqian);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,687,252);


(lib.s72xian = function() {
	this.initialize(img.s72xian);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,682,319);


(lib.s72yanjing = function() {
	this.initialize(img.s72yanjing);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,395,116);


(lib.s72youshou = function() {
	this.initialize(img.s72youshou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,462,314);


(lib.s72zuoshou = function() {
	this.initialize(img.s72zuoshou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,348,495);


(lib.s72zuoshou2 = function() {
	this.initialize(img.s72zuoshou2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,348,495);


(lib.s73bg2 = function() {
	this.initialize(img.s73bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,867,1223);


(lib.s73bo = function() {
	this.initialize(img.s73bo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.s73dabi = function() {
	this.initialize(img.s73dabi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,119);


(lib.s73di = function() {
	this.initialize(img.s73di);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,653,530);


(lib.s73hei = function() {
	this.initialize(img.s73hei);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.s73long = function() {
	this.initialize(img.s73long);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.s73shenti = function() {
	this.initialize(img.s73shenti);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,169,592);


(lib.s73shou1 = function() {
	this.initialize(img.s73shou1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,356,270);


(lib.s73shou2 = function() {
	this.initialize(img.s73shou2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,317,329);


(lib.s73shou3 = function() {
	this.initialize(img.s73shou3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,363,325);


(lib.s73shou4 = function() {
	this.initialize(img.s73shou4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,337);


(lib.s73shou5 = function() {
	this.initialize(img.s73shou5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,372);


(lib.s73tui = function() {
	this.initialize(img.s73tui);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,277);


(lib.s73tuoba = function() {
	this.initialize(img.s73tuoba);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,352,251);


(lib.s73xiaobi = function() {
	this.initialize(img.s73xiaobi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,107);


(lib.s73xingxing1 = function() {
	this.initialize(img.s73xingxing1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,68);


(lib.s73xingxing2 = function() {
	this.initialize(img.s73xingxing2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,51);


(lib.s73xingxing3 = function() {
	this.initialize(img.s73xingxing3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,55);


(lib.s74beihouren = function() {
	this.initialize(img.s74beihouren);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,755,593);


(lib.s74bg = function() {
	this.initialize(img.s74bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1224);


(lib.s74jugong1 = function() {
	this.initialize(img.s74jugong1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,340,682);


(lib.s74jugong2 = function() {
	this.initialize(img.s74jugong2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,418,559);


(lib.s74jugong3 = function() {
	this.initialize(img.s74jugong3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,377,433);


(lib.s74zi = function() {
	this.initialize(img.s74zi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,927,501);


(lib.s74zi_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s74zi();
	this.instance.setTransform(-324.4,-175.3,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-324.4,-175.3,648.9,350.7);


(lib.s74bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s74bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1224);


(lib.s73xingxing3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s73xingxing3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42,55);


(lib.s73xingxing2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s73xingxing2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39,51);


(lib.s73xingxing1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s73xingxing1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44,68);


(lib.s73xiaobi_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s73xiaobi();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,132,107);


(lib.s73tuoba_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s73tuoba();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,352,251);


(lib.s73tui_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s73tui();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180,277);


(lib.s73long_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s73long();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.s73hei_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s73hei();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.s73down = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 6
	this.instance = new lib.s73shou1();
	this.instance.setTransform(4,-100);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).wait(2));

	// 图层 5
	this.instance_1 = new lib.s73shou2();
	this.instance_1.setTransform(23,-123);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({_off:true},2).wait(2));

	// 图层 4
	this.instance_2 = new lib.s73shou3();
	this.instance_2.setTransform(-56,-155);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({_off:true},2).wait(4));

	// 图层 3
	this.instance_3 = new lib.s73shou4();
	this.instance_3.setTransform(-33,-122);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({_off:true},2).wait(6));

	// 图层 2
	this.instance_4 = new lib.s73shou5();
	this.instance_4.setTransform(21,-131);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},2).wait(8));

	// 图层 1
	this.instance_5 = new lib.s73di();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-131,653,661);


(lib.s73dabi_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s73dabi();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71,119);


(lib.s73bo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s73bo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.s73bg2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s73bg2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,867,1223);


(lib.s72zuoshou_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s72zuoshou();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#12130F").s().p("AnIDMQgEgKAFgLQAFgLALgGQANgHAeAAIB0gCQBBgDAxgJQCBgWBPhDQgWgXgJgNQgOgUgGgSQgIgYAFgYQAFgZAQgNQANgKAfgGQBjgTBigGQAagBANgCQAWgEAPgIQALgGAOgMIAWgVQAdgYAaADQAPACAKAOQAKAOgGANQgFAJgNAIIgXALQgLAGgQAPQgRARgIAFQgRALgYAFQgOADgeADIiKANQggADgRADQgaAFgUAJQgFAYAgAbQAQAOAHAIQALANACAOQADAcglAfQhXBHiPAZQg3AJhHAEIh/AFIgEAAQgkAAgIgSg");
	this.shape.setTransform(12.3,511.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.6,0,381.6,534.1);


(lib.s72youshou_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s72youshou();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,462,314);


(lib.s72yanjing_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s72yanjing();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,395,116);


(lib.s72shouqian_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s72shouqian();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,687,252);


(lib.s72shouhou_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s72shouhou();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,231,143);


(lib.s72shou_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s72shou();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,236);


(lib.s72guang3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s72guang3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83,113);


(lib.s72guang2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s72guang2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,63);


(lib.s72guang1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s72guang1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,62);


(lib.s72ding_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s72ding();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,256,188);


(lib.s72baixian_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s72baixian();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,636,24);


(lib.s71zuoshou_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s71zuoshou();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#12130F").s().p("AnIDMQgEgKAFgLQAFgLALgGQANgHAeAAIB0gCQBBgDAxgJQCBgWBPhDQgWgXgJgNQgOgUgGgSQgIgYAFgYQAFgZAQgNQANgKAfgGQBjgTBigGQAagBANgCQAWgEAPgIQALgGAOgMIAWgVQAdgYAaADQAPACAKAOQAKAOgGANQgFAJgNAIIgXALQgLAGgQAPQgRARgIAFQgRALgYAFQgOADgeADIiKANQggADgRADQgaAFgUAJQgFAYAgAbQAQAOAHAIQALANACAOQADAcglAfQhXBHiPAZQg3AJhHAEIh/AFIgEAAQgkAAgIgSg");
	this.shape.setTransform(12.3,511.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.6,0,381.6,534.1);


(lib.s71youshou_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s71youshou();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,462,314);


(lib.s71xiaohaizuoshou_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s71xiaohaizuoshou();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31,81);


(lib.s71xiaohaiyoushou_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s71xiaohaiyoushou();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37,68);


(lib.s71tuoba_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s71tuoba();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125,315);


(lib.s71tou_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s71tou();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,102);


(lib.s71shou_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s71shou();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55,171);


(lib.s74 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 图层 20
	this.instance = new lib.s74zi_1();
	this.instance.setTransform(380.5,810.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({_off:false},0).to({alpha:1},6).wait(33));

	// 图层 19
	this.instance_1 = new lib.s74jugong3();
	this.instance_1.setTransform(192,299);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({_off:true},2).wait(6).to({_off:false},0).to({_off:true},2).wait(6).to({_off:false},0).wait(45));

	// 图层 18
	this.instance_2 = new lib.s74jugong2();
	this.instance_2.setTransform(173,173);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(45));

	// 图层 17
	this.instance_3 = new lib.s74jugong1();
	this.instance_3.setTransform(190,51);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},2).wait(6).to({_off:false},0).to({_off:true},2).wait(6).to({_off:false},0).to({_off:true},2).wait(47));

	// 图层 15
	this.instance_4 = new lib.s74beihouren();
	this.instance_4.setTransform(21,42);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(21,42,755,691);


(lib.s73ren = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// xiaobi
	this.instance = new lib.s73xiaobi_1();
	this.instance.setTransform(129.5,83.2,1,1,0,0,0,129.5,83.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({regX:129.6,regY:83.3,rotation:5,x:149.6,y:85.8},43).wait(151));

	// dabi
	this.ikNode_3 = new lib.s73dabi_1();
	this.ikNode_3.setTransform(152.8,-18.2,1,1,0,0,0,50.8,15.8);

	this.timeline.addTween(cjs.Tween.get(this.ikNode_3).wait(6).to({regX:50.9,rotation:-10,x:152.9},43).wait(151));

	// shenti
	this.instance_1 = new lib.s73shenti();
	this.instance_1.setTransform(46,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(200));

	// tuoba
	this.instance_2 = new lib.s73tuoba_1();
	this.instance_2.setTransform(25.8,22.7,1,1,0,0,0,209.8,86.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({rotation:5,x:51.1,y:16.7},43).wait(151));

	// tui
	this.instance_3 = new lib.s73tui_1();
	this.instance_3.setTransform(211.5,75.6,1,1,0,0,0,59.5,261.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({rotation:-17},43).wait(151));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-184,-186,516,633);


(lib.s723 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s72kuang2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	// 图层 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egx6AUnMAAAgpOMBj1AAAMAAAApOg");
	mask.setTransform(319.5,132);

	// 图层 4
	this.instance_1 = new lib.s72shouqian_1();
	this.instance_1.setTransform(301.5,141,1,1,0,0,0,343.5,126);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({x:316.2},0).wait(1).to({x:321.2},0).wait(1).to({x:324.6},0).wait(1).to({x:327.2},0).wait(1).to({x:329.3},0).wait(1).to({x:331},0).wait(1).to({x:332.5},0).wait(1).to({x:333.7},0).wait(1).to({x:334.8},0).wait(1).to({x:335.7},0).wait(1).to({x:336.5},0).wait(1).to({x:337.2},0).wait(1).to({x:337.8},0).wait(1).to({x:338.4},0).wait(1).to({x:338.9},0).wait(1).to({x:339.3},0).wait(1).to({x:339.7},0).wait(1).to({x:340},0).wait(1).to({x:340.3},0).wait(1).to({x:340.5},0).wait(1).to({x:340.7},0).wait(1).to({x:340.9},0).wait(1).to({x:341},0).wait(1).to({x:341.2},0).wait(1).to({x:341.3},0).wait(2).to({x:341.4},0).wait(1).to({x:341.5},0).wait(65));

	// 图层 2
	this.instance_2 = new lib.s72shenti2();
	this.instance_2.setTransform(258,-2);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100));

	// 图层 3
	this.instance_3 = new lib.s72shouhou_1();
	this.instance_3.setTransform(211.5,72.5,1,1,0,0,0,115.5,71.5);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({x:226.2},0).wait(1).to({x:231.2},0).wait(1).to({x:234.6},0).wait(1).to({x:237.2},0).wait(1).to({x:239.3},0).wait(1).to({x:241},0).wait(1).to({x:242.4},0).wait(1).to({x:243.7},0).wait(1).to({x:244.7},0).wait(1).to({x:245.7},0).wait(1).to({x:246.5},0).wait(1).to({x:247.2},0).wait(1).to({x:247.8},0).wait(1).to({x:248.3},0).wait(1).to({x:248.8},0).wait(1).to({x:249.2},0).wait(1).to({x:249.6},0).wait(1).to({x:249.9},0).wait(1).to({x:250.2},0).wait(1).to({x:250.4},0).wait(1).to({x:250.7},0).wait(1).to({x:250.8},0).wait(1).to({x:251},0).wait(1).to({x:251.1},0).wait(1).to({x:251.2},0).wait(1).to({x:251.3},0).wait(1).to({x:251.4},0).wait(2).to({x:251.5},0).wait(64));

	// 图层 5
	this.instance_4 = new lib.s72xian();
	this.instance_4.setTransform(-15,-41);

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:-23},0).wait(1).to({y:-33},0).wait(1).to({y:-41},0).wait(1).to({x:-15},0).wait(1).to({x:-19,y:-45},0).wait(1).to({x:-15,y:-39},0).wait(1).to({x:-28,y:-32},0).wait(1).to({x:-15,y:-41},0).wait(1).to({x:-23},0).wait(1).to({y:-33},0).wait(1).to({y:-41},0).wait(1).to({x:-15},0).wait(1).to({x:-19,y:-45},0).wait(1).to({x:-15,y:-39},0).wait(1).to({x:-28,y:-32},0).wait(1).to({x:-15,y:-41},0).wait(1).to({x:-23},0).wait(1).to({y:-33},0).wait(1).to({y:-41},0).wait(1).to({x:-15},0).wait(1).to({x:-19,y:-45},0).wait(1).to({x:-15,y:-39},0).wait(1).to({x:-28,y:-32},0).wait(1).to({x:-15,y:-41},0).wait(1).to({x:-23},0).wait(1).to({y:-33},0).wait(1).to({y:-41},0).wait(1).to({x:-15},0).wait(1).to({x:-19,y:-45},0).wait(1).to({x:-15,y:-39},0).wait(1).to({x:-28,y:-32},0).wait(1).to({x:-15,y:-41},0).wait(1).to({x:-23},0).wait(1).to({y:-33},0).wait(1).to({y:-41},0).wait(1).to({x:-15},0).wait(1).to({x:-19,y:-45},0).wait(1).to({x:-15,y:-39},0).wait(1).to({x:-28,y:-32},0).wait(1).to({x:-15,y:-41},0).wait(1).to({x:-23},0).wait(1).to({y:-33},0).wait(1).to({y:-41},0).wait(1).to({x:-15},0).wait(1).to({x:-19,y:-45},0).wait(1).to({x:-15,y:-39},0).wait(1).to({x:-28,y:-32},0).wait(53));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,639,264);


(lib.s722 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kuang
	this.instance = new lib.s72kuang();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(110));

	// 图层 12 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgxrAUYMAAAgowMBjXAAAMAAAAowg");
	mask.setTransform(320,132.5);

	// shou
	this.instance_1 = new lib.s72shou_1();
	this.instance_1.setTransform(69.5,243,1,1,0,0,0,64.5,118);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({y:235},7).to({y:243},7).wait(85));

	// guang 3
	this.instance_2 = new lib.s72guang3_1();
	this.instance_2.setTransform(496,191.7,0.006,0.004,0,0,0,49.8,67.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34).to({_off:false},0).wait(1).to({regX:43.2,regY:63,scaleX:0.2,scaleY:0.2},0).wait(1).to({regX:43,regY:62.7,scaleX:0.5,scaleY:0.5},0).wait(1).to({regX:43.1,scaleX:0.8,scaleY:0.8,x:496.1},0).wait(1).to({regX:43,regY:62.6,scaleX:1,scaleY:1,x:496,y:191.6},0).wait(3).to({alpha:0},3).wait(66));

	// 图层 11 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_27 = new cjs.Graphics().p("AiCEsIgLAAIgDAAIgKAAIgHAAIgLAAIgRgDIgRgBQgfgCgegGIgHgBIgDgBQhLgJhOgcIgRgHQgLgDgOgHQgmgUgSgUQgKgLgPgZQgmhDgYhDQgKgZgEgYQgDgVgBgeIgBgjQgBgWADgLQADgJAFgGQAEgJAHgJQAJgKAVgLQAlgUApgKIAbgFIADgBIAbgGIAsgMQAqgMBNgIIAEgBIAKgCQAGgCAQAAQAMgCAIAAQAJgEAOgBIAZgCIAagBIAEgBIATgDIASgBIAEgBQATgEASAAIAKAAIACAAQASgCAiACIAJAAIBggBQBzgBA+ACQBhAEBOALIAPAEQBSAHAuAKQAiAHAIATQADAHgBAKIgDASIgOAzIgEAKIgBAEIgDAJIgCAKIgBACIAAAFQgBAIgEAJIgHANIgDAOIgEANIgEAGIgCAGIgBABIAAABQgDALgJAVIgFAPQgCALgDAGIgBACIgCAHIgHASIgCAHQgBAFgDADIgCAMIAAAAQgBAAAAAAQgBABAAAAQgBAAAAABQAAABgBAAIAAAFIgBAFIgCADIgCAEIAAADIAAABIgBACIAAAAQgCAFgDAEIgBAEIAAACIgBABIgBACIgBABIgBADIgBACIAAABIgBAEIgCADIgBADIgCACIgCAEIgCAFIgCACQgEALgDAFIAAAAQgEAIgJAIIgDACQgDAGgEADIgQAMQgKAKgGAEQgGAFgKADIgJAEQgEADgHADIgIAEIgKAEQgMAHgIACQgLAEgMAAIgRAHIgdAHQgoAIgdAEIgOACIgFAAIgHACIgLABIgbAEQguAGhdAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(27).to({graphics:mask_1_graphics_27,x:405.9,y:204.9}).wait(83));

	// guang 2
	this.instance_3 = new lib.s72guang2_1();
	this.instance_3.setTransform(510,205.5,1,1,0,0,0,25,31.5);
	this.instance_3._off = true;

	this.instance_3.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({_off:false},0).to({x:326},7).wait(76));

	// 图层 10 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_27 = new cjs.Graphics().p("Ag/EuQhTgChDgJIhJgNQgrgJgPgEQgQgFgNgIIgDAAIgLgEIgFgCIgKgFQgLgDgJgHQgKgDgIgGIgCgBQgPgGgKgLIgBgBIAAAAQgQgKgJgSIgBgBIgEgIIAAgBQgGgIgDgIIAAgBQgIgLgDgMQgGgKgEgLQgEgHgDgIQgGgKgCgKIgEgIIgBgDIgDgKIgFgNIgEgLIgBgDIgCgHIgCgEQgGgKgCgLIgCgJIAAgEQgDgIgBgIIgBgCIgEgJIgDgKQgEgIgBgJIgBgDIgDgJQgEgIgBgIQgFgJgCgLIgDgKIgDgJQgCgHgBgIIgBgCQgEgJgCgKIgDgKIgCgHIgEgRQgEgWAPgMIAGgFIADgBQAJgGATgGQAUgFAKgBIAZgBIAWgDIAggHIAogDIAOgBIAPAAIAOgBIAFAAQAWgDAmAAIAHgBQA3gEAlgBIAJAAQAPgCAVAAIAKAAIAJAAIAcAAIAHAAIAIAAIADAAIAPAAIAGAAIAHgBQANgCAOADIBPABIAHAAQAKgDAKABIAMABIAVAAQAbABA2AHIAGAAIAdADQBVALBDAMIARAEQATAAAYAGIA5APIA4AQQAhAJARAJQAMAGAJAHIABABQATAKALANQAMAOAEAUQACAOgCAMIAAAEQAAAMgDAKQACAPgDAOIgBAKIABACQABAKgCAIIgDAMIAAAIQgCAOgJANIAAAEQgDAKgGAJIgBAFQgCAJgFAHQgCAOgHALQgEAMgHALQgEAMgIALQgDAHgEAGIgEAEQgFANgJAKIgFAFQgGAIgJAGIgEAGIgKAIIgJAHIgFADIgHAFQgJAHgLAEQgJAHgLAEIgGADIgMAEIgMAEIgBABQgLAEgLACIgNADQgYAKgkAGQg0AJhBAEQgtAChIACIhzABIgiAAg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(27).to({graphics:mask_2_graphics_27,x:224.7,y:204.9}).wait(83));

	// guang 1
	this.instance_4 = new lib.s72guang1_1();
	this.instance_4.setTransform(316,205,1,1,0,0,0,25,31);
	this.instance_4._off = true;

	this.instance_4.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(27).to({_off:false},0).to({x:132},7).wait(76));

	// yanjing
	this.instance_5 = new lib.s72yanjing_1();
	this.instance_5.setTransform(315.5,194,1,1,0,0,0,197.5,58);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({y:186},7).to({y:194},7).wait(84));

	// lian
	this.instance_6 = new lib.s72lian();
	this.instance_6.setTransform(37,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(110));

	// baixian
	this.instance_7 = new lib.s72baixian_1();
	this.instance_7.setTransform(320,132.9,1,10.88,0,0,0,318,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(7).to({scaleY:1,y:144},4).wait(99));

	// di
	this.instance_8 = new lib.s72di();
	this.instance_8.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,639,266);


(lib.s721 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgxVgeuMBiogAGMAADA9jMhioAAGg");
	mask.setTransform(378.6,858.4);

	// youshou
	this.instance = new lib.s72youshou_1();
	this.instance.setTransform(746.1,840,1,1,0,0,0,447.1,57);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({regX:447,regY:57.1,rotation:36,x:749.1,y:972.1},34,cjs.Ease.get(1)).wait(121));

	// shenzi
	this.instance_1 = new lib.s72shenzi();
	this.instance_1.setTransform(307,654);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160));

	// 图层 2
	this.instance_2 = new lib.s72zuoshou2();
	this.instance_2.setTransform(119.2,581.7,1,1,-4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#12130F").s().p("Am0DzQgGgJAFgMQADgLAKgHQANgIAegDIBzgMQBBgJAwgMQB/giBIhJQgXgWgKgMQgQgTgIgRQgKgXACgYQADgZAQgPQAMgLAegJQBhgbBhgPIAngHQAVgFAPgKQAKgHAMgNIAUgWQAcgbAaABQAPABALANQALANgFANQgDAKgNAIIgWANQgLAHgOARQgQASgIAGQgPAMgXAIQgOAEgeAGIiIAYQggAGgQAEQgaAIgTAKQgDAZAiAaQASALAHAHQAMAMADANQAGAdgjAhQhSBPiKAlQg2AOhHAKIh+AQIgPAAQgaAAgHgOg");
	this.shape.setTransform(167.2,1090.7);

	this.instance_2.mask = this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.instance_2}]},39).wait(121));

	// zuoshou
	this.instance_3 = new lib.s72zuoshou_1();
	this.instance_3.setTransform(351,660.5,1,1,0,0,0,226,95.5);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({regX:226.1,rotation:-4,y:660.4},33,cjs.Ease.get(1)).wait(122));

	// di
	this.instance_4 = new lib.s72di2();
	this.instance_4.setTransform(26,659);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26,659,672,400);


(lib.s712 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgxVgeuMBiogAGMAADA9jMhioAAGg");
	mask.setTransform(378.6,858.4);

	// youshou
	this.instance = new lib.s71youshou_1();
	this.instance.setTransform(772.1,800,1,1,-12,0,0,447.1,57.1);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({regY:57,rotation:0,x:746.1,y:840},34,cjs.Ease.get(1)).wait(31));

	// shenzi
	this.instance_1 = new lib.s71shenzi();
	this.instance_1.setTransform(307,654);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(70));

	// zuoshou
	this.instance_2 = new lib.s71zuoshou_1();
	this.instance_2.setTransform(345.1,652.5,1,1,20,0,0,226.1,95.5);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({regX:226,rotation:0,x:351,y:660.5},34,cjs.Ease.get(1)).wait(31));

	// di
	this.instance_3 = new lib.s71di2();
	this.instance_3.setTransform(26,659);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26,659,672,400);


(lib.s711 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shouyintai
	this.instance = new lib.s71shouyintai();
	this.instance.setTransform(265,223);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));

	// xiabanshen
	this.instance_1 = new lib.s71xiabanshen();
	this.instance_1.setTransform(529,376);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120));

	// shou
	this.instance_2 = new lib.s71shou_1();
	this.instance_2.setTransform(491.1,271.4,1,1,0,0,0,4.1,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:4.2,rotation:-5,x:491.2},9).to({regX:4.1,rotation:0,x:491.1},10).wait(9).to({regX:4.2,rotation:-5,x:491.2},9).to({regX:4.1,rotation:0,x:491.1},10).wait(9).to({regX:4.2,rotation:-5,x:491.2},9).to({regX:4.1,rotation:0,x:491.1},10).wait(45));

	// shangbanshen
	this.instance_3 = new lib.s71shangbanshen();
	this.instance_3.setTransform(490,175);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120));

	// tuoba
	this.instance_4 = new lib.s71tuoba_1();
	this.instance_4.setTransform(434.6,269.5,1,1,0,0,0,42.6,175.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

	// tou
	this.instance_5 = new lib.s71tou_1();
	this.instance_5.setTransform(386.4,183.4,1,1,0,0,0,15.4,66.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:15.5,rotation:10},28).to({regX:15.6,regY:66.5,rotation:13,y:183.5},2,cjs.Ease.get(1)).to({regX:15.5,rotation:0},5).wait(5).to({regX:15.4,regY:66.4,y:183.4},0).to({regX:15.5,rotation:10},28).to({regX:15.6,regY:66.5,rotation:13,y:183.5},2,cjs.Ease.get(1)).to({regX:15.5,rotation:0},5).wait(45));

	// ren
	this.instance_6 = new lib.s71shenti();
	this.instance_6.setTransform(313,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(120));

	// xiaohaishenti
	this.instance_7 = new lib.s71xiaohai();
	this.instance_7.setTransform(835,332);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120));

	// xiaohai zuoshou
	this.instance_8 = new lib.s71xiaohaizuoshou_1();
	this.instance_8.setTransform(850,373.2,1,1,0,0,0,15,74.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:15.1,regY:74.3,rotation:6,x:850.1,y:373.3},5).to({regX:15,regY:74.2,rotation:0,x:850,y:373.2},5).to({regX:15.1,regY:74.3,rotation:6,x:850.1,y:373.3},5).to({regX:15,regY:74.2,rotation:0,x:850,y:373.2},5).to({regX:15.1,regY:74.3,rotation:6,x:850.1,y:373.3},5).to({regX:15,regY:74.2,rotation:0,x:850,y:373.2},5).to({regX:15.1,regY:74.3,rotation:6,x:850.1,y:373.3},5).to({regX:15,regY:74.2,rotation:0,x:850,y:373.2},5).to({regX:15.1,regY:74.3,rotation:6,x:850.1,y:373.3},5).to({regX:15,regY:74.2,rotation:0,x:850,y:373.2},5).to({regX:15.1,regY:74.3,rotation:6,x:850.1,y:373.3},5).to({regX:15,regY:74.2,rotation:0,x:850,y:373.2},5).to({regX:15.1,regY:74.3,rotation:6,x:850.1,y:373.3},5).to({regX:15,regY:74.2,rotation:0,x:850,y:373.2},5).to({regX:15.1,regY:74.3,rotation:6,x:850.1,y:373.3},5).wait(45));

	// xiaohai youshou
	this.instance_9 = new lib.s71xiaohaiyoushou_1();
	this.instance_9.setTransform(899.2,357,1,1,0,0,0,35.2,53);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:35.3,regY:53.1,rotation:-6,x:899.3},5).to({regX:35.2,regY:53,rotation:0,x:899.2},5).to({regX:35.3,regY:53.1,rotation:-6,x:899.3},5).to({regX:35.2,regY:53,rotation:0,x:899.2},5).to({regX:35.3,regY:53.1,rotation:-6,x:899.3},5).to({regX:35.2,regY:53,rotation:0,x:899.2},5).to({regX:35.3,regY:53.1,rotation:-6,x:899.3},5).to({regX:35.2,regY:53,rotation:0,x:899.2},5).to({regX:35.3,regY:53.1,rotation:-6,x:899.3},5).to({regX:35.2,regY:53,rotation:0,x:899.2},5).to({regX:35.3,regY:53.1,rotation:-6,x:899.3},5).to({regX:35.2,regY:53,rotation:0,x:899.2},5).to({regX:35.3,regY:53.1,rotation:-6,x:899.3},5).to({regX:35.2,regY:53,rotation:0,x:899.2},5).to({regX:35.3,regY:53.1,rotation:-6,x:899.3},5).wait(45));

	// di
	this.instance_10 = new lib.s71di();

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,968,656);


(lib.s7 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_309 = function() {
		this.stop();
		try{app.showBtns()}catch(e){}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(309).call(this.frame_309).wait(1));

	// xingxing 3  复制 2
	this.instance = new lib.s73xingxing3_1();
	this.instance.setTransform(399,415.5,0.012,0.009,0,0,0,25.2,27.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(200).to({_off:false},0).to({regX:21,scaleX:1,scaleY:1},4).wait(2).to({alpha:0},3).to({_off:true},1).wait(100));

	// xingxing 2  复制 2
	this.instance_1 = new lib.s73xingxing2_1();
	this.instance_1.setTransform(439,316.5,0.013,0.01,0,0,0,15.6,25.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(203).to({_off:false},0).to({regX:14,regY:20.5,scaleX:1,scaleY:1},4).wait(2).to({alpha:0},3).to({_off:true},1).wait(97));

	// xingxing 1  复制 2
	this.instance_2 = new lib.s73xingxing1_1();
	this.instance_2.setTransform(658,356,0.011,0.007,0,0,0,22,34);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(201).to({_off:false},0).to({scaleX:1,scaleY:1},4).wait(2).to({alpha:0},3).to({_off:true},1).wait(99));

	// xingxing 3  复制 2
	this.instance_3 = new lib.s73xingxing3_1();
	this.instance_3.setTransform(599,115.5,0.012,0.009,0,0,0,25.2,27.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(199).to({_off:false},0).to({regX:21,scaleX:1,scaleY:1},4).wait(2).to({alpha:0},3).to({_off:true},1).wait(101));

	// xingxing 2  复制 2
	this.instance_4 = new lib.s73xingxing2_1();
	this.instance_4.setTransform(379,76.5,0.013,0.01,0,0,0,15.6,25.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(194).to({_off:false},0).to({regX:14,regY:20.5,scaleX:1,scaleY:1},4).wait(2).to({alpha:0},3).to({_off:true},1).wait(106));

	// xingxing 1  复制 2
	this.instance_5 = new lib.s73xingxing1_1();
	this.instance_5.setTransform(498,476,0.011,0.007,0,0,0,22,34);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(193).to({_off:false},0).to({scaleX:1,scaleY:1},4).wait(2).to({alpha:0},3).to({_off:true},1).wait(107));

	// xingxing 3 复制
	this.instance_6 = new lib.s73xingxing3_1();
	this.instance_6.setTransform(399,415.5,0.012,0.009,0,0,0,25.2,27.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(184).to({_off:false},0).to({regX:21,scaleX:1,scaleY:1},4).wait(2).to({alpha:0},3).to({_off:true},1).wait(116));

	// xingxing 2 复制
	this.instance_7 = new lib.s73xingxing2_1();
	this.instance_7.setTransform(439,316.5,0.013,0.01,0,0,0,15.6,25.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(187).to({_off:false},0).to({regX:14,regY:20.5,scaleX:1,scaleY:1},4).wait(2).to({alpha:0},3).to({_off:true},1).wait(113));

	// xingxing 1 复制
	this.instance_8 = new lib.s73xingxing1_1();
	this.instance_8.setTransform(658,356,0.011,0.007,0,0,0,22,34);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(185).to({_off:false},0).to({scaleX:1,scaleY:1},4).wait(2).to({alpha:0},3).to({_off:true},1).wait(115));

	// xingxing 3
	this.instance_9 = new lib.s73xingxing3_1();
	this.instance_9.setTransform(599,115.5,0.012,0.009,0,0,0,25.2,27.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(183).to({_off:false},0).to({regX:21,scaleX:1,scaleY:1},4).wait(2).to({alpha:0},3).to({_off:true},1).wait(117));

	// xingxing 2
	this.instance_10 = new lib.s73xingxing2_1();
	this.instance_10.setTransform(379,76.5,0.013,0.01,0,0,0,15.6,25.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(182).to({_off:false},0).to({regX:14,regY:20.5,scaleX:1,scaleY:1},4).wait(2).to({alpha:0},3).to({_off:true},1).wait(118));

	// xingxing 1
	this.instance_11 = new lib.s73xingxing1_1();
	this.instance_11.setTransform(498,476,0.011,0.007,0,0,0,22,34);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(181).to({_off:false},0).to({scaleX:1,scaleY:1},4).wait(2).to({alpha:0},3).to({_off:true},1).wait(119));

	// 图层 21
	this.instance_12 = new lib.s74();
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(270).to({_off:false},0).to({alpha:1},6).wait(34));

	// 图层 16
	this.instance_13 = new lib.s74bg_1();
	this.instance_13.setTransform(375,-672.1,1,1,0,0,0,375,612);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(270).to({_off:false},0).to({y:466.7,alpha:1},6,cjs.Ease.get(1)).to({y:609},3).wait(31));

	// ren
	this.instance_14 = new lib.s73ren();
	this.instance_14.setTransform(458,1474.5,1,1,0,0,0,66,53.5);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(171).to({_off:false},0).wait(1).to({regX:74,regY:118.6,x:466,y:779.3},0).wait(1).to({y:589.9},0).wait(1).to({y:485.6},0).wait(1).to({y:421.7},0).wait(1).to({y:381.2},0).wait(1).to({y:355.6},0).wait(1).to({y:339.9},0).wait(1).to({y:331},0).wait(1).to({y:326.7},0).wait(1).to({regX:66,regY:53.5,x:458,y:260.5},0).wait(89).to({alpha:0},6).to({_off:true},1).wait(33));

	// bo
	this.instance_15 = new lib.s73bo_1();
	this.instance_15.setTransform(186,392,2.3,2.3,0,0,0,60,60);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(198).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},9,cjs.Ease.get(-1)).wait(1).to({x:194},0).wait(1).to({x:182},0).wait(1).to({y:400},0).wait(1).to({y:388},0).wait(1).to({x:186,y:392},0).wait(58).to({alpha:0},6).to({_off:true},1).wait(33));

	// long
	this.instance_16 = new lib.s73long_1();
	this.instance_16.setTransform(186,271,2.3,2.3,0,0,0,60,60);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(189).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},9,cjs.Ease.get(-1)).wait(1).to({x:178},0).wait(1).to({x:190},0).wait(1).to({y:279},0).wait(1).to({y:267},0).wait(1).to({x:186,y:271},0).wait(67).to({alpha:0},6).to({_off:true},1).wait(33));

	// hei
	this.instance_17 = new lib.s73hei_1();
	this.instance_17.setTransform(186,151,2.3,2.3,0,0,0,60,60);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(181).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},9,cjs.Ease.get(-1)).wait(1).to({x:190},0).wait(1).to({x:182},0).wait(1).to({y:159},0).wait(1).to({y:145},0).wait(1).to({x:186,y:151},0).wait(75).to({alpha:0},6).to({_off:true},1).wait(33));

	// s7-4
	this.instance_18 = new lib.s73down();
	this.instance_18.setTransform(397.5,1633.2,1,1,0,0,0,326.5,265);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(213).to({_off:false},0).to({y:969},7,cjs.Ease.get(1)).to({y:929},25).wait(25).to({alpha:0},6).to({_off:true},1).wait(33));

	// s7-2 3
	this.instance_19 = new lib.s723();
	this.instance_19.setTransform(-336.6,1258.1,1,1,0,0,0,319.5,132);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(136).to({_off:false},0).to({x:383.5,y:992},7,cjs.Ease.get(1)).wait(28).to({y:-162},10,cjs.Ease.get(1)).to({_off:true},1).wait(128));

	// s7-2 2
	this.instance_20 = new lib.s722();
	this.instance_20.setTransform(1081.7,690,1,1,0,0,0,319.5,132);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(92).to({_off:false},0).to({x:383.5},7,cjs.Ease.get(1)).wait(73).to({y:-164},9,cjs.Ease.get(1)).to({_off:true},1).wait(128));

	// ding
	this.instance_21 = new lib.s72ding_1();
	this.instance_21.setTransform(240.1,204.1,0.002,0.003,0,0,0,128,113);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(86).to({_off:false},0).to({regY:94,scaleX:1,scaleY:1,x:878,y:18.1},20).to({_off:true},1).wait(203));

	// s7-2 1
	this.instance_22 = new lib.s721();
	this.instance_22.setTransform(5,-1072.1);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(46).to({_off:false},0).to({y:-552.1},7).to({y:-522.1},27).wait(93).to({y:-1096.1},8,cjs.Ease.get(1)).to({_off:true},1).wait(128));

	// s7-1 1
	this.instance_23 = new lib.s711();
	this.instance_23.setTransform(-424.1,355,1,1,0,0,0,484,328);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).to({x:245.9},7,cjs.Ease.get(1)).to({x:277},25).wait(26).to({alpha:0},4).to({_off:true},1).wait(247));

	// s7-1 2
	this.instance_24 = new lib.s712();
	this.instance_24.setTransform(720,0);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(10).to({_off:false},0).to({x:24},7,cjs.Ease.get(1)).to({x:0},25).wait(16).to({alpha:0},4).to({_off:true},1).wait(247));

	// 图层 5
	this.instance_25 = new lib.s73bg2_1();
	this.instance_25.setTransform(433.5,1832.5,1,1,0,0,0,433.5,611.5);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(171).to({_off:false},0).wait(1).to({y:1068.4},0).wait(1).to({y:878.1},0).wait(1).to({y:773.3},0).wait(1).to({y:709.1},0).wait(1).to({y:668.4},0).wait(1).to({y:642.6},0).wait(1).to({y:626.9},0).wait(1).to({y:617.9},0).wait(1).to({y:613.7},0).wait(1).to({y:612.5},0).wait(89).to({alpha:0},6).to({_off:true},1).wait(33));

	// bg 复制
	this.instance_26 = new lib.s7bg();
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(270).to({_off:false},0).to({_off:true},30).wait(10));

	// bg
	this.instance_27 = new lib.s7bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_27).to({_off:true},171).wait(139));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-908.1,0,1658.2,1221);


// stage content:



(lib.qj_s7 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s7();
	this.instance.setTransform(-79.1,610.5,1,1,0,0,0,-79.1,610.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-533.1,610,1658.2,1221);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;