var 
canvas,
stage,
ma,
els,
dataResult = {},
app = {},
$stopmask = $('.stopmask'),
$scroller = $('#scroller'),
isIOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
app.resPath = NETEASE_CONf.resPath; //资源路径配置
app.rootPath = NETEASE_CONf.rootPath || './'; //html根路径

//loading资源的初始化
app.initLoading = function (){
	canvas = document.getElementById("canvas");
	images = images||{};

	var loader = new createjs.LoadQueue(false,null,'Anonymous');	
	loader.addEventListener("fileload", app.handleFileLoad);
	loader.addEventListener("complete", function (){
		stage = new createjs.Stage(canvas);
		createjs.Ticker.setFPS(36);
		createjs.Ticker.addEventListener("tick", stage);
		createjs.Touch.enable(stage);
		app.loading = new lib.loading();
		stage.addChild(app.loading);
		$('#loadgif').hide();
		app.init();
	});
	loader.loadManifest([
		{src:app.resPath+"images/bg_01.jpg", id:"bg_01"},
		{src:app.resPath+"images/s1_desc01.png", id:"s1_desc01"},
		{src:app.resPath+"images/s1_desc02.png", id:"s1_desc02"},
		{src:app.resPath+"images/s1_desc03.png", id:"s1_desc03"},
		{src:app.resPath+"images/s1_desc04.png", id:"s1_desc04"},
	])
}
//应用初始化
app.init = function (){

	var loader = new createjs.LoadQueue(false,app.resPath,'Anonymous');
	loader.addEventListener("fileload", app.handleFileLoad);
	loader.addEventListener("progress", app.handleProgress);
	loader.addEventListener("complete", app.handleLoadingComplete);
	loader.loadManifest([
		{src:app.resPath+"images/bg_01.jpg", id:"bg_01"},
		{src:app.resPath+"images/bg_02.jpg", id:"bg_02"},
		{src:app.resPath+"images/bg_03.jpg", id:"bg_03"},
		{src:app.resPath+"images/bg_04.jpg", id:"bg_04"},
		{src:app.resPath+"images/bg_05.jpg", id:"bg_05"},
		{src:app.resPath+"images/bg_06.jpg", id:"bg_06"},
		{src:app.resPath+"images/bg_07.jpg", id:"bg_07"},
		{src:app.resPath+"images/bg_08.jpg", id:"bg_08"},
		{src:app.resPath+"images/s4_leaf.png", id:"s4_leaf"},
		{src:app.resPath+"images/floor_s4.png", id:"floor_s4"},
		{src:app.resPath+"images/s3_floor01.png", id:"s3_floor01"},
		{src:app.resPath+"images/s3_floor02.png", id:"s3_floor02"},
		{src:app.resPath+"images/s3_floor03.png", id:"s3_floor03"},
		{src:app.resPath+"images/s3_floor04.png", id:"s3_floor04"},
		{src:app.resPath+"images/s5_floor01.png", id:"s5_floor01"},
		{src:app.resPath+"images/s5_floor02.png", id:"s5_floor02"},
		{src:app.resPath+"images/s5_floor03.png", id:"s5_floor03"},
		{src:app.resPath+"images/s5_floor04.png", id:"s5_floor04"},
		{src:app.resPath+"images/s5_floor05.png", id:"s5_floor05"},
		{src:app.resPath+"images/s5_snow.png", id:"s5_snow"},
		{src:app.resPath+"images/s6_girl00.png", id:"s6_girl00"},
		{src:app.resPath+"images/s6_girl01.png", id:"s6_girl01"},
		{src:app.resPath+"images/s6_girl02.png", id:"s6_girl02"},
		{src:app.resPath+"images/s6_girl03.png", id:"s6_girl03"},
		{src:app.resPath+"images/s6_girl04.png", id:"s6_girl04"},
		{src:app.resPath+"images/s6_girl05.png", id:"s6_girl05"},
		{src:app.resPath+"images/s6_girl06.png", id:"s6_girl06"},
		{src:app.resPath+"images/s6_girl07.png", id:"s6_girl07"},
		{src:app.resPath+"images/s6_girl08.png", id:"s6_girl08"},
		{src:app.resPath+"images/s6_girl09.png", id:"s6_girl09"},
		{src:app.resPath+"images/s6_girl10.png", id:"s6_girl10"},
		{src:app.resPath+"images/s6_girl11.png", id:"s6_girl11"},
		{src:app.resPath+"images/s6_girl12.png", id:"s6_girl12"},
		{src:app.resPath+"images/s6_girl13.png", id:"s6_girl13"},
		{src:app.resPath+"images/s6_girl14.png", id:"s6_girl14"},
		{src:app.resPath+"images/s6_girl15.png", id:"s6_girl15"},
		{src:app.resPath+"images/s6_girl16.png", id:"s6_girl16"},
		{src:app.resPath+"images/s6_girl17.png", id:"s6_girl17"},
		{src:app.resPath+"images/s6_girl18.png", id:"s6_girl18"},
		{src:app.resPath+"images/s6_girl19.png", id:"s6_girl19"},
		{src:app.resPath+"images/s6_girl20.png", id:"s6_girl20"},
		{src:app.resPath+"images/s6_girl21.png", id:"s6_girl21"},
		{src:app.resPath+"images/s6_girl22.png", id:"s6_girl22"},
		{src:app.resPath+"images/s6_girl23.png", id:"s6_girl23"},

		{src:app.resPath+"images/loop_leaf01.png", id:"loop_leaf01"},
		{src:app.resPath+"images/loop_leaf02.png", id:"loop_leaf02"},
		{src:app.resPath+"images/loop_sakura01.png", id:"loop_sakura01"},
		{src:app.resPath+"images/loop_sakura02.png", id:"loop_sakura02"},
		{src:app.resPath+"images/loop_snow01.png", id:"loop_snow01"},
		{src:app.resPath+"images/loop_snow02.png", id:"loop_snow02"},

		// {src:app.resPath+"images/atlas_s1_.json", type:"spritesheet", id:"atlas_s1_"},
		// {src:app.resPath+"images/atlas_s2_.json", type:"spritesheet", id:"atlas_s2_"},
		// {src:app.resPath+"images/atlas_s3_.json", type:"spritesheet", id:"atlas_s3_"},
		// {src:app.resPath+"images/atlas_s4_.json", type:"spritesheet", id:"atlas_s4_"},
		// {src:app.resPath+"images/atlas_s5_.json", type:"spritesheet", id:"atlas_s5_"},
		// {src:app.resPath+"images/atlas_s6_.json", type:"spritesheet", id:"atlas_s6_"}

		{src:app.resPath+"images/atlas_s1_.png", id:"atlas_s1_"},
		{src:app.resPath+"images/atlas_s2_.png", id:"atlas_s2_"},
		{src:app.resPath+"images/atlas_s3_.png", id:"atlas_s3_"},
		{src:app.resPath+"images/atlas_s4_.png", id:"atlas_s4_"},
		{src:app.resPath+"images/atlas_s5_.png", id:"atlas_s5_"},
		{src:app.resPath+"images/atlas_s6_.png", id:"atlas_s6_"},
		{src:app.resPath+"images/atlas_result_.png", id:"atlas_result_"},
	]);
}

