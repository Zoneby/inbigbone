/**
 * 页面滑屏组件
 */
var slider = {
  init: function(options) {
    var el = $('#pages')[0]
    var needTouch = options.needTouch === false ? false : true

    if (needTouch) {
      ['touchstart', 'touchmove', 'touchend', 'touchcancel', 'mousedown', 'mousemove', 'mouseup'].forEach(function(ev) {
        el.addEventListener(ev, this, false)
      }.bind(this))
    }

    this.threshold = 50
    this.hook = options.controller || null

    $('.page').each(function(i, item) {
      if (i == 0) {
        $(item).addClass('current')
        this.curPage = item
      } else {
        item.style.opacity = 0
        item.style.webkitTransform = 'translate3d(0, 100%, 0)'
      }
    }.bind(this))
  },
  handleEvent: function(ev) {
    switch (ev.type) {
      case 'touchstart':
      case 'mousedown':
        this.start(ev)
        break
      case 'touchmove':
      case 'mousemove':
        this.move(ev)
        break
      case 'touchend':
      case 'touchcancel':
      case 'mouseup':
        this.end(ev)
    }
  },
  start: function(ev) {
    if (this.sliding)
      return

    var touch  = ev.touches ? ev.touches[0] : ev
    this.pageX = touch.pageX
    this.pageY = touch.pageY
  },
  move: function(ev) {
    ev.preventDefault()

    if (this.sliding)
      return

    var touch  = ev.touches ? ev.touches[0] : ev
    this.distX = touch.pageX - this.pageX
    this.distY = touch.pageY - this.pageY
  },
  end: function() {
    if (this.sliding)
      return

    var prevPage = this.curPage.previousElementSibling,
      nextPage = this.curPage.nextElementSibling

    if (prevPage && this.distY > this.threshold && this.hook.shouldGoToPrev(this.curPage)) {
      this.prev(prevPage)
    } else if (nextPage && this.distY < -this.threshold && this.hook.shouldGoToNext(this.curPage)) {
      this.next(nextPage)
    } else if (this.distY < -this.threshold) {
      this.hook.shouldDoSlide(this.curPage)
    }

    this.pageX = this.pageY = this.distX = this.distY = undefined
  },
  goToNext: function() {
    var nextPage = this.curPage.nextElementSibling
    this.next(nextPage)
  },
  goToPage: function(pageNum) {
    this.turn(document.querySelector('.p' + pageNum), true)
  },
  prev: function(el) {
    this.turn(el, true)
  },
  next: function(el) {
    this.turn(el, false)
  },
  turn: function(el, prev) {
    var currentPage = this.curPage
    el.style.webkitTransform = prev ? 'translate3d(0, -100%, 0)' : 'translate3d(0, 100%, 0)'
    el.style.zIndex = 10
    // el.style.opacity = 0
    el.style.webkitTransition = 'opacity .5s'
    currentPage.style.webkitTransition = 'opacity .5s'

    $(el).one('webkitTransitionEnd', function() {
      this.curPage.style.zIndex = ''

      $(this.curPage).removeClass('current')
      $(el).addClass('current')

      this.hook.didGoToPage(el, this.curPage)
      this.curPage = el
      this.sliding = false
    }.bind(this))

    $(currentPage).one('webkitTransitionEnd', function() {
      currentPage.style.webkitTransform = prev ? 'translate3d(0, 100%, 0)' : 'translate3d(0, -100%, 0)'
    }.bind(this))

    setTimeout(function() {
      this.sliding = true
      el.style.opacity = 1
      el.style.webkitTransform = 'translate3d(0, 0, 0)'
      currentPage.style.opacity = 0
    }.bind(this), 20)
  }
}

/**
 * 页面逻辑控制器
 */
var pageController = {
  shouldGoToPrev: function(el) {
    return true
  },
  shouldGoToNext: function(el) {
    return true
  },
  didGoToPage: function(el, prevEl) {
  },
  shouldDoSlide: function(el) {
  }
}

// TOUCH点击
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
            Math.abs(touch.clientY - this.clientY) < 10) &&
            $(el).css('opacity') == 1) {
          callback && callback.call(el, ev)
        }
        this.clientX = this.clientY = this.touchTime = undefined
      }
    }
  }

  var events = ('ontouchstart' in window) ?
            ['touchstart', 'touchend', 'touchcancel'] :
            ['mousedown', 'mouseup']
  events.forEach(function(ev) {
    el && el.addEventListener(ev, handler, false)
  })
}

/**
 * AnimationEnd
 * @param {[type]} ele  [description]
 * @param {[type]} func [description]
 */
function addAnimationEndEvent(ele, func) {
  var fun = function() {
    ele.removeEventListener('webkitAnimationEnd', fun)
    func()
  }
  ele.addEventListener('webkitAnimationEnd', fun)
}

function addTransitionEndEvent(ele, func) {
  var fun = function() {
    ele.removeEventListener('webkitTransitionEnd', fun)
    func()
  }
  ele.addEventListener('webkitTransitionEnd', fun)
}

/**
 * 初始化音乐
 * @param  {[type]} musicUrl [description]
 * @return {[type]}          [description]
 */
