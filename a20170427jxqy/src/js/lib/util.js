/**
 * Tools
 */
var Util = {
  /**
   * AnimationEnd
   * @param {[HTMLDom]} ele  [element]
   * @param {[function]} func [callback function]
   */
  addAnimationEndEvent: function (ele, func) {
    var fun = function () {
      ele.removeEventListener('webkitAnimationEnd', fun)
      func()
    }
    ele.addEventListener('webkitAnimationEnd', fun)
  },
  /**
   * TransitionEnd
   * @param {[HTMLDom]} ele  [element]
   * @param {[function]} func [callback function]
   */
  addTransitionEndEvent: function (ele, func) {
    var fun = function () {
      ele.removeEventListener('webkitTransitionEnd', fun)
      func()
    }
    ele.addEventListener('webkitTransitionEnd', fun)
  },
  /**
   * get params of url
   * @param {[string]} key  [param]
   * @param {[string]} url  [default: window.location]
   */
  queryString: function (key, url) {
    url = url || window.location.href
    var result = new RegExp('[\\?&]' + key + '=([^&#]*)', 'i').exec(url)
    return result && decodeURIComponent(result[1]) || ''
  },
  /**
   * 地址添加参数
   * @param {[type]} name  [description]
   * @param {[type]} value [description]
   */
  addParamToUrl: function (url, name, value) {
    var currentUrl = url.split('#')[0];//window.location.href.split('#')[0];
    if (/\?/g.test(currentUrl)) {
      if (/name=[-\w]{4,25}/g.test(currentUrl)) {
        currentUrl = currentUrl.replace(/name=[-\w]{4,25}/g, name + "=" + value);
      } else {
        currentUrl += "&" + name + "=" + value;
      }
    } else {
      currentUrl += "?" + name + "=" + value;
    }
    if (window.location.href.split('#')[1]) {
      return currentUrl + '#' + window.location.href.split('#')[1];
    } else {
      return currentUrl;
    }
  },
  /**
   * get cookie
   * @param  {[string]} name [param name]
   */
  getCookie: function (name) {
    var reg = new RegExp('(^|;|\\s+)' + name + '=([^;]*)(;|$)')
    var match = document.cookie.match(reg)
    return (!match ? null : unescape(match[2]))
  },
  /**
   * add cookie
   */
  addCookie: function (name, value, expire, path, domain) {
    var str = name + '=' + escape(value) + '; path=' + (path || '/') + (domain ? ('; domain=' + domain) : '')
    if (expire > 0) {
      var now = new Date()
      now.setDate(now.getDate() + expire)
      str += '; expires=' + now.toGMTString()
    }
    document.cookie = str
  },
  /**
   * get random number
   * @param {[number]} start  [min number]
   * @param {[number]} end  [max number]
   */
  getRandom: function (start, end) {
    return Math.floor(Math.random() * (end + 1 - start) + start)
  },
  /**
   * shuffle array
   */
  shuffle: function (arr) {
    var newArr = arr.slice()
    var i, j, temp
    for (i = newArr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1))
      temp = newArr[i]
      newArr[i] = newArr[j]
      newArr[j] = temp
    }
    return newArr
  }
}

module.exports = Util