lib.ssMetadata = [
	{

		"name": "atlas_s1_",

		"frames": [
		    [2, 2, 750, 1108, 0, 0, -36],
		    [2, 1114, 376, 422, 0, 0, -84],
		    [756, 2, 376, 388, 0, 0, -2],
		    [2, 1540, 220, 382, 0, -392, -546],
		    [382, 1114, 220, 382, 0, -392, -546],
		    [382, 1114, 220, 382, 0, -392, -546],
		    [756, 394, 220, 382, 0, -392, -546],
		    [756, 394, 220, 382, 0, -392, -546],
		    [1136, 2, 220, 382, 0, -392, -546],
		    [1136, 2, 220, 382, 0, -392, -546],
		    [756, 780, 220, 382, 0, -392, -546],
		    [756, 780, 220, 382, 0, -392, -546],
		    [980, 394, 142, 396, 0, 0, 0],
		    [226, 1540, 220, 382, 0, -392, -546],
		    [226, 1540, 220, 382, 0, -392, -546],
		    [980, 794, 220, 382, 0, -392, -546],
		    [980, 794, 220, 382, 0, -392, -546],
		    [450, 1500, 220, 382, 0, -392, -546],
		    [450, 1500, 220, 382, 0, -392, -546],
		    [1360, 2, 102, 356, 0, -280, -416],
		    [1360, 2, 102, 356, 0, -280, -416],
		    [606, 1114, 102, 356, 0, -280, -416],
		    [606, 1114, 102, 356, 0, -280, -416],
		    [712, 1166, 220, 382, 0, -392, -546],
		    [712, 1166, 220, 382, 0, -392, -546],
		    [936, 1180, 220, 382, 0, -392, -546],
		    [936, 1180, 220, 382, 0, -392, -546],
		    [674, 1552, 220, 382, 0, -392, -546],
		    [674, 1552, 220, 382, 0, -392, -546],
		    [898, 1566, 220, 382, 0, -392, -546],
		    [898, 1566, 220, 382, 0, -392, -546],
		    [1466, 2, 102, 356, 0, -280, -416],
		    [1160, 1180, 220, 382, 0, -392, -546],
		    [1122, 1566, 100, 356, 0, -282, -416],
		    [1122, 1566, 100, 356, 0, -282, -416],
		    [1226, 1566, 100, 356, 0, -282, -416],
		    [1226, 1566, 100, 356, 0, -282, -416],
		    [1330, 1566, 90, 356, 0, -292, -416],
		    [1126, 394, 90, 356, 0, -292, -416],
		    [1126, 394, 90, 356, 0, -292, -416],
		    [1220, 388, 98, 356, 0, -284, -416],
		    [1220, 388, 98, 356, 0, -284, -416],
		    [1322, 388, 90, 356, 0, -292, -416],
		    [1322, 388, 90, 356, 0, -292, -416],
		    [1416, 362, 96, 356, 0, -286, -416],
		    [1416, 362, 96, 356, 0, -286, -416],
		    [1204, 754, 92, 356, 0, -290, -416],
		    [1204, 754, 92, 356, 0, -290, -416],
		    [1300, 748, 94, 356, 0, -288, -416],
		    [1300, 748, 94, 356, 0, -288, -416],
		    [1398, 748, 92, 356, 0, -290, -416],
		    [1398, 748, 92, 356, 0, -290, -416],
		    [1384, 1108, 188, 142, 0, 0, 0],
		    [1384, 1254, 104, 244, 0, 0, 0],
		    [1492, 1254, 68, 196, 0, 0, 0],
		    [1424, 1502, 98, 224, 0, 0, 0],
		    [1424, 1730, 130, 144, 0, 0, 0],
		    [1494, 722, 78, 100, 0, 0, 0],
		    [1424, 1878, 82, 86, 0, 0, 0],
		    [1204, 1114, 68, 46, 0, 0, 0],
		    [382, 1500, 22, 32, 0, 0, 0],
		    [712, 1114, 20, 18, 0, 0, 0],
		    [736, 1114, 16, 14, 0, 0, 0]
		]
	},
	{

		"name": "atlas_s2_",

		"frames": [
		    [2, 2, 750, 344, 0, 0, 0],
		    [756, 2, 488, 532, 0, 0, -44],
		    [2, 350, 376, 444, 0, 0, -66],
		    [382, 350, 248, 412, 0, -378, -440],
		    [634, 350, 108, 288, 0, 0, 0],
		    [746, 538, 248, 412, 0, -378, -440],
		    [998, 538, 248, 412, 0, -378, -440],
		    [634, 642, 102, 216, 0, 0, 0],
		    [382, 766, 248, 412, 0, -378, -440],
		    [634, 862, 100, 256, 0, 0, 0],
		    [2, 798, 248, 412, 0, -378, -440],
		    [254, 798, 96, 136, 0, 0, 0],
		    [354, 798, 22, 22, 0, 0, 0],
		    [254, 938, 70, 216, 0, -424, -488],
		    [328, 938, 50, 116, 0, -542, -462],
		    [328, 1058, 50, 116, 0, -542, -462],
		    [254, 1158, 70, 216, 0, -424, -488],
		    [2, 1214, 248, 412, 0, -378, -440],
		    [328, 1178, 50, 36, 0, 0, 0],
		    [2, 1630, 140, 334, 0, -430, -426],
		    [2, 1968, 46, 26, 0, 0, 0],
		    [2, 1998, 46, 24, 0, 0, 0],
		    [146, 1630, 64, 218, 0, -430, -488],
		    [146, 1852, 44, 144, 0, -544, -570],
		    [194, 1852, 42, 144, 0, -544, -570],
		    [214, 1630, 64, 218, 0, -430, -488],
		    [254, 1378, 62, 218, 0, -432, -488],
		    [282, 1600, 248, 412, 0, -378, -440],
		    [240, 1852, 38, 144, 0, -544, -570],
		    [320, 1378, 62, 218, 0, -432, -488],
		    [386, 1182, 248, 412, 0, -378, -440],
		    [328, 1218, 54, 114, 0, -542, -462],
		    [534, 1598, 248, 412, 0, -378, -440],
		    [638, 1122, 248, 412, 0, -378, -440],
		    [738, 954, 42, 144, 0, -544, -570],
		    [784, 954, 40, 144, 0, -544, -570],
		    [828, 954, 46, 142, 0, -544, -570],
		    [878, 954, 46, 142, 0, -544, -570],
		    [928, 954, 248, 412, 0, -378, -440],
		    [1180, 954, 68, 216, 0, -426, -488],
		    [1180, 1174, 68, 216, 0, -426, -488],
		    [890, 1370, 230, 204, 0, -8, -8],
		    [1124, 1370, 52, 114, 0, -542, -462],
		    [1180, 1394, 68, 216, 0, -426, -488],
		    [1124, 1488, 52, 114, 0, -542, -462],
		    [786, 1538, 66, 216, 0, -428, -488],
		    [786, 1758, 62, 218, 0, -432, -488],
		    [852, 1758, 66, 216, 0, -428, -488],
		    [856, 1606, 46, 142, 0, -544, -570],
		    [906, 1606, 44, 142, 0, -544, -570],
		    [954, 1578, 56, 114, 0, -542, -462],
		    [1014, 1578, 56, 114, 0, -542, -462],
		    [1074, 1578, 46, 116, 0, -542, -462],
		    [1124, 1606, 48, 116, 0, -542, -462],
		    [1176, 1614, 54, 114, 0, -542, -462],
		    [954, 1696, 54, 114, 0, -542, -462],
		    [1012, 1696, 54, 68, 0, 0, 0],
		    [1070, 1698, 48, 116, 0, -542, -462],
		    [1122, 1726, 48, 72, 0, -546, -562],
		    [1012, 1768, 46, 74, 0, -548, -560],
		    [1174, 1732, 46, 72, 0, -544, -562],
		    [1122, 1802, 46, 72, 0, -542, -560],
		    [1062, 1818, 46, 72, 0, -546, -562],
		    [1112, 1878, 40, 142, 0, -544, -572],
		    [1156, 1878, 38, 142, 0, -544, -572],
		    [1198, 1808, 46, 70, 0, -542, -562],
		    [1198, 1882, 44, 72, 0, -542, -560],
		    [1198, 1958, 44, 72, 0, -542, -560],
		    [922, 1814, 44, 72, 0, -544, -560],
		    [970, 1814, 36, 142, 0, -544, -572],
		    [922, 1890, 44, 72, 0, -546, -560],
		    [970, 1960, 44, 72, 0, -548, -560],
		    [1010, 1846, 44, 72, 0, -548, -560]
		]
	},

	{
		"name": "atlas_s3_",

		"frames": [
		    [2, 2, 1102, 410, 0, 0, -26],
		    [2, 416, 750, 728, 0, 0, -20],
		    [2, 1148, 494, 466, 0, 0, 0],
		    [756, 416, 376, 542, 0, 0, -46],
		    [500, 1148, 216, 274, 0, 0, 0],
		    [1108, 2, 134, 356, 0, -364, -512],
		    [1246, 2, 134, 356, 0, -364, -512],
		    [1384, 2, 134, 356, 0, -364, -512],
		    [1522, 2, 132, 356, 0, -364, -512],
		    [1658, 2, 130, 356, 0, -364, -512],
		    [1792, 2, 130, 356, 0, -364, -512],
		    [1136, 362, 128, 356, 0, -364, -512],
		    [1268, 362, 126, 356, 0, -364, -512],
		    [1398, 362, 126, 356, 0, -364, -512],
		    [1528, 362, 124, 356, 0, -364, -512],
		    [1656, 362, 124, 356, 0, -364, -512],
		    [1784, 362, 122, 356, 0, -364, -512],
		    [1136, 722, 138, 268, 0, 0, 0],
		    [1278, 722, 138, 268, 0, 0, 0],
		    [1420, 722, 134, 258, 0, 0, 0],
		    [1558, 722, 134, 246, 0, -410, -538],
		    [1696, 722, 132, 246, 0, -412, -538],
		    [1832, 722, 132, 246, 0, -410, -538],
		    [756, 962, 128, 246, 0, -410, -538],
		    [888, 962, 126, 246, 0, -416, -538],
		    [1018, 962, 114, 250, 0, -422, -538],
		    [1136, 994, 120, 248, 0, -414, -538],
		    [1260, 994, 120, 248, 0, -418, -538],
		    [720, 1212, 112, 250, 0, -418, -538],
		    [836, 1212, 108, 250, 0, -424, -538],
		    [500, 1426, 184, 102, 0, -8, 0],
		    [948, 1216, 106, 250, 0, -422, -538],
		    [1384, 994, 106, 252, 0, -424, -538],
		    [1494, 984, 106, 358, 0, -428, -490],
		    [1058, 1216, 74, 170, 0, -4, 0],
		    [1136, 1246, 184, 102, 0, -8, 0],
		    [1604, 972, 182, 102, 0, -8, 0],
		    [1604, 1078, 182, 102, 0, -8, 0],
		    [1604, 1184, 182, 102, 0, -10, 0],
		    [1790, 972, 180, 102, 0, -8, 0],
		    [1790, 1078, 180, 102, 0, -8, 0],
		    [1790, 1184, 180, 102, 0, -10, 0],
		    [1926, 2, 74, 170, 0, -4, 0],
		    [1604, 1290, 182, 102, 0, -10, 0],
		    [1790, 1290, 182, 102, 0, -10, 0],
		    [1136, 1352, 182, 102, 0, -10, 0],
		    [688, 1466, 182, 102, 0, -8, 0],
		    [1324, 1250, 156, 94, 0, -20, 0],
		    [1910, 362, 80, 170, 0, 0, 0],
		    [1910, 536, 80, 170, 0, 0, 0],
		    [500, 1532, 94, 82, 0, 0, 0],
		    [1926, 176, 32, 130, 0, -4, 0],
		    [1962, 176, 32, 130, 0, -4, 0],
		    [1968, 710, 30, 130, 0, -4, 0],
		    [874, 1466, 30, 130, 0, -6, 0],
		    [908, 1466, 28, 130, 0, -6, 0],
		    [940, 1470, 28, 130, 0, -6, 0],
		    [972, 1470, 28, 130, 0, -6, 0],
		    [1004, 1470, 26, 130, 0, -6, 0],
		    [1034, 1470, 26, 130, 0, -6, 0],
		    [1064, 1458, 26, 130, 0, -6, 0],
		    [1094, 1458, 26, 130, 0, -6, 0],
		    [1124, 1458, 26, 130, 0, -6, 0],
		    [1322, 1352, 80, 170, 0, 0, 0],
		    [1406, 1348, 78, 170, 0, 0, 0],
		    [1488, 1346, 80, 170, 0, 0, 0],
		    [1572, 1396, 78, 170, 0, 0, 0],
		    [1654, 1396, 78, 170, 0, -2, 0],
		    [1736, 1396, 78, 170, 0, -2, 0],
		    [1818, 1396, 76, 170, 0, -2, 0],
		    [1898, 1396, 76, 170, 0, -2, 0],
		    [598, 1532, 38, 42, 0, -444, -474],
		    [598, 1578, 38, 40, 0, -432, -514],
		    [1926, 310, 42, 36, 0, -428, -514],
		    [1058, 1390, 38, 40, 0, -432, -514],
		    [1154, 1458, 40, 38, 0, -430, -514],
		    [640, 1532, 38, 40, 0, -444, -474],
		    [640, 1576, 36, 42, 0, -446, -474],
		    [680, 1576, 36, 42, 0, -446, -474],
		    [1154, 1500, 38, 40, 0, -444, -474],
		    [1154, 1544, 38, 40, 0, -444, -474],
		    [1198, 1458, 42, 34, 0, -428, -514],
		    [1244, 1458, 42, 34, 0, -428, -514],
		    [720, 1572, 42, 34, 0, -428, -514],
		    [766, 1572, 40, 36, 0, -430, -514],
		    [810, 1572, 38, 36, 0, -432, -514],
		    [852, 1572, 18, 38, 0, -490, -492],
		    [1108, 362, 22, 38, 0, -490, -492],
		    [720, 1148, 22, 38, 0, -490, -492],
		    [1968, 844, 22, 38, 0, -490, -492],
		    [1572, 1346, 22, 38, 0, -490, -492],
		    [1100, 1390, 22, 38, 0, -490, -492],
		    [1968, 886, 20, 38, 0, -490, -492],
		    [1968, 928, 18, 40, 0, -490, -492],
		    [1972, 310, 20, 38, 0, -490, -492],
		    [1290, 1458, 20, 38, 0, -490, -492],
		    [1974, 972, 18, 38, 0, -490, -492],
		    [1974, 1014, 20, 38, 0, -490, -492],
		    [1196, 1500, 34, 42, 0, -448, -474],
		    [1196, 1546, 38, 38, 0, -432, -514],
		    [1234, 1496, 36, 40, 0, -434, -514],
		    [1238, 1540, 34, 42, 0, -448, -474],
		    [1406, 1522, 36, 40, 0, -434, -514],
		    [1446, 1522, 36, 40, 0, -446, -474],
		    [1486, 1522, 36, 40, 0, -446, -474],
		    [1526, 1520, 36, 40, 0, -446, -474],
		    [1526, 1564, 34, 42, 0, -448, -474]
		]

	},

	{

		"name": "atlas_s4_",

		"frames": [
		    [2, 2, 376, 722, 0, 0, 0],
		    [382, 2, 642, 292, 0, 0, -16],
		    [2, 728, 360, 360, 0, -8, -24],
		    [382, 298, 350, 366, 0, -14, -20],
		    [2, 1092, 342, 368, 0, -20, -18],
		    [2, 1464, 336, 370, 0, -26, -16],
		    [736, 298, 328, 376, 0, -34, -12],
		    [382, 668, 328, 376, 0, -34, -12],
		    [714, 678, 328, 376, 0, -34, -12],
		    [348, 1092, 326, 376, 0, -36, -12],
		    [342, 1472, 328, 370, 0, -34, -16],
		    [678, 1058, 326, 372, 0, -36, -14],
		    [674, 1472, 326, 372, 0, -36, -14],
		    [1008, 1058, 108, 330, 0, 0, 0],
		    [1046, 678, 92, 316, 0, -332, -404],
		    [1028, 2, 102, 208, 0, 0, 0],
		    [366, 1048, 124, 40, 0, 0, -4],
		    [2, 1838, 94, 160, 0, -338, -536],
		    [1134, 2, 94, 160, 0, -338, -536],
		    [1232, 2, 70, 116, 0, -290, -470],
		    [100, 1838, 94, 160, 0, -338, -536],
		    [198, 1838, 92, 160, 0, -338, -536],
		    [1232, 122, 70, 116, 0, -290, -470],
		    [294, 1846, 92, 160, 0, -338, -536],
		    [390, 1846, 92, 160, 0, -338, -536],
		    [486, 1846, 90, 160, 0, -338, -536],
		    [580, 1846, 88, 160, 0, -338, -536],
		    [672, 1848, 86, 158, 0, -340, -536],
		    [762, 1848, 84, 158, 0, -340, -536],
		    [850, 1848, 146, 88, 0, -282, -584],
		    [1008, 1392, 136, 92, 0, -286, -584],
		    [1004, 1488, 88, 160, 0, -338, -536],
		    [1004, 1652, 84, 160, 0, -340, -536],
		    [1096, 1488, 50, 120, 0, -306, -526],
		    [1092, 1652, 44, 120, 0, -314, -526],
		    [1004, 1816, 106, 100, 0, 0, -6],
		    [1000, 1920, 148, 86, 0, -282, -584],
		    [1134, 166, 68, 116, 0, -292, -470],
		    [1068, 214, 62, 116, 0, -296, -470],
		    [1068, 334, 64, 116, 0, -294, -470],
		    [1068, 454, 64, 116, 0, -294, -470],
		    [1068, 574, 126, 96, 0, -290, -584],
		    [1142, 674, 54, 120, 0, -302, -526],
		    [1142, 798, 54, 120, 0, -302, -526],
		    [1136, 286, 66, 116, 0, -292, -470],
		    [1136, 406, 68, 116, 0, -290, -470],
		    [1206, 242, 64, 116, 0, -294, -470],
		    [1208, 362, 62, 116, 0, -296, -470],
		    [1142, 922, 62, 116, 0, -296, -470],
		    [1120, 1042, 122, 96, 0, -292, -584],
		    [1120, 1142, 122, 96, 0, -292, -584],
		    [1120, 1242, 130, 94, 0, -288, -584],
		    [1148, 1340, 126, 94, 0, -290, -584],
		    [1150, 1438, 132, 92, 0, -288, -584],
		    [1150, 1534, 140, 90, 0, -284, -584],
		    [1140, 1628, 146, 88, 0, -282, -584],
		    [1140, 1720, 142, 90, 0, -284, -584],
		    [1254, 482, 48, 120, 0, -308, -526],
		    [1208, 482, 42, 118, 0, -314, -526],
		    [850, 1940, 52, 42, 0, -394, -508],
		    [1046, 998, 52, 42, 0, -394, -508],
		    [1136, 526, 52, 42, 0, -394, -508],
		    [906, 1940, 52, 42, 0, -394, -508],
		    [1200, 604, 50, 120, 0, -306, -526],
		    [1200, 728, 54, 120, 0, -302, -526],
		    [1254, 606, 44, 118, 0, -312, -526],
		    [1258, 728, 44, 120, 0, -312, -526],
		    [1208, 852, 62, 116, 0, -296, -470],
		    [1208, 972, 52, 42, 0, -394, -508],
		    [1246, 1018, 46, 120, 0, -310, -526],
		    [1246, 1142, 52, 42, 0, -394, -508],
		    [1254, 1188, 42, 118, 0, -314, -526],
		    [1114, 1814, 52, 42, 0, -394, -508],
		    [1114, 1860, 50, 42, 0, -394, -508],
		    [1170, 1814, 50, 42, 0, -394, -508],
		    [1168, 1860, 50, 42, 0, -394, -508],
		    [1224, 1814, 50, 42, 0, -394, -508],
		    [1222, 1860, 50, 42, 0, -394, -508]
		]
	},
	{

		"name": "atlas_s5_",

		"frames": [
		    [2, 2, 342, 530, 0, -28, -178],
		    [2, 536, 340, 530, 0, -28, -178],
		    [348, 2, 340, 530, 0, -28, -178],
		    [2, 1070, 340, 530, 0, -30, -178],
		    [346, 536, 340, 530, 0, -30, -178],
		    [692, 2, 338, 530, 0, -28, -178],
		    [346, 1070, 338, 530, 0, -28, -178],
		    [690, 536, 336, 530, 0, -30, -178],
		    [1034, 2, 336, 530, 0, -30, -178],
		    [688, 1070, 336, 530, 0, -32, -178],
		    [1030, 536, 336, 530, 0, -32, -178],
		    [1374, 2, 334, 530, 0, -32, -178],
		    [1712, 2, 376, 458, 0, 0, -78],
		    [2, 1604, 152, 364, 0, 0, 0],
		    [1028, 1070, 156, 358, 0, -244, -424],
		    [1370, 536, 156, 358, 0, -244, -424],
		    [2092, 2, 156, 358, 0, -244, -424],
		    [158, 1604, 156, 358, 0, -244, -424],
		    [1188, 1070, 156, 358, 0, -244, -424],
		    [1530, 536, 156, 358, 0, -244, -424],
		    [2252, 2, 156, 358, 0, -244, -424],
		    [2412, 2, 156, 358, 0, -244, -424],
		    [318, 1604, 156, 358, 0, -244, -424],
		    [478, 1604, 156, 358, 0, -244, -424],
		    [638, 1604, 156, 358, 0, -244, -424],
		    [798, 1604, 154, 358, 0, -246, -424],
		    [956, 1604, 154, 358, 0, -246, -424],
		    [1348, 1070, 154, 358, 0, -246, -424],
		    [1690, 536, 154, 358, 0, -246, -424],
		    [1848, 464, 156, 356, 0, -244, -424],
		    [2008, 464, 156, 356, 0, -244, -424],
		    [2168, 364, 156, 356, 0, -244, -424],
		    [2328, 364, 154, 358, 0, -246, -424],
		    [1114, 1432, 154, 358, 0, -246, -424],
		    [1272, 1432, 154, 358, 0, -246, -424],
		    [1430, 1432, 154, 358, 0, -246, -424],
		    [1114, 1794, 206, 224, 0, 0, 0],
		    [1324, 1794, 138, 228, 0, -304, -558],
		    [1466, 1794, 136, 228, 0, -306, -558],
		    [1506, 898, 154, 358, 0, -246, -424],
		    [1664, 898, 154, 358, 0, -246, -424],
		    [1822, 898, 154, 358, 0, -246, -424],
		    [1980, 824, 108, 338, 0, 0, 0],
		    [2092, 824, 142, 278, 0, 0, 0],
		    [1506, 1260, 184, 140, 0, 0, 0],
		    [1588, 1404, 134, 228, 0, -308, -558],
		    [1370, 898, 102, 152, 0, 0, 0],
		    [1726, 1260, 138, 228, 0, -304, -558],
		    [1868, 1260, 134, 228, 0, -308, -558],
		    [1726, 1492, 138, 228, 0, -304, -558],
		    [1868, 1492, 134, 228, 0, -308, -558],
		    [2006, 1166, 136, 228, 0, -306, -558],
		    [2006, 1398, 136, 228, 0, -304, -558],
		    [2146, 1106, 134, 228, 0, -306, -558],
		    [2146, 1338, 134, 228, 0, -306, -558],
		    [2006, 1630, 136, 228, 0, -304, -558],
		    [2146, 1570, 134, 228, 0, -304, -558],
		    [2168, 724, 96, 82, 0, 0, 0],
		    [2238, 810, 134, 228, 0, -304, -558],
		    [2284, 1042, 134, 228, 0, -304, -558],
		    [2284, 1274, 134, 228, 0, -304, -558],
		    [2284, 1506, 136, 228, 0, -304, -558],
		    [2376, 726, 138, 228, 0, -304, -558],
		    [2422, 958, 138, 228, 0, -304, -558],
		    [2422, 1190, 138, 228, 0, -304, -558],
		    [2424, 1422, 138, 228, 0, -304, -558],
		    [2424, 1654, 138, 228, 0, -304, -558],
		    [2284, 1738, 136, 228, 0, -306, -558],
		    [1606, 1724, 138, 228, 0, -304, -558],
		    [1748, 1724, 106, 192, 0, 0, 0],
		    [2092, 364, 70, 94, 0, 0, 0],
		    [1712, 464, 84, 62, 0, 0, 0],
		    [1848, 824, 90, 56, 0, 0, 0],
		    [2238, 1042, 30, 60, 0, 0, 0],
		    [1694, 1260, 28, 44, 0, 0, 0],
		    [1028, 1432, 16, 26, 0, 0, 0]
		]

	},
	{

		"name": "atlas_s6_",

		"frames": [
		    [2, 2, 750, 670, 0, 0, -24],
		    [2, 676, 746, 470, 0, -4, -676],
		    [756, 2, 540, 286, 0, 0, -16],
		    [2, 1150, 460, 298, 0, -290, -822],
		    [756, 292, 376, 226, 0, 0, 0],
		    [2, 1452, 130, 364, 0, 0, 0],
		    [1300, 2, 206, 280, 0, -6, -6],
		    [466, 1150, 202, 276, 0, -10, -10],
		    [136, 1452, 194, 278, 0, -18, -8],
		    [1510, 2, 204, 268, 0, -8, -18],
		    [1718, 2, 188, 282, 0, -24, -4],
		    [334, 1452, 184, 282, 0, -28, -4],
		    [522, 1430, 184, 280, 0, -28, -6],
		    [1136, 292, 184, 280, 0, -28, -6],
		    [1324, 286, 196, 242, 0, 0, -8],
		    [756, 522, 196, 242, 0, 0, -8],
		    [752, 768, 196, 242, 0, 0, -8],
		    [956, 522, 170, 172, 0, -64, -94],
		    [1524, 274, 170, 172, 0, -64, -94],
		    [1698, 288, 196, 242, 0, 0, -8],
		    [1524, 450, 170, 172, 0, -64, -94],
		    [1324, 532, 196, 242, 0, 0, -8],
		    [752, 1014, 196, 242, 0, 0, -8],
		    [1524, 626, 196, 242, 0, 0, -8],
		    [1130, 576, 168, 172, 0, -66, -94],
		    [1724, 534, 168, 172, 0, -66, -94],
		    [1724, 710, 168, 172, 0, -66, -94],
		    [952, 768, 196, 242, 0, 0, -8],
		    [952, 1014, 196, 242, 0, 0, -8],
		    [1152, 752, 168, 172, 0, -66, -94],
		    [1324, 778, 196, 242, 0, 0, -8],
		    [1524, 872, 196, 242, 0, 0, -8],
		    [1152, 928, 166, 172, 0, -68, -94],
		    [1724, 886, 166, 172, 0, -68, -94],
		    [1152, 1104, 196, 242, 0, 0, -8],
		    [1352, 1024, 166, 172, 0, -68, -94],
		    [1352, 1200, 196, 242, 0, 0, -8],
		    [1552, 1118, 196, 242, 0, 0, -8],
		    [1752, 1062, 166, 172, 0, -68, -94],
		    [1752, 1238, 166, 172, 0, -68, -94],
		    [1552, 1364, 196, 242, 0, 0, -8],
		    [1752, 1414, 164, 172, 0, -70, -94],
		    [672, 1260, 246, 74, 0, 0, 0],
		    [710, 1338, 196, 242, 0, 0, -8],
		    [710, 1584, 196, 242, 0, 0, -8],
		    [922, 1260, 196, 242, 0, 0, -8],
		    [910, 1506, 196, 242, 0, 0, -8],
		    [1122, 1350, 196, 242, 0, 0, -8],
		    [1110, 1596, 196, 242, 0, 0, -8],
		    [1322, 1446, 196, 242, 0, 0, -8],
		    [1522, 1610, 196, 242, 0, 0, -8],
		    [1722, 1610, 196, 242, 0, 0, -8],
		    [136, 1734, 74, 68, 0, -14, 0]
		]

	},
	{

		"name": "atlas_result_",

		"frames": [
		    [2, 2, 506, 84, 0, -18, -2],
		    [512, 2, 500, 40, 0, -22, -8],
		    [512, 46, 486, 46, 0, -16, -16],
		    [1002, 46, 18, 84, 0, 0, 0],
		    [2, 90, 482, 134, 0, -16, -10],
		    [488, 96, 478, 68, 0, -16, -10],
		    [970, 96, 28, 28, 0, 0, 0],
		    [488, 168, 474, 68, 0, -16, -10],
		    [2, 228, 474, 68, 0, -16, -10],
		    [480, 240, 474, 60, 0, -16, -10],
		    [2, 300, 468, 84, 0, -18, -2],
		    [474, 304, 466, 84, 0, -18, -2],
		    [944, 304, 74, 364, 0, 0, 0],
		    [2, 388, 464, 84, 0, -18, -2],
		    [470, 392, 464, 68, 0, -16, -10],
		    [470, 464, 462, 40, 0, -22, -8],
		    [2, 476, 460, 56, 0, -16, -10],
		    [466, 508, 440, 74, 0, -16, -10],
		    [2, 536, 424, 40, 0, -22, -10],
		    [2, 580, 424, 40, 0, -22, -10],
		    [430, 586, 412, 76, 0, -18, -10],
		    [846, 586, 74, 364, 0, 0, 0],
		    [2, 624, 404, 84, 0, 0, -8],
		    [924, 672, 74, 364, 0, 0, 0],
		    [410, 666, 402, 76, 0, -18, -10],
		    [2, 712, 402, 76, 0, -18, -10],
		    [408, 746, 392, 76, 0, -18, -10],
		    [2, 792, 384, 40, 0, -22, -8],
		    [390, 826, 384, 40, 0, -22, -8],
		    [2, 836, 360, 134, 0, -16, -10],
		    [366, 870, 358, 138, 0, -16, -10],
		    [2, 974, 358, 78, 0, -18, -8],
		    [728, 954, 190, 92, 0, 0, -4],
		    [364, 1012, 352, 76, 0, -18, -10],
		    [720, 1050, 296, 76, 0, -18, -10],
		    [728, 870, 102, 44, 0, 0, 0],
		    [2, 1056, 344, 40, 0, -22, -8],
		    [350, 1092, 344, 40, 0, -22, -8],
		    [2, 1100, 344, 38, 0, -22, -10],
		    [698, 1130, 306, 40, 0, -22, -10],
		    [350, 1136, 306, 40, 0, -22, -8],
		    [2, 1142, 306, 40, 0, -22, -8],
		    [660, 1174, 306, 40, 0, -22, -8],
		    [312, 1180, 292, 78, 0, -18, -8],
		    [2, 1262, 74, 364, 0, 0, 0],
		    [80, 1262, 74, 364, 0, 0, 0],
		    [158, 1262, 74, 364, 0, 0, 0],
		    [236, 1262, 74, 364, 0, 0, 0],
		    [314, 1262, 74, 364, 0, 0, 0],
		    [392, 1262, 74, 364, 0, 0, 0],
		    [470, 1262, 74, 364, 0, 0, 0],
		    [548, 1262, 74, 364, 0, 0, 0],
		    [608, 1218, 264, 38, 0, -18, -12],
		    [876, 1218, 140, 198, 0, 0, 0],
		    [2, 1186, 156, 38, 0, -18, -12],
		    [162, 1186, 120, 38, 0, -18, -12],
		    [626, 1260, 190, 92, 0, 0, -4],
		    [626, 1420, 290, 78, 0, -18, -8],
		    [626, 1356, 118, 38, 0, -18, -12],
		    [626, 1502, 252, 88, 0, 0, -6]
		]

	}

];
app.handleFileLoad = function (evt){
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}
//加载进度
app.handleProgress = function (evt) {
	var percent = parseInt(evt.progress*100);
	app.loading.percent.percent.text = percent + '%';
	// document.querySelector('#percent').innerHTML = percent + '%';
}

