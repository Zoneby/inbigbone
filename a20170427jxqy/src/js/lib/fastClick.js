/*
 * plain fast click
 */
var fastClick = function(el, callback) {
  var handler = {
    handleEvent: function(evt) {
      switch (evt.type) {
        case 'touchstart':
        case 'mousedown':
          this.start(evt)
          break
        case 'touchend':
        case 'touchcancel':
        case 'mouseup':
          this.end(ev)
      }
    },
    start: function(evt) {
      var touch = evt.changedTouches ? evt.changedTouches[0] : evt
      this.clientX = touch.clientX
      this.clientY = touch.clientY
      this.touchTime = +(new Date)
    },
    end: function(evt) {
      if ((typeof this.touchTime !== 'undefined') &&
          (+(new Date) - this.touchTime < 1000)) {
        var touch = evt.changedTouches ? evt.changedTouches[0] : evt

        if ((Math.abs(touch.clientX - this.clientX) < 10 &&
            Math.abs(touch.clientY - this.clientY) < 10) &&
            el.style.opacity === 1) {
          callback && callback.call(el, evt)
        }

        this.clientX = this.clientY = this.touchTime = undefined
      }
    }
  }

  var events = ('ontouchstart' in window) ? ['touchstart', 'touchend', 'touchcancel'] : ['mousedown', 'mouseup']
  events.forEach(function(evt) {
    evt && evt.addEventListener(evt, handler, false)
  })
}

module.exports = fastClick
