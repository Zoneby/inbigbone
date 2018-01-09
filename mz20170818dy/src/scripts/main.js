var app = app || {};

app.file = document.querySelector('#file');
app.photoCanvas = document.querySelector('#photocanvas');
app.photoStage = new createjs.Stage(app.photoCanvas);
createjs.Touch.enable(app.photoStage);
app.base64Img = null;
app.imageIncanvas = null;
document.addEventListener("WeixinJSBridgeReady",function (){document.querySelector('audio').play()}, false)
//页面流程控制管理
app.curPage = '.pageindex';
app.switch2Page = function (toPage){
	$(app.curPage).hide();
	$(toPage).show();
	app.curPage = toPage;
}
/*
 *头像上传控制
 *----------
 */
app.fileChangeHandler = function (file){
	if (!file)return;
	var reader = new FileReader();

	reader.onloadstart = function (){
		$('.upload_tip').hide();
		$('.canvasbox .weui_toast').show();
	}
	reader.onload = function (){

		var imgData = reader.result;
		app.imageIncanvas = new createjs.Bitmap(imgData);

		setTimeout(function (){
			$('.canvasbox .weui_toast').hide();
			$('.turn').show();
			var bouns = app.imageIncanvas.getBounds();

			app.imageIncanvas.regX = app.imageIncanvas.getBounds().width/2;
			app.imageIncanvas.regY = app.imageIncanvas.getBounds().height/2;
			var canvasWidth = app.photoCanvas.width;
			var canvasHeight = app.photoCanvas.height;
			if (bouns.width>bouns.height){
				app.imageIncanvas.scaleNumber = canvasHeight/bouns.height;
				app.imageIncanvas.initScaleNumber = canvasHeight/bouns.height;
				app.imageIncanvas.scaleX = app.imageIncanvas.scaleNumber
				app.imageIncanvas.scaleY = app.imageIncanvas.scaleNumber;
				// app.imageIncanvas.x = (canvasWidth-bouns.width*app.imageIncanvas.scaleNumber)/2;
				app.imageIncanvas.x = canvasWidth/2;
				app.imageIncanvas.y = canvasHeight/2;
			}else {
				app.imageIncanvas.scaleNumber = canvasWidth/bouns.width;
				app.imageIncanvas.initScaleNumber = canvasWidth/bouns.width;
				app.imageIncanvas.scaleX = app.imageIncanvas.scaleNumber
				app.imageIncanvas.scaleY = app.imageIncanvas.scaleNumber;
				// app.imageIncanvas.y = (canvasHeight-bouns.height*app.imageIncanvas.scaleNumber)/2;
				app.imageIncanvas.x = canvasWidth/2;
				app.imageIncanvas.y = canvasHeight/2;
			}


		  app.imageIncanvas.addEventListener('mousedown',function (ev){

		  	ev.currentTarget.initX = ev.stageX;
		  	ev.currentTarget.initY = ev.stageY;
		  	ev.currentTarget.initPosX = ev.currentTarget.x;
		  	ev.currentTarget.initPosY = ev.currentTarget.y;
		  })
		  app.imageIncanvas.addEventListener('pressmove',function (ev){
		  	if (app.imageIncanvas.cannotDrag)return;
		  	ev.currentTarget.distX = ev.stageX - ev.currentTarget.initX;
		  	ev.currentTarget.distY = ev.stageY - ev.currentTarget.initY;

		  	var curX = ev.currentTarget.initPosX + ev.currentTarget.distX;
		  	var curY = ev.currentTarget.initPosY + ev.currentTarget.distY;

		  	// if (app.imageIncanvas.scaleNumber>=app.imageIncanvas.initScaleNumber){
			  // 	if (curX<app.photoCanvas.width-bouns.width*app.imageIncanvas.scaleNumber){
			  // 		curX = app.photoCanvas.width-bouns.width*app.imageIncanvas.scaleNumber;
			  // 	}else if (curX>0){
			  // 		curX = 0;
			  // 	}
			  // 	if (curY<app.photoCanvas.height-bouns.height*app.imageIncanvas.scaleNumber){
			  // 		curY = app.photoCanvas.height-bouns.height*app.imageIncanvas.scaleNumber;
			  // 	}else if (curY>0){
			  // 		curY = 0;
			  // 	}		  		
		  	// }
		  	ev.currentTarget.x = curX;
		  	ev.currentTarget.y = curY;
		  	app.photoStage.update();
		  })
		  // app.imageIncanvas.addEventListener('pressup',function (ev){
		  // 	ev.currentTarget.touchNum = 1;
		  // })
			app.photoStage.removeAllChildren(true);
			// app.photoStage.update();
			app.photoStage.addChild(app.imageIncanvas);
			app.photoStage.update();
			$('.btn_repick').show();
			app.hasPhoto = !0;
		},500);

	}
	reader.readAsDataURL(file);
}

