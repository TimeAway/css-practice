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
    // 取消注释前必须空一行的规则
    'comment-empty-line-before': null,
    // 关闭此规则，因为会导致如下情况报错
    // .link { & { ... } }
    'no-descending-specificity': null,
    // 取消声明后必须空一行的规则
    'declaration-empty-line-before': null,
  },
  ignoreFiles: ['node_modules'],
};
