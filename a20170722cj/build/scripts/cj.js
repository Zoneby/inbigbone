(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 750,
	height: 1334,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"img/r03001.png", id:"r03001"},
		{src:"img/r03002.png", id:"r03002"},
		{src:"img/r03003.png", id:"r03003"},
		{src:"img/r03004.png", id:"r03004"},
		{src:"img/r03005.png", id:"r03005"},
		{src:"img/r03006.png", id:"r03006"},
		{src:"img/r03007.png", id:"r03007"},
		{src:"img/r03008.png", id:"r03008"},
		{src:"img/r03009.png", id:"r03009"},
		{src:"img/r03010.png", id:"r03010"},
		{src:"img/r04001.png", id:"r04001"},
		{src:"img/r04002.png", id:"r04002"},
		{src:"img/r04003.png", id:"r04003"},
		{src:"img/r04004.png", id:"r04004"},
		{src:"img/r04005.png", id:"r04005"},
		{src:"img/r04006.png", id:"r04006"},
		{src:"img/r04007.png", id:"r04007"},
		{src:"img/bg_01.jpg", id:"bg_01"},
		{src:"img/bg_02.jpg", id:"bg_02"},
		{src:"img/bg_03.jpg", id:"bg_03"},
		{src:"img/bg_04.jpg", id:"bg_04"},
		{src:"img/bg_05.jpg", id:"bg_05"},
		{src:"img/bg_06.jpg", id:"bg_06"},
		{src:"img/r01001.png", id:"r01001"},
		{src:"img/r01002.png", id:"r01002"},
		{src:"img/r01003.png", id:"r01003"},
		{src:"img/r01004.png", id:"r01004"},
		{src:"img/r01005.png", id:"r01005"},
		{src:"img/r01006.png", id:"r01006"},
		{src:"img/r01007.png", id:"r01007"},
		{src:"img/r01008.png", id:"r01008"},
		{src:"img/r01009.png", id:"r01009"},
		{src:"img/r02001.png", id:"r02001"},
		{src:"img/r02002.png", id:"r02002"},
		{src:"img/r05001.png", id:"r05001"},
		{src:"img/r05002.png", id:"r05002"},
		{src:"img/r05003.png", id:"r05003"},
		{src:"img/r05004.png", id:"r05004"},
		{src:"img/r05005.png", id:"r05005"},
		{src:"img/r05006.png", id:"r05006"},
		{src:"img/r05007.png", id:"r05007"},
		{src:"img/r05008.png", id:"r05008"},
		{src:"img/r05009.png", id:"r05009"},
		{src:"img/r05010.png", id:"r05010"},
		{src:"img/r05011.png", id:"r05011"},
		{src:"img/r05012.png", id:"r05012"},
		{src:"img/r05013.png", id:"r05013"},
		{src:"img/r06001.png", id:"r06001"},
		{src:"img/r06002.png", id:"r06002"},
		{src:"img/r06003.png", id:"r06003"},
		{src:"img/r06004.png", id:"r06004"},
		{src:"img/r06005.png", id:"r06005"},
		{src:"img/r06006.png", id:"r06006"},
		{src:"img/r06007.png", id:"r06007"},
		{src:"img/r06008.png", id:"r06008"},
		{src:"img/r06009.png", id:"r06009"},
		{src:"img/r06010.png", id:"r06010"},
		{src:"img/r06011.png", id:"r06011"},
		{src:"img/r06012.png", id:"r06012"},
		{src:"img/r06013.png", id:"r06013"},
		{src:"img/r06014.png", id:"r06014"},
		{src:"img/r06015.png", id:"r06015"},
		{src:"img/r06016.png", id:"r06016"},
		{src:"img/r07001.png", id:"r07001"},
		{src:"img/r07002.png", id:"r07002"},
		{src:"img/r07003.png", id:"r07003"},
		{src:"img/r07004.png", id:"r07004"},
		{src:"img/r07005.png", id:"r07005"},
		{src:"img/r07006.png", id:"r07006"},
		{src:"img/r07007.png", id:"r07007"},
		{src:"img/r07008.png", id:"r07008"},
		{src:"img/r07009.png", id:"r07009"},
		{src:"img/r07010.png", id:"r07010"},
		{src:"img/r07011.png", id:"r07011"},
		{src:"img/r07012.png", id:"r07012"},
		{src:"img/r07013.png", id:"r07013"},
		{src:"img/r07014.png", id:"r07014"},
		{src:"img/r08001.png", id:"r08001"},
		{src:"img/r09001.png", id:"r09001"},
		{src:"img/r10001.png", id:"r10001"},
		{src:"img/r10002.png", id:"r10002"},
		{src:"img/r10003.png", id:"r10003"},
		{src:"img/r10004.png", id:"r10004"},
		{src:"img/r10005.png", id:"r10005"},
		{src:"img/r10006.png", id:"r10006"},
		{src:"img/r11001.png", id:"r11001"},
		{src:"img/r11002.png", id:"r11002"},
		{src:"img/r11003.png", id:"r11003"},
		{src:"img/r12001.png", id:"r12001"},
		{src:"img/r12002.png", id:"r12002"},
		{src:"img/r12003.png", id:"r12003"},
		{src:"img/r12004.png", id:"r12004"},
		{src:"img/r12005.png", id:"r12005"},
		{src:"img/r12006.png", id:"r12006"},
		{src:"img/r12007.png", id:"r12007"},
		{src:"img/r12008.png", id:"r12008"},
		{src:"img/r12018.png", id:"r12018"},
		{src:"img/r13001.png", id:"r13001"},
		{src:"img/r13002.png", id:"r13002"},
		{src:"img/r14001.png", id:"r14001"},
		{src:"img/r14002.png", id:"r14002"},
		{src:"img/r15001.png", id:"r15001"},
		{src:"img/r15002.png", id:"r15002"},
		{src:"img/r16001.png", id:"r16001"},
		{src:"img/r16002.png", id:"r16002"},
		{src:"img/r16003.png", id:"r16003"},
		{src:"img/r17001.png", id:"r17001"},
		{src:"img/r17002.png", id:"r17002"},
		{src:"img/r18001.png", id:"r18001"},
		{src:"img/r18002.png", id:"r18002"},
		{src:"img/r18003.png", id:"r18003"},
		{src:"img/r18004.png", id:"r18004"},
		{src:"img/r18005.png", id:"r18005"},
		{src:"img/r18006.png", id:"r18006"},
		{src:"img/r18007.png", id:"r18007"},
		{src:"img/r18008.png", id:"r18008"},
		{src:"img/r18009.png", id:"r18009"},
		{src:"img/r18010.png", id:"r18010"},
		{src:"img/r18011.png", id:"r18011"},
		{src:"img/r18012.png", id:"r18012"},
		{src:"img/r18013.png", id:"r18013"},
		{src:"img/r18014.png", id:"r18014"},
		{src:"img/r18015.png", id:"r18015"},
		{src:"img/r18016.png", id:"r18016"},
		{src:"img/r19001.png", id:"r19001"},
		{src:"img/r19002.png", id:"r19002"},
		{src:"img/r19003.png", id:"r19003"},
		{src:"img/r19004.png", id:"r19004"},
		{src:"img/r19005.png", id:"r19005"},
		{src:"img/r19006.png", id:"r19006"},
		{src:"img/r19007.png", id:"r19007"},
		{src:"img/r19008.png", id:"r19008"},
		{src:"img/r19009.png", id:"r19009"},
		{src:"img/r19010.png", id:"r19010"},
		{src:"img/r19011.png", id:"r19011"},
		{src:"img/r19012.png", id:"r19012"},
		{src:"img/r19013.png", id:"r19013"},
		{src:"img/r19014.png", id:"r19014"},
		{src:"img/r19015.png", id:"r19015"},
		{src:"img/r19016.png", id:"r19016"},
		{src:"img/r19017.png", id:"r19017"},
		{src:"img/r19018.png", id:"r19018"},
		{src:"img/r19019.png", id:"r19019"},
		{src:"img/r19020.png", id:"r19020"},
		{src:"img/r19021.png", id:"r19021"},
		{src:"img/r20001.png", id:"r20001"},
		{src:"img/r20002.png", id:"r20002"},
		{src:"img/r20003.png", id:"r20003"},
		{src:"img/r20004.png", id:"r20004"},
		{src:"img/r20005.png", id:"r20005"},
		{src:"img/r20006.png", id:"r20006"},
		{src:"img/r20007.png", id:"r20007"},
		{src:"img/r20008.png", id:"r20008"},
		{src:"img/r20009.png", id:"r20009"},
		{src:"img/r20010.png", id:"r20010"},
		{src:"img/r20011.png", id:"r20011"},
		{src:"img/r20012.png", id:"r20012"},
		{src:"img/r21001.png", id:"r21001"},
		{src:"img/r21002.png", id:"r21002"},
		{src:"img/r22001.png", id:"r22001"},
		{src:"img/r23001.png", id:"r23001"},
		{src:"img/r23002.png", id:"r23002"},
		{src:"img/r24001.png", id:"r24001"},
		{src:"img/r25001.png", id:"r25001"},
		{src:"img/r25002.png", id:"r25002"},
		{src:"img/r25003.png", id:"r25003"},
		{src:"img/r26001.png", id:"r26001"},
		{src:"img/r26002.png", id:"r26002"},
		{src:"img/r26003.png", id:"r26003"},
		{src:"img/r26004.png", id:"r26004"},
		{src:"img/r26005.png", id:"r26005"},
		{src:"img/r26006.png", id:"r26006"},
		{src:"img/r26007.png", id:"r26007"},
		{src:"img/r26008.png", id:"r26008"},
		{src:"img/r27001.png", id:"r27001"},
		{src:"img/r28001.png", id:"r28001"},
		{src:"img/r29001.png", id:"r29001"},
		{src:"img/r30001.png", id:"r30001"},
		{src:"img/r31001.png", id:"r31001"},
		{src:"img/r31002.png", id:"r31002"},
		{src:"img/r31002_1.png", id:"r31002_1"},
		{src:"img/r31003.png", id:"r31003"},
		{src:"img/r31004.png", id:"r31004"},
		{src:"img/r31005.png", id:"r31005"},
		{src:"img/r31006.png", id:"r31006"},
		{src:"img/r31007.png", id:"r31007"},
		{src:"img/r31008.png", id:"r31008"},
		{src:"img/r31009.png", id:"r31009"},
		{src:"img/r31010.png", id:"r31010"},
		{src:"img/r31011.png", id:"r31011"},
		{src:"img/r31012.png", id:"r31012"},
		{src:"img/r31013.png", id:"r31013"},
		{src:"img/r31014.png", id:"r31014"},
		{src:"img/r31015.png", id:"r31015"},
		{src:"img/r31016.png", id:"r31016"},
		{src:"img/r31017.png", id:"r31017"},
		{src:"img/r31018.png", id:"r31018"},
		{src:"img/r31019.png", id:"r31019"},
		{src:"img/r32001.png", id:"r32001"},
		{src:"img/r32002.png", id:"r32002"},
		{src:"img/r32003.png", id:"r32003"},
		{src:"img/r32004.png", id:"r32004"},
		{src:"img/r32005.png", id:"r32005"},
		{src:"img/r32006.png", id:"r32006"},
		{src:"img/r32007.png", id:"r32007"},
		{src:"img/r32008.png", id:"r32008"},
		{src:"img/r32009.png", id:"r32009"},
		{src:"img/r33001.png", id:"r33001"},
		{src:"img/r34001.png", id:"r34001"},
		{src:"img/r34002.png", id:"r34002"},
		{src:"img/r34003.png", id:"r34003"},
		{src:"img/r34004.png", id:"r34004"},
		{src:"img/r34005.png", id:"r34005"},
		{src:"img/r34006.png", id:"r34006"},
		{src:"img/r35001.png", id:"r35001"},
		{src:"img/r35002.png", id:"r35002"},
		{src:"img/r36001.png", id:"r36001"},
		{src:"img/r36002.png", id:"r36002"},
		{src:"img/r36003.png", id:"r36003"},
		{src:"img/r37001.png", id:"r37001"},
		{src:"img/r37002.png", id:"r37002"},
		{src:"img/r37003.png", id:"r37003"},
		{src:"img/r38001.png", id:"r38001"},
		{src:"img/r38002.png", id:"r38002"},
		{src:"img/r38003.png", id:"r38003"},
		{src:"img/r39001.png", id:"r39001"},
		{src:"img/r39002.png", id:"r39002"},
		{src:"img/r40001.png", id:"r40001"},
		{src:"img/r40002.png", id:"r40002"},
		{src:"img/r41001.png", id:"r41001"},
		{src:"img/r41002.png", id:"r41002"},
		{src:"img/r41003.png", id:"r41003"},
		{src:"img/r41004.png", id:"r41004"},
		{src:"img/r41005.png", id:"r41005"},
		{src:"img/r42001.png", id:"r42001"},
		{src:"img/r42002.png", id:"r42002"},
		{src:"img/r42003.png", id:"r42003"},
		{src:"img/r42004.png", id:"r42004"},
		{src:"img/r42005.png", id:"r42005"},
		{src:"img/r42006.png", id:"r42006"},
		{src:"img/r42007.png", id:"r42007"},
		{src:"img/r42008.png", id:"r42008"},
		{src:"img/r42009.png", id:"r42009"},
		{src:"img/r43001.png", id:"r43001"},
		{src:"img/r44001.png", id:"r44001"},
		{src:"img/r44002.png", id:"r44002"},
		{src:"img/r45001.png", id:"r45001"},
		{src:"img/r45002.png", id:"r45002"},
		{src:"img/r46001.png", id:"r46001"},
		{src:"img/r46002.png", id:"r46002"},
		{src:"img/r47001.png", id:"r47001"},
		{src:"img/r48001.png", id:"r48001"},
		{src:"img/r49001.png", id:"r49001"},
		{src:"img/r50001.png", id:"r50001"},
		{src:"img/r50002.png", id:"r50002"},
		{src:"img/r50003.png", id:"r50003"},
		{src:"img/r50004.png", id:"r50004"},
		{src:"img/r50005.png", id:"r50005"},
		{src:"img/r51001.png", id:"r51001"},
		{src:"img/r51002.png", id:"r51002"},
		{src:"img/r51003.png", id:"r51003"},
		{src:"img/r52001.png", id:"r52001"},
		{src:"img/r53001.png", id:"r53001"},
		{src:"img/r53002.png", id:"r53002"},
		{src:"img/r54001.png", id:"r54001"},
		{src:"img/r54002.png", id:"r54002"},
		{src:"img/r54003.png", id:"r54003"},
		{src:"img/r55001.png", id:"r55001"},
		{src:"img/r55002.png", id:"r55002"},
		{src:"img/r56001.png", id:"r56001"},
		{src:"img/r57001.png", id:"r57001"},
		{src:"img/r58001.png", id:"r58001"},
		{src:"img/r58002.png", id:"r58002"},
		{src:"img/r58003.png", id:"r58003"},
		{src:"img/zx1_xs1.png", id:"zx1_xs1"},
		{src:"img/zx1_xs2.png", id:"zx1_xs2"},
		{src:"img/zx1_xs3.png", id:"zx1_xs3"},
		{src:"img/zx1_xs4.png", id:"zx1_xs4"},
		{src:"img/zx1_xs5.png", id:"zx1_xs5"},
		{src:"img/zx1_xs6.png", id:"zx1_xs6"},
		{src:"img/zx1_xs7.png", id:"zx1_xs7"},
		{src:"img/zx1_xs8.png", id:"zx1_xs8"},
		{src:"img/zx2_xs1.png", id:"zx2_xs1"},
		{src:"img/zx2_xs2.png", id:"zx2_xs2"},
		{src:"img/zx2_xs3.png", id:"zx2_xs3"},
		{src:"img/zx2_xs4.png", id:"zx2_xs4"},
		{src:"img/zx2_xs5.png", id:"zx2_xs5"},
		{src:"img/zx2_xs6.png", id:"zx2_xs6"},
		{src:"img/zx2_xs7.png", id:"zx2_xs7"},
		{src:"img/zx2_xs8.png", id:"zx2_xs8"},
		{src:"img/zx3_xs1.png", id:"zx3_xs1"},
		{src:"img/zx3_xs2.png", id:"zx3_xs2"},
		{src:"img/zx3_xs3.png", id:"zx3_xs3"},
		{src:"img/zx3_xs4.png", id:"zx3_xs4"},
		{src:"img/zx3_xs5.png", id:"zx3_xs5"},
		{src:"img/zx3_xs6.png", id:"zx3_xs6"},
		{src:"img/zx3_xs7.png", id:"zx3_xs7"},
		{src:"img/zx3_xs8.png", id:"zx3_xs8"}
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



