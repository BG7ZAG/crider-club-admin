import request from '@/utils/request'

// 获取验证码
export function verify(data) {
  return request({
    url: '/api/v1/verify?' + Date.now(),
    method: 'get',
    params: data
  })
}
