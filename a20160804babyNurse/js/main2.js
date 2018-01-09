

var fCustomImg;
var canvas = new fabric.Canvas('mycanvas');
console.log(canvas)
function fileChangeHandler(file){

    var reader = new FileReader();

    reader.onloadstart = function (){
        $('.upimg').show();
        $('.upimgtext').show();
    }
    reader.onload = function (){
        
        putInImage(reader.result,function (){
            $('.upimg').hide();
            // $('.upimgtext').hide();
            if ( !$('.scalewrap').data('hasShown') ){
                // $('.scalewrap').show();
                // setTimeout(function (){
                //     $('.scalewrap').hide();
                // },2000)
                // $('.scalewrap').data('hasShown',true);
            }

        })
    }
    reader.readAsDataURL(file);
}
function putInImage(data,callBack){
    canvas.clear();
    var imgInstance = fabric.Image.fromURL(data,function (oImg){
        var initWidth = oImg.width;
        var initHeight = oImg.height;

        
        if (initWidth/initHeight == 1){ 
            oImg.width = canvas.width;
            oImg.height = canvas.height;
        }else if ( initWidth/initHeight < 1 ){
            oImg.width = canvas.width;
            oImg.height = initHeight/initWidth*oImg.width;
        }else {
            oImg.height = canvas.height;
            oImg.width = initWidth/initHeight*oImg.height;
        }
        oImg.set({
            selectable: !0,
            originX: "center",
            originY: "center",
            centeredScaling: !0,
            // hasRotatingPoint: !1,
            centeredRotation: !0,
            lockMovementX : !1,
            lockMovementY : !1,
            // lockRotation: !0,
            // lockScalingFlip: !0,
            // lockUniScaling: !0,
            // lockScalingX: !0,
            // lockScalingY: !0,
            hasBorders: !1,
            hasControls: !1,
            padding: 0
        })

        // oImg.filters.push(new fabric.Image.filters.Grayscale());

        oImg.applyFilters(canvas.renderAll.bind(canvas));

        canvas.add(oImg);
        oImg.center();
        fCustomImg = oImg;

        callBack && callBack();
    })
}


// 添加浏览器前缀
function prefix(style) {
    var vendor = (function() {
        var transArr = ['transform', 'webkitTransform', 'MozTransform', 'msTranform', 'OTransform'],
            vendors = ['', 'webkit', 'Moz', 'ms', 'O'],
            elementStyle = document.createElement('div').style

        for (var i = 0; i < vendors.length; i++) {
            if (transArr[i] in elementStyle) {
                return vendors[i]
            }
        }

        return false
    })()

    if (vendor === false) return false
    if (vendor === '') return style
    return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}

function query(selector){
    return document.querySelector(selector);
}

var TRANSFORM = prefix('transform'),
    TRANSITION = prefix('transition');

