import api from '../api'
import apiList from './apiList'
export default {
  //请求接口
  requireApi: ({ commit, state }, { url, name, method, data, key, success, error }) => {
      console.log(state.apiPath+apiList[name])
      // 自动处理url
      let path = ''
      if(!!url){
          path = url;
      }else if (!!name && !!apiList[name]) {
          path = state.apiPath+apiList[name]
      }
      // 默认get请求
      // 限制类型为 get、post
      let type = 'get';
      if(!!method && typeof method == 'string'){
          if(method.toLowerCase() === 'get' || method.toLowerCase() === 'post'){
              type = method;
          }
      }
      return state.api[key]
      ? Promise.resolve(state.api[key])
      : api[type](path, data).then((info) => {
          commit('setApiData', {key:key, data:success ? success(info) : info})
      }).catch((err) => {
          error ? error(err) : ''
      })
  }
}
