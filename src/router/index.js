import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const index = () => import('../components/index.vue');
const writer = () => import('../components/writer/writer.vue');
const article = () => import('../components/article/article.vue');
// const recommendContent = () => import('../components/module/recommend-content.vue');
export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', component: index },
      { path: '/writer', component: writer },
      { path: '/article/:id', component: article },
      // { path: '/recommend-content', component: recommendContent }
    ]
  })
}
