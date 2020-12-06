module.exports = {
  extends: [
    // 通用的标准的样式语法规则库
    'stylelint-config-standard',
    // 样式顺序规则库
    'stylelint-config-rational-order',
    // 关闭与 prettier 冲突的规则
    'stylelint-config-prettier',
  ],
  plugins: [
    // 用于检查样式顺序
    'stylelint-order',
    // 用于检查是否存在无作用的样式
    // 比如 display: inline; width: 120px;
    // 其中 width 就是无作用属性
    'stylelint-declaration-block-no-ignored-properties',
  ],
  rules: {
    // 开启无作用属性检查
    'plugin/declaration-block-no-ignored-properties': true,
  },
  ignoreFiles: ['node_modules'],
};
