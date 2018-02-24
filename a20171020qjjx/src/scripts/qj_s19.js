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
		{src:"images/cv/s191bg.png", id:"s191bg"},
		{src:"images/cv/s191di.png", id:"s191di"},
		{src:"images/cv/s1911.png", id:"s1911"},
		{src:"images/cv/s1911shou.png", id:"s1911shou"},
		{src:"images/cv/s1911zi2.png", id:"s1911zi2"},
		{src:"images/cv/s1911zishang.png", id:"s1911zishang"},
		{src:"images/cv/s1912.png", id:"s1912"},
		{src:"images/cv/s1912shou.png", id:"s1912shou"},
		{src:"images/cv/s1912zi.png", id:"s1912zi"},
		{src:"images/cv/s1912zi2.png", id:"s1912zi2"},
		{src:"images/cv/s192bg.png", id:"s192bg"},
		{src:"images/cv/s1921bg.png", id:"s1921bg"},
		{src:"images/cv/s1921renhou.png", id:"s1921renhou"},
		{src:"images/cv/s1921renhoushou.png", id:"s1921renhoushou"},
		{src:"images/cv/s1921renqian.png", id:"s1921renqian"},
		{src:"images/cv/s1921renqianshou.png", id:"s1921renqianshou"},
		{src:"images/cv/s1921shuohua.png", id:"s1921shuohua"},
		{src:"images/cv/s1922bg.png", id:"s1922bg"},
		{src:"images/cv/s1922ding.png", id:"s1922ding"},
		{src:"images/cv/s1922shou1.png", id:"s1922shou1"},
		{src:"images/cv/s1922shou2.png", id:"s1922shou2"},
		{src:"images/cv/s1922shou3.png", id:"s1922shou3"},
		{src:"images/cv/s1931.png", id:"s1931"},
		{src:"images/cv/s1932bg.png", id:"s1932bg"},
		{src:"images/cv/s1932han.png", id:"s1932han"},
		{src:"images/cv/s1933.png", id:"s1933"},
		{src:"images/cv/s1934bg.png", id:"s1934bg"},
		{src:"images/cv/s1934zui1.png", id:"s1934zui1"},
		{src:"images/cv/s1934zui2.png", id:"s1934zui2"},
		{src:"images/cv/s1934zui3.png", id:"s1934zui3"},
		{src:"images/cv/s1941.png", id:"s1941"},
		{src:"images/cv/s1941_1.png", id:"s1941_1"},
		{src:"images/cv/s1942.png", id:"s1942"},
		{src:"images/cv/s1943ren.png", id:"s1943ren"},
		{src:"images/cv/s1943shou.png", id:"s1943shou"},
		{src:"images/cv/s1943xue1.png", id:"s1943xue1"},
		{src:"images/cv/s1943xue2.png", id:"s1943xue2"},
		{src:"images/cv/s1943xue3.png", id:"s1943xue3"},
		{src:"images/cv/s1943xueyou.png", id:"s1943xueyou"},
		{src:"images/cv/s1943xuezhong.png", id:"s1943xuezhong"},
		{src:"images/cv/s1943xuezou.png", id:"s1943xuezou"},
		{src:"images/cv/s195bg.png", id:"s195bg"},
		{src:"images/cv/s195renshenti.png", id:"s195renshenti"},
		{src:"images/cv/s195shou1.png", id:"s195shou1"},
		{src:"images/cv/s195shou2.png", id:"s195shou2"},
		{src:"images/cv/s195shou3.png", id:"s195shou3"},
		{src:"images/cv/s195tou.png", id:"s195tou"},
		{src:"images/cv/s195tui.png", id:"s195tui"},
		{src:"images/cv/s195xue.png", id:"s195xue"},
		{src:"images/cv/s195xue1.png", id:"s195xue1"},
		{src:"images/cv/s195xue2.png", id:"s195xue2"},
		{src:"images/cv/s195xue3.png", id:"s195xue3"},
		{src:"images/cv/s195xue4.png", id:"s195xue4"},
		{src:"images/cv/s195zi2.png", id:"s195zi2"},
		{src:"images/cv/s195zi.png", id:"s195zi"}
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


