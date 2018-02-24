/**
 * Created by evanzhou on 2017/12/17.
 */
// var resPath = '//game.gtimg.cn/images/pubgm/cp/a20171220pubgm/';
var resPath = 'ossweb-img/';
var res = [
  resPath + 'img/bg/bg-index-1.jpg',
  resPath + 'img/bg/bg-index-2.jpg',
  resPath + 'img/bg/bg-index-3.jpg',
  resPath + 'img/bg/bg-index-4.jpg',
  resPath + 'img/bg/bg-index-5.jpg',
  resPath + 'img/bg/bg-index-6.jpg',
  resPath + 'img/bg/bg-index-7.jpg',
  resPath + 'img/bg/bg-index-8.jpg',
  resPath + 'img/bg/bg-index-9.jpg',
  resPath + 'img/bg/bg-index-10.jpg',
  resPath + 'img/bg/bg-index-11.jpg',
  resPath + 'img/bg/bg-index-12.jpg',
  resPath + 'img/bg/bg-index-13.jpg',
  resPath + 'img/bg/bg-index-14.jpg',
  resPath + 'img/bg/bg-index-15.jpg',
  resPath + 'img/bg/bg-index-16.jpg',
  resPath + 'img/bg/bg-index-17.jpg',
  resPath + 'img/bg/bg-index-18.jpg',
  resPath + 'img/bg/bg-index-19.jpg',
  resPath + 'img/bg/bg-index-20.jpg',
  resPath + 'img/anit/sprites-anit-1.png',
  resPath + 'img/anit/sprites-anit-2.png',
  resPath + 'img/anit/sprites-anit-3.png',
  resPath + 'img/anit/sprites-anit-4.png',
  resPath + 'img/anit/sprites-anit-5.png',
  resPath + 'img/anit/sprites-anit-6.png',
  resPath + 'img/anit/sprites-anit-7.png',
  resPath + 'img/anit/sprites-anit-8.png',
  resPath + 'img/anit/sprites-anit-11.png',
  resPath + 'img/anit/sprites-anit-12.png',
  resPath + 'img/anit/sprites-anit-13.png',
  resPath + 'img/anit/sprites-anit-14.png',
  resPath + 'img/anit/sprites-anit-15.png',
  resPath + 'img/anit/sprites-anit-16.png',
  resPath + 'img/anit/bg-anit-9.png',
  resPath + 'img/sprites-people.png',
  resPath + 'img/sprites-guide.png',
  resPath + 'img/bg-correct.png',
  resPath + 'img/bg-ribbon.png',
  resPath + 'img/bg-qrcode.png',
  resPath + 'img/sprites-widget.png',
  resPath + 'img/sprites-title.png',
  resPath + 'img/sprites-audio.png',
  resPath + 'img/bg-kv.jpg',
  resPath + 'img/sprites-kv.png',
  resPath + 'img/bg-cloud-1.png',
  resPath + 'img/bg-cloud-2.png',
  resPath + 'img/text/bg-text-1.png',
  resPath + 'img/text/bg-text-2.png',
  resPath + 'img/text/bg-text-3.png',
  resPath + 'img/text/bg-text-4.png',
  resPath + 'img/text/bg-text-5.png',
  resPath + 'img/text/bg-text-6.png',
  resPath + 'img/desc/bg-desc-1.png',
  resPath + 'img/desc/bg-desc-2.png',
  resPath + 'img/desc/bg-desc-3.png',
  resPath + 'img/desc/bg-desc-4.png',
  resPath + 'img/desc/bg-desc-5.png',
  resPath + 'img/desc/bg-desc-6.png'
];
var myScroll = {};
var sound = {};
var isReset = false;
var pageH = 603;
var pageW = 375;
var width = window.innerWidth;
var height = window.innerHeight;
var pageRatio = pageH / pageW;
var windowRatio = height / width;
var questionIndex = 0;
var isMove = false;
var isEnter9 = false;
var clickCount = 0;
var nickname = '你';
var shotPosition = 600;
// var questionPosition = [1805, 4204, 8347, 10806, 13036, 15466, 18845, 20948, 23625, 25314];
var questionPosition = [1805, 4204, 8347, 10806, 13036, 15466, 18845, 20948, 23625, 25314];
var answer = [2, 2, 1, 4, 1, 2, 3, 4, [1, 3, 5, 6], [3, 4]];
var question9 = [];
var proportion = (height / pageH) / (windowRatio / pageRatio);
var multiple = proportion * .5;
var $guide = $('#guide');
var $text = $('#text');
var $cloud = $('.kv-cloud');
var $desc = $('#desc');
var $sharePic = $('#sharePic');
var audio = {
  $voice: $("#music"),
  oAudio: document.getElementById('audio'),
  audioEvent: function () {
    var _this = this;
    if (!_this.oAudio) {
      return;
    }
    _this.oAudio.addEventListener('canplaythrough', function () {
      _this.oAudio.play();
    });
    _this.oAudio.addEventListener('timeupdate', function () {
      if (_this.oAudio.currentTime >= _this.oAudio.duration - 1) {
        _this.oAudio.currentTime = 0;
        _this.oAudio.play();
      }
    }, false);
  },
  playAudio: function (src, auto) {
    var _this = this;
    if (!_this.oAudio) {
      return;
    }
    // 修改
    // if (!_this.oAudio.src){
    //   _this.oAudio.src = src;
    // }
    // 修改
    _this.oAudio.src = src;

    if (auto) {
      _this.startAudio();
    }
  },
  startAudio: function () {
    var _this = this;
    if (!_this.oAudio) {
      return;
    }
    _this.$voice.removeClass("music__off").addClass("music__on");
    _this.oAudio.load();
    _this.oAudio.play();
    _this.state.status = true;
  },
  stopAudio: function () {
    var _this = this;
    if (!_this.oAudio) {
      return;
    }
    _this.$voice.removeClass("music__on").addClass("music__off");
    _this.oAudio.pause();
    _this.state.status = false;

  },
  event: function () {
    var _this = this;
    _this.$voice.on('touchend', function () {
      //正在播放
      if (_this.state.status) {
        _this.stopAudio();
      }
      //已经停止播放
      else {
        _this.startAudio();
      }
      return false;
    });
  },
  init: function () {
    var _this = this;
    _this.state = {
      status: false
    };
    //_this.audioEvent();
    _this.state.status = true;
    _this.event();
    _this.playAudio(resPath + 'media/music.mp3', _this.state.status);
    document.addEventListener("WeixinJSBridgeReady", function () {
      _this.startAudio();
    }, false);
  }
};
var IndexPage = {
  init: function () {
    document.addEventListener('touchmove', function (e) {
      e.preventDefault()
    }, {passive: false});
    this.loading();
    // this.login();
  },
  loading: function () {
    var self = this;
    new mo.Loader(res, {
      loadType: 1,
      // minTime: 300,
      minTime: 10,
      onLoading: function (count, total) {
        var progress = parseInt(count / total * 100);
        $('#progressBar').css('transform', 'translate(' + (-100 + progress) + '%, 0)');
        setTimeout(function () {
          $('#doll').html(10 - parseInt(progress / 10));
        }, 0);
      },
      onComplete: function () {
        $('#loading').addClass('hide');
        self.initAudio();
        self.playAudio(resPath + 'media/airplane.wav');
        $('.people').addClass('active');
        self.bindEvents();
      }
    });
  },
  reset: function () {
    questionIndex = 0;
    myScroll.scrollTo(0, 0);
    question9 = [];
    $('.btn').removeClass('active correct');
    $('#kv').removeClass('active error');
    $('#mask').removeClass('active');
    $('#ribbon').removeClass('active');
    $cloud.removeClass('active');
    $desc.removeClass('active');
    $text.removeClass('active');
    $('#chicken').removeClass('active');
    $('.page-question').removeClass('active');
    audio.startAudio();
    isEnter9 = false;
    isReset = true;
  },
  initAudio: function () {
    var audioArray = [resPath + 'media/victory.mp3', resPath + 'media/airplane.wav', resPath + 'media/shot.wav', resPath + 'media/correct.mp3', resPath + 'media/error.mp3'];
    for (var i = 0; i < audioArray.length; i++) {
      var audio = new Audio();
      audio.src = audioArray[i];
      audio.preload = true;
      audio.load();
    }
  },
  playAudio: function (src) {
    sound = document.getElementById('audio2');
    sound.src = src;
    sound.load();
    sound.play();
  },
  action: function () {
    myScroll = new IScroll('#wrapper', {
      mouseWheel: true,
      useTransform: true,
      preventDefault: true,
      probeType: 3
    });
    function position(y) {
      var position = -questionPosition[questionIndex] * multiple;
      if (y <= position) {
        $('.page-question-' + (parseInt(questionIndex) + 1)).addClass('active');
        isMove = false;
        if(questionIndex != 9){
          myScroll.scrollTo(0, position);
        }
      }
    }

    myScroll.on('scroll', function () {
      isMove = true;
      $guide.removeClass('active');
      position(this.y);
    });
    myScroll.on('scrollEnd', function () {
      isMove = false;
      position(this.y);
    });
    myScroll.on('scrollStart', function () {
      isMove = true;
    });
  },
  showKV: function (i, isCorrect) {
    var self = this;
    var index;
    if (i <= 2) {
      index = 1;
    } else if (i <= 4) {
      index = 2;
    } else if (i <= 6) {
      index = 3;
    } else if (i <= 8) {
      index = 4;
    } else if (i <= 10) {
      index = 5;
    } else if (i == 11) {
      index = 6;
    }
    var textSrc = resPath + 'img/text/bg-text-' + index + '.png';
    var descSrc = resPath + 'img/desc/bg-desc-' + index + '.png';
    $desc.attr('src', descSrc);
    $text.attr('src', textSrc);
    self.makeImg(index);
    function goKV() {
      $('#kv').addClass(isCorrect ? 'active' : 'error').off('webkitAnimationEnd').on('webkitAnimationEnd', function () {
        $desc.addClass('active');
        $text.addClass('active');
        $cloud.addClass('active');
      });
      $('#chicken').addClass('active');
      // self.share(nickname, i);
    }

    $('#mask').addClass('active').off('webkitAnimationEnd').on('webkitAnimationEnd', function () {
      if (isCorrect) {
        self.playAudio(resPath + 'media/victory.mp3');
        $('#ribbon').addClass('active').off('webkitAnimationEnd').on('webkitAnimationEnd', goKV);
      } else {
        goKV();
      }
    });
  },
  login: function () {
    var self = this;
    //登录组件
    TGLogin.init({
      wxAppId: 'wx13051697527efc45' //游戏在微信平台的appId
    }, function (TGLoginManager) {
      //获取当前平台类型(wx/qq/other)
      var platform = TGLoginManager.mGetPlatformType();
      if (platform === 'wx') {
        //微信平台 - 进行微信登录
        TGLoginManager.mWXLogin(function (uinfo) {
          //将微信昵称设置到分享标题中
          nickname = uinfo.nickname;
          self.share(nickname, 0);
        });
      } else if (platform === 'qq') {
        //QQ平台 - 进行手Q登录
        TGLoginManager.mQQLogin(function (uinfo) {
          //将QQ昵称设置到分享标题中
          nickname = uinfo.nickname;
          self.share(nickname, 0);
        });
      } else {
        //非微信、QQ平台
        //拉起手QAPP打开页面
        TGLoginManager.mOpenQQ();
      }
    });
  },
  share: function (username, index) {
    var shareDesc = '这是我做过的最奇葩的游戏水平测试了，坑到爆炸！';
    if (index >= 1 && index <= 3) {
      shareDesc = username + '的坑货指数是“无底黑洞”！只有填不满的洞，没有坑不掉的人！';
    } else if (index > 3 && index <= 8) {
      shareDesc = username + '的坑货指数是“百人坑”！队友见了会流泪，佛祖见了会心碎！';
    } else if (index > 8 && index <= 10) {
      shareDesc = username + '的坑货指数是“小水坑”！ 军功章有他躺赢的一半！';
    } else if (index == 11) {
      shareDesc = username + '的坑货指数是“平原飞驰”！不坑，贼稳！';
    }
    //分享
    TGMobileShare({
      //不设置或设置为空时，页面有title，则调取title
      shareTitle: '绝地求生 全军出击',
      //不设置或设置为空时，页面有Description，则调取Description
      shareDesc: shareDesc,
      //朋友圈文案
      timelineTitle: shareDesc,
      //分享图片尺寸200*200，大小控制在10k左右，且填写绝对路径
      shareImgUrl: resPath + 'img/share.png',
      //分享链接要跟当前页面同域名(手Q分享有这个要求) ,不设置或设置为空时，默认调取当前URL
      shareLink: '',
      //点击流命名，用于统计分享量，专题一般采用目录名称如a20151029demo
      actName: "a20171220pubgm"
    });
  },
  makeImg: function (index) {
    var canvas = document.createElement('canvas'),
      ctx = canvas.getContext('2d');
    var minHeight = 1206 * proportion;
    canvas.width = width * 2;
    canvas.height = height * 2 < minHeight ? minHeight : height * 2;
    ctx.fillStyle = '#fff8f6';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    var image = new Image();
    var bgSrc = resPath + 'img/bg-kv.jpg';
    var cloud1Src = resPath + 'img/bg-cloud-2.png';
    var cloud2Src = resPath + 'img/bg-cloud-1.png';
    var descSrc = resPath + 'img/desc/bg-desc-' + index + '.png';
    var textSrc = resPath + 'img/text/bg-text-' + index + '.png';
    var qrCodeSrc = resPath + 'img/bg-qrcode.png'; //二维码图片地址，宽度144，高度160，需要带文字
    image.setAttribute('crossOrigin', 'anonymous');
    image.onload = function () {
      ctx.drawImage(this, 0, 0, canvas.width, 1220 * proportion);
      image.onload = function () {
        ctx.drawImage(this, 135 * proportion, 574 * proportion, 480 * proportion, 242 * proportion);
        image.onload = function () {
          ctx.drawImage(this, 178 * proportion, 884 * proportion, 394 * proportion, 86 * proportion);
          image.onload = function () {
            ctx.drawImage(this, -300 * proportion, 648 * proportion, 653 * proportion, 272 * proportion);
            image.onload = function () {
              ctx.drawImage(this, 420 * proportion, 608 * proportion, 733 * proportion, 395 * proportion);
              image.onload = function () {
                ctx.drawImage(this, 302 * proportion, 1010 * proportion, 144 * proportion, 160 * proportion);
                $sharePic.attr('src', canvas.toDataURL());
              };
              image.src = qrCodeSrc;
            };
            image.src = cloud2Src;
          };
          image.src = cloud1Src;
        };
        image.src = textSrc;
      };
      image.src = descSrc;
    };
    image.src = bgSrc;
  },
  bindEvents: function () {
    var self = this;
    $(document).on('touchend', function () {
      if (clickCount < 1) {
        $('#windows1').addClass('active');
        clickCount++
      } else if (clickCount < 2) {
        $('#windows2').addClass('active');
        clickCount++
      } else if (clickCount < 3) {
        self.action();
        $('#guide2').addClass('hide');
        $('#windows3').addClass('active').off('webkitAnimationEnd').on('webkitAnimationEnd', function () {
          $('#tips').addClass('active').off('webkitAnimationEnd').on('webkitAnimationEnd', function () {
            $guide.addClass('active');
          });
        });
        self.playAudio(resPath + 'media/shot.wav');
        myScroll.scrollTo(0, -shotPosition * multiple, 1000);
        clickCount++
      }
    });

    function removeByValue(arr, val) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
          arr.splice(i, 1);
          break;
        }
      }
    }

    $('.btn').on('tap', function () {
      if (!isMove) {
        var $this = $(this);
        var value = $this.data('value');
        if ($this.hasClass('btn-3')) {
          if ($this.hasClass('active')) {
            if (!isEnter9) {
              $this.removeClass('active');
              removeByValue(question9, parseInt(value));
            }
          } else {
            $this.addClass('active');
            question9.push(parseInt(value));
          }
        } else if ($this.hasClass('btn-4')) {
          if (!isEnter9) {
            var correct = 0;
            isEnter9 = true;
            for (var i = 0; i < answer[questionIndex].length; i++) {
              if (question9.length > 0) {
                for (var j = 0; j < question9.length; j++) {
                  if (answer[questionIndex][i] === question9[j]) {
                    $('.page-question-9').find('.btn-3').eq(question9[j] - 1).addClass('correct');
                    correct++;
                  }
                }
              }
            }
            if (correct == answer[questionIndex].length) {
              self.playAudio(resPath + 'media/correct.mp3');
              !isReset && $guide.addClass('active');
              questionIndex++;
            } else {
              //答错
              self.playAudio(resPath + 'media/error.mp3');
              self.showKV(parseInt(questionIndex) + 1, false);
            }
          }
        } else {
          if (!$this.siblings('.btn').hasClass('active') && !$this.hasClass('active')) {
            $this.addClass('active');
            var isCorrect = false;
            var correctAnswer = answer[questionIndex];
            if (typeof correctAnswer == 'object') {
              for (var i = 0; i < correctAnswer.length; i++) {
                if (parseInt(value) == correctAnswer[i]) {
                  isCorrect = true
                }
              }
            }
            if (parseInt(value) == correctAnswer || isCorrect) {
              $this.addClass('correct');
              self.playAudio(resPath + 'media/correct.mp3');
              if (questionIndex == 9) {
                //全对了
                self.showKV(11, true);
              } else {
                !isReset && $guide.addClass('active');
                questionIndex++;
              }
            } else {
              //答错
              self.playAudio(resPath + 'media/error.mp3');
              self.showKV(parseInt(questionIndex) + 1, false);
            }
          }
        }
      }
    });


    $('#subscribe').on('touchend', function () {
      try {
        PTTSendClick('btn', 'link', '跳转按钮');
      } catch (e) {
      }
      setTimeout(function () {
        location.href = 'http://pubgm.qq.com/act/a20171121yym/index.shtml?ADTAG=cop.innercop.yxrs.index_yxrs';
      }, 100)
    });

    $('#reset').on('touchend', self.reset);
  }
};
$(function () {
  IndexPage.init();
});
audio.init();