import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
        apiPath: 'http://localhost:8888/',
        //api数据
        api: {},
    },
    actions,
    mutations,
    getters
  })
}