(lib.s191bg = function() {
	this.initialize(img.s191bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,752,1254);


(lib.s191di = function() {
	this.initialize(img.s191di);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,846,570);


(lib.s1911 = function() {
	this.initialize(img.s1911);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,584,610);


(lib.s1911shou = function() {
	this.initialize(img.s1911shou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,183,246);


(lib.s1911zi2 = function() {
	this.initialize(img.s1911zi2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,72);


(lib.s1911zishang = function() {
	this.initialize(img.s1911zishang);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,72);


(lib.s1912 = function() {
	this.initialize(img.s1912);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,792,642);


(lib.s1912shou = function() {
	this.initialize(img.s1912shou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,243,224);


(lib.s1912zi = function() {
	this.initialize(img.s1912zi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,79);


(lib.s1912zi2 = function() {
	this.initialize(img.s1912zi2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,69);


(lib.s192bg = function() {
	this.initialize(img.s192bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s1921bg = function() {
	this.initialize(img.s1921bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1746,771);


(lib.s1921renhou = function() {
	this.initialize(img.s1921renhou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,188,330);


(lib.s1921renhoushou = function() {
	this.initialize(img.s1921renhoushou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,67);


(lib.s1921renqian = function() {
	this.initialize(img.s1921renqian);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,656,459);


(lib.s1921renqianshou = function() {
	this.initialize(img.s1921renqianshou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,245,209);


(lib.s1921shuohua = function() {
	this.initialize(img.s1921shuohua);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,275,156);


(lib.s1922bg = function() {
	this.initialize(img.s1922bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,617,716);


(lib.s1922ding = function() {
	this.initialize(img.s1922ding);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,212,152);


(lib.s1922shou1 = function() {
	this.initialize(img.s1922shou1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,158);


(lib.s1922shou2 = function() {
	this.initialize(img.s1922shou2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,153);


(lib.s1922shou3 = function() {
	this.initialize(img.s1922shou3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,144);


(lib.s1931 = function() {
	this.initialize(img.s1931);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,771,620);


(lib.s1932bg = function() {
	this.initialize(img.s1932bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,699,681);


(lib.s1932han = function() {
	this.initialize(img.s1932han);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,321,211);


(lib.s1933 = function() {
	this.initialize(img.s1933);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2012,865);


(lib.s1934bg = function() {
	this.initialize(img.s1934bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,835,622);


(lib.s1934zui1 = function() {
	this.initialize(img.s1934zui1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,63);


(lib.s1934zui2 = function() {
	this.initialize(img.s1934zui2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,70);


(lib.s1934zui3 = function() {
	this.initialize(img.s1934zui3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,70);


(lib.s1941 = function() {
	this.initialize(img.s1941);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,657,634);


(lib.s1941_1 = function() {
	this.initialize(img.s1941_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,203,125);


(lib.s1942 = function() {
	this.initialize(img.s1942);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,341);


(lib.s1943ren = function() {
	this.initialize(img.s1943ren);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,785);


(lib.s1943shou = function() {
	this.initialize(img.s1943shou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,494,318);


(lib.s1943xue1 = function() {
	this.initialize(img.s1943xue1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,166);


(lib.s1943xue2 = function() {
	this.initialize(img.s1943xue2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,181);


(lib.s1943xue3 = function() {
	this.initialize(img.s1943xue3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,197);


(lib.s1943xueyou = function() {
	this.initialize(img.s1943xueyou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,235,158);


(lib.s1943xuezhong = function() {
	this.initialize(img.s1943xuezhong);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,53);


(lib.s1943xuezou = function() {
	this.initialize(img.s1943xuezou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,184,161);


(lib.s195bg = function() {
	this.initialize(img.s195bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,773,1238);


(lib.s195renshenti = function() {
	this.initialize(img.s195renshenti);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,569,418);


(lib.s195shou1 = function() {
	this.initialize(img.s195shou1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,132);


(lib.s195shou2 = function() {
	this.initialize(img.s195shou2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,133);


(lib.s195shou3 = function() {
	this.initialize(img.s195shou3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,127);


(lib.s195tou = function() {
	this.initialize(img.s195tou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,344,268);


(lib.s195tui = function() {
	this.initialize(img.s195tui);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,437,694);


(lib.s195xue = function() {
	this.initialize(img.s195xue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,78);


(lib.s195xue1 = function() {
	this.initialize(img.s195xue1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,70);


(lib.s195xue2 = function() {
	this.initialize(img.s195xue2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,70);


(lib.s195xue3 = function() {
	this.initialize(img.s195xue3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,70);


(lib.s195xue4 = function() {
	this.initialize(img.s195xue4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,70);


(lib.s195zi2 = function() {
	this.initialize(img.s195zi2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,887,165);


(lib.s195zi = function() {
	this.initialize(img.s195zi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,714,310);


(lib.s195zi2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s195zi2();
	this.instance.setTransform(-310.4,-57.7,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-310.4,-57.7,620.9,115.5);


(lib.s195zi_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s195zi();
	this.instance.setTransform(-249.9,-108.5,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-249.9,-108.5,499.8,217);


(lib.s195tui_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s195tui();
	this.instance.setTransform(-218.5,-347);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-218.5,-347,437,694);


(lib.s195tou_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s195tou();
	this.instance.setTransform(-172,-134);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172,-134,344,268);


(lib.s195bixue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 4
	this.instance = new lib.s195xue4();
	this.instance.setTransform(-13,-35);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({_off:true},2).wait(6));

	// 图层 3
	this.instance_1 = new lib.s195xue3();
	this.instance_1.setTransform(-10,-35);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(4));

	// 图层 2
	this.instance_2 = new lib.s195xue2();
	this.instance_2.setTransform(-22,-35);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},2).wait(6).to({_off:false},0).to({_off:true},2).wait(2));

	// 图层 1
	this.instance_3 = new lib.s195xue1();
	this.instance_3.setTransform(-12,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},2).wait(10).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-35,24,70);


(lib.s1943xuezuo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1943xuezou();
	this.instance.setTransform(-92,-80.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-80.5,184,161);


(lib.s1943xuezhong_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1943xuezhong();
	this.instance.setTransform(-47,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-26.5,94,53);


(lib.s1943xueyou_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1943xueyou();
	this.instance.setTransform(-117.5,-79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.5,-79,235,158);


(lib.s1943suduxian = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cm_line();
	this.instance.setTransform(-600,-931);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-600,-931,1200,1862);


(lib.s1942_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1942();
	this.instance.setTransform(-350,-170.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-350,-170.5,700,341);


(lib.s1941_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1941_1();
	this.instance.setTransform(-101.5,-62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.5,-62.5,203,125);


(lib.s1941_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1941();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,657,634);


(lib.s1934 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 4
	this.instance = new lib.s1934zui3();
	this.instance.setTransform(453,288);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({_off:true},2).wait(4));

	// 图层 3
	this.instance_1 = new lib.s1934zui2();
	this.instance_1.setTransform(455,289);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2));

	// 图层 2
	this.instance_2 = new lib.s1934zui1();
	this.instance_2.setTransform(457,295);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},2).wait(6).to({_off:false},0).wait(2));

	// 图层 1
	this.instance_3 = new lib.s1934bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,835,622);


(lib.s1933_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1933();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2012,865);


(lib.s1932han_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1932han();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,321,211);


(lib.s1931_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1931();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,771,620);


(lib.s1922ding_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1922ding();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,212,152);


(lib.s1922 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 4
	this.instance = new lib.s1922shou3();
	this.instance.setTransform(324,407);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({_off:true},2).wait(6).to({_off:false},0).to({_off:true},2).wait(6).to({_off:false},0).to({_off:true},2).wait(6).to({_off:false},0).to({_off:true},2).wait(58));

	// 图层 3
	this.instance_1 = new lib.s1922shou2();
	this.instance_1.setTransform(324,398);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(56));

	// 图层 2
	this.instance_2 = new lib.s1922shou1();
	this.instance_2.setTransform(324,393);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},2).wait(6).to({_off:false},0).to({_off:true},2).wait(6).to({_off:false},0).to({_off:true},2).wait(6).to({_off:false},0).to({_off:true},2).wait(6).to({_off:false},0).wait(56));

	// 图层 1
	this.instance_3 = new lib.s1922bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(88));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,617,716);


(lib.s1921shuohua_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1921shuohua();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,275,156);


(lib.s1921renqianshou_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1921renqianshou();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,245,209);


(lib.s1921renhoushou_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1921renhoushou();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82,67);


(lib.s1912zi2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1912zi2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,122,69);


(lib.s1912zi_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1912zi();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126,79);


(lib.s1912shou_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1912shou();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,243,224);


(lib.s1911zishang_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1911zishang();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130,72);


(lib.s1911zi2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1911zi2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,117,72);


(lib.s1911shou_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1911shou();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,183,246);


(lib.s191di_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s191di();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,846,570);


(lib.s191bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s191bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,752,1254);


(lib.s1943 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 34
	this.instance = new lib.s1943xue3();
	this.instance.setTransform(390,978);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(166));

	// 图层 33
	this.instance_1 = new lib.s1943xue2();
	this.instance_1.setTransform(386,980);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({_off:true},2).wait(6).to({_off:false},0).to({_off:true},2).wait(6).to({_off:false},0).to({_off:true},2).wait(6).to({_off:false},0).to({_off:true},2).wait(6).to({_off:false},0).to({_off:true},2).wait(6).to({_off:false},0).to({_off:true},2).wait(6).to({_off:false},0).to({_off:true},2).wait(6).to({_off:false},0).to({_off:true},2).wait(6).to({_off:false},0).to({_off:true},2).wait(6).to({_off:false},0).to({_off:true},2).wait(6).to({_off:false},0).to({_off:true},2).wait(168));

	// 图层 32
	this.instance_2 = new lib.s1943xue1();
	this.instance_2.setTransform(374,980);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},2).wait(6).to({_off:false},0).to({_off:true},2).wait(6).to({_off:false},0).to({_off:true},2).wait(6).to({_off:false},0).to({_off:true},2).wait(6).to({_off:false},0).to({_off:true},2).wait(6).to({_off:false},0).to({_off:true},2).wait(6).to({_off:false},0).to({_off:true},2).wait(6).to({_off:false},0).to({_off:true},2).wait(6).to({_off:false},0).to({_off:true},2).wait(6).to({_off:false},0).to({_off:true},2).wait(6).to({_off:false},0).to({_off:true},2).wait(6).to({_off:false},0).wait(166));

	// 图层 31
	this.instance_3 = new lib.s1943shou();
	this.instance_3.setTransform(342,933);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(254));

	// 图层 30
	this.instance_4 = new lib.s1943xuezhong_1();
	this.instance_4.setTransform(490,981.5,0.005,0.009,0,0,0,47,15.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).to({regX:44.1,regY:15.1,scaleX:1.1,scaleY:1.1,x:490.1,y:981.6},3).to({scaleX:0.9,scaleY:0.9,y:981.5},7).to({scaleX:1.1,scaleY:1.1,y:981.6},7).to({scaleX:0.9,scaleY:0.9,y:981.5},7).to({scaleX:1.1,scaleY:1.1,y:981.6},7).to({scaleX:0.9,scaleY:0.9,y:981.5},7).to({scaleX:1.1,scaleY:1.1,y:981.6},7).to({scaleX:0.9,scaleY:0.9,y:981.5},7).to({scaleX:1.1,scaleY:1.1,y:981.6},7).to({scaleX:0.9,scaleY:0.9,y:981.5},7).to({scaleX:1.1,scaleY:1.1,y:981.6},7).to({scaleX:0.9,scaleY:0.9,y:981.5},7).to({scaleX:1.1,scaleY:1.1,y:981.6},7).wait(162));

	// 图层 29
	this.instance_5 = new lib.s1943xuezuo();
	this.instance_5.setTransform(436.5,1010.3,0.003,0.003,0,0,0,110.5,-16.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).to({regX:92.5,regY:-32.2,scaleX:1.2,scaleY:1.2},3).to({regX:92.6,regY:-32.1,scaleX:0.9,scaleY:0.9},7).to({regX:92.5,regY:-32.2,scaleX:1.2,scaleY:1.2},7).to({regX:92.6,regY:-32.1,scaleX:0.9,scaleY:0.9},7).to({regX:92.5,regY:-32.2,scaleX:1.2,scaleY:1.2},7).to({regX:92.6,regY:-32.1,scaleX:0.9,scaleY:0.9},7).to({regX:92.5,regY:-32.2,scaleX:1.2,scaleY:1.2},7).to({regX:92.6,regY:-32.1,scaleX:0.9,scaleY:0.9},7).to({regX:92.5,regY:-32.2,scaleX:1.2,scaleY:1.2},7).to({regX:92.6,regY:-32.1,scaleX:0.9,scaleY:0.9},7).to({regX:92.5,regY:-32.2,scaleX:1.2,scaleY:1.2},7).to({regX:92.6,regY:-32.1,scaleX:0.9,scaleY:0.9},7).to({regX:92.5,regY:-32.2,scaleX:1.2,scaleY:1.2},7).wait(162));

	// 图层 28
	this.instance_6 = new lib.s1943xueyou_1();
	this.instance_6.setTransform(516.5,979,0.002,0.003,0,0,0,-94.3,47.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({_off:false},0).to({regX:-105,regY:41.1,scaleX:1.1,scaleY:1.1,y:979.1},3).to({scaleX:0.9,scaleY:0.9,x:516.4,y:979},7).to({scaleX:1.1,scaleY:1.1,x:516.5,y:979.1},7).to({scaleX:0.9,scaleY:0.9,x:516.4,y:979},7).to({scaleX:1.1,scaleY:1.1,x:516.5,y:979.1},7).to({scaleX:0.9,scaleY:0.9,x:516.4,y:979},7).to({scaleX:1.1,scaleY:1.1,x:516.5,y:979.1},7).to({scaleX:0.9,scaleY:0.9,x:516.4,y:979},7).to({scaleX:1.1,scaleY:1.1,x:516.5,y:979.1},7).to({scaleX:0.9,scaleY:0.9,x:516.4,y:979},7).to({scaleX:1.1,scaleY:1.1,x:516.5,y:979.1},7).to({scaleX:0.9,scaleY:0.9,x:516.4,y:979},7).to({scaleX:1.1,scaleY:1.1,x:516.5,y:979.1},7).wait(162));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(342,933,494,318);


(lib.s1932 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.s1932han_1();
	this.instance.setTransform(352.5,408.5,1,1,0,0,0,160.5,105.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:418.4,alpha:1},4).to({y:445.6},11).to({y:455.5,alpha:0},4).wait(1));

	// 图层 1
	this.instance_1 = new lib.s1932bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,699,681);


(lib.s1921 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.s1921renqianshou_1();
	this.instance.setTransform(787.5,472.9,1,1,0,0,0,194.5,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({regX:194.6,rotation:8},3).to({regX:194.5,rotation:0},3).to({regX:194.6,rotation:8},3).to({regX:194.5,rotation:0},3).wait(53));

	// 图层 2
	this.instance_1 = new lib.s1921renqian();
	this.instance_1.setTransform(544,241);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(77));

	// 图层 4
	this.instance_2 = new lib.s1921renhou();
	this.instance_2.setTransform(543,306);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(77));

	// 图层 5
	this.instance_3 = new lib.s1921renhoushou_1();
	this.instance_3.setTransform(708.2,416,1,1,0,0,0,13.2,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:13.3,rotation:16,x:708.3},9).to({regX:13.2,rotation:0,x:708.2},10).to({regX:13.3,rotation:16,x:708.3},9).to({regX:13.2,rotation:0,x:708.2},10).to({regX:13.3,rotation:16,x:708.3},9).to({regX:13.2,rotation:0,x:708.2},10).to({regX:13.3,rotation:16,x:708.3},9).to({regX:13.2,rotation:0,x:708.2},10).wait(1));

	// 图层 1
	this.instance_4 = new lib.s1921bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(77));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1746,771);


(lib.s1912_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgmuAXCMAAAguEMBNdAAAMAAAAuEg");
	mask.setTransform(400.4,181.5);

	// 图层 2
	this.instance = new lib.s1912shou_1();
	this.instance.setTransform(562.6,316.1,1,1,-2,0,0,226.6,200);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:226.5,regY:200.1,rotation:4,x:562.5,y:316},14).to({regX:226.6,regY:200,rotation:-2,x:562.6,y:316.1},15).wait(1));

	// 图层 1
	this.instance_1 = new lib.s1912();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,792,642);


(lib.s1911_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.s1911shou_1();
	this.instance.setTransform(155.5,255,1,1,0,0,0,154.5,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:154.6,regY:204.1,rotation:-7,x:155.6,y:255.1},14).to({regX:154.5,regY:204,rotation:0,x:155.5,y:255},15).wait(1));

	// 图层 1
	this.instance_1 = new lib.s1911();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,584,610);


(lib.补间16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1943();
	this.instance.setTransform(-418.5,-892.5);

	this.instance_1 = new lib.s1943ren();
	this.instance_1.setTransform(-417.5,-392.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-417.5,-392.5,835,785);


(lib.补间15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1943();
	this.instance.setTransform(-418.5,-892.5);

	this.instance_1 = new lib.s1943ren();
	this.instance_1.setTransform(-417.5,-392.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-417.5,-392.5,835,785);


(lib.s19 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_305 = function() {
		this.stop();
		try{app.showBtns()}catch(e){}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(305).call(this.frame_305).wait(1));

	// 图层 21
	this.instance = new lib.s1933_1();
	this.instance.setTransform(4.9,999.5,1,1,0,0,0,1006,432.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(177).to({_off:false},0).to({x:359},8).wait(20).to({alpha:0},6).to({_off:true},1).wait(94));

	// 图层 22
	this.instance_1 = new lib.s1934();
	this.instance_1.setTransform(406.5,1531,1,1,0,0,0,417.5,311);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(181).to({_off:false},0).to({y:941},8,cjs.Ease.get(1)).wait(16).to({alpha:0},6).to({_off:true},1).wait(94));

	// 图层 20
	this.instance_2 = new lib.s1932();
	this.instance_2.setTransform(1118.5,476.5,1,1,0,0,0,349.5,340.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(157).to({_off:false},0).to({x:374.5},8,cjs.Ease.get(1)).wait(40).to({alpha:0},6).to({_off:true},1).wait(94));

	// 图层 19
	this.instance_3 = new lib.s1931_1();
	this.instance_3.setTransform(385.5,-81.1,1,1,0,0,0,385.5,310);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(145).to({_off:false},0).to({x:383.5,y:309},8,cjs.Ease.get(1)).wait(52).to({alpha:0},6).to({_off:true},1).wait(94));

	// 图层 31
	this.instance_4 = new lib.s195zi2_1();
	this.instance_4.setTransform(387.5,362.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(298).to({_off:false},0).to({alpha:1},7).wait(1));

	// 图层 30
	this.instance_5 = new lib.s195zi_1();
	this.instance_5.setTransform(337.9,174.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(298).to({_off:false},0).to({alpha:1},7).wait(1));

	// 图层 32
	this.instance_6 = new lib.s195xue3();
	this.instance_6.setTransform(305,643);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(299).to({_off:false},0).wait(7));

	// 图层 18
	this.instance_7 = new lib.s195bixue();
	this.instance_7.setTransform(339,627,1,1,0,0,0,24,-51);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(265).to({_off:false},0).to({rotation:5},9).to({rotation:0},8).to({rotation:5},8).to({rotation:0},8).to({_off:true},1).wait(7));

	// 图层 17
	this.instance_8 = new lib.s195tui_1();
	this.instance_8.setTransform(553.5,0.9,1,1,0,0,0,82,-172.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(265).to({_off:false},0).to({regX:82.2,regY:-171.9,rotation:5,x:553.6,y:19},9).to({regX:82,regY:-172.1,rotation:0,x:553.5,y:0.9},8).to({regX:82.2,regY:-171.9,rotation:5,x:553.6,y:19},8).to({regX:82,regY:-172.1,rotation:0,x:553.5,y:0.9},8).wait(8));

	// 图层 11
	this.instance_9 = new lib.s195tou_1();
	this.instance_9.setTransform(339,627,1,1,0,0,0,-37,40);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(265).to({_off:false},0).to({regY:40.1,rotation:5,y:627.1},9).to({regY:40,rotation:0,y:627},8).to({regY:40.1,rotation:5,y:627.1},8).to({regY:40,rotation:0,y:627},8).wait(8));

	// 图层 9
	this.instance_10 = new lib.s195renshenti();
	this.instance_10.setTransform(-11,462);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(265).to({_off:false},0).wait(41));

	// 图层 16
	this.instance_11 = new lib.s195xue();
	this.instance_11.setTransform(259,676);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(265).to({_off:false},0).wait(41));

	// 图层 29
	this.instance_12 = new lib.s195shou3();
	this.instance_12.setTransform(524,659);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(270).to({_off:false},0).to({_off:true},2).wait(6).to({_off:false},0).to({_off:true},2).wait(13).to({_off:false},0).to({_off:true},2).wait(11));

	// 图层 28
	this.instance_13 = new lib.s195shou2();
	this.instance_13.setTransform(524,653);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(268).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(9).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(9));

	// 图层 23
	this.instance_14 = new lib.s195shou1();
	this.instance_14.setTransform(524,654);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(265).to({_off:false},0).to({_off:true},3).wait(6).to({_off:false},0).to({_off:true},2).wait(6).to({_off:false},0).wait(7).to({_off:true},2).wait(6).to({_off:false},0).wait(9));

	// 图层 36
	this.instance_15 = new lib.s195bg();
	this.instance_15.setTransform(0,-19);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(265).to({_off:false},0).wait(41));

	// 图层 26
	this.instance_16 = new lib.s1942_1();
	this.instance_16.setTransform(-362.1,538.5);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(224).to({_off:false},0).to({x:376},8,cjs.Ease.get(1)).to({_off:true},34).wait(40));

	// 图层 35
	this.instance_17 = new lib.s1943suduxian();
	this.instance_17.setTransform(404,943.4,0,0.001,0,0,0,102.4,76.2);
	this.instance_17._off = true;
	this.instance_17.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_17.cache(-602,-933,1204,1866);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(235).to({_off:false},0).to({regX:0,regY:0.2,scaleX:0.84,scaleY:0.4},3).wait(1).to({x:412},0).wait(1).to({x:404},0).wait(1).to({y:951.4},0).wait(1).to({y:941.4},0).wait(1).to({x:416},0).wait(1).to({x:408,y:935.4},0).wait(1).to({x:404,y:943.4},0).wait(1).to({x:412},0).wait(1).to({x:404},0).wait(1).to({y:951.4},0).wait(1).to({y:941.4},0).wait(1).to({x:416},0).wait(1).to({x:408,y:935.4},0).wait(1).to({x:404,y:943.4},0).wait(1).to({x:412},0).wait(1).to({x:404},0).wait(1).to({y:951.4},0).wait(1).to({y:941.4},0).wait(1).to({x:416},0).wait(1).to({x:408,y:935.4},0).wait(2).to({x:404,y:943.4},0).wait(1).to({x:412},0).wait(1).to({x:404},0).wait(1).to({y:951.4},0).wait(1).to({y:941.4},0).wait(1).to({x:416},0).to({_off:true},1).wait(40));

	// 图层 27
	this.instance_18 = new lib.补间15("synched",0);
	this.instance_18.setTransform(1054.7,892.5);
	this.instance_18._off = true;

	this.instance_19 = new lib.补间16("synched",0);
	this.instance_19.setTransform(418.5,892.5);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(229).to({_off:false},0).to({_off:true,x:418.5},6,cjs.Ease.get(1)).wait(71));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(229).to({_off:false},6,cjs.Ease.get(1)).wait(1).to({y:890.5},0).wait(1).to({x:416.5},0).wait(1).to({y:892.5},0).to({_off:true},28).wait(40));

	// 图层 25
	this.instance_20 = new lib.s1941_2();
	this.instance_20.setTransform(469.5,196.5,0.002,0.004,0,0,0,0,12.5);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(215).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:1.2,scaleY:1.2,rotation:29,y:196.6},5).to({regY:0,scaleX:1,scaleY:1,rotation:0,y:196.5},3).to({_off:true},43).wait(40));

	// 图层 24
	this.instance_21 = new lib.s1941_3();
	this.instance_21.setTransform(-90.6,284,1,1,0,0,0,328.5,317);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(206).to({_off:false},0).to({x:351.5},8,cjs.Ease.get(1)).to({_off:true},52).wait(40));

	// 图层 15
	this.instance_22 = new lib.s1922ding_1();
	this.instance_22.setTransform(-191,997.2,0.002,0.003,0,0,0,105.7,91);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(115).to({_off:false},0).to({regX:106,regY:76,scaleX:1,scaleY:1,guide:{path:[-190.9,997.2,-180.6,991.4,-162.6,984.1,-126.6,969.5,-88.3,962.1,-34.7,951.7,15.9,957.1,79.2,963.9,134.2,995.2,193.1,1028.7,261,1046.4,326.4,1063.4,390.7,1063.4,454.7,1063.5,507.2,1046.4,561.6,1028.7,595.1,995.2,628.3,962,683.4,944.1,735.4,927.2,795.6,927.3,855.6,927.4,907.5,944.4,962.4,962.4,995.2,995.2]}},29).to({_off:true},1).wait(161));

	// 图层 14
	this.instance_23 = new lib.s1922();
	this.instance_23.setTransform(951.7,653,1,1,0,0,0,308.5,358);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(103).to({_off:false},0).to({x:409.5},8,cjs.Ease.get(1)).to({_off:true},34).wait(161));

	// 图层 13
	this.instance_24 = new lib.s1921shuohua_1();
	this.instance_24.setTransform(513.5,256.5,0.002,0.003,0,0,0,110.2,156.1);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(95).to({_off:false},0).to({regX:81.5,regY:153.5,scaleX:1,scaleY:1},4).to({_off:true},46).wait(161));

	// 图层 12
	this.instance_25 = new lib.s1921();
	this.instance_25.setTransform(-386.1,272.5,1,1,0,0,0,873,385.5);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(73).to({_off:false},0).to({x:356},8,cjs.Ease.get(1)).to({_off:true},64).wait(161));

	// 图层 7
	this.instance_26 = new lib.s1912zi2_1();
	this.instance_26.setTransform(149,532.5,0.004,0.007,0,0,0,60.9,34.5);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(49).to({_off:false},0).to({regX:61,scaleX:1,scaleY:1,rotation:12},5).wait(9).to({alpha:0},6).to({_off:true},1).wait(236));

	// 图层 6
	this.instance_27 = new lib.s1912zi_1();
	this.instance_27.setTransform(105,459.5,0.004,0.006,0,0,0,63,39.5);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(46).to({_off:false},0).to({regY:39.6,scaleX:1,scaleY:1,rotation:-13,x:105.1,y:459.6},5).wait(12).to({alpha:0},6).to({_off:true},1).wait(236));

	// 图层 5
	this.instance_28 = new lib.s1912_1();
	this.instance_28.setTransform(1010,620,1,1,0,0,0,396,321);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(33).to({_off:false},0).wait(1).to({x:707.9},0).wait(1).to({x:622.5},0).wait(1).to({x:571.6},0).wait(1).to({x:538},0).wait(1).to({x:515},0).wait(1).to({x:499.3},0).wait(1).to({x:488.6},0).wait(1).to({x:481.7},0).wait(1).to({x:477.6},0).wait(1).to({x:475.6},0).wait(1).to({x:475},0).wait(19).to({alpha:0},6).to({_off:true},1).wait(236));

	// 图层 4
	this.instance_29 = new lib.s1911zi2_1();
	this.instance_29.setTransform(596.5,254,0.004,0.007,0,0,0,70.2,36);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(25).to({_off:false},0).to({regX:58.6,scaleX:1,scaleY:1,rotation:15,x:596.6},5).wait(33).to({alpha:0},6).to({_off:true},1).wait(236));

	// 图层 3
	this.instance_30 = new lib.s1911zishang_1();
	this.instance_30.setTransform(566,172,0.004,0.007,0,0,0,78,43.2);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(22).to({_off:false},0).to({regX:65,regY:36,scaleX:1,scaleY:1,rotation:-27,y:172.1},5).wait(36).to({alpha:0},6).to({_off:true},1).wait(236));

	// 图层 2
	this.instance_31 = new lib.s1911_1();
	this.instance_31.setTransform(-220.1,310,1,1,0,0,0,292,305);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(9).to({_off:false},0).wait(1).to({regX:280.6,x:70.1},0).wait(1).to({x:155.4},0).wait(1).to({x:206.2},0).wait(1).to({x:239.7},0).wait(1).to({x:262.6},0).wait(1).to({x:278.4},0).wait(1).to({x:289},0).wait(1).to({x:295.9},0).wait(1).to({x:300},0).wait(1).to({regX:292,x:313.4},0).to({x:314},1).wait(43).to({alpha:0},6).to({_off:true},1).wait(236));

	// 图层 8
	this.instance_32 = new lib.s191di_1();
	this.instance_32.setTransform(352,963,1,1,0,0,0,423,285);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(63).to({alpha:0},6).to({_off:true},1).wait(236));

	// 图层 1
	this.instance_33 = new lib.s191bg_1();
	this.instance_33.setTransform(376,627,1,1,0,0,0,376,627);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(63).to({alpha:0},6).to({_off:true},1).wait(236));

	// 图层 10
	this.instance_34 = new lib.s192bg();
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(63).to({_off:false},0).to({_off:true},203).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,0,846,1254);


// stage content:



(lib.qj_s19 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s19();
	this.instance.setTransform(352,627,1,1,0,0,0,352,627);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(304,610,846,1254);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;