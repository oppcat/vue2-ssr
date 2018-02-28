<template>
    <div class="list-container">
        <ul class="note-list">

            <li v-for="item in articleRecommend" :class="{'have-img' : item.articleImageView != ''}">
                <router-link :to="'/article/'+item.id" class="wrap-img" v-if="item.articleImageView != ''">
                    <img :src="item.articleImageView" alt="" class="img-blur-done">
                </router-link>
                <div class="content">
                    <div class="author">
                        <a class="avatar">
                            <img :src="item.headImg" alt="">
                        </a>
                        <div class="info">
                            <a class="nickname">ddddd</a>
                            <span class="time">20:37</span>
                        </div>
                    </div>
                    <router-link :to="'/article/'+item.id" class="title">{{item.title}}</router-link>
                    <div class="abstract wrap">
                        {{item.describe}}
                    </div>
                    <div class="meta">
                        <router-link :to="'/category/'+item.articleClassify[0]+'/'+item.articleClassify[1]" class="collection-tag">
                            {{item.categoryName[1]}}
                        </router-link>
                        <a class="num">
                            <i class="iconfont icon-browse"></i>
                            {{item.views}}
                        </a>
                        <!--<a class="num">-->
                            <!--<i class="iconfont icon-iconfontpinglun"></i>-->
                            <!--22-->
                        <!--</a>-->
                    </div>
                </div>
            </li>
            <li class="">
                <div class="content">
                    <div class="author">
                        <a href="" class="avatar">
                            <img src="https://note.webascii.cn/images/demo.jpg" alt="">
                        </a>
                        <div class="info">
                            <a class="nickname">ddddd</a>
                            <span class="time">20:37</span>
                        </div>
                    </div>
                    <router-link to="/article/213" class="title">有稿费投稿邮箱分享给大家</router-link>
                    <div class="abstract">
                        有稿费投稿邮箱分享给大家(一) 有稿费投稿公众号第二波哟！ 对我而言，人生就是一场异常艰苦的修行，而写作，就如同古人面壁修行一样，于我也是一场漫长的修行! 前路漫漫吾将上下而...
                    </div>
                    <div class="meta">
                        <div class="collection-tag">
                            心情随笔
                        </div>
                        <a>
                            <i class="iconfont icon-browse"></i>
                            1983
                        </a>
                        <a>
                            <i class="iconfont icon-iconfontpinglun"></i>
                            22
                        </a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'recommend-content',
    data() {
      return {}
    },
    components: {},
    computed: {
      articleRecommend() {
        return this.$store.state.api.articleRecommend
      },
      aList() {
        return this.$store.state.api.aList
      }
    },
    mounted() {

    }
  }
</script>

<style scoped lang="less">
    .list-container{
        .note-list{
            margin: 0;
            padding: 0;
            list-style: none;
            display: block;
            li{
                position: relative;
                width: 100%;
                margin: 0 0 17px;
                padding: 0 2px 17px 0;
                border-bottom: 1px solid #f0f0f0;
                word-wrap: break-word;
                line-height: 20px;
            }
            li.have-img {
                min-height: 140px;
                .wrap-img{
                    position: absolute;
                    top: 50%;
                    margin-top: -68px;
                    right: 0;
                    width: 150px;
                    height: 120px;
                    img{
                        width: 100%;
                        height: 100%;
                        border-radius: 4px;
                        border: 1px solid #f0f0f0;
                        vertical-align: middle;
                    }
                }
            }
            .have-img>div {
                padding-right: 160px;
            }
            .author {
                margin-bottom: 14px;
                font-size: 13px;
                .avatar{
                    display: inline-block;
                    vertical-align: middle;
                    width: 32px;
                    height: 32px;
                    cursor: pointer;
                    img {
                        width: 100%;
                        height: 100%;
                        border: 1px solid #ddd;
                        border-radius: 50%;
                    }
                }
                .info {
                    display: inline-block;
                    vertical-align: middle;
                    margin-left: 10px;
                    .nickname {
                        vertical-align: middle;
                    }
                    span.time {
                        display: inline-block;
                        padding-left: 3px;
                        color: #969696;
                        vertical-align: middle;
                        margin-left: 10px;
                    }
                }
                a {
                    color: #333;
                    cursor: pointer;
                }
            }
            .title{
                margin: -7px 0 4px;
                display: inherit;
                font-size: 18px;
                font-weight: 700;
                line-height: 1.5;
            }
            .title:hover{
                text-decoration: underline;
                cursor: pointer;
            }
            .title:visited {
                color: #969696;
            }
            .abstract{
                margin: 0 0 8px;
                font-size: 13px;
                line-height: 24px;
            }
            .meta{
                padding-right: 0!important;
                font-size: 12px;
                font-weight: 400;
                line-height: 20px;
                a.num{
                    transition: .1s ease-in;
                    -webkit-transition: .1s ease-in;
                    -moz-transition: .1s ease-in;
                    -o-transition: .1s ease-in;
                    -ms-transition: .1s ease-in;
                    /*margin-right: 10px;*/
                    margin-left: 10px;
                    color: #b4b4b4;
                    i{
                        font-size: 12px;
                    }
                }
                a:hover{
                    color: #333333;
                    cursor: pointer;
                }
                .collection-tag {
                    display: inline-block;
                    padding: 3px 6px;
                    margin-top: -1px;
                    max-width: 200px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    line-height: 1;
                    vertical-align: middle;
                    color: #ea6f5a!important;
                    border: 1px solid rgba(236,97,73,.7);
                    border-radius: 3px;

                    transition: .1s ease-in;
                    -webkit-transition: .1s ease-in;
                    -moz-transition: .1s ease-in;
                    -o-transition: .1s ease-in;
                    -ms-transition: .1s ease-in;
                }
                .collection-tag:hover{
                    cursor: pointer;
                    color: #ec6149!important;
                    background-color: rgba(236,97,73,.05);
                    border-color: #ec6149
                }
            }
        }
    }
</style>
