/*
 * @Descripttion:
 * @version:
 * @Author: zhaopan
 * @Date: 2021-05-09 10:33:25
 * @LastEditors: zhaopan
 * @LastEditTime: 2021-05-10 14:15:46
 */
import Axios from 'axios'
import { ElMessage } from 'element-plus'

const baseURL = 'https://api.github.com'

const axios = Axios.create({
  baseURL,
  timeout: 20000
})

axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
)

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status
      const msg = error.response.data.message
      ElMessage.error(`Code: ${code}, Message: ${msg}`)
      console.error('[Axios Error]', error.response)
    } else {
      ElMessage.error(`${error}`)
    }
    return Promise.reject(error)
  }
)

// 封装get、put请求，并导出