/*
 *图片缩放操作
 *----------
 */
app.mc = new Hammer(document.querySelector('.canvasbox'));
app.mc.get('pinch').set({ enable: true });
// app.mc.get("rotate").set({ enable: true });
app.mc.on('pinchstart',function (e){
	app.imageIncanvas.cannotDrag = true;
})
app.mc.on("pinch", function(e) {
  var scale = e.scale;
  app.imageIncanvas.scaleX = scale*app.imageIncanvas.scaleNumber;
  app.imageIncanvas.scaleY = scale*app.imageIncanvas.scaleNumber;
  app.photoStage.update();
})
app.mc.on("pinchend", function(e) {
  var scale = e.scale;
  app.imageIncanvas.scaleNumber *= scale;
	app.imageIncanvas.cannotDrag = false;
})
// app.mc.on("rotate", function(e) {
//   var rotation = e.rotation;
//   // alert(rotation)
//   app.imageIncanvas.rotation = rotation;
//   app.photoStage.update();
// })
$('.turn').on('click',function (){
	// app.imageIncanvas.regX = 50;
	// app.imageIncanvas.regY = 50;
	app.imageIncanvas.rotation += 90;
	app.photoStage.update();
})
/*
 *动画场景
 *----------
 */
app.aniCanvas = null,
app.aniStage = null,
app.resPath = './'; //资源路径配置

