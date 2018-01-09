/* PollyFill for iOS 5.* */
if (!Function.prototype.bind) {
	Function.prototype.bind = function (oThis) {
		var args = Array.prototype.slice.call(arguments, 1)
		var f2bind = this
		var fnop = function () {}
		var bound = function () {
			return f2bind.apply(this instanceof fnop && oThis
				? this
				: oThis,
				args.concat(Array.prototype.slice.call(arguments)))
		}
		fnop.prototype = this.prototype
		bound.prototype = new fnop()
		return bound
	}
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

var TRANSFORM = prefix('transform'),
	TRANSITION = prefix('transition')

var Slider = function(options) {
	// 初始化配置参数
	this.options = $.extend({
		slideWrap: '.pages',	// 容器
		slideItem: '.page',	// 滑动单元的元素
		direction: 'Y',	// 滑动的方向
		effect: 'slide',	// 滑动的效果
		triggleDist: 100,	// 触发滑动的手指移动最小位移
		followFinger: true,	// 是否跟随手指移动
		duration: .4,	// 翻页的延时
		currentIdx: 0	// 初始显示的页码
	}, options)

	var EffectDict = {
		'slide'	: ['slide', 'slide'],
		'scale'	: ['slide', 'scale']
	}

	this.pagesWrap = document.querySelector(this.options.slideWrap)
	this.pages = document.querySelectorAll(this.options.slideItem)

	this.hook = this.options.slideController
	this._total = this.pages.length
	this._pageX = 0
	this._pageY = 0
	this._distance = 0	// 页面之间切换的距离
	this._moveDist = 0	// touch 滑动的距离
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
//背景音乐
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

	if (music.autoplay) $audio.play()

	document.body.appendChild($music)
	document.body.appendChild($audio)
	document.addEventListener(trigger, start, false)
}
//页面逻辑控制器
var slideController = {
	shouldGoToPrev: function(el) {
		return true;
	},
	shouldGoToNext: function(el) {

		return true;
	},
	didGoToPage: function(el, prevEl) {
		var idx = $(el).index();
		if (idx !== 4 ){
			$('.hu').removeClass('ani_hu');
		}
		if (idx !== 1 ){
			try{
				$('video')[0].pause();
				$('video').hide();
			}catch(e){}
		}
		if (idx == 2 ){
			try{
				$('audio')[0].play();
			}catch(e){}
		}
	}
}
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
					callback && callback()
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
function query(selector){
	return document.querySelector(selector);
}

window.pageInit = function() {

	var slider = new Slider({
		slideWrap: '.pages',
		slideItem: '.page',
		direction: 'X',
		currentIdx: 0,
		followFinger: false,
		slideController: slideController
	})
	var mySwiperImg = new Swiper('#imgwsiper', {
		effect : 'coverflow',
		direction : 'vertical',
		width: 640,//你的slide高度
		height: 262,//你的slide高度
		loop: true,
		loopAdditionalSlides : 4,
		// slidesPerView : 1,
		loopedSlides :8,
		coverflow: {
	        rotate: 40,
	        stretch: 0,
	        depth: 200,
	        modifier: 1,
	        slideShadows : true
	    },
		centeredSlides : true,
		spaceBetween : -100
	})
	mySwiperImg.slideTo(5, 1000, false);//切换到第5个slide，速度为1秒
	fastClick(query('.p2_mz'),function (){
		$('.caidanbg').show()
	})
	fastClick(query('.caidanbg'),function (){
		$('.caidanbg').hide()
	})
	fastClick(query('.deleteicon'),function (){
		$('.caidanbg').hide()
	})
	$('.hu').on('webkitAnimationEnd',function (ev){
		$('.hu').addClass('ani_hu');
	})
	var video = $('video');
	var audio = $('audio');
	if (video.length && audio.length){
		console.log('y');
		video[0].addEventListener('play',function (){
			audio[0].pause();
		},false)
		// video[0].addEventListener('pause',function (){
		// 	audio[0].play();
		// },false)
	}
}
