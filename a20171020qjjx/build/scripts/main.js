var app = app || {};
app.soundon = !0;

app.curPage = '.pagestart';
//页面切换
app.switch2Page = function (toPage){
	$(this.curPage).hide();
	$(toPage).show();
	this.curPage = toPage;
},
app.timecount = function (){
	var year = 2002,month = 7;
	app.countTimer = setInterval(function (){
		month++;
		if (month>12){
			year += 1;
			month = 1;
		}
		if ( year===2017 && month>11 ){
			clearInterval(app.countTimer);
			app.timecountCallback();
			return;
		}
		$('.p0-time').text(year+'.'+ (month>=10?month:'0'+''+month));
	},15)
}
app.timecountCallback = function (){
	setTimeout(function (){
		$('.p0-time').hide();
		$('.group-select').fadeIn(500)
		app.change();
	},500)
}

app.curSelectIdx = 0;
app.playTimes = 0;
app.change = function (){

	app.imgStyle = 'icon_'+(app.curSelectIdx+1);

	app.changeTimer = setInterval(function (){
		app.curSelectIdx++;
		if (app.curSelectIdx>=20){
			app.curSelectIdx=0;
		}
		var curStyle = 'icon_'+(app.curSelectIdx+1);
		$('.selected-img').removeClass(app.imgStyle).addClass(curStyle);
		app.imgStyle = curStyle;

	},100)
}
app.select = function (){
	app.playTimes++;
	clearInterval(app.changeTimer);
	if (app.playTimes===3){
		app.curSelectIdx=19;
	}else if (app.playTimes<3&&app.curSelectIdx===19){
		app.curSelectIdx=0;
	}

	if (app.curSelectIdx===16){
		app.curSelectIdx = 17;
	}
	var curStyle = 'icon_'+(app.curSelectIdx+1);
	$('.selected-img').removeClass(app.imgStyle).addClass(curStyle);
	app.imgStyle = curStyle;
	console.log(app.curSelectIdx)
}

app.initCanvas = function (){
	app.aniCanvas = document.getElementById("canvas");
	// images = images||{};
	app.aniStage = new createjs.Stage(app.aniCanvas);
	createjs.Ticker.setFPS(24);
	createjs.Ticker.addEventListener("tick", app.aniStage);
	createjs.MotionGuidePlugin.install();
	createjs.Touch.enable(app.aniStage);
	createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin]);
  createjs.Sound.alternateExtensions = ["mp3"];
}
app.loadResource = function (idx){
	var loader = new createjs.LoadQueue(false,'./','Anonymous');
	loader.addEventListener("fileload", app.handleFileLoad);
	loader.addEventListener("complete", function (){
		switch (idx){
			case 0: app.curScene = new lib.s1(); break;
			case 1: app.curScene = new lib.s2(); break;
			case 2: app.curScene = new lib.s3(); break;
			case 3: app.curScene = new lib.s4(); break;
			case 4: app.curScene = new lib.s5(); break;
			case 5: app.curScene = new lib.s6(); break;
			case 6: app.curScene = new lib.s7(); break;
			case 7: app.curScene = new lib.s8(); break;
			case 8: app.curScene = new lib.s9(); break;
			case 9: app.curScene = new lib.s10(); break;
			case 10: app.curScene = new lib.s11(); break;
			case 11: app.curScene = new lib.s12(); break;
			case 12: app.curScene = new lib.s13(); break;
			case 13: app.curScene = new lib.s14(); break;
			case 14: app.curScene = new lib.s15(); break;
			case 15: app.curScene = new lib.s16(); break;
			case 16: app.curScene = new lib.s17(); break;
			case 17: app.curScene = new lib.s18(); break;
			case 18: app.curScene = new lib.s19(); break;
			case 19: app.curScene = new lib.s20(); break;
		}

		app.aniStage.removeAllChildren();
		app.aniStage.addChild(app.curScene);
		setTimeout(function (){
			app.switch2Page('.canvasbox');
			$('.music').show();
			var bgmstr = ''+(idx+1);
			createjs.Sound.stop();
			if (app.soundon){
				app.soundInstance = createjs.Sound.play(bgmstr,{volume:1})
			}else {
				app.soundInstance = createjs.Sound.play(bgmstr,{volume:0})
			}
		},300)
		
	});
	switch (idx){
		case 0: 
			if (!app.qjs1loaded){
				loader.loadFile({src:'scripts/qj_s1.js',id:'qj_s1'}); 
				createjs.Sound.registerSounds([{id:'1',src:"media/1.mp3"} ]);
				app.qjs1loaded=!0;
			} 
			break;
		case 1: 
			if (!app.qjs2loaded){
				loader.loadFile({src:'scripts/qj_s2.js',id:'qj_s2'}); 
				createjs.Sound.registerSounds([{id:'2',src:"media/2.mp3"} ]);
				app.qjs2loaded=!0;
			} 
			break;
		case 2: 
			if (!app.qjs3loaded){
				loader.loadFile({src:'scripts/qj_s3.js',id:'qj_s3'});
				createjs.Sound.registerSounds([{id:'3',src:"media/3.mp3"} ]);
				app.qjs3loaded=!0;
			} break;
		case 3: 
			if (!app.qjs4loaded){
				loader.loadFile({src:'scripts/qj_s4.js',id:'qj_s4'});
				app.qjs4loaded=!0;
				createjs.Sound.registerSounds([{id:'4',src:"media/4.mp3"} ]);
			} 
			break;
		case 4: 
			if (!app.qjs5loaded){
				loader.loadFile({src:'scripts/qj_s5.js',id:'qj_s5'});
				app.qjs5loaded=!0;
				createjs.Sound.registerSounds([{id:'5',src:"media/5.mp3"} ]);
			} 
			break;
		case 5: 
			if (!app.qjs6loaded){
				loader.loadFile({src:'scripts/qj_s6.js',id:'qj_s6'});
				app.qjs6loaded=!0;
				createjs.Sound.registerSounds([{id:'6',src:"media/6.mp3"} ]);
			} 
			break;
		case 6: 
			if (!app.qjs7loaded){
				loader.loadFile({src:'scripts/qj_s7.js',id:'qj_s7'});
				app.qjs7loaded=!0;
				createjs.Sound.registerSounds([{id:'7',src:"media/7.mp3"} ]);
			} 
			break;
		case 7: 
			if (!app.qjs8loaded){
				loader.loadFile({src:'scripts/qj_s8.js',id:'qj_s8'});
				createjs.Sound.registerSounds([{id:'8',src:"media/8.mp3"} ]);
				app.qjs8loaded=!0;
			} 
			break;
		case 8: 
			if (!app.qjs9loaded){
				loader.loadFile({src:'scripts/qj_s9.js',id:'qj_s9'});
				createjs.Sound.registerSounds([{id:'9',src:"media/9.mp3"} ]);
				app.qjs9loaded=!0;
			} 
			break;
		case 9: 
			if (!app.qjs10loaded){
				loader.loadFile({src:'scripts/qj_s10.js',id:'qj_s10'});
				app.qjs10loaded=!0;
				createjs.Sound.registerSounds([{id:'10',src:"media/10.mp3"} ]);
			} 
			break;
		case 10: 
			if (!app.qjs11loaded){
				loader.loadFile({src:'scripts/qj_s11.js',id:'qj_s11'});
				createjs.Sound.registerSounds([{id:'11',src:"media/11.mp3"} ]);
				app.qjs11loaded=!0;
			} 
			break;
		case 11: 
			if (!app.qjs12loaded){
				loader.loadFile({src:'scripts/qj_s12.js',id:'qj_s12'});
				createjs.Sound.registerSounds([{id:'12',src:"media/12.mp3"} ]);
				app.qjs12loaded=!0;
			} 
			break;
		case 12: 
			if (!app.qjs13loaded){
				loader.loadFile({src:'scripts/qj_s13.js',id:'qj_s13'});
				createjs.Sound.registerSounds([{id:'13',src:"media/13.mp3"} ]);
				app.qjs13loaded=!0;
			} 
			break;
		case 13: 
			if (!app.qjs14loaded){
				loader.loadFile({src:'scripts/qj_s14.js',id:'qj_s14'});
				createjs.Sound.registerSounds([{id:'14',src:"media/14.mp3"} ]);
				app.qjs14loaded=!0;
			} 
			break;
		case 14: 
			if (!app.qjs15loaded){
				loader.loadFile({src:'scripts/qj_s15.js',id:'qj_s15'});
				createjs.Sound.registerSounds([{id:'15',src:"media/15.mp3"} ]);
				app.qjs15loaded=!0;
			} 
			break;
		case 15: 
			if (!app.qjs16loaded){
				loader.loadFile({src:'scripts/qj_s16.js',id:'qj_s16'});
				createjs.Sound.registerSounds([{id:'16',src:"media/16.mp3"} ]);
				app.qjs16loaded=!0;
			} 
			break;
		case 16: 
			if (!app.qjs17loaded){
				loader.loadFile({src:'scripts/qj_s17.js',id:'qj_s17'});
				createjs.Sound.registerSounds([{id:'17',src:"media/17.mp3"} ]);
				app.qjs17loaded=!0;
			} break;
		case 17: 
			if (!app.qjs18loaded){
				loader.loadFile({src:'scripts/qj_s18.js',id:'qj_s18'});
				createjs.Sound.registerSounds([{id:'18',src:"media/18.mp3"} ]);
				app.qjs18loaded=!0;
			}
			break;
		case 18: 
			if (!app.qjs19loaded){
				loader.loadFile({src:'scripts/qj_s19.js',id:'qj_s19'});
				createjs.Sound.registerSounds([{id:'19',src:"media/19.mp3"} ]);
				app.qjs19loaded=!0;
			} 
			break;
		case 19: 
			if (!app.qjs20loaded){
				loader.loadFile({src:'scripts/qj_s20.js',id:'qj_s20'});
				createjs.Sound.registerSounds([{id:'20',src:"media/20.mp3"} ]);
				app.qjs20loaded=!0;
			} 
			break;
	}
	loader.loadManifest(app.resources[idx]);
}
app.handleFileLoad = function (evt){
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}
app.showBtns = function (){
	if (app.curSelectIdx === 16){
		$('.btn-download,.btn-share,.back').show();
	}else {
		$('.btn-other,.btn-dafa,.relook').show()
	}
	
}
app.hideBtns = function (){
	$('.btn-other,.btn-dafa,.relook,.btn-download,.btn-share,.back').hide()
}

