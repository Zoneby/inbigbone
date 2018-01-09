var deviceType;
var playVideoTimes = 0;
var callLevel = 1;
var videoPauseTime = [32.1, 96.9, 158.7, 227.9, 289.9, 320.5];
var touchState = true;
var touchCountState = false;
var showShare = false;
var runInterval;
var touchInterval;
var video = document.getElementById("video");
var audioOpen = $("#open-all")[0];
var audioHeartEnd = $("#heart-end")[0];
var audioBrainEnd = $("#brain-end")[0];
var audioCall1 = $("#audio-call1")[0];
var audioCall2 = $("#audio-call2")[0];
var audioBg = $("#audio-bg")[0];
var audioRun1 = $("#audio-run1")[0];
var audioRun2 = $("#audio-run2")[0];
var audioRun3 = $("#audio-run3")[0];
var audioBtn = $("#audio-btn")[0];
var audioMessage = $("#audio-message")[0];
var videoStateInterval, videoTimeInterval, videoEndInterval;
var winWidth = $(window).width();
var winHeight = $(window).height();
var videoWidth = winHeight * 800 / 1024;
var videoHeight = winHeight;
var canvas = document.getElementById("headCanvas");
var ctx = canvas.getContext("2d");
canvas.width = videoWidth;
canvas.height = videoHeight;
$("#headCanvas").css({
    marginLeft: (winWidth - videoWidth) / 2
});
var runImgList = [];
var runImgSrc = ["http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/run/run_00.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/run/run_01.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/run/run_02.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/run/run_03.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/run/run_04.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/run/run_05.png", ];
var runImgLength = runImgSrc.length;
var curImg = 0;
var runSpeed = 200;
var touchTimes = 0;
var wholeTouchTime;
var brainOff = true,
eyeOff = true;
var brainViewed = false,
eyeViewed = false;
document.ontouchmove = function(e) {
    e.preventDefault()
};
document.addEventListener("DOMContentLoaded",
function() {
    deviceType = browserRedirect();
    if (deviceType == "pc") {
        $(".pcPage").show()
    } else {
        if (deviceType == "android") {
            $(".mobilePage").show();
            mobileResize();
            androidVideo()
        } else {
            if (deviceType == "ios") {
                $(".mobilePage").show();
                mobileResize();
                iosVideo()
            }
        }
    }
});
function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (! (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)) {
        deviceType = "pc"
    }
    if (bIsAndroid) {
        deviceType = "android"
    }
    if (bIsIphoneOs) {
        deviceType = "ios"
    }
    return deviceType
}
function loadCanvasImg(imgLength, imgList, imgSrc) {
    for (var i = 0; i < imgLength; i++) {
        imgList[i] = new Image();
        imgList[i].src = imgSrc[i];
        if (i == imgLength - 1) {
            var loadNum = 0;
            for (var j = 0; j < imgList.length; j++) {
                imgList[j].onload = function() {
                    loadNum++;
                    if (loadNum == imgList.length) {}
                }
            }
        }
    }
}
var loading = ["http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/loading/1.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/loading/2.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/loading/3.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/loading/4.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/loading/5.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/loading/6.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/loading/7.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/loading/8.png", ];
var loadPic = ["http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/door/door_6.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/door/door_1.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/door/door_2.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/door/door_3.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/door/door_4.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/door/door_5.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/welcome_text1.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/welcome_text2.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/welcome_text3.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/welcome_text4.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/door/door_bg.jpg", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/door/door_left.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/door/door_right.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/door/door_model.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/door/door_room.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/model.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/brand.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/brain-line.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/brain.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/brain-title.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/eye.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/eye-line.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/eye-title.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/heart.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/heart-line.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/heart-title.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/brain_light_off.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/brain_light_on.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/eye_light_off.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/eye_light_on.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/heart_light_off.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/heart_light_on.png", ];
var loadPicLater = ["http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/eye_unplay.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/sologan.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/call_page.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/click_tips.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/hand_tips.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/listen_bg.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/listen_icon.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/message.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/call/call_00.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/call/call_01.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/call/call_02.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/call/call_03.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/call/call_04.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/call/call_05.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/call/call_06.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/call/call_07.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/call/call_08.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/brand_1.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/brand_2.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/brand_3.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/share_btn.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/share_eye.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/share_hand.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/share_heart.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/share_text.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/share_wrap.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/intro_pop.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/intro_btn.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/intro_title.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/intro_title2.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/intro_text1.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/intro_text2.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/intro_organ1.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/intro_organ2.png", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/img/intro_organ3.png", ];
function loadImages(sources, callback) {
    var loadedImages = 0;
    var numImages = 0;
    var images = [];
    numImages = sources.length;
    for (var i = 0,
    len = sources.length; i < len; i++) {
        images[i] = new Image();
        images[i].onload = function() {
            if (++loadedImages >= numImages) {
                callback(images)
            }
        };
        images[i].src = sources[i]
    }
}
function playSound(id) {
    var audio = document.getElementById(id),
    play = function() {
        audio.play()
    };
    audio.play();
    document.addEventListener("WeixinJSBridgeReady",
    function() {
        play()
    },
    false)
}
function pcVideo() {
    $(".loadMask").hide();
    video.play();
    pauseVideo(video, videoPauseTime[0],
    function() {
        audioOpen.play();
        showModel()
    })
}
function androidVideo() {
    $("#video").addClass("videoScale");
    $("#video").attr("src", "http://w-wx.oss-cn-hangzhou.aliyuncs.com/android.mp4");
    setTimeout(function() {
        $(".android-hand-tips").show()
    },
    1500);
    $(".loading").on("click",
    function() {
        video.play();
        $(".android-hand-tips,.loadMask,.loading").hide()
    });
    setTimeout(function() {
        $(".android-hand-tips").hide()
    },
    6000);
    audioOpen.play();
    audioOpen.pause();
    audioHeartEnd.play();
    audioHeartEnd.pause();
    audioBrainEnd.play();
    audioBrainEnd.pause();
    audioMessage.play();
    audioMessage.pause();
    audioCall1.play();
    audioCall1.pause();
    audioCall2.play();
    audioCall2.pause();
    audioBg.play();
    audioBg.pause();
    audioRun1.play();
    audioRun1.pause();
    audioRun2.play();
    audioRun2.pause();
    audioRun3.play();
    audioRun3.pause();
    loadImages(loading,
    function() {});
    loadImages(loadPic,
    function() {});
    loadImages(loadPicLater,
    function() {});
    pauseVideo(video, videoPauseTime[0],
    function() {
        showModel()
    })
}
function iosVideo() {
    loadImages(loading,
    function() {});
    loadImages(loadPic,
    function() {});
    playVideo();
    loadImages(loadPicLater,
    function() {})
}
function pcResize() {
    $("#video").width("800px");
    $("#video").height("1024px");
    $("#video").css({
        position: "absolute",
        marginLeft: "-400px",
        left: "50%",
        marginTop: "-512px",
        top: "50%",
    });
    canvas.width = 800;
    canvas.height = 1024;
    videoWidth = 800;
    videoHeight = 1024;
    $("#headCanvas").css({
        position: "absolute",
        marginLeft: "-400px",
        left: "50%",
        marginTop: "-512px",
        top: "50%",
    });
    $("body").addClass("pcStyle");
    $(".pcStyle>div").css({
        width: "800px",
        height: "1024px",
        position: "absolute",
        marginLeft: "-400px",
        left: "50%",
        marginTop: "-512px",
        top: "50%",
        overflow: "hidden"
    });
    $(".shareWrap").attr("style", "");
    $(".shareWrap").css({
        width: "8rem",
        left: "50%",
        marginLeft: "-4rem"
    })
}
function mobileResize() {
    $("video").width(videoWidth);
    $("video").height(videoHeight);
    $("video").css({
        marginLeft: (winWidth - videoWidth) / 2
    });
    $(".loadMask,.runHead").width(videoWidth);
    $(".loadMask,.runHead").height(videoHeight);
    $(".loadMask,.runHead").css({
        marginLeft: (winWidth - videoWidth) / 2
    })
}
function playVideo() {
    if (typeof WeixinJSBridge == "undefined") {
        document.addEventListener("WeixinJSBridgeReady", init, false)
    } else {
        location.replace("http://care.wearewer.com?v=12")
    }
    function init() {
        video.controls = false;
        audioOpen.play();
        audioOpen.pause();
        audioHeartEnd.play();
        audioHeartEnd.pause();
        audioBrainEnd.play();
        audioBrainEnd.pause();
        audioMessage.play();
        audioMessage.pause();
        audioCall1.play();
        audioCall1.pause();
        audioCall2.play();
        audioCall2.pause();
        audioBg.play();
        audioBg.pause();
        audioRun1.play();
        audioRun1.pause();
        audioRun2.play();
        audioRun2.pause();
        audioRun3.play();
        audioRun3.pause();
        video.play();
        video.pause();
        setTimeout(function() {
            $(".loadMask,.loading").hide();
            video.play()
        },
        4500);
        pauseVideo(video, videoPauseTime[0],
        function() {
            audioOpen.play();
            showModel()
        })
    }
}
function pauseAndroid(videoId, pauseTime, callback) {
    var videoTimeInterval = setInterval(function() {
        if (videoId.currentTime.toFixed(2) == pauseTime) {
            if (deviceType == "android") {
                $("#video").hide()
            }
            videoId.pause();
            callback();
            clearInterval(videoTimeInterval)
        }
    },
    10)
}
function pauseVideo(videoId, pauseTime, callback) {
    var videoTimeInterval = setInterval(function() {
        $(".currentTime").text(videoId.currentTime.toFixed(1));
        if (videoId.currentTime.toFixed(1) == pauseTime) {
            if (deviceType == "android") {
                $("#video").hide()
            }
            videoId.pause();
            callback();
            clearInterval(videoTimeInterval)
        }
    },
    10)
}
function showDoor() {
    $(".doorWrap").show();
    var tl = new TimelineLite();
    tl.staggerTo(".doorScale", 2, {
        scale: 1.7,
        ease: "easeInExpo"
    },
    0.5);
    var tl2 = new TimelineLite();
    tl2.staggerTo(".doorScale", 1, {
        opacity: 1,
        ease: "linear"
    },
    0.5);
    TweenMax.to($(".door6>img"), 0.5, {
        delay: 1.5,
        opacity: 0,
        ease: "linear"
    });
    TweenMax.to($(".door5>img"), 0.5, {
        delay: 2,
        opacity: 0,
        ease: "linear"
    });
    TweenMax.to($(".door4>img"), 0.5, {
        delay: 2.5,
        opacity: 0,
        ease: "linear"
    });
    TweenMax.to($(".door3>img"), 0.5, {
        delay: 3,
        opacity: 0,
        ease: "linear"
    });
    TweenMax.to($(".door2>img"), 0.5, {
        delay: 3.5,
        opacity: 0,
        ease: "linear"
    });
    TweenMax.to($(".door1>img"), 0.5, {
        delay: 4,
        opacity: 0,
        ease: "linear"
    });
    TweenMax.to($(".doorBg>img"), 0.2, {
        delay: 0,
        opacity: 1,
        ease: "linear"
    });
    TweenMax.to($(".doorBg>img"), 4, {
        delay: 0,
        scale: 1.2,
        ease: "easeInExpo",
        onComplete: function() {
            TweenMax.killTweensOf($(".doorBg>img"))
        }
    });
    TweenMax.to($(".door0Wrap,.doorRoom>img,.doorModel>img"), 1, {
        delay: 3,
        opacity: 1,
        ease: "linear"
    });
    TweenMax.to($(".door0Wrap"), 2, {
        delay: 3,
        scale: 0.6,
        ease: "easeInExpo",
        onComplete: function() {
            TweenMax.killTweensOf($(".door0Wrap"))
        }
    });
    TweenMax.to($(".doorLeft>img,.doorRight>img"), 1.5, {
        delay: 4,
        rotationY: -90,
        ease: "linear"
    });
    TweenMax.to($(".doorRoom>img"), 2.5, {
        delay: 4.5,
        scale: 2.8,
        ease: "easeInQuad",
        onComplete: function() {
            TweenMax.killTweensOf($(".doorRoom>img"))
        }
    });
    TweenMax.to($(".doorModel>img"), 2.8, {
        delay: 5,
        scale: 0.72,
        marginTop: "-9.7rem",
        marginLeft: "-6.6rem",
        ease: "easeInQuad",
        onComplete: function() {
            TweenMax.killTweensOf($(".doorModel>img"));
            showOrgan()
        }
    })
}
function showOrgan() {
    $(".door1,.door2,.door3,.door4,.door5,.door6,.doorLeft,.doorRight").hide();
    TweenMax.to($(".brand"), 1.5, {
        delay: 1,
        top: "-0.9rem",
        opacity: 0.6,
        ease: "easeOutBack"
    });
    setTimeout(function() {
        $(".blackMask").fadeIn()
    },
    4000)
}
function showText() {
    TweenMax.to($(".welcomText1"), 0.5, {
        delay: 0,
        opacity: 1,
        ease: "easeIn"
    });
    TweenMax.to($(".welcomText1"), 0.1, {
        delay: 3,
        opacity: 0,
        ease: "easeIn"
    });
    TweenMax.to($(".welcomText2"), 0.5, {
        delay: 3.9,
        opacity: 1,
        ease: "easeIn"
    });
    TweenMax.to($(".welcomText2"), 0.1, {
        delay: 6.8,
        opacity: 0,
        ease: "easeIn"
    });
    TweenMax.to($(".welcomText3"), 0.5, {
        delay: 6.8,
        opacity: 1,
        ease: "easeIn"
    });
    TweenMax.to($(".welcomText3"), 0.1, {
        delay: 8.3,
        opacity: 0,
        ease: "easeIn"
    });
    TweenMax.to($(".welcomText4"), 0.5, {
        delay: 8.3,
        opacity: 1,
        ease: "easeIn"
    });
    TweenMax.to($(".welcomText4"), 0.1, {
        delay: 12,
        opacity: 0,
        ease: "easeIn"
    })
}
function showViewed() {
    $(".modelBg").fadeIn(800);
    $(".model").fadeIn(1000);
    $(".eyeTitle,.brainTitle").addClass("titleAmi");
    $(".eyePlay,.brainPlay").addClass("playAmi");
    TweenMax.to($(".shareWrap"), 1, {
        delay: 1.5,
        bottom: "0rem",
        opacity: 1,
        ease: "easeIn"
    });
    TweenMax.to($(".brand"), 1.5, {
        delay: 1,
        top: "-0.9rem",
        opacity: 0.6,
        ease: "easeOutBack"
    });
    setTimeout(function() {
        playModel();
        runAmin()
    },
    4000)
}
function brainEndAmin() {
    audioBrainEnd.play();
    $(".videoEndTips").show();
    $(".brainEndText").show();
    $(".modelBg").fadeIn(200);
    $(".model").fadeIn(200);
    TweenMax.to($(".brand1"), 1.5, {
        delay: 1,
        top: "-0.9rem",
        ease: "easeOutBack"
    });
    TweenMax.to($(".brand2"), 1, {
        delay: 2.5,
        top: "4rem",
        opacity: 1,
        ease: "easeIn",
        onComplete: function() {
            $(".brainEndText").addClass("heartAmi")
        }
    });
    TweenMax.to($(".brand3"), 1, {
        delay: 3.5,
        top: "-0.9rem",
        opacity: 1,
        ease: "easeOutBack"
    });
    TweenMax.to($(".shareWrap"), 1, {
        delay: 0.5,
        bottom: "0rem",
        opacity: 1,
        ease: "easeIn"
    })
}
function heartEndAmin() {
    audioHeartEnd.play();
    $(".videoEndTips").show();
    $(".heartEndText").show();
    $(".modelBg").fadeIn(200);
    $(".model").fadeIn(200);
    TweenMax.to($(".brand1"), 1.5, {
        delay: 1,
        top: "-0.9rem",
        ease: "easeOutBack"
    });
    TweenMax.to($(".brand2"), 1, {
        delay: 2.5,
        top: "4rem",
        opacity: 1,
        ease: "easeIn",
        onComplete: function() {
            $(".heartEndText").addClass("heartAmi")
        }
    });
    TweenMax.to($(".brand3"), 1, {
        delay: 3.5,
        top: "-0.9rem",
        opacity: 1,
        ease: "easeOutBack"
    });
    TweenMax.to($(".shareWrap"), 1, {
        delay: 0.5,
        bottom: "0rem",
        opacity: 1,
        ease: "easeIn"
    })
}
function showModel() {
    $("#video").hide();
    audioRun1.pause();
    audioRun2.pause();
    audioRun3.pause();
    $(".modelWrap").show();
    if (showShare) {
        brainOff = false;
        eyeOff = false;
        $(".doorWrap").hide();
        if (brainViewed) {
            brainEndAmin();
            setTimeout(function() {
                $(".videoEndTips").fadeOut();
                showViewed()
            },
            12000)
        }
        if (heartViewed) {
            heartEndAmin();
            setTimeout(function() {
                $(".videoEndTips").fadeOut();
                showViewed()
            },
            12000)
        }
    } else {
        audioOpen.play();
        setTimeout(function() {
            showText()
        },
        1000);
        showDoor();
        setTimeout(function() {
            playModel();
            loadCanvasImg(runImgLength, runImgList, runImgSrc);
            runAmin()
        },
        9000)
    }
    if (brainOff) {
        $(".brainLightWrap li").attr("class", "brainLightOff")
    } else {
        var brainLightNum = 1;
        var brainInterval = setInterval(function() {
            $(".brainLightWrap li").eq(brainLightNum).attr("class", "brainLightOn").siblings().attr("class", "brainLightOff");
            if (brainLightNum == 2) {
                brainLightNum = 0
            } else {
                brainLightNum++
            }
        },
        400)
    }
    if (eyeOff) {
        $(".eyeLightWrap li").attr("class", "eyeLightOff")
    } else {
        var eyeLightNum = 1;
        var eyeInterval = setInterval(function() {
            $(".eyeLightWrap li").eq(eyeLightNum).attr("class", "eyeLightOn").siblings().attr("class", "eyeLightOff");
            if (eyeLightNum == 2) {
                eyeLightNum = 0
            } else {
                eyeLightNum++
            }
        },
        400)
    }
    var heartLightNum = 1;
    var heartInterval = setInterval(function() {
        $(".heartLightWrap li").eq(heartLightNum).attr("class", "heartLightOn").siblings().attr("class", "heartLightOff");
        if (heartLightNum == 2) {
            heartLightNum = 0
        } else {
            heartLightNum++
        }
    },
    200)
}
function playModel() {
    TweenMax.to($(".eyeWrap"), 1, {
        top: "-0.35rem",
        opacity: 1,
        ease: "easeOutBack",
        onComplete: function() {
            if (showShare) {
                TweenMax.to($(".eye"), 0.7, {
                    opacity: 1,
                    repeat: -1,
                    yoyo: true
                })
            }
        }
    });
    TweenMax.to($(".brainWrap"), 1, {
        delay: 0.5,
        top: 0,
        opacity: 1,
        ease: "easeOutBack",
        onComplete: function() {
            if (showShare) {
                TweenMax.to($(".brain"), 0.7, {
                    opacity: 1,
                    repeat: -1,
                    yoyo: true
                })
            }
        }
    });
    TweenMax.to($(".heartWrap"), 1, {
        delay: 1.2,
        top: "-0.4rem",
        opacity: 1,
        ease: "easeOutBack",
        onComplete: function() {
            $(".heart").addClass("heartAmi")
        }
    })
}
$(".heart").on("click",
function() {
    _hmt.push(["_trackEvent", "button", "click", "点击心脏按钮"]);
    audioOpen.pause();
    audioHeartEnd.pause();
    audioBrainEnd.pause();
    heartViewed = true;
    brainViewed = false;
    showShare = true;
    video.currentTime = 32.2;
    TweenMax.to($(".handWrap>div"), 0.2, {
        opacity: 0
    });
    TweenMax.to($(".brainWrap"), 1, {
        delay: 0,
        top: "-11rem",
        opacity: 1,
        ease: "easeOut"
    });
    TweenMax.to($(".eyeWrap"), 1, {
        delay: 0,
        top: "-11rem",
        opacity: 1,
        ease: "easeOut"
    });
    TweenMax.to($(".heartWrap"), 1, {
        delay: 1.2,
        top: "-11rem",
        opacity: 1,
        ease: "easeOut",
        onComplete: function() {}
    });
    TweenMax.to($(".brand"), 1, {
        delay: 1.2,
        top: "-4.34rem",
        opacity: 0,
        ease: "easeOut"
    });
    TweenMax.to($(".doorModel img"), 1, {
        delay: 2,
        scale: 0.9,
        ease: "easeIn",
        opacity: 0,
    });
    TweenMax.to($(".model,.modelBg"), 1, {
        delay: 2,
        scale: 1.5,
        ease: "easeIn",
        opacity: 0,
        onComplete: function() {
            $(".modelWrap").hide();
            clearAmin();
            playHeart()
        }
    });
    TweenMax.to($(".shareWrap"), 1, {
        delay: 1.5,
        bottom: "-2.6rem",
        opacity: 0,
        ease: "easeIn"
    })
});
$(".eye").on("click",
function() {
    _hmt.push(["_trackEvent", "button", "click", "点击眼睛按钮"]);
    if ($(this).hasClass("eyeClick")) {
        $(this).removeClass("eyeClick");
        TweenMax.to($(".eyeUnplay"), 0.2, {
            opacity: 0
        })
    } else {
        $(this).addClass("eyeClick");
        TweenMax.to($(".eyeUnplay"), 0.2, {
            opacity: 1
        })
    }
});
$(".brain").on("click",
function() {
    _hmt.push(["_trackEvent", "button", "click", "点击大脑按钮"]);
    audioOpen.pause();
    audioHeartEnd.pause();
    audioBrainEnd.pause();
    brainViewed = true;
    heartViewed = false;
    showShare = true;
    video.currentTime = 232;
    TweenMax.to($(".handWrap>div"), 0.2, {
        opacity: 0
    });
    TweenMax.to($(".heartWrap"), 1, {
        delay: 0,
        top: "-11rem",
        opacity: 1,
        ease: "easeOut"
    });
    TweenMax.to($(".eyeWrap"), 1, {
        delay: 0,
        top: "-11rem",
        opacity: 1,
        ease: "easeOut"
    });
    TweenMax.to($(".brainWrap"), 1, {
        delay: 1.2,
        top: "-11rem",
        opacity: 1,
        ease: "easeOut",
        onComplete: function() {}
    });
    TweenMax.to($(".brand"), 1, {
        delay: 1.2,
        top: "-4.34rem",
        opacity: 0,
        ease: "easeOut"
    });
    TweenMax.to($(".model,.modelBg"), 1, {
        delay: 2,
        scale: 1.5,
        ease: "easeIn",
        opacity: 0,
        onComplete: function() {
            $(".modelWrap").hide();
            clearAmin();
            playBrain()
        }
    });
    TweenMax.to($(".shareWrap"), 1, {
        delay: 1.5,
        bottom: "-2.6rem",
        opacity: 0,
        ease: "easeIn"
    })
});
function playHeart() {
    $("#video").show();
    video.play();
    pauseVideo(video, videoPauseTime[1],
    function() {
        audioCall1.play();
        video.currentTime = 99.1;
        $("#video").hide();
        showCallPage()
    })
}
function playBrain() {
    $("#video").show();
    video.play();
    pauseVideo(video, videoPauseTime[4],
    function() {
        $("#video").hide();
        $("#headCanvas").show();
        showRunPage();
        video.currentTime = 290.5
    })
}
function showRunPage() {
    wholeTouchTime = 0;
    touchState = true;
    $(".runPage").fadeIn();
    audioBg.play();
    TweenMax.to($(".message"), 1, {
        delay: 1,
        top: "0rem",
        opacity: 1,
        ease: "easeIn"
    });
    setTimeout(function() {
        audioMessage.play()
    },
    1000);
    TweenMax.to($(".click-tips"), 1, {
        delay: 3,
        opacity: 1,
        ease: "easeIn"
    });
    setTimeout(function() {
        $(".hand-tips").show()
    },
    3000);
    TweenMax.to($(".hand-tips"), 0.5, {
        delay: 3,
        opacity: 1,
        ease: "linear",
        yoyo: true,
        repeat: -1
    });
    setTimeout(function() {
        TweenMax.to($(".message"), 0.8, {
            delay: 0,
            top: "-2.8rem",
            opacity: 0,
            ease: "easeIn"
        });
        TweenMax.to($(".dashboard"), 0.1, {
            delay: 0,
            opacity: 1,
            ease: "easeIn"
        })
    },
    5000);
    $(".runPage").on("touchstart",
    function() {
        TweenMax.to($(".message"), 0.8, {
            delay: 0,
            top: "-2.8rem",
            opacity: 0,
            ease: "easeIn"
        });
        TweenMax.to($(".dashboard"), 0.1, {
            delay: 0,
            opacity: 1,
            ease: "easeIn"
        });
        event.preventDefault()
    });
    $(".runPage").on("touchend",
    function() {
        if (touchState) {
            touchTimes++;
            wholeTouchTime++;
            touchCountState = true;
            if (wholeTouchTime > 50) {
                wholeTouchTime = 0;
                touchState = false;
                touchCountState = false;
                $("#headCanvas").hide();
                $(".runPage").fadeOut(300);
                $("#video").fadeIn(300);
                audioBg.pause();
                audioRun1.pause();
                audioRun2.pause();
                audioRun3.pause();
                clearInterval(touchInterval);
                video.play();
                pauseVideo(video, videoPauseTime[5],
                function() {
                    runSpeed = 200;
                    showModel()
                })
            }
        }
    });
    if (deviceType == "pc") {
        $(".runPage").on("click",
        function() {
            if (touchState) {
                touchTimes++;
                wholeTouchTime++;
                touchCountState = true;
                if (wholeTouchTime > 50) {
                    wholeTouchTime = 0;
                    touchState = false;
                    touchCountState = false;
                    $("#headCanvas").hide();
                    $(".runPage").fadeOut(300);
                    $("#video").fadeIn(300);
                    audioBg.pause();
                    audioRun1.pause();
                    audioRun2.pause();
                    audioRun3.pause();
                    clearInterval(touchInterval);
                    video.play();
                    pauseVideo(video, videoPauseTime[5],
                    function() {
                        $(".hand-ami").hide();
                        showModel()
                    })
                }
            }
        })
    }
}
function runAmin() {
    touchInterval = setInterval(function() {
        clearInterval(runInterval);
        var rotateDeg = touchTimes * 35 - 27;
        if (rotateDeg > 125) {
            rotateDeg = 125
        }
        var rotateRange = rotateDeg + 5;
        TweenMax.to($(".pointer"), 0.3, {
            delay: 0,
            rotation: rotateDeg,
            ease: "easeIn"
        });
        TweenMax.to($(".pointer"), 0.1, {
            delay: 0.3,
            rotation: rotateRange,
            repeat: -1,
            yoyo: true,
            ease: "easeIn"
        });
        runSpeed = 200;
        if (touchCountState) {
            if (touchTimes == 0) {
                audioRun2.pause();
                audioRun3.pause();
                audioRun1.play();
                runSpeed = 200
            } else {
                if (touchTimes == 1) {
                    audioRun2.pause();
                    audioRun3.pause();
                    audioRun1.play();
                    runSpeed = 70
                } else {
                    if (touchTimes == 2) {
                        audioRun1.pause();
                        audioRun3.pause();
                        audioRun2.play();
                        runSpeed = 20
                    } else {
                        audioRun1.pause();
                        audioRun2.pause();
                        audioRun3.play();
                        runSpeed = 20
                    }
                }
            }
        }
        runInterval = setInterval(function() {
            if (curImg < runImgList.length) {
                ctx.clearRect(0, 0, videoWidth, videoHeight);
                ctx.drawImage(runImgList[curImg], 0, 0, videoWidth, videoHeight);
                curImg++
            } else {
                curImg = 0;
                ctx.clearRect(0, 0, videoWidth, videoHeight);
                ctx.drawImage(runImgList[curImg], 0, 0, videoWidth, videoHeight);
                curImg++
            }
        },
        runSpeed);
        touchTimes = 1
    },
    500)
}
function showCallPage() {
    $(".callPage").show();
    $(".listenBtn").on("click",
    function() {
        audioCall1.pause();
        audioCall2.pause();
        $(".callPage").hide();
        $("#video").fadeIn();
        if (callLevel == 1) {
            _hmt.push(["_trackEvent", "button", "click", "接听第一次电话"]);
            $(".callPage").fadeOut();
            $("#video").fadeIn(300);
            video.play();
            pauseVideo(video, videoPauseTime[2],
            function() {
                $(".callPage").fadeIn();
                callLevel = 2;
                video.currentTime = 159.8;
                audioCall2.play()
            })
        } else {
            _hmt.push(["_trackEvent", "button", "click", "接听第二次电话"]);
            $(".callPage").hide();
            $("#video").fadeIn();
            video.play();
            pauseVideo(video, videoPauseTime[3],
            function() {
                showModel();
                callLevel = 1
            })
        }
    })
}
function clearAmin() {
    TweenMax.killAll();
    $(".modelWrap div").attr("style", "");
    $(".runPage div").attr("style", "");
    $(".videoEndTips div").attr("style", "");
    $(".pointer").attr("style", "");
    $(".shareIconWrap").attr("style", "");
    TweenMax.to($(".model,.modelBg"), 0.1, {
        scale: 1,
        ease: "easeIn"
    })
}
$(".shareBtn").on("click",
function() {
    _hmt.push(["_trackEvent", "button", "click", "点击无忧通道按钮"]);
    shareAmin()
});
$(".sharePop").on("click",
function() {
    $(".sharePop").fadeOut(100);
    $(".shareIconWrap").attr("style", "")
});
function shareAmin() {
    audioBtn.play();
    $(".introPop").fadeOut(100);
    $(".sharePop").fadeIn(100);
    TweenMax.to($(".shareIconWrap"), 1, {
        delay: 0,
        top: "-0.5rem",
        opacity: 1,
        ease: "easeOut"
    })
}
$(".introBtn").on("click",
function() {
    _hmt.push(["_trackEvent", "button", "click", "点击剧团介绍按钮"]);
    introAmin()
});
function introAmin() {
    audioBtn.play();
    $(".sharePop").fadeOut(100);
    $(".introPop").fadeIn(100);
    setTimeout(function() {
        $(".introOrgan2").addClass("heartAmi")
    },
    450);
    setTimeout(function() {
        $(".introOrgan3").addClass("heartAmi")
    },
    900)
}
$(".introPop,.introClose").on("click",
function() {
    $(".introPop").fadeOut(100)
});