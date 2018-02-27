import Vue from 'vue'

export default {
  // 存储api data数据
  setApiData: (state, { key, data }) => {
      state.api[key] = data
  },
}