var Slider = function(options) {
    // 初始化配置参数
    this.options = $.extend({
        slideWrap: '.pages',    // 容器
        slideItem: '.page', // 滑动单元的元素
        direction: 'Y', // 滑动的方向
        effect: 'slide',    // 滑动的效果
        triggleDist: 100,   // 触发滑动的手指移动最小位移
        followFinger: true, // 是否跟随手指移动
        duration: .4,   // 翻页的延时
        currentIdx: 0   // 初始显示的页码
    }, options)

    var EffectDict = {
        'slide' : ['slide', 'slide'],
        'scale' : ['slide', 'scale']
    }

    this.pagesWrap = document.querySelector(this.options.slideWrap)
    this.pages = document.querySelectorAll(this.options.slideItem)

    this.hook = this.options.slideController
    this._total = this.pages.length
    this._pageX = 0
    this._pageY = 0
    this._distance = 0  // 页面之间切换的距离
    this._moveDist = 0  // touch 滑动的距离
    this._supportTouch = 'ontouchend' in window
    this._touching = false

    this._enter = this[EffectDict[this.options.effect][0]].bind(this)
    this._leave = this[EffectDict[this.options.effect][1]].bind(this)

    this._init()
    this._bindEvents()
}
Slider.prototype = {
    _init: function() {
        var width = this.pagesWrap.clientWidth,
            height = this.pagesWrap.clientHeight,
            currentIdx = this.options.currentIdx,
            pages = this.pages,
            total = this._total,
            distance = this._distance = (this.options.direction == 'Y' ? height : width)

        // 初始化各个 page 的位置
        for (var i = 0; i < this._total; i++) {
            if (i == currentIdx) {
                pages[i].classList.add('current')
            } else {
                this._enter(pages[i], i < currentIdx ? -distance : distance, 2)
            }
        }
    },

    _bindEvents: function() {
        var _this = this,
            pagesWrap = this.pagesWrap

        var events = this._supportTouch ? 'touchstart touchmove touchend touchcancel' : 'mousedown mousemove mouseup mousecancel'

        events.split(' ').forEach(function(e) {
            pagesWrap.addEventListener(e, _this)
        })

        window.addEventListener('orientationchange', this)
        window.addEventListener('resize', this)
    },

    handleEvent: function(e) {
        switch (e.type) {
            case 'orientationchange':
            case 'resize':
                this._init()
                break
            case 'touchstart':
            case 'mousedown':
                this._start(e)
                break
            case 'touchmove':
            case 'mousemove':
                this._move(e)
                break
            case 'touchend':
            case 'touchcancel':
            case 'mouseup':
            case 'mousecancel':
                this._end(e)
                break
        }
    },

    _start: function(e) {
        if (this._touching) {
            e.preventDefault()
            e.stopPropagation()
            return
        }

        this._touching = true
        this._moveDist = 0

        var touches = (this._supportTouch ? e.touches[0] : e),
            distance = this._distance,
            enter = this._enter

        var $current = this.pages[this.options.currentIdx],
            $next = $current.nextElementSibling,
            $prev = $current.previousElementSibling

        this._pageX = touches.pageX
        this._pageY = touches.pageY

        $current.style.zIndex = 1

        if ($next) {
            $next.style.zIndex = 2
            enter($next, distance)
        }

        if ($prev) {
            $prev.style.zIndex = 2
            enter($prev, -distance)
        }
    },

    _move: function(e) {
        e.preventDefault()

        if (!this._touching) return

        var touches = (this._supportTouch ? e.touches[0] : e),
            direction = this.options.direction,
            distance = this._distance

        var currentIdx = this.options.currentIdx,
            $current = this.pages[this.options.currentIdx],
            $next = $current.nextElementSibling,
            $prev = $current.previousElementSibling,
            xDist = touches.pageX - this._pageX,
            yDist = touches.pageY - this._pageY,
            enter = this._enter,
            leave = this._leave,
            moveDist = this._moveDist = (direction == 'X' ? xDist : yDist)

        if (this.options.followFinger) {
            $next && enter($next, moveDist + distance)
            $prev && enter($prev, moveDist - distance)

            // 因为不能翻页，所以制造拖动困难的效果
            if ((currentIdx == 0 && moveDist > 0) || (currentIdx == this._total && moveDist < 0)) {
                return this.slide($current, moveDist / 4)
            }

            leave($current, moveDist)
        }
    },

    _end: function(e) {
        var move = this._moveDist,
            distance = this._distance,
            triggleDist = this.options.triggleDist,
            enter = this._enter,
            $current = this.pages[this.options.currentIdx],
            $next = $current.nextElementSibling,
            $prev = $current.previousElementSibling

        this._touching = false

        this._enter($current, 0)
        $next && enter($next, distance)
        $prev && enter($prev, -distance)

        if ($next && move < -triggleDist && this.hook.shouldGoToNext($current)) return this._next()
        if ($prev && move > triggleDist && this.hook.shouldGoToPrev($current)) return this._prev()
    },

    _next: function() {
        this.go2page(this.options.currentIdx + 1)
    },

    _prev: function() {
        this.go2page(this.options.currentIdx - 1)
    },

    go2page: function(idx) {

        var $current = this.pages[this.options.currentIdx],
            $target = this.pages[idx],
            enter = this._enter,
            leave = this._leave,
            distance = (idx < this.options.currentIdx ? this._distance : -this._distance)

        $($target).one('webkitTransitionEnd', function() {
            $current.classList.remove('current')
            $target.classList.add('current')
            this.hook.didGoToPage($target, $current)
        }.bind(this))

        leave($current, distance)
        enter($target, 0)

        this._moveDist = 0
        this.options.currentIdx = idx
        try{
            if ( getQueryString('version') == 'haihuo' ){
                GoPoint('ZEDQ4H53P'+(idx+1));
            }else {
                GoPoint('ZEDQ4H5P'+(idx+1));
            }
        }catch(e){}
    },

    /**
     * 切页的效果
     * 目前只支持两种效果：
     * 1. Slide（普通的滑动）
     * 2. Scale（缩放滑动）
     */
    slide: function(el, val, need) {
        need = need || 1
        el.style.webkitTransition = (need == 1) ? 'all 0.4s' : ''
        el.style[TRANSFORM] = 'translate3d(' + ('Y' == this.options.direction ? '0, ' + val + 'px' : (val + 'px, 0')) + ',0)'
    },

    scale: function(el, val) {
        el.style.webkitTransition = 'all 0.4s'
        el.style[TRANSFORM] = 'scale(' + (1 - Math.round(Math.abs(val) / this._distance / 4*100) / 100) + ') translateZ(0)'
    }
}
//页面逻辑控制器
var slideController = {
    shouldGoToPrev: function(el) {
        var idx = $(el).index();
        if(idx==8){
           return false;
        } 
        return true;
    },
    shouldGoToNext: function(el) {
        var idx = $(el).index();
        var player=query('#player');
        //如果是2,时空转换未显示则不准下翻
        if(idx==7||idx==8)
        {
           return false;
        }
        
        return true;
    },
    didGoToPage: function(el, prevEl) {

    }
}
//TOUCH点击
function fastClick(el, callback) {
    var handler = {
        handleEvent: function(ev) {
            switch (ev.type) {
                case 'touchstart':
                case 'mousedown':
                    this.start(ev)
                    break
                case 'touchend':
                case 'touchcancel':
                case 'mouseup':
                    this.end(ev)
            }
        },
        start: function(ev) {
            var touch = ev.changedTouches ? ev.changedTouches[0] : ev
            this.clientX = touch.clientX
            this.clientY = touch.clientY
            this.touchTime = +(new Date)
        },
        end: function(ev) {
            if ((typeof this.touchTime != 'undefined') &&
                    (+(new Date) - this.touchTime < 1000)) {
                var touch = ev.changedTouches ? ev.changedTouches[0] : ev
                if ((Math.abs(touch.clientX - this.clientX) < 10 &&
                        Math.abs(touch.clientY - this.clientY) < 10)) {
                    callback && callback(ev)
                }
                this.clientX = this.clientY = this.touchTime = undefined
            }
        }
    }

    var events = ('ontouchstart' in window) ? 
                        ['touchstart', 'touchend', 'touchcancel'] : 
                        ['mousedown', 'mouseup']
    events.forEach(function(ev) {
        el.addEventListener(ev, handler, false)
    })
}
document.addEventListener('touchmove',function (e){
    e.preventDefault();
    return false;
})
var shareConf = {
        title: "你过来，朕教你喂奶.",
        desc: "凡人们，我成了母乳喂养代言人，感觉有点羞羞哒！"
    }
