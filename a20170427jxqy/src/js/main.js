require('../index.html')
require('../css/package.scss')
require('./lib/createjs.min.js')
require('./lib/zepto-touch.js')

require('../img/bg-result.png')
require('../img/hand.png')
require('../img/sprite-girl.png')
require('../img/sprite-thumb.png')
require('../img/sprite-tongue.png')
require('../img/sprite-bubble.png')

var Util = require('./lib/util.js')
var Slider = require('./lib/simpleSlider.js')
var template = require('./lib/art-template')
var Moments = require('./moments.js')
var initMusic = require('./lib/music.js')

window.choicePageNum = 3
window.wechatMoments = []
window.canSwipe = false
window.canGoNext = false
window.maxPoisonName = ''
window.wechatTopDist = 0
window.wechatPlusTop = 0

$('[data-lock="1"]').on('touchmove', function (evt) {
  evt.preventDefault()
})

/**
 * pregameLoader && start
 */
var assets = [
  'http://game.gtimg.cn/images/jxqy/cp/a20170502jxqy/img/bg-start.jpg',
  'http://game.gtimg.cn/images/jxqy/cp/a20170502jxqy/img/bg-kv.jpg',
  'http://game.gtimg.cn/images/jxqy/cp/a20170502jxqy/img/bg-s-4.png',
  'http://game.gtimg.cn/images/jxqy/cp/a20170502jxqy/img/scene-1.gif',
  'http://game.gtimg.cn/images/jxqy/cp/a20170502jxqy/img/scene-2.gif',
  'http://game.gtimg.cn/images/jxqy/cp/a20170502jxqy/img/scene-3.gif',
  'http://game.gtimg.cn/images/jxqy/cp/a20170502jxqy/img/scene-5.gif',
  'http://game.gtimg.cn/images/jxqy/cp/a20170502jxqy/img/wechat-banner.jpg',
  'http://game.gtimg.cn/images/jxqy/cp/a20170502jxqy/img/sprite.choice.png',
  'http://game.gtimg.cn/images/jxqy/cp/a20170502jxqy/img/sprite.other.png',
  { id: 'hand', src: 'http://game.gtimg.cn/images/jxqy/cp/a20170502jxqy/img/hand.png' },
  { id: 'sprite-girl', src: 'http://game.gtimg.cn/images/jxqy/cp/a20170502jxqy/img/sprite-girl.png' },
  { id: 'sprite-thumb', src: 'http://game.gtimg.cn/images/jxqy/cp/a20170502jxqy/img/sprite-thumb.png' },
  { id: 'sprite-tongue', src: 'http://game.gtimg.cn/images/jxqy/cp/a20170502jxqy/img/sprite-tongue.png' },
  { id: 'sprite-bubble', src: 'http://game.gtimg.cn/images/jxqy/cp/a20170502jxqy/img/sprite-bubble.png' },
  { id: 'bg-result', src: 'http://game.gtimg.cn/images/jxqy/cp/a20170502jxqy/img/bg-result.png' }
]

window.gameLoader = new createjs.LoadQueue(true, './')
gameLoader.on('progress', handleProgress, this)
gameLoader.on('complete', handleComplete, this)

gameLoader.loadManifest(assets)

function handleProgress (ev) {
  var percent = (ev.progress * 100 | 0) + '%'
  $('#J_percent').css('width', percent)
  $('#J_percent_text').text(percent)
}

function handleComplete () {
  var el = document.querySelector('#J_loading')

  $(el).one('webkitAnimationEnd animationEnd', function () {
    $(el).addClass('hide')
    this.parentNode.removeChild(this)
  })

  // setTimeout(function () {
    $(el).addClass('complete')
  // }, 500)

  init()
}

/**
 * init
 */
