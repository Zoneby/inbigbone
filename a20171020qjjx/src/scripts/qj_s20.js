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
		{src:"images/cv/s20_022.png", id:"s20_022"},
		{src:"images/cv/s20_023.png", id:"s20_023"},
		{src:"images/cv/s20_024.png", id:"s20_024"},
		{src:"images/cv/s20_025.png", id:"s20_025"},
		{src:"images/cv/s20_026.png", id:"s20_026"},
		{src:"images/cv/s20_027.png", id:"s20_027"},
		{src:"images/cv/s20_028.png", id:"s20_028"},
		{src:"images/cv/s20_029.png", id:"s20_029"},
		{src:"images/cv/s20_030.png", id:"s20_030"},
		{src:"images/cv/s20_031.png", id:"s20_031"},
		{src:"images/cv/s20_032.png", id:"s20_032"},
		{src:"images/cv/s20_033.png", id:"s20_033"},
		{src:"images/cv/s20_034.png", id:"s20_034"},
		{src:"images/cv/s20_0351.png", id:"s20_0351"},
		{src:"images/cv/s20_036.png", id:"s20_036"},
		{src:"images/cv/s20_037.png", id:"s20_037"},
		{src:"images/cv/s20_038.png", id:"s20_038"},
		{src:"images/cv/s20_039.png", id:"s20_039"},
		{src:"images/cv/s20_040.png", id:"s20_040"},
		{src:"images/cv/s20_041.png", id:"s20_041"},
		{src:"images/cv/s20_042.png", id:"s20_042"},
		{src:"images/cv/s20_043.png", id:"s20_043"},
		{src:"images/cv/s20_044.png", id:"s20_044"},
		{src:"images/cv/s20_045.png", id:"s20_045"},
		{src:"images/cv/s20_046.png", id:"s20_046"},
		{src:"images/cv/s20_047.png", id:"s20_047"},
		{src:"images/cv/s20_048.png", id:"s20_048"},
		{src:"images/cv/s20_049.png", id:"s20_049"},
		{src:"images/cv/s20_050.png", id:"s20_050"},
		{src:"images/cv/s20_051.png", id:"s20_051"},
		{src:"images/cv/s20_052.png", id:"s20_052"},
		{src:"images/cv/s20_053.png", id:"s20_053"},
		{src:"images/cv/s20_054.png", id:"s20_054"},
		{src:"images/cv/s20_055.png", id:"s20_055"},
		{src:"images/cv/s20_056.png", id:"s20_056"},
		{src:"images/cv/s20_057.png", id:"s20_057"},
		{src:"images/cv/s20_058.png", id:"s20_058"},
		{src:"images/cv/s20_059.png", id:"s20_059"},
		{src:"images/cv/s20_060.png", id:"s20_060"},
		{src:"images/cv/s20_061.png", id:"s20_061"},
		{src:"images/cv/s20_062.png", id:"s20_062"},
		{src:"images/cv/s20_063.png", id:"s20_063"},
		{src:"images/cv/s20_064.png", id:"s20_064"},
		{src:"images/cv/s20_065.png", id:"s20_065"},
		{src:"images/cv/s20_066.png", id:"s20_066"},
		{src:"images/cv/s20_067.png", id:"s20_067"},
		{src:"images/cv/s20_068.png", id:"s20_068"},
		{src:"images/cv/s20_069.png", id:"s20_069"},
		{src:"images/cv/s20_070.png", id:"s20_070"},
		{src:"images/cv/s20_073.png", id:"s20_073"},
		{src:"images/cv/s20_074.png", id:"s20_074"},
		{src:"images/cv/s20_075.png", id:"s20_075"},
		{src:"images/cv/s20_076.png", id:"s20_076"},
		{src:"images/cv/s20_077.png", id:"s20_077"},
		{src:"images/cv/s20_078.png", id:"s20_078"},
		{src:"images/cv/s20_079.png", id:"s20_079"},
		{src:"images/cv/s20_080.png", id:"s20_080"},
		{src:"images/cv/s20_081.png", id:"s20_081"},
		{src:"images/cv/s20_082.png", id:"s20_082"},
		{src:"images/cv/s20_083.png", id:"s20_083"},
		{src:"images/cv/s20_084.png", id:"s20_084"},
		{src:"images/cv/s20_085.png", id:"s20_085"},
		{src:"images/cv/s20_086.png", id:"s20_086"},
		{src:"images/cv/s20_087.png", id:"s20_087"},
		{src:"images/cv/s20_088.png", id:"s20_088"},
		{src:"images/cv/s20_089.png", id:"s20_089"},
		{src:"images/cv/s20_090.png", id:"s20_090"},
		{src:"images/cv/s20_091.png", id:"s20_091"},
		{src:"images/cv/s20_092.png", id:"s20_092"},
		{src:"images/cv/s20_093.png", id:"s20_093"},
		{src:"images/cv/s20_094.png", id:"s20_094"},
		{src:"images/cv/s20_095.png", id:"s20_095"},
		{src:"images/cv/s20_096.png", id:"s20_096"},
		{src:"images/cv/s20_097.png", id:"s20_097"},
		{src:"images/cv/s20_098.png", id:"s20_098"},
		{src:"images/cv/s20_099.png", id:"s20_099"},
		{src:"images/cv/s20_100.png", id:"s20_100"},
		{src:"images/cv/s20_101.png", id:"s20_101"},
		{src:"images/cv/s20_102.png", id:"s20_102"},
		{src:"images/cv/s20_104.png", id:"s20_104"},
		{src:"images/cv/s20_105.png", id:"s20_105"},
		{src:"images/cv/s20_106.png", id:"s20_106"},
		{src:"images/cv/s20_107.png", id:"s20_107"},
		{src:"images/cv/s20_108.png", id:"s20_108"},
		{src:"images/cv/s20_109.png", id:"s20_109"},
		{src:"images/cv/s20_110.png", id:"s20_110"},
		{src:"images/cv/s20_111.png", id:"s20_111"}
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



