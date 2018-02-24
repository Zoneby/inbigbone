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
		{src:"images/cv/s2zi.png", id:"s2zi"},
		{src:"images/cv/s2zi2.png", id:"s2zi2"},
		{src:"images/cv/s2bg.jpg", id:"s2bg"},
		{src:"images/cv/s2body.png", id:"s2body"},
		{src:"images/cv/s2Body2.png", id:"s2Body2"},
		{src:"images/cv/s2Body3.png", id:"s2Body3"},
		{src:"images/cv/s2Computer.png", id:"s2Computer"},
		{src:"images/cv/s2ding.png", id:"s2ding"},
		{src:"images/cv/s2Head1.png", id:"s2Head1"},
		{src:"images/cv/s2Head2.png", id:"s2Head2"},
		{src:"images/cv/s2Head3.png", id:"s2Head3"},
		{src:"images/cv/s2Head4.png", id:"s2Head4"},
		{src:"images/cv/s2Head5.png", id:"s2Head5"},
		{src:"images/cv/s2Head6.png", id:"s2Head6"},
		{src:"images/cv/s2Lefrhsndup.png", id:"s2Lefrhsndup"},
		{src:"images/cv/s2Lefthand1.png", id:"s2Lefthand1"},
		{src:"images/cv/s2Lefthand2.png", id:"s2Lefthand2"},
		{src:"images/cv/s2Lefthand3.png", id:"s2Lefthand3"},
		{src:"images/cv/s2Lefthand4.png", id:"s2Lefthand4"},
		{src:"images/cv/s2Lefthand5.png", id:"s2Lefthand5"},
		{src:"images/cv/s2Lefthand6.png", id:"s2Lefthand6"},
		{src:"images/cv/s2Lefthanddown.png", id:"s2Lefthanddown"},
		{src:"images/cv/s2MicrowaveOven.png", id:"s2MicrowaveOven"},
		{src:"images/cv/s2penchushui.png", id:"s2penchushui"},
		{src:"images/cv/s2Righthand1.png", id:"s2Righthand1"},
		{src:"images/cv/s2Righthand2.png", id:"s2Righthand2"},
		{src:"images/cv/s2Righthand3.png", id:"s2Righthand3"},
		{src:"images/cv/s2Righthand4.png", id:"s2Righthand4"},
		{src:"images/cv/s2Righthand5.png", id:"s2Righthand5"}
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