function init () {
  Slider.init({
    needTouch: true,
    controller: {
      shouldGoToPrev: function (el) {
        if ($(el).hasClass('p9')) {
          return true
        }
        return false
      },
      shouldGoToNext: function (el, ctx) {
        if ($(el).hasClass('p1')) {
          return false
        } else if ($(el).hasClass('p3')) {
          showChoices('p3')
          return false
        } else if ($(el).hasClass('p4')) {
          showChoices('p4')
          return false
        } else if ($(el).hasClass('p5')) {
          showChoices('p5')
          return false
        } else if ($(el).hasClass('p6')) {
          showChoices('p6')
          return false
        } else if ($(el).hasClass('p7')) {
          showChoices('p7')
          return false
        } else if ($(el).hasClass('p8')) {
          if ($('.creating-mask').hasClass('hide')) {
            ctx.goToPage(9)
          }
          return false
        } else if ($(el).hasClass('p2')) {
          if (!canGoNext) return
          canGoNext = false
          choicePageNum++
          if (choicePageNum >= 8) {
            // 显示「正在制作图层」1.5s
            setTimeout(function() {
              $('.creating-mask').addClass('fade')
              Util.addAnimationEndEvent($('.creating-mask')[0], function () {
                $('.creating-mask').removeClass('fade').addClass('hide')
              })
            }, 1500)
          }
          ctx.goToPage(choicePageNum)
          $('#J_wechat .wechat-banner').css({
            'margin-top': 0
          })
          $('.p2 .arrow-down').removeClass('show')
          return false
        }
        return true
      },
      didGoToPage: function (el, prevEl) {},
      shouldDoSlide: function (el) {}
    }
  })
  // Slider.goToPage(9)

  // 初始化背景音乐
  initMusic({
    src: require('../plugin/bg.mp3')
  })

  initEvent()
  initStage()

  // test
  // var arr = [Moments['s-1-1'], Moments['s-2-1'], Moments['s-3-2'], Moments['s-4-1'], Moments['s-5-1']]
  // initResultStage(arr)
  // Slider.goToPage(7)
}

/**
 * Init Events
 */
function initEvent () {
  $('[data-modal]').on('touchend', function () {
    if ($(this).data('disabled')) return
    var id = $(this).data('modal')
    showModal(id)
  })

  $('[data-close="dialog"]').on('touchend', function () {
    var id = $(this).parents('.dialog').attr('id')
    closeModal(id)
  })

  $('#J_share_container').on('touchend', function () {
    closeModal('J_share_container')
  })

  $('#J_btn_begin').on('touchend', function () {
    Slider.goToPage(3)
  })

  $('#J_btn_get').on('touchend', function () {
    $('#J_btn_get').addClass('hide')
    $('.redeem').removeClass('hide')
  })

  // 点击选项
  $('[data-choice]').on('click', function () {
    var str = $(this).data('choice') || 's-4'
    addMoment(str)
    if (str !== 's-4') {
      var html = template('tpl-moment', {
        moments: [wechatMoments[wechatMoments.length - 1]]
      })
      $('#J_moments_list').html(html)
      insertLikes(wechatMoments[wechatMoments.length - 1]['likes'])
      Slider.goToPage(2, 'fade')

      if (choicePageNum >= 7) {
        initResultStage(wechatMoments)
      }
    } else if (choicePageNum >= 7) {
      initResultStage(wechatMoments)
      Slider.goToPage(8)
      // 显示「正在制作图层」1.5s
      setTimeout(function() {
        $('.creating-mask').addClass('fade')
        Util.addAnimationEndEvent($('.creating-mask')[0], function () {
          $('.creating-mask').removeClass('fade').addClass('hide')
        })
      }, 1500)
    } else {
      Slider.goToPage(++choicePageNum)
    }
  })

  // 结果页下滑
  $('#J_wechat_down').on('touchend', function () {
    $('#J_wechat').addClass('hide')
  })

  // 重玩
  $('#J_btn_again').on('touchend', function () {
    resetGame()
    Slider.goToPage(1)
  })
}

function resetGame () {
  canSwipe = false
  canGoNext = false
  wechatMoments = []
  choicePageNum = 3
  $('.choice-cnt').addClass('hide').removeClass('show')
  $('#J_wechat_cnt').removeClass('hide')
  $('#J_result').addClass('hide')
  $('.creating-mask').removeClass('hide')
}

