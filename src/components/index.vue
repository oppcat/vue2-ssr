<template>
    <div class="collection">
        {{renderingData}}
        <ul>
            <li v-for="item in name">{{item}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'index',
        data() {
            return {
                name:[1,2,3,4]
            }
        },
        computed: {
            renderingData () {
                return this.$store.state.api.aList
            }
        },
        //预请求
        asyncData ({ store, route: { params: { id }}}) {
            return store.dispatch('requireApi', {
                url:store.state.apiPath+'api/demo/index123',
                name:'kyle1',
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
        title () {
            return '1111222333'
        },
        mounted () {
            // 改变api的数据
            // this.$store.commit('setApiData', {
            //     key:'aList',
            //     data:'123aaaaaa'
            // })
        }
    }
</script>

<style lang="scss">
    /*.collection {*/
        /*padding: 52px 18px 0;*/
    /*}*/
</style>
