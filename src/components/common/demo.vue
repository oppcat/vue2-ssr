<template>
    <div class="">
{{articleRecommend[0].title}}
    </div>
</template>

<script>
  export default {
    name: 'Name',
    data() {
      return {}
    },
    computed : {
      articleRecommend () {
//        console.log(this.$store)
//        return this.$store.state.api.articleRecommend
        return 123123
      }
    },
    computed: {
      articleRecommend() {
        return this.$store.state.api.articleRecommend
      }
    },
    //预请求
    asyncData({store, route: {params: {id}}}) {
      return store.dispatch('requireApi', {
        name: 'articleRecommend',
        data: {},
        method: 'post',
        key: 'articleRecommend',
        success(info) {
          info.data.list.map((t) => {
            try {
              t.articleClassify = JSON.parse(t.articleClassify)
            }catch (e){

            }
          });
          return info.data.list
        },
        error(err) {
          console.log(err)
        }
      })
    },
    components: {},
    mounted() {

    }
  }
</script>

<style scoped lang="less">

</style>
