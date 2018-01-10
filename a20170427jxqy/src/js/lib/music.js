/**
 * Music Component
 */
var initMusic = function(options) {
  var musicConfig = {
    autoplay: options.autoplay === false ? false : true,
    // color: 'rgba(125,125,125,0.5)',
    id: options.id || null,
    loop: options.loop === false ? false : true,
    position: 'tr',
    src: options.src,
    custom: options.custom || false,
    playEvent: options.playEvent || function() {},
    stopEvent: options.stopEvent || function() {},
  }

  if (!musicConfig.src) return

  var className = 'playing'
  var trigger = 'ontouchend' in document ? 'touchstart' : 'click'
  var $music = document.createElement('div')
  var $audio = document.createElement('audio')
  var musicColor = musicConfig.color || '#fff'
  var musicClassname = 'music ' + musicConfig.position
  var html = '<svg fill="' + musicColor + '" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 64 64"><path d="M32.01 15.02c-9.39 0-17 7.61-17 17 0 9.388 7.61 17 17 17s17-7.612 17-17c0-9.39-7.612-17-17-17zm0 32c-8.285 0-15-6.716-15-15 0-8.284 6.715-15 15-15 8.283 0 15 6.716 15 15 0 8.284-6.717 15-15 15zm7.144-24.97c-.052-.007-.1-.03-.154-.03-.147 0-.284.035-.41.092l-9.677 1.88c-.082.016-.152.058-.227.092-.046.015-.09.032-.132.053-.017.01-.032.02-.048.033-.226.132-.388.344-.456.604-.004.012-.004.024-.007.036-.016.07-.043.135-.043.21v9.142c-1.057-.296-2.376-.125-3.584.58-2.02 1.182-2.95 3.384-2.074 4.917.875 1.534 3.223 1.82 5.242.64 1.646-.963 2.548-2.598 2.36-4.002.026-.09.056-.18.056-.28V25.815l8-1.554v7.902c-1.057-.296-2.376-.125-3.584.58-2.02 1.182-2.95 3.384-2.074 4.917.875 1.534 3.223 1.82 5.242.64 1.646-.963 2.548-2.598 2.36-4.002.026-.09.056-.18.056-.28v-11c0-.018-.01-.035-.01-.054 0-.037.014-.073.01-.11-.04-.467-.4-.78-.846-.803zM26.528 38.448c-1.01.59-2.065.654-2.357.143-.29-.512.292-1.405 1.303-1.996 1.01-.59 2.065-.654 2.356-.143.29.514-.292 1.406-1.302 1.997zm10-2c-1.01.59-2.065.654-2.357.143-.29-.512.292-1.405 1.303-1.996 1.01-.59 2.065-.654 2.356-.143.29.514-.292 1.406-1.302 1.997z"/></svg><span style="background-color:' + musicColor + '"></span>'

  if (musicConfig.id) {
    $music.id = musicConfig.id
  }

  if (document.querySelector('#' + musicConfig.id)) return

  $music.className = musicClassname
  $audio.src = musicConfig.src

  if (!musicConfig.custom) {
    $music.innerHTML = html
  }

  function start() {
    document.removeEventListener(trigger, start)
    if (!$audio.paused) return
    $audio.play()
  }

  function toggle(evt) {
    evt.stopPropagation()
    if (!$audio.paused) {
      $audio.pause()
      return
    }
    $audio.play()
  }

  function play(evt) {
    musicConfig.playEvent()
    $music.classList.add(className)
    window.isSoundOff = false
  }

  function pause(evt) {
    musicConfig.stopEvent()
    $music.classList.remove(className)
    window.isSoundOff = true
  }

  function closeToTime(time) {
    return Math.abs($audio.currentTime - time) < 0.5
  }

  // window.playMusic = function(time) {
  //   if ($audio.readyState == 4) {
  //     $audio.currentTime = time
  //     $audio.play()
  //   }
  // }

  $audio.addEventListener('play', play)
  $audio.addEventListener('pause', pause)
  $music.addEventListener('click', toggle)

  if (musicConfig.loop) {
    $audio.loop = 'loop'
  } else {
    $audio.addEventListener('ended', pause)
  }

  if (musicConfig.autoplay) {
    $audio.play()
  }

  document.body.appendChild($music)
  document.addEventListener(trigger, start)
}

module.exports = initMusic
