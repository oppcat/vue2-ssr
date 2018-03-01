// var cheerio = require('cheerio');
// 暂时废弃
// 设置自定义script
function getSc (vm) {
  const { script } = vm.$options
  if (script) {
    return typeof script === 'function'
      ? script.call(vm)
      : script
  }
}

const serverScMixin = {
  created () {
    const script = getSc(this)
    if (script) {
      this.$ssrContext.script = `${script}`
    }
  }
};

// 客户端不需要
const clientScMixin = {

}

export default process.env.VUE_ENV === 'server'
  ? serverScMixin
  : clientScMixin
