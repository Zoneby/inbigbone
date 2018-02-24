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
		{src:"images/cv/s1811.png", id:"s1811"},
		{src:"images/cv/s181119.png", id:"s181119"},
		{src:"images/cv/s181120.png", id:"s181120"},
		{src:"images/cv/s181121.png", id:"s181121"},
		{src:"images/cv/s181122.png", id:"s181122"},
		{src:"images/cv/s181123.png", id:"s181123"},
		{src:"images/cv/s181124.png", id:"s181124"},
		{src:"images/cv/s181125.png", id:"s181125"},
		{src:"images/cv/s181126.png", id:"s181126"},
		{src:"images/cv/s181127.png", id:"s181127"},
		{src:"images/cv/s181128.png", id:"s181128"},
		{src:"images/cv/s181129.png", id:"s181129"},
		{src:"images/cv/s181130.png", id:"s181130"},
		{src:"images/cv/s181131.png", id:"s181131"},
		{src:"images/cv/s181132.png", id:"s181132"},
		{src:"images/cv/s181133.png", id:"s181133"},
		{src:"images/cv/s181134.png", id:"s181134"},
		{src:"images/cv/s181135.png", id:"s181135"},
		{src:"images/cv/s181136.png", id:"s181136"},
		{src:"images/cv/s181137.png", id:"s181137"},
		{src:"images/cv/s181138.png", id:"s181138"},
		{src:"images/cv/s181139.png", id:"s181139"},
		{src:"images/cv/s181140.png", id:"s181140"},
		{src:"images/cv/s181141.png", id:"s181141"},
		{src:"images/cv/s181142.png", id:"s181142"},
		{src:"images/cv/s181143.png", id:"s181143"},
		{src:"images/cv/s181144.png", id:"s181144"},
		{src:"images/cv/s1812.png", id:"s1812"},
		{src:"images/cv/s18121.png", id:"s18121"},
		{src:"images/cv/s18122.png", id:"s18122"},
		{src:"images/cv/s18123.png", id:"s18123"},
		{src:"images/cv/s18124.png", id:"s18124"},
		{src:"images/cv/s18125.png", id:"s18125"},
		{src:"images/cv/s18126.png", id:"s18126"},
		{src:"images/cv/s18127.png", id:"s18127"},
		{src:"images/cv/s18128.png", id:"s18128"},
		{src:"images/cv/s18129.png", id:"s18129"},
		{src:"images/cv/s1813.png", id:"s1813"},
		{src:"images/cv/s18130.png", id:"s18130"},
		{src:"images/cv/s1814.png", id:"s1814"},
		{src:"images/cv/s18149.png", id:"s18149"},
		{src:"images/cv/s1815.png", id:"s1815"},
		{src:"images/cv/s18150.png", id:"s18150"},
		{src:"images/cv/s18151.png", id:"s18151"},
		{src:"images/cv/s18152.png", id:"s18152"},
		{src:"images/cv/s18153.png", id:"s18153"},
		{src:"images/cv/s18154.png", id:"s18154"},
		{src:"images/cv/s18155.png", id:"s18155"},
		{src:"images/cv/s18156.png", id:"s18156"},
		{src:"images/cv/s18157.png", id:"s18157"},
		{src:"images/cv/s18158.png", id:"s18158"},
		{src:"images/cv/s18159.png", id:"s18159"},
		{src:"images/cv/s1816.png", id:"s1816"},
		{src:"images/cv/s18160.png", id:"s18160"},
		{src:"images/cv/s1817.png", id:"s1817"},
		{src:"images/cv/s18177.png", id:"s18177"},
		{src:"images/cv/s18178.png", id:"s18178"},
		{src:"images/cv/s18179.png", id:"s18179"},
		{src:"images/cv/s1818.png", id:"s1818"},
		{src:"images/cv/s18180.png", id:"s18180"},
		{src:"images/cv/s18181.png", id:"s18181"},
		{src:"images/cv/s18182.png", id:"s18182"},
		{src:"images/cv/s18183.png", id:"s18183"},
		{src:"images/cv/s18184.png", id:"s18184"},
		{src:"images/cv/s18185.png", id:"s18185"},
		{src:"images/cv/s18186.png", id:"s18186"},
		{src:"images/cv/s18187.png", id:"s18187"},
		{src:"images/cv/s18188.png", id:"s18188"},
		{src:"images/cv/s18189.png", id:"s18189"}
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



