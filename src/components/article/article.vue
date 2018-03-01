<template>
    <div>
        <navBar></navBar>
        <div class="note">
            <div class="post">
                <div class="article">
                    <h1 class="title">{{content.title}}</h1>
                    <div class="author">
                        <div class="avatar">
                            <img src="https://api.webascii.cn/default_head.png" alt="">
                        </div>
                        <div class="info">
                            <div class="name">
                                <a>{{user.nickname}}</a>
                            </div>
                            <div class="meta">
                                <span class="publish-time">{{content.cTime}}</span>
                                <span class="views-count">阅读 {{content.views}}</span>
                                <span class="comments-count">评论 {{feedback.length}}</span>
                                <!--<span class="likes-count">喜欢 99</span>-->
                            </div>
                        </div>
                    </div>
                    <div class="show-content">
                        <!--<div id="editor">-->
                            <!--<textarea :value="input" @input="update"></textarea>-->
                            <!--<div v-html="compiledMarkdown"></div>-->
                        <!--</div>-->
                        <!--<mavon-editor v-model="value" data-server-rendered="false"/>-->
                        <!-- Code Block -->
                        <highlight-code lang="javascript">
                            let str = 'Hello, World!';
                            console.log(str);
                        </highlight-code>

                        <highlight-code lang="javascript">
                            let str = 'Hello, World!';
                            console.log(str);
                        </highlight-code>

                        <!-- Inline Code Block -->
                        <highlight-code lang="javascript" inline>alert('Hello, World!');</highlight-code>
                        <div class="describe" v-if="content.describe != ''">
                            {{content.describe}}
                        </div>
                        <div class="content tof" v-html="content.content">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import navBar from '../../components/common/navBar.vue'
  import Vue from 'vue';
  //代码高亮插件
  import VueHighlightJS from 'vue-highlight.js';
  Vue.use(VueHighlightJS);
//富文本编辑器 markdown 编辑器
//import mavonEditor from 'mavon-editor'
//Vue.use(mavonEditor);


  export default {
    name: 'article',
    meta: `
            <meta charset="utf-1238">
          `,
//    script:'<script src="/dist/0.js"><\/script>',
    data() {
      return {
        value: ''
      }
    },
    components: {
      navBar,
    },
    computed: {
      //文章内容
      content() {
        return this.$store.state.api.articleDetail.content
      },
      //相关用户信息
      user () {
        return this.$store.state.api.articleDetail.user
      },
      //文章评论信息
      feedback () {
        return this.$store.state.api.articleDetail.feedback
      }
    },
    mounted() {
      this.$nextTick(() => {

      })
    },
//    //预请求
    asyncData({store, route: { params: { id }}}) {
      return store.dispatch('requireApi', {
        name: 'articleDetail',
        data: {
          id:id
        },
        method: 'post',
        key: 'articleDetail',
        success(info) {
          info.data.content.cTime = new Date(info.data.content.cTime).Format('yyyy-MM-dd hh:mm');
          return info.data
        },
        error(err) {
          console.log(err)
        }
      })
    }
  }
</script>

<style scoped lang="less">
    @import '~highlight.js/styles/default.css';
    /*@import "../../../assets/SyntaxHighlighter/shCoreDefault.css";*/
    /*@import '~mavon-editor/dist/css/index.css';*/
    .note{
        position: relative;
        /*padding-top: 10px;*/
        .post{
            margin: 0 auto;
            padding-top: 20px;
            padding-bottom: 40px;
            width: 820px;
            .article{
                .title{
                    word-break: break-word!important;
                    word-break: break-all;
                    margin: 20px 0 0;
                    font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
                    font-size: 34px;
                    font-weight: 700;
                    line-height: 1.3;
                }
                .author {
                    margin: 30px 0 0px;
                    .avatar{
                        width: 48px;
                        height: 48px;
                        vertical-align: middle;
                        display: inline-block;
                        cursor: pointer;
                        img {
                            width: 100%;
                            height: 100%;
                            border: 1px solid #ddd;
                            border-radius: 50%;
                            vertical-align: middle;
                        }
                    }
                    .info {
                        vertical-align: middle;
                        display: inline-block;
                        margin-left: 8px;
                        .name {
                            margin-right: 3px;
                            font-size: 16px;
                            vertical-align: middle;
                        }
                    }
                    .meta {
                        margin-top: 5px;
                        font-size: 12px;
                        color: #969696;
                        span {
                            padding-right: 8px;
                        }
                    }
                }
                .show-content {
                    color: #2f2f2f;
                    word-break: break-word!important;
                    word-break: break-all;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 1.7;
                    .describe{
                        padding-top: 40px;
                    }
                    .content{
                        padding-top: 40px;
                    }
                }
            }
        }
    }
</style>
