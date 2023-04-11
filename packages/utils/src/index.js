/**
 * 深度冻结 属性不能删改
 * obj 对象
 */
const deepFreeze = (obj) => {
  const allProps = Object.getOwnPropertyNames(obj)
  // 同上：var allProps = Object.keys(obj);
  allProps.forEach((item) => {
    if (typeof obj[item] === "object" && obj[item] !== null) {
      deepFreeze(obj[item])
    }
  })
  return Object.freeze(obj)
}

/**
 * 千分位
 * num 数字
 */
const formatMille = (num) => {
  return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

/**
 * IE浏览器版本
 */
function IEVersion() {
  const { userAgent } = navigator // 取得浏览器的userAgent字符串
  const isIE =
    userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 // 判断是否IE<11浏览器
  const isEdge = userAgent.indexOf("Edge") > -1 && !isIE // 判断是否IE的Edge浏览器
  const isIE11 =
    userAgent.indexOf("Trident") > -1 && userAgent.indexOf("rv:11.0") > -1
  if (isIE) {
    const reIE = new RegExp("MSIE (\\d+\\.\\d+);")
    reIE.test(userAgent)
    const fIEVersion = parseFloat(RegExp.$1)
    if (fIEVersion == 7) {
      return 7
    }
    if (fIEVersion == 8) {
      return 8
    }
    if (fIEVersion == 9) {
      return 9
    }
    if (fIEVersion == 10) {
      return 10
    }
    return 6 // IE版本<=7
  }
  if (isEdge) {
    return "edge" // edge
  }
  if (isIE11) {
    return 11 // IE11
  }
  return -1 // 不是ie浏览器
}

/**
 * 验证手机号
 */
function isValidPhone(phone) {
  // 支持11位手机号码验证
  // 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/
  const regx = /^1[2-9]\d{9}$/
  const flag = regx.test(phone)
  return flag
}

/**
 * 深拷贝
 * obj 待拷贝的对象数组或对象
 * cache 缓存 WeakMap
 */
function deepCopy(obj, cache = new WeakMap()) {
  if (typeof obj !== "object" || obj === null) {
    return obj
  }
  if (cache.get(obj)) {
    return cache.get(obj)
  }
  let copy = Array.isArray(obj) ? [] : {}
  cache.set(obj, copy)
  Object.keys(obj).forEach((key) => {
    copy[key] = deepCopy(obj[key], cache)
  })
  return copy
}

export { deepFreeze, formatMille, IEVersion, isValidPhone, deepCopy }
