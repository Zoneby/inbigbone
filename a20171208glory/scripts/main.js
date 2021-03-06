var PreLoad=function(a,b){var c=b||{};this.source=a,this.count=0,this.total=a.length,this.onload=c.onload,this.prefix=c.prefix||"",this.init()};PreLoad.prototype.init=function(){var a=this;a.source.forEach(function(b){var c=b.replace(/[#\?].*$/,'').substr(b.lastIndexOf(".")+1).toLowerCase(),d=a.prefix+b;switch(c){case"js":a.script.call(a,d);break;case"css":a.stylesheet.call(a,d);break;case"svg":case"jpg":case"gif":case"png":case"jpeg":a.image.call(a,d)}})},PreLoad.prototype.getProgress=function(){return Math.round(this.count/this.total*100)},PreLoad.prototype.image=function(a){var b=document.createElement("img");this.load(b,a),b.src=a},PreLoad.prototype.stylesheet=function(a){var b=document.createElement("link");this.load(b,a),b.rel="stylesheet",b.type="text/css",b.href=a,document.head.appendChild(b)},PreLoad.prototype.script=function(a){var b=document.createElement("script");this.load(b,a),b.type="text/javascript",b.src=a,document.head.appendChild(b)},PreLoad.prototype.load=function(a,b){var c=this;a.onload=a.onerror=a.onabort=function(a){c.onload&&c.onload({count:++c.count,total:c.total,item:b,type:a.type})}};
var app = app || {};
app.resPath = TC_CONF.resPath;

app.resources = [
	app.resPath+ 'images/front.jpg',
	app.resPath+ 'images/sky.png',
	app.resPath+ 'images/1.jpg',
	app.resPath+ 'images/2.jpg',
	app.resPath+ 'images/3.jpg',
	app.resPath+ 'images/4.jpg',
	app.resPath+ 'images/5.jpg',
	app.resPath+ 'images/6.jpg',
	app.resPath+ 'images/7.jpg',
	app.resPath+ 'images/8.jpg',
	app.resPath+ 'images/9.jpg',
	app.resPath+ 'images/10.jpg',
	app.resPath+ 'images/11.jpg',
	app.resPath+ 'images/12.jpg',
	app.resPath+ 'images/13.jpg',
	app.resPath+ 'images/14.jpg',
	app.resPath+ 'images/15.jpg',
	app.resPath+ 'images/16.jpg',
	app.resPath+ 'images/17.jpg',
	app.resPath+ 'images/18.jpg',
	app.resPath+ 'images/19.jpg',
	app.resPath+ 'images/20.jpg',

	app.resPath+"images/btn-share.png",
	app.resPath+"images/sky.png",
	app.resPath+"images/item1.png",
	app.resPath+"images/item5.png",
	app.resPath+"images/item9.png",
	app.resPath+"images/item11.png",
	app.resPath+"images/item_hudie1.png",
	app.resPath+"images/item_qiqiu3.png",
	app.resPath+"images/item_qiqiu2.png",
	app.resPath+"images/item_hudie2.png",
	app.resPath+"images/item_group1.png",
	app.resPath+"images/item_group2.png",
	app.resPath+ 'images/cloudup.png',
	app.resPath+ 'images/clouddown.png',
	app.resPath+ 'images/logos.png',
	app.resPath+ 'images/endtitle.png',
	app.resPath+ 'images/endtip.png',
	app.resPath+ 'images/btn-link.png'

];

var video;
// var ua = navigator.userAgent.toLowerCase();
// var isAndroid = ua.match(/android/i) == "android";

//视频初始化
app.initVideo = function() {
  video = document.querySelector("#mainvideo");
  // video.src = 'media/glory.mp4';
  video.src = 'http://img.bigbone.cn/a20171208glory/media/glory3.mp4';
  video.addEventListener('timeupdate', function () {
    if (!video.isPlayed && this.currentTime > 0.1) {
      $('.pagestart').fadeOut(100);
      video.isPlayed = true;
      $('.loadgif').hide();
    }       
  });
	video.addEventListener('ended', app.videoEndCallback);
};


//播放完毕回调
app.videoEndCallback = function () {
  $('.videobox').css({'z-index':-1});
  $('.pageend').fadeIn(500);
  setTimeout(function (){
  	$('.btn-link').addClass('ani');
  },1500);
  // $('#main').fadeIn(500);
  // app.initSceoll3d();
};
//播放开始回调
app.startPlay = function() {
  video.style.display = 'block';
  video.play();
};
app.startLoadAnimation = function (){
	var $percent = $('.percent');
	var n = 0;
	$('.loading-circle').addClass('ani');
	app.loadTimer = setInterval(function (){
		n += 2;
		$percent.html(n+'%');
		if (n>=100){
			clearInterval(app.loadTimer);
			$percent.hide();
			$('.btn-start').show();
			return;
		}
	},2000/50);
};
// app.responsive = function (){
//     if ( window.orientation == 0 || window.orientation == 180 ){
//         var zoom = document.body.clientWidth/750;
//         document.querySelector('.maincontainer').style.zoom = zoom;
//     }else if ( window.orientation == 90 || window.orientation == -90 ){
//         var zoom = document.body.clientWidth/1220;
//         document.querySelector('.maincontainer').style.zoom = zoom;
//     }
// }
// app.responsive();

// var ROOTPATH = app.resPath+"images/",
bgUrls = [
	app.resPath + "images/1.jpg", 
	app.resPath + "images/2.jpg", 
	app.resPath + "images/3.jpg", 
	app.resPath + "images/4.jpg", 
	app.resPath + "images/5.jpg", 
	app.resPath + "images/6.jpg", 
	app.resPath + "images/7.jpg", 
	app.resPath + "images/8.jpg", 
	app.resPath + "images/9.jpg", 
	app.resPath + "images/10.jpg", 
	app.resPath + "images/11.jpg", 
	app.resPath + "images/12.jpg", 
	app.resPath + "images/13.jpg", 
	app.resPath + "images/14.jpg", 
	app.resPath + "images/15.jpg", 
	app.resPath + "images/16.jpg", 
	app.resPath + "images/17.jpg", 
	app.resPath + "images/18.jpg", 
	app.resPath + "images/19.jpg",
	app.resPath + "images/20.jpg"
];
itemUrls = [
	"url('"+app.resPath+"images/btn-share.png')",
	"url('"+app.resPath+"images/sky.png')",
	"url('"+app.resPath+"images/item1.png')",
	"url('"+app.resPath+"images/item5.png')",
	"url('"+app.resPath+"images/item9.png')",
	"url('"+app.resPath+"images/item11.png')",
	"url('"+app.resPath+"images/item_hudie1.png')",
	"url('"+app.resPath+"images/item_qiqiu3.png')",
	"url('"+app.resPath+"images/item_qiqiu2.png')",
	"url('"+app.resPath+"images/item_hudie2.png')",
	"url('"+app.resPath+"images/item_group1.png')",
	"url('"+app.resPath+"images/item_group2.png')"
];
app.initSceoll3d = function (){
    function A() {
        return !! /Android|Windows Phone|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
    }
    function e() {
        return !! /iPhone|iPad|iPod/i.test(navigator.userAgent)
    }
    function t() {
        // this.BG_WIDTH = 129,
        // this.BG_HEIGHT = 1170,
        this.BG_WIDTH = 544,
        this.BG_HEIGHT = 1220,
        this.BG_NUMBER = 20,
        // this.PERSPECTIVE = 928,
        this.PERSPECTIVE = 1628,
        this.PER_ANGLE = 360 / this.BG_NUMBER,
        this.AIM_TRANS_Z = 447,
        this.curStageTranslateZ = -4500,
        this.PANOBG_ROTATE_Y = 720,
        this.$doc = $(document),
        this.$body = $("body"),
        this.$container = $(".container"),
        this.$panoBg = $(".panoBg"),
        this.$panoSky = $(".panoSky"),
        this.$three = $(".three"),
        this.$panoItem = $(".panoItem"),
        this.$stage = $(".stage"),
        this.$sky = this.$panoSky.find("div"),
        this.$loading = $(".loading"),
        this.bgInitAimArr = [],
        this.curBgArr = []
    }
    var n = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame ||
    function(A) {
        setTimeout(A, 1e3 / 60)
    };
    t.prototype.init = function() {
        return this.$body.on("touchmove",
        function(A) {
            A.preventDefault()
        }),
        this.initVar(),
        this.getInitSize(),
        this.setInitSize(),
        this.loadPanoBg(),
        this
    },
    t.prototype.initVar = function() {
        this.itemsData = [
        {
            width: 325,
            height: 148,
            transform: {
                x: 116,
                y: 0,
                z: -500
            },
            childs: [1],
            y: 980,
            rotateY: 10,
            "in": 8,
            fn: function (){
            	try{$('.sharewrap').show()}catch(e){}
            }
        },
        //奖杯字
        {
            width: 500,
            height: 600,
            transform: {
                x: 116,
                y: 0,
                z: -500
            },
            childs: [1],
            y: 380,
            rotateY: 8,
            "in": 8
        },
        //举炮
        {
            width: 849,
            height: 734,
            transform: {
                x: 16.18,
                y: 0,
                z: -11.76
            },
            childs: [1],
            y: 320,
            rotateY: -42,
            zIndex: 300,
            "in": 1
        },
        //乐队男
        {
            width: 381,
            height: 997,
            transform: {
                x: 16.18,
                y: 0,
                z: -11.76
            },
            childs: [1],
            y: 100,
            rotateY: -102,
            zIndex: 300,
            "in": 2
        },
        // //奔跑男
        // {
        //     width: 609,
        //     height: 598,
        //     transform: {
        //         x: 16.18,
        //         y: 0,
        //         z: -11.76
        //     },
        //     childs: [1],
        //     y: 280,
        //     rotateY: -212,
        //     zIndex: 400,
        //     "in": 2
        // },
        //绿色药瓶
        {
            width: 278,
            height: 485,
            transform: {
                x: 16.18,
                y: 0,
                z: -11.76
            },
            childs: [1],
            y: 160,
            rotateY: 100,
            zIndex: 400,
            "in": 2
        },
        //拿剑
        {
            width: 693,
            height: 815,
            transform: {
                x: 16.18,
                y: 0,
                z: -11.76
            },
            childs: [4],
            y: 180,
            rotateY: 42,
            zIndex: 600,
            "in": 2
        },
        //蝴蝶1
        {
            width: 264,
            height: 237,
            transform: {
                x: 16.18,
                y: 0,
                z: -11.76
            },
            childs: [5],
            y: 180,
            rotateY: -76,
            zIndex: 400,
            "in": 2
        },
        //气球3
        {
            width: 199,
            height: 147,
            transform: {
                x: 16.18,
                y: 0,
                z: -11.76
            },
            childs: [6],
            y: 220,
            rotateY: -142,
            zIndex: 200,
            "in": 2
        },
        //气球2
        {
            width: 379,
            height: 200,
            transform: {
                x: 16.18,
                y: 0,
                z: -11.76
            },
            childs: [7],
            y: 150,
            rotateY: 146,
            zIndex: 300,
            "in": 2
        },
        //hudie2
        {
            width: 63,
            height: 74,
            transform: {
                x: 16.18,
                y: 0,
                z: -11.76
            },
            childs: [7],
            y: 950,
            rotateY: 116,
            zIndex: 300,
            "in": 2
        },
        //组1
        {
            width: 968,
            height: 700,
            transform: {
                x: 16.18,
                y: 0,
                z: -11.76
            },
            childs: [1],
            y: 300,
            rotateY: -160,
            zIndex: 400,
            "in": 2
        },
        //组2
        {
            width: 1066,
            height: 666,
            transform: {
                x: 16.18,
                y: 0,
                z: -11.76
            },
            childs: [1],
            y: 350,
            rotateY: -200,
            zIndex: 350,
            "in": 2
        }
        ],
        this.lastMouseX = this.lastMouseY = 0,
        this.curMouseX = this.curMouseY = 0,
        this.lastAngleX = this.lastAngleY = 0,
        this.aimAngleX = this.aimAngleY = 0,
        this.curBgAngleX = this.curBgAngleY = 0,
        this.curItemAngleX = this.curItemAngleY = 0,
        this.tranZDistance = 0,
        this.slastMouseX = 0,
        this.panoBgDeg = 0,
        this.loadedNum = 0,
        this.initOrienter = {
            g: 0,
            b: 0
        },
        this.initpanoItemScale = 0,
        this.aimOriAngleX = this.aimOriAngleY = 0,
        this.curOriAngleX = this.curOriAngleY = 0,
        this.aimOriTransZ = this.aimOriTransZ = 0,
        this.oriTranZDistance = this.oriDragDistance = this.lastOriTranZ = 0,
        this.frameTimer = null,
        this.o = new Orienter
    },
    t.prototype.loadPanoBg = function() {
        function A() {
            var A = this;
            $('#percent').hide();
            for (var e = 0,
            t = 0; t < A.BG_NUMBER; t++) !
            function(t) {
                setTimeout(function() {
                    e = t <= 15 ? -A.PER_ANGLE * t - 90 : -18 * (t - 15),
                    $("<div></div>").css({
                        backgroundImage: "url(" + bgUrls[t] + ")",
                        visibility: "hidden",
                        width: A.BG_WIDTH,
                        height: A.BG_HEIGHT,
                        left: (A.threeW - A.BG_WIDTH) / 2
                    }).appendTo(A.$panoBg),
                    A.bgInitAimArr[t].isLoad = !0
                },
                60 * t)
            } (t);
            A.addPanoItems(),
            A._loop()
        }
        for (var e = this,
        t = 0; t < this.BG_NUMBER; t++) {
            var n = new Image;
            n.onload = function() {
                e.loadedNum++,
                // e.$loading.find("div").css({
                //     width: e.loadedNum / e.BG_NUMBER * 100 + "%"
                // }),
                $('#percent').html(e.loadedNum / e.BG_NUMBER * 100 + "%"),
                // e.loadedNum === e.BG_NUMBER && A.call(e)
                e.loadedNum === e.BG_NUMBER && A.call(e)
            },
            n.src = bgUrls[t]
        }
    },
    t.prototype.addPanoItems = function() {
        for (var A = 0,
        e = 0,
        t = this.itemsData.length; e < t; e++) {
            for (var n = this.itemsData[e], g = $("<div></div>").css({
                position: "absolute",
                "transform-style": "preserve-3d",
                "-webkit-transform-style": "preserve-3d",
                "backface-visibility": "hidden",
                "transform": "translate3d(" + n.transform.x + "px," + n.transform.y + "px," + n.transform.z + "px)",
                "-webkit-transform": "translate3d(" + n.transform.x + "px," + n.transform.y + "px," + n.transform.z + "px)"
            }),
             i = 0, o = n.childs.length; i < o; i++) $("<div></div>").css({
                width: n.width,
                height: n.height,
                position: "absolute",
                left: (this.threeW - n.width) / 2,
                background: itemUrls[A] + " no-repeat",
                "backface-visibility": "hidden",
                // transform: "rotateY(" + (180 - (n["in"] + i || 0) * this.PER_ANGLE) + "deg) translateY(" + (n.y || 0) + "px) translateZ(" + (-this.panoRadius+800) + "px)"
                transform: "rotateY("+(n.rotateY||0)+"deg) translateY(" + (n.y || 0) + "px) translateZ(" + (-this.panoRadius+(n.zIndex||800)) + "px)",
                "-webkit-transform": "rotateY("+(n.rotateY||0)+"deg) translateY(" + (n.y || 0) + "px) translateZ(" + (-this.panoRadius+(n.zIndex||800)) + "px)"
            }).appendTo(g).on('click',n.fn||function (){}),
            A++;
            g.appendTo(this.$panoItem)
        }
    },
    t.prototype.getInitSize = function() {
        this.isPhone = A(),
        this.isIOS = e(),
        this.vw = window.innerWidth,
        this.vh = window.innerHeight,
        this.threeW = this.$three.width(),
        this.threeH = this.vh,
        this.skyW = this.$sky.width(),
        this.skyH = this.$sky.height(),
        this.panoRadius = this._calTranslateZ({
            width: this.BG_WIDTH,
            number: this.BG_NUMBER
        })
    },
    t.prototype.setInitSize = function() {
        this.threeH = this.$three.height(this.vh),
        this.$container.css("top", -(this.BG_HEIGHT - this.vh) / 2 + "px"),
        this.$three.css("perspective", this.PERSPECTIVE + "px"),
        this.$panoBg.add(this.$panoSky).add(this.$panoItem).css({
            transformOrigin: this.threeW / 2 + "px " + this.BG_HEIGHT / 2 + "px",
            webkitTransformOrigin: this.threeW / 2 + "px " + this.BG_HEIGHT / 2 + "px"
        }),
        this.$panoItem.css({
            transform: "scale(0)",
            "-webkit-transform": "scale(0)",
            visibility: "hidden"
        }),
        this.$sky.css({
            position: "absolute",
            top: (this.BG_HEIGHT - this.skyH) / 2 + "px",
            left: (this.threeW - this.skyW) / 2 + "px",
            display: "none"
        }),
        this.$sky.eq(0).css({
            transform: "rotateX(-90deg) rotateZ(90deg) translateZ(" + -(this.BG_HEIGHT / 2) + "px)",
            "-webkit-transform": "rotateX(-90deg) rotateZ(90deg) translateZ(" + -(this.BG_HEIGHT / 2) + "px)"
        }),
        this.$sky.eq(1).css({
            transform: "rotateX(90deg) rotateZ(90deg) translateZ(" + -(this.BG_HEIGHT / 2) + "px)",
            "-webkit-transform": "rotateX(90deg) rotateZ(90deg) translateZ(" + -(this.BG_HEIGHT / 2) + "px)",
        });
        for (var A = 0; A < this.BG_NUMBER; A++) this.bgInitAimArr.push({
            rotateY: 180 - A * this.PER_ANGLE,
            translateZ: -this.panoRadius,
            scale: 1,
            isLoad: !1
        }),
        this.curBgArr.push({
            rotateY: 0,
            translateZ: 0,
            scale: 0
        })
    },
    t.prototype._mouseDownHandler = function(A) {
        var e = this;
        this.lastMouseX = A.pageX || A.touches[0].pageX,
        this.lastMouseY = A.pageY || A.touches[0].pageY,
        this.lastAngleX = this.aimAngleX,
        this.lastAngleY = this.aimAngleY,
        this.curMouseX = A.pageX || A.touches[0].pageX,
        this.curMouseY = A.pageY || A.touches[0].pageY,
        this.slastMouseX = A.pageX || A.touches[0].pageX,
        $(document).on("touchmove mousemove", e._mouseMoveHandler.bind(this))
    },
    t.prototype._mouseUpHandler = function(A) {
        $(document).unbind("touchmove mousemove")
    },
    t.prototype._mouseMoveHandler = function(A) {
        this.curMouseX = A.pageX || A.touches[0].pageX,
        this.curMouseY = A.pageY || A.touches[0].pageY,
        this._dragRotate({
            pageX: this.curMouseX,
            pageY: this.curMouseY
        }),
        this._dragScale({
            pageX: this.curMouseX,
            pageY: this.curMouseY
        })
    },
    t.prototype._dragRotate = function(A) {
        this.aimAngleX = 180 / Math.PI * Math.atan((this.curMouseX - this.lastMouseX) / this.panoRadius) + this.lastAngleX;
        // this.aimAngleY = Math.max( - 30, Math.min(180 / Math.PI * Math.atan((this.curMouseY - this.lastMouseY) / (1.5 * Math.sqrt(Math.pow(this.BG_HEIGHT / 2, 2) + Math.pow(this.panoRadius, 2)))) + this.lastAngleY, 30))
    },
    t.prototype._dragScale = function(A) {
        var e = Math.abs(A.pageX - this.slastMouseX);
        this.tranZDistance -= .8 * e,
        this.slastMouseX = A.pageX
    },
    t.prototype._orienterHandler = function(A) {
        if (this._orienterHandler.isFirst && (this.initOrienter.g = A.g, this.initOrienter.b = A.b, this._orienterHandler.isFirst = !1), A.b < 89) {
            this.aimOriAngleX = 180 / Math.PI * Math.atan(6 * (A.g - this.initOrienter.g) / this.panoRadius),
            this.aimOriAngleY = Math.max( - 30, Math.min(180 / Math.PI * Math.atan(6 * (A.b - this.initOrienter.b) / (1.5 * Math.sqrt(Math.pow(this.BG_HEIGHT / 2, 2) + Math.pow(this.panoRadius, 2)))), 30));
            var e = 1.3 * Math.abs(A.g - this.lastOriTranZ);
            this.oriDragDistance -= .8 * e,
            this.lastOriTranZ = A.g
        }
    },
    t.prototype._orienterHandler.isFirst = !0,
    t.prototype._calTranslateZ = function(A) {
        var e = A.width / (2 * Math.tan(Math.PI / A.number));
        return this.isIOS ? e - 3 : e - 1
    },
    t.prototype._entryFinishHandler = function() {
        var A = this;
        $(document).on("touchstart mousedown", A._mouseDownHandler.bind(this)),
        $(document).on("touchend mouseup", A._mouseUpHandler.bind(this)),
        this.$sky.show(),
        // this.o.handler = this._orienterHandler.bind(this),
        this.o.init()
    },
    t.prototype._loop = function() {
        this.panoBgDeg += .018 * (this.PANOBG_ROTATE_Y - this.panoBgDeg + 10),
        this.PANOBG_ROTATE_Y - this.panoBgDeg < .1 && !this._loop.isLoaded && (this._loop.isLoaded = !0, this.panoBgDeg = this.PANOBG_ROTATE_Y, this._entryFinishHandler()),
        this.curBgAngleX += .5 * (this.aimAngleX - this.curBgAngleX + (this.aimOriAngleX - this.curOriAngleX)),
        this.curBgAngleY += .5 * (this.aimAngleY - this.curBgAngleY + (this.aimOriAngleY - this.curOriAngleY)),
        this.curItemAngleX += .41 * (this.aimAngleX - this.curItemAngleX + (this.aimOriAngleX - this.curOriAngleX)),
        this.curItemAngleY += .41 * (this.aimAngleY - this.curItemAngleY + (this.aimOriAngleY - this.curOriAngleY)),
        this.tranZDistance -= .08 * this.tranZDistance,
        this.oriDragDistance -= .08 * this.oriDragDistance,
        this.curStageTranslateZ += .045 * (this.AIM_TRANS_Z - this.curStageTranslateZ),
        Math.abs(this.tranZDistance) < .5 && (this.tranZDistance = 0),
        Math.abs(this.oriDragDistance) < .5 && (this.oriDragDistance = 0),
        this.curOriTransZ += .08 * (this.aimOriTransZ - this.curOriTransZ),
        this.$panoBg.add(this.$panoSky).css({
            transform: "rotateX(" + this.curBgAngleY + "deg) rotateY(" + (this.panoBgDeg - this.curBgAngleX+110) + "deg) rotateZ(0)",
            "-webkit-transform": "rotateX(" + this.curBgAngleY + "deg) rotateY(" + (this.panoBgDeg - this.curBgAngleX+110) + "deg) rotateZ(0)"
        }),
        this.panoBgDeg > 690 && (this.initpanoItemScale += .03 * (1 - this.initpanoItemScale), this.$panoItem.css({
            visibility: "visible",
            transform: "rotateX(" + this.curItemAngleY + "deg) rotateY(" + -this.curItemAngleX + "deg) rotateZ(0) scale(" + this.initpanoItemScale + ")",
            "-webkit-transform": "rotateX(" + this.curItemAngleY + "deg) rotateY(" + -this.curItemAngleX + "deg) rotateZ(0) scale(" + this.initpanoItemScale + ")"
        })),
        this.$stage.css({
            transform: "translateZ(" + this.curStageTranslateZ + "px)",
            "-webkit-transform": "translateZ(" + this.curStageTranslateZ + "px)"
        }),
        this.$container.css({
            transform: "translateZ(" + (this.tranZDistance + this.oriDragDistance) + "px)",
            "-webkit-transform": "translateZ(" + (this.tranZDistance + this.oriDragDistance) + "px)"
        });
        for (var A = 0; A < this.BG_NUMBER; A++) this.bgInitAimArr[A].isLoad && (this.curBgArr[A].translateZ += .035 * (this.panoRadius - this.curBgArr[A].translateZ), this.curBgArr[A].translateX += .08 * (0 - this.curBgArr[A].translateX), this.$panoBg.find("div").eq(A).css({
            visibility: "visible",
            transform: "rotateY(" + this.bgInitAimArr[A].rotateY + "deg) translateZ(" + -this.curBgArr[A].translateZ + "px) scale(" + Math.min(this.curBgArr[A].scale += .015 * (20 - A + 5) / 10, 1) + ")",
            "-webkit-transform": "rotateY(" + this.bgInitAimArr[A].rotateY + "deg) translateZ(" + -this.curBgArr[A].translateZ + "px) scale(" + Math.min(this.curBgArr[A].scale += .015 * (20 - A + 5) / 10, 1) + ")"
        }));
        this.frameTimer = n(this._loop.bind(this))
    },
    t.prototype._loop.isLoaded = !1; (new t).init()
};
$(function (){
	app.initVideo();
	// app.startLoadAnimation();
	$('.btn-start').on('webkitAnimationEnd',function(){
		$('.circle').addClass('ani');
		this.open = !0;
	});
	$('.btn-start').addClass('ani');
	new PreLoad(app.resources, {
		onload: function(load) {
			var count = load.count,
			total = load.total,
			percent = Math.ceil(100 * count / total);
			$('.percent').html(percent+'%');
			if(percent == 100) {
				console.log('load complete');

				// $('#main').fadeIn(300);
				// app.initSceoll3d();
				$('.percent').hide();
				$('.btn-start').show();
			}
		}
	});
	$('.btn-start').on('click',function (){
		if (!this.open)return;
	  $(this).hide();
	  app.startPlay();
	  $('.loadgif').show();
	  try{PTTSendClick('click','btn','movieplay');}catch(e){};
	});
	$('.btn-link').on('click',function (){
		// location.href = 'http://peng.qq.com/act/a20140817map/play.html';
		$('#main').fadeIn(300);
		app.initSceoll3d();
		try{PTTSendClick('click','btn','longpic');}catch(e){};
	});
	$('.btn-share').on('click',function (){
		$('.sharewrap').show();
		try{PTTSendClick('click','btn','sharebtn');}catch(e){};
	});
	$('.sharewrap').on('click',function (){
		$('.sharewrap').hide();
	});

});