(lib.s1811 = function() {
	this.initialize(img.s1811);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,265,759);


(lib.s181119 = function() {
	this.initialize(img.s181119);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,882,784);


(lib.s181120 = function() {
	this.initialize(img.s181120);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,448);


(lib.s181121 = function() {
	this.initialize(img.s181121);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,742,574);


(lib.s181122 = function() {
	this.initialize(img.s181122);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,122);


(lib.s181123 = function() {
	this.initialize(img.s181123);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,388,648);


(lib.s181124 = function() {
	this.initialize(img.s181124);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,374,570);


(lib.s181125 = function() {
	this.initialize(img.s181125);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,680);


(lib.s181126 = function() {
	this.initialize(img.s181126);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,266,694);


(lib.s181127 = function() {
	this.initialize(img.s181127);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,309,692);


(lib.s181128 = function() {
	this.initialize(img.s181128);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,216);


(lib.s181129 = function() {
	this.initialize(img.s181129);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,211);


(lib.s181130 = function() {
	this.initialize(img.s181130);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,222);


(lib.s181131 = function() {
	this.initialize(img.s181131);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,136,144);


(lib.s181132 = function() {
	this.initialize(img.s181132);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,160);


(lib.s181133 = function() {
	this.initialize(img.s181133);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,420,760);


(lib.s181134 = function() {
	this.initialize(img.s181134);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,286,194);


(lib.s181135 = function() {
	this.initialize(img.s181135);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,174);


(lib.s181136 = function() {
	this.initialize(img.s181136);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,88);


(lib.s181137 = function() {
	this.initialize(img.s181137);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,82);


(lib.s181138 = function() {
	this.initialize(img.s181138);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,252);


(lib.s181139 = function() {
	this.initialize(img.s181139);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1047,300);


(lib.s181140 = function() {
	this.initialize(img.s181140);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,880,239);


(lib.s181141 = function() {
	this.initialize(img.s181141);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,242);


(lib.s181142 = function() {
	this.initialize(img.s181142);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,754,1224);


(lib.s181143 = function() {
	this.initialize(img.s181143);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,154,204);


(lib.s181144 = function() {
	this.initialize(img.s181144);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,360,174);


(lib.s1812 = function() {
	this.initialize(img.s1812);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,411,195);


(lib.s18121 = function() {
	this.initialize(img.s18121);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,166);


(lib.s18122 = function() {
	this.initialize(img.s18122);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,405,630);


(lib.s18123 = function() {
	this.initialize(img.s18123);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,297,489);


(lib.s18124 = function() {
	this.initialize(img.s18124);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,501,564);


(lib.s18125 = function() {
	this.initialize(img.s18125);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,300);


(lib.s18126 = function() {
	this.initialize(img.s18126);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,384,609);


(lib.s18127 = function() {
	this.initialize(img.s18127);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,372,234);


(lib.s18128 = function() {
	this.initialize(img.s18128);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,309,363);


(lib.s18129 = function() {
	this.initialize(img.s18129);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,691);


(lib.s1813 = function() {
	this.initialize(img.s1813);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,291,144);


(lib.s18130 = function() {
	this.initialize(img.s18130);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,531);


(lib.s1814 = function() {
	this.initialize(img.s1814);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,239);


(lib.s18149 = function() {
	this.initialize(img.s18149);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,717,504);


(lib.s1815 = function() {
	this.initialize(img.s1815);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,198,216);


(lib.s18150 = function() {
	this.initialize(img.s18150);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,736,516);


(lib.s18151 = function() {
	this.initialize(img.s18151);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,229,130);


(lib.s18152 = function() {
	this.initialize(img.s18152);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,122);


(lib.s18153 = function() {
	this.initialize(img.s18153);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,576,608);


(lib.s18154 = function() {
	this.initialize(img.s18154);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,800);


(lib.s18155 = function() {
	this.initialize(img.s18155);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,736,516);


(lib.s18156 = function() {
	this.initialize(img.s18156);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,376,384);


(lib.s18157 = function() {
	this.initialize(img.s18157);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,344,122);


(lib.s18158 = function() {
	this.initialize(img.s18158);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,702,656);


(lib.s18159 = function() {
	this.initialize(img.s18159);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,711,498);


(lib.s1816 = function() {
	this.initialize(img.s1816);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,486);


(lib.s18160 = function() {
	this.initialize(img.s18160);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,870,1041);


(lib.s1817 = function() {
	this.initialize(img.s1817);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,738);


(lib.s18177 = function() {
	this.initialize(img.s18177);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,900);


(lib.s18178 = function() {
	this.initialize(img.s18178);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,264,260);


(lib.s18179 = function() {
	this.initialize(img.s18179);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,261,297);


(lib.s1818 = function() {
	this.initialize(img.s1818);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,505,562);


(lib.s18180 = function() {
	this.initialize(img.s18180);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,812);


(lib.s18181 = function() {
	this.initialize(img.s18181);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,264,540);


(lib.s18182 = function() {
	this.initialize(img.s18182);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,504,508);


(lib.s18183 = function() {
	this.initialize(img.s18183);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,312,524);


(lib.s18184 = function() {
	this.initialize(img.s18184);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,440,264);


(lib.s18185 = function() {
	this.initialize(img.s18185);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,404,348);


(lib.s18186 = function() {
	this.initialize(img.s18186);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,460,216);


(lib.s18187 = function() {
	this.initialize(img.s18187);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,360,344);


(lib.s18188 = function() {
	this.initialize(img.s18188);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1218);


(lib.s18189 = function() {
	this.initialize(img.s18189);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,100);


(lib.s181115 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s181144();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,360,174);


(lib.s181114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s181143();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,154,204);


(lib.s181113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s181142();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,754,1224);


(lib.s181112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s181141();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,242);


(lib.s181111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s181140();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,880,239);


(lib.s181110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s181139();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1047,300);


(lib.s181109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s181138();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,260,252);


(lib.s181108 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s181137();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64,82);


(lib.s181107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s181136();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,88);


(lib.s181106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s181135();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,174);


(lib.s181105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s181134();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,286,194);


(lib.s181104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s181133();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,420,760);


(lib.s181103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s181132();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,152,160);


(lib.s181102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s181131();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,136,144);


(lib.s181101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s181130();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,122,222);


(lib.s181100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s181129();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,141,211);


(lib.s18199 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s181128();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,132,216);


(lib.s18198 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s181127();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,309,692);


(lib.s18197 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s181126();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,266,694);


(lib.s18196 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s181125();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,680);


(lib.s18195 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s181124();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,374,570);


(lib.s18194 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s181123();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,388,648);


(lib.s18193 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s181122();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98,122);


(lib.s18192 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s181121();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,742,574);


(lib.s18191 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s181120();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,620,448);


(lib.s18190 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s181119();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,882,784);


(lib.s18176 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s18189();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,100);


(lib.s18172 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s18188();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1218);


(lib.s18171 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s18187();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,360,344);


(lib.s18170 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s18186();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,460,216);


(lib.s18169 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s18185();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,404,348);


(lib.s18168 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s18184();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,440,264);


(lib.s18167 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s18183();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,312,524);


(lib.s18166 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s18182();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,504,508);


(lib.s18165 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s18181();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,264,540);


(lib.s18164 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s18180();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,540,812);


(lib.s18163 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s18179();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,261,297);


(lib.s18162 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s18178();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,264,260);


(lib.s18161 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s18177();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,480,900);


(lib.s18144 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s18160();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,870,1041);


(lib.s18142 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s18158();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,702,656);


(lib.s18141 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s18157();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,344,122);


(lib.s18140 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s18156();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,376,384);


(lib.s18139 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhfXhfXMC+vAAAMAAAC+vMi+vAAAg");
	this.shape.setTransform(375,610,0.614,0.999);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhfXBfYMAAAi+vMC+vAAAMAAAC+vg");
	this.shape_1.setTransform(375,610,0.614,0.999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,752,1222);


(lib.s18138 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s18155();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,736,516);


(lib.s18137 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s18154();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,800,800);


(lib.s18136 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s18153();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,576,608);


(lib.s18135 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s18152();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,256,122);


(lib.s18134 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s18151();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,229,130);


(lib.s18133 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s18150();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,736,516);


(lib.s18119 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("Eg6vgpvMB1fAAAMAAABTfMh1fAAAg");
	this.shape.setTransform(376,267.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Eg6vApvMAAAhTeMB1fAAAMAAABTeg");
	this.shape_1.setTransform(376,267.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,754,536.4);


(lib.s18118 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s18130();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,531);


(lib.s18117 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s18129();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,691);


(lib.s18116 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s18121();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,158,166);


(lib.s18115 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s18128();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,309,363);


(lib.s18114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s18127();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,372,234);


(lib.s18113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s18126();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,384,609);


(lib.s18112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s18125();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,300);


(lib.s18111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s18124();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,501,564);


(lib.s18110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s18123();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,297,489);


(lib.s1819 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s18122();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,405,630);


(lib.s1815y = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1815();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,198,216);


(lib.s1814y = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1814();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,201,239);


(lib.s1813y = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1813();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,291,144);


(lib.s1812y = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1812();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,411,195);


(lib.s18 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_259 = function() {
		this.stop();
		try{app.showBtns()}catch(e){}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(259).call(this.frame_259).wait(1));

	// 文案2
	this.instance = new lib.s181111();
	this.instance.setTransform(310.6,913.7,0.7,0.7,0,0,0,440.2,119.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(235).to({_off:false},0).to({alpha:1},7).wait(18));

	// 文案1
	this.instance_1 = new lib.s181110();
	this.instance_1.setTransform(361,730.6,0.7,0.7,0,0,0,523.5,150.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(235).to({_off:false},0).to({alpha:1},7).wait(18));

	// 我错了
	this.instance_2 = new lib.s181106();
	this.instance_2.setTransform(424.6,157.5,0.047,0.047,0,0,0,41.1,135);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(243).to({_off:false},0).to({regX:41.2,scaleX:1,scaleY:1},5).wait(12));

	// 对不起
	this.instance_3 = new lib.s181102();
	this.instance_3.setTransform(224.2,166.8,0.052,0.052,0,0,0,79,123.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(239).to({_off:false},0).to({regX:79.2,scaleX:1,scaleY:1,y:166.7},5).wait(16));

	// 蒙版 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_226 = new cjs.Graphics().p("EgmKASyQgPjYgWkBIAAAAQgtoEgmjVIAAAAQgEgRAAgTIAAAAQABjMFpkoIAAAAQDGijDNh4IAAAAIPq+DQAAgaEYhuIAAAAQCMg3CMgyIAAAAIVQJZIF4DkQGGDrBMAmIAAAAQAsAXBKB7IAAAAQBIB6BQC3IAAAAQC3GiBXGJIAAAAQBAEdAAHKIAAAAQAABqgEBzIAAAAQgKFigyILIAAAAQgaEUlMHzIAAAAQh6C5h9CbIAAAAQhzCNgpAZIAAAAQg+Alo2BWIAAAAIopBNItwjIIrlgUIloBRIlpCgIl8EEg");
	var mask_graphics_227 = new cjs.Graphics().p("EgmKASyQgPjYgWkBIAAAAQgtoEgmjVIAAAAQgEgRAAgTIAAAAQABjMFpkoIAAAAQDGijDNh4IAAAAIPq+DQAAgaEYhuIAAAAQCMg3CMgyIAAAAIVQJZIF4DkQGGDrBMAmIAAAAQAsAXBKB7IAAAAQBIB6BQC3IAAAAQC3GiBXGJIAAAAQBAEdAAHKIAAAAQAABqgEBzIAAAAQgKFigyILIAAAAQgaEUlMHzIAAAAQh6C5h9CbIAAAAQhzCNgpAZIAAAAQg+Alo2BWIAAAAIopBNItwjIIrlgUIloBRIlpCgIl8EEg");
	var mask_graphics_228 = new cjs.Graphics().p("EgmKASyQgPjYgWkBIAAAAQgtoEgmjVIAAAAQgEgRAAgTIAAAAQABjMFpkoIAAAAQDGijDNh4IAAAAIPq+DQAAgaEYhuIAAAAQCMg3CMgyIAAAAIVQJZIF4DkQGGDrBMAmIAAAAQAsAXBKB7IAAAAQBIB6BQC3IAAAAQC3GiBXGJIAAAAQBAEdAAHKIAAAAQAABqgEBzIAAAAQgKFigyILIAAAAQgaEUlMHzIAAAAQh6C5h9CbIAAAAQhzCNgpAZIAAAAQg+Alo2BWIAAAAIopBNItwjIIrlgUIloBRIlpCgIl8EEg");
	var mask_graphics_229 = new cjs.Graphics().p("EgmKASyQgPjYgWkBIAAAAQgtoEgmjVIAAAAQgEgRAAgTIAAAAQABjMFpkoIAAAAQDGijDNh4IAAAAIPq+DQAAgaEYhuIAAAAQCMg3CMgyIAAAAIVQJZIF4DkQGGDrBMAmIAAAAQAsAXBKB7IAAAAQBIB6BQC3IAAAAQC3GiBXGJIAAAAQBAEdAAHKIAAAAQAABqgEBzIAAAAQgKFigyILIAAAAQgaEUlMHzIAAAAQh6C5h9CbIAAAAQhzCNgpAZIAAAAQg+Alo2BWIAAAAIopBNItwjIIrlgUIloBRIlpCgIl8EEg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(226).to({graphics:mask_graphics_226,x:1449,y:679}).wait(1).to({graphics:mask_graphics_227,x:1189,y:679}).wait(1).to({graphics:mask_graphics_228,x:929,y:679}).wait(1).to({graphics:mask_graphics_229,x:669,y:679}).wait(31));

	// 右边的和尚
	this.instance_4 = new lib.s18194();
	this.instance_4.setTransform(1397,787.5,1,1,0,0,0,194,324);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(226).to({_off:false},0).wait(1).to({x:1215},0).wait(1).to({x:817.6},0).wait(1).to({x:613},0).to({y:795.5},10).to({y:787.5},10).to({y:795.5},10).wait(1));

	// 大腿
	this.instance_5 = new lib.s181101();
	this.instance_5.setTransform(1397.5,883,1,1,0,0,0,61,111);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(226).to({_off:false},0).wait(1).to({x:1219.8,y:864.8},0).wait(1).to({x:831.7,y:825.1},0).wait(1).to({regX:79.4,regY:32.6,x:631.9,y:804.6},0).to({rotation:3.7,x:632,y:812.7},10).to({rotation:0,x:631.9,y:804.6},10).to({rotation:3.7,x:632,y:812.7},10).wait(1));

	// 脚
	this.instance_6 = new lib.s181114();
	this.instance_6.setTransform(1394.5,1019.2,1,1,0,0,0,77,102);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(226).to({_off:false},0).wait(1).to({x:1216.5,y:1038.7},0).wait(1).to({x:828,y:1081.3},0).wait(1).to({regX:94.6,regY:186,x:628.1,y:1103.2},0).to({regY:186.1,rotation:-5.7,y:1103.3},10).to({regY:186,rotation:0,y:1103.2},10).to({regY:186.1,rotation:-5.7,y:1103.3},10).wait(1));

	// 影子
	this.instance_7 = new lib.s181105();
	this.instance_7.setTransform(1356,1025,1,1,0,0,0,143,97);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(226).to({_off:false},0).to({x:556},3).wait(31));

	// 手掌1
	this.instance_8 = new lib.s181107();
	this.instance_8.setTransform(823.5,524.5,1,1,0,0,0,45,44);
	this.instance_8._off = true;

	this.instance_9 = new lib.s181108();
	this.instance_9.setTransform(61.9,526.1,1,1,0,0,0,45,44);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(226).to({_off:false},0).wait(1).to({x:641.4},0).wait(1).to({x:244},0).wait(1).to({x:39.5},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(232).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(1));

	// 手掌2
	this.instance_10 = new lib.s181108();
	this.instance_10.setTransform(828.4,524.5,1,1,0,0,0,32,41);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(226).to({_off:false},0).wait(1).to({x:646.4},0).wait(1).to({x:249},0).wait(1).to({x:44.4},0).wait(31));

	// 左边的和尚
	this.instance_11 = new lib.s181104();
	this.instance_11.setTransform(978.4,741.5,1,1,0,0,0,210,380);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(226).to({_off:false},0).wait(1).to({x:796.4},0).wait(1).to({x:399},0).wait(1).to({x:194.4},0).wait(31));

	// 和尚4大腿
	this.instance_12 = new lib.s18199();
	this.instance_12.setTransform(1275.6,572.3,1,1,0,0,0,66,108);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(226).to({_off:false},0).to({x:491.2,y:570.9},3).wait(31));

	// 和尚4脚
	this.instance_13 = new lib.s181100();
	this.instance_13.setTransform(1268.8,659.5,1,1,0,0,0,46.2,23.4);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(226).to({_off:false},0).to({x:484.4,y:658.1},3).to({regX:46.3,rotation:7.5,x:484.5},3).to({regX:46.2,rotation:0,x:484.4},3).to({regX:46.3,rotation:7.5,x:484.5},3).to({regX:46.2,rotation:0,x:484.4},3).to({regX:46.3,rotation:7.5,x:484.5},3).to({regX:46.2,rotation:0,x:484.4},3).to({regX:46.3,rotation:7.5,x:484.5},3).to({regX:46.2,rotation:0,x:484.4},3).to({regX:46.3,rotation:7.5,x:484.5},3).to({regX:46.2,rotation:0,x:484.4},3).wait(1));

	// 和尚4
	this.instance_14 = new lib.s18198();
	this.instance_14.setTransform(1301.5,501.7,1,1,0,0,0,153,352);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(226).to({_off:false},0).wait(1).to({regX:154.5,regY:346,x:1121,y:496},0).wait(1).to({x:723.6,y:496.6},0).wait(1).to({regX:153,regY:352,x:517.5,y:503},0).wait(31));

	// 云 消失
	this.instance_15 = new lib.s18191();
	this.instance_15.setTransform(1198.8,641.2,1,1,0,0,0,310,224);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(226).to({_off:false},0).wait(1).to({x:1016.8},0).wait(1).to({x:619.4},0).wait(1).to({x:414.8},0).to({regX:310.1,regY:224.1,scaleX:1.2,scaleY:1.2,x:414.9,y:641.3,alpha:0},2).to({regX:310,regY:224,scaleX:1,scaleY:1,x:414.8,y:641.2,alpha:1},2).to({regX:310.1,regY:224.1,scaleX:1.2,scaleY:1.2,x:414.9,y:641.3,alpha:0},2).to({regX:310,regY:224,scaleX:1,scaleY:1,x:414.8,y:641.2,alpha:1},2).to({regX:310.1,regY:224.1,scaleX:1.2,scaleY:1.2,x:414.9,y:641.3,alpha:0},2).to({regX:310,regY:224,scaleX:1,scaleY:1,x:414.8,y:641.2,alpha:1},2).to({regX:310.1,regY:224.1,scaleX:1.2,scaleY:1.2,x:414.9,y:641.3,alpha:0},2).to({regX:310,regY:224,scaleX:1,scaleY:1,x:414.8,y:641.2,alpha:1},2).to({regX:310.1,regY:224.1,scaleX:1.2,scaleY:1.2,x:414.9,y:641.3,alpha:0},2).to({regX:310,regY:224,scaleX:1,scaleY:1,x:414.8,y:641.2,alpha:1},2).to({regX:310.1,regY:224.1,scaleX:1.2,scaleY:1.2,x:414.9,y:641.3,alpha:0},2).to({regX:310,regY:224,scaleX:1,scaleY:1,x:414.8,y:641.2,alpha:1},2).to({regX:310.1,regY:224.1,scaleX:1.2,scaleY:1.2,x:414.9,y:641.3,alpha:0},2).to({regX:310,regY:224,scaleX:1,scaleY:1,x:414.8,y:641.2,alpha:1},2).to({regX:310.1,regY:224.1,scaleX:1.2,scaleY:1.2,x:414.9,y:641.3,alpha:0},2).wait(1));

	// 云
	this.instance_16 = new lib.s18191();
	this.instance_16.setTransform(1198.8,641.2,1,1,0,0,0,310,224);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(226).to({_off:false},0).wait(1).to({x:1016.8},0).wait(1).to({x:619.4},0).wait(1).to({x:414.8},0).to({regY:224.1,scaleX:1.1,scaleY:1.1,x:414.9,y:641.3},2).to({regY:224,scaleX:1,scaleY:1,x:414.8,y:641.2},2).to({regY:224.1,scaleX:1.1,scaleY:1.1,x:414.9,y:641.3},2).to({regY:224,scaleX:1,scaleY:1,x:414.8,y:641.2},2).to({regY:224.1,scaleX:1.1,scaleY:1.1,x:414.9,y:641.3},2).to({regY:224,scaleX:1,scaleY:1,x:414.8,y:641.2},2).to({regY:224.1,scaleX:1.1,scaleY:1.1,x:414.9,y:641.3},2).to({regY:224,scaleX:1,scaleY:1,x:414.8,y:641.2},2).to({regY:224.1,scaleX:1.1,scaleY:1.1,x:414.9,y:641.3},2).to({regY:224,scaleX:1,scaleY:1,x:414.8,y:641.2},2).to({regY:224.1,scaleX:1.1,scaleY:1.1,x:414.9,y:641.3},2).to({regY:224,scaleX:1,scaleY:1,x:414.8,y:641.2},2).to({regY:224.1,scaleX:1.1,scaleY:1.1,x:414.9,y:641.3},2).to({regY:224,scaleX:1,scaleY:1,x:414.8,y:641.2},2).to({regY:224.1,scaleX:1.1,scaleY:1.1,x:414.9,y:641.3},2).wait(1));

	// 和尚3
	this.instance_17 = new lib.s18197();
	this.instance_17.setTransform(1144.4,519.3,1,1,0,0,0,133,347);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(226).to({_off:false},0).wait(1).to({x:962.4},0).wait(1).to({x:565},0).wait(1).to({x:360.4},0).wait(31));

	// 和尚2
	this.instance_18 = new lib.s18196();
	this.instance_18.setTransform(1037.4,477.9,1,1,0,0,0,100,340);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(226).to({_off:false},0).wait(1).to({x:855.4},0).wait(1).to({x:458},0).wait(1).to({x:253.4},0).wait(31));

	// 左手
	this.instance_19 = new lib.s181103();
	this.instance_19.setTransform(980.3,234.8,1,1,0,0,0,76,80);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(226).to({_off:false},0).wait(1).to({x:795.6,y:243.3},0).wait(1).to({x:392.6,y:262},0).wait(1).to({regX:64.8,regY:116.8,x:185.1,y:271.6},0).to({rotation:21.9,x:197.9},3).to({rotation:0,x:185.1},3).to({rotation:21.9,x:197.9},3).to({rotation:0,x:185.1},3).to({rotation:21.9,x:197.9},3).to({rotation:0,x:185.1},3).to({rotation:21.9,x:197.9},3).to({rotation:0,x:185.1},3).to({rotation:21.9,x:197.9},3).to({rotation:0,x:185.1},3).wait(1));

	// 右手
	this.instance_20 = new lib.s18193();
	this.instance_20.setTransform(1130.5,253.2,1,1,0,0,0,49,61);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(226).to({_off:false},0).wait(1).to({x:951,y:259.8},0).wait(1).to({x:559.3,y:274.4},0).wait(1).to({regX:60.2,regY:89.8,x:357.7,y:282},0).to({regY:89.9,rotation:82.3,y:282.1},3).to({regY:89.8,rotation:0,y:282},3).to({regY:89.9,rotation:82.3,y:282.1},3).to({regY:89.8,rotation:0,y:282},3).to({regY:89.9,rotation:82.3,y:282.1},3).to({regY:89.8,rotation:0,y:282},3).to({regY:89.9,rotation:82.3,y:282.1},3).to({regY:89.8,rotation:0,y:282},3).to({regY:89.9,rotation:82.3,y:282.1},3).to({regY:89.8,rotation:0,y:282},3).wait(1));

	// 板凳
	this.instance_21 = new lib.s181112();
	this.instance_21.setTransform(1080,155.5,1,1,0,0,0,80,121);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(226).to({_off:false},0).wait(1).to({x:891.7,y:175.2},0).wait(1).to({x:480.5,y:218.2},0).wait(1).to({regX:52.8,regY:205.8,x:268.8,y:240.3},0).to({regX:52.9,rotation:60.7,x:226.2,y:295.5},3).to({regX:52.8,rotation:0,x:268.8,y:240.3},3).to({regX:52.9,rotation:60.7,x:226.2,y:295.5},3).to({regX:52.8,rotation:0,x:268.8,y:240.3},3).to({regX:52.9,rotation:60.7,x:226.2,y:295.5},3).to({regX:52.8,rotation:0,x:268.8,y:240.3},3).to({regX:52.9,rotation:60.7,x:226.2,y:295.5},3).to({regX:52.8,rotation:0,x:268.8,y:240.3},3).to({regX:52.9,rotation:60.7,x:226.2,y:295.5},3).to({regX:52.8,rotation:0,x:268.8,y:240.3},3).wait(1));

	// 和尚1
	this.instance_22 = new lib.s18195();
	this.instance_22.setTransform(1433.8,442.9,1,1,0,0,0,187,285);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(226).to({_off:false},0).wait(1).to({x:1251.8},0).wait(1).to({x:854.4},0).wait(1).to({x:649.8},0).wait(31));

	// 拿在手里的板凳
	this.instance_23 = new lib.s181109();
	this.instance_23.setTransform(1366,177.3,1,1,0,0,0,130,126);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(226).to({_off:false},0).wait(1).to({x:1190.7,y:200.7},0).wait(1).to({x:807.9,y:251.8},0).wait(1).to({regX:158.8,regY:226.8,x:610.8,y:278.1},0).to({rotation:-113.8,x:610.9},5).to({rotation:0,x:610.8},5).to({rotation:-113.8,x:610.9},5).to({rotation:0,x:610.8},5).to({rotation:-113.8,x:610.9},5).to({rotation:0,x:610.8},5).wait(1));

	// 一群和尚
	this.instance_24 = new lib.s18190();
	this.instance_24.setTransform(1198,484.5,1,1,0,0,0,441,392);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(226).to({_off:false},0).wait(1).to({x:1016},0).wait(1).to({x:618.6},0).wait(1).to({x:414},0).wait(31));

	// 云2 
	this.instance_25 = new lib.s18192();
	this.instance_25.setTransform(1155.8,601.5,1,1,0,0,0,371,287);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(226).to({_off:false},0).wait(1).to({scaleX:1.03,scaleY:1.02,x:973.8},0).wait(1).to({scaleX:1.11,scaleY:1.07,x:576.4,y:601.6},0).wait(1).to({regX:370.9,regY:287.1,scaleX:1.15,scaleY:1.09,x:371.8},0).to({regX:371,regY:287,scaleX:1,scaleY:1,y:601.5},2).to({regX:370.9,regY:287.1,scaleX:1.15,scaleY:1.09,y:601.6},2).to({regX:371,regY:287,scaleX:1,scaleY:1,y:601.5},2).to({regX:370.9,regY:287.1,scaleX:1.15,scaleY:1.09,y:601.6},2).to({regX:371,regY:287,scaleX:1,scaleY:1,y:601.5},2).to({regX:370.9,regY:287.1,scaleX:1.15,scaleY:1.09,y:601.6},2).to({regX:371,regY:287,scaleX:1,scaleY:1,y:601.5},2).to({regX:370.9,regY:287.1,scaleX:1.15,scaleY:1.09,y:601.6},2).to({regX:371,regY:287,scaleX:1,scaleY:1,y:601.5},2).to({regX:370.9,regY:287.1,scaleX:1.15,scaleY:1.09,y:601.6},2).to({regX:371,regY:287,scaleX:1,scaleY:1,y:601.5},2).to({regX:370.9,regY:287.1,scaleX:1.15,scaleY:1.09,y:601.6},2).to({regX:371,regY:287,scaleX:1,scaleY:1,y:601.5},2).to({regX:370.9,regY:287.1,scaleX:1.15,scaleY:1.09,y:601.6},2).to({regX:371,regY:287,scaleX:1,scaleY:1,y:601.5},2).wait(1));

	// 云2消失
	this.instance_26 = new lib.s18192();
	this.instance_26.setTransform(1155.8,601.5,1,1,0,0,0,371,287);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(226).to({_off:false},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:973.8,alpha:0.768},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:576.4,alpha:0.261},0).wait(1).to({regX:370.8,regY:290.7,scaleX:1.2,scaleY:1.2,x:371.8,y:601.6,alpha:0},0).to({regX:371,regY:287,scaleX:1,scaleY:1,y:601.5,alpha:1},2).to({regX:370.8,regY:290.7,scaleX:1.2,scaleY:1.2,y:601.6,alpha:0},2).to({regX:371,regY:287,scaleX:1,scaleY:1,y:601.5,alpha:1},2).to({regX:370.8,regY:290.7,scaleX:1.2,scaleY:1.2,y:601.6,alpha:0},2).to({regX:371,regY:287,scaleX:1,scaleY:1,y:601.5,alpha:1},2).to({regX:370.8,regY:290.7,scaleX:1.2,scaleY:1.2,y:601.6,alpha:0},2).to({regX:371,regY:287,scaleX:1,scaleY:1,y:601.5,alpha:1},2).to({regX:370.8,regY:290.7,scaleX:1.2,scaleY:1.2,y:601.6,alpha:0},2).to({regX:371,regY:287,scaleX:1,scaleY:1,y:601.5,alpha:1},2).to({regX:370.8,regY:290.7,scaleX:1.2,scaleY:1.2,y:601.6,alpha:0},2).to({regX:371,regY:287,scaleX:1,scaleY:1,y:601.5,alpha:1},2).to({regX:370.8,regY:290.7,scaleX:1.2,scaleY:1.2,y:601.6,alpha:0},2).to({regX:371,regY:287,scaleX:1,scaleY:1,y:601.5,alpha:1},2).to({regX:370.8,regY:290.7,scaleX:1.2,scaleY:1.2,y:601.6,alpha:0},2).to({regX:371,regY:287,scaleX:1,scaleY:1,y:601.5,alpha:1},2).wait(1));

	// 色块
	this.instance_27 = new lib.s181115();
	this.instance_27.setTransform(1235.2,400.2,1,1,0,0,0,180,87);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(226).to({_off:false},0).wait(1).to({x:1053.1},0).wait(1).to({x:655.7},0).wait(1).to({x:451.2},0).wait(31));

	// 背景
	this.instance_28 = new lib.s181113();
	this.instance_28.setTransform(1156.7,612,1,1,0,0,0,377,612);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(226).to({_off:false},0).wait(1).to({scaleX:1,scaleY:1,x:974.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:577.3},0).wait(1).to({regX:376.9,scaleX:1.01,scaleY:1.01,x:372.7},0).wait(31));

	// 出来啊
	this.instance_29 = new lib.s18163();
	this.instance_29.setTransform(517.6,291,0.046,0.046,0,0,0,28.4,279.7);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(195).to({_off:false},0).to({regX:28.1,scaleX:1,scaleY:1,x:517.5,y:290.9},4).to({_off:true},56).wait(5));

	// 冷汗
	this.instance_30 = new lib.s18162();
	this.instance_30.setTransform(151.6,648.8,1,1,0,0,0,132,130);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(187).to({_off:false},0).to({y:696.8,alpha:0},39).to({_off:true},29).wait(5));

	// 和尚
	this.instance_31 = new lib.s18164();
	this.instance_31.setTransform(221.8,908.4,1,1,0,0,0,270,406);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(187).to({_off:false},0).to({_off:true},68).wait(5));

	// 蒙版 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_187 = new cjs.Graphics().p("AzXTSMAAAgmjMAmvAAAMAAAAmjg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(187).to({graphics:mask_1_graphics_187,x:331.2,y:597.6}).wait(73));

	// 和尚虚线 复制
	this.instance_32 = new lib.s18167();
	this.instance_32.setTransform(306.8,578.8,1,1,0,0,0,23.2,76.4);
	this.instance_32._off = true;

	this.instance_32.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(187).to({_off:false},0).to({x:252.4,y:546.8},10).to({x:306.8,y:578.8},10).to({x:252.4,y:546.8},10).to({x:306.8,y:578.8},9).to({_off:true},29).wait(5));

	// 蒙版 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_187 = new cjs.Graphics().p("ArGM3IAA5tIWNAAIAAZtg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(187).to({graphics:mask_2_graphics_187,x:562.4,y:959.2}).wait(73));

	// 和尚虚线
	this.instance_33 = new lib.s18167();
	this.instance_33.setTransform(566,951.6,1,1,0,0,0,282.4,449.2);
	this.instance_33._off = true;

	this.instance_33.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(187).to({_off:false},0).to({rotation:15.2,x:588.4,y:977.2},10).to({rotation:0,x:566,y:951.6},10).to({rotation:15.2,x:588.4,y:977.2},10).to({rotation:0,x:566,y:951.6},9).to({_off:true},29).wait(5));

	// 和尚左手
	this.instance_34 = new lib.s18166();
	this.instance_34.setTransform(7,781.6,1,1,0,0,0,69.6,276.4);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(187).to({_off:false},0).to({rotation:-9.7,x:7.1},10).to({rotation:0,x:7},10).to({rotation:-9.7,x:7.1},10).to({rotation:0,x:7},9).to({_off:true},29).wait(5));

	// 和尚右手
	this.instance_35 = new lib.s18165();
	this.instance_35.setTransform(420,1047,1,1,0,0,0,56.8,391.6);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(187).to({_off:false},0).to({regY:391.7,rotation:11.7,y:1047.1},10).to({regY:391.6,rotation:0,y:1047},10).to({regY:391.7,rotation:11.7,y:1047.1},10).to({regY:391.6,rotation:0,y:1047},9).to({_off:true},29).wait(5));

	// 手本体
	this.instance_36 = new lib.s18168();
	this.instance_36.setTransform(308.8,608,1,1,0,0,0,60,205.6);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(187).to({_off:false},0).to({regX:60.1,regY:205.7,rotation:-12.3,x:309,y:608.1},2).to({regX:60,regY:205.6,rotation:0,x:308.8,y:608},2).to({regX:60.1,regY:205.7,rotation:14.7,x:308.9,y:608.1},2).to({regX:60,regY:205.6,rotation:0,x:308.8,y:608},2).wait(1).to({regX:60.1,regY:205.7,rotation:-12.3,x:309,y:608.1},2).to({regX:60,regY:205.6,rotation:0,x:308.8,y:608},2).to({regX:60.1,regY:205.7,rotation:14.7,x:308.9,y:608.1},2).to({regX:60,regY:205.6,rotation:0,x:308.8,y:608},2).wait(1).to({regX:60.1,regY:205.7,rotation:-12.3,x:309,y:608.1},2).to({regX:60,regY:205.6,rotation:0,x:308.8,y:608},2).to({regX:60.1,regY:205.7,rotation:14.7,x:308.9,y:608.1},2).to({regX:60,regY:205.6,rotation:0,x:308.8,y:608},2).wait(1).to({regX:60.1,regY:205.7,rotation:-12.3,x:309,y:608.1},2).to({regX:60,regY:205.6,rotation:0,x:308.8,y:608},2).to({regX:60.1,regY:205.7,rotation:14.7,x:308.9,y:608.1},2).to({regX:60,regY:205.6,rotation:0,x:308.8,y:608},2).to({_off:true},33).wait(5));

	// 手残影上
	this.instance_37 = new lib.s18169();
	this.instance_37.setTransform(313.2,578.8,1,1,0,0,0,56.4,258.8);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(190).to({_off:false},0).to({regX:56.5,regY:259,rotation:22.2,x:313.3,y:579,alpha:0},3).wait(6).to({regX:56.4,regY:258.8,rotation:0,x:313.2,y:578.8,alpha:1},0).to({regX:56.5,regY:259,rotation:22.2,x:313.3,y:579,alpha:0},3).wait(6).to({regX:56.4,regY:258.8,rotation:0,x:313.2,y:578.8,alpha:1},0).to({regX:56.5,regY:259,rotation:22.2,x:313.3,y:579,alpha:0},3).wait(6).to({regX:56.4,regY:258.8,rotation:0,x:313.2,y:578.8,alpha:1},0).to({regX:56.5,regY:259,rotation:22.2,x:313.3,y:579,alpha:0},3).to({_off:true},35).wait(5));

	// 手残影下
	this.instance_38 = new lib.s18170();
	this.instance_38.setTransform(325.2,637,1,1,0,0,0,66.8,172);
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(194).to({_off:false},0).to({regY:172.1,rotation:-21,x:325.3,y:637.1,alpha:0},4).wait(5).to({regY:172,rotation:0,x:325.2,y:637,alpha:1},0).to({regY:172.1,rotation:-21,x:325.3,y:637.1,alpha:0},4).wait(5).to({regY:172,rotation:0,x:325.2,y:637,alpha:1},0).to({regY:172.1,rotation:-21,x:325.3,y:637.1,alpha:0},4).wait(5).to({regY:172,rotation:0,x:325.2,y:637,alpha:1},0).to({regY:172.1,rotation:-21,x:325.3,y:637.1,alpha:0},4).to({_off:true},30).wait(5));

	// 手虚线
	this.instance_39 = new lib.s18171();
	this.instance_39.setTransform(304.8,620.8,1,1,0,0,0,36,210.4);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(187).to({_off:false},0).to({rotation:-12.7},2).to({rotation:0},2).to({rotation:14.2,y:620.9},2).to({rotation:0,y:620.8},2).wait(1).to({rotation:-12.7},2).to({rotation:0},2).to({rotation:14.2,y:620.9},2).to({rotation:0,y:620.8},2).wait(1).to({rotation:-12.7},2).to({rotation:0},2).to({rotation:14.2,y:620.9},2).to({rotation:0,y:620.8},2).wait(1).to({rotation:-12.7},2).to({rotation:0},2).to({rotation:14.2,y:620.9},2).to({rotation:0,y:620.8},2).to({_off:true},33).wait(5));

	// 蒙版 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_187 = new cjs.Graphics().p("Egpjg8YMAWmgq+IgBgBIAAAAQAAgbZ8ioIAAAAQNMhVNQhRIAAAAIIyevIN0QUIskZHIzIEtIFVKrIbnQ8IEZblMh7RBV+g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(187).to({graphics:mask_3_graphics_187,x:274.1,y:758}).wait(73));

	// 人
	this.instance_40 = new lib.s18161();
	this.instance_40.setTransform(357.2,582.4,1,1,0,0,0,240,450);
	this.instance_40._off = true;

	this.instance_40.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(187).to({_off:false},0).to({_off:true},68).wait(5));

	// 袖子
	this.instance_41 = new lib.s18176();
	this.instance_41.setTransform(499.5,552.4,1,1,0,0,0,53,50);
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(187).to({_off:false},0).to({x:483.5,y:512.4},2).to({x:499.5,y:552.4},2).wait(5).to({x:483.5,y:512.4},2).to({x:499.5,y:552.4},2).wait(5).to({x:483.5,y:512.4},2).to({x:499.5,y:552.4},2).wait(5).to({x:483.5,y:512.4},2).to({x:499.5,y:552.4},2).wait(5).to({x:483.5,y:512.4},2).to({x:499.5,y:552.4},2).wait(2).to({_off:true},26).wait(5));

	// 背景
	this.instance_42 = new lib.s18172();
	this.instance_42.setTransform(375,610.6,1.01,1.01,0,0,0,375,609);
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(187).to({_off:false},0).to({_off:true},68).wait(5));

	// 叮
	this.instance_43 = new lib.s18134();
	this.instance_43.setTransform(464.4,394.2,0.062,0.062,0,0,0,114.5,65);
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(140).to({_off:false},0).to({regY:65.1,scaleX:1,scaleY:1,rotation:1.5,x:604.4,y:662.8},9).to({regX:114.6,regY:65.2,rotation:-8.3,x:604.5},2).to({rotation:13.2,x:604.6,y:662.9},2).to({rotation:-8.3,x:604.5,y:662.8},2).to({rotation:13.2,x:604.6,y:662.9},2).wait(30).to({_off:true},1).wait(72));

	// 蒙版 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_128 = new cjs.Graphics().p("Eg3EAxmMAAAhjLMBuJAAAMAAABjLg");
	var mask_4_graphics_129 = new cjs.Graphics().p("Eg3EAxmMAAAhjLMBuJAAAMAAABjLg");
	var mask_4_graphics_130 = new cjs.Graphics().p("Eg3EAxmMAAAhjLMBuJAAAMAAABjLg");
	var mask_4_graphics_131 = new cjs.Graphics().p("Eg3EAxmMAAAhjLMBuJAAAMAAABjLg");
	var mask_4_graphics_132 = new cjs.Graphics().p("Eg3EAxmMAAAhjLMBuJAAAMAAABjLg");
	var mask_4_graphics_133 = new cjs.Graphics().p("Eg3EAxmMAAAhjLMBuJAAAMAAABjLg");
	var mask_4_graphics_134 = new cjs.Graphics().p("Eg3EAxmMAAAhjLMBuJAAAMAAABjLg");
	var mask_4_graphics_135 = new cjs.Graphics().p("Eg3EAxmMAAAhjLMBuJAAAMAAABjLg");
	var mask_4_graphics_136 = new cjs.Graphics().p("Eg3EAxmMAAAhjLMBuJAAAMAAABjLg");
	var mask_4_graphics_137 = new cjs.Graphics().p("Eg3EAxmMAAAhjLMBuJAAAMAAABjLg");
	var mask_4_graphics_138 = new cjs.Graphics().p("Eg3EAxmMAAAhjLMBuJAAAMAAABjLg");
	var mask_4_graphics_139 = new cjs.Graphics().p("Eg3EAxmMAAAhjLMBuJAAAMAAABjLg");
	var mask_4_graphics_140 = new cjs.Graphics().p("Eg3EAxmMAAAhjLMBuJAAAMAAABjLg");
	var mask_4_graphics_187 = new cjs.Graphics().p("Eg3EAxmMAAAhjLMBuJAAAMAAABjLg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(128).to({graphics:mask_4_graphics_128,x:-408.4,y:347.5}).wait(1).to({graphics:mask_4_graphics_129,x:-278.8,y:347.5}).wait(1).to({graphics:mask_4_graphics_130,x:-149.2,y:347.5}).wait(1).to({graphics:mask_4_graphics_131,x:-19.6,y:347.5}).wait(1).to({graphics:mask_4_graphics_132,x:110,y:347.5}).wait(1).to({graphics:mask_4_graphics_133,x:239.6,y:347.5}).wait(1).to({graphics:mask_4_graphics_134,x:369.2,y:347.5}).wait(1).to({graphics:mask_4_graphics_135,x:370.1,y:347.5}).wait(1).to({graphics:mask_4_graphics_136,x:371,y:347.5}).wait(1).to({graphics:mask_4_graphics_137,x:371.9,y:347.5}).wait(1).to({graphics:mask_4_graphics_138,x:372.8,y:347.5}).wait(1).to({graphics:mask_4_graphics_139,x:373.7,y:347.5}).wait(1).to({graphics:mask_4_graphics_140,x:374.6,y:347.5}).wait(47).to({graphics:mask_4_graphics_187,x:374.6,y:347.5}).wait(73));

	// 手
	this.instance_44 = new lib.s18136();
	this.instance_44.setTransform(-866.9,114.7,1,1,-20.2,0,0,33.5,81.7);
	this.instance_44._off = true;

	this.instance_44.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(128).to({_off:false},0).to({x:-86.9},6).to({rotation:-1,x:-87},6).wait(47).to({_off:true},1).wait(72));

	// 线
	this.instance_45 = new lib.s18141();
	this.instance_45.setTransform(-414.8,178.9,1,1,4.8,0,0,172.1,61.1);
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(128).to({_off:false},0).to({x:365.2},6).to({rotation:24.4,x:308.2,y:325.8,alpha:0},6).wait(47).to({_off:true},1).wait(72));

	// 蒙版 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_128 = new cjs.Graphics().p("EgnuAbsMAAAg3XMBPdAAAMAAAA3Xg");
	var mask_5_graphics_129 = new cjs.Graphics().p("EgnuAbsMAAAg3XMBPdAAAMAAAA3Xg");
	var mask_5_graphics_130 = new cjs.Graphics().p("EgnuAbsMAAAg3XMBPdAAAMAAAA3Xg");
	var mask_5_graphics_131 = new cjs.Graphics().p("EgnuAbsMAAAg3XMBPdAAAMAAAA3Xg");
	var mask_5_graphics_132 = new cjs.Graphics().p("EgnuAbsMAAAg3XMBPdAAAMAAAA3Xg");
	var mask_5_graphics_133 = new cjs.Graphics().p("EgnuAbsMAAAg3XMBPdAAAMAAAA3Xg");
	var mask_5_graphics_134 = new cjs.Graphics().p("EgnuAbsMAAAg3XMBPdAAAMAAAA3Xg");
	var mask_5_graphics_187 = new cjs.Graphics().p("EgnuAbsMAAAg3XMBPdAAAMAAAA3Xg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(128).to({graphics:mask_5_graphics_128,x:-337.3,y:487.8}).wait(1).to({graphics:mask_5_graphics_129,x:-207.3,y:487.8}).wait(1).to({graphics:mask_5_graphics_130,x:-77.3,y:487.8}).wait(1).to({graphics:mask_5_graphics_131,x:52.7,y:487.8}).wait(1).to({graphics:mask_5_graphics_132,x:182.7,y:487.8}).wait(1).to({graphics:mask_5_graphics_133,x:312.7,y:487.8}).wait(1).to({graphics:mask_5_graphics_134,x:442.7,y:487.8}).wait(53).to({graphics:mask_5_graphics_187,x:442.7,y:487.8}).wait(73));

	// 碗
	this.instance_46 = new lib.s18140();
	this.instance_46.setTransform(-323.5,567,1,1,0,0,0,188,192);
	this.instance_46._off = true;

	this.instance_46.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(128).to({_off:false},0).to({x:456.5},6).wait(53).to({_off:true},1).wait(72));

	// 图案
	this.instance_47 = new lib.s18135();
	this.instance_47.setTransform(-321.4,352.1,1,1,0,0,0,128,61);
	this.instance_47.alpha = 0;
	this.instance_47._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(128).to({_off:false},0).to({x:458.6,y:359.1},6).wait(6).to({alpha:1},0).wait(47).to({_off:true},1).wait(72));

	// 蒙版 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_128 = new cjs.Graphics().p("Eg21AxiMAAAhjDMBtrAAAMAAABjDg");
	var mask_6_graphics_129 = new cjs.Graphics().p("Eg21AxiMAAAhjDMBtrAAAMAAABjDg");
	var mask_6_graphics_130 = new cjs.Graphics().p("Eg21AxiMAAAhjDMBtrAAAMAAABjDg");
	var mask_6_graphics_131 = new cjs.Graphics().p("Eg21AxiMAAAhjDMBtrAAAMAAABjDg");
	var mask_6_graphics_132 = new cjs.Graphics().p("Eg21AxiMAAAhjDMBtrAAAMAAABjDg");
	var mask_6_graphics_133 = new cjs.Graphics().p("Eg21AxiMAAAhjDMBtrAAAMAAABjDg");
	var mask_6_graphics_134 = new cjs.Graphics().p("Eg21AxiMAAAhjDMBtrAAAMAAABjDg");
	var mask_6_graphics_187 = new cjs.Graphics().p("Eg21AxiMAAAhjDMBtrAAAMAAABjDg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(128).to({graphics:mask_6_graphics_128,x:-405.9,y:349.1}).wait(1).to({graphics:mask_6_graphics_129,x:-275.9,y:349.1}).wait(1).to({graphics:mask_6_graphics_130,x:-145.9,y:349.1}).wait(1).to({graphics:mask_6_graphics_131,x:-15.9,y:349.1}).wait(1).to({graphics:mask_6_graphics_132,x:114.1,y:349.1}).wait(1).to({graphics:mask_6_graphics_133,x:244.1,y:349.1}).wait(1).to({graphics:mask_6_graphics_134,x:374.1,y:349.1}).wait(53).to({graphics:mask_6_graphics_187,x:374.1,y:349.1}).wait(73));

	// 背景上
	this.instance_48 = new lib.s18142();
	this.instance_48.setTransform(-405.8,360.9,1,1,0,0,0,351,328);
	this.instance_48._off = true;

	this.instance_48.mask = mask_6;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(128).to({_off:false},0).to({x:374.2},6).wait(53).to({_off:true},1).wait(72));

	// 描边
	this.instance_49 = new lib.s18137();
	this.instance_49.setTransform(-406,360,1,1,0,0,0,400,400);
	this.instance_49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(128).to({_off:false},0).to({x:374},6).wait(53).to({_off:true},1).wait(72));

	// 描边下
	this.instance_50 = new lib.s18138();
	this.instance_50.setTransform(372.9,940.8,1,1,0,0,0,368,258);
	this.instance_50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(153).to({_off:false},0).to({_off:true},35).wait(72));

	// 蒙版 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_128 = new cjs.Graphics().p("Eg2qAmnMAAAhNNMBtVAAAMAAABNNg");
	var mask_7_graphics_131 = new cjs.Graphics().p("Eg2qAmnMAAAhNNMBtVAAAMAAABNNg");
	var mask_7_graphics_139 = new cjs.Graphics().p("Eg2qAmnMAAAhNNMBtVAAAMAAABNNg");
	var mask_7_graphics_153 = new cjs.Graphics().p("Eg2qAmnMAAAhNNMBtVAAAMAAABNNg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(128).to({graphics:mask_7_graphics_128,x:374.8,y:938.4}).wait(3).to({graphics:mask_7_graphics_131,x:374.8,y:938.4}).wait(8).to({graphics:mask_7_graphics_139,x:374.8,y:938.4}).wait(14).to({graphics:mask_7_graphics_153,x:374.8,y:938.4}).wait(107));

	// 刺2
	this.instance_51 = new lib.s18133();
	this.instance_51.setTransform(372.8,940.5,1,1,0,0,0,368,258);
	this.instance_51._off = true;

	this.instance_51.mask = mask_7;

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(153).to({_off:false},0).to({regX:368.1,regY:258.1,scaleX:1.04,scaleY:1.04,y:940.6},2).to({regX:368,regY:258,scaleX:1,scaleY:1,y:940.5},2).to({regX:368.1,regY:258.1,scaleX:1.04,scaleY:1.04,y:940.6},2).to({regX:368,regY:258,scaleX:1,scaleY:1,y:940.5},2).to({regX:368.1,regY:258.1,scaleX:1.04,scaleY:1.04,y:940.6},2).to({regX:368,regY:258,scaleX:1,scaleY:1,y:940.5},2).to({regX:368.1,regY:258.1,scaleX:1.04,scaleY:1.04,y:940.6},2).to({regX:368,regY:258,scaleX:1,scaleY:1,y:940.5},2).to({regX:368.1,regY:258.1,scaleX:1.04,scaleY:1.04,y:940.6},2).to({regX:368,regY:258,scaleX:1,scaleY:1,y:940.5},2).to({regX:368.1,regY:258.1,scaleX:1.04,scaleY:1.04,y:940.6},2).to({regX:368,regY:258,scaleX:1,scaleY:1,y:940.5},2).to({regX:368.1,regY:258.1,scaleX:1.04,scaleY:1.04,y:940.6},2).to({regX:368,regY:258,scaleX:1,scaleY:1,y:940.5},2).wait(2).to({regX:368.1,regY:258.1,scaleX:1.04,scaleY:1.04,y:940.6},2).wait(2).to({_off:true},1).wait(72));

	// 蒙版 复制 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_153 = new cjs.Graphics().p("Eg2qAmnMAAAhNNMBtVAAAMAAABNNg");
	var mask_8_graphics_156 = new cjs.Graphics().p("Eg2qAmnMAAAhNNMBtVAAAMAAABNNg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(153).to({graphics:mask_8_graphics_153,x:374.8,y:938.4}).wait(3).to({graphics:mask_8_graphics_156,x:374.8,y:938.4}).wait(104));

	// 脸
	this.instance_52 = new lib.s18144();
	this.instance_52.setTransform(376.1,925.5,0.038,0.038,0,0,0,435.1,520.2);
	this.instance_52._off = true;

	this.instance_52.mask = mask_8;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(153).to({_off:false},0).to({regX:435,regY:520.5,scaleX:1,scaleY:1,x:376},6).to({_off:true},29).wait(72));

	// 蒙版 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_153 = new cjs.Graphics().p("Eg25AOQMBwBAAAMAAABOwMhwBAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(153).to({graphics:mask_9_graphics_153,x:365.6,y:595.3}).wait(107));

	// 背景下
	this.instance_53 = new lib.s18159();
	this.instance_53.setTransform(24,691);
	this.instance_53._off = true;

	this.instance_53.mask = mask_9;

	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(153).to({_off:false},0).to({_off:true},35).wait(72));

	// 白底3
	this.instance_54 = new lib.s18139();
	this.instance_54.setTransform(372,610,1.01,1.01,0,0,0,374.9,610);
	this.instance_54._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(128).to({_off:false},0).wait(11).to({_off:true},49).wait(72));

	// 和尚的手
	this.instance_55 = new lib.s18112();
	this.instance_55.setTransform(370.6,1436.4,1,1,0,0,0,80,150);
	this.instance_55._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(75).to({_off:false},0).to({y:1148.4},7).to({y:1134},44).to({_off:true},25).wait(109));

	// 台词
	this.instance_56 = new lib.s18110();
	this.instance_56.setTransform(561.5,860.9,1,1,0,0,0,148.5,244.5);
	this.instance_56.alpha = 0;
	this.instance_56._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(82).to({_off:false},0).to({alpha:1},7).to({_off:true},62).wait(109));

	// 和尚
	this.instance_57 = new lib.s18111();
	this.instance_57.setTransform(-560.5,994,1,1,0,0,0,250.5,282);
	this.instance_57._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(71).to({_off:false},0).to({x:239.5},3).to({_off:true},77).wait(109));

	// 背景下
	this.instance_58 = new lib.s18118();
	this.instance_58.setTransform(-425.4,955.2,1.01,1.01,0,0,0,375,265.6);
	this.instance_58._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(71).to({_off:false},0).to({x:374.6},3).to({_off:true},77).wait(109));

	// 背景白底
	this.instance_59 = new lib.s18119();
	this.instance_59.setTransform(-424.4,956.8,1,1,0,0,0,376,267.2);
	this.instance_59._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(71).to({_off:false},0).to({x:375.6},3).to({_off:true},77).wait(109));

	// 大师请问
	this.instance_60 = new lib.s18114();
	this.instance_60.setTransform(516.6,132.8,1,1,0,0,0,186,117);
	this.instance_60.alpha = 0;
	this.instance_60._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(65).to({_off:false},0).to({alpha:1},6).to({_off:true},80).wait(109));

	// 图层 23 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_0 = new cjs.Graphics().p("Eg7fA2gMAAAhs+MB2+AAAMAAABs+g");
	var mask_10_graphics_150 = new cjs.Graphics().p("Eg7fA2gMAAAhs+MB2+AAAMAAABs+g");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:mask_10_graphics_0,x:379.2,y:344.8}).wait(150).to({graphics:mask_10_graphics_150,x:379.2,y:344.8}).wait(110));

	// 人背影
	this.instance_61 = new lib.s1819();
	this.instance_61.setTransform(1555.2,781.5,0.153,0.153,0,0,0,355.9,568.6);
	this.instance_61._off = true;

	this.instance_61.mask = mask_10;

	this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(49).to({_off:false},0).to({regX:358.2,regY:553,scaleX:0.1,scaleY:0.1,x:757.9,y:765.3},3).to({regX:358.4,regY:552.8,scaleX:1.02,scaleY:1.02,y:765.4},9).to({_off:true},90).wait(109));

	// 坐着的和尚
	this.instance_62 = new lib.s18113();
	this.instance_62.setTransform(991,374.5,1,1,0,0,0,192,304.5);
	this.instance_62._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_62).wait(49).to({_off:false},0).to({x:191},3).to({_off:true},99).wait(109));

	// 敲鼓的手
	this.instance_63 = new lib.s18115();
	this.instance_63.setTransform(985.3,288.5,1,1,0,0,0,18.5,56.7);
	this.instance_63._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_63).wait(49).to({_off:false},0).to({regX:13.7,regY:48.7,x:180.5,y:280.5},3).wait(4).to({regX:13.8,regY:48.8,rotation:-0.6,x:180.6,y:280.6},0).to({regX:13.7,rotation:-4.2,x:180.5},4).to({regY:48.7,rotation:0,y:280.5},4).to({_off:true},87).wait(109));

	// 碗
	this.instance_64 = new lib.s18116();
	this.instance_64.setTransform(1261.2,558,1,1,0,0,0,79,83);
	this.instance_64._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_64).wait(49).to({_off:false},0).to({x:461.2},3).to({_off:true},99).wait(109));

	// 背景上
	this.instance_65 = new lib.s18117();
	this.instance_65.setTransform(1173,345.5,1.01,1.01,0,0,0,374.9,345.4);
	this.instance_65._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_65).wait(49).to({_off:false},0).to({x:373},3).to({_off:true},99).wait(109));

	// 大师
	this.instance_66 = new lib.s1814y();
	this.instance_66.setTransform(538.3,658.4,0.013,0.013,0,0,0,0,241.6);
	this.instance_66._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_66).wait(26).to({_off:false},0).to({regX:-1.5,scaleX:1,scaleY:1,y:658.3},4).to({_off:true},70).wait(160));

	// 头
	this.instance_67 = new lib.s1815y();
	this.instance_67.setTransform(463,707.1,1,1,0,0,0,110,206.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_67).to({rotation:5,y:708.1},6).to({rotation:0,y:707.1},7).to({rotation:-4.2},7).to({rotation:0},5).to({_off:true},75).wait(160));

	// 右手
	this.instance_68 = new lib.s1813y();
	this.instance_68.setTransform(644.5,955.2,1,1,0,0,0,265.5,75.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_68).to({regY:75.3,rotation:13.4,x:644.6,y:955.3},10).to({regY:75.2,rotation:0,x:644.5,y:955.2},15).to({_off:true},75).wait(160));

	// 门2
	this.instance_69 = new lib.s1811();
	this.instance_69.setTransform(-27,479);

	this.timeline.addTween(cjs.Tween.get(this.instance_69).to({_off:true},100).wait(160));

	// 身体
	this.instance_70 = new lib.s1818();
	this.instance_70.setTransform(192,667);

	this.timeline.addTween(cjs.Tween.get(this.instance_70).to({_off:true},100).wait(160));

	// 门
	this.instance_71 = new lib.s1817();
	this.instance_71.setTransform(-3,475,1.01,1.01);

	this.timeline.addTween(cjs.Tween.get(this.instance_71).to({_off:true},100).wait(160));

	// 人群
	this.instance_72 = new lib.s1812y();
	this.instance_72.setTransform(550.5,386.5,1,1,0,0,0,205.5,97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_72).to({_off:true},100).wait(160));

	// 房子
	this.instance_73 = new lib.s1816();

	this.timeline.addTween(cjs.Tween.get(this.instance_73).to({_off:true},100).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,0,783,1238);


// stage content:



(lib.qj_s18 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s18();
	this.instance.setTransform(366.8,616.8,1,1,0,0,0,366.8,616.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(348,605.5,787.5,1242.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;