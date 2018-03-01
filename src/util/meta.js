// var cheerio = require('cheerio');
// 设置自定义meta
function getMeta (vm) {
  const { meta } = vm.$options
  if (meta) {
    return typeof meta === 'function'
      ? meta.call(vm)
      : meta
  }
}

const serverMetaMixin = {
  created () {
    const meta = getMeta(this)
    if (meta) {
      this.$ssrContext.meta = `${meta}`
    }
  }
};

// 客户端不需要
const clientMetaMixin = {
  // mounted () {
  //   const meta = getMeta(this)
  //   if (meta) {
  //     $ = cheerio.load(`${meta}`);
  //     $.html()
  //   }
  // }
}

export default process.env.VUE_ENV === 'server'
  ? serverMetaMixin
  : clientMetaMixin
