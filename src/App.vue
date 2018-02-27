<template>
  <div id="app">
    <navBar></navBar>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>
<script>
    import navBar from './components/common/navBar.vue'
    export default {
        name: 'app',
        data () {
            return {
                
            }
        },
        components: {
            navBar,
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
    text-decoration none
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
.view
  max-width 800px
  margin 0 auto
  position relative

.fade-enter-active, .fade-leave-active
  transition all .2s ease

.fade-enter, .fade-leave-active
  opacity 0
</style>