$(function (){
	app.timecount();
	// app.timecountCallback();
	app.initCanvas();
	$('.btn-select').on('click',function (){
		app.select();
		$(this).hide();
		setTimeout(function (){
			$('.selectbox').hide();
			$('.loadtext').show();
			app.loadResource(app.curSelectIdx)
		},500)
	})
	$('.btn-other,.back').on('click',function (){
		app.switch2Page('.pagestart');
		app.hideBtns();
		$('.selectbox,.btn-select').show();
		$('.loadtext').hide();
		app.change();
		createjs.Sound.stop();
	})
	$('.btn-dafa').on('click',function (){
		// app.switch2Page('.pageend');
		app.curSelectIdx = 16;
		app.switch2Page('.pagestart');
		app.hideBtns();
		// $('.selectbox,.btn-select').show();
		// $('.loadtext').hide();
		// app.change();
		app.loadResource(app.curSelectIdx);
		// createjs.Sound.stop();
	})
	$('.testwrap').on('click','li',function (){
		app.curSelectIdx = $(this).index();
		app.select();
		setTimeout(function (){
			$('.selectbox').hide();
			$('.loadtext').show();
			app.loadResource(app.curSelectIdx)
		},500)
	})
	$('.relook').on('click',function (){
		app.hideBtns();
		app.curScene.gotoAndPlay(0);
		createjs.Sound.stop();
		// if (app.soundon){createjs.Sound.play(''+(app.curSelectIdx+1))}
		if (app.soundon){
			app.soundInstance = createjs.Sound.play(''+(app.curSelectIdx+1),{volume:1})
		}else {
			app.soundInstance = createjs.Sound.play(''+(app.curSelectIdx+1),{volume:0})
		}
		// app.loadResource(app.curSelectIdx)
	})	
	$('.btn-share').on('click',function (){
		$('.sharewrap').show();
	})	
	$('.sharewrap').on('click',function (){
		$('.sharewrap').hide();
	})	
	$('.music').on('touchend',function (){
		if (app.soundon){
			$(this).removeClass('on').addClass('off');
			// createjs.Sound.stop();
			app.soundon = !1;
			try{app.soundInstance.volume = 0;}catch(e){}
		}else {
			$(this).removeClass('off').addClass('on');
			app.soundon = !0;
			try{app.soundInstance.volume = 1;}catch(e){}
		}
	})
})

