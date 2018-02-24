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
		{src:"images/cv/s41houjing.png", id:"s41houjing"},
		{src:"images/cv/s41laoshishenzi.png", id:"s41laoshishenzi"},
		{src:"images/cv/s41laoshishou.png", id:"s41laoshishou"},
		{src:"images/cv/s41qianjing.png", id:"s41qianjing"},
		{src:"images/cv/s42bg.png", id:"s42bg"},
		{src:"images/cv/s42boom.png", id:"s42boom"},
		{src:"images/cv/s42ding.png", id:"s42ding"},
		{src:"images/cv/s42laoshi.png", id:"s42laoshi"},
		{src:"images/cv/s42youshou.png", id:"s42youshou"},
		{src:"images/cv/s42zuoshou.png", id:"s42zuoshou"},
		{src:"images/cv/s43bg.png", id:"s43bg"},
		{src:"images/cv/s43ding.png", id:"s43ding"},
		{src:"images/cv/s43eye1.png", id:"s43eye1"},
		{src:"images/cv/s43eye2.png", id:"s43eye2"},
		{src:"images/cv/s43eye3.png", id:"s43eye3"},
		{src:"images/cv/s43gebohou.png", id:"s43gebohou"},
		{src:"images/cv/s43geboqian.png", id:"s43geboqian"},
		{src:"images/cv/s43tou.png", id:"s43tou"},
		{src:"images/cv/s43xiaoxuehua.png", id:"s43xiaoxuehua"},
		{src:"images/cv/s44bgshang.png", id:"s44bgshang"},
		{src:"images/cv/s44bgxia.png", id:"s44bgxia"},
		{src:"images/cv/s44boom1.png", id:"s44boom1"},
		{src:"images/cv/s44boom2.png", id:"s44boom2"},
		{src:"images/cv/s44boom3.png", id:"s44boom3"},
		{src:"images/cv/s44boom4.png", id:"s44boom4"},
		{src:"images/cv/s44renxian.png", id:"s44renxian"},
		{src:"images/cv/s44ren.png", id:"s44ren"},
		{src:"images/cv/s44shou.png", id:"s44shou"},
		{src:"images/cv/s44xian.png", id:"s44xian"},
		{src:"images/cv/s44zhuozi2.png", id:"s44zhuozi2"},
		{src:"images/cv/s44zhuozixian.png", id:"s44zhuozixian"},
		{src:"images/cv/s44zhuozi.png", id:"s44zhuozi"},
		{src:"images/cv/s44zuishangmian.png", id:"s44zuishangmian"},
		{src:"images/cv/s45bg.png", id:"s45bg"},
		{src:"images/cv/s45jing.png", id:"s45jing"},
		{src:"images/cv/s45lingdang.png", id:"s45lingdang"},
		{src:"images/cv/s45ren.png", id:"s45ren"},
		{src:"images/cv/s45zuijiao1.png", id:"s45zuijiao1"},
		{src:"images/cv/s4611.png", id:"s4611"},
		{src:"images/cv/s4612.png", id:"s4612"},
		{src:"images/cv/s4613.png", id:"s4613"},
		{src:"images/cv/s46101.png", id:"s46101"},
		{src:"images/cv/s46111.png", id:"s46111"},
		{src:"images/cv/s46121.png", id:"s46121"},
		{src:"images/cv/s46131.png", id:"s46131"},
		{src:"images/cv/s46132.png", id:"s46132"},
		{src:"images/cv/s46133.png", id:"s46133"},
		{src:"images/cv/s46141.png", id:"s46141"},
		{src:"images/cv/s46142.png", id:"s46142"},
		{src:"images/cv/s46143.png", id:"s46143"},
		{src:"images/cv/s46144.png", id:"s46144"},
		{src:"images/cv/s46151.png", id:"s46151"},
		{src:"images/cv/s46152.png", id:"s46152"},
		{src:"images/cv/s46161.png", id:"s46161"},
		{src:"images/cv/s46162.png", id:"s46162"},
		{src:"images/cv/s4621.png", id:"s4621"},
		{src:"images/cv/s4622.png", id:"s4622"},
		{src:"images/cv/s4623.png", id:"s4623"},
		{src:"images/cv/s4631.png", id:"s4631"},
		{src:"images/cv/s4632.png", id:"s4632"},
		{src:"images/cv/s4651.png", id:"s4651"},
		{src:"images/cv/s4661.png", id:"s4661"},
		{src:"images/cv/s4662.png", id:"s4662"},
		{src:"images/cv/s4671.png", id:"s4671"},
		{src:"images/cv/s4681.png", id:"s4681"},
		{src:"images/cv/s4691.png", id:"s4691"},
		{src:"images/cv/s4692.png", id:"s4692"},
		{src:"images/cv/s46bg.jpg", id:"s46bg"},
		{src:"images/cv/s46ren.png", id:"s46ren"},
		{src:"images/cv/s46shou.png", id:"s46shou"},
		{src:"images/cv/s46zi.png", id:"s46zi"}
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


