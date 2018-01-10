
var mc = {};//主场景canvas的全局变量
var ma;//主场景元件短变量
mc.init = function() {
	mc.sceneCanvas = document.getElementById("sceneCanvas");
	images = images||{};
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", mc.handleFileLoad);
	loader.addEventListener("progress", mc.handleProgress);
	loader.addEventListener("complete", mc.handleComplete);
	// loader.loadManifest(lib.properties.manifest);
	loader.loadManifest([
		{src:app.resPath+"images/bg_01.jpg", id:"bg_01"},
		{src:app.resPath+"images/bg_02.jpg", id:"bg_02"},
		{src:app.resPath+"images/bg_03.jpg", id:"bg_03"},
		{src:app.resPath+"images/bg_04.jpg", id:"bg_04"},
		{src:app.resPath+"images/bg_05.jpg", id:"bg_05"},
		{src:app.resPath+"images/bg_06.jpg", id:"bg_06"},
	]);
	loader.loadFile({src:"./images/atlas_s1_.json", type:"spritesheet", id:"atlas_s1_"}, true);
	loader.loadFile({src:"./images/atlas_s2_.json", type:"spritesheet", id:"atlas_s2_"}, true);
	// 音频注册
	createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin]);
  createjs.Sound.alternateExtensions = ["mp3"];
  createjs.Sound.registerSounds([
    {id:'r04',src:app.resPath+"media/r04.mp3"},
    {id:'r02',src:app.resPath+"media/r02.mp3"},
    {id:'r10',src:app.resPath+"media/r10.mp3"},
    {id:'r11',src:app.resPath+"media/r11.mp3"},
    {id:'r28',src:app.resPath+"media/r28.mp3"},
    {id:'r31',src:app.resPath+"media/r31.mp3"},
    {id:'r37',src:app.resPath+"media/r37.mp3"},
    {id:'r38',src:app.resPath+"media/r38.mp3"},
    {id:'r40',src:app.resPath+"media/r40.mp3"},
    {id:'r41',src:app.resPath+"media/r41.mp3"},
    {id:'r42',src:app.resPath+"media/r42.mp3"},
    {id:'r44',src:app.resPath+"media/r44.mp3"},
    {id:'r44_',src:app.resPath+"media/r44_.mp3"},
    {id:'r51',src:app.resPath+"media/r51.mp3"},
    {id:'r51_',src:app.resPath+"media/r51_.mp3"},
    {id:'r57',src:app.resPath+"media/r57.mp3"},
    {id:'r58',src:app.resPath+"media/r58.mp3"},
  ]);
}
mc.handleFileLoad = function (evt) {	
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }	
}
//加载进度
mc.handleProgress = function (evt) {
	var percent = parseInt(evt.progress*100);
	$('#percent').text(percent+'%');
}
mc.handleComplete = function (evt) {

	var queue = evt.target;
  ss["atlas_s1_"] = queue.getResult("atlas_s1_");
  ss["atlas_s2_"] = queue.getResult("atlas_s2_");

	mc.stage = new createjs.Stage(mc.sceneCanvas);
	ma = new lib.all();
	mc.stage.addChild(ma);

	createjs.Touch.enable(mc.stage);
	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", mc.stage);

	mc.initDrag();
	// mc.initZxLayer();
	mc.initListener();
	$('#loading').remove();
}
mc.initDrag = function (){
	mc.winH = $(window).height();
	mc.xsboxH = $('.xsbox').outerHeight(true);
	mc.sceneCanvas.height = mc.winH - mc.xsboxH + 5;

	//初始相对视角位置
	ma.x = -2300;
	ma.y = -ma.getBounds().height+mc.sceneCanvas.height;

	ma.addEventListener('mousedown',function (e){
		ma.initPos = new createjs.Point(ma.x, ma.y);
		ma.startX = e.stageX;
		ma.startY = e.stageY;
		e.stopPropagation();
	})
	ma.addEventListener('pressmove',function (e){

		ma.moveX = e.stageX;
		ma.moveY = e.stageY;
		var x = ma.initPos.x + (ma.moveX - ma.startX);
		var y = ma.initPos.y + (ma.moveY - ma.startY);

		if (x>0){
			x = 0;
		}else if (x < -ma.getBounds().width+mc.sceneCanvas.width){
			x = -ma.getBounds().width+mc.sceneCanvas.width
		}
		if (y>0){
			y = 0;
		}else if (y < -ma.getBounds().height+mc.sceneCanvas.height){
			y = -ma.getBounds().height+mc.sceneCanvas.height
		}
		ma.x = x;
		ma.y = y;
		e.stopPropagation();
	})
}
//初始化支线层
mc.initZxLayer = function (){
	switch (app.clueIndex){
		case 0:
			mc.curZx = ma.zx1;
			break;
		case 1:
			mc.curZx = ma.zx2;
			break;
		case 2:
			mc.curZx = ma.zx3;
			break;
	}
	mc.customImg = new createjs.Bitmap(app.customImgURI);
	mc.customImg.scaleX = 0.25;
	mc.customImg.scaleY = 0.25;
	mc.customImg.x = 25;
	mc.customImg.y = 25;
	ma.r52.photowrap.addChild(mc.customImg);
}
mc.play = function (e){
	e.currentTarget.play();
}
//显示线索层
mc.showXs = function (idx){
	mc.curZx.visible = true;
	mc.curZx.gotoAndStop(idx+1);
}
//隐藏线索层
mc.hideXs = function (){
	mc.curZx.visible = false;
}
//线索找到
mc.xsFound = function (idx){
	mc.showXs(idx);
	app.cd[idx].isFound = !0;
	app.clueFound(idx);
}
mc.initListener = function (){
	ma.r01.addEventListener('click',mc.play)
	ma.r02.addEventListener('click',function (e){
		if (app.clueIndex==1){
			//支线2线索2
			if (app.cd[1].isFound){
				e.currentTarget.play();
			}else {
				mc.xsFound(1);
			}
		}else if (app.clueIndex==2){
			//支线3线索4
			if (app.cd[3].isFound){
				e.currentTarget.play();
			}else {
				mc.xsFound(3)
			}	
		}else {
			e.currentTarget.play();
		}
		createjs.Sound.play('r02');
	})
	ma.r03.addEventListener('click',mc.play);
	ma.r04.addEventListener('click',function (e){
		if (app.clueIndex==0 && !app.cd[3].isFound){
			//支线1线索4
			mc.xsFound(3)
		}else {
			e.currentTarget.play();
		}
		createjs.Sound.play('r04');
	});
	ma.r05.addEventListener('click',mc.play);
	ma.r06.addEventListener('click',mc.play);
	ma.r07.addEventListener('click',function (e){
		if (app.clueIndex==2 && !app.cd[4].isFound){
			//支线3线索5
			mc.xsFound(4);		
		}else {
			e.currentTarget.gotoAndPlay('ani');
		}
	})
	ma.r08.addEventListener('click',function (e){
		if (app.clueIndex==1 && !app.cd[3].isFound){
			//支线2线索4
			mc.xsFound(3);
		}else {
			e.currentTarget.gotoAndPlay('ani');
		}
	})
	ma.r09.addEventListener('click',function (e){
		createjs.Sound.play('r57');
	})
	ma.r10.addEventListener('click',function (e){
		if (app.clueIndex==0 && !app.cd[4].isFound){
			//支线1线索5
			mc.xsFound(4);
		}else {
			e.currentTarget.gotoAndPlay('ani');
		}
		createjs.Sound.play('r10');
	})
	ma.r11.addEventListener('click',function (e){
		e.currentTarget.play();
		createjs.Sound.play('r11');
	})
	ma.r12.addEventListener('click',function (e){
		if (app.clueIndex==0 && !app.cd[6].isFound){
			//支线1线索7
			mc.xsFound(6);	
		}else {
			e.currentTarget.play();
		}
	})
	ma.r13.addEventListener('click',function (e){
		if (app.clueIndex==2 && !app.cd[7].isFound){
			//支线3线索8
			mc.xsFound(7);
		}else {
			e.currentTarget.play();
		}
	})
	ma.r14.addEventListener('click',mc.play);
	ma.r15.addEventListener('click',mc.play);
	ma.r16.addEventListener('click',mc.play);
	ma.r17.addEventListener('click',mc.play);
	ma.r18.addEventListener('click',mc.play);
	ma.r19.addEventListener('click',function (e){
		if (app.clueIndex==1 && !app.cd[7].isFound){
			//支线2线索8
			mc.xsFound(7);
		}else {
			e.currentTarget.play();
		}
	})
	ma.r20.addEventListener('click',function (e){
		if (app.clueIndex==1 && !app.cd[5].isFound){
			//支线2线索6
			mc.xsFound(5);
		}else {
			e.currentTarget.play();
		}
	})
	ma.r21.addEventListener('click',mc.play);
	ma.r22.addEventListener('click',mc.play);
	ma.r23.addEventListener('click',mc.play);
	ma.r24.addEventListener('click',mc.play);
	// ma.r25.addEventListener('click',mc.play);//需求未表明事件
	ma.r26.addEventListener('click',function (e){
		if (app.clueIndex==0 && !app.cd[7].isFound){
			//支线1线索8
			mc.xsFound(7);
		}else {
			e.currentTarget.play();
		}
	})
	ma.r27.addEventListener('click',function (e){
		if (app.clueIndex==2 && !app.cd[0].isFound){
			//支线3线索1
			mc.xsFound(0);
		}else {
			createjs.Sound.play('r11');
		}
	})
	ma.r28.addEventListener('click',function (e){
		createjs.Sound.play('r28');
	})
	ma.r29.addEventListener('click',function (e){
		if (app.clueIndex==2 && !app.cd[6].isFound){
			//支线3线索7
			mc.xsFound(6);
		}else {
			e.currentTarget.play();
		}
	})
	ma.r30.addEventListener('click',mc.play);
	ma.r31.screen.addEventListener('click',function (e){
		ma.r31.men.play();
		createjs.Sound.play('r31');
	});
	ma.r32.addEventListener('click',function (e){
		if (app.clueIndex==1 && !app.cd[6].isFound){
			//支线2线索7
			mc.xsFound(6);
		}else {
			e.currentTarget.play();
		}
	})
	ma.r33.addEventListener('click',mc.play);
	ma.r34.addEventListener('click',mc.play);
	ma.r35.addEventListener('click',mc.play);
	ma.r36.addEventListener('click',function (e){
		e.currentTarget.play();
		createjs.Sound.play('r11');
	});
	ma.r58.addEventListener('click',function (e){
		if (app.clueIndex==1 && !app.cd[2].isFound){
			//支线2线索3
			mc.xsFound(2);
		}else {
			e.currentTarget.play();
		}
		createjs.Sound.play('r58');
	})
	ma.r37.addEventListener('click',function (e){
		if (app.clueIndex==0 && !app.cd[0].isFound){
			//支线1线索1
			mc.xsFound(0);
		}else {
			e.currentTarget.play();
		}
		createjs.Sound.play('r37');
	})
	ma.r38.addEventListener('click',function (e){
		createjs.Sound.play('r38');
	})
	ma.r39.addEventListener('click',mc.play);
	ma.r40.addEventListener('click',function (e){
		if (app.clueIndex==2 && !app.cd[1].isFound){
			//支线3线索2
			mc.xsFound(1);
		}else {
			e.currentTarget.play();
		}
		createjs.Sound.play('r40');
	})
	ma.r41.addEventListener('click',function (e){
		if (app.clueIndex==0 && !app.cd[1].isFound){
			//支线1线索2
			mc.xsFound(1);
		}else {
			e.currentTarget.play();
		}
		createjs.Sound.play('r41');
	})
	ma.r42.addEventListener('click',function (e){
		e.currentTarget.play();
		createjs.Sound.play('r42');
	})
	ma.r43.addEventListener('click',mc.play);
	ma.r44.addEventListener('click',function (e){
		if (app.clueIndex==2 && !app.cd[2].isFound){
			//支线3线索3
			mc.xsFound(2);
			createjs.Sound.play('r44');
		}else {
			e.currentTarget.play();
			createjs.Sound.play('r44_');
		}
	})
	ma.r45.addEventListener('click',function (e){
		if (app.clueIndex==1 && !app.cd[0].isFound){
			//支线2线索1
			mc.xsFound(0);
		}else {
			e.currentTarget.play();
		}
	})
	ma.r46.addEventListener('click',function (e){
		if (app.clueIndex==0 && !app.cd[2].isFound){
			//支线1线索3
			mc.xsFound(2);
		}else {
			e.currentTarget.play();
		}
	})
	ma.r47.addEventListener('click',function (e){
		if (app.clueIndex==2 && !app.cd[5].isFound){
			//支线3线索6
			mc.xsFound(5);
		}else {
			e.currentTarget.play();
		}
	})
	ma.r48.addEventListener('click',mc.play);
	ma.r49.addEventListener('click',mc.play);
	ma.r50.addEventListener('click',function (e){
		if (app.clueIndex==1 && !app.cd[4].isFound){
			//支线2线索5
			mc.xsFound(4);
		}else {
			e.currentTarget.play();
		}
	})
	ma.r51.addEventListener('click',function (e){

		if (app.clueIndex==0){
			//支线1线索6
			if (app.cd[5].isFound){
				e.currentTarget.play();
			}else {
				mc.xsFound(5);
			}
			createjs.Sound.play('r51');
		}else {
			e.currentTarget.play();
			createjs.Sound.play('r51_');
		}
	})
	ma.r52.addEventListener('click',mc.play);
	ma.r53.addEventListener('click',mc.play);
	ma.r54.addEventListener('click',mc.play);
	ma.r55.addEventListener('click',mc.play);
	ma.r56.addEventListener('click',mc.play);
	ma.r57.addEventListener('click',function (e){
		createjs.Sound.play('r57');
	})
}