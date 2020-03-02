module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-multiple-empty-lines': ['error', { 'maxBOF': 1, 'max': 2, 'maxEOF': 5 }], // 限制文件连续空行数量、开头、结尾空行数量。
    'semi': ['error', 'always'],
    'semi-spacing': 0
  },
  parserOptions: {
    parser: 'babel-eslint',
    allowImportExportEverywhere: true // 解决import必须在顶部引入的问题
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
};

/* 具体规则（rules）
    "off" 或 0 - 关闭规则
    "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
    "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)

    常用rule配置选项如下：
    =================================================================================
          配置                                    说明
    ---------------------------------------------------------------------------------
    "indent": ["error",2],             开启"error"缩进格式，此处为2个空格
    ---------------------------------------------------------------------------------

    ---------------------------------------------------------------------------------
    =================================================================================
  */
