import LQRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/cache'

const lqRequst = new LQRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getCache('token')

      if (token) {
        // config.headers?.Authorzation = `Bearer ${token}`
        config.headers && (config.headers.Authorzation = `Bearer ${token}`)
      }
      console.log('请求成功的拦截')

      return config
    },
    requestInterceptorCatch: (error) => {
      console.log('请求失败的拦截')
      return error
    },
    responceInterceptor: (res) => {
      console.log('响应成功的拦截')

      return res
    },
    responceInterceptorCatch: (error) => {
      console.log('响应失败的拦截')
      return error
    }
  }
})

export default lqRequst
