<template>
  <div id="app">
    <!--<navBar></navBar>-->
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>
<script>
  // 对Date的扩展，将 Date 转化为指定格式的String
  // 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
  // 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
  // 例子：
  // (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
  // (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
  Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
      "M+": this.getMonth() + 1, //月份
      "d+": this.getDate(), //日
      "h+": this.getHours(), //小时
      "m+": this.getMinutes(), //分
      "s+": this.getSeconds(), //秒
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度
      "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  };
  import Vue from 'vue';
  import ElementUI from 'element-ui';
  import 'element-ui/lib/theme-chalk/index.css';
  Vue.use(ElementUI)

  import VueLazyLoad from 'vue-lazyload'
  Vue.use(VueLazyLoad,{
//    error:'./static/error.png',
//    loading:'./static/loading.png'
  })
    export default {
        name: 'app',
        data () {
            return {
                
            }
        },
        components: {
//            navBar,
        }
    }
</script>
<style lang="stylus">
  @import "~normalize.css"
  @import "../assets/iconfont/iconfont.css"
  body,html {
    height: 100%
  }
  a{
    text-decoration none;
    color: #333;
  }
  /*自定义通用样式*/
  .cur{
    cursor: pointer !important;
  }
  .tof{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden
  }
  *, :after, :before {
    box-sizing: border-box;
  }
  body {
    padding-top: 56px!important;
    min-width: 768px;
    font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    font-size: 17px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%
  }
.fade-enter-active, .fade-leave-active
  transition all .2s ease

.fade-enter, .fade-leave-active
  opacity 0
</style>
