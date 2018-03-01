<template>
    <div class="">
        <mavon-editor style="height: 100%"></mavon-editor>
    </div>
</template>

<script>
  import Vue from 'vue'
  var mavonEditor = require('mavon-editor')
  import 'mavon-editor/dist/css/index.css'


//  Vue.use(mavonEditor)
//  setTimeout(() =>{
    require('./js')
//  },2000)
    export default {
        name: 'writer',
        data () {
            return {
              value: 'zzzzzzzzzz'
            }
        },
        components: {
//          'mavon-editor' (resolve) {
//            //异步组件写法
////            require('mavon-editor', resolve)
////            require(['./service-search.vue'], resolve)
//          }
        },
        computed: {
            demoData () {
              return this.$store.state.api.aList
            }
        },
        mounted () {
            // 改变api的数据
            // this.$store.commit('setApiData', {
            //     key:'aList',
            //     data:'123aaaaaa'
            // })
        },
        //预请求
//        asyncData ({ store, route: { params: { id }}}) {
//          return store.dispatch('requireApi', {
////            url:store.state.apiPath+'api/demo/index123',
//            name:'kyle',
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
        //title () {
        //  return 'title'
        //}
    }
</script>

<style>

</style>
