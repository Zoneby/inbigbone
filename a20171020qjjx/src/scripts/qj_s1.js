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
		{src:"images/cv/s11bg1.png", id:"s11bg1"},
		{src:"images/cv/s11maoshen1.png", id:"s11maoshen1"},
		{src:"images/cv/s11maotou1.png", id:"s11maotou1"},
		{src:"images/cv/s11ren1.png", id:"s11ren1"},
		{src:"images/cv/s11yanjing.png", id:"s11yanjing"},
		{src:"images/cv/s12maowei22.png", id:"s12maowei22"},
		{src:"images/cv/s12ding.png", id:"s12ding"},
		{src:"images/cv/s12houtui1.png", id:"s12houtui1"},
		{src:"images/cv/s12houtui2.png", id:"s12houtui2"},
		{src:"images/cv/s12maoshen2.png", id:"s12maoshen2"},
		{src:"images/cv/s12maotou2.png", id:"s12maotou2"},
		{src:"images/cv/s12miao.png", id:"s12miao"},
		{src:"images/cv/s12qianzhua.png", id:"s12qianzhua"},
		{src:"images/cv/s12ren2.png", id:"s12ren2"},
		{src:"images/cv/s12yanjing2.png", id:"s12yanjing2"},
		{src:"images/cv/s12yanjing3.png", id:"s12yanjing3"},
		{src:"images/cv/s12yanjing4.png", id:"s12yanjing4"},
		{src:"images/cv/s12.png", id:"s12"},
		{src:"images/cv/s13bg2.png", id:"s13bg2"},
		{src:"images/cv/s13xuesiyanzhuyou.png", id:"s13xuesiyanzhuyou"},
		{src:"images/cv/s13xuesiyanzhuzuo.png", id:"s13xuesiyanzhuzuo"},
		{src:"images/cv/s13youyanzhu.png", id:"s13youyanzhu"},
		{src:"images/cv/s13zuoyanzhu.png", id:"s13zuoyanzhu"},
		{src:"images/cv/s14bg3.png", id:"s14bg3"},
		{src:"images/cv/s14diannao.png", id:"s14diannao"},
		{src:"images/cv/s14lian.png", id:"s14lian"},
		{src:"images/cv/s14zui1.png", id:"s14zui1"},
		{src:"images/cv/s14zui2.png", id:"s14zui2"},
		{src:"images/cv/s14zui3.png", id:"s14zui3"},
		{src:"images/cv/s15bg4.png", id:"s15bg4"},
		{src:"images/cv/s15maoshen.png", id:"s15maoshen"},
		{src:"images/cv/s15maotou.png", id:"s15maotou"},
		{src:"images/cv/s15maotui1.png", id:"s15maotui1"},
		{src:"images/cv/s15maotui2.png", id:"s15maotui2"},
		{src:"images/cv/s15maowei.png", id:"s15maowei"},
		{src:"images/cv/s15maozhua1.png", id:"s15maozhua1"},
		{src:"images/cv/s15maozhua2.png", id:"s15maozhua2"},
		{src:"images/cv/s15shou.png", id:"s15shou"},
		{src:"images/cv/s15zi.png", id:"s15zi"},
		{src:"images/cv/s1cat_00000.png", id:"s1cat_00000"},
		{src:"images/cv/s1cat_00001.png", id:"s1cat_00001"},
		{src:"images/cv/s1cat_00002.png", id:"s1cat_00002"},
		{src:"images/cv/s1cat_00003.png", id:"s1cat_00003"},
		{src:"images/cv/s1cat_00004.png", id:"s1cat_00004"},
		{src:"images/cv/s1cat_00005.png", id:"s1cat_00005"},
		{src:"images/cv/s1cat_00006.png", id:"s1cat_00006"},
		{src:"images/cv/s1cat_00007.png", id:"s1cat_00007"},
		{src:"images/cv/s1cat_00008.png", id:"s1cat_00008"},
		{src:"images/cv/s1cat_00009.png", id:"s1cat_00009"},
		{src:"images/cv/s1cat_00010.png", id:"s1cat_00010"},
		{src:"images/cv/s1wenzi2.png", id:"s1wenzi2"}
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


