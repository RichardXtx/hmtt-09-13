import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime' // 到指定时间需要的插件
import 'dayjs/locale/zh' // 集成中文

dayjs.extend(relativeTime)
dayjs.locale('zh')

/**
 * .....多久之前
 * @param {*} 之前的时间
 * @returns 系统时间到之前指定时间的距离值
 */
export const formatTimerApi = (time) => {
  // const a = new Date()
  return dayjs().to(dayjs(time)) // 返回多久之前...
}
