<template>
    <nav class="navbar">
        <div class="width-limit">
            <a href="/" class="logo">
                <img src="../../../public/logo.png" alt="">
            </a>
            <a href="/writer" class="write-btn">
                <i class="iconfont icon-icon5"></i>
                写文章
            </a>
            <div class="container">
                <div class="collapse">
                    <ul class="nav">
                        <li class="tab active">
                            <a href="/">
                                <span class="menu-text">
                                    <i class="iconfont icon-faxian"></i>
                                    首页
                                </span>
                            </a>
                        </li>
                        <li class="tab">
                            <a href="/">
                                <span class="menu-text">
                                    
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'navBar',
        data () {
            return {

            }
        },
        methods: {

        },
        computed: {
            renderingData () {
                return this.$store.state.api.aList
            }
        },
        //预请求
        asyncData ({ store, route: { params: { id }}}) {
            return store.dispatch('requireApi', {
                // url:store.state.apiPath+'api/demo/index123',
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
        mounted () {

        }
    }
</script>

<style scoped lang="less">
    .navbar{
        border: 1px solid transparent;
        background-color: #fff;
        border-color: #f0f0f0;
        top: 0;
        border-radius: 0;
        position: fixed;
        right: 0;
        left: 0;
        z-index: 1030;
        min-height: 50px;
        margin-bottom: 20px;
        height: 56px;
        .width-limit{
            min-width: 768px;
            max-width: 1440px;
            margin: 0 auto;
            .logo {
                float: left;
                height: 56px;
                padding: 0;
                img{
                    height: 100%;
                    vertical-align: middle;
                    border: 0;
                }
            }
            .write-btn {
                float: right;
                width: 100px;
                height: 40px;
                line-height: 24px;
                margin: 8px 15px 0;
                border-radius: 20px;
                font-size: 15px;
                color: #fff;
                background-color: #ea6f5a;
                display: inline-block;
                font-weight: 400;
                text-align: center;
                vertical-align: middle;
                -ms-touch-action: manipulation;
                touch-action: manipulation;
                cursor: pointer;
                background-image: none;
                border: 1px solid transparent;
                white-space: nowrap;
                padding: 6px 12px;
                user-select: none;
                i{
                    font-size: 15px;
                }
            }
            .container{
                width: 960px;
                margin-right: auto;
                margin-left: auto;
                padding-left: 15px;
                padding-right: 15px;
                .collapse{
                    border-color: #e7e7e7;
                    margin-right: 0;
                    display: block;
                    height: auto;
                    padding-bottom: 0;
                    overflow: visible;
                    margin-left: -15px;
                    width: auto;
                    border-top: 0;
                    box-shadow: none;
                    .nav{
                        float: left;
                        margin: 0;
                        padding-left: 0;
                        list-style: none;
                        li{
                            margin-right: 10px;
                            float: left;
                            position: relative;
                            display: block;
                            line-height: 20px;
                            > a{
                                background: none;
                                height: 56px;
                                line-height: 26px;
                                padding: 15px;
                                position: relative;
                                display: block;
                                text-decoration: none;
                                color: #333;
                            }
                            > a:hover{
                                background-color: hsla(0,0%,71%,.1)!important
                            }
                        }
                        li.active a{
                            color: #ea6f5a;
                        }
                    }
                }
            }
        }
    }
</style>
