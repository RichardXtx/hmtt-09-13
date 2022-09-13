// 接口函数
import request from '@/utils/request'

// 接口方法, 只负责调用一个接口, 返回一个Promise对象
export const fetchAllChannels = () => {
  return request({
    url: '/v1_0/channels'
  })
}