/**
 * Canvas 动画
 */
var girlStage, resultStage, thumbSprite

function initStage () {
  var girlCanvas = document.querySelector('#J_girl')

  girlStage = new createjs.Stage(girlCanvas)
  createjs.Ticker.addEventListener('tick', function (ev) {
    girlStage.update(ev)
  })
  createjs.Ticker.timingMode = createjs.Ticker.RAF

  initGirlSpriteAnim()
}

function initResultStage (options) {
  $('#J_result').removeClass('hide')
  var resultCanvas = document.querySelector('#J_result_stage')

  resultStage = new createjs.Stage(resultCanvas)
  createjs.Ticker.addEventListener('tick', function (ev) {
    resultStage.update(ev)
  })
  createjs.Ticker.timingMode = createjs.Ticker.RAF

  initResultPage(options)

  setTimeout(function() {
    $('#J_result_img').attr('src', resultStage.toDataURL('#fff')).removeClass('hide')
  }, 1000)
}

function initGirlSpriteAnim () {
  var spriteSheet = new createjs.SpriteSheet({
    images: [gameLoader.getResult('sprite-girl')],
    frames: {
      width: 400,
      height: 600
    },
    framerate: 12,
    animations: {
      play: [0, 11]
    }
  })

  var girlSprite = new createjs.Sprite(spriteSheet)
  girlSprite.gotoAndPlay('play')
  girlStage.addChild(girlSprite)
}

