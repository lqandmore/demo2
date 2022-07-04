import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface LQRequestInterceptors<T = AxiosResponse> {
  requestInterceptor: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responceInterceptor?: (responce: T) => T
  responceInterceptorCatch?: (error: any) => any
}

export interface LQRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: LQRequestInterceptors<T>
  showLoading?: boolean
}
