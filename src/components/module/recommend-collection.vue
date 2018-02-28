<template>
    <div class="recommend-collection">
        <a href="/" class="kid" v-for="item in list">
            <i class="iconfont icon-iconfonttag"></i>
            <div class="name">{{item}}</div>
        </a>
        <a href="/" class="more">
            更多分类
            <i class="iconfont icon-gengduo"></i>
        </a>
    </div>
</template>

<script>
  export default {
    name: 'recommend-collection',
    data() {
      return {
        list: [
          'JavaScript',
          'Node.js',
          'PHP',
          'Java',
          'CentOS',
        ]
      }
    },
    components: {},
    computed: {},
    mounted() {

    }
  }
</script>

<style scoped lang="less">
    .recommend-collection{
        /*float: right;*/
        width: 350px;
        margin-bottom: 20px;
        max-height: 300px;
        overflow: hidden;
        .kid{
            display: inline-block;
            margin: 0 18px 18px 0;
            min-height: 32px;
            line-height: 32px;
            background-color: #f7f7f7;
            border: 1px solid #dcdcdc;
            border-radius: 4px;
            vertical-align: top;
            overflow: hidden;
            position: relative;
            > i{
                margin-left: 6px;
                position: absolute;
            }
            .name{
                display: inline-block;
                padding: 0 11px 0 4px;
                font-size: 16px;
                margin-left: 22px;
            }
        }
        .more{
            font-size: 16px;
            min-height: 32px;
            line-height: 32px;
        }
    }
</style>
