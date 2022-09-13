// 本地token 的 存取删
const TOKENKEY = 'token-key'

// 存
export function setToken (token) {
  return localStorage.setItem(TOKENKEY, token)
}

// 取
export function getToken () {
  return localStorage.getItem(TOKENKEY)
}

// 删
export function removeToken () {
  return localStorage.removeItem(TOKENKEY)
}
