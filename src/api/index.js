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

// 文章 - 点赞
export function likeDetailAPI (target) {
  return request({
    url: '/v1_0/article/likings',
    method: 'post',
    data: {
      target
    }
  })
}

// 文章 - 取消点赞
export function unLikeDetaileAPI (target) {
  return request({
    url: `/v1_0/article/likings/${target}`,
    method: 'delete'
  })
}

// 我的 - 获取用户基本资料
export function getUserAPI () {
  return request({
    url: '/v1_0/user'
  })
}

// 获取用户个人简介
export function getUserPorfileAPI () {
  return request({
    url: '/v1_0/user/profile'
  })
}

// 上传用户头像
export function uploadImagesAPI (data) {
  return request({
    url: '/v1_0/user/photo',
    method: 'patch',
    data
  })
}

// 更新用户信息
export function changeUserAPI ({ name, birthday }) {
  return request({
    url: '/v1_0/user/profile',
    method: 'patch',
    data: {
      name,
      birthday
    }
  })
}
