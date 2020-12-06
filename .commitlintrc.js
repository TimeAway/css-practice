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
      ['fix', 'feat', 'feature', 'docs', 'refactor', 'revert', 'style', 'chore', 'test'],
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