(lib.s2zi = function() {
	this.initialize(img.s2zi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1001,123);


(lib.s2zi2 = function() {
	this.initialize(img.s2zi2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,654,165);


(lib.s2bg = function() {
	this.initialize(img.s2bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,749,1220);


(lib.s2body = function() {
	this.initialize(img.s2body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,331,384);


(lib.s2Body2 = function() {
	this.initialize(img.s2Body2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,552,432);


(lib.s2Body3 = function() {
	this.initialize(img.s2Body3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,575,921);


(lib.s2Computer = function() {
	this.initialize(img.s2Computer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,352,209);


(lib.s2ding = function() {
	this.initialize(img.s2ding);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,124);


(lib.s2Head1 = function() {
	this.initialize(img.s2Head1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,206,285);


(lib.s2Head2 = function() {
	this.initialize(img.s2Head2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,206,288);


(lib.s2Head3 = function() {
	this.initialize(img.s2Head3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,312);


(lib.s2Head4 = function() {
	this.initialize(img.s2Head4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,227,293);


(lib.s2Head5 = function() {
	this.initialize(img.s2Head5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,227,293);


(lib.s2Head6 = function() {
	this.initialize(img.s2Head6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,227,293);


(lib.s2Lefrhsndup = function() {
	this.initialize(img.s2Lefrhsndup);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,236,247);


(lib.s2Lefthand1 = function() {
	this.initialize(img.s2Lefthand1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,221,434);


(lib.s2Lefthand2 = function() {
	this.initialize(img.s2Lefthand2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,214,424);


(lib.s2Lefthand3 = function() {
	this.initialize(img.s2Lefthand3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,408);


(lib.s2Lefthand4 = function() {
	this.initialize(img.s2Lefthand4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,352,293);


(lib.s2Lefthand5 = function() {
	this.initialize(img.s2Lefthand5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,360,258);


(lib.s2Lefthand6 = function() {
	this.initialize(img.s2Lefthand6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,359,257);


(lib.s2Lefthanddown = function() {
	this.initialize(img.s2Lefthanddown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,339,315);


(lib.s2MicrowaveOven = function() {
	this.initialize(img.s2MicrowaveOven);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,348,356);


(lib.s2penchushui = function() {
	this.initialize(img.s2penchushui);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,188,96);


(lib.s2Righthand1 = function() {
	this.initialize(img.s2Righthand1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,283,366);


(lib.s2Righthand2 = function() {
	this.initialize(img.s2Righthand2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,264,317);


(lib.s2Righthand3 = function() {
	this.initialize(img.s2Righthand3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,322);


(lib.s2Righthand4 = function() {
	this.initialize(img.s2Righthand4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,218,324);


(lib.s2Righthand5 = function() {
	this.initialize(img.s2Righthand5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,171,324);


(lib.s2suduxian = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cm_line();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1200,1862);


(lib.s2penchushui_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s2penchushui();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,188,96);


(lib.s2Lefthanddown复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s2Lefthanddown();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,339,315);


(lib.s2Head4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s2Head4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,227,293);


(lib.s2ding_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s2ding();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,161,124);


(lib.s2zi2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s2zi2();
	this.instance.setTransform(-228.9,-57.7,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-228.9,-57.7,457.8,115.5);


(lib.s2zi_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s2zi();
	this.instance.setTransform(-350.3,-43,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-350.3,-43,700.7,86.1);


(lib.s2page3 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_53 = function() {
		createjs.Sound.play('s2_jianpan')
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(53).call(this.frame_53).wait(94));

	// 图层 3
	this.instance = new lib.s2zi2_1();
	this.instance.setTransform(254.9,845.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(140).to({_off:false},0).to({alpha:1},6).wait(1));

	// 图层 2
	this.instance_1 = new lib.s2zi_1();
	this.instance_1.setTransform(376.4,726.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(140).to({_off:false},0).to({alpha:1},6).wait(1));

	// s2-suduxian
	this.instance_2 = new lib.s2suduxian();
	this.instance_2.setTransform(369,568,1,1,0,0,0,600,931);
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_2.cache(-2,-2,1204,1866);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:365},0).wait(1).to({x:373},0).wait(1).to({x:371,y:560},0).wait(1).to({x:373,y:570},0).wait(1).to({x:365},0).wait(1).to({x:363,y:564},0).wait(1).to({x:373,y:568},0).wait(1).to({x:365,y:560},0).wait(1).to({x:373},0).wait(1).to({x:361},0).wait(1).to({y:564},0).wait(1).to({x:369,y:568},0).wait(1).to({x:365},0).wait(1).to({x:373},0).wait(1).to({x:371,y:560},0).wait(1).to({x:373,y:570},0).wait(1).to({x:365},0).wait(1).to({x:363,y:564},0).wait(1).to({x:373,y:568},0).wait(1).to({x:365,y:560},0).wait(1).to({x:373},0).wait(1).to({x:361},0).wait(1).to({y:564},0).wait(1).to({x:365,y:560},0).wait(1).to({x:373},0).wait(1).to({x:361},0).wait(1).to({y:564},0).wait(1).to({x:369,y:568},0).wait(1).to({x:365},0).wait(1).to({x:373},0).wait(1).to({x:371,y:560},0).wait(1).to({x:373,y:570},0).wait(1).to({x:365},0).wait(1).to({x:363,y:564},0).wait(1).to({x:373,y:568},0).wait(1).to({x:365,y:560},0).wait(1).to({x:373},0).wait(1).to({x:361},0).wait(1).to({y:564},0).wait(1).to({x:371,y:560},0).wait(1).to({x:373,y:568},0).wait(1).to({x:365,y:560},0).wait(1).to({x:373},0).wait(1).to({x:361},0).wait(1).to({y:564},0).wait(1).to({x:365,y:560},0).wait(1).to({x:373},0).wait(1).to({x:361},0).wait(1).to({y:564},0).wait(1).to({x:369,y:568},0).wait(1).to({x:361,y:564},0).wait(1).to({x:369,y:568},0).to({_off:true},1).wait(94));

	// s2-Computer
	this.instance_3 = new lib.s2Computer();
	this.instance_3.setTransform(267,903);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(147));

	// s2-Right hand 5
	this.instance_4 = new lib.s2Righthand5();
	this.instance_4.setTransform(510,615);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(52).to({_off:true},1).wait(94));

	// s2-ding
	this.instance_5 = new lib.s2ding_1();
	this.instance_5.setTransform(435.5,216,1,1,0,0,0,80.5,62);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({y:211},0).wait(1).to({x:438.5,y:220},0).wait(1).to({y:221},0).wait(1).to({y:217},0).wait(1).to({x:432.5},0).wait(1).to({x:437.5},0).wait(1).to({y:211},0).wait(1).to({y:216},0).wait(1).to({x:442.5},0).wait(1).to({x:435.5},0).wait(1).to({y:211},0).wait(1).to({x:438.5,y:220},0).wait(1).to({y:221},0).wait(1).to({y:217},0).wait(1).to({x:432.5},0).wait(1).to({x:437.5},0).wait(1).to({y:211},0).wait(1).to({y:216},0).wait(1).to({x:442.5},0).wait(1).to({x:435.5},0).wait(1).to({y:211},0).wait(1).to({x:437.5,y:217},0).wait(1).to({y:211},0).wait(1).to({y:216},0).wait(1).to({x:442.5},0).wait(1).to({x:435.5},0).wait(1).to({y:211},0).wait(1).to({x:438.5,y:220},0).wait(1).to({y:221},0).wait(1).to({y:217},0).wait(1).to({x:432.5},0).wait(1).to({x:437.5},0).wait(1).to({y:211},0).wait(1).to({y:216},0).wait(1).to({x:442.5},0).wait(1).to({x:435.5},0).wait(1).to({y:211},0).wait(1).to({y:216},0).wait(1).to({y:211},0).wait(1).to({x:438.5,y:220},0).wait(1).to({x:437.5,y:216},0).wait(1).to({x:442.5},0).wait(1).to({x:435.5},0).wait(1).to({y:211},0).wait(1).to({y:216},0).wait(1).to({y:211},0).wait(1).to({x:438.5,y:220},0).wait(1).to({x:432.5,y:217},0).wait(1).to({x:437.5},0).wait(1).to({y:211},0).wait(1).to({x:438.5,y:217},0).wait(1).to({x:432.5},0).to({_off:true},1).wait(94));

	// s2-Left hand down
	this.instance_6 = new lib.s2Lefthanddown复制();
	this.instance_6.setTransform(171.5,829.5,1,1,-44,0,0,34.5,277.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(52).to({_off:true},1).wait(94));

	// s2-jianchushui 
	this.instance_7 = new lib.s2penchushui_1();
	this.instance_7.setTransform(191.6,471.5,0.749,0.75,-12,0,0,214,59.9);
	this.instance_7.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:170.8,regY:49.6,scaleX:1,scaleY:1,x:159.2,y:469.8,alpha:1},0).wait(51).to({_off:true},1).wait(94));

	// s2-Left hand up
	this.instance_8 = new lib.s2Lefrhsndup();
	this.instance_8.setTransform(136,613);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(52).to({_off:true},1).wait(94));

	// s2-Head 3
	this.instance_9 = new lib.s2Head3();
	this.instance_9.setTransform(296,296);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({x:293},0).wait(1).to({x:296,y:300},0).wait(1).to({x:297,y:297},0).wait(1).to({x:293,y:296},0).wait(1).to({x:295},0).wait(47).to({_off:true},1).wait(94));

	// 图层 4
	this.instance_10 = new lib.s2Body3();
	this.instance_10.setTransform(127,61);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(125).to({_off:false},0).wait(22));

	// 图层 6
	this.instance_11 = new lib.s2Head6();
	this.instance_11.setTransform(318,417);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(96).to({_off:false},0).to({_off:true},2).wait(10).to({_off:false},0).to({_off:true},2).wait(37));

	// 图层 5
	this.instance_12 = new lib.s2Head5();
	this.instance_12.setTransform(318,417);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(94).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(6).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(35));

	// s2-Head 4
	this.instance_13 = new lib.s2Head4_1();
	this.instance_13.setTransform(431.5,551.5,1,1,0,0,0,113.5,146.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(53).to({_off:false},0).to({y:563.5},4).to({y:551.5},4).to({y:563.5},4).to({y:551.5},4).to({y:563.5},4).to({y:551.5},4).to({y:563.5},4).to({y:551.5},4).to({y:563.5},4).to({_off:true},5).wait(6).to({_off:false},0).wait(5).to({_off:true},1).wait(6).to({_off:false},0).wait(12).to({_off:true},1).wait(22));

	// s2-Body 2
	this.instance_14 = new lib.s2Body2();
	this.instance_14.setTransform(155,589);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(53).to({_off:false},0).wait(71).to({_off:true},1).wait(22));

	// s2-Body
	this.instance_15 = new lib.s2body();
	this.instance_15.setTransform(258,560);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(52).to({_off:true},1).wait(94));

	// s2-Microwave Oven
	this.instance_16 = new lib.s2MicrowaveOven();
	this.instance_16.setTransform(-22,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(147));

	// s2-bg
	this.instance_17 = new lib.s2bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(147));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-231,-363,1200,1862);


(lib.s2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_219 = function() {
		this.stop();
		try{app.showBtns()}catch(e){}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(219).call(this.frame_219).wait(1));

	// 图层 11
	this.instance = new lib.s2page3();
	this.instance.setTransform(438.1,563.1,1,1,0,0,0,438.1,563.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(85).to({_off:false},0).to({scaleX:1.8,scaleY:1.8},52).to({scaleX:1,scaleY:1},20).wait(63));

	// 图层 9
	this.instance_1 = new lib.s2suduxian();
	this.instance_1.setTransform(369,568,0,0,0,0,0,485.4,728.2);
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_1.cache(-2,-2,1204,1866);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(82).to({_off:false},0).to({regX:574,regY:822.6,scaleX:0.67,scaleY:0.67,x:428.1,y:631},2).to({_off:true},1).wait(135));

	// s2-Computer
	this.instance_2 = new lib.s2Computer();
	this.instance_2.setTransform(267,903);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},85).wait(135));

	// s2-Right hand 4
	this.instance_3 = new lib.s2Righthand4();
	this.instance_3.setTransform(462,615);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({_off:true},71).wait(135));

	// s2-Right hand 3
	this.instance_4 = new lib.s2Righthand3();
	this.instance_4.setTransform(438,613);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({_off:true},2).wait(206));

	// s2-Right hand 2
	this.instance_5 = new lib.s2Righthand2();
	this.instance_5.setTransform(412,613);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).to({_off:true},2).wait(208));

	// s2-ding
	this.instance_6 = new lib.s2ding_1();
	this.instance_6.setTransform(308.5,310,0.003,0.004,0,0,0,80.3,74.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(73).to({_off:false},0).to({regX:80.5,regY:62,scaleX:1,scaleY:1,x:438.5,y:220},4).wait(1).to({y:221},0).wait(1).to({y:217},0).wait(1).to({x:432.5},0).wait(1).to({x:437.5},0).wait(1).to({y:211},0).wait(1).to({y:216},0).wait(1).to({x:442.5},0).to({_off:true},1).wait(135));

	// s2-Right hand 1
	this.instance_7 = new lib.s2Righthand1();
	this.instance_7.setTransform(392,562);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},10).wait(210));

	// s2-Left hand down
	this.instance_8 = new lib.s2Lefthanddown复制();
	this.instance_8.setTransform(171.5,829.5,1,1,0,0,0,34.5,277.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(56).to({_off:false},0).wait(23).to({regX:34.6,regY:277.6,scaleX:1,scaleY:1,rotation:-21.1,x:171.7,y:829.6},5).to({_off:true},1).wait(135));

	// s2-jianchushui 
	this.instance_9 = new lib.s2penchushui_1();
	this.instance_9.setTransform(399,550.5,0.002,0.003,0,30.1,30.4,213.9,60);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(82).to({_off:false},0).wait(1).to({regX:214.1,regY:59.9,scaleX:0.25,scaleY:0.25,skewY:30.3,x:373.6,y:538,alpha:0.25},0).wait(1).to({regX:214.6,regY:60.1,scaleX:0.5,scaleY:0.5,rotation:10,skewX:0,skewY:0,x:318.4,y:504.6,alpha:0.5},0).to({_off:true},1).wait(135));

	// s2-Left hand up
	this.instance_10 = new lib.s2Lefrhsndup();
	this.instance_10.setTransform(136,613);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(56).to({_off:false},0).wait(23).to({_off:true},6).wait(135));

	// s2-Left hand 6
	this.instance_11 = new lib.s2Lefthand6();
	this.instance_11.setTransform(135,597);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(54).to({_off:false},0).to({_off:true},2).wait(164));

	// s2-Left hand 5
	this.instance_12 = new lib.s2Lefthand5();
	this.instance_12.setTransform(138,614);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(52).to({_off:false},0).to({_off:true},2).wait(166));

	// s2-Left hand 4
	this.instance_13 = new lib.s2Lefthand4();
	this.instance_13.setTransform(152,615);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50).to({_off:false},0).to({_off:true},2).wait(168));

	// s2-Left hand 3
	this.instance_14 = new lib.s2Lefthand3();
	this.instance_14.setTransform(166,615);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(48).to({_off:false},0).to({_off:true},2).wait(170));

	// s2-Left hand 2
	this.instance_15 = new lib.s2Lefthand2();
	this.instance_15.setTransform(160,613);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(46).to({_off:false},0).to({_off:true},2).wait(172));

	// s2-Left hand 1
	this.instance_16 = new lib.s2Lefthand1();
	this.instance_16.setTransform(154,613);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({_off:true},46).wait(174));

	// s2-Head 3
	this.instance_17 = new lib.s2Head3();
	this.instance_17.setTransform(295,296);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(83).to({_off:false},0).wait(1).to({x:292},0).to({_off:true},1).wait(135));

	// s2-Head 2
	this.instance_18 = new lib.s2Head2();
	this.instance_18.setTransform(333,323);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({_off:true},7).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(19).to({_off:false},0).wait(24).to({_off:true},3).wait(137));

	// s2-Head 1
	this.instance_19 = new lib.s2Head1();
	this.instance_19.setTransform(333,323);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(7).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},19).wait(17).to({_off:false},0).wait(7).to({_off:true},3).wait(137));

	// s2-Body
	this.instance_20 = new lib.s2body();
	this.instance_20.setTransform(258,560);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({_off:true},85).wait(135));

	// s2-Microwave Oven
	this.instance_21 = new lib.s2MicrowaveOven();
	this.instance_21.setTransform(-22,200);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(73).to({_off:false},0).to({_off:true},12).wait(135));

	// s2-bg
	this.instance_22 = new lib.s2bg();
	this.instance_22.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({_off:true},85).wait(135));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,0,749,1220);


// stage content:



(lib.qj_s2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s2();
	this.instance.setTransform(226,652.5,1,1,0,0,0,226,652.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(376,610,749,1220);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;