(lib.r03001 = function() {
	this.initialize(img.r03001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r03002 = function() {
	this.initialize(img.r03002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r03003 = function() {
	this.initialize(img.r03003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r03004 = function() {
	this.initialize(img.r03004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r03005 = function() {
	this.initialize(img.r03005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r03006 = function() {
	this.initialize(img.r03006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r03007 = function() {
	this.initialize(img.r03007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r03008 = function() {
	this.initialize(img.r03008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r03009 = function() {
	this.initialize(img.r03009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r03010 = function() {
	this.initialize(img.r03010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r04001 = function() {
	this.initialize(img.r04001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,140);


(lib.r04002 = function() {
	this.initialize(img.r04002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,140);


(lib.r04003 = function() {
	this.initialize(img.r04003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,140);


(lib.r04004 = function() {
	this.initialize(img.r04004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,140);


(lib.r04005 = function() {
	this.initialize(img.r04005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,140);


(lib.r04006 = function() {
	this.initialize(img.r04006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,140);


(lib.r04007 = function() {
	this.initialize(img.r04007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,140);


(lib.bg_01 = function() {
	this.initialize(img.bg_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,1334);


(lib.bg_02 = function() {
	this.initialize(img.bg_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,1334);


(lib.bg_03 = function() {
	this.initialize(img.bg_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,1334);


(lib.bg_04 = function() {
	this.initialize(img.bg_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,1334);


(lib.bg_05 = function() {
	this.initialize(img.bg_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,1334);


(lib.bg_06 = function() {
	this.initialize(img.bg_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1069,1334);


(lib.r01001 = function() {
	this.initialize(img.r01001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r01002 = function() {
	this.initialize(img.r01002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r01003 = function() {
	this.initialize(img.r01003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r01004 = function() {
	this.initialize(img.r01004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r01005 = function() {
	this.initialize(img.r01005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r01006 = function() {
	this.initialize(img.r01006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r01007 = function() {
	this.initialize(img.r01007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r01008 = function() {
	this.initialize(img.r01008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r01009 = function() {
	this.initialize(img.r01009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r02001 = function() {
	this.initialize(img.r02001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,145);


(lib.r02002 = function() {
	this.initialize(img.r02002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,145);


(lib.r05001 = function() {
	this.initialize(img.r05001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r05002 = function() {
	this.initialize(img.r05002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r05003 = function() {
	this.initialize(img.r05003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r05004 = function() {
	this.initialize(img.r05004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r05005 = function() {
	this.initialize(img.r05005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r05006 = function() {
	this.initialize(img.r05006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r05007 = function() {
	this.initialize(img.r05007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r05008 = function() {
	this.initialize(img.r05008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r05009 = function() {
	this.initialize(img.r05009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r05010 = function() {
	this.initialize(img.r05010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r05011 = function() {
	this.initialize(img.r05011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r05012 = function() {
	this.initialize(img.r05012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r05013 = function() {
	this.initialize(img.r05013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r06001 = function() {
	this.initialize(img.r06001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,179);


(lib.r06002 = function() {
	this.initialize(img.r06002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,179);


(lib.r06003 = function() {
	this.initialize(img.r06003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,179);


(lib.r06004 = function() {
	this.initialize(img.r06004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,179);


(lib.r06005 = function() {
	this.initialize(img.r06005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,179);


(lib.r06006 = function() {
	this.initialize(img.r06006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,179);


(lib.r06007 = function() {
	this.initialize(img.r06007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,179);


(lib.r06008 = function() {
	this.initialize(img.r06008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,179);


(lib.r06009 = function() {
	this.initialize(img.r06009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,179);


(lib.r06010 = function() {
	this.initialize(img.r06010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,179);


(lib.r06011 = function() {
	this.initialize(img.r06011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,179);


(lib.r06012 = function() {
	this.initialize(img.r06012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,179);


(lib.r06013 = function() {
	this.initialize(img.r06013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,179);


(lib.r06014 = function() {
	this.initialize(img.r06014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,179);


(lib.r06015 = function() {
	this.initialize(img.r06015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,179);


(lib.r06016 = function() {
	this.initialize(img.r06016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,179);


(lib.r07001 = function() {
	this.initialize(img.r07001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r07002 = function() {
	this.initialize(img.r07002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r07003 = function() {
	this.initialize(img.r07003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r07004 = function() {
	this.initialize(img.r07004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r07005 = function() {
	this.initialize(img.r07005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r07006 = function() {
	this.initialize(img.r07006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r07007 = function() {
	this.initialize(img.r07007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r07008 = function() {
	this.initialize(img.r07008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r07009 = function() {
	this.initialize(img.r07009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r07010 = function() {
	this.initialize(img.r07010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r07011 = function() {
	this.initialize(img.r07011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r07012 = function() {
	this.initialize(img.r07012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r07013 = function() {
	this.initialize(img.r07013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r07014 = function() {
	this.initialize(img.r07014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r08001 = function() {
	this.initialize(img.r08001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,156);


(lib.r09001 = function() {
	this.initialize(img.r09001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,476,377);


(lib.r10001 = function() {
	this.initialize(img.r10001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,456,279);


(lib.r10002 = function() {
	this.initialize(img.r10002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,456,279);


(lib.r10003 = function() {
	this.initialize(img.r10003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,456,279);


(lib.r10004 = function() {
	this.initialize(img.r10004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,456,279);


(lib.r10005 = function() {
	this.initialize(img.r10005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,456,279);


(lib.r10006 = function() {
	this.initialize(img.r10006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,456,279);


(lib.r11001 = function() {
	this.initialize(img.r11001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,342,251);


(lib.r11002 = function() {
	this.initialize(img.r11002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,156);


(lib.r11003 = function() {
	this.initialize(img.r11003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,156);


(lib.r12001 = function() {
	this.initialize(img.r12001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,212);


(lib.r12002 = function() {
	this.initialize(img.r12002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,212);


(lib.r12003 = function() {
	this.initialize(img.r12003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,212);


(lib.r12004 = function() {
	this.initialize(img.r12004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,212);


(lib.r12005 = function() {
	this.initialize(img.r12005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,212);


(lib.r12006 = function() {
	this.initialize(img.r12006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,212);


(lib.r12007 = function() {
	this.initialize(img.r12007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,212);


(lib.r12008 = function() {
	this.initialize(img.r12008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,212);


(lib.r12018 = function() {
	this.initialize(img.r12018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,147);


(lib.r13001 = function() {
	this.initialize(img.r13001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,139);


(lib.r13002 = function() {
	this.initialize(img.r13002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,141);


(lib.r14001 = function() {
	this.initialize(img.r14001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,123);


(lib.r14002 = function() {
	this.initialize(img.r14002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,123);


(lib.r15001 = function() {
	this.initialize(img.r15001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,151);


(lib.r15002 = function() {
	this.initialize(img.r15002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,151);


(lib.r16001 = function() {
	this.initialize(img.r16001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,178,151);


(lib.r16002 = function() {
	this.initialize(img.r16002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,178,151);


(lib.r16003 = function() {
	this.initialize(img.r16003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,153);


(lib.r17001 = function() {
	this.initialize(img.r17001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,142);


(lib.r17002 = function() {
	this.initialize(img.r17002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,142);


(lib.r18001 = function() {
	this.initialize(img.r18001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,139);


(lib.r18002 = function() {
	this.initialize(img.r18002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,139);


(lib.r18003 = function() {
	this.initialize(img.r18003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,139);


(lib.r18004 = function() {
	this.initialize(img.r18004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,139);


(lib.r18005 = function() {
	this.initialize(img.r18005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,139);


(lib.r18006 = function() {
	this.initialize(img.r18006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,139);


(lib.r18007 = function() {
	this.initialize(img.r18007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,139);


(lib.r18008 = function() {
	this.initialize(img.r18008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,139);


(lib.r18009 = function() {
	this.initialize(img.r18009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,139);


(lib.r18010 = function() {
	this.initialize(img.r18010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,139);


(lib.r18011 = function() {
	this.initialize(img.r18011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,139);


(lib.r18012 = function() {
	this.initialize(img.r18012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,139);


(lib.r18013 = function() {
	this.initialize(img.r18013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,139);


(lib.r18014 = function() {
	this.initialize(img.r18014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,139);


(lib.r18015 = function() {
	this.initialize(img.r18015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,139);


(lib.r18016 = function() {
	this.initialize(img.r18016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,139);


(lib.r19001 = function() {
	this.initialize(img.r19001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,130);


(lib.r19002 = function() {
	this.initialize(img.r19002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,130);


(lib.r19003 = function() {
	this.initialize(img.r19003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,130);


(lib.r19004 = function() {
	this.initialize(img.r19004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,130);


(lib.r19005 = function() {
	this.initialize(img.r19005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,130);


(lib.r19006 = function() {
	this.initialize(img.r19006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,130);


(lib.r19007 = function() {
	this.initialize(img.r19007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,130);


(lib.r19008 = function() {
	this.initialize(img.r19008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,130);


(lib.r19009 = function() {
	this.initialize(img.r19009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,130);


(lib.r19010 = function() {
	this.initialize(img.r19010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,130);


(lib.r19011 = function() {
	this.initialize(img.r19011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,130);


(lib.r19012 = function() {
	this.initialize(img.r19012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,130);


(lib.r19013 = function() {
	this.initialize(img.r19013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,130);


(lib.r19014 = function() {
	this.initialize(img.r19014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,130);


(lib.r19015 = function() {
	this.initialize(img.r19015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,130);


(lib.r19016 = function() {
	this.initialize(img.r19016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,130);


(lib.r19017 = function() {
	this.initialize(img.r19017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,130);


(lib.r19018 = function() {
	this.initialize(img.r19018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,130);


(lib.r19019 = function() {
	this.initialize(img.r19019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,130);


(lib.r19020 = function() {
	this.initialize(img.r19020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,130);


(lib.r19021 = function() {
	this.initialize(img.r19021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,130);


(lib.r20001 = function() {
	this.initialize(img.r20001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,150);


(lib.r20002 = function() {
	this.initialize(img.r20002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,150);


(lib.r20003 = function() {
	this.initialize(img.r20003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,150);


(lib.r20004 = function() {
	this.initialize(img.r20004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,150);


(lib.r20005 = function() {
	this.initialize(img.r20005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,150);


(lib.r20006 = function() {
	this.initialize(img.r20006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,150);


(lib.r20007 = function() {
	this.initialize(img.r20007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,150);


(lib.r20008 = function() {
	this.initialize(img.r20008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,150);


(lib.r20009 = function() {
	this.initialize(img.r20009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,150);


(lib.r20010 = function() {
	this.initialize(img.r20010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,150);


(lib.r20011 = function() {
	this.initialize(img.r20011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,150);


(lib.r20012 = function() {
	this.initialize(img.r20012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,150);


(lib.r21001 = function() {
	this.initialize(img.r21001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,219,383);


(lib.r21002 = function() {
	this.initialize(img.r21002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,158);


(lib.r22001 = function() {
	this.initialize(img.r22001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,136,204);


(lib.r23001 = function() {
	this.initialize(img.r23001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,146);


(lib.r23002 = function() {
	this.initialize(img.r23002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,51);


(lib.r24001 = function() {
	this.initialize(img.r24001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,164);


(lib.r25001 = function() {
	this.initialize(img.r25001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,140);


(lib.r25002 = function() {
	this.initialize(img.r25002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,236,165);


(lib.r25003 = function() {
	this.initialize(img.r25003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,467,455);


(lib.r26001 = function() {
	this.initialize(img.r26001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,149);


(lib.r26002 = function() {
	this.initialize(img.r26002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,149);


(lib.r26003 = function() {
	this.initialize(img.r26003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,149);


(lib.r26004 = function() {
	this.initialize(img.r26004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,149);


(lib.r26005 = function() {
	this.initialize(img.r26005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,149);


(lib.r26006 = function() {
	this.initialize(img.r26006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,149);


(lib.r26007 = function() {
	this.initialize(img.r26007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,149);


(lib.r26008 = function() {
	this.initialize(img.r26008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,149);


(lib.r27001 = function() {
	this.initialize(img.r27001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,180);


(lib.r28001 = function() {
	this.initialize(img.r28001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,252,180);


(lib.r29001 = function() {
	this.initialize(img.r29001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,155);


(lib.r30001 = function() {
	this.initialize(img.r30001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,146);


(lib.r31001 = function() {
	this.initialize(img.r31001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,239,211);


(lib.r31002 = function() {
	this.initialize(img.r31002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,181,253);


(lib.r31002_1 = function() {
	this.initialize(img.r31002_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,219);


(lib.r31003 = function() {
	this.initialize(img.r31003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,228);


(lib.r31004 = function() {
	this.initialize(img.r31004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,263,229);


(lib.r31005 = function() {
	this.initialize(img.r31005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,270,224);


(lib.r31006 = function() {
	this.initialize(img.r31006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,276,213);


(lib.r31007 = function() {
	this.initialize(img.r31007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,278,217);


(lib.r31008 = function() {
	this.initialize(img.r31008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,212);


(lib.r31009 = function() {
	this.initialize(img.r31009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,245,205);


(lib.r31010 = function() {
	this.initialize(img.r31010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,227,209);


(lib.r31011 = function() {
	this.initialize(img.r31011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,211,201);


(lib.r31012 = function() {
	this.initialize(img.r31012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,185,200);


(lib.r31013 = function() {
	this.initialize(img.r31013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,211,201);


(lib.r31014 = function() {
	this.initialize(img.r31014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,227,209);


(lib.r31015 = function() {
	this.initialize(img.r31015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,245,205);


(lib.r31016 = function() {
	this.initialize(img.r31016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,212);


(lib.r31017 = function() {
	this.initialize(img.r31017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,219);


(lib.r31018 = function() {
	this.initialize(img.r31018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,239,211);


(lib.r31019 = function() {
	this.initialize(img.r31019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,273);


(lib.r32001 = function() {
	this.initialize(img.r32001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,157);


(lib.r32002 = function() {
	this.initialize(img.r32002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,157);


(lib.r32003 = function() {
	this.initialize(img.r32003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,157);


(lib.r32004 = function() {
	this.initialize(img.r32004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,157);


(lib.r32005 = function() {
	this.initialize(img.r32005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,157);


(lib.r32006 = function() {
	this.initialize(img.r32006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,157);


(lib.r32007 = function() {
	this.initialize(img.r32007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,157);


(lib.r32008 = function() {
	this.initialize(img.r32008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,157);


(lib.r32009 = function() {
	this.initialize(img.r32009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,157);


(lib.r33001 = function() {
	this.initialize(img.r33001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,146);


(lib.r34001 = function() {
	this.initialize(img.r34001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,130);


(lib.r34002 = function() {
	this.initialize(img.r34002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,125);


(lib.r34003 = function() {
	this.initialize(img.r34003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,128);


(lib.r34004 = function() {
	this.initialize(img.r34004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,121);


(lib.r34005 = function() {
	this.initialize(img.r34005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1041,556);


(lib.r34006 = function() {
	this.initialize(img.r34006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,308,260);


(lib.r35001 = function() {
	this.initialize(img.r35001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,128);


(lib.r35002 = function() {
	this.initialize(img.r35002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,17,19);


(lib.r36001 = function() {
	this.initialize(img.r36001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,305);


(lib.r36002 = function() {
	this.initialize(img.r36002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,116);


(lib.r36003 = function() {
	this.initialize(img.r36003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,116);


(lib.r37001 = function() {
	this.initialize(img.r37001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,117);


(lib.r37002 = function() {
	this.initialize(img.r37002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,61,37);


(lib.r37003 = function() {
	this.initialize(img.r37003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,117);


(lib.r38001 = function() {
	this.initialize(img.r38001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,221,114);


(lib.r38002 = function() {
	this.initialize(img.r38002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,155);


(lib.r38003 = function() {
	this.initialize(img.r38003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,127);


(lib.r39001 = function() {
	this.initialize(img.r39001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,201);


(lib.r39002 = function() {
	this.initialize(img.r39002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,146);


(lib.r40001 = function() {
	this.initialize(img.r40001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,137);


(lib.r40002 = function() {
	this.initialize(img.r40002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,137);


(lib.r41001 = function() {
	this.initialize(img.r41001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,53);


(lib.r41002 = function() {
	this.initialize(img.r41002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,53);


(lib.r41003 = function() {
	this.initialize(img.r41003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,53);


(lib.r41004 = function() {
	this.initialize(img.r41004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,53);


(lib.r41005 = function() {
	this.initialize(img.r41005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,53);


(lib.r42001 = function() {
	this.initialize(img.r42001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,56);


(lib.r42002 = function() {
	this.initialize(img.r42002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,56);


(lib.r42003 = function() {
	this.initialize(img.r42003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,56);


(lib.r42004 = function() {
	this.initialize(img.r42004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,56);


(lib.r42005 = function() {
	this.initialize(img.r42005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,56);


(lib.r42006 = function() {
	this.initialize(img.r42006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,56);


(lib.r42007 = function() {
	this.initialize(img.r42007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,56);


(lib.r42008 = function() {
	this.initialize(img.r42008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,56);


(lib.r42009 = function() {
	this.initialize(img.r42009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,56);


(lib.r43001 = function() {
	this.initialize(img.r43001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,148);


(lib.r44001 = function() {
	this.initialize(img.r44001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,153);


(lib.r44002 = function() {
	this.initialize(img.r44002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,153);


(lib.r45001 = function() {
	this.initialize(img.r45001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,157);


(lib.r45002 = function() {
	this.initialize(img.r45002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,157);


(lib.r46001 = function() {
	this.initialize(img.r46001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,169);


(lib.r46002 = function() {
	this.initialize(img.r46002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,169);


(lib.r47001 = function() {
	this.initialize(img.r47001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,118);


(lib.r48001 = function() {
	this.initialize(img.r48001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,113);


(lib.r49001 = function() {
	this.initialize(img.r49001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,135);


(lib.r50001 = function() {
	this.initialize(img.r50001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,179);


(lib.r50002 = function() {
	this.initialize(img.r50002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,179);


(lib.r50003 = function() {
	this.initialize(img.r50003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,179);


(lib.r50004 = function() {
	this.initialize(img.r50004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,179);


(lib.r50005 = function() {
	this.initialize(img.r50005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,179);


(lib.r51001 = function() {
	this.initialize(img.r51001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,94);


(lib.r51002 = function() {
	this.initialize(img.r51002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,94);


(lib.r51003 = function() {
	this.initialize(img.r51003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,20);


(lib.r52001 = function() {
	this.initialize(img.r52001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,47,129);


(lib.r53001 = function() {
	this.initialize(img.r53001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,167);


(lib.r53002 = function() {
	this.initialize(img.r53002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,167);


(lib.r54001 = function() {
	this.initialize(img.r54001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,77);


(lib.r54002 = function() {
	this.initialize(img.r54002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,77);


(lib.r54003 = function() {
	this.initialize(img.r54003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,108);


(lib.r55001 = function() {
	this.initialize(img.r55001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,96);


(lib.r55002 = function() {
	this.initialize(img.r55002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,96);


(lib.r56001 = function() {
	this.initialize(img.r56001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,168);


(lib.r57001 = function() {
	this.initialize(img.r57001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,916,357);


(lib.r58001 = function() {
	this.initialize(img.r58001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,106);


(lib.r58002 = function() {
	this.initialize(img.r58002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,138);


(lib.r58003 = function() {
	this.initialize(img.r58003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,138);


(lib.zx1_xs1 = function() {
	this.initialize(img.zx1_xs1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.zx1_xs2 = function() {
	this.initialize(img.zx1_xs2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.zx1_xs3 = function() {
	this.initialize(img.zx1_xs3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.zx1_xs4 = function() {
	this.initialize(img.zx1_xs4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.zx1_xs5 = function() {
	this.initialize(img.zx1_xs5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.zx1_xs6 = function() {
	this.initialize(img.zx1_xs6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.zx1_xs7 = function() {
	this.initialize(img.zx1_xs7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.zx1_xs8 = function() {
	this.initialize(img.zx1_xs8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.zx2_xs1 = function() {
	this.initialize(img.zx2_xs1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.zx2_xs2 = function() {
	this.initialize(img.zx2_xs2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.zx2_xs3 = function() {
	this.initialize(img.zx2_xs3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.zx2_xs4 = function() {
	this.initialize(img.zx2_xs4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.zx2_xs5 = function() {
	this.initialize(img.zx2_xs5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.zx2_xs6 = function() {
	this.initialize(img.zx2_xs6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.zx2_xs7 = function() {
	this.initialize(img.zx2_xs7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.zx2_xs8 = function() {
	this.initialize(img.zx2_xs8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.zx3_xs1 = function() {
	this.initialize(img.zx3_xs1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.zx3_xs2 = function() {
	this.initialize(img.zx3_xs2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.zx3_xs3 = function() {
	this.initialize(img.zx3_xs3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.zx3_xs4 = function() {
	this.initialize(img.zx3_xs4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.zx3_xs5 = function() {
	this.initialize(img.zx3_xs5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.zx3_xs6 = function() {
	this.initialize(img.zx3_xs6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.zx3_xs7 = function() {
	this.initialize(img.zx3_xs7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.zx3_xs8 = function() {
	this.initialize(img.zx3_xs8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.r59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.r38003();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54,127);


(lib.r58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(1));

	// 图层 2
	this.instance = new lib.r58001();
	this.instance.setTransform(42,48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	// 图层 1
	this.instance_1 = new lib.r58002();

	this.instance_2 = new lib.r58003();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},4).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,172,154);


(lib.r57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.r57001();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,916,357);


(lib.r55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(1));

	// 图层 1
	this.instance = new lib.r55001();

	this.instance_1 = new lib.r55002();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,96);


(lib.r54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(1));

	// 图层 1
	this.instance = new lib.r54001();

	this.instance_1 = new lib.r54002();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45,77);


(lib.r53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_21 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(1));

	// 图层 1
	this.instance = new lib.r53001();

	this.instance_1 = new lib.r53002();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,226,167);


(lib.r50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// 图层 1
	this.instance = new lib.r50001();

	this.instance_1 = new lib.r50002();

	this.instance_2 = new lib.r50003();

	this.instance_3 = new lib.r50004();

	this.instance_4 = new lib.r50005();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,118,179);


(lib.r45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// 图层 1
	this.instance = new lib.r45001();

	this.instance_1 = new lib.r45002();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76,157);


(lib.r44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// 图层 1
	this.instance = new lib.r44001();

	this.instance_1 = new lib.r44002();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,105,153);


(lib.r42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(1));

	// 图层 1
	this.instance = new lib.r42001();

	this.instance_1 = new lib.r42002();

	this.instance_2 = new lib.r42003();

	this.instance_3 = new lib.r42004();

	this.instance_4 = new lib.r42005();

	this.instance_5 = new lib.r42006();

	this.instance_6 = new lib.r42007();

	this.instance_7 = new lib.r42008();

	this.instance_8 = new lib.r42009();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78,56);


(lib.r41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// 图层 1
	this.instance = new lib.r41001();

	this.instance_1 = new lib.r41002();

	this.instance_2 = new lib.r41003();

	this.instance_3 = new lib.r41004();

	this.instance_4 = new lib.r41005();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113,53);


(lib.r38_bq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.r38001();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,221,114);


(lib.r36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13).call(this.frame_13).wait(1));

	// 图层 2
	this.instance = new lib.r36002();
	this.instance.setTransform(99,41);

	this.instance_1 = new lib.r36003();
	this.instance_1.setTransform(99,41);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},5).wait(5));

	// 图层 1
	this.instance_2 = new lib.r36001();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,604,305);


(lib.r35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(1));

	// 图层 2
	this.instance = new lib.r35002();
	this.instance.setTransform(42,7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({_off:true},4).wait(1));

	// 图层 1
	this.instance_1 = new lib.r35001();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71,128);


(lib.r34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_16 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(1));

	// 图层 1
	this.instance = new lib.r34001();

	this.instance_1 = new lib.r34004();

	this.instance_2 = new lib.r34003();

	this.instance_3 = new lib.r34002();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance}]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,73,130);


(lib.r31_screen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.r31019();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,232,273);


(lib.r31_men = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17).call(this.frame_17).wait(1));

	// 图层 1
	this.instance = new lib.r31001();

	this.instance_1 = new lib.r31002_1();

	this.instance_2 = new lib.r31003();

	this.instance_3 = new lib.r31004();

	this.instance_4 = new lib.r31005();

	this.instance_5 = new lib.r31006();

	this.instance_6 = new lib.r31007();

	this.instance_7 = new lib.r31008();

	this.instance_8 = new lib.r31009();

	this.instance_9 = new lib.r31010();

	this.instance_10 = new lib.r31011();

	this.instance_11 = new lib.r31012();

	this.instance_12 = new lib.r31013();

	this.instance_13 = new lib.r31014();

	this.instance_14 = new lib.r31015();

	this.instance_15 = new lib.r31016();

	this.instance_16 = new lib.r31017();

	this.instance_17 = new lib.r31018();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,239,211);


(lib.r28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.r28001();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,252,180);


(lib.r27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.r27001();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69,180);


(lib.r26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(1));

	// 图层 1
	this.instance = new lib.r26001();

	this.instance_1 = new lib.r26002();

	this.instance_2 = new lib.r26003();

	this.instance_3 = new lib.r26004();

	this.instance_4 = new lib.r26005();

	this.instance_5 = new lib.r26006();

	this.instance_6 = new lib.r26007();

	this.instance_7 = new lib.r26008();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54,149);


(lib.r23_heart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.r23002();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,51);


(lib.r21_heart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.r21002();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88,158);


(lib.r20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(1));

	// 图层 1
	this.instance = new lib.r20001();

	this.instance_1 = new lib.r20002();

	this.instance_2 = new lib.r20003();

	this.instance_3 = new lib.r20004();

	this.instance_4 = new lib.r20005();

	this.instance_5 = new lib.r20006();

	this.instance_6 = new lib.r20007();

	this.instance_7 = new lib.r20008();

	this.instance_8 = new lib.r20009();

	this.instance_9 = new lib.r20010();

	this.instance_10 = new lib.r20011();

	this.instance_11 = new lib.r20012();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69,150);


(lib.r17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// 图层 1
	this.instance = new lib.r17001();

	this.instance_1 = new lib.r17002();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance}]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,142);


(lib.r16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// 图层 1
	this.instance = new lib.r16001();

	this.instance_1 = new lib.r16002();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance}]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,178,151);


(lib.r15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// 图层 1
	this.instance = new lib.r15001();

	this.instance_1 = new lib.r15002();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance}]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,167,151);


(lib.r14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// 图层 1
	this.instance = new lib.r14001();

	this.instance_1 = new lib.r14002();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance}]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116,123);


(lib.r13_yellow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.r13002();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64,141);


(lib.r13_white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.r13001();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76,139);


(lib.r12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(1));

	// 图层 3
	this.instance = new lib.r12018();
	this.instance.setTransform(81,77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16));

	// 图层 1
	this.instance_1 = new lib.r12001();

	this.instance_2 = new lib.r12002();

	this.instance_3 = new lib.r12003();

	this.instance_4 = new lib.r12004();

	this.instance_5 = new lib.r12005();

	this.instance_6 = new lib.r12006();

	this.instance_7 = new lib.r12007();

	this.instance_8 = new lib.r12008();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,162,224);


(lib.r11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// 图层 2
	this.instance = new lib.r11002();
	this.instance.setTransform(102,-46);

	this.instance_1 = new lib.r11003();
	this.instance_1.setTransform(102,-46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance_1}]},3).wait(4));

	// 图层 1
	this.instance_2 = new lib.r11001();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,342,251);


(lib.r09 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.r09001();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,476,377);


(lib.r06 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_16 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(1));

	// 图层 1
	this.instance = new lib.r06001();

	this.instance_1 = new lib.r06002();

	this.instance_2 = new lib.r06003();

	this.instance_3 = new lib.r06004();

	this.instance_4 = new lib.r06005();

	this.instance_5 = new lib.r06006();

	this.instance_6 = new lib.r06007();

	this.instance_7 = new lib.r06008();

	this.instance_8 = new lib.r06009();

	this.instance_9 = new lib.r06010();

	this.instance_10 = new lib.r06011();

	this.instance_11 = new lib.r06012();

	this.instance_12 = new lib.r06013();

	this.instance_13 = new lib.r06014();

	this.instance_14 = new lib.r06015();

	this.instance_15 = new lib.r06016();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,167,179);


(lib.qpy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(2,1,1).p("APkBXQgkGdk9EKQk+ELmbglQmcgkkLk9QkKk+AkmbQAkmcE+kLQE9kKGbAkQGdAkEKE+QELE9glGbg");
	this.shape.setTransform(100.1,100.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhWPkQmcgkkLk9QkKk+AkmbQAkmcE+kLQE9kKGbAkQGdAkEKE+QELE9glGbQgkGdk9EKQkYDrlhAAQguAAgygFg");
	this.shape_1.setTransform(100.1,100.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,202.3,202.3);


(lib.qpk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("A2pkNMAtTAAAQBnAABKBJQBJBKAABnIAAAnQAABnhJBJQhKBKhnAAMgtTAAAQhoAAhJhKQhJhJAAhnIAAgnQAAhnBJhKQBJhJBoAAg");
	this.shape.setTransform(170.1,27);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A2pEOQhnAAhKhKQhJhJAAhoIAAglQAAhoBJhKQBKhIBngBMAtTAAAQBoABBIBIQBKBKAABoIAAAlQAABohKBJQhIBKhoAAg");
	this.shape_1.setTransform(170.1,27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,342.1,56);


(lib.qpj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("ABOhDIhOCHIhNiH");
	this.shape.setTransform(7.8,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhNhDICbAAIhOCGg");
	this.shape_1.setTransform(7.8,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,17.7,15.6);


(lib.photowrap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(2,1,1).p("APkBXQgkGdk9EKQk+ELmbglQmcgkkLk9QkKk+AkmbQAkmcE+kLQE9kKGbAkQGdAkEKE+QELE9glGbg");
	this.shape.setTransform(100.1,100.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhWPkQmcgkkLk9QkKk+AkmbQAkmcE+kLQE9kKGbAkQGdAkEKE+QELE9glGbQgkGdk9EKQkYDrlhAAQguAAgygFg");
	this.shape_1.setTransform(100.1,100.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,202.3,202.3);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 7
	this.instance = new lib.bg_06();
	this.instance.setTransform(5000,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 6
	this.instance_1 = new lib.bg_05();
	this.instance_1.setTransform(4000,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 5
	this.instance_2 = new lib.bg_04();
	this.instance_2.setTransform(3000,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 图层 4
	this.instance_3 = new lib.bg_03();
	this.instance_3.setTransform(2000,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// 图层 3
	this.instance_4 = new lib.bg_02();
	this.instance_4.setTransform(1000,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// 图层 2
	this.instance_5 = new lib.bg_01();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6069,1334);


(lib.zx3_xs8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.text = new cjs.Text("你太丑，惊吓到我了！", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 330;
	this.text.setTransform(175.1,194.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// 图层 5
	this.instance = new lib.qpk();
	this.instance.setTransform(170.1,212.1,0.9,1.2,0,0,0,170.1,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.instance_1 = new lib.zx3_xs8();
	this.instance_1.setTransform(68,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 4
	this.instance_2 = new lib.qpy();
	this.instance_2.setTransform(170.1,100.1,1,1,0,0,0,100.1,100.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8,-1,334.1,246.8);


(lib.zx3_xs7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.text = new cjs.Text("哦，初音未来区coser旁有\n疑似目标出现，你去看看撒~", "24px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 330;
	this.text.setTransform(171.1,183.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// 图层 5
	this.instance = new lib.qpk();
	this.instance.setTransform(170.1,212.2,1,1.2,0,0,0,170.2,27.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.instance_1 = new lib.zx3_xs7();
	this.instance_1.setTransform(68,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 4
	this.instance_2 = new lib.qpy();
	this.instance_2.setTransform(170.1,100.1,1,1,0,0,0,100.1,100.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-1,342.1,246.7);


(lib.zx3_xs6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.text = new cjs.Text("这位阿姨啊~她和我的球\n衣合影后去极光体验区了", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 381;
	this.text.setTransform(171.6,182.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// 图层 5
	this.instance = new lib.qpk();
	this.instance.setTransform(170.1,212.1,0.9,1.2,0,0,0,170.1,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.instance_1 = new lib.zx3_xs6();
	this.instance_1.setTransform(68,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 4
	this.instance_2 = new lib.qpy();
	this.instance_2.setTransform(170.1,100.1,1,1,0,0,0,100.1,100.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-1,385.1,259.1);


(lib.zx3_xs5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.text = new cjs.Text("走过路过不要错过~", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 330;
	this.text.setTransform(177.1,194.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// 图层 5
	this.instance = new lib.qpk();
	this.instance.setTransform(170.1,212.1,0.9,1.2,0,0,0,170.1,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.instance_1 = new lib.zx3_xs5();
	this.instance_1.setTransform(68,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 4
	this.instance_2 = new lib.qpy();
	this.instance_2.setTransform(170.1,100.1,1,1,0,0,0,100.1,100.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,-1,334.1,246.8);


(lib.zx3_xs4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.text = new cjs.Text("憋打扰我们拍照！\n她看装备去了！", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 330;
	this.text.setTransform(177.1,181.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// 图层 5
	this.instance = new lib.qpk();
	this.instance.setTransform(170.1,212.1,0.9,1.2,0,0,0,170.1,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.instance_1 = new lib.zx3_xs4();
	this.instance_1.setTransform(68,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 4
	this.instance_2 = new lib.qpy();
	this.instance_2.setTransform(170.1,100.1,1,1,0,0,0,100.1,100.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,-1,334.1,246.8);


(lib.zx3_xs3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.text = new cjs.Text("“啥子呦”", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 302;
	this.text.setTransform(170,197.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// 图层 5
	this.instance = new lib.qpk();
	this.instance.setTransform(170.1,212.1,0.9,1.2,0,0,0,170.1,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.instance_1 = new lib.zx3_xs3();
	this.instance_1.setTransform(68,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 4
	this.instance_2 = new lib.qpy();
	this.instance_2.setTransform(170.1,100.1,1,1,0,0,0,100.1,100.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.1,-1,307.9,246.8);


(lib.zx3_xs2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.text = new cjs.Text("就算偷拍，她也不能\n打我脸吧！", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 330;
	this.text.setTransform(177.1,182.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// 图层 5
	this.instance = new lib.qpk();
	this.instance.setTransform(170.1,212.1,0.9,1.2,0,0,0,170.1,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.instance_1 = new lib.zx3_xs2();
	this.instance_1.setTransform(68,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 4
	this.instance_2 = new lib.qpy();
	this.instance_2.setTransform(170.1,100.1,1,1,0,0,0,100.1,100.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,-1,334.1,246.8);


(lib.zx3_xs1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.text = new cjs.Text("咩！她自拍完走去\n卖周边那了~", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 330;
	this.text.setTransform(177.1,182.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// 图层 5
	this.instance = new lib.qpk();
	this.instance.setTransform(170.1,212.1,0.9,1.2,0,0,0,170.1,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.instance_1 = new lib.zx3_xs1();
	this.instance_1.setTransform(68,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 4
	this.instance_2 = new lib.qpy();
	this.instance_2.setTransform(170.1,100.1,1,1,0,0,0,100.1,100.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,-1,334.1,246.8);


(lib.zx3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// 支线三
	this.instance = new lib.zx3_xs1_1();
	this.instance.setTransform(1864.5,597.7,1,1,0,0,0,177.1,123.5);

	this.instance_1 = new lib.zx3_xs2_1();
	this.instance_1.setTransform(4113.1,353.6,1,1,0,0,0,177.1,123.5);

	this.instance_2 = new lib.zx3_xs3_1();
	this.instance_2.setTransform(4415.1,291.6,1,1,0,0,0,177.1,123.5);

	this.instance_3 = new lib.zx3_xs4_1();
	this.instance_3.setTransform(104.1,145.6,1,1,0,0,0,171.1,129.5);

	this.instance_4 = new lib.zx3_xs5_1();
	this.instance_4.setTransform(900.3,335.6,1,1,0,0,0,177.1,123.5);

	this.instance_5 = new lib.zx3_xs6_1();
	this.instance_5.setTransform(4211.1,-82.4,1,1,0,0,0,177.1,129.5);

	this.instance_6 = new lib.zx3_xs7_1();
	this.instance_6.setTransform(3470.8,-85.9,1,1,0,0,0,171.1,122.3);

	this.instance_7 = new lib.zx3_xs8_1();
	this.instance_7.setTransform(2196.6,-13.9,1,1,0,0,0,171.1,122.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.zx2_xs8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.text = new cjs.Text("明明是卖葱的，\n却要一直卖萌!带走！", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 330;
	this.text.setTransform(177.1,181.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// 图层 5
	this.instance = new lib.qpk();
	this.instance.setTransform(170.1,212.1,0.9,1.2,0,0,0,170.1,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.instance_1 = new lib.zx2_xs8();
	this.instance_1.setTransform(68,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 4
	this.instance_2 = new lib.qpy();
	this.instance_2.setTransform(170.1,100.1,1,1,0,0,0,100.1,100.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,-1,334.1,246.8);


(lib.zx2_xs7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.text = new cjs.Text("为了正义，踢翻这碗狗粮", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 330;
	this.text.setTransform(171.1,194.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// 图层 5
	this.instance = new lib.qpk();
	this.instance.setTransform(170.1,212.1,0.9,1.2,0,0,0,170.1,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.instance_1 = new lib.zx2_xs7();
	this.instance_1.setTransform(68,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 4
	this.instance_2 = new lib.qpy();
	this.instance_2.setTransform(170.1,100.1,1,1,0,0,0,100.1,100.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4,-1,334.1,246.8);


(lib.zx2_xs6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.text = new cjs.Text("我的蜥蜴可爱不？", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 330;
	this.text.setTransform(173.1,194.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// 图层 5
	this.instance = new lib.qpk();
	this.instance.setTransform(170.1,212.1,0.9,1.2,0,0,0,170.1,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.instance_1 = new lib.zx2_xs6();
	this.instance_1.setTransform(68,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 4
	this.instance_2 = new lib.qpy();
	this.instance_2.setTransform(170.1,100.1,1,1,0,0,0,100.1,100.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6,-1,334.1,246.8);


(lib.zx2_xs5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.text = new cjs.Text("嘤嘤嘤锤你胸口~", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 330;
	this.text.setTransform(173.1,194.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// 图层 5
	this.instance = new lib.qpk();
	this.instance.setTransform(170.1,212.1,0.9,1.2,0,0,0,170.1,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.instance_1 = new lib.zx2_xs5();
	this.instance_1.setTransform(68,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 4
	this.instance_2 = new lib.qpy();
	this.instance_2.setTransform(170.1,100.1,1,1,0,0,0,100.1,100.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6,-1,334.1,246.8);


(lib.zx2_xs4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.text = new cjs.Text("这么可爱一定是男孩子呀", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 330;
	this.text.setTransform(173.1,193.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// 图层 5
	this.instance = new lib.qpk();
	this.instance.setTransform(170.1,212.1,0.9,1.2,0,0,0,170.1,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.instance_1 = new lib.zx2_xs4();
	this.instance_1.setTransform(68,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 4
	this.instance_2 = new lib.qpy();
	this.instance_2.setTransform(170.1,100.1,1,1,0,0,0,100.1,100.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6,-1,334.1,250.8);


(lib.zx2_xs3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.text = new cjs.Text("这小花猫牙齿太长\n需要报备！", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 330;
	this.text.setTransform(173.1,181.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// 图层 5
	this.instance = new lib.qpk();
	this.instance.setTransform(170.1,212.1,0.9,1.2,0,0,0,170.1,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.instance_1 = new lib.zx2_xs3();
	this.instance_1.setTransform(68,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 4
	this.instance_2 = new lib.qpy();
	this.instance_2.setTransform(170.1,100.1,1,1,0,0,0,100.1,100.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6,-1,334.1,246.8);


(lib.zx2_xs2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.text = new cjs.Text("呀！我只是个路人啊！\n求放过！", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 330;
	this.text.setTransform(173.1,182.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// 图层 5
	this.instance = new lib.qpk();
	this.instance.setTransform(170.1,212.1,0.9,1.2,0,0,0,170.1,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.instance_1 = new lib.zx2_xs2();
	this.instance_1.setTransform(68,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 4
	this.instance_2 = new lib.qpy();
	this.instance_2.setTransform(170.1,100.1,1,1,0,0,0,100.1,100.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6,-1,334.1,246.8);


(lib.zx2_xs1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.zx2_xs1();
	this.instance.setTransform(68,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 3
	this.text = new cjs.Text("看什么看，没见过\n大老爷们！", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 326;
	this.text.setTransform(178.1,179.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// 图层 5
	this.instance_1 = new lib.qpk();
	this.instance_1.setTransform(178.1,210.1,1,1.2,0,0,0,170.1,27);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 4
	this.instance_2 = new lib.qpy();
	this.instance_2.setTransform(170.1,100.1,1,1,0,0,0,100.1,100.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,-1,342.1,244.7);


(lib.zx2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// 支线二
	this.instance = new lib.zx2_xs1_1();
	this.instance.setTransform(4467.1,178.1,1,1,0,0,0,170.1,122.3);

	this.zx1_xs2 = new lib.zx2_xs2_1();
	this.zx1_xs2.setTransform(86.1,119.5,1,1,0,0,0,170.1,119.5);

	this.instance_1 = new lib.zx2_xs3_1();
	this.instance_1.setTransform(3390.9,624.3,1,1,0,0,0,173.1,122.3);

	this.instance_2 = new lib.zx2_xs4_1();
	this.instance_2.setTransform(1378.4,-41.8,1,1,0,0,0,173.1,122.3);

	this.instance_3 = new lib.zx2_xs5_1();
	this.instance_3.setTransform(5239.3,-102.5,1,1,0,0,0,173.1,126.3);

	this.instance_4 = new lib.zx2_xs6_1();
	this.instance_4.setTransform(2404.6,221.6,1,1,0,0,0,173.1,126.3);

	this.instance_5 = new lib.zx2_xs7_1();
	this.instance_5.setTransform(3823,323.6,1,1,0,0,0,173.1,126.3);

	this.instance_6 = new lib.zx2_xs8_1();
	this.instance_6.setTransform(2726.7,-264.5,1,1,0,0,0,171.1,126.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.zx1_xs2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.zx1_xs8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.zx1_xs8();
	this.instance.setTransform(68,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 3
	this.text = new cjs.Text("哇！这都被你找到了！", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 334;
	this.text.setTransform(181.1,187.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// 图层 5
	this.instance_1 = new lib.qpk();
	this.instance_1.setTransform(178.1,204.1,1,1,0,0,0,170.1,27);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 4
	this.instance_2 = new lib.qpy();
	this.instance_2.setTransform(170.1,100.1,1,1,0,0,0,100.1,100.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,-1,343.1,233.1);


(lib.zx1_xs7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.zx1_xs7();
	this.instance.setTransform(68,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 3
	this.text = new cjs.Text("有了它，每天早上都是\n在逆袭中醒来", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 334;
	this.text.setTransform(181.1,176.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// 图层 5
	this.instance_1 = new lib.qpk();
	this.instance_1.setTransform(178.1,204.1,1,1.2,0,0,0,170.1,27);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 4
	this.instance_2 = new lib.qpy();
	this.instance_2.setTransform(170.1,100.1,1,1,0,0,0,100.1,100.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,-1,343.1,238.7);


(lib.zx1_xs6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.zx1_xs6();
	this.instance.setTransform(68,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 3
	this.text = new cjs.Text("我是好人", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 334;
	this.text.setTransform(180.6,187.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// 图层 5
	this.instance_1 = new lib.qpk();
	this.instance_1.setTransform(178.1,204.1,1,1,0,0,0,170.1,27);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 4
	this.instance_2 = new lib.qpy();
	this.instance_2.setTransform(170.1,100.1,1,1,0,0,0,100.1,100.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,-1,342.6,233.1);


(lib.zx1_xs5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.text = new cjs.Text("小酒窝长睫毛，\n迷人的无可救药~", "24px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 334;
	this.text.setTransform(181.1,185.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// 图层 5
	this.instance = new lib.qpk();
	this.instance.setTransform(178.1,212.1,1,1.2,0,0,0,170.1,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.instance_1 = new lib.zx1_xs5();
	this.instance_1.setTransform(68,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 4
	this.instance_2 = new lib.qpy();
	this.instance_2.setTransform(170.1,100.1,1,1,0,0,0,100.1,100.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,-1,343.1,246.7);


(lib.zx1_xs4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.text = new cjs.Text("帮我好好照顾她", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 334;
	this.text.setTransform(171.1,195.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// 图层 5
	this.instance = new lib.qpk();
	this.instance.setTransform(178.1,212.1,1,1.2,0,0,0,170.1,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.instance_1 = new lib.zx1_xs4();
	this.instance_1.setTransform(68,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 4
	this.instance_2 = new lib.qpy();
	this.instance_2.setTransform(170.1,100.1,1,1,0,0,0,100.1,100.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.1,-1,347.1,252.8);


(lib.zx1_xs3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.text = new cjs.Text("心形漫画加持下少女心爆棚！", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 338;
	this.text.setTransform(185.1,203.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// 图层 5
	this.instance = new lib.qpk();
	this.instance.setTransform(178.1,220.1,1,1,0,0,0,170.1,27.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.instance_1 = new lib.zx1_xs3();
	this.instance_1.setTransform(68,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 4
	this.instance_2 = new lib.qpy();
	this.instance_2.setTransform(170.1,100.1,1,1,0,0,0,100.1,100.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,-1,349.1,248.8);


(lib.zx1_xs2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.text = new cjs.Text("意外！海煞竟向你臣服啦！", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 334;
	this.text.setTransform(181.1,197.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// 图层 5
	this.instance = new lib.qpk();
	this.instance.setTransform(178.1,212.1,1,1,0,0,0,170.1,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.instance_1 = new lib.zx1_xs2();
	this.instance_1.setTransform(68,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 4
	this.instance_2 = new lib.qpy();
	this.instance_2.setTransform(170.1,100.1,1,1,0,0,0,100.1,100.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,-1,343.1,241.1);


(lib.r38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.r38002();
	this.instance.setTransform(144,51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 1
	this.bq = new lib.r38_bq();
	this.bq.setTransform(110.5,57,1,1,0,0,0,110.5,57);

	this.timeline.addTween(cjs.Tween.get(this.bq).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,221,206);


(lib.r31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.men = new lib.r31_men();
	this.men.setTransform(119.5,105.5,1,1,0,0,0,119.5,105.5);

	this.timeline.addTween(cjs.Tween.get(this.men).wait(1));

	// 图层 2
	this.screen = new lib.r31_screen();
	this.screen.setTransform(-31,37.5,1,1,0,0,0,116,136.5);

	this.timeline.addTween(cjs.Tween.get(this.screen).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147,-99,386,310);


(lib.r23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(1));

	// 图层 2
	this.instance = new lib.r23_heart();
	this.instance.setTransform(39,3.5,0.529,0.529,0,0,0,25.9,25.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({regX:26,regY:25.5,scaleX:1,scaleY:1,alpha:0},8).wait(1));

	// 图层 1
	this.instance_1 = new lib.r23001();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,146);


(lib.r21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// 图层 2
	this.instance = new lib.r21_heart();
	this.instance.setTransform(141,264,0.5,0.5,0,0,0,88,158);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({scaleX:1,scaleY:1,x:118,y:226,alpha:0},7).wait(1));

	// 图层 1
	this.instance_1 = new lib.r21001();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,219,383);


(lib.r19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(1));

	// 图层 4
	this.text = new cjs.Text("把你miku掉", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 203;
	this.text.setTransform(139.8,181.7);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:false},0).wait(19));

	// 图层 3
	this.instance = new lib.qpj();
	this.instance.setTransform(56.1,163.1,1,1,180,0,0,7.8,6.8);

	this.instance_1 = new lib.qpk();
	this.instance_1.setTransform(144.1,196.1,1,1,0,0,0,170.1,27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},2).wait(19));

	// 图层 1
	this.instance_2 = new lib.r19001();

	this.instance_3 = new lib.r19002();

	this.instance_4 = new lib.r19003();

	this.instance_5 = new lib.r19004();

	this.instance_6 = new lib.r19005();

	this.instance_7 = new lib.r19006();

	this.instance_8 = new lib.r19007();

	this.instance_9 = new lib.r19008();

	this.instance_10 = new lib.r19009();

	this.instance_11 = new lib.r19010();

	this.instance_12 = new lib.r19011();

	this.instance_13 = new lib.r19012();

	this.instance_14 = new lib.r19013();

	this.instance_15 = new lib.r19014();

	this.instance_16 = new lib.r19015();

	this.instance_17 = new lib.r19016();

	this.instance_18 = new lib.r19017();

	this.instance_19 = new lib.r19018();

	this.instance_20 = new lib.r19019();

	this.instance_21 = new lib.r19020();

	this.instance_22 = new lib.r19021();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,163,130);


(lib.qpxs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.qpk();
	this.instance.setTransform(106.1,212.1,0.833,1,0,0,0,170,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 1
	this.instance_1 = new lib.qpy();
	this.instance_1.setTransform(106.1,100.1,1,1,0,0,0,100.1,100.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.4,-1,285.1,241.1);


(lib.qp1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.qpj();
	this.instance.setTransform(83.6,59.8,1,1,0,0,0,7.8,6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 1
	this.instance_1 = new lib.qpk();
	this.instance_1.setTransform(170.1,27,1,1,0,0,0,170.1,27);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,342.1,68.6);


(lib.zx1_xs1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.text = new cjs.Text("真美味！", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 276;
	this.text.setTransform(170.1,195.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// 图层 2
	this.instance = new lib.zx1_xs1();
	this.instance.setTransform(68,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 1
	this.zx2_xs2 = new lib.qpxs();
	this.zx2_xs2.setTransform(170,122.3,1,1,0,0,0,106,122.3);

	this.timeline.addTween(cjs.Tween.get(this.zx2_xs2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27.6,-1,285.1,241.1);


(lib.zx1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// 支线二
	this.instance = new lib.zx1_xs1_1();
	this.instance.setTransform(3874.9,534.2,1,1,0,0,0,170.1,122.3);

	this.zx1_xs2 = new lib.zx1_xs2_1();
	this.zx1_xs2.setTransform(4231.1,387.6,1,1,0,0,0,170.1,119.5);

	this.instance_1 = new lib.zx1_xs3_1();
	this.instance_1.setTransform(4531.2,160.2,1,1,0,0,0,173.1,122.3);

	this.instance_2 = new lib.zx1_xs4_1();
	this.instance_2.setTransform(682.2,-41.8,1,1,0,0,0,173.1,122.3);

	this.instance_3 = new lib.zx1_xs5_1();
	this.instance_3.setTransform(1494.4,-166.5,1,1,0,0,0,173.1,126.3);

	this.instance_4 = new lib.zx1_xs6_1();
	this.instance_4.setTransform(5385.4,-26.5,1,1,0,0,0,173.1,126.3);

	this.instance_5 = new lib.zx1_xs7_1();
	this.instance_5.setTransform(1816,92.1,1,1,0,0,0,178.6,115.5);

	this.instance_6 = new lib.zx1_xs8_1();
	this.instance_6.setTransform(2722.2,426.2,1,1,0,0,0,178.6,115.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.zx1_xs2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.r56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(1));

	// 图层 3
	this.text = new cjs.Text("哇，若风和我们一队！", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 322;
	this.text.setTransform(177.1,-44.3);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:false},0).wait(14));

	// 图层 2
	this.instance = new lib.qp1();
	this.instance.setTransform(170.1,-24,1,1,0,0,0,170.1,33.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(14));

	// 图层 1
	this.instance_1 = new lib.r56001();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,226,168);


(lib.r52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(1));

	// 图层 3
	this.text = new cjs.Text("这是我们请来的特约嘉宾", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 322;
	this.text.setTransform(89,-72.3);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:false},0).wait(23));

	// 图层 2
	this.instance = new lib.qp1();
	this.instance.setTransform(88.1,-52,1,1,0,0,0,170.1,33.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(23));

	// 图层 4
	this.photowrap = new lib.photowrap();
	this.photowrap.setTransform(82,-182,1,1,0,0,0,100.1,100.1);
	this.photowrap._off = true;

	this.timeline.addTween(cjs.Tween.get(this.photowrap).wait(2).to({_off:false},0).wait(23));

	// 图层 1
	this.instance_1 = new lib.r52001();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47,129);


(lib.r51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(1));

	// 图层 3
	this.text = new cjs.Text("你猜我是好身份还是坏身份？", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 371;
	this.text.setTransform(112.6,-54.3);

	this.instance = new lib.qp1();
	this.instance.setTransform(106.1,-33.3,1,1,0,0,0,170.1,33.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.text}]},2).wait(19));

	// 图层 2
	this.instance_1 = new lib.r51003();
	this.instance_1.setTransform(36,34);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(19));

	// 图层 1
	this.instance_2 = new lib.r51001();

	this.instance_3 = new lib.r51002();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},2).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,95,94);


(lib.r49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(1));

	// 图层 3
	this.text = new cjs.Text("马老师是铁狼一匹", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 296;
	this.text.setTransform(80.1,-66.3);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:false},0).wait(14));

	// 图层 2
	this.instance = new lib.qp1();
	this.instance.setTransform(82.2,-46,1,1,0,0,0,170.1,33.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(14));

	// 图层 1
	this.instance_1 = new lib.r49001();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49,135);


(lib.r48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_16 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(1));

	// 图层 3
	this.text = new cjs.Text("教练，我想打篮球，\n玩最强NBA", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 326;
	this.text.setTransform(125.1,-84);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:false},0).wait(15));

	// 图层 2
	this.instance = new lib.qp1();
	this.instance.setTransform(126.1,-50,1,1.2,0,0,0,170.1,33.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(15));

	// 图层 1
	this.instance_1 = new lib.r48001();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68,113);


(lib.r47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_21 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(1));

	// 图层 3
	this.text = new cjs.Text("这位阿姨啊~她和我的球衣\n合影后去极光体验区了", "24px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 369;
	this.text.setTransform(92,-78.1);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:false},0).wait(20));

	// 图层 2
	this.instance = new lib.qp1();
	this.instance.setTransform(92.1,-42,1,1.2,0,0,0,170.1,33.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(20));

	// 图层 1
	this.instance_1 = new lib.r47001();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68,118);


(lib.r46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_21 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(1));

	// 图层 4
	this.text = new cjs.Text("随便一翻都是爱你形状", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 328;
	this.text.setTransform(148.1,-70.3);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(3).to({_off:false},0).wait(19));

	// 图层 3
	this.instance = new lib.qp1();
	this.instance.setTransform(146.1,-49.3,1,1,0,0,0,170.1,33.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(19));

	// 图层 1
	this.instance_1 = new lib.r46001();

	this.instance_2 = new lib.r46002();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},3).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97,169);


(lib.r43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// 图层 3
	this.text = new cjs.Text("这条怪鱼看着好怕怕~", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 328;
	this.text.setTransform(110.1,-66.3);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:false},0).wait(13));

	// 图层 2
	this.instance = new lib.qp1();
	this.instance.setTransform(110.2,-46,1,1,0,0,0,170.1,33.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(13));

	// 图层 1
	this.instance_1 = new lib.r43001();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,148);


(lib.r40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_40 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40).call(this.frame_40).wait(1));

	// 图层 3
	this.text = new cjs.Text("就算偷拍，\n她也不能打我脸吧！", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 318;
	this.text.setTransform(107.1,-88.3);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:false},0).wait(39));

	// 图层 2
	this.instance = new lib.qp1();
	this.instance.setTransform(98.1,-53.3,1,1.2,0,0,0,170.1,33.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(39));

	// 图层 1
	this.instance_1 = new lib.r40001();

	this.instance_2 = new lib.r40002();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},2).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,137);


(lib.r39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(1));

	// 图层 3
	this.text = new cjs.Text("si了都要原谅", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 270;
	this.text.setTransform(115.1,-8.3);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:false},0).wait(10));

	// 图层 2
	this.instance = new lib.qp1();
	this.instance.setTransform(118.2,12.1,1,1,0,0,0,170.1,33.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(10));

	// 图层 1
	this.instance_1 = new lib.r39001();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139,201);


(lib.r37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_28 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(28).call(this.frame_28).wait(1));

	// 图层 5
	this.text = new cjs.Text("震惊！这样的球界惨剧堪\n比中国足球！", "24px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 315;
	this.text.setTransform(116.6,-86.3);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(4).to({_off:false},0).wait(25));

	// 图层 4
	this.instance = new lib.qp1();
	this.instance.setTransform(119.1,-51,1,1.2,0,0,0,170.1,33.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(25));

	// 图层 2
	this.instance_1 = new lib.r37002();
	this.instance_1.setTransform(8,37);

	this.instance_2 = new lib.r37003();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},4).wait(25));

	// 图层 1
	this.instance_3 = new lib.r37001();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},4).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,117);


(lib.r33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1));

	// 图层 3
	this.text = new cjs.Text("你有没有见到我的女朋友？", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 322;
	this.text.setTransform(115,-80.6);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:false},0).wait(18));

	// 图层 2
	this.instance = new lib.qp1();
	this.instance.setTransform(112.1,-60,1,1,0,0,0,170.1,33.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(18));

	// 图层 1
	this.instance_1 = new lib.r33001();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62,146);


(lib.r32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_27 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(27).call(this.frame_27).wait(1));

	// 图层 3
	this.text = new cjs.Text("人家拿小拳拳捶你胸口!!!(｡• ︿•̀｡)\n大坏蛋，打死你(つд⊂)", "24px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 458;
	this.text.setTransform(88.1,-79.3);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:false},0).wait(26));

	// 图层 2
	this.instance = new lib.qp1();
	this.instance.setTransform(90.1,-42,1.3,1.2,0,0,0,170,33.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(26));

	// 图层 1
	this.instance_1 = new lib.r32001();

	this.instance_2 = new lib.r32002();

	this.instance_3 = new lib.r32003();

	this.instance_4 = new lib.r32004();

	this.instance_5 = new lib.r32005();

	this.instance_6 = new lib.r32006();

	this.instance_7 = new lib.r32007();

	this.instance_8 = new lib.r32008();

	this.instance_9 = new lib.r32009();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64,157);


(lib.r30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(1));

	// 图层 3
	this.text = new cjs.Text("叔叔，这个无尽远征怎么玩？", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 342;
	this.text.setTransform(123.1,-72.3);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:false},0).wait(10));

	// 图层 2
	this.instance = new lib.qp1();
	this.instance.setTransform(118.1,-52,1.2,1,0,0,0,170,33.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(10));

	// 图层 1
	this.instance_1 = new lib.r30001();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76,146);


(lib.r29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(1));

	// 图层 3
	this.text = new cjs.Text("这个酱紫玩~", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 174;
	this.text.setTransform(91.1,-60.6);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:false},0).wait(10));

	// 图层 2
	this.instance = new lib.qp1();
	this.instance.setTransform(98.1,-44,1,1,0,0,0,170.1,33.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(10));

	// 图层 1
	this.instance_1 = new lib.r29001();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,155);


(lib.r25_clickman = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(1));

	// 图层 3
	this.text = new cjs.Text("别挤别挤，我们看不到", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 313;
	this.text.setTransform(127.6,-72.2);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:false},0).wait(19));

	// 图层 2
	this.instance = new lib.qp1();
	this.instance.setTransform(132.2,-48.9,1,1,0,0,0,170.1,33.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(19));

	// 图层 1
	this.instance_1 = new lib.r25001();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,141,140);


(lib.r25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.r25003();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 3
	this.clickman = new lib.r25_clickman();
	this.clickman.setTransform(226.5,84,1,1,0,0,0,70.5,70);

	this.timeline.addTween(cjs.Tween.get(this.clickman).wait(1));

	// 图层 2
	this.instance_1 = new lib.r25002();
	this.instance_1.setTransform(129,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-9,467,464);


(lib.r24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1));

	// 图层 3
	this.text = new cjs.Text("人类一思考，上帝就让他发胖", "24px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 346;
	this.text.setTransform(110.1,-58.3);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(3).to({_off:false},0).wait(17));

	// 图层 2
	this.instance = new lib.qp1();
	this.instance.setTransform(111.1,-39,1,1,0,0,0,170.1,33.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(17));

	// 图层 1
	this.instance_1 = new lib.r24001();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78,164);


(lib.r22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(1));

	// 图层 3
	this.text = new cjs.Text("他到底会不会玩？", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 237;
	this.text.setTransform(193.6,0.7);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:false},0).wait(10));

	// 图层 2
	this.instance = new lib.qp1();
	this.instance.setTransform(188.1,20.1,1,1,0,0,0,170.1,33.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(10));

	// 图层 1
	this.instance_1 = new lib.r22001();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,136,204);


(lib.r18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_27 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(27).call(this.frame_27).wait(1));

	// 图层 3
	this.text = new cjs.Text("这是希望的颜色，送给你~", "24px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 327;
	this.text.setTransform(117.6,-68.2);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:false},0).wait(26));

	// 图层 2
	this.instance = new lib.qp1();
	this.instance.setTransform(119.2,-46.9,1,1,0,0,0,170.1,33.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(26));

	// 图层 1
	this.instance_1 = new lib.r18001();

	this.instance_2 = new lib.r18002();

	this.instance_3 = new lib.r18003();

	this.instance_4 = new lib.r18004();

	this.instance_5 = new lib.r18005();

	this.instance_6 = new lib.r18006();

	this.instance_7 = new lib.r18007();

	this.instance_8 = new lib.r18008();

	this.instance_9 = new lib.r18009();

	this.instance_10 = new lib.r18010();

	this.instance_11 = new lib.r18011();

	this.instance_12 = new lib.r18012();

	this.instance_13 = new lib.r18013();

	this.instance_14 = new lib.r18014();

	this.instance_15 = new lib.r18015();

	this.instance_16 = new lib.r18016();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,139);


(lib.r13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(1));

	// 图层 4
	this.text = new cjs.Text("到底选谁呢？", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 210;
	this.text.setTransform(87,-82.3);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:false},0).wait(11));

	// 图层 3
	this.instance = new lib.qp1();
	this.instance.setTransform(88.1,-64,1,1,0,0,0,170.1,33.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(11));

	// 图层 1
	this.white = new lib.r13_white();
	this.white.setTransform(38,69.5,1,1,0,0,0,38,69.5);

	this.timeline.addTween(cjs.Tween.get(this.white).wait(13));

	// 图层 2
	this.yellow = new lib.r13_yellow();
	this.yellow.setTransform(-26,53.5,1,1,0,0,0,32,70.5);

	this.timeline.addTween(cjs.Tween.get(this.yellow).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-17,134,156);


(lib.r10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{ani:2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17).call(this.frame_17).wait(1));

	// 图层 4
	this.text = new cjs.Text("小酒窝长睫毛，\n迷人的无可救药~", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 330;
	this.text.setTransform(229.1,-34.3);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:false},0).wait(16));

	// 图层 2
	this.instance = new lib.qp1();
	this.instance.setTransform(228.1,0,1,1.2,0,0,0,170.1,33.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(16));

	// 图层 1
	this.instance_1 = new lib.r10001();

	this.instance_2 = new lib.r10002();

	this.instance_3 = new lib.r10003();

	this.instance_4 = new lib.r10004();

	this.instance_5 = new lib.r10005();

	this.instance_6 = new lib.r10006();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,456,279);


(lib.r08 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"ani":2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13).call(this.frame_13).wait(1));

	// 图层 4
	this.text = new cjs.Text("JJ！I love U！", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 190;
	this.text.setTransform(91,-69);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:false},0).wait(12));

	// 图层 2
	this.instance = new lib.qp1();
	this.instance.setTransform(102.1,-50,1,1,0,0,0,170.1,33.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(12));

	// 图层 1
	this.instance_1 = new lib.r08001();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1).to({_off:false},0).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,73,156);


(lib.r07 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"ani":2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(1));

	// 图层 3
	this.text = new cjs.Text("银鳞胸甲，买一送一！", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 312;
	this.text.setTransform(112,-44.3);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(3).to({_off:false},0).wait(13));

	// 图层 2
	this.instance = new lib.qp1();
	this.instance.setTransform(116.1,-24,1,1,0,0,0,170.1,33.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(13));

	// 图层 1
	this.instance_1 = new lib.r07001();

	this.instance_2 = new lib.r07002();

	this.instance_3 = new lib.r07003();

	this.instance_4 = new lib.r07004();

	this.instance_5 = new lib.r07005();

	this.instance_6 = new lib.r07006();

	this.instance_7 = new lib.r07007();

	this.instance_8 = new lib.r07008();

	this.instance_9 = new lib.r07009();

	this.instance_10 = new lib.r07010();

	this.instance_11 = new lib.r07011();

	this.instance_12 = new lib.r07012();

	this.instance_13 = new lib.r07013();

	this.instance_14 = new lib.r07014();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// 图层 3
	this.text = new cjs.Text("❤❤❤❤❤", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 202;
	this.text.setTransform(139.1,-42.9);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(3).to({_off:false},0).wait(12));

	// 图层 2
	this.instance = new lib.qp1();
	this.instance.setTransform(150.1,-23.3,1,1,0,0,0,170.1,33.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(12));

	// 图层 1
	this.instance_1 = new lib.r05001();

	this.instance_2 = new lib.r05002();

	this.instance_3 = new lib.r05003();

	this.instance_4 = new lib.r05004();

	this.instance_5 = new lib.r05005();

	this.instance_6 = new lib.r05006();

	this.instance_7 = new lib.r05007();

	this.instance_8 = new lib.r05008();

	this.instance_9 = new lib.r05009();

	this.instance_10 = new lib.r05010();

	this.instance_11 = new lib.r05011();

	this.instance_12 = new lib.r05012();

	this.instance_13 = new lib.r05013();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13).call(this.frame_13).wait(1));

	// 图层 4
	this.text = new cjs.Text(" 帮我好好照顾她", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 330;
	this.text.setTransform(93,-64.3);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:false},0).wait(12));

	// 图层 3
	this.instance = new lib.qp1();
	this.instance.setTransform(100.1,-44,1,1,0,0,0,170.1,33.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(12));

	// 图层 2
	this.instance_1 = new lib.r04001();

	this.instance_2 = new lib.r04002();

	this.instance_3 = new lib.r04003();

	this.instance_4 = new lib.r04004();

	this.instance_5 = new lib.r04005();

	this.instance_6 = new lib.r04006();

	this.instance_7 = new lib.r04007();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83,140);


(lib.r03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1));

	// 图层 6
	this.text = new cjs.Text("透明度合格", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 332;
	this.text.setTransform(126.1,-54.3);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(4).to({_off:false},0).wait(16));

	// 图层 4
	this.instance = new lib.qp1();
	this.instance.setTransform(124.1,-33.3,1,1,0,0,0,170.1,33.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(16));

	// 图层 1
	this.instance_1 = new lib.r03001();

	this.instance_2 = new lib.r03002();

	this.instance_3 = new lib.r03003();

	this.instance_4 = new lib.r03004();

	this.instance_5 = new lib.r03005();

	this.instance_6 = new lib.r03006();

	this.instance_7 = new lib.r03007();

	this.instance_8 = new lib.r03008();

	this.instance_9 = new lib.r03009();

	this.instance_10 = new lib.r03010();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.r02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(1));

	// 图层 3
	this.text = new cjs.Text("做模特，我可是专业的！", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 326;
	this.text.setTransform(133.1,-72.3);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(3).to({_off:false},0).wait(18));

	// 图层 2
	this.instance = new lib.qp1();
	this.instance.setTransform(130.1,-52,1,1,0,0,0,170.1,33.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(18));

	// 图层 1
	this.instance_1 = new lib.r02001();

	this.instance_2 = new lib.r02002();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},3).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,145);


(lib.r01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_16 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(1));

	// 图层 6
	this.text = new cjs.Text("胸部衣服高度合格", "26px 'Heiti SC'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 332;
	this.text.setTransform(132.1,-58.3);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(4).to({_off:false},0).wait(13));

	// 图层 5
	this.instance = new lib.qp1();
	this.instance.setTransform(131.2,-44.8,1,1,0,0,0,170.1,27);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(13));

	// 图层 1
	this.instance_1 = new lib.r01001();

	this.instance_2 = new lib.r01002();

	this.instance_3 = new lib.r01003();

	this.instance_4 = new lib.r01004();

	this.instance_5 = new lib.r01005();

	this.instance_6 = new lib.r01006();

	this.instance_7 = new lib.r01007();

	this.instance_8 = new lib.r01008();

	this.instance_9 = new lib.r01009();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139,199);


(lib.all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 线索zx3
	this.zx3 = new lib.zx3();
	this.zx3.setTransform(328.1,552.3,1,1,0,0,0,106,122.3);

	this.timeline.addTween(cjs.Tween.get(this.zx3).wait(1));

	// 线索zx2
	this.zx2 = new lib.zx2();
	this.zx2.setTransform(328.1,552.3,1,1,0,0,0,106,122.3);

	this.timeline.addTween(cjs.Tween.get(this.zx2).wait(1));

	// 线索zx1
	this.zx1 = new lib.zx1();
	this.zx1.setTransform(328.1,552.3,1,1,0,0,0,106,122.3);

	this.timeline.addTween(cjs.Tween.get(this.zx1).wait(1));

	// 57
	this.r57 = new lib.r57();
	this.r57.setTransform(5611,1155.5,1,1,0,0,0,458,178.5);

	this.timeline.addTween(cjs.Tween.get(this.r57).wait(1));

	// 56
	this.r56 = new lib.r56();
	this.r56.setTransform(5129,1134,1,1,0,0,0,113,84);

	this.timeline.addTween(cjs.Tween.get(this.r56).wait(1));

	// 54电脑
	this.instance = new lib.r54003();
	this.instance.setTransform(5299,979);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 55
	this.r55 = new lib.r55();
	this.r55.setTransform(5317.5,1045,1,1,0,0,0,26.5,48);

	this.timeline.addTween(cjs.Tween.get(this.r55).wait(1));

	// 54
	this.r54 = new lib.r54();
	this.r54.setTransform(5359.5,1001.5,1,1,0,0,0,22.5,38.5);

	this.timeline.addTween(cjs.Tween.get(this.r54).wait(1));

	// 53
	this.r53 = new lib.r53();
	this.r53.setTransform(5599,907.5,1,1,0,0,0,113,83.5);

	this.timeline.addTween(cjs.Tween.get(this.r53).wait(1));

	// 52
	this.r52 = new lib.r52();
	this.r52.setTransform(5735.5,512.5,1,1,0,0,0,23.5,64.5);

	this.timeline.addTween(cjs.Tween.get(this.r52).wait(1));

	// 51
	this.r51 = new lib.r51();
	this.r51.setTransform(5594.5,368,1,1,0,0,0,47.5,47);

	this.timeline.addTween(cjs.Tween.get(this.r51).wait(1));

	// 50
	this.r50 = new lib.r50();
	this.r50.setTransform(5442,286.5,1,1,0,0,0,59,89.5);

	this.timeline.addTween(cjs.Tween.get(this.r50).wait(1));

	// 49
	this.r49 = new lib.r49();
	this.r49.setTransform(5371.5,308.5,1,1,0,0,0,24.5,67.5);

	this.timeline.addTween(cjs.Tween.get(this.r49).wait(1));

	// 48
	this.r48 = new lib.r48();
	this.r48.setTransform(4495,334.5,1,1,0,0,0,34,56.5);

	this.timeline.addTween(cjs.Tween.get(this.r48).wait(1));

	// 47
	this.r47 = new lib.r47();
	this.r47.setTransform(4426,311,1,1,0,0,0,34,59);

	this.timeline.addTween(cjs.Tween.get(this.r47).wait(1));

	// 45
	this.r45 = new lib.r45();
	this.r45.setTransform(4677,594.5,1,1,0,0,0,38,78.5);

	this.timeline.addTween(cjs.Tween.get(this.r45).wait(1));

	// 46
	this.r46 = new lib.r46();
	this.r46.setTransform(4731.5,579.5,1,1,0,0,0,48.5,84.5);

	this.timeline.addTween(cjs.Tween.get(this.r46).wait(1));

	// 39覆盖
	this.instance_1 = new lib.r39002();
	this.instance_1.setTransform(4287,1088);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 39
	this.r39 = new lib.r39();
	this.r39.setTransform(4336.5,1020.5,1,1,0,0,0,69.5,100.5);

	this.timeline.addTween(cjs.Tween.get(this.r39).wait(1));

	// 43
	this.r43 = new lib.r43();
	this.r43.setTransform(4509.5,910,1,1,0,0,0,33.5,74);

	this.timeline.addTween(cjs.Tween.get(this.r43).wait(1));

	// 44
	this.r44 = new lib.r44();
	this.r44.setTransform(4611.5,690.5,1,1,0,0,0,52.5,76.5);

	this.timeline.addTween(cjs.Tween.get(this.r44).wait(1));

	// 42
	this.r42 = new lib.r42();
	this.r42.setTransform(4401,865,1,1,0,0,0,39,28);

	this.timeline.addTween(cjs.Tween.get(this.r42).wait(1));

	// 41
	this.r41 = new lib.r41();
	this.r41.setTransform(4472.5,805.5,1,1,0,0,0,56.5,26.5);

	this.timeline.addTween(cjs.Tween.get(this.r41).wait(1));

	// 40
	this.r40 = new lib.r40();
	this.r40.setTransform(4321.5,741.5,1,1,0,0,0,26.5,68.5);

	this.timeline.addTween(cjs.Tween.get(this.r40).wait(1));

	// 36
	this.r36 = new lib.r36();
	this.r36.setTransform(3778,1135.5,1,1,0,0,0,302,152.5);

	this.timeline.addTween(cjs.Tween.get(this.r36).wait(1));

	// 35
	this.r35 = new lib.r35();
	this.r35.setTransform(3868.5,1119,1,1,0,0,0,35.5,64);

	this.timeline.addTween(cjs.Tween.get(this.r35).wait(1));

	// 34
	this.r34 = new lib.r34();
	this.r34.setTransform(3730.5,1077,1,1,0,0,0,36.5,65);

	this.timeline.addTween(cjs.Tween.get(this.r34).wait(1));

	// 34背景
	this.instance_2 = new lib.r34006();
	this.instance_2.setTransform(3631,928);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 58
	this.r58 = new lib.r58();
	this.r58.setTransform(3567,1049,1,1,0,0,0,47,69);

	this.timeline.addTween(cjs.Tween.get(this.r58).wait(1));

	// 34背景
	this.instance_3 = new lib.r34005();
	this.instance_3.setTransform(3141,753);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// 38
	this.r38 = new lib.r38();
	this.r38.setTransform(4117.5,1014,1,1,0,0,0,110.5,57);

	this.timeline.addTween(cjs.Tween.get(this.r38).wait(1));

	// 37
	this.r37 = new lib.r37();
	this.r37.setTransform(4107.5,951.5,1,1,0,0,0,64.5,58.5);

	this.timeline.addTween(cjs.Tween.get(this.r37).wait(1));

	// 59(保安)
	this.r59 = new lib.r59();
	this.r59.setTransform(4057,907.5,1,1,0,0,0,27,63.5);

	this.timeline.addTween(cjs.Tween.get(this.r59).wait(1));

	// 33覆盖
	this.instance_4 = new lib.r31002();
	this.instance_4.setTransform(3936,704);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// 33
	this.r33 = new lib.r33();
	this.r33.setTransform(4093,735,1,1,0,0,0,31,73);

	this.timeline.addTween(cjs.Tween.get(this.r33).wait(1));

	// 32
	this.r32 = new lib.r32();
	this.r32.setTransform(4039,725.5,1,1,0,0,0,32,78.5);

	this.timeline.addTween(cjs.Tween.get(this.r32).wait(1));

	// 31
	this.r31 = new lib.r31();
	this.r31.setTransform(3802.5,676.5,1,1,0,0,0,119.5,105.5);

	this.timeline.addTween(cjs.Tween.get(this.r31).wait(1));

	// 30
	this.r30 = new lib.r30();
	this.r30.setTransform(3755,314,1,1,0,0,0,38,73);

	this.timeline.addTween(cjs.Tween.get(this.r30).wait(1));

	// 29
	this.r29 = new lib.r29();
	this.r29.setTransform(3678.5,322.5,1,1,0,0,0,28.5,77.5);

	this.timeline.addTween(cjs.Tween.get(this.r29).wait(1));

	// 28
	this.r28 = new lib.r28();
	this.r28.setTransform(2126,1222,1,1,0,0,0,126,90);

	this.timeline.addTween(cjs.Tween.get(this.r28).wait(1));

	// 27
	this.r27 = new lib.r27();
	this.r27.setTransform(2448.5,1052,1,1,0,0,0,34.5,90);

	this.timeline.addTween(cjs.Tween.get(this.r27).wait(1));

	// 26
	this.r26 = new lib.r26();
	this.r26.setTransform(2929,898.5,1,1,0,0,0,27,74.5);

	this.timeline.addTween(cjs.Tween.get(this.r26).wait(1));

	// 25
	this.r25 = new lib.r25();
	this.r25.setTransform(2982.5,954.5,1,1,0,0,0,233.5,227.5);

	this.timeline.addTween(cjs.Tween.get(this.r25).wait(1));

	// 24
	this.r24 = new lib.r24();
	this.r24.setTransform(3189,432,1,1,0,0,0,39,82);

	this.timeline.addTween(cjs.Tween.get(this.r24).wait(1));

	// 22
	this.r22 = new lib.r22();
	this.r22.setTransform(2823,742,1,1,0,0,0,68,102);

	this.timeline.addTween(cjs.Tween.get(this.r22).wait(1));

	// 23
	this.r23 = new lib.r23();
	this.r23.setTransform(2865,702,1,1,0,0,0,50,73);

	this.timeline.addTween(cjs.Tween.get(this.r23).wait(1));

	// 21
	this.r21 = new lib.r21();
	this.r21.setTransform(2740.5,658.5,1,1,0,0,0,109.5,191.5);

	this.timeline.addTween(cjs.Tween.get(this.r21).wait(1));

	// 20
	this.r20 = new lib.r20();
	this.r20.setTransform(2615.5,632,1,1,0,0,0,34.5,75);

	this.timeline.addTween(cjs.Tween.get(this.r20).wait(1));

	// 19号
	this.r19 = new lib.r19();
	this.r19.setTransform(2943.5,110,1,1,0,0,0,81.5,65);

	this.timeline.addTween(cjs.Tween.get(this.r19).wait(1));

	// 18号
	this.r18 = new lib.r18();
	this.r18.setTransform(2609,487.5,1,1,0,0,0,53,69.5);

	this.timeline.addTween(cjs.Tween.get(this.r18).wait(1));

	// 16覆盖
	this.instance_5 = new lib.r16003();
	this.instance_5.setTransform(2434,512);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// 16号
	this.r16 = new lib.r16();
	this.r16.setTransform(2442,541.5,1,1,0,0,0,89,75.5);

	this.timeline.addTween(cjs.Tween.get(this.r16).wait(1));

	// 17号
	this.r17 = new lib.r17();
	this.r17.setTransform(2513.5,500,1,1,0,0,0,64.5,71);

	this.timeline.addTween(cjs.Tween.get(this.r17).wait(1));

	// 13号
	this.r13 = new lib.r13();
	this.r13.setTransform(2423,394.5,1,1,0,0,0,38,69.5);

	this.timeline.addTween(cjs.Tween.get(this.r13).wait(1));

	// 15号
	this.r15 = new lib.r15();
	this.r15.setTransform(2566.5,320.5,1,1,0,0,0,83.5,75.5);

	this.timeline.addTween(cjs.Tween.get(this.r15).wait(1));

	// 14号
	this.r14 = new lib.r14();
	this.r14.setTransform(2708,236.5,1,1,0,0,0,58,61.5);

	this.timeline.addTween(cjs.Tween.get(this.r14).wait(1));

	// 11号
	this.r11 = new lib.r11();
	this.r11.setTransform(1943,682.5,1,1,0,0,0,171,125.5);

	this.timeline.addTween(cjs.Tween.get(this.r11).wait(1));

	// 12号
	this.r12 = new lib.r12();
	this.r12.setTransform(2019,502,1,1,0,0,0,60,106);

	this.timeline.addTween(cjs.Tween.get(this.r12).wait(1));

	// 8号
	this.r08 = new lib.r08();
	this.r08.setTransform(1597.5,410,1,1,0,0,0,36.5,78);

	this.timeline.addTween(cjs.Tween.get(this.r08).wait(1));

	// 9号
	this.r09 = new lib.r09();
	this.r09.setTransform(1558,423,1,1,0,0,0,238,192);

	this.timeline.addTween(cjs.Tween.get(this.r09).wait(1));

	// 10号
	this.r10 = new lib.r10();
	this.r10.setTransform(1776,222.5,1,1,0,0,0,228,139.5);

	this.timeline.addTween(cjs.Tween.get(this.r10).wait(1));

	// 7号
	this.r07 = new lib.r07();
	this.r07.setTransform(1119.5,734.5,1,1,0,0,0,69.5,99.5);

	this.timeline.addTween(cjs.Tween.get(this.r07).wait(1));

	// 5号
	this.r05 = new lib.r05();
	this.r05.setTransform(455.5,786.5,1,1,0,0,0,69.5,99.5);

	this.timeline.addTween(cjs.Tween.get(this.r05).wait(1));

	// 6号
	this.r06 = new lib.r06();
	this.r06.setTransform(590.5,736.5,1,1,0,0,0,83.5,89.5);

	this.timeline.addTween(cjs.Tween.get(this.r06).wait(1));

	// 4号
	this.r04 = new lib.r04();
	this.r04.setTransform(899.5,378,1,1,0,0,0,41.5,70);

	this.timeline.addTween(cjs.Tween.get(this.r04).wait(1));

	// 2号
	this.r02 = new lib.r02();
	this.r02.setTransform(308,552.5,1,1,0,0,0,53,72.5);

	this.timeline.addTween(cjs.Tween.get(this.r02).wait(1));

	// 1号
	this.r01 = new lib.r01();
	this.r01.setTransform(214.5,560.5,1,1,0,0,0,69.5,99.5);

	this.timeline.addTween(cjs.Tween.get(this.r01).wait(1));

	// 3号
	this.r03 = new lib.r03();
	this.r03.setTransform(394.5,486.5,1,1,0,0,0,69.5,99.5);

	this.timeline.addTween(cjs.Tween.get(this.r03).wait(1));

	// 背景
	this.instance_6 = new lib.bg();
	this.instance_6.setTransform(3034.5,667,1,1,0,0,0,3034.5,667);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6069,1334);


// stage content:
(lib.cj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.all();
	this.instance.setTransform(3034.5,667,1,1,0,0,0,3034.5,667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(375,667,6069,1334);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;