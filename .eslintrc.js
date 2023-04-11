module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    extends: [
        // 集成了哪些规则，别人写好的规则直接拿来用
        "eslint:recommended",
      ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        // 我们自定义的规则写在这里
        "prettier/prettier": [
            "error",
            {
            singleQuote: false, // 使用单引号
            semi: false, // 末尾添加分号
            tabWidth: 2,
            trailingComma: "none",
            useTabs: false,
            endOfLine: "auto"
            }
        ]
    }
};
