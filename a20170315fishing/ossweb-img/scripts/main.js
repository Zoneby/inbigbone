;(function (){
    var video;
    var ua = navigator.userAgent.toLowerCase();
    var device = {};
    device.isIOS = ua.match(/iphone os/i) == "iphone os";
    device.isAndroid = ua.match(/android/i) == "android";
    device.isWx = ua.match(/MicroMessenger/i) == "micromessenger";

    //整个应用的控制变量
    var app = {};
    //视频元素的设置
    app.initVideo = function (){

        video = document.querySelector('#mainvideo');
        video.addEventListener('timeupdate',function (){
            
            if ( !video.isPlayed && this.currentTime>0.1 ){
                // app.startPlay();
                $('.pagestart').fadeOut(300);
                video.isPlayed = !0;
            }
            // if (this.currentTime>44){
            //     app.videoEndCallback();
            // }
        })
        video.addEventListener('ended',app.videoEndCallback);
    }
    app.videoEndCallback = function (){
        $('.pageend').css('display','block');
        if (device.isAndroid){
            $('.videobox').hide().css({zIndex:-1});
        }
        $('.pagestart').remove();
    }
    //开始按钮回调
    app.startPlay = function (){
        video.style.display = 'block';
        video.play();
    }
    app.checkJSBridge = function (){
        app.bridgeTimer = setInterval(function (){
            if (app.wxBridgeReady){
                app.startPlay();
                clearInterval(app.bridgeTimer);
            }
        },50)
    }
    $(function (){
        app.initVideo();
        document.addEventListener("WeixinJSBridgeReady", function (){
            video.play();
            video.pause();
            app.wxBridgeReady = !0;
        }, false)
        $('.bar_inner').on('webkitAnimationEnd',function (){
            app.barComplete = !0;
            if ( !device.isWx || device.isAndroid){
                $('.clickme').show();
            }
        })
        $('.btn_share').on('click',function (){$('.sharewrap').show();})
        $('.sharewrap').on('click',function (){$('.sharewrap').hide();})
        $('.btn_download').on('click',function (){
            try{PTTSendClick('btn','download','下载按钮');}catch(e){};
            location.href = 'http://www.qq.com';
        })
        if (device.isIOS && device.isWx){
            $('.bar_inner').on('webkitAnimationEnd',app.checkJSBridge);
        }
        $('.pagestart').on('touchend',function (){
            if (!app.barComplete)return;
            app.startPlay();
        });
    })
})();