//loading页面资源加载完毕回调
app.handleLoadingComplete = function (evt) {

	var queue = evt.target;
  // ss["atlas_s1_"] = queue.getResult("atlas_s1_");
  // ss["atlas_s2_"] = queue.getResult("atlas_s2_");
  // ss["atlas_s3_"] = queue.getResult("atlas_s3_");
  // ss["atlas_s4_"] = queue.getResult("atlas_s4_");
  // ss["atlas_s5_"] = queue.getResult("atlas_s5_");
  // ss["atlas_s6_"] = queue.getResult("atlas_s6_");
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	ma = new lib.all();
	ma.alpha = 0;
	els = app.makaList(ma);
	stage.addChild(ma);
	app.isLoaded = true;
	if (app.descEnded)app.managerControl();
  $(document).one('touchstart',function (){$bgm.play(); })
}

app.managerControl = function (){

	app.myScroll = new IScroll('#wrapper',{
		useTransition:false,
		probeType: 3,
		bounce: false,
		// momentum: false,
		deceleration: 0.001
	});
	app.myScroll.on('scrollStart',function (){
		if (ma.arrow.visible){
			ma.arrow.visible = false;
		}
	})
	app.myScroll.on('scroll',function (){
		var scrollY = Math.round(this.y);
		ma.y = scrollY;

		ma.y = scrollY;
		// console.log(scrollY);
		if (scrollY<=0&&scrollY>-2000){
			app.scrollStep = 1;
			app.doMove(els[0],scrollY);
			if (!app.sound_night_isPlayed&&scrollY<-300&&scrollY>-400){
				// createjs.Sound.stop();
				// createjs.Sound.play('night',{loop: 2});
				$night.play();
				app.sound_night_isPlayed = !0;
			}
			if (!app.sound_wuba_isPlayed&&scrollY<-500&&scrollY>-600){
				// createjs.Sound.stop();
				// createjs.Sound.play('wuba');
				$wuba.play();
				app.sound_wuba_isPlayed = !0;
			}

			if (!app.myScroll.step1&&scrollY<=-1176){
				$stopmask.show();
				createjs.Tween.get(ma.s1_text1).to({alpha:1},500).wait(500).call(function (){
					createjs.Tween.get(ma.s1_text2).to({alpha:1},500).wait(500).call(function (){
						$scroller.css('height',2540+1334);
						app.myScroll.refresh();
						ma.arrow.y = 1180+1080;
						ma.arrow.visible = true;
						$stopmask.hide();
						app.myScroll.step1=true;
					})
				})
			}
		}else if (scrollY<=-2000&&scrollY>-3500){
			app.scrollStep = 2;
			app.doMove(els[0],scrollY);
			app.doMove(els[1],scrollY+2000);
			if (!app.sound_wind_isPlayed&&scrollY<-2200&&scrollY>-2300){
				// createjs.Sound.stop();
				// createjs.Sound.play('wind');
				$wind.play();
				app.sound_wind_isPlayed = !0;
			}

			if (!app.myScroll.step2&&scrollY<=-2536){
				$stopmask.show();
				createjs.Tween.get(ma.s2_text1).to({alpha:1},500).wait(500).call(function (){
					createjs.Tween.get(ma.s2_text2).to({alpha:1},500).wait(500).call(function (){
						createjs.Tween.get(ma.s2_text3).to({alpha:1},500).wait(500).call(function (){
							createjs.Tween.get(ma.s2_text4).to({alpha:1},500).wait(500).call(function (){
								$scroller.css('height',4327+1334);
								app.myScroll.refresh();
								ma.arrow.y = 2540+1080;
								ma.arrow.visible = true;
								$stopmask.hide();
								app.myScroll.step2=true;
							})
						})
					})
				})
			}
		}else if (scrollY<=-3500&&scrollY>-4800){
			app.scrollStep = 3;
			app.doMove(els[1],scrollY+2000);
			app.doMove(els[2],scrollY+3500);
			if (!app.sound_bird_isPlayed&&scrollY<-4000&&scrollY>-4100){
				// createjs.Sound.stop();
				// createjs.Sound.play('bird');
				$bird.play();
				app.sound_bird_isPlayed = !0;
			}

			if (!app.myScroll.step3&&scrollY<=-4246){
				$stopmask.show();
				createjs.Tween.get(ma.s3_text1).to({alpha:1},500).wait(500).call(function (){
					createjs.Tween.get(ma.s3_text2).to({alpha:1},500).wait(500).call(function (){
						createjs.Tween.get(ma.s3_text3).to({alpha:1},500).wait(500).call(function (){
								$scroller.css('height',5920+1334);
								app.myScroll.refresh();
								ma.arrow.y = 4250+1080;
								ma.arrow.visible = true;
								$stopmask.hide();
								app.myScroll.step3=true;
						})
					})
				})
			}
		}else if (scrollY<=-4800&&scrollY>-7100){
			app.scrollStep = 4;
			app.doMove(els[3],scrollY+4800);

			if (!app.sound_boat_isPlayed&&scrollY<-6300&&scrollY>-6400){
				// createjs.Sound.stop();
				// createjs.Sound.play('boat');
				$boat.play();
				app.sound_boat_isPlayed = !0;
			}
			if (!app.myScroll.step4&&scrollY<=-5916){
				$stopmask.show();
				createjs.Tween.get(ma.s4_text2).to({alpha:1},500).wait(500).call(function (){
					createjs.Tween.get(ma.s4_text1).to({alpha:1},500).wait(500).call(function (){
						$scroller.css('height',8170+1334);
						app.myScroll.refresh();
						ma.arrow.y = 5920+1080;
						ma.arrow.visible = true;
						$stopmask.hide();
						app.myScroll.step4=true;
					})
				})
			}

		}else if (scrollY<=-7100&&scrollY>-8800){
			app.scrollStep = 5;
			app.doMove(els[3],scrollY+4800);
			app.doMove(els[4],scrollY+7100);
			if (!app.sound_fengling_isPlayed&&scrollY<-7700&&scrollY>-7800){
				// createjs.Sound.stop();
				// createjs.Sound.play('fengling');

				$fengling.play();
				app.sound_fengling_isPlayed = !0;
			}
			if (!app.myScroll.step5&&scrollY<=-8170){
				$stopmask.show();
				createjs.Tween.get(ma.s5_text3).to({alpha:1},500).wait(500).call(function (){
					createjs.Tween.get(ma.s5_text2).to({alpha:1},500).wait(500).call(function (){
						createjs.Tween.get(ma.s5_text1).to({alpha:1},500).wait(500).call(function (){
								$scroller.css('height',9787+1334);
								app.myScroll.refresh();
								ma.arrow.y = 8170+1080;
								ma.arrow.visible = true;
								$stopmask.hide();
								app.myScroll.step5=true;
						})
					})
				})
			}
		}else if (scrollY<=-8800&&scrollY>-12000){
			app.scrollStep = 6;
			app.doMove(els[4],scrollY+7100);
			app.doMove(els[5],scrollY+8800);
			if (!app.myScroll.step6&&scrollY<=-9780){
				app.myScroll.destroy();
				$('#wrapper').remove();
				$wuba2.play();
				createjs.Tween.get(ma.s6_text1).to({alpha:1},500).wait(500).call(function (){
					createjs.Tween.get(ma.s6_btn).to({alpha:1},500);
					$('.s6_btn').show();
					app.myScroll.step6=true;
				})
			}
		}
	})

  createjs.Tween.get(ma).to({alpha:1},500).call(function (){
		stage.removeChild(app.loading);
		console.log('loading removed');
		$stopmask.hide();
	});

	ma.s6_btn.addEventListener('click',function (){
		$('.inputpage').css({display:'block',opacity:0}).animate({opacity:1},300);
	})
}
app.makaList = function (ma){

	var els = [
		[
			{name: 's1_star1',initX: ma['s1_star1'].x,initY: ma['s1_star1'].y, rateX: 0,rateY: .2},
			{name: 's1_star2',initX: ma['s1_star2'].x,initY: ma['s1_star2'].y, rateX: 0,rateY: .4},
			{name: 's1_text1',initX: ma['s1_text1'].x,initY: ma['s1_text1'].y, rateX: 0,rateY: 0,rateO:-.001},
			{name: 's1_text2',initX: ma['s1_text2'].x,initY: ma['s1_text2'].y, rateX: 0,rateY: 0,rateO:-.001},
			{name: 's1_leaf',initX: ma['s1_leaf'].x,initY: ma['s1_leaf'].y, rateX: 0,rateY: .3},
		],
		[
			{name: 's2_pang',initX: ma['s2_pang'].x,initY: ma['s2_pang'].y, rateX: -.6,rateY: .3},
			{name: 's2_star',initX: ma['s2_star'].x,initY: ma['s2_star'].y, rateX: .1,rateY: .06},
			{name: 's2_text1',initX: ma['s2_text1'].x,initY: ma['s2_text1'].y, rateX: 0,rateY: 0,rateO:-.005},
			{name: 's2_text2',initX: ma['s2_text2'].x,initY: ma['s2_text2'].y, rateX: 0,rateY: 0,rateO:-.002},
			{name: 's2_text3',initX: ma['s2_text3'].x,initY: ma['s2_text3'].y, rateX: 0,rateY: 0,rateO:-.002},
			{name: 's2_text4',initX: ma['s2_text4'].x,initY: ma['s2_text4'].y, rateX: 0,rateY: 0,rateO:-.002},
			{name: 's2_wu',initX: ma['s2_wu'].x,initY: ma['s2_wu'].y, rateX: -.06,rateY: 0},
		],
		[
			{name: 's3_floor',initX: ma['s3_floor'].x,initY: ma['s3_floor'].y, rateX: -.15,rateY: 0,x:100},
			{name: 's3_mountain',initX: ma['s3_mountain'].x,initY: ma['s3_mountain'].y, rateX: 0,rateY: .2},
			{name: 's3_text1',initX: ma['s3_text1'].x,initY: ma['s3_text1'].y, rateX: -.15,rateY: 0,x:100,rateO:-.003},
			{name: 's3_text2',initX: ma['s3_text2'].x,initY: ma['s3_text2'].y, rateX: -.15,rateY: 0,x:100,rateO:-.003},
			{name: 's3_text3',initX: ma['s3_text3'].x,initY: ma['s3_text3'].y, rateX: -.15,rateY: 0,x:100,rateO:-.003},
		],
		[
			{name: 's4_mountain',initX: ma['s4_mountain'].x,initY: ma['s4_mountain'].y, rateX: 0,rateY: .1},
			{name: 's4_animal',initX: ma['s4_animal'].x,initY: ma['s4_animal'].y, rateX: .3,rateY: -.5,x:-230,y:320},
			{name: 's4_boat',initX: ma['s4_boat'].x,initY: ma['s4_boat'].y, rateX: -.15,rateY: 0},
			{name: 's4_cloud',initX: ma['s4_cloud'].x,initY: ma['s4_cloud'].y, rateX: .06,rateY: 0},
			{name: 's4_leaf',initX: ma['s4_leaf'].x,initY: ma['s4_leaf'].y, rateX: 0,rateY: -.3,y: 300},
			{name: 's4_leafs01',initX: ma['s4_leafs01'].x,initY: ma['s4_leafs01'].y, rateX: -.3,rateY: -0.75,x:600,y:1480},
			{name: 's4_leafs02',initX: ma['s4_leafs02'].x,initY: ma['s4_leafs02'].y, rateX: .24,rateY: -0.75,x:-450,y:1320},
			{name: 's4_text1',initX: ma['s4_text1'].x,initY: ma['s4_text1'].y, rateX: 0,rateY: -.08,rateO:-.002,y:-120},
			{name: 's4_text2',initX: ma['s4_text2'].x,initY: ma['s4_text2'].y, rateX: 0,rateY: 0,rateO:-.002},
		],
		[
			{name: 's5_mountain',initX: ma['s5_mountain'].x,initY: ma['s5_mountain'].y, rateX: 0,rateY: .12},
			{name: 's5_floor',initX: ma['s5_floor'].x,initY: ma['s5_floor'].y, rateX: -.2,rateY: 0,x:200},

			{name: 's5_text1',initX: ma['s5_text1'].x,initY: ma['s5_text1'].y, rateX: -.2,rateY: 0,x:200,rateO:-.005},
			{name: 's5_text2',initX: ma['s5_text2'].x,initY: ma['s5_text2'].y, rateX: -.2,rateY: 0,x:200,rateO:-.005},
			{name: 's5_text3',initX: ma['s5_text3'].x,initY: ma['s5_text3'].y, rateX: -.2,rateY: 0,x:200,rateO:-.005},
		],
		[
			{name: 's6_animal',initX: ma['s6_animal'].x,initY: ma['s6_animal'].y, rateX: -.2,rateY: .3},
			{name: 's6_cloud',initX: ma['s6_cloud'].x,initY: ma['s6_cloud'].y, rateX: .1,rateY: 0},
		]
	]
	return els;
}
app.doMove = function (arr,scrollY){

	for (var i=0;i<arr.length;i++){
		var x = scrollY*arr[i].rateX
		var y = scrollY*arr[i].rateY
		var alpha = scrollY*arr[i].rateO;
		
		if ( arr[i].x>0&&x>=arr[i].x || (arr[i].x<0&&x<=arr[i].x) ){
			x = arr[i].x;
		}		
		if ( arr[i].y>0&&y>=arr[i].y || (arr[i].y<0&&y<=arr[i].y) ){
			y = arr[i].y;
		}
		ma[arr[i].name].x = arr[i].initX + x;
		ma[arr[i].name].y = arr[i].initY + y;


		if (arr[i].rateO){

			if ( (app.scrollStep==1 && app.myScroll.step1) || (app.scrollStep==2 && app.myScroll.step2) || (app.scrollStep==3 && app.myScroll.step3) || (app.scrollStep==4 && app.myScroll.step4) || (app.scrollStep==5 && app.myScroll.step5) ){
				ma[arr[i].name].alpha = scrollY*arr[i].rateO>1 ? 1 : scrollY*arr[i].rateO;
			}

		}
	}
}

