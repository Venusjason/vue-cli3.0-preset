// 工具函数

// 获取浏览器信息参数
function GetBrowserInfo() {
  const u = navigator.userAgent.toLowerCase()
  return {
    isMobile: !!u.match(/applewebkit.*mobile.*/), // 是否为移动终端
    isIos: !!u.match(/\(i[^;]+;( u;)? cpu.+mac os x/), // ios终端
    isAndroid: u.indexOf('android') > -1 || u.indexOf('adr') > -1, // android终端
    isWx: u.indexOf('micromessenger') > -1, // 是否微信
    isXiaoYApp: u.indexOf('xiaoy') > -1, // 是否小Y app
    isSimpleBrowser: u.indexOf('micromessenger') === -1 && u.indexOf('xiaoy') === -1, // 普通浏览啊环境
  }
}

export const BrowserInfo = GetBrowserInfo()

// 获取 URL 参数的值,并支持utf-8解码 返回一个对象
export const GetQueries = (urlStr = window.location.href) => {
  if (urlStr.indexOf('?') === -1) {
    // console.warn('url无过滤参数')
    return {}
  }
  let str = urlStr.split('?')[1]
  if (str.substr(str.length - 1, 1) === '&') {
    // 对最后一项如果多余& 截取
    str = str.substr(0, str.length - 1)
  }
  const theRequest = {}
  if (str.indexOf('?') === -1) {
    const strs = str.split('&')
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = decodeURI(strs[i].split('=')[1])
    }
  }
  console.log('获取参数键值对: ', theRequest)
  return theRequest
}
