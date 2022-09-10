module.exports = {
  tabWidth: 2,
  jsxSingleQuote: true,
  jsxBracketSameLine: true,
  printWidth: 100,
  // 单引号
  singleQuote: true,
  // 去除分号
  semi: true,
  // 空格
  bracketSpacing: true,
  // 去掉逗号
  trailingComma: "none",
  overrides: [
    {
      files: "*.json",
      options: {
        printWidth: 200,
      },
    },
  ],
  arrowParens: "always",
};