(lib.s20_022 = function() {
	this.initialize(img.s20_022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,352);


(lib.s20_023 = function() {
	this.initialize(img.s20_023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,256);


(lib.s20_024 = function() {
	this.initialize(img.s20_024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,236,212);


(lib.s20_025 = function() {
	this.initialize(img.s20_025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1026,683);


(lib.s20_026 = function() {
	this.initialize(img.s20_026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,496,312);


(lib.s20_027 = function() {
	this.initialize(img.s20_027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,354,153);


(lib.s20_028 = function() {
	this.initialize(img.s20_028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,720,824);


(lib.s20_029 = function() {
	this.initialize(img.s20_029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,516,581);


(lib.s20_030 = function() {
	this.initialize(img.s20_030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,200);


(lib.s20_031 = function() {
	this.initialize(img.s20_031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,732,388);


(lib.s20_032 = function() {
	this.initialize(img.s20_032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,408,260);


(lib.s20_033 = function() {
	this.initialize(img.s20_033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,588,400);


(lib.s20_034 = function() {
	this.initialize(img.s20_034);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,180);


(lib.s20_0351 = function() {
	this.initialize(img.s20_0351);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s20_036 = function() {
	this.initialize(img.s20_036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,516,396);


(lib.s20_037 = function() {
	this.initialize(img.s20_037);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,556);


(lib.s20_038 = function() {
	this.initialize(img.s20_038);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,232);


(lib.s20_039 = function() {
	this.initialize(img.s20_039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,174);


(lib.s20_040 = function() {
	this.initialize(img.s20_040);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,262);


(lib.s20_041 = function() {
	this.initialize(img.s20_041);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,184);


(lib.s20_042 = function() {
	this.initialize(img.s20_042);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,262);


(lib.s20_043 = function() {
	this.initialize(img.s20_043);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,87);


(lib.s20_044 = function() {
	this.initialize(img.s20_044);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,116);


(lib.s20_045 = function() {
	this.initialize(img.s20_045);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,118);


(lib.s20_046 = function() {
	this.initialize(img.s20_046);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,81);


(lib.s20_047 = function() {
	this.initialize(img.s20_047);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,276,336);


(lib.s20_048 = function() {
	this.initialize(img.s20_048);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,108);


(lib.s20_049 = function() {
	this.initialize(img.s20_049);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,174);


(lib.s20_050 = function() {
	this.initialize(img.s20_050);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,756,620);


(lib.s20_051 = function() {
	this.initialize(img.s20_051);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,724,420);


(lib.s20_052 = function() {
	this.initialize(img.s20_052);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,744,404);


(lib.s20_053 = function() {
	this.initialize(img.s20_053);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,716,421);


(lib.s20_054 = function() {
	this.initialize(img.s20_054);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,74);


(lib.s20_055 = function() {
	this.initialize(img.s20_055);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,106);


(lib.s20_056 = function() {
	this.initialize(img.s20_056);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,134);


(lib.s20_057 = function() {
	this.initialize(img.s20_057);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,181);


(lib.s20_058 = function() {
	this.initialize(img.s20_058);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,88);


(lib.s20_059 = function() {
	this.initialize(img.s20_059);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,940,632);


(lib.s20_060 = function() {
	this.initialize(img.s20_060);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,660,415);


(lib.s20_061 = function() {
	this.initialize(img.s20_061);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,508,192);


(lib.s20_062 = function() {
	this.initialize(img.s20_062);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s20_063 = function() {
	this.initialize(img.s20_063);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,215);


(lib.s20_064 = function() {
	this.initialize(img.s20_064);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,176);


(lib.s20_065 = function() {
	this.initialize(img.s20_065);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,188);


(lib.s20_066 = function() {
	this.initialize(img.s20_066);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,372,300);


(lib.s20_067 = function() {
	this.initialize(img.s20_067);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,248);


(lib.s20_068 = function() {
	this.initialize(img.s20_068);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,252,196);


(lib.s20_069 = function() {
	this.initialize(img.s20_069);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,192,216);


(lib.s20_070 = function() {
	this.initialize(img.s20_070);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,288,256);


(lib.s20_073 = function() {
	this.initialize(img.s20_073);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,546,448);


(lib.s20_074 = function() {
	this.initialize(img.s20_074);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,636,453);


(lib.s20_075 = function() {
	this.initialize(img.s20_075);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,228);


(lib.s20_076 = function() {
	this.initialize(img.s20_076);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,111);


(lib.s20_077 = function() {
	this.initialize(img.s20_077);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,99);


(lib.s20_078 = function() {
	this.initialize(img.s20_078);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,88);


(lib.s20_079 = function() {
	this.initialize(img.s20_079);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,72);


(lib.s20_080 = function() {
	this.initialize(img.s20_080);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,53);


(lib.s20_081 = function() {
	this.initialize(img.s20_081);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,105);


(lib.s20_082 = function() {
	this.initialize(img.s20_082);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,771,306);


(lib.s20_083 = function() {
	this.initialize(img.s20_083);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,172);


(lib.s20_084 = function() {
	this.initialize(img.s20_084);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,459,252);


(lib.s20_085 = function() {
	this.initialize(img.s20_085);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,352);


(lib.s20_086 = function() {
	this.initialize(img.s20_086);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,136);


(lib.s20_087 = function() {
	this.initialize(img.s20_087);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,737,384);


(lib.s20_088 = function() {
	this.initialize(img.s20_088);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,288,307);


(lib.s20_089 = function() {
	this.initialize(img.s20_089);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,249,358);


(lib.s20_090 = function() {
	this.initialize(img.s20_090);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,408,460);


(lib.s20_091 = function() {
	this.initialize(img.s20_091);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,390,402);


(lib.s20_092 = function() {
	this.initialize(img.s20_092);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,324,357);


(lib.s20_093 = function() {
	this.initialize(img.s20_093);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,332,348);


(lib.s20_094 = function() {
	this.initialize(img.s20_094);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,279,351);


(lib.s20_095 = function() {
	this.initialize(img.s20_095);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,270,333);


(lib.s20_096 = function() {
	this.initialize(img.s20_096);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,538,336);


(lib.s20_097 = function() {
	this.initialize(img.s20_097);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,632,478);


(lib.s20_098 = function() {
	this.initialize(img.s20_098);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,178);


(lib.s20_099 = function() {
	this.initialize(img.s20_099);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,61,73);


(lib.s20_100 = function() {
	this.initialize(img.s20_100);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,51);


(lib.s20_101 = function() {
	this.initialize(img.s20_101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,87);


(lib.s20_102 = function() {
	this.initialize(img.s20_102);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,59);


(lib.s20_104 = function() {
	this.initialize(img.s20_104);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,873,908);


(lib.s20_105 = function() {
	this.initialize(img.s20_105);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,406,183);


(lib.s20_106 = function() {
	this.initialize(img.s20_106);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,702,813);


(lib.s20_107 = function() {
	this.initialize(img.s20_107);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,393,673);


(lib.s20_108 = function() {
	this.initialize(img.s20_108);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,826,518);


(lib.s20_109 = function() {
	this.initialize(img.s20_109);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,789,870);


(lib.s20_110 = function() {
	this.initialize(img.s20_110);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,798,898);


(lib.s20_111 = function() {
	this.initialize(img.s20_111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,771,894);


(lib.补间4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_086();
	this.instance.setTransform(-54,-68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-68,108,136);


(lib.补间3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_086();
	this.instance.setTransform(-54,-68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-68,108,136);


(lib.s20_159 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_105();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,406,183);


(lib.s20_157 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_063();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,172,215);


(lib.s20_156 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_036();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,516,396);


(lib.s20_155 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_095();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,270,333);


(lib.s20_154 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_094();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,279,351);


(lib.s20_153 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_062();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s20_152 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_062();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s20_151 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_062();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s20_150 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_062();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.s20_149 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_034();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180,180);


(lib.s20_148 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_061();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,508,192);


(lib.s20_147 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_033();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,588,400);


(lib.s20_146 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_032();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,408,260);


(lib.s20_145 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_104();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,873,908);


(lib.s20_144 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_060();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,660,415);


(lib.s20_143 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_059();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,940,632);


(lib.s20_141 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_058();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58,88);


(lib.s20_140 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_109();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,789,870);


(lib.s20_139 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_054();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48,74);


(lib.s20_137 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_093();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,332,348);


(lib.s20_136 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_053();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,716,421);


(lib.s20_135 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_052();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,744,404);


(lib.s20_134 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_051();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,724,420);


(lib.s20_133 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_108();
	this.instance.setTransform(0,29.9,0.69,0.69,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,587.9,386.8);


(lib.s20_132 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_099();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61,73);


(lib.s20_131 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_098();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,138,178);


(lib.s20_130 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_092();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,324,357);


(lib.s20_129 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_091();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,390,402);


(lib.s20_128 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_090();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,408,460);


(lib.s20_127 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_089();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,249,358);


(lib.s20_126 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_088();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,288,307);


(lib.s20_125 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_030();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,268,200);


(lib.s20_124 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_029();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,516,581);


(lib.s20_123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_107();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,393,673);


(lib.s20_122 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_050();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,756,620);


(lib.s20_121 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_028();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,720,824);


(lib.s20_120 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_087();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,737,384);


(lib.s20_119 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_049();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186,174);


(lib.s20_118 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_048();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88,108);


(lib.s20_117 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_085();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,272,352);


(lib.s20_116 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_084();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,459,252);


(lib.s20_115 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_083();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,177,172);


(lib.s20_114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_047();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,276,336);


(lib.s20_113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_027();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,354,153);


(lib.s20_021 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_097();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,632,478);


(lib.s20_020 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_096();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,538,336);


(lib.s20_019 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_082();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,771,306);


(lib.s20_018 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_081();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,105);


(lib.s20_017 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_042();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,122,262);


(lib.s20_016 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_041();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,196,184);


(lib.s20_014 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_026();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,496,312);


(lib.s20_013 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_025();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1026,683);


(lib.s20_012 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_075();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,228);


(lib.s20_011 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_024();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,236,212);


(lib.s20_010 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_023();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,272,256);


(lib.s20_009 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_040();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116,262);


(lib.s20_008 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_073();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,546,448);


(lib.s20_007 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_074();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,636,453);


(lib.s20_005 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_039();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,196,174);


(lib.s20_004 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_038();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,196,232);


(lib.s20_003 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_037();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000,556);


(lib.s20_002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_022();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,352);


(lib.s20_001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20_106();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,702,813);


(lib.s20 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_331 = function() {
		this.stop();
		try{app.showBtns()}catch(e){}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(331).call(this.frame_331).wait(1));

	// 文案5
	this.instance = new lib.s20_133();
	this.instance.setTransform(364.1,2044.9,1.1,1.1,0,0,0,293.9,193.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(287).to({_off:false},0).to({x:388.1,y:831.3},4).wait(41));

	// 手5
	this.instance_1 = new lib.s20_123();
	this.instance_1.setTransform(209.6,1833.6,1,1,0,0,0,196.5,336.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(284).to({_off:false},0).to({y:534.4},4).wait(8).to({y:601.6},4).wait(32));

	// 人5
	this.instance_2 = new lib.s20_001();
	this.instance_2.setTransform(390.4,1747.2,1,1,0,0,0,351,406.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(284).to({_off:false},0).to({y:525.6},4).wait(44));

	// 火5
	this.instance_3 = new lib.s20_140();
	this.instance_3.setTransform(368.1,752,0.63,0.63,0,0,0,394.6,732.6);
	this.instance_3._off = true;

	this.instance_4 = new lib.s20_111();
	this.instance_4.setTransform(-21,23.4);
	this.instance_4._off = true;

	this.instance_5 = new lib.s20_110();
	this.instance_5.setTransform(-40.6,22.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(300).to({_off:false},0).to({regX:394.5,scaleX:1,scaleY:1,x:368},2).to({_off:true,regX:0,regY:0,x:-21,y:23.4},1).wait(4).to({_off:false,regX:394.5,regY:732.6,x:368,y:752,mode:"independent"},0).to({_off:true,regX:0,regY:0,x:-40.6,y:22.4},1).wait(2).to({_off:false,regX:394.5,regY:732.6,x:368,y:752,mode:"independent"},0).to({_off:true,regX:0,regY:0,x:-40.6,y:22.4},1).wait(2).to({_off:false,regX:394.5,regY:732.6,x:368,y:752,mode:"independent"},0).to({_off:true,regX:0,regY:0,x:-40.6,y:22.4},1).wait(1).to({_off:false,regX:394.5,regY:732.6,x:368,y:752,mode:"independent"},0).wait(1).to({_off:true,regX:0,regY:0,x:-40.6,y:22.4},1).wait(2).to({_off:false,regX:394.5,regY:732.6,x:368,y:752,mode:"independent"},0).to({_off:true,regX:0,regY:0,x:-40.6,y:22.4},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(302).to({_off:false},1).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(304).to({_off:false},0).wait(1).to({_off:true},1).wait(1).to({_off:false},1).to({_off:true},1).wait(1).to({_off:false},1).to({_off:true},1).wait(1).to({_off:false},1).to({_off:true},1).wait(1).to({_off:false},1).to({_off:true},1).wait(1).to({_off:false},1).wait(12));

	// 背景5
	this.instance_6 = new lib.s20_153();
	this.instance_6.setTransform(375,1851.6,1,1,0,0,0,375,610);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(284).to({_off:false},0).to({y:610},4).wait(44));

	// 线41遮罩 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_253 = new cjs.Graphics().p("Egw2AlAMAAAhJ+MBhuAAAMAAABJ+g");
	var mask_graphics_295 = new cjs.Graphics().p("Egw2AlAMAAAhJ+MBhuAAAMAAABJ+g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(253).to({graphics:mask_graphics_253,x:365.6,y:785.6}).wait(42).to({graphics:mask_graphics_295,x:365.6,y:785.6}).wait(37));

	// 线4
	this.instance_7 = new lib.s20_145();
	this.instance_7.setTransform(270.4,753.5,0.3,0.3,0,0,0,329.2,358);
	this.instance_7._off = true;

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(252).to({_off:false},0).to({regX:329.3,scaleX:1,scaleY:1},3).wait(40).to({_off:true},1).wait(36));

	// 手41
	this.instance_8 = new lib.s20_131();
	this.instance_8.setTransform(366.4,851.2,1,1,0,0,0,102.6,146.6);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(248).to({_off:false},0).to({alpha:1},5).to({y:845.6},8).to({y:851.2},8).to({y:845.6},8).to({y:851.2},18).to({_off:true},1).wait(36));

	// 图42
	this.instance_9 = new lib.s20_021();
	this.instance_9.setTransform(366.4,784.9,1,1,0,0,0,316,239);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(248).to({_off:false},0).to({alpha:1},5).wait(42).to({_off:true},1).wait(36));

	// 抖4
	this.instance_10 = new lib.s20_102();
	this.instance_10.setTransform(142,293.7);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(236).to({_off:false},0).wait(1).to({x:143.6,y:292.9},0).wait(1).to({x:142,y:292.1},0).wait(1).to({x:142.8,y:292.9},0).wait(1).to({x:141.2,y:292.1},0).wait(1).to({x:142.8,y:292.9},0).wait(1).to({x:142,y:293.7},0).wait(1).to({x:143.6,y:292.9},0).wait(1).to({x:142,y:292.1},0).wait(1).to({x:142.8,y:292.9},0).wait(1).to({x:141.2,y:292.1},0).wait(1).to({x:142.8,y:292.9},0).wait(1).to({x:142,y:293.7},0).wait(1).to({x:143.6,y:292.9},0).wait(1).to({x:142,y:292.1},0).wait(1).to({x:142.8,y:292.9},0).wait(1).to({x:141.2,y:292.1},0).wait(1).to({x:142.8,y:292.9},0).to({_off:true},1).wait(78));

	// 抖3
	this.instance_11 = new lib.s20_101();
	this.instance_11.setTransform(541,169);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(236).to({_off:false},0).wait(1).to({x:542.6,y:167.4},0).wait(1).to({x:541,y:166.6},0).wait(1).to({x:541.8,y:167.4},0).wait(1).to({x:540.2},0).wait(1).to({x:541},0).wait(1).to({y:169},0).wait(1).to({x:542.6,y:167.4},0).wait(1).to({x:541,y:166.6},0).wait(1).to({x:541.8,y:167.4},0).wait(1).to({x:540.2},0).wait(1).to({x:541},0).wait(1).to({y:169},0).wait(1).to({x:542.6,y:167.4},0).wait(1).to({x:541,y:166.6},0).wait(1).to({x:541.8,y:167.4},0).wait(1).to({x:540.2},0).wait(1).to({x:541},0).to({_off:true},1).wait(78));

	// 抖2
	this.instance_12 = new lib.s20_100();
	this.instance_12.setTransform(551.5,327.3);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(236).to({_off:false},0).wait(1).to({x:553.9},0).wait(1).to({x:553.1},0).wait(1).to({x:554.7,y:326.5},0).wait(1).to({x:553.1,y:325.7},0).wait(1).to({x:553.9},0).wait(1).to({x:551.5,y:327.3},0).wait(1).to({x:553.9},0).wait(1).to({x:553.1},0).wait(1).to({x:554.7,y:326.5},0).wait(1).to({x:553.1,y:325.7},0).wait(1).to({x:553.9},0).wait(1).to({x:551.5,y:327.3},0).wait(1).to({x:553.9},0).wait(1).to({x:553.1},0).wait(1).to({x:554.7,y:326.5},0).wait(1).to({x:553.1,y:325.7},0).wait(1).to({x:553.9},0).to({_off:true},1).wait(78));

	// 抖1
	this.instance_13 = new lib.s20_132();
	this.instance_13.setTransform(156.8,195.2,1,1,0,0,0,30.5,36.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(236).to({_off:false},0).wait(1).to({x:158.4},0).wait(1).to({y:193.6},0).wait(1).to({x:156.8,y:195.2},0).wait(1).to({y:198.4},0).wait(1).to({y:195.2},0).wait(1).to({x:158.4},0).wait(1).to({y:193.6},0).wait(1).to({x:156.8,y:195.2},0).wait(1).to({y:198.4},0).wait(1).to({y:195.2},0).wait(1).to({x:158.4},0).wait(1).to({y:193.6},0).wait(1).to({x:156.8,y:195.2},0).wait(1).to({y:198.4},0).wait(1).to({y:195.2},0).wait(1).to({x:158.4},0).wait(1).to({y:193.6},0).to({_off:true},1).wait(78));

	// 闹钟4
	this.instance_14 = new lib.s20_159();
	this.instance_14.setTransform(352,304,1,1,0,0,0,203,91.5);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(224).to({_off:false},0).to({alpha:1},12).wait(1).to({x:356.8},0).wait(1).to({x:353.6},0).wait(1).to({x:355.2},0).wait(1).to({x:352},0).wait(1).to({x:353.6},0).wait(1).to({x:352},0).wait(1).to({x:356.8},0).wait(1).to({x:353.6},0).wait(1).to({x:355.2},0).wait(1).to({x:352},0).wait(1).to({x:353.6},0).wait(1).to({x:352},0).wait(1).to({x:356.8},0).wait(1).to({x:353.6},0).wait(1).to({x:355.2},0).wait(1).to({x:352},0).wait(1).to({x:353.6},0).wait(47).to({x:352},0).to({_off:true},1).wait(31));

	// 图41
	this.instance_15 = new lib.s20_020();
	this.instance_15.setTransform(352,313.6,1,1,0,0,0,269,168);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(224).to({_off:false},0).to({alpha:1},12).wait(64).to({_off:true},1).wait(31));

	// 背景4
	this.instance_16 = new lib.s20_152();
	this.instance_16.setTransform(375,610,1,1,0,0,0,375,610);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(224).to({_off:false},0).to({alpha:1},12).wait(64).to({_off:true},1).wait(31));

	// 字34
	this.instance_17 = new lib.s20_117();
	this.instance_17.setTransform(652.2,800.7,0.2,0.2,0,0,0,136,176);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(180).to({_off:false},0).to({scaleX:1,scaleY:1},1).wait(45).to({_off:true},1).wait(105));

	// 手35
	this.instance_18 = new lib.s20_130();
	this.instance_18.setTransform(780.8,1280,1,1,0,0,0,62.8,303.3);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(174).to({_off:false},0).to({x:201.6},6).wait(40).to({regY:303.4,rotation:-4},2).to({regX:62.9,regY:303.2,rotation:5,x:201.7},2).to({regX:62.8,regY:303.4,rotation:-4,x:201.6},2).to({regY:303.3,rotation:0},2).wait(18).to({_off:true},1).wait(85));

	// 手34
	this.instance_19 = new lib.s20_129();
	this.instance_19.setTransform(1392,1151.8,1,1,-31,0,0,311.8,333.8);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(174).to({_off:false},0).to({regX:311.9,rotation:-38,x:790.5,y:1151.9},6).wait(23).to({regX:311.8,rotation:7,x:790.4,y:1151.8},16).to({rotation:-4},1).wait(26).to({_off:true},1).wait(85));

	// 吐血
	this.instance_20 = new lib.s20_076();
	this.instance_20.setTransform(349.4,983.1);

	this.instance_21 = new lib.s20_077();
	this.instance_21.setTransform(374.8,985.3);

	this.instance_22 = new lib.s20_080();
	this.instance_22.setTransform(406.7,991.9);

	this.instance_23 = new lib.s20_078();
	this.instance_23.setTransform(426,996.4);

	this.instance_24 = new lib.s20_079();
	this.instance_24.setTransform(444.6,997.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_20}]},220).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[]},1).to({state:[]},22).wait(85));

	// 人34
	this.instance_25 = new lib.s20_007();
	this.instance_25.setTransform(1072.8,1056.7,1,1,0,0,0,318,226.5);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(174).to({_off:false},0).to({x:536.8},6).wait(66).to({_off:true},1).wait(85));

	// 脸31
	this.instance_26 = new lib.s20_154();
	this.instance_26.setTransform(495.8,1022,1,1,0,0,0,179,302.6);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(220).to({_off:false},0).to({regX:179.1,rotation:-3,x:502.2},2).wait(24).to({_off:true},1).wait(85));

	// 脸32
	this.instance_27 = new lib.s20_155();
	this.instance_27.setTransform(993.3,894.4,1,1,0,0,0,135,166.5);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(174).to({_off:false},0).to({x:457.3},6).wait(39).to({_off:true},1).wait(112));

	// 框32遮罩 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_202 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_203 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_204 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_205 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_206 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_207 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_208 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_209 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_210 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_211 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_212 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_213 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_214 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_215 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_216 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_217 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_218 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_219 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_220 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_221 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_222 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_223 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_224 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_225 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_226 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_227 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_228 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_229 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_230 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_231 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_232 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_233 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_234 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_235 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_236 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_237 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_238 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_239 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_240 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_241 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_242 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_243 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_244 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_245 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_246 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_247 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_248 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_249 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_250 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");
	var mask_1_graphics_251 = new cjs.Graphics().p("A03W/MAAAgt9MApvAAAMAAAAt9g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(202).to({graphics:mask_1_graphics_202,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_203,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_204,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_205,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_206,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_207,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_208,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_209,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_210,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_211,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_212,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_213,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_214,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_215,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_216,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_217,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_218,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_219,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_220,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_221,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_222,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_223,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_224,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_225,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_226,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_227,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_228,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_229,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_230,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_231,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_232,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_233,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_234,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_235,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_236,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_237,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_238,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_239,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_240,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_241,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_242,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_243,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_244,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_245,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_246,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_247,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_248,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_249,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_250,x:175.2,y:774.4}).wait(1).to({graphics:mask_1_graphics_251,x:175.2,y:774.4}).wait(81));

	// 手33
	this.instance_28 = new lib.s20_128();
	this.instance_28.setTransform(-9.5,907.8,1,1,8,0,0,114.9,356.9);
	this.instance_28.alpha = 0;
	this.instance_28._off = true;

	this.instance_28.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(202).to({_off:false},0).to({alpha:1},3).to({regX:114.8,rotation:-12,x:-9.6},14).to({rotation:28,x:12.8,y:893.3},1).wait(31).to({_off:true},1).wait(80));

	// 框32
	this.instance_29 = new lib.s20_137();
	this.instance_29.setTransform(170.8,776.9,1,1,0,0,0,166,174);
	this.instance_29.alpha = 0;
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(202).to({_off:false},0).to({alpha:1},3).wait(46).to({_off:true},1).wait(80));

	// 光31   复制 3
	this.instance_30 = new lib.s20_012();
	this.instance_30.setTransform(586.1,573.2,0.2,0.2,-54,0,0,111.7,112);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(199).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},4).to({scaleX:0.2,scaleY:0.2},7).to({_off:true},1).wait(121));

	// 光31   复制 3
	this.instance_31 = new lib.s20_012();
	this.instance_31.setTransform(546.1,535.6,0.2,0.2,-16,0,0,111.8,111.9);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(187).to({_off:false},0).to({regX:111.7,regY:112,scaleX:0.8,scaleY:0.8},4).to({regX:111.8,regY:111.9,scaleX:0.2,scaleY:0.2},7).to({_off:true},1).wait(133));

	// 光31  复制 2
	this.instance_32 = new lib.s20_012();
	this.instance_32.setTransform(534.1,505.2,0.2,0.2,10,0,0,111.7,112.3);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(180).to({_off:false},0).to({regY:112,scaleX:0.8,scaleY:0.8,x:534.2},4).to({regY:112.3,scaleX:0.2,scaleY:0.2,x:534.1,alpha:0},7).to({_off:true},1).wait(140));

	// 光31  复制 2
	this.instance_33 = new lib.s20_012();
	this.instance_33.setTransform(608.5,520.4,0.2,0.2,0,0,0,111.8,112);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(193).to({_off:false},0).to({scaleX:1.2,scaleY:1.2},4).to({scaleX:0.2,scaleY:0.2,alpha:0},7).to({_off:true},4).wait(124));

	// 光31  复制 2
	this.instance_34 = new lib.s20_012();
	this.instance_34.setTransform(586.1,573.2,0.2,0.2,-54,0,0,111.7,112);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(166).to({_off:false},0).to({scaleX:0.8,scaleY:0.8},4).to({scaleX:0.2,scaleY:0.2},7).to({_off:true},1).wait(154));

	// 光31  复制 2
	this.instance_35 = new lib.s20_012();
	this.instance_35.setTransform(546.1,535.6,0.2,0.2,-16,0,0,111.8,111.9);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(174).to({_off:false},0).to({regX:111.7,regY:112,scaleX:0.8,scaleY:0.8},4).to({regX:111.8,regY:111.9,scaleX:0.2,scaleY:0.2},7).to({_off:true},1).wait(146));

	// 光31 复制
	this.instance_36 = new lib.s20_012();
	this.instance_36.setTransform(534.1,505.2,0.2,0.2,10,0,0,111.7,112.3);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(158).to({_off:false},0).to({regY:112,scaleX:0.8,scaleY:0.8,x:534.2},4).to({regY:112.3,scaleX:0.2,scaleY:0.2,x:534.1,alpha:0},7).to({_off:true},1).wait(162));

	// 光31
	this.instance_37 = new lib.s20_012();
	this.instance_37.setTransform(608.5,520.4,0.2,0.2,0,0,0,111.8,112);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(154).to({_off:false},0).to({scaleX:1.2,scaleY:1.2},4).to({scaleX:0.2,scaleY:0.2,alpha:0},7).to({_off:true},4).wait(163));

	// 宝石3
	this.instance_38 = new lib.补间3("synched",0);
	this.instance_38.setTransform(1362.2,538.1);
	this.instance_38._off = true;

	this.instance_39 = new lib.补间4("synched",0);
	this.instance_39.setTransform(570.2,534.9);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(151).to({_off:false},0).to({_off:true,x:570.2,y:534.9},3).wait(178));
	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(151).to({_off:false},3).to({startPosition:0},70).to({_off:true},1).wait(107));

	// 手32遮罩  复制 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_151 = new cjs.Graphics().p("Egz+AaIMAAAg0PMBn9AAAMAAAA0Pg");
	var mask_2_graphics_152 = new cjs.Graphics().p("Egz/AaHMAAAg0NMBn/AAAMAAAA0Ng");
	var mask_2_graphics_153 = new cjs.Graphics().p("Egz+AaIMAAAg0PMBn9AAAMAAAA0Pg");
	var mask_2_graphics_154 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_155 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_156 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_157 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_158 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_159 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_160 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_161 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_162 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_163 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_164 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_165 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_166 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_167 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_168 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_169 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_170 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_171 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_172 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_173 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_174 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_175 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_176 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_177 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_178 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_179 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_180 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_181 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_182 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_183 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_184 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_185 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_186 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_187 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_188 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_189 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_190 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_191 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_192 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_193 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_194 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_195 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_196 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_197 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_198 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_199 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_200 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_201 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_202 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_203 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_204 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_205 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_206 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_207 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_208 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_209 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_210 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_211 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_212 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_213 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_214 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_215 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_216 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_217 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_218 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_219 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_220 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_221 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_222 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_223 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_2_graphics_224 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(151).to({graphics:mask_2_graphics_151,x:1093,y:527.2}).wait(1).to({graphics:mask_2_graphics_152,x:855.1,y:527.7}).wait(1).to({graphics:mask_2_graphics_153,x:617.1,y:528.3}).wait(1).to({graphics:mask_2_graphics_154,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_155,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_156,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_157,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_158,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_159,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_160,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_161,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_162,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_163,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_164,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_165,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_166,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_167,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_168,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_169,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_170,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_171,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_172,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_173,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_174,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_175,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_176,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_177,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_178,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_179,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_180,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_181,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_182,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_183,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_184,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_185,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_186,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_187,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_188,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_189,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_190,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_191,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_192,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_193,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_194,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_195,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_196,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_197,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_198,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_199,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_200,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_201,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_202,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_203,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_204,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_205,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_206,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_207,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_208,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_209,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_210,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_211,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_212,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_213,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_214,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_215,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_216,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_217,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_218,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_219,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_220,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_221,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_222,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_223,x:379.2,y:528.8}).wait(1).to({graphics:mask_2_graphics_224,x:379.2,y:528.8}).wait(108));

	// 手32
	this.instance_40 = new lib.s20_127();
	this.instance_40.setTransform(939.5,745.6,1,1,0,0,0,95.7,292.6);
	this.instance_40._off = true;

	this.instance_40.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(151).to({_off:false},0).to({x:181.1},3).to({regY:292.5,rotation:5,x:167.2},3).to({rotation:-1,x:153.3},3).to({regY:292.6,rotation:4,x:139.2,y:745.7},4).to({regX:95.8,rotation:-2,x:125.3},3).to({rotation:3,x:114.1,y:745.6},4).to({regX:95.7,rotation:0,x:104.3},4).wait(49).to({_off:true},1).wait(107));

	// 手31遮罩 复制 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_151 = new cjs.Graphics().p("Egz+AaIMAAAg0PMBn9AAAMAAAA0Pg");
	var mask_3_graphics_152 = new cjs.Graphics().p("Egz/AaHMAAAg0NMBn/AAAMAAAA0Ng");
	var mask_3_graphics_153 = new cjs.Graphics().p("Egz+AaIMAAAg0PMBn9AAAMAAAA0Pg");
	var mask_3_graphics_154 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_155 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_156 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_157 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_158 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_159 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_160 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_161 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_162 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_163 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_164 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_165 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_166 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_167 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_168 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_169 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_170 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_171 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_172 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_173 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_174 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_175 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_176 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_177 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_178 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_179 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_180 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_181 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_182 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_183 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_184 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_185 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_186 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_187 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_188 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_189 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_190 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_191 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_192 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_193 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_194 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_195 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_196 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_197 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_198 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_199 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_200 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_201 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_202 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_203 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_204 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_205 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_206 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_207 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_208 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_209 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_210 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_211 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_212 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_213 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_214 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_215 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_216 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_217 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_218 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_219 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_220 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_221 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_222 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_223 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_3_graphics_224 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(151).to({graphics:mask_3_graphics_151,x:1093,y:527.2}).wait(1).to({graphics:mask_3_graphics_152,x:855.1,y:527.7}).wait(1).to({graphics:mask_3_graphics_153,x:617.1,y:528.3}).wait(1).to({graphics:mask_3_graphics_154,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_155,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_156,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_157,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_158,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_159,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_160,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_161,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_162,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_163,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_164,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_165,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_166,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_167,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_168,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_169,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_170,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_171,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_172,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_173,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_174,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_175,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_176,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_177,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_178,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_179,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_180,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_181,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_182,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_183,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_184,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_185,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_186,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_187,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_188,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_189,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_190,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_191,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_192,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_193,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_194,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_195,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_196,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_197,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_198,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_199,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_200,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_201,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_202,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_203,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_204,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_205,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_206,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_207,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_208,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_209,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_210,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_211,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_212,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_213,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_214,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_215,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_216,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_217,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_218,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_219,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_220,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_221,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_222,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_223,x:379.2,y:528.8}).wait(1).to({graphics:mask_3_graphics_224,x:379.2,y:528.8}).wait(108));

	// 手31
	this.instance_41 = new lib.s20_126();
	this.instance_41.setTransform(1329.6,651.2,1,1,0,0,0,244.8,219.1);
	this.instance_41._off = true;

	this.instance_41.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(151).to({_off:false},0).to({x:579.2},3).to({rotation:-2,x:568.1},3).to({rotation:3,x:551.3,y:651.3},3).to({rotation:-1,x:537.3},4).to({regY:219,rotation:2,x:523.4,y:651.2},3).to({regY:218.9,rotation:-2,x:512.2},4).to({regY:219.1,rotation:0,x:502.4},4).wait(49).to({_off:true},1).wait(107));

	// 嘴31
	this.instance_42 = new lib.s20_018();
	this.instance_42.setTransform(1083.2,553.6,1,1,0,0,0,45,52.5);
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(151).to({_off:false},0).to({x:336},3).to({scaleY:0.84,x:324.6},3).to({scaleY:1,x:307.5,y:553.7},3).to({scaleY:0.83,x:293.3,y:553.6},4).to({scaleY:1,x:279,y:553.7},3).to({scaleY:0.8,x:267.6},4).to({scaleY:1,x:257.6,y:553.6},4).wait(49).to({_off:true},1).wait(107));

	// 人31遮罩 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_151 = new cjs.Graphics().p("Egz+AaIMAAAg0PMBn9AAAMAAAA0Pg");
	var mask_4_graphics_152 = new cjs.Graphics().p("Egz/AaHMAAAg0NMBn/AAAMAAAA0Ng");
	var mask_4_graphics_153 = new cjs.Graphics().p("Egz+AaIMAAAg0PMBn9AAAMAAAA0Pg");
	var mask_4_graphics_154 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_155 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_156 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_157 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_158 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_159 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_160 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_161 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_162 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_163 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_164 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_165 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_166 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_167 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_168 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_169 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_170 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_171 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_172 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_173 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_174 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_175 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_176 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_177 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_178 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_179 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_180 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_181 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_182 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_183 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_184 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_185 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_186 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_187 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_188 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_189 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_190 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_191 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_192 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_193 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_194 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_195 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_196 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_197 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_198 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_199 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_200 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_201 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_202 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_203 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_204 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_205 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_206 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_207 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_208 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_209 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_210 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_211 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_212 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_213 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_214 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_215 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_216 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_217 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_218 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_219 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_220 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_221 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_222 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_223 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_4_graphics_224 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(151).to({graphics:mask_4_graphics_151,x:1093,y:527.2}).wait(1).to({graphics:mask_4_graphics_152,x:855.1,y:527.7}).wait(1).to({graphics:mask_4_graphics_153,x:617.1,y:528.3}).wait(1).to({graphics:mask_4_graphics_154,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_155,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_156,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_157,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_158,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_159,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_160,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_161,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_162,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_163,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_164,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_165,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_166,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_167,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_168,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_169,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_170,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_171,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_172,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_173,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_174,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_175,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_176,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_177,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_178,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_179,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_180,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_181,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_182,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_183,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_184,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_185,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_186,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_187,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_188,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_189,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_190,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_191,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_192,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_193,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_194,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_195,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_196,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_197,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_198,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_199,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_200,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_201,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_202,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_203,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_204,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_205,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_206,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_207,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_208,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_209,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_210,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_211,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_212,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_213,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_214,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_215,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_216,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_217,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_218,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_219,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_220,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_221,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_222,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_223,x:379.2,y:528.8}).wait(1).to({graphics:mask_4_graphics_224,x:379.2,y:528.8}).wait(108));

	// 人31
	this.instance_43 = new lib.s20_008();
	this.instance_43.setTransform(1084.8,569.6,1,1,0,0,0,273,224);
	this.instance_43._off = true;

	this.instance_43.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(151).to({_off:false},0).to({x:340.8},3).to({x:261.9,y:571.6},21).wait(49).to({_off:true},1).wait(107));

	// 字32遮罩   复制 3 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_151 = new cjs.Graphics().p("Egz+AaIMAAAg0PMBn9AAAMAAAA0Pg");
	var mask_5_graphics_152 = new cjs.Graphics().p("Egz/AaHMAAAg0NMBn/AAAMAAAA0Ng");
	var mask_5_graphics_153 = new cjs.Graphics().p("Egz+AaIMAAAg0PMBn9AAAMAAAA0Pg");
	var mask_5_graphics_154 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_155 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_156 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_157 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_158 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_159 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_160 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_161 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_162 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_163 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_164 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_165 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_166 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_167 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_168 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_169 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_170 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_171 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_172 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_173 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_174 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_175 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_176 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_177 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_178 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_179 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_180 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_181 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_182 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_183 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_184 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_185 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_186 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_187 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_188 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_189 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_190 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_191 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_192 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_193 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_194 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_195 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_196 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_197 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_198 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_199 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_200 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_201 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_202 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_203 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_204 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_205 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_206 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_207 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_208 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_209 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_210 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_211 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_212 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_213 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_214 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_215 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_216 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_217 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_218 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_219 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_220 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_221 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_222 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_223 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");
	var mask_5_graphics_224 = new cjs.Graphics().p("Egz+AaHMAAAg0NMBn9AAAMAAAA0Ng");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(151).to({graphics:mask_5_graphics_151,x:1093,y:527.2}).wait(1).to({graphics:mask_5_graphics_152,x:855.1,y:527.7}).wait(1).to({graphics:mask_5_graphics_153,x:617.1,y:528.3}).wait(1).to({graphics:mask_5_graphics_154,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_155,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_156,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_157,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_158,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_159,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_160,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_161,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_162,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_163,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_164,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_165,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_166,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_167,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_168,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_169,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_170,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_171,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_172,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_173,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_174,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_175,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_176,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_177,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_178,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_179,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_180,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_181,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_182,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_183,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_184,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_185,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_186,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_187,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_188,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_189,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_190,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_191,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_192,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_193,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_194,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_195,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_196,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_197,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_198,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_199,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_200,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_201,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_202,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_203,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_204,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_205,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_206,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_207,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_208,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_209,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_210,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_211,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_212,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_213,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_214,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_215,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_216,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_217,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_218,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_219,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_220,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_221,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_222,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_223,x:379.2,y:528.8}).wait(1).to({graphics:mask_5_graphics_224,x:379.2,y:528.8}).wait(108));

	// 字32
	this.instance_44 = new lib.s20_116();
	this.instance_44.setTransform(1331,400,1,1,0,0,0,229.5,126);
	this.instance_44._off = true;

	this.instance_44.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(151).to({_off:false},0).to({x:578.4},3).to({x:508},21).wait(49).to({_off:true},1).wait(107));

	// 底32
	this.instance_45 = new lib.s20_120();
	this.instance_45.setTransform(1098.1,529.6,1,1,0,0,0,368.5,192);
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(151).to({_off:false},0).to({x:384.5,y:531.2},3).wait(70).to({_off:true},1).wait(107));

	// 字31
	this.instance_46 = new lib.s20_115();
	this.instance_46.setTransform(582.4,252.8,0.3,0.3,0,0,0,50,122.9);
	this.instance_46._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(145).to({_off:false},0).to({regX:50.1,regY:122.8,scaleX:1,scaleY:1},2).wait(77).to({_off:true},1).wait(107));

	// 图31
	this.instance_47 = new lib.s20_019();
	this.instance_47.setTransform(1097.6,212.8,1,1,0,0,0,385.5,153);
	this.instance_47._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(139).to({_off:false},0).to({x:374.4},3).wait(82).to({_off:true},1).wait(107));

	// 背景3
	this.instance_48 = new lib.s20_151();
	this.instance_48.setTransform(375,610,1,1,0,0,0,375,610);
	this.instance_48.alpha = 0;
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(139).to({_off:false},0).to({alpha:1},3).wait(82).to({_off:true},1).wait(107));

	// 流血遮罩后      复制 3 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_98 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_99 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_100 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_101 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_102 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_103 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_104 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_105 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_106 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_107 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_108 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_109 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_110 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_111 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_112 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_113 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_114 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_115 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_116 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_117 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_118 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_119 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_120 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_121 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_122 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_123 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_124 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_125 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_126 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_127 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_128 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_129 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_130 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_131 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_132 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_133 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_134 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_135 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_136 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_137 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_138 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_139 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_140 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_141 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_142 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_143 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_144 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_145 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_146 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_147 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_148 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_149 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_150 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_151 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_152 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_153 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_154 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_155 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_156 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_157 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_158 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_159 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_6_graphics_160 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(98).to({graphics:mask_6_graphics_98,x:373.8,y:1425}).wait(1).to({graphics:mask_6_graphics_99,x:374.8,y:1287.3}).wait(1).to({graphics:mask_6_graphics_100,x:375.9,y:1149.6}).wait(1).to({graphics:mask_6_graphics_101,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_102,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_103,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_104,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_105,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_106,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_107,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_108,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_109,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_110,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_111,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_112,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_113,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_114,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_115,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_116,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_117,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_118,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_119,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_120,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_121,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_122,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_123,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_124,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_125,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_126,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_127,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_128,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_129,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_130,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_131,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_132,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_133,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_134,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_135,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_136,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_137,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_138,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_139,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_140,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_141,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_142,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_143,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_144,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_145,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_146,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_147,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_148,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_149,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_150,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_151,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_152,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_153,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_154,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_155,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_156,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_157,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_158,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_159,x:376.9,y:1011.9}).wait(1).to({graphics:mask_6_graphics_160,x:376.9,y:1011.9}).wait(172));

	// 流血
	this.instance_49 = new lib.s20_139();
	this.instance_49.setTransform(450.4,1071.2,0.51,0.51,0,0,0,16,15.4);
	this.instance_49._off = true;

	this.instance_50 = new lib.s20_055();
	this.instance_50.setTransform(433.2,1056.6);

	this.instance_51 = new lib.s20_056();
	this.instance_51.setTransform(428.6,1060.2);

	this.instance_52 = new lib.s20_057();
	this.instance_52.setTransform(428.8,1057.5);

	this.instance_49.mask = this.instance_50.mask = this.instance_51.mask = this.instance_52.mask = mask_6;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_49}]},111).to({state:[{t:this.instance_49}]},4).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_52}]},42).to({state:[]},1).wait(171));
	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(111).to({_off:false},0).to({scaleX:1,scaleY:1},4).to({_off:true,regX:0,regY:0,x:433.2,y:1056.6},1).wait(216));

	// 喷血
	this.instance_53 = new lib.s20_043();
	this.instance_53.setTransform(387.6,990.1);

	this.instance_54 = new lib.s20_044();
	this.instance_54.setTransform(375.6,953.2);

	this.instance_55 = new lib.s20_045();
	this.instance_55.setTransform(387.6,958.6);

	this.instance_56 = new lib.s20_046();
	this.instance_56.setTransform(404.8,988.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_53}]},111).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[]},1).to({state:[]},19).wait(198));

	// 线3
	this.instance_57 = new lib.s20_141();
	this.instance_57.setTransform(431.2,1049.4,0.3,0.3,0,0,0,29,44);
	this.instance_57._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(111).to({_off:false},0).to({scaleX:0.77,scaleY:0.77,x:433.9,y:1003.3},4).to({scaleX:1,scaleY:1,x:435.2,y:980.2,alpha:0},2).to({_off:true},17).wait(198));

	// 宝石31
	this.instance_58 = new lib.s20_118();
	this.instance_58.setTransform(431.2,1049.4,0.405,0.33,0,0,0,44.1,54);
	this.instance_58._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(111).to({_off:false},0).to({regX:44,scaleX:1,scaleY:1,x:432,y:915},6).to({y:926.2},14).to({y:915},15).to({y:926.2},14).to({_off:true},1).wait(171));

	// 宝石光31
	this.instance_59 = new lib.s20_119();
	this.instance_59.setTransform(436.8,913.5,0.5,0.5,0,0,0,93,87);
	this.instance_59._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(117).to({_off:false},0).to({scaleX:1,scaleY:1},4).wait(39).to({_off:true},1).wait(171));

	// 翅膀遮罩后     复制 2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_98 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_99 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_100 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_7_graphics_101 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_102 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_103 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_104 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_105 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_106 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_107 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_108 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_109 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_110 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_111 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_112 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_113 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_114 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_115 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_116 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_117 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_118 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_119 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_120 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_121 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_122 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_123 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_124 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_125 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_126 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_127 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_128 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_129 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_130 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_131 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_132 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_133 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_134 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_135 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_136 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_137 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_138 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_139 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_140 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_141 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_142 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_143 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_144 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_145 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_146 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_147 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_148 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_149 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_150 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_151 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_152 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_153 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_154 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_155 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_156 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_157 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_158 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_159 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_7_graphics_160 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(98).to({graphics:mask_7_graphics_98,x:373.8,y:1425}).wait(1).to({graphics:mask_7_graphics_99,x:374.8,y:1286.8}).wait(1).to({graphics:mask_7_graphics_100,x:375.9,y:1148.5}).wait(1).to({graphics:mask_7_graphics_101,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_102,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_103,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_104,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_105,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_106,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_107,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_108,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_109,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_110,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_111,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_112,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_113,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_114,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_115,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_116,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_117,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_118,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_119,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_120,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_121,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_122,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_123,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_124,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_125,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_126,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_127,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_128,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_129,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_130,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_131,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_132,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_133,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_134,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_135,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_136,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_137,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_138,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_139,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_140,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_141,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_142,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_143,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_144,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_145,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_146,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_147,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_148,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_149,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_150,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_151,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_152,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_153,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_154,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_155,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_156,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_157,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_158,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_159,x:376.9,y:1010.3}).wait(1).to({graphics:mask_7_graphics_160,x:376.9,y:1010.3}).wait(172));

	// 翅膀31
	this.instance_60 = new lib.s20_148();
	this.instance_60.setTransform(137.6,1339.2,1,1,0,0,0,254,96);
	this.instance_60._off = true;

	this.instance_60.mask = mask_7;

	this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(98).to({_off:false},0).to({x:142.4,y:926.2},3).to({y:915.8},3).to({y:926.2},3).to({y:915.8},3).to({y:926.2},3).to({y:915.8},3).to({y:926.2},4).to({y:915.8},5).to({y:926.2},7).wait(28).to({_off:true},1).wait(171));

	// 腿31
	this.instance_61 = new lib.s20_157();
	this.instance_61.setTransform(123.2,1507.2,1,1,0,0,0,86,107.5);
	this.instance_61._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(98).to({_off:false},0).to({x:124.8,y:1092.3},3).wait(59).to({_off:true},1).wait(171));

	// 人31
	this.instance_62 = new lib.s20_005();
	this.instance_62.setTransform(117.6,1339.2,1,1,0,0,0,98,87);
	this.instance_62._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_62).wait(98).to({_off:false},0).to({x:120.8,y:930.4},3).to({y:924},3).to({y:930.4},3).to({y:924},3).to({y:930.4},3).to({y:924},3).to({y:930.4},4).to({y:924},5).to({y:930.4},7).wait(28).to({_off:true},1).wait(171));

	// 剑遮罩后       复制 4 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_98 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_99 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_100 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_101 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_102 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_103 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_104 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_105 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_106 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_107 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_108 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_109 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_110 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_111 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_112 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_113 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_114 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_115 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_116 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_117 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_118 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_119 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_120 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_121 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_122 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_123 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_124 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_125 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_126 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_127 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_128 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_129 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_130 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_131 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_132 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_133 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_134 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_135 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_136 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_137 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_138 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_139 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_140 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_141 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_142 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_143 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_144 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_145 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_146 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_147 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_148 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_149 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_150 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_151 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_152 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_153 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_154 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_155 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_156 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_157 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_158 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_159 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_8_graphics_160 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(98).to({graphics:mask_8_graphics_98,x:373.8,y:1425}).wait(1).to({graphics:mask_8_graphics_99,x:374.8,y:1287.3}).wait(1).to({graphics:mask_8_graphics_100,x:375.9,y:1149.6}).wait(1).to({graphics:mask_8_graphics_101,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_102,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_103,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_104,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_105,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_106,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_107,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_108,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_109,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_110,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_111,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_112,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_113,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_114,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_115,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_116,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_117,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_118,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_119,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_120,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_121,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_122,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_123,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_124,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_125,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_126,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_127,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_128,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_129,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_130,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_131,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_132,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_133,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_134,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_135,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_136,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_137,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_138,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_139,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_140,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_141,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_142,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_143,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_144,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_145,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_146,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_147,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_148,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_149,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_150,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_151,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_152,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_153,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_154,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_155,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_156,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_157,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_158,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_159,x:376.9,y:1011.9}).wait(1).to({graphics:mask_8_graphics_160,x:376.9,y:1011.9}).wait(172));

	// 剑31
	this.instance_63 = new lib.s20_017();
	this.instance_63.setTransform(224,1497.6,1,1,0,0,0,61,131);
	this.instance_63._off = true;

	this.instance_63.mask = mask_8;

	this.timeline.addTween(cjs.Tween.get(this.instance_63).wait(98).to({_off:false},0).to({x:228.8,y:1081},3).wait(59).to({_off:true},1).wait(171));

	// 框31
	this.instance_64 = new lib.s20_136();
	this.instance_64.setTransform(377.6,1432,1,1,0,0,0,358,210.5);
	this.instance_64._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_64).wait(98).to({_off:false},0).to({x:380.8,y:1017.6},3).wait(59).to({_off:true},1).wait(171));

	// 飙血遮罩后    复制 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_77 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_9_graphics_78 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_79 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_9_graphics_80 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_81 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_82 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_83 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_84 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_85 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_86 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_87 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_88 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_89 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_90 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_91 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_92 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_93 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_94 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_95 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_96 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_97 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_98 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_99 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_100 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_101 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_102 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_103 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_104 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_105 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_106 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_107 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_108 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_109 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_110 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_111 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_112 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_113 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_114 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_115 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_116 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_117 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_118 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_119 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_120 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_121 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_122 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_123 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_124 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_125 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_126 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_127 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_128 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_129 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_130 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_131 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_132 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_133 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_134 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_135 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_136 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_137 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_138 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_139 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_140 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_141 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_142 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_143 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_144 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_145 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_146 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_147 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_148 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_149 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_150 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_151 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_152 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_153 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_154 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_155 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_156 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_157 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_158 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_159 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_9_graphics_160 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(77).to({graphics:mask_9_graphics_77,x:-343.1,y:628.7}).wait(1).to({graphics:mask_9_graphics_78,x:-102,y:627.4}).wait(1).to({graphics:mask_9_graphics_79,x:139.1,y:626}).wait(1).to({graphics:mask_9_graphics_80,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_81,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_82,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_83,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_84,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_85,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_86,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_87,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_88,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_89,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_90,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_91,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_92,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_93,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_94,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_95,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_96,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_97,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_98,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_99,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_100,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_101,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_102,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_103,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_104,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_105,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_106,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_107,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_108,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_109,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_110,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_111,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_112,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_113,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_114,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_115,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_116,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_117,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_118,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_119,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_120,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_121,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_122,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_123,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_124,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_125,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_126,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_127,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_128,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_129,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_130,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_131,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_132,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_133,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_134,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_135,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_136,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_137,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_138,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_139,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_140,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_141,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_142,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_143,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_144,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_145,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_146,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_147,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_148,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_149,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_150,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_151,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_152,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_153,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_154,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_155,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_156,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_157,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_158,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_159,x:380.2,y:624.7}).wait(1).to({graphics:mask_9_graphics_160,x:380.2,y:624.7}).wait(172));

	// 飙血22前
	this.instance_65 = new lib.s20_064();
	this.instance_65.setTransform(447.6,626.4);

	this.instance_66 = new lib.s20_065();
	this.instance_66.setTransform(436,618);

	this.instance_67 = new lib.s20_068();
	this.instance_67.setTransform(467.5,651.4,0.88,0.88);

	this.instance_68 = new lib.s20_069();
	this.instance_68.setTransform(453.6,609.6);

	this.instance_65.mask = this.instance_66.mask = this.instance_67.mask = this.instance_68.mask = mask_9;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_65}]},80).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[]},1).to({state:[]},42).wait(198));

	// 剑21
	this.instance_69 = new lib.s20_016();
	this.instance_69.setTransform(-201.1,723.2,1,1,0,0,0,98,92);
	this.instance_69._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_69).wait(77).to({_off:false},0).to({x:552},3).wait(80).to({_off:true},1).wait(171));

	// 飙血遮罩后     复制 2 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_77 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_10_graphics_78 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_79 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_10_graphics_80 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_81 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_82 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_83 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_84 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_85 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_86 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_87 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_88 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_89 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_90 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_91 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_92 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_93 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_94 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_95 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_96 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_97 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_98 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_99 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_100 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_101 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_102 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_103 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_104 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_105 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_106 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_107 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_108 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_109 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_110 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_111 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_112 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_113 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_114 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_115 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_116 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_117 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_118 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_119 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_120 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_121 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_122 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_123 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_124 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_125 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_126 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_127 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_128 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_129 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_130 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_131 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_132 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_133 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_134 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_135 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_136 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_137 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_138 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_139 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_140 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_141 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_142 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_143 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_144 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_145 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_146 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_147 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_148 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_149 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_150 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_151 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_152 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_153 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_154 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_155 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_156 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_157 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_158 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_159 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_10_graphics_160 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(77).to({graphics:mask_10_graphics_77,x:-343.1,y:628.7}).wait(1).to({graphics:mask_10_graphics_78,x:-102,y:627.4}).wait(1).to({graphics:mask_10_graphics_79,x:139.1,y:626}).wait(1).to({graphics:mask_10_graphics_80,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_81,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_82,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_83,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_84,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_85,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_86,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_87,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_88,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_89,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_90,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_91,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_92,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_93,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_94,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_95,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_96,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_97,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_98,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_99,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_100,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_101,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_102,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_103,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_104,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_105,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_106,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_107,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_108,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_109,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_110,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_111,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_112,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_113,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_114,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_115,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_116,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_117,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_118,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_119,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_120,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_121,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_122,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_123,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_124,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_125,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_126,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_127,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_128,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_129,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_130,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_131,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_132,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_133,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_134,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_135,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_136,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_137,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_138,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_139,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_140,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_141,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_142,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_143,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_144,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_145,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_146,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_147,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_148,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_149,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_150,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_151,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_152,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_153,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_154,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_155,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_156,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_157,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_158,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_159,x:380.2,y:624.7}).wait(1).to({graphics:mask_10_graphics_160,x:380.2,y:624.7}).wait(172));

	// 伤口2
	this.instance_70 = new lib.s20_009();
	this.instance_70.setTransform(506.2,760.2,1,1,0,0,0,58,131);
	this.instance_70._off = true;

	this.instance_70.mask = mask_10;

	this.timeline.addTween(cjs.Tween.get(this.instance_70).wait(92).to({_off:false},0).wait(240));

	// 飙血遮罩后    (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_77 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_11_graphics_78 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_79 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_11_graphics_80 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_81 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_82 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_83 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_84 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_85 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_86 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_87 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_88 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_89 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_90 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_91 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_92 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_93 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_94 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_95 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_96 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_97 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_98 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_99 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_100 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_101 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_102 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_103 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_104 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_105 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_106 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_107 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_108 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_109 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_110 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_111 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_112 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_113 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_114 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_115 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_116 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_117 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_118 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_119 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_120 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_121 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_122 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_123 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_124 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_125 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_126 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_127 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_128 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_129 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_130 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_131 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_132 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_133 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_134 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_135 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_136 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_137 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_138 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_139 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_140 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_141 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_142 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_143 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_144 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_145 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_146 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_147 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_148 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_149 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_150 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_151 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_152 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_153 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_154 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_155 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_156 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_157 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_158 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_159 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_11_graphics_160 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:null,x:0,y:0}).wait(77).to({graphics:mask_11_graphics_77,x:-343.1,y:628.7}).wait(1).to({graphics:mask_11_graphics_78,x:-102,y:627.4}).wait(1).to({graphics:mask_11_graphics_79,x:139.1,y:626}).wait(1).to({graphics:mask_11_graphics_80,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_81,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_82,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_83,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_84,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_85,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_86,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_87,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_88,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_89,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_90,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_91,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_92,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_93,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_94,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_95,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_96,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_97,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_98,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_99,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_100,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_101,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_102,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_103,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_104,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_105,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_106,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_107,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_108,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_109,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_110,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_111,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_112,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_113,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_114,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_115,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_116,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_117,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_118,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_119,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_120,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_121,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_122,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_123,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_124,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_125,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_126,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_127,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_128,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_129,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_130,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_131,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_132,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_133,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_134,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_135,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_136,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_137,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_138,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_139,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_140,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_141,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_142,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_143,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_144,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_145,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_146,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_147,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_148,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_149,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_150,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_151,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_152,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_153,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_154,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_155,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_156,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_157,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_158,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_159,x:380.2,y:624.7}).wait(1).to({graphics:mask_11_graphics_160,x:380.2,y:624.7}).wait(172));

	// 飙血22后
	this.instance_71 = new lib.s20_070();
	this.instance_71.setTransform(480,595.2);

	this.instance_72 = new lib.s20_066();
	this.instance_72.setTransform(465.2,530.8);

	this.instance_73 = new lib.s20_067();
	this.instance_73.setTransform(478,595.2);

	this.instance_74 = new lib.s20_068();
	this.instance_74.setTransform(474,638);

	this.instance_71.mask = this.instance_72.mask = this.instance_73.mask = this.instance_74.mask = mask_11;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_71}]},80).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73,p:{y:595.2}}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73,p:{y:583.2}}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73,p:{y:595.2}}]},1).to({state:[{t:this.instance_74}]},1).to({state:[]},1).to({state:[]},42).wait(198));

	// 怪22遮罩   复制 3 (mask)
	var mask_12 = new cjs.Shape();
	mask_12._off = true;
	var mask_12_graphics_77 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_12_graphics_78 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_79 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_12_graphics_80 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_81 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_82 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_83 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_84 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_85 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_86 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_87 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_88 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_89 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_90 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_91 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_92 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_93 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_94 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_95 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_96 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_97 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_98 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_99 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_100 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_101 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_102 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_103 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_104 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_105 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_106 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_107 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_108 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_109 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_110 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_111 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_112 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_113 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_114 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_115 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_116 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_117 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_118 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_119 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_120 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_121 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_122 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_123 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_124 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_125 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_126 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_127 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_128 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_129 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_130 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_131 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_132 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_133 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_134 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_135 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_136 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_137 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_138 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_139 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_140 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_141 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_142 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_143 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_144 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_145 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_146 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_147 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_148 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_149 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_150 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_151 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_152 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_153 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_154 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_155 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_156 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_157 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_158 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_159 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_12_graphics_160 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");

	this.timeline.addTween(cjs.Tween.get(mask_12).to({graphics:null,x:0,y:0}).wait(77).to({graphics:mask_12_graphics_77,x:-343.1,y:628.7}).wait(1).to({graphics:mask_12_graphics_78,x:-102,y:627.4}).wait(1).to({graphics:mask_12_graphics_79,x:139.1,y:626}).wait(1).to({graphics:mask_12_graphics_80,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_81,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_82,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_83,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_84,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_85,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_86,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_87,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_88,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_89,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_90,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_91,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_92,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_93,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_94,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_95,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_96,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_97,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_98,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_99,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_100,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_101,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_102,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_103,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_104,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_105,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_106,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_107,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_108,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_109,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_110,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_111,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_112,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_113,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_114,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_115,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_116,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_117,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_118,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_119,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_120,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_121,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_122,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_123,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_124,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_125,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_126,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_127,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_128,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_129,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_130,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_131,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_132,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_133,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_134,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_135,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_136,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_137,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_138,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_139,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_140,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_141,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_142,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_143,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_144,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_145,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_146,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_147,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_148,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_149,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_150,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_151,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_152,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_153,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_154,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_155,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_156,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_157,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_158,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_159,x:380.2,y:624.7}).wait(1).to({graphics:mask_12_graphics_160,x:380.2,y:624.7}).wait(172));

	// 怪22
	this.instance_75 = new lib.s20_122();
	this.instance_75.setTransform(-424,657.6,1,1,0,0,0,378,310);
	this.instance_75._off = true;

	this.instance_75.mask = mask_12;

	this.timeline.addTween(cjs.Tween.get(this.instance_75).wait(77).to({_off:false},0).to({x:331.2},3).wait(80).to({_off:true},1).wait(171));

	// 人22
	this.instance_76 = new lib.s20_004();
	this.instance_76.setTransform(-397.1,665.7,1,1,0,0,0,98,116);
	this.instance_76._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_76).wait(77).to({_off:false},0).to({x:287.2,y:662.4},3).wait(80).to({_off:true},1).wait(171));

	// 框22
	this.instance_77 = new lib.s20_135();
	this.instance_77.setTransform(-348,624.1,1,1,0,0,0,372,202);
	this.instance_77._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_77).wait(77).to({_off:false},0).to({x:375.2,y:620.8},3).wait(80).to({_off:true},1).wait(171));

	// 字21
	this.instance_78 = new lib.s20_114();
	this.instance_78.setTransform(710.4,101.3,0.002,0.001,0,0,0,247.8,66.8);
	this.instance_78._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_78).wait(65).to({_off:false},0).to({regX:234,regY:65.6,scaleX:1,scaleY:1},2).wait(93).to({_off:true},1).wait(171));

	// 线22遮罩  复制 2 (mask)
	var mask_13 = new cjs.Shape();
	mask_13._off = true;
	var mask_13_graphics_62 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_13_graphics_63 = new cjs.Graphics().p("EgzeAbpMAAAg3RMBm9AAAMAAAA3Rg");
	var mask_13_graphics_64 = new cjs.Graphics().p("EgzeAbpMAAAg3RMBm9AAAMAAAA3Rg");
	var mask_13_graphics_65 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_66 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_67 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_68 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_69 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_70 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_71 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_72 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_73 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_74 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_75 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_76 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_77 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_78 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_79 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_80 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_81 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_82 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_83 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_84 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_85 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_86 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_87 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_88 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_89 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_90 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_91 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_92 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_93 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_94 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_95 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_96 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_97 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_98 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_99 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_100 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_101 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_102 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_103 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_104 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_105 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_106 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_107 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_108 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_109 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_110 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_111 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_112 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_113 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_114 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_115 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_116 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_117 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_118 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_119 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_120 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_121 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_122 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_123 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_124 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_125 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_126 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_127 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_128 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_129 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_130 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_131 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_132 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_133 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_134 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_135 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_136 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_137 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_138 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_139 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_140 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_141 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_142 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_143 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_144 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_145 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_146 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_147 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_148 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_149 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_150 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_151 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_152 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_153 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_154 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_155 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_156 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_157 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_158 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_159 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_13_graphics_160 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");

	this.timeline.addTween(cjs.Tween.get(mask_13).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_13_graphics_62,x:-338.2,y:238.3}).wait(1).to({graphics:mask_13_graphics_63,x:-99.9,y:238}).wait(1).to({graphics:mask_13_graphics_64,x:138.6,y:237.8}).wait(1).to({graphics:mask_13_graphics_65,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_66,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_67,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_68,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_69,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_70,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_71,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_72,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_73,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_74,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_75,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_76,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_77,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_78,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_79,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_80,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_81,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_82,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_83,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_84,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_85,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_86,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_87,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_88,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_89,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_90,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_91,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_92,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_93,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_94,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_95,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_96,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_97,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_98,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_99,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_100,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_101,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_102,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_103,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_104,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_105,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_106,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_107,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_108,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_109,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_110,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_111,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_112,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_113,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_114,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_115,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_116,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_117,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_118,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_119,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_120,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_121,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_122,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_123,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_124,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_125,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_126,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_127,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_128,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_129,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_130,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_131,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_132,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_133,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_134,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_135,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_136,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_137,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_138,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_139,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_140,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_141,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_142,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_143,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_144,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_145,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_146,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_147,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_148,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_149,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_150,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_151,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_152,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_153,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_154,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_155,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_156,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_157,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_158,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_159,x:376.9,y:237.5}).wait(1).to({graphics:mask_13_graphics_160,x:376.9,y:237.5}).wait(172));

	// 线22
	this.instance_79 = new lib.s20_144();
	this.instance_79.setTransform(-398.4,241.6,1,1,0,0,0,330,207.5);
	this.instance_79._off = true;

	this.instance_79.mask = mask_13;

	this.timeline.addTween(cjs.Tween.get(this.instance_79).wait(62).to({_off:false},0).to({x:177.6},3).to({x:182.9},95).to({_off:true},1).wait(171));

	// 线21遮罩 复制 (mask)
	var mask_14 = new cjs.Shape();
	mask_14._off = true;
	var mask_14_graphics_62 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_14_graphics_63 = new cjs.Graphics().p("EgzeAbpMAAAg3RMBm9AAAMAAAA3Rg");
	var mask_14_graphics_64 = new cjs.Graphics().p("EgzeAbpMAAAg3RMBm9AAAMAAAA3Rg");
	var mask_14_graphics_65 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_66 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_67 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_68 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_69 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_70 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_71 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_72 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_73 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_74 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_75 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_76 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_77 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_78 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_79 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_80 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_81 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_82 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_83 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_84 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_85 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_86 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_87 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_88 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_89 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_90 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_91 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_92 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_93 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_94 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_95 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_96 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_97 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_98 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_99 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_100 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_101 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_102 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_103 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_104 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_105 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_106 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_107 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_108 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_109 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_110 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_111 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_112 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_113 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_114 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_115 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_116 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_117 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_118 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_119 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_120 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_121 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_122 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_123 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_124 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_125 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_126 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_127 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_128 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_129 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_130 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_131 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_132 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_133 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_134 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_135 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_136 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_137 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_138 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_139 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_140 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_141 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_142 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_143 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_144 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_145 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_146 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_147 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_148 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_149 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_150 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_151 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_152 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_153 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_154 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_155 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_156 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_157 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_158 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_159 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_14_graphics_160 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");

	this.timeline.addTween(cjs.Tween.get(mask_14).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_14_graphics_62,x:-338.2,y:238.3}).wait(1).to({graphics:mask_14_graphics_63,x:-99.9,y:238}).wait(1).to({graphics:mask_14_graphics_64,x:138.6,y:237.8}).wait(1).to({graphics:mask_14_graphics_65,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_66,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_67,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_68,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_69,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_70,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_71,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_72,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_73,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_74,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_75,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_76,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_77,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_78,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_79,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_80,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_81,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_82,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_83,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_84,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_85,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_86,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_87,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_88,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_89,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_90,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_91,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_92,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_93,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_94,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_95,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_96,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_97,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_98,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_99,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_100,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_101,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_102,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_103,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_104,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_105,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_106,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_107,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_108,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_109,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_110,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_111,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_112,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_113,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_114,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_115,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_116,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_117,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_118,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_119,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_120,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_121,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_122,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_123,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_124,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_125,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_126,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_127,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_128,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_129,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_130,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_131,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_132,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_133,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_134,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_135,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_136,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_137,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_138,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_139,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_140,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_141,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_142,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_143,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_144,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_145,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_146,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_147,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_148,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_149,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_150,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_151,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_152,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_153,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_154,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_155,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_156,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_157,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_158,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_159,x:376.9,y:237.5}).wait(1).to({graphics:mask_14_graphics_160,x:376.9,y:237.5}).wait(172));

	// 线21
	this.instance_80 = new lib.s20_143();
	this.instance_80.setTransform(478.1,123.2,1,1,0,0,0,470,316);
	this.instance_80._off = true;

	this.instance_80.mask = mask_14;

	this.timeline.addTween(cjs.Tween.get(this.instance_80).wait(62).to({_off:false},0).wait(98).to({_off:true},1).wait(171));

	// 人21遮罩 (mask)
	var mask_15 = new cjs.Shape();
	mask_15._off = true;
	var mask_15_graphics_62 = new cjs.Graphics().p("EgzdAbpMAAAg3RMBm7AAAMAAAA3Rg");
	var mask_15_graphics_63 = new cjs.Graphics().p("EgzeAbpMAAAg3RMBm9AAAMAAAA3Rg");
	var mask_15_graphics_64 = new cjs.Graphics().p("EgzeAbpMAAAg3RMBm9AAAMAAAA3Rg");
	var mask_15_graphics_65 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_15_graphics_66 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_15_graphics_67 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_15_graphics_68 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_15_graphics_69 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_15_graphics_70 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_15_graphics_71 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_15_graphics_72 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_15_graphics_73 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_15_graphics_74 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_15_graphics_75 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_15_graphics_76 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_15_graphics_77 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_15_graphics_78 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_15_graphics_79 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_15_graphics_80 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_15_graphics_81 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_15_graphics_82 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_15_graphics_83 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_15_graphics_84 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_15_graphics_85 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_15_graphics_86 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_15_graphics_87 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_15_graphics_88 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_15_graphics_89 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_15_graphics_90 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_15_graphics_91 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");
	var mask_15_graphics_92 = new cjs.Graphics().p("EgzdAbqMAAAg3TMBm7AAAMAAAA3Tg");

	this.timeline.addTween(cjs.Tween.get(mask_15).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_15_graphics_62,x:-338.2,y:238.3}).wait(1).to({graphics:mask_15_graphics_63,x:-99.9,y:238}).wait(1).to({graphics:mask_15_graphics_64,x:138.6,y:237.8}).wait(1).to({graphics:mask_15_graphics_65,x:376.9,y:237.5}).wait(1).to({graphics:mask_15_graphics_66,x:376.9,y:237.5}).wait(1).to({graphics:mask_15_graphics_67,x:376.9,y:237.5}).wait(1).to({graphics:mask_15_graphics_68,x:376.9,y:237.5}).wait(1).to({graphics:mask_15_graphics_69,x:376.9,y:237.5}).wait(1).to({graphics:mask_15_graphics_70,x:376.9,y:237.5}).wait(1).to({graphics:mask_15_graphics_71,x:376.9,y:237.5}).wait(1).to({graphics:mask_15_graphics_72,x:376.9,y:237.5}).wait(1).to({graphics:mask_15_graphics_73,x:376.9,y:237.5}).wait(1).to({graphics:mask_15_graphics_74,x:376.9,y:237.5}).wait(1).to({graphics:mask_15_graphics_75,x:376.9,y:237.5}).wait(1).to({graphics:mask_15_graphics_76,x:376.9,y:237.5}).wait(1).to({graphics:mask_15_graphics_77,x:376.9,y:237.5}).wait(1).to({graphics:mask_15_graphics_78,x:376.9,y:237.5}).wait(1).to({graphics:mask_15_graphics_79,x:376.9,y:237.5}).wait(1).to({graphics:mask_15_graphics_80,x:376.9,y:237.5}).wait(1).to({graphics:mask_15_graphics_81,x:376.9,y:237.5}).wait(1).to({graphics:mask_15_graphics_82,x:376.9,y:237.5}).wait(1).to({graphics:mask_15_graphics_83,x:376.9,y:237.5}).wait(1).to({graphics:mask_15_graphics_84,x:376.9,y:237.5}).wait(1).to({graphics:mask_15_graphics_85,x:376.9,y:237.5}).wait(1).to({graphics:mask_15_graphics_86,x:376.9,y:237.5}).wait(1).to({graphics:mask_15_graphics_87,x:376.9,y:237.5}).wait(1).to({graphics:mask_15_graphics_88,x:376.9,y:237.5}).wait(1).to({graphics:mask_15_graphics_89,x:376.9,y:237.5}).wait(1).to({graphics:mask_15_graphics_90,x:376.9,y:237.5}).wait(1).to({graphics:mask_15_graphics_91,x:376.9,y:237.5}).wait(1).to({graphics:mask_15_graphics_92,x:376.9,y:237.5}).wait(240));

	// 人21
	this.instance_81 = new lib.s20_003();
	this.instance_81.setTransform(-375.2,278,1,1,0,0,0,500,278);
	this.instance_81._off = true;

	this.instance_81.mask = mask_15;

	this.timeline.addTween(cjs.Tween.get(this.instance_81).wait(62).to({_off:false},0).to({x:340.8},3).to({x:424},13).to({_off:true},83).wait(171));

	// 框21
	this.instance_82 = new lib.s20_134();
	this.instance_82.setTransform(-335.5,233.6,1,1,0,0,0,362,210);
	this.instance_82._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_82).wait(62).to({_off:false},0).to({x:378.1},3).wait(95).to({_off:true},1).wait(171));

	// 背景2
	this.instance_83 = new lib.s20_150();
	this.instance_83.setTransform(375,610,1,1,0,0,0,375,610);
	this.instance_83.alpha = 0;
	this.instance_83._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_83).wait(56).to({_off:false},0).to({alpha:1},6).wait(98).to({_off:true},1).wait(171));

	// 光12
	this.instance_84 = new lib.s20_011();
	this.instance_84.setTransform(269.5,803,1,1,0,0,0,123.5,103.6);
	this.instance_84._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_84).wait(50).to({_off:false},0).to({regY:103.7,scaleX:1,scaleY:1,rotation:118,x:320.7,y:837.5},8).to({regX:123.4,regY:103.6,scaleX:1,scaleY:1,rotation:177,x:346.4,y:855,alpha:0},4).wait(98).to({_off:true},1).wait(171));

	// 光1
	this.instance_85 = new lib.s20_010();
	this.instance_85.setTransform(503.2,259.6,1,1,0,0,0,131.6,121.5);
	this.instance_85.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_85).to({rotation:45,x:513.7,y:215.7,alpha:1},7).to({scaleX:1,scaleY:1,rotation:149.9},8).to({scaleX:1,scaleY:1,rotation:176,alpha:0},5).to({_off:true},60).wait(252));

	// 字12
	this.instance_86 = new lib.s20_113();
	this.instance_86.setTransform(417,562.2,0.001,0.003,0,0,0,35.2,137.8);
	this.instance_86._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_86).wait(20).to({_off:false},0).to({regX:30.9,regY:128.5,scaleX:1,scaleY:1},3).to({_off:true},57).wait(252));

	// 手11遮罩 复制 (mask)
	var mask_16 = new cjs.Shape();
	mask_16._off = true;
	mask_16.graphics.p("EgzKAZ3IAAgpIgeAAMAAAgzEMBmzAAAMAAAAxiIAegBIAACMg");
	mask_16.setTransform(368.6,228.5);

	// 手11
	this.instance_87 = new lib.s20_124();
	this.instance_87.setTransform(126.1,54.1,1,1,0,0,0,168,138.5);

	this.instance_87.mask = mask_16;

	this.timeline.addTween(cjs.Tween.get(this.instance_87).to({regY:138.4,rotation:-4},7).to({_off:true},73).wait(252));

	// 剑11遮罩 (mask)
	var mask_17 = new cjs.Shape();
	mask_17._off = true;
	var mask_17_graphics_0 = new cjs.Graphics().p("EgzKAZ3IAAgpIgeAAMAAAgzEMBmzAAAMAAAAxiIAegBIAACMg");
	var mask_17_graphics_10 = new cjs.Graphics().p("EgzKAZ3IAAgpIgeAAMAAAgzEMBmzAAAMAAAAxiIAegBIAACMg");
	var mask_17_graphics_52 = new cjs.Graphics().p("EgzKAZ3IAAgpIgeAAMAAAgzEMBmzAAAMAAAAxiIAegBIAACMg");

	this.timeline.addTween(cjs.Tween.get(mask_17).to({graphics:mask_17_graphics_0,x:379.6,y:228.5}).wait(10).to({graphics:mask_17_graphics_10,x:379.6,y:228.5}).wait(42).to({graphics:mask_17_graphics_52,x:379.6,y:228.5}).wait(280));

	// 剑11
	this.instance_88 = new lib.s20_013();
	this.instance_88.setTransform(410.1,314.1,1,1,0,0,0,256.9,505.6);

	this.instance_88.mask = mask_17;

	this.timeline.addTween(cjs.Tween.get(this.instance_88).to({rotation:-4,x:420.1,y:281.3},7).to({_off:true},73).wait(252));

	// 剑12
	this.instance_89 = new lib.s20_014();
	this.instance_89.setTransform(130.1,642.2,1,1,0,0,0,66,78);

	this.timeline.addTween(cjs.Tween.get(this.instance_89).wait(45).to({rotation:15,x:126.1,y:644.2},5).to({_off:true},30).wait(252));

	// 框11
	this.instance_90 = new lib.s20_031();
	this.instance_90.setTransform(8.1,34.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_90).wait(45).to({_off:true},35).wait(252));

	// 手12
	this.instance_91 = new lib.s20_125();
	this.instance_91.setTransform(276.1,702.2,1,1,0,0,0,220,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_91).wait(45).to({rotation:4},5).to({_off:true},30).wait(252));

	// 人12
	this.instance_92 = new lib.s20_002();
	this.instance_92.setTransform(222.1,794.3,1,1,0,0,0,120,312.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_92).wait(45).to({rotation:5},5).to({_off:true},30).wait(252));

	// 怪12
	this.instance_93 = new lib.s20_121();
	this.instance_93.setTransform(440.2,903.5,1,1,0,0,0,360,412);

	this.timeline.addTween(cjs.Tween.get(this.instance_93).wait(45).to({x:460.1,y:931.5},5).to({_off:true},30).wait(252));

	// 肩11
	this.instance_94 = new lib.s20_149();
	this.instance_94.setTransform(124,618.3,1,1,0,0,0,110,140.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_94).wait(45).to({rotation:10},5).to({_off:true},30).wait(252));

	// 腿12
	this.instance_95 = new lib.s20_156();
	this.instance_95.setTransform(230,842.3,1,1,0,0,0,278,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_95).wait(45).to({rotation:2},5).to({_off:true},30).wait(252));

	// 翅膀12
	this.instance_96 = new lib.s20_147();
	this.instance_96.setTransform(252.1,622.2,1,1,15,0,0,29.9,390.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_96).wait(20).to({regY:390.1,rotation:0},11).to({regX:29.8,rotation:13},14).to({regX:29.9,rotation:24},5).to({_off:true},30).wait(252));

	// 翅膀11
	this.instance_97 = new lib.s20_146();
	this.instance_97.setTransform(206.1,586.2,1,1,-10,0,0,382.1,234.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_97).wait(20).to({regY:234.1,rotation:0,y:586.3},11).to({rotation:-10},14).to({rotation:-21},5).to({_off:true},30).wait(252));

	// 背景1
	this.instance_98 = new lib.s20_0351();

	this.timeline.addTween(cjs.Tween.get(this.instance_98).wait(79).to({_off:true},1).wait(252));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210.9,0,1103,1315.5);


// stage content:



(lib.qj_s20 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s20();
	this.instance.setTransform(484.1,562,1,1,0,0,0,484.1,562);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(164.1,418.5,1390.1,1507);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;