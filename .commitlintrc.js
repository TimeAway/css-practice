module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 100],
    // 提交类型，必填
    'type-empty': [2, 'never'],
    // 提交类型列表
    'type-enum': [
      2,
      'always',
      [
        'build', // 影响构建系统或外部依赖项的更改，如：gulp, broccoli, npm 等
        'ci', // CI配置文件及脚本的修改
        'docs', // 文档修改
        'feat', // 新功能
        'fix', // bug修复
        'perf', // 改进性能的代码修改
        'refactor', // 代码重构，既不修正错误，也不增加功能的修改
        'revert', // 代码版本还原
        'style', // 不影响代码的更改，比如空白、格式、缺少分号等
        'test', // 添加测试或修改测试功能
      ],
    ],
    // 提交类型大小写
    'type-case': [2, 'always', 'lower-case'],
    // 提交范围大小写
    'scope-case': [2, 'always', 'lower-case'],
    // 提交主题
    'subject-empty': [2, 'never'],
    // 提交主题大小写
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-full-stop': [2, 'never', '.'],
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
  },
};
