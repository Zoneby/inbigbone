/**
 * Simple Slider Component
 */
var SimpleSlider = {
  init: function(options) {
    var el = $('#pages')[0]
    var needTouch = options.needTouch === false ? false : true

    if (needTouch) {
      ['touchstart', 'touchmove', 'touchend', 'touchcancel', 'mousedown', 'mousemove', 'mouseup'].forEach(function(ev) {
        el.addEventListener(ev, this, false)
      }.bind(this))
    }

    this.threshold = 50

    // page controller
    this.hook = options.controller || {
      shouldGoToPrev: function(el) { return true },
      shouldGoToNext: function(el) { return true },
      didGoToPage: function(el, prevEl) {},
      shouldDoSlide: function(el) {}
    }

    $('.page').each(function(i, item) {
      if (i == 0) {
        $(item).addClass('current')
        this.curPage = item
        this.curIdx = i
      } else {
        item.style.opacity = 0
        item.style.display = 'none'
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
    // ev.preventDefault()

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
    } else if (nextPage && this.distY < -this.threshold && this.hook.shouldGoToNext(this.curPage, this)) {
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
  goToPage: function(pageNum, type) {
    if (pageNum >= this.curIdx) {
      this.turn(document.querySelector('.p' + pageNum), false, type)
    } else {
      this.turn(document.querySelector('.p' + pageNum), true, type)
    }
    this.reset(pageNum - 1)
  },
  prev: function(el) {
    this.turn(el, true)
  },
  next: function(el) {
    this.turn(el, false)
  },
  reset: function(idx) {
    var pageLen = $('.page').length
    for (var i = 0; i < idx; i++) {
      document.querySelector('.p' + (i+1)).style.webkitTransform = 'translate3d(0, -100%, 0)'
    }
    for (var i = idx + 1; i < pageLen; i++) {
      document.querySelector('.p' + (i+1)).style.webkitTransform = 'translate3d(0, 100%, 0)'
    }
  },
  turn: function(el, prev, type) {
    var currentPage = this.curPage
    currentPage.style.webkitTransform = prev ? 'translate3d(0, 100%, 0)' : 'translate3d(0, -100%, 0)'
    el.style.webkitTransform = prev ? 'translate3d(0, -100%, 0)' : 'translate3d(0, 100%, 0)'
    el.style.zIndex = 10
    if (type === 'fade') {
      el.style.webkitTransition = 'opacity .3s'
      currentPage.style.webkitTransition = 'opacity .3s'
    } else {
      el.style.webkitTransition = 'transform .3s'
      currentPage.style.webkitTransition = 'transform .3s'
    }

    $(currentPage).one('webkitTransitionEnd', function() {
      currentPage.style.webkitTransform = prev ? 'translate3d(0, 100%, 0)' : 'translate3d(0, -100%, 0)'
    }.bind(this))

    el.style.display = 'block'
    setTimeout(function() {
      this.sliding = true
      el.style.opacity = 1
      el.style.webkitTransform = 'translate3d(0, 0, 0)'

      $(el).one('webkitTransitionEnd', function() {
        currentPage.style.opacity = 0
        this.curPage.style.zIndex = ''

        $(this.curPage).removeClass('current')
        $(el).addClass('current')

        this.hook.didGoToPage(el, this.curPage)
        this.curPage = el
        this.curIdx = prev ? (this.curIdx - 1) : (this.curIdx + 1)
        this.sliding = false
      }.bind(this))
    }.bind(this), 20)
  }
}

module.exports = SimpleSlider
