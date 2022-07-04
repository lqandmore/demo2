import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { LQRequestConfig, LQRequestInterceptors } from './type'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'
import { ElLoading } from 'element-plus'
import { text } from 'stream/consumers'
import { request } from 'http'
import { rejects } from 'assert'

const DEFALUT_LOAIDNG = true

class LQRequest {
  instance: AxiosInstance
  interceptors?: LQRequestInterceptors
  showLoading: boolean
  loading?: LoadingInstance
  constructor(config: LQRequestConfig) {
    this.instance = axios.create(config)

    this.showLoading = config.showLoading ?? DEFALUT_LOAIDNG
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responceInterceptor,
      this.interceptors?.responceInterceptorCatch
    )

    this.instance.interceptors.request.use(
      (config) => {
        console.log('公有拦截器，请求成功拦截')
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据。。。。',
            background: 'rgba(0,0,0,0.5)'
          })
        }
        return config
      },
      (err) => {
        console.log('公有拦截器，请求失败拦截')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (result) => {
        console.log('公有拦截器，响应成功拦截')
        this.loading?.close()
        const data = result.data
        if (data.returnCode === '-1001') {
          console.log('请求失败')
        } else {
          return data
        }
      },
      (error) => {
        this.loading?.close()
        console.log('公有拦截器，响应失败拦截')
        return error
      }
    )
  }
  request<T>(config: LQRequestConfig<T>): Promise<T> {
    return new Promise((reslove, rejects) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responceInterceptor) {
            res = config.interceptors.responceInterceptor(res)
          }
          this.showLoading = DEFALUT_LOAIDNG

          reslove(res)
        })
        .catch((error) => {
          this.showLoading = DEFALUT_LOAIDNG
          rejects(error)
          return error
        })
    })
  }

  get<T>(config: LQRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: LQRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: LQRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  upload<T>(config: LQRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'UPLOAD' })
  }
}

export default LQRequest