function setShareData(shareData) {
    wx.onMenuShareTimeline({
        title   : shareData.desc,
        link    : shareData.link,
        imgUrl  : shareData.img_url,
        success : function (){
            try{
                _hmt.push(['_trackEvent', 'share', 'event', 'timeline']);
            }catch(e){}
        }
    });
    wx.onMenuShareAppMessage({
        title   : shareData.title,
        desc    : shareData.desc, 
        link    : shareData.link, 
        imgUrl  : shareData.img_url,
        success : function (){
            try{
                _hmt.push(['_trackEvent', 'share', 'event', 'appmessage']);
            }catch(e){}
        }
    });
    wx.onMenuShareQQ({
        title   : shareData.title,
        desc    : shareData.desc, 
        link    : shareData.link, 
        imgUrl  : shareData.img_url,
        success : function (){
            try{
                _hmt.push(['_trackEvent', 'share', 'event', 'toQQ']);
            }catch(e){}
        }
    });
    wx.onMenuShareWeibo({
        title   : shareData.title,
        desc    : shareData.desc, 
        link    : shareData.link, 
        imgUrl  : shareData.img_url,
        success : function (){
            try{
                _hmt.push(['_trackEvent', 'share', 'event', 'other']);
            }catch(e){}
        }
    });
    wx.onMenuShareQZone({
        title   : shareData.title,
        desc    : shareData.desc, 
        link    : shareData.link, 
        imgUrl  : shareData.img_url,
        success : function (){
            try{
                _hmt.push(['_trackEvent', 'share', 'event', 'other']);
            }catch(e){}
        }
    });
}
var initShare = function(config) {
    var url = location.protocol + '//' + location.host + location.pathname.replace(/[^\/]+$/, '')

    var shareData = $.extend({
        img_url: url + (config.imgUrl || 'images/share-icon.jpg'),
        // link: config.link || location.href,
        // img_url:'http://192.168.0.126/babyNurse/temp/'+userPic,
        // link:'http://192.168.0.126/babyNurse/myphoto.php?name='+userPic,
        link:location.href,
        desc: config.desc || '',
        title: config.title || ''
    }, config)



    $.ajax({
        type    : "post",
        url     : 'http://www2.bigbone.cn/wxjssdk/signature.php',
        // url     : 'http://noxxbyou.imwork.net/frontshare/include/signature.php',
        dataType: "json",
        success : function(result) {
                    wx.config({
                        debug       : false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，
                        appId       : result.appid, // 必填，公众号的唯一标识
                        timestamp   : result.timestamp, // 必填，生成签名的时间戳
                        nonceStr    : result.nonceStr, // 必填，生成签名的随机串
                        signature   : result.signature,// 必填，签名
                        jsApiList   : ["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone"] // 必填，需要使用的JS接口列表
                    })
                    wx.ready(function() {
                        setShareData(shareData)
                    })
                }.bind(this),
        fail    : function(e){}
    })
}
var initMusic = function(url) {
    var music = {
        autoplay: true,
        color: "rgba(255,255,255,0.5)",
        loop: true,
        position: "ne",
        src: url
    }
    if (!music || !music.src) return

    var className = 'playing'
    var trigger = 'ontouchend' in document? 'touchstart': 'click'
    var $music = document.createElement('div')
    var $audio = document.createElement('audio')
    var mc = music.color||'#fff'
    var mp = 'music '+(music.position||'nw')
    var html = '<svg fill="'+mc+'" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 64 64"><path d="M32.01 15.02c-9.39 0-17 7.61-17 17 0 9.388 7.61 17 17 17s17-7.612 17-17c0-9.39-7.612-17-17-17zm0 32c-8.285 0-15-6.716-15-15 0-8.284 6.715-15 15-15 8.283 0 15 6.716 15 15 0 8.284-6.717 15-15 15zm7.144-24.97c-.052-.007-.1-.03-.154-.03-.147 0-.284.035-.41.092l-9.677 1.88c-.082.016-.152.058-.227.092-.046.015-.09.032-.132.053-.017.01-.032.02-.048.033-.226.132-.388.344-.456.604-.004.012-.004.024-.007.036-.016.07-.043.135-.043.21v9.142c-1.057-.296-2.376-.125-3.584.58-2.02 1.182-2.95 3.384-2.074 4.917.875 1.534 3.223 1.82 5.242.64 1.646-.963 2.548-2.598 2.36-4.002.026-.09.056-.18.056-.28V25.815l8-1.554v7.902c-1.057-.296-2.376-.125-3.584.58-2.02 1.182-2.95 3.384-2.074 4.917.875 1.534 3.223 1.82 5.242.64 1.646-.963 2.548-2.598 2.36-4.002.026-.09.056-.18.056-.28v-11c0-.018-.01-.035-.01-.054 0-.037.014-.073.01-.11-.04-.467-.4-.78-.846-.803zM26.528 38.448c-1.01.59-2.065.654-2.357.143-.29-.512.292-1.405 1.303-1.996 1.01-.59 2.065-.654 2.356-.143.29.514-.292 1.406-1.302 1.997zm10-2c-1.01.59-2.065.654-2.357.143-.29-.512.292-1.405 1.303-1.996 1.01-.59 2.065-.654 2.356-.143.29.514-.292 1.406-1.302 1.997z"/></svg><span style="background-color:'+mc+'"></span>'

    $music.className = mp
    $music.innerHTML = html
    $audio.src = music.src

    function start() {
        document.removeEventListener(trigger, start, false)
        if (!$audio.paused) return
        $audio.play()
    }
    
    function toggle(e) {
        e.stopPropagation()
        if (!$audio.paused) return $audio.pause()
        $audio.play()
    }

    function play(e) {
        $music.classList.add(className)
    }

    function pause(e) {
        $music.classList.remove(className)
    }

    $audio.addEventListener('play', play, false)
    $audio.addEventListener('pause', pause, false)
    $music.addEventListener('click', toggle, false)

    if (music.loop) $audio.loop = "loop"
    else $audio.addEventListener('ended', pause, false)

    if (music.autoplay) $audio.autoplay = "autoplay"

    document.body.appendChild($music)
    document.body.appendChild($audio)
    document.addEventListener(trigger, start, false)
}

