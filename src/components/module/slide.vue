<template>
    <div class="slide">

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
//            demoData () {
//              return this.$store.state.api.data
//            }
    },
    mounted() {
      // 改变api的数据
//      this.$store.commit('setApiData', {
//        key: 'aList',
//        data: '123aaaaaa'
//      })
    },
//        //预请求
//        asyncData ({ store, route: { params: { id }}}) {
//          return store.dispatch('requireApi', {
//            url:store.state.apiPath+'api/demo/index123',
//            name:'kyle1',
//            data:{
//              a:1,
//              id:2
//            },
//            method:'post',
//            key:'aList',
//            success (info) {
//              return info.data
//            },
//            error (err) {
//              console.log(err)
//            }
//          })
//        },
//        title () {
//          return 'title'
//        }
  }
</script>

<style scoped lang="less">
    .slide{
        margin-bottom: 35px;
        border-radius: 6px;
        overflow: hidden;
        z-index: 1000;
        position: relative;
        background-color: red;
        width: 840px;
        height: 300px;
        float: left;
    }
</style>
