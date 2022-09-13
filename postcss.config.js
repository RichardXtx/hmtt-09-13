module.exports = {
  plugins: {
    'postcss-pxtorem': {
      // 能够把所有元素的px单位转成Rem
      // rootValue: 转换px的基准值。
      // 1rem = 37.5px
      rootValue: 37.5,
      // 需要转化哪些css属性的单位  width height padding....
      propList: ['*']
    }
  }
}