function initResultPage (options) {
  var poisonLen = options.length
  var maxPoison = {}
  var newOptions = []

  if (poisonLen) {
    newOptions = Util.shuffle(options)
    maxPoison = newOptions[0]
  } else {
    newOptions = [Moments['s-4']]
    maxPoison = newOptions[0]
    poisonLen = 1
  }
  maxPoisonName = maxPoison.poison

  // 更改分享文案
  if (TGMobileShare) {
    TGMobileShare({
      shareTitle: '你……中毒了吗？',
      shareDesc: '你说我有点毒，我好像确实中了一点' + maxPoisonName + '毒……我有毒你有药吗？',
      shareImgUrl: 'http://game.gtimg.cn/images/jxqy/cp/a20170502jxqy/share.jpg',
      shareLink: '',
      actName: 'a20170502jxqy'
    })
  }

  // 背景
  var bg = new createjs.Bitmap(gameLoader.getResult('bg-result'))
  resultStage.addChild(bg)

  // 小图
  var spriteSheet = new createjs.SpriteSheet({
    images: [gameLoader.getResult('sprite-thumb')],
    frames: {
      width: 210,
      height: 195
    },
    animations: {
      's-1-1': 0,
      's-1-2': 1,
      's-1-3': 2,
      's-2-1': 3,
      's-2-2': 4,
      's-2-3': 5,
      's-3-1': 6,
      's-3-2': 7,
      's-3-3': 8,
      's-4-1': 9,
      's-4-2': 10,
      's-4-3': 11,
      's-5-1': 12,
      's-5-2': 13,
      's-5-3': 14,
      's-4': 15
    }
  })
  thumbSprite = new createjs.Sprite(spriteSheet)
  thumbSprite.x = 54
  thumbSprite.y = 924
  thumbSprite.gotoAndPlay(maxPoison.type)
  resultStage.addChild(thumbSprite)

  // 底下病毒名称
  var poisonText = new createjs.Text(maxPoison.poison, 'bold 28px -apple-system, Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif', '#000')
  poisonText.textAlign = 'left'
  poisonText.lineWidth = 170
  poisonText.x = 274
  poisonText.y = 924
  resultStage.addChild(poisonText)

  // 病毒描述
  var poisonDetail = new createjs.Text(addWrap(maxPoison.detail), '24px -apple-system, Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif', '#000')
  poisonDetail.lineWidth = 100
  poisonDetail.lineHeight = 28
  poisonDetail.x = 274
  poisonDetail.y = 960
  resultStage.addChild(poisonDetail)

  // 气泡示意
  var spriteSheet = new createjs.SpriteSheet({
    images: [gameLoader.getResult('sprite-bubble')],
    frames: [
      [1, 1, 330, 121, 0, -2, -3],
      [1, 124, 318, 132, 0, 0, -4],
      [1, 258, 306, 82, 0, -3, -3],
      [1, 342, 271, 82, 0, -3, -3],
      [1, 426, 278, 79, 0, -3, -4]
      // [0, 0, 312, 111], // bubble 2
      // [0, 111, 302, 87],  // bubble 1
      // [0, 198, 295, 74],  // bubble 3
      // [0, 272, 258, 74],  // bubble 4
      // [0, 346, 241, 71]   // bubble 5
    ],
    animations: {
      'b-2': 0,
      'b-1': 1,
      'b-3': 2,
      'b-5': 3,
      'b-4': 4,
    }
  })

  if (poisonLen >= 5) {
    var bubble1 = new createjs.Sprite(spriteSheet)
    bubble1.x = 392
    bubble1.y = 386
    bubble1.gotoAndPlay('b-1')
    resultStage.addChild(bubble1)

    var poisonName5 = new createjs.Text(newOptions[4].poison, 'bold 26px -apple-system, Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif', '#000')
    poisonName5.lineWidth = 170
    poisonName5.textAlign = 'center'
    poisonName5.x = 620
    poisonName5.y = 420
    resultStage.addChild(poisonName5)
  }

  var bubble2 = new createjs.Sprite(spriteSheet)
  bubble2.x = 380
  bubble2.y = 484
  bubble2.gotoAndPlay('b-2')
  resultStage.addChild(bubble2)

  var poisonName1 = new createjs.Text(newOptions[0].poison, 'bold 26px -apple-system, Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif', '#000')
  poisonName1.lineWidth = 160
  poisonName1.textAlign = 'center'
  poisonName1.x = 620
  poisonName1.y = 530
  resultStage.addChild(poisonName1)

  if (poisonLen >= 4) {
    var bubble3 = new createjs.Sprite(spriteSheet)
    bubble3.x = 400
    bubble3.y = 610
    bubble3.gotoAndPlay('b-3')
    resultStage.addChild(bubble3)

    var poisonName4 = new createjs.Text(newOptions[3].poison, 'bold 26px -apple-system, Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif', '#000')
    poisonName4.lineWidth = 160
    poisonName4.textAlign = 'center'
    poisonName4.x = 620
    poisonName4.y = 640
    resultStage.addChild(poisonName4)
  }

  if (poisonLen >= 3) {
    var bubble4 = new createjs.Sprite(spriteSheet)
    bubble4.x = 430
    bubble4.y = 700
    bubble4.gotoAndPlay('b-4')
    resultStage.addChild(bubble4)

    var poisonName3 = new createjs.Text(newOptions[2].poison, 'bold 26px -apple-system, Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif', '#000')
    poisonName3.lineWidth = 160
    poisonName3.textAlign = 'center'
    poisonName3.x = 624
    poisonName3.y = 730
    resultStage.addChild(poisonName3)
  }

  if (poisonLen >= 2) {
    var bubble5 = new createjs.Sprite(spriteSheet)
    bubble5.x = 440
    bubble5.y = 790
    bubble5.gotoAndPlay('b-5')
    resultStage.addChild(bubble5)

    var poisonName2 = new createjs.Text(newOptions[1].poison, 'bold 26px -apple-system, Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif', '#000')
    poisonName2.lineWidth = 160
    poisonName2.textAlign = 'center'
    poisonName2.x = 620
    poisonName2.y = 820
    resultStage.addChild(poisonName2)
  }

  // 舌头中毒分布
  var spriteSheet = new createjs.SpriteSheet({
    images: [gameLoader.getResult('sprite-tongue')],
    frames: {
      width: 388,
      height: 397
    },
    animations: {
      't-1': 0,
      't-2': 1,
      't-3': 2,
      't-4': 3,
      't-5': 4
    }
  })
  var tongueSprite = new createjs.Sprite(spriteSheet)
  tongueSprite.x = 80
  tongueSprite.y = 453
  tongueSprite.gotoAndPlay('t-' + poisonLen)
  resultStage.addChild(tongueSprite)

  // 手
  var hand = new createjs.Bitmap(gameLoader.getResult('hand'))
  hand.x = 88
  hand.y = 526
  resultStage.addChild(hand)
}

