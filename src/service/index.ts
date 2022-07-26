import LQRequest from './request/request'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/cache'

const lqRequst = new LQRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptorHooks: {
    requestInterceptor: (config) => {
      const token = localCache.getCache('token')

      // const token =
      //   'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImNvZGVyd2h5Iiwicm9sZSI6eyJpZCI6MSwibmFtZSI6Iui2hee6p-euoeeQhuWRmCJ9LCJpYXQiOjE2NTg4MjI3MjcsImV4cCI6MTY2MTQxNDcyN30.frSKXq0VAYcmFZLQlbY4oTyrSqc6---Hoh1WWfUY4_GxYXQwHNRs-OFZVFElwyL1UB-_wfT1Yw1CvZ4TWe9CzdL2SV9kdse8fajq3Z--HC2rxFVNTpRLnwBxjNvvbdNWzhTkKK2J8Yv2--4afnwd5dZXQr5lf_71oVLlO9rh-5Y'
      if (token) {
        // config.headers.Authorzation = `Bearer ${token}`
        config.headers && (config.headers.Authorzation = `Bearer ${token}`)
      }
      return config
    },
    requestInterceptorCatch: (error) => {
      console.log('请求失败的拦截')
      return error
    },
    responceInterceptor: (res) => {
      return res
    },
    responceInterceptorCatch: (error) => {
      console.log('响应失败的拦截')
      return error
    }
  }
})

export default lqRequst