app.resources = [
	[
		{src:"images/cv/cm_line.png", id:"cm_line"},
		{src:"images/cv/s11bg1.png", id:"s11bg1"},
		{src:"images/cv/s11maoshen1.png", id:"s11maoshen1"},
		{src:"images/cv/s11maotou1.png", id:"s11maotou1"},
		{src:"images/cv/s11ren1.png", id:"s11ren1"},
		{src:"images/cv/s11yanjing.png", id:"s11yanjing"},
		{src:"images/cv/s12maowei22.png", id:"s12maowei22"},
		{src:"images/cv/s12ding.png", id:"s12ding"},
		{src:"images/cv/s12houtui1.png", id:"s12houtui1"},
		{src:"images/cv/s12houtui2.png", id:"s12houtui2"},
		{src:"images/cv/s12maoshen2.png", id:"s12maoshen2"},
		{src:"images/cv/s12maotou2.png", id:"s12maotou2"},
		{src:"images/cv/s12miao.png", id:"s12miao"},
		{src:"images/cv/s12qianzhua.png", id:"s12qianzhua"},
		{src:"images/cv/s12ren2.png", id:"s12ren2"},
		{src:"images/cv/s12yanjing2.png", id:"s12yanjing2"},
		{src:"images/cv/s12yanjing3.png", id:"s12yanjing3"},
		{src:"images/cv/s12yanjing4.png", id:"s12yanjing4"},
		{src:"images/cv/s12.png", id:"s12"},
		{src:"images/cv/s13bg2.png", id:"s13bg2"},
		{src:"images/cv/s13xuesiyanzhuyou.png", id:"s13xuesiyanzhuyou"},
		{src:"images/cv/s13xuesiyanzhuzuo.png", id:"s13xuesiyanzhuzuo"},
		{src:"images/cv/s13youyanzhu.png", id:"s13youyanzhu"},
		{src:"images/cv/s13zuoyanzhu.png", id:"s13zuoyanzhu"},
		{src:"images/cv/s14bg3.png", id:"s14bg3"},
		{src:"images/cv/s14diannao.png", id:"s14diannao"},
		{src:"images/cv/s14lian.png", id:"s14lian"},
		{src:"images/cv/s14zui1.png", id:"s14zui1"},
		{src:"images/cv/s14zui2.png", id:"s14zui2"},
		{src:"images/cv/s14zui3.png", id:"s14zui3"},
		{src:"images/cv/s15bg4.png", id:"s15bg4"},
		{src:"images/cv/s15maoshen.png", id:"s15maoshen"},
		{src:"images/cv/s15maotou.png", id:"s15maotou"},
		{src:"images/cv/s15maotui1.png", id:"s15maotui1"},
		{src:"images/cv/s15maotui2.png", id:"s15maotui2"},
		{src:"images/cv/s15maowei.png", id:"s15maowei"},
		{src:"images/cv/s15maozhua1.png", id:"s15maozhua1"},
		{src:"images/cv/s15maozhua2.png", id:"s15maozhua2"},
		{src:"images/cv/s15shou.png", id:"s15shou"},
		{src:"images/cv/s15zi.png", id:"s15zi"},
		{src:"images/cv/s1cat_00000.png", id:"s1cat_00000"},
		{src:"images/cv/s1cat_00001.png", id:"s1cat_00001"},
		{src:"images/cv/s1cat_00002.png", id:"s1cat_00002"},
		{src:"images/cv/s1cat_00003.png", id:"s1cat_00003"},
		{src:"images/cv/s1cat_00004.png", id:"s1cat_00004"},
		{src:"images/cv/s1cat_00005.png", id:"s1cat_00005"},
		{src:"images/cv/s1cat_00006.png", id:"s1cat_00006"},
		{src:"images/cv/s1cat_00007.png", id:"s1cat_00007"},
		{src:"images/cv/s1cat_00008.png", id:"s1cat_00008"},
		{src:"images/cv/s1cat_00009.png", id:"s1cat_00009"},
		{src:"images/cv/s1cat_00010.png", id:"s1cat_00010"},
		{src:"images/cv/s1wenzi2.png", id:"s1wenzi2"}
	],
	[
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
	],
	[
		{src:"images/cv/s36shine.png", id:"s36shine"},
		{src:"images/cv/cm_line.png", id:"cm_line"},
		{src:"images/cv/s31Manhand.png", id:"s31Manhand"},
		{src:"images/cv/s31Womanhand.png", id:"s31Womanhand"},
		{src:"images/cv/s31bg.jpg", id:"s31bg"},
		{src:"images/cv/s32bg.jpg", id:"s32bg"},
		{src:"images/cv/s32boom.png", id:"s32boom"},
		{src:"images/cv/s32ding.png", id:"s32ding"},
		{src:"images/cv/s32Manhand.png", id:"s32Manhand"},
		{src:"images/cv/s32Womanhand.png", id:"s32Womanhand"},
		{src:"images/cv/s32.jpg", id:"s32"},
		{src:"images/cv/s33bgdown.png", id:"s33bgdown"},
		{src:"images/cv/s33bgup.png", id:"s33bgup"},
		{src:"images/cv/s33bg.jpg", id:"s33bg"},
		{src:"images/cv/s33ding.png", id:"s33ding"},
		{src:"images/cv/s33Man1.png", id:"s33Man1"},
		{src:"images/cv/s33Man2.png", id:"s33Man2"},
		{src:"images/cv/s33Man3.png", id:"s33Man3"},
		{src:"images/cv/s33xiaoxianxian.png", id:"s33xiaoxianxian"},
		{src:"images/cv/s34a.png", id:"s34a"},
		{src:"images/cv/s34b.png", id:"s34b"},
		{src:"images/cv/s34bg.jpg", id:"s34bg"},
		{src:"images/cv/s34face1.png", id:"s34face1"},
		{src:"images/cv/s34face2.png", id:"s34face2"},
		{src:"images/cv/s34face3.png", id:"s34face3"},
		{src:"images/cv/s34l.png", id:"s34l"},
		{src:"images/cv/s34Speedline1.png", id:"s34Speedline1"},
		{src:"images/cv/s34Speedline2.png", id:"s34Speedline2"},
		{src:"images/cv/s34Speedline3.png", id:"s34Speedline3"},
		{src:"images/cv/s34x.png", id:"s34x"},
		{src:"images/cv/s35bgdown.png", id:"s35bgdown"},
		{src:"images/cv/s35bgup.png", id:"s35bgup"},
		{src:"images/cv/s35boom1.png", id:"s35boom1"},
		{src:"images/cv/s35boom2.png", id:"s35boom2"},
		{src:"images/cv/s35boom3.png", id:"s35boom3"},
		{src:"images/cv/s35dong.png", id:"s35dong"},
		{src:"images/cv/s35foot.png", id:"s35foot"},
		{src:"images/cv/s35hand.png", id:"s35hand"},
		{src:"images/cv/s35scabbard.png", id:"s35scabbard"},
		{src:"images/cv/s35shadow.png", id:"s35shadow"},
		{src:"images/cv/s35speedlineup.png", id:"s35speedlineup"},
		{src:"images/cv/s35sword.png", id:"s35sword"},
		{src:"images/cv/s35table.png", id:"s35table"},
		{src:"images/cv/s35white.png", id:"s35white"},
		{src:"images/cv/s36man.jpg", id:"s36man"},
		{src:"images/cv/s36woman.png", id:"s36woman"},
		{src:"images/cv/s36zi.png", id:"s36zi"}
	],
	[
		{src:"images/cv/cm_line.png", id:"cm_line"},
		{src:"images/cv/s41houjing.png", id:"s41houjing"},
		{src:"images/cv/s41laoshishenzi.png", id:"s41laoshishenzi"},
		{src:"images/cv/s41laoshishou.png", id:"s41laoshishou"},
		{src:"images/cv/s41qianjing.png", id:"s41qianjing"},
		{src:"images/cv/s42bg.png", id:"s42bg"},
		{src:"images/cv/s42boom.png", id:"s42boom"},
		{src:"images/cv/s42ding.png", id:"s42ding"},
		{src:"images/cv/s42laoshi.png", id:"s42laoshi"},
		{src:"images/cv/s42youshou.png", id:"s42youshou"},
		{src:"images/cv/s42zuoshou.png", id:"s42zuoshou"},
		{src:"images/cv/s43bg.png", id:"s43bg"},
		{src:"images/cv/s43ding.png", id:"s43ding"},
		{src:"images/cv/s43eye1.png", id:"s43eye1"},
		{src:"images/cv/s43eye2.png", id:"s43eye2"},
		{src:"images/cv/s43eye3.png", id:"s43eye3"},
		{src:"images/cv/s43gebohou.png", id:"s43gebohou"},
		{src:"images/cv/s43geboqian.png", id:"s43geboqian"},
		{src:"images/cv/s43tou.png", id:"s43tou"},
		{src:"images/cv/s43xiaoxuehua.png", id:"s43xiaoxuehua"},
		{src:"images/cv/s44bgshang.png", id:"s44bgshang"},
		{src:"images/cv/s44bgxia.png", id:"s44bgxia"},
		{src:"images/cv/s44boom1.png", id:"s44boom1"},
		{src:"images/cv/s44boom2.png", id:"s44boom2"},
		{src:"images/cv/s44boom3.png", id:"s44boom3"},
		{src:"images/cv/s44boom4.png", id:"s44boom4"},
		{src:"images/cv/s44renxian.png", id:"s44renxian"},
		{src:"images/cv/s44ren.png", id:"s44ren"},
		{src:"images/cv/s44shou.png", id:"s44shou"},
		{src:"images/cv/s44xian.png", id:"s44xian"},
		{src:"images/cv/s44zhuozi2.png", id:"s44zhuozi2"},
		{src:"images/cv/s44zhuozixian.png", id:"s44zhuozixian"},
		{src:"images/cv/s44zhuozi.png", id:"s44zhuozi"},
		{src:"images/cv/s44zuishangmian.png", id:"s44zuishangmian"},
		{src:"images/cv/s45bg.png", id:"s45bg"},
		{src:"images/cv/s45jing.png", id:"s45jing"},
		{src:"images/cv/s45lingdang.png", id:"s45lingdang"},
		{src:"images/cv/s45ren.png", id:"s45ren"},
		{src:"images/cv/s45zuijiao1.png", id:"s45zuijiao1"},
		{src:"images/cv/s4611.png", id:"s4611"},
		{src:"images/cv/s4612.png", id:"s4612"},
		{src:"images/cv/s4613.png", id:"s4613"},
		{src:"images/cv/s46101.png", id:"s46101"},
		{src:"images/cv/s46111.png", id:"s46111"},
		{src:"images/cv/s46121.png", id:"s46121"},
		{src:"images/cv/s46131.png", id:"s46131"},
		{src:"images/cv/s46132.png", id:"s46132"},
		{src:"images/cv/s46133.png", id:"s46133"},
		{src:"images/cv/s46141.png", id:"s46141"},
		{src:"images/cv/s46142.png", id:"s46142"},
		{src:"images/cv/s46143.png", id:"s46143"},
		{src:"images/cv/s46144.png", id:"s46144"},
		{src:"images/cv/s46151.png", id:"s46151"},
		{src:"images/cv/s46152.png", id:"s46152"},
		{src:"images/cv/s46161.png", id:"s46161"},
		{src:"images/cv/s46162.png", id:"s46162"},
		{src:"images/cv/s4621.png", id:"s4621"},
		{src:"images/cv/s4622.png", id:"s4622"},
		{src:"images/cv/s4623.png", id:"s4623"},
		{src:"images/cv/s4631.png", id:"s4631"},
		{src:"images/cv/s4632.png", id:"s4632"},
		{src:"images/cv/s4651.png", id:"s4651"},
		{src:"images/cv/s4661.png", id:"s4661"},
		{src:"images/cv/s4662.png", id:"s4662"},
		{src:"images/cv/s4671.png", id:"s4671"},
		{src:"images/cv/s4681.png", id:"s4681"},
		{src:"images/cv/s4691.png", id:"s4691"},
		{src:"images/cv/s4692.png", id:"s4692"},
		{src:"images/cv/s46bg.jpg", id:"s46bg"},
		{src:"images/cv/s46ren.png", id:"s46ren"},
		{src:"images/cv/s46shou.png", id:"s46shou"},
		{src:"images/cv/s46zi.png", id:"s46zi"}
	],
	[
		{src:"images/cv/cm_line.png", id:"cm_line"},
		{src:"images/cv/s5bg.png", id:"s5bg"},
		{src:"images/cv/s51711.png", id:"s51711"},
		{src:"images/cv/s51door1.png", id:"s51door1"},
		{src:"images/cv/s51door2.png", id:"s51door2"},
		{src:"images/cv/s51man.png", id:"s51man"},
		{src:"images/cv/s52711.png", id:"s52711"},
		{src:"images/cv/s52door1.png", id:"s52door1"},
		{src:"images/cv/s52door2.png", id:"s52door2"},
		{src:"images/cv/s52manshenti.png", id:"s52manshenti"},
		{src:"images/cv/s52mantou.png", id:"s52mantou"},
		{src:"images/cv/s52uncleshenzi.png", id:"s52uncleshenzi"},
		{src:"images/cv/s52uncleshou.png", id:"s52uncleshou"},
		{src:"images/cv/s52uncletou.png", id:"s52uncletou"},
		{src:"images/cv/s53_.png", id:"s53_"},
		{src:"images/cv/s53bgdown.png", id:"s53bgdown"},
		{src:"images/cv/s53bgup.png", id:"s53bgup"},
		{src:"images/cv/s53ding.png", id:"s53ding"},
		{src:"images/cv/s53eye1.png", id:"s53eye1"},
		{src:"images/cv/s53eye2.png", id:"s53eye2"},
		{src:"images/cv/s53eye3.png", id:"s53eye3"},
		{src:"images/cv/s53hengxian.png", id:"s53hengxian"},
		{src:"images/cv/s53huanying.png", id:"s53huanying"},
		{src:"images/cv/s53lingdi.png", id:"s53lingdi"},
		{src:"images/cv/s53lingshang.png", id:"s53lingshang"},
		{src:"images/cv/s53mangebo.png", id:"s53mangebo"},
		{src:"images/cv/s53manshou.png", id:"s53manshou"},
		{src:"images/cv/s53man.png", id:"s53man"},
		{src:"images/cv/s53pa1.png", id:"s53pa1"},
		{src:"images/cv/s53pa2.png", id:"s53pa2"},
		{src:"images/cv/s53uncleeyezuo.png", id:"s53uncleeyezuo"},
		{src:"images/cv/s53uncleeyeyou.png", id:"s53uncleeyeyou"},
		{src:"images/cv/s53unclegebo.png", id:"s53unclegebo"},
		{src:"images/cv/s53uncleya.png", id:"s53uncleya"},
		{src:"images/cv/s53uncle.png", id:"s53uncle"},
		{src:"images/cv/s53__1.png", id:"s53__1"},
		{src:"images/cv/s54_.png", id:"s54_"},
		{src:"images/cv/s54bg.jpg", id:"s54bg"},
		{src:"images/cv/s54manshou.png", id:"s54manshou"},
		{src:"images/cv/s54man.png", id:"s54man"},
		{src:"images/cv/s54unclejiao.png", id:"s54unclejiao"},
		{src:"images/cv/s54uncletou.png", id:"s54uncletou"},
		{src:"images/cv/s54uncleyoushou.png", id:"s54uncleyoushou"},
		{src:"images/cv/s54unclezuoshou.png", id:"s54unclezuoshou"},
		{src:"images/cv/s54uncle.png", id:"s54uncle"},
		{src:"images/cv/s55bg.png", id:"s55bg"},
		{src:"images/cv/s55daxingxing1.png", id:"s55daxingxing1"},
		{src:"images/cv/s55daxingxing2.png", id:"s55daxingxing2"},
		{src:"images/cv/s55daxingxing3.png", id:"s55daxingxing3"},
		{src:"images/cv/s55daxingxing4.png", id:"s55daxingxing4"},
		{src:"images/cv/s55daxingxing5.png", id:"s55daxingxing5"},
		{src:"images/cv/s55manjian.png", id:"s55manjian"},
		{src:"images/cv/s55manshenti.png", id:"s55manshenti"},
		{src:"images/cv/s55manshou.png", id:"s55manshou"},
		{src:"images/cv/s55mantou.png", id:"s55mantou"},
		{src:"images/cv/s55outuwu1.png", id:"s55outuwu1"},
		{src:"images/cv/s55outuwu2.png", id:"s55outuwu2"},
		{src:"images/cv/s55outuwu3.png", id:"s55outuwu3"},
		{src:"images/cv/s55outuwu.png", id:"s55outuwu"},
		{src:"images/cv/s55unclebody.png", id:"s55unclebody"},
		{src:"images/cv/s55uncleeye.png", id:"s55uncleeye"},
		{src:"images/cv/s55uncletou.png", id:"s55uncletou"},
		{src:"images/cv/s55uncleyoushou.png", id:"s55uncleyoushou"},
		{src:"images/cv/s55unclezuoshou.png", id:"s55unclezuoshou"},
		{src:"images/cv/s55xingxing1.png", id:"s55xingxing1"},
		{src:"images/cv/s55xingxing2.png", id:"s55xingxing2"},
		{src:"images/cv/s55xingxing3.png", id:"s55xingxing3"},
		{src:"images/cv/s55xingxing4.png", id:"s55xingxing4"},
		{src:"images/cv/s55yuanquan1.png", id:"s55yuanquan1"},
		{src:"images/cv/s55yuanquan2.png", id:"s55yuanquan2"},
		{src:"images/cv/s55yuanquan3.png", id:"s55yuanquan3"},
		{src:"images/cv/s55yuanquan4.png", id:"s55yuanquan4"},
		{src:"images/cv/s55yuanquan5.png", id:"s55yuanquan5"},
		{src:"images/cv/s55zi.png", id:"s55zi"}
	],
	[
		{src:"images/cv/cm_line.png", id:"cm_line"},
		{src:"images/cv/s615.png", id:"s615"},
		{src:"images/cv/s616.png", id:"s616"},
		{src:"images/cv/s617.png", id:"s617"},
		{src:"images/cv/s61bg.png", id:"s61bg"},
		{src:"images/cv/s61deng.png", id:"s61deng"},
		{src:"images/cv/s61xiezi1.png", id:"s61xiezi1"},
		{src:"images/cv/s61xiezi2.png", id:"s61xiezi2"},
		{src:"images/cv/s61xiezi3.png", id:"s61xiezi3"},
		{src:"images/cv/s61zhujiao.png", id:"s61zhujiao"},
		{src:"images/cv/s62bg.png", id:"s62bg"},
		{src:"images/cv/s62manbody.png", id:"s62manbody"},
		{src:"images/cv/s62maneye.png", id:"s62maneye"},
		{src:"images/cv/s62manwenjianjia.png", id:"s62manwenjianjia"},
		{src:"images/cv/s62manyoushou.png", id:"s62manyoushou"},
		{src:"images/cv/s62manzuoshou.png", id:"s62manzuoshou"},
		{src:"images/cv/s63bgdown.png", id:"s63bgdown"},
		{src:"images/cv/s63bgup.png", id:"s63bgup"},
		{src:"images/cv/s63deng.png", id:"s63deng"},
		{src:"images/cv/s63ding.png", id:"s63ding"},
		{src:"images/cv/s63kuang.png", id:"s63kuang"},
		{src:"images/cv/s63maneye.png", id:"s63maneye"},
		{src:"images/cv/s63manlian.png", id:"s63manlian"},
		{src:"images/cv/s63mantoufa.png", id:"s63mantoufa"},
		{src:"images/cv/s63manyanzhu.png", id:"s63manyanzhu"},
		{src:"images/cv/s64bg.jpg", id:"s64bg"},
		{src:"images/cv/s64manshenti.png", id:"s64manshenti"},
		{src:"images/cv/s64manshou.png", id:"s64manshou"},
		{src:"images/cv/s64mantou.png", id:"s64mantou"},
		{src:"images/cv/s64manzui.png", id:"s64manzui"},
		{src:"images/cv/s64wenjianjia.png", id:"s64wenjianjia"},
		{src:"images/cv/s64you1.png", id:"s64you1"},
		{src:"images/cv/s64you2.png", id:"s64you2"},
		{src:"images/cv/s64you3.png", id:"s64you3"},
		{src:"images/cv/s64you.png", id:"s64you"},
		{src:"images/cv/s64zuo1.png", id:"s64zuo1"},
		{src:"images/cv/s64zuo2.png", id:"s64zuo2"},
		{src:"images/cv/s64zuo3.png", id:"s64zuo3"},
		{src:"images/cv/s64zuo.png", id:"s64zuo"},
		{src:"images/cv/s65man.png", id:"s65man"},
		{src:"images/cv/s65bgup.png", id:"s65bgup"},
		{src:"images/cv/s65bg.png", id:"s65bg"},
		{src:"images/cv/s65yezi1.png", id:"s65yezi1"},
		{src:"images/cv/s65yezi2.png", id:"s65yezi2"},
		{src:"images/cv/s65yezi3.png", id:"s65yezi3"},
		{src:"images/cv/s65yezi4.png", id:"s65yezi4"},
		{src:"images/cv/s65yezi5.png", id:"s65yezi5"},
		{src:"images/cv/s65yezi6.png", id:"s65yezi6"},
		{src:"images/cv/s65yezi7.png", id:"s65yezi7"},
		{src:"images/cv/s65yezi8.png", id:"s65yezi8"},
		{src:"images/cv/s65zi.png", id:"s65zi"}
	],
	[
		{src:"images/cv/s7bg.png", id:"s7bg"},
		{src:"images/cv/s71di.png", id:"s71di"},
		{src:"images/cv/s71di2.png", id:"s71di2"},
		{src:"images/cv/s71shangbanshen.png", id:"s71shangbanshen"},
		{src:"images/cv/s71shenti.png", id:"s71shenti"},
		{src:"images/cv/s71shenzi.png", id:"s71shenzi"},
		{src:"images/cv/s71shou.png", id:"s71shou"},
		{src:"images/cv/s71shouyintai.png", id:"s71shouyintai"},
		{src:"images/cv/s71tou.png", id:"s71tou"},
		{src:"images/cv/s71tuoba.png", id:"s71tuoba"},
		{src:"images/cv/s71xiabanshen.png", id:"s71xiabanshen"},
		{src:"images/cv/s71xiaohai.png", id:"s71xiaohai"},
		{src:"images/cv/s71xiaohaiyoushou.png", id:"s71xiaohaiyoushou"},
		{src:"images/cv/s71xiaohaizuoshou.png", id:"s71xiaohaizuoshou"},
		{src:"images/cv/s71youshou.png", id:"s71youshou"},
		{src:"images/cv/s71zuoshou.png", id:"s71zuoshou"},
		{src:"images/cv/s72baixian.png", id:"s72baixian"},
		{src:"images/cv/s72di.png", id:"s72di"},
		{src:"images/cv/s72di2.png", id:"s72di2"},
		{src:"images/cv/s72ding.png", id:"s72ding"},
		{src:"images/cv/s72guang1.png", id:"s72guang1"},
		{src:"images/cv/s72guang2.png", id:"s72guang2"},
		{src:"images/cv/s72guang3.png", id:"s72guang3"},
		{src:"images/cv/s72kuang.png", id:"s72kuang"},
		{src:"images/cv/s72kuang2.png", id:"s72kuang2"},
		{src:"images/cv/s72lian.png", id:"s72lian"},
		{src:"images/cv/s72shenti2.png", id:"s72shenti2"},
		{src:"images/cv/s72shenzi.png", id:"s72shenzi"},
		{src:"images/cv/s72shou.png", id:"s72shou"},
		{src:"images/cv/s72shouhou.png", id:"s72shouhou"},
		{src:"images/cv/s72shouqian.png", id:"s72shouqian"},
		{src:"images/cv/s72xian.png", id:"s72xian"},
		{src:"images/cv/s72yanjing.png", id:"s72yanjing"},
		{src:"images/cv/s72youshou.png", id:"s72youshou"},
		{src:"images/cv/s72zuoshou.png", id:"s72zuoshou"},
		{src:"images/cv/s72zuoshou2.png", id:"s72zuoshou2"},
		{src:"images/cv/s73bg2.png", id:"s73bg2"},
		{src:"images/cv/s73bo.png", id:"s73bo"},
		{src:"images/cv/s73dabi.png", id:"s73dabi"},
		{src:"images/cv/s73di.png", id:"s73di"},
		{src:"images/cv/s73hei.png", id:"s73hei"},
		{src:"images/cv/s73long.png", id:"s73long"},
		{src:"images/cv/s73shenti.png", id:"s73shenti"},
		{src:"images/cv/s73shou1.png", id:"s73shou1"},
		{src:"images/cv/s73shou2.png", id:"s73shou2"},
		{src:"images/cv/s73shou3.png", id:"s73shou3"},
		{src:"images/cv/s73shou4.png", id:"s73shou4"},
		{src:"images/cv/s73shou5.png", id:"s73shou5"},
		{src:"images/cv/s73tui.png", id:"s73tui"},
		{src:"images/cv/s73tuoba.png", id:"s73tuoba"},
		{src:"images/cv/s73xiaobi.png", id:"s73xiaobi"},
		{src:"images/cv/s73xingxing1.png", id:"s73xingxing1"},
		{src:"images/cv/s73xingxing2.png", id:"s73xingxing2"},
		{src:"images/cv/s73xingxing3.png", id:"s73xingxing3"},
		{src:"images/cv/s74beihouren.png", id:"s74beihouren"},
		{src:"images/cv/s74bg.png", id:"s74bg"},
		{src:"images/cv/s74jugong1.png", id:"s74jugong1"},
		{src:"images/cv/s74jugong2.png", id:"s74jugong2"},
		{src:"images/cv/s74jugong3.png", id:"s74jugong3"},
		{src:"images/cv/s74zi.png", id:"s74zi"}
	],
	[
		{src:"images/cv/cm_line.png", id:"cm_line"},
		{src:"images/cv/s8110s.png", id:"s8110s"},
		{src:"images/cv/s8111s.png", id:"s8111s"},
		{src:"images/cv/s8112s.png", id:"s8112s"},
		{src:"images/cv/s8113s.png", id:"s8113s"},
		{src:"images/cv/s8114s.png", id:"s8114s"},
		{src:"images/cv/s8115s.png", id:"s8115s"},
		{src:"images/cv/s8116s.png", id:"s8116s"},
		{src:"images/cv/s813s.png", id:"s813s"},
		{src:"images/cv/s814s.png", id:"s814s"},
		{src:"images/cv/s815s.png", id:"s815s"},
		{src:"images/cv/s816s.png", id:"s816s"},
		{src:"images/cv/s817s.png", id:"s817s"},
		{src:"images/cv/s818s.png", id:"s818s"},
		{src:"images/cv/s819s.png", id:"s819s"},
		{src:"images/cv/s821s.png", id:"s821s"},
		{src:"images/cv/s822s.png", id:"s822s"},
		{src:"images/cv/s823s.png", id:"s823s"},
		{src:"images/cv/s824s.png", id:"s824s"},
		{src:"images/cv/s825s.png", id:"s825s"},
		{src:"images/cv/s827s.png", id:"s827s"},
		{src:"images/cv/s8310s.png", id:"s8310s"},
		{src:"images/cv/s8311s.png", id:"s8311s"},
		{src:"images/cv/s8314s.png", id:"s8314s"},
		{src:"images/cv/s8315s.png", id:"s8315s"},
		{src:"images/cv/s8315s_1.png", id:"s8315s_1"},
		{src:"images/cv/s8316s.png", id:"s8316s"},
		{src:"images/cv/s8316s_1.png", id:"s8316s_1"},
		{src:"images/cv/s8317s.png", id:"s8317s"},
		{src:"images/cv/s831s.png", id:"s831s"},
		{src:"images/cv/s832s.png", id:"s832s"},
		{src:"images/cv/s833s.png", id:"s833s"},
		{src:"images/cv/s834s.png", id:"s834s"},
		{src:"images/cv/s835s.png", id:"s835s"},
		{src:"images/cv/s836s.png", id:"s836s"},
		{src:"images/cv/s8410s.png", id:"s8410s"},
		{src:"images/cv/s8411s.png", id:"s8411s"},
		{src:"images/cv/s8412s.png", id:"s8412s"},
		{src:"images/cv/s8413s.png", id:"s8413s"},
		{src:"images/cv/s8414s.png", id:"s8414s"},
		{src:"images/cv/s8415s.png", id:"s8415s"},
		{src:"images/cv/s841s.png", id:"s841s"},
		{src:"images/cv/s842s.png", id:"s842s"},
		{src:"images/cv/s843s.png", id:"s843s"},
		{src:"images/cv/s844s.png", id:"s844s"},
		{src:"images/cv/s845s.png", id:"s845s"},
		{src:"images/cv/s846s.png", id:"s846s"},
		{src:"images/cv/s847s.png", id:"s847s"},
		{src:"images/cv/s848s.png", id:"s848s"},
		{src:"images/cv/s849s.png", id:"s849s"},
		{src:"images/cv/s8510s.png", id:"s8510s"},
		{src:"images/cv/s8511s.png", id:"s8511s"},
		{src:"images/cv/s8512s.png", id:"s8512s"},
		{src:"images/cv/s8513s.png", id:"s8513s"},
		{src:"images/cv/s8514s.png", id:"s8514s"},
		{src:"images/cv/s8515s.png", id:"s8515s"},
		{src:"images/cv/s8516s.png", id:"s8516s"},
		{src:"images/cv/s8517s.png", id:"s8517s"},
		{src:"images/cv/s8518s.png", id:"s8518s"},
		{src:"images/cv/s8519s.png", id:"s8519s"},
		{src:"images/cv/s851s.png", id:"s851s"},
		{src:"images/cv/s8520s.png", id:"s8520s"},
		{src:"images/cv/s852s.png", id:"s852s"},
		{src:"images/cv/s853s.png", id:"s853s"},
		{src:"images/cv/s854s.png", id:"s854s"},
		{src:"images/cv/s855s.png", id:"s855s"},
		{src:"images/cv/s856s.png", id:"s856s"},
		{src:"images/cv/s857s.png", id:"s857s"},
		{src:"images/cv/s858s.png", id:"s858s"},
		{src:"images/cv/s859s.png", id:"s859s"}
	],
	[
		{src:"images/cv/s9129.png", id:"s9129"},
		{src:"images/cv/s9130.png", id:"s9130"},
		{src:"images/cv/s9131.png", id:"s9131"},
		{src:"images/cv/s9132.png", id:"s9132"},
		{src:"images/cv/s9133.png", id:"s9133"},
		{src:"images/cv/s9134.png", id:"s9134"},
		{src:"images/cv/s9135.png", id:"s9135"},
		{src:"images/cv/s9136.png", id:"s9136"},
		{src:"images/cv/s9137.png", id:"s9137"},
		{src:"images/cv/s9138.png", id:"s9138"},
		{src:"images/cv/s9140.png", id:"s9140"},
		{src:"images/cv/s9201.png", id:"s9201"},
		{src:"images/cv/s9202.png", id:"s9202"},
		{src:"images/cv/s9203.png", id:"s9203"},
		{src:"images/cv/s9204.png", id:"s9204"},
		{src:"images/cv/s9205.png", id:"s9205"},
		{src:"images/cv/s9206.png", id:"s9206"},
		{src:"images/cv/s9301.png", id:"s9301"},
		{src:"images/cv/s9302.png", id:"s9302"},
		{src:"images/cv/s9303.png", id:"s9303"},
		{src:"images/cv/s9304.png", id:"s9304"},
		{src:"images/cv/s9305.png", id:"s9305"},
		{src:"images/cv/s9306.png", id:"s9306"},
		{src:"images/cv/s9307.png", id:"s9307"},
		{src:"images/cv/s9308.png", id:"s9308"},
		{src:"images/cv/s9309.png", id:"s9309"},
		{src:"images/cv/s9310.png", id:"s9310"},
		{src:"images/cv/s9311.png", id:"s9311"},
		{src:"images/cv/s9313.png", id:"s9313"},
		{src:"images/cv/s9314.png", id:"s9314"},
		{src:"images/cv/s9315.png", id:"s9315"},
		{src:"images/cv/s9401.png", id:"s9401"},
		{src:"images/cv/s9402.png", id:"s9402"},
		{src:"images/cv/s9403.png", id:"s9403"},
		{src:"images/cv/s9404.png", id:"s9404"},
		{src:"images/cv/s9405.png", id:"s9405"},
		{src:"images/cv/s9406.png", id:"s9406"},
		{src:"images/cv/s9407.png", id:"s9407"},
		{src:"images/cv/s9408.png", id:"s9408"}
	],
	[
		{src:"images/cv/cm_line.png", id:"cm_line"},
		{src:"images/cv/s10110s.png", id:"s10110s"},
		{src:"images/cv/s10110s_1.png", id:"s10110s_1"},
		{src:"images/cv/s1011s.png", id:"s1011s"},
		{src:"images/cv/s1012s.png", id:"s1012s"},
		{src:"images/cv/s1013s.png", id:"s1013s"},
		{src:"images/cv/s1014s.png", id:"s1014s"},
		{src:"images/cv/s1015s.png", id:"s1015s"},
		{src:"images/cv/s1016s.png", id:"s1016s"},
		{src:"images/cv/s1017s.png", id:"s1017s"},
		{src:"images/cv/s1018s.png", id:"s1018s"},
		{src:"images/cv/s1019s.png", id:"s1019s"},
		{src:"images/cv/s1021s.png", id:"s1021s"},
		{src:"images/cv/s1022s.png", id:"s1022s"},
		{src:"images/cv/s1023s.png", id:"s1023s"},
		{src:"images/cv/s1024s.png", id:"s1024s"},
		{src:"images/cv/s10310s.png", id:"s10310s"},
		{src:"images/cv/s10311s.png", id:"s10311s"},
		{src:"images/cv/s10314s.png", id:"s10314s"},
		{src:"images/cv/s10315s.png", id:"s10315s"},
		{src:"images/cv/s1031s.png", id:"s1031s"},
		{src:"images/cv/s1033s.png", id:"s1033s"},
		{src:"images/cv/s1034s.png", id:"s1034s"},
		{src:"images/cv/s1035s.png", id:"s1035s"},
		{src:"images/cv/s1036s.png", id:"s1036s"},
		{src:"images/cv/s1037s.png", id:"s1037s"},
		{src:"images/cv/s1039s.png", id:"s1039s"},
		{src:"images/cv/s10410s.png", id:"s10410s"},
		{src:"images/cv/s10411s.png", id:"s10411s"},
		{src:"images/cv/s10412s.png", id:"s10412s"},
		{src:"images/cv/s10413s.png", id:"s10413s"},
		{src:"images/cv/s10415s.png", id:"s10415s"},
		{src:"images/cv/s1041s.png", id:"s1041s"},
		{src:"images/cv/s1042s.png", id:"s1042s"},
		{src:"images/cv/s1044s.png", id:"s1044s"},
		{src:"images/cv/s1046s.png", id:"s1046s"},
		{src:"images/cv/s1047s.png", id:"s1047s"},
		{src:"images/cv/s1048s.png", id:"s1048s"},
		{src:"images/cv/s1049s.png", id:"s1049s"},
		{src:"images/cv/s10517s.png", id:"s10517s"},
		{src:"images/cv/s10518s.png", id:"s10518s"},
		{src:"images/cv/s10520s.png", id:"s10520s"},
		{src:"images/cv/s10521s.png", id:"s10521s"},
		{src:"images/cv/s10522s.png", id:"s10522s"},
		{src:"images/cv/s10524s.png", id:"s10524s"},
		{src:"images/cv/s10525s.png", id:"s10525s"},
		{src:"images/cv/s10526s.png", id:"s10526s"},
		{src:"images/cv/s10527s.png", id:"s10527s"},
		{src:"images/cv/s10528s.png", id:"s10528s"},
		{src:"images/cv/s10529s.png", id:"s10529s"},
		{src:"images/cv/s1052s.png", id:"s1052s"},
		{src:"images/cv/s10531s.png", id:"s10531s"},
		{src:"images/cv/s10531s_1.png", id:"s10531s_1"},
		{src:"images/cv/s10532s.png", id:"s10532s"},
		{src:"images/cv/s10533s.png", id:"s10533s"},
		{src:"images/cv/s10534s.png", id:"s10534s"},
		{src:"images/cv/s10535s.png", id:"s10535s"},
		{src:"images/cv/s10536s.png", id:"s10536s"},
		{src:"images/cv/s1053s.png", id:"s1053s"},
		{src:"images/cv/s1054s.png", id:"s1054s"},
		{src:"images/cv/s1056s.png", id:"s1056s"}
	],
	[
		{src:"images/cv/s11101.png", id:"s11101"},
		{src:"images/cv/s11104.png", id:"s11104"},
		{src:"images/cv/s11107.png", id:"s11107"},
		{src:"images/cv/s11111.png", id:"s11111"},
		{src:"images/cv/s11116.png", id:"s11116"},
		{src:"images/cv/s11118.png", id:"s11118"},
		{src:"images/cv/s11119.png", id:"s11119"},
		{src:"images/cv/s11130.png", id:"s11130"},
		{src:"images/cv/s11133.png", id:"s11133"},
		{src:"images/cv/s11134.png", id:"s11134"},
		{src:"images/cv/s11140.png", id:"s11140"},
		{src:"images/cv/s11141.png", id:"s11141"},
		{src:"images/cv/s11143.png", id:"s11143"},
		{src:"images/cv/s11146.png", id:"s11146"},
		{src:"images/cv/s11151.png", id:"s11151"},
		{src:"images/cv/s11153.png", id:"s11153"},
		{src:"images/cv/s11155.png", id:"s11155"},
		{src:"images/cv/s11201.png", id:"s11201"},
		{src:"images/cv/s11202.png", id:"s11202"},
		{src:"images/cv/s11203.png", id:"s11203"},
		{src:"images/cv/s11204.png", id:"s11204"},
		{src:"images/cv/s11205.png", id:"s11205"},
		{src:"images/cv/s11206.png", id:"s11206"},
		{src:"images/cv/s11207.png", id:"s11207"},
		{src:"images/cv/s11208.png", id:"s11208"},
		{src:"images/cv/s11210.png", id:"s11210"},
		{src:"images/cv/s11211.png", id:"s11211"},
		{src:"images/cv/s11213.png", id:"s11213"},
		{src:"images/cv/s11214.png", id:"s11214"},
		{src:"images/cv/s11215.png", id:"s11215"},
		{src:"images/cv/s11216.png", id:"s11216"},
		{src:"images/cv/s11217.png", id:"s11217"},
		{src:"images/cv/s11218.png", id:"s11218"},
		{src:"images/cv/s11219.png", id:"s11219"},
		{src:"images/cv/s11301.jpg", id:"s11301"},
		{src:"images/cv/s11302.png", id:"s11302"},
		{src:"images/cv/s11303.png", id:"s11303"},
		{src:"images/cv/s11304.png", id:"s11304"},
		{src:"images/cv/s11305.png", id:"s11305"},
		{src:"images/cv/s11306.png", id:"s11306"},
		{src:"images/cv/s11307.png", id:"s11307"},
		{src:"images/cv/s11308.png", id:"s11308"},
		{src:"images/cv/s11309.png", id:"s11309"},
		{src:"images/cv/s11310.png", id:"s11310"},
		{src:"images/cv/s11311.png", id:"s11311"},
		{src:"images/cv/s11312.png", id:"s11312"},
		{src:"images/cv/s11313.png", id:"s11313"},
		{src:"images/cv/s11402.png", id:"s11402"},
		{src:"images/cv/s11403.png", id:"s11403"},
		{src:"images/cv/s11404.png", id:"s11404"},
		{src:"images/cv/s11405.png", id:"s11405"},
		{src:"images/cv/s11406.png", id:"s11406"},
		{src:"images/cv/s11407.png", id:"s11407"},
		{src:"images/cv/s11408.png", id:"s11408"},
		{src:"images/cv/s11409.png", id:"s11409"},
		{src:"images/cv/s11410.png", id:"s11410"},
		{src:"images/cv/s11411.png", id:"s11411"},
		{src:"images/cv/s11412.png", id:"s11412"},
		{src:"images/cv/s11413.png", id:"s11413"}
	],
	[
		{src:"images/cv/cm_line.png", id:"cm_line"},
		{src:"images/cv/s1211s.png", id:"s1211s"},
		{src:"images/cv/s1212s.png", id:"s1212s"},
		{src:"images/cv/s1213s.png", id:"s1213s"},
		{src:"images/cv/s1214s.png", id:"s1214s"},
		{src:"images/cv/s1215s.png", id:"s1215s"},
		{src:"images/cv/s12210s.png", id:"s12210s"},
		{src:"images/cv/s12211s.png", id:"s12211s"},
		{src:"images/cv/s12212s.png", id:"s12212s"},
		{src:"images/cv/s12213s.png", id:"s12213s"},
		{src:"images/cv/s12214s.png", id:"s12214s"},
		{src:"images/cv/s12215s.png", id:"s12215s"},
		{src:"images/cv/s12216s.png", id:"s12216s"},
		{src:"images/cv/s12216s_1.png", id:"s12216s_1"},
		{src:"images/cv/s12217s.png", id:"s12217s"},
		{src:"images/cv/s12218s.png", id:"s12218s"},
		{src:"images/cv/s12219s.png", id:"s12219s"},
		{src:"images/cv/s1221s.png", id:"s1221s"},
		{src:"images/cv/s12220s.png", id:"s12220s"},
		{src:"images/cv/s12221s.png", id:"s12221s"},
		{src:"images/cv/s12222s.png", id:"s12222s"},
		{src:"images/cv/s12223s.png", id:"s12223s"},
		{src:"images/cv/s12224s.png", id:"s12224s"},
		{src:"images/cv/s12225s.png", id:"s12225s"},
		{src:"images/cv/s1222s.png", id:"s1222s"},
		{src:"images/cv/s1223s.png", id:"s1223s"},
		{src:"images/cv/s1224s.png", id:"s1224s"},
		{src:"images/cv/s1225s.png", id:"s1225s"},
		{src:"images/cv/s1226s.png", id:"s1226s"},
		{src:"images/cv/s1227s.png", id:"s1227s"},
		{src:"images/cv/s1228s.png", id:"s1228s"},
		{src:"images/cv/s1229s.png", id:"s1229s"},
		{src:"images/cv/s12310s.png", id:"s12310s"},
		{src:"images/cv/s12311s.png", id:"s12311s"},
		{src:"images/cv/s12312s.png", id:"s12312s"},
		{src:"images/cv/s12313s.png", id:"s12313s"},
		{src:"images/cv/s12314s.png", id:"s12314s"},
		{src:"images/cv/s12315s.png", id:"s12315s"},
		{src:"images/cv/s12316s.png", id:"s12316s"},
		{src:"images/cv/s12317s.png", id:"s12317s"},
		{src:"images/cv/s12318s.png", id:"s12318s"},
		{src:"images/cv/s1231s.png", id:"s1231s"},
		{src:"images/cv/s1232s.png", id:"s1232s"},
		{src:"images/cv/s1233s.png", id:"s1233s"},
		{src:"images/cv/s1234s.png", id:"s1234s"},
		{src:"images/cv/s1235s.png", id:"s1235s"},
		{src:"images/cv/s1236s.png", id:"s1236s"},
		{src:"images/cv/s1237s.png", id:"s1237s"},
		{src:"images/cv/s1238s.png", id:"s1238s"},
		{src:"images/cv/s1239s.png", id:"s1239s"},
		{src:"images/cv/s12410s.png", id:"s12410s"},
		{src:"images/cv/s12411s.png", id:"s12411s"},
		{src:"images/cv/s12412s.png", id:"s12412s"},
		{src:"images/cv/s12413s.png", id:"s12413s"},
		{src:"images/cv/s12414s.png", id:"s12414s"},
		{src:"images/cv/s12415s.png", id:"s12415s"},
		{src:"images/cv/s12416s.png", id:"s12416s"},
		{src:"images/cv/s1241s.png", id:"s1241s"},
		{src:"images/cv/s1243s.png", id:"s1243s"},
		{src:"images/cv/s1244s.png", id:"s1244s"},
		{src:"images/cv/s1245s.png", id:"s1245s"},
		{src:"images/cv/s1246s.png", id:"s1246s"},
		{src:"images/cv/s1247s.jpg", id:"s1247s"},
		{src:"images/cv/s1248s.png", id:"s1248s"},
		{src:"images/cv/s1249s.png", id:"s1249s"},
		{src:"images/cv/s1251s.png", id:"s1251s"},
		{src:"images/cv/s1252s.png", id:"s1252s"},
		{src:"images/cv/s1253s.png", id:"s1253s"},
		{src:"images/cv/s1254s.png", id:"s1254s"},
		{src:"images/cv/s1255s.png", id:"s1255s"},
		{src:"images/cv/s1256s.png", id:"s1256s"},
		{src:"images/cv/s1257s.png", id:"s1257s"},
		{src:"images/cv/s1258s.png", id:"s1258s"}
	],
	[
		{src:"images/cv/s13201.png", id:"s13201"},
		{src:"images/cv/s13202.png", id:"s13202"},
		{src:"images/cv/s13203.png", id:"s13203"},
		{src:"images/cv/s13204.png", id:"s13204"},
		{src:"images/cv/s13205.png", id:"s13205"},
		{src:"images/cv/s13206.png", id:"s13206"},
		{src:"images/cv/s13207.png", id:"s13207"},
		{src:"images/cv/s13208.png", id:"s13208"},
		{src:"images/cv/s13209.png", id:"s13209"},
		{src:"images/cv/s13210.png", id:"s13210"},
		{src:"images/cv/s13211.png", id:"s13211"},
		{src:"images/cv/s13212.png", id:"s13212"},
		{src:"images/cv/s13213.png", id:"s13213"},
		{src:"images/cv/s13215.png", id:"s13215"},
		{src:"images/cv/s13301.png", id:"s13301"},
		{src:"images/cv/s13302.png", id:"s13302"},
		{src:"images/cv/s13303.png", id:"s13303"},
		{src:"images/cv/s13304.png", id:"s13304"},
		{src:"images/cv/s13305.png", id:"s13305"},
		{src:"images/cv/s13306.png", id:"s13306"},
		{src:"images/cv/s13307.png", id:"s13307"},
		{src:"images/cv/s13308.png", id:"s13308"},
		{src:"images/cv/s13309.png", id:"s13309"},
		{src:"images/cv/s13310.png", id:"s13310"},
		{src:"images/cv/s13311.png", id:"s13311"},
		{src:"images/cv/s13312.png", id:"s13312"},
		{src:"images/cv/s13313.png", id:"s13313"},
		{src:"images/cv/s13314.png", id:"s13314"},
		{src:"images/cv/s13316.png", id:"s13316"},
		{src:"images/cv/s13318.png", id:"s13318"},
		{src:"images/cv/s13319.png", id:"s13319"},
		{src:"images/cv/s13320.png", id:"s13320"},
		{src:"images/cv/s13321.png", id:"s13321"},
		{src:"images/cv/s13322.png", id:"s13322"},
		{src:"images/cv/s13323.png", id:"s13323"},
		{src:"images/cv/s13324.png", id:"s13324"},
		{src:"images/cv/s13325.png", id:"s13325"},
		{src:"images/cv/s13327.png", id:"s13327"},
		{src:"images/cv/s13328.png", id:"s13328"},
		{src:"images/cv/s13329.png", id:"s13329"},
		{src:"images/cv/s13330.png", id:"s13330"},
		{src:"images/cv/s13331.png", id:"s13331"},
		{src:"images/cv/s13332.png", id:"s13332"},
		{src:"images/cv/s13333.png", id:"s13333"},
		{src:"images/cv/s13334.png", id:"s13334"},
		{src:"images/cv/s13401.png", id:"s13401"},
		{src:"images/cv/s13402.png", id:"s13402"},
		{src:"images/cv/s13403.png", id:"s13403"},
		{src:"images/cv/s13404.png", id:"s13404"},
		{src:"images/cv/s13405.png", id:"s13405"},
		{src:"images/cv/s13406.png", id:"s13406"},
		{src:"images/cv/s13407.png", id:"s13407"},
		{src:"images/cv/s13408.png", id:"s13408"},
		{src:"images/cv/s13409.png", id:"s13409"},
		{src:"images/cv/s13410.png", id:"s13410"},
		{src:"images/cv/s13411.png", id:"s13411"},
		{src:"images/cv/s13412.png", id:"s13412"},
		{src:"images/cv/s13413.png", id:"s13413"},
		{src:"images/cv/s13414.png", id:"s13414"},
		{src:"images/cv/s13415.png", id:"s13415"},
		{src:"images/cv/s13501.png", id:"s13501"},
		{src:"images/cv/s13502.png", id:"s13502"},
		{src:"images/cv/s13503.png", id:"s13503"},
		{src:"images/cv/s13504.png", id:"s13504"},
		{src:"images/cv/s13506.png", id:"s13506"},
		{src:"images/cv/s13507.png", id:"s13507"},
		{src:"images/cv/s13508.png", id:"s13508"},
		{src:"images/cv/s13509.png", id:"s13509"},
		{src:"images/cv/s13510.png", id:"s13510"},
		{src:"images/cv/s13511.png", id:"s13511"},
		{src:"images/cv/s13512.png", id:"s13512"},
		{src:"images/cv/s13513.png", id:"s13513"},
		{src:"images/cv/s13514.png", id:"s13514"},
		{src:"images/cv/s13515.png", id:"s13515"},
		{src:"images/cv/s13516.png", id:"s13516"},
		{src:"images/cv/s13517.png", id:"s13517"},
		{src:"images/cv/s13518.png", id:"s13518"},
		{src:"images/cv/s13519.png", id:"s13519"},
		{src:"images/cv/s13520.png", id:"s13520"},
		{src:"images/cv/s13521.png", id:"s13521"},
		{src:"images/cv/s13522.png", id:"s13522"},
		{src:"images/cv/s13523.png", id:"s13523"},
		{src:"images/cv/s13524.png", id:"s13524"},
		{src:"images/cv/s13525.png", id:"s13525"},
		{src:"images/cv/s13526.png", id:"s13526"},
		{src:"images/cv/s13527.png", id:"s13527"},
		{src:"images/cv/s13528.png", id:"s13528"}
	],
	[
		{src:"images/cv/s14110s.png", id:"s14110s"},
		{src:"images/cv/s14111s.png", id:"s14111s"},
		{src:"images/cv/s14112s.png", id:"s14112s"},
		{src:"images/cv/s1411s.png", id:"s1411s"},
		{src:"images/cv/s1412s.png", id:"s1412s"},
		{src:"images/cv/s1413s.png", id:"s1413s"},
		{src:"images/cv/s1414s.png", id:"s1414s"},
		{src:"images/cv/s1415s.png", id:"s1415s"},
		{src:"images/cv/s1416s.png", id:"s1416s"},
		{src:"images/cv/s1417s.png", id:"s1417s"},
		{src:"images/cv/s1418s.png", id:"s1418s"},
		{src:"images/cv/s1419s.png", id:"s1419s"},
		{src:"images/cv/s14210s.png", id:"s14210s"},
		{src:"images/cv/s1421s.png", id:"s1421s"},
		{src:"images/cv/s1422s.png", id:"s1422s"},
		{src:"images/cv/s1423s.png", id:"s1423s"},
		{src:"images/cv/s1424s.png", id:"s1424s"},
		{src:"images/cv/s1428s.png", id:"s1428s"},
		{src:"images/cv/s1429s.png", id:"s1429s"},
		{src:"images/cv/s14310s.png", id:"s14310s"},
		{src:"images/cv/s14311s.png", id:"s14311s"},
		{src:"images/cv/s14312s.png", id:"s14312s"},
		{src:"images/cv/s1431s.png", id:"s1431s"},
		{src:"images/cv/s1432s.png", id:"s1432s"},
		{src:"images/cv/s1433s.png", id:"s1433s"},
		{src:"images/cv/s1434s.png", id:"s1434s"},
		{src:"images/cv/s1435s.png", id:"s1435s"},
		{src:"images/cv/s1436s.png", id:"s1436s"},
		{src:"images/cv/s1437s.png", id:"s1437s"},
		{src:"images/cv/s1438s.png", id:"s1438s"},
		{src:"images/cv/s1439s.png", id:"s1439s"},
		{src:"images/cv/s14411s.png", id:"s14411s"},
		{src:"images/cv/s14415s.png", id:"s14415s"},
		{src:"images/cv/s14416s.png", id:"s14416s"},
		{src:"images/cv/s14417s.png", id:"s14417s"},
		{src:"images/cv/s14418s.png", id:"s14418s"},
		{src:"images/cv/s14419s.png", id:"s14419s"},
		{src:"images/cv/s1441s.png", id:"s1441s"},
		{src:"images/cv/s14420s.png", id:"s14420s"},
		{src:"images/cv/s14421s.png", id:"s14421s"},
		{src:"images/cv/s14422s.png", id:"s14422s"},
		{src:"images/cv/s1442s.png", id:"s1442s"},
		{src:"images/cv/s1443s.png", id:"s1443s"},
		{src:"images/cv/s1444s.png", id:"s1444s"},
		{src:"images/cv/s1445s.png", id:"s1445s"},
		{src:"images/cv/s1446s.png", id:"s1446s"},
		{src:"images/cv/s1447s.png", id:"s1447s"},
		{src:"images/cv/s1448s.png", id:"s1448s"}
	],
	[
		{src:"images/cv/s15147.png", id:"s15147"},
		{src:"images/cv/s15148.png", id:"s15148"},
		{src:"images/cv/s15149.png", id:"s15149"},
		{src:"images/cv/s15150.jpg", id:"s15150"},
		{src:"images/cv/s15201.png", id:"s15201"},
		{src:"images/cv/s15202.png", id:"s15202"},
		{src:"images/cv/s15203.png", id:"s15203"},
		{src:"images/cv/s15204.png", id:"s15204"},
		{src:"images/cv/s15205.png", id:"s15205"},
		{src:"images/cv/s15206.png", id:"s15206"},
		{src:"images/cv/s15207.png", id:"s15207"},
		{src:"images/cv/s15208.png", id:"s15208"},
		{src:"images/cv/s15209.png", id:"s15209"},
		{src:"images/cv/s15301.png", id:"s15301"},
		{src:"images/cv/s15302.png", id:"s15302"},
		{src:"images/cv/s15303.png", id:"s15303"},
		{src:"images/cv/s15304.png", id:"s15304"},
		{src:"images/cv/s15305.png", id:"s15305"},
		{src:"images/cv/s15306.png", id:"s15306"},
		{src:"images/cv/s15307.png", id:"s15307"},
		{src:"images/cv/s15308.png", id:"s15308"},
		{src:"images/cv/s15401.png", id:"s15401"},
		{src:"images/cv/s15402.png", id:"s15402"},
		{src:"images/cv/s15403.png", id:"s15403"},
		{src:"images/cv/s15405.png", id:"s15405"},
		{src:"images/cv/s15406.png", id:"s15406"},
		{src:"images/cv/s15407.png", id:"s15407"},
		{src:"images/cv/s15408.png", id:"s15408"},
		{src:"images/cv/s15409.png", id:"s15409"},
		{src:"images/cv/s15410.png", id:"s15410"},
		{src:"images/cv/s15411.png", id:"s15411"},
		{src:"images/cv/s15501.png", id:"s15501"},
		{src:"images/cv/s15502.png", id:"s15502"},
		{src:"images/cv/s15503.png", id:"s15503"},
		{src:"images/cv/s15504.png", id:"s15504"},
		{src:"images/cv/s15505.png", id:"s15505"},
		{src:"images/cv/s15506.png", id:"s15506"},
		{src:"images/cv/s15507.png", id:"s15507"},
		{src:"images/cv/s15508.png", id:"s15508"},
		{src:"images/cv/s15509.png", id:"s15509"},
		{src:"images/cv/s15510.png", id:"s15510"},
		{src:"images/cv/s15511.png", id:"s15511"},
		{src:"images/cv/s15512.png", id:"s15512"},
		{src:"images/cv/s15513.png", id:"s15513"},
		{src:"images/cv/s15514.png", id:"s15514"},
		{src:"images/cv/s15515.png", id:"s15515"},
		{src:"images/cv/s15516.png", id:"s15516"},
		{src:"images/cv/s15517.png", id:"s15517"},
		{src:"images/cv/s15518.png", id:"s15518"},
		{src:"images/cv/s15519.png", id:"s15519"},
		{src:"images/cv/s15521.png", id:"s15521"},
		{src:"images/cv/s15522.png", id:"s15522"},
		{src:"images/cv/s15604.png", id:"s15604"},
		{src:"images/cv/s15605.png", id:"s15605"},
		{src:"images/cv/s15606.png", id:"s15606"},
		{src:"images/cv/s15608.png", id:"s15608"},
		{src:"images/cv/s15609.png", id:"s15609"},
		{src:"images/cv/s15610.png", id:"s15610"},
		{src:"images/cv/s15611.png", id:"s15611"},
		{src:"images/cv/s15612.png", id:"s15612"},
		{src:"images/cv/s15618.png", id:"s15618"},
		{src:"images/cv/s15619.png", id:"s15619"},
		{src:"images/cv/s15620.png", id:"s15620"},
		{src:"images/cv/s15621.png", id:"s15621"},
		{src:"images/cv/s15622.jpg", id:"s15622"}
	],
	[
		{src:"images/cv/s16201.png", id:"s16201"},
		{src:"images/cv/s16202.png", id:"s16202"},
		{src:"images/cv/s16203.png", id:"s16203"},
		{src:"images/cv/s16204.png", id:"s16204"},
		{src:"images/cv/s16205.png", id:"s16205"},
		{src:"images/cv/s16206.png", id:"s16206"},
		{src:"images/cv/s16207.png", id:"s16207"},
		{src:"images/cv/s16208.png", id:"s16208"},
		{src:"images/cv/s16209.png", id:"s16209"},
		{src:"images/cv/s16210.png", id:"s16210"},
		{src:"images/cv/s16211.png", id:"s16211"},
		{src:"images/cv/s16212.png", id:"s16212"},
		{src:"images/cv/s16213.png", id:"s16213"},
		{src:"images/cv/s16301.png", id:"s16301"},
		{src:"images/cv/s16302.png", id:"s16302"},
		{src:"images/cv/s16303.png", id:"s16303"},
		{src:"images/cv/s16304.png", id:"s16304"},
		{src:"images/cv/s16305.png", id:"s16305"},
		{src:"images/cv/s16306.png", id:"s16306"},
		{src:"images/cv/s16307.png", id:"s16307"},
		{src:"images/cv/s16308.png", id:"s16308"},
		{src:"images/cv/s16309.png", id:"s16309"},
		{src:"images/cv/s16310.png", id:"s16310"},
		{src:"images/cv/s16311.png", id:"s16311"},
		{src:"images/cv/s16312.png", id:"s16312"},
		{src:"images/cv/s16401.png", id:"s16401"},
		{src:"images/cv/s16402.png", id:"s16402"},
		{src:"images/cv/s16403.png", id:"s16403"},
		{src:"images/cv/s16404.png", id:"s16404"},
		{src:"images/cv/s16405.png", id:"s16405"},
		{src:"images/cv/s16406.png", id:"s16406"},
		{src:"images/cv/s16407.png", id:"s16407"},
		{src:"images/cv/s16408.png", id:"s16408"},
		{src:"images/cv/s16409.png", id:"s16409"},
		{src:"images/cv/s16410.png", id:"s16410"},
		{src:"images/cv/s16411.png", id:"s16411"},
		{src:"images/cv/s16412.png", id:"s16412"},
		{src:"images/cv/s16413.jpg", id:"s16413"},
		{src:"images/cv/s16414.png", id:"s16414"},
		{src:"images/cv/s16415.png", id:"s16415"},
		{src:"images/cv/s16416.png", id:"s16416"},
		{src:"images/cv/s16501.png", id:"s16501"},
		{src:"images/cv/s16502.png", id:"s16502"},
		{src:"images/cv/s16503.png", id:"s16503"},
		{src:"images/cv/s16504.png", id:"s16504"},
		{src:"images/cv/s16505.png", id:"s16505"},
		{src:"images/cv/s16507.png", id:"s16507"},
		{src:"images/cv/s16508.png", id:"s16508"},
		{src:"images/cv/s16509.jpg", id:"s16509"},
		{src:"images/cv/s16510.png", id:"s16510"}
	],
	[
		{src:"images/cv/cm_line.png", id:"cm_line"},
		{src:"images/cv/s1711s.png", id:"s1711s"},
		{src:"images/cv/s1712s.png", id:"s1712s"},
		{src:"images/cv/s1722s.png", id:"s1722s"},
		{src:"images/cv/s1724s.png", id:"s1724s"},
		{src:"images/cv/s1725s.png", id:"s1725s"},
		{src:"images/cv/s1726s.png", id:"s1726s"},
		{src:"images/cv/s1727s.png", id:"s1727s"},
		{src:"images/cv/s1728s.png", id:"s1728s"},
		{src:"images/cv/s1731s.png", id:"s1731s"},
		{src:"images/cv/s1732s.png", id:"s1732s"},
		{src:"images/cv/s1733s.png", id:"s1733s"},
		{src:"images/cv/s1734s.png", id:"s1734s"},
		{src:"images/cv/s17logo.png", id:"s17logo"},
		{src:"images/cv/s17_dbtext.png", id:"s17_dbtext"}
	],
	[
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
	],
	[
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
	],
	[
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
]