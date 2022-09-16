// 接口函数
import request from '@/utils/request'

// 接口方法, 只负责调用一个接口, 返回一个Promise对象
export const fetchAllChannels = () => {
  return request({
    url: '/v1_0/channels'
  })
}

/**
 * 登录接口
 * @param {*} param0 mobile 和 code 是要传的参数名
 * @returns
 */
export function fetchLogin ({ mobile, code }) {
  return request({
    url: '/v1_0/authorizations',
    method: 'post',
    data: {
      mobile,
      code
    }
  })
}

// 获取所有频道列表
export function getchGetchannels () {
  return request({
    url: '/v1_0/channels'
  })
}

// 文章 - 获取列表
export const articlesListAPI = ({ channelId, timestamp }) => {
  return request({
    url: '/v1_0/articles',
    params: {
      channel_id: channelId,
      timestamp
    }
  })
}

// 文章 - 文章详情
export function articleDetailAPI (id) {
  return request({
    url: `/v1_0/articles/${id}`
  })
}

//  文章 - 关注
export function fetchAllowAPI (target) {
  return request({
    url: '/v1_0/user/followings',
    method: 'post',
    data: {
      target
    }
  })
}

// 文章 - 取关
export function fetchUnAllowAPI (target) {
  return request({
    url: `/v1_0/user/followings/${target}`,
    method: 'delete'
  })
}