(lib.s11bg1 = function() {
	this.initialize(img.s11bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s11maoshen1 = function() {
	this.initialize(img.s11maoshen1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,255,233);


(lib.s11maotou1 = function() {
	this.initialize(img.s11maotou1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,175);


(lib.s11ren1 = function() {
	this.initialize(img.s11ren1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,613);


(lib.s11yanjing = function() {
	this.initialize(img.s11yanjing);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,157);


(lib.s12maowei22 = function() {
	this.initialize(img.s12maowei22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,199,175);


(lib.s12ding = function() {
	this.initialize(img.s12ding);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,68);


(lib.s12houtui1 = function() {
	this.initialize(img.s12houtui1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,261);


(lib.s12houtui2 = function() {
	this.initialize(img.s12houtui2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,116);


(lib.s12maoshen2 = function() {
	this.initialize(img.s12maoshen2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,218);


(lib.s12maotou2 = function() {
	this.initialize(img.s12maotou2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,148);


(lib.s12miao = function() {
	this.initialize(img.s12miao);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,109);


(lib.s12qianzhua = function() {
	this.initialize(img.s12qianzhua);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,184,123);


(lib.s12ren2 = function() {
	this.initialize(img.s12ren2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,614);


(lib.s12yanjing2 = function() {
	this.initialize(img.s12yanjing2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,147);


(lib.s12yanjing3 = function() {
	this.initialize(img.s12yanjing3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,148);


(lib.s12yanjing4 = function() {
	this.initialize(img.s12yanjing4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,161);


(lib.s12 = function() {
	this.initialize(img.s12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,22);


(lib.s13bg2 = function() {
	this.initialize(img.s13bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s13xuesiyanzhuyou = function() {
	this.initialize(img.s13xuesiyanzhuyou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,255,327);


(lib.s13xuesiyanzhuzuo = function() {
	this.initialize(img.s13xuesiyanzhuzuo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,308,247);


(lib.s13youyanzhu = function() {
	this.initialize(img.s13youyanzhu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,29);


(lib.s13zuoyanzhu = function() {
	this.initialize(img.s13zuoyanzhu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,29);


(lib.s14bg3 = function() {
	this.initialize(img.s14bg3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,927,1508);


(lib.s14diannao = function() {
	this.initialize(img.s14diannao);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,887,1270);


(lib.s14lian = function() {
	this.initialize(img.s14lian);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,752,1221);


(lib.s14zui1 = function() {
	this.initialize(img.s14zui1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,235,81);


(lib.s14zui2 = function() {
	this.initialize(img.s14zui2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,93);


(lib.s14zui3 = function() {
	this.initialize(img.s14zui3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,239,101);


(lib.s15bg4 = function() {
	this.initialize(img.s15bg4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1177,1434);


(lib.s15maoshen = function() {
	this.initialize(img.s15maoshen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,369);


(lib.s15maotou = function() {
	this.initialize(img.s15maotou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,194);


(lib.s15maotui1 = function() {
	this.initialize(img.s15maotui1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,232);


(lib.s15maotui2 = function() {
	this.initialize(img.s15maotui2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,197);


(lib.s15maowei = function() {
	this.initialize(img.s15maowei);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,153,192);


(lib.s15maozhua1 = function() {
	this.initialize(img.s15maozhua1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,174);


(lib.s15maozhua2 = function() {
	this.initialize(img.s15maozhua2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,280);


(lib.s15shou = function() {
	this.initialize(img.s15shou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,247,209);


(lib.s15zi = function() {
	this.initialize(img.s15zi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,998,259);


(lib.s1cat_00000 = function() {
	this.initialize(img.s1cat_00000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.s1cat_00001 = function() {
	this.initialize(img.s1cat_00001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.s1cat_00002 = function() {
	this.initialize(img.s1cat_00002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.s1cat_00003 = function() {
	this.initialize(img.s1cat_00003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.s1cat_00004 = function() {
	this.initialize(img.s1cat_00004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.s1cat_00005 = function() {
	this.initialize(img.s1cat_00005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.s1cat_00006 = function() {
	this.initialize(img.s1cat_00006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.s1cat_00007 = function() {
	this.initialize(img.s1cat_00007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.s1cat_00008 = function() {
	this.initialize(img.s1cat_00008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.s1cat_00009 = function() {
	this.initialize(img.s1cat_00009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.s1cat_00010 = function() {
	this.initialize(img.s1cat_00010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.s1wenzi2 = function() {
	this.initialize(img.s1wenzi2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,890,241);


(lib.s15zi_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15zi();
	this.instance.setTransform(-349.3,-90.6,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-349.3,-90.6,698.6,181.3);


(lib.s15shou_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15shou();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,247,209);


(lib.s15maozhua2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15maozhua2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102,280);


(lib.s15maozhua1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15maozhua1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72,174);


(lib.s15maowei_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15maowei();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,153,192);


(lib.s15maotui2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15maotui2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66,197);


(lib.s15maotui1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15maotui1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62,232);


(lib.s15maotou_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15maotou();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145,194);


(lib.s15maoshen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s15maoshen();
	this.instance.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,145,369);


(lib.s14zui1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s14zui1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,235,81);


(lib.s14lian_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s14lian();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,752,1221);


(lib.s14diannao_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s14diannao();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,887,1270);


(lib.s14bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s14bg3();
	this.instance.setTransform(-463.5,-754);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-463.5,-754,927,1508);


(lib.s13suduxian = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cm_line();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1200,1862);


(lib.s12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s12();
	this.instance.setTransform(-18,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-11,36,22);


(lib.s12ren2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s12ren2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,800,614);


(lib.s12qianzhua_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 喵喵前腿
	this.instance = new lib.s12qianzhua();
	this.instance.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,184,123);


(lib.s12miao_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s12miao();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75,109);


(lib.s12maowei2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s12maowei22();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,199,175);


(lib.s12maotou2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s12maotou2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,149,148);


(lib.s12maoshen2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 2-喵喵
	this.instance = new lib.s12maoshen2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,250,218);


(lib.s12houtui2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 喵喵后腿2
	this.instance = new lib.s12houtui2();
	this.instance.setTransform(2,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,-14,76,116);


(lib.s12houtui1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s12houtui1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121,261);


(lib.s12ding_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s12ding();
	this.instance.setTransform(-32,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-34,64,68);


(lib.s11ren1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s11ren1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,800,613);


(lib.s11maotou1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s11maotou1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,172,175);


(lib.s11maoshen1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s11maoshen1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,255,233);


(lib.s1wenzi2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1wenzi2();
	this.instance.setTransform(0,0,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,623,168.7);


(lib.s1page3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 速度线
	this.instance = new lib.s13suduxian();
	this.instance.setTransform(376,605,0.005,0.003,0,0,0,607.6,941.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:600,regY:931,scaleX:1,scaleY:1},4).wait(1).to({y:608.6},0).wait(1).to({y:605},0).wait(1).to({x:370.6},0).wait(1).to({x:374.2,y:601.4},0).wait(1).to({y:594.2},0).wait(1).to({x:372.4},0).wait(1).to({x:379.6,y:596},0).wait(1).to({x:372.4,y:588.8},0).wait(1).to({x:377.8,y:581.6},0).wait(1).to({x:374.2,y:588.8},0).wait(1).to({x:376,y:605},0).wait(1).to({y:608.6},0).wait(1).to({y:605},0).wait(1).to({x:370.6},0).wait(1).to({x:374.2,y:601.4},0).wait(1).to({y:594.2},0).wait(1).to({x:372.4},0).wait(1).to({x:379.6,y:596},0).wait(1).to({x:372.4,y:588.8},0).wait(1).to({x:377.8,y:581.6},0).wait(1).to({x:374.2,y:588.8},0).wait(1).to({x:376,y:605},0).wait(1).to({y:608.6},0).wait(1).to({y:605},0).wait(1).to({x:370.6},0).wait(1).to({x:374.2,y:601.4},0).wait(1).to({y:594.2},0).wait(1).to({x:372.4},0).wait(1).to({x:379.6,y:596},0).wait(1).to({x:372.4,y:588.8},0).wait(1).to({x:377.8,y:581.6},0).wait(111));

	// 右眼珠
	this.instance_1 = new lib.s13youyanzhu();
	this.instance_1.setTransform(527,419);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:416},0).wait(1).to({y:420},0).wait(1).to({x:523},0).wait(1).to({y:424},0).wait(1).to({x:527,y:420},0).wait(1).to({x:530,y:422},0).wait(1).to({x:527,y:420},0).wait(1).to({y:419},0).wait(1).to({y:416},0).wait(1).to({y:420},0).wait(1).to({x:523},0).wait(1).to({y:424},0).wait(1).to({x:527,y:420},0).wait(1).to({x:530,y:422},0).wait(1).to({x:527,y:420},0).wait(1).to({y:419},0).wait(1).to({y:416},0).wait(1).to({y:420},0).wait(1).to({x:523},0).wait(1).to({y:424},0).wait(1).to({x:527,y:420},0).wait(1).to({x:530,y:422},0).wait(1).to({x:527,y:420},0).wait(1).to({y:419},0).wait(1).to({y:416},0).wait(1).to({y:420},0).wait(1).to({x:523},0).wait(1).to({y:424},0).wait(1).to({x:527,y:420},0).wait(1).to({x:530,y:422},0).wait(1).to({x:527,y:420},0).wait(1).to({y:419},0).wait(1).to({y:416},0).wait(1).to({y:420},0).wait(1).to({x:523},0).wait(1).to({y:424},0).wait(1).to({x:527,y:420},0).wait(1).to({x:530,y:422},0).wait(1).to({x:527,y:420},0).wait(1).to({y:419},0).wait(1).to({y:416},0).wait(1).to({y:420},0).wait(1).to({x:523},0).wait(1).to({y:424},0).wait(1).to({x:527,y:420},0).wait(1).to({x:530,y:422},0).wait(1).to({x:527,y:420},0).wait(99));

	// 左眼珠
	this.instance_2 = new lib.s13zuoyanzhu();
	this.instance_2.setTransform(163,849);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:161,y:850},0).wait(1).to({y:851},0).wait(1).to({x:163,y:852},0).wait(1).to({x:160,y:856},0).wait(1).to({x:162,y:855},0).wait(1).to({x:163,y:857},0).wait(2).to({y:849},0).wait(1).to({x:161,y:850},0).wait(1).to({y:851},0).wait(1).to({x:163,y:852},0).wait(1).to({x:160,y:856},0).wait(1).to({x:162,y:855},0).wait(1).to({x:163,y:857},0).wait(2).to({y:849},0).wait(1).to({x:161,y:850},0).wait(1).to({y:851},0).wait(1).to({x:163,y:852},0).wait(1).to({x:160,y:856},0).wait(1).to({x:162,y:855},0).wait(1).to({x:163,y:857},0).wait(2).to({y:849},0).wait(1).to({x:161,y:850},0).wait(1).to({y:851},0).wait(1).to({x:163,y:852},0).wait(1).to({x:160,y:856},0).wait(1).to({x:162,y:855},0).wait(1).to({x:163,y:857},0).wait(2).to({y:849},0).wait(1).to({x:161,y:850},0).wait(1).to({y:851},0).wait(1).to({x:163,y:852},0).wait(1).to({x:160,y:856},0).wait(1).to({x:162,y:855},0).wait(1).to({x:163,y:857},0).wait(2).to({y:849},0).wait(1).to({x:161,y:850},0).wait(1).to({y:851},0).wait(1).to({x:163,y:852},0).wait(1).to({x:160,y:856},0).wait(1).to({x:162,y:855},0).wait(1).to({x:163,y:857},0).wait(100));

	// 右眼白
	this.instance_3 = new lib.s13xuesiyanzhuyou();
	this.instance_3.setTransform(425,266);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(146));

	// 左眼白
	this.instance_4 = new lib.s13xuesiyanzhuzuo();
	this.instance_4.setTransform(36,742);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(146));

	// bg2
	this.instance_5 = new lib.s13bg2();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(146));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s1page2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// ～
	this.instance = new lib.s12_1("synched",0);
	this.instance.setTransform(566,256,0.014,0.023);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({scaleX:1,scaleY:1,x:642,y:234},6,cjs.Ease.get(-1)).wait(1).to({y:232.4},0).wait(1).to({y:234},0).wait(1).to({x:643.2},0).wait(1).to({x:641.6},0).wait(1).to({y:231.6},0).wait(1).to({x:644.4},0).wait(1).to({x:642},0).wait(1).to({y:233.2},0).wait(1).to({x:640.4},0).wait(1).to({x:643.2},0).wait(1).to({y:231.6},0).wait(1).to({x:644,y:233.6},0).wait(1).to({y:232},0).wait(1).to({x:642},0).wait(1).to({x:640.4,y:230.8},0).wait(1).to({y:229},0).wait(1).to({x:636.8},0).wait(1).to({x:642.2},0).wait(1).to({y:232.6},0).wait(1).to({x:645.8,y:230.8},0).wait(12).to({x:651.2},0).wait(1));

	// 叮
	this.instance_1 = new lib.s12ding_1("synched",0);
	this.instance_1.setTransform(556,256,0.008,0.007,0,0,0,6.4,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,x:588,y:240},6,cjs.Ease.get(-1)).wait(32).to({startPosition:0},0).wait(1));

	// 喵～
	this.instance_2 = new lib.s12miao_1();
	this.instance_2.setTransform(553,378.5,0.012,0.008,0,0,0,0,56.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).to({regY:54.5,scaleX:1,scaleY:1,x:565},6,cjs.Ease.get(-1)).wait(1).to({y:381.7},0).wait(1).to({x:566.6,y:383.3},0).wait(1).to({y:381.7},0).wait(1).to({y:384.9},0).wait(1).to({y:381.7},0).wait(1).to({y:384.9},0).wait(1).to({x:565},0).wait(1).to({x:566.6},0).wait(1).to({x:568.2},0).wait(1).to({x:566.6},0).wait(1).to({y:381.7,alpha:0.75},0).wait(1).to({y:387.6,alpha:0.5},0).wait(1).to({x:561.8,y:386.3,alpha:0.25},0).wait(1).to({x:566.6,y:384.9,alpha:0},0).wait(19));

	// 猫头2
	this.instance_3 = new lib.s12maotou2_1();
	this.instance_3.setTransform(476.1,299.4,0.999,0.999,-10,0,0,8.4,25.2);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-3,x:442.7,y:312.1,alpha:1},5).to({regX:8.2,regY:25.1,scaleX:1,scaleY:1,rotation:0,x:427.2,y:318.1},15).wait(39));

	// 前爪
	this.instance_4 = new lib.s12qianzhua_1();
	this.instance_4.setTransform(608.4,486.5,1,1,10,0,0,172.4,120.5);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:172.3,rotation:3,x:575.4,y:486.6,alpha:1},5).to({rotation:0,x:560.3,y:486.5},15).wait(39));

	// 后腿1
	this.instance_5 = new lib.s12houtui1_1();
	this.instance_5.setTransform(346,484.2,1,1,10,0,0,115,255.3);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:115.1,regY:255.4,rotation:3,y:484.4,alpha:1},5).to({regX:115,regY:255.3,rotation:0,y:484.3},15).wait(39));

	// 尾巴2
	this.instance_6 = new lib.s12maowei2();
	this.instance_6.setTransform(299.6,242.6,0.999,0.999,-17,0,0,11.2,169.1);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:11.3,rotation:-5.3,x:269.9,y:242.8,alpha:1},5).to({regX:11,regY:168.8,scaleX:1,scaleY:1,rotation:0,x:256},15).wait(39));

	// 猫身2
	this.instance_7 = new lib.s12maoshen2_1();
	this.instance_7.setTransform(315.4,235.9,0.999,0.999,-5,0,0,26.4,28.8);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-1.5,x:286.5,y:239.1,alpha:1},5).to({regX:25.9,regY:28.4,scaleX:1,scaleY:1,rotation:0,x:272.9,y:240.4},15).wait(39));

	// 后腿2
	this.instance_8 = new lib.s12houtui2_1();
	this.instance_8.setTransform(384.9,483.8,1,1,10,0,0,76.9,98.8);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:98.9,rotation:3,y:483.9,alpha:1},5).to({regX:76.8,regY:98.8,rotation:0,x:384.8,y:483.8},15).wait(39));

	// 图层 23
	this.instance_9 = new lib.s12yanjing4();
	this.instance_9.setTransform(254,739);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(28).to({_off:false},0).wait(31));

	// 图层 22
	this.instance_10 = new lib.s12yanjing3();
	this.instance_10.setTransform(259,753);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(27).to({_off:false},0).to({_off:true},1).wait(31));

	// 图层 21
	this.instance_11 = new lib.s12yanjing2();
	this.instance_11.setTransform(260,749);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(26).to({_off:false},0).to({_off:true},1).wait(32));

	// 眼睛1
	this.instance_12 = new lib.s11yanjing();
	this.instance_12.setTransform(259,741);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(5).to({_off:false},0).to({_off:true},21).wait(33));

	// 人2
	this.instance_13 = new lib.s12ren2_1();
	this.instance_13.setTransform(398,921,1,1,0,0,0,400,307);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(20).to({_off:false},0).to({alpha:1},6).wait(33));

	// 人1
	this.instance_14 = new lib.s11ren1_1();
	this.instance_14.setTransform(398,919.5,1,1,0,0,0,400,306.5);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(5).to({_off:false},0).to({_off:true},21).wait(33));

	// bg1
	this.instance_15 = new lib.s11bg1();
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(5).to({_off:false},0).wait(54));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(231.8,26.2,409.8,465.9);


(lib.s1cat1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 尾巴2 复制
	this.instance = new lib.s12maowei2();
	this.instance.setTransform(346.2,451.7,1,1,-70,0,0,32.8,165.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:32.7,rotation:-50,y:451.8},11).to({regX:32.8,rotation:-70,y:451.7},12).to({regX:32.7,rotation:-50,y:451.8},12).to({regX:32.8,rotation:-70,y:451.7},12).to({regX:32.7,rotation:-50,y:451.8},11).to({regX:32.8,rotation:-70,y:451.7},12).to({regX:32.7,rotation:-50,y:451.8},11).to({regX:32.8,rotation:-70,y:451.7},12).to({_off:true},1).wait(47));

	// 猫头1
	this.instance_1 = new lib.s11maotou1_1();
	this.instance_1.setTransform(556,340.9,1,1,0,0,0,60,143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:60.1,rotation:-10,x:556.1},11,cjs.Ease.get(0.5)).to({rotation:0},12,cjs.Ease.get(0.5)).to({regY:143.6,rotation:-10,x:556},12,cjs.Ease.get(0.5)).to({regX:60,regY:143.5,rotation:0},12,cjs.Ease.get(0.5)).to({regX:60.1,rotation:-10,x:556.1},11,cjs.Ease.get(0.5)).to({regX:60,rotation:0,x:556},12,cjs.Ease.get(0.5)).to({regX:60.1,rotation:-10,x:556.1},11,cjs.Ease.get(0.5)).to({rotation:0},12,cjs.Ease.get(0.5)).to({_off:true},1).wait(47));

	// 猫身1
	this.instance_2 = new lib.s11maoshen1_1();
	this.instance_2.setTransform(450.5,375.9,1,1,0,0,0,127.5,116.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(141));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(179.3,197.4,488.7,295);


(lib.s14bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s14bg("synched",0);
	this.instance.setTransform(463.5,754);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,927,1508);


(lib.s1mao = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{loop:0});

	// timeline functions:
	this.frame_52 = function() {
		this. stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(52).call(this.frame_52).wait(14));

	// 猫头
	this.instance = new lib.s15maotou_1();
	this.instance.setTransform(530.5,202,1,1,0,0,0,143.5,51);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:143.6,regY:51.1,rotation:-5,y:162},13).to({regX:143.5,regY:51,rotation:0,y:202},13).to({regX:143.6,regY:51.1,rotation:-5,y:162},13).to({regX:143.5,regY:51,rotation:0,y:202},13).to({_off:true},1).wait(13));

	// 猫爪2
	this.instance_1 = new lib.s15maozhua2_1();
	this.instance_1.setTransform(548.5,277.7,1,1,0,0,0,82.5,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:10,y:237.7},13).to({rotation:0,y:277.7},13).to({rotation:10,y:237.7},13).to({rotation:0,y:277.7},13).to({_off:true},1).wait(13));

	// 猫爪1
	this.instance_2 = new lib.s15maozhua1_1();
	this.instance_2.setTransform(450,318,1,1,0,0,0,32,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:10,y:278},13).to({rotation:0,y:318},13).to({rotation:10,y:278},13).to({rotation:0,y:318},13).to({_off:true},1).wait(13));

	// 猫腿2
	this.instance_3 = new lib.s15maotui2_1();
	this.instance_3.setTransform(548,475,1,1,0,0,0,33,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:15.1,rotation:10,y:435.1},13).to({regY:15,rotation:0,y:475},13).to({regY:15.1,rotation:10,y:435.1},13).to({regY:15,rotation:0,y:475},13).to({_off:true},1).wait(13));

	// 猫腿1
	this.instance_4 = new lib.s15maotui1_1();
	this.instance_4.setTransform(444,446.5,1,1,0,0,0,8,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:10,x:444.1,y:406.6},13).to({rotation:0,x:444,y:446.5},13).to({rotation:10,x:444.1,y:406.6},13).to({rotation:0,x:444,y:446.5},13).to({_off:true},1).wait(13));

	// 5-喵喵身体
	this.instance_5 = new lib.s15maoshen_1();
	this.instance_5.setTransform(549.1,218.3,1,1,0,0,0,109.1,26.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:178.3},13).to({y:218.3},13).to({y:178.3},13).to({y:218.3},13).to({_off:true},1).wait(13));

	// 猫尾
	this.instance_6 = new lib.s15maowei_1();
	this.instance_6.setTransform(498,548,1,1,0,0,0,21,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:21.1,regY:3.1,rotation:-10,x:498.1,y:508},13).to({regX:21,regY:3,rotation:0,x:498,y:548},13).to({regX:21.1,regY:3.1,rotation:-10,x:498.1,y:508},13).to({regX:21,regY:3,rotation:0,x:498,y:548},13).to({_off:true},1).wait(13));

	// 手
	this.instance_7 = new lib.s15shou_1();
	this.instance_7.setTransform(750.6,334.5,1,1,0,0,0,241.7,126.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:294.5},13).to({y:334.5},13).to({y:294.5},13).to({y:334.5},13).to({_off:true},1).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(387,151,368.9,586);


(lib.s1cat3 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.s1mao();
	this.instance.setTransform(572.2,513.1,1,1,0,0,0,572,517.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).wait(100));

	// 图层 1
	this.instance_1 = new lib.s1cat_00000();
	this.instance_1.setTransform(0,0,2,2);

	this.instance_2 = new lib.s1cat_00001();
	this.instance_2.setTransform(0,0,2,2);

	this.instance_3 = new lib.s1cat_00002();
	this.instance_3.setTransform(0,0,2,2);

	this.instance_4 = new lib.s1cat_00003();
	this.instance_4.setTransform(0,0,2,2);

	this.instance_5 = new lib.s1cat_00004();
	this.instance_5.setTransform(0,0,2,2);

	this.instance_6 = new lib.s1cat_00005();
	this.instance_6.setTransform(0,0,2,2);

	this.instance_7 = new lib.s1cat_00006();
	this.instance_7.setTransform(0,0,2,2);

	this.instance_8 = new lib.s1cat_00007();
	this.instance_8.setTransform(0,0,2,2);

	this.instance_9 = new lib.s1cat_00008();
	this.instance_9.setTransform(0,0,2,2);

	this.instance_10 = new lib.s1cat_00009();
	this.instance_10.setTransform(0,0,2,2);

	this.instance_11 = new lib.s1cat_00010();
	this.instance_11.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[]},1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_262 = function() {
		this.stop();
		try{app.showBtns()}catch(e){}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(262).call(this.frame_262).wait(1));

	// 文字2
	this.instance = new lib.s1wenzi2_1();
	this.instance.setTransform(364.5,948,1,1,0,0,0,311.5,84.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(251).to({_off:false},0).to({alpha:1},5).wait(7));

	// 图层 2
	this.instance_1 = new lib.s15zi_1();
	this.instance_1.setTransform(380.3,755.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(251).to({_off:false},0).to({alpha:1},5).wait(7));

	// 图层 3
	this.instance_2 = new lib.s1cat3();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(189).to({_off:false},0).wait(74));

	// bg4
	this.instance_3 = new lib.s15bg4();
	this.instance_3.setTransform(-6,-213);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(189).to({_off:false},0).wait(74));

	// 电脑
	this.instance_4 = new lib.s14diannao_1();
	this.instance_4.setTransform(1140.1,635,1,1,0,0,0,443.5,635);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(129).to({_off:false},0).to({x:380.1},9,cjs.Ease.get(1)).to({_off:true},106).wait(19));

	// 嘴3
	this.instance_5 = new lib.s14zui3();
	this.instance_5.setTransform(267,583);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(159).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(79));

	// 嘴2
	this.instance_6 = new lib.s14zui2();
	this.instance_6.setTransform(264,590);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(158).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(78));

	// 嘴1
	this.instance_7 = new lib.s14zui1_1();
	this.instance_7.setTransform(1141.5,616.6,0.9,0.9,0,0,0,117.5,40.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(129).to({_off:false},0).to({regX:117.6,scaleX:0.99,scaleY:0.99,x:381.6,y:658.5},9,cjs.Ease.get(1)).to({regX:117.5,regY:40.5,scaleX:1,scaleY:1,x:381.5,y:664.5},5).to({y:644.5},6).to({_off:true},9).wait(3).to({_off:false},0).wait(10).to({_off:true},2).wait(3).to({_off:false},0).wait(1).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).wait(4).to({_off:true},1).wait(73));

	// 脸
	this.instance_8 = new lib.s14lian_1();
	this.instance_8.setTransform(1137.1,582.6,0.9,0.9,0,0,0,376.1,610.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(129).to({_off:false},0).to({scaleX:0.99,scaleY:0.99,x:377,y:624.4},9,cjs.Ease.get(1)).to({regX:376,scaleX:1,scaleY:1,y:630.5},5).to({y:610.5},6).to({_off:true},95).wait(19));

	// bg3
	this.instance_9 = new lib.s14bg_1();
	this.instance_9.setTransform(1122.5,606,1,1,0,0,0,463.5,754);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(129).to({_off:false},0).to({x:362.5},9,cjs.Ease.get(1)).to({_off:true},106).wait(19));

	// 图层 9
	this.instance_10 = new lib.s1page3();
	this.instance_10.setTransform(375,610,1.3,1.3,0,0,0,375,610);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(97).to({_off:false},0).to({scaleX:1,scaleY:1},4,cjs.Ease.get(-1)).wait(37).to({_off:true},106).wait(19));

	// 图层 8
	this.instance_11 = new lib.s1page2();
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(47).to({_off:false},0).wait(28).to({regX:226.1,regY:930.2,x:226.1,y:930.2},0).to({scaleX:1.3,scaleY:1.3},30,cjs.Ease.get(1)).to({_off:true},1).wait(157));

	// 眼睛1
	this.instance_12 = new lib.s11yanjing();
	this.instance_12.setTransform(259,741);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},52).wait(211));

	// cat 1
	this.instance_13 = new lib.s1cat1();

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(47).to({alpha:0},5).to({_off:true},1).wait(210));

	// 人1
	this.instance_14 = new lib.s11ren1_1();
	this.instance_14.setTransform(398,919.5,1,1,0,0,0,400,306.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true},52).wait(211));

	// bg1
	this.instance_15 = new lib.s11bg1();

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:true},52).wait(211));

	// 图层 1
	this.instance_16 = new lib.s11bg1();

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({_off:true},1).wait(262));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,0,800,1226);


// stage content:



(lib.qj_s1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1();
	this.instance.setTransform(398,613,1,1,0,0,0,398,613);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(373,610,800,1226);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;