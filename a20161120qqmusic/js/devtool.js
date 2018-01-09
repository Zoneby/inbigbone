function dragToPosition(slider) {
	var dragInfo = {}, dragEnabled

	// 按配置的参考点进行基础定位
	$('#pages [data-rp]').each(function(i, item) {
		switch (+item.getAttribute('data-rp')) {
			case 1:
				$(item).css({
					left: '0',
					top: '0'
				})
				break
			case 2:
				$(item).css({
					left: '50%',
					top: 0
				})
				break
			case 3:
				$(item).css({
					right: '0',
					top: '0'
				})
				break
			case 4:
				$(item).css({
					top: '50%',
					left: 0
				})
				break
			case 5:
				$(item).css({
					top: '50%',
					left: '50%'
				})
				break
			case 6:
				$(item).css({
					right: '0',
					top: '50%'
				})
				break
			case 7:
				$(item).css({
					bottom: '0',
					left: '0'
				})
				break
			case 8:
				$(item).css({
					bottom: '0',
					left: '50%'
				})
			case 9:
				$(item).css({
					right: '0',
					bottom: '0'
				})
		}
	})


	$('#pages [data-rp]').on('mouseenter touchstart', function(ev) {
		dragEnabled && $(ev.target).css('outline', '2px solid blue')
	})

	$('#pages [data-rp]').on('mouseleave touchend', function(ev) {
		dragEnabled && $(ev.target).css('outline', '')
	})

	$('#pages [data-rp]').on('mousedown touchstart', function(ev) {
		var target = ev.target
		ev = 'ontouchend' in window ? ev.touches[0] : ev
		if (dragEnabled && target.hasAttribute('data-rp')) {
			dragInfo = {
				target: target,
				x: ev.clientX,
				y: ev.clientY,
				pageRect: $('#pages')[0].getBoundingClientRect()
			}
		}
	})

	$('#pages [data-rp]').on('mousemove touchmove', function(ev) {
		var target = dragInfo.target
		ev = ('ontouchend' in window && ev.touches) ? ev.touches[0] : ev

		if (dragEnabled && typeof target != 'undefined') {
			var x = ev.clientX,
				y = ev.clientY

			switch (+target.getAttribute('data-rp')) {
				case 1:
				case 2:
				case 4:
				case 5:
					$(target).css({
						'margin-left': Math.ceil((parseInt($(target).css('margin-left')) || 0) + x - dragInfo.x),
						'margin-top': Math.ceil((parseInt($(target).css('margin-top')) || 0) + y - dragInfo.y)
					})
					break
				case 3:
				case 6:
					$(target).css({
						'margin-right': Math.ceil((parseInt($(target).css('margin-right')) || 0) - x + dragInfo.x),
						'margin-top': Math.ceil((parseInt($(target).css('margin-top')) || 0) + y - dragInfo.y)
					})
					break
				case 7:
				case 8:
					$(target).css({
						'margin-left': Math.ceil((parseInt($(target).css('margin-left')) || 0) + x - dragInfo.x),
						'margin-bottom': Math.ceil((parseInt($(target).css('margin-bottom')) || 0) + dragInfo.y - y)
					})
					break
				case 9:
					$(target).css({
						'margin-right': Math.ceil((parseInt($(target).css('margin-right')) || 0) - x + dragInfo.x),
						'margin-bottom': Math.ceil((parseInt($(target).css('margin-bottom')) || 0) + dragInfo.y - y)
					})
					break
			}

			dragInfo.x = ev.clientX
			dragInfo.y = ev.clientY

			//辅助线逻辑
			var pageRect = dragInfo.pageRect,
				rect = target.getBoundingClientRect()

			if (Math.abs( (pageRect.left + pageRect.width / 2) - (rect.left + rect.width / 2) ) < 1 ) {
				$(vLine).css({
					'left': '50%',
					'margin-left': '-2px'
				}).show()
			} else if (pageRect.left == rect.left) {
				$(vLine).css({
					'left': pageRect.left,
					'margin-left': '0'
				}).show()
			} else if (pageRect.right == rect.right) {
				$(vLine).css({
					'left': pageRect.right,
					'margin-left': '-2px'
				}).show()
			} else {
				$(vLine).hide()
			}

			if (Math.abs( (pageRect.top + pageRect.height / 2) - (rect.top + rect.height / 2) ) < 1 ) {
				$(hLine).css({
					'top': '50%',
					'margin-top': '-2px'
				}).show()
			} else if (pageRect.top == rect.top) {
				$(hLine).css({
					'top': pageRect.top,
					'margin-top': '0'
				}).show()
			} else if (pageRect.bottom == rect.bottom) {
				$(hLine).css({
					'top': pageRect.bottom,
					'margin-top': '-2px'
				}).show()
			} else {
				$(hLine).hide()
			}
		}
	})

	$('#pages').on('mouseup', function(ev) {
		var target = ev.target

		if (dragEnabled && target.hasAttribute('data-rp')) {
			dragInfo = {}
		}

		$(vLine).hide()
		$(hLine).hide()
	})

	//开关
	var checkbox = document.createElement('input')
	checkbox.style.cssText = 'position:absolute;top:50px;left:50px;-webkit-transform:scale(5);z-index:100;'
	$(checkbox).attr('type', 'checkbox')
	document.body.appendChild(checkbox)

	var imgBtn = document.createElement('input')
	imgBtn.type = 'file'
	imgBtn.style.cssText = 'position:absolute;display:block;top:100px;left:32px;z-index:100;width:50px;height:50px;font-size:14px;'
	document.body.appendChild(imgBtn)

	$(checkbox).on('change', function() {
		if (!this.checked) {
			// console.log($('.page.current').html())
		}
		dragEnabled = slider._sliding = this.checked
	})

	$(imgBtn).on('change', function(evt) {
		var file = this.files[0]
		var reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onload = function(e) {
			var img = new Image()
			img.src = this.result
			img.style.cssText = 'z-index:80;position:absolute;top:0;left:0;opacity:0.2;'
			document.body.appendChild(img)
		}
	})

	//参考线
	var vLine = document.createElement('div'),
		hLine = document.createElement('div')

	vLine.style.cssText = 'position:absolute; z-index:100; background:red; display:none; top:0; height:100%; width:2px;'
	hLine.style.cssText = 'position:absolute; z-index:100; background:red; display:none; left:0; width:100%; height:2px;'

	document.body.appendChild(vLine)
	document.body.appendChild(hLine)
}