(lib.s41houjing = function() {
	this.initialize(img.s41houjing);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s41laoshishenzi = function() {
	this.initialize(img.s41laoshishenzi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,158);


(lib.s41laoshishou = function() {
	this.initialize(img.s41laoshishou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,89);


(lib.s41qianjing = function() {
	this.initialize(img.s41qianjing);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1070);


(lib.s42bg = function() {
	this.initialize(img.s42bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s42boom = function() {
	this.initialize(img.s42boom);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,79);


(lib.s42ding = function() {
	this.initialize(img.s42ding);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,149);


(lib.s42laoshi = function() {
	this.initialize(img.s42laoshi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,678,1003);


(lib.s42youshou = function() {
	this.initialize(img.s42youshou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,269,668);


(lib.s42zuoshou = function() {
	this.initialize(img.s42zuoshou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,642);


(lib.s43bg = function() {
	this.initialize(img.s43bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s43ding = function() {
	this.initialize(img.s43ding);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,257,139);


(lib.s43eye1 = function() {
	this.initialize(img.s43eye1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,297,111);


(lib.s43eye2 = function() {
	this.initialize(img.s43eye2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,293,122);


(lib.s43eye3 = function() {
	this.initialize(img.s43eye3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,316,161);


(lib.s43gebohou = function() {
	this.initialize(img.s43gebohou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,321,140);


(lib.s43geboqian = function() {
	this.initialize(img.s43geboqian);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,436);


(lib.s43tou = function() {
	this.initialize(img.s43tou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,702,730);


(lib.s43xiaoxuehua = function() {
	this.initialize(img.s43xiaoxuehua);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,120);


(lib.s44bgshang = function() {
	this.initialize(img.s44bgshang);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,344);


(lib.s44bgxia = function() {
	this.initialize(img.s44bgxia);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,937);


(lib.s44boom1 = function() {
	this.initialize(img.s44boom1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,89);


(lib.s44boom2 = function() {
	this.initialize(img.s44boom2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,82);


(lib.s44boom3 = function() {
	this.initialize(img.s44boom3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,78);


(lib.s44boom4 = function() {
	this.initialize(img.s44boom4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,110);


(lib.s44renxian = function() {
	this.initialize(img.s44renxian);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,466,862);


(lib.s44ren = function() {
	this.initialize(img.s44ren);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,449,938);


(lib.s44shou = function() {
	this.initialize(img.s44shou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,665,287);


(lib.s44xian = function() {
	this.initialize(img.s44xian);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,94);


(lib.s44zhuozi2 = function() {
	this.initialize(img.s44zhuozi2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1010,754);


(lib.s44zhuozixian = function() {
	this.initialize(img.s44zhuozixian);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,401,480);


(lib.s44zhuozi = function() {
	this.initialize(img.s44zhuozi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,116);


(lib.s44zuishangmian = function() {
	this.initialize(img.s44zuishangmian);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,105);


(lib.s45bg = function() {
	this.initialize(img.s45bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s45jing = function() {
	this.initialize(img.s45jing);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,89);


(lib.s45lingdang = function() {
	this.initialize(img.s45lingdang);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,337);


(lib.s45ren = function() {
	this.initialize(img.s45ren);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,652,1015);


(lib.s45zuijiao1 = function() {
	this.initialize(img.s45zuijiao1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,29);


(lib.s4611 = function() {
	this.initialize(img.s4611);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,557);


(lib.s4612 = function() {
	this.initialize(img.s4612);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,126);


(lib.s4613 = function() {
	this.initialize(img.s4613);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,56);


(lib.s46101 = function() {
	this.initialize(img.s46101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,151);


(lib.s46111 = function() {
	this.initialize(img.s46111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,290);


(lib.s46121 = function() {
	this.initialize(img.s46121);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,223);


(lib.s46131 = function() {
	this.initialize(img.s46131);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,264);


(lib.s46132 = function() {
	this.initialize(img.s46132);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,107);


(lib.s46133 = function() {
	this.initialize(img.s46133);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,257);


(lib.s46141 = function() {
	this.initialize(img.s46141);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,282);


(lib.s46142 = function() {
	this.initialize(img.s46142);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,194);


(lib.s46143 = function() {
	this.initialize(img.s46143);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,68);


(lib.s46144 = function() {
	this.initialize(img.s46144);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,47);


(lib.s46151 = function() {
	this.initialize(img.s46151);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,483);


(lib.s46152 = function() {
	this.initialize(img.s46152);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,79);


(lib.s46161 = function() {
	this.initialize(img.s46161);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,475);


(lib.s46162 = function() {
	this.initialize(img.s46162);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,180);


(lib.s4621 = function() {
	this.initialize(img.s4621);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,316);


(lib.s4622 = function() {
	this.initialize(img.s4622);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,57);


(lib.s4623 = function() {
	this.initialize(img.s4623);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,147);


(lib.s4631 = function() {
	this.initialize(img.s4631);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,246);


(lib.s4632 = function() {
	this.initialize(img.s4632);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,321);


(lib.s4651 = function() {
	this.initialize(img.s4651);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,403);


(lib.s4661 = function() {
	this.initialize(img.s4661);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,158);


(lib.s4662 = function() {
	this.initialize(img.s4662);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,48);


(lib.s4671 = function() {
	this.initialize(img.s4671);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,281);


(lib.s4681 = function() {
	this.initialize(img.s4681);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,188);


(lib.s4691 = function() {
	this.initialize(img.s4691);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,225);


(lib.s4692 = function() {
	this.initialize(img.s4692);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,79);


(lib.s46bg = function() {
	this.initialize(img.s46bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s46ren = function() {
	this.initialize(img.s46ren);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,949);


(lib.s46shou = function() {
	this.initialize(img.s46shou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,306,570);


(lib.s46zi = function() {
	this.initialize(img.s46zi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,886,502);


(lib.s46zi_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s46zi();
	this.instance.setTransform(-310.1,-198.4,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-310.1,-198.4,620.2,351.4);


(lib.s46shou_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s46shou();
	this.instance.setTransform(-153,-285);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153,-285,306,570);


(lib.s46162_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s46162();
	this.instance.setTransform(-14.5,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-90,29,180);


(lib.s46161_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s46161();
	this.instance.setTransform(-14.5,-237.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-237.5,29,475);


(lib.s46152_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s46152();
	this.instance.setTransform(-14.5,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-39.5,29,79);


(lib.s46151_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s46151();
	this.instance.setTransform(-14.5,-241.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-241.5,29,483);


(lib.s46144_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s46144();
	this.instance.setTransform(-14.5,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-23.5,29,47);


(lib.s46143_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s46143();
	this.instance.setTransform(-14,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-34,28,68);


(lib.s46142_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s46142();
	this.instance.setTransform(-14.5,-97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-97,29,194);


(lib.s46141_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s46141();
	this.instance.setTransform(-14.5,-141);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-141,29,282);


(lib.s46133_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s46133();
	this.instance.setTransform(-14.5,-128.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-128.5,29,257);


(lib.s46132_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s46132();
	this.instance.setTransform(-14.5,-53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-53.5,29,107);


(lib.s46131_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s46131();
	this.instance.setTransform(-14,-132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-132,28,264);


(lib.s46121_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s46121();
	this.instance.setTransform(-14.5,-111.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-111.5,29,223);


(lib.s46111_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s46111();
	this.instance.setTransform(-14.5,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-145,29,290);


(lib.s46101_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s46101();
	this.instance.setTransform(-14.5,-75.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-75.5,29,151);


(lib.s4692_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s4692();
	this.instance.setTransform(-14.5,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-39.5,29,79);


(lib.s4691_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s4691();
	this.instance.setTransform(-14.5,-112.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-112.5,29,225);


(lib.s4681_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s4681();
	this.instance.setTransform(-14.5,-94);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-94,29,188);


(lib.s4671_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s4671();
	this.instance.setTransform(-14.5,-140.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-140.5,29,281);


(lib.s4662_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s4662();
	this.instance.setTransform(-14.5,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-24,29,48);


(lib.s4661_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s4661();
	this.instance.setTransform(-14.5,-79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-79,29,158);


(lib.s4651_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s4651();
	this.instance.setTransform(-14.5,-201.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-201.5,29,403);


(lib.s4632_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s4632();
	this.instance.setTransform(-14.5,-160.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-160.5,29,321);


(lib.s4631_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s4631();
	this.instance.setTransform(-14.5,-123);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-123,29,246);


(lib.s4623_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s4623();
	this.instance.setTransform(-14.5,-73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-73.5,29,147);


(lib.s4622_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s4622();
	this.instance.setTransform(-15,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-28.5,30,57);


(lib.s4621_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s4621();
	this.instance.setTransform(-14.5,-158);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-158,29,316);


(lib.s4613_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s4613();
	this.instance.setTransform(-14,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-28,28,56);


(lib.s4612_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s4612();
	this.instance.setTransform(-14.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-63,29,126);


(lib.s4611_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s4611();
	this.instance.setTransform(-14.5,-278.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-278.5,29,557);


(lib.s45ren_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s45ren();
	this.instance.setTransform(-326,-507.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-326,-507.5,652,1015);


(lib.s45lingdang_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s45lingdang();
	this.instance.setTransform(-156.5,-104.1,1,1,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156.5,-187.6,313.2,375.4);


(lib.s45laoshizuijiao = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s45zuijiao1();
	this.instance.setTransform(-16.5,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.5,-14.5,33,29);


(lib.s45laoshizuijiao_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s45zuijiao1();
	this.instance.setTransform(-16.5,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.5,-14.5,33,29);


(lib.s45laoshitoushang = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s45jing();
	this.instance.setTransform(-41.5,-44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.5,-44.5,83,89);


(lib.s45laoshitoushang_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s45jing();
	this.instance.setTransform(-41.5,-44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.5,-44.5,83,89);


(lib.s45bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s45bg();
	this.instance.setTransform(-375,-610);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-375,-610,750,1220);


(lib.s44shou_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s44shou();
	this.instance.setTransform(-332.5,-143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-332.5,-143.5,665,287);


(lib.s44suduxian = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cm_line();
	this.instance.setTransform(-600,-931);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-600,-931,1200,1862);


(lib.s44boom4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s44boom4();
	this.instance.setTransform(-33,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-55,66,110);


(lib.s44boom3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s44boom3();
	this.instance.setTransform(-25,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-39,50,78);


(lib.s44boom2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s44boom2();
	this.instance.setTransform(-29.5,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.5,-41,59,82);


(lib.s44boom1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s44boom1();
	this.instance.setTransform(-42.5,-44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-44.5,85,89);


(lib.s44zhuozi_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.s44zhuozixian();
	this.instance.setTransform(-283,-328);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-280},0).wait(1).to({y:-324},0).wait(1).to({y:-329},0).wait(1).to({x:-284},0).wait(1).to({y:-332},0).wait(1).to({y:-328},0).wait(1).to({x:-281},0).wait(1).to({y:-332},0).wait(1).to({x:-283,y:-328},0).wait(1).to({x:-280},0).wait(1).to({y:-324},0).wait(1).to({y:-329},0).wait(1).to({x:-284},0).wait(1).to({y:-332},0).wait(1).to({y:-328},0).wait(1).to({x:-281},0).wait(1).to({y:-332},0).wait(1).to({x:-283,y:-328},0).wait(1).to({x:-280},0).wait(1).to({y:-324},0).wait(1).to({y:-329},0).wait(1).to({x:-284},0).wait(1).to({y:-332},0).wait(1).to({y:-328},0).wait(1).to({x:-281},0).wait(1).to({y:-332},0).wait(1).to({x:-283,y:-328},0).wait(1).to({x:-280},0).wait(1).to({y:-324},0).wait(1).to({y:-329},0).wait(1).to({x:-284},0).wait(1).to({y:-332},0).wait(1).to({y:-328},0).wait(1).to({x:-281},0).wait(1).to({y:-332},0).wait(1).to({x:-283,y:-328},0).wait(1).to({x:-280},0).wait(1).to({y:-324},0).wait(1).to({y:-329},0).wait(1).to({x:-284},0).wait(1).to({y:-332},0).wait(1).to({y:-328},0).wait(1).to({x:-281},0).wait(1).to({y:-332},0).wait(1).to({x:-283,y:-328},0).wait(1).to({x:-280},0).wait(1).to({y:-324},0).wait(1).to({y:-329},0).wait(1).to({x:-284},0).wait(1));

	// 图层 1
	this.instance_1 = new lib.s44zhuozi2();
	this.instance_1.setTransform(-505,-377);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-505,-377,1010,754);


(lib.s44ren_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.s44renxian();
	this.instance.setTransform(-253,-447);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-249},0).wait(1).to({x:-255},0).wait(1).to({y:-442},0).wait(1).to({y:-448},0).wait(1).to({x:-250},0).wait(1).to({x:-247},0).wait(1).to({x:-251},0).wait(1).to({x:-253,y:-447},0).wait(1).to({x:-249},0).wait(1).to({x:-255},0).wait(1).to({y:-442},0).wait(1).to({y:-448},0).wait(1).to({x:-250},0).wait(1).to({x:-247},0).wait(1).to({x:-251},0).wait(1).to({x:-253,y:-447},0).wait(1).to({x:-249},0).wait(1).to({x:-255},0).wait(1).to({y:-442},0).wait(1).to({y:-448},0).wait(1).to({x:-250},0).wait(1).to({x:-247},0).wait(1).to({x:-251},0).wait(1).to({x:-253,y:-447},0).wait(1).to({x:-249},0).wait(1).to({x:-255},0).wait(1).to({y:-442},0).wait(1).to({y:-448},0).wait(1).to({x:-250},0).wait(1).to({x:-247},0).wait(1).to({x:-251},0).wait(1).to({x:-253,y:-447},0).wait(1).to({x:-249},0).wait(1).to({x:-255},0).wait(1).to({y:-442},0).wait(1).to({y:-448},0).wait(1).to({x:-250},0).wait(1).to({x:-247},0).wait(1).to({x:-251},0).wait(1).to({x:-253,y:-447},0).wait(1).to({x:-249},0).wait(1).to({x:-255},0).wait(1).to({y:-442},0).wait(1).to({y:-448},0).wait(1).to({x:-250},0).wait(1).to({x:-247},0).wait(1).to({x:-251},0).wait(1).to({x:-253,y:-447},0).wait(1).to({x:-249},0).wait(1));

	// 图层 1
	this.instance_1 = new lib.s44ren();
	this.instance_1.setTransform(-224.5,-469);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-253,-469,477.5,938);


(lib.s43xiaoxuehua_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s43xiaoxuehua();
	this.instance.setTransform(-55,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,-60,110,120);


(lib.s43tou_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 4
	this.instance = new lib.s43eye3();
	this.instance.setTransform(216,397);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({_off:false},0).wait(72));

	// 图层 3
	this.instance_1 = new lib.s43eye2();
	this.instance_1.setTransform(220,419);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({_off:false},0).to({_off:true},2).wait(72));

	// 图层 2
	this.instance_2 = new lib.s43eye1();
	this.instance_2.setTransform(210,423);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},26).wait(74));

	// 图层 1
	this.instance_3 = new lib.s43tou();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,702,730);


(lib.s43ding_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s43ding();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,257,139);


(lib.s42zuoshou_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s42zuoshou();
	this.instance.setTransform(-78.5,-321);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.5,-321,157,642);


(lib.s42youshou_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s42youshou();
	this.instance.setTransform(-134.5,-334);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134.5,-334,269,668);


(lib.s42ding_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s42ding();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,149);


(lib.s42boom_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s42boom();
	this.instance.setTransform(-58,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-39.5,116,79);


(lib.s41z = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9BHIAAgDIBTiBIgoAAQgQAAgGAGQgFAGgCAQIgFAAIAAglIBuAAIAAADIhUCAIAqAAQAXAAAGgFQAGgGAGgXIAFABIgEArg");
	this.shape.setTransform(0,-3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.3,-21.8,30.7,36);


(lib.s41laoshishou_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s41laoshishou();
	this.instance.setTransform(-19.5,-44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-44.5,39,89);


(lib.s44up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// xian
	this.instance = new lib.s44xian();
	this.instance.setTransform(-375,-353);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(78));

	// 图层 11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_10 = new cjs.Graphics().p("Eg94gcMMB76AAAMAAAArQMh8DANJg");
	var mask_graphics_77 = new cjs.Graphics().p("Eg94gcMMB76AAAMAAAArQMh8DANJg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_graphics_10,x:-0.8,y:-444.5}).wait(67).to({graphics:mask_graphics_77,x:-0.8,y:-444.5}).wait(1));

	// 图层 10
	this.instance_1 = new lib.s44suduxian();
	this.instance_1.setTransform(-4,-461,0,0.001,0,0,0,0,-56.5);
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 253, 252, 220, 0)];
	this.instance_1.cache(-602,-933,1204,1866);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({regX:-0.1,regY:-0.1,scaleX:1.3,scaleY:0.3},3).wait(1).to({y:-459},0).wait(1).to({x:1,y:-463},0).wait(1).to({x:-3},0).wait(1).to({x:0,y:-461},0).wait(1).to({x:-4},0).wait(1).to({y:-465},0).wait(1).to({y:-460},0).wait(2).to({x:0},0).wait(1).to({x:-3,y:-466},0).wait(1).to({x:3,y:-461},0).wait(1).to({x:-4,y:-459},0).wait(1).to({x:1,y:-463},0).wait(1).to({x:-3},0).wait(1).to({x:-4,y:-461},0).wait(1).to({x:0},0).wait(1).to({x:-4},0).wait(1).to({y:-465},0).wait(1).to({y:-460},0).wait(2).to({x:0},0).wait(1).to({x:-3,y:-466},0).wait(1).to({x:3,y:-461},0).wait(1).to({x:-4,y:-459},0).wait(1).to({x:1,y:-463},0).wait(1).to({x:-3},0).wait(1).to({x:-4,y:-461},0).wait(1).to({x:0},0).wait(1).to({x:-4},0).wait(1).to({y:-465},0).wait(1).to({y:-460},0).wait(2).to({x:0},0).wait(1).to({x:-3,y:-466},0).wait(1).to({x:3,y:-461},0).wait(1).to({x:-4,y:-459},0).wait(1).to({x:1,y:-463},0).wait(1).to({x:-3},0).wait(1).to({x:-4,y:-461},0).wait(1).to({x:0},0).wait(1).to({x:-4},0).wait(1).to({y:-465},0).wait(1).to({y:-460},0).wait(2).to({x:0},0).wait(1).to({x:-3,y:-466},0).wait(1).to({x:3,y:-461},0).wait(1).to({x:-4,y:-459},0).wait(1).to({x:1,y:-463},0).wait(1).to({x:-3},0).wait(1).to({x:-4,y:-461},0).wait(1).to({x:0},0).wait(1).to({x:-4},0).wait(1).to({y:-465},0).wait(1).to({y:-460},0).wait(2).to({x:0},0).wait(1).to({x:-3,y:-466},0).wait(1).to({x:3,y:-461},0).wait(1).to({x:-4,y:-459},0).wait(1).to({x:1,y:-463},0).wait(1).to({x:-3},0).wait(1).to({x:1},0).wait(1).to({x:-3},0).wait(1));

	// zhuozi
	this.instance_2 = new lib.s44zhuozi();
	this.instance_2.setTransform(-375,-610);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(78));

	// shou
	this.instance_3 = new lib.s44shou_1();
	this.instance_3.setTransform(15.6,-284.9,0.9,0.9,0,0,0,0.1,143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({regX:0,scaleX:1,scaleY:1,x:15.5,y:-281},7).wait(68));

	// boom1
	this.instance_4 = new lib.s44boom1_1();
	this.instance_4.setTransform(-251,-473,0.01,0.01,0,0,0,43,-49.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({regX:42.5,regY:-44.5,scaleX:1,scaleY:1,alpha:1},2).wait(66));

	// boom2
	this.instance_5 = new lib.s44boom2_1();
	this.instance_5.setTransform(-107,-487,0.008,0.006,0,0,0,-29.5,-41);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},2).wait(66));

	// boom3
	this.instance_6 = new lib.s44boom3_1();
	this.instance_6.setTransform(81,-446,0.01,0.006,0,0,0,25,0);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},2).wait(66));

	// boom4
	this.instance_7 = new lib.s44boom4_1();
	this.instance_7.setTransform(253,-439,0.008,0.005,0,0,0,-33,-11);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,alpha:1},2).wait(66));

	// 图层 9
	this.instance_8 = new lib.s44bgshang();
	this.instance_8.setTransform(-375,-610);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(78));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-375,-610,750,351);


(lib.s44down = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ren
	this.instance = new lib.s44ren_1();
	this.instance.setTransform(372,469.5,1.05,1.05,-7,0,0,224.6,469);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({rotation:0,x:372.1},9).wait(34));

	// zhuozi
	this.instance_1 = new lib.s44zhuozi_1();
	this.instance_1.setTransform(-36,308.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({rotation:-10,x:-86},9).wait(34));

	// 图层 1
	this.instance_2 = new lib.s44bgxia();
	this.instance_2.setTransform(-412,-515,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:-417},0).wait(1).to({y:-508},0).wait(1).to({y:-519},0).wait(1).to({x:-410},0).wait(1).to({y:-514},0).wait(1).to({x:-414},0).wait(1).to({y:-519},0).wait(1).to({x:-409},0).wait(1).to({x:-407,y:-512},0).wait(1).to({x:-412,y:-517},0).wait(1).to({y:-515},0).wait(1).to({x:-417},0).wait(1).to({y:-508},0).wait(1).to({y:-519},0).wait(1).to({x:-410},0).wait(1).to({y:-514},0).wait(1).to({x:-414},0).wait(1).to({y:-519},0).wait(1).to({x:-409},0).wait(1).to({x:-407,y:-512},0).wait(1).to({x:-412,y:-517},0).wait(1).to({y:-515},0).wait(1).to({x:-417},0).wait(1).to({y:-508},0).wait(1).to({y:-519},0).wait(1).to({x:-410},0).wait(1).to({y:-514},0).wait(1).to({x:-414},0).wait(1).to({y:-519},0).wait(1).to({x:-409},0).wait(1).to({x:-407,y:-512},0).wait(1).to({x:-412,y:-517},0).wait(1).to({y:-515},0).wait(1).to({x:-417},0).wait(1).to({y:-508},0).wait(1).to({y:-519},0).wait(1).to({x:-410},0).wait(1).to({y:-514},0).wait(1).to({x:-414},0).wait(1).to({y:-519},0).wait(1).to({x:-409},0).wait(1).to({x:-407,y:-512},0).wait(1).to({x:-412,y:-517},0).wait(1).to({y:-515},0).wait(1).to({x:-417},0).wait(1).to({y:-508},0).wait(1).to({y:-519},0).wait(1).to({x:-410},0).wait(1).to({x:-417,y:-508},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-541,-515,1010,1200.5);


(lib.s42laoshi_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.instance = new lib.s42youshou_1();
	this.instance.setTransform(44.3,274.8,1,1,-10,0,0,-55.2,328.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({regX:-55.1,rotation:0},5).wait(55));

	// 图层 4
	this.instance_1 = new lib.s42zuoshou_1();
	this.instance_1.setTransform(130.5,96.1,1,1,5,0,0,-72,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({rotation:0},5).wait(55));

	// 图层 1
	this.instance_2 = new lib.s42laoshi();
	this.instance_2.setTransform(-339,-501.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-339,-501.5,678,1003);


(lib.s41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5  复制 2
	this.instance = new lib.s41z();
	this.instance.setTransform(141.5,97.8,1.8,1.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({alpha:1},3).wait(2).to({alpha:0},3).wait(12).to({alpha:1},3).wait(2).to({alpha:0},3).wait(12).to({alpha:1},3).wait(2).to({alpha:0},3).wait(12).to({alpha:1},3).wait(2).to({alpha:0},3).wait(12).to({alpha:1},3).wait(2).to({alpha:0},3).wait(2));

	// 图层 5 复制
	this.instance_1 = new lib.s41z();
	this.instance_1.setTransform(101.1,129.3,1.4,1.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({alpha:1},3).wait(2).to({alpha:0},3).wait(12).to({alpha:1},3).wait(2).to({alpha:0},3).wait(12).to({alpha:1},3).wait(2).to({alpha:0},3).wait(12).to({alpha:1},3).wait(2).to({alpha:0},3).wait(12).to({alpha:1},3).wait(2).to({alpha:0},3).wait(7));

	// 图层 5
	this.instance_2 = new lib.s41z();
	this.instance_2.setTransform(69.6,159.4);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},3).wait(2).to({alpha:0},3).wait(12).to({alpha:1},3).wait(2).to({alpha:0},3).wait(12).to({alpha:1},3).wait(2).to({alpha:0},3).wait(12).to({alpha:1},3).wait(2).to({alpha:0},3).wait(12).to({alpha:1},3).wait(2).to({alpha:0},3).wait(12));

	// s4-1 qianjing
	this.instance_3 = new lib.s41qianjing();
	this.instance_3.setTransform(-375,-460);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100));

	// 图层 4
	this.instance_4 = new lib.s41laoshishou_1();
	this.instance_4.setTransform(85.2,-158.2,1,1,0,0,0,-19.3,37.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:-19.4,regY:37.3,rotation:-12,x:85.1,y:-158.1},9).to({regX:-19.3,regY:37.2,rotation:0,x:85.2,y:-158.2},10).to({regX:-19.4,regY:37.3,rotation:-12,x:85.1,y:-158.1},9).to({regX:-19.3,regY:37.2,rotation:0,x:85.2,y:-158.2},10).to({regX:-19.4,regY:37.3,rotation:-12,x:85.1,y:-158.1},9).to({regX:-19.3,regY:37.2,rotation:0,x:85.2,y:-158.2},10).to({regX:-19.4,regY:37.3,rotation:-12,x:85.1,y:-158.1},9).to({regX:-19.3,regY:37.2,rotation:0,x:85.2,y:-158.2},10).to({regX:-19.4,regY:37.3,rotation:-12,x:85.1,y:-158.1},9).to({regX:-19.3,regY:37.2,rotation:0,x:85.2,y:-158.2},10).wait(5));

	// 图层 3
	this.instance_5 = new lib.s41laoshishenzi();
	this.instance_5.setTransform(4,-262);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(100));

	// 图层 1
	this.instance_6 = new lib.s41houjing();
	this.instance_6.setTransform(-375,-610);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-375,-610,750,1220);


(lib.s44down_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhG8BP3MAA8iRQMCMygOdMAAKCftg");
	mask.setTransform(-12.9,177.1);

	// bg
	this.instance_3 = new lib.s44down();
	this.instance_3.setTransform(0,141.5);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-467,-334,908.2,1022.4);


(lib.s4 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_289 = function() {
		this.stop();
		try{app.showBtns()}catch(e){}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(289).call(this.frame_289).wait(1));

	// 图层 2
	this.instance = new lib.s46zi_1();
	this.instance.setTransform(375.1,243.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(274).to({_off:false},0).to({alpha:1},5).wait(11));

	// s4-6 shou
	this.instance_1 = new lib.s46shou_1();
	this.instance_1.setTransform(536,965);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(234).to({_off:false},0).to({y:935},10).to({y:965},10).to({y:935},10).to({y:965},10).wait(16));

	// s4-6 ren
	this.instance_2 = new lib.s46ren();
	this.instance_2.setTransform(0,271);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(234).to({_off:false},0).wait(56));

	// s4-6 16-1
	this.instance_3 = new lib.s46161_1();
	this.instance_3.setTransform(722.5,-253.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(238).to({_off:false},0).to({y:237.5},19).wait(33));

	// s4-6 16-2
	this.instance_4 = new lib.s46162_1();
	this.instance_4.setTransform(722.5,-106.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(238).to({_off:false},0).to({y:620},19).wait(33));

	// s4-6 15-1
	this.instance_5 = new lib.s46151_1();
	this.instance_5.setTransform(666.5,-255.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(234).to({_off:false},0).to({y:241.5},19).wait(37));

	// s4-6 15-2
	this.instance_6 = new lib.s46152_1();
	this.instance_6.setTransform(666.5,-53.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(234).to({_off:false},0).to({y:536.5},19).wait(37));

	// s4-6 14-1
	this.instance_7 = new lib.s46141_1();
	this.instance_7.setTransform(624.5,-151);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(238).to({_off:false},0).to({y:141},19).wait(33));

	// s4-6 14-2
	this.instance_8 = new lib.s46142_1();
	this.instance_8.setTransform(624.5,-107);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(238).to({_off:false},0).to({y:403},19).wait(33));

	// s4-6 14-3
	this.instance_9 = new lib.s46143_1();
	this.instance_9.setTransform(624,-44);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(238).to({_off:false},0).to({y:550},19).wait(33));

	// s4-6 14-4
	this.instance_10 = new lib.s46144_1();
	this.instance_10.setTransform(624.5,-33.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(238).to({_off:false},0).to({y:615.5},19).wait(33));

	// s4-6 13-1
	this.instance_11 = new lib.s46131_1();
	this.instance_11.setTransform(564,-143.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(236).to({_off:false},0).to({y:132},19).wait(35));

	// s4-6 13-2
	this.instance_12 = new lib.s46132_1();
	this.instance_12.setTransform(564.5,-64.6);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(236).to({_off:false},0).to({y:336.5},19).wait(35));

	// s4-6 13-3
	this.instance_13 = new lib.s46133_1();
	this.instance_13.setTransform(564.5,-139.6);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(236).to({_off:false},0).to({y:557.5},19).wait(35));

	// s4-6 12-1
	this.instance_14 = new lib.s46121_1();
	this.instance_14.setTransform(506.5,-126.5);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(234).to({_off:false},0).to({y:111.5},19).wait(37));

	// s4-6 11-1
	this.instance_15 = new lib.s46111_1();
	this.instance_15.setTransform(459.5,-155.1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(236).to({_off:false},0).to({y:145},19).wait(35));

	// s4-6 10-1
	this.instance_16 = new lib.s46101_1();
	this.instance_16.setTransform(422.5,-86.5);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(238).to({_off:false},0).to({y:75.5},19).wait(33));

	// s4-6 9-1
	this.instance_17 = new lib.s4691_1();
	this.instance_17.setTransform(384.5,-127.5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(236).to({_off:false},0).to({y:112.5},19).wait(35));

	// s4-6 9-2
	this.instance_18 = new lib.s4692_1();
	this.instance_18.setTransform(384.5,-54.5);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(236).to({_off:false},0).to({y:273.5},19).wait(35));

	// s4-6 8-1
	this.instance_19 = new lib.s4681_1();
	this.instance_19.setTransform(346.5,-109);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(234).to({_off:false},0).to({y:94},19).wait(37));

	// s4-6 7-1
	this.instance_20 = new lib.s4671_1();
	this.instance_20.setTransform(303.5,-151.5);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(238).to({_off:false},0).to({y:140.5},19).wait(33));

	// s4-6 6-1
	this.instance_21 = new lib.s4661_1();
	this.instance_21.setTransform(259.5,-94);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(234).to({_off:false},0).to({y:79},19).wait(37));

	// s4-6 6-2
	this.instance_22 = new lib.s4662_1();
	this.instance_22.setTransform(259.5,-39);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(234).to({_off:false},0).to({y:208},19).wait(37));

	// s4-6 5-1
	this.instance_23 = new lib.s4651_1();
	this.instance_23.setTransform(198.5,-211.6);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(236).to({_off:false},0).to({y:201.5},19).wait(35));

	// s4-6 3-1
	this.instance_24 = new lib.s4631_1();
	this.instance_24.setTransform(137.5,-134);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(238).to({_off:false},0).to({y:123},19).wait(33));

	// s4-6 3-2
	this.instance_25 = new lib.s4632_1();
	this.instance_25.setTransform(137.5,-171.5);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(238).to({_off:false},0).to({y:464.5},19).wait(33));

	// s4-6 2-1
	this.instance_26 = new lib.s4621_1();
	this.instance_26.setTransform(84.5,-168.1);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(236).to({_off:false},0).to({y:158},19).wait(35));

	// s4-6 2-2
	this.instance_27 = new lib.s4622_1();
	this.instance_27.setTransform(85,-38.6);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(236).to({_off:false},0).to({y:369.5},19).wait(35));

	// s4-6 2-3
	this.instance_28 = new lib.s4623_1();
	this.instance_28.setTransform(84.5,-83.6);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(236).to({_off:false},0).to({x:83.5,y:497.5},19).wait(35));

	// s4-6 1-1
	this.instance_29 = new lib.s4611_1();
	this.instance_29.setTransform(31.5,-303.6);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(234).to({_off:false},0).to({y:278.5},19).wait(37));

	// s4-6 1-2
	this.instance_30 = new lib.s4612_1();
	this.instance_30.setTransform(31.5,-88.1);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(234).to({_off:false},0).to({y:642},19).wait(37));

	// s4-6 1-3
	this.instance_31 = new lib.s4613_1();
	this.instance_31.setTransform(31,-53.1);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(234).to({_off:false},0).to({y:770},19).wait(37));

	// 图层 25
	this.instance_32 = new lib.s46bg();
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(234).to({_off:false},0).wait(56));

	// s4-5 jing
	this.instance_33 = new lib.s45laoshitoushang_1("synched",0);
	this.instance_33.setTransform(188.5,354.5);
	this.instance_33._off = true;

	this.instance_34 = new lib.s45laoshitoushang("synched",0);
	this.instance_34.setTransform(248.5,354.5);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(194).to({_off:false},0).to({_off:true,x:248.5},10).wait(86));
	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(194).to({_off:false},10).to({scaleX:0.9,scaleY:0.9},10).to({scaleX:1,scaleY:1},10).to({scaleX:0.9,scaleY:0.9},10).to({_off:true},1).wait(55));

	// s4-5 zuijiao 1
	this.instance_35 = new lib.s45laoshizuijiao_1("synched",0);
	this.instance_35.setTransform(132.5,604.5);
	this.instance_35._off = true;

	this.instance_36 = new lib.s45laoshizuijiao("synched",0);
	this.instance_36.setTransform(192.5,604.5);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(194).to({_off:false},0).to({_off:true,x:192.5},10).wait(86));
	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(194).to({_off:false},10).to({scaleX:1.1,scaleY:1.1,x:191.5,y:601.5},3).to({scaleX:1,scaleY:1,x:192.5,y:604.5},3).to({startPosition:0},6).to({scaleX:1.1,scaleY:1.1,x:191.5,y:601.5},3).to({scaleX:1,scaleY:1,x:192.5,y:604.5},3).to({scaleX:1.1,scaleY:1.1,x:191.5,y:601.5},3).to({scaleX:1,scaleY:1,x:192.5,y:604.5},3).to({startPosition:0},6).to({_off:true},1).wait(55));

	// 图层 23
	this.instance_37 = new lib.s45lingdang_1();
	this.instance_37.setTransform(541.5,670,1,1,0,0,0,-59.5,7);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(194).to({_off:false},0).wait(1).to({x:558},0).wait(1).to({x:570.5},0).wait(1).to({x:580},0).wait(1).to({x:587.5},0).wait(1).to({x:593},0).wait(1).to({x:597},0).to({rotation:41,x:632,y:639.9},10).to({_off:true},25).wait(55));

	// s4-5 ren
	this.instance_38 = new lib.s45ren_1();
	this.instance_38.setTransform(266,712.5);
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(194).to({_off:false},0).to({x:326},10).to({_off:true},31).wait(55));

	// s4-5 bg
	this.instance_39 = new lib.s45bg_1();
	this.instance_39.setTransform(315,610);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(194).to({_off:false},0).to({x:375},10).to({_off:true},31).wait(55));

	// s4-5 bg 2
	this.instance_40 = new lib.s45bg();
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(194).to({_off:false},0).to({_off:true},41).wait(55));

	// hengxian
	this.instance_41 = new lib.s44zuishangmian();
	this.instance_41.setTransform(0,262);
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(175).to({_off:false},0).to({_off:true},20).wait(95));

	// s4-4 down
	this.instance_42 = new lib.s44down_1();
	this.instance_42.setTransform(375,1554.3);
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(162).to({_off:false},0).to({y:610},13).to({_off:true},20).wait(95));

	// s4-4 up
	this.instance_43 = new lib.s44up();
	this.instance_43.setTransform(375,259);
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(150).to({_off:false},0).to({y:610},8).to({_off:true},37).wait(95));

	// s4-3 ding
	this.instance_44 = new lib.s43ding_1();
	this.instance_44.setTransform(-127.8,179.8,1,1,0,0,0,128.5,69.5);
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(110).to({_off:false},0).to({guide:{path:[-127.6,179.7,-118.6,170.8,-105,160.1,-71,133.3,-35,118.4,15.2,97.7,62.1,103.7,120.7,111.2,170.6,160.3,229,218,284.9,226.6,331,233.7,378.1,207.3,409.7,189.4,452.8,147.9,463.9,137.2,484.2,117.4,501,101.8,512.1,94.2,536.8,77.3,561.8,74.1,584.2,71.1,608.5,79,628.8,85.6,653.6,101.1,668.9,110.7,698.6,132.2,729.6,154.8,744.9,164.7,771.4,181.7,794,190.4,851.1,212.6,906.2,190]}},30).to({_off:true},1).wait(149));

	// s4-3 xiaoxuehua
	this.instance_45 = new lib.s43xiaoxuehua_1();
	this.instance_45.setTransform(168,421,0.005,0.004);
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(124).to({_off:false},0).to({scaleX:1,scaleY:1},3).wait(3).to({alpha:0},3).to({_off:true},43).wait(114));

	// s4-3 gebo qian
	this.instance_46 = new lib.s43geboqian();
	this.instance_46.setTransform(0,680);
	this.instance_46._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(110).to({_off:false},0).to({_off:true},66).wait(114));

	// s4-3 tou
	this.instance_47 = new lib.s43tou_1();
	this.instance_47.setTransform(750.2,503,1,1,-5,0,0,702.1,305.3);
	this.instance_47._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(110).to({_off:false},0).wait(17).to({regY:305,rotation:0,x:750.1,y:443},17,cjs.Ease.get(1)).to({_off:true},32).wait(114));

	// s4-3 gebo hou
	this.instance_48 = new lib.s43gebohou();
	this.instance_48.setTransform(0,745);
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(110).to({_off:false},0).to({_off:true},66).wait(114));

	// s4-3 bg
	this.instance_49 = new lib.s43bg();
	this.instance_49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(110).to({_off:false},0).to({_off:true},66).wait(114));

	// 图层 7
	this.instance_50 = new lib.s42ding_1();
	this.instance_50.setTransform(516.7,259.5,0.003,0.003,0,0,0,95.9,89.4);
	this.instance_50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(79).to({_off:false},0).to({regX:80,regY:74.5,scaleX:1,scaleY:1,guide:{path:[516.7,259.4,518.3,253.7,522.5,245.2,530.7,228.1,543.1,214,582.6,168.7,648.2,170,697,170.9,737.8,149.9,770.5,133.2,796.5,103.6,815.1,82.3,828.5,56.6,835.2,43.7,838.2,35.1]}},31).to({_off:true},1).wait(179));

	// s4-2 boom
	this.instance_51 = new lib.s42boom_1();
	this.instance_51.setTransform(548,310,0.004,0.006,0,0,0,0,39.5);
	this.instance_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(78).to({_off:false},0).wait(1).to({regX:0.1,regY:39.6,scaleX:0.4,scaleY:0.4},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:548.1,y:310.1},0).wait(1).to({regX:0,regY:39.5,scaleX:1,scaleY:1,x:548,y:310},0).to({_off:true},30).wait(179));

	// s4-2 laoshi
	this.instance_52 = new lib.s42laoshi_1();
	this.instance_52.setTransform(396.2,1219.9,1,1,10,0,0,-118.7,501.5);
	this.instance_52._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(62).to({_off:false},0).to({regX:-118.8,regY:501.4,rotation:0,x:256.2},10,cjs.Ease.get(1)).to({_off:true},39).wait(179));

	// s4-2 bg
	this.instance_53 = new lib.s42bg();
	this.instance_53._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(62).to({_off:false},0).to({_off:true},49).wait(179));

	// s4-1
	this.instance_54 = new lib.s41();
	this.instance_54.setTransform(375,610);

	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(24).to({scaleX:1.6,scaleY:1.6,x:374.9,y:729.9},38,cjs.Ease.get(-1)).to({_off:true},1).wait(227));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


// stage content:



(lib.qj_s4 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s4();
	this.instance.setTransform(375,610,1,1,0,0,0,375,610);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(375,610,750,1220);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;