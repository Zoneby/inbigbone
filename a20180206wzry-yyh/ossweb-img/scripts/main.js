;(function() {
	var app = app || {},
	video = document.querySelector("#mainvideo"),
	canvas = document.getElementById("hiddenCanvas");

	app.login_bgm = document.querySelector("#login-bgm");
	app.bgm = document.querySelector("#bgm");
	app.wx_msg_bgm = document.querySelector("#wx-bgm");
	app.pipa = document.querySelector("#pipa");
	app.bless = document.querySelector("#bless");
	app.wxcomebgm = document.querySelector("#wx-come"); 
	app.wxtobgm = document.querySelector("#wx-to"); 
	app.resPath = "./ossweb-img/";
	app.resultStage = new createjs.Stage(document.querySelector('#hiddenCanvas'));

	app.pipa_maxW = document.body.clientWidth - app.pipa.offsetWidth;
	app.pipa_maxH = document.body.clientHeight - app.pipa.offsetHeight;

	app.qrcode = new Image();
	app.qrcode.crossOrigin = 'Anonymous';
	app.qrcode.src = app.resPath + "images/qrcode.png";

	app.defaultEvent = function(e) {
		 e.preventDefault();
	}
	function handleTouchMove(e) {
		if (e.cancelable) {
	        // 判断默认行为是否已经被禁用
	        if (!e.defaultPrevented) {
	            e.preventDefault();
	        }
    	}
		var ev = e || window.event;
			app.pipamove = ev.targetTouches[0],
			diffLeft = app.pipamove.clientX - app.pipa_x0,
			diffTop  = app.pipamove.clientY - app.pipa_y0;
			if(diffLeft < 0) {
				diffLeft = 0;
			}else if ( diffLeft>=app.pipa_maxW + app.pipa_x0*0.5) {
				diffLeft = app.pipa_maxW ;	
			}
			if(diffTop < 0) {
				diffTop = 0;
			}else if( diffTop>= app.pipa_maxH + app.pipa_y0*0.5 ) {
				diffTop = app.pipa_maxH ;
			}
			/*console.log(touch.clientX);
			console.log(touch.clientY);*/

			app.pipa.style.left = diffLeft + "px";
			app.pipa.style.top = diffTop + "px";

			if(app.pipamove.clientX < 580 && app.pipamove.clientY < 720) {
				console.log("180 420");
			}
			document.removeEventListener("touchend", app.defaultEvent);
	}
	
	app.pipa.addEventListener("touchstart", function(e) {

		var ev = e || window.event;
		var touch = ev.targetTouches[0];
		app.pipa_x0 = touch.clientX - app.pipa.offsetLeft;
		app.pipa_y0 = touch.clientY - app.pipa.offsetTop;
	}, false);

	app.pipa.addEventListener("touchmove", handleTouchMove, {passive:false});


	app.pipa.addEventListener("touchend", function(ev) {
		
		app.pipa.removeEventListener("touchmove", handleTouchMove);

	/*	if(app.pipamove.clientX < 300 && app.pipamove.clientY < 620) {
		
			// video.currentTime == 41.3;
			$('#pipa').addClass("pipa-move");
			$('.page-move-pipa').fadeOut(300);
			app.startPlay();

		}*/
		$('#pipa').addClass("pipa-move");
		$('.page-move-pipa').fadeOut(300);
		app.startPlay();

		console.log("touchend");
		console.log(video.paused);	
	}, {passive: false});
	app.pipa.addEventListener("click", function() {
		// video.currentTime == 41.3;
		/*$('#pipa').addClass("pipa-move");
		$('.page-move-pipa').fadeOut(300);
		app.startPlay();*/

	})

	app.initVideo = function () {
		video = document.querySelector("#mainvideo");
		video.src = "http://img.bigbone.cn/yyhv4.mp4";

		video.addEventListener('timeupdate', function() {
			if(!video.isPlayed && this.currentTime > 0.1) {
				$('.pagestart').fadeOut(300);
				// $('.start-btn').fadeOut(300);
				video.isPlayed = !0;
			}
			if( !app.bgmpausedOnce && (parseInt(video.currentTime) == 3)) {
				app.bgmpausedOnce = !0;
				video.pause();

				$('.pagedialog').show();
				app.wx_msg_bgm.pause();
				app.wx_msg_bgm.play();
			}
			// if(parseInt(video.currentTime) == 40) 
			// 
			// if(video.currentTime > 39.5 && video.currentTime < 40.5 ){
			// 	// video.pause();
			// 	video.muted == true;
			// 	// app.login_bgm.pause();
			// 	$('.page-move-pipa').fadeIn(100);
			// 	// video.currentTime = 40.7;
			// 	// video.currentTime == 39;
			// }
			
			// if(Math.round(video.currentTime) == 41)
			if(!app.videoPausedOnce && (video.currentTime > 40.7 && video.currentTime < 41.3)) {
				app.videoPausedOnce = !0;
				video.pause();
				$('.page-move-pipa').fadeIn(100);
				// video.currentTime = 42.1;
			}
			if(!app.videopipaShow && video.currentTime > 42) {
				app.videopipaShow = !0;
				$('#pipa').addClass("pipa-move");
				$('.page-move-pipa').fadeOut(300);
			}


			if( !app.videoEnd && Math.round(video.currentTime) == 58) {
				app.videoEnd = !0;
				app.bgm.pause();
				app.wxtobgm.currentTime = 0;
				app.wxtobgm.play();
			}
			// console.log(video.currentTime)
		});

		video.addEventListener("ended", function() {
			// $('.wx2').fadeIn()
			$('.container').fadeOut();
			
			$('.wx2').show();
		});
		console.log(video.currentTime);
		// video.addEventListener("ended", app.videoEndCallback);
	}

	app.startPlay = function() {
		video.style.display = 'block';
		video.play();
	}

	
	app.kvlist = [
		app.resPath+ "images/kv1.jpg",
		app.resPath+ "images/kv2.jpg",
		app.resPath+ "images/kv3.jpg",
		app.resPath+ "images/kv4.jpg",
		app.resPath+ "images/kv5.jpg",
		app.resPath+ "images/kv6.jpg",
		app.resPath+ "images/kv7.jpg",
		app.resPath+ "images/kv8.jpg",
		app.resPath+ "images/kv9.jpg",
		app.resPath+ "images/kv10.jpg",
		app.resPath+ "images/kv11.jpg",
		app.resPath+ "images/kv12.jpg",
		app.resPath+ "images/kv13.jpg"

	]
	app.createResultImge = function() {
		// app.textClass = "";
		function build() {
			var cover = new createjs.Bitmap(imagekv);
				cover.x = 0;
				cover.y = 0;

			/*var text = $(app.textClass)[0];
			var t = new createjs.Bitmap(text);
			t.x = 40;
			t.y = 290;*/

			/*var text = new createjs.Text("峡谷杨玉环给你送来新春祝福", "34px Arial", "#ffffff");
			text.x = canvas.width/2;
			text.y = 180;*/

			// text.regX = text.getBounds().width/2;

			var qrcode = new createjs.Bitmap(app.qrcode);
			
			qrcode.x = 50;
			qrcode.y = 1070;
			// qrcode.regX = qrcode.getBounds().width/2;


			app.resultStage.addChild(cover, qrcode);

			app.resultStage.update();
			document.querySelector("#resultImage").src = app.resultStage.toDataURL('#ffffff', 'image/jpeg');

		}
		var imagekv = new Image();
		imagekv.crossOrigin = 'Anonymous'; 

		var i = parseInt(Math.random()*12);
		// console.log(app.textClass);
		imagekv.src = app.kvlist[i];
		console.log(app.kvlist[i]);
		imagekv.onload = build
	}

	$(function() {
		app.initVideo();


		app.createResultImge();
		
		$('.start-btn').on("click", function() {
			app.startPlay();

			app.login_bgm.play();
			
		})
		$('.wx-dialog').on("click", function() {

			app.login_bgm.pause();

			// video.hide();
			$('.pagestart').remove();
			$('.pagedialog').remove();

			$('#mainvideo').fadeOut(300);
			$('.wx1').show();
			// app.bgm.play();
			console.log("dialog1");
		});
		$('.wx-dialog').on("webkitAnimationStart", function(){
			// app.wx_msg_bgm.currentTime = 0;
			app.wx_msg_bgm.pause();
			app.wx_msg_bgm.play();
		});

		$('.d4').on("webkitAnimationEnd", function() {
			video.currentTime = 4;
			setTimeout(function() {
				$('.wx1').hide();
				$('.page2video').fadeIn();
				app.wxcomebgm.currentTime = 0;
				app.wxcomebgm.play();
			}, 1800);
			
		})
		$('.accept-v-btn').on("click", function() {
			$('.page2video').fadeOut(300);
			$('#mainvideo').show();
			app.wxcomebgm.pause();
			// $('.mainvideo')[0].play();
			app.bgm.pause();
			app.bgm.play();
			app.startPlay();
			// $('')
		});
		$('.page-move-pipa').on("click", function() {
			console.log("pipa");
			app.startPlay();
		})
		
		$('.d1').on("webkitAnimationStart", function(){
			app.wx_msg_bgm.currentTime = 0;
			// app.wx_msg_bgm.pause();
			app.wx_msg_bgm.play();
		});
		$('.d3').on("webkitAnimationStart", function(){
			// console.log('d3');
			app.wx_msg_bgm.currentTime = 0;
			// app.wx_msg_bgm.pause();
			app.wx_msg_bgm.play();
		});
		$('.d5').on("webkitAnimationStart", function(){
			app.wx_msg_bgm.currentTime = 0;
			// app.wx_msg_bgm.pause();
			app.wx_msg_bgm.play();
		});
		$('.d7').on("webkitAnimationStart", function(){
			app.wx_msg_bgm.currentTime = 0;
			// app.wx_msg_bgm.pause();
			app.wx_msg_bgm.play();
		});
		$('.d9').on("webkitAnimationStart", function(){
			app.wx_msg_bgm.currentTime = 0;
			// app.wx_msg_bgm.pause();
			app.wx_msg_bgm.play();
		});
		$('.d10').on("webkitAnimationStart", function(){
			app.wx_msg_bgm.currentTime = 0;
			// app.wx_msg_bgm.pause();
			app.wx_msg_bgm.play();
		});

		$('.d10').on("click", function() {
			// app.createResultImge();
			app.bless.play();
			$('.red-icon').hide();
			/*$('.icon1').addClass('icon-ani1');
			$('.icon2').addClass('icon-ani2');
			$('.icon3').addClass('icon-ani3');*/
		});
		app.bless.addEventListener('timeupdate',function() {
			if(app.bless.ended === true) {
				// $('.wx2').fadeOut(300);
				
				$('.page-result').fadeIn(400);
			}
		})
		document.addEventListener("WeixinJSBridgeReady",function (){
			app.login_bgm.play();
			app.login_bgm.pause();

			app.bgm.play();
			app.bgm.pause();

			app.wx_msg_bgm.play();
			app.wx_msg_bgm.pause();

			app.pipa.play();
			app.pipa.pause();

			app.bless.play();
			app.bless.pause();

			app.wxcomebgm.play();
			app.wxcomebgm.pause();

			app.wxtobgm.play();
			app.wxtobgm.pause();

			// app.pipa = document.querySelector("#pipa");
			/*app.bless = document.querySelector("#bless");
			app.wxcomebgm = document.querySelector("#wx-come"); 
			app.wxtobgm = document.querySelector("#wx-to"); */

		}, false);
	});
})();