//设置所有模板为灰色
function setTmpGrey(){
     var tpSiye=query('#tpSiye');
     var tpNatasha=query('#tpNatasha');
     var tpWumei=query('#tpWumei');
     var tpLvju=query('#tpLvju');
     var tpDufu=query('#tpDufu');
     var tpSuper=query('#tpSuper');
     tpSiye.className="tpSiyeG";
     tpNatasha.className="tpNatashaG";
     tpWumei.className="tpWumeiG";
     tpLvju.className="tpLvjuG";
     tpDufu.className="tpDufuG";
     tpSuper.className="tpSuperG";
}

var selectTmpName="";
var canvasbox = document.querySelector('body');
var userPic="";
window.pageInit = function (){
    var slider = new Slider({
        slideWrap: '.pages',
        slideItem: '.page',
        direction: 'Y',
        currentIdx: 0,
        followFinger: false,
        slideController: slideController
    })

    var tpSiye=query('#tpSiye');
     var tpNatasha=query('#tpNatasha');
     var tpWumei=query('#tpWumei');
     var tpLvju=query('#tpLvju');
     var tpDufu=query('#tpDufu');
     var tpSuper=query('#tpSuper');
     var p8btnOk=query('.p8-btnOk');
     var btnShare=query('.p10-btnShare');//去装x按钮，收集分享信息
     var ReSelect=query('.btnReSelect');
    


     var shareWaps=query('.shareWaps');

    fastClick(tpSiye,function(){
            setTmpGrey();
            tpSiye.className="tpSiyeL";
            selectTmpName="siye";
    });
    fastClick(tpNatasha,function(){
            setTmpGrey();
            tpNatasha.className="tpNatashaL";
            selectTmpName="natasha";
    });
    fastClick(tpWumei,function(){
            setTmpGrey();
            tpWumei.className="tpWumeiL";
            selectTmpName="wumei";
    });
    fastClick(tpLvju,function(){
            setTmpGrey();
            tpLvju.className="tpLvjuL";
            selectTmpName="lvju";
    });
    fastClick(tpDufu,function(){
            setTmpGrey();
            tpDufu.className="tpDufuL";
            selectTmpName="dufu";
    });
    fastClick(tpSuper,function(){
            setTmpGrey();
            tpSuper.className="tpSuperL";
            selectTmpName="super";
    });
    fastClick(p8btnOk,function(){
        if(""==selectTmpName)
        {
            alert('请选择模版!');
            return ;
        }else
        {
            var tmp=query('#p9-selectTmp');
            tmp.className='p9-selectTmp'+selectTmpName;
            var tmpK=query('#tmpK');
            tmpK.className=selectTmpName+'K';
            var doneimgwrap=query('.doneimgwrap');
            doneimgwrap.style.display="block";
            //跳到下一页
            slider.go2page(8);
        }
    });
    fastClick(ReSelect,function(){
        slider.go2page(7);
    })

    //去装x ,出现浮层
    fastClick(btnShare,function(){
       
         //浮层出现
         //shareWaps.style.display='block';
         location.href='http://m.beibei.com/forum/post/detail.html?post_id=107736&beibeiapp_info={"target":"bb/forum/post_detail","post_id":107736,"ver":"4.1.0"}';
    });

    fastClick(shareWaps,function(){
        shareWaps.style.display='none';
    })

    var file = document.querySelector('#file');
    // var reupload = document.querySelector('#reupload');
    // var okbtn = document.querySelector('.okbtn');
    var savebtn = document.querySelector('.savebtn');
    var turnR = document.querySelector('.turnR');
     var turnL = document.querySelector('.turnL');
      var moveUp = document.querySelector('.moveUp');
      var moveDown = document.querySelector('.moveDown');
      var moveLeft = document.querySelector('.moveLeft');
      var moveRight = document.querySelector('.moveRight');
    // var longtapwrap = document.querySelector('.longtapwrap');
    // var closebtn = document.querySelector('.closebtn');
    // var doneimgwrap = document.querySelector('.doneimgwrap');
    // var detail = document.querySelector('.detail');
    // var closebtn = document.querySelector('.closebtn');
    
    // initMusic('./media/music.mp3');
   


    var mc = new Hammer(canvasbox);
    mc.get('pinch').set({ enable: true });
    mc.get('pan').set({direction: Hammer.DIRECTION_VERTICAL});//上下
    mc.get('pan').set({direction: Hammer.DIRECTION_HORIZONTAL});//左右
    mc.on("pinchstart", function(e) {
        canvasbox.scaleX = fCustomImg.scaleX;
        canvasbox.scaleY = fCustomImg.scaleY;
    });
    mc.on("pinch", function(e) {
        var scale = e.scale;
        fCustomImg.scaleX = canvasbox.scaleX*scale;
        fCustomImg.scaleY = canvasbox.scaleY*scale;
        canvas.renderAll();
    });
    mc.on("pan", function(e) {
       
        canvas.renderAll();
    })


    file.addEventListener('change',function (){
        $('.indexbox').hide();
        $('.mainbox').show();
        fileChangeHandler(file.files[0]);
    })
    reupload.addEventListener('change',function (){
        fileChangeHandler(reupload.files[0]);
    })

     fastClick(savebtn,function (){
        // var type = Math.floor(4*Math.random());
        var type = selectTmpName;
        var url = location.protocol + '//' + location.host + location.pathname.replace(/[^\/]+$/, '');
        var obj = {
            "type": type,
            // "number": number,
            "path": url,
            "imageData": canvas.toDataURL()
        }
        if ( window.imgsrc ){
            saveCallback(window.imgsrc);
        }else {
            $.ajax({
                type: 'POST',
                url: url+'base64.php',
                // url: 'http://192.168.0.126/babyNurse/base64.php',
                 // url: 'http://frontshare.duapp.com/apps/a20160804babyNurse/base64.php',
                   // url: 'http://192.168.1.8/bigbone/babyNurse/base64.php',
                dataType: 'json',
                data: obj,
                success:function (res){
                    window.imgsrc = res;
                    saveCallback(res);
                },
                error: function (e){
                    
                    console.log(e)
                }
            })     
        }

    })

      function saveCallback(res){
        slider.go2page(9);
        document.querySelector('#doneImg').src = res;
        
         var doneImg=query('#doneImg');
        var startIndex=doneImg.src.lastIndexOf('/');
        var length=doneImg.src.length;
        userPic=doneImg.src.substring(startIndex+1,length);
         var url = location.protocol + '//' + location.host + location.pathname.replace(/[^\/]+$/, '');
        
         
         shareConf.img_url = doneImg.src;
         shareConf.link = url+'myphoto.php?name='+userPic;
         console.log(shareConf);
         setShareData(shareConf); 
        // $('.doneimgwrap').show();
        // if ( !$('.longtapwrap').data('hasShown') )
        // {
        //     $('.longtapwrap').show();
        //     setTimeout(function (){
        //         $('.longtapwrap').hide();
        //     },2000)
        //     $('.longtapwrap').data('hasShown',true);
        // }
    }
       
   
    // fastClick(detail,function (){
    //     $('.rulewrap').show();
    // })
    // fastClick(closebtn,function (){
    //     $('.rulewrap').hide();
    // })
    // fastClick(closebtn,function (){
    //     $('.rulewrap').hide();
    // })
    fastClick(turnR,function (){
        var angle = fCustomImg.angle || 0;
        fCustomImg.angle = angle + 10;
        canvas.renderAll();
    })
     fastClick(turnL,function (){
        var angle = fCustomImg.angle || 0;
        fCustomImg.angle = angle - 10;
        canvas.renderAll();
    })
      fastClick(moveUp,function (){
        var top = fCustomImg.top || 0;
        fCustomImg.top = top - 10;
        canvas.renderAll();
    })
     fastClick(moveDown,function (){
        var top = fCustomImg.top || 0;
        fCustomImg.top = top + 10;
        canvas.renderAll();
    })
     fastClick(moveLeft,function (){
        var left = fCustomImg.left || 0;
        fCustomImg.left = left - 10;
        canvas.renderAll();
    })
      fastClick(moveRight,function (){
        var left = fCustomImg.left || 0;
        fCustomImg.left = left + 10;
        canvas.renderAll();
    })

    initShare(shareConf)
   
}