app.openResult = function (){
	var userName = $('#userName').val().trim();
	if (userName===''){
		alert('姓名不能为空');
		return;
	}
	dataResult.userName = userName;
	var type = Math.ceil(Math.random()*4);
	var location = Math.ceil(Math.random()*13);
	var meet = type==1 ? Math.ceil(Math.random()*3) : type==2 ? Math.ceil(Math.random()*3)+3 : type==3 ? Math.ceil(Math.random()*4)+6 : Math.ceil(Math.random()*3) + 10;
	var keyword = type==3 ? Math.ceil(Math.random()*4) : Math.ceil(Math.random()*2);
	dataResult.combo = type+"_"+location+"_"+meet+"_"+keyword;
	app.createResult();
}
app.createResult = function (){
	if (!stage){
		stage = new createjs.Stage(document.querySelector('#canvas'));
	}
	// console.log(dataResult);
	$('.waitwrap').show();
	stage.removeAllChildren();
	var loader = new createjs.LoadQueue(false,app.resPath,'Anonymous');
	loader.addEventListener("fileload", app.handleFileLoad);
	loader.addEventListener("complete", function (evt){
		var queue = evt.target;
	  // ss["atlas_result_"] = queue.getResult("atlas_result_");
	  setTimeout(function (){
	  	app.createImage(dataResult);
	  },500)
	});
	loader.loadManifest([
		{src:app.resPath+"images/r_bg.jpg", id:"r_bg"},
		{src:app.resPath+"images/r_pic01.jpg", id:"r_pic01"},
		{src:app.resPath+"images/r_pic02.jpg", id:"r_pic02"},
		{src:app.resPath+"images/r_pic03.jpg", id:"r_pic03"},
		{src:app.resPath+"images/r_pic04.jpg", id:"r_pic04"},
		{src:app.resPath+"images/qrcode.png", id:"qrcode"},
		// {src:app.resPath+"images/atlas_result_.json", type:"spritesheet", id:"atlas_result_"},
	])
}

