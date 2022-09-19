// 按需引入所有用到的vant组件
import {
  Button, NavBar, CellGroup, Cell,
  Image, Dialog, Popup, Form, Field,
  Tabs, Tabbar, TabbarItem, Tab,
  PullRefresh, List, Divider, Tag, Search
} from 'vant'

const vantComponentList = [
  Button, NavBar, CellGroup, Cell, Image,
  Dialog, Popup, Form, Field, Tabs, Tabbar,
  TabbarItem, Tab, PullRefresh, List, Divider,
  Tag, Search
]
export const vantPlugin = {
  install (Vue) {
    vantComponentList.forEach(component => {
      Vue.use(component)
    })
  }
}