function insertLikes (likes) {
  if (!(likes && likes.length)) return
  var len = likes.length
  $('#J_likes').html('<i class="icon-like"></i>')

  insertLike(0)

  function insertLike (idx) {
    if (idx < len) {
      $('#J_likes').append('<span>' + likes[idx] + '</span>')
      setTimeout(function() {
        insertLike(idx + 1)
      }, 300)
    } else {
      insertRemarks(wechatMoments[wechatMoments.length - 1]['remarks'], wechatMoments[wechatMoments.length - 1]['type'])
    }
  }
}

function insertRemarks (remarks, type) {
  if (!(remarks && remarks.length)) {
    $('.p2 .arrow-down').addClass('show')
    canGoNext = true
    return
  }
  var len = remarks.length
  var ch = document.documentElement.clientHeight
  $('#J_remarks').html('')

  insertRemark(0)

  function insertRemark (idx) {
    if (idx < len) {
      $('#J_remarks').append('<li class="item"><span class="name">' + remarks[idx].name + '：</span>' + remarks[idx].text + '</li>')

      // 判断页面是否需要往上滑
      if (idx === 0) {
        wechatTopDist = $('#J_remarks .item').eq(0).offset().top
        wechatPlusTop = 0
        if (type === 's-2-2') {
          wechatPlusTop = 70
        }
      } else {
        $prevItem = $('#J_remarks .item').eq(idx - 1)
      }
      var $nowItem = $('#J_remarks .item').eq(idx)

      if (idx > 0 && ch - (wechatTopDist + $prevItem.offset().height + $nowItem.offset().height) < 200) {

        var plusTop = $nowItem.offset().height | 0
        var top = $('#J_wechat .wechat-banner').offset().top

        wechatTopDist += plusTop
        wechatPlusTop += plusTop
        $('#J_wechat .wechat-banner').css({
          'margin-top': -wechatPlusTop + 'px'
        })
      }

      setTimeout(function () {
        insertRemark(idx + 1)
      }, 500)
    } else {
      $('.p2 .arrow-down').addClass('show')
      canGoNext = true
    }
  }
}

/**
 * 手动添加换行符
 */
function addWrap (str) {
  var len = str.length
  var strArr = []

  for (var i = 0; i < len; i = i + 17) {
    strArr.push(str.substr(i, 17))
  }
  return strArr.join('\n')
}

/**
 * 替换 emoji 表情
 */
function replaceEmoji (str) {
  str.replace(/\[(\S+)\]/g, '<i class="$1"></i>')
}

/**
 * 添加朋友圈
 */
function addMoment (str) {
  var moment = Moments[str]
  if (moment && moment.type !== 's-4') {
    wechatMoments.push(moment)
  }
}

/**
 * 显示选择题
 */
function showChoices (name) {
  var className = '.' + name + ' .choice-cnt'
  if ($(className).hasClass('hide')) {
    $(className).removeClass('hide')

    setTimeout(function () {
      $(className).addClass('show')
    }, 100)
  }
}

/**
 * ShowModule & HideModule
 */
function showModal (id) {
  $('#' + id).addClass('show').removeClass('hide')
  // $('#J_overlay').removeClass('hide')

  // Dirty Hack
  setTimeout(function () {
    $('#J_overlay').addClass('show')
  }, 100)
}
function closeModal (id) {
  var $ele = $('#' + id)
  // $('#J_overlay').removeClass('show')
  $ele.removeClass('show').addClass('disappear')

  Util.addAnimationEndEvent($ele[0], function () {
    $ele.removeClass('disappear').addClass('hide')
    // $('#J_overlay').addClass('hide')
  })
}
