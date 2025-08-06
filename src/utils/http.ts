import axios, { type AxiosInstance, type InternalAxiosRequestConfig, type AxiosResponse } from 'axios';

// 通用接口响应类型
export interface ApiResponse<T = any> {
  code: string;
  msg: string;
  result: T;
}

// 创建 axios 实例
const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => config,
  (error) => Promise.reject(error)
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse<ApiResponse<any>>): AxiosResponse<ApiResponse<any>> => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);


// 创建简化响应的请求方法
export const http = {
  get: <T>(url: string, config?: any ): Promise<ApiResponse<T>> => {
    return axiosInstance.get<ApiResponse<T>>(url, config).then(response => response.data);
  },
  post: <T>(url: string, data?: any, config?: any): Promise<ApiResponse<T>> => {
    return axiosInstance.post<ApiResponse<T>>(url, data, config).then(response => response.data);
  },
  put: <T>(url: string, data?: any, config?: any): Promise<ApiResponse<T>> => {
    return axiosInstance.put<ApiResponse<T>>(url, data, config).then(response => response.data);
  },
  delete: <T>(url: string, config?: any): Promise<ApiResponse<T>> => {
    return axiosInstance.delete<ApiResponse<T>>(url, config).then(response => response.data);
  }
};

export default http;