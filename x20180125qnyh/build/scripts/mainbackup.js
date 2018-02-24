var canvas, stage,ma,els;
var dataResult={};
var app = app || {};
var isIOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
app.resPath = './'; //资源路径配置

$bgm = $('#bgm')[0];
$bird = $('#bird')[0];
$boat = $('#boat')[0];
$fengling = $('#fengling')[0];
$night = $('#night')[0];
$wind = $('#wind')[0];
$wuba = $('#wuba')[0];
$wuba2 = $('#wuba2')[0];

//loading资源的初始化
app.initLoading = function (){
	canvas = document.getElementById("canvas");
	images = images||{};
	var w=document.documentElement.clientWidth;
	var h=document.documentElement.clientHeight;
	if (!isAndroidOrIOS){
		if (w/h>750/1334){
			canvas.style.height = h+'px';
			canvas.style.width = 750/1334*h+'px';
			canvas.style.position = 'absolute';
			canvas.style.webkitTransform = 'translate3d(-50%,0,0)';
			canvas.style.left = '50%';
			canvas.style.top = '0';
		}else {
			canvas.style.height = w*1334/750+'px';
			canvas.style.width = w+'px';
			canvas.style.position = 'absolute';
			canvas.style.webkitTransform = 'translate3d(0,-50%,0)';
			canvas.style.left = '0';
			canvas.style.top = '50%';
		}
	}

	var loader = new createjs.LoadQueue(false,app.resPath,'Anonymous');	
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
		{src:"images/bg_01.jpg", id:"bg_01"},
		{src:"images/s1_desc01.png", id:"s1_desc01"},
		{src:"images/s1_desc02.png", id:"s1_desc02"},
		{src:"images/s1_desc03.png", id:"s1_desc03"},
		{src:"images/s1_desc04.png", id:"s1_desc04"},
	])
}
//应用初始化
app.init = function (){

	var loader = new createjs.LoadQueue(false,app.resPath,'Anonymous');
	loader.addEventListener("fileload", app.handleFileLoad);
	loader.addEventListener("progress", app.handleProgress);
	loader.addEventListener("complete", app.handleLoadingComplete);
	loader.loadManifest([
		{src:"images/bg_01.jpg", id:"bg_01"},
		{src:"images/bg_02.jpg", id:"bg_02"},
		{src:"images/bg_03.jpg", id:"bg_03"},
		{src:"images/bg_04.jpg", id:"bg_04"},
		{src:"images/bg_05.jpg", id:"bg_05"},
		{src:"images/bg_06.jpg", id:"bg_06"},
		{src:"images/bg_07.jpg", id:"bg_07"},
		{src:"images/bg_08.jpg", id:"bg_08"},
		{src:"images/s4_leaf.png", id:"s4_leaf"},
		{src:"images/floor_s4.png", id:"floor_s4"},
		{src:"images/s3_floor01.png", id:"s3_floor01"},
		{src:"images/s3_floor02.png", id:"s3_floor02"},
		{src:"images/s3_floor03.png", id:"s3_floor03"},
		{src:"images/s3_floor04.png", id:"s3_floor04"},
		{src:"images/s5_floor01.png", id:"s5_floor01"},
		{src:"images/s5_floor02.png", id:"s5_floor02"},
		{src:"images/s5_floor03.png", id:"s5_floor03"},
		{src:"images/s5_floor04.png", id:"s5_floor04"},
		{src:"images/s5_floor05.png", id:"s5_floor05"},
		{src:"images/s5_snow.png", id:"s5_snow"},
		{src:"images/s6_girl00.png", id:"s6_girl00"},
		{src:"images/s6_girl01.png", id:"s6_girl01"},
		{src:"images/s6_girl02.png", id:"s6_girl02"},
		{src:"images/s6_girl03.png", id:"s6_girl03"},
		{src:"images/s6_girl04.png", id:"s6_girl04"},
		{src:"images/s6_girl05.png", id:"s6_girl05"},
		{src:"images/s6_girl06.png", id:"s6_girl06"},
		{src:"images/s6_girl07.png", id:"s6_girl07"},
		{src:"images/s6_girl08.png", id:"s6_girl08"},
		{src:"images/s6_girl09.png", id:"s6_girl09"},
		{src:"images/s6_girl10.png", id:"s6_girl10"},
		{src:"images/s6_girl11.png", id:"s6_girl11"},
		{src:"images/s6_girl12.png", id:"s6_girl12"},
		{src:"images/s6_girl13.png", id:"s6_girl13"},
		{src:"images/s6_girl14.png", id:"s6_girl14"},
		{src:"images/s6_girl15.png", id:"s6_girl15"},
		{src:"images/s6_girl16.png", id:"s6_girl16"},
		{src:"images/s6_girl17.png", id:"s6_girl17"},
		{src:"images/s6_girl18.png", id:"s6_girl18"},
		{src:"images/s6_girl19.png", id:"s6_girl19"},
		{src:"images/s6_girl20.png", id:"s6_girl20"},
		{src:"images/s6_girl21.png", id:"s6_girl21"},
		{src:"images/s6_girl22.png", id:"s6_girl22"},
		{src:"images/s6_girl23.png", id:"s6_girl23"},

		{src:"images/loop_leaf01.png", id:"loop_leaf01"},
		{src:"images/loop_leaf02.png", id:"loop_leaf02"},
		{src:"images/loop_sakura01.png", id:"loop_sakura01"},
		{src:"images/loop_sakura02.png", id:"loop_sakura02"},
		{src:"images/loop_snow01.png", id:"loop_snow01"},
		{src:"images/loop_snow02.png", id:"loop_snow02"},

		{src:app.resPath+"images/atlas_s1_.json", type:"spritesheet", id:"atlas_s1_"},
		{src:app.resPath+"images/atlas_s2_.json", type:"spritesheet", id:"atlas_s2_"},
		{src:app.resPath+"images/atlas_s3_.json", type:"spritesheet", id:"atlas_s3_"},
		{src:app.resPath+"images/atlas_s4_.json", type:"spritesheet", id:"atlas_s4_"},
		{src:app.resPath+"images/atlas_s5_.json", type:"spritesheet", id:"atlas_s5_"},
		{src:app.resPath+"images/atlas_s6_.json", type:"spritesheet", id:"atlas_s6_"}
	]);
}

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
  ss["atlas_s1_"] = queue.getResult("atlas_s1_");
  ss["atlas_s2_"] = queue.getResult("atlas_s2_");
  ss["atlas_s3_"] = queue.getResult("atlas_s3_");
  ss["atlas_s4_"] = queue.getResult("atlas_s4_");
  ss["atlas_s5_"] = queue.getResult("atlas_s5_");
  ss["atlas_s6_"] = queue.getResult("atlas_s6_");
	ma = new lib.all();
	ma.alpha = 0;
	els = app.makaList(ma);
	stage.addChild(ma);
	app.isLoaded = true;
	if (app.descEnded)app.managerControl();
  $(document).one('touchstart',function (){
  	$bgm.play();
  })
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
				$('.stopmask').show();
				createjs.Tween.get(ma.s1_text1).to({alpha:1},500).wait(500).call(function (){
					createjs.Tween.get(ma.s1_text2).to({alpha:1},500).wait(500).call(function (){
						$('#scroller').css('height',2540+1334);
						app.myScroll.refresh();
						ma.arrow.y = 1180+1080;
						ma.arrow.visible = true;
						$('.stopmask').hide();
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
				$('.stopmask').show();
				createjs.Tween.get(ma.s2_text1).to({alpha:1},500).wait(500).call(function (){
					createjs.Tween.get(ma.s2_text2).to({alpha:1},500).wait(500).call(function (){
						createjs.Tween.get(ma.s2_text3).to({alpha:1},500).wait(500).call(function (){
							createjs.Tween.get(ma.s2_text4).to({alpha:1},500).wait(500).call(function (){
								$('#scroller').css('height',4327+1334);
								app.myScroll.refresh();
								ma.arrow.y = 2540+1080;
								ma.arrow.visible = true;
								$('.stopmask').hide();
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
				$('.stopmask').show();
				createjs.Tween.get(ma.s3_text1).to({alpha:1},500).wait(500).call(function (){
					createjs.Tween.get(ma.s3_text2).to({alpha:1},500).wait(500).call(function (){
						createjs.Tween.get(ma.s3_text3).to({alpha:1},500).wait(500).call(function (){
								$('#scroller').css('height',5920+1334);
								app.myScroll.refresh();
								ma.arrow.y = 4250+1080;
								ma.arrow.visible = true;
								$('.stopmask').hide();
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
				$('.stopmask').show();
				createjs.Tween.get(ma.s4_text2).to({alpha:1},500).wait(500).call(function (){
					createjs.Tween.get(ma.s4_text1).to({alpha:1},500).wait(500).call(function (){
						$('#scroller').css('height',8170+1334);
						app.myScroll.refresh();
						ma.arrow.y = 5920+1080;
						ma.arrow.visible = true;
						$('.stopmask').hide();
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
				$('.stopmask').show();
				createjs.Tween.get(ma.s5_text3).to({alpha:1},500).wait(500).call(function (){
					createjs.Tween.get(ma.s5_text2).to({alpha:1},500).wait(500).call(function (){
						createjs.Tween.get(ma.s5_text1).to({alpha:1},500).wait(500).call(function (){
								$('#scroller').css('height',9787+1334);
								app.myScroll.refresh();
								ma.arrow.y = 8170+1080;
								ma.arrow.visible = true;
								$('.stopmask').hide();
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
		$('.stopmask').hide();
	});

	ma.s6_btn.addEventListener('click',function (){
		$('.inputpage').fadeIn(300);
	})
}
// function Scroller(element){
// 	this.handlers = {};
// 	this.scrollElement = element;
// 	this.momentum = !0;
// 	this._init();
// }
// Scroller.prototype = {
// 	constructor: Scroller,
// 	_init: function (){
// 		this.scrollElement.addEventListener('mousedown',this._start.bind(this));
// 		this.scrollElement.addEventListener('pressmove',this.scroll.bind(this));
// 		this.scrollElement.addEventListener('pressend',this._end.bind(this));
// 	},
// 	on: function (type, handler){
// 		if (typeof this.handlers[type] == 'undefined'){
// 			this.handlers[type] = [];
// 		}
// 		this.handlers[type].push(handler);
// 	},
// 	fire: function (type, args){
// 		if (this.handlers[type] instanceof Array){

// 			for (var i=0;i<this.handlers[type].length;i++){
// 				this.handlers[type][i](args);
// 			}
// 		}
// 	},
// 	_start: function (e){
// 		this._startY = e.stageY;
// 		// console.log(e.stageY);
// 		this.initY = this.scrollElement.y;
// 	},
// 	scroll: function (e){
// 		if (!app.touchmoveon)return;
// 		var moveY = e.stageY;
// 		var disY = moveY - this._startY;
// 		var y = Math.round(this.initY + disY);
// 		console.log(y);
// 		if (y>=0||y<=-ma.bg.getBounds().height+canvas.height)return;
// 		this.scrollElement.y = y;
// 		// this.scrollElement.y -= 8;
// 		// console.log(this.scrollElement.y);

// 		this.fire('scroll',this.scrollElement.y);

// 	},
// 	_end: function (e){
// 		// this.initY = this.scrollElement.y;

// 	},
// }
// app.scrollListener = function (e){
// 		var scrollY = e;
// 		// ma.y = scrollY;

// 		if (scrollY<=0&&scrollY>-2000){
// 			app.doMove(els[0],scrollY);
// 			// if (!app.sound_s1_isPlayed&&scrollY<-500&&scrollY>-600){
// 			// 	createjs.Sound.stop();
// 			// 	createjs.Sound.play('s1');
// 			// 	app.sound_s1_isPlayed = !0;
// 			// }
// 		}else if (scrollY<=-2000&&scrollY>-3500){
// 			app.doMove(els[1],scrollY+2000);
// 		}else if (scrollY<=-3500&&scrollY>-4600){
// 			app.doMove(els[2],scrollY+3500);
// 		}else if (scrollY<=-4600&&scrollY>-7100){
// 			app.doMove(els[3],scrollY+4600);

// 		}else if (scrollY<=-7100&&scrollY>-8800){
// 			app.doMove(els[4],scrollY+7100);
// 		}else if (scrollY<=-8800&&scrollY>-12000){
// 			app.doMove(els[5],scrollY+8800);
// 		}
// }
app.makaList = function (ma){

	var els = [
		[
			{name: 's1_star1',initX: ma['s1_star1'].x,initY: ma['s1_star1'].y, rateX: 0,rateY: .2},
			{name: 's1_star2',initX: ma['s1_star2'].x,initY: ma['s1_star2'].y, rateX: 0,rateY: .4},
			{name: 's1_text1',initX: ma['s1_text1'].x,initY: ma['s1_text1'].y, rateX: 0,rateY: 0,rateO:-.001},
			{name: 's1_text2',initX: ma['s1_text2'].x,initY: ma['s1_text2'].y, rateX: 0,rateY: 0,rateO:-.001},
			{name: 's1_leaf',initX: ma['s1_leaf'].x,initY: ma['s1_leaf'].y, rateX: 0,rateY: .3},
			// {name: 's1_title',initX: ma['s1_title'].x,initY: ma['s1_title'].y, rateX: 0,rateY: .1},
		],
		[
			// {name: 's2_cloud',initX: ma['s2_cloud'].x,initY: ma['s2_cloud'].y, rateX: .15,rateY: 0,x:100},
			// {name: 's2_floor',initX: ma['s2_floor'].x,initY: ma['s2_floor'].y, rateX: 0,rateY: -.05,y:100},

			// {name: 's2_mountain',initX: ma['s2_mountain'].x,initY: ma['s2_mountain'].y, rateX: 0,rateY: .2},
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
			// {name: 's3_floor',initX: ma['s3_floor'].x,initY: ma['s3_floor'].y, rateX: 0,rateY: -.06},
			{name: 's3_mountain',initX: ma['s3_mountain'].x,initY: ma['s3_mountain'].y, rateX: 0,rateY: .2},
			// {name: 's3_flower',initX: ma['s3_flower'].x,initY: ma['s3_flower'].y, rateX: -.2,rateY: -.4},

			// {name: 's3_text1',initX: ma['s3_text1'].x,initY: ma['s3_text1'].y, rateX: 0,rateY: 0,rateO:-.002,x:100},
			// {name: 's3_text2',initX: ma['s3_text2'].x,initY: ma['s3_text2'].y, rateX: 0,rateY: 0,rateO:-.002,x:100},
			// {name: 's3_text3',initX: ma['s3_text3'].x,initY: ma['s3_text3'].y, rateX: 0,rateY: 0,rateO:-.002,x:100},
			{name: 's3_text1',initX: ma['s3_text1'].x,initY: ma['s3_text1'].y, rateX: -.15,rateY: 0,x:100,rateO:-.003},
			{name: 's3_text2',initX: ma['s3_text2'].x,initY: ma['s3_text2'].y, rateX: -.15,rateY: 0,x:100,rateO:-.003},
			{name: 's3_text3',initX: ma['s3_text3'].x,initY: ma['s3_text3'].y, rateX: -.15,rateY: 0,x:100,rateO:-.003},
		],
		[
			{name: 's4_mountain',initX: ma['s4_mountain'].x,initY: ma['s4_mountain'].y, rateX: 0,rateY: .1},
			{name: 's4_animal',initX: ma['s4_animal'].x,initY: ma['s4_animal'].y, rateX: .3,rateY: -.5,x:-230,y:320},
			{name: 's4_boat',initX: ma['s4_boat'].x,initY: ma['s4_boat'].y, rateX: -.15,rateY: 0},
			// {name: 's4_floor',initX: ma['s4_floor'].x,initY: ma['s4_floor'].y, rateX: 0,rateY: .1},
			{name: 's4_cloud',initX: ma['s4_cloud'].x,initY: ma['s4_cloud'].y, rateX: .06,rateY: 0},
			{name: 's4_leaf',initX: ma['s4_leaf'].x,initY: ma['s4_leaf'].y, rateX: 0,rateY: -.3,y: 300},
			{name: 's4_leafs01',initX: ma['s4_leafs01'].x,initY: ma['s4_leafs01'].y, rateX: -.3,rateY: -0.75,x:600,y:1480},
			{name: 's4_leafs02',initX: ma['s4_leafs02'].x,initY: ma['s4_leafs02'].y, rateX: .24,rateY: -0.75,x:-450,y:1320},

			{name: 's4_text1',initX: ma['s4_text1'].x,initY: ma['s4_text1'].y, rateX: 0,rateY: -.08,rateO:-.002,y:-120},
			// {name: 's4_text1',initX: ma['s4_text1'].x,initY: ma['s4_text1'].y, rateX: 0,rateY: -.08,rateO:-.002,y:-100},
			{name: 's4_text2',initX: ma['s4_text2'].x,initY: ma['s4_text2'].y, rateX: 0,rateY: 0,rateO:-.002},
		],
		[
			{name: 's5_mountain',initX: ma['s5_mountain'].x,initY: ma['s5_mountain'].y, rateX: 0,rateY: .12},
			{name: 's5_floor',initX: ma['s5_floor'].x,initY: ma['s5_floor'].y, rateX: -.2,rateY: 0,x:200},
			// {name: 's5_floor',initX: ma['s5_floor'].x,initY: ma['s5_floor'].y, rateX: 0,rateY: -.1,x:200},

			{name: 's5_text1',initX: ma['s5_text1'].x,initY: ma['s5_text1'].y, rateX: -.2,rateY: 0,x:200,rateO:-.005},
			{name: 's5_text2',initX: ma['s5_text2'].x,initY: ma['s5_text2'].y, rateX: -.2,rateY: 0,x:200,rateO:-.005},
			{name: 's5_text3',initX: ma['s5_text3'].x,initY: ma['s5_text3'].y, rateX: -.2,rateY: 0,x:200,rateO:-.005},
			// {name: 's5_text1',initX: ma['s5_text1'].x,initY: ma['s5_text1'].y, rateX: 0,rateY: 0,rateO:-.001,x:200},
			// {name: 's5_text2',initX: ma['s5_text2'].x,initY: ma['s5_text2'].y, rateX: 0,rateY: 0,rateO:-.001,x:200},
			// {name: 's5_text3',initX: ma['s5_text3'].x,initY: ma['s5_text3'].y, rateX: 0,rateY: 0,rateO:-.001,x:200},
		],
		[
			{name: 's6_animal',initX: ma['s6_animal'].x,initY: ma['s6_animal'].y, rateX: -.2,rateY: .3},
			{name: 's6_cloud',initX: ma['s6_cloud'].x,initY: ma['s6_cloud'].y, rateX: .1,rateY: 0},

			// {name: 's6_btn',initX: ma['s6_btn'].x,initY: ma['s6_btn'].y, rateX: 0,rateY: 0,rateO:-.0012},
			// {name: 's6_text1',initX: ma['s6_text1'].x,initY: ma['s6_text1'].y, rateX: 0,rateY: 0,rateO:-.0012},
		]
	]
	return els;
}
app.doMove = function (arr,scrollY){

	for (var i=0;i<arr.length;i++){
		var x = scrollY*arr[i].rateX
		var y = scrollY*arr[i].rateY
		var alpha = scrollY*arr[i].rateO;
		// if (i==0)console.log(x);
		
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
app.dataText = [
	{location:"邻居家的菜地里", role:"正在吃枣的胡巴", words:"每逢佳节瘦三斤"},
	{location:"蒲家村的秋千旁", role:"拿着鞭炮到处跑的胡巴", words:"家园天天出紫菜"},
	{location:"青丘的灯会上", role:"戴着狮子头跳舞的胡巴", words:"科举考试满分过"},
	{location:"金陵朱雀桥上", role:"正在击鼓的笨笨", words:"游戏愉快 绝不脱发"},
	{location:"青丘时光照相馆", role:"想要给你带荷叶帽的笨笨", words:"隔三差五上电视"},
	{location:"盘古之隙桃树下", role:"刚隐身完显形的笨笨", words:"全服脸最白"},
	{location:"杭州三生石旁", role:"正在送福的小花和骰子妖", words:"好友列表总有一个一起看风景的人"},
	{location:"西湖苏堤石凳前", role:"到处撒狗粮的小花和骰子妖", words:"喜欢的人也喜欢你"},
	{location:"台州海岸的沙滩上", role:"正在打牌的小花和骰子妖", words:"抢到的红包金额永远最大"},
	{location:"落霞峰的揽云台上", role:"正在看风景的小花和骰子妖", words:"成为金雀坊赌神"},
	{location:"天宫蟠桃园内", role:"正在找人一起干大事的赤天霸", words:"逆天无钻随便出"},
	{location:"关宁战场内", role:"激情弹贝斯的赤天霸", words:"战场轻松躺赢"},
	{location:"兰若寺门前", role:"领着小弟巡逻的赤天霸", words:"每天都爆鬼笑到合不拢嘴"}
]
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
		  ss["atlas_result_"] = queue.getResult("atlas_result_");
		  setTimeout(function (){
		  	app.createImage(dataResult);
		  },500)
	});
	loader.loadManifest([
		{src:"images/r_bg.jpg", id:"r_bg"},
		{src:"images/r_pic01.jpg", id:"r_pic01"},
		{src:"images/r_pic02.jpg", id:"r_pic02"},
		{src:"images/r_pic03.jpg", id:"r_pic03"},
		{src:"images/r_pic04.jpg", id:"r_pic04"},
		{src:"images/qrcode.png", id:"qrcode"},
		{src:"images/atlas_result_.json", type:"spritesheet", id:"atlas_result_"},
	])
}
// var link = "http://www.bigbone.cn/x20180125qnyh/build/share.html?userName=徐斌&combo=123";
// var enurl = encodeURI(link);
// var deurl = decodeURI(enurl);
// console.log(enurl);
// console.log(deurl);
app.resetShare = function (imageData){
	// var link = "http://www.bigbone.cn/x20180125qnyh/build/share.html?"+"userName="+encodeURI(encodeURI(imageData.userName))+"&combo="+imageData.combo;
	var link = "http://bigbone.cn/x20180125qnyh/build/share.html?"+"userName="+imageData.userName+"&combo="+imageData.combo;
	shareData.link = encodeURI(link);
	// shareData.link = "http://www.bigbone.cn/x20180125qnyh/build/share.html?"+"userName="+imageData.userName+"&combo="+imageData.combo;
	console.log(shareData);
	try{mobileShare(shareData);}catch(e){alert(e)}
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
	app.resetShare(data);
	setTimeout(function (){
		$('.waitwrap,.inputtpage').hide();
		$('.resultpage').fadeIn(200);
		$('#saveImage').addClass('ani');
	},1000)
}
app.bindEvents = function (){
	$('.btn_open').on('click',app.openResult)
	$('.s6_btn').on('click',function (){
  	$('.inputpage').fadeIn(300);
  })
  $('.btn_save').on('click',function (){
  	$('.savewrap').fadeIn(500);
  })
  $('.btn_share').on('click',function (){
  	$('.sharewrap').fadeIn(500);
  })
  $('.savewrap').on('click',function (){
  	$('.savewrap').fadeOut(500);
  })
  $('.sharewrap').on('click',function (){
  	$('.sharewrap').fadeOut(500);
  })
  if (isIOS){
	  $('#userName').on('blur',function (){
	  	$(window).scrollTop(0)
	  })
  }
}

// $(function (){
	// app.createResult();
	app.initLoading();
	app.bindEvents();
// })
