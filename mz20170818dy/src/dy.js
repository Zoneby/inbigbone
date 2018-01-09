(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 750,
	height: 1220,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/cv/bd001.png?1507794011299", id:"bd001"},
		{src:"images/cv/bd002.png?1507794011299", id:"bd002"},
		{src:"images/cv/bd003.png?1507794011299", id:"bd003"},
		{src:"images/cv/bd004.png?1507794011299", id:"bd004"},
		{src:"images/cv/bd005.png?1507794011299", id:"bd005"},
		{src:"images/cv/bd006.png?1507794011299", id:"bd006"},
		{src:"images/cv/bd007.png?1507794011299", id:"bd007"},
		{src:"images/cv/bd008.png?1507794011299", id:"bd008"},
		{src:"images/cv/bd009.png?1507794011299", id:"bd009"},
		{src:"images/cv/bd010.png?1507794011299", id:"bd010"},
		{src:"images/cv/bd011.png?1507794011299", id:"bd011"},
		{src:"images/cv/bd012.png?1507794011299", id:"bd012"},
		{src:"images/cv/bd013.png?1507794011299", id:"bd013"},
		{src:"images/cv/bd014.png?1507794011299", id:"bd014"},
		{src:"images/cv/bd015.png?1507794011299", id:"bd015"},
		{src:"images/cv/bd016.png?1507794011299", id:"bd016"},
		{src:"images/cv/bd017.png?1507794011299", id:"bd017"},
		{src:"images/cv/bd018.png?1507794011299", id:"bd018"},
		{src:"images/cv/bd019.png?1507794011299", id:"bd019"},
		{src:"images/cv/bd020.png?1507794011299", id:"bd020"},
		{src:"images/cv/bd021.png?1507794011299", id:"bd021"},
		{src:"images/cv/bd022.png?1507794011299", id:"bd022"},
		{src:"images/cv/bd023.png?1507794011299", id:"bd023"},
		{src:"images/cv/bd024.png?1507794011299", id:"bd024"},
		{src:"images/cv/bd025.png?1507794011299", id:"bd025"},
		{src:"images/cv/bd026.png?1507794011299", id:"bd026"},
		{src:"images/cv/bd027.png?1507794011299", id:"bd027"},
		{src:"images/cv/bd028.png?1507794011299", id:"bd028"},
		{src:"images/cv/bd029.png?1507794011299", id:"bd029"},
		{src:"images/cv/bd030.png?1507794011299", id:"bd030"},
		{src:"images/cv/bd031.png?1507794011299", id:"bd031"},
		{src:"images/cv/bd032.png?1507794011299", id:"bd032"},
		{src:"images/cv/bd033.png?1507794011299", id:"bd033"},
		{src:"images/cv/bd034.png?1507794011299", id:"bd034"},
		{src:"images/cv/bd035.png?1507794011299", id:"bd035"},
		{src:"images/cv/bd036.png?1507794011299", id:"bd036"},
		{src:"images/cv/bd037.png?1507794011299", id:"bd037"},
		{src:"images/cv/bd038.png?1507794011299", id:"bd038"},
		{src:"images/cv/bd039.png?1507794011299", id:"bd039"},
		{src:"images/cv/bd040.png?1507794011299", id:"bd040"},
		{src:"images/cv/bd041.png?1507794011299", id:"bd041"},
		{src:"images/cv/bd042.png?1507794011299", id:"bd042"},
		{src:"images/cv/bd043.png?1507794011299", id:"bd043"},
		{src:"images/cv/bd044.png?1507794011299", id:"bd044"},
		{src:"images/cv/bd045.png?1507794011299", id:"bd045"},
		{src:"images/cv/bd046.png?1507794011299", id:"bd046"},
		{src:"images/cv/bd047.png?1507794011299", id:"bd047"},
		{src:"images/cv/bd048.png?1507794011299", id:"bd048"},
		{src:"images/cv/bd049.png?1507794011299", id:"bd049"},
		{src:"images/cv/bd_cover.png?1507794011299", id:"bd_cover"},
		{src:"images/cv/bd_lightblue.png?1507794011299", id:"bd_lightblue"},
		{src:"images/cv/bd_lightpink.png?1507794011299", id:"bd_lightpink"},
		{src:"images/cv/bd_photo.jpg?1507794011299", id:"bd_photo"},
		{src:"images/cv/bd_textlight1.png?1507794011299", id:"bd_textlight1"},
		{src:"images/cv/bd_textlight2.png?1507794011299", id:"bd_textlight2"},
		{src:"images/cv/bdbody1.png?1507794011299", id:"bdbody1"},
		{src:"images/cv/bdbody2.png?1507794011299", id:"bdbody2"},
		{src:"images/cv/bdpc.png?1507794011299", id:"bdpc"},
		{src:"images/cv/bg_bd.jpg?1507794011299", id:"bg_bd"},
		{src:"images/cv/bg_home.jpg?1507794011299", id:"bg_home"},
		{src:"images/cv/bg_run.png?1507794011299", id:"bg_run"},
		{src:"images/cv/bg_swim.jpg?1507794011299", id:"bg_swim"},
		{src:"images/cv/bg_walk.jpg?1507794011299", id:"bg_walk"},
		{src:"images/cv/bg_work.jpg?1507794011299", id:"bg_work"},
		{src:"images/cv/btn_lookother.png?1507794011299", id:"btn_lookother"},
		{src:"images/cv/btn_what.png?1507794011299", id:"btn_what"},
		{src:"images/cv/cloud1.png?1507794011299", id:"cloud1"},
		{src:"images/cv/cloud2.png?1507794011299", id:"cloud2"},
		{src:"images/cv/cloud3.png?1507794011299", id:"cloud3"},
		{src:"images/cv/cloud4.png?1507794011299", id:"cloud4"},
		{src:"images/cv/disco.png?1507794011299", id:"disco"},
		{src:"images/cv/earphone.png?1507794011299", id:"earphone"},
		{src:"images/cv/earphoneright.png?1507794011299", id:"earphoneright"},
		{src:"images/cv/run001.png?1507794011299", id:"run001"},
		{src:"images/cv/run002.png?1507794011299", id:"run002"},
		{src:"images/cv/run003.png?1507794011299", id:"run003"},
		{src:"images/cv/run004.png?1507794011299", id:"run004"},
		{src:"images/cv/run005.png?1507794011299", id:"run005"},
		{src:"images/cv/run006.png?1507794011299", id:"run006"},
		{src:"images/cv/run007.png?1507794011299", id:"run007"},
		{src:"images/cv/run008.png?1507794011299", id:"run008"},
		{src:"images/cv/run009.png?1507794011299", id:"run009"},
		{src:"images/cv/run010.png?1507794011299", id:"run010"},
		{src:"images/cv/run011.png?1507794011299", id:"run011"},
		{src:"images/cv/run012.png?1507794011299", id:"run012"},
		{src:"images/cv/run013.png?1507794011299", id:"run013"},
		{src:"images/cv/run014.png?1507794011299", id:"run014"},
		{src:"images/cv/run015.png?1507794011299", id:"run015"},
		{src:"images/cv/run016.png?1507794011299", id:"run016"},
		{src:"images/cv/run017.png?1507794011299", id:"run017"},
		{src:"images/cv/run018.png?1507794011299", id:"run018"},
		{src:"images/cv/run019.png?1507794011299", id:"run019"},
		{src:"images/cv/run020.png?1507794011299", id:"run020"},
		{src:"images/cv/run021.png?1507794011299", id:"run021"},
		{src:"images/cv/run022.png?1507794011299", id:"run022"},
		{src:"images/cv/run023.png?1507794011299", id:"run023"},
		{src:"images/cv/run024.png?1507794011299", id:"run024"},
		{src:"images/cv/run025.png?1507794011299", id:"run025"},
		{src:"images/cv/run026.png?1507794011299", id:"run026"},
		{src:"images/cv/run027.png?1507794011299", id:"run027"},
		{src:"images/cv/run028.png?1507794011299", id:"run028"},
		{src:"images/cv/run029.png?1507794011299", id:"run029"},
		{src:"images/cv/run030.png?1507794011299", id:"run030"},
		{src:"images/cv/run031.png?1507794011299", id:"run031"},
		{src:"images/cv/run032.png?1507794011299", id:"run032"},
		{src:"images/cv/run033.png?1507794011299", id:"run033"},
		{src:"images/cv/run034.png?1507794011299", id:"run034"},
		{src:"images/cv/run035.png?1507794011299", id:"run035"},
		{src:"images/cv/run036.png?1507794011299", id:"run036"},
		{src:"images/cv/run037.png?1507794011299", id:"run037"},
		{src:"images/cv/run038.png?1507794011299", id:"run038"},
		{src:"images/cv/run039.png?1507794011299", id:"run039"},
		{src:"images/cv/run040.png?1507794011299", id:"run040"},
		{src:"images/cv/run041.png?1507794011299", id:"run041"},
		{src:"images/cv/run042.png?1507794011299", id:"run042"},
		{src:"images/cv/run043.png?1507794011299", id:"run043"},
		{src:"images/cv/run044.png?1507794011299", id:"run044"},
		{src:"images/cv/run045.png?1507794011299", id:"run045"},
		{src:"images/cv/run046.png?1507794011299", id:"run046"},
		{src:"images/cv/run047.png?1507794011299", id:"run047"},
		{src:"images/cv/swim001.png?1507794011299", id:"swim001"},
		{src:"images/cv/swim002.png?1507794011299", id:"swim002"},
		{src:"images/cv/swim003.png?1507794011299", id:"swim003"},
		{src:"images/cv/swim004.png?1507794011299", id:"swim004"},
		{src:"images/cv/swim005.png?1507794011299", id:"swim005"},
		{src:"images/cv/swim006.png?1507794011299", id:"swim006"},
		{src:"images/cv/swim007.png?1507794011299", id:"swim007"},
		{src:"images/cv/swim008.png?1507794011299", id:"swim008"},
		{src:"images/cv/swim009.png?1507794011299", id:"swim009"},
		{src:"images/cv/swim010.png?1507794011299", id:"swim010"},
		{src:"images/cv/swim011.png?1507794011299", id:"swim011"},
		{src:"images/cv/swim012.png?1507794011299", id:"swim012"},
		{src:"images/cv/swim013.png?1507794011299", id:"swim013"},
		{src:"images/cv/swim014.png?1507794011299", id:"swim014"},
		{src:"images/cv/swim015.png?1507794011299", id:"swim015"},
		{src:"images/cv/swim016.png?1507794011299", id:"swim016"},
		{src:"images/cv/swim017.png?1507794011299", id:"swim017"},
		{src:"images/cv/swim018.png?1507794011299", id:"swim018"},
		{src:"images/cv/swim019.png?1507794011299", id:"swim019"},
		{src:"images/cv/swim020.png?1507794011299", id:"swim020"},
		{src:"images/cv/swim021.png?1507794011299", id:"swim021"},
		{src:"images/cv/swim022.png?1507794011299", id:"swim022"},
		{src:"images/cv/swim023.png?1507794011299", id:"swim023"},
		{src:"images/cv/swim024.png?1507794011299", id:"swim024"},
		{src:"images/cv/swim025.png?1507794011299", id:"swim025"},
		{src:"images/cv/swim026.png?1507794011299", id:"swim026"},
		{src:"images/cv/swim027.png?1507794011299", id:"swim027"},
		{src:"images/cv/swim028.png?1507794011299", id:"swim028"},
		{src:"images/cv/swim029.png?1507794011299", id:"swim029"},
		{src:"images/cv/swim030.png?1507794011299", id:"swim030"},
		{src:"images/cv/swim031.png?1507794011299", id:"swim031"},
		{src:"images/cv/swim032.png?1507794011299", id:"swim032"},
		{src:"images/cv/swim033.png?1507794011299", id:"swim033"},
		{src:"images/cv/swim034.png?1507794011299", id:"swim034"},
		{src:"images/cv/swim035.png?1507794011299", id:"swim035"},
		{src:"images/cv/swim036.png?1507794011299", id:"swim036"},
		{src:"images/cv/swim037.png?1507794011299", id:"swim037"},
		{src:"images/cv/swim038.png?1507794011299", id:"swim038"},
		{src:"images/cv/swim039.png?1507794011299", id:"swim039"},
		{src:"images/cv/swim040.png?1507794011299", id:"swim040"},
		{src:"images/cv/swim041.png?1507794011299", id:"swim041"},
		{src:"images/cv/swim042.png?1507794011299", id:"swim042"},
		{src:"images/cv/swim043.png?1507794011299", id:"swim043"},
		{src:"images/cv/swim044.png?1507794011299", id:"swim044"},
		{src:"images/cv/swim045.png?1507794011299", id:"swim045"},
		{src:"images/cv/swim046.png?1507794011299", id:"swim046"},
		{src:"images/cv/swim047.png?1507794011299", id:"swim047"},
		{src:"images/cv/swim048.png?1507794011299", id:"swim048"},
		{src:"images/cv/swim049.png?1507794011299", id:"swim049"},
		{src:"images/cv/swim050.png?1507794011299", id:"swim050"},
		{src:"images/cv/swim051.png?1507794011299", id:"swim051"},
		{src:"images/cv/swim052.png?1507794011299", id:"swim052"},
		{src:"images/cv/swim053.png?1507794011299", id:"swim053"},
		{src:"images/cv/swim054.png?1507794011299", id:"swim054"},
		{src:"images/cv/swim055.png?1507794011299", id:"swim055"},
		{src:"images/cv/swim056.png?1507794011299", id:"swim056"},
		{src:"images/cv/swim057.png?1507794011299", id:"swim057"},
		{src:"images/cv/swim058.png?1507794011299", id:"swim058"},
		{src:"images/cv/swim059.png?1507794011299", id:"swim059"},
		{src:"images/cv/swim060.png?1507794011299", id:"swim060"},
		{src:"images/cv/swim061.png?1507794011299", id:"swim061"},
		{src:"images/cv/swim_bird.png?1507794011299", id:"swim_bird"},
		{src:"images/cv/swim_leaf.png?1507794011299", id:"swim_leaf"},
		{src:"images/cv/swim_star.png?1507794011299", id:"swim_star"},
		{src:"images/cv/textbd1.png?1507794011299", id:"textbd1"},
		{src:"images/cv/textbd2.png?1507794011299", id:"textbd2"},
		{src:"images/cv/textswim1.png?1507794011299", id:"textswim1"},
		{src:"images/cv/textswim2.png?1507794011299", id:"textswim2"},
		{src:"images/cv/textwalk1.png?1507794011299", id:"textwalk1"},
		{src:"images/cv/textwalk2.png?1507794011299", id:"textwalk2"},
		{src:"images/cv/walk001.png?1507794011299", id:"walk001"},
		{src:"images/cv/walk002.png?1507794011299", id:"walk002"},
		{src:"images/cv/walk003.png?1507794011299", id:"walk003"},
		{src:"images/cv/walk004.png?1507794011299", id:"walk004"},
		{src:"images/cv/walk005.png?1507794011299", id:"walk005"},
		{src:"images/cv/walk006.png?1507794011299", id:"walk006"},
		{src:"images/cv/walk007.png?1507794011299", id:"walk007"},
		{src:"images/cv/walk008.png?1507794011299", id:"walk008"},
		{src:"images/cv/walk009.png?1507794011299", id:"walk009"},
		{src:"images/cv/walk010.png?1507794011299", id:"walk010"},
		{src:"images/cv/walk011.png?1507794011299", id:"walk011"},
		{src:"images/cv/walk012.png?1507794011299", id:"walk012"},
		{src:"images/cv/walk013.png?1507794011299", id:"walk013"},
		{src:"images/cv/walk014.png?1507794011299", id:"walk014"},
		{src:"images/cv/walk015.png?1507794011299", id:"walk015"},
		{src:"images/cv/walk016.png?1507794011299", id:"walk016"},
		{src:"images/cv/walk017.png?1507794011299", id:"walk017"},
		{src:"images/cv/walk018.png?1507794011299", id:"walk018"},
		{src:"images/cv/y_00027.png?1507794011299", id:"y_00027"},
		{src:"images/cv/y_00029.png?1507794011299", id:"y_00029"},
		{src:"images/cv/y_00031.png?1507794011299", id:"y_00031"},
		{src:"images/cv/y_00033.png?1507794011299", id:"y_00033"},
		{src:"images/cv/y_00035.png?1507794011299", id:"y_00035"},
		{src:"images/cv/y_00037.png?1507794011299", id:"y_00037"},
		{src:"images/cv/y_00039.png?1507794011299", id:"y_00039"},
		{src:"images/cv/y_00041.png?1507794011299", id:"y_00041"},
		{src:"images/cv/y_00043.png?1507794011299", id:"y_00043"},
		{src:"images/cv/y_00045.png?1507794011299", id:"y_00045"},
		{src:"images/cv/y_00047.png?1507794011299", id:"y_00047"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.bd001 = function() {
	this.initialize(img.bd001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd002 = function() {
	this.initialize(img.bd002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd003 = function() {
	this.initialize(img.bd003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd004 = function() {
	this.initialize(img.bd004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd005 = function() {
	this.initialize(img.bd005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd006 = function() {
	this.initialize(img.bd006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd007 = function() {
	this.initialize(img.bd007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd008 = function() {
	this.initialize(img.bd008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd009 = function() {
	this.initialize(img.bd009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd010 = function() {
	this.initialize(img.bd010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd011 = function() {
	this.initialize(img.bd011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd012 = function() {
	this.initialize(img.bd012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd013 = function() {
	this.initialize(img.bd013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd014 = function() {
	this.initialize(img.bd014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd015 = function() {
	this.initialize(img.bd015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd016 = function() {
	this.initialize(img.bd016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd017 = function() {
	this.initialize(img.bd017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd018 = function() {
	this.initialize(img.bd018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd019 = function() {
	this.initialize(img.bd019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd020 = function() {
	this.initialize(img.bd020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd021 = function() {
	this.initialize(img.bd021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd022 = function() {
	this.initialize(img.bd022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd023 = function() {
	this.initialize(img.bd023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd024 = function() {
	this.initialize(img.bd024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd025 = function() {
	this.initialize(img.bd025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd026 = function() {
	this.initialize(img.bd026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd027 = function() {
	this.initialize(img.bd027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd028 = function() {
	this.initialize(img.bd028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd029 = function() {
	this.initialize(img.bd029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd030 = function() {
	this.initialize(img.bd030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd031 = function() {
	this.initialize(img.bd031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd032 = function() {
	this.initialize(img.bd032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd033 = function() {
	this.initialize(img.bd033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd034 = function() {
	this.initialize(img.bd034);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd035 = function() {
	this.initialize(img.bd035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd036 = function() {
	this.initialize(img.bd036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd037 = function() {
	this.initialize(img.bd037);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd038 = function() {
	this.initialize(img.bd038);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd039 = function() {
	this.initialize(img.bd039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd040 = function() {
	this.initialize(img.bd040);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd041 = function() {
	this.initialize(img.bd041);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd042 = function() {
	this.initialize(img.bd042);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd043 = function() {
	this.initialize(img.bd043);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd044 = function() {
	this.initialize(img.bd044);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd045 = function() {
	this.initialize(img.bd045);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd046 = function() {
	this.initialize(img.bd046);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd047 = function() {
	this.initialize(img.bd047);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd048 = function() {
	this.initialize(img.bd048);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd049 = function() {
	this.initialize(img.bd049);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd_cover = function() {
	this.initialize(img.bd_cover);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1158);


(lib.bd_lightblue = function() {
	this.initialize(img.bd_lightblue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,324,824);


(lib.bd_lightpink = function() {
	this.initialize(img.bd_lightpink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,361,849);


(lib.bd_photo = function() {
	this.initialize(img.bd_photo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,351,433);


(lib.bd_textlight1 = function() {
	this.initialize(img.bd_textlight1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,708,111);


(lib.bd_textlight2 = function() {
	this.initialize(img.bd_textlight2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,708,111);


(lib.bdbody1 = function() {
	this.initialize(img.bdbody1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,595,420);


(lib.bdbody2 = function() {
	this.initialize(img.bdbody2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,595,420);


(lib.bdpc = function() {
	this.initialize(img.bdpc);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,203,70);


(lib.bg_bd = function() {
	this.initialize(img.bg_bd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.bg_home = function() {
	this.initialize(img.bg_home);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.bg_run = function() {
	this.initialize(img.bg_run);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1753,610);


(lib.bg_swim = function() {
	this.initialize(img.bg_swim);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.bg_walk = function() {
	this.initialize(img.bg_walk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1122,610);


(lib.bg_work = function() {
	this.initialize(img.bg_work);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.btn_lookother = function() {
	this.initialize(img.btn_lookother);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,263,112);


(lib.btn_what = function() {
	this.initialize(img.btn_what);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,263,112);


(lib.cloud1 = function() {
	this.initialize(img.cloud1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,289,343);


(lib.cloud2 = function() {
	this.initialize(img.cloud2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,622,477);


(lib.cloud3 = function() {
	this.initialize(img.cloud3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,209);


(lib.cloud4 = function() {
	this.initialize(img.cloud4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,327,242);


(lib.disco = function() {
	this.initialize(img.disco);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,557,380);


(lib.earphone = function() {
	this.initialize(img.earphone);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,254);


(lib.earphoneright = function() {
	this.initialize(img.earphoneright);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,47,125);


(lib.run001 = function() {
	this.initialize(img.run001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run002 = function() {
	this.initialize(img.run002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run003 = function() {
	this.initialize(img.run003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run004 = function() {
	this.initialize(img.run004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run005 = function() {
	this.initialize(img.run005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run006 = function() {
	this.initialize(img.run006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run007 = function() {
	this.initialize(img.run007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run008 = function() {
	this.initialize(img.run008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run009 = function() {
	this.initialize(img.run009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run010 = function() {
	this.initialize(img.run010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run011 = function() {
	this.initialize(img.run011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run012 = function() {
	this.initialize(img.run012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run013 = function() {
	this.initialize(img.run013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run014 = function() {
	this.initialize(img.run014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run015 = function() {
	this.initialize(img.run015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run016 = function() {
	this.initialize(img.run016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run017 = function() {
	this.initialize(img.run017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run018 = function() {
	this.initialize(img.run018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run019 = function() {
	this.initialize(img.run019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run020 = function() {
	this.initialize(img.run020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run021 = function() {
	this.initialize(img.run021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run022 = function() {
	this.initialize(img.run022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run023 = function() {
	this.initialize(img.run023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run024 = function() {
	this.initialize(img.run024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run025 = function() {
	this.initialize(img.run025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run026 = function() {
	this.initialize(img.run026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run027 = function() {
	this.initialize(img.run027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run028 = function() {
	this.initialize(img.run028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run029 = function() {
	this.initialize(img.run029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run030 = function() {
	this.initialize(img.run030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run031 = function() {
	this.initialize(img.run031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run032 = function() {
	this.initialize(img.run032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run033 = function() {
	this.initialize(img.run033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run034 = function() {
	this.initialize(img.run034);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run035 = function() {
	this.initialize(img.run035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run036 = function() {
	this.initialize(img.run036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run037 = function() {
	this.initialize(img.run037);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run038 = function() {
	this.initialize(img.run038);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run039 = function() {
	this.initialize(img.run039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run040 = function() {
	this.initialize(img.run040);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run041 = function() {
	this.initialize(img.run041);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run042 = function() {
	this.initialize(img.run042);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run043 = function() {
	this.initialize(img.run043);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run044 = function() {
	this.initialize(img.run044);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run045 = function() {
	this.initialize(img.run045);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run046 = function() {
	this.initialize(img.run046);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.run047 = function() {
	this.initialize(img.run047);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim001 = function() {
	this.initialize(img.swim001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim002 = function() {
	this.initialize(img.swim002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim003 = function() {
	this.initialize(img.swim003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim004 = function() {
	this.initialize(img.swim004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim005 = function() {
	this.initialize(img.swim005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim006 = function() {
	this.initialize(img.swim006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim007 = function() {
	this.initialize(img.swim007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim008 = function() {
	this.initialize(img.swim008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim009 = function() {
	this.initialize(img.swim009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim010 = function() {
	this.initialize(img.swim010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim011 = function() {
	this.initialize(img.swim011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim012 = function() {
	this.initialize(img.swim012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim013 = function() {
	this.initialize(img.swim013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim014 = function() {
	this.initialize(img.swim014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim015 = function() {
	this.initialize(img.swim015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim016 = function() {
	this.initialize(img.swim016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim017 = function() {
	this.initialize(img.swim017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim018 = function() {
	this.initialize(img.swim018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim019 = function() {
	this.initialize(img.swim019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim020 = function() {
	this.initialize(img.swim020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim021 = function() {
	this.initialize(img.swim021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim022 = function() {
	this.initialize(img.swim022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim023 = function() {
	this.initialize(img.swim023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim024 = function() {
	this.initialize(img.swim024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim025 = function() {
	this.initialize(img.swim025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim026 = function() {
	this.initialize(img.swim026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim027 = function() {
	this.initialize(img.swim027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim028 = function() {
	this.initialize(img.swim028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim029 = function() {
	this.initialize(img.swim029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim030 = function() {
	this.initialize(img.swim030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim031 = function() {
	this.initialize(img.swim031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim032 = function() {
	this.initialize(img.swim032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim033 = function() {
	this.initialize(img.swim033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim034 = function() {
	this.initialize(img.swim034);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim035 = function() {
	this.initialize(img.swim035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim036 = function() {
	this.initialize(img.swim036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim037 = function() {
	this.initialize(img.swim037);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim038 = function() {
	this.initialize(img.swim038);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim039 = function() {
	this.initialize(img.swim039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim040 = function() {
	this.initialize(img.swim040);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim041 = function() {
	this.initialize(img.swim041);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim042 = function() {
	this.initialize(img.swim042);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim043 = function() {
	this.initialize(img.swim043);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim044 = function() {
	this.initialize(img.swim044);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim045 = function() {
	this.initialize(img.swim045);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim046 = function() {
	this.initialize(img.swim046);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim047 = function() {
	this.initialize(img.swim047);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim048 = function() {
	this.initialize(img.swim048);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim049 = function() {
	this.initialize(img.swim049);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim050 = function() {
	this.initialize(img.swim050);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim051 = function() {
	this.initialize(img.swim051);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim052 = function() {
	this.initialize(img.swim052);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim053 = function() {
	this.initialize(img.swim053);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim054 = function() {
	this.initialize(img.swim054);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim055 = function() {
	this.initialize(img.swim055);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim056 = function() {
	this.initialize(img.swim056);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim057 = function() {
	this.initialize(img.swim057);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim058 = function() {
	this.initialize(img.swim058);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim059 = function() {
	this.initialize(img.swim059);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim060 = function() {
	this.initialize(img.swim060);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim061 = function() {
	this.initialize(img.swim061);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.swim_bird = function() {
	this.initialize(img.swim_bird);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,249,280);


(lib.swim_leaf = function() {
	this.initialize(img.swim_leaf);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,297,192);


(lib.swim_star = function() {
	this.initialize(img.swim_star);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,233,122);


(lib.textbd1 = function() {
	this.initialize(img.textbd1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,560,250);


(lib.textbd2 = function() {
	this.initialize(img.textbd2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,634,272);


(lib.textswim1 = function() {
	this.initialize(img.textswim1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,668,313);


(lib.textswim2 = function() {
	this.initialize(img.textswim2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,601,253);


(lib.textwalk1 = function() {
	this.initialize(img.textwalk1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,622,335);


(lib.textwalk2 = function() {
	this.initialize(img.textwalk2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,619,263);


(lib.walk001 = function() {
	this.initialize(img.walk001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.walk002 = function() {
	this.initialize(img.walk002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.walk003 = function() {
	this.initialize(img.walk003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.walk004 = function() {
	this.initialize(img.walk004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.walk005 = function() {
	this.initialize(img.walk005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.walk006 = function() {
	this.initialize(img.walk006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.walk007 = function() {
	this.initialize(img.walk007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.walk008 = function() {
	this.initialize(img.walk008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.walk009 = function() {
	this.initialize(img.walk009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.walk010 = function() {
	this.initialize(img.walk010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.walk011 = function() {
	this.initialize(img.walk011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.walk012 = function() {
	this.initialize(img.walk012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.walk013 = function() {
	this.initialize(img.walk013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.walk014 = function() {
	this.initialize(img.walk014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.walk015 = function() {
	this.initialize(img.walk015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.walk016 = function() {
	this.initialize(img.walk016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.walk017 = function() {
	this.initialize(img.walk017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.walk018 = function() {
	this.initialize(img.walk018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.y_00027 = function() {
	this.initialize(img.y_00027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,751,1220);


(lib.y_00029 = function() {
	this.initialize(img.y_00029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,751,1220);


(lib.y_00031 = function() {
	this.initialize(img.y_00031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,751,1220);


(lib.y_00033 = function() {
	this.initialize(img.y_00033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,751,1220);


(lib.y_00035 = function() {
	this.initialize(img.y_00035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,751,1220);


(lib.y_00037 = function() {
	this.initialize(img.y_00037);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,751,1220);


(lib.y_00039 = function() {
	this.initialize(img.y_00039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,751,1220);


(lib.y_00041 = function() {
	this.initialize(img.y_00041);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,751,1220);


(lib.y_00043 = function() {
	this.initialize(img.y_00043);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,751,1220);


(lib.y_00045 = function() {
	this.initialize(img.y_00045);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,751,1220);


(lib.y_00047 = function() {
	this.initialize(img.y_00047);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,751,1220);


(lib.workbody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		this.gotoAndPlay(0)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(1));

	// 图层 1
	this.instance = new lib.bdbody1();

	this.instance_1 = new lib.bdbody2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,595,420);


(lib.textswim_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.textswim2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,601,253);


(lib.textrun_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.textwalk2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,619,263);


(lib.textbd_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.textbd2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,634,272);


(lib.swim_star_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.swim_star();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,233,122);


(lib.swim_leaf_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.swim_leaf();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,297,192);


(lib.swim_bird_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.swim_bird();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,249,280);


(lib.lang = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.y_00027();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,751,1220);


(lib.earphoneright_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.earphoneright();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47,125);


(lib.earphone_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.earphone();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,272,254);


(lib.photoimg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.bd_photo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,351,433);


(lib.cloud3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.cloud4();
	this.instance.setTransform(423,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({y:-29},0).wait(3));

	// 图层 1
	this.instance_1 = new lib.cloud3();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({y:17},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-19,750,242);


(lib.cloud2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cloud2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({x:26},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,622,477);


(lib.cloud1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cloud1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({x:-27},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,289,343);


(lib.btn_what_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.btn_what();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,263,112);


(lib.btn_lookother_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.btn_lookother();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,263,112);


(lib.bgwalk_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.bg_walk();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1122,610);


(lib.bgrun_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.bg_run();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1753,610);


(lib.bd_textlight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.bd_textlight1();

	this.instance_1 = new lib.bd_textlight2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,708,111);


(lib.bd_lightpink_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.bd_lightpink();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,361,849);


(lib.bd_lightblue_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.bd_lightblue();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,324,824);


(lib.textswim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.textswim_();
	this.instance.setTransform(300.5,126.5,1,1,0,0,0,300.5,126.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({scaleX:0.9,scaleY:0.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,601,253);


(lib.textrun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.textrun_();
	this.instance.setTransform(309.5,131.5,1,1,0,0,0,309.5,131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({scaleX:0.9,scaleY:0.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,619,263);


(lib.textbd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.textbd_();
	this.instance.setTransform(317,136,1,1,0,0,0,317,136);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({scaleX:0.9,scaleY:0.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,634,272);


(lib.swim_star_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.swim_star_();
	this.instance.setTransform(116.5,61,1,1,0,0,0,116.5,61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:43},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,233,122);


(lib.swim_leaf_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.swim_leaf_();
	this.instance.setTransform(-1,186,1,1,0,0,0,1.5,186);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({regX:1.4,regY:186.1,rotation:-9,y:186.1},0).wait(3).to({regX:1.5,regY:186,rotation:0,y:186},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,0,297,192);


(lib.swim_bird_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.swim_bird_();
	this.instance.setTransform(124.5,140,1,1,0,0,0,124.5,140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({regY:140.1,rotation:-6.7,x:124.6,y:140.2},0).wait(2).to({regY:140,rotation:0,x:124.5,y:140},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,249,280);


(lib.photohasear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 复制
	this.instance = new lib.earphoneright_1();
	this.instance.setTransform(10,340.8,2.088,2.088,0,0,180,23.5,62.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.instance_1 = new lib.earphoneright_1();
	this.instance_1.setTransform(340.5,340.8,2.088,2.088,0,0,0,23.5,62.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzUX8QoAp6gBuCQABuBIAp8QICp7LSgBQLUABIBJ7QIBJ8AAOBQAAOCoBJ6QoBJ+rUgBQrSABoCp+g");
	mask.setTransform(175,217);

	// 图层 3
	this.instance_2 = new lib.photoimg();
	this.instance_2.setTransform(174.5,217.5,1,1,0,0,0,175.5,216.5);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.1,1,428.8,470.1);


(lib.photo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzUX8QoAp6gBuCQABuBIAp8QICp7LSgBQLUABIBJ7QIBJ8AAOBQAAOCoBJ6QoBJ+rUgBQrSABoCp+g");
	mask.setTransform(175,217);

	// 图层 3
	this.instance = new lib.photoimg();
	this.instance.setTransform(174.5,217.5,1,1,0,0,0,175.5,216.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1,350,433);


(lib.bg_walk_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_128 = function() {
		this.gotoAndPlay(0)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(128).call(this.frame_128).wait(1));

	// 图层 3
	this.instance = new lib.bgwalk_();
	this.instance.setTransform(963.4,305,1,1,0,0,0,561,305);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(82).to({_off:false},0).to({x:561},46).wait(1));

	// 图层 1
	this.instance_1 = new lib.bgwalk_();
	this.instance_1.setTransform(561,305,1,1,0,0,0,561,305);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-561},128).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1122,610);


(lib.bg_run_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_136 = function() {
		this.gotoAndPlay(0)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(136).call(this.frame_136).wait(1));

	// 图层 1
	this.instance = new lib.bgrun_();
	this.instance.setTransform(688.5,305,1,1,0,0,0,688.5,305);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-689.5},136).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1753,610);


(lib.bdman = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_76 = function() {
		this.gotoAndPlay(0)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(76).call(this.frame_76).wait(1));

	// 图层 3
	this.instance = new lib.photohasear();
	this.instance.setTransform(259.7,167.6,0.22,0.22,30,0,0,174.8,217.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({regX:175.1,rotation:28,x:233.7,y:148.7},0).wait(2).to({regX:175.3,regY:217.6,rotation:13,x:193.2,y:108.7},0).wait(2).to({regX:175.5,regY:217.7,rotation:11,x:208.2,y:151.7},0).wait(2).to({regX:175.6,regY:217.8,rotation:9,x:191.2,y:112.7},0).wait(2).to({x:201.2,y:141.7},0).wait(2).to({x:181.2,y:109.7},0).wait(2).to({regX:175.4,regY:217.6,rotation:-57.7,x:53.2,y:227.3},0).wait(2).to({regX:175.3,regY:217.7,rotation:17.3,x:76.1,y:234.8},0).wait(2).to({regX:175.4,regY:217.6,rotation:32.3,x:226.2,y:138.8},0).wait(2).to({regX:175.3,regY:217.9,rotation:2.3,x:161.7,y:126.3},0).wait(2).to({regX:175.2,regY:218,rotation:17.3,x:246.1,y:138.8},0).wait(2).to({x:232.1,y:120.8},0).wait(2).to({x:257.1,y:121.3},0).wait(2).to({x:286.1,y:108.3},0).wait(3).to({regX:175.6,regY:218.2,rotation:2.3,x:297.7,y:113.9},0).wait(3).to({regX:175.8,regY:218.1,rotation:17.3,x:264.8,y:137.9},0).wait(3).to({regY:218.2,rotation:2.3,x:199.3,y:131.3},0).wait(2).to({regX:176,rotation:17.3,x:270.3,y:154.3},0).wait(2).to({regX:176.2,regY:218.5,rotation:-12.7,x:219.9,y:99.8},0).wait(2).to({regX:176.6,regY:218.4,rotation:17.3,x:210.9,y:98.8},0).wait(2).to({x:233.9,y:110.8},0).wait(2).to({x:212.9},0).wait(2).to({regX:176.7,rotation:2.3,x:193,y:99.3},0).wait(2).to({rotation:2.3,x:162.5,y:96.8},0).wait(2).to({regX:176.8,regY:218.3,rotation:17.3,x:176.5,y:97.8},0).wait(2).to({regX:176.9,regY:218.5,rotation:2.3,x:152.6,y:84.3},0).wait(2).to({rotation:2.3,x:172.6,y:104.3},0).wait(2).to({regX:177,regY:218.6,rotation:-2,x:195.5,y:94.3},0).wait(2).to({regX:177.4,regY:219.1,rotation:-8,x:190.6,y:87.8},0).wait(2).to({regX:177.6,rotation:22,x:236.6,y:80.3},0).wait(2).to({x:258.1,y:97.3},0).wait(2).to({regY:219.4,rotation:7,x:252.2,y:107.8},0).wait(2).to({regX:178.8,regY:220.8,rotation:-2,x:257.1,y:127.4},0).wait(2).to({x:184.6,y:104.9},0).wait(2).to({x:179.6,y:84.9},0).wait(2).to({y:94.4},0).wait(2));

	// 图层 1
	this.instance_1 = new lib.bd001();

	this.instance_2 = new lib.bd002();

	this.instance_3 = new lib.bd003();

	this.instance_4 = new lib.bd004();

	this.instance_5 = new lib.bd005();

	this.instance_6 = new lib.bd006();

	this.instance_7 = new lib.bd007();

	this.instance_8 = new lib.bd008();

	this.instance_9 = new lib.bd009();

	this.instance_10 = new lib.bd010();

	this.instance_11 = new lib.bd011();

	this.instance_12 = new lib.bd012();

	this.instance_13 = new lib.bd013();

	this.instance_14 = new lib.bd014();

	this.instance_15 = new lib.bd015();

	this.instance_16 = new lib.bd016();

	this.instance_17 = new lib.bd017();

	this.instance_18 = new lib.bd018();

	this.instance_19 = new lib.bd019();

	this.instance_20 = new lib.bd020();

	this.instance_21 = new lib.bd021();

	this.instance_22 = new lib.bd022();

	this.instance_23 = new lib.bd023();

	this.instance_24 = new lib.bd024();

	this.instance_25 = new lib.bd025();

	this.instance_26 = new lib.bd026();

	this.instance_27 = new lib.bd027();

	this.instance_28 = new lib.bd028();

	this.instance_29 = new lib.bd029();

	this.instance_30 = new lib.bd030();

	this.instance_31 = new lib.bd031();

	this.instance_32 = new lib.bd032();

	this.instance_33 = new lib.bd033();

	this.instance_34 = new lib.bd034();

	this.instance_35 = new lib.bd035();

	this.instance_36 = new lib.bd036();

	this.instance_37 = new lib.bd037();

	this.instance_38 = new lib.bd038();

	this.instance_39 = new lib.bd039();

	this.instance_40 = new lib.bd040();

	this.instance_41 = new lib.bd041();

	this.instance_42 = new lib.bd042();

	this.instance_43 = new lib.bd043();

	this.instance_44 = new lib.bd044();

	this.instance_45 = new lib.bd045();

	this.instance_46 = new lib.bd046();

	this.instance_47 = new lib.bd047();

	this.instance_48 = new lib.bd048();

	this.instance_49 = new lib.bd049();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},2).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_17}]},2).to({state:[{t:this.instance_18}]},2).to({state:[{t:this.instance_19}]},2).to({state:[{t:this.instance_20}]},2).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_22}]},3).to({state:[{t:this.instance_23}]},3).to({state:[{t:this.instance_24}]},2).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},2).to({state:[{t:this.instance_32}]},2).to({state:[{t:this.instance_33}]},2).to({state:[{t:this.instance_34}]},2).to({state:[{t:this.instance_35}]},2).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},2).to({state:[{t:this.instance_45}]},2).to({state:[{t:this.instance_46}]},2).to({state:[{t:this.instance_47}]},2).to({state:[{t:this.instance_48}]},2).to({state:[{t:this.instance_49}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.bd_lightpink_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.bd_lightpink_();
	this.instance.setTransform(65.5,0.4,1,1,0,0,0,65.5,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:47.7,y:0.5},6).to({rotation:0,y:0.4},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,361,849);


(lib.bd_lightblue_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.bd_lightblue_();
	this.instance.setTransform(253.1,0.9,1,1,0,0,0,253.1,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-34.2},6).to({rotation:0},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,324,824);


(lib.walkman = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_35 = function() {
		this.gotoAndPlay(0)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(35).call(this.frame_35).wait(1));

	// 图层 2
	this.instance = new lib.photo();
	this.instance.setTransform(187.7,254.3,0.21,0.21,29.5,0,0,175.5,217.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({x:188.4,y:256.6},0).wait(2).to({x:189.2,y:258.1},0).wait(2).to({regX:175.8,regY:217.8,rotation:34.3,x:190.7,y:259.4},0).wait(2).to({x:190.2},0).wait(2).to({x:190.5,y:259.6},0).wait(2).to({x:190,y:258.4},0).wait(2).to({regX:176,rotation:28.8,x:190.8,y:255.1},0).wait(2).to({x:186.8,y:254.6},0).wait(2).to({regX:176.4,regY:218.2,rotation:28.5,x:189.9,y:255.5},0).wait(2).to({regX:176.5,regY:218.1,rotation:29.8,y:255},0).wait(2).to({regX:176.4,regY:217.8,rotation:29.7,x:189.4,y:256.2},0).wait(2).to({regX:176.5,regY:218.1,rotation:32.7,x:189.2,y:259},0).wait(2).to({regX:176.3,regY:218,rotation:34,x:189.3,y:261.2},0).wait(2).to({regY:217.8,rotation:33.2,x:190.1,y:259},0).wait(2).to({x:187.9,y:259.2},0).wait(2).to({regX:176.5,regY:217.9,rotation:28,x:186.7,y:257.3},0).wait(2).to({regX:176.6,regY:218.2,rotation:22.3,x:187.7,y:255.1},0).wait(2));

	// 图层 1
	this.instance_1 = new lib.walk001();

	this.instance_2 = new lib.walk002();

	this.instance_3 = new lib.walk003();

	this.instance_4 = new lib.walk004();

	this.instance_5 = new lib.walk005();

	this.instance_6 = new lib.walk006();

	this.instance_7 = new lib.walk007();

	this.instance_8 = new lib.walk008();

	this.instance_9 = new lib.walk009();

	this.instance_10 = new lib.walk010();

	this.instance_11 = new lib.walk011();

	this.instance_12 = new lib.walk012();

	this.instance_13 = new lib.walk013();

	this.instance_14 = new lib.walk014();

	this.instance_15 = new lib.walk015();

	this.instance_16 = new lib.walk016();

	this.instance_17 = new lib.walk017();

	this.instance_18 = new lib.walk018();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},2).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_17}]},2).to({state:[{t:this.instance_18}]},2).wait(2));

	// 图层 3
	this.instance_19 = new lib.bg_walk_1();
	this.instance_19.setTransform(561,305,1,1,0,0,0,561,305);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1122,610);


(lib.swimman = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_121 = function() {
		this.gotoAndPlay(0)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(121).call(this.frame_121).wait(1));

	// 图层 3
	this.instance = new lib.photohasear();
	this.instance.setTransform(238.3,583.8,0.112,0.112,39.2,0,0,179,223.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(46).to({_off:false},0).wait(2).to({x:283.9,y:472},0).wait(2).to({x:304.4,y:431.8},0).wait(2).to({x:314.2,y:411},0).wait(2).to({regX:179.5,regY:223.8,rotation:33.8,x:317.2,y:396.3},0).to({_off:true},2).wait(8).to({_off:false,regX:179.2,scaleX:0.13,scaleY:0.13,rotation:-93,x:394,y:44.1},0).wait(2).to({regX:178.6,regY:226,scaleX:0.22,scaleY:0.22,rotation:-85.5,x:318.6,y:47.1},0).wait(2).to({x:279.6,y:45.1},0).wait(2).to({x:264.1,y:48.6},0).wait(2).to({x:221.1},0).wait(2).to({x:96},0).wait(2).to({x:81,y:64.6},0).wait(2).to({x:-16.5,y:49.6},0).to({_off:true},2).wait(42));

	// 图层 2
	this.instance_1 = new lib.photohasear();
	this.instance_1.setTransform(263.7,197.9,0.116,0.116,-35.2,0,0,175,217.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({x:168.7,y:124.9},0).wait(2).to({x:135.7,y:92.9},0).wait(2).to({x:116.7,y:77.9},0).wait(2).to({x:105.4,y:70.7},0).wait(2).to({x:39.4,y:4.2},0).to({_off:true},2).wait(10).to({_off:false,regX:175.3,regY:218,scaleX:0.16,scaleY:0.16,rotation:2.8,x:222,y:150.9},0).wait(2).to({regX:175.4,regY:218.7,rotation:-36.7,x:191.1,y:154.2},0).wait(2).to({regX:175.9,regY:219.2,scaleX:0.19,scaleY:0.19,rotation:-29.8,x:181.7,y:158.5},0).wait(2).to({regX:176.3,regY:220.4,rotation:-6.3,y:144.6},0).wait(2).to({regX:176.8,regY:220.8,scaleX:0.2,scaleY:0.2,rotation:-6.3,x:171.3,y:134.1},0).wait(2).to({regX:177.1,regY:221,rotation:8.7,x:192.8,y:149.6},0).wait(2).to({regY:222.2,scaleX:0.22,scaleY:0.22,rotation:-14,x:168.6,y:161.7},0).wait(2).to({regX:177.5,regY:222.8,scaleX:0.23,scaleY:0.23,rotation:7,x:167.1,y:179},0).wait(2).to({regX:177.6,regY:222.9,rotation:-0.2,x:131.2,y:154},0).wait(2).to({regX:178.2,regY:223.2,scaleX:0.27,scaleY:0.27,rotation:0,x:142.9,y:204},0).wait(2).to({regX:178.3,rotation:5.9,x:115.4,y:210.1},0).wait(2).to({regX:178.4,scaleX:0.28,scaleY:0.28,rotation:-5.8,x:81.2,y:220.3},0).wait(2).to({regX:178.3,regY:223.4,scaleX:0.34,scaleY:0.34,rotation:-5.8,x:-18.8,y:223.9},0).to({_off:true},2).wait(42).to({_off:false,regX:179.5,regY:223.3,scaleX:0.12,scaleY:0.12,rotation:54.2,x:26.9,y:424.3},0).wait(2).to({x:47.4,y:400.3},0).wait(2).to({regX:180.1,regY:223,rotation:49.8,x:56.5,y:391.8},0).wait(2).to({regX:179.5,regY:223.3,rotation:54.2,x:56.4,y:387.8},0).wait(2).to({regX:179.7,regY:223.2,rotation:47.5,x:122,y:308.4},0).wait(2).to({x:166.5,y:271.9},0).wait(2).to({x:194.5,y:248.6},0).wait(2).to({x:227,y:221.6},0).wait(2).to({x:219.5,y:228.1},0).wait(2).to({x:221.8,y:224.6},0).wait(2).to({x:287.8,y:130.6},0).wait(2).to({x:330.8,y:72.5},0).wait(2).to({x:365.8,y:36.5},0).wait(2).to({x:391.3,y:10},0).wait(2).to({x:393.3},0).to({_off:true},2).wait(2));

	// 图层 1
	this.instance_2 = new lib.swim001();

	this.instance_3 = new lib.swim002();

	this.instance_4 = new lib.swim003();

	this.instance_5 = new lib.swim004();

	this.instance_6 = new lib.swim005();

	this.instance_7 = new lib.swim006();

	this.instance_8 = new lib.swim007();

	this.instance_9 = new lib.swim008();

	this.instance_10 = new lib.swim009();

	this.instance_11 = new lib.swim010();

	this.instance_12 = new lib.swim011();

	this.instance_13 = new lib.swim012();

	this.instance_14 = new lib.swim013();

	this.instance_15 = new lib.swim014();

	this.instance_16 = new lib.swim015();

	this.instance_17 = new lib.swim016();

	this.instance_18 = new lib.swim017();

	this.instance_19 = new lib.swim018();

	this.instance_20 = new lib.swim019();

	this.instance_21 = new lib.swim020();

	this.instance_22 = new lib.swim021();

	this.instance_23 = new lib.swim022();

	this.instance_24 = new lib.swim023();

	this.instance_25 = new lib.swim024();

	this.instance_26 = new lib.swim025();

	this.instance_27 = new lib.swim026();

	this.instance_28 = new lib.swim027();

	this.instance_29 = new lib.swim028();

	this.instance_30 = new lib.swim029();

	this.instance_31 = new lib.swim030();

	this.instance_32 = new lib.swim031();

	this.instance_33 = new lib.swim032();

	this.instance_34 = new lib.swim033();

	this.instance_35 = new lib.swim034();

	this.instance_36 = new lib.swim035();

	this.instance_37 = new lib.swim036();

	this.instance_38 = new lib.swim037();

	this.instance_39 = new lib.swim038();

	this.instance_40 = new lib.swim039();

	this.instance_41 = new lib.swim040();

	this.instance_42 = new lib.swim041();

	this.instance_43 = new lib.swim042();

	this.instance_44 = new lib.swim043();

	this.instance_45 = new lib.swim044();

	this.instance_46 = new lib.swim045();

	this.instance_47 = new lib.swim046();

	this.instance_48 = new lib.swim047();

	this.instance_49 = new lib.swim048();

	this.instance_50 = new lib.swim049();

	this.instance_51 = new lib.swim050();

	this.instance_52 = new lib.swim051();

	this.instance_53 = new lib.swim052();

	this.instance_54 = new lib.swim053();

	this.instance_55 = new lib.swim054();

	this.instance_56 = new lib.swim055();

	this.instance_57 = new lib.swim056();

	this.instance_58 = new lib.swim057();

	this.instance_59 = new lib.swim058();

	this.instance_60 = new lib.swim059();

	this.instance_61 = new lib.swim060();

	this.instance_62 = new lib.swim061();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},2).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_17}]},2).to({state:[{t:this.instance_18}]},2).to({state:[{t:this.instance_19}]},2).to({state:[{t:this.instance_20}]},2).to({state:[{t:this.instance_21}]},2).to({state:[{t:this.instance_22}]},2).to({state:[{t:this.instance_23}]},2).to({state:[{t:this.instance_24}]},2).to({state:[{t:this.instance_25}]},2).to({state:[{t:this.instance_26}]},2).to({state:[{t:this.instance_27}]},2).to({state:[{t:this.instance_28}]},2).to({state:[{t:this.instance_29}]},2).to({state:[{t:this.instance_30}]},2).to({state:[{t:this.instance_31}]},2).to({state:[{t:this.instance_32}]},2).to({state:[{t:this.instance_33}]},2).to({state:[{t:this.instance_34}]},2).to({state:[{t:this.instance_35}]},2).to({state:[{t:this.instance_36}]},2).to({state:[{t:this.instance_37}]},2).to({state:[{t:this.instance_38}]},2).to({state:[{t:this.instance_39}]},2).to({state:[{t:this.instance_40}]},2).to({state:[{t:this.instance_41}]},2).to({state:[{t:this.instance_42}]},2).to({state:[{t:this.instance_43}]},2).to({state:[{t:this.instance_44}]},2).to({state:[{t:this.instance_45}]},2).to({state:[{t:this.instance_46}]},2).to({state:[{t:this.instance_47}]},2).to({state:[{t:this.instance_48}]},2).to({state:[{t:this.instance_49}]},2).to({state:[{t:this.instance_50}]},2).to({state:[{t:this.instance_51}]},2).to({state:[{t:this.instance_52}]},2).to({state:[{t:this.instance_53}]},2).to({state:[{t:this.instance_54}]},2).to({state:[{t:this.instance_55}]},2).to({state:[{t:this.instance_56}]},2).to({state:[{t:this.instance_57}]},2).to({state:[{t:this.instance_58}]},2).to({state:[{t:this.instance_59}]},2).to({state:[{t:this.instance_60}]},2).to({state:[{t:this.instance_61}]},2).to({state:[{t:this.instance_62}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,375,610);


(lib.scene_swim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//this.stop();
		createjs.Sound.play('before',{loop:-1})
	}
	this.frame_42 = function() {
		this.stop();
	}
	this.frame_54 = function() {
		createjs.Sound.play('after',{loop:-1})
	}
	this.frame_149 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(42).call(this.frame_42).wait(12).call(this.frame_54).wait(95).call(this.frame_149).wait(1));

	// 图层 8
	this.lookother = new lib.btn_lookother_1();
	this.lookother.setTransform(206.5,1052,1,1,0,0,0,131.5,56);
	this.lookother._off = true;

	this.timeline.addTween(cjs.Tween.get(this.lookother).wait(149).to({_off:false},0).wait(1));

	// 图层 7
	this.what = new lib.btn_what_1();
	this.what.setTransform(542.5,1052,1,1,0,0,0,131.5,56);
	this.what._off = true;

	this.timeline.addTween(cjs.Tween.get(this.what).wait(149).to({_off:false},0).wait(1));

	// 图层 10
	this.instance = new lib.textswim();
	this.instance.setTransform(382.5,162.5,1,1,0,0,0,300.5,126.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(136).to({_off:false},0).wait(14));

	// 图层 13
	this.instance_1 = new lib.swim_bird_1();
	this.instance_1.setTransform(566.5,847,1,1,0,0,0,124.5,140);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({_off:false},0).wait(96));

	// 图层 12
	this.instance_2 = new lib.swim_leaf_1();
	this.instance_2.setTransform(148.5,940,1,1,0,0,0,148.5,96);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({_off:false},0).wait(96));

	// 图层 5
	this.instance_3 = new lib.swimman();
	this.instance_3.setTransform(375,610,2,2,0,0,0,187.5,305);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(54).to({_off:false},0).wait(96));

	// 图层 11
	this.instance_4 = new lib.swim_star_1();
	this.instance_4.setTransform(472.5,226,1,1,0,0,0,116.5,61);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(54).to({_off:false},0).wait(96));

	// 图层 16
	this.instance_5 = new lib.cloud3_1();
	this.instance_5.setTransform(131,1115.5,1,1,0,0,0,134,104.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(54).to({_off:false},0).wait(96));

	// 图层 15
	this.instance_6 = new lib.cloud2_1();
	this.instance_6.setTransform(439,578.5,1,1,0,0,0,311,238.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(54).to({_off:false},0).wait(96));

	// 图层 14
	this.instance_7 = new lib.cloud1_1();
	this.instance_7.setTransform(144.5,171.5,1,1,0,0,0,144.5,171.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(54).to({_off:false},0).wait(96));

	// 图层 1
	this.instance_8 = new lib.bg_swim();
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(54).to({_off:false},0).wait(96));

	// 图层 2
	this.instance_9 = new lib.lang();
	this.instance_9.setTransform(375.5,610,1,1,0,0,0,375.5,610);

	this.instance_10 = new lib.y_00029();

	this.instance_11 = new lib.y_00031();

	this.instance_12 = new lib.y_00033();

	this.instance_13 = new lib.y_00035();

	this.instance_14 = new lib.y_00037();

	this.instance_15 = new lib.y_00039();

	this.instance_16 = new lib.y_00041();

	this.instance_17 = new lib.y_00043();

	this.instance_18 = new lib.y_00045();

	this.instance_19 = new lib.y_00047();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},43).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[]},1).wait(96));

	// 图层 6
	this.earphone = new lib.earphone_1();
	this.earphone.setTransform(368,994,1,1,0,0,0,136,127);
	this.earphone._off = true;

	this.timeline.addTween(cjs.Tween.get(this.earphone).wait(42).to({_off:false},0).to({_off:true},1).wait(107));

	// 图层 9
	this.instance_20 = new lib.textswim1();
	this.instance_20.setTransform(46,28);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(17).to({_off:false},0).wait(133));

	// 图层 3
	this.instance_21 = new lib.photo();
	this.instance_21.setTransform(175.7,543.8,0.439,0.439,-27,0,0,174.7,217.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({_off:true},54).wait(96));

	// 图层 4
	this.instance_22 = new lib.bg_home();

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({_off:true},54).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.scene_bd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{afteruse:49});

	// timeline functions:
	this.frame_0 = function() {
		//this.stop()
		createjs.Sound.play('before',{loop:-1})
	}
	this.frame_48 = function() {
		this.stop()
	}
	this.frame_53 = function() {
		createjs.Sound.play('after',{loop:-1})
	}
	this.frame_137 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(48).call(this.frame_48).wait(5).call(this.frame_53).wait(84).call(this.frame_137).wait(1));

	// 图层 8
	this.lookother = new lib.btn_lookother_1();
	this.lookother.setTransform(206.5,1052,1,1,0,0,0,131.5,56);
	this.lookother._off = true;

	this.timeline.addTween(cjs.Tween.get(this.lookother).wait(137).to({_off:false},0).wait(1));

	// 图层 7
	this.what = new lib.btn_what_1();
	this.what.setTransform(542.5,1052,1,1,0,0,0,131.5,56);
	this.what._off = true;

	this.timeline.addTween(cjs.Tween.get(this.what).wait(137).to({_off:false},0).wait(1));

	// 图层 12
	this.instance = new lib.textbd();
	this.instance.setTransform(396,148,1,1,0,0,0,317,136);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(124).to({_off:false},0).wait(14));

	// 图层 15
	this.instance_1 = new lib.bd_textlight();
	this.instance_1.setTransform(374,1147.5,1,1,0,0,0,354,55.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).wait(89));

	// 图层 3
	this.instance_2 = new lib.bd_cover();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49).to({_off:false},0).wait(89));

	// 图层 5
	this.instance_3 = new lib.bdman();
	this.instance_3.setTransform(375,610,2,2,0,0,0,187.5,305);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(49).to({_off:false},0).wait(89));

	// 图层 16
	this.instance_4 = new lib.disco();
	this.instance_4.setTransform(98,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(49).to({_off:false},0).wait(89));

	// 图层 14
	this.instance_5 = new lib.bd_lightpink_1();
	this.instance_5.setTransform(528.5,424.5,1,1,0,0,0,180.5,424.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(49).to({_off:false},0).wait(89));

	// 图层 13
	this.instance_6 = new lib.bd_lightblue_1();
	this.instance_6.setTransform(238,412,1,1,0,0,0,162,412);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(49).to({_off:false},0).wait(89));

	// 图层 1
	this.instance_7 = new lib.bg_bd();
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(49).to({_off:false},0).wait(89));

	// 图层 6
	this.earphone = new lib.earphone_1();
	this.earphone.setTransform(368,994,1,1,0,0,0,136,127);
	this.earphone._off = true;

	this.timeline.addTween(cjs.Tween.get(this.earphone).wait(48).to({_off:false},0).to({_off:true},1).wait(89));

	// 图层 11
	this.instance_8 = new lib.textbd1();
	this.instance_8.setTransform(92,63);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(18).to({_off:false},0).wait(120));

	// 图层 9
	this.instance_9 = new lib.photo();
	this.instance_9.setTransform(375.5,481.7,0.558,0.558,0,0,0,174.5,217);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},49).wait(89));

	// 图层 10
	this.instance_10 = new lib.bdpc();
	this.instance_10.setTransform(283,765);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},49).wait(89));

	// 图层 2
	this.instance_11 = new lib.workbody();
	this.instance_11.setTransform(374.5,577,1,1,0,0,0,297.5,210);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},49).wait(89));

	// 图层 4
	this.instance_12 = new lib.bg_work();

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},49).wait(89));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


(lib.runman = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_76 = function() {
		this.gotoAndPlay(0)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(76).call(this.frame_76).wait(1));

	// 图层 3
	this.instance = new lib.photohasear();
	this.instance.setTransform(153.1,184.7,0.185,0.185,0,0,0,174.4,217.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({regX:174.8,regY:217.3,rotation:-6.5,x:158.9,y:173.7},0).wait(2).to({x:164.2,y:177.7},0).wait(2).to({x:166.9,y:206.2},0).wait(2).to({regX:175.1,regY:217.7,rotation:-6.2,x:166.3,y:209.5},0).wait(2).to({regX:174.9,regY:217.8,rotation:8.8,x:161.4,y:212.3},0).wait(2).to({regX:175.2,regY:217.5,rotation:15.6,x:164.4,y:196.5},0).wait(2).to({regY:217.6,rotation:8.7,x:153.2,y:182.5},0).wait(2).to({regX:175.1,regY:217.5,rotation:-13.2,x:159.9,y:172.7},0).wait(2).to({regX:175.2,regY:217.7,scaleX:0.18,scaleY:0.18,x:183.8,y:173.8},0).wait(1).to({regX:175.5,regY:218.1,scaleX:0.18,scaleY:0.18,rotation:-15.9,x:203.8,y:183.8},0).wait(1).to({regX:176.3,regY:219.4,rotation:-12.3,x:199,y:177.2},0).wait(1).to({regX:176,regY:218.5,rotation:-21.6,x:198.5,y:167.3},0).wait(1).to({regY:218.7,rotation:-19.1,x:199.3,y:165.2},0).wait(1).to({regX:176.3,regY:218.8,rotation:-20.5,x:199.1,y:167.8},0).wait(1).to({regX:176,rotation:-8.1,x:199.4,y:177.1},0).wait(1).to({regX:176.2,rotation:-12.3,x:204,y:183.3},0).wait(1).to({regX:176.1,regY:219.4,rotation:-13.1,x:184.6,y:173.7},0).wait(1).to({regY:218.8,rotation:-17.1,x:186.1,y:206},0).wait(1).to({regX:176.6,regY:219.4,rotation:13.6,x:198.5,y:212.8},0).wait(1).to({regX:176.1,regY:219.3,rotation:10.6,x:203.4,y:197.8},0).wait(1).to({regX:176.4,regY:219,rotation:-15.6,x:184.8,y:174.1},0).wait(1).to({regX:176.6,regY:219.5,rotation:-9.6,x:204.5,y:183.2},0).wait(1).to({regX:176.2,regY:219,rotation:-10.9,x:199.4,y:176.9},0).wait(1).to({regX:176.7,regY:219.3,rotation:-17.6,x:198.9,y:167.8},0).wait(1).to({regX:176.3,regY:219.5,rotation:-27.2,x:199.1,y:165.5},0).wait(1).to({regX:176.8,regY:219.4,rotation:-18.9,x:199.2,y:168},0).wait(1).to({regX:176.3,regY:219.6,rotation:-11.7,x:198.9,y:177.2},0).wait(1).to({regX:176.2,regY:219.3,rotation:-11.5,x:204.9,y:183.1},0).wait(1).to({regY:219.6,rotation:-9.1,x:184.3,y:173.3},0).wait(1).to({regX:176.5,rotation:-16.1,x:186.3,y:205.9},0).wait(1).to({regX:176.4,regY:219.4,rotation:6.5,x:197.4,y:212.9},0).wait(1).to({regX:176.5,regY:219.6,rotation:9.4,x:204.1,y:198},0).wait(1).to({regX:176.8,regY:220,rotation:4.1,x:196,y:198.6},0).wait(1).to({regY:220.1,rotation:9.6,x:200,y:198.1},0).wait(1).to({regX:176.6,regY:220,rotation:10.4,x:210.9,y:201},0).wait(1).to({regY:220.2,x:217,y:203.1},0).wait(1).to({regX:176.5,regY:219.8,rotation:5.1,x:217.7,y:190},0).wait(1).to({regX:176.4,regY:219.9,rotation:-4.6,x:211.7,y:179.5},0).wait(1).to({regX:176.6,regY:220,rotation:-0.4,x:212.2,y:175.7},0).wait(1).to({rotation:-0.4,x:212.5,y:174.7},0).wait(1).to({regX:176.7,regY:219.9,rotation:-7.9,x:201.3,y:174.2},0).wait(1).to({regX:176.6,regY:220,rotation:-0.4,x:187.1,y:172.7},0).wait(1).to({rotation:-0.4,x:181.6,y:175.6},0).wait(1).to({regX:176.7,regY:220.2,rotation:5.8,x:211.7,y:202.5},0).wait(1).to({x:217.2,y:203.7},0).wait(1).to({regY:220.3,rotation:12.3,x:216.9,y:189.9},0).wait(1).to({regX:177,regY:220.9,rotation:-6.2,x:211.5,y:180},0).wait(1).to({rotation:-6.2,y:175.5},0).wait(1).to({regY:221,rotation:1,x:213},0).wait(1).to({regX:177.3,regY:221.5,rotation:-15.5,x:202,y:175.1},0).wait(1).to({regY:221.8,rotation:1.8,x:188.1,y:171.7},0).wait(1).to({rotation:1.8,x:181.1,y:176.2},0).wait(1).to({x:177.1,y:175.7},0).wait(1).to({x:179.1,y:173.2},0).wait(1).to({regY:222,rotation:-6.1,x:184.6,y:168.8},0).wait(1).to({regX:177.2,regY:222.1,rotation:0.4,x:191.1,y:163.3},0).wait(1).to({rotation:0.4,x:208.1},0).wait(1).to({x:191.6},0).wait(1).to({regY:222.3,rotation:-5.9,x:184.6,y:168.3},0).wait(1).to({regX:177.6,regY:222.6,rotation:1.6,x:179.1,y:171.9},0).wait(1).to({rotation:1.6,x:177.1,y:175.4},0).wait(1).to({x:179.1,y:172.4},0).wait(1).to({regX:177.9,regY:223,rotation:-5.1,x:184.7,y:168.4},0).wait(1).to({x:191.2,y:162.9},0).wait(1).to({x:208.2},0).wait(1).to({regX:178.1,regY:223.2,rotation:0.6,x:214.7,y:168.9},0).wait(1).to({rotation:0.6,x:213.2,y:180.4},0).wait(1));

	// 1-9
	this.instance_1 = new lib.run001();

	this.instance_2 = new lib.run002();

	this.instance_3 = new lib.run003();

	this.instance_4 = new lib.run004();

	this.instance_5 = new lib.run005();

	this.instance_6 = new lib.run006();

	this.instance_7 = new lib.run007();

	this.instance_8 = new lib.run008();

	this.instance_9 = new lib.run009();

	this.instance_10 = new lib.run010();

	this.instance_11 = new lib.run011();

	this.instance_12 = new lib.run012();

	this.instance_13 = new lib.run013();

	this.instance_14 = new lib.run014();

	this.instance_15 = new lib.run015();

	this.instance_16 = new lib.run016();

	this.instance_17 = new lib.run017();

	this.instance_18 = new lib.run018();

	this.instance_19 = new lib.run019();

	this.instance_20 = new lib.run020();

	this.instance_21 = new lib.run021();

	this.instance_22 = new lib.run022();

	this.instance_23 = new lib.run023();

	this.instance_24 = new lib.run024();

	this.instance_25 = new lib.run025();

	this.instance_26 = new lib.run026();

	this.instance_27 = new lib.run027();

	this.instance_28 = new lib.run028();

	this.instance_29 = new lib.run029();

	this.instance_30 = new lib.run030();

	this.instance_31 = new lib.run031();

	this.instance_32 = new lib.run032();

	this.instance_33 = new lib.run033();

	this.instance_34 = new lib.run034();

	this.instance_35 = new lib.run035();

	this.instance_36 = new lib.run036();

	this.instance_37 = new lib.run037();

	this.instance_38 = new lib.run038();

	this.instance_39 = new lib.run039();

	this.instance_40 = new lib.run040();

	this.instance_41 = new lib.run041();

	this.instance_42 = new lib.run042();

	this.instance_43 = new lib.run043();

	this.instance_44 = new lib.run044();

	this.instance_45 = new lib.run045();

	this.instance_46 = new lib.run046();

	this.instance_47 = new lib.run047();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).wait(1));

	// 图层 2
	this.instance_48 = new lib.bg_run_1();
	this.instance_48.setTransform(688.5,305,1,1,0,0,0,688.5,305);

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(77));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1753,610);


(lib.scene_walk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//this.stop()
		//createjs.Sound.stop()
		createjs.Sound.play('before',{loop:-1})
	}
	this.frame_71 = function() {
		this.stop()
	}
	this.frame_74 = function() {
		createjs.Sound.play('after',{loop:-1})
	}
	this.frame_192 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(71).call(this.frame_71).wait(3).call(this.frame_74).wait(118).call(this.frame_192).wait(1));

	// 图层 8
	this.lookother = new lib.btn_lookother_1();
	this.lookother.setTransform(206.5,1052,1,1,0,0,0,131.5,56);
	this.lookother._off = true;

	this.timeline.addTween(cjs.Tween.get(this.lookother).wait(192).to({_off:false},0).wait(1));

	// 图层 7
	this.what = new lib.btn_what_1();
	this.what.setTransform(542.5,1052,1,1,0,0,0,131.5,56);
	this.what._off = true;

	this.timeline.addTween(cjs.Tween.get(this.what).wait(192).to({_off:false},0).wait(1));

	// 图层 5
	this.instance = new lib.textrun();
	this.instance.setTransform(339.5,156.5,1,1,0,0,0,309.5,131.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(181).to({_off:false},0).wait(12));

	// 图层 6
	this.instance_1 = new lib.runman();
	this.instance_1.setTransform(375,610,2,2,0,0,0,187.5,305);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(72).to({_off:false},0).wait(121));

	// 图层 7
	this.earphone = new lib.earphone_1();
	this.earphone.setTransform(368,994,1,1,0,0,0,136,127);
	this.earphone._off = true;

	this.timeline.addTween(cjs.Tween.get(this.earphone).wait(71).to({_off:false},0).to({_off:true},1).wait(121));

	// 图层 3
	this.instance_2 = new lib.textwalk1();
	this.instance_2.setTransform(37,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},72).wait(121));

	// 图层 4
	this.instance_3 = new lib.walkman();
	this.instance_3.setTransform(375,610,2,2,0,0,0,187.5,305);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},72).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2244,1220);


(lib.all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{walk:2,bd:1,swim:0});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// 图层 1
	this.s1 = new lib.scene_walk();
	this.s1.setTransform(1122,610,1,1,0,0,0,1122,610);
	this.s1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s1).wait(2).to({_off:false},0).wait(1));

	// 图层 2
	this.s2 = new lib.scene_bd();
	this.s2.setTransform(375,610,1,1,0,0,0,375,610);
	this.s2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.s2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// 图层 3
	this.s3 = new lib.scene_swim();
	this.s3.setTransform(375,610,1,1,0,0,0,375,610);

	this.timeline.addTween(cjs.Tween.get(this.s3).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1220);


// stage content:



(lib.dy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.all();
	this.instance.setTransform(1122,610,1,1,0,0,0,1122,610);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(375,610,750,1220);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;