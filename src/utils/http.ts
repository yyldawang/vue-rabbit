import axios from 'axios'
import type { 
  InternalAxiosRequestConfig,
  AxiosResponse
} from 'axios';


const http = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// axios 请求拦截器
http.interceptors.request.use((config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  return config
}, e => Promise.reject(e))

// axios 响应拦截器
http.interceptors.response.use(
  (res: AxiosResponse): AxiosResponse => {
    return res.data
  },
  e => {
  return Promise.reject(e)
})


export default http