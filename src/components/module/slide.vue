<template>
    <div class="slide">
        <el-carousel trigger="click" height="300px">
            <el-carousel-item v-for="item in banner" :key="item.id">
                <a href="">
                    <img v-lazy="'https://api.webascii.cn'+item.urlPath" alt="">
                </a>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>


  export default {
    name: 'Name',
    data() {
      return {}
    },
    components: {},
    computed: {
      banner() {
        return this.$store.state.api.banner
      }
    },
    mounted() {
      // 改变api的数据
//      this.$store.commit('setApiData', {
//        key: 'aList',
//        data: '123aaaaaa'
//      })
    },
    //预请求
    asyncData({store, route: {params: {id}}}) {
      return store.dispatch('requireApi', {
        name: 'getBanner',
        data: {},
        method: 'post',
        key: 'banner',
        success(info) {
          return info.data.list
        },
        error(err) {
          console.log(err)
        }
      })
    }
  }
</script>
<style>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>
<style scoped lang="less">
    .slide{
        margin-bottom: 35px;
        border-radius: 6px;
        overflow: hidden;
        z-index: 1000;
        position: relative;
        /*background-color: red;*/
        width: 840px;
        height: 300px;
        /*float: left;*/
    }
</style>
