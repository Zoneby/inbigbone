;(function () {
	var PreLoad=function(a,b){var c=b||{};this.source=a,this.count=0,this.total=a.length,this.onload=c.onload,this.prefix=c.prefix||"",this.init()};PreLoad.prototype.init=function(){var a=this;a.source.forEach(function(b){var c=b.replace(/[#\?].*$/,'').substr(b.lastIndexOf(".")+1).toLowerCase(),d=a.prefix+b;switch(c){case"js":a.script.call(a,d);break;case"css":a.stylesheet.call(a,d);break;case"svg":case"jpg":case"gif":case"png":case"jpeg":a.image.call(a,d)}})},PreLoad.prototype.getProgress=function(){return Math.round(this.count/this.total*100)},PreLoad.prototype.image=function(a){var b=document.createElement("img");this.load(b,a),b.src=a},PreLoad.prototype.stylesheet=function(a){var b=document.createElement("link");this.load(b,a),b.rel="stylesheet",b.type="text/css",b.href=a,document.head.appendChild(b)},PreLoad.prototype.script=function(a){var b=document.createElement("script");this.load(b,a),b.type="text/javascript",b.src=a,document.head.appendChild(b)},PreLoad.prototype.load=function(a,b){var c=this;a.onload=a.onerror=a.onabort=function(a){c.onload&&c.onload({count:++c.count,total:c.total,item:b,type:a.type})}};
	var app = app || {};
	var util = util || {};
	var device = {};
	var ua = navigator.userAgent.toLowerCase();
	device.isIOS = ua.match(/iphone os/i) == "iphone os";
	device.isAndroid = ua.match(/android/i) == "android";
	device.isWx = ua.match(/MicroMessenger/i) =="micromessenger";

	app.resPath = "./ossweb-img/";

	app.resources = [
		app.resPath+ 'images/pagestart-bg.jpg',
		app.resPath+ 'images/start-btn.png',
		app.resPath+ 'images/pgstart-closet.png',
		app.resPath+ 'images/pageupload.jpg',
		app.resPath+ 'images/lantern.png',
		app.resPath+ 'images/lantern-light.png',
		app.resPath+ 'images/white-light.png',
		app.resPath+ 'images/curtain-l.png',
		app.resPath+ 'images/curtain-r.png',
		app.resPath+ 'images/upload-btn.png',
		app.resPath+ 'images/btn-more.png',
		app.resPath+ 'images/qr-code.png'
	];

	app.qrcode = new Image();
	app.qrcode.crossOrigin = 'Anonymous';
	app.qrcode.src = app.resPath + "images/qr-code.png";

	app.logo = new Image();
	app.logo.crossOrigin = 'Anonymous';
	app.logo.src = app.resPath + "images/logo.png";

	new PreLoad(app.resources, {
		onload: function(load) {
			var count = load.count,
			total = load.total,
			percent = Math.ceil(100 * count / total);
			$('.percent').html(percent+"%");

			if(percent === 100) {
				$('#loading').remove();
			}
		}
	});
	util.query = function(selector) {
		return document.querySelector(selector);
	}

	// 读取本地图片
	var file = util.query('#file');
	var c = photoCanvas = util.query("#photoCanvas");
	var reader = new FileReader();
	app.loadstartHandler = function(e) {
		// console.log(e);
		$('.addbox').hide();
		$('.loadingwrap').show();
		$('.upload-tips').hide();
		console.log("loadstartHandler");
	};
	app.loadHandler = function(e) {
		// console.log(e);
		// alert(e.webkitRelativePath);
		drawBase642Canvas(e.target.result);
		
		$('.loadingwrap').hide();
		$('.picwrap').hide();
		// $('.addbox').show();

		console.log("loadHandler");
	};
	reader.onloadstart = app.loadstartHandler;

	reader.onload = app.loadHandler;

	file.addEventListener("change", function() {
		reader.readAsDataURL(file.files[0]);
	});

	app.stage = new createjs.Stage(photoCanvas);

	function drawBase642Canvas(base64) {
		var img = new Image();
		img.onload = function (){
			app.stage.removeAllChildren();
			app.stage.update();
			var w = img.width;
			var h = img.height;
			// alert('w:'+w+',h:'+h);
			var bitmap = new createjs.Bitmap(img);
			// app.stage.addChild(bitmap);
			// app.stage.update();
			var correctW,correctH,rotation;
			var x = w/h;

			if (device.isIOS && (w/h == 3088/2320 || w/h == 4032/3024)){
				console.log(w/h);
				correctW = h;
				correctH = w;
				rotation = 90;

			}else if(device.isIOS && (w >= h)) {
				correctW = h;
				correctH = w;	
			}else {         
				correctW = w;
				correctH = h;
				rotation = 0;
			}
			// alert(w/h);
			// alert("图片宽：" +w + "图片高："+h);

			var scale;
			if (correctW/correctH>c.width/c.height){
				scale = c.width/correctW;
			}else {
				// scale = c.height/correctH;
				// 
				scale = c.width/correctW;
			}

			console.log(scale);

			bitmap.scaleX = scale;
			bitmap.scaleY = scale;
			bitmap.regX = bitmap.getBounds().width/2;
			bitmap.regY = bitmap.getBounds().height/2;


			console.log(bitmap.getBounds().width);
			console.log(bitmap.getBounds().height);

			bitmap.x = c.width/2;
			bitmap.y = c.height/2;
			bitmap.rotation = rotation;

			app.stage.addChild(bitmap);
			app.stage.update();

			c.hasDraw = !0;
		}
		img.src = base64;
	}
	// 合成处理
	// 
	app.errorHandler = function(ret) {
		var msg = '';
		switch (ret) {
			case -1:
				msg = '服务器繁忙，请稍后再试-1';
				break;
			case 0:
				msg = '成功';
				break;
			case 4096:
				msg = '参数非法';
				break;
			case 12289:
				msg = '应用不存在';
				break;
			case 12801:
				msg = '素材不存在';
				break;
			case 12802:
				msg = '素材ID与应用ID不匹配';
				break;
			case 16385:
				msg = '缺少app_id参数';
				break;
			case 16386:
				msg = '缺少time_stamp参数';
				break;
			case 16387:
				msg = '缺少nonce_str参数';
				break;
			case 16388:
				msg = '请求签名无效';
				break;
			case 16389:
				msg = '缺失API权限';
				break;
			case 16390:
				msg = 'time_stamp参数无效';
				break;
			case 16396:
				msg = '图片格式非法，请重新上传';
				break;
			case 16397:
				msg = '图片体积过大，请重新上传';
				break;
			case 16402:
				msg = '横版照片暂时无法识别，请换竖版重试';
				break;
			case 16421:
				msg = '人脸个数超过限制，请重新上传';
				break;
			default:
				msg = '图片识别失败，请检查图片是否存在轮廓清晰的个体人脸';
				break; 
		}
		return msg;
	}

	//处理频繁鉴定导致请求服务器压力的限制
	app.checkTimesArr = [];
	app.checkTimes = function (){
		// console.log(app.checkTimesArr);

		var len = app.checkTimesArr.length;
		var now = 0;
		if (len && len%4===0){
			now = parseInt(new Date().getTime()/1000);
			if (now-app.checkTimesArr[len-4] < 60){
				return false;
			}
		}
		return true;
	}

	//鉴定按钮融合接口请求
	app.checkHandler = function() {
		var data = "image="+encodeURIComponent(photoCanvas.toDataURL('image/jpeg', .6).split(',')[1]);

		$.ajax({
			method: 'POST',
			// url: 'http://192.168.0.119:18080/appsback/a20180131qqxw',
			url: 'http://bigbone.cn/appsback/a20180131qqxw',
			data: data,
			dataType: 'json',
			error: function(e) {
				console.log("xhr error", e);
				alert('服务器繁忙，请稍后再试-9');
				app.openCurtain()
			},
			success: app.handleRequest
		})
	}
	app.resultStage = new createjs.Stage(document.querySelector('#hiddenCanvas'));

	// 合成回调请求
	app.handleRequest = function(res) {
		var msg = app.errorHandler(Number(res.ret));
		if(res.ret !== 0) {
			alert(msg);
			/*$('.btn-more').show();
			$('.logo').show();*/
			app.openCurtain();
		} else {
			$('.btn-more').show();
			$('.logo').show();
			$('.qrcode').show();
			$(".page-upload").remove();
			$('.page-result').show();
			app.createResultImage('data:image/png;base64,' + res.data.image, res.model);

			var curTime = parseInt(new Date().getTime()/1000);
			app.checkTimesArr.push(curTime);

		}
	};

	app.coverlist = {
		"6055": {coverUrl:app.resPath+'images/bg-r1.jpg', rBgClass: 'bg-r1', textUrl: app.resPath+'images/text1.png', tClass: '.t1'},
		"6056": {coverUrl:app.resPath+'images/bg-r2.jpg', rBgClass: 'bg-r1', textUrl: app.resPath+'images/text2.png', tClass: '.t2'},
		"6057": {coverUrl:app.resPath+'images/bg-r3.jpg', rBgClass: 'bg-r1', textUrl: app.resPath+'images/text3.png', tClass: '.t3'},
		"6058": {coverUrl:app.resPath+'images/bg-r4.jpg', rBgClass: 'bg-r1', textUrl: app.resPath+'images/text4.png', tClass: '.t4'},
		"6059": {coverUrl:app.resPath+'images/bg-r5.jpg', rBgClass: 'bg-r1', textUrl: app.resPath+'images/text5.png', tClass: '.t5'},
		"6060": {coverUrl:app.resPath+'images/bg-r6.jpg', rBgClass: 'bg-r1', textUrl: app.resPath+'images/text6.png', tClass: '.t6'},
		"6068": {coverUrl:app.resPath+'images/bg-r7.jpg', rBgClass: 'bg-r1', textUrl: app.resPath+'images/text7.png', tClass: '.t7'},
		"6069": {coverUrl:app.resPath+'images/bg-r8.jpg', rBgClass: 'bg-r1', textUrl: app.resPath+'images/text8.png', tClass: '.t8'},
		"6070": {coverUrl:app.resPath+'images/bg-r9.jpg', rBgClass: 'bg-r1', textUrl: app.resPath+'images/text9.png', tClass: '.t9'},
		"6071": {coverUrl:app.resPath+'images/bg-r10.jpg', rBgClass: 'bg-r1', textUrl: app.resPath+'images/text10.png', tClass: '.t10'},
		"6072": {coverUrl:app.resPath+'images/bg-r11.jpg', rBgClass: 'bg-r1', textUrl: app.resPath+'images/text11.png', tClass: '.t11'},
		"6073": {coverUrl:app.resPath+'images/bg-r12.jpg', rBgClass: 'bg-r1', textUrl: app.resPath+'images/text12.png', tClass: '.t12'}
	};

	app.createResultImage = function(base64, model) {
		// console.log(base64, model);
		/*var cloud1 = new Image();		
		cloud1.crossOrigin = 'Anonymous';
		cloud1.src = app.coverlist[model.toString()].c1Url;
		

		var cloud2 = new Image();		
		cloud2.crossOrigin = 'Anonymous';
		cloud2.src = app.coverlist[model.toString()].c2Url;*/

		/*var text =  new Image();
		text.crossOrigin = 'Anonymous';
		text.src = app.coverlist[model.toString()].textUrl;*/


		function build() {
			var merge = new Image();

			merge.onload = function() {
				merge.crossOrigin = "Anonymous";
				app.changeBodyBg(app.coverlist[model.toString()].bgClass, app.coverlist[model.toString()].rBgClass);
				// 天天P图拉取回来的人物
				var bitmap = new createjs.Bitmap(merge);
				bitmap.x = 0;
				bitmap.y = 0;
				var scale = app.resultStage.canvas.width/bitmap.getBounds().width;
				bitmap.scaleX = scale;
				bitmap.scaleY = scale;

				var r_bitmap = new createjs.Bitmap(merge);
				r_bitmap.x = 0;
				r_bitmap.y = 110;                   
				var r_scale = app.resultStage.canvas.width/bitmap.getBounds().width;
				r_bitmap.scaleX = r_scale;
				r_bitmap.scaleY = r_scale;


				// 人物背景
				var cover = new createjs.Bitmap(imageCover);
				cover.x = 0;
				cover.y = 0;

				var r_cover = new createjs.Bitmap(imageCover);
				r_cover.x = 0;
				r_cover.y = 0;
				r_cover.scaleY = 1448/1220;


				var logo = new createjs.Bitmap(app.logo);
				logo.x = 80;
				logo.y = 1084;

				// 二维码
				var qrcode = new createjs.Bitmap(app.qrcode);
				// qrcode.regX = qrcode.getBounds().width/2;
				qrcode.x = 545;
				qrcode.y = 1010;

				var tClassName = app.coverlist[model.toString()].tClass,
					text = $(tClassName)[0];

				var t = new createjs.Bitmap(text);
				t.x = 45;
				t.y = 50;

				var r_t = new createjs.Bitmap(text);
				r_t.x = 45;
				r_t.y =  155;



				app.resultStage.addChild(r_cover, r_bitmap, r_t);

				app.resultStage.update();
				util.query("#resultImage").src = app.resultStage.toDataURL('#ffffff', 'image/jpeg');
				
				document.querySelector("#hiddenCanvas").height = 1220;
				app.resultStage.removeAllChildren();
				app.resultStage.addChild(cover, qrcode, logo, bitmap, t);
				app.resultStage.update();
				// util.query('#saveImage').src = app.resultStage.toDataURL('#ffffff','image/jpeg');

				util.query("#saveImage").src = app.resultStage.toDataURL("#ffffff", 'image/jpeg');
				

				app.openCurtain();
			}
			merge.crossOrigin = "Anonymous";
			
			merge.src = base64;
		}
		app.imgLoadedNum === 0;

		var imageCover = new Image();
		imageCover.crossOrigin = 'Anonymous';  
		imageCover.onload = build;
		imageCover.src = app.coverlist[model.toString()].coverUrl;
		// imageCover.onload = 

		


		/*cloud1.onload = function() {
					app.imgLoadedNum++;
					console.log(app.imgLoadedNum);
				}*/

		/*cloud2.onload = function() {
			app.imgLoadedNum++;
			console.log(app.imgLoadedNum);
		}*/

		/*if(app.imgLoadedNum === 3) {
			build && build();
			app.imgLoadedNum === 0;
		}*/
	};

	app.changeBodyBg = function(bodyClassName, resultUpClassName, resultDownClassName, upClassName, downClassName) {
		/*console.log(upClassName);
		console.log(downClassName);*/
		document.querySelector('body').className = bodyClassName;

	/*	document.querySelector('.page-result-up').classList.add(resultUpClassName);
		document.querySelector('.page-result-down').classList.add(resultDownClassName);*/
		/*$('.page-result-up').addClass(resultUpClassName);
		$(".page-result-down").addClass(resultDownClassName);*/

		/*$('.pg-r-up-bg').addClass(upClassName);
		$('.pg-r-down-bg').addClass(downClassName);*/
	};



	app.closeCurtain = function() {
		if(!c.hasDraw) {
			alert('请先上传一张靓照');
			return;
		}
		if (!app.checkTimes()){
			alert('鉴定操作过于频繁，镜也会累，过1分钟再试吧');
			return;
		}
		$('.page-progress').show();
		setTimeout(function() {
			$('.page-progress').addClass('close');
		}, 0);

		setTimeout(app.checkHandler, 1500);
	}
	app.openCurtain = function() {
		$('.page-progress').show().removeClass('close');
		setTimeout(function() {$('.page-progress').hide()}, 500);
	}



	$('.btn-start').on("click", function() { 
		$('.page-start').fadeOut(300);
		$('body').addClass('bd-uploadbg');
	});

	$('.btn-upload').on("click", app.closeCurtain);
	
	$('#photoCanvas').on('click',function (){$(file).trigger('click'); console.log("picwrap-click")});

	$('.btn-more').on("click", function() {
		console.log("btn-more");
		location.href = "http://x5m.qq.com/act/a20170925book/m.html?ADTAG=media.outerenter.spread.spread1&time=0.048515612095627825";
	});
	

})();