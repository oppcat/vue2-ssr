
import api from './create-api-server.js'

export default {
    get (url, params) {
        return new Promise((resolve, reject) => {
            api.get(url, params).then((info) => {
                resolve(info)
            }).catch((info) => {
                reject(info)
            })
        })
    },
    post (url, params) {
        return new Promise((resolve, reject) => {
            api.post(url, params).then((info) => {
                resolve(info)
            }).catch((info) => {
                reject(info)
            })
        })
    }
}
