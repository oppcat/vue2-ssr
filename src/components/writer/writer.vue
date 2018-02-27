<template>
    <div class="">

    </div>
</template>

<script>
    export default {
        name: 'writer',
        data () {
            return {

            }
        },
        components: {

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
        asyncData ({ store, route: { params: { id }}}) {
          return store.dispatch('requireApi', {
//            url:store.state.apiPath+'api/demo/index123',
            name:'kyle',
            data:{
              a:1,
              id:2
            },
            method:'post',
            key:'aList',
            success (info) {
              return info.data
            },
            error (err) {
              console.log(err)
            }
          })
        },
        //title () {
        //  return 'title'
        //}
    }
</script>

<style>

</style>