//应用初始化
app.initAniCanvas = function (){
	
	app.aniCanvas = document.getElementById("anicanvas");
	images = images||{};

	var loader = new createjs.LoadQueue(false,null,'Anonymous');
	loader.addEventListener("fileload", app.handleFileLoad);
	loader.addEventListener("progress", app.handleProgress);
	loader.addEventListener("complete", app.handleLoadingComplete);
	// loader.loadManifest(lib.properties.manifest);
	loader.loadManifest([
		{src:app.resPath+"images/cv/bd001.png", id:"bd001"},
		{src:app.resPath+"images/cv/bd002.png", id:"bd002"},
		{src:app.resPath+"images/cv/bd003.png", id:"bd003"},
		{src:app.resPath+"images/cv/bd004.png", id:"bd004"},
		{src:app.resPath+"images/cv/bd005.png", id:"bd005"},
		{src:app.resPath+"images/cv/bd006.png", id:"bd006"},
		{src:app.resPath+"images/cv/bd007.png", id:"bd007"},
		{src:app.resPath+"images/cv/bd008.png", id:"bd008"},
		{src:app.resPath+"images/cv/bd009.png", id:"bd009"},
		{src:app.resPath+"images/cv/bd010.png", id:"bd010"},
		{src:app.resPath+"images/cv/bd011.png", id:"bd011"},
		{src:app.resPath+"images/cv/bd012.png", id:"bd012"},
		{src:app.resPath+"images/cv/bd013.png", id:"bd013"},
		{src:app.resPath+"images/cv/bd014.png", id:"bd014"},
		{src:app.resPath+"images/cv/bd015.png", id:"bd015"},
		{src:app.resPath+"images/cv/bd016.png", id:"bd016"},
		{src:app.resPath+"images/cv/bd017.png", id:"bd017"},
		{src:app.resPath+"images/cv/bd018.png", id:"bd018"},
		{src:app.resPath+"images/cv/bd019.png", id:"bd019"},
		{src:app.resPath+"images/cv/bd020.png", id:"bd020"},
		{src:app.resPath+"images/cv/bd021.png", id:"bd021"},
		{src:app.resPath+"images/cv/bd022.png", id:"bd022"},
		{src:app.resPath+"images/cv/bd023.png", id:"bd023"},
		{src:app.resPath+"images/cv/bd024.png", id:"bd024"},
		{src:app.resPath+"images/cv/bd025.png", id:"bd025"},
		{src:app.resPath+"images/cv/bd026.png", id:"bd026"},
		{src:app.resPath+"images/cv/bd027.png", id:"bd027"},
		{src:app.resPath+"images/cv/bd028.png", id:"bd028"},
		{src:app.resPath+"images/cv/bd029.png", id:"bd029"},
		{src:app.resPath+"images/cv/bd030.png", id:"bd030"},
		{src:app.resPath+"images/cv/bd031.png", id:"bd031"},
		{src:app.resPath+"images/cv/bd032.png", id:"bd032"},
		{src:app.resPath+"images/cv/bd033.png", id:"bd033"},
		{src:app.resPath+"images/cv/bd034.png", id:"bd034"},
		{src:app.resPath+"images/cv/bd035.png", id:"bd035"},
		{src:app.resPath+"images/cv/bd036.png", id:"bd036"},
		{src:app.resPath+"images/cv/bd037.png", id:"bd037"},
		{src:app.resPath+"images/cv/bd038.png", id:"bd038"},
		{src:app.resPath+"images/cv/bd039.png", id:"bd039"},
		{src:app.resPath+"images/cv/bd040.png", id:"bd040"},
		{src:app.resPath+"images/cv/bd041.png", id:"bd041"},
		{src:app.resPath+"images/cv/bd042.png", id:"bd042"},
		{src:app.resPath+"images/cv/bd043.png", id:"bd043"},
		{src:app.resPath+"images/cv/bd044.png", id:"bd044"},
		{src:app.resPath+"images/cv/bd045.png", id:"bd045"},
		{src:app.resPath+"images/cv/bd046.png", id:"bd046"},
		{src:app.resPath+"images/cv/bd047.png", id:"bd047"},
		{src:app.resPath+"images/cv/bd048.png", id:"bd048"},
		{src:app.resPath+"images/cv/bd049.png", id:"bd049"},
		{src:app.resPath+"images/cv/bd_cover.png", id:"bd_cover"},
		{src:app.resPath+"images/cv/bd_lightblue.png", id:"bd_lightblue"},
		{src:app.resPath+"images/cv/bd_lightpink.png", id:"bd_lightpink"},
		{src:app.resPath+"images/cv/bd_photo.jpg", id:"bd_photo"},
		{src:app.resPath+"images/cv/bd_textlight1.png", id:"bd_textlight1"},
		{src:app.resPath+"images/cv/bd_textlight2.png", id:"bd_textlight2"},
		{src:app.resPath+"images/cv/bdbody1.png", id:"bdbody1"},
		{src:app.resPath+"images/cv/bdbody2.png", id:"bdbody2"},
		{src:app.resPath+"images/cv/bdpc.png", id:"bdpc"},
		{src:app.resPath+"images/cv/bg_bd.jpg", id:"bg_bd"},
		{src:app.resPath+"images/cv/bg_home.jpg", id:"bg_home"},
		{src:app.resPath+"images/cv/bg_run.jpg", id:"bg_run"},
		{src:app.resPath+"images/cv/bg_swim.jpg", id:"bg_swim"},
		{src:app.resPath+"images/cv/bg_walk.jpg", id:"bg_walk"},
		{src:app.resPath+"images/cv/bg_work.jpg", id:"bg_work"},
		{src:app.resPath+"images/cv/btn_lookother.png", id:"btn_lookother"},
		{src:app.resPath+"images/cv/btn_what.png", id:"btn_what"},
		{src:app.resPath+"images/cv/cloud1.png", id:"cloud1"},
		{src:app.resPath+"images/cv/cloud2.png", id:"cloud2"},
		{src:app.resPath+"images/cv/cloud3.png", id:"cloud3"},
		{src:app.resPath+"images/cv/cloud4.png", id:"cloud4"},
		{src:app.resPath+"images/cv/disco.png", id:"disco"},
		{src:app.resPath+"images/cv/earphone.png", id:"earphone"},
		{src:app.resPath+"images/cv/earphoneright.png", id:"earphoneright"},
		{src:app.resPath+"images/cv/run001.png", id:"run001"},
		{src:app.resPath+"images/cv/run002.png", id:"run002"},
		{src:app.resPath+"images/cv/run003.png", id:"run003"},
		{src:app.resPath+"images/cv/run004.png", id:"run004"},
		{src:app.resPath+"images/cv/run005.png", id:"run005"},
		{src:app.resPath+"images/cv/run006.png", id:"run006"},
		{src:app.resPath+"images/cv/run007.png", id:"run007"},
		{src:app.resPath+"images/cv/run008.png", id:"run008"},
		{src:app.resPath+"images/cv/run009.png", id:"run009"},
		{src:app.resPath+"images/cv/run010.png", id:"run010"},
		{src:app.resPath+"images/cv/run011.png", id:"run011"},
		{src:app.resPath+"images/cv/run012.png", id:"run012"},
		{src:app.resPath+"images/cv/run013.png", id:"run013"},
		{src:app.resPath+"images/cv/run014.png", id:"run014"},
		{src:app.resPath+"images/cv/run015.png", id:"run015"},
		{src:app.resPath+"images/cv/run016.png", id:"run016"},
		{src:app.resPath+"images/cv/run017.png", id:"run017"},
		{src:app.resPath+"images/cv/run018.png", id:"run018"},
		{src:app.resPath+"images/cv/run019.png", id:"run019"},
		{src:app.resPath+"images/cv/run020.png", id:"run020"},
		{src:app.resPath+"images/cv/run021.png", id:"run021"},
		{src:app.resPath+"images/cv/run022.png", id:"run022"},
		{src:app.resPath+"images/cv/run023.png", id:"run023"},
		{src:app.resPath+"images/cv/run024.png", id:"run024"},
		{src:app.resPath+"images/cv/run025.png", id:"run025"},
		{src:app.resPath+"images/cv/run026.png", id:"run026"},
		{src:app.resPath+"images/cv/run027.png", id:"run027"},
		{src:app.resPath+"images/cv/run028.png", id:"run028"},
		{src:app.resPath+"images/cv/run029.png", id:"run029"},
		{src:app.resPath+"images/cv/run030.png", id:"run030"},
		{src:app.resPath+"images/cv/run031.png", id:"run031"},
		{src:app.resPath+"images/cv/run032.png", id:"run032"},
		{src:app.resPath+"images/cv/run033.png", id:"run033"},
		{src:app.resPath+"images/cv/run034.png", id:"run034"},
		{src:app.resPath+"images/cv/run035.png", id:"run035"},
		{src:app.resPath+"images/cv/run036.png", id:"run036"},
		{src:app.resPath+"images/cv/run037.png", id:"run037"},
		{src:app.resPath+"images/cv/run038.png", id:"run038"},
		{src:app.resPath+"images/cv/run039.png", id:"run039"},
		{src:app.resPath+"images/cv/run040.png", id:"run040"},
		{src:app.resPath+"images/cv/run041.png", id:"run041"},
		{src:app.resPath+"images/cv/run042.png", id:"run042"},
		{src:app.resPath+"images/cv/run043.png", id:"run043"},
		{src:app.resPath+"images/cv/run044.png", id:"run044"},
		{src:app.resPath+"images/cv/run045.png", id:"run045"},
		{src:app.resPath+"images/cv/run046.png", id:"run046"},
		{src:app.resPath+"images/cv/run047.png", id:"run047"},
		{src:app.resPath+"images/cv/swim001.png", id:"swim001"},
		{src:app.resPath+"images/cv/swim002.png", id:"swim002"},
		{src:app.resPath+"images/cv/swim003.png", id:"swim003"},
		{src:app.resPath+"images/cv/swim004.png", id:"swim004"},
		{src:app.resPath+"images/cv/swim005.png", id:"swim005"},
		{src:app.resPath+"images/cv/swim006.png", id:"swim006"},
		{src:app.resPath+"images/cv/swim007.png", id:"swim007"},
		{src:app.resPath+"images/cv/swim008.png", id:"swim008"},
		{src:app.resPath+"images/cv/swim009.png", id:"swim009"},
		{src:app.resPath+"images/cv/swim010.png", id:"swim010"},
		{src:app.resPath+"images/cv/swim011.png", id:"swim011"},
		{src:app.resPath+"images/cv/swim012.png", id:"swim012"},
		{src:app.resPath+"images/cv/swim013.png", id:"swim013"},
		{src:app.resPath+"images/cv/swim014.png", id:"swim014"},
		{src:app.resPath+"images/cv/swim015.png", id:"swim015"},
		{src:app.resPath+"images/cv/swim016.png", id:"swim016"},
		{src:app.resPath+"images/cv/swim017.png", id:"swim017"},
		{src:app.resPath+"images/cv/swim018.png", id:"swim018"},
		{src:app.resPath+"images/cv/swim019.png", id:"swim019"},
		{src:app.resPath+"images/cv/swim020.png", id:"swim020"},
		{src:app.resPath+"images/cv/swim021.png", id:"swim021"},
		{src:app.resPath+"images/cv/swim022.png", id:"swim022"},
		{src:app.resPath+"images/cv/swim023.png", id:"swim023"},
		{src:app.resPath+"images/cv/swim024.png", id:"swim024"},
		{src:app.resPath+"images/cv/swim025.png", id:"swim025"},
		{src:app.resPath+"images/cv/swim026.png", id:"swim026"},
		{src:app.resPath+"images/cv/swim027.png", id:"swim027"},
		{src:app.resPath+"images/cv/swim028.png", id:"swim028"},
		{src:app.resPath+"images/cv/swim029.png", id:"swim029"},
		{src:app.resPath+"images/cv/swim030.png", id:"swim030"},
		{src:app.resPath+"images/cv/swim031.png", id:"swim031"},
		{src:app.resPath+"images/cv/swim032.png", id:"swim032"},
		{src:app.resPath+"images/cv/swim033.png", id:"swim033"},
		{src:app.resPath+"images/cv/swim034.png", id:"swim034"},
		{src:app.resPath+"images/cv/swim035.png", id:"swim035"},
		{src:app.resPath+"images/cv/swim036.png", id:"swim036"},
		{src:app.resPath+"images/cv/swim037.png", id:"swim037"},
		{src:app.resPath+"images/cv/swim038.png", id:"swim038"},
		{src:app.resPath+"images/cv/swim039.png", id:"swim039"},
		{src:app.resPath+"images/cv/swim040.png", id:"swim040"},
		{src:app.resPath+"images/cv/swim041.png", id:"swim041"},
		{src:app.resPath+"images/cv/swim042.png", id:"swim042"},
		{src:app.resPath+"images/cv/swim043.png", id:"swim043"},
		{src:app.resPath+"images/cv/swim044.png", id:"swim044"},
		{src:app.resPath+"images/cv/swim045.png", id:"swim045"},
		{src:app.resPath+"images/cv/swim046.png", id:"swim046"},
		{src:app.resPath+"images/cv/swim047.png", id:"swim047"},
		{src:app.resPath+"images/cv/swim048.png", id:"swim048"},
		{src:app.resPath+"images/cv/swim049.png", id:"swim049"},
		{src:app.resPath+"images/cv/swim050.png", id:"swim050"},
		{src:app.resPath+"images/cv/swim051.png", id:"swim051"},
		{src:app.resPath+"images/cv/swim052.png", id:"swim052"},
		{src:app.resPath+"images/cv/swim053.png", id:"swim053"},
		{src:app.resPath+"images/cv/swim054.png", id:"swim054"},
		{src:app.resPath+"images/cv/swim055.png", id:"swim055"},
		{src:app.resPath+"images/cv/swim056.png", id:"swim056"},
		{src:app.resPath+"images/cv/swim057.png", id:"swim057"},
		{src:app.resPath+"images/cv/swim058.png", id:"swim058"},
		{src:app.resPath+"images/cv/swim059.png", id:"swim059"},
		{src:app.resPath+"images/cv/swim060.png", id:"swim060"},
		{src:app.resPath+"images/cv/swim061.png", id:"swim061"},
		{src:app.resPath+"images/cv/swim_bird.png", id:"swim_bird"},
		{src:app.resPath+"images/cv/swim_leaf.png", id:"swim_leaf"},
		{src:app.resPath+"images/cv/swim_star.png", id:"swim_star"},
		{src:app.resPath+"images/cv/textbd1.png", id:"textbd1"},
		{src:app.resPath+"images/cv/textbd2.png", id:"textbd2"},
		{src:app.resPath+"images/cv/textswim1.png", id:"textswim1"},
		{src:app.resPath+"images/cv/textswim2.png", id:"textswim2"},
		{src:app.resPath+"images/cv/textwalk1.png", id:"textwalk1"},
		{src:app.resPath+"images/cv/textwalk2.png", id:"textwalk2"},
		{src:app.resPath+"images/cv/walk001.png", id:"walk001"},
		{src:app.resPath+"images/cv/walk002.png", id:"walk002"},
		{src:app.resPath+"images/cv/walk003.png", id:"walk003"},
		{src:app.resPath+"images/cv/walk004.png", id:"walk004"},
		{src:app.resPath+"images/cv/walk005.png", id:"walk005"},
		{src:app.resPath+"images/cv/walk006.png", id:"walk006"},
		{src:app.resPath+"images/cv/walk007.png", id:"walk007"},
		{src:app.resPath+"images/cv/walk008.png", id:"walk008"},
		{src:app.resPath+"images/cv/walk009.png", id:"walk009"},
		{src:app.resPath+"images/cv/walk010.png", id:"walk010"},
		{src:app.resPath+"images/cv/walk011.png", id:"walk011"},
		{src:app.resPath+"images/cv/walk012.png", id:"walk012"},
		{src:app.resPath+"images/cv/walk013.png", id:"walk013"},
		{src:app.resPath+"images/cv/walk014.png", id:"walk014"},
		{src:app.resPath+"images/cv/walk015.png", id:"walk015"},
		{src:app.resPath+"images/cv/walk016.png", id:"walk016"},
		{src:app.resPath+"images/cv/walk017.png", id:"walk017"},
		{src:app.resPath+"images/cv/walk018.png", id:"walk018"},
		{src:app.resPath+"images/cv/y_00027.png", id:"y_00027"},
		{src:app.resPath+"images/cv/y_00029.png", id:"y_00029"},
		{src:app.resPath+"images/cv/y_00031.png", id:"y_00031"},
		{src:app.resPath+"images/cv/y_00033.png", id:"y_00033"},
		{src:app.resPath+"images/cv/y_00035.png", id:"y_00035"},
		{src:app.resPath+"images/cv/y_00037.png", id:"y_00037"},
		{src:app.resPath+"images/cv/y_00039.png", id:"y_00039"},
		{src:app.resPath+"images/cv/y_00041.png", id:"y_00041"},
		{src:app.resPath+"images/cv/y_00043.png", id:"y_00043"},
		{src:app.resPath+"images/cv/y_00045.png", id:"y_00045"},
		{src:app.resPath+"images/cv/y_00047.png", id:"y_00047"}
	]);
	// loader.loadFile({src:"ossweb-img/images/atlas_sp_.json", type:"spritesheet", id:"atlas_sp_"}, true);

	// 音频注册
	createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin]);
  createjs.Sound.alternateExtensions = ["mp3"];
  createjs.Sound.registerSounds([
    {id:'before',src:app.resPath+"media/before.mp3"},
    {id:'after',src:app.resPath+"media/after.mp3"},
  ]);
}

