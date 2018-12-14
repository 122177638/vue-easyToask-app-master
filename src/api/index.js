// 接口地址
let baseUrl = ''
if (process.env.NODE_ENV === 'production') {
  // 干一些线上才要做的事情
  baseUrl = 'www.baidu.com'
}
if (process.env.NODE_ENV === 'development') {
  // 干一些测试时不可告人的事情
  baseUrl = 'http://localhost:8080/#'
}
// 登录接口
export const login = (() => { return baseUrl + '/users/api/login' })()
