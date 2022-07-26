import axios from 'axios'
import type { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios'
// import type { LQRequestConfig, LQRequestInterceptors } from './type'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'
import { ElLoading } from 'element-plus'

interface InterceptorHooks {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responceInterceptor?: (response: AxiosResponse) => AxiosResponse
  responceInterceptorCatch?: (error: any) => any
}

interface LQRequestConfig extends AxiosRequestConfig {
  showLoading?: boolean
  interceptorHooks?: InterceptorHooks
}

interface LQData<T> {
  data: T,
  returnCode: string,
  success: boolean
}

const DEFALUT_LOAIDNG = true

class LQRequest {
  config: AxiosRequestConfig
  instance: AxiosInstance
  interceptorHooks?: InterceptorHooks
  showLoading: boolean
  loading?: LoadingInstance

  constructor(options: LQRequestConfig) {
    this.config = options
    this.showLoading = options.showLoading ?? DEFALUT_LOAIDNG
    this.interceptorHooks = options.interceptorHooks
    this.instance = axios.create(options)
    this.setupInterceptor()



  }
  setupInterceptor(): void {
    this.instance.interceptors.request.use(
      this.interceptorHooks?.requestInterceptor,
      this.interceptorHooks?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptorHooks?.responceInterceptor,
      this.interceptorHooks?.responceInterceptorCatch
    )

    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: 'loading',
            spinner:'el-icon-loading',
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
        this.loading?.close()
        return result
      },
      (error) => {
        this.loading?.close()
        console.log('公有拦截器，响应失败拦截')
        return error
      }
    )
  }

  request<T = any>(config: LQRequestConfig): Promise<T> {
    if (!config.showLoading) {
      this.showLoading = false
    }
//request<T = any, R = AxiosResponse<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R>;
    return new Promise((reslove, rejects) => {
      this.instance
        .request<any, AxiosResponse<LQData<T>> , any>(config)
        .then((res) => {
          reslove(res.data.data)
          this.showLoading = DEFALUT_LOAIDNG
        })
        .catch((error) => {
          this.showLoading = DEFALUT_LOAIDNG
          rejects(error)
        })
    })
  }

  get<T = any>(config: LQRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T = any>(config: LQRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T = any>(config: LQRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  upload<T = any>(config: LQRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'UPLOAD' })
  }
}

export default LQRequest