app.handleFileLoad = function (evt){
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

//加载进度
app.handleProgress = function (evt) {
	var percent = parseInt(evt.progress*100);
	$('#percent')[0].innerHTML = percent+'%';
}
//loading页面资源加载完毕回调
app.handleLoadingComplete = function (evt) {

	var queue = evt.target;
  // ss["atlas_loading_"] = queue.getResult("atlas_loading_");

	app.aniStage = new createjs.Stage(app.aniCanvas);

	createjs.Ticker.setFPS(lib.properties.fps);
	
	createjs.Ticker.addEventListener("tick", app.aniStage);
	createjs.Touch.enable(app.aniStage);

	$('#loading').remove();
}
app.curSceneIndex = 0;
app.lookother = function (){
	switch (app.curSceneIndex){
		case 0:
			app.curSceneIndex = 1;
			break;
		case 1:
			app.curSceneIndex = 2;
			break;
		case 2:
			app.curSceneIndex = 0;
			break;
	}
	createjs.Sound.stop();
	app.changeScene(app.curSceneIndex);
}
app.changeScene = function (sceneIndex){
	app.as.gotoAndStop(sceneIndex);
	switch (sceneIndex){
		case 0:
			app.as.s3.gotoAndPlay(0);
			break;
		case 1:
			app.as.s2.gotoAndPlay(0);
			break;
		case 2:
			app.as.s1.gotoAndPlay(0);
			break;
	}
}
app.whatContinue = function (){
	app.switch2Page('.pagelottery');
}
app.earplay = function (e){
	createjs.Sound.stop();
	e.currentTarget.parent.play();
}
//置入头像的动画canvas初始化
app.openAniCanvas = function (){
	app.customImgURI = app.photoStage.toDataURL('#58179a','image/png');ejs.Bitmap();
	app.as = new lib.all();
	app.as.s1.earphone.addEventListener('click',app.earplay);
	app.as.s2.earphone.addEventListener('click',app.earplay);
	app.as.s3.earphone.addEventListener('click',app.earplay);
	app.as.s1.lookother.addEventListener('click',app.lookother);
	app.as.s2.lookother.addEventListener('click',app.lookother);
	app.as.s3.lookother.addEventListener('click',app.lookother);
	app.as.s1.what.addEventListener('click',app.whatContinue)
	app.as.s2.what.addEventListener('click',app.whatContinue)
	app.as.s3.what.addEventListener('click',app.whatContinue)
	app.aniStage.addChild(app.as);
	app.curSceneIndex = parseInt(Math.random()*3);
	app.changeScene(app.curSceneIndex);
	document.querySelector('audio').pause();
}
/*
 *页面DOM元素的事件绑定
 *-----------------
 */
app.bindEvents = function (){
	//去瞧瞧按钮
	$('.btn_look').on('click',function (){
		app.switch2Page('.pageupload');
	})
	//上传图片变化
	app.file.addEventListener('change',function (){
		app.fileChangeHandler(app.file.files[0]);
	})
	$('.btn_repick').on('click',function (){
		$(app.file).trigger('click');
		// app.fileChangeHandler(app.file.files[0]);
	})
	$('.btn_upload').on('click',function (){
		if (!app.hasPhoto){
			alert('请上传一张照片');
			return;
		}
		app.openAniCanvas();
		app.switch2Page('.pageani');
	})
	$('.btn_share').on('click',function (){
		$('.sharewrap').show();
	})
	$('.sharewrap').on('click',function (){
		$('.sharewrap').hide();
	})
}
$(function (){
	$('.loadgif').show()
	app.bindEvents();
	app.initAniCanvas();
})