app.resetShare = function (imageData){
	var rootpath = location.protocol + "//" + location.host + location.pathname;
	if (rootpath.indexOf('index.html')>-1){
		rootpath = rootpath.replace('index.html','share.html');
	}else {
		rootpath += "share.html";
	}
	console.log(rootpath)
	var link = rootpath+"?userName="+imageData.userName+"&combo="+imageData.combo;
	console.log(link)
	shareData.link = encodeURI(link);
	mobileShare(shareData);
}
//生成结果图
app.createImage = function (data){
	var combo = data.combo.split('_');
	var type = Number(combo[0]);
	var location = Number(combo[1])-1;
	var meet = Number(combo[2])-1;
	var keyword = Number(combo[3])-1;
	var len = data.userName.length;

	app.libResult = type==1 ? new lib.z_result1() : type==2 ? new lib.z_result2() : type==3 ? new lib.z_result3() : new lib.z_result4();

	stage.removeAllChildren();
	stage.addChild(app.libResult);
	stage.update();
	app.libResult.namebig.text = data.userName;
	// app.libResult.namebig.textBaseline = "bottom";
	app.libResult.namebig.font = "bold 92px Heiti SC";
	app.libResult.namesmall.text = data.userName;
	app.libResult.namesmall.font = "bold 36px Heiti SC";
	app.libResult.location.gotoAndStop(location);
	app.libResult.meet.gotoAndStop(meet);
	app.libResult.keyword.gotoAndStop(keyword);
	app.libResult.namebig.x = 94;
	app.libResult.namebig.y += isIOS ? -6 : 10;
	app.libResult.namesmall.y += isIOS ? -2 : 6;
	app.libResult.nameborder.x = app.libResult.namebig.getBounds().width + 116;
	stage.update();

	document.querySelector('#saveImage').src = stage.toDataURL();
	try{app.resetShare(data);}catch(e){}
	
	setTimeout(function (){
		$('.waitwrap,.inputtpage').hide();
		$('.resultpage').css({display:'block',opacity:0}).animate({opacity:1},200);
		$('#saveImage').addClass('ani');
	},1000)
}
app.bindEvents = function (){
	$('.btn_open').on('click',app.openResult)
	$('.s6_btn').on('click',function (){
  	$('.inputpage').css({display:'block',opacity:0}).animate({opacity:1},300);
  })
  $('.btn_save').on('click',function (){
  	$('.savewrap').css({display:'block',opacity:0}).animate({opacity:1},500);
  })
  $('.btn_share').on('click',function (){
  	$('.sharewrap').css({display:'block',opacity:0}).animate({opacity:1},500);
  })
  $('.savewrap').on('click',function (){
  	$('.savewrap').animate({opacity:0,},500,function (){$(this).hide()});
  })
  $('.sharewrap').on('click',function (){
  	$('.sharewrap').animate({opacity:0,},500,function (){$(this).hide()});
  })
  if (isIOS){
	  $('#userName').on('blur',function (){
	  	$(window).scrollTop(0)
	  })
  }
}

app.initLoading();
app.bindEvents();