var initMusic = function (musicUrl) {
  var music = {
    autoplay: true,
    id: null,
    loop: true,
    position: "ne",
    src: musicUrl
  }
  if (!music || !music.src) return

  var className = 'playing'
  var trigger = 'ontouchend' in document? 'touchstart': 'click'
  var $music = document.createElement('div')
  var $audio = document.createElement('audio')
  var mp = 'music '+(music.position||'nw')
  var html = ''

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

  if (music.autoplay) $audio.play()

  document.body.appendChild($music)
  document.addEventListener(trigger, start, false)
}

/**
 * 微信分享、关注公众号
 */
function initShare(config) {
  var url = location.protocol + '//' + location.host + location.pathname.replace(/[^\/]+$/, '')

  var shareData = $.extend({
    img_url: url + (config.imgUrl || 'images/share.jpg'),
    link: config.link || location.href,
    desc: config.desc || '',
    title: config.title || ''
  }, config)

  if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
      initShareEvent()
  } else {
      if (document.addEventListener) {
          document.addEventListener("WeixinJSBridgeReady", initShareEvent, false)
      } else if (document.attachEvent) {
          document.attachEvent("WeixinJSBridgeReady", initShareEvent)
          document.attachEvent("onWeixinJSBridgeReady", initShareEvent)
      }
  }

  function initShareEvent(){
    WeixinJSBridge.on("menu:share:appmessage", function() {
      WeixinJSBridge.invoke("sendAppMessage", {
        img_url: shareData.img_url,
        link: shareData.link,
        desc: shareData.desc,
        title: shareData.title
      }, function(data){
      })
    })
    WeixinJSBridge.on("menu:share:timeline", function(h) {
      WeixinJSBridge.invoke("shareTimeline", {
        img_url: shareData.img_url,
        img_width: "80",
        img_height: "80",
        link: shareData.link,
        desc: shareData.desc,
        title: shareData.desc
      }, function(data){
      })
    })
  }
}

function showModal(id) {
  $('#' + id).addClass('show').removeClass('hide')
  $('#J_overlay').removeClass('hide')

  // Dirty Hack
  setTimeout(function() {
    $('#J_overlay').addClass('show')
  }, 100)
}

function closeModal(id) {
  var $ele = $('#' + id)
  $('#J_overlay').removeClass('show')
  $ele.removeClass('show').addClass('disappear')

  addAnimationEndEvent($ele[0], function() {
    $ele.removeClass('disappear').addClass('hide')
    $('#J_overlay').addClass('hide')
  })
}

function initEvents() {

  $('[data-modal]').tap(function() {
    var id = $(this).data('modal')
    showModal(id)
  })

  $('[data-close="dialog"]').tap(function() {
    var id = $(this).parents('.dialog').attr('id')
    closeModal(id)
  })

  $('#J_btn_share').click(function() {
    $('#J_share_ele').addClass('show').removeClass('hide')
    shareSprite.gotoAndPlay('play')
  })

  $('#J_share_container').tap(function() {
    $('#J_share_container').addClass('hide').removeClass('show')
    // closeModal('J_share_container')
  })

  $('#J_btn_begin').tap(function() {
    $('#J_videobox').addClass('show')
    $('#J_video')[0].play()
  })

  var videoEle = document.querySelector('#J_video')
  videoEle.addEventListener('timeupdate', function() {
    if (videoEle.currentTime > 0) {
      $('#J_poster').addClass('fade')

      addAnimationEndEvent($('#J_poster')[0], function() {
        $('#J_poster').addClass('hide').removeClass('fade')
      })
    }
  }, false)

  $('#J_video').on('ended', function() {
    $('#J_ending').removeClass('hide').addClass('show')

    addAnimationEndEvent($('#J_ending')[0], function() {
      $('#J_videobox').removeClass('show')
    })
  })
}

/**
 * Canvas 分享帧动画
 */
var shareStage, shareSprite

function initGame() {
  // 初始化场景
  var canvas = document.querySelector('#J_share_stage')

  shareStage = new createjs.Stage(canvas)
  createjs.Ticker.addEventListener('tick', function(ev) {
    shareStage.update(ev)
  })
  createjs.Ticker.timingMode = createjs.Ticker.RAF

  initShareAnim()
}

function initShareAnim() {
  var spriteSheet = new createjs.SpriteSheet({
    images: [loader.getResult('sprite_share')],
    frames: {
      width: 526,
      height: 603
    },
    framerate: 14,
    animations: {
      'play': [0, 26, 'loop'],
      'loop': [17, 26],
      'stop': 0
    }
  })

  shareSprite = new createjs.Sprite(spriteSheet)
  shareSprite.x = 0
  shareSprite.y = 0
  shareStage.addChild(shareSprite)
  shareSprite.gotoAndPlay('stop')
}

window.pageInit = function() {
  slider.init({
    // needTouch: false,
    controller: pageController
  })

  $('[data-lock="1"]').on('touchmove', function(evt) {
    evt.preventDefault()
  })

  initEvents()
  initGame()
  // initMusic('./music/bg.mp3')
  initShare({
    title: '我们的小事',
    desc: '你的每一件小事，都是我们最重要的事'
  })
}
